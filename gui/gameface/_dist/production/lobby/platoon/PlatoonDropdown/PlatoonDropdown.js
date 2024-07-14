(() => {
    'use strict';
    var __webpack_modules__ = {
            67: (e, t, n) => {
                n.d(t, { O: () => q });
                var o = {};
                n.r(o), n.d(o, { mouse: () => u, onResize: () => c });
                var r = {};
                n.r(r),
                    n.d(r, {
                        events: () => o,
                        getMouseGlobalPosition: () => m,
                        getSize: () => _,
                        graphicsQuality: () => v,
                    });
                var a = {};
                n.r(a), n.d(a, { getBgUrl: () => p, getTextureUrl: () => w });
                var i = {};
                function s(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                function l(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                n.r(i),
                    n.d(i, {
                        addModelObserver: () => S,
                        addPreloadTexture: () => P,
                        children: () => a,
                        displayStatus: () => b,
                        displayStatusIs: () => W,
                        events: () => h,
                        extraSize: () => G,
                        forceTriggerMouseMove: () => j,
                        freezeTextureBeforeResize: () => D,
                        getBrowserTexturePath: () => M,
                        getDisplayStatus: () => z,
                        getScale: () => I,
                        getSize: () => N,
                        getViewGlobalPosition: () => L,
                        isEventHandled: () => U,
                        isFocused: () => V,
                        pxToRem: () => F,
                        remToPx: () => B,
                        resize: () => A,
                        sendEvent: () => C,
                        setAnimateWindow: () => x,
                        setEventHandled: () => H,
                        setInputPaddingsRem: () => T,
                        setSidePaddingsRem: () => R,
                        whenTutorialReady: () => K,
                    });
                const c = s('clientResized'),
                    d = { down: s('mousedown'), up: s('mouseup'), move: s('mousemove') };
                const u = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && l(!1);
                    }
                    function n() {
                        e.enabled && l(!0);
                    }
                    function o() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', n))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', n))
                            : l(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const a = `mouse${t}`,
                                        i = d[t]((e) => n([e, 'outside']));
                                    function s(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, s),
                                        o(),
                                        () => {
                                            r &&
                                                (i(),
                                                window.removeEventListener(a, s),
                                                (e.listeners -= 1),
                                                o(),
                                                (r = !1));
                                        }
                                    );
                                };
                            })(n)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, r, {
                        disable() {
                            (e.enabled = !1), o();
                        },
                        enable() {
                            (e.enabled = !0), o();
                        },
                        enableOutside() {
                            e.enabled && l(!0);
                        },
                        disableOutside() {
                            e.enabled && l(!1);
                        },
                    });
                })();
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const v = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function w(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function p(e, t, n) {
                    return `url(${w(e, t, n)})`;
                }
                const b = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    h = {
                        onTextureFrozen: s('self.onTextureFrozen'),
                        onTextureReady: s('self.onTextureReady'),
                        onDomBuilt: s('self.onDomBuilt'),
                        onLoaded: s('self.onLoaded'),
                        onDisplayChanged: s('self.onShowingStatusChanged'),
                        onFocusUpdated: s('self.onFocusChanged'),
                        children: {
                            onAdded: s('children.onAdded'),
                            onLoaded: s('children.onLoaded'),
                            onRemoved: s('children.onRemoved'),
                            onAttached: s('children.onAttached'),
                            onTextureReady: s('children.onTextureReady'),
                            onRequestPosition: s('children.requestPosition'),
                        },
                    },
                    E = ['args'];
                const f = 2,
                    g = 16,
                    y = 32,
                    O = 64,
                    k = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        o,
                                        r = {},
                                        a = Object.keys(e);
                                    for (o = 0; o < a.length; o++) (n = a[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                    return r;
                                })(t, E);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, a, {
                                          arguments:
                                              ((o = r),
                                              Object.entries(o).map(([e, t]) => {
                                                  const n = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: n, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: n, name: e, bool: t };
                                                      default:
                                                          return { __Type: n, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, a));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var o;
                    },
                    C = {
                        close(e) {
                            k('popover' === e ? f : y);
                        },
                        minimize() {
                            k(O);
                        },
                        move(e) {
                            k(g, { isMouseEvent: !0, on: e });
                        },
                    };
                function P(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function T(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function M(e, t, n, o = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, o);
                }
                function S(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function R(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function N(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function A(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function L(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: B(t.x), y: B(t.y) };
                }
                function D() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function I() {
                    return viewEnv.getScale();
                }
                function F(e) {
                    return viewEnv.pxToRem(e);
                }
                function B(e) {
                    return viewEnv.remToPx(e);
                }
                function x(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function V() {
                    return viewEnv.isFocused();
                }
                function H() {
                    return viewEnv.setEventHandled();
                }
                function U() {
                    return viewEnv.isEventHandled();
                }
                function j() {
                    viewEnv.forceTriggerMouseMove();
                }
                function z() {
                    return viewEnv.getShowingStatus();
                }
                const W = Object.keys(b).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === b[t]), e), {}),
                    G = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    K = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : h.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    q = { view: i, client: r };
            },
            521: (e, t, n) => {
                let o, r;
                n.d(t, { n: () => o }),
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
                    })(o || (o = {})),
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
            358: (e, t, n) => {
                n.d(t, { Z: () => a });
                var o = n(67);
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
                    addCallback(e, t, n = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = o.O.view.addModelObserver(e, n, r);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = t),
                                  n > 0 && (this._views[n] ? this._views[n].push(a) : (this._views[n] = [a])))
                                : console.error("Can't add callback for model:", e),
                            a
                        );
                    }
                    removeCallback(e, t = 0) {
                        let n = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((n = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            n || console.error("Can't remove callback by id:", e),
                            n
                        );
                    }
                    _emmitDataChanged(e, t, n) {
                        n.forEach((n) => {
                            const o = this._callbacks[n];
                            void 0 !== o && o(e, t);
                        });
                    }
                }
                r.__instance = void 0;
                const a = r;
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
            114: (e, t, n) => {
                n.d(t, { Sw: () => a.Z, B0: () => l.B0, ry: () => c.ry, Eu: () => c.Eu });
                class o {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: n }) => {
                                    let o = e.target;
                                    do {
                                        if (o === t) return;
                                        o = o.parentNode;
                                    } while (o);
                                    n();
                                });
                            });
                    }
                    static get instance() {
                        return o.__instance || (o.__instance = new o()), o.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const n = e,
                            o = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== n || t !== o)),
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
                o.__instance = void 0;
                const r = o;
                var a = n(358);
                const i = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    s = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, n) => userLocale.getTimeFormat(e, t, void 0 === n || n),
                        getTimeString: (e, t, n) => userLocale.getTimeString(e, t, void 0 === n || n),
                    };
                var l = n(251),
                    c = n(72),
                    d = n(572);
                const u = r.instance,
                    _ = {
                        DataTracker: a.Z,
                        ViewModel: d.Z,
                        ViewEventType: l.B0,
                        NumberFormatType: l.B3,
                        RealFormatType: l.Gr,
                        TimeFormatType: l.lf,
                        DateFormatType: l.kH,
                        makeGlobalBoundingBox: c.Kv,
                        sendMoveEvent: c.wv,
                        sendCloseEvent: c.Sy,
                        sendClosePopOverEvent: c.SW,
                        sendShowContextMenuEvent: c.uk,
                        sendShowPopOverEvent: c.P3,
                        addEscapeListener: c.VM,
                        closeOnEsc: c.SU,
                        handleViewEvent: c.c9,
                        onBindingsReady: c.ry,
                        onLayoutReady: c.Eu,
                        isTooltipShown: c.KE,
                        isContextMenuShown: c.uM,
                        isPopOverShown: c.wU,
                        dumpViewModel: function e(t) {
                            const n = {};
                            if ('object' != typeof t) return t;
                            for (const o in t)
                                if (Object.prototype.hasOwnProperty.call(t, o)) {
                                    const r = Object.prototype.toString.call(t[o]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = t[o];
                                        n[o] = [];
                                        for (let t = 0; t < r.length; t++) n[o].push({ value: e(r[t].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[o] = e(t[o]))
                                            : (n[o] = t[o]);
                                }
                            return n;
                        },
                        ClickOutsideManager: u,
                        SystemLocale: i,
                        UserLocale: s,
                    };
                window.ViewEnvHelper = _;
            },
            251: (e, t, n) => {
                let o;
                n.d(t, { B0: () => o, B3: () => r, Gr: () => a, kH: () => s, lf: () => i }),
                    (function (e) {
                        (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                            (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                            (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                            (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                            (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                            (e[(e.MOVE = 16)] = 'MOVE'),
                            (e[(e.CLOSE = 32)] = 'CLOSE'),
                            (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                    })(o || (o = {}));
                const r = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    a = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    i = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    s = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
            },
            72: (e, t, n) => {
                n.d(t, {
                    Eu: () => d,
                    KE: () => b,
                    Kv: () => l,
                    P3: () => p,
                    SU: () => g,
                    SW: () => v,
                    Sy: () => m,
                    VM: () => y,
                    c9: () => u,
                    ry: () => c,
                    uM: () => h,
                    uk: () => w,
                    wU: () => E,
                    wv: () => _,
                });
                var o = n(521),
                    r = n(67),
                    a = n(251);
                const i = ['args'];
                function s(e, t, n, o, r, a, i) {
                    try {
                        var s = e[a](i),
                            l = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    s.done ? t(l) : Promise.resolve(l).then(o, r);
                }
                const l = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    c = (function () {
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
                                        n = arguments;
                                    return new Promise(function (o, r) {
                                        var a = e.apply(t, n);
                                        function i(e) {
                                            s(a, o, r, i, l, 'next', e);
                                        }
                                        function l(e) {
                                            s(a, o, r, i, l, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    d = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    u = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        o,
                                        r = {},
                                        a = Object.keys(e);
                                    for (o = 0; o < a.length; o++) (n = a[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                    return r;
                                })(t, i);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, a, {
                                          arguments:
                                              ((o = r),
                                              Object.entries(o).map(([e, t]) => {
                                                  const n = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          n.number = t;
                                                          break;
                                                      case 'boolean':
                                                          n.bool = t;
                                                          break;
                                                      default:
                                                          n.string = t.toString();
                                                  }
                                                  return n;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var o;
                    },
                    _ = (e) => u(a.B0.MOVE, { isMouseEvent: !0, on: e }),
                    m = () => u(a.B0.CLOSE),
                    v = () => u(a.B0.POP_OVER, { on: !1 }),
                    w = (e, t, n = 0) => {
                        u(a.B0.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                    },
                    p = (e, t, n, o, i = R.invalid('resId'), s) => {
                        const c = r.O.view.getViewGlobalPosition(),
                            d = n.getBoundingClientRect(),
                            _ = d.x,
                            m = d.y,
                            v = d.width,
                            w = d.height,
                            p = {
                                x: r.O.view.pxToRem(_) + c.x,
                                y: r.O.view.pxToRem(m) + c.y,
                                width: r.O.view.pxToRem(v),
                                height: r.O.view.pxToRem(w),
                            };
                        u(a.B0.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: o || R.invalid('resId'),
                            targetID: i,
                            direction: t,
                            bbox: l(p),
                            on: !0,
                            args: s,
                        });
                    },
                    b = () => viewEnv.isWindowShownByViewEvent(a.B0.TOOLTIP),
                    h = () => viewEnv.isWindowShownByViewEvent(a.B0.CONTEXT_MENU),
                    E = () => viewEnv.isWindowShownByViewEvent(a.B0.POP_OVER),
                    f = (e, t) => {
                        e.keyCode === o.n.ESCAPE && t();
                    },
                    g = (e) => {
                        f(e, m);
                    },
                    y = (e) => {
                        const t = (t) => f(t, e);
                        return window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t);
                    };
            },
            966: (e, t, n) => {
                var o = n(483),
                    r = n.n(o);
                const a = (e = 1) => {
                    const t = new Error().stack;
                    let n,
                        o = R.invalid('resId');
                    return (
                        t &&
                            ((n = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== n &&
                                window.subViews[n] &&
                                (o = window.subViews[n].id)),
                        { caller: n, stack: t, resId: o }
                    );
                };
                var i = n(114),
                    s = n(179),
                    l = n.n(s);
                const c = [
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
                function d(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const n = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                n.number = t;
                                break;
                            case 'boolean':
                                n.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                n.string = t.toString();
                        }
                        return n;
                    });
                }
                const u = (e, t, n = {}, o = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: i.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: o,
                                },
                                n,
                            ),
                        );
                    },
                    _ = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            o = e.args,
                            r = e.onMouseEnter,
                            i = e.onMouseLeave,
                            l = e.onMouseDown,
                            _ = e.onClick,
                            m = e.ignoreShowDelay,
                            v = void 0 !== m && m,
                            w = e.ignoreMouseClick,
                            p = void 0 !== w && w,
                            b = e.decoratorId,
                            h = void 0 === b ? 0 : b,
                            E = e.isEnabled,
                            f = void 0 === E || E,
                            g = e.targetId,
                            y = void 0 === g ? 0 : g,
                            O = e.onShow,
                            k = e.onHide,
                            C = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    o,
                                    r = {},
                                    a = Object.keys(e);
                                for (o = 0; o < a.length; o++) (n = a[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, c);
                        const P = (0, s.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            T = (0, s.useMemo)(() => y || a().resId, [y]),
                            M = (0, s.useCallback)(() => {
                                (P.current.isVisible && P.current.timeoutId) ||
                                    (u(n, h, { isMouseEvent: !0, on: !0, arguments: d(o) }, T),
                                    O && O(),
                                    (P.current.isVisible = !0));
                            }, [n, h, o, T, O]),
                            S = (0, s.useCallback)(() => {
                                if (P.current.isVisible || P.current.timeoutId) {
                                    const e = P.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (P.current.timeoutId = 0)),
                                        u(n, h, { on: !1 }, T),
                                        P.current.isVisible && k && k(),
                                        (P.current.isVisible = !1);
                                }
                            }, [n, h, T, k]),
                            R = (0, s.useCallback)((e) => {
                                P.current.isVisible &&
                                    ((P.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (P.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(P.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        (0, s.useEffect)(() => {
                            const e = P.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', R, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', R, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, s.useEffect)(() => {
                                !1 === f && S();
                            }, [f, S]),
                            (0, s.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        window.removeEventListener('mouseleave', S), S();
                                    }
                                ),
                                [S],
                            );
                        return f
                            ? (0, s.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((N = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((P.current.timeoutId = window.setTimeout(M, v ? 100 : 400)),
                                                      r && r(e),
                                                      N && N(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              S(), null == i || i(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === p && S(), null == _ || _(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === p && S(), null == l || l(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      C,
                                  ),
                              )
                            : t;
                        var N;
                    },
                    m = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function v() {
                    return (
                        (v =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                                }
                                return e;
                            }),
                        v.apply(this, arguments)
                    );
                }
                const w = R.views.common.tooltip_window.simple_tooltip_content,
                    p = (e) => {
                        let t = e.children,
                            n = e.body,
                            o = e.header,
                            r = e.note,
                            a = e.alert,
                            i = e.args,
                            c = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    o,
                                    r = {},
                                    a = Object.keys(e);
                                for (o = 0; o < a.length; o++) (n = a[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, m);
                        const d = (0, s.useMemo)(() => {
                            const e = Object.assign({}, i, { body: n, header: o, note: r, alert: a });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [a, n, o, r, i]);
                        return l().createElement(
                            _,
                            v(
                                {
                                    contentId:
                                        ((u = null == i ? void 0 : i.hasHtmlContent),
                                        u ? w.SimpleTooltipHtmlContent('resId') : w.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: d,
                                },
                                c,
                            ),
                            t,
                        );
                        var u;
                    },
                    b = (e) => {
                        let t,
                            n = null;
                        return (
                            (n = requestAnimationFrame(() => {
                                n = requestAnimationFrame(() => {
                                    (n = null), (t = e());
                                });
                            })),
                            () => {
                                'function' == typeof t && t(), null !== n && cancelAnimationFrame(n);
                            }
                        );
                    };
                var h = n(67);
                const E = (e) => {
                    (0, s.useEffect)(e, []);
                };
                function f(e) {
                    engine.call('PlaySound', e);
                }
                const g = {
                        playHighlight() {
                            f('highlight');
                        },
                        playClick() {
                            f('play');
                        },
                        playYes() {
                            f('yes1');
                        },
                    },
                    y = {
                        base: 'PopoverDecorator_base_ed',
                        decorator: 'PopoverDecorator_decorator_d3',
                        arrow: 'PopoverDecorator_arrow_8a',
                        arrow__bottom: 'PopoverDecorator_arrow__bottom_c3',
                        arrow__top: 'PopoverDecorator_arrow__top_6e',
                        arrow__left: 'PopoverDecorator_arrow__left_7a',
                        arrow__right: 'PopoverDecorator_arrow__right_b6',
                        closeBtn: 'PopoverDecorator_closeBtn_32',
                        content: 'PopoverDecorator_content_f0',
                    };
                var O;
                !(function (e) {
                    (e[(e.Left = 0)] = 'Left'),
                        (e[(e.Right = 1)] = 'Right'),
                        (e[(e.Top = 2)] = 'Top'),
                        (e[(e.Bottom = 3)] = 'Bottom');
                })(O || (O = {}));
                const k = ['__left', '__right', '__top', '__bottom'],
                    C = (0, s.forwardRef)(
                        ({ children: e, disableAutoSizeUpdate: t, onOutsideClick: n, customStyles: o = {} }, a) => {
                            const c = (0, s.useRef)(null),
                                d = (0, s.useRef)(null),
                                u = (0, s.useRef)(null),
                                _ = (0, s.useState)(window.decorator && window.decorator.directionType),
                                m = _[0],
                                v = _[1],
                                w = (0, s.useCallback)(() => {
                                    g.playClick(), h.O.view.sendEvent.close();
                                }, []),
                                f = (0, s.useCallback)(() => {
                                    g.playHighlight();
                                }, []),
                                O = r()(y.arrow, y[`arrow${k[m]}`]);
                            E(
                                () => (
                                    h.O.client.events.mouse.enableOutside(),
                                    h.O.client.events.mouse.down(([, e]) => {
                                        'outside' === e && (n ? n() : h.O.view.sendEvent.close('popover'));
                                    })
                                ),
                            );
                            const C = (0, s.useCallback)(
                                    (e) => {
                                        let t = e.target;
                                        do {
                                            if (t === c.current || t === u.current) return;
                                            t = t.parentNode;
                                        } while (t);
                                        const o = window.decorator;
                                        if (void 0 !== window.decorator) {
                                            const e = h.O.client.getMouseGlobalPosition(),
                                                t = ![o.boundX, o.boundY, o.boundWidth, o.boundHeight].includes(void 0),
                                                n =
                                                    e.x < o.boundX ||
                                                    e.x > o.boundX + o.boundWidth ||
                                                    e.y > o.boundY + o.boundHeight ||
                                                    e.y < o.boundY;
                                            if (t && !n) return;
                                        }
                                        n ? n() : h.O.view.sendEvent.close('popover');
                                    },
                                    [c, u, n],
                                ),
                                P = (0, s.useCallback)(
                                    () => (
                                        h.O.view.freezeTextureBeforeResize(),
                                        b(() => {
                                            if (d.current) {
                                                const e = d.current.scrollWidth,
                                                    t = d.current.scrollHeight;
                                                h.O.view.resize(e, t), v(window.decorator.directionType);
                                            }
                                        })
                                    ),
                                    [],
                                );
                            return (
                                (0, s.useImperativeHandle)(a, () => ({ updateSize: P })),
                                E(() => {
                                    h.O.view.setInputPaddingsRem(58);
                                }),
                                (0, s.useEffect)(() => {
                                    document.addEventListener('mousedown', C, { capture: !0 });
                                    const e = ((e) => {
                                        let t = !1;
                                        return {
                                            promise: new Promise((n, o) => {
                                                e.then((e) => !t && n(e)).catch((e) => !t && o(e));
                                            }),
                                            cancel() {
                                                t = !0;
                                            },
                                        };
                                    })((0, i.Eu)());
                                    return (
                                        !t && e.promise.then(() => P()),
                                        () => {
                                            e.cancel(), document.removeEventListener('mousedown', C);
                                        }
                                    );
                                }, [P, C, t]),
                                l().createElement(
                                    'div',
                                    { className: y.base, ref: d },
                                    l().createElement(
                                        'div',
                                        { className: y.decorator },
                                        l().createElement(
                                            'div',
                                            { className: y.content, ref: c },
                                            e,
                                            window.decorator &&
                                                window.decorator.isCloseBtnVisible &&
                                                l().createElement(
                                                    p,
                                                    { body: R.strings.dialogs.common.error.cancel() },
                                                    l().createElement('div', {
                                                        className: y.closeBtn,
                                                        onClick: w,
                                                        onMouseEnter: f,
                                                        ref: u,
                                                    }),
                                                ),
                                        ),
                                        l().createElement('div', { className: O, style: o.arrow }),
                                    ),
                                )
                            );
                        },
                    );
                let P;
                !(function (e) {
                    (e.Random = 'random'), (e.Comp7 = 'comp7');
                })(P || (P = {}));
                var T = n(521);
                const M = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function S(e = T.n.NONE, t = M, n = !1) {
                    (0, s.useEffect)(() => {
                        if (e !== T.n.NONE)
                            return (
                                window.addEventListener('keydown', o, n),
                                () => {
                                    window.removeEventListener('keydown', o, n);
                                }
                            );
                        function o(o) {
                            if (o.keyCode === e) {
                                if (h.O.view.isEventHandled()) return;
                                h.O.view.setEventHandled(), t(o), n && o.stopPropagation();
                            }
                        }
                    }, [t, e, n]);
                }
                const N = (e, t) => e.split('.').reduce((e, t) => e && e[t], t),
                    A = (e) => {
                        const t = (0, s.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    L = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    D = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    I = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, n) => {
                                const o = N(`${e}.${n}`, window);
                                return L(o) ? t(e, n, o) : `${e}.${n}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    F = (e) => {
                        const t = ((e) => {
                                const t = a(),
                                    n = t.caller,
                                    o = t.resId,
                                    r = window.__feature && window.__feature !== n && n ? `subViews.${n}` : '';
                                return { modelPrefix: r, modelPath: D(r, e || ''), resId: o };
                            })(),
                            n = t.modelPrefix,
                            o = e.split('.');
                        if (o.length > 0) {
                            const e = [o[0]];
                            return (
                                o.reduce((t, o) => {
                                    const r = N(D(n, `${t}.${o}`), window);
                                    return L(r) ? (e.push(r.id), `${t}.${o}.value`) : (e.push(o), `${t}.${o}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    },
                    B = i.Sw.instance;
                let x;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(x || (x = {}));
                const V = (e = 'model', t = x.Deep) => {
                    const n = (0, s.useState)(0),
                        o = (n[0], n[1]),
                        r = (0, s.useMemo)(() => a(), []),
                        i = r.caller,
                        l = r.resId,
                        c = (0, s.useMemo)(
                            () => (window.__feature && window.__feature !== i ? `subViews.${i}.${e}` : e),
                            [i, e],
                        ),
                        d = (0, s.useState)(() =>
                            ((e) => {
                                const t = N(e, window);
                                for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                return L(t) ? t.value : t;
                            })(I(c)),
                        ),
                        u = d[0],
                        _ = d[1],
                        m = (0, s.useRef)(-1);
                    return (
                        A(() => {
                            if (
                                ('boolean' == typeof t &&
                                    ((t = t ? x.Deep : x.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                t !== x.None)
                            ) {
                                const n = (e) => {
                                        ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                        t === x.Deep
                                            ? (e === u && o((e) => e + 1), _(e))
                                            : _(Object.assign([], e));
                                    },
                                    r = F(e);
                                m.current = B.addCallback(r, n, l, t === x.Deep);
                            }
                        }),
                        (0, s.useEffect)(() => {
                            if (t !== x.None)
                                return () => {
                                    B.removeCallback(m.current, l);
                                };
                        }, [l, t]),
                        u
                    );
                };
                var H = n(493),
                    U = n.n(H);
                const j = (e) => ({ backgroundImage: `url('${e}')` }),
                    z = 'BonusInfoIcon_bonusInfoIcon_3d',
                    W = () => {
                        const e = (0, s.useMemo)(() => j(R.images.gui.maps.icons.platoon.common.info()), []);
                        return l().createElement(
                            _,
                            {
                                isEnabled: !0,
                                contentId:
                                    R.views.lobby.premacc.squad_bonus_tooltip_content.SquadBonusTooltipContent('resId'),
                                decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                            },
                            l().createElement('div', { className: z, style: e }),
                        );
                    },
                    G = {
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
                let K, q;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(K || (K = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(q || (q = {}));
                const $ = ({
                    children: e,
                    size: t,
                    isFocused: n,
                    type: o,
                    disabled: a,
                    mixClass: i,
                    soundHover: c,
                    soundClick: d,
                    onMouseEnter: u,
                    onMouseMove: _,
                    onMouseDown: m,
                    onMouseUp: v,
                    onMouseLeave: w,
                    onClick: p,
                }) => {
                    const b = (0, s.useRef)(null),
                        h = (0, s.useState)(n),
                        E = h[0],
                        g = h[1],
                        y = (0, s.useState)(!1),
                        O = y[0],
                        k = y[1],
                        C = (0, s.useState)(!1),
                        P = C[0],
                        T = C[1],
                        M = (0, s.useCallback)(() => {
                            a || (b.current && (b.current.focus(), g(!0)));
                        }, [a]),
                        S = (0, s.useCallback)(
                            (e) => {
                                E && null !== b.current && !b.current.contains(e.target) && g(!1);
                            },
                            [E],
                        ),
                        N = (0, s.useCallback)(
                            (e) => {
                                a || (p && p(e));
                            },
                            [a, p],
                        ),
                        A = (0, s.useCallback)(
                            (e) => {
                                a || (null !== c && f(c), u && u(e), T(!0));
                            },
                            [a, c, u],
                        ),
                        L = (0, s.useCallback)(
                            (e) => {
                                _ && _(e);
                            },
                            [_],
                        ),
                        D = (0, s.useCallback)(
                            (e) => {
                                a || (v && v(e), k(!1));
                            },
                            [a, v],
                        ),
                        I = (0, s.useCallback)(
                            (e) => {
                                a || (null !== d && f(d), m && m(e), n && M(), k(!0));
                            },
                            [a, d, m, M, n],
                        ),
                        F = (0, s.useCallback)(
                            (e) => {
                                a || (w && w(e), k(!1));
                            },
                            [a, w],
                        ),
                        B = r()(
                            G.base,
                            G[`base__${o}`],
                            {
                                [G.base__disabled]: a,
                                [G[`base__${t}`]]: t,
                                [G.base__focus]: E,
                                [G.base__highlightActive]: O,
                                [G.base__firstHover]: P,
                            },
                            i,
                        ),
                        x = r()(G.state, G.state__default);
                    return (
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mousedown', S),
                                () => {
                                    document.removeEventListener('mousedown', S);
                                }
                            ),
                            [S],
                        ),
                        (0, s.useEffect)(() => {
                            g(n);
                        }, [n]),
                        l().createElement(
                            'div',
                            {
                                ref: b,
                                className: B,
                                onMouseEnter: A,
                                onMouseMove: L,
                                onMouseUp: D,
                                onMouseDown: I,
                                onMouseLeave: F,
                                onClick: N,
                            },
                            o !== K.ghost &&
                                l().createElement(
                                    l().Fragment,
                                    null,
                                    l().createElement('div', { className: G.back }),
                                    l().createElement('span', { className: G.texture }),
                                ),
                            l().createElement(
                                'span',
                                { className: x },
                                l().createElement('span', { className: G.stateDisabled }),
                                l().createElement('span', { className: G.stateHighlightHover }),
                                l().createElement('span', { className: G.stateHighlightActive }),
                            ),
                            l().createElement(
                                'span',
                                { className: G.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                $.defaultProps = { type: K.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Y = (0, s.memo)($);
                function X() {
                    return (
                        (X =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                                }
                                return e;
                            }),
                        X.apply(this, arguments)
                    );
                }
                (0, s.memo)(
                    ({
                        caption: e,
                        isEnabled: t,
                        description: n,
                        children: o,
                        cButtonProps: r,
                        onClick: a,
                        className: i,
                    }) => {
                        const c = (0, s.useCallback)(() => a(), [a]);
                        return l().createElement(
                            p,
                            { isEnabled: !0, header: e, body: n },
                            l().createElement(
                                'div',
                                { className: i },
                                l().createElement(
                                    Y,
                                    X({ type: K.primary, size: q.small, onClick: c, disabled: !t }, r),
                                    o || e,
                                ),
                            ),
                        );
                    },
                );
                const Z = /<link.*?>/g,
                    Q = /\.\.\//g,
                    J = /<script.*?>/g,
                    ee = 'default.css',
                    te = (e) => {
                        const t = e.match(Q);
                        return t && t.join('');
                    },
                    ne = () => {
                        for (
                            var e = 0, t = Array.from(document.head.querySelectorAll('link[rel="stylesheet"]'));
                            e < t.length;
                            e++
                        ) {
                            const n = t[e];
                            if (!n.href.includes(ee)) return n.href;
                        }
                        return '';
                    },
                    oe = (e) => {
                        const t = ne(),
                            n = te(t);
                        let o,
                            r = e;
                        for (; null !== (o = J.exec(e)); ) {
                            const e = o[0].match(/<script (defer|defer="defer") src="(.*?)">/);
                            if (e) {
                                const t = n + e[2].replace(Q, '');
                                r = r.replace(e[2], t);
                            }
                        }
                        return r;
                    },
                    re = 'SubView_base_df',
                    ae = 'subViews.onChanged',
                    ie = (() => {
                        const e = [];
                        let t = !1;
                        const n = () => {
                            if (!e.length) return void (t = !1);
                            const o = e.shift();
                            o && ((t = !0), o().then(() => n()));
                        };
                        return {
                            add: (o) => {
                                e.push(o), t || n();
                            },
                        };
                    })(),
                    se = (0, s.memo)(({ id: e, fallback: t, onLoadCallback: n, mixClass: o }) => {
                        const a = (0, s.useState)(''),
                            c = a[0],
                            d = a[1],
                            u = (0, s.useMemo)(() => ({ __html: oe(c) }), [c]),
                            _ = (0, s.useMemo)(() => window.subViews.addChildChangedCallback(e), [e]),
                            m = (0, s.useState)(!1),
                            v = m[0],
                            w = m[1],
                            p = (0, s.useCallback)(
                                (e) => {
                                    e.includes(_) &&
                                        (w(!0), engine.off(ae, p), window.subViews.removeChildChangedCallback(_));
                                },
                                [_],
                            ),
                            b = (0, s.useCallback)((e) => {
                                ie.add(
                                    () =>
                                        new Promise((t) => {
                                            d(e);
                                            const n = new MutationObserver(() => {
                                                    n.disconnect(), t();
                                                }),
                                                o = document.getElementById('root');
                                            o && n.observe(o, { childList: !0 });
                                        }),
                                );
                            }, []);
                        (0, s.useEffect)(() => {
                            if (window.subViews.ids().includes(e)) {
                                const t = window.subViews.get(e),
                                    n = t.path;
                                let o;
                                if ((o = n.split('/').pop()))
                                    return (
                                        (o = o.split('.')[0]),
                                        (window.subViews[o] = Object.assign({ id: e }, t)),
                                        engine.on(`subView:inject->${o}`, b),
                                        (({ path: e, name: t }) => {
                                            const n = new XMLHttpRequest();
                                            (n.onreadystatechange = () => {
                                                4 === n.readyState &&
                                                    (200 === n.status
                                                        ? (0, i.Eu)().then(() => {
                                                              console.info(`Sub view ${t} loaded: ${e}`),
                                                                  engine.TriggerEvent(
                                                                      `subView:inject->${t}`,
                                                                      n.responseText,
                                                                  );
                                                          })
                                                        : console.error(
                                                              `subView: status: ${n.status} - can't get bundle`,
                                                          ));
                                            }),
                                                n.open('GET', e),
                                                n.send();
                                        })({ name: o, path: n }),
                                        () => {
                                            o && window.subViews[o] && delete window.subViews[o],
                                                engine.trigger('subView:destroy', { viewName: o, viewId: e }),
                                                window.__dataTracker &&
                                                    window.__dataTracker.clearViewCallbacks &&
                                                    window.__dataTracker.clearViewCallbacks(e),
                                                engine.off(`subView:inject->${o}`, b),
                                                console.info(`Sub view ${o} is destroyed: ${n}`);
                                        }
                                    );
                                console.error("subView: can't get View component name");
                            } else engine.on(ae, p);
                        }, [p, b, e, v]),
                            (0, s.useEffect)(
                                () => () => {
                                    c &&
                                        ((e) => {
                                            const t = te(ne());
                                            let n;
                                            for (; null !== (n = Z.exec(e)); ) {
                                                const e = n[0].match(/href="(.*?)"/);
                                                if (e) {
                                                    const n = t + e[1].replace(Q, ''),
                                                        o = document.head.querySelector(`[href="${n}"]`);
                                                    o && document.head.removeChild(o);
                                                }
                                            }
                                        })(c);
                                },
                                [c],
                            );
                        const h = r()(re, o);
                        if (c) {
                            let t;
                            return (
                                (t = document.getElementById('root')) && t.setAttribute('id', 'bugSubView'),
                                ((e) => {
                                    let t;
                                    const n = ne(),
                                        o = te(n);
                                    for (; null !== (t = Z.exec(e)); ) {
                                        const e = t[0].match(/href="(.*?)"/);
                                        if (e && !e[1].includes(ee) && o) {
                                            const t = o + e[1].replace(Q, ''),
                                                n = document.createElement('link');
                                            (n.href = t), (n.rel = 'stylesheet'), document.head.appendChild(n);
                                        }
                                    }
                                })(c),
                                n && n(e),
                                l().createElement('div', { className: h, dangerouslySetInnerHTML: u })
                            );
                        }
                        return t ? l().createElement('div', { className: h }, l().createElement(t, null)) : null;
                    }),
                    le = 'Header_base_a7',
                    ce = 'Header_header_9f',
                    de = 'Header_label_af',
                    ue = 'Header_description_41',
                    _e = 'Header_bonusInfo_3f',
                    me = 'Header_bonusesIcon_7a',
                    ve = 'Header_xp_87',
                    we = 'Header_credits_82',
                    pe = ({ description: e, backgroundImage: t }) =>
                        l().createElement(
                            'div',
                            { className: le, style: j(t) },
                            l().createElement(
                                'div',
                                { className: ce },
                                l().createElement(
                                    'div',
                                    null,
                                    l().createElement('span', { className: de }, R.strings.platoon.squad()),
                                    l().createElement('span', { className: ue }, e),
                                ),
                                l().createElement(
                                    'div',
                                    { className: _e },
                                    l().createElement(
                                        'div',
                                        { className: me },
                                        l().createElement('div', { className: ve }),
                                        l().createElement('div', { className: we }),
                                    ),
                                    l().createElement(W, null),
                                ),
                            ),
                            l().createElement(se, { id: R.views.lobby.platoon.subViews.TiersLimit('resId') }),
                        ),
                    be = 'Separator_base_98',
                    he = 'Separator_base__horizontal_34',
                    Ee = 'Separator_base__vertical_9d',
                    fe = 'Separator_image_5b';
                let ge;
                !(function (e) {
                    (e.left = 'left'), (e.top = 'top'), (e.right = 'right'), (e.bottom = 'bottom');
                })(ge || (ge = {}));
                const ye = ({ position: e }) => {
                        const t = R.images.gui.maps.icons.platoon.common.separator.$dyn(e),
                            n = [ge.right, ge.left].includes(e),
                            o = r()(be, n ? Ee : he);
                        return l().createElement(
                            'div',
                            { className: o },
                            l().createElement('div', { className: fe, style: j(t) }),
                        );
                    },
                    Oe = 'ToggleButton_base_b9',
                    ke = 'ToggleButton_content_85',
                    Ce = 'ToggleButton_overlay_0a',
                    Pe = 'ToggleButton_base__active_68',
                    Te = 'ToggleButton_indicator_85',
                    Me = ['active', 'className', 'children', 'size'];
                function Se() {
                    return (
                        (Se =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                                }
                                return e;
                            }),
                        Se.apply(this, arguments)
                    );
                }
                (0, s.memo)((e) => {
                    let t = e.active,
                        n = e.className,
                        o = e.children,
                        a = e.size,
                        i = void 0 === a ? q.small : a,
                        s = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                o,
                                r = {},
                                a = Object.keys(e);
                            for (o = 0; o < a.length; o++) (n = a[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, Me);
                    const c = r()(Oe, n, t && Pe);
                    return l().createElement(
                        'div',
                        { className: c },
                        l().createElement(
                            Y,
                            Se({}, s, { type: 'secondary', size: i }),
                            l().createElement('span', { className: ke }, o),
                        ),
                        l().createElement('div', { className: Ce }),
                        l().createElement('div', { className: Te }),
                    );
                });
                const Re = { contentId: R.views.lobby.platoon.AlertTooltip('resId'), isEnabled: !0 },
                    Ne = (e, t, n, o = !0) =>
                        e && o
                            ? Re
                            : ((e, t, n) => ({
                                  contentId:
                                      R.views.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent(
                                          'resId',
                                      ),
                                  decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                  args: { header: e, body: t },
                                  isEnabled: n,
                              }))(t, n, o),
                    Ae = {
                        base: 'FlatButton_base_bf',
                        background: 'FlatButton_background_5f',
                        base__disabled: 'FlatButton_base__disabled_c0',
                        image: 'FlatButton_image_ce',
                        text: 'FlatButton_text_90',
                        description: 'FlatButton_description_08',
                    };
                let Le;
                !(function (e) {
                    (e[(e.findPlayers = 0)] = 'findPlayers'),
                        (e[(e.createPlatoon = 1)] = 'createPlatoon'),
                        (e[(e.createPlatoonForTwo = 2)] = 'createPlatoonForTwo'),
                        (e[(e.createPlatoonForSeven = 3)] = 'createPlatoonForSeven');
                })(Le || (Le = {}));
                const De = ({
                    caption: e,
                    onClick: t,
                    isEnabled: n,
                    description: o,
                    type: a,
                    text: i,
                    tooltipCaption: c,
                }) => {
                    const d = a === Le.createPlatoonForSeven || a === Le.createPlatoonForTwo,
                        u =
                            a === Le.findPlayers
                                ? R.images.gui.maps.icons.platoon.platoon_dropdown.flat_buttons.find_players()
                                : R.images.gui.maps.icons.platoon.platoon_dropdown.flat_buttons.create_platoon(),
                        m = (0, s.useMemo)(() => j(u), [u]),
                        v = r()(Ae.base, !n && Ae.base__disabled),
                        w = (0, s.useCallback)(() => f('highlight'), []),
                        p = (0, s.useCallback)(() => {
                            t(), f(a === Le.findPlayers ? R.sounds.gui_platoon_2_find_players() : R.sounds.play());
                        }, [t, a]),
                        b = (0, s.useCallback)(() => f(R.sounds.play()), []),
                        h = a === Le.findPlayers && !n,
                        E = (0, s.useMemo)(() => Ne(h, c, o), [h, c, o]);
                    return l().createElement(
                        _,
                        E,
                        l().createElement(
                            'div',
                            { className: v, onClick: n ? p : void 0, onMouseDown: b, onMouseEnter: w },
                            l().createElement('div', { className: Ae.background }),
                            l().createElement('div', { className: Ae.image, style: m }),
                            l().createElement(
                                'div',
                                { className: Ae.text },
                                l().createElement('span', { className: Ae.caption }, e),
                                d && l().createElement('span', { className: Ae.description }, i),
                            ),
                        ),
                    );
                };
                function Ie() {
                    return (
                        (Ie =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                                }
                                return e;
                            }),
                        Ie.apply(this, arguments)
                    );
                }
                function Fe() {
                    return (
                        (Fe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                                }
                                return e;
                            }),
                        Fe.apply(this, arguments)
                    );
                }
                const Be = 'SettingsContainer_base_5d',
                    xe = 'SettingsContainer_settingsContainer_48',
                    Ve = 'SettingsContainer_base__shown_b7',
                    He = 'SettingsContainer_settingsHighlight_22',
                    Ue = ({ isVisible: e, storeSettingsHeight: t }) => {
                        const n = (0, s.useRef)(null),
                            o = r()(Be, e && Ve);
                        return (
                            (0, s.useEffect)(
                                () =>
                                    b(() => {
                                        n.current && t(n.current.scrollHeight);
                                    }),
                                [n, t],
                            ),
                            l().createElement(
                                'div',
                                { className: o, ref: n },
                                l().createElement(ye, { position: ge.top }),
                                l().createElement('div', {
                                    className: He,
                                    style: j(R.images.gui.maps.icons.platoon.platoon_dropdown.glow_arrow()),
                                }),
                                l().createElement(se, {
                                    id: R.views.lobby.platoon.subViews.SettingsContent('resId'),
                                    mixClass: xe,
                                }),
                                l().createElement(ye, { position: ge.bottom }),
                            )
                        );
                    },
                    je = 'PlatoonDropdown_base_ea';
                window.decorator = { directionType: O.Bottom, isCloseBtnVisible: !1 };
                const ze = {
                        [P.Random]: () => {
                            const e = V('model.btnFind'),
                                t = V('model.btnCreate');
                            return l().createElement(
                                l().Fragment,
                                null,
                                l().createElement(De, Fe({ type: Le.findPlayers }, e)),
                                l().createElement(De, Fe({ type: Le.createPlatoon }, t)),
                            );
                        },
                        [P.Comp7]: () => {
                            const e = V('model.btnCreateForTwo');
                            return l().createElement(De, Ie({ type: Le.createPlatoonForTwo }, e));
                        },
                    },
                    We = () => {
                        const e = V(),
                            t = e.isSettingsVisible,
                            n = e.battleType,
                            o = e.backgroundImage,
                            r = e.onOutsideClick,
                            a = e.type,
                            i = (0, s.useRef)(t),
                            c = (0, s.useRef)(null),
                            d = (0, s.useRef)(0),
                            u = (0, s.useCallback)((e) => {
                                d.current = e;
                            }, []);
                        if (d.current && i.current !== t) {
                            i.current = t;
                            const e = h.O.view.getSize();
                            h.O.view.resize(e.width, e.height + d.current);
                        }
                        (0, s.useEffect)(() => {
                            if (c.current) return c.current.updateSize();
                        }, [t]);
                        const _ = (0, s.useCallback)(() => {
                            (h.O.view.displayStatusIs.shown() || h.O.view.displayStatusIs.showing()) &&
                                (r(), h.O.view.sendEvent.minimize(), h.O.view.setEventHandled());
                        }, [r]);
                        S(T.n.ESCAPE, _);
                        const m = ze[a];
                        return l().createElement(
                            C,
                            { ref: c, disableAutoSizeUpdate: !0, onOutsideClick: _ },
                            l().createElement(
                                'div',
                                { className: je },
                                l().createElement(pe, { description: n, backgroundImage: o }),
                                l().createElement(Ue, { isVisible: t, storeSettingsHeight: u }),
                                l().createElement(m, null),
                            ),
                        );
                    };
                engine.whenReady.then(() => {
                    U().render(l().createElement(We, null), document.getElementById('root'));
                });
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var n = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](n, n.exports, __webpack_require__), n.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, n, o) => {
            if (!t) {
                var r = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, n, o] = deferred[l], a = !0, i = 0; i < t.length; i++)
                        (!1 & o || r >= o) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[i]))
                            ? t.splice(i--, 1)
                            : ((a = !1), o < r && (r = o));
                    if (a) {
                        deferred.splice(l--, 1);
                        var s = n();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            o = o || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > o; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, n, o];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(t, { a: t }), t;
        }),
        (__webpack_require__.d = (e, t) => {
            for (var n in t)
                __webpack_require__.o(t, n) &&
                    !__webpack_require__.o(e, n) &&
                    Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
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
        (() => {
            var e = { 878: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var o,
                        r,
                        [a, i, s] = n,
                        l = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (o in i) __webpack_require__.o(i, o) && (__webpack_require__.m[o] = i[o]);
                        if (s) var c = s(__webpack_require__);
                    }
                    for (t && t(n); l < a.length; l++)
                        (r = a[l]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(c);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [720], () => __webpack_require__(966));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
