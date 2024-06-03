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
                    t.d(e, { mouse: () => l, off: () => s, on: () => o, onResize: () => r, onScaleUpdated: () => i });
                var n = t(472),
                    a = t(176);
                const r = (0, n.E)('clientResized'),
                    i = (0, n.E)('self.onScaleUpdated'),
                    o = (u, e) => engine.on(u, e),
                    s = (u, e) => engine.off(u, e),
                    E = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') },
                    l = (function () {
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
                                            i = E[e]((u) => t([u, 'outside']));
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
            959: (u, e, t) => {
                'use strict';
                t.r(e),
                    t.d(e, {
                        events: () => n,
                        getMouseGlobalPosition: () => r,
                        getSize: () => a,
                        graphicsQuality: () => i,
                    });
                var n = t(527);
                function a(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function r(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const i = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            176: (u, e, t) => {
                'use strict';
                function n(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                t.d(e, { R: () => n });
            },
            472: (u, e, t) => {
                'use strict';
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
            138: (u, e, t) => {
                'use strict';
                t.d(e, { O: () => a });
                var n = t(959);
                const a = { view: t(641), client: n };
            },
            722: (u, e, t) => {
                'use strict';
                function n(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function a(u, e, t) {
                    return `url(${n(u, e, t)})`;
                }
                t.r(e), t.d(e, { getBgUrl: () => a, getTextureUrl: () => n });
            },
            112: (u, e, t) => {
                'use strict';
                t.d(e, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            538: (u, e, t) => {
                'use strict';
                t.d(e, { U: () => a });
                var n = t(472);
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
            641: (u, e, t) => {
                'use strict';
                t.r(e),
                    t.d(e, {
                        addModelObserver: () => l,
                        addPreloadTexture: () => o,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => b,
                        events: () => r.U,
                        extraSize: () => f,
                        forceTriggerMouseMove: () => v,
                        freezeTextureBeforeResize: () => D,
                        getBrowserTexturePath: () => E,
                        getDisplayStatus: () => w,
                        getScale: () => _,
                        getSize: () => c,
                        getViewGlobalPosition: () => d,
                        isEventHandled: () => p,
                        isFocused: () => g,
                        pxToRem: () => B,
                        remToPx: () => C,
                        resize: () => F,
                        sendEvent: () => i.qP,
                        setAnimateWindow: () => m,
                        setEventHandled: () => h,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => A,
                        whenTutorialReady: () => S,
                    });
                var n = t(722),
                    a = t(112),
                    r = t(538),
                    i = t(566);
                function o(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function s(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function E(u, e, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, n);
                }
                function l(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function A(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function c(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function F(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function d(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: C(e.x), y: C(e.y) };
                }
                function D() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function _() {
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
                function g() {
                    return viewEnv.isFocused();
                }
                function h() {
                    return viewEnv.setEventHandled();
                }
                function p() {
                    return viewEnv.isEventHandled();
                }
                function v() {
                    viewEnv.forceTriggerMouseMove();
                }
                function w() {
                    return viewEnv.getShowingStatus();
                }
                const b = Object.keys(a.W).reduce(
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
                    S = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : r.U.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]);
            },
            566: (u, e, t) => {
                'use strict';
                t.d(e, { qP: () => r });
                const n = ['args'],
                    a = (u, e) => {
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
                    r = {
                        close(u) {
                            a('popover' === u ? 2 : 32);
                        },
                        minimize() {
                            a(64);
                        },
                        move(u) {
                            a(16, { isMouseEvent: !0, on: u });
                        },
                    };
            },
            521: (u, e, t) => {
                'use strict';
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
            727: (u, e, t) => {
                'use strict';
                function n(u) {
                    engine.call('PlaySound', u);
                }
                t.d(e, { G: () => n });
            },
            358: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => r });
                var n = t(138);
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
            572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(491);
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
            491: (u, e, t) => {
                'use strict';
                t.d(e, {
                    Sw: () => r.Z,
                    B3: () => o.B3,
                    Z5: () => i.Z5,
                    B0: () => o.B0,
                    ry: () => s.ry,
                    Sy: () => s.Sy,
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
                var r = t(358),
                    i = t(613),
                    o = t(251),
                    s = t(72),
                    E = t(572);
                const l = a.instance,
                    A = {
                        DataTracker: r.Z,
                        ViewModel: E.Z,
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
                        ClickOutsideManager: l,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = A;
            },
            613: (u, e, t) => {
                'use strict';
                t.d(e, { Z5: () => n, cy: () => a });
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
                    };
            },
            251: (u, e, t) => {
                'use strict';
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
            72: (u, e, t) => {
                'use strict';
                t.d(e, {
                    Eu: () => l,
                    KE: () => B,
                    Kv: () => s,
                    P3: () => _,
                    SU: () => h,
                    SW: () => d,
                    Sy: () => F,
                    VM: () => p,
                    c9: () => A,
                    ry: () => E,
                    uM: () => C,
                    uk: () => D,
                    wU: () => m,
                    wv: () => c,
                });
                var n = t(521),
                    a = t(138),
                    r = t(251);
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
                    c = (u) => A(r.B0.MOVE, { isMouseEvent: !0, on: u }),
                    F = () => A(r.B0.CLOSE),
                    d = () => A(r.B0.POP_OVER, { on: !1 }),
                    D = (u, e, t = 0) => {
                        A(r.B0.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                    },
                    _ = (u, e, t, n, i = R.invalid('resId'), o) => {
                        const E = a.O.view.getViewGlobalPosition(),
                            l = t.getBoundingClientRect(),
                            c = l.x,
                            F = l.y,
                            d = l.width,
                            D = l.height,
                            _ = {
                                x: a.O.view.pxToRem(c) + E.x,
                                y: a.O.view.pxToRem(F) + E.y,
                                width: a.O.view.pxToRem(d),
                                height: a.O.view.pxToRem(D),
                            };
                        A(r.B0.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: u,
                            decoratorID: n || R.invalid('resId'),
                            targetID: i,
                            direction: e,
                            bbox: s(_),
                            on: !0,
                            args: o,
                        });
                    },
                    B = () => viewEnv.isWindowShownByViewEvent(r.B0.TOOLTIP),
                    C = () => viewEnv.isWindowShownByViewEvent(r.B0.CONTEXT_MENU),
                    m = () => viewEnv.isWindowShownByViewEvent(r.B0.POP_OVER),
                    g = (u, e) => {
                        u.keyCode === n.n.ESCAPE && e();
                    },
                    h = (u) => {
                        g(u, F);
                    },
                    p = (u) => {
                        const e = (e) => g(e, u);
                        return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
                    };
            },
            661: (u, e, t) => {
                'use strict';
                var n = t(179),
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
                var s = t(138);
                const E = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var l;
                function A(u, e, t) {
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
                })(l || (l = {}));
                const c = s.O.client.getSize('rem'),
                    F = c.width,
                    d = c.height,
                    D = Object.assign({ width: F, height: d }, A(F, d, E)),
                    _ = (0, n.createContext)(D),
                    B = ['children'],
                    C = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(u);
                                for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                return a;
                            })(u, B);
                        const a = (0, n.useContext)(_),
                            r = a.extraLarge,
                            i = a.large,
                            s = a.medium,
                            E = a.small,
                            l = a.extraSmall,
                            A = a.extraLargeWidth,
                            c = a.largeWidth,
                            F = a.mediumWidth,
                            d = a.smallWidth,
                            D = a.extraSmallWidth,
                            C = a.extraLargeHeight,
                            m = a.largeHeight,
                            g = a.mediumHeight,
                            h = a.smallHeight,
                            p = a.extraSmallHeight,
                            v = { extraLarge: C, large: m, medium: g, small: h, extraSmall: p };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && r) return e;
                            if (t.large && i) return e;
                            if (t.medium && s) return e;
                            if (t.small && E) return e;
                            if (t.extraSmall && l) return e;
                        } else {
                            if (t.extraLargeWidth && A) return o(e, t, v);
                            if (t.largeWidth && c) return o(e, t, v);
                            if (t.mediumWidth && F) return o(e, t, v);
                            if (t.smallWidth && d) return o(e, t, v);
                            if (t.extraSmallWidth && D) return o(e, t, v);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && C) return e;
                                if (t.largeHeight && m) return e;
                                if (t.mediumHeight && g) return e;
                                if (t.smallHeight && h) return e;
                                if (t.extraSmallHeight && p) return e;
                            }
                        }
                        return null;
                    };
                (C.defaultProps = {
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
                    (0, n.memo)(C);
                const m = (u) => {
                        const e = (0, n.useRef)(!1);
                        e.current || (u(), (e.current = !0));
                    },
                    g = ({ children: u }) => {
                        const e = (0, n.useContext)(_),
                            t = (0, n.useState)(e),
                            r = t[0],
                            i = t[1],
                            o = (0, n.useCallback)((u, e) => {
                                const t = s.O.view.pxToRem(u),
                                    n = s.O.view.pxToRem(e);
                                i(Object.assign({ width: t, height: n }, A(t, n, E)));
                            }, []),
                            l = (0, n.useCallback)(() => {
                                const u = s.O.client.getSize('px');
                                o(u.width, u.height);
                            }, [o]);
                        m(() => {
                            s.O.client.events.on('clientResized', o), s.O.client.events.on('self.onScaleUpdated', l);
                        }),
                            (0, n.useEffect)(
                                () => () => {
                                    s.O.client.events.off('clientResized', o),
                                        s.O.client.events.off('self.onScaleUpdated', l);
                                },
                                [o, l],
                            );
                        const c = (0, n.useMemo)(() => Object.assign({}, r), [r]);
                        return a().createElement(_.Provider, { value: c }, u);
                    };
                var h = t(483),
                    p = t.n(h),
                    v = t(926),
                    w = t.n(v);
                let b, f, S;
                !(function (u) {
                    (u[(u.ExtraSmall = E.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = E.small.width)] = 'Small'),
                        (u[(u.Medium = E.medium.width)] = 'Medium'),
                        (u[(u.Large = E.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = E.extraLarge.width)] = 'ExtraLarge');
                })(b || (b = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = E.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = E.small.width)] = 'Small'),
                            (u[(u.Medium = E.medium.width)] = 'Medium'),
                            (u[(u.Large = E.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = E.extraLarge.width)] = 'ExtraLarge');
                    })(f || (f = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = E.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = E.small.height)] = 'Small'),
                            (u[(u.Medium = E.medium.height)] = 'Medium'),
                            (u[(u.Large = E.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = E.extraLarge.height)] = 'ExtraLarge');
                    })(S || (S = {}));
                const x = () => {
                        const u = (0, n.useContext)(_),
                            e = u.width,
                            t = u.height,
                            a = ((u) => {
                                switch (!0) {
                                    case u.extraLarge:
                                        return b.ExtraLarge;
                                    case u.large:
                                        return b.Large;
                                    case u.medium:
                                        return b.Medium;
                                    case u.small:
                                        return b.Small;
                                    case u.extraSmall:
                                        return b.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), b.ExtraSmall;
                                }
                            })(u),
                            r = ((u) => {
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
                            i = ((u) => {
                                switch (!0) {
                                    case u.extraLargeHeight:
                                        return S.ExtraLarge;
                                    case u.largeHeight:
                                        return S.Large;
                                    case u.mediumHeight:
                                        return S.Medium;
                                    case u.smallHeight:
                                        return S.Small;
                                    case u.extraSmallHeight:
                                        return S.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), S.ExtraSmall;
                                }
                            })(u);
                        return { mediaSize: a, mediaWidth: r, mediaHeight: i, remScreenWidth: e, remScreenHeight: t };
                    },
                    T = ['children', 'className'];
                function y() {
                    return (
                        (y =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        y.apply(this, arguments)
                    );
                }
                const L = {
                        [f.ExtraSmall]: '',
                        [f.Small]: w().SMALL_WIDTH,
                        [f.Medium]: `${w().SMALL_WIDTH} ${w().MEDIUM_WIDTH}`,
                        [f.Large]: `${w().SMALL_WIDTH} ${w().MEDIUM_WIDTH} ${w().LARGE_WIDTH}`,
                        [f.ExtraLarge]: `${w().SMALL_WIDTH} ${w().MEDIUM_WIDTH} ${w().LARGE_WIDTH} ${w().EXTRA_LARGE_WIDTH}`,
                    },
                    P = {
                        [S.ExtraSmall]: '',
                        [S.Small]: w().SMALL_HEIGHT,
                        [S.Medium]: `${w().SMALL_HEIGHT} ${w().MEDIUM_HEIGHT}`,
                        [S.Large]: `${w().SMALL_HEIGHT} ${w().MEDIUM_HEIGHT} ${w().LARGE_HEIGHT}`,
                        [S.ExtraLarge]: `${w().SMALL_HEIGHT} ${w().MEDIUM_HEIGHT} ${w().LARGE_HEIGHT} ${w().EXTRA_LARGE_HEIGHT}`,
                    },
                    O = {
                        [b.ExtraSmall]: '',
                        [b.Small]: w().SMALL,
                        [b.Medium]: `${w().SMALL} ${w().MEDIUM}`,
                        [b.Large]: `${w().SMALL} ${w().MEDIUM} ${w().LARGE}`,
                        [b.ExtraLarge]: `${w().SMALL} ${w().MEDIUM} ${w().LARGE} ${w().EXTRA_LARGE}`,
                    },
                    k = (u) => {
                        let e = u.children,
                            t = u.className,
                            n = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(u);
                                for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                return a;
                            })(u, T);
                        const r = x(),
                            i = r.mediaWidth,
                            o = r.mediaHeight,
                            s = r.mediaSize;
                        return a().createElement('div', y({ className: p()(t, L[i], P[o], O[s]) }, n), e);
                    },
                    I = ['children'],
                    M = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(u);
                                for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                return a;
                            })(u, I);
                        return a().createElement(g, null, a().createElement(k, t, e));
                    };
                let N, U;
                !(function (u) {
                    (u.common = 'event_common'), (u.premium = 'event_premium');
                })(N || (N = {})),
                    (function (u) {
                        (u[(u.x86 = 1)] = 'x86'), (u[(u.x64 = 2)] = 'x64'), (u[(u.unknown = 3)] = 'unknown');
                    })(U || (U = {}));
                const G = (u = 1) => {
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
                    H = (u, e) => u.split('.').reduce((u, e) => u && u[e], e);
                var W = t(491);
                const V = (u) => u && 'ArrayItem' === u.__proto__.constructor.name,
                    $ = (u, e) => (u.length > 0 ? `${u}.${e}` : e),
                    z = W.Sw.instance;
                let Y;
                !(function (u) {
                    (u.None = 'None'), (u.Shallow = 'Shallow'), (u.Deep = 'Deep');
                })(Y || (Y = {}));
                const q = (u = 'model', e = Y.Deep) => {
                    const t = (0, n.useState)(0),
                        a = (t[0], t[1]),
                        r = (0, n.useMemo)(() => G(), []),
                        i = r.caller,
                        o = r.resId,
                        s = (0, n.useMemo)(
                            () => (window.__feature && window.__feature !== i ? `subViews.${i}.${u}` : u),
                            [i, u],
                        ),
                        E = (0, n.useState)(() =>
                            ((u) => {
                                const e = H(u, window);
                                for (const u in e) 'function' == typeof e[u] && (e[u] = e[u].bind(e));
                                return V(e) ? e.value : e;
                            })(
                                ((u) =>
                                    ((u, e) =>
                                        u.split('.').reduce((u, e) => {
                                            const t = H(`${u}.${e}`, window);
                                            return V(t) ? ((u, e) => `${u}.${e}.value`)(u, e) : `${u}.${e}`;
                                        }))(u))(s),
                            ),
                        ),
                        l = E[0],
                        A = E[1],
                        c = (0, n.useRef)(-1);
                    return (
                        m(() => {
                            if (
                                ('boolean' == typeof e &&
                                    ((e = e ? Y.Deep : Y.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                e !== Y.None)
                            ) {
                                const t = (u) => {
                                        ((u) => u && 'CoherentArrayProxy' === u.__proto__.constructor.name)(u) &&
                                        e === Y.Deep
                                            ? (u === l && a((u) => u + 1), A(u))
                                            : A(Object.assign([], u));
                                    },
                                    n = ((u) => {
                                        const e = ((u) => {
                                                const e = G(),
                                                    t = e.caller,
                                                    n = e.resId,
                                                    a =
                                                        window.__feature && window.__feature !== t && t
                                                            ? `subViews.${t}`
                                                            : '';
                                                return { modelPrefix: a, modelPath: $(a, ''), resId: n };
                                            })(),
                                            t = e.modelPrefix,
                                            n = u.split('.');
                                        if (n.length > 0) {
                                            const u = [n[0]];
                                            return (
                                                n.reduce((e, n) => {
                                                    const a = H($(t, `${e}.${n}`), window);
                                                    return V(a)
                                                        ? (u.push(a.id), `${e}.${n}.value`)
                                                        : (u.push(n), `${e}.${n}`);
                                                }),
                                                u.reduce((u, e) => u + '.' + e)
                                            );
                                        }
                                        return '';
                                    })(u);
                                c.current = z.addCallback(n, t, o, e === Y.Deep);
                            }
                        }),
                        (0, n.useEffect)(() => {
                            if (e !== Y.None)
                                return () => {
                                    z.removeCallback(c.current, o);
                                };
                        }, [o, e]),
                        l
                    );
                };
                var j = t(245),
                    X = t(865),
                    K = t(521);
                const Q = (u, e) => {
                    let t;
                    const n = setTimeout(() => {
                        t = u();
                    }, e);
                    return () => {
                        'function' == typeof t && t(), clearTimeout(n);
                    };
                };
                var Z = t(727);
                const J = (u) => {
                        console.error(u + ': useKeydownListener hook :: Callback is not defined');
                    },
                    uu = (u = K.n.ESCAPE, e = J, t = !1) => {
                        const a = (0, n.useCallback)(
                            (n) => {
                                n.repeat || (n.keyCode === u && (t && n.stopPropagation(), e(n)));
                            },
                            [e, u, t],
                        );
                        (0, n.useEffect)(
                            () => (
                                window.addEventListener('keydown', a, t),
                                () => {
                                    window.removeEventListener('keydown', a, t);
                                }
                            ),
                            [a, t],
                        );
                    };
                let eu, tu, nu, au, ru, iu, ou;
                var su, Eu, lu;
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
                        (u.EpicSelectToken = 'epicSelectToken'),
                        (u.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                        (u.DeluxeGift = 'deluxe_gift'),
                        (u.BattleBoosterGift = 'battleBooster_gift'),
                        (u.OptionalDevice = 'optionalDevice'),
                        (u.EquipCoin = 'equipCoin');
                })(eu || (eu = {})),
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
                    })(tu || (tu = {})),
                    ((lu = nu || (nu = {})).Big = 'big'),
                    (lu.Small = 'small'),
                    (lu.Mini = 'mini'),
                    (lu.S600x450 = 's600x450'),
                    (lu.S400x300 = 's400x300'),
                    (lu.S296x222 = 's296x222'),
                    (lu.S232x174 = 's232x174'),
                    (lu.S180x135 = 's180x135'),
                    (lu.S128x100 = 's128x100'),
                    (lu.S80x80 = 's80x80'),
                    (lu.S64x64 = 's64x64'),
                    (lu.S48x48 = 's48x48'),
                    ((Eu = au || (au = {})).MULTI = 'multi'),
                    (Eu.CURRENCY = 'currency'),
                    (Eu.PREMIUM_PLUS = 'premium_plus'),
                    (Eu.NUMBER = 'number'),
                    (Eu.STRING = 'string'),
                    ((su = ru || (ru = {})).BATTLE_BOOSTER = 'battleBooster'),
                    (su.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                    (su.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                    (su.EQUIPMENT_PLUS = 'equipmentPlus'),
                    (su.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                    (su.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                    (su.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                    (su.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                    (su.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                    (su.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                    (su.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                    (su.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                    (su.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                    (su.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                    (su.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6'),
                    ((iu || (iu = {})).BATTLE_BOOSTER = 'battleBooster'),
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
                    })(ou || (ou = {}));
                class Au extends a().PureComponent {
                    render() {
                        let u;
                        u = 'gold' === this.props.format ? W.B3.GOLD : W.B3.INTEGRAL;
                        const e = W.Z5.getNumberFormat(this.props.value, u);
                        return void 0 !== this.props.value && void 0 !== e ? e : null;
                    }
                }
                (Au.defaultProps = { format: 'integral' }),
                    eu.Items,
                    eu.Equipment,
                    eu.Xp,
                    eu.XpFactor,
                    eu.Blueprints,
                    eu.BlueprintsAny,
                    eu.Goodies,
                    eu.Berths,
                    eu.Slots,
                    eu.Tokens,
                    eu.CrewSkins,
                    eu.CrewBooks,
                    eu.Customizations,
                    eu.CreditsFactor,
                    eu.TankmenXp,
                    eu.TankmenXpFactor,
                    eu.FreeXpFactor,
                    eu.BattleToken,
                    eu.PremiumUniversal,
                    eu.NaturalCover,
                    eu.BpCoin,
                    eu.BattlePassSelectToken,
                    eu.BattlaPassFinalAchievement,
                    eu.BattleBadge,
                    eu.BonusX5,
                    eu.CrewBonusX3,
                    eu.NewYearInvoice,
                    eu.EpicSelectToken,
                    eu.Comp7TokenWeeklyReward,
                    eu.DeluxeGift,
                    eu.BattleBoosterGift,
                    eu.OptionalDevice,
                    eu.Gold,
                    eu.Credits,
                    eu.Crystal,
                    eu.FreeXp,
                    eu.BattlePassPoints,
                    eu.EquipCoin,
                    eu.PremiumPlus,
                    eu.Premium,
                    nu.Small,
                    nu.Big;
                const cu = (u) => {
                    if (void 0 === u) return null;
                    switch (u) {
                        case ru.BATTLE_BOOSTER:
                            return ou.BATTLE_BOOSTER;
                        case ru.BATTLE_BOOSTER_REPLACE:
                            return ou.BATTLE_BOOSTER_REPLACE;
                        case ru.BUILT_IN_EQUIPMENT:
                            return ou.BUILT_IN_EQUIPMENT;
                        case ru.EQUIPMENT_PLUS:
                            return ou.EQUIPMENT_PLUS;
                        case ru.EQUIPMENT_TROPHY_BASIC:
                            return ou.EQUIPMENT_TROPHY_BASIC;
                        case ru.EQUIPMENT_TROPHY_UPGRADED:
                            return ou.EQUIPMENT_TROPHY_UPGRADED;
                        case ru.EQUIPMENT_MODERNIZED_UPGRADED_1:
                            return ou.EQUIPMENT_MODERNIZED_UPGRADED_1;
                        case ru.EQUIPMENT_MODERNIZED_UPGRADED_2:
                            return ou.EQUIPMENT_MODERNIZED_UPGRADED_2;
                        case ru.EQUIPMENT_MODERNIZED_UPGRADED_3:
                            return ou.EQUIPMENT_MODERNIZED_UPGRADED_3;
                        case ru.PROGRESSION_STYLE_UPGRADED_1:
                            return ou.PROGRESSION_STYLE_UPGRADED_1;
                        case ru.PROGRESSION_STYLE_UPGRADED_2:
                            return ou.PROGRESSION_STYLE_UPGRADED_2;
                        case ru.PROGRESSION_STYLE_UPGRADED_3:
                            return ou.PROGRESSION_STYLE_UPGRADED_3;
                        case ru.PROGRESSION_STYLE_UPGRADED_4:
                            return ou.PROGRESSION_STYLE_UPGRADED_4;
                        case ru.PROGRESSION_STYLE_UPGRADED_5:
                            return ou.PROGRESSION_STYLE_UPGRADED_5;
                        case ru.PROGRESSION_STYLE_UPGRADED_6:
                            return ou.PROGRESSION_STYLE_UPGRADED_6;
                    }
                };
                let Fu;
                !(function (u) {
                    (u.Additional = 'additional'), (u.Default = 'default');
                })(Fu || (Fu = {}));
                const du = 16 / 9,
                    Du = { width: 1920, height: 1080 },
                    _u = (u) => (u === N.premium ? R.videos.event_loot_boxes.lootbox_prem() : ''),
                    Bu = (u) => {
                        switch (!0) {
                            case u < 4:
                                return '';
                            case u >= 5:
                                return 'extraSmall';
                            default:
                                return 'small';
                        }
                    },
                    Cu = {
                        base: 'AnimationVideo_base_92',
                        base__wide: 'AnimationVideo_base__wide_c2',
                        wrapper: 'AnimationVideo_wrapper_ba',
                        imageBackground: 'AnimationVideo_imageBackground_1b',
                        video: 'AnimationVideo_video_14',
                        fadeIn: 'AnimationVideo_fadeIn_1b',
                        fadeCornerEffect: 'AnimationVideo_fadeCornerEffect_f9',
                        fadeCornerEffect__wide: 'AnimationVideo_fadeCornerEffect__wide_bf',
                        bright: 'AnimationVideo_bright_29',
                        raysAppearance: 'AnimationVideo_raysAppearance_15',
                        rotate: 'AnimationVideo_rotate_18',
                        fadeOut: 'AnimationVideo_fadeOut_ce',
                    },
                    mu = ({ setVideoPlaying: u, isVideoPlaying: e, isAnimationActive: t, boxType: r, onReady: i }) => {
                        const o = (0, n.useState)(Du),
                            E = o[0],
                            l = o[1],
                            A = x(),
                            c = A.remScreenWidth,
                            F = A.remScreenHeight,
                            d = (0, n.useState)(!1),
                            D = d[0],
                            _ = d[1],
                            B = (0, n.useRef)(null),
                            C = (0, n.useCallback)(() => {
                                const u = s.O.client.getSize().height,
                                    e = (u * du).toFixed(2);
                                l({ height: u, width: parseFloat(e) });
                            }, [l]),
                            m = (0, n.useCallback)(() => {
                                const u = B.current;
                                u && !u.ended && (u.currentTime = u.duration - 0.05);
                            }, []),
                            g = (0, n.useCallback)(() => {
                                switch (r) {
                                    case N.common:
                                        (0, Z.G)('ev_hangar_lootbox_open_metal');
                                        break;
                                    case N.premium:
                                        (0, Z.G)('ev_hangar_lootbox_open_gold');
                                }
                            }, [r]);
                        (0, n.useEffect)(
                            () => (
                                C(),
                                window.addEventListener('resize', C),
                                () => {
                                    window.removeEventListener('resize', C);
                                }
                            ),
                            [C],
                        ),
                            (0, n.useEffect)(() => {
                                const u = B.current;
                                if (u)
                                    return (
                                        u.addEventListener('play', i),
                                        () => {
                                            u.removeEventListener('play', i);
                                        }
                                    );
                                i();
                            }, [i]),
                            (0, n.useEffect)(() => {
                                if (!t) {
                                    const e = window.setTimeout(() => u(!1), 300);
                                    return () => {
                                        window.clearTimeout(e);
                                    };
                                }
                            }, [u, t]),
                            (0, n.useEffect)(() => {
                                const e = B.current;
                                if (t && e) {
                                    const t = () => {
                                        u(!1);
                                    };
                                    return (
                                        e.addEventListener('ended', t),
                                        () => {
                                            e.removeEventListener('ended', t);
                                        }
                                    );
                                }
                            }, [u, t, _]),
                            (0, n.useEffect)(() => {
                                D && g();
                            }, [D, g]),
                            (0, n.useEffect)(() => {
                                e || _(!1);
                            }, [e]),
                            (0, n.useEffect)(() => {
                                if (B.current && e && t)
                                    return (B.current.currentTime = 0), B.current.play(), Q(() => _(!0), 500);
                            }, [t, e, _]);
                        const h = (0, n.useMemo)(() => ({ width: E.width }), [E]),
                            v = (0, n.useMemo)(() => ({ maxWidth: E.width }), [E]),
                            w = (0, n.useMemo)(() => c > 1920 || c > F * du, [c, F]),
                            b = (0, n.useMemo)(() => p()(Cu.base, w && Cu.base__wide), [w]),
                            f = (0, n.useMemo)(() => p()(Cu.fadeCornerEffect, w && Cu.fadeCornerEffect__wide), [w]);
                        return (
                            uu(K.n.SPACE, m),
                            a().createElement(
                                'div',
                                { className: b },
                                a().createElement(
                                    'div',
                                    { className: Cu.wrapper, style: v, onClick: m },
                                    t
                                        ? a().createElement('video', {
                                              autoPlay: !0,
                                              ref: B,
                                              className: Cu.video,
                                              src: _u(r),
                                              style: h,
                                          })
                                        : a().createElement('div', { className: Cu.imageBackground, style: h }),
                                    a().createElement('div', { className: f }),
                                    w &&
                                        a().createElement(
                                            a().Fragment,
                                            null,
                                            a().createElement('div', { className: Cu.leftCorner }),
                                            a().createElement('div', { className: Cu.rightCorner }),
                                        ),
                                ),
                            )
                        );
                    },
                    gu = [],
                    hu = [
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
                function pu(u) {
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
                const vu = (u, e, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: W.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    wu = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            a = u.args,
                            r = u.onMouseEnter,
                            i = u.onMouseLeave,
                            o = u.onMouseDown,
                            s = u.onClick,
                            E = u.ignoreShowDelay,
                            l = void 0 !== E && E,
                            A = u.ignoreMouseClick,
                            c = void 0 !== A && A,
                            F = u.decoratorId,
                            d = void 0 === F ? 0 : F,
                            D = u.isEnabled,
                            _ = void 0 === D || D,
                            B = u.targetId,
                            C = void 0 === B ? 0 : B,
                            m = u.onShow,
                            g = u.onHide,
                            h = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(u);
                                for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                return a;
                            })(u, hu);
                        const p = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, n.useMemo)(() => C || G().resId, [C]),
                            w = (0, n.useCallback)(() => {
                                (p.current.isVisible && p.current.timeoutId) ||
                                    (vu(t, d, { isMouseEvent: !0, on: !0, arguments: pu(a) }, v),
                                    m && m(),
                                    (p.current.isVisible = !0));
                            }, [t, d, a, v, m]),
                            b = (0, n.useCallback)(() => {
                                if (p.current.isVisible || p.current.timeoutId) {
                                    const u = p.current.timeoutId;
                                    u > 0 && (clearTimeout(u), (p.current.timeoutId = 0)),
                                        vu(t, d, { on: !1 }, v),
                                        p.current.isVisible && g && g(),
                                        (p.current.isVisible = !1);
                                }
                            }, [t, d, v, g]),
                            f = (0, n.useCallback)((u) => {
                                p.current.isVisible &&
                                    ((p.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (p.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(p.current.prevTarget) && b();
                                    }, 200)));
                            }, []);
                        return (
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
                                !1 === _ && b();
                            }, [_, b]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', b),
                                    () => {
                                        window.removeEventListener('mouseleave', b), b();
                                    }
                                ),
                                [b],
                            ),
                            _
                                ? (0, n.cloneElement)(
                                      e,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((S = e.props.onMouseEnter),
                                                  (u) => {
                                                      (u.clientX === window.innerWidth &&
                                                          u.clientY === window.innerHeight) ||
                                                          ((p.current.timeoutId = window.setTimeout(w, l ? 100 : 400)),
                                                          r && r(u),
                                                          S && S(u));
                                                  }),
                                              onMouseLeave: ((u) => (e) => {
                                                  b(), null == i || i(e), null == u || u(e);
                                              })(e.props.onMouseLeave),
                                              onClick: ((u) => (e) => {
                                                  !1 === c && b(), null == s || s(e), null == u || u(e);
                                              })(e.props.onClick),
                                              onMouseDown: ((u) => (e) => {
                                                  !1 === c && b(), null == o || o(e), null == u || u(e);
                                              })(e.props.onMouseDown),
                                          },
                                          h,
                                      ),
                                  )
                                : e
                        );
                        var S;
                    },
                    bu = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function fu() {
                    return (
                        (fu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        fu.apply(this, arguments)
                    );
                }
                const Su = R.views.common.tooltip_window.simple_tooltip_content,
                    xu = (u) => {
                        let e = u.children,
                            t = u.body,
                            r = u.header,
                            i = u.note,
                            o = u.alert,
                            s = u.args,
                            E = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(u);
                                for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                return a;
                            })(u, bu);
                        const l = (0, n.useMemo)(() => {
                            const u = Object.assign({}, s, { body: t, header: r, note: i, alert: o });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [o, t, r, i, s]);
                        return a().createElement(
                            wu,
                            fu(
                                {
                                    contentId:
                                        ((A = null == s ? void 0 : s.hasHtmlContent),
                                        A ? Su.SimpleTooltipHtmlContent('resId') : Su.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: l,
                                },
                                E,
                            ),
                            e,
                        );
                        var A;
                    };
                var Ru = t(281);
                let Tu;
                function yu(u, e) {
                    return u.replace(/(\{|%\()\w+(\}|\)s)/g, (u) => {
                        const t = 0 === u.indexOf('%') ? 2 : 1;
                        return String(e[u.slice(t, -t)]);
                    });
                }
                !(function (u) {
                    (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                })(Tu || (Tu = {}));
                const Lu = (u) => u.replace(/&nbsp;/g, ' '),
                    Pu = (u, e, t) => {
                        if (t % 2) {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                        return [...u, e];
                    },
                    Ou = (u, e, t) => {
                        if (0 === t) return [e];
                        if (t % 2) return [...u, ' ' === e ? ' ' : e];
                        {
                            const t = u.pop();
                            return [...u, t + e];
                        }
                    },
                    ku = (u, e, t = Tu.left) => u.split(e).reduce(t === Tu.left ? Pu : Ou, []),
                    Iu = (() => {
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
                    Mu = ['zh_cn', 'zh_sg', 'zh_tw'],
                    Nu = R.strings.event_lootboxes.openBoxScreen,
                    Uu = ({ dayLimit: u, onClick: e, useExternalShop: t }) => {
                        const r = (0, n.useMemo)(
                                () => ({
                                    header: yu(Nu.buy.tooltip.header(), { count: u }),
                                    body: yu(Nu.buy.tooltip.body(), { countText: u }),
                                }),
                                [u],
                            ),
                            i = (0, n.useCallback)(() => {
                                (0, Z.G)('play'), e();
                            }, [e]),
                            o = (0, n.useCallback)(() => {
                                (0, Z.G)('highlight');
                            }, []);
                        return a().createElement(
                            xu,
                            r,
                            a().createElement(
                                'div',
                                { className: 'BuyWidget_base_0e', onClick: i, onMouseEnter: o },
                                a().createElement(
                                    'div',
                                    { className: 'BuyWidget_wrapper_fc' },
                                    a().createElement('div', { className: 'BuyWidget_icon_a4' }),
                                    a().createElement('div', { className: 'BuyWidget_iconHover_f3' }),
                                ),
                                a().createElement(
                                    'div',
                                    { className: 'BuyWidget_buyLabel_2a' },
                                    Nu.congratulation.buy(),
                                    t && a().createElement('div', { className: 'BuyWidget_buyIcon_70' }),
                                ),
                            ),
                        );
                    };
                let Gu, Hu, Wu;
                !(function (u) {
                    (u.small = 'small'), (u.big = 'big'), (u.large = 'large'), (u.extraLarge = 'extraLarge');
                })(Gu || (Gu = {})),
                    (function (u) {
                        (u.credits = 'credits'),
                            (u.gold = 'gold'),
                            (u.crystal = 'crystal'),
                            (u.xp = 'xp'),
                            (u.freeXP = 'freeXP'),
                            (u.equipCoin = 'equipCoin');
                    })(Hu || (Hu = {})),
                    (function (u) {
                        (u.Red = 'RedActionBG'), (u.Blue = 'BlueActionBG');
                    })(Wu || (Wu = {}));
                const Vu = ['children'];
                function $u() {
                    return (
                        ($u =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        $u.apply(this, arguments)
                    );
                }
                const zu = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(u);
                                for (n = 0; n < r.length; n++) (t = r[n]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                return a;
                            })(u, Vu);
                        return a().createElement(
                            wu,
                            $u(
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
                    Yu = {
                        base: 'CongratulationRewardItem_base_28',
                        fadeIn: 'CongratulationRewardItem_fadeIn_92',
                        base__additional: 'CongratulationRewardItem_base__additional_7b',
                        base__additional__x2: 'CongratulationRewardItem_base__additional__x2_89',
                        base__extraSmall: 'CongratulationRewardItem_base__extraSmall_e8',
                        base__hidden: 'CongratulationRewardItem_base__hidden_70',
                        iconWrapper: 'CongratulationRewardItem_iconWrapper_61',
                        icon: 'CongratulationRewardItem_icon_bc',
                        overlay: 'CongratulationRewardItem_overlay_56',
                        base__small: 'CongratulationRewardItem_base__small_f5',
                        count: 'CongratulationRewardItem_count_04',
                        count__equipCoin: 'CongratulationRewardItem_count__equipCoin_9b',
                        count__freeXP: 'CongratulationRewardItem_count__freeXP_1c',
                        count__credits: 'CongratulationRewardItem_count__credits_b1',
                        count__gold: 'CongratulationRewardItem_count__gold_36',
                        base__compensation: 'CongratulationRewardItem_base__compensation_b3',
                        countPrefix: 'CongratulationRewardItem_countPrefix_c3',
                        compensationIcon: 'CongratulationRewardItem_compensationIcon_00',
                        bright: 'CongratulationRewardItem_bright_43',
                        raysAppearance: 'CongratulationRewardItem_raysAppearance_49',
                        rotate: 'CongratulationRewardItem_rotate_d4',
                        fadeOut: 'CongratulationRewardItem_fadeOut_fe',
                    },
                    qu = ({
                        iconSource: u,
                        tooltipId: e,
                        count: t,
                        theme: r,
                        isCompensation: i,
                        overlayType: o,
                        name: E,
                        rewardsCount: l,
                        delay: A,
                        isLast: c,
                        setIsButtonDisabled: F,
                    }) => {
                        const d = (0, n.useState)(!0),
                            D = d[0],
                            _ = d[1],
                            B = (() => {
                                const u = (0, n.useState)(s.O.view.getScale()),
                                    e = u[0],
                                    t = u[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        const u = () => {
                                            t(s.O.view.getScale());
                                        };
                                        return (
                                            window.addEventListener('resize', u),
                                            () => {
                                                window.removeEventListener('resize', u);
                                            }
                                        );
                                    }, []),
                                    e
                                );
                            })(),
                            C = ((u, e, t, n, a, r) => {
                                if (!u) return { icon: null };
                                if (e === Fu.Additional) {
                                    const e = cu(r);
                                    if (e === ou.BATTLE_BOOSTER || e === ou.BATTLE_BOOSTER_REPLACE) {
                                        const e = ((u) => {
                                                const e = u.split('.');
                                                return (
                                                    e.length &&
                                                        (e[0] =
                                                            e[0] +
                                                            ou.BATTLE_BOOSTER[0].toUpperCase() +
                                                            ou.BATTLE_BOOSTER.slice(1)),
                                                    e.join('.')
                                                );
                                            })(u),
                                            n = t < b.Medium && 1 === a ? 'small' : 'big';
                                        return { icon: e.replace('s600x450', n), size: n };
                                    }
                                    return {
                                        icon: u.replace('s600x450', t < b.Medium && 1 === a ? 'small' : 'big'),
                                        size: Bu(n),
                                    };
                                }
                                return { icon: u, overlay: cu(r), size: Bu(n) };
                            })(u, r, x().mediaSize, l, B, o),
                            m = C.icon,
                            g = C.overlay,
                            h = C.size,
                            v = (0, n.useMemo)(() => ({ backgroundImage: `url(${m})` }), [m]),
                            w = (0, n.useMemo)(() => ({ tooltipId: e }), [e]),
                            f = p()(
                                Yu.base,
                                Yu[`base__${r}`],
                                Yu[`base__${r}${2 === B ? '__x2' : ''}`],
                                r === Fu.Default && Yu[`base__${h}`],
                                i && Yu.base__compensation,
                                D && Yu.base__hidden,
                            );
                        (0, n.useEffect)(
                            () =>
                                Q(() => {
                                    _(!1), (0, Z.G)('ev_hangar_lootbox_reward_tape_appears_generic');
                                }, A),
                            [A],
                        ),
                            (0, n.useEffect)(
                                () =>
                                    Q(
                                        () => {
                                            c && F(!1);
                                        },
                                        A <= 1100 ? 1100 : A,
                                    ),
                                [A, c, F],
                            );
                        const S = i || Object.keys(Hu).includes(E);
                        return a().createElement(
                            'div',
                            { className: f },
                            a().createElement(
                                zu,
                                { args: w },
                                a().createElement(
                                    'div',
                                    { className: Yu.iconWrapper },
                                    a().createElement('div', { className: Yu.icon, style: v }),
                                    g &&
                                        a().createElement('div', {
                                            className: Yu.overlay,
                                            style: {
                                                backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.s600x450.${g}_overlay)`,
                                            },
                                        }),
                                ),
                            ),
                            t > 1 &&
                                a().createElement(
                                    'div',
                                    { className: p()(Yu.count, Yu[`count__${E}`]) },
                                    !S &&
                                        a().createElement(
                                            'div',
                                            { className: Yu.countPrefix },
                                            R.strings.event_lootboxes.openBoxScreen.count.mult(),
                                        ),
                                    a().createElement(Au, { value: t }),
                                ),
                            i &&
                                a().createElement(
                                    wu,
                                    {
                                        contentId:
                                            R.views.event_lootboxes.lobby.event_lootboxes.tooltips.CompensationTooltip(
                                                'resId',
                                            ),
                                        ignoreShowDelay: !0,
                                    },
                                    a().createElement('div', { className: Yu.compensationIcon }),
                                ),
                        );
                    };
                let ju;
                !(function (u) {
                    (u.Heavy = 'heavyTank'),
                        (u.Medium = 'mediumTank'),
                        (u.Light = 'lightTank'),
                        (u.Spg = 'SPG'),
                        (u.AtSpg = 'AT-SPG');
                })(ju || (ju = {})),
                    R.strings.event_lootboxes.time.days(),
                    R.strings.event_lootboxes.time.hours(),
                    R.strings.event_lootboxes.time.minutes(),
                    R.strings.event_lootboxes.time.seconds();
                const Xu = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'],
                    Ku = (u) => {
                        switch (u) {
                            case ju.Heavy:
                                return R.images.gui.maps.icons.vehicleTypes.big.heavyTank_elite();
                            case ju.AtSpg:
                                return R.images.gui.maps.icons.vehicleTypes.big.AT_SPG_elite();
                            case ju.Spg:
                                return R.images.gui.maps.icons.vehicleTypes.big.SPG_elite();
                            case ju.Medium:
                                return R.images.gui.maps.icons.vehicleTypes.big.mediumTank_elite();
                            case ju.Light:
                                return R.images.gui.maps.icons.vehicleTypes.big.lightTank_elite();
                            default:
                                return '';
                        }
                    },
                    Qu = ({ type: u, name: e, level: t }) => {
                        const r = (0, n.useMemo)(() => ({ backgroundImage: `url(${Ku(u)})` }), [u]);
                        return a().createElement(
                            'div',
                            { className: 'CongratulationVehicleHeader_base_fb' },
                            a().createElement(
                                'div',
                                { className: 'CongratulationVehicleHeader_level_3d' },
                                ((u) => Xu[u] || '')(t),
                            ),
                            a().createElement('div', { className: 'CongratulationVehicleHeader_type_58', style: r }),
                            a().createElement('div', { className: 'CongratulationVehicleHeader_name_05' }, e),
                        );
                    },
                    Zu = ({ name: u, type: e, level: t, tooltipId: r, iconSource: i }) => {
                        const o = (0, n.useMemo)(() => ({ backgroundImage: `url(${i})` }), [i]),
                            s = (0, n.useMemo)(() => ({ tooltipId: r }), [r]);
                        return a().createElement(
                            'div',
                            { className: 'CongratulationVehicleItem_base_ee' },
                            a().createElement(Qu, { type: e, name: u, level: t }),
                            a().createElement(
                                zu,
                                { args: s },
                                a().createElement('div', { className: 'CongratulationVehicleItem_icon_1c', style: o }),
                            ),
                        );
                    };
                function Ju() {
                    return (
                        (Ju =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        Ju.apply(this, arguments)
                    );
                }
                const ue = ({ hasVehicle: u, rewards: e, setRewardsAnimationReady: t, setIsButtonDisabled: r }) => {
                        const i = q('model.vehicle');
                        return (
                            (0, n.useEffect)(
                                () =>
                                    Q(() => {
                                        t(!0);
                                    }, 450 * e.length),
                                [e, t],
                            ),
                            a().createElement(
                                'div',
                                {
                                    className: p()(
                                        'CongratulationRewards_base_f5',
                                        u && 'CongratulationRewards_base__hasVehicle_be',
                                    ),
                                },
                                u &&
                                    i &&
                                    a().createElement(
                                        a().Fragment,
                                        null,
                                        a().createElement(
                                            'div',
                                            { className: 'CongratulationRewards_vehicleWrap_01' },
                                            a().createElement(Zu, i),
                                        ),
                                        a().createElement(
                                            'div',
                                            { className: 'CongratulationRewards_vehicleInfo_37' },
                                            R.strings.event_lootboxes.openBoxScreen.congratulation.additionalRewardText(),
                                        ),
                                    ),
                                a().createElement(
                                    'div',
                                    { className: 'CongratulationRewards_rewardsWrap_61' },
                                    e.map((t, n) =>
                                        a().createElement(
                                            qu,
                                            Ju({}, t.value, {
                                                key: `${n}-${t.id}`,
                                                theme: u ? Fu.Additional : Fu.Default,
                                                rewardsCount: e.length,
                                                delay: 450 * n,
                                                isLast: n === e.length - 1,
                                                setIsButtonDisabled: r,
                                            }),
                                        ),
                                    ),
                                ),
                            )
                        );
                    },
                    ee = {
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
                        base__firstHover: 'CButton_base__firstHover_d5',
                        base__highlightActive: 'CButton_base__highlightActive_b2',
                        content: 'CButton_content_cc',
                    };
                let te, ne;
                !(function (u) {
                    (u.main = 'main'),
                        (u.primary = 'primary'),
                        (u.primaryGreen = 'primaryGreen'),
                        (u.primaryRed = 'primaryRed'),
                        (u.secondary = 'secondary'),
                        (u.ghost = 'ghost');
                })(te || (te = {})),
                    (function (u) {
                        (u.extraSmall = 'extraSmall'), (u.small = 'small'), (u.medium = 'medium'), (u.large = 'large');
                    })(ne || (ne = {}));
                const ae = ({
                    children: u,
                    size: e,
                    isFocused: t,
                    type: r,
                    disabled: i,
                    mixClass: o,
                    soundHover: s,
                    soundClick: E,
                    onMouseEnter: l,
                    onMouseMove: A,
                    onMouseDown: c,
                    onMouseUp: F,
                    onMouseLeave: d,
                    onClick: D,
                }) => {
                    const _ = (0, n.useRef)(null),
                        B = (0, n.useState)(t),
                        C = B[0],
                        m = B[1],
                        g = (0, n.useState)(!1),
                        h = g[0],
                        v = g[1],
                        w = (0, n.useState)(!1),
                        b = w[0],
                        f = w[1],
                        S = (0, n.useCallback)(() => {
                            i || (_.current && (_.current.focus(), m(!0)));
                        }, [i]),
                        x = (0, n.useCallback)(
                            (u) => {
                                C && null !== _.current && !_.current.contains(u.target) && m(!1);
                            },
                            [C],
                        ),
                        T = (0, n.useCallback)(
                            (u) => {
                                i || (D && D(u));
                            },
                            [i, D],
                        ),
                        y = (0, n.useCallback)(
                            (u) => {
                                i || (null !== s && (0, Z.G)(s), l && l(u), f(!0));
                            },
                            [i, s, l],
                        ),
                        L = (0, n.useCallback)(
                            (u) => {
                                A && A(u);
                            },
                            [A],
                        ),
                        P = (0, n.useCallback)(
                            (u) => {
                                i || (F && F(u), v(!1));
                            },
                            [i, F],
                        ),
                        O = (0, n.useCallback)(
                            (u) => {
                                i || (null !== E && (0, Z.G)(E), c && c(u), t && S(), v(!0));
                            },
                            [i, E, c, S, t],
                        ),
                        k = (0, n.useCallback)(
                            (u) => {
                                i || (d && d(u), v(!1));
                            },
                            [i, d],
                        ),
                        I = p()(
                            ee.base,
                            ee[`base__${r}`],
                            {
                                [ee.base__disabled]: i,
                                [ee[`base__${e}`]]: e,
                                [ee.base__focus]: C,
                                [ee.base__highlightActive]: h,
                                [ee.base__firstHover]: b,
                            },
                            o,
                        ),
                        M = p()(ee.state, ee.state__default);
                    return (
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mousedown', x),
                                () => {
                                    document.removeEventListener('mousedown', x);
                                }
                            ),
                            [x],
                        ),
                        (0, n.useEffect)(() => {
                            m(t);
                        }, [t]),
                        a().createElement(
                            'div',
                            {
                                ref: _,
                                className: I,
                                onMouseEnter: y,
                                onMouseMove: L,
                                onMouseUp: P,
                                onMouseDown: O,
                                onMouseLeave: k,
                                onClick: T,
                            },
                            r !== te.ghost &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: ee.back }),
                                    a().createElement('span', { className: ee.texture }),
                                ),
                            a().createElement(
                                'span',
                                { className: M },
                                a().createElement('span', { className: ee.stateDisabled }),
                                a().createElement('span', { className: ee.stateHighlightHover }),
                                a().createElement('span', { className: ee.stateHighlightActive }),
                            ),
                            a().createElement(
                                'span',
                                { className: ee.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                u,
                            ),
                        )
                    );
                };
                ae.defaultProps = { type: te.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const re = (0, n.memo)(ae),
                    ie = ({ binding: u, text: e = '', classMix: t, alignment: r = Tu.left, formatWithBrackets: i }) => {
                        if (null === e) return console.error("FormatText was supplied with 'null'"), null;
                        const o = i && u ? ((s = u), e.replace(/\{\w+\}/g, (u) => String(s[u.slice(1, -1)]))) : e;
                        var s;
                        return a().createElement(
                            n.Fragment,
                            null,
                            o.split('\n').map((e, i) =>
                                a().createElement(
                                    'div',
                                    { className: p()('FormatText_base_d0', t), key: `${e}-${i}` },
                                    ((u, e, t) =>
                                        u.split(/%\((.*?)\)(?:[sd])?/g).map((u) =>
                                            t && u in t
                                                ? t[u]
                                                : ((u, e = Tu.left) => {
                                                      const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                                                      return Mu.includes(t)
                                                          ? Iu(u)
                                                          : 'ja' === t
                                                            ? (0, Ru.D4)()
                                                                  .parse(u)
                                                                  .map((u) => Lu(u))
                                                            : ((u, e = Tu.left) => {
                                                                  let t = [];
                                                                  const n =
                                                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                                                      a = Lu(u);
                                                                  return (
                                                                      ku(a, /( )/, e).forEach(
                                                                          (u) => (t = t.concat(ku(u, n, Tu.left))),
                                                                      ),
                                                                      t
                                                                  );
                                                              })(u, e);
                                                  })(u, e),
                                        ))(e, r, u).map((u, e) =>
                                        a().createElement(n.Fragment, { key: `${e}-${u}` }, u),
                                    ),
                                ),
                            ),
                        );
                    },
                    oe = R.strings.event_lootboxes.openBoxScreen.congratulation,
                    se = (0, n.memo)(
                        ({
                            openNextBox: u,
                            onClose: e,
                            hasBoxes: t,
                            isDisabled: r,
                            isLootBoxAvailable: i,
                            btnStyle: o,
                        }) => {
                            const s = t ? oe.openNextBox() : oe.purchasesIsOverBtnText(),
                                E = (0, n.useCallback)(() => {
                                    e(), (0, W.Sy)();
                                }, [e]),
                                l = (0, n.useCallback)(() => (t ? u() : E()), [t, u, E]);
                            return (
                                uu(
                                    K.n.SPACE,
                                    () => {
                                        !r && i && l();
                                    },
                                    !0,
                                ),
                                i
                                    ? a().createElement(
                                          re,
                                          { type: te.primary, size: ne.medium, onClick: l, mixClass: o, disabled: r },
                                          s,
                                      )
                                    : a().createElement(
                                          xu,
                                          { body: R.strings.event_lootboxes.popover.button.tooltip.alert() },
                                          a().createElement(
                                              'div',
                                              null,
                                              a().createElement(
                                                  re,
                                                  {
                                                      type: te.primary,
                                                      size: ne.medium,
                                                      onClick: l,
                                                      mixClass: o,
                                                      disabled: r || !i,
                                                  },
                                                  s,
                                              ),
                                          ),
                                      )
                            );
                        },
                    ),
                    Ee = {
                        base: 'CongratulationRewardsControls_base_1c',
                        btnWrapper: 'CongratulationRewardsControls_btnWrapper_bf',
                        boxCountBlock: 'CongratulationRewardsControls_boxCountBlock_f1',
                        boxCount: 'CongratulationRewardsControls_boxCount_0e',
                        cButton: 'CongratulationRewardsControls_cButton_f4',
                        mainRewardInfo: 'CongratulationRewardsControls_mainRewardInfo_68',
                        mainRewardCount: 'CongratulationRewardsControls_mainRewardCount_65',
                        mainRewardShine: 'CongratulationRewardsControls_mainRewardShine_73',
                        mainRewardShine__visible: 'CongratulationRewardsControls_mainRewardShine__visible_61',
                        fadeIn: 'CongratulationRewardsControls_fadeIn_29',
                        infoIcon: 'CongratulationRewardsControls_infoIcon_7e',
                        bright: 'CongratulationRewardsControls_bright_99',
                        raysAppearance: 'CongratulationRewardsControls_raysAppearance_9d',
                        rotate: 'CongratulationRewardsControls_rotate_2e',
                        fadeOut: 'CongratulationRewardsControls_fadeOut_41',
                    },
                    le = R.strings.event_lootboxes.openBoxScreen,
                    Ae = (0, n.memo)(
                        ({
                            openNextBox: u,
                            onShowVehicleInHangar: e,
                            onClose: t,
                            boxCount: r,
                            hasVehicle: i,
                            isRewardsAnimationReady: o,
                            isButtonDisabled: s,
                            isLootBoxAvailable: E,
                            mainRewardBoxesLeft: l,
                            guaranteedLimit: A,
                        }) => {
                            const c = p()(Ee.base, i && Ee.base__hasVehicle),
                                F = p()(Ee.mainRewardShine, o && Ee.mainRewardShine__visible),
                                d = r > 0,
                                D = (0, n.useMemo)(
                                    () => ({
                                        count: a().createElement(
                                            'div',
                                            { className: Ee.mainRewardCount },
                                            a().createElement('div', { className: F }),
                                            l,
                                        ),
                                    }),
                                    [l, F],
                                ),
                                _ = (0, n.useMemo)(
                                    () => ({ count: a().createElement('div', { className: Ee.boxCount }, r) }),
                                    [r],
                                ),
                                B = (0, n.useCallback)(() => {
                                    t(), e();
                                }, [t, e]);
                            return a().createElement(
                                'div',
                                { className: c },
                                a().createElement(
                                    'div',
                                    { className: Ee.mainRewardInfo },
                                    a().createElement(ie, { text: le.mainReward.count(), binding: D }),
                                    a().createElement(
                                        xu,
                                        {
                                            header: le.mainReward.info.tooltip.header(),
                                            body: yu(le.mainReward.info.tooltip.body(), {
                                                fails: A - 1,
                                                guaranteed: A,
                                            }),
                                        },
                                        a().createElement('div', { className: Ee.infoIcon }),
                                    ),
                                ),
                                a().createElement(
                                    'div',
                                    { className: Ee.btnWrapper },
                                    a().createElement(se, {
                                        hasBoxes: d,
                                        isDisabled: !o || s,
                                        isLootBoxAvailable: E,
                                        openNextBox: u,
                                        onClose: t,
                                        btnStyle: Ee.cButton,
                                    }),
                                    i &&
                                        a().createElement(
                                            re,
                                            {
                                                type: te.secondary,
                                                size: ne.medium,
                                                onClick: B,
                                                mixClass: Ee.cButton,
                                                disabled: !o || s,
                                            },
                                            le.congratulation.showVehicleInHangar(),
                                        ),
                                ),
                                d
                                    ? a().createElement(ie, {
                                          classMix: Ee.boxCountBlock,
                                          text: le.congratulation.boxCountText(),
                                          binding: _,
                                      })
                                    : a().createElement(
                                          'div',
                                          { className: Ee.boxCountBlock },
                                          le.congratulation.purchasesIsOverText(),
                                      ),
                            );
                        },
                    ),
                    ce = (0, n.memo)(({ hasVehicle: u }) =>
                        a().createElement(
                            'div',
                            { className: 'CongratulationRibbon_base_89' },
                            a().createElement('div', { className: 'CongratulationRibbon_ribbon_f1' }),
                            a().createElement(
                                'div',
                                { className: 'CongratulationRibbon_animationWrap_5b' },
                                a().createElement('div', { className: 'CongratulationRibbon_rays_56' }),
                                u &&
                                    a().createElement('img', {
                                        className: 'CongratulationRibbon_imageLight_52',
                                        src: 'swf://gui/flash/animations/battlePass/rays.swf',
                                    }),
                            ),
                        ),
                    ),
                    Fe = R.strings.event_lootboxes.openBoxScreen.congratulation,
                    de = () =>
                        a().createElement(
                            'div',
                            { className: 'CongratulationTitle_base_04' },
                            a().createElement('div', { className: 'CongratulationTitle_title_be' }, Fe.titleText()),
                            a().createElement(
                                'div',
                                { className: 'CongratulationTitle_description_87' },
                                Fe.descriptionPremiumText(),
                            ),
                        ),
                    De = (u) => u.map((u) => u),
                    _e = ({
                        setRewardsAnimationReady: u,
                        isRewardsAnimationReady: e,
                        setNeedUpdate: t,
                        needPlayAppears: r,
                    }) => {
                        const i = q('model'),
                            o = i.boxCount,
                            s = i.openNextBox,
                            E = i.showVehicleInHangar,
                            l = i.buyBox,
                            A = i.onClose,
                            c = i.dayLimit,
                            F = i.rewards,
                            d = i.hasVehicle,
                            D = i.isLootBoxAvailable,
                            _ = i.isBuyAvailable,
                            B = i.mainRewardBoxesLeft,
                            C = i.guaranteedLimit,
                            m = i.useExternalShop,
                            g = (0, n.useState)(!0),
                            h = g[0],
                            v = g[1],
                            w = (function (u) {
                                const e = (0, n.useRef)(u);
                                return (
                                    (0, n.useLayoutEffect)(() => {
                                        e.current = u;
                                    }),
                                    (0, n.useCallback)((...u) => (0, e.current)(...u), gu)
                                );
                            })(() => {
                                h || (t(!0), v(!0), s());
                            });
                        (0, n.useEffect)(() => {
                            r && (0, Z.G)('ev_hangar_lootbox_reward_tape_appears');
                        }, [r]);
                        const b = p()(
                            'Congratulation_fadeAnimationWrap_ee',
                            e && 'Congratulation_fadeAnimationWrap__visible_de',
                        );
                        return a().createElement(
                            'div',
                            { className: 'Congratulation_base_93' },
                            a().createElement(ce, { hasVehicle: d }),
                            a().createElement(
                                'div',
                                { className: 'Congratulation_wrapper_d2' },
                                a().createElement('div', { className: b }, a().createElement(de, null)),
                                a().createElement(ue, {
                                    hasVehicle: d,
                                    rewards: De(F.items),
                                    setRewardsAnimationReady: u,
                                    setIsButtonDisabled: v,
                                }),
                                a().createElement(
                                    'div',
                                    { className: b },
                                    a().createElement(Ae, {
                                        openNextBox: w,
                                        onShowVehicleInHangar: E,
                                        onClose: A,
                                        boxCount: o,
                                        hasVehicle: d,
                                        isRewardsAnimationReady: e,
                                        isButtonDisabled: h,
                                        isLootBoxAvailable: D,
                                        mainRewardBoxesLeft: B,
                                        guaranteedLimit: C,
                                    }),
                                ),
                            ),
                            _ && a().createElement(Uu, { dayLimit: c, onClick: l, useExternalShop: m }),
                        );
                    },
                    Be = () => {
                        const u = q(),
                            e = u.isAnimationActive,
                            t = u.changeAnimationState,
                            r = u.boxType,
                            i = u.hideWaiting,
                            o = u.onClose,
                            s = u.osBit === U.x64,
                            E = (0, n.useState)(!0),
                            l = E[0],
                            A = E[1],
                            c = (0, n.useState)(!1),
                            F = c[0],
                            d = c[1],
                            D = (0, n.useState)(e),
                            _ = D[0],
                            B = D[1],
                            C = (0, n.useState)(!1),
                            m = C[0],
                            g = C[1],
                            h = (0, n.useCallback)(() => t(), [t]),
                            p = (0, n.useCallback)(() => i(), [i]),
                            v = (0, n.useCallback)(() => o(), [o]);
                        (0, n.useEffect)(() => {
                            m && (e !== _ && B(e), e && A(!0), g(!1));
                        }, [e, _, m]);
                        const w = e ? !m && !l : !m;
                        return a().createElement(
                            'div',
                            { className: 'App_base_19' },
                            a().createElement(mu, {
                                setVideoPlaying: A,
                                isAnimationActive: _,
                                isVideoPlaying: l,
                                boxType: r,
                                onReady: p,
                            }),
                            !l &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    F && a().createElement(X.d, { onCloseCallback: v }),
                                    a().createElement(_e, {
                                        isRewardsAnimationReady: F,
                                        setRewardsAnimationReady: d,
                                        setNeedUpdate: g,
                                        needPlayAppears: w,
                                    }),
                                ),
                            s && a().createElement(j.E, { isActive: e, onClick: h }),
                        );
                    };
                engine.whenReady.then(() => {
                    i().render(
                        a().createElement(M, null, a().createElement(Be, null)),
                        document.getElementById('root'),
                    );
                });
            },
            245: (u, e, t) => {
                'use strict';
                t.d(e, { E: () => s });
                var n = t(179),
                    a = t.n(n),
                    r = t(727),
                    i = t(483),
                    o = t.n(i);
                const s = ({
                    mixClass: u,
                    isActive: e,
                    onClick: t,
                    soundHover: i = 'highlight',
                    soundClick: s = 'play',
                }) => {
                    const E = (0, n.useCallback)(() => (0, r.G)(i), [i]),
                        l = (0, n.useCallback)(() => {
                            (0, r.G)(s), t();
                        }, [s, t]),
                        A = o()('AnimationControls_base_c8', u, !e && 'AnimationControls_base__disabled_86');
                    return a().createElement(
                        'div',
                        { className: A },
                        a().createElement('div', { className: 'AnimationControls_glow_f3' }),
                        a().createElement('div', {
                            className: 'AnimationControls_icon_03',
                            onClick: l,
                            onMouseEnter: E,
                        }),
                        a().createElement(
                            'div',
                            { className: 'AnimationControls_text_95', onClick: l, onMouseEnter: E },
                            e
                                ? R.strings.event_lootboxes.shared.animationControlsOffText()
                                : R.strings.event_lootboxes.shared.animationControlsText(),
                        ),
                    );
                };
            },
            865: (u, e, t) => {
                'use strict';
                t.d(e, { d: () => B });
                var n = t(179),
                    a = t.n(n),
                    r = t(491),
                    i = t(483),
                    o = t.n(i),
                    s = t(727);
                const E = {
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
                    l = [
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
                function A() {
                    return (
                        (A =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (u[n] = t[n]);
                                }
                                return u;
                            }),
                        A.apply(this, arguments)
                    );
                }
                class c extends a().PureComponent {
                    constructor(...u) {
                        super(...u),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (u) => (e) => {
                                u && u(e),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && (0, s.G)(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (u) => (e) => {
                                u && u(e), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (u) => (e) => {
                                u && u(e),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && (0, s.G)(this.props.soundClick);
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
                            s = u.classNames,
                            c = u.onMouseEnter,
                            F = u.onMouseLeave,
                            d = u.onMouseDown,
                            D = u.onMouseUp,
                            _ =
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
                                })(u, l)),
                            B = o()(E.base, E[`base__${i}`], E[`base__${r}`], null == s ? void 0 : s.base),
                            C = o()(E.icon, E[`icon__${i}`], E[`icon__${r}`], null == s ? void 0 : s.icon),
                            m = o()(E.glow, null == s ? void 0 : s.glow),
                            g = o()(E.caption, E[`caption__${i}`], null == s ? void 0 : s.caption),
                            h = o()(E.goto, null == s ? void 0 : s.goto);
                        return a().createElement(
                            'div',
                            A(
                                {
                                    className: B,
                                    onMouseEnter: this._onMouseEnter(c),
                                    onMouseLeave: this._onMouseLeave(F),
                                    onMouseDown: this._onMouseDown(d),
                                    onMouseUp: this._onMouseUp(D),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                _,
                            ),
                            'info' !== i && a().createElement('div', { className: E.shine }),
                            a().createElement('div', { className: C }, a().createElement('div', { className: m })),
                            a().createElement('div', { className: g }, e),
                            n && a().createElement('div', { className: h }, n),
                        );
                    }
                }
                c.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var F = t(138),
                    d = t(521);
                const D = (u) => {
                    console.error(u.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function _(u = d.n.NONE, e = D, t = !1, a = !1) {
                    (0, n.useEffect)(() => {
                        if (u !== d.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === u) {
                                if (!a && F.O.view.isEventHandled()) return;
                                F.O.view.setEventHandled(), e(n), t && n.stopPropagation();
                            }
                        }
                    }, [e, u, t, a]);
                }
                const B = ({ mixClass: u, soundClick: e = 'play', onCloseCallback: t }) => {
                    const i = (0, n.useCallback)(() => {
                        t && t(), (0, r.Sy)();
                    }, [t]);
                    var s;
                    (s = i), _(d.n.ESCAPE, s);
                    const E = o()('CloseBtn_base_0e', u);
                    return a().createElement(
                        'div',
                        { className: E },
                        a().createElement(c, {
                            caption: R.strings.menu.viewHeader.closeBtn.label(),
                            type: 'close',
                            side: 'right',
                            soundClick: e,
                            onClick: i,
                        }),
                    );
                };
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
        (__webpack_require__.j = 24),
        (() => {
            var u = { 24: 0, 39: 0, 656: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var n,
                        a,
                        [r, i, o] = t,
                        s = 0;
                    if (r.some((e) => 0 !== u[e])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (o) var E = o(__webpack_require__);
                    }
                    for (e && e(t); s < r.length; s++)
                        (a = r[s]), __webpack_require__.o(u, a) && u[a] && u[a][0](), (u[a] = 0);
                    return __webpack_require__.O(E);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(661));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
