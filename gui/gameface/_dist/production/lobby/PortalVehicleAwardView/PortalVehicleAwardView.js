(() => {
    'use strict';
    var __webpack_modules__ = {
            527: (e, u, t) => {
                t.r(u), t.d(u, { mouse: () => o, onResize: () => r });
                var a = t(2472),
                    n = t(1176);
                const r = (0, a.E)('clientResized'),
                    i = { down: (0, a.E)('mousedown'), up: (0, a.E)('mouseup'), move: (0, a.E)('mousemove') },
                    o = (function () {
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
                                            o = i[u]((e) => t([e, 'outside']));
                                        function s(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(r, s),
                                            a(),
                                            () => {
                                                n &&
                                                    (o(),
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
                        graphicsQuality: () => i,
                    });
                var a = t(527);
                function n(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const i = {
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
                        addPreloadTexture: () => o,
                        children: () => a,
                        displayStatus: () => n.W,
                        displayStatusIs: () => b,
                        events: () => r.U,
                        extraSize: () => f,
                        forceTriggerMouseMove: () => p,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => w,
                        getScale: () => F,
                        getSize: () => d,
                        getViewGlobalPosition: () => m,
                        isEventHandled: () => g,
                        isFocused: () => B,
                        pxToRem: () => C,
                        remToPx: () => h,
                        resize: () => E,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => D,
                        setEventHandled: () => v,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => y,
                    });
                var a = t(3722),
                    n = t(6112),
                    r = t(6538),
                    i = t(8566);
                function o(e) {
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
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function E(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function m(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: h(u.x), y: h(u.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function F() {
                    return viewEnv.getScale();
                }
                function C(e) {
                    return viewEnv.pxToRem(e);
                }
                function h(e) {
                    return viewEnv.remToPx(e);
                }
                function D(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function B() {
                    return viewEnv.isFocused();
                }
                function v() {
                    return viewEnv.setEventHandled();
                }
                function g() {
                    return viewEnv.isEventHandled();
                }
                function p() {
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
                                i = (function (e, u) {
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
                                      Object.assign({ __Type: t, type: e }, i, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, i));
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
                t.d(u, { Sw: () => r.Z, B3: () => c, Z5: () => i, B0: () => s, ry: () => D });
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
                const i = {
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
                    _ = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = t(5521),
                    A = t(3138);
                const F = ['args'];
                function C(e, u, t, a, n, r, i) {
                    try {
                        var o = e[r](i),
                            s = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(s) : Promise.resolve(s).then(a, n);
                }
                const h = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                    return new Promise(function (a, n) {
                                        var r = e.apply(u, t);
                                        function i(e) {
                                            C(r, a, n, i, o, 'next', e);
                                        }
                                        function o(e) {
                                            C(r, a, n, i, o, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    B = (e, u) => {
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
                                })(u, F);
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
                    v = () => B(s.CLOSE),
                    g = (e, u) => {
                        e.keyCode === m.n.ESCAPE && u();
                    };
                var p = t(7572);
                const w = n.instance,
                    b = {
                        DataTracker: r.Z,
                        ViewModel: p.Z,
                        ViewEventType: s,
                        NumberFormatType: c,
                        RealFormatType: _,
                        TimeFormatType: d,
                        DateFormatType: E,
                        makeGlobalBoundingBox: h,
                        sendMoveEvent: (e) => B(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: v,
                        sendClosePopOverEvent: () => B(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            B(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, a, n = R.invalid('resId'), r) => {
                            const i = A.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                _ = o.width,
                                d = o.height,
                                E = {
                                    x: A.O.view.pxToRem(l) + i.x,
                                    y: A.O.view.pxToRem(c) + i.y,
                                    width: A.O.view.pxToRem(_),
                                    height: A.O.view.pxToRem(d),
                                };
                            B(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: n,
                                direction: u,
                                bbox: h(E),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => g(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            g(e, v);
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
                        SystemLocale: i,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = b;
            },
            9822: (e, u, t) => {
                var a = t(6179),
                    n = t.n(a),
                    r = t(493),
                    i = t.n(r);
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
                var s = t(3138);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function _(e, u, t) {
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
                    E = d.width,
                    m = d.height,
                    A = Object.assign({ width: E, height: m }, _(E, m, l)),
                    F = (0, a.createContext)(A),
                    C = ['children'],
                    h = (e) => {
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
                        const n = (0, a.useContext)(F),
                            r = n.extraLarge,
                            i = n.large,
                            s = n.medium,
                            l = n.small,
                            c = n.extraSmall,
                            _ = n.extraLargeWidth,
                            d = n.largeWidth,
                            E = n.mediumWidth,
                            m = n.smallWidth,
                            A = n.extraSmallWidth,
                            h = n.extraLargeHeight,
                            D = n.largeHeight,
                            B = n.mediumHeight,
                            v = n.smallHeight,
                            g = n.extraSmallHeight,
                            p = { extraLarge: h, large: D, medium: B, small: v, extraSmall: g };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && r) return u;
                            if (t.large && i) return u;
                            if (t.medium && s) return u;
                            if (t.small && l) return u;
                            if (t.extraSmall && c) return u;
                        } else {
                            if (t.extraLargeWidth && _) return o(u, t, p);
                            if (t.largeWidth && d) return o(u, t, p);
                            if (t.mediumWidth && E) return o(u, t, p);
                            if (t.smallWidth && m) return o(u, t, p);
                            if (t.extraSmallWidth && A) return o(u, t, p);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && h) return u;
                                if (t.largeHeight && D) return u;
                                if (t.mediumHeight && B) return u;
                                if (t.smallHeight && v) return u;
                                if (t.extraSmallHeight && g) return u;
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
                    (0, a.memo)(h);
                const D = (e) => {
                        const u = (0, a.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    B = (0, a.memo)(({ children: e }) => {
                        const u = (0, a.useContext)(F),
                            t = (0, a.useState)(u),
                            r = t[0],
                            i = t[1],
                            o = (0, a.useCallback)((e, u) => {
                                const t = s.O.view.pxToRem(e),
                                    a = s.O.view.pxToRem(u);
                                i(Object.assign({ width: t, height: a }, _(t, a, l)));
                            }, []);
                        D(() => {
                            engine.on('clientResized', o);
                        }),
                            (0, a.useEffect)(() => () => engine.off('clientResized', o), [o]);
                        const c = (0, a.useMemo)(() => Object.assign({}, r), [r]);
                        return n().createElement(F.Provider, { value: c }, e);
                    });
                let v, g;
                function p(e) {
                    return e.replace(/-/g, '_');
                }
                var w;
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(v || (v = {})),
                    new RegExp(
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
                    ),
                    ((w = g || (g = {})).SHORT_DATE = 'short-date'),
                    (w.SHORT_TIME = 'short-time'),
                    (w.SHORT_DATE_TIME = 'short-date-time'),
                    (w.FULL_DATE = 'full-date'),
                    (w.FULL_DATE_TIME = 'full-date-time'),
                    (w.MONTH = 'month'),
                    (w.MONTH_DATE = 'month-date'),
                    (w.DATE_MONTH = 'date-month'),
                    (w.MONTH_YEAR = 'month-year'),
                    (w.WEEK_DAY = 'week-day'),
                    (w.WEEK_DAY_TIME = 'week-day-time'),
                    (w.YEAR = 'year'),
                    (w.DATE_YEAR = 'date-year');
                var b = t(4179);
                Date.now();
                const f = (e = 1) => {
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
                    y = (e, u) => e.split('.').reduce((e, u) => e && e[u], u),
                    k = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    x = (e, u) => (e.length > 0 ? `${e}.${u}` : u),
                    S = b.Sw.instance;
                let T;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(T || (T = {}));
                const M = (e = 'model', u = T.Deep) => {
                        const t = (0, a.useState)(0),
                            n = (t[0], t[1]),
                            r = (0, a.useMemo)(() => f(), []),
                            i = r.caller,
                            o = r.resId,
                            s = (0, a.useMemo)(
                                () => (window.__feature && window.__feature !== i ? `subViews.${i}.${e}` : e),
                                [i, e],
                            ),
                            l = (0, a.useState)(() =>
                                ((e) => {
                                    const u = y(e, window);
                                    for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                    return k(u) ? u.value : u;
                                })(
                                    ((e) =>
                                        ((e, u) =>
                                            e.split('.').reduce((e, u) => {
                                                const t = y(`${e}.${u}`, window);
                                                return k(t) ? ((e, u) => `${e}.${u}.value`)(e, u) : `${e}.${u}`;
                                            }))(e))(s),
                                ),
                            ),
                            c = l[0],
                            _ = l[1],
                            d = (0, a.useRef)(-1);
                        return (
                            D(() => {
                                if (
                                    ('boolean' == typeof u &&
                                        ((u = u ? T.Deep : T.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    u !== T.None)
                                ) {
                                    const t = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            u === T.Deep
                                                ? (e === c && n((e) => e + 1), _(e))
                                                : _(Object.assign([], e));
                                        },
                                        a = ((e) => {
                                            const u = ((e) => {
                                                    const u = f(),
                                                        t = u.caller,
                                                        a = u.resId,
                                                        n =
                                                            window.__feature && window.__feature !== t && t
                                                                ? `subViews.${t}`
                                                                : '';
                                                    return { modelPrefix: n, modelPath: x(n, ''), resId: a };
                                                })(),
                                                t = u.modelPrefix,
                                                a = e.split('.');
                                            if (a.length > 0) {
                                                const e = [a[0]];
                                                return (
                                                    a.reduce((u, a) => {
                                                        const n = y(x(t, `${u}.${a}`), window);
                                                        return k(n)
                                                            ? (e.push(n.id), `${u}.${a}.value`)
                                                            : (e.push(a), `${u}.${a}`);
                                                    }),
                                                    e.reduce((e, u) => e + '.' + u)
                                                );
                                            }
                                            return '';
                                        })(e);
                                    d.current = S.addCallback(a, t, o, u === T.Deep);
                                }
                            }),
                            (0, a.useEffect)(() => {
                                if (u !== T.None)
                                    return () => {
                                        S.removeCallback(d.current, o);
                                    };
                            }, [o, u]),
                            c
                        );
                    },
                    O =
                        (b.Sw.instance,
                        (e) => {
                            const u = (0, a.useRef)();
                            return (
                                (0, a.useEffect)(() => {
                                    u.current = e;
                                }, [e]),
                                u.current
                            );
                        });
                var N = t(6483),
                    L = t.n(N),
                    P = t(5521);
                const I = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function H(e = P.n.NONE, u = I, t = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== P.n.NONE)
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
                const W = ({ format: e, value: u }) => {
                        const t = ((e, u = 'integral') => {
                            let t;
                            return (
                                (t = 'gold' === u ? b.B3.GOLD : b.B3.INTEGRAL),
                                void 0 === e ? '' : b.Z5.getNumberFormat(e, t)
                            );
                        })(u, e);
                        return t ? n().createElement('span', null, t) : null;
                    },
                    V = [
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
                function U(e) {
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
                const j = (e, u, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: b.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    z = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            n = e.args,
                            r = e.onMouseEnter,
                            i = e.onMouseLeave,
                            o = e.onMouseDown,
                            s = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            _ = e.ignoreMouseClick,
                            d = void 0 !== _ && _,
                            E = e.decoratorId,
                            m = void 0 === E ? 0 : E,
                            A = e.isEnabled,
                            F = void 0 === A || A,
                            C = e.targetId,
                            h = void 0 === C ? 0 : C,
                            D = e.onShow,
                            B = e.onHide,
                            v = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, V);
                        const g = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            p = (0, a.useMemo)(() => h || f().resId, [h]),
                            w = (0, a.useCallback)(() => {
                                (g.current.isVisible && g.current.timeoutId) ||
                                    (j(t, m, { isMouseEvent: !0, on: !0, arguments: U(n) }, p),
                                    D && D(),
                                    (g.current.isVisible = !0));
                            }, [t, m, n, p, D]),
                            b = (0, a.useCallback)(() => {
                                if (g.current.isVisible || g.current.timeoutId) {
                                    const e = g.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (g.current.timeoutId = 0)),
                                        j(t, m, { on: !1 }, p),
                                        g.current.isVisible && B && B(),
                                        (g.current.isVisible = !1);
                                }
                            }, [t, m, p, B]),
                            y = (0, a.useCallback)((e) => {
                                g.current.isVisible &&
                                    ((g.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (g.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(g.current.prevTarget) && b();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const e = g.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', y, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', y, { capture: !0 }),
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
                                                  ((k = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((g.current.timeoutId = window.setTimeout(w, c ? 100 : 400)),
                                                          r && r(e),
                                                          k && k(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  b(), null == i || i(u), null == e || e(u);
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  !1 === d && b(), null == s || s(u), null == e || e(u);
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  !1 === d && b(), null == o || o(u), null == e || e(u);
                                              })(u.props.onMouseDown),
                                          },
                                          v,
                                      ),
                                  )
                                : u
                        );
                        var k;
                    },
                    $ = ['children'];
                function G() {
                    return (
                        (G =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        G.apply(this, arguments)
                    );
                }
                const K = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                            return n;
                        })(e, $);
                    return n().createElement(
                        z,
                        G(
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
                let q;
                !(function (e) {
                    (e.goldStats = 'goldInfo'),
                        (e.creditsStats = 'creditsInfo'),
                        (e.crystalInfo = 'crystalInfo'),
                        (e.freeXpInfo = 'freeXPInfo');
                })(q || (q = {}));
                const Y = 'CurrencyBalance_currency_b6',
                    X = 'CurrencyBalance_errorText_b7',
                    Z = { tooltipId: q.goldStats },
                    Q = { tooltipId: q.creditsStats },
                    J = { tooltipId: q.crystalInfo },
                    ee = { tooltipId: q.freeXpInfo },
                    ue = '- - -',
                    te = ({ credits: e, golds: u, crystals: t, freexp: a, isWalletAvailable: r }) =>
                        n().createElement(
                            'div',
                            { className: 'CurrencyBalance_base_e7' },
                            n().createElement(
                                K,
                                { args: J },
                                n().createElement(
                                    'span',
                                    { className: L()(Y, 'CurrencyBalance_currency__crystal_7d') },
                                    r
                                        ? n().createElement(W, { value: t, format: 'integral' })
                                        : n().createElement('div', { className: X }, ue),
                                ),
                            ),
                            n().createElement(
                                K,
                                { args: Z },
                                n().createElement(
                                    'span',
                                    { className: L()(Y, 'CurrencyBalance_currency__gold_27') },
                                    r
                                        ? n().createElement(W, { value: u, format: 'gold' })
                                        : n().createElement('div', { className: X }, ue),
                                ),
                            ),
                            n().createElement(
                                K,
                                { args: Q },
                                n().createElement(
                                    'span',
                                    { className: L()(Y, 'CurrencyBalance_currency__credit_7f') },
                                    r
                                        ? n().createElement(W, { value: e, format: 'integral' })
                                        : n().createElement('div', { className: X }, ue),
                                ),
                            ),
                            n().createElement(
                                K,
                                { args: ee },
                                n().createElement(
                                    'span',
                                    { className: L()(Y, 'CurrencyBalance_currency__freexp_06') },
                                    r
                                        ? n().createElement(W, { value: a, format: 'integral' })
                                        : n().createElement('div', { className: X }, ue),
                                ),
                            ),
                        );
                let ae, ne, re, ie;
                !(function (e) {
                    (e.HUNTER = 'hunter'), (e.BOSS = 'boss'), (e.TANK = 'tank');
                })(ae || (ae = {})),
                    (function (e) {
                        (e.HUNTER = 'hunter'), (e.BOSS = 'boss'), (e.TANK = 'tank');
                    })(ne || (ne = {})),
                    (function (e) {
                        (e.PRIMARY = 'G168_KJpz_T_III'),
                            (e.SECONDARY = 'R212_Object_265T'),
                            (e.MAIN = 'Pl26_Czolg_P_Wz_46'),
                            (e.BOSS = 'Pl26_Czolg_P_Wz_46_Verbesserter');
                    })(re || (re = {})),
                    (function (e) {
                        (e.PRIMARY = 'G168_KJpz_T_III'),
                            (e.SECONDARY = 'R212_Object_265T'),
                            (e.MAIN = 'Pl26_Czolg_P_Wz_46'),
                            (e.BOSS = 'Pl26_Czolg_P_Wz_46_Verbesserter');
                    })(ie || (ie = {}));
                function oe(e) {
                    engine.call('PlaySound', e);
                }
                const se = {
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
                    le = [
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
                function ce() {
                    return (
                        (ce =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        ce.apply(this, arguments)
                    );
                }
                class _e extends n().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && oe(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && oe(this.props.soundClick);
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
                            i = e.type,
                            o = e.classNames,
                            s = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            _ = e.onMouseUp,
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
                                })(e, le)),
                            E = L()(se.base, se[`base__${i}`], se[`base__${r}`], null == o ? void 0 : o.base),
                            m = L()(se.icon, se[`icon__${i}`], se[`icon__${r}`], null == o ? void 0 : o.icon),
                            A = L()(se.glow, null == o ? void 0 : o.glow),
                            F = L()(se.caption, se[`caption__${i}`], null == o ? void 0 : o.caption),
                            C = L()(se.goto, null == o ? void 0 : o.goto);
                        return n().createElement(
                            'div',
                            ce(
                                {
                                    className: E,
                                    onMouseEnter: this._onMouseEnter(s),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(_),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                d,
                            ),
                            'info' !== i && n().createElement('div', { className: se.shine }),
                            n().createElement('div', { className: m }, n().createElement('div', { className: A })),
                            n().createElement('div', { className: F }, u),
                            a && n().createElement('div', { className: C }, a),
                        );
                    }
                }
                _e.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const de = ({ onClose: e }) =>
                        n().createElement(
                            'div',
                            { className: 'CloseButton_base_1c' },
                            n().createElement(_e, {
                                caption: R.strings.menu.viewHeader.closeBtn.label(),
                                type: 'close',
                                side: 'right',
                                onClick: e,
                            }),
                        ),
                    Ee = ({ onClick: e, goto: u }) =>
                        n().createElement(
                            'div',
                            { className: 'BackButton_base_2f' },
                            n().createElement(_e, {
                                caption: R.strings.menu.viewHeader.backBtn.label(),
                                type: 'back',
                                side: 'left',
                                onClick: e,
                                goto: u,
                            }),
                        );
                let me, Ae, Fe;
                !(function (e) {
                    (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                })(me || (me = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.width)] = 'Small'),
                            (e[(e.Medium = l.medium.width)] = 'Medium'),
                            (e[(e.Large = l.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                    })(Ae || (Ae = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.height)] = 'Small'),
                            (e[(e.Medium = l.medium.height)] = 'Medium'),
                            (e[(e.Large = l.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge');
                    })(Fe || (Fe = {}));
                const Ce = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function he() {
                    return (
                        (he =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        he.apply(this, arguments)
                    );
                }
                const De = R.views.common.tooltip_window.simple_tooltip_content,
                    Be = (e) => {
                        let u = e.children,
                            t = e.body,
                            r = e.header,
                            i = e.note,
                            o = e.alert,
                            s = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, Ce);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, s, { body: t, header: r, note: i, alert: o });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [o, t, r, i, s]);
                        return n().createElement(
                            z,
                            he(
                                {
                                    contentId:
                                        ((_ = null == s ? void 0 : s.hasHtmlContent),
                                        _ ? De.SimpleTooltipHtmlContent('resId') : De.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var _;
                    },
                    ve = ['tooltipType'],
                    ge = ['children', 'wrap'];
                function pe(e, u) {
                    if (null == e) return {};
                    var t,
                        a,
                        n = {},
                        r = Object.keys(e);
                    for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                    return n;
                }
                let we;
                !(function (e) {
                    (e.Simple = 'simple'), (e.Backport = 'backport'), (e.Base = 'base');
                })(we || (we = {}));
                const be = (e) => (e.tooltipType, pe(e, ve)),
                    fe = (e) => {
                        let u = e.children,
                            t = e.wrap,
                            a = pe(e, ge);
                        const r = t ? n().createElement('div', null, u) : u;
                        return a.tooltipType === we.Simple
                            ? n().createElement(Be, be(a), r)
                            : a.tooltipType === we.Backport
                              ? n().createElement(K, be(a), r)
                              : ((e) => e.tooltipType === we.Base)(a)
                                ? n().createElement(z, be(a), r)
                                : u;
                    },
                    ye = R.strings.event.WtEventPortals,
                    ke = ({ onBuyButtonClick: e }) => {
                        const u = (0, a.useState)(0),
                            t = u[0],
                            r = u[1],
                            i =
                                (() => {
                                    const e = (0, a.useContext)(F),
                                        u = e.width,
                                        t = e.height,
                                        n = ((e) => {
                                            switch (!0) {
                                                case e.extraLarge:
                                                    return me.ExtraLarge;
                                                case e.large:
                                                    return me.Large;
                                                case e.medium:
                                                    return me.Medium;
                                                case e.small:
                                                    return me.Small;
                                                case e.extraSmall:
                                                    return me.ExtraSmall;
                                                default:
                                                    return (
                                                        console.error('Unreachable media context resolution'),
                                                        me.ExtraSmall
                                                    );
                                            }
                                        })(e),
                                        r = ((e) => {
                                            switch (!0) {
                                                case e.extraLargeWidth:
                                                    return Ae.ExtraLarge;
                                                case e.largeWidth:
                                                    return Ae.Large;
                                                case e.mediumWidth:
                                                    return Ae.Medium;
                                                case e.smallWidth:
                                                    return Ae.Small;
                                                case e.extraSmallWidth:
                                                    return Ae.ExtraSmall;
                                                default:
                                                    return (
                                                        console.error('Unreachable media context resolution'),
                                                        Ae.ExtraSmall
                                                    );
                                            }
                                        })(e),
                                        i = ((e) => {
                                            switch (!0) {
                                                case e.extraLargeHeight:
                                                    return Fe.ExtraLarge;
                                                case e.largeHeight:
                                                    return Fe.Large;
                                                case e.mediumHeight:
                                                    return Fe.Medium;
                                                case e.smallHeight:
                                                    return Fe.Small;
                                                case e.extraSmallHeight:
                                                    return Fe.ExtraSmall;
                                                default:
                                                    return (
                                                        console.error('Unreachable media context resolution'),
                                                        Fe.ExtraSmall
                                                    );
                                            }
                                        })(e);
                                    return {
                                        mediaSize: n,
                                        mediaWidth: r,
                                        mediaHeight: i,
                                        remScreenWidth: u,
                                        remScreenHeight: t,
                                    };
                                })().mediaSize >= me.Medium,
                            o = (0, a.useCallback)(() => {
                                e(), oe('play');
                            }, [e]),
                            s = (0, a.useCallback)(() => {
                                oe('highlight');
                            }, []),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            _ = () => {
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
                                _(),
                                window.addEventListener('resize', _),
                                () => {
                                    window.removeEventListener('resize', _);
                                }
                            ),
                            [],
                        );
                        const d = { tooltipType: we.Simple, body: ye.buyButtonTooltip() },
                            E = (0, a.useMemo)(() => ({ width: `${t}px` }), [t]);
                        return n().createElement(
                            fe,
                            d,
                            n().createElement(
                                'div',
                                { className: 'BuyButton_base_33', style: E, onMouseEnter: s, onClick: o },
                                n().createElement('div', { className: 'BuyButton_image_9e', ref: l }),
                                n().createElement('div', { className: 'BuyButton_imageClickArea_81' }),
                                n().createElement('div', { className: 'BuyButton_text_da', ref: c }, ye.buyButton()),
                                n().createElement(
                                    'div',
                                    {
                                        className: 'BuyButton_flareWrapper_58',
                                        style: {
                                            maskImage: `url('R.images.white_tiger.gui.maps.icons.portals.buy_key_button${i ? '_large' : ''}')`,
                                        },
                                    },
                                    n().createElement('div', { className: 'BuyButton_flare_ed' }),
                                ),
                            ),
                        );
                    },
                    xe = (e, u) => {
                        let t;
                        const a = setTimeout(() => {
                            t = e();
                        }, u);
                        return () => {
                            'function' == typeof t && t(), clearTimeout(a);
                        };
                    },
                    Se = 1.6,
                    Re = (e, u = 150, t = 400, a = 1e3) => ({ appear: t + (u * e + 1), enter: a }),
                    Te = (e) => (u, t) =>
                        u / t >= 2.4000000000000004
                            ? e(viewEnv.remToPx(t) * Se, viewEnv.remToPx(t), u, t)
                            : e(viewEnv.remToPx(u), 0.625 * viewEnv.remToPx(u), u, t),
                    Me = Te((e, u, t, a) => {
                        const n = { width: viewEnv.remToPx(900) * Se, height: viewEnv.remToPx(900) },
                            r = { width: viewEnv.remToPx(1200) * Se, height: viewEnv.remToPx(1200) };
                        return e < n.width
                            ? n
                            : t > l.medium.width && a > l.medium.height && e < r.width
                              ? r
                              : { width: e, height: u };
                    }),
                    Oe =
                        (Te((e, u) => {
                            const t = { width: viewEnv.remToPx(700) * Se, height: viewEnv.remToPx(700) };
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
                    Ne = 'wt_portal_open_swf',
                    Le = {
                        [ae.HUNTER]: '../../videos/wt_event/hunter_portal_open.usm',
                        [ae.BOSS]: '../../videos/wt_event/boss_portal_open.usm',
                    },
                    Pe = {
                        [ie.PRIMARY]: '../../videos/wt_event/primary_tank_portal_idle.usm',
                        [ie.SECONDARY]: '../../videos/wt_event/secondary_tank_portal_idle.usm',
                        [ie.MAIN]: '../../videos/wt_event/main_tank_portal_idle.usm',
                        [ie.BOSS]: '../../videos/wt_event/boss_tank_portal_idle.usm',
                    },
                    Ie = 'wt_tank_show_swf',
                    He = {
                        [ie.PRIMARY]: '../../videos/wt_event/primary_tank_portal_show.usm',
                        [ie.SECONDARY]: '../../videos/wt_event/secondary_tank_portal_show.usm',
                        [ie.MAIN]: '../../videos/wt_event/main_tank_portal_show.usm',
                        [ie.BOSS]: '../../videos/wt_event/boss_tank_portal_show.usm',
                    },
                    We = { [Ne]: '', [Ie]: '' },
                    Ve = 'viewEnv.onSwfEvent';
                var Ue;
                !(function (e) {
                    (e.VideoReady = 'onPlaybackReady'), (e.TankAppearanceVideoComplete = 'onPlaybackComplete');
                })(Ue || (Ue = {}));
                const je = (e, u, ...t) => {
                        const a = JSON.stringify({ command: u, data: t });
                        swfPlayer.gotoAndPlayLabel(e, a);
                    },
                    ze = 'clientMinimized',
                    $e = ({
                        portalType: e,
                        vehicleType: u = ie.PRIMARY,
                        onVideoReady: t,
                        onVideoComplete: r,
                        isContentVisible: i,
                        isVideoReady: o,
                        swfSource: s,
                        shouldApplyRewardDelay: l,
                        skipTankVideo: c = !1,
                    }) => {
                        const _ = (0, a.useContext)(F),
                            d = M('model'),
                            E = d.onVideoStarted,
                            m = d.onPortalRewardsStarted,
                            A = d.isWindowAccessible,
                            C = (0, a.useState)(e === ae.TANK),
                            h = C[0],
                            D = C[1],
                            B = (0, a.useState)(!1),
                            v = B[0],
                            g = B[1],
                            p = O(e),
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
                                xe(() => {
                                    t(), r();
                                }, 14e3),
                            [t, r],
                        ),
                            (0, a.useEffect)(
                                () => () => {
                                    o && !i && y();
                                },
                                [i, o, r, y],
                            ),
                            (0, a.useEffect)(
                                () => () => {
                                    f.current && clearTimeout(f.current);
                                },
                                [],
                            );
                        const k = (0, a.useCallback)(
                            (u) => {
                                switch (u) {
                                    case Ue.VideoReady:
                                        t(), e !== ae.TANK && y();
                                        break;
                                    case Ue.TankAppearanceVideoComplete:
                                        D(!1), r(), v || (m(), g(!0));
                                }
                            },
                            [t, e, r, y, m, v],
                        );
                        (0, a.useEffect)(() => {
                            c && k(Ue.TankAppearanceVideoComplete);
                        }, [c, k]),
                            (0, a.useEffect)(() => {
                                const t = e === ae.TANK ? Ie : Ne,
                                    a = p && (p === ae.TANK ? Ie : Ne),
                                    n = (e) => {
                                        w.current &&
                                            (swfPlayer.removeEventListener(e, w.current), (w.current = void 0)),
                                            b.current &&
                                                (swfPlayer.removeEventListener(Ie, b.current), (b.current = void 0));
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
                                                        je(Ne, 'stopVideo'), je(Ne, 'playVideo');
                                                        const a = e === ae.TANK ? Pe[u] : Le[e];
                                                        We.wt_portal_open_swf !== a &&
                                                            ((We.wt_portal_open_swf = a), je(Ne, 'loadVideo', a)),
                                                            (w.current = swfPlayer.addEventListener(
                                                                t,
                                                                'onPlaybackReady',
                                                                !1,
                                                                0,
                                                            )),
                                                            e === ae.TANK &&
                                                                (je(Ie, 'playVideo'),
                                                                We.wt_tank_show_swf !== He[u] &&
                                                                    ((We.wt_tank_show_swf = He[u]),
                                                                    je(Ie, 'loadVideo', He[u]),
                                                                    E()),
                                                                (b.current = swfPlayer.addEventListener(
                                                                    Ie,
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
                                    engine.on(Ve, k),
                                    () => {
                                        r(), n(t), engine.off(Ve, k);
                                    }
                                );
                            }, [e, u, k, p, m, E]),
                            (0, a.useEffect)(() => {
                                const e = (e) => {
                                    const t = e ? 'pauseVideo' : 'playVideo';
                                    je(Ne, t), We.wt_tank_show_swf === He[u] && je(Ie, t);
                                };
                                return (
                                    engine.on(ze, e),
                                    e(!A),
                                    () => {
                                        engine.off(ze, e);
                                    }
                                );
                            }, [A, u]);
                        const x = (0, a.useMemo)(() => Me(_.width, _.height), [_.width, _.height]),
                            S = L()(Oe.video, h && Oe.video__hidden);
                        return n().createElement(
                            'div',
                            { className: Oe.base },
                            n().createElement(
                                'div',
                                { className: Oe.wrapper },
                                n().createElement('img', {
                                    alt: 'Tank Idle Video',
                                    className: S,
                                    style: x,
                                    src: `${s}wt_portal_open_swf`,
                                }),
                                h &&
                                    n().createElement('img', {
                                        alt: 'Tank Appearance Video',
                                        className: Oe.video,
                                        style: x,
                                        src: `${s}wt_tank_show_swf`,
                                    }),
                            ),
                            n().createElement(
                                'div',
                                { className: Oe.wrapper },
                                n().createElement('div', { className: Oe.vignette, style: x }),
                            ),
                        );
                    },
                    Ge = ({ hasAnimation: e = !1 }) => {
                        const u = L()('Gradient_base_c7', e && 'Gradient_base__hasAnimation_15');
                        return n().createElement('div', { className: u });
                    },
                    Ke = ({ animationDelayStepsCount: e = 1, children: u }) =>
                        n().createElement(
                            'div',
                            { className: 'DelayedAnimationWrapper_base_af', style: { animationDelay: 100 * e + 'ms' } },
                            u,
                        );
                let qe, Ye, Xe, Ze;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(qe || (qe = {})),
                    (function (e) {
                        (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                    })(Ye || (Ye = {})),
                    (function (e) {
                        (e.primary = 'primary'), (e.main = 'main');
                    })(Xe || (Xe = {})),
                    (function (e) {
                        (e.Center = 'center'), (e.Bottom = 'bottom');
                    })(Ze || (Ze = {}));
                const Qe = {
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
                    Je = [
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
                function eu() {
                    return (
                        (eu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        eu.apply(this, arguments)
                    );
                }
                const uu = (e) => {
                        let u = e.id,
                            t = e.isChecked,
                            r = void 0 !== t && t,
                            i = e.isDisabled,
                            o = void 0 !== i && i,
                            s = e.isAlert,
                            l = void 0 !== s && s,
                            c = e.size,
                            _ = void 0 === c ? Ye.medium : c,
                            d = e.type,
                            E = void 0 === d ? Xe.primary : d,
                            m = e.soundHover,
                            A = void 0 === m ? 'highlight' : m,
                            F = e.soundClick,
                            C = void 0 === F ? 'play' : F,
                            h = e.onMouseEnter,
                            D = e.onMouseLeave,
                            B = e.onMouseUp,
                            v = e.onMouseDown,
                            g = e.onClick,
                            p = e.onChange,
                            w = e.onFocus,
                            b = e.onBlur,
                            f = e.text,
                            y = e.contentStyles,
                            k = e.children,
                            x = e.alignment,
                            S = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, Je);
                        const R = (0, a.useState)(!1),
                            T = R[0],
                            M = R[1],
                            O = (0, a.useState)(!1),
                            N = (O[0], O[1]),
                            P = (0, a.useCallback)(
                                (e) => {
                                    o || (p && p(), g && g(e));
                                },
                                [o, p, g],
                            ),
                            I = (0, a.useCallback)(
                                (e) => {
                                    const u = e.button === qe.LEFT;
                                    o || (u && M(!0), u && v && v(e), C && oe(C));
                                },
                                [o, v, C],
                            ),
                            H = (0, a.useCallback)(
                                (e) => {
                                    o || (M(!1), B && B(e));
                                },
                                [o, B],
                            ),
                            W = (0, a.useCallback)(
                                (e) => {
                                    o || (h && h(e), A && oe(A));
                                },
                                [o, h, A],
                            ),
                            V = (0, a.useCallback)(
                                (e) => {
                                    o || (M(!1), D && D(e));
                                },
                                [o, D],
                            ),
                            U = (0, a.useCallback)(
                                (e) => {
                                    o || (N(!0), w && w(e));
                                },
                                [o, w],
                            ),
                            j = (0, a.useCallback)(
                                (e) => {
                                    o || (N(!1), b && b(e));
                                },
                                [o, b],
                            ),
                            z = n().createElement(
                                'div',
                                { className: Qe.label },
                                n().createElement(
                                    'div',
                                    { className: L()(Qe.labelContent, 's-labelContent'), style: y },
                                    f || k,
                                ),
                            );
                        return n().createElement(
                            'div',
                            eu(
                                {
                                    id: u,
                                    className: L()(Qe.base, Qe[`base__${_}`], Qe[`base__${E}`], {
                                        [Qe.base__checked]: r,
                                        [Qe.base__disabled]: o,
                                        [Qe.base__mouseDown]: T,
                                        [Qe.base__alert]: l,
                                        [Qe.base__center]: x === Ze.Center,
                                        [Qe.base__bottom]: x === Ze.Bottom,
                                    }),
                                    onClick: P,
                                    onMouseEnter: W,
                                    onMouseLeave: V,
                                    onMouseDown: I,
                                    onMouseUp: H,
                                    onFocus: U,
                                    onBlur: j,
                                },
                                S,
                            ),
                            n().createElement(
                                'div',
                                { className: Qe.input },
                                n().createElement('div', { className: Qe.alertOverlay }),
                                n().createElement('div', { className: Qe.inputHoverOverlay }),
                                n().createElement('div', { className: Qe.highlight }),
                            ),
                            n().createElement('div', { className: Qe.checkmark }),
                            ((f || k) && z) || null,
                        );
                    },
                    tu = ({ isChecked: e, onClick: u }) =>
                        n().createElement(
                            'div',
                            { className: 'AnimationCheckbox_animationCheckbox_c5' },
                            n().createElement(uu, {
                                text: R.strings.event.WtEventPortals.inside.showAnimation(),
                                size: Ye.large,
                                onClick: u,
                                isChecked: e,
                            }),
                        ),
                    au = (0, a.memo)(
                        ({
                            title: e,
                            children: u,
                            portalType: t,
                            vehicleType: r = ie.PRIMARY,
                            isBoxesEnabled: i,
                            lootBoxesAnimationDelayCount: o,
                            onBuy: s,
                            onBackToPortal: l,
                            onClose: c,
                            availableLootBoxesPurchase: _,
                            openedBoxesCount: d = 0,
                            hasGradient: E = !1,
                            showFinalAnimation: m = !0,
                            isAnimated: A = !0,
                            onAnimationSettingClick: C,
                            launchId: h,
                            showCurrencyBalance: D = !1,
                            currentCrystals: B = 0,
                            currentGold: v = 0,
                            currentCredits: g = 0,
                            currentFreeXP: p = 0,
                            isWalletAvailable: w = !1,
                        }) => {
                            const b = (0, a.useState)(!1),
                                f = b[0],
                                y = b[1],
                                k = (0, a.useState)(!1),
                                x = k[0],
                                S = k[1],
                                T = (0, a.useState)(!1),
                                M = T[0],
                                O = T[1];
                            var N;
                            (N = () => {
                                m ? c() : t === ae.TANK && O(!0);
                            }),
                                H(P.n.ESCAPE, N),
                                (0, a.useEffect)(() => {
                                    S(!1);
                                }, [d, h]);
                            const I = (0, a.useCallback)(() => {
                                    C && C();
                                }, [C]),
                                W = (0, a.useCallback)(() => {
                                    y(!0);
                                }, []),
                                V = (0, a.useCallback)(() => {
                                    S(!0);
                                }, []),
                                U = (0, a.useCallback)(() => {
                                    l();
                                }, [l]),
                                j = o + 1,
                                z = (() => {
                                    const e = (() => {
                                            const e = (0, a.useContext)(F),
                                                u = e.small,
                                                t = e.medium,
                                                n = e.large,
                                                r = e.extraLarge,
                                                i = r || n,
                                                o = i || t;
                                            return {
                                                isMediaSmall: o || u,
                                                isMediaMedium: o,
                                                isMediaLarge: i,
                                                isMediaExtraLarge: r,
                                            };
                                        })(),
                                        u = e.isMediaSmall,
                                        t = e.isMediaMedium,
                                        n = e.isMediaLarge,
                                        r = e.isMediaExtraLarge;
                                    return L()(
                                        u && 'mediaSmall',
                                        t && 'mediaMedium',
                                        n && 'mediaLarge',
                                        r && 'mediaExtraLarge',
                                    );
                                })(),
                                $ = L()('AwardWrapper_base_85', !f && 'AwardWrapper_base__hidden_b6', z),
                                G = !A || (x && E);
                            return n().createElement(
                                'div',
                                { className: $ },
                                n().createElement($e, {
                                    key: h,
                                    portalType: t,
                                    vehicleType: r,
                                    onVideoReady: W,
                                    onVideoComplete: V,
                                    isContentVisible: x,
                                    isVideoReady: f,
                                    swfSource: 'swf://gui/flash/animations/wt_event/usm_video_player.swf?name=',
                                    shouldApplyRewardDelay: A,
                                    skipTankVideo: M,
                                }),
                                G && n().createElement(Ge, { hasAnimation: !0 }),
                                x &&
                                    n().createElement(
                                        n().Fragment,
                                        null,
                                        n().createElement('div', { className: 'AwardWrapper_title_09' }, e),
                                        n().createElement('div', { className: 'AwardWrapper_content_65' }, u),
                                    ),
                                m &&
                                    n().createElement(
                                        Ke,
                                        { animationDelayStepsCount: j },
                                        n().createElement(
                                            'div',
                                            { className: 'AwardWrapper_headerButtonWrapper_45' },
                                            n().createElement(de, { onClose: c }),
                                            n().createElement(Ee, {
                                                onClick: U,
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
                                                    n().createElement(te, {
                                                        crystals: B,
                                                        golds: v,
                                                        credits: g,
                                                        freexp: p,
                                                        isWalletAvailable: w,
                                                    }),
                                                ),
                                                n().createElement('div', {
                                                    className: 'AwardWrapper_backgroundSeperator_76',
                                                }),
                                            ),
                                        i &&
                                            t !== ae.HUNTER &&
                                            n().createElement(ke, {
                                                onBuyButtonClick: s,
                                                availableLootBoxesPurchase: _,
                                            }),
                                        C && n().createElement(tu, { isChecked: A, onClick: I }),
                                    ),
                            );
                        },
                    ),
                    nu = {
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
                let ru, iu;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(ru || (ru = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(iu || (iu = {}));
                const ou = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: r,
                    disabled: i,
                    mixClass: o,
                    soundHover: s,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: _,
                    onMouseDown: d,
                    onMouseUp: E,
                    onMouseLeave: m,
                    onClick: A,
                }) => {
                    const F = (0, a.useRef)(null),
                        C = (0, a.useState)(t),
                        h = C[0],
                        D = C[1],
                        B = (0, a.useState)(!1),
                        v = B[0],
                        g = B[1],
                        p = (0, a.useState)(!1),
                        w = p[0],
                        b = p[1],
                        f = (0, a.useCallback)(() => {
                            i || (F.current && (F.current.focus(), D(!0)));
                        }, [i]),
                        y = (0, a.useCallback)(
                            (e) => {
                                h && null !== F.current && !F.current.contains(e.target) && D(!1);
                            },
                            [h],
                        ),
                        k = (0, a.useCallback)(
                            (e) => {
                                i || (A && A(e));
                            },
                            [i, A],
                        ),
                        x = (0, a.useCallback)(
                            (e) => {
                                i || (null !== s && oe(s), c && c(e), b(!0));
                            },
                            [i, s, c],
                        ),
                        S = (0, a.useCallback)(
                            (e) => {
                                _ && _(e);
                            },
                            [_],
                        ),
                        T = (0, a.useCallback)(
                            (e) => {
                                i || (E && E(e), g(!1));
                            },
                            [i, E],
                        ),
                        M = (0, a.useCallback)(
                            (e) => {
                                i || (null !== l && oe(l), d && d(e), t && f(), g(!0));
                            },
                            [i, l, d, f, t],
                        ),
                        O = (0, a.useCallback)(
                            (e) => {
                                i || (m && m(e), g(!1));
                            },
                            [i, m],
                        ),
                        N = L()(
                            nu.base,
                            nu[`base__${r}`],
                            {
                                [nu.base__disabled]: i,
                                [nu[`base__${u}`]]: u,
                                [nu.base__focus]: h,
                                [nu.base__highlightActive]: v,
                                [nu.base__firstHover]: w,
                            },
                            o,
                        ),
                        P = L()(nu.state, nu.state__default);
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
                            D(t);
                        }, [t]),
                        n().createElement(
                            'div',
                            {
                                ref: F,
                                className: N,
                                onMouseEnter: x,
                                onMouseMove: S,
                                onMouseUp: T,
                                onMouseDown: M,
                                onMouseLeave: O,
                                onClick: k,
                            },
                            r !== ru.ghost &&
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement('div', { className: nu.back }),
                                    n().createElement('span', { className: nu.texture }),
                                ),
                            n().createElement(
                                'span',
                                { className: P },
                                n().createElement('span', { className: nu.stateDisabled }),
                                n().createElement('span', { className: nu.stateHighlightHover }),
                                n().createElement('span', { className: nu.stateHighlightActive }),
                            ),
                            n().createElement(
                                'span',
                                { className: nu.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                ou.defaultProps = { type: ru.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const su = (0, a.memo)(ou),
                    lu = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    cu = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3],
                    _u = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                let du;
                !(function (e) {
                    (e.Primary = 'primary'), (e.Secondary = 'secondary');
                })(du || (du = {}));
                const Eu = ({
                        level: e,
                        type: u,
                        name: t,
                        isLarge: r,
                        isSingle: i,
                        animationDelayStepsCount: o,
                        nation: s,
                        color: l = du.Primary,
                    }) => {
                        const c = (0, a.useMemo)(
                                () => ({
                                    backgroundImage: `url('R.images.gui.maps.icons.vehicleTypes.big.${p(u)}_elite')`,
                                }),
                                [u],
                            ),
                            _ = L()(
                                'Vehicle_base_95',
                                l === du.Primary ? 'Vehicle_base__primary_47' : 'Vehicle_base__secondary_0e',
                                r && 'Vehicle_base__large_e9',
                                i && 'Vehicle_base__single_eb',
                                void 0 !== o && 'Vehicle_base__hasAnimation_56',
                            ),
                            d = (0, a.useMemo)(() => (void 0 !== o ? { animationDelay: 100 * o + 'ms' } : void 0), [o]);
                        return n().createElement(
                            'span',
                            { className: _, style: d },
                            s &&
                                n().createElement('span', {
                                    className: 'Vehicle_flag_f9',
                                    style: { backgroundImage: `url(R.images.gui.maps.icons.flags.c_60x40.${s})` },
                                }),
                            n().createElement(
                                'span',
                                { className: 'Vehicle_level_df' },
                                ((E = e),
                                _u
                                    ? `${E}`
                                    : (function (e) {
                                          let u = '';
                                          for (let t = cu.length - 1; t >= 0; t--)
                                              for (; e >= cu[t]; ) (u += lu[t]), (e -= cu[t]);
                                          return u;
                                      })(E)),
                            ),
                            n().createElement('span', { className: 'Vehicle_type_11', style: c }),
                            n().createElement('span', { className: 'Vehicle_name_63' }, t),
                        );
                        var E;
                    },
                    mu = {
                        base: 'Preview_base_1f',
                        base__hovered: 'Preview_base__hovered_ee',
                        icon: 'Preview_icon_f3',
                        icon__small: 'Preview_icon__small_a1',
                        icon__normal: 'Preview_icon__normal_5c',
                        base__mouseDown: 'Preview_base__mouseDown_d0',
                        label: 'Preview_label_2e',
                        base__visibleLabel: 'Preview_base__visibleLabel_92',
                    },
                    Au = [
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
                function Fu() {
                    return (
                        (Fu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Fu.apply(this, arguments)
                    );
                }
                let Cu;
                !(function (e) {
                    (e.SMALL = 'small'), (e.NORMAL = 'normal');
                })(Cu || (Cu = {}));
                const hu = (0, a.memo)((e) => {
                    let u = e.label,
                        t = e.isVisibleLabel,
                        r = void 0 !== t && t,
                        i = e.autofocus,
                        o = void 0 !== i && i,
                        s = e.soundHover,
                        l = void 0 === s ? 'highlight' : s,
                        c = e.soundClick,
                        _ = void 0 === c ? 'play' : c,
                        d = e.size,
                        E = void 0 === d ? Cu.NORMAL : d,
                        m = e.onClick,
                        A = e.onMouseEnter,
                        F = e.onMouseLeave,
                        C = e.onMouseDown,
                        h = e.onMouseUp,
                        D = e.onFocus,
                        B = e.onBlur,
                        v = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                a,
                                n = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                            return n;
                        })(e, Au);
                    const g = (0, a.useState)(!1),
                        p = g[0],
                        w = g[1],
                        b = (0, a.useState)(!1),
                        f = b[0],
                        y = b[1],
                        k = (0, a.useState)(o),
                        x = k[0],
                        S = k[1],
                        R = (0, a.useRef)(null),
                        T = (0, a.useCallback)(() => {
                            R.current && (R.current.focus(), S(!0));
                        }, []),
                        M = (0, a.useCallback)(
                            (e) => {
                                x && null !== R.current && !R.current.contains(e.target) && S(!1);
                            },
                            [x],
                        );
                    (0, a.useEffect)(
                        () => (
                            document.addEventListener('mousedown', M),
                            () => {
                                document.removeEventListener('mousedown', M);
                            }
                        ),
                        [M],
                    ),
                        (0, a.useEffect)(() => {
                            S(o);
                        }, [o]);
                    const O = (0, a.useCallback)(
                            (e) => {
                                m && m(e);
                            },
                            [m],
                        ),
                        N = (0, a.useCallback)(
                            (e) => {
                                w(!0), C && C(e), _ && oe(_), o && T();
                            },
                            [o, C, T, _],
                        ),
                        P = (0, a.useCallback)(
                            (e) => {
                                w(!1), h && h(e);
                            },
                            [h],
                        ),
                        I = (0, a.useCallback)(
                            (e) => {
                                A && A(e), l && oe(l), y(!0);
                            },
                            [A, l],
                        ),
                        H = (0, a.useCallback)(
                            (e) => {
                                w(!1), y(!1), F && F(e);
                            },
                            [F],
                        ),
                        W = (0, a.useCallback)(
                            (e) => {
                                S(!0), D && D(e);
                            },
                            [D],
                        ),
                        V = (0, a.useCallback)(
                            (e) => {
                                S(!1), B && B(e);
                            },
                            [B],
                        ),
                        U = L()(
                            mu.base,
                            r && mu.base__visibleLabel,
                            p && mu.base__mouseDown,
                            f && mu.base__hovered,
                            x && mu.base__focused,
                        ),
                        j = L()(mu.icon, mu[`icon__${E}`]);
                    return n().createElement(
                        'div',
                        Fu(
                            {
                                ref: R,
                                className: U,
                                onClick: O,
                                onMouseEnter: I,
                                onMouseLeave: H,
                                onMouseDown: N,
                                onMouseUp: P,
                                onFocus: W,
                                onBlur: V,
                            },
                            v,
                        ),
                        n().createElement('div', { className: j }),
                        n().createElement('div', { className: mu.label }, u),
                    );
                });
                let Du, Bu, vu;
                !(function (e) {
                    (e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                })(Du || (Du = {})),
                    (function (e) {
                        (e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.equipCoin = 'equipCoin');
                    })(Bu || (Bu = {})),
                    (function (e) {
                        (e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG');
                    })(vu || (vu = {}));
                const gu = ({ count: e, quantity: u, isCurrency: t, isMultiple: a }) =>
                        n().createElement(
                            n().Fragment,
                            null,
                            t && n().createElement(W, { value: Number(e) }),
                            a && !t && u,
                        ),
                    pu = {
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
                    wu = ({
                        count: e,
                        currency: u,
                        isConfirmReward: t = !1,
                        isSingleReward: a = !1,
                        isAdditionalReward: r = !1,
                        isMultiplyReward: i = !1,
                    }) => {
                        const o = u in Bu,
                            s = e > 1,
                            l = L()(
                                pu.count,
                                t && pu.count__confirmReward,
                                a && pu.count__singleReward,
                                r && pu.count__additionalReward,
                                i && pu.count__multiply,
                            ),
                            c = L()(
                                pu.currency,
                                pu[`currency__${u}`],
                                r && pu.currency__additionalReward,
                                a && pu.currency__singleReward,
                                i && pu.currency__multiply,
                            ),
                            _ =
                                ((d = R.strings.event.award.value()),
                                (E = { count: e }),
                                d.replace(/\{\w+\}/g, (e) => String(E[e.slice(1, -1)])));
                        var d, E;
                        return n().createElement(
                            'span',
                            { className: o ? c : l },
                            n().createElement(gu, { isCurrency: o, count: e, quantity: _, isMultiple: s }),
                        );
                    },
                    bu = () => {},
                    fu = [
                        'width',
                        'height',
                        'getSrcByFrame',
                        'frameCount',
                        'onAnimate',
                        'frameTime',
                        'initialFrameIndex',
                    ];
                function yu() {
                    return (
                        (yu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        yu.apply(this, arguments)
                    );
                }
                const ku = () => {},
                    xu = (0, a.memo)((e) => {
                        let u = e.width,
                            t = e.height,
                            r = e.getSrcByFrame,
                            i = e.frameCount,
                            o = e.onAnimate,
                            s = void 0 === o ? ku : o,
                            l = e.frameTime,
                            c = void 0 === l ? 33 : l,
                            _ = e.initialFrameIndex,
                            d = void 0 === _ ? 0 : _,
                            E = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    n = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                                return n;
                            })(e, fu);
                        const m = (0, a.useRef)(null);
                        return (
                            (0, a.useEffect)(() => {
                                const e = m.current;
                                if (!e) return;
                                const a = e.getContext('2d'),
                                    n = ((e, u) => {
                                        const t = [];
                                        for (let a = 0; a <= e; a++) {
                                            const e = new Image();
                                            (e.src = u(a)), t.push(e);
                                        }
                                        return t;
                                    })(i, r),
                                    o = ((e, u = 0) => {
                                        let t = u;
                                        return () => {
                                            const u = t;
                                            return (t += 1), t > e && (t = 0), u;
                                        };
                                    })(i - 1, d),
                                    l = setInterval(() => {
                                        const r = o();
                                        a.clearRect(0, 0, e.width, e.height);
                                        const i = n[r];
                                        a.drawImage(i, 0, 0, u, t), s(r, i);
                                    }, c);
                                return () => clearInterval(l);
                            }, [i, c, r, t, d, s, u]),
                            n().createElement('canvas', yu({}, E, { width: u, height: t, ref: m }))
                        );
                    }),
                    Su = {
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
                    Ru = ['children'],
                    Tu = ['children'];
                function Mu(e, u) {
                    if (null == e) return {};
                    var t,
                        a,
                        n = {},
                        r = Object.keys(e);
                    for (a = 0; a < r.length; a++) (t = r[a]), u.indexOf(t) >= 0 || (n[t] = e[t]);
                    return n;
                }
                function Ou() {
                    return (
                        (Ou =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Ou.apply(this, arguments)
                    );
                }
                const Nu = {
                        idle: { state: 'idle', nextState: 'start', timeout: 400 },
                        start: { state: 'start', nextState: 'bump', timeout: 960 },
                        bump: { state: 'bump', nextState: 'end', timeout: 33 },
                        end: { state: 'end', stop: !0 },
                    },
                    Lu = { width: 250, height: 250 },
                    Pu = () => {},
                    Iu = (e) =>
                        `R.images.white_tiger.gui.maps.icons.sequence.convert_twirly.twirly_convertation_${e.toString().padStart(5, '0')}`,
                    Hu = (e) => ({ width: `${e.width}rem`, height: `${e.height}rem` }),
                    Wu = (0, a.memo)(
                        ({
                            children: [e, u],
                            className: t,
                            classNames: r = {},
                            onAnimate: i = Pu,
                            animationSettings: o = Nu,
                            getSrcByFrameTwirly: s = Iu,
                            size: l = Lu,
                        }) => {
                            const c = ((e, u) => {
                                const t = (0, a.useState)(e.idle),
                                    n = t[0],
                                    r = t[1],
                                    i = (0, a.useRef)(bu),
                                    o = (0, a.useCallback)(() => {
                                        n.stop ||
                                            (i.current(),
                                            (i.current = xe(() => {
                                                r(e[n.nextState]);
                                            }, n.timeout)));
                                    }, [n, e]);
                                return (
                                    (0, a.useEffect)(() => (o(), () => i.current()), [o]),
                                    {
                                        step: n,
                                        setStep: (0, a.useCallback)(
                                            (u) => {
                                                r(e[u]);
                                            },
                                            [e],
                                        ),
                                        next: o,
                                    }
                                );
                            })(o).step.state;
                            return (
                                (0, a.useEffect)(() => {
                                    i(c);
                                }, [c, i]),
                                (0, a.useEffect)(() => {
                                    'start' === c && oe('ev_white_tiger_hangar_lootbox_reward_conv');
                                }, [c]),
                                n().createElement(
                                    'div',
                                    { className: L()(Su.base, Su[`base__${c}`], t), style: Hu(l) },
                                    n().createElement(
                                        'div',
                                        { className: L()(Su.bumpStars, r.bumpStars) },
                                        n().createElement('div', { className: L()(Su.star, Su.star__one, r.star) }),
                                        n().createElement('div', { className: L()(Su.star, Su.star__second, r.star) }),
                                        n().createElement('div', { className: L()(Su.star, Su.star__third, r.star) }),
                                    ),
                                    n().createElement('div', { className: L()(Su.bump, r.bump) }),
                                    n().createElement('div', { className: L()(Su.bumpRays, r.bumpRays) }),
                                    n().createElement(
                                        'div',
                                        { className: L()(Su.reward, r.reward) },
                                        ('idle' === c || 'start' === c) &&
                                            n().createElement(
                                                'div',
                                                { className: L()(Su.rewardFrom, r.rewardFrom) },
                                                e,
                                            ),
                                        ('end' === c || 'bump' === c) &&
                                            n().createElement('div', { className: L()(Su.rewardTo, r.rewardTo) }, u),
                                    ),
                                    ('start' === c || 'bump' === c) &&
                                        n().createElement(
                                            xu,
                                            Ou({}, l, {
                                                className: L()(Su.twirlyCanvas, r.twirlyCanvas),
                                                frameCount: 50,
                                                frameTime: 16,
                                                getSrcByFrame: s,
                                            }),
                                        ),
                                    n().createElement('div', { className: L()(Su.bumpParticles, r.bumpParticles) }),
                                )
                            );
                        },
                        (e, u) => {
                            e.children;
                            const t = Mu(e, Ru),
                                a = (u.children, Mu(u, Tu));
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
                    Vu = {
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
                    Uu = (e) =>
                        `R.images.white_tiger.gui.maps.icons.sequence.convert_particles.items_idle_${e.toString().padStart(5, '0')}`,
                    ju = Object.assign({}, Nu, { idle: Object.assign({}, Nu.idle, { timeout: 1800 }) });
                let zu;
                !(function (e) {
                    (e.Single = 'single'), (e.Multiply = 'multiply'), (e.Base = 'base');
                })(zu || (zu = {}));
                const $u = { width: 100, height: 100 },
                    Gu = { width: 450, height: 450 },
                    Ku = { width: 500, height: 500 },
                    qu = (e) => (e.extraSmall || e.small ? Gu : Ku),
                    Yu = ({ isSingle: e, isMultiply: u, value: t, vehicleName: r, isAdditionalReward: i }) => {
                        const o = (0, a.useContext)(F),
                            s = (0, a.useMemo)(() => (e ? zu.Single : u ? zu.Multiply : zu.Base), [u, e]),
                            l = L()(Vu.base, Vu[`base__${s}`], i && Vu.base__additionalReward);
                        return n().createElement(
                            'div',
                            { className: l },
                            n().createElement(xu, {
                                width: u ? $u.width : qu(o).width,
                                height: u ? $u.height : qu(o).height,
                                className: L()(Vu.particlesCanvas, Vu.blue),
                                frameCount: 60,
                                getSrcByFrame: Uu,
                            }),
                            n().createElement(
                                Wu,
                                { size: u ? $u : qu(o), animationSettings: ju, className: Vu.nyAnimation },
                                [
                                    n().createElement(
                                        'div',
                                        { key: 1, className: Vu.tank },
                                        n().createElement('div', { className: Vu.convertIcon }),
                                        n().createElement('div', { className: Vu.vehicleName }, r),
                                    ),
                                    n().createElement(
                                        'div',
                                        { key: 2, className: Vu.gold },
                                        n().createElement('div', { className: Vu.convertIcon }),
                                        n().createElement(
                                            'div',
                                            { className: Vu.value },
                                            n().createElement(gu, { isCurrency: !0, count: t, isMultiple: u }),
                                        ),
                                    ),
                                ],
                            ),
                        );
                    },
                    Xu = {
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
                let Zu, Qu;
                !(function (e) {
                    (e.Big = 'big'), (e.Large = 's600x450');
                })(Zu || (Zu = {})),
                    (function (e) {
                        (e.Default = 'default'), (e.Additional = 'additional'), (e.Multiply = 'multiply');
                    })(Qu || (Qu = {}));
                const Ju = R.views.common.tooltip_window,
                    et = (e, u) => ({ backgroundImage: `url('R.images.gui.maps.icons.quests.bonuses.${u}.${e}')` }),
                    ut = (e) => ({ backgroundImage: `url('${e}')` }),
                    tt = ['credits', 'gold', 'crystal'],
                    at = R.strings.event.awardView.previewBtnText(),
                    nt = (0, a.memo)(
                        ({
                            tooltipId: e,
                            name: u,
                            label: t,
                            value: r,
                            icon: i,
                            specName: o,
                            specialId: s,
                            compensationSource: l = '',
                            isCompensation: c = !1,
                            isConfirmReward: _ = !1,
                            isSingleReward: d = !1,
                            isMultiplyReward: E = !1,
                            theme: m = Qu.Default,
                            size: A,
                        }) => {
                            const F = M('model'),
                                C = F.vehicle,
                                h = F.onPreview,
                                D = tt.includes(u),
                                B = 'premium_plus' === u,
                                v = 'vehicles' === u,
                                g = m === Qu.Additional,
                                w = v || ('customizations' === u && i && i.includes('style3d')),
                                b = (v || 'gold' === u) && c,
                                f = t && m === Qu.Default && !D && !v,
                                y = m === Qu.Default ? Zu.Large : Zu.Big,
                                k = (0, a.useMemo)(() => {
                                    switch (u) {
                                        case 'premium_plus':
                                            return et(`${u}_${r}`, y);
                                        case 'crewBooks':
                                            return ((e, u) => ({
                                                backgroundImage: `url('R.images.gui.maps.icons.crewBooks.books.${u}.${e}')`,
                                            }))(String(i), y);
                                        case 'goodies':
                                            return et(String(i), y);
                                        case 'customizations':
                                        case 'tmanToken':
                                            return m === Qu.Default
                                                ? et(`collection.${i}`, y)
                                                : et(s ? 'style_3d' : `${i}`, y);
                                        case 'gold':
                                            return c ? ut('') : et(u, y);
                                        case 'vehicles':
                                            return o
                                                ? ut(R.images.gui.maps.shop.vehicles.c_600x450.$dyn(p(o)))
                                                : C.specName
                                                  ? ut(R.images.gui.maps.shop.vehicles.c_600x450.$dyn(p(C.specName)))
                                                  : et('vehicles', y);
                                        default:
                                            return et(u, y);
                                    }
                                }, [s, u, r, y, i, m, c, C, o]),
                                x = (0, a.useMemo)(() => ({ value: r, tooltipId: e }), [e, r]),
                                S = (0, a.useMemo)(
                                    () => Ju.backport_tooltip_content.BackportTooltipContent('resId'),
                                    [],
                                ),
                                T = (0, a.useCallback)(() => {
                                    v && C.intCD && h({ intCD: C.intCD }), s && h({ intCD: s });
                                }, [v, C, h, s]),
                                O = L()(Xu.rewardImage, b && Xu.rewardImage__compensation),
                                N = L()(
                                    Xu.base,
                                    E && Xu.base__multiply,
                                    _ && Xu.base__confirmReward,
                                    d && Xu.base__singleReward,
                                    v && Xu.base__vehicleReward,
                                    Xu[`base__${A}`],
                                    m !== Qu.Default && Xu[`base__${m}`],
                                );
                            return n().createElement(
                                z,
                                { ignoreShowDelay: !0, contentId: S, args: x },
                                n().createElement(
                                    'div',
                                    { className: N },
                                    b
                                        ? n().createElement(Yu, {
                                              isSingle: d,
                                              isMultiply: E,
                                              value: r,
                                              vehicleName: l,
                                              isAdditionalReward: g,
                                          })
                                        : n().createElement(
                                              'div',
                                              { className: O, style: k },
                                              w &&
                                                  !b &&
                                                  !E &&
                                                  !v &&
                                                  n().createElement(
                                                      'div',
                                                      { className: Xu.preview },
                                                      n().createElement(hu, {
                                                          onClick: T,
                                                          label: at,
                                                          isVisibleLabel: !0,
                                                      }),
                                                  ),
                                          ),
                                    b || !v || C.specName
                                        ? null
                                        : n().createElement('div', { className: Xu.tankName }, t),
                                    !B &&
                                        !b &&
                                        n().createElement(wu, {
                                            count: r,
                                            currency: u,
                                            isConfirmReward: _,
                                            isSingleReward: d,
                                            isAdditionalReward: g,
                                            isMultiplyReward: E,
                                        }),
                                    f &&
                                        n().createElement(
                                            'div',
                                            { className: L()(Xu.description, d && Xu.description__single) },
                                            t,
                                        ),
                                    v &&
                                        !E &&
                                        (g
                                            ? n().createElement('span', { className: Xu.tankSpecName }, t)
                                            : n().createElement(
                                                  'span',
                                                  { className: L()(Xu.vehicle, d && Xu.vehicle__single) },
                                                  n().createElement(Eu, {
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
                var rt = t(5659);
                const it = { base: 'AnimationItem_base_cd', entered: 'AnimationItem_entered_01' },
                    ot = ['index', 'isSingleReward', 'theme', 'delay', 'onEntered'];
                function st() {
                    return (
                        (st =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        st.apply(this, arguments)
                    );
                }
                const lt = (e) => {
                        let u = e.index,
                            t = e.isSingleReward,
                            r = void 0 !== t && t,
                            i = e.theme,
                            o = void 0 === i ? Qu.Default : i,
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
                            })(e, ot);
                        const _ = (0, a.useCallback)(() => {
                            oe('ev_white_tiger_hangar_lootbox_item'), l && l();
                        }, [l]);
                        return n().createElement(
                            rt.uT,
                            { in: !0, appear: !0, timeout: Re(u, 150, s), onEntered: _ },
                            (e) => {
                                const u = L()(it.base, it[e]);
                                return n().createElement(
                                    'div',
                                    { className: u },
                                    n().createElement(nt, st({}, c, { isSingleReward: r, theme: o })),
                                );
                            },
                        );
                    },
                    ct = 'Content_btnHolder_44';
                function _t() {
                    return (
                        (_t =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        _t.apply(this, arguments)
                    );
                }
                const dt = { animationDelay: '700ms' },
                    Et = ({
                        additionalRewards: e,
                        vehicle: u,
                        tankReward: t,
                        footerAnimationDelayCount: r,
                        onPreview: i,
                        onBackToPortal: o,
                    }) => {
                        const s = (0, a.useMemo)(() => ({ animationDelay: 100 * r + 'ms' }), [r]),
                            l = (0, a.useContext)(mt),
                            c = (0, a.useCallback)(() => {
                                u.intCD && i({ intCD: u.intCD });
                            }, [u, i]),
                            _ = (0, a.useCallback)(() => {
                                o();
                            }, [o]),
                            d = { tooltipId: null == t ? void 0 : t.tooltipId };
                        return n().createElement(
                            'div',
                            { className: 'Content_base_a4' },
                            n().createElement(Eu, {
                                level: u.level,
                                type: u.type,
                                name: u.name,
                                isLarge: !0,
                                animationDelayStepsCount: 6,
                            }),
                            n().createElement(
                                z,
                                {
                                    ignoreShowDelay: !0,
                                    contentId:
                                        R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                            'resId',
                                        ),
                                    args: d,
                                },
                                n().createElement('div', { className: 'Content_toolTipArea_5a' }),
                            ),
                            n().createElement(
                                'div',
                                { className: 'Content_wrapper_e6' },
                                Boolean(e.items.length) &&
                                    n().createElement(
                                        'div',
                                        { className: 'Content_additional_aa', style: dt },
                                        n().createElement('div', { className: 'Content_additionalBackground_60' }),
                                        n().createElement(
                                            'div',
                                            { className: 'Content_additionalTitle_ea' },
                                            R.strings.event.portalAward.additionalTitle(),
                                        ),
                                        n().createElement(
                                            'div',
                                            { className: 'Content_additionalWrapper_87' },
                                            e.items.map(({ value: u }, t) => {
                                                const a = t === e.items.length - 1 && l ? l : void 0;
                                                return (
                                                    'customizations' === u.name && (u.icon = u.typeIcon),
                                                    n().createElement(
                                                        lt,
                                                        _t({ key: t }, u, {
                                                            index: t,
                                                            theme: Qu.Additional,
                                                            delay: 700,
                                                            onEntered: a,
                                                        }),
                                                    )
                                                );
                                            }),
                                        ),
                                    ),
                                n().createElement(
                                    'div',
                                    { className: 'Content_controls_67', style: s },
                                    n().createElement(
                                        'div',
                                        { className: ct },
                                        n().createElement(
                                            su,
                                            { size: iu.medium, type: ru.main, onClick: c },
                                            R.strings.event.vehiclePortal.openGarageButton(),
                                        ),
                                    ),
                                    n().createElement(
                                        'div',
                                        { className: ct },
                                        n().createElement(
                                            su,
                                            { size: iu.medium, type: ru.primary, onClick: _ },
                                            R.strings.event.vehiclePortal.backToPortalButton(),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    },
                    mt = (0, a.createContext)(null),
                    At = R.strings.event.portalVehicleAward,
                    Ft = () => {
                        var e;
                        const u = M('model'),
                            t = u.isBoxesEnabled,
                            r = u.onBackToPortal,
                            i = u.onClose,
                            o = u.onPreview,
                            s = u.onBuy,
                            l = u.rewards,
                            c = u.additionalRewards,
                            _ = u.vehicle,
                            d = u.availableLootBoxesPurchase,
                            E = u.eventTank,
                            m = (0, a.useState)(!1),
                            A = m[0],
                            F = m[1];
                        (0, a.useEffect)(() => F(!1), []);
                        const C = (0, a.useCallback)(() => F(!0), []),
                            h = 7 + 1.5 * c.items.length,
                            D = (0, a.useCallback)(() => {
                                null == i || i();
                            }, [i]),
                            B = null == (e = l.items[0]) ? void 0 : e.value,
                            v = h + 1;
                        return n().createElement(
                            mt.Provider,
                            { value: C },
                            n().createElement(
                                au,
                                {
                                    title: At.title(),
                                    portalType: ae.TANK,
                                    vehicleType: E,
                                    isBoxesEnabled: t,
                                    onBuy: s,
                                    onBackToPortal: r,
                                    onClose: D,
                                    availableLootBoxesPurchase: d,
                                    lootBoxesAnimationDelayCount: v,
                                    showFinalAnimation: A,
                                },
                                n().createElement(Et, {
                                    additionalRewards: c,
                                    onPreview: o,
                                    vehicle: _,
                                    tankReward: B,
                                    footerAnimationDelayCount: v,
                                    onBackToPortal: r,
                                }),
                            ),
                        );
                    };
                engine.whenReady.then(() => {
                    i().render(
                        n().createElement(B, null, n().createElement(Ft, null)),
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
                    for (var [u, t, a] = deferred[s], r = !0, i = 0; i < u.length; i++)
                        (!1 & a || n >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[i]))
                            ? u.splice(i--, 1)
                            : ((r = !1), a < n && (n = a));
                    if (r) {
                        deferred.splice(s--, 1);
                        var o = t();
                        void 0 !== o && (e = o);
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
            var e = { 749: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var a,
                        n,
                        [r, i, o] = t,
                        s = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (a in i) __webpack_require__.o(i, a) && (__webpack_require__.m[a] = i[a]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (u && u(t); s < r.length; s++)
                        (n = r[s]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(9822));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
