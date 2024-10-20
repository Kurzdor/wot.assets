(() => {
    'use strict';
    var __webpack_modules__ = {
            67: (u, e, t) => {
                t.d(e, { O: () => q });
                var n = {};
                t.r(n), t.d(n, { mouse: () => c, onResize: () => l });
                var a = {};
                t.r(a),
                    t.d(a, {
                        events: () => n,
                        getMouseGlobalPosition: () => F,
                        getSize: () => A,
                        graphicsQuality: () => d,
                    });
                var o = {};
                t.r(o), t.d(o, { getBgUrl: () => _, getTextureUrl: () => D });
                var r = {};
                function i(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                function s(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                t.r(r),
                    t.d(r, {
                        addModelObserver: () => T,
                        addPreloadTexture: () => h,
                        children: () => o,
                        displayStatus: () => m,
                        displayStatusIs: () => W,
                        events: () => B,
                        extraSize: () => j,
                        forceTriggerMouseMove: () => U,
                        freezeTextureBeforeResize: () => R,
                        getBrowserTexturePath: () => N,
                        getDisplayStatus: () => z,
                        getScale: () => P,
                        getSize: () => M,
                        getViewGlobalPosition: () => x,
                        isEventHandled: () => $,
                        isFocused: () => H,
                        pxToRem: () => S,
                        remToPx: () => I,
                        resize: () => O,
                        sendEvent: () => f,
                        setAnimateWindow: () => L,
                        setEventHandled: () => V,
                        setInputPaddingsRem: () => w,
                        setSidePaddingsRem: () => k,
                        whenTutorialReady: () => G,
                    });
                const l = i('clientResized'),
                    E = { down: i('mousedown'), up: i('mouseup'), move: i('mousemove') };
                const c = (function () {
                    const u = { listeners: 0, enabled: !0, initialized: !1 };
                    function e() {
                        u.enabled && s(!1);
                    }
                    function t() {
                        u.enabled && s(!0);
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
                            : s(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (e, t) => (
                            (e[t] = (function (e) {
                                return (t) => {
                                    u.listeners += 1;
                                    let a = !0;
                                    const o = `mouse${e}`,
                                        r = E[e]((u) => t([u, 'outside']));
                                    function i(u) {
                                        t([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(o, i),
                                        n(),
                                        () => {
                                            a &&
                                                (r(),
                                                window.removeEventListener(o, i),
                                                (u.listeners -= 1),
                                                n(),
                                                (a = !1));
                                        }
                                    );
                                };
                            })(t)),
                            e
                        ),
                        {},
                    );
                    return Object.assign({}, a, {
                        disable() {
                            (u.enabled = !1), n();
                        },
                        enable() {
                            (u.enabled = !0), n();
                        },
                        enableOutside() {
                            u.enabled && s(!0);
                        },
                        disableOutside() {
                            u.enabled && s(!1);
                        },
                    });
                })();
                function A(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function F(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const d = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function D(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function _(u, e, t) {
                    return `url(${D(u, e, t)})`;
                }
                const m = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    B = {
                        onTextureFrozen: i('self.onTextureFrozen'),
                        onTextureReady: i('self.onTextureReady'),
                        onDomBuilt: i('self.onDomBuilt'),
                        onLoaded: i('self.onLoaded'),
                        onDisplayChanged: i('self.onShowingStatusChanged'),
                        onFocusUpdated: i('self.onFocusChanged'),
                        children: {
                            onAdded: i('children.onAdded'),
                            onLoaded: i('children.onLoaded'),
                            onRemoved: i('children.onRemoved'),
                            onAttached: i('children.onAttached'),
                            onTextureReady: i('children.onTextureReady'),
                            onRequestPosition: i('children.requestPosition'),
                        },
                    },
                    C = ['args'];
                const p = 2,
                    b = 16,
                    v = 32,
                    g = 64,
                    y = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const a = e.args,
                                o = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        n,
                                        a = {},
                                        o = Object.keys(u);
                                    for (n = 0; n < o.length; n++) (t = o[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                    return a;
                                })(e, C);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, o, {
                                          arguments:
                                              ((n = a),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var n;
                    },
                    f = {
                        close(u) {
                            y('popover' === u ? p : v);
                        },
                        minimize() {
                            y(g);
                        },
                        move(u) {
                            y(b, { isMouseEvent: !0, on: u });
                        },
                    };
                function h(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function w(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function N(u, e, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, n);
                }
                function T(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function k(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function M(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function O(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function x(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: I(e.x), y: I(e.y) };
                }
                function R() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function P() {
                    return viewEnv.getScale();
                }
                function S(u) {
                    return viewEnv.pxToRem(u);
                }
                function I(u) {
                    return viewEnv.remToPx(u);
                }
                function L(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function H() {
                    return viewEnv.isFocused();
                }
                function V() {
                    return viewEnv.setEventHandled();
                }
                function $() {
                    return viewEnv.isEventHandled();
                }
                function U() {
                    viewEnv.forceTriggerMouseMove();
                }
                function z() {
                    return viewEnv.getShowingStatus();
                }
                const W = Object.keys(m).reduce((u, e) => ((u[e] = () => viewEnv.getShowingStatus() === m[e]), u), {}),
                    j = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    G = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : B.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]),
                    q = { view: r, client: a };
            },
            521: (u, e, t) => {
                let n, a;
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
                    })(a || (a = {}));
            },
            358: (u, e, t) => {
                t.d(e, { Z: () => o });
                var n = t(67);
                class a {
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
                        return window.__dataTracker || (window.__dataTracker = new a()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(u, e, t = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const o = n.O.view.addModelObserver(u, t, a);
                        return (
                            o > 0
                                ? ((this._callbacks[o] = e),
                                  t > 0 && (this._views[t] ? this._views[t].push(o) : (this._views[t] = [o])))
                                : console.error("Can't add callback for model:", u),
                            o
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
                a.__instance = void 0;
                const o = a;
            },
            572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(114);
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
            114: (u, e, t) => {
                t.d(e, {
                    Sw: () => o.Z,
                    B3: () => s.B3,
                    Z5: () => r,
                    B0: () => s.B0,
                    c9: () => l.c9,
                    ry: () => l.ry,
                    Eu: () => l.Eu,
                });
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
                const a = n;
                var o = t(358);
                const r = {
                        getNumberFormat: (u, e) => systemLocale.getNumberFormat(u, e),
                        getRealFormat: (u, e) => systemLocale.getRealFormat(u, e),
                        getTimeFormat: (u, e) => systemLocale.getTimeFormat(u, e),
                        getDateFormat: (u, e) => systemLocale.getDateFormat(u, e),
                        toUpperCase: (u) => systemLocale.toUpperCase(u),
                        toLowerCase: (u) => systemLocale.toUpperCase(u),
                    },
                    i = {
                        getNumberFormat: (u) => userLocale.getNumberFormat(u),
                        getTimeFormat: (u, e, t) => userLocale.getTimeFormat(u, e, void 0 === t || t),
                        getTimeString: (u, e, t) => userLocale.getTimeString(u, e, void 0 === t || t),
                    };
                var s = t(251),
                    l = t(72),
                    E = t(572);
                const c = a.instance,
                    A = {
                        DataTracker: o.Z,
                        ViewModel: E.Z,
                        ViewEventType: s.B0,
                        NumberFormatType: s.B3,
                        RealFormatType: s.Gr,
                        TimeFormatType: s.lf,
                        DateFormatType: s.kH,
                        makeGlobalBoundingBox: l.Kv,
                        sendMoveEvent: l.wv,
                        sendCloseEvent: l.Sy,
                        sendClosePopOverEvent: l.SW,
                        sendShowContextMenuEvent: l.uk,
                        sendShowPopOverEvent: l.P3,
                        addEscapeListener: l.VM,
                        closeOnEsc: l.SU,
                        handleViewEvent: l.c9,
                        onBindingsReady: l.ry,
                        onLayoutReady: l.Eu,
                        isTooltipShown: l.KE,
                        isContextMenuShown: l.uM,
                        isPopOverShown: l.wU,
                        dumpViewModel: function u(e) {
                            const t = {};
                            if ('object' != typeof e) return e;
                            for (const n in e)
                                if (Object.prototype.hasOwnProperty.call(e, n)) {
                                    const a = Object.prototype.toString.call(e[n]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = e[n];
                                        t[n] = [];
                                        for (let e = 0; e < a.length; e++) t[n].push({ value: u(a[e].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = u(e[n]))
                                            : (t[n] = e[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: c,
                        SystemLocale: r,
                        UserLocale: i,
                    };
                window.ViewEnvHelper = A;
            },
            251: (u, e, t) => {
                let n;
                t.d(e, { B0: () => n, B3: () => a, Gr: () => o, kH: () => i, lf: () => r }),
                    (function (u) {
                        (u[(u.UNDEFINED = 0)] = 'UNDEFINED'),
                            (u[(u.TOOLTIP = 1)] = 'TOOLTIP'),
                            (u[(u.POP_OVER = 2)] = 'POP_OVER'),
                            (u[(u.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                            (u[(u.DROP_DOWN = 8)] = 'DROP_DOWN'),
                            (u[(u.MOVE = 16)] = 'MOVE'),
                            (u[(u.CLOSE = 32)] = 'CLOSE'),
                            (u[(u.MINIMIZE = 64)] = 'MINIMIZE');
                    })(n || (n = {}));
                const a = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    o = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    r = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    i = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
            },
            72: (u, e, t) => {
                t.d(e, {
                    Eu: () => E,
                    KE: () => m,
                    Kv: () => s,
                    P3: () => _,
                    SU: () => b,
                    SW: () => d,
                    Sy: () => F,
                    VM: () => v,
                    c9: () => c,
                    ry: () => l,
                    uM: () => B,
                    uk: () => D,
                    wU: () => C,
                    wv: () => A,
                });
                var n = t(521),
                    a = t(67),
                    o = t(251);
                const r = ['args'];
                function i(u, e, t, n, a, o, r) {
                    try {
                        var i = u[o](r),
                            s = i.value;
                    } catch (u) {
                        return void t(u);
                    }
                    i.done ? e(s) : Promise.resolve(s).then(n, a);
                }
                const s = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
                    l = (function () {
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
                                    return new Promise(function (n, a) {
                                        var o = u.apply(e, t);
                                        function r(u) {
                                            i(o, n, a, r, s, 'next', u);
                                        }
                                        function s(u) {
                                            i(o, n, a, r, s, 'throw', u);
                                        }
                                        r(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    E = () =>
                        new Promise((u) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    u();
                                });
                            });
                        }),
                    c = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const a = e.args,
                                o = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        n,
                                        a = {},
                                        o = Object.keys(u);
                                    for (n = 0; n < o.length; n++) (t = o[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                    return a;
                                })(e, r);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, o, {
                                          arguments:
                                              ((n = a),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, o));
                        } else viewEnv.handleViewEvent({ __Type: t, type: u });
                        var n;
                    },
                    A = (u) => c(o.B0.MOVE, { isMouseEvent: !0, on: u }),
                    F = () => c(o.B0.CLOSE),
                    d = () => c(o.B0.POP_OVER, { on: !1 }),
                    D = (u, e, t = 0) => {
                        c(o.B0.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                    },
                    _ = (u, e, t, n, r = R.invalid('resId'), i) => {
                        const l = a.O.view.getViewGlobalPosition(),
                            E = t.getBoundingClientRect(),
                            A = E.x,
                            F = E.y,
                            d = E.width,
                            D = E.height,
                            _ = {
                                x: a.O.view.pxToRem(A) + l.x,
                                y: a.O.view.pxToRem(F) + l.y,
                                width: a.O.view.pxToRem(d),
                                height: a.O.view.pxToRem(D),
                            };
                        c(o.B0.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: u,
                            decoratorID: n || R.invalid('resId'),
                            targetID: r,
                            direction: e,
                            bbox: s(_),
                            on: !0,
                            args: i,
                        });
                    },
                    m = () => viewEnv.isWindowShownByViewEvent(o.B0.TOOLTIP),
                    B = () => viewEnv.isWindowShownByViewEvent(o.B0.CONTEXT_MENU),
                    C = () => viewEnv.isWindowShownByViewEvent(o.B0.POP_OVER),
                    p = (u, e) => {
                        u.keyCode === n.n.ESCAPE && e();
                    },
                    b = (u) => {
                        p(u, F);
                    },
                    v = (u) => {
                        const e = (e) => p(e, u);
                        return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
                    };
            },
            257: (u, e, t) => {
                var n = t(483),
                    a = t.n(n),
                    o = t(67),
                    r = t(179),
                    i = t.n(r);
                function s() {
                    const u = (0, r.useRef)(0);
                    var e;
                    return (
                        (e = () => {
                            window.cancelAnimationFrame(u.current);
                        }),
                        (0, r.useEffect)(() => e, []),
                        (0, r.useMemo)(
                            () => ({
                                run: (e) => {
                                    window.cancelAnimationFrame(u.current),
                                        (u.current = window.requestAnimationFrame(() => {
                                            u.current = window.requestAnimationFrame(() => {
                                                e(), (u.current = 0);
                                            });
                                        }));
                                },
                                clear: () => {
                                    window.cancelAnimationFrame(u.current), (u.current = 0);
                                },
                                get isRunning() {
                                    return 0 !== u.current;
                                },
                            }),
                            [],
                        )
                    );
                }
                const l = ['children'];
                const E = i().createContext(null),
                    c = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    o = Object.keys(u);
                                for (n = 0; n < o.length; n++) (t = o[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                return a;
                            })(u, l);
                        return i().createElement(E.Provider, { value: t }, e);
                    };
                function A(u) {
                    engine.call('PlaySound', u);
                }
                const F = {
                        playHighlight() {
                            A('highlight');
                        },
                        playClick() {
                            A('play');
                        },
                        playYes() {
                            A('yes1');
                        },
                    },
                    d = {
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
                let D, _;
                !(function (u) {
                    (u.main = 'main'),
                        (u.primary = 'primary'),
                        (u.primaryGreen = 'primaryGreen'),
                        (u.primaryRed = 'primaryRed'),
                        (u.secondary = 'secondary'),
                        (u.ghost = 'ghost');
                })(D || (D = {})),
                    (function (u) {
                        (u.extraSmall = 'extraSmall'), (u.small = 'small'), (u.medium = 'medium');
                    })(_ || (_ = {}));
                const m = ({
                    children: u,
                    size: e,
                    isFocused: t,
                    type: n,
                    disabled: o,
                    mixClass: s,
                    soundHover: l,
                    soundClick: E,
                    onMouseEnter: c,
                    onMouseMove: F,
                    onMouseDown: _,
                    onMouseUp: m,
                    onMouseLeave: B,
                    onClick: C,
                }) => {
                    const p = (0, r.useRef)(null),
                        b = (0, r.useState)(t),
                        v = b[0],
                        g = b[1],
                        y = (0, r.useState)(!1),
                        f = y[0],
                        h = y[1],
                        w = (0, r.useState)(!1),
                        N = w[0],
                        T = w[1],
                        k = (0, r.useCallback)(() => {
                            o || (p.current && (p.current.focus(), g(!0)));
                        }, [o]),
                        M = (0, r.useCallback)(
                            (u) => {
                                v && null !== p.current && !p.current.contains(u.target) && g(!1);
                            },
                            [v],
                        ),
                        O = (0, r.useCallback)(
                            (u) => {
                                o || (C && C(u));
                            },
                            [o, C],
                        ),
                        x = (0, r.useCallback)(
                            (u) => {
                                o || (null !== l && A(l), c && c(u), T(!0));
                            },
                            [o, l, c],
                        ),
                        P = (0, r.useCallback)(
                            (u) => {
                                F && F(u);
                            },
                            [F],
                        ),
                        S = (0, r.useCallback)(
                            (u) => {
                                o || (m && m(u), h(!1));
                            },
                            [o, m],
                        ),
                        I = (0, r.useCallback)(
                            (u) => {
                                o || (null !== E && A(E), _ && _(u), t && k(), h(!0));
                            },
                            [o, E, _, k, t],
                        ),
                        L = (0, r.useCallback)(
                            (u) => {
                                o || (B && B(u), h(!1));
                            },
                            [o, B],
                        ),
                        H = a()(
                            d.base,
                            d[`base__${n}`],
                            {
                                [d.base__disabled]: o,
                                [d[`base__${e}`]]: e,
                                [d.base__focus]: v,
                                [d.base__highlightActive]: f,
                                [d.base__firstHover]: N,
                            },
                            s,
                        ),
                        V = a()(d.state, d.state__default);
                    return (
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mousedown', M),
                                () => {
                                    document.removeEventListener('mousedown', M);
                                }
                            ),
                            [M],
                        ),
                        (0, r.useEffect)(() => {
                            g(t);
                        }, [t]),
                        i().createElement(
                            'div',
                            {
                                ref: p,
                                className: H,
                                onMouseEnter: x,
                                onMouseMove: P,
                                onMouseUp: S,
                                onMouseDown: I,
                                onMouseLeave: L,
                                onClick: O,
                            },
                            n !== D.ghost &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement('div', { className: d.back }),
                                    i().createElement('span', { className: d.texture }),
                                ),
                            i().createElement(
                                'span',
                                { className: V },
                                i().createElement('span', { className: d.stateDisabled }),
                                i().createElement('span', { className: d.stateHighlightHover }),
                                i().createElement('span', { className: d.stateHighlightActive }),
                            ),
                            i().createElement(
                                'span',
                                { className: d.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                u,
                            ),
                        )
                    );
                };
                m.defaultProps = { type: D.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const B = (0, r.memo)(m),
                    C = {
                        base: 'Button_base_8d',
                        base__close: 'Button_base__close_b1',
                        base__minimize: 'Button_base__minimize_f7',
                    };
                let p;
                !(function (u) {
                    (u.Minimize = 'minimize'), (u.Close = 'close');
                })(p || (p = {}));
                const b = ({ onClick: u, type: e }) => {
                        const t = (0, r.useCallback)(() => {
                                F.playHighlight();
                            }, []),
                            n = (0, r.useCallback)((u) => u.stopPropagation(), []),
                            o = a()(C.base, C[`base__${e}`]);
                        return i().createElement('div', { className: o, onClick: u, onMouseEnter: t, onMouseDown: n });
                    },
                    v = (u = 1) => {
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
                    };
                var g = t(114);
                const y = [
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
                function f(u) {
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
                const h = (u, e, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: g.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    w = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            n = u.args,
                            a = u.onMouseEnter,
                            o = u.onMouseLeave,
                            i = u.onMouseDown,
                            s = u.onClick,
                            l = u.ignoreShowDelay,
                            E = void 0 !== l && l,
                            c = u.ignoreMouseClick,
                            A = void 0 !== c && c,
                            F = u.decoratorId,
                            d = void 0 === F ? 0 : F,
                            D = u.isEnabled,
                            _ = void 0 === D || D,
                            m = u.targetId,
                            B = void 0 === m ? 0 : m,
                            C = u.onShow,
                            p = u.onHide,
                            b = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    o = Object.keys(u);
                                for (n = 0; n < o.length; n++) (t = o[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                return a;
                            })(u, y);
                        const g = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            w = (0, r.useMemo)(() => B || v().resId, [B]),
                            N = (0, r.useCallback)(() => {
                                (g.current.isVisible && g.current.timeoutId) ||
                                    (h(t, d, { isMouseEvent: !0, on: !0, arguments: f(n) }, w),
                                    C && C(),
                                    (g.current.isVisible = !0));
                            }, [t, d, n, w, C]),
                            T = (0, r.useCallback)(() => {
                                if (g.current.isVisible || g.current.timeoutId) {
                                    const u = g.current.timeoutId;
                                    u > 0 && (clearTimeout(u), (g.current.timeoutId = 0)),
                                        h(t, d, { on: !1 }, w),
                                        g.current.isVisible && p && p(),
                                        (g.current.isVisible = !1);
                                }
                            }, [t, d, w, p]),
                            k = (0, r.useCallback)((u) => {
                                g.current.isVisible &&
                                    ((g.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (g.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(g.current.prevTarget) && T();
                                    }, 200)));
                            }, []);
                        (0, r.useEffect)(() => {
                            const u = g.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', k, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', k, { capture: !0 }),
                                        u && window.clearTimeout(u);
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === _ && T();
                            }, [_, T]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', T),
                                    () => {
                                        window.removeEventListener('mouseleave', T), T();
                                    }
                                ),
                                [T],
                            );
                        return _
                            ? (0, r.cloneElement)(
                                  e,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((M = e.props.onMouseEnter),
                                              (u) => {
                                                  (u.clientX === window.innerWidth &&
                                                      u.clientY === window.innerHeight) ||
                                                      ((g.current.timeoutId = window.setTimeout(N, E ? 100 : 400)),
                                                      a && a(u),
                                                      M && M(u));
                                              }),
                                          onMouseLeave: ((u) => (e) => {
                                              T(), null == o || o(e), null == u || u(e);
                                          })(e.props.onMouseLeave),
                                          onClick: ((u) => (e) => {
                                              !1 === A && T(), null == s || s(e), null == u || u(e);
                                          })(e.props.onClick),
                                          onMouseDown: ((u) => (e) => {
                                              !1 === A && T(), null == i || i(e), null == u || u(e);
                                          })(e.props.onMouseDown),
                                      },
                                      b,
                                  ),
                              )
                            : e;
                        var M;
                    },
                    N = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function T() {
                    return (
                        (T =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        T.apply(this, arguments)
                    );
                }
                const k = R.views.common.tooltip_window.simple_tooltip_content,
                    M = (u) => {
                        let e = u.children,
                            t = u.body,
                            n = u.header,
                            a = u.note,
                            o = u.alert,
                            s = u.args,
                            l = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    o = Object.keys(u);
                                for (n = 0; n < o.length; n++) (t = o[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                return a;
                            })(u, N);
                        const E = (0, r.useMemo)(() => {
                            const u = Object.assign({}, s, { body: t, header: n, note: a, alert: o });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [o, t, n, a, s]);
                        return i().createElement(
                            w,
                            T(
                                {
                                    contentId:
                                        ((c = null == s ? void 0 : s.hasHtmlContent),
                                        c ? k.SimpleTooltipHtmlContent('resId') : k.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: E,
                                },
                                l,
                            ),
                            e,
                        );
                        var c;
                    },
                    O = 'Info_base_7b',
                    x = ({ tooltipHeader: u, tooltipBody: e }) =>
                        i().createElement(
                            M,
                            { isEnabled: !0, header: u, body: e },
                            i().createElement('div', { className: O }),
                        ),
                    P = 'Title_base_44',
                    S = ({ title: u, infoTooltipHeader: e, infoTooltipBody: t }) =>
                        i().createElement(
                            'div',
                            { className: P },
                            u,
                            e && t && i().createElement(x, { tooltipHeader: e, tooltipBody: t }),
                        ),
                    I = 'Header_base_ff',
                    L = 'Header_base__grabbing_dc',
                    H = 'Header_icon_6e',
                    V = 'Header_icon__reload_c2',
                    $ = 'Header_reloadButton_19',
                    U = ({
                        title: u,
                        showMinimizeBtn: e,
                        onMinimize: t,
                        onClose: n,
                        onReload: s,
                        infoTooltipHeader: l,
                        infoTooltipBody: E,
                    }) => {
                        const c = (0, r.useState)(!1),
                            A = c[0],
                            d = c[1],
                            D = (0, r.useCallback)((u) => {
                                const e = () => {
                                    o.O.view.sendEvent.move(!1), d(!1), document.removeEventListener('mouseup', e);
                                };
                                0 === u.button &&
                                    (o.O.view.sendEvent.move(!0), d(!0), document.addEventListener('mouseup', e));
                            }, []);
                        return i().createElement(
                            'div',
                            { className: a()(I, A && L), onMouseDown: D },
                            i().createElement(S, { title: u, infoTooltipBody: E, infoTooltipHeader: l }),
                            s &&
                                i().createElement(
                                    B,
                                    {
                                        mixClass: $,
                                        onClick: (u) => {
                                            F.playClick(), null == s || s(u);
                                        },
                                    },
                                    i().createElement('div', { className: a()(H, V) }),
                                ),
                            e &&
                                i().createElement(b, {
                                    type: p.Minimize,
                                    onClick: (u) => {
                                        F.playClick(), t ? t(u) : o.O.view.sendEvent.minimize();
                                    },
                                }),
                            i().createElement(b, {
                                type: p.Close,
                                onClick: (u) => {
                                    F.playClick(), n ? n(u) : o.O.view.sendEvent.close();
                                },
                            }),
                        );
                    },
                    z = 'WindowDecorator_base_6a',
                    W = 'WindowDecorator_frame_b5',
                    j = 'WindowDecorator_frame__focused_af',
                    G = 'WindowDecorator_container_1d',
                    q = 'WindowDecorator_contentDecorations_be',
                    K = 'WindowDecorator_content_0b',
                    Y = i().forwardRef(
                        (
                            {
                                title: u,
                                showMinimizeBtn: e,
                                onClose: t,
                                onReload: n,
                                onMinimize: l,
                                onFocusChange: E,
                                infoTooltipHeader: A,
                                infoTooltipBody: F,
                                className: d,
                                children: D,
                            },
                            _,
                        ) => {
                            const m = (0, r.useRef)(null),
                                B = (0, r.useRef)(null),
                                C = (0, r.useState)(!0),
                                p = C[0],
                                b = C[1],
                                v = s(),
                                g = () => {
                                    v.run(() => {
                                        const u = m.current,
                                            e = B.current;
                                        if (!u || !e) return;
                                        const t = o.O.view.pxToRem(u.offsetWidth),
                                            n = o.O.view.pxToRem(u.offsetHeight);
                                        (e.style.width = `${t}rem`), (e.style.height = `${n}rem`);
                                        const a = t + 10 + 26,
                                            r = 28 + n + 5 + 26;
                                        o.O.view.setInputPaddingsRem(13), o.O.view.resize(a, r, 'rem');
                                    });
                                };
                            var y;
                            return (
                                (y = () => {
                                    g();
                                }),
                                (0, r.useEffect)(y, []),
                                (0, r.useEffect)(
                                    () =>
                                        o.O.client.events.mouse.down(([, u]) => {
                                            'outside' === u && p
                                                ? (b(!1), null == E || E(!1))
                                                : 'inside' !== u || p || (b(!0), null == E || E(!0));
                                        }),
                                    [p, E],
                                ),
                                i().createElement(
                                    c,
                                    { updateSizes: g },
                                    i().createElement(
                                        'div',
                                        { className: a()(z, d), style: { '--outer-shadow-width': '13rem' }, ref: _ },
                                        i().createElement('div', { className: a()(W, p && j) }),
                                        i().createElement(U, {
                                            title: u,
                                            infoTooltipHeader: A,
                                            infoTooltipBody: F,
                                            onClose: t,
                                            onMinimize: l,
                                            onReload: n,
                                            showMinimizeBtn: e,
                                        }),
                                        i().createElement(
                                            'div',
                                            { className: G, ref: B },
                                            i().createElement('div', { className: q }),
                                            i().createElement('div', { className: K, ref: m }, D),
                                        ),
                                    ),
                                )
                            );
                        },
                    );
                var X = t(521);
                const Z = (u) => {
                    console.error(u.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function Q(u = X.n.NONE, e = Z, t = !1) {
                    (0, r.useEffect)(() => {
                        if (u !== X.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === u) {
                                if (o.O.view.isEventHandled()) return;
                                o.O.view.setEventHandled(), e(n), t && n.stopPropagation();
                            }
                        }
                    }, [e, u, t]);
                }
                const J = (u, e) => u.split('.').reduce((u, e) => u && u[e], e),
                    uu = (u) => {
                        const e = (0, r.useRef)(!1);
                        e.current || (u(), (e.current = !0));
                    },
                    eu = (u) => u && 'ArrayItem' === u.__proto__.constructor.name,
                    tu = (u, e) => (u.length > 0 ? `${u}.${e}` : e),
                    nu = (u) =>
                        ((u, e) =>
                            u.split('.').reduce((u, t) => {
                                const n = J(`${u}.${t}`, window);
                                return eu(n) ? e(u, t, n) : `${u}.${t}`;
                            }))(u, (u, e) => `${u}.${e}.value`),
                    au = (u) => {
                        const e = ((u) => {
                                const e = v(),
                                    t = e.caller,
                                    n = e.resId,
                                    a = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: a, modelPath: tu(a, u || ''), resId: n };
                            })(),
                            t = e.modelPrefix,
                            n = u.split('.');
                        if (n.length > 0) {
                            const u = [n[0]];
                            return (
                                n.reduce((e, n) => {
                                    const a = J(tu(t, `${e}.${n}`), window);
                                    return eu(a) ? (u.push(a.id), `${e}.${n}.value`) : (u.push(n), `${e}.${n}`);
                                }),
                                u.reduce((u, e) => u + '.' + e)
                            );
                        }
                        return '';
                    },
                    ou = g.Sw.instance;
                let ru;
                !(function (u) {
                    (u.None = 'None'), (u.Shallow = 'Shallow'), (u.Deep = 'Deep');
                })(ru || (ru = {}));
                const iu = (u = 'model', e = ru.Deep) => {
                        const t = (0, r.useState)(0),
                            n = (t[0], t[1]),
                            a = (0, r.useMemo)(() => v(), []),
                            o = a.caller,
                            i = a.resId,
                            s = (0, r.useMemo)(
                                () => (window.__feature && window.__feature !== o ? `subViews.${o}.${u}` : u),
                                [o, u],
                            ),
                            l = (0, r.useState)(() =>
                                ((u) => {
                                    const e = J(u, window);
                                    for (const u in e) 'function' == typeof e[u] && (e[u] = e[u].bind(e));
                                    return eu(e) ? e.value : e;
                                })(nu(s)),
                            ),
                            E = l[0],
                            c = l[1],
                            A = (0, r.useRef)(-1);
                        return (
                            uu(() => {
                                if (
                                    ('boolean' == typeof e &&
                                        ((e = e ? ru.Deep : ru.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    e !== ru.None)
                                ) {
                                    const t = (u) => {
                                            ((u) => u && 'CoherentArrayProxy' === u.__proto__.constructor.name)(u) &&
                                            e === ru.Deep
                                                ? (u === E && n((u) => u + 1), c(u))
                                                : c(Object.assign([], u));
                                        },
                                        a = au(u);
                                    A.current = ou.addCallback(a, t, i, e === ru.Deep);
                                }
                            }),
                            (0, r.useEffect)(() => {
                                if (e !== ru.None)
                                    return () => {
                                        ou.removeCallback(A.current, i);
                                    };
                            }, [i, e]),
                            E
                        );
                    },
                    su = /<link.*?>/g,
                    lu = /\.\.\//g,
                    Eu = /<script.*?>/g,
                    cu = 'default.css',
                    Au = (u) => {
                        const e = u.match(lu);
                        return e && e.join('');
                    },
                    Fu = () => {
                        for (
                            var u = 0, e = Array.from(document.head.querySelectorAll('link[rel="stylesheet"]'));
                            u < e.length;
                            u++
                        ) {
                            const t = e[u];
                            if (!t.href.includes(cu)) return t.href;
                        }
                        return '';
                    },
                    du = (u) => {
                        const e = Fu(),
                            t = Au(e);
                        let n,
                            a = u;
                        for (; null !== (n = Eu.exec(u)); ) {
                            const u = n[0].match(/<script (defer|defer="defer") src="(.*?)">/);
                            if (u) {
                                const e = t + u[2].replace(lu, '');
                                a = a.replace(u[2], e);
                            }
                        }
                        return a;
                    },
                    Du = 'SubView_base_df',
                    _u = 'subViews.onChanged',
                    mu = (() => {
                        const u = [];
                        let e = !1;
                        const t = () => {
                            if (!u.length) return void (e = !1);
                            const n = u.shift();
                            n && ((e = !0), n().then(() => t()));
                        };
                        return {
                            add: (n) => {
                                u.push(n), e || t();
                            },
                        };
                    })(),
                    Bu = (0, r.memo)(({ id: u, fallback: e, onLoadCallback: t, mixClass: n }) => {
                        const o = (0, r.useState)(''),
                            s = o[0],
                            l = o[1],
                            E = (0, r.useMemo)(() => ({ __html: du(s) }), [s]),
                            c = (0, r.useMemo)(() => window.subViews.addChildChangedCallback(u), [u]),
                            A = (0, r.useState)(!1),
                            F = A[0],
                            d = A[1],
                            D = (0, r.useCallback)(
                                (u) => {
                                    u.includes(c) &&
                                        (d(!0), engine.off(_u, D), window.subViews.removeChildChangedCallback(c));
                                },
                                [c],
                            ),
                            _ = (0, r.useCallback)((u) => {
                                mu.add(
                                    () =>
                                        new Promise((e) => {
                                            l(u);
                                            const t = new MutationObserver(() => {
                                                    t.disconnect(), e();
                                                }),
                                                n = document.getElementById('root');
                                            n && t.observe(n, { childList: !0 });
                                        }),
                                );
                            }, []);
                        (0, r.useEffect)(() => {
                            if (window.subViews.ids().includes(u)) {
                                const e = window.subViews.get(u),
                                    t = e.path;
                                let n;
                                if ((n = t.split('/').pop()))
                                    return (
                                        (n = n.split('.')[0]),
                                        (window.subViews[n] = Object.assign({ id: u }, e)),
                                        engine.on(`subView:inject->${n}`, _),
                                        (({ path: u, name: e }) => {
                                            const t = new XMLHttpRequest();
                                            (t.onreadystatechange = () => {
                                                4 === t.readyState &&
                                                    (200 === t.status
                                                        ? (0, g.Eu)().then(() => {
                                                              console.info(`Sub view ${e} loaded: ${u}`),
                                                                  engine.TriggerEvent(
                                                                      `subView:inject->${e}`,
                                                                      t.responseText,
                                                                  );
                                                          })
                                                        : console.error(
                                                              `subView: status: ${t.status} - can't get bundle`,
                                                          ));
                                            }),
                                                t.open('GET', u),
                                                t.send();
                                        })({ name: n, path: t }),
                                        () => {
                                            n && window.subViews[n] && delete window.subViews[n],
                                                engine.trigger('subView:destroy', { viewName: n, viewId: u }),
                                                window.__dataTracker &&
                                                    window.__dataTracker.clearViewCallbacks &&
                                                    window.__dataTracker.clearViewCallbacks(u),
                                                engine.off(`subView:inject->${n}`, _),
                                                console.info(`Sub view ${n} is destroyed: ${t}`);
                                        }
                                    );
                                console.error("subView: can't get View component name");
                            } else engine.on(_u, D);
                        }, [D, _, u, F]),
                            (0, r.useEffect)(
                                () => () => {
                                    s &&
                                        ((u) => {
                                            const e = Au(Fu());
                                            let t;
                                            for (; null !== (t = su.exec(u)); ) {
                                                const u = t[0].match(/href="(.*?)"/);
                                                if (u) {
                                                    const t = e + u[1].replace(lu, ''),
                                                        n = document.head.querySelector(`[href="${t}"]`);
                                                    n && document.head.removeChild(n);
                                                }
                                            }
                                        })(s);
                                },
                                [s],
                            );
                        const m = a()(Du, n);
                        if (s) {
                            let e;
                            return (
                                (e = document.getElementById('root')) && e.setAttribute('id', 'bugSubView'),
                                ((u) => {
                                    let e;
                                    const t = Fu(),
                                        n = Au(t);
                                    for (; null !== (e = su.exec(u)); ) {
                                        const u = e[0].match(/href="(.*?)"/);
                                        if (u && !u[1].includes(cu) && n) {
                                            const e = n + u[1].replace(lu, ''),
                                                t = document.createElement('link');
                                            (t.href = e), (t.rel = 'stylesheet'), document.head.appendChild(t);
                                        }
                                    }
                                })(s),
                                t && t(u),
                                i().createElement('div', { className: m, dangerouslySetInnerHTML: E })
                            );
                        }
                        return e ? i().createElement('div', { className: m }, i().createElement(e, null)) : null;
                    });
                var Cu = t(493),
                    pu = t.n(Cu);
                const bu = (u) => ({ backgroundImage: `url('${u}')` }),
                    vu = 'BonusInfoIcon_bonusInfoIcon_3d',
                    gu = () => {
                        const u = (0, r.useMemo)(() => bu(R.images.gui.maps.icons.platoon.common.info()), []);
                        return i().createElement(
                            w,
                            {
                                isEnabled: !0,
                                contentId:
                                    R.views.lobby.premacc.squad_bonus_tooltip_content.SquadBonusTooltipContent('resId'),
                                decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                            },
                            i().createElement('div', { className: vu, style: u }),
                        );
                    };
                function yu() {
                    return (
                        (yu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        yu.apply(this, arguments)
                    );
                }
                const fu = (0, r.memo)(
                        ({
                            caption: u,
                            isEnabled: e,
                            description: t,
                            children: n,
                            cButtonProps: a,
                            onClick: o,
                            className: s,
                        }) => {
                            const l = (0, r.useCallback)(() => o(), [o]);
                            return i().createElement(
                                M,
                                { isEnabled: !0, header: u, body: t },
                                i().createElement(
                                    'div',
                                    { className: s },
                                    i().createElement(
                                        B,
                                        yu({ type: D.primary, size: _.small, onClick: l, disabled: !e }, a),
                                        n || u,
                                    ),
                                ),
                            );
                        },
                    ),
                    hu = 'Separator_base_98',
                    wu = 'Separator_base__horizontal_34',
                    Nu = 'Separator_base__vertical_9d',
                    Tu = 'Separator_image_5b';
                let ku;
                !(function (u) {
                    (u.left = 'left'), (u.top = 'top'), (u.right = 'right'), (u.bottom = 'bottom');
                })(ku || (ku = {}));
                const Mu = ({ position: u }) => {
                        const e = R.images.gui.maps.icons.platoon.common.separator.$dyn(u),
                            t = [ku.right, ku.left].includes(u),
                            n = a()(hu, t ? Nu : wu);
                        return i().createElement(
                            'div',
                            { className: n },
                            i().createElement('div', { className: Tu, style: bu(e) }),
                        );
                    },
                    Ou = 'ToggleButton_base_b9',
                    xu = 'ToggleButton_content_85',
                    Ru = 'ToggleButton_overlay_0a',
                    Pu = 'ToggleButton_base__active_68',
                    Su = 'ToggleButton_indicator_85',
                    Iu = ['active', 'className', 'children', 'size'];
                function Lu() {
                    return (
                        (Lu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        Lu.apply(this, arguments)
                    );
                }
                const Hu = (u) => {
                        let e = u.active,
                            t = u.className,
                            n = u.children,
                            o = u.size,
                            r = void 0 === o ? _.small : o,
                            s = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    o = Object.keys(u);
                                for (n = 0; n < o.length; n++) (t = o[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                return a;
                            })(u, Iu);
                        const l = a()(Ou, t, e && Pu);
                        return i().createElement(
                            'div',
                            { className: l },
                            i().createElement(
                                B,
                                Lu({}, s, { type: 'secondary', size: r }),
                                i().createElement('span', { className: xu }, n),
                            ),
                            i().createElement('div', { className: Ru }),
                            i().createElement('div', { className: Su }),
                        );
                    },
                    Vu = ((0, r.memo)(Hu), { contentId: R.views.lobby.platoon.AlertTooltip('resId'), isEnabled: !0 }),
                    $u = (u, e, t, n = !0) =>
                        u && n
                            ? Vu
                            : ((u, e, t) => ({
                                  contentId:
                                      R.views.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent(
                                          'resId',
                                      ),
                                  decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                  args: { header: u, body: e },
                                  isEnabled: t,
                              }))(e, t, n),
                    Uu = 'CommanderControls_left_98',
                    zu = 'CommanderControls_tiersLimit_2c',
                    Wu = 'CommanderControls_findPlayers_c1';
                function ju() {
                    return (
                        (ju =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        ju.apply(this, arguments)
                    );
                }
                const Gu = () => {
                        const u = iu().shouldShowFindPlayersButton,
                            e = iu('model.btnInviteFriends'),
                            t = iu('model.btnFindPlayers'),
                            n = (0, r.useCallback)(() => {
                                t.onClick(), A(t.soundClickName);
                            }, [t]),
                            a = (0, r.useMemo)(() => ({ type: D.secondary }), []),
                            o = (0, r.useMemo)(
                                () => $u(!t.isEnabled, t.caption, t.description, t.hasTooltip),
                                [t.caption, t.isEnabled, t.description, t.hasTooltip],
                            );
                        return i().createElement(
                            i().Fragment,
                            null,
                            u &&
                                i().createElement(
                                    'div',
                                    { className: Uu },
                                    i().createElement(
                                        w,
                                        o,
                                        i().createElement(
                                            'div',
                                            null,
                                            i().createElement(
                                                B,
                                                {
                                                    type: t.isLight ? D.primary : D.secondary,
                                                    size: _.small,
                                                    onClick: t.isEnabled ? n : void 0,
                                                    disabled: !t.isEnabled,
                                                    mixClass: Wu,
                                                },
                                                t.caption,
                                            ),
                                        ),
                                    ),
                                    i().createElement(Bu, {
                                        id: R.views.lobby.platoon.subViews.TiersLimit('resId'),
                                        mixClass: zu,
                                    }),
                                ),
                            i().createElement(fu, ju({}, e, { cButtonProps: a })),
                        );
                    },
                    qu = 'Footer_base_d0',
                    Ku = 'Footer_message_3d',
                    Yu = 'Footer_message__alert_64',
                    Xu = () => {
                        const u = iu('model.btnSwitchReady'),
                            e = u.onClick,
                            t = u.caption,
                            n = u.description,
                            o = u.tooltipHeader,
                            s = u.isRed,
                            l = u.isEnabled,
                            E = iu(),
                            c = E.footerMessage,
                            A = E.isFooterMessageGrey,
                            F = a()(Ku, !A && Yu),
                            d = (0, r.useCallback)(() => e(), [e]),
                            m = s ? D.primaryRed : D.primary;
                        return i().createElement(
                            'div',
                            { className: qu },
                            i().createElement('div', { className: F }, c),
                            i().createElement(
                                M,
                                { header: o, body: n },
                                i().createElement(B, { onClick: d, size: _.small, type: m, disabled: !l }, t),
                            ),
                        );
                    },
                    Zu = 'Bonus_base_96',
                    Qu = 'Bonus_currencyImage_16',
                    Ju = 'Bonus_caption_7e',
                    ue = ({ currency: u, amount: e }) => {
                        const t = R.images.gui.maps.icons.platoon.members_window.currencies.$dyn(u),
                            n = (0, r.useMemo)(() => bu(t), [t]);
                        return i().createElement(
                            'div',
                            { className: Zu },
                            i().createElement('div', { className: Qu, style: n }),
                            i().createElement('span', { className: Ju }, `+${e}%`),
                        );
                    },
                    ee = 'Bonuses_base_6f',
                    te = () => {
                        const u = iu('model.header.bonuses');
                        return 0 === u.length
                            ? null
                            : i().createElement(
                                  'div',
                                  { className: ee },
                                  u
                                      .filter((u) => u)
                                      .map(({ value: u }) =>
                                          i().createElement(ue, {
                                              currency: u.currency,
                                              amount: u.amount,
                                              key: u.currency,
                                          }),
                                      ),
                              );
                    };
                let ne;
                !(function (u) {
                    (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                })(ne || (ne = {}));
                const ae = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    oe = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    re = (u, e, t = ne.left) => u.split(e).reduce(t === ne.left ? ae : oe, []),
                    ie = (() => {
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
                    se = ['zh_cn', 'zh_sg', 'zh_tw'],
                    le = (u, e = ne.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return se.includes(t)
                            ? ie(u)
                            : ((u, e = ne.left) => {
                                  let t = [];
                                  const n =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      a = u.replace(/&nbsp;/g, ' ');
                                  return re(a, /( )/, e).forEach((u) => (t = t.concat(re(u, n, ne.left)))), t;
                              })(u, e);
                    };
                let Ee;
                !(function (u) {
                    (u.SHORT_DATE = 'short-date'),
                        (u.SHORT_TIME = 'short-time'),
                        (u.SHORT_DATE_TIME = 'short-date-time'),
                        (u.FULL_DATE = 'full-date'),
                        (u.FULL_DATE_TIME = 'full-date-time'),
                        (u.MONTH = 'month'),
                        (u.MONTH_DATE = 'month-date'),
                        (u.DATE_MONTH = 'date-month'),
                        (u.MONTH_YEAR = 'month-year'),
                        (u.WEEK_DAY = 'week-day'),
                        (u.WEEK_DAY_TIME = 'week-day-time'),
                        (u.YEAR = 'year'),
                        (u.DATE_YEAR = 'date-year');
                })(Ee || (Ee = {}));
                Date.now();
                g.Sw.instance;
                const ce = 'FormatText_base_d0',
                    Ae = ({ binding: u, text: e = '', classMix: t, alignment: n = ne.left }) =>
                        null === e
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : i().createElement(
                                  r.Fragment,
                                  null,
                                  e.split('\n').map((e, o) =>
                                      i().createElement(
                                          'div',
                                          { className: a()(ce, t), key: `${e}-${o}` },
                                          ((u, e, t) =>
                                              u
                                                  .split(/%\((.*?)\)(?:[sd])?/g)
                                                  .map((u) => (t && u in t ? t[u] : le(u, e))))(e, n, u).map((u, e) =>
                                              i().createElement(r.Fragment, { key: `${e}-${u}` }, u),
                                          ),
                                      ),
                                  ),
                              ),
                    Fe = 'NoBonus_textContainer_ef',
                    de = 'NoBonus_textMix_ff',
                    De = 'NoBonus_icon_69',
                    _e = () => {
                        const u = iu('model.header.noBonusPlaceholder'),
                            e = u.text,
                            t = u.icon,
                            n = t && bu(t);
                        return r.createElement(
                            r.Fragment,
                            null,
                            e &&
                                r.createElement(
                                    'div',
                                    { className: Fe },
                                    r.createElement(Ae, { text: e, classMix: de, alignment: ne.right }),
                                ),
                            n && r.createElement('div', { style: n, className: De }),
                        );
                    },
                    me = 'Header_base_26',
                    Be = 'Header_buttonContainer_84',
                    Ce = 'Header_leavePlatoonButton_e4',
                    pe = 'Header_muteButtonContainer_7e',
                    be = 'Header_muteIcon_54';
                function ve() {
                    return (
                        (ve =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        ve.apply(this, arguments)
                    );
                }
                const ge = () => {
                    const u = iu('model.header.btnLeavePlatoon'),
                        e = iu('model.header.btnMuteAll'),
                        t = iu('model.header'),
                        n = t.backgroundImage,
                        a = t.showNoBonusPlaceholder,
                        o = t.showInfoIcon,
                        s = (0, r.useCallback)(() => {
                            u.onClick(), A(R.sounds.gui_platoon_2_leave());
                        }, [u]),
                        l = (0, r.useCallback)(() => e.onClick(), [e]);
                    return i().createElement(
                        'div',
                        { className: me, style: bu(n) },
                        i().createElement(
                            'div',
                            { className: Be },
                            i().createElement(
                                fu,
                                ve({}, u, { onClick: s, cButtonProps: { type: D.secondary }, className: Ce }),
                            ),
                        ),
                        e.isVisible &&
                            i().createElement(
                                M,
                                { header: e.tooltipHeader, body: e.tooltipBody },
                                i().createElement(
                                    'div',
                                    { className: pe },
                                    i().createElement(
                                        Hu,
                                        { onClick: l, active: e.isSelected },
                                        i().createElement('div', { className: be }),
                                    ),
                                ),
                            ),
                        a ? i().createElement(_e, null) : i().createElement(te, null),
                        o && i().createElement(gu, null),
                    );
                };
                let ye;
                !(function (u) {
                    (u[(u.LEFT = 0)] = 'LEFT'),
                        (u[(u.WHEEL = 1)] = 'WHEEL'),
                        (u[(u.RIGHT = 2)] = 'RIGHT'),
                        (u[(u.FOURTH = 3)] = 'FOURTH'),
                        (u[(u.FIFTH = 4)] = 'FIFTH');
                })(ye || (ye = {}));
                const fe = ({
                        children: u,
                        contentID: e,
                        decoratorID: t = 0,
                        targetId: n = 0,
                        args: a,
                        isEnabled: o = !0,
                        onMouseDown: i,
                    }) => {
                        const s = (0, r.useCallback)(() => {
                                (0, g.c9)(g.B0.CONTEXT_MENU, {
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: a,
                                }),
                                    F.playYes();
                            }, [a, e, t, n]),
                            l = (0, r.useCallback)(() => {
                                (0, g.c9)(g.B0.CONTEXT_MENU, {
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [e, t, n]),
                            E = (0, r.useCallback)(
                                (u) => {
                                    i && i(u), ((u) => u.button === ye.RIGHT)(u) && s();
                                },
                                [i, s],
                            );
                        return (
                            (0, r.useEffect)(() => {
                                !1 === o && l();
                            }, [o, l]),
                            o ? (0, r.cloneElement)(u, { onMouseDown: E }) : u
                        );
                    },
                    he = ['children'];
                function we() {
                    return (
                        (we =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        we.apply(this, arguments)
                    );
                }
                const Ne = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                n,
                                a = {},
                                o = Object.keys(u);
                            for (n = 0; n < o.length; n++) (t = o[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                            return a;
                        })(u, he);
                    return i().createElement(
                        fe,
                        we({}, t, { contentID: R.views.common.BackportContextMenu('resId') }),
                        e,
                    );
                };
                let Te, ke;
                !(function (u) {
                    (u.Squad = 'squad'),
                        (u.Event = 'event'),
                        (u.Comp7 = 'comp7'),
                        (u.BattleRoyal = 'battle_royal'),
                        (u.Epic = 'epic'),
                        (u.MapBox = 'mapbox');
                })(Te || (Te = {})),
                    (function (u) {
                        (u[(u.None = 0)] = 'None'), (u[(u.ModeOffline = 1)] = 'ModeOffline');
                    })(ke || (ke = {}));
                const Me = 'SlotLabel_formattedText_e8',
                    Oe = ({ slotLabelElements: u }) => {
                        const e = (0, r.useMemo)(() => (u) => ('' === u ? {} : JSON.parse(u)), []);
                        return i().createElement(
                            i().Fragment,
                            null,
                            u.map(({ value: u }, t) =>
                                i().createElement(
                                    'div',
                                    { key: u.content + t, style: e(u.styleJson) },
                                    i().createElement(Ae, { text: u.content, classMix: Me }),
                                ),
                            ),
                        );
                    },
                    xe = {
                        base: 'NoPlayer_base_42',
                        base__disabled: 'NoPlayer_base__disabled_98',
                        central: 'NoPlayer_central_8a',
                        image: 'NoPlayer_image_41',
                        image__disabled: 'NoPlayer_image__disabled_14',
                        image__empty: 'NoPlayer_image__empty_b1',
                        image__spinner: 'NoPlayer_image__spinner_bd',
                        spinner: 'NoPlayer_spinner_44',
                        footer: 'NoPlayer_footer_68',
                    };
                let Re;
                !(function (u) {
                    (u.spinner = 'spinner'), (u.disabled = 'disabled'), (u.empty = 'empty');
                })(Re || (Re = {}));
                const Pe = ({ text: u, type: e, slotLabelElements: t }) => {
                        const n = a()(xe.base, e === Re.disabled && xe.base__disabled),
                            o = a()(xe.image, xe[`image__${e}`]);
                        return i().createElement(
                            'div',
                            { className: n },
                            i().createElement(
                                'div',
                                { className: xe.central },
                                i().createElement('div', { className: o }),
                                u,
                            ),
                            i().createElement(
                                'div',
                                { className: xe.footer },
                                t.length > 0 && i().createElement(Oe, { slotLabelElements: t }),
                            ),
                        );
                    },
                    Se = ({ estimatedTime: u }) =>
                        i().createElement(
                            i().Fragment,
                            null,
                            i().createElement('div', null, R.strings.platoon.members.card.searching()),
                            i().createElement('span', null, '(', u, ')'),
                        ),
                    Ie = (u, e, t, n) => {
                        let a = R.images.gui.maps.icons.platoon.members_window.tall_slot.cards;
                        if (n && n !== Te.Squad) {
                            const u = a.$dyn(n.toString());
                            u && (a = u);
                        }
                        let o = null;
                        return (
                            (o = u
                                ? a.$dyn('in_battle')
                                : e
                                  ? t
                                      ? a.$dyn('ready_player')
                                      : a.$dyn('ready')
                                  : t
                                    ? a.$dyn('not_ready_player')
                                    : a.$dyn('not_ready')),
                            o || Ie(u, e, t)
                        );
                    },
                    Le = 'WTRInfo_wtr_5e',
                    He = 'WTRInfo_wtrIcon_a9',
                    Ve = 'WTRInfo_wtrValue_80',
                    $e = ({ rating: u }) =>
                        i().createElement(
                            'div',
                            { className: Le },
                            i().createElement('div', { className: He }),
                            i().createElement('span', { className: Ve }, u),
                        ),
                    Ue = (u) => u.replace('-', '_'),
                    ze = (u, e, t) =>
                        String(
                            e && !t
                                ? R.images.gui.maps.icons.vehicleTypes.elite.$dyn(Ue(u))
                                : R.images.gui.maps.icons.vehicleTypes.$dyn(Ue(u)),
                        ),
                    We = (u, e) => String(R.images.gui.maps.icons.vehicle.c_420x307.$dyn(Ue(e).toLowerCase())),
                    je = (u, e) =>
                        String(R.images.gui.maps.icons.battleRoyale.vehicles.c_210x153.$dyn(Ue(e).toLowerCase())),
                    Ge = 'MutedIcon_base_d2',
                    qe = () => {
                        const u = R.strings.platoon.members.card.muted.caption(),
                            e = R.strings.platoon.members.card.muted.description();
                        return i().createElement(
                            M,
                            { header: u, body: e },
                            i().createElement('div', { className: Ge }),
                        );
                    };
                let Ke;
                !(function (u) {
                    (u.default = 'default'), (u.x48 = 'x48'), (u.x80 = 'x80'), (u.x220 = 'x220');
                })(Ke || (Ke = {}));
                const Ye = 'TextOverflow_base_3b',
                    Xe = ({ content: u, classMix: e }) => {
                        const t = (0, r.useRef)(null),
                            n = (0, r.useState)(!0),
                            o = n[0],
                            s = n[1];
                        return (
                            (0, r.useEffect)(() =>
                                ((u) => {
                                    let e,
                                        t = null;
                                    return (
                                        (t = requestAnimationFrame(() => {
                                            t = requestAnimationFrame(() => {
                                                (t = null), (e = u());
                                            });
                                        })),
                                        () => {
                                            'function' == typeof e && e(), null !== t && cancelAnimationFrame(t);
                                        }
                                    );
                                })(() => {
                                    const u = t.current;
                                    u && u.offsetWidth >= u.scrollWidth && s(!1);
                                }),
                            ),
                            i().createElement(
                                M,
                                { isEnabled: o, body: u },
                                i().createElement('div', { ref: t, className: a()(Ye, e) }, u),
                            )
                        );
                    },
                    Ze = {
                        base: 'Badge_base_ac',
                        base__default: 'Badge_base__default_c9',
                        base__x48: 'Badge_base__x48_e4',
                    },
                    Qe = { [Ke.default]: 'c_24x24', [Ke.x48]: 'c_48x48', [Ke.x80]: 'c_80x80', [Ke.x220]: 'c_220x220' },
                    Je = ({ badgeID: u, size: e = Ke.default, className: t }) => {
                        const n = R.images.gui.maps.icons.library.badges.$dyn(Qe[e]);
                        return i().createElement('div', {
                            className: a()(Ze.base, Ze[`base__${e}`], t),
                            style: { backgroundImage: `url(${n.$dyn(`badge_${u}`)})` },
                        });
                    },
                    ut = {
                        base: 'PlayerNickname_base_32',
                        userName: 'PlayerNickname_userName_cc',
                        igrIcon: 'PlayerNickname_igrIcon_34',
                        base__default: 'PlayerNickname_base__default_8d',
                        base__x48: 'PlayerNickname_base__x48_84',
                        suffixBadgeWrapper: 'PlayerNickname_suffixBadgeWrapper_cc',
                        suffixBadgeStripe: 'PlayerNickname_suffixBadgeStripe_8a',
                        base__inverted: 'PlayerNickname_base__inverted_34',
                        suffixBadge: 'PlayerNickname_suffixBadge_bd',
                        anonymizedIcon: 'PlayerNickname_anonymizedIcon_80',
                    },
                    et = (0, r.memo)(({ tooltipHeaderName: u }) => {
                        const e = (0, r.useMemo)(() => {
                                return (
                                    (e = R.strings.tooltips.anonymizer.teamStats.header()),
                                    (t = { name: u }),
                                    e.replace(/(\{|%\()\w+(\}|\)s)/g, (u) => {
                                        const e = 0 === u.indexOf('%') ? 2 : 1;
                                        return String(t[u.slice(e, -e)]);
                                    })
                                );
                                var e, t;
                            }, [u]),
                            t = R.strings.tooltips.anonymizer.teamStats.body();
                        return i().createElement(
                            M,
                            { header: e, body: t },
                            i().createElement('div', { className: ut.anonymizedIcon }),
                        );
                    });
                function tt() {
                    return (
                        (tt =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        tt.apply(this, arguments)
                    );
                }
                const nt = { [Ke.default]: 'c_64x24', [Ke.x48]: 'c_68x28' },
                    at = { [Ke.default]: 'c_48x48', [Ke.x48]: 'c_48x48' },
                    ot = ({
                        userName: u,
                        clanAbbrev: e = '',
                        igrType: t = 0,
                        badge: n = { badgeID: '' },
                        suffixBadge: o = { badgeID: '' },
                        isInverted: s = !1,
                        isFakeNameVisible: l = !1,
                        isAnonymizerShown: E = !1,
                        hiddenUserName: c = '',
                        size: A = Ke.default,
                        userNameClassName: F = '',
                        clanTagClassName: d = '',
                    }) => {
                        const D = R.images.gui.maps.icons.library.badges.strips.$dyn(nt[A]),
                            _ = (0, r.useMemo)(
                                () => ({ backgroundImage: `url(${D.$dyn(`strip_${o.badgeID}`)})` }),
                                [o, D],
                            ),
                            m = R.images.gui.maps.icons.library.badges.$dyn(at[A]),
                            B = (0, r.useMemo)(
                                () => ({ backgroundImage: `url(${m.$dyn(`badge_${o.badgeID}`)})` }),
                                [o, m],
                            ),
                            C = e ? `[${e}]` : '',
                            p = a()(ut.base, ut[`base__${A}`], s && ut.base__inverted),
                            b = a()(ut.userName, F),
                            v = a()(ut.clanTag, d),
                            g = u !== c,
                            y = l ? `${c}${C}` : c,
                            f = Boolean(n.badgeID) && i().createElement(Je, tt({ size: A }, n, { key: 'badge' })),
                            h = Date.now(),
                            w = [
                                f,
                                [
                                    i().createElement(
                                        'div',
                                        { className: b, key: 'userName' },
                                        i().createElement(Xe, { content: u, key: h }),
                                    ),
                                    !l && Boolean(C) && i().createElement('div', { className: v, key: 'clanTag' }, C),
                                ],
                                0 !== t && i().createElement('div', { className: ut.igrIcon, key: 'igrType' }),
                                Boolean(o.badgeID) &&
                                    i().createElement(
                                        'div',
                                        { className: ut.suffixBadgeWrapper, key: 'suffixBadge' },
                                        i().createElement('div', { className: ut.suffixBadgeStripe, style: _ }),
                                        i().createElement('div', { className: ut.suffixBadge, style: B }),
                                    ),
                                E && g && i().createElement(et, { tooltipHeaderName: y, key: 'anonymizer' }),
                            ];
                        return i().createElement('div', { className: p }, s ? w.reverse() : w);
                    },
                    rt = 'PlayerName_userName_c9',
                    it = { badgeID: '' },
                    st = ({ name: u, badgeID: e, clanTag: t, color: n }) => {
                        const a = (0, r.useMemo)(() => ({ badgeID: e || '' }), [e]),
                            o = (0, r.useMemo)(() => ({ color: n }), [n]);
                        return i().createElement(
                            'div',
                            { style: o },
                            i().createElement(ot, {
                                userName: u,
                                badge: a,
                                suffixBadge: it,
                                clanAbbrev: t,
                                userNameClassName: rt,
                            }),
                        );
                    },
                    lt = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    Et = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function ct(u) {
                    let e = '';
                    for (let t = Et.length - 1; t >= 0; t--) for (; u >= Et[t]; ) (e += lt[t]), (u -= Et[t]);
                    return e;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                const At = 'VehicleDescription_base_1b',
                    Ft = 'VehicleDescription_vehicleType_a1',
                    dt = 'VehicleDescription_vehicleType__elite_71',
                    Dt = ({ type: u, isPremium: e, name: t, tier: n, className: o, prebattleType: r, isEvent: s }) =>
                        i().createElement(
                            'div',
                            { className: a()(At, o) },
                            r !== Te.BattleRoyal && !s && ct(n),
                            i().createElement('div', { className: a()(Ft, e && dt), style: bu(ze(u, e)) }),
                            t,
                        ),
                    _t = (0, r.memo)(({ src: u, className: e, autoPlay: t = !1, loop: n = !1 }) => {
                        const a = (0, r.useRef)(null);
                        return (
                            (0, r.useEffect)(() => {
                                engine.on('clientMinimized', (u) => {
                                    a.current && (u ? a.current.pause() : a.current.play());
                                });
                            }, []),
                            i().createElement('video', { ref: a, className: e, src: u, autoPlay: t, loop: n })
                        );
                    });
                _t.displayName = 'Video';
                const mt = 'VoiceAnimation_talkingAnimation_c4',
                    Bt = 'VoiceAnimation_talkingAnimation__visible_18',
                    Ct = ({ visible: u }) => {
                        const e = a()(mt, u && Bt);
                        return i().createElement(_t, {
                            src: R.videos.platoon.VoiceChat(),
                            autoPlay: !0,
                            loop: !0,
                            className: e,
                        });
                    },
                    pt = ({ format: u, value: e }) => {
                        const t = ((u, e = 'integral') => {
                            let t;
                            t = 'gold' === e ? g.B3.GOLD : g.B3.INTEGRAL;
                            return void 0 === u ? '' : g.Z5.getNumberFormat(u, t);
                        })(e, u);
                        return t ? i().createElement('span', null, t) : null;
                    };
                let bt, vt;
                !(function (u) {
                    (u[(u.A = 1)] = 'A'),
                        (u[(u.B = 2)] = 'B'),
                        (u[(u.C = 3)] = 'C'),
                        (u[(u.D = 4)] = 'D'),
                        (u[(u.E = 5)] = 'E');
                })(bt || (bt = {})),
                    (function (u) {
                        (u[(u.Achieved = 0)] = 'Achieved'),
                            (u[(u.Current = 1)] = 'Current'),
                            (u[(u.Inactive = 2)] = 'Inactive');
                    })(vt || (vt = {}));
                const gt = R.strings.comp7.division,
                    yt = { [bt.A]: 'A', [bt.B]: 'B', [bt.C]: 'C', [bt.D]: 'D', [bt.E]: 'E' },
                    ft = (u) => gt.$dyn(yt[u]);
                let ht;
                !(function (u) {
                    (u[(u.First = 6)] = 'First'),
                        (u[(u.Second = 5)] = 'Second'),
                        (u[(u.Third = 4)] = 'Third'),
                        (u[(u.Fourth = 3)] = 'Fourth'),
                        (u[(u.Fifth = 2)] = 'Fifth'),
                        (u[(u.Sixth = 1)] = 'Sixth');
                })(ht || (ht = {}));
                const wt = {
                        [ht.First]: 'first',
                        [ht.Second]: 'second',
                        [ht.Third]: 'third',
                        [ht.Fourth]: 'fourth',
                        [ht.Fifth]: 'fifth',
                        [ht.Sixth]: 'sixth',
                    },
                    Nt = (u) => wt[u],
                    Tt = [ht.First, ht.Second, ht.Third, ht.Fourth],
                    kt = (u) => Tt.includes(u),
                    Mt = 'RankEmblem_base_ec';
                let Ot;
                !(function (u) {
                    (u[(u.x22 = 22)] = 'x22'),
                        (u[(u.x40 = 40)] = 'x40'),
                        (u[(u.x48 = 48)] = 'x48'),
                        (u[(u.x64 = 64)] = 'x64'),
                        (u[(u.x84 = 84)] = 'x84'),
                        (u[(u.x110 = 110)] = 'x110'),
                        (u[(u.x150 = 150)] = 'x150'),
                        (u[(u.x200 = 200)] = 'x200'),
                        (u[(u.x260 = 260)] = 'x260'),
                        (u[(u.x320 = 320)] = 'x320'),
                        (u[(u.x420 = 420)] = 'x420'),
                        (u[(u.x600 = 600)] = 'x600');
                })(Ot || (Ot = {}));
                const xt = ({ rank: u, size: e, division: t, className: n }) => {
                        const o = (0, r.useMemo)(() => {
                            const n = R.images.comp7.gui.maps.icons.comp7.ranks.$num(e),
                                a = kt(u) && void 0 !== t ? `_${ft(t)}` : '';
                            return { backgroundImage: `url(${n.$dyn(`${Nt(u)}${a}`)})`, '--imageSize': `${e}rem` };
                        }, [u, e, t]);
                        return i().createElement('div', { className: a()(Mt, n), style: o });
                    },
                    Rt = 'Comp7RankData_base_e8',
                    Pt = 'Comp7RankData_icon_75',
                    St = 'Comp7RankData_base__general_01',
                    It = R.strings.comp7.scoreTooltip,
                    Lt = ({ slot: u }) => {
                        const e = u.rankData,
                            t = e.rank,
                            n = e.division,
                            o = e.score;
                        return i().createElement(
                            M,
                            { header: It.header(), body: It.body() },
                            i().createElement(
                                'div',
                                { className: a()(Rt, kt(t) && St) },
                                i().createElement(
                                    'div',
                                    { className: Pt },
                                    i().createElement(xt, { rank: t, division: n, size: Ot.x22 }),
                                ),
                                i().createElement(pt, { value: o }),
                            ),
                        );
                    },
                    Ht = 'Player_base_7d',
                    Vt = 'Player_topping_6c',
                    $t = 'Player_toppingBack_cd',
                    Ut = 'Player_topping__isPlayer_03',
                    zt = 'Player_topping__isCommander_b9',
                    Wt = 'Player_toppingPremiumIcon_20',
                    jt = 'Player_toppingPlayerIcon_0b',
                    Gt = 'Player_mutedContainer_69',
                    qt = 'Player_name_11',
                    Kt = 'Player_footer_1a',
                    Yt = 'Player_readiness_f9',
                    Xt = 'Player_readiness__isReady_c9',
                    Zt = 'Player_vehicleImage_42',
                    Qt = 'Player_flagImage_4e';
                function Jt() {
                    return (
                        (Jt =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        Jt.apply(this, arguments)
                    );
                }
                const un = ({ slot: u, player: e, isInBattle: t, infoText: n, prebattleType: o, isEvent: s }) => {
                    const l = a()(Yt, e.isReady && !t && Xt),
                        E = o === Te.BattleRoyal ? je : We,
                        c = e.isReady ? E(e.vehicle.nation, e.vehicle.techName) : '',
                        A = ((u, e, t) => {
                            if (u) {
                                const u = R.images.gui.maps.icons.platoon.members_window.tall_slot.flags,
                                    n = u.$dyn(e);
                                return String(n || u.$dyn(t));
                            }
                            return '';
                        })(e.isReady, o, e.vehicle.nation),
                        F = (0, r.useMemo)(
                            () => Ie(t, e.isReady, e.isCurrentUser, o),
                            [t, e.isReady, e.isCurrentUser, o],
                        ),
                        d = a()(Vt, e.isCommander ? zt : Ut);
                    return i().createElement(
                        'div',
                        { className: Ht, style: bu(F) },
                        i().createElement(
                            'div',
                            { className: d },
                            i().createElement('div', { className: $t }),
                            e.isPrem && i().createElement('div', { className: Wt }),
                            i().createElement(Ct, { visible: e.voice.isSpeaking }),
                            i().createElement('div', { className: jt }),
                        ),
                        !t &&
                            e.isReady &&
                            i().createElement(
                                i().Fragment,
                                null,
                                i().createElement('div', { className: Qt, style: bu(A) }),
                                i().createElement('div', { className: Zt, style: bu(c) }),
                            ),
                        e.isIgnored &&
                            i().createElement('div', {
                                className: Qt,
                                style: bu(R.images.gui.maps.icons.platoon.members_window.tall_slot.cards.ignored()),
                            }),
                        i().createElement(
                            'div',
                            { className: Gt },
                            e.voice.isMutedByUser && i().createElement(qe, null),
                        ),
                        i().createElement('div', { className: qt }, i().createElement(st, e.commonData)),
                        '' !== e.commonData.rating && i().createElement($e, { rating: e.commonData.rating }),
                        o === Te.Comp7 && i().createElement(Lt, { slot: u }),
                        i().createElement(
                            'div',
                            { className: Kt },
                            e.isReady && !t
                                ? i().createElement(Dt, Jt({}, e.vehicle, { prebattleType: o, isEvent: s }))
                                : n,
                        ),
                        i().createElement('div', { className: l }),
                    );
                };
                function en() {
                    return (
                        (en =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        en.apply(this, arguments)
                    );
                }
                const tn = (u) => {
                        const e = (0, r.useMemo)(
                            () =>
                                u.isEmpty
                                    ? ((u) =>
                                          u.isDisabled
                                              ? {
                                                    text: R.strings.platoon.members.card.disabled(),
                                                    type: Re.disabled,
                                                    slotLabelElements: u.slotLabelElements,
                                                }
                                              : u.isSearching
                                                ? {
                                                      text: i().createElement(Se, { estimatedTime: u.estimatedTime }),
                                                      type: Re.spinner,
                                                      slotLabelElements: u.slotLabelElements,
                                                  }
                                                : {
                                                      text: R.strings.platoon.members.card.empty(),
                                                      type: Re.empty,
                                                      slotLabelElements: u.slotLabelElements,
                                                  })(u)
                                    : {
                                          isEvent: u.isEvent,
                                          isInBattle: u.isInBattle,
                                          player: u.player,
                                          infoText: u.infoText,
                                          prebattleType: u.prebattleType,
                                      },
                            [u],
                        );
                        return (0, r.useMemo)(() => (u) => void 0 !== u.isInBattle, [])(e)
                            ? i().createElement(un, en({ slot: u }, e))
                            : i().createElement(Pe, e);
                    },
                    nn = ({ slot: u }) =>
                        i().createElement(
                            i().Fragment,
                            null,
                            i().createElement(st, u.player.commonData),
                            i().createElement(Lt, { slot: u }),
                        ),
                    an = R.images.gui.maps.icons.platoon.members_window.wide_slot,
                    on = an.cards,
                    rn = R.strings.platoon.members.card,
                    sn = 'Vehicle_base_9f',
                    ln = 'Vehicle_vehicle_15',
                    En = 'Vehicle_description_4f';
                function cn() {
                    return (
                        (cn =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        cn.apply(this, arguments)
                    );
                }
                const An = ({ vehicle: u }) => {
                        const e =
                            ((t = u.nation),
                            (n = u.techName),
                            String(R.images.gui.maps.icons.vehicle.$dyn(`${t}_${Ue(n)}`)));
                        var t, n;
                        return i().createElement(
                            'div',
                            { className: sn },
                            i().createElement(Dt, cn({}, u, { className: En })),
                            i().createElement('div', { className: ln, style: bu(e) }),
                        );
                    },
                    Fn = {
                        base: 'WideSlot_base_9b',
                        mutedContainer: 'WideSlot_mutedContainer_0d',
                        icon: 'WideSlot_icon_5b',
                        memberType: 'WideSlot_memberType_68',
                        spinner: 'WideSlot_spinner_6c',
                        badge: 'WideSlot_badge_5c',
                        mainContent: 'WideSlot_mainContent_76',
                        mainContent__isEmpty: 'WideSlot_mainContent__isEmpty_62',
                        flag: 'WideSlot_flag_65',
                        detailsContainer: 'WideSlot_detailsContainer_30',
                        readiness: 'WideSlot_readiness_6d',
                    },
                    dn = (u) => {
                        const e = u.player,
                            t = (0, r.useMemo)(
                                () =>
                                    (({ slot: u, player: e }) => {
                                        const t = u.isInBattle,
                                            n = u.isEmpty,
                                            a = u.isDisabled,
                                            o = u.errorType,
                                            r = e.isReady,
                                            i = e.isCurrentUser;
                                        return o
                                            ? on.$dyn('error_' + o)
                                            : t
                                              ? on.in_battle_wide()
                                              : n
                                                ? on.empty_wide()
                                                : a
                                                  ? on.disable_wide()
                                                  : r
                                                    ? i
                                                        ? on.ready_player()
                                                        : on.ready()
                                                    : r
                                                      ? void 0
                                                      : i
                                                        ? on.not_ready_player()
                                                        : on.not_ready_wide();
                                    })({ slot: u, player: e }),
                                [e, u],
                            ),
                            n = (0, r.useMemo)(
                                () =>
                                    (({ slot: u, player: e }) => {
                                        const t = u.isSearching,
                                            n = u.isEmpty,
                                            a = u.isDisabled,
                                            o = e.isCommander,
                                            r = e.isPrem;
                                        return t
                                            ? an.spinner()
                                            : a
                                              ? an.disabled()
                                              : n
                                                ? an.empty()
                                                : o
                                                  ? r
                                                      ? an.commander_prem()
                                                      : an.commander()
                                                  : o
                                                    ? void 0
                                                    : r
                                                      ? an.member_prem()
                                                      : an.member();
                                    })({ slot: u, player: e }),
                                [e, u],
                            ),
                            o = (0, r.useMemo)(
                                () =>
                                    ((u) =>
                                        u.isSearching
                                            ? `${rn.searching()} (${u.estimatedTime})`
                                            : u.isDisabled
                                              ? rn.disabledVertical()
                                              : u.isEmpty
                                                ? rn.empty()
                                                : u.prebattleType === Te.Comp7
                                                  ? i().createElement(nn, { slot: u })
                                                  : i().createElement(st, u.player.commonData))(u),
                                [u],
                            ),
                            s = (0, r.useMemo)(() => ({ slotId: u.slotId }), [u.slotId]),
                            l = !e.isReady || u.isInBattle ? u.infoText : i().createElement(An, { vehicle: e.vehicle }),
                            E = !u.isInBattle && e.vehicle.nation;
                        return i().createElement(
                            w,
                            {
                                contentId: R.views.lobby.platoon.WTRTooltip('resId'),
                                isEnabled: '' !== e.commonData.rating,
                                args: s,
                            },
                            i().createElement(
                                'div',
                                { className: Fn.base, style: bu(t) },
                                E &&
                                    i().createElement('div', {
                                        className: Fn.flag,
                                        style: bu(
                                            `${R.images.gui.maps.icons.platoon.members_window.wide_slot.flags.$dyn(e.vehicle.nation)}`,
                                        ),
                                    }),
                                i().createElement(
                                    'div',
                                    { className: Fn.mutedContainer },
                                    e.voice.isMutedByUser && i().createElement(qe, null),
                                ),
                                i().createElement(
                                    'div',
                                    { className: a()(Fn.memberType, u.isDisabled && Fn.isDisabled) },
                                    i().createElement(Ct, { visible: e.voice.isSpeaking }),
                                    i().createElement('div', {
                                        style: bu(n),
                                        className: a()(Fn.icon, u.isSearching && Fn.spinner),
                                    }),
                                ),
                                i().createElement(
                                    'div',
                                    { className: a()(Fn.mainContent, u.isEmpty && Fn.mainContent__isEmpty) },
                                    o,
                                ),
                                !u.isEmpty && i().createElement('div', { className: Fn.detailsContainer }, l),
                                e.isReady &&
                                    !u.isInBattle &&
                                    i().createElement('div', {
                                        className: a()(Fn.readiness, e.isReady && Fn.readiness__isReady),
                                    }),
                            ),
                        );
                    },
                    Dn = 'SlotContainer_base__short_e7';
                function _n() {
                    return (
                        (_n =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        _n.apply(this, arguments)
                    );
                }
                const mn = ({ slot: u, isHorizontal: e, isShort: t }) => {
                        const n = e ? tn : dn,
                            o = u.player.commonData.name,
                            s = (0, r.useMemo)(() => ({ userName: o }), [o]),
                            l = i().createElement(
                                'div',
                                { className: a()(t && Dn) },
                                i().createElement(n, _n({ key: u.slotId }, u)),
                            );
                        return u.player.isCurrentUser || u.isEmpty
                            ? l
                            : i().createElement(Ne, { args: s, key: u.slotId }, l);
                    },
                    Bn = 'Slots_base_7e',
                    Cn = 'Slots_base__isHorizontal_aa',
                    pn = 'Slots_base__isHorizontal__short_ba',
                    bn = () => {
                        const u = iu(),
                            e = u.isHorizontal,
                            t = u.isShort,
                            n = iu('model.slots'),
                            o = a()(Bn, e && Cn, e && t && pn);
                        return i().createElement(
                            'div',
                            { className: o },
                            n.map((u) =>
                                i().createElement(mn, {
                                    slot: u.value,
                                    isHorizontal: e,
                                    isShort: t,
                                    key: u.value.slotId,
                                }),
                            ),
                        );
                    },
                    vn = 'MembersWindow_base_9b',
                    gn = 'MembersWindow_base__isHorizontal_ce',
                    yn = 'MembersWindow_base__isHorizontal__short_0c',
                    fn = 'MembersWindow_base__isVertical_44',
                    hn = 'MembersWindow_chatContainer_41',
                    wn = 'MembersWindow_commanderControls_cf',
                    Nn = 'MembersWindow_commanderControls__center_6d',
                    Tn = 'MembersWindow_platoon_60',
                    kn = 'MembersWindow_slots_21',
                    Mn = () => {
                        const u = iu(),
                            e = u.canMinimize,
                            t = u.isCommander,
                            n = u.isHorizontal,
                            s = u.isShort,
                            l = u.onClosed,
                            E = u.onMinimized,
                            c = u.onFocusChange,
                            A = u.windowTooltipHeader,
                            F = u.windowTooltipBody,
                            d = u.rawTitle,
                            D = u.shouldShowFindPlayersButton,
                            _ = (0, r.useCallback)(() => {
                                o.O.view.setEventHandled(), l();
                            }, [l]),
                            m = (0, r.useCallback)(() => E(), [E]),
                            B = (0, r.useCallback)(
                                (u) => {
                                    c({ isFocused: u });
                                },
                                [c],
                            );
                        return (
                            Q(X.n.ESCAPE, () => _()),
                            i().createElement(
                                Y,
                                {
                                    showMinimizeBtn: e,
                                    title: d,
                                    infoTooltipHeader: A,
                                    infoTooltipBody: F,
                                    onClose: _,
                                    onMinimize: m,
                                    onFocusChange: B,
                                },
                                i().createElement(
                                    'div',
                                    { className: a()(vn, n ? [gn, s && yn] : fn) },
                                    i().createElement(
                                        'div',
                                        { className: Tn },
                                        i().createElement(ge, null),
                                        i().createElement(Mu, { position: ku.top }),
                                        i().createElement('div', { className: kn }, i().createElement(bn, null)),
                                        i().createElement(
                                            'div',
                                            { className: a()(wn, !D && Nn) },
                                            t && i().createElement(Gu, null),
                                        ),
                                        i().createElement(Mu, { position: ku.bottom }),
                                        i().createElement(Xu, null),
                                    ),
                                    i().createElement(Mu, { position: ku.left }),
                                    i().createElement(Bu, {
                                        id: R.views.lobby.platoon.subViews.Chat('resId'),
                                        mixClass: hn,
                                    }),
                                ),
                            )
                        );
                    };
                engine.whenReady.then(() => {
                    pu().render(i().createElement(Mn, null), document.getElementById('root')),
                        A(R.sounds.gui_platoon_2_created());
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
                var a = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [e, t, n] = deferred[s], o = !0, r = 0; r < e.length; r++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[r]))
                            ? e.splice(r--, 1)
                            : ((o = !1), n < a && (a = n));
                    if (o) {
                        deferred.splice(s--, 1);
                        var i = t();
                        void 0 !== i && (u = i);
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
        (() => {
            var u = { 699: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var n,
                        a,
                        [o, r, i] = t,
                        s = 0;
                    if (o.some((e) => 0 !== u[e])) {
                        for (n in r) __webpack_require__.o(r, n) && (__webpack_require__.m[n] = r[n]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (e && e(t); s < o.length; s++)
                        (a = o[s]), __webpack_require__.o(u, a) && u[a] && u[a][0](), (u[a] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [720], () => __webpack_require__(257));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
