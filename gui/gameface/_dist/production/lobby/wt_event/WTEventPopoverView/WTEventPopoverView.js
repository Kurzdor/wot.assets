(() => {
    'use strict';
    var __webpack_modules__ = {
            527: (u, e, t) => {
                t.r(e),
                    t.d(e, { mouse: () => F, off: () => i, on: () => a, onResize: () => r, onScaleUpdated: () => E });
                var n = t(2472),
                    o = t(1176);
                const r = (0, n.E)('clientResized'),
                    E = (0, n.E)('self.onScaleUpdated'),
                    a = (u, e) => engine.on(u, e),
                    i = (u, e) => engine.off(u, e),
                    A = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const F = (function () {
                    const u = { listeners: 0, enabled: !0, initialized: !1 };
                    function e() {
                        u.enabled && (0, o.R)(!1);
                    }
                    function t() {
                        u.enabled && (0, o.R)(!0);
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
                            : (0, o.R)(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (e, t) => (
                            (e[t] = (function (e) {
                                return (t) => {
                                    u.listeners += 1;
                                    let o = !0;
                                    const r = `mouse${e}`,
                                        E = A[e]((u) => t([u, 'outside']));
                                    function a(u) {
                                        t([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, a),
                                        n(),
                                        () => {
                                            o &&
                                                (E(),
                                                window.removeEventListener(r, a),
                                                (u.listeners -= 1),
                                                n(),
                                                (o = !1));
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
                            u.enabled && (0, o.R)(!0);
                        },
                        disableOutside() {
                            u.enabled && (0, o.R)(!1);
                        },
                    });
                })();
            },
            5959: (u, e, t) => {
                t.r(e),
                    t.d(e, {
                        events: () => n,
                        getMouseGlobalPosition: () => E,
                        getSize: () => r,
                        graphicsQuality: () => a,
                        playSound: () => o.G,
                        setRTPC: () => o.E,
                    });
                var n = t(527),
                    o = t(2493);
                function r(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function E(u = 'px') {
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
                function o(u, e) {
                    engine.call('SetRTPCGlobal', u, e).catch((t) => {
                        console.error(`setRTPC('${u}', '${e}'): `, t);
                    });
                }
                t.d(e, { E: () => o, G: () => n });
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
                    o = t(514);
                const r = { view: t(7641), client: n, sound: o.ZP };
            },
            514: (u, e, t) => {
                t.d(e, { ZP: () => E });
                var n = t(5959);
                const o = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    r = Object.keys(o).reduce((u, e) => ((u[e] = () => (0, n.playSound)(o[e])), u), {}),
                    E = { play: Object.assign({}, r, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (u, e, t) => {
                function n(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function o(u, e, t) {
                    return `url(${n(u, e, t)})`;
                }
                t.r(e), t.d(e, { getBgUrl: () => o, getTextureUrl: () => n });
            },
            6112: (u, e, t) => {
                t.d(e, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (u, e, t) => {
                t.d(e, { U: () => o });
                var n = t(2472);
                const o = {
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
                        addModelObserver: () => F,
                        addPreloadTexture: () => a,
                        children: () => n,
                        displayStatus: () => o.W,
                        displayStatusIs: () => g,
                        events: () => r.U,
                        extraSize: () => f,
                        forceTriggerMouseMove: () => w,
                        freezeTextureBeforeResize: () => B,
                        getBrowserTexturePath: () => A,
                        getDisplayStatus: () => h,
                        getScale: () => C,
                        getSize: () => D,
                        getViewGlobalPosition: () => c,
                        isEventHandled: () => p,
                        isFocused: () => v,
                        pxToRem: () => d,
                        remToPx: () => _,
                        resize: () => l,
                        sendEvent: () => E.qP,
                        setAnimateWindow: () => m,
                        setEventHandled: () => b,
                        setInputPaddingsRem: () => i,
                        setSidePaddingsRem: () => s,
                        whenTutorialReady: () => y,
                    });
                var n = t(3722),
                    o = t(6112),
                    r = t(6538),
                    E = t(8566);
                function a(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function i(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function A(u, e, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, n);
                }
                function F(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function s(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function D(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function l(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function c(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: _(e.x), y: _(e.y) };
                }
                function B() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function C() {
                    return viewEnv.getScale();
                }
                function d(u) {
                    return viewEnv.pxToRem(u);
                }
                function _(u) {
                    return viewEnv.remToPx(u);
                }
                function m(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function v() {
                    return viewEnv.isFocused();
                }
                function b() {
                    return viewEnv.setEventHandled();
                }
                function p() {
                    return viewEnv.isEventHandled();
                }
                function w() {
                    viewEnv.forceTriggerMouseMove();
                }
                function h() {
                    return viewEnv.getShowingStatus();
                }
                const g = Object.keys(o.W).reduce(
                        (u, e) => ((u[e] = () => viewEnv.getShowingStatus() === o.W[e]), u),
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
                t.d(e, { qP: () => A });
                const n = ['args'];
                const o = 2,
                    r = 16,
                    E = 32,
                    a = 64,
                    i = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const r = e.args,
                                E = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        n,
                                        o = {},
                                        r = Object.keys(u);
                                    for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (o[t] = u[t]);
                                    return o;
                                })(e, n);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, E, {
                                          arguments:
                                              ((o = r),
                                              Object.entries(o).map(([u, e]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, E));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var o;
                    },
                    A = {
                        close(u) {
                            i('popover' === u ? o : E);
                        },
                        minimize() {
                            i(a);
                        },
                        move(u) {
                            i(r, { isMouseEvent: !0, on: u });
                        },
                    };
            },
            5521: (u, e, t) => {
                let n, o;
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
                    })(o || (o = {}));
            },
            1358: (u, e, t) => {
                t.d(e, { Z: () => r });
                var n = t(3138);
                class o {
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
                        return window.__dataTracker || (window.__dataTracker = new o()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(u, e, t = 0, o = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = n.O.view.addModelObserver(u, t, o);
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
                o.__instance = void 0;
                const r = o;
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
                t.d(e, { Sw: () => r.Z, B0: () => a.B0, ry: () => i.ry, Eu: () => i.Eu, SW: () => i.SW });
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
                const o = n;
                var r = t(1358);
                var E = t(8613),
                    a = t(4251),
                    i = t(8072),
                    A = t(7572);
                const F = o.instance,
                    s = {
                        DataTracker: r.Z,
                        ViewModel: A.Z,
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
                                    const o = Object.prototype.toString.call(e[n]);
                                    if (o.startsWith('[object CoherentArrayProxy]')) {
                                        const o = e[n];
                                        t[n] = [];
                                        for (let e = 0; e < o.length; e++) t[n].push({ value: u(o[e].value) });
                                    } else
                                        o.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = u(e[n]))
                                            : (t[n] = e[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: F,
                        SystemLocale: E.Z5,
                        UserLocale: E.cy,
                    };
                window.ViewEnvHelper = s;
            },
            8613: (u, e, t) => {
                t.d(e, { Ew: () => r, Z5: () => n, cy: () => o });
                const n = {
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
                    },
                    r = {
                        getRegionalDateTime: (u, e, t = !0) => regionalDateTime.getRegionalDateTime(u, e, t),
                        getFormattedDateTime: (u, e, t = !0) => regionalDateTime.getFormattedDateTime(u, e, t),
                    };
            },
            4251: (u, e, t) => {
                let n;
                t.d(e, { B0: () => n, B3: () => o, Gr: () => r, kH: () => a, lf: () => E }),
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
                const o = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    r = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    a = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
            },
            8072: (u, e, t) => {
                t.d(e, {
                    Eu: () => F,
                    KE: () => d,
                    Kv: () => i,
                    P3: () => C,
                    SU: () => b,
                    SW: () => c,
                    Sy: () => l,
                    VM: () => p,
                    c9: () => s,
                    ry: () => A,
                    uM: () => _,
                    uk: () => B,
                    wU: () => m,
                    wv: () => D,
                });
                var n = t(5521),
                    o = t(3138),
                    r = t(4251);
                const E = ['args'];
                function a(u, e, t, n, o, r, E) {
                    try {
                        var a = u[r](E),
                            i = a.value;
                    } catch (u) {
                        return void t(u);
                    }
                    a.done ? e(i) : Promise.resolve(i).then(n, o);
                }
                const i = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
                    A = (function () {
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
                                    return new Promise(function (n, o) {
                                        var r = u.apply(e, t);
                                        function E(u) {
                                            a(r, n, o, E, i, 'next', u);
                                        }
                                        function i(u) {
                                            a(r, n, o, E, i, 'throw', u);
                                        }
                                        E(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    F = () =>
                        new Promise((u) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    u();
                                });
                            });
                        }),
                    s = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const o = e.args,
                                r = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        n,
                                        o = {},
                                        r = Object.keys(u);
                                    for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (o[t] = u[t]);
                                    return o;
                                })(e, E);
                            void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, r, {
                                          arguments:
                                              ((n = o),
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
                    D = (u) => s(r.B0.MOVE, { isMouseEvent: !0, on: u }),
                    l = () => s(r.B0.CLOSE),
                    c = () => s(r.B0.POP_OVER, { on: !1 }),
                    B = (u, e, t = 0) => {
                        s(r.B0.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                    },
                    C = (u, e, t, n, E = R.invalid('resId'), a) => {
                        const A = o.O.view.getViewGlobalPosition(),
                            F = t.getBoundingClientRect(),
                            D = F.x,
                            l = F.y,
                            c = F.width,
                            B = F.height,
                            C = {
                                x: o.O.view.pxToRem(D) + A.x,
                                y: o.O.view.pxToRem(l) + A.y,
                                width: o.O.view.pxToRem(c),
                                height: o.O.view.pxToRem(B),
                            };
                        s(r.B0.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: u,
                            decoratorID: n || R.invalid('resId'),
                            targetID: E,
                            direction: e,
                            bbox: i(C),
                            on: !0,
                            args: a,
                        });
                    },
                    d = () => viewEnv.isWindowShownByViewEvent(r.B0.TOOLTIP),
                    _ = () => viewEnv.isWindowShownByViewEvent(r.B0.CONTEXT_MENU),
                    m = () => viewEnv.isWindowShownByViewEvent(r.B0.POP_OVER),
                    v = (u, e) => {
                        u.keyCode === n.n.ESCAPE && e();
                    },
                    b = (u) => {
                        v(u, l);
                    },
                    p = (u) => {
                        const e = (e) => v(e, u);
                        return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
                    };
            },
            1767: (u, e, t) => {
                var n = t(6179),
                    o = t.n(n),
                    r = t(493),
                    E = t.n(r),
                    a = t(6483),
                    i = t.n(a);
                var A = t(7491);
                const F = [
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
                function s(u) {
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
                const D = (u, e, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: A.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    l = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            o = u.args,
                            r = u.onMouseEnter,
                            E = u.onMouseLeave,
                            a = u.onMouseDown,
                            i = u.onClick,
                            A = u.ignoreShowDelay,
                            l = void 0 !== A && A,
                            c = u.ignoreMouseClick,
                            B = void 0 !== c && c,
                            C = u.decoratorId,
                            d = void 0 === C ? 0 : C,
                            _ = u.isEnabled,
                            m = void 0 === _ || _,
                            v = u.targetId,
                            b = void 0 === v ? 0 : v,
                            p = u.onShow,
                            w = u.onHide,
                            h = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    o = {},
                                    r = Object.keys(u);
                                for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (o[t] = u[t]);
                                return o;
                            })(u, F);
                        const g = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            f = (0, n.useMemo)(
                                () =>
                                    b ||
                                    ((u = 1) => {
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
                                    })().resId,
                                [b],
                            ),
                            y = (0, n.useCallback)(() => {
                                (g.current.isVisible && g.current.timeoutId) ||
                                    (D(t, d, { isMouseEvent: !0, on: !0, arguments: s(o) }, f),
                                    p && p(),
                                    (g.current.isVisible = !0));
                            }, [t, d, o, f, p]),
                            x = (0, n.useCallback)(() => {
                                if (g.current.isVisible || g.current.timeoutId) {
                                    const u = g.current.timeoutId;
                                    u > 0 && (clearTimeout(u), (g.current.timeoutId = 0)),
                                        D(t, d, { on: !1 }, f),
                                        g.current.isVisible && w && w(),
                                        (g.current.isVisible = !1);
                                }
                            }, [t, d, f, w]),
                            O = (0, n.useCallback)((u) => {
                                g.current.isVisible &&
                                    ((g.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (g.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(g.current.prevTarget) && x();
                                    }, 200)));
                            }, []);
                        (0, n.useEffect)(() => {
                            const u = g.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', O, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', O, { capture: !0 }),
                                        u && window.clearTimeout(u);
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === m && x();
                            }, [m, x]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', x),
                                    () => {
                                        window.removeEventListener('mouseleave', x), x();
                                    }
                                ),
                                [x],
                            );
                        return m
                            ? (0, n.cloneElement)(
                                  e,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((T = e.props.onMouseEnter),
                                              (u) => {
                                                  (u.clientX === window.innerWidth &&
                                                      u.clientY === window.innerHeight) ||
                                                      ((g.current.timeoutId = window.setTimeout(y, l ? 100 : 400)),
                                                      r && r(u),
                                                      T && T(u));
                                              }),
                                          onMouseLeave: ((u) => (e) => {
                                              x(), null == E || E(e), null == u || u(e);
                                          })(e.props.onMouseLeave),
                                          onClick: ((u) => (e) => {
                                              !1 === B && x(), null == i || i(e), null == u || u(e);
                                          })(e.props.onClick),
                                          onMouseDown: ((u) => (e) => {
                                              !1 === B && x(), null == a || a(e), null == u || u(e);
                                          })(e.props.onMouseDown),
                                      },
                                      h,
                                  ),
                              )
                            : e;
                        var T;
                    },
                    c = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function B() {
                    return (
                        (B =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        B.apply(this, arguments)
                    );
                }
                const C = R.views.common.tooltip_window.simple_tooltip_content,
                    d = (u) => {
                        let e = u.children,
                            t = u.body,
                            r = u.header,
                            E = u.note,
                            a = u.alert,
                            i = u.args,
                            A = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    o = {},
                                    r = Object.keys(u);
                                for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (o[t] = u[t]);
                                return o;
                            })(u, c);
                        const F = (0, n.useMemo)(() => {
                            const u = Object.assign({}, i, { body: t, header: r, note: E, alert: a });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [a, t, r, E, i]);
                        return o().createElement(
                            l,
                            B(
                                {
                                    contentId:
                                        ((s = null == i ? void 0 : i.hasHtmlContent),
                                        s ? C.SimpleTooltipHtmlContent('resId') : C.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: F,
                                },
                                A,
                            ),
                            e,
                        );
                        var s;
                    };
                var _ = t(3138);
                const m = (u) => {
                    (0, n.useEffect)(u, []);
                };
                function v(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error('[lib/sounds.js] playSound(', u, '): ', e);
                    });
                }
                const b = {
                        playHighlight() {
                            v('highlight');
                        },
                        playClick() {
                            v('play');
                        },
                        playYes() {
                            v('yes1');
                        },
                    },
                    p = {
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
                function w() {
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
                var h;
                !(function (u) {
                    (u[(u.Left = 0)] = 'Left'),
                        (u[(u.Right = 1)] = 'Right'),
                        (u[(u.Top = 2)] = 'Top'),
                        (u[(u.Bottom = 3)] = 'Bottom');
                })(h || (h = {}));
                const g = ['__left', '__right', '__top', '__bottom'],
                    f = (0, n.forwardRef)(
                        ({ children: u, disableAutoSizeUpdate: e, onOutsideClick: t, customStyles: r = {} }, E) => {
                            const a = (0, n.useRef)(null),
                                F = (0, n.useRef)(null),
                                s = (0, n.useRef)(null),
                                D = (0, n.useState)(window.decorator && window.decorator.directionType),
                                l = D[0],
                                c = D[1],
                                B = (0, n.useCallback)(() => {
                                    b.playClick(), _.O.view.sendEvent.close();
                                }, []),
                                C = (0, n.useCallback)(() => {
                                    b.playHighlight();
                                }, []),
                                v = i()(p.arrow, p[`arrow${g[l]}`]);
                            m(
                                () => (
                                    _.O.client.events.mouse.enableOutside(),
                                    _.O.client.events.mouse.down(([, u]) => {
                                        'outside' === u && (t ? t() : _.O.view.sendEvent.close('popover'));
                                    })
                                ),
                            );
                            const h = (0, n.useCallback)(
                                    (u) => {
                                        let e = u.target;
                                        do {
                                            if (e === a.current || e === s.current) return;
                                            e = e.parentNode;
                                        } while (e);
                                        const n = window.decorator;
                                        if (void 0 !== window.decorator) {
                                            const u = _.O.client.getMouseGlobalPosition(),
                                                e = ![n.boundX, n.boundY, n.boundWidth, n.boundHeight].includes(void 0),
                                                t =
                                                    u.x < n.boundX ||
                                                    u.x > n.boundX + n.boundWidth ||
                                                    u.y > n.boundY + n.boundHeight ||
                                                    u.y < n.boundY;
                                            if (e && !t) return;
                                        }
                                        t ? t() : _.O.view.sendEvent.close('popover');
                                    },
                                    [a, s, t],
                                ),
                                f = w(),
                                y = (0, n.useCallback)(() => {
                                    const u = F.current;
                                    if (u)
                                        return (
                                            _.O.view.freezeTextureBeforeResize(),
                                            f.run(() => {
                                                const e = u.scrollWidth,
                                                    t = u.scrollHeight;
                                                _.O.view.resize(e, t), c(window.decorator.directionType);
                                            })
                                        );
                                }, [f]);
                            return (
                                (0, n.useImperativeHandle)(E, () => ({ updateSize: y })),
                                m(() => {
                                    _.O.view.setInputPaddingsRem(58);
                                }),
                                (0, n.useEffect)(() => {
                                    document.addEventListener('mousedown', h, { capture: !0 });
                                    const u = ((u) => {
                                        let e = !1;
                                        return {
                                            promise: new Promise((t, n) => {
                                                u.then((u) => !e && t(u)).catch((u) => !e && n(u));
                                            }),
                                            cancel() {
                                                e = !0;
                                            },
                                        };
                                    })((0, A.Eu)());
                                    return (
                                        !e && u.promise.then(() => y()),
                                        () => {
                                            u.cancel(), document.removeEventListener('mousedown', h);
                                        }
                                    );
                                }, [y, h, e]),
                                o().createElement(
                                    'div',
                                    { className: p.base, ref: F },
                                    o().createElement(
                                        'div',
                                        { className: p.decorator },
                                        o().createElement(
                                            'div',
                                            { className: p.content, ref: a },
                                            u,
                                            window.decorator &&
                                                window.decorator.isCloseBtnVisible &&
                                                o().createElement(
                                                    d,
                                                    { body: R.strings.dialogs.common.error.cancel() },
                                                    o().createElement('div', {
                                                        className: p.closeBtn,
                                                        onClick: B,
                                                        onMouseEnter: C,
                                                        ref: s,
                                                    }),
                                                ),
                                        ),
                                        o().createElement('div', { className: v, style: r.arrow }),
                                    ),
                                )
                            );
                        },
                    );
                let y, x;
                !(function (u) {
                    (u.WtHunter = 'wt_hunter'), (u.WtBoss = 'wt_boss');
                })(y || (y = {})),
                    (function (u) {
                        (u.OnlyPortalOpen = 'only_portal_open'),
                            (u.AllClosed = 'all_closed'),
                            (u.AllOpen = 'all_open'),
                            (u.OnlyShopOpen = 'only_shop_open'),
                            (u.EventEnded = 'event_ended'),
                            (u.UnopenedLootboxes = 'unopened_lootboxes'),
                            (u.Error = 'server_error'),
                            (u.NoUnopenedLootboxes = 'no_unopened_lootboxes'),
                            (u.NoPrimeTime = 'no_prime_time');
                    })(x || (x = {}));
                var O = t(5521);
                const T = (u) => {
                    console.error(u.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function k(u = O.n.NONE, e = T, t = !1, o = !1) {
                    (0, n.useEffect)(() => {
                        if (u !== O.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === u) {
                                if (!o && _.O.view.isEventHandled()) return;
                                _.O.view.setEventHandled(), e(n), t && n.stopPropagation();
                            }
                        }
                    }, [e, u, t, o]);
                }
                var P = t(8072),
                    S = t(3403);
                function M() {
                    return !1;
                }
                console.log;
                var L = t(9174);
                function N(u, e) {
                    var t = ('undefined' != typeof Symbol && u[Symbol.iterator]) || u['@@iterator'];
                    if (t) return (t = t.call(u)).next.bind(t);
                    if (
                        Array.isArray(u) ||
                        (t = (function (u, e) {
                            if (!u) return;
                            if ('string' == typeof u) return I(u, e);
                            var t = Object.prototype.toString.call(u).slice(8, -1);
                            'Object' === t && u.constructor && (t = u.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(u);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return I(u, e);
                        })(u)) ||
                        (e && u && 'number' == typeof u.length)
                    ) {
                        t && (u = t);
                        var n = 0;
                        return function () {
                            return n >= u.length ? { done: !0 } : { done: !1, value: u[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function I(u, e) {
                    (null == e || e > u.length) && (e = u.length);
                    for (var t = 0, n = new Array(e); t < e; t++) n[t] = u[t];
                    return n;
                }
                const U = (u) => (0 === u ? window : window.subViews.get(u));
                const V = ((u, e) => {
                        const t = (0, n.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: E, children: a, mocks: i }) {
                                const A = (0, n.useRef)([]),
                                    F = (t, n, o) => {
                                        var r;
                                        const E = (function ({
                                                initializer: u = !0,
                                                rootId: e = 0,
                                                getRoot: t = U,
                                                context: n = 'model',
                                            } = {}) {
                                                const o = new Map();
                                                function r(u, e = 0) {
                                                    viewEnv.removeDataChangedCallback(u, e)
                                                        ? o.delete(u)
                                                        : console.error("Can't remove callback by id:", u);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (u, e, t) => {
                                                        t.forEach((e) => {
                                                            const t = o.get(e);
                                                            void 0 !== t && t(u);
                                                        });
                                                    });
                                                });
                                                const E = (u) => {
                                                    const o = t(e),
                                                        r = n.split('.').reduce((u, e) => u[e], o);
                                                    return 'string' != typeof u || 0 === u.length
                                                        ? r
                                                        : u.split('.').reduce((u, e) => {
                                                              const t = u[e];
                                                              return 'function' == typeof t ? t.bind(u) : t;
                                                          }, r);
                                                };
                                                return {
                                                    subscribe: (t, r) => {
                                                        const a = 'string' == typeof r ? `${n}.${r}` : n,
                                                            i = _.O.view.addModelObserver(a, e, !0);
                                                        return o.set(i, t), u && t(E(r)), i;
                                                    },
                                                    readByPath: E,
                                                    createCallback: (u, e) => {
                                                        const t = E(e);
                                                        return (...e) => {
                                                            t(u(...e));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (u) => {
                                                        const e = E(u);
                                                        return () => {
                                                            e();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var u, t = N(o.keys()); !(u = t()).done; ) r(u.value, e);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(n),
                                            a =
                                                'real' === t
                                                    ? E
                                                    : Object.assign({}, E, {
                                                          readByPath:
                                                              null != (r = null == o ? void 0 : o.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            i = (u) =>
                                                'mocks' === t ? (null == o ? void 0 : o.getter(u)) : a.readByPath(u),
                                            F = (u) => A.current.push(u),
                                            s = u({
                                                mode: t,
                                                readByPath: i,
                                                externalModel: a,
                                                observableModel: {
                                                    array: (u, e) => {
                                                        const n = null != e ? e : i(u),
                                                            o = L.LO.box(n, { equals: M });
                                                        return (
                                                            'real' === t &&
                                                                a.subscribe(
                                                                    (0, L.aD)((u) => o.set(u)),
                                                                    u,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    object: (u, e) => {
                                                        const n = null != e ? e : i(u),
                                                            o = L.LO.box(n, { equals: M });
                                                        return (
                                                            'real' === t &&
                                                                a.subscribe(
                                                                    (0, L.aD)((u) => o.set(u)),
                                                                    u,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    primitives: (u, e) => {
                                                        const n = i(e);
                                                        if (Array.isArray(u)) {
                                                            const o = u.reduce(
                                                                (u, e) => ((u[e] = L.LO.box(n[e], {})), u),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    a.subscribe(
                                                                        (0, L.aD)((e) => {
                                                                            u.forEach((u) => {
                                                                                o[u].set(e[u]);
                                                                            });
                                                                        }),
                                                                        e,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                        {
                                                            const o = u,
                                                                r = Object.entries(o),
                                                                E = r.reduce(
                                                                    (u, [e, t]) => ((u[t] = L.LO.box(n[e], {})), u),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    a.subscribe(
                                                                        (0, L.aD)((u) => {
                                                                            r.forEach(([e, t]) => {
                                                                                E[t].set(u[e]);
                                                                            });
                                                                        }),
                                                                        e,
                                                                    ),
                                                                E
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: F,
                                            }),
                                            D = { mode: t, model: s, externalModel: a, cleanup: F };
                                        return {
                                            model: s,
                                            controls: 'mocks' === t && o ? o.controls(D) : e(D),
                                            externalModel: a,
                                            mode: t,
                                        };
                                    },
                                    s = (0, n.useRef)(!1),
                                    D = (0, n.useState)(r),
                                    l = D[0],
                                    c = D[1],
                                    B = (0, n.useState)(() => F(r, E, i)),
                                    C = B[0],
                                    d = B[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        s.current ? d(F(l, E, i)) : (s.current = !0);
                                    }, [i, l, E]),
                                    (0, n.useEffect)(() => {
                                        c(r);
                                    }, [r]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            C.externalModel.dispose(), A.current.forEach((u) => u());
                                        },
                                        [C],
                                    ),
                                    o().createElement(t.Provider, { value: C }, a)
                                );
                            },
                            () => (0, n.useContext)(t),
                        ];
                    })(
                        ({ observableModel: u }) =>
                            Object.assign(
                                {},
                                u.primitives([
                                    'wtPortalStatus',
                                    'boxType',
                                    'eventExpireTime',
                                    'count',
                                    'isOpenAvailable',
                                    'isBuyAvailable',
                                    'mainRewardBoxesLeft',
                                    'maxBoxesAvailableToBuy',
                                    'boxesAvailableToBuy',
                                    'guaranteedLimit',
                                    'buyingEnableTime',
                                    'isLastEventDay',
                                    'hasErrors',
                                    'useExternalShop',
                                    'ceaseFireEndTime',
                                    'isGuaranteedAwardIgnored',
                                ]),
                            ),
                        ({ externalModel: u }) => ({
                            onOpenBtnClick: u.createCallbackNoArgs('onOpenBtnClick'),
                            onBuyBtnClick: u.createCallbackNoArgs('onBuyBtnClick'),
                            onEventBtnClick: u.createCallbackNoArgs('onEventBtnClick'),
                        }),
                    ),
                    H = V[0],
                    W = V[1];
                var j = t(1281);
                let G;
                function z(u, e) {
                    return u.replace(/\{\w+\}/g, (u) => String(e[u.slice(1, -1)]));
                }
                function q(u, e) {
                    return u.replace(/(\{|%\()\w+(\}|\)s)/g, (u) => {
                        const t = 0 === u.indexOf('%') ? 2 : 1;
                        return String(e[u.slice(t, -t)]);
                    });
                }
                !(function (u) {
                    (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                })(G || (G = {}));
                const K = (u) => u.replace(/&nbsp;/g, ' '),
                    Y = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    Z = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    $ = (u, e, t = G.left) => u.split(e).reduce(t === G.left ? Y : Z, []),
                    X = (() => {
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
                    Q = ['zh_cn', 'zh_sg', 'zh_tw'],
                    J = (u, e = G.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (Q.includes(t)) return X(u);
                        if ('ja' === t) {
                            return (0, j.D4)()
                                .parse(u)
                                .map((u) => K(u));
                        }
                        return ((u, e = G.left) => {
                            let t = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                o = K(u);
                            return $(o, /( )/, e).forEach((u) => (t = t.concat($(u, n, G.left)))), t;
                        })(u, e);
                    },
                    uu = 'BoxContent_base_f8',
                    eu = 'BoxContent_icon_c3',
                    tu = 'BoxContent_icon__hunter_d2',
                    nu = 'BoxContent_title_55',
                    ou = 'BoxContent_description_82',
                    ru = 'BoxContent_count_e0',
                    Eu = R.strings.event.popover,
                    au = (0, S.Pi)(() => {
                        const u = W().model,
                            e = u.boxType.get() === y.WtHunter,
                            t = u.count.get(),
                            n = t < 1e3 ? t : Eu.maxBoxesCount(),
                            r = i()(eu, e && tu),
                            E = e ? Eu.hunter.title() : Eu.boss.title(),
                            a = u.wtPortalStatus.get() === x.Error;
                        return o().createElement(
                            'div',
                            { className: uu },
                            o().createElement(
                                l,
                                { contentId: R.views.lobby.wt_event.tooltips.WtEventPopoverTooltipView('resId') },
                                o().createElement(
                                    'div',
                                    { className: r },
                                    t > 0 && o().createElement('div', { className: ru }, q(Eu.count(), { count: n })),
                                ),
                            ),
                            o().createElement('div', { className: nu }, E),
                            !a && o().createElement('div', { className: ou }, Eu.descr()),
                        );
                    }),
                    iu = { base: 'BoxErrorContent_base_55', title: 'BoxErrorContent_title_d0' },
                    Au = R.strings.event.popover,
                    Fu = () =>
                        o().createElement(
                            'div',
                            { className: iu.base },
                            o().createElement('div', { className: iu.bg }),
                            o().createElement('div', { className: iu.title }, Au.button.tooltip.alert()),
                        ),
                    su = {
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
                let Du, lu;
                !(function (u) {
                    (u.main = 'main'),
                        (u.primary = 'primary'),
                        (u.primaryGreen = 'primaryGreen'),
                        (u.primaryRed = 'primaryRed'),
                        (u.secondary = 'secondary'),
                        (u.ghost = 'ghost');
                })(Du || (Du = {})),
                    (function (u) {
                        (u.extraSmall = 'extraSmall'), (u.small = 'small'), (u.medium = 'medium'), (u.large = 'large');
                    })(lu || (lu = {}));
                const cu = ({
                    children: u,
                    size: e,
                    isFocused: t,
                    type: r,
                    disabled: E,
                    mixClass: a,
                    soundHover: A,
                    soundClick: F,
                    onMouseEnter: s,
                    onMouseMove: D,
                    onMouseDown: l,
                    onMouseUp: c,
                    onMouseLeave: B,
                    onClick: C,
                }) => {
                    const d = (0, n.useRef)(null),
                        _ = (0, n.useState)(t),
                        m = _[0],
                        b = _[1],
                        p = (0, n.useState)(!1),
                        w = p[0],
                        h = p[1];
                    return (
                        (0, n.useEffect)(() => {
                            function u(u) {
                                m && null !== d.current && !d.current.contains(u.target) && b(!1);
                            }
                            return (
                                document.addEventListener('mousedown', u),
                                () => {
                                    document.removeEventListener('mousedown', u);
                                }
                            );
                        }, [m]),
                        (0, n.useEffect)(() => {
                            b(t);
                        }, [t]),
                        o().createElement(
                            'div',
                            {
                                ref: d,
                                className: i()(
                                    su.base,
                                    su[`base__${r}`],
                                    E && su.base__disabled,
                                    e && su[`base__${e}`],
                                    m && su.base__focus,
                                    w && su.base__highlightActive,
                                    a,
                                ),
                                onMouseEnter: function (u) {
                                    E || (null !== A && v(A), s && s(u));
                                },
                                onMouseMove: function (u) {
                                    D && D(u);
                                },
                                onMouseUp: function (u) {
                                    E || (c && c(u), h(!1));
                                },
                                onMouseDown: function (u) {
                                    E ||
                                        (null !== F && v(F),
                                        l && l(u),
                                        t && (E || (d.current && (d.current.focus(), b(!0)))),
                                        h(!0));
                                },
                                onMouseLeave: function (u) {
                                    E || (B && B(u), h(!1));
                                },
                                onClick: function (u) {
                                    E || (C && C(u));
                                },
                            },
                            r !== Du.ghost &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: su.back }),
                                    o().createElement('span', { className: su.texture }),
                                ),
                            o().createElement(
                                'span',
                                { className: i()(su.state, su.state__default) },
                                o().createElement('span', { className: su.stateDisabled }),
                                o().createElement('span', { className: su.stateHighlightHover }),
                                o().createElement('span', { className: su.stateHighlightActive }),
                            ),
                            o().createElement(
                                'span',
                                { className: su.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                u,
                            ),
                        )
                    );
                };
                cu.defaultProps = { type: Du.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Bu = cu,
                    Cu = 'FormatText_base_d0',
                    du = ({ binding: u, text: e = '', classMix: t, alignment: r = G.left, formatWithBrackets: E }) => {
                        if (null === e) return console.error("FormatText was supplied with 'null'"), null;
                        const a = E && u ? z(e, u) : e;
                        return o().createElement(
                            n.Fragment,
                            null,
                            a.split('\n').map((e, E) =>
                                o().createElement(
                                    'div',
                                    { className: i()(Cu, t), key: `${e}-${E}` },
                                    ((u, e, t) =>
                                        u.split(/%\((.*?)\)(?:[sd])?/g).map((u) => (t && u in t ? t[u] : J(u, e))))(
                                        e,
                                        r,
                                        u,
                                    ).map((u, e) => o().createElement(n.Fragment, { key: `${e}-${u}` }, u)),
                                ),
                            ),
                        );
                    };
                var _u = t(8613);
                const mu = 60,
                    vu = 3600,
                    bu = 86400;
                Date.now(), _u.Ew.getRegionalDateTime, _u.Ew.getFormattedDateTime;
                const pu = () => {},
                    wu = (u = 0, e, t = 0, o = pu) => {
                        const r = (0, n.useState)(u),
                            E = r[0],
                            a = r[1];
                        return (
                            (0, n.useEffect)(() => {
                                if (u > 0) {
                                    a(u);
                                    const n = Date.now(),
                                        r = setInterval(
                                            () => {
                                                const e = u - Math.floor((Date.now() - n) / 1e3);
                                                null !== t && e <= t ? (a(t), o && o(), clearInterval(r)) : a(e);
                                            },
                                            1e3 * (e || (u > 120 ? mu : 1)),
                                        );
                                    return () => {
                                        clearInterval(r);
                                    };
                                }
                            }, [u, e, t, o]),
                            E
                        );
                    };
                A.Sw.instance;
                let hu;
                !(function (u) {
                    (u.None = 'None'), (u.Shallow = 'Shallow'), (u.Deep = 'Deep');
                })(hu || (hu = {}));
                A.Sw.instance;
                const gu = wu,
                    fu = { weight: 2, width: 1600, height: 900 },
                    yu = 1.6,
                    xu = (u) => (e, t) =>
                        e / t >= 2.4000000000000004
                            ? u(viewEnv.remToPx(t) * yu, viewEnv.remToPx(t), e, t)
                            : u(viewEnv.remToPx(e), 0.625 * viewEnv.remToPx(e), e, t),
                    Ou = viewEnv.remToPx(900),
                    Tu = { width: Ou * yu, height: Ou },
                    ku = viewEnv.remToPx(1200),
                    Pu = { width: ku * yu, height: ku },
                    Ru =
                        (xu((u, e, t, n) =>
                            u < Tu.width
                                ? Tu
                                : t > fu.width && n > fu.height && u < Pu.width
                                  ? Pu
                                  : { width: u, height: e },
                        ),
                        viewEnv.remToPx(700)),
                    Su = { width: Ru * yu, height: Ru },
                    Mu =
                        (xu((u, e) => (u < Su.width ? Su : { width: u, height: e })),
                        (u, e, t, n, o) => {
                            const r = (function (u = 0) {
                                let e = u;
                                const t = Math.trunc(e / bu);
                                e -= t * bu;
                                const n = Math.trunc(e / vu);
                                e -= n * vu;
                                const o = Math.trunc(e / mu);
                                return (e -= o * mu), { days: t, hours: n, minutes: o, seconds: e };
                            })(u);
                            return r.days
                                ? Lu(e, { days: r.days })
                                : r.hours
                                  ? Lu(t, { hours: r.hours, minutes: r.minutes })
                                  : r.minutes
                                    ? Lu(n, { minutes: r.minutes })
                                    : o;
                        }),
                    Lu = (u, e) => (u ? q(u, e) : null),
                    Nu = 'BoxBoughtInfo_base_6e',
                    Iu = 'BoxBoughtInfo_icon_c3',
                    Uu = R.strings.event.popover,
                    Vu = ({ tooltipData: u }) =>
                        o().createElement(
                            'div',
                            { className: Nu },
                            Uu.buyingAvailable.buyingEnable.bought(),
                            o().createElement(d, u, o().createElement('div', { className: Iu })),
                        ),
                    Hu = 'BoxCooldownInfo_base_cd',
                    Wu = 'BoxCooldownInfo_lockIcon_30',
                    ju = 'BoxCooldownInfo_timer_d0',
                    Gu = R.strings.event.popover,
                    zu = ({ tooltipData: u, buyingEnableTime: e }) => {
                        const t = gu(e, 1),
                            r = (0, n.useMemo)(
                                () => ({
                                    time: o().createElement(
                                        'div',
                                        { className: ju },
                                        Mu(
                                            t,
                                            null,
                                            Gu.buyingAvailable.buyingEnable.hours(),
                                            Gu.buyingAvailable.buyingEnable.minutes(),
                                            Gu.buyingAvailable.buyingEnable.lessThanMinute(),
                                        ),
                                    ),
                                }),
                                [t],
                            );
                        return o().createElement(
                            d,
                            u,
                            o().createElement(
                                'div',
                                { className: Hu },
                                o().createElement('div', { className: Wu }),
                                o().createElement(du, { text: Gu.buyingAvailable.buyingEnable.left(), binding: r }),
                            ),
                        );
                    },
                    qu = 'BoxCountInfo_base_71',
                    Ku = 'BoxCountInfo_icon_a6',
                    Yu = 'BoxCountInfo_count_d2',
                    Zu = ({ text: u, tooltipData: e, countValue: t }) =>
                        o().createElement(
                            'div',
                            { className: qu },
                            o().createElement(du, {
                                text: u,
                                binding: { count: o().createElement('div', { className: Yu }, t) },
                            }),
                            o().createElement(d, e, o().createElement('div', { className: Ku })),
                        ),
                    $u = 'ButtonContent_base_30',
                    Xu = 'ButtonContent_mainRewardInfo_05',
                    Qu = 'ButtonContent_mainRewardInfo__ignored_15',
                    Ju = 'ButtonContent_mainRewardInfo__content_f4',
                    ue = 'ButtonContent_mainRewardCount_cb',
                    ee = 'ButtonContent_mainRewardCount__count_66',
                    te = 'ButtonContent_infoIcon_39',
                    ne = 'ButtonContent_infoIcon__ignored_9c',
                    oe = 'ButtonContent_alertIcon_48',
                    re = 'ButtonContent_buttonBlock_17',
                    Ee = 'ButtonContent_base__openDisabled_4b',
                    ae = 'ButtonContent_cButton_17',
                    ie = 'ButtonContent_buttonIcon_77',
                    Ae = 'ButtonContent_buttonContainer_81';
                function Fe() {
                    return (
                        (Fe =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        Fe.apply(this, arguments)
                    );
                }
                const se = R.strings.event.popover;
                var De;
                !(function (u) {
                    (u.Available = 'Available'),
                        (u.Cooldown = 'Cooldown'),
                        (u.UnavailableLastDay = 'UnavailableLastDay'),
                        (u.Error = 'Error'),
                        (u.Exhausted = 'Exhausted'),
                        (u.Remaining = 'Remaining');
                })(De || (De = {}));
                const le = () => ({ body: se.button.tooltip.alert() }),
                    ce = () => ({
                        header: se.buyingAvailable.lastEventDay.tooltip.header(),
                        body: se.buyingAvailable.lastEventDay.tooltip.body(),
                    }),
                    Be = (u) => ({
                        header: se.button.tooltip.boxesEnded.header(),
                        body: Mu(
                            u,
                            null,
                            se.button.tooltip.boxesEnded.body.hours(),
                            se.button.tooltip.boxesEnded.body.minutes(),
                            se.button.tooltip.boxesEnded.body.soon(),
                        ),
                    }),
                    Ce = () => ({
                        header: se.buyingAvailable.lastEventDay.tooltip.header(),
                        body: se.buyingAvailable.lastEventDay.tooltip.body(),
                    }),
                    de = (u, e) => ({
                        header: q(se.buyingAvailable.buyingEnable.tooltip.header(), { count: u }),
                        body: q(se.buyingAvailable.buyingEnable.tooltip.body(), { text: e }),
                    }),
                    _e = (0, S.Pi)(() => {
                        const u = W(),
                            e = u.model,
                            t = e.wtPortalStatus,
                            r = e.boxType,
                            E = e.guaranteedLimit,
                            a = e.mainRewardBoxesLeft,
                            F = e.maxBoxesAvailableToBuy,
                            s = e.boxesAvailableToBuy,
                            D = e.buyingEnableTime,
                            c = e.useExternalShop,
                            B = e.count,
                            C = e.ceaseFireEndTime,
                            _ = e.isGuaranteedAwardIgnored,
                            m = u.controls,
                            v = r.get() === y.WtBoss,
                            b = t.get(),
                            p = B.get(),
                            w = C.get(),
                            h = _.get(),
                            g = ((f = b), p > 0 && (f === x.OnlyPortalOpen || f === x.AllOpen || f === x.EventEnded));
                        var f;
                        const O = ((u, e) =>
                                u > 0 &&
                                (e === x.EventEnded ||
                                    e === x.UnopenedLootboxes ||
                                    e === x.NoPrimeTime ||
                                    e === x.NoUnopenedLootboxes))(p, b),
                            T = ((u) => u === x.OnlyShopOpen || u === x.AllOpen || u === x.EventEnded)(b),
                            k = ((u) => u === x.UnopenedLootboxes || u === x.NoUnopenedLootboxes || u === x.Error)(b),
                            P = ((u) => u === x.Error || u === x.NoPrimeTime)(b),
                            S = ((u) => {
                                switch (u) {
                                    case x.OnlyPortalOpen:
                                        return De.Cooldown;
                                    case x.AllClosed:
                                        return De.Exhausted;
                                    case x.AllOpen:
                                        return De.Available;
                                    case x.OnlyShopOpen:
                                        return De.Remaining;
                                    default:
                                        return De.Error;
                                }
                            })(b),
                            M = ((u, e) => !u || e === x.AllClosed || e === x.Error)(v, b),
                            L = i()($u, M && Ee),
                            N = gu(D.get(), 1),
                            I = (0, n.useMemo)(() => {
                                return r.get() === y.WtBoss
                                    ? ((u, e, t, n) => {
                                          switch (u) {
                                              case De.Error:
                                                  return le();
                                              case De.UnavailableLastDay:
                                                  return ce();
                                              case De.Cooldown:
                                                  return Be(e);
                                              case De.Exhausted:
                                                  return Ce();
                                              case De.Available:
                                              default:
                                                  return de(t, n);
                                          }
                                      })(S, N, s.get(), F.get())
                                    : b === x.Error
                                      ? le()
                                      : b === x.NoPrimeTime
                                        ? ((u = w),
                                          {
                                              header: se.ceaseFire.tooltip.header(),
                                              body: Mu(
                                                  u,
                                                  null,
                                                  se.ceaseFire.tooltip.body.hours(),
                                                  se.ceaseFire.tooltip.body.minutes(),
                                                  se.ceaseFire.tooltip.body.soon(),
                                              ),
                                          })
                                        : {
                                              header: se.harrierEvent.tooltip.header(),
                                              body: se.harrierEvent.tooltip.body(),
                                          };
                                var u;
                            }, [S, N, s, F, r, b, w]),
                            U = (0, n.useMemo)(() => {
                                switch (S) {
                                    case De.Available:
                                        return o().createElement(Zu, {
                                            text: se.buyingAvailable.boxesAvailableToBuy(),
                                            countValue: s.get(),
                                            tooltipData: I,
                                        });
                                    case De.Cooldown:
                                        return o().createElement(zu, { buyingEnableTime: D.get(), tooltipData: I });
                                    case De.Exhausted:
                                        return o().createElement(Vu, { tooltipData: I });
                                    case De.Remaining:
                                        return o().createElement(Zu, {
                                            text: se.remaining.purchasesRemaining(),
                                            countValue: s.get(),
                                            tooltipData: I,
                                        });
                                    case De.Error:
                                    default:
                                        return null;
                                }
                            }, [S, s, D, I]),
                            V = i()(Xu, h && Qu),
                            H = i()(te, h && ne);
                        return o().createElement(
                            'div',
                            { className: L },
                            !M &&
                                o().createElement(
                                    'div',
                                    { className: V },
                                    h
                                        ? se.mainReward.ignored.info.tooltip.body()
                                        : o().createElement(du, {
                                              text: se.mainReward.count(),
                                              classMix: Ju,
                                              binding: {
                                                  count: o().createElement(
                                                      'span',
                                                      null,
                                                      o().createElement(
                                                          'span',
                                                          { className: ue },
                                                          o().createElement('div', { className: ee }, a.get()),
                                                      ),
                                                      o().createElement(
                                                          d,
                                                          {
                                                              header: se.mainReward.info.tooltip.header(),
                                                              body: q(se.mainReward.info.tooltip.body(), {
                                                                  fails: E.get() - 1,
                                                                  guaranteed: E.get(),
                                                              }),
                                                          },
                                                          o().createElement('span', { className: H }),
                                                      ),
                                                  ),
                                              },
                                          }),
                                    h &&
                                        o().createElement(
                                            l,
                                            {
                                                contentId:
                                                    R.views.lobby.wt_event.tooltips.WtGuaranteedRewardTooltipView(
                                                        'resId',
                                                    ),
                                            },
                                            o().createElement('div', { className: H }),
                                        ),
                                ),
                            o().createElement(
                                'div',
                                { className: re },
                                o().createElement(
                                    d,
                                    { isEnabled: v ? !g : !O, body: se.button.tooltip.boxesEnded.header() },
                                    o().createElement(
                                        'div',
                                        { className: Ae },
                                        o().createElement(
                                            Bu,
                                            {
                                                type: Du.primary,
                                                size: lu.small,
                                                mixClass: ae,
                                                onClick: p <= 0 ? A.SW : m.onOpenBtnClick,
                                                disabled: v ? !g : !O,
                                            },
                                            se.buttonLabel.open(),
                                        ),
                                    ),
                                ),
                                o().createElement(
                                    d,
                                    Fe({ isEnabled: r.get() === y.WtBoss ? !T : !k }, I),
                                    o().createElement(
                                        'div',
                                        { className: Ae },
                                        o().createElement(
                                            Bu,
                                            {
                                                type: Du.main,
                                                size: lu.small,
                                                mixClass: ae,
                                                onClick: v ? m.onBuyBtnClick : m.onEventBtnClick,
                                                disabled: v ? !T : !k,
                                            },
                                            ((u) => (u === y.WtBoss ? se.buttonLabel.buy() : se.buttonLabel.toEvent()))(
                                                r.get(),
                                            ),
                                            c.get() && o().createElement('div', { className: ie }),
                                        ),
                                        v && P && o().createElement('div', { className: oe }),
                                    ),
                                ),
                            ),
                            v && F.get() > 0 && U,
                        );
                    }),
                    me = 'Header_base_8c',
                    ve = 'Header_label_73',
                    be = 'Header_timeContent_bb',
                    pe = 'Header_time_15',
                    we = 'Header_timerIcon_0b',
                    he = R.strings.event.popover.header,
                    ge = (0, S.Pi)(() => {
                        const u = W().model,
                            e = u.eventExpireTime,
                            t = u.wtPortalStatus,
                            r = gu(e.get(), 1),
                            E = t.get() === x.EventEnded,
                            a = (0, n.useMemo)(
                                () => ({
                                    text: o().createElement('div', { className: pe }, E && he.toLootboxesPreText()),
                                    time: o().createElement(
                                        'div',
                                        { className: pe },
                                        Mu(
                                            r,
                                            he.time.days(),
                                            he.time.hours(),
                                            he.time.minutes(),
                                            he.time.lessThanMinute(),
                                        ),
                                    ),
                                }),
                                [r, E],
                            );
                        return o().createElement(
                            'div',
                            { className: me },
                            o().createElement(
                                'div',
                                null,
                                o().createElement('span', { className: ve }, he.title()),
                                o().createElement(
                                    'div',
                                    { className: be },
                                    o().createElement('div', { className: we }),
                                    o().createElement(du, {
                                        text: E ? he.toLootboxesText() : he.timeLeftText(),
                                        binding: a,
                                    }),
                                ),
                            ),
                        );
                    }),
                    fe = 'App_base_9b',
                    ye = 'App_separator1_e1',
                    xe = 'App_separator2_e2',
                    Oe = (0, S.Pi)(() => {
                        const u = W().model.wtPortalStatus;
                        window.decorator = { isCloseBtnVisible: !1 };
                        const e = (0, n.useCallback)(() => {
                                (0, P.SW)();
                            }, []),
                            t = u.get() === x.Error;
                        return (
                            k(O.n.ESCAPE, () => e()),
                            o().createElement(
                                f,
                                { onOutsideClick: e },
                                o().createElement(
                                    'div',
                                    { className: fe },
                                    o().createElement(ge, null),
                                    o().createElement('div', { className: ye }),
                                    o().createElement(au, null),
                                    t && o().createElement(Fu, null),
                                    o().createElement('div', { className: xe }),
                                    o().createElement(_e, null),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    E().render(
                        o().createElement(H, null, o().createElement(Oe, null)),
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
                var o = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [e, t, n] = deferred[i], r = !0, E = 0; E < e.length; E++)
                        (!1 & n || o >= n) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[E]))
                            ? e.splice(E--, 1)
                            : ((r = !1), n < o && (o = n));
                    if (r) {
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
        (__webpack_require__.j = 531),
        (() => {
            var u = { 531: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var n,
                        o,
                        [r, E, a] = t,
                        i = 0;
                    if (r.some((e) => 0 !== u[e])) {
                        for (n in E) __webpack_require__.o(E, n) && (__webpack_require__.m[n] = E[n]);
                        if (a) var A = a(__webpack_require__);
                    }
                    for (e && e(t); i < r.length; i++)
                        (o = r[i]), __webpack_require__.o(u, o) && u[o] && u[o][0](), (u[o] = 0);
                    return __webpack_require__.O(A);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [107], () => __webpack_require__(1767));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
