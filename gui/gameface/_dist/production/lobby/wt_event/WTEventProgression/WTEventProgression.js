(() => {
    var __webpack_modules__ = {
            926: (e) => {
                e.exports = {
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
            527: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, { mouse: () => c, off: () => i, on: () => o, onResize: () => a, onScaleUpdated: () => s });
                var n = t(2472),
                    r = t(1176);
                const a = (0, n.E)('clientResized'),
                    s = (0, n.E)('self.onScaleUpdated'),
                    o = (e, u) => engine.on(e, u),
                    i = (e, u) => engine.off(e, u),
                    l = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && (0, r.R)(!1);
                    }
                    function t() {
                        e.enabled && (0, r.R)(!0);
                    }
                    function n() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', u),
                                  document.body.removeEventListener('mouseleave', t))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', u),
                                  document.body.addEventListener('mouseleave', t))
                            : (0, r.R)(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const a = `mouse${u}`,
                                        s = l[u]((e) => t([e, 'outside']));
                                    function o(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, o),
                                        n(),
                                        () => {
                                            r &&
                                                (s(),
                                                window.removeEventListener(a, o),
                                                (e.listeners -= 1),
                                                n(),
                                                (r = !1));
                                        }
                                    );
                                };
                            })(t)),
                            u
                        ),
                        {},
                    );
                    return Object.assign({}, a, {
                        disable() {
                            (e.enabled = !1), n();
                        },
                        enable() {
                            (e.enabled = !0), n();
                        },
                        enableOutside() {
                            e.enabled && (0, r.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, r.R)(!1);
                        },
                    });
                })();
            },
            5959: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        events: () => n,
                        getMouseGlobalPosition: () => s,
                        getSize: () => a,
                        graphicsQuality: () => o,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    });
                var n = t(527),
                    r = t(2493);
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function s(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, u, t) => {
                'use strict';
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.d(u, { R: () => n });
            },
            2493: (e, u, t) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error(`playSound('${e}'): `, u);
                    });
                }
                function r(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                t.d(u, { E: () => r, G: () => n });
            },
            2472: (e, u, t) => {
                'use strict';
                function n(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                t.d(u, { E: () => n });
            },
            3138: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => a });
                var n = t(5959),
                    r = t(514);
                const a = { view: t(7641), client: n, sound: r.ZP };
            },
            514: (e, u, t) => {
                'use strict';
                t.d(u, { ZP: () => s });
                var n = t(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    a = Object.keys(r).reduce((e, u) => ((e[u] = () => (0, n.playSound)(r[u])), e), {}),
                    s = { play: Object.assign({}, a, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (e, u, t) => {
                'use strict';
                function n(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function r(e, u, t) {
                    return `url(${n(e, u, t)})`;
                }
                t.r(u), t.d(u, { getBgUrl: () => r, getTextureUrl: () => n });
            },
            6112: (e, u, t) => {
                'use strict';
                t.d(u, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, u, t) => {
                'use strict';
                t.d(u, { U: () => r });
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
            7641: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => o,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => v,
                        events: () => a.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => f,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => b,
                        getScale: () => g,
                        getSize: () => d,
                        getViewGlobalPosition: () => _,
                        isEventHandled: () => h,
                        isFocused: () => C,
                        pxToRem: () => F,
                        remToPx: () => D,
                        resize: () => m,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => B,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => i,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => y,
                    });
                var n = t(3722),
                    r = t(6112),
                    a = t(6538),
                    s = t(8566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function i(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function c(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function E(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function _(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: D(u.x), y: D(u.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function g() {
                    return viewEnv.getScale();
                }
                function F(e) {
                    return viewEnv.pxToRem(e);
                }
                function D(e) {
                    return viewEnv.remToPx(e);
                }
                function B(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function C() {
                    return viewEnv.isFocused();
                }
                function p() {
                    return viewEnv.setEventHandled();
                }
                function h() {
                    return viewEnv.isEventHandled();
                }
                function f() {
                    viewEnv.forceTriggerMouseMove();
                }
                function b() {
                    return viewEnv.getShowingStatus();
                }
                const v = Object.keys(r.W).reduce(
                        (e, u) => ((e[u] = () => viewEnv.getShowingStatus() === r.W[u]), e),
                        {},
                    ),
                    w = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    y = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : a.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, u, t) => {
                'use strict';
                t.d(u, { qP: () => l });
                const n = ['args'];
                const r = 2,
                    a = 16,
                    s = 32,
                    o = 64,
                    i = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                s = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(u, n);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, s, {
                                          arguments:
                                              ((r = a),
                                              Object.entries(r).map(([e, u]) => {
                                                  const t = 'GFValueProxy';
                                                  switch (typeof u) {
                                                      case 'number':
                                                          return { __Type: t, name: e, number: u };
                                                      case 'boolean':
                                                          return { __Type: t, name: e, bool: u };
                                                      default:
                                                          return { __Type: t, name: e, string: u.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    l = {
                        close(e) {
                            i('popover' === e ? r : s);
                        },
                        minimize() {
                            i(o);
                        },
                        move(e) {
                            i(a, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, u, t) => {
                'use strict';
                let n, r;
                t.d(u, { n: () => n }),
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
                            (e[(e.KEY_9 = 57)] = 'KEY_9');
                    })(n || (n = {})),
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
            1358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                var n = t(3138);
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
                    addCallback(e, u, t = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = n.O.view.addModelObserver(e, t, r);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(a) : (this._views[t] = [a])))
                                : console.error("Can't add callback for model:", e),
                            a
                        );
                    }
                    removeCallback(e, u = 0) {
                        let t = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((t = viewEnv.removeDataChangedCallback(e, u)), delete this._callbacks[e]),
                            t || console.error("Can't remove callback by id:", e),
                            t
                        );
                    }
                    _emmitDataChanged(e, u, t) {
                        t.forEach((t) => {
                            const n = this._callbacks[t];
                            void 0 !== n && n(e, u);
                        });
                    }
                }
                r.__instance = void 0;
                const a = r;
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
            7491: (e, u, t) => {
                'use strict';
                t.d(u, { Sw: () => a.Z, B3: () => o.B3, Z5: () => s.Z5, B0: () => o.B0, ry: () => i.ry });
                class n {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: t }) => {
                                    let n = e.target;
                                    do {
                                        if (n === u) return;
                                        n = n.parentNode;
                                    } while (n);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return n.__instance || (n.__instance = new n()), n.__instance;
                    }
                    register(e, u) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: u });
                    }
                    unregister(e, u) {
                        const t = e,
                            n = u;
                        (this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== n)),
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
                var a = t(1358);
                var s = t(8613),
                    o = t(4251),
                    i = t(8072),
                    l = t(7572);
                const c = r.instance,
                    E = {
                        DataTracker: a.Z,
                        ViewModel: l.Z,
                        ViewEventType: o.B0,
                        NumberFormatType: o.B3,
                        RealFormatType: o.Gr,
                        TimeFormatType: o.lf,
                        DateFormatType: o.kH,
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
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const n in u)
                                if (Object.prototype.hasOwnProperty.call(u, n)) {
                                    const r = Object.prototype.toString.call(u[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = u[n];
                                        t[n] = [];
                                        for (let u = 0; u < r.length; u++) t[n].push({ value: e(r[u].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = e(u[n]))
                                            : (t[n] = u[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: c,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = E;
            },
            8613: (e, u, t) => {
                'use strict';
                t.d(u, { Ew: () => a, Z5: () => n, cy: () => r });
                const n = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    r = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    },
                    a = {
                        getRegionalDateTime: (e, u, t = !0) => regionalDateTime.getRegionalDateTime(e, u, t),
                        getFormattedDateTime: (e, u, t = !0) => regionalDateTime.getFormattedDateTime(e, u, t),
                    };
            },
            4251: (e, u, t) => {
                'use strict';
                let n;
                t.d(u, { B0: () => n, B3: () => r, Gr: () => a, kH: () => o, lf: () => s }),
                    (function (e) {
                        (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                            (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                            (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                            (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                            (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                            (e[(e.MOVE = 16)] = 'MOVE'),
                            (e[(e.CLOSE = 32)] = 'CLOSE'),
                            (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                    })(n || (n = {}));
                const r = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    a = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    s = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    o = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
            },
            8072: (e, u, t) => {
                'use strict';
                t.d(u, {
                    Eu: () => c,
                    KE: () => F,
                    Kv: () => i,
                    P3: () => g,
                    SU: () => p,
                    SW: () => _,
                    Sy: () => m,
                    VM: () => h,
                    c9: () => E,
                    ry: () => l,
                    uM: () => D,
                    uk: () => A,
                    wU: () => B,
                    wv: () => d,
                });
                var n = t(5521),
                    r = t(3138),
                    a = t(4251);
                const s = ['args'];
                function o(e, u, t, n, r, a, s) {
                    try {
                        var o = e[a](s),
                            i = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(i) : Promise.resolve(i).then(n, r);
                }
                const i = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    l = (function () {
                        var e,
                            u =
                                ((e = function* () {
                                    return (
                                        !(!engine._BindingsReady || !engine._WindowLoaded) ||
                                        new Promise((e) => {
                                            engine.on('Ready', e);
                                        })
                                    );
                                }),
                                function () {
                                    var u = this,
                                        t = arguments;
                                    return new Promise(function (n, r) {
                                        var a = e.apply(u, t);
                                        function s(e) {
                                            o(a, n, r, s, i, 'next', e);
                                        }
                                        function i(e) {
                                            o(a, n, r, s, i, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    c = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    E = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(u, s);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([e, u]) => {
                                                  const t = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof u) {
                                                      case 'number':
                                                          t.number = u;
                                                          break;
                                                      case 'boolean':
                                                          t.bool = u;
                                                          break;
                                                      default:
                                                          t.string = u.toString();
                                                  }
                                                  return t;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    d = (e) => E(a.B0.MOVE, { isMouseEvent: !0, on: e }),
                    m = () => E(a.B0.CLOSE),
                    _ = () => E(a.B0.POP_OVER, { on: !1 }),
                    A = (e, u, t = 0) => {
                        E(a.B0.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                    },
                    g = (e, u, t, n, s = R.invalid('resId'), o) => {
                        const l = r.O.view.getViewGlobalPosition(),
                            c = t.getBoundingClientRect(),
                            d = c.x,
                            m = c.y,
                            _ = c.width,
                            A = c.height,
                            g = {
                                x: r.O.view.pxToRem(d) + l.x,
                                y: r.O.view.pxToRem(m) + l.y,
                                width: r.O.view.pxToRem(_),
                                height: r.O.view.pxToRem(A),
                            };
                        E(a.B0.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: n || R.invalid('resId'),
                            targetID: s,
                            direction: u,
                            bbox: i(g),
                            on: !0,
                            args: o,
                        });
                    },
                    F = () => viewEnv.isWindowShownByViewEvent(a.B0.TOOLTIP),
                    D = () => viewEnv.isWindowShownByViewEvent(a.B0.CONTEXT_MENU),
                    B = () => viewEnv.isWindowShownByViewEvent(a.B0.POP_OVER),
                    C = (e, u) => {
                        e.keyCode === n.n.ESCAPE && u();
                    },
                    p = (e) => {
                        C(e, m);
                    },
                    h = (e) => {
                        const u = (u) => C(u, e);
                        return window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u);
                    };
            },
            5898: (e, u, t) => {
                'use strict';
                var n = {};
                t.r(n),
                    t.d(n, {
                        Area: () => cn,
                        Bar: () => sn,
                        DefaultScroll: () => ln,
                        Direction: () => Qt,
                        defaultSettings: () => zt,
                        useHorizontalScrollApi: () => jt,
                    });
                var r = {};
                t.r(r), t.d(r, { Area: () => Sn, Bar: () => vn, Default: () => yn, useVerticalScrollApi: () => En });
                var a = t(6179),
                    s = t.n(a);
                const o = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
                var i = t(3138);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function E(e, u, t) {
                    const n = (function (e, u) {
                            switch (!0) {
                                case e >= u.extraLarge.width:
                                    return u.extraLarge.weight;
                                case e >= u.large.width && e < u.extraLarge.width:
                                    return u.large.weight;
                                case e >= u.medium.width && e < u.large.width:
                                    return u.medium.weight;
                                case e >= u.small.width && e < u.medium.width:
                                    return u.small.weight;
                                default:
                                    return u.extraSmall.weight;
                            }
                        })(e, t),
                        r = (function (e, u) {
                            switch (!0) {
                                case e >= u.extraLarge.height:
                                    return u.extraLarge.weight;
                                case e >= u.large.height && e < u.extraLarge.height:
                                    return u.large.weight;
                                case e >= u.medium.height && e < u.large.height:
                                    return u.medium.weight;
                                case e >= u.small.height && e < u.medium.height:
                                    return u.small.weight;
                                default:
                                    return u.extraSmall.weight;
                            }
                        })(u, t),
                        a = Math.min(n, r);
                    return {
                        extraLarge: a === t.extraLarge.weight,
                        large: a === t.large.weight,
                        medium: a === t.medium.weight,
                        small: a === t.small.weight,
                        extraSmall: a === t.extraSmall.weight,
                        extraLargeWidth: n === t.extraLarge.weight,
                        largeWidth: n === t.large.weight,
                        mediumWidth: n === t.medium.weight,
                        smallWidth: n === t.small.weight,
                        extraSmallWidth: n === t.extraSmall.weight,
                        extraLargeHeight: r === t.extraLarge.weight,
                        largeHeight: r === t.large.weight,
                        mediumHeight: r === t.medium.weight,
                        smallHeight: r === t.small.weight,
                        extraSmallHeight: r === t.extraSmall.weight,
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
                })(c || (c = {}));
                const d = i.O.client.getSize('rem'),
                    m = d.width,
                    _ = d.height,
                    A = Object.assign({ width: m, height: _ }, E(m, _, l)),
                    g = (0, a.createContext)(A),
                    F = ['children'];
                const D = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, F);
                    const n = (0, a.useContext)(g),
                        r = n.extraLarge,
                        s = n.large,
                        i = n.medium,
                        l = n.small,
                        c = n.extraSmall,
                        E = n.extraLargeWidth,
                        d = n.largeWidth,
                        m = n.mediumWidth,
                        _ = n.smallWidth,
                        A = n.extraSmallWidth,
                        D = n.extraLargeHeight,
                        B = n.largeHeight,
                        C = n.mediumHeight,
                        p = n.smallHeight,
                        h = n.extraSmallHeight,
                        f = { extraLarge: D, large: B, medium: C, small: p, extraSmall: h };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && r) return u;
                        if (t.large && s) return u;
                        if (t.medium && i) return u;
                        if (t.small && l) return u;
                        if (t.extraSmall && c) return u;
                    } else {
                        if (t.extraLargeWidth && E) return o(u, t, f);
                        if (t.largeWidth && d) return o(u, t, f);
                        if (t.mediumWidth && m) return o(u, t, f);
                        if (t.smallWidth && _) return o(u, t, f);
                        if (t.extraSmallWidth && A) return o(u, t, f);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && D) return u;
                            if (t.largeHeight && B) return u;
                            if (t.mediumHeight && C) return u;
                            if (t.smallHeight && p) return u;
                            if (t.extraSmallHeight && h) return u;
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
                (0, a.memo)(D);
                const B = (e) => {
                        const u = (0, a.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    C = ({ children: e }) => {
                        const u = (0, a.useContext)(g),
                            t = (0, a.useState)(u),
                            n = t[0],
                            r = t[1],
                            o = (0, a.useCallback)((e, u) => {
                                const t = i.O.view.pxToRem(e),
                                    n = i.O.view.pxToRem(u);
                                r(Object.assign({ width: t, height: n }, E(t, n, l)));
                            }, []),
                            c = (0, a.useCallback)(() => {
                                const e = i.O.client.getSize('px');
                                o(e.width, e.height);
                            }, [o]);
                        B(() => {
                            i.O.client.events.on('clientResized', o), i.O.client.events.on('self.onScaleUpdated', c);
                        }),
                            (0, a.useEffect)(
                                () => () => {
                                    i.O.client.events.off('clientResized', o),
                                        i.O.client.events.off('self.onScaleUpdated', c);
                                },
                                [o, c],
                            );
                        const d = (0, a.useMemo)(() => Object.assign({}, n), [n]);
                        return s().createElement(g.Provider, { value: d }, e);
                    };
                var p = t(6483),
                    h = t.n(p),
                    f = t(926),
                    b = t.n(f);
                let v, w, y;
                !(function (e) {
                    (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                })(v || (v = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.width)] = 'Small'),
                            (e[(e.Medium = l.medium.width)] = 'Medium'),
                            (e[(e.Large = l.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                    })(w || (w = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.height)] = 'Small'),
                            (e[(e.Medium = l.medium.height)] = 'Medium'),
                            (e[(e.Large = l.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge');
                    })(y || (y = {}));
                const S = () => {
                        const e = (0, a.useContext)(g),
                            u = e.width,
                            t = e.height,
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return v.ExtraLarge;
                                    case e.large:
                                        return v.Large;
                                    case e.medium:
                                        return v.Medium;
                                    case e.small:
                                        return v.Small;
                                    case e.extraSmall:
                                        return v.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), v.ExtraSmall;
                                }
                            })(e),
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return w.ExtraLarge;
                                    case e.largeWidth:
                                        return w.Large;
                                    case e.mediumWidth:
                                        return w.Medium;
                                    case e.smallWidth:
                                        return w.Small;
                                    case e.extraSmallWidth:
                                        return w.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), w.ExtraSmall;
                                }
                            })(e),
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return y.ExtraLarge;
                                    case e.largeHeight:
                                        return y.Large;
                                    case e.mediumHeight:
                                        return y.Medium;
                                    case e.smallHeight:
                                        return y.Small;
                                    case e.extraSmallHeight:
                                        return y.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), y.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: n, mediaWidth: r, mediaHeight: s, remScreenWidth: u, remScreenHeight: t };
                    },
                    P = ['children', 'className'];
                function T() {
                    return (
                        (T =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        T.apply(this, arguments)
                    );
                }
                const x = {
                        [w.ExtraSmall]: '',
                        [w.Small]: b().SMALL_WIDTH,
                        [w.Medium]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH}`,
                        [w.Large]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH} ${b().LARGE_WIDTH}`,
                        [w.ExtraLarge]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH} ${b().LARGE_WIDTH} ${b().EXTRA_LARGE_WIDTH}`,
                    },
                    N = {
                        [y.ExtraSmall]: '',
                        [y.Small]: b().SMALL_HEIGHT,
                        [y.Medium]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT}`,
                        [y.Large]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT} ${b().LARGE_HEIGHT}`,
                        [y.ExtraLarge]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT} ${b().LARGE_HEIGHT} ${b().EXTRA_LARGE_HEIGHT}`,
                    },
                    M = {
                        [v.ExtraSmall]: '',
                        [v.Small]: b().SMALL,
                        [v.Medium]: `${b().SMALL} ${b().MEDIUM}`,
                        [v.Large]: `${b().SMALL} ${b().MEDIUM} ${b().LARGE}`,
                        [v.ExtraLarge]: `${b().SMALL} ${b().MEDIUM} ${b().LARGE} ${b().EXTRA_LARGE}`,
                    },
                    O = (e) => {
                        let u = e.children,
                            t = e.className,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, P);
                        const r = S(),
                            a = r.mediaWidth,
                            o = r.mediaHeight,
                            i = r.mediaSize;
                        return s().createElement('div', T({ className: h()(t, x[a], N[o], M[i]) }, n), u);
                    },
                    k = ['children'];
                const L = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, k);
                    return s().createElement(C, null, s().createElement(O, t, u));
                };
                var I = t(493),
                    H = t.n(I);
                function W(e) {
                    return e;
                }
                function U() {
                    return !1;
                }
                console.log;
                var G = t(9174);
                function $(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return Q(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Q(e, u);
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Q(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const z = (e) => (0 === e ? window : window.subViews.get(e));
                function V(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                function j(e) {
                    var u;
                    return e && 'value' in e && null != (u = e.constructor) && u.name.includes('ArrayItem')
                        ? null == e
                            ? void 0
                            : e.value
                        : e;
                }
                function q(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, n) => u(null == e ? void 0 : e.value, t, n));
                }
                var Y = t(1281);
                let X;
                function K(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(X || (X = {}));
                const Z = (e) => e.replace(/&nbsp;/g, ' '),
                    J = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    ee = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    ue = (e, u, t = X.left) => e.split(u).reduce(t === X.left ? J : ee, []),
                    te = (() => {
                        const e = new RegExp(
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
                        return (u) =>
                            u
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    ne = ['zh_cn', 'zh_sg', 'zh_tw'],
                    re = (e, u = X.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (ne.includes(t)) return te(e);
                        if ('ja' === t) {
                            return (0, Y.D4)()
                                .parse(e)
                                .map((e) => Z(e));
                        }
                        return ((e, u = X.left) => {
                            let t = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                r = Z(e);
                            return ue(r, /( )/, u).forEach((e) => (t = t.concat(ue(e, n, X.left)))), t;
                        })(e, u);
                    },
                    ae = (e, u, t) => e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : re(e, u)));
                var se = t(3946);
                const oe = { 0: 'firstCondition', 1: 'secondCondition' },
                    ie = (e, u) => {
                        const t = [];
                        if ('or' === e.conditionType || 'and' === e.conditionType)
                            e.items.forEach((e) => {
                                const n = j(e);
                                n && t.push(...ie(n, u));
                            });
                        else {
                            const n = e.descrData;
                            let r = e,
                                a = r.titleData,
                                s = r.iconKey,
                                o = r.current,
                                i = r.total,
                                l = r.earned;
                            const c = V(u, 0);
                            c &&
                                ((a = n || c.descrData),
                                (s = s || c.iconKey),
                                (o = c.current),
                                (i = c.total),
                                (l = c.earned)),
                                0 === i && (a = n),
                                t.push({ condition: a, lastValue: o - l, currentValue: o, maxValue: i, icon: s });
                        }
                        return t;
                    },
                    le = (e, u, t) => {
                        const n = {};
                        let r = {},
                            a = '';
                        return (
                            ie(e, u).forEach(
                                ({ condition: e, lastValue: u, currentValue: t, maxValue: s, icon: o }, i) => {
                                    (n[oe[i]] = ((e, u) =>
                                        ae(e, X.left)
                                            .flat()
                                            .map((e, t) => (0 === t && u > 0 && (e = e.toLowerCase()), e)))(e, i)),
                                        (a = o),
                                        (r = { lastValue: u, currentValue: t, maxValue: s });
                                },
                            ),
                            {
                                taskConditions: [{ conditions: n, progression: Object.assign({ status: t }, r) }],
                                taskBattleIcon: a,
                            }
                        );
                    },
                    ce = ((e, u) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: n = 'real', options: r, children: o, mocks: l }) {
                                const c = (0, a.useRef)([]),
                                    E = (t, n, r) => {
                                        var a;
                                        const s = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = z,
                                                context: n = 'model',
                                            } = {}) {
                                                const r = new Map();
                                                function a(e, u = 0) {
                                                    viewEnv.removeDataChangedCallback(e, u)
                                                        ? r.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, u, t) => {
                                                        t.forEach((u) => {
                                                            const t = r.get(u);
                                                            void 0 !== t && t(e);
                                                        });
                                                    });
                                                });
                                                const s = (e) => {
                                                    const r = t(u),
                                                        a = n.split('.').reduce((e, u) => e[u], r);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? a
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, a);
                                                };
                                                return {
                                                    subscribe: (t, a) => {
                                                        const o = 'string' == typeof a ? `${n}.${a}` : n,
                                                            l = i.O.view.addModelObserver(o, u, !0);
                                                        return r.set(l, t), e && t(s(a)), l;
                                                    },
                                                    readByPath: s,
                                                    createCallback: (e, u) => {
                                                        const t = s(u);
                                                        return (...u) => {
                                                            t(e(...u));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const u = s(e);
                                                        return () => {
                                                            u();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, t = $(r.keys()); !(e = t()).done; ) a(e.value, u);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(n),
                                            o =
                                                'real' === t
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (a = null == r ? void 0 : r.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === t ? (null == r ? void 0 : r.getter(e)) : o.readByPath(e),
                                            E = (e) => c.current.push(e),
                                            d = e({
                                                mode: t,
                                                readByPath: l,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (e, u) => {
                                                        const n = null != u ? u : l(e),
                                                            r = G.LO.box(n, { equals: U });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, G.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const n = null != u ? u : l(e),
                                                            r = G.LO.box(n, { equals: U });
                                                        return (
                                                            'real' === t &&
                                                                o.subscribe(
                                                                    (0, G.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const n = l(u);
                                                        if (Array.isArray(e)) {
                                                            const r = e.reduce(
                                                                (e, u) => ((e[u] = G.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    o.subscribe(
                                                                        (0, G.aD)((u) => {
                                                                            e.forEach((e) => {
                                                                                r[e].set(u[e]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                r
                                                            );
                                                        }
                                                        {
                                                            const r = e,
                                                                a = Object.entries(r),
                                                                s = a.reduce(
                                                                    (e, [u, t]) => ((e[t] = G.LO.box(n[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    o.subscribe(
                                                                        (0, G.aD)((e) => {
                                                                            a.forEach(([u, t]) => {
                                                                                s[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                s
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: E,
                                            }),
                                            m = { mode: t, model: d, externalModel: o, cleanup: E };
                                        return {
                                            model: d,
                                            controls: 'mocks' === t && r ? r.controls(m) : u(m),
                                            externalModel: o,
                                            mode: t,
                                        };
                                    },
                                    d = (0, a.useRef)(!1),
                                    m = (0, a.useState)(n),
                                    _ = m[0],
                                    A = m[1],
                                    g = (0, a.useState)(() => E(n, r, l)),
                                    F = g[0],
                                    D = g[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        d.current ? D(E(_, r, l)) : (d.current = !0);
                                    }, [l, _, r]),
                                    (0, a.useEffect)(() => {
                                        A(n);
                                    }, [n]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            F.externalModel.dispose(), c.current.forEach((e) => e());
                                        },
                                        [F],
                                    ),
                                    s().createElement(t.Provider, { value: F }, o)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const u = {
                                    root: e.object(),
                                    dailyQuests: e.object('dailyQuests'),
                                    harrierQuests: e.array('dailyQuests.harrierQuests', []),
                                    harrierQuestsVisited: e.array('dailyQuests.harrierQuestsVisited', []),
                                    engineerQuests: e.array('dailyQuests.engineerQuests', []),
                                    engineerQuestsVisited: e.array('dailyQuests.engineerQuestsVisited', []),
                                    stages: e.array('stages', []),
                                },
                                t = (0, se.Om)(() =>
                                    q(u.engineerQuests.get(), (e) =>
                                        Object.assign(
                                            {},
                                            e,
                                            le(e.postBattleCondition, e.bonusCondition.items, e.status),
                                            {
                                                bonuses: q(e.bonuses, W),
                                                preBattleCondition: Object.assign({}, e.preBattleCondition, {
                                                    items: q(e.preBattleCondition.items, W),
                                                }),
                                                postBattleCondition: Object.assign({}, e.preBattleCondition, {
                                                    items: q(e.preBattleCondition.items, W),
                                                }),
                                                bonusCondition: Object.assign({}, e.bonusCondition, {
                                                    items: q(e.bonusCondition.items, W),
                                                }),
                                            },
                                        ),
                                    ),
                                ),
                                n = (0, se.Om)(() =>
                                    q(u.harrierQuests.get(), (e) =>
                                        Object.assign(
                                            {},
                                            e,
                                            le(e.postBattleCondition, e.bonusCondition.items, e.status),
                                            {
                                                bonuses: q(e.bonuses, W),
                                                preBattleCondition: Object.assign({}, e.preBattleCondition, {
                                                    items: q(e.preBattleCondition.items, W),
                                                }),
                                                postBattleCondition: Object.assign({}, e.preBattleCondition, {
                                                    items: q(e.preBattleCondition.items, W),
                                                }),
                                                bonusCondition: Object.assign({}, e.bonusCondition, {
                                                    items: q(e.bonusCondition.items, W),
                                                }),
                                            },
                                        ),
                                    ),
                                ),
                                r = (0, se.Om)(() => u.dailyQuests.get().activeTab),
                                a = (0, se.Om)(() =>
                                    q(u.stages.get(), (e, t) =>
                                        Object.assign({}, e, {
                                            stageMaxPoints: (t + 1) * u.root.get().stampsNeededPerStage,
                                            rewards: q(e.rewards, W),
                                        }),
                                    ),
                                ),
                                s = (0, se.Om)(() => q(u.engineerQuestsVisited.get(), (e) => Boolean(e))),
                                o = (0, se.Om)(() => q(u.harrierQuestsVisited.get(), (e) => Boolean(e)));
                            return Object.assign({}, u, {
                                computes: {
                                    getStages: a,
                                    getHarrierQuests: n,
                                    getEngineerQuests: t,
                                    getEngineerQuestsVisited: s,
                                    getHarrierQuestsVisited: o,
                                    getActiveTab: r,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            onClose: e.createCallbackNoArgs('onClose'),
                            onAboutClicked: e.createCallbackNoArgs('onAboutClicked'),
                            onSelectedTab: e.createCallback((e) => ({ tab: e }), 'dailyQuests.onSelectedTab'),
                            onCommanderPreview: e.createCallbackNoArgs('onCommanderPreview'),
                            onTakeReward: e.createCallback((e) => ({ step: e }), 'onTakeReward'),
                        }),
                    ),
                    Ee = ce[0],
                    de = ce[1];
                let me, _e;
                !(function (e) {
                    (e.Timer = 'timer'), (e.Countdown = 'countdown'), (e.Cooldown = 'cooldown'), (e.None = 'none');
                })(me || (me = {})),
                    (function (e) {
                        (e.Description = 'description'),
                            (e.Short = 'short'),
                            (e.Long = 'long'),
                            (e.Extended = 'extended');
                    })(_e || (_e = {}));
                var Ae = t(7491),
                    ge = t(8613);
                const Fe = 60,
                    De = 3600,
                    Be = 86400;
                Date.now(), ge.Ew.getRegionalDateTime, ge.Ew.getFormattedDateTime;
                const Ce = () => {},
                    pe = (e = 0, u, t = 0, n = Ce) => {
                        const r = (0, a.useState)(e),
                            s = r[0],
                            o = r[1];
                        return (
                            (0, a.useEffect)(() => {
                                if (e > 0) {
                                    o(e);
                                    const r = Date.now(),
                                        a = setInterval(
                                            () => {
                                                const u = e - Math.floor((Date.now() - r) / 1e3);
                                                null !== t && u <= t ? (o(t), n && n(), clearInterval(a)) : o(u);
                                            },
                                            1e3 * (u || (e > 120 ? Fe : 1)),
                                        );
                                    return () => {
                                        clearInterval(a);
                                    };
                                }
                            }, [e, u, t, n]),
                            s
                        );
                    };
                Ae.Sw.instance;
                let he;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(he || (he = {}));
                Ae.Sw.instance;
                const fe = pe,
                    be = 'Countdown_base_fe',
                    ve = 'Countdown_icon_8b',
                    we = 'Countdown_description_8d',
                    ye = (e) => e.toString().padStart(2, '0'),
                    Se = (e, u) => {
                        switch (u) {
                            case _e.Description:
                                return ((e, u = !0) =>
                                    e.days > 7 && u
                                        ? K(R.strings.common.duration.days(), { days: e.days })
                                        : e.days >= 1
                                          ? 0 === e.hours
                                              ? K(R.strings.common.duration.days(), { days: e.days })
                                              : `${K(R.strings.common.duration.days(), { days: e.days })} ${K(R.strings.common.duration.hours(), { hours: e.hours })}`
                                          : e.hours >= 1
                                            ? 0 === e.minutes
                                                ? K(R.strings.common.duration.hours(), { hours: e.hours })
                                                : `${K(R.strings.common.duration.hours(), { hours: e.hours })} ${K(R.strings.common.duration.minutes(), { minutes: e.minutes })}`
                                            : K(R.strings.common.duration.minutes(), { minutes: e.minutes || 1 }))(e);
                            case _e.Short:
                                return `${ye(e.minutes)}:${ye(e.seconds)}`;
                            case _e.Long:
                                return `${ye(e.hours)}:${ye(e.minutes)}:${ye(e.seconds)}`;
                            case _e.Extended:
                                return `${K(R.strings.common.duration.days(), { days: e.days })} | ${ye(e.hours)}:${ye(e.minutes)}:${ye(e.seconds)}`;
                        }
                    },
                    Re = R.images.gui.maps.icons.components.countdown,
                    Pe = (e, u) => {
                        const t = 2 === u ? Re.big : Re;
                        switch (e) {
                            case me.Timer:
                                return t.clock();
                            case me.Countdown:
                                return t.hourglass();
                            case me.Cooldown:
                                return t.lock();
                        }
                    },
                    Te = (0, a.memo)(
                        ({
                            duration: e,
                            icon: u = me.Timer,
                            style: t = _e.Description,
                            onTimeReached: n,
                            className: r = '',
                            classNames: o = {},
                        }) => {
                            const l = t !== _e.Description ? 1 : void 0,
                                c = fe(e, l),
                                E = (() => {
                                    const e = (0, a.useState)(i.O.view.getScale()),
                                        u = e[0],
                                        t = e[1];
                                    return (
                                        (0, a.useEffect)(() => {
                                            const e = () => {
                                                t(i.O.view.getScale());
                                            };
                                            return (
                                                window.addEventListener('resize', e),
                                                () => {
                                                    window.removeEventListener('resize', e);
                                                }
                                            );
                                        }, []),
                                        u
                                    );
                                })();
                            n && n[c] && n[c]();
                            const d = Se(
                                (function (e = 0) {
                                    let u = e;
                                    const t = Math.trunc(u / Be);
                                    u -= t * Be;
                                    const n = Math.trunc(u / De);
                                    u -= n * De;
                                    const r = Math.trunc(u / Fe);
                                    return (u -= r * Fe), { days: t, hours: n, minutes: r, seconds: u };
                                })(c),
                                t,
                            );
                            return s().createElement(
                                'div',
                                { className: h()(be, r) },
                                u !== me.None &&
                                    s().createElement('div', {
                                        className: h()(ve, o.icon),
                                        style: { backgroundImage: `url('${Pe(u, E)}')` },
                                    }),
                                s().createElement('div', { className: h()(we, o.text) }, d),
                            );
                        },
                    ),
                    xe = 'FormatText_base_d0',
                    Ne = ({ binding: e, text: u = '', classMix: t, alignment: n = X.left, formatWithBrackets: r }) => {
                        if (null === u) return console.error("FormatText was supplied with 'null'"), null;
                        const o = r && e ? K(u, e) : u;
                        return s().createElement(
                            a.Fragment,
                            null,
                            o.split('\n').map((u, r) =>
                                s().createElement(
                                    'div',
                                    { className: h()(xe, t), key: `${u}-${r}` },
                                    ae(u, n, e).map((e, u) => s().createElement(a.Fragment, { key: `${u}-${e}` }, e)),
                                ),
                            ),
                        );
                    };
                function Me(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                const Oe = {
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
                    ke = [
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
                function Le() {
                    return (
                        (Le =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Le.apply(this, arguments)
                    );
                }
                class Ie extends s().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && Me(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && Me(this.props.soundClick);
                            }),
                            (this._onMouseUp = (e) => (u) => {
                                e && e(u), this.setState({ click: !1 });
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 }));
                    }
                    render() {
                        const e = this.props,
                            u = e.caption,
                            t = e.onClick,
                            n = e.goto,
                            r = e.side,
                            a = e.type,
                            o = e.classNames,
                            i = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            E = e.onMouseUp,
                            d =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(e, ke)),
                            m = h()(Oe.base, Oe[`base__${a}`], Oe[`base__${r}`], null == o ? void 0 : o.base),
                            _ = h()(Oe.icon, Oe[`icon__${a}`], Oe[`icon__${r}`], null == o ? void 0 : o.icon),
                            A = h()(Oe.glow, null == o ? void 0 : o.glow),
                            g = h()(Oe.caption, Oe[`caption__${a}`], null == o ? void 0 : o.caption),
                            F = h()(Oe.goto, null == o ? void 0 : o.goto);
                        return s().createElement(
                            'div',
                            Le(
                                {
                                    className: m,
                                    onMouseEnter: this._onMouseEnter(i),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(E),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                d,
                            ),
                            'info' !== a && s().createElement('div', { className: Oe.shine }),
                            s().createElement('div', { className: _ }, s().createElement('div', { className: A })),
                            s().createElement('div', { className: g }, u),
                            n && s().createElement('div', { className: F }, n),
                        );
                    }
                }
                let He, We;
                (Ie.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' }),
                    (function (e) {
                        (e.Done = 'done'), (e.Locked = 'notAvailable'), (e.Active = '');
                    })(He || (He = {})),
                    (function (e) {
                        (e.ENGINEER = 'ENGINEER'), (e.HARRIER = 'HARRIER');
                    })(We || (We = {}));
                var Ue = t(5521);
                const Ge = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function $e(e = Ue.n.NONE, u = Ge, t = !1, n = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== Ue.n.NONE)
                            return (
                                window.addEventListener('keydown', r, t),
                                () => {
                                    window.removeEventListener('keydown', r, t);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (!n && i.O.view.isEventHandled()) return;
                                i.O.view.setEventHandled(), u(r), t && r.stopPropagation();
                            }
                        }
                    }, [u, e, t, n]);
                }
                var Qe = t(3403);
                const ze = {
                    base: 'ProgressBar_base_45',
                    base__small: 'ProgressBar_base__small_df',
                    background: 'ProgressBar_background_51',
                    background__small: 'ProgressBar_background__small_46',
                    lineWrapper: 'ProgressBar_lineWrapper_6a',
                };
                let Ve, je;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium');
                })(Ve || (Ve = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(je || (je = {}));
                const qe = ({ size: e = Ve.Default }) => {
                        const u = h()(ze.background, ze[`background__${e}`]);
                        return s().createElement('div', { className: u });
                    },
                    Ye = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    Xe = ({ size: e }) => {
                        const u = h()(Ye.base, Ye[`base__${e}`]);
                        return s().createElement('div', { className: u });
                    },
                    Ke = {
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
                    Ze = (0, a.memo)(
                        ({ size: e, lineRef: u, disabled: t, baseStyles: n, isComplete: r, withoutBounce: a }) => {
                            const o = h()(
                                    Ke.base,
                                    Ke[`base__${e}`],
                                    t && Ke.base__disabled,
                                    r && Ke.base__finished,
                                    a && Ke.base__withoutBounce,
                                ),
                                i = !t && !r;
                            return s().createElement(
                                'div',
                                { className: o, style: n, ref: u },
                                s().createElement('div', { className: Ke.pattern }),
                                s().createElement('div', { className: Ke.gradient }),
                                i && s().createElement(Xe, { size: e }),
                            );
                        },
                    ),
                    Je = ({ size: e, value: u, lineRef: t, disabled: n, onComplete: r }) => {
                        const o = (0, a.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            i = 100 === u;
                        return (
                            (0, a.useEffect)(() => {
                                i && r && r();
                            }, [i, r]),
                            s().createElement(Ze, { size: e, disabled: n, baseStyles: o, isComplete: i, lineRef: t })
                        );
                    },
                    eu = (e, u) => {
                        let t;
                        const n = setTimeout(() => {
                            t = e();
                        }, u);
                        return () => {
                            'function' == typeof t && t(), clearTimeout(n);
                        };
                    };
                let uu, tu;
                !(function (e) {
                    (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                })(uu || (uu = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(tu || (tu = {}));
                const nu = 'ProgressBarDeltaSimple_base_6c',
                    ru = 'ProgressBarDeltaSimple_delta_99',
                    au = (0, a.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: n,
                            size: r,
                            to: o,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                        }) => {
                            const c = o < n,
                                E = (0, a.useState)(tu.Idle),
                                d = E[0],
                                m = E[1],
                                _ = d === tu.In,
                                A = d === tu.End,
                                g = d === tu.Idle,
                                F = (0, a.useCallback)(
                                    (e) => {
                                        m(e), l && l(e);
                                    },
                                    [l],
                                );
                            (0, a.useEffect)(() => {
                                if (g && !t) {
                                    return eu(() => {
                                        F(tu.In);
                                    }, u);
                                }
                            }, [F, t, g, u]),
                                (0, a.useEffect)(() => {
                                    if (_) {
                                        return eu(() => {
                                            i && i(), F(tu.End);
                                        }, e + u);
                                    }
                                }, [F, _, i, u, e]);
                            const D = (0, a.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                B = (0, a.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                C = (0, a.useMemo)(
                                    () => ({ width: `${Math.abs(n - o)}%`, left: `${c ? o : n}%` }),
                                    [n, c, o],
                                );
                            return A
                                ? null
                                : s().createElement(
                                      'div',
                                      { className: nu, style: C },
                                      s().createElement(
                                          'div',
                                          { style: g ? D : B, className: ru },
                                          s().createElement(Xe, { size: r }),
                                      ),
                                  );
                        },
                    ),
                    su = (0, a.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: n,
                            disabled: r,
                            isComplete: o,
                            animationSettings: i,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const E = (0, a.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${i.line.duration}ms`,
                                    transitionDelay: `${i.line.delay}ms`,
                                }),
                                [i.line.delay, i.line.duration, e],
                            );
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(Ze, {
                                    size: u,
                                    lineRef: n,
                                    disabled: r,
                                    isComplete: o,
                                    baseStyles: E,
                                }),
                                t >= 0 &&
                                    s().createElement(au, {
                                        transitionDuration: i.delta.duration,
                                        transitionDelay: i.delta.delay,
                                        freezed: i.freezed,
                                        from: t,
                                        size: u,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    ou = 'ProgressBarDeltaGrow_base_7e',
                    iu = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    lu = 'ProgressBarDeltaGrow_glow_68',
                    cu = (e) => (e ? { left: 0 } : { right: 0 }),
                    Eu = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    du = (e) => ({ transitionDuration: `${e}ms` }),
                    mu = (0, a.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: n,
                            size: r,
                            to: o,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const E = o < n,
                                d = (0, a.useState)(uu.Idle),
                                m = d[0],
                                _ = d[1],
                                A = m === uu.End,
                                g = m === uu.Idle,
                                F = m === uu.Grow,
                                D = m === uu.Shrink,
                                B = (0, a.useCallback)(
                                    (e) => {
                                        _(e), l && l(e);
                                    },
                                    [l],
                                ),
                                C = (0, a.useCallback)(
                                    (e, u) =>
                                        eu(() => {
                                            B(e);
                                        }, u),
                                    [B],
                                );
                            (0, a.useEffect)(() => {
                                if (!t)
                                    return g
                                        ? C(uu.Grow, u)
                                        : F
                                          ? C(uu.Shrink, e)
                                          : D
                                            ? C(uu.End, e)
                                            : void (A && i && i());
                            }, [C, t, A, F, g, D, i, u, e]);
                            const p = (0, a.useMemo)(() => Object.assign({ width: '100%' }, du(e), cu(E)), [E, e]),
                                f = (0, a.useMemo)(() => Object.assign({ width: '0%' }, du(e), cu(E)), [E, e]),
                                b = (0, a.useMemo)(() => Object.assign({ width: '0%' }, Eu(E, n), du(e)), [n, E, e]),
                                v = (0, a.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(o - n)}%` }, Eu(E, n), du(e)),
                                    [n, E, o, e],
                                );
                            if (A) return null;
                            const w = h()(ou, c, E && 0 === o && iu);
                            return s().createElement(
                                'div',
                                { style: g ? b : v, className: w },
                                s().createElement(
                                    'div',
                                    { style: D ? f : p, className: lu },
                                    s().createElement(Xe, { size: r }),
                                ),
                            );
                        },
                    ),
                    _u = (0, a.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: n,
                            disabled: r,
                            isComplete: o,
                            animationSettings: i,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const E = e < t,
                                d = (0, a.useState)(!1),
                                m = d[0],
                                _ = d[1],
                                A = (0, a.useCallback)(
                                    (e) => {
                                        e === uu.Shrink && _(!0), c && c(e);
                                    },
                                    [c],
                                ),
                                g = (0, a.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                F = (0, a.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${i.line.duration}ms` }),
                                    [i.line.duration, e],
                                );
                            return s().createElement(
                                s().Fragment,
                                null,
                                s().createElement(Ze, {
                                    size: u,
                                    lineRef: n,
                                    disabled: r,
                                    isComplete: o,
                                    withoutBounce: E && 0 === e,
                                    baseStyles: m ? F : g,
                                }),
                                t >= 0 &&
                                    s().createElement(mu, {
                                        transitionDuration: i.delta.duration,
                                        transitionDelay: i.delta.delay,
                                        onChangeAnimationState: A,
                                        freezed: i.freezed,
                                        onEndAnimation: l,
                                        from: t,
                                        size: u,
                                        to: e,
                                        className: i.delta.className,
                                    }),
                            );
                        },
                    ),
                    Au = ['onComplete', 'onEndAnimation'];
                function gu() {
                    return (
                        (gu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        gu.apply(this, arguments)
                    );
                }
                const Fu = (0, a.memo)((e) => {
                        let u = e.onComplete,
                            t = e.onEndAnimation,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, Au);
                        const r = (0, a.useState)(!1),
                            o = r[0],
                            i = r[1],
                            l = (0, a.useCallback)(() => {
                                const e = 100 === n.to;
                                e !== o && i(e), e && u && u(), t && t();
                            }, [o, u, t, n.to]);
                        switch (n.animationSettings.type) {
                            case je.Simple:
                                return s().createElement(su, gu({}, n, { onEndAnimation: l, isComplete: o }));
                            case je.Growing:
                                return s().createElement(_u, gu({}, n, { onEndAnimation: l, isComplete: o }));
                            default:
                                return null;
                        }
                    }),
                    Du = ['onEndAnimation'];
                function Bu() {
                    return (
                        (Bu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Bu.apply(this, arguments)
                    );
                }
                const Cu = (0, a.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, Du);
                    const n = (0, a.useRef)({}),
                        r = (0, a.useCallback)(() => {
                            (n.current.from = void 0), u && u();
                        }, [u]),
                        o = 'number' == typeof n.current.from ? n.current.from : t.from;
                    return (
                        (n.current.from = o),
                        s().createElement(Fu, Bu({}, t, { onEndAnimation: r, key: `${o}-${t.to}`, from: o }))
                    );
                });
                function pu() {
                    return (
                        (pu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        pu.apply(this, arguments)
                    );
                }
                const hu = (0, a.memo)(
                        ({
                            size: e,
                            value: u,
                            lineRef: t,
                            disabled: n,
                            deltaFrom: r,
                            animationSettings: a,
                            onEndAnimation: o,
                            onChangeAnimationState: i,
                            onComplete: l,
                        }) => {
                            if (r === u)
                                return s().createElement(Je, {
                                    key: `${r}-${u}`,
                                    size: e,
                                    value: u,
                                    lineRef: t,
                                    disabled: n,
                                    onComplete: l,
                                });
                            const c = {
                                from: r,
                                to: u,
                                size: e,
                                lineRef: t,
                                disabled: n,
                                animationSettings: a,
                                onComplete: l,
                                onEndAnimation: o,
                                onChangeAnimationState: i,
                            };
                            return a.withStack
                                ? s().createElement(Cu, c)
                                : s().createElement(Fu, pu({ key: `${r}-${u}` }, c));
                        },
                    ),
                    fu = (e) => ({
                        '--progress-base': `url(${e.bgImageBase})`,
                        '--progress-line-base': e.line.bgColorBase,
                        '--progress-line-disabled': e.line.bgColorDisabled,
                        '--progress-line-finished': e.line.bgColorFinished,
                        '--progress-pattern-base': `url(${e.pattern.bgImageBase})`,
                        '--progress-pattern-disabled': `url(${e.pattern.bgImageDisabled})`,
                        '--progress-pattern-finished': `url(${e.pattern.bgImageFinished})`,
                        '--progress-glow': `url('${e.glow}')`,
                        '--progress-glow-small': `url('${e.glowSmall}')`,
                        '--progress-delta-color': e.delta.color,
                        '--progress-delta-shadow': e.delta.shadow,
                    }),
                    bu = {
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
                    vu = (e, u, t) => (t < e ? e : t > u ? u : t),
                    wu = (e, u, t) => {
                        if ('number' == typeof t) {
                            return (vu(0, u, t) / u) * 100;
                        }
                        return e;
                    },
                    yu = {
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
                    Su = {
                        freezed: !1,
                        withStack: !1,
                        type: je.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    Ru = (0, a.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = yu,
                            size: t = Ve.Default,
                            animationSettings: n = Su,
                            disabled: r = !1,
                            withoutBackground: o = !1,
                            value: i,
                            deltaFrom: l,
                            lineRef: c,
                            onChangeAnimationState: E,
                            onEndAnimation: d,
                            onComplete: m,
                        }) => {
                            const _ = ((e, u, t) =>
                                (0, a.useMemo)(() => {
                                    const n = (vu(0, u, e) / u) * 100;
                                    return { value: n, deltaFrom: wu(n, u, t) };
                                }, [t, u, e]))(i, e, l);
                            return s().createElement(
                                'div',
                                { className: h()(ze.base, ze[`base__${t}`]), style: fu(u) },
                                !o && s().createElement(qe, { size: t }),
                                s().createElement(hu, {
                                    size: t,
                                    lineRef: c,
                                    disabled: r,
                                    value: _.value,
                                    deltaFrom: _.deltaFrom,
                                    animationSettings: n,
                                    onEndAnimation: d,
                                    onChangeAnimationState: E,
                                    onComplete: m,
                                }),
                            );
                        },
                    );
                let Pu, Tu, xu, Nu, Mu, Ou, ku, Lu;
                !(function (e) {
                    (e.Items = 'items'),
                        (e.Equipment = 'equipment'),
                        (e.Xp = 'xp'),
                        (e.XpFactor = 'xpFactor'),
                        (e.Blueprints = 'blueprints'),
                        (e.BlueprintsAny = 'blueprintsAny'),
                        (e.Goodies = 'goodies'),
                        (e.Berths = 'berths'),
                        (e.Slots = 'slots'),
                        (e.Tokens = 'tokens'),
                        (e.CrewSkins = 'crewSkins'),
                        (e.CrewBooks = 'crewBooks'),
                        (e.Customizations = 'customizations'),
                        (e.CreditsFactor = 'creditsFactor'),
                        (e.Tankman = 'tankman'),
                        (e.Tankwoman = 'tankwoman'),
                        (e.TankmenXp = 'tankmenXP'),
                        (e.TankmenXpFactor = 'tankmenXPFactor'),
                        (e.FreeXpFactor = 'freeXPFactor'),
                        (e.BattleToken = 'battleToken'),
                        (e.PremiumUniversal = 'premium_universal'),
                        (e.Gold = 'gold'),
                        (e.Credits = 'credits'),
                        (e.Crystal = 'crystal'),
                        (e.FreeXp = 'freeXP'),
                        (e.Premium = 'premium'),
                        (e.PremiumPlus = 'premium_plus'),
                        (e.BattlePassPoints = 'battlePassPoints'),
                        (e.BattlePassSelectToken = 'battlePassSelectToken'),
                        (e.StyleProgressToken = 'styleProgressToken'),
                        (e.TmanToken = 'tmanToken'),
                        (e.NaturalCover = 'naturalCover'),
                        (e.BpCoin = 'bpcoin'),
                        (e.BattlaPassFinalAchievement = 'dossier_achievement'),
                        (e.BattleBadge = 'dossier_badge'),
                        (e.NewYearInvoice = 'newYearInvoice'),
                        (e.NewYearSlot = 'newYearSlot'),
                        (e.BonusX5 = 'battle_bonus_x5'),
                        (e.CrewBonusX3 = 'crew_bonus_x3'),
                        (e.Vehicles = 'vehicles'),
                        (e.WtHunterLootbox = 'wt_hunter'),
                        (e.WtBossLootbox = 'wt_boss'),
                        (e.WtProgressPoints = 'stamp'),
                        (e.EpicSelectToken = 'epicSelectToken'),
                        (e.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                        (e.DeluxeGift = 'deluxe_gift'),
                        (e.BattleBoosterGift = 'battleBooster_gift'),
                        (e.OptionalDevice = 'optionalDevice'),
                        (e.EquipCoin = 'equipCoin'),
                        (e.WTCommanderClaimable = 'wtCommanderClaimable'),
                        (e.WTCommanderClaimed = 'wtCommanderClaimed');
                })(Pu || (Pu = {})),
                    (function (e) {
                        (e.Gold = 'gold'),
                            (e.Credits = 'credits'),
                            (e.Crystal = 'crystal'),
                            (e.Premium = 'premium'),
                            (e.PremiumPlus = 'premium_plus'),
                            (e.Vehicles = 'vehicles'),
                            (e.Customizations = 'customizations'),
                            (e.Blueprints = 'blueprints'),
                            (e.BlueprintsAny = 'blueprintsAny'),
                            (e.BlueprintsFinal = 'finalBlueprints'),
                            (e.Goodies = 'goodies'),
                            (e.CrewSkins = 'crewSkins'),
                            (e.Xp = 'xp'),
                            (e.XpFactor = 'xpFactor'),
                            (e.FreeXp = 'freeXP'),
                            (e.FreeXPFactor = 'freeXPFactor'),
                            (e.TankmenXP = 'tankmenXP'),
                            (e.TankmenXPFactor = 'tankmenXPFactor'),
                            (e.DailyXPFactor = 'dailyXPFactor'),
                            (e.CreditsFactor = 'creditsFactor'),
                            (e.Items = 'items'),
                            (e.StrBonus = 'strBonus'),
                            (e.Groups = 'groups'),
                            (e.Berths = 'berths'),
                            (e.Slots = 'slots'),
                            (e.Meta = 'meta'),
                            (e.Tokens = 'tokens'),
                            (e.Dossier = 'dossier'),
                            (e.OneOf = 'oneof'),
                            (e.PremiumUniversal = 'premium_universal'),
                            (e.BadgesGroup = 'badgesGroup'),
                            (e.Entitlements = 'entitlements'),
                            (e.RankedDailyBattles = 'rankedDailyBattles'),
                            (e.RankedBonusBattles = 'rankedBonusBattles'),
                            (e.BattlePassPoints = 'battlePassPoints'),
                            (e.BattleBadge = 'dossier_badge'),
                            (e.BattleAchievement = 'dossier_achievement'),
                            (e.EquipCoin = 'equipCoin');
                    })(Tu || (Tu = {})),
                    (function (e) {
                        (e.Big = 'big'),
                            (e.Small = 'small'),
                            (e.Mini = 'mini'),
                            (e.S600x450 = 's600x450'),
                            (e.S400x300 = 's400x300'),
                            (e.S296x222 = 's296x222'),
                            (e.S232x174 = 's232x174'),
                            (e.S180x135 = 's180x135'),
                            (e.S128x100 = 's128x100'),
                            (e.S80x80 = 's80x80'),
                            (e.S64x64 = 's64x64'),
                            (e.S48x48 = 's48x48');
                    })(xu || (xu = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(Nu || (Nu = {})),
                    (function (e) {
                        (e.BATTLE_BOOSTER = 'battleBooster'),
                            (e.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (e.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (e.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (e.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (e.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (e.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (e.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (e.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (e.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6');
                    })(Mu || (Mu = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(Ou || (Ou = {})),
                    (function (e) {
                        (e.BATTLE_BOOSTER = 'battleBooster'),
                            (e.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (e.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (e.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (e.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (e.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (e.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (e.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (e.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (e.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6');
                    })(ku || (ku = {})),
                    (function (e) {
                        (e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background');
                    })(Lu || (Lu = {}));
                const Iu = ({ format: e, value: u }) => {
                        const t = ((e, u = 'integral') => {
                            let t;
                            t = 'gold' === u ? Ae.B3.GOLD : Ae.B3.INTEGRAL;
                            return void 0 === e ? '' : Ae.Z5.getNumberFormat(e, t);
                        })(u, e);
                        return t ? s().createElement('span', null, t) : null;
                    },
                    Hu = [
                        Pu.Items,
                        Pu.Equipment,
                        Pu.Xp,
                        Pu.XpFactor,
                        Pu.Blueprints,
                        Pu.BlueprintsAny,
                        Pu.Goodies,
                        Pu.Berths,
                        Pu.Slots,
                        Pu.Tokens,
                        Pu.CrewSkins,
                        Pu.CrewBooks,
                        Pu.Customizations,
                        Pu.CreditsFactor,
                        Pu.TankmenXp,
                        Pu.TankmenXpFactor,
                        Pu.FreeXpFactor,
                        Pu.BattleToken,
                        Pu.PremiumUniversal,
                        Pu.NaturalCover,
                        Pu.BpCoin,
                        Pu.BattlePassSelectToken,
                        Pu.BattlaPassFinalAchievement,
                        Pu.BattleBadge,
                        Pu.BonusX5,
                        Pu.CrewBonusX3,
                        Pu.NewYearInvoice,
                        Pu.EpicSelectToken,
                        Pu.WtHunterLootbox,
                        Pu.WtBossLootbox,
                        Pu.WtProgressPoints,
                        Pu.Comp7TokenWeeklyReward,
                        Pu.DeluxeGift,
                        Pu.BattleBoosterGift,
                        Pu.OptionalDevice,
                    ],
                    Wu = [Pu.Gold, Pu.Credits, Pu.Crystal, Pu.FreeXp],
                    Uu = [Pu.BattlePassPoints, Pu.EquipCoin],
                    Gu = [Pu.PremiumPlus, Pu.Premium],
                    $u = (e) =>
                        Hu.includes(e)
                            ? Nu.MULTI
                            : Wu.includes(e)
                              ? Nu.CURRENCY
                              : Uu.includes(e)
                                ? Nu.NUMBER
                                : Gu.includes(e)
                                  ? Nu.PREMIUM_PLUS
                                  : Nu.STRING,
                    Qu = ['engravings', 'backgrounds'],
                    zu = ['engraving', 'background'],
                    Vu = (e, u = xu.Small) => {
                        const t = e.name,
                            n = e.type,
                            r = e.value,
                            a = e.icon,
                            s = e.item,
                            o = e.dogTagType,
                            i = ((e) => {
                                switch (e) {
                                    case xu.S600x450:
                                        return 'c_600x450';
                                    case xu.S400x300:
                                        return 'c_400x300';
                                    case xu.S296x222:
                                        return 'c_296x222';
                                    case xu.S232x174:
                                        return 'c_232x174';
                                    case xu.Big:
                                        return 'c_80x80';
                                    case xu.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(u);
                        switch (t) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${n}_${r}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_${r}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${s}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${u}.${a}`;
                            case 'tokens':
                            case 'battleToken':
                                return 'big' === u
                                    ? e.iconBig.replace('..', 'img://gui')
                                    : e.iconSmall.replace('..', 'img://gui');
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                            case 'groups':
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${a}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${u}.${a}`;
                            case 'dogTagComponents':
                                return ((e, u, t) => {
                                    const n = Qu[e];
                                    if (n) {
                                        const r = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(n),
                                            a = r.$dyn(t);
                                        return a ? `${a}` : `${r.$dyn(zu[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(o, u, a);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${i}.${a}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${i}.${a}`;
                            case 'xp':
                            case 'xpFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.exp`;
                            case 'creditsFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.credits`;
                            case 'tankmenXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.tankmenXP`;
                            case 'dailyXPFactor':
                            case 'freeXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.freeXP`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${i}.${a}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                        }
                    },
                    ju = (e, u, t) => {
                        const n = u && { contentId: u };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || u),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !u,
                            },
                            n,
                            t,
                        );
                    },
                    qu = [xu.Small, xu.Big],
                    Yu = [
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
                function Xu(e) {
                    return Object.entries(e || {}).map(([e, u]) => {
                        const t = { __Type: 'GFValueProxy', name: e };
                        switch (typeof u) {
                            case 'number':
                                t.number = u;
                                break;
                            case 'boolean':
                                t.bool = u;
                                break;
                            case 'undefined':
                                break;
                            default:
                                t.string = u.toString();
                        }
                        return t;
                    });
                }
                const Ku = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: Ae.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    Zu = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            n = e.args,
                            r = e.onMouseEnter,
                            s = e.onMouseLeave,
                            o = e.onMouseDown,
                            i = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            E = e.ignoreMouseClick,
                            d = void 0 !== E && E,
                            m = e.decoratorId,
                            _ = void 0 === m ? 0 : m,
                            A = e.isEnabled,
                            g = void 0 === A || A,
                            F = e.targetId,
                            D = void 0 === F ? 0 : F,
                            B = e.onShow,
                            C = e.onHide,
                            p = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, Yu);
                        const h = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            f = (0, a.useMemo)(
                                () =>
                                    D ||
                                    ((e = 1) => {
                                        const u = new Error().stack;
                                        let t,
                                            n = R.invalid('resId');
                                        return (
                                            u &&
                                                ((t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== t &&
                                                    window.subViews[t] &&
                                                    (n = window.subViews[t].id)),
                                            { caller: t, stack: u, resId: n }
                                        );
                                    })().resId,
                                [D],
                            ),
                            b = (0, a.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (Ku(t, _, { isMouseEvent: !0, on: !0, arguments: Xu(n) }, f),
                                    B && B(),
                                    (h.current.isVisible = !0));
                            }, [t, _, n, f, B]),
                            v = (0, a.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const e = h.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (h.current.timeoutId = 0)),
                                        Ku(t, _, { on: !1 }, f),
                                        h.current.isVisible && C && C(),
                                        (h.current.isVisible = !1);
                                }
                            }, [t, _, f, C]),
                            w = (0, a.useCallback)((e) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(h.current.prevTarget) && v();
                                    }, 200)));
                            }, []);
                        (0, a.useEffect)(() => {
                            const e = h.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', w, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', w, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, a.useEffect)(() => {
                                !1 === g && v();
                            }, [g, v]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', v),
                                    () => {
                                        window.removeEventListener('mouseleave', v), v();
                                    }
                                ),
                                [v],
                            );
                        return g
                            ? (0, a.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((y = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((h.current.timeoutId = window.setTimeout(b, c ? 100 : 400)),
                                                      r && r(e),
                                                      y && y(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              v(), null == s || s(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === d && v(), null == i || i(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === d && v(), null == o || o(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      p,
                                  ),
                              )
                            : u;
                        var y;
                    },
                    Ju = ['children'];
                function et() {
                    return (
                        (et =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        et.apply(this, arguments)
                    );
                }
                const ut = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, Ju);
                        return s().createElement(
                            Zu,
                            et(
                                {
                                    contentId:
                                        R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                            'resId',
                                        ),
                                    ignoreShowDelay: !0,
                                },
                                t,
                            ),
                            u,
                        );
                    },
                    tt = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function nt() {
                    return (
                        (nt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        nt.apply(this, arguments)
                    );
                }
                const rt = R.views.common.tooltip_window.simple_tooltip_content,
                    at = (e) => {
                        let u = e.children,
                            t = e.body,
                            n = e.header,
                            r = e.note,
                            o = e.alert,
                            i = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, tt);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, i, { body: t, header: n, note: r, alert: o });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [o, t, n, r, i]);
                        return s().createElement(
                            Zu,
                            nt(
                                {
                                    contentId:
                                        ((E = null == i ? void 0 : i.hasHtmlContent),
                                        E ? rt.SimpleTooltipHtmlContent('resId') : rt.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var E;
                    };
                function st() {
                    return (
                        (st =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        st.apply(this, arguments)
                    );
                }
                const ot = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const n = s().createElement('div', { className: t }, e);
                        if (u.header || u.body) return s().createElement(at, u, n);
                        const r = u.contentId;
                        return r ? s().createElement(Zu, st({}, u, { contentId: r }), n) : s().createElement(ut, u, n);
                    },
                    it = {
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
                    lt = ({
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: n = xu.Big,
                        special: r,
                        value: a,
                        valueType: o,
                        title: i,
                        style: l,
                        className: c,
                        classNames: E,
                        tooltipArgs: d,
                        periodicIconTooltipArgs: m,
                    }) => {
                        const _ = ((e, u) => {
                                if (void 0 === u || !qu.includes(e)) return null;
                                switch (u) {
                                    case Mu.BATTLE_BOOSTER:
                                    case Mu.BATTLE_BOOSTER_REPLACE:
                                        return Ou.BATTLE_BOOSTER;
                                }
                            })(n, r),
                            A = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case Mu.BATTLE_BOOSTER:
                                        return ku.BATTLE_BOOSTER;
                                    case Mu.BATTLE_BOOSTER_REPLACE:
                                        return ku.BATTLE_BOOSTER_REPLACE;
                                    case Mu.BUILT_IN_EQUIPMENT:
                                        return ku.BUILT_IN_EQUIPMENT;
                                    case Mu.EQUIPMENT_PLUS:
                                        return ku.EQUIPMENT_PLUS;
                                    case Mu.EQUIPMENT_TROPHY_BASIC:
                                        return ku.EQUIPMENT_TROPHY_BASIC;
                                    case Mu.EQUIPMENT_TROPHY_UPGRADED:
                                        return ku.EQUIPMENT_TROPHY_UPGRADED;
                                    case Mu.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return ku.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case Mu.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return ku.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case Mu.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return ku.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case Mu.PROGRESSION_STYLE_UPGRADED_1:
                                        return ku.PROGRESSION_STYLE_UPGRADED_1;
                                    case Mu.PROGRESSION_STYLE_UPGRADED_2:
                                        return ku.PROGRESSION_STYLE_UPGRADED_2;
                                    case Mu.PROGRESSION_STYLE_UPGRADED_3:
                                        return ku.PROGRESSION_STYLE_UPGRADED_3;
                                    case Mu.PROGRESSION_STYLE_UPGRADED_4:
                                        return ku.PROGRESSION_STYLE_UPGRADED_4;
                                    case Mu.PROGRESSION_STYLE_UPGRADED_5:
                                        return ku.PROGRESSION_STYLE_UPGRADED_5;
                                    case Mu.PROGRESSION_STYLE_UPGRADED_6:
                                        return ku.PROGRESSION_STYLE_UPGRADED_6;
                                }
                            })(r),
                            g = ((e, u) => {
                                if (void 0 === e) return null;
                                switch (u) {
                                    case Nu.MULTI: {
                                        const u = Number(e);
                                        return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                                    }
                                    case Nu.CURRENCY:
                                    case Nu.NUMBER:
                                        return s().createElement(Iu, { format: 'integral', value: Number(e) });
                                    case Nu.PREMIUM_PLUS: {
                                        const u = Number(e);
                                        return isNaN(u) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(a, o);
                        return s().createElement(
                            'div',
                            { className: h()(it.base, it[`base__${n}`], c), style: l },
                            s().createElement(
                                ot,
                                { tooltipArgs: d, className: it.tooltipWrapper },
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement(
                                        'div',
                                        { className: h()(it.image, null == E ? void 0 : E.image) },
                                        _ &&
                                            s().createElement('div', {
                                                className: h()(it.highlight, null == E ? void 0 : E.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${_}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            s().createElement('div', {
                                                className: h()(it.icon, null == E ? void 0 : E.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        A &&
                                            s().createElement('div', {
                                                className: h()(it.overlay, null == E ? void 0 : E.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${A}_overlay)`,
                                                },
                                            }),
                                    ),
                                    g &&
                                        s().createElement(
                                            'div',
                                            {
                                                className: h()(
                                                    it.info,
                                                    it[`info__${e}`],
                                                    o === Nu.MULTI && it.info__multi,
                                                    null == E ? void 0 : E.info,
                                                ),
                                            },
                                            g,
                                        ),
                                    i && s().createElement('div', { className: it.title }, i),
                                ),
                            ),
                            t &&
                                s().createElement(
                                    ot,
                                    { tooltipArgs: m },
                                    s().createElement('div', {
                                        className: h()(it.timer, null == E ? void 0 : E.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    ct = {
                        rewardImage: 'DailyQuestCard_rewardImage_ef',
                        dailyQuests: 'DailyQuestCard_dailyQuests_5e',
                        dailyQuest: 'DailyQuestCard_dailyQuest_1e',
                        dailyQuest__incomplete: 'DailyQuestCard_dailyQuest__incomplete_06',
                        dailyQuest__completed: 'DailyQuestCard_dailyQuest__completed_2e',
                        dailyQuest_description: 'DailyQuestCard_dailyQuest_description_25',
                        dailyQuest_bottomText: 'DailyQuestCard_dailyQuest_bottomText_b4',
                        dailyQuest_top_left: 'DailyQuestCard_dailyQuest_top_left_4f',
                        dailyQuest_top_right: 'DailyQuestCard_dailyQuest_top_right_7f',
                        dailyQuest_top: 'DailyQuestCard_dailyQuest_top_19',
                        dailyQuest_top_content: 'DailyQuestCard_dailyQuest_top_content_bf',
                        dailyQuest_icon: 'DailyQuestCard_dailyQuest_icon_fe',
                        dailyQuest_centerBlock: 'DailyQuestCard_dailyQuest_centerBlock_34',
                        dailyQuest_points: 'DailyQuestCard_dailyQuest_points_8b',
                        dailyQuest_accent: 'DailyQuestCard_dailyQuest_accent_8e',
                        dailyQuest_progress: 'DailyQuestCard_dailyQuest_progress_37',
                        dailyQuest_rewards: 'DailyQuestCard_dailyQuest_rewards_3b',
                        dailyQuest_reward: 'DailyQuestCard_dailyQuest_reward_0a',
                        dailyQuest_bottomText__isCompleted: 'DailyQuestCard_dailyQuest_bottomText__isCompleted_f2',
                        dailyQuest_bottomText_completed: 'DailyQuestCard_dailyQuest_bottomText_completed_ce',
                        timer: 'DailyQuestCard_timer_a8',
                        timer_content: 'DailyQuestCard_timer_content_96',
                        timer_highlight: 'DailyQuestCard_timer_highlight_46',
                        timer_highlight__rotated: 'DailyQuestCard_timer_highlight__rotated_fd',
                    };
                function Et() {
                    return (
                        (Et =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Et.apply(this, arguments)
                    );
                }
                const dt = ({
                    icon: e,
                    isComplete: u,
                    maxMissions: t,
                    completedMissions: n,
                    isVisited: r,
                    rewards: o,
                    taskConditions: i,
                    description: l,
                }) => {
                    const c = (0, a.useState)(!1),
                        E = c[0],
                        d = c[1],
                        m = i.find((e) => Boolean(e.progression.maxValue)),
                        _ = !!m && m.progression.maxValue !== m.progression.currentValue;
                    (0, a.useEffect)(() => {
                        d(!_);
                    }, [_]);
                    const A = ((e) =>
                            e.map((e) => ({
                                name: e.name,
                                image: Vu(e, xu.Small),
                                value: e.value,
                                valueType: $u(e.name),
                                tooltipArgs: ju({ tooltipId: e.tooltipId }, Number(e.tooltipContentId)),
                            })))(q(o, W)),
                        g =
                            l ||
                            q(i, ({ conditions: e, progression: u }, t) =>
                                s().createElement(
                                    s().Fragment,
                                    { key: t },
                                    s().createElement(Ne, {
                                        text: R.strings.battle_royale_progression.progressionView.battleQuests.$dyn(
                                            'secondCondition' in e ? 'multiConditions' : 'oneCondition',
                                        ),
                                        classMix: h()(ct.text, ct[`text__${u.status}`]),
                                        binding: e,
                                    }),
                                ),
                            ),
                        F = u ? R.images.gui.maps.icons.wtevent.progression.dailyMissions.done() : e;
                    return s().createElement(
                        'div',
                        {
                            className: h()(
                                ct.dailyQuest,
                                u ? ct.dailyQuest__completed : ct.dailyQuest__incomplete,
                                _ && ct.dailyQuest__progressBarAnimation,
                                E && ct.dailyQuest__progressBarAnimationComplete,
                                r && ct.dailyQuest__visited,
                            ),
                        },
                        s().createElement(
                            'div',
                            { className: ct.dailyQuest_top },
                            s().createElement('div', { className: ct.dailyQuest_top_left }),
                            s().createElement(
                                'div',
                                { className: ct.dailyQuest_top_content },
                                s().createElement('img', { src: F, className: ct.dailyQuest_icon }),
                            ),
                            s().createElement('div', { className: ct.dailyQuest_top_right }),
                        ),
                        s().createElement('div', { className: ct.dailyQuest_description }, g),
                        s().createElement(
                            'div',
                            { className: ct.dailyQuest_centerBlock },
                            !u &&
                                m &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement(Ne, {
                                        classMix: ct.dailyQuest_points,
                                        binding: {
                                            currentPoints: s().createElement(
                                                'span',
                                                { className: ct.dailyQuest_accent },
                                                m.progression.currentValue,
                                            ),
                                            maxPoints: m.progression.maxValue,
                                        },
                                        text: R.strings.event.progression.pointsFormat(),
                                    }),
                                    s().createElement(
                                        'div',
                                        { className: ct.dailyQuest_progress },
                                        m &&
                                            s().createElement(
                                                'div',
                                                { className: ct.dailyQuest_progress },
                                                s().createElement(Ru, {
                                                    size: Ve.Small,
                                                    theme: bu,
                                                    value: m.progression.currentValue,
                                                    deltaFrom: m.progression.lastValue,
                                                    maxValue: m.progression.maxValue,
                                                    onComplete: () => d(!0),
                                                }),
                                            ),
                                    ),
                                ),
                        ),
                        s().createElement(
                            'div',
                            { className: ct.dailyQuest_rewards },
                            o &&
                                A.map((e, u) =>
                                    s().createElement(
                                        lt,
                                        Et(
                                            {
                                                key: u,
                                                className: ct.dailyQuest_reward,
                                                classNames: { image: ct.rewardImage },
                                                size: xu.Small,
                                            },
                                            e,
                                        ),
                                    ),
                                ),
                        ),
                        Boolean(t) &&
                            s().createElement(
                                'div',
                                {
                                    className: h()(
                                        ct.dailyQuest_bottomText,
                                        t === n && ct.dailyQuest_bottomText__isCompleted,
                                    ),
                                },
                                R.strings.event.progression.completed(),
                                s().createElement('span', { className: ct.dailyQuest_bottomText_completed }, n),
                                '/',
                                t,
                            ),
                    );
                };
                let mt, _t, At, gt, Ft;
                !(function (e) {
                    (e.Award = 'Award'),
                        (e.Coin = 'Coin'),
                        (e.Point = 'Point'),
                        (e.Collection = 'Collection'),
                        (e.Commander = 'Commander');
                })(mt || (mt = {})),
                    (function (e) {
                        (e.Small = 'small'), (e.Big = 'big');
                    })(_t || (_t = {})),
                    (function (e) {
                        (e.None = ''), (e.Small = 's'), (e.Medium = 'm');
                    })(At || (At = {})),
                    (function (e) {
                        (e.Border = 'border'), (e.Background = 'bg'), (e.Icon = 'icon'), (e.None = '');
                    })(gt || (gt = {})),
                    (function (e) {
                        (e.Hover = 'Hover'), (e.Disabled = 'Disabled'), (e.Triggered = 'Triggered'), (e.None = '');
                    })(Ft || (Ft = {}));
                const Dt = 'EventCommanderAward_base_99',
                    Bt = 'EventCommanderAward_icon_f4',
                    Ct = 'EventCommanderAward_base__hover_40',
                    pt = 'EventCommanderAward_borderWrapper_c7',
                    ht = 'EventCommanderAward_border_64',
                    ft = 'EventCommanderAward_borderHover_3c',
                    bt = 'EventCommanderAward_label_d3',
                    vt = 'EventCommanderAward_bgWrapper_88',
                    wt = 'EventCommanderAward_bg_a0',
                    yt = 'EventCommanderAward_bgHover_0e',
                    St = R.strings.event.progression.commanders,
                    Rt = (e, u, t) => {
                        const n = R.images.gui.maps.icons.wtevent.progression,
                            r = mt.Coin,
                            a = _t.Small,
                            s = `${r.toLowerCase()}_${e}${u}_${a}${t ? `_${t}` : ''}`;
                        if (((i = n), ['$dyn', '$num', '$plural'].includes((o = s)) || !(o in i)))
                            return void console.error(
                                `Key '${s}' does not exist in R.images.gui.maps.icons.wtevent.progression.`,
                            );
                        var o, i;
                        const l = 'function' == typeof n[s] ? n[s]() : void 0;
                        if (l) return `url(${l})`;
                        console.error(`R.images.gui.maps.icons.wtevent.progression[${s}] is not callable.`);
                    },
                    Pt = () => {
                        const e = (0, a.useState)(!1),
                            u = e[0],
                            t = e[1],
                            n = St.description(),
                            r = S().mediaSize >= v.Medium ? At.Medium : At.Small;
                        return s().createElement(
                            at,
                            { body: n, isEnabled: Boolean(n) },
                            s().createElement(
                                'div',
                                {
                                    className: h()(Dt, u && Ct),
                                    onMouseEnter: () => {
                                        Me(R.sounds.bp_highlight_02()), t(!0);
                                    },
                                    onMouseLeave: () => t(!1),
                                },
                                s().createElement(
                                    'div',
                                    { className: pt },
                                    s().createElement('div', {
                                        className: ht,
                                        style: { backgroundImage: Rt(gt.Border, Ft.None, r) },
                                    }),
                                    s().createElement('div', {
                                        className: ft,
                                        style: { backgroundImage: Rt(gt.Border, Ft.Hover, r) },
                                    }),
                                ),
                                s().createElement(
                                    'div',
                                    { className: vt },
                                    s().createElement('div', {
                                        className: wt,
                                        style: { backgroundImage: Rt(gt.Background, Ft.None, r) },
                                    }),
                                    s().createElement('div', {
                                        className: yt,
                                        style: { backgroundImage: Rt(gt.Background, Ft.Hover, r) },
                                    }),
                                ),
                                s().createElement('div', { className: bt }, St.title()),
                                s().createElement('div', { className: Bt }),
                            ),
                        );
                    },
                    Tt = {
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
                let xt, Nt;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(xt || (xt = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(Nt || (Nt = {}));
                const Mt = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: n,
                    disabled: r,
                    mixClass: o,
                    soundHover: i,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: E,
                    onMouseDown: d,
                    onMouseUp: m,
                    onMouseLeave: _,
                    onClick: A,
                }) => {
                    const g = (0, a.useRef)(null),
                        F = (0, a.useState)(t),
                        D = F[0],
                        B = F[1],
                        C = (0, a.useState)(!1),
                        p = C[0],
                        f = C[1];
                    return (
                        (0, a.useEffect)(() => {
                            function e(e) {
                                D && null !== g.current && !g.current.contains(e.target) && B(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [D]),
                        (0, a.useEffect)(() => {
                            B(t);
                        }, [t]),
                        s().createElement(
                            'div',
                            {
                                ref: g,
                                className: h()(
                                    Tt.base,
                                    Tt[`base__${n}`],
                                    r && Tt.base__disabled,
                                    u && Tt[`base__${u}`],
                                    D && Tt.base__focus,
                                    p && Tt.base__highlightActive,
                                    o,
                                ),
                                onMouseEnter: function (e) {
                                    r || (null !== i && Me(i), c && c(e));
                                },
                                onMouseMove: function (e) {
                                    E && E(e);
                                },
                                onMouseUp: function (e) {
                                    r || (m && m(e), f(!1));
                                },
                                onMouseDown: function (e) {
                                    r ||
                                        (null !== l && Me(l),
                                        d && d(e),
                                        t && (r || (g.current && (g.current.focus(), B(!0)))),
                                        f(!0));
                                },
                                onMouseLeave: function (e) {
                                    r || (_ && _(e), f(!1));
                                },
                                onClick: function (e) {
                                    r || (A && A(e));
                                },
                            },
                            n !== xt.ghost &&
                                s().createElement(
                                    s().Fragment,
                                    null,
                                    s().createElement('div', { className: Tt.back }),
                                    s().createElement('span', { className: Tt.texture }),
                                ),
                            s().createElement(
                                'span',
                                { className: h()(Tt.state, Tt.state__default) },
                                s().createElement('span', { className: Tt.stateDisabled }),
                                s().createElement('span', { className: Tt.stateHighlightHover }),
                                s().createElement('span', { className: Tt.stateHighlightActive }),
                            ),
                            s().createElement(
                                'span',
                                { className: Tt.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                Mt.defaultProps = { type: xt.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Ot = Mt,
                    kt = (e) => {
                        let u,
                            t = null;
                        return (
                            (t = requestAnimationFrame(() => {
                                t = requestAnimationFrame(() => {
                                    (t = null), (u = e());
                                });
                            })),
                            () => {
                                'function' == typeof u && u(), null !== t && cancelAnimationFrame(t);
                            }
                        );
                    },
                    Lt = [];
                function It(e) {
                    const u = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, u.current)(...e), Lt)
                    );
                }
                function Ht(e, u, t = []) {
                    const n = (0, a.useRef)(0),
                        r = (0, a.useCallback)(() => window.clearInterval(n.current), t || []);
                    (0, a.useEffect)(() => r, [r]);
                    const s = (null != t ? t : []).concat([u]);
                    return [
                        (0, a.useCallback)((t) => {
                            (n.current = window.setInterval(() => e(t, !0), u)), e(t, !1);
                        }, s),
                        r,
                    ];
                }
                function Wt(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return Ut(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return Ut(e, u);
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Ut(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                function Gt(e, u, t) {
                    const n = (0, a.useMemo)(
                        () =>
                            (function (e, u, t, n) {
                                let r,
                                    a = !1,
                                    s = 0;
                                function o() {
                                    r && clearTimeout(r);
                                }
                                function i(...i) {
                                    const l = this,
                                        c = Date.now() - s;
                                    function E() {
                                        (s = Date.now()), t.apply(l, i);
                                    }
                                    a ||
                                        (n && !r && E(),
                                        o(),
                                        void 0 === n && c > e
                                            ? E()
                                            : !0 !== u &&
                                              (r = setTimeout(
                                                  n
                                                      ? function () {
                                                            r = void 0;
                                                        }
                                                      : E,
                                                  void 0 === n ? e - c : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof u && ((n = t), (t = u), (u = void 0)),
                                    (i.cancel = function () {
                                        o(), (a = !0);
                                    }),
                                    i
                                );
                            })(t, e),
                        u,
                    );
                    return (0, a.useEffect)(() => n.cancel, [n]), n;
                }
                var $t = t(7030);
                let Qt;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(Qt || (Qt = {}));
                const zt = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Vt = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: n,
                        getWrapperSize: r,
                        triggerMouseMoveOnUpdate: s = !1,
                    }) => {
                        const o = (e, t) => {
                            const n = u(e),
                                r = n[0],
                                a = n[1];
                            return a <= r ? 0 : vu(r, a, t);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                E = void 0 === c ? zt : c,
                                d = (0, a.useRef)(null),
                                m = (0, a.useRef)(null),
                                _ = (() => {
                                    const e = (0, a.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        n = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        r = (e, ...t) => {
                                            for (var n, r = Wt(u(e).values()); !(n = r()).done; ) (0, n.value)(...t);
                                        };
                                    return (0, a.useMemo)(() => ({ on: t, off: n, trigger: r }), []);
                                })(),
                                A = Gt(
                                    () => {
                                        i.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                g = (0, $t.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = d.current;
                                        u && (t(u, e), _.trigger('change', e), s && A());
                                    },
                                    onRest: (e) => _.trigger('rest', e),
                                    onStart: (e) => _.trigger('start', e),
                                    onPause: (e) => _.trigger('pause', e),
                                })),
                                F = g[0],
                                D = g[1],
                                B = (0, a.useCallback)(
                                    (e, u, t) => {
                                        var n;
                                        const r = F.scrollPosition.get(),
                                            a = (null != (n = F.scrollPosition.goal) ? n : 0) - r;
                                        return o(e, u * t + a + r);
                                    },
                                    [F.scrollPosition],
                                ),
                                C = (0, a.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const n = d.current;
                                        n &&
                                            D.start({
                                                scrollPosition: o(n, e),
                                                immediate: u,
                                                reset: t,
                                                config: E.animationConfig,
                                                from: { scrollPosition: o(n, F.scrollPosition.get()) },
                                            });
                                    },
                                    [D, E.animationConfig, F.scrollPosition],
                                ),
                                p = (0, a.useCallback)(
                                    (e) => {
                                        const u = d.current,
                                            t = m.current;
                                        if (!u || !t) return;
                                        const n = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return r(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, E.step),
                                            a = B(u, e, n);
                                        C(a);
                                    },
                                    [C, B, E.step],
                                ),
                                h = (0, a.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && p(n(e)),
                                            d.current && _.trigger('mouseWheel', e, F.scrollPosition, u(d.current));
                                    },
                                    [F.scrollPosition, p, _],
                                ),
                                f = ((e, u = []) => {
                                    const t = (0, a.useRef)(),
                                        n = (0, a.useCallback)((...u) => {
                                            t.current && t.current(), (t.current = e(...u));
                                        }, u);
                                    return (
                                        (0, a.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [n],
                                        ),
                                        n
                                    );
                                })(
                                    () =>
                                        kt(() => {
                                            const e = d.current;
                                            e &&
                                                (C(o(e, F.scrollPosition.goal), { immediate: !0 }),
                                                _.trigger('resizeHandled'));
                                        }),
                                    [C, F.scrollPosition.goal],
                                ),
                                b = It(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const u = o(e, F.scrollPosition.goal);
                                    u !== F.scrollPosition.goal && C(u, { immediate: !0 }),
                                        _.trigger('recalculateContent');
                                });
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('resize', f),
                                    () => {
                                        window.removeEventListener('resize', f);
                                    }
                                ),
                                [f],
                            );
                            return (0, a.useMemo)(
                                () => ({
                                    getWrapperSize: () => (m.current ? r(m.current) : void 0),
                                    getContainerSize: () => (d.current ? e(d.current) : void 0),
                                    getBounds: () =>
                                        d.current
                                            ? u(d.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: E.step.clampedArrowStepTimeout,
                                    clampPosition: o,
                                    handleMouseWheel: h,
                                    applyScroll: C,
                                    applyStepTo: p,
                                    contentRef: d,
                                    wrapperRef: m,
                                    scrollPosition: D,
                                    animationScroll: F,
                                    recalculateContent: b,
                                    events: { on: _.on, off: _.off },
                                }),
                                [F.scrollPosition, C, p, _.off, _.on, b, h, D, E.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    jt = Vt({
                        getBounds: (e) => {
                            var u, t;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (u = null == (t = e.parentElement) ? void 0 : t.offsetWidth) ? u : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, u) => {
                            e.style.transform = `translateX(-${u.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Qt.Next : Qt.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    qt = 'HorizontalBar_base_49',
                    Yt = 'HorizontalBar_base__nonActive_82',
                    Xt = 'HorizontalBar_leftButton_5f',
                    Kt = 'HorizontalBar_rightButton_03',
                    Zt = 'HorizontalBar_track_0d',
                    Jt = 'HorizontalBar_thumb_fd',
                    en = 'HorizontalBar_rail_32',
                    un = 'disable',
                    tn = { pending: !1, offset: 0 },
                    nn = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    rn = () => {},
                    an = (e, u) => Math.max(20, e.offsetWidth * u),
                    sn = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = nn, onDrag: n = rn }) => {
                        const r = (0, a.useRef)(null),
                            o = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            E = (0, a.useRef)(null),
                            d = e.stepTimeout || 100,
                            m = (0, a.useState)(tn),
                            _ = m[0],
                            A = m[1],
                            g = (0, a.useCallback)(
                                (e) => {
                                    A(e),
                                        E.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: E.current });
                                },
                                [n],
                            ),
                            F = () => {
                                const u = c.current,
                                    t = E.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / r),
                                    i = vu(0, 1, a / (r - n)),
                                    d = (u.offsetWidth - an(u, s)) * i;
                                (t.style.transform = `translateX(${0 | d}px)`),
                                    ((e) => {
                                        if (o.current && l.current && c.current && E.current) {
                                            if (0 === e)
                                                return o.current.classList.add(un), void l.current.classList.remove(un);
                                            if (
                                                ((u = c.current),
                                                (t = E.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return o.current.classList.remove(un), void l.current.classList.add(un);
                                            var u, t;
                                            o.current.classList.remove(un), l.current.classList.remove(un);
                                        }
                                    })(d);
                            },
                            D = It(() => {
                                (() => {
                                    const u = E.current,
                                        t = c.current,
                                        n = e.getWrapperSize(),
                                        a = e.getContainerSize();
                                    if (!(a && u && n && t)) return;
                                    const s = Math.min(1, n / a);
                                    (u.style.width = `${an(t, s)}px`),
                                        (u.style.display = 'flex'),
                                        r.current &&
                                            (1 === s ? r.current.classList.add(Yt) : r.current.classList.remove(Yt));
                                })(),
                                    F();
                            });
                        (0, a.useEffect)(() => kt(D)),
                            (0, a.useEffect)(
                                () =>
                                    kt(() => {
                                        const u = () => {
                                            F();
                                        };
                                        let t = rn;
                                        const n = () => {
                                            t(), (t = kt(D));
                                        };
                                        return (
                                            e.events.on('recalculateContent', D),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                t(),
                                                    e.events.off('recalculateContent', D),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', n);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, a.useEffect)(() => {
                                if (!_.pending) return;
                                const u = i.O.client.events.mouse.move(([u, t]) => {
                                        var r;
                                        const a = e.contentRef.current,
                                            s = e.wrapperRef.current;
                                        if (!a || !s) return;
                                        const o = c.current,
                                            i = E.current;
                                        if (!o || !i) return;
                                        if ('inside' === t && u.clientX < 0) return;
                                        const l = u.clientX - _.offset - o.getBoundingClientRect().x,
                                            d = (l / o.offsetWidth) * (null != (r = e.getContainerSize()) ? r : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(a, d),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: i, thumbOffset: l, contentOffset: d });
                                    }),
                                    t = i.O.client.events.mouse.up(() => {
                                        u(), g(tn);
                                    });
                                return () => {
                                    u(), t();
                                };
                            }, [e, _.offset, _.pending, n, g]);
                        const B = Ht((u) => e.applyStepTo(u), d, [e]),
                            C = B[0],
                            p = B[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', p, !0),
                                () => document.removeEventListener('mouseup', p, !0)
                            ),
                            [p],
                        );
                        const f = (e) => {
                            e.target.classList.contains(un) || Me('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: h()(qt, u.base), ref: r, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: h()(Xt, u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(un) || 0 !== e.button || (Me('play'), C(Qt.Next));
                                },
                                onMouseUp: p,
                                ref: o,
                                onMouseEnter: f,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: h()(Zt, u.track),
                                    onMouseDown: (u) => {
                                        const n = E.current;
                                        if (n && 0 === u.button)
                                            if ((Me('play'), u.target === n))
                                                g({ pending: !0, offset: u.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((u) => {
                                                    const n = E.current,
                                                        r = e.contentRef.current;
                                                    if (!n || !r) return;
                                                    const a = t(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + a * u);
                                                })(u.screenX > n.getBoundingClientRect().x ? Qt.Prev : Qt.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: f,
                                },
                                s().createElement('div', { ref: E, className: h()(Jt, u.thumb) }),
                                s().createElement('div', { className: h()(en, u.rail) }),
                            ),
                            s().createElement('div', {
                                className: h()(Kt, u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(un) || 0 !== e.button || (Me('play'), C(Qt.Prev));
                                },
                                onMouseUp: p,
                                ref: l,
                                onMouseEnter: f,
                            }),
                        );
                    }),
                    on = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    ln = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        classNames: o,
                        scrollClassName: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const E = (0, a.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: h()(on.base, e.base) });
                            }, [n]),
                            d = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: h()(on.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: h()(on.defaultScrollArea, r) },
                                s().createElement(cn, { className: i, api: d, classNames: o }, e),
                            ),
                            s().createElement(sn, { getStepByRailClick: l, api: u, onDrag: c, classNames: E }),
                        );
                    },
                    cn = ({ api: e, className: u, classNames: t, children: n }) => (
                        (0, a.useEffect)(() => kt(e.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: h()(on.base, u) },
                            s().createElement(
                                'div',
                                {
                                    className: h()(on.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                s().createElement(
                                    'div',
                                    { className: h()(on.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                (cn.Bar = sn), (cn.Default = ln);
                const En = Vt({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Qt.Next : Qt.Prev),
                    }),
                    dn = 'VerticalBar_base_f3',
                    mn = 'VerticalBar_base__nonActive_42',
                    _n = 'VerticalBar_topButton_d7',
                    An = 'VerticalBar_bottomButton_06',
                    gn = 'VerticalBar_track_df',
                    Fn = 'VerticalBar_thumb_32',
                    Dn = 'VerticalBar_rail_43',
                    Bn = 'disable',
                    Cn = () => {},
                    pn = { pending: !1, offset: 0 },
                    hn = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    fn = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    bn = (e, u) => Math.max(20, e.offsetHeight * u),
                    vn = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = hn, onDrag: n = Cn }) => {
                        const r = (0, a.useRef)(null),
                            o = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            E = (0, a.useRef)(null),
                            d = e.stepTimeout || 100,
                            m = (0, a.useState)(pn),
                            _ = m[0],
                            A = m[1],
                            g = (0, a.useCallback)(
                                (e) => {
                                    A(e),
                                        E.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: E.current });
                                },
                                [n],
                            ),
                            F = It(() => {
                                const u = E.current,
                                    t = c.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && a && u && t)) return;
                                const s = Math.min(1, n / a);
                                return (
                                    (u.style.height = `${bn(t, s)}px`),
                                    (u.style.display = 'flex'),
                                    r.current &&
                                        (1 === s ? r.current.classList.add(mn) : r.current.classList.remove(mn)),
                                    s
                                );
                            }),
                            D = It(() => {
                                const u = c.current,
                                    t = E.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / r),
                                    i = vu(0, 1, a / (r - n)),
                                    d = (u.offsetHeight - bn(u, s)) * i;
                                (t.style.transform = `translateY(${0 | d}px)`),
                                    ((e) => {
                                        if (o.current && l.current && c.current && E.current) {
                                            if (0 === Math.round(e))
                                                return o.current.classList.add(Bn), void l.current.classList.remove(Bn);
                                            if (
                                                ((u = c.current),
                                                (t = E.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return o.current.classList.remove(Bn), void l.current.classList.add(Bn);
                                            var u, t;
                                            o.current.classList.remove(Bn), l.current.classList.remove(Bn);
                                        }
                                    })(d);
                            }),
                            B = It(() => {
                                fn(e, () => {
                                    F(), D();
                                });
                            });
                        (0, a.useEffect)(() => kt(B)),
                            (0, a.useEffect)(() => {
                                const u = () => {
                                    fn(e, () => {
                                        D();
                                    });
                                };
                                let t = Cn;
                                const n = () => {
                                    t(), (t = kt(B));
                                };
                                return (
                                    e.events.on('recalculateContent', B),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        t(),
                                            e.events.off('recalculateContent', B),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', n);
                                    }
                                );
                            }, [e]),
                            (0, a.useEffect)(() => {
                                if (!_.pending) return;
                                const u = i.O.client.events.mouse.up(() => {
                                        g(pn);
                                    }),
                                    t = i.O.client.events.mouse.move(([u]) => {
                                        fn(e, (t) => {
                                            const r = c.current,
                                                a = E.current,
                                                s = e.getContainerSize();
                                            if (!r || !a || !s) return;
                                            const o = u.screenY - _.offset - r.getBoundingClientRect().y,
                                                i = (o / r.offsetHeight) * s;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: a, thumbOffset: o, contentOffset: i });
                                        });
                                    });
                                return () => {
                                    u(), t();
                                };
                            }, [e, _.offset, _.pending, n, g]);
                        const C = Ht((u) => e.applyStepTo(u), d, [e]),
                            p = C[0],
                            f = C[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', f, !0),
                                () => document.removeEventListener('mouseup', f, !0)
                            ),
                            [f],
                        );
                        const b = (e) => {
                            e.target.classList.contains(Bn) || Me('highlight');
                        };
                        return s().createElement(
                            'div',
                            { className: h()(dn, u.base), ref: r, onWheel: e.handleMouseWheel },
                            s().createElement('div', {
                                className: h()(_n, u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Bn) || 0 !== e.button || (Me('play'), p(Qt.Next));
                                },
                                ref: o,
                                onMouseEnter: b,
                            }),
                            s().createElement(
                                'div',
                                {
                                    className: h()(gn, u.track),
                                    onMouseDown: (u) => {
                                        const n = E.current;
                                        if (n && 0 === u.button)
                                            if ((Me('play'), u.target === n))
                                                g({ pending: !0, offset: u.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((u) => {
                                                    E.current &&
                                                        fn(e, (n) => {
                                                            if (!n) return;
                                                            const r = t(e),
                                                                a = e.clampPosition(n, n.scrollTop + r * u);
                                                            e.applyScroll(a);
                                                        });
                                                })(u.screenY > n.getBoundingClientRect().y ? Qt.Prev : Qt.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: b,
                                },
                                s().createElement('div', { ref: E, className: h()(Fn, u.thumb) }),
                                s().createElement('div', { className: h()(Dn, u.rail) }),
                            ),
                            s().createElement('div', {
                                className: h()(An, u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Bn) || 0 !== e.button || (Me('play'), p(Qt.Prev));
                                },
                                onMouseUp: f,
                                ref: l,
                                onMouseEnter: b,
                            }),
                        );
                    }),
                    wn = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    yn = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        scrollClassName: o,
                        scrollClassNames: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const E = (0, a.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: h()(wn.base, e.base) });
                            }, [n]),
                            d = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return s().createElement(
                            'div',
                            { className: h()(wn.defaultScroll, t), onWheel: u.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: h()(wn.area, r) },
                                s().createElement(Sn, { className: o, classNames: i, api: d }, e),
                            ),
                            s().createElement(vn, { getStepByRailClick: l, api: u, onDrag: c, classNames: E }),
                        );
                    },
                    Sn = ({ className: e, classNames: u, children: t, api: n }) => (
                        (0, a.useEffect)(() => kt(n.recalculateContent)),
                        s().createElement(
                            'div',
                            { className: h()(wn.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            s().createElement(
                                'div',
                                { className: h()(wn.content, null == u ? void 0 : u.content), ref: n.contentRef },
                                t,
                            ),
                        )
                    );
                Sn.Default = yn;
                const Rn = { Vertical: r, Horizontal: n };
                var Pn = t(4306);
                const Tn = 'Progress_base_14',
                    xn = 'Progress_scrollWrap_75',
                    Nn = 'Progress_wrapper_0d',
                    Mn = 'Progress_bottom_6f',
                    On = 'Progress_top_41',
                    kn = 'Progress_stage_d1',
                    Ln = 'Progress_stage_img_ce',
                    In = 'Progress_stage_glow_84',
                    Hn = 'Progress_stage__current_03',
                    Wn = 'Progress_stage_text_35',
                    Un = 'Progress_stage__done_66',
                    Gn = 'Progress_progress_content_38',
                    $n = 'Progress_progress_content__done_bd',
                    Qn = 'Progress_reward_75',
                    zn = 'Progress_progress_bottom_09',
                    Vn = 'Progress_progress_top_af',
                    jn = 'Progress_rewards_group_34',
                    qn = 'Progress_reward__compressed_ce',
                    Yn = 'Progress_divider_2e',
                    Xn = 'Progress_divider_end_ba',
                    Kn = 'Progress_pointsMark_fb',
                    Zn = 'Progress_pointsMark__faded_f8',
                    Jn = 'Progress_pointsMark_group_a1',
                    er = 'Progress_glow_c7',
                    ur = 'Progress_glow__inProgress_7f',
                    tr = 'Progress_numberInProgress_7c',
                    nr = 'Progress_numberAnimated_a0',
                    rr = 'Progress_numberGlow_b6',
                    ar = 'Progress_stamps_31',
                    sr = 'Progress_stamps_max_be',
                    or = 'Progress_buttonHolder_42',
                    ir = 'Progress_buttonLight_ba',
                    lr = 'Progress_buttonInner_d7',
                    cr = 'Progress_button_4d',
                    Er = 'Progress_buttonBlink_2e',
                    dr = 'Progress_buttonText_1b';
                function mr() {
                    return (
                        (mr =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        mr.apply(this, arguments)
                    );
                }
                const _r = 1e3,
                    Ar = {
                        enter: 'Progress_numberAnimated__enter_e1',
                        enterActive: 'Progress_numberAnimated__enterActive_3e',
                        enterDone: 'Progress_numberAnimated__enterDone_e6',
                    },
                    gr = { enterActive: 'Progress_numberGlow__active_25', enterDone: 'Progress_numberGlow__exit_a8' },
                    Fr = (e) => {
                        e === uu.Grow
                            ? Me(R.sounds.ev_white_tiger_hangar_ui_progress_bar_start())
                            : e === uu.End && Me(R.sounds.ev_white_tiger_hangar_ui_progress_bar_stop());
                    },
                    Dr = (0, Qe.Pi)(({ className: e }) => {
                        var u, t;
                        const n = de(),
                            r = n.model,
                            o = n.controls,
                            i = r.computes.getStages(),
                            l = o.onTakeReward,
                            c = r.root.get(),
                            E = c.stampsCurrent,
                            d = c.currentStage,
                            m = c.stampsPrevious,
                            _ = c.stampsNeededPerStage,
                            A = i.length * _,
                            g = Math.min(E, A),
                            F = d - 1,
                            D = null != (u = null == (t = i[F]) ? void 0 : t.stageMaxPoints) ? u : A,
                            B = jt(),
                            C = B.applyScroll,
                            p = S().mediaWidth,
                            f = (0, a.useCallback)(() => {
                                const e = Math.max(0, 190 * F + 95 - (0.95 * p) / 2);
                                C(viewEnv.remToPx(e), { immediate: !1, reset: !1 });
                            }, [F, p, C]);
                        (0, a.useEffect)(() => {
                            const e = setTimeout(() => f(), 300);
                            return (
                                engine.on('clientResized', f),
                                () => {
                                    engine.off('clientResized', f), clearTimeout(e);
                                }
                            );
                        }, [d, f]);
                        const b = g === A,
                            v = (e) => e === F && !b,
                            w = (e) => e < F || (((e) => e === i.length - 1)(e) && b),
                            y = (e) =>
                                e.map((e) => ({
                                    name: e.name,
                                    image: Vu(e, xu.Big),
                                    value: e.value,
                                    valueType: $u(e.name),
                                    tooltipArgs: ju({ tooltipId: e.tooltipId }, Number(e.tooltipContentId)),
                                })),
                            P = (e) => e.some((e) => e.name === Pu.WTCommanderClaimable),
                            T = i.map(({ rewards: e, stageMaxPoints: u }) => ({
                                bonuses: y(e),
                                stageMaxPoints: u,
                                isRewardClaimable: P(e),
                            })),
                            x = { '--sections-amount': T.length, '--rewards-wrap-width': '190rem' },
                            N = (0, a.useState)(!1),
                            M = N[0],
                            O = N[1];
                        return (
                            (0, a.useEffect)(
                                () =>
                                    eu(() => {
                                        O(!0);
                                    }, _r),
                                [],
                            ),
                            s().createElement(
                                'div',
                                { className: h()(Tn, e) },
                                s().createElement(
                                    'div',
                                    { className: h()(Tn), style: x },
                                    s().createElement(
                                        Rn.Horizontal.Area.Default,
                                        { className: xn, api: B },
                                        s().createElement(
                                            'div',
                                            { className: Nn },
                                            s().createElement(
                                                'div',
                                                { className: On },
                                                T.map(({ stageMaxPoints: e, isRewardClaimable: u }, t) =>
                                                    s().createElement(
                                                        'div',
                                                        { className: Vn, key: t },
                                                        0 === t &&
                                                            s().createElement(
                                                                'div',
                                                                { className: Jn },
                                                                s().createElement(
                                                                    'div',
                                                                    { className: h()(Kn, !v(t) && w(t) && Zn) },
                                                                    '0',
                                                                ),
                                                                s().createElement('div', { className: Yn }),
                                                            ),
                                                        s().createElement(
                                                            'div',
                                                            { className: h()(Gn, w(t) && $n) },
                                                            s().createElement(
                                                                'div',
                                                                { className: h()(kn, w(t) && Un, v(t) && Hn) },
                                                                s().createElement('div', { className: In }),
                                                                s().createElement('img', {
                                                                    src: R.images.gui.maps.icons.wtevent.progression.progress.tick(),
                                                                    className: Ln,
                                                                }),
                                                                v(t) &&
                                                                    s().createElement(
                                                                        s().Fragment,
                                                                        null,
                                                                        s().createElement('div', {
                                                                            className: h()(er, v(t) && ur),
                                                                        }),
                                                                        s().createElement(
                                                                            Pn.Z,
                                                                            {
                                                                                in: M,
                                                                                timeout: 5e3,
                                                                                className: rr,
                                                                                classNames: gr,
                                                                            },
                                                                            s().createElement('div', null),
                                                                        ),
                                                                    ),
                                                                v(t)
                                                                    ? s().createElement(
                                                                          'div',
                                                                          { className: Wn },
                                                                          t + 1,
                                                                          s().createElement(
                                                                              Pn.Z,
                                                                              {
                                                                                  in: M,
                                                                                  timeout: 5e3,
                                                                                  className: h()(tr, nr),
                                                                                  classNames: Ar,
                                                                              },
                                                                              s().createElement('div', null, t + 1),
                                                                          ),
                                                                      )
                                                                    : s().createElement(
                                                                          'div',
                                                                          { className: Wn },
                                                                          t + 1,
                                                                      ),
                                                            ),
                                                        ),
                                                        s().createElement(
                                                            'div',
                                                            { className: Jn },
                                                            s().createElement(
                                                                'div',
                                                                { className: h()(Kn, !v(t) && w(t) && Zn) },
                                                                e,
                                                            ),
                                                            s().createElement('div', { className: Yn }),
                                                        ),
                                                        u &&
                                                            w(t) &&
                                                            s().createElement(
                                                                'div',
                                                                { className: or },
                                                                s().createElement('div', { className: ir }),
                                                                s().createElement(
                                                                    'div',
                                                                    { className: lr },
                                                                    s().createElement(
                                                                        Ot,
                                                                        {
                                                                            type: xt.ghost,
                                                                            size: Nt.small,
                                                                            onClick: () => l(t),
                                                                            mixClass: cr,
                                                                        },
                                                                        s().createElement('div', { className: Er }),
                                                                        s().createElement(
                                                                            'div',
                                                                            { className: dr },
                                                                            R.strings.winback.takeReward.buttonText(),
                                                                        ),
                                                                    ),
                                                                ),
                                                            ),
                                                    ),
                                                ),
                                            ),
                                            s().createElement(Ru, {
                                                value: g,
                                                maxValue: A,
                                                deltaFrom: m,
                                                theme: bu,
                                                onChangeAnimationState: Fr,
                                            }),
                                            s().createElement(
                                                'div',
                                                { className: h()(Mn) },
                                                s().createElement('div', { className: Xn }),
                                                T.map(({ bonuses: e }, u) =>
                                                    s().createElement(
                                                        'div',
                                                        { className: zn, key: u },
                                                        s().createElement(
                                                            'div',
                                                            { className: h()(Gn, w(u) && $n) },
                                                            v(u) &&
                                                                s().createElement(
                                                                    Zu,
                                                                    {
                                                                        contentId:
                                                                            R.views.lobby.wt_event.tooltips.WtEventStampTooltipView(
                                                                                'resId',
                                                                            ),
                                                                    },
                                                                    s().createElement(
                                                                        'div',
                                                                        { className: ar },
                                                                        g,
                                                                        s().createElement(
                                                                            'span',
                                                                            { className: sr },
                                                                            '/',
                                                                            D,
                                                                        ),
                                                                    ),
                                                                ),
                                                            s().createElement(
                                                                'div',
                                                                { className: jn },
                                                                e.map((u, t) =>
                                                                    s().createElement(
                                                                        lt,
                                                                        mr(
                                                                            {
                                                                                size: xu.Small,
                                                                                key: t,
                                                                                className: h()(Qn, e.length > 3 && qn),
                                                                            },
                                                                            u,
                                                                        ),
                                                                    ),
                                                                ),
                                                            ),
                                                        ),
                                                        s().createElement('div', { className: Xn }),
                                                    ),
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                            )
                        );
                    }),
                    Br = {
                        base: 'WTProgressionsViewApp_base_11',
                        bgDecoration_topRight: 'WTProgressionsViewApp_bgDecoration_topRight_0c',
                        bgDecoration_topLeft: 'WTProgressionsViewApp_bgDecoration_topLeft_55',
                        closeButton: 'WTProgressionsViewApp_closeButton_13',
                        infoButton: 'WTProgressionsViewApp_infoButton_f3',
                        heading: 'WTProgressionsViewApp_heading_6c',
                        subheading: 'WTProgressionsViewApp_subheading_19',
                        centerBlock: 'WTProgressionsViewApp_centerBlock_96',
                        container: 'WTProgressionsViewApp_container_3d',
                        container_top: 'WTProgressionsViewApp_container_top_1d',
                        container_top_left: 'WTProgressionsViewApp_container_top_left_42',
                        container_top_right: 'WTProgressionsViewApp_container_top_right_c4',
                        tabs: 'WTProgressionsViewApp_tabs_eb',
                        tab: 'WTProgressionsViewApp_tab_14',
                        tab__active: 'WTProgressionsViewApp_tab__active_e3',
                        tab_shadow: 'WTProgressionsViewApp_tab_shadow_16',
                        tab_light: 'WTProgressionsViewApp_tab_light_a0',
                        tab__inactive: 'WTProgressionsViewApp_tab__inactive_ac',
                        tab_title: 'WTProgressionsViewApp_tab_title_eb',
                        tab_texture: 'WTProgressionsViewApp_tab_texture_9a',
                        tab_counter: 'WTProgressionsViewApp_tab_counter_68',
                        tab_counter_total: 'WTProgressionsViewApp_tab_counter_total_0c',
                        dailyQuests: 'WTProgressionsViewApp_dailyQuests_62',
                        timer: 'WTProgressionsViewApp_timer_ee',
                        timer_content: 'WTProgressionsViewApp_timer_content_0c',
                        timer_highlight: 'WTProgressionsViewApp_timer_highlight_95',
                        timer_highlight__rotated: 'WTProgressionsViewApp_timer_highlight__rotated_ed',
                        progress: 'WTProgressionsViewApp_progress_ac',
                        awardWrapper: 'WTProgressionsViewApp_awardWrapper_d3',
                    },
                    Cr = { [We.HARRIER]: 'getHarrierQuestsVisited', [We.ENGINEER]: 'getEngineerQuestsVisited' },
                    pr = { [We.HARRIER]: 'getHarrierQuests', [We.ENGINEER]: 'getEngineerQuests' },
                    hr = () => {
                        Me('highlight');
                    },
                    fr = (e, u) => e + (u.status === He.Done ? 1 : 0),
                    br = (0, Qe.Pi)(() => {
                        const e = (0, a.useState)(!0),
                            u = e[0],
                            t = e[1];
                        (0, a.useEffect)(() => {
                            const e = new Image();
                            let u = !0;
                            const n = () => {
                                u && t(!1);
                            };
                            return (
                                (e.onload = n),
                                (e.onerror = n),
                                (e.src = R.images.gui.maps.icons.wtevent.progression.background.background()),
                                () => {
                                    u = !1;
                                }
                            );
                        }, []);
                        const n = de(),
                            r = n.model,
                            o = n.controls,
                            i = o.onSelectedTab,
                            l = o.onClose,
                            c = o.onAboutClicked,
                            E = o.onCommanderPreview;
                        var d;
                        (d = l), $e(Ue.n.ESCAPE, d);
                        const m = (0, a.useState)(r.computes.getActiveTab() || We.HARRIER),
                            _ = m[0],
                            A = m[1],
                            g = r.computes[pr[_]](),
                            F = r.computes[Cr[_]](),
                            D = r.computes.getHarrierQuests(),
                            B = r.computes.getEngineerQuests(),
                            C = D.reduce(fr, 0),
                            p = B.reduce(fr, 0),
                            f = _ === We.HARRIER,
                            b = _ === We.ENGINEER,
                            v = h()(Br.tab, f ? Br.tab__active : Br.tab__inactive),
                            w = h()(Br.tab, b ? Br.tab__active : Br.tab__inactive);
                        return u
                            ? null
                            : s().createElement(
                                  'div',
                                  { className: Br.base },
                                  s().createElement('div', { className: Br.bgDecoration_topRight }),
                                  s().createElement('div', { className: Br.bgDecoration_topLeft }),
                                  s().createElement('div', { className: Br.bgDecoration_bottom }),
                                  s().createElement(
                                      'div',
                                      { className: Br.closeButton },
                                      s().createElement(Ie, {
                                          caption: R.strings.event.progression.close(),
                                          onClick: l,
                                          side: 'left',
                                          type: 'close',
                                      }),
                                  ),
                                  s().createElement(
                                      'div',
                                      { className: Br.awardWrapper, onClick: E },
                                      s().createElement(Pt, null),
                                  ),
                                  s().createElement(
                                      'div',
                                      { className: Br.infoButton },
                                      s().createElement(Ie, {
                                          caption: R.strings.event.progression.about(),
                                          type: 'info',
                                          onClick: c,
                                      }),
                                  ),
                                  s().createElement(
                                      'div',
                                      { className: Br.heading },
                                      R.strings.event.progression.title(),
                                  ),
                                  s().createElement(
                                      'div',
                                      { className: Br.subheading },
                                      R.strings.event.progression.subtitle(),
                                  ),
                                  s().createElement(
                                      'div',
                                      { className: Br.centerBlock },
                                      s().createElement(
                                          'div',
                                          { className: Br.container },
                                          s().createElement(
                                              'div',
                                              { className: Br.container_top },
                                              s().createElement('div', { className: Br.container_top_left }),
                                              s().createElement(
                                                  'div',
                                                  { className: Br.tabs },
                                                  s().createElement(
                                                      'div',
                                                      {
                                                          className: v,
                                                          onMouseEnter: hr,
                                                          onClick: () => {
                                                              A(We.HARRIER), i(We.HARRIER), Me('play');
                                                          },
                                                      },
                                                      s().createElement('div', { className: Br.tab_light }),
                                                      s().createElement('div', { className: Br.tab_texture }),
                                                      s().createElement('div', { className: Br.tab_shadow }),
                                                      s().createElement(
                                                          'div',
                                                          { className: Br.tab_title },
                                                          R.strings.event.progression.tab.harrier(),
                                                      ),
                                                      s().createElement(
                                                          'div',
                                                          { className: Br.tab_counter },
                                                          C,
                                                          s().createElement(
                                                              'span',
                                                              { className: Br.tab_counter_total },
                                                              '/',
                                                              D.length,
                                                          ),
                                                      ),
                                                  ),
                                                  s().createElement(
                                                      'div',
                                                      {
                                                          className: w,
                                                          onMouseEnter: hr,
                                                          onClick: () => {
                                                              A(We.ENGINEER), i(We.ENGINEER), Me('play');
                                                          },
                                                      },
                                                      s().createElement('div', { className: Br.tab_light }),
                                                      s().createElement('div', { className: Br.tab_texture }),
                                                      s().createElement('div', { className: Br.tab_shadow }),
                                                      s().createElement(
                                                          'div',
                                                          { className: Br.tab_title },
                                                          R.strings.event.progression.tab.engineer(),
                                                      ),
                                                      s().createElement(
                                                          'div',
                                                          { className: Br.tab_counter },
                                                          p,
                                                          s().createElement(
                                                              'span',
                                                              { className: Br.tab_counter_total },
                                                              '/',
                                                              B.length,
                                                          ),
                                                      ),
                                                  ),
                                              ),
                                              s().createElement('div', { className: Br.container_top_right }),
                                          ),
                                          s().createElement(
                                              'div',
                                              { className: Br.dailyQuests },
                                              g.map((e, u) =>
                                                  s().createElement(dt, {
                                                      key: u,
                                                      isComplete: e.status === He.Done,
                                                      isVisited: F[u],
                                                      maxMissions: b ? e.maxMissions || 1 : 0,
                                                      completedMissions: (b && e.completedMissions) || 0,
                                                      rewards: e.bonuses,
                                                      description: e.description,
                                                      icon: R.images.gui.maps.icons.wtevent.postbattle.$dyn(
                                                          'c_64_' + e.icon + '_silver',
                                                      ),
                                                      taskConditions: e.taskConditions,
                                                  }),
                                              ),
                                          ),
                                          f &&
                                              s().createElement(
                                                  'div',
                                                  { className: Br.timer },
                                                  s().createElement('img', {
                                                      className: Br.timer_highlight,
                                                      src: R.images.gui.maps.icons.wtevent.progression.navigation.timer_highlight(),
                                                      alt: '',
                                                  }),
                                                  s().createElement(Ne, {
                                                      classMix: Br.timer_content,
                                                      binding: {
                                                          countdown: s().createElement(Te, {
                                                              duration: r.dailyQuests.get().updateCountdown,
                                                          }),
                                                      },
                                                      text: R.strings.event.progression.timer(),
                                                  }),
                                                  s().createElement('img', {
                                                      className: h()(Br.timer_highlight, Br.timer_highlight__rotated),
                                                      src: R.images.gui.maps.icons.wtevent.progression.navigation.timer_highlight(),
                                                      alt: '',
                                                  }),
                                              ),
                                      ),
                                  ),
                                  s().createElement(Dr, { className: Br.progress }),
                              );
                    });
                engine.whenReady.then(() => {
                    H().render(
                        s().createElement(Ee, null, s().createElement(L, null, s().createElement(br, null))),
                        document.getElementById('root'),
                    );
                });
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var u = __webpack_module_cache__[e];
        if (void 0 !== u) return u.exports;
        var t = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](t, t.exports, __webpack_require__), t.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, u, t, n) => {
            if (!u) {
                var r = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [u, t, n] = deferred[i], a = !0, s = 0; s < u.length; s++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
                        deferred.splice(i--, 1);
                        var o = t();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > n; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [u, t, n];
        }),
        (__webpack_require__.n = (e) => {
            var u = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(u, { a: u }), u;
        }),
        (__webpack_require__.d = (e, u) => {
            for (var t in u)
                __webpack_require__.o(u, t) &&
                    !__webpack_require__.o(e, t) &&
                    Object.defineProperty(e, t, { enumerable: !0, get: u[t] });
        }),
        (__webpack_require__.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (__webpack_require__.o = (e, u) => Object.prototype.hasOwnProperty.call(e, u)),
        (__webpack_require__.r = (e) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (__webpack_require__.j = 251),
        (() => {
            var e = { 251: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        r,
                        [a, s, o] = t,
                        i = 0;
                    if (a.some((u) => 0 !== e[u])) {
                        for (n in s) __webpack_require__.o(s, n) && (__webpack_require__.m[n] = s[n]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (u && u(t); i < a.length; i++)
                        (r = a[i]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [107], () => __webpack_require__(5898));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
