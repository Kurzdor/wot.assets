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
                u.r(t), u.d(t, { mouse: () => s, onResize: () => r });
                var i = u(472),
                    a = u(176);
                const r = (0, i.E)('clientResized'),
                    o = { down: (0, i.E)('mousedown'), up: (0, i.E)('mouseup'), move: (0, i.E)('mousemove') };
                const s = (function () {
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
                                        s = o[t]((e) => u([e, 'outside']));
                                    function l(e) {
                                        u([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, l),
                                        i(),
                                        () => {
                                            a &&
                                                (s(),
                                                window.removeEventListener(r, l),
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
                        graphicsQuality: () => o,
                    });
                var i = u(527);
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
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
                        addModelObserver: () => h,
                        addPreloadTexture: () => s,
                        children: () => i,
                        displayStatus: () => a.W,
                        displayStatusIs: () => v,
                        events: () => r.U,
                        extraSize: () => S,
                        forceTriggerMouseMove: () => D,
                        freezeTextureBeforeResize: () => E,
                        getBrowserTexturePath: () => n,
                        getDisplayStatus: () => B,
                        getScale: () => A,
                        getSize: () => g,
                        getViewGlobalPosition: () => m,
                        isEventHandled: () => C,
                        isFocused: () => F,
                        pxToRem: () => p,
                        remToPx: () => _,
                        resize: () => c,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => f,
                        setEventHandled: () => w,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => b,
                    });
                var i = u(722),
                    a = u(112),
                    r = u(538),
                    o = u(566);
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function n(e, t, u, i = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, u, i);
                }
                function h(e, t, u) {
                    return viewEnv.addDataChangedCallback(e, t, u);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function g(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function c(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function m(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: _(t.x), y: _(t.y) };
                }
                function E() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function A() {
                    return viewEnv.getScale();
                }
                function p(e) {
                    return viewEnv.pxToRem(e);
                }
                function _(e) {
                    return viewEnv.remToPx(e);
                }
                function f(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function F() {
                    return viewEnv.isFocused();
                }
                function w() {
                    return viewEnv.setEventHandled();
                }
                function C() {
                    return viewEnv.isEventHandled();
                }
                function D() {
                    viewEnv.forceTriggerMouseMove();
                }
                function B() {
                    return viewEnv.getShowingStatus();
                }
                const v = Object.keys(a.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === a.W[t]), e),
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
                    b = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            566: (e, t, u) => {
                'use strict';
                u.d(t, { qP: () => n });
                const i = ['args'];
                const a = 2,
                    r = 16,
                    o = 32,
                    s = 64,
                    l = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                o = (function (e, t) {
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
                                      Object.assign({ __Type: u, type: e }, o, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: u, type: e });
                        var a;
                    },
                    n = {
                        close(e) {
                            l('popover' === e ? a : o);
                        },
                        minimize() {
                            l(s);
                        },
                        move(e) {
                            l(r, { isMouseEvent: !0, on: e });
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
                u.d(t, { B3: () => n, Z5: () => o, B0: () => l, ry: () => _, Sy: () => F });
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
                const o = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    s = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, u) => userLocale.getTimeFormat(e, t, void 0 === u || u),
                        getTimeString: (e, t, u) => userLocale.getTimeString(e, t, void 0 === u || u),
                    };
                let l;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(l || (l = {}));
                const n = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    h = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    g = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var c = u(521),
                    m = u(138);
                const E = ['args'];
                function A(e, t, u, i, a, r, o) {
                    try {
                        var s = e[r](o),
                            l = s.value;
                    } catch (e) {
                        return void u(e);
                    }
                    s.done ? t(l) : Promise.resolve(l).then(i, a);
                }
                const p = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    _ = (function () {
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
                                        function o(e) {
                                            A(r, i, a, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            A(r, i, a, o, s, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    f = (e, t) => {
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
                    F = () => f(l.CLOSE),
                    w = (e, t) => {
                        e.keyCode === c.n.ESCAPE && t();
                    };
                var C = u(572);
                const D = a.instance,
                    B = {
                        DataTracker: r.Z,
                        ViewModel: C.Z,
                        ViewEventType: l,
                        NumberFormatType: n,
                        RealFormatType: h,
                        TimeFormatType: d,
                        DateFormatType: g,
                        makeGlobalBoundingBox: p,
                        sendMoveEvent: (e) => f(l.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: F,
                        sendClosePopOverEvent: () => f(l.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, u = 0) => {
                            f(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                        },
                        sendShowPopOverEvent: (e, t, u, i, a = R.invalid('resId'), r) => {
                            const o = m.O.view.getViewGlobalPosition(),
                                s = u.getBoundingClientRect(),
                                n = s.x,
                                h = s.y,
                                d = s.width,
                                g = s.height,
                                c = {
                                    x: m.O.view.pxToRem(n) + o.x,
                                    y: m.O.view.pxToRem(h) + o.y,
                                    width: m.O.view.pxToRem(d),
                                    height: m.O.view.pxToRem(g),
                                };
                            f(l.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: i || R.invalid('resId'),
                                targetID: a,
                                direction: t,
                                bbox: p(c),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => w(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            w(e, F);
                        },
                        handleViewEvent: f,
                        onBindingsReady: _,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(l.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(l.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(l.POP_OVER),
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
                        ClickOutsideManager: D,
                        SystemLocale: o,
                        UserLocale: s,
                    };
                window.ViewEnvHelper = B;
            },
            980: (e, t, u) => {
                'use strict';
                var i = u(179),
                    a = u.n(i);
                const r = (e, t, u) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && u.extraLarge) ||
                          (t.largeHeight && u.large) ||
                          (t.mediumHeight && u.medium) ||
                          (t.smallHeight && u.small) ||
                          (t.extraSmallHeight && u.extraSmall)
                            ? e
                            : null
                        : e;
                var o = u(138);
                const s = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var l;
                function n(e, t, u) {
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
                })(l || (l = {}));
                const h = o.O.client.getSize('rem'),
                    d = h.width,
                    g = h.height,
                    c = Object.assign({ width: d, height: g }, n(d, g, s)),
                    m = (0, i.createContext)(c),
                    E = ['children'];
                const A = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                i,
                                a = {},
                                r = Object.keys(e);
                            for (i = 0; i < r.length; i++) (u = r[i]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, E);
                    const a = (0, i.useContext)(m),
                        o = a.extraLarge,
                        s = a.large,
                        l = a.medium,
                        n = a.small,
                        h = a.extraSmall,
                        d = a.extraLargeWidth,
                        g = a.largeWidth,
                        c = a.mediumWidth,
                        A = a.smallWidth,
                        p = a.extraSmallWidth,
                        _ = a.extraLargeHeight,
                        f = a.largeHeight,
                        F = a.mediumHeight,
                        w = a.smallHeight,
                        C = a.extraSmallHeight,
                        D = { extraLarge: _, large: f, medium: F, small: w, extraSmall: C };
                    if (u.extraLarge || u.large || u.medium || u.small || u.extraSmall) {
                        if (u.extraLarge && o) return t;
                        if (u.large && s) return t;
                        if (u.medium && l) return t;
                        if (u.small && n) return t;
                        if (u.extraSmall && h) return t;
                    } else {
                        if (u.extraLargeWidth && d) return r(t, u, D);
                        if (u.largeWidth && g) return r(t, u, D);
                        if (u.mediumWidth && c) return r(t, u, D);
                        if (u.smallWidth && A) return r(t, u, D);
                        if (u.extraSmallWidth && p) return r(t, u, D);
                        if (
                            !(u.extraLargeWidth || u.largeWidth || u.mediumWidth || u.smallWidth || u.extraSmallWidth)
                        ) {
                            if (u.extraLargeHeight && _) return t;
                            if (u.largeHeight && f) return t;
                            if (u.mediumHeight && F) return t;
                            if (u.smallHeight && w) return t;
                            if (u.extraSmallHeight && C) return t;
                        }
                    }
                    return null;
                };
                A.defaultProps = {
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
                (0, i.memo)(A);
                const p = (e) => {
                        const t = (0, i.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    _ = (0, i.memo)(({ children: e }) => {
                        const t = (0, i.useContext)(m),
                            u = (0, i.useState)(t),
                            r = u[0],
                            l = u[1],
                            h = (0, i.useCallback)((e, t) => {
                                const u = o.O.view.pxToRem(e),
                                    i = o.O.view.pxToRem(t);
                                l(Object.assign({ width: u, height: i }, n(u, i, s)));
                            }, []);
                        p(() => {
                            engine.on('clientResized', h);
                        }),
                            (0, i.useEffect)(() => () => engine.off('clientResized', h), [h]);
                        const d = (0, i.useMemo)(() => Object.assign({}, r), [r]);
                        return a().createElement(m.Provider, { value: d }, e);
                    });
                var f = u(483),
                    F = u.n(f),
                    w = u(926),
                    C = u.n(w);
                let D, B, v;
                !(function (e) {
                    (e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = s.small.width)] = 'Small'),
                        (e[(e.Medium = s.medium.width)] = 'Medium'),
                        (e[(e.Large = s.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge');
                })(D || (D = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.width)] = 'Small'),
                            (e[(e.Medium = s.medium.width)] = 'Medium'),
                            (e[(e.Large = s.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge');
                    })(B || (B = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = s.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.height)] = 'Small'),
                            (e[(e.Medium = s.medium.height)] = 'Medium'),
                            (e[(e.Large = s.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.height)] = 'ExtraLarge');
                    })(v || (v = {}));
                const S = () => {
                        const e = (0, i.useContext)(m),
                            t = e.width,
                            u = e.height,
                            a = ((e) => {
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
                            r = ((e) => {
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
                            o = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return v.ExtraLarge;
                                    case e.largeHeight:
                                        return v.Large;
                                    case e.mediumHeight:
                                        return v.Medium;
                                    case e.smallHeight:
                                        return v.Small;
                                    case e.extraSmallHeight:
                                        return v.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), v.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: r, mediaHeight: o, remScreenWidth: t, remScreenHeight: u };
                    },
                    b = ['children', 'className'];
                function x() {
                    return (
                        (x =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var i in u) Object.prototype.hasOwnProperty.call(u, i) && (e[i] = u[i]);
                                }
                                return e;
                            }),
                        x.apply(this, arguments)
                    );
                }
                const L = {
                        [B.ExtraSmall]: '',
                        [B.Small]: C().SMALL_WIDTH,
                        [B.Medium]: `${C().SMALL_WIDTH} ${C().MEDIUM_WIDTH}`,
                        [B.Large]: `${C().SMALL_WIDTH} ${C().MEDIUM_WIDTH} ${C().LARGE_WIDTH}`,
                        [B.ExtraLarge]: `${C().SMALL_WIDTH} ${C().MEDIUM_WIDTH} ${C().LARGE_WIDTH} ${C().EXTRA_LARGE_WIDTH}`,
                    },
                    T = {
                        [v.ExtraSmall]: '',
                        [v.Small]: C().SMALL_HEIGHT,
                        [v.Medium]: `${C().SMALL_HEIGHT} ${C().MEDIUM_HEIGHT}`,
                        [v.Large]: `${C().SMALL_HEIGHT} ${C().MEDIUM_HEIGHT} ${C().LARGE_HEIGHT}`,
                        [v.ExtraLarge]: `${C().SMALL_HEIGHT} ${C().MEDIUM_HEIGHT} ${C().LARGE_HEIGHT} ${C().EXTRA_LARGE_HEIGHT}`,
                    },
                    P = {
                        [D.ExtraSmall]: '',
                        [D.Small]: C().SMALL,
                        [D.Medium]: `${C().SMALL} ${C().MEDIUM}`,
                        [D.Large]: `${C().SMALL} ${C().MEDIUM} ${C().LARGE}`,
                        [D.ExtraLarge]: `${C().SMALL} ${C().MEDIUM} ${C().LARGE} ${C().EXTRA_LARGE}`,
                    },
                    y = (e) => {
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
                            })(e, b);
                        const r = S(),
                            o = r.mediaWidth,
                            s = r.mediaHeight,
                            l = r.mediaSize;
                        return a().createElement('div', x({ className: F()(u, L[o], T[s], P[l]) }, i), t);
                    },
                    O = ['children'];
                const M = (e) => {
                    let t = e.children,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var u,
                                i,
                                a = {},
                                r = Object.keys(e);
                            for (i = 0; i < r.length; i++) (u = r[i]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                            return a;
                        })(e, O);
                    return a().createElement(_, null, a().createElement(y, u, t));
                };
                var U = u(493),
                    I = u.n(U);
                const k = 'AwardsView_base_c5';
                function N(e) {
                    engine.call('PlaySound', e);
                }
                const H = {
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
                function W() {
                    return (
                        (W =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var i in u) Object.prototype.hasOwnProperty.call(u, i) && (e[i] = u[i]);
                                }
                                return e;
                            }),
                        W.apply(this, arguments)
                    );
                }
                class $ extends a().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && N(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && N(this.props.soundClick);
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
                            r = e.side,
                            o = e.type,
                            s = e.classNames,
                            l = e.onMouseEnter,
                            n = e.onMouseLeave,
                            h = e.onMouseDown,
                            d = e.onMouseUp,
                            g =
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
                            c = F()(H.base, H[`base__${o}`], H[`base__${r}`], null == s ? void 0 : s.base),
                            m = F()(H.icon, H[`icon__${o}`], H[`icon__${r}`], null == s ? void 0 : s.icon),
                            E = F()(H.glow, null == s ? void 0 : s.glow),
                            A = F()(H.caption, H[`caption__${o}`], null == s ? void 0 : s.caption),
                            p = F()(H.goto, null == s ? void 0 : s.goto);
                        return a().createElement(
                            'div',
                            W(
                                {
                                    className: c,
                                    onMouseEnter: this._onMouseEnter(l),
                                    onMouseLeave: this._onMouseLeave(n),
                                    onMouseDown: this._onMouseDown(h),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: u,
                                },
                                g,
                            ),
                            'info' !== o && a().createElement('div', { className: H.shine }),
                            a().createElement('div', { className: m }, a().createElement('div', { className: E })),
                            a().createElement('div', { className: A }, t),
                            i && a().createElement('div', { className: p }, i),
                        );
                    }
                }
                $.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var q = u(521),
                    j = u(364);
                const Y = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function z(e = q.n.NONE, t = Y, u = !1) {
                    (0, i.useEffect)(() => {
                        if (e !== q.n.NONE)
                            return (
                                window.addEventListener('keydown', i, u),
                                () => {
                                    window.removeEventListener('keydown', i, u);
                                }
                            );
                        function i(i) {
                            if (i.keyCode === e) {
                                if (o.O.view.isEventHandled()) return;
                                o.O.view.setEventHandled(), t(i), u && i.stopPropagation();
                            }
                        }
                    }, [t, e, u]);
                }
                function V() {
                    !(function (e = q.n.ESCAPE) {
                        z(e, j.Sy, !0);
                    })(q.n.ESCAPE);
                }
                var X = u(515);
                let K, Q, Z, J, ee, te, ue;
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
                        (e.CosmicLootboxCommon = 'cosmic_2024_2'),
                        (e.RacesPoint = 'races_point');
                })(K || (K = {})),
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
                    })(Q || (Q = {})),
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
                    })(Z || (Z = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(J || (J = {})),
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
                    })(ee || (ee = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(te || (te = {})),
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
                    })(ue || (ue = {}));
                let ie;
                !(function (e) {
                    (e.Small = 'small'), (e.Big = 'big');
                })(ie || (ie = {}));
                const ae = (e, t) => (e >= 2560 && t >= 1377 ? 'ultraSize' : ''),
                    re = (e, t) => {
                        let u = e;
                        const i = t.split('.');
                        for (let e = 0; e < i.length; e++) {
                            if (!u) return '';
                            if (('string' != typeof u && (u = u.$dyn(i[e])), 'string' == typeof u)) return u;
                        }
                        return '';
                    };
                class oe extends a().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = j.B3.GOLD;
                        else e = j.B3.INTEGRAL;
                        const t = j.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                oe.defaultProps = { format: 'integral' };
                const se = [
                        K.Items,
                        K.Equipment,
                        K.Xp,
                        K.XpFactor,
                        K.Blueprints,
                        K.BlueprintsAny,
                        K.Goodies,
                        K.Berths,
                        K.Slots,
                        K.Tokens,
                        K.CrewSkins,
                        K.CrewBooks,
                        K.Customizations,
                        K.CreditsFactor,
                        K.TankmenXp,
                        K.TankmenXpFactor,
                        K.FreeXpFactor,
                        K.BattleToken,
                        K.PremiumUniversal,
                        K.NaturalCover,
                        K.BpCoin,
                        K.BattlePassSelectToken,
                        K.BattlaPassFinalAchievement,
                        K.BattleBadge,
                        K.BonusX5,
                        K.CrewBonusX3,
                        K.NewYearFillers,
                        K.NewYearInvoice,
                        K.EpicSelectToken,
                        K.Comp7TokenWeeklyReward,
                        K.Comp7TokenCouponReward,
                        K.BattleBoosterGift,
                        K.CosmicLootboxCommon,
                        K.CosmicLootboxSilver,
                    ],
                    le = [K.Gold, K.Credits, K.Crystal, K.FreeXp],
                    ne = [K.BattlePassPoints, K.RacesPoint],
                    he = [K.PremiumPlus, K.Premium],
                    de = (e) =>
                        se.includes(e)
                            ? J.MULTI
                            : le.includes(e)
                              ? J.CURRENCY
                              : ne.includes(e)
                                ? J.NUMBER
                                : he.includes(e)
                                  ? J.PREMIUM_PLUS
                                  : J.STRING,
                    ge = ['engravings', 'backgrounds'],
                    ce = ['engraving', 'background'],
                    me = (e, t = Z.Small) => {
                        const u = e.name,
                            i = e.type,
                            a = e.value,
                            r = e.icon,
                            o = e.item,
                            s = e.dogTagType,
                            l = ((e) => {
                                switch (e) {
                                    case Z.S600x450:
                                        return 'c_600x450';
                                    case Z.S400x300:
                                        return 'c_400x300';
                                    case Z.S296x222:
                                        return 'c_296x222';
                                    case Z.S232x174:
                                        return 'c_232x174';
                                    case Z.Big:
                                        return 'c_80x80';
                                    case Z.Small:
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
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${o}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${t}.${r}`;
                            case 'tokens':
                            case 'battleToken':
                                return ((e, t) => {
                                    switch (t) {
                                        case Z.Big:
                                            return e.iconBig.replace('..', 'img://gui');
                                        case Z.Small:
                                            return e.iconSmall.replace('..', 'img://gui');
                                        default:
                                            return `R.images.gui.maps.icons.quests.bonuses.${t}.${e.icon}`;
                                    }
                                })(e, t);
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
                                    const i = ge[e];
                                    if (i) {
                                        const a = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(i),
                                            r = a.$dyn(u);
                                        return r ? `${r}` : `${a.$dyn(ce[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(s, t, r);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${l}.${r}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${l}.${r}`;
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
                                return `R.images.gui.maps.icons.collectionItems.${l}.${r}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${u}`;
                        }
                    },
                    Ee = (e, t, u) => {
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
                function Ae() {
                    return !1;
                }
                console.log;
                var pe = u(174);
                function _e(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return fe(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
                                return fe(e, t);
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
                function fe(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, i = new Array(t); u < t; u++) i[u] = e[u];
                    return i;
                }
                const Fe = (e) => (0 === e ? window : window.subViews.get(e));
                const we = () => (e, t) => {
                    const u = (0, i.createContext)({});
                    return [
                        function ({ mode: r = 'real', options: s, children: l, mocks: n }) {
                            const h = (0, i.useRef)([]),
                                d = (u, i, a) => {
                                    var r;
                                    const s = (function ({
                                            initializer: e = !0,
                                            rootId: t = 0,
                                            getRoot: u = Fe,
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
                                            const s = (e) => {
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
                                                    const l = 'string' == typeof r ? `${i}.${r}` : i,
                                                        n = o.O.view.addModelObserver(l, t, !0);
                                                    return a.set(n, u), e && u(s(r)), n;
                                                },
                                                readByPath: s,
                                                createCallback: (e, t) => {
                                                    const u = s(t);
                                                    return (...t) => {
                                                        u(e(...t));
                                                    };
                                                },
                                                createCallbackNoArgs: (e) => {
                                                    const t = s(e);
                                                    return () => {
                                                        t();
                                                    };
                                                },
                                                dispose: function () {
                                                    for (var e, u = _e(a.keys()); !(e = u()).done; ) r(e.value, t);
                                                },
                                                unsubscribe: r,
                                            };
                                        })(i),
                                        l =
                                            'real' === u
                                                ? s
                                                : Object.assign({}, s, {
                                                      readByPath:
                                                          null != (r = null == a ? void 0 : a.getter) ? r : () => {},
                                                  }),
                                        n = (e) =>
                                            'mocks' === u ? (null == a ? void 0 : a.getter(e)) : l.readByPath(e),
                                        d = (e) => h.current.push(e),
                                        g = e({
                                            mode: u,
                                            readByPath: n,
                                            externalModel: l,
                                            observableModel: {
                                                array: (e, t) => {
                                                    const i = null != t ? t : n(e),
                                                        a = pe.LO.box(i, { equals: Ae });
                                                    return (
                                                        'real' === u &&
                                                            l.subscribe(
                                                                (0, pe.aD)((e) => a.set(e)),
                                                                e,
                                                            ),
                                                        a
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const i = null != t ? t : n(e),
                                                        a = pe.LO.box(i, { equals: Ae });
                                                    return (
                                                        'real' === u &&
                                                            l.subscribe(
                                                                (0, pe.aD)((e) => a.set(e)),
                                                                e,
                                                            ),
                                                        a
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const i = n(t);
                                                    if (Array.isArray(e)) {
                                                        const a = e.reduce(
                                                            (e, t) => ((e[t] = pe.LO.box(i[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === u &&
                                                                l.subscribe(
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
                                                            o = r.reduce(
                                                                (e, [t, u]) => ((e[u] = pe.LO.box(i[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === u &&
                                                                l.subscribe(
                                                                    (0, pe.aD)((e) => {
                                                                        r.forEach(([t, u]) => {
                                                                            o[u].set(e[t]);
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
                                        c = { mode: u, model: g, externalModel: l, cleanup: d };
                                    return {
                                        model: g,
                                        controls: 'mocks' === u && a ? a.controls(c) : t(c),
                                        externalModel: l,
                                        mode: u,
                                    };
                                },
                                g = (0, i.useRef)(!1),
                                c = (0, i.useState)(r),
                                m = c[0],
                                E = c[1],
                                A = (0, i.useState)(() => d(r, s, n)),
                                p = A[0],
                                _ = A[1];
                            return (
                                (0, i.useEffect)(() => {
                                    g.current ? _(d(m, s, n)) : (g.current = !0);
                                }, [n, m, s]),
                                (0, i.useEffect)(() => {
                                    E(r);
                                }, [r]),
                                (0, i.useEffect)(
                                    () => () => {
                                        p.externalModel.dispose(), h.current.forEach((e) => e());
                                    },
                                    [p],
                                ),
                                a().createElement(u.Provider, { value: p }, l)
                            );
                        },
                        () => (0, i.useContext)(u),
                    ];
                };
                function Ce(e) {
                    return (
                        !1 ===
                        (function (e) {
                            return null == e;
                        })(e)
                    );
                }
                function De(e, t) {
                    var u;
                    if (!(t >= e.length)) return Array.isArray(e) ? e[t] : null == (u = e[t]) ? void 0 : u.value;
                }
                const Be = De;
                function ve(e) {
                    var t;
                    return e && 'value' in e && null != (t = e.constructor) && t.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function Se(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, u, i) => t(null == e ? void 0 : e.value, u, i));
                }
                function be(e, t) {
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
                var Le = u(946);
                let Re;
                function Te(e) {
                    return e.replace(/_\w/g, (e) => e[1].toUpperCase());
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(Re || (Re = {}));
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
                let Pe, ye;
                !(function (e) {
                    (e.New = 'new'), (e.Received = 'received'), (e.Unreceived = 'unreceived');
                })(Pe || (Pe = {})),
                    (function (e) {
                        (e.JustReceived = 'justReceived'), (e.Received = 'received'), (e.Unreceived = 'unreceived');
                    })(ye || (ye = {}));
                const Oe = {
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
                    },
                    Me = 'defaultConfig',
                    Ue = [J.CURRENCY, K.Credits, K.Crystal, K.Gold, K.PremiumPlus],
                    Ie = we()(
                        ({ observableModel: e }) => {
                            const t = Object.assign({}, e.primitives(['currentCollection']), e.primitives(['page']), {
                                    root: e.object(),
                                    tabs: e.array('tabs'),
                                    items: e.array('items'),
                                    pagesBackgrounds: e.array('pagesBackgrounds'),
                                    rewardsInfo: e.array('rewardsInfo'),
                                    pageNumber: pe.LO.box(-1),
                                    isReadyForProgressAnimation: pe.LO.box(!1),
                                    displayCollection: pe.LO.box('none'),
                                }),
                                u = (0, Le.Om)(
                                    () => {
                                        const e = t.root.get().currentCollection;
                                        return Oe[Te(e)] || Oe.defaultConfig;
                                    },
                                    { equals: Ae },
                                ),
                                i = (0, Le.Om)(
                                    () => {
                                        const e = De(t.pagesBackgrounds.get(), t.pageNumber.get());
                                        return {
                                            main: null == e ? void 0 : e.main,
                                            logicalCircuit: null == e ? void 0 : e.logicalCircuit,
                                        };
                                    },
                                    { equals: Ae },
                                ),
                                a = (0, Le.Om)(() => {
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
                                                    const o = Number(e),
                                                        s = be(a, (e) => e.itemId === o);
                                                    if (!s) continue;
                                                    (i[o] = Object.assign(t[e], s)),
                                                        u.push(i[o]),
                                                        i[o].state === Pe.New && r++;
                                                }
                                            e.pages.push({ pageItems: u }),
                                                Object.assign(e.items, i),
                                                e.bubbles.push(r);
                                        }),
                                        e
                                    );
                                }),
                                r = (0, Le.Om)(() =>
                                    Se(t.tabs.get(), (e) =>
                                        e.hasNewItems
                                            ? {
                                                  id: e.collectionName,
                                                  title: re(
                                                      R.strings,
                                                      `collection_${e.collectionName}.collection.season`,
                                                  ),
                                                  notification: { type: 'dot', size: 'large' },
                                              }
                                            : {
                                                  id: e.collectionName,
                                                  title: re(
                                                      R.strings,
                                                      `collection_${e.collectionName}.collection.season`,
                                                  ),
                                              },
                                    ),
                                ),
                                o = (0, Le.Om)(() => a().items),
                                s = (0, Le.Om)(() => t.pageNumber.get()),
                                l = (0, Le.Om)(() => a().pages[s()].pageItems, { equals: Ae }),
                                n = (0, Le.Om)(() => {
                                    const e = t.root.get().currentCollection;
                                    return !Oe[Te(e)] || e === Me;
                                }),
                                h = (0, Le.Om)(() => {
                                    const e = t.root.get();
                                    return e.prevReceivedItemsCount === e.maxItemsCount;
                                }),
                                d = (0, Le.Om)(
                                    () => {
                                        let e = !1;
                                        const u = (u) =>
                                            u === ye.JustReceived
                                                ? e || !t.isReadyForProgressAnimation.get()
                                                    ? ye.Unreceived
                                                    : ((e = !0), ye.JustReceived)
                                                : u;
                                        return Se(t.rewardsInfo.get(), ({ state: e, requiredItemsCount: t }) => ({
                                            state: u(e),
                                            requiredItemsCount: t,
                                        }));
                                    },
                                    { equals: Ae },
                                ),
                                g = (0, Le.Om)((e) => be(t.rewardsInfo.get(), (t) => t.requiredItemsCount === e), {
                                    equals: Ae,
                                }),
                                c = (0, Le.Om)(
                                    (e) => {
                                        const t = g(e);
                                        if (!t) return [];
                                        const u = xe(t.rewards, (e) => ({
                                            index: e.index,
                                            name: e.name,
                                            getImage: (t) => me(e, t),
                                            value: e.value,
                                            valueType: de(e.name),
                                            special: e.overlayType,
                                            tooltipArgs: Ee({ tooltipId: e.tooltipId }, Number(e.tooltipContentId), {
                                                ignoreShowDelay: !0,
                                            }),
                                        }));
                                        return (
                                            u.sort((e, t) =>
                                                Ue.includes(e.valueType) < Ue.includes(t.valueType) ? 1 : -1,
                                            ),
                                            u
                                        );
                                    },
                                    { equals: Ae },
                                ),
                                m = (0, Le.Om)(() => {
                                    const e = a().bubbles;
                                    let t = 0,
                                        u = 0,
                                        i = -1;
                                    return (
                                        e.forEach((e, a) => {
                                            a < s() ? (t += e) : a > s() && (u += e), e > 0 && i < 0 && (i = a);
                                        }),
                                        { prevBubbleCount: t, nextBubbleCount: u, firstPageWithBubble: i }
                                    );
                                }),
                                E = (0, Le.Om)(() => {
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
                                    getPageCount: (0, Le.Om)(() => a().pages.length),
                                    getPageNumber: s,
                                    getCurrentPageCollectionElements: l,
                                    getItems: o,
                                    getItem: (0, Le.Om)((e) => {
                                        var t;
                                        return null == (t = o()) ? void 0 : t[e];
                                    }),
                                    levelInfo: d,
                                    getRewardsByLevel: c,
                                    getProgressParams: E,
                                    getConfig: u,
                                    isDefaultTemplate: n,
                                    isProgressAnimationEnded: h,
                                    getCountOfNewElementsPerPage: m,
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
                                    const u =
                                        ((r = 0), (o = e.computes.getPageCount() - 1), (s = t) < r ? r : s > o ? o : s);
                                    var r, o, s;
                                    u === t && (e.pageNumber.set(u), i(), e.root.get().isTutorial && a());
                                },
                                o = (0, pe.aD)((t) => {
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
                                    o(t);
                                }),
                            );
                            const s = (0, pe.aD)(() => r(e.computes.getPageNumber() + 1)),
                                l = (0, pe.aD)(() => r(e.computes.getPageNumber() - 1)),
                                n = t.createCallback((e) => ({ collectionName: e }), 'onTabSelected'),
                                h = (0, pe.aD)((t) => {
                                    t !== e.root.get().currentCollection && n(t);
                                });
                            return {
                                enableProgressAnimation: i,
                                finishTutorial: a,
                                nextPage: s,
                                previousPage: l,
                                selectTab: h,
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
                    ke =
                        (Ie[0],
                        Ie[1],
                        we()(
                            ({ observableModel: e }) => {
                                const t = { root: e.object(), rewards: e.array('rewards') },
                                    u = (0, Le.Om)(() => {
                                        const e = t.root.get().collectionName;
                                        return Oe[Te(e)] || Oe.defaultConfig;
                                    }),
                                    i = (0, Le.Om)(
                                        () =>
                                            Se(t.rewards.get(), (e) => ({
                                                index: e.index,
                                                name: e.name,
                                                getImage: (t) => me(e, t),
                                                value: e.value,
                                                valueType: de(e.name),
                                                special: e.overlayType,
                                                label: e.label,
                                                tooltipArgs: Ee(
                                                    { tooltipId: e.tooltipId },
                                                    Number(e.tooltipContentId),
                                                    { ignoreShowDelay: !0 },
                                                ),
                                            })),
                                        { equals: Ae },
                                    ),
                                    a = (0, Le.Om)(() => i().length);
                                return Object.assign({}, t, {
                                    computes: { getRewards: i, getRewardsCount: a, getConfig: u },
                                });
                            },
                            ({ externalModel: e }) => ({
                                onOpenCollection: e.createCallbackNoArgs('onOpenCollection'),
                                onCloseCollection: e.createCallbackNoArgs('onCloseCollection'),
                            }),
                        )),
                    Ne = ke[0],
                    He = ke[1],
                    Ge = {
                        base: 'App_base_db',
                        fadeIn: 'App_fadeIn_57',
                        base__ultraSize: 'App_base__ultraSize_ad',
                        overlay: 'App_overlay_c7',
                        close: 'App_close_92',
                        slideUp: 'App_slideUp_df',
                        fadeOut: 'App_fadeOut_c6',
                        raysAppearance: 'App_raysAppearance_f4',
                        rotate: 'App_rotate_e3',
                        slideUpWithScale: 'App_slideUpWithScale_67',
                    },
                    We = {
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
                        base__disabled: 'CButton_base__disabled_d9',
                        back: 'CButton_back_e5',
                        texture: 'CButton_texture_fe',
                        state: 'CButton_state_11',
                        base__focus: 'CButton_base__focus_83',
                        stateHighlightHover: 'CButton_stateHighlightHover_ff',
                        stateHighlightActive: 'CButton_stateHighlightActive_35',
                        stateDisabled: 'CButton_stateDisabled_54',
                        base__firstHover: 'CButton_base__firstHover_d5',
                        base__highlightActive: 'CButton_base__highlightActive_b2',
                        content: 'CButton_content_cc',
                    };
                let $e, qe;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })($e || ($e = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(qe || (qe = {}));
                const je = ({
                    children: e,
                    size: t,
                    isFocused: u,
                    type: r,
                    disabled: o,
                    mixClass: s,
                    soundHover: l,
                    soundClick: n,
                    onMouseEnter: h,
                    onMouseMove: d,
                    onMouseDown: g,
                    onMouseUp: c,
                    onMouseLeave: m,
                    onClick: E,
                }) => {
                    const A = (0, i.useRef)(null),
                        p = (0, i.useState)(u),
                        _ = p[0],
                        f = p[1],
                        w = (0, i.useState)(!1),
                        C = w[0],
                        D = w[1],
                        B = (0, i.useState)(!1),
                        v = B[0],
                        S = B[1],
                        b = (0, i.useCallback)(() => {
                            o || (A.current && (A.current.focus(), f(!0)));
                        }, [o]),
                        x = (0, i.useCallback)(
                            (e) => {
                                _ && null !== A.current && !A.current.contains(e.target) && f(!1);
                            },
                            [_],
                        ),
                        L = (0, i.useCallback)(
                            (e) => {
                                o || (E && E(e));
                            },
                            [o, E],
                        ),
                        T = (0, i.useCallback)(
                            (e) => {
                                o || (null !== l && N(l), h && h(e), S(!0));
                            },
                            [o, l, h],
                        ),
                        P = (0, i.useCallback)(
                            (e) => {
                                d && d(e);
                            },
                            [d],
                        ),
                        y = (0, i.useCallback)(
                            (e) => {
                                o || (c && c(e), D(!1));
                            },
                            [o, c],
                        ),
                        O = (0, i.useCallback)(
                            (e) => {
                                o || (null !== n && N(n), g && g(e), u && b(), D(!0));
                            },
                            [o, n, g, b, u],
                        ),
                        M = (0, i.useCallback)(
                            (e) => {
                                o || (m && m(e), D(!1));
                            },
                            [o, m],
                        ),
                        U = F()(
                            We.base,
                            We[`base__${r}`],
                            {
                                [We.base__disabled]: o,
                                [We[`base__${t}`]]: t,
                                [We.base__focus]: _,
                                [We.base__highlightActive]: C,
                                [We.base__firstHover]: v,
                            },
                            s,
                        ),
                        I = F()(We.state, We.state__default);
                    return (
                        (0, i.useEffect)(
                            () => (
                                document.addEventListener('mousedown', x),
                                () => {
                                    document.removeEventListener('mousedown', x);
                                }
                            ),
                            [x],
                        ),
                        (0, i.useEffect)(() => {
                            f(u);
                        }, [u]),
                        a().createElement(
                            'div',
                            {
                                ref: A,
                                className: U,
                                onMouseEnter: T,
                                onMouseMove: P,
                                onMouseUp: y,
                                onMouseDown: O,
                                onMouseLeave: M,
                                onClick: L,
                            },
                            r !== $e.ghost &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: We.back }),
                                    a().createElement('span', { className: We.texture }),
                                ),
                            a().createElement(
                                'span',
                                { className: I },
                                a().createElement('span', { className: We.stateDisabled }),
                                a().createElement('span', { className: We.stateHighlightHover }),
                                a().createElement('span', { className: We.stateHighlightActive }),
                            ),
                            a().createElement(
                                'span',
                                { className: We.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                je.defaultProps = { type: $e.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Ye = (0, i.memo)(je),
                    ze = 'Footer_base_2c',
                    Ve = 'Footer_button_42',
                    Xe = 'Footer_rightButton_bd',
                    Ke = (0, X.Pi)(() => {
                        const e = He(),
                            t = e.controls,
                            u = e.model,
                            i = S().mediaSize,
                            r = u.root.get().isDisabled;
                        return a().createElement(
                            'div',
                            { className: ze },
                            a().createElement(
                                Ye,
                                {
                                    type: $e.primary,
                                    size: i >= D.Medium ? qe.medium : qe.small,
                                    mixClass: Ve,
                                    onClick: t.onOpenCollection,
                                    disabled: r,
                                },
                                Gt.footer.buttonText(),
                            ),
                            a().createElement(
                                Ye,
                                {
                                    type: $e.secondary,
                                    size: i >= D.Medium ? qe.medium : qe.small,
                                    mixClass: F()(Ve, Xe),
                                    onClick: t.onCloseCollection,
                                    disabled: r,
                                },
                                Gt.footer.okButtonText(),
                            ),
                        );
                    }),
                    Qe = 'Header_base_f2',
                    Ze = 'Header_overhead_71',
                    Je = 'Header_title_d5',
                    et = (0, X.Pi)(() => {
                        const e = He().model.root.get(),
                            t = e.collectionName,
                            u = e.state;
                        return a().createElement(
                            'div',
                            { className: Qe },
                            a().createElement(
                                'div',
                                { className: Ze },
                                a().createElement(
                                    'span',
                                    null,
                                    re(R.strings, `collection_${t}.collection.awardsView.header.name`),
                                ),
                                a().createElement('span', null, re(R.strings, `collection_${t}.collection.season`)),
                            ),
                            a().createElement('div', { className: Je }, Gt.header.subtitle.$dyn(u)),
                        );
                    }),
                    tt = 33,
                    ut = 0,
                    it = !0,
                    at = 'play';
                function rt(e) {
                    const t = e.chunk,
                        u = t.rows * t.columns;
                    return (i) => {
                        const a = i % u,
                            r = (a % t.columns) * e.width,
                            o = Math.trunc(a / t.columns) * e.height;
                        return { path: e.getChunkPath(Math.trunc(i / u)), x: r, y: o };
                    };
                }
                const ot = [
                    'width',
                    'height',
                    'getImageSource',
                    'frameCount',
                    'onAnimate',
                    'frameTime',
                    'initialFrameIndex',
                    'lastFrameIndex',
                    'loop',
                    'state',
                    'onAnimationDone',
                    'onAnimationComplete',
                    'poster',
                ];
                function st() {
                    return (
                        (st =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var i in u) Object.prototype.hasOwnProperty.call(u, i) && (e[i] = u[i]);
                                }
                                return e;
                            }),
                        st.apply(this, arguments)
                    );
                }
                const lt = (0, i.memo)(function (e) {
                        let t = e.width,
                            u = e.height,
                            r = e.getImageSource,
                            o = e.frameCount,
                            s = e.onAnimate,
                            l = e.frameTime,
                            n = void 0 === l ? tt : l,
                            h = e.initialFrameIndex,
                            d = void 0 === h ? ut : h,
                            g = e.lastFrameIndex,
                            c = void 0 === g ? o - 1 : g,
                            m = e.loop,
                            E = void 0 === m ? it : m,
                            A = e.state,
                            p = void 0 === A ? at : A,
                            _ = e.onAnimationDone,
                            f = e.onAnimationComplete,
                            F = e.poster,
                            w = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    i,
                                    a = {},
                                    r = Object.keys(e);
                                for (i = 0; i < r.length; i++) (u = r[i]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, ot);
                        const C = (0, i.useRef)(null);
                        return (
                            (0, i.useEffect)(() => {
                                const e = C.current;
                                if (!e) return;
                                const t = e.getContext('2d'),
                                    u = (u) => {
                                        t.clearRect(0, 0, e.width, e.height), t.drawImage(u.img, -u.x, -u.y);
                                    };
                                switch (p) {
                                    case 'play':
                                        return (function () {
                                            const e = dt(d, c, r),
                                                t = nt(d, c),
                                                i = window.setInterval(() => {
                                                    const a = t(),
                                                        r = e.get(a);
                                                    r
                                                        ? (null == s || s(a, r),
                                                          u(r),
                                                          a === c &&
                                                              (null == f || f(),
                                                              E || (null == _ || _(), window.clearInterval(i))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, n);
                                            return () => window.clearInterval(i);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === d && F ? { path: F, x: 0, y: 0 } : r(d),
                                                t = new Image();
                                            t.src = e.path;
                                            const i = () => u(ht(e, t));
                                            return (
                                                t.addEventListener('load', i), () => t.removeEventListener('load', i)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [n, r, d, c, E, s, f, _, F, p]),
                            a().createElement('canvas', st({}, w, { width: t, height: u, ref: C }))
                        );
                    }),
                    nt = (e, t) => {
                        let u = e;
                        return () => {
                            const i = u;
                            return (u += 1), u > t && (u = e), i;
                        };
                    },
                    ht = (e, t) => Object.assign({}, e, { img: t }),
                    dt = (e, t, u) => {
                        const i = new Map(),
                            a = {};
                        for (let r = e; r <= t; r++) {
                            const e = u(r),
                                t = a[e.path];
                            if (t) i.set(r, ht(e, t));
                            else {
                                const t = new Image();
                                (a[e.path] = t),
                                    (t.src = e.path),
                                    (t.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${r})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    i.set(r, ht(e, t));
                            }
                        }
                        return i;
                    };
                let gt;
                !(function (e) {
                    (e.Completed = 'completed'), (e.Active = 'active');
                })(gt || (gt = {}));
                const ct = [
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
                function mt(e) {
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
                const Et = (e, t, u = {}, i = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: j.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: i,
                                },
                                u,
                            ),
                        );
                    },
                    At = (e) => {
                        let t = e.children,
                            u = e.contentId,
                            a = e.args,
                            r = e.onMouseEnter,
                            o = e.onMouseLeave,
                            s = e.onMouseDown,
                            l = e.onClick,
                            n = e.ignoreShowDelay,
                            h = void 0 !== n && n,
                            d = e.ignoreMouseClick,
                            g = void 0 !== d && d,
                            c = e.decoratorId,
                            m = void 0 === c ? 0 : c,
                            E = e.isEnabled,
                            A = void 0 === E || E,
                            p = e.targetId,
                            _ = void 0 === p ? 0 : p,
                            f = e.onShow,
                            F = e.onHide,
                            w = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    i,
                                    a = {},
                                    r = Object.keys(e);
                                for (i = 0; i < r.length; i++) (u = r[i]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, ct);
                        const C = (0, i.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            D = (0, i.useMemo)(
                                () =>
                                    _ ||
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
                                [_],
                            ),
                            B = (0, i.useCallback)(() => {
                                (C.current.isVisible && C.current.timeoutId) ||
                                    (Et(u, m, { isMouseEvent: !0, on: !0, arguments: mt(a) }, D),
                                    f && f(),
                                    (C.current.isVisible = !0));
                            }, [u, m, a, D, f]),
                            v = (0, i.useCallback)(() => {
                                if (C.current.isVisible || C.current.timeoutId) {
                                    const e = C.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (C.current.timeoutId = 0)),
                                        Et(u, m, { on: !1 }, D),
                                        C.current.isVisible && F && F(),
                                        (C.current.isVisible = !1);
                                }
                            }, [u, m, D, F]),
                            S = (0, i.useCallback)((e) => {
                                C.current.isVisible &&
                                    ((C.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (C.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(C.current.prevTarget) && v();
                                    }, 200)));
                            }, []);
                        (0, i.useEffect)(() => {
                            const e = C.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', S, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', S, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, i.useEffect)(() => {
                                !1 === A && v();
                            }, [A, v]),
                            (0, i.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', v),
                                    () => {
                                        window.removeEventListener('mouseleave', v), v();
                                    }
                                ),
                                [v],
                            );
                        return A
                            ? (0, i.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((b = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((C.current.timeoutId = window.setTimeout(B, h ? 100 : 400)),
                                                      r && r(e),
                                                      b && b(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              v(), null == o || o(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === g && v(), null == l || l(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === g && v(), null == s || s(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      w,
                                  ),
                              )
                            : t;
                        var b;
                    },
                    pt = ['children'];
                function _t() {
                    return (
                        (_t =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var i in u) Object.prototype.hasOwnProperty.call(u, i) && (e[i] = u[i]);
                                }
                                return e;
                            }),
                        _t.apply(this, arguments)
                    );
                }
                const ft = (e) => {
                        let t = e.children,
                            u = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    i,
                                    a = {},
                                    r = Object.keys(e);
                                for (i = 0; i < r.length; i++) (u = r[i]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, pt);
                        return a().createElement(
                            At,
                            _t(
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
                    },
                    Ft = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function wt() {
                    return (
                        (wt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var i in u) Object.prototype.hasOwnProperty.call(u, i) && (e[i] = u[i]);
                                }
                                return e;
                            }),
                        wt.apply(this, arguments)
                    );
                }
                const Ct = R.views.common.tooltip_window.simple_tooltip_content,
                    Dt = (e) => {
                        let t = e.children,
                            u = e.body,
                            r = e.header,
                            o = e.note,
                            s = e.alert,
                            l = e.args,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    i,
                                    a = {},
                                    r = Object.keys(e);
                                for (i = 0; i < r.length; i++) (u = r[i]), t.indexOf(u) >= 0 || (a[u] = e[u]);
                                return a;
                            })(e, Ft);
                        const h = (0, i.useMemo)(() => {
                            const e = Object.assign({}, l, { body: u, header: r, note: o, alert: s });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [s, u, r, o, l]);
                        return a().createElement(
                            At,
                            wt(
                                {
                                    contentId:
                                        ((d = null == l ? void 0 : l.hasHtmlContent),
                                        d ? Ct.SimpleTooltipHtmlContent('resId') : Ct.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: h,
                                },
                                n,
                            ),
                            t,
                        );
                        var d;
                    };
                function Bt() {
                    return (
                        (Bt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var i in u) Object.prototype.hasOwnProperty.call(u, i) && (e[i] = u[i]);
                                }
                                return e;
                            }),
                        Bt.apply(this, arguments)
                    );
                }
                const vt = ({ children: e, tooltipArgs: t, className: u }) => {
                        if (!t) return e;
                        const i = a().createElement('div', { className: u }, e);
                        if (t.header || t.body) return a().createElement(Dt, t, i);
                        const r = t.contentId,
                            o = t.args,
                            s = null == o ? void 0 : o.contentId;
                        return r || s
                            ? a().createElement(At, Bt({}, t, { contentId: r || s }), i)
                            : a().createElement(ft, t, i);
                    },
                    St = {
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
                    bt = ({
                        name: e,
                        image: t,
                        isPeriodic: u = !1,
                        size: i = Z.Big,
                        special: r,
                        value: o,
                        valueType: s,
                        style: l,
                        className: n,
                        classNames: h,
                        tooltipArgs: d,
                        periodicIconTooltipArgs: g,
                    }) => {
                        const c = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case ee.BATTLE_BOOSTER:
                                    case ee.BATTLE_BOOSTER_REPLACE:
                                        return te.BATTLE_BOOSTER;
                                }
                            })(r),
                            m = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case ee.BATTLE_BOOSTER:
                                        return ue.BATTLE_BOOSTER;
                                    case ee.BATTLE_BOOSTER_REPLACE:
                                        return ue.BATTLE_BOOSTER_REPLACE;
                                    case ee.BUILT_IN_EQUIPMENT:
                                        return ue.BUILT_IN_EQUIPMENT;
                                    case ee.EQUIPMENT_PLUS:
                                        return ue.EQUIPMENT_PLUS;
                                    case ee.EQUIPMENT_TROPHY_BASIC:
                                        return ue.EQUIPMENT_TROPHY_BASIC;
                                    case ee.EQUIPMENT_TROPHY_UPGRADED:
                                        return ue.EQUIPMENT_TROPHY_UPGRADED;
                                    case ee.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return ue.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case ee.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return ue.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case ee.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return ue.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case ee.PROGRESSION_STYLE_UPGRADED_1:
                                        return ue.PROGRESSION_STYLE_UPGRADED_1;
                                    case ee.PROGRESSION_STYLE_UPGRADED_2:
                                        return ue.PROGRESSION_STYLE_UPGRADED_2;
                                    case ee.PROGRESSION_STYLE_UPGRADED_3:
                                        return ue.PROGRESSION_STYLE_UPGRADED_3;
                                    case ee.PROGRESSION_STYLE_UPGRADED_4:
                                        return ue.PROGRESSION_STYLE_UPGRADED_4;
                                }
                            })(r),
                            E = ((e, t) => {
                                if (void 0 === e) return null;
                                switch (t) {
                                    case J.MULTI: {
                                        const t = Number(e);
                                        return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                                    }
                                    case J.CURRENCY:
                                    case J.NUMBER:
                                        return a().createElement(oe, { format: 'integral', value: Number(e) });
                                    case J.PREMIUM_PLUS: {
                                        const t = Number(e);
                                        return isNaN(t) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(o, s);
                        return a().createElement(
                            'div',
                            { className: F()(St.base, St[`base__${i}`], n), style: l },
                            a().createElement(
                                vt,
                                { tooltipArgs: d, className: St.tooltipWrapper },
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement(
                                        'div',
                                        { className: F()(St.image, null == h ? void 0 : h.image) },
                                        c &&
                                            a().createElement('div', {
                                                className: F()(St.highlight, null == h ? void 0 : h.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${i}.${c}_highlight)`,
                                                },
                                            }),
                                        t &&
                                            a().createElement('div', {
                                                className: F()(St.icon, null == h ? void 0 : h.rewardIcon),
                                                style: { backgroundImage: `url(${t})` },
                                            }),
                                        m &&
                                            a().createElement('div', {
                                                className: F()(St.overlay, null == h ? void 0 : h.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${i}.${m}_overlay)`,
                                                },
                                            }),
                                    ),
                                    E &&
                                        a().createElement(
                                            'div',
                                            {
                                                className: F()(
                                                    St.info,
                                                    St[`info__${e}`],
                                                    s === J.MULTI && St.info__multi,
                                                    null == h ? void 0 : h.info,
                                                ),
                                            },
                                            E,
                                        ),
                                ),
                            ),
                            u &&
                                a().createElement(
                                    vt,
                                    { tooltipArgs: g },
                                    a().createElement('div', {
                                        className: F()(St.timer, null == h ? void 0 : h.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    xt = {
                        base: 'Rewards_base_ff',
                        slideUpWithScale: 'Rewards_slideUpWithScale_91',
                        infoLabel: 'Rewards_infoLabel_03',
                        base__wide: 'Rewards_base__wide_70',
                        infoCount: 'Rewards_infoCount_a4',
                        infoCount__s400x300: 'Rewards_infoCount__s400x300_5e',
                        infoCount__s296x222: 'Rewards_infoCount__s296x222_0c',
                        infoCount__s232x174: 'Rewards_infoCount__s232x174_ff',
                        rewardWrapper: 'Rewards_rewardWrapper_6f',
                        label: 'Rewards_label_50',
                        label__s400x300: 'Rewards_label__s400x300_2e',
                        label__s296x222: 'Rewards_label__s296x222_f2',
                        label__s232x174: 'Rewards_label__s232x174_c5',
                        label__credits: 'Rewards_label__credits_4f',
                        label__gold: 'Rewards_label__gold_2a',
                        label__crystal: 'Rewards_label__crystal_c4',
                        label__premiumTank: 'Rewards_label__premiumTank_b8',
                        slideUp: 'Rewards_slideUp_7e',
                        fadeIn: 'Rewards_fadeIn_84',
                        fadeOut: 'Rewards_fadeOut_49',
                        raysAppearance: 'Rewards_raysAppearance_35',
                        rotate: 'Rewards_rotate_fe',
                    };
                function Lt() {
                    return (
                        (Lt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var i in u) Object.prototype.hasOwnProperty.call(u, i) && (e[i] = u[i]);
                                }
                                return e;
                            }),
                        Lt.apply(this, arguments)
                    );
                }
                const Rt = {
                        [D.ExtraLarge]: Z.S400x300,
                        [D.Large]: Z.S400x300,
                        [D.Medium]: Z.S296x222,
                        [D.Small]: Z.S296x222,
                        [D.ExtraSmall]: Z.S232x174,
                    },
                    Tt = (0, X.Pi)(() => {
                        const e = He().model.computes.getRewards(),
                            t = S().mediaSize;
                        return a().createElement(
                            'div',
                            { className: F()(xt.base, xt.base__wide) },
                            e.map((e, u) =>
                                a().createElement(
                                    'div',
                                    { className: xt.rewardWrapper, key: u },
                                    a().createElement(
                                        bt,
                                        Lt({}, e, {
                                            size: Rt[t],
                                            image: e.getImage(Rt[t]),
                                            classNames: {
                                                info: F()(
                                                    e.valueType !== J.MULTI
                                                        ? xt.infoLabel
                                                        : F()(xt.infoCount, xt[`infoCount__${Rt[t]}`]),
                                                ),
                                            },
                                        }),
                                    ),
                                    e.valueType !== J.CURRENCY &&
                                        a().createElement(
                                            'div',
                                            { className: F()(xt.label, xt[`label__${e.name}`], xt[`label__${Rt[t]}`]) },
                                            e.label,
                                        ),
                                ),
                            ),
                        );
                    }),
                    Pt = 'MainRewards_base_06',
                    yt = 'MainRewards_ribbonWrapper_50',
                    Ot = 'MainRewards_ribbon_19',
                    Mt = 'MainRewards_raysWrapper_f7',
                    Ut = 'MainRewards_rays_ea',
                    It = 'MainRewards_sunShineCanvas_e9',
                    kt = {
                        width: 400,
                        height: 400,
                        frameCount: 50,
                        chunk: { count: 2, rows: 5, columns: 5 },
                        getChunkPath:
                            ((Nt = 'R.images.gui.maps.icons.sequence.sun_shine_big_sprite.sprite_'),
                            (e) => `${Nt}${e}`),
                    };
                var Nt;
                const Ht = (0, X.Pi)(() => {
                        const e = He().model.root.get().state === gt.Completed;
                        return a().createElement(
                            'div',
                            { className: Pt },
                            a().createElement('div', { className: Mt }, a().createElement('div', { className: Ut })),
                            e &&
                                a().createElement(lt, {
                                    width: kt.width,
                                    height: kt.height,
                                    frameCount: kt.frameCount,
                                    getImageSource: rt(kt),
                                    frameTime: 50,
                                    className: It,
                                }),
                            a().createElement('div', { className: yt }, a().createElement('div', { className: Ot })),
                            a().createElement(Tt, null),
                        );
                    }),
                    Gt = R.strings.collections,
                    Wt = (0, X.Pi)(() => {
                        const e = He().model,
                            t = e.computes.getConfig().generalBackgroundColor,
                            u = e.root.get().background,
                            i = S(),
                            r = i.remScreenWidth,
                            o = i.remScreenHeight;
                        return (
                            V(),
                            a().createElement(
                                'div',
                                { className: F()(Ge.base, Ge[`base__${ae(r, o)}`]) },
                                a().createElement('div', {
                                    className: Ge.overlay,
                                    style: { backgroundColor: t, backgroundImage: u ? `url(${u})` : 'none' },
                                }),
                                a().createElement(
                                    'div',
                                    { className: Ge.close },
                                    a().createElement($, {
                                        caption: R.strings.menu.viewHeader.closeBtn.label(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: () => (0, j.Sy)(),
                                    }),
                                ),
                                a().createElement(et, null),
                                a().createElement(Ht, null),
                                a().createElement(Ke, null),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    I().render(
                        a().createElement(
                            Ne,
                            null,
                            a().createElement(M, { className: k }, a().createElement(Wt, null)),
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
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, u, i] = deferred[l], r = !0, o = 0; o < t.length; o++)
                        (!1 & i || a >= i) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[o]))
                            ? t.splice(o--, 1)
                            : ((r = !1), i < a && (a = i));
                    if (r) {
                        deferred.splice(l--, 1);
                        var s = u();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            i = i || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > i; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, u, i];
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
        (__webpack_require__.j = 469),
        (() => {
            var e = { 469: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var i,
                        a,
                        [r, o, s] = u,
                        l = 0;
                    if (r.some((t) => 0 !== e[t])) {
                        for (i in o) __webpack_require__.o(o, i) && (__webpack_require__.m[i] = o[i]);
                        if (s) var n = s(__webpack_require__);
                    }
                    for (t && t(u); l < r.length; l++)
                        (a = r[l]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(n);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [314], () => __webpack_require__(980));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
