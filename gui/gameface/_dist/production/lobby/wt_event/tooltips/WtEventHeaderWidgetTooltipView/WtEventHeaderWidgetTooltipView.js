(() => {
    'use strict';
    var __webpack_modules__ = {
            527: (u, e, t) => {
                t.r(e),
                    t.d(e, { mouse: () => A, off: () => i, on: () => a, onResize: () => s, onScaleUpdated: () => o });
                var n = t(2472),
                    r = t(1176);
                const s = (0, n.E)('clientResized'),
                    o = (0, n.E)('self.onScaleUpdated'),
                    a = (u, e) => engine.on(u, e),
                    i = (u, e) => engine.off(u, e),
                    E = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const A = (function () {
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
                    const s = ['down', 'up', 'move'].reduce(
                        (e, t) => (
                            (e[t] = (function (e) {
                                return (t) => {
                                    u.listeners += 1;
                                    let r = !0;
                                    const s = `mouse${e}`,
                                        o = E[e]((u) => t([u, 'outside']));
                                    function a(u) {
                                        t([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(s, a),
                                        n(),
                                        () => {
                                            r &&
                                                (o(),
                                                window.removeEventListener(s, a),
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
                    return Object.assign({}, s, {
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
                        getMouseGlobalPosition: () => o,
                        getSize: () => s,
                        graphicsQuality: () => a,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    });
                var n = t(527),
                    r = t(2493);
                function s(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function o(u = 'px') {
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
            2493: (u, e, t) => {
                function n(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error(`playSound('${u}'): `, e);
                    });
                }
                function r(u, e) {
                    engine.call('SetRTPCGlobal', u, e).catch((t) => {
                        console.error(`setRTPC('${u}', '${e}'): `, t);
                    });
                }
                t.d(e, { E: () => r, G: () => n });
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
                t.d(e, { O: () => s });
                var n = t(5959),
                    r = t(514);
                const s = { view: t(7641), client: n, sound: r.ZP };
            },
            514: (u, e, t) => {
                t.d(e, { ZP: () => o });
                var n = t(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    s = Object.keys(r).reduce((u, e) => ((u[e] = () => (0, n.playSound)(r[e])), u), {}),
                    o = { play: Object.assign({}, s, { sound: n.playSound }), setRTPC: n.setRTPC };
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
                        addPreloadTexture: () => a,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => w,
                        events: () => s.U,
                        extraSize: () => h,
                        forceTriggerMouseMove: () => f,
                        freezeTextureBeforeResize: () => B,
                        getBrowserTexturePath: () => E,
                        getDisplayStatus: () => v,
                        getScale: () => d,
                        getSize: () => l,
                        getViewGlobalPosition: () => c,
                        isEventHandled: () => b,
                        isFocused: () => p,
                        pxToRem: () => _,
                        remToPx: () => C,
                        resize: () => D,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => m,
                        setEventHandled: () => g,
                        setInputPaddingsRem: () => i,
                        setSidePaddingsRem: () => F,
                        whenTutorialReady: () => R,
                    });
                var n = t(3722),
                    r = t(6112),
                    s = t(6538),
                    o = t(8566);
                function a(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function i(u) {
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
                function l(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function D(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function c(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: C(e.x), y: C(e.y) };
                }
                function B() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function d() {
                    return viewEnv.getScale();
                }
                function _(u) {
                    return viewEnv.pxToRem(u);
                }
                function C(u) {
                    return viewEnv.remToPx(u);
                }
                function m(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function p() {
                    return viewEnv.isFocused();
                }
                function g() {
                    return viewEnv.setEventHandled();
                }
                function b() {
                    return viewEnv.isEventHandled();
                }
                function f() {
                    viewEnv.forceTriggerMouseMove();
                }
                function v() {
                    return viewEnv.getShowingStatus();
                }
                const w = Object.keys(r.W).reduce(
                        (u, e) => ((u[e] = () => viewEnv.getShowingStatus() === r.W[e]), u),
                        {},
                    ),
                    h = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    R = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : s.U.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (u, e, t) => {
                t.d(e, { qP: () => E });
                const n = ['args'];
                const r = 2,
                    s = 16,
                    o = 32,
                    a = 64,
                    i = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const s = e.args,
                                o = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        n,
                                        r = {},
                                        s = Object.keys(u);
                                    for (n = 0; n < s.length; n++) (t = s[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                    return r;
                                })(e, n);
                            return void 0 !== s
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, o, {
                                          arguments:
                                              ((r = s),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var r;
                    },
                    E = {
                        close(u) {
                            i('popover' === u ? r : o);
                        },
                        minimize() {
                            i(a);
                        },
                        move(u) {
                            i(s, { isMouseEvent: !0, on: u });
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
                    })(r || (r = {}));
            },
            1358: (u, e, t) => {
                t.d(e, { Z: () => s });
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
                        const s = n.O.view.addModelObserver(u, t, r);
                        return (
                            s > 0
                                ? ((this._callbacks[s] = e),
                                  t > 0 && (this._views[t] ? this._views[t].push(s) : (this._views[t] = [s])))
                                : console.error("Can't add callback for model:", u),
                            s
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
                const s = r;
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
                t.d(e, { Sw: () => s.Z, B3: () => a.B3, Z5: () => o.Z5, B0: () => a.B0, ry: () => i.ry });
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
                var s = t(1358);
                var o = t(8613),
                    a = t(4251),
                    i = t(8072),
                    E = t(7572);
                const A = r.instance,
                    F = {
                        DataTracker: s.Z,
                        ViewModel: E.Z,
                        ViewEventType: a.B0,
                        NumberFormatType: a.B3,
                        RealFormatType: a.Gr,
                        TimeFormatType: a.lf,
                        DateFormatType: a.kH,
                        makeGlobalBoundingBox: i.Kv,
                        sendMoveEvent: i.wv,
                        sendCloseEvent: i.Sy,
                        sendClosePopOverEvent: i.SW,
                        sendShowContextMenuEvent: i.uk,
                        sendShowPopOverEvent: i.P3,
                        addEscapeListener: i.VM,
                        closeOnEsc: i.SU,
                        handleViewEvent: i.c9,
                        onBindingsReady: i.ry,
                        onLayoutReady: i.Eu,
                        isTooltipShown: i.KE,
                        isContextMenuShown: i.uM,
                        isPopOverShown: i.wU,
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
                        ClickOutsideManager: A,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = F;
            },
            8613: (u, e, t) => {
                t.d(e, { Ew: () => s, Z5: () => n, cy: () => r });
                const n = {
                        getNumberFormat: (u, e) => systemLocale.getNumberFormat(u, e),
                        getRealFormat: (u, e) => systemLocale.getRealFormat(u, e),
                        getTimeFormat: (u, e) => systemLocale.getTimeFormat(u, e),
                        getDateFormat: (u, e) => systemLocale.getDateFormat(u, e),
                        toUpperCase: (u) => systemLocale.toUpperCase(u),
                        toLowerCase: (u) => systemLocale.toUpperCase(u),
                    },
                    r = {
                        getNumberFormat: (u) => userLocale.getNumberFormat(u),
                        getTimeFormat: (u, e, t) => userLocale.getTimeFormat(u, e, void 0 === t || t),
                        getTimeString: (u, e, t) => userLocale.getTimeString(u, e, void 0 === t || t),
                    },
                    s = {
                        getRegionalDateTime: (u, e, t = !0) => regionalDateTime.getRegionalDateTime(u, e, t),
                        getFormattedDateTime: (u, e, t = !0) => regionalDateTime.getFormattedDateTime(u, e, t),
                    };
            },
            4251: (u, e, t) => {
                let n;
                t.d(e, { B0: () => n, B3: () => r, Gr: () => s, kH: () => a, lf: () => o }),
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
                const r = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    s = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    o = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    a = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
            },
            8072: (u, e, t) => {
                t.d(e, {
                    Eu: () => A,
                    KE: () => _,
                    Kv: () => i,
                    P3: () => d,
                    SU: () => g,
                    SW: () => c,
                    Sy: () => D,
                    VM: () => b,
                    c9: () => F,
                    ry: () => E,
                    uM: () => C,
                    uk: () => B,
                    wU: () => m,
                    wv: () => l,
                });
                var n = t(5521),
                    r = t(3138),
                    s = t(4251);
                const o = ['args'];
                function a(u, e, t, n, r, s, o) {
                    try {
                        var a = u[s](o),
                            i = a.value;
                    } catch (u) {
                        return void t(u);
                    }
                    a.done ? e(i) : Promise.resolve(i).then(n, r);
                }
                const i = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
                    E = (function () {
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
                                        var s = u.apply(e, t);
                                        function o(u) {
                                            a(s, n, r, o, i, 'next', u);
                                        }
                                        function i(u) {
                                            a(s, n, r, o, i, 'throw', u);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    A = () =>
                        new Promise((u) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    u();
                                });
                            });
                        }),
                    F = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const r = e.args,
                                s = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        n,
                                        r = {},
                                        s = Object.keys(u);
                                    for (n = 0; n < s.length; n++) (t = s[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                    return r;
                                })(e, o);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, s, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, s));
                        } else viewEnv.handleViewEvent({ __Type: t, type: u });
                        var n;
                    },
                    l = (u) => F(s.B0.MOVE, { isMouseEvent: !0, on: u }),
                    D = () => F(s.B0.CLOSE),
                    c = () => F(s.B0.POP_OVER, { on: !1 }),
                    B = (u, e, t = 0) => {
                        F(s.B0.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                    },
                    d = (u, e, t, n, o = R.invalid('resId'), a) => {
                        const E = r.O.view.getViewGlobalPosition(),
                            A = t.getBoundingClientRect(),
                            l = A.x,
                            D = A.y,
                            c = A.width,
                            B = A.height,
                            d = {
                                x: r.O.view.pxToRem(l) + E.x,
                                y: r.O.view.pxToRem(D) + E.y,
                                width: r.O.view.pxToRem(c),
                                height: r.O.view.pxToRem(B),
                            };
                        F(s.B0.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: u,
                            decoratorID: n || R.invalid('resId'),
                            targetID: o,
                            direction: e,
                            bbox: i(d),
                            on: !0,
                            args: a,
                        });
                    },
                    _ = () => viewEnv.isWindowShownByViewEvent(s.B0.TOOLTIP),
                    C = () => viewEnv.isWindowShownByViewEvent(s.B0.CONTEXT_MENU),
                    m = () => viewEnv.isWindowShownByViewEvent(s.B0.POP_OVER),
                    p = (u, e) => {
                        u.keyCode === n.n.ESCAPE && e();
                    },
                    g = (u) => {
                        p(u, D);
                    },
                    b = (u) => {
                        const e = (e) => p(e, u);
                        return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
                    };
            },
            9044: (u, e, t) => {
                var n = t(6179),
                    r = t.n(n),
                    s = t(493),
                    o = t.n(s),
                    a = t(6483),
                    i = t.n(a),
                    E = t(3138);
                function A() {
                    const u = (0, n.useRef)(0);
                    var e;
                    return (
                        (e = () => {
                            window.cancelAnimationFrame(u.current);
                        }),
                        (0, n.useEffect)(() => e, []),
                        (0, n.useMemo)(
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
                const F = {
                        base: 'TooltipDecorator_base_c9',
                        'base__theme-default': 'TooltipDecorator_base__theme-default_6d',
                        decorator: 'TooltipDecorator_decorator_3d',
                    },
                    l = ['children', 'className', 'theme'];
                function D() {
                    return (
                        (D =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        D.apply(this, arguments)
                    );
                }
                const c = r().forwardRef(function (u, e) {
                    let t = u.children,
                        s = u.className,
                        o = u.theme,
                        a = void 0 === o ? 'default' : o,
                        c = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                n,
                                r = {},
                                s = Object.keys(u);
                            for (n = 0; n < s.length; n++) (t = s[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                            return r;
                        })(u, l);
                    const B = A(),
                        d = r().useRef(null);
                    var _;
                    return (
                        (_ = () => {
                            B.run(() => {
                                const u = d.current;
                                if (!u) return;
                                const e = u.scrollWidth,
                                    t = u.scrollHeight;
                                E.O.view.resize(e, t);
                                const n = window.getComputedStyle(u);
                                E.O.view.setSidePaddingsRem({
                                    left: parseInt(n.getPropertyValue('padding-left'), 10),
                                    top: parseInt(n.getPropertyValue('padding-top'), 10),
                                    right: parseInt(n.getPropertyValue('padding-right'), 10),
                                    bottom: parseInt(n.getPropertyValue('padding-bottom'), 10),
                                });
                            });
                        }),
                        (0, n.useEffect)(_, []),
                        r().createElement(
                            'div',
                            D({}, c, {
                                className: i()(F.base, F[`base__theme-${a}`], s),
                                ref: function (u) {
                                    (d.current = u), 'function' == typeof e ? e(u) : e && (e.current = u);
                                },
                            }),
                            r().createElement('div', { className: F.decorator }, t),
                        )
                    );
                });
                var B = t(1281);
                let d;
                function _(u, e) {
                    return u.replace(/\{\w+\}/g, (u) => String(e[u.slice(1, -1)]));
                }
                !(function (u) {
                    (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                })(d || (d = {}));
                const C = (u) => u.replace(/&nbsp;/g, ' '),
                    m = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    p = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    g = (u, e, t = d.left) => u.split(e).reduce(t === d.left ? m : p, []),
                    b = (() => {
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
                    f = ['zh_cn', 'zh_sg', 'zh_tw'],
                    v = (u, e = d.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (f.includes(t)) return b(u);
                        if ('ja' === t) {
                            return (0, B.D4)()
                                .parse(u)
                                .map((u) => C(u));
                        }
                        return ((u, e = d.left) => {
                            let t = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                r = C(u);
                            return g(r, /( )/, e).forEach((u) => (t = t.concat(g(u, n, d.left)))), t;
                        })(u, e);
                    };
                var w = t(7491),
                    h = t(8613);
                const P = 3600,
                    T = 86400;
                Date.now(), h.Ew.getRegionalDateTime, h.Ew.getFormattedDateTime;
                const S = (0, n.memo)(({ duration: u }) => {
                        const e =
                            u >= 0
                                ? (t = (function (u = 0) {
                                      let e = u;
                                      const t = Math.trunc(e / T);
                                      e -= t * T;
                                      const n = Math.trunc(e / P);
                                      e -= n * P;
                                      const r = Math.trunc(e / 60);
                                      return (e -= 60 * r), { days: t, hours: n, minutes: r, seconds: e };
                                  })(u)).days > 0
                                    ? _(R.strings.common.duration.days(), { days: t.days })
                                    : t.hours > 0
                                      ? _(R.strings.common.duration.hours(), { hours: t.hours })
                                      : t.minutes > 0
                                        ? _(R.strings.common.duration.minutes(), { minutes: t.minutes })
                                        : _(R.strings.common.duration.seconds(), { seconds: t.seconds })
                                : R.strings.common.duration.unlimited();
                        var t;
                        return r().createElement('span', null, e);
                    }),
                    y = 'FormatText_base_d0',
                    O = ({ binding: u, text: e = '', classMix: t, alignment: s = d.left, formatWithBrackets: o }) => {
                        if (null === e) return console.error("FormatText was supplied with 'null'"), null;
                        const a = o && u ? _(e, u) : e;
                        return r().createElement(
                            n.Fragment,
                            null,
                            a.split('\n').map((e, o) =>
                                r().createElement(
                                    'div',
                                    { className: i()(y, t), key: `${e}-${o}` },
                                    ((u, e, t) =>
                                        u.split(/%\((.*?)\)(?:[sd])?/g).map((u) => (t && u in t ? t[u] : v(u, e))))(
                                        e,
                                        s,
                                        u,
                                    ).map((u, e) => r().createElement(n.Fragment, { key: `${e}-${u}` }, u)),
                                ),
                            ),
                        );
                    },
                    k = {
                        base: 'ProgressBar_base_45',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let I, N;
                !(function (u) {
                    (u.Small = 'small'), (u.Medium = 'medium'), (u.Default = 'medium');
                })(I || (I = {})),
                    (function (u) {
                        (u[(u.Simple = 0)] = 'Simple'), (u[(u.Growing = 1)] = 'Growing');
                    })(N || (N = {}));
                const x = ({ size: u = I.Default }) => {
                        const e = i()(k.background, k[`background__${u}`]);
                        return r().createElement('div', { className: e });
                    },
                    M = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    L = ({ size: u }) => {
                        const e = i()(M.base, M[`base__${u}`]);
                        return r().createElement('div', { className: e });
                    },
                    U = {
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
                    G = (0, n.memo)(
                        ({ size: u, lineRef: e, disabled: t, baseStyles: n, isComplete: s, withoutBounce: o }) => {
                            const a = i()(
                                    U.base,
                                    U[`base__${u}`],
                                    t && U.base__disabled,
                                    s && U.base__finished,
                                    o && U.base__withoutBounce,
                                ),
                                E = !t && !s;
                            return r().createElement(
                                'div',
                                { className: a, style: n, ref: e },
                                r().createElement('div', { className: U.pattern }),
                                r().createElement('div', { className: U.gradient }),
                                E && r().createElement(L, { size: u }),
                            );
                        },
                    ),
                    $ = ({ size: u, value: e, lineRef: t, disabled: s, onComplete: o }) => {
                        const a = (0, n.useMemo)(() => ({ width: `${e}%`, transitionProperty: 'none' }), [e]),
                            i = 100 === e;
                        return (
                            (0, n.useEffect)(() => {
                                i && o && o();
                            }, [i, o]),
                            r().createElement(G, { size: u, disabled: s, baseStyles: a, isComplete: i, lineRef: t })
                        );
                    },
                    z = (u, e) => {
                        let t;
                        const n = setTimeout(() => {
                            t = u();
                        }, e);
                        return () => {
                            'function' == typeof t && t(), clearTimeout(n);
                        };
                    };
                let q, Y;
                !(function (u) {
                    (u.Idle = 'Idle'), (u.Grow = 'Grow'), (u.Shrink = 'Shrink'), (u.End = 'End');
                })(q || (q = {})),
                    (function (u) {
                        (u.Idle = 'Idle'), (u.In = 'In'), (u.End = 'End');
                    })(Y || (Y = {}));
                const j = 'ProgressBarDeltaSimple_base_6c',
                    W = 'ProgressBarDeltaSimple_delta_99',
                    V = (0, n.memo)(
                        ({
                            transitionDuration: u,
                            transitionDelay: e,
                            freezed: t,
                            from: s,
                            size: o,
                            to: a,
                            onEndAnimation: i,
                            onChangeAnimationState: E,
                        }) => {
                            const A = a < s,
                                F = (0, n.useState)(Y.Idle),
                                l = F[0],
                                D = F[1],
                                c = l === Y.In,
                                B = l === Y.End,
                                d = l === Y.Idle,
                                _ = (0, n.useCallback)(
                                    (u) => {
                                        D(u), E && E(u);
                                    },
                                    [E],
                                );
                            (0, n.useEffect)(() => {
                                if (d && !t) {
                                    return z(() => {
                                        _(Y.In);
                                    }, e);
                                }
                            }, [_, t, d, e]),
                                (0, n.useEffect)(() => {
                                    if (c) {
                                        return z(() => {
                                            i && i(), _(Y.End);
                                        }, u + e);
                                    }
                                }, [_, c, i, e, u]);
                            const C = (0, n.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${u}ms`,
                                        transitionDelay: `${e}ms`,
                                        [A ? 'left' : 'right']: '0',
                                    }),
                                    [A, e, u],
                                ),
                                m = (0, n.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${u}ms`,
                                        transitionDelay: `${e}ms`,
                                        [A ? 'left' : 'right']: '0',
                                    }),
                                    [A, e, u],
                                ),
                                p = (0, n.useMemo)(
                                    () => ({ width: `${Math.abs(s - a)}%`, left: `${A ? a : s}%` }),
                                    [s, A, a],
                                );
                            return B
                                ? null
                                : r().createElement(
                                      'div',
                                      { className: j, style: p },
                                      r().createElement(
                                          'div',
                                          { style: d ? C : m, className: W },
                                          r().createElement(L, { size: o }),
                                      ),
                                  );
                        },
                    ),
                    X = (0, n.memo)(
                        ({
                            to: u,
                            size: e,
                            from: t,
                            lineRef: s,
                            disabled: o,
                            isComplete: a,
                            animationSettings: i,
                            onChangeAnimationState: E,
                            onEndAnimation: A,
                        }) => {
                            const F = (0, n.useMemo)(
                                () => ({
                                    width: `${u}%`,
                                    transitionDuration: `${i.line.duration}ms`,
                                    transitionDelay: `${i.line.delay}ms`,
                                }),
                                [i.line.delay, i.line.duration, u],
                            );
                            return r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(G, {
                                    size: e,
                                    lineRef: s,
                                    disabled: o,
                                    isComplete: a,
                                    baseStyles: F,
                                }),
                                t >= 0 &&
                                    r().createElement(V, {
                                        transitionDuration: i.delta.duration,
                                        transitionDelay: i.delta.delay,
                                        freezed: i.freezed,
                                        from: t,
                                        size: e,
                                        to: u,
                                        onChangeAnimationState: E,
                                        onEndAnimation: A,
                                    }),
                            );
                        },
                    ),
                    H = 'ProgressBarDeltaGrow_base_7e',
                    K = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    Q = 'ProgressBarDeltaGrow_glow_68',
                    Z = (u) => (u ? { left: 0 } : { right: 0 }),
                    J = (u, e) => (u ? { right: 100 - e + '%' } : { left: `${e}%` }),
                    uu = (u) => ({ transitionDuration: `${u}ms` }),
                    eu = (0, n.memo)(
                        ({
                            transitionDuration: u,
                            transitionDelay: e,
                            freezed: t,
                            from: s,
                            size: o,
                            to: a,
                            onEndAnimation: E,
                            onChangeAnimationState: A,
                            className: F,
                        }) => {
                            const l = a < s,
                                D = (0, n.useState)(q.Idle),
                                c = D[0],
                                B = D[1],
                                d = c === q.End,
                                _ = c === q.Idle,
                                C = c === q.Grow,
                                m = c === q.Shrink,
                                p = (0, n.useCallback)(
                                    (u) => {
                                        B(u), A && A(u);
                                    },
                                    [A],
                                ),
                                g = (0, n.useCallback)(
                                    (u, e) =>
                                        z(() => {
                                            p(u);
                                        }, e),
                                    [p],
                                );
                            (0, n.useEffect)(() => {
                                if (!t)
                                    return _
                                        ? g(q.Grow, e)
                                        : C
                                          ? g(q.Shrink, u)
                                          : m
                                            ? g(q.End, u)
                                            : void (d && E && E());
                            }, [g, t, d, C, _, m, E, e, u]);
                            const b = (0, n.useMemo)(() => Object.assign({ width: '100%' }, uu(u), Z(l)), [l, u]),
                                f = (0, n.useMemo)(() => Object.assign({ width: '0%' }, uu(u), Z(l)), [l, u]),
                                v = (0, n.useMemo)(() => Object.assign({ width: '0%' }, J(l, s), uu(u)), [s, l, u]),
                                w = (0, n.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(a - s)}%` }, J(l, s), uu(u)),
                                    [s, l, a, u],
                                );
                            if (d) return null;
                            const h = i()(H, F, l && 0 === a && K);
                            return r().createElement(
                                'div',
                                { style: _ ? v : w, className: h },
                                r().createElement(
                                    'div',
                                    { style: m ? f : b, className: Q },
                                    r().createElement(L, { size: o }),
                                ),
                            );
                        },
                    ),
                    tu = (0, n.memo)(
                        ({
                            to: u,
                            size: e,
                            from: t,
                            lineRef: s,
                            disabled: o,
                            isComplete: a,
                            animationSettings: i,
                            onEndAnimation: E,
                            onChangeAnimationState: A,
                        }) => {
                            const F = u < t,
                                l = (0, n.useState)(!1),
                                D = l[0],
                                c = l[1],
                                B = (0, n.useCallback)(
                                    (u) => {
                                        u === q.Shrink && c(!0), A && A(u);
                                    },
                                    [A],
                                ),
                                d = (0, n.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                _ = (0, n.useMemo)(
                                    () => ({ width: `${u}%`, transitionDuration: `${i.line.duration}ms` }),
                                    [i.line.duration, u],
                                );
                            return r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(G, {
                                    size: e,
                                    lineRef: s,
                                    disabled: o,
                                    isComplete: a,
                                    withoutBounce: F && 0 === u,
                                    baseStyles: D ? _ : d,
                                }),
                                t >= 0 &&
                                    r().createElement(eu, {
                                        transitionDuration: i.delta.duration,
                                        transitionDelay: i.delta.delay,
                                        onChangeAnimationState: B,
                                        freezed: i.freezed,
                                        onEndAnimation: E,
                                        from: t,
                                        size: e,
                                        to: u,
                                        className: i.delta.className,
                                    }),
                            );
                        },
                    ),
                    nu = ['onComplete', 'onEndAnimation'];
                function ru() {
                    return (
                        (ru =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        ru.apply(this, arguments)
                    );
                }
                const su = (0, n.memo)((u) => {
                        let e = u.onComplete,
                            t = u.onEndAnimation,
                            s = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    r = {},
                                    s = Object.keys(u);
                                for (n = 0; n < s.length; n++) (t = s[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                return r;
                            })(u, nu);
                        const o = (0, n.useState)(!1),
                            a = o[0],
                            i = o[1],
                            E = (0, n.useCallback)(() => {
                                const u = 100 === s.to;
                                u !== a && i(u), u && e && e(), t && t();
                            }, [a, e, t, s.to]);
                        switch (s.animationSettings.type) {
                            case N.Simple:
                                return r().createElement(X, ru({}, s, { onEndAnimation: E, isComplete: a }));
                            case N.Growing:
                                return r().createElement(tu, ru({}, s, { onEndAnimation: E, isComplete: a }));
                            default:
                                return null;
                        }
                    }),
                    ou = ['onEndAnimation'];
                function au() {
                    return (
                        (au =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        au.apply(this, arguments)
                    );
                }
                const iu = (0, n.memo)((u) => {
                    let e = u.onEndAnimation,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                n,
                                r = {},
                                s = Object.keys(u);
                            for (n = 0; n < s.length; n++) (t = s[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                            return r;
                        })(u, ou);
                    const s = (0, n.useRef)({}),
                        o = (0, n.useCallback)(() => {
                            (s.current.from = void 0), e && e();
                        }, [e]),
                        a = 'number' == typeof s.current.from ? s.current.from : t.from;
                    return (
                        (s.current.from = a),
                        r().createElement(su, au({}, t, { onEndAnimation: o, key: `${a}-${t.to}`, from: a }))
                    );
                });
                function Eu() {
                    return (
                        (Eu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        Eu.apply(this, arguments)
                    );
                }
                const Au = (0, n.memo)(
                        ({
                            size: u,
                            value: e,
                            lineRef: t,
                            disabled: n,
                            deltaFrom: s,
                            animationSettings: o,
                            onEndAnimation: a,
                            onChangeAnimationState: i,
                            onComplete: E,
                        }) => {
                            if (s === e)
                                return r().createElement($, {
                                    key: `${s}-${e}`,
                                    size: u,
                                    value: e,
                                    lineRef: t,
                                    disabled: n,
                                    onComplete: E,
                                });
                            const A = {
                                from: s,
                                to: e,
                                size: u,
                                lineRef: t,
                                disabled: n,
                                animationSettings: o,
                                onComplete: E,
                                onEndAnimation: a,
                                onChangeAnimationState: i,
                            };
                            return o.withStack
                                ? r().createElement(iu, A)
                                : r().createElement(su, Eu({ key: `${s}-${e}` }, A));
                        },
                    ),
                    Fu = (u) => ({
                        '--progress-base': `url(${u.bgImageBase})`,
                        '--progress-line-base': u.line.bgColorBase,
                        '--progress-line-disabled': u.line.bgColorDisabled,
                        '--progress-line-finished': u.line.bgColorFinished,
                        '--progress-pattern-base': `url(${u.pattern.bgImageBase})`,
                        '--progress-pattern-disabled': `url(${u.pattern.bgImageDisabled})`,
                        '--progress-pattern-finished': `url(${u.pattern.bgImageFinished})`,
                        '--progress-glow': `url('${u.glow}')`,
                        '--progress-glow-small': `url('${u.glowSmall}')`,
                        '--progress-delta-color': u.delta.color,
                        '--progress-delta-shadow': u.delta.shadow,
                    }),
                    lu = {
                        bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_grey',
                        line: { bgColorBase: '#005aca', bgColorDisabled: 'transparent', bgColorFinished: '#59a011' },
                        pattern: {
                            bgImageBase: 'R.images.gui.maps.icons.components.progress_bar.pattern_blue',
                            bgImageDisabled: 'R.images.gui.maps.icons.components.progress_bar.pattern_disabled',
                            bgImageFinished: 'R.images.gui.maps.icons.components.progress_bar.pattern_green',
                        },
                        glow: 'R.images.gui.maps.icons.components.progress_bar.glow_blue',
                        glowSmall: 'R.images.gui.maps.icons.components.progress_bar.glow_small_blue',
                        delta: {
                            color: '#c2ffff',
                            shadow: '0 0 4px 1px #00e4ff66, 0 0 9px 1px #00c6ff66, 0 0 12px 2px #00a8ff66, 0 0 12px 4px #0b5aca66',
                        },
                    },
                    Du = (u, e, t) => (t < u ? u : t > e ? e : t),
                    cu = (u, e, t) => {
                        if ('number' == typeof t) {
                            return (Du(0, e, t) / e) * 100;
                        }
                        return u;
                    },
                    Bu = {
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
                    du = {
                        freezed: !1,
                        withStack: !1,
                        type: N.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    _u = (0, n.memo)(
                        ({
                            maxValue: u = 100,
                            theme: e = Bu,
                            size: t = I.Default,
                            animationSettings: s = du,
                            disabled: o = !1,
                            withoutBackground: a = !1,
                            value: E,
                            deltaFrom: A,
                            lineRef: F,
                            onChangeAnimationState: l,
                            onEndAnimation: D,
                            onComplete: c,
                        }) => {
                            const B = ((u, e, t) =>
                                (0, n.useMemo)(() => {
                                    const n = (Du(0, e, u) / e) * 100;
                                    return { value: n, deltaFrom: cu(n, e, t) };
                                }, [t, e, u]))(E, u, A);
                            return r().createElement(
                                'div',
                                { className: i()(k.base, k[`base__${t}`]), style: Fu(e) },
                                !a && r().createElement(x, { size: t }),
                                r().createElement(Au, {
                                    size: t,
                                    lineRef: F,
                                    disabled: o,
                                    value: B.value,
                                    deltaFrom: B.deltaFrom,
                                    animationSettings: s,
                                    onEndAnimation: D,
                                    onChangeAnimationState: l,
                                    onComplete: c,
                                }),
                            );
                        },
                    );
                let Cu, mu, pu, gu, bu, fu, vu, wu;
                !(function (u) {
                    (u.Items = 'items'),
                        (u.Equipment = 'equipment'),
                        (u.Xp = 'xp'),
                        (u.XpFactor = 'xpFactor'),
                        (u.Blueprints = 'blueprints'),
                        (u.BlueprintsAny = 'blueprintsAny'),
                        (u.Goodies = 'goodies'),
                        (u.Berths = 'berths'),
                        (u.Slots = 'slots'),
                        (u.Tokens = 'tokens'),
                        (u.CrewSkins = 'crewSkins'),
                        (u.CrewBooks = 'crewBooks'),
                        (u.Customizations = 'customizations'),
                        (u.CreditsFactor = 'creditsFactor'),
                        (u.Tankman = 'tankman'),
                        (u.Tankwoman = 'tankwoman'),
                        (u.TankmenXp = 'tankmenXP'),
                        (u.TankmenXpFactor = 'tankmenXPFactor'),
                        (u.FreeXpFactor = 'freeXPFactor'),
                        (u.BattleToken = 'battleToken'),
                        (u.PremiumUniversal = 'premium_universal'),
                        (u.Gold = 'gold'),
                        (u.Credits = 'credits'),
                        (u.Crystal = 'crystal'),
                        (u.FreeXp = 'freeXP'),
                        (u.Premium = 'premium'),
                        (u.PremiumPlus = 'premium_plus'),
                        (u.BattlePassPoints = 'battlePassPoints'),
                        (u.BattlePassSelectToken = 'battlePassSelectToken'),
                        (u.StyleProgressToken = 'styleProgressToken'),
                        (u.TmanToken = 'tmanToken'),
                        (u.NaturalCover = 'naturalCover'),
                        (u.BpCoin = 'bpcoin'),
                        (u.BattlaPassFinalAchievement = 'dossier_achievement'),
                        (u.BattleBadge = 'dossier_badge'),
                        (u.NewYearInvoice = 'newYearInvoice'),
                        (u.NewYearSlot = 'newYearSlot'),
                        (u.BonusX5 = 'battle_bonus_x5'),
                        (u.CrewBonusX3 = 'crew_bonus_x3'),
                        (u.Vehicles = 'vehicles'),
                        (u.WtHunterLootbox = 'wt_hunter'),
                        (u.WtBossLootbox = 'wt_boss'),
                        (u.WtProgressPoints = 'stamp'),
                        (u.EpicSelectToken = 'epicSelectToken'),
                        (u.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                        (u.DeluxeGift = 'deluxe_gift'),
                        (u.BattleBoosterGift = 'battleBooster_gift'),
                        (u.OptionalDevice = 'optionalDevice'),
                        (u.EquipCoin = 'equipCoin'),
                        (u.WTCommanderClaimable = 'wtCommanderClaimable'),
                        (u.WTCommanderClaimed = 'wtCommanderClaimed');
                })(Cu || (Cu = {})),
                    (function (u) {
                        (u.Gold = 'gold'),
                            (u.Credits = 'credits'),
                            (u.Crystal = 'crystal'),
                            (u.Premium = 'premium'),
                            (u.PremiumPlus = 'premium_plus'),
                            (u.Vehicles = 'vehicles'),
                            (u.Customizations = 'customizations'),
                            (u.Blueprints = 'blueprints'),
                            (u.BlueprintsAny = 'blueprintsAny'),
                            (u.BlueprintsFinal = 'finalBlueprints'),
                            (u.Goodies = 'goodies'),
                            (u.CrewSkins = 'crewSkins'),
                            (u.Xp = 'xp'),
                            (u.XpFactor = 'xpFactor'),
                            (u.FreeXp = 'freeXP'),
                            (u.FreeXPFactor = 'freeXPFactor'),
                            (u.TankmenXP = 'tankmenXP'),
                            (u.TankmenXPFactor = 'tankmenXPFactor'),
                            (u.DailyXPFactor = 'dailyXPFactor'),
                            (u.CreditsFactor = 'creditsFactor'),
                            (u.Items = 'items'),
                            (u.StrBonus = 'strBonus'),
                            (u.Groups = 'groups'),
                            (u.Berths = 'berths'),
                            (u.Slots = 'slots'),
                            (u.Meta = 'meta'),
                            (u.Tokens = 'tokens'),
                            (u.Dossier = 'dossier'),
                            (u.OneOf = 'oneof'),
                            (u.PremiumUniversal = 'premium_universal'),
                            (u.BadgesGroup = 'badgesGroup'),
                            (u.Entitlements = 'entitlements'),
                            (u.RankedDailyBattles = 'rankedDailyBattles'),
                            (u.RankedBonusBattles = 'rankedBonusBattles'),
                            (u.BattlePassPoints = 'battlePassPoints'),
                            (u.BattleBadge = 'dossier_badge'),
                            (u.BattleAchievement = 'dossier_achievement'),
                            (u.EquipCoin = 'equipCoin');
                    })(mu || (mu = {})),
                    (function (u) {
                        (u.Big = 'big'),
                            (u.Small = 'small'),
                            (u.Mini = 'mini'),
                            (u.S600x450 = 's600x450'),
                            (u.S400x300 = 's400x300'),
                            (u.S296x222 = 's296x222'),
                            (u.S232x174 = 's232x174'),
                            (u.S180x135 = 's180x135'),
                            (u.S128x100 = 's128x100'),
                            (u.S80x80 = 's80x80'),
                            (u.S64x64 = 's64x64'),
                            (u.S48x48 = 's48x48');
                    })(pu || (pu = {})),
                    (function (u) {
                        (u.MULTI = 'multi'),
                            (u.CURRENCY = 'currency'),
                            (u.PREMIUM_PLUS = 'premium_plus'),
                            (u.NUMBER = 'number'),
                            (u.STRING = 'string');
                    })(gu || (gu = {})),
                    (function (u) {
                        (u.BATTLE_BOOSTER = 'battleBooster'),
                            (u.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (u.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (u.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (u.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (u.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (u.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (u.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (u.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (u.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6');
                    })(bu || (bu = {})),
                    (function (u) {
                        u.BATTLE_BOOSTER = 'battleBooster';
                    })(fu || (fu = {})),
                    (function (u) {
                        (u.BATTLE_BOOSTER = 'battleBooster'),
                            (u.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (u.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (u.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (u.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (u.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (u.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (u.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (u.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (u.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (u.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (u.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6');
                    })(vu || (vu = {})),
                    (function (u) {
                        (u[(u.Engraving = 0)] = 'Engraving'), (u[(u.Background = 1)] = 'Background');
                    })(wu || (wu = {}));
                const hu = ({ format: u, value: e }) => {
                        const t = ((u, e = 'integral') => {
                            let t;
                            t = 'gold' === e ? w.B3.GOLD : w.B3.INTEGRAL;
                            return void 0 === u ? '' : w.Z5.getNumberFormat(u, t);
                        })(e, u);
                        return t ? r().createElement('span', null, t) : null;
                    },
                    Ru = [
                        Cu.Items,
                        Cu.Equipment,
                        Cu.Xp,
                        Cu.XpFactor,
                        Cu.Blueprints,
                        Cu.BlueprintsAny,
                        Cu.Goodies,
                        Cu.Berths,
                        Cu.Slots,
                        Cu.Tokens,
                        Cu.CrewSkins,
                        Cu.CrewBooks,
                        Cu.Customizations,
                        Cu.CreditsFactor,
                        Cu.TankmenXp,
                        Cu.TankmenXpFactor,
                        Cu.FreeXpFactor,
                        Cu.BattleToken,
                        Cu.PremiumUniversal,
                        Cu.NaturalCover,
                        Cu.BpCoin,
                        Cu.BattlePassSelectToken,
                        Cu.BattlaPassFinalAchievement,
                        Cu.BattleBadge,
                        Cu.BonusX5,
                        Cu.CrewBonusX3,
                        Cu.NewYearInvoice,
                        Cu.EpicSelectToken,
                        Cu.WtHunterLootbox,
                        Cu.WtBossLootbox,
                        Cu.WtProgressPoints,
                        Cu.Comp7TokenWeeklyReward,
                        Cu.DeluxeGift,
                        Cu.BattleBoosterGift,
                        Cu.OptionalDevice,
                    ],
                    Pu = [Cu.Gold, Cu.Credits, Cu.Crystal, Cu.FreeXp],
                    Tu = [Cu.BattlePassPoints, Cu.EquipCoin],
                    Su = [Cu.PremiumPlus, Cu.Premium],
                    yu = ['engravings', 'backgrounds'],
                    Ou = ['engraving', 'background'],
                    ku = (u, e = pu.Small) => {
                        const t = u.name,
                            n = u.type,
                            r = u.value,
                            s = u.icon,
                            o = u.item,
                            a = u.dogTagType,
                            i = ((u) => {
                                switch (u) {
                                    case pu.S600x450:
                                        return 'c_600x450';
                                    case pu.S400x300:
                                        return 'c_400x300';
                                    case pu.S296x222:
                                        return 'c_296x222';
                                    case pu.S232x174:
                                        return 'c_232x174';
                                    case pu.Big:
                                        return 'c_80x80';
                                    case pu.Small:
                                        return 'c_48x48';
                                    default:
                                        return u;
                                }
                            })(e);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${n}_${r}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${t}_${r}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${o}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${e}.${s}`;
                            case 'tokens':
                            case 'battleToken':
                                return 'big' === e
                                    ? u.iconBig.replace('..', 'img://gui')
                                    : u.iconSmall.replace('..', 'img://gui');
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                            case 'groups':
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${s}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${e}.${s}`;
                            case 'dogTagComponents':
                                return ((u, e, t) => {
                                    const n = yu[u];
                                    if (n) {
                                        const r = R.images.gui.maps.icons.dogtags.$dyn(e).$dyn(n),
                                            s = r.$dyn(t);
                                        return s ? `${s}` : `${r.$dyn(Ou[u])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(a, e, s);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${i}.${s}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${i}.${s}`;
                            case 'xp':
                            case 'xpFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.exp`;
                            case 'creditsFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.credits`;
                            case 'tankmenXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.tankmenXP`;
                            case 'dailyXPFactor':
                            case 'freeXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.freeXP`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${i}.${s}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${e}.${t}`;
                        }
                    },
                    Iu = (u, e, t) => {
                        const n = e && { contentId: e };
                        return Object.assign(
                            {
                                args: u,
                                isEnabled: Boolean((u && u.tooltipId) || e),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !e,
                            },
                            n,
                            t,
                        );
                    },
                    Nu = [pu.Small, pu.Big],
                    xu = (u = 1) => {
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
                    Mu = [
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
                function Lu(u) {
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
                const Uu = (u, e, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: w.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    Gu = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            r = u.args,
                            s = u.onMouseEnter,
                            o = u.onMouseLeave,
                            a = u.onMouseDown,
                            i = u.onClick,
                            E = u.ignoreShowDelay,
                            A = void 0 !== E && E,
                            F = u.ignoreMouseClick,
                            l = void 0 !== F && F,
                            D = u.decoratorId,
                            c = void 0 === D ? 0 : D,
                            B = u.isEnabled,
                            d = void 0 === B || B,
                            _ = u.targetId,
                            C = void 0 === _ ? 0 : _,
                            m = u.onShow,
                            p = u.onHide,
                            g = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    r = {},
                                    s = Object.keys(u);
                                for (n = 0; n < s.length; n++) (t = s[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                return r;
                            })(u, Mu);
                        const b = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            f = (0, n.useMemo)(() => C || xu().resId, [C]),
                            v = (0, n.useCallback)(() => {
                                (b.current.isVisible && b.current.timeoutId) ||
                                    (Uu(t, c, { isMouseEvent: !0, on: !0, arguments: Lu(r) }, f),
                                    m && m(),
                                    (b.current.isVisible = !0));
                            }, [t, c, r, f, m]),
                            w = (0, n.useCallback)(() => {
                                if (b.current.isVisible || b.current.timeoutId) {
                                    const u = b.current.timeoutId;
                                    u > 0 && (clearTimeout(u), (b.current.timeoutId = 0)),
                                        Uu(t, c, { on: !1 }, f),
                                        b.current.isVisible && p && p(),
                                        (b.current.isVisible = !1);
                                }
                            }, [t, c, f, p]),
                            h = (0, n.useCallback)((u) => {
                                b.current.isVisible &&
                                    ((b.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (b.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(b.current.prevTarget) && w();
                                    }, 200)));
                            }, []);
                        (0, n.useEffect)(() => {
                            const u = b.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', h, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', h, { capture: !0 }),
                                        u && window.clearTimeout(u);
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === d && w();
                            }, [d, w]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', w),
                                    () => {
                                        window.removeEventListener('mouseleave', w), w();
                                    }
                                ),
                                [w],
                            );
                        return d
                            ? (0, n.cloneElement)(
                                  e,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((R = e.props.onMouseEnter),
                                              (u) => {
                                                  (u.clientX === window.innerWidth &&
                                                      u.clientY === window.innerHeight) ||
                                                      ((b.current.timeoutId = window.setTimeout(v, A ? 100 : 400)),
                                                      s && s(u),
                                                      R && R(u));
                                              }),
                                          onMouseLeave: ((u) => (e) => {
                                              w(), null == o || o(e), null == u || u(e);
                                          })(e.props.onMouseLeave),
                                          onClick: ((u) => (e) => {
                                              !1 === l && w(), null == i || i(e), null == u || u(e);
                                          })(e.props.onClick),
                                          onMouseDown: ((u) => (e) => {
                                              !1 === l && w(), null == a || a(e), null == u || u(e);
                                          })(e.props.onMouseDown),
                                      },
                                      g,
                                  ),
                              )
                            : e;
                        var R;
                    },
                    $u = ['children'];
                function zu() {
                    return (
                        (zu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        zu.apply(this, arguments)
                    );
                }
                const qu = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    r = {},
                                    s = Object.keys(u);
                                for (n = 0; n < s.length; n++) (t = s[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                return r;
                            })(u, $u);
                        return r().createElement(
                            Gu,
                            zu(
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
                    Yu = ['children', 'body', 'header', 'note', 'alert', 'args'];
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
                const Wu = R.views.common.tooltip_window.simple_tooltip_content,
                    Vu = (u) => {
                        let e = u.children,
                            t = u.body,
                            s = u.header,
                            o = u.note,
                            a = u.alert,
                            i = u.args,
                            E = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    r = {},
                                    s = Object.keys(u);
                                for (n = 0; n < s.length; n++) (t = s[n]), e.indexOf(t) >= 0 || (r[t] = u[t]);
                                return r;
                            })(u, Yu);
                        const A = (0, n.useMemo)(() => {
                            const u = Object.assign({}, i, { body: t, header: s, note: o, alert: a });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [a, t, s, o, i]);
                        return r().createElement(
                            Gu,
                            ju(
                                {
                                    contentId:
                                        ((F = null == i ? void 0 : i.hasHtmlContent),
                                        F ? Wu.SimpleTooltipHtmlContent('resId') : Wu.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: A,
                                },
                                E,
                            ),
                            e,
                        );
                        var F;
                    };
                function Xu() {
                    return (
                        (Xu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        Xu.apply(this, arguments)
                    );
                }
                const Hu = ({ children: u, tooltipArgs: e, className: t }) => {
                        if (!e) return u;
                        const n = r().createElement('div', { className: t }, u);
                        if (e.header || e.body) return r().createElement(Vu, e, n);
                        const s = e.contentId;
                        return s ? r().createElement(Gu, Xu({}, e, { contentId: s }), n) : r().createElement(qu, e, n);
                    },
                    Ku = {
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
                        title: 'Reward_title_36',
                        timer: 'Reward_timer_d3',
                    },
                    Qu = ({
                        name: u,
                        image: e,
                        isPeriodic: t = !1,
                        size: n = pu.Big,
                        special: s,
                        value: o,
                        valueType: a,
                        title: E,
                        style: A,
                        className: F,
                        classNames: l,
                        tooltipArgs: D,
                        periodicIconTooltipArgs: c,
                    }) => {
                        const B = ((u, e) => {
                                if (void 0 === e || !Nu.includes(u)) return null;
                                switch (e) {
                                    case bu.BATTLE_BOOSTER:
                                    case bu.BATTLE_BOOSTER_REPLACE:
                                        return fu.BATTLE_BOOSTER;
                                }
                            })(n, s),
                            d = ((u) => {
                                if (void 0 === u) return null;
                                switch (u) {
                                    case bu.BATTLE_BOOSTER:
                                        return vu.BATTLE_BOOSTER;
                                    case bu.BATTLE_BOOSTER_REPLACE:
                                        return vu.BATTLE_BOOSTER_REPLACE;
                                    case bu.BUILT_IN_EQUIPMENT:
                                        return vu.BUILT_IN_EQUIPMENT;
                                    case bu.EQUIPMENT_PLUS:
                                        return vu.EQUIPMENT_PLUS;
                                    case bu.EQUIPMENT_TROPHY_BASIC:
                                        return vu.EQUIPMENT_TROPHY_BASIC;
                                    case bu.EQUIPMENT_TROPHY_UPGRADED:
                                        return vu.EQUIPMENT_TROPHY_UPGRADED;
                                    case bu.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return vu.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case bu.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return vu.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case bu.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return vu.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case bu.PROGRESSION_STYLE_UPGRADED_1:
                                        return vu.PROGRESSION_STYLE_UPGRADED_1;
                                    case bu.PROGRESSION_STYLE_UPGRADED_2:
                                        return vu.PROGRESSION_STYLE_UPGRADED_2;
                                    case bu.PROGRESSION_STYLE_UPGRADED_3:
                                        return vu.PROGRESSION_STYLE_UPGRADED_3;
                                    case bu.PROGRESSION_STYLE_UPGRADED_4:
                                        return vu.PROGRESSION_STYLE_UPGRADED_4;
                                    case bu.PROGRESSION_STYLE_UPGRADED_5:
                                        return vu.PROGRESSION_STYLE_UPGRADED_5;
                                    case bu.PROGRESSION_STYLE_UPGRADED_6:
                                        return vu.PROGRESSION_STYLE_UPGRADED_6;
                                }
                            })(s),
                            _ = ((u, e) => {
                                if (void 0 === u) return null;
                                switch (e) {
                                    case gu.MULTI: {
                                        const e = Number(u);
                                        return isFinite(e) && e > 1 ? `x${Math.floor(e)}` : null;
                                    }
                                    case gu.CURRENCY:
                                    case gu.NUMBER:
                                        return r().createElement(hu, { format: 'integral', value: Number(u) });
                                    case gu.PREMIUM_PLUS: {
                                        const e = Number(u);
                                        return isNaN(e) ? u : null;
                                    }
                                    default:
                                        return u;
                                }
                            })(o, a);
                        return r().createElement(
                            'div',
                            { className: i()(Ku.base, Ku[`base__${n}`], F), style: A },
                            r().createElement(
                                Hu,
                                { tooltipArgs: D, className: Ku.tooltipWrapper },
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement(
                                        'div',
                                        { className: i()(Ku.image, null == l ? void 0 : l.image) },
                                        B &&
                                            r().createElement('div', {
                                                className: i()(Ku.highlight, null == l ? void 0 : l.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${B}_highlight)`,
                                                },
                                            }),
                                        e &&
                                            r().createElement('div', {
                                                className: i()(Ku.icon, null == l ? void 0 : l.rewardIcon),
                                                style: { backgroundImage: `url(${e})` },
                                            }),
                                        d &&
                                            r().createElement('div', {
                                                className: i()(Ku.overlay, null == l ? void 0 : l.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${d}_overlay)`,
                                                },
                                            }),
                                    ),
                                    _ &&
                                        r().createElement(
                                            'div',
                                            {
                                                className: i()(
                                                    Ku.info,
                                                    Ku[`info__${u}`],
                                                    a === gu.MULTI && Ku.info__multi,
                                                    null == l ? void 0 : l.info,
                                                ),
                                            },
                                            _,
                                        ),
                                    E && r().createElement('div', { className: Ku.title }, E),
                                ),
                            ),
                            t &&
                                r().createElement(
                                    Hu,
                                    { tooltipArgs: c },
                                    r().createElement('div', {
                                        className: i()(Ku.timer, null == l ? void 0 : l.periodicIcon),
                                    }),
                                ),
                        );
                    };
                function Zu(u) {
                    return u;
                }
                console.log;
                const Ju = (u, e) => u.split('.').reduce((u, e) => u && u[e], e),
                    ue = (u) => {
                        const e = (0, n.useRef)(!1);
                        e.current || (u(), (e.current = !0));
                    },
                    ee = (u) => u && 'ArrayItem' === u.__proto__.constructor.name,
                    te = (u, e) => (u.length > 0 ? `${u}.${e}` : e),
                    ne = (u) =>
                        ((u, e) =>
                            u.split('.').reduce((u, t) => {
                                const n = Ju(`${u}.${t}`, window);
                                return ee(n) ? e(u, t, n) : `${u}.${t}`;
                            }))(u, (u, e) => `${u}.${e}.value`),
                    re = (u) => {
                        const e = ((u) => {
                                const e = xu(),
                                    t = e.caller,
                                    n = e.resId,
                                    r = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: r, modelPath: te(r, u || ''), resId: n };
                            })(),
                            t = e.modelPrefix,
                            n = u.split('.');
                        if (n.length > 0) {
                            const u = [n[0]];
                            return (
                                n.reduce((e, n) => {
                                    const r = Ju(te(t, `${e}.${n}`), window);
                                    return ee(r) ? (u.push(r.id), `${e}.${n}.value`) : (u.push(n), `${e}.${n}`);
                                }),
                                u.reduce((u, e) => u + '.' + e)
                            );
                        }
                        return '';
                    },
                    se = w.Sw.instance;
                let oe;
                !(function (u) {
                    (u.None = 'None'), (u.Shallow = 'Shallow'), (u.Deep = 'Deep');
                })(oe || (oe = {}));
                const ae = (u = 'model', e = oe.Deep) => {
                    const t = (0, n.useState)(0),
                        r = (t[0], t[1]),
                        s = (0, n.useMemo)(() => xu(), []),
                        o = s.caller,
                        a = s.resId,
                        i = (0, n.useMemo)(
                            () => (window.__feature && window.__feature !== o ? `subViews.${o}.${u}` : u),
                            [o, u],
                        ),
                        E = (0, n.useState)(() =>
                            ((u) => {
                                const e = Ju(u, window);
                                for (const u in e) 'function' == typeof e[u] && (e[u] = e[u].bind(e));
                                return ee(e) ? e.value : e;
                            })(ne(i)),
                        ),
                        A = E[0],
                        F = E[1],
                        l = (0, n.useRef)(-1);
                    return (
                        ue(() => {
                            if (
                                ('boolean' == typeof e &&
                                    ((e = e ? oe.Deep : oe.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                e !== oe.None)
                            ) {
                                const t = (u) => {
                                        ((u) => u && 'CoherentArrayProxy' === u.__proto__.constructor.name)(u) &&
                                        e === oe.Deep
                                            ? (u === A && r((u) => u + 1), F(u))
                                            : F(Object.assign([], u));
                                    },
                                    n = re(u);
                                l.current = se.addCallback(n, t, a, e === oe.Deep);
                            }
                        }),
                        (0, n.useEffect)(() => {
                            if (e !== oe.None)
                                return () => {
                                    se.removeCallback(l.current, a);
                                };
                        }, [a, e]),
                        A
                    );
                };
                const ie = 'Content_base_6a',
                    Ee = 'Content_heading_f3',
                    Ae = 'Content_timeLeft_fa',
                    Fe = 'Content_timeLeft_accent_3c',
                    le = 'Content_timeLeft__progressionFinished_53',
                    De = 'Content_currentStage_c4',
                    ce = 'Content_currentStage_description_3d',
                    Be = 'Content_stamps_b6',
                    de = 'Content_stamps_icon_5b',
                    _e = 'Content_progress_3e',
                    Ce = 'Content_rewards_wrapper_d5',
                    me = 'Content_rewards_title_e9',
                    pe = 'Content_rewards_group_86',
                    ge = 'Content_reward_20',
                    be = 'Content_image_be',
                    fe = 'Content_completed_50';
                let ve;
                !(function (u) {
                    (u[(u.High = 1)] = 'High'), (u[(u.Medium = 2)] = 'Medium'), (u[(u.Low = 3)] = 'Low');
                })(ve || (ve = {}));
                const we = 'PerformanceWarning_base_ad',
                    he = 'PerformanceWarning_title_11',
                    Re = 'PerformanceWarning_title__medium_81',
                    Pe = 'PerformanceWarning_title__high_92',
                    Te = 'PerformanceWarning_description_74',
                    Se = ({ performanceRisk: u }) => {
                        const e = {
                                titleClasses: he,
                                title: R.strings.event.tooltips.informative.title(),
                                description: R.strings.event.tooltips.informative.subtitle(),
                            },
                            t =
                                {
                                    [ve.Low]: e,
                                    [ve.Medium]: {
                                        titleClasses: i()(he, Re),
                                        title: R.strings.event.tooltips.medium_risk.title(),
                                        description: R.strings.event.tooltips.medium_risk.subtitle(),
                                    },
                                    [ve.High]: {
                                        titleClasses: i()(he, Pe),
                                        title: R.strings.event.tooltips.high_risk.title(),
                                        description: R.strings.event.tooltips.high_risk.subtitle(),
                                    },
                                }[u] || e,
                            n = t.title,
                            s = t.titleClasses,
                            o = t.description;
                        return r().createElement(
                            'div',
                            { className: we },
                            r().createElement('div', { className: s }, n),
                            r().createElement('div', { className: Te }, o),
                        );
                    },
                    ye = 'RewardInfo_base_39',
                    Oe = 'RewardInfo_content_4b',
                    ke = 'RewardInfo_title_5b',
                    Ie = 'RewardInfo_icon_5f',
                    Ne = 'RewardInfo_description_b8',
                    xe = () =>
                        r().createElement(
                            'div',
                            { className: ye },
                            r().createElement('div', { className: ke }, R.strings.event.tooltips.commander.title()),
                            r().createElement(
                                'div',
                                { className: Oe },
                                r().createElement('div', { className: Ie }),
                                r().createElement(
                                    'div',
                                    { className: Ne },
                                    R.strings.event.tooltips.commander.description(),
                                ),
                            ),
                        );
                function Me() {
                    return (
                        (Me =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        Me.apply(this, arguments)
                    );
                }
                const Le = () => {
                        const u = ae(),
                            e = u.isProgressionCompleted,
                            t = u.stageCurrent,
                            n = u.commonCurrent,
                            s = u.commonTotal,
                            o = u.stampsCurrent,
                            a = u.stampsMax,
                            E = u.timeLeft,
                            A = u.performanceRisk,
                            F = u.rewards,
                            l = ((u) =>
                                u.map((u) => {
                                    return {
                                        name: u.name,
                                        image: ku(u, pu.Big),
                                        value: u.value,
                                        valueType:
                                            ((e = u.name),
                                            Ru.includes(e)
                                                ? gu.MULTI
                                                : Pu.includes(e)
                                                  ? gu.CURRENCY
                                                  : Tu.includes(e)
                                                    ? gu.NUMBER
                                                    : Su.includes(e)
                                                      ? gu.PREMIUM_PLUS
                                                      : gu.STRING),
                                        tooltipArgs: Iu({ tooltipId: u.tooltipId }, Number(u.tooltipContentId)),
                                    };
                                    var e;
                                }))(
                                ((D = F),
                                (c = Zu),
                                Array.isArray(D)
                                    ? D.map(c)
                                    : D.map((u, e, t) => c(null == u ? void 0 : u.value, e, t))),
                            );
                        var D, c;
                        return r().createElement(
                            'div',
                            { className: ie, style: { '--header-alignment': e ? 'center' : 'left' } },
                            r().createElement('div', { className: Ee }, R.strings.event.tooltips.title()),
                            e &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: fe }, R.strings.event.tooltips.completed()),
                                    r().createElement('div', { className: be }),
                                ),
                            E >= 0 &&
                                r().createElement(O, {
                                    classMix: i()(Ae, !e && le),
                                    binding: {
                                        timeLeft: r().createElement(
                                            'span',
                                            { className: Fe },
                                            r().createElement(S, { duration: E }),
                                        ),
                                    },
                                    text: R.strings.event.tooltips.subtitle(),
                                }),
                            !e &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: De }, t),
                                    r().createElement(
                                        'div',
                                        { className: ce },
                                        R.strings.event.tooltips.currentStage(),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: _e },
                                        r().createElement(_u, { value: n, maxValue: s, theme: lu }),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: Be },
                                        r().createElement(O, {
                                            binding: { stampsCurrent: o, stampsMax: a },
                                            text: R.strings.event.tooltips.stampsFormat(),
                                        }),
                                        r().createElement('img', {
                                            className: de,
                                            src: R.images.gui.maps.icons.wtevent.tooltips.points_icon(),
                                        }),
                                    ),
                                    r().createElement(
                                        'div',
                                        { className: Ce },
                                        r().createElement(
                                            'div',
                                            { className: me },
                                            R.strings.event.tooltips.stageAwards(),
                                        ),
                                        F &&
                                            r().createElement(
                                                'div',
                                                { className: pe },
                                                l.map((u, e) =>
                                                    r().createElement(Qu, Me({ key: e, className: ge }, u)),
                                                ),
                                            ),
                                    ),
                                ),
                            e && r().createElement(xe, null),
                            A && !e && r().createElement(Se, { performanceRisk: A }),
                        );
                    },
                    Ue = () => r().createElement(c, null, r().createElement(Le, null));
                engine.whenReady.then(() => {
                    o().render(r().createElement(Ue, null), document.getElementById('root'));
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
                for (i = 0; i < deferred.length; i++) {
                    for (var [e, t, n] = deferred[i], s = !0, o = 0; o < e.length; o++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[o]))
                            ? e.splice(o--, 1)
                            : ((s = !1), n < r && (r = n));
                    if (s) {
                        deferred.splice(i--, 1);
                        var a = t();
                        void 0 !== a && (u = a);
                    }
                }
                return u;
            }
            n = n || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > n; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [e, t, n];
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
        (__webpack_require__.j = 25),
        (() => {
            var u = { 25: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var n,
                        r,
                        [s, o, a] = t,
                        i = 0;
                    if (s.some((e) => 0 !== u[e])) {
                        for (n in o) __webpack_require__.o(o, n) && (__webpack_require__.m[n] = o[n]);
                        if (a) var E = a(__webpack_require__);
                    }
                    for (e && e(t); i < s.length; i++)
                        (r = s[i]), __webpack_require__.o(u, r) && u[r] && u[r][0](), (u[r] = 0);
                    return __webpack_require__.O(E);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [107], () => __webpack_require__(9044));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
