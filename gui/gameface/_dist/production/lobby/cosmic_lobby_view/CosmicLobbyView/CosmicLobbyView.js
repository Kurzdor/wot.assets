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
                t.r(u), t.d(u, { mouse: () => i, onResize: () => a });
                var n = t(2472),
                    r = t(1176);
                const a = (0, n.E)('clientResized'),
                    s = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') },
                    i = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function u() {
                            e.enabled && (0, r.R)(!1);
                        }
                        function t() {
                            e.enabled && (0, r.R)(!0);
                        }
                        function n() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', u),
                                      document.body.removeEventListener('mouseleave', t))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', u),
                                      document.body.addEventListener('mouseleave', t))
                                : (0, r.R)(!1);
                        }
                        const a = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let r = !0;
                                        const a = `mouse${u}`,
                                            i = s[u]((e) => t([e, 'outside']));
                                        function o(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(a, o),
                                            n(),
                                            () => {
                                                r &&
                                                    (i(),
                                                    window.removeEventListener(a, o),
                                                    (e.listeners -= 1),
                                                    n(),
                                                    (r = !1));
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
            5959: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        events: () => n,
                        getMouseGlobalPosition: () => a,
                        getSize: () => r,
                        graphicsQuality: () => s,
                    });
                var n = t(527);
                function r(e = 'px') {
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
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => n });
            },
            2472: (e, u, t) => {
                'use strict';
                function n(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                t.d(u, { E: () => n });
            },
            3138: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => r });
                var n = t(5959);
                const r = { view: t(7641), client: n };
            },
            3722: (e, u, t) => {
                'use strict';
                function n(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function r(e, u, t) {
                    return `url(${n(e, u, t)})`;
                }
                t.r(u), t.d(u, { getBgUrl: () => r, getTextureUrl: () => n });
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => r });
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
            7641: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => i,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => b,
                        events: () => a.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => f,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => v,
                        getScale: () => F,
                        getSize: () => m,
                        getViewGlobalPosition: () => _,
                        isEventHandled: () => C,
                        isFocused: () => B,
                        pxToRem: () => g,
                        remToPx: () => p,
                        resize: () => d,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => D,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => y,
                    });
                var n = t(3722),
                    r = t(6112),
                    a = t(6538),
                    s = t(8566);
                function i(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function o(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function c(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function E(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function d(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function _(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: p(u.x), y: p(u.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function F() {
                    return viewEnv.getScale();
                }
                function g(e) {
                    return viewEnv.pxToRem(e);
                }
                function p(e) {
                    return viewEnv.remToPx(e);
                }
                function D(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function B() {
                    return viewEnv.isFocused();
                }
                function h() {
                    return viewEnv.setEventHandled();
                }
                function C() {
                    return viewEnv.isEventHandled();
                }
                function f() {
                    viewEnv.forceTriggerMouseMove();
                }
                function v() {
                    return viewEnv.getShowingStatus();
                }
                const b = Object.keys(r.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === r.W[u]), e),
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
                    y = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : a.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => a });
                const n = ['args'],
                    r = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                s = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(u, n);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, s, {
                                          arguments:
                                              ((r = a),
                                              Object.entries(r).map(([e, u]) => {
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
                        var r;
                    },
                    a = {
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
            5521: (e, u, t) => {
                'use strict';
                let n, r;
                t.d(u, { n: () => n }),
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
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                var n = t(3138);
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
                    addCallback(e, u, t = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = n.O.view.addModelObserver(e, t, r);
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
                            const n = this._callbacks[t];
                            void 0 !== n && n(e, u);
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
                t.d(u, { B3: () => c, Z5: () => s, B0: () => o, ry: () => D });
                class n {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: t }) => {
                                    let n = e.target;
                                    do {
                                        if (n === u) return;
                                        n = n.parentNode;
                                    } while (n);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return n.__instance || (n.__instance = new n()), n.__instance;
                    }
                    register(e, u) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: u });
                    }
                    unregister(e, u) {
                        const t = e,
                            n = u;
                        (this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== n)),
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
                const s = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    i = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
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
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    E = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = t(5521),
                    A = t(3138);
                const F = ['args'];
                function g(e, u, t, n, r, a, s) {
                    try {
                        var i = e[a](s),
                            o = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(o) : Promise.resolve(o).then(n, r);
                }
                const p = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    D = (function () {
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
                                    return new Promise(function (n, r) {
                                        var a = e.apply(u, t);
                                        function s(e) {
                                            g(a, n, r, s, i, 'next', e);
                                        }
                                        function i(e) {
                                            g(a, n, r, s, i, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    B = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(u, F);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([e, u]) => {
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
                        var n;
                    },
                    h = () => B(o.CLOSE),
                    C = (e, u) => {
                        e.keyCode === _.n.ESCAPE && u();
                    };
                var f = t(7572);
                const v = r.instance,
                    b = {
                        DataTracker: a.Z,
                        ViewModel: f.Z,
                        ViewEventType: o,
                        NumberFormatType: c,
                        RealFormatType: E,
                        TimeFormatType: m,
                        DateFormatType: d,
                        makeGlobalBoundingBox: p,
                        sendMoveEvent: (e) => B(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: () => B(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            B(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, r = R.invalid('resId'), a) => {
                            const s = A.O.view.getViewGlobalPosition(),
                                i = t.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                E = i.width,
                                m = i.height,
                                d = {
                                    x: A.O.view.pxToRem(l) + s.x,
                                    y: A.O.view.pxToRem(c) + s.y,
                                    width: A.O.view.pxToRem(E),
                                    height: A.O.view.pxToRem(m),
                                };
                            B(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: p(d),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => C(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            C(e, h);
                        },
                        handleViewEvent: B,
                        onBindingsReady: D,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const n in u)
                                if (Object.prototype.hasOwnProperty.call(u, n)) {
                                    const r = Object.prototype.toString.call(u[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = u[n];
                                        t[n] = [];
                                        for (let u = 0; u < r.length; u++) t[n].push({ value: e(r[u].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = e(u[n]))
                                            : (t[n] = u[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: v,
                        SystemLocale: s,
                        UserLocale: i,
                    };
                window.ViewEnvHelper = b;
            },
            4502: (e, u, t) => {
                'use strict';
                var n = {};
                t.r(n),
                    t.d(n, {
                        Area: () => et,
                        Bar: () => Qu,
                        DefaultScroll: () => Ju,
                        Direction: () => Wu,
                        defaultSettings: () => Gu,
                        useHorizontalScrollApi: () => zu,
                    });
                var r = {};
                t.r(r), t.d(r, { Area: () => mt, Bar: () => lt, Default: () => Et, useVerticalScrollApi: () => ut });
                var a = t(6179),
                    s = t.n(a);
                const i = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
                var o = t(3138);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function E(e, u, t) {
                    const n = (function (e, u) {
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
                        r = (function (e, u) {
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
                const m = o.O.client.getSize('rem'),
                    d = m.width,
                    _ = m.height,
                    A = Object.assign({ width: d, height: _ }, E(d, _, l)),
                    F = (0, a.createContext)(A),
                    g = ['children'],
                    p = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, g);
                        const n = (0, a.useContext)(F),
                            r = n.extraLarge,
                            s = n.large,
                            o = n.medium,
                            l = n.small,
                            c = n.extraSmall,
                            E = n.extraLargeWidth,
                            m = n.largeWidth,
                            d = n.mediumWidth,
                            _ = n.smallWidth,
                            A = n.extraSmallWidth,
                            p = n.extraLargeHeight,
                            D = n.largeHeight,
                            B = n.mediumHeight,
                            h = n.smallHeight,
                            C = n.extraSmallHeight,
                            f = { extraLarge: p, large: D, medium: B, small: h, extraSmall: C };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && r) return u;
                            if (t.large && s) return u;
                            if (t.medium && o) return u;
                            if (t.small && l) return u;
                            if (t.extraSmall && c) return u;
                        } else {
                            if (t.extraLargeWidth && E) return i(u, t, f);
                            if (t.largeWidth && m) return i(u, t, f);
                            if (t.mediumWidth && d) return i(u, t, f);
                            if (t.smallWidth && _) return i(u, t, f);
                            if (t.extraSmallWidth && A) return i(u, t, f);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && p) return u;
                                if (t.largeHeight && D) return u;
                                if (t.mediumHeight && B) return u;
                                if (t.smallHeight && h) return u;
                                if (t.extraSmallHeight && C) return u;
                            }
                        }
                        return null;
                    };
                (p.defaultProps = {
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
                    (0, a.memo)(p);
                const D = (0, a.memo)(({ children: e }) => {
                    const u = (0, a.useContext)(F),
                        t = (0, a.useState)(u),
                        n = t[0],
                        r = t[1],
                        i = (0, a.useCallback)((e, u) => {
                            const t = o.O.view.pxToRem(e),
                                n = o.O.view.pxToRem(u);
                            r(Object.assign({ width: t, height: n }, E(t, n, l)));
                        }, []);
                    ((e) => {
                        const u = (0, a.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    })(() => {
                        engine.on('clientResized', i);
                    }),
                        (0, a.useEffect)(() => () => engine.off('clientResized', i), [i]);
                    const c = (0, a.useMemo)(() => Object.assign({}, n), [n]);
                    return s().createElement(F.Provider, { value: c }, e);
                });
                var B = t(6483),
                    h = t.n(B),
                    C = t(926),
                    f = t.n(C);
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
                const y = ['children', 'className'];
                function S() {
                    return (
                        (S =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        S.apply(this, arguments)
                    );
                }
                const P = {
                        [b.ExtraSmall]: '',
                        [b.Small]: f().SMALL_WIDTH,
                        [b.Medium]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH}`,
                        [b.Large]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH} ${f().LARGE_WIDTH}`,
                        [b.ExtraLarge]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH} ${f().LARGE_WIDTH} ${f().EXTRA_LARGE_WIDTH}`,
                    },
                    k = {
                        [w.ExtraSmall]: '',
                        [w.Small]: f().SMALL_HEIGHT,
                        [w.Medium]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT}`,
                        [w.Large]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT} ${f().LARGE_HEIGHT}`,
                        [w.ExtraLarge]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT} ${f().LARGE_HEIGHT} ${f().EXTRA_LARGE_HEIGHT}`,
                    },
                    N = {
                        [v.ExtraSmall]: '',
                        [v.Small]: f().SMALL,
                        [v.Medium]: `${f().SMALL} ${f().MEDIUM}`,
                        [v.Large]: `${f().SMALL} ${f().MEDIUM} ${f().LARGE}`,
                        [v.ExtraLarge]: `${f().SMALL} ${f().MEDIUM} ${f().LARGE} ${f().EXTRA_LARGE}`,
                    },
                    L = (e) => {
                        let u = e.children,
                            t = e.className,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, y);
                        const r = (() => {
                                const e = (0, a.useContext)(F),
                                    u = e.width,
                                    t = e.height,
                                    n = ((e) => {
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
                                                return (
                                                    console.error('Unreachable media context resolution'), v.ExtraSmall
                                                );
                                        }
                                    })(e),
                                    r = ((e) => {
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
                                                return (
                                                    console.error('Unreachable media context resolution'), b.ExtraSmall
                                                );
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
                                                return (
                                                    console.error('Unreachable media context resolution'), w.ExtraSmall
                                                );
                                        }
                                    })(e);
                                return {
                                    mediaSize: n,
                                    mediaWidth: r,
                                    mediaHeight: s,
                                    remScreenWidth: u,
                                    remScreenHeight: t,
                                };
                            })(),
                            i = r.mediaWidth,
                            o = r.mediaHeight,
                            l = r.mediaSize;
                        return s().createElement('div', S({ className: h()(t, P[i], k[o], N[l]) }, n), u);
                    },
                    x = ['children'],
                    T = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, x);
                        return s().createElement(D, null, s().createElement(L, t, u));
                    };
                var M = t(493),
                    O = t.n(M);
                function I(e) {
                    engine.call('PlaySound', e);
                }
                const H = {
                        playHighlight() {
                            I('highlight');
                        },
                        playClick() {
                            I('play');
                        },
                        playYes() {
                            I('yes1');
                        },
                    },
                    U = {
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
                    W = [
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
                function G() {
                    return (
                        (G =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        G.apply(this, arguments)
                    );
                }
                class $ extends s().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && I(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && I(this.props.soundClick);
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
                            n = e.goto,
                            r = e.side,
                            a = e.type,
                            i = e.classNames,
                            o = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            E = e.onMouseUp,
                            m =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(e, W)),
                            d = h()(U.base, U[`base__${a}`], U[`base__${r}`], null == i ? void 0 : i.base),
                            _ = h()(U.icon, U[`icon__${a}`], U[`icon__${r}`], null == i ? void 0 : i.icon),
                            A = h()(U.glow, null == i ? void 0 : i.glow),
                            F = h()(U.caption, U[`caption__${a}`], null == i ? void 0 : i.caption),
                            g = h()(U.goto, null == i ? void 0 : i.goto);
                        return s().createElement(
                            'div',
                            G(
                                {
                                    className: d,
                                    onMouseEnter: this._onMouseEnter(o),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(E),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                m,
                            ),
                            'info' !== a && s().createElement('div', { className: U.shine }),
                            s().createElement('div', { className: _ }, s().createElement('div', { className: A })),
                            s().createElement('div', { className: F }, u),
                            n && s().createElement('div', { className: g }, n),
                        );
                    }
                }
                let z;
                ($.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' }),
                    (function (e) {
                        (e.Main = 'main'), (e.Artefact = 'artefact'), (e.Vehicle = 'vehicle'), (e.Pickups = 'pickups');
                    })(z || (z = {}));
                var V = t(5521),
                    j = t(4179);
                const q = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function Y(e = V.n.NONE, u = q, t = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== V.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (o.O.view.isEventHandled()) return;
                                o.O.view.setEventHandled(), u(n), t && n.stopPropagation();
                            }
                        }
                    }, [u, e, t]);
                }
                var X = t(3282),
                    K = t(5659);
                function Q(e) {
                    return e;
                }
                function Z() {
                    return !1;
                }
                console.log;
                var J = t(3915);
                function ee(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const ue = (e) => (0 === e ? window : window.subViews.get(e));
                function te(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, n) => u(null == e ? void 0 : e.value, t, n));
                }
                var ne = t(6517);
                const re = ((e, u) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: n, children: r, mocks: i }) {
                                const l = (0, a.useRef)([]),
                                    c = (e, t, n) => {
                                        var r;
                                        const a = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = ue,
                                                context: n = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function a(e, u = 0) {
                                                    viewEnv.removeDataChangedCallback(e, u)
                                                        ? r.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, u, t) => {
                                                        t.forEach((u) => {
                                                            const t = r.get(u);
                                                            void 0 !== t && t(e);
                                                        });
                                                    });
                                                });
                                                const s = (e) => {
                                                    const r = t(u),
                                                        a = n.split('.').reduce((e, u) => e[u], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? a
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, a);
                                                };
                                                return {
                                                    subscribe: (t, a) => {
                                                        const i = 'string' == typeof a ? `${n}.${a}` : n,
                                                            l = o.O.view.addModelObserver(i, u, !0);
                                                        return r.set(l, t), e && t(s(a)), l;
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
                                                                                    return ee(e, u);
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
                                                                                          ? ee(e, u)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (u && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        t && (e = t);
                                                                        var n = 0;
                                                                        return function () {
                                                                            return n >= e.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: e[n++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(r.keys());
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
                                                              null != (r = null == n ? void 0 : n.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            i = (u) =>
                                                'mocks' === e ? (null == n ? void 0 : n.getter(u)) : s.readByPath(u),
                                            c = (e) => l.current.push(e),
                                            E = (({ observableModel: e }) => {
                                                const u = {
                                                        root: e.object(),
                                                        lobbyRoute: e.primitives(['lobbyRoute']),
                                                        scoring: e.array('scoring', []),
                                                        progression: e.array('progression', []),
                                                        missions: e.array('missions', []),
                                                    },
                                                    t = (0, ne.computedFn)(() => te(u.scoring.get(), Q)),
                                                    n = (0, ne.computedFn)(() =>
                                                        te(u.progression.get(), (e) =>
                                                            Object.assign({}, e, { bonuses: te(e.bonuses, Q) }),
                                                        ),
                                                    ),
                                                    r = (0, ne.computedFn)(() =>
                                                        te(u.missions.get(), (e) => Object.assign({}, e)),
                                                    );
                                                return Object.assign({}, u, {
                                                    computes: { getScoring: t, getProgression: n, getMissions: r },
                                                });
                                            })({
                                                mode: e,
                                                readByPath: i,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (u, t) => {
                                                        const n = null != t ? t : i(u),
                                                            r = J.observable.box(n, { equals: Z });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, J.action)((e) => r.set(e)),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (u, t) => {
                                                        const n = null != t ? t : i(u),
                                                            r = J.observable.box(n, { equals: Z });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, J.action)((e) => r.set(e)),
                                                                    u,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (u, t) => {
                                                        const n = i(t);
                                                        if (Array.isArray(u)) {
                                                            const r = u.reduce(
                                                                (e, u) => ((e[u] = J.observable.box(n[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, J.action)((e) => {
                                                                            u.forEach((u) => {
                                                                                r[u].set(e[u]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = u,
                                                                a = Object.entries(r),
                                                                i = a.reduce(
                                                                    (e, [u, t]) => (
                                                                        (e[t] = J.observable.box(n[u], {})), e
                                                                    ),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, J.action)((e) => {
                                                                            a.forEach(([u, t]) => {
                                                                                i[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: c,
                                            }),
                                            m = { mode: e, model: E, externalModel: s, cleanup: c };
                                        return {
                                            model: E,
                                            controls: 'mocks' === e && n ? n.controls(m) : u(m),
                                            externalModel: s,
                                            mode: e,
                                        };
                                    },
                                    E = (0, a.useRef)(!1),
                                    m = (0, a.useState)(e),
                                    d = m[0],
                                    _ = m[1],
                                    A = (0, a.useState)(() => c(e, n, i)),
                                    F = A[0],
                                    g = A[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        E.current ? g(c(d, n, i)) : (E.current = !0);
                                    }, [i, d, n]),
                                    (0, a.useEffect)(() => {
                                        _(e);
                                    }, [e]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            F.externalModel.dispose(), l.current.forEach((e) => e());
                                        },
                                        [F],
                                    ),
                                    s().createElement(t.Provider, { value: F }, r)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(0, ({ externalModel: e }) => ({
                        onLobbyRouteChange: e.createCallback((e) => ({ newRoute: e }), 'onLobbyRouteChange'),
                        onClose: e.createCallbackNoArgs('onClose'),
                        onAboutEvent: e.createCallbackNoArgs('onAboutEvent'),
                        onShopClicked: e.createCallbackNoArgs('onShopClicked'),
                    })),
                    ae = re[0],
                    se = re[1],
                    ie = 'CosmicLobbyViewApp_route__enterActive_72',
                    oe = 'CosmicLobbyViewApp_stage_90',
                    le = 'CosmicLobbyViewApp_route__enter_0c',
                    ce = 'CosmicLobbyViewApp_route__enterDone_69',
                    Ee = 'CosmicLobbyViewApp_fromLeft_c6',
                    me = 'CosmicLobbyViewApp_fromLeft_2_da',
                    de = 'CosmicLobbyViewApp_fromLeft_3_98',
                    _e = 'CosmicLobbyViewApp_fromLeft_4_58',
                    Ae = 'CosmicLobbyViewApp_fromLeft_5_91',
                    Fe = ['onClick', 'className'];
                function ge() {
                    return (
                        (ge =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ge.apply(this, arguments)
                    );
                }
                const pe = (e) => {
                        let u = e.onClick,
                            t = e.className,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, Fe);
                        return s().createElement(
                            'div',
                            { className: h()('ExitMode_base_e4', t) },
                            s().createElement(
                                $,
                                ge(
                                    {
                                        caption: R.strings.cosmicEvent.exitMode(),
                                        onClick: u,
                                        side: 'right',
                                        type: 'close',
                                    },
                                    n,
                                ),
                            ),
                        );
                    },
                    De = {
                        base: 'Navigation_base_32',
                        link: 'Navigation_link_82',
                        link_icon: 'Navigation_link_icon_83',
                        link_light: 'Navigation_link_light_47',
                        link__active: 'Navigation_link__active_db',
                    },
                    Be = ({ lobbyRoute: e, onLobbyRouteChange: u }) =>
                        s().createElement(
                            'div',
                            { className: De.base },
                            Object.values(z).map((t) =>
                                s().createElement(
                                    'div',
                                    {
                                        key: t,
                                        onClick: () => {
                                            e !== t && (u(t), I(R.sounds.ev_cosmic_lobby_tab_click()));
                                        },
                                        className: h()(De.link, e === t && De.link__active),
                                    },
                                    s().createElement('img', {
                                        src: R.images.cosmic_event.gui.maps.icons.cosmicLobbyView.navigation[t](),
                                        alt: '',
                                        className: De.link_icon,
                                    }),
                                    s().createElement(
                                        'div',
                                        { className: De.link_text },
                                        R.strings.cosmicEvent.navigation[t](),
                                    ),
                                    s().createElement('div', { className: De.link_light }),
                                ),
                            ),
                        ),
                    he = [
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
                const fe = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: j.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    ve = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            n = e.args,
                            r = e.onMouseEnter,
                            s = e.onMouseLeave,
                            i = e.onMouseDown,
                            o = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            E = e.ignoreMouseClick,
                            m = void 0 !== E && E,
                            d = e.decoratorId,
                            _ = void 0 === d ? 0 : d,
                            A = e.isEnabled,
                            F = void 0 === A || A,
                            g = e.targetId,
                            p = void 0 === g ? 0 : g,
                            D = e.onShow,
                            B = e.onHide,
                            h = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, he);
                        const C = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            f = (0, a.useMemo)(
                                () =>
                                    p ||
                                    ((e = 1) => {
                                        const u = new Error().stack;
                                        let t,
                                            n = R.invalid('resId');
                                        return (
                                            u &&
                                                ((t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== t &&
                                                    window.subViews[t] &&
                                                    (n = window.subViews[t].id)),
                                            { caller: t, stack: u, resId: n }
                                        );
                                    })().resId,
                                [p],
                            ),
                            v = (0, a.useCallback)(() => {
                                (C.current.isVisible && C.current.timeoutId) ||
                                    (fe(t, _, { isMouseEvent: !0, on: !0, arguments: Ce(n) }, f),
                                    D && D(),
                                    (C.current.isVisible = !0));
                            }, [t, _, n, f, D]),
                            b = (0, a.useCallback)(() => {
                                if (C.current.isVisible || C.current.timeoutId) {
                                    const e = C.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (C.current.timeoutId = 0)),
                                        fe(t, _, { on: !1 }, f),
                                        C.current.isVisible && B && B(),
                                        (C.current.isVisible = !1);
                                }
                            }, [t, _, f, B]),
                            w = (0, a.useCallback)((e) => {
                                C.current.isVisible &&
                                    ((C.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (C.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(C.current.prevTarget) && b();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const e = C.current.hideTimerId;
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
                                                  ((y = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((C.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                          r && r(e),
                                                          y && y(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  b(), null == s || s(u), null == e || e(u);
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  !1 === m && b(), null == o || o(u), null == e || e(u);
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  !1 === m && b(), null == i || i(u), null == e || e(u);
                                              })(u.props.onMouseDown),
                                          },
                                          h,
                                      ),
                                  )
                                : u
                        );
                        var y;
                    },
                    be = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function we() {
                    return (
                        (we =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        we.apply(this, arguments)
                    );
                }
                const ye = R.views.common.tooltip_window.simple_tooltip_content,
                    Re = (e) => {
                        let u = e.children,
                            t = e.body,
                            n = e.header,
                            r = e.note,
                            i = e.alert,
                            o = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, be);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, o, { body: t, header: n, note: r, alert: i });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [i, t, n, r, o]);
                        return s().createElement(
                            ve,
                            we(
                                {
                                    contentId:
                                        ((E = null == o ? void 0 : o.hasHtmlContent),
                                        E ? ye.SimpleTooltipHtmlContent('resId') : ye.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var E;
                    },
                    Se = ({ icon: e, title: u, points: t }) =>
                        s().createElement(
                            'div',
                            { className: 'ActionItem_base_86' },
                            s().createElement(
                                'div',
                                { className: 'ActionItem_icon_bg_90' },
                                s().createElement('img', { className: 'ActionItem_icon_e8', src: e }),
                            ),
                            s().createElement('div', { className: 'ActionItem_title_8b' }, u),
                            s().createElement(
                                Re,
                                {
                                    header: R.strings.cosmicEvent.tooltip.marsPoints.header(),
                                    body: R.strings.cosmicEvent.tooltip.marsPoints.description(),
                                    isEnabled: !0,
                                },
                                s().createElement(
                                    'div',
                                    { className: 'ActionItem_points_b7' },
                                    t,
                                    s().createElement('div', { className: 'ActionItem_points_bg_61' }),
                                ),
                            ),
                        ),
                    Pe = ['children', 'className'];
                function ke() {
                    return (
                        (ke =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ke.apply(this, arguments)
                    );
                }
                const Ne = (e) => {
                        let u = e.children,
                            t = e.className,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, Pe);
                        return s().createElement(
                            'div',
                            ke({ className: t }, n),
                            s().createElement('img', {
                                className: 'Artefact_image_be',
                                src: R.images.cosmic_event.gui.maps.icons.artefact.artefact(),
                                alt: '',
                            }),
                            u,
                        );
                    },
                    Le = {
                        base: 'ProgressBar_base_45',
                        base__medium: 'ProgressBar_base__medium_62',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__medium: 'ProgressBar_background__medium_6e',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let xe, Te;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big');
                })(xe || (xe = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(Te || (Te = {}));
                const Me = ({ size: e = xe.Default }) =>
                        s().createElement('div', { className: h()(Le.background, Le[`background__${e}`]) }),
                    Oe = {
                        base: 'ProgressBarBlink_base_24',
                        base__medium: 'ProgressBarBlink_base__medium_ec',
                        base__small: 'ProgressBarBlink_base__small_0f',
                    },
                    Ie = ({ size: e }) => {
                        const u = h()(Oe.base, Oe[`base__${e}`]);
                        return s().createElement('div', { className: u });
                    },
                    He = {
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
                    Ue = (0, a.memo)(
                        ({ size: e, lineRef: u, disabled: t, baseStyles: n, isComplete: r, withoutBounce: a }) => {
                            const i = h()(
                                    He.base,
                                    He[`base__${e}`],
                                    t && He.base__disabled,
                                    r && He.base__finished,
                                    a && He.base__withoutBounce,
                                ),
                                o = !t && !r;
                            return s().createElement(
                                'div',
                                { className: i, style: n, ref: u },
                                s().createElement('div', { className: He.pattern }),
                                s().createElement('div', { className: He.gradient }),
                                o && s().createElement(Ie, { size: e }),
                            );
                        },
                    ),
                    We = ({ size: e, value: u, lineRef: t, disabled: n, onComplete: r }) => {
                        const i = (0, a.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            o = 100 === u;
                        return (
                            (0, a.useEffect)(() => {
                                o && r && r();
                            }, [o, r]),
                            s().createElement(Ue, { size: e, disabled: n, baseStyles: i, isComplete: o, lineRef: t })
                        );
                    },
                    Ge = (e, u) => {
                        let t;
                        const n = setTimeout(() => {
                            t = e();
                        }, u);
                        return () => {
                            'function' == typeof t && t(), clearTimeout(n);
                        };
                    };
                let $e, ze;
                !(function (e) {
                    (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                })($e || ($e = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(ze || (ze = {}));
                const Ve = (0, a.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: n,
                            size: r,
                            to: i,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                        }) => {
                            const c = i < n,
                                E = (0, a.useState)(ze.Idle),
                                m = E[0],
                                d = E[1],
                                _ = m === ze.In,
                                A = m === ze.End,
                                F = m === ze.Idle,
                                g = (0, a.useCallback)(
                                    (e) => {
                                        d(e), l && l(e);
                                    },
                                    [l],
                                );
                            (0, a.useEffect)(() => {
                                if (F && !t)
                                    return Ge(() => {
                                        g(ze.In);
                                    }, u);
                            }, [g, t, F, u]),
                                (0, a.useEffect)(() => {
                                    if (_)
                                        return Ge(() => {
                                            o && o(), g(ze.End);
                                        }, e + u);
                                }, [g, _, o, u, e]);
                            const p = (0, a.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                D = (0, a.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                B = (0, a.useMemo)(
                                    () => ({ width: `${Math.abs(n - i)}%`, left: `${c ? i : n}%` }),
                                    [n, c, i],
                                );
                            return A
                                ? null
                                : s().createElement(
                                      'div',
                                      { className: 'ProgressBarDeltaSimple_base_6c', style: B },
                                      s().createElement(
                                          'div',
                                          { style: F ? p : D, className: 'ProgressBarDeltaSimple_delta_99' },
                                          s().createElement(Ie, { size: r }),
                                      ),
                                  );
                        },
                    ),
                    je = (0, a.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: n,
                            disabled: r,
                            isComplete: i,
                            animationSettings: o,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const E = (0, a.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${o.line.duration}ms`,
                                    transitionDelay: `${o.line.delay}ms`,
                                }),
                                [o.line.delay, o.line.duration, e],
                            );
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(Ue, {
                                    size: u,
                                    lineRef: n,
                                    disabled: r,
                                    isComplete: i,
                                    baseStyles: E,
                                }),
                                t >= 0 &&
                                    s().createElement(Ve, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        freezed: o.freezed,
                                        from: t,
                                        size: u,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    qe = (e) => (e ? { left: 0 } : { right: 0 }),
                    Ye = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    Xe = (e) => ({ transitionDuration: `${e}ms` }),
                    Ke = (0, a.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: n,
                            size: r,
                            to: i,
                            onEndAnimation: o,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const E = i < n,
                                m = (0, a.useState)($e.Idle),
                                d = m[0],
                                _ = m[1],
                                A = d === $e.End,
                                F = d === $e.Idle,
                                g = d === $e.Grow,
                                p = d === $e.Shrink,
                                D = (0, a.useCallback)(
                                    (e) => {
                                        _(e), l && l(e);
                                    },
                                    [l],
                                ),
                                B = (0, a.useCallback)(
                                    (e, u) =>
                                        Ge(() => {
                                            D(e);
                                        }, u),
                                    [D],
                                );
                            (0, a.useEffect)(() => {
                                if (!t)
                                    return F
                                        ? B($e.Grow, u)
                                        : g
                                          ? B($e.Shrink, e)
                                          : p
                                            ? B($e.End, e)
                                            : void (A && o && o());
                            }, [B, t, A, g, F, p, o, u, e]);
                            const C = (0, a.useMemo)(() => Object.assign({ width: '100%' }, Xe(e), qe(E)), [E, e]),
                                f = (0, a.useMemo)(() => Object.assign({ width: '0%' }, Xe(e), qe(E)), [E, e]),
                                v = (0, a.useMemo)(() => Object.assign({ width: '0%' }, Ye(E, n), Xe(e)), [n, E, e]),
                                b = (0, a.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(i - n)}%` }, Ye(E, n), Xe(e)),
                                    [n, E, i, e],
                                );
                            if (A) return null;
                            const w = h()(
                                'ProgressBarDeltaGrow_base_7e',
                                c,
                                E && 0 === i && 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                            );
                            return s().createElement(
                                'div',
                                { style: F ? v : b, className: w },
                                s().createElement(
                                    'div',
                                    { style: p ? f : C, className: 'ProgressBarDeltaGrow_glow_68' },
                                    s().createElement(Ie, { size: r }),
                                ),
                            );
                        },
                    ),
                    Qe = (0, a.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: n,
                            disabled: r,
                            isComplete: i,
                            animationSettings: o,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const E = e < t,
                                m = (0, a.useState)(!1),
                                d = m[0],
                                _ = m[1],
                                A = (0, a.useCallback)(
                                    (e) => {
                                        e === $e.Shrink && _(!0), c && c(e);
                                    },
                                    [c],
                                ),
                                F = (0, a.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                g = (0, a.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${o.line.duration}ms` }),
                                    [o.line.duration, e],
                                );
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(Ue, {
                                    size: u,
                                    lineRef: n,
                                    disabled: r,
                                    isComplete: i,
                                    withoutBounce: E && 0 === e,
                                    baseStyles: d ? g : F,
                                }),
                                t >= 0 &&
                                    s().createElement(Ke, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        onChangeAnimationState: A,
                                        freezed: o.freezed,
                                        onEndAnimation: l,
                                        from: t,
                                        size: u,
                                        to: e,
                                        className: o.delta.className,
                                    }),
                            );
                        },
                    ),
                    Ze = ['onComplete', 'onEndAnimation'];
                function Je() {
                    return (
                        (Je =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Je.apply(this, arguments)
                    );
                }
                const eu = (0, a.memo)((e) => {
                        let u = e.onComplete,
                            t = e.onEndAnimation,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, Ze);
                        const r = (0, a.useState)(!1),
                            i = r[0],
                            o = r[1],
                            l = (0, a.useCallback)(() => {
                                const e = 100 === n.to;
                                e !== i && o(e), e && u && u(), t && t();
                            }, [i, u, t, n.to]);
                        switch (n.animationSettings.type) {
                            case Te.Simple:
                                return s().createElement(je, Je({}, n, { onEndAnimation: l, isComplete: i }));
                            case Te.Growing:
                                return s().createElement(Qe, Je({}, n, { onEndAnimation: l, isComplete: i }));
                            default:
                                return null;
                        }
                    }),
                    uu = ['onEndAnimation'];
                function tu() {
                    return (
                        (tu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        tu.apply(this, arguments)
                    );
                }
                const nu = (0, a.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, uu);
                    const n = (0, a.useRef)({}),
                        r = (0, a.useCallback)(() => {
                            (n.current.from = void 0), u && u();
                        }, [u]),
                        i = 'number' == typeof n.current.from ? n.current.from : t.from;
                    return (
                        (n.current.from = i),
                        s().createElement(eu, tu({}, t, { onEndAnimation: r, key: `${i}-${t.to}`, from: i }))
                    );
                });
                function ru() {
                    return (
                        (ru =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ru.apply(this, arguments)
                    );
                }
                const au = (0, a.memo)(
                        ({
                            size: e,
                            value: u,
                            lineRef: t,
                            disabled: n,
                            deltaFrom: r,
                            animationSettings: a,
                            onEndAnimation: i,
                            onChangeAnimationState: o,
                            onComplete: l,
                        }) => {
                            if (r === u)
                                return s().createElement(We, {
                                    key: `${r}-${u}`,
                                    size: e,
                                    value: u,
                                    lineRef: t,
                                    disabled: n,
                                    onComplete: l,
                                });
                            const c = {
                                from: r,
                                to: u,
                                size: e,
                                lineRef: t,
                                disabled: n,
                                animationSettings: a,
                                onComplete: l,
                                onEndAnimation: i,
                                onChangeAnimationState: o,
                            };
                            return a.withStack
                                ? s().createElement(nu, c)
                                : s().createElement(eu, ru({ key: `${r}-${u}` }, c));
                        },
                    ),
                    su = (e) => ({
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
                    iu = (e, u, t) => (t < e ? e : t > u ? u : t),
                    ou = (e, u, t) => ('number' == typeof t ? (iu(0, u, t) / u) * 100 : e),
                    lu = {
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
                    cu = {
                        freezed: !1,
                        withStack: !1,
                        type: Te.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    Eu = (0, a.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = lu,
                            size: t = xe.Default,
                            animationSettings: n = cu,
                            disabled: r = !1,
                            withoutBackground: i = !1,
                            value: o,
                            deltaFrom: l,
                            lineRef: c,
                            onChangeAnimationState: E,
                            onEndAnimation: m,
                            onComplete: d,
                        }) => {
                            const _ = ((e, u, t) =>
                                (0, a.useMemo)(() => {
                                    const n = (iu(0, u, e) / u) * 100;
                                    return { value: n, deltaFrom: ou(n, u, t) };
                                }, [t, u, e]))(o, e, l);
                            return s().createElement(
                                'div',
                                { className: h()(Le.base, Le[`base__${t}`]), style: su(u) },
                                !i && s().createElement(Me, { size: t }),
                                s().createElement(au, {
                                    size: t,
                                    lineRef: c,
                                    disabled: r,
                                    value: _.value,
                                    deltaFrom: _.deltaFrom,
                                    animationSettings: n,
                                    onEndAnimation: m,
                                    onChangeAnimationState: E,
                                    onComplete: d,
                                }),
                            );
                        },
                    );
                let mu, du, _u, Au, Fu, gu, pu;
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
                })(mu || (mu = {})),
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
                    })(du || (du = {})),
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
                    })(_u || (_u = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(Au || (Au = {})),
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
                    })(Fu || (Fu = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(gu || (gu = {})),
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
                    })(pu || (pu = {}));
                class Du extends s().PureComponent {
                    render() {
                        let e;
                        e = 'gold' === this.props.format ? j.B3.GOLD : j.B3.INTEGRAL;
                        const u = j.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                Du.defaultProps = { format: 'integral' };
                const Bu = [
                        mu.Items,
                        mu.Equipment,
                        mu.Xp,
                        mu.XpFactor,
                        mu.Blueprints,
                        mu.BlueprintsAny,
                        mu.Goodies,
                        mu.Berths,
                        mu.Slots,
                        mu.Tokens,
                        mu.CrewSkins,
                        mu.CrewBooks,
                        mu.Customizations,
                        mu.CreditsFactor,
                        mu.TankmenXp,
                        mu.TankmenXpFactor,
                        mu.FreeXpFactor,
                        mu.BattleToken,
                        mu.PremiumUniversal,
                        mu.NaturalCover,
                        mu.BpCoin,
                        mu.BattlePassSelectToken,
                        mu.BattlaPassFinalAchievement,
                        mu.BattleBadge,
                        mu.BonusX5,
                        mu.CrewBonusX3,
                        mu.NewYearFillers,
                        mu.NewYearInvoice,
                        mu.EpicSelectToken,
                        mu.Comp7TokenWeeklyReward,
                        mu.Comp7TokenCouponReward,
                        mu.BattleBoosterGift,
                        mu.CosmicLootboxCommon,
                        mu.CosmicLootboxSilver,
                    ],
                    hu = [mu.Gold, mu.Credits, mu.Crystal, mu.FreeXp],
                    Cu = [mu.BattlePassPoints, mu.RacesPoint],
                    fu = [mu.PremiumPlus, mu.Premium],
                    vu = ['engravings', 'backgrounds'],
                    bu = ['engraving', 'background'],
                    wu = (e, u = _u.Small) => {
                        const t = e.name,
                            n = e.type,
                            r = e.value,
                            a = e.icon,
                            s = e.item,
                            i = e.dogTagType,
                            o = ((e) => {
                                switch (e) {
                                    case _u.S600x450:
                                        return 'c_600x450';
                                    case _u.S400x300:
                                        return 'c_400x300';
                                    case _u.S296x222:
                                        return 'c_296x222';
                                    case _u.S232x174:
                                        return 'c_232x174';
                                    case _u.Big:
                                        return 'c_80x80';
                                    case _u.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(u);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${n}_${r}`;
                            case 'premium':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_plus_${r}`;
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_${r}`;
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
                                        case _u.Big:
                                            return e.iconBig.replace('..', 'img://gui');
                                        case _u.Small:
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
                                    const n = vu[e];
                                    if (n) {
                                        const r = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(n),
                                            a = r.$dyn(t);
                                        return a ? `${a}` : `${r.$dyn(bu[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(i, u, a);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${o}.${a}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${o}.${a}`;
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
                                return `R.images.gui.maps.icons.collectionItems.${o}.${a}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                        }
                    },
                    yu = (e, u, t) => {
                        const n = u && { contentId: u };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || u),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !u,
                            },
                            n,
                            t,
                        );
                    },
                    Ru = ['children'];
                function Su() {
                    return (
                        (Su =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Su.apply(this, arguments)
                    );
                }
                const Pu = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, Ru);
                    return s().createElement(
                        ve,
                        Su(
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
                };
                function ku() {
                    return (
                        (ku =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ku.apply(this, arguments)
                    );
                }
                const Nu = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const n = s().createElement('div', { className: t }, e);
                        if (u.header || u.body) return s().createElement(Re, u, n);
                        const r = u.contentId,
                            a = u.args,
                            i = null == a ? void 0 : a.contentId;
                        return r || i
                            ? s().createElement(ve, ku({}, u, { contentId: r || i }), n)
                            : s().createElement(Pu, u, n);
                    },
                    Lu = {
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
                    xu = ({
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: n = _u.Big,
                        special: r,
                        value: a,
                        valueType: i,
                        style: o,
                        className: l,
                        classNames: c,
                        tooltipArgs: E,
                        periodicIconTooltipArgs: m,
                    }) => {
                        const d = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case Fu.BATTLE_BOOSTER:
                                    case Fu.BATTLE_BOOSTER_REPLACE:
                                        return gu.BATTLE_BOOSTER;
                                }
                            })(r),
                            _ = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case Fu.BATTLE_BOOSTER:
                                        return pu.BATTLE_BOOSTER;
                                    case Fu.BATTLE_BOOSTER_REPLACE:
                                        return pu.BATTLE_BOOSTER_REPLACE;
                                    case Fu.BUILT_IN_EQUIPMENT:
                                        return pu.BUILT_IN_EQUIPMENT;
                                    case Fu.EQUIPMENT_PLUS:
                                        return pu.EQUIPMENT_PLUS;
                                    case Fu.EQUIPMENT_TROPHY_BASIC:
                                        return pu.EQUIPMENT_TROPHY_BASIC;
                                    case Fu.EQUIPMENT_TROPHY_UPGRADED:
                                        return pu.EQUIPMENT_TROPHY_UPGRADED;
                                    case Fu.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return pu.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case Fu.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return pu.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case Fu.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return pu.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case Fu.PROGRESSION_STYLE_UPGRADED_1:
                                        return pu.PROGRESSION_STYLE_UPGRADED_1;
                                    case Fu.PROGRESSION_STYLE_UPGRADED_2:
                                        return pu.PROGRESSION_STYLE_UPGRADED_2;
                                    case Fu.PROGRESSION_STYLE_UPGRADED_3:
                                        return pu.PROGRESSION_STYLE_UPGRADED_3;
                                    case Fu.PROGRESSION_STYLE_UPGRADED_4:
                                        return pu.PROGRESSION_STYLE_UPGRADED_4;
                                }
                            })(r),
                            A = ((e, u) => {
                                if (void 0 === e) return null;
                                switch (u) {
                                    case Au.MULTI: {
                                        const u = Number(e);
                                        return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                                    }
                                    case Au.CURRENCY:
                                    case Au.NUMBER:
                                        return s().createElement(Du, { format: 'integral', value: Number(e) });
                                    case Au.PREMIUM_PLUS: {
                                        const u = Number(e);
                                        return isNaN(u) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(a, i);
                        return s().createElement(
                            'div',
                            { className: h()(Lu.base, Lu[`base__${n}`], l), style: o },
                            s().createElement(
                                Nu,
                                { tooltipArgs: E, className: Lu.tooltipWrapper },
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement(
                                        'div',
                                        { className: h()(Lu.image, null == c ? void 0 : c.image) },
                                        d &&
                                            s().createElement('div', {
                                                className: h()(Lu.highlight, null == c ? void 0 : c.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${d}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            s().createElement('div', {
                                                className: h()(Lu.icon, null == c ? void 0 : c.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        _ &&
                                            s().createElement('div', {
                                                className: h()(Lu.overlay, null == c ? void 0 : c.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${_}_overlay)`,
                                                },
                                            }),
                                    ),
                                    A &&
                                        s().createElement(
                                            'div',
                                            {
                                                className: h()(
                                                    Lu.info,
                                                    Lu[`info__${e}`],
                                                    i === Au.MULTI && Lu.info__multi,
                                                    null == c ? void 0 : c.info,
                                                ),
                                            },
                                            A,
                                        ),
                                ),
                            ),
                            t &&
                                s().createElement(
                                    Nu,
                                    { tooltipArgs: m },
                                    s().createElement('div', {
                                        className: h()(Lu.timer, null == c ? void 0 : c.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    Tu = (e) => {
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
                    },
                    Mu = [];
                function Ou(e) {
                    const u = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, u.current)(...e), Mu)
                    );
                }
                function Iu(e, u, t = []) {
                    const n = (0, a.useRef)(0),
                        r = (0, a.useCallback)(() => window.clearInterval(n.current), t || []);
                    (0, a.useEffect)(() => r, [r]);
                    const s = (null != t ? t : []).concat([u]);
                    return [
                        (0, a.useCallback)((t) => {
                            (n.current = window.setInterval(() => e(t, !0), u)), e(t, !1);
                        }, s),
                        r,
                    ];
                }
                function Hu(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                var Uu = t(8552);
                let Wu;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(Wu || (Wu = {}));
                const Gu = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    $u = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: n,
                        getWrapperSize: r,
                        triggerMouseMoveOnUpdate: s = !1,
                    }) => {
                        const i = (e, t) => {
                            const n = u(e),
                                r = n[0],
                                a = n[1];
                            return iu(r, a, t);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                E = void 0 === c ? Gu : c,
                                m = (0, a.useRef)(null),
                                d = (0, a.useRef)(null),
                                _ = (() => {
                                    const e = (0, a.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        n = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        r = (e, ...t) => {
                                            for (
                                                var n,
                                                    r = (function (e, u) {
                                                        var t =
                                                            ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                                                            e['@@iterator'];
                                                        if (t) return (t = t.call(e)).next.bind(t);
                                                        if (
                                                            Array.isArray(e) ||
                                                            (t = (function (e, u) {
                                                                if (e) {
                                                                    if ('string' == typeof e) return Hu(e, u);
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
                                                                              ? Hu(e, u)
                                                                              : void 0
                                                                    );
                                                                }
                                                            })(e)) ||
                                                            (u && e && 'number' == typeof e.length)
                                                        ) {
                                                            t && (e = t);
                                                            var n = 0;
                                                            return function () {
                                                                return n >= e.length
                                                                    ? { done: !0 }
                                                                    : { done: !1, value: e[n++] };
                                                            };
                                                        }
                                                        throw new TypeError(
                                                            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                        );
                                                    })(u(e).values());
                                                !(n = r()).done;

                                            )
                                                (0, n.value)(...t);
                                        };
                                    return (0, a.useMemo)(() => ({ on: t, off: n, trigger: r }), []);
                                })(),
                                A = (function (e, u, t) {
                                    const n = (0, a.useMemo)(
                                        () =>
                                            (function (e, u, t, n) {
                                                let r,
                                                    a = !1,
                                                    s = 0;
                                                function i() {
                                                    r && clearTimeout(r);
                                                }
                                                function o(...o) {
                                                    const l = this,
                                                        c = Date.now() - s;
                                                    function E() {
                                                        (s = Date.now()), t.apply(l, o);
                                                    }
                                                    a ||
                                                        (n && !r && E(),
                                                        i(),
                                                        void 0 === n && c > e
                                                            ? E()
                                                            : !0 !== u &&
                                                              (r = setTimeout(
                                                                  n
                                                                      ? function () {
                                                                            r = void 0;
                                                                        }
                                                                      : E,
                                                                  void 0 === n ? e - c : e,
                                                              )));
                                                }
                                                return (
                                                    'boolean' != typeof u && ((n = t), (t = u), (u = void 0)),
                                                    (o.cancel = function () {
                                                        i(), (a = !0);
                                                    }),
                                                    o
                                                );
                                            })(t, e),
                                        u,
                                    );
                                    return (0, a.useEffect)(() => n.cancel, [n]), n;
                                })(
                                    () => {
                                        o.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                F = (0, Uu.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = m.current;
                                        u && (t(u, e), _.trigger('change', e), s && A());
                                    },
                                    onRest: (e) => _.trigger('rest', e),
                                    onStart: (e) => _.trigger('start', e),
                                    onPause: (e) => _.trigger('pause', e),
                                })),
                                g = F[0],
                                p = F[1],
                                D = (0, a.useCallback)(
                                    (e, u, t) => {
                                        var n;
                                        const r = g.scrollPosition.get(),
                                            a = (null != (n = g.scrollPosition.goal) ? n : 0) - r;
                                        return i(e, u * t + a + r);
                                    },
                                    [g.scrollPosition],
                                ),
                                B = (0, a.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const n = m.current;
                                        n &&
                                            p.start({
                                                scrollPosition: i(n, e),
                                                immediate: u,
                                                reset: t,
                                                config: E.animationConfig,
                                                from: { scrollPosition: i(n, g.scrollPosition.get()) },
                                            });
                                    },
                                    [p, E.animationConfig, g.scrollPosition],
                                ),
                                h = (0, a.useCallback)(
                                    (e) => {
                                        const u = m.current,
                                            t = d.current;
                                        if (!u || !t) return;
                                        const n = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return r(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, E.step),
                                            a = D(u, e, n);
                                        B(a);
                                    },
                                    [B, D, E.step],
                                ),
                                C = (0, a.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && h(n(e)),
                                            m.current && _.trigger('mouseWheel', e, g.scrollPosition, u(m.current));
                                    },
                                    [g.scrollPosition, h, _],
                                ),
                                f = ((e, u = []) => {
                                    const t = (0, a.useRef)(),
                                        n = (0, a.useCallback)((...u) => {
                                            t.current && t.current(), (t.current = e(...u));
                                        }, u);
                                    return (
                                        (0, a.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [n],
                                        ),
                                        n
                                    );
                                })(
                                    () =>
                                        Tu(() => {
                                            const e = m.current;
                                            e &&
                                                (B(i(e, g.scrollPosition.goal), { immediate: !0 }),
                                                _.trigger('resizeHandled'));
                                        }),
                                    [B, g.scrollPosition.goal],
                                ),
                                v = Ou(() => {
                                    const e = m.current;
                                    if (!e) return;
                                    const u = i(e, g.scrollPosition.goal);
                                    u !== g.scrollPosition.goal && B(u, { immediate: !0 }),
                                        _.trigger('recalculateContent');
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
                                        getWrapperSize: () => (d.current ? r(d.current) : void 0),
                                        getContainerSize: () => (m.current ? e(m.current) : void 0),
                                        getBounds: () =>
                                            m.current
                                                ? u(m.current)
                                                : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                        stepTimeout: E.step.clampedArrowStepTimeout,
                                        clampPosition: i,
                                        handleMouseWheel: C,
                                        applyScroll: B,
                                        applyStepTo: h,
                                        contentRef: m,
                                        wrapperRef: d,
                                        scrollPosition: p,
                                        animationScroll: g,
                                        recalculateContent: v,
                                        events: { on: _.on, off: _.off },
                                    }),
                                    [g.scrollPosition, B, h, _.off, _.on, v, C, p, E.step.clampedArrowStepTimeout],
                                )
                            );
                        };
                    },
                    zu = $u({
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
                        getDirection: (e) => (e.deltaY > 1 ? Wu.Next : Wu.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    Vu = 'HorizontalBar_base__nonActive_82',
                    ju = 'disable',
                    qu = { pending: !1, offset: 0 },
                    Yu = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Xu = () => {},
                    Ku = (e, u) => Math.max(20, e.offsetWidth * u),
                    Qu = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = Yu, onDrag: n = Xu }) => {
                        const r = (0, a.useRef)(null),
                            i = (0, a.useRef)(null),
                            o = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            E = e.stepTimeout || 100,
                            m = (0, a.useState)(qu),
                            d = m[0],
                            _ = m[1],
                            A = (0, a.useCallback)(
                                (e) => {
                                    _(e),
                                        c.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [n],
                            ),
                            F = () => {
                                const u = l.current,
                                    t = c.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / r),
                                    E = iu(0, 1, a / (r - n)),
                                    m = (u.offsetWidth - Ku(u, s)) * E;
                                (t.style.transform = `translateX(${0 | m}px)`),
                                    ((e) => {
                                        if (i.current && o.current && l.current && c.current) {
                                            if (0 === e)
                                                return i.current.classList.add(ju), void o.current.classList.remove(ju);
                                            if (
                                                ((u = l.current),
                                                (t = c.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return i.current.classList.remove(ju), void o.current.classList.add(ju);
                                            var u, t;
                                            i.current.classList.remove(ju), o.current.classList.remove(ju);
                                        }
                                    })(m);
                            },
                            g = Ou(() => {
                                (() => {
                                    const u = c.current,
                                        t = l.current,
                                        n = e.getWrapperSize(),
                                        a = e.getContainerSize();
                                    if (!(a && u && n && t)) return;
                                    const s = Math.min(1, n / a);
                                    (u.style.width = `${Ku(t, s)}px`),
                                        (u.style.display = 'flex'),
                                        r.current &&
                                            (1 === s ? r.current.classList.add(Vu) : r.current.classList.remove(Vu));
                                })(),
                                    F();
                            });
                        (0, a.useEffect)(() => Tu(g)),
                            (0, a.useEffect)(
                                () =>
                                    Tu(() => {
                                        const u = () => {
                                            F();
                                        };
                                        let t = Xu;
                                        const n = () => {
                                            t(), (t = Tu(g));
                                        };
                                        return (
                                            e.events.on('recalculateContent', g),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                t(),
                                                    e.events.off('recalculateContent', g),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', n);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, a.useEffect)(() => {
                                if (!d.pending) return;
                                const u = (u) => {
                                        var t;
                                        const r = e.contentRef.current;
                                        if (!r) return;
                                        const a = l.current,
                                            s = c.current;
                                        if (!r || !a || !s) return;
                                        const i = u.screenX - d.offset - a.getBoundingClientRect().x,
                                            o = (i / a.offsetWidth) * (null != (t = e.getContainerSize()) ? t : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, o),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: s, thumbOffset: i, contentOffset: o });
                                    },
                                    t = () => {
                                        window.removeEventListener('mousemove', u), A(qu);
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t);
                                    }
                                );
                            }, [e, d.offset, d.pending, n, A]);
                        const p = Iu((u) => e.applyStepTo(u), E, [e]),
                            D = p[0],
                            B = p[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', B, !0),
                                () => document.removeEventListener('mouseup', B, !0)
                            ),
                            [B],
                        );
                        const C = (e) => {
                            e.target.classList.contains(ju) || I('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: h()('HorizontalBar_base_49', u.base), ref: r, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: h()('HorizontalBar_leftButton_5f', u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ju) || 0 !== e.button || (I('play'), D(Wu.Next));
                                },
                                onMouseUp: B,
                                ref: i,
                                onMouseEnter: C,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: h()('HorizontalBar_track_0d', u.track),
                                    onMouseDown: (u) => {
                                        const n = c.current;
                                        n &&
                                            0 === u.button &&
                                            (I('play'),
                                            u.target === n
                                                ? A({ pending: !0, offset: u.screenX - n.getBoundingClientRect().x })
                                                : ((u) => {
                                                      const n = c.current,
                                                          r = e.contentRef.current;
                                                      if (!n || !r) return;
                                                      const a = t(e);
                                                      e.applyScroll(e.animationScroll.scrollPosition.get() + a * u);
                                                  })(u.screenX > n.getBoundingClientRect().x ? Wu.Prev : Wu.Next));
                                    },
                                    ref: l,
                                    onMouseEnter: C,
                                },
                                s().createElement('div', { ref: c, className: h()('HorizontalBar_thumb_fd', u.thumb) }),
                                s().createElement('div', { className: h()('HorizontalBar_rail_32', u.rail) }),
                            ),
                            s().createElement('div', {
                                className: h()('HorizontalBar_rightButton_03', u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ju) || 0 !== e.button || (I('play'), D(Wu.Prev));
                                },
                                onMouseUp: B,
                                ref: o,
                                onMouseEnter: C,
                            }),
                        );
                    }),
                    Zu = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Ju = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        classNames: i,
                        scrollClassName: o,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const E = (0, a.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: h()(Zu.base, e.base) });
                            }, [n]),
                            m = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: h()(Zu.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: h()(Zu.defaultScrollArea, r) },
                                s().createElement(et, { className: o, api: m, classNames: i }, e),
                            ),
                            s().createElement(Qu, { getStepByRailClick: l, api: u, onDrag: c, classNames: E }),
                        );
                    },
                    et = ({ api: e, className: u, classNames: t, children: n }) => (
                        (0, a.useEffect)(() => Tu(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: h()(Zu.base, u) },
                            s().createElement(
                                'div',
                                {
                                    className: h()(Zu.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                s().createElement(
                                    'div',
                                    { className: h()(Zu.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                (et.Bar = Qu),
                    (et.Default = Ju),
                    (et.SeniorityAwards = ({ api: e, className: u, classNames: t, children: n }) => (
                        (0, a.useEffect)(() => Tu(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: h()(Zu.base, u) },
                            s().createElement(
                                'div',
                                { className: h()(Zu.wrapper, null == t ? void 0 : t.wrapper), ref: e.wrapperRef },
                                s().createElement(
                                    'div',
                                    { className: h()(Zu.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    ));
                const ut = $u({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Wu.Next : Wu.Prev),
                    }),
                    tt = 'VerticalBar_base__nonActive_42',
                    nt = 'disable',
                    rt = () => {},
                    at = { pending: !1, offset: 0 },
                    st = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    it = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    ot = (e, u) => Math.max(20, e.offsetHeight * u),
                    lt = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = st, onDrag: n = rt }) => {
                        const r = (0, a.useRef)(null),
                            i = (0, a.useRef)(null),
                            o = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            E = e.stepTimeout || 100,
                            m = (0, a.useState)(at),
                            d = m[0],
                            _ = m[1],
                            A = (0, a.useCallback)(
                                (e) => {
                                    _(e),
                                        c.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [n],
                            ),
                            F = Ou(() => {
                                const u = c.current,
                                    t = l.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && a && u && t)) return;
                                const s = Math.min(1, n / a);
                                return (
                                    (u.style.height = `${ot(t, s)}px`),
                                    u.classList.add('VerticalBar_thumb_32'),
                                    r.current &&
                                        (1 === s ? r.current.classList.add(tt) : r.current.classList.remove(tt)),
                                    s
                                );
                            }),
                            g = Ou(() => {
                                const u = l.current,
                                    t = c.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / r),
                                    E = iu(0, 1, a / (r - n)),
                                    m = (u.offsetHeight - ot(u, s)) * E;
                                (t.style.transform = `translateY(${0 | m}px)`),
                                    ((e) => {
                                        if (i.current && o.current && l.current && c.current) {
                                            if (0 === e)
                                                return i.current.classList.add(nt), void o.current.classList.remove(nt);
                                            if (
                                                ((u = l.current),
                                                (t = c.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return i.current.classList.remove(nt), void o.current.classList.add(nt);
                                            var u, t;
                                            i.current.classList.remove(nt), o.current.classList.remove(nt);
                                        }
                                    })(m);
                            }),
                            p = Ou(() => {
                                it(e, () => {
                                    F(), g();
                                });
                            });
                        (0, a.useEffect)(() => Tu(p)),
                            (0, a.useEffect)(() => {
                                const u = () => {
                                    it(e, () => {
                                        g();
                                    });
                                };
                                let t = rt;
                                const n = () => {
                                    t(), (t = Tu(p));
                                };
                                return (
                                    e.events.on('recalculateContent', p),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        t(),
                                            e.events.off('recalculateContent', p),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', n);
                                    }
                                );
                            }, [e]),
                            (0, a.useEffect)(() => {
                                if (!d.pending) return;
                                const u = (u) => {
                                        it(e, (t) => {
                                            const r = l.current,
                                                a = c.current,
                                                s = e.getContainerSize();
                                            if (!r || !a || !s) return;
                                            const i = u.screenY - d.offset - r.getBoundingClientRect().y,
                                                o = (i / r.offsetHeight) * s;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, o),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: a, thumbOffset: i, contentOffset: o });
                                        });
                                    },
                                    t = () => {
                                        window.removeEventListener('mousemove', u), A(at);
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t);
                                    }
                                );
                            }, [e, d.offset, d.pending, n, A]);
                        const D = Iu((u) => e.applyStepTo(u), E, [e]),
                            B = D[0],
                            C = D[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', C, !0),
                                () => document.removeEventListener('mouseup', C, !0)
                            ),
                            [C],
                        );
                        const f = (e) => {
                            e.target.classList.contains(nt) || I('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: h()('VerticalBar_base_f3', u.base), ref: r, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: h()('VerticalBar_topButton_d7', u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(nt) || 0 !== e.button || (I('play'), B(Wu.Next));
                                },
                                ref: i,
                                onMouseEnter: f,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: h()('VerticalBar_track_df', u.track),
                                    onMouseDown: (u) => {
                                        const n = c.current;
                                        var r;
                                        n &&
                                            0 === u.button &&
                                            (I('play'),
                                            u.target === n
                                                ? A({ pending: !0, offset: u.screenY - n.getBoundingClientRect().y })
                                                : ((r = u.screenY > n.getBoundingClientRect().y ? Wu.Prev : Wu.Next),
                                                  c.current &&
                                                      it(e, (u) => {
                                                          if (!u) return;
                                                          const n = t(e),
                                                              a = e.clampPosition(u, u.scrollTop + n * r);
                                                          e.applyScroll(a);
                                                      })));
                                    },
                                    ref: l,
                                    onMouseEnter: f,
                                },
                                s().createElement('div', { ref: c, className: u.thumb }),
                                s().createElement('div', { className: h()('VerticalBar_rail_43', u.rail) }),
                            ),
                            s().createElement('div', {
                                className: h()('VerticalBar_bottomButton_06', u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(nt) || 0 !== e.button || (I('play'), B(Wu.Prev));
                                },
                                onMouseUp: C,
                                ref: o,
                                onMouseEnter: f,
                            }),
                        );
                    }),
                    ct = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Et = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        scrollClassName: i,
                        scrollClassNames: o,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const E = (0, a.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: h()(ct.base, e.base) });
                            }, [n]),
                            m = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: h()(ct.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: h()(ct.area, r) },
                                s().createElement(mt, { className: i, classNames: o, api: m }, e),
                            ),
                            s().createElement(lt, { getStepByRailClick: l, api: u, onDrag: c, classNames: E }),
                        );
                    },
                    mt = ({ className: e, classNames: u, children: t, api: n }) => (
                        (0, a.useEffect)(() => Tu(n.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: h()(ct.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: h()(ct.content, null == u ? void 0 : u.content), ref: n.contentRef },
                                t,
                            ),
                        )
                    );
                mt.Default = Et;
                const dt = { Vertical: r, Horizontal: n },
                    _t = 'ArtefactProgress_faded_8e',
                    At = 'ArtefactProgress_rewards_f7',
                    Ft = 'ArtefactProgress_rewards_top_fa',
                    gt = 'ArtefactProgress_rewards_wrap_e7',
                    pt = 'ArtefactProgress_divider_45',
                    Dt = 'ArtefactProgress_divider_end_77',
                    Bt = 'ArtefactProgress_pointsMark_b0',
                    ht = 'ArtefactProgress_pointsMark_group_99';
                function Ct() {
                    return (
                        (Ct =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ct.apply(this, arguments)
                    );
                }
                const ft = (0, X.observer)(({ className: e }) => {
                    var u;
                    const t = se().model,
                        n = t.root.get(),
                        r = n.marsPoints,
                        i = t.computes.getProgression(),
                        o = (null == (u = i.at(-1)) ? void 0 : u.marsPoints) || 0,
                        l = 100 * Math.max(0, Math.min(r / (o || 1), 1)) + '%',
                        c = zu(),
                        E = c.applyScroll,
                        m = (0, a.useCallback)(() => {
                            E(Math.max(0, 174 * n.currentProgressSectionIndex - 87), { immediate: !1, reset: !1 });
                        }, [n.currentProgressSectionIndex, E]);
                    (0, a.useEffect)(() => {
                        const e = setTimeout(() => m(), 300);
                        return (
                            engine.on('clientResized', m),
                            () => {
                                engine.off('clientResized', m), clearTimeout(e);
                            }
                        );
                    }, [n.currentProgressSectionIndex, m]);
                    const d = (e) => e === n.currentProgressSectionIndex,
                        _ = (e) => {
                            if (e < n.currentProgressSectionIndex || r >= o) return _t;
                        },
                        A = (e) =>
                            e.map((e) => {
                                return {
                                    name: e.name,
                                    image: wu(e, _u.Big),
                                    value: e.value,
                                    valueType:
                                        ((u = e.name),
                                        Bu.includes(u)
                                            ? Au.MULTI
                                            : hu.includes(u)
                                              ? Au.CURRENCY
                                              : Cu.includes(u)
                                                ? Au.NUMBER
                                                : fu.includes(u)
                                                  ? Au.PREMIUM_PLUS
                                                  : Au.STRING),
                                    tooltipArgs: yu({ tooltipId: e.tooltipId }, Number(e.tooltipContentId)),
                                };
                                var u;
                            }),
                        F = i.map(({ bonuses: e, marsPoints: u }) => ({ bonuses: A(e), marsPoints: u }));
                    return s().createElement(
                        'div',
                        {
                            className: h()('ArtefactProgress_base_3f', e),
                            style: {
                                '--progress-percentage': l,
                                '--sections-amount': i.length,
                                '--rewards-wrap-width': '174rem',
                            },
                        },
                        r >= o &&
                            s().createElement(
                                'div',
                                { className: 'ArtefactProgress_doneProgression_f4' },
                                s().createElement(
                                    'div',
                                    { className: 'ArtefactProgress_doneProgression_text_35' },
                                    R.strings.cosmicEvent.artefact.doneProgression(),
                                ),
                            ),
                        s().createElement(
                            dt.Horizontal.Area.Default,
                            { className: 'ArtefactProgress_scrollWrap_77', api: c },
                            s().createElement(
                                'div',
                                { className: 'ArtefactProgress_wrapper_e4' },
                                r < o &&
                                    s().createElement(
                                        Re,
                                        {
                                            header: R.strings.cosmicEvent.tooltip.marsPoints.header(),
                                            body: R.strings.cosmicEvent.tooltip.marsPoints.description(),
                                            isEnabled: !0,
                                        },
                                        s().createElement(
                                            'div',
                                            { className: 'ArtefactProgress_currentPoints_8a' },
                                            s().createElement('div', null, n.marsPoints),
                                            s().createElement('img', {
                                                className: 'ArtefactProgress_currentPoints_icon_1f',
                                                src: R.images.cosmic_event.gui.maps.icons.artefact.progress.marsPoints_icon(),
                                            }),
                                        ),
                                    ),
                                s().createElement(
                                    'div',
                                    { className: h()('ArtefactProgress_flexContainer_2f') },
                                    s().createElement('div', { className: Dt }),
                                    F.map(({ bonuses: e }, u) =>
                                        s().createElement(
                                            'div',
                                            { className: h()(gt, Ft), key: u },
                                            s().createElement(
                                                'div',
                                                {
                                                    className: h()(
                                                        At,
                                                        Ft,
                                                        d(u) && 'ArtefactProgress_rewards_top__current_d4',
                                                        _(u),
                                                    ),
                                                },
                                                s().createElement(
                                                    'div',
                                                    { className: 'ArtefactProgress_rewards_group_46' },
                                                    e.map((e, u) =>
                                                        s().createElement(
                                                            xu,
                                                            Ct(
                                                                {
                                                                    size: _u.Small,
                                                                    key: u,
                                                                    className: 'ArtefactProgress_reward_e2',
                                                                },
                                                                e,
                                                            ),
                                                        ),
                                                    ),
                                                ),
                                            ),
                                            s().createElement('div', { className: Dt }),
                                        ),
                                    ),
                                ),
                                s().createElement(Eu, {
                                    size: xe.Default,
                                    value: n.marsPoints,
                                    maxValue: o,
                                    deltaFrom: n.artefactProgressDeltaFrom,
                                }),
                                s().createElement(
                                    'div',
                                    { className: gt },
                                    s().createElement(
                                        'div',
                                        { className: ht },
                                        s().createElement('div', { className: pt }),
                                        s().createElement('div', { className: h()(Bt, !d(0) && _t) }, '0'),
                                    ),
                                    F.map(({ marsPoints: e }, u) =>
                                        s().createElement(
                                            'div',
                                            { className: h()(gt, 'ArtefactProgress_rewards_bottom_57'), key: u },
                                            s().createElement('div', {
                                                className: h()(
                                                    At,
                                                    d(u) && 'ArtefactProgress_rewards_bottom__current_a2',
                                                ),
                                            }),
                                            s().createElement(
                                                'div',
                                                { className: ht },
                                                s().createElement('div', { className: pt }),
                                                s().createElement(
                                                    'div',
                                                    {
                                                        className: h()(
                                                            Bt,
                                                            (!(d(u) || n.currentProgressSectionIndex - 1 === u) ||
                                                                r >= o) &&
                                                                _t,
                                                        ),
                                                    },
                                                    e,
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        ),
                    );
                });
                let vt;
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(vt || (vt = {}));
                const bt = (e) => e.replace(/&nbsp;/g, ' '),
                    wt = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    yt = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    Rt = (e, u, t = vt.left) => e.split(u).reduce(t === vt.left ? wt : yt, []),
                    St = (() => {
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
                    Pt = ['zh_cn', 'zh_sg', 'zh_tw'],
                    kt = ({ binding: e, text: u = '', classMix: t, alignment: n = vt.left }) =>
                        null === u
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : s().createElement(
                                  a.Fragment,
                                  null,
                                  u.split('\n').map((u, r) =>
                                      s().createElement(
                                          'div',
                                          { className: h()('FormatText_base_d0', t), key: `${u}-${r}` },
                                          ((e, u, t) =>
                                              e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                                  t && e in t
                                                      ? t[e]
                                                      : ((e, u = vt.left) => {
                                                            const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return Pt.includes(t)
                                                                ? St(e)
                                                                : ((e, u = vt.left) => {
                                                                      let t = [];
                                                                      const n =
                                                                              /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                          r = bt(e);
                                                                      return (
                                                                          Rt(r, /( )/, u).forEach(
                                                                              (e) => (t = t.concat(Rt(e, n, vt.left))),
                                                                          ),
                                                                          t
                                                                      );
                                                                  })(e, u);
                                                        })(e, u),
                                              ))(u, n, e).map((e, u) =>
                                              s().createElement(a.Fragment, { key: `${u}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              ),
                    Nt = ({ children: e, title: u, bodyText: t, binding: n, className: r }) =>
                        s().createElement(
                            'div',
                            { className: h()('Description_base_89', r) },
                            s().createElement(
                                'div',
                                { className: 'Description_title_23' },
                                s().createElement('div', { className: 'Description_icon_25' }),
                                s().createElement('div', { className: 'Description_text_33' }, u),
                            ),
                            s().createElement('div', { className: 'Description_underline_8e' }),
                            t && s().createElement(kt, { binding: n, text: t, classMix: 'Description_bodyText_39' }),
                            e,
                        ),
                    Lt = ({ current: e, total: u, className: t }) =>
                        s().createElement(
                            'div',
                            { className: h()('ProgressBar_base_86', t) },
                            s().createElement(
                                'div',
                                {
                                    className: 'ProgressBar_current_a7',
                                    style: { width: 0 !== u ? (100 * e) / u + '%' : '0' },
                                },
                                s().createElement('div', { className: 'ProgressBar_current_overlay_6c' }),
                            ),
                        ),
                    xt = ({ className: e, description: u, currentProgress: t, totalProgress: n, icon: r }) => {
                        const a = t >= n,
                            i =
                                R.images.cosmic_event.gui.maps.icons.artefact.missions.icons.$dyn(r) ||
                                R.images.cosmic_event.gui.maps.icons.artefact.missions.icons.cosmic_mars_points();
                        return s().createElement(
                            'div',
                            {
                                className: h()(
                                    'Mission_base_3a',
                                    e,
                                    a ? 'Mission_base__done_69' : 'Mission_base__available_d7',
                                ),
                                onMouseEnter: () => H.playHighlight(),
                            },
                            s().createElement('div', {
                                className: 'Mission_header_c5',
                                style: { backgroundImage: a ? '' : `url("${i}")` },
                            }),
                            s().createElement(
                                'div',
                                { className: 'Mission_body_c9' },
                                s().createElement('div', { className: 'Mission_title_d6' }, u),
                                s().createElement(
                                    'div',
                                    { className: 'Mission_progression_1c' },
                                    s().createElement('span', { className: 'Mission_progression_current_c3' }, t),
                                    ' / ',
                                    n,
                                ),
                                s().createElement(Lt, { className: 'Mission_progressBar_71', current: t, total: n }),
                            ),
                        );
                    },
                    Tt = {
                        base: 'ArtefactRoute_base_32',
                        main: 'ArtefactRoute_main_ce',
                        actions_heading: 'ArtefactRoute_actions_heading_d4',
                        actions: 'ArtefactRoute_actions_be',
                        missions: 'ArtefactRoute_missions_ce',
                        mission: 'ArtefactRoute_mission_e3',
                        stage: 'ArtefactRoute_stage_39',
                        artefact: 'ArtefactRoute_artefact_d0',
                        smallerText: 'ArtefactRoute_smallerText_b5',
                        progress: 'ArtefactRoute_progress_84',
                    };
                function Mt() {
                    return (
                        (Mt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Mt.apply(this, arguments)
                    );
                }
                const Ot = [de, _e, Ae],
                    It = (0, X.observer)(({ className: e }) => {
                        const u = se().model,
                            t = u.computes.getScoring(),
                            n = u.computes.getMissions();
                        return s().createElement(
                            'div',
                            { className: h()(Tt.base, e) },
                            s().createElement(
                                'div',
                                { className: Tt.main },
                                s().createElement(
                                    'div',
                                    { className: Tt.about },
                                    s().createElement(Nt, {
                                        className: Ee,
                                        title: R.strings.cosmicEvent.artefact.title(),
                                        bodyText: R.strings.cosmicEvent.artefact.description(),
                                    }),
                                    s().createElement(
                                        'div',
                                        { className: me },
                                        s().createElement(
                                            'div',
                                            { className: Tt.actions_heading },
                                            R.strings.cosmicEvent.artefact.actionsTitle(),
                                        ),
                                        s().createElement(
                                            'div',
                                            { className: Tt.actions },
                                            t.map(({ type: e, marsPoints: u }) =>
                                                s().createElement(Se, {
                                                    key: e,
                                                    title: R.strings.cosmicEvent.artefact.actionList[e](),
                                                    icon: R.images.cosmic_event.gui.maps.icons.scoring.icons[e](),
                                                    points: u,
                                                }),
                                            ),
                                        ),
                                    ),
                                    s().createElement(
                                        'div',
                                        { className: Tt.missions },
                                        n.map((e, u) =>
                                            s().createElement(
                                                ve,
                                                {
                                                    key: u,
                                                    contentId: R.views.lobby.missions.DailyQuestsTooltip('resId'),
                                                    args: { missionId: e.id },
                                                },
                                                s().createElement(
                                                    'div',
                                                    null,
                                                    s().createElement(
                                                        xt,
                                                        Mt({ key: u, className: h()(Tt.mission, Ot[u]) }, e),
                                                    ),
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                                s().createElement(
                                    'div',
                                    { className: h()(Tt.stage, oe) },
                                    s().createElement(Ne, { className: Tt.artefact }),
                                ),
                            ),
                            s().createElement(ft, { className: h()('CosmicLobbyViewApp_fromBelow_4f', Tt.progress) }),
                        );
                    });
                var Ht = t(9050),
                    Ut = t.n(Ht);
                let Wt, Gt, $t;
                !(function (e) {
                    (e[(e.Word = 0)] = 'Word'),
                        (e[(e.LineBreak = 1)] = 'LineBreak'),
                        (e[(e.NewLine = 2)] = 'NewLine'),
                        (e[(e.NoBreakSymbol = 3)] = 'NoBreakSymbol'),
                        (e[(e.NoBreakWrapper = 4)] = 'NoBreakWrapper'),
                        (e[(e.Binding = 5)] = 'Binding');
                })(Wt || (Wt = {})),
                    (function (e) {
                        (e.FlexStart = 'flex-start'), (e.Center = 'center'), (e.FlexEnd = 'flex-end');
                    })(Gt || (Gt = {})),
                    (function (e) {
                        (e.NBSP = ' '), (e.ZWNBSP = '\ufeff'), (e.NEW_LINE = '\n');
                    })($t || ($t = {}));
                const zt = { [$t.NBSP]: Wt.NoBreakSymbol, [$t.ZWNBSP]: Wt.NoBreakSymbol, [$t.NEW_LINE]: Wt.LineBreak },
                    Vt = {
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
                    jt = (e) => ({ color: `#${e}` }),
                    qt = ({ elementList: e, textBlock: u, key: t }) => {
                        const n = u.colorTag;
                        return n
                            ? Vt[n]
                                ? s().createElement(
                                      'span',
                                      { key: t, 'data-block-type': u.blockType, className: Vt[n] },
                                      e,
                                  )
                                : s().createElement('span', { key: t, 'data-block-type': u.blockType, style: jt(n) }, e)
                            : s().createElement('span', { key: t, 'data-block-type': u.blockType }, e);
                    },
                    Yt = {
                        [Wt.Word]: qt,
                        [Wt.NoBreakSymbol]: qt,
                        [Wt.Binding]: ({ elementList: e, textBlock: u, key: t }) =>
                            s().createElement(
                                'span',
                                { key: t, 'data-block-type': u.blockType },
                                e.map((e) => s().createElement(s().Fragment, { key: t }, e)),
                            ),
                        [Wt.LineBreak]: ({ key: e }) =>
                            s().createElement('span', {
                                key: e,
                                'data-block-type': Wt.LineBreak,
                                className: 'renderers_lineBreak_b5',
                            }),
                        [Wt.NewLine]: ({ elementList: e, key: u }) =>
                            s().createElement(
                                'span',
                                { key: u, 'data-block-type': Wt.NewLine, className: 'renderers_newLine_bd' },
                                e,
                            ),
                        [Wt.NoBreakWrapper]: ({ elementList: e, key: u }) =>
                            s().createElement(
                                'span',
                                {
                                    key: u,
                                    'data-block-type': Wt.NoBreakWrapper,
                                    className: 'renderers_noBreakWrapper_10',
                                },
                                e,
                            ),
                    },
                    Xt = (e, u, t) => {
                        const n = [];
                        return (
                            e.childList.forEach((r, a) => {
                                const s = `${t}_${a}`;
                                if (((e) => void 0 !== e.childList)(r)) {
                                    const e = r,
                                        u = e.blockType,
                                        t = Xt(e, Yt[u], s);
                                    n.push(...t);
                                } else n.push(u({ elementList: [r], textBlock: e, key: s }));
                            }),
                            n
                        );
                    },
                    Kt = (e, u, t, n) => {
                        let r = u.exec(e),
                            a = 0;
                        for (; r; ) a !== r.index && t(e.slice(a, r.index)), n(r), (a = u.lastIndex), (r = u.exec(e));
                        a !== e.length && t(e.slice(a));
                    },
                    Qt = (e) => {
                        const u = /[\s\u002d]/g;
                        let t = u.exec(e);
                        if (!t) return [e];
                        const n = [];
                        let r = 0;
                        for (; t; ) n.push(e.slice(r, u.lastIndex)), (r = u.lastIndex), (t = u.exec(e));
                        return r !== e.length && n.push(e.slice(r)), n;
                    },
                    Zt = (e, u = '') => {
                        const t = [];
                        return (
                            Kt(
                                e,
                                /(\n+|[\xa0\ufeff]+)/g,
                                (e) => {
                                    t.push({ blockType: Wt.Word, colorTag: u, childList: Qt(e) });
                                },
                                (e) => {
                                    const n = e[0],
                                        r = zt[n.charAt(0)];
                                    r === Wt.LineBreak
                                        ? t.push(
                                              ...((e) => {
                                                  const u = [
                                                      {
                                                          blockType: Wt.LineBreak,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      },
                                                  ];
                                                  for (let t = 0; t < e.length - 1; t++)
                                                      u.push({
                                                          blockType: Wt.NewLine,
                                                          colorTag: '',
                                                          childList: [e.charAt(0)],
                                                      });
                                                  return u;
                                              })(n),
                                          )
                                        : t.push({ blockType: r, colorTag: u, childList: [n] });
                                },
                            ),
                            t
                        );
                    },
                    Jt = (e, u, t = '') => {
                        const n = [];
                        return (
                            Kt(
                                e,
                                /(?:%\(|{)(.*?)[)}][sd]?/g,
                                (e) => {
                                    n.push(...Zt(e, t));
                                },
                                (e) => {
                                    const r = e[1],
                                        a = void 0 === u[r] ? e[0] : u[r];
                                    'string' == typeof a || 'number' == typeof a
                                        ? n.push(...Zt(String(a), t))
                                        : n.push({ blockType: Wt.Binding, colorTag: t, childList: [a] });
                                },
                            ),
                            n
                        );
                    },
                    en = (e, u) => {
                        if (!e) return [u];
                        const t = [],
                            n = Object.assign({}, u, { childList: u.childList.splice(0, 1) });
                        if (e.blockType === Wt.NoBreakWrapper) e.childList.push(n), t.push(e);
                        else {
                            const u = Object.assign({}, e, { childList: e.childList.splice(-1) });
                            e.childList.length > 0 && t.push(e),
                                t.push({ blockType: Wt.NoBreakWrapper, colorTag: '', childList: [u, n] });
                        }
                        return u.childList.length > 0 && t.push(u), t;
                    },
                    un = (e, u = {}) => {
                        if (!e) return [];
                        const t = ((e) => {
                            const u = [];
                            let t = !1;
                            return (
                                e.forEach((e) => {
                                    e.blockType === Wt.NoBreakSymbol
                                        ? ((t = !0), u.push(...en(u.pop(), e)))
                                        : (t ? u.push(...en(u.pop(), e)) : u.push(e), (t = !1));
                                }),
                                u
                            );
                        })(
                            ((e, u) => {
                                const t = [];
                                return (
                                    Kt(
                                        e,
                                        /(?:%\(|{)(\w*)(?:_[Oo]pen|_Start)(?:\)s|})([\s\S]*?)(?:%\(|{)\w*(?:_[Cc]lose|_End)(?:\)s|})/g,
                                        (e) => {
                                            t.push(...Jt(e, u));
                                        },
                                        (e) => {
                                            t.push(...Jt(e[2], u, e[1]));
                                        },
                                    ),
                                    t
                                );
                            })(bt(e).replace(/&zwnbsp;/g, '\ufeff'), u),
                        );
                        return ((e) => {
                            const u = [];
                            return (
                                e.forEach((e, t) => {
                                    u.push(
                                        ...((e, u) => {
                                            const t = [],
                                                n = e.blockType,
                                                r = Yt[n],
                                                a = Xt(e, r, u);
                                            return (
                                                n === Wt.NoBreakWrapper
                                                    ? t.push(r({ elementList: a, textBlock: e, key: `${u}` }))
                                                    : t.push(...a),
                                                t
                                            );
                                        })(e, t),
                                    );
                                }),
                                u
                            );
                        })(t);
                    },
                    tn = (e, u) => !e || e.offsetTop + e.offsetHeight > u,
                    nn = (e, u) => e.offsetLeft + e.offsetWidth - u,
                    rn = (e, u, t) => {
                        if (!e || !e.textContent) return [!1, 0];
                        if (e.offsetLeft > u) return [!1, 0];
                        const n = nn(e, u),
                            r = e.textContent.length,
                            a = e.offsetWidth / r,
                            s = Math.ceil(n / a);
                        if (n > 0) {
                            const n = Math.floor((u - e.offsetLeft) / a);
                            return n >= t ? [!0, t + s] : [!1, n];
                        }
                        const i = Math.max(t + s, 0);
                        return r < i ? [!1, 0] : [!0, i];
                    },
                    an = (e, u, t, n, r, a) => {
                        let i = -1,
                            o = null;
                        for (let l = t; l >= 0; l--) {
                            const t = e[l],
                                c = Number(e[l].getAttribute('data-block-type'));
                            if (c === Wt.LineBreak || c === Wt.NewLine || c === Wt.Binding) continue;
                            const E = t.textContent || '';
                            if (!(t.childElementCount > 1)) {
                                const e = rn(t, n, r),
                                    c = e[0],
                                    m = e[1];
                                if (!c) {
                                    m > 0 && (r -= m);
                                    continue;
                                }
                                const d = E.slice(0, E.length - m) + a,
                                    _ = u[l];
                                (o = s().cloneElement(_, _.props, d)), (i = l);
                                break;
                            }
                            {
                                const e = t.children,
                                    c = u[l],
                                    m = c.props.children,
                                    d = an(e, m, e.length - 1, n, r, a),
                                    _ = d[0],
                                    A = d[1];
                                if (!(_ < 0)) {
                                    const e = m.slice(0, _);
                                    (o = s().cloneElement(c, c.props, e, A)), (i = l);
                                    break;
                                }
                                r -= E.length;
                            }
                        }
                        return [i, o];
                    },
                    sn = s().memo(
                        ({
                            text: e,
                            classMix: u,
                            onSizeChanged: t,
                            binding: n,
                            isTooltipEnable: r = !1,
                            isTruncationAvailable: i = !1,
                            targetId: o,
                            justifyContent: l = Gt.FlexStart,
                            alignContent: c = Gt.FlexStart,
                            truncateIdentify: E = '...',
                        }) => {
                            const m = (0, a.useRef)(null),
                                d = (0, a.useRef)({ height: 0, width: 0 }),
                                _ = (0, a.useState)({ elementList: [], isTruncated: !1, isTruncateFinished: !1 }),
                                A = _[0],
                                F = _[1],
                                g = (0, a.useMemo)(() => un(e, n), [n, e]),
                                p = (0, a.useMemo)(() => {
                                    if (r && A.isTruncated)
                                        return {
                                            args: { text: e, stringifyKwargs: n ? JSON.stringify(n) : '' },
                                            contentId: R.views.lobby.common.tooltips.ExtendedTextTooltip('resId'),
                                            targetId: o,
                                        };
                                }, [n, r, o, e, A.isTruncated]),
                                D = (0, a.useCallback)(
                                    (e) => {
                                        (d.current.width = e.contentRect.width),
                                            (d.current.height = e.contentRect.height);
                                        const u = ((e, u, t, n = '...') => {
                                                const r = [...u],
                                                    a = e.current;
                                                if (!a) return [r, !1];
                                                const s = t.height,
                                                    i = t.width,
                                                    o = a.lastElementChild;
                                                if (!tn(o, s) && nn(o, i) <= 0) return [r, !1];
                                                const l = a.children,
                                                    c = ((e, u) => {
                                                        let t = 0,
                                                            n = e.length - 1;
                                                        for (; n - t >= 0; ) {
                                                            const r = t + Math.ceil(0.5 * (n - t));
                                                            tn(e[r], u) ? (n = r - 1) : (t = r + 1);
                                                        }
                                                        return t - 1;
                                                    })(l, s);
                                                if (c < 0) return [r, !1];
                                                const E = an(l, r, c, i, n.length, n),
                                                    m = E[0],
                                                    d = E[1];
                                                return d && (r.splice(m, 1, d), r.splice(m + 1)), [r, !0];
                                            })(m, g, d.current, E),
                                            n = u[0],
                                            r = u[1];
                                        F({ elementList: n, isTruncated: r, isTruncateFinished: !0 }), t && t(r);
                                    },
                                    [t, E, g],
                                ),
                                B = (0, a.useMemo)(() => ({ justifyContent: l, alignContent: c }), [c, l]);
                            return (
                                ((e, u, t = !0) => {
                                    const n = (0, a.useCallback)(
                                        (e) => {
                                            const t = e[0];
                                            u && u(t);
                                        },
                                        [u],
                                    );
                                    (0, a.useEffect)(() => {
                                        if (!e.current || !t) return;
                                        const u = new (Ut())((e) => n(e));
                                        return (
                                            u.observe(e.current),
                                            () => {
                                                u.disconnect();
                                            }
                                        );
                                    }, [n, t, e]);
                                })(m, D, i),
                                s().createElement(
                                    'div',
                                    {
                                        className: h()(
                                            'ExtendedText_base_71',
                                            u,
                                            'ExtendedText_base__zeroPadding_25',
                                            i && 'ExtendedText_base__isTruncationAvailable_5b',
                                        ),
                                        style: B,
                                    },
                                    s().createElement('div', { className: 'ExtendedText_unTruncated_b8', ref: m }, g),
                                    s().createElement(
                                        Nu,
                                        { tooltipArgs: p },
                                        s().createElement(
                                            'div',
                                            {
                                                className: h()(
                                                    'ExtendedText_truncated_97',
                                                    !A.isTruncateFinished && i && 'ExtendedText_truncated__hide_31',
                                                ),
                                                style: B,
                                            },
                                            A.isTruncateFinished && i ? A.elementList : g,
                                        ),
                                    ),
                                )
                            );
                        },
                    );
                let on;
                !(function (e) {
                    (e.NONE = 'none'),
                        (e.SHELL = 'shell'),
                        (e.ACCELERATION = 'acceleration'),
                        (e.SHIELD = 'shield'),
                        (e.BLACK_HOLE = 'black_hole'),
                        (e.OVERCHARGE = 'overcharge'),
                        (e.RAPID_SHELLING = 'rapid_shelling'),
                        (e.POWER_SHOT = 'power_shot');
                })(on || (on = {}));
                const ln = {
                        None: on.NONE,
                        Shell: on.SHELL,
                        Acceleration: on.ACCELERATION,
                        Shield: on.SHIELD,
                        BlackHole: on.BLACK_HOLE,
                        Overcharge: on.OVERCHARGE,
                        RapidShelling: on.RAPID_SHELLING,
                        PowerShot: on.POWER_SHOT,
                    },
                    cn = 'play',
                    En = [
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
                function mn() {
                    return (
                        (mn =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        mn.apply(this, arguments)
                    );
                }
                const dn = (0, a.memo)(function (e) {
                        let u = e.width,
                            t = e.height,
                            n = e.getImageSource,
                            r = e.frameCount,
                            i = e.onAnimate,
                            o = e.frameTime,
                            l = void 0 === o ? 33 : o,
                            c = e.initialFrameIndex,
                            E = void 0 === c ? 0 : c,
                            m = e.lastFrameIndex,
                            d = void 0 === m ? r - 1 : m,
                            _ = e.loop,
                            A = void 0 === _ || _,
                            F = e.state,
                            g = void 0 === F ? cn : F,
                            p = e.onAnimationDone,
                            D = e.onAnimationComplete,
                            B = e.poster,
                            h = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, En);
                        const C = (0, a.useRef)(null);
                        return (
                            (0, a.useEffect)(() => {
                                const e = C.current;
                                if (!e) return;
                                const u = e.getContext('2d'),
                                    t = (t) => {
                                        u.clearRect(0, 0, e.width, e.height), u.drawImage(t.img, -t.x, -t.y);
                                    };
                                switch (g) {
                                    case 'play':
                                        return (function () {
                                            const e = Fn(E, d, n),
                                                u = _n(E, d),
                                                r = window.setInterval(() => {
                                                    const n = u(),
                                                        a = e.get(n);
                                                    a
                                                        ? (null == i || i(n, a),
                                                          t(a),
                                                          n === d &&
                                                              (null == D || D(),
                                                              A || (null == p || p(), window.clearInterval(r))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, l);
                                            return () => window.clearInterval(r);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === E && B ? { path: B, x: 0, y: 0 } : n(E),
                                                u = new Image();
                                            u.src = e.path;
                                            const r = () => t(An(e, u));
                                            return (
                                                u.addEventListener('load', r), () => u.removeEventListener('load', r)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [l, n, E, d, A, i, D, p, B, g]),
                            s().createElement('canvas', mn({}, h, { width: u, height: t, ref: C }))
                        );
                    }),
                    _n = (e, u) => {
                        let t = e;
                        return () => {
                            const n = t;
                            return (t += 1), t > u && (t = e), n;
                        };
                    },
                    An = (e, u) => Object.assign({}, e, { img: u }),
                    Fn = (e, u, t) => {
                        const n = new Map(),
                            r = {};
                        for (let a = e; a <= u; a++) {
                            const e = t(a),
                                u = r[e.path];
                            if (u) n.set(a, An(e, u));
                            else {
                                const u = new Image();
                                (r[e.path] = u),
                                    (u.src = e.path),
                                    (u.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${a})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    n.set(a, An(e, u));
                            }
                        }
                        return n;
                    };
                function gn() {
                    return (
                        (gn =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        gn.apply(this, arguments)
                    );
                }
                const pn = R.strings.cosmicEvent,
                    Dn = ({ className: e }) => {
                        const u = se().controls,
                            t = (function (e = {}, u = []) {
                                var t, n, r, s;
                                const i = (0, a.useState)(null != (t = e.state) ? t : cn),
                                    o = i[0],
                                    l = i[1],
                                    c = (0, a.useState)(null != (n = e.initialFrameIndex) ? n : 0),
                                    E = c[0],
                                    m = c[1],
                                    d = (0, a.useState)(null != (r = e.frameTime) ? r : 33),
                                    _ = d[0],
                                    A = d[1],
                                    F = (0, a.useState)(null == (s = e.loop) || s),
                                    g = F[0],
                                    p = F[1],
                                    D = (0, a.useRef)(E),
                                    B = (0, a.useCallback)((e) => {
                                        m(e), l('play');
                                    }, []),
                                    h = (0, a.useCallback)((e) => {
                                        m(e), l('stop');
                                    }, []),
                                    C = (0, a.useCallback)(() => {
                                        m(0), l('stop');
                                    }, []),
                                    f = (0, a.useCallback)(() => l('play'), []),
                                    v = (0, a.useCallback)(() => {
                                        m(D.current + 1), l('stop');
                                    }, []);
                                return {
                                    props: {
                                        state: o,
                                        initialFrameIndex: E,
                                        frameTime: _,
                                        loop: g,
                                        onAnimate: (0, a.useCallback)((u, t) => {
                                            (D.current = u), null == e.onAnimate || e.onAnimate(u, t);
                                        }, u),
                                        onAnimationDone: (0, a.useCallback)(() => {
                                            C();
                                        }, u),
                                    },
                                    enableLoop: (0, a.useCallback)(() => p(!0), []),
                                    disableLoop: (0, a.useCallback)(() => p(!1), []),
                                    setState: l,
                                    setInitialFrameIndex: m,
                                    setFrameTime: A,
                                    goAndPlay: B,
                                    goAndStop: h,
                                    stop: C,
                                    play: f,
                                    pause: v,
                                };
                            })(),
                            n = {
                                width: 256,
                                height: 256,
                                frameCount: 128,
                                chunk: { count: 1, rows: 16, columns: 8 },
                                getChunkPath: () => 'R.images.cosmic_event.gui.maps.icons.shop_entry_point.sequence',
                            },
                            r = (function (e) {
                                const u = e.chunk,
                                    t = u.rows * u.columns;
                                return (n) => {
                                    const r = n % t,
                                        a = (r % u.columns) * e.width,
                                        s = Math.trunc(r / u.columns) * e.height;
                                    return { path: e.getChunkPath(Math.trunc(n / t)), x: a, y: s };
                                };
                            })(n);
                        return s().createElement(
                            'div',
                            {
                                className: h()('ShopEntryPoint_base_88', e),
                                onClick: () => {
                                    H.playYes(), u.onShopClicked();
                                },
                                onMouseEnter: () => I(R.sounds.ev_cosmic_lobby_hover()),
                            },
                            s().createElement(
                                dn,
                                gn({}, t.props, {
                                    width: n.width,
                                    height: n.height,
                                    frameCount: n.frameCount,
                                    getImageSource: r,
                                    frameTime: 70,
                                    loop: !0,
                                    className: 'ShopEntryPoint_particles_f6',
                                }),
                            ),
                            s().createElement('div', { className: 'ShopEntryPoint_bg_c4' }),
                            s().createElement('div', { className: 'ShopEntryPoint_hover_f3' }),
                            s().createElement('div', { className: 'ShopEntryPoint_title_5c' }, pn.shopEntry.title()),
                        );
                    },
                    Bn = ({
                        title: e,
                        className: u,
                        style: t,
                        layoutDirection: n = 'right',
                        onClick: r,
                        onMouseEnter: a,
                        onMouseLeave: i,
                    }) => {
                        const o = 'right' === n;
                        return s().createElement(
                            'div',
                            {
                                className: h()(
                                    'HeaderLineButton_base_30',
                                    u,
                                    o ? 'HeaderLineButton_alignItemsRight_ff' : 'HeaderLineButton_alignItemsLeft_e4',
                                ),
                                style: Object.assign({}, t),
                            },
                            s().createElement(
                                'div',
                                {
                                    className: 'HeaderLineButton_header_61',
                                    onClick: r,
                                    onMouseEnter: a,
                                    onMouseLeave: i,
                                },
                                e,
                            ),
                            s().createElement(
                                'div',
                                { className: 'HeaderLineButton_lineContainer_18' },
                                s().createElement('div', { className: 'HeaderLineButton_dot_fe' }),
                                s().createElement('div', { className: 'HeaderLineButton_line_3c' }),
                            ),
                        );
                    },
                    hn = 'HowToPlay_actionContainer_cc',
                    Cn = 'HowToPlay_slotIcon_c4',
                    fn = 'HowToPlay_arrowIcon_09',
                    vn = 'HowToPlay_bodyText_f7',
                    bn = () =>
                        s().createElement(
                            'div',
                            { className: 'HowToPlay_base_73' },
                            s().createElement(
                                'div',
                                { className: h()('HowToPlay_title_7c', me) },
                                R.strings.cosmicEvent.main.howToPlay.title(),
                            ),
                            s().createElement(
                                'div',
                                { className: h()(hn, de) },
                                s().createElement('img', {
                                    className: Cn,
                                    src: R.images.cosmic_event.gui.maps.icons.slotShoot(),
                                    alt: '',
                                }),
                                s().createElement('div', { className: fn }),
                                s().createElement(
                                    'div',
                                    { className: vn },
                                    R.strings.cosmicEvent.main.howToPlay.paragraph1(),
                                ),
                            ),
                            s().createElement(
                                'div',
                                { className: h()(hn, _e) },
                                s().createElement(
                                    'div',
                                    { className: vn },
                                    R.strings.cosmicEvent.main.howToPlay.paragraph2(),
                                ),
                                s().createElement('div', { className: h()(fn, 'HowToPlay_reverse_6b') }),
                                s().createElement('img', {
                                    className: Cn,
                                    src: R.images.cosmic_event.gui.maps.icons.slotPickup(),
                                    alt: '',
                                }),
                            ),
                            s().createElement(
                                'div',
                                { className: h()(hn, Ae) },
                                s().createElement('img', {
                                    className: Cn,
                                    src: R.images.cosmic_event.gui.maps.icons.slotArtefact(),
                                    alt: '',
                                }),
                                s().createElement('div', { className: fn }),
                                s().createElement(
                                    'div',
                                    { className: vn },
                                    R.strings.cosmicEvent.main.howToPlay.paragraph3(),
                                ),
                            ),
                        ),
                    wn = ['ability', 'children', 'className'];
                function yn() {
                    return (
                        (yn =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        yn.apply(this, arguments)
                    );
                }
                const Rn = R.images.cosmic_event.gui.maps.icons.pickups,
                    Sn = (e) => {
                        let u = e.ability,
                            t = e.children,
                            n = e.className,
                            r = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, wn);
                        return s().createElement(
                            'div',
                            yn({ className: n }, r),
                            s().createElement(
                                'div',
                                { className: 'Pickup_wrapper_7a' },
                                s().createElement('img', {
                                    className: 'Pickup_glow_68',
                                    src: Rn.$dyn(u + '_glow'),
                                    alt: '',
                                }),
                                s().createElement('img', {
                                    className: 'Pickup_image_4d',
                                    src: Rn.$dyn(u + '_icon'),
                                    alt: '',
                                }),
                                t,
                            ),
                        );
                    },
                    Pn = ['children', 'className', 'inBattle'];
                function kn() {
                    return (
                        (kn =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        kn.apply(this, arguments)
                    );
                }
                const Nn = (0, X.observer)((e) => {
                        let u = e.children,
                            t = e.className,
                            n = e.inBattle,
                            r = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, Pn);
                        return s().createElement(
                            'div',
                            kn({ className: h()(t, n && 'Vehicle_base__inBattle_35') }, r),
                            s().createElement('img', {
                                className: 'Vehicle_image_49',
                                src: n
                                    ? R.images.cosmic_event.gui.maps.icons.vehicle.vehicle__inBattle()
                                    : R.images.cosmic_event.gui.maps.icons.vehicle.vehicle(),
                            }),
                            n &&
                                s().createElement(
                                    'div',
                                    { className: 'Vehicle_label_6a' },
                                    s().createElement('span', null, R.strings.cosmicEvent.vehicle.inBattle()),
                                    s().createElement('div', { className: 'Vehicle_glow_c1' }),
                                ),
                            u,
                        );
                    }),
                    Ln = (0, X.observer)((e) => {
                        const u = se().model.root.get();
                        return s().createElement(Nn, kn({ inBattle: u.isVehicleInBattle }, e));
                    }),
                    xn = {
                        base: 'MainRoute_base_bb',
                        pointsContainer: 'MainRoute_pointsContainer_06',
                        icon: 'MainRoute_icon_12',
                        points: 'MainRoute_points_26',
                        shopEntryContainer: 'MainRoute_shopEntryContainer_0f',
                        pointsProgressBar: 'MainRoute_pointsProgressBar_8a',
                        stage: 'MainRoute_stage_02',
                        artefact: 'MainRoute_artefact_88',
                        artefact_info: 'MainRoute_artefact_info_7b',
                        artefact_info_header: 'MainRoute_artefact_info_header_af',
                        vehicle: 'MainRoute_vehicle_37',
                        vehicle_info: 'MainRoute_vehicle_info_6c',
                        pickups: 'MainRoute_pickups_bb',
                        pickupsInfo: 'MainRoute_pickupsInfo_a4',
                    },
                    Tn = R.strings.cosmicEvent,
                    Mn = () => I(R.sounds.ev_cosmic_lobby_hover()),
                    On = () => I(R.sounds.ev_cosmic_lobby_tab_click()),
                    In = (0, X.observer)(({ className: e }) => {
                        const u = se(),
                            t = u.model,
                            n = u.controls,
                            r = t.root.get(),
                            i = (0, a.useCallback)(() => {
                                r.lobbyRoute !== z.Artefact && (On(), n.onLobbyRouteChange(z.Artefact));
                            }, [r, n]),
                            o = (0, a.useCallback)(() => {
                                r.lobbyRoute !== z.Vehicle && (On(), n.onLobbyRouteChange(z.Vehicle));
                            }, [r, n]),
                            l = (0, a.useCallback)(() => {
                                r.lobbyRoute !== z.Pickups && (On(), n.onLobbyRouteChange(z.Pickups));
                            }, [r, n]);
                        return s().createElement(
                            'div',
                            { className: h()(xn.base, e) },
                            s().createElement(
                                'div',
                                { className: xn.about },
                                s().createElement(Nt, {
                                    className: h()(xn.description, Ee),
                                    title: Tn.main.title(),
                                    bodyText: Tn.main.description(),
                                }),
                                s().createElement(bn, null),
                            ),
                            s().createElement(
                                'div',
                                { className: h()(xn.stage, oe) },
                                s().createElement(
                                    Ne,
                                    { className: xn.artefact, onMouseEnter: Mn, onClick: i },
                                    s().createElement(
                                        'div',
                                        { className: xn.artefact_info },
                                        s().createElement(Bn, {
                                            title: Tn.navigation.artefact(),
                                            layoutDirection: 'right',
                                            className: xn.artefact_info_header,
                                        }),
                                        s().createElement(
                                            'div',
                                            { className: xn.pointsContainer },
                                            s().createElement(sn, {
                                                classMix: xn.points,
                                                text: Tn.artefact.points(),
                                                binding: { points: r.marsPoints, pointsLimit: r.marsPointsLimit },
                                            }),
                                            s().createElement(
                                                Re,
                                                {
                                                    header: Tn.tooltip.marsPoints.header(),
                                                    body: Tn.tooltip.marsPoints.description(),
                                                    isEnabled: !0,
                                                },
                                                s().createElement('img', {
                                                    src: R.images.cosmic_event.gui.maps.icons.event_icon.c_14x14(),
                                                    className: xn.icon,
                                                }),
                                            ),
                                        ),
                                        s().createElement(Lt, {
                                            className: xn.pointsProgressBar,
                                            current: r.marsPoints,
                                            total: r.marsPointsLimit,
                                        }),
                                    ),
                                ),
                                s().createElement(
                                    Ln,
                                    { className: xn.vehicle, onMouseEnter: Mn, onClick: o },
                                    s().createElement(Bn, {
                                        title: Tn.navigation.vehicle(),
                                        className: xn.vehicle_info,
                                        layoutDirection: 'right',
                                    }),
                                ),
                                s().createElement(
                                    Sn,
                                    { ability: ln.BlackHole, className: xn.pickups, onMouseEnter: Mn, onClick: l },
                                    s().createElement(Bn, {
                                        title: Tn.pickups.title(),
                                        className: xn.pickupsInfo,
                                        layoutDirection: 'right',
                                    }),
                                ),
                                s().createElement(Dn, { className: xn.shopEntryContainer }),
                            ),
                        );
                    });
                let Hn;
                !(function (e) {
                    (e.Hovered = 'Hovered'), (e.Normal = 'Normal'), (e.UnFocused = 'UnFocused');
                })(Hn || (Hn = {}));
                const Un = (e, u) => (e === u ? Hn.Hovered : null === e ? Hn.Normal : Hn.UnFocused),
                    Wn = {
                        base: 'DescriptiveBlock_base_a6',
                        containerHover: 'DescriptiveBlock_containerHover_0d',
                        title: 'DescriptiveBlock_title_95',
                        normalFlex: 'DescriptiveBlock_normalFlex_f6',
                        img: 'DescriptiveBlock_img_a8',
                        description: 'DescriptiveBlock_description_93',
                        base__hovered: 'DescriptiveBlock_base__hovered_8e',
                        base__unFocused: 'DescriptiveBlock_base__unFocused_b7',
                    },
                    Gn = ['title', 'description', 'imgUri', 'state', 'className'];
                function $n() {
                    return (
                        ($n =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        $n.apply(this, arguments)
                    );
                }
                const zn = {
                        [Hn.Hovered]: Wn.base__hovered,
                        [Hn.Normal]: Wn.base__normal,
                        [Hn.UnFocused]: Wn.base__unFocused,
                    },
                    Vn = (e) => {
                        let u = e.title,
                            t = e.description,
                            n = e.imgUri,
                            r = e.state,
                            a = e.className,
                            i = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, Gn);
                        return s().createElement(
                            'div',
                            $n({ className: h()(Wn.base, zn[r], a) }, i),
                            s().createElement(
                                'div',
                                { className: Wn.containerHover },
                                s().createElement('div', { className: Wn.title }, u),
                                s().createElement(
                                    'div',
                                    { className: Wn.normalFlex },
                                    s().createElement('img', { className: Wn.img, src: n, alt: '' }),
                                    s().createElement('div', { className: Wn.description }, t, ' '),
                                ),
                            ),
                        );
                    },
                    jn = {
                        base: 'PickupsRoute_base_27',
                        faded: 'PickupsRoute_faded_a4',
                        texture: 'PickupsRoute_texture_9b',
                        glow: 'PickupsRoute_glow_d2',
                        pageDescription: 'PickupsRoute_pageDescription_2c',
                        pickupsWrapper: 'PickupsRoute_pickupsWrapper_9a',
                        abilityOvercharge: 'PickupsRoute_abilityOvercharge_98',
                        abilityRapidShelling: 'PickupsRoute_abilityRapidShelling_70',
                        abilityBlackHole: 'PickupsRoute_abilityBlackHole_d2',
                        abilityPowerShot: 'PickupsRoute_abilityPowerShot_b9',
                        ability_info: 'PickupsRoute_ability_info_3b',
                        stage: 'PickupsRoute_stage_a6',
                        importantText: 'PickupsRoute_importantText_72',
                    },
                    qn = () => I(R.sounds.ev_cosmic_pickups_hover()),
                    Yn = R.strings.cosmicEvent.pickups,
                    Xn = R.images.cosmic_event.gui.maps.icons.pickups,
                    Kn = {
                        base: 'VehicleRoute_base_95',
                        texture: 'VehicleRoute_texture_f5',
                        glow: 'VehicleRoute_glow_46',
                        sideBarWrapper: 'VehicleRoute_sideBarWrapper_ee',
                        pageDescription: 'VehicleRoute_pageDescription_98',
                        droppedOpacity: 'VehicleRoute_droppedOpacity_e6',
                        stage: 'VehicleRoute_stage_e4',
                        vehicle: 'VehicleRoute_vehicle_ca',
                    };
                let Qn;
                !(function (e) {
                    (e.Shell = 'shell'), (e.Shield = 'shield'), (e.Boost = 'boost');
                })(Qn || (Qn = {}));
                const Zn = () => I(R.sounds.ev_cosmic_lobby_hover()),
                    Jn = (0, X.observer)(({ className: e }) => {
                        const u = (0, a.useState)(null),
                            t = u[0],
                            n = u[1];
                        return s().createElement(
                            'div',
                            { className: h()(Kn.base, e) },
                            s().createElement(
                                'div',
                                { className: Kn.sideBarWrapper },
                                s().createElement(Nt, {
                                    title: R.strings.cosmicEvent.vehicle.title(),
                                    bodyText: R.strings.cosmicEvent.vehicle.description(),
                                    className: h()(Kn.pageDescription, Ee),
                                }),
                                s().createElement(
                                    'div',
                                    { className: me },
                                    s().createElement(Vn, {
                                        onMouseEnter: () => {
                                            Zn(), n(Qn.Shell);
                                        },
                                        onMouseLeave: () => n(null),
                                        state: Un(t, Qn.Shell),
                                        title: R.strings.cosmicEvent.vehicle.aspectList.aspect1.title(),
                                        description: R.strings.cosmicEvent.vehicle.aspectList.aspect1.description(),
                                        imgUri: R.images.cosmic_event.gui.maps.icons.vehicle.slotShell(),
                                    }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: de },
                                    s().createElement(Vn, {
                                        onMouseEnter: () => {
                                            Zn(), n(Qn.Boost);
                                        },
                                        onMouseLeave: () => n(null),
                                        state: Un(t, Qn.Boost),
                                        title: R.strings.cosmicEvent.vehicle.aspectList.aspect2.title(),
                                        description: R.strings.cosmicEvent.vehicle.aspectList.aspect2.description(),
                                        imgUri: R.images.cosmic_event.gui.maps.icons.vehicle.slotBoost(),
                                    }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: _e },
                                    s().createElement(Vn, {
                                        onMouseEnter: () => {
                                            Zn(), n(Qn.Shield);
                                        },
                                        onMouseLeave: () => n(null),
                                        state: Un(t, Qn.Shield),
                                        title: R.strings.cosmicEvent.vehicle.aspectList.aspect3.title(),
                                        description: R.strings.cosmicEvent.vehicle.aspectList.aspect3.description(),
                                        imgUri: R.images.cosmic_event.gui.maps.icons.vehicle.slotShield(),
                                    }),
                                ),
                            ),
                            s().createElement(
                                'div',
                                { className: h()(Kn.stage, oe) },
                                s().createElement(Ln, { className: Kn.vehicle }),
                            ),
                        );
                    }),
                    er = {
                        [z.Main]: In,
                        [z.Artefact]: It,
                        [z.Vehicle]: Jn,
                        [z.Pickups]: ({ className: e }) => {
                            const u = (0, a.useState)(null),
                                t = u[0],
                                n = u[1],
                                r = null !== t,
                                i = (0, a.useCallback)(() => {
                                    n(null);
                                }, []),
                                o = (0, a.useCallback)(() => {
                                    n(ln.Overcharge), qn();
                                }, []),
                                l = (0, a.useCallback)(() => {
                                    n(ln.RapidShelling), qn();
                                }, []),
                                c = (0, a.useCallback)(() => {
                                    n(ln.BlackHole), qn();
                                }, []),
                                E = (0, a.useCallback)(() => {
                                    n(ln.PowerShot), qn();
                                }, []),
                                m = {
                                    important: s().createElement(
                                        'div',
                                        { className: jn.importantText },
                                        Yn.important(),
                                    ),
                                };
                            return s().createElement(
                                'div',
                                { className: h()(jn.base, e) },
                                s().createElement(
                                    'div',
                                    { className: jn.sideBarWrapper },
                                    s().createElement(Nt, {
                                        title: Yn.title(),
                                        bodyText: Yn.description(),
                                        binding: m,
                                        className: h()(jn.pageDescription, Ee),
                                    }),
                                    s().createElement(
                                        'div',
                                        { className: me },
                                        s().createElement(Vn, {
                                            onMouseEnter: o,
                                            onMouseLeave: i,
                                            state: Un(t, ln.Overcharge),
                                            title: Yn.overcharge.title(),
                                            description: Yn.overcharge.description(),
                                            imgUri: Xn.overcharge_slot(),
                                        }),
                                    ),
                                    s().createElement(
                                        'div',
                                        { className: de },
                                        s().createElement(Vn, {
                                            onMouseEnter: l,
                                            onMouseLeave: i,
                                            state: Un(t, ln.RapidShelling),
                                            title: Yn.rapid_shelling.title(),
                                            description: Yn.rapid_shelling.description(),
                                            imgUri: Xn.rapid_shelling_slot(),
                                        }),
                                    ),
                                    s().createElement(
                                        'div',
                                        { className: _e },
                                        s().createElement(Vn, {
                                            onMouseEnter: c,
                                            onMouseLeave: i,
                                            state: Un(t, ln.BlackHole),
                                            title: Yn.black_hole.title(),
                                            description: Yn.black_hole.description(),
                                            imgUri: Xn.black_hole_slot(),
                                        }),
                                    ),
                                    s().createElement(
                                        'div',
                                        { className: Ae },
                                        s().createElement(Vn, {
                                            onMouseEnter: E,
                                            onMouseLeave: i,
                                            state: Un(t, ln.PowerShot),
                                            title: Yn.power_shot.title(),
                                            description: Yn.power_shot.description(),
                                            imgUri: Xn.power_shot_slot(),
                                        }),
                                    ),
                                ),
                                s().createElement(
                                    'div',
                                    { className: h()(jn.stage, oe) },
                                    s().createElement(
                                        Sn,
                                        {
                                            ability: ln.Overcharge,
                                            className: h()(
                                                jn.pickupsWrapper,
                                                jn.abilityOvercharge,
                                                t !== ln.Overcharge && r && jn.faded,
                                            ),
                                            onMouseEnter: o,
                                            onMouseLeave: i,
                                        },
                                        s().createElement(Bn, {
                                            title: Yn.overcharge.label(),
                                            className: h()(jn.ability_info),
                                            layoutDirection: 'right',
                                        }),
                                    ),
                                    s().createElement(
                                        Sn,
                                        {
                                            ability: ln.RapidShelling,
                                            className: h()(
                                                jn.pickupsWrapper,
                                                jn.abilityRapidShelling,
                                                t !== ln.RapidShelling && r && jn.faded,
                                            ),
                                            onMouseEnter: l,
                                            onMouseLeave: i,
                                        },
                                        s().createElement(Bn, {
                                            title: Yn.rapid_shelling.label(),
                                            className: h()(jn.ability_info),
                                            layoutDirection: 'right',
                                        }),
                                    ),
                                    s().createElement(
                                        Sn,
                                        {
                                            ability: ln.BlackHole,
                                            className: h()(
                                                jn.pickupsWrapper,
                                                jn.abilityBlackHole,
                                                t !== ln.BlackHole && r && jn.faded,
                                            ),
                                            onMouseEnter: c,
                                            onMouseLeave: i,
                                        },
                                        s().createElement(Bn, {
                                            title: Yn.black_hole.label(),
                                            className: h()(jn.ability_info),
                                            layoutDirection: 'right',
                                        }),
                                    ),
                                    s().createElement(
                                        Sn,
                                        {
                                            ability: ln.PowerShot,
                                            className: h()(
                                                jn.pickupsWrapper,
                                                jn.abilityPowerShot,
                                                t !== ln.PowerShot && r && jn.faded,
                                            ),
                                            onMouseEnter: E,
                                            onMouseLeave: i,
                                        },
                                        s().createElement(Bn, {
                                            title: Yn.power_shot.label(),
                                            className: h()(jn.ability_info),
                                            layoutDirection: 'right',
                                        }),
                                    ),
                                ),
                            );
                        },
                    },
                    ur = { [z.Main]: xn.route, [z.Artefact]: Tt.route, [z.Vehicle]: Kn.route, [z.Pickups]: jn.route },
                    tr = {
                        [z.Main]: 'CosmicLobbyViewApp_background__main_80',
                        [z.Artefact]: 'CosmicLobbyViewApp_background__artefact_36',
                        [z.Vehicle]: 'CosmicLobbyViewApp_background__vehicle_39',
                        [z.Pickups]: 'CosmicLobbyViewApp_background__pickups_00',
                    },
                    nr = () => H.playHighlight(),
                    rr = (0, X.observer)(() => {
                        const e = se(),
                            u = e.model,
                            t = e.controls,
                            n = u.root.get(),
                            r = u.lobbyRoute.lobbyRoute.get() || z.Main,
                            i = er[r];
                        var o;
                        (o = () => {
                            r === z.Main ? t.onClose() : t.onLobbyRouteChange(z.Main);
                        }),
                            Y(V.n.ESCAPE, o);
                        const l = {
                                [z.Main]: (0, a.useRef)(null),
                                [z.Artefact]: (0, a.useRef)(null),
                                [z.Vehicle]: (0, a.useRef)(null),
                                [z.Pickups]: (0, a.useRef)(null),
                            }[r],
                            c = s().createElement('div', { className: h()('CosmicLobbyViewApp_background_00', tr[r]) });
                        return s().createElement(
                            'div',
                            {
                                className: h()(
                                    'CosmicLobbyViewApp_base_1b',
                                    ur[r],
                                    n.fadeOut && 'CosmicLobbyViewApp_base__fadeOut_49',
                                ),
                            },
                            s().createElement(
                                K.TL,
                                { mode: 'in-out' },
                                s().createElement(
                                    K.Kv,
                                    {
                                        key: r,
                                        classNames: {
                                            appear: le,
                                            appearActive: ie,
                                            appearDone: ce,
                                            enter: le,
                                            enterActive: ie,
                                            enterDone: ce,
                                            exit: 'CosmicLobbyViewApp_route__exit_e2',
                                            exitActive: 'CosmicLobbyViewApp_route__exitActive_7a',
                                            exitDone: 'CosmicLobbyViewApp_route__exitDone_20',
                                        },
                                        timeout: { appear: 20, enter: 20, exit: 150 },
                                    },
                                    s().createElement(
                                        'div',
                                        { ref: l, className: 'CosmicLobbyViewApp_routeWrapper_8a' },
                                        s().createElement(
                                            'div',
                                            { className: 'CosmicLobbyViewApp_routeBackground_b9' },
                                            c,
                                            s().createElement('div', { className: 'CosmicLobbyViewApp_texture_a4' }),
                                            s().createElement('div', { className: 'CosmicLobbyViewApp_glow_86' }),
                                        ),
                                        s().createElement(i, { className: 'CosmicLobbyViewApp_route_7e' }),
                                    ),
                                ),
                            ),
                            s().createElement(
                                'div',
                                { className: 'CosmicLobbyViewApp_header_3b' },
                                s().createElement(
                                    'div',
                                    { className: 'CosmicLobbyViewApp_about_6a' },
                                    s().createElement($, {
                                        caption: R.strings.cosmicEvent.aboutEvent(),
                                        onMouseEnter: nr,
                                        type: 'info',
                                        onClick: t.onAboutEvent,
                                    }),
                                ),
                                s().createElement(Be, { lobbyRoute: r, onLobbyRouteChange: t.onLobbyRouteChange }),
                                s().createElement(
                                    'div',
                                    { className: 'CosmicLobbyViewApp_close_43' },
                                    s().createElement(pe, { onClick: t.onClose, onMouseEnter: nr }),
                                ),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    O().render(
                        s().createElement(ae, null, s().createElement(T, null, s().createElement(rr, null))),
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
        return __webpack_modules__[e].call(t.exports, t, t.exports, __webpack_require__), t.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, u, t, n) => {
            if (!u) {
                var r = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [u, t, n] = deferred[o], a = !0, s = 0; s < u.length; s++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
                        deferred.splice(o--, 1);
                        var i = t();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > n; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [u, t, n];
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
        (() => {
            var e = { 726: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        r,
                        [a, s, i] = t,
                        o = 0;
                    if (a.some((u) => 0 !== e[u])) {
                        for (n in s) __webpack_require__.o(s, n) && (__webpack_require__.m[n] = s[n]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (u && u(t); o < a.length; o++)
                        (r = a[o]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(4502));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
