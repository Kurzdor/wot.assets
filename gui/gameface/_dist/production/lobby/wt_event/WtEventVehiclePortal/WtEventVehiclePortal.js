(() => {
    'use strict';
    var __webpack_modules__ = {
            527: (u, e, t) => {
                t.r(e),
                    t.d(e, { mouse: () => c, off: () => s, on: () => o, onResize: () => r, onScaleUpdated: () => i });
                var n = t(2472),
                    a = t(1176);
                const r = (0, n.E)('clientResized'),
                    i = (0, n.E)('self.onScaleUpdated'),
                    o = (u, e) => engine.on(u, e),
                    s = (u, e) => engine.off(u, e),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const c = (function () {
                    const u = { listeners: 0, enabled: !0, initialized: !1 };
                    function e() {
                        u.enabled && (0, a.R)(!1);
                    }
                    function t() {
                        u.enabled && (0, a.R)(!0);
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
                            : (0, a.R)(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (e, t) => (
                            (e[t] = (function (e) {
                                return (t) => {
                                    u.listeners += 1;
                                    let a = !0;
                                    const r = `mouse${e}`,
                                        i = l[e]((u) => t([u, 'outside']));
                                    function o(u) {
                                        t([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, o),
                                        n(),
                                        () => {
                                            a &&
                                                (i(),
                                                window.removeEventListener(r, o),
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
                    return Object.assign({}, r, {
                        disable() {
                            (u.enabled = !1), n();
                        },
                        enable() {
                            (u.enabled = !0), n();
                        },
                        enableOutside() {
                            u.enabled && (0, a.R)(!0);
                        },
                        disableOutside() {
                            u.enabled && (0, a.R)(!1);
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
                        graphicsQuality: () => o,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    });
                var n = t(527),
                    a = t(2493);
                function r(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function i(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
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
            2493: (u, e, t) => {
                function n(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error(`playSound('${u}'): `, e);
                    });
                }
                function a(u, e) {
                    engine.call('SetRTPCGlobal', u, e).catch((t) => {
                        console.error(`setRTPC('${u}', '${e}'): `, t);
                    });
                }
                t.d(e, { E: () => a, G: () => n });
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
                var n = t(5959),
                    a = t(514);
                const r = { view: t(7641), client: n, sound: a.ZP };
            },
            514: (u, e, t) => {
                t.d(e, { ZP: () => i });
                var n = t(5959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(a).reduce((u, e) => ((u[e] = () => (0, n.playSound)(a[e])), u), {}),
                    i = { play: Object.assign({}, r, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (u, e, t) => {
                function n(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function a(u, e, t) {
                    return `url(${n(u, e, t)})`;
                }
                t.r(e), t.d(e, { getBgUrl: () => a, getTextureUrl: () => n });
            },
            6112: (u, e, t) => {
                t.d(e, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (u, e, t) => {
                t.d(e, { U: () => a });
                var n = t(2472);
                const a = {
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
                        addModelObserver: () => c,
                        addPreloadTexture: () => o,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => w,
                        events: () => r.U,
                        extraSize: () => f,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => _,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => b,
                        getScale: () => m,
                        getSize: () => A,
                        getViewGlobalPosition: () => F,
                        isEventHandled: () => p,
                        isFocused: () => h,
                        pxToRem: () => D,
                        remToPx: () => C,
                        resize: () => d,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => B,
                        setEventHandled: () => g,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => y,
                    });
                var n = t(3722),
                    a = t(6112),
                    r = t(6538),
                    i = t(8566);
                function o(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function s(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function l(u, e, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, n);
                }
                function c(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function E(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function A(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function d(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function F(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: C(e.x), y: C(e.y) };
                }
                function _() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function m() {
                    return viewEnv.getScale();
                }
                function D(u) {
                    return viewEnv.pxToRem(u);
                }
                function C(u) {
                    return viewEnv.remToPx(u);
                }
                function B(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function h() {
                    return viewEnv.isFocused();
                }
                function g() {
                    return viewEnv.setEventHandled();
                }
                function p() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function b() {
                    return viewEnv.getShowingStatus();
                }
                const w = Object.keys(a.W).reduce(
                        (u, e) => ((u[e] = () => viewEnv.getShowingStatus() === a.W[e]), u),
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
                    y = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : r.U.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (u, e, t) => {
                t.d(e, { qP: () => l });
                const n = ['args'];
                const a = 2,
                    r = 16,
                    i = 32,
                    o = 64,
                    s = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const r = e.args,
                                i = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        n,
                                        a = {},
                                        r = Object.keys(u);
                                    for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                    return a;
                                })(e, n);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, i, {
                                          arguments:
                                              ((a = r),
                                              Object.entries(a).map(([u, e]) => {
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
                        var a;
                    },
                    l = {
                        close(u) {
                            s('popover' === u ? a : i);
                        },
                        minimize() {
                            s(o);
                        },
                        move(u) {
                            s(r, { isMouseEvent: !0, on: u });
                        },
                    };
            },
            5521: (u, e, t) => {
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
                            (u[(u.KEY_9 = 57)] = 'KEY_9');
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
            1358: (u, e, t) => {
                t.d(e, { Z: () => r });
                var n = t(3138);
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
                        const r = n.O.view.addModelObserver(u, t, a);
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
                            const n = this._callbacks[t];
                            void 0 !== n && n(u, e);
                        });
                    }
                }
                a.__instance = void 0;
                const r = a;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7491);
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
            7491: (u, e, t) => {
                t.d(e, { Sw: () => r.Z, B3: () => o.B3, Z5: () => i.Z5, B0: () => o.B0, ry: () => s.ry });
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
                var r = t(1358);
                var i = t(8613),
                    o = t(4251),
                    s = t(8072),
                    l = t(7572);
                const c = a.instance,
                    E = {
                        DataTracker: r.Z,
                        ViewModel: l.Z,
                        ViewEventType: o.B0,
                        NumberFormatType: o.B3,
                        RealFormatType: o.Gr,
                        TimeFormatType: o.lf,
                        DateFormatType: o.kH,
                        makeGlobalBoundingBox: s.Kv,
                        sendMoveEvent: s.wv,
                        sendCloseEvent: s.Sy,
                        sendClosePopOverEvent: s.SW,
                        sendShowContextMenuEvent: s.uk,
                        sendShowPopOverEvent: s.P3,
                        addEscapeListener: s.VM,
                        closeOnEsc: s.SU,
                        handleViewEvent: s.c9,
                        onBindingsReady: s.ry,
                        onLayoutReady: s.Eu,
                        isTooltipShown: s.KE,
                        isContextMenuShown: s.uM,
                        isPopOverShown: s.wU,
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
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = E;
            },
            8613: (u, e, t) => {
                t.d(e, { Ew: () => r, Z5: () => n, cy: () => a });
                const n = {
                        getNumberFormat: (u, e) => systemLocale.getNumberFormat(u, e),
                        getRealFormat: (u, e) => systemLocale.getRealFormat(u, e),
                        getTimeFormat: (u, e) => systemLocale.getTimeFormat(u, e),
                        getDateFormat: (u, e) => systemLocale.getDateFormat(u, e),
                        toUpperCase: (u) => systemLocale.toUpperCase(u),
                        toLowerCase: (u) => systemLocale.toUpperCase(u),
                    },
                    a = {
                        getNumberFormat: (u) => userLocale.getNumberFormat(u),
                        getTimeFormat: (u, e, t) => userLocale.getTimeFormat(u, e, void 0 === t || t),
                        getTimeString: (u, e, t) => userLocale.getTimeString(u, e, void 0 === t || t),
                    },
                    r = {
                        getRegionalDateTime: (u, e, t = !0) => regionalDateTime.getRegionalDateTime(u, e, t),
                        getFormattedDateTime: (u, e, t = !0) => regionalDateTime.getFormattedDateTime(u, e, t),
                    };
            },
            4251: (u, e, t) => {
                let n;
                t.d(e, { B0: () => n, B3: () => a, Gr: () => r, kH: () => o, lf: () => i }),
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
                    r = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    i = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    o = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
            },
            8072: (u, e, t) => {
                t.d(e, {
                    Eu: () => c,
                    KE: () => D,
                    Kv: () => s,
                    P3: () => m,
                    SU: () => g,
                    SW: () => F,
                    Sy: () => d,
                    VM: () => p,
                    c9: () => E,
                    ry: () => l,
                    uM: () => C,
                    uk: () => _,
                    wU: () => B,
                    wv: () => A,
                });
                var n = t(5521),
                    a = t(3138),
                    r = t(4251);
                const i = ['args'];
                function o(u, e, t, n, a, r, i) {
                    try {
                        var o = u[r](i),
                            s = o.value;
                    } catch (u) {
                        return void t(u);
                    }
                    o.done ? e(s) : Promise.resolve(s).then(n, a);
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
                                        var r = u.apply(e, t);
                                        function i(u) {
                                            o(r, n, a, i, s, 'next', u);
                                        }
                                        function s(u) {
                                            o(r, n, a, i, s, 'throw', u);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    c = () =>
                        new Promise((u) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    u();
                                });
                            });
                        }),
                    E = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const a = e.args,
                                r = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        n,
                                        a = {},
                                        r = Object.keys(u);
                                    for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                    return a;
                                })(e, i);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, r, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, r));
                        } else viewEnv.handleViewEvent({ __Type: t, type: u });
                        var n;
                    },
                    A = (u) => E(r.B0.MOVE, { isMouseEvent: !0, on: u }),
                    d = () => E(r.B0.CLOSE),
                    F = () => E(r.B0.POP_OVER, { on: !1 }),
                    _ = (u, e, t = 0) => {
                        E(r.B0.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                    },
                    m = (u, e, t, n, i = R.invalid('resId'), o) => {
                        const l = a.O.view.getViewGlobalPosition(),
                            c = t.getBoundingClientRect(),
                            A = c.x,
                            d = c.y,
                            F = c.width,
                            _ = c.height,
                            m = {
                                x: a.O.view.pxToRem(A) + l.x,
                                y: a.O.view.pxToRem(d) + l.y,
                                width: a.O.view.pxToRem(F),
                                height: a.O.view.pxToRem(_),
                            };
                        E(r.B0.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: u,
                            decoratorID: n || R.invalid('resId'),
                            targetID: i,
                            direction: e,
                            bbox: s(m),
                            on: !0,
                            args: o,
                        });
                    },
                    D = () => viewEnv.isWindowShownByViewEvent(r.B0.TOOLTIP),
                    C = () => viewEnv.isWindowShownByViewEvent(r.B0.CONTEXT_MENU),
                    B = () => viewEnv.isWindowShownByViewEvent(r.B0.POP_OVER),
                    h = (u, e) => {
                        u.keyCode === n.n.ESCAPE && e();
                    },
                    g = (u) => {
                        h(u, d);
                    },
                    p = (u) => {
                        const e = (e) => h(e, u);
                        return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
                    };
            },
            7935: (u, e, t) => {
                var n = t(6179),
                    a = t.n(n),
                    r = t(493),
                    i = t.n(r);
                const o = (u, e, t) =>
                    e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                        ? (e.extraLargeHeight && t.extraLarge) ||
                          (e.largeHeight && t.large) ||
                          (e.mediumHeight && t.medium) ||
                          (e.smallHeight && t.small) ||
                          (e.extraSmallHeight && t.extraSmall)
                            ? u
                            : null
                        : u;
                var s = t(3138);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function E(u, e, t) {
                    const n = (function (u, e) {
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
                        a = (function (u, e) {
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
                        r = Math.min(n, a);
                    return {
                        extraLarge: r === t.extraLarge.weight,
                        large: r === t.large.weight,
                        medium: r === t.medium.weight,
                        small: r === t.small.weight,
                        extraSmall: r === t.extraSmall.weight,
                        extraLargeWidth: n === t.extraLarge.weight,
                        largeWidth: n === t.large.weight,
                        mediumWidth: n === t.medium.weight,
                        smallWidth: n === t.small.weight,
                        extraSmallWidth: n === t.extraSmall.weight,
                        extraLargeHeight: a === t.extraLarge.weight,
                        largeHeight: a === t.large.weight,
                        mediumHeight: a === t.medium.weight,
                        smallHeight: a === t.small.weight,
                        extraSmallHeight: a === t.extraSmall.weight,
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
                })(c || (c = {}));
                const A = s.O.client.getSize('rem'),
                    d = A.width,
                    F = A.height,
                    _ = Object.assign({ width: d, height: F }, E(d, F, l)),
                    m = (0, n.createContext)(_),
                    D = ['children'];
                const C = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(u);
                            for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                            return a;
                        })(u, D);
                    const a = (0, n.useContext)(m),
                        r = a.extraLarge,
                        i = a.large,
                        s = a.medium,
                        l = a.small,
                        c = a.extraSmall,
                        E = a.extraLargeWidth,
                        A = a.largeWidth,
                        d = a.mediumWidth,
                        F = a.smallWidth,
                        _ = a.extraSmallWidth,
                        C = a.extraLargeHeight,
                        B = a.largeHeight,
                        h = a.mediumHeight,
                        g = a.smallHeight,
                        p = a.extraSmallHeight,
                        v = { extraLarge: C, large: B, medium: h, small: g, extraSmall: p };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && r) return e;
                        if (t.large && i) return e;
                        if (t.medium && s) return e;
                        if (t.small && l) return e;
                        if (t.extraSmall && c) return e;
                    } else {
                        if (t.extraLargeWidth && E) return o(e, t, v);
                        if (t.largeWidth && A) return o(e, t, v);
                        if (t.mediumWidth && d) return o(e, t, v);
                        if (t.smallWidth && F) return o(e, t, v);
                        if (t.extraSmallWidth && _) return o(e, t, v);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && C) return e;
                            if (t.largeHeight && B) return e;
                            if (t.mediumHeight && h) return e;
                            if (t.smallHeight && g) return e;
                            if (t.extraSmallHeight && p) return e;
                        }
                    }
                    return null;
                };
                C.defaultProps = {
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
                (0, n.memo)(C);
                const B = (u) => {
                        const e = (0, n.useRef)(!1);
                        e.current || (u(), (e.current = !0));
                    },
                    h = ({ children: u }) => {
                        const e = (0, n.useContext)(m),
                            t = (0, n.useState)(e),
                            r = t[0],
                            i = t[1],
                            o = (0, n.useCallback)((u, e) => {
                                const t = s.O.view.pxToRem(u),
                                    n = s.O.view.pxToRem(e);
                                i(Object.assign({ width: t, height: n }, E(t, n, l)));
                            }, []),
                            c = (0, n.useCallback)(() => {
                                const u = s.O.client.getSize('px');
                                o(u.width, u.height);
                            }, [o]);
                        B(() => {
                            s.O.client.events.on('clientResized', o), s.O.client.events.on('self.onScaleUpdated', c);
                        }),
                            (0, n.useEffect)(
                                () => () => {
                                    s.O.client.events.off('clientResized', o),
                                        s.O.client.events.off('self.onScaleUpdated', c);
                                },
                                [o, c],
                            );
                        const A = (0, n.useMemo)(() => Object.assign({}, r), [r]);
                        return a().createElement(m.Provider, { value: A }, u);
                    };
                var g = t(1281);
                let p;
                function v(u, e) {
                    return u.replace(/\{\w+\}/g, (u) => String(e[u.slice(1, -1)]));
                }
                !(function (u) {
                    (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                })(p || (p = {}));
                const b = (u) => u.replace(/&nbsp;/g, ' '),
                    w = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    f = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    y = (u, e, t = p.left) => u.split(e).reduce(t === p.left ? w : f, []),
                    x = (() => {
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
                    k = ['zh_cn', 'zh_sg', 'zh_tw'],
                    T = (u, e = p.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (k.includes(t)) return x(u);
                        if ('ja' === t) {
                            return (0, g.D4)()
                                .parse(u)
                                .map((u) => b(u));
                        }
                        return ((u, e = p.left) => {
                            let t = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                a = b(u);
                            return y(a, /( )/, e).forEach((u) => (t = t.concat(y(u, n, p.left)))), t;
                        })(u, e);
                    };
                var S = t(7491),
                    O = t(8613);
                Date.now(), O.Ew.getRegionalDateTime, O.Ew.getFormattedDateTime;
                const L = (u = 1) => {
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
                    N = (u, e) => u.split('.').reduce((u, e) => u && u[e], e),
                    M = (u) => u && 'ArrayItem' === u.__proto__.constructor.name,
                    P = (u, e) => (u.length > 0 ? `${u}.${e}` : e),
                    I = (u) =>
                        ((u, e) =>
                            u.split('.').reduce((u, t) => {
                                const n = N(`${u}.${t}`, window);
                                return M(n) ? e(u, t, n) : `${u}.${t}`;
                            }))(u, (u, e) => `${u}.${e}.value`),
                    H = (u) => {
                        const e = ((u) => {
                                const e = L(),
                                    t = e.caller,
                                    n = e.resId,
                                    a = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: a, modelPath: P(a, u || ''), resId: n };
                            })(),
                            t = e.modelPrefix,
                            n = u.split('.');
                        if (n.length > 0) {
                            const u = [n[0]];
                            return (
                                n.reduce((e, n) => {
                                    const a = N(P(t, `${e}.${n}`), window);
                                    return M(a) ? (u.push(a.id), `${e}.${n}.value`) : (u.push(n), `${e}.${n}`);
                                }),
                                u.reduce((u, e) => u + '.' + e)
                            );
                        }
                        return '';
                    },
                    W = S.Sw.instance;
                let U;
                !(function (u) {
                    (u.None = 'None'), (u.Shallow = 'Shallow'), (u.Deep = 'Deep');
                })(U || (U = {}));
                const j = (u = 'model', e = U.Deep) => {
                    const t = (0, n.useState)(0),
                        a = (t[0], t[1]),
                        r = (0, n.useMemo)(() => L(), []),
                        i = r.caller,
                        o = r.resId,
                        s = (0, n.useMemo)(
                            () => (window.__feature && window.__feature !== i ? `subViews.${i}.${u}` : u),
                            [i, u],
                        ),
                        l = (0, n.useState)(() =>
                            ((u) => {
                                const e = N(u, window);
                                for (const u in e) 'function' == typeof e[u] && (e[u] = e[u].bind(e));
                                return M(e) ? e.value : e;
                            })(I(s)),
                        ),
                        c = l[0],
                        E = l[1],
                        A = (0, n.useRef)(-1);
                    return (
                        B(() => {
                            if (
                                ('boolean' == typeof e &&
                                    ((e = e ? U.Deep : U.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                e !== U.None)
                            ) {
                                const t = (u) => {
                                        ((u) => u && 'CoherentArrayProxy' === u.__proto__.constructor.name)(u) &&
                                        e === U.Deep
                                            ? (u === c && a((u) => u + 1), E(u))
                                            : E(Object.assign([], u));
                                    },
                                    n = H(u);
                                A.current = W.addCallback(n, t, o, e === U.Deep);
                            }
                        }),
                        (0, n.useEffect)(() => {
                            if (e !== U.None)
                                return () => {
                                    W.removeCallback(A.current, o);
                                };
                        }, [o, e]),
                        c
                    );
                };
                S.Sw.instance;
                let $, V;
                !(function (u) {
                    (u.HUNTER = 'hunter'), (u.BOSS = 'boss'), (u.TANK = 'tank');
                })($ || ($ = {})),
                    (function (u) {
                        (u.HUNTER = 'hunter'), (u.BOSS = 'boss');
                    })(V || (V = {}));
                var G = t(6483),
                    K = t.n(G),
                    z = t(5521);
                const Y = (u) => {
                    console.error(u.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function q(u = z.n.NONE, e = Y, t = !1, a = !1) {
                    (0, n.useEffect)(() => {
                        if (u !== z.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === u) {
                                if (!a && s.O.view.isEventHandled()) return;
                                s.O.view.setEventHandled(), e(n), t && n.stopPropagation();
                            }
                        }
                    }, [e, u, t, a]);
                }
                let Z;
                !(function (u) {
                    (u.PRIMARY = 'G171_E77'),
                        (u.SECONDARY = 'G166_LKpz_70_K'),
                        (u.TERTIARY = 'Cz14_Skoda_T_56_WT24_3Dst');
                })(Z || (Z = {}));
                const X = () => {
                    const u = (() => {
                            const u = (0, n.useContext)(m),
                                e = u.small,
                                t = u.medium,
                                a = u.large,
                                r = u.extraLarge,
                                i = r || a,
                                o = i || t;
                            return { isMediaSmall: o || e, isMediaMedium: o, isMediaLarge: i, isMediaExtraLarge: r };
                        })(),
                        e = u.isMediaSmall,
                        t = u.isMediaMedium,
                        a = u.isMediaLarge,
                        r = u.isMediaExtraLarge;
                    return K()(e && 'mediaSmall', t && 'mediaMedium', a && 'mediaLarge', r && 'mediaExtraLarge');
                };
                function Q(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error('[lib/sounds.js] playSound(', u, '): ', e);
                    });
                }
                const J = {
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
                    uu = [
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
                function eu() {
                    return (
                        (eu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        eu.apply(this, arguments)
                    );
                }
                class tu extends a().PureComponent {
                    constructor(...u) {
                        super(...u),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (u) => (e) => {
                                u && u(e),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && Q(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (u) => (e) => {
                                u && u(e), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (u) => (e) => {
                                u && u(e),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && Q(this.props.soundClick);
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
                            n = u.goto,
                            r = u.side,
                            i = u.type,
                            o = u.classNames,
                            s = u.onMouseEnter,
                            l = u.onMouseLeave,
                            c = u.onMouseDown,
                            E = u.onMouseUp,
                            A =
                                (u.soundClick,
                                u.soundHover,
                                (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        n,
                                        a = {},
                                        r = Object.keys(u);
                                    for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                    return a;
                                })(u, uu)),
                            d = K()(J.base, J[`base__${i}`], J[`base__${r}`], null == o ? void 0 : o.base),
                            F = K()(J.icon, J[`icon__${i}`], J[`icon__${r}`], null == o ? void 0 : o.icon),
                            _ = K()(J.glow, null == o ? void 0 : o.glow),
                            m = K()(J.caption, J[`caption__${i}`], null == o ? void 0 : o.caption),
                            D = K()(J.goto, null == o ? void 0 : o.goto);
                        return a().createElement(
                            'div',
                            eu(
                                {
                                    className: d,
                                    onMouseEnter: this._onMouseEnter(s),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(E),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                A,
                            ),
                            'info' !== i && a().createElement('div', { className: J.shine }),
                            a().createElement('div', { className: F }, a().createElement('div', { className: _ })),
                            a().createElement('div', { className: m }, e),
                            n && a().createElement('div', { className: D }, n),
                        );
                    }
                }
                tu.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const nu = 'CloseButton_base_26',
                    au = ({ onClose: u }) =>
                        a().createElement(
                            'div',
                            { className: nu },
                            a().createElement(tu, {
                                caption: R.strings.menu.viewHeader.closeBtn.label(),
                                type: 'close',
                                side: 'right',
                                onClick: u,
                            }),
                        ),
                    ru = 'FormatText_base_d0',
                    iu = ({ binding: u, text: e = '', classMix: t, alignment: r = p.left, formatWithBrackets: i }) => {
                        if (null === e) return console.error("FormatText was supplied with 'null'"), null;
                        const o = i && u ? v(e, u) : e;
                        return a().createElement(
                            n.Fragment,
                            null,
                            o.split('\n').map((e, i) =>
                                a().createElement(
                                    'div',
                                    { className: K()(ru, t), key: `${e}-${i}` },
                                    ((u, e, t) =>
                                        u.split(/%\((.*?)\)(?:[sd])?/g).map((u) => (t && u in t ? t[u] : T(u, e))))(
                                        e,
                                        r,
                                        u,
                                    ).map((u, e) => a().createElement(n.Fragment, { key: `${e}-${u}` }, u)),
                                ),
                            ),
                        );
                    },
                    ou = [
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
                function su(u) {
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
                const lu = (u, e, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: S.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    cu = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            a = u.args,
                            r = u.onMouseEnter,
                            i = u.onMouseLeave,
                            o = u.onMouseDown,
                            s = u.onClick,
                            l = u.ignoreShowDelay,
                            c = void 0 !== l && l,
                            E = u.ignoreMouseClick,
                            A = void 0 !== E && E,
                            d = u.decoratorId,
                            F = void 0 === d ? 0 : d,
                            _ = u.isEnabled,
                            m = void 0 === _ || _,
                            D = u.targetId,
                            C = void 0 === D ? 0 : D,
                            B = u.onShow,
                            h = u.onHide,
                            g = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(u);
                                for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                return a;
                            })(u, ou);
                        const p = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, n.useMemo)(() => C || L().resId, [C]),
                            b = (0, n.useCallback)(() => {
                                (p.current.isVisible && p.current.timeoutId) ||
                                    (lu(t, F, { isMouseEvent: !0, on: !0, arguments: su(a) }, v),
                                    B && B(),
                                    (p.current.isVisible = !0));
                            }, [t, F, a, v, B]),
                            w = (0, n.useCallback)(() => {
                                if (p.current.isVisible || p.current.timeoutId) {
                                    const u = p.current.timeoutId;
                                    u > 0 && (clearTimeout(u), (p.current.timeoutId = 0)),
                                        lu(t, F, { on: !1 }, v),
                                        p.current.isVisible && h && h(),
                                        (p.current.isVisible = !1);
                                }
                            }, [t, F, v, h]),
                            f = (0, n.useCallback)((u) => {
                                p.current.isVisible &&
                                    ((p.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (p.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(p.current.prevTarget) && w();
                                    }, 200)));
                            }, []);
                        (0, n.useEffect)(() => {
                            const u = p.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', f, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', f, { capture: !0 }),
                                        u && window.clearTimeout(u);
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === m && w();
                            }, [m, w]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', w),
                                    () => {
                                        window.removeEventListener('mouseleave', w), w();
                                    }
                                ),
                                [w],
                            );
                        return m
                            ? (0, n.cloneElement)(
                                  e,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((y = e.props.onMouseEnter),
                                              (u) => {
                                                  (u.clientX === window.innerWidth &&
                                                      u.clientY === window.innerHeight) ||
                                                      ((p.current.timeoutId = window.setTimeout(b, c ? 100 : 400)),
                                                      r && r(u),
                                                      y && y(u));
                                              }),
                                          onMouseLeave: ((u) => (e) => {
                                              w(), null == i || i(e), null == u || u(e);
                                          })(e.props.onMouseLeave),
                                          onClick: ((u) => (e) => {
                                              !1 === A && w(), null == s || s(e), null == u || u(e);
                                          })(e.props.onClick),
                                          onMouseDown: ((u) => (e) => {
                                              !1 === A && w(), null == o || o(e), null == u || u(e);
                                          })(e.props.onMouseDown),
                                      },
                                      g,
                                  ),
                              )
                            : e;
                        var y;
                    },
                    Eu = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Au() {
                    return (
                        (Au =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        Au.apply(this, arguments)
                    );
                }
                const du = R.views.common.tooltip_window.simple_tooltip_content,
                    Fu = (u) => {
                        let e = u.children,
                            t = u.body,
                            r = u.header,
                            i = u.note,
                            o = u.alert,
                            s = u.args,
                            l = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(u);
                                for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                return a;
                            })(u, Eu);
                        const c = (0, n.useMemo)(() => {
                            const u = Object.assign({}, s, { body: t, header: r, note: i, alert: o });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [o, t, r, i, s]);
                        return a().createElement(
                            cu,
                            Au(
                                {
                                    contentId:
                                        ((E = null == s ? void 0 : s.hasHtmlContent),
                                        E ? du.SimpleTooltipHtmlContent('resId') : du.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            e,
                        );
                        var E;
                    },
                    _u = ['children'];
                function mu() {
                    return (
                        (mu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        mu.apply(this, arguments)
                    );
                }
                const Du = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(u);
                                for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                return a;
                            })(u, _u);
                        return a().createElement(
                            cu,
                            mu(
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
                    Cu = ['tooltipType'],
                    Bu = ['children', 'wrap'];
                function hu(u, e) {
                    if (null == u) return {};
                    var t,
                        n,
                        a = {},
                        r = Object.keys(u);
                    for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                    return a;
                }
                let gu;
                !(function (u) {
                    (u.Simple = 'simple'), (u.Backport = 'backport'), (u.Base = 'base');
                })(gu || (gu = {}));
                const pu = (u) => {
                        u.tooltipType;
                        return hu(u, Cu);
                    },
                    vu = (u) => {
                        let e = u.children,
                            t = u.wrap,
                            n = hu(u, Bu);
                        const r = t ? a().createElement('div', null, e) : e;
                        return n.tooltipType === gu.Simple
                            ? a().createElement(Fu, pu(n), r)
                            : ((u) => u.tooltipType === gu.Backport)(n)
                              ? a().createElement(Du, pu(n), r)
                              : ((u) => u.tooltipType === gu.Base)(n)
                                ? a().createElement(cu, pu(n), r)
                                : e;
                    },
                    bu = 'BuyButton_base_1e',
                    wu = 'BuyButton_image_44',
                    fu = 'BuyButton_imageClickArea_6b',
                    yu = 'BuyButton_text_8e',
                    xu = 'BuyButton_CNTextWrapper_16',
                    ku = 'BuyButton_CNText_a9',
                    Tu = R.strings.event.WtEventPortals,
                    Su = ({ onBuyButtonClick: u, availableLootBoxesPurchase: e }) => {
                        const t = (0, n.useCallback)(() => {
                                u(), Q('play');
                            }, [u]),
                            r = (0, n.useCallback)(() => {
                                Q('highlight');
                            }, []),
                            i = (0, n.useMemo)(() => ({ number: e }), [e]),
                            o = e >= 0,
                            s = (0, n.useMemo)(
                                () =>
                                    o
                                        ? {
                                              tooltipType: gu.Base,
                                              contentId:
                                                  R.views.lobby.wt_event.tooltips.WtEventBuyLootBoxesTooltipView(
                                                      'resId',
                                                  ),
                                          }
                                        : { tooltipType: gu.Simple, body: Tu.buyButtonTooltip() },
                                [o],
                            );
                        return a().createElement(
                            vu,
                            s,
                            a().createElement(
                                'div',
                                { className: bu, onMouseEnter: r, onClick: t },
                                a().createElement(
                                    'div',
                                    { className: wu },
                                    a().createElement('div', { className: fu }),
                                ),
                                a().createElement('div', { className: yu }, Tu.buyButton()),
                                o &&
                                    a().createElement(
                                        'div',
                                        { className: xu },
                                        a().createElement(iu, { text: Tu.buyButtonCNText(), binding: i, classMix: ku }),
                                    ),
                            ),
                        );
                    },
                    Ru = 'BackButton_base_24',
                    Ou = ({ onClick: u, goto: e }) =>
                        a().createElement(
                            'div',
                            { className: Ru },
                            a().createElement(tu, {
                                caption: R.strings.menu.viewHeader.backBtn.label(),
                                type: 'back',
                                side: 'left',
                                onClick: u,
                                goto: e,
                            }),
                        ),
                    Lu = 'Gradient_base_42',
                    Nu = 'Gradient_base__hasAnimation_11',
                    Mu = ({ hasAnimation: u = !1 }) => {
                        const e = K()(Lu, u && Nu);
                        return a().createElement('div', { className: e });
                    },
                    Pu = 100,
                    Iu = 'DelayedAnimationWrapper_base_e3',
                    Hu = ({ animationDelayStepsCount: u = 1, children: e }) =>
                        a().createElement('div', { className: Iu, style: { animationDelay: u * Pu + 'ms' } }, e);
                let Wu, Uu, ju, $u;
                !(function (u) {
                    (u[(u.LEFT = 0)] = 'LEFT'),
                        (u[(u.WHEEL = 1)] = 'WHEEL'),
                        (u[(u.RIGHT = 2)] = 'RIGHT'),
                        (u[(u.FOURTH = 3)] = 'FOURTH'),
                        (u[(u.FIFTH = 4)] = 'FIFTH');
                })(Wu || (Wu = {})),
                    (function (u) {
                        (u.small = 'small'), (u.medium = 'medium'), (u.large = 'large'), (u.extraLarge = 'extraLarge');
                    })(Uu || (Uu = {})),
                    (function (u) {
                        (u.primary = 'primary'), (u.main = 'main');
                    })(ju || (ju = {})),
                    (function (u) {
                        (u.Center = 'center'), (u.Bottom = 'bottom');
                    })($u || ($u = {}));
                const Vu = {
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
                    Gu = [
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
                function Ku() {
                    return (
                        (Ku =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        Ku.apply(this, arguments)
                    );
                }
                const zu = (u) => {
                        let e = u.id,
                            t = u.isChecked,
                            r = void 0 !== t && t,
                            i = u.isDisabled,
                            o = void 0 !== i && i,
                            s = u.isAlert,
                            l = void 0 !== s && s,
                            c = u.size,
                            E = void 0 === c ? Uu.medium : c,
                            A = u.type,
                            d = void 0 === A ? ju.primary : A,
                            F = u.soundHover,
                            _ = void 0 === F ? 'highlight' : F,
                            m = u.soundClick,
                            D = void 0 === m ? 'play' : m,
                            C = u.onMouseEnter,
                            B = u.onMouseLeave,
                            h = u.onMouseUp,
                            g = u.onMouseDown,
                            p = u.onClick,
                            v = u.onChange,
                            b = u.onFocus,
                            w = u.onBlur,
                            f = u.text,
                            y = u.contentStyles,
                            x = u.children,
                            k = u.alignment,
                            T = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(u);
                                for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                return a;
                            })(u, Gu);
                        const S = (0, n.useState)(!1),
                            R = S[0],
                            O = S[1],
                            L = (0, n.useState)(!1),
                            N = (L[0], L[1]),
                            M = (0, n.useCallback)(
                                (u) => {
                                    o || (v && v(), p && p(u));
                                },
                                [o, v, p],
                            ),
                            P = (0, n.useCallback)(
                                (u) => {
                                    const e = u.button === Wu.LEFT;
                                    o || (e && O(!0), e && g && g(u), D && Q(D));
                                },
                                [o, g, D],
                            ),
                            I = (0, n.useCallback)(
                                (u) => {
                                    o || (O(!1), h && h(u));
                                },
                                [o, h],
                            ),
                            H = (0, n.useCallback)(
                                (u) => {
                                    o || (C && C(u), _ && Q(_));
                                },
                                [o, C, _],
                            ),
                            W = (0, n.useCallback)(
                                (u) => {
                                    o || (O(!1), B && B(u));
                                },
                                [o, B],
                            ),
                            U = (0, n.useCallback)(
                                (u) => {
                                    o || (N(!0), b && b(u));
                                },
                                [o, b],
                            ),
                            j = (0, n.useCallback)(
                                (u) => {
                                    o || (N(!1), w && w(u));
                                },
                                [o, w],
                            ),
                            $ = a().createElement(
                                'div',
                                { className: Vu.label },
                                a().createElement(
                                    'div',
                                    { className: K()(Vu.labelContent, 's-labelContent'), style: y },
                                    f || x,
                                ),
                            );
                        return a().createElement(
                            'div',
                            Ku(
                                {
                                    id: e,
                                    className: K()(Vu.base, Vu[`base__${E}`], Vu[`base__${d}`], {
                                        [Vu.base__checked]: r,
                                        [Vu.base__disabled]: o,
                                        [Vu.base__mouseDown]: R,
                                        [Vu.base__alert]: l,
                                        [Vu.base__center]: k === $u.Center,
                                        [Vu.base__bottom]: k === $u.Bottom,
                                    }),
                                    onClick: M,
                                    onMouseEnter: H,
                                    onMouseLeave: W,
                                    onMouseDown: P,
                                    onMouseUp: I,
                                    onFocus: U,
                                    onBlur: j,
                                },
                                T,
                            ),
                            a().createElement(
                                'div',
                                { className: Vu.input },
                                a().createElement('div', { className: Vu.alertOverlay }),
                                a().createElement('div', { className: Vu.inputHoverOverlay }),
                                a().createElement('div', { className: Vu.highlight }),
                            ),
                            a().createElement('div', { className: Vu.checkmark }),
                            ((f || x) && $) || null,
                        );
                    },
                    Yu = 'AnimationCheckbox_animationCheckbox_05',
                    qu = ({ isChecked: u, onClick: e }) =>
                        a().createElement(
                            'div',
                            { className: Yu },
                            a().createElement(zu, {
                                text: R.strings.event.WtEventPortals.inside.showAnimation(),
                                size: Uu.large,
                                onClick: e,
                                isChecked: u,
                            }),
                        ),
                    Zu = 'AwardWrapper_base_51',
                    Xu = 'AwardWrapper_title_b2',
                    Qu = 'AwardWrapper_content_82',
                    Ju = 'AwardWrapper_currencyWrapper_35',
                    ue = 'AwardWrapper_currencyBgWrapper_eb',
                    ee = 'AwardWrapper_backgroundSeperator_6c',
                    te = (u, e = 'integral') => {
                        let t;
                        if ('gold' === e) t = S.B3.GOLD;
                        else t = S.B3.INTEGRAL;
                        return void 0 === u ? '' : S.Z5.getNumberFormat(u, t);
                    },
                    ne = ({ format: u, value: e }) => {
                        const t = te(e, u);
                        return t ? a().createElement('span', null, t) : null;
                    };
                let ae;
                !(function (u) {
                    (u.goldStats = 'goldInfo'),
                        (u.creditsStats = 'creditsInfo'),
                        (u.crystalInfo = 'crystalInfo'),
                        (u.freeXpInfo = 'freeXPInfo');
                })(ae || (ae = {}));
                const re = 'CurrencyBalance_base_e7',
                    ie = 'CurrencyBalance_currency_b6',
                    oe = 'CurrencyBalance_currency__credit_7f',
                    se = 'CurrencyBalance_currency__gold_27',
                    le = 'CurrencyBalance_currency__crystal_7d',
                    ce = 'CurrencyBalance_currency__freexp_06',
                    Ee = 'CurrencyBalance_errorText_b7',
                    Ae = { tooltipId: ae.goldStats },
                    de = { tooltipId: ae.creditsStats },
                    Fe = { tooltipId: ae.crystalInfo },
                    _e = { tooltipId: ae.freeXpInfo },
                    me = '- - -',
                    De = ({ credits: u, golds: e, crystals: t, freexp: n, isWalletAvailable: r }) =>
                        a().createElement(
                            'div',
                            { className: re },
                            a().createElement(
                                Du,
                                { args: Fe },
                                a().createElement(
                                    'span',
                                    { className: K()(ie, le) },
                                    r
                                        ? a().createElement(ne, { value: t, format: 'integral' })
                                        : a().createElement('div', { className: Ee }, me),
                                ),
                            ),
                            a().createElement(
                                Du,
                                { args: Ae },
                                a().createElement(
                                    'span',
                                    { className: K()(ie, se) },
                                    r
                                        ? a().createElement(ne, { value: e, format: 'gold' })
                                        : a().createElement('div', { className: Ee }, me),
                                ),
                            ),
                            a().createElement(
                                Du,
                                { args: de },
                                a().createElement(
                                    'span',
                                    { className: K()(ie, oe) },
                                    r
                                        ? a().createElement(ne, { value: u, format: 'integral' })
                                        : a().createElement('div', { className: Ee }, me),
                                ),
                            ),
                            a().createElement(
                                Du,
                                { args: _e },
                                a().createElement(
                                    'span',
                                    { className: K()(ie, ce) },
                                    r
                                        ? a().createElement(ne, { value: n, format: 'integral' })
                                        : a().createElement('div', { className: Ee }, me),
                                ),
                            ),
                        );
                let Ce, Be, he;
                !(function (u) {
                    (u[(u.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = l.small.width)] = 'Small'),
                        (u[(u.Medium = l.medium.width)] = 'Medium'),
                        (u[(u.Large = l.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                })(Ce || (Ce = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = l.small.width)] = 'Small'),
                            (u[(u.Medium = l.medium.width)] = 'Medium'),
                            (u[(u.Large = l.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                    })(Be || (Be = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = l.small.height)] = 'Small'),
                            (u[(u.Medium = l.medium.height)] = 'Medium'),
                            (u[(u.Large = l.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge');
                    })(he || (he = {}));
                const ge = () => {
                    const u = (0, n.useContext)(m),
                        e = u.width,
                        t = u.height,
                        a = ((u) => {
                            switch (!0) {
                                case u.extraLarge:
                                    return Ce.ExtraLarge;
                                case u.large:
                                    return Ce.Large;
                                case u.medium:
                                    return Ce.Medium;
                                case u.small:
                                    return Ce.Small;
                                case u.extraSmall:
                                    return Ce.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), Ce.ExtraSmall;
                            }
                        })(u),
                        r = ((u) => {
                            switch (!0) {
                                case u.extraLargeWidth:
                                    return Be.ExtraLarge;
                                case u.largeWidth:
                                    return Be.Large;
                                case u.mediumWidth:
                                    return Be.Medium;
                                case u.smallWidth:
                                    return Be.Small;
                                case u.extraSmallWidth:
                                    return Be.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), Be.ExtraSmall;
                            }
                        })(u),
                        i = ((u) => {
                            switch (!0) {
                                case u.extraLargeHeight:
                                    return he.ExtraLarge;
                                case u.largeHeight:
                                    return he.Large;
                                case u.mediumHeight:
                                    return he.Medium;
                                case u.smallHeight:
                                    return he.Small;
                                case u.extraSmallHeight:
                                    return he.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), he.ExtraSmall;
                            }
                        })(u);
                    return { mediaSize: a, mediaWidth: r, mediaHeight: i, remScreenWidth: e, remScreenHeight: t };
                };
                var pe = t(6112);
                function ve() {}
                console.log;
                const be = [
                    'src',
                    'className',
                    'autoplay',
                    'style',
                    'loop',
                    'isPrebufferKeyframes',
                    'keyframesNameConfig',
                    'onClick',
                ];
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
                const fe = (0, n.forwardRef)(function (u, e) {
                        let t = u.src,
                            r = u.className,
                            i = u.autoplay,
                            o = void 0 !== i && i,
                            l = u.style,
                            c = u.loop,
                            E = void 0 !== c && c,
                            A = u.isPrebufferKeyframes,
                            d = u.keyframesNameConfig,
                            F = u.onClick,
                            _ = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(u);
                                for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                return a;
                            })(u, be);
                        const m = e,
                            D = (0, n.useRef)(null);
                        var C;
                        return (
                            (C = () =>
                                s.O.view.events.onDisplayChanged((u, e) => {
                                    var t, n;
                                    e === pe.W.hidden && (null == (t = D.current) || t.pause()),
                                        e === pe.W.shown && (null == (n = D.current) || n.play());
                                })),
                            (0, n.useEffect)(C, []),
                            (0, n.useEffect)(
                                () =>
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
                                        const u = D.current;
                                        if (!m || !u || !A)
                                            return void (null != u && u.cohFastSeek && (u.cohFastSeek = !1));
                                        const e = u.cohGetKeyframeTimestamps();
                                        e.length > 0
                                            ? ((u.cohFastSeek = !0),
                                              e.map((e) => {
                                                  null == u || u.cohPrebufferKeyframe(e);
                                              }))
                                            : console.warn("Can't prebuffered keyframes, keyframes was not found");
                                    }),
                                [A, m],
                            ),
                            (0, n.useEffect)(() => {
                                if (m && D.current) {
                                    const u = {
                                            changeTimeHandlers: [],
                                            changeKeyframeHandlers: [],
                                            changeTimeLoop: ve,
                                        },
                                        e = () => {
                                            let e = 0;
                                            const t = (function (u) {
                                                    let e = 0;
                                                    return [
                                                        function t() {
                                                            u(), (e = requestAnimationFrame(t));
                                                        },
                                                        function () {
                                                            cancelAnimationFrame(e);
                                                        },
                                                    ];
                                                })(() => {
                                                    if (D.current) {
                                                        const t = D.current,
                                                            n = t.currentTime,
                                                            a = t.duration;
                                                        if (
                                                            (e !== n &&
                                                                (u.changeTimeHandlers.forEach((u) =>
                                                                    u({ currentTime: n, duration: a }),
                                                                ),
                                                                (e = n)),
                                                            D.current.paused || !m || !A)
                                                        )
                                                            return;
                                                        const r = D.current.cohGetKeyframeTimestamps();
                                                        r.forEach((e, t) => {
                                                            n > r[t] - 0.02 &&
                                                                n < r[t] &&
                                                                u.changeKeyframeHandlers.forEach((u) => {
                                                                    const n = Object.keys(null != d ? d : {})[t];
                                                                    return u({
                                                                        time: e,
                                                                        name: `${d ? n : `Point_${t}`}`,
                                                                    });
                                                                });
                                                        });
                                                    }
                                                }),
                                                n = t[0],
                                                a = t[1];
                                            return n(), a;
                                        };
                                    u.changeTimeLoop = e();
                                    const t = (e) => (
                                            u.changeTimeHandlers.push(e),
                                            () => {
                                                const t = u.changeTimeHandlers,
                                                    n = t.indexOf(e);
                                                n < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeTimeHandler, this reference was not found",
                                                      )
                                                    : t.splice(n, 1);
                                            }
                                        ),
                                        n = (e) => (
                                            u.changeKeyframeHandlers.push(e),
                                            () => {
                                                const t = u.changeKeyframeHandlers,
                                                    n = t.indexOf(e);
                                                n < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeKeyframeHandlers, this reference was not found",
                                                      )
                                                    : t.splice(n, 1);
                                            }
                                        ),
                                        a = () => {
                                            var u;
                                            return null == (u = D.current) ? void 0 : u.currentTime;
                                        },
                                        r = () => {
                                            var u;
                                            return null == (u = D.current) ? void 0 : u.duration;
                                        },
                                        i = (u) => {
                                            var e, t, n;
                                            D.current &&
                                                (D.current.currentTime =
                                                    ((e = 0),
                                                    (t = D.current.duration),
                                                    (n = u) < e ? e : n > t ? t : n));
                                        },
                                        o = () => {
                                            var u;
                                            return null == (u = D.current) ? void 0 : u.play();
                                        },
                                        s = () => {
                                            var u;
                                            return null == (u = D.current) ? void 0 : u.pause();
                                        },
                                        l = () => {
                                            s(), i(0);
                                        },
                                        c = () => {
                                            var u, e;
                                            return null !=
                                                (u = null == (e = D.current) ? void 0 : e.cohGetKeyframeTimestamps())
                                                ? u
                                                : [];
                                        },
                                        E = (u) => {
                                            i(u), o();
                                        },
                                        F = (u) => {
                                            i(u), s();
                                        },
                                        _ = () => {
                                            (u.changeTimeHandlers = []),
                                                (u.changeKeyframeHandlers = []),
                                                null == u.changeTimeLoop || u.changeTimeLoop();
                                        },
                                        C = (u, e) => {
                                            var t;
                                            return (
                                                null == (t = D.current) || t.addEventListener(u, e),
                                                () => {
                                                    var t;
                                                    return null == (t = D.current)
                                                        ? void 0
                                                        : t.removeEventListener(u, e);
                                                }
                                            );
                                        },
                                        B = (u, e) => {
                                            var t;
                                            return (
                                                null == (t = D.current) || t.removeEventListener(u, e),
                                                () => {
                                                    var t;
                                                    return null == (t = D.current)
                                                        ? void 0
                                                        : t.removeEventListener(u, e);
                                                }
                                            );
                                        };
                                    return (
                                        (m.current = {
                                            on: C,
                                            off: B,
                                            play: o,
                                            pause: s,
                                            stop: l,
                                            cleanup: _,
                                            getCurrentTime: a,
                                            getDuration: r,
                                            getCachedKeyframes: c,
                                            goToAndPlay: E,
                                            goToAndStop: F,
                                            setCurrentTime: i,
                                            domRef: D.current,
                                            onChangeTime: t,
                                            onKeyframes: n,
                                        }),
                                        () => {
                                            _(), (m.current = null);
                                        }
                                    );
                                }
                            }, [d, m, A]),
                            (0, n.useEffect)(() => {
                                D.current && o && D.current.play();
                            }, [o, E]),
                            (0, n.useEffect)(() => {
                                if (D.current)
                                    return () => {
                                        D.current && D.current.pause();
                                    };
                            }, []),
                            a().createElement(
                                'video',
                                we({ src: t, className: r, style: l, loop: E, ref: D, onClick: F }, _),
                            )
                        );
                    }),
                    ye = (0, n.memo)(fe),
                    xe = 'BackgroundVideo_base_9b',
                    ke = 'BackgroundVideo_video_f1',
                    Te = 'BackgroundVideo_video__idle_7d',
                    Se = 'BackgroundVideo_video__hidden_92';
                let Re;
                !(function (u) {
                    (u[(u.KEY_USED = 0)] = 'KEY_USED'), (u[(u.REROLL = 1)] = 'REROLL');
                })(Re || (Re = {}));
                const Oe = 1.6,
                    Le = (u, e = 150, t = 400, n = 1e3) => ({ appear: t + (e * u + 1), enter: n }),
                    Ne = (u) => (e, t) =>
                        e / t >= 2.4000000000000004
                            ? u(viewEnv.remToPx(t) * Oe, viewEnv.remToPx(t), e, t)
                            : u(viewEnv.remToPx(e), 0.625 * viewEnv.remToPx(e), e, t),
                    Me = viewEnv.remToPx(900),
                    Pe = { width: Me * Oe, height: Me },
                    Ie = viewEnv.remToPx(1200),
                    He = { width: Ie * Oe, height: Ie },
                    We =
                        (Ne((u, e, t, n) =>
                            u < Pe.width
                                ? Pe
                                : t > l.medium.width && n > l.medium.height && u < He.width
                                  ? He
                                  : { width: u, height: e },
                        ),
                        viewEnv.remToPx(700)),
                    Ue = { width: We * Oe, height: We },
                    je =
                        (Ne((u, e) => (u < Ue.width ? Ue : { width: u, height: e })),
                        (u) => {
                            const e = R.videos.wt;
                            return ((u, e) => !['$dyn', '$num', '$plural'].includes(u) && u in e)(u, e)
                                ? e[u]()
                                : (console.error(`key ${String(u)} not found.`, e), '');
                        });
                let $e;
                var Ve;
                !(function (u) {
                    (u.PRIMARY = 'G171_E77'),
                        (u.SECONDARY = 'Cz14_Skoda_T_56_WT24_3Dst'),
                        (u.TERTIARY = 'G166_LKpz_70_K');
                })($e || ($e = {})),
                    (function (u) {
                        (u.LOADING = 'loading'), (u.INTRO = 'intro'), (u.DELAY = 'delay'), (u.IDLE = 'idle');
                    })(Ve || (Ve = {}));
                const Ge = { [$.HUNTER]: 'lootbox_hunter', [$.BOSS]: 'lootbox_boss' },
                    Ke = { [$.HUNTER]: 'lootbox_hunter_idle', [$.BOSS]: 'lootbox_boss_idle' },
                    ze = {
                        [$e.PRIMARY]: 'boss_1_introduction',
                        [$e.SECONDARY]: 'boss_2_introduction',
                        [$e.TERTIARY]: 'boss_3_introduction',
                    },
                    Ye = { [$e.PRIMARY]: 'boss_1_idle', [$e.SECONDARY]: 'boss_2_idle', [$e.TERTIARY]: 'boss_3_idle' },
                    qe = ({
                        lootboxId: u,
                        showIntro: e = !1,
                        portalType: t,
                        vehicleType: r = $e.PRIMARY,
                        onVideoComplete: i,
                        openingType: o = Re.KEY_USED,
                    }) => {
                        const s = ge().mediaWidth,
                            l = (0, n.useRef)(null),
                            c = (0, n.useRef)(null),
                            E = (0, n.useState)(`${Ge[$.HUNTER]}_${s}`),
                            A = E[0],
                            d = E[1],
                            F = (0, n.useState)(`${Ge[$.HUNTER]}_${s}`),
                            _ = F[0],
                            m = F[1],
                            D = (0, n.useState)(Ve.IDLE),
                            C = D[0],
                            B = D[1],
                            h = (0, n.useState)(!1),
                            g = h[0],
                            p = h[1],
                            v = (0, n.useCallback)(() => {
                                B(Ve.IDLE), i();
                            }, [i]);
                        (0, n.useEffect)(() => {
                            B(Ve.LOADING);
                        }, [u]),
                            (0, n.useEffect)(() => {
                                C === Ve.LOADING &&
                                    (g
                                        ? B(Ve.INTRO)
                                        : (B(Ve.DELAY),
                                          setTimeout(() => {
                                              v();
                                          }, 300)));
                            }, [C, g, v]),
                            (0, n.useEffect)(() => {
                                p(e && o === Re.KEY_USED);
                            }, [e, o]),
                            (0, n.useEffect)(() => {
                                switch (t) {
                                    case $.BOSS:
                                    case $.HUNTER:
                                        d(`${Ge[t]}_${s}`), m(`${Ke[t]}_${s}`);
                                        break;
                                    case $.TANK:
                                        d(`${ze[r]}_${s}`), m(`${Ye[r]}_${s}`);
                                }
                            }, [t, r, s]),
                            (0, n.useEffect)(() => {
                                var u, e, t, n, a, r;
                                switch (C) {
                                    case Ve.IDLE:
                                        null == (u = c.current) || u.play(), null == (e = l.current) || e.stop();
                                        break;
                                    case Ve.INTRO:
                                        null == (t = c.current) || t.stop(),
                                            null == (n = l.current) || n.goToAndPlay(0);
                                        break;
                                    default:
                                        null == (a = c.current) || a.stop(), null == (r = l.current) || r.stop();
                                }
                            }, [C, A, _]);
                        const b = K()(ke, C !== Ve.INTRO && Se),
                            w = K()(ke, Te, C === Ve.INTRO && Se);
                        return a().createElement(
                            'div',
                            { className: xe, key: s },
                            a().createElement(ye, {
                                className: b,
                                ref: l,
                                src: je(A),
                                onEnded: v,
                                isPrebufferKeyframes: !0,
                            }),
                            a().createElement(ye, { className: w, ref: c, loop: !0, src: je(_) }),
                        );
                    },
                    Ze = R.strings.event.portalAward,
                    Xe = ({
                        children: u,
                        portalType: e,
                        vehicleType: t = Z.PRIMARY,
                        isBoxesEnabled: r,
                        lootBoxesAnimationDelayCount: i,
                        onBuy: o,
                        onClose: s,
                        availableLootBoxesPurchase: l,
                        hasGradient: c = !1,
                        showFinalAnimation: E = !0,
                        isAnimated: A = !0,
                        onAnimationSettingClick: d,
                        launchId: F,
                        showCurrencyBalance: _ = !1,
                        currentCrystals: m = 0,
                        currentGold: D = 0,
                        currentCredits: C = 0,
                        currentFreeXP: B = 0,
                        isWalletAvailable: h = !1,
                        openingType: g,
                    }) => {
                        const p = (0, n.useState)(!1),
                            v = p[0],
                            b = p[1];
                        var w;
                        (w = () => {
                            E && s();
                        }),
                            q(z.n.ESCAPE, w),
                            (0, n.useEffect)(() => {
                                b(!1);
                            }, [F]);
                        const f = (0, n.useCallback)(() => (null == d ? void 0 : d()), [d]),
                            y = (0, n.useCallback)(() => {
                                b(!0);
                            }, []),
                            x = i + 1,
                            k = X(),
                            T = K()(Zu, k),
                            S = !A || (v && c);
                        return a().createElement(
                            'div',
                            { className: T },
                            a().createElement(qe, {
                                lootboxId: F,
                                onVideoComplete: y,
                                showIntro: A,
                                portalType: e,
                                vehicleType: t,
                                openingType: g,
                            }),
                            S && a().createElement(Mu, { hasAnimation: !0 }),
                            v &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: Xu }, Ze.title()),
                                    a().createElement('div', { className: Qu }, u),
                                ),
                            E &&
                                a().createElement(
                                    Hu,
                                    { animationDelayStepsCount: x },
                                    a().createElement(au, { onClose: s }),
                                    a().createElement(Ou, { onClick: s }),
                                    _ &&
                                        a().createElement(
                                            'div',
                                            { className: Ju },
                                            a().createElement(
                                                'div',
                                                { className: ue },
                                                a().createElement(De, {
                                                    crystals: m,
                                                    golds: D,
                                                    credits: C,
                                                    freexp: B,
                                                    isWalletAvailable: h,
                                                }),
                                            ),
                                            a().createElement('div', { className: ee }),
                                        ),
                                    r &&
                                        e !== $.HUNTER &&
                                        a().createElement(Su, { onBuyButtonClick: o, availableLootBoxesPurchase: l }),
                                    d && a().createElement(qu, { isChecked: A, onClick: f }),
                                ),
                        );
                    },
                    Qe = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    Je = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const ut = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    et = (u) =>
                        ut
                            ? `${u}`
                            : (function (u) {
                                  let e = '';
                                  for (let t = Je.length - 1; t >= 0; t--)
                                      for (; u >= Je[t]; ) (e += Qe[t]), (u -= Je[t]);
                                  return e;
                              })(u),
                    tt = 'Vehicle_base_a1',
                    nt = 'Vehicle_base__hasAnimation_b4',
                    at = 'Vehicle_type_f4',
                    rt = 'Vehicle_name_a0',
                    it = 'Vehicle_level_74',
                    ot = 'Vehicle_base__large_b5',
                    st = 'Vehicle_base__single_44',
                    lt = ({ level: u, type: e, name: t, isLarge: r, isSingle: i, animationDelayStepsCount: o }) => {
                        const s = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url('R.images.gui.maps.icons.vehicleTypes.big.${e.replace('-', '_')}_elite')`,
                                }),
                                [e],
                            ),
                            l = K()(tt, r && ot, i && st, void 0 !== o && nt),
                            c = (0, n.useMemo)(() => (void 0 !== o ? { animationDelay: o * Pu + 'ms' } : void 0), [o]);
                        return a().createElement(
                            'span',
                            { className: l, style: c },
                            a().createElement('span', { className: it }, et(u)),
                            a().createElement('span', { className: at, style: s }),
                            a().createElement('span', { className: rt }, t),
                        );
                    };
                var ct = t(4184);
                const Et =
                        (u, e) =>
                        (...t) => {
                            if (u(...t)) return e(...t);
                        },
                    At = {
                        base: 'IconButton_base_d0',
                        base__hovered: 'IconButton_base__hovered_26',
                        base__disabled: 'IconButton_base__disabled_7d',
                        icon: 'IconButton_icon_26',
                        icon__preview: 'IconButton_icon__preview_58',
                        icon__compare: 'IconButton_icon__compare_4d',
                        icon__small: 'IconButton_icon__small_b8',
                        icon__normal: 'IconButton_icon__normal_d3',
                        base__mouseDown: 'IconButton_base__mouseDown_06',
                        label: 'IconButton_label_73',
                        label__small: 'IconButton_label__small_3a',
                        label__normal: 'IconButton_label__normal_ef',
                        base__visibleLabel: 'IconButton_base__visibleLabel_3a',
                    },
                    dt = [
                        'type',
                        'children',
                        'className',
                        'classNames',
                        'disabled',
                        'isVisibleLabel',
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
                function Ft() {
                    return (
                        (Ft =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        Ft.apply(this, arguments)
                    );
                }
                const _t = (u) => {
                    let e = u.type,
                        t = u.children,
                        r = u.className,
                        i = u.classNames,
                        o = u.disabled,
                        s = void 0 !== o && o,
                        l = u.isVisibleLabel,
                        c = void 0 !== l && l,
                        E = u.soundHover,
                        A = void 0 === E ? R.sounds.highlight() : E,
                        d = u.soundClick,
                        F = void 0 === d ? R.sounds.play() : d,
                        _ = u.size,
                        m = void 0 === _ ? 'normal' : _,
                        D = u.onClick,
                        C = u.onMouseEnter,
                        B = u.onMouseLeave,
                        h = u.onMouseDown,
                        g = u.onMouseUp,
                        p = u.onFocus,
                        v = u.onBlur,
                        b = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(u);
                            for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                            return a;
                        })(u, dt);
                    const w = (0, n.useState)(!1),
                        f = w[0],
                        y = w[1],
                        x = (0, n.useState)(!1),
                        k = x[0],
                        T = x[1],
                        S = (0, n.useRef)(null),
                        O = () => !1 === s,
                        L = (u) => O() && ((u) => u.button === Wu.LEFT)(u),
                        N = Et(O, (u) => {
                            null == D || D(u);
                        }),
                        M = Et(L, (u) => {
                            y(!0), null == h || h(u), F && Q(F);
                        }),
                        P = Et(L, (u) => {
                            y(!1), null == g || g(u);
                        }),
                        I = Et(O, (u) => {
                            T(!0), null == C || C(u), A && Q(A);
                        }),
                        H = Et(O, (u) => {
                            null == p || p(u);
                        }),
                        W = Et(O, (u) => {
                            null == v || v(u);
                        });
                    return a().createElement(
                        'div',
                        Ft(
                            {
                                ref: S,
                                className: K()(
                                    At.base,
                                    s && At.base__disabled,
                                    c && At.base__visibleLabel,
                                    !s && f && At.base__mouseDown,
                                    !s && k && At.base__hovered,
                                    r,
                                ),
                                onClick: N,
                                onMouseEnter: I,
                                onMouseLeave: (u) => {
                                    T(!1), y(!1), null == B || B(u);
                                },
                                onMouseDown: M,
                                onMouseUp: P,
                                onFocus: H,
                                onBlur: W,
                            },
                            b,
                        ),
                        a().createElement('div', {
                            className: K()(At.icon, At[`icon__${m}`], At[`icon__${e}`], null == i ? void 0 : i.icon),
                        }),
                        t &&
                            a().createElement(
                                'div',
                                { className: K()(At.label, At[`label__${m}`], null == i ? void 0 : i.label) },
                                t,
                            ),
                    );
                };
                let mt;
                !(function (u) {
                    (u.gold = 'gold'),
                        (u.crystal = 'crystal'),
                        (u.xp = 'xp'),
                        (u.eliteXP = 'eliteXP'),
                        (u.equipCoin = 'equipCoin');
                })(mt || (mt = {}));
                const Dt = ({ count: u, quantity: e, isCurrency: t, isMultiple: n }) =>
                        a().createElement(
                            a().Fragment,
                            null,
                            t && a().createElement(ne, { value: Number(u) }),
                            n && !t && e,
                        ),
                    Ct = {
                        currency: 'Currency_currency_e1',
                        currency__credits: 'Currency_currency__credits_5a',
                        currency__gold: 'Currency_currency__gold_f2',
                        currency__crystal: 'Currency_currency__crystal_8e',
                        currency__additionalReward: 'Currency_currency__additionalReward_d7',
                        currency__singleReward: 'Currency_currency__singleReward_76',
                        currency__multiply: 'Currency_currency__multiply_40',
                        count: 'Currency_count_0a',
                        count__confirmReward: 'Currency_count__confirmReward_7a',
                        count__singleReward: 'Currency_count__singleReward_0a',
                        count__additionalReward: 'Currency_count__additionalReward_5e',
                        count__multiply: 'Currency_count__multiply_80',
                    },
                    Bt = ({
                        count: u,
                        currency: e,
                        isConfirmReward: t = !1,
                        isSingleReward: n = !1,
                        isAdditionalReward: r = !1,
                        isMultiplyReward: i = !1,
                    }) => {
                        const o = e in mt,
                            s = u > 1,
                            l = K()(
                                Ct.count,
                                t && Ct.count__confirmReward,
                                n && Ct.count__singleReward,
                                r && Ct.count__additionalReward,
                                i && Ct.count__multiply,
                            ),
                            c = K()(
                                Ct.currency,
                                Ct[`currency__${e}`],
                                r && Ct.currency__additionalReward,
                                n && Ct.currency__singleReward,
                                i && Ct.currency__multiply,
                            ),
                            E = v(R.strings.event.award.value(), { count: u });
                        return a().createElement(
                            'span',
                            { className: o ? c : l },
                            a().createElement(Dt, { isCurrency: o, count: u, quantity: E, isMultiple: s }),
                        );
                    },
                    ht = [
                        'width',
                        'height',
                        'getSrcByFrame',
                        'frameCount',
                        'onAnimate',
                        'frameTime',
                        'initialFrameIndex',
                    ];
                function gt() {
                    return (
                        (gt =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        gt.apply(this, arguments)
                    );
                }
                const pt = () => {},
                    vt = (0, n.memo)((u) => {
                        let e = u.width,
                            t = u.height,
                            r = u.getSrcByFrame,
                            i = u.frameCount,
                            o = u.onAnimate,
                            s = void 0 === o ? pt : o,
                            l = u.frameTime,
                            c = void 0 === l ? 33 : l,
                            E = u.initialFrameIndex,
                            A = void 0 === E ? 0 : E,
                            d = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(u);
                                for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                return a;
                            })(u, ht);
                        const F = (0, n.useRef)(null);
                        return (
                            (0, n.useEffect)(() => {
                                const u = F.current;
                                if (!u) return;
                                const n = u.getContext('2d'),
                                    a = ((u, e) => {
                                        const t = [];
                                        for (let n = 0; n <= u; n++) {
                                            const u = new Image();
                                            (u.src = e(n)), t.push(u);
                                        }
                                        return t;
                                    })(i, r),
                                    o = ((u, e = 0) => {
                                        let t = e;
                                        return () => {
                                            const e = t;
                                            return (t += 1), t > u && (t = 0), e;
                                        };
                                    })(i - 1, A),
                                    l = setInterval(() => {
                                        const r = o();
                                        n.clearRect(0, 0, u.width, u.height);
                                        const i = a[r];
                                        n.drawImage(i, 0, 0, e, t), s(r, i);
                                    }, c);
                                return () => clearInterval(l);
                            }, [i, c, r, t, A, s, e]),
                            a().createElement('canvas', gt({}, d, { width: e, height: t, ref: F }))
                        );
                    }),
                    bt = {
                        base: 'Compensation_base_f5',
                        tank: 'Compensation_tank_2b',
                        base__single: 'Compensation_base__single_7f',
                        base__multiply: 'Compensation_base__multiply_39',
                        gold: 'Compensation_gold_9d',
                        particlesCanvas: 'Compensation_particlesCanvas_23',
                        convertIcon: 'Compensation_convertIcon_d5',
                        vehicleName: 'Compensation_vehicleName_f5',
                        value: 'Compensation_value_56',
                        blue: 'Compensation_blue_bd',
                    },
                    wt = () => {},
                    ft = (u, e) => {
                        const t = (0, n.useState)(u[e]),
                            a = t[0],
                            r = t[1],
                            i = (0, n.useRef)(wt),
                            o = (0, n.useCallback)(() => {
                                a.stop ||
                                    (i.current(),
                                    (i.current = ((u, e) => {
                                        let t;
                                        const n = setTimeout(() => {
                                            t = u();
                                        }, e);
                                        return () => {
                                            'function' == typeof t && t(), clearTimeout(n);
                                        };
                                    })(() => {
                                        r(u[a.nextState]);
                                    }, a.timeout)));
                            }, [a, u]);
                        return (
                            (0, n.useEffect)(() => (o(), () => i.current()), [o]),
                            {
                                step: a,
                                setStep: (0, n.useCallback)(
                                    (e) => {
                                        r(u[e]);
                                    },
                                    [u],
                                ),
                                next: o,
                            }
                        );
                    },
                    yt = {
                        base: 'Convertation_base_c7',
                        bumpStars: 'Convertation_bumpStars_70',
                        bumpParticles: 'Convertation_bumpParticles_13',
                        particlesCanvas: 'Convertation_particlesCanvas_32',
                        bump: 'Convertation_bump_29',
                        bumpRays: 'Convertation_bumpRays_43',
                        twirlyCanvas: 'Convertation_twirlyCanvas_fc',
                        base__start: 'Convertation_base__start_4f',
                        base__bump: 'Convertation_base__bump_4d',
                        base__end: 'Convertation_base__end_e4',
                        reward: 'Convertation_reward_4f',
                        rewardFrom: 'Convertation_rewardFrom_75',
                        rewardTo: 'Convertation_rewardTo_ee',
                    },
                    xt = ['children'],
                    kt = ['children'];
                function Tt(u, e) {
                    if (null == u) return {};
                    var t,
                        n,
                        a = {},
                        r = Object.keys(u);
                    for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                    return a;
                }
                function St() {
                    return (
                        (St =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        St.apply(this, arguments)
                    );
                }
                const Rt = {
                        idle: { state: 'idle', nextState: 'start', timeout: 400 },
                        start: { state: 'start', nextState: 'bump', timeout: 960 },
                        bump: { state: 'bump', nextState: 'end', timeout: 33 },
                        end: { state: 'end', stop: !0 },
                    },
                    Ot = { width: 250, height: 250 },
                    Lt = () => {},
                    Nt = (u) =>
                        `R.images.gui.maps.icons.wtevent.sequence.convert_twirly.twirly_convertation_${u.toString().padStart(5, '0')}`,
                    Mt = (u) => ({ width: `${u.width}rem`, height: `${u.height}rem` }),
                    Pt = (0, n.memo)(
                        ({
                            children: [u, e],
                            className: t,
                            classNames: r = {},
                            onAnimate: i = Lt,
                            animationSettings: o = Rt,
                            getSrcByFrameTwirly: s = Nt,
                            size: l = Ot,
                        }) => {
                            const c = ft(o, 'idle').step.state;
                            return (
                                (0, n.useEffect)(() => {
                                    i(c);
                                }, [c, i]),
                                (0, n.useEffect)(() => {
                                    'start' === c && Q('ev_white_tiger_hangar_lootbox_reward_conv');
                                }, [c]),
                                a().createElement(
                                    'div',
                                    { className: K()(yt.base, yt[`base__${c}`], t), style: Mt(l) },
                                    a().createElement('div', { className: K()(yt.bump, r.bump) }),
                                    a().createElement('div', { className: K()(yt.bumpRays, r.bumpRays) }),
                                    a().createElement(
                                        'div',
                                        { className: K()(yt.reward, r.reward) },
                                        ('idle' === c || 'start' === c) &&
                                            a().createElement(
                                                'div',
                                                { className: K()(yt.rewardFrom, r.rewardFrom) },
                                                u,
                                            ),
                                        ('end' === c || 'bump' === c) &&
                                            a().createElement('div', { className: K()(yt.rewardTo, r.rewardTo) }, e),
                                    ),
                                    ('start' === c || 'bump' === c) &&
                                        a().createElement(
                                            vt,
                                            St({}, l, {
                                                className: K()(yt.twirlyCanvas, r.twirlyCanvas),
                                                frameCount: 50,
                                                frameTime: 16,
                                                getSrcByFrame: s,
                                            }),
                                        ),
                                    a().createElement('div', { className: K()(yt.bumpParticles, r.bumpParticles) }),
                                )
                            );
                        },
                        (u, e) => {
                            u.children;
                            const t = Tt(u, xt),
                                n = (e.children, Tt(e, kt));
                            return (
                                (a = t),
                                (r = n),
                                Object.keys(a).length === Object.keys(r).length &&
                                    Object.keys(a).every(
                                        (u) => Object.prototype.hasOwnProperty.call(r, u) && a[u] === r[u],
                                    )
                            );
                            var a, r;
                        },
                    ),
                    It = (u) =>
                        ((u, e) => {
                            let t = u;
                            const n = e.split('.');
                            for (let u = 0; u < n.length; u++) {
                                if (!t) return '';
                                if (('string' != typeof t && (t = t.$dyn(n[u])), 'string' == typeof t)) return t;
                            }
                            return '';
                        })(
                            R.images,
                            `gui.maps.icons.wtevent.sequence.convert_particles.items_idle_${u.toString().padStart(5, '0')}`,
                        ),
                    Ht = Object.assign({}, Rt, { idle: Object.assign({}, Rt.idle, { timeout: 1800 }) });
                let Wt;
                !(function (u) {
                    (u.Single = 'single'), (u.Multiply = 'multiply'), (u.Base = 'base');
                })(Wt || (Wt = {}));
                const Ut = { width: 100, height: 100 },
                    jt = { width: 450, height: 450 },
                    $t = { width: 500, height: 500 },
                    Vt = (u) => (u.extraSmall || u.small ? jt : $t),
                    Gt = ({ isSingle: u, isMultiply: e, value: t, vehicleName: r }) => {
                        const i = (0, n.useContext)(m),
                            o = (0, n.useMemo)(() => (u ? Wt.Single : e ? Wt.Multiply : Wt.Base), [e, u]),
                            s = K()(bt.base, bt[`base__${o}`]);
                        return a().createElement(
                            'div',
                            { className: s },
                            a().createElement(vt, {
                                width: e ? Ut.width : Vt(i).width,
                                height: e ? Ut.height : Vt(i).height,
                                className: K()(bt.particlesCanvas, bt.blue),
                                frameCount: 60,
                                getSrcByFrame: It,
                            }),
                            a().createElement(
                                Pt,
                                { size: e ? Ut : Vt(i), animationSettings: Ht, className: bt.nyAnimation },
                                [
                                    a().createElement(
                                        'div',
                                        { key: 1, className: bt.tank },
                                        a().createElement('div', { className: bt.convertIcon }),
                                        a().createElement('div', { className: bt.vehicleName }, r),
                                    ),
                                    a().createElement(
                                        'div',
                                        { key: 2, className: bt.gold },
                                        a().createElement('div', { className: bt.convertIcon }),
                                        a().createElement(
                                            'div',
                                            { className: bt.value },
                                            a().createElement(Dt, { isCurrency: !0, count: t, isMultiple: e }),
                                        ),
                                    ),
                                ],
                            ),
                        );
                    },
                    Kt = {
                        base: 'Reward_base_7a',
                        base__singleReward: 'Reward_base__singleReward_ae',
                        base__additional: 'Reward_base__additional_5a',
                        base__multiply: 'Reward_base__multiply_3c',
                        rewardImage: 'Reward_rewardImage_a1',
                        compensation: 'Reward_compensation_4c',
                        tankName: 'Reward_tankName_fd',
                        preview: 'Reward_preview_72',
                        description: 'Reward_description_01',
                        description__single: 'Reward_description__single_b4',
                        vehicle: 'Reward_vehicle_1f',
                        vehicle__single: 'Reward_vehicle__single_08',
                    };
                let zt, Yt;
                !(function (u) {
                    (u.Small = 'small'), (u.Large = 'large');
                })(zt || (zt = {})),
                    (function (u) {
                        (u.Default = 'default'), (u.Additional = 'additional'), (u.Multiply = 'multiply');
                    })(Yt || (Yt = {}));
                const qt = R.views.common.tooltip_window,
                    Zt = (u, e) => ({ backgroundImage: `url('R.images.gui.maps.icons.wtevent.rewards.${e}.${u}')` }),
                    Xt = (u) => ({ backgroundImage: `url('${u}')` }),
                    Qt = ['gold', 'crystal'],
                    Jt = R.strings.event.awardView.previewBtnText(),
                    un = (0, n.memo)(
                        ({
                            tooltipId: u,
                            name: e,
                            label: t,
                            value: r,
                            icon: i,
                            specialId: o,
                            compensationSource: s = '',
                            isCompensation: l = !1,
                            isConfirmReward: c = !1,
                            isSingleReward: E = !1,
                            isMultiplyReward: A = !1,
                            theme: d = Yt.Default,
                            size: F,
                        }) => {
                            const _ = j('model'),
                                m = _.vehicle,
                                D = _.onPreview,
                                C = Qt.includes(e),
                                B = 'premium_plus' === e,
                                h = 'vehicles' === e,
                                g = h || ('customizations' === e && i && i.includes('style3d')),
                                p = (h || 'gold' === e) && l,
                                v = t && d === Yt.Default && !C && !h,
                                b = d === Yt.Default ? zt.Large : zt.Small,
                                w = (0, n.useMemo)(() => {
                                    switch (e) {
                                        case 'premium_plus':
                                            return Zt(`${e}_${r}`, b);
                                        case 'crewBooks':
                                        case 'goodies':
                                            return Zt(String(i), b);
                                        case 'customizations':
                                        case 'tmanToken':
                                            return d === Yt.Default
                                                ? Zt(`collection.${i}`, b)
                                                : Zt(o ? 'style_3d' : `${i}`, b);
                                        case 'gold':
                                            return l ? Xt('') : Zt(e, b);
                                        case 'vehicles':
                                            return m.specName
                                                ? Xt(
                                                      R.images.gui.maps.shop.vehicles.c_600x450.$dyn(
                                                          m.specName.replace(/-/g, '_'),
                                                      ),
                                                  )
                                                : Zt('vehicles', b);
                                        default:
                                            return Zt(e, b);
                                    }
                                }, [o, e, r, b, i, d, l, m]),
                                f = (0, n.useMemo)(() => ({ value: r, tooltipId: u }), [u, r]),
                                y = (0, n.useMemo)(
                                    () => qt.backport_tooltip_content.BackportTooltipContent('resId'),
                                    [],
                                ),
                                x = (0, n.useCallback)(() => {
                                    h && m.intCD && D({ intCD: m.intCD }), o && D({ intCD: o });
                                }, [h, m, D, o]),
                                k = K()(Kt.rewardImage, p && Kt.rewardImage__compensation),
                                T = K()(
                                    Kt.base,
                                    A && Kt.base__multiply,
                                    c && Kt.base__confirmReward,
                                    E && Kt.base__singleReward,
                                    Kt[`base__${F}`],
                                    d !== Yt.Default && Kt[`base__${d}`],
                                );
                            return a().createElement(
                                cu,
                                { ignoreShowDelay: !0, contentId: y, args: f },
                                a().createElement(
                                    'div',
                                    { className: T },
                                    p
                                        ? a().createElement(Gt, {
                                              isSingle: E,
                                              isMultiply: A,
                                              value: r,
                                              vehicleName: s,
                                          })
                                        : a().createElement(
                                              'div',
                                              { className: k, style: w },
                                              g &&
                                                  !p &&
                                                  !A &&
                                                  !h &&
                                                  a().createElement(
                                                      'div',
                                                      { className: Kt.preview },
                                                      a().createElement(_t, { type: 'preview', onClick: x }, Jt),
                                                  ),
                                          ),
                                    p || !h || m.specName
                                        ? null
                                        : a().createElement('div', { className: Kt.tankName }, t),
                                    !B &&
                                        !p &&
                                        a().createElement(Bt, {
                                            count: r,
                                            currency: e,
                                            isConfirmReward: c,
                                            isSingleReward: E,
                                            isAdditionalReward: d === Yt.Additional,
                                            isMultiplyReward: A,
                                        }),
                                    v &&
                                        a().createElement(
                                            'div',
                                            { className: K()(Kt.description, E && Kt.description__single) },
                                            t,
                                        ),
                                    h &&
                                        !A &&
                                        a().createElement(
                                            'span',
                                            { className: K()(Kt.vehicle, E && Kt.vehicle__single) },
                                            a().createElement(lt, {
                                                level: m.level,
                                                type: m.type,
                                                name: m.name,
                                                isSingle: E,
                                            }),
                                        ),
                                ),
                            );
                        },
                    ),
                    en = { base: 'AnimationItem_base_23', entered: 'AnimationItem_entered_48' },
                    tn = ['index', 'isSingleReward', 'theme', 'delay', 'onEntered'];
                function nn() {
                    return (
                        (nn =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        nn.apply(this, arguments)
                    );
                }
                const an = (u) => {
                        let e = u.index,
                            t = u.isSingleReward,
                            r = void 0 !== t && t,
                            i = u.theme,
                            o = void 0 === i ? Yt.Default : i,
                            s = u.delay,
                            l = u.onEntered,
                            c = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(u);
                                for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                return a;
                            })(u, tn);
                        const E = (0, n.useCallback)(() => {
                            Q('ev_white_tiger_hangar_lootbox_item'), l && l();
                        }, [l]);
                        return a().createElement(
                            ct.ZP,
                            { in: !0, appear: !0, timeout: Le(e, 150, s), onEntered: E },
                            (u) => {
                                const e = K()(en.base, en[u]);
                                return a().createElement(
                                    'div',
                                    { className: e },
                                    a().createElement(un, nn({}, c, { isSingleReward: r, theme: o })),
                                );
                            },
                        );
                    },
                    rn = 'Content_base_b7',
                    on = 'Content_toolTipArea_c2',
                    sn = 'Content_wrapper_92',
                    ln = 'Content_controls_bc',
                    cn = 'Content_additional_3a',
                    En = 'Content_additionalBackground_b1',
                    An = 'Content_additionalWrapper_08',
                    dn = 'Content_additionalTitle_39',
                    Fn = 'Content_btnHolder_4a',
                    _n = 'FirstLaunchCompensation_base_f5',
                    mn = 'FirstLaunchCompensation_baseWrapper_83',
                    Dn = 'FirstLaunchCompensation_base__additional_68',
                    Cn = 'FirstLaunchCompensation_rewardWrapper_ee',
                    Bn = 'FirstLaunchCompensation_runPrice_df',
                    hn = 'FirstLaunchCompensation_iconContainer_cb',
                    gn = R.strings.event.portalAward,
                    pn = R.strings.tooltips.awardItem.gold,
                    vn = ({ firstLaunchReward: u, hasAdditionalRewards: e = !1 }) => {
                        const t = K()(_n, e && Dn),
                            r = (0, n.useMemo)(
                                () => ({
                                    reward: a().createElement(
                                        'div',
                                        { className: Cn },
                                        a().createElement(
                                            Fu,
                                            { header: pn.header(), body: pn.body() },
                                            a().createElement('div', { className: Bn }, te(u, 'gold')),
                                        ),
                                    ),
                                }),
                                [u],
                            ),
                            i = {
                                header: R.strings.event.WtEventPortals.inside.firstLaunch.tooltip.header(),
                                body: R.strings.event.WtEventPortals.inside.firstLaunch.tooltip.body(),
                            };
                        return a().createElement(
                            'div',
                            { className: t },
                            a().createElement(
                                'div',
                                { className: mn },
                                a().createElement(iu, { text: gn.firstLaunchRewardTitle(), binding: r }),
                                a().createElement(Fu, i, a().createElement('div', { className: hn })),
                            ),
                        );
                    },
                    bn = {
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
                        base__large: 'CButton_base__large_5c',
                        base__disabled: 'CButton_base__disabled_d9',
                        back: 'CButton_back_e5',
                        texture: 'CButton_texture_fe',
                        state: 'CButton_state_11',
                        base__focus: 'CButton_base__focus_83',
                        stateHighlightHover: 'CButton_stateHighlightHover_ff',
                        stateHighlightActive: 'CButton_stateHighlightActive_35',
                        stateDisabled: 'CButton_stateDisabled_54',
                        base__highlightActive: 'CButton_base__highlightActive_b2',
                        content: 'CButton_content_cc',
                    };
                let wn, fn;
                !(function (u) {
                    (u.main = 'main'),
                        (u.primary = 'primary'),
                        (u.primaryGreen = 'primaryGreen'),
                        (u.primaryRed = 'primaryRed'),
                        (u.secondary = 'secondary'),
                        (u.ghost = 'ghost');
                })(wn || (wn = {})),
                    (function (u) {
                        (u.extraSmall = 'extraSmall'), (u.small = 'small'), (u.medium = 'medium'), (u.large = 'large');
                    })(fn || (fn = {}));
                const yn = ({
                    children: u,
                    size: e,
                    isFocused: t,
                    type: r,
                    disabled: i,
                    mixClass: o,
                    soundHover: s,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: E,
                    onMouseDown: A,
                    onMouseUp: d,
                    onMouseLeave: F,
                    onClick: _,
                }) => {
                    const m = (0, n.useRef)(null),
                        D = (0, n.useState)(t),
                        C = D[0],
                        B = D[1],
                        h = (0, n.useState)(!1),
                        g = h[0],
                        p = h[1];
                    return (
                        (0, n.useEffect)(() => {
                            function u(u) {
                                C && null !== m.current && !m.current.contains(u.target) && B(!1);
                            }
                            return (
                                document.addEventListener('mousedown', u),
                                () => {
                                    document.removeEventListener('mousedown', u);
                                }
                            );
                        }, [C]),
                        (0, n.useEffect)(() => {
                            B(t);
                        }, [t]),
                        a().createElement(
                            'div',
                            {
                                ref: m,
                                className: K()(
                                    bn.base,
                                    bn[`base__${r}`],
                                    i && bn.base__disabled,
                                    e && bn[`base__${e}`],
                                    C && bn.base__focus,
                                    g && bn.base__highlightActive,
                                    o,
                                ),
                                onMouseEnter: function (u) {
                                    i || (null !== s && Q(s), c && c(u));
                                },
                                onMouseMove: function (u) {
                                    E && E(u);
                                },
                                onMouseUp: function (u) {
                                    i || (d && d(u), p(!1));
                                },
                                onMouseDown: function (u) {
                                    i ||
                                        (null !== l && Q(l),
                                        A && A(u),
                                        t && (i || (m.current && (m.current.focus(), B(!0)))),
                                        p(!0));
                                },
                                onMouseLeave: function (u) {
                                    i || (F && F(u), p(!1));
                                },
                                onClick: function (u) {
                                    i || (_ && _(u));
                                },
                            },
                            r !== wn.ghost &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: bn.back }),
                                    a().createElement('span', { className: bn.texture }),
                                ),
                            a().createElement(
                                'span',
                                { className: K()(bn.state, bn.state__default) },
                                a().createElement('span', { className: bn.stateDisabled }),
                                a().createElement('span', { className: bn.stateHighlightHover }),
                                a().createElement('span', { className: bn.stateHighlightActive }),
                            ),
                            a().createElement(
                                'span',
                                { className: bn.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                u,
                            ),
                        )
                    );
                };
                yn.defaultProps = { type: wn.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const xn = yn;
                function kn() {
                    return (
                        (kn =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        kn.apply(this, arguments)
                    );
                }
                const Tn = { animationDelay: '700ms' },
                    Sn = ({
                        additionalRewards: u,
                        vehicle: e,
                        tankReward: t,
                        footerAnimationDelayCount: r,
                        onPreview: i,
                        onBackToPortal: o,
                        isFirstLaunch: s,
                        firstLaunchReward: l,
                    }) => {
                        const c = (0, n.useMemo)(() => ({ animationDelay: r * Pu + 'ms' }), [r]),
                            E = (0, n.useCallback)(() => {
                                e.intCD && i({ intCD: e.intCD });
                            }, [e, i]),
                            A = (0, n.useCallback)(() => {
                                o();
                            }, [o]),
                            d = { tooltipId: t.tooltipId };
                        return a().createElement(
                            'div',
                            { className: rn },
                            s && a().createElement(vn, { firstLaunchReward: l }),
                            a().createElement(lt, {
                                level: e.level,
                                type: e.type,
                                name: e.name,
                                isLarge: !0,
                                animationDelayStepsCount: 6,
                            }),
                            a().createElement(
                                cu,
                                {
                                    ignoreShowDelay: !0,
                                    contentId:
                                        R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                            'resId',
                                        ),
                                    args: d,
                                },
                                a().createElement('div', { className: on }),
                            ),
                            a().createElement(
                                'div',
                                { className: sn },
                                Boolean(u.items.length) &&
                                    a().createElement(
                                        'div',
                                        { className: cn, style: Tn },
                                        a().createElement('div', { className: En }),
                                        a().createElement(
                                            'div',
                                            { className: dn },
                                            R.strings.event.portalAward.additionalTitle(),
                                        ),
                                        a().createElement(
                                            'div',
                                            { className: An },
                                            u.items.map(
                                                ({ value: u }, e) => (
                                                    'customizations' === u.name && (u.icon = u.typeIcon),
                                                    a().createElement(
                                                        an,
                                                        kn({ key: e }, u, {
                                                            index: e,
                                                            theme: Yt.Additional,
                                                            delay: 700,
                                                        }),
                                                    )
                                                ),
                                            ),
                                        ),
                                    ),
                                a().createElement(
                                    'div',
                                    { className: ln, style: c },
                                    a().createElement(
                                        'div',
                                        { className: Fn },
                                        a().createElement(
                                            xn,
                                            { size: fn.medium, type: wn.main, onClick: E },
                                            R.strings.event.vehiclePortal.openGarageButton(),
                                        ),
                                    ),
                                    a().createElement(
                                        'div',
                                        { className: Fn },
                                        a().createElement(
                                            xn,
                                            { size: fn.medium, type: wn.primary, onClick: A },
                                            R.strings.event.vehiclePortal.openLootboxesButton(),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    },
                    Rn = () => {
                        const u = j('model'),
                            e = u.isBoxesEnabled,
                            t = u.onClose,
                            r = u.onPreview,
                            i = u.onBuy,
                            o = u.rewards,
                            s = u.additionalRewards,
                            l = u.vehicle,
                            c = u.availableLootBoxesPurchase,
                            E = u.isFirstLaunch,
                            A = u.firstLaunchReward,
                            d = u.eventTank,
                            F = u.openingType,
                            _ = 7 + 1.5 * s.items.length,
                            m = (0, n.useCallback)(() => {
                                null == t || t();
                            }, [t]),
                            D = o.items[0].value,
                            C = _ + 1;
                        return a().createElement(
                            Xe,
                            {
                                portalType: $.TANK,
                                vehicleType: d,
                                isBoxesEnabled: e,
                                onBuy: i,
                                onClose: m,
                                availableLootBoxesPurchase: c,
                                lootBoxesAnimationDelayCount: C,
                                openingType: F,
                            },
                            a().createElement(Sn, {
                                additionalRewards: s,
                                onPreview: r,
                                vehicle: l,
                                tankReward: D,
                                footerAnimationDelayCount: C,
                                isFirstLaunch: E,
                                firstLaunchReward: A,
                                onBackToPortal: t,
                            }),
                        );
                    };
                engine.whenReady.then(() => {
                    i().render(
                        a().createElement(h, null, a().createElement(Rn, null)),
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
        (__webpack_require__.O = (u, e, t, n) => {
            if (!e) {
                var a = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [e, t, n] = deferred[s], r = !0, i = 0; i < e.length; i++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[i]))
                            ? e.splice(i--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
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
        (__webpack_require__.j = 319),
        (() => {
            var u = { 319: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var n,
                        a,
                        [r, i, o] = t,
                        s = 0;
                    if (r.some((e) => 0 !== u[e])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (e && e(t); s < r.length; s++)
                        (a = r[s]), __webpack_require__.o(u, a) && u[a] && u[a][0](), (u[a] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [107], () => __webpack_require__(7935));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
