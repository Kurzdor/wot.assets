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
            532: (e) => {
                e.exports = {
                    BLACK_REAL: '#000000',
                    WHITE_REAL: '#FFFFFF',
                    WHITE: '#F2F2F7',
                    WHITE_ORANGE: '#FEFEEC',
                    WHITE_SPANISH: '#E9E2BF',
                    PAR: '#8C8C7E',
                    PAR_SECONDARY: '#595950',
                    PAR_TERTIARY: '#37362E',
                    INFO_RED: '#FF0000',
                    RED: '#FF2717',
                    RED_DARK: '#B70000',
                    YELLOW: '#FEAB34',
                    ORANGE: '#EE7000',
                    CREAM: '#FFDD99',
                    BROWN: '#CBAC77',
                    GREEN_BRIGHT: '#80D43A',
                    GREEN: '#7AB300',
                    GREEN_DARK: '#497212',
                    BLUE_BOOSTER: '#CCFFFF',
                    BLUE_TEAMKILLER: '#09E2FF',
                    CRED: '#CED9D9',
                    GOLD: '#FFC363',
                    BOND: '#C9C9B6',
                    PROM: '#A29B70',
                };
            },
            887: (e) => {
                e.exports = {
                    XS: '4rem',
                    SM: '8rem',
                    SMp: '10rem',
                    MD: '16rem',
                    MDp: '20rem',
                    LG: '32rem',
                    XL: '64rem',
                };
            },
            527: (e, t, a) => {
                'use strict';
                a.r(t),
                    a.d(t, { mouse: () => l, off: () => i, on: () => o, onResize: () => n, onScaleUpdated: () => s });
                var u = a(472),
                    r = a(176);
                const n = (0, u.E)('clientResized'),
                    s = (0, u.E)('self.onScaleUpdated'),
                    o = (e, t) => engine.on(e, t),
                    i = (e, t) => engine.off(e, t),
                    c = { down: (0, u.E)('mousedown'), up: (0, u.E)('mouseup'), move: (0, u.E)('mousemove') },
                    l = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && (0, r.R)(!1);
                        }
                        function a() {
                            e.enabled && (0, r.R)(!0);
                        }
                        function u() {
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
                        const n = ['down', 'up', 'move'].reduce(
                            (t, a) => (
                                (t[a] = (function (t) {
                                    return (a) => {
                                        e.listeners += 1;
                                        let r = !0;
                                        const n = `mouse${t}`,
                                            s = c[t]((e) => a([e, 'outside']));
                                        function o(e) {
                                            a([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(n, o),
                                            u(),
                                            () => {
                                                r &&
                                                    (s(),
                                                    window.removeEventListener(n, o),
                                                    (e.listeners -= 1),
                                                    u(),
                                                    (r = !1));
                                            }
                                        );
                                    };
                                })(a)),
                                t
                            ),
                            {},
                        );
                        return Object.assign({}, n, {
                            disable() {
                                (e.enabled = !1), u();
                            },
                            enable() {
                                (e.enabled = !0), u();
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
            959: (e, t, a) => {
                'use strict';
                a.r(t),
                    a.d(t, {
                        events: () => u,
                        getMouseGlobalPosition: () => n,
                        getSize: () => r,
                        graphicsQuality: () => s,
                    });
                var u = a(527);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function n(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            176: (e, t, a) => {
                'use strict';
                function u(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                a.d(t, { R: () => u });
            },
            472: (e, t, a) => {
                'use strict';
                function u(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                a.d(t, { E: () => u });
            },
            138: (e, t, a) => {
                'use strict';
                a.d(t, { O: () => r });
                var u = a(959);
                const r = { view: a(641), client: u };
            },
            722: (e, t, a) => {
                'use strict';
                function u(e, t, a = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, a);
                }
                function r(e, t, a) {
                    return `url(${u(e, t, a)})`;
                }
                a.r(t), a.d(t, { getBgUrl: () => r, getTextureUrl: () => u });
            },
            112: (e, t, a) => {
                'use strict';
                a.d(t, { W: () => u });
                const u = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            538: (e, t, a) => {
                'use strict';
                a.d(t, { U: () => r });
                var u = a(472);
                const r = {
                    onTextureFrozen: (0, u.E)('self.onTextureFrozen'),
                    onTextureReady: (0, u.E)('self.onTextureReady'),
                    onDomBuilt: (0, u.E)('self.onDomBuilt'),
                    onLoaded: (0, u.E)('self.onLoaded'),
                    onDisplayChanged: (0, u.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, u.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, u.E)('children.onAdded'),
                        onLoaded: (0, u.E)('children.onLoaded'),
                        onRemoved: (0, u.E)('children.onRemoved'),
                        onAttached: (0, u.E)('children.onAttached'),
                        onTextureReady: (0, u.E)('children.onTextureReady'),
                        onRequestPosition: (0, u.E)('children.requestPosition'),
                    },
                };
            },
            641: (e, t, a) => {
                'use strict';
                a.r(t),
                    a.d(t, {
                        addModelObserver: () => l,
                        addPreloadTexture: () => o,
                        children: () => u,
                        displayStatus: () => r.W,
                        displayStatusIs: () => B,
                        events: () => n.U,
                        extraSize: () => y,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => C,
                        getScale: () => f,
                        getSize: () => m,
                        getViewGlobalPosition: () => E,
                        isEventHandled: () => D,
                        isFocused: () => A,
                        pxToRem: () => p,
                        remToPx: () => h,
                        resize: () => d,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => F,
                        setEventHandled: () => b,
                        setInputPaddingsRem: () => i,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => R,
                    });
                var u = a(722),
                    r = a(112),
                    n = a(538),
                    s = a(566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function i(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, t, a, u = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, a, u);
                }
                function l(e, t, a) {
                    return viewEnv.addDataChangedCallback(e, t, a);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function d(e, t, a = 'px') {
                    return 'rem' === a ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function E(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: h(t.x), y: h(t.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function f() {
                    return viewEnv.getScale();
                }
                function p(e) {
                    return viewEnv.pxToRem(e);
                }
                function h(e) {
                    return viewEnv.remToPx(e);
                }
                function F(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function A() {
                    return viewEnv.isFocused();
                }
                function b() {
                    return viewEnv.setEventHandled();
                }
                function D() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function C() {
                    return viewEnv.getShowingStatus();
                }
                const B = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
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
                    R = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : n.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            566: (e, t, a) => {
                'use strict';
                a.d(t, { qP: () => n });
                const u = ['args'],
                    r = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const n = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        u,
                                        r = {},
                                        n = Object.keys(e);
                                    for (u = 0; u < n.length; u++) (a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                    return r;
                                })(t, u);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, s, {
                                          arguments:
                                              ((r = n),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: a, type: e });
                        var r;
                    },
                    n = {
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
            521: (e, t, a) => {
                'use strict';
                let u, r;
                a.d(t, { n: () => u }),
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
                    })(u || (u = {})),
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
            358: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => n });
                var u = a(138);
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
                        const n = u.O.view.addModelObserver(e, a, r);
                        return (
                            n > 0
                                ? ((this._callbacks[n] = t),
                                  a > 0 && (this._views[a] ? this._views[a].push(n) : (this._views[a] = [n])))
                                : console.error("Can't add callback for model:", e),
                            n
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
                            const u = this._callbacks[a];
                            void 0 !== u && u(e, t);
                        });
                    }
                }
                r.__instance = void 0;
                const n = r;
            },
            572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(916);
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
            916: (e, t, a) => {
                'use strict';
                a.d(t, {
                    B3: () => c,
                    Z5: () => s.Z5,
                    B0: () => o,
                    wU: () => C,
                    ry: () => h,
                    Eu: () => F,
                    SW: () => D,
                    P3: () => v,
                });
                class u {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: a }) => {
                                    let u = e.target;
                                    do {
                                        if (u === t) return;
                                        u = u.parentNode;
                                    } while (u);
                                    a();
                                });
                            });
                    }
                    static get instance() {
                        return u.__instance || (u.__instance = new u()), u.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const a = e,
                            u = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== a || t !== u)),
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
                u.__instance = void 0;
                const r = u;
                var n = a(358),
                    s = a(613);
                let o;
                var i;
                ((i = o || (o = {}))[(i.UNDEFINED = 0)] = 'UNDEFINED'),
                    (i[(i.TOOLTIP = 1)] = 'TOOLTIP'),
                    (i[(i.POP_OVER = 2)] = 'POP_OVER'),
                    (i[(i.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (i[(i.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (i[(i.MOVE = 16)] = 'MOVE'),
                    (i[(i.CLOSE = 32)] = 'CLOSE'),
                    (i[(i.MINIMIZE = 64)] = 'MINIMIZE');
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = a(521),
                    E = a(138);
                const g = ['args'];
                function f(e, t, a, u, r, n, s) {
                    try {
                        var o = e[n](s),
                            i = o.value;
                    } catch (e) {
                        return void a(e);
                    }
                    o.done ? t(i) : Promise.resolve(i).then(u, r);
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
                                    return new Promise(function (u, r) {
                                        var n = e.apply(t, a);
                                        function s(e) {
                                            f(n, u, r, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            f(n, u, r, s, o, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    F = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    A = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                n = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        u,
                                        r = {},
                                        n = Object.keys(e);
                                    for (u = 0; u < n.length; u++) (a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                    return r;
                                })(t, g);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, n, {
                                          arguments:
                                              ((u = r),
                                              Object.entries(u).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, n));
                        } else viewEnv.handleViewEvent({ __Type: a, type: e });
                        var u;
                    },
                    b = () => A(o.CLOSE),
                    D = () => A(o.POP_OVER, { on: !1 }),
                    v = (e, t, a, u, r = R.invalid('resId'), n) => {
                        const s = E.O.view.getViewGlobalPosition(),
                            i = a.getBoundingClientRect(),
                            c = i.x,
                            l = i.y,
                            _ = i.width,
                            m = i.height,
                            d = {
                                x: E.O.view.pxToRem(c) + s.x,
                                y: E.O.view.pxToRem(l) + s.y,
                                width: E.O.view.pxToRem(_),
                                height: E.O.view.pxToRem(m),
                            };
                        A(o.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: u || R.invalid('resId'),
                            targetID: r,
                            direction: t,
                            bbox: p(d),
                            on: !0,
                            args: n,
                        });
                    },
                    C = () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                    B = (e, t) => {
                        e.keyCode === d.n.ESCAPE && t();
                    };
                var y = a(572);
                const M = r.instance,
                    w = {
                        DataTracker: n.Z,
                        ViewModel: y.Z,
                        ViewEventType: o,
                        NumberFormatType: c,
                        RealFormatType: l,
                        TimeFormatType: _,
                        DateFormatType: m,
                        makeGlobalBoundingBox: p,
                        sendMoveEvent: (e) => A(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: b,
                        sendClosePopOverEvent: D,
                        sendShowContextMenuEvent: (e, t, a = 0) => {
                            A(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: a, args: t });
                        },
                        sendShowPopOverEvent: v,
                        addEscapeListener: (e) => {
                            const t = (t) => B(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            B(e, b);
                        },
                        handleViewEvent: A,
                        onBindingsReady: h,
                        onLayoutReady: F,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: C,
                        dumpViewModel: function e(t) {
                            const a = {};
                            if ('object' != typeof t) return t;
                            for (const u in t)
                                if (Object.prototype.hasOwnProperty.call(t, u)) {
                                    const r = Object.prototype.toString.call(t[u]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = t[u];
                                        a[u] = [];
                                        for (let t = 0; t < r.length; t++) a[u].push({ value: e(r[t].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (a[u] = e(t[u]))
                                            : (a[u] = t[u]);
                                }
                            return a;
                        },
                        ClickOutsideManager: M,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = w;
            },
            613: (e, t, a) => {
                'use strict';
                a.d(t, { Ew: () => n, Z5: () => u, cy: () => r });
                const u = {
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
                    n = {
                        getRegionalDateTime: (e, t, a = !0) => regionalDateTime.getRegionalDateTime(e, t, a),
                        getFormattedDateTime: (e, t, a = !0) => regionalDateTime.getFormattedDateTime(e, t, a),
                    };
            },
            328: (e, t, a) => {
                'use strict';
                var u = a(179),
                    r = a.n(u);
                const n = (e, t, a) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && a.extraLarge) ||
                          (t.largeHeight && a.large) ||
                          (t.mediumHeight && a.medium) ||
                          (t.smallHeight && a.small) ||
                          (t.extraSmallHeight && a.extraSmall)
                            ? e
                            : null
                        : e;
                var s = a(138);
                const o = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var i;
                function c(e, t, a) {
                    const u = (function (e, t) {
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
                        n = Math.min(u, r);
                    return {
                        extraLarge: n === a.extraLarge.weight,
                        large: n === a.large.weight,
                        medium: n === a.medium.weight,
                        small: n === a.small.weight,
                        extraSmall: n === a.extraSmall.weight,
                        extraLargeWidth: u === a.extraLarge.weight,
                        largeWidth: u === a.large.weight,
                        mediumWidth: u === a.medium.weight,
                        smallWidth: u === a.small.weight,
                        extraSmallWidth: u === a.extraSmall.weight,
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
                })(i || (i = {}));
                const l = s.O.client.getSize('rem'),
                    _ = l.width,
                    m = l.height,
                    d = Object.assign({ width: _, height: m }, c(_, m, o)),
                    E = (0, u.createContext)(d),
                    g = ['children'],
                    f = (e) => {
                        let t = e.children,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    u,
                                    r = {},
                                    n = Object.keys(e);
                                for (u = 0; u < n.length; u++) (a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, g);
                        const r = (0, u.useContext)(E),
                            s = r.extraLarge,
                            o = r.large,
                            i = r.medium,
                            c = r.small,
                            l = r.extraSmall,
                            _ = r.extraLargeWidth,
                            m = r.largeWidth,
                            d = r.mediumWidth,
                            f = r.smallWidth,
                            p = r.extraSmallWidth,
                            h = r.extraLargeHeight,
                            F = r.largeHeight,
                            A = r.mediumHeight,
                            b = r.smallHeight,
                            D = r.extraSmallHeight,
                            v = { extraLarge: h, large: F, medium: A, small: b, extraSmall: D };
                        if (a.extraLarge || a.large || a.medium || a.small || a.extraSmall) {
                            if (a.extraLarge && s) return t;
                            if (a.large && o) return t;
                            if (a.medium && i) return t;
                            if (a.small && c) return t;
                            if (a.extraSmall && l) return t;
                        } else {
                            if (a.extraLargeWidth && _) return n(t, a, v);
                            if (a.largeWidth && m) return n(t, a, v);
                            if (a.mediumWidth && d) return n(t, a, v);
                            if (a.smallWidth && f) return n(t, a, v);
                            if (a.extraSmallWidth && p) return n(t, a, v);
                            if (
                                !(
                                    a.extraLargeWidth ||
                                    a.largeWidth ||
                                    a.mediumWidth ||
                                    a.smallWidth ||
                                    a.extraSmallWidth
                                )
                            ) {
                                if (a.extraLargeHeight && h) return t;
                                if (a.largeHeight && F) return t;
                                if (a.mediumHeight && A) return t;
                                if (a.smallHeight && b) return t;
                                if (a.extraSmallHeight && D) return t;
                            }
                        }
                        return null;
                    };
                (f.defaultProps = {
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
                    (0, u.memo)(f);
                const p = ({ children: e }) => {
                    const t = (0, u.useContext)(E),
                        a = (0, u.useState)(t),
                        n = a[0],
                        i = a[1],
                        l = (0, u.useCallback)((e, t) => {
                            const a = s.O.view.pxToRem(e),
                                u = s.O.view.pxToRem(t);
                            i(Object.assign({ width: a, height: u }, c(a, u, o)));
                        }, []),
                        _ = (0, u.useCallback)(() => {
                            const e = s.O.client.getSize('px');
                            l(e.width, e.height);
                        }, [l]);
                    ((e) => {
                        const t = (0, u.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    })(() => {
                        s.O.client.events.on('clientResized', l), s.O.client.events.on('self.onScaleUpdated', _);
                    }),
                        (0, u.useEffect)(
                            () => () => {
                                s.O.client.events.off('clientResized', l),
                                    s.O.client.events.off('self.onScaleUpdated', _);
                            },
                            [l, _],
                        );
                    const m = (0, u.useMemo)(() => Object.assign({}, n), [n]);
                    return r().createElement(E.Provider, { value: m }, e);
                };
                var h = a(483),
                    F = a.n(h),
                    A = a(926),
                    b = a.n(A);
                let D, v, C;
                !(function (e) {
                    (e[(e.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = o.small.width)] = 'Small'),
                        (e[(e.Medium = o.medium.width)] = 'Medium'),
                        (e[(e.Large = o.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge');
                })(D || (D = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = o.small.width)] = 'Small'),
                            (e[(e.Medium = o.medium.width)] = 'Medium'),
                            (e[(e.Large = o.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge');
                    })(v || (v = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = o.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = o.small.height)] = 'Small'),
                            (e[(e.Medium = o.medium.height)] = 'Medium'),
                            (e[(e.Large = o.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = o.extraLarge.height)] = 'ExtraLarge');
                    })(C || (C = {}));
                const B = () => {
                        const e = (0, u.useContext)(E),
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
                            n = ((e) => {
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
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return C.ExtraLarge;
                                    case e.largeHeight:
                                        return C.Large;
                                    case e.mediumHeight:
                                        return C.Medium;
                                    case e.smallHeight:
                                        return C.Small;
                                    case e.extraSmallHeight:
                                        return C.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), C.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: r, mediaWidth: n, mediaHeight: s, remScreenWidth: t, remScreenHeight: a };
                    },
                    y = ['children', 'className'];
                function M() {
                    return (
                        (M =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        M.apply(this, arguments)
                    );
                }
                const w = {
                        [v.ExtraSmall]: '',
                        [v.Small]: b().SMALL_WIDTH,
                        [v.Medium]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH}`,
                        [v.Large]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH} ${b().LARGE_WIDTH}`,
                        [v.ExtraLarge]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH} ${b().LARGE_WIDTH} ${b().EXTRA_LARGE_WIDTH}`,
                    },
                    S = {
                        [C.ExtraSmall]: '',
                        [C.Small]: b().SMALL_HEIGHT,
                        [C.Medium]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT}`,
                        [C.Large]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT} ${b().LARGE_HEIGHT}`,
                        [C.ExtraLarge]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT} ${b().LARGE_HEIGHT} ${b().EXTRA_LARGE_HEIGHT}`,
                    },
                    N = {
                        [D.ExtraSmall]: '',
                        [D.Small]: b().SMALL,
                        [D.Medium]: `${b().SMALL} ${b().MEDIUM}`,
                        [D.Large]: `${b().SMALL} ${b().MEDIUM} ${b().LARGE}`,
                        [D.ExtraLarge]: `${b().SMALL} ${b().MEDIUM} ${b().LARGE} ${b().EXTRA_LARGE}`,
                    },
                    P = (e) => {
                        let t = e.children,
                            a = e.className,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    u,
                                    r = {},
                                    n = Object.keys(e);
                                for (u = 0; u < n.length; u++) (a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, y);
                        const n = B(),
                            s = n.mediaWidth,
                            o = n.mediaHeight,
                            i = n.mediaSize;
                        return r().createElement('div', M({ className: F()(a, w[s], S[o], N[i]) }, u), t);
                    },
                    x = ['children'],
                    T = (e) => {
                        let t = e.children,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    u,
                                    r = {},
                                    n = Object.keys(e);
                                for (u = 0; u < n.length; u++) (a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, x);
                        return r().createElement(p, null, r().createElement(P, a, t));
                    };
                var O = a(493),
                    k = a.n(O);
                let I, L;
                !(function (e) {
                    (e.Main = 'main'),
                        (e.Artefact = 'artefact'),
                        (e.Uhura = 'uhura'),
                        (e.Kirk = 'kirk'),
                        (e.Spock = 'spock'),
                        (e.MissionBrief = 'mission_brief'),
                        (e.Queue = 'queue'),
                        (e.Research = 'research');
                })(I || (I = {})),
                    (function (e) {
                        (e.LowRisk = 'lowRisk'),
                            (e.MediumRisk = 'mediumRisk'),
                            (e.HighRisk = 'highRisk'),
                            (e.VeryHighRisk = 'veryHighRisk');
                    })(L || (L = {}));
                var H = a(521),
                    U = a(916);
                const G = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function j(e = H.n.NONE, t = G, a = !1, r = !1) {
                    (0, u.useEffect)(() => {
                        if (e !== H.n.NONE)
                            return (
                                window.addEventListener('keydown', u, a),
                                () => {
                                    window.removeEventListener('keydown', u, a);
                                }
                            );
                        function u(u) {
                            if (u.keyCode === e) {
                                if (!r && s.O.view.isEventHandled()) return;
                                s.O.view.setEventHandled(), t(u), a && u.stopPropagation();
                            }
                        }
                    }, [t, e, a, r]);
                }
                function W(e) {
                    j(H.n.ESCAPE, e);
                }
                var X = a(282);
                const $ = {
                        positions: [],
                        focus: { type: 'zoomToCover', id: 'initialFocus' },
                        stageTransforms: {
                            translateX: 0,
                            translateY: 0,
                            translateDelay: 0,
                            translateDuration: 0,
                            transformOriginX: 0,
                            transformOriginY: 0,
                            transformOriginDelay: 0,
                            transformOriginDuration: 0,
                            scale: 1,
                            scaleDelay: 0,
                            scaleDuration: 0,
                        },
                        parallaxFocalDistance: 0,
                        parallaxFocalBackgroundDepth: 10,
                        parallaxFocalForegroundDepth: 0,
                        parallaxFocalForegroundLimit: 2,
                        stageTransitionDurationModifier: 1,
                        blurIntensity: 0,
                        stage: { width: -1, height: -1 },
                        isZoomDisabled: !1,
                    },
                    z = { left: 0, top: 0, width: -1, height: -1 },
                    V = (e) => {
                        if (!e) return z;
                        const t = e.getBoundingClientRect();
                        return { width: t.width, height: t.height, left: t.left, top: t.top };
                    },
                    q = (e, t = !1) => {
                        var a, u;
                        if (void 0 === e.stage || void 0 === e.focus) return e;
                        const r = e.positions.find((t) => {
                            var a;
                            return t.id === (null == (a = e.focus) ? void 0 : a.id);
                        });
                        if (!r) return e;
                        if (!e.frameElement || !e.stage) return e;
                        const n = 'zoomToContain' === e.focus.type ? Math.min : Math.max,
                            s = V(e.frameElement),
                            o = ((e, t) => {
                                if (
                                    void 0 === e.width ||
                                    void 0 === e.height ||
                                    (void 0 === e.left && void 0 === e.right) ||
                                    (void 0 === e.top && void 0 === e.bottom)
                                )
                                    return console.warn('position or stagePosition invalid', e, t), z;
                                const a = e.width,
                                    u = e.height;
                                return {
                                    left: void 0 !== e.left ? e.left : t.width - e.right - e.width,
                                    top: void 0 !== e.top ? e.top : t.height - e.bottom - e.height,
                                    width: a,
                                    height: u,
                                };
                            })(r, e.stage);
                        if (-1 === o.width) return console.warn("position '" + r.id + "' ref is not available.", o), e;
                        const i = n(s.width / o.width, s.height / o.height),
                            c = -o.left + s.width / 2 - o.width / 2,
                            l = -o.top + s.height / 2 - o.height / 2,
                            _ = s.width / 2 - c,
                            m = s.height / 2 - l,
                            d = t
                                ? {
                                      scaleDelay: 0,
                                      scaleDuration: 0,
                                      translateDelay: 0,
                                      translateDuration: 0,
                                      transformOriginDelay: 0,
                                      transformOriginDuration: 0,
                                  }
                                : ((e, t, a = 1) => {
                                      const u = e / t;
                                      if (u > 0.75 && u < 1.25)
                                          return {
                                              scaleDelay: 0,
                                              scaleDuration: a,
                                              translateDelay: 0,
                                              translateDuration: a,
                                              transformOriginDelay: 0,
                                              transformOriginDuration: a,
                                          };
                                      const r = a / 2,
                                          n = a + r / 2;
                                      return e < t
                                          ? {
                                                scaleDelay: n - r,
                                                scaleDuration: n,
                                                translateDelay: 0,
                                                translateDuration: n,
                                                transformOriginDelay: 0,
                                                transformOriginDuration: n,
                                            }
                                          : {
                                                scaleDelay: 0,
                                                scaleDuration: n,
                                                translateDelay: n - r,
                                                translateDuration: n,
                                                transformOriginDelay: n - r,
                                                transformOriginDuration: n,
                                            };
                                  })(e.stageTransforms.scale, i, e.stageTransitionDurationModifier);
                        return Object.assign({}, e, {
                            stageTransforms: Object.assign(
                                {},
                                e.stageTransforms,
                                { translateX: c, translateY: l, transformOriginX: _, transformOriginY: m, scale: i },
                                d,
                            ),
                            parallaxFocalDistance:
                                null != (a = null != (u = r.distance) ? u : e.parallaxFocalDistance) ? a : 0,
                        });
                    },
                    Y = (e, t) => {
                        const a = V(e);
                        return null === a
                            ? (console.warn('frame ref is not available.', e),
                              {
                                  transformOriginX: t.stageTransforms.transformOriginX,
                                  transformOriginY: t.stageTransforms.transformOriginY,
                              })
                            : {
                                  transformOriginX: a.width / 2 - t.stageTransforms.translateX,
                                  transformOriginY: a.height / 2 - t.stageTransforms.translateY,
                              };
                    },
                    K = (e, t) => {
                        if ('toggleZoom' === t.type) return Object.assign({}, e, { isZoomDisabled: !e.isZoomDisabled });
                        if ('resetZoom' === t.type)
                            return void 0 === e.frameElement
                                ? (console.warn('frame ref is not available.', e.frameElement), e)
                                : Object.assign({}, e, {
                                      focus: void 0,
                                      stageTransforms: Object.assign({}, $.stageTransforms, Y(e.frameElement, e)),
                                  });
                        if ('updateStage' === t.type)
                            return q(
                                Object.assign({}, e, {
                                    stageTransforms: Object.assign({}, e.stageTransforms, Y(t.frameElement, e)),
                                    frameElement: t.frameElement,
                                    stage: { width: t.stageWidth, height: t.stageHeight },
                                }),
                                !0,
                            );
                        if ('updatePosition' === t.type) {
                            const a = e.positions.filter((e) => e.id !== t.position.id);
                            return a.push(t.position), q(Object.assign({}, e, { positions: a }));
                        }
                        const a = e.frameElement;
                        if ('zoomToContain' === t.type || 'zoomToCover' === t.type) {
                            const a = t.id,
                                u = t.parallaxFocalBackgroundDepth,
                                r = void 0 === u ? $.parallaxFocalBackgroundDepth : u,
                                n = t.parallaxFocalForegroundDepth,
                                s = void 0 === n ? $.parallaxFocalForegroundDepth : n,
                                o = t.parallaxFocalForegroundLimit,
                                i = void 0 === o ? $.parallaxFocalForegroundLimit : o,
                                c = t.blurIntensity,
                                l = void 0 === c ? $.blurIntensity : c,
                                _ = t.stageTransitionDurationModifier,
                                m = void 0 === _ ? $.stageTransitionDurationModifier : _,
                                d = Object.assign({}, e, {
                                    parallaxFocalBackgroundDepth: r,
                                    parallaxFocalForegroundDepth: s,
                                    parallaxFocalForegroundLimit: i,
                                    blurIntensity: l,
                                    stageTransitionDurationModifier: m,
                                    focus: { id: a, type: t.type },
                                });
                            return q(d);
                        }
                        return a
                            ? e.stage
                                ? 'zoom' === t.type
                                    ? Object.assign({}, e, {
                                          focus: void 0,
                                          stageTransforms: Object.assign({}, e.stageTransforms, Y(a, e), {
                                              scale: t.isRelative ? e.stageTransforms.scale * (1 + t.scale) : t.scale,
                                          }),
                                      })
                                    : e
                                : (console.warn(
                                      "cannot process action '" + t.type + "' because stage is not initialized",
                                  ),
                                  e)
                            : (console.warn('frame is not initialized'), e);
                    };
                function Q() {}
                function Z(e) {
                    return e;
                }
                function J() {
                    return !1;
                }
                console.log;
                const ee = Object.assign({}, $, { dispatch: Q }),
                    te = (0, u.createContext)(ee),
                    ae = () => (0, u.useContext)(te),
                    ue = ({ children: e }) => {
                        const t = (0, u.useReducer)(K, Object.assign({}, $)),
                            a = t[0],
                            n = t[1];
                        return r().createElement(te.Provider, { value: Object.assign({}, a, { dispatch: n }) }, e);
                    },
                    re = (e, t, a, u, r) => (e <= t ? u : e >= a ? r : ((e - t) / (a - t)) * (r - u) + u),
                    ne = (e, t, a, u = 0) => `${e} ${Math.floor(t)}ms ${a} ${Math.floor(u)}ms`,
                    se = [
                        'id',
                        'top',
                        'right',
                        'bottom',
                        'left',
                        'width',
                        'height',
                        'distance',
                        'style',
                        'showOnlyWhenInFocus',
                        'showOnlyWhenFocusTarget',
                        'className',
                        'children',
                    ];
                function oe() {
                    return (
                        (oe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        oe.apply(this, arguments)
                    );
                }
                const ie = r().memo((e) => {
                        let t = e.id,
                            a = e.top,
                            n = e.right,
                            s = e.bottom,
                            o = e.left,
                            i = e.width,
                            c = e.height,
                            l = e.distance,
                            _ = void 0 === l ? 0 : l,
                            m = e.style,
                            d = e.showOnlyWhenInFocus,
                            E = e.showOnlyWhenFocusTarget,
                            g = e.className,
                            f = e.children,
                            p = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    u,
                                    r = {},
                                    n = Object.keys(e);
                                for (u = 0; u < n.length; u++) (a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, se);
                        const h = ae(),
                            A = h.dispatch,
                            b = h.parallaxFocalDistance,
                            D = h.parallaxFocalBackgroundDepth,
                            v = h.parallaxFocalForegroundDepth,
                            C = h.parallaxFocalForegroundLimit,
                            B = h.blurIntensity,
                            y = h.stageTransforms,
                            R = h.focus,
                            M = (0, u.useState)(null),
                            w = M[0],
                            S = M[1],
                            N = (0, u.useCallback)((e) => {
                                S(e);
                            }, []),
                            P = (null == R ? void 0 : R.id) === t,
                            x = E && !P;
                        (0, u.useEffect)(() => {
                            w &&
                                A({
                                    type: 'updatePosition',
                                    position: {
                                        element: w,
                                        id: t,
                                        top: a,
                                        right: n,
                                        bottom: s,
                                        left: o,
                                        width: i,
                                        height: c,
                                        distance: _,
                                    },
                                });
                        }, [A, w, t, a, n, s, o, i, c, _]);
                        const T = r().useMemo(() => {
                            const e = b - _,
                                t = x || (d && 0 !== e),
                                u = e > 0 ? Math.pow(re(e, v, C, 1, 0), 2) : 1,
                                r = t ? 0 : u,
                                l = (e > 0 ? 4 : 0.5) * B,
                                E = e > 0 ? re(e, v, C, 0, C * l) : re(Math.abs(e), D, 10, 0, 10 * l),
                                g = e / 10,
                                f = 'calc(var(--parallaxShiftX) * ' + g + ')',
                                p = 'calc(var(--parallaxShiftY) * ' + g + ')',
                                h = 'ease',
                                F = [
                                    ne('transform', 50, h, 0),
                                    ne('opacity', 1e3 * y.scaleDuration, h, 1e3 * y.scaleDelay),
                                    ne('filter', 1e3 * y.scaleDuration, h, 1e3 * y.scaleDelay),
                                ].join(', ');
                            return Object.assign({}, m, {
                                top: a,
                                right: n,
                                bottom: s,
                                left: o,
                                width: i,
                                height: c,
                                opacity: r,
                                pointerEvents: r > 0.5 ? 'all' : void 0,
                                transition: F,
                                transform: 'translate(' + f + ', ' + p + ')',
                                filter: 'blur(' + Math.floor(E) + 'px)' + (m && m.filter ? ' ' + m.filter : ''),
                            });
                        }, [a, n, s, o, i, c, _, m, b, D, v, C, y.scaleDelay, y.scaleDuration, B, d, x]);
                        return r().createElement(
                            'div',
                            oe({ ref: N }, p, { className: F()('Position-' + t, 'Position_base_49', g), style: T }),
                            f,
                        );
                    }),
                    ce = { base: 'GlitchWave_base_eb', scans: 'GlitchWave_scans_c6', content: 'GlitchWave_content_d6' },
                    le = r().memo(
                        ({
                            className: e,
                            scanCount: t = 10,
                            fps: a = 30,
                            frames: n = 30,
                            loop: s = !0,
                            delayFramesBeforeLoop: o = s ? 30 : 0,
                            offsetX: i = 2,
                            shadowOffsetX: c = i,
                            maxDistance: l = 3,
                            opacity: _ = 1,
                            children: m,
                        }) => {
                            const d = (0, u.useState)(0),
                                E = d[0],
                                g = d[1],
                                f = (0, u.useRef)(0);
                            (0, u.useEffect)(() => {
                                const e = setInterval(
                                    () => (
                                        (f.current = requestAnimationFrame(() => {
                                            g((t) => {
                                                const a = t + 1;
                                                return a > n + o ? (s ? t % (n + o) : (clearInterval(e), t)) : a;
                                            });
                                        })),
                                        () => {
                                            cancelAnimationFrame(f.current);
                                        }
                                    ),
                                    Math.floor(1e3 / a),
                                );
                                return () => {
                                    cancelAnimationFrame(f.current), clearInterval(e);
                                };
                            }, [n, a, s, o]);
                            const p = (h = Math.min(E, n) / n) * (3 * h - h * h * h * 2);
                            var h;
                            const A = 100 / t,
                                b = Math.floor((t + 2 * l) * p) - l;
                            return r().createElement(
                                'div',
                                { className: F()(e, ce.base + e), style: { opacity: _ } },
                                r().createElement(
                                    'div',
                                    { className: ce.scans },
                                    Array(t)
                                        .fill(0)
                                        .map((e, a) => {
                                            const u = Math.abs(a - b),
                                                n = u < l ? (l - u) * i : 0,
                                                s = u < l ? (l - u) * c : 0;
                                            return r().createElement(
                                                'div',
                                                {
                                                    key: a,
                                                    style: {
                                                        height: A + '%',
                                                        transform: 'translate(' + n + 'px,0px)',
                                                        filter:
                                                            0 !== n
                                                                ? 'drop-shadow(' +
                                                                  s +
                                                                  'px 0 rgba(' +
                                                                  (n > 0 ? '179,246,254,' : '3,255,255,') +
                                                                  Math.abs(n / (l * i)) +
                                                                  '))'
                                                                : 'none',
                                                        borderColor: a === u ? 'red' : 'green',
                                                        width: '100%',
                                                        overflow: 'hidden',
                                                    },
                                                },
                                                r().createElement(
                                                    'div',
                                                    {
                                                        className: ce.scanContent,
                                                        style: { position: 'relative', top: -A * a * t + '%' },
                                                    },
                                                    m,
                                                ),
                                            );
                                        }),
                                ),
                                r().createElement('div', { className: ce.content }, m),
                            );
                        },
                    ),
                    _e = ['className', 'waves', 'children'],
                    me = ['children', 'className'];
                function de() {
                    return (
                        (de =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        de.apply(this, arguments)
                    );
                }
                function Ee(e, t) {
                    if (null == e) return {};
                    var a,
                        u,
                        r = {},
                        n = Object.keys(e);
                    for (u = 0; u < n.length; u++) (a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                    return r;
                }
                const ge = r().memo((e) => {
                    let t = e.className,
                        a = e.waves,
                        u = void 0 === a ? [] : a,
                        n = e.children,
                        s = Ee(e, _e);
                    const o = Math.ceil((1 / u.length) * 100) / 100;
                    return r().createElement(
                        'div',
                        de({ className: F()('GlitchMultiWave_base_a2', t) }, s),
                        u.map((e, t) => {
                            let a = e.children,
                                u = void 0 === a ? n : a,
                                s = e.className,
                                i = Ee(e, me);
                            return r().createElement(
                                le,
                                de(
                                    { className: F()(s, t > 0 && 'GlitchMultiWave_absolute_65'), key: t, opacity: o },
                                    i,
                                ),
                                u,
                            );
                        }),
                        0 === u.length && n,
                    );
                });
                function fe() {
                    return (
                        (fe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        fe.apply(this, arguments)
                    );
                }
                const pe = ({ className: e, style: t, count: a, getParticleProps: n }) => {
                        const s = (0, u.useMemo)(
                            () =>
                                Array(a)
                                    .fill(0)
                                    .map((e, t) => r().createElement('div', fe({ key: t }, n(t, a)))),
                            [a, n],
                        );
                        return r().createElement('div', { className: e, style: t }, s);
                    },
                    he = ['ConsoleParticles_float1_e4', 'ConsoleParticles_float2_36', 'ConsoleParticles_float3_b2'],
                    Fe = (e, t) => {
                        return {
                            className: 'ConsoleParticles_particle_b2',
                            style: {
                                width: 3,
                                height: 3,
                                left: `${Math.round(100 * ((a = e / t), -(Math.cos(Math.PI * a) - 1) / 2))}%`,
                                animationDelay: 5e3 * -Math.random() + 'ms',
                                animationName: he[Math.floor(Math.random() * he.length)],
                            },
                        };
                        var a;
                    },
                    Ae = r().memo(({ className: e, count: t = 10 }) =>
                        r().createElement(pe, {
                            count: t,
                            getParticleProps: Fe,
                            className: F()('ConsoleParticles_base_13', e),
                        }),
                    ),
                    be = ['style'],
                    De = [
                        'not',
                        'focusedOnTarget',
                        'atDistance',
                        'style',
                        'children',
                        'orCloser',
                        'orFurther',
                        'className',
                    ];
                function ve() {
                    return (
                        (ve =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        ve.apply(this, arguments)
                    );
                }
                function Ce(e, t) {
                    if (null == e) return {};
                    var a,
                        u,
                        r = {},
                        n = Object.keys(e);
                    for (u = 0; u < n.length; u++) (a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                    return r;
                }
                const Be = (e) => {
                        let t = e.not,
                            a = e.focusedOnTarget,
                            u = e.atDistance,
                            n = e.style,
                            s = e.children,
                            o = e.orCloser,
                            i = e.orFurther,
                            c = e.className,
                            l = Ce(e, De);
                        const _ = ae(),
                            m = _.parallaxFocalDistance,
                            d = ((e) => {
                                let t = e.style;
                                const a = (({
                                    not: e = !1,
                                    orFurther: t = !1,
                                    orCloser: a = !1,
                                    focusedOnTarget: u,
                                    atDistance: r,
                                    focus: n,
                                    parallaxFocalDistance: s,
                                }) => {
                                    const o = e ? 1 : 0,
                                        i = e ? 0 : 1;
                                    if (u && u !== (null == n ? void 0 : n.id)) return o;
                                    if (void 0 !== r) {
                                        const e = Array.isArray(r) ? r : [r, r],
                                            u = e[0],
                                            n = e[1];
                                        if ((s < u && !a) || (s > n && !t)) return o;
                                    }
                                    return i;
                                })(Ce(e, be));
                                return Object.assign({}, t, { opacity: a, pointerEvents: a > 0.5 ? void 0 : 'none' });
                            })({
                                not: t,
                                atDistance: u,
                                orCloser: o,
                                orFurther: i,
                                focusedOnTarget: a,
                                focus: _.focus,
                                parallaxFocalDistance: m,
                                style: n,
                            });
                        return r().createElement(
                            'div',
                            ve({}, l, { className: F()('DisplayWhen_base_d4', c), style: d }),
                            s,
                        );
                    },
                    ye = (e) => {
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
                const Re = [
                    'className',
                    'children',
                    'style',
                    'stageWidth',
                    'stageHeight',
                    'throttleInterval',
                    'maxHorizontalParallaxShift',
                    'maxVerticalParallaxShift',
                ];
                function Me() {
                    return (
                        (Me =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        Me.apply(this, arguments)
                    );
                }
                const we = (e, t) => {
                        const a = Math.pow(10, t);
                        return Math.round(e * a) / a;
                    },
                    Se = (e) => {
                        let t = e.className,
                            a = e.children,
                            n = e.style,
                            s = e.stageWidth,
                            o = e.stageHeight,
                            i = e.throttleInterval,
                            c = void 0 === i ? 25 : i,
                            l = e.maxHorizontalParallaxShift,
                            _ = void 0 === l ? 7 : l,
                            m = e.maxVerticalParallaxShift,
                            d = void 0 === m ? 7 : m,
                            E = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    u,
                                    r = {},
                                    n = Object.keys(e);
                                for (u = 0; u < n.length; u++) (a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, Re);
                        const g = (0, u.useState)({ parallaxShiftX: 0, parallaxShiftY: 0 }),
                            f = g[0],
                            p = f.parallaxShiftX,
                            h = f.parallaxShiftY,
                            A = g[1],
                            b = (0, u.useState)({ frameWidth: -1, frameHeight: -1, frameLeft: -1, frameTop: -1 }),
                            D = b[0],
                            v = D.frameWidth,
                            C = D.frameHeight,
                            B = D.frameLeft,
                            y = D.frameTop,
                            R = b[1],
                            M = (0, u.useState)(null),
                            w = M[0],
                            S = M[1],
                            N = (0, u.useCallback)((e) => S(e), []),
                            P = ae(),
                            x = P.stageTransforms,
                            T = P.isZoomDisabled,
                            O = P.parallaxFocalDistance,
                            k = P.dispatch;
                        var I, L;
                        (I = () => {
                            if (w) {
                                var e, t, a, u;
                                const r = null == w ? void 0 : w.getBoundingClientRect();
                                R({
                                    frameWidth: null != (e = null == r ? void 0 : r.width) ? e : -1,
                                    frameHeight: null != (t = null == r ? void 0 : r.height) ? t : -1,
                                    frameTop: null != (a = null == r ? void 0 : r.top) ? a : 0,
                                    frameLeft: null != (u = null == r ? void 0 : r.left) ? u : 0,
                                });
                            }
                        }),
                            (L = [w]),
                            (0, u.useEffect)(() => {
                                let e = () => {};
                                const t = () => {
                                    e(), (e = ye(I));
                                };
                                return (
                                    window.addEventListener('resize', t),
                                    () => {
                                        e(), window.removeEventListener('resize', t);
                                    }
                                );
                            }, L),
                            ((e, t) => {
                                (0, u.useEffect)(() => {
                                    let e = null;
                                    return (
                                        (e = requestAnimationFrame(() => {
                                            e = requestAnimationFrame(() => {
                                                (e = null),
                                                    (() => {
                                                        if (w) {
                                                            var e, t, a, u;
                                                            const r = null == w ? void 0 : w.getBoundingClientRect();
                                                            R({
                                                                frameWidth:
                                                                    null != (e = null == r ? void 0 : r.width) ? e : -1,
                                                                frameHeight:
                                                                    null != (t = null == r ? void 0 : r.height)
                                                                        ? t
                                                                        : -1,
                                                                frameTop:
                                                                    null != (a = null == r ? void 0 : r.top) ? a : 0,
                                                                frameLeft:
                                                                    null != (u = null == r ? void 0 : r.left) ? u : 0,
                                                            });
                                                        }
                                                    })();
                                            });
                                        })),
                                        () => {
                                            null !== e && cancelAnimationFrame(e);
                                        }
                                    );
                                }, t);
                            })(0, [w]),
                            (0, u.useEffect)(() => {
                                if (w) {
                                    var e, t, a, u;
                                    const r = null == w ? void 0 : w.getBoundingClientRect();
                                    R({
                                        frameWidth: null != (e = null == r ? void 0 : r.width) ? e : -1,
                                        frameHeight: null != (t = null == r ? void 0 : r.height) ? t : -1,
                                        frameTop: null != (a = null == r ? void 0 : r.top) ? a : 0,
                                        frameLeft: null != (u = null == r ? void 0 : r.left) ? u : 0,
                                    });
                                }
                            }, [w]),
                            (0, u.useEffect)(() => {
                                const e = () => {
                                    w && k({ type: 'updateStage', frameElement: w, stageWidth: s, stageHeight: o });
                                };
                                return (
                                    e(),
                                    engine.on('clientResized', e),
                                    () => {
                                        engine.off('clientResized', e);
                                    }
                                );
                            }, [k, w, v, C, B, y, s, o]);
                        const H = (function (e, t, a) {
                                const r = (0, u.useMemo)(
                                    () =>
                                        (function (e, t, a, u) {
                                            let r,
                                                n = !1,
                                                s = 0;
                                            function o() {
                                                r && clearTimeout(r);
                                            }
                                            function i(...i) {
                                                const c = this,
                                                    l = Date.now() - s;
                                                function _() {
                                                    (s = Date.now()), a.apply(c, i);
                                                }
                                                n ||
                                                    (u && !r && _(),
                                                    o(),
                                                    void 0 === u && l > e
                                                        ? _()
                                                        : !0 !== t &&
                                                          (r = setTimeout(
                                                              u
                                                                  ? function () {
                                                                        r = void 0;
                                                                    }
                                                                  : _,
                                                              void 0 === u ? e - l : e,
                                                          )));
                                            }
                                            return (
                                                'boolean' != typeof t && ((u = a), (a = t), (t = void 0)),
                                                (i.cancel = function () {
                                                    o(), (n = !0);
                                                }),
                                                i
                                            );
                                        })(a, e),
                                    t,
                                );
                                return (0, u.useEffect)(() => r.cancel, [r]), r;
                            })(
                                ({ clientX: e, clientY: t }) => {
                                    if (e && t) {
                                        const a = ((e - B - v / 2) / (v / 2)) * _,
                                            u = ((t - y - C / 2) / (C / 2)) * d;
                                        A((e) => ({
                                            parallaxShiftX: (e.parallaxShiftX + a) / 2,
                                            parallaxShiftY: (e.parallaxShiftY + u) / 2,
                                        }));
                                    }
                                },
                                [B, y, v, C, _, d],
                                c,
                            ),
                            U = (0, u.useCallback)(
                                ({ clientX: e, clientY: t }) => {
                                    (_ > 0 || d > 0) && H({ clientX: e, clientY: t });
                                },
                                [H, _, d],
                            ),
                            G = r().useMemo(
                                () =>
                                    Object.assign({}, n, {
                                        '--parallaxShiftX': we(p, 2) + 'px',
                                        '--parallaxShiftY': we(h, 2) + 'px',
                                        '--parallaxFocalDistance': O,
                                    }),
                                [p, h, O, n],
                            ),
                            j = r().useMemo(
                                () =>
                                    ((
                                        e,
                                        t,
                                        {
                                            scale: a,
                                            translateX: u,
                                            translateY: r,
                                            transformOriginX: n,
                                            transformOriginY: s,
                                            scaleDelay: o,
                                            scaleDuration: i,
                                            translateDelay: c,
                                            translateDuration: l,
                                            transformOriginDelay: _,
                                            transformOriginDuration: m,
                                        },
                                        d,
                                    ) => {
                                        const E = d ? 1 : Math.floor(1e3 * a) / 1e3,
                                            g = 'ease',
                                            f = [
                                                ne('transform-origin', 1e3 * m, g, 1e3 * _),
                                                ne('left', 1e3 * l, g, 1e3 * c),
                                                ne('top', 1e3 * l, g, 1e3 * c),
                                                ne('transform', 1e3 * i, g, 1e3 * o),
                                            ].join(', ');
                                        return {
                                            transformOrigin: Math.floor(n) + 'px ' + Math.floor(s) + 'px',
                                            perspectiveOrigin: Math.floor(n) + 'px ' + Math.floor(s) + 'px',
                                            left: Math.floor(u) + 'px',
                                            top: Math.floor(r) + 'px',
                                            transform: 'scale(' + E + ')',
                                            transition: f,
                                            width: e,
                                            height: t,
                                        };
                                    })(s, o, x, T),
                                [s, o, x, T],
                            );
                        return r().createElement(
                            'div',
                            Me({ ref: N, onMouseMove: U, className: F()(t, 'Stage_base_a7'), style: G }, E),
                            r().createElement('div', { style: j, className: 'Stage_stage_08' }, a),
                        );
                    },
                    Ne = {
                        cff_splash: 'MainStage_cff_splash_e3',
                        cff_splash_small: 'MainStage_cff_splash_small_b3',
                        cff_title: 'MainStage_cff_title_62',
                        cff_heading: 'MainStage_cff_heading_26',
                        cff_heading_small: 'MainStage_cff_heading_small_c3',
                        cff_body: 'MainStage_cff_body_a1',
                        cff_emphasis: 'MainStage_cff_emphasis_dc',
                        cff_emphasis_small: 'MainStage_cff_emphasis_small_44',
                        cff_body_small: 'MainStage_cff_body_small_50',
                        cff_player: 'MainStage_cff_player_16',
                        cff_decorative_title: 'MainStage_cff_decorative_title_c3',
                        cff_decorative_body: 'MainStage_cff_decorative_body_98',
                        boxImage: 'MainStage_boxImage_2b',
                        transparent: 'MainStage_transparent_bd',
                        fade_in: 'MainStage_fade_in_11',
                        fade_from_left: 'MainStage_fade_from_left_0b',
                        fade_from_bottom: 'MainStage_fade_from_bottom_e8',
                        fade_out: 'MainStage_fade_out_29',
                        fade_to_left: 'MainStage_fade_to_left_00',
                        fade_to_bottom: 'MainStage_fade_to_bottom_a9',
                        delay_100: 'MainStage_delay_100_58',
                        delay_200: 'MainStage_delay_200_9c',
                        delay_300: 'MainStage_delay_300_56',
                        delay_400: 'MainStage_delay_400_33',
                        delay_500: 'MainStage_delay_500_75',
                        delay_600: 'MainStage_delay_600_99',
                        delay_700: 'MainStage_delay_700_af',
                        delay_800: 'MainStage_delay_800_da',
                        delay_1000: 'MainStage_delay_1000_19',
                        delay_1250: 'MainStage_delay_1250_6c',
                        delay_1500: 'MainStage_delay_1500_df',
                        delay_3000: 'MainStage_delay_3000_7f',
                        glitch: 'MainStage_glitch_38',
                        CFF_MAIN: 'MainStage_CFF_MAIN_e7',
                        CFF_SUPPORT: 'MainStage_CFF_SUPPORT_c6',
                        CFF_DONE: 'MainStage_CFF_DONE_a3',
                        CFF_PHASE: 'MainStage_CFF_PHASE_ea',
                        CFF_IMPORTANT: 'MainStage_CFF_IMPORTANT_f2',
                        CFF_HERO: 'MainStage_CFF_HERO_3d',
                        CFF_ATTENTION: 'MainStage_CFF_ATTENTION_94',
                        CFF_BACKGROUND: 'MainStage_CFF_BACKGROUND_15',
                        CFF_MINE: 'MainStage_CFF_MINE_74',
                        CFF_VORTEX: 'MainStage_CFF_VORTEX_dd',
                        CFF_BARRIER: 'MainStage_CFF_BARRIER_f9',
                        CFF_JUMP: 'MainStage_CFF_JUMP_f2',
                        base: 'MainStage_base_3c',
                        base__loaded: 'MainStage_base__loaded_b6',
                        space: 'MainStage_space_e1',
                        interior: 'MainStage_interior_64',
                        interior__ready_for_research: 'MainStage_interior__ready_for_research_e5',
                        console: 'MainStage_console_e6',
                        console__ready_for_research: 'MainStage_console__ready_for_research_a1',
                        console_light: 'MainStage_console_light_1f',
                        artefactLight: 'MainStage_artefactLight_02',
                        artefactLight2: 'MainStage_artefactLight2_50',
                        flicker_appear: 'MainStage_flicker_appear_57',
                        corona: 'MainStage_corona_0d',
                        corona_image: 'MainStage_corona_image_f3',
                        rotate: 'MainStage_rotate_f7',
                        artefact: 'MainStage_artefact_43',
                        artefact__researched: 'MainStage_artefact__researched_ff',
                        none: 'MainStage_none_a5',
                        artefact__over500k: 'MainStage_artefact__over500k_df',
                        artefact_elements: 'MainStage_artefact_elements_83',
                        artefact_open: 'MainStage_artefact_open_f2',
                        artefact_veins: 'MainStage_artefact_veins_a6',
                        artefact_veins__appear: 'MainStage_artefact_veins__appear_07',
                        pulse: 'MainStage_pulse_3b',
                        artefact_spark: 'MainStage_artefact_spark_f0',
                        artefact_spark__appear: 'MainStage_artefact_spark__appear_a7',
                        sparkPulse: 'MainStage_sparkPulse_3f',
                        artefact_shard: 'MainStage_artefact_shard_77',
                        artefact_shard__appear: 'MainStage_artefact_shard__appear_b9',
                        artefactRoute: 'MainStage_artefactRoute_ff',
                        artefactRouteShading: 'MainStage_artefactRouteShading_da',
                        artefactRouteShading_lowSpecBG: 'MainStage_artefactRouteShading_lowSpecBG_a4',
                        researchRouteShading: 'MainStage_researchRouteShading_5e',
                        researchRouteShading_lowSpecBG: 'MainStage_researchRouteShading_lowSpecBG_e0',
                        mainRouteShading: 'MainStage_mainRouteShading_30',
                        artefactHoverArea: 'MainStage_artefactHoverArea_bd',
                        consoleParticles: 'MainStage_consoleParticles_ce',
                        artefactLight_effect: 'MainStage_artefactLight_effect_ce',
                        lightEffect: 'MainStage_lightEffect_86',
                        artefactLight_sideLeft: 'MainStage_artefactLight_sideLeft_bc',
                        artefactLight_sideRight: 'MainStage_artefactLight_sideRight_1f',
                        artefactLight_scan: 'MainStage_artefactLight_scan_49',
                        lightScan1: 'MainStage_lightScan1_75',
                        artefactLight_scan__2: 'MainStage_artefactLight_scan__2_4e',
                        lightScan2: 'MainStage_lightScan2_c7',
                        artefactLight_scan__3: 'MainStage_artefactLight_scan__3_a3',
                        lootBoxesRoute_effect: 'MainStage_lootBoxesRoute_effect_8f',
                        window_display: 'MainStage_window_display_ef',
                        route: 'MainStage_route_2b',
                        displayWhen: 'MainStage_displayWhen_b7',
                        noInteraction: 'MainStage_noInteraction_1c',
                        label: 'MainStage_label_d0',
                        label_text: 'MainStage_label_text_21',
                        label_text_bg: 'MainStage_label_text_bg_ef',
                        label_highlight: 'MainStage_label_highlight_4c',
                        labelPulse: 'MainStage_labelPulse_90',
                        label__missionBrief: 'MainStage_label__missionBrief_29',
                        label__progression: 'MainStage_label__progression_fe',
                        effect: 'MainStage_effect_ec',
                        effect_progression: 'MainStage_effect_progression_9a',
                        effect_missionBrief: 'MainStage_effect_missionBrief_7f',
                        effect_lootBox: 'MainStage_effect_lootBox_6b',
                        lootBoxesDisplay: 'MainStage_lootBoxesDisplay_eb',
                        glitch1: 'MainStage_glitch1_20',
                        glitch2: 'MainStage_glitch2_b7',
                        glitch3: 'MainStage_glitch3_36',
                        rotateWithTilt: 'MainStage_rotateWithTilt_a9',
                        lightScan3: 'MainStage_lightScan3_a0',
                    };
                var Pe = a(915);
                function xe(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, u = new Array(t); a < t; a++) u[a] = e[a];
                    return u;
                }
                const Te = (e) => (0 === e ? window : window.subViews.get(e));
                const Oe = function (e, t) {
                    var a;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (a = e[t]) ? void 0 : a.value;
                };
                function ke(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, a, u) => t(null == e ? void 0 : e.value, a, u));
                }
                var Ie = a(517);
                let Le;
                !(function (e) {
                    (e.Hovered = 'Hovered'), (e.Normal = 'Normal'), (e.UnFocused = 'UnFocused');
                })(Le || (Le = {}));
                const He = ' ',
                    Ue = [
                        'CFF_MAIN',
                        'CFF_SUPPORT',
                        'CFF_DONE',
                        'CFF_PHASE',
                        'CFF_IMPORTANT',
                        'CFF_HERO',
                        'CFF_ATTENTION',
                        'CFF_BACKGROUND',
                        'CFF_MINE',
                        'CFF_VORTEX',
                        'CFF_BARRIER',
                        'CFF_JUMP',
                    ],
                    Ge = [I.Kirk, I.Spock, I.Uhura],
                    je = ['isRewardGranted'],
                    We = [L.HighRisk, L.MediumRisk, L.LowRisk],
                    Xe = ((e, t) => {
                        const a = (0, u.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: n, children: o, mocks: i }) {
                                const c = (0, u.useRef)([]),
                                    l = (e, a, u) => {
                                        var r;
                                        const n = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: a = Te,
                                                context: u = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function n(e, t = 0) {
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
                                                const o = (e) => {
                                                    const r = a(t),
                                                        n = u.split('.').reduce((e, t) => e[t], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? n
                                                        : e.split('.').reduce((e, t) => {
                                                              const a = e[t];
                                                              return 'function' == typeof a ? a.bind(e) : a;
                                                          }, n);
                                                };
                                                return {
                                                    subscribe: (a, n) => {
                                                        const i = 'string' == typeof n ? `${u}.${n}` : u,
                                                            c = s.O.view.addModelObserver(i, t, !0);
                                                        return r.set(c, a), e && a(o(n)), c;
                                                    },
                                                    readByPath: o,
                                                    createCallback: (e, t) => {
                                                        const a = o(t);
                                                        return (...t) => {
                                                            a(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = o(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (
                                                            var e,
                                                                a = (function (e, t) {
                                                                    var a =
                                                                        ('undefined' != typeof Symbol &&
                                                                            e[Symbol.iterator]) ||
                                                                        e['@@iterator'];
                                                                    if (a) return (a = a.call(e)).next.bind(a);
                                                                    if (
                                                                        Array.isArray(e) ||
                                                                        (a = (function (e, t) {
                                                                            if (e) {
                                                                                if ('string' == typeof e)
                                                                                    return xe(e, t);
                                                                                var a = Object.prototype.toString
                                                                                    .call(e)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === a &&
                                                                                        e.constructor &&
                                                                                        (a = e.constructor.name),
                                                                                    'Map' === a || 'Set' === a
                                                                                        ? Array.from(e)
                                                                                        : 'Arguments' === a ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                a,
                                                                                            )
                                                                                          ? xe(e, t)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (t && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        a && (e = a);
                                                                        var u = 0;
                                                                        return function () {
                                                                            return u >= e.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: e[u++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(r.keys());
                                                            !(e = a()).done;

                                                        )
                                                            n(e.value, t);
                                                    },
                                                    unsubscribe: n,
                                                };
                                            })(a),
                                            o =
                                                'real' === e
                                                    ? n
                                                    : Object.assign({}, n, {
                                                          readByPath:
                                                              null != (r = null == u ? void 0 : u.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            i = (t) =>
                                                'mocks' === e ? (null == u ? void 0 : u.getter(t)) : o.readByPath(t),
                                            l = (e) => c.current.push(e),
                                            _ = (({ observableModel: e }) => {
                                                const t = {
                                                        root: e.object(),
                                                        announcer: e.object('announcer'),
                                                        queue: e.object('queue'),
                                                        eventPoints: e.primitives(['eventPoints', 'eventPointsLimit']),
                                                        lobbyRoute: e.primitives(['lobbyRoute']),
                                                        fragments: e.primitives(['fragmentCount', 'fragmentLimit']),
                                                        progression: e.array('progression', []),
                                                        missions: e.array('missions', []),
                                                        scoring: e.array('scoring', []),
                                                    },
                                                    a = (0, Ie.computedFn)(() => ke(t.scoring.get(), Z)),
                                                    u = (0, Ie.computedFn)((e) => {
                                                        const a = t.eventPoints.eventPoints.get();
                                                        let u = 0;
                                                        return (
                                                            ke(t.progression.get(), (e, t) => {
                                                                e.isRewardGranted;
                                                                let r = (function (e, t) {
                                                                    if (null == e) return {};
                                                                    var a,
                                                                        u,
                                                                        r = {},
                                                                        n = Object.keys(e);
                                                                    for (u = 0; u < n.length; u++)
                                                                        (a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                                                    return r;
                                                                })(e, je);
                                                                const n = Math.max(Math.min(a - u, r.eventPoints), 0),
                                                                    s = Object.assign({}, r, {
                                                                        currentProgress: n,
                                                                        bonuses: ke(r.bonuses, (e) =>
                                                                            Object.assign({}, e, {
                                                                                tooltipContentId: parseInt(
                                                                                    e.tooltipContentId,
                                                                                ),
                                                                            }),
                                                                        ),
                                                                    }),
                                                                    o = s.currentProgress === s.eventPoints,
                                                                    i = 0 === t || u <= a,
                                                                    c = s.currentProgress > 0 || i;
                                                                return (
                                                                    (u += r.eventPoints),
                                                                    Object.assign({}, s, {
                                                                        status:
                                                                            (o ? 'done' : c && 'in_progress') ||
                                                                            'locked',
                                                                        stepNumber: (t % 3) + 1,
                                                                    })
                                                                );
                                                            }).slice(3 * e, 3 * (e + 1)) || []
                                                        );
                                                    }),
                                                    r = (0, Ie.computedFn)(() => {
                                                        const e = t.eventPoints.eventPoints.get();
                                                        let a = 0;
                                                        const u =
                                                                (function (e, t) {
                                                                    for (let a = 0; a < e.length; a++)
                                                                        if (t(Oe(e, a), a, e)) return a;
                                                                })(t.progression.get(), (t) => {
                                                                    const u = t.eventPoints + a > e;
                                                                    return (a += t.eventPoints), u;
                                                                }) || 0,
                                                            r = Math.floor(u / 3);
                                                        return Ge[r] || Ge[0];
                                                    }),
                                                    n = (0, Ie.computedFn)(
                                                        () =>
                                                            ke(t.missions.get(), (e) =>
                                                                Object.assign({}, e, { bonuses: ke(e.bonuses, Z) }),
                                                            ) || [],
                                                    ),
                                                    s = (0, Ie.computedFn)(
                                                        () =>
                                                            t.fragments.fragmentCount.get() >=
                                                            t.fragments.fragmentLimit.get(),
                                                    ),
                                                    o = (0, Ie.computedFn)((e) => {
                                                        const a = t.root.get().performanceGroup;
                                                        return We.indexOf(a) >= We.indexOf(e);
                                                    }),
                                                    i = (0, Ie.computedFn)(() => o(L.MediumRisk)),
                                                    c = (0, Ie.computedFn)(() => o(L.HighRisk));
                                                return Object.assign({}, t, {
                                                    computes: {
                                                        getScoring: a,
                                                        getProgression: u,
                                                        getMissions: n,
                                                        getCurrentChapterKey: r,
                                                        getIsReadyForResearch: s,
                                                        getIsPerformanceAtLeast: o,
                                                        getIsPerformanceAtLeastMedium: i,
                                                        getIsPerformanceAtLeastHigh: c,
                                                    },
                                                });
                                            })({
                                                mode: e,
                                                readByPath: i,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (t, a) => {
                                                        const u = null != a ? a : i(t),
                                                            r = Pe.observable.box(u, { equals: J });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, Pe.action)((e) => r.set(e)),
                                                                    t,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (t, a) => {
                                                        const u = null != a ? a : i(t),
                                                            r = Pe.observable.box(u, { equals: J });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, Pe.action)((e) => r.set(e)),
                                                                    t,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (t, a) => {
                                                        const u = i(a);
                                                        if (Array.isArray(t)) {
                                                            const r = t.reduce(
                                                                (e, t) => ((e[t] = Pe.observable.box(u[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, Pe.action)((e) => {
                                                                            t.forEach((t) => {
                                                                                r[t].set(e[t]);
                                                                            });
                                                                        }),
                                                                        a,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = t,
                                                                n = Object.entries(r),
                                                                s = n.reduce(
                                                                    (e, [t, a]) => (
                                                                        (e[a] = Pe.observable.box(u[t], {})), e
                                                                    ),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, Pe.action)((e) => {
                                                                            n.forEach(([t, a]) => {
                                                                                s[a].set(e[t]);
                                                                            });
                                                                        }),
                                                                        a,
                                                                    ),
                                                                s
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: l,
                                            }),
                                            m = { mode: e, model: _, externalModel: o, cleanup: l };
                                        return {
                                            model: _,
                                            controls: 'mocks' === e && u ? u.controls(m) : t(m),
                                            externalModel: o,
                                            mode: e,
                                        };
                                    },
                                    _ = (0, u.useRef)(!1),
                                    m = (0, u.useState)(e),
                                    d = m[0],
                                    E = m[1],
                                    g = (0, u.useState)(() => l(e, n, i)),
                                    f = g[0],
                                    p = g[1];
                                return (
                                    (0, u.useEffect)(() => {
                                        _.current ? p(l(d, n, i)) : (_.current = !0);
                                    }, [i, d, n]),
                                    (0, u.useEffect)(() => {
                                        E(e);
                                    }, [e]),
                                    (0, u.useEffect)(
                                        () => () => {
                                            f.externalModel.dispose(), c.current.forEach((e) => e());
                                        },
                                        [f],
                                    ),
                                    r().createElement(a.Provider, { value: f }, o)
                                );
                            },
                            () => (0, u.useContext)(a),
                        ];
                    })(0, ({ externalModel: e }) => ({
                        onLobbyRouteChange: e.createCallback((e) => ({ newRoute: e }), 'onLobbyRouteChange'),
                        onClose: e.createCallbackNoArgs('onClose'),
                        onAboutEvent: e.createCallbackNoArgs('onAboutEvent'),
                        onLeaveQueue: e.createCallbackNoArgs('queue.onLeave'),
                        onGetRewardsClick: e.createCallbackNoArgs('onGetRewardsClick'),
                    })),
                    $e = Xe[0],
                    ze = Xe[1];
                function Ve(e, t) {
                    const a = {};
                    return (
                        t.forEach((t) => {
                            a[t] = e[t];
                        }),
                        a
                    );
                }
                var qe = a(887),
                    Ye = a.n(qe);
                const Ke = ['xl', 'lg', 'md', 'sm', 'xs'],
                    Qe = (e) => e.includes('_') && ((e) => Ke.includes(e))(e.split('_').at(-1)),
                    Ze = [D.ExtraLarge, D.Large, D.Medium, D.Small, D.ExtraSmall],
                    Je = (e, t) =>
                        Object.keys(e).reduce((a, u) => {
                            const r = String(u);
                            if (r in a) return a;
                            if (Qe(r)) {
                                const u = r.split('_').slice(0, -1).join('_');
                                if (u in a) return a;
                                const n = Ze.indexOf(t),
                                    s = (-1 !== n ? Ke.slice(n) : [])
                                        .map((e) => u + '_' + e)
                                        .find((t) => void 0 !== e[t]),
                                    o = s ? e[s] : void 0;
                                return (a[u] = void 0 !== o ? o : e[u]), a;
                            }
                            const n = e[r];
                            return (
                                void 0 === n ||
                                    ((e, t) => Ke.some((a) => void 0 !== t[`${e}_${a}`]))(r, e) ||
                                    (a[r] = n),
                                a
                            );
                        }, {}),
                    et = (e, t = Je) => {
                        const a = (
                            (e, t = Je) =>
                            (a) => {
                                const n = B().mediaSize,
                                    s = (0, u.useMemo)(() => t(a, n), [a, n]);
                                return r().createElement(e, s);
                            }
                        )(e, t);
                        return r().memo((t) =>
                            Object.keys(t).some((e) => Qe(String(e)) && void 0 !== t[e])
                                ? r().createElement(a, t)
                                : r().createElement(e, t),
                        );
                    },
                    tt = {
                        mt__XS: 'Box_mt__XS_0c',
                        mt__SM: 'Box_mt__SM_eb',
                        mt__SMp: 'Box_mt__SMp_cf',
                        mt__MD: 'Box_mt__MD_25',
                        mt__MDp: 'Box_mt__MDp_49',
                        mt__LG: 'Box_mt__LG_e8',
                        mt__XL: 'Box_mt__XL_83',
                        mr__XS: 'Box_mr__XS_7c',
                        mr__SM: 'Box_mr__SM_08',
                        mr__SMp: 'Box_mr__SMp_06',
                        mr__MD: 'Box_mr__MD_4a',
                        mr__MDp: 'Box_mr__MDp_b6',
                        mr__LG: 'Box_mr__LG_d0',
                        mr__XL: 'Box_mr__XL_db',
                        mb__XS: 'Box_mb__XS_bb',
                        mb__SM: 'Box_mb__SM_83',
                        mb__SMp: 'Box_mb__SMp_04',
                        mb__MD: 'Box_mb__MD_ed',
                        mb__MDp: 'Box_mb__MDp_65',
                        mb__LG: 'Box_mb__LG_c8',
                        mb__XL: 'Box_mb__XL_f8',
                        ml__XS: 'Box_ml__XS_8a',
                        ml__SM: 'Box_ml__SM_e6',
                        ml__SMp: 'Box_ml__SMp_fb',
                        ml__MD: 'Box_ml__MD_2b',
                        ml__MDp: 'Box_ml__MDp_c7',
                        ml__LG: 'Box_ml__LG_39',
                        ml__XL: 'Box_ml__XL_4a',
                    },
                    at = [
                        'className',
                        'width',
                        'height',
                        'm',
                        'mt',
                        'mr',
                        'mb',
                        'ml',
                        'column',
                        'row',
                        'flexDirection',
                        'flexStart',
                        'center',
                        'flexEnd',
                        'spaceBetween',
                        'spaceAround',
                        'justifyContent',
                        'alignItems',
                        'alignSelf',
                        'wrap',
                        'flexWrap',
                        'grow',
                        'shrink',
                        'flex',
                        'style',
                        'children',
                    ];
                function ut() {
                    return (
                        (ut =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        ut.apply(this, arguments)
                    );
                }
                Object.keys(Ye());
                const rt = {
                        XL: { mt: tt.mt__XL, mr: tt.mr__XL, mb: tt.mb__XL, ml: tt.ml__XL },
                        LG: { mt: tt.mt__LG, mr: tt.mr__LG, mb: tt.mb__LG, ml: tt.ml__LG },
                        MDp: { mt: tt.mt__MDp, mr: tt.mr__MDp, mb: tt.mb__MDp, ml: tt.ml__MDp },
                        MD: { mt: tt.mt__MD, mr: tt.mr__MD, mb: tt.mb__MD, ml: tt.ml__MD },
                        SMp: { mt: tt.mt__SMp, mr: tt.mr__SMp, mb: tt.mb__SMp, ml: tt.ml__SMp },
                        SM: { mt: tt.mt__SM, mr: tt.mr__SM, mb: tt.mb__SM, ml: tt.ml__SM },
                        XS: { mt: tt.mt__XS, mr: tt.mr__XS, mb: tt.mb__XS, ml: tt.ml__XS },
                    },
                    nt = (Object.keys(rt), ['mt', 'mr', 'mb', 'ml']),
                    st = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    ot = et((e) => {
                        let t = e.className,
                            a = e.width,
                            n = e.height,
                            s = e.m,
                            o = e.mt,
                            i = void 0 === o ? s : o,
                            c = e.mr,
                            l = void 0 === c ? s : c,
                            _ = e.mb,
                            m = void 0 === _ ? s : _,
                            d = e.ml,
                            E = void 0 === d ? s : d,
                            g = e.column,
                            f = e.row,
                            p = e.flexDirection,
                            h = void 0 === p ? (g ? 'column' : f && 'row') || void 0 : p,
                            A = e.flexStart,
                            b = e.center,
                            D = e.flexEnd,
                            v = e.spaceBetween,
                            C = e.spaceAround,
                            B = e.justifyContent,
                            y =
                                void 0 === B
                                    ? (A ? 'flex-start' : b && 'center') ||
                                      (D && 'flex-end') ||
                                      (v && 'space-between') ||
                                      (C && 'space-around') ||
                                      void 0
                                    : B,
                            R = e.alignItems,
                            M = void 0 === R ? (A ? 'flex-start' : b && 'center') || (D && 'flex-end') || void 0 : R,
                            w = e.alignSelf,
                            S = e.wrap,
                            N = e.flexWrap,
                            P = void 0 === N ? (S ? 'wrap' : void 0) : N,
                            x = e.grow,
                            T = e.shrink,
                            O = e.flex,
                            k = void 0 === O ? (x || T ? `${x ? 1 : 0} ${T ? 1 : 0} auto` : void 0) : O,
                            I = e.style,
                            L = e.children,
                            H = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    u,
                                    r = {},
                                    n = Object.keys(e);
                                for (u = 0; u < n.length; u++) (a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, at);
                        const U = (0, u.useMemo)(() => {
                                const e = { mt: i, mr: l, mb: m, ml: E },
                                    t = ((e) =>
                                        nt.reduce((t, a) => {
                                            const u = e[a];
                                            return u && 'number' != typeof u ? t.concat(rt[!0 === u ? 'MD' : u][a]) : t;
                                        }, []))(e),
                                    u = ((e) =>
                                        nt.reduce((t, a) => {
                                            const u = e[a];
                                            return 'number' == typeof u && (t[st[a]] = u + 'rem'), t;
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, I, u, {
                                        width: void 0 !== a && 'number' == typeof a ? a + 'rem' : a,
                                        height: void 0 !== n && 'number' == typeof n ? n + 'rem' : n,
                                        flex: k,
                                        alignSelf: w,
                                        display: h || M ? 'flex' : void 0,
                                        flexDirection: h,
                                        flexWrap: P,
                                        justifyContent: y,
                                        alignItems: M,
                                    }),
                                    computedClassNames: t,
                                };
                            }, [a, n, i, l, m, E, I, k, w, h, P, y, M]),
                            G = U.computedStyle,
                            j = U.computedClassNames;
                        return r().createElement('div', ut({ className: F()(tt.base, ...j, t), style: G }, H), L);
                    });
                var it = a(948);
                let ct;
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(ct || (ct = {}));
                const lt = (e) => e.replace(/&nbsp;/g, ' '),
                    _t = (e, t, a) => {
                        if (a % 2) {
                            const a = e.pop();
                            return [...e, a + t];
                        }
                        return [...e, t];
                    },
                    mt = (e, t, a) => {
                        if (0 === a) return [t];
                        if (a % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const a = e.pop();
                            return [...e, a + t];
                        }
                    },
                    dt = (e, t, a = ct.left) => e.split(t).reduce(a === ct.left ? _t : mt, []),
                    Et = (() => {
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
                    gt = ['zh_cn', 'zh_sg', 'zh_tw'],
                    ft = ({ binding: e, text: t = '', classMix: a, alignment: n = ct.left, formatWithBrackets: s }) => {
                        if (null === t) return console.error("FormatText was supplied with 'null'"), null;
                        const o = s && e ? ((i = e), t.replace(/\{\w+\}/g, (e) => String(i[e.slice(1, -1)]))) : t;
                        var i;
                        return r().createElement(
                            u.Fragment,
                            null,
                            o.split('\n').map((t, s) =>
                                r().createElement(
                                    'div',
                                    { className: F()('FormatText_base_d0', a), key: `${t}-${s}` },
                                    ((e, t, a) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                            a && e in a
                                                ? a[e]
                                                : ((e, t = ct.left) => {
                                                      const a = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                      return gt.includes(a)
                                                          ? Et(e)
                                                          : 'ja' === a
                                                            ? (0, it.loadDefaultJapaneseParser)()
                                                                  .parse(e)
                                                                  .map((e) => lt(e))
                                                            : ((e, t = ct.left) => {
                                                                  let a = [];
                                                                  const u =
                                                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                      r = lt(e);
                                                                  return (
                                                                      dt(r, /( )/, t).forEach(
                                                                          (e) => (a = a.concat(dt(e, u, ct.left))),
                                                                      ),
                                                                      a
                                                                  );
                                                              })(e, t);
                                                  })(e, t),
                                        ))(t, n, e).map((e, t) =>
                                        r().createElement(u.Fragment, { key: `${t}-${e}` }, e),
                                    ),
                                ),
                            ),
                        );
                    };
                var pt = a(532),
                    ht = a.n(pt);
                const Ft = {
                        cff_splash: 'Text_cff_splash_92',
                        cff_splash_small: 'Text_cff_splash_small_7a',
                        cff_title: 'Text_cff_title_53',
                        cff_heading: 'Text_cff_heading_90',
                        cff_heading_small: 'Text_cff_heading_small_5a',
                        cff_body: 'Text_cff_body_dd',
                        cff_emphasis: 'Text_cff_emphasis_d4',
                        cff_emphasis_small: 'Text_cff_emphasis_small_80',
                        cff_body_small: 'Text_cff_body_small_ff',
                        cff_player: 'Text_cff_player_29',
                        cff_decorative_title: 'Text_cff_decorative_title_72',
                        cff_decorative_body: 'Text_cff_decorative_body_be',
                        boxImage: 'Text_boxImage_4a',
                        transparent: 'Text_transparent_2c',
                        fade_in: 'Text_fade_in_d1',
                        fade_from_left: 'Text_fade_from_left_ce',
                        fade_from_bottom: 'Text_fade_from_bottom_d0',
                        fade_out: 'Text_fade_out_2c',
                        fade_to_left: 'Text_fade_to_left_d8',
                        fade_to_bottom: 'Text_fade_to_bottom_4b',
                        delay_100: 'Text_delay_100_e3',
                        delay_200: 'Text_delay_200_66',
                        delay_300: 'Text_delay_300_98',
                        delay_400: 'Text_delay_400_28',
                        delay_500: 'Text_delay_500_76',
                        delay_600: 'Text_delay_600_1e',
                        delay_700: 'Text_delay_700_46',
                        delay_800: 'Text_delay_800_0c',
                        delay_1000: 'Text_delay_1000_7f',
                        delay_1250: 'Text_delay_1250_76',
                        delay_1500: 'Text_delay_1500_26',
                        delay_3000: 'Text_delay_3000_58',
                        glitch: 'Text_glitch_c0',
                        CFF_MAIN: 'Text_CFF_MAIN_32',
                        CFF_SUPPORT: 'Text_CFF_SUPPORT_23',
                        CFF_DONE: 'Text_CFF_DONE_e4',
                        CFF_PHASE: 'Text_CFF_PHASE_ca',
                        CFF_IMPORTANT: 'Text_CFF_IMPORTANT_d9',
                        CFF_HERO: 'Text_CFF_HERO_fd',
                        CFF_ATTENTION: 'Text_CFF_ATTENTION_76',
                        CFF_BACKGROUND: 'Text_CFF_BACKGROUND_c2',
                        CFF_MINE: 'Text_CFF_MINE_a5',
                        CFF_VORTEX: 'Text_CFF_VORTEX_ef',
                        CFF_BARRIER: 'Text_CFF_BARRIER_99',
                        CFF_JUMP: 'Text_CFF_JUMP_aa',
                        'paragraph-P10': 'Text_paragraph-P10_d5',
                        'paragraph-P12': 'Text_paragraph-P12_8b',
                        'paragraph-P14': 'Text_paragraph-P14_41',
                        'paragraph-P16': 'Text_paragraph-P16_5b',
                        'paragraph-P18': 'Text_paragraph-P18_9b',
                        'paragraph-P24': 'Text_paragraph-P24_22',
                        'heading-H14': 'Text_heading-H14_38',
                        'heading-H15': 'Text_heading-H15_4d',
                        'heading-H18': 'Text_heading-H18_40',
                        'heading-H20R': 'Text_heading-H20R_41',
                        'heading-H22': 'Text_heading-H22_9e',
                        'heading-H24R': 'Text_heading-H24R_93',
                        'heading-H24': 'Text_heading-H24_9f',
                        'heading-H28': 'Text_heading-H28_4e',
                        'heading-H36': 'Text_heading-H36_f1',
                        'heading-H56': 'Text_heading-H56_41',
                        'heading-H73': 'Text_heading-H73_98',
                        'heading-H144': 'Text_heading-H144_e6',
                        BLACK_REAL: 'Text_BLACK_REAL_77',
                        WHITE_REAL: 'Text_WHITE_REAL_9c',
                        WHITE: 'Text_WHITE_a9',
                        WHITE_ORANGE: 'Text_WHITE_ORANGE_28',
                        WHITE_SPANISH: 'Text_WHITE_SPANISH_5e',
                        PAR: 'Text_PAR_4d',
                        PAR_SECONDARY: 'Text_PAR_SECONDARY_7c',
                        PAR_TERTIARY: 'Text_PAR_TERTIARY_4b',
                        INFO_RED: 'Text_INFO_RED_bb',
                        RED: 'Text_RED_18',
                        RED_DARK: 'Text_RED_DARK_d0',
                        YELLOW: 'Text_YELLOW_43',
                        ORANGE: 'Text_ORANGE_f6',
                        CREAM: 'Text_CREAM_08',
                        BROWN: 'Text_BROWN_c9',
                        GREEN_BRIGHT: 'Text_GREEN_BRIGHT_af',
                        GREEN: 'Text_GREEN_b4',
                        GREEN_DARK: 'Text_GREEN_DARK_67',
                        BLUE_BOOSTER: 'Text_BLUE_BOOSTER_43',
                        BLUE_TEAMKILLER: 'Text_BLUE_TEAMKILLER_d9',
                        CRED: 'Text_CRED_8f',
                        GOLD: 'Text_GOLD_21',
                        BOND: 'Text_BOND_f6',
                        PROM: 'Text_PROM_69',
                        right: 'Text_right_bc',
                        center: 'Text_center_35',
                        glitch1: 'Text_glitch1_6b',
                        glitch2: 'Text_glitch2_fa',
                        glitch3: 'Text_glitch3_d7',
                    },
                    At = [
                        'text',
                        'variant',
                        'className',
                        'color',
                        'style',
                        'format',
                        'textLeft',
                        'textCenter',
                        'textRight',
                        'textAlign',
                    ];
                function bt() {
                    return (
                        (bt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        bt.apply(this, arguments)
                    );
                }
                Object.keys(Ye());
                const Dt = Object.keys(ht()),
                    vt =
                        (Object.keys(Ye()),
                        (e) =>
                            e
                                ? ((e) => Dt.includes(e))(e) || ((e) => Ue.includes(e))(e)
                                    ? { colorClassName: Ft[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    Ct = et((e) => {
                        let t = e.text,
                            a = e.variant,
                            n = e.className,
                            s = e.color,
                            o = e.style,
                            i = e.format,
                            c = e.textLeft,
                            l = e.textCenter,
                            _ = e.textRight,
                            m = e.textAlign,
                            d = void 0 === m ? (c ? 'left' : l && 'center') || (_ && 'right') || void 0 : m,
                            E = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    u,
                                    r = {},
                                    n = Object.keys(e);
                                for (u = 0; u < n.length; u++) (a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, At);
                        const g = (0, u.useMemo)(() => {
                                const e = vt(s),
                                    t = e.colorClassName,
                                    a = e.colorStyle,
                                    u = void 0 === a ? {} : a;
                                return { computedStyle: Object.assign({}, o, u, { textAlign: d }), colorClassName: t };
                            }, [o, s, d]),
                            f = g.computedStyle,
                            p = g.colorClassName;
                        return r().createElement(
                            ot,
                            bt({ className: F()(Ft.base, a && Ft[a], p, n), style: f }, E),
                            void 0 !== i ? r().createElement(ft, bt({ classMix: F()(d && Ft[d]) }, i, { text: t })) : t,
                        );
                    }),
                    Bt = 'ArtefactLight_dust_ac',
                    yt = ['duration', 'fps', 'className', 'children', 'pause', 'showDust'];
                function Rt() {
                    return (
                        (Rt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        Rt.apply(this, arguments)
                    );
                }
                const Mt = (e = 0) => {
                        const t = Math.random(),
                            a = Math.floor(re(t, 0, 1, 15, 90)),
                            u = Math.floor(re(t, 0, 1, 5, 100)),
                            r = Math.floor(re(Math.random(), 0, 1, 4e3, 5e3)),
                            n = Math.floor(re(Math.random(), 0, 1, 0, 360)),
                            s = Math.floor(n + re(Math.random(), 0, 1, -120, 120)),
                            o = re(Math.random(), 0, 1, 0.5, 0.75),
                            i = o * re(Math.random(), 0, 1, 1.1, 1.25),
                            c = re(Math.random(), 0, 1, 0.3, 0.4);
                        return {
                            '--startTime': e,
                            '--startXPercent': a,
                            '--endXPercent': u,
                            '--duration': r,
                            '--startRotation': n,
                            '--endRotation': s,
                            '--startScale': o,
                            '--endScale': i,
                            '--startOpacity': c,
                            '--endOpacity': c * re(Math.random(), 0, 1, 0.6, 0.9),
                        };
                    },
                    wt = (e, t) => {
                        const a = e >= t['--startTime'] + t['--duration'] ? Mt(e) : Object.assign({}, t),
                            u = (e - a['--startTime']) / a['--duration'],
                            r = re(u, 0, 1, a['--startXPercent'], a['--endXPercent']) + '%',
                            n = re(u, 0, 1, a['--startScale'], a['--endScale']),
                            s = re(u, 0, 1, -100 * n, 75) + '%',
                            o = re(u, 0, 1, a['--startRotation'], a['--endRotation']),
                            i = re(u, 0, 1, a['--startOpacity'], a['--endOpacity']),
                            c = `translateX(-50%) rotate(${o}deg) scale(${n})`;
                        return Object.assign({}, a, { transform: c, left: r, bottom: s, opacity: i });
                    },
                    St = (e) => {
                        let t = e.duration,
                            a = void 0 === t ? 6e3 : t,
                            n = e.fps,
                            s = void 0 === n ? 25 : n,
                            o = e.className,
                            i = e.children,
                            c = e.pause,
                            l = e.showDust,
                            _ = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    u,
                                    r = {},
                                    n = Object.keys(e);
                                for (u = 0; u < n.length; u++) (a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, yt);
                        const m = (0, u.useState)({
                                maskStyle: {},
                                dustStyle1: Mt(0),
                                dustStyle2: Mt(-a / 2),
                                dustStyle3: Mt(a / 2),
                            }),
                            d = m[0],
                            E = m[1];
                        return (
                            (0, u.useEffect)(() => {
                                if (c) return;
                                const e = Date.now();
                                let t = !1;
                                const u = setInterval(
                                    () => {
                                        requestAnimationFrame(() => {
                                            if (t) return;
                                            const u = Date.now() - e,
                                                r = (u % a) / a,
                                                n = ((s = 1 - Math.abs(2 * r - 1)), -(Math.cos(Math.PI * s) - 1) / 2);
                                            var s;
                                            const o = re(n, 0, 1, 50, 130),
                                                i = 1 - Math.abs(2 * n - 1),
                                                c = re(i, 0, 1, 10, 50),
                                                l = Math.floor(re(n, 0, 1, 15, 90)),
                                                _ = {
                                                    maskImage: `linear-gradient(${o}deg, #88888888 ${l - c}%, #ffffffff ${l}%, #88888888 ${l + c}%) 0 0 / cover no-repeat`,
                                                };
                                            E((e) => {
                                                const t = wt(u, e.dustStyle1),
                                                    a = wt(u, e.dustStyle2),
                                                    r = wt(u, e.dustStyle3);
                                                return { maskStyle: _, dustStyle1: t, dustStyle2: a, dustStyle3: r };
                                            });
                                        });
                                    },
                                    Math.floor(1e3 / s),
                                );
                                return () => {
                                    (t = !0), clearInterval(u);
                                };
                            }, [a, s, c]),
                            r().createElement(
                                'div',
                                Rt({}, _, { className: F()('ArtefactLight_base_f5', o) }),
                                r().createElement(
                                    'div',
                                    { className: 'ArtefactLight_dustMask_54' },
                                    l &&
                                        r().createElement(
                                            r().Fragment,
                                            null,
                                            r().createElement('img', {
                                                src: R.images.cosmic_event.gui.maps.icons.cosmicLobbyView.scene.cloud_3(),
                                                alt: '',
                                                style: d.dustStyle1,
                                                className: Bt,
                                            }),
                                            r().createElement('img', {
                                                src: R.images.cosmic_event.gui.maps.icons.cosmicLobbyView.scene.cloud_2(),
                                                alt: '',
                                                style: d.dustStyle2,
                                                className: Bt,
                                            }),
                                            r().createElement('img', {
                                                src: R.images.cosmic_event.gui.maps.icons.cosmicLobbyView.scene.cloud_3(),
                                                alt: '',
                                                style: d.dustStyle3,
                                                className: Bt,
                                            }),
                                        ),
                                ),
                                r().createElement('img', {
                                    className: 'ArtefactLight_image_cc',
                                    style: d.maskStyle,
                                    src: R.images.cosmic_event.gui.maps.icons.cosmicLobbyView.scene.artefact_light(),
                                }),
                                i,
                            )
                        );
                    };
                function Nt(e) {
                    engine.call('PlaySound', e);
                }
                const Pt = {
                        playHighlight() {
                            Nt('highlight');
                        },
                        playClick() {
                            Nt('play');
                        },
                        playYes() {
                            Nt('yes1');
                        },
                    },
                    xt = [
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
                function Tt(e) {
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
                const Ot = (e, t, a = {}, u = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: U.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: u,
                                },
                                a,
                            ),
                        );
                    },
                    kt = (e) => {
                        let t = e.children,
                            a = e.contentId,
                            r = e.args,
                            n = e.onMouseEnter,
                            s = e.onMouseLeave,
                            o = e.onMouseDown,
                            i = e.onClick,
                            c = e.ignoreShowDelay,
                            l = void 0 !== c && c,
                            _ = e.ignoreMouseClick,
                            m = void 0 !== _ && _,
                            d = e.decoratorId,
                            E = void 0 === d ? 0 : d,
                            g = e.isEnabled,
                            f = void 0 === g || g,
                            p = e.targetId,
                            h = void 0 === p ? 0 : p,
                            F = e.onShow,
                            A = e.onHide,
                            b = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    u,
                                    r = {},
                                    n = Object.keys(e);
                                for (u = 0; u < n.length; u++) (a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, xt);
                        const D = (0, u.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, u.useMemo)(
                                () =>
                                    h ||
                                    ((e = 1) => {
                                        const t = new Error().stack;
                                        let a,
                                            u = R.invalid('resId');
                                        return (
                                            t &&
                                                ((a = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== a &&
                                                    window.subViews[a] &&
                                                    (u = window.subViews[a].id)),
                                            { caller: a, stack: t, resId: u }
                                        );
                                    })().resId,
                                [h],
                            ),
                            C = (0, u.useCallback)(() => {
                                (D.current.isVisible && D.current.timeoutId) ||
                                    (Ot(a, E, { isMouseEvent: !0, on: !0, arguments: Tt(r) }, v),
                                    F && F(),
                                    (D.current.isVisible = !0));
                            }, [a, E, r, v, F]),
                            B = (0, u.useCallback)(() => {
                                if (D.current.isVisible || D.current.timeoutId) {
                                    const e = D.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (D.current.timeoutId = 0)),
                                        Ot(a, E, { on: !1 }, v),
                                        D.current.isVisible && A && A(),
                                        (D.current.isVisible = !1);
                                }
                            }, [a, E, v, A]),
                            y = (0, u.useCallback)((e) => {
                                D.current.isVisible &&
                                    ((D.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (D.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(D.current.prevTarget) && B();
                                    }, 200)));
                            }, []);
                        return (
                            (0, u.useEffect)(() => {
                                const e = D.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', y, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', y, { capture: !0 }),
                                            e && window.clearTimeout(e);
                                    }
                                );
                            }, []),
                            (0, u.useEffect)(() => {
                                !1 === f && B();
                            }, [f, B]),
                            (0, u.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', B),
                                    () => {
                                        window.removeEventListener('mouseleave', B), B();
                                    }
                                ),
                                [B],
                            ),
                            f
                                ? (0, u.cloneElement)(
                                      t,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((M = t.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((D.current.timeoutId = window.setTimeout(C, l ? 100 : 400)),
                                                          n && n(e),
                                                          M && M(e));
                                                  }),
                                              onMouseLeave: ((e) => (t) => {
                                                  B(), null == s || s(t), null == e || e(t);
                                              })(t.props.onMouseLeave),
                                              onClick: ((e) => (t) => {
                                                  !1 === m && B(), null == i || i(t), null == e || e(t);
                                              })(t.props.onClick),
                                              onMouseDown: ((e) => (t) => {
                                                  !1 === m && B(), null == o || o(t), null == e || e(t);
                                              })(t.props.onMouseDown),
                                          },
                                          b,
                                      ),
                                  )
                                : t
                        );
                        var M;
                    },
                    It = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Lt() {
                    return (
                        (Lt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        Lt.apply(this, arguments)
                    );
                }
                const Ht = R.views.common.tooltip_window.simple_tooltip_content,
                    Ut = (e) => {
                        let t = e.children,
                            a = e.body,
                            n = e.header,
                            s = e.note,
                            o = e.alert,
                            i = e.args,
                            c = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    u,
                                    r = {},
                                    n = Object.keys(e);
                                for (u = 0; u < n.length; u++) (a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, It);
                        const l = (0, u.useMemo)(() => {
                            const e = Object.assign({}, i, { body: a, header: n, note: s, alert: o });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [o, a, n, s, i]);
                        return r().createElement(
                            kt,
                            Lt(
                                {
                                    contentId:
                                        ((_ = null == i ? void 0 : i.hasHtmlContent),
                                        _ ? Ht.SimpleTooltipHtmlContent('resId') : Ht.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: l,
                                },
                                c,
                            ),
                            t,
                        );
                        var _;
                    },
                    Gt = (e) => {
                        (0, u.useEffect)(e, []);
                    },
                    jt = {
                        base: 'PopoverDecorator_base_ed',
                        decorator: 'PopoverDecorator_decorator_d3',
                        arrow: 'PopoverDecorator_arrow_8a',
                        arrow__bottom: 'PopoverDecorator_arrow__bottom_c3',
                        arrow__top: 'PopoverDecorator_arrow__top_6e',
                        arrow__left: 'PopoverDecorator_arrow__left_7a',
                        arrow__right: 'PopoverDecorator_arrow__right_b6',
                        closeBtn: 'PopoverDecorator_closeBtn_32',
                        content: 'PopoverDecorator_content_f0',
                    };
                var Wt;
                !(function (e) {
                    (e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom');
                })(Wt || (Wt = {}));
                const Xt = ['__left', '__right', '__top', '__bottom'],
                    $t =
                        ((0, u.forwardRef)(
                            ({ children: e, disableAutoSizeUpdate: t, onOutsideClick: a, customStyles: n = {} }, o) => {
                                const i = (0, u.useRef)(null),
                                    c = (0, u.useRef)(null),
                                    l = (0, u.useRef)(null),
                                    _ = (0, u.useState)(window.decorator && window.decorator.directionType),
                                    m = _[0],
                                    d = _[1],
                                    E = (0, u.useCallback)(() => {
                                        Pt.playClick(), s.O.view.sendEvent.close();
                                    }, []),
                                    g = (0, u.useCallback)(() => {
                                        Pt.playHighlight();
                                    }, []),
                                    f = F()(jt.arrow, jt[`arrow${Xt[m]}`]);
                                Gt(
                                    () => (
                                        s.O.client.events.mouse.enableOutside(),
                                        s.O.client.events.mouse.down(([, e]) => {
                                            'outside' === e && (a ? a() : s.O.view.sendEvent.close('popover'));
                                        })
                                    ),
                                );
                                const p = (0, u.useCallback)(
                                        (e) => {
                                            let t = e.target;
                                            do {
                                                if (t === i.current || t === l.current) return;
                                                t = t.parentNode;
                                            } while (t);
                                            const u = window.decorator;
                                            if (void 0 !== window.decorator) {
                                                const e = s.O.client.getMouseGlobalPosition(),
                                                    t = ![u.boundX, u.boundY, u.boundWidth, u.boundHeight].includes(
                                                        void 0,
                                                    ),
                                                    a =
                                                        e.x < u.boundX ||
                                                        e.x > u.boundX + u.boundWidth ||
                                                        e.y > u.boundY + u.boundHeight ||
                                                        e.y < u.boundY;
                                                if (t && !a) return;
                                            }
                                            a ? a() : s.O.view.sendEvent.close('popover');
                                        },
                                        [i, l, a],
                                    ),
                                    h = (0, u.useCallback)(
                                        () => (
                                            s.O.view.freezeTextureBeforeResize(),
                                            ye(() => {
                                                if (c.current) {
                                                    const e = c.current.scrollWidth,
                                                        t = c.current.scrollHeight;
                                                    s.O.view.resize(e, t), d(window.decorator.directionType);
                                                }
                                            })
                                        ),
                                        [],
                                    );
                                return (
                                    (0, u.useImperativeHandle)(o, () => ({ updateSize: h })),
                                    Gt(() => {
                                        s.O.view.setInputPaddingsRem(58);
                                    }),
                                    (0, u.useEffect)(() => {
                                        document.addEventListener('mousedown', p, { capture: !0 });
                                        const e = ((e) => {
                                            let t = !1;
                                            return {
                                                promise: new Promise((a, u) => {
                                                    e.then((e) => !t && a(e)).catch((e) => !t && u(e));
                                                }),
                                                cancel() {
                                                    t = !0;
                                                },
                                            };
                                        })((0, U.Eu)());
                                        return (
                                            !t && e.promise.then(() => h()),
                                            () => {
                                                e.cancel(), document.removeEventListener('mousedown', p);
                                            }
                                        );
                                    }, [h, p, t]),
                                    r().createElement(
                                        'div',
                                        { className: jt.base, ref: c },
                                        r().createElement(
                                            'div',
                                            { className: jt.decorator },
                                            r().createElement(
                                                'div',
                                                { className: jt.content, ref: i },
                                                e,
                                                window.decorator &&
                                                    window.decorator.isCloseBtnVisible &&
                                                    r().createElement(
                                                        Ut,
                                                        { body: R.strings.dialogs.common.error.cancel() },
                                                        r().createElement('div', {
                                                            className: jt.closeBtn,
                                                            onClick: E,
                                                            onMouseEnter: g,
                                                            ref: l,
                                                        }),
                                                    ),
                                            ),
                                            r().createElement('div', { className: f, style: n.arrow }),
                                        ),
                                    )
                                );
                            },
                        ),
                        [
                            'contentId',
                            'decoratorId',
                            'direction',
                            'targetId',
                            'args',
                            'onClick',
                            'children',
                            'isEnabled',
                        ]);
                function zt() {
                    return (
                        (zt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        zt.apply(this, arguments)
                    );
                }
                const Vt = (e) => {
                    let t = e.contentId,
                        a = e.decoratorId,
                        n = e.direction,
                        s = void 0 === n ? Wt.Top : n,
                        o = e.targetId,
                        i = e.args,
                        c = e.onClick,
                        l = e.children,
                        _ = e.isEnabled,
                        m = void 0 === _ || _,
                        d = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                u,
                                r = {},
                                n = Object.keys(e);
                            for (u = 0; u < n.length; u++) (a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                            return r;
                        })(e, $t);
                    const E = (0, u.useRef)(null),
                        g = (0, u.useCallback)(() => {
                            if ((0, U.wU)()) return (0, U.SW)();
                            E.current && (0, U.P3)(t, s, E.current, a, o, i);
                        }, [t, s, i, a, o]);
                    return r().createElement(
                        'div',
                        zt(
                            {
                                ref: E,
                                onClick:
                                    ((f = l.props.onClick),
                                    (e) => {
                                        m && (g(), c && c(e), f && f(e));
                                    }),
                            },
                            d,
                        ),
                        l,
                    );
                    var f;
                };
                function qt() {
                    return (
                        (qt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        qt.apply(this, arguments)
                    );
                }
                const Yt = 1824,
                    Kt = 1026,
                    Qt = Math.abs(48),
                    Zt = Math.abs(27),
                    Jt = { left: -48, top: -27, width: 1920, height: 1080 },
                    ea = Object.assign({}, Jt, { left: 640, top: 245, width: 540, height: 540, distance: 1 }),
                    ta = Object.assign({}, Jt, { left: -48, top: 81, width: 1276.8, height: 0.7 * Kt, distance: 0 }),
                    aa = Object.assign({}, Jt, { left: 681.6, top: 229.5, width: 456, height: 0.4 * Kt, distance: 1 }),
                    ua = Object.assign({}, Jt, { left: 511.5, top: 363.5, width: 765, height: 405, distance: 0 }),
                    ra = Object.assign({}, Jt, { left: 590.4, top: 81, width: 1276.8, height: 0.7 * Kt, distance: 0 }),
                    na = Object.assign({}, Jt, {
                        left: 1392.96,
                        top: 527.0400000000001,
                        width: 0.08 * Yt,
                        height: 0.1 * Kt,
                        distance: 5,
                    }),
                    sa = Object.assign({}, Jt, {
                        left: 1566.24,
                        top: 527.0400000000001,
                        width: 182.4,
                        height: 0.1 * Kt,
                        distance: 5,
                    }),
                    oa = Object.assign({}, Jt, {
                        left: 1429.44,
                        top: 475.74,
                        width: 364.8,
                        height: 0.2 * Kt,
                        distance: 4,
                    }),
                    ia = Object.assign({}, Jt, {
                        left: 1593.6000000000001,
                        top: 742.5,
                        width: 164.16,
                        height: 82.08,
                        distance: 5,
                    }),
                    ca = Object.assign({}, Jt, {
                        left: 134.4,
                        top: 280.8,
                        width: 0.6 * Yt,
                        height: 615.6,
                        distance: 5,
                    }),
                    la = {
                        type: 'zoomToContain',
                        id: 'progressionRoute',
                        parallaxFocalForegroundDepth: 3,
                        parallaxFocalForegroundLimit: 5,
                        parallaxFocalBackgroundDepth: 0,
                        blurIntensity: 2,
                    },
                    _a = {
                        [I.Main]: {
                            type: 'zoomToContain',
                            id: 'initialFocus',
                            parallaxFocalForegroundDepth: 0,
                            parallaxFocalForegroundLimit: 0,
                            parallaxFocalBackgroundDepth: 10,
                            blurIntensity: 0,
                        },
                        [I.Artefact]: {
                            type: 'zoomToContain',
                            id: 'artefactRoute',
                            parallaxFocalForegroundDepth: 5,
                            parallaxFocalForegroundLimit: 6,
                            parallaxFocalBackgroundDepth: 1,
                            blurIntensity: 3,
                        },
                        [I.Kirk]: la,
                        [I.Uhura]: la,
                        [I.Spock]: la,
                        [I.MissionBrief]: {
                            type: 'zoomToContain',
                            id: 'missionBriefRoute',
                            parallaxFocalForegroundDepth: 5,
                            parallaxFocalForegroundLimit: 6,
                            parallaxFocalBackgroundDepth: 0,
                            blurIntensity: 5,
                        },
                        [I.Queue]: {
                            type: 'zoomToContain',
                            id: 'queueRoute',
                            parallaxFocalForegroundDepth: 0,
                            parallaxFocalForegroundLimit: 0,
                            parallaxFocalBackgroundDepth: 10,
                            blurIntensity: 2,
                        },
                        [I.Research]: {
                            type: 'zoomToContain',
                            id: 'researchRoute',
                            parallaxFocalForegroundDepth: 5,
                            parallaxFocalForegroundLimit: 6,
                            parallaxFocalBackgroundDepth: 1,
                            blurIntensity: 3,
                        },
                    },
                    ma = (e, t) => ({ originalWidth: e, originalHeight: t, aspectRatio: e / t }),
                    da = Object.assign({}, ma(2516, 946), { width: 0.9 * Yt, left: -182.4, top: 225.72 }),
                    Ea = Object.assign({ id: 'space', distance: 8 }, Ve(da, ['left', 'top', 'width']), {
                        height: da.width / da.aspectRatio,
                    }),
                    ga = Object.assign({}, ma(3852, 1704), { width: 2736, left: -228, top: -52.32599999999999 }),
                    fa = Object.assign({ id: 'interior', distance: 5 }, Ve(ga, ['left', 'top', 'width']), {
                        height: ga.width / ga.aspectRatio,
                        className: Ne.interior,
                    }),
                    pa = { position: 'absolute', left: '67.5%', top: '49%', transform: 'translate(-50%, -50%)' },
                    ha = { width: 210, height: 150 },
                    Fa = {
                        position: 'absolute',
                        left: '67.5%',
                        top: '50%',
                        width: 720 * 0.35,
                        height: 147,
                        transform: 'translate(-50%, -50%)',
                    },
                    Aa = Object.assign({}, ma(1920, 578), { width: 1386.24, left: 228, top: 0.7 * Kt }),
                    ba = Object.assign({ id: 'console', distance: 0 }, Ve(Aa, ['left', 'top', 'width']), {
                        height: Aa.width / Aa.aspectRatio,
                        className: Ne.console,
                    }),
                    Da = [
                        {
                            scanCount: 20,
                            fps: 30,
                            frames: 20,
                            delayFramesBeforeLoop: 60,
                            offsetX: -2,
                            shadowOffsetX: -2,
                            maxDistance: 2,
                        },
                    ],
                    va = (e, t = 16, a = 16) => ({
                        transform: `scale(${1 / e}) translate(${-t}rem, ${-a}rem)`,
                        transformOrigin: 'left top',
                    }),
                    Ca = [],
                    Ba = [
                        {
                            scanCount: 5,
                            fps: 30,
                            frames: 30,
                            delayFramesBeforeLoop: 15,
                            offsetX: -2,
                            shadowOffsetX: -2,
                            maxDistance: 3,
                        },
                        {
                            scanCount: 10,
                            fps: 30,
                            frames: 25,
                            delayFramesBeforeLoop: 15,
                            offsetX: 4,
                            shadowOffsetX: 4,
                            maxDistance: 2,
                        },
                        {
                            scanCount: 20,
                            fps: 30,
                            frames: 20,
                            delayFramesBeforeLoop: 15,
                            offsetX: -4,
                            shadowOffsetX: -4,
                            maxDistance: 2,
                        },
                    ],
                    ya = [
                        {
                            scanCount: 5,
                            fps: 30,
                            frames: 30,
                            delayFramesBeforeLoop: 60,
                            offsetX: -2,
                            shadowOffsetX: -2,
                            maxDistance: 3,
                        },
                        {
                            scanCount: 10,
                            fps: 30,
                            frames: 25,
                            delayFramesBeforeLoop: 60,
                            offsetX: 4,
                            shadowOffsetX: 4,
                            maxDistance: 2,
                        },
                        {
                            scanCount: 20,
                            fps: 30,
                            frames: 20,
                            delayFramesBeforeLoop: 60,
                            offsetX: -4,
                            shadowOffsetX: -4,
                            maxDistance: 2,
                        },
                    ],
                    Ra = (0, X.observer)(({ className: e }) => {
                        const t = ae(),
                            a = t.dispatch,
                            n = t.stageTransforms,
                            s = ze(),
                            o = s.controls,
                            i = s.model,
                            c = i.lobbyRoute.lobbyRoute.get(),
                            l = i.computes.getCurrentChapterKey(),
                            _ = i.computes.getIsPerformanceAtLeastMedium(),
                            m = i.computes.getIsPerformanceAtLeastHigh(),
                            d = i.eventPoints.eventPoints.get(),
                            E = (0, u.useState)(!1),
                            g = E[0],
                            f = E[1];
                        let p = Ca;
                        m && (p = g ? Ba : ya),
                            (0, u.useEffect)(() => {
                                const e = c in _a ? _a[c] : void 0;
                                e && a(e);
                            }, [c, a]);
                        const h = r().useCallback(() => {
                                o.onLobbyRouteChange(I.Artefact);
                            }, [o]),
                            A = r().useCallback(() => {
                                o.onLobbyRouteChange(l);
                            }, [o, l]),
                            b = r().useCallback(() => {
                                o.onLobbyRouteChange(I.MissionBrief);
                            }, [o]),
                            D = i.computes.getIsReadyForResearch(),
                            v = ((e) => {
                                const t = (0, u.useState)('pending'),
                                    a = t[0],
                                    r = t[1];
                                return (
                                    (0, u.useLayoutEffect)(() => {
                                        let t = 0,
                                            a = 0;
                                        const u = () => {
                                            t + a === e.length && r(0 === t ? 'success' : 'error');
                                        };
                                        e.forEach((e) => {
                                            const r = new Image();
                                            (r.src = e),
                                                r.addEventListener('load', () => {
                                                    a++, u();
                                                }),
                                                r.addEventListener('error', () => {
                                                    t++, u();
                                                });
                                        });
                                    }, [e]),
                                    a
                                );
                            })(
                                (0, u.useMemo)(() => {
                                    const e = [R.images.cosmic_event.gui.maps.icons.cosmicLobbyView.scene.space()];
                                    return (
                                        D
                                            ? e.push(
                                                  R.images.cosmic_event.gui.maps.icons.cosmicLobbyView.scene.interior_researched(),
                                                  R.images.cosmic_event.gui.maps.icons.cosmicLobbyView.scene.console_dark_researched(),
                                                  R.images.cosmic_event.gui.maps.icons.cosmicLobbyView.scene.console_light_researched(),
                                              )
                                            : e.push(
                                                  R.images.cosmic_event.gui.maps.icons.cosmicLobbyView.scene.interior(),
                                                  R.images.cosmic_event.gui.maps.icons.cosmicLobbyView.scene.console_dark(),
                                                  R.images.cosmic_event.gui.maps.icons.cosmicLobbyView.scene.console_light(),
                                              ),
                                        e
                                    );
                                }, [D]),
                            ),
                            C = 'pending' !== v;
                        return r().createElement(
                            Se,
                            {
                                stageWidth: Yt,
                                stageHeight: Kt,
                                className: F()(e, Ne.base, C && Ne.base__loaded),
                                maxHorizontalParallaxShift: _ ? Qt : 0,
                                maxVerticalParallaxShift: _ ? Zt : 0,
                            },
                            r().createElement(
                                ie,
                                qt({}, Ea, { className: Ne.space }),
                                _ &&
                                    r().createElement(
                                        'div',
                                        { className: Ne.corona },
                                        r().createElement('div', { className: Ne.corona_image }),
                                    ),
                            ),
                            r().createElement(
                                ie,
                                qt({}, fa, { className: F()(Ne.interior, D && Ne.interior__ready_for_research) }),
                                r().createElement(
                                    Be,
                                    { atDistance: 2, orCloser: !0, className: Ne.displayWhen },
                                    r().createElement('img', {
                                        src: R.images.cosmic_event.gui.maps.icons.cosmicLobbyView.scene.vehicle_light(),
                                        style: Fa,
                                        className: Ne.noInteraction,
                                    }),
                                    r().createElement(
                                        ge,
                                        { waves: m ? Da : Ca, style: pa, className: Ne.noInteraction },
                                        r().createElement('img', {
                                            src: R.images.cosmic_event.gui.maps.icons.cosmicLobbyView.scene.vehicle(),
                                            style: ha,
                                        }),
                                    ),
                                ),
                            ),
                            r().createElement(
                                ie,
                                qt({ id: 'queueRoute' }, ca),
                                r().createElement(Be, { focusedOnTarget: 'queueRoute' }),
                            ),
                            r().createElement(
                                ie,
                                qt({}, ba, { className: F()(Ne.console, D && Ne.console__ready_for_research) }),
                                r().createElement('div', { className: Ne.console_light }),
                            ),
                            r().createElement(
                                ie,
                                qt({ id: 'artefactRoute' }, ta),
                                r().createElement(Be, {
                                    focusedOnTarget: 'artefactRoute',
                                    className: F()(Ne.artefactRouteShading, !_ && Ne.artefactRouteShading_lowSpecBG),
                                }),
                            ),
                            r().createElement(
                                ie,
                                qt({ id: 'researchRoute' }, ra),
                                r().createElement(Be, {
                                    focusedOnTarget: 'researchRoute',
                                    className: F()(Ne.researchRouteShading, !_ && Ne.researchRouteShading_lowSpecBG),
                                }),
                            ),
                            r().createElement(
                                ie,
                                qt({ id: 'artefact' }, ea, { className: Ne.noInteraction }),
                                r().createElement(
                                    ge,
                                    { waves: p },
                                    r().createElement('div', {
                                        className: F()(
                                            Ne.artefact,
                                            c === I.Research && Ne.artefact__researched,
                                            d >= 5e5 && Ne.artefact__over500k,
                                        ),
                                        style: {
                                            filter: 'brightness(' + (g ? 1.5 : 1) + ')',
                                            width: ea.width,
                                            height: ea.height,
                                        },
                                    }),
                                ),
                                r().createElement(
                                    Be,
                                    { focusedOnTarget: 'researchRoute', className: Ne.displayWhen },
                                    r().createElement('img', {
                                        src: R.images.cosmic_event.gui.maps.icons.cosmicLobbyView.scene.artefact_researched(),
                                        alt: '',
                                        className: F()(Ne.artefact_open, c === I.Research && Ne.fade_in),
                                    }),
                                    r().createElement('img', {
                                        src: R.images.cosmic_event.gui.maps.icons.cosmicLobbyView.scene.artefact_veins(),
                                        alt: '',
                                        className: F()(
                                            Ne.artefact_veins,
                                            c === I.Research && Ne.artefact_veins__appear,
                                        ),
                                    }),
                                    r().createElement('img', {
                                        src: R.images.cosmic_event.gui.maps.icons.cosmicLobbyView.scene.artefact_spark(),
                                        alt: '',
                                        className: F()(
                                            Ne.artefact_spark,
                                            c === I.Research && Ne.artefact_spark__appear,
                                        ),
                                    }),
                                    r().createElement('img', {
                                        src: R.images.cosmic_event.gui.maps.icons.cosmicLobbyView.scene.artefact_shard(),
                                        alt: '',
                                        className: F()(
                                            Ne.artefact_shard,
                                            c === I.Research && Ne.artefact_shard__appear,
                                        ),
                                    }),
                                ),
                            ),
                            r().createElement(
                                ie,
                                qt({ id: 'artefact_light' }, ua, { className: Ne.noInteraction }),
                                r().createElement(
                                    'div',
                                    { className: Ne.artefactLight2 },
                                    r().createElement(
                                        St,
                                        { className: Ne.artefactLight2, pause: !m, showDust: m },
                                        m && r().createElement(Ae, { className: Ne.consoleParticles }),
                                    ),
                                ),
                            ),
                            r().createElement(
                                ie,
                                qt({ id: 'artefactHover' }, aa),
                                r().createElement(
                                    Be,
                                    { atDistance: aa.distance, orCloser: !0, className: Ne.displayWhen },
                                    c !== I.Artefact &&
                                        r().createElement('div', {
                                            onClick: h,
                                            className: Ne.artefactHoverArea,
                                            onMouseEnter: () => {
                                                f(!0), Nt('ev_cosmic_2024_lobby_artefact_hover');
                                            },
                                            onMouseLeave: () => f(!1),
                                        }),
                                ),
                            ),
                            r().createElement(
                                ie,
                                qt({ id: 'progressionRoute' }, na, { onClick: A }),
                                r().createElement(
                                    Be,
                                    { focusedOnTarget: 'initialFocus', className: Ne.displayWhen },
                                    r().createElement(
                                        'div',
                                        {
                                            className: F()(Ne.label, Ne.label__progression),
                                            onClick: A,
                                            style: va(n.scale),
                                            onMouseEnter: () => Nt('ev_cosmic_2024_screen_hover'),
                                        },
                                        r().createElement(
                                            'div',
                                            { className: Ne.label_text_bg },
                                            r().createElement(Ct, {
                                                className: Ne.label_text,
                                                variant: 'cff_body_small',
                                                text: R.strings.cosmicEvent.lobby.main.progression(),
                                            }),
                                        ),
                                        r().createElement('div', { className: Ne.label_highlight }),
                                    ),
                                    r().createElement('div', {
                                        className: F()(Ne.effect, Ne.effect_progression),
                                        onClick: A,
                                        onMouseEnter: () => Nt('ev_cosmic_2024_screen_hover'),
                                    }),
                                ),
                            ),
                            r().createElement(
                                ie,
                                qt({ id: 'missionBriefHighlight' }, sa, { onClick: b }),
                                r().createElement(
                                    Be,
                                    { focusedOnTarget: 'initialFocus', className: Ne.displayWhen },
                                    r().createElement(
                                        'div',
                                        {
                                            className: F()(Ne.label, Ne.label__missionBrief),
                                            onClick: b,
                                            style: va(n.scale),
                                            onMouseEnter: () => Nt('ev_cosmic_2024_screen_hover'),
                                        },
                                        r().createElement(
                                            'div',
                                            { className: Ne.label_text_bg },
                                            r().createElement(Ct, {
                                                className: Ne.label_text,
                                                variant: 'cff_body_small',
                                                text: R.strings.cosmicEvent.lobby.main.missionBrief(),
                                            }),
                                        ),
                                        r().createElement('div', { className: Ne.label_highlight }),
                                    ),
                                    r().createElement('div', {
                                        className: F()(Ne.effect, Ne.effect_missionBrief),
                                        onMouseEnter: () => Nt('ev_cosmic_2024_screen_hover'),
                                    }),
                                ),
                            ),
                            r().createElement(ie, qt({ id: 'missionBriefRoute' }, oa, { className: Ne.noInteraction })),
                            r().createElement(
                                ie,
                                qt({ id: 'lootBoxesRoute' }, ia, { onClick: () => Nt('ev_cosmic_lootbox_play') }),
                                r().createElement(
                                    Be,
                                    { focusedOnTarget: 'initialFocus', className: Ne.lootBoxesDisplay },
                                    r().createElement(
                                        Vt,
                                        {
                                            contentId:
                                                R.views.event_lootboxes.lobby.event_lootboxes.PopoverView('resId'),
                                            direction: Wt.Left,
                                        },
                                        r().createElement(
                                            kt,
                                            {
                                                contentId:
                                                    R.views.event_lootboxes.lobby.event_lootboxes.tooltips.EntryPointTooltip(
                                                        'resId',
                                                    ),
                                            },
                                            r().createElement(
                                                'div',
                                                null,
                                                r().createElement(
                                                    'div',
                                                    {
                                                        style: va(n.scale),
                                                        className: F()(Ne.label, Ne.label__lootBoxes),
                                                        onMouseEnter: () => Nt('ev_cosmic_2024_screen_hover'),
                                                    },
                                                    r().createElement(
                                                        'div',
                                                        { className: Ne.label_text_bg },
                                                        r().createElement(Ct, {
                                                            className: Ne.label_text,
                                                            variant: 'cff_body_small',
                                                            text: R.strings.cosmicEvent.lobby.main.lootBoxes(),
                                                        }),
                                                    ),
                                                    r().createElement('div', { className: Ne.label_highlight }),
                                                ),
                                                r().createElement('div', {
                                                    className: F()(Ne.effect, Ne.effect_lootBox),
                                                    onMouseEnter: () => Nt('ev_cosmic_2024_screen_hover'),
                                                }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                            r().createElement(
                                ie,
                                {
                                    id: 'initialFocus',
                                    left: 0,
                                    top: 0,
                                    width: Yt,
                                    height: Kt,
                                    className: Ne.noInteraction,
                                    distance: 0,
                                },
                                r().createElement(Be, {
                                    focusedOnTarget: 'initialFocus',
                                    className: Ne.mainRouteShading,
                                }),
                            ),
                        );
                    }),
                    Ma = ({ children: e }) =>
                        u.createElement(
                            'div',
                            { className: 'CameraStageRoute_page_01' },
                            u.createElement(
                                'div',
                                { className: 'CameraStageRoute_center_07' },
                                u.createElement(
                                    ue,
                                    null,
                                    u.createElement(Ra, null),
                                    u.createElement('div', { className: 'CameraStageRoute_radialVignette_83' }),
                                    u.createElement('div', { className: 'CameraStageRoute_verticalVignette_61' }),
                                    e,
                                ),
                            ),
                        ),
                    wa = {
                        cff_splash: 'ProgressRoute_cff_splash_e1',
                        cff_splash_small: 'ProgressRoute_cff_splash_small_91',
                        cff_title: 'ProgressRoute_cff_title_32',
                        cff_heading: 'ProgressRoute_cff_heading_b8',
                        cff_heading_small: 'ProgressRoute_cff_heading_small_03',
                        cff_body: 'ProgressRoute_cff_body_98',
                        cff_emphasis: 'ProgressRoute_cff_emphasis_b1',
                        cff_emphasis_small: 'ProgressRoute_cff_emphasis_small_f5',
                        cff_body_small: 'ProgressRoute_cff_body_small_a5',
                        cff_player: 'ProgressRoute_cff_player_d6',
                        cff_decorative_title: 'ProgressRoute_cff_decorative_title_26',
                        cff_decorative_body: 'ProgressRoute_cff_decorative_body_cd',
                        boxImage: 'ProgressRoute_boxImage_6b',
                        transparent: 'ProgressRoute_transparent_fc',
                        fade_in: 'ProgressRoute_fade_in_65',
                        fade_from_left: 'ProgressRoute_fade_from_left_c7',
                        fade_from_bottom: 'ProgressRoute_fade_from_bottom_3f',
                        fade_out: 'ProgressRoute_fade_out_0e',
                        fade_to_left: 'ProgressRoute_fade_to_left_5e',
                        fade_to_bottom: 'ProgressRoute_fade_to_bottom_dd',
                        delay_100: 'ProgressRoute_delay_100_33',
                        delay_200: 'ProgressRoute_delay_200_b3',
                        delay_300: 'ProgressRoute_delay_300_f3',
                        delay_400: 'ProgressRoute_delay_400_a7',
                        delay_500: 'ProgressRoute_delay_500_03',
                        delay_600: 'ProgressRoute_delay_600_f3',
                        delay_700: 'ProgressRoute_delay_700_23',
                        delay_800: 'ProgressRoute_delay_800_54',
                        delay_1000: 'ProgressRoute_delay_1000_5a',
                        delay_1250: 'ProgressRoute_delay_1250_74',
                        delay_1500: 'ProgressRoute_delay_1500_b2',
                        delay_3000: 'ProgressRoute_delay_3000_a2',
                        glitch: 'ProgressRoute_glitch_70',
                        CFF_MAIN: 'ProgressRoute_CFF_MAIN_d5',
                        CFF_SUPPORT: 'ProgressRoute_CFF_SUPPORT_83',
                        CFF_DONE: 'ProgressRoute_CFF_DONE_85',
                        CFF_PHASE: 'ProgressRoute_CFF_PHASE_76',
                        CFF_IMPORTANT: 'ProgressRoute_CFF_IMPORTANT_9a',
                        CFF_HERO: 'ProgressRoute_CFF_HERO_fd',
                        CFF_ATTENTION: 'ProgressRoute_CFF_ATTENTION_be',
                        CFF_BACKGROUND: 'ProgressRoute_CFF_BACKGROUND_d2',
                        CFF_MINE: 'ProgressRoute_CFF_MINE_94',
                        CFF_VORTEX: 'ProgressRoute_CFF_VORTEX_93',
                        CFF_BARRIER: 'ProgressRoute_CFF_BARRIER_c8',
                        CFF_JUMP: 'ProgressRoute_CFF_JUMP_af',
                        base: 'ProgressRoute_base_ad',
                        base__appearing: 'ProgressRoute_base__appearing_95',
                        progress_appear: 'ProgressRoute_progress_appear_f5',
                        base__disappearing: 'ProgressRoute_base__disappearing_38',
                        header: 'ProgressRoute_header_f1',
                        progress_navigation: 'ProgressRoute_progress_navigation_4f',
                        previous_chapter: 'ProgressRoute_previous_chapter_e3',
                        next_chapter: 'ProgressRoute_next_chapter_a9',
                        panel: 'ProgressRoute_panel_65',
                        panel_content: 'ProgressRoute_panel_content_71',
                        panel_left: 'ProgressRoute_panel_left_2e',
                        panel_right: 'ProgressRoute_panel_right_72',
                        panel_right_background: 'ProgressRoute_panel_right_background_c7',
                        base__locked: 'ProgressRoute_base__locked_89',
                        panel_right_background__uhura: 'ProgressRoute_panel_right_background__uhura_c6',
                        panel_right_background_2: 'ProgressRoute_panel_right_background_2_f9',
                        panel_right_background_3: 'ProgressRoute_panel_right_background_3_c0',
                        uhuraWink: 'ProgressRoute_uhuraWink_2a',
                        background: 'ProgressRoute_background_37',
                        base__ready_for_research: 'ProgressRoute_base__ready_for_research_1d',
                        narrative: 'ProgressRoute_narrative_46',
                        steps: 'ProgressRoute_steps_ff',
                        step: 'ProgressRoute_step_e7',
                        chapter: 'ProgressRoute_chapter_8e',
                        chapter_deco: 'ProgressRoute_chapter_deco_55',
                        chapter_deco_text: 'ProgressRoute_chapter_deco_text_cf',
                        chapter_deco_dots: 'ProgressRoute_chapter_deco_dots_a2',
                        chapter_deco_line: 'ProgressRoute_chapter_deco_line_b3',
                        chapter_deco_dot1: 'ProgressRoute_chapter_deco_dot1_00',
                        chapter_deco_dot2: 'ProgressRoute_chapter_deco_dot2_6a',
                        chapter_deco_dot3: 'ProgressRoute_chapter_deco_dot3_64',
                        slide: 'ProgressRoute_slide_9d',
                        chapter_status: 'ProgressRoute_chapter_status_74',
                        base__done: 'ProgressRoute_base__done_a2',
                        objective: 'ProgressRoute_objective_99',
                        objective_description: 'ProgressRoute_objective_description_ab',
                        antimatter_icon: 'ProgressRoute_antimatter_icon_e4',
                        motto: 'ProgressRoute_motto_18',
                        commander: 'ProgressRoute_commander_82',
                        commander_block: 'ProgressRoute_commander_block_79',
                        commander_skills: 'ProgressRoute_commander_skills_ce',
                        commander_voice: 'ProgressRoute_commander_voice_b0',
                        commander_voice_button: 'ProgressRoute_commander_voice_button_ae',
                        commander_voice_icon: 'ProgressRoute_commander_voice_icon_78',
                        commander_description: 'ProgressRoute_commander_description_8b',
                        check_icon: 'ProgressRoute_check_icon_bb',
                        title_deco: 'ProgressRoute_title_deco_e9',
                        glitch1: 'ProgressRoute_glitch1_6b',
                        glitch2: 'ProgressRoute_glitch2_fc',
                        glitch3: 'ProgressRoute_glitch3_86',
                    },
                    Sa = {
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
                    Na = [
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
                function Pa() {
                    return (
                        (Pa =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        Pa.apply(this, arguments)
                    );
                }
                class xa extends r().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && Nt(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && Nt(this.props.soundClick);
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
                            u = e.goto,
                            n = e.side,
                            s = e.type,
                            o = e.classNames,
                            i = e.onMouseEnter,
                            c = e.onMouseLeave,
                            l = e.onMouseDown,
                            _ = e.onMouseUp,
                            m =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        u,
                                        r = {},
                                        n = Object.keys(e);
                                    for (u = 0; u < n.length; u++) (a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                    return r;
                                })(e, Na)),
                            d = F()(Sa.base, Sa[`base__${s}`], Sa[`base__${n}`], null == o ? void 0 : o.base),
                            E = F()(Sa.icon, Sa[`icon__${s}`], Sa[`icon__${n}`], null == o ? void 0 : o.icon),
                            g = F()(Sa.glow, null == o ? void 0 : o.glow),
                            f = F()(Sa.caption, Sa[`caption__${s}`], null == o ? void 0 : o.caption),
                            p = F()(Sa.goto, null == o ? void 0 : o.goto);
                        return r().createElement(
                            'div',
                            Pa(
                                {
                                    className: d,
                                    onMouseEnter: this._onMouseEnter(i),
                                    onMouseLeave: this._onMouseLeave(c),
                                    onMouseDown: this._onMouseDown(l),
                                    onMouseUp: this._onMouseUp(_),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: a,
                                },
                                m,
                            ),
                            'info' !== s && r().createElement('div', { className: Sa.shine }),
                            r().createElement('div', { className: E }, r().createElement('div', { className: g })),
                            r().createElement('div', { className: f }, t),
                            u && r().createElement('div', { className: p }, u),
                        );
                    }
                }
                xa.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const Ta = 'ProgressNavigation_chapter_dot_63',
                    Oa = 'ProgressNavigation_chapter_dot_inner_ac',
                    ka = [
                        {
                            chapter: I.Kirk,
                            lines: [64, 0, 52],
                            linesActive: [14, 32, 10, 45, 27],
                            linesSmall: [48, 0, 39],
                            linesSmallActive: [5, 25, 11, 42, 16],
                            image: R.images.cosmic_event.gui.maps.icons.progress_navigation.Kirk(),
                            name: R.strings.cosmicEvent.lobby.progress.chapter.kirk.name(),
                        },
                        {
                            chapter: I.Spock,
                            lines: [58, 0, 58],
                            linesActive: [10, 33, 12, 44, 29],
                            linesSmall: [44, 0, 43],
                            linesSmallActive: [1, 28, 12, 42, 16],
                            image: R.images.cosmic_event.gui.maps.icons.progress_navigation.Spock(),
                            name: R.strings.cosmicEvent.lobby.progress.chapter.spock.name(),
                        },
                        {
                            chapter: I.Uhura,
                            lines: [52, 0, 64],
                            linesActive: [10, 33, 12, 48, 25],
                            linesSmall: [39, 0, 48],
                            linesSmallActive: [1, 28, 10, 44, 16],
                            image: R.images.cosmic_event.gui.maps.icons.progress_navigation.Uhura(),
                            name: R.strings.cosmicEvent.lobby.progress.chapter.uhura.name(),
                        },
                    ],
                    Ia = (0, X.observer)(({ className: e, selectedChapter: t }) => {
                        const a = ze(),
                            u = a.model,
                            n = a.controls,
                            s = B().mediaSize,
                            o = R.images.cosmic_event.gui.maps.icons.progress_navigation,
                            i = R.strings.cosmicEvent.lobby.progress;
                        return r().createElement(
                            'div',
                            { className: F()('ProgressNavigation_base_f9', e) },
                            ka.map(
                                (
                                    {
                                        chapter: e,
                                        image: a,
                                        lines: c,
                                        linesActive: l,
                                        linesSmallActive: _,
                                        linesSmall: m,
                                        name: d,
                                    },
                                    E,
                                ) => {
                                    const g = u.computes.getProgression(E),
                                        f = g.every((e) => 'done' === e.status),
                                        p = g.every((e) => 'locked' === e.status),
                                        h = g.some((e) => 'in_progress' === e.status),
                                        A = t === e,
                                        b = s >= D.Medium ? c : m,
                                        v = s >= D.Medium ? l : _;
                                    return r().createElement(
                                        'div',
                                        {
                                            className: F()(
                                                'ProgressNavigation_chapter_c3',
                                                h && 'ProgressNavigation_chapter__active_ec',
                                                f && 'ProgressNavigation_chapter__done_ca',
                                                p && 'ProgressNavigation_chapter__locked_9f',
                                                A && 'ProgressNavigation_chapter__selected_3f',
                                            ),
                                            key: E,
                                        },
                                        r().createElement(
                                            'div',
                                            { className: 'ProgressNavigation_chapter_image_container_86' },
                                            r().createElement('img', {
                                                className: 'ProgressNavigation_chapter_hover_b8',
                                                src: o.hover(),
                                            }),
                                            r().createElement('img', {
                                                className: 'ProgressNavigation_chapter_glow_f3',
                                                src: o.glow(),
                                            }),
                                            r().createElement('img', {
                                                className: 'ProgressNavigation_chapter_image_0b',
                                                src: a,
                                                onMouseEnter: () => Nt('highlight'),
                                                onClick: () => n.onLobbyRouteChange(e),
                                            }),
                                            r().createElement('img', {
                                                className: 'ProgressNavigation_chapter_lock_be',
                                                src: o.lock(),
                                            }),
                                        ),
                                        r().createElement(
                                            'div',
                                            { className: 'ProgressNavigation_chapter_progress_d1' },
                                            (h ? v : b).map((e, t) =>
                                                e
                                                    ? r().createElement('div', {
                                                          key: t,
                                                          className: F()(
                                                              'ProgressNavigation_chapter_line_5a',
                                                              t % 2 && 'ProgressNavigation_chapter_line__empty_16',
                                                          ),
                                                          style: { width: `${e}rem` },
                                                      })
                                                    : r().createElement(
                                                          'div',
                                                          { key: t, className: Ta },
                                                          r().createElement('div', { className: Oa }),
                                                      ),
                                            ),
                                            E === ka.length - 1 &&
                                                r().createElement('img', {
                                                    className: 'ProgressNavigation_chapter_decoration_43',
                                                    src: o.decoration(),
                                                }),
                                            h &&
                                                r().createElement(
                                                    'div',
                                                    { className: 'ProgressNavigation_chapter_info_62' },
                                                    r().createElement(
                                                        'div',
                                                        { className: 'ProgressNavigation_chapter_name_10' },
                                                        d,
                                                    ),
                                                    r().createElement(
                                                        'div',
                                                        { className: 'ProgressNavigation_chapter_status_40' },
                                                        i.chapter_progress.in_progress(),
                                                    ),
                                                    r().createElement(
                                                        'div',
                                                        { className: Ta },
                                                        r().createElement('div', {
                                                            className: 'ProgressNavigation_chapter_dot_pointer_28',
                                                        }),
                                                        r().createElement('div', { className: Oa }),
                                                    ),
                                                    r().createElement(
                                                        'div',
                                                        { className: 'ProgressNavigation_chapter_stages_7d' },
                                                        g.map((e, t) =>
                                                            r().createElement(
                                                                'div',
                                                                {
                                                                    key: t,
                                                                    className: F()(
                                                                        'ProgressNavigation_chapter_stage_58',
                                                                        'locked' === e.status &&
                                                                            'ProgressNavigation_chapter_stage__locked_00',
                                                                    ),
                                                                },
                                                                r().createElement('div', {
                                                                    className:
                                                                        'ProgressNavigation_chapter_stage_dot_3e',
                                                                }),
                                                                r().createElement(ft, {
                                                                    text: i.chapter_progress.stage(),
                                                                    classMix:
                                                                        'ProgressNavigation_chapter_stage_title_1f',
                                                                    binding: { number: e.stepNumber },
                                                                }),
                                                            ),
                                                        ),
                                                    ),
                                                ),
                                        ),
                                    );
                                },
                            ),
                        );
                    }),
                    La = () => Nt('highlight'),
                    Ha = (0, X.observer)((e) => {
                        const t = ze().controls,
                            a = e.className,
                            u = e.leftContent,
                            n =
                                void 0 === u
                                    ? r().createElement(xa, {
                                          caption: R.strings.cosmicEvent.missionBrief(),
                                          onMouseEnter: La,
                                          type: 'info',
                                          onClick: () => t.onLobbyRouteChange(I.MissionBrief),
                                      })
                                    : u,
                            s = e.rightContent,
                            o =
                                void 0 === s
                                    ? r().createElement(xa, {
                                          caption: R.strings.cosmicEvent.close(),
                                          onClick: () => t.onLobbyRouteChange(I.Main),
                                          side: 'right',
                                          type: 'close',
                                      })
                                    : s,
                            i = e.centerContent,
                            c = void 0 === i ? r().createElement(Ia, { className: 'Header_progressNavigation_7b' }) : i;
                        return r().createElement(
                            'div',
                            { className: F()('Header_base_20', a) },
                            r().createElement('div', { className: 'Header_leftContent_da' }, n),
                            r().createElement('div', null, c),
                            r().createElement('div', { className: 'Header_rightContent_22' }, o),
                        );
                    }),
                    Ua = {
                        cff_splash: 'Button_cff_splash_cf',
                        cff_splash_small: 'Button_cff_splash_small_90',
                        cff_title: 'Button_cff_title_ce',
                        cff_heading: 'Button_cff_heading_db',
                        cff_heading_small: 'Button_cff_heading_small_34',
                        cff_body: 'Button_cff_body_57',
                        cff_emphasis: 'Button_cff_emphasis_59',
                        cff_emphasis_small: 'Button_cff_emphasis_small_7e',
                        cff_body_small: 'Button_cff_body_small_de',
                        cff_player: 'Button_cff_player_f0',
                        cff_decorative_title: 'Button_cff_decorative_title_29',
                        cff_decorative_body: 'Button_cff_decorative_body_4b',
                        boxImage: 'Button_boxImage_29',
                        transparent: 'Button_transparent_6f',
                        fade_in: 'Button_fade_in_66',
                        fade_from_left: 'Button_fade_from_left_43',
                        fade_from_bottom: 'Button_fade_from_bottom_0a',
                        fade_out: 'Button_fade_out_be',
                        fade_to_left: 'Button_fade_to_left_78',
                        fade_to_bottom: 'Button_fade_to_bottom_6a',
                        delay_100: 'Button_delay_100_f0',
                        delay_200: 'Button_delay_200_88',
                        delay_300: 'Button_delay_300_14',
                        delay_400: 'Button_delay_400_78',
                        delay_500: 'Button_delay_500_c0',
                        delay_600: 'Button_delay_600_52',
                        delay_700: 'Button_delay_700_80',
                        delay_800: 'Button_delay_800_e9',
                        delay_1000: 'Button_delay_1000_a5',
                        delay_1250: 'Button_delay_1250_5f',
                        delay_1500: 'Button_delay_1500_43',
                        delay_3000: 'Button_delay_3000_ae',
                        glitch: 'Button_glitch_d4',
                        CFF_MAIN: 'Button_CFF_MAIN_c9',
                        CFF_SUPPORT: 'Button_CFF_SUPPORT_bd',
                        CFF_DONE: 'Button_CFF_DONE_8a',
                        CFF_PHASE: 'Button_CFF_PHASE_5d',
                        CFF_IMPORTANT: 'Button_CFF_IMPORTANT_4e',
                        CFF_HERO: 'Button_CFF_HERO_b3',
                        CFF_ATTENTION: 'Button_CFF_ATTENTION_53',
                        CFF_BACKGROUND: 'Button_CFF_BACKGROUND_47',
                        CFF_MINE: 'Button_CFF_MINE_d8',
                        CFF_VORTEX: 'Button_CFF_VORTEX_1d',
                        CFF_BARRIER: 'Button_CFF_BARRIER_b9',
                        CFF_JUMP: 'Button_CFF_JUMP_ef',
                        base: 'Button_base_3d',
                        base__main: 'Button_base__main_27',
                        base__done: 'Button_base__done_03',
                        base__disabled: 'Button_base__disabled_7c',
                        glitch1: 'Button_glitch1_db',
                        glitch2: 'Button_glitch2_aa',
                        glitch3: 'Button_glitch3_a1',
                    },
                    Ga = ['className', 'textVariant', 'color', 'onClick', 'children', 'disabled'];
                function ja() {
                    return (
                        (ja =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        ja.apply(this, arguments)
                    );
                }
                const Wa = { main: Ua.base__main, done: Ua.base__done, disabled: Ua.base__disabled },
                    Xa = (e) => {
                        let t = e.className,
                            a = e.textVariant,
                            u = e.color,
                            n = void 0 === u ? 'main' : u,
                            s = e.onClick,
                            o = e.children,
                            i = e.disabled,
                            c = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    u,
                                    r = {},
                                    n = Object.keys(e);
                                for (u = 0; u < n.length; u++) (a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, Ga);
                        return r().createElement(
                            ot,
                            ja({ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }, c, {
                                className: F()(Ua.base, Wa[i ? 'disabled' : n], a && Ua[a], t),
                                onClick: s,
                            }),
                            o,
                        );
                    },
                    $a = ({ className: e, previous: t, disabled: a, onClick: u, onMouseEnter: n }) =>
                        r().createElement(
                            'button',
                            {
                                className: F()(
                                    'ArrowButton_base_35',
                                    t && 'ArrowButton_base__previous_e2',
                                    a && 'ArrowButton_base__disabled_b8',
                                    e,
                                ),
                                onClick: u,
                                onMouseEnter: n,
                            },
                            r().createElement('div', { className: 'ArrowButton_icon_5b' }),
                        ),
                    za = ['className', 'active'];
                function Va() {
                    return (
                        (Va =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        Va.apply(this, arguments)
                    );
                }
                const qa = (e) => {
                        let t = e.className,
                            a = e.active,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    u,
                                    r = {},
                                    n = Object.keys(e);
                                for (u = 0; u < n.length; u++) (a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, za);
                        return r().createElement(
                            'div',
                            Va({}, u, { className: F()('ListenIcon_base_4e', a && 'ListenIcon_base__active_66', t) }),
                            r().createElement('div', { className: 'ListenIcon_circle_inner_2f' }),
                            r().createElement('div', { className: 'ListenIcon_circle_outer_72' }),
                            r().createElement('img', {
                                src: R.images.cosmic_event.gui.maps.icons.progress_route.icon_listen(),
                            }),
                        );
                    },
                    Ya = {
                        cff_splash: 'ProgressStep_cff_splash_4a',
                        cff_splash_small: 'ProgressStep_cff_splash_small_80',
                        cff_title: 'ProgressStep_cff_title_35',
                        cff_heading: 'ProgressStep_cff_heading_48',
                        cff_heading_small: 'ProgressStep_cff_heading_small_b6',
                        cff_body: 'ProgressStep_cff_body_8e',
                        cff_emphasis: 'ProgressStep_cff_emphasis_ce',
                        cff_emphasis_small: 'ProgressStep_cff_emphasis_small_66',
                        cff_body_small: 'ProgressStep_cff_body_small_34',
                        cff_player: 'ProgressStep_cff_player_3a',
                        cff_decorative_title: 'ProgressStep_cff_decorative_title_df',
                        cff_decorative_body: 'ProgressStep_cff_decorative_body_81',
                        boxImage: 'ProgressStep_boxImage_41',
                        transparent: 'ProgressStep_transparent_ee',
                        fade_in: 'ProgressStep_fade_in_f5',
                        fade_from_left: 'ProgressStep_fade_from_left_a1',
                        fade_from_bottom: 'ProgressStep_fade_from_bottom_22',
                        fade_out: 'ProgressStep_fade_out_1b',
                        fade_to_left: 'ProgressStep_fade_to_left_fb',
                        fade_to_bottom: 'ProgressStep_fade_to_bottom_8a',
                        delay_100: 'ProgressStep_delay_100_c4',
                        delay_200: 'ProgressStep_delay_200_9e',
                        delay_300: 'ProgressStep_delay_300_83',
                        delay_400: 'ProgressStep_delay_400_9d',
                        delay_500: 'ProgressStep_delay_500_c8',
                        delay_600: 'ProgressStep_delay_600_3c',
                        delay_700: 'ProgressStep_delay_700_cd',
                        delay_800: 'ProgressStep_delay_800_35',
                        delay_1000: 'ProgressStep_delay_1000_72',
                        delay_1250: 'ProgressStep_delay_1250_69',
                        delay_1500: 'ProgressStep_delay_1500_64',
                        delay_3000: 'ProgressStep_delay_3000_6f',
                        glitch: 'ProgressStep_glitch_c0',
                        CFF_MAIN: 'ProgressStep_CFF_MAIN_31',
                        CFF_SUPPORT: 'ProgressStep_CFF_SUPPORT_25',
                        CFF_DONE: 'ProgressStep_CFF_DONE_e9',
                        CFF_PHASE: 'ProgressStep_CFF_PHASE_83',
                        CFF_IMPORTANT: 'ProgressStep_CFF_IMPORTANT_13',
                        CFF_HERO: 'ProgressStep_CFF_HERO_c7',
                        CFF_ATTENTION: 'ProgressStep_CFF_ATTENTION_5b',
                        CFF_BACKGROUND: 'ProgressStep_CFF_BACKGROUND_ae',
                        CFF_MINE: 'ProgressStep_CFF_MINE_3c',
                        CFF_VORTEX: 'ProgressStep_CFF_VORTEX_23',
                        CFF_BARRIER: 'ProgressStep_CFF_BARRIER_dc',
                        CFF_JUMP: 'ProgressStep_CFF_JUMP_5c',
                        main: 'ProgressStep_main_06',
                        main_content: 'ProgressStep_main_content_8d',
                        base__done: 'ProgressStep_base__done_a7',
                        main_highlight: 'ProgressStep_main_highlight_31',
                        main_highlight2: 'ProgressStep_main_highlight2_c3',
                        base__in_progress: 'ProgressStep_base__in_progress_2e',
                        main_border: 'ProgressStep_main_border_00',
                        base__locked: 'ProgressStep_base__locked_c1',
                        stepNumber: 'ProgressStep_stepNumber_33',
                        icon: 'ProgressStep_icon_d5',
                        progressCount: 'ProgressStep_progressCount_cb',
                        current: 'ProgressStep_current_57',
                        current_overlay: 'ProgressStep_current_overlay_ed',
                        bonus: 'ProgressStep_bonus_8d',
                        antimatter_icon: 'ProgressStep_antimatter_icon_12',
                        check_icon: 'ProgressStep_check_icon_66',
                        progress: 'ProgressStep_progress_80',
                        deco: 'ProgressStep_deco_13',
                        deco_highlight: 'ProgressStep_deco_highlight_b5',
                        deco_border: 'ProgressStep_deco_border_fa',
                        glitch1: 'ProgressStep_glitch1_a4',
                        glitch2: 'ProgressStep_glitch2_9f',
                        glitch3: 'ProgressStep_glitch3_90',
                    },
                    Ka = {
                        base: 'ProgressBar_base_45',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let Qa, Za;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium');
                })(Qa || (Qa = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(Za || (Za = {}));
                const Ja = ({ size: e = Qa.Default }) => {
                        const t = F()(Ka.background, Ka[`background__${e}`]);
                        return r().createElement('div', { className: t });
                    },
                    eu = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    tu = ({ size: e }) => {
                        const t = F()(eu.base, eu[`base__${e}`]);
                        return r().createElement('div', { className: t });
                    },
                    au = {
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
                    uu = (0, u.memo)(
                        ({ size: e, lineRef: t, disabled: a, baseStyles: u, isComplete: n, withoutBounce: s }) => {
                            const o = F()(
                                    au.base,
                                    au[`base__${e}`],
                                    a && au.base__disabled,
                                    n && au.base__finished,
                                    s && au.base__withoutBounce,
                                ),
                                i = !a && !n;
                            return r().createElement(
                                'div',
                                { className: o, style: u, ref: t },
                                r().createElement('div', { className: au.pattern }),
                                r().createElement('div', { className: au.gradient }),
                                i && r().createElement(tu, { size: e }),
                            );
                        },
                    ),
                    ru = ({ size: e, value: t, lineRef: a, disabled: n, onComplete: s }) => {
                        const o = (0, u.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            i = 100 === t;
                        return (
                            (0, u.useEffect)(() => {
                                i && s && s();
                            }, [i, s]),
                            r().createElement(uu, { size: e, disabled: n, baseStyles: o, isComplete: i, lineRef: a })
                        );
                    },
                    nu = (e, t) => {
                        let a;
                        const u = setTimeout(() => {
                            a = e();
                        }, t);
                        return () => {
                            'function' == typeof a && a(), clearTimeout(u);
                        };
                    };
                let su, ou;
                !(function (e) {
                    (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                })(su || (su = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(ou || (ou = {}));
                const iu = (0, u.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: a,
                            from: n,
                            size: s,
                            to: o,
                            onEndAnimation: i,
                            onChangeAnimationState: c,
                        }) => {
                            const l = o < n,
                                _ = (0, u.useState)(ou.Idle),
                                m = _[0],
                                d = _[1],
                                E = m === ou.In,
                                g = m === ou.End,
                                f = m === ou.Idle,
                                p = (0, u.useCallback)(
                                    (e) => {
                                        d(e), c && c(e);
                                    },
                                    [c],
                                );
                            (0, u.useEffect)(() => {
                                if (f && !a)
                                    return nu(() => {
                                        p(ou.In);
                                    }, t);
                            }, [p, a, f, t]),
                                (0, u.useEffect)(() => {
                                    if (E)
                                        return nu(() => {
                                            i && i(), p(ou.End);
                                        }, e + t);
                                }, [p, E, i, t, e]);
                            const h = (0, u.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [l ? 'left' : 'right']: '0',
                                    }),
                                    [l, t, e],
                                ),
                                F = (0, u.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [l ? 'left' : 'right']: '0',
                                    }),
                                    [l, t, e],
                                ),
                                A = (0, u.useMemo)(
                                    () => ({ width: `${Math.abs(n - o)}%`, left: `${l ? o : n}%` }),
                                    [n, l, o],
                                );
                            return g
                                ? null
                                : r().createElement(
                                      'div',
                                      { className: 'ProgressBarDeltaSimple_base_6c', style: A },
                                      r().createElement(
                                          'div',
                                          { style: f ? h : F, className: 'ProgressBarDeltaSimple_delta_99' },
                                          r().createElement(tu, { size: s }),
                                      ),
                                  );
                        },
                    ),
                    cu = (0, u.memo)(
                        ({
                            to: e,
                            size: t,
                            from: a,
                            lineRef: n,
                            disabled: s,
                            isComplete: o,
                            animationSettings: i,
                            onChangeAnimationState: c,
                            onEndAnimation: l,
                        }) => {
                            const _ = (0, u.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${i.line.duration}ms`,
                                    transitionDelay: `${i.line.delay}ms`,
                                }),
                                [i.line.delay, i.line.duration, e],
                            );
                            return r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(uu, {
                                    size: t,
                                    lineRef: n,
                                    disabled: s,
                                    isComplete: o,
                                    baseStyles: _,
                                }),
                                a >= 0 &&
                                    r().createElement(iu, {
                                        transitionDuration: i.delta.duration,
                                        transitionDelay: i.delta.delay,
                                        freezed: i.freezed,
                                        from: a,
                                        size: t,
                                        to: e,
                                        onChangeAnimationState: c,
                                        onEndAnimation: l,
                                    }),
                            );
                        },
                    ),
                    lu = (e) => (e ? { left: 0 } : { right: 0 }),
                    _u = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    mu = (e) => ({ transitionDuration: `${e}ms` }),
                    du = (0, u.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: a,
                            from: n,
                            size: s,
                            to: o,
                            onEndAnimation: i,
                            onChangeAnimationState: c,
                            className: l,
                        }) => {
                            const _ = o < n,
                                m = (0, u.useState)(su.Idle),
                                d = m[0],
                                E = m[1],
                                g = d === su.End,
                                f = d === su.Idle,
                                p = d === su.Grow,
                                h = d === su.Shrink,
                                A = (0, u.useCallback)(
                                    (e) => {
                                        E(e), c && c(e);
                                    },
                                    [c],
                                ),
                                b = (0, u.useCallback)(
                                    (e, t) =>
                                        nu(() => {
                                            A(e);
                                        }, t),
                                    [A],
                                );
                            (0, u.useEffect)(() => {
                                if (!a)
                                    return f
                                        ? b(su.Grow, t)
                                        : p
                                          ? b(su.Shrink, e)
                                          : h
                                            ? b(su.End, e)
                                            : void (g && i && i());
                            }, [b, a, g, p, f, h, i, t, e]);
                            const D = (0, u.useMemo)(() => Object.assign({ width: '100%' }, mu(e), lu(_)), [_, e]),
                                v = (0, u.useMemo)(() => Object.assign({ width: '0%' }, mu(e), lu(_)), [_, e]),
                                C = (0, u.useMemo)(() => Object.assign({ width: '0%' }, _u(_, n), mu(e)), [n, _, e]),
                                B = (0, u.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(o - n)}%` }, _u(_, n), mu(e)),
                                    [n, _, o, e],
                                );
                            if (g) return null;
                            const y = F()(
                                'ProgressBarDeltaGrow_base_7e',
                                l,
                                _ && 0 === o && 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                            );
                            return r().createElement(
                                'div',
                                { style: f ? C : B, className: y },
                                r().createElement(
                                    'div',
                                    { style: h ? v : D, className: 'ProgressBarDeltaGrow_glow_68' },
                                    r().createElement(tu, { size: s }),
                                ),
                            );
                        },
                    ),
                    Eu = (0, u.memo)(
                        ({
                            to: e,
                            size: t,
                            from: a,
                            lineRef: n,
                            disabled: s,
                            isComplete: o,
                            animationSettings: i,
                            onEndAnimation: c,
                            onChangeAnimationState: l,
                        }) => {
                            const _ = e < a,
                                m = (0, u.useState)(!1),
                                d = m[0],
                                E = m[1],
                                g = (0, u.useCallback)(
                                    (e) => {
                                        e === su.Shrink && E(!0), l && l(e);
                                    },
                                    [l],
                                ),
                                f = (0, u.useMemo)(() => ({ width: `${a}%`, transitionProperty: 'none' }), [a]),
                                p = (0, u.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${i.line.duration}ms` }),
                                    [i.line.duration, e],
                                );
                            return r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(uu, {
                                    size: t,
                                    lineRef: n,
                                    disabled: s,
                                    isComplete: o,
                                    withoutBounce: _ && 0 === e,
                                    baseStyles: d ? p : f,
                                }),
                                a >= 0 &&
                                    r().createElement(du, {
                                        transitionDuration: i.delta.duration,
                                        transitionDelay: i.delta.delay,
                                        onChangeAnimationState: g,
                                        freezed: i.freezed,
                                        onEndAnimation: c,
                                        from: a,
                                        size: t,
                                        to: e,
                                        className: i.delta.className,
                                    }),
                            );
                        },
                    ),
                    gu = ['onComplete', 'onEndAnimation'];
                function fu() {
                    return (
                        (fu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        fu.apply(this, arguments)
                    );
                }
                const pu = (0, u.memo)((e) => {
                        let t = e.onComplete,
                            a = e.onEndAnimation,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    u,
                                    r = {},
                                    n = Object.keys(e);
                                for (u = 0; u < n.length; u++) (a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, gu);
                        const s = (0, u.useState)(!1),
                            o = s[0],
                            i = s[1],
                            c = (0, u.useCallback)(() => {
                                const e = 100 === n.to;
                                e !== o && i(e), e && t && t(), a && a();
                            }, [o, t, a, n.to]);
                        switch (n.animationSettings.type) {
                            case Za.Simple:
                                return r().createElement(cu, fu({}, n, { onEndAnimation: c, isComplete: o }));
                            case Za.Growing:
                                return r().createElement(Eu, fu({}, n, { onEndAnimation: c, isComplete: o }));
                            default:
                                return null;
                        }
                    }),
                    hu = ['onEndAnimation'];
                function Fu() {
                    return (
                        (Fu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        Fu.apply(this, arguments)
                    );
                }
                const Au = (0, u.memo)((e) => {
                    let t = e.onEndAnimation,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                u,
                                r = {},
                                n = Object.keys(e);
                            for (u = 0; u < n.length; u++) (a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                            return r;
                        })(e, hu);
                    const n = (0, u.useRef)({}),
                        s = (0, u.useCallback)(() => {
                            (n.current.from = void 0), t && t();
                        }, [t]),
                        o = 'number' == typeof n.current.from ? n.current.from : a.from;
                    return (
                        (n.current.from = o),
                        r().createElement(pu, Fu({}, a, { onEndAnimation: s, key: `${o}-${a.to}`, from: o }))
                    );
                });
                function bu() {
                    return (
                        (bu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        bu.apply(this, arguments)
                    );
                }
                const Du = (0, u.memo)(
                        ({
                            size: e,
                            value: t,
                            lineRef: a,
                            disabled: u,
                            deltaFrom: n,
                            animationSettings: s,
                            onEndAnimation: o,
                            onChangeAnimationState: i,
                            onComplete: c,
                        }) => {
                            if (n === t)
                                return r().createElement(ru, {
                                    key: `${n}-${t}`,
                                    size: e,
                                    value: t,
                                    lineRef: a,
                                    disabled: u,
                                    onComplete: c,
                                });
                            const l = {
                                from: n,
                                to: t,
                                size: e,
                                lineRef: a,
                                disabled: u,
                                animationSettings: s,
                                onComplete: c,
                                onEndAnimation: o,
                                onChangeAnimationState: i,
                            };
                            return s.withStack
                                ? r().createElement(Au, l)
                                : r().createElement(pu, bu({ key: `${n}-${t}` }, l));
                        },
                    ),
                    vu = (e) => ({
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
                    Cu = (e, t, a) => (a < e ? e : a > t ? t : a),
                    Bu = (e, t, a) => ('number' == typeof a ? (Cu(0, t, a) / t) * 100 : e),
                    yu = {
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
                    Ru = {
                        freezed: !1,
                        withStack: !1,
                        type: Za.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    Mu = (0, u.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = yu,
                            size: a = Qa.Default,
                            animationSettings: n = Ru,
                            disabled: s = !1,
                            withoutBackground: o = !1,
                            value: i,
                            deltaFrom: c,
                            lineRef: l,
                            onChangeAnimationState: _,
                            onEndAnimation: m,
                            onComplete: d,
                        }) => {
                            const E = ((e, t, a) =>
                                (0, u.useMemo)(() => {
                                    const u = (Cu(0, t, e) / t) * 100;
                                    return { value: u, deltaFrom: Bu(u, t, a) };
                                }, [a, t, e]))(i, e, c);
                            return r().createElement(
                                'div',
                                { className: F()(Ka.base, Ka[`base__${a}`]), style: vu(t) },
                                !o && r().createElement(Ja, { size: a }),
                                r().createElement(Du, {
                                    size: a,
                                    lineRef: l,
                                    disabled: s,
                                    value: E.value,
                                    deltaFrom: E.deltaFrom,
                                    animationSettings: n,
                                    onEndAnimation: m,
                                    onChangeAnimationState: _,
                                    onComplete: d,
                                }),
                            );
                        },
                    );
                class wu extends r().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? U.B3.GOLD : U.B3.INTEGRAL;
                        const t = U.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                let Su, Nu, Pu, xu, Tu, Ou, ku;
                (wu.defaultProps = { format: 'integral' }),
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
                            (e.NewYearAlbumsAccess = 'newYearAlbumsAccess'),
                            (e.NewYearFillers = 'ny22Fillers'),
                            (e.NewYearInvoice = 'newYearInvoice'),
                            (e.NewYearToyFragments = 'ny22ToyFragments'),
                            (e.NewYearSlot = 'newYearSlot'),
                            (e.BonusX5 = 'battle_bonus_x5'),
                            (e.CrewBonusX3 = 'crew_bonus_x3'),
                            (e.Vehicles = 'vehicles'),
                            (e.EpicSelectToken = 'epicSelectToken'),
                            (e.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                            (e.BattleBoosterGift = 'battleBooster_gift'),
                            (e.OptionalDevice = 'optionalDevice');
                    })(Su || (Su = {})),
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
                            (e.BattleAchievement = 'dossier_achievement');
                    })(Nu || (Nu = {})),
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
                            (e.S48x48 = 's48x48');
                    })(Pu || (Pu = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(xu || (xu = {})),
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
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4');
                    })(Tu || (Tu = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(Ou || (Ou = {})),
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
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4');
                    })(ku || (ku = {}));
                const Iu = [
                        Su.Items,
                        Su.Equipment,
                        Su.Xp,
                        Su.XpFactor,
                        Su.Blueprints,
                        Su.BlueprintsAny,
                        Su.Goodies,
                        Su.Berths,
                        Su.Slots,
                        Su.Tokens,
                        Su.CrewSkins,
                        Su.CrewBooks,
                        Su.Customizations,
                        Su.CreditsFactor,
                        Su.TankmenXp,
                        Su.TankmenXpFactor,
                        Su.FreeXpFactor,
                        Su.BattleToken,
                        Su.PremiumUniversal,
                        Su.NaturalCover,
                        Su.BpCoin,
                        Su.BattlePassSelectToken,
                        Su.BattlaPassFinalAchievement,
                        Su.BattleBadge,
                        Su.BonusX5,
                        Su.CrewBonusX3,
                        Su.NewYearFillers,
                        Su.NewYearInvoice,
                        Su.EpicSelectToken,
                        Su.Comp7TokenWeeklyReward,
                        Su.BattleBoosterGift,
                        Su.OptionalDevice,
                        Su.FragmentAntimatter,
                        Su.CosmicLootbox,
                    ],
                    Lu = [Su.Gold, Su.Credits, Su.Crystal, Su.FreeXp],
                    Hu = [Su.BattlePassPoints],
                    Uu = [Su.PremiumPlus, Su.Premium],
                    Gu = (e) =>
                        Iu.includes(e)
                            ? xu.MULTI
                            : Lu.includes(e)
                              ? xu.CURRENCY
                              : Hu.includes(e)
                                ? xu.NUMBER
                                : Uu.includes(e)
                                  ? xu.PREMIUM_PLUS
                                  : xu.STRING,
                    ju = ['engravings', 'backgrounds'],
                    Wu = ['engraving', 'background'],
                    Xu = (e, t = Pu.Small) => {
                        const a = e.name,
                            u = e.type,
                            r = e.value,
                            n = e.icon,
                            s = e.item,
                            o = e.dogTagType,
                            i = ((e) => {
                                switch (e) {
                                    case Pu.S600x450:
                                        return 'c_600x450';
                                    case Pu.S400x300:
                                        return 'c_400x300';
                                    case Pu.S296x222:
                                        return 'c_296x222';
                                    case Pu.S232x174:
                                        return 'c_232x174';
                                    case Pu.Big:
                                        return 'c_80x80';
                                    case Pu.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(t);
                        switch (a) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${u}_${r}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${a}_${r}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${s}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${t}.${n}`;
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
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${n}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${t}.${n}`;
                            case 'dogTagComponents':
                                return ((e, t, a) => {
                                    const u = ju[e];
                                    if (u) {
                                        const r = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(u),
                                            n = r.$dyn(a);
                                        return n ? `${n}` : `${r.$dyn(Wu[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(o, t, n);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${i}.${n}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${i}.${n}`;
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
                                return `R.images.gui.maps.icons.collectionItems.${i}.${n}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${a}`;
                        }
                    },
                    $u = [Pu.Small, Pu.Big],
                    zu = ['children'];
                function Vu() {
                    return (
                        (Vu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        Vu.apply(this, arguments)
                    );
                }
                const qu = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                u,
                                r = {},
                                n = Object.keys(e);
                            for (u = 0; u < n.length; u++) (a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                            return r;
                        })(e, zu);
                    return r().createElement(
                        kt,
                        Vu(
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
                };
                function Yu() {
                    return (
                        (Yu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        Yu.apply(this, arguments)
                    );
                }
                const Ku = ({ children: e, tooltipArgs: t, className: a }) => {
                        if (!t) return e;
                        const u = r().createElement('div', { className: a }, e);
                        if (t.header || t.body) return r().createElement(Ut, t, u);
                        const n = t.contentId;
                        return n ? r().createElement(kt, Yu({}, t, { contentId: n }), u) : r().createElement(qu, t, u);
                    },
                    Qu = {
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
                    Zu = ({
                        name: e,
                        image: t,
                        isPeriodic: a = !1,
                        size: u = Pu.Big,
                        special: n,
                        value: s,
                        valueType: o,
                        style: i,
                        className: c,
                        classNames: l,
                        tooltipArgs: _,
                        periodicIconTooltipArgs: m,
                    }) => {
                        const d = ((e, t) => {
                                if (void 0 === t || !$u.includes(e)) return null;
                                switch (t) {
                                    case Tu.BATTLE_BOOSTER:
                                    case Tu.BATTLE_BOOSTER_REPLACE:
                                        return Ou.BATTLE_BOOSTER;
                                }
                            })(u, n),
                            E = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case Tu.BATTLE_BOOSTER:
                                        return ku.BATTLE_BOOSTER;
                                    case Tu.BATTLE_BOOSTER_REPLACE:
                                        return ku.BATTLE_BOOSTER_REPLACE;
                                    case Tu.BUILT_IN_EQUIPMENT:
                                        return ku.BUILT_IN_EQUIPMENT;
                                    case Tu.EQUIPMENT_PLUS:
                                        return ku.EQUIPMENT_PLUS;
                                    case Tu.EQUIPMENT_TROPHY_BASIC:
                                        return ku.EQUIPMENT_TROPHY_BASIC;
                                    case Tu.EQUIPMENT_TROPHY_UPGRADED:
                                        return ku.EQUIPMENT_TROPHY_UPGRADED;
                                    case Tu.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return ku.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case Tu.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return ku.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case Tu.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return ku.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case Tu.PROGRESSION_STYLE_UPGRADED_1:
                                        return ku.PROGRESSION_STYLE_UPGRADED_1;
                                    case Tu.PROGRESSION_STYLE_UPGRADED_2:
                                        return ku.PROGRESSION_STYLE_UPGRADED_2;
                                    case Tu.PROGRESSION_STYLE_UPGRADED_3:
                                        return ku.PROGRESSION_STYLE_UPGRADED_3;
                                    case Tu.PROGRESSION_STYLE_UPGRADED_4:
                                        return ku.PROGRESSION_STYLE_UPGRADED_4;
                                }
                            })(n),
                            g = ((e, t) => {
                                if (void 0 === e) return null;
                                switch (t) {
                                    case xu.MULTI: {
                                        const t = Number(e);
                                        return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                                    }
                                    case xu.CURRENCY:
                                    case xu.NUMBER:
                                        return r().createElement(wu, { format: 'integral', value: Number(e) });
                                    case xu.PREMIUM_PLUS: {
                                        const t = Number(e);
                                        return isNaN(t) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(s, o);
                        return r().createElement(
                            'div',
                            { className: F()(Qu.base, Qu[`base__${u}`], c), style: i },
                            r().createElement(
                                Ku,
                                { tooltipArgs: _, className: Qu.tooltipWrapper },
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement(
                                        'div',
                                        { className: F()(Qu.image, null == l ? void 0 : l.image) },
                                        d &&
                                            r().createElement('div', {
                                                className: F()(Qu.highlight, null == l ? void 0 : l.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${u}.${d}_highlight)`,
                                                },
                                            }),
                                        t &&
                                            r().createElement('div', {
                                                className: F()(Qu.icon, null == l ? void 0 : l.rewardIcon),
                                                style: { backgroundImage: `url(${t})` },
                                            }),
                                        E &&
                                            r().createElement('div', {
                                                className: F()(Qu.overlay, null == l ? void 0 : l.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${u}.${E}_overlay)`,
                                                },
                                            }),
                                    ),
                                    g &&
                                        r().createElement(
                                            'div',
                                            {
                                                className: F()(
                                                    Qu.info,
                                                    Qu[`info__${e}`],
                                                    o === xu.MULTI && Qu.info__multi,
                                                    null == l ? void 0 : l.info,
                                                ),
                                            },
                                            g,
                                        ),
                                ),
                            ),
                            a &&
                                r().createElement(
                                    Ku,
                                    { tooltipArgs: m },
                                    r().createElement('div', {
                                        className: F()(Qu.timer, null == l ? void 0 : l.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    Ju = ['stepNumber', 'currentProgress', 'eventPoints', 'bonuses', 'status', 'className'];
                function er() {
                    return (
                        (er =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        er.apply(this, arguments)
                    );
                }
                const tr = { done: Ya.base__done, in_progress: Ya.base__in_progress, locked: Ya.base__locked },
                    ar = (e) =>
                        ((e, t, a) => {
                            const u = t && { contentId: t };
                            return Object.assign(
                                {
                                    args: e,
                                    isEnabled: Boolean((e && e.tooltipId) || t),
                                    ignoreMouseClick: !0,
                                    ignoreShowDelay: !t,
                                },
                                u,
                                void 0,
                            );
                        })({ tooltipId: e.tooltipId }, Number(e.tooltipContentId)),
                    ur = (e) => {
                        let t = e.stepNumber,
                            a = e.currentProgress,
                            u = e.eventPoints,
                            n = e.bonuses,
                            s = e.status,
                            o = e.className,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    u,
                                    r = {},
                                    n = Object.keys(e);
                                for (u = 0; u < n.length; u++) (a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, Ju);
                        const c = a >= u,
                            l = 'locked' === s,
                            _ = B().mediaSize >= D.Large ? Pu.Big : Pu.Small,
                            m = r().useMemo(
                                () =>
                                    n.map((e) => ({
                                        name: e.name,
                                        image: Xu(e, Pu.Big),
                                        value: e.value,
                                        valueType: Gu(e.name),
                                        tooltipArgs: ar(e),
                                    })),
                                [n],
                            );
                        return r().createElement(
                            ot,
                            er({ column: !0, className: F()(Ya.base, tr[s], o) }, i),
                            r().createElement(
                                ot,
                                { column: !0, flex: '1 0 auto', alignItems: 'stretch', className: F()(Ya.main) },
                                r().createElement('div', { className: Ya.main_highlight }),
                                r().createElement('div', { className: Ya.main_highlight2 }),
                                r().createElement('div', { className: Ya.main_border }),
                                r().createElement(
                                    ot,
                                    {
                                        column: !0,
                                        flex: '1 0 auto',
                                        m: 10,
                                        alignItems: 'stretch',
                                        className: F()(Ya.main_content),
                                    },
                                    r().createElement(Ct, {
                                        className: Ya.stepNumber,
                                        variant: 'cff_body_small',
                                        color: 'CFF_SUPPORT',
                                        text: R.strings.cosmicEvent.lobby.progress.step() + He + t,
                                    }),
                                    r().createElement(
                                        ot,
                                        { className: Ya.icon, column: !0, center: !0, flex: '1 0 auto', mt_lg: 50 },
                                        r().createElement(
                                            Ut,
                                            {
                                                header: R.strings.cosmicEvent.lobby.progress.antimatter_tooltip.title(),
                                                body: R.strings.cosmicEvent.lobby.progress.antimatter_tooltip.description(),
                                            },
                                            r().createElement(ot, {
                                                width: 80,
                                                height: 80,
                                                width_lg: 180,
                                                height_lg: 135,
                                            }),
                                        ),
                                    ),
                                    r().createElement(
                                        ot,
                                        {
                                            className: Ya.rewards,
                                            row: !0,
                                            justifyContent: 'space-between',
                                            mr: 10,
                                            ml: 10,
                                            mr_md: 20,
                                            ml_md: 20,
                                            mb_lg: 20,
                                        },
                                        m.map((e, t) => r().createElement(Zu, er({ key: t }, e, { size: _ }))),
                                    ),
                                    c
                                        ? r().createElement(
                                              ot,
                                              {
                                                  className: Ya.progressCount,
                                                  row: !0,
                                                  justifyContent: 'space-between',
                                                  alignSelf: 'center',
                                                  alignItems: 'center',
                                                  mt: 32,
                                                  mb: 8,
                                              },
                                              r().createElement('div', { className: Ya.check_icon }),
                                              r().createElement(Ct, {
                                                  variant: 'cff_body_small',
                                                  variant_lg: 'cff_emphasis_small',
                                                  color: 'CFF_DONE',
                                                  text: R.strings.cosmicEvent.lobby.progress.reward_granted(),
                                              }),
                                          )
                                        : r().createElement(
                                              ot,
                                              {
                                                  className: Ya.progressCount,
                                                  row: !0,
                                                  justifyContent: 'space-between',
                                                  alignSelf: 'center',
                                                  alignItems: 'center',
                                                  mt: 32,
                                                  mb: 8,
                                              },
                                              r().createElement(Ct, {
                                                  variant: 'cff_emphasis',
                                                  color: 'CFF_IMPORTANT',
                                                  text: String(a),
                                              }),
                                              r().createElement(Ct, {
                                                  variant: 'cff_emphasis',
                                                  color: 'CFF_MAIN',
                                                  text: ' / ' + String(u),
                                              }),
                                              r().createElement('div', { className: Ya.antimatter_icon }),
                                          ),
                                ),
                            ),
                            r().createElement(
                                'div',
                                { className: Ya.progress },
                                r().createElement(Mu, { value: a, maxValue: u, disabled: l }),
                            ),
                            r().createElement(
                                'div',
                                { className: Ya.deco },
                                r().createElement('div', { className: Ya.deco_highlight }),
                                r().createElement('div', { className: Ya.deco_border }),
                            ),
                        );
                    };
                let rr;
                function nr() {
                    return (
                        (nr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        nr.apply(this, arguments)
                    );
                }
                !(function (e) {
                    (e.SixthSense = 'commander_sixthSense'),
                        (e.Brotherhood = 'brotherhood'),
                        (e.NewSkill = 'new_skill');
                })(rr || (rr = {}));
                const sr = () => Nt('highlight'),
                    or = [
                        'ev_cosmic_2024_progression_screen_vo_kirk',
                        'ev_cosmic_2024_progression_screen_vo_spock',
                        'ev_cosmic_2024_progression_screen_vo_uhura',
                    ],
                    ir = (e) => Ge.includes(e);
                let cr = I.Kirk;
                const lr = (0, X.observer)(({ isAppearing: e, isDisappearing: t }) => {
                        const a = ze(),
                            u = a.model,
                            n = a.controls,
                            s = u.fragments.fragmentCount.get(),
                            o = u.fragments.fragmentLimit.get(),
                            i = u.eventPoints.eventPoints.get(),
                            c = s >= o,
                            l = u.lobbyRoute.lobbyRoute.get(),
                            _ = ir(l) ? l : cr;
                        r().useEffect(() => {
                            ir(l) && (cr = l);
                        }, [l]);
                        const m = Ge.indexOf(_),
                            d = m + 1,
                            E = u.computes.getProgression(m),
                            g = r().useCallback(() => {
                                0 !== m && n.onLobbyRouteChange(Ge[m - 1]);
                            }, [n, m]),
                            f = r().useCallback(() => {
                                m !== Ge.length - 1 && n.onLobbyRouteChange(Ge[m + 1]);
                            }, [n, m]),
                            p = r().useCallback(() => {
                                Nt(or[m]);
                            }, [m]);
                        let h = 'locked';
                        E.every(({ status: e }) => 'done' === e)
                            ? (h = 'done')
                            : E.some(({ status: e }) => 'in_progress' === e) && (h = 'in_progress');
                        const A = R.strings.cosmicEvent.lobby.progress.chapter_progress[h](),
                            b = r().useState(!1),
                            D = b[0],
                            v = b[1],
                            C = r().useRef(void 0);
                        return (
                            r().useEffect(() => {
                                D && (C.current && clearTimeout(C.current), (C.current = setTimeout(() => v(!1), 2e3)));
                            }, [D]),
                            r().createElement(
                                ot,
                                {
                                    className: F()(
                                        wa.base,
                                        'locked' === h && wa.base__locked,
                                        'in_progress' === h && wa.base__in_progress,
                                        'done' === h && wa.base__done,
                                        c && wa.base__ready_for_research,
                                        e && wa.base__appearing,
                                        t && wa.base__disappearing,
                                    ),
                                    column: !0,
                                    alignItems: 'stretch',
                                },
                                r().createElement(
                                    ot,
                                    {
                                        flex: '1 0 auto',
                                        column: !0,
                                        center: !0,
                                        alignSelf: 'center',
                                        justifyContent: 'center',
                                    },
                                    r().createElement(
                                        ot,
                                        { row: !0, alignSelf: 'center', justifyContent: 'center', className: wa.panel },
                                        r().createElement(Ha, { className: wa.header, centerContent: null }),
                                        r().createElement(Ia, {
                                            className: wa.progress_navigation,
                                            selectedChapter: _,
                                        }),
                                        0 !== m &&
                                            r().createElement($a, {
                                                onMouseEnter: sr,
                                                className: wa.previous_chapter,
                                                previous: !0,
                                                onClick: g,
                                            }),
                                        m !== Ge.length - 1 &&
                                            r().createElement($a, {
                                                onMouseEnter: sr,
                                                className: wa.next_chapter,
                                                onClick: f,
                                            }),
                                        r().createElement('div', { className: wa.background }),
                                        r().createElement(
                                            ot,
                                            { row: !0, alignItems: 'stretch', className: wa.panel_content },
                                            r().createElement(
                                                ot,
                                                { flex: '1 1 auto', column: !0, className: wa.panel_left },
                                                r().createElement(
                                                    ot,
                                                    { row: !0, wrap: !0, alignItems: 'center', className: wa.chapter },
                                                    r().createElement(
                                                        ot,
                                                        { row: !0, className: wa.chapter_deco },
                                                        r().createElement(Ct, {
                                                            variant: 'cff_decorative_title',
                                                            className: wa.chapter_deco_text,
                                                            color: 'CFF_SUPPORT',
                                                            text: R.strings.cosmicDecor.lobby.progress.title_deco(),
                                                        }),
                                                        r().createElement(
                                                            'div',
                                                            { className: wa.chapter_deco_dots },
                                                            r().createElement(
                                                                'div',
                                                                { className: wa.chapter_deco_line },
                                                                r().createElement('div', {
                                                                    className: wa.chapter_deco_dot1,
                                                                }),
                                                                r().createElement('div', {
                                                                    className: wa.chapter_deco_dot2,
                                                                }),
                                                                r().createElement('div', {
                                                                    className: wa.chapter_deco_dot3,
                                                                }),
                                                            ),
                                                        ),
                                                    ),
                                                    r().createElement(Ct, {
                                                        flex: '1 0 auto',
                                                        color: 'CFF_MAIN',
                                                        variant: 'cff_heading_small',
                                                        variant_lg: 'cff_heading',
                                                        text:
                                                            R.strings.cosmicEvent.lobby.progress.chapter_label() +
                                                            He +
                                                            d,
                                                        className: wa.chapter_heading,
                                                    }),
                                                    r().createElement(Ct, {
                                                        variant: 'cff_player',
                                                        variant_lg: 'cff_emphasis',
                                                        color: '#091929CC',
                                                        ml: -8,
                                                        ml_sm: 8,
                                                        className: wa.chapter_status,
                                                        text: A,
                                                    }),
                                                ),
                                                r().createElement(
                                                    ot,
                                                    { flex: '1 1 auto', className: wa.main, mt: 20, mt_sm: 32, ml: 32 },
                                                    r().createElement('div', { className: wa.title_deco }),
                                                    r().createElement(Ct, {
                                                        variant: 'cff_heading',
                                                        variant_lg: 'cff_title',
                                                        color: 'CFF_SUPPORT',
                                                        text: R.strings.cosmicEvent.lobby.progress.chapter[_].title(),
                                                        className: wa.title,
                                                        mb: 6,
                                                        mb_lg: 10,
                                                    }),
                                                    r().createElement(Ct, {
                                                        variant: 'cff_body_small',
                                                        variant_sm: 'cff_body',
                                                        color: 'CFF_MAIN',
                                                        text:
                                                            'locked' === h
                                                                ? R.strings.cosmicEvent.lobby.progress.chapter.locked()
                                                                : R.strings.cosmicEvent.lobby.progress.chapter[
                                                                      _
                                                                  ].narrative(),
                                                        className: wa.narrative,
                                                        format: { binding: { chapter: m } },
                                                    }),
                                                    r().createElement(
                                                        ot,
                                                        {
                                                            flex: '1 1 auto',
                                                            row: !0,
                                                            className: wa.steps,
                                                            alignItems: 'stretch',
                                                            mr: -140,
                                                            mr_sm: 0,
                                                            mr_md: 0,
                                                        },
                                                        E.map((e, t) =>
                                                            r().createElement(
                                                                ur,
                                                                nr({ key: t }, e, {
                                                                    flex: '1 1 auto',
                                                                    className: wa.step,
                                                                }),
                                                            ),
                                                        ),
                                                    ),
                                                ),
                                                r().createElement(
                                                    ot,
                                                    { className: wa.objective, mt: 32, mb: 16 },
                                                    r().createElement(
                                                        ot,
                                                        {
                                                            mb: 8,
                                                            row: !0,
                                                            alignItems: 'center',
                                                            className: wa.objective_title,
                                                        },
                                                        R.strings.cosmicEvent.lobby.progress.total(),
                                                        ' ',
                                                        r().createElement(wu, { value: i }),
                                                        ' ',
                                                        r().createElement('img', {
                                                            className: wa.antimatter_icon,
                                                            src: R.images.cosmic_event.gui.maps.icons.missions.icon_antimatter_14x14(),
                                                            alt: '',
                                                        }),
                                                    ),
                                                    r().createElement(Ct, {
                                                        className: wa.objective_description,
                                                        text: R.strings.cosmicEvent.lobby.progress.objective(),
                                                    }),
                                                ),
                                            ),
                                            r().createElement(
                                                ot,
                                                {
                                                    className: wa.panel_right,
                                                    column: !0,
                                                    alignItems: 'flex-end',
                                                    ml: 'LG',
                                                },
                                                r().createElement(
                                                    'div',
                                                    {
                                                        className: F()(
                                                            wa.panel_right_background,
                                                            _ === I.Uhura && wa.panel_right_background__uhura,
                                                        ),
                                                        style: {
                                                            backgroundImage: `url(${R.images.cosmic_event.gui.maps.icons.progress_route.commander[_]()})`,
                                                        },
                                                    },
                                                    r().createElement('div', {
                                                        className: wa.panel_right_background_2,
                                                    }),
                                                    r().createElement('div', {
                                                        className: wa.panel_right_background_3,
                                                    }),
                                                ),
                                                r().createElement(Ct, {
                                                    variant: 'cff_body_small',
                                                    variant_lg: 'cff_emphasis_small',
                                                    color: 'CFF_MAIN',
                                                    className: wa.motto,
                                                    alignSelf: 'stretch',
                                                    justifyContent: 'center',
                                                    textCenter: !0,
                                                    text: R.strings.cosmicEvent.lobby.progress.motto(),
                                                }),
                                                r().createElement(
                                                    ot,
                                                    {
                                                        column: !0,
                                                        flex: '1 1 auto',
                                                        justifyContent: 'flex-end',
                                                        alignItems: 'stretch',
                                                        mr: 56,
                                                        mr_sm: 138,
                                                        mr_md: 88,
                                                        mr_lg: 138,
                                                        mb: 20,
                                                        className: wa.commander,
                                                    },
                                                    r().createElement(Ct, {
                                                        variant: 'cff_player',
                                                        variant_md: 'cff_body',
                                                        color: 'CFF_MAIN',
                                                        mb: 8,
                                                        className: wa.commander_block,
                                                        text:
                                                            R.strings.cosmicEvent.lobby.progress.commander.name_label() +
                                                            He +
                                                            R.strings.cosmicEvent.lobby.progress.commander.name[_](),
                                                    }),
                                                    r().createElement(
                                                        ot,
                                                        { row: !0, mb: 8, alignItems: 'stretch' },
                                                        r().createElement(Ct, {
                                                            variant: 'cff_player',
                                                            variant_md: 'cff_body',
                                                            color: 'CFF_MAIN',
                                                            mr: 8,
                                                            row: !0,
                                                            flex: '1 0 auto',
                                                            alignItems: 'center',
                                                            className: wa.commander_block,
                                                            text: R.strings.cosmicEvent.lobby.progress.commander.crew_skills(),
                                                        }),
                                                        r().createElement(
                                                            ot,
                                                            { row: !0, className: wa.commander_skills },
                                                            r().createElement(
                                                                qu,
                                                                {
                                                                    args: {
                                                                        tooltipId: 'crewPerkGf',
                                                                        skillName: rr.Brotherhood,
                                                                    },
                                                                },
                                                                r().createElement(
                                                                    'div',
                                                                    null,
                                                                    r().createElement('img', {
                                                                        src: R.images.cosmic_event.gui.maps.icons.progress_route.perk_1(),
                                                                        alt: '',
                                                                    }),
                                                                ),
                                                            ),
                                                            r().createElement(
                                                                kt,
                                                                {
                                                                    contentId:
                                                                        R.views.lobby.crew.tooltips.PerkAvailableTooltip(
                                                                            'resId',
                                                                        ),
                                                                },
                                                                r().createElement(
                                                                    'div',
                                                                    null,
                                                                    r().createElement('img', {
                                                                        src: R.images.cosmic_event.gui.maps.icons.progress_route.perk_2(),
                                                                        alt: '',
                                                                    }),
                                                                ),
                                                            ),
                                                        ),
                                                    ),
                                                    r().createElement(
                                                        ot,
                                                        { row: !0, mb: 8, alignItems: 'stretch' },
                                                        r().createElement(Ct, {
                                                            variant: 'cff_player',
                                                            variant_md: 'cff_body',
                                                            color: 'CFF_MAIN',
                                                            mr: 8,
                                                            className: F()(wa.commander_block, wa.commander_voice),
                                                            text: R.strings.cosmicEvent.lobby.progress.commander.voice(),
                                                        }),
                                                        r().createElement(
                                                            Xa,
                                                            {
                                                                className: wa.commander_voice_button,
                                                                onMouseEnter: sr,
                                                                onClick: () => {
                                                                    p(), v(!D);
                                                                },
                                                            },
                                                            D
                                                                ? r().createElement(qa, {
                                                                      className: wa.commander_voice_icon,
                                                                      active: !0,
                                                                  })
                                                                : r().createElement(qa, {
                                                                      className: wa.commander_voice_icon,
                                                                  }),
                                                            R.strings.cosmicEvent.lobby.progress.commander.listen(),
                                                        ),
                                                    ),
                                                    r().createElement(Ct, {
                                                        variant: 'cff_body_small',
                                                        textCenter: !0,
                                                        className: wa.commander_description,
                                                        color: 'done' === h ? 'CFF_DONE' : 'CFF_SUPPORT',
                                                        text:
                                                            'done' === h
                                                                ? R.strings.cosmicEvent.lobby.progress.commander.descriptionDone()
                                                                : R.strings.cosmicEvent.lobby.progress.commander.description(),
                                                        format: {
                                                            binding: {
                                                                Name: R.strings.cosmicEvent.lobby.progress.commander.name[
                                                                    _
                                                                ](),
                                                                icon: r().createElement('div', {
                                                                    className: wa.check_icon,
                                                                }),
                                                            },
                                                        },
                                                    }),
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                            )
                        );
                    }),
                    _r = ['onClick', 'className'];
                function mr() {
                    return (
                        (mr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        mr.apply(this, arguments)
                    );
                }
                const dr = (e) => {
                        let t = e.onClick,
                            a = e.className,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    u,
                                    r = {},
                                    n = Object.keys(e);
                                for (u = 0; u < n.length; u++) (a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, _r);
                        return r().createElement(
                            'div',
                            { className: F()('ExitMode_base_e4', a) },
                            r().createElement(
                                xa,
                                mr(
                                    {
                                        caption: R.strings.cosmicEvent.exitMode(),
                                        onClick: t,
                                        side: 'right',
                                        type: 'close',
                                    },
                                    u,
                                ),
                            ),
                        );
                    },
                    Er = 'TitleDecoration_dot_1d',
                    gr = ({ className: e, text: t, children: a }) =>
                        r().createElement(
                            ot,
                            { column: !0, className: e },
                            r().createElement(
                                ot,
                                { row: !0 },
                                r().createElement('div', { className: Er }),
                                r().createElement('div', { className: Er }),
                                r().createElement('div', { className: Er }),
                                r().createElement('div', { className: Er }),
                                r().createElement('div', { className: 'TitleDecoration_text_ce' }, t),
                                r().createElement('img', {
                                    className: 'TitleDecoration_deco_right_4d',
                                    src: R.images.cosmic_event.gui.maps.icons.cosmicLobbyView.title_deco(),
                                    alt: '',
                                }),
                            ),
                            a,
                        ),
                    fr = ({ current: e, total: t, className: a }) =>
                        r().createElement(
                            'div',
                            { className: F()('ProgressBar_base_86', e === t && 'ProgressBar_base__done_a8', a) },
                            r().createElement(
                                'div',
                                {
                                    className: 'ProgressBar_current_a7',
                                    style: { width: 0 !== t ? (100 * e) / t + '%' : '0' },
                                },
                                r().createElement('div', { className: 'ProgressBar_current_overlay_6c' }),
                            ),
                        );
                function pr() {
                    return (
                        (pr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        pr.apply(this, arguments)
                    );
                }
                const hr = ({
                        className: e,
                        title: t,
                        description: a,
                        currentProgress: u,
                        totalProgress: n,
                        bonuses: s,
                        includeCompactVariant: o,
                        alwaysShowRewards: i,
                    }) => {
                        const c = u >= n,
                            l = c
                                ? R.images.cosmic_event.gui.maps.icons.missions.icon_done()
                                : R.images.cosmic_event.gui.maps.icons.missions.icon_in_progress(),
                            _ = r().useMemo(
                                () =>
                                    s.map((e) => ({
                                        name: e.name,
                                        image: Xu(e, Pu.Big),
                                        value: e.value,
                                        valueType: Gu(e.name),
                                    })),
                                [s],
                            );
                        return r().createElement(
                            'div',
                            {
                                className: F()(
                                    'Mission_base_3a',
                                    e,
                                    c && 'Mission_base__done_69',
                                    o && 'Mission_base__withCompactVariant_3d',
                                    i && 'Mission_base__showRewards_d8',
                                ),
                                onMouseEnter: () => Nt('highlight'),
                            },
                            r().createElement(
                                'div',
                                { className: 'Mission_content_94' },
                                r().createElement('div', { className: 'Mission_title_d6' }, t),
                                r().createElement('div', { className: 'Mission_description_68' }, a),
                                r().createElement(
                                    'div',
                                    { className: 'Mission_progress_54' },
                                    r().createElement(fr, {
                                        className: 'Mission_progress_bar_b3',
                                        current: u,
                                        total: n,
                                    }),
                                    r().createElement('div', { className: 'Mission_progress_values_b6' }, u, ' / ', n),
                                ),
                            ),
                            r().createElement('img', { className: 'Mission_icon_2c', src: l, alt: '' }),
                            r().createElement(
                                'div',
                                { className: 'Mission_rewards_33' },
                                _.map((e, t) =>
                                    r().createElement(
                                        'div',
                                        { className: 'Mission_reward_d0', key: t },
                                        r().createElement(
                                            Zu,
                                            pr({ size: Pu.Small, className: 'Mission_reward_info_05' }, e),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    },
                    Fr = {
                        cff_splash: 'MainRoute_cff_splash_f2',
                        cff_splash_small: 'MainRoute_cff_splash_small_3e',
                        cff_title: 'MainRoute_cff_title_0b',
                        cff_heading: 'MainRoute_cff_heading_d9',
                        cff_heading_small: 'MainRoute_cff_heading_small_1d',
                        cff_body: 'MainRoute_cff_body_b8',
                        cff_emphasis: 'MainRoute_cff_emphasis_18',
                        cff_emphasis_small: 'MainRoute_cff_emphasis_small_1b',
                        cff_body_small: 'MainRoute_cff_body_small_7f',
                        cff_player: 'MainRoute_cff_player_4d',
                        cff_decorative_title: 'MainRoute_cff_decorative_title_07',
                        cff_decorative_body: 'MainRoute_cff_decorative_body_06',
                        boxImage: 'MainRoute_boxImage_ed',
                        transparent: 'MainRoute_transparent_27',
                        fade_in: 'MainRoute_fade_in_62',
                        fade_from_left: 'MainRoute_fade_from_left_eb',
                        fade_from_bottom: 'MainRoute_fade_from_bottom_4b',
                        fade_out: 'MainRoute_fade_out_b6',
                        fade_to_left: 'MainRoute_fade_to_left_8d',
                        fade_to_bottom: 'MainRoute_fade_to_bottom_3d',
                        delay_100: 'MainRoute_delay_100_9e',
                        delay_200: 'MainRoute_delay_200_2a',
                        delay_300: 'MainRoute_delay_300_f3',
                        delay_400: 'MainRoute_delay_400_56',
                        delay_500: 'MainRoute_delay_500_8a',
                        delay_600: 'MainRoute_delay_600_7d',
                        delay_700: 'MainRoute_delay_700_27',
                        delay_800: 'MainRoute_delay_800_97',
                        delay_1000: 'MainRoute_delay_1000_9d',
                        delay_1250: 'MainRoute_delay_1250_59',
                        delay_1500: 'MainRoute_delay_1500_e1',
                        delay_3000: 'MainRoute_delay_3000_ca',
                        glitch: 'MainRoute_glitch_f8',
                        CFF_MAIN: 'MainRoute_CFF_MAIN_ad',
                        CFF_SUPPORT: 'MainRoute_CFF_SUPPORT_9a',
                        CFF_DONE: 'MainRoute_CFF_DONE_ae',
                        CFF_PHASE: 'MainRoute_CFF_PHASE_66',
                        CFF_IMPORTANT: 'MainRoute_CFF_IMPORTANT_27',
                        CFF_HERO: 'MainRoute_CFF_HERO_44',
                        CFF_ATTENTION: 'MainRoute_CFF_ATTENTION_22',
                        CFF_BACKGROUND: 'MainRoute_CFF_BACKGROUND_c7',
                        CFF_MINE: 'MainRoute_CFF_MINE_da',
                        CFF_VORTEX: 'MainRoute_CFF_VORTEX_49',
                        CFF_BARRIER: 'MainRoute_CFF_BARRIER_58',
                        CFF_JUMP: 'MainRoute_CFF_JUMP_ba',
                        base: 'MainRoute_base_bb',
                        main: 'MainRoute_main_7d',
                        title: 'MainRoute_title_e6',
                        title_deco: 'MainRoute_title_deco_38',
                        description: 'MainRoute_description_ff',
                        fragments: 'MainRoute_fragments_26',
                        fragments_content: 'MainRoute_fragments_content_34',
                        fragments_box: 'MainRoute_fragments_box_c3',
                        fragments_label: 'MainRoute_fragments_label_19',
                        fragments_count: 'MainRoute_fragments_count_d6',
                        fragments_limit: 'MainRoute_fragments_limit_f3',
                        fragments_icon: 'MainRoute_fragments_icon_76',
                        missions: 'MainRoute_missions_e4',
                        missions_top: 'MainRoute_missions_top_ab',
                        missions_top_text: 'MainRoute_missions_top_text_32',
                        missions_top_line: 'MainRoute_missions_top_line_6c',
                        missions_top_deco: 'MainRoute_missions_top_deco_05',
                        missions_bottom: 'MainRoute_missions_bottom_33',
                        mission: 'MainRoute_mission_54',
                        glitch1: 'MainRoute_glitch1_a1',
                        glitch2: 'MainRoute_glitch2_56',
                        glitch3: 'MainRoute_glitch3_d6',
                    },
                    Ar = () => Nt('highlight'),
                    br = (0, X.observer)(({ isAppearing: e, isDisappearing: t }) => {
                        const a = ze(),
                            u = a.controls,
                            n = a.model,
                            s = n.computes.getMissions(),
                            o = n.fragments.fragmentCount.get(),
                            i = n.fragments.fragmentLimit.get(),
                            c = n.computes.getIsReadyForResearch(),
                            l = n.root.get().isResearchDone;
                        return r().createElement(
                            r().Fragment,
                            null,
                            r().createElement(Ha, {
                                className: F()(Fr.base, e && Fr.fade_in, e && Fr.delay_600, t && Fr.fade_out),
                                rightContent: r().createElement(dr, { onClick: u.onClose, onMouseEnter: Ar }),
                            }),
                            r().createElement(
                                'div',
                                { className: F()(Fr.main, t && Fr.fade_out) },
                                r().createElement(
                                    gr,
                                    {
                                        text: R.strings.cosmicDecor.lobby.main.title_deco(),
                                        className: F()(Fr.title_deco, e && Fr.fade_from_left, e && Fr.delay_300),
                                    },
                                    r().createElement(
                                        'div',
                                        { className: Fr.title },
                                        R.strings.cosmicEvent.common.name(),
                                    ),
                                ),
                                r().createElement(
                                    'div',
                                    { className: F()(Fr.description, e && Fr.fade_from_left, e && Fr.delay_400) },
                                    R.strings.cosmicEvent.lobby.main.description(),
                                ),
                                r().createElement(
                                    'div',
                                    { className: F()(Fr.missions, e && Fr.fade_from_left, e && Fr.delay_500) },
                                    r().createElement(
                                        'div',
                                        { className: Fr.missions_top },
                                        r().createElement(
                                            'div',
                                            { className: Fr.missions_top_text },
                                            R.strings.cosmicDecor.lobby.missions.top_deco(),
                                        ),
                                        r().createElement('div', { className: Fr.missions_top_line }),
                                        r().createElement('img', {
                                            className: Fr.missions_top_deco,
                                            src: R.images.cosmic_event.gui.maps.icons.missions.missions_decoration(),
                                        }),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: Fr.missions_content },
                                        s.map((e, t) =>
                                            r().createElement(
                                                'div',
                                                { className: Fr.mission, key: t },
                                                r().createElement(hr, e),
                                            ),
                                        ),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: Fr.missions_bottom },
                                        R.strings.cosmicDecor.lobby.missions.bottom_deco(),
                                    ),
                                ),
                            ),
                            r().createElement(
                                ot,
                                { className: Fr.fragments, column: !0, center: !0 },
                                r().createElement(
                                    'div',
                                    {
                                        className: F()(
                                            Fr.fragments_content,
                                            e && Fr.fade_from_bottom,
                                            e && Fr.delay_1500,
                                            t && Fr.fade_out,
                                        ),
                                    },
                                    r().createElement(
                                        ot,
                                        { row: !0, center: !0, className: Fr.fragments_box },
                                        r().createElement(
                                            'span',
                                            { className: Fr.fragments_label },
                                            R.strings.cosmicEvent.lobby.main.fragments_collected(),
                                        ),
                                        r().createElement('span', { className: Fr.fragments_count }, o),
                                        ' ',
                                        r().createElement('span', { className: Fr.fragments_limit }, '/ ', i),
                                        r().createElement('img', {
                                            className: Fr.fragments_icon,
                                            src: R.images.cosmic_event.gui.maps.icons.cosmicLobbyView.fragment_38x38(),
                                        }),
                                    ),
                                ),
                                c &&
                                    r().createElement(
                                        Xa,
                                        {
                                            onMouseEnter: Ar,
                                            onClick: () => {
                                                c && (u.onLobbyRouteChange(I.Research), Nt('yes1'));
                                            },
                                            className: F()(
                                                e && Fr.fade_from_bottom,
                                                e && Fr.delay_1500,
                                                t && Fr.fade_out,
                                            ),
                                        },
                                        l
                                            ? R.strings.cosmicEvent.lobby.artefact.results()
                                            : R.strings.cosmicEvent.lobby.artefact.research(),
                                    ),
                            ),
                        );
                    });
                var Dr = a(613);
                Date.now(), Dr.Ew.getRegionalDateTime, Dr.Ew.getFormattedDateTime;
                const vr = () => Nt('highlight'),
                    Cr = (0, X.observer)(({ isAppearing: e, isDisappearing: t }) => {
                        const a = ze(),
                            n = a.model,
                            s = a.controls,
                            o = n.queue.get().playersInQueue,
                            i = s.onLobbyRouteChange,
                            c = ((e = 0, t = 1, a, r, n = !1) => {
                                const s = (0, u.useState)(e),
                                    o = s[0],
                                    i = s[1];
                                return (
                                    (0, u.useEffect)(() => {
                                        i(e);
                                    }, [e]),
                                    (0, u.useEffect)(() => {
                                        const u = Date.now(),
                                            s = setInterval(() => {
                                                const t = e + (n ? 1 : -1) * Math.floor((Date.now() - u) / 1e3);
                                                void 0 !== a && (n ? t >= a : t <= a)
                                                    ? (i(a), r && r(), clearInterval(s))
                                                    : i(t);
                                            }, 1e3 * t);
                                        return () => {
                                            clearInterval(s);
                                        };
                                    }, [e, t, a, r, n]),
                                    o
                                );
                            })(0, 1, void 0, void 0, !0),
                            l = String(
                                ((e, t, a) => {
                                    const u = t < 0,
                                        r = Math.abs(t),
                                        n = Math.floor(r / 3600).toString(),
                                        s = Math.floor((r % 3600) / 60).toString(),
                                        o = Math.floor(r % 60).toString(),
                                        i = e
                                            .replace('%HH', n.padStart(2, '0'))
                                            .replace('%H', a && Number(s) >= 30 ? (Number(n) + 1).toString() : n)
                                            .replace('%MM', s.padStart(2, '0'))
                                            .replace('%M', s.toString())
                                            .replace('%SS', o.padStart(2, '0'))
                                            .replace('%S', o);
                                    return u ? `-${i}` : i;
                                })(R.strings.quests.general.countdown.timer_min(), c, !1),
                            );
                        return r().createElement(
                            'div',
                            {
                                className: F()(
                                    'QueueRoute_base_19',
                                    e && 'QueueRoute_base__appearing_d5',
                                    t && 'QueueRoute_base__disappearing_61',
                                ),
                            },
                            r().createElement('div', { className: 'QueueRoute_background_3c' }),
                            r().createElement(
                                ot,
                                { flex: '1 0 auto', className: 'QueueRoute_main_36', column: !0, alignItems: 'center' },
                                r().createElement('img', {
                                    src: R.images.cosmic_event.gui.maps.icons.cosmicLobbyView.cosmic_logo_icon(),
                                    className: 'QueueRoute_icon_c3',
                                }),
                                r().createElement(Ct, {
                                    textCenter: !0,
                                    text: R.strings.cosmicEvent.common.fullName(),
                                    variant: 'cff_body',
                                    variant_md: 'cff_heading_small',
                                    color: 'CFF_MAIN',
                                    mt: 12,
                                    mb: 40,
                                }),
                                r().createElement(
                                    gr,
                                    { text: R.strings.cosmicDecor.lobby.queue.title_deco() },
                                    r().createElement(
                                        ot,
                                        { row: !0, justifyContent: 'space-between' },
                                        r().createElement(Ct, {
                                            text: R.strings.cosmicEvent.lobby.queue.players_in_queue(),
                                            variant: 'cff_heading_small',
                                            variant_md: 'cff_heading',
                                            color: 'CFF_MAIN',
                                            mr: 38,
                                        }),
                                        r().createElement(Ct, {
                                            text: String(o),
                                            variant: 'cff_heading_small',
                                            variant_md: 'cff_heading',
                                            color: 'CFF_SUPPORT',
                                        }),
                                    ),
                                ),
                            ),
                            r().createElement(
                                ot,
                                {
                                    className: 'QueueRoute_footer_9a',
                                    row: !0,
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                },
                                r().createElement(Ct, {
                                    flex: '1 0 auto',
                                    text: R.strings.cosmicEvent.lobby.queue.elapsed_time().replace('%(time)', l),
                                    variant: 'cff_body_small',
                                    color: 'CFF_SUPPORT',
                                    mr: 38,
                                    className: 'QueueRoute_elapsedTime_4e',
                                }),
                                r().createElement(
                                    Xa,
                                    {
                                        onMouseEnter: vr,
                                        onClick: () => {
                                            Nt('yes1'), i(I.Main);
                                        },
                                    },
                                    R.strings.cosmicEvent.lobby.queue.leave(),
                                ),
                            ),
                        );
                    }),
                    Br = 'ArtefactRoute_fade_from_left_cb',
                    yr = 'ArtefactRoute_delay_600_46',
                    Rr = 'ArtefactRoute_base__disappearing_e5',
                    Mr = () => Nt('highlight'),
                    wr = (0, X.observer)(({ isAppearing: e, isDisappearing: t }) => {
                        const a = ze(),
                            n = a.model,
                            s = a.controls,
                            o = n.fragments.fragmentCount.get(),
                            i = n.fragments.fragmentLimit.get(),
                            c = n.root.get().isResearchDone,
                            l = o >= i,
                            _ = (0, u.useState)(!1),
                            m = _[0],
                            d = _[1],
                            E = r().useRef(),
                            g = (0, u.useCallback)(() => {
                                d((e) => !e),
                                    E.current && clearTimeout(E.current),
                                    (E.current = setTimeout(() => {
                                        d(!1);
                                    }, 5e3));
                            }, []);
                        (0, u.useEffect)(
                            () => () => {
                                E.current && clearTimeout(E.current);
                            },
                            [],
                        );
                        const f = Number(c) + Number(l),
                            p = [
                                R.strings.cosmicDecor.lobby.artefact.title_deco(),
                                R.strings.cosmicDecor.lobby.artefact.title_deco_ready(),
                                R.strings.cosmicDecor.lobby.artefact.title_deco_complete(),
                            ][f],
                            h = [
                                R.strings.cosmicEvent.lobby.artefact.description(),
                                R.strings.cosmicEvent.lobby.artefact.description_ready(),
                                R.strings.cosmicEvent.lobby.artefact.description_complete(),
                            ][f],
                            A = [
                                R.strings.cosmicEvent.lobby.artefact.footer(),
                                R.strings.cosmicEvent.lobby.artefact.footer(),
                                R.strings.cosmicEvent.lobby.artefact.footer_mission_completed(),
                            ][f];
                        return r().createElement(
                            r().Fragment,
                            null,
                            r().createElement(Ha, { className: F()('ArtefactRoute_header_50', t && Rr) }),
                            r().createElement(
                                ot,
                                {
                                    className: F()(
                                        'ArtefactRoute_content_24',
                                        e && 'ArtefactRoute_base__appearing_ac',
                                        t && Rr,
                                    ),
                                    column: !0,
                                    alignItems: 'flex-start',
                                },
                                r().createElement(
                                    gr,
                                    { text: p, className: F()(e && Br, e && 'ArtefactRoute_delay_300_f0') },
                                    r().createElement(Ct, {
                                        variant: 'cff_heading',
                                        variant_md: 'cff_title',
                                        color: 'CFF_MAIN',
                                        text: l
                                            ? R.strings.cosmicEvent.lobby.artefact.title_complete()
                                            : R.strings.cosmicEvent.lobby.artefact.title(),
                                    }),
                                ),
                                r().createElement(Ct, {
                                    variant: 'cff_body_small',
                                    variant_md: 'cff_body',
                                    color: 'CFF_MAIN',
                                    alignSelf: 'stretch',
                                    mt: 4,
                                    className: F()(e && Br, e && 'ArtefactRoute_delay_400_2f'),
                                    text: h,
                                }),
                                r().createElement(
                                    ot,
                                    { mt: 36, mt_md: 50, column: !0, center: !0, alignSelf: 'center' },
                                    r().createElement(
                                        ot,
                                        {
                                            row: !0,
                                            alignItems: 'center',
                                            mb: 8,
                                            className: F()(e && Br, e && 'ArtefactRoute_delay_500_7f'),
                                        },
                                        r().createElement(Ct, {
                                            variant: 'cff_emphasis_small',
                                            variant_md: 'cff_heading_small',
                                            color: 'CFF_MAIN',
                                            text: R.strings.cosmicEvent.lobby.artefact.fragments_collected(),
                                        }),
                                        r().createElement(Ct, {
                                            variant: 'cff_emphasis_small',
                                            variant_md: 'cff_heading_small',
                                            color: 'CFF_IMPORTANT',
                                            ml: 14,
                                            text: o + He,
                                        }),
                                        r().createElement(Ct, {
                                            variant: 'cff_emphasis_small',
                                            variant_md: 'cff_heading_small',
                                            color: 'CFF_MAIN',
                                            text: '/ ' + i,
                                        }),
                                        r().createElement('img', {
                                            src: R.images.cosmic_event.gui.maps.icons.cosmicLobbyView.fragment_50x50(),
                                            className: 'ArtefactRoute_fragment_icon_e7',
                                            alt: '',
                                        }),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: F()('ArtefactRoute_hint_wrapper_f6', e && Br, e && yr) },
                                        r().createElement(
                                            Xa,
                                            {
                                                className: 'ArtefactRoute_research_button_79',
                                                disabled: !l,
                                                color: l ? 'done' : 'main',
                                                onMouseEnter: Mr,
                                                flexDirection: 'column',
                                                onClick: () => {
                                                    l ? (Nt('yes1'), s.onLobbyRouteChange(I.Research)) : g();
                                                },
                                            },
                                            r().createElement(
                                                'span',
                                                null,
                                                c
                                                    ? R.strings.cosmicEvent.lobby.artefact.results()
                                                    : R.strings.cosmicEvent.lobby.artefact.research(),
                                            ),
                                        ),
                                        r().createElement(Ct, {
                                            variant: 'cff_body_small',
                                            variant_md: 'cff_body',
                                            color: 'CFF_MAIN',
                                            className: F()(
                                                'ArtefactRoute_hint_48',
                                                m && 'ArtefactRoute_hint__active_c0',
                                            ),
                                            text: R.strings.cosmicEvent.lobby.artefact.hint(),
                                        }),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: F()(e && Br, e && yr) },
                                        r().createElement(Ct, {
                                            variant: 'cff_body_small',
                                            variant_md: 'cff_body',
                                            color: 'CFF_SUPPORT',
                                            mt: 78,
                                            className: 'ArtefactRoute_footer_08',
                                            textCenter: !0,
                                            text: A,
                                        }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    Sr = 'MissionBriefRoute_nav__item_c3',
                    Nr = 'MissionBriefRoute_nav__text__active_41',
                    Pr = 'MissionBriefRoute_nav__text_d6',
                    xr = 'MissionBriefRoute_nav__decoration_c9',
                    Tr = 'MissionBriefRoute_nav__background_30',
                    Or = 'MissionBriefRoute_nav__background__active_bc',
                    kr = {
                        cff_splash: 'MissionBrief_cff_splash_ec',
                        cff_splash_small: 'MissionBrief_cff_splash_small_2e',
                        cff_title: 'MissionBrief_cff_title_d3',
                        cff_heading: 'MissionBrief_cff_heading_da',
                        cff_heading_small: 'MissionBrief_cff_heading_small_22',
                        cff_body: 'MissionBrief_cff_body_97',
                        cff_emphasis: 'MissionBrief_cff_emphasis_b8',
                        cff_emphasis_small: 'MissionBrief_cff_emphasis_small_05',
                        cff_body_small: 'MissionBrief_cff_body_small_0e',
                        cff_player: 'MissionBrief_cff_player_14',
                        cff_decorative_title: 'MissionBrief_cff_decorative_title_80',
                        cff_decorative_body: 'MissionBrief_cff_decorative_body_78',
                        boxImage: 'MissionBrief_boxImage_d5',
                        transparent: 'MissionBrief_transparent_3b',
                        fade_in: 'MissionBrief_fade_in_4b',
                        fade_from_left: 'MissionBrief_fade_from_left_fa',
                        fade_from_bottom: 'MissionBrief_fade_from_bottom_9c',
                        fade_out: 'MissionBrief_fade_out_c3',
                        fade_to_left: 'MissionBrief_fade_to_left_c2',
                        fade_to_bottom: 'MissionBrief_fade_to_bottom_16',
                        delay_100: 'MissionBrief_delay_100_51',
                        delay_200: 'MissionBrief_delay_200_1e',
                        delay_300: 'MissionBrief_delay_300_64',
                        delay_400: 'MissionBrief_delay_400_b4',
                        delay_500: 'MissionBrief_delay_500_94',
                        delay_600: 'MissionBrief_delay_600_1f',
                        delay_700: 'MissionBrief_delay_700_67',
                        delay_800: 'MissionBrief_delay_800_dc',
                        delay_1000: 'MissionBrief_delay_1000_f0',
                        delay_1250: 'MissionBrief_delay_1250_49',
                        delay_1500: 'MissionBrief_delay_1500_7b',
                        delay_3000: 'MissionBrief_delay_3000_72',
                        glitch: 'MissionBrief_glitch_0a',
                        CFF_MAIN: 'MissionBrief_CFF_MAIN_5c',
                        CFF_SUPPORT: 'MissionBrief_CFF_SUPPORT_b0',
                        CFF_DONE: 'MissionBrief_CFF_DONE_4d',
                        CFF_PHASE: 'MissionBrief_CFF_PHASE_85',
                        CFF_IMPORTANT: 'MissionBrief_CFF_IMPORTANT_8f',
                        CFF_HERO: 'MissionBrief_CFF_HERO_97',
                        CFF_ATTENTION: 'MissionBrief_CFF_ATTENTION_ce',
                        CFF_BACKGROUND: 'MissionBrief_CFF_BACKGROUND_48',
                        CFF_MINE: 'MissionBrief_CFF_MINE_78',
                        CFF_VORTEX: 'MissionBrief_CFF_VORTEX_3c',
                        CFF_BARRIER: 'MissionBrief_CFF_BARRIER_74',
                        CFF_JUMP: 'MissionBrief_CFF_JUMP_33',
                        main: 'MissionBrief_main_ed',
                        main_image: 'MissionBrief_main_image_93',
                        title: 'MissionBrief_title_0e',
                        title_decoration: 'MissionBrief_title_decoration_37',
                        title_decoration_squares: 'MissionBrief_title_decoration_squares_8c',
                        title_decoration_blue_square: 'MissionBrief_title_decoration_blue_square_71',
                        vehicle: 'MissionBrief_vehicle_50',
                        vehicle_wrapper: 'MissionBrief_vehicle_wrapper_e2',
                        vehicle_decoration: 'MissionBrief_vehicle_decoration_08',
                        glitch_mission_brief: 'MissionBrief_glitch_mission_brief_ae',
                        shield: 'MissionBrief_shield_94',
                        shield_decoration: 'MissionBrief_shield_decoration_d6',
                        speed_up: 'MissionBrief_speed_up_92',
                        speed_up_decoration: 'MissionBrief_speed_up_decoration_d9',
                        decoration_text: 'MissionBrief_decoration_text_49',
                        glitch1: 'MissionBrief_glitch1_62',
                        glitch2: 'MissionBrief_glitch2_74',
                        glitch3: 'MissionBrief_glitch3_57',
                    },
                    Ir = [
                        {
                            scanCount: 20,
                            fps: 30,
                            frames: 20,
                            delayFramesBeforeLoop: 60,
                            offsetX: -2,
                            shadowOffsetX: -2,
                            maxDistance: 2,
                        },
                    ],
                    Lr = [],
                    Hr = ({ showGlitch: e }) =>
                        r().createElement(
                            r().Fragment,
                            null,
                            r().createElement(
                                ot,
                                { className: kr.main, mt: 20, column: !0, flexStart: !0, alignSelf: 'center' },
                                r().createElement(
                                    'div',
                                    { className: kr.title },
                                    r().createElement(
                                        'div',
                                        { className: F()(kr.title_decoration, kr.fade_from_left, kr.delay_500) },
                                        r().createElement('div', { className: kr.title_decoration_squares }),
                                        r().createElement('div', {
                                            className: F()(kr.title_decoration_blue_square, kr.glitch),
                                        }),
                                    ),
                                    r().createElement(Ct, {
                                        text: R.strings.cosmicEvent.lobby.mission_brief.heading(),
                                        variant: 'cff_heading_small',
                                        variant_md: 'cff_heading',
                                        color: 'CFF_MAIN',
                                        className: F()(kr.fade_in, kr.delay_500),
                                    }),
                                ),
                                r().createElement(
                                    ot,
                                    { mt: 10 },
                                    r().createElement(Ct, {
                                        text: R.strings.cosmicEvent.lobby.mission_brief.description(),
                                        variant: 'cff_body_small',
                                        variant_md: 'cff_body',
                                        color: 'CFF_MAIN',
                                        className: F()(kr.fade_in, kr.delay_1000),
                                    }),
                                ),
                            ),
                            r().createElement(
                                ot,
                                {
                                    className: F()(kr.main_image, kr.fade_in, kr.delay_1500),
                                    mt: 20,
                                    mt_md: 50,
                                    column: !0,
                                    center: !0,
                                    alignSelf: 'center',
                                },
                                r().createElement(
                                    'div',
                                    { className: kr.vehicle_wrapper },
                                    r().createElement(
                                        ge,
                                        { waves: e ? Ir : Lr, className: kr.noInteraction },
                                        r().createElement('div', { className: kr.vehicle }),
                                    ),
                                    r().createElement('div', { className: kr.vehicle_decoration }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: kr.shield },
                                    r().createElement(
                                        'div',
                                        { className: kr.decoration_text },
                                        R.strings.cosmicEvent.lobby.mission_brief.decoration_shield(),
                                    ),
                                    r().createElement('div', { className: kr.shield_decoration }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: kr.speed_up },
                                    r().createElement('div', { className: kr.speed_up_decoration }),
                                    r().createElement(
                                        'div',
                                        { className: kr.decoration_text },
                                        R.strings.cosmicEvent.lobby.mission_brief.decoration_boost(),
                                    ),
                                ),
                            ),
                        ),
                    Ur = 'HowToPlay_fade_in_8f',
                    Gr = 'HowToPlay_delay_500_e5',
                    jr = () => {
                        const e = [
                            {
                                heading: R.strings.cosmicEvent.lobby.how_to_play.steps.c_1.heading(),
                                description: R.strings.cosmicEvent.lobby.how_to_play.steps.c_1.description(),
                                img: 'R.images.cosmic_event.gui.maps.icons.mission_brief.how_to_play.step_1',
                            },
                            {
                                heading: R.strings.cosmicEvent.lobby.how_to_play.steps.c_2.heading(),
                                description: R.strings.cosmicEvent.lobby.how_to_play.steps.c_2.description(),
                                img: 'R.images.cosmic_event.gui.maps.icons.mission_brief.how_to_play.step_2',
                            },
                            {
                                heading: R.strings.cosmicEvent.lobby.how_to_play.steps.c_3.heading(),
                                description: R.strings.cosmicEvent.lobby.how_to_play.steps.c_3.description(),
                                img: 'R.images.cosmic_event.gui.maps.icons.mission_brief.how_to_play.step_3',
                            },
                            {
                                heading: R.strings.cosmicEvent.lobby.how_to_play.steps.c_4.heading(),
                                description: R.strings.cosmicEvent.lobby.how_to_play.steps.c_4.description(),
                                img: 'R.images.cosmic_event.gui.maps.icons.mission_brief.how_to_play.step_4',
                            },
                        ];
                        return r().createElement(
                            r().Fragment,
                            null,
                            r().createElement(
                                ot,
                                {
                                    className: 'HowToPlay_main_55',
                                    mt: 20,
                                    column: !0,
                                    flexStart: !0,
                                    alignSelf: 'center',
                                },
                                r().createElement(
                                    'div',
                                    { className: 'HowToPlay_title_f8' },
                                    r().createElement(
                                        'div',
                                        {
                                            className: F()(
                                                'HowToPlay_title_decoration_0e',
                                                'HowToPlay_fade_from_left_9c',
                                                Gr,
                                            ),
                                        },
                                        r().createElement('div', {
                                            className: 'HowToPlay_title_decoration_squares_42',
                                        }),
                                        r().createElement('div', {
                                            className: F()(
                                                'HowToPlay_title_decoration_blue_square_40',
                                                'HowToPlay_glitch_4d',
                                            ),
                                        }),
                                    ),
                                    r().createElement(Ct, {
                                        text: R.strings.cosmicEvent.lobby.how_to_play.heading(),
                                        variant: 'cff_heading_small',
                                        variant_md: 'cff_heading',
                                        color: 'CFF_MAIN',
                                        className: F()(Ur, Gr),
                                    }),
                                ),
                                r().createElement(
                                    ot,
                                    { mt: 10 },
                                    r().createElement(Ct, {
                                        text: R.strings.cosmicEvent.lobby.how_to_play.description(),
                                        variant: 'cff_body_small',
                                        variant_md: 'cff_body',
                                        color: 'CFF_MAIN',
                                        className: F()(Ur, 'HowToPlay_delay_1000_2e'),
                                    }),
                                ),
                            ),
                            r().createElement(
                                ot,
                                {
                                    className: F()('HowToPlay_steps_d7', Ur, 'HowToPlay_delay_1500_34'),
                                    mt: 120,
                                    mt_md: 150,
                                    center: !0,
                                    alignSelf: 'center',
                                },
                                e.map((e, t) =>
                                    r().createElement(
                                        ot,
                                        { key: t, className: 'HowToPlay_step_inner_87' },
                                        r().createElement(
                                            'div',
                                            { className: 'HowToPlay_step_image_a3' },
                                            r().createElement(
                                                'div',
                                                { className: 'HowToPlay_step_image_content_d4' },
                                                r().createElement('div', {
                                                    className: 'HowToPlay_step_image_content_picture_00',
                                                    style: {
                                                        background: `url('${e.img}') center center / contain no-repeat`,
                                                    },
                                                }),
                                                r().createElement('div', {
                                                    className: 'HowToPlay_step_image_content_glow_1a',
                                                }),
                                            ),
                                        ),
                                        r().createElement(
                                            ot,
                                            { className: 'HowToPlay_step_content_bc' },
                                            r().createElement(Ct, {
                                                text: e.heading,
                                                variant: 'cff_player',
                                                variant_md: 'cff_emphasis_small',
                                                color: 'CFF_SUPPORT',
                                                mt: 10,
                                            }),
                                            r().createElement(Ct, {
                                                text: e.description,
                                                variant: 'cff_body_small',
                                                variant_md: 'cff_player',
                                                color: 'CFF_MAIN',
                                                mt: 5,
                                                mt_md: 10,
                                            }),
                                        ),
                                    ),
                                ),
                                r().createElement('div', { className: 'HowToPlay_decoration_1_c2' }),
                                r().createElement('div', { className: 'HowToPlay_decoration_2_6d' }),
                                r().createElement('div', { className: 'HowToPlay_decoration_3_5b' }),
                                r().createElement('div', { className: 'HowToPlay_decoration_4_cf' }),
                                r().createElement('div', { className: 'HowToPlay_decoration_5_2c' }),
                            ),
                        );
                    },
                    Wr = 'Pickups_fade_in_92',
                    Xr = 'Pickups_delay_500_d8',
                    $r = 'Pickups_glitch_6c',
                    zr = 'Pickups_pickup_video_7f',
                    Vr = 'Pickups_pickup_abilities__decoration_71';
                let qr;
                !(function (e) {
                    (e.None = 'none'),
                        (e.Shell = 'shell'),
                        (e.Acceleration = 'acceleration'),
                        (e.Shield = 'shield'),
                        (e.Vortex = 'vortex'),
                        (e.Repulsor = 'repulsor'),
                        (e.Jump = 'jump'),
                        (e.Mines = 'mines');
                })(qr || (qr = {}));
                const Yr = ({ type: e }) =>
                        e === qr.None || e === qr.Shell || e === qr.Acceleration || e === qr.Shield
                            ? null
                            : r().createElement(
                                  ot,
                                  { column: !0, width: '90%' },
                                  r().createElement(Ct, {
                                      text: R.strings.cosmicEvent.lobby.power_ups[e].heading(),
                                      variant: 'cff_player',
                                      variant_md: 'cff_emphasis',
                                      color: 'CFF_SUPPORT',
                                      mt_md: -15,
                                      mt: -10,
                                  }),
                                  r().createElement(Ct, {
                                      text: R.strings.cosmicEvent.lobby.power_ups[e].description(),
                                      variant: 'cff_body_small',
                                      variant_md: 'cff_body_small',
                                      color: 'CFF_MAIN',
                                      mt: 5,
                                      mb: 5,
                                      mt_md: 8,
                                      mb_md: 8,
                                  }),
                              ),
                    Kr = ({ type: e, onClick: t, isActive: a, onMouseEnter: u }) => {
                        if (e === qr.None || e === qr.Shell || e === qr.Acceleration || e === qr.Shield) return null;
                        const n = {
                                [qr.Repulsor]: 'AbilityButton_barrier_1d',
                                [qr.Mines]: 'AbilityButton_mines_56',
                                [qr.Vortex]: 'AbilityButton_vortex_a6',
                                [qr.Jump]: 'AbilityButton_jump_4a',
                            },
                            s = a && n[e];
                        return r().createElement(
                            ot,
                            {
                                column: !0,
                                center: !0,
                                onClick: t,
                                onMouseEnter: u,
                                className: F()('AbilityButton_base_4f', a && 'AbilityButton_base__active_fe'),
                            },
                            r().createElement(
                                ot,
                                { spaceBetween: !0, mr: 10, ml: 10 },
                                r().createElement('img', {
                                    src: R.images.cosmic_event.gui.maps.icons.mission_brief.pickups.icons[e](),
                                    className: F()('AbilityButton_icon_83', s),
                                }),
                            ),
                            r().createElement(Ct, {
                                text: R.strings.cosmicEvent.lobby.power_ups[e].heading(),
                                variant: 'cff_body_small',
                                variant_md: 'cff_body_small',
                                color: 'CFF_MAIN',
                                mt: 10,
                            }),
                        );
                    },
                    Qr = [
                        'src',
                        'className',
                        'autoplay',
                        'style',
                        'loop',
                        'isPrebufferKeyframes',
                        'keyframesNameConfig',
                        'onClick',
                    ];
                function Zr() {
                    return (
                        (Zr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        Zr.apply(this, arguments)
                    );
                }
                const Jr = (0, u.forwardRef)(function (e, t) {
                        let a = e.src,
                            n = e.className,
                            s = e.autoplay,
                            o = void 0 !== s && s,
                            i = e.style,
                            c = e.loop,
                            l = void 0 !== c && c,
                            _ = e.isPrebufferKeyframes,
                            m = e.keyframesNameConfig,
                            d = e.onClick,
                            E = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    u,
                                    r = {},
                                    n = Object.keys(e);
                                for (u = 0; u < n.length; u++) (a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, Qr);
                        const g = t,
                            f = (0, u.useRef)(null);
                        return (
                            (0, u.useEffect)(
                                () =>
                                    ye(() => {
                                        const e = f.current;
                                        if (!g || !e || !_)
                                            return void (null != e && e.cohFastSeek && (e.cohFastSeek = !1));
                                        const t = e.cohGetKeyframeTimestamps();
                                        t.length > 0
                                            ? ((e.cohFastSeek = !0),
                                              t.map((t) => {
                                                  null == e || e.cohPrebufferKeyframe(t);
                                              }))
                                            : console.warn("Can't prebuffered keyframes, keyframes was not found");
                                    }),
                                [_, g],
                            ),
                            (0, u.useEffect)(() => {
                                if (g && f.current) {
                                    const e = { changeTimeHandlers: [], changeKeyframeHandlers: [], changeTimeLoop: Q },
                                        t = () => {
                                            let t = 0;
                                            const a = (function (a) {
                                                    let u = 0;
                                                    return [
                                                        function a() {
                                                            (() => {
                                                                if (f.current) {
                                                                    const a = f.current,
                                                                        u = a.currentTime,
                                                                        r = a.duration;
                                                                    if (
                                                                        (t !== u &&
                                                                            (e.changeTimeHandlers.forEach((e) =>
                                                                                e({ currentTime: u, duration: r }),
                                                                            ),
                                                                            (t = u)),
                                                                        f.current.paused || !g || !_)
                                                                    )
                                                                        return;
                                                                    const n = f.current.cohGetKeyframeTimestamps();
                                                                    n.forEach((t, a) => {
                                                                        u > n[a] - 0.02 &&
                                                                            u < n[a] &&
                                                                            e.changeKeyframeHandlers.forEach((e) => {
                                                                                const u = Object.keys(
                                                                                    null != m ? m : {},
                                                                                )[a];
                                                                                return e({
                                                                                    time: t,
                                                                                    name: `${m ? u : `Point_${a}`}`,
                                                                                });
                                                                            });
                                                                    });
                                                                }
                                                            })(),
                                                                (u = requestAnimationFrame(a));
                                                        },
                                                        function () {
                                                            cancelAnimationFrame(u);
                                                        },
                                                    ];
                                                })(),
                                                u = a[0],
                                                r = a[1];
                                            return u(), r;
                                        };
                                    e.changeTimeLoop = t();
                                    const a = (t) => (
                                            e.changeTimeHandlers.push(t),
                                            () => {
                                                const a = e.changeTimeHandlers,
                                                    u = a.indexOf(t);
                                                u < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeTimeHandler, this reference was not found",
                                                      )
                                                    : a.splice(u, 1);
                                            }
                                        ),
                                        u = (t) => (
                                            e.changeKeyframeHandlers.push(t),
                                            () => {
                                                const a = e.changeKeyframeHandlers,
                                                    u = a.indexOf(t);
                                                u < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeKeyframeHandlers, this reference was not found",
                                                      )
                                                    : a.splice(u, 1);
                                            }
                                        ),
                                        r = () => {
                                            var e;
                                            return null == (e = f.current) ? void 0 : e.currentTime;
                                        },
                                        n = () => {
                                            var e;
                                            return null == (e = f.current) ? void 0 : e.duration;
                                        },
                                        s = (e) => {
                                            f.current && (f.current.currentTime = Cu(0, f.current.duration, e));
                                        },
                                        o = () => {
                                            var e;
                                            return null == (e = f.current) ? void 0 : e.play();
                                        },
                                        i = () => {
                                            var e;
                                            return null == (e = f.current) ? void 0 : e.pause();
                                        },
                                        c = () => {
                                            i(), s(0);
                                        },
                                        l = () => {
                                            var e, t;
                                            return null !=
                                                (e = null == (t = f.current) ? void 0 : t.cohGetKeyframeTimestamps())
                                                ? e
                                                : [];
                                        },
                                        d = (e) => {
                                            s(e), o();
                                        },
                                        E = (e) => {
                                            s(e), i();
                                        },
                                        p = () => {
                                            (e.changeTimeHandlers = []),
                                                (e.changeKeyframeHandlers = []),
                                                null == e.changeTimeLoop || e.changeTimeLoop();
                                        },
                                        h = (e, t) => {
                                            var a;
                                            return (
                                                null == (a = f.current) || a.addEventListener(e, t),
                                                () => {
                                                    var a;
                                                    return null == (a = f.current)
                                                        ? void 0
                                                        : a.removeEventListener(e, t);
                                                }
                                            );
                                        },
                                        F = (e, t) => {
                                            var a;
                                            return (
                                                null == (a = f.current) || a.removeEventListener(e, t),
                                                () => {
                                                    var a;
                                                    return null == (a = f.current)
                                                        ? void 0
                                                        : a.removeEventListener(e, t);
                                                }
                                            );
                                        };
                                    return (
                                        (g.current = {
                                            on: h,
                                            off: F,
                                            play: o,
                                            pause: i,
                                            stop: c,
                                            cleanup: p,
                                            getCurrentTime: r,
                                            getDuration: n,
                                            getCachedKeyframes: l,
                                            goToAndPlay: d,
                                            goToAndStop: E,
                                            setCurrentTime: s,
                                            domRef: f.current,
                                            onChangeTime: a,
                                            onKeyframes: u,
                                        }),
                                        () => {
                                            p(), (g.current = null);
                                        }
                                    );
                                }
                            }, [m, g, _]),
                            (0, u.useEffect)(() => {
                                f.current && o && f.current.play();
                            }, [o, l]),
                            (0, u.useEffect)(() => {
                                if (f.current)
                                    return () => {
                                        f.current && f.current.pause();
                                    };
                            }, []),
                            r().createElement(
                                'video',
                                Zr({ src: a, className: n, style: i, loop: l, ref: f, onClick: d }, E),
                            )
                        );
                    }),
                    en = (0, u.memo)(Jr),
                    tn = () => Nt('highlight'),
                    an = [qr.Repulsor, qr.Jump, qr.Mines, qr.Vortex],
                    un = () => {
                        const e = r().useState(an[0]),
                            t = e[0],
                            a = e[1],
                            n = (0, u.useRef)({}),
                            s = (0, u.useRef)({}),
                            o = (0, u.useRef)({}),
                            i = (0, u.useRef)({}),
                            c = (0, u.useRef)({}),
                            l = { [qr.Repulsor]: n, [qr.Jump]: s, [qr.Mines]: o, [qr.Vortex]: i };
                        return (
                            (0, u.useEffect)(() => {
                                var e, a, u, r;
                                null == (e = c.current) || null == (a = e.current) || a.stop(),
                                    null == (u = l[t].current) || null == (r = u.current) || r.play(),
                                    (c.current = l[t].current);
                            }, [t]),
                            r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(
                                    ot,
                                    {
                                        className: 'Pickups_main_17',
                                        mt: 20,
                                        column: !0,
                                        flexStart: !0,
                                        alignSelf: 'center',
                                    },
                                    r().createElement(
                                        'div',
                                        { className: 'Pickups_title_4e' },
                                        r().createElement(
                                            'div',
                                            {
                                                className: F()(
                                                    'Pickups_title_decoration_18',
                                                    'Pickups_fade_from_left_d5',
                                                    Xr,
                                                ),
                                            },
                                            r().createElement('div', {
                                                className: 'Pickups_title_decoration_squares_cb',
                                            }),
                                            r().createElement('div', {
                                                className: F()('Pickups_title_decoration_blue_square_38', $r),
                                            }),
                                        ),
                                        r().createElement(Ct, {
                                            text: R.strings.cosmicEvent.lobby.power_ups.heading(),
                                            variant: 'cff_heading_small',
                                            variant_md: 'cff_heading',
                                            color: 'CFF_MAIN',
                                            className: F()(Wr, Xr),
                                        }),
                                    ),
                                    r().createElement(
                                        ot,
                                        { mt: 10 },
                                        r().createElement(Ct, {
                                            text: R.strings.cosmicEvent.lobby.power_ups.description(),
                                            variant: 'cff_body_small',
                                            variant_md: 'cff_body',
                                            color: 'CFF_MAIN',
                                            className: F()(Wr, 'Pickups_delay_1000_79'),
                                        }),
                                    ),
                                ),
                                r().createElement(
                                    ot,
                                    {
                                        className: F()('Pickups_pickup_33', Wr, 'Pickups_delay_1500_ab'),
                                        mt: 10,
                                        mt_md: 50,
                                        center: !0,
                                        alignSelf: 'center',
                                    },
                                    r().createElement(
                                        ot,
                                        { className: 'Pickups_pickup_inner_aa' },
                                        r().createElement(
                                            ot,
                                            { className: 'Pickups_video_container_a8' },
                                            r().createElement(en, {
                                                src: R.videos.pickup.repulsor(),
                                                style: { display: qr.Repulsor === t ? 'block' : 'none' },
                                                autoplay: !1,
                                                loop: !0,
                                                className: zr,
                                                ref: n.current,
                                            }),
                                            r().createElement(en, {
                                                src: R.videos.pickup.jump(),
                                                style: { display: qr.Jump === t ? 'block' : 'none' },
                                                autoplay: !1,
                                                loop: !0,
                                                className: zr,
                                                ref: s.current,
                                            }),
                                            r().createElement(en, {
                                                src: R.videos.pickup.mines(),
                                                style: { display: qr.Mines === t ? 'block' : 'none' },
                                                autoplay: !1,
                                                loop: !0,
                                                className: zr,
                                                ref: o.current,
                                            }),
                                            r().createElement(en, {
                                                src: R.videos.pickup.vortex(),
                                                style: { display: qr.Vortex === t ? 'block' : 'none' },
                                                autoplay: !1,
                                                loop: !0,
                                                className: zr,
                                                ref: i.current,
                                            }),
                                            r().createElement(
                                                ot,
                                                { className: 'Pickups_pickup_info_06' },
                                                r().createElement(Yr, { type: t }),
                                                r().createElement(
                                                    ot,
                                                    { className: 'Pickups_pickup_abilities_42' },
                                                    r().createElement('div', { className: Vr }),
                                                    an.map((e) =>
                                                        r().createElement(
                                                            'div',
                                                            { key: e },
                                                            r().createElement(Kr, {
                                                                type: e,
                                                                onMouseEnter: tn,
                                                                onClick: () => {
                                                                    a(e), Nt('yes1');
                                                                },
                                                                isActive: t === e,
                                                            }),
                                                        ),
                                                    ),
                                                    r().createElement('div', { className: Vr }),
                                                ),
                                            ),
                                        ),
                                    ),
                                    r().createElement('div', { className: F()('Pickups_pickups_decoration_41', $r) }),
                                ),
                            )
                        );
                    },
                    rn = () => Nt('highlight');
                var nn;
                !(function (e) {
                    (e.MissionBrief = 'Mission Brief'), (e.HowToPlay = 'How To Play'), (e.Pickups = 'Pickups');
                })(nn || (nn = {}));
                const sn = (0, X.observer)(({ className: e, isAppearing: t, isDisappearing: a }) => {
                        const u = ze(),
                            n = u.controls,
                            s = u.model.computes,
                            o = r().useState('Mission Brief'),
                            i = o[0],
                            c = o[1],
                            l = s.getIsPerformanceAtLeastMedium(),
                            _ = s.getIsPerformanceAtLeastHigh();
                        return r().createElement(
                            ot,
                            {
                                className: F()(
                                    'MissionBriefRoute_base_58',
                                    t && 'MissionBriefRoute_base__appearing_80',
                                    a && 'MissionBriefRoute_base__disappearing_4b',
                                ),
                            },
                            r().createElement('div', {
                                className: F()(
                                    'MissionBriefRoute_background_94',
                                    !l && 'MissionBriefRoute_background_lowSpecBG_b7',
                                ),
                            }),
                            r().createElement(
                                ot,
                                { className: 'MissionBriefRoute_container_2b' },
                                r().createElement(
                                    ot,
                                    { className: F()('MissionBriefRoute_header_16', e) },
                                    r().createElement(
                                        ot,
                                        { className: 'MissionBriefRoute_leftContent_39' },
                                        r().createElement(xa, {
                                            caption: R.strings.cosmicEvent.intro(),
                                            onMouseEnter: rn,
                                            type: 'info',
                                            onClick: () => n.onAboutEvent(),
                                        }),
                                    ),
                                    r().createElement(
                                        ot,
                                        { row: !0, spaceBetween: !0, className: 'MissionBriefRoute_nav_8b' },
                                        r().createElement(
                                            ot,
                                            {
                                                className: Sr,
                                                onMouseEnter: rn,
                                                onClick: () => {
                                                    c('Mission Brief'),
                                                        'Mission Brief' !== i && Nt('ev_cosmic_lobby_click');
                                                },
                                            },
                                            r().createElement(Ct, {
                                                text: R.strings.cosmicEvent.lobby.mission_brief.nav(),
                                                variant: 'cff_body',
                                                variant_md: 'cff_heading_small',
                                                color: 'CFF_SUPPORT',
                                                className: F()(Pr, 'Mission Brief' === i ? Nr : ''),
                                            }),
                                            r().createElement('div', {
                                                className: F()(Tr, 'Mission Brief' === i ? Or : ''),
                                            }),
                                        ),
                                        r().createElement('div', { className: xr }),
                                        r().createElement(
                                            ot,
                                            {
                                                className: Sr,
                                                onMouseEnter: rn,
                                                onClick: () => {
                                                    c('How To Play'),
                                                        'How To Play' !== i && Nt('ev_cosmic_lobby_click');
                                                },
                                            },
                                            r().createElement(Ct, {
                                                text: R.strings.cosmicEvent.lobby.how_to_play.nav(),
                                                variant: 'cff_body',
                                                variant_md: 'cff_heading_small',
                                                color: 'CFF_SUPPORT',
                                                className: F()(Pr, 'How To Play' === i ? Nr : ''),
                                            }),
                                            r().createElement('div', {
                                                className: F()(Tr, 'How To Play' === i ? Or : ''),
                                            }),
                                        ),
                                        r().createElement('div', { className: xr }),
                                        r().createElement(
                                            ot,
                                            {
                                                className: Sr,
                                                onMouseEnter: rn,
                                                onClick: () => {
                                                    c('Pickups'), 'Pickups' !== i && Nt('ev_cosmic_lobby_click');
                                                },
                                            },
                                            r().createElement(Ct, {
                                                text: R.strings.cosmicEvent.lobby.power_ups.nav(),
                                                variant: 'cff_body',
                                                variant_md: 'cff_heading_small',
                                                color: 'CFF_SUPPORT',
                                                className: F()(Pr, 'Pickups' === i ? Nr : ''),
                                            }),
                                            r().createElement('div', { className: F()(Tr, 'Pickups' === i ? Or : '') }),
                                        ),
                                    ),
                                    r().createElement(
                                        ot,
                                        { className: 'MissionBriefRoute_rightContent_e9' },
                                        r().createElement(xa, {
                                            caption: R.strings.cosmicEvent.close(),
                                            onClick: () => n.onLobbyRouteChange(I.Main),
                                            side: 'right',
                                            type: 'close',
                                        }),
                                    ),
                                ),
                                i === nn.MissionBrief && r().createElement(Hr, { showGlitch: _ }),
                                i === nn.HowToPlay && r().createElement(jr, null),
                                i === nn.Pickups && r().createElement(un, null),
                            ),
                        );
                    }),
                    on = {
                        cff_splash: 'ResearchRoute_cff_splash_77',
                        cff_splash_small: 'ResearchRoute_cff_splash_small_1b',
                        cff_title: 'ResearchRoute_cff_title_d0',
                        cff_heading: 'ResearchRoute_cff_heading_26',
                        cff_heading_small: 'ResearchRoute_cff_heading_small_ff',
                        cff_body: 'ResearchRoute_cff_body_86',
                        cff_emphasis: 'ResearchRoute_cff_emphasis_73',
                        cff_emphasis_small: 'ResearchRoute_cff_emphasis_small_fd',
                        cff_body_small: 'ResearchRoute_cff_body_small_56',
                        cff_player: 'ResearchRoute_cff_player_e0',
                        cff_decorative_title: 'ResearchRoute_cff_decorative_title_c8',
                        cff_decorative_body: 'ResearchRoute_cff_decorative_body_de',
                        boxImage: 'ResearchRoute_boxImage_26',
                        transparent: 'ResearchRoute_transparent_40',
                        fade_in: 'ResearchRoute_fade_in_50',
                        fade_from_left: 'ResearchRoute_fade_from_left_f4',
                        fade_from_bottom: 'ResearchRoute_fade_from_bottom_57',
                        fade_out: 'ResearchRoute_fade_out_3d',
                        fade_to_left: 'ResearchRoute_fade_to_left_bc',
                        fade_to_bottom: 'ResearchRoute_fade_to_bottom_e2',
                        delay_100: 'ResearchRoute_delay_100_27',
                        delay_200: 'ResearchRoute_delay_200_5f',
                        delay_300: 'ResearchRoute_delay_300_bb',
                        delay_400: 'ResearchRoute_delay_400_e5',
                        delay_500: 'ResearchRoute_delay_500_4f',
                        delay_600: 'ResearchRoute_delay_600_10',
                        delay_700: 'ResearchRoute_delay_700_2f',
                        delay_800: 'ResearchRoute_delay_800_82',
                        delay_1000: 'ResearchRoute_delay_1000_71',
                        delay_1250: 'ResearchRoute_delay_1250_70',
                        delay_1500: 'ResearchRoute_delay_1500_3b',
                        delay_3000: 'ResearchRoute_delay_3000_87',
                        glitch: 'ResearchRoute_glitch_ea',
                        CFF_MAIN: 'ResearchRoute_CFF_MAIN_e7',
                        CFF_SUPPORT: 'ResearchRoute_CFF_SUPPORT_40',
                        CFF_DONE: 'ResearchRoute_CFF_DONE_c5',
                        CFF_PHASE: 'ResearchRoute_CFF_PHASE_f0',
                        CFF_IMPORTANT: 'ResearchRoute_CFF_IMPORTANT_68',
                        CFF_HERO: 'ResearchRoute_CFF_HERO_3d',
                        CFF_ATTENTION: 'ResearchRoute_CFF_ATTENTION_25',
                        CFF_BACKGROUND: 'ResearchRoute_CFF_BACKGROUND_95',
                        CFF_MINE: 'ResearchRoute_CFF_MINE_77',
                        CFF_VORTEX: 'ResearchRoute_CFF_VORTEX_40',
                        CFF_BARRIER: 'ResearchRoute_CFF_BARRIER_42',
                        CFF_JUMP: 'ResearchRoute_CFF_JUMP_be',
                        base__appearing: 'ResearchRoute_base__appearing_43',
                        base__disappearing: 'ResearchRoute_base__disappearing_97',
                        header: 'ResearchRoute_header_2d',
                        title_deco: 'ResearchRoute_title_deco_fc',
                        rewardImage: 'ResearchRoute_rewardImage_b0',
                        glitch1: 'ResearchRoute_glitch1_fd',
                        rewardImage_container: 'ResearchRoute_rewardImage_container_a9',
                        rewardImage_2: 'ResearchRoute_rewardImage_2_fb',
                        rewardImage_3: 'ResearchRoute_rewardImage_3_71',
                        glitch2: 'ResearchRoute_glitch2_4c',
                        glitch3: 'ResearchRoute_glitch3_1f',
                        content: 'ResearchRoute_content_1a',
                        console: 'ResearchRoute_console_5e',
                        animatedText: 'ResearchRoute_animatedText_f8',
                        research_button: 'ResearchRoute_research_button_73',
                        externalIcon: 'ResearchRoute_externalIcon_5d',
                        footer: 'ResearchRoute_footer_5a',
                    },
                    cn = ['className'],
                    ln = [
                        'text',
                        'className',
                        'paused',
                        'delay',
                        'onEnd',
                        'characterDelayMs',
                        'spaceDelayMs',
                        'PointerElement',
                        'fps',
                        'encryptionCharacters',
                    ];
                function _n() {
                    return (
                        (_n =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        _n.apply(this, arguments)
                    );
                }
                function mn(e, t) {
                    if (null == e) return {};
                    var a,
                        u,
                        r = {},
                        n = Object.keys(e);
                    for (u = 0; u < n.length; u++) (a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                    return r;
                }
                const dn = [...[...Array(94).keys()].map((e) => String.fromCharCode(33 + e))],
                    En = (e) => {
                        let t = e.className,
                            a = mn(e, cn);
                        return r().createElement('span', _n({}, a, { className: t }));
                    },
                    gn = (e) => {
                        let t = e.text,
                            a = e.className,
                            n = e.paused,
                            s = void 0 !== n && n,
                            o = e.delay,
                            i = void 0 === o ? 0 : o,
                            c = e.onEnd,
                            l = e.characterDelayMs,
                            _ = void 0 === l ? 40 : l,
                            m = e.spaceDelayMs,
                            d = void 0 === m ? 200 : m,
                            E = e.PointerElement,
                            g = void 0 === E ? En : E,
                            f = e.fps,
                            p = void 0 === f ? 20 : f,
                            h = e.encryptionCharacters,
                            A = void 0 === h ? dn : h,
                            b = mn(e, ln);
                        const D = r().useState({ wordIndex: 0, characterIndex: 0 }),
                            v = D[0],
                            C = v.wordIndex,
                            B = v.characterIndex,
                            y = D[1],
                            R = r().useState(!1),
                            M = R[0],
                            w = R[1],
                            S = (0, u.useMemo)(() => {
                                const e = t.split(' '),
                                    a = [0],
                                    u = e.map(
                                        (e) => (
                                            a.push((a.at(-1) || 0) + e.length),
                                            e
                                                .split('')
                                                .map(() => A[Math.floor(Math.random() * A.length)])
                                                .join('')
                                        ),
                                    );
                                return { words: e, encryptedWords: u, sumOfPreviousCharacters: a };
                            }, [t, A]),
                            N = S.words,
                            P = S.encryptedWords,
                            x = S.sumOfPreviousCharacters;
                        return (
                            r().useEffect(() => {
                                y({ wordIndex: 0, characterIndex: 0 }), w(!1);
                            }, [t]),
                            r().useEffect(() => {
                                const e = Date.now() + i;
                                if (s) return;
                                w(!1);
                                const t = setInterval(
                                    () => {
                                        const a = requestAnimationFrame(() => {
                                            y((u) => {
                                                const r = u.characterIndex === N[u.wordIndex].length;
                                                if (u.wordIndex === N.length - 1 && r)
                                                    return (
                                                        clearInterval(t), cancelAnimationFrame(a), null == c || c(), u
                                                    );
                                                let n =
                                                    Date.now() -
                                                    e -
                                                    (u.wordIndex * d + x[u.wordIndex] * _ + u.characterIndex * _);
                                                const s = { wordIndex: u.wordIndex, characterIndex: u.characterIndex };
                                                for (; n > _; )
                                                    if (s.characterIndex === N[s.wordIndex].length) {
                                                        if (s.wordIndex === N.length - 1)
                                                            return (
                                                                clearInterval(t),
                                                                cancelAnimationFrame(a),
                                                                w(!0),
                                                                null == c || c(),
                                                                s
                                                            );
                                                        if (n < d) return s;
                                                        s.wordIndex++, (s.characterIndex = 0), (n -= d);
                                                    } else s.characterIndex++, (n -= _);
                                                return s;
                                            });
                                        });
                                        return () => {
                                            cancelAnimationFrame(a);
                                        };
                                    },
                                    Math.floor(1e3 / p),
                                );
                                return () => {
                                    clearInterval(t), w(!0);
                                };
                            }, [N, P, x, p, s, _, d, i, c]),
                            r().createElement(
                                ot,
                                _n({}, b, { className: F()('AnimatedText_base_03', a) }),
                                r().createElement(
                                    'div',
                                    { className: 'AnimatedText_spacer_78' },
                                    P.map((e, t) => r().createElement('span', { key: t }, e)),
                                ),
                                r().createElement(
                                    'div',
                                    { className: 'AnimatedText_text_17' },
                                    N.map((e, t) => {
                                        let a = e;
                                        if ((t > C && (a = P[t]), t === C)) {
                                            const u = e.slice(0, B),
                                                n = P[t].slice(B);
                                            a = r().createElement(
                                                r().Fragment,
                                                null,
                                                u,
                                                r().createElement(g, {
                                                    className: F()(
                                                        'AnimatedText_pointer_b4',
                                                        (M || s || !n) && 'AnimatedText_pointer__hidden_e8',
                                                    ),
                                                }),
                                                n,
                                            );
                                        }
                                        return r().createElement('span', { key: t }, a);
                                    }),
                                ),
                            )
                        );
                    };
                function fn() {
                    return (
                        (fn =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
                                }
                                return e;
                            }),
                        fn.apply(this, arguments)
                    );
                }
                const pn = () => Nt('highlight'),
                    hn = { characterDelayMs: 20, spaceDelayMs: 150 },
                    Fn = (0, X.observer)(({ isAppearing: e, isDisappearing: t }) => {
                        const a = ze().controls,
                            n = (0, u.useState)(0),
                            s = n[0],
                            o = n[1];
                        return (
                            r().useEffect(() => {
                                const e = setTimeout(() => {
                                    o(1);
                                }, 2e3);
                                return () => clearTimeout(e);
                            }, []),
                            r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(Ha, {
                                    className: F()(on.header, t && on.base__disappearing),
                                    leftContent: null,
                                    centerContent: null,
                                }),
                                r().createElement(
                                    ot,
                                    {
                                        className: F()(on.content, e && on.base__appearing, t && on.base__disappearing),
                                        column: !0,
                                        justifyContent: 'center',
                                        alignItems: 'flex-start',
                                    },
                                    r().createElement(
                                        ot,
                                        {
                                            alignSelf: 'center',
                                            row: !0,
                                            justifyContent: 'center',
                                            mb: 'LG',
                                            mb_lg: 'XL',
                                            className: s < 1 ? on.transparent : on.fade_in,
                                        },
                                        r().createElement('div', { className: on.title_deco }),
                                        r().createElement(Ct, {
                                            variant: 'cff_heading_small',
                                            variant_md: 'cff_title',
                                            color: 'CFF_SUPPORT',
                                            text: R.strings.cosmicEvent.lobby.research.title(),
                                            ml: 'MD',
                                            mr: 'MD',
                                        }),
                                        r().createElement('div', { className: on.title_deco }),
                                    ),
                                    r().createElement(
                                        ot,
                                        { column: !0, alignSelf: 'center' },
                                        r().createElement(
                                            gr,
                                            {
                                                text: R.strings.cosmicDecor.lobby.research.headingDeco(),
                                                className: s < 1 ? on.transparent : F()(on.fade_in, on.delay_400),
                                            },
                                            r().createElement(Ct, {
                                                variant: 'cff_heading_small',
                                                variant_md: 'cff_heading',
                                                mb: 20,
                                                color: 'CFF_MAIN',
                                                text: R.strings.cosmicEvent.lobby.research
                                                    .heading()
                                                    .replace('%(event_name)', R.strings.cosmicEvent.common.name()),
                                            }),
                                        ),
                                    ),
                                    r().createElement(
                                        ot,
                                        {
                                            className: F()(
                                                on.console,
                                                s < 1 ? on.transparent : F()(on.fade_in, on.delay_800),
                                            ),
                                            column: !0,
                                            alignItems: 'stretch',
                                            alignSelf: 'stretch',
                                        },
                                        r().createElement('div', { className: on.console_pointer }),
                                        r().createElement(
                                            gn,
                                            fn({}, hn, {
                                                paused: s < 1,
                                                delay: 1e3,
                                                text: R.strings.cosmicEvent.lobby.research.message1(),
                                                className: on.animatedText,
                                                onEnd: () => o((e) => (e < 2 ? 2 : e)),
                                            }),
                                        ),
                                        r().createElement(
                                            gn,
                                            fn({}, hn, {
                                                paused: s < 2,
                                                text: R.strings.cosmicEvent.lobby.research.message2(),
                                                className: on.animatedText,
                                                onEnd: () => o((e) => (e < 3 ? 3 : e)),
                                                mt: 10,
                                            }),
                                        ),
                                    ),
                                    r().createElement(
                                        ot,
                                        {
                                            row: !0,
                                            justifyContent: 'center',
                                            alignItems: 'stretch',
                                            alignSelf: 'stretch',
                                            mt: 32,
                                        },
                                        r().createElement(
                                            ot,
                                            {
                                                column: !0,
                                                alignItems: 'center',
                                                width: 220,
                                                className:
                                                    s < 1 ? on.transparent : F()(on.fade_from_bottom, on.delay_1000),
                                            },
                                            r().createElement(
                                                ot,
                                                {
                                                    width: 124,
                                                    height: 93,
                                                    width_lg: 180,
                                                    height_lg: 135,
                                                    className: on.rewardImage_container,
                                                },
                                                r().createElement('img', {
                                                    src: R.images.cosmic_event.gui.maps.icons.research_route.soundtrack(),
                                                    className: on.rewardImage,
                                                }),
                                                r().createElement('img', {
                                                    src: R.images.cosmic_event.gui.maps.icons.research_route.soundtrack(),
                                                    className: on.rewardImage_2,
                                                }),
                                                r().createElement('img', {
                                                    src: R.images.cosmic_event.gui.maps.icons.research_route.soundtrack(),
                                                    className: on.rewardImage_3,
                                                }),
                                            ),
                                            r().createElement(Ct, {
                                                variant: 'cff_emphasis_small',
                                                variant_md: 'cff_emphasis',
                                                color: 'CFF_MAIN',
                                                alignSelf: 'stretch',
                                                mt: 14,
                                                textCenter: !0,
                                                text: R.strings.cosmicEvent.lobby.research.soundtrackLabel(),
                                            }),
                                        ),
                                        r().createElement(
                                            ot,
                                            {
                                                column: !0,
                                                alignItems: 'center',
                                                ml: 10,
                                                width: 220,
                                                className:
                                                    s < 1 ? on.transparent : F()(on.fade_from_bottom, on.delay_1250),
                                            },
                                            r().createElement(
                                                ot,
                                                {
                                                    width: 124,
                                                    height: 93,
                                                    width_lg: 180,
                                                    height_lg: 135,
                                                    className: on.rewardImage_container,
                                                },
                                                r().createElement('img', {
                                                    src: R.images.cosmic_event.gui.maps.icons.research_route.wallpapers(),
                                                    className: F()(on.rewardImage, on.delay_400),
                                                }),
                                                r().createElement('img', {
                                                    src: R.images.cosmic_event.gui.maps.icons.research_route.wallpapers(),
                                                    className: F()(on.rewardImage_2, on.delay_400),
                                                }),
                                                r().createElement('img', {
                                                    src: R.images.cosmic_event.gui.maps.icons.research_route.wallpapers(),
                                                    className: F()(on.rewardImage_3, on.delay_400),
                                                }),
                                            ),
                                            r().createElement(Ct, {
                                                variant: 'cff_emphasis_small',
                                                variant_md: 'cff_emphasis',
                                                color: 'CFF_MAIN',
                                                alignSelf: 'stretch',
                                                mt: 14,
                                                textCenter: !0,
                                                text: R.strings.cosmicEvent.lobby.research.wallpapersLabel(),
                                            }),
                                        ),
                                    ),
                                    r().createElement(
                                        Xa,
                                        {
                                            className: s < 1 ? on.transparent : F()(on.fade_from_bottom, on.delay_1500),
                                            alignSelf: 'center',
                                            color: 'done',
                                            onMouseEnter: pn,
                                            flexDirection: 'column',
                                            width: 180,
                                            width_md: 220,
                                            mt: 46,
                                            onClick: () => {
                                                Nt('yes1'), a.onGetRewardsClick();
                                            },
                                        },
                                        r().createElement(
                                            ot,
                                            { row: !0, center: !0 },
                                            R.strings.cosmicEvent.lobby.research.button(),
                                            r().createElement('img', {
                                                src: R.images.cosmic_event.gui.maps.icons.research_route.external(),
                                                className: on.externalIcon,
                                            }),
                                        ),
                                    ),
                                    r().createElement(
                                        ot,
                                        {
                                            className: s < 1 ? on.transparent : F()(on.fade_from_bottom, on.delay_1500),
                                            alignSelf: 'center',
                                            row: !0,
                                            center: !0,
                                        },
                                        r().createElement(Ct, {
                                            variant: 'cff_body_small',
                                            variant_md: 'cff_body',
                                            color: 'CFF_PHASE',
                                            mt: 28,
                                            className: on.footer,
                                            text: R.strings.cosmicEvent.lobby.research.footer(),
                                        }),
                                    ),
                                ),
                            )
                        );
                    }),
                    An = {
                        [I.Main]: br,
                        [I.Artefact]: wr,
                        [I.Uhura]: lr,
                        [I.Kirk]: lr,
                        [I.Spock]: lr,
                        [I.MissionBrief]: sn,
                        [I.Queue]: Cr,
                        [I.Research]: Fn,
                    },
                    bn = {
                        [I.Main]: 3e3,
                        [I.Artefact]: 1600,
                        [I.Uhura]: 1400,
                        [I.Kirk]: 1400,
                        [I.Spock]: 1400,
                        [I.MissionBrief]: 1600,
                        [I.Queue]: 1600,
                        [I.Research]: 1600,
                    },
                    Dn = {
                        [I.Main]: 1e3,
                        [I.Artefact]: 1600,
                        [I.Uhura]: 1400,
                        [I.Kirk]: 1400,
                        [I.Spock]: 1400,
                        [I.MissionBrief]: 1e3,
                        [I.Queue]: 1e3,
                        [I.Research]: 1e3,
                    },
                    vn = {
                        [I.Uhura]: [I.Uhura, I.Kirk, I.Spock],
                        [I.Kirk]: [I.Uhura, I.Kirk, I.Spock],
                        [I.Spock]: [I.Uhura, I.Kirk, I.Spock],
                    },
                    Cn = (e, t) => {
                        if ('ROUTE_CHANGE' === t.type) {
                            var a;
                            if (
                                (null != (a = vn[e.currentRoute]) && a.includes(t.payload)) ||
                                e.currentRoute === t.payload
                            )
                                return Object.assign({}, e, { currentRoute: t.payload });
                            const u = [
                                ...e.schedule,
                                { action: { type: 'ROUTE_APPEAR_DONE' }, delay: bn[t.payload] },
                                { action: { type: 'ROUTE_DISAPPEAR_DONE' }, delay: Dn[e.currentRoute] },
                            ];
                            return Object.assign({}, e, {
                                lastRoute: e.currentRoute,
                                currentRoute: t.payload,
                                currentRouteIsAppearing: !0,
                                schedule: u,
                            });
                        }
                        return 'ROUTE_APPEAR_DONE' === t.type
                            ? Object.assign({}, e, { currentRouteIsAppearing: !1 })
                            : 'ROUTE_DISAPPEAR_DONE' === t.type
                              ? Object.assign({}, e, { lastRoute: void 0 })
                              : e;
                    },
                    Bn = (0, X.observer)(() => {
                        const e = ze(),
                            t = e.model,
                            a = e.controls,
                            n = t.lobbyRoute.lobbyRoute.get() || I.Main,
                            s = (0, u.useReducer)(Cn, {
                                currentRoute: n,
                                currentRouteIsAppearing: !1,
                                lastRoute: void 0,
                                schedule: [],
                            }),
                            o = s[0],
                            i = s[1];
                        (0, u.useEffect)(() => {
                            i({ type: 'ROUTE_CHANGE', payload: n });
                        }, [n]);
                        const c = (0, u.useRef)([]);
                        (0, u.useEffect)(() => {
                            const e = o.schedule;
                            0 !== e.length &&
                                e.forEach(({ action: e, delay: t }, a) => {
                                    void 0 === c.current[a] &&
                                        (c.current[a] = setTimeout(() => {
                                            i(e);
                                        }, t));
                                });
                        }, [o.schedule]),
                            (0, u.useEffect)(
                                () => () => {
                                    c.current.forEach((e) => {
                                        clearTimeout(e);
                                    });
                                },
                                [],
                            );
                        const l = (void 0 !== o.lastRoute && o.lastRoute !== n && An[o.lastRoute]) || void 0,
                            _ = An[n] || br;
                        return (
                            W(() => {
                                n === I.Main ? a.onClose() : a.onLobbyRouteChange(I.Main);
                            }),
                            r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(_, { key: n, isAppearing: o.currentRouteIsAppearing }),
                                l && r().createElement(l, { key: o.lastRoute, isDisappearing: !0 }),
                            )
                        );
                    }),
                    yn = 'Announcer_text_9d',
                    Rn = ['text', 'time'],
                    Mn = (0, X.observer)((e) => {
                        let t = e.text,
                            a = e.time,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    u,
                                    r = {},
                                    n = Object.keys(e);
                                for (u = 0; u < n.length; u++) (a = n[u]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                                return r;
                            })(e, Rn);
                        const s = (0, u.useState)(''),
                            o = s[0],
                            i = s[1],
                            c = Math.max(3e3, a),
                            l = (0, u.useRef)(null),
                            _ = (0, u.useRef)(null),
                            m = (0, u.useState)(!0),
                            d = m[0],
                            E = m[1],
                            g = (function (e, t = 5e3) {
                                const a = (0, u.useState)(''),
                                    r = a[0],
                                    n = a[1];
                                return (
                                    (0, u.useEffect)(() => {
                                        if (!t) return void n(e);
                                        let a,
                                            u = '';
                                        const r = e,
                                            s = r.includes(' ')
                                                ? r.split(' ')
                                                : (function (e, t) {
                                                      const a = [];
                                                      for (let t = 0, u = e.length; t < u; t += 3)
                                                          a.push(e.substring(t, t + 3));
                                                      return a;
                                                  })(r),
                                            o = r.includes(' ') ? ' ' : '',
                                            i = Date.now();
                                        return (
                                            (function e() {
                                                const c = Date.now() - i,
                                                    l = Math.min(1, c / t),
                                                    _ = Math.min(Math.ceil(s.length * l), s.length),
                                                    m = s.slice(0, _).join(o);
                                                l < 1
                                                    ? (m !== u && ((u = m), n(m)), (a = requestAnimationFrame(e)))
                                                    : n(r);
                                            })(),
                                            () => cancelAnimationFrame(a)
                                        );
                                    }, [e, t]),
                                    r
                                );
                            })(o, c),
                            f = () => {
                                i(''), E(!0);
                            };
                        return (
                            (0, u.useEffect)(() => {
                                i(t);
                                const e = setTimeout(f, c + 2e3);
                                return () => clearTimeout(e);
                            }, [t, c]),
                            (0, u.useEffect)(() => {
                                const e = l.current,
                                    t = _.current;
                                if (e && t) {
                                    const a = e.getBoundingClientRect().height,
                                        u = t.getBoundingClientRect().height;
                                    E(!g || !a || a < u);
                                }
                            }, [g]),
                            r().createElement(
                                'div',
                                n,
                                r().createElement(
                                    'div',
                                    { className: F()('Announcer_base_17', o && 'Announcer_base__visible_1b') },
                                    r().createElement('div', { className: 'Announcer_image_91' }),
                                    r().createElement('img', {
                                        className: 'Announcer_close_59',
                                        src: R.images.cosmic_event.gui.maps.icons.announcer.close(),
                                        onClick: f,
                                    }),
                                    r().createElement(
                                        'div',
                                        { className: 'Announcer_name_d8' },
                                        R.strings.cosmicEvent.announcer.name(),
                                        r().createElement(
                                            'div',
                                            { className: 'Announcer_speaker_2a' },
                                            r().createElement(qa, { active: !0 }),
                                        ),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: 'Announcer_text_container_4a', ref: _ },
                                        r().createElement('div', { className: yn }, o),
                                        r().createElement(
                                            'div',
                                            {
                                                ref: l,
                                                className: F()(
                                                    yn,
                                                    'Announcer_text__absolute_70',
                                                    d && 'Announcer_text__oneLiner_b9',
                                                ),
                                            },
                                            g,
                                        ),
                                    ),
                                ),
                            )
                        );
                    }),
                    wn = (0, X.observer)(() => {
                        const e = ze(),
                            t = e.model,
                            a = e.controls,
                            u = t.announcer.get(),
                            n = t.root.get(),
                            s = t.lobbyRoute.lobbyRoute.get() || I.Main,
                            o = t.computes.getIsPerformanceAtLeastMedium();
                        return (
                            W(() => {
                                s === I.Main ? a.onClose() : a.onLobbyRouteChange(I.Main);
                            }),
                            r().createElement(
                                'div',
                                {
                                    className: F()(
                                        'CosmicLobbyViewApp_base_1b',
                                        n.fadeOut && 'CosmicLobbyViewApp_base__fadeOut_49',
                                        !o && 'CosmicLobbyViewApp_noCSSFilters_5d',
                                    ),
                                },
                                r().createElement(Ma, null, r().createElement(Bn, null)),
                                r().createElement(Mn, {
                                    className: 'CosmicLobbyViewApp_announcer_4f',
                                    text: u.text,
                                    time: u.time,
                                }),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    k().render(
                        r().createElement($e, null, r().createElement(T, null, r().createElement(wn, null))),
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
        return __webpack_modules__[e].call(a.exports, a, a.exports, __webpack_require__), a.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, a, u) => {
            if (!t) {
                var r = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [t, a, u] = deferred[i], n = !0, s = 0; s < t.length; s++)
                        (!1 & u || r >= u) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((n = !1), u < r && (r = u));
                    if (n) {
                        deferred.splice(i--, 1);
                        var o = a();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            u = u || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > u; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [t, a, u];
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
        (() => {
            var e = { 726: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, a) => {
                    var u,
                        r,
                        [n, s, o] = a,
                        i = 0;
                    if (n.some((t) => 0 !== e[t])) {
                        for (u in s) __webpack_require__.o(s, u) && (__webpack_require__.m[u] = s[u]);
                        if (o) var c = o(__webpack_require__);
                    }
                    for (t && t(a); i < n.length; i++)
                        (r = n[i]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(c);
                },
                a = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(328));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
