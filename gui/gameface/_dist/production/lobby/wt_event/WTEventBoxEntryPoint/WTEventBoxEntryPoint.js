(() => {
    var __webpack_modules__ = {
            926: (u) => {
                u.exports = {
                    SMALL_WIDTH: 'mediaSmallWidth',
                    MEDIUM_WIDTH: 'mediaMediumWidth',
                    LARGE_WIDTH: 'mediaLargeWidth',
                    EXTRA_LARGE_WIDTH: 'mediaExtraLargeWidth',
                    SMALL_HEIGHT: 'mediaSmallHeight',
                    MEDIUM_HEIGHT: 'mediaMediumHeight',
                    LARGE_HEIGHT: 'mediaLargeHeight',
                    EXTRA_LARGE_HEIGHT: 'mediaExtraLargeHeight',
                    SMALL: 'mediaSmall',
                    MEDIUM: 'mediaMedium',
                    LARGE: 'mediaLarge',
                    EXTRA_LARGE: 'mediaExtraLarge',
                };
            },
            527: (u, e, t) => {
                'use strict';
                t.r(e),
                    t.d(e, { mouse: () => l, off: () => E, on: () => o, onResize: () => i, onScaleUpdated: () => a });
                var r = t(2472),
                    n = t(1176);
                const i = (0, r.E)('clientResized'),
                    a = (0, r.E)('self.onScaleUpdated'),
                    o = (u, e) => engine.on(u, e),
                    E = (u, e) => engine.off(u, e),
                    s = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') };
                const l = (function () {
                    const u = { listeners: 0, enabled: !0, initialized: !1 };
                    function e() {
                        u.enabled && (0, n.R)(!1);
                    }
                    function t() {
                        u.enabled && (0, n.R)(!0);
                    }
                    function r() {
                        u.enabled
                            ? u.listeners < 1
                                ? ((u.initialized = !1),
                                  document.body.removeEventListener('mouseenter', e),
                                  document.body.removeEventListener('mouseleave', t))
                                : u.initialized ||
                                  ((u.initialized = !0),
                                  document.body.addEventListener('mouseenter', e),
                                  document.body.addEventListener('mouseleave', t))
                            : (0, n.R)(!1);
                    }
                    const i = ['down', 'up', 'move'].reduce(
                        (e, t) => (
                            (e[t] = (function (e) {
                                return (t) => {
                                    u.listeners += 1;
                                    let n = !0;
                                    const i = `mouse${e}`,
                                        a = s[e]((u) => t([u, 'outside']));
                                    function o(u) {
                                        t([u, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, o),
                                        r(),
                                        () => {
                                            n &&
                                                (a(),
                                                window.removeEventListener(i, o),
                                                (u.listeners -= 1),
                                                r(),
                                                (n = !1));
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
                            (u.enabled = !1), r();
                        },
                        enable() {
                            (u.enabled = !0), r();
                        },
                        enableOutside() {
                            u.enabled && (0, n.R)(!0);
                        },
                        disableOutside() {
                            u.enabled && (0, n.R)(!1);
                        },
                    });
                })();
            },
            5959: (u, e, t) => {
                'use strict';
                t.r(e),
                    t.d(e, {
                        events: () => r,
                        getMouseGlobalPosition: () => a,
                        getSize: () => i,
                        graphicsQuality: () => o,
                        playSound: () => n.G,
                        setRTPC: () => n.E,
                    });
                var r = t(527),
                    n = t(2493);
                function i(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function a(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (u, e, t) => {
                'use strict';
                function r(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                t.d(e, { R: () => r });
            },
            2493: (u, e, t) => {
                'use strict';
                function r(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error(`playSound('${u}'): `, e);
                    });
                }
                function n(u, e) {
                    engine.call('SetRTPCGlobal', u, e).catch((t) => {
                        console.error(`setRTPC('${u}', '${e}'): `, t);
                    });
                }
                t.d(e, { E: () => n, G: () => r });
            },
            2472: (u, e, t) => {
                'use strict';
                function r(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                t.d(e, { E: () => r });
            },
            3138: (u, e, t) => {
                'use strict';
                t.d(e, { O: () => i });
                var r = t(5959),
                    n = t(514);
                const i = { view: t(7641), client: r, sound: n.ZP };
            },
            514: (u, e, t) => {
                'use strict';
                t.d(e, { ZP: () => a });
                var r = t(5959);
                const n = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    i = Object.keys(n).reduce((u, e) => ((u[e] = () => (0, r.playSound)(n[e])), u), {}),
                    a = { play: Object.assign({}, i, { sound: r.playSound }), setRTPC: r.setRTPC };
            },
            3722: (u, e, t) => {
                'use strict';
                function r(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function n(u, e, t) {
                    return `url(${r(u, e, t)})`;
                }
                t.r(e), t.d(e, { getBgUrl: () => n, getTextureUrl: () => r });
            },
            6112: (u, e, t) => {
                'use strict';
                t.d(e, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (u, e, t) => {
                'use strict';
                t.d(e, { U: () => n });
                var r = t(2472);
                const n = {
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
            7641: (u, e, t) => {
                'use strict';
                t.r(e),
                    t.d(e, {
                        addModelObserver: () => l,
                        addPreloadTexture: () => o,
                        children: () => r,
                        displayStatus: () => n.W,
                        displayStatusIs: () => p,
                        events: () => i.U,
                        extraSize: () => b,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => D,
                        getBrowserTexturePath: () => s,
                        getDisplayStatus: () => f,
                        getScale: () => B,
                        getSize: () => F,
                        getViewGlobalPosition: () => d,
                        isEventHandled: () => w,
                        isFocused: () => h,
                        pxToRem: () => m,
                        remToPx: () => _,
                        resize: () => c,
                        sendEvent: () => a.qP,
                        setAnimateWindow: () => C,
                        setEventHandled: () => g,
                        setInputPaddingsRem: () => E,
                        setSidePaddingsRem: () => A,
                        whenTutorialReady: () => x,
                    });
                var r = t(3722),
                    n = t(6112),
                    i = t(6538),
                    a = t(8566);
                function o(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function E(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function s(u, e, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, r);
                }
                function l(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function A(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function F(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function c(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function d(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: _(e.x), y: _(e.y) };
                }
                function D() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function B() {
                    return viewEnv.getScale();
                }
                function m(u) {
                    return viewEnv.pxToRem(u);
                }
                function _(u) {
                    return viewEnv.remToPx(u);
                }
                function C(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function h() {
                    return viewEnv.isFocused();
                }
                function g() {
                    return viewEnv.setEventHandled();
                }
                function w() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function f() {
                    return viewEnv.getShowingStatus();
                }
                const p = Object.keys(n.W).reduce(
                        (u, e) => ((u[e] = () => viewEnv.getShowingStatus() === n.W[e]), u),
                        {},
                    ),
                    b = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    x = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : i.U.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (u, e, t) => {
                'use strict';
                t.d(e, { qP: () => s });
                const r = ['args'];
                const n = 2,
                    i = 16,
                    a = 32,
                    o = 64,
                    E = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const i = e.args,
                                a = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        r,
                                        n = {},
                                        i = Object.keys(u);
                                    for (r = 0; r < i.length; r++) (t = i[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                    return n;
                                })(e, r);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, a, {
                                          arguments:
                                              ((n = i),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, a));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var n;
                    },
                    s = {
                        close(u) {
                            E('popover' === u ? n : a);
                        },
                        minimize() {
                            E(o);
                        },
                        move(u) {
                            E(i, { isMouseEvent: !0, on: u });
                        },
                    };
            },
            5521: (u, e, t) => {
                'use strict';
                let r, n;
                t.d(e, { n: () => r }),
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
                    })(r || (r = {})),
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
                    })(n || (n = {}));
            },
            1358: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => i });
                var r = t(3138);
                class n {
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
                        return window.__dataTracker || (window.__dataTracker = new n()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(u, e, t = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const i = r.O.view.addModelObserver(u, t, n);
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
                            const r = this._callbacks[t];
                            void 0 !== r && r(u, e);
                        });
                    }
                }
                n.__instance = void 0;
                const i = n;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
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
                'use strict';
                t.d(e, {
                    Sw: () => i.Z,
                    B0: () => o.B0,
                    wU: () => E.wU,
                    ry: () => E.ry,
                    Eu: () => E.Eu,
                    SW: () => E.SW,
                    P3: () => E.P3,
                });
                class r {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (u) => {
                                this.entries.forEach(({ container: e, callback: t }) => {
                                    let r = u.target;
                                    do {
                                        if (r === e) return;
                                        r = r.parentNode;
                                    } while (r);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return r.__instance || (r.__instance = new r()), r.__instance;
                    }
                    register(u, e) {
                        this.addMouseListener(), this.entries.push({ container: u, callback: e });
                    }
                    unregister(u, e) {
                        const t = u,
                            r = e;
                        (this.entries = this.entries.filter(({ container: u, callback: e }) => u !== t || e !== r)),
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
                const n = r;
                var i = t(1358);
                var a = t(8613),
                    o = t(4251),
                    E = t(8072),
                    s = t(7572);
                const l = n.instance,
                    A = {
                        DataTracker: i.Z,
                        ViewModel: s.Z,
                        ViewEventType: o.B0,
                        NumberFormatType: o.B3,
                        RealFormatType: o.Gr,
                        TimeFormatType: o.lf,
                        DateFormatType: o.kH,
                        makeGlobalBoundingBox: E.Kv,
                        sendMoveEvent: E.wv,
                        sendCloseEvent: E.Sy,
                        sendClosePopOverEvent: E.SW,
                        sendShowContextMenuEvent: E.uk,
                        sendShowPopOverEvent: E.P3,
                        addEscapeListener: E.VM,
                        closeOnEsc: E.SU,
                        handleViewEvent: E.c9,
                        onBindingsReady: E.ry,
                        onLayoutReady: E.Eu,
                        isTooltipShown: E.KE,
                        isContextMenuShown: E.uM,
                        isPopOverShown: E.wU,
                        dumpViewModel: function u(e) {
                            const t = {};
                            if ('object' != typeof e) return e;
                            for (const r in e)
                                if (Object.prototype.hasOwnProperty.call(e, r)) {
                                    const n = Object.prototype.toString.call(e[r]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = e[r];
                                        t[r] = [];
                                        for (let e = 0; e < n.length; e++) t[r].push({ value: u(n[e].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[r] = u(e[r]))
                                            : (t[r] = e[r]);
                                }
                            return t;
                        },
                        ClickOutsideManager: l,
                        SystemLocale: a.Z5,
                        UserLocale: a.cy,
                    };
                window.ViewEnvHelper = A;
            },
            8613: (u, e, t) => {
                'use strict';
                t.d(e, { Ew: () => i, Z5: () => r, cy: () => n });
                const r = {
                        getNumberFormat: (u, e) => systemLocale.getNumberFormat(u, e),
                        getRealFormat: (u, e) => systemLocale.getRealFormat(u, e),
                        getTimeFormat: (u, e) => systemLocale.getTimeFormat(u, e),
                        getDateFormat: (u, e) => systemLocale.getDateFormat(u, e),
                        toUpperCase: (u) => systemLocale.toUpperCase(u),
                        toLowerCase: (u) => systemLocale.toUpperCase(u),
                    },
                    n = {
                        getNumberFormat: (u) => userLocale.getNumberFormat(u),
                        getTimeFormat: (u, e, t) => userLocale.getTimeFormat(u, e, void 0 === t || t),
                        getTimeString: (u, e, t) => userLocale.getTimeString(u, e, void 0 === t || t),
                    },
                    i = {
                        getRegionalDateTime: (u, e, t = !0) => regionalDateTime.getRegionalDateTime(u, e, t),
                        getFormattedDateTime: (u, e, t = !0) => regionalDateTime.getFormattedDateTime(u, e, t),
                    };
            },
            4251: (u, e, t) => {
                'use strict';
                let r;
                t.d(e, { B0: () => r, B3: () => n, Gr: () => i, kH: () => o, lf: () => a }),
                    (function (u) {
                        (u[(u.UNDEFINED = 0)] = 'UNDEFINED'),
                            (u[(u.TOOLTIP = 1)] = 'TOOLTIP'),
                            (u[(u.POP_OVER = 2)] = 'POP_OVER'),
                            (u[(u.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                            (u[(u.DROP_DOWN = 8)] = 'DROP_DOWN'),
                            (u[(u.MOVE = 16)] = 'MOVE'),
                            (u[(u.CLOSE = 32)] = 'CLOSE'),
                            (u[(u.MINIMIZE = 64)] = 'MINIMIZE');
                    })(r || (r = {}));
                const n = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    i = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    a = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    o = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
            },
            8072: (u, e, t) => {
                'use strict';
                t.d(e, {
                    Eu: () => l,
                    KE: () => m,
                    Kv: () => E,
                    P3: () => B,
                    SU: () => g,
                    SW: () => d,
                    Sy: () => c,
                    VM: () => w,
                    c9: () => A,
                    ry: () => s,
                    uM: () => _,
                    uk: () => D,
                    wU: () => C,
                    wv: () => F,
                });
                var r = t(5521),
                    n = t(3138),
                    i = t(4251);
                const a = ['args'];
                function o(u, e, t, r, n, i, a) {
                    try {
                        var o = u[i](a),
                            E = o.value;
                    } catch (u) {
                        return void t(u);
                    }
                    o.done ? e(E) : Promise.resolve(E).then(r, n);
                }
                const E = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
                    s = (function () {
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
                                    return new Promise(function (r, n) {
                                        var i = u.apply(e, t);
                                        function a(u) {
                                            o(i, r, n, a, E, 'next', u);
                                        }
                                        function E(u) {
                                            o(i, r, n, a, E, 'throw', u);
                                        }
                                        a(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    l = () =>
                        new Promise((u) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    u();
                                });
                            });
                        }),
                    A = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const n = e.args,
                                i = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        r,
                                        n = {},
                                        i = Object.keys(u);
                                    for (r = 0; r < i.length; r++) (t = i[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                    return n;
                                })(e, a);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, i, {
                                          arguments:
                                              ((r = n),
                                              Object.entries(r).map(([u, e]) => {
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
                        var r;
                    },
                    F = (u) => A(i.B0.MOVE, { isMouseEvent: !0, on: u }),
                    c = () => A(i.B0.CLOSE),
                    d = () => A(i.B0.POP_OVER, { on: !1 }),
                    D = (u, e, t = 0) => {
                        A(i.B0.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                    },
                    B = (u, e, t, r, a = R.invalid('resId'), o) => {
                        const s = n.O.view.getViewGlobalPosition(),
                            l = t.getBoundingClientRect(),
                            F = l.x,
                            c = l.y,
                            d = l.width,
                            D = l.height,
                            B = {
                                x: n.O.view.pxToRem(F) + s.x,
                                y: n.O.view.pxToRem(c) + s.y,
                                width: n.O.view.pxToRem(d),
                                height: n.O.view.pxToRem(D),
                            };
                        A(i.B0.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: u,
                            decoratorID: r || R.invalid('resId'),
                            targetID: a,
                            direction: e,
                            bbox: E(B),
                            on: !0,
                            args: o,
                        });
                    },
                    m = () => viewEnv.isWindowShownByViewEvent(i.B0.TOOLTIP),
                    _ = () => viewEnv.isWindowShownByViewEvent(i.B0.CONTEXT_MENU),
                    C = () => viewEnv.isWindowShownByViewEvent(i.B0.POP_OVER),
                    h = (u, e) => {
                        u.keyCode === r.n.ESCAPE && e();
                    },
                    g = (u) => {
                        h(u, c);
                    },
                    w = (u) => {
                        const e = (e) => h(e, u);
                        return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
                    };
            },
            3458: (u, e, t) => {
                'use strict';
                var r = t(6179),
                    n = t.n(r);
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
                var a = t(3138);
                const o = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var E;
                function s(u, e, t) {
                    const r = (function (u, e) {
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
                        n = (function (u, e) {
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
                        i = Math.min(r, n);
                    return {
                        extraLarge: i === t.extraLarge.weight,
                        large: i === t.large.weight,
                        medium: i === t.medium.weight,
                        small: i === t.small.weight,
                        extraSmall: i === t.extraSmall.weight,
                        extraLargeWidth: r === t.extraLarge.weight,
                        largeWidth: r === t.large.weight,
                        mediumWidth: r === t.medium.weight,
                        smallWidth: r === t.small.weight,
                        extraSmallWidth: r === t.extraSmall.weight,
                        extraLargeHeight: n === t.extraLarge.weight,
                        largeHeight: n === t.large.weight,
                        mediumHeight: n === t.medium.weight,
                        smallHeight: n === t.small.weight,
                        extraSmallHeight: n === t.extraSmall.weight,
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
                })(E || (E = {}));
                const l = a.O.client.getSize('rem'),
                    A = l.width,
                    F = l.height,
                    c = Object.assign({ width: A, height: F }, s(A, F, o)),
                    d = (0, r.createContext)(c),
                    D = ['children'];
                const B = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                r,
                                n = {},
                                i = Object.keys(u);
                            for (r = 0; r < i.length; r++) (t = i[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                            return n;
                        })(u, D);
                    const n = (0, r.useContext)(d),
                        a = n.extraLarge,
                        o = n.large,
                        E = n.medium,
                        s = n.small,
                        l = n.extraSmall,
                        A = n.extraLargeWidth,
                        F = n.largeWidth,
                        c = n.mediumWidth,
                        B = n.smallWidth,
                        m = n.extraSmallWidth,
                        _ = n.extraLargeHeight,
                        C = n.largeHeight,
                        h = n.mediumHeight,
                        g = n.smallHeight,
                        w = n.extraSmallHeight,
                        v = { extraLarge: _, large: C, medium: h, small: g, extraSmall: w };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && a) return e;
                        if (t.large && o) return e;
                        if (t.medium && E) return e;
                        if (t.small && s) return e;
                        if (t.extraSmall && l) return e;
                    } else {
                        if (t.extraLargeWidth && A) return i(e, t, v);
                        if (t.largeWidth && F) return i(e, t, v);
                        if (t.mediumWidth && c) return i(e, t, v);
                        if (t.smallWidth && B) return i(e, t, v);
                        if (t.extraSmallWidth && m) return i(e, t, v);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && _) return e;
                            if (t.largeHeight && C) return e;
                            if (t.mediumHeight && h) return e;
                            if (t.smallHeight && g) return e;
                            if (t.extraSmallHeight && w) return e;
                        }
                    }
                    return null;
                };
                B.defaultProps = {
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
                (0, r.memo)(B);
                const m = (u) => {
                        const e = (0, r.useRef)(!1);
                        e.current || (u(), (e.current = !0));
                    },
                    _ = ({ children: u }) => {
                        const e = (0, r.useContext)(d),
                            t = (0, r.useState)(e),
                            i = t[0],
                            E = t[1],
                            l = (0, r.useCallback)((u, e) => {
                                const t = a.O.view.pxToRem(u),
                                    r = a.O.view.pxToRem(e);
                                E(Object.assign({ width: t, height: r }, s(t, r, o)));
                            }, []),
                            A = (0, r.useCallback)(() => {
                                const u = a.O.client.getSize('px');
                                l(u.width, u.height);
                            }, [l]);
                        m(() => {
                            a.O.client.events.on('clientResized', l), a.O.client.events.on('self.onScaleUpdated', A);
                        }),
                            (0, r.useEffect)(
                                () => () => {
                                    a.O.client.events.off('clientResized', l),
                                        a.O.client.events.off('self.onScaleUpdated', A);
                                },
                                [l, A],
                            );
                        const F = (0, r.useMemo)(() => Object.assign({}, i), [i]);
                        return n().createElement(d.Provider, { value: F }, u);
                    };
                var C = t(6483),
                    h = t.n(C),
                    g = t(926),
                    w = t.n(g);
                let v, f, p;
                !(function (u) {
                    (u[(u.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = o.small.width)] = 'Small'),
                        (u[(u.Medium = o.medium.width)] = 'Medium'),
                        (u[(u.Large = o.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge');
                })(v || (v = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = o.small.width)] = 'Small'),
                            (u[(u.Medium = o.medium.width)] = 'Medium'),
                            (u[(u.Large = o.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge');
                    })(f || (f = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = o.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = o.small.height)] = 'Small'),
                            (u[(u.Medium = o.medium.height)] = 'Medium'),
                            (u[(u.Large = o.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = o.extraLarge.height)] = 'ExtraLarge');
                    })(p || (p = {}));
                const b = () => {
                        const u = (0, r.useContext)(d),
                            e = u.width,
                            t = u.height,
                            n = ((u) => {
                                switch (!0) {
                                    case u.extraLarge:
                                        return v.ExtraLarge;
                                    case u.large:
                                        return v.Large;
                                    case u.medium:
                                        return v.Medium;
                                    case u.small:
                                        return v.Small;
                                    case u.extraSmall:
                                        return v.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), v.ExtraSmall;
                                }
                            })(u),
                            i = ((u) => {
                                switch (!0) {
                                    case u.extraLargeWidth:
                                        return f.ExtraLarge;
                                    case u.largeWidth:
                                        return f.Large;
                                    case u.mediumWidth:
                                        return f.Medium;
                                    case u.smallWidth:
                                        return f.Small;
                                    case u.extraSmallWidth:
                                        return f.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), f.ExtraSmall;
                                }
                            })(u),
                            a = ((u) => {
                                switch (!0) {
                                    case u.extraLargeHeight:
                                        return p.ExtraLarge;
                                    case u.largeHeight:
                                        return p.Large;
                                    case u.mediumHeight:
                                        return p.Medium;
                                    case u.smallHeight:
                                        return p.Small;
                                    case u.extraSmallHeight:
                                        return p.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), p.ExtraSmall;
                                }
                            })(u);
                        return { mediaSize: n, mediaWidth: i, mediaHeight: a, remScreenWidth: e, remScreenHeight: t };
                    },
                    x = ['children', 'className'];
                function L() {
                    return (
                        (L =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        L.apply(this, arguments)
                    );
                }
                const S = {
                        [f.ExtraSmall]: '',
                        [f.Small]: w().SMALL_WIDTH,
                        [f.Medium]: `${w().SMALL_WIDTH} ${w().MEDIUM_WIDTH}`,
                        [f.Large]: `${w().SMALL_WIDTH} ${w().MEDIUM_WIDTH} ${w().LARGE_WIDTH}`,
                        [f.ExtraLarge]: `${w().SMALL_WIDTH} ${w().MEDIUM_WIDTH} ${w().LARGE_WIDTH} ${w().EXTRA_LARGE_WIDTH}`,
                    },
                    T = {
                        [p.ExtraSmall]: '',
                        [p.Small]: w().SMALL_HEIGHT,
                        [p.Medium]: `${w().SMALL_HEIGHT} ${w().MEDIUM_HEIGHT}`,
                        [p.Large]: `${w().SMALL_HEIGHT} ${w().MEDIUM_HEIGHT} ${w().LARGE_HEIGHT}`,
                        [p.ExtraLarge]: `${w().SMALL_HEIGHT} ${w().MEDIUM_HEIGHT} ${w().LARGE_HEIGHT} ${w().EXTRA_LARGE_HEIGHT}`,
                    },
                    O = {
                        [v.ExtraSmall]: '',
                        [v.Small]: w().SMALL,
                        [v.Medium]: `${w().SMALL} ${w().MEDIUM}`,
                        [v.Large]: `${w().SMALL} ${w().MEDIUM} ${w().LARGE}`,
                        [v.ExtraLarge]: `${w().SMALL} ${w().MEDIUM} ${w().LARGE} ${w().EXTRA_LARGE}`,
                    },
                    y = (u) => {
                        let e = u.children,
                            t = u.className,
                            r = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    i = Object.keys(u);
                                for (r = 0; r < i.length; r++) (t = i[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                return n;
                            })(u, x);
                        const i = b(),
                            a = i.mediaWidth,
                            o = i.mediaHeight,
                            E = i.mediaSize;
                        return n().createElement('div', L({ className: h()(t, S[a], T[o], O[E]) }, r), e);
                    },
                    M = ['children'];
                const k = (u) => {
                    let e = u.children,
                        t = (function (u, e) {
                            if (null == u) return {};
                            var t,
                                r,
                                n = {},
                                i = Object.keys(u);
                            for (r = 0; r < i.length; r++) (t = i[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                            return n;
                        })(u, M);
                    return n().createElement(_, null, n().createElement(y, t, e));
                };
                var H = t(493),
                    P = t.n(H);
                t(1281);
                let I;
                !(function (u) {
                    (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                })(I || (I = {}));
                (() => {
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
                })();
                var W = t(7491),
                    N = t(8613);
                Date.now(), N.Ew.getRegionalDateTime, N.Ew.getFormattedDateTime;
                const U = (u = 1) => {
                        const e = new Error().stack;
                        let t,
                            r = R.invalid('resId');
                        return (
                            e &&
                                ((t = e.split('\n')[u].split('.js')[0].split('/').pop() || ''),
                                window.__feature &&
                                    window.__feature !== t &&
                                    window.subViews[t] &&
                                    (r = window.subViews[t].id)),
                            { caller: t, stack: e, resId: r }
                        );
                    },
                    G = (u, e) => u.split('.').reduce((u, e) => u && u[e], e),
                    V = (u) => u && 'ArrayItem' === u.__proto__.constructor.name,
                    j = (u, e) => (u.length > 0 ? `${u}.${e}` : e),
                    $ = (u) =>
                        ((u, e) =>
                            u.split('.').reduce((u, t) => {
                                const r = G(`${u}.${t}`, window);
                                return V(r) ? e(u, t, r) : `${u}.${t}`;
                            }))(u, (u, e) => `${u}.${e}.value`),
                    z = (u) => {
                        const e = ((u) => {
                                const e = U(),
                                    t = e.caller,
                                    r = e.resId,
                                    n = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: n, modelPath: j(n, u || ''), resId: r };
                            })(),
                            t = e.modelPrefix,
                            r = u.split('.');
                        if (r.length > 0) {
                            const u = [r[0]];
                            return (
                                r.reduce((e, r) => {
                                    const n = G(j(t, `${e}.${r}`), window);
                                    return V(n) ? (u.push(n.id), `${e}.${r}.value`) : (u.push(r), `${e}.${r}`);
                                }),
                                u.reduce((u, e) => u + '.' + e)
                            );
                        }
                        return '';
                    },
                    q = W.Sw.instance;
                let K;
                !(function (u) {
                    (u.None = 'None'), (u.Shallow = 'Shallow'), (u.Deep = 'Deep');
                })(K || (K = {}));
                const Y = (u = 'model', e = K.Deep) => {
                    const t = (0, r.useState)(0),
                        n = (t[0], t[1]),
                        i = (0, r.useMemo)(() => U(), []),
                        a = i.caller,
                        o = i.resId,
                        E = (0, r.useMemo)(
                            () => (window.__feature && window.__feature !== a ? `subViews.${a}.${u}` : u),
                            [a, u],
                        ),
                        s = (0, r.useState)(() =>
                            ((u) => {
                                const e = G(u, window);
                                for (const u in e) 'function' == typeof e[u] && (e[u] = e[u].bind(e));
                                return V(e) ? e.value : e;
                            })($(E)),
                        ),
                        l = s[0],
                        A = s[1],
                        F = (0, r.useRef)(-1);
                    return (
                        m(() => {
                            if (
                                ('boolean' == typeof e &&
                                    ((e = e ? K.Deep : K.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                e !== K.None)
                            ) {
                                const t = (u) => {
                                        ((u) => u && 'CoherentArrayProxy' === u.__proto__.constructor.name)(u) &&
                                        e === K.Deep
                                            ? (u === l && n((u) => u + 1), A(u))
                                            : A(Object.assign([], u));
                                    },
                                    r = z(u);
                                F.current = q.addCallback(r, t, o, e === K.Deep);
                            }
                        }),
                        (0, r.useEffect)(() => {
                            if (e !== K.None)
                                return () => {
                                    q.removeCallback(F.current, o);
                                };
                        }, [o, e]),
                        l
                    );
                };
                W.Sw.instance;
                let X, Z;
                function Q(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error('[lib/sounds.js] playSound(', u, '): ', e);
                    });
                }
                !(function (u) {
                    (u.Small = 'small'), (u.Medium = 'medium'), (u.Big = 'big');
                })(X || (X = {})),
                    (function (u) {
                        (u.Hunter = 'wt_hunter'), (u.Boss = 'wt_boss');
                    })(Z || (Z = {}));
                const J = {
                        playHighlight() {
                            Q('highlight');
                        },
                        playClick() {
                            Q('play');
                        },
                        playYes() {
                            Q('yes1');
                        },
                    },
                    uu = [
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
                function eu(u) {
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
                const tu = (u, e, t = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: W.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: r,
                                },
                                t,
                            ),
                        );
                    },
                    ru = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            n = u.args,
                            i = u.onMouseEnter,
                            a = u.onMouseLeave,
                            o = u.onMouseDown,
                            E = u.onClick,
                            s = u.ignoreShowDelay,
                            l = void 0 !== s && s,
                            A = u.ignoreMouseClick,
                            F = void 0 !== A && A,
                            c = u.decoratorId,
                            d = void 0 === c ? 0 : c,
                            D = u.isEnabled,
                            B = void 0 === D || D,
                            m = u.targetId,
                            _ = void 0 === m ? 0 : m,
                            C = u.onShow,
                            h = u.onHide,
                            g = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    i = Object.keys(u);
                                for (r = 0; r < i.length; r++) (t = i[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                return n;
                            })(u, uu);
                        const w = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, r.useMemo)(() => _ || U().resId, [_]),
                            f = (0, r.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (tu(t, d, { isMouseEvent: !0, on: !0, arguments: eu(n) }, v),
                                    C && C(),
                                    (w.current.isVisible = !0));
                            }, [t, d, n, v, C]),
                            p = (0, r.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const u = w.current.timeoutId;
                                    u > 0 && (clearTimeout(u), (w.current.timeoutId = 0)),
                                        tu(t, d, { on: !1 }, v),
                                        w.current.isVisible && h && h(),
                                        (w.current.isVisible = !1);
                                }
                            }, [t, d, v, h]),
                            b = (0, r.useCallback)((u) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(w.current.prevTarget) && p();
                                    }, 200)));
                            }, []);
                        (0, r.useEffect)(() => {
                            const u = w.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', b, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', b, { capture: !0 }),
                                        u && window.clearTimeout(u);
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === B && p();
                            }, [B, p]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', p),
                                    () => {
                                        window.removeEventListener('mouseleave', p), p();
                                    }
                                ),
                                [p],
                            );
                        return B
                            ? (0, r.cloneElement)(
                                  e,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((x = e.props.onMouseEnter),
                                              (u) => {
                                                  (u.clientX === window.innerWidth &&
                                                      u.clientY === window.innerHeight) ||
                                                      ((w.current.timeoutId = window.setTimeout(f, l ? 100 : 400)),
                                                      i && i(u),
                                                      x && x(u));
                                              }),
                                          onMouseLeave: ((u) => (e) => {
                                              p(), null == a || a(e), null == u || u(e);
                                          })(e.props.onMouseLeave),
                                          onClick: ((u) => (e) => {
                                              !1 === F && p(), null == E || E(e), null == u || u(e);
                                          })(e.props.onClick),
                                          onMouseDown: ((u) => (e) => {
                                              !1 === F && p(), null == o || o(e), null == u || u(e);
                                          })(e.props.onMouseDown),
                                      },
                                      g,
                                  ),
                              )
                            : e;
                        var x;
                    },
                    nu = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function iu() {
                    return (
                        (iu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        iu.apply(this, arguments)
                    );
                }
                const au = R.views.common.tooltip_window.simple_tooltip_content,
                    ou = (u) => {
                        let e = u.children,
                            t = u.body,
                            i = u.header,
                            a = u.note,
                            o = u.alert,
                            E = u.args,
                            s = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    i = Object.keys(u);
                                for (r = 0; r < i.length; r++) (t = i[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                return n;
                            })(u, nu);
                        const l = (0, r.useMemo)(() => {
                            const u = Object.assign({}, E, { body: t, header: i, note: a, alert: o });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [o, t, i, a, E]);
                        return n().createElement(
                            ru,
                            iu(
                                {
                                    contentId:
                                        ((A = null == E ? void 0 : E.hasHtmlContent),
                                        A ? au.SimpleTooltipHtmlContent('resId') : au.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: l,
                                },
                                s,
                            ),
                            e,
                        );
                        var A;
                    },
                    Eu = (u) => {
                        (0, r.useEffect)(u, []);
                    },
                    su = {
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
                function lu() {
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
                var Au;
                !(function (u) {
                    (u[(u.Left = 0)] = 'Left'),
                        (u[(u.Right = 1)] = 'Right'),
                        (u[(u.Top = 2)] = 'Top'),
                        (u[(u.Bottom = 3)] = 'Bottom');
                })(Au || (Au = {}));
                const Fu = ['__left', '__right', '__top', '__bottom'],
                    cu =
                        ((0, r.forwardRef)(
                            ({ children: u, disableAutoSizeUpdate: e, onOutsideClick: t, customStyles: i = {} }, o) => {
                                const E = (0, r.useRef)(null),
                                    s = (0, r.useRef)(null),
                                    l = (0, r.useRef)(null),
                                    A = (0, r.useState)(window.decorator && window.decorator.directionType),
                                    F = A[0],
                                    c = A[1],
                                    d = (0, r.useCallback)(() => {
                                        J.playClick(), a.O.view.sendEvent.close();
                                    }, []),
                                    D = (0, r.useCallback)(() => {
                                        J.playHighlight();
                                    }, []),
                                    B = h()(su.arrow, su[`arrow${Fu[F]}`]);
                                Eu(
                                    () => (
                                        a.O.client.events.mouse.enableOutside(),
                                        a.O.client.events.mouse.down(([, u]) => {
                                            'outside' === u && (t ? t() : a.O.view.sendEvent.close('popover'));
                                        })
                                    ),
                                );
                                const m = (0, r.useCallback)(
                                        (u) => {
                                            let e = u.target;
                                            do {
                                                if (e === E.current || e === l.current) return;
                                                e = e.parentNode;
                                            } while (e);
                                            const r = window.decorator;
                                            if (void 0 !== window.decorator) {
                                                const u = a.O.client.getMouseGlobalPosition(),
                                                    e = ![r.boundX, r.boundY, r.boundWidth, r.boundHeight].includes(
                                                        void 0,
                                                    ),
                                                    t =
                                                        u.x < r.boundX ||
                                                        u.x > r.boundX + r.boundWidth ||
                                                        u.y > r.boundY + r.boundHeight ||
                                                        u.y < r.boundY;
                                                if (e && !t) return;
                                            }
                                            t ? t() : a.O.view.sendEvent.close('popover');
                                        },
                                        [E, l, t],
                                    ),
                                    _ = lu(),
                                    C = (0, r.useCallback)(() => {
                                        const u = s.current;
                                        if (u)
                                            return (
                                                a.O.view.freezeTextureBeforeResize(),
                                                _.run(() => {
                                                    const e = u.scrollWidth,
                                                        t = u.scrollHeight;
                                                    a.O.view.resize(e, t), c(window.decorator.directionType);
                                                })
                                            );
                                    }, [_]);
                                return (
                                    (0, r.useImperativeHandle)(o, () => ({ updateSize: C })),
                                    Eu(() => {
                                        a.O.view.setInputPaddingsRem(58);
                                    }),
                                    (0, r.useEffect)(() => {
                                        document.addEventListener('mousedown', m, { capture: !0 });
                                        const u = ((u) => {
                                            let e = !1;
                                            return {
                                                promise: new Promise((t, r) => {
                                                    u.then((u) => !e && t(u)).catch((u) => !e && r(u));
                                                }),
                                                cancel() {
                                                    e = !0;
                                                },
                                            };
                                        })((0, W.Eu)());
                                        return (
                                            !e && u.promise.then(() => C()),
                                            () => {
                                                u.cancel(), document.removeEventListener('mousedown', m);
                                            }
                                        );
                                    }, [C, m, e]),
                                    n().createElement(
                                        'div',
                                        { className: su.base, ref: s },
                                        n().createElement(
                                            'div',
                                            { className: su.decorator },
                                            n().createElement(
                                                'div',
                                                { className: su.content, ref: E },
                                                u,
                                                window.decorator &&
                                                    window.decorator.isCloseBtnVisible &&
                                                    n().createElement(
                                                        ou,
                                                        { body: R.strings.dialogs.common.error.cancel() },
                                                        n().createElement('div', {
                                                            className: su.closeBtn,
                                                            onClick: d,
                                                            onMouseEnter: D,
                                                            ref: l,
                                                        }),
                                                    ),
                                            ),
                                            n().createElement('div', { className: B, style: i.arrow }),
                                        ),
                                    )
                                );
                            },
                        ),
                        [
                            'contentId',
                            'decoratorId',
                            'direction',
                            'targetId',
                            'args',
                            'onClick',
                            'children',
                            'isEnabled',
                        ]);
                function du() {
                    return (
                        (du =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        du.apply(this, arguments)
                    );
                }
                const Du = (u) => {
                        let e = u.contentId,
                            t = u.decoratorId,
                            i = u.direction,
                            a = void 0 === i ? Au.Top : i,
                            o = u.targetId,
                            E = u.args,
                            s = u.onClick,
                            l = u.children,
                            A = u.isEnabled,
                            F = void 0 === A || A,
                            c = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    n = {},
                                    i = Object.keys(u);
                                for (r = 0; r < i.length; r++) (t = i[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
                                return n;
                            })(u, cu);
                        const d = (0, r.useRef)(null),
                            D = (0, r.useCallback)(() => {
                                if ((0, W.wU)()) return (0, W.SW)();
                                d.current && (0, W.P3)(e, a, d.current, t, o, E);
                            }, [e, a, E, t, o]);
                        return n().createElement(
                            'div',
                            du(
                                {
                                    ref: d,
                                    onMouseDown:
                                        ((B = l.props.onClick),
                                        (u) => {
                                            F && (D(), s && s(u), B && B(u));
                                        }),
                                },
                                c,
                            ),
                            l,
                        );
                        var B;
                    },
                    Bu = 'LootBox_shine_1a',
                    mu = 'LootBox_shine__harrier_3a',
                    _u = 'LootBox_shine__engineer_7f',
                    Cu = 'LootBox_wrapper_e4',
                    hu = 'LootBox_wrapper__harrier_7b',
                    gu = 'LootBox_icon_8a',
                    wu = 'LootBox_icon__hasBoxesEngineer_1c',
                    vu = 'LootBox_icon__emptyBoxesEngineer_0c',
                    fu = 'LootBox_icon__hasBoxesHarrier_58',
                    pu = 'LootBox_icon__emptyBoxesHarrier_36',
                    bu = 'LootBox_iconHover_34',
                    xu = 'LootBox_count_b5',
                    Lu = 'LootBox_count__harrier_7f',
                    Su = 'LootBox_multiplier_0b',
                    Tu = R.views.lobby.wt_event,
                    Ou = () => {
                        Q('ev_white_tiger_hangar_lootbox_rollover');
                    },
                    yu = () => {
                        Q('ev_white_tiger_hangar_lootbox_rollout');
                    },
                    Mu = ({ name: u, value: e, hasNew: t }) => {
                        const i = Y('model').onWidgetClick,
                            a = u === Z.Boss,
                            o = !a && e > 0,
                            E = a && e > 0,
                            s = h()(xu, !a && Lu),
                            l = h()(gu, o && fu, E && wu, !a && e <= 0 && pu, a && e <= 0 && vu),
                            A = (0, r.useMemo)(() => ({ isHunterLootBox: u === Z.Hunter }), [u]),
                            F = h()(Cu, !a && hu),
                            c = h()(Bu, !a && mu, a && _u),
                            d = (0, r.useCallback)(() => {
                                i();
                            }, [i]);
                        return n().createElement(
                            n().Fragment,
                            null,
                            t && n().createElement('div', { className: c }),
                            n().createElement(
                                Du,
                                { contentId: Tu.WTEventPopoverView('resId'), direction: Au.Top, args: A },
                                n().createElement(
                                    ru,
                                    { contentId: Tu.tooltips.WtEventLootBoxTooltipView('resId'), args: A },
                                    n().createElement(
                                        'div',
                                        { className: F, onClick: d, onMouseEnter: Ou, onMouseLeave: yu },
                                        n().createElement('div', { className: l }),
                                        n().createElement('div', { className: bu }),
                                        e > 0 &&
                                            n().createElement(
                                                'div',
                                                { className: s },
                                                n().createElement('div', { className: Su }),
                                                e < 1e3 ? e : R.strings.lootboxes.entryPoint.maxBoxesCount(),
                                            ),
                                    ),
                                ),
                            ),
                        );
                    },
                    Ru = 'App_base_99',
                    ku = 'App_lootBoxContainer_41',
                    Hu = () => {
                        const u = Y('model'),
                            e = u.hunterLootBoxesCount,
                            t = u.bossLootBoxesCount,
                            i = u.hunterHasNew,
                            a = u.bossHasNew,
                            o = (0, r.useRef)(null);
                        return (
                            (0, r.useEffect)(
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
                                        const u = o.current;
                                        if (u) {
                                            const e = u.getBoundingClientRect();
                                            viewEnv.resizeViewRem(
                                                viewEnv.pxToRem(e.x) + viewEnv.pxToRem(e.width),
                                                viewEnv.pxToRem(e.y) + viewEnv.pxToRem(e.height),
                                            ),
                                                viewEnv.setHitAreaPaddingsRem(60, 0, 0, 40, 15);
                                        }
                                    }),
                                [],
                            ),
                            n().createElement(
                                'div',
                                { className: Ru, ref: o },
                                n().createElement(
                                    'div',
                                    { className: ku },
                                    n().createElement(Mu, { name: Z.Boss, value: t, hasNew: a }),
                                    n().createElement(Mu, { name: Z.Hunter, value: e, hasNew: i }),
                                ),
                            )
                        );
                    };
                engine.whenReady.then(() => {
                    P().render(
                        n().createElement(k, null, n().createElement(Hu, null)),
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
        (__webpack_require__.O = (u, e, t, r) => {
            if (!e) {
                var n = 1 / 0;
                for (E = 0; E < deferred.length; E++) {
                    for (var [e, t, r] = deferred[E], i = !0, a = 0; a < e.length; a++)
                        (!1 & r || n >= r) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[a]))
                            ? e.splice(a--, 1)
                            : ((i = !1), r < n && (n = r));
                    if (i) {
                        deferred.splice(E--, 1);
                        var o = t();
                        void 0 !== o && (u = o);
                    }
                }
                return u;
            }
            r = r || 0;
            for (var E = deferred.length; E > 0 && deferred[E - 1][2] > r; E--) deferred[E] = deferred[E - 1];
            deferred[E] = [e, t, r];
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
        (__webpack_require__.j = 891),
        (() => {
            var u = { 891: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var r,
                        n,
                        [i, a, o] = t,
                        E = 0;
                    if (i.some((e) => 0 !== u[e])) {
                        for (r in a) __webpack_require__.o(a, r) && (__webpack_require__.m[r] = a[r]);
                        if (o) var s = o(__webpack_require__);
                    }
                    for (e && e(t); E < i.length; E++)
                        (n = i[E]), __webpack_require__.o(u, n) && u[n] && u[n][0](), (u[n] = 0);
                    return __webpack_require__.O(s);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [107], () => __webpack_require__(3458));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
