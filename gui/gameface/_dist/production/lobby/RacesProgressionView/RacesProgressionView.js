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
                t.r(u), t.d(u, { mouse: () => o, onResize: () => a });
                var r = t(2472),
                    n = t(1176);
                const a = (0, r.E)('clientResized'),
                    s = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') },
                    o = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function u() {
                            e.enabled && (0, n.R)(!1);
                        }
                        function t() {
                            e.enabled && (0, n.R)(!0);
                        }
                        function r() {
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
                                            o = s[u]((e) => t([e, 'outside']));
                                        function i(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(a, i),
                                            r(),
                                            () => {
                                                n &&
                                                    (o(),
                                                    window.removeEventListener(a, i),
                                                    (e.listeners -= 1),
                                                    r(),
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
                                (e.enabled = !1), r();
                            },
                            enable() {
                                (e.enabled = !0), r();
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
                        events: () => r,
                        getMouseGlobalPosition: () => a,
                        getSize: () => n,
                        graphicsQuality: () => s,
                    });
                var r = t(527);
                function n(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function a(e = 'px') {
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
                function r(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => r });
            },
            2472: (e, u, t) => {
                'use strict';
                function r(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                t.d(u, { E: () => r });
            },
            3138: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => n });
                var r = t(5959);
                const n = { view: t(7641), client: r };
            },
            3722: (e, u, t) => {
                'use strict';
                function r(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function n(e, u, t) {
                    return `url(${r(e, u, t)})`;
                }
                t.r(u), t.d(u, { getBgUrl: () => n, getTextureUrl: () => r });
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => n });
                var r = t(2472);
                const n = {
                    onTextureFrozen: (0, r.E)('self.onTextureFrozen'),
                    onTextureReady: (0, r.E)('self.onTextureReady'),
                    onDomBuilt: (0, r.E)('self.onDomBuilt'),
                    onLoaded: (0, r.E)('self.onLoaded'),
                    onDisplayChanged: (0, r.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, r.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, r.E)('children.onAdded'),
                        onLoaded: (0, r.E)('children.onLoaded'),
                        onRemoved: (0, r.E)('children.onRemoved'),
                        onAttached: (0, r.E)('children.onAttached'),
                        onTextureReady: (0, r.E)('children.onTextureReady'),
                        onRequestPosition: (0, r.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => o,
                        children: () => r,
                        displayStatus: () => n.W,
                        displayStatusIs: () => b,
                        events: () => a.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => f,
                        freezeTextureBeforeResize: () => _,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => v,
                        getScale: () => F,
                        getSize: () => d,
                        getViewGlobalPosition: () => A,
                        isEventHandled: () => h,
                        isFocused: () => p,
                        pxToRem: () => D,
                        remToPx: () => g,
                        resize: () => m,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => C,
                        setEventHandled: () => B,
                        setInputPaddingsRem: () => i,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => S,
                    });
                var r = t(3722),
                    n = t(6112),
                    a = t(6538),
                    s = t(8566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function i(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, u, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, r);
                }
                function c(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function E(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function A(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: g(u.x), y: g(u.y) };
                }
                function _() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function F() {
                    return viewEnv.getScale();
                }
                function D(e) {
                    return viewEnv.pxToRem(e);
                }
                function g(e) {
                    return viewEnv.remToPx(e);
                }
                function C(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function p() {
                    return viewEnv.isFocused();
                }
                function B() {
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
                const b = Object.keys(n.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === n.W[u]), e),
                        {},
                    ),
                    w = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    S = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : a.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => a });
                const r = ['args'],
                    n = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                s = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                    return n;
                                })(u, r);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, s, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    a = {
                        close(e) {
                            n('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            n(64);
                        },
                        move(e) {
                            n(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, u, t) => {
                'use strict';
                let r, n;
                t.d(u, { n: () => r }),
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
                    })(r || (r = {})),
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
                var r = t(3138);
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
                        const a = r.O.view.addModelObserver(e, t, n);
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
                            const r = this._callbacks[t];
                            void 0 !== r && r(e, u);
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
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4179);
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
            4179: (e, u, t) => {
                'use strict';
                t.d(u, { Sw: () => a.Z, B3: () => c, Z5: () => s, B0: () => i, ry: () => C, Eu: () => p });
                class r {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: t }) => {
                                    let r = e.target;
                                    do {
                                        if (r === u) return;
                                        r = r.parentNode;
                                    } while (r);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return r.__instance || (r.__instance = new r()), r.__instance;
                    }
                    register(e, u) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: u });
                    }
                    unregister(e, u) {
                        const t = e,
                            r = u;
                        (this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== r)),
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
                r.__instance = void 0;
                const n = r;
                var a = t(1358);
                const s = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    o = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    };
                let i;
                var l;
                ((l = i || (i = {}))[(l.UNDEFINED = 0)] = 'UNDEFINED'),
                    (l[(l.TOOLTIP = 1)] = 'TOOLTIP'),
                    (l[(l.POP_OVER = 2)] = 'POP_OVER'),
                    (l[(l.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (l[(l.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (l[(l.MOVE = 16)] = 'MOVE'),
                    (l[(l.CLOSE = 32)] = 'CLOSE'),
                    (l[(l.MINIMIZE = 64)] = 'MINIMIZE');
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    E = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var A = t(5521),
                    _ = t(3138);
                const F = ['args'];
                function D(e, u, t, r, n, a, s) {
                    try {
                        var o = e[a](s),
                            i = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(i) : Promise.resolve(i).then(r, n);
                }
                const g = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    C = (function () {
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
                                    return new Promise(function (r, n) {
                                        var a = e.apply(u, t);
                                        function s(e) {
                                            D(a, r, n, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            D(a, r, n, s, o, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
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
                    B = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                    return n;
                                })(u, F);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((r = n),
                                              Object.entries(r).map(([e, u]) => {
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
                        var r;
                    },
                    h = () => B(i.CLOSE),
                    f = (e, u) => {
                        e.keyCode === A.n.ESCAPE && u();
                    };
                var v = t(7572);
                const b = n.instance,
                    w = {
                        DataTracker: a.Z,
                        ViewModel: v.Z,
                        ViewEventType: i,
                        NumberFormatType: c,
                        RealFormatType: E,
                        TimeFormatType: d,
                        DateFormatType: m,
                        makeGlobalBoundingBox: g,
                        sendMoveEvent: (e) => B(i.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: () => B(i.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            B(i.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, r, n = R.invalid('resId'), a) => {
                            const s = _.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                E = o.width,
                                d = o.height,
                                m = {
                                    x: _.O.view.pxToRem(l) + s.x,
                                    y: _.O.view.pxToRem(c) + s.y,
                                    width: _.O.view.pxToRem(E),
                                    height: _.O.view.pxToRem(d),
                                };
                            B(i.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: n,
                                direction: u,
                                bbox: g(m),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => f(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            f(e, h);
                        },
                        handleViewEvent: B,
                        onBindingsReady: C,
                        onLayoutReady: p,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(i.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(i.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(i.POP_OVER),
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const r in u)
                                if (Object.prototype.hasOwnProperty.call(u, r)) {
                                    const n = Object.prototype.toString.call(u[r]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = u[r];
                                        t[r] = [];
                                        for (let u = 0; u < n.length; u++) t[r].push({ value: e(n[u].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[r] = e(u[r]))
                                            : (t[r] = u[r]);
                                }
                            return t;
                        },
                        ClickOutsideManager: b,
                        SystemLocale: s,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = w;
            },
            939: (e, u, t) => {
                'use strict';
                var r = {};
                t.r(r),
                    t.d(r, {
                        Area: () => wt,
                        Bar: () => ft,
                        DefaultScroll: () => bt,
                        Direction: () => dt,
                        defaultSettings: () => mt,
                        useHorizontalScrollApi: () => _t,
                    });
                var n = {};
                t.r(n), t.d(n, { Area: () => It, Bar: () => Mt, Default: () => kt, useVerticalScrollApi: () => St });
                var a = t(6179),
                    s = t.n(a);
                const o = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
                var i = t(3138);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function E(e, u, t) {
                    const r = (function (e, u) {
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
                        a = Math.min(r, n);
                    return {
                        extraLarge: a === t.extraLarge.weight,
                        large: a === t.large.weight,
                        medium: a === t.medium.weight,
                        small: a === t.small.weight,
                        extraSmall: a === t.extraSmall.weight,
                        extraLargeWidth: r === t.extraLarge.weight,
                        largeWidth: r === t.large.weight,
                        mediumWidth: r === t.medium.weight,
                        smallWidth: r === t.small.weight,
                        extraSmallWidth: r === t.extraSmall.weight,
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
                })(c || (c = {}));
                const d = i.O.client.getSize('rem'),
                    m = d.width,
                    A = d.height,
                    _ = Object.assign({ width: m, height: A }, E(m, A, l)),
                    F = (0, a.createContext)(_),
                    D = ['children'],
                    g = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, D);
                        const r = (0, a.useContext)(F),
                            n = r.extraLarge,
                            s = r.large,
                            i = r.medium,
                            l = r.small,
                            c = r.extraSmall,
                            E = r.extraLargeWidth,
                            d = r.largeWidth,
                            m = r.mediumWidth,
                            A = r.smallWidth,
                            _ = r.extraSmallWidth,
                            g = r.extraLargeHeight,
                            C = r.largeHeight,
                            p = r.mediumHeight,
                            B = r.smallHeight,
                            h = r.extraSmallHeight,
                            f = { extraLarge: g, large: C, medium: p, small: B, extraSmall: h };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && n) return u;
                            if (t.large && s) return u;
                            if (t.medium && i) return u;
                            if (t.small && l) return u;
                            if (t.extraSmall && c) return u;
                        } else {
                            if (t.extraLargeWidth && E) return o(u, t, f);
                            if (t.largeWidth && d) return o(u, t, f);
                            if (t.mediumWidth && m) return o(u, t, f);
                            if (t.smallWidth && A) return o(u, t, f);
                            if (t.extraSmallWidth && _) return o(u, t, f);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && g) return u;
                                if (t.largeHeight && C) return u;
                                if (t.mediumHeight && p) return u;
                                if (t.smallHeight && B) return u;
                                if (t.extraSmallHeight && h) return u;
                            }
                        }
                        return null;
                    };
                (g.defaultProps = {
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
                    (0, a.memo)(g);
                const C = (0, a.memo)(({ children: e }) => {
                    const u = (0, a.useContext)(F),
                        t = (0, a.useState)(u),
                        r = t[0],
                        n = t[1],
                        o = (0, a.useCallback)((e, u) => {
                            const t = i.O.view.pxToRem(e),
                                r = i.O.view.pxToRem(u);
                            n(Object.assign({ width: t, height: r }, E(t, r, l)));
                        }, []);
                    ((e) => {
                        const u = (0, a.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    })(() => {
                        engine.on('clientResized', o);
                    }),
                        (0, a.useEffect)(() => () => engine.off('clientResized', o), [o]);
                    const c = (0, a.useMemo)(() => Object.assign({}, r), [r]);
                    return s().createElement(F.Provider, { value: c }, e);
                });
                var p = t(6483),
                    B = t.n(p),
                    h = t(926),
                    f = t.n(h);
                let v, b, w;
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
                    })(w || (w = {}));
                const S = () => {
                        const e = (0, a.useContext)(F),
                            u = e.width,
                            t = e.height,
                            r = ((e) => {
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
                            n = ((e) => {
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
                            s = ((e) => {
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
                        return { mediaSize: r, mediaWidth: n, mediaHeight: s, remScreenWidth: u, remScreenHeight: t };
                    },
                    P = ['children', 'className'];
                function y() {
                    return (
                        (y =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        y.apply(this, arguments)
                    );
                }
                const T = {
                        [b.ExtraSmall]: '',
                        [b.Small]: f().SMALL_WIDTH,
                        [b.Medium]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH}`,
                        [b.Large]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH} ${f().LARGE_WIDTH}`,
                        [b.ExtraLarge]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH} ${f().LARGE_WIDTH} ${f().EXTRA_LARGE_WIDTH}`,
                    },
                    x = {
                        [w.ExtraSmall]: '',
                        [w.Small]: f().SMALL_HEIGHT,
                        [w.Medium]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT}`,
                        [w.Large]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT} ${f().LARGE_HEIGHT}`,
                        [w.ExtraLarge]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT} ${f().LARGE_HEIGHT} ${f().EXTRA_LARGE_HEIGHT}`,
                    },
                    L = {
                        [v.ExtraSmall]: '',
                        [v.Small]: f().SMALL,
                        [v.Medium]: `${f().SMALL} ${f().MEDIUM}`,
                        [v.Large]: `${f().SMALL} ${f().MEDIUM} ${f().LARGE}`,
                        [v.ExtraLarge]: `${f().SMALL} ${f().MEDIUM} ${f().LARGE} ${f().EXTRA_LARGE}`,
                    },
                    N = (e) => {
                        let u = e.children,
                            t = e.className,
                            r = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, P);
                        const n = S(),
                            a = n.mediaWidth,
                            o = n.mediaHeight,
                            i = n.mediaSize;
                        return s().createElement('div', y({ className: B()(t, T[a], x[o], L[i]) }, r), u);
                    },
                    M = ['children'],
                    O = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, M);
                        return s().createElement(C, null, s().createElement(N, t, u));
                    };
                var k = t(493),
                    I = t.n(k),
                    U = t(5521),
                    H = t(4179);
                const W = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function $(e = U.n.NONE, u = W, t = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== U.n.NONE)
                            return (
                                window.addEventListener('keydown', r, t),
                                () => {
                                    window.removeEventListener('keydown', r, t);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (i.O.view.isEventHandled()) return;
                                i.O.view.setEventHandled(), u(r), t && r.stopPropagation();
                            }
                        }
                    }, [u, e, t]);
                }
                var z = t(3403);
                const G = (e, u, t) => (t < e ? e : t > u ? u : t);
                function V() {}
                function j() {
                    return !1;
                }
                console.log;
                var q = t(9174);
                function Q(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, r = new Array(u); t < u; t++) r[t] = e[t];
                    return r;
                }
                const Y = (e) => (0 === e ? window : window.subViews.get(e));
                function X(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, r) => u(null == e ? void 0 : e.value, t, r));
                }
                var K = t(3946);
                let Z;
                function J(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(Z || (Z = {}));
                const ee = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    ue = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    te = (e, u, t = Z.left) => e.split(u).reduce(t === Z.left ? ee : ue, []),
                    re = (() => {
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
                    ne = ['zh_cn', 'zh_sg', 'zh_tw'],
                    ae = (e, u, t) =>
                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                            t && e in t
                                ? t[e]
                                : ((e, u = Z.left) => {
                                      const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                      return ne.includes(t)
                                          ? re(e)
                                          : ((e, u = Z.left) => {
                                                let t = [];
                                                const r =
                                                        /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                    n = e.replace(/&nbsp;/g, ' ');
                                                return (
                                                    te(n, /( )/, u).forEach((e) => (t = t.concat(te(e, r, Z.left)))), t
                                                );
                                            })(e, u);
                                  })(e, u),
                        );
                let se;
                !(function (e) {
                    (e.Normal = 'normal'), (e.RecentlyCompleted = 'recentlyCompleted'), (e.Completed = 'completed');
                })(se || (se = {}));
                const oe = { 0: 'firstCondition', 1: 'secondCondition' },
                    ie = (e, u) => {
                        const t = [];
                        if ('or' === e.conditionType || 'and' === e.conditionType)
                            e.items.forEach((e) => {
                                const r =
                                    (n = e) &&
                                    'value' in n &&
                                    null != (a = n.constructor) &&
                                    a.name.includes('ArrayItem')
                                        ? null == n
                                            ? void 0
                                            : n.value
                                        : n;
                                var n, a;
                                r && t.push(...ie(r, u));
                            });
                        else {
                            const r = e.descrData;
                            let n = e,
                                a = n.titleData,
                                s = n.current,
                                o = n.total,
                                i = n.earned,
                                l = n.iconKey;
                            const c = (function (e, u) {
                                var t;
                                if (!(u >= e.length))
                                    return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                            })(u, 0);
                            c &&
                                ((a = r || c.descrData),
                                (l = l || c.iconKey),
                                (s = c.current),
                                (o = c.total),
                                (i = c.earned)),
                                0 === o && (a = r),
                                t.push({ condition: a, lastValue: i, currentValue: s, maxValue: o, icon: l });
                        }
                        return t;
                    },
                    le = (e) => ('secondCondition' in e ? 'multiConditions' : 'oneCondition'),
                    ce = ({ lastValue: e, currentValue: u, maxValue: t }) =>
                        u !== e && u === t ? se.RecentlyCompleted : u === e && u === t ? se.Completed : se.Normal;
                let Ee;
                !(function (e) {
                    (e[(e.Scrolling = 0)] = 'Scrolling'),
                        (e[(e.ProgressChange = 1)] = 'ProgressChange'),
                        (e[(e.HighlightCard = 2)] = 'HighlightCard'),
                        (e[(e.ChangeCompleted = 3)] = 'ChangeCompleted'),
                        (e[(e.ProgressFinished = 4)] = 'ProgressFinished'),
                        (e[(e.ProgressAlreadyFinished = 5)] = 'ProgressAlreadyFinished');
                })(Ee || (Ee = {}));
                const de = ((e, u) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: r, children: n, mocks: o }) {
                                const l = (0, a.useRef)([]),
                                    c = (e, t, r) => {
                                        var n;
                                        const a = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = Y,
                                                context: r = 'model',
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
                                                        a = r.split('.').reduce((e, u) => e[u], n);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? a
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, a);
                                                };
                                                return {
                                                    subscribe: (t, a) => {
                                                        const o = 'string' == typeof a ? `${r}.${a}` : r,
                                                            l = i.O.view.addModelObserver(o, u, !0);
                                                        return n.set(l, t), e && t(s(a)), l;
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
                                                        for (
                                                            var e,
                                                                t = (function (e, u) {
                                                                    var t =
                                                                        ('undefined' != typeof Symbol &&
                                                                            e[Symbol.iterator]) ||
                                                                        e['@@iterator'];
                                                                    if (t) return (t = t.call(e)).next.bind(t);
                                                                    if (
                                                                        Array.isArray(e) ||
                                                                        (t = (function (e, u) {
                                                                            if (e) {
                                                                                if ('string' == typeof e)
                                                                                    return Q(e, u);
                                                                                var t = Object.prototype.toString
                                                                                    .call(e)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === t &&
                                                                                        e.constructor &&
                                                                                        (t = e.constructor.name),
                                                                                    'Map' === t || 'Set' === t
                                                                                        ? Array.from(e)
                                                                                        : 'Arguments' === t ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                t,
                                                                                            )
                                                                                          ? Q(e, u)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (u && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        t && (e = t);
                                                                        var r = 0;
                                                                        return function () {
                                                                            return r >= e.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: e[r++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(n.keys());
                                                            !(e = t()).done;

                                                        )
                                                            a(e.value, u);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(t),
                                            s =
                                                'real' === e
                                                    ? a
                                                    : Object.assign({}, a, {
                                                          readByPath:
                                                              null != (n = null == r ? void 0 : r.getter)
                                                                  ? n
                                                                  : () => {},
                                                      }),
                                            o = (u) =>
                                                'mocks' === e ? (null == r ? void 0 : r.getter(u)) : s.readByPath(u),
                                            c = (e) => l.current.push(e),
                                            E = (({ observableModel: e }) => {
                                                const u = {
                                                        root: e.object(),
                                                        progressAnimationState: q.LO.box(Ee.Scrolling),
                                                        progressLevels: e.array('progressLevels'),
                                                        dailyQuests: e.array('quests.missions'),
                                                        dailyQuestsModel: e.object('quests'),
                                                    },
                                                    t = (0, K.Om)(
                                                        () =>
                                                            X(u.dailyQuests.get(), (e) => {
                                                                const u = ((e, u, t) => {
                                                                    const r = {};
                                                                    let n = {},
                                                                        a = '';
                                                                    return (
                                                                        ie(e, u).forEach(
                                                                            (
                                                                                {
                                                                                    condition: e,
                                                                                    lastValue: u,
                                                                                    currentValue: t,
                                                                                    maxValue: s,
                                                                                    icon: o,
                                                                                },
                                                                                i,
                                                                            ) => {
                                                                                (r[oe[i]] = ((e, u) =>
                                                                                    ae(e, Z.left)
                                                                                        .flat()
                                                                                        .map(
                                                                                            (e, t) => (
                                                                                                0 === t &&
                                                                                                    u > 0 &&
                                                                                                    (e =
                                                                                                        e.toLowerCase()),
                                                                                                e
                                                                                            ),
                                                                                        ))(e, i)),
                                                                                    (a = o),
                                                                                    (n = {
                                                                                        lastValue: u,
                                                                                        currentValue: t,
                                                                                        maxValue: s,
                                                                                    });
                                                                            },
                                                                        ),
                                                                        {
                                                                            taskConditions: [
                                                                                {
                                                                                    conditions: r,
                                                                                    progression: Object.assign(
                                                                                        { status: t },
                                                                                        n,
                                                                                    ),
                                                                                },
                                                                            ],
                                                                            taskBattleIcon: a,
                                                                        }
                                                                    );
                                                                })(
                                                                    e.postBattleCondition,
                                                                    e.bonusCondition.items,
                                                                    e.status,
                                                                );
                                                                return Object.assign({}, u, {
                                                                    awardsBattle: e.bonuses,
                                                                });
                                                            }),
                                                        { equals: j },
                                                    ),
                                                    r = (0, K.Om)(
                                                        () =>
                                                            t().every(
                                                                (e) =>
                                                                    ce(e.taskConditions[0].progression) ===
                                                                    se.Completed,
                                                            ),
                                                        { equals: j },
                                                    ),
                                                    n = (0, K.Om)(
                                                        () => {
                                                            const e =
                                                                u.root.get().pointsForLevel *
                                                                u.progressLevels.get().length;
                                                            return u.root.get().curProgressPoints >= e;
                                                        },
                                                        { equals: j },
                                                    ),
                                                    a = (0, K.Om)(
                                                        () =>
                                                            n() &&
                                                            u.root.get().curProgressPoints ===
                                                                u.root.get().prevProgressPoints,
                                                        { equals: j },
                                                    ),
                                                    s = (0, K.Om)(
                                                        () =>
                                                            Math.floor(
                                                                u.root.get().curProgressPoints /
                                                                    u.root.get().pointsForLevel,
                                                            ),
                                                        { equals: j },
                                                    ),
                                                    o = (0, K.Om)(
                                                        (e) =>
                                                            G(
                                                                0,
                                                                u.root.get().pointsForLevel,
                                                                u.root.get().curProgressPoints -
                                                                    e * u.root.get().pointsForLevel,
                                                            ),
                                                        { equals: j },
                                                    ),
                                                    i = (0, K.Om)(
                                                        () =>
                                                            Math.floor(
                                                                u.root.get().prevProgressPoints /
                                                                    u.root.get().pointsForLevel,
                                                            ),
                                                        { equals: j },
                                                    ),
                                                    l = (0, K.Om)(
                                                        (e) => ({
                                                            wasProgressionVisited: i() === s(),
                                                            isRecentlyCompletedLevel: i() <= e && e <= s(),
                                                            isPrevLevel: e <= i(),
                                                        }),
                                                        { equals: j },
                                                    ),
                                                    c = (0, K.Om)(
                                                        () => {
                                                            const e = s(),
                                                                t = u.progressLevels.get();
                                                            return X(t, ({ rewards: u }, r) => ({
                                                                level: r + 1,
                                                                isCompleted: r < e,
                                                                isActive: r === e,
                                                                isLast: r === t.length - 1,
                                                                rewards: u,
                                                            }));
                                                        },
                                                        { equals: j },
                                                    );
                                                return Object.assign({}, u, {
                                                    computes: {
                                                        levels: c,
                                                        prevLevel: i,
                                                        levelStatus: l,
                                                        currentLevel: s,
                                                        battleQuests: t,
                                                        currentPointsForLevel: o,
                                                        isProgressionCompleted: n,
                                                        isAllQuestsCompleted: r,
                                                        wasProgressionCompletedBeforeStart: a,
                                                    },
                                                });
                                            })({
                                                mode: e,
                                                readByPath: o,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (u, t) => {
                                                        const r = null != t ? t : o(u),
                                                            n = q.LO.box(r, { equals: j });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, q.aD)((e) => n.set(e)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (u, t) => {
                                                        const r = null != t ? t : o(u),
                                                            n = q.LO.box(r, { equals: j });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, q.aD)((e) => n.set(e)),
                                                                    u,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (u, t) => {
                                                        const r = o(t);
                                                        if (Array.isArray(u)) {
                                                            const n = u.reduce(
                                                                (e, u) => ((e[u] = q.LO.box(r[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, q.aD)((e) => {
                                                                            u.forEach((u) => {
                                                                                n[u].set(e[u]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                n
                                                            );
                                                        }
                                                        {
                                                            const n = u,
                                                                a = Object.entries(n),
                                                                o = a.reduce(
                                                                    (e, [u, t]) => ((e[t] = q.LO.box(r[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, q.aD)((e) => {
                                                                            a.forEach(([u, t]) => {
                                                                                o[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: c,
                                            }),
                                            d = { mode: e, model: E, externalModel: s, cleanup: c };
                                        return {
                                            model: E,
                                            controls: 'mocks' === e && r ? r.controls(d) : u(d),
                                            externalModel: s,
                                            mode: e,
                                        };
                                    },
                                    E = (0, a.useRef)(!1),
                                    d = (0, a.useState)(e),
                                    m = d[0],
                                    A = d[1],
                                    _ = (0, a.useState)(() => c(e, r, o)),
                                    F = _[0],
                                    D = _[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        E.current ? D(c(m, r, o)) : (E.current = !0);
                                    }, [o, m, r]),
                                    (0, a.useEffect)(() => {
                                        A(e);
                                    }, [e]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            F.externalModel.dispose(), l.current.forEach((e) => e());
                                        },
                                        [F],
                                    ),
                                    s().createElement(t.Provider, { value: F }, n)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(0, ({ externalModel: e, model: u }) => {
                        const t = (function (e) {
                            const u = {};
                            for (const t in e)
                                if (Object.prototype.hasOwnProperty.call(e, t)) {
                                    const r = e[t];
                                    u[t] = (0, q.aD)(r);
                                }
                            return u;
                        })({
                            finishScrolling: () => u.progressAnimationState.set(Ee.ProgressChange),
                            finishProgressionChange: () => u.progressAnimationState.set(Ee.HighlightCard),
                            finishHighlightCard: () => u.progressAnimationState.set(Ee.ChangeCompleted),
                            completeProgression: (e) =>
                                u.progressAnimationState.set(e ? Ee.ProgressAlreadyFinished : Ee.ProgressFinished),
                        });
                        return Object.assign({}, t, {
                            onClose: e.createCallbackNoArgs('onClose'),
                            onAboutEvent: e.createCallbackNoArgs('onAboutEvent'),
                        });
                    }),
                    me = de[0],
                    Ae = de[1];
                let _e, Fe, De;
                var ge;
                !(function (e) {
                    (e.Timer = 'timer'), (e.Countdown = 'countdown'), (e.Cooldown = 'cooldown'), (e.None = 'none');
                })(_e || (_e = {})),
                    (function (e) {
                        (e.Description = 'description'),
                            (e.Short = 'short'),
                            (e.Long = 'long'),
                            (e.Extended = 'extended');
                    })(Fe || (Fe = {})),
                    ((ge = De || (De = {})).SHORT_DATE = 'short-date'),
                    (ge.SHORT_TIME = 'short-time'),
                    (ge.SHORT_DATE_TIME = 'short-date-time'),
                    (ge.FULL_DATE = 'full-date'),
                    (ge.FULL_DATE_TIME = 'full-date-time'),
                    (ge.MONTH = 'month'),
                    (ge.MONTH_DATE = 'month-date'),
                    (ge.DATE_MONTH = 'date-month'),
                    (ge.MONTH_YEAR = 'month-year'),
                    (ge.WEEK_DAY = 'week-day'),
                    (ge.WEEK_DAY_TIME = 'week-day-time'),
                    (ge.YEAR = 'year'),
                    (ge.DATE_YEAR = 'date-year');
                Date.now();
                const Ce = () => {};
                let pe;
                H.Sw.instance,
                    (function (e) {
                        (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                    })(pe || (pe = {})),
                    H.Sw.instance;
                const Be = (e = 0, u, t = 0, r = Ce) => {
                        const n = (0, a.useState)(e),
                            s = n[0],
                            o = n[1];
                        return (
                            (0, a.useEffect)(() => {
                                if (e > 0) {
                                    o(e);
                                    const n = Date.now(),
                                        a = setInterval(
                                            () => {
                                                const u = e - Math.floor((Date.now() - n) / 1e3);
                                                null !== t && u <= t ? (o(t), r && r(), clearInterval(a)) : o(u);
                                            },
                                            1e3 * (u || (e > 120 ? 60 : 1)),
                                        );
                                    return () => {
                                        clearInterval(a);
                                    };
                                }
                            }, [e, u, t, r]),
                            s
                        );
                    },
                    he = 'Countdown_description_8d',
                    fe = ({ binding: e, text: u = '', classMix: t, alignment: r = Z.left }) =>
                        null === u
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : s().createElement(
                                  a.Fragment,
                                  null,
                                  u.split('\n').map((u, n) =>
                                      s().createElement(
                                          'div',
                                          { className: B()('FormatText_base_d0', t), key: `${u}-${n}` },
                                          ae(u, r, e).map((e, u) =>
                                              s().createElement(a.Fragment, { key: `${u}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              ),
                    ve = (e) => e.toString().padStart(2, '0'),
                    be = R.images.gui.maps.icons.components.countdown,
                    we = (e, u) => {
                        const t = 2 === u ? be.big : be;
                        switch (e) {
                            case _e.Timer:
                                return t.clock();
                            case _e.Countdown:
                                return t.hourglass();
                            case _e.Cooldown:
                                return t.lock();
                        }
                    },
                    Se = (0, a.memo)(
                        ({
                            duration: e,
                            icon: u = _e.Timer,
                            style: t = Fe.Description,
                            onTimeReached: r,
                            className: n = '',
                            classNames: o = {},
                            labelFormat: l = '',
                        }) => {
                            const c = t !== Fe.Description ? 1 : void 0,
                                E = Be(e, c),
                                d = (() => {
                                    const e = (0, a.useState)(i.O.view.getScale()),
                                        u = e[0],
                                        t = e[1];
                                    return (
                                        (0, a.useEffect)(() => {
                                            const e = () => {
                                                t(i.O.view.getScale());
                                            };
                                            return (
                                                window.addEventListener('resize', e),
                                                () => {
                                                    window.removeEventListener('resize', e);
                                                }
                                            );
                                        }, []),
                                        u
                                    );
                                })();
                            r && r[E] && r[E]();
                            const m = ((e, u) => {
                                switch (u) {
                                    case Fe.Description:
                                        return ((e, u = !0) =>
                                            e.days > 7 && u
                                                ? J(R.strings.common.duration.days(), { days: e.days })
                                                : e.days >= 1
                                                  ? 0 === e.hours
                                                      ? J(R.strings.common.duration.days(), { days: e.days })
                                                      : `${J(R.strings.common.duration.days(), { days: e.days })} ${J(R.strings.common.duration.hours(), { hours: e.hours })}`
                                                  : e.hours >= 1
                                                    ? 0 === e.minutes
                                                        ? J(R.strings.common.duration.hours(), { hours: e.hours })
                                                        : `${J(R.strings.common.duration.hours(), { hours: e.hours })} ${J(R.strings.common.duration.minutes(), { minutes: e.minutes })}`
                                                    : J(R.strings.common.duration.minutes(), {
                                                          minutes: e.minutes || 1,
                                                      }))(e);
                                    case Fe.Short:
                                        return `${ve(e.minutes)}:${ve(e.seconds)}`;
                                    case Fe.Long:
                                        return `${ve(e.hours)}:${ve(e.minutes)}:${ve(e.seconds)}`;
                                    case Fe.Extended:
                                        return `${J(R.strings.common.duration.days(), { days: e.days })} | ${ve(e.hours)}:${ve(e.minutes)}:${ve(e.seconds)}`;
                                }
                            })(
                                (function (e = 0) {
                                    let u = e;
                                    const t = Math.trunc(u / 86400);
                                    u -= 86400 * t;
                                    const r = Math.trunc(u / 3600);
                                    u -= 3600 * r;
                                    const n = Math.trunc(u / 60);
                                    return (u -= 60 * n), { days: t, hours: r, minutes: n, seconds: u };
                                })(E),
                                t,
                            );
                            return s().createElement(
                                'div',
                                { className: B()('Countdown_base_fe', n) },
                                u !== _e.None &&
                                    s().createElement('div', {
                                        className: B()('Countdown_icon_8b', o.icon),
                                        style: { backgroundImage: `url('${we(u, d)}')` },
                                    }),
                                l
                                    ? s().createElement(
                                          'div',
                                          { className: B()(he, o.text) },
                                          s().createElement(fe, { text: l, binding: { timerText: m } }),
                                      )
                                    : s().createElement('div', { className: B()(he, o.text) }, m),
                            );
                        },
                    ),
                    Pe = 'DailyQuests_base_db',
                    ye = 'DailyQuests_line_8b';
                let Te, Re, xe, Le, Ne, Me, Oe;
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
                })(Te || (Te = {})),
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
                    })(Re || (Re = {})),
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
                    })(xe || (xe = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(Le || (Le = {})),
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
                    })(Ne || (Ne = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(Me || (Me = {})),
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
                    })(Oe || (Oe = {}));
                const ke = [
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
                function Ie(e) {
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
                const Ue = (e, u, t = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: H.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: r,
                                },
                                t,
                            ),
                        );
                    },
                    He = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            r = e.args,
                            n = e.onMouseEnter,
                            s = e.onMouseLeave,
                            o = e.onMouseDown,
                            i = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            E = e.ignoreMouseClick,
                            d = void 0 !== E && E,
                            m = e.decoratorId,
                            A = void 0 === m ? 0 : m,
                            _ = e.isEnabled,
                            F = void 0 === _ || _,
                            D = e.targetId,
                            g = void 0 === D ? 0 : D,
                            C = e.onShow,
                            p = e.onHide,
                            B = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, ke);
                        const h = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            f = (0, a.useMemo)(
                                () =>
                                    g ||
                                    ((e = 1) => {
                                        const u = new Error().stack;
                                        let t,
                                            r = R.invalid('resId');
                                        return (
                                            u &&
                                                ((t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== t &&
                                                    window.subViews[t] &&
                                                    (r = window.subViews[t].id)),
                                            { caller: t, stack: u, resId: r }
                                        );
                                    })().resId,
                                [g],
                            ),
                            v = (0, a.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (Ue(t, A, { isMouseEvent: !0, on: !0, arguments: Ie(r) }, f),
                                    C && C(),
                                    (h.current.isVisible = !0));
                            }, [t, A, r, f, C]),
                            b = (0, a.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const e = h.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (h.current.timeoutId = 0)),
                                        Ue(t, A, { on: !1 }, f),
                                        h.current.isVisible && p && p(),
                                        (h.current.isVisible = !1);
                                }
                            }, [t, A, f, p]),
                            w = (0, a.useCallback)((e) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(h.current.prevTarget) && b();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const e = h.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', w, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', w, { capture: !0 }),
                                            e && window.clearTimeout(e);
                                    }
                                );
                            }, []),
                            (0, a.useEffect)(() => {
                                !1 === F && b();
                            }, [F, b]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', b),
                                    () => {
                                        window.removeEventListener('mouseleave', b), b();
                                    }
                                ),
                                [b],
                            ),
                            F
                                ? (0, a.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((S = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((h.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                          n && n(e),
                                                          S && S(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  b(), null == s || s(u), null == e || e(u);
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  !1 === d && b(), null == i || i(u), null == e || e(u);
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  !1 === d && b(), null == o || o(u), null == e || e(u);
                                              })(u.props.onMouseDown),
                                          },
                                          B,
                                      ),
                                  )
                                : u
                        );
                        var S;
                    },
                    We = ['children'];
                function $e() {
                    return (
                        ($e =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        $e.apply(this, arguments)
                    );
                }
                const ze = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, We);
                        return s().createElement(
                            He,
                            $e(
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
                    },
                    Ge = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Ve() {
                    return (
                        (Ve =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Ve.apply(this, arguments)
                    );
                }
                const je = R.views.common.tooltip_window.simple_tooltip_content,
                    qe = (e) => {
                        let u = e.children,
                            t = e.body,
                            r = e.header,
                            n = e.note,
                            o = e.alert,
                            i = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, Ge);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, i, { body: t, header: r, note: n, alert: o });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [o, t, r, n, i]);
                        return s().createElement(
                            He,
                            Ve(
                                {
                                    contentId:
                                        ((E = null == i ? void 0 : i.hasHtmlContent),
                                        E ? je.SimpleTooltipHtmlContent('resId') : je.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var E;
                    };
                function Qe() {
                    return (
                        (Qe =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Qe.apply(this, arguments)
                    );
                }
                const Ye = ({ children: e, tooltipArgs: u, className: t }) => {
                    if (!u) return e;
                    const r = s().createElement('div', { className: t }, e);
                    if (u.header || u.body) return s().createElement(qe, u, r);
                    const n = u.contentId,
                        a = u.args,
                        o = null == a ? void 0 : a.contentId;
                    return n || o
                        ? s().createElement(He, Qe({}, u, { contentId: n || o }), r)
                        : s().createElement(ze, u, r);
                };
                class Xe extends s().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? H.B3.GOLD : H.B3.INTEGRAL;
                        const u = H.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                Xe.defaultProps = { format: 'integral' };
                const Ke = [
                        Te.Items,
                        Te.Equipment,
                        Te.Xp,
                        Te.XpFactor,
                        Te.Blueprints,
                        Te.BlueprintsAny,
                        Te.Goodies,
                        Te.Berths,
                        Te.Slots,
                        Te.Tokens,
                        Te.CrewSkins,
                        Te.CrewBooks,
                        Te.Customizations,
                        Te.CreditsFactor,
                        Te.TankmenXp,
                        Te.TankmenXpFactor,
                        Te.FreeXpFactor,
                        Te.BattleToken,
                        Te.PremiumUniversal,
                        Te.NaturalCover,
                        Te.BpCoin,
                        Te.BattlePassSelectToken,
                        Te.BattlaPassFinalAchievement,
                        Te.BattleBadge,
                        Te.BonusX5,
                        Te.CrewBonusX3,
                        Te.NewYearFillers,
                        Te.NewYearInvoice,
                        Te.EpicSelectToken,
                        Te.Comp7TokenWeeklyReward,
                        Te.Comp7TokenCouponReward,
                        Te.BattleBoosterGift,
                        Te.CosmicLootboxCommon,
                        Te.CosmicLootboxSilver,
                    ],
                    Ze = [Te.Gold, Te.Credits, Te.Crystal, Te.FreeXp],
                    Je = [Te.BattlePassPoints, Te.RacesPoint],
                    eu = [Te.PremiumPlus, Te.Premium],
                    uu = ['engravings', 'backgrounds'],
                    tu = ['engraving', 'background'],
                    ru = (e, u, t) => {
                        const r = u && { contentId: u };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || u),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !u,
                            },
                            r,
                            t,
                        );
                    },
                    nu = (e, u) => {
                        if (void 0 === e) return null;
                        switch (u) {
                            case Le.MULTI: {
                                const u = Number(e);
                                return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                            }
                            case Le.CURRENCY:
                            case Le.NUMBER:
                                return s().createElement(Xe, { format: 'integral', value: Number(e) });
                            case Le.PREMIUM_PLUS: {
                                const u = Number(e);
                                return isNaN(u) ? e : null;
                            }
                            default:
                                return e;
                        }
                    },
                    au = {
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
                    su = ({
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: r = xe.Big,
                        special: n,
                        value: a,
                        valueType: o,
                        style: i,
                        className: l,
                        classNames: c,
                        tooltipArgs: E,
                        periodicIconTooltipArgs: d,
                    }) => {
                        const m = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case Ne.BATTLE_BOOSTER:
                                    case Ne.BATTLE_BOOSTER_REPLACE:
                                        return Me.BATTLE_BOOSTER;
                                }
                            })(n),
                            A = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case Ne.BATTLE_BOOSTER:
                                        return Oe.BATTLE_BOOSTER;
                                    case Ne.BATTLE_BOOSTER_REPLACE:
                                        return Oe.BATTLE_BOOSTER_REPLACE;
                                    case Ne.BUILT_IN_EQUIPMENT:
                                        return Oe.BUILT_IN_EQUIPMENT;
                                    case Ne.EQUIPMENT_PLUS:
                                        return Oe.EQUIPMENT_PLUS;
                                    case Ne.EQUIPMENT_TROPHY_BASIC:
                                        return Oe.EQUIPMENT_TROPHY_BASIC;
                                    case Ne.EQUIPMENT_TROPHY_UPGRADED:
                                        return Oe.EQUIPMENT_TROPHY_UPGRADED;
                                    case Ne.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return Oe.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case Ne.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return Oe.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case Ne.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return Oe.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case Ne.PROGRESSION_STYLE_UPGRADED_1:
                                        return Oe.PROGRESSION_STYLE_UPGRADED_1;
                                    case Ne.PROGRESSION_STYLE_UPGRADED_2:
                                        return Oe.PROGRESSION_STYLE_UPGRADED_2;
                                    case Ne.PROGRESSION_STYLE_UPGRADED_3:
                                        return Oe.PROGRESSION_STYLE_UPGRADED_3;
                                    case Ne.PROGRESSION_STYLE_UPGRADED_4:
                                        return Oe.PROGRESSION_STYLE_UPGRADED_4;
                                }
                            })(n),
                            _ = nu(a, o);
                        return s().createElement(
                            'div',
                            { className: B()(au.base, au[`base__${r}`], l), style: i },
                            s().createElement(
                                Ye,
                                { tooltipArgs: E, className: au.tooltipWrapper },
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement(
                                        'div',
                                        { className: B()(au.image, null == c ? void 0 : c.image) },
                                        m &&
                                            s().createElement('div', {
                                                className: B()(au.highlight, null == c ? void 0 : c.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${m}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            s().createElement('div', {
                                                className: B()(au.icon, null == c ? void 0 : c.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        A &&
                                            s().createElement('div', {
                                                className: B()(au.overlay, null == c ? void 0 : c.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${A}_overlay)`,
                                                },
                                            }),
                                    ),
                                    _ &&
                                        s().createElement(
                                            'div',
                                            {
                                                className: B()(
                                                    au.info,
                                                    au[`info__${e}`],
                                                    o === Le.MULTI && au.info__multi,
                                                    null == c ? void 0 : c.info,
                                                ),
                                            },
                                            _,
                                        ),
                                ),
                            ),
                            t &&
                                s().createElement(
                                    Ye,
                                    { tooltipArgs: d },
                                    s().createElement('div', {
                                        className: B()(au.timer, null == c ? void 0 : c.periodicIcon),
                                    }),
                                ),
                        );
                    };
                function ou() {
                    return (
                        (ou =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        ou.apply(this, arguments)
                    );
                }
                const iu = ['races_point'],
                    lu = (e) => ('overlayType' in e ? e.overlayType : void 0),
                    cu = (e, u) =>
                        iu.includes(e.name)
                            ? `R.images.races.gui.maps.icons.rewards.${u}.${e.name}`
                            : ((e, u = xe.Small) => {
                                  const t = e.name,
                                      r = e.type,
                                      n = e.value,
                                      a = e.icon,
                                      s = e.item,
                                      o = e.dogTagType,
                                      i = ((e) => {
                                          switch (e) {
                                              case xe.S600x450:
                                                  return 'c_600x450';
                                              case xe.S400x300:
                                                  return 'c_400x300';
                                              case xe.S296x222:
                                                  return 'c_296x222';
                                              case xe.S232x174:
                                                  return 'c_232x174';
                                              case xe.Big:
                                                  return 'c_80x80';
                                              case xe.Small:
                                                  return 'c_48x48';
                                              default:
                                                  return e;
                                          }
                                      })(u);
                                  switch (t) {
                                      case 'basic':
                                      case 'plus':
                                          return `R.images.gui.maps.icons.quests.bonuses.${u}.${r}_${n}`;
                                      case 'premium':
                                          return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_plus_${n}`;
                                      case 'premium_plus':
                                          return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_${n}`;
                                      case 'items':
                                          return `R.images.gui.maps.icons.quests.bonuses.${u}.${s}`;
                                      case 'blueprints':
                                      case 'blueprintsAny':
                                      case 'finalBlueprints':
                                          return `R.images.gui.maps.icons.blueprints.fragment.${u}.${a}`;
                                      case 'tokens':
                                      case 'battleToken':
                                          return ((e, u) => {
                                              switch (u) {
                                                  case xe.Big:
                                                      return e.iconBig.replace('..', 'img://gui');
                                                  case xe.Small:
                                                      return e.iconSmall.replace('..', 'img://gui');
                                                  default:
                                                      return `R.images.gui.maps.icons.quests.bonuses.${u}.${e.icon}`;
                                              }
                                          })(e, u);
                                      case 'lootBoxToken':
                                      case 'customizations':
                                      case 'styleProgress':
                                      case 'crewSkins':
                                      case 'goodies':
                                      case 'groups':
                                      case 'tmanToken':
                                      case 'battlePassSelectToken':
                                          return `R.images.gui.maps.icons.quests.bonuses.${u}.${a}`;
                                      case 'crewBooks':
                                          return `R.images.gui.maps.icons.crewBooks.books.${u}.${a}`;
                                      case 'dogTagComponents':
                                          return ((e, u, t) => {
                                              const r = uu[e];
                                              if (r) {
                                                  const n = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(r),
                                                      a = n.$dyn(t);
                                                  return a ? `${a}` : `${n.$dyn(tu[e])}`;
                                              }
                                              return (
                                                  console.error(
                                                      'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                                  ),
                                                  ''
                                              );
                                          })(o, u, a);
                                      case 'dossier_badge':
                                          return `R.images.gui.maps.icons.quests.bonuses.badges.${i}.${a}`;
                                      case 'dossier_achievement':
                                          return `R.images.gui.maps.icons.achievement.${i}.${a}`;
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
                                          return `R.images.gui.maps.icons.collectionItems.${i}.${a}`;
                                      default:
                                          return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                                  }
                              })(e, u);
                function Eu(e, u) {
                    const t = S(),
                        r = null != u ? u : t.mediaSize < v.Medium ? xe.Small : xe.Big;
                    return {
                        parsedRewards: X(e, (e) => {
                            let u = ou({}, e);
                            return Object.assign({}, u, {
                                special: lu(u),
                                image: cu(u, r),
                                size: r,
                                valueType:
                                    ((t = u.name),
                                    Ke.includes(t)
                                        ? Le.MULTI
                                        : Ze.includes(t)
                                          ? Le.CURRENCY
                                          : Je.includes(t)
                                            ? Le.NUMBER
                                            : eu.includes(t)
                                              ? Le.PREMIUM_PLUS
                                              : Le.STRING),
                                tooltipArgs: ru({ tooltipId: u.tooltipId, tooltipContentId: u.tooltipContentId }),
                            });
                            var t;
                        }),
                        imageSize: r,
                    };
                }
                const du = {
                    base: 'ProgressBar_base_45',
                    base__medium: 'ProgressBar_base__medium_62',
                    base__small: 'ProgressBar_base__small_df',
                    background: 'ProgressBar_background_51',
                    background__medium: 'ProgressBar_background__medium_6e',
                    background__small: 'ProgressBar_background__small_46',
                    lineWrapper: 'ProgressBar_lineWrapper_6a',
                };
                let mu, Au;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big');
                })(mu || (mu = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(Au || (Au = {}));
                const _u = ({ size: e = mu.Default }) =>
                        s().createElement('div', { className: B()(du.background, du[`background__${e}`]) }),
                    Fu = {
                        base: 'ProgressBarBlink_base_24',
                        base__medium: 'ProgressBarBlink_base__medium_ec',
                        base__small: 'ProgressBarBlink_base__small_0f',
                    },
                    Du = ({ size: e }) => {
                        const u = B()(Fu.base, Fu[`base__${e}`]);
                        return s().createElement('div', { className: u });
                    },
                    gu = {
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
                    Cu = (0, a.memo)(
                        ({ size: e, lineRef: u, disabled: t, baseStyles: r, isComplete: n, withoutBounce: a }) => {
                            const o = B()(
                                    gu.base,
                                    gu[`base__${e}`],
                                    t && gu.base__disabled,
                                    n && gu.base__finished,
                                    a && gu.base__withoutBounce,
                                ),
                                i = !t && !n;
                            return s().createElement(
                                'div',
                                { className: o, style: r, ref: u },
                                s().createElement('div', { className: gu.pattern }),
                                s().createElement('div', { className: gu.gradient }),
                                i && s().createElement(Du, { size: e }),
                            );
                        },
                    ),
                    pu = ({ size: e, value: u, lineRef: t, disabled: r, onComplete: n }) => {
                        const o = (0, a.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            i = 100 === u;
                        return (
                            (0, a.useEffect)(() => {
                                i && n && n();
                            }, [i, n]),
                            s().createElement(Cu, { size: e, disabled: r, baseStyles: o, isComplete: i, lineRef: t })
                        );
                    },
                    Bu = (e, u) => {
                        let t;
                        const r = setTimeout(() => {
                            t = e();
                        }, u);
                        return () => {
                            'function' == typeof t && t(), clearTimeout(r);
                        };
                    };
                let hu, fu;
                !(function (e) {
                    (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                })(hu || (hu = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(fu || (fu = {}));
                const vu = (0, a.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: r,
                            size: n,
                            to: o,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                        }) => {
                            const c = o < r,
                                E = (0, a.useState)(fu.Idle),
                                d = E[0],
                                m = E[1],
                                A = d === fu.In,
                                _ = d === fu.End,
                                F = d === fu.Idle,
                                D = (0, a.useCallback)(
                                    (e) => {
                                        m(e), l && l(e);
                                    },
                                    [l],
                                );
                            (0, a.useEffect)(() => {
                                if (F && !t)
                                    return Bu(() => {
                                        D(fu.In);
                                    }, u);
                            }, [D, t, F, u]),
                                (0, a.useEffect)(() => {
                                    if (A)
                                        return Bu(() => {
                                            i && i(), D(fu.End);
                                        }, e + u);
                                }, [D, A, i, u, e]);
                            const g = (0, a.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                C = (0, a.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                p = (0, a.useMemo)(
                                    () => ({ width: `${Math.abs(r - o)}%`, left: `${c ? o : r}%` }),
                                    [r, c, o],
                                );
                            return _
                                ? null
                                : s().createElement(
                                      'div',
                                      { className: 'ProgressBarDeltaSimple_base_6c', style: p },
                                      s().createElement(
                                          'div',
                                          { style: F ? g : C, className: 'ProgressBarDeltaSimple_delta_99' },
                                          s().createElement(Du, { size: n }),
                                      ),
                                  );
                        },
                    ),
                    bu = (0, a.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: r,
                            disabled: n,
                            isComplete: o,
                            animationSettings: i,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const E = (0, a.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${i.line.duration}ms`,
                                    transitionDelay: `${i.line.delay}ms`,
                                }),
                                [i.line.delay, i.line.duration, e],
                            );
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(Cu, {
                                    size: u,
                                    lineRef: r,
                                    disabled: n,
                                    isComplete: o,
                                    baseStyles: E,
                                }),
                                t >= 0 &&
                                    s().createElement(vu, {
                                        transitionDuration: i.delta.duration,
                                        transitionDelay: i.delta.delay,
                                        freezed: i.freezed,
                                        from: t,
                                        size: u,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    wu = (e) => (e ? { left: 0 } : { right: 0 }),
                    Su = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    Pu = (e) => ({ transitionDuration: `${e}ms` }),
                    yu = (0, a.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: r,
                            size: n,
                            to: o,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const E = o < r,
                                d = (0, a.useState)(hu.Idle),
                                m = d[0],
                                A = d[1],
                                _ = m === hu.End,
                                F = m === hu.Idle,
                                D = m === hu.Grow,
                                g = m === hu.Shrink,
                                C = (0, a.useCallback)(
                                    (e) => {
                                        A(e), l && l(e);
                                    },
                                    [l],
                                ),
                                p = (0, a.useCallback)(
                                    (e, u) =>
                                        Bu(() => {
                                            C(e);
                                        }, u),
                                    [C],
                                );
                            (0, a.useEffect)(() => {
                                if (!t)
                                    return F
                                        ? p(hu.Grow, u)
                                        : D
                                          ? p(hu.Shrink, e)
                                          : g
                                            ? p(hu.End, e)
                                            : void (_ && i && i());
                            }, [p, t, _, D, F, g, i, u, e]);
                            const h = (0, a.useMemo)(() => Object.assign({ width: '100%' }, Pu(e), wu(E)), [E, e]),
                                f = (0, a.useMemo)(() => Object.assign({ width: '0%' }, Pu(e), wu(E)), [E, e]),
                                v = (0, a.useMemo)(() => Object.assign({ width: '0%' }, Su(E, r), Pu(e)), [r, E, e]),
                                b = (0, a.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(o - r)}%` }, Su(E, r), Pu(e)),
                                    [r, E, o, e],
                                );
                            if (_) return null;
                            const w = B()(
                                'ProgressBarDeltaGrow_base_7e',
                                c,
                                E && 0 === o && 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                            );
                            return s().createElement(
                                'div',
                                { style: F ? v : b, className: w },
                                s().createElement(
                                    'div',
                                    { style: g ? f : h, className: 'ProgressBarDeltaGrow_glow_68' },
                                    s().createElement(Du, { size: n }),
                                ),
                            );
                        },
                    ),
                    Tu = (0, a.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: r,
                            disabled: n,
                            isComplete: o,
                            animationSettings: i,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const E = e < t,
                                d = (0, a.useState)(!1),
                                m = d[0],
                                A = d[1],
                                _ = (0, a.useCallback)(
                                    (e) => {
                                        e === hu.Shrink && A(!0), c && c(e);
                                    },
                                    [c],
                                ),
                                F = (0, a.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                D = (0, a.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${i.line.duration}ms` }),
                                    [i.line.duration, e],
                                );
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(Cu, {
                                    size: u,
                                    lineRef: r,
                                    disabled: n,
                                    isComplete: o,
                                    withoutBounce: E && 0 === e,
                                    baseStyles: m ? D : F,
                                }),
                                t >= 0 &&
                                    s().createElement(yu, {
                                        transitionDuration: i.delta.duration,
                                        transitionDelay: i.delta.delay,
                                        onChangeAnimationState: _,
                                        freezed: i.freezed,
                                        onEndAnimation: l,
                                        from: t,
                                        size: u,
                                        to: e,
                                        className: i.delta.className,
                                    }),
                            );
                        },
                    ),
                    Ru = ['onComplete', 'onEndAnimation'];
                function xu() {
                    return (
                        (xu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        xu.apply(this, arguments)
                    );
                }
                const Lu = (0, a.memo)((e) => {
                        let u = e.onComplete,
                            t = e.onEndAnimation,
                            r = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, Ru);
                        const n = (0, a.useState)(!1),
                            o = n[0],
                            i = n[1],
                            l = (0, a.useCallback)(() => {
                                const e = 100 === r.to;
                                e !== o && i(e), e && u && u(), t && t();
                            }, [o, u, t, r.to]);
                        switch (r.animationSettings.type) {
                            case Au.Simple:
                                return s().createElement(bu, xu({}, r, { onEndAnimation: l, isComplete: o }));
                            case Au.Growing:
                                return s().createElement(Tu, xu({}, r, { onEndAnimation: l, isComplete: o }));
                            default:
                                return null;
                        }
                    }),
                    Nu = ['onEndAnimation'];
                function Mu() {
                    return (
                        (Mu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Mu.apply(this, arguments)
                    );
                }
                const Ou = (0, a.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                r,
                                n = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                            return n;
                        })(e, Nu);
                    const r = (0, a.useRef)({}),
                        n = (0, a.useCallback)(() => {
                            (r.current.from = void 0), u && u();
                        }, [u]),
                        o = 'number' == typeof r.current.from ? r.current.from : t.from;
                    return (
                        (r.current.from = o),
                        s().createElement(Lu, Mu({}, t, { onEndAnimation: n, key: `${o}-${t.to}`, from: o }))
                    );
                });
                function ku() {
                    return (
                        (ku =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        ku.apply(this, arguments)
                    );
                }
                const Iu = (0, a.memo)(
                        ({
                            size: e,
                            value: u,
                            lineRef: t,
                            disabled: r,
                            deltaFrom: n,
                            animationSettings: a,
                            onEndAnimation: o,
                            onChangeAnimationState: i,
                            onComplete: l,
                        }) => {
                            if (n === u)
                                return s().createElement(pu, {
                                    key: `${n}-${u}`,
                                    size: e,
                                    value: u,
                                    lineRef: t,
                                    disabled: r,
                                    onComplete: l,
                                });
                            const c = {
                                from: n,
                                to: u,
                                size: e,
                                lineRef: t,
                                disabled: r,
                                animationSettings: a,
                                onComplete: l,
                                onEndAnimation: o,
                                onChangeAnimationState: i,
                            };
                            return a.withStack
                                ? s().createElement(Ou, c)
                                : s().createElement(Lu, ku({ key: `${n}-${u}` }, c));
                        },
                    ),
                    Uu = (e) => ({
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
                    Hu = (e, u, t) => ('number' == typeof t ? (G(0, u, t) / u) * 100 : e),
                    Wu = {
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
                    $u = {
                        freezed: !1,
                        withStack: !1,
                        type: Au.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    zu = (0, a.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = Wu,
                            size: t = mu.Default,
                            animationSettings: r = $u,
                            disabled: n = !1,
                            withoutBackground: o = !1,
                            value: i,
                            deltaFrom: l,
                            lineRef: c,
                            onChangeAnimationState: E,
                            onEndAnimation: d,
                            onComplete: m,
                        }) => {
                            const A = ((e, u, t) =>
                                (0, a.useMemo)(() => {
                                    const r = (G(0, u, e) / u) * 100;
                                    return { value: r, deltaFrom: Hu(r, u, t) };
                                }, [t, u, e]))(i, e, l);
                            return s().createElement(
                                'div',
                                { className: B()(du.base, du[`base__${t}`]), style: Uu(u) },
                                !o && s().createElement(_u, { size: t }),
                                s().createElement(Iu, {
                                    size: t,
                                    lineRef: c,
                                    disabled: n,
                                    value: A.value,
                                    deltaFrom: A.deltaFrom,
                                    animationSettings: r,
                                    onEndAnimation: d,
                                    onChangeAnimationState: E,
                                    onComplete: m,
                                }),
                            );
                        },
                    ),
                    Gu = {
                        base: 'Progression_base_53',
                        progression: 'Progression_progression_11',
                        base__completed: 'Progression_base__completed_34',
                        hide: 'Progression_hide_e9',
                        progressionNumerical: 'Progression_progressionNumerical_e6',
                        'finish-color': 'Progression_finish-color_a8',
                        currentValue__inProgress: 'Progression_currentValue__inProgress_65',
                        currentValue: 'Progression_currentValue_ae',
                        separator: 'Progression_separator_aa',
                        progressBar: 'Progression_progressBar_37',
                        'add-blur': 'Progression_add-blur_9d',
                        show: 'Progression_show_f1',
                        'default-color': 'Progression_default-color_1d',
                    },
                    Vu = ({ currentValue: e, maxValue: u, lastValue: t, statusAnimation: r }) =>
                        s().createElement(
                            'div',
                            { className: B()(Gu.base, Gu[`base__${r}`]) },
                            s().createElement(
                                'div',
                                { className: Gu.progression },
                                s().createElement(
                                    'div',
                                    { className: B()(Gu.progressionNumerical) },
                                    s().createElement(
                                        'span',
                                        { className: B()(Gu.currentValue, Boolean(e) && Gu.currentValue__inProgress) },
                                        e,
                                    ),
                                    s().createElement(
                                        'span',
                                        { className: Gu.separator },
                                        R.strings.common.common.slash(),
                                    ),
                                    s().createElement('span', null, u),
                                ),
                                Boolean(e) &&
                                    s().createElement(
                                        'div',
                                        { className: B()(Gu.progressBar) },
                                        s().createElement(zu, {
                                            size: mu.Small,
                                            value: e,
                                            deltaFrom: e - t,
                                            maxValue: u,
                                        }),
                                    ),
                            ),
                        ),
                    ju = {
                        base: 'Quest_base_69',
                        topLine: 'Quest_topLine_e5',
                        border: 'Quest_border_9e',
                        base__recentlyCompleted: 'Quest_base__recentlyCompleted_15',
                        fadeOut: 'Quest_fadeOut_63',
                        base__completed: 'Quest_base__completed_37',
                        base__normal: 'Quest_base__normal_c3',
                        borderShine: 'Quest_borderShine_a5',
                        borderBlinkLine: 'Quest_borderBlinkLine_4c',
                        fadeOutLine: 'Quest_fadeOutLine_71',
                        questLogo: 'Quest_questLogo_23',
                        questIcon: 'Quest_questIcon_56',
                        showIcon: 'Quest_showIcon_df',
                        questIconShine: 'Quest_questIconShine_e5',
                        showShine: 'Quest_showShine_cf',
                        description: 'Quest_description_17',
                        condition: 'Quest_condition_db',
                        changeDescriptionColor: 'Quest_changeDescriptionColor_7e',
                        centerText: 'Quest_centerText_4b',
                        descriptionBgShine: 'Quest_descriptionBgShine_65',
                        progression: 'Quest_progression_fe',
                        hideProgression: 'Quest_hideProgression_a6',
                        rewards: 'Quest_rewards_3c',
                        racesPointsText: 'Quest_racesPointsText_65',
                        rewardImage: 'Quest_rewardImage_40',
                    };
                function qu() {
                    return (
                        (qu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        qu.apply(this, arguments)
                    );
                }
                const Qu = R.images.races.gui.maps.icons.progression.dailyQuests,
                    Yu = (0, z.Pi)(({ rewards: e = [], conditions: u, icon: t, mixClass: r, questState: n }) => {
                        var a;
                        const o = Eu(e, xe.Small).parsedRewards,
                            i = null != n ? n : ce(u[0].progression),
                            l = null != (a = Qu.$dyn(t)) ? a : Qu.battles(),
                            c = i === se.Normal ? l : Qu.iconCompleted();
                        return s().createElement(
                            'div',
                            { className: B()(ju.base, ju[`base__${i}`], r) },
                            s().createElement(
                                'div',
                                { className: ju.topLine },
                                s().createElement('div', { className: ju.border }),
                                i === se.RecentlyCompleted &&
                                    s().createElement(
                                        s().Fragment,
                                        null,
                                        s().createElement('div', { className: ju.borderShine }),
                                        s().createElement('div', { className: ju.borderBlinkLine }),
                                    ),
                            ),
                            s().createElement(
                                'div',
                                { className: ju.questLogo },
                                s().createElement('div', {
                                    className: B()(ju.questIcon),
                                    style: { backgroundImage: `url('${c}')` },
                                }),
                                i !== se.Normal && s().createElement('div', { className: B()(ju.questIconShine) }),
                            ),
                            s().createElement(
                                'div',
                                { className: ju.description },
                                i === se.Normal && s().createElement('div', { className: ju.descriptionBgShine }),
                                u.map(({ conditions: e, progression: u }, t) =>
                                    s().createElement(
                                        s().Fragment,
                                        { key: t },
                                        s().createElement(
                                            'div',
                                            { className: ju.condition },
                                            s().createElement(fe, {
                                                text: `${Fr.battleQuests.$dyn(le(e))}`,
                                                binding: Object.assign({}, e),
                                                classMix: ju.centerText,
                                            }),
                                        ),
                                        i !== se.Completed &&
                                            s().createElement(
                                                'div',
                                                { className: ju.progression },
                                                s().createElement(Vu, {
                                                    currentValue: u.currentValue,
                                                    maxValue: u.maxValue,
                                                    lastValue: u.lastValue,
                                                    statusAnimation:
                                                        i === se.RecentlyCompleted ? Xu.completed : Xu.inProgress,
                                                }),
                                            ),
                                    ),
                                ),
                            ),
                            s().createElement(
                                'div',
                                { className: ju.rewards },
                                o.map((e) =>
                                    s().createElement(
                                        su,
                                        qu({ className: ju.award, key: e.name }, e, {
                                            classNames: { info: ju.racesPointsText, image: ju.rewardImage },
                                        }),
                                    ),
                                ),
                            ),
                        );
                    });
                let Xu;
                !(function (e) {
                    (e.inProgress = 'inProgress'),
                        (e.completed = 'completed'),
                        (e.completedWasVisited = 'completedWasVisited'),
                        (e.allCompletedTasksVisited = 'allCompletedTasksVisited');
                })(Xu || (Xu = {}));
                const Ku = (0, z.Pi)(({ quests: e }) =>
                        s().createElement(
                            'div',
                            { className: 'Quests_base_b1' },
                            e.map((e, u) =>
                                s().createElement(Yu, {
                                    key: u,
                                    rewards: e.awardsBattle,
                                    conditions: e.taskConditions,
                                    icon: e.taskBattleIcon,
                                }),
                            ),
                        ),
                    ),
                    Zu = (0, z.Pi)(() => {
                        const e = Ae().model,
                            u = e.computes.battleQuests(),
                            t = e.computes.isAllQuestsCompleted(),
                            r = e.dailyQuestsModel.get(),
                            n = r.expirationTime,
                            a = r.isLastSeasonDay;
                        return t && a
                            ? s().createElement(
                                  'div',
                                  { className: Pe },
                                  s().createElement(fe, {
                                      text: Fr.dailyQuests.questsDone(),
                                      classMix: 'DailyQuests_questsDone_3e',
                                  }),
                              )
                            : s().createElement(
                                  'div',
                                  { className: Pe },
                                  !a &&
                                      s().createElement(
                                          'div',
                                          { className: 'DailyQuests_timer_c9' },
                                          s().createElement('div', { className: ye }),
                                          s().createElement(
                                              'div',
                                              { className: 'DailyQuests_timerContent_e5' },
                                              s().createElement(
                                                  'div',
                                                  { className: 'DailyQuests_timerText_67' },
                                                  Fr.dailyQuests.updateTime(),
                                              ),
                                              s().createElement(Se, { duration: n, style: Fe.Description }),
                                          ),
                                          s().createElement('div', { className: ye }),
                                      ),
                                  s().createElement(
                                      'div',
                                      { className: 'DailyQuests_quests_65' },
                                      s().createElement(Ku, { quests: u }),
                                  ),
                              );
                    });
                function Ju(e) {
                    engine.call('PlaySound', e);
                }
                const et = {
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
                    ut = [
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
                function tt() {
                    return (
                        (tt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        tt.apply(this, arguments)
                    );
                }
                class rt extends s().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && Ju(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && Ju(this.props.soundClick);
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
                            r = e.goto,
                            n = e.side,
                            a = e.type,
                            o = e.classNames,
                            i = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            E = e.onMouseUp,
                            d =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        r,
                                        n = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                    return n;
                                })(e, ut)),
                            m = B()(et.base, et[`base__${a}`], et[`base__${n}`], null == o ? void 0 : o.base),
                            A = B()(et.icon, et[`icon__${a}`], et[`icon__${n}`], null == o ? void 0 : o.icon),
                            _ = B()(et.glow, null == o ? void 0 : o.glow),
                            F = B()(et.caption, et[`caption__${a}`], null == o ? void 0 : o.caption),
                            D = B()(et.goto, null == o ? void 0 : o.goto);
                        return s().createElement(
                            'div',
                            tt(
                                {
                                    className: m,
                                    onMouseEnter: this._onMouseEnter(i),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(E),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                d,
                            ),
                            'info' !== a && s().createElement('div', { className: et.shine }),
                            s().createElement('div', { className: A }, s().createElement('div', { className: _ })),
                            s().createElement('div', { className: F }, u),
                            r && s().createElement('div', { className: D }, r),
                        );
                    }
                }
                rt.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const nt = {
                    base: 'ViewDecorator_base_aa',
                    container: 'ViewDecorator_container_98',
                    container__shown: 'ViewDecorator_container__shown_da',
                    leftBlock: 'ViewDecorator_leftBlock_63',
                    leftBlock__small: 'ViewDecorator_leftBlock__small_6a',
                    rightBlock: 'ViewDecorator_rightBlock_71',
                    rightBlock__small: 'ViewDecorator_rightBlock__small_ef',
                    view: 'ViewDecorator_view_9e',
                };
                let at;
                !(function (e) {
                    (e.Back = 'back'), (e.Forward = 'forward'), (e.Close = 'close'), (e.Info = 'info');
                })(at || (at = {})),
                    (0, a.memo)(
                        ({
                            background: e,
                            rightText: u,
                            leftText: t,
                            children: r,
                            leftSubText: n,
                            leftButtonType: o,
                            onClose: i,
                            onLeftButtonClick: l,
                            isHideButtons: E = !1,
                        }) => {
                            const d = (function (e, u, t) {
                                    const r = (0, a.useContext)(F);
                                    let n = Object.entries(r).filter(([e, u]) => !0 === u && e in c);
                                    return ['leftBlock', 'rightBlock'].reduce((e, t) => {
                                        const r = n.map((e) =>
                                            B()(
                                                u[((e, u) => e + '__' + u)(t, e[0])],
                                                u[
                                                    ((e, u) => {
                                                        return e + ((t = u)[0].toUpperCase() + t.slice(1));
                                                        var t;
                                                    })(t, e[0])
                                                ],
                                            ),
                                        );
                                        return (e[t] = B()(u[t], ...r)), e;
                                    }, {});
                                })(0, nt),
                                m = (0, a.useState)(E),
                                A = m[0],
                                _ = m[1];
                            (0, a.useEffect)(() => _(!E), [E]);
                            const D = (0, a.useMemo)(() => (e ? { backgroundImage: `url('${e}')` } : void 0), [e]),
                                g = B()(nt.container, A && nt.container__shown);
                            return s().createElement(
                                'div',
                                { className: nt.base, style: D },
                                s().createElement(
                                    'div',
                                    { className: g },
                                    Boolean(t) &&
                                        s().createElement(
                                            'div',
                                            { className: d.leftBlock },
                                            s().createElement(rt, {
                                                caption: t || '',
                                                goto: n,
                                                type: o,
                                                side: 'left',
                                                onClick: l,
                                            }),
                                        ),
                                    Boolean(u) &&
                                        s().createElement(
                                            'div',
                                            { className: d.rightBlock },
                                            s().createElement(rt, {
                                                caption: u || '',
                                                type: 'close',
                                                side: 'right',
                                                onClick: i,
                                            }),
                                        ),
                                ),
                                s().createElement('div', { className: nt.view }, r),
                            );
                        },
                    );
                const st = (0, z.Pi)(({ isProgressionCompleted: e = !1 }) => {
                        const u = Ae().controls,
                            t = (0, a.useCallback)(() => {
                                u.onAboutEvent();
                            }, [u]),
                            r = (0, a.useCallback)(() => {
                                u.onClose();
                            }, [u]);
                        return s().createElement(
                            'div',
                            { className: 'Header_base_c4' },
                            s().createElement(
                                'div',
                                { className: 'Header_about_a6' },
                                s().createElement(rt, { caption: Fr.header.about(), type: at.Info, onClick: t }),
                            ),
                            !e &&
                                s().createElement(
                                    'div',
                                    { className: 'Header_header_60' },
                                    s().createElement('div', { className: 'Header_title_42' }, Fr.header.title()),
                                    s().createElement('div', { className: 'Header_subTitle_ee' }, Fr.header.subTitle()),
                                ),
                            s().createElement(
                                'div',
                                { className: 'Header_close_e1' },
                                s().createElement(rt, {
                                    caption: Fr.header.close(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: r,
                                }),
                            ),
                        );
                    }),
                    ot = (e) => {
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
                    };
                function it(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, r = new Array(u); t < u; t++) r[t] = e[t];
                    return r;
                }
                const lt = [];
                function ct(e) {
                    const u = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, u.current)(...e), lt)
                    );
                }
                var Et = t(7030);
                let dt;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(dt || (dt = {}));
                const mt = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    At = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: r,
                        getWrapperSize: n,
                        triggerMouseMoveOnUpdate: s = !1,
                    }) => {
                        const o = (e, t) => {
                            const r = u(e),
                                n = r[0],
                                a = r[1];
                            return G(n, a, t);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                E = void 0 === c ? mt : c,
                                d = (0, a.useRef)(null),
                                m = (0, a.useRef)(null),
                                A = (() => {
                                    const e = (0, a.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        r = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        n = (e, ...t) => {
                                            for (
                                                var r,
                                                    n = (function (e, u) {
                                                        var t =
                                                            ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                                                            e['@@iterator'];
                                                        if (t) return (t = t.call(e)).next.bind(t);
                                                        if (
                                                            Array.isArray(e) ||
                                                            (t = (function (e, u) {
                                                                if (e) {
                                                                    if ('string' == typeof e) return it(e, u);
                                                                    var t = Object.prototype.toString
                                                                        .call(e)
                                                                        .slice(8, -1);
                                                                    return (
                                                                        'Object' === t &&
                                                                            e.constructor &&
                                                                            (t = e.constructor.name),
                                                                        'Map' === t || 'Set' === t
                                                                            ? Array.from(e)
                                                                            : 'Arguments' === t ||
                                                                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                    t,
                                                                                )
                                                                              ? it(e, u)
                                                                              : void 0
                                                                    );
                                                                }
                                                            })(e)) ||
                                                            (u && e && 'number' == typeof e.length)
                                                        ) {
                                                            t && (e = t);
                                                            var r = 0;
                                                            return function () {
                                                                return r >= e.length
                                                                    ? { done: !0 }
                                                                    : { done: !1, value: e[r++] };
                                                            };
                                                        }
                                                        throw new TypeError(
                                                            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                        );
                                                    })(u(e).values());
                                                !(r = n()).done;

                                            )
                                                (0, r.value)(...t);
                                        };
                                    return (0, a.useMemo)(() => ({ on: t, off: r, trigger: n }), []);
                                })(),
                                _ = (function (e, u, t) {
                                    const r = (0, a.useMemo)(
                                        () =>
                                            (function (e, u, t, r) {
                                                let n,
                                                    a = !1,
                                                    s = 0;
                                                function o() {
                                                    n && clearTimeout(n);
                                                }
                                                function i(...i) {
                                                    const l = this,
                                                        c = Date.now() - s;
                                                    function E() {
                                                        (s = Date.now()), t.apply(l, i);
                                                    }
                                                    a ||
                                                        (r && !n && E(),
                                                        o(),
                                                        void 0 === r && c > e
                                                            ? E()
                                                            : !0 !== u &&
                                                              (n = setTimeout(
                                                                  r
                                                                      ? function () {
                                                                            n = void 0;
                                                                        }
                                                                      : E,
                                                                  void 0 === r ? e - c : e,
                                                              )));
                                                }
                                                return (
                                                    'boolean' != typeof u && ((r = t), (t = u), (u = void 0)),
                                                    (i.cancel = function () {
                                                        o(), (a = !0);
                                                    }),
                                                    i
                                                );
                                            })(t, e),
                                        u,
                                    );
                                    return (0, a.useEffect)(() => r.cancel, [r]), r;
                                })(
                                    () => {
                                        i.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                F = (0, Et.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = d.current;
                                        u && (t(u, e), A.trigger('change', e), s && _());
                                    },
                                    onRest: (e) => A.trigger('rest', e),
                                    onStart: (e) => A.trigger('start', e),
                                    onPause: (e) => A.trigger('pause', e),
                                })),
                                D = F[0],
                                g = F[1],
                                C = (0, a.useCallback)(
                                    (e, u, t) => {
                                        var r;
                                        const n = D.scrollPosition.get(),
                                            a = (null != (r = D.scrollPosition.goal) ? r : 0) - n;
                                        return o(e, u * t + a + n);
                                    },
                                    [D.scrollPosition],
                                ),
                                p = (0, a.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const r = d.current;
                                        r &&
                                            g.start({
                                                scrollPosition: o(r, e),
                                                immediate: u,
                                                reset: t,
                                                config: E.animationConfig,
                                                from: { scrollPosition: o(r, D.scrollPosition.get()) },
                                            });
                                    },
                                    [g, E.animationConfig, D.scrollPosition],
                                ),
                                B = (0, a.useCallback)(
                                    (e) => {
                                        const u = d.current,
                                            t = m.current;
                                        if (!u || !t) return;
                                        const r = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return n(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, E.step),
                                            a = C(u, e, r);
                                        p(a);
                                    },
                                    [p, C, E.step],
                                ),
                                h = (0, a.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && B(r(e)),
                                            d.current && A.trigger('mouseWheel', e, D.scrollPosition, u(d.current));
                                    },
                                    [D.scrollPosition, B, A],
                                ),
                                f = ((e, u = []) => {
                                    const t = (0, a.useRef)(),
                                        r = (0, a.useCallback)((...u) => {
                                            t.current && t.current(), (t.current = e(...u));
                                        }, u);
                                    return (
                                        (0, a.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [r],
                                        ),
                                        r
                                    );
                                })(
                                    () =>
                                        ot(() => {
                                            const e = d.current;
                                            e &&
                                                (p(o(e, D.scrollPosition.goal), { immediate: !0 }),
                                                A.trigger('resizeHandled'));
                                        }),
                                    [p, D.scrollPosition.goal],
                                ),
                                v = ct(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const u = o(e, D.scrollPosition.goal);
                                    u !== D.scrollPosition.goal && p(u, { immediate: !0 }),
                                        A.trigger('recalculateContent');
                                });
                            return (
                                (0, a.useEffect)(
                                    () => (
                                        window.addEventListener('resize', f),
                                        () => {
                                            window.removeEventListener('resize', f);
                                        }
                                    ),
                                    [f],
                                ),
                                (0, a.useMemo)(
                                    () => ({
                                        getWrapperSize: () => (m.current ? n(m.current) : void 0),
                                        getContainerSize: () => (d.current ? e(d.current) : void 0),
                                        getBounds: () =>
                                            d.current
                                                ? u(d.current)
                                                : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                        stepTimeout: E.step.clampedArrowStepTimeout,
                                        clampPosition: o,
                                        handleMouseWheel: h,
                                        applyScroll: p,
                                        applyStepTo: B,
                                        contentRef: d,
                                        wrapperRef: m,
                                        scrollPosition: g,
                                        animationScroll: D,
                                        recalculateContent: v,
                                        events: { on: A.on, off: A.off },
                                    }),
                                    [D.scrollPosition, p, B, A.off, A.on, v, h, g, E.step.clampedArrowStepTimeout],
                                )
                            );
                        };
                    },
                    _t = At({
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
                        getDirection: (e) => (e.deltaY > 1 ? dt.Next : dt.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    });
                function Ft(e, u, t = []) {
                    const r = (0, a.useRef)(0),
                        n = (0, a.useCallback)(() => window.clearInterval(r.current), t || []);
                    (0, a.useEffect)(() => n, [n]);
                    const s = (null != t ? t : []).concat([u]);
                    return [
                        (0, a.useCallback)((t) => {
                            (r.current = window.setInterval(() => e(t, !0), u)), e(t, !1);
                        }, s),
                        n,
                    ];
                }
                const Dt = 'HorizontalBar_base__nonActive_82',
                    gt = 'disable',
                    Ct = { pending: !1, offset: 0 },
                    pt = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Bt = () => {},
                    ht = (e, u) => Math.max(20, e.offsetWidth * u),
                    ft = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = pt, onDrag: r = Bt }) => {
                        const n = (0, a.useRef)(null),
                            o = (0, a.useRef)(null),
                            i = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            E = e.stepTimeout || 100,
                            d = (0, a.useState)(Ct),
                            m = d[0],
                            A = d[1],
                            _ = (0, a.useCallback)(
                                (e) => {
                                    A(e),
                                        c.current && r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [r],
                            ),
                            F = () => {
                                const u = l.current,
                                    t = c.current,
                                    r = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(r && u && t && n)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, r / n),
                                    E = G(0, 1, a / (n - r)),
                                    d = (u.offsetWidth - ht(u, s)) * E;
                                (t.style.transform = `translateX(${0 | d}px)`),
                                    ((e) => {
                                        if (o.current && i.current && l.current && c.current) {
                                            if (0 === e)
                                                return o.current.classList.add(gt), void i.current.classList.remove(gt);
                                            if (
                                                ((u = l.current),
                                                (t = c.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return o.current.classList.remove(gt), void i.current.classList.add(gt);
                                            var u, t;
                                            o.current.classList.remove(gt), i.current.classList.remove(gt);
                                        }
                                    })(d);
                            },
                            D = ct(() => {
                                (() => {
                                    const u = c.current,
                                        t = l.current,
                                        r = e.getWrapperSize(),
                                        a = e.getContainerSize();
                                    if (!(a && u && r && t)) return;
                                    const s = Math.min(1, r / a);
                                    (u.style.width = `${ht(t, s)}px`),
                                        (u.style.display = 'flex'),
                                        n.current &&
                                            (1 === s ? n.current.classList.add(Dt) : n.current.classList.remove(Dt));
                                })(),
                                    F();
                            });
                        (0, a.useEffect)(() => ot(D)),
                            (0, a.useEffect)(
                                () =>
                                    ot(() => {
                                        const u = () => {
                                            F();
                                        };
                                        let t = Bt;
                                        const r = () => {
                                            t(), (t = ot(D));
                                        };
                                        return (
                                            e.events.on('recalculateContent', D),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', r),
                                            () => {
                                                t(),
                                                    e.events.off('recalculateContent', D),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', r);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, a.useEffect)(() => {
                                if (!m.pending) return;
                                const u = (u) => {
                                        var t;
                                        const n = e.contentRef.current;
                                        if (!n) return;
                                        const a = l.current,
                                            s = c.current;
                                        if (!n || !a || !s) return;
                                        const o = u.screenX - m.offset - a.getBoundingClientRect().x,
                                            i = (o / a.offsetWidth) * (null != (t = e.getContainerSize()) ? t : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(n, i),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            r({ type: 'dragging', thumb: s, thumbOffset: o, contentOffset: i });
                                    },
                                    t = () => {
                                        window.removeEventListener('mousemove', u), _(Ct);
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t);
                                    }
                                );
                            }, [e, m.offset, m.pending, r, _]);
                        const g = Ft((u) => e.applyStepTo(u), E, [e]),
                            C = g[0],
                            p = g[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', p, !0),
                                () => document.removeEventListener('mouseup', p, !0)
                            ),
                            [p],
                        );
                        const h = (e) => {
                            e.target.classList.contains(gt) || Ju('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: B()('HorizontalBar_base_49', u.base), ref: n, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: B()('HorizontalBar_leftButton_5f', u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(gt) || 0 !== e.button || (Ju('play'), C(dt.Next));
                                },
                                onMouseUp: p,
                                ref: o,
                                onMouseEnter: h,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: B()('HorizontalBar_track_0d', u.track),
                                    onMouseDown: (u) => {
                                        const r = c.current;
                                        r &&
                                            0 === u.button &&
                                            (Ju('play'),
                                            u.target === r
                                                ? _({ pending: !0, offset: u.screenX - r.getBoundingClientRect().x })
                                                : ((u) => {
                                                      const r = c.current,
                                                          n = e.contentRef.current;
                                                      if (!r || !n) return;
                                                      const a = t(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + a * u);
                                                  })(u.screenX > r.getBoundingClientRect().x ? dt.Prev : dt.Next));
                                    },
                                    ref: l,
                                    onMouseEnter: h,
                                },
                                s().createElement('div', { ref: c, className: B()('HorizontalBar_thumb_fd', u.thumb) }),
                                s().createElement('div', { className: B()('HorizontalBar_rail_32', u.rail) }),
                            ),
                            s().createElement('div', {
                                className: B()('HorizontalBar_rightButton_03', u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(gt) || 0 !== e.button || (Ju('play'), C(dt.Prev));
                                },
                                onMouseUp: p,
                                ref: i,
                                onMouseEnter: h,
                            }),
                        );
                    }),
                    vt = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    bt = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: r,
                        areaClassName: n,
                        classNames: o,
                        scrollClassName: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const E = (0, a.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: B()(vt.base, e.base) });
                            }, [r]),
                            d = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: B()(vt.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: B()(vt.defaultScrollArea, n) },
                                s().createElement(wt, { className: i, api: d, classNames: o }, e),
                            ),
                            s().createElement(ft, { getStepByRailClick: l, api: u, onDrag: c, classNames: E }),
                        );
                    },
                    wt = ({ api: e, className: u, classNames: t, children: r }) => (
                        (0, a.useEffect)(() => ot(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: B()(vt.base, u) },
                            s().createElement(
                                'div',
                                {
                                    className: B()(vt.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                s().createElement(
                                    'div',
                                    { className: B()(vt.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    r,
                                ),
                            ),
                        )
                    );
                (wt.Bar = ft),
                    (wt.Default = bt),
                    (wt.SeniorityAwards = ({ api: e, className: u, classNames: t, children: r }) => (
                        (0, a.useEffect)(() => ot(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: B()(vt.base, u) },
                            s().createElement(
                                'div',
                                { className: B()(vt.wrapper, null == t ? void 0 : t.wrapper), ref: e.wrapperRef },
                                s().createElement(
                                    'div',
                                    { className: B()(vt.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    r,
                                ),
                            ),
                        )
                    ));
                const St = At({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? dt.Next : dt.Prev),
                    }),
                    Pt = 'VerticalBar_base__nonActive_42',
                    yt = 'disable',
                    Tt = () => {},
                    Rt = { pending: !1, offset: 0 },
                    xt = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Lt = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    Nt = (e, u) => Math.max(20, e.offsetHeight * u),
                    Mt = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = xt, onDrag: r = Tt }) => {
                        const n = (0, a.useRef)(null),
                            o = (0, a.useRef)(null),
                            i = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            E = e.stepTimeout || 100,
                            d = (0, a.useState)(Rt),
                            m = d[0],
                            A = d[1],
                            _ = (0, a.useCallback)(
                                (e) => {
                                    A(e),
                                        c.current && r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [r],
                            ),
                            F = ct(() => {
                                const u = c.current,
                                    t = l.current,
                                    r = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(r && a && u && t)) return;
                                const s = Math.min(1, r / a);
                                return (
                                    (u.style.height = `${Nt(t, s)}px`),
                                    u.classList.add('VerticalBar_thumb_32'),
                                    n.current &&
                                        (1 === s ? n.current.classList.add(Pt) : n.current.classList.remove(Pt)),
                                    s
                                );
                            }),
                            D = ct(() => {
                                const u = l.current,
                                    t = c.current,
                                    r = e.getWrapperSize(),
                                    n = e.getContainerSize();
                                if (!(r && u && t && n)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, r / n),
                                    E = G(0, 1, a / (n - r)),
                                    d = (u.offsetHeight - Nt(u, s)) * E;
                                (t.style.transform = `translateY(${0 | d}px)`),
                                    ((e) => {
                                        if (o.current && i.current && l.current && c.current) {
                                            if (0 === e)
                                                return o.current.classList.add(yt), void i.current.classList.remove(yt);
                                            if (
                                                ((u = l.current),
                                                (t = c.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return o.current.classList.remove(yt), void i.current.classList.add(yt);
                                            var u, t;
                                            o.current.classList.remove(yt), i.current.classList.remove(yt);
                                        }
                                    })(d);
                            }),
                            g = ct(() => {
                                Lt(e, () => {
                                    F(), D();
                                });
                            });
                        (0, a.useEffect)(() => ot(g)),
                            (0, a.useEffect)(() => {
                                const u = () => {
                                    Lt(e, () => {
                                        D();
                                    });
                                };
                                let t = Tt;
                                const r = () => {
                                    t(), (t = ot(g));
                                };
                                return (
                                    e.events.on('recalculateContent', g),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', r),
                                    () => {
                                        t(),
                                            e.events.off('recalculateContent', g),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', r);
                                    }
                                );
                            }, [e]),
                            (0, a.useEffect)(() => {
                                if (!m.pending) return;
                                const u = (u) => {
                                        Lt(e, (t) => {
                                            const n = l.current,
                                                a = c.current,
                                                s = e.getContainerSize();
                                            if (!n || !a || !s) return;
                                            const o = u.screenY - m.offset - n.getBoundingClientRect().y,
                                                i = (o / n.offsetHeight) * s;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                r({ type: 'dragging', thumb: a, thumbOffset: o, contentOffset: i });
                                        });
                                    },
                                    t = () => {
                                        window.removeEventListener('mousemove', u), _(Rt);
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t);
                                    }
                                );
                            }, [e, m.offset, m.pending, r, _]);
                        const C = Ft((u) => e.applyStepTo(u), E, [e]),
                            p = C[0],
                            h = C[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', h, !0),
                                () => document.removeEventListener('mouseup', h, !0)
                            ),
                            [h],
                        );
                        const f = (e) => {
                            e.target.classList.contains(yt) || Ju('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: B()('VerticalBar_base_f3', u.base), ref: n, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: B()('VerticalBar_topButton_d7', u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(yt) || 0 !== e.button || (Ju('play'), p(dt.Next));
                                },
                                ref: o,
                                onMouseEnter: f,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: B()('VerticalBar_track_df', u.track),
                                    onMouseDown: (u) => {
                                        const r = c.current;
                                        var n;
                                        r &&
                                            0 === u.button &&
                                            (Ju('play'),
                                            u.target === r
                                                ? _({ pending: !0, offset: u.screenY - r.getBoundingClientRect().y })
                                                : ((n = u.screenY > r.getBoundingClientRect().y ? dt.Prev : dt.Next),
                                                  c.current &&
                                                      Lt(e, (u) => {
                                                          if (!u) return;
                                                          const r = t(e),
                                                              a = e.clampPosition(u, u.scrollTop + r * n);
                                                          e.applyScroll(a);
                                                      })));
                                    },
                                    ref: l,
                                    onMouseEnter: f,
                                },
                                s().createElement('div', { ref: c, className: u.thumb }),
                                s().createElement('div', { className: B()('VerticalBar_rail_43', u.rail) }),
                            ),
                            s().createElement('div', {
                                className: B()('VerticalBar_bottomButton_06', u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(yt) || 0 !== e.button || (Ju('play'), p(dt.Prev));
                                },
                                onMouseUp: h,
                                ref: i,
                                onMouseEnter: f,
                            }),
                        );
                    }),
                    Ot = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    kt = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: r,
                        areaClassName: n,
                        scrollClassName: o,
                        scrollClassNames: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const E = (0, a.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: B()(Ot.base, e.base) });
                            }, [r]),
                            d = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: B()(Ot.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: B()(Ot.area, n) },
                                s().createElement(It, { className: o, classNames: i, api: d }, e),
                            ),
                            s().createElement(Mt, { getStepByRailClick: l, api: u, onDrag: c, classNames: E }),
                        );
                    },
                    It = ({ className: e, classNames: u, children: t, api: r }) => (
                        (0, a.useEffect)(() => ot(r.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: B()(Ot.base, e), ref: r.wrapperRef, onWheel: r.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: B()(Ot.content, null == u ? void 0 : u.content), ref: r.contentRef },
                                t,
                            ),
                        )
                    );
                It.Default = kt;
                const Ut = { Vertical: n, Horizontal: r };
                let Ht;
                !(function (e) {
                    (e[(e.Scrolling = 0)] = 'Scrolling'),
                        (e[(e.ProgressChange = 1)] = 'ProgressChange'),
                        (e[(e.HighlightCard = 2)] = 'HighlightCard'),
                        (e[(e.ChangeCompleted = 3)] = 'ChangeCompleted'),
                        (e[(e.ProgressFinished = 4)] = 'ProgressFinished'),
                        (e[(e.ProgressAlreadyFinished = 5)] = 'ProgressAlreadyFinished');
                })(Ht || (Ht = {}));
                const Wt = (e, u, t) =>
                        B()(
                            e[t],
                            u === Ht.ProgressAlreadyFinished
                                ? e[`${t}__fast`]
                                : u >= Ht.ProgressFinished
                                  ? e[`${t}__completed`]
                                  : void 0,
                        ),
                    $t = ({ level: e, isActive: u, isCompleted: t }) => {
                        const r = B()(
                            'LevelLabel_level_87',
                            t && 'LevelLabel_level__completed_6b',
                            u && 'LevelLabel_level__active_eb',
                        );
                        return s().createElement(
                            'div',
                            { className: 'LevelLabel_base_e0' },
                            s().createElement('div', {
                                className: B()('LevelLabel_activeGlow_bd', u && 'LevelLabel_activeGlow__completed_68'),
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: B()(
                                        'LevelLabel_levelCurrent_7c',
                                        u && 'LevelLabel_levelCurrent__completed_f1',
                                    ),
                                },
                                e,
                            ),
                            s().createElement('div', { className: r }, e),
                        );
                    },
                    zt = {
                        base: 'LevelCard_base_64',
                        bgCompleted: 'LevelCard_bgCompleted_7f',
                        bgCompleted__completed: 'LevelCard_bgCompleted__completed_d6',
                        bgCompleted__fast: 'LevelCard_bgCompleted__fast_67',
                        completedIconContainer: 'LevelCard_completedIconContainer_03',
                        completedIconContainer__completed: 'LevelCard_completedIconContainer__completed_5b',
                        completedIconContainer__prevLevel: 'LevelCard_completedIconContainer__prevLevel_34',
                        completedIcon: 'LevelCard_completedIcon_7f',
                        completedIconGlow: 'LevelCard_completedIconGlow_ce',
                        border: 'LevelCard_border_8f',
                        border__right: 'LevelCard_border__right_6a',
                    },
                    Gt = (e, u, t) => (e ? 'completed' : u ? 'inProgress' : t),
                    Vt = (0, z.Pi)(({ level: e, isActive: u, isCompleted: t, isLast: r }) => {
                        const n = (0, a.useState)(),
                            o = n[0],
                            i = n[1],
                            l = Ae().model,
                            c = (0, a.useRef)(null),
                            E = l.computes.levelStatus(e),
                            d = E.wasProgressionVisited,
                            m = E.isRecentlyCompletedLevel,
                            A = E.isPrevLevel;
                        (0, a.useEffect)(() => {
                            t && !d && m && i('prevLevel');
                        }, [t, d, m]);
                        const _ = (0, a.useCallback)(() => {
                            Ju('pr_progress_tick');
                        }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const e = c.current;
                                return ot(() => {
                                    if (e)
                                        return (
                                            e.addEventListener('transitionstart', _),
                                            () => {
                                                e.removeEventListener('transitionstart', _);
                                            }
                                        );
                                });
                            }, [c, _]),
                            s().createElement(
                                'div',
                                { className: zt.base },
                                s().createElement('div', {
                                    className: B()(zt.bgCompleted, u && zt.bgCompleted__completed),
                                    ref: c,
                                }),
                                s().createElement(
                                    'div',
                                    {
                                        className: B()(
                                            zt.completedIconContainer,
                                            zt[`completedIconContainer__${Gt(A, !t, o)}`],
                                        ),
                                    },
                                    s().createElement('div', { className: zt.completedIconGlow }),
                                    s().createElement('div', { className: zt.completedIcon }),
                                ),
                                s().createElement($t, { level: e, isCompleted: t, isActive: u }),
                                s().createElement('div', { className: zt.border }),
                                r && s().createElement('div', { className: B()(zt.border, zt.border__right) }),
                            )
                        );
                    });
                function jt() {
                    return (
                        (jt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        jt.apply(this, arguments)
                    );
                }
                const qt = (0, z.Pi)(
                        ({ levelRef: e }) => {
                            const u = Ae().model;
                            return s().createElement(
                                'div',
                                { className: 'LevelCards_base_49', ref: e },
                                X(u.computes.levels(), (e) => s().createElement(Vt, jt({ key: e.level }, e))),
                            );
                        },
                        { forwardRef: !0 },
                    ),
                    Qt = {
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
                    },
                    Yt = /(?:%\(|{)\w*(?:_[Oo]pen|Start)(?:\)s|})?(.*?)(?:%\(|{)\w*(?:_[Cc]lose|End)(?:\)s|})?/g,
                    Xt = /(?<=(?:%\(|{))(.*?)(?=(?:_[Oo]pen|Start))/,
                    Kt = /(?<=(?:_[Oo]pen|Start)(?:\)s?|}))(.*?)(?=(?:%\(|{))/,
                    Zt = (0, a.memo)(({ text: e, binding: u, classMix: t }) => {
                        const r = (0, a.useCallback)((e) => ({ color: `#${e}` }), []),
                            n = (0, a.useMemo)(() => u || {}, [u]);
                        let o = Yt.exec(e),
                            i = e,
                            l = 0;
                        for (; o; ) {
                            const t = o[0],
                                a = Xt.exec(t),
                                c = Kt.exec(t),
                                E = o[1];
                            if (a && c) {
                                const e = a[0],
                                    o = e + l++ + e;
                                (i = i.replace(t, `%(${o})`)),
                                    (n[o] = Qt[e]
                                        ? s().createElement(
                                              'span',
                                              { className: Qt[e] },
                                              s().createElement(fe, { text: E, binding: u }),
                                          )
                                        : s().createElement(
                                              'span',
                                              { style: r(e) },
                                              s().createElement(fe, { text: E, binding: u }),
                                          ));
                            }
                            o = Yt.exec(e);
                        }
                        return s().createElement(fe, { text: i, classMix: t, binding: n });
                    });
                function Jt() {
                    return (
                        (Jt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        Jt.apply(this, arguments)
                    );
                }
                const er = (0, z.Pi)(({ isCompleted: e, isActive: u, rewards: t }) => {
                        const r = Eu(t),
                            n = r.parsedRewards,
                            a = r.imageSize,
                            o = B()(
                                'Rewards_base_8a',
                                a === xe.Small && n.length > 2 && 'Rewards_base__wide_c4',
                                e && !u && 'Rewards_base__completed_b3',
                            );
                        return s().createElement(
                            'div',
                            { className: o },
                            X(n, (e) =>
                                s().createElement(
                                    su,
                                    Jt({ className: 'Rewards_reward_16', key: e.name }, e, {
                                        tooltipArgs: ru({ tooltipId: e.tooltipId }, Number(e.tooltipContentId)),
                                    }),
                                ),
                            ),
                        );
                    }),
                    ur = 'RewardCard_pointsBorder_61',
                    tr = 'RewardCard_border_ad',
                    rr = (0, z.Pi)(
                        ({
                            pointsMin: e,
                            pointsForCard: u,
                            pointsCurrent: t,
                            isCompleted: r,
                            isActive: n,
                            isLast: a,
                            rewards: o,
                        }) => {
                            const i = B()('RewardCard_activeBlock_d6', n && 'RewardCard_activeBlock__completed_03'),
                                l = B()('RewardCard_bgCompleted_eb', n && 'RewardCard_bgCompleted__completed_30');
                            return s().createElement(
                                'div',
                                { className: 'RewardCard_base_36' },
                                s().createElement(
                                    'div',
                                    { className: i },
                                    s().createElement(
                                        'div',
                                        { className: 'RewardCard_pointsContainer_82' },
                                        s().createElement(Zt, {
                                            classMix: 'RewardCard_points_5f',
                                            text: R.strings.races_progression.progression.card.points(),
                                            binding: { current: nu(`${e + t}`, Le.NUMBER) },
                                        }),
                                        s().createElement('div', { className: 'RewardCard_token_b7' }),
                                    ),
                                ),
                                s().createElement(
                                    'div',
                                    { className: 'RewardCard_bgShadow_74' },
                                    s().createElement('div', { className: l }),
                                ),
                                s().createElement(er, { rewards: o, isActive: n, isCompleted: r }),
                                s().createElement('div', { className: tr }),
                                s().createElement(
                                    'div',
                                    { className: B()(ur, 'RewardCard_pointsBorder__left_bd') },
                                    nu(`${e}`, Le.NUMBER),
                                ),
                                a && s().createElement('div', { className: B()(tr, 'RewardCard_border__right_c9') }),
                                a &&
                                    s().createElement(
                                        'div',
                                        { className: B()(ur, 'RewardCard_pointsBorder__right_b2') },
                                        nu(`${e + u}`, Le.NUMBER),
                                    ),
                            );
                        },
                    ),
                    nr = (0, z.Pi)(() => {
                        const e = Ae().model,
                            u = e.root.get().pointsForLevel;
                        return s().createElement(
                            'div',
                            { className: 'RewardCards_base_da' },
                            X(
                                e.computes.levels(),
                                ({ level: t, isCompleted: r, isActive: n, isLast: a, rewards: o }, i) =>
                                    s().createElement(rr, {
                                        key: i,
                                        pointsMin: i * u,
                                        pointsForCard: u,
                                        pointsCurrent: e.computes.currentPointsForLevel(t - 1),
                                        isCompleted: r,
                                        isActive: n,
                                        isLast: a,
                                        rewards: o,
                                    }),
                            ),
                        );
                    }),
                    ar = ['api', 'value', 'maxValue', 'theme'];
                function sr() {
                    return (
                        (sr =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                }
                                return e;
                            }),
                        sr.apply(this, arguments)
                    );
                }
                const or = (e, u) => ('number' == typeof u ? u : e.offsetLeft),
                    ir = (e) => {
                        let u = e.api,
                            t = e.value,
                            r = e.maxValue,
                            n = void 0 === r ? 100 : r,
                            o = e.theme,
                            i = void 0 === o ? Wu : o,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    r,
                                    n = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (t = a[r]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, ar);
                        const c = (0, a.useRef)(null),
                            E = (0, a.useRef)(null),
                            d = (0, a.useRef)(null),
                            m = G(0, t, n) / n,
                            A = (0, a.useCallback)(
                                (e) => {
                                    d.current &&
                                        c.current &&
                                        (({ horizontalScrollPosition: e, leftOffset: u }, t, r) => {
                                            const n = t.offsetWidth - r.offsetWidth,
                                                a = e - or(t, u),
                                                s = G(0, n, a);
                                            r.style.left = `${s}px`;
                                        })(e, c.current, d.current),
                                        E.current &&
                                            c.current &&
                                            ((
                                                { horizontalScrollPosition: e, leftOffset: u },
                                                t,
                                                { container: r, line: n },
                                            ) => {
                                                const a = Math.max(0, Math.floor(r.offsetWidth * t) - 8e3),
                                                    s = e - or(r, u),
                                                    o = G(0, a, s);
                                                n.style.left = `${o}px`;
                                            })(e, m, { line: E.current, container: c.current });
                                },
                                [m],
                            ),
                            _ = (0, a.useMemo)(() => Uu(i), [i]);
                        return (
                            (u.current.update = A),
                            s().createElement(
                                'div',
                                { className: 'OptimizedProgressBar_base_1f', ref: c },
                                s().createElement(
                                    'div',
                                    { className: 'OptimizedProgressBar_wrapper_ab' },
                                    s().createElement(
                                        'div',
                                        { style: _, className: 'OptimizedProgressBar_background_ce', ref: d },
                                        s().createElement(_u, { size: l.size }),
                                    ),
                                    s().createElement(
                                        zu,
                                        sr({}, l, {
                                            lineRef: E,
                                            value: t,
                                            theme: i,
                                            maxValue: n,
                                            withoutBackground: !0,
                                        }),
                                    ),
                                ),
                            )
                        );
                    },
                    lr = {
                        base: 'Container_base_ff',
                        progressWrapper: 'Container_progressWrapper_c7',
                        progressWrapper__completed: 'Container_progressWrapper__completed_74',
                        progressWrapper__fast: 'Container_progressWrapper__fast_7d',
                        bg: 'Container_bg_5d',
                    },
                    cr = (0, z.Pi)(({ api: e, theme: u }) => {
                        const t = Ae(),
                            r = t.model,
                            n = t.controls,
                            o = r.root.get(),
                            i = o.curProgressPoints,
                            l = o.pointsForLevel,
                            c = o.prevProgressPoints,
                            E = r.progressAnimationState.get(),
                            d = r.computes,
                            m = d.levels().length,
                            A = (0, a.useRef)({ update: () => {} });
                        e.current.moveProgressBars = (0, a.useCallback)((e) => {
                            A.current.update(e);
                        }, []);
                        const _ = (0, a.useState)({ maxPoints: m * l, previousEarnedPoints: c, progressionSize: c }),
                            F = _[0],
                            D = F.previousEarnedPoints,
                            g = F.maxPoints,
                            C = F.progressionSize,
                            p = _[1];
                        (0, a.useEffect)(() => {
                            p((e) => {
                                const u = 0 === e.progressionSize ? c : e.progressionSize;
                                return { maxPoints: m * l, previousEarnedPoints: u, progressionSize: i };
                            }),
                                c !== i && Ju('pr_progress_bar');
                        }, [c, l, i, d, m]);
                        const B = (0, a.useMemo)(
                            () =>
                                Object.assign({}, $u, {
                                    withStack: !0,
                                    type: Au.Growing,
                                    delta: { duration: 400, delay: 300 },
                                    line: { duration: 400, delay: 300 },
                                }),
                            [],
                        );
                        return (
                            (0, a.useEffect)(() => {
                                if (E === Ht.ProgressChange)
                                    return Bu(() => {
                                        n.finishProgressionChange();
                                    }, 700);
                            }, [n, E]),
                            s().createElement(
                                'div',
                                { className: lr.base },
                                s().createElement('div', { className: lr.bg }),
                                s().createElement(
                                    'div',
                                    { className: Wt(lr, E, 'progressWrapper') },
                                    s().createElement(ir, {
                                        animationSettings: B,
                                        deltaFrom: D,
                                        value: C,
                                        maxValue: g,
                                        api: A,
                                        theme: u,
                                    }),
                                ),
                            )
                        );
                    }),
                    Er = ({ api: e, children: u, updateProgressBarPosition: t }) => {
                        const r = (0, a.useState)(0),
                            n = r[0],
                            o = r[1],
                            i = (0, a.useState)(0),
                            l = i[0],
                            c = i[1],
                            E = (0, a.useState)(!1),
                            d = E[0],
                            m = E[1];
                        (0, a.useEffect)(
                            () =>
                                ot(() => {
                                    const u = (e) => {
                                        const u = e.value.scrollPosition;
                                        d || o(-u);
                                    };
                                    return (
                                        e.events.on('change', u),
                                        () => {
                                            e.events.off('change', u);
                                        }
                                    );
                                }),
                            [e, d],
                        );
                        const A = (0, a.useCallback)(
                                (e) => {
                                    m(!0), c(e.clientX), t();
                                },
                                [t],
                            ),
                            _ = (0, a.useCallback)(() => {
                                m(!1), c(0), t();
                            }, [t]),
                            F = (0, a.useCallback)(
                                (u) => {
                                    if (d) {
                                        const r = G(-(e.getBounds()[1] || 0), 0, n + u.clientX - l);
                                        e.applyScroll(-r, !0), c(u.clientX), o(r), t();
                                    }
                                },
                                [d, e, n, l, t],
                            );
                        return s().createElement(
                            'div',
                            {
                                className: B()('ScrollDrag_base_39', d && 'ScrollDrag_base__grabbing_1c'),
                                onMouseDown: A,
                                onMouseUp: _,
                                onMouseMove: F,
                            },
                            u,
                        );
                    };
                function dr(e, u, t, r, n, a, s) {
                    try {
                        var o = e[a](s),
                            i = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(i) : Promise.resolve(i).then(r, n);
                }
                const mr = (0, z.Pi)(({ api: e }) => {
                        const u = Ae().model,
                            t = u.root.get().curProgressPoints,
                            r = S(),
                            n = (0, a.useState)(!1),
                            o = n[0],
                            i = n[1],
                            l = (0, a.useState)(!1),
                            c = l[0],
                            E = l[1],
                            d = u.computes.levels().length,
                            m = u.progressAnimationState.get(),
                            A = u.computes,
                            _ = (0, a.useRef)({ moveProgressBars: V }),
                            F = (0, a.useRef)(null),
                            D = (0, a.useRef)(null),
                            g = e.animationScroll.scrollPosition,
                            C = e.getWrapperSize,
                            p = e.contentRef,
                            h = e.wrapperRef,
                            f = e.getContainerSize,
                            v = e.applyScroll;
                        (0, a.useLayoutEffect)(
                            () =>
                                ot(() => {
                                    const e = h.current,
                                        u = D.current;
                                    if (!e || !u) return;
                                    const t = u.children.length ? parseFloat(getComputedStyle(u.children[0]).width) : 0,
                                        n = parseFloat(getComputedStyle(u).paddingRight),
                                        a = parseFloat(getComputedStyle(e).paddingLeft);
                                    i(r.remScreenWidth >= d * t + n + a), E(!0);
                                }),
                            [r.remScreenWidth, h, d],
                        );
                        const b = (0, a.useCallback)(
                                (e) => {
                                    if (F.current) {
                                        const u = C();
                                        _.current.moveProgressBars({
                                            viewPort: F.current,
                                            horizontalScrollPosition: u ? e - u : e,
                                        });
                                    }
                                },
                                [C],
                            ),
                            w = () => {
                                b(g.goal);
                            },
                            P = (0, a.useCallback)(() => {
                                const e = p.current,
                                    u = d;
                                if (e && u > 0) {
                                    const t = f() || 0,
                                        r = C() || 0,
                                        n = t / u,
                                        a = A.currentLevel() * n,
                                        s = (r - e.offsetLeft - n) / 2;
                                    v(G(0, t - r, a - s), { immediate: m === Ht.ProgressAlreadyFinished });
                                }
                                0 === g.goal && b(g.goal);
                            }, [d, v, A, p, f, C, m, g.goal, b]);
                        return (
                            (0, a.useEffect)(() => {
                                P();
                            }, [t, P]),
                            (0, a.useEffect)(() => {
                                const e = (function () {
                                    var e,
                                        u =
                                            ((e = function* () {
                                                const e = f(),
                                                    u = g.goal;
                                                yield (0, H.Eu)();
                                                const t = f();
                                                b(t && e && t !== e ? (u * t) / e : u), P();
                                            }),
                                            function () {
                                                var u = this,
                                                    t = arguments;
                                                return new Promise(function (r, n) {
                                                    var a = e.apply(u, t);
                                                    function s(e) {
                                                        dr(a, r, n, s, o, 'next', e);
                                                    }
                                                    function o(e) {
                                                        dr(a, r, n, s, o, 'throw', e);
                                                    }
                                                    s(void 0);
                                                });
                                            });
                                    return function () {
                                        return u.apply(this, arguments);
                                    };
                                })();
                                return (
                                    engine.on('clientResized', e),
                                    () => {
                                        engine.off('clientResized', e);
                                    }
                                );
                            }, []),
                            (0, a.useEffect)(() => Bu(() => b(g.goal), 0), [t, g.goal, b]),
                            s().createElement(
                                'div',
                                {
                                    className: B()(
                                        'Content_base_ee',
                                        o && 'Content_base__centered_2a',
                                        c && 'Content_base__layoutReady_56',
                                    ),
                                    ref: F,
                                    onWheel: () => b(g.goal),
                                },
                                s().createElement(
                                    Ut.Horizontal.Area.Default,
                                    {
                                        api: e,
                                        className: 'Content_horizontalContent_f4',
                                        classNames: { wrapper: 'Content_wrapper_a0' },
                                        barClassNames: { base: 'Content_horizontalBarVerticalScrollBar_4e' },
                                        onDrag: w,
                                    },
                                    s().createElement(
                                        Er,
                                        { api: e, updateProgressBarPosition: w },
                                        s().createElement(qt, { levelRef: D }),
                                        s().createElement(
                                            'div',
                                            { className: 'Content_progress_72' },
                                            s().createElement(
                                                'div',
                                                { className: 'Content_progressArea_ee' },
                                                s().createElement(cr, { api: _ }),
                                            ),
                                        ),
                                        s().createElement(nr, null),
                                    ),
                                ),
                            )
                        );
                    }),
                    Ar = {
                        base: 'Progression_base_a8',
                        base__fast: 'Progression_base__fast_da',
                        shadow: 'Progression_shadow_37',
                        shadow__left: 'Progression_shadow__left_4a',
                        shadow__right: 'Progression_shadow__right_8f',
                        shadow__visible: 'Progression_shadow__visible_ab',
                    },
                    _r = (0, z.Pi)(() => {
                        const e = Ae(),
                            u = e.model,
                            t = e.controls,
                            r = u.progressAnimationState.get(),
                            n = (0, a.useState)(!1),
                            o = n[0],
                            i = n[1],
                            l = (0, a.useState)(!1),
                            c = l[0],
                            E = l[1],
                            d = u.computes.isProgressionCompleted(),
                            m = u.computes.wasProgressionCompletedBeforeStart(),
                            A = _t();
                        return (
                            (0, a.useEffect)(() => {
                                const e = (e) => {
                                    const u = A.contentRef.current.offsetLeft,
                                        t = e.value.scrollPosition,
                                        r = A.getWrapperSize() || 0,
                                        n = A.getContainerSize() || 0;
                                    i(t > u), E(t + r < n - u);
                                };
                                return (
                                    A.events.on('change', e),
                                    () => {
                                        A.events.off('change', e);
                                    }
                                );
                            }, [A]),
                            (0, a.useEffect)(
                                () =>
                                    m
                                        ? t.completeProgression(!0)
                                        : r === Ht.ChangeCompleted && d
                                          ? Bu(() => {
                                                t.completeProgression(!1);
                                            }, 1600)
                                          : r !== Ht.Scrolling || m
                                            ? r === Ht.HighlightCard
                                                ? Bu(() => {
                                                      t.finishHighlightCard();
                                                  }, 500)
                                                : void 0
                                            : Bu(() => {
                                                  t.finishScrolling();
                                              }, 1200),
                                [r, m, d, t],
                            ),
                            s().createElement(
                                'div',
                                { className: Wt(Ar, r, 'base') },
                                s().createElement('div', {
                                    className: B()(Ar.shadow, Ar.shadow__left, o && Ar.shadow__visible),
                                }),
                                s().createElement('div', {
                                    className: B()(Ar.shadow, Ar.shadow__right, c && Ar.shadow__visible),
                                }),
                                s().createElement(mr, { api: A }),
                            )
                        );
                    }),
                    Fr = R.strings.races_progression,
                    Dr = (0, z.Pi)(() => {
                        const e = Ae(),
                            u = e.controls,
                            t = e.model.computes.isProgressionCompleted();
                        var r;
                        return (
                            (r = u.onClose),
                            $(U.n.ESCAPE, r),
                            s().createElement(
                                'div',
                                { className: 'App_base_cd' },
                                s().createElement('div', { className: 'App_bg_fb' }),
                                t && s().createElement('div', { className: 'App_completedBg_76' }),
                                s().createElement(st, { isProgressionCompleted: t }),
                                t
                                    ? s().createElement(
                                          'div',
                                          { className: 'App_completedContainer_88' },
                                          s().createElement(
                                              'div',
                                              { className: 'App_flagContainer_ac' },
                                              s().createElement('div', { className: 'App_flag_5e' }),
                                              s().createElement(
                                                  'div',
                                                  { className: 'App_textContainer_0e' },
                                                  s().createElement(
                                                      'div',
                                                      { className: 'App_text_07' },
                                                      Fr.progression.completed(),
                                                  ),
                                                  s().createElement('div', { className: 'App_shine_f4' }),
                                              ),
                                          ),
                                      )
                                    : s().createElement(
                                          'div',
                                          { className: 'App_questsContainer_8e' },
                                          s().createElement(Zu, null),
                                      ),
                                s().createElement(
                                    'div',
                                    { className: 'App_progression_f9' },
                                    s().createElement(_r, null),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    I().render(
                        s().createElement(me, null, s().createElement(O, null, s().createElement(Dr, null))),
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
        (__webpack_require__.O = (e, u, t, r) => {
            if (!u) {
                var n = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [u, t, r] = deferred[i], a = !0, s = 0; s < u.length; s++)
                        (!1 & r || n >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((a = !1), r < n && (n = r));
                    if (a) {
                        deferred.splice(i--, 1);
                        var o = t();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            r = r || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > r; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [u, t, r];
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
        (__webpack_require__.j = 699),
        (() => {
            var e = { 699: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var r,
                        n,
                        [a, s, o] = t,
                        i = 0;
                    if (a.some((u) => 0 !== e[u])) {
                        for (r in s) __webpack_require__.o(s, r) && (__webpack_require__.m[r] = s[r]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (u && u(t); i < a.length; i++)
                        (n = a[i]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(939));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
