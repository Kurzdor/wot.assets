(() => {
    'use strict';
    var __webpack_modules__ = {
            527: (u, e, t) => {
                t.r(e), t.d(e, { mouse: () => o, onResize: () => i });
                var n = t(2472),
                    r = t(1176);
                const i = (0, n.E)('clientResized'),
                    a = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') },
                    o = (function () {
                        const u = { listeners: 0, enabled: !0, initialized: !1 };
                        function e() {
                            u.enabled && (0, r.R)(!1);
                        }
                        function t() {
                            u.enabled && (0, r.R)(!0);
                        }
                        function n() {
                            u.enabled
                                ? u.listeners < 1
                                    ? ((u.initialized = !1),
                                      document.body.removeEventListener('mouseenter', e),
                                      document.body.removeEventListener('mouseleave', t))
                                    : u.initialized ||
                                      ((u.initialized = !0),
                                      document.body.addEventListener('mouseenter', e),
                                      document.body.addEventListener('mouseleave', t))
                                : (0, r.R)(!1);
                        }
                        const i = ['down', 'up', 'move'].reduce(
                            (e, t) => (
                                (e[t] = (function (e) {
                                    return (t) => {
                                        u.listeners += 1;
                                        let r = !0;
                                        const i = `mouse${e}`,
                                            o = a[e]((u) => t([u, 'outside']));
                                        function s(u) {
                                            t([u, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(i, s),
                                            n(),
                                            () => {
                                                r &&
                                                    (o(),
                                                    window.removeEventListener(i, s),
                                                    (u.listeners -= 1),
                                                    n(),
                                                    (r = !1));
                                            }
                                        );
                                    };
                                })(t)),
                                e
                            ),
                            {},
                        );
                        return Object.assign({}, i, {
                            disable() {
                                (u.enabled = !1), n();
                            },
                            enable() {
                                (u.enabled = !0), n();
                            },
                            enableOutside() {
                                u.enabled && (0, r.R)(!0);
                            },
                            disableOutside() {
                                u.enabled && (0, r.R)(!1);
                            },
                        });
                    })();
            },
            5959: (u, e, t) => {
                t.r(e),
                    t.d(e, {
                        events: () => n,
                        getMouseGlobalPosition: () => i,
                        getSize: () => r,
                        graphicsQuality: () => a,
                    });
                var n = t(527);
                function r(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function i(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const a = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (u, e, t) => {
                function n(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                t.d(e, { R: () => n });
            },
            2472: (u, e, t) => {
                function n(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                t.d(e, { E: () => n });
            },
            3138: (u, e, t) => {
                t.d(e, { O: () => r });
                var n = t(5959);
                const r = { view: t(7641), client: n };
            },
            3722: (u, e, t) => {
                function n(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function r(u, e, t) {
                    return `url(${n(u, e, t)})`;
                }
                t.r(e), t.d(e, { getBgUrl: () => r, getTextureUrl: () => n });
            },
            6112: (u, e, t) => {
                t.d(e, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (u, e, t) => {
                t.d(e, { U: () => r });
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
            7641: (u, e, t) => {
                t.r(e),
                    t.d(e, {
                        addModelObserver: () => A,
                        addPreloadTexture: () => o,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => b,
                        events: () => i.U,
                        extraSize: () => g,
                        forceTriggerMouseMove: () => p,
                        freezeTextureBeforeResize: () => _,
                        getBrowserTexturePath: () => E,
                        getDisplayStatus: () => f,
                        getScale: () => d,
                        getSize: () => c,
                        getViewGlobalPosition: () => D,
                        isEventHandled: () => v,
                        isFocused: () => w,
                        pxToRem: () => B,
                        remToPx: () => C,
                        resize: () => l,
                        sendEvent: () => a.qP,
                        setAnimateWindow: () => m,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => F,
                        whenTutorialReady: () => y,
                    });
                var n = t(3722),
                    r = t(6112),
                    i = t(6538),
                    a = t(8566);
                function o(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function s(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function E(u, e, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, n);
                }
                function A(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function F(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function c(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function l(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function D(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: C(e.x), y: C(e.y) };
                }
                function _() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function d() {
                    return viewEnv.getScale();
                }
                function B(u) {
                    return viewEnv.pxToRem(u);
                }
                function C(u) {
                    return viewEnv.remToPx(u);
                }
                function m(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function w() {
                    return viewEnv.isFocused();
                }
                function h() {
                    return viewEnv.setEventHandled();
                }
                function v() {
                    return viewEnv.isEventHandled();
                }
                function p() {
                    viewEnv.forceTriggerMouseMove();
                }
                function f() {
                    return viewEnv.getShowingStatus();
                }
                const b = Object.keys(r.W).reduce(
                        (u, e) => ((u[e] = () => viewEnv.getShowingStatus() === r.W[e]), u),
                        {},
                    ),
                    g = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    y = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : i.U.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (u, e, t) => {
                t.d(e, { qP: () => i });
                const n = ['args'],
                    r = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const i = e.args,
                                a = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        n,
                                        r = {},
                                        i = Object.keys(u);
                                    for (n = 0; n < i.length; n++) (t = i[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                    return r;
                                })(e, n);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, a, {
                                          arguments:
                                              ((r = i),
                                              Object.entries(r).map(([u, e]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, a));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var r;
                    },
                    i = {
                        close(u) {
                            r('popover' === u ? 2 : 32);
                        },
                        minimize() {
                            r(64);
                        },
                        move(u) {
                            r(16, { isMouseEvent: !0, on: u });
                        },
                    };
            },
            5521: (u, e, t) => {
                let n, r;
                t.d(e, { n: () => n }),
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
                    })(n || (n = {})),
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
                    })(r || (r = {}));
            },
            1358: (u, e, t) => {
                t.d(e, { Z: () => i });
                var n = t(3138);
                class r {
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
                        return window.__dataTracker || (window.__dataTracker = new r()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(u, e, t = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const i = n.O.view.addModelObserver(u, t, r);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = e),
                                  t > 0 && (this._views[t] ? this._views[t].push(i) : (this._views[t] = [i])))
                                : console.error("Can't add callback for model:", u),
                            i
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
                            const n = this._callbacks[t];
                            void 0 !== n && n(u, e);
                        });
                    }
                }
                r.__instance = void 0;
                const i = r;
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
                t.d(e, { Sw: () => i.Z, B0: () => s, ry: () => m });
                class n {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (u) => {
                                this.entries.forEach(({ container: e, callback: t }) => {
                                    let n = u.target;
                                    do {
                                        if (n === e) return;
                                        n = n.parentNode;
                                    } while (n);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return n.__instance || (n.__instance = new n()), n.__instance;
                    }
                    register(u, e) {
                        this.addMouseListener(), this.entries.push({ container: u, callback: e });
                    }
                    unregister(u, e) {
                        const t = u,
                            n = e;
                        (this.entries = this.entries.filter(({ container: u, callback: e }) => u !== t || e !== n)),
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
                var i = t(1358);
                const a = {
                        getNumberFormat: (u, e) => systemLocale.getNumberFormat(u, e),
                        getRealFormat: (u, e) => systemLocale.getRealFormat(u, e),
                        getTimeFormat: (u, e) => systemLocale.getTimeFormat(u, e),
                        getDateFormat: (u, e) => systemLocale.getDateFormat(u, e),
                        toUpperCase: (u) => systemLocale.toUpperCase(u),
                        toLowerCase: (u) => systemLocale.toUpperCase(u),
                    },
                    o = {
                        getNumberFormat: (u) => userLocale.getNumberFormat(u),
                        getTimeFormat: (u, e, t) => userLocale.getTimeFormat(u, e, void 0 === t || t),
                        getTimeString: (u, e, t) => userLocale.getTimeString(u, e, void 0 === t || t),
                    };
                let s;
                var E;
                ((E = s || (s = {}))[(E.UNDEFINED = 0)] = 'UNDEFINED'),
                    (E[(E.TOOLTIP = 1)] = 'TOOLTIP'),
                    (E[(E.POP_OVER = 2)] = 'POP_OVER'),
                    (E[(E.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (E[(E.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (E[(E.MOVE = 16)] = 'MOVE'),
                    (E[(E.CLOSE = 32)] = 'CLOSE'),
                    (E[(E.MINIMIZE = 64)] = 'MINIMIZE');
                const A = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    F = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    l = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var D = t(5521),
                    _ = t(3138);
                const d = ['args'];
                function B(u, e, t, n, r, i, a) {
                    try {
                        var o = u[i](a),
                            s = o.value;
                    } catch (u) {
                        return void t(u);
                    }
                    o.done ? e(s) : Promise.resolve(s).then(n, r);
                }
                const C = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
                    m = (function () {
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
                                    return new Promise(function (n, r) {
                                        var i = u.apply(e, t);
                                        function a(u) {
                                            B(i, n, r, a, o, 'next', u);
                                        }
                                        function o(u) {
                                            B(i, n, r, a, o, 'throw', u);
                                        }
                                        a(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    w = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const r = e.args,
                                i = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        n,
                                        r = {},
                                        i = Object.keys(u);
                                    for (n = 0; n < i.length; n++) (t = i[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                    return r;
                                })(e, d);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, i, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([u, e]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, i));
                        } else viewEnv.handleViewEvent({ __Type: t, type: u });
                        var n;
                    },
                    h = () => w(s.CLOSE),
                    v = (u, e) => {
                        u.keyCode === D.n.ESCAPE && e();
                    };
                var p = t(7572);
                const f = r.instance,
                    b = {
                        DataTracker: i.Z,
                        ViewModel: p.Z,
                        ViewEventType: s,
                        NumberFormatType: A,
                        RealFormatType: F,
                        TimeFormatType: c,
                        DateFormatType: l,
                        makeGlobalBoundingBox: C,
                        sendMoveEvent: (u) => w(s.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: () => w(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            w(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, n, r = R.invalid('resId'), i) => {
                            const a = _.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                E = o.x,
                                A = o.y,
                                F = o.width,
                                c = o.height,
                                l = {
                                    x: _.O.view.pxToRem(E) + a.x,
                                    y: _.O.view.pxToRem(A) + a.y,
                                    width: _.O.view.pxToRem(F),
                                    height: _.O.view.pxToRem(c),
                                };
                            w(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: e,
                                bbox: C(l),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (u) => {
                            const e = (e) => v(e, u);
                            return (
                                window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            v(u, h);
                        },
                        handleViewEvent: w,
                        onBindingsReady: m,
                        onLayoutReady: () =>
                            new Promise((u) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        u();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                        dumpViewModel: function u(e) {
                            const t = {};
                            if ('object' != typeof e) return e;
                            for (const n in e)
                                if (Object.prototype.hasOwnProperty.call(e, n)) {
                                    const r = Object.prototype.toString.call(e[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = e[n];
                                        t[n] = [];
                                        for (let e = 0; e < r.length; e++) t[n].push({ value: u(r[e].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = u(e[n]))
                                            : (t[n] = e[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: f,
                        SystemLocale: a,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = b;
            },
            5622: (u, e, t) => {
                var n = t(6179),
                    r = t.n(n),
                    i = t(493),
                    a = t.n(i),
                    o = t(6483),
                    s = t.n(o);
                let E, A;
                function F(u, e) {
                    return u.replace(/\{\w+\}/g, (u) => String(e[u.slice(1, -1)]));
                }
                var c;
                !(function (u) {
                    (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                })(E || (E = {})),
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
                    ((c = A || (A = {})).SHORT_DATE = 'short-date'),
                    (c.SHORT_TIME = 'short-time'),
                    (c.SHORT_DATE_TIME = 'short-date-time'),
                    (c.FULL_DATE = 'full-date'),
                    (c.FULL_DATE_TIME = 'full-date-time'),
                    (c.MONTH = 'month'),
                    (c.MONTH_DATE = 'month-date'),
                    (c.DATE_MONTH = 'date-month'),
                    (c.MONTH_YEAR = 'month-year'),
                    (c.WEEK_DAY = 'week-day'),
                    (c.WEEK_DAY_TIME = 'week-day-time'),
                    (c.YEAR = 'year'),
                    (c.DATE_YEAR = 'date-year');
                var l = t(4179);
                const D = 1e3,
                    _ = 86400;
                Date.now();
                const d = () => {};
                var B = t(3138);
                const C = (u = 1) => {
                        const e = new Error().stack;
                        let t,
                            n = R.invalid('resId');
                        return (
                            e &&
                                ((t = e.split('\n')[u].split('.js')[0].split('/').pop() || ''),
                                window.__feature &&
                                    window.__feature !== t &&
                                    window.subViews[t] &&
                                    (n = window.subViews[t].id)),
                            { caller: t, stack: e, resId: n }
                        );
                    },
                    m = (u, e) => u.split('.').reduce((u, e) => u && u[e], e),
                    w = (u) => u && 'ArrayItem' === u.__proto__.constructor.name,
                    h = (u, e) => (u.length > 0 ? `${u}.${e}` : e),
                    v = l.Sw.instance;
                let p;
                !(function (u) {
                    (u.None = 'None'), (u.Shallow = 'Shallow'), (u.Deep = 'Deep');
                })(p || (p = {}));
                const f = (u = 'model', e = p.Deep) => {
                        const t = (0, n.useState)(0),
                            r = (t[0], t[1]),
                            i = (0, n.useMemo)(() => C(), []),
                            a = i.caller,
                            o = i.resId,
                            s = (0, n.useMemo)(
                                () => (window.__feature && window.__feature !== a ? `subViews.${a}.${u}` : u),
                                [a, u],
                            ),
                            E = (0, n.useState)(() =>
                                ((u) => {
                                    const e = m(u, window);
                                    for (const u in e) 'function' == typeof e[u] && (e[u] = e[u].bind(e));
                                    return w(e) ? e.value : e;
                                })(
                                    ((u) =>
                                        ((u, e) =>
                                            u.split('.').reduce((u, e) => {
                                                const t = m(`${u}.${e}`, window);
                                                return w(t) ? ((u, e) => `${u}.${e}.value`)(u, e) : `${u}.${e}`;
                                            }))(u))(s),
                                ),
                            ),
                            A = E[0],
                            F = E[1],
                            c = (0, n.useRef)(-1);
                        return (
                            ((u) => {
                                const e = (0, n.useRef)(!1);
                                e.current || (u(), (e.current = !0));
                            })(() => {
                                if (
                                    ('boolean' == typeof e &&
                                        ((e = e ? p.Deep : p.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    e !== p.None)
                                ) {
                                    const t = (u) => {
                                            ((u) => u && 'CoherentArrayProxy' === u.__proto__.constructor.name)(u) &&
                                            e === p.Deep
                                                ? (u === A && r((u) => u + 1), F(u))
                                                : F(Object.assign([], u));
                                        },
                                        n = ((u) => {
                                            const e = ((u) => {
                                                    const e = C(),
                                                        t = e.caller,
                                                        n = e.resId,
                                                        r =
                                                            window.__feature && window.__feature !== t && t
                                                                ? `subViews.${t}`
                                                                : '';
                                                    return { modelPrefix: r, modelPath: h(r, ''), resId: n };
                                                })(),
                                                t = e.modelPrefix,
                                                n = u.split('.');
                                            if (n.length > 0) {
                                                const u = [n[0]];
                                                return (
                                                    n.reduce((e, n) => {
                                                        const r = m(h(t, `${e}.${n}`), window);
                                                        return w(r)
                                                            ? (u.push(r.id), `${e}.${n}.value`)
                                                            : (u.push(n), `${e}.${n}`);
                                                    }),
                                                    u.reduce((u, e) => u + '.' + e)
                                                );
                                            }
                                            return '';
                                        })(u);
                                    c.current = v.addCallback(n, t, o, e === p.Deep);
                                }
                            }),
                            (0, n.useEffect)(() => {
                                if (e !== p.None)
                                    return () => {
                                        v.removeCallback(c.current, o);
                                    };
                            }, [o, e]),
                            A
                        );
                    },
                    b =
                        (l.Sw.instance,
                        (u = 0, e, t = 0, r = d) => {
                            const i = (0, n.useState)(u),
                                a = i[0],
                                o = i[1];
                            return (
                                (0, n.useEffect)(() => {
                                    if (u > 0) {
                                        o(u);
                                        const n = Date.now(),
                                            i = setInterval(
                                                () => {
                                                    const e = u - Math.floor((Date.now() - n) / D);
                                                    null !== t && e <= t ? (o(t), r && r(), clearInterval(i)) : o(e);
                                                },
                                                (e || (u > 120 ? 60 : 1)) * D,
                                            );
                                        return () => {
                                            clearInterval(i);
                                        };
                                    }
                                }, [u, e, t, r]),
                                a
                            );
                        });
                let g, y;
                function S(u) {
                    engine.call('PlaySound', u);
                }
                !(function (u) {
                    (u[(u.HighRisk = 1)] = 'HighRisk'),
                        (u[(u.MediumRisk = 2)] = 'MediumRisk'),
                        (u[(u.LowRisk = 3)] = 'LowRisk');
                })(g || (g = {})),
                    (function (u) {
                        (u.Announce = 'announce'),
                            (u.Active = 'active'),
                            (u.Finished = 'finished'),
                            (u.Frozen = 'frozen');
                    })(y || (y = {}));
                const k = {
                    playHighlight() {
                        S('highlight');
                    },
                    playClick() {
                        S('play');
                    },
                    playYes() {
                        S('yes1');
                    },
                };
                var T = t(7030);
                let O;
                !(function (u) {
                    (u.Big = 'big'),
                        (u.WideSmall = 'wideSmall'),
                        (u.ThinSmall = 'thinSmall'),
                        (u.ThinExtraSmall = 'thinExtraSmall');
                })(O || (O = {}));
                const M = {
                        '302*152': O.Big,
                        '302*114': O.WideSmall,
                        '222*114': O.ThinSmall,
                        '162*114': O.ThinExtraSmall,
                    },
                    P = { [O.Big]: 240, [O.WideSmall]: 240, [O.ThinSmall]: 180, [O.ThinExtraSmall]: 120 };
                let x;
                !(function (u) {
                    (u.Normal = 'normal'), (u.Hover = 'hover');
                })(x || (x = {}));
                const L = (u) => (u < 0.5 ? 4 * u * u * u : (u - 1) * (2 * u - 2) * (2 * u - 2) + 1),
                    N = (u) => u - Math.floor(Date.now() / D),
                    I = {
                        base: 'BannerContent_base_28',
                        icon: 'BannerContent_icon_a2',
                        icon__infoText: 'BannerContent_icon__infoText_98',
                        icon__frozen: 'BannerContent_icon__frozen_5a',
                        base__thinSmall: 'BannerContent_base__thinSmall_34',
                        base__wideSmall: 'BannerContent_base__wideSmall_09',
                        base__thinExtraSmall: 'BannerContent_base__thinExtraSmall_b3',
                        content: 'BannerContent_content_aa',
                        title: 'BannerContent_title_c3',
                        base__big: 'BannerContent_base__big_af',
                        info: 'BannerContent_info_a9',
                        base__frozen: 'BannerContent_base__frozen_2a',
                        timer: 'BannerContent_timer_9d',
                        timeIcon: 'BannerContent_timeIcon_8a',
                        lockIcon: 'BannerContent_lockIcon_c0',
                    },
                    U = (0, n.memo)(({ frontlineState: u, endDate: e, currentSize: t }) => {
                        const i = b(N(e), 60),
                            a = i < _,
                            o = u === y.Frozen,
                            E = (0, n.useRef)(null),
                            A = (0, n.useRef)(null),
                            c = (0, n.useRef)(null),
                            l = (0, n.useState)(!0),
                            d = l[0],
                            B = l[1],
                            C = (0, n.useState)(!1),
                            m = C[0],
                            w = C[1],
                            h = (0, n.useMemo)(() => {
                                switch (u) {
                                    case y.Finished:
                                        return R.strings.fl_banner.chooseReward();
                                    case y.Frozen:
                                        return R.strings.fl_banner.battlesFrozen();
                                }
                                return '';
                            }, [u]),
                            v = (0, n.useMemo)(() => {
                                const t = R.strings.fl_banner.date,
                                    n = (() => {
                                        if (m && a) return t.justTime();
                                        switch (u) {
                                            case y.Announce:
                                                return a ? t.tillStart() : t.fromDate();
                                            case y.Active:
                                                return a ? t.battlesAvailable() : t.tillDate();
                                            case y.Finished:
                                            case y.Frozen:
                                                return a ? t.justTime() : t.tillDate();
                                        }
                                        return '';
                                    })(),
                                    r = new Date(e * D),
                                    s = r.getDate(),
                                    E = r.getMonth(),
                                    A = ((u, e) =>
                                        u.hours >= 1
                                            ? e && u.minutes >= 1
                                                ? `${F(R.strings.common.duration.hours(), { hours: u.hours })} ${F(R.strings.common.duration.minutes(), { minutes: u.minutes })}`
                                                : F(R.strings.common.duration.hours(), { hours: u.hours })
                                            : u.minutes >= 1
                                              ? F(R.strings.common.duration.minutes(), { minutes: u.minutes })
                                              : F(R.strings.fl_banner.date.lessThanMinute(), { minute: 1 }))(
                                        (function (u = 0) {
                                            let e = u;
                                            const t = Math.trunc(e / _);
                                            e -= t * _;
                                            const n = Math.trunc(e / 3600);
                                            e -= 3600 * n;
                                            const r = Math.trunc(e / 60);
                                            return (e -= 60 * r), { days: t, hours: n, minutes: r, seconds: e };
                                        })(i),
                                        o,
                                    ),
                                    c = { day: s, month: R.strings.menu.dateTime.months.$num(E + 1) };
                                return (
                                    (l = a ? { time: A } : c),
                                    n.replace(/(\{|%\()\w+(\}|\)s)/g, (u) => {
                                        const e = 0 === u.indexOf('%') ? 2 : 1;
                                        return String(l[u.slice(e, -e)]);
                                    })
                                );
                                var l;
                            }, [u, e, i, a, o, m]);
                        (0, n.useEffect)(
                            () =>
                                ((u) => {
                                    let e,
                                        t = null;
                                    return (
                                        (t = requestAnimationFrame(() => {
                                            t = requestAnimationFrame(() => {
                                                (t = null),
                                                    (e = void (
                                                        E.current &&
                                                        A.current &&
                                                        (E.current.offsetHeight > 24 ||
                                                            (h && A.current.offsetHeight > 20)) &&
                                                        B(!1)
                                                    ));
                                            });
                                        })),
                                        () => {
                                            'function' == typeof e && e(), null !== t && cancelAnimationFrame(t);
                                        }
                                    );
                                })(),
                            [E, A, h, t],
                        ),
                            (0, n.useEffect)(() => {
                                c.current && c.current.offsetWidth > P[t] && w(!0);
                            }, [c, t]);
                        const p = s()(I.base, I[`base__${t}`], o && I.base__frozen),
                            f = s()(I.icon, h && I.icon__infoText, o && I.icon__frozen);
                        return r().createElement(
                            'div',
                            { className: p },
                            d && r().createElement('div', { className: f }),
                            r().createElement(
                                'div',
                                { className: I.content },
                                r().createElement('div', { className: I.title, ref: E }, R.strings.fl_banner.title()),
                                h && r().createElement('div', { className: I.info, ref: A }, h),
                            ),
                            r().createElement(
                                'div',
                                { className: I.timer, ref: c },
                                a &&
                                    (o
                                        ? r().createElement('div', { className: I.lockIcon })
                                        : r().createElement('div', { className: I.timeIcon })),
                                v,
                            ),
                        );
                    });
                let V, z, H;
                !(function (u) {
                    (u.HangarView = 'hangar'),
                        (u.SetupView = 'setup_view'),
                        (u.ProgressView = 'progress_view'),
                        (u.RewardsView = 'rewards_view'),
                        (u.RewardsSelectionView = 'rewards_selection_view'),
                        (u.SkillsView = 'skills_view'),
                        (u.AwardsView = 'awards_view'),
                        (u.ContainerView = 'container_view');
                })(V || (V = {})),
                    (function (u) {
                        (u.AbilitiesCheckboxTooltip = 'abilities_checkbox_tooltip'),
                            (u.EpicWidgetTooltip = 'epic_widget_tooltip'),
                            (u.BannerPerformance = 'banner_performance_tooltip'),
                            (u.SkillPointsTooltip = 'skill_points_tooltip'),
                            (u.AbilityLevelsTooltip = 'ability_levels_tooltip'),
                            (u.SkillOrderTooltip = 'skill_order_tooltip'),
                            (u.SkillLevelTab = 'skill_level_tab'),
                            (u.RewardsButton = 'rewards_button'),
                            (u.RewardsButtonTooltip = 'rewards_button_tooltip'),
                            (u.RewardTooltip = 'reward_tooltip'),
                            (u.AwardsOkButton = 'awards_ok'),
                            (u.AwardsView = 'awards_view'),
                            (u.RewardsSelectionView = 'rewards_selection_view');
                    })(z || (z = {})),
                    (function (u) {
                        (u.Click = 'click'), (u.Close = 'close');
                    })(H || (H = {}));
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
                function j(u) {
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
                const q = (u, e, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: l.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    K = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            r = u.args,
                            i = u.onMouseEnter,
                            a = u.onMouseLeave,
                            o = u.onMouseDown,
                            s = u.onClick,
                            E = u.ignoreShowDelay,
                            A = void 0 !== E && E,
                            F = u.ignoreMouseClick,
                            c = void 0 !== F && F,
                            l = u.decoratorId,
                            D = void 0 === l ? 0 : l,
                            _ = u.isEnabled,
                            d = void 0 === _ || _,
                            B = u.targetId,
                            m = void 0 === B ? 0 : B,
                            w = u.onShow,
                            h = u.onHide,
                            v = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    r = {},
                                    i = Object.keys(u);
                                for (n = 0; n < i.length; n++) (t = i[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                return r;
                            })(u, W);
                        const p = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            f = (0, n.useMemo)(() => m || C().resId, [m]),
                            b = (0, n.useCallback)(() => {
                                (p.current.isVisible && p.current.timeoutId) ||
                                    (q(t, D, { isMouseEvent: !0, on: !0, arguments: j(r) }, f),
                                    w && w(),
                                    (p.current.isVisible = !0));
                            }, [t, D, r, f, w]),
                            g = (0, n.useCallback)(() => {
                                if (p.current.isVisible || p.current.timeoutId) {
                                    const u = p.current.timeoutId;
                                    u > 0 && (clearTimeout(u), (p.current.timeoutId = 0)),
                                        q(t, D, { on: !1 }, f),
                                        p.current.isVisible && h && h(),
                                        (p.current.isVisible = !1);
                                }
                            }, [t, D, f, h]),
                            y = (0, n.useCallback)((u) => {
                                p.current.isVisible &&
                                    ((p.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (p.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(p.current.prevTarget) && g();
                                    }, 200)));
                            }, []);
                        return (
                            (0, n.useEffect)(() => {
                                const u = p.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', y, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', y, { capture: !0 }),
                                            u && window.clearTimeout(u);
                                    }
                                );
                            }, []),
                            (0, n.useEffect)(() => {
                                !1 === d && g();
                            }, [d, g]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', g),
                                    () => {
                                        window.removeEventListener('mouseleave', g), g();
                                    }
                                ),
                                [g],
                            ),
                            d
                                ? (0, n.cloneElement)(
                                      e,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((S = e.props.onMouseEnter),
                                                  (u) => {
                                                      (u.clientX === window.innerWidth &&
                                                          u.clientY === window.innerHeight) ||
                                                          ((p.current.timeoutId = window.setTimeout(b, A ? 100 : 400)),
                                                          i && i(u),
                                                          S && S(u));
                                                  }),
                                              onMouseLeave: ((u) => (e) => {
                                                  g(), null == a || a(e), null == u || u(e);
                                              })(e.props.onMouseLeave),
                                              onClick: ((u) => (e) => {
                                                  !1 === c && g(), null == s || s(e), null == u || u(e);
                                              })(e.props.onClick),
                                              onMouseDown: ((u) => (e) => {
                                                  !1 === c && g(), null == o || o(e), null == u || u(e);
                                              })(e.props.onMouseDown),
                                          },
                                          v,
                                      ),
                                  )
                                : e
                        );
                        var S;
                    },
                    $ = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function G() {
                    return (
                        (G =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        G.apply(this, arguments)
                    );
                }
                const Y = R.views.common.tooltip_window.simple_tooltip_content,
                    Z = (u) => {
                        let e = u.children,
                            t = u.body,
                            i = u.header,
                            a = u.note,
                            o = u.alert,
                            s = u.args,
                            E = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    r = {},
                                    i = Object.keys(u);
                                for (n = 0; n < i.length; n++) (t = i[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                return r;
                            })(u, $);
                        const A = (0, n.useMemo)(() => {
                            const u = Object.assign({}, s, { body: t, header: i, note: a, alert: o });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [o, t, i, a, s]);
                        return r().createElement(
                            K,
                            G(
                                {
                                    contentId:
                                        ((F = null == s ? void 0 : s.hasHtmlContent),
                                        F ? Y.SimpleTooltipHtmlContent('resId') : Y.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: A,
                                },
                                E,
                            ),
                            e,
                        );
                        var F;
                    };
                let X;
                !(function (u) {
                    (u[(u.NonSet = 0)] = 'NonSet'),
                        (u[(u.Debug = 10)] = 'Debug'),
                        (u[(u.Info = 20)] = 'Info'),
                        (u[(u.Warning = 30)] = 'Warning');
                })(X || (X = {}));
                const Q = 'tooltip_watched';
                let J;
                !(function (u) {
                    (u.Click = 'click'), (u.KeyDown = 'keydown');
                })(J || (J = {}));
                const uu = () => Date.now(),
                    eu = (u, e) => {
                        const t = ((u, e) => {
                                const t = (0, n.useCallback)(
                                    (t, n = X.Info, r) => {
                                        r || (r = {}),
                                            Object.keys(r).length >= 200 ||
                                                window.uiLoggerModel.log({
                                                    feature: u,
                                                    group: e,
                                                    action: t,
                                                    logLevel: n,
                                                    params: JSON.stringify(r),
                                                });
                                    },
                                    [u, e],
                                );
                                return (u, e, n) => t(u, e, n);
                            })(u, e),
                            r = (0, n.useRef)(new Map()),
                            i = (0, n.useRef)(new Map()),
                            a = (0, n.useCallback)(
                                (u) => {
                                    if (!u) return;
                                    const e = r.current.get(u);
                                    (void 0 !== e && e > 0) || r.current.set(u, uu());
                                },
                                [r],
                            ),
                            o = (0, n.useCallback)(() => {
                                r.current.clear(), i.current.clear();
                            }, [r, i]),
                            s = (0, n.useCallback)(
                                (u) => {
                                    u &&
                                        void 0 !== r.current.get(u) &&
                                        void 0 === i.current.get(u) &&
                                        i.current.set(u, uu());
                                },
                                [r, i],
                            ),
                            E = (0, n.useCallback)(
                                (u) => {
                                    if (!u) return;
                                    const e = r.current.get(u);
                                    if (void 0 === e) return;
                                    const t = i.current.get(u);
                                    if (void 0 === t) return;
                                    i.current.delete(u);
                                    const n = uu() - t;
                                    r.current.set(u, e + n);
                                },
                                [r, i],
                            ),
                            A = (0, n.useCallback)(
                                (u, e = 0, n, a) => {
                                    const o = r.current.get(u);
                                    if (void 0 === o) return;
                                    void 0 !== i.current.get(u) && E(u), r.current.delete(u);
                                    const s = (uu() - o) / 1e3;
                                    s <= e ||
                                        ((a = ((u, e) => (void 0 === u && (u = {}), (u.timeSpent = e), u))(a, s)),
                                        t(u, n, a));
                                },
                                [r, i, t, E],
                            );
                        return [(u) => a(u), (u, e, t, n) => A(u, e, t, n), () => o(), (u) => s(u), (u) => E(u)];
                    },
                    tu = ['children', 'item', 'parentScreen', 'itemState', 'info'];
                function nu() {
                    return (
                        (nu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        nu.apply(this, arguments)
                    );
                }
                const ru = (0, n.memo)((u) => {
                        let e = u.children,
                            t = u.item,
                            i = u.parentScreen,
                            a = u.itemState,
                            o = u.info,
                            s = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    r = {},
                                    i = Object.keys(u);
                                for (n = 0; n < i.length; n++) (t = i[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                return r;
                            })(u, tu);
                        const E = ((u, e, t, r) => {
                                const i = ((u) => {
                                        const e = eu(u, 'metrics'),
                                            t = e[0],
                                            r = e[1],
                                            i = e[2],
                                            a = e[3],
                                            o = e[4],
                                            s = (0, n.useCallback)(
                                                (u) => {
                                                    const e = u.action,
                                                        t = u.timeLimit,
                                                        n = u.logLevel;
                                                    r(
                                                        e,
                                                        t,
                                                        n,
                                                        (({
                                                            partnerID: u,
                                                            item: e,
                                                            parentScreen: t,
                                                            itemState: n,
                                                            info: r,
                                                        }) => ({
                                                            item: e,
                                                            partnerID: u || null,
                                                            parent_screen: t || null,
                                                            item_state: n || null,
                                                            additional_info: r || null,
                                                        }))(u),
                                                    );
                                                },
                                                [r],
                                            );
                                        return [(u) => t(u), (u) => s(u), () => i(), (u) => a(u), (u) => o(u)];
                                    })('epic_battle'),
                                    a = i[0],
                                    o = i[1];
                                return [
                                    (0, n.useCallback)(() => a(Q), [a]),
                                    (0, n.useCallback)(
                                        () =>
                                            o({
                                                action: Q,
                                                timeLimit: 2,
                                                item: u,
                                                parentScreen: e,
                                                itemState: t,
                                                info: r,
                                            }),
                                        [o, u, e, t, r],
                                    ),
                                ];
                            })(t, i, a, o),
                            A = E[0],
                            F = E[1];
                        return r().createElement(Z, nu({}, s, { onMouseEnter: A, onMouseLeave: F }), e);
                    }),
                    iu = {
                        base: 'BannerPerformanceRisk_base_5a',
                        base__thinSmall: 'BannerPerformanceRisk_base__thinSmall_25',
                        base__wideSmall: 'BannerPerformanceRisk_base__wideSmall_18',
                        base__thinExtraSmall: 'BannerPerformanceRisk_base__thinExtraSmall_1e',
                        performanceIcon: 'BannerPerformanceRisk_performanceIcon_94',
                        base__performanceType1: 'BannerPerformanceRisk_base__performanceType1_ac',
                        base__performanceType2: 'BannerPerformanceRisk_base__performanceType2_6a',
                    },
                    au = (0, n.memo)(({ performanceRisk: u, currentSize: e }) => {
                        const t =
                                u === g.MediumRisk
                                    ? R.strings.fl_banner.tooltips.mediumRisk
                                    : R.strings.fl_banner.tooltips.highRisk,
                            n = {
                                item: z.BannerPerformance,
                                parentScreen: V.HangarView,
                                info: u.toString(),
                                header: t.title(),
                                body: t.body(),
                            },
                            i = s()(iu.base, iu[`base__performanceType${u}`], iu[`base__${e}`]);
                        return r().createElement(
                            'div',
                            { className: i },
                            r().createElement(ru, n, r().createElement('div', { className: iu.performanceIcon })),
                        );
                    }),
                    ou = [
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
                function su() {
                    return (
                        (su =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        su.apply(this, arguments)
                    );
                }
                const Eu = (0, n.memo)(function (u) {
                        let e = u.width,
                            t = u.height,
                            i = u.getImageSource,
                            a = u.frameCount,
                            o = u.onAnimate,
                            s = u.frameTime,
                            E = void 0 === s ? 33 : s,
                            A = u.initialFrameIndex,
                            F = void 0 === A ? 0 : A,
                            c = u.lastFrameIndex,
                            l = void 0 === c ? a - 1 : c,
                            D = u.loop,
                            _ = void 0 === D || D,
                            d = u.state,
                            B = void 0 === d ? 'play' : d,
                            C = u.onAnimationDone,
                            m = u.onAnimationComplete,
                            w = u.poster,
                            h = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    r = {},
                                    i = Object.keys(u);
                                for (n = 0; n < i.length; n++) (t = i[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                return r;
                            })(u, ou);
                        const v = (0, n.useRef)(null);
                        return (
                            (0, n.useEffect)(() => {
                                const u = v.current;
                                if (!u) return;
                                const e = u.getContext('2d'),
                                    t = (t) => {
                                        e.clearRect(0, 0, u.width, u.height), e.drawImage(t.img, -t.x, -t.y);
                                    };
                                switch (B) {
                                    case 'play':
                                        return (function () {
                                            const u = cu(F, l, i),
                                                e = Au(F, l),
                                                n = window.setInterval(() => {
                                                    const r = e(),
                                                        i = u.get(r);
                                                    i
                                                        ? (null == o || o(r, i),
                                                          t(i),
                                                          r === l &&
                                                              (null == m || m(),
                                                              _ || (null == C || C(), window.clearInterval(n))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, E);
                                            return () => window.clearInterval(n);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const u = 0 === F && w ? { path: w, x: 0, y: 0 } : i(F),
                                                e = new Image();
                                            e.src = u.path;
                                            const n = () => t(Fu(u, e));
                                            return (
                                                e.addEventListener('load', n), () => e.removeEventListener('load', n)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [E, i, F, l, _, o, m, C, w, B]),
                            r().createElement('canvas', su({}, h, { width: e, height: t, ref: v }))
                        );
                    }),
                    Au = (u, e) => {
                        let t = u;
                        return () => {
                            const n = t;
                            return (t += 1), t > e && (t = u), n;
                        };
                    },
                    Fu = (u, e) => Object.assign({}, u, { img: e }),
                    cu = (u, e, t) => {
                        const n = new Map(),
                            r = {};
                        for (let i = u; i <= e; i++) {
                            const u = t(i),
                                e = r[u.path];
                            if (e) n.set(i, Fu(u, e));
                            else {
                                const e = new Image();
                                (r[u.path] = e),
                                    (e.src = u.path),
                                    (e.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${i})`,
                                            u.path,
                                            `(${u.x},${u.y})`,
                                        );
                                    }),
                                    n.set(i, Fu(u, e));
                            }
                        }
                        return n;
                    },
                    lu = {
                        base: 'BannerSequence_base_fa',
                        sparks: 'BannerSequence_sparks_2e',
                        base__thinSmall: 'BannerSequence_base__thinSmall_ef',
                        base__thinExtraSmall: 'BannerSequence_base__thinExtraSmall_0c',
                        base__gray: 'BannerSequence_base__gray_20',
                    },
                    Du = (0, n.memo)(
                        ({ type: u = x.Normal, cardSize: e = O.Big, isGray: t = !1, isPerformanceRisk: n = !1 }) => {
                            const i = {
                                width: 300,
                                height: 150,
                                frameCount: 67,
                                chunk: { count: 1, columns: 6, rows: 12 },
                                getChunkPath:
                                    ((a = `R.images.frontline.gui.maps.banner.sequence.sparks_${u}_`),
                                    (u) => `${a}${u}`),
                            };
                            var a;
                            const o = (function (u) {
                                const e = u.chunk,
                                    t = e.rows * e.columns;
                                return (n) => {
                                    const r = n % t,
                                        i = (r % e.columns) * u.width,
                                        a = Math.trunc(r / e.columns) * u.height;
                                    return { path: u.getChunkPath(Math.trunc(n / t)), x: i, y: a };
                                };
                            })(i);
                            return r().createElement(
                                'div',
                                { className: s()(lu.base, lu[`base__${e}`], t && lu.base__gray) },
                                r().createElement(Eu, {
                                    state: n ? 'stop' : 'play',
                                    className: lu.sparks,
                                    width: i.width,
                                    height: i.height,
                                    frameCount: i.frameCount,
                                    getImageSource: o,
                                }),
                            );
                        },
                    ),
                    _u = (0, n.memo)(
                        ({
                            children: u,
                            isVisible: e = !0,
                            delay: t = 0,
                            duration: n = 800,
                            opacityFrom: i = 0,
                            opacityEnter: a = 1,
                            opacityLeave: o = 0,
                            classMix: s,
                        }) =>
                            (0, T.useTransition)(e, {
                                key: e,
                                from: { opacity: i },
                                enter: { opacity: a },
                                leave: { opacity: o },
                                delay: t,
                                config: { duration: n, easing: L },
                            })((e, t) => t && r().createElement(T.animated.div, { className: s, style: e }, u)),
                    ),
                    du = {
                        base: 'BannerApp_base_ff',
                        bg: 'BannerApp_bg_6c',
                        base__hover: 'BannerApp_base__hover_d2',
                        base__frozen: 'BannerApp_base__frozen_18',
                        base__big: 'BannerApp_base__big_3d',
                        base__wideSmall: 'BannerApp_base__wideSmall_73',
                        base__thinSmall: 'BannerApp_base__thinSmall_63',
                        base__thinExtraSmall: 'BannerApp_base__thinExtraSmall_ad',
                        sequence: 'BannerApp_sequence_b0',
                        stroke: 'BannerApp_stroke_5b',
                        highlight: 'BannerApp_highlight_bb',
                        hoverEffect: 'BannerApp_hoverEffect_07',
                        frozen: 'BannerApp_frozen_a3',
                        rewardsCornerLight: 'BannerApp_rewardsCornerLight_11',
                        rewards: 'BannerApp_rewards_f9',
                        rewardShadow: 'BannerApp_rewardShadow_8c',
                        rewardIcon: 'BannerApp_rewardIcon_69',
                        rewardLabel: 'BannerApp_rewardLabel_26',
                        pressed: 'BannerApp_pressed_2d',
                    },
                    Bu = () => {
                        const u = f(),
                            e = u.frontlineState,
                            t = u.phaseEndDate,
                            i = u.rewardsCount,
                            a = u.performanceRisk,
                            o = u.onClick,
                            E = (0, n.useState)(!1),
                            A = E[0],
                            F = E[1],
                            c = (0, n.useCallback)(() => {
                                k.playHighlight(), F(!0);
                            }, []),
                            l = (0, n.useCallback)(() => {
                                F(!1);
                            }, []),
                            D = (0, n.useCallback)(() => {
                                k.playClick(), o();
                            }, [o]),
                            d = (() => {
                                const u = B.O.view.getSize('rem'),
                                    e = (0, n.useState)({ height: u.height, width: u.width }),
                                    t = e[0],
                                    r = e[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        const u = (u) => {
                                            r(u);
                                        };
                                        return (
                                            engine.on('screenResized', u),
                                            () => {
                                                engine.off('screenResized', u);
                                            }
                                        );
                                    }, []),
                                    t
                                );
                            })(),
                            C = d.width,
                            m = d.height,
                            w = M[`${C}*${m}`] || O.Big,
                            h = N(t) < _,
                            v = e === y.Frozen,
                            p = e === y.Finished && i,
                            b = a !== g.LowRisk,
                            S = (0, T.useSpring)({
                                from: { x: 10, opacity: 0 },
                                to: { x: 0, opacity: 1 },
                                delay: 0,
                                config: { duration: 800, easing: L },
                            }),
                            R = s()(du.base, du[`base__${w}`], v && du.base__frozen, A && du.base__hover);
                        return r().createElement(
                            T.animated.div,
                            { className: R, onClick: D, onMouseLeave: l, onMouseEnter: c, style: S },
                            r().createElement('div', { className: du.bg }),
                            r().createElement('div', { className: du.stroke }),
                            r().createElement(
                                _u,
                                { classMix: du.sequence, isVisible: A },
                                r().createElement(Du, { type: x.Hover, cardSize: w, isPerformanceRisk: b, isGray: v }),
                            ),
                            r().createElement(_u, { classMix: du.hoverEffect, isVisible: A }),
                            v
                                ? r().createElement('div', { className: du.frozen })
                                : h && r().createElement('div', { className: du.highlight }),
                            b
                                ? r().createElement(au, { performanceRisk: a, currentSize: w })
                                : r().createElement(
                                      _u,
                                      { classMix: du.sequence, isVisible: !A },
                                      r().createElement(Du, { type: x.Normal, cardSize: w, isGray: v }),
                                  ),
                            r().createElement(U, { frontlineState: e, endDate: t, currentSize: w }),
                            p &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement(
                                        'div',
                                        { className: du.rewards },
                                        r().createElement('div', { className: du.rewardShadow }),
                                        r().createElement('div', { className: du.rewardIcon }),
                                        r().createElement('div', { className: du.rewardLabel }, i),
                                    ),
                                    r().createElement('div', { className: du.rewardsCornerLight }),
                                ),
                            r().createElement('div', { className: du.pressed }),
                        );
                    };
                engine.whenReady.then(() => {
                    a().render(r().createElement(Bu, null), document.getElementById('root'));
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
        (__webpack_require__.O = (u, e, t, n) => {
            if (!e) {
                var r = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [e, t, n] = deferred[s], i = !0, a = 0; a < e.length; a++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[a]))
                            ? e.splice(a--, 1)
                            : ((i = !1), n < r && (r = n));
                    if (i) {
                        deferred.splice(s--, 1);
                        var o = t();
                        void 0 !== o && (u = o);
                    }
                }
                return u;
            }
            n = n || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > n; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [e, t, n];
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
        (__webpack_require__.j = 301),
        (() => {
            var u = { 301: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var n,
                        r,
                        [i, a, o] = t,
                        s = 0;
                    if (i.some((e) => 0 !== u[e])) {
                        for (n in a) __webpack_require__.o(a, n) && (__webpack_require__.m[n] = a[n]);
                        if (o) var E = o(__webpack_require__);
                    }
                    for (e && e(t); s < i.length; s++)
                        (r = i[s]), __webpack_require__.o(u, r) && u[r] && u[r][0](), (u[r] = 0);
                    return __webpack_require__.O(E);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(5622));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
