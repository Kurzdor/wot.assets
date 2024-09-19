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
                    t.d(u, { mouse: () => c, off: () => i, on: () => s, onResize: () => a, onScaleUpdated: () => o });
                var n = t(2472),
                    r = t(1176);
                const a = (0, n.E)('clientResized'),
                    o = (0, n.E)('self.onScaleUpdated'),
                    s = (e, u) => engine.on(e, u),
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
                                        o = l[u]((e) => t([e, 'outside']));
                                    function s(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, s),
                                        n(),
                                        () => {
                                            r &&
                                                (o(),
                                                window.removeEventListener(a, s),
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
                        getMouseGlobalPosition: () => o,
                        getSize: () => a,
                        graphicsQuality: () => s,
                        playSound: () => r.G,
                        setRTPC: () => r.E,
                    });
                var n = t(527),
                    r = t(2493);
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function o(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
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
                t.d(u, { ZP: () => o });
                var n = t(5959);
                const r = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    a = Object.keys(r).reduce((e, u) => ((e[u] = () => (0, n.playSound)(r[u])), e), {}),
                    o = { play: Object.assign({}, a, { sound: n.playSound }), setRTPC: n.setRTPC };
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
                        addPreloadTexture: () => s,
                        children: () => n,
                        displayStatus: () => r.W,
                        displayStatusIs: () => b,
                        events: () => a.U,
                        extraSize: () => w,
                        forceTriggerMouseMove: () => f,
                        freezeTextureBeforeResize: () => _,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => v,
                        getScale: () => F,
                        getSize: () => d,
                        getViewGlobalPosition: () => A,
                        isEventHandled: () => h,
                        isFocused: () => g,
                        pxToRem: () => D,
                        remToPx: () => B,
                        resize: () => m,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => C,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => i,
                        setSidePaddingsRem: () => E,
                        whenTutorialReady: () => y,
                    });
                var n = t(3722),
                    r = t(6112),
                    a = t(6538),
                    o = t(8566);
                function s(e) {
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
                function A(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: B(u.x), y: B(u.y) };
                }
                function _() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function F() {
                    return viewEnv.getScale();
                }
                function D(e) {
                    return viewEnv.pxToRem(e);
                }
                function B(e) {
                    return viewEnv.remToPx(e);
                }
                function C(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function g() {
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
                function v() {
                    return viewEnv.getShowingStatus();
                }
                const b = Object.keys(r.W).reduce(
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
                    o = 32,
                    s = 64,
                    i = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                o = (function (e, u) {
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
                                      Object.assign({ __Type: t, type: e }, o, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var r;
                    },
                    l = {
                        close(e) {
                            i('popover' === e ? r : o);
                        },
                        minimize() {
                            i(s);
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
                t.d(u, { Sw: () => a.Z, B3: () => s.B3, Z5: () => o.Z5, B0: () => s.B0, ry: () => i.ry });
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
                var o = t(8613),
                    s = t(4251),
                    i = t(8072),
                    l = t(7572);
                const c = r.instance,
                    E = {
                        DataTracker: a.Z,
                        ViewModel: l.Z,
                        ViewEventType: s.B0,
                        NumberFormatType: s.B3,
                        RealFormatType: s.Gr,
                        TimeFormatType: s.lf,
                        DateFormatType: s.kH,
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
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
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
                t.d(u, { B0: () => n, B3: () => r, Gr: () => a, kH: () => s, lf: () => o }),
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
                    o = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    s = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
            },
            8072: (e, u, t) => {
                'use strict';
                t.d(u, {
                    Eu: () => c,
                    KE: () => D,
                    Kv: () => i,
                    P3: () => F,
                    SU: () => p,
                    SW: () => A,
                    Sy: () => m,
                    VM: () => h,
                    c9: () => E,
                    ry: () => l,
                    uM: () => B,
                    uk: () => _,
                    wU: () => C,
                    wv: () => d,
                });
                var n = t(5521),
                    r = t(3138),
                    a = t(4251);
                const o = ['args'];
                function s(e, u, t, n, r, a, o) {
                    try {
                        var s = e[a](o),
                            i = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(i) : Promise.resolve(i).then(n, r);
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
                                        function o(e) {
                                            s(a, n, r, o, i, 'next', e);
                                        }
                                        function i(e) {
                                            s(a, n, r, o, i, 'throw', e);
                                        }
                                        o(void 0);
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
                                })(u, o);
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
                    A = () => E(a.B0.POP_OVER, { on: !1 }),
                    _ = (e, u, t = 0) => {
                        E(a.B0.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                    },
                    F = (e, u, t, n, o = R.invalid('resId'), s) => {
                        const l = r.O.view.getViewGlobalPosition(),
                            c = t.getBoundingClientRect(),
                            d = c.x,
                            m = c.y,
                            A = c.width,
                            _ = c.height,
                            F = {
                                x: r.O.view.pxToRem(d) + l.x,
                                y: r.O.view.pxToRem(m) + l.y,
                                width: r.O.view.pxToRem(A),
                                height: r.O.view.pxToRem(_),
                            };
                        E(a.B0.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: n || R.invalid('resId'),
                            targetID: o,
                            direction: u,
                            bbox: i(F),
                            on: !0,
                            args: s,
                        });
                    },
                    D = () => viewEnv.isWindowShownByViewEvent(a.B0.TOOLTIP),
                    B = () => viewEnv.isWindowShownByViewEvent(a.B0.CONTEXT_MENU),
                    C = () => viewEnv.isWindowShownByViewEvent(a.B0.POP_OVER),
                    g = (e, u) => {
                        e.keyCode === n.n.ESCAPE && u();
                    },
                    p = (e) => {
                        g(e, m);
                    },
                    h = (e) => {
                        const u = (u) => g(u, e);
                        return window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u);
                    };
            },
            3908: (e, u, t) => {
                'use strict';
                var n = {};
                t.r(n),
                    t.d(n, {
                        Area: () => qt,
                        Bar: () => Yt,
                        DefaultScroll: () => Vt,
                        Direction: () => Rt,
                        defaultSettings: () => St,
                        useHorizontalScrollApi: () => kt,
                    });
                var r = {};
                t.r(r), t.d(r, { Area: () => mn, Bar: () => cn, Default: () => dn, useVerticalScrollApi: () => Kt });
                var a = t(6179),
                    o = t.n(a);
                const s = (e, u, t) =>
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
                    A = d.height,
                    _ = Object.assign({ width: m, height: A }, E(m, A, l)),
                    F = (0, a.createContext)(_),
                    D = ['children'];
                const B = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, D);
                    const n = (0, a.useContext)(F),
                        r = n.extraLarge,
                        o = n.large,
                        i = n.medium,
                        l = n.small,
                        c = n.extraSmall,
                        E = n.extraLargeWidth,
                        d = n.largeWidth,
                        m = n.mediumWidth,
                        A = n.smallWidth,
                        _ = n.extraSmallWidth,
                        B = n.extraLargeHeight,
                        C = n.largeHeight,
                        g = n.mediumHeight,
                        p = n.smallHeight,
                        h = n.extraSmallHeight,
                        f = { extraLarge: B, large: C, medium: g, small: p, extraSmall: h };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && r) return u;
                        if (t.large && o) return u;
                        if (t.medium && i) return u;
                        if (t.small && l) return u;
                        if (t.extraSmall && c) return u;
                    } else {
                        if (t.extraLargeWidth && E) return s(u, t, f);
                        if (t.largeWidth && d) return s(u, t, f);
                        if (t.mediumWidth && m) return s(u, t, f);
                        if (t.smallWidth && A) return s(u, t, f);
                        if (t.extraSmallWidth && _) return s(u, t, f);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && B) return u;
                            if (t.largeHeight && C) return u;
                            if (t.mediumHeight && g) return u;
                            if (t.smallHeight && p) return u;
                            if (t.extraSmallHeight && h) return u;
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
                (0, a.memo)(B);
                const C = (e) => {
                        const u = (0, a.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    g = ({ children: e }) => {
                        const u = (0, a.useContext)(F),
                            t = (0, a.useState)(u),
                            n = t[0],
                            r = t[1],
                            s = (0, a.useCallback)((e, u) => {
                                const t = i.O.view.pxToRem(e),
                                    n = i.O.view.pxToRem(u);
                                r(Object.assign({ width: t, height: n }, E(t, n, l)));
                            }, []),
                            c = (0, a.useCallback)(() => {
                                const e = i.O.client.getSize('px');
                                s(e.width, e.height);
                            }, [s]);
                        C(() => {
                            i.O.client.events.on('clientResized', s), i.O.client.events.on('self.onScaleUpdated', c);
                        }),
                            (0, a.useEffect)(
                                () => () => {
                                    i.O.client.events.off('clientResized', s),
                                        i.O.client.events.off('self.onScaleUpdated', c);
                                },
                                [s, c],
                            );
                        const d = (0, a.useMemo)(() => Object.assign({}, n), [n]);
                        return o().createElement(F.Provider, { value: d }, e);
                    };
                var p = t(6483),
                    h = t.n(p),
                    f = t(926),
                    v = t.n(f);
                let b, w, y;
                !(function (e) {
                    (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                })(b || (b = {})),
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
                const T = () => {
                        const e = (0, a.useContext)(F),
                            u = e.width,
                            t = e.height,
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return b.ExtraLarge;
                                    case e.large:
                                        return b.Large;
                                    case e.medium:
                                        return b.Medium;
                                    case e.small:
                                        return b.Small;
                                    case e.extraSmall:
                                        return b.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), b.ExtraSmall;
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
                            o = ((e) => {
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
                        return { mediaSize: n, mediaWidth: r, mediaHeight: o, remScreenWidth: u, remScreenHeight: t };
                    },
                    S = ['children', 'className'];
                function x() {
                    return (
                        (x =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        x.apply(this, arguments)
                    );
                }
                const k = {
                        [w.ExtraSmall]: '',
                        [w.Small]: v().SMALL_WIDTH,
                        [w.Medium]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH}`,
                        [w.Large]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH} ${v().LARGE_WIDTH}`,
                        [w.ExtraLarge]: `${v().SMALL_WIDTH} ${v().MEDIUM_WIDTH} ${v().LARGE_WIDTH} ${v().EXTRA_LARGE_WIDTH}`,
                    },
                    L = {
                        [y.ExtraSmall]: '',
                        [y.Small]: v().SMALL_HEIGHT,
                        [y.Medium]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT}`,
                        [y.Large]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT}`,
                        [y.ExtraLarge]: `${v().SMALL_HEIGHT} ${v().MEDIUM_HEIGHT} ${v().LARGE_HEIGHT} ${v().EXTRA_LARGE_HEIGHT}`,
                    },
                    P = {
                        [b.ExtraSmall]: '',
                        [b.Small]: v().SMALL,
                        [b.Medium]: `${v().SMALL} ${v().MEDIUM}`,
                        [b.Large]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE}`,
                        [b.ExtraLarge]: `${v().SMALL} ${v().MEDIUM} ${v().LARGE} ${v().EXTRA_LARGE}`,
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
                            })(e, S);
                        const r = T(),
                            a = r.mediaWidth,
                            s = r.mediaHeight,
                            i = r.mediaSize;
                        return o().createElement('div', x({ className: h()(t, k[a], L[s], P[i]) }, n), u);
                    },
                    M = ['children'];
                const N = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, M);
                    return o().createElement(g, null, o().createElement(O, t, u));
                };
                var I = t(493),
                    H = t.n(I);
                let U, W;
                function G() {}
                !(function (e) {
                    (e.HUNTER = 'hunter'), (e.BOSS = 'boss'), (e.TANK = 'tank');
                })(U || (U = {})),
                    (function (e) {
                        (e.HUNTER = 'hunter'), (e.BOSS = 'boss');
                    })(W || (W = {}));
                function z(e) {
                    return e;
                }
                function $() {
                    return !1;
                }
                console.log;
                var Y = t(9174);
                function j(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return V(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return V(e, u);
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
                function V(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const q = (e) => (0 === e ? window : window.subViews.get(e));
                function K(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, n) => u(null == e ? void 0 : e.value, t, n));
                }
                var X = t(3946);
                const Q = ((e, u) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: n = 'real', options: r, children: s, mocks: l }) {
                                const c = (0, a.useRef)([]),
                                    E = (t, n, r) => {
                                        var a;
                                        const o = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = q,
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
                                                const o = (e) => {
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
                                                        const s = 'string' == typeof a ? `${n}.${a}` : n,
                                                            l = i.O.view.addModelObserver(s, u, !0);
                                                        return r.set(l, t), e && t(o(a)), l;
                                                    },
                                                    readByPath: o,
                                                    createCallback: (e, u) => {
                                                        const t = o(u);
                                                        return (...u) => {
                                                            t(e(...u));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const u = o(e);
                                                        return () => {
                                                            u();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, t = j(r.keys()); !(e = t()).done; ) a(e.value, u);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(n),
                                            s =
                                                'real' === t
                                                    ? o
                                                    : Object.assign({}, o, {
                                                          readByPath:
                                                              null != (a = null == r ? void 0 : r.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === t ? (null == r ? void 0 : r.getter(e)) : s.readByPath(e),
                                            E = (e) => c.current.push(e),
                                            d = e({
                                                mode: t,
                                                readByPath: l,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (e, u) => {
                                                        const n = null != u ? u : l(e),
                                                            r = Y.LO.box(n, { equals: $ });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, Y.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const n = null != u ? u : l(e),
                                                            r = Y.LO.box(n, { equals: $ });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, Y.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const n = l(u);
                                                        if (Array.isArray(e)) {
                                                            const r = e.reduce(
                                                                (e, u) => ((e[u] = Y.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    s.subscribe(
                                                                        (0, Y.aD)((u) => {
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
                                                                o = a.reduce(
                                                                    (e, [u, t]) => ((e[t] = Y.LO.box(n[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    s.subscribe(
                                                                        (0, Y.aD)((e) => {
                                                                            a.forEach(([u, t]) => {
                                                                                o[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: E,
                                            }),
                                            m = { mode: t, model: d, externalModel: s, cleanup: E };
                                        return {
                                            model: d,
                                            controls: 'mocks' === t && r ? r.controls(m) : u(m),
                                            externalModel: s,
                                            mode: t,
                                        };
                                    },
                                    d = (0, a.useRef)(!1),
                                    m = (0, a.useState)(n),
                                    A = m[0],
                                    _ = m[1],
                                    F = (0, a.useState)(() => E(n, r, l)),
                                    D = F[0],
                                    B = F[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        d.current ? B(E(A, r, l)) : (d.current = !0);
                                    }, [l, A, r]),
                                    (0, a.useEffect)(() => {
                                        _(n);
                                    }, [n]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            D.externalModel.dispose(), c.current.forEach((e) => e());
                                        },
                                        [D],
                                    ),
                                    o().createElement(t.Provider, { value: D }, s)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const u = {
                                    root: e.object(),
                                    portalAvailability: e.object('portalAvailability'),
                                    inactivePortalAvailability: e.object('inactivePortalAvailability'),
                                    rentalTank: e.object('rentalTank'),
                                    guaranteedAward: e.object('guaranteedAward'),
                                    guaranteedRewards: e.array('guaranteedRewards.items'),
                                    bossSpecificReward: e.array('bossSpecificRewards.items'),
                                    rewards: e.array('rewards.items'),
                                    collectionReward: e.array('collectionReward.items'),
                                    customizationReward: e.array('customizationReward.items'),
                                    rewardTanks: e.array('rewardTanks.items'),
                                    tanks: e.array('tanks.items'),
                                },
                                t = (0, X.Om)(() => u.portalAvailability.get().lootBoxesCount),
                                n = (0, X.Om)(() => u.portalAvailability.get().attemptPrice),
                                r = (0, X.Om)(() => u.inactivePortalAvailability.get().lootBoxesCount),
                                a = (0, X.Om)(() => (u.root.get().portalType === U.BOSS ? t() : r())),
                                o = (0, X.Om)(() => (u.root.get().portalType === U.HUNTER ? t() : r())),
                                s = (0, X.Om)(() => u.guaranteedAward.get().attemptsCount),
                                i = (0, X.Om)(() => u.guaranteedAward.get().leftAttemptsCount),
                                l = (0, X.Om)(() => n() > t()),
                                c = (0, X.Om)(() => K(u.bossSpecificReward.get(), z), { equals: $ }),
                                E = (0, X.Om)(() => K(u.rewards.get(), z), { equals: $ }),
                                d = (0, X.Om)(() => K(u.guaranteedRewards.get(), z), { equals: $ }),
                                m = (0, X.Om)(() => K(u.collectionReward.get(), z), { equals: $ }),
                                A = (0, X.Om)(() => K(u.customizationReward.get(), z), { equals: $ }),
                                _ = (0, X.Om)(() => K(u.rewardTanks.get(), z), { equals: $ }),
                                F = (0, X.Om)(() => K(u.tanks.get(), z), { equals: $ });
                            return Object.assign({}, u, {
                                computes: {
                                    getAmountActiveLootboxes: t,
                                    getAmountInactiveLootboxes: r,
                                    getAttemptsCount: s,
                                    getLeftAttemptsCount: i,
                                    getControlsDisabled: l,
                                    getAttemptPriceActiveLootboxes: n,
                                    getBossSpecificRewards: c,
                                    getRewards: E,
                                    getGuaranteedRewards: d,
                                    getCollectionReward: m,
                                    getCustomizationReward: A,
                                    getRewardTanks: _,
                                    getTanks: F,
                                    getAmountBossLootboxes: a,
                                    getAmountHarrierLootboxes: o,
                                },
                            });
                        },
                        ({ externalModel: e }) => ({
                            onClose: e.createCallbackNoArgs('onClose'),
                            onBuyButtonClick: e.createCallbackNoArgs('onBuyButtonClick'),
                            onRunPortalClick: e.createCallback(
                                (e) => ({ defaultRunPortalTimes: e }),
                                'onRunPortalClick',
                            ),
                            onAnimationSettingChange: e.createCallbackNoArgs('onAnimationSettingChange'),
                            onUpdateLootbox: e.createCallback((e) => ({ lootBoxType: e }), 'onUpdateLootbox'),
                        }),
                    ),
                    Z = Q[0],
                    J = Q[1];
                var ee = t(5521),
                    ue = t(7491);
                const te = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function ne(e = ee.n.NONE, u = te, t = !1, n = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== ee.n.NONE)
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
                const re = () => {
                    const e = (() => {
                            const e = (0, a.useContext)(F),
                                u = e.small,
                                t = e.medium,
                                n = e.large,
                                r = e.extraLarge,
                                o = r || n,
                                s = o || t;
                            return { isMediaSmall: s || u, isMediaMedium: s, isMediaLarge: o, isMediaExtraLarge: r };
                        })(),
                        u = e.isMediaSmall,
                        t = e.isMediaMedium,
                        n = e.isMediaLarge,
                        r = e.isMediaExtraLarge;
                    return h()(u && 'mediaSmall', t && 'mediaMedium', n && 'mediaLarge', r && 'mediaExtraLarge');
                };
                function ae(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                var oe = t(1281);
                let se;
                function ie(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(se || (se = {}));
                const le = (e) => e.replace(/&nbsp;/g, ' '),
                    ce = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    Ee = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    de = (e, u, t = se.left) => e.split(u).reduce(t === se.left ? ce : Ee, []),
                    me = (() => {
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
                    Ae = ['zh_cn', 'zh_sg', 'zh_tw'],
                    _e = (e, u = se.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (Ae.includes(t)) return me(e);
                        if ('ja' === t) {
                            return (0, oe.D4)()
                                .parse(e)
                                .map((e) => le(e));
                        }
                        return ((e, u = se.left) => {
                            let t = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                r = le(e);
                            return de(r, /( )/, u).forEach((e) => (t = t.concat(de(e, n, se.left)))), t;
                        })(e, u);
                    },
                    Fe = (e) => ie(R.strings.common.percentValue(), { value: e }),
                    De = 'FormatText_base_d0',
                    Be = ({ binding: e, text: u = '', classMix: t, alignment: n = se.left, formatWithBrackets: r }) => {
                        if (null === u) return console.error("FormatText was supplied with 'null'"), null;
                        const s = r && e ? ie(u, e) : u;
                        return o().createElement(
                            a.Fragment,
                            null,
                            s.split('\n').map((u, r) =>
                                o().createElement(
                                    'div',
                                    { className: h()(De, t), key: `${u}-${r}` },
                                    ((e, u, t) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : _e(e, u))))(
                                        u,
                                        n,
                                        e,
                                    ).map((e, u) => o().createElement(a.Fragment, { key: `${u}-${e}` }, e)),
                                ),
                            ),
                        );
                    },
                    Ce = (e = 1) => {
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
                    },
                    ge = [
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
                function pe(e) {
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
                const he = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: ue.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    fe = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            n = e.args,
                            r = e.onMouseEnter,
                            o = e.onMouseLeave,
                            s = e.onMouseDown,
                            i = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            E = e.ignoreMouseClick,
                            d = void 0 !== E && E,
                            m = e.decoratorId,
                            A = void 0 === m ? 0 : m,
                            _ = e.isEnabled,
                            F = void 0 === _ || _,
                            D = e.targetId,
                            B = void 0 === D ? 0 : D,
                            C = e.onShow,
                            g = e.onHide,
                            p = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, ge);
                        const h = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            f = (0, a.useMemo)(() => B || Ce().resId, [B]),
                            v = (0, a.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (he(t, A, { isMouseEvent: !0, on: !0, arguments: pe(n) }, f),
                                    C && C(),
                                    (h.current.isVisible = !0));
                            }, [t, A, n, f, C]),
                            b = (0, a.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const e = h.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (h.current.timeoutId = 0)),
                                        he(t, A, { on: !1 }, f),
                                        h.current.isVisible && g && g(),
                                        (h.current.isVisible = !1);
                                }
                            }, [t, A, f, g]),
                            w = (0, a.useCallback)((e) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(h.current.prevTarget) && b();
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
                                !1 === F && b();
                            }, [F, b]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', b),
                                    () => {
                                        window.removeEventListener('mouseleave', b), b();
                                    }
                                ),
                                [b],
                            );
                        return F
                            ? (0, a.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((y = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((h.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                      r && r(e),
                                                      y && y(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              b(), null == o || o(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === d && b(), null == i || i(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === d && b(), null == s || s(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      p,
                                  ),
                              )
                            : u;
                        var y;
                    },
                    ve = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function be() {
                    return (
                        (be =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        be.apply(this, arguments)
                    );
                }
                const we = R.views.common.tooltip_window.simple_tooltip_content,
                    ye = (e) => {
                        let u = e.children,
                            t = e.body,
                            n = e.header,
                            r = e.note,
                            s = e.alert,
                            i = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, ve);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, i, { body: t, header: n, note: r, alert: s });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [s, t, n, r, i]);
                        return o().createElement(
                            fe,
                            be(
                                {
                                    contentId:
                                        ((E = null == i ? void 0 : i.hasHtmlContent),
                                        E ? we.SimpleTooltipHtmlContent('resId') : we.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var E;
                    },
                    Te = ['children'];
                function Re() {
                    return (
                        (Re =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Re.apply(this, arguments)
                    );
                }
                const Se = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, Te);
                        return o().createElement(
                            fe,
                            Re(
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
                    xe = ['tooltipType'],
                    ke = ['children', 'wrap'];
                function Le(e, u) {
                    if (null == e) return {};
                    var t,
                        n,
                        r = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                    return r;
                }
                let Pe;
                !(function (e) {
                    (e.Simple = 'simple'), (e.Backport = 'backport'), (e.Base = 'base');
                })(Pe || (Pe = {}));
                const Oe = (e) => {
                        e.tooltipType;
                        return Le(e, xe);
                    },
                    Me = (e) => {
                        let u = e.children,
                            t = e.wrap,
                            n = Le(e, ke);
                        const r = t ? o().createElement('div', null, u) : u;
                        return n.tooltipType === Pe.Simple
                            ? o().createElement(ye, Oe(n), r)
                            : ((e) => e.tooltipType === Pe.Backport)(n)
                              ? o().createElement(Se, Oe(n), r)
                              : ((e) => e.tooltipType === Pe.Base)(n)
                                ? o().createElement(fe, Oe(n), r)
                                : u;
                    },
                    Ne = 'BuyButton_base_1e',
                    Ie = 'BuyButton_image_44',
                    He = 'BuyButton_imageClickArea_6b',
                    Ue = 'BuyButton_text_8e',
                    We = 'BuyButton_CNTextWrapper_16',
                    Ge = 'BuyButton_CNText_a9',
                    ze = R.strings.event.WtEventPortals,
                    $e = ({ onBuyButtonClick: e, availableLootBoxesPurchase: u }) => {
                        const t = (0, a.useCallback)(() => {
                                e(), ae('play');
                            }, [e]),
                            n = (0, a.useCallback)(() => {
                                ae('highlight');
                            }, []),
                            r = (0, a.useMemo)(() => ({ number: u }), [u]),
                            s = u >= 0,
                            i = (0, a.useMemo)(
                                () =>
                                    s
                                        ? {
                                              tooltipType: Pe.Base,
                                              contentId:
                                                  R.views.lobby.wt_event.tooltips.WtEventBuyLootBoxesTooltipView(
                                                      'resId',
                                                  ),
                                          }
                                        : { tooltipType: Pe.Simple, body: ze.buyButtonTooltip() },
                                [s],
                            );
                        return o().createElement(
                            Me,
                            i,
                            o().createElement(
                                'div',
                                { className: Ne, onMouseEnter: n, onClick: t },
                                o().createElement(
                                    'div',
                                    { className: Ie },
                                    o().createElement('div', { className: He }),
                                ),
                                o().createElement('div', { className: Ue }, ze.buyButton()),
                                s &&
                                    o().createElement(
                                        'div',
                                        { className: We },
                                        o().createElement(Be, { text: ze.buyButtonCNText(), binding: r, classMix: Ge }),
                                    ),
                            ),
                        );
                    },
                    Ye = {
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
                    je = [
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
                function Ve() {
                    return (
                        (Ve =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ve.apply(this, arguments)
                    );
                }
                class qe extends o().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && ae(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && ae(this.props.soundClick);
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
                            s = e.classNames,
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
                                })(e, je)),
                            m = h()(Ye.base, Ye[`base__${a}`], Ye[`base__${r}`], null == s ? void 0 : s.base),
                            A = h()(Ye.icon, Ye[`icon__${a}`], Ye[`icon__${r}`], null == s ? void 0 : s.icon),
                            _ = h()(Ye.glow, null == s ? void 0 : s.glow),
                            F = h()(Ye.caption, Ye[`caption__${a}`], null == s ? void 0 : s.caption),
                            D = h()(Ye.goto, null == s ? void 0 : s.goto);
                        return o().createElement(
                            'div',
                            Ve(
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
                            'info' !== a && o().createElement('div', { className: Ye.shine }),
                            o().createElement('div', { className: A }, o().createElement('div', { className: _ })),
                            o().createElement('div', { className: F }, u),
                            n && o().createElement('div', { className: D }, n),
                        );
                    }
                }
                qe.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const Ke = 'CloseButton_base_26',
                    Xe = ({ onClose: e }) =>
                        o().createElement(
                            'div',
                            { className: Ke },
                            o().createElement(qe, {
                                caption: R.strings.menu.viewHeader.closeBtn.label(),
                                type: 'close',
                                side: 'right',
                                onClick: e,
                            }),
                        ),
                    Qe = 'BackButton_base_24',
                    Ze = ({ onClick: e, goto: u }) =>
                        o().createElement(
                            'div',
                            { className: Qe },
                            o().createElement(qe, {
                                caption: R.strings.menu.viewHeader.backBtn.label(),
                                type: 'back',
                                side: 'left',
                                onClick: e,
                                goto: u,
                            }),
                        );
                let Je, eu, uu, tu, nu, ru, au, ou;
                function su() {
                    return (
                        (su =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        su.apply(this, arguments)
                    );
                }
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
                })(Je || (Je = {})),
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
                    })(eu || (eu = {})),
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
                    })(uu || (uu = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(tu || (tu = {})),
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
                    })(nu || (nu = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(ru || (ru = {})),
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
                    })(au || (au = {})),
                    (function (e) {
                        (e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background');
                    })(ou || (ou = {}));
                const iu = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const n = o().createElement('div', { className: t }, e);
                        if (u.header || u.body) return o().createElement(ye, u, n);
                        const r = u.contentId;
                        return r ? o().createElement(fe, su({}, u, { contentId: r }), n) : o().createElement(Se, u, n);
                    },
                    lu = ({ format: e, value: u }) => {
                        const t = ((e, u = 'integral') => {
                            let t;
                            t = 'gold' === u ? ue.B3.GOLD : ue.B3.INTEGRAL;
                            return void 0 === e ? '' : ue.Z5.getNumberFormat(e, t);
                        })(u, e);
                        return t ? o().createElement('span', null, t) : null;
                    },
                    cu =
                        (Je.Items,
                        Je.Equipment,
                        Je.Xp,
                        Je.XpFactor,
                        Je.Blueprints,
                        Je.BlueprintsAny,
                        Je.Goodies,
                        Je.Berths,
                        Je.Slots,
                        Je.Tokens,
                        Je.CrewSkins,
                        Je.CrewBooks,
                        Je.Customizations,
                        Je.CreditsFactor,
                        Je.TankmenXp,
                        Je.TankmenXpFactor,
                        Je.FreeXpFactor,
                        Je.BattleToken,
                        Je.PremiumUniversal,
                        Je.NaturalCover,
                        Je.BpCoin,
                        Je.BattlePassSelectToken,
                        Je.BattlaPassFinalAchievement,
                        Je.BattleBadge,
                        Je.BonusX5,
                        Je.CrewBonusX3,
                        Je.NewYearInvoice,
                        Je.EpicSelectToken,
                        Je.WtHunterLootbox,
                        Je.WtBossLootbox,
                        Je.WtProgressPoints,
                        Je.Comp7TokenWeeklyReward,
                        Je.DeluxeGift,
                        Je.BattleBoosterGift,
                        Je.OptionalDevice,
                        Je.Gold,
                        Je.Credits,
                        Je.Crystal,
                        Je.FreeXp,
                        Je.BattlePassPoints,
                        Je.EquipCoin,
                        Je.PremiumPlus,
                        Je.Premium,
                        [uu.Small, uu.Big]),
                    Eu = {
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
                    du = ({
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: n = uu.Big,
                        special: r,
                        value: a,
                        valueType: s,
                        title: i,
                        style: l,
                        className: c,
                        classNames: E,
                        tooltipArgs: d,
                        periodicIconTooltipArgs: m,
                    }) => {
                        const A = ((e, u) => {
                                if (void 0 === u || !cu.includes(e)) return null;
                                switch (u) {
                                    case nu.BATTLE_BOOSTER:
                                    case nu.BATTLE_BOOSTER_REPLACE:
                                        return ru.BATTLE_BOOSTER;
                                }
                            })(n, r),
                            _ = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case nu.BATTLE_BOOSTER:
                                        return au.BATTLE_BOOSTER;
                                    case nu.BATTLE_BOOSTER_REPLACE:
                                        return au.BATTLE_BOOSTER_REPLACE;
                                    case nu.BUILT_IN_EQUIPMENT:
                                        return au.BUILT_IN_EQUIPMENT;
                                    case nu.EQUIPMENT_PLUS:
                                        return au.EQUIPMENT_PLUS;
                                    case nu.EQUIPMENT_TROPHY_BASIC:
                                        return au.EQUIPMENT_TROPHY_BASIC;
                                    case nu.EQUIPMENT_TROPHY_UPGRADED:
                                        return au.EQUIPMENT_TROPHY_UPGRADED;
                                    case nu.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return au.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case nu.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return au.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case nu.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return au.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case nu.PROGRESSION_STYLE_UPGRADED_1:
                                        return au.PROGRESSION_STYLE_UPGRADED_1;
                                    case nu.PROGRESSION_STYLE_UPGRADED_2:
                                        return au.PROGRESSION_STYLE_UPGRADED_2;
                                    case nu.PROGRESSION_STYLE_UPGRADED_3:
                                        return au.PROGRESSION_STYLE_UPGRADED_3;
                                    case nu.PROGRESSION_STYLE_UPGRADED_4:
                                        return au.PROGRESSION_STYLE_UPGRADED_4;
                                    case nu.PROGRESSION_STYLE_UPGRADED_5:
                                        return au.PROGRESSION_STYLE_UPGRADED_5;
                                    case nu.PROGRESSION_STYLE_UPGRADED_6:
                                        return au.PROGRESSION_STYLE_UPGRADED_6;
                                }
                            })(r),
                            F = ((e, u) => {
                                if (void 0 === e) return null;
                                switch (u) {
                                    case tu.MULTI: {
                                        const u = Number(e);
                                        return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                                    }
                                    case tu.CURRENCY:
                                    case tu.NUMBER:
                                        return o().createElement(lu, { format: 'integral', value: Number(e) });
                                    case tu.PREMIUM_PLUS: {
                                        const u = Number(e);
                                        return isNaN(u) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(a, s);
                        return o().createElement(
                            'div',
                            { className: h()(Eu.base, Eu[`base__${n}`], c), style: l },
                            o().createElement(
                                iu,
                                { tooltipArgs: d, className: Eu.tooltipWrapper },
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement(
                                        'div',
                                        { className: h()(Eu.image, null == E ? void 0 : E.image) },
                                        A &&
                                            o().createElement('div', {
                                                className: h()(Eu.highlight, null == E ? void 0 : E.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${A}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            o().createElement('div', {
                                                className: h()(Eu.icon, null == E ? void 0 : E.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        _ &&
                                            o().createElement('div', {
                                                className: h()(Eu.overlay, null == E ? void 0 : E.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${_}_overlay)`,
                                                },
                                            }),
                                    ),
                                    F &&
                                        o().createElement(
                                            'div',
                                            {
                                                className: h()(
                                                    Eu.info,
                                                    Eu[`info__${e}`],
                                                    s === tu.MULTI && Eu.info__multi,
                                                    null == E ? void 0 : E.info,
                                                ),
                                            },
                                            F,
                                        ),
                                    i && o().createElement('div', { className: Eu.title }, i),
                                ),
                            ),
                            t &&
                                o().createElement(
                                    iu,
                                    { tooltipArgs: m },
                                    o().createElement('div', {
                                        className: h()(Eu.timer, null == E ? void 0 : E.periodicIcon),
                                    }),
                                ),
                        );
                    };
                let mu;
                !(function (e) {
                    (e.STYLE_3D = 'randomStyle3d'), (e.STYLE_2D = 'randomStyle2d'), (e.DEFAULT = 'default');
                })(mu || (mu = {}));
                const Au = 'CheckMark_base_05',
                    _u = 'CheckMark_checkMark_67',
                    Fu = ({ children: e, checked: u, classMix: t }) => {
                        const n = h()(Au, t);
                        return o().createElement(
                            'div',
                            { className: n },
                            e,
                            u && o().createElement('div', { className: _u }),
                        );
                    },
                    Du = ({
                        classMix: e,
                        reward: { isCollected: u, icon: t, index: n, tooltipType: r },
                        hasTooltip: s = !0,
                        value: i,
                        valueType: l,
                    }) => {
                        const c = (0, a.useMemo)(() => {
                            if (s)
                                return r === mu.DEFAULT
                                    ? {
                                          contentId:
                                              R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                                  'resId',
                                              ),
                                          args: { tooltipId: n },
                                      }
                                    : {
                                          contentId: R.views.lobby.wt_event.tooltips.WtEventInfoTooltipView('resId'),
                                          args: { tooltipType: r },
                                      };
                        }, [s, n, r]);
                        return o().createElement(
                            Fu,
                            { checked: u, classMix: e },
                            o().createElement(du, {
                                size: uu.Small,
                                image: t || '',
                                name: '',
                                tooltipArgs: c,
                                value: i,
                                valueType: l,
                            }),
                        );
                    },
                    Bu = 'CollectionReward_base_02',
                    Cu = 'CollectionReward_reward_70',
                    gu = 'CollectionReward_info_5a',
                    pu = R.strings.event.WtEventPortals.inside,
                    hu = ({ reward: e, portalType: u }) =>
                        o().createElement(
                            o().Fragment,
                            null,
                            e.map((e, t) => {
                                const n = R.views.lobby.wt_event.tooltips.WtEventInfoTooltipView('resId'),
                                    r = { tooltipType: e.tooltipType },
                                    a = ((e) =>
                                        u === U.HUNTER
                                            ? pu.rewards.hunterCollectionElement()
                                            : e.tooltipType === mu.STYLE_3D
                                              ? pu.rewards.style3d()
                                              : '')(e),
                                    s = e.tooltipType === mu.STYLE_3D,
                                    i = o().createElement(
                                        'div',
                                        { className: Bu },
                                        o().createElement(Du, { reward: e, hasTooltip: !1, classMix: Cu }),
                                        a,
                                        o().createElement('div', { className: s ? gu : '' }),
                                    );
                                return o().createElement(
                                    'div',
                                    { key: t },
                                    o().createElement(fe, { contentId: n, args: r }, i),
                                );
                            }),
                        ),
                    fu = 100,
                    vu = 'Title_base_d5',
                    bu = 'Title_highlight_ca',
                    wu = (0, a.memo)(({ title: e, index: u, value: t = 0 }) => {
                        const n = `${u + 1}. ${e}`;
                        return o().createElement(
                            'div',
                            { className: vu },
                            o().createElement(Be, {
                                text: n,
                                binding: { number: o().createElement('div', { className: bu }, t) },
                            }),
                        );
                    }),
                    yu = 'RewardListItem_base_fb',
                    Tu = 'RewardListItem_base__animation_4b',
                    Ru = 'RewardListItem_base__halfWidth_7e',
                    Su = 'RewardListItem_content_d6',
                    xu = 'RewardListItem_titleWrapper_a9',
                    ku = 'RewardListItem_titlePercentage_88',
                    Lu = 'FirstLaunchReward_base_2e',
                    Pu = 'FirstLaunchReward_info_1e',
                    Ou = R.strings.event.WtEventPortals.inside.firstLaunch,
                    Mu = () => {
                        const e = { header: Ou.tooltip.header(), body: Ou.tooltip.body() };
                        return o().createElement(
                            'div',
                            { className: Lu },
                            o().createElement(ye, e, o().createElement('div', { className: Pu })),
                        );
                    },
                    Nu = ({
                        title: e,
                        halfWidth: u,
                        index: t,
                        children: n,
                        isGuaranteed: r = !1,
                        percentage: s,
                        hasFadeIn: i = !0,
                    }) => {
                        const l = h()(yu, u && Ru, i && Tu),
                            c = (0, a.useMemo)(() => {
                                if (i) return { animationDelay: (t + 2) * fu + 'ms' };
                            }, [t, i]);
                        return o().createElement(
                            'div',
                            { className: l, key: t, style: c },
                            o().createElement(
                                'div',
                                { className: xu },
                                o().createElement(wu, { title: e, index: t, value: r ? Dn : 0 }),
                                o().createElement('div', { className: ku }, s),
                                r && o().createElement(Mu, null),
                            ),
                            o().createElement('div', { className: Su }, n),
                        );
                    },
                    Iu = 'TankRewards_base_48',
                    Hu = 'TankRewards_baseWrapper_ad',
                    Uu = 'TankRewards_tankWrapper_06',
                    Wu = 'TankRewards_tankIcon_15',
                    Gu = 'TankRewards_tankText_71',
                    zu = 'TankRewards_premiumTank_1e',
                    $u = 'TankRewards_premiumTankTextWrapper_9e',
                    Yu = 'TankRewards_premiumTankItem_f6';
                let ju;
                !(function (e) {
                    (e.PRIMARY = 'G171_E77'),
                        (e.SECONDARY = 'Cz14_Skoda_T_56_WT24_3Dst'),
                        (e.TERTIARY = 'G166_LKpz_70_K');
                })(ju || (ju = {}));
                const Vu = R.strings.event.WtEventPortals.inside.rewards,
                    qu = {
                        [ju.PRIMARY]: R.images.gui.maps.icons.wtevent.portals[ju.PRIMARY](),
                        [ju.SECONDARY]: R.images.gui.maps.icons.wtevent.portals[ju.SECONDARY](),
                        [ju.TERTIARY]: R.images.gui.maps.icons.wtevent.portals[ju.TERTIARY](),
                    },
                    Ku = {
                        [ju.PRIMARY]: Vu.primaryTank(),
                        [ju.SECONDARY]: Vu.secondaryTank(),
                        [ju.TERTIARY]: Vu.tertiaryTank(),
                    },
                    Xu = () => {
                        const e = J().model,
                            u = e.computes.getTanks(),
                            t = e.computes.getRewardTanks(),
                            n = (0, a.useMemo)(
                                () => ({
                                    tanks: u.map((e, t) =>
                                        t === u.length - 1
                                            ? o().createElement(
                                                  'div',
                                                  { className: Yu, key: t },
                                                  e.name + R.strings.common.common.dot(),
                                              )
                                            : o().createElement(Be, {
                                                  text: Vu.tanksSeparator(),
                                                  binding: { tank: e.name },
                                                  classMix: Yu,
                                                  key: t,
                                              }),
                                    ),
                                }),
                                [u],
                            );
                        return o().createElement(
                            'div',
                            { className: Iu },
                            o().createElement(
                                'div',
                                { className: Hu },
                                t.map((e, u) =>
                                    o().createElement(
                                        Se,
                                        { args: { tooltipId: e.tooltipId }, key: u },
                                        o().createElement(
                                            'div',
                                            { className: Uu },
                                            o().createElement(
                                                Fu,
                                                { checked: e.isCollected },
                                                o().createElement('div', {
                                                    className: Wu,
                                                    style: { backgroundImage: `url('${qu[e.tankType]}')` },
                                                }),
                                            ),
                                            o().createElement('div', { className: Gu }, Ku[e.tankType]),
                                        ),
                                    ),
                                ),
                                o().createElement(
                                    ye,
                                    { header: Vu.tanksTooltip.header(), body: Vu.tanksTooltip.body() },
                                    o().createElement(
                                        'div',
                                        { className: zu },
                                        o().createElement(
                                            'div',
                                            { className: $u },
                                            o().createElement(Be, { text: Vu.tanks(), binding: n }),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    },
                    Qu = {
                        base: 'RewardList_base_ec',
                        base__hunter: 'RewardList_base__hunter_f0',
                        hidden: 'RewardList_hidden_1f',
                        subtitle: 'RewardList_subtitle_17',
                        'translate-up': 'RewardList_translate-up_14',
                        reward: 'RewardList_reward_4c',
                        scrollArea: 'RewardList_scrollArea_5f',
                        show: 'RewardList_show_3e',
                        'translate-down': 'RewardList_translate-down_96',
                    },
                    Zu = 'TankRent_base_c7',
                    Ju = 'TankRent_tankIcon_01',
                    et = 'TankRent_tankText_96',
                    ut = 'TankRent_header_26',
                    tt = 'TankRent_description_b5';
                var nt = t(8613);
                Date.now(), nt.Ew.getRegionalDateTime, nt.Ew.getFormattedDateTime;
                const rt = (e, u) => e.split('.').reduce((e, u) => e && e[u], u),
                    at = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    ot = (e, u) => (e.length > 0 ? `${e}.${u}` : u),
                    st = (e) =>
                        ((e, u) =>
                            e.split('.').reduce((e, t) => {
                                const n = rt(`${e}.${t}`, window);
                                return at(n) ? u(e, t, n) : `${e}.${t}`;
                            }))(e, (e, u) => `${e}.${u}.value`),
                    it = (e) => {
                        const u = ((e) => {
                                const u = Ce(),
                                    t = u.caller,
                                    n = u.resId,
                                    r = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: r, modelPath: ot(r, e || ''), resId: n };
                            })(),
                            t = u.modelPrefix,
                            n = e.split('.');
                        if (n.length > 0) {
                            const e = [n[0]];
                            return (
                                n.reduce((u, n) => {
                                    const r = rt(ot(t, `${u}.${n}`), window);
                                    return at(r) ? (e.push(r.id), `${u}.${n}.value`) : (e.push(n), `${u}.${n}`);
                                }),
                                e.reduce((e, u) => e + '.' + u)
                            );
                        }
                        return '';
                    },
                    lt = ue.Sw.instance;
                let ct;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(ct || (ct = {}));
                const Et = (e = 'model', u = ct.Deep) => {
                        const t = (0, a.useState)(0),
                            n = (t[0], t[1]),
                            r = (0, a.useMemo)(() => Ce(), []),
                            o = r.caller,
                            s = r.resId,
                            i = (0, a.useMemo)(
                                () => (window.__feature && window.__feature !== o ? `subViews.${o}.${e}` : e),
                                [o, e],
                            ),
                            l = (0, a.useState)(() =>
                                ((e) => {
                                    const u = rt(e, window);
                                    for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                    return at(u) ? u.value : u;
                                })(st(i)),
                            ),
                            c = l[0],
                            E = l[1],
                            d = (0, a.useRef)(-1);
                        return (
                            C(() => {
                                if (
                                    ('boolean' == typeof u &&
                                        ((u = u ? ct.Deep : ct.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    u !== ct.None)
                                ) {
                                    const t = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            u === ct.Deep
                                                ? (e === c && n((e) => e + 1), E(e))
                                                : E(Object.assign([], e));
                                        },
                                        r = it(e);
                                    d.current = lt.addCallback(r, t, s, u === ct.Deep);
                                }
                            }),
                            (0, a.useEffect)(() => {
                                if (u !== ct.None)
                                    return () => {
                                        lt.removeCallback(d.current, s);
                                    };
                            }, [s, u]),
                            c
                        );
                    },
                    dt = (ue.Sw.instance, {});
                const mt = R.strings.event.WtEventPortals.inside,
                    At = (function (e, u, t, n = ct.Deep) {
                        const r = (r) => {
                            const a = r.path || u || void 0,
                                s = Et(a, (a && dt[a]) || !1 ? ct.None : n),
                                i = Object.assign({}, t(s, r), r);
                            return o().createElement(e, i);
                        };
                        var a;
                        return (r.displayName = `WithModel(${((a = e), a.displayName || a.name || 'Component')})`), r;
                    })(
                        (e) =>
                            o().createElement(
                                Se,
                                { args: { tooltipId: e.index } },
                                o().createElement(
                                    'div',
                                    { className: Zu },
                                    o().createElement('div', {
                                        className: Ju,
                                        style: { backgroundImage: `url('${e.icon}')` },
                                    }),
                                    o().createElement(
                                        'div',
                                        { className: et },
                                        o().createElement(Be, { classMix: ut, text: mt.rent.header() }),
                                        o().createElement(Be, { classMix: tt, text: mt.rent.description() }),
                                    ),
                                ),
                            ),
                        'model.rentalTank',
                        (e, u) => Object.assign({}, u, e),
                    ),
                    _t = 'CustomizationReward_base_47',
                    Ft = 'CustomizationReward_reward_ef',
                    Dt = 'CustomizationReward_description_03',
                    Bt = R.strings.event.WtEventPortals.inside,
                    Ct = ({ reward: e }) =>
                        o().createElement(
                            'div',
                            { className: _t },
                            e.map((e, u) => o().createElement(Du, { classMix: Ft, key: u, reward: e })),
                            o().createElement('div', { className: Dt }, Bt.rewards.hunterCollectionElement()),
                        ),
                    gt = (e) => {
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
                    pt = (e, u, t) => (t < e ? e : t > u ? u : t),
                    ht = [];
                function ft(e) {
                    const u = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, u.current)(...e), ht)
                    );
                }
                function vt(e, u, t = []) {
                    const n = (0, a.useRef)(0),
                        r = (0, a.useCallback)(() => window.clearInterval(n.current), t || []);
                    (0, a.useEffect)(() => r, [r]);
                    const o = (null != t ? t : []).concat([u]);
                    return [
                        (0, a.useCallback)((t) => {
                            (n.current = window.setInterval(() => e(t, !0), u)), e(t, !1);
                        }, o),
                        r,
                    ];
                }
                function bt(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return wt(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return wt(e, u);
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
                function wt(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                function yt(e, u, t) {
                    const n = (0, a.useMemo)(
                        () =>
                            (function (e, u, t, n) {
                                let r,
                                    a = !1,
                                    o = 0;
                                function s() {
                                    r && clearTimeout(r);
                                }
                                function i(...i) {
                                    const l = this,
                                        c = Date.now() - o;
                                    function E() {
                                        (o = Date.now()), t.apply(l, i);
                                    }
                                    a ||
                                        (n && !r && E(),
                                        s(),
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
                                        s(), (a = !0);
                                    }),
                                    i
                                );
                            })(t, e),
                        u,
                    );
                    return (0, a.useEffect)(() => n.cancel, [n]), n;
                }
                var Tt = t(7030);
                let Rt;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(Rt || (Rt = {}));
                const St = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    xt = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: n,
                        getWrapperSize: r,
                        triggerMouseMoveOnUpdate: o = !1,
                    }) => {
                        const s = (e, t) => {
                            const n = u(e),
                                r = n[0],
                                a = n[1];
                            return a <= r ? 0 : pt(r, a, t);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                E = void 0 === c ? St : c,
                                d = (0, a.useRef)(null),
                                m = (0, a.useRef)(null),
                                A = (() => {
                                    const e = (0, a.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        n = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        r = (e, ...t) => {
                                            for (var n, r = bt(u(e).values()); !(n = r()).done; ) (0, n.value)(...t);
                                        };
                                    return (0, a.useMemo)(() => ({ on: t, off: n, trigger: r }), []);
                                })(),
                                _ = yt(
                                    () => {
                                        i.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                F = (0, Tt.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = d.current;
                                        u && (t(u, e), A.trigger('change', e), o && _());
                                    },
                                    onRest: (e) => A.trigger('rest', e),
                                    onStart: (e) => A.trigger('start', e),
                                    onPause: (e) => A.trigger('pause', e),
                                })),
                                D = F[0],
                                B = F[1],
                                C = (0, a.useCallback)(
                                    (e, u, t) => {
                                        var n;
                                        const r = D.scrollPosition.get(),
                                            a = (null != (n = D.scrollPosition.goal) ? n : 0) - r;
                                        return s(e, u * t + a + r);
                                    },
                                    [D.scrollPosition],
                                ),
                                g = (0, a.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const n = d.current;
                                        n &&
                                            B.start({
                                                scrollPosition: s(n, e),
                                                immediate: u,
                                                reset: t,
                                                config: E.animationConfig,
                                                from: { scrollPosition: s(n, D.scrollPosition.get()) },
                                            });
                                    },
                                    [B, E.animationConfig, D.scrollPosition],
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
                                            a = C(u, e, n);
                                        g(a);
                                    },
                                    [g, C, E.step],
                                ),
                                h = (0, a.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && p(n(e)),
                                            d.current && A.trigger('mouseWheel', e, D.scrollPosition, u(d.current));
                                    },
                                    [D.scrollPosition, p, A],
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
                                        gt(() => {
                                            const e = d.current;
                                            e &&
                                                (g(s(e, D.scrollPosition.goal), { immediate: !0 }),
                                                A.trigger('resizeHandled'));
                                        }),
                                    [g, D.scrollPosition.goal],
                                ),
                                v = ft(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const u = s(e, D.scrollPosition.goal);
                                    u !== D.scrollPosition.goal && g(u, { immediate: !0 }),
                                        A.trigger('recalculateContent');
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
                                    clampPosition: s,
                                    handleMouseWheel: h,
                                    applyScroll: g,
                                    applyStepTo: p,
                                    contentRef: d,
                                    wrapperRef: m,
                                    scrollPosition: B,
                                    animationScroll: D,
                                    recalculateContent: v,
                                    events: { on: A.on, off: A.off },
                                }),
                                [D.scrollPosition, g, p, A.off, A.on, v, h, B, E.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    kt = xt({
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
                        getDirection: (e) => (e.deltaY > 1 ? Rt.Next : Rt.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    Lt = 'HorizontalBar_base_49',
                    Pt = 'HorizontalBar_base__nonActive_82',
                    Ot = 'HorizontalBar_leftButton_5f',
                    Mt = 'HorizontalBar_rightButton_03',
                    Nt = 'HorizontalBar_track_0d',
                    It = 'HorizontalBar_thumb_fd',
                    Ht = 'HorizontalBar_rail_32',
                    Ut = 'disable',
                    Wt = { pending: !1, offset: 0 },
                    Gt = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    zt = () => {},
                    $t = (e, u) => Math.max(20, e.offsetWidth * u),
                    Yt = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = Gt, onDrag: n = zt }) => {
                        const r = (0, a.useRef)(null),
                            s = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            E = (0, a.useRef)(null),
                            d = e.stepTimeout || 100,
                            m = (0, a.useState)(Wt),
                            A = m[0],
                            _ = m[1],
                            F = (0, a.useCallback)(
                                (e) => {
                                    _(e),
                                        E.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: E.current });
                                },
                                [n],
                            ),
                            D = () => {
                                const u = c.current,
                                    t = E.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, n / r),
                                    i = pt(0, 1, a / (r - n)),
                                    d = (u.offsetWidth - $t(u, o)) * i;
                                (t.style.transform = `translateX(${0 | d}px)`),
                                    ((e) => {
                                        if (s.current && l.current && c.current && E.current) {
                                            if (0 === e)
                                                return s.current.classList.add(Ut), void l.current.classList.remove(Ut);
                                            if (
                                                ((u = c.current),
                                                (t = E.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return s.current.classList.remove(Ut), void l.current.classList.add(Ut);
                                            var u, t;
                                            s.current.classList.remove(Ut), l.current.classList.remove(Ut);
                                        }
                                    })(d);
                            },
                            B = ft(() => {
                                (() => {
                                    const u = E.current,
                                        t = c.current,
                                        n = e.getWrapperSize(),
                                        a = e.getContainerSize();
                                    if (!(a && u && n && t)) return;
                                    const o = Math.min(1, n / a);
                                    (u.style.width = `${$t(t, o)}px`),
                                        (u.style.display = 'flex'),
                                        r.current &&
                                            (1 === o ? r.current.classList.add(Pt) : r.current.classList.remove(Pt));
                                })(),
                                    D();
                            });
                        (0, a.useEffect)(() => gt(B)),
                            (0, a.useEffect)(
                                () =>
                                    gt(() => {
                                        const u = () => {
                                            D();
                                        };
                                        let t = zt;
                                        const n = () => {
                                            t(), (t = gt(B));
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
                                    }),
                                [e],
                            ),
                            (0, a.useEffect)(() => {
                                if (!A.pending) return;
                                const u = i.O.client.events.mouse.move(([u, t]) => {
                                        var r;
                                        const a = e.contentRef.current,
                                            o = e.wrapperRef.current;
                                        if (!a || !o) return;
                                        const s = c.current,
                                            i = E.current;
                                        if (!s || !i) return;
                                        if ('inside' === t && u.clientX < 0) return;
                                        const l = u.clientX - A.offset - s.getBoundingClientRect().x,
                                            d = (l / s.offsetWidth) * (null != (r = e.getContainerSize()) ? r : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(a, d),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: i, thumbOffset: l, contentOffset: d });
                                    }),
                                    t = i.O.client.events.mouse.up(() => {
                                        u(), F(Wt);
                                    });
                                return () => {
                                    u(), t();
                                };
                            }, [e, A.offset, A.pending, n, F]);
                        const C = vt((u) => e.applyStepTo(u), d, [e]),
                            g = C[0],
                            p = C[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', p, !0),
                                () => document.removeEventListener('mouseup', p, !0)
                            ),
                            [p],
                        );
                        const f = (e) => {
                            e.target.classList.contains(Ut) || ae('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: h()(Lt, u.base), ref: r, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: h()(Ot, u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ut) || 0 !== e.button || (ae('play'), g(Rt.Next));
                                },
                                onMouseUp: p,
                                ref: s,
                                onMouseEnter: f,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: h()(Nt, u.track),
                                    onMouseDown: (u) => {
                                        const n = E.current;
                                        if (n && 0 === u.button)
                                            if ((ae('play'), u.target === n))
                                                F({ pending: !0, offset: u.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((u) => {
                                                    const n = E.current,
                                                        r = e.contentRef.current;
                                                    if (!n || !r) return;
                                                    const a = t(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + a * u);
                                                })(u.screenX > n.getBoundingClientRect().x ? Rt.Prev : Rt.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: f,
                                },
                                o().createElement('div', { ref: E, className: h()(It, u.thumb) }),
                                o().createElement('div', { className: h()(Ht, u.rail) }),
                            ),
                            o().createElement('div', {
                                className: h()(Mt, u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Ut) || 0 !== e.button || (ae('play'), g(Rt.Prev));
                                },
                                onMouseUp: p,
                                ref: l,
                                onMouseEnter: f,
                            }),
                        );
                    }),
                    jt = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Vt = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        classNames: s,
                        scrollClassName: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const E = (0, a.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: h()(jt.base, e.base) });
                            }, [n]),
                            d = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return o().createElement(
                            'div',
                            { className: h()(jt.defaultScroll, t), onWheel: u.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: h()(jt.defaultScrollArea, r) },
                                o().createElement(qt, { className: i, api: d, classNames: s }, e),
                            ),
                            o().createElement(Yt, { getStepByRailClick: l, api: u, onDrag: c, classNames: E }),
                        );
                    },
                    qt = ({ api: e, className: u, classNames: t, children: n }) => (
                        (0, a.useEffect)(() => gt(e.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: h()(jt.base, u) },
                            o().createElement(
                                'div',
                                {
                                    className: h()(jt.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                o().createElement(
                                    'div',
                                    { className: h()(jt.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                (qt.Bar = Yt), (qt.Default = Vt);
                const Kt = xt({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Rt.Next : Rt.Prev),
                    }),
                    Xt = 'VerticalBar_base_f3',
                    Qt = 'VerticalBar_base__nonActive_42',
                    Zt = 'VerticalBar_topButton_d7',
                    Jt = 'VerticalBar_bottomButton_06',
                    en = 'VerticalBar_track_df',
                    un = 'VerticalBar_thumb_32',
                    tn = 'VerticalBar_rail_43',
                    nn = 'disable',
                    rn = () => {},
                    an = { pending: !1, offset: 0 },
                    on = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    sn = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    ln = (e, u) => Math.max(20, e.offsetHeight * u),
                    cn = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = on, onDrag: n = rn }) => {
                        const r = (0, a.useRef)(null),
                            s = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            E = (0, a.useRef)(null),
                            d = e.stepTimeout || 100,
                            m = (0, a.useState)(an),
                            A = m[0],
                            _ = m[1],
                            F = (0, a.useCallback)(
                                (e) => {
                                    _(e),
                                        E.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: E.current });
                                },
                                [n],
                            ),
                            D = ft(() => {
                                const u = E.current,
                                    t = c.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && a && u && t)) return;
                                const o = Math.min(1, n / a);
                                return (
                                    (u.style.height = `${ln(t, o)}px`),
                                    (u.style.display = 'flex'),
                                    r.current &&
                                        (1 === o ? r.current.classList.add(Qt) : r.current.classList.remove(Qt)),
                                    o
                                );
                            }),
                            B = ft(() => {
                                const u = c.current,
                                    t = E.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    o = Math.min(1, n / r),
                                    i = pt(0, 1, a / (r - n)),
                                    d = (u.offsetHeight - ln(u, o)) * i;
                                (t.style.transform = `translateY(${0 | d}px)`),
                                    ((e) => {
                                        if (s.current && l.current && c.current && E.current) {
                                            if (0 === Math.round(e))
                                                return s.current.classList.add(nn), void l.current.classList.remove(nn);
                                            if (
                                                ((u = c.current),
                                                (t = E.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return s.current.classList.remove(nn), void l.current.classList.add(nn);
                                            var u, t;
                                            s.current.classList.remove(nn), l.current.classList.remove(nn);
                                        }
                                    })(d);
                            }),
                            C = ft(() => {
                                sn(e, () => {
                                    D(), B();
                                });
                            });
                        (0, a.useEffect)(() => gt(C)),
                            (0, a.useEffect)(() => {
                                const u = () => {
                                    sn(e, () => {
                                        B();
                                    });
                                };
                                let t = rn;
                                const n = () => {
                                    t(), (t = gt(C));
                                };
                                return (
                                    e.events.on('recalculateContent', C),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        t(),
                                            e.events.off('recalculateContent', C),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', n);
                                    }
                                );
                            }, [e]),
                            (0, a.useEffect)(() => {
                                if (!A.pending) return;
                                const u = i.O.client.events.mouse.up(() => {
                                        F(an);
                                    }),
                                    t = i.O.client.events.mouse.move(([u]) => {
                                        sn(e, (t) => {
                                            const r = c.current,
                                                a = E.current,
                                                o = e.getContainerSize();
                                            if (!r || !a || !o) return;
                                            const s = u.screenY - A.offset - r.getBoundingClientRect().y,
                                                i = (s / r.offsetHeight) * o;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: a, thumbOffset: s, contentOffset: i });
                                        });
                                    });
                                return () => {
                                    u(), t();
                                };
                            }, [e, A.offset, A.pending, n, F]);
                        const g = vt((u) => e.applyStepTo(u), d, [e]),
                            p = g[0],
                            f = g[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', f, !0),
                                () => document.removeEventListener('mouseup', f, !0)
                            ),
                            [f],
                        );
                        const v = (e) => {
                            e.target.classList.contains(nn) || ae('highlight');
                        };
                        return o().createElement(
                            'div',
                            { className: h()(Xt, u.base), ref: r, onWheel: e.handleMouseWheel },
                            o().createElement('div', {
                                className: h()(Zt, u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(nn) || 0 !== e.button || (ae('play'), p(Rt.Next));
                                },
                                ref: s,
                                onMouseEnter: v,
                            }),
                            o().createElement(
                                'div',
                                {
                                    className: h()(en, u.track),
                                    onMouseDown: (u) => {
                                        const n = E.current;
                                        if (n && 0 === u.button)
                                            if ((ae('play'), u.target === n))
                                                F({ pending: !0, offset: u.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((u) => {
                                                    E.current &&
                                                        sn(e, (n) => {
                                                            if (!n) return;
                                                            const r = t(e),
                                                                a = e.clampPosition(n, n.scrollTop + r * u);
                                                            e.applyScroll(a);
                                                        });
                                                })(u.screenY > n.getBoundingClientRect().y ? Rt.Prev : Rt.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: v,
                                },
                                o().createElement('div', { ref: E, className: h()(un, u.thumb) }),
                                o().createElement('div', { className: h()(tn, u.rail) }),
                            ),
                            o().createElement('div', {
                                className: h()(Jt, u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(nn) || 0 !== e.button || (ae('play'), p(Rt.Prev));
                                },
                                onMouseUp: f,
                                ref: l,
                                onMouseEnter: v,
                            }),
                        );
                    }),
                    En = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    dn = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        scrollClassName: s,
                        scrollClassNames: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const E = (0, a.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: h()(En.base, e.base) });
                            }, [n]),
                            d = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return o().createElement(
                            'div',
                            { className: h()(En.defaultScroll, t), onWheel: u.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: h()(En.area, r) },
                                o().createElement(mn, { className: s, classNames: i, api: d }, e),
                            ),
                            o().createElement(cn, { getStepByRailClick: l, api: u, onDrag: c, classNames: E }),
                        );
                    },
                    mn = ({ className: e, classNames: u, children: t, api: n }) => (
                        (0, a.useEffect)(() => gt(n.recalculateContent)),
                        o().createElement(
                            'div',
                            { className: h()(En.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            o().createElement(
                                'div',
                                { className: h()(En.content, null == u ? void 0 : u.content), ref: n.contentRef },
                                t,
                            ),
                        )
                    );
                mn.Default = dn;
                const An = { Vertical: r, Horizontal: n };
                function _n() {
                    return (
                        (_n =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        _n.apply(this, arguments)
                    );
                }
                const Fn = R.strings.event.WtEventPortals.inside,
                    Dn = 100,
                    Bn = ({ portalType: e }) => {
                        const u = J().model,
                            t = (0, a.useState)(!0),
                            n = t[0],
                            r = t[1],
                            s = (0, a.useRef)(!1),
                            i = u.computes.getRewards(),
                            l = u.computes.getCollectionReward(),
                            c = u.computes.getCustomizationReward(),
                            E = u.computes.getBossSpecificRewards(),
                            d = u.computes.getGuaranteedRewards();
                        (0, a.useEffect)(() => {
                            s.current && r(!1), (s.current = !0);
                        }, [e]);
                        const m = u.root.get(),
                            A = m.guaranteedRewadProbability,
                            _ = m.highRewardProbability,
                            F = m.mediumRewardProbability,
                            D = m.tankRewardProbability,
                            B = m.rentalRewardProbability,
                            C = Kt(),
                            g = h()(Qu.base, e === U.HUNTER && Qu.base__hunter),
                            p = (0, a.useMemo)(() => {
                                const u = {
                                        title: Fn.guaranteedProbability(),
                                        isGuaranteed: !0,
                                        percentage: Fe(Dn),
                                        children: E.map((e, u) =>
                                            o().createElement(Du, {
                                                classMix: Qu.reward,
                                                key: u,
                                                reward: e,
                                                value: e.amount.toString(),
                                                valueType: tu.CURRENCY,
                                            }),
                                        ),
                                    },
                                    t = {
                                        title: Fn.probability(),
                                        percentage: Fe(A),
                                        children: d.map((e, u) =>
                                            o().createElement(
                                                Du,
                                                _n(
                                                    { classMix: Qu.reward, key: u, reward: e },
                                                    e.amount > 0 && { value: e.amount.toString() },
                                                    { valueType: tu.CURRENCY },
                                                ),
                                            ),
                                        ),
                                    },
                                    r = {
                                        title: Fn.probability(),
                                        percentage: Fe(_),
                                        children: i.map((e, u) =>
                                            o().createElement(
                                                Du,
                                                _n(
                                                    { classMix: Qu.reward, key: u, reward: e },
                                                    e.amount > 0 && { value: e.amount.toString() },
                                                    { valueType: tu.CURRENCY },
                                                ),
                                            ),
                                        ),
                                    };
                                return {
                                    [U.HUNTER]: () => [
                                        r,
                                        {
                                            title: Fn.probability(),
                                            percentage: Fe(F),
                                            children: o().createElement(Ct, { reward: c }),
                                            halfWidth: !0,
                                        },
                                    ],
                                    [U.BOSS]: () => [
                                        u,
                                        t,
                                        r,
                                        {
                                            title: Fn.probability(),
                                            percentage: Fe(F),
                                            children: o().createElement(hu, { reward: l, portalType: e }),
                                            halfWidth: !0,
                                        },
                                        {
                                            title: Fn.probability(),
                                            percentage: Fe(D),
                                            children: o().createElement(Xu, null),
                                        },
                                        {
                                            title: Fn.probabilityRental(),
                                            percentage: Fe(B),
                                            children: o().createElement(At, null),
                                        },
                                    ],
                                }
                                    [e]()
                                    .map((e, u) =>
                                        o().createElement(
                                            Nu,
                                            _n({}, e, { key: u, index: u, isGuaranteed: e.isGuaranteed, hasFadeIn: n }),
                                        ),
                                    );
                            }, [d, l, c, e, i, _, F, E, D, B, n, A]);
                        return o().createElement(
                            An.Vertical.Area.Default,
                            { api: C, className: Qu.scrollArea, barClassNames: { base: Qu.scrollBarPosition } },
                            o().createElement(
                                'div',
                                { className: g },
                                o().createElement(
                                    'div',
                                    { className: Qu.subtitle },
                                    e === U.HUNTER ? Fn.subtitle.harrier() : Fn.subtitle.engineer(),
                                ),
                                p,
                            ),
                        );
                    },
                    Cn = 'LootBoxesCount_base_02',
                    gn = 'LootBoxesCount_valueWrapper_f3',
                    pn = 'LootBoxesCount_value_da',
                    hn = 'LootBoxesCount_value__hunter_49',
                    fn = R.strings.event.WtEventPortals,
                    vn = ({ type: e, lootBoxesCount: u, animationDelayStepsCount: t = 0 }) => {
                        const n = e === W.HUNTER,
                            r = (0, a.useMemo)(() => ({ isHunterLootBox: n }), [n]),
                            s = (0, a.useMemo)(
                                () => ({
                                    number: o().createElement(
                                        fe,
                                        {
                                            contentId:
                                                R.views.lobby.wt_event.tooltips.WtEventLootBoxTooltipView('resId'),
                                            args: r,
                                        },
                                        o().createElement(
                                            'div',
                                            { className: gn },
                                            o().createElement('div', { className: h()(pn, n && hn) }),
                                            u,
                                        ),
                                    ),
                                }),
                                [n, r, u],
                            ),
                            i = (0, a.useMemo)(() => ({ animationDelay: t * fu + 'ms' }), [t]);
                        return o().createElement(
                            'div',
                            { className: Cn, style: i },
                            0 === u
                                ? fn.inside.currentKeysAmountIs0[e]()
                                : o().createElement(Be, { text: fn.inside.currentKeysAmount[e](), binding: s }),
                        );
                    },
                    bn = {
                        base: 'AttemptsLeft_base_83',
                        show: 'AttemptsLeft_show_79',
                        iconContainer: 'AttemptsLeft_iconContainer_2c',
                        highlight: 'AttemptsLeft_highlight_66',
                        'translate-down': 'AttemptsLeft_translate-down_82',
                        'translate-up': 'AttemptsLeft_translate-up_31',
                    },
                    wn = R.strings.event.WtEventPortals,
                    yn = R.strings.event.portalAward,
                    Tn = ({
                        leftAttemptsCount: e,
                        animationDelayStepsCount: u = 0,
                        displayText: t = wn.boss.left(),
                        isTextChangable: n = !0,
                        isBossLootBox: r,
                    }) => {
                        const s = n && 1 === e,
                            i = (0, a.useMemo)(
                                () => ({
                                    attemptsCount: o().createElement('div', { className: bn.highlight }, e),
                                    leftAttemptsCount: o().createElement('div', { className: bn.highlight }, e),
                                }),
                                [e],
                            ),
                            l = (0, a.useMemo)(() => ({ animationDelay: u * fu + 'ms' }), [u]);
                        return void 0 === r
                            ? o().createElement(
                                  fe,
                                  { contentId: R.views.lobby.wt_event.tooltips.WtGuaranteedRewardTooltipView('resId') },
                                  o().createElement(
                                      'div',
                                      { style: l, className: bn.base },
                                      s
                                          ? o().createElement('div', { className: bn.attemptsLeft }, wn.boss.oneLeft())
                                          : o().createElement(Be, { text: t, binding: i, classMix: bn.attemptsLeft }),
                                      o().createElement('div', { className: bn.iconContainer }),
                                  ),
                              )
                            : o().createElement(
                                  ye,
                                  {
                                      header: yn.reRollTooltipHeader(),
                                      body: r ? yn.reRollTooltipBossBody() : yn.reRollTooltipHunterBody(),
                                  },
                                  o().createElement(
                                      'div',
                                      { style: l, className: bn.base },
                                      s
                                          ? o().createElement('div', { className: bn.attemptsLeft }, wn.boss.oneLeft())
                                          : o().createElement(Be, { text: t, binding: i, classMix: bn.attemptsLeft }),
                                      o().createElement('div', { className: bn.iconContainer }),
                                  ),
                              );
                    },
                    Rn = {
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
                let Sn, xn;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(Sn || (Sn = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(xn || (xn = {}));
                const kn = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: n,
                    disabled: r,
                    mixClass: s,
                    soundHover: i,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: E,
                    onMouseDown: d,
                    onMouseUp: m,
                    onMouseLeave: A,
                    onClick: _,
                }) => {
                    const F = (0, a.useRef)(null),
                        D = (0, a.useState)(t),
                        B = D[0],
                        C = D[1],
                        g = (0, a.useState)(!1),
                        p = g[0],
                        f = g[1];
                    return (
                        (0, a.useEffect)(() => {
                            function e(e) {
                                B && null !== F.current && !F.current.contains(e.target) && C(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [B]),
                        (0, a.useEffect)(() => {
                            C(t);
                        }, [t]),
                        o().createElement(
                            'div',
                            {
                                ref: F,
                                className: h()(
                                    Rn.base,
                                    Rn[`base__${n}`],
                                    r && Rn.base__disabled,
                                    u && Rn[`base__${u}`],
                                    B && Rn.base__focus,
                                    p && Rn.base__highlightActive,
                                    s,
                                ),
                                onMouseEnter: function (e) {
                                    r || (null !== i && ae(i), c && c(e));
                                },
                                onMouseMove: function (e) {
                                    E && E(e);
                                },
                                onMouseUp: function (e) {
                                    r || (m && m(e), f(!1));
                                },
                                onMouseDown: function (e) {
                                    r ||
                                        (null !== l && ae(l),
                                        d && d(e),
                                        t && (r || (F.current && (F.current.focus(), C(!0)))),
                                        f(!0));
                                },
                                onMouseLeave: function (e) {
                                    r || (A && A(e), f(!1));
                                },
                                onClick: function (e) {
                                    r || (_ && _(e));
                                },
                            },
                            n !== Sn.ghost &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: Rn.back }),
                                    o().createElement('span', { className: Rn.texture }),
                                ),
                            o().createElement(
                                'span',
                                { className: h()(Rn.state, Rn.state__default) },
                                o().createElement('span', { className: Rn.stateDisabled }),
                                o().createElement('span', { className: Rn.stateHighlightHover }),
                                o().createElement('span', { className: Rn.stateHighlightActive }),
                            ),
                            o().createElement(
                                'span',
                                { className: Rn.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                kn.defaultProps = { type: Sn.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Ln = kn,
                    Pn = 'Footer_base_f4',
                    On = 'Footer_gradient_5e',
                    Mn = 'Footer_controlsSection_79',
                    Nn = 'Footer_runPrice_cd',
                    In = 'Footer_base__hunter_7d',
                    Hn = 'Footer_runPortalButton_cc';
                var Un = t(3403);
                const Wn = R.strings.event.WtEventPortals,
                    Gn = (e) => {
                        switch (e) {
                            case U.HUNTER:
                            case U.BOSS:
                                return jr[e];
                            default:
                                return 0;
                        }
                    },
                    zn = (0, Un.Pi)(({ lootBoxType: e }) => {
                        const u = J(),
                            t = u.model,
                            n = u.controls,
                            r = t.root.get(),
                            s = r.isBoxesEnabled,
                            i = r.portalType,
                            l = r.defaultRunPortalTimes,
                            c = n.onRunPortalClick,
                            E = (0, a.useState)(!0),
                            d = E[0],
                            m = E[1],
                            A = (0, a.useRef)(!1),
                            _ = t.guaranteedAward.get().isIgnored,
                            F = t.computes.getAttemptPriceActiveLootboxes(),
                            D = t.computes.getAmountActiveLootboxes(),
                            B = (0, a.useCallback)(() => {
                                c(l), ae(R.sounds.ev_white_tiger_hangar_lootbox_portals_launch());
                            }, [c, l]),
                            C = (0, a.useMemo)(() => ({ isHunterLootBox: e === W.HUNTER }), [e]),
                            g = (0, a.useMemo)(() => ({ animationDelay: Gn(i) * fu + 'ms' }), [i]),
                            p = h()(Pn, e === W.HUNTER && In);
                        return (
                            (0, a.useEffect)(() => {
                                A.current && m(!1), (A.current = !0);
                            }, [i]),
                            o().createElement(
                                'div',
                                { className: p },
                                s &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement('div', { className: On }),
                                        i === U.BOSS &&
                                            o().createElement(Tn, {
                                                animationDelayStepsCount: d ? Yr : 0,
                                                displayText: _ ? Wn.boss.notGuaranteed() : void 0,
                                                attemptsCount: _ ? void 0 : t.computes.getAttemptsCount(),
                                                leftAttemptsCount: _ ? void 0 : t.computes.getLeftAttemptsCount(),
                                            }),
                                        o().createElement(
                                            'div',
                                            { className: Mn, style: g },
                                            o().createElement(
                                                fe,
                                                {
                                                    contentId:
                                                        R.views.lobby.wt_event.tooltips.WtEventLootBoxTooltipView(
                                                            'resId',
                                                        ),
                                                    args: C,
                                                },
                                                o().createElement('div', { className: Nn }, l * F),
                                            ),
                                            o().createElement(
                                                Ln,
                                                {
                                                    type: 'main',
                                                    onClick: B,
                                                    mixClass: Hn,
                                                    disabled: t.computes.getControlsDisabled(),
                                                },
                                                Wn.inside.buttonRunPortal(),
                                            ),
                                        ),
                                        o().createElement(vn, {
                                            type: e,
                                            lootBoxesCount: D,
                                            animationDelayStepsCount: Gn(i),
                                        }),
                                    ),
                            )
                        );
                    }),
                    $n = 'App_base_81',
                    Yn = 'App_header_6a',
                    jn = 'App_rewards_bd',
                    Vn = 'App_footer_6f',
                    qn = 'App_gradient_23',
                    Kn = 'App_title_60',
                    Xn = 'App_errorHint_f1',
                    Qn = 'App_lockboxWrapper_5f',
                    Zn = 'App_lockboxItem_8d',
                    Jn = 'LootBoxDisabledWarning_basePortal_96',
                    er = 'LootBoxDisabledWarning_wrapper_66',
                    ur = 'LootBoxDisabledWarning_hintIcon_96',
                    tr = 'LootBoxDisabledWarning_textWrapper_07',
                    nr = R.strings.event.WtEventPortals,
                    rr = ({ animationDelayStepsCount: e = 1 }) => {
                        const u = (0, a.useMemo)(() => ({ animationDelay: e * fu + 'ms' }), [e]);
                        return o().createElement(
                            'div',
                            { className: Jn, style: u },
                            o().createElement(
                                'div',
                                { className: er },
                                o().createElement('div', { className: ur }),
                                o().createElement('div', { className: tr }, nr.warning()),
                            ),
                        );
                    },
                    ar = 'DelayedAnimationWrapper_base_e3',
                    or = ({ animationDelayStepsCount: e = 1, children: u }) =>
                        o().createElement('div', { className: ar, style: { animationDelay: e * fu + 'ms' } }, u);
                let sr, ir, lr, cr;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(sr || (sr = {})),
                    (function (e) {
                        (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                    })(ir || (ir = {})),
                    (function (e) {
                        (e.primary = 'primary'), (e.main = 'main');
                    })(lr || (lr = {})),
                    (function (e) {
                        (e.Center = 'center'), (e.Bottom = 'bottom');
                    })(cr || (cr = {}));
                const Er = {
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
                    dr = [
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
                const Ar = (e) => {
                        let u = e.id,
                            t = e.isChecked,
                            n = void 0 !== t && t,
                            r = e.isDisabled,
                            s = void 0 !== r && r,
                            i = e.isAlert,
                            l = void 0 !== i && i,
                            c = e.size,
                            E = void 0 === c ? ir.medium : c,
                            d = e.type,
                            m = void 0 === d ? lr.primary : d,
                            A = e.soundHover,
                            _ = void 0 === A ? 'highlight' : A,
                            F = e.soundClick,
                            D = void 0 === F ? 'play' : F,
                            B = e.onMouseEnter,
                            C = e.onMouseLeave,
                            g = e.onMouseUp,
                            p = e.onMouseDown,
                            f = e.onClick,
                            v = e.onChange,
                            b = e.onFocus,
                            w = e.onBlur,
                            y = e.text,
                            T = e.contentStyles,
                            R = e.children,
                            S = e.alignment,
                            x = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, dr);
                        const k = (0, a.useState)(!1),
                            L = k[0],
                            P = k[1],
                            O = (0, a.useState)(!1),
                            M = (O[0], O[1]),
                            N = (0, a.useCallback)(
                                (e) => {
                                    s || (v && v(), f && f(e));
                                },
                                [s, v, f],
                            ),
                            I = (0, a.useCallback)(
                                (e) => {
                                    const u = e.button === sr.LEFT;
                                    s || (u && P(!0), u && p && p(e), D && ae(D));
                                },
                                [s, p, D],
                            ),
                            H = (0, a.useCallback)(
                                (e) => {
                                    s || (P(!1), g && g(e));
                                },
                                [s, g],
                            ),
                            U = (0, a.useCallback)(
                                (e) => {
                                    s || (B && B(e), _ && ae(_));
                                },
                                [s, B, _],
                            ),
                            W = (0, a.useCallback)(
                                (e) => {
                                    s || (P(!1), C && C(e));
                                },
                                [s, C],
                            ),
                            G = (0, a.useCallback)(
                                (e) => {
                                    s || (M(!0), b && b(e));
                                },
                                [s, b],
                            ),
                            z = (0, a.useCallback)(
                                (e) => {
                                    s || (M(!1), w && w(e));
                                },
                                [s, w],
                            ),
                            $ = o().createElement(
                                'div',
                                { className: Er.label },
                                o().createElement(
                                    'div',
                                    { className: h()(Er.labelContent, 's-labelContent'), style: T },
                                    y || R,
                                ),
                            );
                        return o().createElement(
                            'div',
                            mr(
                                {
                                    id: u,
                                    className: h()(Er.base, Er[`base__${E}`], Er[`base__${m}`], {
                                        [Er.base__checked]: n,
                                        [Er.base__disabled]: s,
                                        [Er.base__mouseDown]: L,
                                        [Er.base__alert]: l,
                                        [Er.base__center]: S === cr.Center,
                                        [Er.base__bottom]: S === cr.Bottom,
                                    }),
                                    onClick: N,
                                    onMouseEnter: U,
                                    onMouseLeave: W,
                                    onMouseDown: I,
                                    onMouseUp: H,
                                    onFocus: G,
                                    onBlur: z,
                                },
                                x,
                            ),
                            o().createElement(
                                'div',
                                { className: Er.input },
                                o().createElement('div', { className: Er.alertOverlay }),
                                o().createElement('div', { className: Er.inputHoverOverlay }),
                                o().createElement('div', { className: Er.highlight }),
                            ),
                            o().createElement('div', { className: Er.checkmark }),
                            ((y || R) && $) || null,
                        );
                    },
                    _r = 'AnimationCheckbox_animationCheckbox_05',
                    Fr = ({ isChecked: e, onClick: u }) =>
                        o().createElement(
                            'div',
                            { className: _r },
                            o().createElement(Ar, {
                                text: R.strings.event.WtEventPortals.inside.showAnimation(),
                                size: ir.large,
                                onClick: u,
                                isChecked: e,
                            }),
                        ),
                    Dr = 'Lockbox_base_8c',
                    Br = 'Lockbox_contentContainer_32',
                    Cr = 'Lockbox_icon_d0',
                    gr = 'Lockbox_amount_34',
                    pr = 'Lockbox_selected_85',
                    hr = 'Lockbox_selectArrowContainer_a2',
                    fr = 'Lockbox_selectArrow_a5',
                    vr = ({ type: e, amount: u, currentLootBoxType: t, className: n, updateLootbox: r }) => {
                        const s = h()(Dr, n),
                            i =
                                e === W.BOSS
                                    ? R.images.gui.maps.icons.wtevent.portals.lockbox_boss()
                                    : R.images.gui.maps.icons.wtevent.portals.lockbox_hunter(),
                            l = t === e,
                            c = (0, a.useCallback)(() => {
                                r(e);
                            }, [e, r]);
                        return o().createElement(
                            'div',
                            { className: s },
                            l &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement('div', { className: pr }),
                                    o().createElement(
                                        'div',
                                        { className: hr },
                                        o().createElement('div', { className: fr }),
                                    ),
                                ),
                            o().createElement(
                                'div',
                                { className: Br, onClick: c },
                                o().createElement('div', { className: Cr, style: { backgroundImage: `url(${i})` } }),
                                o().createElement('div', { className: gr }, u),
                            ),
                        );
                    };
                var br = t(6112);
                const wr = [
                    'src',
                    'className',
                    'autoplay',
                    'style',
                    'loop',
                    'isPrebufferKeyframes',
                    'keyframesNameConfig',
                    'onClick',
                ];
                function yr() {
                    return (
                        (yr =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        yr.apply(this, arguments)
                    );
                }
                const Tr = (0, a.forwardRef)(function (e, u) {
                        let t = e.src,
                            n = e.className,
                            r = e.autoplay,
                            s = void 0 !== r && r,
                            l = e.style,
                            c = e.loop,
                            E = void 0 !== c && c,
                            d = e.isPrebufferKeyframes,
                            m = e.keyframesNameConfig,
                            A = e.onClick,
                            _ = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, wr);
                        const F = u,
                            D = (0, a.useRef)(null);
                        var B;
                        return (
                            (B = () =>
                                i.O.view.events.onDisplayChanged((e, u) => {
                                    var t, n;
                                    u === br.W.hidden && (null == (t = D.current) || t.pause()),
                                        u === br.W.shown && (null == (n = D.current) || n.play());
                                })),
                            (0, a.useEffect)(B, []),
                            (0, a.useEffect)(
                                () =>
                                    gt(() => {
                                        const e = D.current;
                                        if (!F || !e || !d)
                                            return void (null != e && e.cohFastSeek && (e.cohFastSeek = !1));
                                        const u = e.cohGetKeyframeTimestamps();
                                        u.length > 0
                                            ? ((e.cohFastSeek = !0),
                                              u.map((u) => {
                                                  null == e || e.cohPrebufferKeyframe(u);
                                              }))
                                            : console.warn("Can't prebuffered keyframes, keyframes was not found");
                                    }),
                                [d, F],
                            ),
                            (0, a.useEffect)(() => {
                                if (F && D.current) {
                                    const e = { changeTimeHandlers: [], changeKeyframeHandlers: [], changeTimeLoop: G },
                                        u = () => {
                                            let u = 0;
                                            const t = (function (e) {
                                                    let u = 0;
                                                    return [
                                                        function t() {
                                                            e(), (u = requestAnimationFrame(t));
                                                        },
                                                        function () {
                                                            cancelAnimationFrame(u);
                                                        },
                                                    ];
                                                })(() => {
                                                    if (D.current) {
                                                        const t = D.current,
                                                            n = t.currentTime,
                                                            r = t.duration;
                                                        if (
                                                            (u !== n &&
                                                                (e.changeTimeHandlers.forEach((e) =>
                                                                    e({ currentTime: n, duration: r }),
                                                                ),
                                                                (u = n)),
                                                            D.current.paused || !F || !d)
                                                        )
                                                            return;
                                                        const a = D.current.cohGetKeyframeTimestamps();
                                                        a.forEach((u, t) => {
                                                            n > a[t] - 0.02 &&
                                                                n < a[t] &&
                                                                e.changeKeyframeHandlers.forEach((e) => {
                                                                    const n = Object.keys(null != m ? m : {})[t];
                                                                    return e({
                                                                        time: u,
                                                                        name: `${m ? n : `Point_${t}`}`,
                                                                    });
                                                                });
                                                        });
                                                    }
                                                }),
                                                n = t[0],
                                                r = t[1];
                                            return n(), r;
                                        };
                                    e.changeTimeLoop = u();
                                    const t = (u) => (
                                            e.changeTimeHandlers.push(u),
                                            () => {
                                                const t = e.changeTimeHandlers,
                                                    n = t.indexOf(u);
                                                n < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeTimeHandler, this reference was not found",
                                                      )
                                                    : t.splice(n, 1);
                                            }
                                        ),
                                        n = (u) => (
                                            e.changeKeyframeHandlers.push(u),
                                            () => {
                                                const t = e.changeKeyframeHandlers,
                                                    n = t.indexOf(u);
                                                n < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeKeyframeHandlers, this reference was not found",
                                                      )
                                                    : t.splice(n, 1);
                                            }
                                        ),
                                        r = () => {
                                            var e;
                                            return null == (e = D.current) ? void 0 : e.currentTime;
                                        },
                                        a = () => {
                                            var e;
                                            return null == (e = D.current) ? void 0 : e.duration;
                                        },
                                        o = (e) => {
                                            D.current && (D.current.currentTime = pt(0, D.current.duration, e));
                                        },
                                        s = () => {
                                            var e;
                                            return null == (e = D.current) ? void 0 : e.play();
                                        },
                                        i = () => {
                                            var e;
                                            return null == (e = D.current) ? void 0 : e.pause();
                                        },
                                        l = () => {
                                            i(), o(0);
                                        },
                                        c = () => {
                                            var e, u;
                                            return null !=
                                                (e = null == (u = D.current) ? void 0 : u.cohGetKeyframeTimestamps())
                                                ? e
                                                : [];
                                        },
                                        E = (e) => {
                                            o(e), s();
                                        },
                                        A = (e) => {
                                            o(e), i();
                                        },
                                        _ = () => {
                                            (e.changeTimeHandlers = []),
                                                (e.changeKeyframeHandlers = []),
                                                null == e.changeTimeLoop || e.changeTimeLoop();
                                        },
                                        B = (e, u) => {
                                            var t;
                                            return (
                                                null == (t = D.current) || t.addEventListener(e, u),
                                                () => {
                                                    var t;
                                                    return null == (t = D.current)
                                                        ? void 0
                                                        : t.removeEventListener(e, u);
                                                }
                                            );
                                        },
                                        C = (e, u) => {
                                            var t;
                                            return (
                                                null == (t = D.current) || t.removeEventListener(e, u),
                                                () => {
                                                    var t;
                                                    return null == (t = D.current)
                                                        ? void 0
                                                        : t.removeEventListener(e, u);
                                                }
                                            );
                                        };
                                    return (
                                        (F.current = {
                                            on: B,
                                            off: C,
                                            play: s,
                                            pause: i,
                                            stop: l,
                                            cleanup: _,
                                            getCurrentTime: r,
                                            getDuration: a,
                                            getCachedKeyframes: c,
                                            goToAndPlay: E,
                                            goToAndStop: A,
                                            setCurrentTime: o,
                                            domRef: D.current,
                                            onChangeTime: t,
                                            onKeyframes: n,
                                        }),
                                        () => {
                                            _(), (F.current = null);
                                        }
                                    );
                                }
                            }, [m, F, d]),
                            (0, a.useEffect)(() => {
                                D.current && s && D.current.play();
                            }, [s, E]),
                            (0, a.useEffect)(() => {
                                if (D.current)
                                    return () => {
                                        D.current && D.current.pause();
                                    };
                            }, []),
                            o().createElement(
                                'video',
                                yr({ src: t, className: n, style: l, loop: E, ref: D, onClick: A }, _),
                            )
                        );
                    }),
                    Rr = (0, a.memo)(Tr),
                    Sr = 'IdleVideo_base_ee',
                    xr = 'IdleVideo_video_c5',
                    kr = 'IdleVideo_video__hidden_db',
                    Lr = 1.6,
                    Pr = (e) => (u, t) =>
                        u / t >= 2.4000000000000004
                            ? e(viewEnv.remToPx(t) * Lr, viewEnv.remToPx(t), u, t)
                            : e(viewEnv.remToPx(u), 0.625 * viewEnv.remToPx(u), u, t),
                    Or = viewEnv.remToPx(900),
                    Mr = { width: Or * Lr, height: Or },
                    Nr = viewEnv.remToPx(1200),
                    Ir = { width: Nr * Lr, height: Nr },
                    Hr =
                        (Pr((e, u, t, n) =>
                            e < Mr.width
                                ? Mr
                                : t > l.medium.width && n > l.medium.height && e < Ir.width
                                  ? Ir
                                  : { width: e, height: u },
                        ),
                        viewEnv.remToPx(700)),
                    Ur = { width: Hr * Lr, height: Hr },
                    Wr =
                        (Pr((e, u) => (e < Ur.width ? Ur : { width: e, height: u })),
                        (e) => {
                            const u = R.videos.wt;
                            return ((e, u) => !['$dyn', '$num', '$plural'].includes(e) && e in u)(e, u)
                                ? u[e]()
                                : (console.error(`key ${String(e)} not found.`, u), '');
                        }),
                    Gr = { [U.HUNTER]: 'hunter_portal_idle_', [U.BOSS]: 'boss_portal_idle_' },
                    zr = ({ portalType: e }) => {
                        const u = T().mediaWidth,
                            t = (0, a.useRef)(null),
                            n = (0, a.useRef)(null);
                        (0, a.useEffect)(() => {
                            r(e);
                        }, [e, u]);
                        const r = (e) => {
                                const u = t.current,
                                    r = n.current;
                                switch (e) {
                                    case U.HUNTER:
                                        null == u || u.stop(), null == r || r.play();
                                        break;
                                    case U.BOSS:
                                        null == r || r.stop(), null == u || u.play();
                                }
                            },
                            s = h()(xr, e === U.BOSS && kr),
                            i = h()(xr, e === U.HUNTER && kr);
                        return o().createElement(
                            'div',
                            { className: Sr, key: u },
                            o().createElement(Rr, { className: i, ref: t, loop: !0, src: Wr(`${Gr[U.BOSS]}${u}`) }),
                            o().createElement(Rr, { className: s, ref: n, loop: !0, src: Wr(`${Gr[U.HUNTER]}${u}`) }),
                        );
                    },
                    $r = R.strings.event.WtEventPortals,
                    Yr = 6,
                    jr = { [U.HUNTER]: 5, [U.BOSS]: Yr + 1 },
                    Vr = (0, Un.Pi)(() => {
                        const e = J(),
                            u = e.model,
                            t = e.controls,
                            n = u.root.get(),
                            r = n.isBoxesEnabled,
                            s = n.portalType,
                            l = n.availableLootBoxesPurchase,
                            c = n.backButtonText,
                            E = n.isLaunchAnimated,
                            d = t.onBuyButtonClick,
                            m = t.onClose,
                            A = t.onUpdateLootbox,
                            _ = t.onAnimationSettingChange;
                        var F;
                        (0, a.useEffect)(() => {
                            f(!1),
                                setTimeout(() => {
                                    f(!0);
                                }, 300);
                        }, []),
                            (F = () => {
                                D();
                            }),
                            ne(ee.n.ESCAPE, F);
                        const D = (0, a.useCallback)(() => {
                                m(), i.O.view.sendEvent.close();
                            }, [m]),
                            B = s === U.HUNTER ? W.HUNTER : W.BOSS,
                            C = s === U.TANK ? U.BOSS : s,
                            g = (0, a.useState)(!1),
                            p = g[0],
                            f = g[1],
                            v = (0, a.useCallback)(() => _(), [_]),
                            b = re(),
                            w = h()($n, b),
                            y = (0, a.useCallback)(
                                (e) => {
                                    A(e);
                                },
                                [A],
                            ),
                            T = jr[C] + 1;
                        return o().createElement(
                            'div',
                            { className: w },
                            o().createElement(zr, { portalType: C }),
                            o().createElement('div', { className: qn }),
                            o().createElement(
                                'div',
                                { className: Yn },
                                o().createElement('div', { className: Kn }, $r.title[C]()),
                            ),
                            o().createElement('div', { className: jn }, p && o().createElement(Bn, { portalType: C })),
                            o().createElement('div', { className: Vn }, o().createElement(zn, { lootBoxType: B })),
                            o().createElement(
                                or,
                                { animationDelayStepsCount: T },
                                o().createElement(
                                    'div',
                                    { className: Qn },
                                    o().createElement(vr, {
                                        amount: u.computes.getAmountBossLootboxes(),
                                        type: W.BOSS,
                                        className: Zn,
                                        currentLootBoxType: B,
                                        updateLootbox: y,
                                    }),
                                    o().createElement(vr, {
                                        amount: u.computes.getAmountHarrierLootboxes(),
                                        type: W.HUNTER,
                                        className: Zn,
                                        currentLootBoxType: B,
                                        updateLootbox: y,
                                    }),
                                ),
                                o().createElement(Ze, { onClick: D, goto: c }),
                                o().createElement(Xe, { onClose: D }),
                                o().createElement(Fr, { isChecked: E, onClick: v }),
                                r &&
                                    B !== W.HUNTER &&
                                    o().createElement($e, { onBuyButtonClick: d, availableLootBoxesPurchase: l }),
                            ),
                            o().createElement('div', { className: Xn }, !r && o().createElement(rr, null)),
                        );
                    });
                engine.whenReady.then(() => {
                    H().render(
                        o().createElement(N, null, o().createElement(Z, null, o().createElement(Vr, null)), ','),
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
                    for (var [u, t, n] = deferred[i], a = !0, o = 0; o < u.length; o++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[o]))
                            ? u.splice(o--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
                        deferred.splice(i--, 1);
                        var s = t();
                        void 0 !== s && (e = s);
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
        (__webpack_require__.j = 205),
        (() => {
            var e = { 205: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        r,
                        [a, o, s] = t,
                        i = 0;
                    if (a.some((u) => 0 !== e[u])) {
                        for (n in o) __webpack_require__.o(o, n) && (__webpack_require__.m[n] = o[n]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (u && u(t); i < a.length; i++)
                        (r = a[i]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [107], () => __webpack_require__(3908));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
