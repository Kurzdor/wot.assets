(() => {
    'use strict';
    var __webpack_modules__ = {
            527: (u, e, t) => {
                t.r(e),
                    t.d(e, { mouse: () => c, off: () => s, on: () => i, onResize: () => r, onScaleUpdated: () => o });
                var n = t(2472),
                    a = t(1176);
                const r = (0, n.E)('clientResized'),
                    o = (0, n.E)('self.onScaleUpdated'),
                    i = (u, e) => engine.on(u, e),
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
                                        o = l[e]((u) => t([u, 'outside']));
                                    function i(u) {
                                        t([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, i),
                                        n(),
                                        () => {
                                            a &&
                                                (o(),
                                                window.removeEventListener(r, i),
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
                        getMouseGlobalPosition: () => o,
                        getSize: () => r,
                        graphicsQuality: () => i,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    });
                var n = t(527),
                    a = t(2493);
                function r(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function o(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const i = {
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
                t.d(e, { ZP: () => o });
                var n = t(5959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(a).reduce((u, e) => ((u[e] = () => (0, n.playSound)(a[e])), u), {}),
                    o = { play: Object.assign({}, r, { sound: n.playSound }), setRTPC: n.setRTPC };
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
                        addPreloadTexture: () => i,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => w,
                        events: () => r.U,
                        extraSize: () => f,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => b,
                        getScale: () => m,
                        getSize: () => d,
                        getViewGlobalPosition: () => _,
                        isEventHandled: () => g,
                        isFocused: () => h,
                        pxToRem: () => C,
                        remToPx: () => D,
                        resize: () => A,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => B,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => y,
                    });
                var n = t(3722),
                    a = t(6112),
                    r = t(6538),
                    o = t(8566);
                function i(u) {
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
                function d(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function A(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function _(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: D(e.x), y: D(e.y) };
                }
                function F() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function m() {
                    return viewEnv.getScale();
                }
                function C(u) {
                    return viewEnv.pxToRem(u);
                }
                function D(u) {
                    return viewEnv.remToPx(u);
                }
                function B(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function h() {
                    return viewEnv.isFocused();
                }
                function p() {
                    return viewEnv.setEventHandled();
                }
                function g() {
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
                    o = 32,
                    i = 64,
                    s = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const r = e.args,
                                o = (function (u, e) {
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
                                      Object.assign({ __Type: t, type: u }, o, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var a;
                    },
                    l = {
                        close(u) {
                            s('popover' === u ? a : o);
                        },
                        minimize() {
                            s(i);
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
                t.d(e, { Sw: () => r.Z, B3: () => i.B3, Z5: () => o.Z5, B0: () => i.B0, ry: () => s.ry });
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
                var o = t(8613),
                    i = t(4251),
                    s = t(8072),
                    l = t(7572);
                const c = a.instance,
                    E = {
                        DataTracker: r.Z,
                        ViewModel: l.Z,
                        ViewEventType: i.B0,
                        NumberFormatType: i.B3,
                        RealFormatType: i.Gr,
                        TimeFormatType: i.lf,
                        DateFormatType: i.kH,
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
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
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
                t.d(e, { B0: () => n, B3: () => a, Gr: () => r, kH: () => i, lf: () => o }),
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
                    o = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    i = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
            },
            8072: (u, e, t) => {
                t.d(e, {
                    Eu: () => c,
                    KE: () => C,
                    Kv: () => s,
                    P3: () => m,
                    SU: () => p,
                    SW: () => _,
                    Sy: () => A,
                    VM: () => g,
                    c9: () => E,
                    ry: () => l,
                    uM: () => D,
                    uk: () => F,
                    wU: () => B,
                    wv: () => d,
                });
                var n = t(5521),
                    a = t(3138),
                    r = t(4251);
                const o = ['args'];
                function i(u, e, t, n, a, r, o) {
                    try {
                        var i = u[r](o),
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
                                        var r = u.apply(e, t);
                                        function o(u) {
                                            i(r, n, a, o, s, 'next', u);
                                        }
                                        function s(u) {
                                            i(r, n, a, o, s, 'throw', u);
                                        }
                                        o(void 0);
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
                                })(e, o);
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
                    d = (u) => E(r.B0.MOVE, { isMouseEvent: !0, on: u }),
                    A = () => E(r.B0.CLOSE),
                    _ = () => E(r.B0.POP_OVER, { on: !1 }),
                    F = (u, e, t = 0) => {
                        E(r.B0.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                    },
                    m = (u, e, t, n, o = R.invalid('resId'), i) => {
                        const l = a.O.view.getViewGlobalPosition(),
                            c = t.getBoundingClientRect(),
                            d = c.x,
                            A = c.y,
                            _ = c.width,
                            F = c.height,
                            m = {
                                x: a.O.view.pxToRem(d) + l.x,
                                y: a.O.view.pxToRem(A) + l.y,
                                width: a.O.view.pxToRem(_),
                                height: a.O.view.pxToRem(F),
                            };
                        E(r.B0.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: u,
                            decoratorID: n || R.invalid('resId'),
                            targetID: o,
                            direction: e,
                            bbox: s(m),
                            on: !0,
                            args: i,
                        });
                    },
                    C = () => viewEnv.isWindowShownByViewEvent(r.B0.TOOLTIP),
                    D = () => viewEnv.isWindowShownByViewEvent(r.B0.CONTEXT_MENU),
                    B = () => viewEnv.isWindowShownByViewEvent(r.B0.POP_OVER),
                    h = (u, e) => {
                        u.keyCode === n.n.ESCAPE && e();
                    },
                    p = (u) => {
                        h(u, A);
                    },
                    g = (u) => {
                        const e = (e) => h(e, u);
                        return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
                    };
            },
            875: (u, e, t) => {
                var n = t(6179),
                    a = t.n(n),
                    r = t(493),
                    o = t.n(r);
                const i = (u, e, t) =>
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
                const d = s.O.client.getSize('rem'),
                    A = d.width,
                    _ = d.height,
                    F = Object.assign({ width: A, height: _ }, E(A, _, l)),
                    m = (0, n.createContext)(F),
                    C = ['children'];
                const D = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(u);
                            for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                            return a;
                        })(u, C);
                    const a = (0, n.useContext)(m),
                        r = a.extraLarge,
                        o = a.large,
                        s = a.medium,
                        l = a.small,
                        c = a.extraSmall,
                        E = a.extraLargeWidth,
                        d = a.largeWidth,
                        A = a.mediumWidth,
                        _ = a.smallWidth,
                        F = a.extraSmallWidth,
                        D = a.extraLargeHeight,
                        B = a.largeHeight,
                        h = a.mediumHeight,
                        p = a.smallHeight,
                        g = a.extraSmallHeight,
                        v = { extraLarge: D, large: B, medium: h, small: p, extraSmall: g };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && r) return e;
                        if (t.large && o) return e;
                        if (t.medium && s) return e;
                        if (t.small && l) return e;
                        if (t.extraSmall && c) return e;
                    } else {
                        if (t.extraLargeWidth && E) return i(e, t, v);
                        if (t.largeWidth && d) return i(e, t, v);
                        if (t.mediumWidth && A) return i(e, t, v);
                        if (t.smallWidth && _) return i(e, t, v);
                        if (t.extraSmallWidth && F) return i(e, t, v);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && D) return e;
                            if (t.largeHeight && B) return e;
                            if (t.mediumHeight && h) return e;
                            if (t.smallHeight && p) return e;
                            if (t.extraSmallHeight && g) return e;
                        }
                    }
                    return null;
                };
                D.defaultProps = {
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
                (0, n.memo)(D);
                const B = (u) => {
                        const e = (0, n.useRef)(!1);
                        e.current || (u(), (e.current = !0));
                    },
                    h = ({ children: u }) => {
                        const e = (0, n.useContext)(m),
                            t = (0, n.useState)(e),
                            r = t[0],
                            o = t[1],
                            i = (0, n.useCallback)((u, e) => {
                                const t = s.O.view.pxToRem(u),
                                    n = s.O.view.pxToRem(e);
                                o(Object.assign({ width: t, height: n }, E(t, n, l)));
                            }, []),
                            c = (0, n.useCallback)(() => {
                                const u = s.O.client.getSize('px');
                                i(u.width, u.height);
                            }, [i]);
                        B(() => {
                            s.O.client.events.on('clientResized', i), s.O.client.events.on('self.onScaleUpdated', c);
                        }),
                            (0, n.useEffect)(
                                () => () => {
                                    s.O.client.events.off('clientResized', i),
                                        s.O.client.events.off('self.onScaleUpdated', c);
                                },
                                [i, c],
                            );
                        const d = (0, n.useMemo)(() => Object.assign({}, r), [r]);
                        return a().createElement(m.Provider, { value: d }, u);
                    };
                let p, g;
                !(function (u) {
                    (u.HUNTER = 'hunter'), (u.BOSS = 'boss'), (u.TANK = 'tank');
                })(p || (p = {})),
                    (function (u) {
                        (u.HUNTER = 'hunter'), (u.BOSS = 'boss');
                    })(g || (g = {}));
                var v = t(1281);
                let b;
                function w(u, e) {
                    return u.replace(/\{\w+\}/g, (u) => String(e[u.slice(1, -1)]));
                }
                !(function (u) {
                    (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                })(b || (b = {}));
                const f = (u) => u.replace(/&nbsp;/g, ' '),
                    y = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    x = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    k = (u, e, t = b.left) => u.split(e).reduce(t === b.left ? y : x, []),
                    T = (() => {
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
                    S = ['zh_cn', 'zh_sg', 'zh_tw'],
                    L = (u, e = b.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (S.includes(t)) return T(u);
                        if ('ja' === t) {
                            return (0, v.D4)()
                                .parse(u)
                                .map((u) => f(u));
                        }
                        return ((u, e = b.left) => {
                            let t = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                a = f(u);
                            return k(a, /( )/, e).forEach((u) => (t = t.concat(k(u, n, b.left)))), t;
                        })(u, e);
                    };
                var O = t(7491),
                    N = t(8613);
                Date.now(), N.Ew.getRegionalDateTime, N.Ew.getFormattedDateTime;
                const M = (u = 1) => {
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
                    P = (u, e) => u.split('.').reduce((u, e) => u && u[e], e),
                    I = (u) => u && 'ArrayItem' === u.__proto__.constructor.name,
                    H = (u, e) => (u.length > 0 ? `${u}.${e}` : e),
                    W = (u) =>
                        ((u, e) =>
                            u.split('.').reduce((u, t) => {
                                const n = P(`${u}.${t}`, window);
                                return I(n) ? e(u, t, n) : `${u}.${t}`;
                            }))(u, (u, e) => `${u}.${e}.value`),
                    U = (u) => {
                        const e = ((u) => {
                                const e = M(),
                                    t = e.caller,
                                    n = e.resId,
                                    a = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: a, modelPath: H(a, u || ''), resId: n };
                            })(),
                            t = e.modelPrefix,
                            n = u.split('.');
                        if (n.length > 0) {
                            const u = [n[0]];
                            return (
                                n.reduce((e, n) => {
                                    const a = P(H(t, `${e}.${n}`), window);
                                    return I(a) ? (u.push(a.id), `${e}.${n}.value`) : (u.push(n), `${e}.${n}`);
                                }),
                                u.reduce((u, e) => u + '.' + e)
                            );
                        }
                        return '';
                    },
                    $ = O.Sw.instance;
                let j;
                !(function (u) {
                    (u.None = 'None'), (u.Shallow = 'Shallow'), (u.Deep = 'Deep');
                })(j || (j = {}));
                const V = (u = 'model', e = j.Deep) => {
                    const t = (0, n.useState)(0),
                        a = (t[0], t[1]),
                        r = (0, n.useMemo)(() => M(), []),
                        o = r.caller,
                        i = r.resId,
                        s = (0, n.useMemo)(
                            () => (window.__feature && window.__feature !== o ? `subViews.${o}.${u}` : u),
                            [o, u],
                        ),
                        l = (0, n.useState)(() =>
                            ((u) => {
                                const e = P(u, window);
                                for (const u in e) 'function' == typeof e[u] && (e[u] = e[u].bind(e));
                                return I(e) ? e.value : e;
                            })(W(s)),
                        ),
                        c = l[0],
                        E = l[1],
                        d = (0, n.useRef)(-1);
                    return (
                        B(() => {
                            if (
                                ('boolean' == typeof e &&
                                    ((e = e ? j.Deep : j.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                e !== j.None)
                            ) {
                                const t = (u) => {
                                        ((u) => u && 'CoherentArrayProxy' === u.__proto__.constructor.name)(u) &&
                                        e === j.Deep
                                            ? (u === c && a((u) => u + 1), E(u))
                                            : E(Object.assign([], u));
                                    },
                                    n = U(u);
                                d.current = $.addCallback(n, t, i, e === j.Deep);
                            }
                        }),
                        (0, n.useEffect)(() => {
                            if (e !== j.None)
                                return () => {
                                    $.removeCallback(d.current, i);
                                };
                        }, [i, e]),
                        c
                    );
                };
                O.Sw.instance;
                var G = t(6483),
                    K = t.n(G),
                    z = t(5521);
                const q = (u) => {
                    console.error(u.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function Y(u = z.n.NONE, e = q, t = !1, a = !1) {
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
                let X;
                !(function (u) {
                    (u.PRIMARY = 'G171_E77'),
                        (u.SECONDARY = 'G166_LKpz_70_K'),
                        (u.TERTIARY = 'Cz14_Skoda_T_56_WT24_3Dst');
                })(X || (X = {}));
                const Z = () => {
                    const u = (() => {
                            const u = (0, n.useContext)(m),
                                e = u.small,
                                t = u.medium,
                                a = u.large,
                                r = u.extraLarge,
                                o = r || a,
                                i = o || t;
                            return { isMediaSmall: i || e, isMediaMedium: i, isMediaLarge: o, isMediaExtraLarge: r };
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
                            o = u.type,
                            i = u.classNames,
                            s = u.onMouseEnter,
                            l = u.onMouseLeave,
                            c = u.onMouseDown,
                            E = u.onMouseUp,
                            d =
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
                            A = K()(J.base, J[`base__${o}`], J[`base__${r}`], null == i ? void 0 : i.base),
                            _ = K()(J.icon, J[`icon__${o}`], J[`icon__${r}`], null == i ? void 0 : i.icon),
                            F = K()(J.glow, null == i ? void 0 : i.glow),
                            m = K()(J.caption, J[`caption__${o}`], null == i ? void 0 : i.caption),
                            C = K()(J.goto, null == i ? void 0 : i.goto);
                        return a().createElement(
                            'div',
                            eu(
                                {
                                    className: A,
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
                            'info' !== o && a().createElement('div', { className: J.shine }),
                            a().createElement('div', { className: _ }, a().createElement('div', { className: F })),
                            a().createElement('div', { className: m }, e),
                            n && a().createElement('div', { className: C }, n),
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
                    ou = ({ binding: u, text: e = '', classMix: t, alignment: r = b.left, formatWithBrackets: o }) => {
                        if (null === e) return console.error("FormatText was supplied with 'null'"), null;
                        const i = o && u ? w(e, u) : e;
                        return a().createElement(
                            n.Fragment,
                            null,
                            i.split('\n').map((e, o) =>
                                a().createElement(
                                    'div',
                                    { className: K()(ru, t), key: `${e}-${o}` },
                                    ((u, e, t) =>
                                        u.split(/%\((.*?)\)(?:[sd])?/g).map((u) => (t && u in t ? t[u] : L(u, e))))(
                                        e,
                                        r,
                                        u,
                                    ).map((u, e) => a().createElement(n.Fragment, { key: `${e}-${u}` }, u)),
                                ),
                            ),
                        );
                    },
                    iu = [
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
                                    type: O.B0.TOOLTIP,
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
                            o = u.onMouseLeave,
                            i = u.onMouseDown,
                            s = u.onClick,
                            l = u.ignoreShowDelay,
                            c = void 0 !== l && l,
                            E = u.ignoreMouseClick,
                            d = void 0 !== E && E,
                            A = u.decoratorId,
                            _ = void 0 === A ? 0 : A,
                            F = u.isEnabled,
                            m = void 0 === F || F,
                            C = u.targetId,
                            D = void 0 === C ? 0 : C,
                            B = u.onShow,
                            h = u.onHide,
                            p = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(u);
                                for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                return a;
                            })(u, iu);
                        const g = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, n.useMemo)(() => D || M().resId, [D]),
                            b = (0, n.useCallback)(() => {
                                (g.current.isVisible && g.current.timeoutId) ||
                                    (lu(t, _, { isMouseEvent: !0, on: !0, arguments: su(a) }, v),
                                    B && B(),
                                    (g.current.isVisible = !0));
                            }, [t, _, a, v, B]),
                            w = (0, n.useCallback)(() => {
                                if (g.current.isVisible || g.current.timeoutId) {
                                    const u = g.current.timeoutId;
                                    u > 0 && (clearTimeout(u), (g.current.timeoutId = 0)),
                                        lu(t, _, { on: !1 }, v),
                                        g.current.isVisible && h && h(),
                                        (g.current.isVisible = !1);
                                }
                            }, [t, _, v, h]),
                            f = (0, n.useCallback)((u) => {
                                g.current.isVisible &&
                                    ((g.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (g.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(g.current.prevTarget) && w();
                                    }, 200)));
                            }, []);
                        (0, n.useEffect)(() => {
                            const u = g.current.hideTimerId;
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
                                                      ((g.current.timeoutId = window.setTimeout(b, c ? 100 : 400)),
                                                      r && r(u),
                                                      y && y(u));
                                              }),
                                          onMouseLeave: ((u) => (e) => {
                                              w(), null == o || o(e), null == u || u(e);
                                          })(e.props.onMouseLeave),
                                          onClick: ((u) => (e) => {
                                              !1 === d && w(), null == s || s(e), null == u || u(e);
                                          })(e.props.onClick),
                                          onMouseDown: ((u) => (e) => {
                                              !1 === d && w(), null == i || i(e), null == u || u(e);
                                          })(e.props.onMouseDown),
                                      },
                                      p,
                                  ),
                              )
                            : e;
                        var y;
                    },
                    Eu = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function du() {
                    return (
                        (du =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        du.apply(this, arguments)
                    );
                }
                const Au = R.views.common.tooltip_window.simple_tooltip_content,
                    _u = (u) => {
                        let e = u.children,
                            t = u.body,
                            r = u.header,
                            o = u.note,
                            i = u.alert,
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
                            const u = Object.assign({}, s, { body: t, header: r, note: o, alert: i });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [i, t, r, o, s]);
                        return a().createElement(
                            cu,
                            du(
                                {
                                    contentId:
                                        ((E = null == s ? void 0 : s.hasHtmlContent),
                                        E ? Au.SimpleTooltipHtmlContent('resId') : Au.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            e,
                        );
                        var E;
                    },
                    Fu = ['children'];
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
                const Cu = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(u);
                                for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                return a;
                            })(u, Fu);
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
                    Du = ['tooltipType'],
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
                let pu;
                !(function (u) {
                    (u.Simple = 'simple'), (u.Backport = 'backport'), (u.Base = 'base');
                })(pu || (pu = {}));
                const gu = (u) => {
                        u.tooltipType;
                        return hu(u, Du);
                    },
                    vu = (u) => {
                        let e = u.children,
                            t = u.wrap,
                            n = hu(u, Bu);
                        const r = t ? a().createElement('div', null, e) : e;
                        return n.tooltipType === pu.Simple
                            ? a().createElement(_u, gu(n), r)
                            : ((u) => u.tooltipType === pu.Backport)(n)
                              ? a().createElement(Cu, gu(n), r)
                              : ((u) => u.tooltipType === pu.Base)(n)
                                ? a().createElement(cu, gu(n), r)
                                : e;
                    },
                    bu = 'BuyButton_base_1e',
                    wu = 'BuyButton_image_44',
                    fu = 'BuyButton_imageClickArea_6b',
                    yu = 'BuyButton_text_8e',
                    xu = 'BuyButton_CNTextWrapper_16',
                    Ru = 'BuyButton_CNText_a9',
                    ku = R.strings.event.WtEventPortals,
                    Tu = ({ onBuyButtonClick: u, availableLootBoxesPurchase: e }) => {
                        const t = (0, n.useCallback)(() => {
                                u(), Q('play');
                            }, [u]),
                            r = (0, n.useCallback)(() => {
                                Q('highlight');
                            }, []),
                            o = (0, n.useMemo)(() => ({ number: e }), [e]),
                            i = e >= 0,
                            s = (0, n.useMemo)(
                                () =>
                                    i
                                        ? {
                                              tooltipType: pu.Base,
                                              contentId:
                                                  R.views.lobby.wt_event.tooltips.WtEventBuyLootBoxesTooltipView(
                                                      'resId',
                                                  ),
                                          }
                                        : { tooltipType: pu.Simple, body: ku.buyButtonTooltip() },
                                [i],
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
                                a().createElement('div', { className: yu }, ku.buyButton()),
                                i &&
                                    a().createElement(
                                        'div',
                                        { className: xu },
                                        a().createElement(ou, { text: ku.buyButtonCNText(), binding: o, classMix: Ru }),
                                    ),
                            ),
                        );
                    },
                    Su = 'BackButton_base_24',
                    Lu = ({ onClick: u, goto: e }) =>
                        a().createElement(
                            'div',
                            { className: Su },
                            a().createElement(tu, {
                                caption: R.strings.menu.viewHeader.backBtn.label(),
                                type: 'back',
                                side: 'left',
                                onClick: u,
                                goto: e,
                            }),
                        ),
                    Ou = 'Gradient_base_42',
                    Nu = 'Gradient_base__hasAnimation_11',
                    Mu = ({ hasAnimation: u = !1 }) => {
                        const e = K()(Ou, u && Nu);
                        return a().createElement('div', { className: e });
                    },
                    Pu = 100,
                    Iu = 'DelayedAnimationWrapper_base_e3',
                    Hu = ({ animationDelayStepsCount: u = 1, children: e }) =>
                        a().createElement('div', { className: Iu, style: { animationDelay: u * Pu + 'ms' } }, e);
                let Wu, Uu, $u, ju;
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
                    })($u || ($u = {})),
                    (function (u) {
                        (u.Center = 'center'), (u.Bottom = 'bottom');
                    })(ju || (ju = {}));
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
                            o = u.isDisabled,
                            i = void 0 !== o && o,
                            s = u.isAlert,
                            l = void 0 !== s && s,
                            c = u.size,
                            E = void 0 === c ? Uu.medium : c,
                            d = u.type,
                            A = void 0 === d ? $u.primary : d,
                            _ = u.soundHover,
                            F = void 0 === _ ? 'highlight' : _,
                            m = u.soundClick,
                            C = void 0 === m ? 'play' : m,
                            D = u.onMouseEnter,
                            B = u.onMouseLeave,
                            h = u.onMouseUp,
                            p = u.onMouseDown,
                            g = u.onClick,
                            v = u.onChange,
                            b = u.onFocus,
                            w = u.onBlur,
                            f = u.text,
                            y = u.contentStyles,
                            x = u.children,
                            R = u.alignment,
                            k = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(u);
                                for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                return a;
                            })(u, Gu);
                        const T = (0, n.useState)(!1),
                            S = T[0],
                            L = T[1],
                            O = (0, n.useState)(!1),
                            N = (O[0], O[1]),
                            M = (0, n.useCallback)(
                                (u) => {
                                    i || (v && v(), g && g(u));
                                },
                                [i, v, g],
                            ),
                            P = (0, n.useCallback)(
                                (u) => {
                                    const e = u.button === Wu.LEFT;
                                    i || (e && L(!0), e && p && p(u), C && Q(C));
                                },
                                [i, p, C],
                            ),
                            I = (0, n.useCallback)(
                                (u) => {
                                    i || (L(!1), h && h(u));
                                },
                                [i, h],
                            ),
                            H = (0, n.useCallback)(
                                (u) => {
                                    i || (D && D(u), F && Q(F));
                                },
                                [i, D, F],
                            ),
                            W = (0, n.useCallback)(
                                (u) => {
                                    i || (L(!1), B && B(u));
                                },
                                [i, B],
                            ),
                            U = (0, n.useCallback)(
                                (u) => {
                                    i || (N(!0), b && b(u));
                                },
                                [i, b],
                            ),
                            $ = (0, n.useCallback)(
                                (u) => {
                                    i || (N(!1), w && w(u));
                                },
                                [i, w],
                            ),
                            j = a().createElement(
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
                                    className: K()(Vu.base, Vu[`base__${E}`], Vu[`base__${A}`], {
                                        [Vu.base__checked]: r,
                                        [Vu.base__disabled]: i,
                                        [Vu.base__mouseDown]: S,
                                        [Vu.base__alert]: l,
                                        [Vu.base__center]: R === ju.Center,
                                        [Vu.base__bottom]: R === ju.Bottom,
                                    }),
                                    onClick: M,
                                    onMouseEnter: H,
                                    onMouseLeave: W,
                                    onMouseDown: P,
                                    onMouseUp: I,
                                    onFocus: U,
                                    onBlur: $,
                                },
                                k,
                            ),
                            a().createElement(
                                'div',
                                { className: Vu.input },
                                a().createElement('div', { className: Vu.alertOverlay }),
                                a().createElement('div', { className: Vu.inputHoverOverlay }),
                                a().createElement('div', { className: Vu.highlight }),
                            ),
                            a().createElement('div', { className: Vu.checkmark }),
                            ((f || x) && j) || null,
                        );
                    },
                    qu = 'AnimationCheckbox_animationCheckbox_05',
                    Yu = ({ isChecked: u, onClick: e }) =>
                        a().createElement(
                            'div',
                            { className: qu },
                            a().createElement(zu, {
                                text: R.strings.event.WtEventPortals.inside.showAnimation(),
                                size: Uu.large,
                                onClick: e,
                                isChecked: u,
                            }),
                        ),
                    Xu = 'AwardWrapper_base_51',
                    Zu = 'AwardWrapper_title_b2',
                    Qu = 'AwardWrapper_content_82',
                    Ju = 'AwardWrapper_currencyWrapper_35',
                    ue = 'AwardWrapper_currencyBgWrapper_eb',
                    ee = 'AwardWrapper_backgroundSeperator_6c',
                    te = (u, e = 'integral') => {
                        let t;
                        if ('gold' === e) t = O.B3.GOLD;
                        else t = O.B3.INTEGRAL;
                        return void 0 === u ? '' : O.Z5.getNumberFormat(u, t);
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
                    oe = 'CurrencyBalance_currency_b6',
                    ie = 'CurrencyBalance_currency__credit_7f',
                    se = 'CurrencyBalance_currency__gold_27',
                    le = 'CurrencyBalance_currency__crystal_7d',
                    ce = 'CurrencyBalance_currency__freexp_06',
                    Ee = 'CurrencyBalance_errorText_b7',
                    de = { tooltipId: ae.goldStats },
                    Ae = { tooltipId: ae.creditsStats },
                    _e = { tooltipId: ae.crystalInfo },
                    Fe = { tooltipId: ae.freeXpInfo },
                    me = '- - -',
                    Ce = ({ credits: u, golds: e, crystals: t, freexp: n, isWalletAvailable: r }) =>
                        a().createElement(
                            'div',
                            { className: re },
                            a().createElement(
                                Cu,
                                { args: _e },
                                a().createElement(
                                    'span',
                                    { className: K()(oe, le) },
                                    r
                                        ? a().createElement(ne, { value: t, format: 'integral' })
                                        : a().createElement('div', { className: Ee }, me),
                                ),
                            ),
                            a().createElement(
                                Cu,
                                { args: de },
                                a().createElement(
                                    'span',
                                    { className: K()(oe, se) },
                                    r
                                        ? a().createElement(ne, { value: e, format: 'gold' })
                                        : a().createElement('div', { className: Ee }, me),
                                ),
                            ),
                            a().createElement(
                                Cu,
                                { args: Ae },
                                a().createElement(
                                    'span',
                                    { className: K()(oe, ie) },
                                    r
                                        ? a().createElement(ne, { value: u, format: 'integral' })
                                        : a().createElement('div', { className: Ee }, me),
                                ),
                            ),
                            a().createElement(
                                Cu,
                                { args: Fe },
                                a().createElement(
                                    'span',
                                    { className: K()(oe, ce) },
                                    r
                                        ? a().createElement(ne, { value: n, format: 'integral' })
                                        : a().createElement('div', { className: Ee }, me),
                                ),
                            ),
                        );
                let De, Be, he;
                !(function (u) {
                    (u[(u.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = l.small.width)] = 'Small'),
                        (u[(u.Medium = l.medium.width)] = 'Medium'),
                        (u[(u.Large = l.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                })(De || (De = {})),
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
                const pe = () => {
                    const u = (0, n.useContext)(m),
                        e = u.width,
                        t = u.height,
                        a = ((u) => {
                            switch (!0) {
                                case u.extraLarge:
                                    return De.ExtraLarge;
                                case u.large:
                                    return De.Large;
                                case u.medium:
                                    return De.Medium;
                                case u.small:
                                    return De.Small;
                                case u.extraSmall:
                                    return De.ExtraSmall;
                                default:
                                    return console.error('Unreachable media context resolution'), De.ExtraSmall;
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
                        o = ((u) => {
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
                    return { mediaSize: a, mediaWidth: r, mediaHeight: o, remScreenWidth: e, remScreenHeight: t };
                };
                var ge = t(6112);
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
                            o = u.autoplay,
                            i = void 0 !== o && o,
                            l = u.style,
                            c = u.loop,
                            E = void 0 !== c && c,
                            d = u.isPrebufferKeyframes,
                            A = u.keyframesNameConfig,
                            _ = u.onClick,
                            F = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(u);
                                for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                return a;
                            })(u, be);
                        const m = e,
                            C = (0, n.useRef)(null);
                        var D;
                        return (
                            (D = () =>
                                s.O.view.events.onDisplayChanged((u, e) => {
                                    var t, n;
                                    e === ge.W.hidden && (null == (t = C.current) || t.pause()),
                                        e === ge.W.shown && (null == (n = C.current) || n.play());
                                })),
                            (0, n.useEffect)(D, []),
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
                                        const u = C.current;
                                        if (!m || !u || !d)
                                            return void (null != u && u.cohFastSeek && (u.cohFastSeek = !1));
                                        const e = u.cohGetKeyframeTimestamps();
                                        e.length > 0
                                            ? ((u.cohFastSeek = !0),
                                              e.map((e) => {
                                                  null == u || u.cohPrebufferKeyframe(e);
                                              }))
                                            : console.warn("Can't prebuffered keyframes, keyframes was not found");
                                    }),
                                [d, m],
                            ),
                            (0, n.useEffect)(() => {
                                if (m && C.current) {
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
                                                    if (C.current) {
                                                        const t = C.current,
                                                            n = t.currentTime,
                                                            a = t.duration;
                                                        if (
                                                            (e !== n &&
                                                                (u.changeTimeHandlers.forEach((u) =>
                                                                    u({ currentTime: n, duration: a }),
                                                                ),
                                                                (e = n)),
                                                            C.current.paused || !m || !d)
                                                        )
                                                            return;
                                                        const r = C.current.cohGetKeyframeTimestamps();
                                                        r.forEach((e, t) => {
                                                            n > r[t] - 0.02 &&
                                                                n < r[t] &&
                                                                u.changeKeyframeHandlers.forEach((u) => {
                                                                    const n = Object.keys(null != A ? A : {})[t];
                                                                    return u({
                                                                        time: e,
                                                                        name: `${A ? n : `Point_${t}`}`,
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
                                            return null == (u = C.current) ? void 0 : u.currentTime;
                                        },
                                        r = () => {
                                            var u;
                                            return null == (u = C.current) ? void 0 : u.duration;
                                        },
                                        o = (u) => {
                                            var e, t, n;
                                            C.current &&
                                                (C.current.currentTime =
                                                    ((e = 0),
                                                    (t = C.current.duration),
                                                    (n = u) < e ? e : n > t ? t : n));
                                        },
                                        i = () => {
                                            var u;
                                            return null == (u = C.current) ? void 0 : u.play();
                                        },
                                        s = () => {
                                            var u;
                                            return null == (u = C.current) ? void 0 : u.pause();
                                        },
                                        l = () => {
                                            s(), o(0);
                                        },
                                        c = () => {
                                            var u, e;
                                            return null !=
                                                (u = null == (e = C.current) ? void 0 : e.cohGetKeyframeTimestamps())
                                                ? u
                                                : [];
                                        },
                                        E = (u) => {
                                            o(u), i();
                                        },
                                        _ = (u) => {
                                            o(u), s();
                                        },
                                        F = () => {
                                            (u.changeTimeHandlers = []),
                                                (u.changeKeyframeHandlers = []),
                                                null == u.changeTimeLoop || u.changeTimeLoop();
                                        },
                                        D = (u, e) => {
                                            var t;
                                            return (
                                                null == (t = C.current) || t.addEventListener(u, e),
                                                () => {
                                                    var t;
                                                    return null == (t = C.current)
                                                        ? void 0
                                                        : t.removeEventListener(u, e);
                                                }
                                            );
                                        },
                                        B = (u, e) => {
                                            var t;
                                            return (
                                                null == (t = C.current) || t.removeEventListener(u, e),
                                                () => {
                                                    var t;
                                                    return null == (t = C.current)
                                                        ? void 0
                                                        : t.removeEventListener(u, e);
                                                }
                                            );
                                        };
                                    return (
                                        (m.current = {
                                            on: D,
                                            off: B,
                                            play: i,
                                            pause: s,
                                            stop: l,
                                            cleanup: F,
                                            getCurrentTime: a,
                                            getDuration: r,
                                            getCachedKeyframes: c,
                                            goToAndPlay: E,
                                            goToAndStop: _,
                                            setCurrentTime: o,
                                            domRef: C.current,
                                            onChangeTime: t,
                                            onKeyframes: n,
                                        }),
                                        () => {
                                            F(), (m.current = null);
                                        }
                                    );
                                }
                            }, [A, m, d]),
                            (0, n.useEffect)(() => {
                                C.current && i && C.current.play();
                            }, [i, E]),
                            (0, n.useEffect)(() => {
                                if (C.current)
                                    return () => {
                                        C.current && C.current.pause();
                                    };
                            }, []),
                            a().createElement(
                                'video',
                                we({ src: t, className: r, style: l, loop: E, ref: C, onClick: _ }, F),
                            )
                        );
                    }),
                    ye = (0, n.memo)(fe),
                    xe = 'BackgroundVideo_base_9b',
                    Re = 'BackgroundVideo_video_f1',
                    ke = 'BackgroundVideo_video__idle_7d',
                    Te = 'BackgroundVideo_video__hidden_92';
                let Se;
                !(function (u) {
                    (u[(u.KEY_USED = 0)] = 'KEY_USED'), (u[(u.REROLL = 1)] = 'REROLL');
                })(Se || (Se = {}));
                const Le = 1.6,
                    Oe = (u, e = 150, t = 400, n = 1e3) => ({ appear: t + (e * u + 1), enter: n }),
                    Ne = (u) => (e, t) =>
                        e / t >= 2.4000000000000004
                            ? u(viewEnv.remToPx(t) * Le, viewEnv.remToPx(t), e, t)
                            : u(viewEnv.remToPx(e), 0.625 * viewEnv.remToPx(e), e, t),
                    Me = viewEnv.remToPx(900),
                    Pe = { width: Me * Le, height: Me },
                    Ie = viewEnv.remToPx(1200),
                    He = { width: Ie * Le, height: Ie },
                    We = Ne((u, e, t, n) =>
                        u < Pe.width
                            ? Pe
                            : t > l.medium.width && n > l.medium.height && u < He.width
                              ? He
                              : { width: u, height: e },
                    ),
                    Ue = viewEnv.remToPx(700),
                    $e = { width: Ue * Le, height: Ue },
                    je =
                        (Ne((u, e) => (u < $e.width ? $e : { width: u, height: e })),
                        (u) => {
                            const e = R.videos.wt;
                            return ((u, e) => !['$dyn', '$num', '$plural'].includes(u) && u in e)(u, e)
                                ? e[u]()
                                : (console.error(`key ${String(u)} not found.`, e), '');
                        });
                let Ve;
                var Ge;
                !(function (u) {
                    (u.PRIMARY = 'G171_E77'),
                        (u.SECONDARY = 'Cz14_Skoda_T_56_WT24_3Dst'),
                        (u.TERTIARY = 'G166_LKpz_70_K');
                })(Ve || (Ve = {})),
                    (function (u) {
                        (u.LOADING = 'loading'), (u.INTRO = 'intro'), (u.DELAY = 'delay'), (u.IDLE = 'idle');
                    })(Ge || (Ge = {}));
                const Ke = { [p.HUNTER]: 'lootbox_hunter', [p.BOSS]: 'lootbox_boss' },
                    ze = { [p.HUNTER]: 'lootbox_hunter_idle', [p.BOSS]: 'lootbox_boss_idle' },
                    qe = {
                        [Ve.PRIMARY]: 'boss_1_introduction',
                        [Ve.SECONDARY]: 'boss_2_introduction',
                        [Ve.TERTIARY]: 'boss_3_introduction',
                    },
                    Ye = { [Ve.PRIMARY]: 'boss_1_idle', [Ve.SECONDARY]: 'boss_2_idle', [Ve.TERTIARY]: 'boss_3_idle' },
                    Xe = ({
                        lootboxId: u,
                        showIntro: e = !1,
                        portalType: t,
                        vehicleType: r = Ve.PRIMARY,
                        onVideoComplete: o,
                        openingType: i = Se.KEY_USED,
                    }) => {
                        const s = pe().mediaWidth,
                            l = (0, n.useRef)(null),
                            c = (0, n.useRef)(null),
                            E = (0, n.useState)(`${Ke[p.HUNTER]}_${s}`),
                            d = E[0],
                            A = E[1],
                            _ = (0, n.useState)(`${Ke[p.HUNTER]}_${s}`),
                            F = _[0],
                            m = _[1],
                            C = (0, n.useState)(Ge.IDLE),
                            D = C[0],
                            B = C[1],
                            h = (0, n.useState)(!1),
                            g = h[0],
                            v = h[1],
                            b = (0, n.useCallback)(() => {
                                B(Ge.IDLE), o();
                            }, [o]);
                        (0, n.useEffect)(() => {
                            B(Ge.LOADING);
                        }, [u]),
                            (0, n.useEffect)(() => {
                                D === Ge.LOADING &&
                                    (g
                                        ? B(Ge.INTRO)
                                        : (B(Ge.DELAY),
                                          setTimeout(() => {
                                              b();
                                          }, 300)));
                            }, [D, g, b]),
                            (0, n.useEffect)(() => {
                                v(e && i === Se.KEY_USED);
                            }, [e, i]),
                            (0, n.useEffect)(() => {
                                switch (t) {
                                    case p.BOSS:
                                    case p.HUNTER:
                                        A(`${Ke[t]}_${s}`), m(`${ze[t]}_${s}`);
                                        break;
                                    case p.TANK:
                                        A(`${qe[r]}_${s}`), m(`${Ye[r]}_${s}`);
                                }
                            }, [t, r, s]),
                            (0, n.useEffect)(() => {
                                var u, e, t, n, a, r;
                                switch (D) {
                                    case Ge.IDLE:
                                        null == (u = c.current) || u.play(), null == (e = l.current) || e.stop();
                                        break;
                                    case Ge.INTRO:
                                        null == (t = c.current) || t.stop(),
                                            null == (n = l.current) || n.goToAndPlay(0);
                                        break;
                                    default:
                                        null == (a = c.current) || a.stop(), null == (r = l.current) || r.stop();
                                }
                            }, [D, d, F]);
                        const w = K()(Re, D !== Ge.INTRO && Te),
                            f = K()(Re, ke, D === Ge.INTRO && Te);
                        return a().createElement(
                            'div',
                            { className: xe, key: s },
                            a().createElement(ye, {
                                className: w,
                                ref: l,
                                src: je(d),
                                onEnded: b,
                                isPrebufferKeyframes: !0,
                            }),
                            a().createElement(ye, { className: f, ref: c, loop: !0, src: je(F) }),
                        );
                    },
                    Ze = R.strings.event.portalAward,
                    Qe = ({
                        children: u,
                        portalType: e,
                        vehicleType: t = X.PRIMARY,
                        isBoxesEnabled: r,
                        lootBoxesAnimationDelayCount: o,
                        onBuy: i,
                        onClose: s,
                        availableLootBoxesPurchase: l,
                        hasGradient: c = !1,
                        showFinalAnimation: E = !0,
                        isAnimated: d = !0,
                        onAnimationSettingClick: A,
                        launchId: _,
                        showCurrencyBalance: F = !1,
                        currentCrystals: m = 0,
                        currentGold: C = 0,
                        currentCredits: D = 0,
                        currentFreeXP: B = 0,
                        isWalletAvailable: h = !1,
                        openingType: g,
                    }) => {
                        const v = (0, n.useState)(!1),
                            b = v[0],
                            w = v[1];
                        var f;
                        (f = () => {
                            E && s();
                        }),
                            Y(z.n.ESCAPE, f),
                            (0, n.useEffect)(() => {
                                w(!1);
                            }, [_]);
                        const y = (0, n.useCallback)(() => (null == A ? void 0 : A()), [A]),
                            x = (0, n.useCallback)(() => {
                                w(!0);
                            }, []),
                            R = o + 1,
                            k = Z(),
                            T = K()(Xu, k),
                            S = !d || (b && c);
                        return a().createElement(
                            'div',
                            { className: T },
                            a().createElement(Xe, {
                                lootboxId: _,
                                onVideoComplete: x,
                                showIntro: d,
                                portalType: e,
                                vehicleType: t,
                                openingType: g,
                            }),
                            S && a().createElement(Mu, { hasAnimation: !0 }),
                            b &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: Zu }, Ze.title()),
                                    a().createElement('div', { className: Qu }, u),
                                ),
                            E &&
                                a().createElement(
                                    Hu,
                                    { animationDelayStepsCount: R },
                                    a().createElement(au, { onClose: s }),
                                    a().createElement(Lu, { onClick: s }),
                                    F &&
                                        a().createElement(
                                            'div',
                                            { className: Ju },
                                            a().createElement(
                                                'div',
                                                { className: ue },
                                                a().createElement(Ce, {
                                                    crystals: m,
                                                    golds: C,
                                                    credits: D,
                                                    freexp: B,
                                                    isWalletAvailable: h,
                                                }),
                                            ),
                                            a().createElement('div', { className: ee }),
                                        ),
                                    r &&
                                        e !== p.HUNTER &&
                                        a().createElement(Tu, { onBuyButtonClick: i, availableLootBoxesPurchase: l }),
                                    A && a().createElement(Yu, { isChecked: d, onClick: y }),
                                ),
                        );
                    },
                    Je = {
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
                let ut, et;
                !(function (u) {
                    (u.main = 'main'),
                        (u.primary = 'primary'),
                        (u.primaryGreen = 'primaryGreen'),
                        (u.primaryRed = 'primaryRed'),
                        (u.secondary = 'secondary'),
                        (u.ghost = 'ghost');
                })(ut || (ut = {})),
                    (function (u) {
                        (u.extraSmall = 'extraSmall'), (u.small = 'small'), (u.medium = 'medium'), (u.large = 'large');
                    })(et || (et = {}));
                const tt = ({
                    children: u,
                    size: e,
                    isFocused: t,
                    type: r,
                    disabled: o,
                    mixClass: i,
                    soundHover: s,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: E,
                    onMouseDown: d,
                    onMouseUp: A,
                    onMouseLeave: _,
                    onClick: F,
                }) => {
                    const m = (0, n.useRef)(null),
                        C = (0, n.useState)(t),
                        D = C[0],
                        B = C[1],
                        h = (0, n.useState)(!1),
                        p = h[0],
                        g = h[1];
                    return (
                        (0, n.useEffect)(() => {
                            function u(u) {
                                D && null !== m.current && !m.current.contains(u.target) && B(!1);
                            }
                            return (
                                document.addEventListener('mousedown', u),
                                () => {
                                    document.removeEventListener('mousedown', u);
                                }
                            );
                        }, [D]),
                        (0, n.useEffect)(() => {
                            B(t);
                        }, [t]),
                        a().createElement(
                            'div',
                            {
                                ref: m,
                                className: K()(
                                    Je.base,
                                    Je[`base__${r}`],
                                    o && Je.base__disabled,
                                    e && Je[`base__${e}`],
                                    D && Je.base__focus,
                                    p && Je.base__highlightActive,
                                    i,
                                ),
                                onMouseEnter: function (u) {
                                    o || (null !== s && Q(s), c && c(u));
                                },
                                onMouseMove: function (u) {
                                    E && E(u);
                                },
                                onMouseUp: function (u) {
                                    o || (A && A(u), g(!1));
                                },
                                onMouseDown: function (u) {
                                    o ||
                                        (null !== l && Q(l),
                                        d && d(u),
                                        t && (o || (m.current && (m.current.focus(), B(!0)))),
                                        g(!0));
                                },
                                onMouseLeave: function (u) {
                                    o || (_ && _(u), g(!1));
                                },
                                onClick: function (u) {
                                    o || (F && F(u));
                                },
                            },
                            r !== ut.ghost &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: Je.back }),
                                    a().createElement('span', { className: Je.texture }),
                                ),
                            a().createElement(
                                'span',
                                { className: K()(Je.state, Je.state__default) },
                                a().createElement('span', { className: Je.stateDisabled }),
                                a().createElement('span', { className: Je.stateHighlightHover }),
                                a().createElement('span', { className: Je.stateHighlightActive }),
                            ),
                            a().createElement(
                                'span',
                                { className: Je.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                u,
                            ),
                        )
                    );
                };
                tt.defaultProps = { type: ut.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const nt = tt,
                    at = {
                        base: 'AttemptsLeft_base_83',
                        show: 'AttemptsLeft_show_79',
                        iconContainer: 'AttemptsLeft_iconContainer_2c',
                        highlight: 'AttemptsLeft_highlight_66',
                        'translate-down': 'AttemptsLeft_translate-down_82',
                        'translate-up': 'AttemptsLeft_translate-up_31',
                    },
                    rt = R.strings.event.WtEventPortals,
                    ot = R.strings.event.portalAward,
                    it = ({
                        leftAttemptsCount: u,
                        animationDelayStepsCount: e = 0,
                        displayText: t = rt.boss.left(),
                        isTextChangable: r = !0,
                        isBossLootBox: o,
                    }) => {
                        const i = r && 1 === u,
                            s = (0, n.useMemo)(
                                () => ({
                                    attemptsCount: a().createElement('div', { className: at.highlight }, u),
                                    leftAttemptsCount: a().createElement('div', { className: at.highlight }, u),
                                }),
                                [u],
                            ),
                            l = (0, n.useMemo)(() => ({ animationDelay: e * Pu + 'ms' }), [e]);
                        return void 0 === o
                            ? a().createElement(
                                  cu,
                                  { contentId: R.views.lobby.wt_event.tooltips.WtGuaranteedRewardTooltipView('resId') },
                                  a().createElement(
                                      'div',
                                      { style: l, className: at.base },
                                      i
                                          ? a().createElement('div', { className: at.attemptsLeft }, rt.boss.oneLeft())
                                          : a().createElement(ou, { text: t, binding: s, classMix: at.attemptsLeft }),
                                      a().createElement('div', { className: at.iconContainer }),
                                  ),
                              )
                            : a().createElement(
                                  _u,
                                  {
                                      header: ot.reRollTooltipHeader(),
                                      body: o ? ot.reRollTooltipBossBody() : ot.reRollTooltipHunterBody(),
                                  },
                                  a().createElement(
                                      'div',
                                      { style: l, className: at.base },
                                      i
                                          ? a().createElement('div', { className: at.attemptsLeft }, rt.boss.oneLeft())
                                          : a().createElement(ou, { text: t, binding: s, classMix: at.attemptsLeft }),
                                      a().createElement('div', { className: at.iconContainer }),
                                  ),
                              );
                    },
                    st =
                        (u, e) =>
                        (...t) => {
                            if (u(...t)) return e(...t);
                        },
                    lt = {
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
                    ct = [
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
                function Et() {
                    return (
                        (Et =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        Et.apply(this, arguments)
                    );
                }
                const dt = (u) => {
                        let e = u.type,
                            t = u.children,
                            r = u.className,
                            o = u.classNames,
                            i = u.disabled,
                            s = void 0 !== i && i,
                            l = u.isVisibleLabel,
                            c = void 0 !== l && l,
                            E = u.soundHover,
                            d = void 0 === E ? R.sounds.highlight() : E,
                            A = u.soundClick,
                            _ = void 0 === A ? R.sounds.play() : A,
                            F = u.size,
                            m = void 0 === F ? 'normal' : F,
                            C = u.onClick,
                            D = u.onMouseEnter,
                            B = u.onMouseLeave,
                            h = u.onMouseDown,
                            p = u.onMouseUp,
                            g = u.onFocus,
                            v = u.onBlur,
                            b = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(u);
                                for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                return a;
                            })(u, ct);
                        const w = (0, n.useState)(!1),
                            f = w[0],
                            y = w[1],
                            x = (0, n.useState)(!1),
                            k = x[0],
                            T = x[1],
                            S = (0, n.useRef)(null),
                            L = () => !1 === s,
                            O = (u) => L() && ((u) => u.button === Wu.LEFT)(u),
                            N = st(L, (u) => {
                                null == C || C(u);
                            }),
                            M = st(O, (u) => {
                                y(!0), null == h || h(u), _ && Q(_);
                            }),
                            P = st(O, (u) => {
                                y(!1), null == p || p(u);
                            }),
                            I = st(L, (u) => {
                                T(!0), null == D || D(u), d && Q(d);
                            }),
                            H = st(L, (u) => {
                                null == g || g(u);
                            }),
                            W = st(L, (u) => {
                                null == v || v(u);
                            });
                        return a().createElement(
                            'div',
                            Et(
                                {
                                    ref: S,
                                    className: K()(
                                        lt.base,
                                        s && lt.base__disabled,
                                        c && lt.base__visibleLabel,
                                        !s && f && lt.base__mouseDown,
                                        !s && k && lt.base__hovered,
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
                                className: K()(
                                    lt.icon,
                                    lt[`icon__${m}`],
                                    lt[`icon__${e}`],
                                    null == o ? void 0 : o.icon,
                                ),
                            }),
                            t &&
                                a().createElement(
                                    'div',
                                    { className: K()(lt.label, lt[`label__${m}`], null == o ? void 0 : o.label) },
                                    t,
                                ),
                        );
                    },
                    At = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    _t = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const Ft = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    mt = (u) =>
                        Ft
                            ? `${u}`
                            : (function (u) {
                                  let e = '';
                                  for (let t = _t.length - 1; t >= 0; t--)
                                      for (; u >= _t[t]; ) (e += At[t]), (u -= _t[t]);
                                  return e;
                              })(u),
                    Ct = 'Vehicle_base_a1',
                    Dt = 'Vehicle_base__hasAnimation_b4',
                    Bt = 'Vehicle_type_f4',
                    ht = 'Vehicle_name_a0',
                    pt = 'Vehicle_level_74',
                    gt = 'Vehicle_base__large_b5',
                    vt = 'Vehicle_base__single_44',
                    bt = ({ level: u, type: e, name: t, isLarge: r, isSingle: o, animationDelayStepsCount: i }) => {
                        const s = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url('R.images.gui.maps.icons.vehicleTypes.big.${e.replace('-', '_')}_elite')`,
                                }),
                                [e],
                            ),
                            l = K()(Ct, r && gt, o && vt, void 0 !== i && Dt),
                            c = (0, n.useMemo)(() => (void 0 !== i ? { animationDelay: i * Pu + 'ms' } : void 0), [i]);
                        return a().createElement(
                            'span',
                            { className: l, style: c },
                            a().createElement('span', { className: pt }, mt(u)),
                            a().createElement('span', { className: Bt, style: s }),
                            a().createElement('span', { className: ht }, t),
                        );
                    };
                let wt;
                !(function (u) {
                    (u.gold = 'gold'),
                        (u.crystal = 'crystal'),
                        (u.xp = 'xp'),
                        (u.eliteXP = 'eliteXP'),
                        (u.equipCoin = 'equipCoin');
                })(wt || (wt = {}));
                const ft = ({ count: u, quantity: e, isCurrency: t, isMultiple: n }) =>
                        a().createElement(
                            a().Fragment,
                            null,
                            t && a().createElement(ne, { value: Number(u) }),
                            n && !t && e,
                        ),
                    yt = {
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
                    xt = ({
                        count: u,
                        currency: e,
                        isConfirmReward: t = !1,
                        isSingleReward: n = !1,
                        isAdditionalReward: r = !1,
                        isMultiplyReward: o = !1,
                    }) => {
                        const i = e in wt,
                            s = u > 1,
                            l = K()(
                                yt.count,
                                t && yt.count__confirmReward,
                                n && yt.count__singleReward,
                                r && yt.count__additionalReward,
                                o && yt.count__multiply,
                            ),
                            c = K()(
                                yt.currency,
                                yt[`currency__${e}`],
                                r && yt.currency__additionalReward,
                                n && yt.currency__singleReward,
                                o && yt.currency__multiply,
                            ),
                            E = w(R.strings.event.award.value(), { count: u });
                        return a().createElement(
                            'span',
                            { className: i ? c : l },
                            a().createElement(ft, { isCurrency: i, count: u, quantity: E, isMultiple: s }),
                        );
                    },
                    Rt = [
                        'width',
                        'height',
                        'getSrcByFrame',
                        'frameCount',
                        'onAnimate',
                        'frameTime',
                        'initialFrameIndex',
                    ];
                function kt() {
                    return (
                        (kt =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        kt.apply(this, arguments)
                    );
                }
                const Tt = () => {},
                    St = (0, n.memo)((u) => {
                        let e = u.width,
                            t = u.height,
                            r = u.getSrcByFrame,
                            o = u.frameCount,
                            i = u.onAnimate,
                            s = void 0 === i ? Tt : i,
                            l = u.frameTime,
                            c = void 0 === l ? 33 : l,
                            E = u.initialFrameIndex,
                            d = void 0 === E ? 0 : E,
                            A = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(u);
                                for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                return a;
                            })(u, Rt);
                        const _ = (0, n.useRef)(null);
                        return (
                            (0, n.useEffect)(() => {
                                const u = _.current;
                                if (!u) return;
                                const n = u.getContext('2d'),
                                    a = ((u, e) => {
                                        const t = [];
                                        for (let n = 0; n <= u; n++) {
                                            const u = new Image();
                                            (u.src = e(n)), t.push(u);
                                        }
                                        return t;
                                    })(o, r),
                                    i = ((u, e = 0) => {
                                        let t = e;
                                        return () => {
                                            const e = t;
                                            return (t += 1), t > u && (t = 0), e;
                                        };
                                    })(o - 1, d),
                                    l = setInterval(() => {
                                        const r = i();
                                        n.clearRect(0, 0, u.width, u.height);
                                        const o = a[r];
                                        n.drawImage(o, 0, 0, e, t), s(r, o);
                                    }, c);
                                return () => clearInterval(l);
                            }, [o, c, r, t, d, s, e]),
                            a().createElement('canvas', kt({}, A, { width: e, height: t, ref: _ }))
                        );
                    }),
                    Lt = {
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
                    Ot = () => {},
                    Nt = (u, e) => {
                        const t = (0, n.useState)(u[e]),
                            a = t[0],
                            r = t[1],
                            o = (0, n.useRef)(Ot),
                            i = (0, n.useCallback)(() => {
                                a.stop ||
                                    (o.current(),
                                    (o.current = ((u, e) => {
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
                            (0, n.useEffect)(() => (i(), () => o.current()), [i]),
                            {
                                step: a,
                                setStep: (0, n.useCallback)(
                                    (e) => {
                                        r(u[e]);
                                    },
                                    [u],
                                ),
                                next: i,
                            }
                        );
                    },
                    Mt = {
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
                    Pt = ['children'],
                    It = ['children'];
                function Ht(u, e) {
                    if (null == u) return {};
                    var t,
                        n,
                        a = {},
                        r = Object.keys(u);
                    for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                    return a;
                }
                function Wt() {
                    return (
                        (Wt =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        Wt.apply(this, arguments)
                    );
                }
                const Ut = {
                        idle: { state: 'idle', nextState: 'start', timeout: 400 },
                        start: { state: 'start', nextState: 'bump', timeout: 960 },
                        bump: { state: 'bump', nextState: 'end', timeout: 33 },
                        end: { state: 'end', stop: !0 },
                    },
                    $t = { width: 250, height: 250 },
                    jt = () => {},
                    Vt = (u) =>
                        `R.images.gui.maps.icons.wtevent.sequence.convert_twirly.twirly_convertation_${u.toString().padStart(5, '0')}`,
                    Gt = (u) => ({ width: `${u.width}rem`, height: `${u.height}rem` }),
                    Kt = (0, n.memo)(
                        ({
                            children: [u, e],
                            className: t,
                            classNames: r = {},
                            onAnimate: o = jt,
                            animationSettings: i = Ut,
                            getSrcByFrameTwirly: s = Vt,
                            size: l = $t,
                        }) => {
                            const c = Nt(i, 'idle').step.state;
                            return (
                                (0, n.useEffect)(() => {
                                    o(c);
                                }, [c, o]),
                                (0, n.useEffect)(() => {
                                    'start' === c && Q('ev_white_tiger_hangar_lootbox_reward_conv');
                                }, [c]),
                                a().createElement(
                                    'div',
                                    { className: K()(Mt.base, Mt[`base__${c}`], t), style: Gt(l) },
                                    a().createElement('div', { className: K()(Mt.bump, r.bump) }),
                                    a().createElement('div', { className: K()(Mt.bumpRays, r.bumpRays) }),
                                    a().createElement(
                                        'div',
                                        { className: K()(Mt.reward, r.reward) },
                                        ('idle' === c || 'start' === c) &&
                                            a().createElement(
                                                'div',
                                                { className: K()(Mt.rewardFrom, r.rewardFrom) },
                                                u,
                                            ),
                                        ('end' === c || 'bump' === c) &&
                                            a().createElement('div', { className: K()(Mt.rewardTo, r.rewardTo) }, e),
                                    ),
                                    ('start' === c || 'bump' === c) &&
                                        a().createElement(
                                            St,
                                            Wt({}, l, {
                                                className: K()(Mt.twirlyCanvas, r.twirlyCanvas),
                                                frameCount: 50,
                                                frameTime: 16,
                                                getSrcByFrame: s,
                                            }),
                                        ),
                                    a().createElement('div', { className: K()(Mt.bumpParticles, r.bumpParticles) }),
                                )
                            );
                        },
                        (u, e) => {
                            u.children;
                            const t = Ht(u, Pt),
                                n = (e.children, Ht(e, It));
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
                    zt = (u) =>
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
                    qt = Object.assign({}, Ut, { idle: Object.assign({}, Ut.idle, { timeout: 1800 }) });
                let Yt;
                !(function (u) {
                    (u.Single = 'single'), (u.Multiply = 'multiply'), (u.Base = 'base');
                })(Yt || (Yt = {}));
                const Xt = { width: 100, height: 100 },
                    Zt = { width: 450, height: 450 },
                    Qt = { width: 500, height: 500 },
                    Jt = (u) => (u.extraSmall || u.small ? Zt : Qt),
                    un = ({ isSingle: u, isMultiply: e, value: t, vehicleName: r }) => {
                        const o = (0, n.useContext)(m),
                            i = (0, n.useMemo)(() => (u ? Yt.Single : e ? Yt.Multiply : Yt.Base), [e, u]),
                            s = K()(Lt.base, Lt[`base__${i}`]);
                        return a().createElement(
                            'div',
                            { className: s },
                            a().createElement(St, {
                                width: e ? Xt.width : Jt(o).width,
                                height: e ? Xt.height : Jt(o).height,
                                className: K()(Lt.particlesCanvas, Lt.blue),
                                frameCount: 60,
                                getSrcByFrame: zt,
                            }),
                            a().createElement(
                                Kt,
                                { size: e ? Xt : Jt(o), animationSettings: qt, className: Lt.nyAnimation },
                                [
                                    a().createElement(
                                        'div',
                                        { key: 1, className: Lt.tank },
                                        a().createElement('div', { className: Lt.convertIcon }),
                                        a().createElement('div', { className: Lt.vehicleName }, r),
                                    ),
                                    a().createElement(
                                        'div',
                                        { key: 2, className: Lt.gold },
                                        a().createElement('div', { className: Lt.convertIcon }),
                                        a().createElement(
                                            'div',
                                            { className: Lt.value },
                                            a().createElement(ft, { isCurrency: !0, count: t, isMultiple: e }),
                                        ),
                                    ),
                                ],
                            ),
                        );
                    },
                    en = {
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
                let tn, nn;
                !(function (u) {
                    (u.Small = 'small'), (u.Large = 'large');
                })(tn || (tn = {})),
                    (function (u) {
                        (u.Default = 'default'), (u.Additional = 'additional'), (u.Multiply = 'multiply');
                    })(nn || (nn = {}));
                const an = R.views.common.tooltip_window,
                    rn = (u, e) => ({ backgroundImage: `url('R.images.gui.maps.icons.wtevent.rewards.${e}.${u}')` }),
                    on = (u) => ({ backgroundImage: `url('${u}')` }),
                    sn = ['gold', 'crystal'],
                    ln = R.strings.event.awardView.previewBtnText(),
                    cn = (0, n.memo)(
                        ({
                            tooltipId: u,
                            name: e,
                            label: t,
                            value: r,
                            icon: o,
                            specialId: i,
                            compensationSource: s = '',
                            isCompensation: l = !1,
                            isConfirmReward: c = !1,
                            isSingleReward: E = !1,
                            isMultiplyReward: d = !1,
                            theme: A = nn.Default,
                            size: _,
                        }) => {
                            const F = V('model'),
                                m = F.vehicle,
                                C = F.onPreview,
                                D = sn.includes(e),
                                B = 'premium_plus' === e,
                                h = 'vehicles' === e,
                                p = h || ('customizations' === e && o && o.includes('style3d')),
                                g = (h || 'gold' === e) && l,
                                v = t && A === nn.Default && !D && !h,
                                b = A === nn.Default ? tn.Large : tn.Small,
                                w = (0, n.useMemo)(() => {
                                    switch (e) {
                                        case 'premium_plus':
                                            return rn(`${e}_${r}`, b);
                                        case 'crewBooks':
                                        case 'goodies':
                                            return rn(String(o), b);
                                        case 'customizations':
                                        case 'tmanToken':
                                            return A === nn.Default
                                                ? rn(`collection.${o}`, b)
                                                : rn(i ? 'style_3d' : `${o}`, b);
                                        case 'gold':
                                            return l ? on('') : rn(e, b);
                                        case 'vehicles':
                                            return m.specName
                                                ? on(
                                                      R.images.gui.maps.shop.vehicles.c_600x450.$dyn(
                                                          m.specName.replace(/-/g, '_'),
                                                      ),
                                                  )
                                                : rn('vehicles', b);
                                        default:
                                            return rn(e, b);
                                    }
                                }, [i, e, r, b, o, A, l, m]),
                                f = (0, n.useMemo)(() => ({ value: r, tooltipId: u }), [u, r]),
                                y = (0, n.useMemo)(
                                    () => an.backport_tooltip_content.BackportTooltipContent('resId'),
                                    [],
                                ),
                                x = (0, n.useCallback)(() => {
                                    h && m.intCD && C({ intCD: m.intCD }), i && C({ intCD: i });
                                }, [h, m, C, i]),
                                k = K()(en.rewardImage, g && en.rewardImage__compensation),
                                T = K()(
                                    en.base,
                                    d && en.base__multiply,
                                    c && en.base__confirmReward,
                                    E && en.base__singleReward,
                                    en[`base__${_}`],
                                    A !== nn.Default && en[`base__${A}`],
                                );
                            return a().createElement(
                                cu,
                                { ignoreShowDelay: !0, contentId: y, args: f },
                                a().createElement(
                                    'div',
                                    { className: T },
                                    g
                                        ? a().createElement(un, {
                                              isSingle: E,
                                              isMultiply: d,
                                              value: r,
                                              vehicleName: s,
                                          })
                                        : a().createElement(
                                              'div',
                                              { className: k, style: w },
                                              p &&
                                                  !g &&
                                                  !d &&
                                                  !h &&
                                                  a().createElement(
                                                      'div',
                                                      { className: en.preview },
                                                      a().createElement(dt, { type: 'preview', onClick: x }, ln),
                                                  ),
                                          ),
                                    g || !h || m.specName
                                        ? null
                                        : a().createElement('div', { className: en.tankName }, t),
                                    !B &&
                                        !g &&
                                        a().createElement(xt, {
                                            count: r,
                                            currency: e,
                                            isConfirmReward: c,
                                            isSingleReward: E,
                                            isAdditionalReward: A === nn.Additional,
                                            isMultiplyReward: d,
                                        }),
                                    v &&
                                        a().createElement(
                                            'div',
                                            { className: K()(en.description, E && en.description__single) },
                                            t,
                                        ),
                                    h &&
                                        !d &&
                                        a().createElement(
                                            'span',
                                            { className: K()(en.vehicle, E && en.vehicle__single) },
                                            a().createElement(bt, {
                                                level: m.level,
                                                type: m.type,
                                                name: m.name,
                                                isSingle: E,
                                            }),
                                        ),
                                ),
                            );
                        },
                    );
                var En = t(4184);
                const dn = { base: 'AnimationItem_base_23', entered: 'AnimationItem_entered_48' },
                    An = ['index', 'isSingleReward', 'theme', 'delay', 'onEntered'];
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
                const Fn = (u) => {
                        let e = u.index,
                            t = u.isSingleReward,
                            r = void 0 !== t && t,
                            o = u.theme,
                            i = void 0 === o ? nn.Default : o,
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
                            })(u, An);
                        const E = (0, n.useCallback)(() => {
                            Q('ev_white_tiger_hangar_lootbox_item'), l && l();
                        }, [l]);
                        return a().createElement(
                            En.ZP,
                            { in: !0, appear: !0, timeout: Oe(e, 150, s), onEntered: E },
                            (u) => {
                                const e = K()(dn.base, dn[u]);
                                return a().createElement(
                                    'div',
                                    { className: e },
                                    a().createElement(cn, _n({}, c, { isSingleReward: r, theme: i })),
                                );
                            },
                        );
                    },
                    mn = 'RewardList_base_60',
                    Cn = 'RewardList_mainRewards_cf',
                    Dn = 'RewardList_additional_92',
                    Bn = 'RewardList_additionalWrapper_2f',
                    hn = 'RewardList_additionalTitle_49';
                function pn() {
                    return (
                        (pn =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        pn.apply(this, arguments)
                    );
                }
                const gn = { animationDelay: '1000ms' },
                    vn = ({ rewards: u, additionalRewards: e, openedBoxesCount: t }) => {
                        const r = (0, n.useContext)(oa),
                            o = 1 === u.items.length,
                            i = e.items.length > 0;
                        return a().createElement(
                            'div',
                            { className: mn },
                            a().createElement(
                                'div',
                                { className: Cn },
                                u.items.map(({ value: e }, n) => {
                                    const s = !i && n === u.items.length - 1 && r ? r : void 0;
                                    return a().createElement(
                                        Fn,
                                        pn({ key: `${t}_${n}_${e.tooltipId}` }, e, {
                                            index: n,
                                            isSingleReward: o,
                                            onEntered: s,
                                            delay: 700,
                                        }),
                                    );
                                }),
                            ),
                            i &&
                                a().createElement(
                                    'div',
                                    { className: Dn, style: gn },
                                    a().createElement(
                                        'span',
                                        { className: hn },
                                        R.strings.event.portalAward.additionalTitle(),
                                    ),
                                    a().createElement(
                                        'div',
                                        { className: Bn },
                                        e.items.map(({ value: u }, n) => {
                                            const o = n === e.items.length - 1 && r ? r : void 0;
                                            return (
                                                'customizations' === u.name && (u.icon = u.typeIcon),
                                                a().createElement(
                                                    Fn,
                                                    pn({ key: `${t}_${n}_${u.tooltipId}` }, u, {
                                                        index: n,
                                                        theme: nn.Additional,
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
                    bn = {
                        base: 'Content_base_3d',
                        wrapper: 'Content_wrapper_d7',
                        rerollContentWrapper: 'Content_rerollContentWrapper_1f',
                        controls: 'Content_controls_c9',
                        show: 'Content_show_f8',
                        controls_warning: 'Content_controls_warning_d1',
                        btnWrapper: 'Content_btnWrapper_a8',
                        btnHolder: 'Content_btnHolder_91',
                        slideUp: 'Content_slideUp_16',
                        fadeOut: 'Content_fadeOut_90',
                        fadeIn: 'Content_fadeIn_df',
                        fadeInScale: 'Content_fadeInScale_2a',
                        fadeInWithScale: 'Content_fadeInWithScale_7f',
                        scale: 'Content_scale_90',
                        raysAppearance: 'Content_raysAppearance_1c',
                        rotate: 'Content_rotate_44',
                        fadeTop: 'Content_fadeTop_28',
                        fadeBot: 'Content_fadeBot_82',
                        'translate-down': 'Content_translate-down_d1',
                        'translate-up': 'Content_translate-up_31',
                    },
                    wn = 'LootBoxDisabledWarning_basePortal_96',
                    fn = 'LootBoxDisabledWarning_wrapper_66',
                    yn = 'LootBoxDisabledWarning_hintIcon_96',
                    xn = 'LootBoxDisabledWarning_textWrapper_07',
                    Rn = R.strings.event.WtEventPortals,
                    kn = ({ animationDelayStepsCount: u = 1 }) => {
                        const e = (0, n.useMemo)(() => ({ animationDelay: u * Pu + 'ms' }), [u]);
                        return a().createElement(
                            'div',
                            { className: wn, style: e },
                            a().createElement(
                                'div',
                                { className: fn },
                                a().createElement('div', { className: yn }),
                                a().createElement('div', { className: xn }, Rn.warning()),
                            ),
                        );
                    },
                    Tn = 'FirstLaunchCompensation_base_f5',
                    Sn = 'FirstLaunchCompensation_baseWrapper_83',
                    Ln = 'FirstLaunchCompensation_base__additional_68',
                    On = 'FirstLaunchCompensation_rewardWrapper_ee',
                    Nn = 'FirstLaunchCompensation_runPrice_df',
                    Mn = 'FirstLaunchCompensation_iconContainer_cb',
                    Pn = R.strings.event.portalAward,
                    In = R.strings.tooltips.awardItem.gold,
                    Hn = ({ firstLaunchReward: u, hasAdditionalRewards: e = !1 }) => {
                        const t = K()(Tn, e && Ln),
                            r = (0, n.useMemo)(
                                () => ({
                                    reward: a().createElement(
                                        'div',
                                        { className: On },
                                        a().createElement(
                                            _u,
                                            { header: In.header(), body: In.body() },
                                            a().createElement('div', { className: Nn }, te(u, 'gold')),
                                        ),
                                    ),
                                }),
                                [u],
                            ),
                            o = {
                                header: R.strings.event.WtEventPortals.inside.firstLaunch.tooltip.header(),
                                body: R.strings.event.WtEventPortals.inside.firstLaunch.tooltip.body(),
                            };
                        return a().createElement(
                            'div',
                            { className: t },
                            a().createElement(
                                'div',
                                { className: Sn },
                                a().createElement(ou, { text: Pn.firstLaunchRewardTitle(), binding: r }),
                                a().createElement(_u, o, a().createElement('div', { className: Mn })),
                            ),
                        );
                    },
                    Wn = 'ClaimButton_base_ba',
                    Un = 'ClaimButton_runPriceWrapper_6f',
                    $n = 'ClaimButton_priceValue_49',
                    jn = 'ClaimButton_base__hunter_d6',
                    Vn = 'LootBoxesCount_base_02',
                    Gn = 'LootBoxesCount_valueWrapper_f3',
                    Kn = 'LootBoxesCount_value_da',
                    zn = 'LootBoxesCount_value__hunter_49',
                    qn = R.strings.event.WtEventPortals,
                    Yn = ({ type: u, lootBoxesCount: e, animationDelayStepsCount: t = 0 }) => {
                        const r = u === g.HUNTER,
                            o = (0, n.useMemo)(() => ({ isHunterLootBox: r }), [r]),
                            i = (0, n.useMemo)(
                                () => ({
                                    number: a().createElement(
                                        cu,
                                        {
                                            contentId:
                                                R.views.lobby.wt_event.tooltips.WtEventLootBoxTooltipView('resId'),
                                            args: o,
                                        },
                                        a().createElement(
                                            'div',
                                            { className: Gn },
                                            a().createElement('div', { className: K()(Kn, r && zn) }),
                                            e,
                                        ),
                                    ),
                                }),
                                [r, o, e],
                            ),
                            s = (0, n.useMemo)(() => ({ animationDelay: t * Pu + 'ms' }), [t]);
                        return a().createElement(
                            'div',
                            { className: Vn, style: s },
                            0 === e
                                ? qn.inside.currentKeysAmountIs0[u]()
                                : a().createElement(ou, { text: qn.inside.currentKeysAmount[u](), binding: i }),
                        );
                    },
                    Xn = R.strings.event.portalAward,
                    Zn = ({
                        isBoxesEnabled: u,
                        isBossLootBox: e,
                        claimReward: t,
                        quantityKeys: r,
                        footerAnimationDelayCount: o,
                    }) => {
                        const i = (0, n.useMemo)(() => ({ isHunterLootBox: !e }), [e]),
                            s = (0, n.useMemo)(() => (e ? g.BOSS : g.HUNTER), [e]),
                            l = K()(Wn, !e && jn);
                        return a().createElement(
                            'div',
                            { className: l },
                            u &&
                                r > 0 &&
                                a().createElement(
                                    cu,
                                    {
                                        contentId: R.views.lobby.wt_event.tooltips.WtEventLootBoxTooltipView('resId'),
                                        args: i,
                                    },
                                    a().createElement(
                                        'div',
                                        { className: Un },
                                        a().createElement('div', { className: $n }),
                                        1,
                                    ),
                                ),
                            a().createElement(
                                nt,
                                { size: et.medium, onClick: t },
                                r > 0 ? Xn.claimAndContinueButton() : Xn.claimRewardButton(),
                            ),
                            u && a().createElement(Yn, { type: s, lootBoxesCount: r, animationDelayStepsCount: o }),
                        );
                    },
                    Qn = 'RerollButton_base_d8',
                    Jn = 'RerollButton_rerollWrapper_e5',
                    ua = 'RerollButton_base__hunter_47',
                    ea = 'RerollButton_rerollNotAffordable_31',
                    ta = 'RerollButton_runPrice_87',
                    na = R.strings.event.portalAward,
                    aa = ({
                        rerollPrice: u,
                        isRerollAffordable: e,
                        isBossLootBox: t,
                        handleReRoll: n,
                        rerollCount: r,
                        currencyTooltipType: o,
                        attemptsLeftAnimationDelayCount: i,
                    }) => {
                        const s = te(u, t ? 'gold' : 'integral'),
                            l = R.strings.tooltips.awardItem[o],
                            c = { header: l ? l.header() : ' ', body: l ? l.body() : ' ' },
                            E = K()(Qn, !t && ua, !e && ea);
                        return a().createElement(
                            'div',
                            { className: E },
                            a().createElement(
                                _u,
                                c,
                                a().createElement(
                                    'div',
                                    { className: Jn },
                                    s,
                                    a().createElement('div', { className: ta }),
                                ),
                            ),
                            a().createElement(
                                nt,
                                { size: et.medium, type: ut.main, onClick: n, disabled: !t && !e },
                                na.reRollButton(),
                            ),
                            a().createElement(it, {
                                leftAttemptsCount: r,
                                displayText: na.reRollInformation(),
                                animationDelayStepsCount: i,
                                isTextChangable: !1,
                                isBossLootBox: t,
                            }),
                        );
                    },
                    ra = ({
                        isBoxesEnabled: u,
                        isBossLootBox: e,
                        quantityKeys: t,
                        rewards: r,
                        additionalRewards: o,
                        onReRoll: i,
                        onClaimReward: s,
                        attemptsCount: l,
                        rerollCount: c,
                        rerollPrice: E,
                        leftAttemptsCount: d,
                        isControlsVisible: A,
                        footerAnimationDelayCount: _,
                        openedBoxesCount: F,
                        vehicle: C,
                        onPreview: D,
                        isRerollAffordable: B,
                        isGuaranteedIgnored: h,
                        currencyTooltipType: p,
                        isFirstLaunch: g,
                        firstLaunchReward: v,
                    }) => {
                        const b = (0, n.useContext)(m),
                            w = (0, n.useCallback)(() => {
                                s(), Q(R.sounds.ev_white_tiger_hangar_lootbox_portals_launch());
                            }, [s]),
                            f = (0, n.useCallback)(() => {
                                C.intCD && D({ intCD: C.intCD });
                            }, [C, D]),
                            y = (0, n.useCallback)(() => {
                                i();
                            }, [i]),
                            x = Z(),
                            k = K()(
                                bn.base,
                                x,
                                !e && bn.base__hunter,
                                !u && bn.controls_warning,
                                !B && bn.rerollNotAffordable,
                            ),
                            T = (0, n.useMemo)(() => ({ animationDelay: _ * Pu + 'ms' }), [_]),
                            S = _ - 1,
                            L = o.items.length > 0 && 1 === r.items.length,
                            O = (0, n.useMemo)(() => {
                                return (u = b.width), (e = b.height), { marginBottom: 0.23 * We(u, e).height };
                                var u, e;
                            }, [b.width, b.height]),
                            N = r.items.some((u) => 'vehicles' === u.value.name),
                            M = r.items.some((u) => u.value.isCompensation),
                            P = c > 0 && u && !M && !N;
                        return a().createElement(
                            'div',
                            { className: k },
                            e && g && a().createElement(Hn, { firstLaunchReward: v, hasAdditionalRewards: L }),
                            a().createElement(
                                'div',
                                { style: O },
                                a().createElement(vn, { rewards: r, additionalRewards: o, openedBoxesCount: F }),
                            ),
                            a().createElement(
                                'div',
                                { className: bn.wrapper },
                                A &&
                                    a().createElement(
                                        'div',
                                        { className: bn.controls },
                                        a().createElement(
                                            'div',
                                            { className: bn.rerollContentWrapper },
                                            e &&
                                                u &&
                                                !h &&
                                                a().createElement(it, {
                                                    attemptsCount: l,
                                                    leftAttemptsCount: d,
                                                    animationDelayStepsCount: S,
                                                }),
                                            a().createElement(
                                                'div',
                                                { className: bn.btnWrapper, style: T },
                                                P &&
                                                    a().createElement(aa, {
                                                        attemptsLeftAnimationDelayCount: S,
                                                        currencyTooltipType: p,
                                                        handleReRoll: y,
                                                        isBossLootBox: e,
                                                        isRerollAffordable: B,
                                                        rerollCount: c,
                                                        rerollPrice: E,
                                                    }),
                                                N &&
                                                    !M &&
                                                    a().createElement(
                                                        'div',
                                                        { className: bn.btnHolder },
                                                        a().createElement(
                                                            nt,
                                                            { size: et.medium, type: ut.main, onClick: f },
                                                            R.strings.event.vehiclePortal.openGarageButton(),
                                                        ),
                                                    ),
                                                a().createElement(Zn, {
                                                    isBoxesEnabled: u,
                                                    isBossLootBox: e,
                                                    claimReward: w,
                                                    quantityKeys: t,
                                                    footerAnimationDelayCount: _,
                                                }),
                                            ),
                                        ),
                                    ),
                                !u && !N && a().createElement(kn, null),
                            ),
                        );
                    },
                    oa = (0, n.createContext)(null),
                    ia = () => {
                        const u = V('model'),
                            e = u.isBossLootBox,
                            t = u.isBoxesEnabled,
                            r = u.rewards,
                            o = u.additionalRewards,
                            i = u.onClose,
                            s = u.onBuy,
                            l = u.onReRoll,
                            c = u.rerollCount,
                            E = u.rerollPrice,
                            d = u.onClaimReward,
                            A = u.availableLootBoxesPurchase,
                            _ = u.guaranteedAward,
                            F = u.openedBoxesCount,
                            m = u.vehicle,
                            C = u.onPreview,
                            D = u.isRerollAffordable,
                            B = u.currencyTooltipType,
                            h = u.isFirstLaunch,
                            g = u.firstLaunchReward,
                            v = u.isLaunchAnimated,
                            b = u.onAnimationSettingChange,
                            w = u.currentCrystals,
                            f = u.currentGold,
                            y = u.currentCredits,
                            x = u.currentFreeExperience,
                            R = u.isWalletAvailable,
                            k = u.openingType,
                            T = V('model.portalAvailability'),
                            S = `${c}${T.lootBoxesCount}`;
                        (0, n.useEffect)(() => M(!1), [S]);
                        const L = (0, n.useCallback)(() => b(), [b]),
                            O = (0, n.useState)(!1),
                            N = O[0],
                            M = O[1],
                            P = (0, n.useCallback)(() => M(!0), []),
                            I = (0, n.useCallback)(() => {
                                i();
                            }, [i]);
                        return a().createElement(
                            oa.Provider,
                            { value: P },
                            a().createElement(
                                Qe,
                                {
                                    portalType: e ? p.BOSS : p.HUNTER,
                                    isBoxesEnabled: t,
                                    onBuy: s,
                                    onClose: I,
                                    availableLootBoxesPurchase: A,
                                    hasGradient: !0,
                                    showFinalAnimation: N,
                                    lootBoxesAnimationDelayCount: 3,
                                    isAnimated: v,
                                    onAnimationSettingClick: L,
                                    launchId: S,
                                    showCurrencyBalance: !0,
                                    currentCrystals: w,
                                    currentGold: f,
                                    currentCredits: y,
                                    currentFreeXP: x,
                                    isWalletAvailable: R,
                                    openingType: k,
                                },
                                a().createElement(ra, {
                                    isBoxesEnabled: t,
                                    isBossLootBox: e,
                                    quantityKeys: T.lootBoxesCount,
                                    rewards: r,
                                    additionalRewards: o,
                                    onReRoll: l,
                                    onClaimReward: d,
                                    attemptsCount: _.attemptsCount,
                                    rerollCount: c,
                                    rerollPrice: E,
                                    leftAttemptsCount: _.leftAttemptsCount,
                                    isControlsVisible: N && t,
                                    footerAnimationDelayCount: 3,
                                    openedBoxesCount: F,
                                    vehicle: m,
                                    onPreview: C,
                                    isRerollAffordable: D,
                                    isGuaranteedIgnored: _.isIgnored,
                                    currencyTooltipType: B,
                                    isFirstLaunch: h,
                                    firstLaunchReward: g,
                                }),
                            ),
                        );
                    };
                engine.whenReady.then(() => {
                    o().render(
                        a().createElement(h, null, a().createElement(ia, null)),
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
                    for (var [e, t, n] = deferred[s], r = !0, o = 0; o < e.length; o++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[o]))
                            ? e.splice(o--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
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
        (__webpack_require__.j = 62),
        (() => {
            var u = { 62: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var n,
                        a,
                        [r, o, i] = t,
                        s = 0;
                    if (r.some((e) => 0 !== u[e])) {
                        for (n in o) __webpack_require__.o(o, n) && (__webpack_require__.m[n] = o[n]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (e && e(t); s < r.length; s++)
                        (a = r[s]), __webpack_require__.o(u, a) && u[a] && u[a][0](), (u[a] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [107], () => __webpack_require__(875));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
