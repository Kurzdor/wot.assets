(() => {
    'use strict';
    var __webpack_modules__ = {
            527: (e, u, t) => {
                t.r(u), t.d(u, { mouse: () => i, onResize: () => r });
                var a = t(2472),
                    n = t(1176);
                const r = (0, a.E)('clientResized'),
                    o = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') },
                    i = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function u() {
                            e.enabled && (0, n.R)(!1);
                        }
                        function t() {
                            e.enabled && (0, n.R)(!0);
                        }
                        function a() {
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
                        const r = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let n = !0;
                                        const r = `mouse${u}`,
                                            i = o[u]((e) => t([e, 'outside']));
                                        function s(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(r, s),
                                            a(),
                                            () => {
                                                n &&
                                                    (i(),
                                                    window.removeEventListener(r, s),
                                                    (e.listeners -= 1),
                                                    a(),
                                                    (n = !1));
                                            }
                                        );
                                    };
                                })(t)),
                                u
                            ),
                            {},
                        );
                        return Object.assign({}, r, {
                            disable() {
                                (e.enabled = !1), a();
                            },
                            enable() {
                                (e.enabled = !0), a();
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
                t.r(u),
                    t.d(u, {
                        events: () => a,
                        getMouseGlobalPosition: () => r,
                        getSize: () => n,
                        graphicsQuality: () => o,
                    });
                var a = t(527);
                function n(e = 'px') {
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
            1176: (e, u, t) => {
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => a });
            },
            2472: (e, u, t) => {
                function a(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                t.d(u, { E: () => a });
            },
            3138: (e, u, t) => {
                t.d(u, { O: () => n });
                var a = t(5959);
                const n = { view: t(7641), client: a };
            },
            3722: (e, u, t) => {
                function a(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function n(e, u, t) {
                    return `url(${a(e, u, t)})`;
                }
                t.r(u), t.d(u, { getBgUrl: () => n, getTextureUrl: () => a });
            },
            6112: (e, u, t) => {
                t.d(u, { W: () => a });
                const a = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                t.d(u, { U: () => n });
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
            7641: (e, u, t) => {
                t.r(u),
                    t.d(u, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => i,
                        children: () => a,
                        displayStatus: () => n.W,
                        displayStatusIs: () => b,
                        events: () => r.U,
                        extraSize: () => f,
                        forceTriggerMouseMove: () => g,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => w,
                        getScale: () => m,
                        getSize: () => d,
                        getViewGlobalPosition: () => A,
                        isEventHandled: () => v,
                        isFocused: () => h,
                        pxToRem: () => C,
                        remToPx: () => D,
                        resize: () => _,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => B,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => y,
                    });
                var a = t(3722),
                    n = t(6112),
                    r = t(6538),
                    o = t(8566);
                function i(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function s(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, u, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, a);
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
                function _(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function A(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: D(u.x), y: D(u.y) };
                }
                function F() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function m() {
                    return viewEnv.getScale();
                }
                function C(e) {
                    return viewEnv.pxToRem(e);
                }
                function D(e) {
                    return viewEnv.remToPx(e);
                }
                function B(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function h() {
                    return viewEnv.isFocused();
                }
                function p() {
                    return viewEnv.setEventHandled();
                }
                function v() {
                    return viewEnv.isEventHandled();
                }
                function g() {
                    viewEnv.forceTriggerMouseMove();
                }
                function w() {
                    return viewEnv.getShowingStatus();
                }
                const b = Object.keys(n.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === n.W[u]), e),
                        {},
                    ),
                    f = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    y = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : r.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                t.d(u, { qP: () => r });
                const a = ['args'],
                    n = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                o = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                    return n;
                                })(u, a);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, o, {
                                          arguments:
                                              ((n = r),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    r = {
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
                let a, n;
                t.d(u, { n: () => a }),
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
                    })(n || (n = {}));
            },
            1358: (e, u, t) => {
                t.d(u, { Z: () => r });
                var a = t(3138);
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
                        const r = a.O.view.addModelObserver(e, t, n);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(r) : (this._views[t] = [r])))
                                : console.error("Can't add callback for model:", e),
                            r
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
                            const a = this._callbacks[t];
                            void 0 !== a && a(e, u);
                        });
                    }
                }
                n.__instance = void 0;
                const r = n;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
                t.d(u, { Sw: () => r.Z, B3: () => c, Z5: () => o, B0: () => s, ry: () => B });
                class a {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: t }) => {
                                    let a = e.target;
                                    do {
                                        if (a === u) return;
                                        a = a.parentNode;
                                    } while (a);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return a.__instance || (a.__instance = new a()), a.__instance;
                    }
                    register(e, u) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: u });
                    }
                    unregister(e, u) {
                        const t = e,
                            a = u;
                        (this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== a)),
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
                const o = {
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
                let s;
                var l;
                ((l = s || (s = {}))[(l.UNDEFINED = 0)] = 'UNDEFINED'),
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
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var A = t(5521),
                    F = t(3138);
                const m = ['args'];
                function C(e, u, t, a, n, r, o) {
                    try {
                        var i = e[r](o),
                            s = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(s) : Promise.resolve(s).then(a, n);
                }
                const D = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    B = (function () {
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
                                    return new Promise(function (a, n) {
                                        var r = e.apply(u, t);
                                        function o(e) {
                                            C(r, a, n, o, i, 'next', e);
                                        }
                                        function i(e) {
                                            C(r, a, n, o, i, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    h = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const n = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                    return n;
                                })(u, m);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((a = n),
                                              Object.entries(a).map(([e, u]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    p = () => h(s.CLOSE),
                    v = (e, u) => {
                        e.keyCode === A.n.ESCAPE && u();
                    };
                var g = t(7572);
                const w = n.instance,
                    b = {
                        DataTracker: r.Z,
                        ViewModel: g.Z,
                        ViewEventType: s,
                        NumberFormatType: c,
                        RealFormatType: E,
                        TimeFormatType: d,
                        DateFormatType: _,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (e) => h(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => h(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            h(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, a, n = R.invalid('resId'), r) => {
                            const o = F.O.view.getViewGlobalPosition(),
                                i = t.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                E = i.width,
                                d = i.height,
                                _ = {
                                    x: F.O.view.pxToRem(l) + o.x,
                                    y: F.O.view.pxToRem(c) + o.y,
                                    width: F.O.view.pxToRem(E),
                                    height: F.O.view.pxToRem(d),
                                };
                            h(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: n,
                                direction: u,
                                bbox: D(_),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => v(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            v(e, p);
                        },
                        handleViewEvent: h,
                        onBindingsReady: B,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const a in u)
                                if (Object.prototype.hasOwnProperty.call(u, a)) {
                                    const n = Object.prototype.toString.call(u[a]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = u[a];
                                        t[a] = [];
                                        for (let u = 0; u < n.length; u++) t[a].push({ value: e(n[u].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[a] = e(u[a]))
                                            : (t[a] = u[a]);
                                }
                            return t;
                        },
                        ClickOutsideManager: w,
                        SystemLocale: o,
                        UserLocale: i,
                    };
                window.ViewEnvHelper = b;
            },
            9408: (e, u, t) => {
                var a = t(6179),
                    n = t.n(a),
                    r = t(493),
                    o = t.n(r);
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
                var s = t(3138);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function E(e, u, t) {
                    const a = (function (e, u) {
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
                const d = s.O.client.getSize('rem'),
                    _ = d.width,
                    A = d.height,
                    F = Object.assign({ width: _, height: A }, E(_, A, l)),
                    m = (0, a.createContext)(F),
                    C = ['children'],
                    D = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, C);
                        const n = (0, a.useContext)(m),
                            r = n.extraLarge,
                            o = n.large,
                            s = n.medium,
                            l = n.small,
                            c = n.extraSmall,
                            E = n.extraLargeWidth,
                            d = n.largeWidth,
                            _ = n.mediumWidth,
                            A = n.smallWidth,
                            F = n.extraSmallWidth,
                            D = n.extraLargeHeight,
                            B = n.largeHeight,
                            h = n.mediumHeight,
                            p = n.smallHeight,
                            v = n.extraSmallHeight,
                            g = { extraLarge: D, large: B, medium: h, small: p, extraSmall: v };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && r) return u;
                            if (t.large && o) return u;
                            if (t.medium && s) return u;
                            if (t.small && l) return u;
                            if (t.extraSmall && c) return u;
                        } else {
                            if (t.extraLargeWidth && E) return i(u, t, g);
                            if (t.largeWidth && d) return i(u, t, g);
                            if (t.mediumWidth && _) return i(u, t, g);
                            if (t.smallWidth && A) return i(u, t, g);
                            if (t.extraSmallWidth && F) return i(u, t, g);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && D) return u;
                                if (t.largeHeight && B) return u;
                                if (t.mediumHeight && h) return u;
                                if (t.smallHeight && p) return u;
                                if (t.extraSmallHeight && v) return u;
                            }
                        }
                        return null;
                    };
                (D.defaultProps = {
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
                    (0, a.memo)(D);
                const B = (e) => {
                        const u = (0, a.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    h = (0, a.memo)(({ children: e }) => {
                        const u = (0, a.useContext)(m),
                            t = (0, a.useState)(u),
                            r = t[0],
                            o = t[1],
                            i = (0, a.useCallback)((e, u) => {
                                const t = s.O.view.pxToRem(e),
                                    a = s.O.view.pxToRem(u);
                                o(Object.assign({ width: t, height: a }, E(t, a, l)));
                            }, []);
                        B(() => {
                            engine.on('clientResized', i);
                        }),
                            (0, a.useEffect)(() => () => engine.off('clientResized', i), [i]);
                        const c = (0, a.useMemo)(() => Object.assign({}, r), [r]);
                        return n().createElement(m.Provider, { value: c }, e);
                    });
                let p;
                function v(e) {
                    return e.replace(/-/g, '_');
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(p || (p = {}));
                const g = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    w = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    b = (e, u, t = p.left) => e.split(u).reduce(t === p.left ? g : w, []),
                    f = (() => {
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
                    y = ['zh_cn', 'zh_sg', 'zh_tw'];
                let x;
                var k;
                ((k = x || (x = {})).SHORT_DATE = 'short-date'),
                    (k.SHORT_TIME = 'short-time'),
                    (k.SHORT_DATE_TIME = 'short-date-time'),
                    (k.FULL_DATE = 'full-date'),
                    (k.FULL_DATE_TIME = 'full-date-time'),
                    (k.MONTH = 'month'),
                    (k.MONTH_DATE = 'month-date'),
                    (k.DATE_MONTH = 'date-month'),
                    (k.MONTH_YEAR = 'month-year'),
                    (k.WEEK_DAY = 'week-day'),
                    (k.WEEK_DAY_TIME = 'week-day-time'),
                    (k.YEAR = 'year'),
                    (k.DATE_YEAR = 'date-year');
                var S = t(4179);
                Date.now();
                const T = (e = 1) => {
                        const u = new Error().stack;
                        let t,
                            a = R.invalid('resId');
                        return (
                            u &&
                                ((t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                window.__feature &&
                                    window.__feature !== t &&
                                    window.subViews[t] &&
                                    (a = window.subViews[t].id)),
                            { caller: t, stack: u, resId: a }
                        );
                    },
                    L = (e, u) => e.split('.').reduce((e, u) => e && e[u], u),
                    N = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    M = (e, u) => (e.length > 0 ? `${e}.${u}` : u),
                    O = S.Sw.instance;
                let P;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(P || (P = {}));
                const I = (e = 'model', u = P.Deep) => {
                        const t = (0, a.useState)(0),
                            n = (t[0], t[1]),
                            r = (0, a.useMemo)(() => T(), []),
                            o = r.caller,
                            i = r.resId,
                            s = (0, a.useMemo)(
                                () => (window.__feature && window.__feature !== o ? `subViews.${o}.${e}` : e),
                                [o, e],
                            ),
                            l = (0, a.useState)(() =>
                                ((e) => {
                                    const u = L(e, window);
                                    for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                    return N(u) ? u.value : u;
                                })(
                                    ((e) =>
                                        ((e, u) =>
                                            e.split('.').reduce((e, u) => {
                                                const t = L(`${e}.${u}`, window);
                                                return N(t) ? ((e, u) => `${e}.${u}.value`)(e, u) : `${e}.${u}`;
                                            }))(e))(s),
                                ),
                            ),
                            c = l[0],
                            E = l[1],
                            d = (0, a.useRef)(-1);
                        return (
                            B(() => {
                                if (
                                    ('boolean' == typeof u &&
                                        ((u = u ? P.Deep : P.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    u !== P.None)
                                ) {
                                    const t = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            u === P.Deep
                                                ? (e === c && n((e) => e + 1), E(e))
                                                : E(Object.assign([], e));
                                        },
                                        a = ((e) => {
                                            const u = ((e) => {
                                                    const u = T(),
                                                        t = u.caller,
                                                        a = u.resId,
                                                        n =
                                                            window.__feature && window.__feature !== t && t
                                                                ? `subViews.${t}`
                                                                : '';
                                                    return { modelPrefix: n, modelPath: M(n, ''), resId: a };
                                                })(),
                                                t = u.modelPrefix,
                                                a = e.split('.');
                                            if (a.length > 0) {
                                                const e = [a[0]];
                                                return (
                                                    a.reduce((u, a) => {
                                                        const n = L(M(t, `${u}.${a}`), window);
                                                        return N(n)
                                                            ? (e.push(n.id), `${u}.${a}.value`)
                                                            : (e.push(a), `${u}.${a}`);
                                                    }),
                                                    e.reduce((e, u) => e + '.' + u)
                                                );
                                            }
                                            return '';
                                        })(e);
                                    d.current = O.addCallback(a, t, i, u === P.Deep);
                                }
                            }),
                            (0, a.useEffect)(() => {
                                if (u !== P.None)
                                    return () => {
                                        O.removeCallback(d.current, i);
                                    };
                            }, [i, u]),
                            c
                        );
                    },
                    H =
                        (S.Sw.instance,
                        (e) => {
                            const u = (0, a.useRef)();
                            return (
                                (0, a.useEffect)(() => {
                                    u.current = e;
                                }, [e]),
                                u.current
                            );
                        });
                var W = t(6483),
                    V = t.n(W),
                    U = t(5521);
                const j = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function z(e = U.n.NONE, u = j, t = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== U.n.NONE)
                            return (
                                window.addEventListener('keydown', a, t),
                                () => {
                                    window.removeEventListener('keydown', a, t);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === e) {
                                if (s.O.view.isEventHandled()) return;
                                s.O.view.setEventHandled(), u(a), t && a.stopPropagation();
                            }
                        }
                    }, [u, e, t]);
                }
                const $ = (e, u = 'integral') => {
                        let t;
                        return (
                            (t = 'gold' === u ? S.B3.GOLD : S.B3.INTEGRAL),
                            void 0 === e ? '' : S.Z5.getNumberFormat(e, t)
                        );
                    },
                    G = ({ format: e, value: u }) => {
                        const t = $(u, e);
                        return t ? n().createElement('span', null, t) : null;
                    },
                    K = [
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
                function q(e) {
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
                const Y = (e, u, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: S.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    X = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            n = e.args,
                            r = e.onMouseEnter,
                            o = e.onMouseLeave,
                            i = e.onMouseDown,
                            s = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            E = e.ignoreMouseClick,
                            d = void 0 !== E && E,
                            _ = e.decoratorId,
                            A = void 0 === _ ? 0 : _,
                            F = e.isEnabled,
                            m = void 0 === F || F,
                            C = e.targetId,
                            D = void 0 === C ? 0 : C,
                            B = e.onShow,
                            h = e.onHide,
                            p = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, K);
                        const v = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            g = (0, a.useMemo)(() => D || T().resId, [D]),
                            w = (0, a.useCallback)(() => {
                                (v.current.isVisible && v.current.timeoutId) ||
                                    (Y(t, A, { isMouseEvent: !0, on: !0, arguments: q(n) }, g),
                                    B && B(),
                                    (v.current.isVisible = !0));
                            }, [t, A, n, g, B]),
                            b = (0, a.useCallback)(() => {
                                if (v.current.isVisible || v.current.timeoutId) {
                                    const e = v.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (v.current.timeoutId = 0)),
                                        Y(t, A, { on: !1 }, g),
                                        v.current.isVisible && h && h(),
                                        (v.current.isVisible = !1);
                                }
                            }, [t, A, g, h]),
                            f = (0, a.useCallback)((e) => {
                                v.current.isVisible &&
                                    ((v.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (v.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(v.current.prevTarget) && b();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const e = v.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', f, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', f, { capture: !0 }),
                                            e && window.clearTimeout(e);
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
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((y = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((v.current.timeoutId = window.setTimeout(w, c ? 100 : 400)),
                                                          r && r(e),
                                                          y && y(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  b(), null == o || o(u), null == e || e(u);
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  !1 === d && b(), null == s || s(u), null == e || e(u);
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  !1 === d && b(), null == i || i(u), null == e || e(u);
                                              })(u.props.onMouseDown),
                                          },
                                          p,
                                      ),
                                  )
                                : u
                        );
                        var y;
                    },
                    Z = ['children'];
                function Q() {
                    return (
                        (Q =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Q.apply(this, arguments)
                    );
                }
                const J = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                            return n;
                        })(e, Z);
                    return n().createElement(
                        X,
                        Q(
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
                let ee;
                !(function (e) {
                    (e.goldStats = 'goldInfo'),
                        (e.creditsStats = 'creditsInfo'),
                        (e.crystalInfo = 'crystalInfo'),
                        (e.freeXpInfo = 'freeXPInfo');
                })(ee || (ee = {}));
                const ue = 'CurrencyBalance_currency_b6',
                    te = 'CurrencyBalance_errorText_b7',
                    ae = { tooltipId: ee.goldStats },
                    ne = { tooltipId: ee.creditsStats },
                    re = { tooltipId: ee.crystalInfo },
                    oe = { tooltipId: ee.freeXpInfo },
                    ie = '- - -',
                    se = ({ credits: e, golds: u, crystals: t, freexp: a, isWalletAvailable: r }) =>
                        n().createElement(
                            'div',
                            { className: 'CurrencyBalance_base_e7' },
                            n().createElement(
                                J,
                                { args: re },
                                n().createElement(
                                    'span',
                                    { className: V()(ue, 'CurrencyBalance_currency__crystal_7d') },
                                    r
                                        ? n().createElement(G, { value: t, format: 'integral' })
                                        : n().createElement('div', { className: te }, ie),
                                ),
                            ),
                            n().createElement(
                                J,
                                { args: ae },
                                n().createElement(
                                    'span',
                                    { className: V()(ue, 'CurrencyBalance_currency__gold_27') },
                                    r
                                        ? n().createElement(G, { value: u, format: 'gold' })
                                        : n().createElement('div', { className: te }, ie),
                                ),
                            ),
                            n().createElement(
                                J,
                                { args: ne },
                                n().createElement(
                                    'span',
                                    { className: V()(ue, 'CurrencyBalance_currency__credit_7f') },
                                    r
                                        ? n().createElement(G, { value: e, format: 'integral' })
                                        : n().createElement('div', { className: te }, ie),
                                ),
                            ),
                            n().createElement(
                                J,
                                { args: oe },
                                n().createElement(
                                    'span',
                                    { className: V()(ue, 'CurrencyBalance_currency__freexp_06') },
                                    r
                                        ? n().createElement(G, { value: a, format: 'integral' })
                                        : n().createElement('div', { className: te }, ie),
                                ),
                            ),
                        );
                let le, ce, Ee, de;
                !(function (e) {
                    (e.HUNTER = 'hunter'), (e.BOSS = 'boss'), (e.TANK = 'tank');
                })(le || (le = {})),
                    (function (e) {
                        (e.HUNTER = 'hunter'), (e.BOSS = 'boss'), (e.TANK = 'tank');
                    })(ce || (ce = {})),
                    (function (e) {
                        (e.PRIMARY = 'G168_KJpz_T_III'),
                            (e.SECONDARY = 'R212_Object_265T'),
                            (e.MAIN = 'Pl26_Czolg_P_Wz_46'),
                            (e.BOSS = 'Pl26_Czolg_P_Wz_46_Verbesserter');
                    })(Ee || (Ee = {})),
                    (function (e) {
                        (e.PRIMARY = 'G168_KJpz_T_III'),
                            (e.SECONDARY = 'R212_Object_265T'),
                            (e.MAIN = 'Pl26_Czolg_P_Wz_46'),
                            (e.BOSS = 'Pl26_Czolg_P_Wz_46_Verbesserter');
                    })(de || (de = {}));
                const _e = () => {
                    const e = (() => {
                            const e = (0, a.useContext)(m),
                                u = e.small,
                                t = e.medium,
                                n = e.large,
                                r = e.extraLarge,
                                o = r || n,
                                i = o || t;
                            return { isMediaSmall: i || u, isMediaMedium: i, isMediaLarge: o, isMediaExtraLarge: r };
                        })(),
                        u = e.isMediaSmall,
                        t = e.isMediaMedium,
                        n = e.isMediaLarge,
                        r = e.isMediaExtraLarge;
                    return V()(u && 'mediaSmall', t && 'mediaMedium', n && 'mediaLarge', r && 'mediaExtraLarge');
                };
                function Ae(e) {
                    engine.call('PlaySound', e);
                }
                const Fe = {
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
                    me = [
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
                function Ce() {
                    return (
                        (Ce =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Ce.apply(this, arguments)
                    );
                }
                class De extends n().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && Ae(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && Ae(this.props.soundClick);
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
                            a = e.goto,
                            r = e.side,
                            o = e.type,
                            i = e.classNames,
                            s = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            E = e.onMouseUp,
                            d =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        n = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                    return n;
                                })(e, me)),
                            _ = V()(Fe.base, Fe[`base__${o}`], Fe[`base__${r}`], null == i ? void 0 : i.base),
                            A = V()(Fe.icon, Fe[`icon__${o}`], Fe[`icon__${r}`], null == i ? void 0 : i.icon),
                            F = V()(Fe.glow, null == i ? void 0 : i.glow),
                            m = V()(Fe.caption, Fe[`caption__${o}`], null == i ? void 0 : i.caption),
                            C = V()(Fe.goto, null == i ? void 0 : i.goto);
                        return n().createElement(
                            'div',
                            Ce(
                                {
                                    className: _,
                                    onMouseEnter: this._onMouseEnter(s),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(E),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                d,
                            ),
                            'info' !== o && n().createElement('div', { className: Fe.shine }),
                            n().createElement('div', { className: A }, n().createElement('div', { className: F })),
                            n().createElement('div', { className: m }, u),
                            a && n().createElement('div', { className: C }, a),
                        );
                    }
                }
                De.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const Be = ({ onClose: e }) =>
                        n().createElement(
                            'div',
                            { className: 'CloseButton_base_1c' },
                            n().createElement(De, {
                                caption: R.strings.menu.viewHeader.closeBtn.label(),
                                type: 'close',
                                side: 'right',
                                onClick: e,
                            }),
                        ),
                    he = ({ onClick: e, goto: u }) =>
                        n().createElement(
                            'div',
                            { className: 'BackButton_base_2f' },
                            n().createElement(De, {
                                caption: R.strings.menu.viewHeader.backBtn.label(),
                                type: 'back',
                                side: 'left',
                                onClick: e,
                                goto: u,
                            }),
                        );
                let pe, ve, ge;
                !(function (e) {
                    (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                })(pe || (pe = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.width)] = 'Small'),
                            (e[(e.Medium = l.medium.width)] = 'Medium'),
                            (e[(e.Large = l.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                    })(ve || (ve = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.height)] = 'Small'),
                            (e[(e.Medium = l.medium.height)] = 'Medium'),
                            (e[(e.Large = l.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge');
                    })(ge || (ge = {}));
                const we = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function be() {
                    return (
                        (be =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        be.apply(this, arguments)
                    );
                }
                const fe = R.views.common.tooltip_window.simple_tooltip_content,
                    ye = (e) => {
                        let u = e.children,
                            t = e.body,
                            r = e.header,
                            o = e.note,
                            i = e.alert,
                            s = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, we);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, s, { body: t, header: r, note: o, alert: i });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [i, t, r, o, s]);
                        return n().createElement(
                            X,
                            be(
                                {
                                    contentId:
                                        ((E = null == s ? void 0 : s.hasHtmlContent),
                                        E ? fe.SimpleTooltipHtmlContent('resId') : fe.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var E;
                    },
                    xe = ['tooltipType'],
                    ke = ['children', 'wrap'];
                function Re(e, u) {
                    if (null == e) return {};
                    var t,
                        a,
                        n = {},
                        r = Object.keys(e);
                    for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                    return n;
                }
                let Se;
                !(function (e) {
                    (e.Simple = 'simple'), (e.Backport = 'backport'), (e.Base = 'base');
                })(Se || (Se = {}));
                const Te = (e) => (e.tooltipType, Re(e, xe)),
                    Le = (e) => {
                        let u = e.children,
                            t = e.wrap,
                            a = Re(e, ke);
                        const r = t ? n().createElement('div', null, u) : u;
                        return a.tooltipType === Se.Simple
                            ? n().createElement(ye, Te(a), r)
                            : a.tooltipType === Se.Backport
                              ? n().createElement(J, Te(a), r)
                              : ((e) => e.tooltipType === Se.Base)(a)
                                ? n().createElement(X, Te(a), r)
                                : u;
                    },
                    Ne = R.strings.event.WtEventPortals,
                    Me = ({ onBuyButtonClick: e }) => {
                        const u = (0, a.useState)(0),
                            t = u[0],
                            r = u[1],
                            o =
                                (() => {
                                    const e = (0, a.useContext)(m),
                                        u = e.width,
                                        t = e.height,
                                        n = ((e) => {
                                            switch (!0) {
                                                case e.extraLarge:
                                                    return pe.ExtraLarge;
                                                case e.large:
                                                    return pe.Large;
                                                case e.medium:
                                                    return pe.Medium;
                                                case e.small:
                                                    return pe.Small;
                                                case e.extraSmall:
                                                    return pe.ExtraSmall;
                                                default:
                                                    return (
                                                        console.error('Unreachable media context resolution'),
                                                        pe.ExtraSmall
                                                    );
                                            }
                                        })(e),
                                        r = ((e) => {
                                            switch (!0) {
                                                case e.extraLargeWidth:
                                                    return ve.ExtraLarge;
                                                case e.largeWidth:
                                                    return ve.Large;
                                                case e.mediumWidth:
                                                    return ve.Medium;
                                                case e.smallWidth:
                                                    return ve.Small;
                                                case e.extraSmallWidth:
                                                    return ve.ExtraSmall;
                                                default:
                                                    return (
                                                        console.error('Unreachable media context resolution'),
                                                        ve.ExtraSmall
                                                    );
                                            }
                                        })(e),
                                        o = ((e) => {
                                            switch (!0) {
                                                case e.extraLargeHeight:
                                                    return ge.ExtraLarge;
                                                case e.largeHeight:
                                                    return ge.Large;
                                                case e.mediumHeight:
                                                    return ge.Medium;
                                                case e.smallHeight:
                                                    return ge.Small;
                                                case e.extraSmallHeight:
                                                    return ge.ExtraSmall;
                                                default:
                                                    return (
                                                        console.error('Unreachable media context resolution'),
                                                        ge.ExtraSmall
                                                    );
                                            }
                                        })(e);
                                    return {
                                        mediaSize: n,
                                        mediaWidth: r,
                                        mediaHeight: o,
                                        remScreenWidth: u,
                                        remScreenHeight: t,
                                    };
                                })().mediaSize >= pe.Medium,
                            i = (0, a.useCallback)(() => {
                                e(), Ae('play');
                            }, [e]),
                            s = (0, a.useCallback)(() => {
                                Ae('highlight');
                            }, []),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            E = () => {
                                const e = [l, c].sort(
                                    (e, u) =>
                                        (u.current ? u.current.offsetWidth : 0) -
                                        (e.current ? e.current.offsetWidth : 0),
                                )[0];
                                window.requestAnimationFrame(() => {
                                    e.current && r(e.current.offsetWidth);
                                });
                            };
                        (0, a.useEffect)(
                            () => (
                                E(),
                                window.addEventListener('resize', E),
                                () => {
                                    window.removeEventListener('resize', E);
                                }
                            ),
                            [],
                        );
                        const d = { tooltipType: Se.Simple, body: Ne.buyButtonTooltip() },
                            _ = (0, a.useMemo)(() => ({ width: `${t}px` }), [t]);
                        return n().createElement(
                            Le,
                            d,
                            n().createElement(
                                'div',
                                { className: 'BuyButton_base_33', style: _, onMouseEnter: s, onClick: i },
                                n().createElement('div', { className: 'BuyButton_image_9e', ref: l }),
                                n().createElement('div', { className: 'BuyButton_imageClickArea_81' }),
                                n().createElement('div', { className: 'BuyButton_text_da', ref: c }, Ne.buyButton()),
                                n().createElement(
                                    'div',
                                    {
                                        className: 'BuyButton_flareWrapper_58',
                                        style: {
                                            maskImage: `url('R.images.white_tiger.gui.maps.icons.portals.buy_key_button${o ? '_large' : ''}')`,
                                        },
                                    },
                                    n().createElement('div', { className: 'BuyButton_flare_ed' }),
                                ),
                            ),
                        );
                    },
                    Oe = (e, u) => {
                        let t;
                        const a = setTimeout(() => {
                            t = e();
                        }, u);
                        return () => {
                            'function' == typeof t && t(), clearTimeout(a);
                        };
                    },
                    Pe = 1.6,
                    Ie = (e, u = 150, t = 400, a = 1e3) => ({ appear: t + (u * e + 1), enter: a }),
                    He = (e) => (u, t) =>
                        u / t >= 2.4000000000000004
                            ? e(viewEnv.remToPx(t) * Pe, viewEnv.remToPx(t), u, t)
                            : e(viewEnv.remToPx(u), 0.625 * viewEnv.remToPx(u), u, t),
                    We = He((e, u, t, a) => {
                        const n = { width: viewEnv.remToPx(900) * Pe, height: viewEnv.remToPx(900) },
                            r = { width: viewEnv.remToPx(1200) * Pe, height: viewEnv.remToPx(1200) };
                        return e < n.width
                            ? n
                            : t > l.medium.width && a > l.medium.height && e < r.width
                              ? r
                              : { width: e, height: u };
                    }),
                    Ve =
                        (He((e, u) => {
                            const t = { width: viewEnv.remToPx(700) * Pe, height: viewEnv.remToPx(700) };
                            return e < t.width ? t : { width: e, height: u };
                        }),
                        {
                            base: 'SwfAwardVideo_base_04',
                            wrapper: 'SwfAwardVideo_wrapper_11',
                            video__hidden: 'SwfAwardVideo_video__hidden_47',
                            vignette: 'SwfAwardVideo_vignette_d1',
                            slideUp: 'SwfAwardVideo_slideUp_ce',
                            fadeOut: 'SwfAwardVideo_fadeOut_9d',
                            fadeIn: 'SwfAwardVideo_fadeIn_9a',
                            fadeInScale: 'SwfAwardVideo_fadeInScale_62',
                            fadeInWithScale: 'SwfAwardVideo_fadeInWithScale_62',
                            scale: 'SwfAwardVideo_scale_71',
                            raysAppearance: 'SwfAwardVideo_raysAppearance_d4',
                            rotate: 'SwfAwardVideo_rotate_94',
                            fadeTop: 'SwfAwardVideo_fadeTop_03',
                            fadeBot: 'SwfAwardVideo_fadeBot_70',
                        }),
                    Ue = 'wt_portal_open_swf',
                    je = {
                        [le.HUNTER]: '../../videos/wt_event/hunter_portal_open.usm',
                        [le.BOSS]: '../../videos/wt_event/boss_portal_open.usm',
                    },
                    ze = {
                        [de.PRIMARY]: '../../videos/wt_event/primary_tank_portal_idle.usm',
                        [de.SECONDARY]: '../../videos/wt_event/secondary_tank_portal_idle.usm',
                        [de.MAIN]: '../../videos/wt_event/main_tank_portal_idle.usm',
                        [de.BOSS]: '../../videos/wt_event/boss_tank_portal_idle.usm',
                    },
                    $e = 'wt_tank_show_swf',
                    Ge = {
                        [de.PRIMARY]: '../../videos/wt_event/primary_tank_portal_show.usm',
                        [de.SECONDARY]: '../../videos/wt_event/secondary_tank_portal_show.usm',
                        [de.MAIN]: '../../videos/wt_event/main_tank_portal_show.usm',
                        [de.BOSS]: '../../videos/wt_event/boss_tank_portal_show.usm',
                    },
                    Ke = { [Ue]: '', [$e]: '' },
                    qe = 'viewEnv.onSwfEvent';
                var Ye;
                !(function (e) {
                    (e.VideoReady = 'onPlaybackReady'), (e.TankAppearanceVideoComplete = 'onPlaybackComplete');
                })(Ye || (Ye = {}));
                const Xe = (e, u, ...t) => {
                        const a = JSON.stringify({ command: u, data: t });
                        swfPlayer.gotoAndPlayLabel(e, a);
                    },
                    Ze = 'clientMinimized',
                    Qe = ({
                        portalType: e,
                        vehicleType: u = de.PRIMARY,
                        onVideoReady: t,
                        onVideoComplete: r,
                        isContentVisible: o,
                        isVideoReady: i,
                        swfSource: s,
                        shouldApplyRewardDelay: l,
                        skipTankVideo: c = !1,
                    }) => {
                        const E = (0, a.useContext)(m),
                            d = I('model'),
                            _ = d.onVideoStarted,
                            A = d.onPortalRewardsStarted,
                            F = d.isWindowAccessible,
                            C = (0, a.useState)(e === le.TANK),
                            D = C[0],
                            B = C[1],
                            h = (0, a.useState)(!1),
                            p = h[0],
                            v = h[1],
                            g = H(e),
                            w = (0, a.useRef)(),
                            b = (0, a.useRef)(),
                            f = (0, a.useRef)(),
                            y = (0, a.useCallback)(() => {
                                f.current ||
                                    (f.current = window.setTimeout(
                                        () => {
                                            r(), (f.current = void 0);
                                        },
                                        l ? 1e3 : 0,
                                    ));
                            }, [r, l]);
                        (0, a.useEffect)(
                            () =>
                                Oe(() => {
                                    t(), r();
                                }, 14e3),
                            [t, r],
                        ),
                            (0, a.useEffect)(
                                () => () => {
                                    i && !o && y();
                                },
                                [o, i, r, y],
                            ),
                            (0, a.useEffect)(
                                () => () => {
                                    f.current && clearTimeout(f.current);
                                },
                                [],
                            );
                        const x = (0, a.useCallback)(
                            (u) => {
                                switch (u) {
                                    case Ye.VideoReady:
                                        t(), e !== le.TANK && y();
                                        break;
                                    case Ye.TankAppearanceVideoComplete:
                                        B(!1), r(), p || (A(), v(!0));
                                }
                            },
                            [t, e, r, y, A, p],
                        );
                        (0, a.useEffect)(() => {
                            c && x(Ye.TankAppearanceVideoComplete);
                        }, [c, x]),
                            (0, a.useEffect)(() => {
                                const t = e === le.TANK ? $e : Ue,
                                    a = g && (g === le.TANK ? $e : Ue),
                                    n = (e) => {
                                        w.current &&
                                            (swfPlayer.removeEventListener(e, w.current), (w.current = void 0)),
                                            b.current &&
                                                (swfPlayer.removeEventListener($e, b.current), (b.current = void 0));
                                    };
                                a && n(a);
                                const r = ((a) => {
                                    let n,
                                        r = null;
                                    return (
                                        (r = requestAnimationFrame(() => {
                                            r = requestAnimationFrame(() => {
                                                (r = null),
                                                    (n = (() => {
                                                        Xe(Ue, 'stopVideo'), Xe(Ue, 'playVideo');
                                                        const a = e === le.TANK ? ze[u] : je[e];
                                                        Ke.wt_portal_open_swf !== a &&
                                                            ((Ke.wt_portal_open_swf = a), Xe(Ue, 'loadVideo', a)),
                                                            (w.current = swfPlayer.addEventListener(
                                                                t,
                                                                'onPlaybackReady',
                                                                !1,
                                                                0,
                                                            )),
                                                            e === le.TANK &&
                                                                (Xe($e, 'playVideo'),
                                                                Ke.wt_tank_show_swf !== Ge[u] &&
                                                                    ((Ke.wt_tank_show_swf = Ge[u]),
                                                                    Xe($e, 'loadVideo', Ge[u]),
                                                                    _()),
                                                                (b.current = swfPlayer.addEventListener(
                                                                    $e,
                                                                    'onPlaybackComplete',
                                                                    !1,
                                                                    1,
                                                                )));
                                                    })());
                                            });
                                        })),
                                        () => {
                                            'function' == typeof n && n(), null !== r && cancelAnimationFrame(r);
                                        }
                                    );
                                })();
                                return (
                                    engine.on(qe, x),
                                    () => {
                                        r(), n(t), engine.off(qe, x);
                                    }
                                );
                            }, [e, u, x, g, A, _]),
                            (0, a.useEffect)(() => {
                                const e = (e) => {
                                    const t = e ? 'pauseVideo' : 'playVideo';
                                    Xe(Ue, t), Ke.wt_tank_show_swf === Ge[u] && Xe($e, t);
                                };
                                return (
                                    engine.on(Ze, e),
                                    e(!F),
                                    () => {
                                        engine.off(Ze, e);
                                    }
                                );
                            }, [F, u]);
                        const k = (0, a.useMemo)(() => We(E.width, E.height), [E.width, E.height]),
                            R = V()(Ve.video, D && Ve.video__hidden);
                        return n().createElement(
                            'div',
                            { className: Ve.base },
                            n().createElement(
                                'div',
                                { className: Ve.wrapper },
                                n().createElement('img', {
                                    alt: 'Tank Idle Video',
                                    className: R,
                                    style: k,
                                    src: `${s}wt_portal_open_swf`,
                                }),
                                D &&
                                    n().createElement('img', {
                                        alt: 'Tank Appearance Video',
                                        className: Ve.video,
                                        style: k,
                                        src: `${s}wt_tank_show_swf`,
                                    }),
                            ),
                            n().createElement(
                                'div',
                                { className: Ve.wrapper },
                                n().createElement('div', { className: Ve.vignette, style: k }),
                            ),
                        );
                    },
                    Je = ({ hasAnimation: e = !1 }) => {
                        const u = V()('Gradient_base_c7', e && 'Gradient_base__hasAnimation_15');
                        return n().createElement('div', { className: u });
                    },
                    eu = 100,
                    uu = ({ animationDelayStepsCount: e = 1, children: u }) =>
                        n().createElement(
                            'div',
                            { className: 'DelayedAnimationWrapper_base_af', style: { animationDelay: e * eu + 'ms' } },
                            u,
                        );
                let tu, au, nu, ru;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(tu || (tu = {})),
                    (function (e) {
                        (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                    })(au || (au = {})),
                    (function (e) {
                        (e.primary = 'primary'), (e.main = 'main');
                    })(nu || (nu = {})),
                    (function (e) {
                        (e.Center = 'center'), (e.Bottom = 'bottom');
                    })(ru || (ru = {}));
                const ou = {
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
                    iu = [
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
                function su() {
                    return (
                        (su =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        su.apply(this, arguments)
                    );
                }
                const lu = (e) => {
                        let u = e.id,
                            t = e.isChecked,
                            r = void 0 !== t && t,
                            o = e.isDisabled,
                            i = void 0 !== o && o,
                            s = e.isAlert,
                            l = void 0 !== s && s,
                            c = e.size,
                            E = void 0 === c ? au.medium : c,
                            d = e.type,
                            _ = void 0 === d ? nu.primary : d,
                            A = e.soundHover,
                            F = void 0 === A ? 'highlight' : A,
                            m = e.soundClick,
                            C = void 0 === m ? 'play' : m,
                            D = e.onMouseEnter,
                            B = e.onMouseLeave,
                            h = e.onMouseUp,
                            p = e.onMouseDown,
                            v = e.onClick,
                            g = e.onChange,
                            w = e.onFocus,
                            b = e.onBlur,
                            f = e.text,
                            y = e.contentStyles,
                            x = e.children,
                            k = e.alignment,
                            R = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, iu);
                        const S = (0, a.useState)(!1),
                            T = S[0],
                            L = S[1],
                            N = (0, a.useState)(!1),
                            M = (N[0], N[1]),
                            O = (0, a.useCallback)(
                                (e) => {
                                    i || (g && g(), v && v(e));
                                },
                                [i, g, v],
                            ),
                            P = (0, a.useCallback)(
                                (e) => {
                                    const u = e.button === tu.LEFT;
                                    i || (u && L(!0), u && p && p(e), C && Ae(C));
                                },
                                [i, p, C],
                            ),
                            I = (0, a.useCallback)(
                                (e) => {
                                    i || (L(!1), h && h(e));
                                },
                                [i, h],
                            ),
                            H = (0, a.useCallback)(
                                (e) => {
                                    i || (D && D(e), F && Ae(F));
                                },
                                [i, D, F],
                            ),
                            W = (0, a.useCallback)(
                                (e) => {
                                    i || (L(!1), B && B(e));
                                },
                                [i, B],
                            ),
                            U = (0, a.useCallback)(
                                (e) => {
                                    i || (M(!0), w && w(e));
                                },
                                [i, w],
                            ),
                            j = (0, a.useCallback)(
                                (e) => {
                                    i || (M(!1), b && b(e));
                                },
                                [i, b],
                            ),
                            z = n().createElement(
                                'div',
                                { className: ou.label },
                                n().createElement(
                                    'div',
                                    { className: V()(ou.labelContent, 's-labelContent'), style: y },
                                    f || x,
                                ),
                            );
                        return n().createElement(
                            'div',
                            su(
                                {
                                    id: u,
                                    className: V()(ou.base, ou[`base__${E}`], ou[`base__${_}`], {
                                        [ou.base__checked]: r,
                                        [ou.base__disabled]: i,
                                        [ou.base__mouseDown]: T,
                                        [ou.base__alert]: l,
                                        [ou.base__center]: k === ru.Center,
                                        [ou.base__bottom]: k === ru.Bottom,
                                    }),
                                    onClick: O,
                                    onMouseEnter: H,
                                    onMouseLeave: W,
                                    onMouseDown: P,
                                    onMouseUp: I,
                                    onFocus: U,
                                    onBlur: j,
                                },
                                R,
                            ),
                            n().createElement(
                                'div',
                                { className: ou.input },
                                n().createElement('div', { className: ou.alertOverlay }),
                                n().createElement('div', { className: ou.inputHoverOverlay }),
                                n().createElement('div', { className: ou.highlight }),
                            ),
                            n().createElement('div', { className: ou.checkmark }),
                            ((f || x) && z) || null,
                        );
                    },
                    cu = ({ isChecked: e, onClick: u }) =>
                        n().createElement(
                            'div',
                            { className: 'AnimationCheckbox_animationCheckbox_c5' },
                            n().createElement(lu, {
                                text: R.strings.event.WtEventPortals.inside.showAnimation(),
                                size: au.large,
                                onClick: u,
                                isChecked: e,
                            }),
                        ),
                    Eu = (0, a.memo)(
                        ({
                            title: e,
                            children: u,
                            portalType: t,
                            vehicleType: r = de.PRIMARY,
                            isBoxesEnabled: o,
                            lootBoxesAnimationDelayCount: i,
                            onBuy: s,
                            onBackToPortal: l,
                            onClose: c,
                            availableLootBoxesPurchase: E,
                            openedBoxesCount: d = 0,
                            hasGradient: _ = !1,
                            showFinalAnimation: A = !0,
                            isAnimated: F = !0,
                            onAnimationSettingClick: m,
                            launchId: C,
                            showCurrencyBalance: D = !1,
                            currentCrystals: B = 0,
                            currentGold: h = 0,
                            currentCredits: p = 0,
                            currentFreeXP: v = 0,
                            isWalletAvailable: g = !1,
                        }) => {
                            const w = (0, a.useState)(!1),
                                b = w[0],
                                f = w[1],
                                y = (0, a.useState)(!1),
                                x = y[0],
                                k = y[1],
                                S = (0, a.useState)(!1),
                                T = S[0],
                                L = S[1];
                            var N;
                            (N = () => {
                                A ? c() : t === le.TANK && L(!0);
                            }),
                                z(U.n.ESCAPE, N),
                                (0, a.useEffect)(() => {
                                    k(!1);
                                }, [d, C]);
                            const M = (0, a.useCallback)(() => {
                                    m && m();
                                }, [m]),
                                O = (0, a.useCallback)(() => {
                                    f(!0);
                                }, []),
                                P = (0, a.useCallback)(() => {
                                    k(!0);
                                }, []),
                                I = (0, a.useCallback)(() => {
                                    l();
                                }, [l]),
                                H = i + 1,
                                W = _e(),
                                j = V()('AwardWrapper_base_85', !b && 'AwardWrapper_base__hidden_b6', W),
                                $ = !F || (x && _);
                            return n().createElement(
                                'div',
                                { className: j },
                                n().createElement(Qe, {
                                    key: C,
                                    portalType: t,
                                    vehicleType: r,
                                    onVideoReady: O,
                                    onVideoComplete: P,
                                    isContentVisible: x,
                                    isVideoReady: b,
                                    swfSource: 'swf://gui/flash/animations/wt_event/usm_video_player.swf?name=',
                                    shouldApplyRewardDelay: F,
                                    skipTankVideo: T,
                                }),
                                $ && n().createElement(Je, { hasAnimation: !0 }),
                                x &&
                                    n().createElement(
                                        n().Fragment,
                                        null,
                                        n().createElement('div', { className: 'AwardWrapper_title_09' }, e),
                                        n().createElement('div', { className: 'AwardWrapper_content_65' }, u),
                                    ),
                                A &&
                                    n().createElement(
                                        uu,
                                        { animationDelayStepsCount: H },
                                        n().createElement(
                                            'div',
                                            { className: 'AwardWrapper_headerButtonWrapper_45' },
                                            n().createElement(Be, { onClose: c }),
                                            n().createElement(he, {
                                                onClick: I,
                                                goto: R.strings.event.portalAward.backTo(),
                                            }),
                                        ),
                                        D &&
                                            n().createElement(
                                                'div',
                                                { className: 'AwardWrapper_currencyWrapper_2a' },
                                                n().createElement(
                                                    'div',
                                                    { className: 'AwardWrapper_currencyBgWrapper_11' },
                                                    n().createElement(se, {
                                                        crystals: B,
                                                        golds: h,
                                                        credits: p,
                                                        freexp: v,
                                                        isWalletAvailable: g,
                                                    }),
                                                ),
                                                n().createElement('div', {
                                                    className: 'AwardWrapper_backgroundSeperator_76',
                                                }),
                                            ),
                                        o &&
                                            t !== le.HUNTER &&
                                            n().createElement(Me, {
                                                onBuyButtonClick: s,
                                                availableLootBoxesPurchase: E,
                                            }),
                                        m && n().createElement(cu, { isChecked: F, onClick: M }),
                                    ),
                            );
                        },
                    ),
                    du = {
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
                let _u, Au;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(_u || (_u = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(Au || (Au = {}));
                const Fu = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: r,
                    disabled: o,
                    mixClass: i,
                    soundHover: s,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: E,
                    onMouseDown: d,
                    onMouseUp: _,
                    onMouseLeave: A,
                    onClick: F,
                }) => {
                    const m = (0, a.useRef)(null),
                        C = (0, a.useState)(t),
                        D = C[0],
                        B = C[1],
                        h = (0, a.useState)(!1),
                        p = h[0],
                        v = h[1],
                        g = (0, a.useState)(!1),
                        w = g[0],
                        b = g[1],
                        f = (0, a.useCallback)(() => {
                            o || (m.current && (m.current.focus(), B(!0)));
                        }, [o]),
                        y = (0, a.useCallback)(
                            (e) => {
                                D && null !== m.current && !m.current.contains(e.target) && B(!1);
                            },
                            [D],
                        ),
                        x = (0, a.useCallback)(
                            (e) => {
                                o || (F && F(e));
                            },
                            [o, F],
                        ),
                        k = (0, a.useCallback)(
                            (e) => {
                                o || (null !== s && Ae(s), c && c(e), b(!0));
                            },
                            [o, s, c],
                        ),
                        S = (0, a.useCallback)(
                            (e) => {
                                E && E(e);
                            },
                            [E],
                        ),
                        T = (0, a.useCallback)(
                            (e) => {
                                o || (_ && _(e), v(!1));
                            },
                            [o, _],
                        ),
                        L = (0, a.useCallback)(
                            (e) => {
                                o || (null !== l && Ae(l), d && d(e), t && f(), v(!0));
                            },
                            [o, l, d, f, t],
                        ),
                        N = (0, a.useCallback)(
                            (e) => {
                                o || (A && A(e), v(!1));
                            },
                            [o, A],
                        ),
                        M = V()(
                            du.base,
                            du[`base__${r}`],
                            {
                                [du.base__disabled]: o,
                                [du[`base__${u}`]]: u,
                                [du.base__focus]: D,
                                [du.base__highlightActive]: p,
                                [du.base__firstHover]: w,
                            },
                            i,
                        ),
                        O = V()(du.state, du.state__default);
                    return (
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mousedown', y),
                                () => {
                                    document.removeEventListener('mousedown', y);
                                }
                            ),
                            [y],
                        ),
                        (0, a.useEffect)(() => {
                            B(t);
                        }, [t]),
                        n().createElement(
                            'div',
                            {
                                ref: m,
                                className: M,
                                onMouseEnter: k,
                                onMouseMove: S,
                                onMouseUp: T,
                                onMouseDown: L,
                                onMouseLeave: N,
                                onClick: x,
                            },
                            r !== _u.ghost &&
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement('div', { className: du.back }),
                                    n().createElement('span', { className: du.texture }),
                                ),
                            n().createElement(
                                'span',
                                { className: O },
                                n().createElement('span', { className: du.stateDisabled }),
                                n().createElement('span', { className: du.stateHighlightHover }),
                                n().createElement('span', { className: du.stateHighlightActive }),
                            ),
                            n().createElement(
                                'span',
                                { className: du.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                Fu.defaultProps = { type: _u.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const mu = (0, a.memo)(Fu),
                    Cu = ({ binding: e, text: u = '', classMix: t, alignment: r = p.left }) =>
                        null === u
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : n().createElement(
                                  a.Fragment,
                                  null,
                                  u.split('\n').map((u, o) =>
                                      n().createElement(
                                          'div',
                                          { className: V()('FormatText_base_d0', t), key: `${u}-${o}` },
                                          ((e, u, t) =>
                                              e.split(/%\((.*?)\)(?:[sd])?/g).map((e) =>
                                                  t && e in t
                                                      ? t[e]
                                                      : ((e, u = p.left) => {
                                                            const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                            return y.includes(t)
                                                                ? f(e)
                                                                : ((e, u = p.left) => {
                                                                      let t = [];
                                                                      const a =
                                                                              /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                          n = e.replace(/&nbsp;/g, ' ');
                                                                      return (
                                                                          b(n, /( )/, u).forEach(
                                                                              (e) => (t = t.concat(b(e, a, p.left))),
                                                                          ),
                                                                          t
                                                                      );
                                                                  })(e, u);
                                                        })(e, u),
                                              ))(u, r, e).map((e, u) =>
                                              n().createElement(a.Fragment, { key: `${u}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              ),
                    Du = R.strings.event.WtEventPortals,
                    Bu = ({ type: e, lootBoxesCount: u, animationDelayStepsCount: t = 0 }) => {
                        const r = e === ce.HUNTER,
                            o = (0, a.useMemo)(() => ({ isHunterLootBox: r }), [r]),
                            i = (0, a.useMemo)(
                                () => ({
                                    number: n().createElement(
                                        X,
                                        {
                                            contentId: R.views.white_tiger.lobby.tooltips.LootBoxTooltipView('resId'),
                                            args: o,
                                        },
                                        n().createElement(
                                            'div',
                                            { className: 'LootBoxesCount_valueWrapper_a1' },
                                            n().createElement('div', {
                                                className: V()(
                                                    'LootBoxesCount_value_41',
                                                    r && 'LootBoxesCount_value__hunter_57',
                                                ),
                                            }),
                                            u,
                                        ),
                                    ),
                                }),
                                [r, o, u],
                            ),
                            s = (0, a.useMemo)(() => ({ animationDelay: t * eu + 'ms' }), [t]);
                        return n().createElement(
                            'div',
                            { className: 'LootBoxesCount_base_37', style: s },
                            0 === u
                                ? Du.inside.currentKeysAmountIs0[e]()
                                : n().createElement(Cu, { text: Du.inside.currentKeysAmount[e](), binding: i }),
                        );
                    },
                    hu = R.strings.event.portalAward,
                    pu = ({
                        isBoxesEnabled: e,
                        isBossLootBox: u,
                        claimReward: t,
                        quantityKeys: r,
                        footerAnimationDelayCount: o,
                    }) => {
                        const i = (0, a.useMemo)(() => ({ isHunterLootBox: !u }), [u]),
                            s = (0, a.useMemo)(() => (u ? ce.BOSS : ce.HUNTER), [u]),
                            l = V()('ClaimButton_base_62', !u && 'ClaimButton_base__hunter_ea');
                        return n().createElement(
                            'div',
                            { className: l },
                            e &&
                                r > 0 &&
                                n().createElement(
                                    X,
                                    {
                                        contentId: R.views.white_tiger.lobby.tooltips.LootBoxTooltipView('resId'),
                                        args: i,
                                    },
                                    n().createElement(
                                        'div',
                                        { className: 'ClaimButton_runPriceWrapper_76' },
                                        1,
                                        n().createElement('div', { className: 'ClaimButton_priceValue_54' }),
                                    ),
                                ),
                            n().createElement(
                                mu,
                                { size: Au.medium, onClick: t, mixClass: 'ClaimButton_claimBtn_27' },
                                r > 0 ? hu.claimAndContinueButton() : hu.claimRewardButton(),
                            ),
                            e &&
                                n().createElement(
                                    'div',
                                    { className: 'ClaimButton_lootBoxCountWrapper_4f' },
                                    n().createElement(Bu, { type: s, lootBoxesCount: r, animationDelayStepsCount: o }),
                                ),
                        );
                    },
                    vu = R.strings.event.WtEventPortals,
                    gu = ({ animationDelayStepsCount: e = 1 }) => {
                        const u = (0, a.useMemo)(() => ({ animationDelay: e * eu + 'ms' }), [e]);
                        return n().createElement(
                            'div',
                            { className: 'LootBoxDisabledWarning_basePortal_47', style: u },
                            n().createElement(
                                'div',
                                { className: 'LootBoxDisabledWarning_wrapper_ce' },
                                n().createElement('div', { className: 'LootBoxDisabledWarning_hintIcon_8c' }),
                                n().createElement(
                                    'div',
                                    { className: 'LootBoxDisabledWarning_textWrapper_2d' },
                                    vu.warning(),
                                ),
                            ),
                        );
                    },
                    wu = {
                        base: 'AttemptsLeft_base_15',
                        show: 'AttemptsLeft_show_fa',
                        iconContainer: 'AttemptsLeft_iconContainer_02',
                        highlight: 'AttemptsLeft_highlight_32',
                        'translate-down': 'AttemptsLeft_translate-down_fe',
                        'translate-up': 'AttemptsLeft_translate-up_11',
                    },
                    bu = R.strings.event.WtEventPortals,
                    fu = R.strings.event.portalAward,
                    yu = ({
                        leftAttemptsCount: e,
                        animationDelayStepsCount: u = 0,
                        displayText: t = bu.boss.left(),
                        isTextChangable: r = !0,
                        isBossLootBox: o,
                    }) => {
                        const i = r && 1 === e,
                            s = (0, a.useMemo)(
                                () => ({
                                    attemptsCount: n().createElement('div', { className: wu.highlight }, e),
                                    leftAttemptsCount: n().createElement('div', { className: wu.highlight }, e),
                                }),
                                [e],
                            ),
                            l = (0, a.useMemo)(() => ({ animationDelay: u * eu + 'ms' }), [u]);
                        return void 0 === o
                            ? n().createElement(
                                  X,
                                  {
                                      contentId:
                                          R.views.white_tiger.lobby.tooltips.GuaranteedRewardTooltipView('resId'),
                                  },
                                  n().createElement(
                                      'div',
                                      { style: l, className: wu.base },
                                      i
                                          ? n().createElement('div', { className: wu.attemptsLeft }, bu.boss.oneLeft())
                                          : n().createElement(Cu, { text: t, binding: s, classMix: wu.attemptsLeft }),
                                      n().createElement('div', { className: wu.iconContainer }),
                                  ),
                              )
                            : n().createElement(
                                  ye,
                                  {
                                      header: fu.reRollTooltipHeader(),
                                      body: o ? fu.reRollTooltipBossBody() : fu.reRollTooltipHunterBody(),
                                  },
                                  n().createElement(
                                      'div',
                                      { style: l, className: wu.base },
                                      i
                                          ? n().createElement('div', { className: wu.attemptsLeft }, bu.boss.oneLeft())
                                          : n().createElement(Cu, { text: t, binding: s, classMix: wu.attemptsLeft }),
                                      n().createElement('div', { className: wu.iconContainer }),
                                  ),
                              );
                    },
                    xu = {
                        base: 'Preview_base_1f',
                        base__hovered: 'Preview_base__hovered_ee',
                        icon: 'Preview_icon_f3',
                        icon__small: 'Preview_icon__small_a1',
                        icon__normal: 'Preview_icon__normal_5c',
                        base__mouseDown: 'Preview_base__mouseDown_d0',
                        label: 'Preview_label_2e',
                        base__visibleLabel: 'Preview_base__visibleLabel_92',
                    },
                    ku = [
                        'label',
                        'isVisibleLabel',
                        'autofocus',
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
                function Ru() {
                    return (
                        (Ru =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Ru.apply(this, arguments)
                    );
                }
                let Su;
                !(function (e) {
                    (e.SMALL = 'small'), (e.NORMAL = 'normal');
                })(Su || (Su = {}));
                const Tu = (0, a.memo)((e) => {
                        let u = e.label,
                            t = e.isVisibleLabel,
                            r = void 0 !== t && t,
                            o = e.autofocus,
                            i = void 0 !== o && o,
                            s = e.soundHover,
                            l = void 0 === s ? 'highlight' : s,
                            c = e.soundClick,
                            E = void 0 === c ? 'play' : c,
                            d = e.size,
                            _ = void 0 === d ? Su.NORMAL : d,
                            A = e.onClick,
                            F = e.onMouseEnter,
                            m = e.onMouseLeave,
                            C = e.onMouseDown,
                            D = e.onMouseUp,
                            B = e.onFocus,
                            h = e.onBlur,
                            p = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, ku);
                        const v = (0, a.useState)(!1),
                            g = v[0],
                            w = v[1],
                            b = (0, a.useState)(!1),
                            f = b[0],
                            y = b[1],
                            x = (0, a.useState)(i),
                            k = x[0],
                            R = x[1],
                            S = (0, a.useRef)(null),
                            T = (0, a.useCallback)(() => {
                                S.current && (S.current.focus(), R(!0));
                            }, []),
                            L = (0, a.useCallback)(
                                (e) => {
                                    k && null !== S.current && !S.current.contains(e.target) && R(!1);
                                },
                                [k],
                            );
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mousedown', L),
                                () => {
                                    document.removeEventListener('mousedown', L);
                                }
                            ),
                            [L],
                        ),
                            (0, a.useEffect)(() => {
                                R(i);
                            }, [i]);
                        const N = (0, a.useCallback)(
                                (e) => {
                                    A && A(e);
                                },
                                [A],
                            ),
                            M = (0, a.useCallback)(
                                (e) => {
                                    w(!0), C && C(e), E && Ae(E), i && T();
                                },
                                [i, C, T, E],
                            ),
                            O = (0, a.useCallback)(
                                (e) => {
                                    w(!1), D && D(e);
                                },
                                [D],
                            ),
                            P = (0, a.useCallback)(
                                (e) => {
                                    F && F(e), l && Ae(l), y(!0);
                                },
                                [F, l],
                            ),
                            I = (0, a.useCallback)(
                                (e) => {
                                    w(!1), y(!1), m && m(e);
                                },
                                [m],
                            ),
                            H = (0, a.useCallback)(
                                (e) => {
                                    R(!0), B && B(e);
                                },
                                [B],
                            ),
                            W = (0, a.useCallback)(
                                (e) => {
                                    R(!1), h && h(e);
                                },
                                [h],
                            ),
                            U = V()(
                                xu.base,
                                r && xu.base__visibleLabel,
                                g && xu.base__mouseDown,
                                f && xu.base__hovered,
                                k && xu.base__focused,
                            ),
                            j = V()(xu.icon, xu[`icon__${_}`]);
                        return n().createElement(
                            'div',
                            Ru(
                                {
                                    ref: S,
                                    className: U,
                                    onClick: N,
                                    onMouseEnter: P,
                                    onMouseLeave: I,
                                    onMouseDown: M,
                                    onMouseUp: O,
                                    onFocus: H,
                                    onBlur: W,
                                },
                                p,
                            ),
                            n().createElement('div', { className: j }),
                            n().createElement('div', { className: xu.label }, u),
                        );
                    }),
                    Lu = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    Nu = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3],
                    Mu = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                let Ou;
                !(function (e) {
                    (e.Primary = 'primary'), (e.Secondary = 'secondary');
                })(Ou || (Ou = {}));
                const Pu = ({
                    level: e,
                    type: u,
                    name: t,
                    isLarge: r,
                    isSingle: o,
                    animationDelayStepsCount: i,
                    nation: s,
                    color: l = Ou.Primary,
                }) => {
                    const c = (0, a.useMemo)(
                            () => ({
                                backgroundImage: `url('R.images.gui.maps.icons.vehicleTypes.big.${v(u)}_elite')`,
                            }),
                            [u],
                        ),
                        E = V()(
                            'Vehicle_base_95',
                            l === Ou.Primary ? 'Vehicle_base__primary_47' : 'Vehicle_base__secondary_0e',
                            r && 'Vehicle_base__large_e9',
                            o && 'Vehicle_base__single_eb',
                            void 0 !== i && 'Vehicle_base__hasAnimation_56',
                        ),
                        d = (0, a.useMemo)(() => (void 0 !== i ? { animationDelay: i * eu + 'ms' } : void 0), [i]);
                    return n().createElement(
                        'span',
                        { className: E, style: d },
                        s &&
                            n().createElement('span', {
                                className: 'Vehicle_flag_f9',
                                style: { backgroundImage: `url(R.images.gui.maps.icons.flags.c_60x40.${s})` },
                            }),
                        n().createElement(
                            'span',
                            { className: 'Vehicle_level_df' },
                            ((_ = e),
                            Mu
                                ? `${_}`
                                : (function (e) {
                                      let u = '';
                                      for (let t = Nu.length - 1; t >= 0; t--)
                                          for (; e >= Nu[t]; ) (u += Lu[t]), (e -= Nu[t]);
                                      return u;
                                  })(_)),
                        ),
                        n().createElement('span', { className: 'Vehicle_type_11', style: c }),
                        n().createElement('span', { className: 'Vehicle_name_63' }, t),
                    );
                    var _;
                };
                let Iu, Hu, Wu;
                !(function (e) {
                    (e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                })(Iu || (Iu = {})),
                    (function (e) {
                        (e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.equipCoin = 'equipCoin');
                    })(Hu || (Hu = {})),
                    (function (e) {
                        (e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG');
                    })(Wu || (Wu = {}));
                const Vu = ({ count: e, quantity: u, isCurrency: t, isMultiple: a }) =>
                        n().createElement(
                            n().Fragment,
                            null,
                            t && n().createElement(G, { value: Number(e) }),
                            a && !t && u,
                        ),
                    Uu = {
                        currency: 'Currency_currency_ef',
                        currency__credits: 'Currency_currency__credits_e2',
                        currency__gold: 'Currency_currency__gold_41',
                        currency__crystal: 'Currency_currency__crystal_90',
                        currency__additionalReward: 'Currency_currency__additionalReward_55',
                        currency__singleReward: 'Currency_currency__singleReward_8b',
                        currency__multiply: 'Currency_currency__multiply_ee',
                        count: 'Currency_count_92',
                        count__confirmReward: 'Currency_count__confirmReward_e5',
                        count__singleReward: 'Currency_count__singleReward_62',
                        count__additionalReward: 'Currency_count__additionalReward_e7',
                        count__multiply: 'Currency_count__multiply_22',
                    },
                    ju = ({
                        count: e,
                        currency: u,
                        isConfirmReward: t = !1,
                        isSingleReward: a = !1,
                        isAdditionalReward: r = !1,
                        isMultiplyReward: o = !1,
                    }) => {
                        const i = u in Hu,
                            s = e > 1,
                            l = V()(
                                Uu.count,
                                t && Uu.count__confirmReward,
                                a && Uu.count__singleReward,
                                r && Uu.count__additionalReward,
                                o && Uu.count__multiply,
                            ),
                            c = V()(
                                Uu.currency,
                                Uu[`currency__${u}`],
                                r && Uu.currency__additionalReward,
                                a && Uu.currency__singleReward,
                                o && Uu.currency__multiply,
                            ),
                            E =
                                ((d = R.strings.event.award.value()),
                                (_ = { count: e }),
                                d.replace(/\{\w+\}/g, (e) => String(_[e.slice(1, -1)])));
                        var d, _;
                        return n().createElement(
                            'span',
                            { className: i ? c : l },
                            n().createElement(Vu, { isCurrency: i, count: e, quantity: E, isMultiple: s }),
                        );
                    },
                    zu = () => {},
                    $u = [
                        'width',
                        'height',
                        'getSrcByFrame',
                        'frameCount',
                        'onAnimate',
                        'frameTime',
                        'initialFrameIndex',
                    ];
                function Gu() {
                    return (
                        (Gu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Gu.apply(this, arguments)
                    );
                }
                const Ku = () => {},
                    qu = (0, a.memo)((e) => {
                        let u = e.width,
                            t = e.height,
                            r = e.getSrcByFrame,
                            o = e.frameCount,
                            i = e.onAnimate,
                            s = void 0 === i ? Ku : i,
                            l = e.frameTime,
                            c = void 0 === l ? 33 : l,
                            E = e.initialFrameIndex,
                            d = void 0 === E ? 0 : E,
                            _ = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, $u);
                        const A = (0, a.useRef)(null);
                        return (
                            (0, a.useEffect)(() => {
                                const e = A.current;
                                if (!e) return;
                                const a = e.getContext('2d'),
                                    n = ((e, u) => {
                                        const t = [];
                                        for (let a = 0; a <= e; a++) {
                                            const e = new Image();
                                            (e.src = u(a)), t.push(e);
                                        }
                                        return t;
                                    })(o, r),
                                    i = ((e, u = 0) => {
                                        let t = u;
                                        return () => {
                                            const u = t;
                                            return (t += 1), t > e && (t = 0), u;
                                        };
                                    })(o - 1, d),
                                    l = setInterval(() => {
                                        const r = i();
                                        a.clearRect(0, 0, e.width, e.height);
                                        const o = n[r];
                                        a.drawImage(o, 0, 0, u, t), s(r, o);
                                    }, c);
                                return () => clearInterval(l);
                            }, [o, c, r, t, d, s, u]),
                            n().createElement('canvas', Gu({}, _, { width: u, height: t, ref: A }))
                        );
                    }),
                    Yu = {
                        base: 'Convertation_base_24',
                        bumpStars: 'Convertation_bumpStars_ba',
                        bumpParticles: 'Convertation_bumpParticles_5f',
                        particlesCanvas: 'Convertation_particlesCanvas_f5',
                        bump: 'Convertation_bump_f7',
                        bumpRays: 'Convertation_bumpRays_42',
                        twirlyCanvas: 'Convertation_twirlyCanvas_9a',
                        base__start: 'Convertation_base__start_e8',
                        base__bump: 'Convertation_base__bump_d8',
                        base__end: 'Convertation_base__end_69',
                        reward: 'Convertation_reward_49',
                        rewardFrom: 'Convertation_rewardFrom_6c',
                        rewardTo: 'Convertation_rewardTo_62',
                        star: 'Convertation_star_7b',
                        star__one: 'Convertation_star__one_ae',
                        star__second: 'Convertation_star__second_9f',
                        star__third: 'Convertation_star__third_a2',
                    },
                    Xu = ['children'],
                    Zu = ['children'];
                function Qu(e, u) {
                    if (null == e) return {};
                    var t,
                        a,
                        n = {},
                        r = Object.keys(e);
                    for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                    return n;
                }
                function Ju() {
                    return (
                        (Ju =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Ju.apply(this, arguments)
                    );
                }
                const et = {
                        idle: { state: 'idle', nextState: 'start', timeout: 400 },
                        start: { state: 'start', nextState: 'bump', timeout: 960 },
                        bump: { state: 'bump', nextState: 'end', timeout: 33 },
                        end: { state: 'end', stop: !0 },
                    },
                    ut = { width: 250, height: 250 },
                    tt = () => {},
                    at = (e) =>
                        `R.images.white_tiger.gui.maps.icons.sequence.convert_twirly.twirly_convertation_${e.toString().padStart(5, '0')}`,
                    nt = (e) => ({ width: `${e.width}rem`, height: `${e.height}rem` }),
                    rt = (0, a.memo)(
                        ({
                            children: [e, u],
                            className: t,
                            classNames: r = {},
                            onAnimate: o = tt,
                            animationSettings: i = et,
                            getSrcByFrameTwirly: s = at,
                            size: l = ut,
                        }) => {
                            const c = ((e, u) => {
                                const t = (0, a.useState)(e.idle),
                                    n = t[0],
                                    r = t[1],
                                    o = (0, a.useRef)(zu),
                                    i = (0, a.useCallback)(() => {
                                        n.stop ||
                                            (o.current(),
                                            (o.current = Oe(() => {
                                                r(e[n.nextState]);
                                            }, n.timeout)));
                                    }, [n, e]);
                                return (
                                    (0, a.useEffect)(() => (i(), () => o.current()), [i]),
                                    {
                                        step: n,
                                        setStep: (0, a.useCallback)(
                                            (u) => {
                                                r(e[u]);
                                            },
                                            [e],
                                        ),
                                        next: i,
                                    }
                                );
                            })(i).step.state;
                            return (
                                (0, a.useEffect)(() => {
                                    o(c);
                                }, [c, o]),
                                (0, a.useEffect)(() => {
                                    'start' === c && Ae('ev_white_tiger_hangar_lootbox_reward_conv');
                                }, [c]),
                                n().createElement(
                                    'div',
                                    { className: V()(Yu.base, Yu[`base__${c}`], t), style: nt(l) },
                                    n().createElement(
                                        'div',
                                        { className: V()(Yu.bumpStars, r.bumpStars) },
                                        n().createElement('div', { className: V()(Yu.star, Yu.star__one, r.star) }),
                                        n().createElement('div', { className: V()(Yu.star, Yu.star__second, r.star) }),
                                        n().createElement('div', { className: V()(Yu.star, Yu.star__third, r.star) }),
                                    ),
                                    n().createElement('div', { className: V()(Yu.bump, r.bump) }),
                                    n().createElement('div', { className: V()(Yu.bumpRays, r.bumpRays) }),
                                    n().createElement(
                                        'div',
                                        { className: V()(Yu.reward, r.reward) },
                                        ('idle' === c || 'start' === c) &&
                                            n().createElement(
                                                'div',
                                                { className: V()(Yu.rewardFrom, r.rewardFrom) },
                                                e,
                                            ),
                                        ('end' === c || 'bump' === c) &&
                                            n().createElement('div', { className: V()(Yu.rewardTo, r.rewardTo) }, u),
                                    ),
                                    ('start' === c || 'bump' === c) &&
                                        n().createElement(
                                            qu,
                                            Ju({}, l, {
                                                className: V()(Yu.twirlyCanvas, r.twirlyCanvas),
                                                frameCount: 50,
                                                frameTime: 16,
                                                getSrcByFrame: s,
                                            }),
                                        ),
                                    n().createElement('div', { className: V()(Yu.bumpParticles, r.bumpParticles) }),
                                )
                            );
                        },
                        (e, u) => {
                            e.children;
                            const t = Qu(e, Xu),
                                a = (u.children, Qu(u, Zu));
                            return (
                                (n = t),
                                (r = a),
                                Object.keys(n).length === Object.keys(r).length &&
                                    Object.keys(n).every(
                                        (e) => Object.prototype.hasOwnProperty.call(r, e) && n[e] === r[e],
                                    )
                            );
                            var n, r;
                        },
                    ),
                    ot = {
                        base: 'Compensation_base_8b',
                        tank: 'Compensation_tank_d8',
                        base__single: 'Compensation_base__single_e1',
                        base__multiply: 'Compensation_base__multiply_2e',
                        gold: 'Compensation_gold_64',
                        base__additionalReward: 'Compensation_base__additionalReward_ba',
                        particlesCanvas: 'Compensation_particlesCanvas_59',
                        convertIcon: 'Compensation_convertIcon_03',
                        vehicleName: 'Compensation_vehicleName_af',
                        value: 'Compensation_value_b8',
                        blue: 'Compensation_blue_86',
                    },
                    it = (e) =>
                        `R.images.white_tiger.gui.maps.icons.sequence.convert_particles.items_idle_${e.toString().padStart(5, '0')}`,
                    st = Object.assign({}, et, { idle: Object.assign({}, et.idle, { timeout: 1800 }) });
                let lt;
                !(function (e) {
                    (e.Single = 'single'), (e.Multiply = 'multiply'), (e.Base = 'base');
                })(lt || (lt = {}));
                const ct = { width: 100, height: 100 },
                    Et = { width: 450, height: 450 },
                    dt = { width: 500, height: 500 },
                    _t = (e) => (e.extraSmall || e.small ? Et : dt),
                    At = ({ isSingle: e, isMultiply: u, value: t, vehicleName: r, isAdditionalReward: o }) => {
                        const i = (0, a.useContext)(m),
                            s = (0, a.useMemo)(() => (e ? lt.Single : u ? lt.Multiply : lt.Base), [u, e]),
                            l = V()(ot.base, ot[`base__${s}`], o && ot.base__additionalReward);
                        return n().createElement(
                            'div',
                            { className: l },
                            n().createElement(qu, {
                                width: u ? ct.width : _t(i).width,
                                height: u ? ct.height : _t(i).height,
                                className: V()(ot.particlesCanvas, ot.blue),
                                frameCount: 60,
                                getSrcByFrame: it,
                            }),
                            n().createElement(
                                rt,
                                { size: u ? ct : _t(i), animationSettings: st, className: ot.nyAnimation },
                                [
                                    n().createElement(
                                        'div',
                                        { key: 1, className: ot.tank },
                                        n().createElement('div', { className: ot.convertIcon }),
                                        n().createElement('div', { className: ot.vehicleName }, r),
                                    ),
                                    n().createElement(
                                        'div',
                                        { key: 2, className: ot.gold },
                                        n().createElement('div', { className: ot.convertIcon }),
                                        n().createElement(
                                            'div',
                                            { className: ot.value },
                                            n().createElement(Vu, { isCurrency: !0, count: t, isMultiple: u }),
                                        ),
                                    ),
                                ],
                            ),
                        );
                    },
                    Ft = {
                        base: 'Reward_base_7f',
                        base__singleReward: 'Reward_base__singleReward_8f',
                        base__additional: 'Reward_base__additional_3e',
                        base__vehicleReward: 'Reward_base__vehicleReward_99',
                        base__multiply: 'Reward_base__multiply_a9',
                        rewardImage: 'Reward_rewardImage_8a',
                        compensation: 'Reward_compensation_d4',
                        tankSpecName: 'Reward_tankSpecName_27',
                        tankName: 'Reward_tankName_1d',
                        preview: 'Reward_preview_73',
                        description: 'Reward_description_e2',
                        description__single: 'Reward_description__single_67',
                        vehicle: 'Reward_vehicle_d7',
                        vehicle__single: 'Reward_vehicle__single_bf',
                    };
                let mt, Ct;
                !(function (e) {
                    (e.Big = 'big'), (e.Large = 's600x450');
                })(mt || (mt = {})),
                    (function (e) {
                        (e.Default = 'default'), (e.Additional = 'additional'), (e.Multiply = 'multiply');
                    })(Ct || (Ct = {}));
                const Dt = R.views.common.tooltip_window,
                    Bt = (e, u) => ({ backgroundImage: `url('R.images.gui.maps.icons.quests.bonuses.${u}.${e}')` }),
                    ht = (e) => ({ backgroundImage: `url('${e}')` }),
                    pt = ['credits', 'gold', 'crystal'],
                    vt = R.strings.event.awardView.previewBtnText(),
                    gt = (0, a.memo)(
                        ({
                            tooltipId: e,
                            name: u,
                            label: t,
                            value: r,
                            icon: o,
                            specName: i,
                            specialId: s,
                            compensationSource: l = '',
                            isCompensation: c = !1,
                            isConfirmReward: E = !1,
                            isSingleReward: d = !1,
                            isMultiplyReward: _ = !1,
                            theme: A = Ct.Default,
                            size: F,
                        }) => {
                            const m = I('model'),
                                C = m.vehicle,
                                D = m.onPreview,
                                B = pt.includes(u),
                                h = 'premium_plus' === u,
                                p = 'vehicles' === u,
                                g = A === Ct.Additional,
                                w = p || ('customizations' === u && o && o.includes('style3d')),
                                b = (p || 'gold' === u) && c,
                                f = t && A === Ct.Default && !B && !p,
                                y = A === Ct.Default ? mt.Large : mt.Big,
                                x = (0, a.useMemo)(() => {
                                    switch (u) {
                                        case 'premium_plus':
                                            return Bt(`${u}_${r}`, y);
                                        case 'crewBooks':
                                            return ((e, u) => ({
                                                backgroundImage: `url('R.images.gui.maps.icons.crewBooks.books.${u}.${e}')`,
                                            }))(String(o), y);
                                        case 'goodies':
                                            return Bt(String(o), y);
                                        case 'customizations':
                                        case 'tmanToken':
                                            return A === Ct.Default
                                                ? Bt(`collection.${o}`, y)
                                                : Bt(s ? 'style_3d' : `${o}`, y);
                                        case 'gold':
                                            return c ? ht('') : Bt(u, y);
                                        case 'vehicles':
                                            return i
                                                ? ht(R.images.gui.maps.shop.vehicles.c_600x450.$dyn(v(i)))
                                                : C.specName
                                                  ? ht(R.images.gui.maps.shop.vehicles.c_600x450.$dyn(v(C.specName)))
                                                  : Bt('vehicles', y);
                                        default:
                                            return Bt(u, y);
                                    }
                                }, [s, u, r, y, o, A, c, C, i]),
                                k = (0, a.useMemo)(() => ({ value: r, tooltipId: e }), [e, r]),
                                S = (0, a.useMemo)(
                                    () => Dt.backport_tooltip_content.BackportTooltipContent('resId'),
                                    [],
                                ),
                                T = (0, a.useCallback)(() => {
                                    p && C.intCD && D({ intCD: C.intCD }), s && D({ intCD: s });
                                }, [p, C, D, s]),
                                L = V()(Ft.rewardImage, b && Ft.rewardImage__compensation),
                                N = V()(
                                    Ft.base,
                                    _ && Ft.base__multiply,
                                    E && Ft.base__confirmReward,
                                    d && Ft.base__singleReward,
                                    p && Ft.base__vehicleReward,
                                    Ft[`base__${F}`],
                                    A !== Ct.Default && Ft[`base__${A}`],
                                );
                            return n().createElement(
                                X,
                                { ignoreShowDelay: !0, contentId: S, args: k },
                                n().createElement(
                                    'div',
                                    { className: N },
                                    b
                                        ? n().createElement(At, {
                                              isSingle: d,
                                              isMultiply: _,
                                              value: r,
                                              vehicleName: l,
                                              isAdditionalReward: g,
                                          })
                                        : n().createElement(
                                              'div',
                                              { className: L, style: x },
                                              w &&
                                                  !b &&
                                                  !_ &&
                                                  !p &&
                                                  n().createElement(
                                                      'div',
                                                      { className: Ft.preview },
                                                      n().createElement(Tu, {
                                                          onClick: T,
                                                          label: vt,
                                                          isVisibleLabel: !0,
                                                      }),
                                                  ),
                                          ),
                                    b || !p || C.specName
                                        ? null
                                        : n().createElement('div', { className: Ft.tankName }, t),
                                    !h &&
                                        !b &&
                                        n().createElement(ju, {
                                            count: r,
                                            currency: u,
                                            isConfirmReward: E,
                                            isSingleReward: d,
                                            isAdditionalReward: g,
                                            isMultiplyReward: _,
                                        }),
                                    f &&
                                        n().createElement(
                                            'div',
                                            { className: V()(Ft.description, d && Ft.description__single) },
                                            t,
                                        ),
                                    p &&
                                        !_ &&
                                        (g
                                            ? n().createElement('span', { className: Ft.tankSpecName }, t)
                                            : n().createElement(
                                                  'span',
                                                  { className: V()(Ft.vehicle, d && Ft.vehicle__single) },
                                                  n().createElement(Pu, {
                                                      level: C.level,
                                                      type: C.type,
                                                      name: C.name,
                                                      isSingle: d,
                                                  }),
                                              )),
                                ),
                            );
                        },
                    );
                var wt = t(5659);
                const bt = { base: 'AnimationItem_base_cd', entered: 'AnimationItem_entered_01' },
                    ft = ['index', 'isSingleReward', 'theme', 'delay', 'onEntered'];
                function yt() {
                    return (
                        (yt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        yt.apply(this, arguments)
                    );
                }
                const xt = (e) => {
                    let u = e.index,
                        t = e.isSingleReward,
                        r = void 0 !== t && t,
                        o = e.theme,
                        i = void 0 === o ? Ct.Default : o,
                        s = e.delay,
                        l = e.onEntered,
                        c = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                            return n;
                        })(e, ft);
                    const E = (0, a.useCallback)(() => {
                        Ae('ev_white_tiger_hangar_lootbox_item'), l && l();
                    }, [l]);
                    return n().createElement(
                        wt.uT,
                        { in: !0, appear: !0, timeout: Ie(u, 150, s), onEntered: E },
                        (e) => {
                            const u = V()(bt.base, bt[e]);
                            return n().createElement(
                                'div',
                                { className: u },
                                n().createElement(gt, yt({}, c, { isSingleReward: r, theme: i })),
                            );
                        },
                    );
                };
                function kt() {
                    return (
                        (kt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        kt.apply(this, arguments)
                    );
                }
                const Rt = { animationDelay: '1000ms' },
                    St = ({ rewards: e, additionalRewards: u, openedBoxesCount: t }) => {
                        const r = (0, a.useContext)(Ot),
                            o = 1 === e.items.length,
                            i = u.items.length > 0;
                        return n().createElement(
                            'div',
                            { className: 'RewardList_base_cf' },
                            n().createElement(
                                'div',
                                { className: 'RewardList_mainRewards_3a' },
                                e.items.map(({ value: u }, a) => {
                                    const s = !i && a === e.items.length - 1 && r ? r : void 0;
                                    return n().createElement(
                                        xt,
                                        kt({ key: `${t}_${a}_${u.tooltipId}` }, u, {
                                            index: a,
                                            isSingleReward: o,
                                            onEntered: s,
                                            delay: 700,
                                        }),
                                    );
                                }),
                            ),
                            i &&
                                n().createElement(
                                    'div',
                                    { className: 'RewardList_additional_32', style: Rt },
                                    n().createElement(
                                        'span',
                                        { className: 'RewardList_additionalTitle_d7' },
                                        R.strings.event.portalAward.additionalTitle(),
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: 'RewardList_additionalWrapper_77' },
                                        u.items.map(({ value: e }, a) => {
                                            const o = a === u.items.length - 1 && r ? r : void 0;
                                            return (
                                                'customizations' === e.name && (e.icon = e.typeIcon),
                                                n().createElement(
                                                    xt,
                                                    kt({ key: `${t}_${a}_${e.tooltipId}` }, e, {
                                                        index: a,
                                                        theme: Ct.Additional,
                                                        onEntered: o,
                                                        delay: 1e3,
                                                    }),
                                                )
                                            );
                                        }),
                                    ),
                                ),
                        );
                    },
                    Tt = R.strings.event.portalAward,
                    Lt = ({
                        rerollPrice: e,
                        isRerollAffordable: u,
                        isBossLootBox: t,
                        handleReRoll: a,
                        rerollCount: r,
                        currencyTooltipType: o,
                        attemptsLeftAnimationDelayCount: i,
                    }) => {
                        const s = $(e, t ? 'gold' : 'integral'),
                            l = R.strings.tooltips.awardItem[o],
                            c = { header: l ? l.header() : ' ', body: l ? l.body() : ' ' },
                            E = V()(
                                'RerollButton_base_86',
                                !t && 'RerollButton_base__hunter_98',
                                !u && 'RerollButton_rerollNotAffordable_74',
                            );
                        return n().createElement(
                            'div',
                            { className: E },
                            n().createElement(
                                ye,
                                c,
                                n().createElement(
                                    'div',
                                    { className: 'RerollButton_rerollWrapper_0e' },
                                    s,
                                    n().createElement('div', { className: 'RerollButton_runPrice_14' }),
                                ),
                            ),
                            n().createElement(
                                mu,
                                { size: Au.medium, type: _u.main, onClick: a, disabled: !t || !u },
                                Tt.reRollButton(),
                            ),
                            n().createElement(
                                'div',
                                { className: 'RerollButton_attemptsLeftWrapper_e8' },
                                n().createElement(yu, {
                                    leftAttemptsCount: r,
                                    displayText: Tt.reRollInformation(),
                                    animationDelayStepsCount: i,
                                    isTextChangable: !1,
                                    isBossLootBox: t,
                                }),
                            ),
                        );
                    },
                    Nt = {
                        base: 'Content_base_c6',
                        wrapper: 'Content_wrapper_2e',
                        rerollContentWrapper: 'Content_rerollContentWrapper_e0',
                        controls: 'Content_controls_60',
                        show: 'Content_show_cf',
                        controls_warning: 'Content_controls_warning_8a',
                        btnWrapper: 'Content_btnWrapper_ab',
                        btnHolder: 'Content_btnHolder_17',
                        slideUp: 'Content_slideUp_84',
                        fadeOut: 'Content_fadeOut_40',
                        fadeIn: 'Content_fadeIn_3e',
                        fadeInScale: 'Content_fadeInScale_e6',
                        fadeInWithScale: 'Content_fadeInWithScale_6e',
                        scale: 'Content_scale_cf',
                        raysAppearance: 'Content_raysAppearance_c2',
                        rotate: 'Content_rotate_0f',
                        fadeTop: 'Content_fadeTop_ea',
                        fadeBot: 'Content_fadeBot_60',
                        'translate-down': 'Content_translate-down_41',
                        'translate-up': 'Content_translate-up_9d',
                    },
                    Mt = ({
                        isBoxesEnabled: e,
                        isBossLootBox: u,
                        quantityKeys: t,
                        rewards: r,
                        additionalRewards: o,
                        onReRoll: i,
                        onClaimReward: s,
                        attemptsCount: l,
                        rerollCount: c,
                        rerollPrice: E,
                        leftAttemptsCount: d,
                        isControlsVisible: _,
                        footerAnimationDelayCount: A,
                        openedBoxesCount: F,
                        vehicle: C,
                        onPreview: D,
                        isRerollAffordable: B,
                        isGuaranteedIgnored: h,
                        currencyTooltipType: p,
                    }) => {
                        const v = (0, a.useContext)(m),
                            g = v.width,
                            w = v.height,
                            b = (0, a.useCallback)(() => {
                                s();
                            }, [s]),
                            f = (0, a.useCallback)(() => {
                                C.intCD && D({ intCD: C.intCD });
                            }, [C, D]),
                            y = (0, a.useCallback)(() => {
                                i();
                            }, [i]),
                            x = _e(),
                            k = (0, a.useMemo)(
                                () =>
                                    V()(
                                        Nt.base,
                                        x,
                                        !u && Nt.base__hunter,
                                        !e && Nt.controls_warning,
                                        !B && Nt.rerollNotAffordable,
                                    ),
                                [x, u, e, B],
                            ),
                            S = (0, a.useMemo)(() => ({ animationDelay: A * eu + 'ms' }), [A]),
                            T = A - 1,
                            L = (0, a.useMemo)(() => ({ marginBottom: 0.23 * We(g, w).height }), [g, w]),
                            N = (0, a.useMemo)(() => r.items.some((e) => 'vehicles' === e.value.name), [r.items]),
                            M = (0, a.useMemo)(() => r.items.some((e) => e.value.isCompensation), [r.items]),
                            O = (0, a.useMemo)(() => c > 0 && e && !M && !N, [c, e, M, N]);
                        return n().createElement(
                            'div',
                            { className: k },
                            n().createElement(
                                'div',
                                { style: L },
                                n().createElement(St, { rewards: r, additionalRewards: o, openedBoxesCount: F }),
                            ),
                            n().createElement(
                                'div',
                                { className: Nt.wrapper },
                                _ &&
                                    n().createElement(
                                        'div',
                                        { className: Nt.controls },
                                        n().createElement(
                                            'div',
                                            { className: Nt.rerollContentWrapper },
                                            u &&
                                                e &&
                                                !h &&
                                                n().createElement(yu, {
                                                    attemptsCount: l,
                                                    leftAttemptsCount: d,
                                                    animationDelayStepsCount: T,
                                                }),
                                            n().createElement(
                                                'div',
                                                { className: Nt.btnWrapper, style: S },
                                                O &&
                                                    n().createElement(Lt, {
                                                        attemptsLeftAnimationDelayCount: T,
                                                        currencyTooltipType: p,
                                                        handleReRoll: y,
                                                        isBossLootBox: u,
                                                        isRerollAffordable: B,
                                                        rerollCount: c,
                                                        rerollPrice: E,
                                                    }),
                                                N &&
                                                    !M &&
                                                    n().createElement(
                                                        'div',
                                                        { className: Nt.btnHolder },
                                                        n().createElement(
                                                            mu,
                                                            { size: Au.medium, type: _u.main, onClick: f },
                                                            R.strings.event.portalAward.takeAndOpenGarageButton(),
                                                        ),
                                                    ),
                                                n().createElement(pu, {
                                                    isBoxesEnabled: e,
                                                    isBossLootBox: u,
                                                    claimReward: b,
                                                    quantityKeys: t,
                                                    footerAnimationDelayCount: A,
                                                }),
                                            ),
                                        ),
                                    ),
                                !e && !N && n().createElement(gu, null),
                            ),
                        );
                    },
                    Ot = (0, a.createContext)(null),
                    Pt = R.strings.event.portalAward,
                    It = () => {
                        const e = I('model'),
                            u = e.isBossLootBox,
                            t = e.isBoxesEnabled,
                            r = e.rewards,
                            o = e.additionalRewards,
                            i = e.onBackToPortal,
                            s = e.onClose,
                            l = e.onBuy,
                            c = e.onReRoll,
                            E = e.rerollCount,
                            d = e.rerollPrice,
                            _ = e.onClaimReward,
                            A = e.availableLootBoxesPurchase,
                            F = e.guaranteedAward,
                            m = e.openedBoxesCount,
                            C = e.vehicle,
                            D = e.onPreview,
                            B = e.isRerollAffordable,
                            h = e.currencyTooltipType,
                            p = e.isFirstLaunch,
                            v = e.firstLaunchReward,
                            g = e.isLaunchAnimated,
                            w = e.onAnimationSettingChange,
                            b = e.currentCrystals,
                            f = e.currentGold,
                            y = e.currentCredits,
                            x = e.currentFreeExperience,
                            k = e.isWalletAvailable,
                            R = I('model.portalAvailability'),
                            S = (0, a.useMemo)(() => `${E}${R.lootBoxesCount}`, [E, R.lootBoxesCount]),
                            T = (0, a.useState)(!1),
                            L = T[0],
                            N = T[1];
                        (0, a.useEffect)(() => N(!1), [S]);
                        const M = (0, a.useCallback)(() => w(), [w]),
                            O = (0, a.useCallback)(() => N(!0), []),
                            P = (0, a.useCallback)(() => {
                                s();
                            }, [s]),
                            H = {
                                items: ((W = r.items),
                                (V = (e) => ({ value: Object.assign({}, e) })),
                                Array.isArray(W)
                                    ? W.map(V)
                                    : W.map((e, u, t) => V(null == e ? void 0 : e.value))).filter(
                                    ({ value: e }) => 174924 !== e.specialId,
                                ),
                            };
                        var W, V;
                        return n().createElement(
                            Ot.Provider,
                            { value: O },
                            n().createElement(
                                Eu,
                                {
                                    title: Pt.title(),
                                    portalType: u ? le.BOSS : le.HUNTER,
                                    isBoxesEnabled: t,
                                    onBuy: l,
                                    onBackToPortal: i,
                                    onClose: P,
                                    availableLootBoxesPurchase: A,
                                    hasGradient: !0,
                                    showFinalAnimation: L,
                                    lootBoxesAnimationDelayCount: 3,
                                    openedBoxesCount: m,
                                    isAnimated: g,
                                    onAnimationSettingClick: M,
                                    launchId: S,
                                    showCurrencyBalance: !0,
                                    currentCrystals: b,
                                    currentGold: f,
                                    currentCredits: y,
                                    currentFreeXP: x,
                                    isWalletAvailable: k,
                                },
                                n().createElement(Mt, {
                                    isBoxesEnabled: t,
                                    isBossLootBox: u,
                                    quantityKeys: R.lootBoxesCount,
                                    rewards: H,
                                    additionalRewards: o,
                                    onReRoll: c,
                                    onClaimReward: _,
                                    attemptsCount: F.attemptsCount,
                                    rerollCount: E,
                                    rerollPrice: d,
                                    leftAttemptsCount: F.leftAttemptsCount,
                                    isControlsVisible: L && t,
                                    footerAnimationDelayCount: 3,
                                    openedBoxesCount: m,
                                    vehicle: C,
                                    onPreview: D,
                                    isRerollAffordable: B,
                                    isGuaranteedIgnored: F.isIgnored,
                                    currencyTooltipType: h,
                                    isFirstLaunch: p,
                                    firstLaunchReward: v,
                                }),
                            ),
                        );
                    };
                engine.whenReady.then(() => {
                    o().render(
                        n().createElement(h, null, n().createElement(It, null)),
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
        (__webpack_require__.O = (e, u, t, a) => {
            if (!u) {
                var n = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [u, t, a] = deferred[s], r = !0, o = 0; o < u.length; o++)
                        (!1 & a || n >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[o]))
                            ? u.splice(o--, 1)
                            : ((r = !1), a < n && (n = a));
                    if (r) {
                        deferred.splice(s--, 1);
                        var i = t();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > a; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [u, t, a];
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
            var e = { 591: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var a,
                        n,
                        [r, o, i] = t,
                        s = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (a in o) __webpack_require__.o(o, a) && (__webpack_require__.m[a] = o[a]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (u && u(t); s < r.length; s++)
                        (n = r[s]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(9408));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
