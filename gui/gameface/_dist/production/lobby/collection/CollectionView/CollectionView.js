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
                u.r(t), u.d(t, { mouse: () => o, onResize: () => r });
                var i = u(472),
                    a = u(176);
                const r = (0, i.E)('clientResized'),
                    n = { down: (0, i.E)('mousedown'), up: (0, i.E)('mouseup'), move: (0, i.E)('mousemove') };
                const o = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, a.R)(!1);
                    }
                    function u() {
                        e.enabled && (0, a.R)(!0);
                    }
                    function i() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', u))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', u))
                            : (0, a.R)(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (t, u) => (
                            (t[u] = (function (t) {
                                return (u) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const r = `mouse${t}`,
                                        o = n[t]((e) => u([e, 'outside']));
                                    function s(e) {
                                        u([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, s),
                                        i(),
                                        () => {
                                            a &&
                                                (o(),
                                                window.removeEventListener(r, s),
                                                (e.listeners -= 1),
                                                i(),
                                                (a = !1));
                                        }
                                    );
                                };
                            })(u)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, r, {
                        disable() {
                            (e.enabled = !1), i();
                        },
                        enable() {
                            (e.enabled = !0), i();
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
            959: (e, t, u) => {
                'use strict';
                u.r(t),
                    u.d(t, {
                        events: () => i,
                        getMouseGlobalPosition: () => r,
                        getSize: () => a,
                        graphicsQuality: () => n,
                    });
                var i = u(527);
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const n = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            176: (e, t, u) => {
                'use strict';
                function i(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                u.d(t, { R: () => i });
            },
            472: (e, t, u) => {
                'use strict';
                function i(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                u.d(t, { E: () => i });
            },
            138: (e, t, u) => {
                'use strict';
                u.d(t, { O: () => a });
                var i = u(959);
                const a = { view: u(641), client: i };
            },
            722: (e, t, u) => {
                'use strict';
                function i(e, t, u = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
                }
                function a(e, t, u) {
                    return `url(${i(e, t, u)})`;
                }
                u.r(t), u.d(t, { getBgUrl: () => a, getTextureUrl: () => i });
            },
            112: (e, t, u) => {
                'use strict';
                u.d(t, { W: () => i });
                const i = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            538: (e, t, u) => {
                'use strict';
                u.d(t, { U: () => a });
                var i = u(472);
                const a = {
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
            641: (e, t, u) => {
                'use strict';
                u.r(t),
                    u.d(t, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => o,
                        children: () => i,
                        displayStatus: () => a.W,
                        displayStatusIs: () => v,
                        events: () => r.U,
                        extraSize: () => b,
                        forceTriggerMouseMove: () => w,
                        freezeTextureBeforeResize: () => E,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => B,
                        getScale: () => _,
                        getSize: () => h,
                        getViewGlobalPosition: () => g,
                        isEventHandled: () => C,
                        isFocused: () => F,
                        pxToRem: () => A,
                        remToPx: () => p,
                        resize: () => m,
                        sendEvent: () => n.qP,
                        setAnimateWindow: () => f,
                        setEventHandled: () => D,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => S,
                    });
                var i = u(722),
                    a = u(112),
                    r = u(538),
                    n = u(566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function s(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, t, u, i = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, u, i);
                }
                function c(e, t, u) {
                    return viewEnv.addDataChangedCallback(e, t, u);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function h(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function g(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: p(t.x), y: p(t.y) };
                }
                function E() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function _() {
                    return viewEnv.getScale();
                }
                function A(e) {
                    return viewEnv.pxToRem(e);
                }
                function p(e) {
                    return viewEnv.remToPx(e);
                }
                function f(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function F() {
                    return viewEnv.isFocused();
                }
                function D() {
                    return viewEnv.setEventHandled();
                }
                function C() {
                    return viewEnv.isEventHandled();
                }
                function w() {
                    viewEnv.forceTriggerMouseMove();
                }
                function B() {
                    return viewEnv.getShowingStatus();
                }
                const v = Object.keys(a.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === a.W[t]), e),
                        {},
                    ),
                    b = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    S = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            566: (e, t, u) => {
                'use strict';
                u.d(t, { qP: () => l });
                const i = ['args'];
                const a = 2,
                    r = 16,
                    n = 32,
                    o = 64,
                    s = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                n = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        i,
                                        a = {},
                                        r = Object.keys(e);
                                    for (i = 0; i < r.length; i++) (u = r[i]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                    return a;
                                })(t, i);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, n, {
                                          arguments:
                                              ((a = r),
                                              Object.entries(a).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, n));
                        }
                        return viewEnv.handleViewEvent({ __Type: u, type: e });
                        var a;
                    },
                    l = {
                        close(e) {
                            s('popover' === e ? a : n);
                        },
                        minimize() {
                            s(o);
                        },
                        move(e) {
                            s(r, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            521: (e, t, u) => {
                'use strict';
                let i, a;
                u.d(t, { n: () => i }),
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
                            (e[(e.KEY_9 = 57)] = 'KEY_9'),
                            (e[(e.CAPS_LOCK = 20)] = 'CAPS_LOCK'),
                            (e[(e.INSERT = 45)] = 'INSERT'),
                            (e[(e.F1 = 112)] = 'F1'),
                            (e[(e.F2 = 113)] = 'F2'),
                            (e[(e.F3 = 114)] = 'F3'),
                            (e[(e.F4 = 115)] = 'F4'),
                            (e[(e.F5 = 116)] = 'F5'),
                            (e[(e.F6 = 117)] = 'F6'),
                            (e[(e.F7 = 118)] = 'F7'),
                            (e[(e.F8 = 119)] = 'F8'),
                            (e[(e.F9 = 120)] = 'F9'),
                            (e[(e.F10 = 121)] = 'F10'),
                            (e[(e.F11 = 122)] = 'F11'),
                            (e[(e.F12 = 123)] = 'F12'),
                            (e[(e.SELECT = 93)] = 'SELECT'),
                            (e[(e.NUMPAD_0 = 96)] = 'NUMPAD_0'),
                            (e[(e.NUMPAD_1 = 97)] = 'NUMPAD_1'),
                            (e[(e.NUMPAD_2 = 98)] = 'NUMPAD_2'),
                            (e[(e.NUMPAD_3 = 99)] = 'NUMPAD_3'),
                            (e[(e.NUMPAD_4 = 100)] = 'NUMPAD_4'),
                            (e[(e.NUMPAD_5 = 101)] = 'NUMPAD_5'),
                            (e[(e.NUMPAD_6 = 102)] = 'NUMPAD_6'),
                            (e[(e.NUMPAD_7 = 103)] = 'NUMPAD_7'),
                            (e[(e.NUMPAD_8 = 104)] = 'NUMPAD_8'),
                            (e[(e.NUMPAD_9 = 105)] = 'NUMPAD_9'),
                            (e[(e.NUM_DECIMAL = 110)] = 'NUM_DECIMAL'),
                            (e[(e.STAR = 106)] = 'STAR'),
                            (e[(e.NUM_SLASH = 111)] = 'NUM_SLASH'),
                            (e[(e.FORWARD_SLASH = 191)] = 'FORWARD_SLASH'),
                            (e[(e.COMMA = 188)] = 'COMMA'),
                            (e[(e.DASH = 189)] = 'DASH'),
                            (e[(e.PERIOD = 190)] = 'PERIOD');
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
                    })(a || (a = {}));
            },
            358: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => r });
                var i = u(138);
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
                    addCallback(e, t, u = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = i.O.view.addModelObserver(e, u, a);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = t),
                                  u > 0 && (this._views[u] ? this._views[u].push(r) : (this._views[u] = [r])))
                                : console.error("Can't add callback for model:", e),
                            r
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
                            const i = this._callbacks[u];
                            void 0 !== i && i(e, t);
                        });
                    }
                }
                a.__instance = void 0;
                const r = a;
            },
            572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(364);
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
            364: (e, t, u) => {
                'use strict';
                u.d(t, { Sw: () => r.Z, B3: () => l, Z5: () => n, B0: () => s, ry: () => p, Eu: () => f });
                class i {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: u }) => {
                                    let i = e.target;
                                    do {
                                        if (i === t) return;
                                        i = i.parentNode;
                                    } while (i);
                                    u();
                                });
                            });
                    }
                    static get instance() {
                        return i.__instance || (i.__instance = new i()), i.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const u = e,
                            i = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== u || t !== i)),
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
                const a = i;
                var r = u(358);
                const n = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    o = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, u) => userLocale.getTimeFormat(e, t, void 0 === u || u),
                        getTimeString: (e, t, u) => userLocale.getTimeString(e, t, void 0 === u || u),
                    };
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
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    h = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = u(521),
                    g = u(138);
                const E = ['args'];
                function _(e, t, u, i, a, r, n) {
                    try {
                        var o = e[r](n),
                            s = o.value;
                    } catch (e) {
                        return void u(e);
                    }
                    o.done ? t(s) : Promise.resolve(s).then(i, a);
                }
                const A = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    p = (function () {
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
                                    return new Promise(function (i, a) {
                                        var r = e.apply(t, u);
                                        function n(e) {
                                            _(r, i, a, n, o, 'next', e);
                                        }
                                        function o(e) {
                                            _(r, i, a, n, o, 'throw', e);
                                        }
                                        n(void 0);
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
                    F = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        i,
                                        a = {},
                                        r = Object.keys(e);
                                    for (i = 0; i < r.length; i++) (u = r[i]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                    return a;
                                })(t, E);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, r, {
                                          arguments:
                                              ((i = a),
                                              Object.entries(i).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: u, type: e });
                        var i;
                    },
                    D = () => F(s.CLOSE),
                    C = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var w = u(572);
                const B = a.instance,
                    v = {
                        DataTracker: r.Z,
                        ViewModel: w.Z,
                        ViewEventType: s,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: h,
                        makeGlobalBoundingBox: A,
                        sendMoveEvent: (e) => F(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: D,
                        sendClosePopOverEvent: () => F(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            F(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: (e, t, u, i, a = R.invalid('resId'), r) => {
                            const n = g.O.view.getViewGlobalPosition(),
                                o = u.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                d = o.width,
                                h = o.height,
                                m = {
                                    x: g.O.view.pxToRem(l) + n.x,
                                    y: g.O.view.pxToRem(c) + n.y,
                                    width: g.O.view.pxToRem(d),
                                    height: g.O.view.pxToRem(h),
                                };
                            F(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: i || R.invalid('resId'),
                                targetID: a,
                                direction: t,
                                bbox: A(m),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => C(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            C(e, D);
                        },
                        handleViewEvent: F,
                        onBindingsReady: p,
                        onLayoutReady: f,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                        dumpViewModel: function e(t) {
                            const u = {};
                            if ('object' != typeof t) return t;
                            for (const i in t)
                                if (Object.prototype.hasOwnProperty.call(t, i)) {
                                    const a = Object.prototype.toString.call(t[i]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = t[i];
                                        u[i] = [];
                                        for (let t = 0; t < a.length; t++) u[i].push({ value: e(a[t].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (u[i] = e(t[i]))
                                            : (u[i] = t[i]);
                                }
                            return u;
                        },
                        ClickOutsideManager: B,
                        SystemLocale: n,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = v;
            },
            407: (e, t, u) => {
                'use strict';
                var i = {};
                u.r(i),
                    u.d(i, {
                        Area: () => Pa,
                        Bar: () => Sa,
                        DefaultScroll: () => ya,
                        Direction: () => da,
                        defaultSettings: () => ha,
                        useHorizontalScrollApi: () => ga,
                    });
                var a = {};
                u.r(a), u.d(a, { Area: () => Va, Bar: () => ja, Default: () => Ya, useVerticalScrollApi: () => La });
                var r = u(179),
                    n = u.n(r);
                const o = (e, t, u) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && u.extraLarge) ||
                          (t.largeHeight && u.large) ||
                          (t.mediumHeight && u.medium) ||
                          (t.smallHeight && u.small) ||
                          (t.extraSmallHeight && u.extraSmall)
                            ? e
                            : null
                        : e;
                var s = u(138);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function d(e, t, u) {
                    const i = (function (e, t) {
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
                        a = (function (e, t) {
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
                        r = Math.min(i, a);
                    return {
                        extraLarge: r === u.extraLarge.weight,
                        large: r === u.large.weight,
                        medium: r === u.medium.weight,
                        small: r === u.small.weight,
                        extraSmall: r === u.extraSmall.weight,
                        extraLargeWidth: i === u.extraLarge.weight,
                        largeWidth: i === u.large.weight,
                        mediumWidth: i === u.medium.weight,
                        smallWidth: i === u.small.weight,
                        extraSmallWidth: i === u.extraSmall.weight,
                        extraLargeHeight: a === u.extraLarge.weight,
                        largeHeight: a === u.large.weight,
                        mediumHeight: a === u.medium.weight,
                        smallHeight: a === u.small.weight,
                        extraSmallHeight: a === u.extraSmall.weight,
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
                const h = s.O.client.getSize('rem'),
                    m = h.width,
                    g = h.height,
                    E = Object.assign({ width: m, height: g }, d(m, g, l)),
                    _ = (0, r.createContext)(E),
                    A = ['children'];
                const p = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                i,
                                a = {},
                                r = Object.keys(e);
                            for (i = 0; i < r.length; i++) (u = r[i]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, A);
                    const i = (0, r.useContext)(_),
                        a = i.extraLarge,
                        n = i.large,
                        s = i.medium,
                        l = i.small,
                        c = i.extraSmall,
                        d = i.extraLargeWidth,
                        h = i.largeWidth,
                        m = i.mediumWidth,
                        g = i.smallWidth,
                        E = i.extraSmallWidth,
                        p = i.extraLargeHeight,
                        f = i.largeHeight,
                        F = i.mediumHeight,
                        D = i.smallHeight,
                        C = i.extraSmallHeight,
                        w = { extraLarge: p, large: f, medium: F, small: D, extraSmall: C };
                    if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                        if (u.extraLarge && a) return t;
                        if (u.large && n) return t;
                        if (u.medium && s) return t;
                        if (u.small && l) return t;
                        if (u.extraSmall && c) return t;
                    } else {
                        if (u.extraLargeWidth && d) return o(t, u, w);
                        if (u.largeWidth && h) return o(t, u, w);
                        if (u.mediumWidth && m) return o(t, u, w);
                        if (u.smallWidth && g) return o(t, u, w);
                        if (u.extraSmallWidth && E) return o(t, u, w);
                        if (
                            !(u.extraLargeWidth || u.largeWidth || u.mediumWidth || u.smallWidth || u.extraSmallWidth)
                        ) {
                            if (u.extraLargeHeight && p) return t;
                            if (u.largeHeight && f) return t;
                            if (u.mediumHeight && F) return t;
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
                (0, r.memo)(p);
                const f = (e) => {
                        const t = (0, r.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    F = (0, r.memo)(({ children: e }) => {
                        const t = (0, r.useContext)(_),
                            u = (0, r.useState)(t),
                            i = u[0],
                            a = u[1],
                            o = (0, r.useCallback)((e, t) => {
                                const u = s.O.view.pxToRem(e),
                                    i = s.O.view.pxToRem(t);
                                a(Object.assign({ width: u, height: i }, d(u, i, l)));
                            }, []);
                        f(() => {
                            engine.on('clientResized', o);
                        }),
                            (0, r.useEffect)(() => () => engine.off('clientResized', o), [o]);
                        const c = (0, r.useMemo)(() => Object.assign({}, i), [i]);
                        return n().createElement(_.Provider, { value: c }, e);
                    });
                var D = u(483),
                    C = u.n(D),
                    w = u(926),
                    B = u.n(w);
                let v, b, S;
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
                    })(b || (b = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.height)] = 'Small'),
                            (e[(e.Medium = l.medium.height)] = 'Medium'),
                            (e[(e.Large = l.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge');
                    })(S || (S = {}));
                const x = () => {
                        const e = (0, r.useContext)(_),
                            t = e.width,
                            u = e.height,
                            i = ((e) => {
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
                                        return b.ExtraLarge;
                                    case e.largeWidth:
                                        return b.Large;
                                    case e.mediumWidth:
                                        return b.Medium;
                                    case e.smallWidth:
                                        return b.Small;
                                    case e.extraSmallWidth:
                                        return b.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), b.ExtraSmall;
                                }
                            })(e),
                            n = ((e) => {
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
                        return { mediaSize: i, mediaWidth: a, mediaHeight: n, remScreenWidth: t, remScreenHeight: u };
                    },
                    y = ['children', 'className'];
                function P() {
                    return (
                        (P =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var i in u) Object.prototype.hasOwnProperty.call(u, i) && (e[i] = u[i]);
                                }
                                return e;
                            }),
                        P.apply(this, arguments)
                    );
                }
                const L = {
                        [b.ExtraSmall]: '',
                        [b.Small]: B().SMALL_WIDTH,
                        [b.Medium]: `${B().SMALL_WIDTH} ${B().MEDIUM_WIDTH}`,
                        [b.Large]: `${B().SMALL_WIDTH} ${B().MEDIUM_WIDTH} ${B().LARGE_WIDTH}`,
                        [b.ExtraLarge]: `${B().SMALL_WIDTH} ${B().MEDIUM_WIDTH} ${B().LARGE_WIDTH} ${B().EXTRA_LARGE_WIDTH}`,
                    },
                    T = {
                        [S.ExtraSmall]: '',
                        [S.Small]: B().SMALL_HEIGHT,
                        [S.Medium]: `${B().SMALL_HEIGHT} ${B().MEDIUM_HEIGHT}`,
                        [S.Large]: `${B().SMALL_HEIGHT} ${B().MEDIUM_HEIGHT} ${B().LARGE_HEIGHT}`,
                        [S.ExtraLarge]: `${B().SMALL_HEIGHT} ${B().MEDIUM_HEIGHT} ${B().LARGE_HEIGHT} ${B().EXTRA_LARGE_HEIGHT}`,
                    },
                    N = {
                        [v.ExtraSmall]: '',
                        [v.Small]: B().SMALL,
                        [v.Medium]: `${B().SMALL} ${B().MEDIUM}`,
                        [v.Large]: `${B().SMALL} ${B().MEDIUM} ${B().LARGE}`,
                        [v.ExtraLarge]: `${B().SMALL} ${B().MEDIUM} ${B().LARGE} ${B().EXTRA_LARGE}`,
                    },
                    I = (e) => {
                        let t = e.children,
                            u = e.className,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    i,
                                    a = {},
                                    r = Object.keys(e);
                                for (i = 0; i < r.length; i++) (u = r[i]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, y);
                        const a = x(),
                            r = a.mediaWidth,
                            o = a.mediaHeight,
                            s = a.mediaSize;
                        return n().createElement('div', P({ className: C()(u, L[r], T[o], N[s]) }, i), t);
                    },
                    k = ['children'];
                const O = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                i,
                                a = {},
                                r = Object.keys(e);
                            for (i = 0; i < r.length; i++) (u = r[i]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, k);
                    return n().createElement(F, null, n().createElement(I, u, t));
                };
                var M = u(493),
                    U = u.n(M);
                const H = 'Collection_base_41';
                function W(e) {
                    engine.call('PlaySound', e);
                }
                const z = {
                        playHighlight() {
                            W('highlight');
                        },
                        playClick() {
                            W('play');
                        },
                        playYes() {
                            W('yes1');
                        },
                    },
                    $ = {
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
                    G = [
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
                function j() {
                    return (
                        (j =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var i in u) Object.prototype.hasOwnProperty.call(u, i) && (e[i] = u[i]);
                                }
                                return e;
                            }),
                        j.apply(this, arguments)
                    );
                }
                class q extends n().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && W(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && W(this.props.soundClick);
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
                            i = e.goto,
                            a = e.side,
                            r = e.type,
                            o = e.classNames,
                            s = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            d = e.onMouseUp,
                            h =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        i,
                                        a = {},
                                        r = Object.keys(e);
                                    for (i = 0; i < r.length; i++) (u = r[i]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                    return a;
                                })(e, G)),
                            m = C()($.base, $[`base__${r}`], $[`base__${a}`], null == o ? void 0 : o.base),
                            g = C()($.icon, $[`icon__${r}`], $[`icon__${a}`], null == o ? void 0 : o.icon),
                            E = C()($.glow, null == o ? void 0 : o.glow),
                            _ = C()($.caption, $[`caption__${r}`], null == o ? void 0 : o.caption),
                            A = C()($.goto, null == o ? void 0 : o.goto);
                        return n().createElement(
                            'div',
                            j(
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
                                h,
                            ),
                            'info' !== r && n().createElement('div', { className: $.shine }),
                            n().createElement('div', { className: g }, n().createElement('div', { className: E })),
                            n().createElement('div', { className: _ }, t),
                            i && n().createElement('div', { className: A }, i),
                        );
                    }
                }
                q.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var Y = u(521),
                    V = u(364);
                const X = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function K(e = Y.n.NONE, t = X, u = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== Y.n.NONE)
                            return (
                                window.addEventListener('keydown', i, u),
                                () => {
                                    window.removeEventListener('keydown', i, u);
                                }
                            );
                        function i(i) {
                            if (i.keyCode === e) {
                                if (s.O.view.isEventHandled()) return;
                                s.O.view.setEventHandled(), t(i), u && i.stopPropagation();
                            }
                        }
                    }, [t, e, u]);
                }
                var Q = u(515),
                    Z = u(30);
                let J, ee, te, ue, ie, ae, re;
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
                        (e.Currency = 'currency'),
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
                        (e.CollectionItem = 'collectionItem'),
                        (e.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                        (e.Comp7TokenCouponReward = 'comp7TokenCouponReward'),
                        (e.BattleBoosterGift = 'battleBooster_gift'),
                        (e.CosmicLootboxSilver = 'lootBoxToken'),
                        (e.CosmicLootboxCommon = 'cosmic_2024_2');
                })(J || (J = {})),
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
                    })(ee || (ee = {})),
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
                    })(te || (te = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(ue || (ue = {})),
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
                    })(ie || (ie = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(ae || (ae = {})),
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
                    })(re || (re = {}));
                class ne extends n().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = V.B3.GOLD;
                        else e = V.B3.INTEGRAL;
                        const t = V.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                ne.defaultProps = { format: 'integral' };
                const oe = [
                        J.Items,
                        J.Equipment,
                        J.Xp,
                        J.XpFactor,
                        J.Blueprints,
                        J.BlueprintsAny,
                        J.Goodies,
                        J.Berths,
                        J.Slots,
                        J.Tokens,
                        J.CrewSkins,
                        J.CrewBooks,
                        J.Customizations,
                        J.CreditsFactor,
                        J.TankmenXp,
                        J.TankmenXpFactor,
                        J.FreeXpFactor,
                        J.BattleToken,
                        J.PremiumUniversal,
                        J.NaturalCover,
                        J.BpCoin,
                        J.BattlePassSelectToken,
                        J.BattlaPassFinalAchievement,
                        J.BattleBadge,
                        J.BonusX5,
                        J.CrewBonusX3,
                        J.NewYearFillers,
                        J.NewYearInvoice,
                        J.EpicSelectToken,
                        J.Comp7TokenWeeklyReward,
                        J.Comp7TokenCouponReward,
                        J.BattleBoosterGift,
                        J.CosmicLootboxCommon,
                        J.CosmicLootboxSilver,
                    ],
                    se = [J.Gold, J.Credits, J.Crystal, J.FreeXp],
                    le = [J.BattlePassPoints],
                    ce = [J.PremiumPlus, J.Premium],
                    de = ['engravings', 'backgrounds'],
                    he = ['engraving', 'background'],
                    me = (e, t = te.Small) => {
                        const u = e.name,
                            i = e.type,
                            a = e.value,
                            r = e.icon,
                            n = e.item,
                            o = e.dogTagType,
                            s = ((e) => {
                                switch (e) {
                                    case te.S600x450:
                                        return 'c_600x450';
                                    case te.S400x300:
                                        return 'c_400x300';
                                    case te.S296x222:
                                        return 'c_296x222';
                                    case te.S232x174:
                                        return 'c_232x174';
                                    case te.Big:
                                        return 'c_80x80';
                                    case te.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(t);
                        switch (u) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${i}_${a}`;
                            case 'premium':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${u}_plus_${a}`;
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${u}_${a}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${n}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${t}.${r}`;
                            case 'tokens':
                            case 'battleToken':
                                return 'big' === t
                                    ? e.iconBig.replace('..', 'img://gui')
                                    : e.iconSmall.replace('..', 'img://gui');
                            case 'lootBoxToken':
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                            case 'groups':
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${r}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${t}.${r}`;
                            case 'dogTagComponents':
                                return ((e, t, u) => {
                                    const i = de[e];
                                    if (i) {
                                        const a = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(i),
                                            r = a.$dyn(u);
                                        return r ? `${r}` : `${a.$dyn(he[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(o, t, r);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${s}.${r}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${s}.${r}`;
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
                                return `R.images.gui.maps.icons.collectionItems.${s}.${r}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${u}`;
                        }
                    },
                    ge = (e, t, u) => {
                        const i = t && { contentId: t };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || t),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !t,
                            },
                            i,
                            u,
                        );
                    };
                let Ee, _e;
                !(function (e) {
                    (e.New = 'new'), (e.Received = 'received'), (e.Unreceived = 'unreceived');
                })(Ee || (Ee = {})),
                    (function (e) {
                        (e.JustReceived = 'justReceived'), (e.Received = 'received'), (e.Unreceived = 'unreceived');
                    })(_e || (_e = {}));
                function Ae() {
                    return !1;
                }
                console.log;
                var pe = u(174);
                function fe(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Fe(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
                                return Fe(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        u && (e = u);
                        var i = 0;
                        return function () {
                            return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Fe(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, i = new Array(t); u < t; u++) i[u] = e[u];
                    return i;
                }
                const De = (e) => (0 === e ? window : window.subViews.get(e));
                function Ce(e) {
                    return (
                        !1 ===
                        (function (e) {
                            return null == e;
                        })(e)
                    );
                }
                function we(e, t) {
                    var u;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (u = e[t]) ? void 0 : u.value;
                }
                const Be = we;
                function ve(e) {
                    var t;
                    return e && 'value' in e && null != (t = e.constructor) && t.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function be(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, u, i) => t(null == e ? void 0 : e.value, u, i));
                }
                function Se(e, t) {
                    for (let u = 0; u < e.length; u++) {
                        const i = ve(e[u]);
                        if (t(i, u, e)) return i;
                    }
                }
                function xe(e, t) {
                    return (function (e, t, u) {
                        const i = [];
                        for (let a = 0; a < e.length; a++) {
                            const r = Be(e, a);
                            t(r, a, e) && i.push(u(r, a, e));
                        }
                        return i;
                    })(e, Ce, t);
                }
                let ye;
                function Pe(e) {
                    return e.replace(/_\w/g, (e) => e[1].toUpperCase());
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(ye || (ye = {}));
                const Le = (e, t, u) => {
                        if (u % 2) {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                        return [...e, t];
                    },
                    Re = (e, t, u) => {
                        if (0 === u) return [t];
                        if (u % 2) return [...e, ' ' === t ? ' ' : t];
                        {
                            const u = e.pop();
                            return [...e, u + t];
                        }
                    },
                    Te = (e, t, u = ye.left) => e.split(t).reduce(u === ye.left ? Le : Re, []),
                    Ne = (() => {
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
                    Ie = ['zh_cn', 'zh_sg', 'zh_tw'],
                    ke = (e, t = ye.left) => {
                        const u = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return Ie.includes(u)
                            ? Ne(e)
                            : ((e, t = ye.left) => {
                                  let u = [];
                                  const i =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      a = e.replace(/&nbsp;/g, ' ');
                                  return Te(a, /( )/, t).forEach((e) => (u = u.concat(Te(e, i, ye.left)))), u;
                              })(e, t);
                    };
                var Oe = u(946);
                const Me = (e, t, u) => (u < e ? e : u > t ? t : u),
                    Ue = {
                        defaultConfig: {
                            generalBackgroundColor: '#0D1525',
                            progressionStep: 2,
                            pages: [
                                {
                                    items: {
                                        3: {
                                            assetConfig: {
                                                extraSmall: { top: -73, left: -96, width: 193, height: 112 },
                                                small: { top: -73, left: -96, width: 193, height: 112 },
                                                medium: { top: -87, left: -130, width: 266, height: 154 },
                                                large: { top: -103, left: -160, width: 326, height: 189 },
                                                extraLarge: { top: -140, left: -238, width: 482, height: 280 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        6: {
                                            assetConfig: {
                                                extraSmall: { top: 25, left: 215, width: 156, height: 240 },
                                                small: { top: 25, left: 215, width: 156, height: 240 },
                                                medium: { top: 45, left: 296, width: 215, height: 329 },
                                                large: { top: 60, left: 364, width: 264, height: 404 },
                                                extraLarge: { top: 102, left: 538, width: 390, height: 598 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        8: {
                                            assetConfig: {
                                                extraSmall: { top: 67, left: -210, width: 134, height: 164 },
                                                small: { top: 67, left: -210, width: 134, height: 164 },
                                                medium: { top: 103, left: -288, width: 184, height: 225 },
                                                large: { top: 131, left: -354, width: 226, height: 276 },
                                                extraLarge: { top: 209, left: -524, width: 334, height: 408 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        12: {
                                            assetConfig: {
                                                extraSmall: { top: -23, left: 69, width: 129, height: 158 },
                                                small: { top: -23, left: 69, width: 129, height: 158 },
                                                medium: { top: -21, left: 96, width: 178, height: 217 },
                                                large: { top: -21, left: 118, width: 218, height: 266 },
                                                extraLarge: { top: -17, left: 174, width: 322, height: 394 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        16: {
                                            assetConfig: {
                                                extraSmall: { top: -141, left: 156, width: 220, height: 72 },
                                                small: { top: -141, left: 156, width: 220, height: 72 },
                                                medium: { top: -183, left: 216, width: 303, height: 98 },
                                                large: { top: -218, left: 265, width: 372, height: 121 },
                                                extraLarge: { top: -309, left: 392, width: 550, height: 178 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        19: {
                                            assetConfig: {
                                                extraSmall: { top: -139, left: -240, width: 92, height: 92 },
                                                small: { top: -139, left: -240, width: 92, height: 92 },
                                                medium: { top: -181, left: -330, width: 126, height: 127 },
                                                large: { top: -217, left: -404, width: 154, height: 156 },
                                                extraLarge: { top: -307, left: -600, width: 228, height: 230 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        21: {
                                            assetConfig: {
                                                extraSmall: { top: 69, left: -68, width: 140, height: 166 },
                                                small: { top: 69, left: -68, width: 140, height: 166 },
                                                medium: { top: 105, left: -94, width: 193, height: 228 },
                                                large: { top: 135, left: -114, width: 237, height: 280 },
                                                extraLarge: { top: 213, left: -171, width: 350, height: 414 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                    },
                                },
                                {
                                    items: {
                                        1: {
                                            assetConfig: {
                                                extraSmall: { top: 48, left: -186, width: 200, height: 128 },
                                                small: { top: 48, left: -186, width: 200, height: 128 },
                                                medium: { top: 77, left: -256, width: 275, height: 176 },
                                                large: { top: 100, left: -314, width: 338, height: 216 },
                                                extraLarge: { top: 162, left: -464, width: 500, height: 320 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        4: {
                                            assetConfig: {
                                                extraSmall: { top: -69, left: 42, width: 136, height: 206 },
                                                small: { top: -69, left: 42, width: 136, height: 206 },
                                                medium: { top: -85, left: 58, width: 187, height: 283 },
                                                large: { top: -98, left: 70, width: 230, height: 347 },
                                                extraLarge: { top: -132, left: 106, width: 340, height: 514 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        9: {
                                            assetConfig: {
                                                extraSmall: { top: -15, left: 216, width: 135, height: 113 },
                                                small: { top: -15, left: 216, width: 135, height: 113 },
                                                medium: { top: -11, left: 297, width: 185, height: 156 },
                                                large: { top: -7, left: 364, width: 227, height: 191 },
                                                extraLarge: { top: 3, left: 542, width: 336, height: 282 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        11: {
                                            assetConfig: {
                                                extraSmall: { top: -102, left: -219, width: 116, height: 145 },
                                                small: { top: -102, left: -219, width: 116, height: 145 },
                                                medium: { top: -130, left: -302, width: 160, height: 200 },
                                                large: { top: -153, left: -371, width: 196, height: 245 },
                                                extraLarge: { top: -214, left: -548, width: 290, height: 362 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        13: {
                                            assetConfig: {
                                                extraSmall: { top: -127, left: 168, width: 108, height: 107 },
                                                small: { top: -127, left: 168, width: 108, height: 107 },
                                                medium: { top: -166, left: 231, width: 149, height: 147 },
                                                large: { top: -198, left: 283, width: 183, height: 180 },
                                                extraLarge: { top: -279, left: 422, width: 270, height: 266 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        14: {
                                            assetConfig: {
                                                extraSmall: { top: 89, left: 121, width: 209, height: 91 },
                                                small: { top: 89, left: 121, width: 209, height: 91 },
                                                medium: { top: 133, left: 167, width: 288, height: 125 },
                                                large: { top: 169, left: 204, width: 353, height: 153 },
                                                extraLarge: { top: 262, left: 304, width: 522, height: 226 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        17: {
                                            assetConfig: {
                                                extraSmall: { top: 88, left: -43, width: 78, height: 88 },
                                                small: { top: 88, left: -43, width: 78, height: 88 },
                                                medium: { top: 132, left: -59, width: 107, height: 121 },
                                                large: { top: 168, left: -73, width: 131, height: 149 },
                                                extraLarge: { top: 263, left: -105, width: 194, height: 220 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        20: {
                                            assetConfig: {
                                                extraSmall: { top: -106, left: -95, width: 125, height: 173 },
                                                small: { top: -106, left: -95, width: 125, height: 173 },
                                                medium: { top: -136, left: -130, width: 172, height: 238 },
                                                large: { top: -161, left: -160, width: 211, height: 292 },
                                                extraLarge: { top: -226, left: -235, width: 312, height: 432 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                    },
                                },
                                {
                                    items: {
                                        2: {
                                            assetConfig: {
                                                extraSmall: { top: 58, left: 105, width: 209, height: 150 },
                                                small: { top: 58, left: 105, width: 209, height: 150 },
                                                medium: { top: 90, left: 145, width: 288, height: 206 },
                                                large: { top: 116, left: 177, width: 353, height: 253 },
                                                extraLarge: { top: 186, left: 265, width: 522, height: 374 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        5: {
                                            assetConfig: {
                                                extraSmall: { top: -77, left: -77, width: 145, height: 200 },
                                                small: { top: -77, left: -77, width: 145, height: 200 },
                                                medium: { top: -95, left: -105, width: 200, height: 275 },
                                                large: { top: -112, left: -130, width: 245, height: 338 },
                                                extraLarge: { top: -151, left: -190, width: 362, height: 500 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        7: {
                                            assetConfig: {
                                                extraSmall: { top: 68, left: -220, width: 135, height: 149 },
                                                small: { top: 68, left: -220, width: 135, height: 149 },
                                                medium: { top: 103, left: -303, width: 185, height: 205 },
                                                large: { top: 133, left: -372, width: 227, height: 252 },
                                                extraLarge: { top: 209, left: -549, width: 336, height: 372 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        10: {
                                            assetConfig: {
                                                extraSmall: { top: -93, left: -217, width: 129, height: 164 },
                                                small: { top: -93, left: -217, width: 129, height: 164 },
                                                medium: { top: -117, left: -298, width: 178, height: 225 },
                                                large: { top: -138, left: -367, width: 218, height: 276 },
                                                extraLarge: { top: -190, left: -541, width: 322, height: 408 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        15: {
                                            assetConfig: {
                                                extraSmall: { top: -127, left: 47, width: 94, height: 100 },
                                                small: { top: -127, left: 47, width: 94, height: 100 },
                                                medium: { top: -165, left: 64, width: 129, height: 138 },
                                                large: { top: -195, left: 78, width: 158, height: 169 },
                                                extraLarge: { top: -276, left: 118, width: 234, height: 250 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        18: {
                                            assetConfig: {
                                                extraSmall: { top: 80, left: -56, width: 101, height: 105 },
                                                small: { top: 80, left: -56, width: 101, height: 105 },
                                                medium: { top: 119, left: -77, width: 139, height: 145 },
                                                large: { top: 152, left: -95, width: 171, height: 177 },
                                                extraLarge: { top: 239, left: -138, width: 252, height: 262 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        22: {
                                            assetConfig: {
                                                extraSmall: { top: -105, left: 210, width: 227, height: 168 },
                                                small: { top: -105, left: 210, width: 227, height: 168 },
                                                medium: { top: -134, left: 290, width: 312, height: 230 },
                                                large: { top: -157, left: 354, width: 383, height: 283 },
                                                extraLarge: { top: -220, left: 527, width: 566, height: 418 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                    },
                                },
                            ],
                        },
                        battlePass10: {
                            generalBackgroundColor: '#0D1525',
                            progressionStep: 2,
                            pages: [
                                {
                                    items: {
                                        3: {
                                            assetConfig: {
                                                extraSmall: { top: -73, left: -96, width: 193, height: 112 },
                                                small: { top: -73, left: -96, width: 193, height: 112 },
                                                medium: { top: -87, left: -130, width: 266, height: 154 },
                                                large: { top: -103, left: -160, width: 326, height: 189 },
                                                extraLarge: { top: -140, left: -238, width: 482, height: 280 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        6: {
                                            assetConfig: {
                                                extraSmall: { top: 25, left: 215, width: 156, height: 240 },
                                                small: { top: 25, left: 215, width: 156, height: 240 },
                                                medium: { top: 45, left: 296, width: 215, height: 329 },
                                                large: { top: 60, left: 364, width: 264, height: 404 },
                                                extraLarge: { top: 102, left: 538, width: 390, height: 598 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        8: {
                                            assetConfig: {
                                                extraSmall: { top: 67, left: -210, width: 134, height: 164 },
                                                small: { top: 67, left: -210, width: 134, height: 164 },
                                                medium: { top: 103, left: -288, width: 184, height: 225 },
                                                large: { top: 131, left: -354, width: 226, height: 276 },
                                                extraLarge: { top: 209, left: -524, width: 334, height: 408 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        12: {
                                            assetConfig: {
                                                extraSmall: { top: -23, left: 69, width: 129, height: 158 },
                                                small: { top: -23, left: 69, width: 129, height: 158 },
                                                medium: { top: -21, left: 96, width: 178, height: 217 },
                                                large: { top: -21, left: 118, width: 218, height: 266 },
                                                extraLarge: { top: -17, left: 174, width: 322, height: 394 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        16: {
                                            assetConfig: {
                                                extraSmall: { top: -141, left: 156, width: 220, height: 72 },
                                                small: { top: -141, left: 156, width: 220, height: 72 },
                                                medium: { top: -183, left: 216, width: 303, height: 98 },
                                                large: { top: -218, left: 265, width: 372, height: 121 },
                                                extraLarge: { top: -309, left: 392, width: 550, height: 178 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        19: {
                                            assetConfig: {
                                                extraSmall: { top: -139, left: -240, width: 92, height: 92 },
                                                small: { top: -139, left: -240, width: 92, height: 92 },
                                                medium: { top: -181, left: -330, width: 126, height: 127 },
                                                large: { top: -217, left: -404, width: 154, height: 156 },
                                                extraLarge: { top: -307, left: -600, width: 228, height: 230 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        21: {
                                            assetConfig: {
                                                extraSmall: { top: 69, left: -68, width: 140, height: 166 },
                                                small: { top: 69, left: -68, width: 140, height: 166 },
                                                medium: { top: 105, left: -94, width: 193, height: 228 },
                                                large: { top: 135, left: -114, width: 237, height: 280 },
                                                extraLarge: { top: 213, left: -171, width: 350, height: 414 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                    },
                                },
                                {
                                    items: {
                                        1: {
                                            assetConfig: {
                                                extraSmall: { top: 48, left: -186, width: 200, height: 128 },
                                                small: { top: 48, left: -186, width: 200, height: 128 },
                                                medium: { top: 77, left: -256, width: 275, height: 176 },
                                                large: { top: 100, left: -314, width: 338, height: 216 },
                                                extraLarge: { top: 162, left: -464, width: 500, height: 320 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        4: {
                                            assetConfig: {
                                                extraSmall: { top: -69, left: 42, width: 136, height: 206 },
                                                small: { top: -69, left: 42, width: 136, height: 206 },
                                                medium: { top: -85, left: 58, width: 187, height: 283 },
                                                large: { top: -98, left: 70, width: 230, height: 347 },
                                                extraLarge: { top: -132, left: 106, width: 340, height: 514 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        9: {
                                            assetConfig: {
                                                extraSmall: { top: -15, left: 216, width: 135, height: 113 },
                                                small: { top: -15, left: 216, width: 135, height: 113 },
                                                medium: { top: -11, left: 297, width: 185, height: 156 },
                                                large: { top: -7, left: 364, width: 227, height: 191 },
                                                extraLarge: { top: 3, left: 542, width: 336, height: 282 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        11: {
                                            assetConfig: {
                                                extraSmall: { top: -102, left: -219, width: 116, height: 145 },
                                                small: { top: -102, left: -219, width: 116, height: 145 },
                                                medium: { top: -130, left: -302, width: 160, height: 200 },
                                                large: { top: -153, left: -371, width: 196, height: 245 },
                                                extraLarge: { top: -214, left: -548, width: 290, height: 362 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        13: {
                                            assetConfig: {
                                                extraSmall: { top: -127, left: 168, width: 108, height: 107 },
                                                small: { top: -127, left: 168, width: 108, height: 107 },
                                                medium: { top: -166, left: 231, width: 149, height: 147 },
                                                large: { top: -198, left: 283, width: 183, height: 180 },
                                                extraLarge: { top: -279, left: 422, width: 270, height: 266 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        14: {
                                            assetConfig: {
                                                extraSmall: { top: 89, left: 121, width: 209, height: 91 },
                                                small: { top: 89, left: 121, width: 209, height: 91 },
                                                medium: { top: 133, left: 167, width: 288, height: 125 },
                                                large: { top: 169, left: 204, width: 353, height: 153 },
                                                extraLarge: { top: 262, left: 304, width: 522, height: 226 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        17: {
                                            assetConfig: {
                                                extraSmall: { top: 88, left: -43, width: 78, height: 88 },
                                                small: { top: 88, left: -43, width: 78, height: 88 },
                                                medium: { top: 132, left: -59, width: 107, height: 121 },
                                                large: { top: 168, left: -73, width: 131, height: 149 },
                                                extraLarge: { top: 263, left: -105, width: 194, height: 220 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        20: {
                                            assetConfig: {
                                                extraSmall: { top: -106, left: -95, width: 125, height: 173 },
                                                small: { top: -106, left: -95, width: 125, height: 173 },
                                                medium: { top: -136, left: -130, width: 172, height: 238 },
                                                large: { top: -161, left: -160, width: 211, height: 292 },
                                                extraLarge: { top: -226, left: -235, width: 312, height: 432 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                    },
                                },
                                {
                                    items: {
                                        2: {
                                            assetConfig: {
                                                extraSmall: { top: 58, left: 105, width: 209, height: 150 },
                                                small: { top: 58, left: 105, width: 209, height: 150 },
                                                medium: { top: 90, left: 145, width: 288, height: 206 },
                                                large: { top: 116, left: 177, width: 353, height: 253 },
                                                extraLarge: { top: 186, left: 265, width: 522, height: 374 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        5: {
                                            assetConfig: {
                                                extraSmall: { top: -77, left: -77, width: 145, height: 200 },
                                                small: { top: -77, left: -77, width: 145, height: 200 },
                                                medium: { top: -95, left: -105, width: 200, height: 275 },
                                                large: { top: -112, left: -130, width: 245, height: 338 },
                                                extraLarge: { top: -151, left: -190, width: 362, height: 500 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        7: {
                                            assetConfig: {
                                                extraSmall: { top: 68, left: -220, width: 135, height: 149 },
                                                small: { top: 68, left: -220, width: 135, height: 149 },
                                                medium: { top: 103, left: -303, width: 185, height: 205 },
                                                large: { top: 133, left: -372, width: 227, height: 252 },
                                                extraLarge: { top: 209, left: -549, width: 336, height: 372 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        10: {
                                            assetConfig: {
                                                extraSmall: { top: -93, left: -217, width: 129, height: 164 },
                                                small: { top: -93, left: -217, width: 129, height: 164 },
                                                medium: { top: -117, left: -298, width: 178, height: 225 },
                                                large: { top: -138, left: -367, width: 218, height: 276 },
                                                extraLarge: { top: -190, left: -541, width: 322, height: 408 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        15: {
                                            assetConfig: {
                                                extraSmall: { top: -127, left: 47, width: 94, height: 100 },
                                                small: { top: -127, left: 47, width: 94, height: 100 },
                                                medium: { top: -165, left: 64, width: 129, height: 138 },
                                                large: { top: -195, left: 78, width: 158, height: 169 },
                                                extraLarge: { top: -276, left: 118, width: 234, height: 250 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        18: {
                                            assetConfig: {
                                                extraSmall: { top: 80, left: -56, width: 101, height: 105 },
                                                small: { top: 80, left: -56, width: 101, height: 105 },
                                                medium: { top: 119, left: -77, width: 139, height: 145 },
                                                large: { top: 152, left: -95, width: 171, height: 177 },
                                                extraLarge: { top: 239, left: -138, width: 252, height: 262 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        22: {
                                            assetConfig: {
                                                extraSmall: { top: -105, left: 210, width: 227, height: 168 },
                                                small: { top: -105, left: 210, width: 227, height: 168 },
                                                medium: { top: -134, left: 290, width: 312, height: 230 },
                                                large: { top: -157, left: 354, width: 383, height: 283 },
                                                extraLarge: { top: -220, left: 527, width: 566, height: 418 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                    },
                                },
                            ],
                        },
                        battlePass11: {
                            generalBackgroundColor: '#0D1525',
                            progressionStep: 2,
                            pages: [
                                {
                                    items: {
                                        1: {
                                            assetConfig: {
                                                extraSmall: { top: 45, left: -186, width: 200, height: 128 },
                                                small: { top: 45, left: -186, width: 200, height: 128 },
                                                medium: { top: 72, left: -256, width: 275, height: 176 },
                                                large: { top: 94, left: -314, width: 338, height: 216 },
                                                extraLarge: { top: 153, left: -464, width: 500, height: 320 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        4: {
                                            assetConfig: {
                                                extraSmall: { top: -68, left: 41, width: 136, height: 206 },
                                                small: { top: -68, left: 41, width: 136, height: 206 },
                                                medium: { top: -83, left: 55, width: 187, height: 283 },
                                                large: { top: -96, left: 68, width: 230, height: 347 },
                                                extraLarge: { top: -128, left: 103, width: 340, height: 514 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        7: {
                                            assetConfig: {
                                                extraSmall: { top: -16, left: 205, width: 155, height: 114 },
                                                small: { top: -16, left: 205, width: 155, height: 114 },
                                                medium: { top: -11, left: 283, width: 213, height: 157 },
                                                large: { top: -8, left: 348, width: 261, height: 192 },
                                                extraLarge: { top: 0, left: 518, width: 386, height: 284 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        10: {
                                            assetConfig: {
                                                extraSmall: { top: -102, left: -221, width: 116, height: 145 },
                                                small: { top: -102, left: -221, width: 116, height: 145 },
                                                medium: { top: -130, left: -303, width: 160, height: 200 },
                                                large: { top: -154, left: -372, width: 196, height: 245 },
                                                extraLarge: { top: -213, left: -550, width: 290, height: 362 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        13: {
                                            assetConfig: {
                                                extraSmall: { top: -129, left: 169, width: 108, height: 107 },
                                                small: { top: -129, left: 169, width: 108, height: 107 },
                                                medium: { top: -167, left: 233, width: 149, height: 147 },
                                                large: { top: -200, left: 285, width: 183, height: 180 },
                                                extraLarge: { top: -281, left: 426, width: 270, height: 266 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        14: {
                                            assetConfig: {
                                                extraSmall: { top: 88, left: 150, width: 186, height: 92 },
                                                small: { top: 88, left: 150, width: 186, height: 92 },
                                                medium: { top: 132, left: 207, width: 256, height: 126 },
                                                large: { top: 167, left: 254, width: 314, height: 154 },
                                                extraLarge: { top: 261, left: 378, width: 464, height: 228 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        17: {
                                            assetConfig: {
                                                extraSmall: { top: 88, left: -14, width: 136, height: 104 },
                                                small: { top: 88, left: -14, width: 136, height: 104 },
                                                medium: { top: 131, left: -20, width: 187, height: 143 },
                                                large: { top: 167, left: -24, width: 230, height: 176 },
                                                extraLarge: { top: 261, left: -33, width: 340, height: 260 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        20: {
                                            assetConfig: {
                                                extraSmall: { top: -106, left: -94, width: 125, height: 173 },
                                                small: { top: -106, left: -94, width: 125, height: 173 },
                                                medium: { top: -137, left: -129, width: 172, height: 238 },
                                                large: { top: -162, left: -159, width: 211, height: 292 },
                                                extraLarge: { top: -226, left: -233, width: 312, height: 432 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                    },
                                },
                                {
                                    items: {
                                        2: {
                                            assetConfig: {
                                                extraSmall: { top: -79, left: -97, width: 193, height: 112 },
                                                small: { top: -79, left: -97, width: 193, height: 112 },
                                                medium: { top: -98, left: -131, width: 266, height: 154 },
                                                large: { top: -113, left: -163, width: 326, height: 189 },
                                                extraLarge: { top: -155, left: -239, width: 482, height: 280 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        5: {
                                            assetConfig: {
                                                extraSmall: { top: 23, left: 215, width: 156, height: 240 },
                                                small: { top: 23, left: 215, width: 156, height: 240 },
                                                medium: { top: 42, left: 296, width: 215, height: 329 },
                                                large: { top: 58, left: 362, width: 264, height: 404 },
                                                extraLarge: { top: 98, left: 538, width: 390, height: 598 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        8: {
                                            assetConfig: {
                                                extraSmall: { top: 64, left: -212, width: 134, height: 164 },
                                                small: { top: 64, left: -212, width: 134, height: 164 },
                                                medium: { top: 98, left: -289, width: 184, height: 225 },
                                                large: { top: 126, left: -356, width: 226, height: 276 },
                                                extraLarge: { top: 201, left: -526, width: 334, height: 408 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        11: {
                                            assetConfig: {
                                                extraSmall: { top: -23, left: 69, width: 129, height: 158 },
                                                small: { top: -23, left: 69, width: 129, height: 158 },
                                                medium: { top: -21, left: 96, width: 178, height: 217 },
                                                large: { top: -21, left: 117, width: 218, height: 266 },
                                                extraLarge: { top: -16, left: 175, width: 322, height: 394 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        15: {
                                            assetConfig: {
                                                extraSmall: { top: -143, left: 157, width: 220, height: 72 },
                                                small: { top: -143, left: 157, width: 220, height: 72 },
                                                medium: { top: -186, left: 216, width: 303, height: 98 },
                                                large: { top: -222, left: 264, width: 372, height: 121 },
                                                extraLarge: { top: -316, left: 394, width: 550, height: 178 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        18: {
                                            assetConfig: {
                                                extraSmall: { top: -139, left: -241, width: 92, height: 92 },
                                                small: { top: -139, left: -241, width: 92, height: 92 },
                                                medium: { top: -180, left: -330, width: 126, height: 127 },
                                                large: { top: -216, left: -407, width: 154, height: 156 },
                                                extraLarge: { top: -306, left: -601, width: 228, height: 230 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        21: {
                                            assetConfig: {
                                                extraSmall: { top: 68, left: -69, width: 140, height: 166 },
                                                small: { top: 68, left: -69, width: 140, height: 166 },
                                                medium: { top: 103, left: -95, width: 193, height: 228 },
                                                large: { top: 133, left: -118, width: 237, height: 280 },
                                                extraLarge: { top: 211, left: -172, width: 350, height: 414 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                    },
                                },
                                {
                                    items: {
                                        3: {
                                            assetConfig: {
                                                extraSmall: { top: 58, left: 138, width: 226, height: 150 },
                                                small: { top: 58, left: 138, width: 226, height: 150 },
                                                medium: { top: 90, left: 190, width: 311, height: 206 },
                                                large: { top: 116, left: 232, width: 381, height: 253 },
                                                extraLarge: { top: 186, left: 347, width: 564, height: 374 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        6: {
                                            assetConfig: {
                                                extraSmall: { top: -79, left: -77, width: 145, height: 200 },
                                                small: { top: -79, left: -77, width: 145, height: 200 },
                                                medium: { top: -96, left: -105, width: 200, height: 275 },
                                                large: { top: -114, left: -130, width: 245, height: 338 },
                                                extraLarge: { top: -155, left: -190, width: 362, height: 500 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        9: {
                                            assetConfig: {
                                                extraSmall: { top: 72, left: -222, width: 135, height: 149 },
                                                small: { top: 72, left: -222, width: 135, height: 149 },
                                                medium: { top: 110, left: -305, width: 185, height: 205 },
                                                large: { top: 140, left: -375, width: 227, height: 252 },
                                                extraLarge: { top: 220, left: -553, width: 336, height: 372 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        12: {
                                            assetConfig: {
                                                extraSmall: { top: -94, left: -220, width: 129, height: 164 },
                                                small: { top: -94, left: -220, width: 129, height: 164 },
                                                medium: { top: -118, left: -301, width: 178, height: 225 },
                                                large: { top: -140, left: -370, width: 218, height: 276 },
                                                extraLarge: { top: -195, left: -546, width: 322, height: 408 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        16: {
                                            assetConfig: {
                                                extraSmall: { top: -127, left: 47, width: 94, height: 100 },
                                                small: { top: -127, left: 47, width: 94, height: 100 },
                                                medium: { top: -165, left: 64, width: 129, height: 138 },
                                                large: { top: -195, left: 78, width: 158, height: 169 },
                                                extraLarge: { top: -276, left: 118, width: 234, height: 250 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        19: {
                                            assetConfig: {
                                                extraSmall: { top: 80, left: -36, width: 101, height: 105 },
                                                small: { top: 80, left: -36, width: 101, height: 105 },
                                                medium: { top: 119, left: -49, width: 139, height: 145 },
                                                large: { top: 152, left: -61, width: 171, height: 177 },
                                                extraLarge: { top: 239, left: -87, width: 252, height: 262 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        22: {
                                            assetConfig: {
                                                extraSmall: { top: -105, left: 209, width: 227, height: 168 },
                                                small: { top: -105, left: 209, width: 227, height: 168 },
                                                medium: { top: -134, left: 288, width: 312, height: 230 },
                                                large: { top: -158, left: 353, width: 383, height: 283 },
                                                extraLarge: { top: -220, left: 525, width: 566, height: 418 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                    },
                                },
                            ],
                        },
                        battlePass12: {
                            generalBackgroundColor: '#000',
                            pages: [
                                {
                                    items: {
                                        1: {
                                            assetConfig: {
                                                extraSmall: { top: -109, left: -66, width: 199, height: 150 },
                                                small: { top: -109, left: -66, width: 199, height: 150 },
                                                medium: { top: -140, left: -91, width: 273, height: 206 },
                                                large: { top: -165, left: -112, width: 335, height: 253 },
                                                extraLarge: { top: -232, left: -164, width: 496, height: 374 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        4: {
                                            assetConfig: {
                                                extraSmall: { top: 85, left: -207, width: 153, height: 116 },
                                                small: { top: 85, left: -207, width: 153, height: 116 },
                                                medium: { top: 128, left: -284, width: 211, height: 160 },
                                                large: { top: 163, left: -349, width: 258, height: 196 },
                                                extraLarge: { top: 255, left: -517, width: 382, height: 290 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        7: {
                                            assetConfig: {
                                                extraSmall: { top: -4, left: 100, width: 127, height: 241 },
                                                small: { top: -4, left: 100, width: 127, height: 241 },
                                                medium: { top: 4, left: 138, width: 174, height: 332 },
                                                large: { top: 11, left: 169, width: 214, height: 407 },
                                                extraLarge: { top: 29, left: 251, width: 316, height: 602 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        10: {
                                            assetConfig: {
                                                extraSmall: { top: 61, left: 226, width: 120, height: 159 },
                                                small: { top: 61, left: 226, width: 120, height: 159 },
                                                medium: { top: 93, left: 312, width: 164, height: 218 },
                                                large: { top: 121, left: 382, width: 202, height: 268 },
                                                extraLarge: { top: 192, left: 567, width: 298, height: 396 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        14: {
                                            assetConfig: {
                                                extraSmall: { top: -103, left: 224, width: 116, height: 163 },
                                                small: { top: -103, left: 224, width: 116, height: 163 },
                                                medium: { top: -131, left: 308, width: 160, height: 224 },
                                                large: { top: -156, left: 378, width: 196, height: 275 },
                                                extraLarge: { top: -217, left: 561, width: 290, height: 406 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        17: {
                                            assetConfig: {
                                                extraSmall: { top: -40, left: -227, width: 116, height: 127 },
                                                small: { top: -40, left: -227, width: 116, height: 127 },
                                                medium: { top: -44, left: -313, width: 159, height: 174 },
                                                large: { top: -49, left: -385, width: 195, height: 214 },
                                                extraLarge: { top: -59, left: -568, width: 288, height: 316 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        21: {
                                            assetConfig: {
                                                extraSmall: { top: 60, left: -54, width: 147, height: 183 },
                                                small: { top: 60, left: -54, width: 147, height: 183 },
                                                medium: { top: 93, left: -73, width: 202, height: 251 },
                                                large: { top: 119, left: -90, width: 248, height: 308 },
                                                extraLarge: { top: 189, left: -133, width: 366, height: 456 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                    },
                                },
                                {
                                    items: {
                                        2: {
                                            assetConfig: {
                                                extraSmall: { top: 67, left: 172, width: 228, height: 147 },
                                                small: { top: 67, left: 172, width: 228, height: 147 },
                                                medium: { top: 102, left: 236, width: 314, height: 202 },
                                                large: { top: 132, left: 289, width: 385, height: 248 },
                                                extraLarge: { top: 209, left: 429, width: 570, height: 366 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        5: {
                                            assetConfig: {
                                                extraSmall: { top: 67, left: -220, width: 136, height: 148 },
                                                small: { top: 67, left: -220, width: 136, height: 148 },
                                                medium: { top: 102, left: -302, width: 186, height: 203 },
                                                large: { top: 132, left: -372, width: 229, height: 249 },
                                                extraLarge: { top: 209, left: -551, width: 338, height: 368 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        8: {
                                            assetConfig: {
                                                extraSmall: { top: -75, left: -77, width: 142, height: 212 },
                                                small: { top: -75, left: -77, width: 142, height: 212 },
                                                medium: { top: -93, left: -107, width: 195, height: 291 },
                                                large: { top: -108, left: -131, width: 239, height: 357 },
                                                extraLarge: { top: -147, left: -193, width: 354, height: 528 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        11: {
                                            assetConfig: {
                                                extraSmall: { top: -96, left: -221, width: 135, height: 172 },
                                                small: { top: -96, left: -221, width: 135, height: 172 },
                                                medium: { top: -121, left: -303, width: 185, height: 237 },
                                                large: { top: -143, left: -373, width: 227, height: 291 },
                                                extraLarge: { top: -198, left: -551, width: 336, height: 430 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        15: {
                                            assetConfig: {
                                                extraSmall: { top: -96, left: 47, width: 103, height: 172 },
                                                small: { top: -96, left: 47, width: 103, height: 172 },
                                                medium: { top: -122, left: 66, width: 141, height: 237 },
                                                large: { top: -143, left: 80, width: 173, height: 291 },
                                                extraLarge: { top: -199, left: 120, width: 256, height: 430 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        18: {
                                            assetConfig: {
                                                extraSmall: { top: 88, left: -10, width: 128, height: 107 },
                                                small: { top: 88, left: -10, width: 128, height: 107 },
                                                medium: { top: 132, left: -14, width: 175, height: 147 },
                                                large: { top: 167, left: -17, width: 215, height: 180 },
                                                extraLarge: { top: 260, left: -24, width: 318, height: 266 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        20: {
                                            assetConfig: {
                                                extraSmall: { top: -109, left: 201, width: 200, height: 167 },
                                                small: { top: -109, left: 201, width: 200, height: 167 },
                                                medium: { top: -140, left: 277, width: 274, height: 229 },
                                                large: { top: -166, left: 339, width: 337, height: 281 },
                                                extraLarge: { top: -232, left: 504, width: 498, height: 416 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                    },
                                },
                                {
                                    items: {
                                        3: {
                                            assetConfig: {
                                                extraSmall: { top: 66, left: -184, width: 209, height: 154 },
                                                small: { top: 66, left: -184, width: 209, height: 154 },
                                                medium: { top: 100, left: -251, width: 288, height: 212 },
                                                large: { top: 129, left: -309, width: 353, height: 260 },
                                                extraLarge: { top: 205, left: -457, width: 522, height: 384 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        6: {
                                            assetConfig: {
                                                extraSmall: { top: 93, left: 193, width: 190, height: 101 },
                                                small: { top: 93, left: 193, width: 190, height: 101 },
                                                medium: { top: 137, left: 266, width: 261, height: 139 },
                                                large: { top: 174, left: 326, width: 320, height: 171 },
                                                extraLarge: { top: 271, left: 484, width: 474, height: 252 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        9: {
                                            assetConfig: {
                                                extraSmall: { top: -76, left: 44, width: 143, height: 218 },
                                                small: { top: -76, left: 44, width: 143, height: 218 },
                                                medium: { top: -96, left: 61, width: 196, height: 300 },
                                                large: { top: -111, left: 74, width: 241, height: 368 },
                                                extraLarge: { top: -151, left: 111, width: 356, height: 544 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        12: {
                                            assetConfig: {
                                                extraSmall: { top: -100, left: -222, width: 119, height: 172 },
                                                small: { top: -100, left: -222, width: 119, height: 172 },
                                                medium: { top: -128, left: -305, width: 163, height: 236 },
                                                large: { top: -150, left: -374, width: 200, height: 289 },
                                                extraLarge: { top: -210, left: -553, width: 296, height: 428 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        13: {
                                            assetConfig: {
                                                extraSmall: { top: -123, left: 209, width: 122, height: 120 },
                                                small: { top: -123, left: 209, width: 122, height: 120 },
                                                medium: { top: -160, left: 287, width: 168, height: 164 },
                                                large: { top: -190, left: 352, width: 206, height: 202 },
                                                extraLarge: { top: -268, left: 522, width: 304, height: 298 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        16: {
                                            assetConfig: {
                                                extraSmall: { top: -10, left: 202, width: 169, height: 95 },
                                                small: { top: -10, left: 202, width: 169, height: 95 },
                                                medium: { top: -6, left: 278, width: 233, height: 130 },
                                                large: { top: -2, left: 342, width: 285, height: 160 },
                                                extraLarge: { top: 12, left: 508, width: 422, height: 236 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        19: {
                                            assetConfig: {
                                                extraSmall: { top: 91, left: -6, width: 138, height: 109 },
                                                small: { top: 91, left: -6, width: 138, height: 109 },
                                                medium: { top: 134, left: -8, width: 190, height: 150 },
                                                large: { top: 170, left: -10, width: 233, height: 184 },
                                                extraLarge: { top: 266, left: -14, width: 344, height: 272 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        22: {
                                            assetConfig: {
                                                extraSmall: { top: -102, left: -94, width: 129, height: 179 },
                                                small: { top: -102, left: -94, width: 129, height: 179 },
                                                medium: { top: -132, left: -129, width: 178, height: 246 },
                                                large: { top: -156, left: -159, width: 218, height: 302 },
                                                extraLarge: { top: -219, left: -234, width: 322, height: 446 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                    },
                                },
                            ],
                        },
                        mtBirthday2023: {
                            generalBackgroundColor: '#101119',
                            progressionStep: 2,
                            pages: [
                                {
                                    items: {
                                        1: {
                                            assetConfig: {
                                                extraSmall: { top: -100, left: -90, width: 130, height: 180 },
                                                small: { top: -100, left: -90, width: 130, height: 180 },
                                                medium: { top: -130, left: -130, width: 180, height: 230 },
                                                large: { top: -150, left: -155, width: 220, height: 270 },
                                                extraLarge: { top: -210, left: -230, width: 330, height: 380 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        2: {
                                            assetConfig: {
                                                extraSmall: { top: -100, left: 73, width: 115, height: 165 },
                                                small: { top: -100, left: 73, width: 115, height: 165 },
                                                medium: { top: -130, left: 100, width: 162, height: 220 },
                                                large: { top: -155, left: 120, width: 195, height: 240 },
                                                extraLarge: { top: -220, left: 180, width: 300, height: 350 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        3: {
                                            assetConfig: {
                                                extraSmall: { top: -95, left: 205, width: 120, height: 170 },
                                                small: { top: -95, left: 205, width: 120, height: 170 },
                                                medium: { top: -125, left: 280, width: 175, height: 210 },
                                                large: { top: -150, left: 340, width: 210, height: 260 },
                                                extraLarge: { top: -210, left: 500, width: 330, height: 380 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        4: {
                                            assetConfig: {
                                                extraSmall: { top: 65, left: -215, width: 120, height: 170 },
                                                small: { top: 65, left: -215, width: 120, height: 170 },
                                                medium: { top: 100, left: -295, width: 175, height: 210 },
                                                large: { top: 130, left: -360, width: 210, height: 260 },
                                                extraLarge: { top: 200, left: -530, width: 330, height: 380 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        5: {
                                            assetConfig: {
                                                extraSmall: { top: 60, left: -85, width: 110, height: 160 },
                                                small: { top: 60, left: -85, width: 110, height: 160 },
                                                medium: { top: 100, left: -116, width: 162, height: 220 },
                                                large: { top: 125, left: -140, width: 190, height: 240 },
                                                extraLarge: { top: 200, left: -200, width: 300, height: 350 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        6: {
                                            assetConfig: {
                                                extraSmall: { top: 60, left: 75, width: 115, height: 165 },
                                                small: { top: 60, left: 75, width: 115, height: 165 },
                                                medium: { top: 100, left: 100, width: 155, height: 210 },
                                                large: { top: 125, left: 125, width: 190, height: 240 },
                                                extraLarge: { top: 200, left: 180, width: 300, height: 350 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                        7: {
                                            assetConfig: {
                                                extraSmall: { top: 62, left: 205, width: 125, height: 175 },
                                                small: { top: 62, left: 205, width: 125, height: 175 },
                                                medium: { top: 100, left: 285, width: 175, height: 205 },
                                                large: { top: 130, left: 350, width: 200, height: 250 },
                                                extraLarge: { top: 210, left: 520, width: 310, height: 360 },
                                            },
                                            hasAssetForUnreceivedState: !0,
                                        },
                                    },
                                },
                            ],
                        },
                    };
                let He;
                !(function (e) {
                    (e.Small = 'small'), (e.Big = 'big');
                })(He || (He = {}));
                const We = (e, t) => (e >= 2560 && t >= 1377 ? 'ultraSize' : ''),
                    ze = (e, t, u) => {
                        const i = We(t, u);
                        switch (e) {
                            case v.ExtraSmall:
                                return 'extraSmall';
                            case v.Small:
                                return 'small';
                            case v.ExtraLarge:
                                return i ? 'extraLarge' : 'large';
                            case v.Large:
                                return 'large';
                            case v.Medium:
                            default:
                                return 'medium';
                        }
                    },
                    $e = (e, t) => {
                        let u = e;
                        const i = t.split('.');
                        for (let e = 0; e < i.length; e++) {
                            if (!u) return '';
                            if (('string' != typeof u && (u = u.$dyn(i[e])), 'string' == typeof u)) return u;
                        }
                        return '';
                    },
                    Ge = (e) => {
                        const t = `R.images.gui.maps.icons.quests.bonuses.${te.Small}.default`,
                            u = e[0].getImage(te.Small);
                        return e.every((e) => e.getImage(te.Small) === u) ? u : t;
                    },
                    je = 'defaultConfig',
                    qe = 'none',
                    Ye = [ue.CURRENCY, J.Credits, J.Crystal, J.Gold, J.PremiumPlus],
                    Ve = ((e, t) => {
                        const u = (0, r.createContext)({});
                        return [
                            function ({ mode: i = 'real', options: a, children: o, mocks: l }) {
                                const c = (0, r.useRef)([]),
                                    d = (u, i, a) => {
                                        var r;
                                        const n = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: u = De,
                                                context: i = 'model',
                                            } = {}) {
                                                const a = new Map();
                                                function r(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? a.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, u) => {
                                                        u.forEach((t) => {
                                                            const u = a.get(t);
                                                            void 0 !== u && u(e);
                                                        });
                                                    });
                                                });
                                                const n = (e) => {
                                                    const a = u(t),
                                                        r = i.split('.').reduce((e, t) => e[t], a);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? r
                                                        : e.split('.').reduce((e, t) => {
                                                              const u = e[t];
                                                              return 'function' == typeof u ? u.bind(e) : u;
                                                          }, r);
                                                };
                                                return {
                                                    subscribe: (u, r) => {
                                                        const o = 'string' == typeof r ? `${i}.${r}` : i,
                                                            l = s.O.view.addModelObserver(o, t, !0);
                                                        return a.set(l, u), e && u(n(r)), l;
                                                    },
                                                    readByPath: n,
                                                    createCallback: (e, t) => {
                                                        const u = n(t);
                                                        return (...t) => {
                                                            u(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = n(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, u = fe(a.keys()); !(e = u()).done; ) r(e.value, t);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(i),
                                            o =
                                                'real' === u
                                                    ? n
                                                    : Object.assign({}, n, {
                                                          readByPath:
                                                              null != (r = null == a ? void 0 : a.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === u ? (null == a ? void 0 : a.getter(e)) : o.readByPath(e),
                                            d = (e) => c.current.push(e),
                                            h = e({
                                                mode: u,
                                                readByPath: l,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const i = null != t ? t : l(e),
                                                            a = pe.LO.box(i, { equals: Ae });
                                                        return (
                                                            'real' === u &&
                                                                o.subscribe(
                                                                    (0, pe.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const i = null != t ? t : l(e),
                                                            a = pe.LO.box(i, { equals: Ae });
                                                        return (
                                                            'real' === u &&
                                                                o.subscribe(
                                                                    (0, pe.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const i = l(t);
                                                        if (Array.isArray(e)) {
                                                            const a = e.reduce(
                                                                (e, t) => ((e[t] = pe.LO.box(i[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === u &&
                                                                    o.subscribe(
                                                                        (0, pe.aD)((t) => {
                                                                            e.forEach((e) => {
                                                                                a[e].set(t[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                        {
                                                            const a = e,
                                                                r = Object.entries(a),
                                                                n = r.reduce(
                                                                    (e, [t, u]) => ((e[u] = pe.LO.box(i[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === u &&
                                                                    o.subscribe(
                                                                        (0, pe.aD)((e) => {
                                                                            r.forEach(([t, u]) => {
                                                                                n[u].set(e[t]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                n
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: d,
                                            }),
                                            m = { mode: u, model: h, externalModel: o, cleanup: d };
                                        return {
                                            model: h,
                                            controls: 'mocks' === u && a ? a.controls(m) : t(m),
                                            externalModel: o,
                                            mode: u,
                                        };
                                    },
                                    h = (0, r.useRef)(!1),
                                    m = (0, r.useState)(i),
                                    g = m[0],
                                    E = m[1],
                                    _ = (0, r.useState)(() => d(i, a, l)),
                                    A = _[0],
                                    p = _[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        h.current ? p(d(g, a, l)) : (h.current = !0);
                                    }, [l, g, a]),
                                    (0, r.useEffect)(() => {
                                        E(i);
                                    }, [i]),
                                    (0, r.useEffect)(
                                        () => () => {
                                            A.externalModel.dispose(), c.current.forEach((e) => e());
                                        },
                                        [A],
                                    ),
                                    n().createElement(u.Provider, { value: A }, o)
                                );
                            },
                            () => (0, r.useContext)(u),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const t = Object.assign({}, e.primitives(['currentCollection']), e.primitives(['page']), {
                                    root: e.object(),
                                    tabs: e.array('tabs'),
                                    items: e.array('items'),
                                    pagesBackgrounds: e.array('pagesBackgrounds'),
                                    rewardsInfo: e.array('rewardsInfo'),
                                    pageNumber: pe.LO.box(-1),
                                    isReadyForProgressAnimation: pe.LO.box(!1),
                                    displayCollection: pe.LO.box(qe),
                                }),
                                u = (0, Oe.Om)(
                                    () => {
                                        const e = t.root.get().currentCollection;
                                        return Ue[Pe(e)] || Ue.defaultConfig;
                                    },
                                    { equals: Ae },
                                ),
                                i = (0, Oe.Om)(
                                    () => {
                                        const e = we(t.pagesBackgrounds.get(), t.pageNumber.get());
                                        return {
                                            main: null == e ? void 0 : e.main,
                                            logicalCircuit: null == e ? void 0 : e.logicalCircuit,
                                        };
                                    },
                                    { equals: Ae },
                                ),
                                a = (0, Oe.Om)(() => {
                                    const e = { pages: [], items: {}, bubbles: [] },
                                        i = u(),
                                        a = t.items.get();
                                    return (
                                        i.pages.forEach(({ items: t }) => {
                                            const u = [],
                                                i = {};
                                            let r = 0;
                                            for (const e in t)
                                                if (Object.prototype.hasOwnProperty.call(t, e)) {
                                                    const n = Number(e),
                                                        o = Se(a, (e) => e.itemId === n);
                                                    if (!o) continue;
                                                    (i[n] = Object.assign(t[e], o)),
                                                        u.push(i[n]),
                                                        i[n].state === Ee.New && r++;
                                                }
                                            e.pages.push({ pageItems: u }),
                                                Object.assign(e.items, i),
                                                e.bubbles.push(r);
                                        }),
                                        e
                                    );
                                }),
                                r = (0, Oe.Om)(() =>
                                    be(t.tabs.get(), (e) =>
                                        e.hasNewItems
                                            ? {
                                                  id: e.collectionName,
                                                  title: $e(
                                                      R.strings,
                                                      `collection_${e.collectionName}.collection.season`,
                                                  ),
                                                  notification: { type: 'dot', size: 'large' },
                                              }
                                            : {
                                                  id: e.collectionName,
                                                  title: $e(
                                                      R.strings,
                                                      `collection_${e.collectionName}.collection.season`,
                                                  ),
                                              },
                                    ),
                                ),
                                n = (0, Oe.Om)(() => a().items),
                                o = (0, Oe.Om)(() => t.pageNumber.get()),
                                s = (0, Oe.Om)(() => a().pages[o()].pageItems, { equals: Ae }),
                                l = (0, Oe.Om)(() => {
                                    const e = t.root.get().currentCollection;
                                    return !Ue[Pe(e)] || e === je;
                                }),
                                c = (0, Oe.Om)(() => {
                                    const e = t.root.get();
                                    return e.prevReceivedItemsCount === e.maxItemsCount;
                                }),
                                d = (0, Oe.Om)(
                                    () => {
                                        let e = !1;
                                        const u = (u) =>
                                            u === _e.JustReceived
                                                ? e || !t.isReadyForProgressAnimation.get()
                                                    ? _e.Unreceived
                                                    : ((e = !0), _e.JustReceived)
                                                : u;
                                        return be(t.rewardsInfo.get(), ({ state: e, requiredItemsCount: t }) => ({
                                            state: u(e),
                                            requiredItemsCount: t,
                                        }));
                                    },
                                    { equals: Ae },
                                ),
                                h = (0, Oe.Om)((e) => Se(t.rewardsInfo.get(), (t) => t.requiredItemsCount === e), {
                                    equals: Ae,
                                }),
                                m = (0, Oe.Om)(
                                    (e) => {
                                        const t = h(e);
                                        if (!t) return [];
                                        const u = xe(t.rewards, (e) => {
                                            return {
                                                index: e.index,
                                                name: e.name,
                                                getImage: (t) => me(e, t),
                                                value: e.value,
                                                valueType:
                                                    ((t = e.name),
                                                    oe.includes(t)
                                                        ? ue.MULTI
                                                        : se.includes(t)
                                                          ? ue.CURRENCY
                                                          : le.includes(t)
                                                            ? ue.NUMBER
                                                            : ce.includes(t)
                                                              ? ue.PREMIUM_PLUS
                                                              : ue.STRING),
                                                special: e.overlayType,
                                                tooltipArgs: ge(
                                                    { tooltipId: e.tooltipId },
                                                    Number(e.tooltipContentId),
                                                    { ignoreShowDelay: !0 },
                                                ),
                                            };
                                            var t;
                                        });
                                        return (
                                            u.sort((e, t) =>
                                                Ye.includes(e.valueType) < Ye.includes(t.valueType) ? 1 : -1,
                                            ),
                                            u
                                        );
                                    },
                                    { equals: Ae },
                                ),
                                g = (0, Oe.Om)(() => {
                                    const e = a().bubbles;
                                    let t = 0,
                                        u = 0,
                                        i = -1;
                                    return (
                                        e.forEach((e, a) => {
                                            a < o() ? (t += e) : a > o() && (u += e), e > 0 && i < 0 && (i = a);
                                        }),
                                        { prevBubbleCount: t, nextBubbleCount: u, firstPageWithBubble: i }
                                    );
                                }),
                                E = (0, Oe.Om)(() => {
                                    const e = t.root.get(),
                                        u = e.receivedItemsCount,
                                        i = e.prevReceivedItemsCount,
                                        a = e.maxItemsCount;
                                    return {
                                        value: t.isReadyForProgressAnimation.get() ? u : i,
                                        deltaFrom: i,
                                        maxItemsCount: a,
                                    };
                                });
                            return Object.assign({}, t, {
                                computes: {
                                    getTabs: r,
                                    getPageCount: (0, Oe.Om)(() => a().pages.length),
                                    getPageNumber: o,
                                    getCurrentPageCollectionElements: s,
                                    getItems: n,
                                    getItem: (0, Oe.Om)((e) => {
                                        var t;
                                        return null == (t = n()) ? void 0 : t[e];
                                    }),
                                    levelInfo: d,
                                    getRewardsByLevel: m,
                                    getProgressParams: E,
                                    getConfig: u,
                                    isDefaultTemplate: l,
                                    isProgressAnimationEnded: c,
                                    getCountOfNewElementsPerPage: g,
                                    getData: a,
                                    getPageBackgrounds: i,
                                },
                            });
                        },
                        ({ model: e, externalModel: t, cleanup: u }) => {
                            const i = (0, pe.aD)(() => {
                                    e.isReadyForProgressAnimation.get() || e.isReadyForProgressAnimation.set(!0);
                                }),
                                a = t.createCallbackNoArgs('onFinishTutorial'),
                                r = (t) => {
                                    const u = Me(0, e.computes.getPageCount() - 1, t);
                                    u === t && (e.pageNumber.set(u), i(), e.root.get().isTutorial && a());
                                },
                                n = (0, pe.aD)((t) => {
                                    const u = e.currentCollection.get();
                                    if (e.displayCollection.get() === u) return;
                                    e.displayCollection.set(u);
                                    const i = e.page.get();
                                    i < 0
                                        ? t < 0
                                            ? (e.pageNumber.set(0), e.isReadyForProgressAnimation.set(!0))
                                            : e.pageNumber.set(t)
                                        : e.pageNumber.set(i);
                                });
                            u(
                                (0, pe.EH)(() => {
                                    const t = e.computes.getCountOfNewElementsPerPage().firstPageWithBubble;
                                    n(t);
                                }),
                            );
                            const o = (0, pe.aD)(() => r(e.computes.getPageNumber() + 1)),
                                s = (0, pe.aD)(() => r(e.computes.getPageNumber() - 1)),
                                l = t.createCallback((e) => ({ collectionName: e }), 'onTabSelected'),
                                c = (0, pe.aD)((t) => {
                                    t !== e.root.get().currentCollection && l(t);
                                });
                            return {
                                enableProgressAnimation: i,
                                finishTutorial: a,
                                nextPage: o,
                                previousPage: s,
                                selectTab: c,
                                setItemReceived: t.createCallback((e) => ({ itemId: e }), 'onSetItemReceived'),
                                openItemPreview: t.createCallback(
                                    (e, t) => ({ itemId: e, currentPage: t }),
                                    'onOpenItemPreview',
                                ),
                                setProgressItemsReceived: t.createCallbackNoArgs('onSetProgressItemsReceived'),
                                setRewardReceived: t.createCallback(
                                    (e) => ({ requiredItemsCount: e }),
                                    'onSetRewardReceived',
                                ),
                                close: t.createCallbackNoArgs('onClose'),
                                viewLoaded: t.createCallback(
                                    () => ({ pagesCount: e.computes.getPageCount() }),
                                    'onViewLoaded',
                                ),
                            };
                        },
                    ),
                    Xe = Ve[0],
                    Ke = Ve[1],
                    Qe = 'App_base_e6',
                    Ze = 'App_content_de',
                    Je = 'App_close_a9',
                    et = 'App_animationBg_17',
                    tt = (e) => {
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
                    ut = {
                        base: 'CollectionLayout_base_e4',
                        fadeIn: 'CollectionLayout_fadeIn_bd',
                        base__firstAnimation: 'CollectionLayout_base__firstAnimation_8d',
                        bg: 'CollectionLayout_bg_53',
                        base__ultraSize: 'CollectionLayout_base__ultraSize_60',
                        vignetteBg: 'CollectionLayout_vignetteBg_53',
                        slideUp: 'CollectionLayout_slideUp_d7',
                        fadeOut: 'CollectionLayout_fadeOut_9c',
                        raysAppearance: 'CollectionLayout_raysAppearance_2f',
                        rotate: 'CollectionLayout_rotate_67',
                        slideUpWithScale: 'CollectionLayout_slideUpWithScale_60',
                    },
                    it = (0, Q.Pi)(({ children: e, hasAnimation: t = !0 }) => {
                        const u = (0, r.useState)(!1),
                            i = u[0],
                            a = u[1],
                            o = Ke().model,
                            s = x(),
                            l = s.remScreenWidth,
                            c = s.remScreenHeight,
                            d = o.computes.getConfig().generalBackgroundColor,
                            h = o.root.get().generalBackground;
                        (0, r.useEffect)(
                            () =>
                                tt(() => {
                                    a(!0);
                                }),
                            [],
                        );
                        return h && i
                            ? n().createElement(
                                  'div',
                                  { className: C()(ut.base, t && ut.base__firstAnimation, ut[`base__${We(l, c)}`]) },
                                  n().createElement('div', {
                                      className: ut.bg,
                                      style: { backgroundColor: d, backgroundImage: `url(${h})` },
                                  }),
                                  n().createElement(
                                      'div',
                                      null,
                                      n().createElement('div', { className: ut.vignetteBg }),
                                      e,
                                  ),
                              )
                            : null;
                    });
                var at = u(738),
                    rt = u(6);
                const nt = [
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
                function ot(e) {
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
                const st = (e, t, u = {}, i = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: V.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: i,
                                },
                                u,
                            ),
                        );
                    },
                    lt = (e) => {
                        let t = e.children,
                            u = e.contentId,
                            i = e.args,
                            a = e.onMouseEnter,
                            n = e.onMouseLeave,
                            o = e.onMouseDown,
                            s = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            d = e.ignoreMouseClick,
                            h = void 0 !== d && d,
                            m = e.decoratorId,
                            g = void 0 === m ? 0 : m,
                            E = e.isEnabled,
                            _ = void 0 === E || E,
                            A = e.targetId,
                            p = void 0 === A ? 0 : A,
                            f = e.onShow,
                            F = e.onHide,
                            D = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    i,
                                    a = {},
                                    r = Object.keys(e);
                                for (i = 0; i < r.length; i++) (u = r[i]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, nt);
                        const C = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            w = (0, r.useMemo)(
                                () =>
                                    p ||
                                    ((e = 1) => {
                                        const t = new Error().stack;
                                        let u,
                                            i = R.invalid('resId');
                                        return (
                                            t &&
                                                ((u = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== u &&
                                                    window.subViews[u] &&
                                                    (i = window.subViews[u].id)),
                                            { caller: u, stack: t, resId: i }
                                        );
                                    })().resId,
                                [p],
                            ),
                            B = (0, r.useCallback)(() => {
                                (C.current.isVisible && C.current.timeoutId) ||
                                    (st(u, g, { isMouseEvent: !0, on: !0, arguments: ot(i) }, w),
                                    f && f(),
                                    (C.current.isVisible = !0));
                            }, [u, g, i, w, f]),
                            v = (0, r.useCallback)(() => {
                                if (C.current.isVisible || C.current.timeoutId) {
                                    const e = C.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (C.current.timeoutId = 0)),
                                        st(u, g, { on: !1 }, w),
                                        C.current.isVisible && F && F(),
                                        (C.current.isVisible = !1);
                                }
                            }, [u, g, w, F]),
                            b = (0, r.useCallback)((e) => {
                                C.current.isVisible &&
                                    ((C.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (C.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(C.current.prevTarget) && v();
                                    }, 200)));
                            }, []);
                        (0, r.useEffect)(() => {
                            const e = C.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', b, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', b, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === _ && v();
                            }, [_, v]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', v),
                                    () => {
                                        window.removeEventListener('mouseleave', v), v();
                                    }
                                ),
                                [v],
                            );
                        return _
                            ? (0, r.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((S = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((C.current.timeoutId = window.setTimeout(B, c ? 100 : 400)),
                                                      a && a(e),
                                                      S && S(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              v(), null == n || n(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === h && v(), null == s || s(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === h && v(), null == o || o(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      D,
                                  ),
                              )
                            : t;
                        var S;
                    },
                    ct = (e, t) => {
                        let u;
                        const i = setTimeout(() => {
                            u = e();
                        }, t);
                        return () => {
                            'function' == typeof u && u(), clearTimeout(i);
                        };
                    },
                    dt = {
                        battlePass10: {
                            mask: { img: 'R.images.gui.maps.icons.collections.common.newElementMaskOverSize' },
                            style: { unreceivedItem: { opacity: 0.5 }, receivedItem: { opacity: 1 } },
                        },
                        battlePass11: {
                            mask: { img: 'R.images.gui.maps.icons.collections.common.newElementMaskOverSize' },
                            style: { unreceivedItem: { opacity: 0.5 }, receivedItem: { opacity: 1 } },
                        },
                        mtBirthday2023: {
                            mask: { img: 'R.images.gui.maps.icons.collections.common.newElementMaskOverSize' },
                            style: { unreceivedItem: { opacity: 1 }, receivedItem: { opacity: 1 } },
                        },
                    },
                    ht = () => {
                        const e = Ke().model.root.get().currentCollection;
                        return Object.assign({}, dt[Pe(e)]);
                    },
                    mt = {
                        base: 'CollectionElement_base_36',
                        background: 'CollectionElement_background_81',
                        background__received: 'CollectionElement_background__received_be',
                        background__justReceived: 'CollectionElement_background__justReceived_58',
                        brightnessRevert: 'CollectionElement_brightnessRevert_14',
                        background__unreceived: 'CollectionElement_background__unreceived_58',
                        shine: 'CollectionElement_shine_db',
                        shineFadeIn: 'CollectionElement_shineFadeIn_a9',
                        shine__hidden: 'CollectionElement_shine__hidden_b9',
                        shineFadeOut: 'CollectionElement_shineFadeOut_de',
                        blinkWrapper: 'CollectionElement_blinkWrapper_fc',
                        blinkInner: 'CollectionElement_blinkInner_4f',
                        flareAnimation: 'CollectionElement_flareAnimation_45',
                        blink: 'CollectionElement_blink_15',
                    },
                    gt = {
                        from: { opacity: 0 },
                        enter: { opacity: 1 },
                        leave: { opacity: 0 },
                        config: { duration: 200 },
                    },
                    Et = 'CollectionElementMask_base_57',
                    _t = 'CollectionElementMask_base__hidden_5e',
                    At = 'CollectionElementMask_mask_49',
                    pt = 'CollectionElementMask_base__animate_33';
                var ft;
                !(function (e) {
                    (e[(e.Init = 0)] = 'Init'), (e[(e.Active = 1)] = 'Active'), (e[(e.Done = 2)] = 'Done');
                })(ft || (ft = {}));
                const Ft = (0, r.memo)(({ delay: e = 0, onAnimationEnd: t, children: u, className: i }) => {
                    const a = (0, r.useState)(ft.Init),
                        o = a[0],
                        s = a[1],
                        l = ht().mask.img;
                    (0, r.useEffect)(
                        () =>
                            ct(
                                () => {
                                    s(ft.Active);
                                },
                                Math.max(e, 150),
                            ),
                        [e],
                    ),
                        (0, r.useEffect)(
                            () =>
                                o === ft.Active
                                    ? ct(() => s(ft.Done), 1250)
                                    : o === ft.Done
                                      ? ct(() => (null == t ? void 0 : t()), 1e3)
                                      : void 0,
                            [o, t],
                        );
                    const c = C()(Et, o === ft.Init ? _t : pt, i);
                    return n().createElement(
                        'div',
                        { className: c },
                        n().createElement('div', { className: At, style: { maskImage: `url(${l})` } }, u),
                    );
                });
                var Dt;
                !(function (e) {
                    (e.None = 'none'),
                        (e.Init = 'init'),
                        (e.Receiving = 'receiving'),
                        (e.Blink = 'blink'),
                        (e.Finish = 'finish'),
                        (e.End = 'end');
                })(Dt || (Dt = {}));
                const Ct = {
                        [Dt.None]: { nextStep: Dt.Init, delay: 0 },
                        [Dt.Init]: { nextStep: Dt.Receiving, delay: 500 },
                        [Dt.Receiving]: { nextStep: Dt.Blink, delay: 500 },
                        [Dt.Blink]: { nextStep: Dt.Finish, delay: 1600 },
                        [Dt.Finish]: { nextStep: Dt.End, delay: 3e3 },
                        [Dt.End]: { nextStep: Dt.End, delay: 1e3 },
                    },
                    wt = (0, Q.Pi)(({ assetConfig: e, hasAssetForUnreceivedState: t, itemId: u }) => {
                        const i = Ke(),
                            a = i.model,
                            o = i.controls,
                            s = ht().style,
                            l = s.unreceivedItem.opacity,
                            c = s.receivedItem.opacity,
                            d = a.computes.getItem(u),
                            h = a.computes.getPageNumber(),
                            m = (0, r.useState)(Dt.None),
                            g = m[0],
                            E = m[1],
                            _ = x(),
                            A = _.mediaSize,
                            p = _.remScreenWidth,
                            f = _.remScreenHeight,
                            F = ze(A, p, f),
                            D = (null == d ? void 0 : d.state) || Ee.Unreceived,
                            w = (null == d ? void 0 : d.unreceivedImagePath) || '',
                            B = (null == d ? void 0 : d.receivedImagePath) || '';
                        (0, r.useEffect)(() => {
                            if ((g !== Dt.End && g !== Dt.None) || (g === Dt.None && D === Ee.New))
                                return ((e) => {
                                    const t = Ct[e].nextStep;
                                    return ct(() => {
                                        E(t);
                                    }, Ct[t].delay);
                                })(g);
                        }, [g, D]),
                            (0, r.useEffect)(() => {
                                g === Dt.Init && (W(R.sounds.collection_get_elements()), o.setItemReceived(u)),
                                    g === Dt.Blink &&
                                        (W(R.sounds.collection_element_flash()),
                                        a.isReadyForProgressAnimation.get() || o.enableProgressAnimation());
                            }, [g, o, u, a.isReadyForProgressAnimation]);
                        const v = e[F],
                            b = { width: `${v.width}rem`, height: `${v.height}rem` },
                            S = D === Ee.Received && g === Dt.None,
                            y = ![Dt.None, Dt.End].includes(g),
                            P = g === Dt.Blink,
                            L = [Dt.Receiving, Dt.Blink, Dt.Finish, Dt.End].includes(g),
                            T = S ? B : t ? w : B;
                        return n().createElement(
                            lt,
                            {
                                contentId: R.views.lobby.collection.tooltips.CollectionItemTooltipView('resId'),
                                args: { itemId: u },
                            },
                            n().createElement(
                                'div',
                                {
                                    className: mt.base,
                                    onClick: () => {
                                        D !== Ee.Unreceived && (z.playClick(), o.openItemPreview(u, h));
                                    },
                                    onMouseEnter: z.playHighlight,
                                },
                                n().createElement('div', {
                                    className: C()(
                                        mt.background,
                                        S ? mt.background__received : mt.background__unreceived,
                                    ),
                                    style: { backgroundImage: `url(${T})`, opacity: S ? c : l },
                                }),
                                y &&
                                    n().createElement('div', {
                                        className: C()(mt.shine, g !== Dt.Init && mt.shine__hidden),
                                    }),
                                P &&
                                    n().createElement(
                                        'div',
                                        { className: mt.blinkWrapper, style: { maskImage: `url(${B})` } },
                                        n().createElement(
                                            'div',
                                            { className: mt.blinkInner },
                                            n().createElement('div', { className: mt.blink }),
                                        ),
                                    ),
                                L &&
                                    n().createElement(
                                        Ft,
                                        null,
                                        n().createElement('div', {
                                            className: C()(
                                                mt.background,
                                                g === Dt.Receiving
                                                    ? mt.background__justReceived
                                                    : mt[`background__${D}`],
                                            ),
                                            style: { width: b.width, height: b.height, backgroundImage: `url(${B})` },
                                        }),
                                    ),
                            ),
                        );
                    }),
                    Bt = 'CollectionElements_base_db',
                    vt = 'CollectionElements_defaultElementsTemplate_92',
                    bt = 'CollectionElements_collectionElement_6a',
                    St = (0, Q.Pi)(() => {
                        const e = Ke().model.computes,
                            t = x(),
                            u = t.mediaSize,
                            i = t.remScreenWidth,
                            a = t.remScreenHeight,
                            r = ze(u, i, a),
                            o = (0, at.useTransition)(e.getCurrentPageCollectionElements(), gt),
                            s = e.isDefaultTemplate() ? vt : bt;
                        return n().createElement(
                            'div',
                            { className: Bt },
                            o((t, u) => {
                                const i = u.assetConfig[r],
                                    a = e.isDefaultTemplate()
                                        ? {}
                                        : {
                                              transform: `translate(${i.left}rem, ${i.top}rem)`,
                                              width: `${i.width}rem`,
                                              height: `${i.height}rem`,
                                          };
                                return n().createElement(
                                    rt.animated.div,
                                    { style: Object.assign({}, t, a), className: s },
                                    n().createElement(wt, u),
                                );
                            }),
                        );
                    }),
                    xt = 'CollectionNavigation_base_c6',
                    yt = 'CollectionNavigation_arrow_93',
                    Pt = 'CollectionNavigation_arrow__left_51',
                    Lt = 'CollectionNavigation_arrow__right_0e',
                    Rt = 'CollectionNavigation_content_66',
                    Tt = 'CollectionNavigation_counterBox_8f',
                    Nt = 'CollectionNavigation_counter_96',
                    It = {
                        base: 'ArrowAnimation_base_03',
                        base__hidden: 'ArrowAnimation_base__hidden_29',
                        fadeOut: 'ArrowAnimation_fadeOut_e0',
                        icon: 'ArrowAnimation_icon_1d',
                        icon__left: 'ArrowAnimation_icon__left_7c',
                        icon__disabled: 'ArrowAnimation_icon__disabled_bf',
                        shine: 'ArrowAnimation_shine_12',
                        shineFadeIn: 'ArrowAnimation_shineFadeIn_5c',
                        animationArrows: 'ArrowAnimation_animationArrows_8b',
                        iconAnimation: 'ArrowAnimation_iconAnimation_00',
                        moved: 'ArrowAnimation_moved_c4',
                        iconAnimation__secondary: 'ArrowAnimation_iconAnimation__secondary_f9',
                        animationArrows__left: 'ArrowAnimation_animationArrows__left_9c',
                        movedLeft: 'ArrowAnimation_movedLeft_cc',
                    };
                let kt;
                !(function (e) {
                    (e.Left = 'left'), (e.Right = 'right');
                })(kt || (kt = {}));
                const Ot = ({ direction: e = kt.Right, hasAnimation: t = !1, onAnimationEnd: u }) => {
                        const i = (0, r.useState)(t),
                            a = i[0],
                            o = i[1];
                        return (
                            (0, r.useEffect)(() => {
                                !t && a && o(!1);
                            }, [t, a]),
                            (0, r.useEffect)(() => {
                                if (!a) {
                                    if (!u) return;
                                    return ct(() => {
                                        u();
                                    }, 800);
                                }
                                return ct(() => {
                                    o(!1);
                                }, 4e3);
                            }, [a, u]),
                            n().createElement(
                                'div',
                                { className: C()(It.base, !a && It.base__hidden) },
                                n().createElement('div', { className: C()(It.shine) }),
                                n().createElement(
                                    'div',
                                    { className: C()(It.animationArrows, It[`animationArrows__${e}`]) },
                                    n().createElement(
                                        'div',
                                        { className: It.iconAnimation },
                                        n().createElement('div', { className: C()(It.icon, It[`icon__${e}`]) }),
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: C()(It.iconAnimation, It.iconAnimation__secondary) },
                                        n().createElement('div', { className: C()(It.icon, It[`icon__${e}`]) }),
                                    ),
                                ),
                            )
                        );
                    },
                    Mt = {
                        base: 'ArrowButton_base_78',
                        base__disabled: 'ArrowButton_base__disabled_e4',
                        icon: 'ArrowButton_icon_40',
                        icon__left: 'ArrowButton_icon__left_f7',
                    };
                let Ut;
                !(function (e) {
                    (e.Left = 'left'), (e.Right = 'right');
                })(Ut || (Ut = {}));
                const Ht = ({
                        onClick: e,
                        direction: t = Ut.Right,
                        isDisabled: u = !1,
                        hasAnimation: i = !0,
                        className: a,
                    }) => {
                        const o = (0, r.useState)(i && !u),
                            s = o[0],
                            l = o[1],
                            c = (0, r.useState)(!1),
                            d = c[0],
                            h = c[1];
                        return (
                            (0, r.useEffect)(() => {
                                if (!u && i)
                                    return d
                                        ? void 0
                                        : ct(() => {
                                              h(!0);
                                          }, 5500);
                            }, [d, i, u]),
                            n().createElement(
                                'div',
                                {
                                    className: C()(Mt.base, u && Mt.base__disabled, a),
                                    onClick: () => {
                                        z.playClick(), l(!1), e();
                                    },
                                    onMouseEnter: z.playHighlight,
                                },
                                n().createElement('div', { className: C()(Mt.icon, Mt[`icon__${t}`]) }),
                                d &&
                                    n().createElement(Ot, {
                                        direction: t,
                                        hasAnimation: s && i && !u,
                                        onAnimationEnd: () => h(!1),
                                    }),
                            )
                        );
                    },
                    Wt = {
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
                    zt = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function $t() {
                    return (
                        ($t =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var i in u) Object.prototype.hasOwnProperty.call(u, i) && (e[i] = u[i]);
                                }
                                return e;
                            }),
                        $t.apply(this, arguments)
                    );
                }
                const Gt = (e) => {
                    let t = e.size,
                        u = e.value,
                        i = e.isEmpty,
                        a = e.fadeInAnimation,
                        r = e.hide,
                        o = e.maximumNumber,
                        s = e.className,
                        l = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                i,
                                a = {},
                                r = Object.keys(e);
                            for (i = 0; i < r.length; i++) (u = r[i]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, zt);
                    const c = i ? null : u,
                        d = 'string' == typeof c;
                    if ((c && !d && c < 0) || 0 === c) return null;
                    const h = c && !d && c > o,
                        m = C()(
                            Wt.base,
                            Wt[`base__${t}`],
                            a && Wt.base__animated,
                            r && Wt.base__hidden,
                            !c && Wt.base__pattern,
                            i && Wt.base__empty,
                            s,
                        );
                    return n().createElement(
                        'div',
                        $t({ className: m }, l),
                        n().createElement('div', { className: Wt.bg }),
                        n().createElement('div', { className: Wt.pattern }),
                        n().createElement(
                            'div',
                            { className: C()(Wt.value, d && Wt.value__text) },
                            h ? o : c,
                            h && n().createElement('span', { className: Wt.plus }, '+'),
                        ),
                    );
                };
                Gt.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                const jt = 'FormatText_base_d0',
                    qt = ({ binding: e, text: t = '', classMix: u, alignment: i = ye.left }) =>
                        null === t
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : n().createElement(
                                  r.Fragment,
                                  null,
                                  t.split('\n').map((t, a) =>
                                      n().createElement(
                                          'div',
                                          { className: C()(jt, u), key: `${t}-${a}` },
                                          ((e, t, u) =>
                                              e
                                                  .split(/%\((.*?)\)(?:[sd])?/g)
                                                  .map((e) => (u && e in u ? u[e] : ke(e, t))))(t, i, e).map((e, t) =>
                                              n().createElement(r.Fragment, { key: `${t}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              ),
                    Yt = (e) => {
                        const t = (0, r.useRef)();
                        return (
                            (0, r.useEffect)(() => {
                                t.current = e;
                            }, [e]),
                            t.current
                        );
                    };
                let Vt;
                !(function (e) {
                    (e.SHORT_DATE = 'short-date'),
                        (e.SHORT_TIME = 'short-time'),
                        (e.SHORT_DATE_TIME = 'short-date-time'),
                        (e.FULL_DATE = 'full-date'),
                        (e.FULL_DATE_TIME = 'full-date-time'),
                        (e.MONTH = 'month'),
                        (e.MONTH_DATE = 'month-date'),
                        (e.DATE_MONTH = 'date-month'),
                        (e.MONTH_YEAR = 'month-year'),
                        (e.WEEK_DAY = 'week-day'),
                        (e.WEEK_DAY_TIME = 'week-day-time'),
                        (e.YEAR = 'year'),
                        (e.DATE_YEAR = 'date-year');
                })(Vt || (Vt = {}));
                Date.now();
                V.Sw.instance;
                let Xt;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(Xt || (Xt = {}));
                V.Sw.instance;
                const Kt = Yt,
                    Qt = 'PageCounter_base_95',
                    Zt = 'PageCounter_bubble_c0',
                    Jt = 'PageCounter_counter_a7',
                    eu = 'PageCounter_counterText_d1',
                    tu = 'PageCounter_currentValue_fa',
                    uu = 'PageCounter_currentValueWrapper_ae',
                    iu = R.strings.collections.navigation.pageCounter();
                let au;
                !(function (e) {
                    (e.Up = 'up'), (e.Down = 'down'), (e.None = 'none');
                })(au || (au = {}));
                const ru = { [au.Up]: 'translateY(100%)', [au.Down]: 'translateY(-100%)', [au.None]: 'translateY(0%)' },
                    nu = {
                        [au.Up]: 'translateY(-100%)',
                        [au.Down]: 'translateY(100%)',
                        [au.None]: 'translateY(-100%)',
                    };
                let ou;
                !(function (e) {
                    (e.Next = 'next'), (e.Previous = 'previous');
                })(ou || (ou = {}));
                const su = (0, Q.Pi)(({ countRange: e, className: t }) => {
                        var u;
                        const i = Ke().model.computes,
                            a = i.getPageCount(),
                            r = i.getPageNumber(),
                            o = null != (u = Kt(r)) ? u : r,
                            s = i.getCountOfNewElementsPerPage(),
                            l = s.prevBubbleCount,
                            c = s.nextBubbleCount,
                            d = e === ou.Next ? c : l,
                            h = r === o ? au.None : r > o ? au.Up : au.Down,
                            m = (0, rt.useTransition)(r, {
                                from: { transform: ru[h], opacity: h === au.None ? 1 : 0 },
                                enter: { transform: 'translateY(0%)', opacity: 1 },
                                leave: { transform: nu[h], opacity: 0 },
                                keys: r,
                            });
                        return n().createElement(
                            'div',
                            { className: C()(Qt, t) },
                            n().createElement(
                                'div',
                                { className: uu },
                                m((e, t) => n().createElement(rt.animated.div, { className: tu, style: e }, t + 1)),
                            ),
                            n().createElement(qt, { classMix: eu, text: iu, binding: { pageCount: a } }),
                            d > 0 &&
                                n().createElement('div', { className: Zt }, n().createElement(Gt, { className: Jt })),
                        );
                    }),
                    lu = (0, Q.Pi)(({ children: e }) => {
                        const t = Ke(),
                            u = t.model,
                            i = t.controls,
                            a = u.root.get().isTutorial,
                            r = u.computes.getPageCount(),
                            o = u.computes.getPageNumber(),
                            s = u.displayCollection.get();
                        return r < 2
                            ? n().createElement(
                                  'div',
                                  { className: xt },
                                  n().createElement('div', { className: Rt }, e),
                              )
                            : n().createElement(
                                  'div',
                                  { className: xt },
                                  n().createElement(
                                      'div',
                                      { className: C()(yt, Pt) },
                                      n().createElement(Ht, {
                                          hasAnimation: a,
                                          isDisabled: 0 === o,
                                          direction: Ut.Left,
                                          onClick: () => {
                                              o > 0 && i.previousPage();
                                          },
                                      }),
                                      n().createElement(
                                          'div',
                                          { className: Tt },
                                          n().createElement(su, { countRange: ou.Previous, className: Nt, key: s }),
                                      ),
                                  ),
                                  n().createElement('div', { className: Rt }, e),
                                  n().createElement(
                                      'div',
                                      { className: C()(yt, Lt) },
                                      n().createElement(Ht, {
                                          hasAnimation: a,
                                          isDisabled: o === r - 1,
                                          direction: Ut.Right,
                                          onClick: () => {
                                              o < r - 1 && i.nextPage();
                                          },
                                      }),
                                      n().createElement(
                                          'div',
                                          { className: Tt },
                                          n().createElement(su, { countRange: ou.Next, className: Nt, key: s }),
                                      ),
                                  ),
                              );
                    }),
                    cu = {
                        base: 'Content_base_73',
                        content: 'Content_content_3a',
                        base__ultraSize: 'Content_base__ultraSize_f5',
                        bg: 'Content_bg_0a',
                        bg__threadBgPosition: 'Content_bg__threadBgPosition_f3',
                    },
                    du = (0, Q.Pi)(() => {
                        const e = x(),
                            t = e.remScreenWidth,
                            u = e.remScreenHeight,
                            i = Ke().model.computes.getPageBackgrounds(),
                            a = i.main,
                            r = i.logicalCircuit,
                            o = (0, at.useTransition)(
                                a,
                                Object.assign({}, gt, { onDestroyed: () => W(R.sounds.collection_page_scroll()) }),
                            ),
                            s = (0, at.useTransition)(r, gt);
                        return n().createElement(
                            'div',
                            { className: C()(cu.base, cu[`base__${We(t, u)}`]) },
                            n().createElement(
                                lu,
                                null,
                                a &&
                                    o((e) =>
                                        n().createElement(
                                            rt.animated.div,
                                            { style: e },
                                            n().createElement('div', {
                                                className: cu.bg,
                                                style: { backgroundImage: `url(${a})` },
                                            }),
                                        ),
                                    ),
                                n().createElement('div', { className: cu.content }, n().createElement(St, null)),
                                s((e) =>
                                    n().createElement(
                                        rt.animated.div,
                                        { style: e },
                                        r &&
                                            n().createElement('div', {
                                                className: C()(cu.bg, cu.bg__threadBgPosition),
                                                style: { backgroundImage: `url(${r})` },
                                            }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    hu = 'Error_base_92',
                    mu = 'Error_icon_9e',
                    gu = 'Error_title_36',
                    Eu = 'Error_description_9c',
                    _u = R.strings.collections.collection.error,
                    Au = () =>
                        n().createElement(
                            'div',
                            { className: hu },
                            n().createElement('div', { className: mu }),
                            n().createElement('div', { className: gu }, _u.title()),
                            n().createElement('div', { className: Eu }, _u.description()),
                        ),
                    pu = 'Footer_base_df',
                    fu = 'Footer_completedStateWrapper_73',
                    Fu = {
                        base: 'ProgressBar_base_45',
                        base__medium: 'ProgressBar_base__medium_62',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__medium: 'ProgressBar_background__medium_6e',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let Du, Cu;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big');
                })(Du || (Du = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(Cu || (Cu = {}));
                const wu = ({ size: e = Du.Default }) =>
                        n().createElement('div', { className: C()(Fu.background, Fu[`background__${e}`]) }),
                    Bu = {
                        base: 'ProgressBarBlink_base_24',
                        base__medium: 'ProgressBarBlink_base__medium_ec',
                        base__small: 'ProgressBarBlink_base__small_0f',
                    },
                    vu = ({ size: e }) => {
                        const t = C()(Bu.base, Bu[`base__${e}`]);
                        return n().createElement('div', { className: t });
                    },
                    bu = {
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
                    Su = (0, r.memo)(
                        ({ size: e, lineRef: t, disabled: u, baseStyles: i, isComplete: a, withoutBounce: r }) => {
                            const o = C()(
                                    bu.base,
                                    bu[`base__${e}`],
                                    u && bu.base__disabled,
                                    a && bu.base__finished,
                                    r && bu.base__withoutBounce,
                                ),
                                s = !u && !a;
                            return n().createElement(
                                'div',
                                { className: o, style: i, ref: t },
                                n().createElement('div', { className: bu.pattern }),
                                n().createElement('div', { className: bu.gradient }),
                                s && n().createElement(vu, { size: e }),
                            );
                        },
                    ),
                    xu = ({ size: e, value: t, lineRef: u, disabled: i, onComplete: a }) => {
                        const o = (0, r.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            s = 100 === t;
                        return (
                            (0, r.useEffect)(() => {
                                s && a && a();
                            }, [s, a]),
                            n().createElement(Su, { size: e, disabled: i, baseStyles: o, isComplete: s, lineRef: u })
                        );
                    };
                let yu, Pu;
                !(function (e) {
                    (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                })(yu || (yu = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(Pu || (Pu = {}));
                const Lu = 'ProgressBarDeltaSimple_base_6c',
                    Ru = 'ProgressBarDeltaSimple_delta_99',
                    Tu = (0, r.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: u,
                            from: i,
                            size: a,
                            to: o,
                            onEndAnimation: s,
                            onChangeAnimationState: l,
                        }) => {
                            const c = o < i,
                                d = (0, r.useState)(Pu.Idle),
                                h = d[0],
                                m = d[1],
                                g = h === Pu.In,
                                E = h === Pu.End,
                                _ = h === Pu.Idle,
                                A = (0, r.useCallback)(
                                    (e) => {
                                        m(e), l && l(e);
                                    },
                                    [l],
                                );
                            (0, r.useEffect)(() => {
                                if (_ && !u) {
                                    return ct(() => {
                                        A(Pu.In);
                                    }, t);
                                }
                            }, [A, u, _, t]),
                                (0, r.useEffect)(() => {
                                    if (g) {
                                        return ct(() => {
                                            s && s(), A(Pu.End);
                                        }, e + t);
                                    }
                                }, [A, g, s, t, e]);
                            const p = (0, r.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                f = (0, r.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                F = (0, r.useMemo)(
                                    () => ({ width: `${Math.abs(i - o)}%`, left: `${c ? o : i}%` }),
                                    [i, c, o],
                                );
                            return E
                                ? null
                                : n().createElement(
                                      'div',
                                      { className: Lu, style: F },
                                      n().createElement(
                                          'div',
                                          { style: _ ? p : f, className: Ru },
                                          n().createElement(vu, { size: a }),
                                      ),
                                  );
                        },
                    ),
                    Nu = (0, r.memo)(
                        ({
                            to: e,
                            size: t,
                            from: u,
                            lineRef: i,
                            disabled: a,
                            isComplete: o,
                            animationSettings: s,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const d = (0, r.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${s.line.duration}ms`,
                                    transitionDelay: `${s.line.delay}ms`,
                                }),
                                [s.line.delay, s.line.duration, e],
                            );
                            return n().createElement(
                                n().Fragment,
                                null,
                                n().createElement(Su, {
                                    size: t,
                                    lineRef: i,
                                    disabled: a,
                                    isComplete: o,
                                    baseStyles: d,
                                }),
                                u >= 0 &&
                                    n().createElement(Tu, {
                                        transitionDuration: s.delta.duration,
                                        transitionDelay: s.delta.delay,
                                        freezed: s.freezed,
                                        from: u,
                                        size: t,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    Iu = 'ProgressBarDeltaGrow_base_7e',
                    ku = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    Ou = 'ProgressBarDeltaGrow_glow_68',
                    Mu = (e) => (e ? { left: 0 } : { right: 0 }),
                    Uu = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    Hu = (e) => ({ transitionDuration: `${e}ms` }),
                    Wu = (0, r.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: u,
                            from: i,
                            size: a,
                            to: o,
                            onEndAnimation: s,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const d = o < i,
                                h = (0, r.useState)(yu.Idle),
                                m = h[0],
                                g = h[1],
                                E = m === yu.End,
                                _ = m === yu.Idle,
                                A = m === yu.Grow,
                                p = m === yu.Shrink,
                                f = (0, r.useCallback)(
                                    (e) => {
                                        g(e), l && l(e);
                                    },
                                    [l],
                                ),
                                F = (0, r.useCallback)(
                                    (e, t) =>
                                        ct(() => {
                                            f(e);
                                        }, t),
                                    [f],
                                );
                            (0, r.useEffect)(() => {
                                if (!u)
                                    return _
                                        ? F(yu.Grow, t)
                                        : A
                                          ? F(yu.Shrink, e)
                                          : p
                                            ? F(yu.End, e)
                                            : void (E && s && s());
                            }, [F, u, E, A, _, p, s, t, e]);
                            const D = (0, r.useMemo)(() => Object.assign({ width: '100%' }, Hu(e), Mu(d)), [d, e]),
                                w = (0, r.useMemo)(() => Object.assign({ width: '0%' }, Hu(e), Mu(d)), [d, e]),
                                B = (0, r.useMemo)(() => Object.assign({ width: '0%' }, Uu(d, i), Hu(e)), [i, d, e]),
                                v = (0, r.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(o - i)}%` }, Uu(d, i), Hu(e)),
                                    [i, d, o, e],
                                );
                            if (E) return null;
                            const b = C()(Iu, c, d && 0 === o && ku);
                            return n().createElement(
                                'div',
                                { style: _ ? B : v, className: b },
                                n().createElement(
                                    'div',
                                    { style: p ? w : D, className: Ou },
                                    n().createElement(vu, { size: a }),
                                ),
                            );
                        },
                    ),
                    zu = (0, r.memo)(
                        ({
                            to: e,
                            size: t,
                            from: u,
                            lineRef: i,
                            disabled: a,
                            isComplete: o,
                            animationSettings: s,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const d = e < u,
                                h = (0, r.useState)(!1),
                                m = h[0],
                                g = h[1],
                                E = (0, r.useCallback)(
                                    (e) => {
                                        e === yu.Shrink && g(!0), c && c(e);
                                    },
                                    [c],
                                ),
                                _ = (0, r.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                                A = (0, r.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${s.line.duration}ms` }),
                                    [s.line.duration, e],
                                );
                            return n().createElement(
                                n().Fragment,
                                null,
                                n().createElement(Su, {
                                    size: t,
                                    lineRef: i,
                                    disabled: a,
                                    isComplete: o,
                                    withoutBounce: d && 0 === e,
                                    baseStyles: m ? A : _,
                                }),
                                u >= 0 &&
                                    n().createElement(Wu, {
                                        transitionDuration: s.delta.duration,
                                        transitionDelay: s.delta.delay,
                                        onChangeAnimationState: E,
                                        freezed: s.freezed,
                                        onEndAnimation: l,
                                        from: u,
                                        size: t,
                                        to: e,
                                        className: s.delta.className,
                                    }),
                            );
                        },
                    ),
                    $u = ['onComplete', 'onEndAnimation'];
                function Gu() {
                    return (
                        (Gu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var i in u) Object.prototype.hasOwnProperty.call(u, i) && (e[i] = u[i]);
                                }
                                return e;
                            }),
                        Gu.apply(this, arguments)
                    );
                }
                const ju = (0, r.memo)((e) => {
                        let t = e.onComplete,
                            u = e.onEndAnimation,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    i,
                                    a = {},
                                    r = Object.keys(e);
                                for (i = 0; i < r.length; i++) (u = r[i]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, $u);
                        const a = (0, r.useState)(!1),
                            o = a[0],
                            s = a[1],
                            l = (0, r.useCallback)(() => {
                                const e = 100 === i.to;
                                e !== o && s(e), e && t && t(), u && u();
                            }, [o, t, u, i.to]);
                        switch (i.animationSettings.type) {
                            case Cu.Simple:
                                return n().createElement(Nu, Gu({}, i, { onEndAnimation: l, isComplete: o }));
                            case Cu.Growing:
                                return n().createElement(zu, Gu({}, i, { onEndAnimation: l, isComplete: o }));
                            default:
                                return null;
                        }
                    }),
                    qu = ['onEndAnimation'];
                function Yu() {
                    return (
                        (Yu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var i in u) Object.prototype.hasOwnProperty.call(u, i) && (e[i] = u[i]);
                                }
                                return e;
                            }),
                        Yu.apply(this, arguments)
                    );
                }
                const Vu = (0, r.memo)((e) => {
                    let t = e.onEndAnimation,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                i,
                                a = {},
                                r = Object.keys(e);
                            for (i = 0; i < r.length; i++) (u = r[i]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, qu);
                    const i = (0, r.useRef)({}),
                        a = (0, r.useCallback)(() => {
                            (i.current.from = void 0), t && t();
                        }, [t]),
                        o = 'number' == typeof i.current.from ? i.current.from : u.from;
                    return (
                        (i.current.from = o),
                        n().createElement(ju, Yu({}, u, { onEndAnimation: a, key: `${o}-${u.to}`, from: o }))
                    );
                });
                function Xu() {
                    return (
                        (Xu =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var i in u) Object.prototype.hasOwnProperty.call(u, i) && (e[i] = u[i]);
                                }
                                return e;
                            }),
                        Xu.apply(this, arguments)
                    );
                }
                const Ku = (0, r.memo)(
                        ({
                            size: e,
                            value: t,
                            lineRef: u,
                            disabled: i,
                            deltaFrom: a,
                            animationSettings: r,
                            onEndAnimation: o,
                            onChangeAnimationState: s,
                            onComplete: l,
                        }) => {
                            if (a === t)
                                return n().createElement(xu, {
                                    key: `${a}-${t}`,
                                    size: e,
                                    value: t,
                                    lineRef: u,
                                    disabled: i,
                                    onComplete: l,
                                });
                            const c = {
                                from: a,
                                to: t,
                                size: e,
                                lineRef: u,
                                disabled: i,
                                animationSettings: r,
                                onComplete: l,
                                onEndAnimation: o,
                                onChangeAnimationState: s,
                            };
                            return r.withStack
                                ? n().createElement(Vu, c)
                                : n().createElement(ju, Xu({ key: `${a}-${t}` }, c));
                        },
                    ),
                    Qu = (e) => ({
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
                    Zu = (e, t, u) => {
                        if ('number' == typeof u) {
                            return (Me(0, t, u) / t) * 100;
                        }
                        return e;
                    },
                    Ju = {
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
                    ei = {
                        freezed: !1,
                        withStack: !1,
                        type: Cu.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    ti = (0, r.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = Ju,
                            size: u = Du.Default,
                            animationSettings: i = ei,
                            disabled: a = !1,
                            withoutBackground: o = !1,
                            value: s,
                            deltaFrom: l,
                            lineRef: c,
                            onChangeAnimationState: d,
                            onEndAnimation: h,
                            onComplete: m,
                        }) => {
                            const g = ((e, t, u) =>
                                (0, r.useMemo)(() => {
                                    const i = (Me(0, t, e) / t) * 100;
                                    return { value: i, deltaFrom: Zu(i, t, u) };
                                }, [u, t, e]))(s, e, l);
                            return n().createElement(
                                'div',
                                { className: C()(Fu.base, Fu[`base__${u}`]), style: Qu(t) },
                                !o && n().createElement(wu, { size: u }),
                                n().createElement(Ku, {
                                    size: u,
                                    lineRef: c,
                                    disabled: a,
                                    value: g.value,
                                    deltaFrom: g.deltaFrom,
                                    animationSettings: i,
                                    onEndAnimation: h,
                                    onChangeAnimationState: d,
                                    onComplete: m,
                                }),
                            );
                        },
                    ),
                    ui = 'ActiveState_base_c4',
                    ii = 'ActiveState_base__completed_11',
                    ai = 'ActiveState_progressBarWrapper_4a',
                    ri = 'ActiveState_progressBarBg_de',
                    ni = 'ActiveState_progressBar_36',
                    oi = 'ActiveState_counterBlock_29',
                    si = 'ActiveState_relativeWrap_75';
                let li, ci, di, hi;
                !(function (e) {
                    (e.HangarView = 'hangar'),
                        (e.BattlePassProgression = 'battle_pass_progression'),
                        (e.CollectionProgression = 'collection_progression');
                })(li || (li = {})),
                    (function (e) {
                        (e.CollectionEntryPointView = 'collection_entry_point_view'),
                            (e.BattlePassCollectionEntryPoint = 'battle_pass_collection_entry_point'),
                            (e.CollectionProgressTooltip = 'collection_progress_tooltip');
                    })(ci || (ci = {})),
                    (function (e) {
                        e.Click = 'click';
                    })(di || (di = {})),
                    (function (e) {
                        (e[(e.NonSet = 0)] = 'NonSet'),
                            (e[(e.Debug = 10)] = 'Debug'),
                            (e[(e.Info = 20)] = 'Info'),
                            (e[(e.Warning = 30)] = 'Warning');
                    })(hi || (hi = {}));
                const mi = 'tooltip_watched';
                let gi;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown');
                })(gi || (gi = {}));
                const Ei = 'metrics',
                    _i = () => Date.now(),
                    Ai = ({ partnerID: e, item: t, parentScreen: u, itemState: i, info: a }) => ({
                        item: t,
                        partnerID: e || null,
                        parent_screen: u || null,
                        item_state: i || null,
                        additional_info: a || null,
                    }),
                    pi = (e, t) => {
                        const u = (0, r.useCallback)(
                            (u, i = hi.Info, a) => {
                                a || (a = {}),
                                    Object.keys(a).length >= 200 ||
                                        window.uiLoggerModel.log({
                                            feature: e,
                                            group: t,
                                            action: u,
                                            logLevel: i,
                                            params: JSON.stringify(a),
                                        });
                            },
                            [e, t],
                        );
                        return (e, t, i) => u(e, t, i);
                    },
                    fi = (e, t) => {
                        const u = pi(e, t),
                            i = (0, r.useRef)(new Map()),
                            a = (0, r.useRef)(new Map()),
                            n = (0, r.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = i.current.get(e);
                                    (void 0 !== t && t > 0) || i.current.set(e, _i());
                                },
                                [i],
                            ),
                            o = (0, r.useCallback)(() => {
                                i.current.clear(), a.current.clear();
                            }, [i, a]),
                            s = (0, r.useCallback)(
                                (e) => {
                                    e &&
                                        void 0 !== i.current.get(e) &&
                                        void 0 === a.current.get(e) &&
                                        a.current.set(e, _i());
                                },
                                [i, a],
                            ),
                            l = (0, r.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = i.current.get(e);
                                    if (void 0 === t) return;
                                    const u = a.current.get(e);
                                    if (void 0 === u) return;
                                    a.current.delete(e);
                                    const r = _i() - u;
                                    i.current.set(e, t + r);
                                },
                                [i, a],
                            ),
                            c = (0, r.useCallback)(
                                (e, t = 0, r, n) => {
                                    const o = i.current.get(e);
                                    if (void 0 === o) return;
                                    void 0 !== a.current.get(e) && l(e), i.current.delete(e);
                                    const s = (_i() - o) / 1e3;
                                    s <= t ||
                                        ((n = ((e, t) => (void 0 === e && (e = {}), (e.timeSpent = t), e))(n, s)),
                                        u(e, r, n));
                                },
                                [i, a, u, l],
                            );
                        return [(e) => n(e), (e, t, u, i) => c(e, t, u, i), () => o(), (e) => s(e), (e) => l(e)];
                    },
                    Fi = (e) => {
                        const t = fi(e, Ei),
                            u = t[0],
                            i = t[1],
                            a = t[2],
                            n = t[3],
                            o = t[4],
                            s = (0, r.useCallback)(
                                (e) => {
                                    const t = e.action,
                                        u = e.timeLimit,
                                        a = e.logLevel;
                                    i(t, u, a, Ai(e));
                                },
                                [i],
                            );
                        return [(e) => u(e), (e) => s(e), () => a(), (e) => n(e), (e) => o(e)];
                    },
                    Di = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Ci() {
                    return (
                        (Ci =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var i in u) Object.prototype.hasOwnProperty.call(u, i) && (e[i] = u[i]);
                                }
                                return e;
                            }),
                        Ci.apply(this, arguments)
                    );
                }
                const wi = R.views.common.tooltip_window.simple_tooltip_content,
                    Bi = (e) => {
                        let t = e.children,
                            u = e.body,
                            i = e.header,
                            a = e.note,
                            o = e.alert,
                            s = e.args,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    i,
                                    a = {},
                                    r = Object.keys(e);
                                for (i = 0; i < r.length; i++) (u = r[i]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, Di);
                        const c = (0, r.useMemo)(() => {
                            const e = Object.assign({}, s, { body: u, header: i, note: a, alert: o });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [o, u, i, a, s]);
                        return n().createElement(
                            lt,
                            Ci(
                                {
                                    contentId:
                                        ((d = null == s ? void 0 : s.hasHtmlContent),
                                        d ? wi.SimpleTooltipHtmlContent('resId') : wi.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            t,
                        );
                        var d;
                    },
                    vi = ['children'];
                function bi() {
                    return (
                        (bi =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var i in u) Object.prototype.hasOwnProperty.call(u, i) && (e[i] = u[i]);
                                }
                                return e;
                            }),
                        bi.apply(this, arguments)
                    );
                }
                const Si = R.strings.collections.footer.progressbar.tooltip,
                    xi = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    i,
                                    a = {},
                                    r = Object.keys(e);
                                for (i = 0; i < r.length; i++) (u = r[i]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, vi);
                        return n().createElement(
                            Bi,
                            bi({ header: Si.title(), body: Si.body(), note: Si.note() }, u),
                            t,
                        );
                    },
                    yi = 'CounterBlock_base_f4',
                    Pi = 'CounterBlock_text_82',
                    Li = 'CounterBlock_count_85',
                    Ri = 'CounterBlock_count__received_38',
                    Ti = 'CounterBlock_infoIcon_a4',
                    Ni = 'CounterBlock_infoIcon__large_19',
                    Ii = (0, Q.Pi)(({ receivedItemsCount: e, maxItemsCount: t }) => {
                        const u = t > 9,
                            i = ((e, t, u, i, a) => {
                                const n = Fi(t),
                                    o = n[0],
                                    s = n[1];
                                return [
                                    (0, r.useCallback)(() => o(mi), [o]),
                                    (0, r.useCallback)(
                                        () =>
                                            s({
                                                action: mi,
                                                timeLimit: 2,
                                                item: e,
                                                parentScreen: u,
                                                itemState: i,
                                                info: a,
                                            }),
                                        [s, e, u, i, a],
                                    ),
                                ];
                            })(ci.CollectionProgressTooltip, 'collection', li.CollectionProgression),
                            a = i[0],
                            o = i[1];
                        return n().createElement(
                            xi,
                            { onMouseEnter: a, onMouseLeave: o },
                            n().createElement(
                                'div',
                                { className: yi },
                                n().createElement(qt, {
                                    classMix: Pi,
                                    text: R.strings.collections.footer.progressbar.activeState.receivedElements.text(),
                                    binding: {
                                        received: n().createElement('div', { className: C()(Li, Ri) }, e),
                                        total: n().createElement('div', { className: Li }, t),
                                    },
                                }),
                                n().createElement('div', { className: C()(Ti, u && Ni) }),
                            ),
                        );
                    }),
                    ki = _e.JustReceived,
                    Oi = _e.Received,
                    Mi = _e.Unreceived,
                    Ui = ['children'];
                function Hi() {
                    return (
                        (Hi =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var i in u) Object.prototype.hasOwnProperty.call(u, i) && (e[i] = u[i]);
                                }
                                return e;
                            }),
                        Hi.apply(this, arguments)
                    );
                }
                const Wi = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                i,
                                a = {},
                                r = Object.keys(e);
                            for (i = 0; i < r.length; i++) (u = r[i]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, Ui);
                    return n().createElement(
                        lt,
                        Hi(
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
                function zi() {
                    return (
                        (zi =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var i in u) Object.prototype.hasOwnProperty.call(u, i) && (e[i] = u[i]);
                                }
                                return e;
                            }),
                        zi.apply(this, arguments)
                    );
                }
                const $i = ({ children: e, tooltipArgs: t, className: u }) => {
                        if (!t) return e;
                        const i = n().createElement('div', { className: u }, e);
                        if (t.header || t.body) return n().createElement(Bi, t, i);
                        const a = t.contentId,
                            r = t.args,
                            o = null == r ? void 0 : r.contentId;
                        return a || o
                            ? n().createElement(lt, zi({}, t, { contentId: a || o }), i)
                            : n().createElement(Wi, t, i);
                    },
                    Gi = {
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
                    ji = ({
                        name: e,
                        image: t,
                        isPeriodic: u = !1,
                        size: i = te.Big,
                        special: a,
                        value: r,
                        valueType: o,
                        style: s,
                        className: l,
                        classNames: c,
                        tooltipArgs: d,
                        periodicIconTooltipArgs: h,
                    }) => {
                        const m = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case ie.BATTLE_BOOSTER:
                                    case ie.BATTLE_BOOSTER_REPLACE:
                                        return ae.BATTLE_BOOSTER;
                                }
                            })(a),
                            g = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case ie.BATTLE_BOOSTER:
                                        return re.BATTLE_BOOSTER;
                                    case ie.BATTLE_BOOSTER_REPLACE:
                                        return re.BATTLE_BOOSTER_REPLACE;
                                    case ie.BUILT_IN_EQUIPMENT:
                                        return re.BUILT_IN_EQUIPMENT;
                                    case ie.EQUIPMENT_PLUS:
                                        return re.EQUIPMENT_PLUS;
                                    case ie.EQUIPMENT_TROPHY_BASIC:
                                        return re.EQUIPMENT_TROPHY_BASIC;
                                    case ie.EQUIPMENT_TROPHY_UPGRADED:
                                        return re.EQUIPMENT_TROPHY_UPGRADED;
                                    case ie.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return re.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case ie.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return re.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case ie.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return re.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case ie.PROGRESSION_STYLE_UPGRADED_1:
                                        return re.PROGRESSION_STYLE_UPGRADED_1;
                                    case ie.PROGRESSION_STYLE_UPGRADED_2:
                                        return re.PROGRESSION_STYLE_UPGRADED_2;
                                    case ie.PROGRESSION_STYLE_UPGRADED_3:
                                        return re.PROGRESSION_STYLE_UPGRADED_3;
                                    case ie.PROGRESSION_STYLE_UPGRADED_4:
                                        return re.PROGRESSION_STYLE_UPGRADED_4;
                                }
                            })(a),
                            E = ((e, t) => {
                                if (void 0 === e) return null;
                                switch (t) {
                                    case ue.MULTI: {
                                        const t = Number(e);
                                        return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                                    }
                                    case ue.CURRENCY:
                                    case ue.NUMBER:
                                        return n().createElement(ne, { format: 'integral', value: Number(e) });
                                    case ue.PREMIUM_PLUS: {
                                        const t = Number(e);
                                        return isNaN(t) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(r, o);
                        return n().createElement(
                            'div',
                            { className: C()(Gi.base, Gi[`base__${i}`], l), style: s },
                            n().createElement(
                                $i,
                                { tooltipArgs: d, className: Gi.tooltipWrapper },
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement(
                                        'div',
                                        { className: C()(Gi.image, null == c ? void 0 : c.image) },
                                        m &&
                                            n().createElement('div', {
                                                className: C()(Gi.highlight, null == c ? void 0 : c.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${i}.${m}_highlight)`,
                                                },
                                            }),
                                        t &&
                                            n().createElement('div', {
                                                className: C()(Gi.icon, null == c ? void 0 : c.rewardIcon),
                                                style: { backgroundImage: `url(${t})` },
                                            }),
                                        g &&
                                            n().createElement('div', {
                                                className: C()(Gi.overlay, null == c ? void 0 : c.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${i}.${g}_overlay)`,
                                                },
                                            }),
                                    ),
                                    E &&
                                        n().createElement(
                                            'div',
                                            {
                                                className: C()(
                                                    Gi.info,
                                                    Gi[`info__${e}`],
                                                    o === ue.MULTI && Gi.info__multi,
                                                    null == c ? void 0 : c.info,
                                                ),
                                            },
                                            E,
                                        ),
                                ),
                            ),
                            u &&
                                n().createElement(
                                    $i,
                                    { tooltipArgs: h },
                                    n().createElement('div', {
                                        className: C()(Gi.timer, null == c ? void 0 : c.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    qi = 'Rewards_base_5d',
                    Yi = 'Rewards_label_ce';
                function Vi() {
                    return (
                        (Vi =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var i in u) Object.prototype.hasOwnProperty.call(u, i) && (e[i] = u[i]);
                                }
                                return e;
                            }),
                        Vi.apply(this, arguments)
                    );
                }
                const Xi = (0, Q.Pi)(({ requiredItemsCount: e, isReceived: t }) => {
                        var u;
                        const i = Ke().model.computes.getRewardsByLevel(e),
                            a = t !== (null != (u = Kt(t)) ? u : t),
                            o = 2 < i.length,
                            s = (0, r.useMemo)(() => (null == i ? void 0 : i.slice(1, i.length)), [i]),
                            l = (0, r.useMemo)(
                                () =>
                                    null == s
                                        ? void 0
                                        : s
                                              .map((e) => {
                                                  var t;
                                                  return null == (t = e.tooltipArgs.args) ? void 0 : t.tooltipId;
                                              })
                                              .join(','),
                                [s],
                            );
                        return n().createElement(
                            'div',
                            { className: C()(qi) },
                            o
                                ? n().createElement(
                                      n().Fragment,
                                      null,
                                      i
                                          .slice(0, 1)
                                          .map(
                                              (e, t) => (
                                                  a && W(R.sounds.collection_pb_reward()),
                                                  n().createElement(
                                                      ji,
                                                      Vi({}, e, {
                                                          key: t,
                                                          size: te.Small,
                                                          image: e.getImage(te.Small),
                                                          classNames: { info: e.valueType === ue.MULTI ? Yi : void 0 },
                                                      }),
                                                  )
                                              ),
                                          ),
                                      n().createElement(ji, {
                                          name: 'more',
                                          image: Ge(s),
                                          size: te.Small,
                                          value: `${s.length}`,
                                          valueType: ue.MULTI,
                                          tooltipArgs: {
                                              contentId: R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'),
                                              args: { hiddenRewards: l },
                                          },
                                      }),
                                  )
                                : n().createElement(
                                      n().Fragment,
                                      null,
                                      i.map(
                                          (e, t) => (
                                              a && W(R.sounds.collection_pb_reward()),
                                              n().createElement(
                                                  ji,
                                                  Vi({}, e, {
                                                      key: t,
                                                      size: te.Small,
                                                      image: e.getImage(te.Small),
                                                      classNames: { info: e.valueType === ue.MULTI ? Yi : void 0 },
                                                  }),
                                              )
                                          ),
                                      ),
                                  ),
                        );
                    }),
                    Ki = {
                        progressItemWrapper: 'ProgressItem_progressItemWrapper_fa',
                        progressItemWrapper__zero: 'ProgressItem_progressItemWrapper__zero_ed',
                        progressItemWrapper__invisible: 'ProgressItem_progressItemWrapper__invisible_b1',
                        progressItemWrapper__bottom: 'ProgressItem_progressItemWrapper__bottom_d0',
                        item: 'ProgressItem_item_34',
                        item__top: 'ProgressItem_item__top_ef',
                        point: 'ProgressItem_point_57',
                        point__top: 'ProgressItem_point__top_d4',
                        point__smallTop: 'ProgressItem_point__smallTop_3b',
                        point__largeBottom: 'ProgressItem_point__largeBottom_8a',
                        leftIndent: 'ProgressItem_leftIndent_b3',
                        leftIndent__medium: 'ProgressItem_leftIndent__medium_f0',
                        zeroWrap: 'ProgressItem_zeroWrap_b0',
                        checkIconWrapper: 'ProgressItem_checkIconWrapper_28',
                        base__completed: 'ProgressItem_base__completed_d3',
                        receivedIconBg: 'ProgressItem_receivedIconBg_72',
                        base__received: 'ProgressItem_base__received_fe',
                        base__justReceived: 'ProgressItem_base__justReceived_87',
                        fadeInBgStep1: 'ProgressItem_fadeInBgStep1_ed',
                        fadeInBgStep2: 'ProgressItem_fadeInBgStep2_b4',
                        receivedIcon: 'ProgressItem_receivedIcon_4f',
                        fadeInScaleIcon: 'ProgressItem_fadeInScaleIcon_e4',
                    },
                    Qi = (e) => {
                        const t = null == e ? void 0 : e.valueOf();
                        return 'number' == typeof t && t > 9
                            ? Ki.leftIndent__medium
                            : 'number' == typeof t && t <= 9
                              ? Ki.leftIndent
                              : void 0;
                    },
                    Zi = ({
                        position: e,
                        isZero: t = !1,
                        isVisible: u = !1,
                        isProgressAnimationEnded: i = !0,
                        leftDistance: a = 0,
                        state: r = Mi,
                        children: o,
                    }) => {
                        const s = e === ia.Top,
                            l = e === ia.Bottom,
                            c = [Ki.item, Ki[`item__${e}`], Ki[`base__${r}`], i && Ki.base__completed, s && Qi(o)];
                        return t
                            ? n().createElement(
                                  'div',
                                  {
                                      className: C()(
                                          Ki.progressItemWrapper__zero,
                                          !u && Ki.progressItemWrapper__invisible,
                                      ),
                                      style: { left: `${a}%` },
                                  },
                                  l && n().createElement('div', { className: C()(Ki.point__largeBottom) }),
                                  n().createElement('div', { className: Ki.zeroWrap }, o),
                                  s && n().createElement('div', { className: C()(Ki.point, Ki.point__smallTop) }),
                              )
                            : n().createElement(
                                  'div',
                                  {
                                      className: C()(Ki.progressItemWrapper, Ki[`progressItemWrapper__${e}`]),
                                      style: { left: `${a}%` },
                                  },
                                  l && n().createElement('div', { className: Ki.point__largeBottom }),
                                  n().createElement(
                                      'div',
                                      { className: C()(c) },
                                      s && r !== Mi
                                          ? n().createElement(
                                                'div',
                                                { className: Ki.checkIconWrapper },
                                                n().createElement('div', { className: Ki.receivedIconBg }),
                                                n().createElement('div', { className: Ki.receivedIcon }),
                                            )
                                          : o,
                                  ),
                                  s && n().createElement('div', { className: C()(Ki.point__top, Ki.point__smallTop) }),
                              );
                    },
                    Ji = (e, t) => (e / t) * 100,
                    ea = (0, Q.Pi)(({ state: e, requiredItemsCount: t, position: u, maxItemsCount: i }) => {
                        const a = Ke(),
                            o = a.controls,
                            s = a.model,
                            l = e === ki,
                            c = s.computes.isProgressAnimationEnded();
                        return (
                            (0, r.useEffect)(() => {
                                if (l)
                                    return ct(() => {
                                        o.setRewardReceived(t);
                                    }, 500);
                            }, [o, l, t]),
                            u === ia.Top
                                ? n().createElement(
                                      Zi,
                                      { state: e, position: u, isProgressAnimationEnded: c, leftDistance: Ji(t, i) },
                                      t,
                                  )
                                : n().createElement(
                                      Zi,
                                      { state: e, position: u, isProgressAnimationEnded: c, leftDistance: Ji(t, i) },
                                      n().createElement(Xi, { requiredItemsCount: t, isReceived: e === Oi }),
                                  )
                        );
                    }),
                    ta = 'ProgressScale_base_88',
                    ua = 'ProgressScale_base__completed_b0';
                let ia;
                !(function (e) {
                    (e.Top = 'top'), (e.Bottom = 'bottom');
                })(ia || (ia = {}));
                const aa = (0, Q.Pi)(({ position: e, maxItemsCount: t }) => {
                        const u = Ke().model,
                            i = u.computes.levelInfo(),
                            a = u.computes.isProgressAnimationEnded();
                        return n().createElement(
                            'div',
                            { className: C()(ta, a && ua) },
                            n().createElement(Zi, { isZero: !0, position: e, isVisible: e === ia.Top }, 0),
                            i.map(({ state: u, requiredItemsCount: i }, a) =>
                                n().createElement(ea, {
                                    key: a,
                                    state: u,
                                    position: e,
                                    maxItemsCount: t,
                                    requiredItemsCount: i,
                                }),
                            ),
                        );
                    }),
                    ra = [];
                function na(e) {
                    const t = (0, r.useRef)(e);
                    return (
                        (0, r.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, r.useCallback)((...e) => (0, t.current)(...e), ra)
                    );
                }
                function oa(e, t, u = []) {
                    const i = (0, r.useRef)(0),
                        a = (0, r.useCallback)(() => window.clearInterval(i.current), u || []);
                    (0, r.useEffect)(() => a, [a]);
                    const n = (null != u ? u : []).concat([t]);
                    return [
                        (0, r.useCallback)((u) => {
                            (i.current = window.setInterval(() => e(u, !0), t)), e(u, !1);
                        }, n),
                        a,
                    ];
                }
                function sa(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return la(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
                                return la(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        u && (e = u);
                        var i = 0;
                        return function () {
                            return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function la(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, i = new Array(t); u < t; u++) i[u] = e[u];
                    return i;
                }
                function ca(e, t, u) {
                    const i = (0, r.useMemo)(
                        () =>
                            (function (e, t, u, i) {
                                let a,
                                    r = !1,
                                    n = 0;
                                function o() {
                                    a && clearTimeout(a);
                                }
                                function s(...s) {
                                    const l = this,
                                        c = Date.now() - n;
                                    function d() {
                                        (n = Date.now()), u.apply(l, s);
                                    }
                                    r ||
                                        (i && !a && d(),
                                        o(),
                                        void 0 === i && c > e
                                            ? d()
                                            : !0 !== t &&
                                              (a = setTimeout(
                                                  i
                                                      ? function () {
                                                            a = void 0;
                                                        }
                                                      : d,
                                                  void 0 === i ? e - c : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof t && ((i = u), (u = t), (t = void 0)),
                                    (s.cancel = function () {
                                        o(), (r = !0);
                                    }),
                                    s
                                );
                            })(u, e),
                        t,
                    );
                    return (0, r.useEffect)(() => i.cancel, [i]), i;
                }
                let da;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(da || (da = {}));
                const ha = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    ma = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: u,
                        getDirection: i,
                        getWrapperSize: a,
                        triggerMouseMoveOnUpdate: n = !1,
                    }) => {
                        const o = (e, u) => {
                            const i = t(e),
                                a = i[0],
                                r = i[1];
                            return Me(a, r, u);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                d = void 0 === c ? ha : c,
                                h = (0, r.useRef)(null),
                                m = (0, r.useRef)(null),
                                g = (() => {
                                    const e = (0, r.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        u = (e, u) => {
                                            t(e).set(u, u);
                                        },
                                        i = (e, u) => {
                                            t(e).delete(u);
                                        },
                                        a = (e, ...u) => {
                                            for (var i, a = sa(t(e).values()); !(i = a()).done; ) (0, i.value)(...u);
                                        };
                                    return (0, r.useMemo)(() => ({ on: u, off: i, trigger: a }), []);
                                })(),
                                E = ca(
                                    () => {
                                        s.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                _ = (0, Z.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = h.current;
                                        t && (u(t, e), g.trigger('change', e), n && E());
                                    },
                                    onRest: (e) => g.trigger('rest', e),
                                    onStart: (e) => g.trigger('start', e),
                                    onPause: (e) => g.trigger('pause', e),
                                })),
                                A = _[0],
                                p = _[1],
                                f = (0, r.useCallback)(
                                    (e, t, u) => {
                                        var i;
                                        const a = A.scrollPosition.get(),
                                            r = (null != (i = A.scrollPosition.goal) ? i : 0) - a;
                                        return o(e, t * u + r + a);
                                    },
                                    [A.scrollPosition],
                                ),
                                F = (0, r.useCallback)(
                                    (e, { immediate: t = !1, reset: u = !0 } = {}) => {
                                        const i = h.current;
                                        i &&
                                            p.start({
                                                scrollPosition: o(i, e),
                                                immediate: t,
                                                reset: u,
                                                config: d.animationConfig,
                                                from: { scrollPosition: o(i, A.scrollPosition.get()) },
                                            });
                                    },
                                    [p, d.animationConfig, A.scrollPosition],
                                ),
                                D = (0, r.useCallback)(
                                    (e) => {
                                        const t = h.current,
                                            u = m.current;
                                        if (!t || !u) return;
                                        const i = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return a(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(u, d.step),
                                            r = f(t, e, i);
                                        F(r);
                                    },
                                    [F, f, d.step],
                                ),
                                C = (0, r.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && D(i(e)),
                                            h.current && g.trigger('mouseWheel', e, A.scrollPosition, t(h.current));
                                    },
                                    [A.scrollPosition, D, g],
                                ),
                                w = ((e, t = []) => {
                                    const u = (0, r.useRef)(),
                                        i = (0, r.useCallback)((...t) => {
                                            u.current && u.current(), (u.current = e(...t));
                                        }, t);
                                    return (
                                        (0, r.useEffect)(
                                            () => () => {
                                                u.current && u.current();
                                            },
                                            [i],
                                        ),
                                        i
                                    );
                                })(
                                    () =>
                                        tt(() => {
                                            const e = h.current;
                                            e &&
                                                (F(o(e, A.scrollPosition.goal), { immediate: !0 }),
                                                g.trigger('resizeHandled'));
                                        }),
                                    [F, A.scrollPosition.goal],
                                ),
                                B = na(() => {
                                    const e = h.current;
                                    if (!e) return;
                                    const t = o(e, A.scrollPosition.goal);
                                    t !== A.scrollPosition.goal && F(t, { immediate: !0 }),
                                        g.trigger('recalculateContent');
                                });
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('resize', w),
                                    () => {
                                        window.removeEventListener('resize', w);
                                    }
                                ),
                                [w],
                            );
                            return (0, r.useMemo)(
                                () => ({
                                    getWrapperSize: () => (m.current ? a(m.current) : void 0),
                                    getContainerSize: () => (h.current ? e(h.current) : void 0),
                                    getBounds: () =>
                                        h.current
                                            ? t(h.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: d.step.clampedArrowStepTimeout,
                                    clampPosition: o,
                                    handleMouseWheel: C,
                                    applyScroll: F,
                                    applyStepTo: D,
                                    contentRef: h,
                                    wrapperRef: m,
                                    scrollPosition: p,
                                    animationScroll: A,
                                    recalculateContent: B,
                                    events: { on: g.on, off: g.off },
                                }),
                                [A.scrollPosition, F, D, g.off, g.on, B, C, p, d.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    ga = ma({
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
                        getDirection: (e) => (e.deltaY > 1 ? da.Next : da.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    Ea = 'HorizontalBar_base_49',
                    _a = 'HorizontalBar_base__nonActive_82',
                    Aa = 'HorizontalBar_leftButton_5f',
                    pa = 'HorizontalBar_rightButton_03',
                    fa = 'HorizontalBar_track_0d',
                    Fa = 'HorizontalBar_thumb_fd',
                    Da = 'HorizontalBar_rail_32',
                    Ca = 'disable',
                    wa = { pending: !1, offset: 0 },
                    Ba = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    va = () => {},
                    ba = (e, t) => Math.max(20, e.offsetWidth * t),
                    Sa = (0, r.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = Ba, onDrag: i = va }) => {
                        const a = (0, r.useRef)(null),
                            o = (0, r.useRef)(null),
                            s = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            d = e.stepTimeout || 100,
                            h = (0, r.useState)(wa),
                            m = h[0],
                            g = h[1],
                            E = (0, r.useCallback)(
                                (e) => {
                                    g(e),
                                        c.current && i({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [i],
                            ),
                            _ = () => {
                                const t = l.current,
                                    u = c.current,
                                    i = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(i && t && u && a)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    n = Math.min(1, i / a),
                                    d = Me(0, 1, r / (a - i)),
                                    h = (t.offsetWidth - ba(t, n)) * d;
                                (u.style.transform = `translateX(${0 | h}px)`),
                                    ((e) => {
                                        if (o.current && s.current && l.current && c.current) {
                                            if (0 === e)
                                                return o.current.classList.add(Ca), void s.current.classList.remove(Ca);
                                            if (
                                                ((t = l.current),
                                                (u = c.current),
                                                e - (t.offsetWidth - u.offsetWidth) >= -0.5)
                                            )
                                                return o.current.classList.remove(Ca), void s.current.classList.add(Ca);
                                            var t, u;
                                            o.current.classList.remove(Ca), s.current.classList.remove(Ca);
                                        }
                                    })(h);
                            },
                            A = na(() => {
                                (() => {
                                    const t = c.current,
                                        u = l.current,
                                        i = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && t && i && u)) return;
                                    const n = Math.min(1, i / r);
                                    (t.style.width = `${ba(u, n)}px`),
                                        (t.style.display = 'flex'),
                                        a.current &&
                                            (1 === n ? a.current.classList.add(_a) : a.current.classList.remove(_a));
                                })(),
                                    _();
                            });
                        (0, r.useEffect)(() => tt(A)),
                            (0, r.useEffect)(
                                () =>
                                    tt(() => {
                                        const t = () => {
                                            _();
                                        };
                                        let u = va;
                                        const i = () => {
                                            u(), (u = tt(A));
                                        };
                                        return (
                                            e.events.on('recalculateContent', A),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', i),
                                            () => {
                                                u(),
                                                    e.events.off('recalculateContent', A),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', i);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, r.useEffect)(() => {
                                if (!m.pending) return;
                                const t = (t) => {
                                        var u;
                                        const a = e.contentRef.current;
                                        if (!a) return;
                                        const r = l.current,
                                            n = c.current;
                                        if (!a || !r || !n) return;
                                        const o = t.screenX - m.offset - r.getBoundingClientRect().x,
                                            s = (o / r.offsetWidth) * (null != (u = e.getContainerSize()) ? u : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(a, s),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            i({ type: 'dragging', thumb: n, thumbOffset: o, contentOffset: s });
                                    },
                                    u = () => {
                                        window.removeEventListener('mousemove', t), E(wa);
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', u),
                                    () => {
                                        window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', u);
                                    }
                                );
                            }, [e, m.offset, m.pending, i, E]);
                        const p = oa((t) => e.applyStepTo(t), d, [e]),
                            f = p[0],
                            F = p[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', F, !0),
                                () => document.removeEventListener('mouseup', F, !0)
                            ),
                            [F],
                        );
                        const D = (e) => {
                            e.target.classList.contains(Ca) || W('highlight');
                        };
                        return n().createElement(
                            'div',
                            { className: C()(Ea, t.base), ref: a, onWheel: e.handleMouseWheel },
                            n().createElement('div', {
                                className: C()(Aa, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ca) || 0 !== e.button || (W('play'), f(da.Next));
                                },
                                onMouseUp: F,
                                ref: o,
                                onMouseEnter: D,
                            }),
                            n().createElement(
                                'div',
                                {
                                    className: C()(fa, t.track),
                                    onMouseDown: (t) => {
                                        const i = c.current;
                                        if (i && 0 === t.button)
                                            if ((W('play'), t.target === i))
                                                E({ pending: !0, offset: t.screenX - i.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const i = c.current,
                                                        a = e.contentRef.current;
                                                    if (!i || !a) return;
                                                    const r = u(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + r * t);
                                                })(t.screenX > i.getBoundingClientRect().x ? da.Prev : da.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: D,
                                },
                                n().createElement('div', { ref: c, className: C()(Fa, t.thumb) }),
                                n().createElement('div', { className: C()(Da, t.rail) }),
                            ),
                            n().createElement('div', {
                                className: C()(pa, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ca) || 0 !== e.button || (W('play'), f(da.Prev));
                                },
                                onMouseUp: F,
                                ref: s,
                                onMouseEnter: D,
                            }),
                        );
                    }),
                    xa = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    ya = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: i,
                        areaClassName: a,
                        classNames: o,
                        scrollClassName: s,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, r.useMemo)(() => {
                                const e = i || {};
                                return Object.assign({}, e, { base: C()(xa.base, e.base) });
                            }, [i]),
                            h = (0, r.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return n().createElement(
                            'div',
                            { className: C()(xa.defaultScroll, u), onWheel: t.handleMouseWheel },
                            n().createElement(
                                'div',
                                { className: C()(xa.defaultScrollArea, a) },
                                n().createElement(Pa, { className: s, api: h, classNames: o }, e),
                            ),
                            n().createElement(Sa, { getStepByRailClick: l, api: t, onDrag: c, classNames: d }),
                        );
                    },
                    Pa = ({ api: e, className: t, classNames: u, children: i }) => (
                        (0, r.useEffect)(() => tt(e.recalculateContent)),
                        n().createElement(
                            'div',
                            { className: C()(xa.base, t) },
                            n().createElement(
                                'div',
                                {
                                    className: C()(xa.wrapper, null == u ? void 0 : u.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                n().createElement(
                                    'div',
                                    { className: C()(xa.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                    i,
                                ),
                            ),
                        )
                    );
                (Pa.Bar = Sa),
                    (Pa.Default = ya),
                    (Pa.SeniorityAwards = ({ api: e, className: t, classNames: u, children: i }) => (
                        (0, r.useEffect)(() => tt(e.recalculateContent)),
                        n().createElement(
                            'div',
                            { className: C()(xa.base, t) },
                            n().createElement(
                                'div',
                                { className: C()(xa.wrapper, null == u ? void 0 : u.wrapper), ref: e.wrapperRef },
                                n().createElement(
                                    'div',
                                    { className: C()(xa.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                    i,
                                ),
                            ),
                        )
                    ));
                const La = ma({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? da.Next : da.Prev),
                    }),
                    Ra = 'VerticalBar_base_f3',
                    Ta = 'VerticalBar_base__nonActive_42',
                    Na = 'VerticalBar_topButton_d7',
                    Ia = 'VerticalBar_bottomButton_06',
                    ka = 'VerticalBar_track_df',
                    Oa = 'VerticalBar_thumb_32',
                    Ma = 'VerticalBar_rail_43',
                    Ua = 'disable',
                    Ha = () => {},
                    Wa = { pending: !1, offset: 0 },
                    za = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    $a = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    Ga = (e, t) => Math.max(20, e.offsetHeight * t),
                    ja = (0, r.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = za, onDrag: i = Ha }) => {
                        const a = (0, r.useRef)(null),
                            o = (0, r.useRef)(null),
                            s = (0, r.useRef)(null),
                            l = (0, r.useRef)(null),
                            c = (0, r.useRef)(null),
                            d = e.stepTimeout || 100,
                            h = (0, r.useState)(Wa),
                            m = h[0],
                            g = h[1],
                            E = (0, r.useCallback)(
                                (e) => {
                                    g(e),
                                        c.current && i({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [i],
                            ),
                            _ = na(() => {
                                const t = c.current,
                                    u = l.current,
                                    i = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(i && r && t && u)) return;
                                const n = Math.min(1, i / r);
                                return (
                                    (t.style.height = `${Ga(u, n)}px`),
                                    t.classList.add(Oa),
                                    a.current &&
                                        (1 === n ? a.current.classList.add(Ta) : a.current.classList.remove(Ta)),
                                    n
                                );
                            }),
                            A = na(() => {
                                const t = l.current,
                                    u = c.current,
                                    i = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(i && t && u && a)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    n = Math.min(1, i / a),
                                    d = Me(0, 1, r / (a - i)),
                                    h = (t.offsetHeight - Ga(t, n)) * d;
                                (u.style.transform = `translateY(${0 | h}px)`),
                                    ((e) => {
                                        if (o.current && s.current && l.current && c.current) {
                                            if (0 === e)
                                                return o.current.classList.add(Ua), void s.current.classList.remove(Ua);
                                            if (
                                                ((t = l.current),
                                                (u = c.current),
                                                e - (t.offsetHeight - u.offsetHeight) >= -0.5)
                                            )
                                                return o.current.classList.remove(Ua), void s.current.classList.add(Ua);
                                            var t, u;
                                            o.current.classList.remove(Ua), s.current.classList.remove(Ua);
                                        }
                                    })(h);
                            }),
                            p = na(() => {
                                $a(e, () => {
                                    _(), A();
                                });
                            });
                        (0, r.useEffect)(() => tt(p)),
                            (0, r.useEffect)(() => {
                                const t = () => {
                                    $a(e, () => {
                                        A();
                                    });
                                };
                                let u = Ha;
                                const i = () => {
                                    u(), (u = tt(p));
                                };
                                return (
                                    e.events.on('recalculateContent', p),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', i),
                                    () => {
                                        u(),
                                            e.events.off('recalculateContent', p),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', i);
                                    }
                                );
                            }, [e]),
                            (0, r.useEffect)(() => {
                                if (!m.pending) return;
                                const t = (t) => {
                                        $a(e, (u) => {
                                            const a = l.current,
                                                r = c.current,
                                                n = e.getContainerSize();
                                            if (!a || !r || !n) return;
                                            const o = t.screenY - m.offset - a.getBoundingClientRect().y,
                                                s = (o / a.offsetHeight) * n;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(u, s),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: u.scrollTop },
                                            }),
                                                i({ type: 'dragging', thumb: r, thumbOffset: o, contentOffset: s });
                                        });
                                    },
                                    u = () => {
                                        window.removeEventListener('mousemove', t), E(Wa);
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', u),
                                    () => {
                                        window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', u);
                                    }
                                );
                            }, [e, m.offset, m.pending, i, E]);
                        const f = oa((t) => e.applyStepTo(t), d, [e]),
                            F = f[0],
                            D = f[1];
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mouseup', D, !0),
                                () => document.removeEventListener('mouseup', D, !0)
                            ),
                            [D],
                        );
                        const w = (e) => {
                            e.target.classList.contains(Ua) || W('highlight');
                        };
                        return n().createElement(
                            'div',
                            { className: C()(Ra, t.base), ref: a, onWheel: e.handleMouseWheel },
                            n().createElement('div', {
                                className: C()(Na, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ua) || 0 !== e.button || (W('play'), F(da.Next));
                                },
                                ref: o,
                                onMouseEnter: w,
                            }),
                            n().createElement(
                                'div',
                                {
                                    className: C()(ka, t.track),
                                    onMouseDown: (t) => {
                                        const i = c.current;
                                        if (i && 0 === t.button)
                                            if ((W('play'), t.target === i))
                                                E({ pending: !0, offset: t.screenY - i.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    c.current &&
                                                        $a(e, (i) => {
                                                            if (!i) return;
                                                            const a = u(e),
                                                                r = e.clampPosition(i, i.scrollTop + a * t);
                                                            e.applyScroll(r);
                                                        });
                                                })(t.screenY > i.getBoundingClientRect().y ? da.Prev : da.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: w,
                                },
                                n().createElement('div', { ref: c, className: t.thumb }),
                                n().createElement('div', { className: C()(Ma, t.rail) }),
                            ),
                            n().createElement('div', {
                                className: C()(Ia, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ua) || 0 !== e.button || (W('play'), F(da.Prev));
                                },
                                onMouseUp: D,
                                ref: s,
                                onMouseEnter: w,
                            }),
                        );
                    }),
                    qa = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Ya = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: i,
                        areaClassName: a,
                        scrollClassName: o,
                        scrollClassNames: s,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const d = (0, r.useMemo)(() => {
                                const e = i || {};
                                return Object.assign({}, e, { base: C()(qa.base, e.base) });
                            }, [i]),
                            h = (0, r.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return n().createElement(
                            'div',
                            { className: C()(qa.defaultScroll, u), onWheel: t.handleMouseWheel },
                            n().createElement(
                                'div',
                                { className: C()(qa.area, a) },
                                n().createElement(Va, { className: o, classNames: s, api: h }, e),
                            ),
                            n().createElement(ja, { getStepByRailClick: l, api: t, onDrag: c, classNames: d }),
                        );
                    },
                    Va = ({ className: e, classNames: t, children: u, api: i }) => (
                        (0, r.useEffect)(() => tt(i.recalculateContent)),
                        n().createElement(
                            'div',
                            { className: C()(qa.base, e), ref: i.wrapperRef, onWheel: i.handleMouseWheel },
                            n().createElement(
                                'div',
                                { className: C()(qa.content, null == t ? void 0 : t.content), ref: i.contentRef },
                                u,
                            ),
                        )
                    );
                Va.Default = Ya;
                const Xa = { Vertical: a, Horizontal: i },
                    Ka = { type: 'idle' };
                'undefined' != typeof Element &&
                    (Element.prototype.matches ||
                        Element.prototype.webkitMatchesSelector ||
                        Element.prototype.mozMatchesSelector ||
                        Element.prototype.msMatchesSelector);
                'undefined' != typeof document && document.documentElement.style,
                    'undefined' != typeof window &&
                        ('ontouchstart' in window || (window.DocumentTouch && (document, window.DocumentTouch))),
                    'undefined' != typeof navigator && navigator.msMaxTouchPoints,
                    'undefined' != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent);
                function Qa(e, t, u, i, a, r, n) {
                    try {
                        var o = e[r](n),
                            s = o.value;
                    } catch (e) {
                        return void u(e);
                    }
                    o.done ? t(s) : Promise.resolve(s).then(i, a);
                }
                function Za(e) {
                    return function () {
                        var t = this,
                            u = arguments;
                        return new Promise(function (i, a) {
                            var r = e.apply(t, u);
                            function n(e) {
                                Qa(r, i, a, n, o, 'next', e);
                            }
                            function o(e) {
                                Qa(r, i, a, n, o, 'throw', e);
                            }
                            n(void 0);
                        });
                    };
                }
                let Ja;
                !(function (e) {
                    (e[(e.Idle = 0)] = 'Idle'),
                        (e[(e.Start = 1)] = 'Start'),
                        (e[(e.Between = 2)] = 'Between'),
                        (e[(e.End = 3)] = 'End');
                })(Ja || (Ja = {}));
                const er = (e) => {
                        const t = (0, r.useState)(Ja.Idle),
                            u = t[0],
                            i = t[1],
                            a = e.animationScroll,
                            n = e.getContainerSize,
                            o = e.getWrapperSize,
                            s = e.events,
                            l = (0, r.useCallback)(() => {
                                const e = a.scrollPosition.get(),
                                    t = n() - o();
                                switch (!0) {
                                    case !t:
                                        return i(Ja.Idle);
                                    case e <= 0:
                                        return i(Ja.Start);
                                    case e >= t:
                                        return i(Ja.End);
                                    default:
                                        i(Ja.Between);
                                }
                            }, [a.scrollPosition, n, o]);
                        return (
                            (0, r.useEffect)(
                                () => (
                                    (function () {
                                        var e = Za(function* () {
                                            yield tt(l);
                                        });
                                        return function () {
                                            return e.apply(this, arguments);
                                        };
                                    })()(),
                                    s.on('change', l),
                                    () => s.off('change', l)
                                ),
                                [s, l],
                            ),
                            (0, r.useEffect)(() => {
                                const e = (function () {
                                    var e = Za(function* () {
                                        yield (0, V.Eu)(),
                                            yield new Promise((e) => {
                                                requestAnimationFrame(() => {
                                                    requestAnimationFrame(() => {
                                                        e();
                                                    });
                                                });
                                            }),
                                            l();
                                    });
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })();
                                return (
                                    engine.on('clientResized', e),
                                    () => {
                                        engine.off('clientResized', e);
                                    }
                                );
                            }, [l]),
                            u
                        );
                    },
                    tr = 'ScrollProgressionArea_progressContainer_48',
                    ur = 'ScrollProgressionArea_shadow_15',
                    ir = 'ScrollProgressionArea_shadow__left_f6',
                    ar = 'ScrollProgressionArea_shadow__left_small_73',
                    rr = 'ScrollProgressionArea_shadow__right_8a',
                    nr = 'ScrollProgressionArea_shadow__right_small_44',
                    or = 'ScrollProgressionArea_scrollWrap_4b',
                    sr = 'ScrollProgressionArea_progressWidthWrap_fc',
                    lr = 'ScrollProgressionArea_progressContainer__large_1f',
                    cr = ({ maxItemsCount: e, step: t, children: u }) => {
                        const i = x().mediaSize,
                            a = ga(),
                            o = er(Object.assign({}, a)),
                            l = (0, r.useMemo)(
                                () => ((e, t, u) => (e < 1920 ? (140 / u) * t : (150 / u) * t))(i, e, t),
                                [i, e, t],
                            ),
                            c = l < 800;
                        return (
                            (function (e, t) {
                                const u = e.contentRef,
                                    i = e.wrapperRef,
                                    a = e.scrollPosition,
                                    n = e.clampPosition,
                                    o = e.animationScroll,
                                    l = e.events,
                                    c = (0, r.useState)(Ka),
                                    d = c[0],
                                    h = c[1];
                                (0, r.useEffect)(() => {
                                    const e = u.current;
                                    e && (e.style.cursor = 'dragging' === d.type ? 'move' : 'grab');
                                }, [u, d.type]),
                                    (0, r.useEffect)(() => {
                                        if ('dragging' !== d.type) return;
                                        const e = s.O.client.events.mouse.move(([e, r]) => {
                                                const s = u.current,
                                                    l = i.current;
                                                if (!s || !l) return;
                                                if ('inside' === r && e.clientX < 0) return;
                                                const c = 'inside' === r ? e.clientX : e.clientX - l.offsetLeft,
                                                    h = d.positionFrom - c,
                                                    m = d.previousScrollPosition + h;
                                                a.start(
                                                    Object.assign(
                                                        {
                                                            scrollPosition: n(s, m),
                                                            from: { scrollPosition: o.scrollPosition.get() },
                                                        },
                                                        t && { config: t },
                                                    ),
                                                );
                                            }),
                                            r = s.O.client.events.mouse.up(function () {
                                                h({ type: 'scrollingToEnd' });
                                            });
                                        return () => {
                                            e(), r();
                                        };
                                    }, [o.scrollPosition, n, u, d, a, i, t]),
                                    (0, r.useEffect)(() => {
                                        if ('scrollingToEnd' !== d.type) return;
                                        const e = () => {
                                            h(Ka);
                                        };
                                        return o.scrollPosition.idle && e(), l.on('rest', e), () => l.off('rest', e);
                                    }, [o.scrollPosition, d.type, l]),
                                    (0, r.useEffect)(() => {
                                        const e = u.current;
                                        if (!e) return;
                                        const t = (e) => {
                                            h({
                                                type: 'dragging',
                                                positionFrom: e.screenX,
                                                previousScrollPosition: o.scrollPosition.get(),
                                            });
                                        };
                                        return (
                                            e.addEventListener('mousedown', t),
                                            () => e.removeEventListener('mousedown', t)
                                        );
                                    }, [o.scrollPosition, u]);
                            })(Object.assign({}, a)),
                            n().createElement(
                                'div',
                                { className: C()(tr, !c && lr) },
                                n().createElement(
                                    'div',
                                    { className: o > Ja.Start ? C()(ur, ir) : '' },
                                    n().createElement('div', { className: C()(ur, ar) }),
                                ),
                                n().createElement(
                                    Xa.Horizontal.Area.Default,
                                    { api: a, className: or },
                                    n().createElement(
                                        'div',
                                        {
                                            className: C()(sr),
                                            style: {
                                                cursor: o === Ja.Idle ? 'default' : void 0,
                                                width: `${l + 110}rem`,
                                            },
                                        },
                                        n().createElement(
                                            'div',
                                            { className: C()(tr, !c && lr), style: { width: `${l}rem` } },
                                            u,
                                        ),
                                    ),
                                ),
                                n().createElement(
                                    'div',
                                    { className: o && o < Ja.End ? C()(ur, rr) : '' },
                                    n().createElement('div', { className: C()(ur, nr) }),
                                ),
                            )
                        );
                    },
                    dr = Object.assign({}, ei, {
                        delta: { duration: 1e3, delay: 2e3 },
                        line: { duration: 1e3, delay: 2e3 },
                    }),
                    hr = (0, Q.Pi)(() => {
                        const e = Ke(),
                            t = e.model,
                            u = e.controls,
                            i = t.root.get().receivedItemsCount,
                            a = t.computes.getProgressParams(),
                            r = a.value,
                            o = a.deltaFrom,
                            s = a.maxItemsCount,
                            l = t.computes.isProgressAnimationEnded();
                        return n().createElement(
                            'div',
                            { className: C()(ui, l && ii) },
                            n().createElement(
                                'div',
                                { className: oi },
                                n().createElement(Ii, { maxItemsCount: s, receivedItemsCount: i }),
                            ),
                            n().createElement(
                                cr,
                                { maxItemsCount: s, step: t.computes.getConfig().progressionStep },
                                n().createElement(
                                    'div',
                                    { className: si },
                                    n().createElement(aa, { position: ia.Top, maxItemsCount: s }),
                                    n().createElement(
                                        'div',
                                        { className: ai },
                                        n().createElement('div', { className: ri }),
                                        n().createElement(
                                            xi,
                                            null,
                                            n().createElement(
                                                'div',
                                                { className: ni },
                                                n().createElement(ti, {
                                                    value: r,
                                                    deltaFrom: o,
                                                    maxValue: s,
                                                    animationSettings: dr,
                                                    onEndAnimation: u.setProgressItemsReceived,
                                                    size: Du.Big,
                                                }),
                                            ),
                                        ),
                                    ),
                                    n().createElement(aa, { maxItemsCount: s, position: ia.Bottom }),
                                ),
                            ),
                        );
                    }),
                    mr = 'CompletedState_base_c8',
                    gr = 'CompletedState_icon_07',
                    Er = 'CompletedState_base__animated_4c',
                    _r = 'CompletedState_base__completed_f9',
                    Ar = 'CompletedState_glowWrapper_a6',
                    pr = 'CompletedState_glow_b5',
                    fr = 'CompletedState_title_3e',
                    Fr = (0, Q.Pi)(({ hasAnimation: e, isCompletedState: t }) =>
                        n().createElement(
                            'div',
                            { className: C()(mr, e && Er, t && _r) },
                            n().createElement('div', { className: Ar }, n().createElement('div', { className: pr })),
                            n().createElement('div', { className: gr }),
                            n().createElement(
                                'div',
                                { className: fr },
                                R.strings.collections.footer.collectionCompleted(),
                            ),
                        ),
                    );
                var Dr;
                !(function (e) {
                    (e[(e.ActiveStatic = 0)] = 'ActiveStatic'),
                        (e[(e.ChangeAnimate = 1)] = 'ChangeAnimate'),
                        (e[(e.CompletedStatic = 2)] = 'CompletedStatic');
                })(Dr || (Dr = {}));
                const Cr = (0, Q.Pi)(() => {
                        var e, t;
                        const u = Ke().model,
                            i = u.computes.isProgressAnimationEnded(),
                            a = null != (e = Kt(i)) ? e : i,
                            o = (0, r.useState)(i ? Dr.CompletedStatic : Dr.ActiveStatic),
                            s = o[0],
                            l = o[1];
                        (0, r.useEffect)(() => {
                            if (i !== a)
                                return (
                                    l(Dr.ChangeAnimate),
                                    W(R.sounds.collection_done()),
                                    ct(() => {
                                        l(Dr.CompletedStatic);
                                    }, 840)
                                );
                        }, [a, i]);
                        const c = [Dr.ActiveStatic, Dr.ChangeAnimate].includes(s),
                            d = [Dr.ChangeAnimate, Dr.CompletedStatic].includes(s),
                            h = u.computes.getProgressParams().value,
                            m = null != (t = Kt(h)) ? t : h;
                        return (
                            (0, r.useEffect)(() => {
                                m !== h && W(R.sounds.collection_progress_bar());
                            }, [m, h]),
                            n().createElement(
                                'div',
                                { className: pu },
                                d &&
                                    n().createElement(
                                        'div',
                                        { className: fu },
                                        n().createElement(Fr, {
                                            hasAnimation: s === Dr.ChangeAnimate,
                                            isCompletedState: s === Dr.CompletedStatic,
                                        }),
                                    ),
                                c && n().createElement(hr, null),
                            )
                        );
                    }),
                    wr = n().memo;
                const Br = {
                        base: 'HorizontalTabs_base_92',
                        tab: 'HorizontalTabs_tab_ca',
                        tab__medium: 'HorizontalTabs_tab__medium_88',
                        tab__active: 'HorizontalTabs_tab__active_3e',
                        tab__nonInteractive: 'HorizontalTabs_tab__nonInteractive_ce',
                        state: 'HorizontalTabs_state_3d',
                        highlight: 'HorizontalTabs_highlight_9e',
                        border: 'HorizontalTabs_border_08',
                        border__left: 'HorizontalTabs_border__left_64',
                        border__right: 'HorizontalTabs_border__right_45',
                        divider: 'HorizontalTabs_divider_6f',
                        title: 'HorizontalTabs_title_10',
                        notification: 'HorizontalTabs_notification_89',
                        notification__symbol: 'HorizontalTabs_notification__symbol_8b',
                        notification__small: 'HorizontalTabs_notification__small_7c',
                        notification__large: 'HorizontalTabs_notification__large_a2',
                        notification__dot: 'HorizontalTabs_notification__dot_d7',
                        notification__medium: 'HorizontalTabs_notification__medium_19',
                    },
                    vr = { mouseEnter: 'highlight', click: 'play' },
                    br = (e, { active: t, enableInteractiveActiveTab: u = !1 }) => !!u || e !== t,
                    Sr = wr(function (e) {
                        const t = e.active,
                            u = e.tabs,
                            i = e.onClick,
                            a = e.onMouseEnter,
                            r = e.onMouseLeave,
                            o = e.className,
                            s = e.classNames,
                            l = e.sounds,
                            c = void 0 === l ? vr : l,
                            d = (t) => () => {
                                br(t, e) && (c.click && W(c.click), null == i || i(t));
                            },
                            h = (t) => () => {
                                br(t, e) && (c.mouseEnter && W(c.mouseEnter), null == a || a(t));
                            },
                            m = (t) => () => {
                                br(t, e) && (c.mouseLeave && W(c.mouseLeave), null == r || r(t));
                            };
                        return n().createElement(
                            'div',
                            { className: C()(Br.base, o) },
                            u.map(({ id: i, title: a, notification: r }, o) => {
                                var l;
                                return n().createElement(
                                    'div',
                                    {
                                        className: C()(
                                            Br.tab,
                                            i === t && C()(Br.tab__active, null == s ? void 0 : s.activeTab),
                                            !br(i, e) && Br.tab__nonInteractive,
                                            null == s ? void 0 : s.tab,
                                        ),
                                        key: i,
                                        onClick: d(i),
                                        onMouseEnter: h(i),
                                        onMouseLeave: m(i),
                                    },
                                    ((e, t) => !((e, t) => e.length - 1 === t)(e, t))(u, o) &&
                                        n().createElement('div', {
                                            className: C()(Br.divider, null == s ? void 0 : s.divider),
                                        }),
                                    n().createElement(
                                        'div',
                                        { className: C()(Br.state, null == s ? void 0 : s.state) },
                                        n().createElement('div', {
                                            className: C()(Br.highlight, null == s ? void 0 : s.highlight),
                                        }),
                                        n().createElement('div', {
                                            className: C()(
                                                Br.border,
                                                Br.border__left,
                                                null == s ? void 0 : s.border,
                                                null == s ? void 0 : s.borderLeft,
                                            ),
                                        }),
                                        n().createElement('div', {
                                            className: C()(
                                                Br.border,
                                                Br.border__right,
                                                null == s ? void 0 : s.border,
                                                null == s ? void 0 : s.borderRight,
                                            ),
                                        }),
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: C()(Br.title, null == s ? void 0 : s.title) },
                                        a,
                                    ),
                                    void 0 !== r &&
                                        n().createElement(
                                            'div',
                                            {
                                                className: C()(
                                                    Br.notification,
                                                    Br[`notification__${r.type}`],
                                                    Br[`notification__${null != (l = r.size) ? l : 'medium'}`],
                                                    null == s ? void 0 : s.notification,
                                                ),
                                            },
                                            'dot' !== r.type && r.value,
                                        ),
                                );
                            }),
                        );
                    }),
                    xr = {
                        base: 'Header_base_b2',
                        fadeIn: 'Header_fadeIn_c6',
                        overhead: 'Header_overhead_10',
                        base__ultraSize: 'Header_base__ultraSize_3d',
                        title: 'Header_title_26',
                        seasonText: 'Header_seasonText_1d',
                        tabs: 'Header_tabs_b6',
                        slideUp: 'Header_slideUp_61',
                        fadeOut: 'Header_fadeOut_30',
                        raysAppearance: 'Header_raysAppearance_8d',
                        rotate: 'Header_rotate_9c',
                        slideUpWithScale: 'Header_slideUpWithScale_d8',
                    },
                    yr = R.strings.collections.header,
                    Pr = (0, Q.Pi)(({ selectTab: e }) => {
                        const t = Ke().model,
                            u = t.displayCollection.get(),
                            i = t.computes.getTabs(),
                            a = x(),
                            r = a.remScreenWidth,
                            o = a.remScreenHeight;
                        return n().createElement(
                            'div',
                            { className: C()(xr.base, xr[`base__${We(r, o)}`]) },
                            n().createElement('div', { className: xr.overhead }, yr.overhead()),
                            n().createElement(
                                'div',
                                { className: xr.title },
                                $e(R.strings, `collection_${u}.collection.name`),
                            ),
                            i && i.length > 1
                                ? n().createElement(Sr, {
                                      className: xr.tabs,
                                      active: u,
                                      tabs: i,
                                      onClick: (t) => e(t),
                                  })
                                : n().createElement(
                                      'div',
                                      { className: xr.seasonText },
                                      $e(R.strings, `collection_${u}.collection.season`),
                                  ),
                        );
                    }),
                    Lr = (0, Q.Pi)(() => {
                        const e = Ke(),
                            t = e.model,
                            u = e.controls,
                            i = t.root.get(),
                            a = i.backButtonText,
                            o = i.isError,
                            s = (0, r.useState)(!1),
                            l = s[0],
                            c = s[1],
                            d = (0, r.useState)(!0),
                            h = d[0],
                            m = d[1],
                            g = t.displayCollection.get(),
                            E = (0, Z.useSpring)({
                                from: { contentOpacity: 0 },
                                contentOpacity: l ? 0 : 1,
                                config: { duration: 300 },
                                onResolve: () => {
                                    c(!1);
                                },
                            }).contentOpacity;
                        var _;
                        return (
                            f(u.viewLoaded),
                            (_ = u.close),
                            K(Y.n.ESCAPE, _),
                            n().createElement(
                                'div',
                                { className: Qe },
                                n().createElement('div', { className: et }),
                                g !== qe &&
                                    !o &&
                                    n().createElement(
                                        Z.animated.div,
                                        { style: { opacity: E.to({ output: [0, 1] }) }, key: g },
                                        n().createElement(
                                            it,
                                            { hasAnimation: h },
                                            n().createElement(
                                                'div',
                                                { className: Ze },
                                                n().createElement(du, null),
                                                n().createElement(Cr, null),
                                            ),
                                        ),
                                    ),
                                o && n().createElement(Au, null),
                                n().createElement(Pr, {
                                    selectTab: (e) => {
                                        c(!0), h && m(!1), u.selectTab(e);
                                    },
                                }),
                                n().createElement(
                                    'div',
                                    { className: Je },
                                    n().createElement(q, {
                                        caption: R.strings.menu.viewHeader.backBtn.label(),
                                        goto: a,
                                        side: 'left',
                                        type: 'back',
                                        onClick: u.close,
                                    }),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    U().render(
                        n().createElement(
                            Xe,
                            null,
                            n().createElement(O, { className: H }, n().createElement(Lr, null)),
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
        (__webpack_require__.O = (e, t, u, i) => {
            if (!t) {
                var a = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [t, u, i] = deferred[s], r = !0, n = 0; n < t.length; n++)
                        (!1 & i || a >= i) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[n]))
                            ? t.splice(n--, 1)
                            : ((r = !1), i < a && (a = i));
                    if (r) {
                        deferred.splice(s--, 1);
                        var o = u();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            i = i || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > i; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [t, u, i];
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
        (__webpack_require__.j = 486),
        (() => {
            var e = { 486: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var i,
                        a,
                        [r, n, o] = u,
                        s = 0;
                    if (r.some((t) => 0 !== e[t])) {
                        for (i in n) __webpack_require__.o(n, i) && (__webpack_require__.m[i] = n[i]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (t && t(u); s < r.length; s++)
                        (a = r[s]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(l);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [314], () => __webpack_require__(407));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
