(() => {
    'use strict';
    var __webpack_modules__ = {
            527: (e, t, i) => {
                i.r(t), i.d(t, { mouse: () => o, onResize: () => n });
                var r = i(2472),
                    a = i(1176);
                const n = (0, r.E)('clientResized'),
                    s = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') };
                const o = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, a.R)(!1);
                    }
                    function i() {
                        e.enabled && (0, a.R)(!0);
                    }
                    function r() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', i))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', i))
                            : (0, a.R)(!1);
                    }
                    const n = ['down', 'up', 'move'].reduce(
                        (t, i) => (
                            (t[i] = (function (t) {
                                return (i) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const n = `mouse${t}`,
                                        o = s[t]((e) => i([e, 'outside']));
                                    function l(e) {
                                        i([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(n, l),
                                        r(),
                                        () => {
                                            a &&
                                                (o(),
                                                window.removeEventListener(n, l),
                                                (e.listeners -= 1),
                                                r(),
                                                (a = !1));
                                        }
                                    );
                                };
                            })(i)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, n, {
                        disable() {
                            (e.enabled = !1), r();
                        },
                        enable() {
                            (e.enabled = !0), r();
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
            5959: (e, t, i) => {
                i.r(t),
                    i.d(t, {
                        events: () => r,
                        getMouseGlobalPosition: () => n,
                        getSize: () => a,
                        graphicsQuality: () => s,
                    });
                var r = i(527);
                function a(e = 'px') {
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
            1176: (e, t, i) => {
                function r(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                i.d(t, { R: () => r });
            },
            2472: (e, t, i) => {
                function r(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                i.d(t, { E: () => r });
            },
            3138: (e, t, i) => {
                i.d(t, { O: () => a });
                var r = i(5959);
                const a = { view: i(7641), client: r };
            },
            3722: (e, t, i) => {
                function r(e, t, i = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, i);
                }
                function a(e, t, i) {
                    return `url(${r(e, t, i)})`;
                }
                i.r(t), i.d(t, { getBgUrl: () => a, getTextureUrl: () => r });
            },
            6112: (e, t, i) => {
                i.d(t, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, i) => {
                i.d(t, { U: () => a });
                var r = i(2472);
                const a = {
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
            7641: (e, t, i) => {
                i.r(t),
                    i.d(t, {
                        addModelObserver: () => _,
                        addPreloadTexture: () => o,
                        children: () => r,
                        displayStatus: () => a.W,
                        displayStatusIs: () => L,
                        events: () => n.U,
                        extraSize: () => y,
                        forceTriggerMouseMove: () => O,
                        freezeTextureBeforeResize: () => m,
                        getBrowserTexturePath: () => d,
                        getDisplayStatus: () => x,
                        getScale: () => v,
                        getSize: () => u,
                        getViewGlobalPosition: () => g,
                        isEventHandled: () => S,
                        isFocused: () => b,
                        pxToRem: () => w,
                        remToPx: () => E,
                        resize: () => h,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => f,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => c,
                        whenTutorialReady: () => P,
                    });
                var r = i(3722),
                    a = i(6112),
                    n = i(6538),
                    s = i(8566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function d(e, t, i, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, i, r);
                }
                function _(e, t, i) {
                    return viewEnv.addDataChangedCallback(e, t, i);
                }
                function c(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function u(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function h(e, t, i = 'px') {
                    return 'rem' === i ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function g(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: E(t.x), y: E(t.y) };
                }
                function m() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function v() {
                    return viewEnv.getScale();
                }
                function w(e) {
                    return viewEnv.pxToRem(e);
                }
                function E(e) {
                    return viewEnv.remToPx(e);
                }
                function f(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function b() {
                    return viewEnv.isFocused();
                }
                function p() {
                    return viewEnv.setEventHandled();
                }
                function S() {
                    return viewEnv.isEventHandled();
                }
                function O() {
                    viewEnv.forceTriggerMouseMove();
                }
                function x() {
                    return viewEnv.getShowingStatus();
                }
                const L = Object.keys(a.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === a.W[t]), e),
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
                    P = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : n.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, i) => {
                i.d(t, { qP: () => d });
                const r = ['args'];
                const a = 2,
                    n = 16,
                    s = 32,
                    o = 64,
                    l = (e, t) => {
                        const i = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const n = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var i,
                                        r,
                                        a = {},
                                        n = Object.keys(e);
                                    for (r = 0; r < n.length; r++) (i = n[r]), t.indexOf(i) >= 0 || (a[i] = e[i]);
                                    return a;
                                })(t, r);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: i, type: e }, s, {
                                          arguments:
                                              ((a = n),
                                              Object.entries(a).map(([e, t]) => {
                                                  const i = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: i, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: i, name: e, bool: t };
                                                      default:
                                                          return { __Type: i, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: i, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: i, type: e });
                        var a;
                    },
                    d = {
                        close(e) {
                            l('popover' === e ? a : s);
                        },
                        minimize() {
                            l(o);
                        },
                        move(e) {
                            l(n, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, t, i) => {
                let r, a;
                i.d(t, { n: () => r }),
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
                    })(a || (a = {}));
            },
            1358: (e, t, i) => {
                i.d(t, { Z: () => n });
                var r = i(3138);
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
                    addCallback(e, t, i = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const n = r.O.view.addModelObserver(e, i, a);
                        return (
                            n > 0
                                ? ((this._callbacks[n] = t),
                                  i > 0 && (this._views[i] ? this._views[i].push(n) : (this._views[i] = [n])))
                                : console.error("Can't add callback for model:", e),
                            n
                        );
                    }
                    removeCallback(e, t = 0) {
                        let i = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((i = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            i || console.error("Can't remove callback by id:", e),
                            i
                        );
                    }
                    _emmitDataChanged(e, t, i) {
                        i.forEach((i) => {
                            const r = this._callbacks[i];
                            void 0 !== r && r(e, t);
                        });
                    }
                }
                a.__instance = void 0;
                const n = a;
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
            4179: (e, t, i) => {
                i.d(t, { ry: () => E, Eu: () => f });
                class r {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: i }) => {
                                    let r = e.target;
                                    do {
                                        if (r === t) return;
                                        r = r.parentNode;
                                    } while (r);
                                    i();
                                });
                            });
                    }
                    static get instance() {
                        return r.__instance || (r.__instance = new r()), r.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const i = e,
                            r = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== i || t !== r)),
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
                const a = r;
                var n = i(1358);
                const s = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    o = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, i) => userLocale.getTimeFormat(e, t, void 0 === i || i),
                        getTimeString: (e, t, i) => userLocale.getTimeString(e, t, void 0 === i || i),
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
                const d = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    _ = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var h = i(5521),
                    g = i(3138);
                const m = ['args'];
                function v(e, t, i, r, a, n, s) {
                    try {
                        var o = e[n](s),
                            l = o.value;
                    } catch (e) {
                        return void i(e);
                    }
                    o.done ? t(l) : Promise.resolve(l).then(r, a);
                }
                const w = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    E = (function () {
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
                                        i = arguments;
                                    return new Promise(function (r, a) {
                                        var n = e.apply(t, i);
                                        function s(e) {
                                            v(n, r, a, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            v(n, r, a, s, o, 'throw', e);
                                        }
                                        s(void 0);
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
                    b = (e, t) => {
                        const i = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                n = (function (e, t) {
                                    if (null == e) return {};
                                    var i,
                                        r,
                                        a = {},
                                        n = Object.keys(e);
                                    for (r = 0; r < n.length; r++) (i = n[r]), t.indexOf(i) >= 0 || (a[i] = e[i]);
                                    return a;
                                })(t, m);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: i, type: e }, n, {
                                          arguments:
                                              ((r = a),
                                              Object.entries(r).map(([e, t]) => {
                                                  const i = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          i.number = t;
                                                          break;
                                                      case 'boolean':
                                                          i.bool = t;
                                                          break;
                                                      default:
                                                          i.string = t.toString();
                                                  }
                                                  return i;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: i, type: e }, n));
                        } else viewEnv.handleViewEvent({ __Type: i, type: e });
                        var r;
                    },
                    p = () => b(l.CLOSE),
                    S = (e, t) => {
                        e.keyCode === h.n.ESCAPE && t();
                    };
                var O = i(7572);
                const x = a.instance,
                    L = {
                        DataTracker: n.Z,
                        ViewModel: O.Z,
                        ViewEventType: l,
                        NumberFormatType: d,
                        RealFormatType: _,
                        TimeFormatType: c,
                        DateFormatType: u,
                        makeGlobalBoundingBox: w,
                        sendMoveEvent: (e) => b(l.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => b(l.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, i = 0) => {
                            b(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: i, args: t });
                        },
                        sendShowPopOverEvent: (e, t, i, r, a = R.invalid('resId'), n) => {
                            const s = g.O.view.getViewGlobalPosition(),
                                o = i.getBoundingClientRect(),
                                d = o.x,
                                _ = o.y,
                                c = o.width,
                                u = o.height,
                                h = {
                                    x: g.O.view.pxToRem(d) + s.x,
                                    y: g.O.view.pxToRem(_) + s.y,
                                    width: g.O.view.pxToRem(c),
                                    height: g.O.view.pxToRem(u),
                                };
                            b(l.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: a,
                                direction: t,
                                bbox: w(h),
                                on: !0,
                                args: n,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => S(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            S(e, p);
                        },
                        handleViewEvent: b,
                        onBindingsReady: E,
                        onLayoutReady: f,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(l.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(l.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(l.POP_OVER),
                        dumpViewModel: function e(t) {
                            const i = {};
                            if ('object' != typeof t) return t;
                            for (const r in t)
                                if (Object.prototype.hasOwnProperty.call(t, r)) {
                                    const a = Object.prototype.toString.call(t[r]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = t[r];
                                        i[r] = [];
                                        for (let t = 0; t < a.length; t++) i[r].push({ value: e(a[t].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (i[r] = e(t[r]))
                                            : (i[r] = t[r]);
                                }
                            return i;
                        },
                        ClickOutsideManager: x,
                        SystemLocale: s,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = L;
            },
            4894: (e, t, i) => {
                var r = i(6179),
                    a = i.n(r),
                    n = i(6483),
                    s = i.n(n);
                function o(e) {
                    engine.call('PlaySound', e);
                }
                var l = i(4179),
                    d = i(3138),
                    _ = i(5521);
                const c = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function u(e = _.n.NONE, t = c, i = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== _.n.NONE)
                            return (
                                window.addEventListener('keydown', r, i),
                                () => {
                                    window.removeEventListener('keydown', r, i);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (d.O.view.isEventHandled()) return;
                                d.O.view.setEventHandled(), t(r), i && r.stopPropagation();
                            }
                        }
                    }, [t, e, i]);
                }
                const h = (e, t, i) =>
                        t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                            ? (t.extraLargeHeight && i.extraLarge) ||
                              (t.largeHeight && i.large) ||
                              (t.mediumHeight && i.medium) ||
                              (t.smallHeight && i.small) ||
                              (t.extraSmallHeight && i.extraSmall)
                                ? e
                                : null
                            : e,
                    g = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var m;
                function v(e, t, i) {
                    const r = (function (e, t) {
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
                        })(e, i),
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
                        })(t, i),
                        n = Math.min(r, a);
                    return {
                        extraLarge: n === i.extraLarge.weight,
                        large: n === i.large.weight,
                        medium: n === i.medium.weight,
                        small: n === i.small.weight,
                        extraSmall: n === i.extraSmall.weight,
                        extraLargeWidth: r === i.extraLarge.weight,
                        largeWidth: r === i.large.weight,
                        mediumWidth: r === i.medium.weight,
                        smallWidth: r === i.small.weight,
                        extraSmallWidth: r === i.extraSmall.weight,
                        extraLargeHeight: a === i.extraLarge.weight,
                        largeHeight: a === i.large.weight,
                        mediumHeight: a === i.medium.weight,
                        smallHeight: a === i.small.weight,
                        extraSmallHeight: a === i.extraSmall.weight,
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
                })(m || (m = {}));
                const w = d.O.client.getSize('rem'),
                    E = w.width,
                    f = w.height,
                    b = Object.assign({ width: E, height: f }, v(E, f, g)),
                    p = (0, r.createContext)(b),
                    S = ['children'];
                const O = (e) => {
                    let t = e.children,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var i,
                                r,
                                a = {},
                                n = Object.keys(e);
                            for (r = 0; r < n.length; r++) (i = n[r]), t.indexOf(i) >= 0 || (a[i] = e[i]);
                            return a;
                        })(e, S);
                    const a = (0, r.useContext)(p),
                        n = a.extraLarge,
                        s = a.large,
                        o = a.medium,
                        l = a.small,
                        d = a.extraSmall,
                        _ = a.extraLargeWidth,
                        c = a.largeWidth,
                        u = a.mediumWidth,
                        g = a.smallWidth,
                        m = a.extraSmallWidth,
                        v = a.extraLargeHeight,
                        w = a.largeHeight,
                        E = a.mediumHeight,
                        f = a.smallHeight,
                        b = a.extraSmallHeight,
                        O = { extraLarge: v, large: w, medium: E, small: f, extraSmall: b };
                    if (i.extraLarge || i.large || i.medium || i.small || i.extraSmall) {
                        if (i.extraLarge && n) return t;
                        if (i.large && s) return t;
                        if (i.medium && o) return t;
                        if (i.small && l) return t;
                        if (i.extraSmall && d) return t;
                    } else {
                        if (i.extraLargeWidth && _) return h(t, i, O);
                        if (i.largeWidth && c) return h(t, i, O);
                        if (i.mediumWidth && u) return h(t, i, O);
                        if (i.smallWidth && g) return h(t, i, O);
                        if (i.extraSmallWidth && m) return h(t, i, O);
                        if (
                            !(i.extraLargeWidth || i.largeWidth || i.mediumWidth || i.smallWidth || i.extraSmallWidth)
                        ) {
                            if (i.extraLargeHeight && v) return t;
                            if (i.largeHeight && w) return t;
                            if (i.mediumHeight && E) return t;
                            if (i.smallHeight && f) return t;
                            if (i.extraSmallHeight && b) return t;
                        }
                    }
                    return null;
                };
                O.defaultProps = {
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
                (0, r.memo)(O);
                const x = (e) => {
                        const t = (0, r.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    L =
                        ((0, r.memo)(({ children: e }) => {
                            const t = (0, r.useContext)(p),
                                i = (0, r.useState)(t),
                                n = i[0],
                                s = i[1],
                                o = (0, r.useCallback)((e, t) => {
                                    const i = d.O.view.pxToRem(e),
                                        r = d.O.view.pxToRem(t);
                                    s(Object.assign({ width: i, height: r }, v(i, r, g)));
                                }, []);
                            x(() => {
                                engine.on('clientResized', o);
                            }),
                                (0, r.useEffect)(() => () => engine.off('clientResized', o), [o]);
                            const l = (0, r.useMemo)(() => Object.assign({}, n), [n]);
                            return a().createElement(p.Provider, { value: l }, e);
                        }),
                        {
                            base: 'Slider_base_df',
                            base__carousel: 'Slider_base__carousel_de',
                            trackWrapper: 'Slider_trackWrapper_79',
                            track: 'Slider_track_4c',
                            base__withoutAnimation: 'Slider_base__withoutAnimation_14',
                            base__withoutPointer: 'Slider_base__withoutPointer_01',
                            slide: 'Slider_slide_8b',
                            slide__active: 'Slider_slide__active_97',
                            slide__carousel: 'Slider_slide__carousel_0c',
                            slide__beforeActive: 'Slider_slide__beforeActive_35',
                            slide__afterActive: 'Slider_slide__afterActive_1f',
                            slide__beforeActiveLarge: 'Slider_slide__beforeActiveLarge_b1',
                            slide__afterActiveLarge: 'Slider_slide__afterActiveLarge_cb',
                            slide__leftEdge: 'Slider_slide__leftEdge_d8',
                            slide__leftEdgeLarge: 'Slider_slide__leftEdgeLarge_9f',
                            slide__rightEdge: 'Slider_slide__rightEdge_43',
                            slide__rightEdgeLarge: 'Slider_slide__rightEdgeLarge_71',
                            prev: 'Slider_prev_11',
                            next: 'Slider_next_ae',
                            prev__disabled: 'Slider_prev__disabled_5a',
                            next__disabled: 'Slider_next__disabled_ac',
                            counter: 'Slider_counter_55',
                            base__large: 'Slider_base__large_75',
                            counterDivider: 'Slider_counterDivider_0f',
                            fadeOut: 'Slider_fadeOut_15',
                            fadeIn: 'Slider_fadeIn_2e',
                            fadeInWithScale: 'Slider_fadeInWithScale_67',
                            slideUp: 'Slider_slideUp_a7',
                            scale: 'Slider_scale_ce',
                            rotate: 'Slider_rotate_9f',
                        });
                function y(e, t, i, r, a, n, s) {
                    try {
                        var o = e[n](s),
                            l = o.value;
                    } catch (e) {
                        return void i(e);
                    }
                    o.done ? t(l) : Promise.resolve(l).then(r, a);
                }
                function P(e) {
                    return function () {
                        var t = this,
                            i = arguments;
                        return new Promise(function (r, a) {
                            var n = e.apply(t, i);
                            function s(e) {
                                y(n, r, a, s, o, 'next', e);
                            }
                            function o(e) {
                                y(n, r, a, s, o, 'throw', e);
                            }
                            s(void 0);
                        });
                    };
                }
                const T = (0, r.createContext)({});
                (0, r.memo)(
                    ({
                        children: e,
                        arrowsTopPosition: t,
                        carouselMode: i,
                        disabled: n,
                        withCounter: d,
                        onPrevSlide: c,
                        onNextSlide: h,
                    }) => {
                        const g = (0, r.useRef)(null),
                            m = (0, r.useContext)(p),
                            v = m.medium || m.large || m.extraLarge,
                            w = (0, r.useState)(e),
                            E = w[0],
                            f = w[1],
                            b = (0, r.useState)(0),
                            S = b[0],
                            O = b[1],
                            x = (0, r.useState)(0),
                            y = x[0],
                            k = x[1],
                            M = (0, r.useState)(i ? 3 : 1),
                            A = M[0],
                            R = M[1],
                            C = (0, r.useState)(!1),
                            N = C[0],
                            D = C[1],
                            W = (0, r.useState)(!1),
                            F = W[0],
                            H = W[1],
                            U = E.length,
                            I = 1 === A && !i,
                            V = A === U && !i,
                            K = (0, r.useMemo)(() => ({ isAnimationDisabled: N }), [N]),
                            q = (function () {
                                var e = P(function* () {
                                    if (g && g.current) {
                                        D(!0), yield (0, l.Eu)();
                                        const e = viewEnv.getScale();
                                        O(g.current.offsetWidth / e),
                                            k(g.current.querySelector(`.${L.slide__active}`).offsetWidth / e),
                                            setTimeout(() => {
                                                D(!1);
                                            }, 100);
                                    }
                                });
                                return function () {
                                    return e.apply(this, arguments);
                                };
                            })();
                        (0, r.useEffect)(() => {
                            const t = [];
                            E.map((i) => {
                                const r = e.find((e) => e.key === i.key);
                                r && t.push(r);
                            }),
                                f(t);
                        }, [e]),
                            (0, r.useEffect)(() => {
                                if (i) {
                                    const e = E.concat();
                                    e.unshift(...e.splice(-2, E.length)), f(e);
                                }
                            }, []),
                            (0, r.useEffect)(
                                () => (
                                    q(),
                                    window.addEventListener('resize', q),
                                    () => {
                                        window.removeEventListener('resize', q);
                                    }
                                ),
                                [],
                            );
                        const z = (0, r.useCallback)(
                                P(function* () {
                                    I ||
                                        F ||
                                        n ||
                                        (i && H(!0),
                                        yield (0, l.Eu)(),
                                        c && c(),
                                        R(A - 1),
                                        i &&
                                            setTimeout(
                                                P(function* () {
                                                    D(!0);
                                                    const e = E.concat();
                                                    e.unshift(e.pop()), f(e), R(A), yield (0, l.Eu)(), D(!1), H(!1);
                                                }),
                                                600,
                                            ),
                                        o('play'),
                                        o('bp_glide_01'));
                                }),
                                [A, R, I, i, c, E, F, n],
                            ),
                            j = (0, r.useCallback)(
                                P(function* () {
                                    V ||
                                        F ||
                                        n ||
                                        (i && H(!0),
                                        yield (0, l.Eu)(),
                                        h && h(),
                                        R(A + 1),
                                        i &&
                                            setTimeout(
                                                P(function* () {
                                                    D(!0);
                                                    const e = E.concat();
                                                    e.push(e.shift()), f(e), R(A), yield (0, l.Eu)(), D(!1), H(!1);
                                                }),
                                                600,
                                            ),
                                        o('play'),
                                        o('bp_glide_01'));
                                }),
                                [A, R, V, i, h, E, F, n],
                            ),
                            B = () => o('highlight');
                        u(_.n.ARROW_LEFT, z), u(_.n.ARROW_RIGHT, j);
                        const G = (0, r.useMemo)(() => (i ? { width: 'auto' } : { width: `${S}rem` }), [S, i]),
                            Y = (0, r.useMemo)(
                                () =>
                                    i
                                        ? { transform: `translateX(${-y * A + S / 2 + y / 2}rem)` }
                                        : { transform: `translateX(-${S * (A - 1)}rem)` },
                                [S, y, A, i],
                            ),
                            X = (0, r.useMemo)(() => (t ? { top: t } : {}), [t]),
                            Z = s()(
                                L.base,
                                v && L.base__large,
                                i && L.base__carousel,
                                i && v && L.base__carouselLarge,
                                N && L.base__withoutAnimation,
                                F && L.base__withoutPointer,
                            ),
                            $ = s()(L.prev, I && L.prev__disabled),
                            Q = s()(L.next, V && L.next__disabled);
                        return a().createElement(
                            'div',
                            { className: Z },
                            a().createElement('div', { className: $, onClick: z, onMouseEnter: B, style: X }),
                            a().createElement('div', { className: Q, onClick: j, onMouseEnter: B, style: X }),
                            d &&
                                a().createElement(
                                    'div',
                                    { className: L.counter },
                                    A,
                                    a().createElement('div', { className: L.counterDivider }, '/'),
                                    U,
                                ),
                            a().createElement(
                                'div',
                                { className: L.trackWrapper, ref: g },
                                a().createElement(
                                    'div',
                                    { className: L.track, style: Y },
                                    E.map((e, t) => {
                                        const r = t + 2 === A,
                                            n = t === A;
                                        let o;
                                        n ? (o = j) : r && (o = z);
                                        let l = s()(L.slide, v && L.slide__large, t + 1 === A && L.slide__active);
                                        return (
                                            i &&
                                                (l = s()(
                                                    L.slide,
                                                    L.slide__carousel,
                                                    v && L.slide__large,
                                                    t + 1 === A && L.slide__active,
                                                    r && L.slide__beforeActive,
                                                    r && v && L.slide__beforeActiveLarge,
                                                    n && L.slide__afterActive,
                                                    n && v && L.slide__afterActiveLarge,
                                                    t + 2 < A && L.slide__leftEdge,
                                                    t + 2 < A && v && L.slide__leftEdgeLarge,
                                                    t > A && L.slide__rightEdge,
                                                    t > A && v && L.slide__rightEdgeLarge,
                                                )),
                                            a().createElement(
                                                'div',
                                                { className: l, key: `slide-${t}`, style: G, onClick: o },
                                                a().createElement(T.Provider, { value: K }, e),
                                            )
                                        );
                                    }),
                                ),
                            ),
                        );
                    },
                );
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var i = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](i, i.exports, __webpack_require__), i.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, i, r) => {
            if (!t) {
                var a = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, i, r] = deferred[l], n = !0, s = 0; s < t.length; s++)
                        (!1 & r || a >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((n = !1), r < a && (a = r));
                    if (n) {
                        deferred.splice(l--, 1);
                        var o = i();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            r = r || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > r; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, i, r];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(t, { a: t }), t;
        }),
        (__webpack_require__.d = (e, t) => {
            for (var i in t)
                __webpack_require__.o(t, i) &&
                    !__webpack_require__.o(e, i) &&
                    Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
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
        (__webpack_require__.j = 146),
        (() => {
            var e = { 146: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, i) => {
                    var r,
                        a,
                        [n, s, o] = i,
                        l = 0;
                    if (n.some((t) => 0 !== e[t])) {
                        for (r in s) __webpack_require__.o(s, r) && (__webpack_require__.m[r] = s[r]);
                        if (o) var d = o(__webpack_require__);
                    }
                    for (t && t(i); l < n.length; l++)
                        (a = n[l]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(d);
                },
                i = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            i.forEach(t.bind(null, 0)), (i.push = t.bind(null, i.push.bind(i)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [519], () => __webpack_require__(4894));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
