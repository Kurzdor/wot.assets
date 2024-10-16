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
            527: (e, t, n) => {
                'use strict';
                n.r(t),
                    n.d(t, { mouse: () => c, off: () => r, on: () => o, onResize: () => i, onScaleUpdated: () => u });
                var a = n(2472),
                    s = n(1176);
                const i = (0, a.E)('clientResized'),
                    u = (0, a.E)('self.onScaleUpdated'),
                    o = (e, t) => engine.on(e, t),
                    r = (e, t) => engine.off(e, t),
                    l = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') },
                    c = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && (0, s.R)(!1);
                        }
                        function n() {
                            e.enabled && (0, s.R)(!0);
                        }
                        function a() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', t),
                                      document.body.removeEventListener('mouseleave', n))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', t),
                                      document.body.addEventListener('mouseleave', n))
                                : (0, s.R)(!1);
                        }
                        const i = ['down', 'up', 'move'].reduce(
                            (t, n) => (
                                (t[n] = (function (t) {
                                    return (n) => {
                                        e.listeners += 1;
                                        let s = !0;
                                        const i = `mouse${t}`,
                                            u = l[t]((e) => n([e, 'outside']));
                                        function o(e) {
                                            n([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(i, o),
                                            a(),
                                            () => {
                                                s &&
                                                    (u(),
                                                    window.removeEventListener(i, o),
                                                    (e.listeners -= 1),
                                                    a(),
                                                    (s = !1));
                                            }
                                        );
                                    };
                                })(n)),
                                t
                            ),
                            {},
                        );
                        return Object.assign({}, i, {
                            disable() {
                                (e.enabled = !1), a();
                            },
                            enable() {
                                (e.enabled = !0), a();
                            },
                            enableOutside() {
                                e.enabled && (0, s.R)(!0);
                            },
                            disableOutside() {
                                e.enabled && (0, s.R)(!1);
                            },
                        });
                    })();
            },
            5959: (e, t, n) => {
                'use strict';
                n.r(t),
                    n.d(t, {
                        events: () => a,
                        getMouseGlobalPosition: () => u,
                        getSize: () => i,
                        graphicsQuality: () => o,
                        playSound: () => s.G,
                        setRTPC: () => s.E,
                    });
                var a = n(527),
                    s = n(2493);
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function u(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, n) => {
                'use strict';
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                n.d(t, { R: () => a });
            },
            2493: (e, t, n) => {
                'use strict';
                function a(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function s(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                n.d(t, { E: () => s, G: () => a });
            },
            2472: (e, t, n) => {
                'use strict';
                function a(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                n.d(t, { E: () => a });
            },
            3138: (e, t, n) => {
                'use strict';
                n.d(t, { O: () => i });
                var a = n(5959),
                    s = n(514);
                const i = { view: n(7641), client: a, sound: s.ZP };
            },
            514: (e, t, n) => {
                'use strict';
                n.d(t, { ZP: () => u });
                var a = n(5959);
                const s = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    i = Object.keys(s).reduce((e, t) => ((e[t] = () => (0, a.playSound)(s[t])), e), {}),
                    u = { play: Object.assign({}, i, { sound: a.playSound }), setRTPC: a.setRTPC };
            },
            3722: (e, t, n) => {
                'use strict';
                function a(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function s(e, t, n) {
                    return `url(${a(e, t, n)})`;
                }
                n.r(t), n.d(t, { getBgUrl: () => s, getTextureUrl: () => a });
            },
            6112: (e, t, n) => {
                'use strict';
                n.d(t, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, n) => {
                'use strict';
                n.d(t, { U: () => s });
                var a = n(2472);
                const s = {
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
            7641: (e, t, n) => {
                'use strict';
                n.r(t),
                    n.d(t, {
                        addModelObserver: () => _,
                        addPreloadTexture: () => r,
                        children: () => a,
                        displayStatus: () => s.W,
                        displayStatusIs: () => B,
                        events: () => i.U,
                        extraSize: () => y,
                        forceTriggerMouseMove: () => F,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => S,
                        getScale: () => E,
                        getSize: () => m,
                        getViewGlobalPosition: () => b,
                        isEventHandled: () => D,
                        isFocused: () => v,
                        pxToRem: () => h,
                        remToPx: () => f,
                        resize: () => p,
                        sendEvent: () => u.qP,
                        setAnimateWindow: () => A,
                        setEventHandled: () => C,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => w,
                    });
                var a = n(3722),
                    s = n(6112),
                    i = n(6538),
                    u = n(8566);
                const o = 15;
                function r(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, o);
                }
                function c(e, t, n, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, a);
                }
                function _(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, o);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function p(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function b(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: f(t.x), y: f(t.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function E() {
                    return viewEnv.getScale();
                }
                function h(e) {
                    return viewEnv.pxToRem(e);
                }
                function f(e) {
                    return viewEnv.remToPx(e);
                }
                function A(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function v() {
                    return viewEnv.isFocused();
                }
                function C() {
                    return viewEnv.setEventHandled();
                }
                function D() {
                    return viewEnv.isEventHandled();
                }
                function F() {
                    viewEnv.forceTriggerMouseMove();
                }
                function S() {
                    return viewEnv.getShowingStatus();
                }
                const B = Object.keys(s.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === s.W[t]), e),
                        {},
                    ),
                    y = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    w = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, n) => {
                'use strict';
                n.d(t, { qP: () => i });
                const a = ['args'],
                    s = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                u = (function (e, t) {
                                    if (null == e) return {};
                                    var n = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (t.indexOf(a) >= 0) continue;
                                            n[a] = e[a];
                                        }
                                    return n;
                                })(t, a);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, u, {
                                          arguments:
                                              ((s = i),
                                              Object.entries(s).map(([e, t]) => {
                                                  const n = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: n, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: n, name: e, bool: t };
                                                      default:
                                                          return { __Type: n, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, u));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var s;
                    },
                    i = {
                        close(e) {
                            s('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            s(64);
                        },
                        move(e) {
                            s(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, t, n) => {
                'use strict';
                let a, s;
                n.d(t, { n: () => a }),
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
                    })(s || (s = {}));
            },
            1358: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => i });
                var a = n(3138);
                class s {
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
                        return window.__dataTracker || (window.__dataTracker = new s()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, t, n = 0, s = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const i = a.O.view.addModelObserver(e, n, s);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = t),
                                  n > 0 && (this._views[n] ? this._views[n].push(i) : (this._views[n] = [i])))
                                : console.error("Can't add callback for model:", e),
                            i
                        );
                    }
                    removeCallback(e, t = 0) {
                        let n = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((n = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            n || console.error("Can't remove callback by id:", e),
                            n
                        );
                    }
                    _emmitDataChanged(e, t, n) {
                        n.forEach((n) => {
                            const a = this._callbacks[n];
                            void 0 !== a && a(e, t);
                        });
                    }
                }
                s.__instance = void 0;
                const i = s;
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
            9916: (e, t, n) => {
                'use strict';
                n.d(t, {
                    Sw: () => i.Z,
                    B3: () => l,
                    Gr: () => c,
                    Z5: () => u.Z5,
                    B0: () => o,
                    c9: () => A,
                    ry: () => h,
                    Eu: () => f,
                });
                class a {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: n }) => {
                                    let a = e.target;
                                    do {
                                        if (a === t) return;
                                        a = a.parentNode;
                                    } while (a);
                                    n();
                                });
                            });
                    }
                    static get instance() {
                        return a.__instance || (a.__instance = new a()), a.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const n = e,
                            a = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== n || t !== a)),
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
                const s = a;
                var i = n(1358),
                    u = n(8613);
                let o;
                var r;
                ((r = o || (o = {}))[(r.UNDEFINED = 0)] = 'UNDEFINED'),
                    (r[(r.TOOLTIP = 1)] = 'TOOLTIP'),
                    (r[(r.POP_OVER = 2)] = 'POP_OVER'),
                    (r[(r.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (r[(r.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (r[(r.MOVE = 16)] = 'MOVE'),
                    (r[(r.CLOSE = 32)] = 'CLOSE'),
                    (r[(r.MINIMIZE = 64)] = 'MINIMIZE');
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = n(5521),
                    p = n(3138);
                const b = ['args'];
                function g(e, t, n, a, s, i, u) {
                    try {
                        var o = e[i](u),
                            r = o.value;
                    } catch (e) {
                        return void n(e);
                    }
                    o.done ? t(r) : Promise.resolve(r).then(a, s);
                }
                const E = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                        n = arguments;
                                    return new Promise(function (a, s) {
                                        var i = e.apply(t, n);
                                        function u(e) {
                                            g(i, a, s, u, o, 'next', e);
                                        }
                                        function o(e) {
                                            g(i, a, s, u, o, 'throw', e);
                                        }
                                        u(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    f = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    A = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const s = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (t.indexOf(a) >= 0) continue;
                                            n[a] = e[a];
                                        }
                                    return n;
                                })(t, b);
                            void 0 !== s
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
                                          arguments:
                                              ((a = s),
                                              Object.entries(a).map(([e, t]) => {
                                                  const n = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          n.number = t;
                                                          break;
                                                      case 'boolean':
                                                          n.bool = t;
                                                          break;
                                                      default:
                                                          n.string = t.toString();
                                                  }
                                                  return n;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, i));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var a;
                    },
                    v = () => A(o.CLOSE),
                    C = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var D = n(7572);
                const F = s.instance,
                    S = {
                        DataTracker: i.Z,
                        ViewModel: D.Z,
                        ViewEventType: o,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: _,
                        DateFormatType: d,
                        makeGlobalBoundingBox: E,
                        sendMoveEvent: (e) => A(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: v,
                        sendClosePopOverEvent: () => A(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            A(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, a, s = R.invalid('resId'), i) => {
                            const u = p.O.view.getViewGlobalPosition(),
                                r = n.getBoundingClientRect(),
                                l = r.x,
                                c = r.y,
                                _ = r.width,
                                d = r.height,
                                m = {
                                    x: p.O.view.pxToRem(l) + u.x,
                                    y: p.O.view.pxToRem(c) + u.y,
                                    width: p.O.view.pxToRem(_),
                                    height: p.O.view.pxToRem(d),
                                };
                            A(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: s,
                                direction: t,
                                bbox: E(m),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => C(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            C(e, v);
                        },
                        handleViewEvent: A,
                        onBindingsReady: h,
                        onLayoutReady: f,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                        dumpViewModel: function e(t) {
                            const n = {};
                            if ('object' != typeof t) return t;
                            for (const a in t)
                                if (Object.prototype.hasOwnProperty.call(t, a)) {
                                    const s = Object.prototype.toString.call(t[a]);
                                    if (s.startsWith('[object CoherentArrayProxy]')) {
                                        const s = t[a];
                                        n[a] = [];
                                        for (let t = 0; t < s.length; t++) n[a].push({ value: e(s[t].value) });
                                    } else
                                        s.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[a] = e(t[a]))
                                            : (n[a] = t[a]);
                                }
                            return n;
                        },
                        ClickOutsideManager: F,
                        SystemLocale: u.Z5,
                        UserLocale: u.cy,
                    };
                window.ViewEnvHelper = S;
            },
            8613: (e, t, n) => {
                'use strict';
                n.d(t, { Z5: () => a, cy: () => s });
                const a = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    s = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, n) => userLocale.getTimeFormat(e, t, void 0 === n || n),
                        getTimeString: (e, t, n) => userLocale.getTimeString(e, t, void 0 === n || n),
                    };
            },
            5969: (e, t, n) => {
                'use strict';
                var a = {};
                n.r(a),
                    n.d(a, {
                        Area: () => qs,
                        Bar: () => js,
                        DefaultScroll: () => Us,
                        Direction: () => Os,
                        defaultSettings: () => Rs,
                        useHorizontalScrollApi: () => Ls,
                    });
                var s = {};
                n.r(s), n.d(s, { Area: () => si, Bar: () => ti, Default: () => ai, useVerticalScrollApi: () => Vs });
                var i = n(6179),
                    u = n.n(i);
                const o = (e, t, n) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && n.extraLarge) ||
                          (t.largeHeight && n.large) ||
                          (t.mediumHeight && n.medium) ||
                          (t.smallHeight && n.small) ||
                          (t.extraSmallHeight && n.extraSmall)
                            ? e
                            : null
                        : e;
                var r = n(3138);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function _(e, t, n) {
                    const a = (function (e, t) {
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
                        })(e, n),
                        s = (function (e, t) {
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
                        })(t, n),
                        i = Math.min(a, s);
                    return {
                        extraLarge: i === n.extraLarge.weight,
                        large: i === n.large.weight,
                        medium: i === n.medium.weight,
                        small: i === n.small.weight,
                        extraSmall: i === n.extraSmall.weight,
                        extraLargeWidth: a === n.extraLarge.weight,
                        largeWidth: a === n.large.weight,
                        mediumWidth: a === n.medium.weight,
                        smallWidth: a === n.small.weight,
                        extraSmallWidth: a === n.extraSmall.weight,
                        extraLargeHeight: s === n.extraLarge.weight,
                        largeHeight: s === n.large.weight,
                        mediumHeight: s === n.medium.weight,
                        smallHeight: s === n.small.weight,
                        extraSmallHeight: s === n.extraSmall.weight,
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
                const d = r.O.client.getSize('rem'),
                    m = d.width,
                    p = d.height,
                    b = Object.assign({ width: m, height: p }, _(m, p, l)),
                    g = (0, i.createContext)(b),
                    E = ['children'],
                    h = (e) => {
                        let t = e.children,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, E);
                        const a = (0, i.useContext)(g),
                            s = a.extraLarge,
                            u = a.large,
                            r = a.medium,
                            l = a.small,
                            c = a.extraSmall,
                            _ = a.extraLargeWidth,
                            d = a.largeWidth,
                            m = a.mediumWidth,
                            p = a.smallWidth,
                            b = a.extraSmallWidth,
                            h = a.extraLargeHeight,
                            f = a.largeHeight,
                            A = a.mediumHeight,
                            v = a.smallHeight,
                            C = a.extraSmallHeight,
                            D = { extraLarge: h, large: f, medium: A, small: v, extraSmall: C };
                        if (n.extraLarge || n.large || n.medium || n.small || n.extraSmall) {
                            if (n.extraLarge && s) return t;
                            if (n.large && u) return t;
                            if (n.medium && r) return t;
                            if (n.small && l) return t;
                            if (n.extraSmall && c) return t;
                        } else {
                            if (n.extraLargeWidth && _) return o(t, n, D);
                            if (n.largeWidth && d) return o(t, n, D);
                            if (n.mediumWidth && m) return o(t, n, D);
                            if (n.smallWidth && p) return o(t, n, D);
                            if (n.extraSmallWidth && b) return o(t, n, D);
                            if (
                                !(
                                    n.extraLargeWidth ||
                                    n.largeWidth ||
                                    n.mediumWidth ||
                                    n.smallWidth ||
                                    n.extraSmallWidth
                                )
                            ) {
                                if (n.extraLargeHeight && h) return t;
                                if (n.largeHeight && f) return t;
                                if (n.mediumHeight && A) return t;
                                if (n.smallHeight && v) return t;
                                if (n.extraSmallHeight && C) return t;
                            }
                        }
                        return null;
                    };
                (h.defaultProps = {
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
                    (0, i.memo)(h);
                const f = (e) => {
                        const t = (0, i.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    A = ({ children: e }) => {
                        const t = (0, i.useContext)(g),
                            n = (0, i.useState)(t),
                            a = n[0],
                            s = n[1],
                            o = (0, i.useCallback)((e, t) => {
                                const n = r.O.view.pxToRem(e),
                                    a = r.O.view.pxToRem(t);
                                s(Object.assign({ width: n, height: a }, _(n, a, l)));
                            }, []),
                            c = (0, i.useCallback)(() => {
                                const e = r.O.client.getSize('px');
                                o(e.width, e.height);
                            }, [o]);
                        f(() => {
                            r.O.client.events.on('clientResized', o), r.O.client.events.on('self.onScaleUpdated', c);
                        }),
                            (0, i.useEffect)(
                                () => () => {
                                    r.O.client.events.off('clientResized', o),
                                        r.O.client.events.off('self.onScaleUpdated', c);
                                },
                                [o, c],
                            );
                        const d = (0, i.useMemo)(() => Object.assign({}, a), [a]);
                        return u().createElement(g.Provider, { value: d }, e);
                    };
                var v = n(6483),
                    C = n.n(v),
                    D = n(926),
                    F = n.n(D);
                let S, B, y;
                !(function (e) {
                    (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                })(S || (S = {})),
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
                    })(y || (y = {}));
                const w = () => {
                        const e = (0, i.useContext)(g),
                            t = e.width,
                            n = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return S.ExtraLarge;
                                    case e.large:
                                        return S.Large;
                                    case e.medium:
                                        return S.Medium;
                                    case e.small:
                                        return S.Small;
                                    case e.extraSmall:
                                        return S.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), S.ExtraSmall;
                                }
                            })(e),
                            s = ((e) => {
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
                            u = ((e) => {
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
                        return { mediaSize: a, mediaWidth: s, mediaHeight: u, remScreenWidth: t, remScreenHeight: n };
                    },
                    x = ['children', 'className'];
                function T() {
                    return (
                        (T = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        T.apply(null, arguments)
                    );
                }
                const k = {
                        [B.ExtraSmall]: '',
                        [B.Small]: F().SMALL_WIDTH,
                        [B.Medium]: `${F().SMALL_WIDTH} ${F().MEDIUM_WIDTH}`,
                        [B.Large]: `${F().SMALL_WIDTH} ${F().MEDIUM_WIDTH} ${F().LARGE_WIDTH}`,
                        [B.ExtraLarge]: `${F().SMALL_WIDTH} ${F().MEDIUM_WIDTH} ${F().LARGE_WIDTH} ${F().EXTRA_LARGE_WIDTH}`,
                    },
                    I = {
                        [y.ExtraSmall]: '',
                        [y.Small]: F().SMALL_HEIGHT,
                        [y.Medium]: `${F().SMALL_HEIGHT} ${F().MEDIUM_HEIGHT}`,
                        [y.Large]: `${F().SMALL_HEIGHT} ${F().MEDIUM_HEIGHT} ${F().LARGE_HEIGHT}`,
                        [y.ExtraLarge]: `${F().SMALL_HEIGHT} ${F().MEDIUM_HEIGHT} ${F().LARGE_HEIGHT} ${F().EXTRA_LARGE_HEIGHT}`,
                    },
                    O = {
                        [S.ExtraSmall]: '',
                        [S.Small]: F().SMALL,
                        [S.Medium]: `${F().SMALL} ${F().MEDIUM}`,
                        [S.Large]: `${F().SMALL} ${F().MEDIUM} ${F().LARGE}`,
                        [S.ExtraLarge]: `${F().SMALL} ${F().MEDIUM} ${F().LARGE} ${F().EXTRA_LARGE}`,
                    },
                    N = (e) => {
                        let t = e.children,
                            n = e.className,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, x);
                        const s = w(),
                            i = s.mediaWidth,
                            o = s.mediaHeight,
                            r = s.mediaSize;
                        return u().createElement('div', T({ className: C()(n, k[i], I[o], O[r]) }, a), t);
                    },
                    L = ['children'],
                    M = (e) => {
                        let t = e.children,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, L);
                        return u().createElement(A, null, u().createElement(N, n, t));
                    };
                var P = n(493),
                    $ = n.n(P);
                const H = (e = 1) => {
                    const t = new Error().stack;
                    let n,
                        a = R.invalid('resId');
                    return (
                        t &&
                            ((n = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== n &&
                                window.subViews[n] &&
                                (a = window.subViews[n].id)),
                        { caller: n, stack: t, resId: a }
                    );
                };
                var z = n(9916);
                const W = [
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
                function j(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const n = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                n.number = t;
                                break;
                            case 'boolean':
                                n.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                n.string = t.toString();
                        }
                        return n;
                    });
                }
                const G = (e, t, n = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: z.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: a,
                                },
                                n,
                            ),
                        );
                    },
                    U = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            a = e.args,
                            s = e.onMouseEnter,
                            u = e.onMouseLeave,
                            o = e.onMouseDown,
                            r = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            _ = e.ignoreMouseClick,
                            d = void 0 !== _ && _,
                            m = e.decoratorId,
                            p = void 0 === m ? 0 : m,
                            b = e.isEnabled,
                            g = void 0 === b || b,
                            E = e.targetId,
                            h = void 0 === E ? 0 : E,
                            f = e.onShow,
                            A = e.onHide,
                            v = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, W);
                        const C = (0, i.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            D = (0, i.useMemo)(() => h || H().resId, [h]),
                            F = (0, i.useCallback)(() => {
                                (C.current.isVisible && C.current.timeoutId) ||
                                    (G(n, p, { isMouseEvent: !0, on: !0, arguments: j(a) }, D),
                                    f && f(),
                                    (C.current.isVisible = !0));
                            }, [n, p, a, D, f]),
                            S = (0, i.useCallback)(() => {
                                if (C.current.isVisible || C.current.timeoutId) {
                                    const e = C.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (C.current.timeoutId = 0)),
                                        G(n, p, { on: !1 }, D),
                                        C.current.isVisible && A && A(),
                                        (C.current.isVisible = !1);
                                }
                            }, [n, p, D, A]),
                            B = (0, i.useCallback)((e) => {
                                C.current.isVisible &&
                                    ((C.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (C.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(C.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        return (
                            (0, i.useEffect)(() => {
                                const e = C.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', B, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', B, { capture: !0 }),
                                            e && window.clearTimeout(e);
                                    }
                                );
                            }, []),
                            (0, i.useEffect)(() => {
                                !1 === g && S();
                            }, [g, S]),
                            (0, i.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        window.removeEventListener('mouseleave', S), S();
                                    }
                                ),
                                [S],
                            ),
                            g
                                ? (0, i.cloneElement)(
                                      t,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((y = t.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((C.current.timeoutId = window.setTimeout(F, c ? 100 : 400)),
                                                          s && s(e),
                                                          y && y(e));
                                                  }),
                                              onMouseLeave: ((e) => (t) => {
                                                  S(), null == u || u(t), null == e || e(t);
                                              })(t.props.onMouseLeave),
                                              onClick: ((e) => (t) => {
                                                  !1 === d && S(), null == r || r(t), null == e || e(t);
                                              })(t.props.onClick),
                                              onMouseDown: ((e) => (t) => {
                                                  !1 === d && S(), null == o || o(t), null == e || e(t);
                                              })(t.props.onMouseDown),
                                          },
                                          v,
                                      ),
                                  )
                                : t
                        );
                        var y;
                    },
                    q = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function V() {
                    return (
                        (V = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        V.apply(null, arguments)
                    );
                }
                const X = R.views.common.tooltip_window.simple_tooltip_content,
                    K = (e) => {
                        let t = e.children,
                            n = e.body,
                            a = e.header,
                            s = e.note,
                            o = e.alert,
                            r = e.args,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, q);
                        const c = (0, i.useMemo)(() => {
                            const e = Object.assign({}, r, { body: n, header: a, note: s, alert: o });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [o, n, a, s, r]);
                        return u().createElement(
                            U,
                            V(
                                {
                                    contentId:
                                        ((_ = null == r ? void 0 : r.hasHtmlContent),
                                        _ ? X.SimpleTooltipHtmlContent('resId') : X.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            t,
                        );
                        var _;
                    },
                    Y = {
                        base: 'IconButton_base_4e',
                        hoverArea: 'IconButton_hoverArea_c4',
                        base__disable: 'IconButton_base__disable_33',
                        icon: 'IconButton_icon_40',
                        iconHover: 'IconButton_iconHover_d2',
                        base__preview: 'IconButton_base__preview_df',
                        base__comparison: 'IconButton_base__comparison_2f',
                        base__hover: 'IconButton_base__hover_aa',
                        base__active: 'IconButton_base__active_b6',
                    };
                let Z;
                !(function (e) {
                    (e.Preview = 'preview'), (e.Comparison = 'comparison');
                })(Z || (Z = {}));
                const J = u().memo(function ({ type: e, isDisabled: t = !1, onClick: n, className: a }) {
                    const s = (0, i.useState)(!1),
                        o = s[0],
                        l = s[1],
                        c = (0, i.useState)(!1),
                        _ = c[0],
                        d = c[1],
                        m = R.strings.halloween_lobby.iconButton.$dyn(e);
                    return u().createElement(
                        K,
                        { body: m.$dyn(t ? 'isDisabled' : 'default') },
                        u().createElement(
                            'div',
                            {
                                className: C()(
                                    Y.base,
                                    Y[`base__${e}`],
                                    o && Y.base__hover,
                                    _ && Y.base__active,
                                    t && Y.base__disable,
                                    a,
                                ),
                            },
                            u().createElement('div', { className: Y.icon }),
                            u().createElement('div', { className: Y.iconHover }),
                            u().createElement('div', {
                                className: Y.hoverArea,
                                onMouseEnter: () => {
                                    t || (r.O.sound.play.highlight(), l(!0));
                                },
                                onMouseLeave: () => {
                                    t || (l(!1), d(!1));
                                },
                                onMouseDown: t ? void 0 : () => d(!0),
                                onMouseUp: t ? void 0 : () => d(!1),
                                onClick: () => {
                                    t || (r.O.sound.play.click(), n && n());
                                },
                            }),
                        ),
                    );
                });
                let Q;
                !(function (e) {
                    (e.Hangar = 'hangar'),
                        (e.Setup = 'setup'),
                        (e.Compare = 'compare'),
                        (e.Battle = 'battle'),
                        (e.Respawn = 'respawn'),
                        (e.Prebattle = 'prebattle');
                })(Q || (Q = {}));
                const ee = (e) => {
                    let t,
                        n = null;
                    return (
                        (n = requestAnimationFrame(() => {
                            n = requestAnimationFrame(() => {
                                (n = null), (t = e());
                            });
                        })),
                        () => {
                            'function' == typeof t && t(), null !== n && cancelAnimationFrame(n);
                        }
                    );
                };
                var te = n(3403);
                const ne = (e) => e.imageSource === R.images.gui.maps.icons.tanksetup.panel.empty(),
                    ae = (e) => e === Q.Battle || e === Q.Prebattle,
                    se = (e) => ae(e) || e === Q.Respawn,
                    ie = {
                        base: 'TextButton_base_1b',
                        base__leaderboard: 'TextButton_base__leaderboard_30',
                        base__close: 'TextButton_base__close_82',
                        caption: 'TextButton_caption_d0',
                        base__hover: 'TextButton_base__hover_23',
                        base__active: 'TextButton_base__active_61',
                        icon: 'TextButton_icon_a6',
                        icon__close: 'TextButton_icon__close_42',
                        icon__info: 'TextButton_icon__info_cf',
                        icon__leaderboard: 'TextButton_icon__leaderboard_65',
                        icon__url: 'TextButton_icon__url_2d',
                        iconHover: 'TextButton_iconHover_6e',
                        iconHover__close: 'TextButton_iconHover__close_83',
                        iconHover__info: 'TextButton_iconHover__info_54',
                        iconHover__leaderboard: 'TextButton_iconHover__leaderboard_35',
                        iconHover__url: 'TextButton_iconHover__url_81',
                    };
                let ue;
                function oe() {
                    return !1;
                }
                !(function (e) {
                    (e.Info = 'info'), (e.Close = 'close'), (e.Leaderboard = 'leaderboard');
                })(ue || (ue = {})),
                    u().memo(function ({ className: e, type: t, caption: n, onClick: a, tooltipBody: s }) {
                        const o = (0, i.useState)(!1),
                            l = o[0],
                            c = o[1],
                            _ = (0, i.useState)(!1),
                            d = _[0],
                            m = _[1];
                        return u().createElement(
                            K,
                            { isEnabled: Boolean(s), body: s },
                            u().createElement(
                                'div',
                                {
                                    className: C()(
                                        ie.base,
                                        ie[`base__${t}`],
                                        l && ie.base__hover,
                                        d && ie.base__active,
                                        e,
                                    ),
                                    onMouseEnter: () => {
                                        r.O.sound.play.highlight(), c(!0);
                                    },
                                    onMouseLeave: () => {
                                        c(!1), m(!1);
                                    },
                                    onMouseDown: () => m(!0),
                                    onMouseUp: () => m(!1),
                                    onClick: () => {
                                        r.O.sound.play.click(), a();
                                    },
                                },
                                u().createElement('div', { className: C()(ie.icon, ie[`icon__${t}`]) }),
                                u().createElement('div', { className: C()(ie.iconHover, ie[`iconHover__${t}`]) }),
                                u().createElement('div', { className: ie.caption }, n),
                                t === ue.Leaderboard &&
                                    u().createElement(
                                        u().Fragment,
                                        null,
                                        u().createElement('div', { className: C()(ie.icon, ie.icon__url) }),
                                        u().createElement('div', { className: C()(ie.iconHover, ie.iconHover__url) }),
                                    ),
                            ),
                        );
                    }),
                    console.log;
                const re = [];
                function le(e) {
                    const t = (0, i.useRef)(e);
                    return (
                        (0, i.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, i.useCallback)((...e) => (0, t.current)(...e), re)
                    );
                }
                var ce = n(5521);
                const _e = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function de(e = ce.n.NONE, t = _e, n = !1, a = !1) {
                    (0, i.useEffect)(() => {
                        if (e !== ce.n.NONE)
                            return (
                                window.addEventListener('keydown', s, n),
                                () => {
                                    window.removeEventListener('keydown', s, n);
                                }
                            );
                        function s(s) {
                            if (s.keyCode === e) {
                                if (!a && r.O.view.isEventHandled()) return;
                                r.O.view.setEventHandled(), t(s), n && s.stopPropagation();
                            }
                        }
                    }, [t, e, n, a]);
                }
                function me(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const pe = {
                    playHighlight() {
                        me('highlight');
                    },
                    playClick() {
                        me('play');
                    },
                    playYes() {
                        me('yes1');
                    },
                };
                let be;
                !(function (e) {
                    (e.None = ''),
                        (e.Tiny = 'tiny'),
                        (e.Small = 'small'),
                        (e.Medium = 'medium'),
                        (e.Large = 'large'),
                        (e.Huge = 'huge');
                })(be || (be = {}));
                const ge = () => {
                    const e = (0, i.useContext)(g);
                    return e.extraSmall
                        ? be.Tiny
                        : e.small
                          ? be.Small
                          : e.medium || 1080 === e.height
                            ? be.Medium
                            : e.large
                              ? be.Large
                              : e.extraLarge
                                ? be.Huge
                                : be.None;
                };
                function Ee(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (e) {
                                if ('string' == typeof e) return he(e, t);
                                var n = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === n && e.constructor && (n = e.constructor.name),
                                    'Map' === n || 'Set' === n
                                        ? Array.from(e)
                                        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                          ? he(e, t)
                                          : void 0
                                );
                            }
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function he(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                const fe = (e, t = []) => {
                        const n = document.getElementById('root');
                        n && (n.style.cursor = e ? 'grabbing' : 'default');
                        for (var a, s = Ee(t); !(a = s()).done; ) {
                            const t = a.value,
                                n = document.getElementById(t);
                            n && (n.style.pointerEvents = e ? 'none' : 'auto');
                        }
                    },
                    Ae = (e, t, n) => {
                        let a = '',
                            s = 8e3;
                        for (var i, u = Ee(n); !(i = u()).done; ) {
                            const e = i.value,
                                n = Math.abs(e.centerX - t);
                            n < s && ((a = e.id), (s = n));
                        }
                        return a;
                    },
                    ve = (e, t) => {
                        const n = t.find((t) => t.id === e);
                        return n ? n.centerX : 0;
                    };
                let Ce, De;
                !(function (e) {
                    (e.Waiting = 'waiting'), (e.Active = 'active'), (e.InEffect = 'in'), (e.Rollback = 'rollback');
                })(Ce || (Ce = {})),
                    (function (e) {
                        (e.Ready = 'ready'),
                            (e.DragStart = 'start'),
                            (e.Drag = 'drag'),
                            (e.Drop = 'drop'),
                            (e.DropExit = 'exit');
                    })(De || (De = {}));
                const Fe = (e) => `panel-${e}-section`,
                    Se = (e, t) => {
                        const n = Fe(e),
                            a = t.filter((e) => e !== n);
                        return { selfId: n, blockOnGrabIds: ['setup-content', ...a] };
                    },
                    Be = ({ baseId: e, slotsLength: t, handleSwap: n, setIsExitBlocked: a, syncInitiator: s }) => {
                        const u = ((e, t, n) => {
                                const a = (0, i.useRef)([]),
                                    s = (0, i.useRef)({ dragId: '', dropId: '', prevPotentialDropId: '' }),
                                    u = (0, i.useState)({ activeDragId: '', potentialDropId: '' }),
                                    o = u[0],
                                    r = u[1],
                                    l = (0, i.useCallback)((e) => {
                                        s.current.dropId ||
                                            s.current.prevPotentialDropId ||
                                            ((s.current.prevPotentialDropId = e),
                                            r({ activeDragId: e, potentialDropId: e }));
                                    }, []),
                                    c = (0, i.useCallback)((e, t) => {
                                        if (a.current) {
                                            const n = Ae(0, t, a.current);
                                            n !== s.current.prevPotentialDropId &&
                                                ((s.current.prevPotentialDropId = n),
                                                r({ activeDragId: e, potentialDropId: n }));
                                        }
                                    }, []),
                                    _ = (0, i.useCallback)((e, t) => {
                                        if (a.current && t) {
                                            const n = s.current,
                                                i = Ae(0, t, a.current);
                                            (n.dropId = i),
                                                (n.dragId = e),
                                                (n.prevPotentialDropId = ''),
                                                r({ activeDragId: e, potentialDropId: '' }),
                                                i !== e && me('cons_equipment_swipe');
                                        }
                                    }, []),
                                    d = (0, i.useCallback)(() => {
                                        const e = s.current,
                                            t = e.dragId,
                                            n = e.dropId,
                                            a = e.prevPotentialDropId;
                                        (t || n || a) &&
                                            ((s.current = { dragId: '', dropId: '', prevPotentialDropId: '' }),
                                            r({ activeDragId: '', potentialDropId: '' }));
                                    }, []),
                                    m = (0, i.useCallback)(
                                        (e) => {
                                            const t = s.current.dropId;
                                            t && t !== e ? n(e, t) : d();
                                        },
                                        [d, n],
                                    ),
                                    p = (0, i.useCallback)((e, t) => {
                                        const n = a.current.find((t) => t.id === e);
                                        n && t && (n.centerX = t);
                                    }, []),
                                    b = (0, i.useCallback)(
                                        (e, t) => {
                                            const n = t.dragId,
                                                a = t.currentCenterX;
                                            switch (e) {
                                                case De.Ready:
                                                    return p(n, a);
                                                case De.DragStart:
                                                    return l(n);
                                                case De.Drag:
                                                    return c(n, a);
                                                case De.Drop:
                                                    return _(n, a);
                                                case De.DropExit:
                                                    return m(n);
                                                default:
                                                    return void console.warn('Unknown grabber action', e);
                                            }
                                        },
                                        [l, c, _, m, p],
                                    );
                                return (
                                    (0, i.useEffect)(() => {
                                        if (e !== a.current.length) {
                                            const n = new Array(e).fill(null);
                                            a.current = n.map((e, n) => ({ id: `${t}-${n}`, centerX: 0 }));
                                        }
                                    }, [e, t]),
                                    {
                                        dragState: o,
                                        handleGrabberAction: b,
                                        getForceCenterX: (0, i.useCallback)((e) => {
                                            const t = s.current,
                                                n = t.dragId,
                                                i = t.dropId;
                                            return e === n ? ve(i, a.current) : e === i ? ve(n, a.current) : 0;
                                        }, []),
                                        resetDragResults: d,
                                    }
                                );
                            })(t, e, n),
                            o = u.dragState,
                            r = u.handleGrabberAction,
                            l = u.getForceCenterX,
                            c = u.resetDragResults,
                            _ = (0, i.useCallback)(
                                (e, t) => {
                                    if (a)
                                        switch (e) {
                                            case De.DragStart:
                                            case De.Drag:
                                                a(!0);
                                                break;
                                            default:
                                                a(!1);
                                        }
                                    r(e, t);
                                },
                                [r, a],
                            );
                        return (
                            (0, i.useEffect)(() => {
                                a && a(!1);
                            }, [a]),
                            (0, i.useEffect)(() => c, [s, c]),
                            { handleGrabberAction: _, dragState: o, getForceCenterX: l }
                        );
                    };
                var ye = n(9174);
                function we(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                const xe = (e) => (0 === e ? window : window.subViews.get(e)),
                    Te = () => (e, t) => {
                        const n = (0, i.createContext)({});
                        return [
                            function ({ mode: a = 'real', options: s, children: o, mocks: l }) {
                                const c = (0, i.useRef)([]),
                                    _ = (n, a, s) => {
                                        var i;
                                        const u = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: n = xe,
                                                context: a = 'model',
                                            } = {}) {
                                                const s = new Map();
                                                function i(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? s.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, n) => {
                                                        n.forEach((t) => {
                                                            const n = s.get(t);
                                                            void 0 !== n && n(e);
                                                        });
                                                    });
                                                });
                                                const u = (e) => {
                                                    const s = n(t),
                                                        i = a.split('.').reduce((e, t) => e[t], s);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? i
                                                        : e.split('.').reduce((e, t) => {
                                                              const n = e[t];
                                                              return 'function' == typeof n ? n.bind(e) : n;
                                                          }, i);
                                                };
                                                return {
                                                    subscribe: (n, i) => {
                                                        const o = 'string' == typeof i ? `${a}.${i}` : a,
                                                            l = r.O.view.addModelObserver(o, t, !0);
                                                        return s.set(l, n), e && n(u(i)), l;
                                                    },
                                                    readByPath: u,
                                                    createCallback: (e, t) => {
                                                        const n = u(t);
                                                        return (...t) => {
                                                            n(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = u(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (
                                                            var e,
                                                                n = (function (e, t) {
                                                                    var n =
                                                                        ('undefined' != typeof Symbol &&
                                                                            e[Symbol.iterator]) ||
                                                                        e['@@iterator'];
                                                                    if (n) return (n = n.call(e)).next.bind(n);
                                                                    if (
                                                                        Array.isArray(e) ||
                                                                        (n = (function (e, t) {
                                                                            if (e) {
                                                                                if ('string' == typeof e)
                                                                                    return we(e, t);
                                                                                var n = {}.toString
                                                                                    .call(e)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === n &&
                                                                                        e.constructor &&
                                                                                        (n = e.constructor.name),
                                                                                    'Map' === n || 'Set' === n
                                                                                        ? Array.from(e)
                                                                                        : 'Arguments' === n ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                n,
                                                                                            )
                                                                                          ? we(e, t)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (t && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        n && (e = n);
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
                                                                })(s.keys());
                                                            !(e = n()).done;

                                                        )
                                                            i(e.value, t);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(a),
                                            o =
                                                'real' === n
                                                    ? u
                                                    : Object.assign({}, u, {
                                                          readByPath:
                                                              null != (i = null == s ? void 0 : s.getter)
                                                                  ? i
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === n ? (null == s ? void 0 : s.getter(e)) : o.readByPath(e),
                                            _ = (e) => c.current.push(e),
                                            d = e({
                                                mode: n,
                                                readByPath: l,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const a = null != t ? t : l(e),
                                                            s = ye.LO.box(a, { equals: oe });
                                                        return (
                                                            'real' === n &&
                                                                o.subscribe(
                                                                    (0, ye.aD)((e) => s.set(e)),
                                                                    e,
                                                                ),
                                                            s
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const a = null != t ? t : l(e),
                                                            s = ye.LO.box(a, { equals: oe });
                                                        return (
                                                            'real' === n &&
                                                                o.subscribe(
                                                                    (0, ye.aD)((e) => s.set(e)),
                                                                    e,
                                                                ),
                                                            s
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const a = l(t);
                                                        if (Array.isArray(e)) {
                                                            const s = e.reduce(
                                                                (e, t) => ((e[t] = ye.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === n &&
                                                                    o.subscribe(
                                                                        (0, ye.aD)((t) => {
                                                                            e.forEach((e) => {
                                                                                s[e].set(t[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                s
                                                            );
                                                        }
                                                        {
                                                            const s = e,
                                                                i = Object.entries(s),
                                                                u = i.reduce(
                                                                    (e, [t, n]) => ((e[n] = ye.LO.box(a[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === n &&
                                                                    o.subscribe(
                                                                        (0, ye.aD)((e) => {
                                                                            i.forEach(([t, n]) => {
                                                                                u[n].set(e[t]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                u
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: _,
                                            }),
                                            m = { mode: n, model: d, externalModel: o, cleanup: _ };
                                        return {
                                            model: d,
                                            controls: 'mocks' === n && s ? s.controls(m) : t(m),
                                            externalModel: o,
                                            mode: n,
                                        };
                                    },
                                    d = (0, i.useRef)(!1),
                                    m = (0, i.useState)(a),
                                    p = m[0],
                                    b = m[1],
                                    g = (0, i.useState)(() => _(a, s, l)),
                                    E = g[0],
                                    h = g[1];
                                return (
                                    (0, i.useEffect)(() => {
                                        d.current ? h(_(p, s, l)) : (d.current = !0);
                                    }, [l, p, s]),
                                    (0, i.useEffect)(() => {
                                        b(a);
                                    }, [a]),
                                    (0, i.useEffect)(
                                        () => () => {
                                            E.externalModel.dispose(), c.current.forEach((e) => e());
                                        },
                                        [E],
                                    ),
                                    u().createElement(n.Provider, { value: E }, o)
                                );
                            },
                            () => (0, i.useContext)(n),
                        ];
                    };
                function ke(e) {
                    return (
                        !1 ===
                        (function (e) {
                            return null == e;
                        })(e)
                    );
                }
                function Ie(e, t) {
                    var n;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (n = e[t]) ? void 0 : n.value;
                }
                const Oe = Ie;
                function Re(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, n, a) => t(null == e ? void 0 : e.value, n, a));
                }
                function Ne(e, t) {
                    if (Array.isArray(e)) return e.some(t);
                    for (let n = 0; n < e.length; n++) if (t(Oe(e, n), n, e)) return !0;
                    return !1;
                }
                function Le(e, t) {
                    if (Array.isArray(e)) return e.filter(t);
                    const n = [];
                    for (let s = 0; s < e.length; s++) {
                        var a;
                        const i = null == (a = e[s]) ? void 0 : a.value;
                        t(i, s, e) && n.push(i);
                    }
                    return n;
                }
                function Me(e, t) {
                    return (function (e, t, n) {
                        const a = [];
                        for (let s = 0; s < e.length; s++) {
                            const i = Oe(e, s);
                            t(i, s, e) && a.push(n(i, s, e));
                        }
                        return a;
                    })(e, ke, t);
                }
                function Pe(e, t, n) {
                    if (Array.isArray(e)) return e.reduce(t, n);
                    let a = n;
                    for (let n = 0; n < e.length; n++) a = t(a, Oe(e, n), n, e);
                    return a;
                }
                var $e = n(3946);
                const He = Te()(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    ammunitionPanel: e.object('ammunitionPanel'),
                                    roleSkillSlot: e.object('roleSkillSlot'),
                                    vehicleInfo: e.object('vehicleInfo'),
                                    state: e.object('state'),
                                    sectionGroups: e.array('ammunitionPanel.sectionGroups'),
                                    lastSlotAction: e.object('lastSlotAction'),
                                },
                                n = (0, $e.Om)(() => t.sectionGroups.get().length),
                                a = (0, $e.Om)(
                                    (e) => {
                                        const n = Ie(t.sectionGroups.get(), e);
                                        if (!n) throw Error(`No ammunition section group found with index: ${e}`);
                                        return Object.assign({}, n, {
                                            sections: Re(n.sections, (e) =>
                                                Object.assign({}, e, {
                                                    slots: Re(e.slots, (e) => Object.assign({}, e)),
                                                }),
                                            ),
                                            setupSelector: Object.assign({}, n.setupSelector, {
                                                states: Re(n.setupSelector.states, (e) => e),
                                            }),
                                        });
                                    },
                                    { equals: oe },
                                ),
                                s = (0, $e.Om)((e) => a(e).sections.length),
                                i = (0, $e.Om)(
                                    (e, t) => {
                                        const n = Ie(a(e).sections, t);
                                        if (!n) throw Error(`No ammunition section found with index: ${t}`);
                                        return n;
                                    },
                                    { equals: oe },
                                ),
                                u = (0, $e.Om)((e, t) => i(e, t).slots.length),
                                o = (0, $e.Om)((e, t) => Le(i(e, t).slots, (e) => Boolean(e) && !ne(e)).length),
                                r = (0, $e.Om)((e, t) => Ne(i(e, t).slots, (e) => e.intCD > 0)),
                                l = (0, $e.Om)(
                                    (e, t, n) => {
                                        const a = Ie(i(e, t).slots, n);
                                        if (!a) throw Error(`No ammunition slot found with index: ${n}`);
                                        return a;
                                    },
                                    { equals: oe },
                                ),
                                c = (0, $e.Om)((e) => Me(a(e).sections, (e) => Fe(e.type)), { equals: oe }),
                                _ = (0, $e.Om)(
                                    (e, t, n) => {
                                        const a = l(e, t, n);
                                        if (!a) throw Error(`No ammunition slot found with index: ${n}`);
                                        if (!a.specializations) throw Error('Selected slot have no specializations');
                                        return Object.assign({}, a.specializations, {
                                            specializations: Re(a.specializations.specializations, (e) =>
                                                Object.assign({}, e),
                                            ),
                                        });
                                    },
                                    { equals: oe },
                                );
                            return Object.assign({}, t, {
                                computes: {
                                    groups: { length: n, group: a },
                                    sections: { length: s, section: i, IDs: c },
                                    slots: { length: u, filteredLength: o, slot: l, existFilled: r },
                                    specializations: _,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            sectionSelect: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onSectionSelect',
                            ),
                            dragDropSwap: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onDragDropSwap',
                            ),
                            slotClear: e.createCallback((e) => Object.assign({}, e), 'ammunitionPanel.onSlotClear'),
                            sectionResized: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onSectionResized',
                            ),
                            changeSetupIndex: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onChangeSetupIndex',
                            ),
                            specializationSelect: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onSpecializationSelect',
                            ),
                            escKeyDown: e.createCallbackNoArgs('onEscKeyDown'),
                        }),
                    ),
                    ze = He[0],
                    We = He[1],
                    je = (0, i.memo)(({ slotOffset: e, slotWidth: t, onAnimationEnd: n }) => {
                        const a = (0, i.useRef)(null),
                            s = (0, i.useRef)(!1);
                        (0, i.useEffect)(() => {
                            s.current = !0;
                        }, [e, t]);
                        const o = (0, i.useCallback)(() => {
                            s.current && n(), (s.current = !1);
                        }, [n]);
                        (0, i.useEffect)(() => {
                            const e = a.current;
                            return (
                                e && e.addEventListener('transitionend', o),
                                () => {
                                    e && e.removeEventListener('transitionend', o);
                                }
                            );
                        }, [o]);
                        const r = (0, i.useMemo)(() => ({ left: e }), [e]),
                            l = (0, i.useMemo)(() => ({ width: t }), [t]);
                        return u().createElement(
                            'div',
                            { className: 'Border_base_f9' },
                            u().createElement(
                                'div',
                                { ref: a, className: 'Border_border_83', style: r },
                                u().createElement(
                                    'div',
                                    { className: 'Border_wrapper_17' },
                                    u().createElement('div', { className: 'Border_active_e8', style: l }),
                                ),
                            ),
                        );
                    }),
                    Ge = ['children'];
                function Ue() {
                    return (
                        (Ue = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        Ue.apply(null, arguments)
                    );
                }
                const qe = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (t.indexOf(a) >= 0) continue;
                                    n[a] = e[a];
                                }
                            return n;
                        })(e, Ge);
                    return u().createElement(
                        U,
                        Ue(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            n,
                        ),
                        t,
                    );
                };
                function Ve() {
                    return (
                        (Ve = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        Ve.apply(null, arguments)
                    );
                }
                const Xe = ({ children: e, tooltipArgs: t, className: n }) => {
                        if (!t) return e;
                        const a = u().createElement('div', { className: n }, e);
                        if (t.header || t.body) return u().createElement(K, t, a);
                        const s = t.contentId;
                        return s ? u().createElement(U, Ve({}, t, { contentId: s }), a) : u().createElement(qe, t, a);
                    },
                    Ke = ({ roleSkill: e, tooltipId: t, tooltipHeader: n, tooltipBody: a, className: s }) => {
                        const o = (0, i.useMemo)(
                            () => ({
                                args: { tooltipId: t, roleSkill: e, header: n, body: a, hasHtmlContent: !0 },
                                header: n,
                                body: a,
                                ignoreShowDelay: !0,
                            }),
                            [e, n, a, t],
                        );
                        return u().createElement(
                            Xe,
                            { tooltipArgs: o, className: C()('RoleSkillSlot_base_c4', s) },
                            u().createElement('div', {
                                className: 'RoleSkillSlot_icon_79',
                                style: {
                                    backgroundImage: `url(${R.images.gui.maps.icons.roleSkills.c_48x48.$dyn(e)})`,
                                },
                            }),
                        );
                    },
                    Ye = (0, i.memo)(({ slotOffset: e, slotWidth: t, isAnimationRunning: n }) => {
                        const a = (0, i.useState)({ offset: e, slotWidth: t }),
                            s = a[0],
                            o = a[1],
                            l = (0, i.useRef)({ initialized: !1, offset: e, slotWidth: t });
                        (0, i.useEffect)(() => {
                            let n = l.current.initialized;
                            !n && e && ((n = !0), o({ offset: e, slotWidth: t })),
                                (l.current = { initialized: n, offset: e, slotWidth: t });
                        }, [e, t]),
                            (0, i.useEffect)(() => {
                                n || o(l.current);
                            }, [n]);
                        const c = (0, i.useMemo)(() => {
                                const e = s.slotWidth + 25;
                                return { left: s.offset, width: e, backgroundSize: `${r.O.view.pxToRem(e)}rem 100%` };
                            }, [s.offset, s.slotWidth]),
                            _ = !n && s.offset === l.current.offset,
                            d = C()(
                                'SlotGlow_glow_a9',
                                l.current.initialized && 'SlotGlow_glow__initialized_8d',
                                _ ? 'SlotGlow_glow__shown_f2' : 'SlotGlow_glow__hidden_94',
                            );
                        return u().createElement(
                            'div',
                            { className: 'SlotGlow_base_40' },
                            u().createElement('div', { className: d, style: c }),
                        );
                    }),
                    Ze = (e, t = []) => {
                        const n = (0, i.useRef)(),
                            a = (0, i.useCallback)((...t) => {
                                n.current && n.current(), (n.current = e(...t));
                            }, t);
                        return (
                            (0, i.useEffect)(
                                () => () => {
                                    n.current && n.current();
                                },
                                [a],
                            ),
                            a
                        );
                    };
                var Je = n(1281);
                let Qe;
                function et(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(Qe || (Qe = {}));
                const tt = (e) => e.replace(/&nbsp;/g, ' '),
                    nt = (e, t, n) => {
                        if (n % 2) {
                            const n = e.pop();
                            return [...e, n + t];
                        }
                        return [...e, t];
                    },
                    at = (e, t, n) => {
                        if (0 === n) return [t];
                        if (n % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const n = e.pop();
                            return [...e, n + t];
                        }
                    },
                    st = (e, t, n = Qe.left) => e.split(t).reduce(n === Qe.left ? nt : at, []),
                    it = (() => {
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
                    ut = ['zh_cn', 'zh_sg', 'zh_tw'];
                function ot(e, t, n) {
                    const a = (0, i.useContext)(g);
                    let s = Object.entries(a).filter(([e, t]) => !0 === t && e in c);
                    return (
                        n && (s = s.filter((e) => n.includes(e[0]))),
                        e.reduce((e, n) => {
                            const a = s.map((e) =>
                                C()(t[((e, t) => e + '__' + t)(n, e[0])], t[((e, t) => e + et(t))(n, e[0])]),
                            );
                            return (e[n] = C()(t[n], ...a)), e;
                        }, {})
                    );
                }
                const rt = (e, t) => {
                    const n = [];
                    for (let a = 0; a < e; a++) n.push(t(a));
                    return n;
                };
                var lt = n(2558),
                    ct = n(8934);
                const _t = {
                        base__enterUp: 'GroupAnimation_base__enterUp_b3',
                        animationEnterTop: 'GroupAnimation_animationEnterTop_92',
                        base__enterDown: 'GroupAnimation_base__enterDown_f0',
                        animationEnterDown: 'GroupAnimation_animationEnterDown_73',
                        base__exitUp: 'GroupAnimation_base__exitUp_92',
                        animationExitTop: 'GroupAnimation_animationExitTop_89',
                        base__exitDown: 'GroupAnimation_base__exitDown_67',
                        animationExitDown: 'GroupAnimation_animationExitDown_02',
                    },
                    dt = ({ children: e, index: t, setSetupSwitching: n, disabled: a = !1 }) => {
                        const s = (0, i.useRef)(1 - t),
                            o = (0, i.useMemo)(() => {
                                const e = (n = t) === (i = s.current) ? '' : n > i ? 'down' : 'up';
                                var n, i;
                                const u = e && et(e);
                                return a ? {} : { enter: _t[`base__enter${u}`], exit: _t[`base__exit${u}`] };
                            }, [t, a]);
                        return (
                            (s.current = t),
                            u().createElement(
                                lt.Z,
                                { className: _t.base },
                                u().createElement(
                                    ct.Z,
                                    {
                                        timeout: 300,
                                        key: t,
                                        classNames: o,
                                        onEnter: () => n(!0),
                                        onExited: () => n(!1),
                                    },
                                    e,
                                ),
                            )
                        );
                    },
                    mt = u().memo(({ text: e }) =>
                        u().createElement(
                            'div',
                            { className: 'KeyboardKey_base_57' },
                            u().createElement('div', { className: 'KeyboardKey_back_43' }, e),
                        ),
                    ),
                    pt = 'SetupSwitchHotkey_plus_f0',
                    bt = u().memo(({ hotKeys: e }) =>
                        u().createElement(
                            'div',
                            { className: 'SetupSwitchHotkey_base_4c' },
                            e.map((e, t) => {
                                if (!e) return null;
                                const n = e.value;
                                return 0 === t
                                    ? u().createElement(mt, { key: t, text: n })
                                    : u().createElement(
                                          'div',
                                          { key: t, className: 'SetupSwitchHotkey_hotKeyWrapper_8d' },
                                          u().createElement(
                                              'div',
                                              { className: 'SetupSwitchHotkey_plusWrapper_f0' },
                                              u().createElement('div', {
                                                  className: `${pt} SetupSwitchHotkey_plus__horizontal_e0`,
                                              }),
                                              u().createElement('div', {
                                                  className: `${pt} SetupSwitchHotkey_plus__vertical_5b`,
                                              }),
                                          ),
                                          u().createElement(mt, { text: n }),
                                      );
                            }),
                        ),
                    ),
                    gt = 'optDevices',
                    Et = 'shells',
                    ht = 'battleBoosters',
                    ft = 'battleAbilities',
                    At = 'toggleShells',
                    vt = u().memo(function ({ panelType: e }) {
                        return u().createElement(
                            'div',
                            { className: 'HWSection_base_31' },
                            u().createElement(
                                U,
                                {
                                    contentId: R.views.halloween.lobby.tooltips.AbilityTooltip('resId'),
                                    targetId:
                                        e !== Q.Setup ? R.views.halloween.lobby.widgets.TankSetupView('resId') : void 0,
                                    args: { abilityName: 'nitro' },
                                },
                                u().createElement(
                                    'div',
                                    { className: 'HWSection_nitro_91' },
                                    u().createElement('div', { className: 'HWSection_shadow_f7' }),
                                ),
                            ),
                        );
                    }),
                    Ct = {
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
                    Dt = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function Ft() {
                    return (
                        (Ft = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        Ft.apply(null, arguments)
                    );
                }
                const St = (e) => {
                    let t = e.size,
                        n = e.value,
                        a = e.isEmpty,
                        s = e.fadeInAnimation,
                        i = e.hide,
                        o = e.maximumNumber,
                        r = e.className,
                        l = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (t.indexOf(a) >= 0) continue;
                                    n[a] = e[a];
                                }
                            return n;
                        })(e, Dt);
                    const c = a ? null : n,
                        _ = 'string' == typeof c;
                    if ((c && !_ && c < 0) || 0 === c) return null;
                    const d = c && !_ && c > o,
                        m = C()(
                            Ct.base,
                            Ct[`base__${t}`],
                            s && Ct.base__animated,
                            i && Ct.base__hidden,
                            !c && Ct.base__pattern,
                            a && Ct.base__empty,
                            r,
                        );
                    return u().createElement(
                        'div',
                        Ft({ className: m }, l),
                        u().createElement('div', { className: Ct.bg }),
                        u().createElement('div', { className: Ct.pattern }),
                        u().createElement(
                            'div',
                            { className: C()(Ct.value, _ && Ct.value__text) },
                            d ? o : c,
                            d && u().createElement('span', { className: Ct.plus }, '+'),
                        ),
                    );
                };
                St.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                const Bt = ({
                        binding: e,
                        text: t = '',
                        classMix: n,
                        alignment: a = Qe.left,
                        formatWithBrackets: s,
                    }) => {
                        if (null === t) return console.error("FormatText was supplied with 'null'"), null;
                        const o = s && e ? ((r = e), t.replace(/\{\w+\}/g, (e) => String(r[e.slice(1, -1)]))) : t;
                        var r;
                        return u().createElement(
                            i.Fragment,
                            null,
                            o.split('\n').map((t, s) =>
                                u().createElement(
                                    'div',
                                    { className: C()('FormatText_base_d0', n), key: `${t}-${s}` },
                                    ((e, t, n) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                            n && e in n
                                                ? n[e]
                                                : ((e, t = Qe.left) => {
                                                      const n = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                      return ut.includes(n)
                                                          ? it(e)
                                                          : 'ja' === n
                                                            ? (0, Je.D4)()
                                                                  .parse(e)
                                                                  .map((e) => tt(e))
                                                            : ((e, t = Qe.left) => {
                                                                  let n = [];
                                                                  const a =
                                                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                      s = tt(e);
                                                                  return (
                                                                      st(s, /( )/, t).forEach(
                                                                          (e) => (n = n.concat(st(e, a, Qe.left))),
                                                                      ),
                                                                      n
                                                                  );
                                                              })(e, t);
                                                  })(e, t),
                                        ))(t, a, e).map((e, t) =>
                                        u().createElement(i.Fragment, { key: `${t}-${e}` }, e),
                                    ),
                                ),
                            ),
                        );
                    },
                    yt = (0, i.memo)(({ panelType: e, text: t, parentRef: n, isTruncated: a = !1, show: s = !1 }) => {
                        const o = (0, i.useRef)(!1),
                            r = (0, i.useState)(!1),
                            l = r[0],
                            c = r[1];
                        (0, i.useEffect)(() => {
                            n || (s && !o.current && (o.current = !0), c(s));
                        }, [s, n]);
                        const _ = (0, i.useCallback)(() => {
                                (o.current = !0), c(!0);
                            }, []),
                            d = (0, i.useCallback)(() => {
                                c(!1);
                            }, []);
                        return (
                            (0, i.useEffect)(() => {
                                const e = n && n.current;
                                if (e)
                                    return (
                                        e.addEventListener('mouseenter', _),
                                        e.addEventListener('mouseleave', d),
                                        () => {
                                            e.removeEventListener('mouseenter', _),
                                                e.removeEventListener('mouseleave', d);
                                        }
                                    );
                            }, [n, _, d]),
                            u().createElement(
                                'div',
                                { className: C()('TopLabel_base_7f', o.current && 'TopLabel_base__ready_00') },
                                u().createElement(
                                    'div',
                                    {
                                        className: C()(
                                            'TopLabel_text_d0',
                                            e !== Q.Setup && 'TopLabel_text__hangar_36',
                                            a && 'TopLabel_text__truncated_29',
                                            s && l ? 'TopLabel_text__shown_25' : 'TopLabel_text__hidden_79',
                                        ),
                                    },
                                    t,
                                ),
                            )
                        );
                    }),
                    wt = 'notUsableSection';
                let xt;
                !(function (e) {
                    (e[(e.NonSet = 0)] = 'NonSet'),
                        (e[(e.Debug = 10)] = 'Debug'),
                        (e[(e.Info = 20)] = 'Info'),
                        (e[(e.Warning = 30)] = 'Warning');
                })(xt || (xt = {}));
                const Tt = 'tooltip_watched';
                let kt, It, Ot, Rt;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown'), (e.Displayed = 'displayed'), (e.Viewed = 'viewed');
                })(kt || (kt = {})),
                    (function (e) {
                        (e.HangarView = 'hangar'),
                            (e.SetupView = 'setup_view'),
                            (e.ProgressView = 'progress_view'),
                            (e.RewardsView = 'rewards_view'),
                            (e.RewardsSelectionView = 'rewards_selection_view'),
                            (e.SkillsView = 'skills_view'),
                            (e.AwardsView = 'awards_view'),
                            (e.ContainerView = 'container_view');
                    })(It || (It = {})),
                    (function (e) {
                        (e.AbilitiesCheckboxTooltip = 'abilities_checkbox_tooltip'),
                            (e.EpicWidgetTooltip = 'epic_widget_tooltip'),
                            (e.BannerPerformance = 'banner_performance_tooltip'),
                            (e.SkillPointsTooltip = 'skill_points_tooltip'),
                            (e.AbilityLevelsTooltip = 'ability_levels_tooltip'),
                            (e.SkillOrderTooltip = 'skill_order_tooltip'),
                            (e.SkillLevelTab = 'skill_level_tab'),
                            (e.RewardsButton = 'rewards_button'),
                            (e.RewardsButtonTooltip = 'rewards_button_tooltip'),
                            (e.RewardTooltip = 'reward_tooltip'),
                            (e.AwardsOkButton = 'awards_ok'),
                            (e.AwardsView = 'awards_view'),
                            (e.RewardsSelectionView = 'rewards_selection_view');
                    })(Ot || (Ot = {})),
                    (function (e) {
                        (e.Click = 'click'), (e.Close = 'close');
                    })(Rt || (Rt = {}));
                const Nt = () => Date.now(),
                    Lt = (e, t) => {
                        const n = ((e, t) => {
                                const n = (0, i.useCallback)(
                                    (n, a = xt.Info, s) => {
                                        s || (s = {}),
                                            Object.keys(s).length >= 200 ||
                                                window.uiLoggerModel.log({
                                                    feature: e,
                                                    group: t,
                                                    action: n,
                                                    logLevel: a,
                                                    params: JSON.stringify(s),
                                                });
                                    },
                                    [e, t],
                                );
                                return (e, t, a) => n(e, t, a);
                            })(e, t),
                            a = (0, i.useRef)(new Map()),
                            s = (0, i.useRef)(new Map()),
                            u = (0, i.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = a.current.get(e);
                                    (void 0 !== t && t > 0) || a.current.set(e, Nt());
                                },
                                [a],
                            ),
                            o = (0, i.useCallback)(() => {
                                a.current.clear(), s.current.clear();
                            }, [a, s]),
                            r = (0, i.useCallback)(
                                (e) => {
                                    e &&
                                        void 0 !== a.current.get(e) &&
                                        void 0 === s.current.get(e) &&
                                        s.current.set(e, Nt());
                                },
                                [a, s],
                            ),
                            l = (0, i.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = a.current.get(e);
                                    if (void 0 === t) return;
                                    const n = s.current.get(e);
                                    if (void 0 === n) return;
                                    s.current.delete(e);
                                    const i = Nt() - n;
                                    a.current.set(e, t + i);
                                },
                                [a, s],
                            ),
                            c = (0, i.useCallback)(
                                (e, t = 0, i, u) => {
                                    const o = a.current.get(e);
                                    if (void 0 === o) return;
                                    void 0 !== s.current.get(e) && l(e), a.current.delete(e);
                                    const r = (Nt() - o) / 1e3;
                                    r <= t ||
                                        ((u = ((e, t) => (void 0 === e && (e = {}), (e.timeSpent = t), e))(u, r)),
                                        n(e, i, u));
                                },
                                [a, s, n, l],
                            );
                        return [(e) => u(e), (e, t, n, a) => c(e, t, n, a), () => o(), (e) => r(e), (e) => l(e)];
                    },
                    Mt = u().memo(function ({ className: e, children: t }) {
                        const n = ((e, t, n, a) => {
                                const s = ((e) => {
                                        const t = Lt(e, 'metrics'),
                                            n = t[0],
                                            a = t[1],
                                            s = t[2],
                                            u = t[3],
                                            o = t[4],
                                            r = (0, i.useCallback)(
                                                (e) => {
                                                    const t = e.action,
                                                        n = e.timeLimit,
                                                        s = e.logLevel;
                                                    a(
                                                        t,
                                                        n,
                                                        s,
                                                        (({
                                                            partnerID: e,
                                                            item: t,
                                                            parentScreen: n,
                                                            itemState: a,
                                                            info: s,
                                                        }) => ({
                                                            item: t,
                                                            partnerID: e || null,
                                                            parent_screen: n || null,
                                                            item_state: a || null,
                                                            additional_info: s || null,
                                                        }))(e),
                                                    );
                                                },
                                                [a],
                                            );
                                        return [(e) => n(e), (e) => r(e), () => s(), (e) => u(e), (e) => o(e)];
                                    })('epic_battle'),
                                    u = s[0],
                                    o = s[1];
                                return [
                                    (0, i.useCallback)(() => u(Tt), [u]),
                                    (0, i.useCallback)(
                                        () =>
                                            o({
                                                action: Tt,
                                                timeLimit: 2,
                                                item: e,
                                                parentScreen: t,
                                                itemState: n,
                                                info: a,
                                            }),
                                        [o, e, t, n, a],
                                    ),
                                ];
                            })(Ot.SkillOrderTooltip, It.SetupView),
                            a = n[0],
                            s = n[1];
                        return u().createElement(
                            U,
                            {
                                contentId: R.views.frontline.lobby.tooltips.SkillOrderTooltip('resId'),
                                onMouseEnter: a,
                                onMouseLeave: s,
                            },
                            u().createElement('div', { className: e }, t),
                        );
                    }),
                    Pt = (e, t) => e.split('.').reduce((e, t) => e && e[t], t),
                    $t = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    Ht = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    zt = z.Sw.instance;
                let Wt;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(Wt || (Wt = {}));
                const jt = (e = 'model', t = Wt.Deep) => {
                        const n = (0, i.useState)(0),
                            a = (n[0], n[1]),
                            s = (0, i.useMemo)(() => H(), []),
                            u = s.caller,
                            o = s.resId,
                            r = (0, i.useMemo)(
                                () => (window.__feature && window.__feature !== u ? `subViews.${u}.${e}` : e),
                                [u, e],
                            ),
                            l = (0, i.useState)(() =>
                                ((e) => {
                                    const t = Pt(e, window);
                                    for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                    return $t(t) ? t.value : t;
                                })(
                                    ((e) =>
                                        ((e, t) =>
                                            e.split('.').reduce((e, t) => {
                                                const n = Pt(`${e}.${t}`, window);
                                                return $t(n) ? ((e, t) => `${e}.${t}.value`)(e, t) : `${e}.${t}`;
                                            }))(e))(r),
                                ),
                            ),
                            c = l[0],
                            _ = l[1],
                            d = (0, i.useRef)(-1);
                        return (
                            f(() => {
                                if (
                                    ('boolean' == typeof t &&
                                        ((t = t ? Wt.Deep : Wt.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    t !== Wt.None)
                                ) {
                                    const n = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            t === Wt.Deep
                                                ? (e === c && a((e) => e + 1), _(e))
                                                : _(Object.assign([], e));
                                        },
                                        s = ((e) => {
                                            const t = ((e) => {
                                                    const t = H(),
                                                        n = t.caller,
                                                        a = t.resId,
                                                        s =
                                                            window.__feature && window.__feature !== n && n
                                                                ? `subViews.${n}`
                                                                : '';
                                                    return { modelPrefix: s, modelPath: Ht(s, ''), resId: a };
                                                })(),
                                                n = t.modelPrefix,
                                                a = e.split('.');
                                            if (a.length > 0) {
                                                const e = [a[0]];
                                                return (
                                                    a.reduce((t, a) => {
                                                        const s = Pt(Ht(n, `${t}.${a}`), window);
                                                        return $t(s)
                                                            ? (e.push(s.id), `${t}.${a}.value`)
                                                            : (e.push(a), `${t}.${a}`);
                                                    }),
                                                    e.reduce((e, t) => e + '.' + t)
                                                );
                                            }
                                            return '';
                                        })(e);
                                    d.current = zt.addCallback(s, n, o, t === Wt.Deep);
                                }
                            }),
                            (0, i.useEffect)(() => {
                                if (t !== Wt.None)
                                    return () => {
                                        zt.removeCallback(d.current, o);
                                    };
                            }, [o, t]),
                            c
                        );
                    },
                    Gt = 'visible_change',
                    Ut = (e, t) => {
                        const n = jt('tutorialModel.triggers.items').filter((n) => {
                            if (!n) return !1;
                            const a = n.value,
                                s = a.triggers.filter((e) => e.value === t);
                            return a.componentId === e && s.length > 0;
                        });
                        return 0 === n.length
                            ? null
                            : window.tutorialModel.foundComponents.items.some((t) => t.value.componentId === e)
                              ? {
                                    trigger: n[0].value,
                                    runTrigger: (n) => {
                                        window.tutorialModel.onTriggerActivated({
                                            componentId: e,
                                            triggerType: t,
                                            state: n,
                                        });
                                    },
                                }
                              : null;
                    },
                    qt = () => u().createElement('div', { className: 'SlotDivider_base_60' }),
                    Vt = ({ wrapper: e, children: t, when: n, withProps: a }) =>
                        n ? u().createElement(e, a, t) : u().createElement(u().Fragment, null, t),
                    Xt = {
                        base: 'Container_base_9a',
                        base__grabbing: 'Container_base__grabbing_73',
                        base__hangar: 'Container_base__hangar_ab',
                        base__setup: 'Container_base__setup_1c',
                        base__compare: 'Container_base__compare_0b',
                        base__selected: 'Container_base__selected_17',
                        base__dragIn: 'Container_base__dragIn_a6',
                        base__dragInActive: 'Container_base__dragInActive_e5',
                        base__toggle: 'Container_base__toggle_94',
                        base__disabled: 'Container_base__disabled_22',
                    },
                    Kt = ({
                        activeDragId: e,
                        slotType: t,
                        isSelected: n,
                        isBorderActive: a,
                        children: s,
                        panelType: i,
                        isDisabled: o,
                        isPotentialDrop: r,
                        onClick: l,
                    }) => {
                        const c = C()(
                            Xt.base,
                            !e && Xt[`base__${i}`],
                            t && Xt[`base__${t}`],
                            n && !r && !a && Xt.base__selected,
                            r && Xt['base__dragIn' + (n ? 'Active' : '')],
                            o && Xt.base__disabled,
                        );
                        return u().createElement('div', { className: c, onClick: l }, s);
                    },
                    Yt = {
                        base: 'Bonus_base_dd',
                        base__fitting: 'Bonus_base__fitting_d1',
                        icon: 'Bonus_icon_3b',
                        icon__battleBooster: 'Bonus_icon__battleBooster_66',
                        icon__battleBoosterReplace: 'Bonus_icon__battleBoosterReplace_8d',
                        icon__equipmentPlus: 'Bonus_icon__equipmentPlus_48',
                        icon__builtInEquipment: 'Bonus_icon__builtInEquipment_77',
                        icon__equipmentModernized: 'Bonus_icon__equipmentModernized_76',
                        icon__equipmentTrophyBasic: 'Bonus_icon__equipmentTrophyBasic_a4',
                        icon__equipmentTrophyUpgraded: 'Bonus_icon__equipmentTrophyUpgraded_6d',
                    },
                    Zt = u().memo(({ isTemporary: e, overlayType: t, overlaySource: n }) => {
                        const a = C()(Yt.base, e && Yt.base__fitting),
                            s = C()(Yt.icon, Yt[`icon__${t}`]),
                            o = (0, i.useMemo)(() => ({ backgroundImage: `url(${n})` }), [n]);
                        return u().createElement(
                            'div',
                            { className: a },
                            u().createElement('div', { className: s, style: o }),
                        );
                    }),
                    Jt = {
                        base: 'Level_base_57',
                        base__level1: 'Level_base__level1_c4',
                        base__level2: 'Level_base__level2_9c',
                        base__level3: 'Level_base__level3_39',
                        base__level4: 'Level_base__level4_e3',
                        base__level5: 'Level_base__level5_ea',
                        base__level6: 'Level_base__level6_5d',
                        base__level7: 'Level_base__level7_03',
                        base__level8: 'Level_base__level8_b5',
                        base__level9: 'Level_base__level9_d6',
                        base__level10: 'Level_base__level10_89',
                    },
                    Qt = ({ level: e }) => {
                        const t = (0, i.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.levels.$dyn(`tank_level_${e}`)})`,
                                }),
                                [e],
                            ),
                            n = C()(Jt.base, Jt[`base__level${e}`]);
                        return u().createElement('div', { style: t, className: n });
                    },
                    en = ({
                        level: e,
                        overlayType: t,
                        isTemporary: n,
                        withAttention: a,
                        imageSource: s,
                        isIncompatible: o,
                    }) => {
                        const r = (0, i.useMemo)(() => {
                                const n = 'equipmentModernized' === t ? `${t}_${e}_overlay` : `${t}_overlay`;
                                return R.images.gui.maps.icons.quests.bonuses.small.$dyn(n);
                            }, [t, e]),
                            l = (0, i.useMemo)(() => ({ backgroundImage: `url(${s})` }), [s]),
                            c = !r && Boolean(t) && e;
                        return u().createElement(
                            'div',
                            null,
                            c && u().createElement(Qt, { level: e }),
                            u().createElement('div', {
                                className: C()('Inside_image_e5', (n || a) && 'Inside_image__fitting_11'),
                                style: l,
                            }),
                            a && u().createElement('div', { className: 'Inside_warning_e4' }),
                            o && u().createElement('div', { className: 'Inside_change_5a' }),
                            r && u().createElement(Zt, { isTemporary: n, overlaySource: r, overlayType: t }),
                        );
                    },
                    tn = (e) => {
                        const t = (0, i.useRef)(-1),
                            n = (0, i.useCallback)(
                                (n) => {
                                    if (-1 === t.current) {
                                        const a = e(n);
                                        a &&
                                            (t.current = window.setTimeout(() => {
                                                t.current = -1;
                                            }, a));
                                    }
                                },
                                [e],
                            );
                        return (0, i.useEffect)(() => () => clearTimeout(t.current), []), n;
                    },
                    nn = (e) => {
                        (0, i.useEffect)(() => e, []);
                    },
                    an = 'Grabber_base_cf',
                    sn = ({
                        children: e,
                        id: t,
                        containerRef: n,
                        isEnabled: a = !0,
                        onClick: s,
                        forceCenterX: o,
                        isUpdateAvailable: l,
                        handleAction: c,
                        blockOnGrabIds: _ = [],
                    }) => {
                        const d = w().mediaSize,
                            m = (0, i.useRef)({
                                actualX: 0,
                                clickCenterOffset: 0,
                                dropCenterX: 0,
                                grabActivationPassed: !1,
                                isDragActive: !1,
                                id: t,
                            }),
                            p = (0, i.useRef)({
                                isValid: !1,
                                startX: 0,
                                startCenterX: 0,
                                minXRestriction: 0,
                                maxXRestriction: 8e3,
                            }),
                            b = (0, i.useRef)(null),
                            g = (0, i.useState)(!1),
                            E = g[0],
                            h = g[1],
                            f = (0, i.useState)(0),
                            A = f[0],
                            v = f[1],
                            D = (function () {
                                const e = (0, i.useRef)(0);
                                return (
                                    nn(() => {
                                        window.cancelAnimationFrame(e.current);
                                    }),
                                    (0, i.useMemo)(
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
                            })(),
                            F = 0 !== o && a,
                            S = o ? o - p.current.startCenterX : A;
                        (0, i.useEffect)(() => {
                            if (((p.current.isValid = !1), t))
                                return ee(() => {
                                    const e = b.current,
                                        a = n.current;
                                    if (a && e) {
                                        const n = e.getBoundingClientRect(),
                                            s = a.getBoundingClientRect(),
                                            i = n.left + 0.5 * n.width;
                                        (p.current = {
                                            isValid: !0,
                                            minXRestriction: s.left,
                                            maxXRestriction: s.left + s.width,
                                            startX: n.left,
                                            startCenterX: i,
                                        }),
                                            c(De.Ready, { dragId: t, currentCenterX: i });
                                    }
                                });
                        }, [d]);
                        const B = (0, i.useCallback)(
                                (e) => {
                                    (m.current.isDragActive = e),
                                        h(e),
                                        m.current.grabActivationPassed && !e && fe(!1, _);
                                },
                                [_],
                            ),
                            y = (0, i.useCallback)(() => {
                                c(De.DragStart, { dragId: m.current.id }),
                                    (m.current.grabActivationPassed = !0),
                                    fe(!0, _);
                            }, [c, _]),
                            x = (0, i.useCallback)((e) => {
                                const t = m.current,
                                    n = p.current,
                                    a = n.startX,
                                    s = n.startCenterX,
                                    i = n.minXRestriction,
                                    u = n.maxXRestriction,
                                    o = s - a,
                                    r = e - t.clickCenterOffset;
                                t.dropCenterX = ((e, t, n, a) => {
                                    const s = n + t,
                                        i = a - t;
                                    return e < s ? s : e > i ? i : e;
                                })(r, o, i, u);
                            }, []),
                            T = (0, i.useCallback)(
                                (e) => {
                                    const t = m.current,
                                        n = p.current;
                                    0 === e.button &&
                                        !t.isDragActive &&
                                        n.isValid &&
                                        a &&
                                        !l &&
                                        b.current &&
                                        ((t.actualX = e.clientX),
                                        (t.clickCenterOffset = t.actualX - n.startCenterX),
                                        B(!0));
                                },
                                [a, l, B],
                            ),
                            k = (0, i.useCallback)(() => {
                                !s || (a && p.current.isValid) || s();
                            }, [a, s]);
                        de(
                            E ? ce.n.ESCAPE : ce.n.NONE,
                            le(() => B(!1)),
                        ),
                            (0, i.useEffect)(() => {
                                a && o && v(0);
                            }, [o, a]);
                        const I = !E && m.current.grabActivationPassed;
                        (0, i.useLayoutEffect)(() => {
                            m.current.id = t;
                        }, [t]),
                            (0, i.useEffect)(() => {
                                if (I) {
                                    const e = m.current;
                                    c(De.Drop, { dragId: e.id, currentCenterX: e.dropCenterX }),
                                        o === e.dropCenterX &&
                                            ((e.grabActivationPassed = !1),
                                            D.run(() => c(De.DropExit, { dragId: e.id })));
                                }
                            }, [I, D, o, c]),
                            (0, i.useEffect)(() => {
                                if (a && E && m.current.id) {
                                    const e = r.O.client.events.mouse.up(([e, t]) => {
                                            if ('outside' === t) return B(!1);
                                            const n = m.current,
                                                a = e.clientX;
                                            a !== n.actualX || 0 !== e.button || m.current.grabActivationPassed
                                                ? m.current.grabActivationPassed && x(a)
                                                : s && s(),
                                                m.current.isDragActive && B(!1);
                                        }),
                                        t = r.O.client.events.mouse.move(([e]) => {
                                            const t = m.current;
                                            if ((0 === e.clientX && 0 === e.clientY) || !t.isDragActive) return;
                                            const n = e.clientX,
                                                a = t.grabActivationPassed;
                                            !a && y(),
                                                n !== t.actualX &&
                                                    ((t.actualX = n),
                                                    x(n),
                                                    a && c(De.Drag, { dragId: t.id, currentCenterX: t.dropCenterX }),
                                                    v(t.dropCenterX - p.current.startCenterX));
                                        });
                                    return () => {
                                        t(), e();
                                    };
                                }
                            }, [y, c, E, a, s, B, x]);
                        const O = a
                            ? C()(
                                  an,
                                  'Grabber_base__enabled_b0',
                                  E && 'Grabber_base__active_71',
                                  I && 'Grabber_base__exit_1f',
                                  F && 'Grabber_base__waitingUpdate_1d',
                                  o && 'Grabber_base__updating_f1',
                              )
                            : C()(an, o && 'Grabber_base__showAnimation_d9');
                        return u().createElement(
                            'div',
                            {
                                id: t,
                                ref: b,
                                onClick: k,
                                onMouseDown: T,
                                onTransitionEnd: (e) => {
                                    const t = m.current;
                                    e.target === b.current &&
                                        t.grabActivationPassed &&
                                        ((t.grabActivationPassed = !1), D.run(() => c(De.DropExit, { dragId: t.id })));
                                },
                                className: O,
                                style: { left: S },
                            },
                            e,
                        );
                    };
                let un;
                !(function (e) {
                    (e[(e.Normal = 0)] = 'Normal'), (e[(e.Current = 1)] = 'Current'), (e[(e.Next = 2)] = 'Next');
                })(un || (un = {}));
                const on = ({ text: e, show: t, panelType: n, shellState: a, className: s }) => {
                        if (!e) return null;
                        const i = 'KEY_NONE' === e ? '..' : String(R.strings.readable_key_names.$dyn(e));
                        return u().createElement(
                            'div',
                            {
                                className: C()(
                                    'KeyLabel_base_ec',
                                    a === un.Current && 'KeyLabel_base__current_c2',
                                    a === un.Next && 'KeyLabel_base__next_fa',
                                    s,
                                ),
                            },
                            u().createElement(yt, { isTruncated: !0, text: i, show: t, panelType: n }),
                        );
                    },
                    rn = ({ children: e, slotType: t, slotId: n, panelType: a, isEnabled: s = !0 }) => {
                        const o = (0, i.useMemo)(() => ({ slotType: t, slotId: n }), [t, n]);
                        return u().createElement(
                            qe,
                            {
                                isEnabled: s,
                                args: o,
                                decoratorId: [Q.Battle, Q.Prebattle].includes(a)
                                    ? R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId')
                                    : 0,
                            },
                            u().createElement('div', null, e),
                        );
                    },
                    ln = Te()(
                        ({ observableModel: e }) => {
                            const t = {
                                    root: e.object(),
                                    ammunitionPanel: e.object('ammunitionPanel'),
                                    roleSkillSlot: e.object('roleSkillSlot'),
                                    vehicleInfo: e.object('vehicleInfo'),
                                    sectionGroups: e.array('ammunitionPanel.sectionGroups'),
                                    lastSlotAction: e.object('lastSlotAction'),
                                },
                                n = (0, $e.Om)(() => t.sectionGroups.get().length),
                                a = (0, $e.Om)(
                                    (e) => {
                                        const n = Ie(t.sectionGroups.get(), e);
                                        if (!n) throw Error(`No ammunition section group found with index: ${e}`);
                                        return Object.assign({}, n, {
                                            sections: Re(n.sections, (e) =>
                                                Object.assign({}, e, {
                                                    slots: Re(e.slots, (e) => Object.assign({}, e)),
                                                }),
                                            ),
                                            setupSelector: Object.assign({}, n.setupSelector, {
                                                states: Re(n.setupSelector.states, (e) => e),
                                            }),
                                        });
                                    },
                                    { equals: oe },
                                ),
                                s = (0, $e.Om)(() => Pe(t.sectionGroups.get(), (e, t) => e + t.sections.length, 0)),
                                i = (0, $e.Om)((e) => a(e).sections.length),
                                u = (0, $e.Om)(
                                    (e, t) => {
                                        const n = Ie(a(e).sections, t);
                                        if (!n) throw Error(`No ammunition section found with index: ${t}`);
                                        return n;
                                    },
                                    { equals: oe },
                                ),
                                o = (0, $e.Om)((e, t) => u(e, t).slots.length),
                                r = (0, $e.Om)((e, t) => Le(u(e, t).slots, (e) => Boolean(e) && !ne(e)).length),
                                l = (0, $e.Om)((e, t) => Ne(u(e, t).slots, (e) => e.intCD > 0)),
                                c = (0, $e.Om)(
                                    (e, t, n) => {
                                        const a = Ie(u(e, t).slots, n);
                                        if (!a) throw Error(`No ammunition slot found with index: ${n}`);
                                        return a;
                                    },
                                    { equals: oe },
                                ),
                                _ = (0, $e.Om)((e) => Me(a(e).sections, (e) => Fe(e.type)), { equals: oe }),
                                d = (0, $e.Om)(
                                    (e, t, n) => {
                                        const a = c(e, t, n);
                                        if (!a) throw Error(`No ammunition slot found with index: ${n}`);
                                        if (!a.specializations) throw Error('Selected slot have no specializations');
                                        return Object.assign({}, a.specializations, {
                                            specializations: Re(a.specializations.specializations, (e) =>
                                                Object.assign({}, e),
                                            ),
                                        });
                                    },
                                    { equals: oe },
                                );
                            return Object.assign({}, t, {
                                computes: {
                                    groups: { length: n, group: a },
                                    sections: { allSectionsLength: s, length: i, section: u, IDs: _ },
                                    slots: { length: o, filteredLength: r, slot: c, existFilled: l },
                                    specializations: d,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            sectionSelect: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onSectionSelect',
                            ),
                            dragDropSwap: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onDragDropSwap',
                            ),
                            slotClear: e.createCallback((e) => Object.assign({}, e), 'ammunitionPanel.onSlotClear'),
                            sectionResized: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onSectionResized',
                            ),
                            changeSetupIndex: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onChangeSetupIndex',
                            ),
                            specializationSelect: e.createCallback(
                                (e) => Object.assign({}, e),
                                'ammunitionPanel.onSpecializationSelect',
                            ),
                            escKeyDown: e.createCallbackNoArgs('onEscKeyDown'),
                        }),
                    ),
                    cn = (ln[0], ln[1]),
                    _n = (0, i.memo)(
                        ({ id: e, show: t = !0, onClick: n, soundHover: a = 'highlight', soundClick: s = 'play' }) => {
                            const o = (0, i.useState)(!1),
                                r = o[0],
                                l = o[1],
                                c = (0, i.useState)(!1),
                                _ = c[0],
                                d = c[1],
                                m = (0, i.useState)(!1),
                                p = m[0],
                                b = m[1],
                                g = (0, i.useCallback)((e) => {
                                    e.stopPropagation();
                                }, []),
                                E = (0, i.useCallback)(() => {
                                    d(!0), a && me(a);
                                }, [a]),
                                h = (0, i.useCallback)(() => {
                                    l(!1), d(!1);
                                }, []),
                                f = (0, i.useCallback)(
                                    (e) => {
                                        t && 0 === e.button && (l(!0), s && me(s));
                                    },
                                    [t, s],
                                ),
                                A = (0, i.useCallback)(
                                    (e) => {
                                        t && 0 === e.button && n && n();
                                    },
                                    [t, n],
                                );
                            (0, i.useEffect)(
                                () =>
                                    ee(() => {
                                        b(!0);
                                    }),
                                [],
                            );
                            const v = C()(
                                'Close_base_f3',
                                !p && 'Close_base__invisible_0e',
                                p && t && 'Close_base__shown_a2',
                                r && 'Close_base__down_2b',
                                _ && 'Close_base__hover_6d',
                            );
                            return u().createElement('div', {
                                id: e,
                                onMouseOver: E,
                                onMouseLeave: h,
                                onMouseDown: f,
                                onMouseUp: A,
                                className: v,
                                onClick: g,
                            });
                        },
                    );
                let dn;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(dn || (dn = {}));
                const mn = ({
                        children: e,
                        contentID: t,
                        decoratorID: n = 0,
                        targetId: a = 0,
                        args: s,
                        isEnabled: u = !0,
                        onMouseDown: o,
                    }) => {
                        const r = (0, i.useCallback)(() => {
                                (0, z.c9)(z.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: n,
                                    targetID: a,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: s,
                                }),
                                    pe.playYes();
                            }, [s, t, n, a]),
                            l = (0, i.useCallback)(() => {
                                (0, z.c9)(z.B0.CONTEXT_MENU, {
                                    contentID: t,
                                    decoratorID: n,
                                    targetID: a,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [t, n, a]),
                            c = (0, i.useCallback)(
                                (e) => {
                                    o && o(e), ((e) => e.button === dn.RIGHT)(e) && r();
                                },
                                [o, r],
                            );
                        return (
                            (0, i.useEffect)(() => {
                                !1 === u && l();
                            }, [u, l]),
                            u ? (0, i.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    pn = ['children'];
                function bn() {
                    return (
                        (bn = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        bn.apply(null, arguments)
                    );
                }
                const gn = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (t.indexOf(a) >= 0) continue;
                                    n[a] = e[a];
                                }
                            return n;
                        })(e, pn);
                    return u().createElement(
                        mn,
                        bn({}, n, { contentID: R.views.common.BackportContextMenu('resId') }),
                        t,
                    );
                };
                function En() {
                    const e = (0, i.useRef)(0);
                    return (
                        nn(() => {
                            window.clearTimeout(e.current);
                        }),
                        (0, i.useMemo)(
                            () => ({
                                run: (t, n) => {
                                    window.clearTimeout(e.current),
                                        (e.current = window.setTimeout(() => {
                                            (e.current = 0), t();
                                        }, n));
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
                const hn = 'select',
                    fn = 'undo',
                    An = 'cancel',
                    vn = 'swap',
                    Cn = 'demount',
                    Dn = 'demount_from_setup',
                    Fn = 'demount_from_setups',
                    Sn = 'destroy',
                    Bn = 'upgrade',
                    yn = 'add_one',
                    wn = 1600;
                let xn;
                !(function (e) {
                    (e.RIGHT = 'Right'),
                        (e.LEFT = 'Left'),
                        (e.SWAP = 'Swap'),
                        (e.FITTING = 'Fitting'),
                        (e.FITTING_REMOVE = 'FittingRemove'),
                        (e.FADE = 'Fade'),
                        (e.DESTROY = 'Destroy'),
                        (e.DEMOUNT = 'Demount');
                })(xn || (xn = {}));
                const Tn = { [vn]: 200, [fn]: 250, [hn]: 250, [Sn]: 1400, [Cn]: wn, [Fn]: wn, [Dn]: wn },
                    kn = { enterActive: 'BackEffects_shine__enterActive_54' },
                    In = { enterActive: 'BackEffects_sparks__enterActive_79' },
                    On = { enterActive: 'BackEffects_nut__enterActive_b8' },
                    Rn = { enterActive: 'BackEffects_wrench__enterActive_ca' },
                    Nn = [Cn, Fn],
                    Ln = u().memo(({ in: e, actionType: t }) =>
                        u().createElement(
                            u().Fragment,
                            null,
                            u().createElement(
                                ct.Z,
                                { in: e, timeout: 200, classNames: kn },
                                u().createElement('div', { className: 'BackEffects_shine_f6' }),
                            ),
                            u().createElement(
                                ct.Z,
                                { in: e, timeout: 400, classNames: In },
                                u().createElement('div', { className: 'BackEffects_sparks_55' }),
                            ),
                            Nn.includes(t) &&
                                u().createElement(
                                    u().Fragment,
                                    null,
                                    u().createElement(
                                        ct.Z,
                                        { in: e, timeout: 600, classNames: On },
                                        u().createElement('div', { className: 'BackEffects_nut_79' }),
                                    ),
                                    u().createElement(
                                        ct.Z,
                                        { in: e, timeout: 600, classNames: Rn },
                                        u().createElement('div', { className: 'BackEffects_wrench_5a' }),
                                    ),
                                ),
                        ),
                    ),
                    Mn = ({ inProp: e, maskImage: t }) =>
                        u().createElement(
                            ct.Z,
                            { in: e, timeout: 1200, classNames: { enterActive: 'ColorMask_base__enterActive_62' } },
                            u().createElement('div', {
                                className: 'ColorMask_base_60',
                                style: { maskImage: `url(${t})` },
                            }),
                        ),
                    Pn = {
                        base__exitLeft: 'SlotTransitions_base__exitLeft_d8',
                        'animation-left': 'SlotTransitions_animation-left_27',
                        base__exitLeftFade: 'SlotTransitions_base__exitLeftFade_53',
                        'animation-fade': 'SlotTransitions_animation-fade_ce',
                        base__enterRight: 'SlotTransitions_base__enterRight_bb',
                        'animation-right': 'SlotTransitions_animation-right_31',
                        base__enterRightFade: 'SlotTransitions_base__enterRightFade_63',
                        base__exitRight: 'SlotTransitions_base__exitRight_b9',
                        base__enterLeft: 'SlotTransitions_base__enterLeft_e9',
                        base__exitRightSwap: 'SlotTransitions_base__exitRightSwap_64',
                        'animation-right-long': 'SlotTransitions_animation-right-long_bd',
                        base__enterRightSwap: 'SlotTransitions_base__enterRightSwap_5e',
                        base__enterLeftSwap: 'SlotTransitions_base__enterLeftSwap_da',
                        'animation-left-long': 'SlotTransitions_animation-left-long_ec',
                        base__exitLeftSwap: 'SlotTransitions_base__exitLeftSwap_c3',
                        base__exitFade: 'SlotTransitions_base__exitFade_4c',
                        base__enterFade: 'SlotTransitions_base__enterFade_77',
                        base: 'SlotTransitions_base_6d',
                        base__enter: 'SlotTransitions_base__enter_54',
                        base__enterFitting: 'SlotTransitions_base__enterFitting_c7',
                        baseShells__exitLeft: 'SlotTransitions_baseShells__exitLeft_1e',
                        'animation-left-shells': 'SlotTransitions_animation-left-shells_0d',
                        baseShells__enterRight: 'SlotTransitions_baseShells__enterRight_66',
                        'animation-right-shells': 'SlotTransitions_animation-right-shells_7c',
                        baseShells__exitRight: 'SlotTransitions_baseShells__exitRight_e4',
                        baseShells__enterLeft: 'SlotTransitions_baseShells__enterLeft_94',
                        baseShells__exitRightSwap: 'SlotTransitions_baseShells__exitRightSwap_fd',
                        'animation-right-long-shells': 'SlotTransitions_animation-right-long-shells_41',
                        baseShells__enterRightSwap: 'SlotTransitions_baseShells__enterRightSwap_41',
                        baseShells__enterLeftSwap: 'SlotTransitions_baseShells__enterLeftSwap_19',
                        'animation-left-long-shells': 'SlotTransitions_animation-left-long-shells_00',
                        baseShells__exitLeftSwap: 'SlotTransitions_baseShells__exitLeftSwap_04',
                        baseShells__exitFade: 'SlotTransitions_baseShells__exitFade_1b',
                        baseShells__enterFade: 'SlotTransitions_baseShells__enterFade_72',
                        baseOptDevices__exitLeft: 'SlotTransitions_baseOptDevices__exitLeft_fe',
                        baseOptDevices__exitLeftFade: 'SlotTransitions_baseOptDevices__exitLeftFade_8a',
                        baseOptDevices__enterRight: 'SlotTransitions_baseOptDevices__enterRight_5d',
                        baseOptDevices__enterRightFade: 'SlotTransitions_baseOptDevices__enterRightFade_2c',
                        baseOptDevices__exitRight: 'SlotTransitions_baseOptDevices__exitRight_72',
                        baseOptDevices__enterLeft: 'SlotTransitions_baseOptDevices__enterLeft_0f',
                        baseOptDevices__exitRightSwap: 'SlotTransitions_baseOptDevices__exitRightSwap_09',
                        baseOptDevices__enterRightSwap: 'SlotTransitions_baseOptDevices__enterRightSwap_04',
                        baseOptDevices__enterLeftSwap: 'SlotTransitions_baseOptDevices__enterLeftSwap_52',
                        baseOptDevices__exitLeftSwap: 'SlotTransitions_baseOptDevices__exitLeftSwap_e9',
                        baseOptDevices__enterFitting: 'SlotTransitions_baseOptDevices__enterFitting_8b',
                        'animation-fitting': 'SlotTransitions_animation-fitting_24',
                        baseOptDevices__exitFittingRemove: 'SlotTransitions_baseOptDevices__exitFittingRemove_fc',
                        'animation-fitting-remove': 'SlotTransitions_animation-fitting-remove_e0',
                        baseOptDevices__exitActiveFitting: 'SlotTransitions_baseOptDevices__exitActiveFitting_d0',
                        baseOptDevices__exitDestroy: 'SlotTransitions_baseOptDevices__exitDestroy_c9',
                        'animation-destroy': 'SlotTransitions_animation-destroy_12',
                        baseOptDevices__enterDestroy: 'SlotTransitions_baseOptDevices__enterDestroy_19',
                        baseOptDevices__exitDemount: 'SlotTransitions_baseOptDevices__exitDemount_e3',
                        'animation-bright-up': 'SlotTransitions_animation-bright-up_8e',
                        'animation-demount': 'SlotTransitions_animation-demount_d8',
                        baseOptDevices__enterDemount: 'SlotTransitions_baseOptDevices__enterDemount_8a',
                        baseOptDevices__exitFade: 'SlotTransitions_baseOptDevices__exitFade_10',
                        baseOptDevices__enterFade: 'SlotTransitions_baseOptDevices__enterFade_cf',
                        baseOptDevices__enterDemountFade: 'SlotTransitions_baseOptDevices__enterDemountFade_57',
                        baseConsumables__exitLeft: 'SlotTransitions_baseConsumables__exitLeft_d9',
                        baseConsumables__exitLeftFade: 'SlotTransitions_baseConsumables__exitLeftFade_4f',
                        baseConsumables__enterRight: 'SlotTransitions_baseConsumables__enterRight_02',
                        baseConsumables__enterRightFade: 'SlotTransitions_baseConsumables__enterRightFade_c6',
                        baseConsumables__exitRight: 'SlotTransitions_baseConsumables__exitRight_39',
                        baseConsumables__enterLeft: 'SlotTransitions_baseConsumables__enterLeft_97',
                        baseConsumables__exitRightSwap: 'SlotTransitions_baseConsumables__exitRightSwap_8a',
                        baseConsumables__enterRightSwap: 'SlotTransitions_baseConsumables__enterRightSwap_28',
                        baseConsumables__enterLeftSwap: 'SlotTransitions_baseConsumables__enterLeftSwap_8e',
                        baseConsumables__exitLeftSwap: 'SlotTransitions_baseConsumables__exitLeftSwap_0e',
                        baseConsumables__enterFitting: 'SlotTransitions_baseConsumables__enterFitting_13',
                        baseConsumables__exitFittingRemove: 'SlotTransitions_baseConsumables__exitFittingRemove_01',
                        baseConsumables__exitActiveFitting: 'SlotTransitions_baseConsumables__exitActiveFitting_10',
                        baseConsumables__exitFade: 'SlotTransitions_baseConsumables__exitFade_5b',
                        baseConsumables__enterFade: 'SlotTransitions_baseConsumables__enterFade_bd',
                        baseBattleAbilities__exitLeft: 'SlotTransitions_baseBattleAbilities__exitLeft_52',
                        baseBattleAbilities__exitLeftFade: 'SlotTransitions_baseBattleAbilities__exitLeftFade_a9',
                        baseBattleAbilities__enterRight: 'SlotTransitions_baseBattleAbilities__enterRight_7b',
                        baseBattleAbilities__enterRightFade: 'SlotTransitions_baseBattleAbilities__enterRightFade_d3',
                        baseBattleAbilities__exitRight: 'SlotTransitions_baseBattleAbilities__exitRight_fc',
                        baseBattleAbilities__enterLeft: 'SlotTransitions_baseBattleAbilities__enterLeft_97',
                        baseBattleAbilities__exitRightSwap: 'SlotTransitions_baseBattleAbilities__exitRightSwap_7d',
                        baseBattleAbilities__enterRightSwap: 'SlotTransitions_baseBattleAbilities__enterRightSwap_e5',
                        baseBattleAbilities__enterLeftSwap: 'SlotTransitions_baseBattleAbilities__enterLeftSwap_ca',
                        baseBattleAbilities__exitLeftSwap: 'SlotTransitions_baseBattleAbilities__exitLeftSwap_c0',
                        baseBattleAbilities__enterFitting: 'SlotTransitions_baseBattleAbilities__enterFitting_de',
                        baseBattleAbilities__exitFittingRemove:
                            'SlotTransitions_baseBattleAbilities__exitFittingRemove_bc',
                        baseBattleAbilities__exitActiveFitting:
                            'SlotTransitions_baseBattleAbilities__exitActiveFitting_3d',
                        baseBattleAbilities__exitFade: 'SlotTransitions_baseBattleAbilities__exitFade_21',
                        baseBattleAbilities__enterFade: 'SlotTransitions_baseBattleAbilities__enterFade_15',
                        baseBattleBoosters__enterFitting: 'SlotTransitions_baseBattleBoosters__enterFitting_56',
                        baseBattleBoosters__exitFittingRemove:
                            'SlotTransitions_baseBattleBoosters__exitFittingRemove_e5',
                        baseBattleBoosters__exitActiveFitting:
                            'SlotTransitions_baseBattleBoosters__exitActiveFitting_f1',
                    },
                    $n = { enter: Pn.base__enter, exit: Pn.base__enter },
                    Hn = (0, te.Pi)(
                        ({
                            children: e,
                            slotIndex: t,
                            uniqueKey: n,
                            slotType: a,
                            isEmpty: s = !1,
                            imageSource: o,
                            itemInstalledSetupIndex: r,
                        }) => {
                            const l = cn().model.lastSlotAction.get(),
                                c = l.leftID,
                                _ = l.rightID,
                                d = l.leftIntCD,
                                m = l.rightIntCD,
                                p = l.actionType,
                                b = l.intCD,
                                g = (0, i.useState)(!0),
                                E = g[0],
                                h = g[1],
                                f = (0, i.useState)(!0),
                                A = f[0],
                                v = f[1],
                                C = (0, i.useState)(o),
                                D = C[0],
                                F = C[1],
                                S = (0, i.useState)(n),
                                B = S[0],
                                y = S[1],
                                w = (0, i.useState)(r),
                                x = w[0],
                                T = w[1],
                                k = En(),
                                I = En(),
                                O = (b === n || b === B) && x !== r && [Sn, Cn, Fn].includes(p),
                                R = -1 === d || -1 === m,
                                N = a ? `base${a[0].toUpperCase() + a.slice(1)}` : 'base',
                                L = Tn[p] || 0;
                            (0, i.useEffect)(() => {
                                s || F(o);
                            }, [s, o]);
                            const M = (0, i.useCallback)(
                                    (e) => {
                                        const n = Object.assign({}, $n);
                                        switch (p) {
                                            case vn: {
                                                const e = c === t ? xn.RIGHT : xn.LEFT,
                                                    a = _ - c != 1 ? xn.SWAP : '';
                                                (n.enterDone = Pn[`${N}__enter${e}${a}`]),
                                                    (n.exit = Pn[`${N}__exit${e}${a}`]),
                                                    R &&
                                                        (s
                                                            ? (n.enterDone = Pn[`${N}__enter${xn.FADE}`])
                                                            : (n.exit = Pn[`${N}__exit${xn.FADE}`]));
                                                break;
                                            }
                                            case Sn:
                                                (n.enterDone = Pn[`${N}__enter${xn.DESTROY}`]),
                                                    (n.exit = Pn[`${N}__exit${xn.DESTROY}`]),
                                                    k.run(() => h(!0), 900),
                                                    v(!0);
                                                break;
                                            case Fn:
                                            case Cn:
                                                (n.enter = Pn[`${N}__enter${xn.DEMOUNT}${xn.FADE}`]),
                                                    (n.exit = Pn[`${N}__exit${xn.DEMOUNT}`]),
                                                    k.run(() => h(!0), 900);
                                                break;
                                            case hn:
                                            case fn:
                                                if (a !== Et) {
                                                    const e = p === hn ? xn.FITTING : xn.FITTING_REMOVE;
                                                    (n.enter = Pn[`${N}__enter${e}`]),
                                                        (n.exit = Pn[`${N}__exit${e}`]),
                                                        (n.exitActive = Pn[`${N}__exitActive${xn.FITTING}`]);
                                                } else
                                                    (n.enterDone = Pn[`${N}__enter${xn.FADE}`]),
                                                        (n.exit = Pn[`${N}__exit${xn.FADE}`]);
                                                break;
                                            default:
                                                return e;
                                        }
                                        return u().cloneElement(e, { classNames: n, timeout: L });
                                    },
                                    [p, L, c, t, _, N, R, s, k, a],
                                ),
                                P = (0, i.useCallback)(
                                    (e) => {
                                        I.run(() => {
                                            (e.className = ''), e.classList.add(Pn.base), y(n), T(r);
                                        }, L);
                                    },
                                    [I, L, n, r],
                                ),
                                $ = (0, i.useCallback)(() => {
                                    h(!1), v(!1);
                                }, []);
                            return u().createElement(
                                u().Fragment,
                                null,
                                u().createElement(
                                    lt.Z,
                                    { component: null, childFactory: M },
                                    u().createElement(
                                        ct.Z,
                                        {
                                            key: n,
                                            timeout: L,
                                            classNames: $n,
                                            onEntered: P,
                                            onExiting: $,
                                            unmountOnExit: !0,
                                        },
                                        u().createElement('div', { className: Pn.base }, e),
                                    ),
                                ),
                                O &&
                                    u().createElement(
                                        u().Fragment,
                                        null,
                                        u().createElement(Ln, { in: E, actionType: p }),
                                        u().createElement(Mn, { inProp: A, maskImage: D }),
                                    ),
                            );
                        },
                    ),
                    zn = (0, te.Pi)(
                        ({
                            intCD: e,
                            id: t,
                            itemInstalledSetupIdx: n,
                            isMountedMoreThanOne: a,
                            isInstalled: s,
                            isDisabled: o,
                            imageSource: r,
                            isEmpty: l,
                            slotIndex: c,
                            slotType: _,
                            contextMenuDisabled: d,
                            isSetupSwitching: m,
                            children: p,
                        }) => {
                            const b = cn().model.root.get().vehicleCD,
                                g = (0, i.useState)(!0),
                                E = g[0],
                                h = g[1],
                                f = En();
                            (0, i.useEffect)(() => {
                                h(!1), f.run(() => h(!0), 100);
                            }, [b]);
                            const A = (0, i.useMemo)(
                                () => ({
                                    intCD: e,
                                    slotType: _,
                                    installedSlotId: t,
                                    isMounted: s,
                                    fieldType: 1,
                                    itemInstalledSetupIdx: n,
                                    itemInstalledSetupSlotIdx: t,
                                    isMountedMoreThanOne: a,
                                }),
                                [e, _, t, n, s, a],
                            );
                            return E
                                ? u().createElement(
                                      Hn,
                                      {
                                          uniqueKey: e,
                                          isEmpty: l,
                                          slotIndex: c,
                                          slotType: _,
                                          imageSource: r,
                                          itemInstalledSetupIndex: n,
                                      },
                                      u().createElement(
                                          gn,
                                          { isEnabled: !(m || d || o || l), args: A },
                                          u().createElement('div', null, p),
                                      ),
                                  )
                                : u().createElement('div', null, p);
                        },
                    ),
                    Wn = (0, te.Pi)(
                        ({
                            slotType: e,
                            slotIndex: t,
                            level: n,
                            isSelected: a,
                            isSetupSwitching: s,
                            isSectionSelected: o,
                            onActiveSlotChanged: r,
                            onSlotSelected: l,
                            onActiveSlotRefChanged: c,
                            onSlotClear: _,
                            panelType: d,
                            isDisabled: m = !1,
                            isBorderActive: p,
                            isIncompatible: b = !1,
                            grabberId: g,
                            containerRef: E,
                            activeDragId: h,
                            handleGrabberAction: f,
                            forceLeftUpdate: A,
                            potentialDropId: v,
                            blockOnGrabIds: C,
                            contextMenuDisabled: D,
                            groupIndex: F,
                            sectionIndex: S,
                        }) => {
                            const B = cn().model.computes.slots.slot(F, S, t),
                                y = B.imageSource,
                                w = B.isInstalled,
                                x = B.itemInstalledSetupIdx,
                                T = B.isMountedMoreThanOne,
                                k = B.overlayType,
                                I = B.keyName,
                                O = B.categoryImgSource,
                                R = B.withAttention,
                                N = B.id,
                                L = B.intCD,
                                M = d === Q.Setup,
                                P = !se(d),
                                $ = !ae(d),
                                H = d === Q.Compare,
                                z = M && o && P,
                                W = (0, i.useRef)(!1),
                                j = (0, i.useRef)(null),
                                G = -1 === L;
                            (0, i.useEffect)(() => {
                                if (!W.current && o && a)
                                    return ee(() => {
                                        r && r(j, e, N), (W.current = !0);
                                    });
                                W.current = !0;
                            }, [N, o, a, r, e]),
                                (0, i.useEffect)(() => {
                                    a && c(j);
                                }, [a, c]);
                            const U = (0, i.useCallback)(() => (!a && P && !s && l(e, N), 500), [N, P, a, s, l, e]),
                                q = tn(U),
                                V = (0, i.useCallback)(() => {
                                    m || q('');
                                }, [q, m]),
                                X = (0, i.useCallback)(() => {
                                    $ && !a && !h && !m && pe.playHighlight();
                                }, [a, h, m, $]);
                            (0, i.useEffect)(() => {
                                v && pe.playHighlight();
                            }, [v]);
                            const K = (0, i.useCallback)(() => {
                                    null == _ || _(N, e);
                                }, [N, _, e]),
                                Y = M && !w,
                                Z = Boolean(g && v === g),
                                J = g && (z || H),
                                te = `${e}-slot-${N}`,
                                ne = O && O.length > 0,
                                ie = ne ? { backgroundImage: `url(${O})` } : {},
                                ue = {
                                    id: g,
                                    containerRef: E,
                                    isEnabled: !G,
                                    onClick: V,
                                    isUpdateAvailable: Boolean(h),
                                    handleAction: f,
                                    forceCenterX: A,
                                    blockOnGrabIds: C,
                                },
                                oe = {
                                    isEmpty: G,
                                    intCD: L,
                                    slotType: e,
                                    slotIndex: t,
                                    imageSource: y,
                                    isDisabled: m,
                                    isInstalled: w,
                                    id: N,
                                    itemInstalledSetupIdx: x,
                                    isMountedMoreThanOne: T,
                                    contextMenuDisabled: D,
                                    isSetupSwitching: s,
                                };
                            return u().createElement(
                                'div',
                                { className: 'Slot_base_3a', onMouseEnter: X, id: te },
                                (o || H) &&
                                    !w &&
                                    u().createElement(
                                        'div',
                                        { className: 'Slot_close_bb' },
                                        u().createElement(_n, { id: `close-${te}`, show: !h, onClick: K }),
                                    ),
                                u().createElement(
                                    rn,
                                    { slotType: e, slotId: N, isEnabled: !h, panelType: d },
                                    u().createElement(
                                        'div',
                                        { ref: j },
                                        u().createElement(
                                            Kt,
                                            {
                                                activeDragId: h,
                                                slotType: e,
                                                isSelected: a,
                                                isBorderActive: Boolean(p),
                                                panelType: d,
                                                isDisabled: m,
                                                isPotentialDrop: Z,
                                                onClick: J ? void 0 : V,
                                            },
                                            P &&
                                                u().createElement(
                                                    'div',
                                                    { className: 'Slot_label_e6' },
                                                    u().createElement(on, { text: I, show: Boolean(o), panelType: d }),
                                                ),
                                            u().createElement(
                                                Vt,
                                                { when: Boolean(J), wrapper: sn, withProps: ue },
                                                u().createElement(
                                                    Vt,
                                                    { when: P, wrapper: zn, withProps: oe },
                                                    u().createElement(en, {
                                                        imageSource: y,
                                                        isIncompatible: b,
                                                        overlayType: k,
                                                        level: n,
                                                        isTemporary: Y,
                                                        withAttention: R,
                                                    }),
                                                ),
                                            ),
                                            ne &&
                                                u().createElement(
                                                    u().Fragment,
                                                    null,
                                                    u().createElement('span', { className: 'Slot_shadow_a7' }),
                                                    u().createElement('span', {
                                                        className: 'Slot_category_2c',
                                                        style: ie,
                                                    }),
                                                ),
                                            m && u().createElement('div', { className: 'Slot_disabled_5d' }),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    jn = ['rank'],
                    Gn = (e) => {
                        let t = e.rank,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, jn);
                        return u().createElement(
                            'div',
                            { className: 'BattleAbilitySlot_base_3c' },
                            u().createElement(Wn, n),
                            t &&
                                u().createElement('div', {
                                    className: 'BattleAbilitySlot_rank_60',
                                    style: { backgroundImage: `url(${t})` },
                                }),
                        );
                    },
                    Un = {
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
                let qn, Vn;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(qn || (qn = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(Vn || (Vn = {}));
                const Xn = ({
                    children: e,
                    size: t,
                    isFocused: n,
                    type: a,
                    disabled: s,
                    mixClass: o,
                    soundHover: r,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: _,
                    onMouseDown: d,
                    onMouseUp: m,
                    onMouseLeave: p,
                    onClick: b,
                }) => {
                    const g = (0, i.useRef)(null),
                        E = (0, i.useState)(n),
                        h = E[0],
                        f = E[1],
                        A = (0, i.useState)(!1),
                        v = A[0],
                        D = A[1];
                    return (
                        (0, i.useEffect)(() => {
                            function e(e) {
                                h && null !== g.current && !g.current.contains(e.target) && f(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [h]),
                        (0, i.useEffect)(() => {
                            f(n);
                        }, [n]),
                        u().createElement(
                            'div',
                            {
                                ref: g,
                                className: C()(
                                    Un.base,
                                    Un[`base__${a}`],
                                    s && Un.base__disabled,
                                    t && Un[`base__${t}`],
                                    h && Un.base__focus,
                                    v && Un.base__highlightActive,
                                    o,
                                ),
                                onMouseEnter: function (e) {
                                    s || (null !== r && me(r), c && c(e));
                                },
                                onMouseMove: function (e) {
                                    _ && _(e);
                                },
                                onMouseUp: function (e) {
                                    s || (m && m(e), D(!1));
                                },
                                onMouseDown: function (e) {
                                    s ||
                                        (null !== l && me(l),
                                        d && d(e),
                                        n && (s || (g.current && (g.current.focus(), f(!0)))),
                                        D(!0));
                                },
                                onMouseLeave: function (e) {
                                    s || (p && p(e), D(!1));
                                },
                                onClick: function (e) {
                                    s || (b && b(e));
                                },
                            },
                            a !== qn.ghost &&
                                u().createElement(
                                    u().Fragment,
                                    null,
                                    u().createElement('div', { className: Un.back }),
                                    u().createElement('span', { className: Un.texture }),
                                ),
                            u().createElement(
                                'span',
                                { className: C()(Un.state, Un.state__default) },
                                u().createElement('span', { className: Un.stateDisabled }),
                                u().createElement('span', { className: Un.stateHighlightHover }),
                                u().createElement('span', { className: Un.stateHighlightActive }),
                            ),
                            u().createElement(
                                'span',
                                { className: Un.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                Xn.defaultProps = { type: qn.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Kn = Xn,
                    Yn = {
                        base: 'Specialization_base_ec',
                        base__tiny: 'Specialization_base__tiny_fe',
                        base__small: 'Specialization_base__small_a3',
                        base__medium: 'Specialization_base__medium_85',
                        base__large: 'Specialization_base__large_07',
                        base__huge: 'Specialization_base__huge_33',
                        base__setup: 'Specialization_base__setup_5e',
                        base__correct: 'Specialization_base__correct_4c',
                        glow: 'Specialization_glow_f0',
                        icon: 'Specialization_icon_3a',
                        icon__tiny: 'Specialization_icon__tiny_05',
                        icon__small: 'Specialization_icon__small_cf',
                        icon__medium: 'Specialization_icon__medium_ed',
                        icon__large: 'Specialization_icon__large_98',
                        icon__huge: 'Specialization_icon__huge_f7',
                        specializationWrapper: 'Specialization_specializationWrapper_bf',
                        specializationButton: 'Specialization_specializationButton_45',
                    },
                    Zn = ({
                        name: e,
                        isCorrect: t,
                        isSpecializationActive: n = !0,
                        isDynamic: a,
                        mediaSize: s,
                        isClickable: o,
                        onSpecializationClick: r,
                        index: l,
                    }) => {
                        const c = s !== be.None,
                            _ = (0, i.useCallback)(() => {
                                o && n && r && r(l);
                            }, [l, o, n, r]),
                            d = (0, i.useMemo)(() => {
                                let n = '';
                                c && (n = (s === be.Large || s === be.Huge ? be.Large : be.Medium) + '_');
                                const a = `${n}${e}_${t ? 'on' : 'off'}`,
                                    i = R.images.gui.maps.icons.specialization.$dyn(a);
                                return i && { backgroundImage: `url(${i})` };
                            }, [e, t, s, c]),
                            m = (0, i.useMemo)(
                                () => ({ spec: e, isDyn: a, isClickable: o, tooltip: 'hangarSlotSpec' }),
                                [e, a, o],
                            );
                        if (!d) return null;
                        const p = C()(
                                `specialization-${e}`,
                                Yn.base,
                                c && Yn[`base__${s}`],
                                n && Yn.base__setup,
                                t && Yn.base__correct,
                            ),
                            b = C()(Yn.icon, c && Yn[`icon__${s}`]),
                            g = c ? '' : Yn.specializationWrapper,
                            E = u().createElement(
                                'div',
                                { key: e, className: p },
                                u().createElement('div', { className: Yn.glow }),
                                u().createElement('div', { className: b, style: d }),
                            );
                        return u().createElement(
                            qe,
                            { args: m },
                            o && n
                                ? u().createElement(
                                      Kn,
                                      { size: Vn.small, type: qn.ghost, mixClass: Yn.specializationButton, onClick: _ },
                                      E,
                                  )
                                : u().createElement('div', { className: g }, E),
                        );
                    };
                function Jn() {
                    return (
                        (Jn = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        Jn.apply(null, arguments)
                    );
                }
                const Qn = ({
                        specializations: e,
                        isSpecializationActive: t = !0,
                        isDynamic: n,
                        mediaSize: a = be.None,
                        activeSpecsMask: s,
                        onSpecializationClick: i,
                    }) =>
                        e.length
                            ? u().createElement(
                                  'div',
                                  { className: 'Specializations_base_ab', key: s },
                                  Re(e, (e, s) =>
                                      u().createElement(
                                          Zn,
                                          Jn({ index: s, key: e.name }, e, {
                                              isSpecializationActive: t,
                                              isDynamic: n,
                                              mediaSize: a,
                                              onSpecializationClick: i,
                                          }),
                                      ),
                                  ),
                              )
                            : null,
                    ea = ({ children: e, slotType: t, slotId: n, isEnabled: a = !0, panelType: s }) =>
                        u().createElement(
                            qe,
                            {
                                targetId: s !== Q.Setup ? R.views.halloween.lobby.widgets.TankSetupView('resId') : 0,
                                isEnabled: a,
                                args: { slotType: t, slotId: n },
                            },
                            u().createElement('div', null, e),
                        ),
                    ta = {
                        base__exitLeft: 'SlotTransitions_base__exitLeft_d6',
                        'animation-left': 'SlotTransitions_animation-left_e7',
                        base__exitLeftFade: 'SlotTransitions_base__exitLeftFade_95',
                        'animation-fade': 'SlotTransitions_animation-fade_d6',
                        base__enterRight: 'SlotTransitions_base__enterRight_09',
                        'animation-right': 'SlotTransitions_animation-right_1c',
                        base__enterRightFade: 'SlotTransitions_base__enterRightFade_17',
                        base__exitRight: 'SlotTransitions_base__exitRight_9a',
                        base__enterLeft: 'SlotTransitions_base__enterLeft_b3',
                        base__exitRightSwap: 'SlotTransitions_base__exitRightSwap_b4',
                        'animation-right-long': 'SlotTransitions_animation-right-long_63',
                        base__enterRightSwap: 'SlotTransitions_base__enterRightSwap_e9',
                        base__enterLeftSwap: 'SlotTransitions_base__enterLeftSwap_b0',
                        'animation-left-long': 'SlotTransitions_animation-left-long_fd',
                        base__exitLeftSwap: 'SlotTransitions_base__exitLeftSwap_fd',
                        base__exitFade: 'SlotTransitions_base__exitFade_0f',
                        base__enterFade: 'SlotTransitions_base__enterFade_a0',
                        base: 'SlotTransitions_base_ba',
                        base__enter: 'SlotTransitions_base__enter_7d',
                        base__enterFitting: 'SlotTransitions_base__enterFitting_ed',
                        baseShells__exitLeft: 'SlotTransitions_baseShells__exitLeft_27',
                        'animation-left-shells': 'SlotTransitions_animation-left-shells_e6',
                        baseShells__enterRight: 'SlotTransitions_baseShells__enterRight_35',
                        'animation-right-shells': 'SlotTransitions_animation-right-shells_71',
                        baseShells__exitRight: 'SlotTransitions_baseShells__exitRight_61',
                        baseShells__enterLeft: 'SlotTransitions_baseShells__enterLeft_1a',
                        baseShells__exitRightSwap: 'SlotTransitions_baseShells__exitRightSwap_0c',
                        'animation-right-long-shells': 'SlotTransitions_animation-right-long-shells_63',
                        baseShells__enterRightSwap: 'SlotTransitions_baseShells__enterRightSwap_05',
                        baseShells__enterLeftSwap: 'SlotTransitions_baseShells__enterLeftSwap_97',
                        'animation-left-long-shells': 'SlotTransitions_animation-left-long-shells_44',
                        baseShells__exitLeftSwap: 'SlotTransitions_baseShells__exitLeftSwap_93',
                        baseShells__exitFade: 'SlotTransitions_baseShells__exitFade_b0',
                        baseShells__enterFade: 'SlotTransitions_baseShells__enterFade_70',
                        baseOptDevices__exitLeft: 'SlotTransitions_baseOptDevices__exitLeft_6a',
                        baseOptDevices__exitLeftFade: 'SlotTransitions_baseOptDevices__exitLeftFade_4a',
                        baseOptDevices__enterRight: 'SlotTransitions_baseOptDevices__enterRight_f5',
                        baseOptDevices__enterRightFade: 'SlotTransitions_baseOptDevices__enterRightFade_99',
                        baseOptDevices__exitRight: 'SlotTransitions_baseOptDevices__exitRight_c6',
                        baseOptDevices__enterLeft: 'SlotTransitions_baseOptDevices__enterLeft_00',
                        baseOptDevices__exitRightSwap: 'SlotTransitions_baseOptDevices__exitRightSwap_5c',
                        baseOptDevices__enterRightSwap: 'SlotTransitions_baseOptDevices__enterRightSwap_18',
                        baseOptDevices__enterLeftSwap: 'SlotTransitions_baseOptDevices__enterLeftSwap_11',
                        baseOptDevices__exitLeftSwap: 'SlotTransitions_baseOptDevices__exitLeftSwap_9c',
                        baseOptDevices__enterFitting: 'SlotTransitions_baseOptDevices__enterFitting_d0',
                        'animation-fitting': 'SlotTransitions_animation-fitting_3f',
                        baseOptDevices__exitFittingRemove: 'SlotTransitions_baseOptDevices__exitFittingRemove_b9',
                        'animation-fitting-remove': 'SlotTransitions_animation-fitting-remove_a3',
                        baseOptDevices__exitActiveFitting: 'SlotTransitions_baseOptDevices__exitActiveFitting_ab',
                        baseOptDevices__exitDestroy: 'SlotTransitions_baseOptDevices__exitDestroy_64',
                        'animation-destroy': 'SlotTransitions_animation-destroy_ca',
                        baseOptDevices__enterDestroy: 'SlotTransitions_baseOptDevices__enterDestroy_d0',
                        baseOptDevices__exitDemount: 'SlotTransitions_baseOptDevices__exitDemount_c3',
                        'animation-bright-up': 'SlotTransitions_animation-bright-up_22',
                        'animation-demount': 'SlotTransitions_animation-demount_4b',
                        baseOptDevices__enterDemount: 'SlotTransitions_baseOptDevices__enterDemount_93',
                        baseOptDevices__exitFade: 'SlotTransitions_baseOptDevices__exitFade_df',
                        baseOptDevices__enterFade: 'SlotTransitions_baseOptDevices__enterFade_e3',
                        baseOptDevices__enterDemountFade: 'SlotTransitions_baseOptDevices__enterDemountFade_a8',
                        baseConsumables__exitLeft: 'SlotTransitions_baseConsumables__exitLeft_4d',
                        baseConsumables__exitLeftFade: 'SlotTransitions_baseConsumables__exitLeftFade_9e',
                        baseConsumables__enterRight: 'SlotTransitions_baseConsumables__enterRight_f6',
                        baseConsumables__enterRightFade: 'SlotTransitions_baseConsumables__enterRightFade_a5',
                        baseConsumables__exitRight: 'SlotTransitions_baseConsumables__exitRight_67',
                        baseConsumables__enterLeft: 'SlotTransitions_baseConsumables__enterLeft_1e',
                        baseConsumables__exitRightSwap: 'SlotTransitions_baseConsumables__exitRightSwap_00',
                        baseConsumables__enterRightSwap: 'SlotTransitions_baseConsumables__enterRightSwap_3b',
                        baseConsumables__enterLeftSwap: 'SlotTransitions_baseConsumables__enterLeftSwap_de',
                        baseConsumables__exitLeftSwap: 'SlotTransitions_baseConsumables__exitLeftSwap_a7',
                        baseConsumables__enterFitting: 'SlotTransitions_baseConsumables__enterFitting_69',
                        baseConsumables__exitFittingRemove: 'SlotTransitions_baseConsumables__exitFittingRemove_b2',
                        baseConsumables__exitActiveFitting: 'SlotTransitions_baseConsumables__exitActiveFitting_b6',
                        baseConsumables__exitFade: 'SlotTransitions_baseConsumables__exitFade_bd',
                        baseConsumables__enterFade: 'SlotTransitions_baseConsumables__enterFade_b9',
                        baseBattleAbilities__exitLeft: 'SlotTransitions_baseBattleAbilities__exitLeft_bf',
                        baseBattleAbilities__exitLeftFade: 'SlotTransitions_baseBattleAbilities__exitLeftFade_84',
                        baseBattleAbilities__enterRight: 'SlotTransitions_baseBattleAbilities__enterRight_88',
                        baseBattleAbilities__enterRightFade: 'SlotTransitions_baseBattleAbilities__enterRightFade_8b',
                        baseBattleAbilities__exitRight: 'SlotTransitions_baseBattleAbilities__exitRight_48',
                        baseBattleAbilities__enterLeft: 'SlotTransitions_baseBattleAbilities__enterLeft_ff',
                        baseBattleAbilities__exitRightSwap: 'SlotTransitions_baseBattleAbilities__exitRightSwap_ab',
                        baseBattleAbilities__enterRightSwap: 'SlotTransitions_baseBattleAbilities__enterRightSwap_e6',
                        baseBattleAbilities__enterLeftSwap: 'SlotTransitions_baseBattleAbilities__enterLeftSwap_f9',
                        baseBattleAbilities__exitLeftSwap: 'SlotTransitions_baseBattleAbilities__exitLeftSwap_33',
                        baseBattleAbilities__enterFitting: 'SlotTransitions_baseBattleAbilities__enterFitting_ae',
                        baseBattleAbilities__exitFittingRemove:
                            'SlotTransitions_baseBattleAbilities__exitFittingRemove_d4',
                        baseBattleAbilities__exitActiveFitting:
                            'SlotTransitions_baseBattleAbilities__exitActiveFitting_42',
                        baseBattleAbilities__exitFade: 'SlotTransitions_baseBattleAbilities__exitFade_41',
                        baseBattleAbilities__enterFade: 'SlotTransitions_baseBattleAbilities__enterFade_05',
                        baseBattleBoosters__enterFitting: 'SlotTransitions_baseBattleBoosters__enterFitting_0e',
                        baseBattleBoosters__exitFittingRemove:
                            'SlotTransitions_baseBattleBoosters__exitFittingRemove_19',
                        baseBattleBoosters__exitActiveFitting:
                            'SlotTransitions_baseBattleBoosters__exitActiveFitting_e6',
                        baseHw_consumables__exitLeft: 'SlotTransitions_baseHw_consumables__exitLeft_0d',
                        baseHw_consumables__exitLeftFade: 'SlotTransitions_baseHw_consumables__exitLeftFade_80',
                        baseHw_consumables__enterRight: 'SlotTransitions_baseHw_consumables__enterRight_70',
                        baseHw_consumables__enterRightFade: 'SlotTransitions_baseHw_consumables__enterRightFade_fb',
                        baseHw_consumables__exitRight: 'SlotTransitions_baseHw_consumables__exitRight_0a',
                        baseHw_consumables__enterLeft: 'SlotTransitions_baseHw_consumables__enterLeft_7c',
                        baseHw_consumables__exitRightSwap: 'SlotTransitions_baseHw_consumables__exitRightSwap_b0',
                        baseHw_consumables__enterRightSwap: 'SlotTransitions_baseHw_consumables__enterRightSwap_c9',
                        baseHw_consumables__enterLeftSwap: 'SlotTransitions_baseHw_consumables__enterLeftSwap_47',
                        baseHw_consumables__exitLeftSwap: 'SlotTransitions_baseHw_consumables__exitLeftSwap_16',
                        baseHw_consumables__enterFitting: 'SlotTransitions_baseHw_consumables__enterFitting_7c',
                        baseHw_consumables__exitFittingRemove:
                            'SlotTransitions_baseHw_consumables__exitFittingRemove_2f',
                        baseHw_consumables__exitActiveFitting:
                            'SlotTransitions_baseHw_consumables__exitActiveFitting_9d',
                        baseHw_consumables__exitFade: 'SlotTransitions_baseHw_consumables__exitFade_64',
                        baseHw_consumables__enterFade: 'SlotTransitions_baseHw_consumables__enterFade_b0',
                    },
                    na = { enter: ta.base__enter, exit: ta.base__enter },
                    aa = (0, te.Pi)(
                        ({
                            children: e,
                            slotIndex: t,
                            uniqueKey: n,
                            slotType: a,
                            isEmpty: s = !1,
                            imageSource: o,
                            itemInstalledSetupIdx: r,
                        }) => {
                            const l = We().model.lastSlotAction.get(),
                                c = l.leftID,
                                _ = l.rightID,
                                d = l.leftIntCD,
                                m = l.rightIntCD,
                                p = l.actionType,
                                b = l.intCD,
                                g = (0, i.useState)(!0),
                                E = g[0],
                                h = g[1],
                                f = (0, i.useState)(!0),
                                A = f[0],
                                v = f[1],
                                C = (0, i.useState)(o),
                                D = C[0],
                                F = C[1],
                                S = (0, i.useState)(n),
                                B = S[0],
                                y = S[1],
                                w = (0, i.useState)(r),
                                x = w[0],
                                T = w[1],
                                k = (0, i.useRef)(),
                                I = (0, i.useRef)(),
                                O = !((b !== n && b !== B) || x === r || (p !== Sn && p !== Cn)),
                                R = -1 === d || -1 === m,
                                N = a ? `base${a[0].toUpperCase() + a.slice(1)}` : 'base',
                                L = Tn[p] || 0;
                            (0, i.useEffect)(
                                () => () => {
                                    k.current && clearTimeout(k.current), I.current && clearTimeout(I.current);
                                },
                                [],
                            ),
                                (0, i.useEffect)(() => {
                                    s || F(o);
                                }, [s, o]);
                            const M = (0, i.useCallback)(
                                    (e) => {
                                        const n = Object.assign({}, na);
                                        switch (p) {
                                            case vn: {
                                                const e = c === t ? xn.RIGHT : xn.LEFT,
                                                    a = _ - c != 1 ? xn.SWAP : '';
                                                (n.enterDone = ta[`${N}__enter${e}${a}`]),
                                                    (n.exit = ta[`${N}__exit${e}${a}`]),
                                                    R &&
                                                        (s
                                                            ? (n.enterDone = ta[`${N}__enter${xn.FADE}`])
                                                            : (n.exit = ta[`${N}__exit${xn.FADE}`]));
                                                break;
                                            }
                                            case Sn:
                                                (n.enterDone = ta[`${N}__enter${xn.DESTROY}`]),
                                                    (n.exit = ta[`${N}__exit${xn.DESTROY}`]),
                                                    (k.current = setTimeout(() => h(!0), 900)),
                                                    v(!0);
                                                break;
                                            case Cn:
                                                (n.enter = ta[`${N}__enter${xn.DEMOUNT}${xn.FADE}`]),
                                                    (n.exit = ta[`${N}__exit${xn.DEMOUNT}`]),
                                                    (k.current = setTimeout(() => h(!0), 900));
                                                break;
                                            case hn:
                                            case fn:
                                                if (a !== Et) {
                                                    const e = p === hn ? xn.FITTING : xn.FITTING_REMOVE;
                                                    (n.enter = ta[`${N}__enter${e}`]),
                                                        (n.exit = ta[`${N}__exit${e}`]),
                                                        (n.exitActive = ta[`${N}__exitActive${xn.FITTING}`]);
                                                } else
                                                    (n.enterDone = ta[`${N}__enter${xn.FADE}`]),
                                                        (n.exit = ta[`${N}__exit${xn.FADE}`]);
                                                break;
                                            default:
                                                return e;
                                        }
                                        return u().cloneElement(e, { classNames: n, timeout: L });
                                    },
                                    [p, a, N, L, c, t, _, s, R],
                                ),
                                P = (0, i.useCallback)(
                                    (e) => {
                                        I.current = setTimeout(() => {
                                            (e.className = ''), e.classList.add(ta.base), y(n), T(r);
                                        }, L);
                                    },
                                    [L, n, r],
                                ),
                                $ = (0, i.useCallback)(() => {
                                    h(!1), v(!1);
                                }, []);
                            return u().createElement(
                                u().Fragment,
                                null,
                                u().createElement(
                                    lt.Z,
                                    { component: null, childFactory: M },
                                    u().createElement(
                                        ct.Z,
                                        {
                                            key: n,
                                            timeout: L,
                                            classNames: na,
                                            onEntered: P,
                                            onExiting: $,
                                            unmountOnExit: !0,
                                        },
                                        u().createElement('div', { className: ta.base }, e),
                                    ),
                                ),
                                O &&
                                    u().createElement(
                                        u().Fragment,
                                        null,
                                        u().createElement(Ln, { in: E, actionType: p }),
                                        u().createElement(Mn, { inProp: A, maskImage: D }),
                                    ),
                            );
                        },
                    ),
                    sa = u().memo(
                        ({
                            intCD: e,
                            id: t,
                            itemInstalledSetupIdx: n,
                            isMountedMoreThanOne: a,
                            isInstalled: s,
                            isDisabled: i,
                            imageSource: o,
                            isEmpty: r,
                            slotIndex: l,
                            slotType: c,
                            isBootCamp: _,
                            contextMenuDisabled: d,
                            isSetupSwitching: m,
                            children: p,
                        }) =>
                            u().createElement(
                                aa,
                                {
                                    uniqueKey: e,
                                    isEmpty: r,
                                    slotIndex: l,
                                    slotType: c,
                                    imageSource: o,
                                    itemInstalledSetupIdx: n,
                                },
                                u().createElement(
                                    gn,
                                    {
                                        isEnabled: !(m || d || i || r || _),
                                        args: {
                                            intCD: e,
                                            slotType: c,
                                            installedSlotId: t,
                                            isMounted: s,
                                            fieldType: 1,
                                            itemInstalledSetupIdx: n,
                                            itemInstalledSetupSlotIdx: t,
                                            isMountedMoreThanOne: a,
                                        },
                                    },
                                    u().createElement('div', null, p),
                                ),
                            ),
                    ),
                    ia = R.images.halloween.gui.maps.icons.tanksetup.panel.empty(),
                    ua = R.images.halloween.gui.maps.icons.tanksetup.panel.empty_hover(),
                    oa = (e, t, n, a, s) => (t ? (a || s || !n ? ia : ua) : e),
                    ra = (0, te.Pi)(
                        ({
                            slotType: e,
                            slotIndex: t,
                            level: n,
                            isSelected: a,
                            isSetupSwitching: s,
                            isSectionSelected: o,
                            onActiveSlotChanged: l,
                            onSlotSelected: c,
                            onActiveSlotRefChanged: _,
                            onSlotClear: d,
                            panelType: m,
                            isDisabled: p = !1,
                            isBorderActive: b,
                            isIncompatible: g = !1,
                            grabberId: E,
                            containerRef: h,
                            activeDragId: f,
                            handleGrabberAction: A,
                            forceLeftUpdate: v,
                            potentialDropId: C,
                            blockOnGrabIds: D,
                            contextMenuDisabled: F,
                            groupIndex: S,
                            sectionIndex: B,
                        }) => {
                            const y = We().model,
                                w = y.computes.slots.slot(S, B, t),
                                x = w.imageSource,
                                T = w.isInstalled,
                                k = w.itemInstalledSetupIdx,
                                I = w.isMountedMoreThanOne,
                                O = w.overlayType,
                                R = w.keyName,
                                N = w.categoryImgSource,
                                L = w.withAttention,
                                M = w.id,
                                P = w.intCD,
                                $ = (0, i.useState)(!1),
                                H = $[0],
                                z = $[1],
                                W = m === Q.Setup,
                                j = !se(m),
                                G = !ae(m),
                                U = m === Q.Compare,
                                q = W && o && j,
                                V = (0, i.useRef)(!1),
                                X = (0, i.useRef)(null),
                                K = -1 === P;
                            (0, i.useEffect)(() => {
                                if (!V.current && o && a)
                                    return ee(() => {
                                        l && l(X, e, M), (V.current = !0);
                                    });
                                V.current = !0;
                            }, [M, o, a, l, e]),
                                (0, i.useEffect)(() => {
                                    a && _(X);
                                }, [a, _]);
                            const Y = (0, i.useCallback)(() => (!a && j && !s && c(e, M), 500), [M, j, a, s, c, e]),
                                Z = tn(Y),
                                J = (0, i.useCallback)(() => {
                                    p || Z('');
                                }, [Z, p]),
                                te = (0, i.useCallback)(() => {
                                    G && !a && !f && !p && r.O.sound.play.highlight(), z(!0);
                                }, [a, f, p, G]);
                            (0, i.useEffect)(() => {
                                C && r.O.sound.play.highlight();
                            }, [C]);
                            const ie = (0, i.useCallback)(() => {
                                    z(!1), null == d || d(M, e);
                                }, [M, d, e]),
                                ue = W && !T,
                                oe = Boolean(E && C === E),
                                re = E && (q || U),
                                le = `${e}-slot-${M}`,
                                ce = N && N.length > 0,
                                _e = ce ? { backgroundImage: `url(${N})` } : {},
                                de = {
                                    id: E,
                                    containerRef: h,
                                    isEnabled: !K,
                                    onClick: J,
                                    isUpdateAvailable: Boolean(f),
                                    handleAction: A,
                                    forceCenterX: v,
                                    blockOnGrabIds: D,
                                },
                                me = {
                                    isEmpty: K,
                                    intCD: P,
                                    slotType: e,
                                    slotIndex: t,
                                    imageSource: x,
                                    isDisabled: p,
                                    isInstalled: T,
                                    id: M,
                                    itemInstalledSetupIdx: k,
                                    isMountedMoreThanOne: I,
                                    contextMenuDisabled: F,
                                    isSetupSwitching: s,
                                };
                            return u().createElement(
                                'div',
                                { className: 'Slot_base_1e', onMouseEnter: te, onMouseLeave: () => z(!1), id: le },
                                (o || U) &&
                                    !T &&
                                    u().createElement(
                                        'div',
                                        { className: 'Slot_close_35' },
                                        u().createElement(_n, { id: `close-${le}`, show: !f, onClick: ie }),
                                    ),
                                u().createElement(
                                    ea,
                                    { slotType: e, slotId: M, isEnabled: !f, panelType: m },
                                    u().createElement(
                                        'div',
                                        { ref: X },
                                        u().createElement(
                                            Kt,
                                            {
                                                activeDragId: f,
                                                slotType: e,
                                                isSelected: a,
                                                isBorderActive: Boolean(b),
                                                panelType: m,
                                                isDisabled: p,
                                                isPotentialDrop: oe,
                                                onClick: re ? void 0 : J,
                                            },
                                            j &&
                                                u().createElement(
                                                    'div',
                                                    { className: 'Slot_label_0b' },
                                                    u().createElement(on, { text: R, show: Boolean(o), panelType: m }),
                                                ),
                                            u().createElement(
                                                Vt,
                                                { when: Boolean(re), wrapper: sn, withProps: de },
                                                u().createElement(
                                                    Vt,
                                                    { when: j, wrapper: sa, withProps: me },
                                                    u().createElement(en, {
                                                        imageSource: oa(x, ne(y.computes.slots.slot(S, B, t)), H, p, a),
                                                        isIncompatible: g,
                                                        overlayType: O,
                                                        level: n,
                                                        isTemporary: ue,
                                                        withAttention: L,
                                                    }),
                                                ),
                                            ),
                                            ce &&
                                                u().createElement(
                                                    u().Fragment,
                                                    null,
                                                    u().createElement('span', { className: 'Slot_shadow_1f' }),
                                                    u().createElement('span', {
                                                        className: 'Slot_category_19',
                                                        style: _e,
                                                    }),
                                                ),
                                            p && u().createElement('div', { className: 'Slot_disabled_22' }),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    la = ['groupIndex', 'sectionIndex', 'slotIndex', 'activeSpecsMask', 'isChangeSetupIndex'];
                function ca() {
                    return (
                        (ca = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        ca.apply(null, arguments)
                    );
                }
                const _a = (0, te.Pi)((e) => {
                        let t = e.groupIndex,
                            n = e.sectionIndex,
                            a = e.slotIndex,
                            s = e.activeSpecsMask,
                            i = e.isChangeSetupIndex,
                            o = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, la);
                        const r = We(),
                            l = r.controls,
                            c = r.model.computes.specializations(t, n, a),
                            _ = c.specializations.length,
                            d = o.panelType === Q.Setup || o.panelType === Q.Compare,
                            m = !se(o.panelType),
                            p = c.isDynamic;
                        return u().createElement(
                            'div',
                            { className: C()('OptDeviceSlot_base_fa', _ && !p && !i && 'specializationsSlot') },
                            m &&
                                u().createElement(
                                    'div',
                                    { className: 'OptDeviceSlot_specializations_05' },
                                    u().createElement(Qn, {
                                        specializations: c.specializations,
                                        isDynamic: p,
                                        activeSpecsMask: s,
                                        isSpecializationActive: d,
                                        onSpecializationClick: (e) => {
                                            l.specializationSelect({ slotId: o.id, specializationIndex: e });
                                        },
                                    }),
                                ),
                            u().createElement(ra, ca({}, o, { groupIndex: t, sectionIndex: n, slotIndex: a })),
                        );
                    }),
                    da = ['groupIndex', 'sectionIndex', 'slotIndex', 'sectionType'];
                function ma() {
                    return (
                        (ma = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        ma.apply(null, arguments)
                    );
                }
                const pa = (0, te.Pi)((e) => {
                        let t = e.groupIndex,
                            n = e.sectionIndex,
                            a = e.slotIndex,
                            s = e.sectionType,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, da);
                        const o = We().model,
                            r = o.computes.slots.slot(t, n, a),
                            l = o.ammunitionPanel.get(),
                            c = l.selectedSection,
                            _ = l.selectedSlot,
                            d = (c === s ? _ : -1) === r.id;
                        switch (s) {
                            case gt: {
                                const e = r;
                                return u().createElement(
                                    _a,
                                    ma({}, e, i, { groupIndex: t, sectionIndex: n, slotIndex: a, isSelected: d }),
                                );
                            }
                            case ft: {
                                const e = r;
                                return u().createElement(
                                    Gn,
                                    ma({}, i, e, { groupIndex: t, sectionIndex: n, slotIndex: a, isSelected: d }),
                                );
                            }
                            default:
                                return u().createElement(
                                    ra,
                                    ma({}, i, { isSelected: d, groupIndex: t, sectionIndex: n, slotIndex: a }),
                                );
                        }
                    }),
                    ba = [
                        'groupIndex',
                        'sectionIndex',
                        'sectionType',
                        'onActiveSlotChanged',
                        'isDisabled',
                        'blockOnGrabIds',
                        'isChangeSetupIndex',
                        'setIsExitBlocked',
                    ];
                function ga() {
                    return (
                        (ga = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        ga.apply(null, arguments)
                    );
                }
                const Ea = (0, te.Pi)((e) => {
                        let t = e.groupIndex,
                            n = e.sectionIndex,
                            a = e.sectionType,
                            s = e.onActiveSlotChanged,
                            o = e.isDisabled,
                            l = e.blockOnGrabIds,
                            c = e.isChangeSetupIndex,
                            _ = e.setIsExitBlocked,
                            d = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, ba);
                        const m = (0, i.useRef)(null),
                            p = (0, i.useRef)(null),
                            b = We(),
                            g = b.model,
                            E = b.controls,
                            h = g.computes.slots.length(t, n),
                            f = g.ammunitionPanel.get(),
                            A = f.selectedSection,
                            v = f.selectedSlot,
                            D = f.syncInitiator,
                            F = (0, i.useCallback)(
                                (e, t) => {
                                    E.dragDropSwap({
                                        sectionType: a,
                                        dragId: Number(e[e.length - 1]),
                                        dropId: Number(t[t.length - 1]),
                                    });
                                },
                                [E, a],
                            ),
                            S = A === a,
                            B = a === ft,
                            y = S ? v : -1,
                            w = `${a}-${h}slots`,
                            x = Be({ baseId: w, slotsLength: h, handleSwap: F, setIsExitBlocked: _, syncInitiator: D }),
                            T = x.handleGrabberAction,
                            k = x.dragState,
                            I = x.getForceCenterX;
                        (0, i.useEffect)(() => {
                            S && -1 !== y && m.current && s(m, A, y);
                        }, [s, S, A, y]);
                        const O = (e, t) => {
                                if ((o || r.O.sound.play.click(), 'number' != typeof t))
                                    return console.warn('selectedSlot is not a number');
                                E.sectionSelect({ selectedSlot: t, selectedSection: e });
                            },
                            R = (e) => {
                                m.current = e ? e.current : null;
                            },
                            N = (e, t) => {
                                E.slotClear({ slotId: e, sectionType: t });
                            };
                        return u().createElement(
                            'div',
                            { id: w, ref: p, className: C()('Slots_base_f2', a) },
                            rt(h, (e) => {
                                const r = !B && h > 1 ? `${w}-${e}` : '';
                                return u().createElement(
                                    i.Fragment,
                                    { key: `slot ${t}-${n}-${e}` },
                                    e > 0 && u().createElement(qt, null),
                                    u().createElement(
                                        pa,
                                        ga(
                                            {
                                                groupIndex: t,
                                                sectionIndex: n,
                                                slotIndex: e,
                                                sectionType: a,
                                                isSectionSelected: S,
                                                isDisabled: o,
                                                contextMenuDisabled: B,
                                                slotType: a,
                                                onActiveSlotChanged: s,
                                                onSlotSelected: O,
                                                onActiveSlotRefChanged: R,
                                                onSlotClear: N,
                                                grabberId: r,
                                                containerRef: p,
                                                forceLeftUpdate: I(r),
                                                activeDragId: k.activeDragId,
                                                handleGrabberAction: T,
                                                potentialDropId: k.potentialDropId,
                                                blockOnGrabIds: l,
                                                isSetupSwitching: c,
                                                isChangeSetupIndex: c,
                                            },
                                            d,
                                        ),
                                    ),
                                );
                            }),
                        );
                    }),
                    ha = [
                        'groupIndex',
                        'sectionIndex',
                        'type',
                        'newItemsCount',
                        'panelType',
                        'sectionsIds',
                        'vehicle',
                        'vehicleType',
                        'isSetupSwitching',
                        'classMix',
                    ];
                function fa() {
                    return (
                        (fa = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        fa.apply(null, arguments)
                    );
                }
                const Aa = (0, te.Pi)((e) => {
                        let t = e.groupIndex,
                            n = e.sectionIndex,
                            a = e.type,
                            s = e.newItemsCount,
                            o = e.panelType,
                            r = e.sectionsIds,
                            l = e.vehicle,
                            c = e.vehicleType,
                            _ = e.isSetupSwitching,
                            d = e.classMix,
                            m = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, ha);
                        const p = We().model,
                            b = (0, i.useRef)(null),
                            g = p.ammunitionPanel.get(),
                            E = g.selectedSection,
                            h = g.syncInitiator,
                            f = p.computes.slots.length(t, n),
                            A = p.computes.slots.existFilled(t, n),
                            v = Ut('AmmunitionPanelBattleAbilities', Gt);
                        (0, i.useEffect)(() => {
                            null == v || v.runTrigger(!0);
                        }, [v]);
                        const D = E === a,
                            F = Se(a, r),
                            S = F.selfId,
                            B = F.blockOnGrabIds,
                            y = ((l && l.length > 0) || (c && c.length > 0)) && o !== Q.Battle && o !== Q.Respawn,
                            w = (0, i.useMemo)(
                                () => ({
                                    icon: u().createElement('span', {
                                        className: 'Section_configVehicleIcon_05',
                                        style: {
                                            backgroundImage: c
                                                ? `url(${R.images.gui.maps.icons.vehicleTypes.extraSmall.$dyn(c)})`
                                                : '',
                                        },
                                    }),
                                    vehicle: l,
                                }),
                                [l, c],
                            ),
                            x = f > 0 && o !== Q.Compare && o !== Q.Battle && o !== Q.Respawn,
                            T = R.strings.tank_setup.section.$dyn(a);
                        if ('string' != typeof T)
                            throw new Error(`No top label text for section type ${a} or it's not a string`);
                        return u().createElement(
                            'div',
                            {
                                id: _ ? wt : S,
                                ref: b,
                                className: C()(
                                    'Section_base_87',
                                    d,
                                    D && 'sectionSelected',
                                    f > 1 && 'multiSlot',
                                    h >= 0 && A && 'existFilledSlots',
                                ),
                            },
                            y &&
                                u().createElement(
                                    Mt,
                                    { className: 'Section_configLabel_e7' },
                                    u().createElement(Bt, {
                                        classMix: 'Section_configText_d0',
                                        text: R.strings.tank_setup.categories.reserves.config(),
                                        binding: w,
                                    }),
                                ),
                            x &&
                                u().createElement(
                                    'div',
                                    { className: 'Section_label_52' },
                                    u().createElement(yt, { text: T, parentRef: b, show: !D, panelType: o }),
                                ),
                            u().createElement(
                                Ea,
                                fa(
                                    { groupIndex: t, sectionIndex: n, sectionType: a, panelType: o, blockOnGrabIds: B },
                                    m,
                                ),
                            ),
                            Boolean(s) &&
                                u().createElement(
                                    'div',
                                    { className: 'Section_counter_e3' },
                                    u().createElement(St, { value: s, size: 'small', fadeInAnimation: !0 }),
                                ),
                        );
                    }),
                    va = {
                        base: 'ToggleSlot_base_93',
                        slot: 'ToggleSlot_slot_cd',
                        slot__grabbing: 'ToggleSlot_slot__grabbing_df',
                        image: 'ToggleSlot_image_e0',
                        slot__active: 'ToggleSlot_slot__active_15',
                        glow: 'ToggleSlot_glow_48',
                        toggle: 'ToggleSlot_toggle_73',
                    },
                    Ca = ({ id: e, isSelected: t, imageSource: n, onSlotSelected: a, panelType: s }) => {
                        const o = (0, i.useCallback)(() => {
                                !t && a(e);
                            }, [e, t, a]),
                            r = C()(va.slot, !t && va.slot__active, va.slot__compare),
                            l = (0, i.useMemo)(() => ({ backgroundImage: `url(${n})` }), [n]),
                            c = (0, i.useMemo)(
                                () => ({
                                    backgroundImage: `url(R.atlases.components.icon_selected_${t ? 'on' : 'off'})`,
                                }),
                                [t],
                            );
                        return u().createElement(
                            rn,
                            { slotType: At, slotId: e, panelType: s },
                            u().createElement(
                                'div',
                                { className: va.base },
                                u().createElement(
                                    'div',
                                    { className: r, onClick: o, id: `shell-slot-${e}` },
                                    t && u().createElement('div', { className: va.glow }),
                                    u().createElement('div', { className: va.image, style: l }),
                                    u().createElement('div', { className: va.toggle, style: c }),
                                ),
                            ),
                        );
                    },
                    Da = {
                        base: 'ShellsSlot_base_a1',
                        base__grabbing: 'ShellsSlot_base__grabbing_8f',
                        shell: 'ShellsSlot_shell_85',
                        hover: 'ShellsSlot_hover_f0',
                        image: 'ShellsSlot_image_e6',
                        infinity: 'ShellsSlot_infinity_06',
                        count: 'ShellsSlot_count_ea',
                        shadow: 'ShellsSlot_shadow_e6',
                    },
                    Fa = ({
                        id: e,
                        itemInstalledSetupIdx: t,
                        isMountedMoreThanOne: n,
                        imageSource: a,
                        count: s,
                        isInfinity: o,
                        isSelected: r,
                        panelType: l,
                        intCD: c,
                        slotIndex: _,
                        grabberId: d,
                        isSetupSwitching: m,
                        containerRef: p,
                        activeDragId: b,
                        handleGrabberAction: g,
                        forceLeftUpdate: E,
                        potentialDropId: h,
                        blockOnGrabIds: f,
                        isDisabled: A,
                        isDefenseMode: v,
                    }) => {
                        const D = !se(l),
                            F = (0, i.useMemo)(() => ({ backgroundImage: `url(${a})` }), [a]),
                            S = d && d === h,
                            B = d && d === b,
                            y = (0, i.useMemo)(() => {
                                const a = { slotType: Et, slotId: e, fieldType: 1, intCD: c };
                                return [
                                    a,
                                    Object.assign({}, a, {
                                        installedSlotId: e,
                                        itemInstalledSetupIdx: t,
                                        itemInstalledSetupSlotIdx: e,
                                        isMountedMoreThanOne: n,
                                    }),
                                ];
                            }, [c, e, t, n]),
                            w = y[0],
                            x = y[1],
                            T = (0, i.useMemo)(
                                () => ({
                                    id: d,
                                    containerRef: p,
                                    isEnabled: Boolean(d) && r,
                                    isUpdateAvailable: Boolean(b),
                                    handleAction: g,
                                    forceCenterX: E,
                                    blockOnGrabIds: f,
                                }),
                                [b, f, p, E, d, g, r],
                            ),
                            k = (0, i.useMemo)(
                                () => ({ slotIndex: _, uniqueKey: c, slotType: Et, imageSource: null }),
                                [c, _],
                            );
                        return u().createElement(
                            gn,
                            { isEnabled: D && v && !m && !A, args: x },
                            u().createElement(
                                qe,
                                {
                                    targetId:
                                        l !== Q.Setup ? R.views.halloween.lobby.widgets.TankSetupView('resId') : void 0,
                                    args: w,
                                    isEnabled: !b,
                                },
                                u().createElement(
                                    'div',
                                    { id: `shell-slot-${_}`, className: Da.base },
                                    u().createElement(
                                        'div',
                                        {
                                            className: C()(
                                                Da.shell,
                                                !b && D && !A && Da.shell__active,
                                                B && Da.shell__grabbing,
                                                !B && S && Da.shell__potential,
                                            ),
                                        },
                                        u().createElement('div', { className: Da.shadow }),
                                        u().createElement(
                                            Vt,
                                            { when: D, wrapper: sn, withProps: T },
                                            u().createElement(
                                                Vt,
                                                { when: D, wrapper: aa, withProps: k },
                                                u().createElement('div', { className: Da.image, style: F }),
                                                o
                                                    ? u().createElement('div', { className: Da.infinity })
                                                    : u().createElement('div', { className: Da.count }, s),
                                            ),
                                        ),
                                        u().createElement('div', { className: Da.hover }),
                                    ),
                                ),
                            ),
                        );
                    },
                    Sa = [
                        'groupIndex',
                        'sectionIndex',
                        'slotIndex',
                        'isCompare',
                        'handleSlotSelected',
                        'baseId',
                        'grabber',
                    ];
                function Ba() {
                    return (
                        (Ba = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        Ba.apply(null, arguments)
                    );
                }
                const ya = (0, te.Pi)((e) => {
                        let t = e.groupIndex,
                            n = e.sectionIndex,
                            a = e.slotIndex,
                            s = e.isCompare,
                            i = e.handleSlotSelected,
                            o = e.baseId,
                            r = e.grabber,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, Sa);
                        const c = r.handleGrabberAction,
                            _ = r.dragState,
                            d = r.getForceCenterX,
                            m = We().model,
                            p = m.computes.slots.length(t, n),
                            b = m.computes.slots.slot(t, n, a),
                            g = p > 1 ? `${o}-${b.id}` : '';
                        return ne(b)
                            ? null
                            : u().createElement(
                                  'div',
                                  {
                                      key: b.id,
                                      className: C()(
                                          'ShellContainer_base_fc',
                                          m.root.get().isDefenseMode && 0 !== a && 'ShellContainer_base__compressed_c6',
                                      ),
                                  },
                                  s
                                      ? u().createElement(Ca, Ba({}, b, { onSlotSelected: i }))
                                      : u().createElement(
                                            Fa,
                                            Ba(
                                                {},
                                                b,
                                                {
                                                    slotIndex: a,
                                                    grabberId: g,
                                                    forceLeftUpdate: d(g),
                                                    activeDragId: _.activeDragId,
                                                    handleGrabberAction: c,
                                                    potentialDropId: _.potentialDropId,
                                                    isDefenseMode: m.root.get().isDefenseMode,
                                                },
                                                l,
                                            ),
                                        ),
                              );
                    }),
                    wa = (0, te.Pi)(
                        ({
                            panelType: e,
                            onSelected: t,
                            isCompare: n,
                            isSelected: a,
                            syncInitiator: s,
                            blockOnGrabIds: o,
                            isDisabled: l,
                            isSetupSwitching: c,
                            setIsExitBlocked: _,
                            groupIndex: d,
                            sectionIndex: m,
                        }) => {
                            const p = We(),
                                b = p.model,
                                g = p.controls,
                                E = b.computes.slots.length(d, m),
                                h = (0, i.useRef)(!1),
                                f = (0, i.useRef)(null),
                                A = n ? At : Et,
                                v = `${A}-${E}shells`,
                                C = !ae(e),
                                D = (0, i.useCallback)(
                                    (e) => {
                                        g.sectionSelect({ selectedSlot: e, selectedSection: A }),
                                            C && r.O.sound.play.click();
                                    },
                                    [g, A, C],
                                ),
                                F = (0, i.useCallback)(
                                    (e, t) => {
                                        g.dragDropSwap({
                                            sectionType: A,
                                            dragId: Number(e[e.length - 1]),
                                            dropId: Number(t[t.length - 1]),
                                        });
                                    },
                                    [g, A],
                                ),
                                S = Be({
                                    baseId: v,
                                    slotsLength: E,
                                    handleSwap: F,
                                    setIsExitBlocked: _,
                                    syncInitiator: s,
                                });
                            return (
                                (0, i.useEffect)(
                                    () =>
                                        ee(() => {
                                            h.current = !0;
                                        }),
                                    [],
                                ),
                                (0, i.useEffect)(() => {
                                    if (a && e === Q.Setup) {
                                        if (!h.current)
                                            return ee(() => {
                                                t();
                                            });
                                        t();
                                    }
                                }, [a, e, t]),
                                u().createElement(
                                    'div',
                                    {
                                        id: v,
                                        ref: f,
                                        className: 'Shells_base_c3',
                                        onMouseEnter: () => {
                                            !l && C && r.O.sound.play.highlight();
                                        },
                                    },
                                    rt(E, (t) =>
                                        u().createElement(ya, {
                                            key: `${d} ${m} ${t}`,
                                            groupIndex: d,
                                            sectionIndex: m,
                                            slotIndex: t,
                                            isCompare: n,
                                            containerRef: f,
                                            handleSlotSelected: D,
                                            panelType: e,
                                            blockOnGrabIds: o,
                                            isSelected: a,
                                            isSetupSwitching: c,
                                            grabber: S,
                                            baseId: v,
                                        }),
                                    ),
                                )
                            );
                        },
                    ),
                    xa = {
                        base: 'ShellsSection_base_dd',
                        base__grabbing: 'ShellsSection_base__grabbing_33',
                        base__compressed: 'ShellsSection_base__compressed_c6',
                        attention: 'ShellsSection_attention_09',
                        blinking: 'ShellsSection_blinking_6f',
                        border: 'ShellsSection_border_b2',
                        border__double: 'ShellsSection_border__double_64',
                        border__triple: 'ShellsSection_border__triple_ed',
                        disabled: 'ShellsSection_disabled_4c',
                    },
                    Ta = [Q.Hangar, Q.Battle, Q.Prebattle, Q.Respawn],
                    ka = (0, te.Pi)(
                        ({
                            type: e,
                            sectionsIds: t,
                            panelType: n,
                            onActiveSlotChanged: a,
                            isDisabled: s,
                            isBorderActive: o,
                            classMix: r,
                            isSetupSwitching: l,
                            setIsExitBlocked: c,
                            newItemsCount: _,
                            groupIndex: d,
                            sectionIndex: m,
                        }) => {
                            const p = We().model,
                                b = p.ammunitionPanel.get(),
                                g = b.ammoNotFull,
                                E = b.selectedSection,
                                h = b.syncInitiator,
                                f = (0, i.useRef)(null),
                                A = n === Q.Compare,
                                v = n === Q.Prebattle && e === Et,
                                D = E === e || v,
                                F = (0, i.useCallback)(() => {
                                    a(f, E, 0);
                                }, [a, E]),
                                S = Se(e, t),
                                B = S.selfId,
                                y = S.blockOnGrabIds,
                                w = ((e) => Ta.includes(e))(n) && !s && g,
                                x = p.computes.slots.filteredLength(d, m);
                            return u().createElement(
                                'div',
                                {
                                    id: l ? wt : B,
                                    className: C()(
                                        xa.base,
                                        r,
                                        xa[`base__${n}`],
                                        !o && D && xa.base__selected,
                                        A && xa.base__compare,
                                        p.root.get().isDefenseMode && xa.base__compressed,
                                        s && xa.base__disabled,
                                    ),
                                    ref: f,
                                },
                                w && u().createElement('div', { className: xa.attention }),
                                w &&
                                    u().createElement('div', {
                                        className: C()(
                                            xa.border,
                                            2 === x && xa.border__double,
                                            3 === x && xa.border__triple,
                                        ),
                                    }),
                                u().createElement(wa, {
                                    groupIndex: d,
                                    sectionIndex: m,
                                    panelType: n,
                                    onSelected: F,
                                    isSelected: D,
                                    isCompare: A,
                                    syncInitiator: h,
                                    blockOnGrabIds: y,
                                    isSetupSwitching: l,
                                    setIsExitBlocked: c,
                                }),
                                Boolean(_) &&
                                    u().createElement(
                                        'div',
                                        { className: xa.counter },
                                        u().createElement(St, { value: _, size: 'small', fadeInAnimation: !0 }),
                                    ),
                                s && u().createElement('div', { className: xa.disabled }),
                            );
                        },
                    ),
                    Ia = {
                        base: 'Sections_base_61',
                        section: 'Sections_section_10',
                        section__battle: 'Sections_section__battle_f5',
                        section__small: 'Sections_section__small_bd',
                        section__extraSmall: 'Sections_section__extraSmall_48',
                        section__first: 'Sections_section__first_39',
                    };
                function Oa() {
                    return (
                        (Oa = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        Oa.apply(null, arguments)
                    );
                }
                const Ra = (0, te.Pi)(
                        ({
                            groupIndex: e,
                            panelType: t,
                            isDisabled: n = !1,
                            onActiveSlotChanged: a,
                            isBorderActive: s,
                            isChangeSetupIndex: i,
                            setIsExitBlocked: o,
                        }) => {
                            const r = We().model,
                                l = ot(['section'], Ia),
                                c = r.computes.sections.IDs(e),
                                _ = {
                                    panelType: t,
                                    isDisabled: n,
                                    onActiveSlotChanged: a,
                                    isBorderActive: s,
                                    sectionsIds: c,
                                    isChangeSetupIndex: i,
                                    setIsExitBlocked: o,
                                };
                            return u().createElement(
                                'div',
                                { className: Ia.base },
                                rt(r.computes.sections.length(e), (n) => {
                                    const a = r.computes.sections.section(e, n);
                                    if (!a.slots || !a.slots.length) return null;
                                    const s = C()(
                                        l.section,
                                        0 !== n && se(t) && Ia.section__battle,
                                        0 === n && Ia.section__first,
                                    );
                                    if (a.type === Et || a.type === At) {
                                        const o = a;
                                        return u().createElement(
                                            u().Fragment,
                                            { key: `${a.name}${n}${a.slots.length}` },
                                            !r.root.get().isDefenseMode && u().createElement(vt, { panelType: t }),
                                            u().createElement(
                                                ka,
                                                Oa({}, o, _, {
                                                    groupIndex: e,
                                                    sectionIndex: n,
                                                    isSetupSwitching: i,
                                                    key: `${a.name}${e}${a.slots.length}`,
                                                    classMix: s,
                                                }),
                                            ),
                                        );
                                    }
                                    return u().createElement(
                                        Aa,
                                        Oa({}, a, _, {
                                            groupIndex: e,
                                            sectionIndex: n,
                                            isSetupSwitching: i,
                                            key: `${a.name}${e}${a.slots.length}`,
                                            classMix: s,
                                        }),
                                    );
                                }),
                            );
                        },
                    ),
                    Na = {
                        base: 'Group_base_cc',
                        wrapper: 'Group_wrapper_22',
                        switch: 'Group_switch_1f',
                        switch__battle: 'Group_switch__battle_37',
                        switch__small: 'Group_switch__small_e9',
                        switch__extraSmall: 'Group_switch__extraSmall_19',
                        prebattleSwitchIndicator: 'Group_prebattleSwitchIndicator_7b',
                        hint: 'Group_hint_ff',
                        hint__disabled: 'Group_hint__disabled_0a',
                    };
                function La() {
                    return (
                        (La = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        La.apply(null, arguments)
                    );
                }
                const Ma = R.strings.tank_setup.tooltips.prebattleSwitchIndicator,
                    Pa = (e) => e.setupSelector.hotKeys,
                    $a = (0, te.Pi)(({ groupIndex: e, sectionProps: t, isSetupSwitching: n, setSetupSwitching: a }) => {
                        const s = ot(['switch'], Na),
                            i = We().model,
                            o = i.root.get().isDisabled,
                            r = i.computes.groups.group(e);
                        return u().createElement(
                            'div',
                            { className: Na.base },
                            u().createElement(
                                'div',
                                { className: Na.wrapper },
                                u().createElement(
                                    dt,
                                    ((e, t) => ({ index: e.currentIndex, setSetupSwitching: t }))(r, a),
                                    u().createElement(Ra, La({}, t, { groupIndex: e, isChangeSetupIndex: n })),
                                ),
                                r.setupSelector.isSwitchEnabled &&
                                    u().createElement(
                                        'div',
                                        { className: C()(s.switch, ae(t.panelType) && Na.switch__battle) },
                                        r.setupSelector.isPrebattleSwitchDisabled &&
                                            u().createElement(
                                                K,
                                                { header: Ma.title(), body: String(Ma.desc.$dyn(`c_${r.groupId}`)) },
                                                u().createElement('div', { className: Na.prebattleSwitchIndicator }),
                                            ),
                                    ),
                            ),
                            ((l = r),
                            ((c = t.panelType) === Q.Battle || c === Q.Respawn) &&
                                l.setupSelector.isSwitchEnabled &&
                                Pa(l) &&
                                u().createElement(
                                    'div',
                                    { className: C()(Na.hint, o && Na.hint__disabled) },
                                    u().createElement(bt, { hotKeys: Pa(r) }),
                                )),
                        );
                        var l, c;
                    }),
                    Ha = (0, te.Pi)(
                        ({ sectionProps: e, isSetupSwitching: t, isReady: n, setSetupSwitching: a, children: s }) => {
                            const o = We(),
                                r = o.model,
                                l = o.controls.changeSetupIndex;
                            (0, i.useEffect)(() => {
                                (e.panelType !== Q.Hangar && e.panelType !== Q.Setup) || !n || a(!1);
                            }, [n, e.panelType, a]),
                                (0, i.useEffect)(() => {
                                    e.panelType === Q.Respawn && a(!1);
                                }, [e.panelType, a]);
                            const c = (0, i.useCallback)(
                                (t) => {
                                    e.panelType === Q.Respawn && a(!0), l(t);
                                },
                                [l, e.panelType, a],
                            );
                            return u().createElement(
                                'div',
                                { className: 'Groups_base_9c' },
                                rt(r.computes.groups.length(), (n) =>
                                    u().createElement($a, {
                                        key: `group-${n}`,
                                        sectionProps: e,
                                        groupIndex: n,
                                        isSetupSwitching: t,
                                        setSetupSwitching: a,
                                        handleSetupSwitching: c,
                                    }),
                                ),
                                s,
                            );
                        },
                    ),
                    za = {
                        base: 'AmmunitionPanel_base_78',
                        base__locked: 'AmmunitionPanel_base__locked_14',
                        base__disabled: 'AmmunitionPanel_base__disabled_f2',
                        base__hidden: 'AmmunitionPanel_base__hidden_5e',
                        border: 'AmmunitionPanel_border_de',
                        border__hidden: 'AmmunitionPanel_border__hidden_8a',
                        roleSkillSlot: 'AmmunitionPanel_roleSkillSlot_67',
                        roleSkillSlot__battle: 'AmmunitionPanel_roleSkillSlot__battle_91',
                        roleSkillSlot__small: 'AmmunitionPanel_roleSkillSlot__small_14',
                        roleSkillSlot__extraSmall: 'AmmunitionPanel_roleSkillSlot__extraSmall_6a',
                        roleSkillSlot__prebattle: 'AmmunitionPanel_roleSkillSlot__prebattle_6a',
                    },
                    Wa = (0, te.Pi)(({ show: e = !0, isReady: t = !0, panelType: n, isDisabled: a = !1 }) => {
                        const s = We(),
                            o = s.model,
                            l = s.controls,
                            c = o.ammunitionPanel.get(),
                            _ = c.isSetupSwitchInProgress,
                            d = c.syncInitiator,
                            m = o.roleSkillSlot.get(),
                            p = (0, i.useRef)(!1),
                            b = (0, i.useState)({ slotWidth: 0, slotOffset: 0 }),
                            g = b[0],
                            E = b[1],
                            h = (0, i.useState)(!1),
                            f = h[0],
                            A = h[1],
                            v = (0, i.useState)(!1),
                            D = v[0],
                            F = v[1],
                            S = (0, i.useRef)(null),
                            B = (0, i.useRef)({ element: null, generation: 0, slotIndex: null, sectionIndex: null }),
                            y = (0, i.useCallback)(
                                (e, t) => {
                                    if (f || _ || n !== Q.Hangar) return;
                                    const a = null != t ? t : { width: 0, height: 0, offsetX: 0, offsetY: 0 };
                                    l.sectionResized(Object.assign({ sectionType: e }, a));
                                },
                                [f, _, n, l],
                            ),
                            w = (0, i.useCallback)(
                                (e) => {
                                    y('main', e);
                                },
                                [y],
                            );
                        ((e, t, n, a = []) => {
                            const s = Ze(
                                () =>
                                    ee(() =>
                                        ee(() => {
                                            if (e.current) {
                                                const n = e.current.getBoundingClientRect(),
                                                    a = {
                                                        width: r.O.view.pxToRem(n.width),
                                                        height: r.O.view.pxToRem(n.height),
                                                        offsetX: r.O.view.pxToRem(n.left),
                                                        offsetY: r.O.view.pxToRem(n.top),
                                                    };
                                                window.tutorialApi.updateComponents(), t(a);
                                            }
                                        }),
                                    ),
                                [t, e],
                            );
                            (0, i.useEffect)(() => {
                                s();
                            }, [s, ...a]),
                                (0, i.useEffect)(() => {
                                    if (n)
                                        return (
                                            engine.on('clientResized', s),
                                            () => {
                                                engine.off('clientResized', s);
                                            }
                                        );
                                }, [n, s]);
                        })(S, w, !0, [d]);
                        const x = (0, i.useCallback)(() => {
                                F(!1);
                            }, []),
                            T = (() => {
                                const e = (0, i.useState)(r.O.view.getScale()),
                                    t = e[0],
                                    n = e[1];
                                return (
                                    (0, i.useEffect)(() => {
                                        const e = () => {
                                            n(r.O.view.getScale());
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
                            })(),
                            k = (0, i.useCallback)(() => {
                                if (B.current.element && S.current) {
                                    const e = B.current.element.getBoundingClientRect(),
                                        t = S.current.getBoundingClientRect();
                                    E({ slotWidth: e.width, slotOffset: e.left - t.left + 0.5 * e.width });
                                }
                            }, [T]),
                            I = (0, i.useCallback)(
                                (e, t, n) => {
                                    if (e.current && S.current) {
                                        const a = ((e, t, n) =>
                                            e !== n.current.slotIndex || t !== n.current.sectionIndex)(n, t, B);
                                        (B.current.element = e.current),
                                            (B.current.slotIndex = n),
                                            (B.current.sectionIndex = t),
                                            p.current && a ? F(!0) : (p.current = !0),
                                            B.current.generation && k();
                                    }
                                },
                                [k],
                            ),
                            O = (0, i.useCallback)(
                                () =>
                                    ee(() => {
                                        (B.current.generation += 1), k();
                                    }),
                                [B, k],
                            );
                        (0, i.useEffect)(
                            () => (
                                engine.on('clientResized', O),
                                ee(() => {
                                    engine.off('clientResized', O), w(), O();
                                })
                            ),
                            [w, O],
                        );
                        const R = g.slotWidth,
                            N = g.slotOffset,
                            L = n === Q.Setup || n === Q.Compare,
                            M = (0, i.useMemo)(
                                () => ({ panelType: n, isDisabled: a, onActiveSlotChanged: I, isBorderActive: D }),
                                [D, a, I, n],
                            ),
                            P = ot(['roleSkillSlot'], za);
                        return u().createElement(
                            'div',
                            {
                                ref: S,
                                className: C()(
                                    za.base,
                                    !t && za.base__locked,
                                    !e && za.base__hidden,
                                    a && za.base__disabled,
                                ),
                            },
                            L &&
                                u().createElement(Ye, {
                                    key: B.current.generation,
                                    slotOffset: N,
                                    slotWidth: R,
                                    isAnimationRunning: D,
                                }),
                            u().createElement(
                                Ha,
                                { isSetupSwitching: _ || f, sectionProps: M, isReady: t, setSetupSwitching: A },
                                m.roleSkill &&
                                    u().createElement(Ke, {
                                        roleSkill: m.roleSkill,
                                        tooltipId: m.tooltipId,
                                        tooltipHeader: m.tooltipHeader,
                                        tooltipBody: m.tooltipBody,
                                        className: C()(za.roleSkillSlot, za[`roleSkillSlot__${n}`], P.roleSkillSlot),
                                    }),
                            ),
                            L &&
                                u().createElement(
                                    'div',
                                    { className: C()(za.border, !D && za.border__hidden) },
                                    u().createElement(je, { slotWidth: R, slotOffset: N, onAnimationEnd: x }),
                                ),
                        );
                    }),
                    ja = {
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
                    Ga = [
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
                function Ua() {
                    return (
                        (Ua = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        Ua.apply(null, arguments)
                    );
                }
                class qa extends u().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && me(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && me(this.props.soundClick);
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
                            n = e.onClick,
                            a = e.goto,
                            s = e.side,
                            i = e.type,
                            o = e.classNames,
                            r = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            _ = e.onMouseUp,
                            d =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var n = {};
                                    for (var a in e)
                                        if ({}.hasOwnProperty.call(e, a)) {
                                            if (t.indexOf(a) >= 0) continue;
                                            n[a] = e[a];
                                        }
                                    return n;
                                })(e, Ga)),
                            m = C()(ja.base, ja[`base__${i}`], ja[`base__${s}`], null == o ? void 0 : o.base),
                            p = C()(ja.icon, ja[`icon__${i}`], ja[`icon__${s}`], null == o ? void 0 : o.icon),
                            b = C()(ja.glow, null == o ? void 0 : o.glow),
                            g = C()(ja.caption, ja[`caption__${i}`], null == o ? void 0 : o.caption),
                            E = C()(ja.goto, null == o ? void 0 : o.goto);
                        return u().createElement(
                            'div',
                            Ua(
                                {
                                    className: m,
                                    onMouseEnter: this._onMouseEnter(r),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(_),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: n,
                                },
                                d,
                            ),
                            'info' !== i && u().createElement('div', { className: ja.shine }),
                            u().createElement('div', { className: p }, u().createElement('div', { className: b })),
                            u().createElement('div', { className: g }, t),
                            a && u().createElement('div', { className: E }, a),
                        );
                    }
                }
                qa.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const Va = {
                        base: 'SetupApp_base_44',
                        base__shown: 'SetupApp_base__shown_ff',
                        base__compare: 'SetupApp_base__compare_8c',
                        base__setup: 'SetupApp_base__setup_99',
                        close: 'SetupApp_close_4c',
                        close__hidden: 'SetupApp_close__hidden_9f',
                        content: 'SetupApp_content_fb',
                        content__compare: 'SetupApp_content__compare_9f',
                        content__invisible: 'SetupApp_content__invisible_4c',
                        content__shown: 'SetupApp_content__shown_0c',
                        'show-app': 'SetupApp_show-app_23',
                        content__hidden: 'SetupApp_content__hidden_78',
                        'hide-app': 'SetupApp_hide-app_01',
                        panel: 'SetupApp_panel_cc',
                        back: 'SetupApp_back_33',
                    },
                    Xa = ({ content: e, panel: t, show: n = !0, onAnimationDone: a, onClose: s }) => {
                        const o = (0, i.useRef)(null),
                            r = (0, i.useRef)(!1);
                        de(ce.n.ESCAPE, s);
                        const l = !t,
                            c = (0, i.useCallback)(
                                (e) => {
                                    a && e.target === o.current && a();
                                },
                                [a],
                            );
                        return (
                            (0, i.useEffect)(() => {
                                n && (r.current = !0), r.current && me('cons_select_view');
                            }, [n]),
                            (0, i.useEffect)(() => {
                                const e = o.current;
                                if (e)
                                    return (
                                        e.addEventListener('animationend', c),
                                        () => {
                                            e.removeEventListener('animationend', c);
                                        }
                                    );
                            }, [c]),
                            u().createElement(
                                'div',
                                { className: C()(Va.base, n && Va.base__shown, l ? Va.base__compare : Va.base__setup) },
                                l && u().createElement('div', { className: Va.back }),
                                u().createElement(
                                    'div',
                                    { className: C()(Va.close, !n && Va.close__hidden) },
                                    u().createElement(qa, {
                                        caption: R.strings.halloween_lobby.common.close(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: s,
                                    }),
                                ),
                                u().createElement(
                                    'div',
                                    {
                                        id: 'setup-content',
                                        ref: o,
                                        className: C()(
                                            Va.content,
                                            l && Va.content__compare,
                                            !n && !r.current && Va.content__invisible,
                                            Va['content__' + (n ? 'shown' : 'hidden')],
                                        ),
                                    },
                                    e,
                                ),
                                t && u().createElement('div', { className: Va.panel }, t),
                            )
                        );
                    },
                    Ka = [
                        'hwAoeStunInstantShot',
                        'hwAoeDamageInstantShot',
                        'fastReload',
                        'hwAoeDrainEnemyHpInstantShot',
                        'teamRepairKit',
                        'hpRepairAndCrewHeal',
                        'damageShield',
                        'hwInvisibility',
                        'hwAoeStunInstantShotDefence',
                        'hwAoeDamageInstantShotDefence',
                        'fastReloadDefence',
                        'hwAoeDrainEnemyHpInstantShotDefence',
                        'teamRepairKitDefence',
                        'hpRepairAndCrewHealDefence',
                        'damageShieldDefence',
                        'hwInvisibilityDefence',
                    ],
                    Ya = (e) =>
                        Re(e, (e) =>
                            Object.assign({}, e, {
                                price: Object.assign({}, e.price, {
                                    price: Re(e.price.price, (e) => Object.assign({}, e)),
                                    defPrice: Re(e.price.defPrice, (e) => Object.assign({}, e)),
                                    discount: Re(e.price.discount, (e) => Object.assign({}, e)),
                                }),
                                oldStylePrice: Object.assign({}, e.price, {
                                    price: Re(e.price.price, (e) => ({ value: Object.assign({}, e) })),
                                    defPrice: Re(e.price.defPrice, (e) => ({ value: Object.assign({}, e) })),
                                    discount: Re(e.price.discount, (e) => ({ value: Object.assign({}, e) })),
                                }),
                            }),
                        ),
                    Za = Te()(
                        ({ observableModel: e }) => {
                            const t = ((e) => {
                                    const t = {
                                            root: e.object(),
                                            tankSetup: e.object('tankSetup'),
                                            vehicleInfo: e.object('vehicleInfo'),
                                            lastSlotAction: e.object('lastSlotAction'),
                                            optDevices: {
                                                slots: e.array('tankSetup.optDevicesSetup.slots'),
                                                setup: e.object('tankSetup.optDevicesSetup'),
                                                filter: e.array('tankSetup.optDevicesSetup.filter'),
                                                tabs: e.array('tankSetup.optDevicesSetup.tabs'),
                                                specialCurrency: e.array('tankSetup.optDevicesSetup.specialCurrency'),
                                            },
                                            consumables: {
                                                consumables: e.object('tankSetup.consumablesSetup'),
                                                slots: e.array('tankSetup.consumablesSetup.slots'),
                                            },
                                            boosters: {
                                                tabs: e.object('tankSetup.battleBoostersSetup.tabs'),
                                                slots: e.array('tankSetup.battleBoostersSetup.slots'),
                                            },
                                        },
                                        n = (0, $e.Om)(
                                            () => {
                                                return (
                                                    (e = t.optDevices.slots.get()),
                                                    Re(Ya(e), (e) =>
                                                        Object.assign({}, e, {
                                                            bonuses: Object.assign({}, e.bonuses, {
                                                                items: Re(e.bonuses.items, (e) =>
                                                                    Object.assign({}, e, {
                                                                        values: Re(e.values, (e) =>
                                                                            Object.assign({}, e),
                                                                        ),
                                                                    }),
                                                                ),
                                                            }),
                                                            specializations: Object.assign({}, e.specializations, {
                                                                specializations: Re(
                                                                    e.specializations.specializations,
                                                                    (e) => Object.assign({}, e),
                                                                ),
                                                            }),
                                                        }),
                                                    )
                                                );
                                                var e;
                                            },
                                            { equals: oe },
                                        ),
                                        a = (0, $e.Om)(() => n().length),
                                        s = (0, $e.Om)(
                                            (e) => {
                                                const t = Ie(n(), e);
                                                if (!t) throw Error(`No optional device found with index: ${e}`);
                                                return t;
                                            },
                                            { equals: oe },
                                        ),
                                        i = (0, $e.Om)((e) => s(e).bonuses.items.length, { equals: oe }),
                                        u = (0, $e.Om)(
                                            (e, t) => {
                                                const n = Ie(s(e).bonuses.items, t);
                                                if (!n) throw Error(`No bonus defPrice found with index: ${t}`);
                                                return Object.assign({}, n);
                                            },
                                            { equals: oe },
                                        ),
                                        o = (0, $e.Om)((e) => {
                                            const t = i(e);
                                            return s(e).effect ? (1 === t ? 2 : 1) : 0;
                                        }),
                                        r = (0, $e.Om)((e, t, n) => {
                                            const a = i(e),
                                                s = o(e);
                                            let u = s ? n - s : n,
                                                r = null;
                                            for (let e = 0; e <= t; e++) {
                                                if (!u) return null;
                                                (r = a > 2 ? 1 : 2 === a ? (u > 2 ? 2 : 1) : u), (u -= r);
                                            }
                                            return r;
                                        }),
                                        l = (0, $e.Om)(
                                            (e, t) => {
                                                const n = u(e, t);
                                                return (function (e, t) {
                                                    for (let s = e.length - 1; s >= 0; s--) {
                                                        const i =
                                                            ((a = void 0),
                                                            (n = e[s]) &&
                                                            'value' in n &&
                                                            null != (a = n.constructor) &&
                                                            a.name.includes('ArrayItem')
                                                                ? null == n
                                                                    ? void 0
                                                                    : n.value
                                                                : n);
                                                        if (t(i)) return i;
                                                    }
                                                    var n, a;
                                                })(n.values, ({ valueKey: e }) => e === n.localeName);
                                            },
                                            { equals: oe },
                                        ),
                                        c = (0, $e.Om)(
                                            () =>
                                                ((e) => {
                                                    const t = Ka;
                                                    return Le(
                                                        Pe(
                                                            Ya(e),
                                                            (e, n) => {
                                                                const a = t.indexOf(n.itemName);
                                                                return (
                                                                    (e[-1 === a ? Math.max(e.length, Ka.length) : a] =
                                                                        n),
                                                                    e
                                                                );
                                                            },
                                                            [],
                                                        ),
                                                        (e) => Boolean(e),
                                                    );
                                                })(t.consumables.slots.get()),
                                            { equals: oe },
                                        ),
                                        _ = (0, $e.Om)(() => c().length),
                                        d = (0, $e.Om)(
                                            (e) => {
                                                const t = Ie(c(), e);
                                                if (!t) throw Error(`No consumable found with index: ${t}`);
                                                return Object.assign({}, t);
                                            },
                                            { equals: oe },
                                        ),
                                        m = (0, $e.Om)(
                                            () => {
                                                return (e = t.boosters.slots.get()), Ya(e);
                                                var e;
                                            },
                                            { equals: oe },
                                        ),
                                        p = (0, $e.Om)(() => m().length),
                                        b = (0, $e.Om)(
                                            (e) => {
                                                const t = Ie(m(), e);
                                                if (!t) throw Error(`No battle booster found with index: ${e}`);
                                                return Object.assign({}, t);
                                            },
                                            { equals: oe },
                                        );
                                    return {
                                        model: t,
                                        computes: {
                                            optDevices: {
                                                slotsLength: a,
                                                device: s,
                                                bonusesLength: i,
                                                bonus: u,
                                                bonusEffectLinesCount: o,
                                                bonusVisibleLinesCount: r,
                                                bonusValue: l,
                                            },
                                            consumables: { length: _, consumable: d },
                                            boosters: { length: p, booster: b },
                                        },
                                    };
                                })(e),
                                n = t.model,
                                a = t.computes,
                                s = e.object('tankSetup.shellsSetup'),
                                i = e.array('tankSetup.shellsSetup.slots'),
                                u = e.object('ammunitionPanel'),
                                o = e.array('ammunitionPanel.sectionGroups'),
                                r = (0, $e.Om)(
                                    (e) => {
                                        const t = Ie(i.get(), e);
                                        if (!t) throw Error(`No shell found with index: ${e}`);
                                        return Object.assign({}, t);
                                    },
                                    { equals: oe },
                                ),
                                l = (0, $e.Om)(() => i.get().length),
                                c = (0, $e.Om)((e) => r(e).specifications.length),
                                _ = (0, $e.Om)(
                                    (e, t) => {
                                        const n = Ie(r(e).specifications, t);
                                        if (!n) throw Error(`No shell specification found with index: ${t}`);
                                        return Object.assign({}, n);
                                    },
                                    { equals: oe },
                                ),
                                d = (0, $e.Om)(
                                    (e, t) => {
                                        const n = Ie(r(e).price.price, t);
                                        if (!n) throw Error(`No shell price found with index: ${t}`);
                                        return Object.assign({}, n);
                                    },
                                    { equals: oe },
                                ),
                                m = (0, $e.Om)(
                                    (e, t) => {
                                        const n = Ie(r(e).price.defPrice, t);
                                        if (!n) throw Error(`No shell defPrice found with index: ${t}`);
                                        return Object.assign({}, n);
                                    },
                                    { equals: oe },
                                ),
                                p = (0, $e.Om)((e) => r(e).price.price.length),
                                b = (0, $e.Om)((e) => r(e).price.defPrice.length),
                                g = (0, $e.Om)(() => {
                                    const e = u.get().selectedSlot,
                                        t = Ie(o.get(), 0);
                                    if (!t) throw Error('No section group found');
                                    const n = Ie(t.sections, 0);
                                    if (!n) throw Error('No section found');
                                    const a = Ie(n.slots, e);
                                    if (!a) throw Error(`No slot found with index: ${e}`);
                                    const s = Ie(a.specializations.specializations, 0);
                                    return null == s ? void 0 : s.name;
                                });
                            return Object.assign({}, e.primitives(['show', 'isReady']), n, {
                                shellsSetup: s,
                                shellsSlots: i,
                                ammunitionPanel: u,
                                sectionGroups: o,
                                computes: Object.assign({}, a, {
                                    shells: {
                                        length: l,
                                        shell: r,
                                        specificationsLength: c,
                                        specification: _,
                                        price: d,
                                        priceLength: p,
                                        defPriceLength: b,
                                        defPrice: m,
                                    },
                                    selectedSlotSpecialization: g,
                                }),
                            });
                        },
                        ({ externalModel: e }) => ({
                            close: e.createCallbackNoArgs('onClose'),
                            animationEnded: e.createCallbackNoArgs('onAnimationEnd'),
                            viewRendered: e.createCallbackNoArgs('onViewRendered'),
                            resized: e.createCallback((e) => Object.assign({}, e), 'onResized'),
                            filterChanged: e.createCallback(
                                (e) => Object.assign({}, e),
                                'tankSetup.optDevicesSetup.onFilterChanged',
                            ),
                            filterReset: e.createCallbackNoArgs('tankSetup.optDevicesSetup.onFilterReset'),
                            moreCurrencyGot: e.createCallbackNoArgs(
                                'tankSetup.optDevicesSetup.specialCurrency.onGetMoreCurrency',
                            ),
                            introPassed: e.createCallbackNoArgs('tankSetup.optDevicesSetup.onIntroPassed'),
                            optDevices: {
                                actSlot: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.optDevicesSetup.onSlotAction',
                                ),
                                changeTab: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.optDevicesSetup.onTabChanged',
                                ),
                                confirmDeal: e.createCallbackNoArgs('tankSetup.optDevicesSetup.onDealConfirmed'),
                                cancelDeal: e.createCallbackNoArgs('tankSetup.optDevicesSetup.onDealCancelled'),
                                changeAutoRenewal: e.createCallback(
                                    (e) => ({ value: e }),
                                    'tankSetup.optDevicesSetup.onAutoRenewalChanged',
                                ),
                            },
                            shells: {
                                confirmDeal: e.createCallbackNoArgs('tankSetup.shellsSetup.onDealConfirmed'),
                                cancelDeal: e.createCallbackNoArgs('tankSetup.shellsSetup.onDealCancelled'),
                                changeAutoRenewal: e.createCallback(
                                    (e) => ({ value: e }),
                                    'tankSetup.shellsSetup.onAutoRenewalChanged',
                                ),
                                updateSlot: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.shellsSetup.onShellUpdate',
                                ),
                                actSlot: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.shellsSetup.onSlotAction',
                                ),
                            },
                            consumables: {
                                confirmDeal: e.createCallbackNoArgs('tankSetup.consumablesSetup.onDealConfirmed'),
                                cancelDeal: e.createCallbackNoArgs('tankSetup.consumablesSetup.onDealCancelled'),
                                changeAutoRenewal: e.createCallback(
                                    (e) => ({ value: e }),
                                    'tankSetup.consumablesSetup.onAutoRenewalChanged',
                                ),
                                actSlot: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.consumablesSetup.onSlotAction',
                                ),
                            },
                            boosters: {
                                confirmDeal: e.createCallbackNoArgs('tankSetup.battleBoostersSetup.onDealConfirmed'),
                                cancelDeal: e.createCallbackNoArgs('tankSetup.battleBoostersSetup.onDealCancelled'),
                                changeAutoRenewal: e.createCallback(
                                    (e) => ({ value: e }),
                                    'tankSetup.battleBoostersSetup.onAutoRenewalChanged',
                                ),
                                changeTab: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.battleBoostersSetup.onTabChanged',
                                ),
                                actSlot: e.createCallback(
                                    (e) => Object.assign({}, e),
                                    'tankSetup.battleBoostersSetup.onSlotAction',
                                ),
                            },
                        }),
                    ),
                    Ja = Za[0],
                    Qa = Za[1],
                    es = ({ valueFirst: e = !1, itemsInStorage: t }) => {
                        const n = C()('Storage_base_53', e && 'Storage_base__reversed_8f'),
                            a = C()('Storage_count_7a', 0 === t && 'Storage_count__zero_54');
                        return u().createElement(
                            'div',
                            { className: n },
                            u().createElement('div', { className: 'Storage_icon_6a' }),
                            u().createElement('div', { className: a }, t),
                        );
                    },
                    ts = 'Animation_base_ab',
                    ns = ({ children: e, when: t, canAccept: n }) => {
                        const a = (0, i.useCallback)((e, t) => {
                                (0, z.Eu)().then(() => {
                                    (e.className = ''), e.classList.add(ts), e.classList.add(t);
                                });
                            }, []),
                            s = (0, i.useCallback)(
                                (e) => {
                                    a(e, 'Animation_base__enter_1e');
                                },
                                [a],
                            ),
                            o = (0, i.useCallback)(
                                (e) => {
                                    a(e, 'Animation_base__exit_88');
                                },
                                [a],
                            );
                        return t
                            ? u().createElement(
                                  lt.Z,
                                  null,
                                  u().createElement(
                                      ct.Z,
                                      { in: n, timeout: 500, onEnter: s, onExit: o, key: `index-${n}` },
                                      u().createElement(
                                          'div',
                                          { className: C()(ts, 'Animation_base__withAnimation_41') },
                                          e,
                                      ),
                                  ),
                              )
                            : u().createElement('div', { className: ts }, e);
                    };
                let as, ss, is;
                !(function (e) {
                    (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                })(as || (as = {})),
                    (function (e) {
                        (e.primary = 'primary'), (e.main = 'main');
                    })(ss || (ss = {})),
                    (function (e) {
                        (e.Center = 'center'), (e.Bottom = 'bottom');
                    })(is || (is = {}));
                const us = {
                        base: 'Checkbox_base_36',
                        base__disabled: 'Checkbox_base__disabled_08',
                        base__center: 'Checkbox_base__center_52',
                        base__bottom: 'Checkbox_base__bottom_28',
                        input: 'Checkbox_input_37',
                        base__mouseDown: 'Checkbox_base__mouseDown_45',
                        base__small: 'Checkbox_base__small_18',
                        base__medium: 'Checkbox_base__medium_12',
                        base__large: 'Checkbox_base__large_f7',
                        base__extraLarge: 'Checkbox_base__extraLarge_c9',
                        alertOverlay: 'Checkbox_alertOverlay_52',
                        base__alert: 'Checkbox_base__alert_b7',
                        blink: 'Checkbox_blink_5e',
                        base__checked: 'Checkbox_base__checked_a2',
                        inputHoverOverlay: 'Checkbox_inputHoverOverlay_36',
                        highlight: 'Checkbox_highlight_b8',
                        base__main: 'Checkbox_base__main_3a',
                        base__primary: 'Checkbox_base__primary_ab',
                        checkmark: 'Checkbox_checkmark_60',
                        fadeIn: 'Checkbox_fadeIn_1a',
                        label: 'Checkbox_label_bc',
                        labelContent: 'Checkbox_labelContent_64',
                    },
                    os = [
                        'id',
                        'isChecked',
                        'isDisabled',
                        'isAlert',
                        'size',
                        'type',
                        'soundHover',
                        'soundClick',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseUp',
                        'onMouseDown',
                        'onClick',
                        'onChange',
                        'onFocus',
                        'onBlur',
                        'text',
                        'contentStyles',
                        'children',
                        'alignment',
                    ];
                function rs() {
                    return (
                        (rs = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        rs.apply(null, arguments)
                    );
                }
                const ls = (e) => {
                        let t = e.id,
                            n = e.isChecked,
                            a = void 0 !== n && n,
                            s = e.isDisabled,
                            o = void 0 !== s && s,
                            r = e.isAlert,
                            l = void 0 !== r && r,
                            c = e.size,
                            _ = void 0 === c ? as.medium : c,
                            d = e.type,
                            m = void 0 === d ? ss.primary : d,
                            p = e.soundHover,
                            b = void 0 === p ? 'highlight' : p,
                            g = e.soundClick,
                            E = void 0 === g ? 'play' : g,
                            h = e.onMouseEnter,
                            f = e.onMouseLeave,
                            A = e.onMouseUp,
                            v = e.onMouseDown,
                            D = e.onClick,
                            F = e.onChange,
                            S = e.onFocus,
                            B = e.onBlur,
                            y = e.text,
                            w = e.contentStyles,
                            x = e.children,
                            T = e.alignment,
                            k = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, os);
                        const I = (0, i.useState)(!1),
                            O = I[0],
                            R = I[1],
                            N = (0, i.useState)(!1),
                            L = (N[0], N[1]),
                            M = (0, i.useCallback)(
                                (e) => {
                                    o || (F && F(), D && D(e));
                                },
                                [o, F, D],
                            ),
                            P = (0, i.useCallback)(
                                (e) => {
                                    const t = e.button === dn.LEFT;
                                    o || (t && R(!0), t && v && v(e), E && me(E));
                                },
                                [o, v, E],
                            ),
                            $ = (0, i.useCallback)(
                                (e) => {
                                    o || (R(!1), A && A(e));
                                },
                                [o, A],
                            ),
                            H = (0, i.useCallback)(
                                (e) => {
                                    o || (h && h(e), b && me(b));
                                },
                                [o, h, b],
                            ),
                            z = (0, i.useCallback)(
                                (e) => {
                                    o || (R(!1), f && f(e));
                                },
                                [o, f],
                            ),
                            W = (0, i.useCallback)(
                                (e) => {
                                    o || (L(!0), S && S(e));
                                },
                                [o, S],
                            ),
                            j = (0, i.useCallback)(
                                (e) => {
                                    o || (L(!1), B && B(e));
                                },
                                [o, B],
                            ),
                            G = u().createElement(
                                'div',
                                { className: us.label },
                                u().createElement(
                                    'div',
                                    { className: C()(us.labelContent, 's-labelContent'), style: w },
                                    y || x,
                                ),
                            );
                        return u().createElement(
                            'div',
                            rs(
                                {
                                    id: t,
                                    className: C()(us.base, us[`base__${_}`], us[`base__${m}`], {
                                        [us.base__checked]: a,
                                        [us.base__disabled]: o,
                                        [us.base__mouseDown]: O,
                                        [us.base__alert]: l,
                                        [us.base__center]: T === is.Center,
                                        [us.base__bottom]: T === is.Bottom,
                                    }),
                                    onClick: M,
                                    onMouseEnter: H,
                                    onMouseLeave: z,
                                    onMouseDown: P,
                                    onMouseUp: $,
                                    onFocus: W,
                                    onBlur: j,
                                },
                                k,
                            ),
                            u().createElement(
                                'div',
                                { className: us.input },
                                u().createElement('div', { className: us.alertOverlay }),
                                u().createElement('div', { className: us.inputHoverOverlay }),
                                u().createElement('div', { className: us.highlight }),
                            ),
                            u().createElement('div', { className: us.checkmark }),
                            ((y || x) && G) || null,
                        );
                    },
                    cs = (0, i.createContext)(null),
                    _s = (0, te.Pi)(
                        ({
                            label: e = R.strings.tank_setup.dealPanel.autoRenew(),
                            onValueChanged: t,
                            renewType: n = Bs.General,
                        }) => {
                            const a = (() => {
                                    const e = (0, i.useContext)(cs);
                                    if (!e)
                                        throw Error(
                                            'Context not found. Make sure your component is wrapped in ModelContext.Provider.',
                                        );
                                    return e;
                                })(),
                                s = a.model,
                                o = a.controls,
                                r = s.dealPanel.get().isAutoRenewalEnabled,
                                l = (0, i.useCallback)(() => {
                                    o.changeAutoRenewal(!r), t && t(!r);
                                }, [o, r, t]),
                                c = (0, i.useMemo)(() => {
                                    const e = R.strings.tank_setup.tooltip.autoRenewal,
                                        t = e.header.$dyn(n),
                                        a = n === Bs.General ? '' : e.body.$dyn(n);
                                    return { header: String(t || e.header.general()), body: a ? String(a) : void 0 };
                                }, [n]);
                            return u().createElement(
                                K,
                                c,
                                u().createElement(ls, {
                                    id: 'renewal-setup-checkbox',
                                    isChecked: r,
                                    text: e,
                                    onChange: l,
                                }),
                            );
                        },
                    ),
                    ds = u().memo(({ applyBtnString: e, isDisabled: t, onConfirm: n, confirmButtonRef: a }) =>
                        u().createElement(
                            'div',
                            { ref: a, className: 'ConfirmButton_base_75', id: 'deal-panel-confirm' },
                            u().createElement(
                                Kn,
                                { size: Vn.medium, disabled: t, onClick: () => n && n() },
                                R.strings.tank_setup.dealPanel.button.$dyn(e),
                            ),
                        ),
                    ),
                    ms = u().memo(
                        ({
                            applyBtnString: e = 'apply',
                            isDisabled: t,
                            canCancel: n,
                            onCancel: a,
                            onConfirm: s,
                            confirmButtonRef: i,
                        }) => {
                            const o = R.strings.tank_setup.dealPanel,
                                r = u().createElement(ds, {
                                    applyBtnString: e,
                                    isDisabled: t,
                                    onConfirm: s,
                                    confirmButtonRef: i,
                                });
                            return u().createElement(
                                'div',
                                { className: 'Controls_base_d3' },
                                t
                                    ? u().createElement(
                                          K,
                                          { body: o.tooltip.notEnough() },
                                          u().createElement('div', null, r),
                                      )
                                    : r,
                                u().createElement(
                                    'div',
                                    { id: 'deal-panel-cancel' },
                                    u().createElement(
                                        Kn,
                                        {
                                            size: Vn.medium,
                                            type: qn.secondary,
                                            mixClass: 'Controls_button_f8',
                                            disabled: !n,
                                            onClick: a,
                                        },
                                        o.button.cancel(),
                                    ),
                                ),
                            );
                        },
                    ),
                    ps = Te()(
                        ({ observableModel: e }) =>
                            Object.assign(
                                {},
                                e.primitives(['totalItemsInStorage', 'isDisabled', 'canAccept', 'canCancel']),
                                {
                                    root: e.object(),
                                    dealPanel: e.object(),
                                    price: e.array('price'),
                                    defPrice: e.array('defPrice'),
                                    discount: e.array('discount'),
                                },
                            ),
                        ({ externalModel: e }) => ({
                            changeAutoRenewal: e.createCallback((e) => ({ value: e }), 'onAutoRenewalChanged'),
                        }),
                    ),
                    bs = ps[0],
                    gs = ps[1];
                class Es extends u().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? z.B3.GOLD : z.B3.INTEGRAL;
                        const t = z.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                Es.defaultProps = { format: 'integral' };
                const hs = {
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
                let fs, As, vs;
                !(function (e) {
                    (e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                })(fs || (fs = {})),
                    (function (e) {
                        (e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.eliteXP = 'eliteXP'),
                            (e.equipCoin = 'equipCoin');
                    })(As || (As = {})),
                    (function (e) {
                        (e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG');
                    })(vs || (vs = {}));
                const Cs = (0, i.memo)(
                        ({
                            isDiscount: e,
                            isInteractiveDiscount: t,
                            size: n,
                            type: a,
                            value: s,
                            discountValue: i,
                            showPlus: o,
                            isEnough: r = !0,
                            stockBackgroundName: l = vs.Red,
                            className: c,
                            classNames: _,
                        }) =>
                            u().createElement(
                                'span',
                                { className: C()(hs.base, hs[`base__${n}`], c) },
                                u().createElement(
                                    'span',
                                    {
                                        className: C()(
                                            hs.value,
                                            hs[`value__${a}`],
                                            !r && hs.value__notEnough,
                                            null == _ ? void 0 : _.value,
                                        ),
                                    },
                                    o && s > 0 && '+',
                                    u().createElement(Es, { value: s, format: a === As.gold ? 'gold' : 'integral' }),
                                ),
                                u().createElement('span', {
                                    className: C()(hs.icon, hs[`icon__${a}-${n}`], null == _ ? void 0 : _.icon),
                                }),
                                e &&
                                    u().createElement(
                                        'span',
                                        {
                                            className: C()(
                                                hs.stock,
                                                i && hs.stock__indent,
                                                t && hs.stock__interactive,
                                                null == _ ? void 0 : _.stock,
                                            ),
                                        },
                                        u().createElement('span', {
                                            className: hs.stockBackground,
                                            style: { backgroundImage: `url(R.images.gui.maps.icons.library.${l})` },
                                        }),
                                        Boolean(i) && i,
                                    ),
                            ),
                    ),
                    Ds = ({
                        price: e,
                        defPrice: t,
                        priceSeparator: n = null,
                        showZero: a = !1,
                        bigSize: s = !1,
                        ignoreDiscount: o = !1,
                    }) => {
                        const r = !o && Boolean(t.length);
                        return u().createElement(
                            'div',
                            { className: 'Price_base_61' },
                            e.map(
                                ({ value: e }, t) =>
                                    (a || Boolean(e.value)) &&
                                    u().createElement(
                                        i.Fragment,
                                        { key: t },
                                        t > 0 && n,
                                        u().createElement(
                                            'div',
                                            { className: C()('Price_price_1b', r && 'Price_price__discount_29') },
                                            u().createElement(Cs, {
                                                key: t,
                                                isDiscount: r,
                                                size: s ? fs.big : fs.small,
                                                type: e.name,
                                                value: e.value,
                                                isEnough: e.isEnough,
                                            }),
                                        ),
                                    ),
                            ),
                        );
                    },
                    Fs = ({ parentId: e, isHideMessage: t, priceLabel: n }) => {
                        const a = gs().model;
                        return u().createElement(
                            'div',
                            { id: `${e}-total-price`, className: 'TotalPrice_base_d9' },
                            u().createElement(
                                'div',
                                { className: C()('TotalPrice_message_66', t && 'TotalPrice_message__hidden_29') },
                                n,
                            ),
                            u().createElement(Ds, {
                                ignoreDiscount: !0,
                                bigSize: !0,
                                price: a.price.get(),
                                defPrice: a.defPrice.get(),
                                discount: a.discount.get(),
                                priceSeparator: u().createElement('div', { className: 'TotalPrice_plus_f0' }),
                            }),
                        );
                    },
                    Ss = {
                        base: 'App_base_44',
                        base__tiny: 'App_base__tiny_5e',
                        base__small: 'App_base__small_1d',
                        base__medium: 'App_base__medium_2a',
                        base__large: 'App_base__large_8d',
                        base__huge: 'App_base__huge_6d',
                        base__dialog: 'App_base__dialog_fa',
                        storage: 'App_storage_d5',
                        storage__medium: 'App_storage__medium_51',
                        storage__large: 'App_storage__large_8a',
                        storage__huge: 'App_storage__huge_b6',
                        from: 'App_from_a4',
                        plus: 'App_plus_04',
                        renewal: 'App_renewal_06',
                        renewal__dialog: 'App_renewal__dialog_ba',
                        control: 'App_control_fc',
                        totalPrice: 'App_totalPrice_87',
                        totalPrice__mixed: 'App_totalPrice__mixed_cc',
                    };
                let Bs, ys;
                !(function (e) {
                    (e.General = 'general'),
                        (e.Consumables = 'consumables'),
                        (e.Shells = 'shells'),
                        (e.Boosters = 'boosters'),
                        (e.Repair = 'repair');
                })(Bs || (Bs = {})),
                    (function (e) {
                        (e.Column = 'column'), (e.Row = 'row');
                    })(ys || (ys = {}));
                const ws = R.strings.tank_setup.dealPanel,
                    xs =
                        ((0, te.Pi)(
                            ({
                                renewalType: e,
                                withConfirmation: t = !1,
                                mediaSize: n = be.Medium,
                                panelType: a = ys.Row,
                                priceLabel: s = ws.toBePaid(),
                                autoRenewalLabel: o,
                                onAutoRenewalChanged: r,
                                onDealConfirmed: l,
                                onDealCancelled: c,
                            }) => {
                                const _ = gs(),
                                    d = _.model,
                                    m = (0, i.useRef)(null),
                                    p = n === be.Tiny || n === be.Small,
                                    b = a === ys.Row,
                                    g = Boolean(d.totalItemsInStorage.get()),
                                    E = Boolean(d.price.get().length),
                                    h = p && g && E;
                                return u().createElement(
                                    cs.Provider,
                                    { value: _ },
                                    u().createElement(
                                        'div',
                                        {
                                            className: C()(
                                                Ss.base,
                                                n && Ss[`base__${n}`],
                                                e && Ss.base__renewal,
                                                !b && Ss.base__dialog,
                                            ),
                                        },
                                        e &&
                                            u().createElement(
                                                'div',
                                                { className: C()(Ss.renewal, !b && Ss.renewal__dialog) },
                                                u().createElement(_s, { renewType: e, onValueChanged: r, label: o }),
                                            ),
                                        u().createElement(
                                            ns,
                                            { when: b, canAccept: d.canAccept.get() },
                                            u().createElement(
                                                u().Fragment,
                                                null,
                                                g &&
                                                    u().createElement(
                                                        'div',
                                                        { className: C()(Ss.storage, n && Ss[`storage__${n}`]) },
                                                        !p &&
                                                            u().createElement(
                                                                'div',
                                                                { className: Ss.from },
                                                                ws.fromStorage(),
                                                            ),
                                                        u().createElement(es, {
                                                            valueFirst: !0,
                                                            itemsInStorage: d.totalItemsInStorage.get(),
                                                        }),
                                                    ),
                                                h && u().createElement('div', { className: Ss.plus }),
                                                E &&
                                                    u().createElement(
                                                        'div',
                                                        { className: C()(Ss.totalPrice, h && Ss.totalPrice__mixed) },
                                                        u().createElement(Fs, {
                                                            parentId: 'deal-panel',
                                                            priceLabel: s,
                                                            isHideMessage: p && b,
                                                        }),
                                                    ),
                                                t &&
                                                    d.canAccept.get() &&
                                                    u().createElement(
                                                        'div',
                                                        { className: Ss.control },
                                                        u().createElement(ms, {
                                                            isDisabled: d.isDisabled.get(),
                                                            canCancel: d.canCancel.get(),
                                                            onCancel: () => c && c(),
                                                            onConfirm: () => l && l(),
                                                            confirmButtonRef: m,
                                                        }),
                                                    ),
                                            ),
                                        ),
                                    ),
                                );
                            },
                        ),
                        (e, t, n) => (n < e ? e : n > t ? t : n));
                function Ts(e, t, n = []) {
                    const a = (0, i.useRef)(0),
                        s = (0, i.useCallback)(() => window.clearInterval(a.current), n || []);
                    (0, i.useEffect)(() => s, [s]);
                    const u = (null != n ? n : []).concat([t]);
                    return [
                        (0, i.useCallback)((n) => {
                            (a.current = window.setInterval(() => e(n, !0), t)), e(n, !1);
                        }, u),
                        s,
                    ];
                }
                function ks(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                var Is = n(7030);
                let Os;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(Os || (Os = {}));
                const Rs = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Ns = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: n,
                        getDirection: a,
                        getWrapperSize: s,
                        triggerMouseMoveOnUpdate: u = !1,
                    }) => {
                        const o = (e, n) => {
                            const a = t(e),
                                s = a[0],
                                i = a[1];
                            return i <= s ? 0 : xs(s, i, n);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                _ = void 0 === c ? Rs : c,
                                d = (0, i.useRef)(null),
                                m = (0, i.useRef)(null),
                                p = (() => {
                                    const e = (0, i.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        n = (e, n) => {
                                            t(e).set(n, n);
                                        },
                                        a = (e, n) => {
                                            t(e).delete(n);
                                        },
                                        s = (e, ...n) => {
                                            for (
                                                var a,
                                                    s = (function (e, t) {
                                                        var n =
                                                            ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                                                            e['@@iterator'];
                                                        if (n) return (n = n.call(e)).next.bind(n);
                                                        if (
                                                            Array.isArray(e) ||
                                                            (n = (function (e, t) {
                                                                if (e) {
                                                                    if ('string' == typeof e) return ks(e, t);
                                                                    var n = {}.toString.call(e).slice(8, -1);
                                                                    return (
                                                                        'Object' === n &&
                                                                            e.constructor &&
                                                                            (n = e.constructor.name),
                                                                        'Map' === n || 'Set' === n
                                                                            ? Array.from(e)
                                                                            : 'Arguments' === n ||
                                                                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                    n,
                                                                                )
                                                                              ? ks(e, t)
                                                                              : void 0
                                                                    );
                                                                }
                                                            })(e)) ||
                                                            (t && e && 'number' == typeof e.length)
                                                        ) {
                                                            n && (e = n);
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
                                                    })(t(e).values());
                                                !(a = s()).done;

                                            )
                                                (0, a.value)(...n);
                                        };
                                    return (0, i.useMemo)(() => ({ on: n, off: a, trigger: s }), []);
                                })(),
                                b = (function (e, t, n) {
                                    const a = (0, i.useMemo)(
                                        () =>
                                            (function (e, t, n, a) {
                                                let s,
                                                    i = !1,
                                                    u = 0;
                                                function o() {
                                                    s && clearTimeout(s);
                                                }
                                                function r(...r) {
                                                    const l = this,
                                                        c = Date.now() - u;
                                                    function _() {
                                                        (u = Date.now()), n.apply(l, r);
                                                    }
                                                    i ||
                                                        (a && !s && _(),
                                                        o(),
                                                        void 0 === a && c > e
                                                            ? _()
                                                            : !0 !== t &&
                                                              (s = setTimeout(
                                                                  a
                                                                      ? function () {
                                                                            s = void 0;
                                                                        }
                                                                      : _,
                                                                  void 0 === a ? e - c : e,
                                                              )));
                                                }
                                                return (
                                                    'boolean' != typeof t && ((a = n), (n = t), (t = void 0)),
                                                    (r.cancel = function () {
                                                        o(), (i = !0);
                                                    }),
                                                    r
                                                );
                                            })(n, e),
                                        t,
                                    );
                                    return (0, i.useEffect)(() => a.cancel, [a]), a;
                                })(
                                    () => {
                                        r.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                g = (0, Is.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = d.current;
                                        t && (n(t, e), p.trigger('change', e), u && b());
                                    },
                                    onRest: (e) => p.trigger('rest', e),
                                    onStart: (e) => p.trigger('start', e),
                                    onPause: (e) => p.trigger('pause', e),
                                })),
                                E = g[0],
                                h = g[1],
                                f = (0, i.useCallback)(
                                    (e, t, n) => {
                                        var a;
                                        const s = E.scrollPosition.get(),
                                            i = (null != (a = E.scrollPosition.goal) ? a : 0) - s;
                                        return o(e, t * n + i + s);
                                    },
                                    [E.scrollPosition],
                                ),
                                A = (0, i.useCallback)(
                                    (e, { immediate: t = !1, reset: n = !0 } = {}) => {
                                        const a = d.current;
                                        a &&
                                            h.start({
                                                scrollPosition: o(a, e),
                                                immediate: t,
                                                reset: n,
                                                config: _.animationConfig,
                                                from: { scrollPosition: o(a, E.scrollPosition.get()) },
                                            });
                                    },
                                    [h, _.animationConfig, E.scrollPosition],
                                ),
                                v = (0, i.useCallback)(
                                    (e) => {
                                        const t = d.current,
                                            n = m.current;
                                        if (!t || !n) return;
                                        const a = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return s(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(n, _.step),
                                            i = f(t, e, a);
                                        A(i);
                                    },
                                    [A, f, _.step],
                                ),
                                C = (0, i.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && v(a(e)),
                                            d.current && p.trigger('mouseWheel', e, E.scrollPosition, t(d.current));
                                    },
                                    [E.scrollPosition, v, p],
                                ),
                                D = Ze(
                                    () =>
                                        ee(() => {
                                            const e = d.current;
                                            e &&
                                                (A(o(e, E.scrollPosition.goal), { immediate: !0 }),
                                                p.trigger('resizeHandled'));
                                        }),
                                    [A, E.scrollPosition.goal],
                                ),
                                F = le(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const t = o(e, E.scrollPosition.goal);
                                    t !== E.scrollPosition.goal && A(t, { immediate: !0 }),
                                        p.trigger('recalculateContent');
                                });
                            return (
                                (0, i.useEffect)(
                                    () => (
                                        window.addEventListener('resize', D),
                                        () => {
                                            window.removeEventListener('resize', D);
                                        }
                                    ),
                                    [D],
                                ),
                                (0, i.useMemo)(
                                    () => ({
                                        getWrapperSize: () => (m.current ? s(m.current) : void 0),
                                        getContainerSize: () => (d.current ? e(d.current) : void 0),
                                        getBounds: () =>
                                            d.current
                                                ? t(d.current)
                                                : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                        stepTimeout: _.step.clampedArrowStepTimeout,
                                        clampPosition: o,
                                        handleMouseWheel: C,
                                        applyScroll: A,
                                        applyStepTo: v,
                                        contentRef: d,
                                        wrapperRef: m,
                                        scrollPosition: h,
                                        animationScroll: E,
                                        recalculateContent: F,
                                        events: { on: p.on, off: p.off },
                                    }),
                                    [E.scrollPosition, A, v, p.off, p.on, F, C, h, _.step.clampedArrowStepTimeout],
                                )
                            );
                        };
                    },
                    Ls = Ns({
                        getBounds: (e) => {
                            var t, n;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (t = null == (n = e.parentElement) ? void 0 : n.offsetWidth) ? t : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, t) => {
                            e.style.transform = `translateX(-${t.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Os.Next : Os.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    Ms = 'HorizontalBar_base__nonActive_82',
                    Ps = 'disable',
                    $s = { pending: !1, offset: 0 },
                    Hs = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    zs = () => {},
                    Ws = (e, t) => Math.max(20, e.offsetWidth * t),
                    js = (0, i.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = Hs, onDrag: a = zs }) => {
                        const s = (0, i.useRef)(null),
                            o = (0, i.useRef)(null),
                            l = (0, i.useRef)(null),
                            c = (0, i.useRef)(null),
                            _ = (0, i.useRef)(null),
                            d = e.stepTimeout || 100,
                            m = (0, i.useState)($s),
                            p = m[0],
                            b = m[1],
                            g = (0, i.useCallback)(
                                (e) => {
                                    b(e),
                                        _.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: _.current });
                                },
                                [a],
                            ),
                            E = () => {
                                const t = c.current,
                                    n = _.current,
                                    a = e.getWrapperSize(),
                                    s = e.getContainerSize();
                                if (!(a && t && n && s)) return;
                                const i = e.animationScroll.scrollPosition.get(),
                                    u = Math.min(1, a / s),
                                    r = xs(0, 1, i / (s - a)),
                                    d = (t.offsetWidth - Ws(t, u)) * r;
                                (n.style.transform = `translateX(${0 | d}px)`),
                                    ((e) => {
                                        if (o.current && l.current && c.current && _.current) {
                                            if (0 === e)
                                                return o.current.classList.add(Ps), void l.current.classList.remove(Ps);
                                            if (
                                                ((t = c.current),
                                                (n = _.current),
                                                e - (t.offsetWidth - n.offsetWidth) >= -0.5)
                                            )
                                                return o.current.classList.remove(Ps), void l.current.classList.add(Ps);
                                            var t, n;
                                            o.current.classList.remove(Ps), l.current.classList.remove(Ps);
                                        }
                                    })(d);
                            },
                            h = le(() => {
                                (() => {
                                    const t = _.current,
                                        n = c.current,
                                        a = e.getWrapperSize(),
                                        i = e.getContainerSize();
                                    if (!(i && t && a && n)) return;
                                    const u = Math.min(1, a / i);
                                    (t.style.width = `${Ws(n, u)}px`),
                                        (t.style.display = 'flex'),
                                        s.current &&
                                            (1 === u ? s.current.classList.add(Ms) : s.current.classList.remove(Ms));
                                })(),
                                    E();
                            });
                        (0, i.useEffect)(() => ee(h)),
                            (0, i.useEffect)(
                                () =>
                                    ee(() => {
                                        const t = () => {
                                            E();
                                        };
                                        let n = zs;
                                        const a = () => {
                                            n(), (n = ee(h));
                                        };
                                        return (
                                            e.events.on('recalculateContent', h),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', a),
                                            () => {
                                                n(),
                                                    e.events.off('recalculateContent', h),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', a);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, i.useEffect)(() => {
                                if (!p.pending) return;
                                const t = r.O.client.events.mouse.move(([t, n]) => {
                                        var s;
                                        const i = e.contentRef.current,
                                            u = e.wrapperRef.current;
                                        if (!i || !u) return;
                                        const o = c.current,
                                            r = _.current;
                                        if (!o || !r) return;
                                        if ('inside' === n && t.clientX < 0) return;
                                        const l = t.clientX - p.offset - o.getBoundingClientRect().x,
                                            d = (l / o.offsetWidth) * (null != (s = e.getContainerSize()) ? s : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(i, d),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            a({ type: 'dragging', thumb: r, thumbOffset: l, contentOffset: d });
                                    }),
                                    n = r.O.client.events.mouse.up(() => {
                                        t(), g($s);
                                    });
                                return () => {
                                    t(), n();
                                };
                            }, [e, p.offset, p.pending, a, g]);
                        const f = Ts((t) => e.applyStepTo(t), d, [e]),
                            A = f[0],
                            v = f[1];
                        (0, i.useEffect)(
                            () => (
                                document.addEventListener('mouseup', v, !0),
                                () => document.removeEventListener('mouseup', v, !0)
                            ),
                            [v],
                        );
                        const D = (e) => {
                            e.target.classList.contains(Ps) || me('highlight');
                        };
                        return u().createElement(
                            'div',
                            { className: C()('HorizontalBar_base_49', t.base), ref: s, onWheel: e.handleMouseWheel },
                            u().createElement('div', {
                                className: C()('HorizontalBar_leftButton_5f', t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ps) || 0 !== e.button || (me('play'), A(Os.Next));
                                },
                                onMouseUp: v,
                                ref: o,
                                onMouseEnter: D,
                            }),
                            u().createElement(
                                'div',
                                {
                                    className: C()('HorizontalBar_track_0d', t.track),
                                    onMouseDown: (t) => {
                                        const a = _.current;
                                        a &&
                                            0 === t.button &&
                                            (me('play'),
                                            t.target === a
                                                ? g({ pending: !0, offset: t.screenX - a.getBoundingClientRect().x })
                                                : ((t) => {
                                                      const a = _.current,
                                                          s = e.contentRef.current;
                                                      if (!a || !s) return;
                                                      const i = n(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + i * t);
                                                  })(t.screenX > a.getBoundingClientRect().x ? Os.Prev : Os.Next));
                                    },
                                    ref: c,
                                    onMouseEnter: D,
                                },
                                u().createElement('div', { ref: _, className: C()('HorizontalBar_thumb_fd', t.thumb) }),
                                u().createElement('div', { className: C()('HorizontalBar_rail_32', t.rail) }),
                            ),
                            u().createElement('div', {
                                className: C()('HorizontalBar_rightButton_03', t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ps) || 0 !== e.button || (me('play'), A(Os.Prev));
                                },
                                onMouseUp: v,
                                ref: l,
                                onMouseEnter: D,
                            }),
                        );
                    }),
                    Gs = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Us = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: a,
                        areaClassName: s,
                        classNames: o,
                        scrollClassName: r,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const _ = (0, i.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: C()(Gs.base, e.base) });
                            }, [a]),
                            d = (0, i.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return u().createElement(
                            'div',
                            { className: C()(Gs.defaultScroll, n), onWheel: t.handleMouseWheel },
                            u().createElement(
                                'div',
                                { className: C()(Gs.defaultScrollArea, s) },
                                u().createElement(qs, { className: r, api: d, classNames: o }, e),
                            ),
                            u().createElement(js, { getStepByRailClick: l, api: t, onDrag: c, classNames: _ }),
                        );
                    },
                    qs = ({ api: e, className: t, classNames: n, children: a }) => (
                        (0, i.useEffect)(() => ee(e.recalculateContent)),
                        u().createElement(
                            'div',
                            { className: C()(Gs.base, t) },
                            u().createElement(
                                'div',
                                {
                                    className: C()(Gs.wrapper, null == n ? void 0 : n.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                u().createElement(
                                    'div',
                                    { className: C()(Gs.content, null == n ? void 0 : n.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    );
                (qs.Bar = js), (qs.Default = Us);
                const Vs = Ns({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Os.Next : Os.Prev),
                    }),
                    Xs = 'VerticalBar_base__nonActive_42',
                    Ks = 'disable',
                    Ys = () => {},
                    Zs = { pending: !1, offset: 0 },
                    Js = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    Qs = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    ei = (e, t) => Math.max(20, e.offsetHeight * t),
                    ti = (0, i.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = Js, onDrag: a = Ys }) => {
                        const s = (0, i.useRef)(null),
                            o = (0, i.useRef)(null),
                            l = (0, i.useRef)(null),
                            c = (0, i.useRef)(null),
                            _ = (0, i.useRef)(null),
                            d = e.stepTimeout || 100,
                            m = (0, i.useState)(Zs),
                            p = m[0],
                            b = m[1],
                            g = (0, i.useCallback)(
                                (e) => {
                                    b(e),
                                        _.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: _.current });
                                },
                                [a],
                            ),
                            E = le(() => {
                                const t = _.current,
                                    n = c.current,
                                    a = e.getWrapperSize(),
                                    i = e.getContainerSize();
                                if (!(a && i && t && n)) return;
                                const u = Math.min(1, a / i);
                                return (
                                    (t.style.height = `${ei(n, u)}px`),
                                    (t.style.display = 'flex'),
                                    s.current &&
                                        (1 === u ? s.current.classList.add(Xs) : s.current.classList.remove(Xs)),
                                    u
                                );
                            }),
                            h = le(() => {
                                const t = c.current,
                                    n = _.current,
                                    a = e.getWrapperSize(),
                                    s = e.getContainerSize();
                                if (!(a && t && n && s)) return;
                                const i = e.animationScroll.scrollPosition.get(),
                                    u = Math.min(1, a / s),
                                    r = xs(0, 1, i / (s - a)),
                                    d = (t.offsetHeight - ei(t, u)) * r;
                                (n.style.transform = `translateY(${0 | d}px)`),
                                    ((e) => {
                                        if (o.current && l.current && c.current && _.current) {
                                            if (0 === Math.round(e))
                                                return o.current.classList.add(Ks), void l.current.classList.remove(Ks);
                                            if (
                                                ((t = c.current),
                                                (n = _.current),
                                                e - (t.offsetHeight - n.offsetHeight) >= -0.5)
                                            )
                                                return o.current.classList.remove(Ks), void l.current.classList.add(Ks);
                                            var t, n;
                                            o.current.classList.remove(Ks), l.current.classList.remove(Ks);
                                        }
                                    })(d);
                            }),
                            f = le(() => {
                                Qs(e, () => {
                                    E(), h();
                                });
                            });
                        (0, i.useEffect)(() => ee(f)),
                            (0, i.useEffect)(() => {
                                const t = () => {
                                    Qs(e, () => {
                                        h();
                                    });
                                };
                                let n = Ys;
                                const a = () => {
                                    n(), (n = ee(f));
                                };
                                return (
                                    e.events.on('recalculateContent', f),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', a),
                                    () => {
                                        n(),
                                            e.events.off('recalculateContent', f),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', a);
                                    }
                                );
                            }, [e]),
                            (0, i.useEffect)(() => {
                                if (!p.pending) return;
                                const t = r.O.client.events.mouse.up(() => {
                                        g(Zs);
                                    }),
                                    n = r.O.client.events.mouse.move(([t]) => {
                                        Qs(e, (n) => {
                                            const s = c.current,
                                                i = _.current,
                                                u = e.getContainerSize();
                                            if (!s || !i || !u) return;
                                            const o = t.screenY - p.offset - s.getBoundingClientRect().y,
                                                r = (o / s.offsetHeight) * u;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(n, r),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: n.scrollTop },
                                            }),
                                                a({ type: 'dragging', thumb: i, thumbOffset: o, contentOffset: r });
                                        });
                                    });
                                return () => {
                                    t(), n();
                                };
                            }, [e, p.offset, p.pending, a, g]);
                        const A = Ts((t) => e.applyStepTo(t), d, [e]),
                            v = A[0],
                            D = A[1];
                        (0, i.useEffect)(
                            () => (
                                document.addEventListener('mouseup', D, !0),
                                () => document.removeEventListener('mouseup', D, !0)
                            ),
                            [D],
                        );
                        const F = (e) => {
                            e.target.classList.contains(Ks) || me('highlight');
                        };
                        return u().createElement(
                            'div',
                            { className: C()('VerticalBar_base_f3', t.base), ref: s, onWheel: e.handleMouseWheel },
                            u().createElement('div', {
                                className: C()('VerticalBar_topButton_d7', t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ks) || 0 !== e.button || (me('play'), v(Os.Next));
                                },
                                ref: o,
                                onMouseEnter: F,
                            }),
                            u().createElement(
                                'div',
                                {
                                    className: C()('VerticalBar_track_df', t.track),
                                    onMouseDown: (t) => {
                                        const a = _.current;
                                        var s;
                                        a &&
                                            0 === t.button &&
                                            (me('play'),
                                            t.target === a
                                                ? g({ pending: !0, offset: t.screenY - a.getBoundingClientRect().y })
                                                : ((s = t.screenY > a.getBoundingClientRect().y ? Os.Prev : Os.Next),
                                                  _.current &&
                                                      Qs(e, (t) => {
                                                          if (!t) return;
                                                          const a = n(e),
                                                              i = e.clampPosition(t, t.scrollTop + a * s);
                                                          e.applyScroll(i);
                                                      })));
                                    },
                                    ref: c,
                                    onMouseEnter: F,
                                },
                                u().createElement('div', { ref: _, className: C()('VerticalBar_thumb_32', t.thumb) }),
                                u().createElement('div', { className: C()('VerticalBar_rail_43', t.rail) }),
                            ),
                            u().createElement('div', {
                                className: C()('VerticalBar_bottomButton_06', t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ks) || 0 !== e.button || (me('play'), v(Os.Prev));
                                },
                                onMouseUp: D,
                                ref: l,
                                onMouseEnter: F,
                            }),
                        );
                    }),
                    ni = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    ai = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: a,
                        areaClassName: s,
                        scrollClassName: o,
                        scrollClassNames: r,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const _ = (0, i.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: C()(ni.base, e.base) });
                            }, [a]),
                            d = (0, i.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return u().createElement(
                            'div',
                            { className: C()(ni.defaultScroll, n), onWheel: t.handleMouseWheel },
                            u().createElement(
                                'div',
                                { className: C()(ni.area, s) },
                                u().createElement(si, { className: o, classNames: r, api: d }, e),
                            ),
                            u().createElement(ti, { getStepByRailClick: l, api: t, onDrag: c, classNames: _ }),
                        );
                    },
                    si = ({ className: e, classNames: t, children: n, api: a }) => (
                        (0, i.useEffect)(() => ee(a.recalculateContent)),
                        u().createElement(
                            'div',
                            { className: C()(ni.base, e), ref: a.wrapperRef, onWheel: a.handleMouseWheel },
                            u().createElement(
                                'div',
                                { className: C()(ni.content, null == t ? void 0 : t.content), ref: a.contentRef },
                                n,
                            ),
                        )
                    );
                si.Default = ai;
                const ii = { Vertical: s, Horizontal: a };
                'undefined' != typeof Element &&
                    (Element.prototype.matches ||
                        Element.prototype.webkitMatchesSelector ||
                        Element.prototype.mozMatchesSelector ||
                        Element.prototype.msMatchesSelector),
                    'undefined' != typeof document && document.documentElement.style,
                    'undefined' != typeof window &&
                        ('ontouchstart' in window || (window.DocumentTouch && (document, window.DocumentTouch))),
                    'undefined' != typeof navigator && navigator.msMaxTouchPoints,
                    'undefined' != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent);
                const ui = (e) => {
                        if (!e) return !1;
                        const t = e.getBoundingClientRect(),
                            n = t.width,
                            a = t.height;
                        return 0 !== n && 0 !== a;
                    },
                    oi = ({ children: e, selectedSlotId: t, scrollAreaKey: n = 'area', updateKey: a = null }) => {
                        const s = (0, i.useState)(!1),
                            o = s[0],
                            r = s[1],
                            l = (0, i.useRef)(null),
                            c = (0, i.useRef)(null),
                            _ = (0, i.useRef)(!1),
                            d = (0, i.useRef)(''),
                            m = ((e) => {
                                const t = (0, i.useState)(ui(e ? e.current : null)),
                                    n = t[0],
                                    a = t[1];
                                return (
                                    (0, i.useEffect)(() => {
                                        let t = 0;
                                        const n = () => {
                                            t = requestAnimationFrame(() => {
                                                ui(e ? e.current : null) ? a(!0) : n();
                                            });
                                        };
                                        return (
                                            n(),
                                            () => {
                                                cancelAnimationFrame(t);
                                            }
                                        );
                                    }, [e]),
                                    (0, i.useEffect)(() => () => a(!1), [e]),
                                    n
                                );
                            })(l),
                            p = Vs();
                        (0, i.useEffect)(
                            () => () => {
                                _.current = !1;
                            },
                            [],
                        );
                        const b = le(() => {
                                _.current && r(!0), p.events.off('rest', b);
                            }),
                            g = (0, i.useCallback)(() => {
                                _.current && r(!1);
                            }, []),
                            E = (0, i.useCallback)(() => {
                                const e = c.current,
                                    t = l.current;
                                if (e && p && t) {
                                    const n = e.offsetTop + (e.offsetHeight - t.offsetHeight);
                                    p.events.on('rest', b), p.applyScroll(n);
                                }
                            }, [b, p]);
                        (0, i.useEffect)(() => {
                            ee(() => {
                                m &&
                                    (d.current === n
                                        ? E()
                                        : ((d.current = n),
                                          new Promise((e) => {
                                              requestAnimationFrame(() => {
                                                  requestAnimationFrame(() => {
                                                      e();
                                                  });
                                              });
                                          }).then(() => {
                                              E(), _.current || (_.current = !0);
                                          })));
                            });
                        }, [m, n, E, t]),
                            (0, i.useEffect)(() => {
                                _.current && p.applyScroll(0);
                            }, [p, a]);
                        const h = {
                            currentCardRef: c,
                            scrollWrapperRef: l,
                            isFinalAnimationRunning: o,
                            onFinalAnimationDone: g,
                        };
                        return u().createElement(
                            'div',
                            { className: 'ScrollableCards_base_e0' },
                            u().createElement(
                                'div',
                                { className: 'ScrollableCards_scroll_4b', ref: l },
                                u().createElement(ii.Vertical.Default, { key: n, api: p }, (0, i.cloneElement)(e, h)),
                            ),
                        );
                    },
                    ri = (e, t) => e.getBoundingClientRect().top >= t,
                    li = {
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
                    ci = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    _i = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    di = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    mi = (0, i.memo)(({ text: e, binding: t, classMix: n }) => {
                        const a = (0, i.useCallback)((e) => ({ color: `#${e}` }), []),
                            s = (0, i.useMemo)(() => t || {}, [t]);
                        let o = ci.exec(e),
                            r = e,
                            l = 0;
                        for (; o; ) {
                            const n = o[0],
                                i = _i.exec(n),
                                c = di.exec(n),
                                _ = o[1];
                            if (i && c) {
                                const e = i[0],
                                    o = e + l++ + e;
                                (r = r.replace(n, `%(${o})`)),
                                    (s[o] = li[e]
                                        ? u().createElement(
                                              'span',
                                              { className: li[e] },
                                              u().createElement(Bt, { text: _, binding: t }),
                                          )
                                        : u().createElement(
                                              'span',
                                              { style: a(e) },
                                              u().createElement(Bt, { text: _, binding: t }),
                                          ));
                            }
                            o = ci.exec(e);
                        }
                        return u().createElement(Bt, { text: r, classMix: n, binding: s });
                    }),
                    pi = (e) =>
                        e
                            .split(' ')
                            .filter((e) => Boolean(e))
                            .map((e, t) => u().createElement(mi, { key: t, text: `${e} ` })),
                    bi = ({ blocks: e, linesCount: t = 2, mediaSize: n }) => {
                        const a = (0, i.useState)(e),
                            s = a[0],
                            o = a[1],
                            l = (0, i.useState)({ width: 0, height: 0 }),
                            c = l[0],
                            _ = l[1],
                            d = (0, i.useRef)(null),
                            m = (0, i.useRef)({ shortened: !1 }),
                            p = (0, i.useCallback)(() => {
                                (0, z.Eu)().then(() => {
                                    const e = ((e) => {
                                        const t = e.current;
                                        return t ? window.getComputedStyle(t).getPropertyValue('line-height') : '';
                                    })(d);
                                    if (e) {
                                        const n = Number(e.split('rem')[0]),
                                            a = d.current;
                                        if (a && isFinite(n)) {
                                            const e = r.O.view.remToPx(t * n);
                                            _({ height: e, width: a.getBoundingClientRect().width });
                                        }
                                    }
                                });
                            }, [t]);
                        (0, i.useEffect)(() => {
                            if (e.length) return m.current.shortened && ((m.current.shortened = !1), o(e)), ee(p);
                        }, [e, n, p]),
                            (0, i.useEffect)(() => {
                                if (c.height && !m.current.shortened) {
                                    const e = ((e, t) => {
                                        const n = e.current;
                                        if (n) {
                                            const e = n.getBoundingClientRect(),
                                                a = e.top + t,
                                                s = Array.from(n.children);
                                            if (s.length) {
                                                const t = ((e, t) => {
                                                    const n = e.length - 1;
                                                    if (!ri(e[n], t)) return -1;
                                                    let a = 0,
                                                        s = n - 1,
                                                        i = !1;
                                                    for (; s - a > 1; ) {
                                                        const n = a + Math.floor(0.5 * (s - a + 1));
                                                        (i = ri(e[n], t)), i ? (s = n) : (a = n);
                                                    }
                                                    return i || ri(e[s], t) ? a : s;
                                                })(s, a);
                                                if (t > 0) {
                                                    const n = s[t].getBoundingClientRect();
                                                    return e.right - n.right < 16 ? t : t + 1;
                                                }
                                            }
                                        }
                                        return -1;
                                    })(d, c.height);
                                    if (-1 !== e) {
                                        const t = s.slice(0, e);
                                        t.push(u().createElement('span', { key: e }, '...')),
                                            o(t),
                                            (m.current.shortened = !0);
                                    }
                                }
                            }, [s, c, n]);
                        const b = (0, i.useMemo)(() => (c.height ? { maxHeight: `${c.height}rem` } : {}), [c.height]);
                        return u().createElement(
                            'div',
                            {
                                ref: d,
                                className: C()('ShortenedText_base_fe', c.height && 'ShortenedText_base__shown_af'),
                                style: b,
                            },
                            s,
                        );
                    },
                    gi = 'FormatColorTagText_base_10',
                    Ei = ({
                        parentId: e,
                        text: t = '',
                        mediaSize: n,
                        classMix: a,
                        classColorMix: s,
                        linesShown: o,
                        withOffset: r = !0,
                    }) => {
                        const l = tt(t)
                                .split(/({colorTagOpen}.*?{colorTagClose})/g)
                                .map((e, t) =>
                                    -1 !== e.search(/({colorTagOpen}.*?{colorTagClose})/g)
                                        ? u().createElement(
                                              'span',
                                              { key: t, className: C()(gi, s) },
                                              e.replace(/{colorTagOpen}(.*?){colorTagClose}/g, '$1 '),
                                          )
                                        : e &&
                                          u().createElement(
                                              'span',
                                              { key: t, className: 'FormatColorTagText_text_85' },
                                              u().createElement(bi, { mediaSize: n, blocks: pi(e), linesCount: o }),
                                          ),
                                ),
                            c = (0, i.useMemo)(
                                () =>
                                    t
                                        .split(/({colorTagOpen}.*?{colorTagClose})/g)
                                        .flatMap((e) =>
                                            -1 !== e.search(/({colorTagOpen}.*?{colorTagClose})/g) ? e : e.split(' '),
                                        )
                                        .filter((e) => Boolean(e))
                                        .map((e, t) =>
                                            -1 !== e.search(/({colorTagOpen}.*?{colorTagClose})/g)
                                                ? u().createElement(
                                                      'span',
                                                      { key: t, className: C()(gi, s) },
                                                      e.replace(/{colorTagOpen}(.*?){colorTagClose}/g, '$1 '),
                                                  )
                                                : u().createElement('span', { key: t }, `${e} `),
                                        ),
                                [s, t],
                            );
                        return u().createElement(
                            'div',
                            { id: `${e}-details`, className: C()(gi, a) },
                            r ? l : u().createElement(bi, { mediaSize: n, blocks: c, linesCount: o }),
                        );
                    },
                    hi = R.strings.tank_setup.tooltips.action,
                    fi = ['cancel', 'undo'],
                    Ai = (e, t) => (2 === t ? `${e}_last_modernized` : `${e}_modernized`);
                var vi;
                !(function (e) {
                    (e.Hidden = 'hidden'), (e.FadeOut = 'fadeOut'), (e.Visible = 'visible'), (e.FadeIn = 'fadeIn');
                })(vi || (vi = {}));
                const Ci = ({
                        parentId: e,
                        actionType: t,
                        imageSource: n = '',
                        show: a = !1,
                        disabled: s = !1,
                        disabledTooltipText: o,
                        tooltipBodyPath: r,
                        buttonType: l = qn.primary,
                        isModernized: c,
                        isFreeToDemount: _,
                        level: d,
                        onClick: m,
                    }) => {
                        const p = (0, i.useRef)(null),
                            b = (0, i.useRef)(vi.Hidden),
                            g = (0, i.useRef)(!1),
                            E = (0, i.useState)(!a),
                            h = E[0],
                            f = E[1],
                            A = (0, i.useState)(!1),
                            v = A[0],
                            D = A[1],
                            F = (0, i.useState)(),
                            S = F[0],
                            B = F[1],
                            y = (0, i.useCallback)(() => {
                                const e = b.current;
                                e === vi.FadeIn
                                    ? ((b.current = vi.Hidden), f(!0))
                                    : e === vi.FadeOut && (b.current = vi.Visible);
                            }, []);
                        (0, i.useEffect)(() => {
                            const e = p.current;
                            if (e)
                                return (
                                    e.addEventListener('animationend', y),
                                    () => {
                                        e.removeEventListener('animationend', y);
                                    }
                                );
                        }, [y]),
                            (0, i.useEffect)(() => {
                                a !== g.current &&
                                    (a ? ((b.current = vi.FadeOut), f(!1)) : (b.current = vi.FadeIn), (g.current = a));
                            }, [a]),
                            (0, i.useEffect)(() => {
                                if (v) {
                                    const e = setTimeout(() => D(!1), 200);
                                    return () => clearTimeout(e);
                                }
                            }, [v]),
                            (0, i.useEffect)(() => () => S && clearTimeout(S), [S]);
                        const w = (0, i.useCallback)(() => {
                                v || (D(!0), b.current === vi.Visible && B(setTimeout(() => m(t), 200)));
                            }, [t, m, v]),
                            x = c ? Ai(t, d) : t,
                            T = (0, i.useMemo)(() => {
                                if (s) return { body: o, isEnabled: Boolean(o) };
                                const e = ((e, t, n, a) => (n ? 'demount_plus' : a ? Ai(e, t) : e))(t, d, _, c);
                                return {
                                    header: hi.title.$dyn(e),
                                    body: fi.includes(e) ? void 0 : hi.description.$dyn(r || e),
                                };
                            }, [t, s, o, _, c, d, r]),
                            k = (0, i.useMemo)(
                                () => ({
                                    backgroundImage: `url(${n || R.images.gui.maps.icons.tanksetup.actions.$dyn(x)})`,
                                }),
                                [x, n],
                            );
                        return u().createElement(
                            'div',
                            {
                                id: e,
                                ref: p,
                                className: C()(
                                    'Action_base_bf',
                                    a ? 'Action_base__shown_9f' : 'Action_base__hidden_4b',
                                    h && 'Action_base__cut_26',
                                ),
                            },
                            u().createElement(
                                K,
                                T,
                                u().createElement(
                                    'div',
                                    { className: 'Action_action_b5' },
                                    u().createElement(
                                        Kn,
                                        { onClick: w, type: l, mixClass: 'Action_button_74', disabled: s },
                                        u().createElement('div', { className: 'Action_image_e9', style: k }),
                                    ),
                                ),
                            ),
                        );
                    },
                    Di = {
                        base: 'Actions_base_ea',
                        base__hidden: 'Actions_base__hidden_65',
                        base__shown: 'Actions_base__shown_9b',
                    },
                    Fi = (0, i.memo)(({ parentId: e, availableActions: t, onActionClick: n, isBuyMoreDisabled: a }) =>
                        u().createElement(
                            'div',
                            { className: C()(Di.base, Di['base__' + (t.length ? 'shown' : 'hidden')]) },
                            u().createElement(Ci, {
                                parentId: `${e}-${yn}`,
                                actionType: yn,
                                onClick: n,
                                show: t.includes(yn),
                                disabled: a,
                                disabledTooltipText: R.strings.tank_setup.dealPanel.tooltip.notEnough(),
                            }),
                            u().createElement(Ci, {
                                parentId: `${e}-${An}`,
                                actionType: An,
                                onClick: n,
                                show: t.includes(An),
                            }),
                            u().createElement(Ci, {
                                parentId: `${e}-${fn}`,
                                actionType: fn,
                                onClick: n,
                                show: t.includes(fn),
                            }),
                        ),
                    ),
                    Si = [
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
                        'onShow',
                        'onHide',
                    ];
                function Bi(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const n = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                n.number = t;
                                break;
                            case 'boolean':
                                n.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                n.string = t.toString();
                        }
                        return n;
                    });
                }
                const yi = (e, t, n = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: z.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: a,
                                },
                                n,
                            ),
                        );
                    },
                    wi = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            a = e.args,
                            s = e.onMouseEnter,
                            u = e.onMouseLeave,
                            o = e.onMouseDown,
                            r = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            _ = e.ignoreMouseClick,
                            d = void 0 !== _ && _,
                            m = e.decoratorId,
                            p = void 0 === m ? 0 : m,
                            b = e.isEnabled,
                            g = void 0 === b || b,
                            E = e.onShow,
                            h = e.onHide,
                            f = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, Si);
                        const A = (0, i.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, i.useMemo)(() => H(), []).resId,
                            C = (0, i.useCallback)(() => {
                                (A.current.isVisible && A.current.timeoutId) ||
                                    (yi(n, p, { isMouseEvent: !0, on: !0, arguments: Bi(a) }, v),
                                    E && E(),
                                    (A.current.isVisible = !0));
                            }, [n, p, a, v, E]),
                            D = (0, i.useCallback)(() => {
                                if (A.current.isVisible || A.current.timeoutId) {
                                    const e = A.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (A.current.timeoutId = 0)),
                                        yi(n, p, { on: !1 }, v),
                                        A.current.isVisible && h && h(),
                                        (A.current.isVisible = !1);
                                }
                            }, [n, p, v, h]),
                            F = (0, i.useCallback)((e) => {
                                A.current.isVisible &&
                                    ((A.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (A.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(A.current.prevTarget) && D();
                                    }, 200)));
                            }, []);
                        return (
                            (0, i.useEffect)(() => {
                                const e = A.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', F, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', F, { capture: !0 }),
                                            e && window.clearTimeout(e);
                                    }
                                );
                            }, []),
                            (0, i.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', D),
                                    () => {
                                        window.removeEventListener('mouseleave', D), D();
                                    }
                                ),
                                [D],
                            ),
                            g
                                ? (0, i.cloneElement)(
                                      t,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((S = t.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((A.current.timeoutId = window.setTimeout(C, c ? 100 : 400)),
                                                          s && s(e),
                                                          S && S(e));
                                                  }),
                                              onMouseLeave: ((e) => (t) => {
                                                  D(), u && u(t), e && e(t);
                                              })(t.props.onMouseLeave),
                                              onClick: ((e) => (t) => {
                                                  !d && D(), r && r(t), e && e(t);
                                              })(t.props.onClick),
                                              onMouseDown: ((e) => (t) => {
                                                  !d && D(), o && o(t), e && e(t);
                                              })(t.props.onMouseDown),
                                          },
                                          f,
                                      ),
                                  )
                                : t
                        );
                        var S;
                    },
                    xi = ['children'];
                function Ti() {
                    return (
                        (Ti = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        Ti.apply(null, arguments)
                    );
                }
                const ki = (e) => {
                        let t = e.children,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, xi);
                        return u().createElement(
                            wi,
                            Ti(
                                {
                                    contentId:
                                        R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                            'resId',
                                        ),
                                    ignoreShowDelay: !0,
                                },
                                n,
                            ),
                            t,
                        );
                    },
                    Ii = {
                        base: 'BaseCard_base_17',
                        content: 'BaseCard_content_42',
                        content__large: 'BaseCard_content__large_be',
                        content__huge: 'BaseCard_content__huge_f3',
                        content__installed: 'BaseCard_content__installed_1b',
                        content__current: 'BaseCard_content__current_89',
                        content__nonclickable: 'BaseCard_content__nonclickable_75',
                        content__disabled: 'BaseCard_content__disabled_eb',
                        image: 'BaseCard_image_53',
                        types: 'BaseCard_types_09',
                        highlight: 'BaseCard_highlight_73',
                        overlay: 'BaseCard_overlay_ba',
                        highlight__battleBooster: 'BaseCard_highlight__battleBooster_49',
                        overlay__battleBooster: 'BaseCard_overlay__battleBooster_85',
                        overlay__battleBoosterReplace: 'BaseCard_overlay__battleBoosterReplace_53',
                        overlay__equipmentPlus: 'BaseCard_overlay__equipmentPlus_62',
                        overlay__builtInEquipment: 'BaseCard_overlay__builtInEquipment_68',
                        overlay__equipmentTrophyBasic: 'BaseCard_overlay__equipmentTrophyBasic_ae',
                        overlay__equipmentTrophyUpgraded: 'BaseCard_overlay__equipmentTrophyUpgraded_1b',
                        overlay__equipmentModernized: 'BaseCard_overlay__equipmentModernized_97',
                        specialization: 'BaseCard_specialization_62',
                        name: 'BaseCard_name_c3',
                        details: 'BaseCard_details_fc',
                        options: 'BaseCard_options_15',
                        actions: 'BaseCard_actions_95',
                        hover: 'BaseCard_hover_cf',
                        disabled: 'BaseCard_disabled_c8',
                        locked: 'BaseCard_locked_13',
                        category: 'BaseCard_category_5e',
                        category__tiny: 'BaseCard_category__tiny_03',
                        category__small: 'BaseCard_category__small_96',
                        category__medium: 'BaseCard_category__medium_11',
                        category__large: 'BaseCard_category__large_c1',
                        category__huge: 'BaseCard_category__huge_71',
                    },
                    Oi = ({ className: e }) =>
                        u().createElement(
                            'div',
                            { className: C()('DisabledAbilities_base_1d', e) },
                            u().createElement('div', { className: 'DisabledAbilities_glow_75' }),
                            u().createElement('div', { className: 'DisabledAbilities_line_54' }),
                        );
                let Ri;
                !(function (e) {
                    (e.SimilarDeviceAlreadyInstalled = 'similar_device_already_installed'),
                        (e.TooHeavy = 'too_heavy'),
                        (e.UselessBattleBooster = 'useless_battle_booster'),
                        (e.UselessCrewSkillBattleBooster = 'useless_crew_skill_battle_booster');
                })(Ri || (Ri = {}));
                const Ni = (e) => Object.values(Ri).includes(e),
                    Li = ({ parentId: e, reason: t, isCritical: n }) => {
                        const a = (0, i.useMemo)(() => ({ reason: t, isCritical: n }), [t, n]);
                        return u().createElement(
                            'div',
                            { id: e, className: 'Warning_base_4c' },
                            u().createElement('div', { className: 'Warning_glow_79' }),
                            u().createElement('div', { className: 'Warning_line_df' }),
                            u().createElement(
                                U,
                                {
                                    contentId: R.views.lobby.tanksetup.tooltips.WarningTooltipView('resId'),
                                    args: a,
                                    isEnabled: Ni(t),
                                },
                                u().createElement('div', { className: 'Warning_icon_24' }),
                            ),
                        );
                    },
                    Mi = ({
                        parentId: e,
                        name: t,
                        tooltipArgs: n,
                        contextMenuArgs: a,
                        imageSource: s,
                        overlayType: o,
                        highlightType: r,
                        isModernized: l,
                        level: c,
                        isDisabled: _,
                        isCurrent: d,
                        isActive: m,
                        isLocked: p,
                        isAbilitiesCard: b = !1,
                        isClickable: g = !0,
                        details: E,
                        options: h,
                        actions: f,
                        specializations: A,
                        extraImages: v,
                        onSlotClick: D,
                        shouldHandleMouseOver: F,
                        category: S,
                        onTooltipShow: B,
                        onTooltipHide: y,
                        lockReason: w,
                    }) => {
                        const x = ge(),
                            T = (0, i.useState)({ isBaseHovered: !1, isActionsHovered: !1 }),
                            k = T[0],
                            I = T[1],
                            O = (0, i.useState)(!1),
                            N = O[0],
                            L = O[1],
                            M = (0, i.useState)(!1),
                            P = M[0],
                            $ = M[1],
                            H = (0, i.useCallback)(() => {
                                !k.isActionsHovered && pe.playHighlight(),
                                    I({ isBaseHovered: !0, isActionsHovered: !1 }),
                                    F && L(!0);
                            }, [k.isActionsHovered, F]),
                            z = (0, i.useCallback)(() => {
                                F && L(!1);
                            }, [F]),
                            W = (0, i.useCallback)(() => {
                                I({ isBaseHovered: !1, isActionsHovered: !0 });
                            }, []),
                            j = (0, i.useCallback)(() => {
                                I({ isBaseHovered: !1, isActionsHovered: !1 });
                            }, []),
                            G = g && (!_ || b),
                            U = (0, i.useCallback)(() => {
                                G && D && (pe.playClick(), D());
                            }, [D, G]),
                            q = k.isBaseHovered || k.isActionsHovered,
                            V = (0, i.useMemo)(() => {
                                let e = u().createElement(
                                    'div',
                                    {
                                        onMouseEnter: H,
                                        onMouseLeave: j,
                                        className: Ii.hover,
                                        onMouseDown: (e) => {
                                            0 === e.nativeEvent.button && ($(!0), U());
                                        },
                                        onMouseUp: (e) => {
                                            0 === e.nativeEvent.button && $(!1);
                                        },
                                    },
                                    _ && b && u().createElement(Oi, { className: Ii.locked }),
                                );
                                return (
                                    n && (e = u().createElement(ki, { args: n, onShow: B, onHide: y }, e)),
                                    a && (e = u().createElement(gn, { args: a }, e)),
                                    e
                                );
                            }, [_, b, H, j, U, n, a, B, y, P]),
                            X = (0, i.useMemo)(() => ({ backgroundImage: `url(${s})` }), [s]),
                            K =
                                x === be.Large || x === be.Huge
                                    ? R.images.gui.maps.shop.artefacts.c_180x135
                                    : R.images.gui.maps.icons.quests.bonuses.small,
                            Y = (0, i.useMemo)(() => {
                                let e;
                                return (
                                    o && (e = l ? K.$dyn(`${o}_${c}_overlay`) : K.$dyn(`${o}_overlay`)),
                                    e && { backgroundImage: `url(${e})` }
                                );
                            }, [K, o, l, c]),
                            Z = (0, i.useMemo)(() => {
                                let e;
                                return r && (e = K.$dyn(`${r}_highlight`)), e && { backgroundImage: `url(${e})` };
                            }, [K, r]),
                            J = (0, i.useMemo)(() => {
                                const e = (x === be.Large || x === be.Huge ? be.Large : be.Medium) + '_' + S,
                                    t = R.images.gui.maps.icons.specialization.$dyn(e);
                                return t && { backgroundImage: `url(${t})` };
                            }, [S, x]);
                        return u().createElement(
                            'div',
                            { className: Ii.base },
                            u().createElement(
                                'div',
                                {
                                    id: e,
                                    className: C()(
                                        Ii.content,
                                        Ii[`content__${x}`],
                                        q && g && !_ && Ii.content__hovered,
                                        !q && Ii.content__out,
                                        m && Ii.content__installed,
                                        d && Ii.content__current,
                                        _ && Ii.content__disabled,
                                        !G && Ii.content__nonclickable,
                                    ),
                                    onMouseLeave: z,
                                },
                                Z &&
                                    u().createElement(
                                        'div',
                                        { className: Ii.types },
                                        u().createElement('div', {
                                            className: C()(Ii.highlight, Ii[`highlight__${r}`]),
                                            style: Z,
                                        }),
                                    ),
                                u().createElement('div', { className: Ii.image, style: X }, v),
                                _ && u().createElement('div', { className: Ii.disabled }),
                                J &&
                                    u().createElement('span', {
                                        className: C()(Ii.category, Ii[`category__${x}`]),
                                        style: J,
                                    }),
                                Y &&
                                    u().createElement(
                                        'div',
                                        { className: Ii.types },
                                        u().createElement('div', {
                                            className: C()(Ii.overlay, Ii[`overlay__${o}`]),
                                            style: Y,
                                        }),
                                    ),
                                A && u().createElement('div', { className: Ii.specialization }, A),
                                u().createElement(
                                    'div',
                                    { className: C()(Ii.name, _ && Ii.name__disabled) },
                                    u().createElement(bi, {
                                        key: t,
                                        mediaSize: x,
                                        linesCount: 3,
                                        blocks: pi(systemLocale.toUpperCase(t)),
                                    }),
                                ),
                                E && u().createElement('div', { className: Ii.details }, E),
                                u().createElement('div', { className: C()(Ii.options, _ && Ii.options__disabled) }, h),
                                V,
                                u().createElement(
                                    'div',
                                    { onMouseEnter: W, onMouseLeave: j, className: Ii.actions },
                                    F && f
                                        ? (0, i.cloneElement)(f, Object.assign({}, f.props, { isMouseOverCard: N }))
                                        : f,
                                ),
                            ),
                            p &&
                                u().createElement(
                                    'div',
                                    { className: Ii.locked },
                                    u().createElement(Li, { reason: w, isCritical: _, parentId: e }),
                                ),
                        );
                    },
                    Pi = () => u().createElement('div', { className: 'Availability_base_51' }),
                    $i = {
                        base: 'Options_base_b3',
                        base__visually: 'Options_base__visually_03',
                        base__hidden: 'Options_base__hidden_82',
                        'options-hide': 'Options_options-hide_10',
                        base__shown: 'Options_base__shown_84',
                        'options-show': 'Options_options-show_5a',
                    },
                    Hi = u().memo(
                        ({ itemsInStorage: e, price: t, isMounted: n, possibleZeroCount: a, show: s = !0 }) => {
                            let i = null;
                            return (
                                (i = n
                                    ? u().createElement(Pi, null)
                                    : e || (a && 0 === e)
                                      ? u().createElement(es, { itemsInStorage: e })
                                      : t && u().createElement(Ds, t)),
                                u().createElement(
                                    'div',
                                    {
                                        className: C()(
                                            $i.base,
                                            $i['base__' + (s ? 'shown' : 'hidden')],
                                            (n || e || (a && 0 === e)) && $i.base__visually,
                                        ),
                                    },
                                    i,
                                )
                            );
                        },
                    ),
                    zi = (0, te.Pi)(({ isCurrent: e, index: t }) => {
                        const n = ge(),
                            a = n === be.Large || n === be.Huge,
                            s = Qa(),
                            o = s.model,
                            r = s.controls,
                            l = o.computes.boosters.booster(t),
                            c = l.name,
                            _ = l.installedSlotId,
                            d = l.itemInstalledSetupIdx,
                            m = l.itemInstalledSetupSlotIdx,
                            p = l.isMountedMoreThanOne,
                            b = l.imageName,
                            g = l.itemsInStorage,
                            E = l.oldStylePrice,
                            h = l.intCD,
                            f = l.isDisabled,
                            A = l.overlayType,
                            v = l.isLocked,
                            C = l.isMounted,
                            D = l.isMountedInOtherSetup,
                            F = l.description,
                            S = l.isBuyMoreVisible,
                            B = l.isBuyMoreDisabled,
                            y = l.highlightType,
                            w = l.lockReason,
                            x = _ > -1,
                            T = `${h}-booster`,
                            k = (0, i.useMemo)(() => {
                                const e = [];
                                return (
                                    !f && x && (S && e.push(yn), (!Boolean(g) && !C) || D ? e.push(fn) : e.push(An)), e
                                );
                            }, [f, x, S, g, C, D]),
                            I = (0, i.useCallback)(
                                (e) => (
                                    r.boosters.actSlot({ actionType: e, intCD: h, installedSlotId: _ }),
                                    e === yn ? 1e3 : 120
                                ),
                                [r, h, _],
                            ),
                            O = tn(I),
                            N = (0, i.useCallback)(() => {
                                k.includes(fn) ? O(fn) : k.includes(An) ? O(An) : O(hn);
                            }, [k, O]),
                            L = (0, i.useMemo)(() => {
                                const e = { intCD: h, slotType: ht, fieldType: 0 };
                                return [
                                    e,
                                    Object.assign({}, e, {
                                        installedSlotId: _,
                                        itemInstalledSetupIdx: d,
                                        itemInstalledSetupSlotIdx: m,
                                        isMountedMoreThanOne: p,
                                        isMounted: C,
                                        isDisabled: f,
                                    }),
                                ];
                            }, [h, _, d, m, C, p, f]),
                            M = L[0],
                            P = L[1],
                            $ = (0, i.useMemo)(() => {
                                const e = a
                                    ? R.images.gui.maps.shop.artefacts.c_180x135.$dyn(b)
                                    : R.images.gui.maps.icons.quests.bonuses.big.$dyn(b);
                                return String(e);
                            }, [a, b]);
                        return u().createElement(Mi, {
                            parentId: T,
                            name: c,
                            tooltipArgs: M,
                            contextMenuArgs: P,
                            imageSource: $,
                            isClickable: !0,
                            isCurrent: e,
                            isActive: x,
                            isDisabled: f,
                            isLocked: v,
                            options: u().createElement(Hi, {
                                isMounted: C || D,
                                itemsInStorage: g,
                                show: !k.length,
                                price: E,
                            }),
                            actions: u().createElement(Fi, {
                                parentId: T,
                                availableActions: k,
                                onActionClick: O,
                                isBuyMoreDisabled: B,
                            }),
                            details: u().createElement(Ei, {
                                key: F,
                                parentId: T,
                                classMix: 'Booster_base_17',
                                mediaSize: n,
                                classColorMix: 'Booster_unit_9b',
                                linesShown: a ? 4 : 3,
                                text: F,
                            }),
                            overlayType: A,
                            highlightType: y,
                            onSlotClick: N,
                            lockReason: w,
                        });
                    });
                var Wi = n(8045);
                const ji = {
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
                let Gi, Ui, qi;
                !(function (e) {
                    (e[(e.Word = 0)] = 'Word'),
                        (e[(e.LineBreak = 1)] = 'LineBreak'),
                        (e[(e.NewLine = 2)] = 'NewLine'),
                        (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (e[(e.Binding = 5)] = 'Binding');
                })(Gi || (Gi = {})),
                    (function (e) {
                        (e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end');
                    })(Ui || (Ui = {})),
                    (function (e) {
                        (e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n');
                    })(qi || (qi = {}));
                const Vi = { [qi.NBSP]: Gi.NoBreakSymbol, [qi.ZWNBSP]: Gi.NoBreakSymbol, [qi.NEW_LINE]: Gi.LineBreak },
                    Xi = ['zh_cn', 'zh_sg', 'zh_tw', 'ja', 'th'].includes(
                        R.strings.settings.LANGUAGE_CODE().toLowerCase(),
                    ),
                    Ki = {
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
                    Yi = 'renderers_word_f3',
                    Zi = (e) => ({ color: `#${e}` }),
                    Ji = ({ elementList: e, textBlock: t, key: n }) => {
                        const a = t.colorTag;
                        return a
                            ? Ki[a]
                                ? u().createElement(
                                      'span',
                                      { key: n, 'data-block-type': t.blockType, className: C()(Yi, Ki[a]) },
                                      e,
                                  )
                                : u().createElement(
                                      'span',
                                      { key: n, 'data-block-type': t.blockType, className: Yi, style: Zi(a) },
                                      e,
                                  )
                            : u().createElement('span', { key: n, 'data-block-type': t.blockType, className: Yi }, e);
                    },
                    Qi = {
                        [Gi.Word]: Ji,
                        [Gi.NoBreakSymbol]: Ji,
                        [Gi.Binding]: ({ elementList: e, textBlock: t, key: n }) =>
                            u().createElement(
                                'span',
                                { key: n, 'data-block-type': t.blockType },
                                e.map((e) => u().createElement(u().Fragment, { key: n }, e)),
                            ),
                        [Gi.LineBreak]: ({ key: e }) =>
                            u().createElement('span', {
                                key: e,
                                'data-block-type': Gi.LineBreak,
                                className: 'renderers_lineBreak_b5',
                            }),
                        [Gi.NewLine]: ({ elementList: e, key: t }) =>
                            u().createElement(
                                'span',
                                { key: t, 'data-block-type': Gi.NewLine, className: 'renderers_newLine_bd' },
                                e,
                            ),
                        [Gi.NoBreakWrapper]: ({ elementList: e, key: t }) =>
                            u().createElement(
                                'span',
                                {
                                    key: t,
                                    'data-block-type': Gi.NoBreakWrapper,
                                    className: 'renderers_noBreakWrapper_10',
                                },
                                e,
                            ),
                    },
                    eu = (e, t, n) => {
                        const a = [];
                        return (
                            e.childList.forEach((s, i) => {
                                const u = `${n}_${i}`;
                                if (((e) => void 0 !== e.childList)(s)) {
                                    const e = s,
                                        t = e.blockType,
                                        n = eu(e, Qi[t], u);
                                    a.push(...n);
                                } else a.push(t({ elementList: [s], textBlock: e, key: u }));
                            }),
                            a
                        );
                    },
                    tu = (e, t, n, a) => {
                        let s = t.exec(e),
                            i = 0;
                        for (; s; ) i !== s.index && n(e.slice(i, s.index)), a(s), (i = t.lastIndex), (s = t.exec(e));
                        i !== e.length && n(e.slice(i));
                    },
                    nu = new RegExp('[฀-๿][ัำ-ฺ็-๎]*', 'gu'),
                    au = Xi
                        ? (e) => {
                              const t = [];
                              return (
                                  tu(
                                      e,
                                      /[^a-zA-Z0-9]+/g,
                                      (e) => {
                                          t.push(e);
                                      },
                                      (e) => {
                                          t.push(
                                              ...((e) => {
                                                  const t = [];
                                                  return (
                                                      tu(
                                                          e,
                                                          /\S\s+/g,
                                                          (e) => {
                                                              var n;
                                                              'th' === R.strings.settings.LANGUAGE_CODE().toLowerCase()
                                                                  ? t.push(...((n = e), n.match(nu) || []))
                                                                  : t.push(...e.split(''));
                                                          },
                                                          (e) => {
                                                              t.push(e[0]);
                                                          },
                                                      ),
                                                      t
                                                  );
                                              })(e[0]),
                                          );
                                      },
                                  ),
                                  t
                              );
                          }
                        : (e, t) => {
                              const n = /[\s\u002d]/g;
                              let a = n.exec(e);
                              if (!a) return [e];
                              const s = [];
                              let i = 0;
                              for (; a; ) {
                                  const u = t.justifyContent === Ui.FlexEnd ? a.index : n.lastIndex;
                                  s.push(e.slice(i, u)), (i = u), (a = n.exec(e));
                              }
                              return i !== e.length && s.push(e.slice(i)), s;
                          },
                    su = (e, t = '', n) => {
                        const a = [];
                        return (
                            tu(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    a.push({ blockType: Gi.Word, colorTag: t, childList: au(e, n) });
                                },
                                (e) => {
                                    const n = e[0],
                                        s = Vi[n.charAt(0)];
                                    s === Gi.LineBreak
                                        ? a.push(
                                              ...((e) => {
                                                  const t = [
                                                      {
                                                          blockType: Gi.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let n = 0; n < e.length - 1; n++)
                                                      t.push({
                                                          blockType: Gi.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return t;
                                              })(n),
                                          )
                                        : a.push({ blockType: s, colorTag: t, childList: [n] });
                                },
                            ),
                            a
                        );
                    },
                    iu = (e, t, n = '', a) => {
                        const s = [];
                        return (
                            tu(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    s.push(...su(e, n, a));
                                },
                                (e) => {
                                    const i = e[1],
                                        u = void 0 === t[i] ? e[0] : t[i];
                                    'string' == typeof u || 'number' == typeof u
                                        ? s.push(...su(String(u), n, a))
                                        : s.push({ blockType: Gi.Binding, colorTag: n, childList: [u] });
                                },
                            ),
                            s
                        );
                    },
                    uu = (e, t) => {
                        if (!e) return [t];
                        const n = [],
                            a = Object.assign({}, t, { childList: t.childList.splice(0, 1) });
                        if (e.blockType === Gi.NoBreakWrapper) e.childList.push(a), n.push(e);
                        else {
                            const t = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            e.childList.length > 0 && n.push(e),
                                n.push({ blockType: Gi.NoBreakWrapper, colorTag: '', childList: [t, a] });
                        }
                        return t.childList.length > 0 && n.push(t), n;
                    },
                    ou = (e, t = {}, n) => {
                        if (!e) return [];
                        const a = ((e) => {
                            const t = [];
                            let n = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === Gi.NoBreakSymbol
                                        ? ((n = !0), t.push(...uu(t.pop(), e)))
                                        : (n ? t.push(...uu(t.pop(), e)) : t.push(e), (n = !1));
                                }),
                                t
                            );
                        })(
                            ((e, t, n) => {
                                const a = [];
                                return (
                                    tu(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})(\s*)/g,
                                        (e) => {
                                            a.push(...iu(e, t, '', n));
                                        },
                                        (e) => {
                                            a.push(...iu(e[2] + e[3], t, e[1], n));
                                        },
                                    ),
                                    a
                                );
                            })(tt(e).replace(/&zwnbsp;/g, '\ufeff'), t, n),
                        );
                        return ((e) => {
                            const t = [];
                            return (
                                e.forEach((e, n) => {
                                    t.push(
                                        ...((e, t) => {
                                            const n = [],
                                                a = e.blockType,
                                                s = Qi[a],
                                                i = eu(e, s, t);
                                            return (
                                                a === Gi.NoBreakWrapper
                                                    ? n.push(s({ elementList: i, textBlock: e, key: `${t}` }))
                                                    : n.push(...i),
                                                n
                                            );
                                        })(e, n),
                                    );
                                }),
                                t
                            );
                        })(a);
                    },
                    ru = (e, t) => !e || e.offsetTop + e.offsetHeight > t,
                    lu = (e, t) => e.offsetLeft + e.offsetWidth - t,
                    cu = (e, t, n) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > t) return [!1, 0];
                        const a = lu(e, t),
                            s = e.textContent.length,
                            i = e.offsetWidth / s,
                            u = Math.ceil(a / i);
                        if (a > 0) {
                            const a = Math.floor((t - e.offsetLeft) / i);
                            return a >= n ? [!0, n + u] : [!1, a];
                        }
                        const o = Math.max(n + u, 0);
                        return s < o ? [!1, 0] : [!0, o];
                    },
                    _u = (e, t, n, a, s, i) => {
                        let o = -1,
                            r = null;
                        for (let l = n; l >= 0; l--) {
                            const n = e[l],
                                c = Number(e[l].getAttribute('data-block-type'));
                            if (c === Gi.LineBreak || c === Gi.NewLine || c === Gi.Binding) continue;
                            const _ = n.textContent || '';
                            if (!(n.childElementCount > 1)) {
                                const e = cu(n, a, s),
                                    c = e[0],
                                    d = e[1];
                                if (!c) {
                                    d > 0 && (s -= d);
                                    continue;
                                }
                                const m = _.slice(0, _.length - d) + i,
                                    p = t[l];
                                (r = u().cloneElement(p, p.props, m)), (o = l);
                                break;
                            }
                            {
                                const e = n.children,
                                    c = t[l],
                                    d = c.props.children,
                                    m = _u(e, d, e.length - 1, a, s, i),
                                    p = m[0],
                                    b = m[1];
                                if (!(p < 0)) {
                                    const e = d.slice(0, p);
                                    (r = u().cloneElement(c, c.props, e, b)), (o = l);
                                    break;
                                }
                                s -= _.length;
                            }
                        }
                        return [o, r];
                    },
                    du = u().memo(
                        ({
                            text: e,
                            classMix: t,
                            onSizeChanged: n,
                            binding: a,
                            isTooltipEnable: s = !1,
                            isTruncationAvailable: o = !1,
                            customTooltipArgs: r,
                            targetId: l,
                            justifyContent: c = Ui.FlexStart,
                            alignContent: _ = Ui.FlexStart,
                            truncateIdentify: d = '...',
                        }) => {
                            const m = (0, i.useRef)(null),
                                p = (0, i.useRef)({ height: 0, width: 0 }),
                                b = (0, i.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                g = b[0],
                                E = b[1],
                                h = (0, i.useMemo)(() => ou(e, a, { justifyContent: c }), [a, c, e]),
                                f = (0, i.useMemo)(() => {
                                    if (
                                        s &&
                                        g.isTruncated &&
                                        (!a || !Object.values(a).find((e) => 'object' == typeof e))
                                    )
                                        return {
                                            args: Object.assign({ text: e }, r, {
                                                stringifyKwargs: a ? JSON.stringify(a) : '',
                                            }),
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: l,
                                        };
                                }, [a, s, l, e, r, g.isTruncated]),
                                A = (0, i.useCallback)(
                                    (e) => {
                                        (p.current.width = e.contentRect.width),
                                            (p.current.height = e.contentRect.height);
                                        const t = ((e, t, n, a = '...') => {
                                                const s = [...t],
                                                    i = e.current;
                                                if (!i) return [s, !1];
                                                const u = n.height,
                                                    o = n.width,
                                                    r = i.lastElementChild;
                                                if (!ru(r, u) && lu(r, o) <= 0) return [s, !1];
                                                const l = i.children,
                                                    c = ((e, t) => {
                                                        let n = 0,
                                                            a = e.length - 1;
                                                        for (; a - n >= 0; ) {
                                                            const s = n + Math.ceil(0.5 * (a - n));
                                                            ru(e[s], t) ? (a = s - 1) : (n = s + 1);
                                                        }
                                                        return n - 1;
                                                    })(l, u);
                                                if (c < 0) return [s, !1];
                                                const _ = _u(l, s, c, o, a.length, a),
                                                    d = _[0],
                                                    m = _[1];
                                                return m && (s.splice(d, 1, m), s.splice(d + 1)), [s, !0];
                                            })(m, h, p.current, d),
                                            a = t[0],
                                            s = t[1];
                                        E({ elementList: a, isTruncated: s, isTruncateFinished: !0 }), n && n(s);
                                    },
                                    [n, d, h],
                                ),
                                v = (0, i.useMemo)(() => ({ justifyContent: c, alignContent: _ }), [_, c]);
                            return (
                                ((e, t, n = !0) => {
                                    const a = (0, i.useCallback)(
                                        (e) => {
                                            const n = e[0];
                                            t && t(n);
                                        },
                                        [t],
                                    );
                                    (0, i.useEffect)(() => {
                                        if (!e.current || !n) return;
                                        const t = new Wi.Z((e) => a(e));
                                        return (
                                            t.observe(e.current),
                                            () => {
                                                t.disconnect();
                                            }
                                        );
                                    }, [a, n, e]);
                                })(m, A, o),
                                u().createElement(
                                    'div',
                                    {
                                        className: C()(
                                            ji.base,
                                            t,
                                            ji.base__zeroPadding,
                                            o && ji.base__isTruncationAvailable,
                                        ),
                                        style: v,
                                    },
                                    u().createElement('div', { className: ji.unTruncated, ref: m }, h),
                                    u().createElement(
                                        Xe,
                                        {
                                            tooltipArgs: f,
                                            className: C()(
                                                ji.tooltip,
                                                ji[`tooltip__justify-${c}`],
                                                ji[`tooltip__align-${_}`],
                                            ),
                                        },
                                        u().createElement(
                                            'div',
                                            {
                                                className: C()(
                                                    ji.truncated,
                                                    !g.isTruncateFinished && o && ji.truncated__hide,
                                                ),
                                                style: v,
                                            },
                                            g.isTruncateFinished && o ? g.elementList : h,
                                        ),
                                    ),
                                )
                            );
                        },
                    ),
                    mu = {
                        base: 'BaseCard_base_7e',
                        content: 'BaseCard_content_53',
                        content__large: 'BaseCard_content__large_3a',
                        content__huge: 'BaseCard_content__huge_93',
                        content__installed: 'BaseCard_content__installed_0e',
                        content__current: 'BaseCard_content__current_50',
                        content__nonclickable: 'BaseCard_content__nonclickable_3b',
                        content__disabled: 'BaseCard_content__disabled_5a',
                        image: 'BaseCard_image_0d',
                        types: 'BaseCard_types_c0',
                        highlight: 'BaseCard_highlight_54',
                        overlay: 'BaseCard_overlay_88',
                        highlight__battleBooster: 'BaseCard_highlight__battleBooster_d8',
                        overlay__battleBooster: 'BaseCard_overlay__battleBooster_25',
                        overlay__battleBoosterReplace: 'BaseCard_overlay__battleBoosterReplace_60',
                        overlay__equipmentPlus: 'BaseCard_overlay__equipmentPlus_e3',
                        overlay__builtInEquipment: 'BaseCard_overlay__builtInEquipment_fe',
                        overlay__equipmentTrophyBasic: 'BaseCard_overlay__equipmentTrophyBasic_71',
                        overlay__equipmentTrophyUpgraded: 'BaseCard_overlay__equipmentTrophyUpgraded_fe',
                        overlay__equipmentModernized: 'BaseCard_overlay__equipmentModernized_7f',
                        specialization: 'BaseCard_specialization_3e',
                        name: 'BaseCard_name_0a',
                        details: 'BaseCard_details_aa',
                        options: 'BaseCard_options_58',
                        actions: 'BaseCard_actions_0a',
                        hover: 'BaseCard_hover_72',
                        disabled: 'BaseCard_disabled_48',
                        locked: 'BaseCard_locked_24',
                        category: 'BaseCard_category_cb',
                        category__tiny: 'BaseCard_category__tiny_4a',
                        category__small: 'BaseCard_category__small_d7',
                        category__medium: 'BaseCard_category__medium_3d',
                        category__large: 'BaseCard_category__large_d8',
                        category__huge: 'BaseCard_category__huge_cf',
                    },
                    pu = ({
                        parentId: e,
                        name: t,
                        tooltipArgs: n,
                        contextMenuArgs: a,
                        imageSource: s,
                        overlayType: o,
                        highlightType: r,
                        isModernized: l,
                        level: c,
                        isDisabled: _,
                        isCurrent: d,
                        isActive: m,
                        isLocked: p,
                        isAbilitiesCard: b = !1,
                        isClickable: g = !0,
                        details: E,
                        options: h,
                        actions: f,
                        specializations: A,
                        extraImages: v,
                        onSlotClick: D,
                        shouldHandleMouseOver: F,
                        category: S,
                        onTooltipShow: B,
                        onTooltipHide: y,
                        lockReason: w,
                    }) => {
                        const x = ge(),
                            T = (0, i.useState)({ isBaseHovered: !1, isActionsHovered: !1 }),
                            k = T[0],
                            I = T[1],
                            O = (0, i.useState)(!1),
                            N = O[0],
                            L = O[1],
                            M = (0, i.useCallback)(() => {
                                !k.isActionsHovered && pe.playHighlight(),
                                    I({ isBaseHovered: !0, isActionsHovered: !1 }),
                                    F && L(!0);
                            }, [k.isActionsHovered, F]),
                            P = (0, i.useCallback)(() => {
                                F && L(!1);
                            }, [F]),
                            $ = (0, i.useCallback)(() => {
                                I({ isBaseHovered: !1, isActionsHovered: !0 });
                            }, []),
                            H = (0, i.useCallback)(() => {
                                I({ isBaseHovered: !1, isActionsHovered: !1 });
                            }, []),
                            z = g && (!_ || b),
                            W = (0, i.useCallback)(() => {
                                z && D && (pe.playClick(), D());
                            }, [D, z]),
                            j = k.isBaseHovered || k.isActionsHovered,
                            G = (0, i.useMemo)(() => {
                                let e = u().createElement(
                                    'div',
                                    { onMouseEnter: M, onMouseLeave: H, className: mu.hover, onClick: W },
                                    _ && b && u().createElement(Oi, { className: mu.locked }),
                                );
                                return (
                                    n && (e = u().createElement(ki, { args: n, onShow: B, onHide: y }, e)),
                                    a && (e = u().createElement(gn, { args: a }, e)),
                                    e
                                );
                            }, [_, b, M, H, W, n, a, B, y]),
                            U = (0, i.useMemo)(() => ({ backgroundImage: `url(${s})` }), [s]),
                            q =
                                x === be.Large || x === be.Huge
                                    ? R.images.gui.maps.shop.artefacts.c_180x135
                                    : R.images.gui.maps.icons.quests.bonuses.small,
                            V = (0, i.useMemo)(() => {
                                let e;
                                return (
                                    o && (e = l ? q.$dyn(`${o}_${c}_overlay`) : q.$dyn(`${o}_overlay`)),
                                    e && { backgroundImage: `url(${e})` }
                                );
                            }, [q, o, l, c]),
                            X = (0, i.useMemo)(() => {
                                let e;
                                return r && (e = q.$dyn(`${r}_highlight`)), e && { backgroundImage: `url(${e})` };
                            }, [q, r]),
                            K = (0, i.useMemo)(() => {
                                const e = (x === be.Large || x === be.Huge ? be.Large : be.Medium) + '_' + S,
                                    t = R.images.gui.maps.icons.specialization.$dyn(e);
                                return t && { backgroundImage: `url(${t})` };
                            }, [S, x]);
                        return u().createElement(
                            'div',
                            { className: mu.base },
                            u().createElement(
                                'div',
                                {
                                    id: e,
                                    className: C()(
                                        mu.content,
                                        mu[`content__${x}`],
                                        j && g && !_ && mu.content__hovered,
                                        !j && mu.content__out,
                                        m && mu.content__installed,
                                        d && mu.content__current,
                                        _ && mu.content__disabled,
                                        !z && mu.content__nonclickable,
                                    ),
                                    onMouseLeave: P,
                                },
                                X &&
                                    u().createElement(
                                        'div',
                                        { className: mu.types },
                                        u().createElement('div', {
                                            className: C()(mu.highlight, mu[`highlight__${r}`]),
                                            style: X,
                                        }),
                                    ),
                                u().createElement('div', { className: mu.image, style: U }, v),
                                _ && u().createElement('div', { className: mu.disabled }),
                                K &&
                                    u().createElement('span', {
                                        className: C()(mu.category, mu[`category__${x}`]),
                                        style: K,
                                    }),
                                V &&
                                    u().createElement(
                                        'div',
                                        { className: mu.types },
                                        u().createElement('div', {
                                            className: C()(mu.overlay, mu[`overlay__${o}`]),
                                            style: V,
                                        }),
                                    ),
                                A && u().createElement('div', { className: mu.specialization }, A),
                                u().createElement(
                                    'div',
                                    { className: C()(mu.name, _ && mu.name__disabled) },
                                    u().createElement(bi, {
                                        key: t,
                                        mediaSize: x,
                                        linesCount: 3,
                                        blocks: pi(systemLocale.toUpperCase(t)),
                                    }),
                                ),
                                E && u().createElement('div', { className: mu.details }, E),
                                u().createElement('div', { className: C()(mu.options, _ && mu.options__disabled) }, h),
                                G,
                                u().createElement(
                                    'div',
                                    { onMouseEnter: $, onMouseLeave: H, className: mu.actions },
                                    F && f
                                        ? (0, i.cloneElement)(f, Object.assign({}, f.props, { isMouseOverCard: N }))
                                        : f,
                                ),
                            ),
                            p &&
                                u().createElement(
                                    'div',
                                    { className: mu.locked },
                                    u().createElement(Li, { reason: w, isCritical: _, parentId: e }),
                                ),
                        );
                    },
                    bu = (0, te.Pi)(({ isCurrent: e, index: t }) => {
                        const n = Qa(),
                            a = n.model,
                            s = n.controls,
                            o = ge(),
                            r = o === be.Large || o === be.Huge,
                            l = a.computes.consumables.consumable(t),
                            c = l.name,
                            _ = l.installedSlotId,
                            d = l.itemInstalledSetupIdx,
                            m = l.itemInstalledSetupSlotIdx,
                            p = l.isMountedMoreThanOne,
                            b = l.imageName,
                            g = l.itemsInStorage,
                            E = l.oldStylePrice,
                            h = l.intCD,
                            f = l.isDisabled,
                            A = l.overlayType,
                            v = l.isLocked,
                            C = l.isMounted,
                            D = l.isMountedInOtherSetup,
                            F = l.isBuiltIn,
                            S = l.description,
                            B = l.isBuyMoreDisabled,
                            y = l.lockReason,
                            w = _ > -1,
                            x = `${h}-consumable`,
                            T = (0, i.useMemo)(() => {
                                const t = [];
                                return (
                                    !f &&
                                        w &&
                                        (!e && t.push(vn),
                                        F || (t.push(yn), (!Boolean(g) && !C) || D ? t.push(fn) : t.push(An))),
                                    t
                                );
                            }, [f, w, e, F, g, C, D]),
                            k = (0, i.useCallback)(
                                (e) => (
                                    s.consumables.actSlot({ actionType: e, intCD: h, installedSlotId: _ }),
                                    e === yn ? 1e3 : 300
                                ),
                                [s, h, _],
                            ),
                            I = tn(k),
                            O = (0, i.useCallback)(() => {
                                T.includes(vn) ? I(vn) : T.includes(fn) ? I(fn) : T.includes(An) ? I(An) : I(hn);
                            }, [T, I]),
                            N = (0, i.useMemo)(() => {
                                const e = { intCD: h, slotType: 'hw_consumables', fieldType: 0 };
                                return [
                                    e,
                                    Object.assign({}, e, {
                                        installedSlotId: _,
                                        itemInstalledSetupIdx: d,
                                        itemInstalledSetupSlotIdx: m,
                                        isMountedMoreThanOne: p,
                                        isMounted: C,
                                        isDisabled: f,
                                    }),
                                ];
                            }, [h, _, d, m, p, C, f]),
                            L = N[0],
                            M = N[1],
                            P = (0, i.useMemo)(() => {
                                const e = r
                                    ? R.images.gui.maps.shop.artefacts.c_180x135.$dyn(b)
                                    : R.images.gui.maps.icons.quests.bonuses.big.$dyn(b);
                                return String(e);
                            }, [r, b]),
                            $ = (0, i.useMemo)(
                                () =>
                                    u().createElement(du, {
                                        text: S,
                                        isTruncationAvailable: !0,
                                        classMix: 'HWConsumable_base_57',
                                    }),
                                [S],
                            );
                        return u().createElement(pu, {
                            parentId: x,
                            name: c,
                            tooltipArgs: L,
                            contextMenuArgs: M,
                            imageSource: P,
                            isCurrent: e,
                            isActive: w,
                            isDisabled: f,
                            isLocked: v,
                            isClickable: !F,
                            options: u().createElement(Hi, {
                                price: E,
                                isMounted: C || D,
                                itemsInStorage: g,
                                show: !T.length,
                            }),
                            actions: u().createElement(Fi, {
                                parentId: x,
                                availableActions: T,
                                onActionClick: I,
                                isBuyMoreDisabled: B,
                            }),
                            details: $,
                            overlayType: A,
                            onSlotClick: O,
                            lockReason: y,
                        });
                    }),
                    gu = { calcValue: 0, isPositive: !0, valueKey: 'default' },
                    Eu = R.strings.tank_setup.kpi.bonus.valueTypes,
                    hu = R.strings.tank_setup.kpi.bonus.valueTypes.default(),
                    fu = (0, te.Pi)(({ deviceID: e, bonusID: t }) => {
                        const n = Qa().model,
                            a = n.computes.optDevices.device(e).activeSpecsMask,
                            s = n.computes.optDevices.bonusValue(e, t);
                        if (!s) return null;
                        const i = s.valueType,
                            o = s.value,
                            r = s.valueKey,
                            l = Boolean(a),
                            c = 'mul' === i ? 100 * (o - 1) : o,
                            _ = c > 0 ? '+' : '',
                            d = z.Z5.getRealFormat(c, z.Gr.WO_ZERO_DIGITS),
                            m = Eu.$dyn(r),
                            p = `${d}${m ? ` ${m}` : hu}`;
                        return u().createElement(
                            'div',
                            { className: C()('Unit_base_44', l && 'Unit_base__special_2c') },
                            u().createElement(
                                'span',
                                null,
                                u().createElement('span', { className: 'Unit_glow_ef' }),
                                _ + p,
                            ),
                        );
                    }),
                    Au = (0, te.Pi)(({ bonusID: e, deviceID: t }) => {
                        const n = ge(),
                            a = n === be.Large || n === be.Huge ? 4 : 3,
                            s = Qa().model,
                            i = s.computes.optDevices.bonusVisibleLinesCount(t, e, a),
                            o = ((e, t = !1) =>
                                t ||
                                (({ values: e, localeName: t }) => {
                                    const n = e.filter(({ value: { valueKey: e } = {} }) => e === t).pop();
                                    if (!n) return gu;
                                    const a = n.value,
                                        s = a.value,
                                        i = 'mul' === a.valueType ? 100 * (s - 1) : s;
                                    return { calcValue: i, isPositive: i > 0, valueKey: a.valueKey };
                                })(e).isPositive
                                    ? R.strings.tank_setup.kpi.bonus.positive.$dyn(e.localeName)
                                    : R.strings.tank_setup.kpi.bonus.negative.$dyn(e.localeName))(
                                s.computes.optDevices.bonus(t, e),
                            );
                        return i
                            ? u().createElement(
                                  'div',
                                  { className: 'Bonus_base_3f' },
                                  o &&
                                      u().createElement(
                                          'span',
                                          { className: 'Bonus_bonus_70' },
                                          u().createElement(fu, { deviceID: t, bonusID: e }),
                                          ' ',
                                          i &&
                                              o &&
                                              u().createElement(
                                                  'span',
                                                  { className: 'Bonus_text_7c' },
                                                  u().createElement(bi, {
                                                      linesCount: i,
                                                      blocks: pi(String(o)),
                                                      mediaSize: n,
                                                  }),
                                              ),
                                      ),
                              )
                            : null;
                    }),
                    vu = (0, te.Pi)(({ deviceID: e }) => {
                        const t = ge(),
                            n = Qa().model,
                            a = n.computes.optDevices.device(e),
                            s = a.intCD,
                            i = a.effect,
                            o = n.computes.optDevices.bonusesLength(e),
                            r = `${s}-device`,
                            l = n.computes.optDevices.bonusEffectLinesCount(e);
                        return u().createElement(
                            'div',
                            { id: `${r}-bonuses`, className: 'Bonuses_base_7c' },
                            i &&
                                u().createElement(
                                    'div',
                                    { className: 'Bonuses_bonus_18' },
                                    u().createElement(
                                        'span',
                                        { className: 'Bonuses_effect_62' },
                                        u().createElement('span', { className: 'Bonuses_icon_9d' }),
                                        R.strings.tank_setup.effects.name(),
                                    ),
                                    ' ',
                                    u().createElement(
                                        'span',
                                        { className: 'Bonuses_text_97' },
                                        u().createElement(bi, { mediaSize: t, linesCount: l, blocks: pi(i) }),
                                    ),
                                ),
                            rt(o, (t) => u().createElement(Au, { key: `${t}_${s}`, bonusID: t, deviceID: e })),
                        );
                    }),
                    Cu = (0, i.memo)(
                        ({
                            parentId: e,
                            availableActions: t,
                            onActionClick: n,
                            isInstalled: a,
                            isMouseOverCard: s,
                            isModernized: i,
                            isFreeToDemount: o,
                            destroyTooltipBodyPath: r,
                            level: l,
                        }) => {
                            const c = (s || a) && t.includes(Bn),
                                _ = t.length && (t[0] !== Bn || c),
                                d = C()(
                                    'DeviceActions_base_bd',
                                    _ ? 'DeviceActions_base__shown_5f' : 'DeviceActions_base__hidden_39',
                                );
                            return u().createElement(
                                'div',
                                { className: d },
                                u().createElement(Ci, {
                                    parentId: `${e}-${An}`,
                                    actionType: An,
                                    onClick: n,
                                    show: t.includes(An),
                                }),
                                u().createElement(Ci, {
                                    parentId: `${e}-${fn}`,
                                    actionType: fn,
                                    onClick: n,
                                    show: t.includes(fn),
                                }),
                                u().createElement(Ci, {
                                    parentId: `${e}-${Bn}`,
                                    actionType: Bn,
                                    onClick: n,
                                    show: c,
                                    isModernized: i,
                                    level: l,
                                }),
                                u().createElement(Ci, {
                                    parentId: `${e}-${Cn}`,
                                    actionType: Cn,
                                    onClick: n,
                                    show: t.includes(Cn),
                                    isFreeToDemount: o,
                                }),
                                u().createElement(Ci, {
                                    parentId: `${e}-${Dn}`,
                                    actionType: Dn,
                                    onClick: n,
                                    show: t.includes(Dn),
                                    imageSource: R.images.gui.maps.icons.tanksetup.actions.demount(),
                                    isFreeToDemount: o,
                                }),
                                u().createElement(Ci, {
                                    parentId: `${e}-${Fn}`,
                                    actionType: Fn,
                                    onClick: n,
                                    show: t.includes(Fn),
                                }),
                                u().createElement(Ci, {
                                    parentId: `${e}-${Sn}`,
                                    actionType: Sn,
                                    buttonType: qn.secondary,
                                    onClick: n,
                                    show: (i || !o) && t.includes(Sn),
                                    isModernized: i,
                                    tooltipBodyPath: r,
                                }),
                            );
                        },
                    );
                function Du() {
                    return (
                        (Du = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        Du.apply(null, arguments)
                    );
                }
                const Fu = (0, te.Pi)(({ index: e, isCurrent: t }) => {
                        const n = ge(),
                            a = n === be.Large || n === be.Huge,
                            s = Qa(),
                            o = s.model,
                            r = s.controls,
                            l = o.computes.optDevices.device(e),
                            c = l.name,
                            _ = l.installedSlotId,
                            d = l.itemInstalledSetupIdx,
                            m = l.itemInstalledSetupSlotIdx,
                            p = l.isMountedMoreThanOne,
                            b = l.imageName,
                            g = l.itemsInStorage,
                            E = l.oldStylePrice,
                            h = l.specializations,
                            f = l.intCD,
                            A = l.isMounted,
                            v = l.isMountedInOtherSetup,
                            C = l.isDisabled,
                            D = l.isFreeToDemount,
                            F = l.overlayType,
                            S = l.isLocked,
                            B = l.isUpgradable,
                            y = l.isTrophy,
                            w = l.activeSpecsMask,
                            x = l.isModernized,
                            T = l.level,
                            k = l.lockReason,
                            I = l.destroyTooltipBodyPath,
                            O = _ > -1,
                            N = `${f}-device`,
                            L = (0, i.useMemo)(() => {
                                const e = [];
                                let n = !0;
                                return (
                                    O &&
                                        !C &&
                                        (t || e.push(vn),
                                        A
                                            ? ((n = !t), e.push(...((e) => (e ? [Dn, Fn] : [Cn]))(p)), e.push(Sn))
                                            : e.push(((e, t, n) => ((!Boolean(e) && !t) || n ? fn : An))(g, A, v))),
                                    B && !C && e.push(Bn),
                                    { availableActions: e, isDeviceClickable: n }
                                );
                            }, [O, C, B, t, A, p, g, v]),
                            M = L.availableActions,
                            P = L.isDeviceClickable,
                            $ = (0, i.useCallback)(
                                (e) => {
                                    r.optDevices.actSlot({ actionType: e, intCD: f, installedSlotId: _ });
                                },
                                [r, f, _],
                            ),
                            H = (0, i.useCallback)(() => {
                                M.length && M[0] !== Bn ? $(M[0]) : $(hn);
                            }, [M, $]),
                            z = (0, i.useMemo)(() => {
                                const e = { intCD: f, slotType: gt, fieldType: 0 };
                                return [
                                    e,
                                    Object.assign({}, e, {
                                        installedSlotId: _,
                                        itemInstalledSetupIdx: d,
                                        itemInstalledSetupSlotIdx: m,
                                        isMountedMoreThanOne: p,
                                        isMounted: A,
                                        isDisabled: C,
                                    }),
                                ];
                            }, [f, _, d, m, p, A, C]),
                            W = z[0],
                            j = z[1],
                            G = (0, i.useMemo)(() => {
                                const e = a
                                    ? R.images.gui.maps.shop.artefacts.c_180x135.$dyn(b)
                                    : R.images.gui.maps.icons.quests.bonuses.big.$dyn(b);
                                return String(e);
                            }, [a, b]);
                        return u().createElement(Mi, {
                            parentId: N,
                            name: c,
                            tooltipArgs: W,
                            contextMenuArgs: j,
                            imageSource: G,
                            isCurrent: t,
                            isActive: O,
                            isDisabled: C,
                            isLocked: S,
                            isClickable: P,
                            isModernized: x,
                            level: T,
                            specializations:
                                h && h.specializations.length
                                    ? u().createElement(Qn, Du({}, h, { activeSpecsMask: w, mediaSize: n }))
                                    : null,
                            details: u().createElement(vu, { compare: !1, deviceID: e }),
                            options: u().createElement(Hi, {
                                isMounted: A || v,
                                itemsInStorage: g,
                                price: E,
                                possibleZeroCount: y || x,
                                show: !M.length || Boolean(g || A || v),
                            }),
                            actions: u().createElement(Cu, {
                                parentId: N,
                                availableActions: M,
                                onActionClick: $,
                                isInstalled: O,
                                isModernized: x,
                                level: T,
                                isFreeToDemount: D,
                                destroyTooltipBodyPath: I,
                            }),
                            overlayType: F,
                            onSlotClick: H,
                            shouldHandleMouseOver: !0,
                            lockReason: k,
                        });
                    }),
                    Su = (0, te.Pi)(({ index: e, forwardRef: t, type: n }) => {
                        const a = Qa().model,
                            s = a.ammunitionPanel.get().selectedSlot,
                            i = (() => {
                                switch (n) {
                                    case gt:
                                        return a.computes.optDevices.device(e);
                                    case ht:
                                        return a.computes.boosters.booster(e);
                                    default:
                                        return a.computes.consumables.consumable(e);
                                }
                            })(),
                            o = i.isVisible,
                            r = i.installedSlotId,
                            l = r > -1 && s === r;
                        return o
                            ? u().createElement(
                                  'div',
                                  { className: 'Card_base_79', ref: l ? t : null },
                                  (() => {
                                      switch (n) {
                                          case ht:
                                              return u().createElement(zi, { index: e, isCurrent: l });
                                          case gt:
                                              return u().createElement(Fu, { index: e, isCurrent: l });
                                          default:
                                              return u().createElement(bu, { index: e, isCurrent: l });
                                      }
                                  })(),
                              )
                            : null;
                    }),
                    Bu = ({ isDisabled: e, currentCardRef: t, cardsAmount: n, type: a }) =>
                        u().createElement(
                            'div',
                            { className: C()('Cards_base_d5', e && 'Cards_base__disabled_a7') },
                            rt(n, (e) => u().createElement(Su, { key: e, index: e, forwardRef: t, type: a })),
                        ),
                    yu = {
                        base: 'App_base_d6',
                        base__small: 'App_base__small_69',
                        base__medium: 'App_base__medium_fe',
                        base__large: 'App_base__large_48',
                        base__huge: 'App_base__huge_11',
                        base__dialog: 'App_base__dialog_ca',
                        storage: 'App_storage_4a',
                        storage__medium: 'App_storage__medium_b4',
                        storage__large: 'App_storage__large_dc',
                        storage__huge: 'App_storage__huge_cd',
                        from: 'App_from_c6',
                        plus: 'App_plus_c1',
                        renewal: 'App_renewal_86',
                        renewal__dialog: 'App_renewal__dialog_89',
                        control: 'App_control_49',
                        totalPrice: 'App_totalPrice_9d',
                        totalPrice__mixed: 'App_totalPrice__mixed_68',
                    };
                let wu, xu;
                !(function (e) {
                    (e.General = 'general'),
                        (e.Consumables = 'consumables'),
                        (e.Shells = 'shells'),
                        (e.Boosters = 'boosters'),
                        (e.Repair = 'repair');
                })(wu || (wu = {})),
                    (function (e) {
                        (e.Column = 'column'), (e.Row = 'row');
                    })(xu || (xu = {}));
                const Tu = R.strings.tank_setup.dealPanel,
                    ku = (0, te.Pi)(
                        ({
                            renewalType: e,
                            withConfirmation: t = !1,
                            mediaSize: n = be.Medium,
                            panelType: a = xu.Row,
                            priceLabel: s = Tu.toBePaid(),
                            autoRenewalLabel: o,
                            onAutoRenewalChanged: r,
                            onDealConfirmed: l,
                            onDealCancelled: c,
                        }) => {
                            const _ = gs(),
                                d = _.model,
                                m = (0, i.useRef)(null),
                                p = n === be.Tiny || n === be.Small,
                                b = a === xu.Row,
                                g = Boolean(d.totalItemsInStorage.get()),
                                E = Boolean(d.price.get().length),
                                h = p && g && E;
                            return u().createElement(
                                cs.Provider,
                                { value: _ },
                                u().createElement(
                                    'div',
                                    {
                                        className: C()(
                                            yu.base,
                                            n && yu[`base__${n}`],
                                            e && yu.base__renewal,
                                            !b && yu.base__dialog,
                                        ),
                                    },
                                    e &&
                                        u().createElement(
                                            'div',
                                            { className: C()(yu.renewal, !b && yu.renewal__dialog) },
                                            u().createElement(_s, { renewType: e, onValueChanged: r, label: o }),
                                        ),
                                    u().createElement(
                                        ns,
                                        { when: b, canAccept: d.canAccept.get() },
                                        u().createElement(
                                            u().Fragment,
                                            null,
                                            g &&
                                                u().createElement(
                                                    'div',
                                                    { className: C()(yu.storage, n && yu[`storage__${n}`]) },
                                                    !p &&
                                                        u().createElement(
                                                            'div',
                                                            { className: yu.from },
                                                            Tu.fromStorage(),
                                                        ),
                                                    u().createElement(es, {
                                                        valueFirst: !0,
                                                        itemsInStorage: d.totalItemsInStorage.get(),
                                                    }),
                                                ),
                                            h && u().createElement('div', { className: yu.plus }),
                                            E &&
                                                u().createElement(
                                                    'div',
                                                    { className: C()(yu.totalPrice, h && yu.totalPrice__mixed) },
                                                    u().createElement(Fs, {
                                                        parentId: 'deal-panel',
                                                        priceLabel: s,
                                                        isHideMessage: p && b,
                                                    }),
                                                ),
                                            t &&
                                                d.canAccept.get() &&
                                                u().createElement(
                                                    'div',
                                                    { className: yu.control },
                                                    u().createElement(ms, {
                                                        isDisabled: d.isDisabled.get(),
                                                        canCancel: d.canCancel.get(),
                                                        onCancel: () => c && c(),
                                                        onConfirm: () => l && l(),
                                                        confirmButtonRef: m,
                                                    }),
                                                ),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    Iu = ['parentModelPath'],
                    Ou = (0, te.Pi)((e) => {
                        let t = e.parentModelPath,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, Iu);
                        const a = `${t}.dealPanel`;
                        return u().createElement(bs, { options: { context: a } }, u().createElement(ku, n));
                    });
                function Ru() {
                    return (
                        (Ru = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        Ru.apply(null, arguments)
                    );
                }
                const Nu = 'tabs-role';
                var Lu;
                !(function (e) {
                    (e.LIST = 'tabs-list'), (e.CONTENT = 'tab-content'), (e.TAB = 'tab-key');
                })(Lu || (Lu = {}));
                class Mu extends i.Component {
                    constructor(...e) {
                        super(...e),
                            (this.tabsProps = {}),
                            (this.elementsList = []),
                            (this.tabsListIndex = null),
                            (this.state = { activeKey: '', activeElements: [] }),
                            (this._getFirstTabKey = (e) => {
                                if (!e) return;
                                const t = e.find((e) => e.props[Lu.TAB]);
                                return t && t.props[Lu.TAB];
                            }),
                            (this.handleSetActiveKey = (e) => {
                                this.setState({ activeKey: e }),
                                    this.props.onTabChange &&
                                        this.props.onTabChange({ from: this.state.activeKey, to: e });
                            });
                    }
                    componentDidMount() {
                        const e = u().Children.toArray(this.props.children),
                            t = e.findIndex((e) => e.props[Nu] === Lu.LIST);
                        if (t < 0) return;
                        const n =
                            this.props.activeKey || this._getFirstTabKey(u().Children.toArray(e[t].props.children));
                        (e[t] = u().cloneElement(e[t], {
                            children: u()
                                .Children.toArray(e[t].props.children)
                                .map((e) => u().cloneElement(e, { key: e.props[Lu.TAB] })),
                        })),
                            (this.elementsList = e),
                            (this.tabsListIndex = t),
                            this.handleSetActiveKey(n);
                    }
                    componentWillReceiveProps(e) {
                        void 0 !== e.activeKey &&
                            e.activeKey !== this.props.activeKey &&
                            this.handleSetActiveKey(e.activeKey);
                    }
                    componentDidUpdate(e, t) {
                        if (null === this.tabsListIndex) return;
                        const n = u().Children.toArray(this.props.children)[this.tabsListIndex],
                            a = n.props.children.reduce(
                                (e, t, n) => ((e[n] = t.props), e),
                                Object.assign({}, this.tabsProps),
                            ),
                            s =
                                ((i = this.tabsProps),
                                (o = a),
                                !(
                                    Object.keys(i).length === Object.keys(o).length &&
                                    Object.keys(i).every(
                                        (e) => Object.prototype.hasOwnProperty.call(o, e) && i[e] === o[e],
                                    )
                                ));
                        var i, o;
                        const r = C()(
                                'Tabs_wrapper_2d',
                                n.props.className,
                                this.props.isTabsCentered && 'Tabs_wrapper__centered_d8',
                                this.props.isVerticalTabs && 'Tabs_wrapper__vertical_a5',
                            ),
                            l = C()('Tabs_list_0a', this.props.isTabsCentered && 'Tabs_list__centered_dc');
                        if (t.activeKey !== this.state.activeKey || s) {
                            const e = this.elementsList.findIndex((e) => {
                                    if (e.props[Nu] === Lu.CONTENT)
                                        return e.props[Lu.TAB].includes(this.state.activeKey);
                                }),
                                t = this.elementsList.filter((t, n) => [this.tabsListIndex, e].includes(n)),
                                s = t[0].props.children,
                                i = s.map((e, t) =>
                                    u().cloneElement(
                                        e,
                                        Object.assign(
                                            {},
                                            a[t],
                                            { key: t, isActive: this.state.activeKey === e.props[Lu.TAB] },
                                            this.props.isVerticalTabs
                                                ? {}
                                                : { isFirst: 0 === t, isLast: t === s.length - 1 },
                                            {
                                                onClick: (e) => {
                                                    const n = a[t][Lu.TAB];
                                                    this.state.activeKey === n ||
                                                        (a[t].onClick && a[t].onClick(e),
                                                        this.handleSetActiveKey(n),
                                                        this.props.onClickSound && me(this.props.onClickSound));
                                                },
                                                onMouseEnter: (e) => {
                                                    a[t].onMouseEnter && a[t].onMouseEnter(e),
                                                        this.props.onMouseEnterSound &&
                                                            me(this.props.onMouseEnterSound);
                                                },
                                            },
                                        ),
                                    ),
                                );
                            (this.tabsProps = a),
                                this.setState({
                                    activeElements: [
                                        u().createElement(
                                            'div',
                                            { className: l, key: Lu.LIST },
                                            u().createElement('div', Ru({}, n.props, { className: r }), i),
                                        ),
                                        t[1],
                                    ],
                                });
                        }
                    }
                    render() {
                        const e = this.state.activeElements,
                            t = C()('Tabs_base_d9', this.props.isVerticalTabs && 'Tabs_base__vertical_c0');
                        return u().createElement('div', { className: t }, e);
                    }
                }
                Mu.defaultProps = { onClickSound: R.sounds.play(), onMouseEnterSound: R.sounds.highlight() };
                const Pu = [
                    'children',
                    'className',
                    'activeKey',
                    'onClickSound',
                    'onMouseEnterSound',
                    'isTabsCentered',
                ];
                function $u() {
                    return (
                        ($u = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        $u.apply(null, arguments)
                    );
                }
                const Hu = (e) => {
                        let t = e.children,
                            n = e.className,
                            a = e.activeKey,
                            s = e.onClickSound,
                            i = e.onMouseEnterSound,
                            o = e.isTabsCentered,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, Pu);
                        return u().createElement(
                            'div',
                            $u({ className: n }, r),
                            u().createElement(
                                Mu,
                                { activeKey: a, onClickSound: s, onMouseEnterSound: i, isTabsCentered: o },
                                t,
                            ),
                        );
                    },
                    zu = ({ children: e, component: t, props: n = {} }) => (t ? u().createElement(t, n, e) : e || null),
                    Wu = 'Tab_base__first_4a',
                    ju = 'Tab_base__last_96',
                    Gu = 'Tab_base__medium_ec',
                    Uu = 'Tab_base__active_5d',
                    qu = 'Tab_stateBorder_64',
                    Vu = ['isActive', 'isFirst', 'isLast', 'isMedium', 'isNotified', 'children', 'wrapper', 'counter'];
                function Xu() {
                    return (
                        (Xu = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        Xu.apply(null, arguments)
                    );
                }
                const Ku = (0, i.memo)((e) => {
                        let t = e.isActive,
                            n = void 0 !== t && t,
                            a = e.isFirst,
                            s = void 0 !== a && a,
                            i = e.isLast,
                            o = void 0 !== i && i,
                            r = e.isMedium,
                            l = void 0 !== r && r,
                            c = e.isNotified,
                            _ = void 0 !== c && c,
                            d = e.children,
                            m = void 0 === d ? 'Tab' : d,
                            p = e.wrapper,
                            b = void 0 === p ? {} : p,
                            g = e.counter,
                            E = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var a in e)
                                    if ({}.hasOwnProperty.call(e, a)) {
                                        if (t.indexOf(a) >= 0) continue;
                                        n[a] = e[a];
                                    }
                                return n;
                            })(e, Vu);
                        return u().createElement(
                            zu,
                            b,
                            u().createElement(
                                'div',
                                Xu(
                                    {
                                        className: C()(
                                            'Tab_base_dd',
                                            { [Uu]: n },
                                            { [Wu]: s },
                                            { [ju]: o },
                                            { [Gu]: l },
                                        ),
                                    },
                                    E,
                                ),
                                u().createElement(
                                    'span',
                                    { className: 'Tab_state_6c' },
                                    u().createElement('span', { className: 'Tab_stateHighlight_1e' }),
                                    u().createElement('span', {
                                        className: C()(qu, 'Tab_stateBorder__positionLeft_e7'),
                                    }),
                                    u().createElement('span', {
                                        className: C()(qu, 'Tab_stateBorder__positionRight_db'),
                                    }),
                                ),
                                m,
                                !o &&
                                    !n &&
                                    u().createElement('span', {
                                        className: C()('Tab_divider_ca', 'Tab_divider__show_62'),
                                    }),
                                (Boolean(g) || _) &&
                                    u().createElement(
                                        'div',
                                        { className: 'Tab_counter_e1' },
                                        u().createElement(St, { value: g, isEmpty: _ }),
                                    ),
                            ),
                        );
                    }),
                    Yu = { tab__extraSmall: 'SetupTab_tab__extraSmall_09' },
                    Zu = ['name', 'newItemsCount', 'handleTabChanged', 'isTooltipEnabled'];
                function Ju() {
                    return (
                        (Ju = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        Ju.apply(null, arguments)
                    );
                }
                const Qu = (e) => {
                    let t = e.name,
                        n = e.newItemsCount,
                        a = e.handleTabChanged,
                        s = e.isTooltipEnabled,
                        o = void 0 === s || s,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var a in e)
                                if ({}.hasOwnProperty.call(e, a)) {
                                    if (t.indexOf(a) >= 0) continue;
                                    n[a] = e[a];
                                }
                            return n;
                        })(e, Zu);
                    const l = R.strings.tank_setup.tabs.$dyn(t),
                        c = (0, i.useCallback)(() => {
                            pe.playClick(), a({ name: t });
                        }, [a, t]),
                        _ = (0, i.useMemo)(() => ({ name: t }), [t]),
                        d = ot(['tab'], Yu);
                    return u().createElement(
                        U,
                        {
                            contentId: R.views.lobby.tanksetup.tooltips.SetupTabTooltipView('resId'),
                            args: _,
                            isEnabled: o,
                        },
                        u().createElement(
                            'div',
                            null,
                            u().createElement(
                                Ku,
                                Ju({}, r, { isNotified: Boolean(n), onClick: c }),
                                u().createElement('div', { className: d.tab }, l),
                            ),
                        ),
                    );
                };
                function eo() {
                    return (
                        (eo = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        eo.apply(null, arguments)
                    );
                }
                const to = ({ tabs: e, selectedTabName: t, handleTabChanged: n, isTooltipEnabled: a = !0 }) => {
                        const s = Ut('ModernizedSetupTabHintZone', Gt);
                        return (
                            (0, i.useEffect)(() => {
                                s && s.runTrigger(!0);
                            }, [s]),
                            u().createElement(
                                Hu,
                                { key: t, activeKey: t },
                                u().createElement(
                                    'div',
                                    { 'tabs-role': Lu.LIST },
                                    Re(e, (e) =>
                                        u().createElement(
                                            Qu,
                                            eo(
                                                {
                                                    key: e.name,
                                                    handleTabChanged: n,
                                                    'tabs-role': Lu.TAB,
                                                    'tab-key': e.name,
                                                    isTooltipEnabled: a,
                                                },
                                                e,
                                            ),
                                        ),
                                    ),
                                ),
                            )
                        );
                    },
                    no = {
                        base: 'Header_base_0c',
                        base__small: 'Header_base__small_21',
                        base__medium: 'Header_base__medium_aa',
                        base__large: 'Header_base__large_41',
                        base__huge: 'Header_base__huge_69',
                        tabs: 'Header_tabs_bb',
                        tabs__small: 'Header_tabs__small_29',
                        tabs__tiny: 'Header_tabs__tiny_80',
                        title: 'Header_title_a6',
                        title__small: 'Header_title__small_e2',
                        title__tiny: 'Header_title__tiny_5e',
                        vehicleType: 'Header_vehicleType_d9',
                        vehicleType__premium: 'Header_vehicleType__premium_b9',
                        premiumIGR: 'Header_premiumIGR_c3',
                        vehicleName: 'Header_vehicleName_02',
                    },
                    ao = (0, te.Pi)(({ title: e, children: t, tabProps: n }) => {
                        const a = Qa().model.vehicleInfo.get(),
                            s = a.vehicleName,
                            i = a.vehicleType,
                            o = a.tags,
                            r = a.isElite,
                            l = ge();
                        return u().createElement(
                            'div',
                            { className: C()(no.base, l && no[`base__${l}`]) },
                            u().createElement(
                                'div',
                                { className: no.vehicleName },
                                u().createElement('div', {
                                    className: C()(no.vehicleType, r && no.vehicleType__premium),
                                    style: {
                                        backgroundImage: `url('R.images.halloween.gui.maps.icons.carouselDef.c_38x38.${((c = i), c.replace(/-/g, '_'))}${r ? '_premium' : ''}')`,
                                    },
                                }),
                                ((e, t) => e.split(',').includes(t))(o, 'premiumIGR') &&
                                    u().createElement('div', { className: no.premiumIGR }),
                                s,
                            ),
                            u().createElement(
                                'div',
                                null,
                                u().createElement('div', { className: C()(no.title, l && no[`title__${l}`]) }, e),
                                n &&
                                    u().createElement(
                                        'div',
                                        { className: C()(no.tabs, l && no[`tabs__${l}`]) },
                                        u().createElement(to, n),
                                    ),
                            ),
                            t,
                        );
                        var c;
                    }),
                    so = {
                        base: 'Layout_base_70',
                        base__large: 'Layout_base__large_f0',
                        base__huge: 'Layout_base__huge_77',
                        header: 'Layout_header_f2',
                        content: 'Layout_content_bb',
                        main: 'Layout_main_58',
                        inner: 'Layout_inner_43',
                        footer: 'Layout_footer_db',
                    },
                    io = ({ header: e, content: t, footer: n }) => {
                        const a = ge();
                        return u().createElement(
                            'div',
                            { className: C()(so.base, a && so[`base__${a}`]) },
                            e && u().createElement('div', { className: C()(so.header, a && so[`header__${a}`]) }, e),
                            u().createElement(
                                'div',
                                { className: so.content },
                                u().createElement(
                                    'div',
                                    { className: so.main },
                                    u().createElement('div', { className: so.inner }, t),
                                ),
                            ),
                            n && u().createElement('div', { className: so.footer }, n),
                        );
                    },
                    uo = (0, te.Pi)(() => {
                        const e = Qa(),
                            t = e.model,
                            n = e.controls,
                            a = ge(),
                            s = t.ammunitionPanel.get().selectedSlot,
                            i = t.boosters.tabs.get(),
                            o = t.computes.boosters.length();
                        return u().createElement(io, {
                            header: u().createElement(ao, {
                                title: R.strings.tank_setup.section.battleBoosters(),
                                tabProps: Object.assign({}, i, {
                                    handleTabChanged: n.boosters.changeTab,
                                    isTooltipEnabled: !1,
                                }),
                            }),
                            content: u().createElement(
                                oi,
                                { selectedSlotId: s, scrollAreaKey: i.selectedTabName, updateKey: o },
                                u().createElement(Bu, { type: ht, cardsAmount: o }),
                            ),
                            footer: u().createElement(Ou, {
                                withConfirmation: !0,
                                renewalType: Bs.Boosters,
                                parentModelPath: 'model.tankSetup.battleBoostersSetup',
                                onDealConfirmed: n.boosters.confirmDeal,
                                onDealCancelled: n.boosters.cancelDeal,
                                onAutoRenewalChanged: (e) => n.boosters.changeAutoRenewal(e),
                                mediaSize: a,
                            }),
                        });
                    }),
                    oo = (0, te.Pi)(() => {
                        const e = Qa(),
                            t = e.model,
                            n = e.controls,
                            a = ge(),
                            s = t.ammunitionPanel.get().selectedSlot,
                            i = t.computes.consumables.length();
                        return u().createElement(io, {
                            header: u().createElement(ao, {
                                title: R.strings.halloween_lobby.hangarAmmunitionSetup.header(),
                            }),
                            content: u().createElement(
                                oi,
                                { selectedSlotId: s },
                                u().createElement(Bu, { cardsAmount: i }),
                            ),
                            footer: u().createElement(Ou, {
                                withConfirmation: !0,
                                renewalType: 'HWConsumables',
                                mediaSize: a,
                                parentModelPath: 'model.tankSetup.consumablesSetup',
                                onDealConfirmed: n.consumables.confirmDeal,
                                onDealCancelled: n.consumables.cancelDeal,
                                onAutoRenewalChanged: n.consumables.changeAutoRenewal,
                            }),
                        });
                    });
                function ro() {
                    return (
                        (ro = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        ro.apply(null, arguments)
                    );
                }
                const lo = ({
                    content: e,
                    ctaType: t,
                    tooltipArgs: n,
                    callback: a,
                    withToggle: s = !1,
                    toggle: o,
                    buttonProps: r,
                }) => {
                    const l = (0, i.useCallback)(() => {
                            a(t, o);
                        }, [t, a, o]),
                        c = (0, i.useMemo)(() => {
                            if (s) {
                                const t = C()('CtaButtons_toggle_64', o && 'CtaButtons_toggle__on_40');
                                return u().createElement(
                                    'div',
                                    { className: 'CtaButtons_content_9b' },
                                    u().createElement('div', { className: 'CtaButtons_substrate_2d' }),
                                    o && u().createElement('div', { className: 'CtaButtons_indicator_e9' }),
                                    u().createElement('div', { className: t }),
                                    e,
                                );
                            }
                            return e;
                        }, [s, e, o]);
                    return u().createElement(K, n, u().createElement(Kn, ro({}, r, { onClick: l }), c));
                };
                function co() {
                    return (
                        (co = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        co.apply(null, arguments)
                    );
                }
                const _o = ({ ctaConfigs: e }) =>
                        u().createElement(
                            'div',
                            { className: 'CtaButtons_base_4c' },
                            e.map((e) => u().createElement(lo, co({ key: e.ctaType }, e))),
                        ),
                    mo = {
                        base: 'Filter_base_1f',
                        base__tiny: 'Filter_base__tiny_d7',
                        base__detailed: 'Filter_base__detailed_18',
                        buttons: 'Filter_buttons_e6',
                        button: 'Filter_button_34',
                    },
                    po = ({ name: e }) =>
                        u().createElement('div', {
                            className: 'FilterItem_base_2e',
                            style: {
                                backgroundImage: `url(${R.images.gui.maps.icons.specialization.$dyn(`${e}_filter`)})`,
                            },
                        });
                let bo, go;
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
                })(bo || (bo = {})),
                    R.strings.common.percentValue(),
                    R.strings.common.plusPercentValue(),
                    (function (e) {
                        (e.Objective = 'objective'), (e.Possessive = 'possessive');
                    })(go || (go = {}));
                const Eo = {
                    header: R.strings.crew.filterPanel.counter.reset.header(),
                    body: R.strings.crew.filterPanel.counter.reset.body(),
                };
                let ho, fo;
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
                })(ho || (ho = {})),
                    (function (e) {
                        (e.Normal = 'normal'), (e.Low = 'low'), (e.Untrained = 'untrained');
                    })(fo || (fo = {}));
                const Ao = ({ parentId: e, onClick: t, soundHover: n = 'highlight', soundClick: a = 'play' }) => {
                        const s = (0, i.useState)(!1),
                            o = s[0],
                            r = s[1],
                            l = (0, i.useState)(!1),
                            c = l[0],
                            _ = l[1],
                            d = (0, i.useCallback)(() => {
                                me(a), _(!1), r(!0);
                            }, [a]),
                            m = (0, i.useCallback)(() => {
                                me(n), _(!0);
                            }, [n]),
                            p = (0, i.useCallback)(() => {
                                _(!1), r(!1);
                            }, []);
                        return u().createElement(
                            K,
                            Eo,
                            u().createElement(
                                'div',
                                {
                                    id: e,
                                    className: C()(
                                        'ClearBtn_base_a6',
                                        c && 'ClearBtn_base__hover_3b',
                                        o && 'ClearBtn_base__down_60',
                                    ),
                                    onMouseDown: d,
                                    onMouseOver: m,
                                    onMouseLeave: p,
                                    onClick: t,
                                },
                                u().createElement('div', { className: 'ClearBtn_background_61' }),
                                u().createElement('div', { className: 'ClearBtn_stroke_09' }),
                                u().createElement('div', { className: 'ClearBtn_cross_1d' }),
                            ),
                        );
                    },
                    vo = 'MatchDetails_count_d2',
                    Co = ({ isFilterActive: e = !1, onFilterReset: t, matchCount: n, totalCount: a }) => {
                        const s = (0, i.useCallback)(() => t(), [t]);
                        return u().createElement(
                            'div',
                            { className: 'MatchDetails_base_a8' },
                            R.strings.tank_setup.filters.shown(),
                            e &&
                                u().createElement(
                                    u().Fragment,
                                    null,
                                    u().createElement('span', { className: vo }, n),
                                    u().createElement(
                                        'span',
                                        { className: 'MatchDetails_separator_bc' },
                                        '/',
                                        u().createElement('span', { className: 'MatchDetails_arrow_b0' }),
                                    ),
                                ),
                            u().createElement('span', { className: vo }, a),
                            u().createElement(
                                'span',
                                { className: C()('MatchDetails_clear_21', e && 'MatchDetails_clear__shown_49') },
                                u().createElement(Ao, { parentId: 'match-details-clear-btn', onClick: s }),
                            ),
                        );
                    },
                    Do = ({
                        selectedFilterCount: e,
                        totalFilterCount: t,
                        filters: n,
                        isEnabled: a,
                        showDetails: s = !1,
                        onFilterChanged: o,
                        onFilterReset: r,
                        selectedSlotSpecialization: l,
                    }) => {
                        const c = ge(),
                            _ = Ut('FilterTutorialHintZone', Gt);
                        (0, i.useEffect)(() => {
                            _ && _.runTrigger(!0);
                        }, [_]);
                        const d = Re(n, ({ name: e, isSelected: t }) => ({
                            ctaType: e,
                            content: u().createElement(po, { name: e }),
                            callback: (e, t) => {
                                o({ name: e }),
                                    ((e, t) => {
                                        const n = 'cons_equipment_filter' + (t ? '_on' : '_off');
                                        me(t ? n + '_' + e : n);
                                    })(e, !t);
                            },
                            withToggle: !0,
                            toggle: t,
                            buttonProps: {
                                type: qn.ghost,
                                mixClass: C()(mo.button, l && e === l && 'filter-for-highlight'),
                            },
                            tooltipArgs: {
                                header: String(R.strings.tank_setup.categories.$dyn(e)),
                                body: String(R.strings.tank_setup.categories.body.$dyn(e)),
                            },
                        }));
                        return u().createElement(
                            'div',
                            { className: C()(mo.base, c && mo[`base__${c}`], s && mo.base__detailed) },
                            s &&
                                u().createElement(Co, {
                                    isFilterActive: a,
                                    onFilterReset: r,
                                    matchCount: e,
                                    totalCount: t,
                                }),
                            u().createElement(
                                'div',
                                { className: mo.buttons },
                                u().createElement(_o, { ctaConfigs: d }),
                            ),
                        );
                    },
                    Fo = {
                        base: 'ExperimentalEquipCoinBlock_base_37',
                        base__medium: 'ExperimentalEquipCoinBlock_base__medium_f6',
                        base__small: 'ExperimentalEquipCoinBlock_base__small_76',
                        base__tiny: 'ExperimentalEquipCoinBlock_base__tiny_51',
                        currency: 'ExperimentalEquipCoinBlock_currency_26',
                        currencyIcon: 'ExperimentalEquipCoinBlock_currencyIcon_e9',
                        button: 'ExperimentalEquipCoinBlock_button_13',
                    },
                    So = R.strings.tank_setup.tooltips.experimentalEquipCoinBlock.actions.button,
                    Bo = (e) => (e ? So.disabled.text() : So.notDisabled.text()),
                    yo = (0, te.Pi)(({ disabled: e }) => {
                        const t = ge(),
                            n = Qa(),
                            a = n.model,
                            s = n.controls,
                            i = a.optDevices.specialCurrency.get().value;
                        return u().createElement(
                            'div',
                            { className: C()(Fo.base, t && Fo[`base__${t}`]) },
                            u().createElement(
                                qe,
                                { args: { tooltipId: 'equipCoinInfo' } },
                                u().createElement(
                                    'div',
                                    { className: Fo.currency },
                                    u().createElement(Es, { value: i }),
                                    u().createElement('div', { className: Fo.currencyIcon }),
                                ),
                            ),
                            u().createElement(
                                K,
                                { body: Bo(e) },
                                u().createElement(
                                    'div',
                                    null,
                                    u().createElement(
                                        Kn,
                                        { onClick: s.moreCurrencyGot, mixClass: Fo.button, disabled: e },
                                        R.strings.tank_setup.experimentalEquipCoinBlock.name(),
                                    ),
                                ),
                            ),
                        );
                    }),
                    wo = 'HeaderContent_base_ec';
                function xo() {
                    return (
                        (xo = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        xo.apply(null, arguments)
                    );
                }
                const To = (0, te.Pi)(() => {
                    const e = Qa(),
                        t = e.model,
                        n = e.controls,
                        a = t.optDevices.setup.get(),
                        s = a.withIntroduction,
                        i = a.hasUnfitItems,
                        o = t.computes.optDevices.slotsLength(),
                        r = t.optDevices.tabs.get(),
                        l = t.optDevices.filter.get();
                    switch (r.selectedTabName) {
                        case 'simple':
                            return u().createElement(
                                'div',
                                { className: wo },
                                u().createElement(
                                    Do,
                                    xo({}, l, { onFilterChanged: n.filterChanged, onFilterReset: n.filterReset }),
                                ),
                            );
                        case 'modernized':
                            return o > 0
                                ? u().createElement(
                                      'div',
                                      { className: wo },
                                      u().createElement(yo, { disabled: s ? !i : o <= 0 }),
                                  )
                                : null;
                        default:
                            return null;
                    }
                });
                function ko() {
                    return (
                        (ko = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                  }
                                  return e;
                              }),
                        ko.apply(null, arguments)
                    );
                }
                const Io = (0, te.Pi)(() => {
                        const e = Qa(),
                            t = e.model,
                            n = e.controls,
                            a = t.optDevices.tabs.get(),
                            s = a.tabs.length > 1;
                        return u().createElement(
                            ao,
                            {
                                title: R.strings.tank_setup.section.optDevices(),
                                tabProps: s
                                    ? Object.assign({}, a, { handleTabChanged: n.optDevices.changeTab })
                                    : void 0,
                                tabs:
                                    s && u().createElement(to, ko({}, a, { handleTabChanged: n.optDevices.changeTab })),
                            },
                            u().createElement(To, null),
                        );
                    }),
                    Oo = {
                        base: 'Introduction_base_4b',
                        base__enter: 'Introduction_base__enter_34',
                        base__enterActive: 'Introduction_base__enterActive_06',
                        base__exit: 'Introduction_base__exit_6e',
                        base__exitActive: 'Introduction_base__exitActive_11',
                        introduction: 'Introduction_introduction_90',
                        image: 'Introduction_image_60',
                        base__large: 'Introduction_base__large_78',
                        base__huge: 'Introduction_base__huge_ac',
                        image__deluxe: 'Introduction_image__deluxe_b3',
                        image__deluxeLarge: 'Introduction_image__deluxeLarge_2e',
                        image__trophy: 'Introduction_image__trophy_a5',
                        image__trophyLarge: 'Introduction_image__trophyLarge_f1',
                        image__modernized: 'Introduction_image__modernized_16',
                        image__modernizedLarge: 'Introduction_image__modernizedLarge_57',
                        description: 'Introduction_description_bd',
                        title: 'Introduction_title_56',
                        message: 'Introduction_message_5b',
                        currency: 'Introduction_currency_5e',
                        icon: 'Introduction_icon_16',
                        'icon__currency-deluxe': 'Introduction_icon__currency-deluxe_c0',
                        'icon__currency-modernized': 'Introduction_icon__currency-modernized_48',
                    },
                    Ro = ({ introType: e }) => {
                        const t = C()(Oo.icon, Oo[`icon__currency-${e}`]),
                            n = (0, i.useMemo)(
                                () => ({
                                    currencyName: u().createElement(
                                        'span',
                                        { className: Oo.currency },
                                        R.strings.tank_setup.introduction.currency.$dyn(e),
                                    ),
                                    currencyIcon: u().createElement('span', { className: t }),
                                }),
                                [t, e],
                            ),
                            a = R.strings.tank_setup.introduction.message.$dyn(e);
                        return a ? u().createElement(Bt, { binding: n, text: a, classMix: Oo.message }) : null;
                    },
                    No = (0, te.Pi)(() => {
                        const e = ge(),
                            t = e === be.Large || e === be.Huge,
                            n = (0, i.useState)(!0),
                            a = n[0],
                            s = n[1],
                            o = Qa(),
                            r = o.model,
                            l = o.controls,
                            c = r.optDevices.setup.get().introductionType,
                            _ = r.computes.optDevices.slotsLength() > 0,
                            d = (0, i.useCallback)(() => {
                                s(!1);
                            }, []),
                            m = (0, i.useCallback)(() => {
                                l.introPassed(), s(!0);
                            }, [l]),
                            p = (0, i.useMemo)(
                                () => ({
                                    enter: Oo.base__enter,
                                    enterActive: Oo.base__enterActive,
                                    exit: Oo.base__exit,
                                    exitActive: Oo.base__exitActive,
                                }),
                                [],
                            ),
                            b = _
                                ? R.strings.tank_setup.introduction.title.withEquipments.$dyn(c)
                                : R.strings.tank_setup.introduction.title.withoutEquipments.$dyn(c);
                        return u().createElement(
                            ct.Z,
                            { in: a, classNames: p, timeout: 300, onExited: m },
                            u().createElement(
                                'div',
                                { className: C()(Oo.base, e && Oo[`base__${e}`]), id: 'introduction' },
                                u().createElement(
                                    'div',
                                    { className: Oo.introduction },
                                    u().createElement('div', {
                                        className: C()(Oo.image, t ? Oo[`image__${c}Large`] : Oo[`image__${c}`]),
                                    }),
                                    u().createElement(
                                        'div',
                                        { className: Oo.description },
                                        u().createElement('div', { className: Oo.title }, b),
                                        u().createElement(Ro, { introType: c }),
                                    ),
                                    _ &&
                                        u().createElement(
                                            Kn,
                                            { type: qn.secondary, size: Vn.medium, onClick: d },
                                            R.strings.tank_setup.introduction.showButton(),
                                        ),
                                ),
                            ),
                        );
                    }),
                    Lo = (0, te.Pi)(() => {
                        const e = ge(),
                            t = Qa(),
                            n = t.model,
                            a = t.controls,
                            s = n.ammunitionPanel.get().selectedSlot,
                            i = n.optDevices.setup.get().withIntroduction,
                            o = n.computes.optDevices.slotsLength(),
                            r = n.optDevices.filter.get().selectedFilterCount,
                            l = n.optDevices.tabs.get().selectedTabName,
                            c = n.computes.optDevices.slotsLength();
                        return u().createElement(io, {
                            header: u().createElement(Io, null),
                            content: i
                                ? u().createElement(
                                      'div',
                                      { className: 'OptDevicesSetup_intro_8b' },
                                      u().createElement(Bu, { type: gt, cardsAmount: c, isDisabled: i }),
                                      u().createElement(No, null),
                                  )
                                : u().createElement(
                                      oi,
                                      { selectedSlotId: s, scrollAreaKey: l, updateKey: `${r}:${o}` },
                                      u().createElement(Bu, { type: gt, cardsAmount: c, isDisabled: i }),
                                  ),
                            footer: u().createElement(Ou, {
                                withConfirmation: !0,
                                parentModelPath: 'model.tankSetup.optDevicesSetup',
                                mediaSize: e,
                                onDealConfirmed: a.optDevices.confirmDeal,
                                onDealCancelled: a.optDevices.cancelDeal,
                                onAutoRenewalChanged: a.optDevices.changeAutoRenewal,
                            }),
                        });
                    }),
                    Mo = {
                        base: 'Animation_base_6a',
                        base__leftEnter: 'Animation_base__leftEnter_70',
                        base__rightEnter: 'Animation_base__rightEnter_d2',
                        base__leftEntering: 'Animation_base__leftEntering_18',
                        'animation-show-left': 'Animation_animation-show-left_81',
                        base__rightEntering: 'Animation_base__rightEntering_49',
                        'animation-show-right': 'Animation_animation-show-right_d0',
                        base__exit: 'Animation_base__exit_4f',
                        base__previous: 'Animation_base__previous_ac',
                        base__leftExit: 'Animation_base__leftExit_eb',
                        'animation-hide-left': 'Animation_animation-hide-left_05',
                        base__rightExit: 'Animation_base__rightExit_7b',
                        'animation-hide-right': 'Animation_animation-hide-right_97',
                    },
                    Po = [gt, Et, 'consumables', ht, ft],
                    $o = (e, t) => (t === e ? '' : Po.indexOf(t) > Po.indexOf(e) ? 'right' : 'left'),
                    Ho = ({ children: e, selectedSetup: t }) => {
                        const n = u().createRef(),
                            a = (0, i.useRef)({ selectedSetup: t, previousSelectedSetup: t, animatedElements: {} }),
                            s = (0, i.useMemo)(() => {
                                const e = $o(a.current.selectedSetup, t);
                                return { enter: Mo[`base__${e}Enter`] };
                            }, [t]),
                            o = (0, i.useCallback)(
                                (e) => {
                                    const s = $o(a.current.selectedSetup, t);
                                    (e.className = C()(Mo.base, Mo.base__exit)),
                                        e.classList.add(Mo[`base__${s}Exit`]),
                                        (a.current.animatedElements[t] = n),
                                        Object.values(a.current.animatedElements).forEach((e) => {
                                            e.current && e.current.classList.remove(Mo.base__previous);
                                        }),
                                        n.current && n.current.classList.add(Mo.base__previous);
                                },
                                [n, t],
                            ),
                            r = (0, i.useCallback)(
                                (e) => {
                                    const n = $o(a.current.previousSelectedSetup, t);
                                    (e.className = Mo.base), e.classList.add(Mo[`base__${n}Enter`]);
                                },
                                [t],
                            ),
                            l = (0, i.useCallback)(
                                (e) => {
                                    const n = $o(a.current.previousSelectedSetup, t);
                                    e.classList.add(Mo[`base__${n}Entering`]);
                                },
                                [t],
                            ),
                            c = (0, i.cloneElement)(e);
                        return (
                            (a.current.previousSelectedSetup = a.current.selectedSetup),
                            (a.current.selectedSetup = t),
                            u().createElement(
                                lt.Z,
                                null,
                                u().createElement(
                                    ct.Z,
                                    {
                                        in: !1,
                                        key: `panel-${t}`,
                                        timeout: 400,
                                        classNames: s,
                                        onExit: o,
                                        onEnter: r,
                                        onEntering: l,
                                    },
                                    u().createElement('div', { className: Mo.base, ref: n }, c),
                                ),
                            )
                        );
                    },
                    zo = (0, te.Pi)(() => {
                        const e = Qa().model.tankSetup.get().selectedSetup;
                        return u().createElement(
                            Ho,
                            { selectedSetup: e },
                            (() => {
                                switch (e) {
                                    case gt:
                                        return u().createElement(Lo, null);
                                    case ht:
                                        return u().createElement(uo, null);
                                    default:
                                        return u().createElement(oo, null);
                                }
                            })(),
                        );
                    }),
                    Wo = (0, te.Pi)(() => {
                        const e = Qa(),
                            t = e.model,
                            n = e.controls,
                            a = t.root.get().isDefenseMode,
                            s = (0, i.useState)(!1),
                            o = s[0],
                            r = s[1];
                        (0, i.useEffect)(() => ee(n.viewRendered), [n]);
                        const l = (0, i.useCallback)(() => {
                            o || n.close();
                        }, [o, n]);
                        return u().createElement(Xa, {
                            show: t.root.get().show,
                            content: u().createElement(zo, null),
                            panel: u().createElement(
                                ze,
                                null,
                                u().createElement(
                                    'div',
                                    { className: 'HangarAmmunitionSetupApp_base_05' },
                                    u().createElement(Wa, {
                                        show: t.root.get().show,
                                        isReady: t.root.get().isReady,
                                        panelType: Q.Setup,
                                        setIsExitBlocked: r,
                                    }),
                                    !a &&
                                        u().createElement(
                                            u().Fragment,
                                            null,
                                            u().createElement(J, {
                                                className: 'HangarAmmunitionSetupApp_comparisonButton_8d',
                                                type: Z.Comparison,
                                                isDisabled: !0,
                                            }),
                                            u().createElement(J, {
                                                className: 'HangarAmmunitionSetupApp_previewButton_90',
                                                type: Z.Preview,
                                                isDisabled: !0,
                                            }),
                                        ),
                                ),
                            ),
                            onAnimationDone: n.animationEnded,
                            onClose: l,
                        });
                    });
                engine.whenReady.then(() => {
                    $().render(
                        u().createElement(M, null, u().createElement(Ja, null, u().createElement(Wo, null))),
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
        var n = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](n, n.exports, __webpack_require__), n.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, n, a) => {
            if (!t) {
                var s = 1 / 0;
                for (r = 0; r < deferred.length; r++) {
                    for (var [t, n, a] = deferred[r], i = !0, u = 0; u < t.length; u++)
                        (!1 & a || s >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[u]))
                            ? t.splice(u--, 1)
                            : ((i = !1), a < s && (s = a));
                    if (i) {
                        deferred.splice(r--, 1);
                        var o = n();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var r = deferred.length; r > 0 && deferred[r - 1][2] > a; r--) deferred[r] = deferred[r - 1];
            deferred[r] = [t, n, a];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(t, { a: t }), t;
        }),
        (__webpack_require__.d = (e, t) => {
            for (var n in t)
                __webpack_require__.o(t, n) &&
                    !__webpack_require__.o(e, n) &&
                    Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
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
        (__webpack_require__.j = 933),
        (() => {
            var e = { 933: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var a,
                        s,
                        [i, u, o] = n,
                        r = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (a in u) __webpack_require__.o(u, a) && (__webpack_require__.m[a] = u[a]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (t && t(n); r < i.length; r++)
                        (s = i[r]), __webpack_require__.o(e, s) && e[s] && e[s][0](), (e[s] = 0);
                    return __webpack_require__.O(l);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(5969));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
