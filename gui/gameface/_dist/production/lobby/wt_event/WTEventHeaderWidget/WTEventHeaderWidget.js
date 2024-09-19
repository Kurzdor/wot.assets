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
            527: (e, t, r) => {
                'use strict';
                r.r(t),
                    r.d(t, { mouse: () => c, off: () => l, on: () => s, onResize: () => i, onScaleUpdated: () => o });
                var n = r(2472),
                    a = r(1176);
                const i = (0, n.E)('clientResized'),
                    o = (0, n.E)('self.onScaleUpdated'),
                    s = (e, t) => engine.on(e, t),
                    l = (e, t) => engine.off(e, t),
                    d = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const c = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, a.R)(!1);
                    }
                    function r() {
                        e.enabled && (0, a.R)(!0);
                    }
                    function n() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', r))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', r))
                            : (0, a.R)(!1);
                    }
                    const i = ['down', 'up', 'move'].reduce(
                        (t, r) => (
                            (t[r] = (function (t) {
                                return (r) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const i = `mouse${t}`,
                                        o = d[t]((e) => r([e, 'outside']));
                                    function s(e) {
                                        r([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, s),
                                        n(),
                                        () => {
                                            a &&
                                                (o(),
                                                window.removeEventListener(i, s),
                                                (e.listeners -= 1),
                                                n(),
                                                (a = !1));
                                        }
                                    );
                                };
                            })(r)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, i, {
                        disable() {
                            (e.enabled = !1), n();
                        },
                        enable() {
                            (e.enabled = !0), n();
                        },
                        enableOutside() {
                            e.enabled && (0, a.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, a.R)(!1);
                        },
                    });
                })();
            },
            5959: (e, t, r) => {
                'use strict';
                r.r(t),
                    r.d(t, {
                        events: () => n,
                        getMouseGlobalPosition: () => o,
                        getSize: () => i,
                        graphicsQuality: () => s,
                        playSound: () => a.G,
                        setRTPC: () => a.E,
                    });
                var n = r(527),
                    a = r(2493);
                function i(e = 'px') {
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
            1176: (e, t, r) => {
                'use strict';
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                r.d(t, { R: () => n });
            },
            2493: (e, t, r) => {
                'use strict';
                function n(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function a(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((r) => {
                        console.error(`setRTPC('${e}', '${t}'): `, r);
                    });
                }
                r.d(t, { E: () => a, G: () => n });
            },
            2472: (e, t, r) => {
                'use strict';
                function n(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                r.d(t, { E: () => n });
            },
            3138: (e, t, r) => {
                'use strict';
                r.d(t, { O: () => i });
                var n = r(5959),
                    a = r(514);
                const i = { view: r(7641), client: n, sound: a.ZP };
            },
            514: (e, t, r) => {
                'use strict';
                r.d(t, { ZP: () => o });
                var n = r(5959);
                const a = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    i = Object.keys(a).reduce((e, t) => ((e[t] = () => (0, n.playSound)(a[t])), e), {}),
                    o = { play: Object.assign({}, i, { sound: n.playSound }), setRTPC: n.setRTPC };
            },
            3722: (e, t, r) => {
                'use strict';
                function n(e, t, r = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, r);
                }
                function a(e, t, r) {
                    return `url(${n(e, t, r)})`;
                }
                r.r(t), r.d(t, { getBgUrl: () => a, getTextureUrl: () => n });
            },
            6112: (e, t, r) => {
                'use strict';
                r.d(t, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, r) => {
                'use strict';
                r.d(t, { U: () => a });
                var n = r(2472);
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
            7641: (e, t, r) => {
                'use strict';
                r.r(t),
                    r.d(t, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => s,
                        children: () => n,
                        displayStatus: () => a.W,
                        displayStatusIs: () => y,
                        events: () => i.U,
                        extraSize: () => O,
                        forceTriggerMouseMove: () => L,
                        freezeTextureBeforeResize: () => h,
                        getBrowserTexturePath: () => d,
                        getDisplayStatus: () => x,
                        getScale: () => p,
                        getSize: () => m,
                        getViewGlobalPosition: () => g,
                        isEventHandled: () => S,
                        isFocused: () => v,
                        pxToRem: () => w,
                        remToPx: () => E,
                        resize: () => _,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => f,
                        setEventHandled: () => b,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => u,
                        whenTutorialReady: () => M,
                    });
                var n = r(3722),
                    a = r(6112),
                    i = r(6538),
                    o = r(8566);
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function d(e, t, r, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, r, n);
                }
                function c(e, t, r) {
                    return viewEnv.addDataChangedCallback(e, t, r);
                }
                function u(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function _(e, t, r = 'px') {
                    return 'rem' === r ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function g(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: E(t.x), y: E(t.y) };
                }
                function h() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function p() {
                    return viewEnv.getScale();
                }
                function w(e) {
                    return viewEnv.pxToRem(e);
                }
                function E(e) {
                    return viewEnv.remToPx(e);
                }
                function f(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function v() {
                    return viewEnv.isFocused();
                }
                function b() {
                    return viewEnv.setEventHandled();
                }
                function S() {
                    return viewEnv.isEventHandled();
                }
                function L() {
                    viewEnv.forceTriggerMouseMove();
                }
                function x() {
                    return viewEnv.getShowingStatus();
                }
                const y = Object.keys(a.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === a.W[t]), e),
                        {},
                    ),
                    O = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    M = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, r) => {
                'use strict';
                r.d(t, { qP: () => d });
                const n = ['args'];
                const a = 2,
                    i = 16,
                    o = 32,
                    s = 64,
                    l = (e, t) => {
                        const r = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var r,
                                        n,
                                        a = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                                    return a;
                                })(t, n);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: r, type: e }, o, {
                                          arguments:
                                              ((a = i),
                                              Object.entries(a).map(([e, t]) => {
                                                  const r = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: r, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: r, name: e, bool: t };
                                                      default:
                                                          return { __Type: r, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: r, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: r, type: e });
                        var a;
                    },
                    d = {
                        close(e) {
                            l('popover' === e ? a : o);
                        },
                        minimize() {
                            l(s);
                        },
                        move(e) {
                            l(i, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, t, r) => {
                'use strict';
                let n, a;
                r.d(t, { n: () => n }),
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
                    })(a || (a = {}));
            },
            1358: (e, t, r) => {
                'use strict';
                r.d(t, { Z: () => i });
                var n = r(3138);
                class a {
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
                        return window.__dataTracker || (window.__dataTracker = new a()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, t, r = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const i = n.O.view.addModelObserver(e, r, a);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = t),
                                  r > 0 && (this._views[r] ? this._views[r].push(i) : (this._views[r] = [i])))
                                : console.error("Can't add callback for model:", e),
                            i
                        );
                    }
                    removeCallback(e, t = 0) {
                        let r = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((r = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            r || console.error("Can't remove callback by id:", e),
                            r
                        );
                    }
                    _emmitDataChanged(e, t, r) {
                        r.forEach((r) => {
                            const n = this._callbacks[r];
                            void 0 !== n && n(e, t);
                        });
                    }
                }
                a.__instance = void 0;
                const i = a;
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
            7491: (e, t, r) => {
                'use strict';
                r.d(t, { Sw: () => i.Z, B0: () => s.B0, ry: () => l.ry });
                class n {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: r }) => {
                                    let n = e.target;
                                    do {
                                        if (n === t) return;
                                        n = n.parentNode;
                                    } while (n);
                                    r();
                                });
                            });
                    }
                    static get instance() {
                        return n.__instance || (n.__instance = new n()), n.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const r = e,
                            n = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== r || t !== n)),
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
                var i = r(1358);
                var o = r(8613),
                    s = r(4251),
                    l = r(8072),
                    d = r(7572);
                const c = a.instance,
                    u = {
                        DataTracker: i.Z,
                        ViewModel: d.Z,
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
                        dumpViewModel: function e(t) {
                            const r = {};
                            if ('object' != typeof t) return t;
                            for (const n in t)
                                if (Object.prototype.hasOwnProperty.call(t, n)) {
                                    const a = Object.prototype.toString.call(t[n]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = t[n];
                                        r[n] = [];
                                        for (let t = 0; t < a.length; t++) r[n].push({ value: e(a[t].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (r[n] = e(t[n]))
                                            : (r[n] = t[n]);
                                }
                            return r;
                        },
                        ClickOutsideManager: c,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = u;
            },
            8613: (e, t, r) => {
                'use strict';
                r.d(t, { Z5: () => n, cy: () => a });
                const n = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    a = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, r) => userLocale.getTimeFormat(e, t, void 0 === r || r),
                        getTimeString: (e, t, r) => userLocale.getTimeString(e, t, void 0 === r || r),
                    };
            },
            4251: (e, t, r) => {
                'use strict';
                let n;
                r.d(t, { B0: () => n, B3: () => a, Gr: () => i, kH: () => s, lf: () => o }),
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
                const a = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    i = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    o = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    s = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
            },
            8072: (e, t, r) => {
                'use strict';
                r.d(t, {
                    Eu: () => c,
                    KE: () => w,
                    Kv: () => l,
                    P3: () => p,
                    SU: () => b,
                    SW: () => g,
                    Sy: () => _,
                    VM: () => S,
                    c9: () => u,
                    ry: () => d,
                    uM: () => E,
                    uk: () => h,
                    wU: () => f,
                    wv: () => m,
                });
                var n = r(5521),
                    a = r(3138),
                    i = r(4251);
                const o = ['args'];
                function s(e, t, r, n, a, i, o) {
                    try {
                        var s = e[i](o),
                            l = s.value;
                    } catch (e) {
                        return void r(e);
                    }
                    s.done ? t(l) : Promise.resolve(l).then(n, a);
                }
                const l = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    d = (function () {
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
                                        r = arguments;
                                    return new Promise(function (n, a) {
                                        var i = e.apply(t, r);
                                        function o(e) {
                                            s(i, n, a, o, l, 'next', e);
                                        }
                                        function l(e) {
                                            s(i, n, a, o, l, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
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
                    u = (e, t) => {
                        const r = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var r,
                                        n,
                                        a = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                                    return a;
                                })(t, o);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: r, type: e }, i, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([e, t]) => {
                                                  const r = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          r.number = t;
                                                          break;
                                                      case 'boolean':
                                                          r.bool = t;
                                                          break;
                                                      default:
                                                          r.string = t.toString();
                                                  }
                                                  return r;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: r, type: e }, i));
                        } else viewEnv.handleViewEvent({ __Type: r, type: e });
                        var n;
                    },
                    m = (e) => u(i.B0.MOVE, { isMouseEvent: !0, on: e }),
                    _ = () => u(i.B0.CLOSE),
                    g = () => u(i.B0.POP_OVER, { on: !1 }),
                    h = (e, t, r = 0) => {
                        u(i.B0.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: r, args: t });
                    },
                    p = (e, t, r, n, o = R.invalid('resId'), s) => {
                        const d = a.O.view.getViewGlobalPosition(),
                            c = r.getBoundingClientRect(),
                            m = c.x,
                            _ = c.y,
                            g = c.width,
                            h = c.height,
                            p = {
                                x: a.O.view.pxToRem(m) + d.x,
                                y: a.O.view.pxToRem(_) + d.y,
                                width: a.O.view.pxToRem(g),
                                height: a.O.view.pxToRem(h),
                            };
                        u(i.B0.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: n || R.invalid('resId'),
                            targetID: o,
                            direction: t,
                            bbox: l(p),
                            on: !0,
                            args: s,
                        });
                    },
                    w = () => viewEnv.isWindowShownByViewEvent(i.B0.TOOLTIP),
                    E = () => viewEnv.isWindowShownByViewEvent(i.B0.CONTEXT_MENU),
                    f = () => viewEnv.isWindowShownByViewEvent(i.B0.POP_OVER),
                    v = (e, t) => {
                        e.keyCode === n.n.ESCAPE && t();
                    },
                    b = (e) => {
                        v(e, _);
                    },
                    S = (e) => {
                        const t = (t) => v(t, e);
                        return window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t);
                    };
            },
            5577: (e, t, r) => {
                'use strict';
                var n = r(6179),
                    a = r.n(n);
                const i = (e, t, r) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && r.extraLarge) ||
                          (t.largeHeight && r.large) ||
                          (t.mediumHeight && r.medium) ||
                          (t.smallHeight && r.small) ||
                          (t.extraSmallHeight && r.extraSmall)
                            ? e
                            : null
                        : e;
                var o = r(3138);
                const s = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var l;
                function d(e, t, r) {
                    const n = (function (e, t) {
                            switch (!0) {
                                case e >= t.extraLarge.width:
                                    return t.extraLarge.weight;
                                case e >= t.large.width && e < t.extraLarge.width:
                                    return t.large.weight;
                                case e >= t.medium.width && e < t.large.width:
                                    return t.medium.weight;
                                case e >= t.small.width && e < t.medium.width:
                                    return t.small.weight;
                                default:
                                    return t.extraSmall.weight;
                            }
                        })(e, r),
                        a = (function (e, t) {
                            switch (!0) {
                                case e >= t.extraLarge.height:
                                    return t.extraLarge.weight;
                                case e >= t.large.height && e < t.extraLarge.height:
                                    return t.large.weight;
                                case e >= t.medium.height && e < t.large.height:
                                    return t.medium.weight;
                                case e >= t.small.height && e < t.medium.height:
                                    return t.small.weight;
                                default:
                                    return t.extraSmall.weight;
                            }
                        })(t, r),
                        i = Math.min(n, a);
                    return {
                        extraLarge: i === r.extraLarge.weight,
                        large: i === r.large.weight,
                        medium: i === r.medium.weight,
                        small: i === r.small.weight,
                        extraSmall: i === r.extraSmall.weight,
                        extraLargeWidth: n === r.extraLarge.weight,
                        largeWidth: n === r.large.weight,
                        mediumWidth: n === r.medium.weight,
                        smallWidth: n === r.small.weight,
                        extraSmallWidth: n === r.extraSmall.weight,
                        extraLargeHeight: a === r.extraLarge.weight,
                        largeHeight: a === r.large.weight,
                        mediumHeight: a === r.medium.weight,
                        smallHeight: a === r.small.weight,
                        extraSmallHeight: a === r.extraSmall.weight,
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
                })(l || (l = {}));
                const c = o.O.client.getSize('rem'),
                    u = c.width,
                    m = c.height,
                    _ = Object.assign({ width: u, height: m }, d(u, m, s)),
                    g = (0, n.createContext)(_),
                    h = ['children'];
                const p = (e) => {
                    let t = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                            return a;
                        })(e, h);
                    const a = (0, n.useContext)(g),
                        o = a.extraLarge,
                        s = a.large,
                        l = a.medium,
                        d = a.small,
                        c = a.extraSmall,
                        u = a.extraLargeWidth,
                        m = a.largeWidth,
                        _ = a.mediumWidth,
                        p = a.smallWidth,
                        w = a.extraSmallWidth,
                        E = a.extraLargeHeight,
                        f = a.largeHeight,
                        v = a.mediumHeight,
                        b = a.smallHeight,
                        S = a.extraSmallHeight,
                        L = { extraLarge: E, large: f, medium: v, small: b, extraSmall: S };
                    if (r.extraLarge || r.large || r.medium || r.small || r.extraSmall) {
                        if (r.extraLarge && o) return t;
                        if (r.large && s) return t;
                        if (r.medium && l) return t;
                        if (r.small && d) return t;
                        if (r.extraSmall && c) return t;
                    } else {
                        if (r.extraLargeWidth && u) return i(t, r, L);
                        if (r.largeWidth && m) return i(t, r, L);
                        if (r.mediumWidth && _) return i(t, r, L);
                        if (r.smallWidth && p) return i(t, r, L);
                        if (r.extraSmallWidth && w) return i(t, r, L);
                        if (
                            !(r.extraLargeWidth || r.largeWidth || r.mediumWidth || r.smallWidth || r.extraSmallWidth)
                        ) {
                            if (r.extraLargeHeight && E) return t;
                            if (r.largeHeight && f) return t;
                            if (r.mediumHeight && v) return t;
                            if (r.smallHeight && b) return t;
                            if (r.extraSmallHeight && S) return t;
                        }
                    }
                    return null;
                };
                p.defaultProps = {
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
                (0, n.memo)(p);
                const w = (e) => {
                        const t = (0, n.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    E = ({ children: e }) => {
                        const t = (0, n.useContext)(g),
                            r = (0, n.useState)(t),
                            i = r[0],
                            l = r[1],
                            c = (0, n.useCallback)((e, t) => {
                                const r = o.O.view.pxToRem(e),
                                    n = o.O.view.pxToRem(t);
                                l(Object.assign({ width: r, height: n }, d(r, n, s)));
                            }, []),
                            u = (0, n.useCallback)(() => {
                                const e = o.O.client.getSize('px');
                                c(e.width, e.height);
                            }, [c]);
                        w(() => {
                            o.O.client.events.on('clientResized', c), o.O.client.events.on('self.onScaleUpdated', u);
                        }),
                            (0, n.useEffect)(
                                () => () => {
                                    o.O.client.events.off('clientResized', c),
                                        o.O.client.events.off('self.onScaleUpdated', u);
                                },
                                [c, u],
                            );
                        const m = (0, n.useMemo)(() => Object.assign({}, i), [i]);
                        return a().createElement(g.Provider, { value: m }, e);
                    };
                var f = r(6483),
                    v = r.n(f),
                    b = r(926),
                    S = r.n(b);
                let L, x, y;
                !(function (e) {
                    (e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = s.small.width)] = 'Small'),
                        (e[(e.Medium = s.medium.width)] = 'Medium'),
                        (e[(e.Large = s.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge');
                })(L || (L = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.width)] = 'Small'),
                            (e[(e.Medium = s.medium.width)] = 'Medium'),
                            (e[(e.Large = s.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge');
                    })(x || (x = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = s.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.height)] = 'Small'),
                            (e[(e.Medium = s.medium.height)] = 'Medium'),
                            (e[(e.Large = s.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.height)] = 'ExtraLarge');
                    })(y || (y = {}));
                const O = () => {
                        const e = (0, n.useContext)(g),
                            t = e.width,
                            r = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return L.ExtraLarge;
                                    case e.large:
                                        return L.Large;
                                    case e.medium:
                                        return L.Medium;
                                    case e.small:
                                        return L.Small;
                                    case e.extraSmall:
                                        return L.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), L.ExtraSmall;
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return x.ExtraLarge;
                                    case e.largeWidth:
                                        return x.Large;
                                    case e.mediumWidth:
                                        return x.Medium;
                                    case e.smallWidth:
                                        return x.Small;
                                    case e.extraSmallWidth:
                                        return x.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), x.ExtraSmall;
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
                        return { mediaSize: a, mediaWidth: i, mediaHeight: o, remScreenWidth: t, remScreenHeight: r };
                    },
                    M = ['children', 'className'];
                function T() {
                    return (
                        (T =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        T.apply(this, arguments)
                    );
                }
                const k = {
                        [x.ExtraSmall]: '',
                        [x.Small]: S().SMALL_WIDTH,
                        [x.Medium]: `${S().SMALL_WIDTH} ${S().MEDIUM_WIDTH}`,
                        [x.Large]: `${S().SMALL_WIDTH} ${S().MEDIUM_WIDTH} ${S().LARGE_WIDTH}`,
                        [x.ExtraLarge]: `${S().SMALL_WIDTH} ${S().MEDIUM_WIDTH} ${S().LARGE_WIDTH} ${S().EXTRA_LARGE_WIDTH}`,
                    },
                    P = {
                        [y.ExtraSmall]: '',
                        [y.Small]: S().SMALL_HEIGHT,
                        [y.Medium]: `${S().SMALL_HEIGHT} ${S().MEDIUM_HEIGHT}`,
                        [y.Large]: `${S().SMALL_HEIGHT} ${S().MEDIUM_HEIGHT} ${S().LARGE_HEIGHT}`,
                        [y.ExtraLarge]: `${S().SMALL_HEIGHT} ${S().MEDIUM_HEIGHT} ${S().LARGE_HEIGHT} ${S().EXTRA_LARGE_HEIGHT}`,
                    },
                    A = {
                        [L.ExtraSmall]: '',
                        [L.Small]: S().SMALL,
                        [L.Medium]: `${S().SMALL} ${S().MEDIUM}`,
                        [L.Large]: `${S().SMALL} ${S().MEDIUM} ${S().LARGE}`,
                        [L.ExtraLarge]: `${S().SMALL} ${S().MEDIUM} ${S().LARGE} ${S().EXTRA_LARGE}`,
                    },
                    C = (e) => {
                        let t = e.children,
                            r = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                                return a;
                            })(e, M);
                        const i = O(),
                            o = i.mediaWidth,
                            s = i.mediaHeight,
                            l = i.mediaSize;
                        return a().createElement('div', T({ className: v()(r, k[o], P[s], A[l]) }, n), t);
                    },
                    I = ['children'];
                const H = (e) => {
                    let t = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                            return a;
                        })(e, I);
                    return a().createElement(E, null, a().createElement(C, r, t));
                };
                var D = r(493),
                    W = r.n(D);
                const N = (e = 1) => {
                    const t = new Error().stack;
                    let r,
                        n = R.invalid('resId');
                    return (
                        t &&
                            ((r = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== r &&
                                window.subViews[r] &&
                                (n = window.subViews[r].id)),
                        { caller: r, stack: t, resId: n }
                    );
                };
                var $ = r(7491);
                const B = [
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
                function G(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const r = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                r.number = t;
                                break;
                            case 'boolean':
                                r.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                r.string = t.toString();
                        }
                        return r;
                    });
                }
                const F = (e, t, r = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: $.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                r,
                            ),
                        );
                    },
                    z = (e) => {
                        let t = e.children,
                            r = e.contentId,
                            a = e.args,
                            i = e.onMouseEnter,
                            o = e.onMouseLeave,
                            s = e.onMouseDown,
                            l = e.onClick,
                            d = e.ignoreShowDelay,
                            c = void 0 !== d && d,
                            u = e.ignoreMouseClick,
                            m = void 0 !== u && u,
                            _ = e.decoratorId,
                            g = void 0 === _ ? 0 : _,
                            h = e.isEnabled,
                            p = void 0 === h || h,
                            w = e.targetId,
                            E = void 0 === w ? 0 : w,
                            f = e.onShow,
                            v = e.onHide,
                            b = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                                return a;
                            })(e, B);
                        const S = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            L = (0, n.useMemo)(() => E || N().resId, [E]),
                            x = (0, n.useCallback)(() => {
                                (S.current.isVisible && S.current.timeoutId) ||
                                    (F(r, g, { isMouseEvent: !0, on: !0, arguments: G(a) }, L),
                                    f && f(),
                                    (S.current.isVisible = !0));
                            }, [r, g, a, L, f]),
                            y = (0, n.useCallback)(() => {
                                if (S.current.isVisible || S.current.timeoutId) {
                                    const e = S.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (S.current.timeoutId = 0)),
                                        F(r, g, { on: !1 }, L),
                                        S.current.isVisible && v && v(),
                                        (S.current.isVisible = !1);
                                }
                            }, [r, g, L, v]),
                            O = (0, n.useCallback)((e) => {
                                S.current.isVisible &&
                                    ((S.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (S.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(S.current.prevTarget) && y();
                                    }, 200)));
                            }, []);
                        (0, n.useEffect)(() => {
                            const e = S.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', O, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', O, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === p && y();
                            }, [p, y]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', y),
                                    () => {
                                        window.removeEventListener('mouseleave', y), y();
                                    }
                                ),
                                [y],
                            );
                        return p
                            ? (0, n.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((M = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((S.current.timeoutId = window.setTimeout(x, c ? 100 : 400)),
                                                      i && i(e),
                                                      M && M(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              y(), null == o || o(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === m && y(), null == l || l(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === m && y(), null == s || s(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      b,
                                  ),
                              )
                            : t;
                        var M;
                    },
                    U = (e, t) => e.split('.').reduce((e, t) => e && e[t], t),
                    V = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    j = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    K = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, r) => {
                                const n = U(`${e}.${r}`, window);
                                return V(n) ? t(e, r, n) : `${e}.${r}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    q = (e) => {
                        const t = ((e) => {
                                const t = N(),
                                    r = t.caller,
                                    n = t.resId,
                                    a = window.__feature && window.__feature !== r && r ? `subViews.${r}` : '';
                                return { modelPrefix: a, modelPath: j(a, e || ''), resId: n };
                            })(),
                            r = t.modelPrefix,
                            n = e.split('.');
                        if (n.length > 0) {
                            const e = [n[0]];
                            return (
                                n.reduce((t, n) => {
                                    const a = U(j(r, `${t}.${n}`), window);
                                    return V(a) ? (e.push(a.id), `${t}.${n}.value`) : (e.push(n), `${t}.${n}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    },
                    Y = $.Sw.instance;
                let X;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(X || (X = {}));
                const Z = (e = 'model', t = X.Deep) => {
                    const r = (0, n.useState)(0),
                        a = (r[0], r[1]),
                        i = (0, n.useMemo)(() => N(), []),
                        o = i.caller,
                        s = i.resId,
                        l = (0, n.useMemo)(
                            () => (window.__feature && window.__feature !== o ? `subViews.${o}.${e}` : e),
                            [o, e],
                        ),
                        d = (0, n.useState)(() =>
                            ((e) => {
                                const t = U(e, window);
                                for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                return V(t) ? t.value : t;
                            })(K(l)),
                        ),
                        c = d[0],
                        u = d[1],
                        m = (0, n.useRef)(-1);
                    return (
                        w(() => {
                            if (
                                ('boolean' == typeof t &&
                                    ((t = t ? X.Deep : X.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                t !== X.None)
                            ) {
                                const r = (e) => {
                                        ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                        t === X.Deep
                                            ? (e === c && a((e) => e + 1), u(e))
                                            : u(Object.assign([], e));
                                    },
                                    n = q(e);
                                m.current = Y.addCallback(n, r, s, t === X.Deep);
                            }
                        }),
                        (0, n.useEffect)(() => {
                            if (t !== X.None)
                                return () => {
                                    Y.removeCallback(m.current, s);
                                };
                        }, [s, t]),
                        c
                    );
                };
                function Q(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const J = {
                    base: 'ProgressBar_base_45',
                    base__small: 'ProgressBar_base__small_df',
                    background: 'ProgressBar_background_51',
                    background__small: 'ProgressBar_background__small_46',
                    lineWrapper: 'ProgressBar_lineWrapper_6a',
                };
                let ee, te;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium');
                })(ee || (ee = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(te || (te = {}));
                const re = ({ size: e = ee.Default }) => {
                        const t = v()(J.background, J[`background__${e}`]);
                        return a().createElement('div', { className: t });
                    },
                    ne = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    ae = ({ size: e }) => {
                        const t = v()(ne.base, ne[`base__${e}`]);
                        return a().createElement('div', { className: t });
                    },
                    ie = {
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
                    oe = (0, n.memo)(
                        ({ size: e, lineRef: t, disabled: r, baseStyles: n, isComplete: i, withoutBounce: o }) => {
                            const s = v()(
                                    ie.base,
                                    ie[`base__${e}`],
                                    r && ie.base__disabled,
                                    i && ie.base__finished,
                                    o && ie.base__withoutBounce,
                                ),
                                l = !r && !i;
                            return a().createElement(
                                'div',
                                { className: s, style: n, ref: t },
                                a().createElement('div', { className: ie.pattern }),
                                a().createElement('div', { className: ie.gradient }),
                                l && a().createElement(ae, { size: e }),
                            );
                        },
                    ),
                    se = ({ size: e, value: t, lineRef: r, disabled: i, onComplete: o }) => {
                        const s = (0, n.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            l = 100 === t;
                        return (
                            (0, n.useEffect)(() => {
                                l && o && o();
                            }, [l, o]),
                            a().createElement(oe, { size: e, disabled: i, baseStyles: s, isComplete: l, lineRef: r })
                        );
                    },
                    le = (e, t) => {
                        let r;
                        const n = setTimeout(() => {
                            r = e();
                        }, t);
                        return () => {
                            'function' == typeof r && r(), clearTimeout(n);
                        };
                    };
                let de, ce;
                !(function (e) {
                    (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                })(de || (de = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(ce || (ce = {}));
                const ue = 'ProgressBarDeltaSimple_base_6c',
                    me = 'ProgressBarDeltaSimple_delta_99',
                    _e = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: r,
                            from: i,
                            size: o,
                            to: s,
                            onEndAnimation: l,
                            onChangeAnimationState: d,
                        }) => {
                            const c = s < i,
                                u = (0, n.useState)(ce.Idle),
                                m = u[0],
                                _ = u[1],
                                g = m === ce.In,
                                h = m === ce.End,
                                p = m === ce.Idle,
                                w = (0, n.useCallback)(
                                    (e) => {
                                        _(e), d && d(e);
                                    },
                                    [d],
                                );
                            (0, n.useEffect)(() => {
                                if (p && !r) {
                                    return le(() => {
                                        w(ce.In);
                                    }, t);
                                }
                            }, [w, r, p, t]),
                                (0, n.useEffect)(() => {
                                    if (g) {
                                        return le(() => {
                                            l && l(), w(ce.End);
                                        }, e + t);
                                    }
                                }, [w, g, l, t, e]);
                            const E = (0, n.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                f = (0, n.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                v = (0, n.useMemo)(
                                    () => ({ width: `${Math.abs(i - s)}%`, left: `${c ? s : i}%` }),
                                    [i, c, s],
                                );
                            return h
                                ? null
                                : a().createElement(
                                      'div',
                                      { className: ue, style: v },
                                      a().createElement(
                                          'div',
                                          { style: p ? E : f, className: me },
                                          a().createElement(ae, { size: o }),
                                      ),
                                  );
                        },
                    ),
                    ge = (0, n.memo)(
                        ({
                            to: e,
                            size: t,
                            from: r,
                            lineRef: i,
                            disabled: o,
                            isComplete: s,
                            animationSettings: l,
                            onChangeAnimationState: d,
                            onEndAnimation: c,
                        }) => {
                            const u = (0, n.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${l.line.duration}ms`,
                                    transitionDelay: `${l.line.delay}ms`,
                                }),
                                [l.line.delay, l.line.duration, e],
                            );
                            return a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(oe, {
                                    size: t,
                                    lineRef: i,
                                    disabled: o,
                                    isComplete: s,
                                    baseStyles: u,
                                }),
                                r >= 0 &&
                                    a().createElement(_e, {
                                        transitionDuration: l.delta.duration,
                                        transitionDelay: l.delta.delay,
                                        freezed: l.freezed,
                                        from: r,
                                        size: t,
                                        to: e,
                                        onChangeAnimationState: d,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    he = 'ProgressBarDeltaGrow_base_7e',
                    pe = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    we = 'ProgressBarDeltaGrow_glow_68',
                    Ee = (e) => (e ? { left: 0 } : { right: 0 }),
                    fe = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    ve = (e) => ({ transitionDuration: `${e}ms` }),
                    be = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: r,
                            from: i,
                            size: o,
                            to: s,
                            onEndAnimation: l,
                            onChangeAnimationState: d,
                            className: c,
                        }) => {
                            const u = s < i,
                                m = (0, n.useState)(de.Idle),
                                _ = m[0],
                                g = m[1],
                                h = _ === de.End,
                                p = _ === de.Idle,
                                w = _ === de.Grow,
                                E = _ === de.Shrink,
                                f = (0, n.useCallback)(
                                    (e) => {
                                        g(e), d && d(e);
                                    },
                                    [d],
                                ),
                                b = (0, n.useCallback)(
                                    (e, t) =>
                                        le(() => {
                                            f(e);
                                        }, t),
                                    [f],
                                );
                            (0, n.useEffect)(() => {
                                if (!r)
                                    return p
                                        ? b(de.Grow, t)
                                        : w
                                          ? b(de.Shrink, e)
                                          : E
                                            ? b(de.End, e)
                                            : void (h && l && l());
                            }, [b, r, h, w, p, E, l, t, e]);
                            const S = (0, n.useMemo)(() => Object.assign({ width: '100%' }, ve(e), Ee(u)), [u, e]),
                                L = (0, n.useMemo)(() => Object.assign({ width: '0%' }, ve(e), Ee(u)), [u, e]),
                                x = (0, n.useMemo)(() => Object.assign({ width: '0%' }, fe(u, i), ve(e)), [i, u, e]),
                                y = (0, n.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(s - i)}%` }, fe(u, i), ve(e)),
                                    [i, u, s, e],
                                );
                            if (h) return null;
                            const O = v()(he, c, u && 0 === s && pe);
                            return a().createElement(
                                'div',
                                { style: p ? x : y, className: O },
                                a().createElement(
                                    'div',
                                    { style: E ? L : S, className: we },
                                    a().createElement(ae, { size: o }),
                                ),
                            );
                        },
                    ),
                    Se = (0, n.memo)(
                        ({
                            to: e,
                            size: t,
                            from: r,
                            lineRef: i,
                            disabled: o,
                            isComplete: s,
                            animationSettings: l,
                            onEndAnimation: d,
                            onChangeAnimationState: c,
                        }) => {
                            const u = e < r,
                                m = (0, n.useState)(!1),
                                _ = m[0],
                                g = m[1],
                                h = (0, n.useCallback)(
                                    (e) => {
                                        e === de.Shrink && g(!0), c && c(e);
                                    },
                                    [c],
                                ),
                                p = (0, n.useMemo)(() => ({ width: `${r}%`, transitionProperty: 'none' }), [r]),
                                w = (0, n.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${l.line.duration}ms` }),
                                    [l.line.duration, e],
                                );
                            return a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(oe, {
                                    size: t,
                                    lineRef: i,
                                    disabled: o,
                                    isComplete: s,
                                    withoutBounce: u && 0 === e,
                                    baseStyles: _ ? w : p,
                                }),
                                r >= 0 &&
                                    a().createElement(be, {
                                        transitionDuration: l.delta.duration,
                                        transitionDelay: l.delta.delay,
                                        onChangeAnimationState: h,
                                        freezed: l.freezed,
                                        onEndAnimation: d,
                                        from: r,
                                        size: t,
                                        to: e,
                                        className: l.delta.className,
                                    }),
                            );
                        },
                    ),
                    Le = ['onComplete', 'onEndAnimation'];
                function xe() {
                    return (
                        (xe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        xe.apply(this, arguments)
                    );
                }
                const ye = (0, n.memo)((e) => {
                        let t = e.onComplete,
                            r = e.onEndAnimation,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                                return a;
                            })(e, Le);
                        const o = (0, n.useState)(!1),
                            s = o[0],
                            l = o[1],
                            d = (0, n.useCallback)(() => {
                                const e = 100 === i.to;
                                e !== s && l(e), e && t && t(), r && r();
                            }, [s, t, r, i.to]);
                        switch (i.animationSettings.type) {
                            case te.Simple:
                                return a().createElement(ge, xe({}, i, { onEndAnimation: d, isComplete: s }));
                            case te.Growing:
                                return a().createElement(Se, xe({}, i, { onEndAnimation: d, isComplete: s }));
                            default:
                                return null;
                        }
                    }),
                    Oe = ['onEndAnimation'];
                function Me() {
                    return (
                        (Me =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        Me.apply(this, arguments)
                    );
                }
                const Te = (0, n.memo)((e) => {
                    let t = e.onEndAnimation,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                            return a;
                        })(e, Oe);
                    const i = (0, n.useRef)({}),
                        o = (0, n.useCallback)(() => {
                            (i.current.from = void 0), t && t();
                        }, [t]),
                        s = 'number' == typeof i.current.from ? i.current.from : r.from;
                    return (
                        (i.current.from = s),
                        a().createElement(ye, Me({}, r, { onEndAnimation: o, key: `${s}-${r.to}`, from: s }))
                    );
                });
                function ke() {
                    return (
                        (ke =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        ke.apply(this, arguments)
                    );
                }
                const Re = (0, n.memo)(
                        ({
                            size: e,
                            value: t,
                            lineRef: r,
                            disabled: n,
                            deltaFrom: i,
                            animationSettings: o,
                            onEndAnimation: s,
                            onChangeAnimationState: l,
                            onComplete: d,
                        }) => {
                            if (i === t)
                                return a().createElement(se, {
                                    key: `${i}-${t}`,
                                    size: e,
                                    value: t,
                                    lineRef: r,
                                    disabled: n,
                                    onComplete: d,
                                });
                            const c = {
                                from: i,
                                to: t,
                                size: e,
                                lineRef: r,
                                disabled: n,
                                animationSettings: o,
                                onComplete: d,
                                onEndAnimation: s,
                                onChangeAnimationState: l,
                            };
                            return o.withStack
                                ? a().createElement(Te, c)
                                : a().createElement(ye, ke({ key: `${i}-${t}` }, c));
                        },
                    ),
                    Pe = (e) => ({
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
                    Ae = {
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
                    Ce = (e, t, r) => (r < e ? e : r > t ? t : r),
                    Ie = (e, t, r) => {
                        if ('number' == typeof r) {
                            return (Ce(0, t, r) / t) * 100;
                        }
                        return e;
                    },
                    He = {
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
                    De = {
                        freezed: !1,
                        withStack: !1,
                        type: te.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    We = (0, n.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = He,
                            size: r = ee.Default,
                            animationSettings: i = De,
                            disabled: o = !1,
                            withoutBackground: s = !1,
                            value: l,
                            deltaFrom: d,
                            lineRef: c,
                            onChangeAnimationState: u,
                            onEndAnimation: m,
                            onComplete: _,
                        }) => {
                            const g = ((e, t, r) =>
                                (0, n.useMemo)(() => {
                                    const n = (Ce(0, t, e) / t) * 100;
                                    return { value: n, deltaFrom: Ie(n, t, r) };
                                }, [r, t, e]))(l, e, d);
                            return a().createElement(
                                'div',
                                { className: v()(J.base, J[`base__${r}`]), style: Pe(t) },
                                !s && a().createElement(re, { size: r }),
                                a().createElement(Re, {
                                    size: r,
                                    lineRef: c,
                                    disabled: o,
                                    value: g.value,
                                    deltaFrom: g.deltaFrom,
                                    animationSettings: i,
                                    onEndAnimation: m,
                                    onChangeAnimationState: u,
                                    onComplete: _,
                                }),
                            );
                        },
                    ),
                    Ne = 'App_base_04',
                    $e = 'App_wrapper_6b',
                    Be = 'App_image_98',
                    Ge = 'App_image__isHidden_31',
                    Fe = 'App_image__allCollected_dc',
                    ze = 'App_checkmarkWrapper_ff',
                    Ue = 'App_checkmark_85',
                    Ve = 'App_imageHover_7f',
                    je = 'App_imageHover__isVisible_af',
                    Ke = 'App_imageHover__allCollected_34',
                    qe = 'App_newItemAnimation_e1',
                    Ye = 'App_newItemAnimation__isVisible_3e',
                    Xe = 'App_hoverArea_76',
                    Ze = 'App_hoverAreaWrapper_f6',
                    Qe = 'App_progressionValue_0d',
                    Je = 'App_progressionCountWrapper_8f',
                    et = 'App_progressbarWrapper_09',
                    tt = () => {
                        const e = Z(),
                            t = e.isNewItem,
                            r = e.allCollected,
                            i = e.onClick,
                            o = e.currentProgression,
                            s = e.totalProgression,
                            l = (0, n.useState)(!1),
                            d = l[0],
                            c = l[1],
                            u = (0, n.useCallback)(() => {
                                i();
                            }, [i]),
                            m = (0, n.useCallback)(() => {
                                Q('ev_white_tiger_hangar_collection_rollover'), c(!0);
                            }, []),
                            _ = (0, n.useCallback)(() => {
                                Q('ev_white_tiger_hangar_collection_rollout'), c(!1);
                            }, []),
                            g = (0, n.useRef)(null),
                            h = v()(Ne),
                            p = v()(Be, d && Ge, r && Fe),
                            w = v()(Ve, r && Ke, d && je),
                            E = v()(qe, t && Ye),
                            f = v()(Ue);
                        return a().createElement(
                            'div',
                            { className: h },
                            a().createElement(
                                'div',
                                { className: $e },
                                a().createElement('div', { className: p }),
                                a().createElement('div', { className: w }),
                                t && a().createElement('div', { className: E }),
                            ),
                            r
                                ? a().createElement(
                                      'div',
                                      { className: ze },
                                      a().createElement('div', { className: f }),
                                  )
                                : a().createElement('div', { className: Qe }, o + 1),
                            a().createElement(
                                'div',
                                { className: Ze, ref: g },
                                a().createElement(
                                    z,
                                    {
                                        contentId:
                                            R.views.lobby.wt_event.tooltips.WtEventHeaderWidgetTooltipView('resId'),
                                    },
                                    a().createElement('div', {
                                        className: Xe,
                                        onMouseEnter: m,
                                        onMouseLeave: _,
                                        onClick: u,
                                    }),
                                ),
                                a().createElement(
                                    'div',
                                    { className: Je },
                                    !r &&
                                        a().createElement(
                                            'div',
                                            { className: et },
                                            a().createElement(We, {
                                                size: ee.Default,
                                                value: o,
                                                maxValue: s,
                                                theme: Ae,
                                            }),
                                        ),
                                ),
                            ),
                        );
                    };
                engine.whenReady.then(() => {
                    W().render(
                        a().createElement(H, null, a().createElement(tt, null)),
                        document.getElementById('root'),
                    );
                });
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var r = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](r, r.exports, __webpack_require__), r.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, r, n) => {
            if (!t) {
                var a = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, r, n] = deferred[l], i = !0, o = 0; o < t.length; o++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[o]))
                            ? t.splice(o--, 1)
                            : ((i = !1), n < a && (a = n));
                    if (i) {
                        deferred.splice(l--, 1);
                        var s = r();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > n; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, r, n];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(t, { a: t }), t;
        }),
        (__webpack_require__.d = (e, t) => {
            for (var r in t)
                __webpack_require__.o(t, r) &&
                    !__webpack_require__.o(e, r) &&
                    Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
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
        (__webpack_require__.j = 689),
        (() => {
            var e = { 689: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, r) => {
                    var n,
                        a,
                        [i, o, s] = r,
                        l = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (n in o) __webpack_require__.o(o, n) && (__webpack_require__.m[n] = o[n]);
                        if (s) var d = s(__webpack_require__);
                    }
                    for (t && t(r); l < i.length; l++)
                        (a = i[l]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(d);
                },
                r = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [107], () => __webpack_require__(5577));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
