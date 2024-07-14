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
                t.r(e), t.d(e, { mouse: () => s, onResize: () => r });
                var a = t(2472),
                    n = t(1176);
                const r = (0, a.E)('clientResized'),
                    i = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') },
                    s = (function () {
                        const u = { listeners: 0, enabled: !0, initialized: !1 };
                        function e() {
                            u.enabled && (0, n.R)(!1);
                        }
                        function t() {
                            u.enabled && (0, n.R)(!0);
                        }
                        function a() {
                            u.enabled
                                ? u.listeners < 1
                                    ? ((u.initialized = !1),
                                      document.body.removeEventListener('mouseenter', e),
                                      document.body.removeEventListener('mouseleave', t))
                                    : u.initialized ||
                                      ((u.initialized = !0),
                                      document.body.addEventListener('mouseenter', e),
                                      document.body.addEventListener('mouseleave', t))
                                : (0, n.R)(!1);
                        }
                        const r = ['down', 'up', 'move'].reduce(
                            (e, t) => (
                                (e[t] = (function (e) {
                                    return (t) => {
                                        u.listeners += 1;
                                        let n = !0;
                                        const r = `mouse${e}`,
                                            s = i[e]((u) => t([u, 'outside']));
                                        function o(u) {
                                            t([u, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(r, o),
                                            a(),
                                            () => {
                                                n &&
                                                    (s(),
                                                    window.removeEventListener(r, o),
                                                    (u.listeners -= 1),
                                                    a(),
                                                    (n = !1));
                                            }
                                        );
                                    };
                                })(t)),
                                e
                            ),
                            {},
                        );
                        return Object.assign({}, r, {
                            disable() {
                                (u.enabled = !1), a();
                            },
                            enable() {
                                (u.enabled = !0), a();
                            },
                            enableOutside() {
                                u.enabled && (0, n.R)(!0);
                            },
                            disableOutside() {
                                u.enabled && (0, n.R)(!1);
                            },
                        });
                    })();
            },
            5959: (u, e, t) => {
                'use strict';
                t.r(e),
                    t.d(e, {
                        events: () => a,
                        getMouseGlobalPosition: () => r,
                        getSize: () => n,
                        graphicsQuality: () => i,
                    });
                var a = t(527);
                function n(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function r(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const i = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (u, e, t) => {
                'use strict';
                function a(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                t.d(e, { R: () => a });
            },
            2472: (u, e, t) => {
                'use strict';
                function a(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                t.d(e, { E: () => a });
            },
            3138: (u, e, t) => {
                'use strict';
                t.d(e, { O: () => n });
                var a = t(5959);
                const n = { view: t(7641), client: a };
            },
            3722: (u, e, t) => {
                'use strict';
                function a(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function n(u, e, t) {
                    return `url(${a(u, e, t)})`;
                }
                t.r(e), t.d(e, { getBgUrl: () => n, getTextureUrl: () => a });
            },
            6112: (u, e, t) => {
                'use strict';
                t.d(e, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (u, e, t) => {
                'use strict';
                t.d(e, { U: () => n });
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
            7641: (u, e, t) => {
                'use strict';
                t.r(e),
                    t.d(e, {
                        addModelObserver: () => E,
                        addPreloadTexture: () => s,
                        children: () => a,
                        displayStatus: () => n.W,
                        displayStatusIs: () => b,
                        events: () => r.U,
                        extraSize: () => f,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => D,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => w,
                        getScale: () => m,
                        getSize: () => A,
                        getViewGlobalPosition: () => _,
                        isEventHandled: () => p,
                        isFocused: () => g,
                        pxToRem: () => d,
                        remToPx: () => B,
                        resize: () => F,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => C,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => c,
                        whenTutorialReady: () => S,
                    });
                var a = t(3722),
                    n = t(6112),
                    r = t(6538),
                    i = t(8566);
                function s(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function o(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function l(u, e, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, a);
                }
                function E(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function c(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function A(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function F(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function _(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: B(e.x), y: B(e.y) };
                }
                function D() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function m() {
                    return viewEnv.getScale();
                }
                function d(u) {
                    return viewEnv.pxToRem(u);
                }
                function B(u) {
                    return viewEnv.remToPx(u);
                }
                function C(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function g() {
                    return viewEnv.isFocused();
                }
                function h() {
                    return viewEnv.setEventHandled();
                }
                function p() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function w() {
                    return viewEnv.getShowingStatus();
                }
                const b = Object.keys(n.W).reduce(
                        (u, e) => ((u[e] = () => viewEnv.getShowingStatus() === n.W[e]), u),
                        {},
                    ),
                    f = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    S = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : r.U.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (u, e, t) => {
                'use strict';
                t.d(e, { qP: () => r });
                const a = ['args'],
                    n = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const r = e.args,
                                i = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(u);
                                    for (a = 0; a < r.length; a++) (t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                    return n;
                                })(e, a);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, i, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([u, e]) => {
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
                        var n;
                    },
                    r = {
                        close(u) {
                            n('popover' === u ? 2 : 32);
                        },
                        minimize() {
                            n(64);
                        },
                        move(u) {
                            n(16, { isMouseEvent: !0, on: u });
                        },
                    };
            },
            5521: (u, e, t) => {
                'use strict';
                let a, n;
                t.d(e, { n: () => a }),
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
                            (u[(u.KEY_9 = 57)] = 'KEY_9'),
                            (u[(u.CAPS_LOCK = 20)] = 'CAPS_LOCK'),
                            (u[(u.INSERT = 45)] = 'INSERT'),
                            (u[(u.F1 = 112)] = 'F1'),
                            (u[(u.F2 = 113)] = 'F2'),
                            (u[(u.F3 = 114)] = 'F3'),
                            (u[(u.F4 = 115)] = 'F4'),
                            (u[(u.F5 = 116)] = 'F5'),
                            (u[(u.F6 = 117)] = 'F6'),
                            (u[(u.F7 = 118)] = 'F7'),
                            (u[(u.F8 = 119)] = 'F8'),
                            (u[(u.F9 = 120)] = 'F9'),
                            (u[(u.F10 = 121)] = 'F10'),
                            (u[(u.F11 = 122)] = 'F11'),
                            (u[(u.F12 = 123)] = 'F12'),
                            (u[(u.SELECT = 93)] = 'SELECT'),
                            (u[(u.NUMPAD_0 = 96)] = 'NUMPAD_0'),
                            (u[(u.NUMPAD_1 = 97)] = 'NUMPAD_1'),
                            (u[(u.NUMPAD_2 = 98)] = 'NUMPAD_2'),
                            (u[(u.NUMPAD_3 = 99)] = 'NUMPAD_3'),
                            (u[(u.NUMPAD_4 = 100)] = 'NUMPAD_4'),
                            (u[(u.NUMPAD_5 = 101)] = 'NUMPAD_5'),
                            (u[(u.NUMPAD_6 = 102)] = 'NUMPAD_6'),
                            (u[(u.NUMPAD_7 = 103)] = 'NUMPAD_7'),
                            (u[(u.NUMPAD_8 = 104)] = 'NUMPAD_8'),
                            (u[(u.NUMPAD_9 = 105)] = 'NUMPAD_9'),
                            (u[(u.NUM_DECIMAL = 110)] = 'NUM_DECIMAL'),
                            (u[(u.STAR = 106)] = 'STAR'),
                            (u[(u.NUM_SLASH = 111)] = 'NUM_SLASH'),
                            (u[(u.FORWARD_SLASH = 191)] = 'FORWARD_SLASH'),
                            (u[(u.COMMA = 188)] = 'COMMA'),
                            (u[(u.DASH = 189)] = 'DASH'),
                            (u[(u.PERIOD = 190)] = 'PERIOD');
                    })(a || (a = {})),
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
                    })(n || (n = {}));
            },
            1358: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => r });
                var a = t(3138);
                class n {
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
                        return window.__dataTracker || (window.__dataTracker = new n()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(u, e, t = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = a.O.view.addModelObserver(u, t, n);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = e),
                                  t > 0 && (this._views[t] ? this._views[t].push(r) : (this._views[t] = [r])))
                                : console.error("Can't add callback for model:", u),
                            r
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
                            const a = this._callbacks[t];
                            void 0 !== a && a(u, e);
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
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4179);
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
            4179: (u, e, t) => {
                'use strict';
                t.d(e, { B3: () => E, Z5: () => i, B0: () => o, ry: () => C });
                class a {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (u) => {
                                this.entries.forEach(({ container: e, callback: t }) => {
                                    let a = u.target;
                                    do {
                                        if (a === e) return;
                                        a = a.parentNode;
                                    } while (a);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return a.__instance || (a.__instance = new a()), a.__instance;
                    }
                    register(u, e) {
                        this.addMouseListener(), this.entries.push({ container: u, callback: e });
                    }
                    unregister(u, e) {
                        const t = u,
                            a = e;
                        (this.entries = this.entries.filter(({ container: u, callback: e }) => u !== t || e !== a)),
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
                var r = t(1358);
                const i = {
                        getNumberFormat: (u, e) => systemLocale.getNumberFormat(u, e),
                        getRealFormat: (u, e) => systemLocale.getRealFormat(u, e),
                        getTimeFormat: (u, e) => systemLocale.getTimeFormat(u, e),
                        getDateFormat: (u, e) => systemLocale.getDateFormat(u, e),
                        toUpperCase: (u) => systemLocale.toUpperCase(u),
                        toLowerCase: (u) => systemLocale.toUpperCase(u),
                    },
                    s = {
                        getNumberFormat: (u) => userLocale.getNumberFormat(u),
                        getTimeFormat: (u, e, t) => userLocale.getTimeFormat(u, e, void 0 === t || t),
                        getTimeString: (u, e, t) => userLocale.getTimeString(u, e, void 0 === t || t),
                    };
                let o;
                var l;
                ((l = o || (o = {}))[(l.UNDEFINED = 0)] = 'UNDEFINED'),
                    (l[(l.TOOLTIP = 1)] = 'TOOLTIP'),
                    (l[(l.POP_OVER = 2)] = 'POP_OVER'),
                    (l[(l.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (l[(l.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (l[(l.MOVE = 16)] = 'MOVE'),
                    (l[(l.CLOSE = 32)] = 'CLOSE'),
                    (l[(l.MINIMIZE = 64)] = 'MINIMIZE');
                const E = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    A = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    F = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = t(5521),
                    D = t(3138);
                const m = ['args'];
                function d(u, e, t, a, n, r, i) {
                    try {
                        var s = u[r](i),
                            o = s.value;
                    } catch (u) {
                        return void t(u);
                    }
                    s.done ? e(o) : Promise.resolve(o).then(a, n);
                }
                const B = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
                    C = (function () {
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
                                    return new Promise(function (a, n) {
                                        var r = u.apply(e, t);
                                        function i(u) {
                                            d(r, a, n, i, s, 'next', u);
                                        }
                                        function s(u) {
                                            d(r, a, n, i, s, 'throw', u);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    g = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const n = e.args,
                                r = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(u);
                                    for (a = 0; a < r.length; a++) (t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                    return n;
                                })(e, m);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, r, {
                                          arguments:
                                              ((a = n),
                                              Object.entries(a).map(([u, e]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, r));
                        } else viewEnv.handleViewEvent({ __Type: t, type: u });
                        var a;
                    },
                    h = () => g(o.CLOSE),
                    p = (u, e) => {
                        u.keyCode === _.n.ESCAPE && e();
                    };
                var v = t(7572);
                const w = n.instance,
                    b = {
                        DataTracker: r.Z,
                        ViewModel: v.Z,
                        ViewEventType: o,
                        NumberFormatType: E,
                        RealFormatType: c,
                        TimeFormatType: A,
                        DateFormatType: F,
                        makeGlobalBoundingBox: B,
                        sendMoveEvent: (u) => g(o.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: () => g(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            g(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, a, n = R.invalid('resId'), r) => {
                            const i = D.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                l = s.x,
                                E = s.y,
                                c = s.width,
                                A = s.height,
                                F = {
                                    x: D.O.view.pxToRem(l) + i.x,
                                    y: D.O.view.pxToRem(E) + i.y,
                                    width: D.O.view.pxToRem(c),
                                    height: D.O.view.pxToRem(A),
                                };
                            g(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: a || R.invalid('resId'),
                                targetID: n,
                                direction: e,
                                bbox: B(F),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (u) => {
                            const e = (e) => p(e, u);
                            return (
                                window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            p(u, h);
                        },
                        handleViewEvent: g,
                        onBindingsReady: C,
                        onLayoutReady: () =>
                            new Promise((u) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        u();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                        dumpViewModel: function u(e) {
                            const t = {};
                            if ('object' != typeof e) return e;
                            for (const a in e)
                                if (Object.prototype.hasOwnProperty.call(e, a)) {
                                    const n = Object.prototype.toString.call(e[a]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = e[a];
                                        t[a] = [];
                                        for (let e = 0; e < n.length; e++) t[a].push({ value: u(n[e].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[a] = u(e[a]))
                                            : (t[a] = e[a]);
                                }
                            return t;
                        },
                        ClickOutsideManager: w,
                        SystemLocale: i,
                        UserLocale: s,
                    };
                window.ViewEnvHelper = b;
            },
            8348: (u, e, t) => {
                'use strict';
                var a = t(6179),
                    n = t.n(a);
                const r = (u, e, t) =>
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
                const s = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var o;
                function l(u, e, t) {
                    const a = (function (u, e) {
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
                        n = (function (u, e) {
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
                })(o || (o = {}));
                const E = i.O.client.getSize('rem'),
                    c = E.width,
                    A = E.height,
                    F = Object.assign({ width: c, height: A }, l(c, A, s)),
                    _ = (0, a.createContext)(F),
                    D = ['children'],
                    m = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) (t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                return n;
                            })(u, D);
                        const n = (0, a.useContext)(_),
                            i = n.extraLarge,
                            s = n.large,
                            o = n.medium,
                            l = n.small,
                            E = n.extraSmall,
                            c = n.extraLargeWidth,
                            A = n.largeWidth,
                            F = n.mediumWidth,
                            m = n.smallWidth,
                            d = n.extraSmallWidth,
                            B = n.extraLargeHeight,
                            C = n.largeHeight,
                            g = n.mediumHeight,
                            h = n.smallHeight,
                            p = n.extraSmallHeight,
                            v = { extraLarge: B, large: C, medium: g, small: h, extraSmall: p };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && i) return e;
                            if (t.large && s) return e;
                            if (t.medium && o) return e;
                            if (t.small && l) return e;
                            if (t.extraSmall && E) return e;
                        } else {
                            if (t.extraLargeWidth && c) return r(e, t, v);
                            if (t.largeWidth && A) return r(e, t, v);
                            if (t.mediumWidth && F) return r(e, t, v);
                            if (t.smallWidth && m) return r(e, t, v);
                            if (t.extraSmallWidth && d) return r(e, t, v);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && B) return e;
                                if (t.largeHeight && C) return e;
                                if (t.mediumHeight && g) return e;
                                if (t.smallHeight && h) return e;
                                if (t.extraSmallHeight && p) return e;
                            }
                        }
                        return null;
                    };
                (m.defaultProps = {
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
                    (0, a.memo)(m);
                const d = (0, a.memo)(({ children: u }) => {
                    const e = (0, a.useContext)(_),
                        t = (0, a.useState)(e),
                        r = t[0],
                        o = t[1],
                        E = (0, a.useCallback)((u, e) => {
                            const t = i.O.view.pxToRem(u),
                                a = i.O.view.pxToRem(e);
                            o(Object.assign({ width: t, height: a }, l(t, a, s)));
                        }, []);
                    ((u) => {
                        const e = (0, a.useRef)(!1);
                        e.current || (u(), (e.current = !0));
                    })(() => {
                        engine.on('clientResized', E);
                    }),
                        (0, a.useEffect)(() => () => engine.off('clientResized', E), [E]);
                    const c = (0, a.useMemo)(() => Object.assign({}, r), [r]);
                    return n().createElement(_.Provider, { value: c }, u);
                });
                var B = t(6483),
                    C = t.n(B),
                    g = t(926),
                    h = t.n(g);
                let p, v, w;
                !(function (u) {
                    (u[(u.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = s.small.width)] = 'Small'),
                        (u[(u.Medium = s.medium.width)] = 'Medium'),
                        (u[(u.Large = s.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge');
                })(p || (p = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = s.small.width)] = 'Small'),
                            (u[(u.Medium = s.medium.width)] = 'Medium'),
                            (u[(u.Large = s.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge');
                    })(v || (v = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = s.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = s.small.height)] = 'Small'),
                            (u[(u.Medium = s.medium.height)] = 'Medium'),
                            (u[(u.Large = s.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = s.extraLarge.height)] = 'ExtraLarge');
                    })(w || (w = {}));
                const b = () => {
                        const u = (0, a.useContext)(_),
                            e = u.width,
                            t = u.height,
                            n = ((u) => {
                                switch (!0) {
                                    case u.extraLarge:
                                        return p.ExtraLarge;
                                    case u.large:
                                        return p.Large;
                                    case u.medium:
                                        return p.Medium;
                                    case u.small:
                                        return p.Small;
                                    case u.extraSmall:
                                        return p.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), p.ExtraSmall;
                                }
                            })(u),
                            r = ((u) => {
                                switch (!0) {
                                    case u.extraLargeWidth:
                                        return v.ExtraLarge;
                                    case u.largeWidth:
                                        return v.Large;
                                    case u.mediumWidth:
                                        return v.Medium;
                                    case u.smallWidth:
                                        return v.Small;
                                    case u.extraSmallWidth:
                                        return v.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), v.ExtraSmall;
                                }
                            })(u),
                            i = ((u) => {
                                switch (!0) {
                                    case u.extraLargeHeight:
                                        return w.ExtraLarge;
                                    case u.largeHeight:
                                        return w.Large;
                                    case u.mediumHeight:
                                        return w.Medium;
                                    case u.smallHeight:
                                        return w.Small;
                                    case u.extraSmallHeight:
                                        return w.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), w.ExtraSmall;
                                }
                            })(u);
                        return { mediaSize: n, mediaWidth: r, mediaHeight: i, remScreenWidth: e, remScreenHeight: t };
                    },
                    f = ['children', 'className'];
                function S() {
                    return (
                        (S =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        S.apply(this, arguments)
                    );
                }
                const x = {
                        [v.ExtraSmall]: '',
                        [v.Small]: h().SMALL_WIDTH,
                        [v.Medium]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH}`,
                        [v.Large]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH} ${h().LARGE_WIDTH}`,
                        [v.ExtraLarge]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH} ${h().LARGE_WIDTH} ${h().EXTRA_LARGE_WIDTH}`,
                    },
                    T = {
                        [w.ExtraSmall]: '',
                        [w.Small]: h().SMALL_HEIGHT,
                        [w.Medium]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT}`,
                        [w.Large]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT} ${h().LARGE_HEIGHT}`,
                        [w.ExtraLarge]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT} ${h().LARGE_HEIGHT} ${h().EXTRA_LARGE_HEIGHT}`,
                    },
                    y = {
                        [p.ExtraSmall]: '',
                        [p.Small]: h().SMALL,
                        [p.Medium]: `${h().SMALL} ${h().MEDIUM}`,
                        [p.Large]: `${h().SMALL} ${h().MEDIUM} ${h().LARGE}`,
                        [p.ExtraLarge]: `${h().SMALL} ${h().MEDIUM} ${h().LARGE} ${h().EXTRA_LARGE}`,
                    },
                    M = (u) => {
                        let e = u.children,
                            t = u.className,
                            a = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) (t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                return n;
                            })(u, f);
                        const r = b(),
                            i = r.mediaWidth,
                            s = r.mediaHeight,
                            o = r.mediaSize;
                        return n().createElement('div', S({ className: C()(t, x[i], T[s], y[o]) }, a), e);
                    },
                    P = ['children'],
                    L = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) (t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                return n;
                            })(u, P);
                        return n().createElement(d, null, n().createElement(M, t, e));
                    };
                var O = t(493),
                    N = t.n(O);
                function k(u) {
                    engine.call('PlaySound', u);
                }
                const I = {
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
                    U = [
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
                function H() {
                    return (
                        (H =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        H.apply(this, arguments)
                    );
                }
                class G extends n().PureComponent {
                    constructor(...u) {
                        super(...u),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (u) => (e) => {
                                u && u(e),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && k(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (u) => (e) => {
                                u && u(e), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (u) => (e) => {
                                u && u(e),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && k(this.props.soundClick);
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
                            a = u.goto,
                            r = u.side,
                            i = u.type,
                            s = u.classNames,
                            o = u.onMouseEnter,
                            l = u.onMouseLeave,
                            E = u.onMouseDown,
                            c = u.onMouseUp,
                            A =
                                (u.soundClick,
                                u.soundHover,
                                (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(u);
                                    for (a = 0; a < r.length; a++) (t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                    return n;
                                })(u, U)),
                            F = C()(I.base, I[`base__${i}`], I[`base__${r}`], null == s ? void 0 : s.base),
                            _ = C()(I.icon, I[`icon__${i}`], I[`icon__${r}`], null == s ? void 0 : s.icon),
                            D = C()(I.glow, null == s ? void 0 : s.glow),
                            m = C()(I.caption, I[`caption__${i}`], null == s ? void 0 : s.caption),
                            d = C()(I.goto, null == s ? void 0 : s.goto);
                        return n().createElement(
                            'div',
                            H(
                                {
                                    className: F,
                                    onMouseEnter: this._onMouseEnter(o),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(E),
                                    onMouseUp: this._onMouseUp(c),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                A,
                            ),
                            'info' !== i && n().createElement('div', { className: I.shine }),
                            n().createElement('div', { className: _ }, n().createElement('div', { className: D })),
                            n().createElement('div', { className: m }, e),
                            a && n().createElement('div', { className: d }, a),
                        );
                    }
                }
                G.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var $ = t(5521),
                    W = t(4179);
                const q = (u) => {
                    console.error(u.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function V(u = $.n.NONE, e = q, t = !1) {
                    (0, a.useEffect)(() => {
                        if (u !== $.n.NONE)
                            return (
                                window.addEventListener('keydown', a, t),
                                () => {
                                    window.removeEventListener('keydown', a, t);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === u) {
                                if (i.O.view.isEventHandled()) return;
                                i.O.view.setEventHandled(), e(a), t && a.stopPropagation();
                            }
                        }
                    }, [e, u, t]);
                }
                const j = (u) => Math.sqrt(1 - Math.pow(u - 1, 2));
                var z = t(3403),
                    Y = t(7030);
                let X, K, Q, Z, J, uu, eu;
                !(function (u) {
                    (u.Items = 'items'),
                        (u.Equipment = 'equipment'),
                        (u.Xp = 'xp'),
                        (u.XpFactor = 'xpFactor'),
                        (u.Blueprints = 'blueprints'),
                        (u.BlueprintsAny = 'blueprintsAny'),
                        (u.Goodies = 'goodies'),
                        (u.Berths = 'berths'),
                        (u.Slots = 'slots'),
                        (u.Tokens = 'tokens'),
                        (u.CrewSkins = 'crewSkins'),
                        (u.CrewBooks = 'crewBooks'),
                        (u.Customizations = 'customizations'),
                        (u.CreditsFactor = 'creditsFactor'),
                        (u.Currency = 'currency'),
                        (u.TankmenXp = 'tankmenXP'),
                        (u.TankmenXpFactor = 'tankmenXPFactor'),
                        (u.FreeXpFactor = 'freeXPFactor'),
                        (u.BattleToken = 'battleToken'),
                        (u.PremiumUniversal = 'premium_universal'),
                        (u.Gold = 'gold'),
                        (u.Credits = 'credits'),
                        (u.Crystal = 'crystal'),
                        (u.FreeXp = 'freeXP'),
                        (u.Premium = 'premium'),
                        (u.PremiumPlus = 'premium_plus'),
                        (u.BattlePassPoints = 'battlePassPoints'),
                        (u.BattlePassSelectToken = 'battlePassSelectToken'),
                        (u.StyleProgressToken = 'styleProgressToken'),
                        (u.TmanToken = 'tmanToken'),
                        (u.NaturalCover = 'naturalCover'),
                        (u.BpCoin = 'bpcoin'),
                        (u.BattlaPassFinalAchievement = 'dossier_achievement'),
                        (u.BattleBadge = 'dossier_badge'),
                        (u.NewYearAlbumsAccess = 'newYearAlbumsAccess'),
                        (u.NewYearFillers = 'ny22Fillers'),
                        (u.NewYearInvoice = 'newYearInvoice'),
                        (u.NewYearToyFragments = 'ny22ToyFragments'),
                        (u.NewYearSlot = 'newYearSlot'),
                        (u.BonusX5 = 'battle_bonus_x5'),
                        (u.CrewBonusX3 = 'crew_bonus_x3'),
                        (u.Vehicles = 'vehicles'),
                        (u.EpicSelectToken = 'epicSelectToken'),
                        (u.CollectionItem = 'collectionItem'),
                        (u.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                        (u.Comp7TokenCouponReward = 'comp7TokenCouponReward'),
                        (u.BattleBoosterGift = 'battleBooster_gift'),
                        (u.CosmicLootboxSilver = 'lootBoxToken'),
                        (u.CosmicLootboxCommon = 'cosmic_2024_2'),
                        (u.RacesPoint = 'races_point');
                })(X || (X = {})),
                    (function (u) {
                        (u.Gold = 'gold'),
                            (u.Credits = 'credits'),
                            (u.Crystal = 'crystal'),
                            (u.Premium = 'premium'),
                            (u.PremiumPlus = 'premium_plus'),
                            (u.Vehicles = 'vehicles'),
                            (u.Customizations = 'customizations'),
                            (u.Blueprints = 'blueprints'),
                            (u.BlueprintsAny = 'blueprintsAny'),
                            (u.BlueprintsFinal = 'finalBlueprints'),
                            (u.Goodies = 'goodies'),
                            (u.CrewSkins = 'crewSkins'),
                            (u.Xp = 'xp'),
                            (u.XpFactor = 'xpFactor'),
                            (u.FreeXp = 'freeXP'),
                            (u.FreeXPFactor = 'freeXPFactor'),
                            (u.TankmenXP = 'tankmenXP'),
                            (u.TankmenXPFactor = 'tankmenXPFactor'),
                            (u.DailyXPFactor = 'dailyXPFactor'),
                            (u.CreditsFactor = 'creditsFactor'),
                            (u.Items = 'items'),
                            (u.StrBonus = 'strBonus'),
                            (u.Groups = 'groups'),
                            (u.Berths = 'berths'),
                            (u.Slots = 'slots'),
                            (u.Meta = 'meta'),
                            (u.Tokens = 'tokens'),
                            (u.Dossier = 'dossier'),
                            (u.OneOf = 'oneof'),
                            (u.PremiumUniversal = 'premium_universal'),
                            (u.BadgesGroup = 'badgesGroup'),
                            (u.Entitlements = 'entitlements'),
                            (u.RankedDailyBattles = 'rankedDailyBattles'),
                            (u.RankedBonusBattles = 'rankedBonusBattles'),
                            (u.BattlePassPoints = 'battlePassPoints'),
                            (u.BattleBadge = 'dossier_badge'),
                            (u.BattleAchievement = 'dossier_achievement');
                    })(K || (K = {})),
                    (function (u) {
                        (u.Big = 'big'),
                            (u.Small = 'small'),
                            (u.Mini = 'mini'),
                            (u.S600x450 = 's600x450'),
                            (u.S400x300 = 's400x300'),
                            (u.S296x222 = 's296x222'),
                            (u.S232x174 = 's232x174'),
                            (u.S180x135 = 's180x135'),
                            (u.S128x100 = 's128x100'),
                            (u.S80x80 = 's80x80'),
                            (u.S48x48 = 's48x48');
                    })(Q || (Q = {})),
                    (function (u) {
                        (u.MULTI = 'multi'),
                            (u.CURRENCY = 'currency'),
                            (u.PREMIUM_PLUS = 'premium_plus'),
                            (u.NUMBER = 'number'),
                            (u.STRING = 'string');
                    })(Z || (Z = {})),
                    (function (u) {
                        (u.BATTLE_BOOSTER = 'battleBooster'),
                            (u.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (u.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (u.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (u.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (u.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (u.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (u.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4');
                    })(J || (J = {})),
                    (function (u) {
                        u.BATTLE_BOOSTER = 'battleBooster';
                    })(uu || (uu = {})),
                    (function (u) {
                        (u.BATTLE_BOOSTER = 'battleBooster'),
                            (u.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (u.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (u.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (u.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (u.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (u.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (u.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4');
                    })(eu || (eu = {}));
                class tu extends n().PureComponent {
                    render() {
                        let u;
                        u = 'gold' === this.props.format ? W.B3.GOLD : W.B3.INTEGRAL;
                        const e = W.Z5.getNumberFormat(this.props.value, u);
                        return void 0 !== this.props.value && void 0 !== e ? e : null;
                    }
                }
                tu.defaultProps = { format: 'integral' };
                const au = [
                        X.Items,
                        X.Equipment,
                        X.Xp,
                        X.XpFactor,
                        X.Blueprints,
                        X.BlueprintsAny,
                        X.Goodies,
                        X.Berths,
                        X.Slots,
                        X.Tokens,
                        X.CrewSkins,
                        X.CrewBooks,
                        X.Customizations,
                        X.CreditsFactor,
                        X.TankmenXp,
                        X.TankmenXpFactor,
                        X.FreeXpFactor,
                        X.BattleToken,
                        X.PremiumUniversal,
                        X.NaturalCover,
                        X.BpCoin,
                        X.BattlePassSelectToken,
                        X.BattlaPassFinalAchievement,
                        X.BattleBadge,
                        X.BonusX5,
                        X.CrewBonusX3,
                        X.NewYearFillers,
                        X.NewYearInvoice,
                        X.EpicSelectToken,
                        X.Comp7TokenWeeklyReward,
                        X.Comp7TokenCouponReward,
                        X.BattleBoosterGift,
                        X.CosmicLootboxCommon,
                        X.CosmicLootboxSilver,
                    ],
                    nu = [X.Gold, X.Credits, X.Crystal, X.FreeXp],
                    ru = [X.BattlePassPoints, X.RacesPoint],
                    iu = [X.PremiumPlus, X.Premium],
                    su = ['engravings', 'backgrounds'],
                    ou = ['engraving', 'background'],
                    lu = (u, e, t) => {
                        const a = e && { contentId: e };
                        return Object.assign(
                            {
                                args: u,
                                isEnabled: Boolean((u && u.tooltipId) || e),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !e,
                            },
                            a,
                            t,
                        );
                    },
                    Eu = (u, e) => {
                        if (void 0 === u) return null;
                        switch (e) {
                            case Z.MULTI: {
                                const e = Number(u);
                                return isFinite(e) && e > 1 ? `x${Math.floor(e)}` : null;
                            }
                            case Z.CURRENCY:
                            case Z.NUMBER:
                                return n().createElement(tu, { format: 'integral', value: Number(u) });
                            case Z.PREMIUM_PLUS: {
                                const e = Number(u);
                                return isNaN(e) ? u : null;
                            }
                            default:
                                return u;
                        }
                    };
                let cu;
                function Au(u) {
                    return u.replace(/-/g, '_');
                }
                !(function (u) {
                    (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                })(cu || (cu = {}));
                const Fu = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    _u = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    Du = (u, e, t = cu.left) => u.split(e).reduce(t === cu.left ? Fu : _u, []),
                    mu = (() => {
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
                    du = ['zh_cn', 'zh_sg', 'zh_tw'],
                    Bu = [X.Vehicles, X.TmanToken, X.CollectionItem],
                    Cu = 900,
                    gu = 400,
                    hu = (u) => Cu + 200 * u,
                    pu = (u, e) =>
                        'tmanToken' === u.name ? `R.images.gui.maps.icons.tankmen.icons.${e}.${u.bigIcon}` : u.image(e);
                function vu() {
                    return !1;
                }
                console.log;
                var wu = t(9174);
                function bu(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, a = new Array(e); t < e; t++) a[t] = u[t];
                    return a;
                }
                const fu = (u) => (0 === u ? window : window.subViews.get(u));
                function Su(u, e) {
                    return Array.isArray(u) ? u.map(e) : u.map((u, t, a) => e(null == u ? void 0 : u.value, t, a));
                }
                var xu = t(3946);
                const Ru = (u) => {
                        return {
                            name: u.name,
                            image: (e) =>
                                ((u, e = Q.Small) => {
                                    const t = Au(u.vehicleName || '');
                                    if (u.name === X.Vehicles)
                                        switch (e) {
                                            case Q.Mini:
                                            case Q.Small:
                                            case Q.S48x48:
                                                return u.isRent
                                                    ? 'R.images.gui.maps.icons.quests.bonuses.small.vehicles_rent'
                                                    : 'R.images.gui.maps.icons.quests.bonuses.small.vehicles';
                                            case Q.Big:
                                            case Q.S80x80:
                                                return u.isRent
                                                    ? 'R.images.gui.maps.icons.quests.bonuses.big.vehicles_rent'
                                                    : 'R.images.gui.maps.icons.quests.bonuses.big.vehicles';
                                            case Q.S128x100:
                                            case Q.S180x135:
                                                return `R.images.gui.maps.shop.vehicles.c_180x135.${t}`;
                                            case Q.S232x174:
                                            case Q.S296x222:
                                                return `R.images.gui.maps.shop.vehicles.c_360x270.${t}`;
                                            case Q.S400x300:
                                            case Q.S600x450:
                                                return `R.images.gui.maps.shop.vehicles.c_600x450.${t}`;
                                            default:
                                                return (
                                                    console.error('Unknown vehicle image size', e, u.vehicleName),
                                                    'R.images.gui.maps.icons.quests.bonuses.big.vehicles'
                                                );
                                        }
                                    if (u.name === X.TmanToken)
                                        switch (e) {
                                            case Q.Mini:
                                            case Q.Small:
                                            case Q.S48x48:
                                            case Q.Big:
                                            case Q.S80x80:
                                                return `R.images.gui.maps.icons.tankmen.icons.s80x80.${u.icon}`;
                                            case Q.S128x100:
                                            case Q.S180x135:
                                            case Q.S232x174:
                                                return `R.images.gui.maps.icons.tankmen.icons.s232x174.${u.icon}`;
                                            case Q.S296x222:
                                                return `R.images.gui.maps.icons.tankmen.icons.s296x222.${u.icon}`;
                                            case Q.S400x300:
                                                return `R.images.gui.maps.icons.tankmen.icons.s400x300.${u.icon}`;
                                            case Q.S600x450:
                                                return `R.images.gui.maps.icons.tankmen.icons.s600x450.${u.icon}`;
                                            default:
                                                return (
                                                    console.error('Unknown image size', e),
                                                    'R.images.gui.maps.icons.tankmen.icons.s600x450.tankman'
                                                );
                                        }
                                    if (u.name === X.CollectionItem)
                                        switch (e) {
                                            case Q.Mini:
                                            case Q.Small:
                                            case Q.S48x48:
                                                return `R.images.gui.maps.icons.collectionItems.c_48x48.${u.icon}`;
                                            case Q.Big:
                                            case Q.S80x80:
                                                return `R.images.gui.maps.icons.collectionItems.c_80x80.${u.icon}`;
                                            case Q.S128x100:
                                            case Q.S180x135:
                                            case Q.S232x174:
                                                return `R.images.gui.maps.icons.collectionItems.c_232x174.${u.icon}`;
                                            case Q.S296x222:
                                                return `R.images.gui.maps.icons.collectionItems.c_296x222.${u.icon}`;
                                            case Q.S400x300:
                                                return `R.images.gui.maps.icons.collectionItems.c_400x300.${u.icon}`;
                                            case Q.S600x450:
                                                return `R.images.gui.maps.icons.collectionItems.c_600x450.${u.icon}`;
                                            default:
                                                console.error('Unknown image size', e);
                                        }
                                    return ((u, e = Q.Small) => {
                                        const t = u.name,
                                            a = u.type,
                                            n = u.value,
                                            r = u.icon,
                                            i = u.item,
                                            s = u.dogTagType,
                                            o = ((u) => {
                                                switch (u) {
                                                    case Q.S600x450:
                                                        return 'c_600x450';
                                                    case Q.S400x300:
                                                        return 'c_400x300';
                                                    case Q.S296x222:
                                                        return 'c_296x222';
                                                    case Q.S232x174:
                                                        return 'c_232x174';
                                                    case Q.Big:
                                                        return 'c_80x80';
                                                    case Q.Small:
                                                        return 'c_48x48';
                                                    default:
                                                        return u;
                                                }
                                            })(e);
                                        switch (t) {
                                            case 'basic':
                                            case 'plus':
                                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${a}_${n}`;
                                            case 'premium':
                                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${t}_plus_${n}`;
                                            case 'premium_plus':
                                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${t}_${n}`;
                                            case 'items':
                                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${i}`;
                                            case 'blueprints':
                                            case 'blueprintsAny':
                                            case 'finalBlueprints':
                                                return `R.images.gui.maps.icons.blueprints.fragment.${e}.${r}`;
                                            case 'tokens':
                                            case 'battleToken':
                                                return ((u, e) => {
                                                    switch (e) {
                                                        case Q.Big:
                                                            return u.iconBig.replace('..', 'img://gui');
                                                        case Q.Small:
                                                            return u.iconSmall.replace('..', 'img://gui');
                                                        default:
                                                            return `R.images.gui.maps.icons.quests.bonuses.${e}.${u.icon}`;
                                                    }
                                                })(u, e);
                                            case 'lootBoxToken':
                                            case 'customizations':
                                            case 'styleProgress':
                                            case 'crewSkins':
                                            case 'goodies':
                                            case 'groups':
                                            case 'tmanToken':
                                            case 'battlePassSelectToken':
                                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${r}`;
                                            case 'crewBooks':
                                                return `R.images.gui.maps.icons.crewBooks.books.${e}.${r}`;
                                            case 'dogTagComponents':
                                                return ((u, e, t) => {
                                                    const a = su[u];
                                                    if (a) {
                                                        const n = R.images.gui.maps.icons.dogtags.$dyn(e).$dyn(a),
                                                            r = n.$dyn(t);
                                                        return r ? `${r}` : `${n.$dyn(ou[u])}`;
                                                    }
                                                    return (
                                                        console.error(
                                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                                        ),
                                                        ''
                                                    );
                                                })(s, e, r);
                                            case 'dossier_badge':
                                                return `R.images.gui.maps.icons.quests.bonuses.badges.${o}.${r}`;
                                            case 'dossier_achievement':
                                                return `R.images.gui.maps.icons.achievement.${o}.${r}`;
                                            case 'xp':
                                            case 'xpFactor':
                                                return `R.images.gui.maps.icons.quests.bonuses.${e}.exp`;
                                            case 'creditsFactor':
                                                return `R.images.gui.maps.icons.quests.bonuses.${e}.credits`;
                                            case 'tankmenXPFactor':
                                                return `R.images.gui.maps.icons.quests.bonuses.${e}.tankmenXP`;
                                            case 'dailyXPFactor':
                                            case 'freeXPFactor':
                                                return `R.images.gui.maps.icons.quests.bonuses.${e}.freeXP`;
                                            case 'premiumTank':
                                                return `R.images.gui.maps.icons.quests.bonuses.${e}.vehicles`;
                                            case 'styleProgressToken':
                                                return `R.images.gui.maps.icons.quests.bonuses.${e}.style_3d`;
                                            case 'collectionItem':
                                                return `R.images.gui.maps.icons.collectionItems.${o}.${r}`;
                                            default:
                                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${t}`;
                                        }
                                    })(u, e);
                                })(u, e),
                            value: u.value,
                            valueType:
                                ((e = u.name),
                                au.includes(e)
                                    ? Z.MULTI
                                    : nu.includes(e)
                                      ? Z.CURRENCY
                                      : ru.includes(e)
                                        ? Z.NUMBER
                                        : iu.includes(e)
                                          ? Z.PREMIUM_PLUS
                                          : Z.STRING),
                            label: u.label,
                            special: u.overlayType,
                            tooltipArgs: lu({ tooltipId: u.tooltipId }, Number(u.tooltipContentId)),
                            type: u.type,
                            vehicleNation: u.nationTag,
                            vehicleLvl: u.level,
                            vehicleName: u.label,
                            isElite: u.isElite,
                            isRent: u.isRent,
                            rentBattles: u.rentBattles,
                            rentDays: u.rentDays,
                            isCompensation: u.isCompensation,
                            compensatedBonus: u.compensatedBonus,
                            toyID: u.toyID,
                            rankValue: u.rankValue,
                            icon: u.icon,
                            bigIcon: u.bigIcon,
                            isNew: u.isNew,
                        };
                        var e;
                    },
                    Tu = ((u, e) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: u = 'real', options: r, children: s, mocks: o }) {
                                const l = (0, a.useRef)([]),
                                    E = (u, t, a) => {
                                        var n;
                                        const r = (function ({
                                                initializer: u = !0,
                                                rootId: e = 0,
                                                getRoot: t = fu,
                                                context: a = 'model',
                                            } = {}) {
                                                const n = new Map();
                                                function r(u, e = 0) {
                                                    viewEnv.removeDataChangedCallback(u, e)
                                                        ? n.delete(u)
                                                        : console.error("Can't remove callback by id:", u);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (u, e, t) => {
                                                        t.forEach((e) => {
                                                            const t = n.get(e);
                                                            void 0 !== t && t(u);
                                                        });
                                                    });
                                                });
                                                const s = (u) => {
                                                    const n = t(e),
                                                        r = a.split('.').reduce((u, e) => u[e], n);
                                                    return 'string' != typeof u || 0 === u.length
                                                        ? r
                                                        : u.split('.').reduce((u, e) => {
                                                              const t = u[e];
                                                              return 'function' == typeof t ? t.bind(u) : t;
                                                          }, r);
                                                };
                                                return {
                                                    subscribe: (t, r) => {
                                                        const o = 'string' == typeof r ? `${a}.${r}` : a,
                                                            l = i.O.view.addModelObserver(o, e, !0);
                                                        return n.set(l, t), u && t(s(r)), l;
                                                    },
                                                    readByPath: s,
                                                    createCallback: (u, e) => {
                                                        const t = s(e);
                                                        return (...e) => {
                                                            t(u(...e));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (u) => {
                                                        const e = s(u);
                                                        return () => {
                                                            e();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (
                                                            var u,
                                                                t = (function (u, e) {
                                                                    var t =
                                                                        ('undefined' != typeof Symbol &&
                                                                            u[Symbol.iterator]) ||
                                                                        u['@@iterator'];
                                                                    if (t) return (t = t.call(u)).next.bind(t);
                                                                    if (
                                                                        Array.isArray(u) ||
                                                                        (t = (function (u, e) {
                                                                            if (u) {
                                                                                if ('string' == typeof u)
                                                                                    return bu(u, e);
                                                                                var t = Object.prototype.toString
                                                                                    .call(u)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === t &&
                                                                                        u.constructor &&
                                                                                        (t = u.constructor.name),
                                                                                    'Map' === t || 'Set' === t
                                                                                        ? Array.from(u)
                                                                                        : 'Arguments' === t ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                t,
                                                                                            )
                                                                                          ? bu(u, e)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(u)) ||
                                                                        (e && u && 'number' == typeof u.length)
                                                                    ) {
                                                                        t && (u = t);
                                                                        var a = 0;
                                                                        return function () {
                                                                            return a >= u.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: u[a++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(n.keys());
                                                            !(u = t()).done;

                                                        )
                                                            r(u.value, e);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(t),
                                            s =
                                                'real' === u
                                                    ? r
                                                    : Object.assign({}, r, {
                                                          readByPath:
                                                              null != (n = null == a ? void 0 : a.getter)
                                                                  ? n
                                                                  : () => {},
                                                      }),
                                            o = (e) =>
                                                'mocks' === u ? (null == a ? void 0 : a.getter(e)) : s.readByPath(e),
                                            E = (u) => l.current.push(u),
                                            c = (({ observableModel: u }) => {
                                                const e = {
                                                        root: u.object(),
                                                        mainRewards: u.array('mainRewards'),
                                                        rewards: u.array('rewards'),
                                                        progressionStages: u.array('progressionStages'),
                                                    },
                                                    t = (0, xu.Om)(() => Su(e.progressionStages.get(), (u) => u), {
                                                        equals: vu,
                                                    }),
                                                    a = (0, xu.Om)(() => Su(e.mainRewards.get(), (u) => Ru(u)), {
                                                        equals: vu,
                                                    }),
                                                    n = (0, xu.Om)(() => Su(e.rewards.get(), (u) => Ru(u)), {
                                                        equals: vu,
                                                    }),
                                                    r = (0, xu.Om)(() => Boolean(a().length), { equals: vu }),
                                                    i = (0, xu.Om)(() => Boolean(n().length), { equals: vu }),
                                                    s = (0, xu.Om)(() => a().some((u) => Bu.includes(u.name)), {
                                                        equals: vu,
                                                    }),
                                                    o = (0, xu.Om)(() => a().some((u) => u.name === X.Vehicles), {
                                                        equals: vu,
                                                    }),
                                                    l = (0, xu.Om)(() => Math.min(n().length, 9), { equals: vu }),
                                                    E = (0, xu.Om)(() => 200 * a().length + gu, { equals: vu }),
                                                    c = (0, xu.Om)(
                                                        () => {
                                                            const u = l() > 0 ? gu : 0;
                                                            return E() + 200 * l() + u;
                                                        },
                                                        { equals: vu },
                                                    );
                                                return Object.assign({}, e, {
                                                    computes: {
                                                        getMainRewards: a,
                                                        getRegularRewards: n,
                                                        getProgressionStages: t,
                                                        hasMainRewards: r,
                                                        hasRegularRewards: i,
                                                        hasGoldMainRewards: s,
                                                        getVisibleRewardsLength: l,
                                                        getRewardsShowDelay: E,
                                                        getFooterShowDelay: c,
                                                        hasVehicleReward: o,
                                                    },
                                                });
                                            })({
                                                mode: u,
                                                readByPath: o,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const a = null != t ? t : o(e),
                                                            n = wu.LO.box(a, { equals: vu });
                                                        return (
                                                            'real' === u &&
                                                                s.subscribe(
                                                                    (0, wu.aD)((u) => n.set(u)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const a = null != t ? t : o(e),
                                                            n = wu.LO.box(a, { equals: vu });
                                                        return (
                                                            'real' === u &&
                                                                s.subscribe(
                                                                    (0, wu.aD)((u) => n.set(u)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const a = o(t);
                                                        if (Array.isArray(e)) {
                                                            const n = e.reduce(
                                                                (u, e) => ((u[e] = wu.LO.box(a[e], {})), u),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === u &&
                                                                    s.subscribe(
                                                                        (0, wu.aD)((u) => {
                                                                            e.forEach((e) => {
                                                                                n[e].set(u[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                n
                                                            );
                                                        }
                                                        {
                                                            const n = e,
                                                                r = Object.entries(n),
                                                                i = r.reduce(
                                                                    (u, [e, t]) => ((u[t] = wu.LO.box(a[e], {})), u),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === u &&
                                                                    s.subscribe(
                                                                        (0, wu.aD)((u) => {
                                                                            r.forEach(([e, t]) => {
                                                                                i[t].set(u[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: E,
                                            }),
                                            A = { mode: u, model: c, externalModel: s, cleanup: E };
                                        return {
                                            model: c,
                                            controls: 'mocks' === u && a ? a.controls(A) : e(A),
                                            externalModel: s,
                                            mode: u,
                                        };
                                    },
                                    c = (0, a.useRef)(!1),
                                    A = (0, a.useState)(u),
                                    F = A[0],
                                    _ = A[1],
                                    D = (0, a.useState)(() => E(u, r, o)),
                                    m = D[0],
                                    d = D[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        c.current ? d(E(F, r, o)) : (c.current = !0);
                                    }, [o, F, r]),
                                    (0, a.useEffect)(() => {
                                        _(u);
                                    }, [u]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            m.externalModel.dispose(), l.current.forEach((u) => u());
                                        },
                                        [m],
                                    ),
                                    n().createElement(t.Provider, { value: m }, s)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(0, ({ externalModel: u }) => ({
                        close: u.createCallbackNoArgs('onCloseButtonClick'),
                        onContinueButtonClick: u.createCallbackNoArgs('onContinueButtonClick'),
                    })),
                    yu = Tu[0],
                    Mu = Tu[1];
                function Pu(u) {
                    const e = u.chunk,
                        t = e.rows * e.columns;
                    return (a) => {
                        const n = a % t,
                            r = (n % e.columns) * u.width,
                            i = Math.trunc(n / e.columns) * u.height;
                        return { path: u.getChunkPath(Math.trunc(a / t)), x: r, y: i };
                    };
                }
                const Lu = [
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
                function Ou() {
                    return (
                        (Ou =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        Ou.apply(this, arguments)
                    );
                }
                const Nu = (0, a.memo)(function (u) {
                        let e = u.width,
                            t = u.height,
                            r = u.getImageSource,
                            i = u.frameCount,
                            s = u.onAnimate,
                            o = u.frameTime,
                            l = void 0 === o ? 33 : o,
                            E = u.initialFrameIndex,
                            c = void 0 === E ? 0 : E,
                            A = u.lastFrameIndex,
                            F = void 0 === A ? i - 1 : A,
                            _ = u.loop,
                            D = void 0 === _ || _,
                            m = u.state,
                            d = void 0 === m ? 'play' : m,
                            B = u.onAnimationDone,
                            C = u.onAnimationComplete,
                            g = u.poster,
                            h = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) (t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                return n;
                            })(u, Lu);
                        const p = (0, a.useRef)(null);
                        return (
                            (0, a.useEffect)(() => {
                                const u = p.current;
                                if (!u) return;
                                const e = u.getContext('2d'),
                                    t = (t) => {
                                        e.clearRect(0, 0, u.width, u.height), e.drawImage(t.img, -t.x, -t.y);
                                    };
                                switch (d) {
                                    case 'play':
                                        return (function () {
                                            const u = Uu(c, F, r),
                                                e = ku(c, F),
                                                a = window.setInterval(() => {
                                                    const n = e(),
                                                        r = u.get(n);
                                                    r
                                                        ? (null == s || s(n, r),
                                                          t(r),
                                                          n === F &&
                                                              (null == C || C(),
                                                              D || (null == B || B(), window.clearInterval(a))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, l);
                                            return () => window.clearInterval(a);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const u = 0 === c && g ? { path: g, x: 0, y: 0 } : r(c),
                                                e = new Image();
                                            e.src = u.path;
                                            const a = () => t(Iu(u, e));
                                            return (
                                                e.addEventListener('load', a), () => e.removeEventListener('load', a)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [l, r, c, F, D, s, C, B, g, d]),
                            n().createElement('canvas', Ou({}, h, { width: e, height: t, ref: p }))
                        );
                    }),
                    ku = (u, e) => {
                        let t = u;
                        return () => {
                            const a = t;
                            return (t += 1), t > e && (t = u), a;
                        };
                    },
                    Iu = (u, e) => Object.assign({}, u, { img: e }),
                    Uu = (u, e, t) => {
                        const a = new Map(),
                            n = {};
                        for (let r = u; r <= e; r++) {
                            const u = t(r),
                                e = n[u.path];
                            if (e) a.set(r, Iu(u, e));
                            else {
                                const e = new Image();
                                (n[u.path] = e),
                                    (e.src = u.path),
                                    (e.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${r})`,
                                            u.path,
                                            `(${u.x},${u.y})`,
                                        );
                                    }),
                                    a.set(r, Iu(u, e));
                            }
                        }
                        return a;
                    },
                    Hu = [
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
                function Gu(u) {
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
                const $u = (u, e, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: W.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    Wu = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            n = u.args,
                            r = u.onMouseEnter,
                            i = u.onMouseLeave,
                            s = u.onMouseDown,
                            o = u.onClick,
                            l = u.ignoreShowDelay,
                            E = void 0 !== l && l,
                            c = u.ignoreMouseClick,
                            A = void 0 !== c && c,
                            F = u.decoratorId,
                            _ = void 0 === F ? 0 : F,
                            D = u.isEnabled,
                            m = void 0 === D || D,
                            d = u.targetId,
                            B = void 0 === d ? 0 : d,
                            C = u.onShow,
                            g = u.onHide,
                            h = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) (t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                return n;
                            })(u, Hu);
                        const p = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, a.useMemo)(
                                () =>
                                    B ||
                                    ((u = 1) => {
                                        const e = new Error().stack;
                                        let t,
                                            a = R.invalid('resId');
                                        return (
                                            e &&
                                                ((t = e.split('\n')[u].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== t &&
                                                    window.subViews[t] &&
                                                    (a = window.subViews[t].id)),
                                            { caller: t, stack: e, resId: a }
                                        );
                                    })().resId,
                                [B],
                            ),
                            w = (0, a.useCallback)(() => {
                                (p.current.isVisible && p.current.timeoutId) ||
                                    ($u(t, _, { isMouseEvent: !0, on: !0, arguments: Gu(n) }, v),
                                    C && C(),
                                    (p.current.isVisible = !0));
                            }, [t, _, n, v, C]),
                            b = (0, a.useCallback)(() => {
                                if (p.current.isVisible || p.current.timeoutId) {
                                    const u = p.current.timeoutId;
                                    u > 0 && (clearTimeout(u), (p.current.timeoutId = 0)),
                                        $u(t, _, { on: !1 }, v),
                                        p.current.isVisible && g && g(),
                                        (p.current.isVisible = !1);
                                }
                            }, [t, _, v, g]),
                            f = (0, a.useCallback)((u) => {
                                p.current.isVisible &&
                                    ((p.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (p.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(p.current.prevTarget) && b();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const u = p.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', f, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', f, { capture: !0 }),
                                            u && window.clearTimeout(u);
                                    }
                                );
                            }, []),
                            (0, a.useEffect)(() => {
                                !1 === m && b();
                            }, [m, b]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', b),
                                    () => {
                                        window.removeEventListener('mouseleave', b), b();
                                    }
                                ),
                                [b],
                            ),
                            m
                                ? (0, a.cloneElement)(
                                      e,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((S = e.props.onMouseEnter),
                                                  (u) => {
                                                      (u.clientX === window.innerWidth &&
                                                          u.clientY === window.innerHeight) ||
                                                          ((p.current.timeoutId = window.setTimeout(w, E ? 100 : 400)),
                                                          r && r(u),
                                                          S && S(u));
                                                  }),
                                              onMouseLeave: ((u) => (e) => {
                                                  b(), null == i || i(e), null == u || u(e);
                                              })(e.props.onMouseLeave),
                                              onClick: ((u) => (e) => {
                                                  !1 === A && b(), null == o || o(e), null == u || u(e);
                                              })(e.props.onClick),
                                              onMouseDown: ((u) => (e) => {
                                                  !1 === A && b(), null == s || s(e), null == u || u(e);
                                              })(e.props.onMouseDown),
                                          },
                                          h,
                                      ),
                                  )
                                : e
                        );
                        var S;
                    },
                    qu = ['children'];
                function Vu() {
                    return (
                        (Vu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        Vu.apply(this, arguments)
                    );
                }
                const ju = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) (t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                return n;
                            })(u, qu);
                        return n().createElement(
                            Wu,
                            Vu(
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
                    },
                    zu = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Yu() {
                    return (
                        (Yu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        Yu.apply(this, arguments)
                    );
                }
                const Xu = R.views.common.tooltip_window.simple_tooltip_content,
                    Ku = (u) => {
                        let e = u.children,
                            t = u.body,
                            r = u.header,
                            i = u.note,
                            s = u.alert,
                            o = u.args,
                            l = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(u);
                                for (a = 0; a < r.length; a++) (t = r[a]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                return n;
                            })(u, zu);
                        const E = (0, a.useMemo)(() => {
                            const u = Object.assign({}, o, { body: t, header: r, note: i, alert: s });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [s, t, r, i, o]);
                        return n().createElement(
                            Wu,
                            Yu(
                                {
                                    contentId:
                                        ((c = null == o ? void 0 : o.hasHtmlContent),
                                        c ? Xu.SimpleTooltipHtmlContent('resId') : Xu.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: E,
                                },
                                l,
                            ),
                            e,
                        );
                        var c;
                    };
                function Qu() {
                    return (
                        (Qu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        Qu.apply(this, arguments)
                    );
                }
                const Zu = ({ children: u, tooltipArgs: e, className: t }) => {
                        if (!e) return u;
                        const a = n().createElement('div', { className: t }, u);
                        if (e.header || e.body) return n().createElement(Ku, e, a);
                        const r = e.contentId,
                            i = e.args,
                            s = null == i ? void 0 : i.contentId;
                        return r || s
                            ? n().createElement(Wu, Qu({}, e, { contentId: r || s }), a)
                            : n().createElement(ju, e, a);
                    },
                    Ju = {
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
                    ue = ({
                        name: u,
                        image: e,
                        isPeriodic: t = !1,
                        size: a = Q.Big,
                        special: r,
                        value: i,
                        valueType: s,
                        style: o,
                        className: l,
                        classNames: E,
                        tooltipArgs: c,
                        periodicIconTooltipArgs: A,
                    }) => {
                        const F = ((u) => {
                                if (void 0 === u) return null;
                                switch (u) {
                                    case J.BATTLE_BOOSTER:
                                    case J.BATTLE_BOOSTER_REPLACE:
                                        return uu.BATTLE_BOOSTER;
                                }
                            })(r),
                            _ = ((u) => {
                                if (void 0 === u) return null;
                                switch (u) {
                                    case J.BATTLE_BOOSTER:
                                        return eu.BATTLE_BOOSTER;
                                    case J.BATTLE_BOOSTER_REPLACE:
                                        return eu.BATTLE_BOOSTER_REPLACE;
                                    case J.BUILT_IN_EQUIPMENT:
                                        return eu.BUILT_IN_EQUIPMENT;
                                    case J.EQUIPMENT_PLUS:
                                        return eu.EQUIPMENT_PLUS;
                                    case J.EQUIPMENT_TROPHY_BASIC:
                                        return eu.EQUIPMENT_TROPHY_BASIC;
                                    case J.EQUIPMENT_TROPHY_UPGRADED:
                                        return eu.EQUIPMENT_TROPHY_UPGRADED;
                                    case J.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return eu.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case J.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return eu.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case J.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return eu.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case J.PROGRESSION_STYLE_UPGRADED_1:
                                        return eu.PROGRESSION_STYLE_UPGRADED_1;
                                    case J.PROGRESSION_STYLE_UPGRADED_2:
                                        return eu.PROGRESSION_STYLE_UPGRADED_2;
                                    case J.PROGRESSION_STYLE_UPGRADED_3:
                                        return eu.PROGRESSION_STYLE_UPGRADED_3;
                                    case J.PROGRESSION_STYLE_UPGRADED_4:
                                        return eu.PROGRESSION_STYLE_UPGRADED_4;
                                }
                            })(r),
                            D = Eu(i, s);
                        return n().createElement(
                            'div',
                            { className: C()(Ju.base, Ju[`base__${a}`], l), style: o },
                            n().createElement(
                                Zu,
                                { tooltipArgs: c, className: Ju.tooltipWrapper },
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement(
                                        'div',
                                        { className: C()(Ju.image, null == E ? void 0 : E.image) },
                                        F &&
                                            n().createElement('div', {
                                                className: C()(Ju.highlight, null == E ? void 0 : E.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${F}_highlight)`,
                                                },
                                            }),
                                        e &&
                                            n().createElement('div', {
                                                className: C()(Ju.icon, null == E ? void 0 : E.rewardIcon),
                                                style: { backgroundImage: `url(${e})` },
                                            }),
                                        _ &&
                                            n().createElement('div', {
                                                className: C()(Ju.overlay, null == E ? void 0 : E.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${a}.${_}_overlay)`,
                                                },
                                            }),
                                    ),
                                    D &&
                                        n().createElement(
                                            'div',
                                            {
                                                className: C()(
                                                    Ju.info,
                                                    Ju[`info__${u}`],
                                                    s === Z.MULTI && Ju.info__multi,
                                                    null == E ? void 0 : E.info,
                                                ),
                                            },
                                            D,
                                        ),
                                ),
                            ),
                            t &&
                                n().createElement(
                                    Zu,
                                    { tooltipArgs: A },
                                    n().createElement('div', {
                                        className: C()(Ju.timer, null == E ? void 0 : E.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    ee = ({ index: u = 0, delay: e = 0, children: t }) => {
                        const a = (0, Y.useSpring)({
                            from: { scale: 1.2, opacity: 0, transform: 'translateY(20rem)' },
                            to: { scale: 1, opacity: 1, transform: 'translateY(0)' },
                            delay: e + hu(u),
                            config: { duration: gu, easing: j },
                            onStart: () => {
                                k(R.sounds.gui_random_reward_appear());
                            },
                        });
                        return n().createElement(Y.animated.div, { className: 'AnimatedReward_base_5d', style: a }, t);
                    },
                    te = {
                        base: 'CompensationLabel_base_69',
                        icon: 'CompensationLabel_icon_b1',
                        icon__vehicles: 'CompensationLabel_icon__vehicles_47',
                        value: 'CompensationLabel_value_69',
                        value__credits: 'CompensationLabel_value__credits_26',
                    },
                    ae = ({ compensatedBonusType: u, compensatedItem: e, value: t, valueType: a }) => {
                        const r = Eu(t, a);
                        return n().createElement(
                            'div',
                            { className: te.base },
                            n().createElement('div', { className: C()(te.icon, te[`icon__${e}`]) }),
                            n().createElement('div', { className: C()(te.value, te[`value__${u}`]) }, r),
                        );
                    },
                    ne = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    re = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3],
                    ie = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    se = {
                        base: 'VehicleName_base_6d',
                        base__white: 'VehicleName_base__white_03',
                        base__whiteSpanish: 'VehicleName_base__whiteSpanish_35',
                        nation: 'VehicleName_nation_13',
                        nation__china: 'VehicleName_nation__china_e7',
                        nation__czech: 'VehicleName_nation__czech_04',
                        nation__france: 'VehicleName_nation__france_37',
                        nation__germany: 'VehicleName_nation__germany_34',
                        nation__italy: 'VehicleName_nation__italy_40',
                        nation__japan: 'VehicleName_nation__japan_f2',
                        nation__poland: 'VehicleName_nation__poland_8c',
                        nation__sweden: 'VehicleName_nation__sweden_af',
                        nation__uk: 'VehicleName_nation__uk_49',
                        nation__usa: 'VehicleName_nation__usa_b7',
                        nation__ussr: 'VehicleName_nation__ussr_c0',
                        base__colored: 'VehicleName_base__colored_e2',
                        level: 'VehicleName_level_4c',
                        type: 'VehicleName_type_47',
                        type__AT_SPG: 'VehicleName_type__AT_SPG_b3',
                        type__elite: 'VehicleName_type__elite_3b',
                        type__heavyTank: 'VehicleName_type__heavyTank_31',
                        type__lightTank: 'VehicleName_type__lightTank_30',
                        type__mediumTank: 'VehicleName_type__mediumTank_55',
                        type__SPG: 'VehicleName_type__SPG_08',
                        base__medium: 'VehicleName_base__medium_7b',
                        name: 'VehicleName_name_8f',
                    },
                    oe = n().memo(
                        ({
                            isElite: u = !0,
                            vehicleName: e,
                            vehicleShortName: t = e,
                            vehicleNation: a,
                            vehicleType: r,
                            vehicleLvl: i,
                            size: s = 'small',
                            type: o = 'whiteSpanish',
                        }) => {
                            const l = C()(se.base, se[`base__${s}`], se[`base__${o}`]),
                                E = C()(se.nation, se[`nation__${a}`]),
                                c = C()(se.type, u && se.type__elite, se[`type__${Au(r)}`]);
                            return n().createElement(
                                'div',
                                { className: l },
                                n().createElement('div', { className: E }),
                                n().createElement(
                                    'div',
                                    { className: se.level },
                                    ((A = i),
                                    ie
                                        ? `${A}`
                                        : (function (u) {
                                              let e = '';
                                              for (let t = re.length - 1; t >= 0; t--)
                                                  for (; u >= re[t]; ) (e += ne[t]), (u -= re[t]);
                                              return e;
                                          })(A)),
                                ),
                                n().createElement('div', { className: c }),
                                n().createElement('div', { className: se.name }, t),
                            );
                            var A;
                        },
                    );
                function le() {
                    return (
                        (le =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        le.apply(this, arguments)
                    );
                }
                const Ee = ({ reward: u, index: e = 0, size: t = Q.S296x222 }) => {
                        const r = (0, a.useState)(!0),
                            i = r[0],
                            s = r[1],
                            o = Object.assign({}, u.tooltipArgs, { ignoreShowDelay: !0 });
                        (0, a.useEffect)(() => {
                            setTimeout(() => s(!1), hu(e) - 200);
                        }, []);
                        const l =
                            ('vehicles' === u.name &&
                                n().createElement(oe, {
                                    isElite: u.isElite,
                                    vehicleName: u.vehicleName || 'EMPTY_VEHICLE',
                                    vehicleNation: u.vehicleNation || 'ussr',
                                    vehicleType: u.type || 'mediumTank',
                                    vehicleLvl: u.vehicleLvl || 1,
                                })) ||
                            (u.isCompensation &&
                                n().createElement(
                                    Zu,
                                    { tooltipArgs: o },
                                    n().createElement(ae, {
                                        value: u.value,
                                        valueType: u.valueType,
                                        compensatedBonusType: u.name,
                                        compensatedItem: u.compensatedBonus,
                                    }),
                                )) ||
                            n().createElement('div', { className: 'MainReward_labelText_88' }, u.label);
                        return n().createElement(
                            'div',
                            { className: C()('MainReward_base_15', i && 'MainReward_base__disabled_3a') },
                            n().createElement(
                                ee,
                                { index: e },
                                n().createElement(
                                    ue,
                                    le({}, u, {
                                        image: pu(u, t),
                                        size: t,
                                        classNames: { info: 'MainReward_info_df' },
                                        tooltipArgs: o,
                                        value: u.isCompensation ? void 0 : u.value,
                                    }),
                                ),
                                n().createElement(
                                    'div',
                                    { className: 'MainReward_labelCont_6b' },
                                    n().createElement('div', { className: 'MainReward_label_1e' }, l),
                                ),
                            ),
                        );
                    },
                    ce = 'RewardList_reward_52';
                function Ae() {
                    return (
                        (Ae =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (u[a] = t[a]);
                                }
                                return u;
                            }),
                        Ae.apply(this, arguments)
                    );
                }
                const Fe = ({
                        index: u,
                        delay: e,
                        size: t,
                        name: r,
                        tooltipArgs: i,
                        className: s,
                        customImage: o,
                        value: l,
                        reward: E,
                    }) => {
                        const c = (0, a.useState)(!0),
                            A = c[0],
                            F = c[1];
                        return (
                            (0, a.useEffect)(() => {
                                setTimeout(() => F(!1), hu(u) + 400);
                            }, []),
                            n().createElement(
                                'div',
                                { className: C()('SmallReward_base_99', A && 'SmallReward_base__disabled_39') },
                                n().createElement(
                                    ee,
                                    { index: u, delay: e },
                                    E
                                        ? n().createElement(
                                              ue,
                                              Ae({}, E, {
                                                  name: r,
                                                  image: E.image(t),
                                                  size: t,
                                                  className: s,
                                                  tooltipArgs: i,
                                              }),
                                          )
                                        : n().createElement(ue, {
                                              name: r,
                                              image: o,
                                              size: t,
                                              value: l,
                                              tooltipArgs: i,
                                              className: s,
                                          }),
                                ),
                            )
                        );
                    },
                    _e = ({ data: u, maxRewards: e = 0, showDelay: t = 0 }) => {
                        const r = b().mediaSize < p.Medium ? Q.Small : Q.Big,
                            i = Boolean(e) && e < u.length,
                            s = i ? u.slice(0, e - 1) : u,
                            o = `R.images.gui.maps.icons.quests.bonuses.${r}.default`,
                            l = i
                                ? ((E = R.strings.tooltips.quests.awards.additional.bottom()),
                                  (c = { count: u.length - (e - 1) }),
                                  E.replace(/(\{|%\()\w+(\}|\)s)/g, (u) => {
                                      const e = 0 === u.indexOf('%') ? 2 : 1;
                                      return String(c[u.slice(e, -e)]);
                                  }))
                                : '';
                        var E, c;
                        const A = (0, a.useMemo)(
                            () =>
                                i
                                    ? lu(
                                          { inBoxCount: u.length - (e - 1) },
                                          R.views.lobby.tooltips.AdditionalRewardsTooltip('resId'),
                                      )
                                    : void 0,
                            [e, u.length, i],
                        );
                        return n().createElement(
                            'div',
                            { className: 'RewardList_base_42' },
                            s.map((u, e) =>
                                n().createElement(Fe, {
                                    key: e,
                                    index: e,
                                    delay: t,
                                    name: u.name,
                                    size: r,
                                    tooltipArgs: Object.assign({}, u.tooltipArgs, { ignoreShowDelay: !0 }),
                                    reward: u,
                                    className: ce,
                                }),
                            ),
                            i &&
                                n().createElement(Fe, {
                                    name: 'more',
                                    customImage: o,
                                    size: r,
                                    value: l,
                                    tooltipArgs: Object.assign({}, A, { ignoreShowDelay: !0 }),
                                    className: ce,
                                    index: e - 1,
                                    delay: t,
                                }),
                        );
                    },
                    De = {
                        width: 200,
                        height: 200,
                        frameCount: 50,
                        chunk: { count: 2, columns: 5, rows: 5 },
                        getChunkPath:
                            ('R.images.races.gui.maps.icons.reward_view.sprite_',
                            (u) => `R.images.races.gui.maps.icons.reward_view.sprite_${u}`),
                    };
                const me = {
                        1: {
                            [p.ExtraSmall]: [Q.S296x222],
                            [p.Small]: [Q.S400x300],
                            [p.Medium]: [Q.S400x300],
                            [p.Large]: [Q.S600x450],
                            [p.ExtraLarge]: [Q.S600x450],
                        },
                        2: {
                            [p.ExtraSmall]: [Q.S296x222, Q.S296x222],
                            [p.Small]: [Q.S296x222, Q.S296x222],
                            [p.Medium]: [Q.S296x222, Q.S296x222],
                            [p.Large]: [Q.S400x300, Q.S400x300],
                            [p.ExtraLarge]: [Q.S400x300, Q.S400x300],
                        },
                        3: {
                            [p.ExtraSmall]: [Q.S232x174, Q.S400x300, Q.S232x174],
                            [p.Small]: [Q.S232x174, Q.S400x300, Q.S232x174],
                            [p.Medium]: [Q.S296x222, Q.S400x300, Q.S296x222],
                            [p.Large]: [Q.S400x300, Q.S600x450, Q.S400x300],
                            [p.ExtraLarge]: [Q.S400x300, Q.S600x450, Q.S400x300],
                        },
                    },
                    de = (0, z.Pi)(() => {
                        const u = Mu().model,
                            e = u.computes.getMainRewards(),
                            t = u.computes.getRegularRewards(),
                            a = u.computes.hasMainRewards(),
                            r = u.computes.hasRegularRewards(),
                            i = u.computes.getRewardsShowDelay(),
                            s = u.computes.hasGoldMainRewards(),
                            o = b().mediaSize,
                            l = Math.max(Math.min(e.length, 3), 1),
                            E = me[l][o],
                            c = (0, Y.useSpring)({
                                from: { scale: 1.2, opacity: 0, transform: 'translateY(0)' },
                                to: { scale: 1, opacity: 1, transform: 'translateY(0)' },
                                delay: Cu,
                                config: { duration: gu, easing: j },
                            });
                        return n().createElement(
                            'div',
                            { className: 'Content_base_d7' },
                            s &&
                                n().createElement(
                                    'div',
                                    { className: 'Content_sunShine_ab' },
                                    n().createElement(Nu, {
                                        width: De.width,
                                        height: De.height,
                                        frameCount: De.frameCount,
                                        getImageSource: Pu(De),
                                        frameTime: 50,
                                        className: 'Content_sunShineCanvas_b8',
                                    }),
                                ),
                            n().createElement('div', {
                                className: C()('Content_ribbon_33', s && 'Content_ribbon__gold_f8'),
                            }),
                            s &&
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement('div', { className: 'Content_rays_c7' }),
                                    n().createElement(
                                        Y.animated.div,
                                        { className: 'Content_starsAnimation_88', style: c },
                                        n().createElement('div', { className: 'Content_stars_e4' }),
                                    ),
                                ),
                            a &&
                                n().createElement(
                                    'div',
                                    { className: 'Content_mainRewards_63' },
                                    e.map((u, e) => n().createElement(Ee, { key: e, reward: u, index: e, size: E[e] })),
                                ),
                            r &&
                                n().createElement(
                                    'div',
                                    { className: 'Content_regularRewards_71' },
                                    n().createElement(_e, { data: t, maxRewards: 9, showDelay: i }),
                                ),
                        );
                    }),
                    Be = {
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
                let Ce, ge;
                !(function (u) {
                    (u.main = 'main'),
                        (u.primary = 'primary'),
                        (u.primaryGreen = 'primaryGreen'),
                        (u.primaryRed = 'primaryRed'),
                        (u.secondary = 'secondary'),
                        (u.ghost = 'ghost');
                })(Ce || (Ce = {})),
                    (function (u) {
                        (u.extraSmall = 'extraSmall'), (u.small = 'small'), (u.medium = 'medium');
                    })(ge || (ge = {}));
                const he = ({
                    children: u,
                    size: e,
                    isFocused: t,
                    type: r,
                    disabled: i,
                    mixClass: s,
                    soundHover: o,
                    soundClick: l,
                    onMouseEnter: E,
                    onMouseMove: c,
                    onMouseDown: A,
                    onMouseUp: F,
                    onMouseLeave: _,
                    onClick: D,
                }) => {
                    const m = (0, a.useRef)(null),
                        d = (0, a.useState)(t),
                        B = d[0],
                        g = d[1],
                        h = (0, a.useState)(!1),
                        p = h[0],
                        v = h[1],
                        w = (0, a.useState)(!1),
                        b = w[0],
                        f = w[1],
                        S = (0, a.useCallback)(() => {
                            i || (m.current && (m.current.focus(), g(!0)));
                        }, [i]),
                        x = (0, a.useCallback)(
                            (u) => {
                                B && null !== m.current && !m.current.contains(u.target) && g(!1);
                            },
                            [B],
                        ),
                        T = (0, a.useCallback)(
                            (u) => {
                                i || (D && D(u));
                            },
                            [i, D],
                        ),
                        y = (0, a.useCallback)(
                            (u) => {
                                i || (null !== o && k(o), E && E(u), f(!0));
                            },
                            [i, o, E],
                        ),
                        M = (0, a.useCallback)(
                            (u) => {
                                c && c(u);
                            },
                            [c],
                        ),
                        P = (0, a.useCallback)(
                            (u) => {
                                i || (F && F(u), v(!1));
                            },
                            [i, F],
                        ),
                        L = (0, a.useCallback)(
                            (u) => {
                                i || (null !== l && k(l), A && A(u), t && S(), v(!0));
                            },
                            [i, l, A, S, t],
                        ),
                        O = (0, a.useCallback)(
                            (u) => {
                                i || (_ && _(u), v(!1));
                            },
                            [i, _],
                        ),
                        N = C()(
                            Be.base,
                            Be[`base__${r}`],
                            {
                                [Be.base__disabled]: i,
                                [Be[`base__${e}`]]: e,
                                [Be.base__focus]: B,
                                [Be.base__highlightActive]: p,
                                [Be.base__firstHover]: b,
                            },
                            s,
                        ),
                        I = C()(Be.state, Be.state__default);
                    return (
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mousedown', x),
                                () => {
                                    document.removeEventListener('mousedown', x);
                                }
                            ),
                            [x],
                        ),
                        (0, a.useEffect)(() => {
                            g(t);
                        }, [t]),
                        n().createElement(
                            'div',
                            {
                                ref: m,
                                className: N,
                                onMouseEnter: y,
                                onMouseMove: M,
                                onMouseUp: P,
                                onMouseDown: L,
                                onMouseLeave: O,
                                onClick: T,
                            },
                            r !== Ce.ghost &&
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement('div', { className: Be.back }),
                                    n().createElement('span', { className: Be.texture }),
                                ),
                            n().createElement(
                                'span',
                                { className: I },
                                n().createElement('span', { className: Be.stateDisabled }),
                                n().createElement('span', { className: Be.stateHighlightHover }),
                                n().createElement('span', { className: Be.stateHighlightActive }),
                            ),
                            n().createElement(
                                'span',
                                { className: Be.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                u,
                            ),
                        )
                    );
                };
                he.defaultProps = { type: Ce.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const pe = (0, a.memo)(he),
                    ve = R.strings.reward_view.rewards,
                    we = (0, z.Pi)(({ animationDuration: u }) => {
                        const e = Mu().controls,
                            t = (0, a.useState)(!0),
                            r = t[0],
                            i = t[1];
                        return (
                            setTimeout(() => {
                                i(!1);
                            }, u),
                            n().createElement(
                                'div',
                                { className: 'Footer_base_34' },
                                n().createElement(
                                    'div',
                                    { className: 'Footer_buttonWrapper_c1' },
                                    n().createElement(
                                        'div',
                                        { className: 'Footer_button_66' },
                                        n().createElement(
                                            pe,
                                            {
                                                type: Ce.primary,
                                                size: ge.medium,
                                                onClick: e.onContinueButtonClick,
                                                disabled: r,
                                            },
                                            ve.controls.ok(),
                                        ),
                                    ),
                                ),
                            )
                        );
                    }),
                    be = ({ binding: u, text: e = '', classMix: t, alignment: r = cu.left }) =>
                        null === e
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : n().createElement(
                                  a.Fragment,
                                  null,
                                  e.split('\n').map((e, i) =>
                                      n().createElement(
                                          'div',
                                          { className: C()('FormatText_base_d0', t), key: `${e}-${i}` },
                                          ((u, e, t) =>
                                              u.split(/%\((.*?)\)(?:[sd])?/g).map((u) =>
                                                  t && u in t
                                                      ? t[u]
                                                      : ((u, e = cu.left) => {
                                                            const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return du.includes(t)
                                                                ? mu(u)
                                                                : ((u, e = cu.left) => {
                                                                      let t = [];
                                                                      const a =
                                                                              /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                          n = u.replace(/&nbsp;/g, ' ');
                                                                      return (
                                                                          Du(n, /( )/, e).forEach(
                                                                              (u) => (t = t.concat(Du(u, a, cu.left))),
                                                                          ),
                                                                          t
                                                                      );
                                                                  })(u, e);
                                                        })(u, e),
                                              ))(e, r, u).map((u, e) =>
                                              n().createElement(a.Fragment, { key: `${e}-${u}` }, u),
                                          ),
                                      ),
                                  ),
                              ),
                    fe = R.strings.reward_view,
                    Se = (0, z.Pi)(({ title: u = '', subtitle: e = '', stepNumbers: t = [] }) =>
                        n().createElement(
                            'div',
                            { className: 'Header_base_2c' },
                            n().createElement(
                                'div',
                                { className: 'Header_blinkAnimate1_70' },
                                n().createElement('div', { className: 'Header_blinkAnimate2_70' }),
                            ),
                            n().createElement(
                                'div',
                                { className: 'Header_title_12' },
                                u.length ? u : fe.rewards.header.title(),
                            ),
                            n().createElement(
                                'div',
                                { className: 'Header_subTitle_67' },
                                t.length
                                    ? ((u, e) => {
                                          switch (u.length) {
                                              case 1:
                                                  return n().createElement(be, {
                                                      text: e,
                                                      binding: { stepNumber: u[0] },
                                                  });
                                              case 2:
                                                  return n().createElement(be, {
                                                      text: e,
                                                      binding: { stepNumber: u[0], secondStepNumber: u[1] },
                                                  });
                                          }
                                      })(t, e)
                                    : n().createElement(be, { text: e }),
                            ),
                            n().createElement(
                                'div',
                                { className: 'Header_glowYellowAnimate1_bf' },
                                n().createElement('div', { className: 'Header_glowYellowAnimate2_1b' }),
                            ),
                        ),
                    ),
                    xe = R.strings.reward_view.rewards,
                    Re = (0, z.Pi)(() => {
                        const u = Mu(),
                            e = u.model,
                            t = u.controls,
                            r = e.root.get(),
                            i = r.title,
                            s = r.subtitle,
                            o = e.computes.getProgressionStages() || [],
                            l = e.computes.getFooterShowDelay(),
                            E = (0, Y.useSpring)({
                                from: { opacity: 0, transform: 'translateY(20rem)' },
                                to: { opacity: 1, transform: 'translateY(0)' },
                                delay: l + Cu,
                                config: { duration: gu, easing: j },
                            });
                        (0, a.useEffect)(() => {
                            k(R.sounds.gui_reward_screen_general());
                        }, []);
                        const c = () => {
                            t.close();
                        };
                        var A;
                        (A = c), V($.n.ESCAPE, A);
                        return n().createElement(
                            'div',
                            { className: 'App_base_4a' },
                            n().createElement('div', {
                                className: 'App_bgBox_94',
                                style: { backgroundImage: 'url(R.images.races.gui.maps.icons.reward_view.background)' },
                            }),
                            n().createElement(
                                'div',
                                { className: 'App_header_e1' },
                                n().createElement(Se, { title: i, subtitle: s, stepNumbers: o }),
                            ),
                            n().createElement('div', { className: 'App_content_84' }, n().createElement(de, null)),
                            n().createElement(
                                'div',
                                { className: 'App_close_50' },
                                n().createElement(G, {
                                    caption: xe.controls.close(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: c,
                                }),
                            ),
                            n().createElement(
                                Y.animated.div,
                                { className: 'App_footer_51', style: E },
                                n().createElement(we, { animationDuration: l + Cu }),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    N().render(
                        n().createElement(yu, null, n().createElement(L, null, n().createElement(Re, null))),
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
        (__webpack_require__.O = (u, e, t, a) => {
            if (!e) {
                var n = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [e, t, a] = deferred[o], r = !0, i = 0; i < e.length; i++)
                        (!1 & a || n >= a) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[i]))
                            ? e.splice(i--, 1)
                            : ((r = !1), a < n && (n = a));
                    if (r) {
                        deferred.splice(o--, 1);
                        var s = t();
                        void 0 !== s && (u = s);
                    }
                }
                return u;
            }
            a = a || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > a; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [e, t, a];
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
        (__webpack_require__.j = 268),
        (() => {
            var u = { 268: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var a,
                        n,
                        [r, i, s] = t,
                        o = 0;
                    if (r.some((e) => 0 !== u[e])) {
                        for (a in i) __webpack_require__.o(i, a) && (__webpack_require__.m[a] = i[a]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (e && e(t); o < r.length; o++)
                        (n = r[o]), __webpack_require__.o(u, n) && u[n] && u[n][0](), (u[n] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(8348));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
