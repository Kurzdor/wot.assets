(() => {
    var __webpack_modules__ = {
            67: (e, t, u) => {
                'use strict';
                u.d(t, { O: () => X });
                var n = {};
                u.r(n),
                    u.d(n, { mouse: () => E, off: () => m, on: () => d, onResize: () => l, onScaleUpdated: () => c });
                var r = {};
                u.r(r),
                    u.d(r, {
                        events: () => n,
                        getMouseGlobalPosition: () => f,
                        getSize: () => F,
                        graphicsQuality: () => v,
                    });
                var o = {};
                u.r(o), u.d(o, { getBgUrl: () => h, getTextureUrl: () => p });
                var a = {};
                function s(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                function i(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                u.r(a),
                    u.d(a, {
                        addModelObserver: () => P,
                        addPreloadTexture: () => k,
                        children: () => o,
                        displayStatus: () => g,
                        displayStatusIs: () => q,
                        events: () => A,
                        extraSize: () => Y,
                        forceTriggerMouseMove: () => G,
                        freezeTextureBeforeResize: () => L,
                        getBrowserTexturePath: () => M,
                        getDisplayStatus: () => K,
                        getScale: () => I,
                        getSize: () => T,
                        getViewGlobalPosition: () => N,
                        isEventHandled: () => j,
                        isFocused: () => V,
                        pxToRem: () => H,
                        remToPx: () => W,
                        resize: () => x,
                        sendEvent: () => S,
                        setAnimateWindow: () => z,
                        setEventHandled: () => U,
                        setInputPaddingsRem: () => O,
                        setSidePaddingsRem: () => R,
                        whenTutorialReady: () => $,
                    });
                const l = s('clientResized'),
                    c = s('self.onScaleUpdated'),
                    d = (e, t) => engine.on(e, t),
                    m = (e, t) => engine.off(e, t),
                    _ = { down: s('mousedown'), up: s('mouseup'), move: s('mousemove') };
                const E = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && i(!1);
                    }
                    function u() {
                        e.enabled && i(!0);
                    }
                    function n() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', u))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', u))
                            : i(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (t, u) => (
                            (t[u] = (function (t) {
                                return (u) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const o = `mouse${t}`,
                                        a = _[t]((e) => u([e, 'outside']));
                                    function s(e) {
                                        u([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(o, s),
                                        n(),
                                        () => {
                                            r &&
                                                (a(),
                                                window.removeEventListener(o, s),
                                                (e.listeners -= 1),
                                                n(),
                                                (r = !1));
                                        }
                                    );
                                };
                            })(u)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, r, {
                        disable() {
                            (e.enabled = !1), n();
                        },
                        enable() {
                            (e.enabled = !0), n();
                        },
                        enableOutside() {
                            e.enabled && i(!0);
                        },
                        disableOutside() {
                            e.enabled && i(!1);
                        },
                    });
                })();
                function F(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function f(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const v = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function p(e, t, u = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, u);
                }
                function h(e, t, u) {
                    return `url(${p(e, t, u)})`;
                }
                const g = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    A = {
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
                    C = ['args'];
                const B = 2,
                    b = 16,
                    w = 32,
                    D = 64,
                    y = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        r = {},
                                        o = Object.keys(e);
                                    for (n = 0; n < o.length; n++) (u = o[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                    return r;
                                })(t, C);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, o, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([e, t]) => {
                                                  const u = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: u, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: u, name: e, bool: t };
                                                      default:
                                                          return { __Type: u, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: u, type: e });
                        var n;
                    },
                    S = {
                        close(e) {
                            y('popover' === e ? B : w);
                        },
                        minimize() {
                            y(D);
                        },
                        move(e) {
                            y(b, { isMouseEvent: !0, on: e });
                        },
                    };
                function k(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function O(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function M(e, t, u, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, u, n);
                }
                function P(e, t, u) {
                    return viewEnv.addDataChangedCallback(e, t, u);
                }
                function R(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function T(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function x(e, t, u = 'px') {
                    return 'rem' === u ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function N(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: W(t.x), y: W(t.y) };
                }
                function L() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function I() {
                    return viewEnv.getScale();
                }
                function H(e) {
                    return viewEnv.pxToRem(e);
                }
                function W(e) {
                    return viewEnv.remToPx(e);
                }
                function z(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function V() {
                    return viewEnv.isFocused();
                }
                function U() {
                    return viewEnv.setEventHandled();
                }
                function j() {
                    return viewEnv.isEventHandled();
                }
                function G() {
                    viewEnv.forceTriggerMouseMove();
                }
                function K() {
                    return viewEnv.getShowingStatus();
                }
                const q = Object.keys(g).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === g[t]), e), {}),
                    Y = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    $ = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : A.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    X = { view: a, client: r };
            },
            521: (e, t, u) => {
                'use strict';
                let n, r;
                u.d(t, { n: () => n }),
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
            368: () => {
                !(function () {
                    let e,
                        t,
                        u,
                        n,
                        r,
                        o,
                        a,
                        s = -1;
                    document.addEventListener('mousedown', (u) => {
                        document.getSelection().empty(),
                            u.target.select &&
                                -1 === s &&
                                ((e = u.target), (t = e.getBoundingClientRect()), e.setSelectionRange(0, 0));
                    }),
                        document.addEventListener('mousemove', (u) => {
                            if ((-1 === s && u.target.select && u.target === e && (s = e.selectionStart), s > -1)) {
                                const n = Math.min(Math.max(u.x, t.left), t.right),
                                    r = Math.min(Math.max(u.y, t.top), t.bottom),
                                    o = document.createEvent('MouseEvent');
                                o.initMouseEvent('mousedown', !0, !0, null, 1, n, r, n, r, !1, !1, !1, !1, 0, null),
                                    e.dispatchEvent(o);
                                const a = e.selectionEnd;
                                a > s ? e.setSelectionRange(s, a, 'forward') : e.setSelectionRange(a, s, 'backward');
                            }
                        }),
                        document.addEventListener('mouseup', () => {
                            (e = null), (s = -1);
                        }),
                        document.addEventListener('dblclick', (e) => {
                            e.target.select &&
                                (document.getSelection().empty(),
                                (u = e.target),
                                (n = e.target.value),
                                (r = u.selectionStart),
                                (o = -1 !== n.lastIndexOf(' ', r) ? n.lastIndexOf(' ', r) + 1 : 0),
                                (a = -1 !== n.indexOf(' ', r) ? n.indexOf(' ', r) : n.length),
                                u.setSelectionRange(o, a, 'forward'));
                        });
                })(),
                    (function () {
                        let e = null;
                        document.addEventListener('mousedown', (t) => {
                            document.getSelection().empty(),
                                0 !== t.button ||
                                    t.target.select ||
                                    e ||
                                    (e = document.caretPositionFromPoint(t.x, t.y));
                        }),
                            document.addEventListener('mousemove', (t) => {
                                if (0 === t.button && !t.target.select && e) {
                                    const u = document.caretPositionFromPoint(t.x, t.y);
                                    if (!u.offsetNode || !e.offsetNode) return;
                                    document
                                        .getSelection()
                                        .setBaseAndExtent(e.offsetNode, e.offset, u.offsetNode, u.offset);
                                }
                            }),
                            document.addEventListener('mouseup', () => {
                                e = null;
                            });
                    })();
            },
            358: (e, t, u) => {
                'use strict';
                u.d(t, { Z: () => o });
                var n = u(67);
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
                    addCallback(e, t, u = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const o = n.O.view.addModelObserver(e, u, r);
                        return (
                            o > 0
                                ? ((this._callbacks[o] = t),
                                  u > 0 && (this._views[u] ? this._views[u].push(o) : (this._views[u] = [o])))
                                : console.error("Can't add callback for model:", e),
                            o
                        );
                    }
                    removeCallback(e, t = 0) {
                        let u = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((u = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            u || console.error("Can't remove callback by id:", e),
                            u
                        );
                    }
                    _emmitDataChanged(e, t, u) {
                        u.forEach((u) => {
                            const n = this._callbacks[u];
                            void 0 !== n && n(e, t);
                        });
                    }
                }
                r.__instance = void 0;
                const o = r;
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
            491: (e, t, u) => {
                'use strict';
                u.d(t, { Sw: () => o.Z, B0: () => s.B0, ry: () => i.ry });
                class n {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: u }) => {
                                    let n = e.target;
                                    do {
                                        if (n === t) return;
                                        n = n.parentNode;
                                    } while (n);
                                    u();
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
                        const u = e,
                            n = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== u || t !== n)),
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
                var o = u(358);
                var a = u(613),
                    s = u(251),
                    i = u(72),
                    l = u(572);
                const c = r.instance,
                    d = {
                        DataTracker: o.Z,
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
                        dumpViewModel: function e(t) {
                            const u = {};
                            if ('object' != typeof t) return t;
                            for (const n in t)
                                if (Object.prototype.hasOwnProperty.call(t, n)) {
                                    const r = Object.prototype.toString.call(t[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = t[n];
                                        u[n] = [];
                                        for (let t = 0; t < r.length; t++) u[n].push({ value: e(r[t].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (u[n] = e(t[n]))
                                            : (u[n] = t[n]);
                                }
                            return u;
                        },
                        ClickOutsideManager: c,
                        SystemLocale: a.Z5,
                        UserLocale: a.cy,
                    };
                window.ViewEnvHelper = d;
            },
            613: (e, t, u) => {
                'use strict';
                u.d(t, { Z5: () => n, cy: () => r });
                const n = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    r = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, u) => userLocale.getTimeFormat(e, t, void 0 === u || u),
                        getTimeString: (e, t, u) => userLocale.getTimeString(e, t, void 0 === u || u),
                    };
            },
            251: (e, t, u) => {
                'use strict';
                let n;
                u.d(t, { B0: () => n, B3: () => r, Gr: () => o, kH: () => s, lf: () => a }),
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
                    o = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    a = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    s = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
            },
            72: (e, t, u) => {
                'use strict';
                u.d(t, {
                    Eu: () => c,
                    KE: () => v,
                    Kv: () => i,
                    P3: () => f,
                    SU: () => A,
                    SW: () => E,
                    Sy: () => _,
                    VM: () => C,
                    c9: () => d,
                    ry: () => l,
                    uM: () => p,
                    uk: () => F,
                    wU: () => h,
                    wv: () => m,
                });
                var n = u(521),
                    r = u(67),
                    o = u(251);
                const a = ['args'];
                function s(e, t, u, n, r, o, a) {
                    try {
                        var s = e[o](a),
                            i = s.value;
                    } catch (e) {
                        return void u(e);
                    }
                    s.done ? t(i) : Promise.resolve(i).then(n, r);
                }
                const i = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    l = (function () {
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
                                        u = arguments;
                                    return new Promise(function (n, r) {
                                        var o = e.apply(t, u);
                                        function a(e) {
                                            s(o, n, r, a, i, 'next', e);
                                        }
                                        function i(e) {
                                            s(o, n, r, a, i, 'throw', e);
                                        }
                                        a(void 0);
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
                    d = (e, t) => {
                        const u = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var u,
                                        n,
                                        r = {},
                                        o = Object.keys(e);
                                    for (n = 0; n < o.length; n++) (u = o[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                    return r;
                                })(t, a);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: u, type: e }, o, {
                                          arguments:
                                              ((n = r),
                                              Object.entries(n).map(([e, t]) => {
                                                  const u = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          u.number = t;
                                                          break;
                                                      case 'boolean':
                                                          u.bool = t;
                                                          break;
                                                      default:
                                                          u.string = t.toString();
                                                  }
                                                  return u;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: u, type: e }, o));
                        } else viewEnv.handleViewEvent({ __Type: u, type: e });
                        var n;
                    },
                    m = (e) => d(o.B0.MOVE, { isMouseEvent: !0, on: e }),
                    _ = () => d(o.B0.CLOSE),
                    E = () => d(o.B0.POP_OVER, { on: !1 }),
                    F = (e, t, u = 0) => {
                        d(o.B0.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: u, args: t });
                    },
                    f = (e, t, u, n, a = R.invalid('resId'), s) => {
                        const l = r.O.view.getViewGlobalPosition(),
                            c = u.getBoundingClientRect(),
                            m = c.x,
                            _ = c.y,
                            E = c.width,
                            F = c.height,
                            f = {
                                x: r.O.view.pxToRem(m) + l.x,
                                y: r.O.view.pxToRem(_) + l.y,
                                width: r.O.view.pxToRem(E),
                                height: r.O.view.pxToRem(F),
                            };
                        d(o.B0.POP_OVER, {
                            isMouseEvent: !0,
                            contentID: e,
                            decoratorID: n || R.invalid('resId'),
                            targetID: a,
                            direction: t,
                            bbox: i(f),
                            on: !0,
                            args: s,
                        });
                    },
                    v = () => viewEnv.isWindowShownByViewEvent(o.B0.TOOLTIP),
                    p = () => viewEnv.isWindowShownByViewEvent(o.B0.CONTEXT_MENU),
                    h = () => viewEnv.isWindowShownByViewEvent(o.B0.POP_OVER),
                    g = (e, t) => {
                        e.keyCode === n.n.ESCAPE && t();
                    },
                    A = (e) => {
                        g(e, _);
                    },
                    C = (e) => {
                        const t = (t) => g(t, e);
                        return window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t);
                    };
            },
            244: (e, t, u) => {
                'use strict';
                var n = {};
                u.r(n),
                    u.d(n, {
                        Area: () => G,
                        Bar: () => V,
                        DefaultScroll: () => j,
                        Direction: () => w,
                        defaultSettings: () => D,
                        useHorizontalScrollApi: () => S,
                    });
                var r = {};
                u.r(r), u.d(r, { Area: () => le, Bar: () => ae, Default: () => ie, useVerticalScrollApi: () => K });
                u(368);
                var o = u(483),
                    a = u.n(o);
                function s(e) {
                    engine.call('PlaySound', e);
                }
                var i = u(179),
                    l = u.n(i);
                const c = {
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
                let d, m;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(d || (d = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(m || (m = {}));
                const _ = ({
                    children: e,
                    size: t,
                    isFocused: u,
                    type: n,
                    disabled: r,
                    mixClass: o,
                    soundHover: m,
                    soundClick: _,
                    onMouseEnter: E,
                    onMouseMove: F,
                    onMouseDown: f,
                    onMouseUp: v,
                    onMouseLeave: p,
                    onClick: h,
                }) => {
                    const g = (0, i.useRef)(null),
                        A = (0, i.useState)(u),
                        C = A[0],
                        B = A[1],
                        b = (0, i.useState)(!1),
                        w = b[0],
                        D = b[1],
                        y = (0, i.useState)(!1),
                        S = y[0],
                        k = y[1],
                        O = (0, i.useCallback)(() => {
                            r || (g.current && (g.current.focus(), B(!0)));
                        }, [r]),
                        M = (0, i.useCallback)(
                            (e) => {
                                C && null !== g.current && !g.current.contains(e.target) && B(!1);
                            },
                            [C],
                        ),
                        P = (0, i.useCallback)(
                            (e) => {
                                r || (h && h(e));
                            },
                            [r, h],
                        ),
                        T = (0, i.useCallback)(
                            (e) => {
                                r || (null !== m && s(m), E && E(e), k(!0));
                            },
                            [r, m, E],
                        ),
                        x = (0, i.useCallback)(
                            (e) => {
                                F && F(e);
                            },
                            [F],
                        ),
                        N = (0, i.useCallback)(
                            (e) => {
                                r || (v && v(e), D(!1));
                            },
                            [r, v],
                        ),
                        L = (0, i.useCallback)(
                            (e) => {
                                r || (null !== _ && s(_), f && f(e), u && O(), D(!0));
                            },
                            [r, _, f, O, u],
                        ),
                        I = (0, i.useCallback)(
                            (e) => {
                                r || (p && p(e), D(!1));
                            },
                            [r, p],
                        ),
                        H = a()(
                            c.base,
                            c[`base__${n}`],
                            {
                                [c.base__disabled]: r,
                                [c[`base__${t}`]]: t,
                                [c.base__focus]: C,
                                [c.base__highlightActive]: w,
                                [c.base__firstHover]: S,
                            },
                            o,
                        ),
                        W = a()(c.state, c.state__default);
                    return (
                        (0, i.useEffect)(
                            () => (
                                document.addEventListener('mousedown', M),
                                () => {
                                    document.removeEventListener('mousedown', M);
                                }
                            ),
                            [M],
                        ),
                        (0, i.useEffect)(() => {
                            B(u);
                        }, [u]),
                        l().createElement(
                            'div',
                            {
                                ref: g,
                                className: H,
                                onMouseEnter: T,
                                onMouseMove: x,
                                onMouseUp: N,
                                onMouseDown: L,
                                onMouseLeave: I,
                                onClick: P,
                            },
                            n !== d.ghost &&
                                l().createElement(
                                    l().Fragment,
                                    null,
                                    l().createElement('div', { className: c.back }),
                                    l().createElement('span', { className: c.texture }),
                                ),
                            l().createElement(
                                'span',
                                { className: W },
                                l().createElement('span', { className: c.stateDisabled }),
                                l().createElement('span', { className: c.stateHighlightHover }),
                                l().createElement('span', { className: c.stateHighlightActive }),
                            ),
                            l().createElement(
                                'span',
                                { className: c.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                _.defaultProps = { type: d.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const E = (0, i.memo)(_),
                    F = (e) => {
                        let t,
                            u = null;
                        return (
                            (u = requestAnimationFrame(() => {
                                u = requestAnimationFrame(() => {
                                    (u = null), (t = e());
                                });
                            })),
                            () => {
                                'function' == typeof t && t(), null !== u && cancelAnimationFrame(u);
                            }
                        );
                    },
                    f = (e, t, u) => (u < e ? e : u > t ? t : u);
                var v = u(67);
                const p = [];
                function h(e) {
                    const t = (0, i.useRef)(e);
                    return (
                        (0, i.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, i.useCallback)((...e) => (0, t.current)(...e), p)
                    );
                }
                function g(e, t, u = []) {
                    const n = (0, i.useRef)(0),
                        r = (0, i.useCallback)(() => window.clearInterval(n.current), u || []);
                    (0, i.useEffect)(() => r, [r]);
                    const o = (null != u ? u : []).concat([t]);
                    return [
                        (0, i.useCallback)((u) => {
                            (n.current = window.setInterval(() => e(u, !0), t)), e(u, !1);
                        }, o),
                        r,
                    ];
                }
                function A(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return C(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)) return C(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        u && (e = u);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function C(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                function B(e, t, u) {
                    const n = (0, i.useMemo)(
                        () =>
                            (function (e, t, u, n) {
                                let r,
                                    o = !1,
                                    a = 0;
                                function s() {
                                    r && clearTimeout(r);
                                }
                                function i(...i) {
                                    const l = this,
                                        c = Date.now() - a;
                                    function d() {
                                        (a = Date.now()), u.apply(l, i);
                                    }
                                    o ||
                                        (n && !r && d(),
                                        s(),
                                        void 0 === n && c > e
                                            ? d()
                                            : !0 !== t &&
                                              (r = setTimeout(
                                                  n
                                                      ? function () {
                                                            r = void 0;
                                                        }
                                                      : d,
                                                  void 0 === n ? e - c : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof t && ((n = u), (u = t), (t = void 0)),
                                    (i.cancel = function () {
                                        s(), (o = !0);
                                    }),
                                    i
                                );
                            })(u, e),
                        t,
                    );
                    return (0, i.useEffect)(() => n.cancel, [n]), n;
                }
                var b = u(30);
                let w;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(w || (w = {}));
                const D = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    y = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: u,
                        getDirection: n,
                        getWrapperSize: r,
                        triggerMouseMoveOnUpdate: o = !1,
                    }) => {
                        const a = (e, u) => {
                            const n = t(e),
                                r = n[0],
                                o = n[1];
                            return o <= r ? 0 : f(r, o, u);
                        };
                        return (s = {}) => {
                            const l = s.settings,
                                c = void 0 === l ? D : l,
                                d = (0, i.useRef)(null),
                                m = (0, i.useRef)(null),
                                _ = (() => {
                                    const e = (0, i.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        u = (e, u) => {
                                            t(e).set(u, u);
                                        },
                                        n = (e, u) => {
                                            t(e).delete(u);
                                        },
                                        r = (e, ...u) => {
                                            for (var n, r = A(t(e).values()); !(n = r()).done; ) (0, n.value)(...u);
                                        };
                                    return (0, i.useMemo)(() => ({ on: u, off: n, trigger: r }), []);
                                })(),
                                E = B(
                                    () => {
                                        v.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                f = (0, b.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = d.current;
                                        t && (u(t, e), _.trigger('change', e), o && E());
                                    },
                                    onRest: (e) => _.trigger('rest', e),
                                    onStart: (e) => _.trigger('start', e),
                                    onPause: (e) => _.trigger('pause', e),
                                })),
                                p = f[0],
                                g = f[1],
                                C = (0, i.useCallback)(
                                    (e, t, u) => {
                                        var n;
                                        const r = p.scrollPosition.get(),
                                            o = (null != (n = p.scrollPosition.goal) ? n : 0) - r;
                                        return a(e, t * u + o + r);
                                    },
                                    [p.scrollPosition],
                                ),
                                w = (0, i.useCallback)(
                                    (e, { immediate: t = !1, reset: u = !0 } = {}) => {
                                        const n = d.current;
                                        n &&
                                            g.start({
                                                scrollPosition: a(n, e),
                                                immediate: t,
                                                reset: u,
                                                config: c.animationConfig,
                                                from: { scrollPosition: a(n, p.scrollPosition.get()) },
                                            });
                                    },
                                    [g, c.animationConfig, p.scrollPosition],
                                ),
                                y = (0, i.useCallback)(
                                    (e) => {
                                        const t = d.current,
                                            u = m.current;
                                        if (!t || !u) return;
                                        const n = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return r(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(u, c.step),
                                            o = C(t, e, n);
                                        w(o);
                                    },
                                    [w, C, c.step],
                                ),
                                S = (0, i.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && y(n(e)),
                                            d.current && _.trigger('mouseWheel', e, p.scrollPosition, t(d.current));
                                    },
                                    [p.scrollPosition, y, _],
                                ),
                                k = ((e, t = []) => {
                                    const u = (0, i.useRef)(),
                                        n = (0, i.useCallback)((...t) => {
                                            u.current && u.current(), (u.current = e(...t));
                                        }, t);
                                    return (
                                        (0, i.useEffect)(
                                            () => () => {
                                                u.current && u.current();
                                            },
                                            [n],
                                        ),
                                        n
                                    );
                                })(
                                    () =>
                                        F(() => {
                                            const e = d.current;
                                            e &&
                                                (w(a(e, p.scrollPosition.goal), { immediate: !0 }),
                                                _.trigger('resizeHandled'));
                                        }),
                                    [w, p.scrollPosition.goal],
                                ),
                                O = h(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const t = a(e, p.scrollPosition.goal);
                                    t !== p.scrollPosition.goal && w(t, { immediate: !0 }),
                                        _.trigger('recalculateContent');
                                });
                            (0, i.useEffect)(
                                () => (
                                    window.addEventListener('resize', k),
                                    () => {
                                        window.removeEventListener('resize', k);
                                    }
                                ),
                                [k],
                            );
                            return (0, i.useMemo)(
                                () => ({
                                    getWrapperSize: () => (m.current ? r(m.current) : void 0),
                                    getContainerSize: () => (d.current ? e(d.current) : void 0),
                                    getBounds: () =>
                                        d.current
                                            ? t(d.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: a,
                                    handleMouseWheel: S,
                                    applyScroll: w,
                                    applyStepTo: y,
                                    contentRef: d,
                                    wrapperRef: m,
                                    scrollPosition: g,
                                    animationScroll: p,
                                    recalculateContent: O,
                                    events: { on: _.on, off: _.off },
                                }),
                                [p.scrollPosition, w, y, _.off, _.on, O, S, g, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    S = y({
                        getBounds: (e) => {
                            var t, u;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (t = null == (u = e.parentElement) ? void 0 : u.offsetWidth) ? t : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, t) => {
                            e.style.transform = `translateX(-${t.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? w.Next : w.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    k = 'HorizontalBar_base_49',
                    O = 'HorizontalBar_base__nonActive_82',
                    M = 'HorizontalBar_leftButton_5f',
                    P = 'HorizontalBar_rightButton_03',
                    T = 'HorizontalBar_track_0d',
                    x = 'HorizontalBar_thumb_fd',
                    N = 'HorizontalBar_rail_32',
                    L = 'disable',
                    I = { pending: !1, offset: 0 },
                    H = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    W = () => {},
                    z = (e, t) => Math.max(20, e.offsetWidth * t),
                    V = (0, i.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = H, onDrag: n = W }) => {
                        const r = (0, i.useRef)(null),
                            o = (0, i.useRef)(null),
                            c = (0, i.useRef)(null),
                            d = (0, i.useRef)(null),
                            m = (0, i.useRef)(null),
                            _ = e.stepTimeout || 100,
                            E = (0, i.useState)(I),
                            p = E[0],
                            A = E[1],
                            C = (0, i.useCallback)(
                                (e) => {
                                    A(e),
                                        m.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: m.current });
                                },
                                [n],
                            ),
                            B = () => {
                                const t = d.current,
                                    u = m.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && t && u && r)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / r),
                                    i = f(0, 1, a / (r - n)),
                                    l = (t.offsetWidth - z(t, s)) * i;
                                (u.style.transform = `translateX(${0 | l}px)`),
                                    ((e) => {
                                        if (o.current && c.current && d.current && m.current) {
                                            if (0 === e)
                                                return o.current.classList.add(L), void c.current.classList.remove(L);
                                            if (
                                                ((t = d.current),
                                                (u = m.current),
                                                e - (t.offsetWidth - u.offsetWidth) >= -0.5)
                                            )
                                                return o.current.classList.remove(L), void c.current.classList.add(L);
                                            var t, u;
                                            o.current.classList.remove(L), c.current.classList.remove(L);
                                        }
                                    })(l);
                            },
                            b = h(() => {
                                (() => {
                                    const t = m.current,
                                        u = d.current,
                                        n = e.getWrapperSize(),
                                        o = e.getContainerSize();
                                    if (!(o && t && n && u)) return;
                                    const a = Math.min(1, n / o);
                                    (t.style.width = `${z(u, a)}px`),
                                        (t.style.display = 'flex'),
                                        r.current &&
                                            (1 === a ? r.current.classList.add(O) : r.current.classList.remove(O));
                                })(),
                                    B();
                            });
                        (0, i.useEffect)(() => F(b)),
                            (0, i.useEffect)(
                                () =>
                                    F(() => {
                                        const t = () => {
                                            B();
                                        };
                                        let u = W;
                                        const n = () => {
                                            u(), (u = F(b));
                                        };
                                        return (
                                            e.events.on('recalculateContent', b),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                u(),
                                                    e.events.off('recalculateContent', b),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', n);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, i.useEffect)(() => {
                                if (!p.pending) return;
                                const t = v.O.client.events.mouse.move(([t, u]) => {
                                        var r;
                                        const o = e.contentRef.current,
                                            a = e.wrapperRef.current;
                                        if (!o || !a) return;
                                        const s = d.current,
                                            i = m.current;
                                        if (!s || !i) return;
                                        if ('inside' === u && t.clientX < 0) return;
                                        const l = t.clientX - p.offset - s.getBoundingClientRect().x,
                                            c = (l / s.offsetWidth) * (null != (r = e.getContainerSize()) ? r : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(o, c),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: i, thumbOffset: l, contentOffset: c });
                                    }),
                                    u = v.O.client.events.mouse.up(() => {
                                        t(), C(I);
                                    });
                                return () => {
                                    t(), u();
                                };
                            }, [e, p.offset, p.pending, n, C]);
                        const D = g((t) => e.applyStepTo(t), _, [e]),
                            y = D[0],
                            S = D[1];
                        (0, i.useEffect)(
                            () => (
                                document.addEventListener('mouseup', S, !0),
                                () => document.removeEventListener('mouseup', S, !0)
                            ),
                            [S],
                        );
                        const R = (e) => {
                            e.target.classList.contains(L) || s('highlight');
                        };
                        return l().createElement(
                            'div',
                            { className: a()(k, t.base), ref: r, onWheel: e.handleMouseWheel },
                            l().createElement('div', {
                                className: a()(M, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(L) || 0 !== e.button || (s('play'), y(w.Next));
                                },
                                onMouseUp: S,
                                ref: o,
                                onMouseEnter: R,
                            }),
                            l().createElement(
                                'div',
                                {
                                    className: a()(T, t.track),
                                    onMouseDown: (t) => {
                                        const n = m.current;
                                        if (n && 0 === t.button)
                                            if ((s('play'), t.target === n))
                                                C({ pending: !0, offset: t.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const n = m.current,
                                                        r = e.contentRef.current;
                                                    if (!n || !r) return;
                                                    const o = u(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + o * t);
                                                })(t.screenX > n.getBoundingClientRect().x ? w.Prev : w.Next);
                                            }
                                    },
                                    ref: d,
                                    onMouseEnter: R,
                                },
                                l().createElement('div', { ref: m, className: a()(x, t.thumb) }),
                                l().createElement('div', { className: a()(N, t.rail) }),
                            ),
                            l().createElement('div', {
                                className: a()(P, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(L) || 0 !== e.button || (s('play'), y(w.Prev));
                                },
                                onMouseUp: S,
                                ref: c,
                                onMouseEnter: R,
                            }),
                        );
                    }),
                    U = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    j = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: n,
                        areaClassName: r,
                        classNames: o,
                        scrollClassName: s,
                        getStepByRailClick: c,
                        onDrag: d,
                    }) => {
                        const m = (0, i.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: a()(U.base, e.base) });
                            }, [n]),
                            _ = (0, i.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return l().createElement(
                            'div',
                            { className: a()(U.defaultScroll, u), onWheel: t.handleMouseWheel },
                            l().createElement(
                                'div',
                                { className: a()(U.defaultScrollArea, r) },
                                l().createElement(G, { className: s, api: _, classNames: o }, e),
                            ),
                            l().createElement(V, { getStepByRailClick: c, api: t, onDrag: d, classNames: m }),
                        );
                    },
                    G = ({ api: e, className: t, classNames: u, children: n }) => (
                        (0, i.useEffect)(() => F(e.recalculateContent)),
                        l().createElement(
                            'div',
                            { className: a()(U.base, t) },
                            l().createElement(
                                'div',
                                {
                                    className: a()(U.wrapper, null == u ? void 0 : u.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                l().createElement(
                                    'div',
                                    { className: a()(U.content, null == u ? void 0 : u.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                (G.Bar = V), (G.Default = j);
                const K = y({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? w.Next : w.Prev),
                    }),
                    q = 'VerticalBar_base_f3',
                    Y = 'VerticalBar_base__nonActive_42',
                    $ = 'VerticalBar_topButton_d7',
                    X = 'VerticalBar_bottomButton_06',
                    Z = 'VerticalBar_track_df',
                    Q = 'VerticalBar_thumb_32',
                    J = 'VerticalBar_rail_43',
                    ee = 'disable',
                    te = () => {},
                    ue = { pending: !1, offset: 0 },
                    ne = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    re = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    oe = (e, t) => Math.max(20, e.offsetHeight * t),
                    ae = (0, i.memo)(({ api: e, classNames: t = {}, getStepByRailClick: u = ne, onDrag: n = te }) => {
                        const r = (0, i.useRef)(null),
                            o = (0, i.useRef)(null),
                            c = (0, i.useRef)(null),
                            d = (0, i.useRef)(null),
                            m = (0, i.useRef)(null),
                            _ = e.stepTimeout || 100,
                            E = (0, i.useState)(ue),
                            p = E[0],
                            A = E[1],
                            C = (0, i.useCallback)(
                                (e) => {
                                    A(e),
                                        m.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: m.current });
                                },
                                [n],
                            ),
                            B = h(() => {
                                const t = m.current,
                                    u = d.current,
                                    n = e.getWrapperSize(),
                                    o = e.getContainerSize();
                                if (!(n && o && t && u)) return;
                                const a = Math.min(1, n / o);
                                return (
                                    (t.style.height = `${oe(u, a)}px`),
                                    (t.style.display = 'flex'),
                                    r.current && (1 === a ? r.current.classList.add(Y) : r.current.classList.remove(Y)),
                                    a
                                );
                            }),
                            b = h(() => {
                                const t = d.current,
                                    u = m.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && t && u && r)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / r),
                                    i = f(0, 1, a / (r - n)),
                                    l = (t.offsetHeight - oe(t, s)) * i;
                                (u.style.transform = `translateY(${0 | l}px)`),
                                    ((e) => {
                                        if (o.current && c.current && d.current && m.current) {
                                            if (0 === Math.round(e))
                                                return o.current.classList.add(ee), void c.current.classList.remove(ee);
                                            if (
                                                ((t = d.current),
                                                (u = m.current),
                                                e - (t.offsetHeight - u.offsetHeight) >= -0.5)
                                            )
                                                return o.current.classList.remove(ee), void c.current.classList.add(ee);
                                            var t, u;
                                            o.current.classList.remove(ee), c.current.classList.remove(ee);
                                        }
                                    })(l);
                            }),
                            D = h(() => {
                                re(e, () => {
                                    B(), b();
                                });
                            });
                        (0, i.useEffect)(() => F(D)),
                            (0, i.useEffect)(() => {
                                const t = () => {
                                    re(e, () => {
                                        b();
                                    });
                                };
                                let u = te;
                                const n = () => {
                                    u(), (u = F(D));
                                };
                                return (
                                    e.events.on('recalculateContent', D),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        u(),
                                            e.events.off('recalculateContent', D),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', n);
                                    }
                                );
                            }, [e]),
                            (0, i.useEffect)(() => {
                                if (!p.pending) return;
                                const t = v.O.client.events.mouse.up(() => {
                                        C(ue);
                                    }),
                                    u = v.O.client.events.mouse.move(([t]) => {
                                        re(e, (u) => {
                                            const r = d.current,
                                                o = m.current,
                                                a = e.getContainerSize();
                                            if (!r || !o || !a) return;
                                            const s = t.screenY - p.offset - r.getBoundingClientRect().y,
                                                i = (s / r.offsetHeight) * a;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(u, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: u.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: o, thumbOffset: s, contentOffset: i });
                                        });
                                    });
                                return () => {
                                    t(), u();
                                };
                            }, [e, p.offset, p.pending, n, C]);
                        const y = g((t) => e.applyStepTo(t), _, [e]),
                            S = y[0],
                            k = y[1];
                        (0, i.useEffect)(
                            () => (
                                document.addEventListener('mouseup', k, !0),
                                () => document.removeEventListener('mouseup', k, !0)
                            ),
                            [k],
                        );
                        const O = (e) => {
                            e.target.classList.contains(ee) || s('highlight');
                        };
                        return l().createElement(
                            'div',
                            { className: a()(q, t.base), ref: r, onWheel: e.handleMouseWheel },
                            l().createElement('div', {
                                className: a()($, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ee) || 0 !== e.button || (s('play'), S(w.Next));
                                },
                                ref: o,
                                onMouseEnter: O,
                            }),
                            l().createElement(
                                'div',
                                {
                                    className: a()(Z, t.track),
                                    onMouseDown: (t) => {
                                        const n = m.current;
                                        if (n && 0 === t.button)
                                            if ((s('play'), t.target === n))
                                                C({ pending: !0, offset: t.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    m.current &&
                                                        re(e, (n) => {
                                                            if (!n) return;
                                                            const r = u(e),
                                                                o = e.clampPosition(n, n.scrollTop + r * t);
                                                            e.applyScroll(o);
                                                        });
                                                })(t.screenY > n.getBoundingClientRect().y ? w.Prev : w.Next);
                                            }
                                    },
                                    ref: d,
                                    onMouseEnter: O,
                                },
                                l().createElement('div', { ref: m, className: a()(Q, t.thumb) }),
                                l().createElement('div', { className: a()(J, t.rail) }),
                            ),
                            l().createElement('div', {
                                className: a()(X, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ee) || 0 !== e.button || (s('play'), S(w.Prev));
                                },
                                onMouseUp: k,
                                ref: c,
                                onMouseEnter: O,
                            }),
                        );
                    }),
                    se = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    ie = ({
                        children: e,
                        api: t,
                        className: u,
                        barClassNames: n,
                        areaClassName: r,
                        scrollClassName: o,
                        scrollClassNames: s,
                        getStepByRailClick: c,
                        onDrag: d,
                    }) => {
                        const m = (0, i.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: a()(se.base, e.base) });
                            }, [n]),
                            _ = (0, i.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return l().createElement(
                            'div',
                            { className: a()(se.defaultScroll, u), onWheel: t.handleMouseWheel },
                            l().createElement(
                                'div',
                                { className: a()(se.area, r) },
                                l().createElement(le, { className: o, classNames: s, api: _ }, e),
                            ),
                            l().createElement(ae, { getStepByRailClick: c, api: t, onDrag: d, classNames: m }),
                        );
                    },
                    le = ({ className: e, classNames: t, children: u, api: n }) => (
                        (0, i.useEffect)(() => F(n.recalculateContent)),
                        l().createElement(
                            'div',
                            { className: a()(se.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            l().createElement(
                                'div',
                                { className: a()(se.content, null == t ? void 0 : t.content), ref: n.contentRef },
                                u,
                            ),
                        )
                    );
                le.Default = ie;
                const ce = { Vertical: r, Horizontal: n },
                    de = (e = 1) => {
                        const t = new Error().stack;
                        let u,
                            n = R.invalid('resId');
                        return (
                            t &&
                                ((u = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                window.__feature &&
                                    window.__feature !== u &&
                                    window.subViews[u] &&
                                    (n = window.subViews[u].id)),
                            { caller: u, stack: t, resId: n }
                        );
                    };
                var me = u(491);
                const _e = [
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
                function Ee(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const u = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                u.number = t;
                                break;
                            case 'boolean':
                                u.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                u.string = t.toString();
                        }
                        return u;
                    });
                }
                const Fe = (e, t, u = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: me.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                u,
                            ),
                        );
                    },
                    fe = (e) => {
                        let t = e.children,
                            u = e.contentId,
                            n = e.args,
                            r = e.onMouseEnter,
                            o = e.onMouseLeave,
                            a = e.onMouseDown,
                            s = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            d = e.ignoreMouseClick,
                            m = void 0 !== d && d,
                            _ = e.decoratorId,
                            E = void 0 === _ ? 0 : _,
                            F = e.isEnabled,
                            f = void 0 === F || F,
                            v = e.targetId,
                            p = void 0 === v ? 0 : v,
                            h = e.onShow,
                            g = e.onHide,
                            A = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) (u = o[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, _e);
                        const C = (0, i.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            B = (0, i.useMemo)(() => p || de().resId, [p]),
                            b = (0, i.useCallback)(() => {
                                (C.current.isVisible && C.current.timeoutId) ||
                                    (Fe(u, E, { isMouseEvent: !0, on: !0, arguments: Ee(n) }, B),
                                    h && h(),
                                    (C.current.isVisible = !0));
                            }, [u, E, n, B, h]),
                            w = (0, i.useCallback)(() => {
                                if (C.current.isVisible || C.current.timeoutId) {
                                    const e = C.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (C.current.timeoutId = 0)),
                                        Fe(u, E, { on: !1 }, B),
                                        C.current.isVisible && g && g(),
                                        (C.current.isVisible = !1);
                                }
                            }, [u, E, B, g]),
                            D = (0, i.useCallback)((e) => {
                                C.current.isVisible &&
                                    ((C.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (C.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(C.current.prevTarget) && w();
                                    }, 200)));
                            }, []);
                        (0, i.useEffect)(() => {
                            const e = C.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', D, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', D, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, i.useEffect)(() => {
                                !1 === f && w();
                            }, [f, w]),
                            (0, i.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', w),
                                    () => {
                                        window.removeEventListener('mouseleave', w), w();
                                    }
                                ),
                                [w],
                            );
                        return f
                            ? (0, i.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((y = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((C.current.timeoutId = window.setTimeout(b, c ? 100 : 400)),
                                                      r && r(e),
                                                      y && y(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              w(), null == o || o(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === m && w(), null == s || s(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === m && w(), null == a || a(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      A,
                                  ),
                              )
                            : t;
                        var y;
                    },
                    ve = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function pe() {
                    return (
                        (pe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        pe.apply(this, arguments)
                    );
                }
                const he = R.views.common.tooltip_window.simple_tooltip_content,
                    ge = (e) => {
                        let t = e.children,
                            u = e.body,
                            n = e.header,
                            r = e.note,
                            o = e.alert,
                            a = e.args,
                            s = (function (e, t) {
                                if (null == e) return {};
                                var u,
                                    n,
                                    r = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) (u = o[n]), t.indexOf(u) >= 0 || (r[u] = e[u]);
                                return r;
                            })(e, ve);
                        const c = (0, i.useMemo)(() => {
                            const e = Object.assign({}, a, { body: u, header: n, note: r, alert: o });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [o, u, n, r, a]);
                        return l().createElement(
                            fe,
                            pe(
                                {
                                    contentId:
                                        ((d = null == a ? void 0 : a.hasHtmlContent),
                                        d ? he.SimpleTooltipHtmlContent('resId') : he.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                s,
                            ),
                            t,
                        );
                        var d;
                    },
                    Ae = (e, t) => e.split('.').reduce((e, t) => e && e[t], t),
                    Ce = (e) => {
                        const t = (0, i.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    Be = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    be = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    we = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, u) => {
                                const n = Ae(`${e}.${u}`, window);
                                return Be(n) ? t(e, u, n) : `${e}.${u}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    De = (e) => {
                        const t = ((e) => {
                                const t = de(),
                                    u = t.caller,
                                    n = t.resId,
                                    r = window.__feature && window.__feature !== u && u ? `subViews.${u}` : '';
                                return { modelPrefix: r, modelPath: be(r, e || ''), resId: n };
                            })(),
                            u = t.modelPrefix,
                            n = e.split('.');
                        if (n.length > 0) {
                            const e = [n[0]];
                            return (
                                n.reduce((t, n) => {
                                    const r = Ae(be(u, `${t}.${n}`), window);
                                    return Be(r) ? (e.push(r.id), `${t}.${n}.value`) : (e.push(n), `${t}.${n}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    },
                    ye = me.Sw.instance;
                let Se;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(Se || (Se = {}));
                const ke = (e = 'model', t = Se.Deep) => {
                    const u = (0, i.useState)(0),
                        n = (u[0], u[1]),
                        r = (0, i.useMemo)(() => de(), []),
                        o = r.caller,
                        a = r.resId,
                        s = (0, i.useMemo)(
                            () => (window.__feature && window.__feature !== o ? `subViews.${o}.${e}` : e),
                            [o, e],
                        ),
                        l = (0, i.useState)(() =>
                            ((e) => {
                                const t = Ae(e, window);
                                for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                return Be(t) ? t.value : t;
                            })(we(s)),
                        ),
                        c = l[0],
                        d = l[1],
                        m = (0, i.useRef)(-1);
                    return (
                        Ce(() => {
                            if (
                                ('boolean' == typeof t &&
                                    ((t = t ? Se.Deep : Se.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                t !== Se.None)
                            ) {
                                const u = (e) => {
                                        ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                        t === Se.Deep
                                            ? (e === c && n((e) => e + 1), d(e))
                                            : d(Object.assign([], e));
                                    },
                                    r = De(e);
                                m.current = ye.addCallback(r, u, a, t === Se.Deep);
                            }
                        }),
                        (0, i.useEffect)(() => {
                            if (t !== Se.None)
                                return () => {
                                    ye.removeCallback(m.current, a);
                                };
                        }, [a, t]),
                        c
                    );
                };
                var Oe = u(493),
                    Me = u.n(Oe);
                const Pe = (e) => `#${e}`,
                    Re = 'Chat_base_61',
                    Te = 'Chat_content_5c',
                    xe = 'Chat_channelNotification_3b',
                    Ne = 'Chat_scrollContainer_db',
                    Le = 'Chat_messages_fa',
                    Ie = 'Chat_messages__selectable_a7',
                    He = 'Chat_footer_5c',
                    We = 'Chat_input_b4',
                    ze = 'Chat_sendButtonContainer_32',
                    Ve = 'Chat_enterButtonContainer_99',
                    Ue = 'Chat_enterImage_97',
                    je = 'MessageText_emoji_6b';
                function Ge(e, t) {
                    var u = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (u) return (u = u.call(e)).next.bind(u);
                    if (
                        Array.isArray(e) ||
                        (u = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Ke(e, t);
                            var u = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === u && e.constructor && (u = e.constructor.name);
                            if ('Map' === u || 'Set' === u) return Array.from(e);
                            if ('Arguments' === u || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
                                return Ke(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        u && (e = u);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Ke(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var u = 0, n = new Array(t); u < t; u++) n[u] = e[u];
                    return n;
                }
                var qe;
                !(function (e) {
                    (e[(e.text = 0)] = 'text'), (e[(e.element = 1)] = 'element');
                })(qe || (qe = {}));
                const Ye = [
                        [':)', 'smiley_happy'],
                        ['=)', 'smiley_happy'],
                        [':-)', 'smiley_happy'],
                        [':\\', 'smiley_hmm'],
                        ['=\\', 'smiley_hmm'],
                        [':-\\', 'smiley_hmm'],
                        ['=/', 'smiley_hmm'],
                        [':-/', 'smiley_hmm'],
                        ['>:|', 'smiley_mad'],
                        ['>=|', 'smiley_mad'],
                        ['>:-|', 'smiley_mad'],
                        ['>:O', 'smiley_madah'],
                        ['>=O', 'smiley_madah'],
                        ['>:-O', 'smiley_madah'],
                        ['>:o', 'smiley_madah'],
                        ['>=o', 'smiley_madah'],
                        ['>:-o', 'smiley_madah'],
                        ['>:0', 'smiley_madah'],
                        ['>=0', 'smiley_madah'],
                        ['>:-0', 'smiley_madah'],
                        [':|', 'smiley_norm'],
                        ['=|', 'smiley_norm'],
                        [':-|', 'smiley_norm'],
                        [':O', 'smiley_oh'],
                        ['=O', 'smiley_oh'],
                        [':-O', 'smiley_oh'],
                        [':o', 'smiley_oh'],
                        ['=o', 'smiley_oh'],
                        [':-o', 'smiley_oh'],
                        ['=0', 'smiley_oh'],
                        [':-0', 'smiley_oh'],
                        [':(', 'smiley_sad'],
                        ['=(', 'smiley_sad'],
                        [':-(', 'smiley_sad'],
                        [':P', 'smiley_tongue'],
                        ['=P', 'smiley_tongue'],
                        [':-P', 'smiley_tongue'],
                        [':*', 'smiley_kiss'],
                        ['=*', 'smiley_kiss'],
                        [':-*', 'smiley_kiss'],
                        [';)', 'smiley_wink'],
                        [';-)', 'smiley_wink'],
                    ],
                    $e = (e) => R.images.gui.maps.icons.emoji.$dyn(e),
                    Xe = (e, [t, u]) =>
                        e.split(new RegExp(t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'), 'g')).reduce((e, t, n, r) => {
                            var o;
                            return (
                                e.push({ type: qe.text, content: t }),
                                r.length !== n + 1 &&
                                    e.push({
                                        type: qe.element,
                                        content: l().createElement('div', {
                                            style: ((o = $e(u)), { backgroundImage: `url('${o}')` }),
                                            className: je,
                                        }),
                                    }),
                                e
                            );
                        }, []),
                    Ze = (e, t, u) => (u % 2 ? (e[e.length - 1] += t) : e.push(t), e),
                    Qe = (e, t) => {
                        const u = [];
                        return (
                            e.forEach((e) =>
                                e.type === qe.element
                                    ? u.push(e.content)
                                    : u.push(
                                          ...((e, t) => {
                                              const u = { color: t };
                                              return e
                                                  .split(
                                                      /([\0-@\[-`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u036F\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482-\u0489\u0530\u0557\u0558\u055A-\u055F\u0589-\u05CF\u05EB-\u05EE\u05F3-\u061F\u064B-\u066D\u0670\u06D4\u06D6-\u06E4\u06E7-\u06ED\u06F0-\u06F9\u06FD\u06FE\u0700-\u070F\u0711\u0730-\u074C\u07A6-\u07B0\u07B2-\u07C9\u07EB-\u07F3\u07F6-\u07F9\u07FB-\u07FF\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u083F\u0859-\u085F\u086B-\u086F\u0888\u088F-\u089F\u08CA-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962-\u0970\u0981-\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA-\u09BC\u09BE-\u09CD\u09CF-\u09DB\u09DE\u09E2-\u09EF\u09F2-\u09FB\u09FD-\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A-\u0A58\u0A5D\u0A5F-\u0A71\u0A75-\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA-\u0ABC\u0ABE-\u0ACF\u0AD1-\u0ADF\u0AE2-\u0AF8\u0AFA-\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A-\u0B3C\u0B3E-\u0B5B\u0B5E\u0B62-\u0B70\u0B72-\u0B82\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BCF\u0BD1-\u0C04\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C3E-\u0C57\u0C5B\u0C5C\u0C5E\u0C5F\u0C62-\u0C7F\u0C81-\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA-\u0CBC\u0CBE-\u0CDC\u0CDF\u0CE2-\u0CF0\u0CF3-\u0D03\u0D0D\u0D11\u0D3B\u0D3C\u0D3E-\u0D4D\u0D4F-\u0D53\u0D57-\u0D5E\u0D62-\u0D79\u0D80-\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0E00\u0E31\u0E34-\u0E3F\u0E47-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EB1\u0EB4-\u0EBC\u0EBE\u0EBF\u0EC5\u0EC7-\u0EDB\u0EE0-\u0EFF\u0F01-\u0F3F\u0F48\u0F6D-\u0F87\u0F8D-\u0FFF\u102B-\u103E\u1040-\u104F\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16F0\u16F9-\u16FF\u1712-\u171E\u1732-\u173F\u1752-\u175F\u176D\u1771-\u177F\u17B4-\u17D6\u17D8-\u17DB\u17DD-\u181F\u1879-\u187F\u1885\u1886\u18A9\u18AB-\u18AF\u18F6-\u18FF\u191F-\u194F\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19FF\u1A17-\u1A1F\u1A55-\u1AA6\u1AA8-\u1B04\u1B34-\u1B44\u1B4D-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BFF\u1C24-\u1C4C\u1C50-\u1C59\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1CFB-\u1CFF\u1DC0-\u1DFF\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u2182\u2185-\u2BFF\u2CE5-\u2CEA\u2CEF-\u2CF1\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7F\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF-\u2E2E\u2E30-\u3004\u3007-\u3030\u3036-\u303A\u303D-\u3040\u3097-\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA620-\uA629\uA62C-\uA63F\uA66F-\uA67E\uA69E\uA69F\uA6E6-\uA716\uA720\uA721\uA789\uA78A\uA7CB-\uA7CF\uA7D2\uA7D4\uA7DA-\uA7F1\uA802\uA806\uA80B\uA823-\uA83F\uA874-\uA881\uA8B4-\uA8F1\uA8F8-\uA8FA\uA8FC\uA8FF-\uA909\uA926-\uA92F\uA947-\uA95F\uA97D-\uA983\uA9B3-\uA9CE\uA9D0-\uA9DF\uA9E5\uA9F0-\uA9F9\uA9FF\uAA29-\uAA3F\uAA43\uAA4C-\uAA5F\uAA77-\uAA79\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAC3-\uAADA\uAADE\uAADF\uAAEB-\uAAF1\uAAF5-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABE3-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB1E\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFE6F\uFE75\uFEFD-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF\u{1000C}\u{10027}\u{1003B}\u{1003E}\u{1004E}\u{1004F}\u{1005E}-\u{1007F}\u{100FB}-\u{1027F}\u{1029D}-\u{1029F}\u{102D1}-\u{102FF}\u{10320}-\u{1032C}\u{10341}\u{1034A}-\u{1034F}\u{10376}-\u{1037F}\u{1039E}\u{1039F}\u{103C4}-\u{103C7}\u{103D0}-\u{103FF}\u{1049E}-\u{104AF}\u{104D4}-\u{104D7}\u{104FC}-\u{104FF}\u{10528}-\u{1052F}\u{10564}-\u{1056F}\u{1057B}\u{1058B}\u{10593}\u{10596}\u{105A2}\u{105B2}\u{105BA}\u{105BD}-\u{105FF}\u{10737}-\u{1073F}\u{10756}-\u{1075F}\u{10768}-\u{1077F}\u{10786}\u{107B1}\u{107BB}-\u{107FF}\u{10806}\u{10807}\u{10809}\u{10836}\u{10839}-\u{1083B}\u{1083D}\u{1083E}\u{10856}-\u{1085F}\u{10877}-\u{1087F}\u{1089F}-\u{108DF}\u{108F3}\u{108F6}-\u{108FF}\u{10916}-\u{1091F}\u{1093A}-\u{1097F}\u{109B8}-\u{109BD}\u{109C0}-\u{109FF}\u{10A01}-\u{10A0F}\u{10A14}\u{10A18}\u{10A36}-\u{10A5F}\u{10A7D}-\u{10A7F}\u{10A9D}-\u{10ABF}\u{10AC8}\u{10AE5}-\u{10AFF}\u{10B36}-\u{10B3F}\u{10B56}-\u{10B5F}\u{10B73}-\u{10B7F}\u{10B92}-\u{10BFF}\u{10C49}-\u{10C7F}\u{10CB3}-\u{10CBF}\u{10CF3}-\u{10CFF}\u{10D24}-\u{10E7F}\u{10EAA}-\u{10EAF}\u{10EB2}-\u{10EFF}\u{10F1D}-\u{10F26}\u{10F28}-\u{10F2F}\u{10F46}-\u{10F6F}\u{10F82}-\u{10FAF}\u{10FC5}-\u{10FDF}\u{10FF7}-\u{11002}\u{11038}-\u{11070}\u{11073}\u{11074}\u{11076}-\u{11082}\u{110B0}-\u{110CF}\u{110E9}-\u{11102}\u{11127}-\u{11143}\u{11145}\u{11146}\u{11148}-\u{1114F}\u{11173}-\u{11175}\u{11177}-\u{11182}\u{111B3}-\u{111C0}\u{111C5}-\u{111D9}\u{111DB}\u{111DD}-\u{111FF}\u{11212}\u{1122C}-\u{1127F}\u{11287}\u{11289}\u{1128E}\u{1129E}\u{112A9}-\u{112AF}\u{112DF}-\u{11304}\u{1130D}\u{1130E}\u{11311}\u{11312}\u{11329}\u{11331}\u{11334}\u{1133A}-\u{1133C}\u{1133E}-\u{1134F}\u{11351}-\u{1135C}\u{11362}-\u{113FF}\u{11435}-\u{11446}\u{1144B}-\u{1145E}\u{11462}-\u{1147F}\u{114B0}-\u{114C3}\u{114C6}\u{114C8}-\u{1157F}\u{115AF}-\u{115D7}\u{115DC}-\u{115FF}\u{11630}-\u{11643}\u{11645}-\u{1167F}\u{116AB}-\u{116B7}\u{116B9}-\u{116FF}\u{1171B}-\u{1173F}\u{11747}-\u{117FF}\u{1182C}-\u{1189F}\u{118E0}-\u{118FE}\u{11907}\u{11908}\u{1190A}\u{1190B}\u{11914}\u{11917}\u{11930}-\u{1193E}\u{11940}\u{11942}-\u{1199F}\u{119A8}\u{119A9}\u{119D1}-\u{119E0}\u{119E2}\u{119E4}-\u{119FF}\u{11A01}-\u{11A0A}\u{11A33}-\u{11A39}\u{11A3B}-\u{11A4F}\u{11A51}-\u{11A5B}\u{11A8A}-\u{11A9C}\u{11A9E}-\u{11AAF}\u{11AF9}-\u{11BFF}\u{11C09}\u{11C2F}-\u{11C3F}\u{11C41}-\u{11C71}\u{11C90}-\u{11CFF}\u{11D07}\u{11D0A}\u{11D31}-\u{11D45}\u{11D47}-\u{11D5F}\u{11D66}\u{11D69}\u{11D8A}-\u{11D97}\u{11D99}-\u{11EDF}\u{11EF3}-\u{11FAF}\u{11FB1}-\u{11FFF}\u{1239A}-\u{1247F}\u{12544}-\u{12F8F}\u{12FF1}-\u{12FFF}\u{1342F}-\u{143FF}\u{14647}-\u{167FF}\u{16A39}-\u{16A3F}\u{16A5F}-\u{16A6F}\u{16ABF}-\u{16ACF}\u{16AEE}-\u{16AFF}\u{16B30}-\u{16B3F}\u{16B44}-\u{16B62}\u{16B78}-\u{16B7C}\u{16B90}-\u{16E3F}\u{16E80}-\u{16EFF}\u{16F4B}-\u{16F4F}\u{16F51}-\u{16F92}\u{16FA0}-\u{16FDF}\u{16FE2}\u{16FE4}-\u{16FFF}\u{187F8}-\u{187FF}\u{18CD6}-\u{18CFF}\u{18D09}-\u{1AFEF}\u{1AFF4}\u{1AFFC}\u{1AFFF}\u{1B123}-\u{1B14F}\u{1B153}-\u{1B163}\u{1B168}-\u{1B16F}\u{1B2FC}-\u{1BBFF}\u{1BC6B}-\u{1BC6F}\u{1BC7D}-\u{1BC7F}\u{1BC89}-\u{1BC8F}\u{1BC9A}-\u{1D3FF}\u{1D455}\u{1D49D}\u{1D4A0}\u{1D4A1}\u{1D4A3}\u{1D4A4}\u{1D4A7}\u{1D4A8}\u{1D4AD}\u{1D4BA}\u{1D4BC}\u{1D4C4}\u{1D506}\u{1D50B}\u{1D50C}\u{1D515}\u{1D51D}\u{1D53A}\u{1D53F}\u{1D545}\u{1D547}-\u{1D549}\u{1D551}\u{1D6A6}\u{1D6A7}\u{1D6C1}\u{1D6DB}\u{1D6FB}\u{1D715}\u{1D735}\u{1D74F}\u{1D76F}\u{1D789}\u{1D7A9}\u{1D7C3}\u{1D7CC}-\u{1DEFF}\u{1DF1F}-\u{1E0FF}\u{1E12D}-\u{1E136}\u{1E13E}-\u{1E14D}\u{1E14F}-\u{1E28F}\u{1E2AE}-\u{1E2BF}\u{1E2EC}-\u{1E7DF}\u{1E7E7}\u{1E7EC}\u{1E7EF}\u{1E7FF}\u{1E8C5}-\u{1E8FF}\u{1E944}-\u{1E94A}\u{1E94C}-\u{1EDFF}\u{1EE04}\u{1EE20}\u{1EE23}\u{1EE25}\u{1EE26}\u{1EE28}\u{1EE33}\u{1EE38}\u{1EE3A}\u{1EE3C}-\u{1EE41}\u{1EE43}-\u{1EE46}\u{1EE48}\u{1EE4A}\u{1EE4C}\u{1EE50}\u{1EE53}\u{1EE55}\u{1EE56}\u{1EE58}\u{1EE5A}\u{1EE5C}\u{1EE5E}\u{1EE60}\u{1EE63}\u{1EE65}\u{1EE66}\u{1EE6B}\u{1EE73}\u{1EE78}\u{1EE7D}\u{1EE7F}\u{1EE8A}\u{1EE9C}-\u{1EEA0}\u{1EEA4}\u{1EEAA}\u{1EEBC}-\u{1FFFF}\u{2A6E0}-\u{2A6FF}\u{2B739}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{2FFFF}\u{3134B}-\u{10FFFF}])/gu,
                                                  )
                                                  .reduce(Ze, [])
                                                  .map((e, t) => l().createElement('div', { style: u, key: t }, e));
                                          })(e.content, t),
                                      ),
                            ),
                            u
                        );
                    },
                    Je = ({ text: e, color: t }) => {
                        const u = (0, i.useMemo)(
                                () =>
                                    ((e) => {
                                        let t = [{ type: qe.text, content: e }];
                                        for (var u, n = Ge(Ye); !(u = n()).done; ) {
                                            const e = u.value,
                                                n = [];
                                            for (var r, o = Ge(t); !(r = o()).done; ) {
                                                const t = r.value;
                                                t.type === qe.text ? n.push(Xe(t.content, e)) : n.push(t);
                                            }
                                            t = n.flat();
                                        }
                                        return t;
                                    })(e),
                                [e],
                            ),
                            n = (0, i.useMemo)(() => Qe(u, t), [t, u]);
                        return l().createElement(
                            l().Fragment,
                            null,
                            n.map((e, t) => l().createElement(i.Fragment, { key: t }, e)),
                        );
                    },
                    et = ({ part: e }) => {
                        const t = (0, i.useMemo)(() => ({ color: Pe(e.color) }), [e]);
                        return l().createElement('div', { style: t }, e.text);
                    },
                    tt = 'Message_base_bf',
                    ut = ({ playerName: e, timeStamp: t, text: u }) => {
                        const n = (0, i.useMemo)(() => Pe(u.color), [u.color]);
                        return l().createElement(
                            'div',
                            { className: tt },
                            l().createElement(et, { part: e }),
                            ' ',
                            l().createElement(et, { part: t }),
                            l().createElement(Je, { text: u.text, color: n }),
                            '\n',
                        );
                    };
                function nt() {
                    return (
                        (nt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var u = arguments[t];
                                    for (var n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
                                }
                                return e;
                            }),
                        nt.apply(this, arguments)
                    );
                }
                const rt = () => {
                    const e = ke(),
                        t = e.onSend,
                        u = e.canClearInput,
                        n = e.onInputCleared,
                        r = ke('model.headerExtraInfo'),
                        o = r.text,
                        a = r.color,
                        s = ke('model.messages'),
                        c = (0, i.useRef)(null),
                        _ = (0, i.useRef)(null),
                        f = K(),
                        v = (0, i.useRef)(null),
                        p = (0, i.useState)(''),
                        h = p[0],
                        g = p[1],
                        A = (0, i.useCallback)(() => {
                            if (!c.current || !_.current) return;
                            const e = _.current.scrollHeight,
                                t = c.current.scrollHeight - e;
                            f.applyScroll(t);
                        }, [f]);
                    (0, i.useEffect)(() => F(() => F(A)), [s.length, A]);
                    const C = (0, i.useCallback)(() => {
                        v.current && '' !== v.current.value && u && ((v.current.value = ''), n(), g(''));
                    }, [u, n]);
                    (0, i.useEffect)(() => C(), [u, C]);
                    const B = (0, i.useCallback)(() => {
                            t({ message: h }), C();
                        }, [C, h, t]),
                        b = (0, i.useCallback)(() => {
                            g(v.current ? v.current.value : '');
                        }, [v]),
                        w = (0, i.useCallback)(
                            (e) => {
                                'Enter' === e.key && B();
                            },
                            [B],
                        ),
                        D = s.length
                            ? l().createElement(
                                  'div',
                                  { className: Ne, ref: _ },
                                  l().createElement(
                                      ce.Vertical.Area.Default,
                                      {
                                          onDrag: (e) => {
                                              var t;
                                              'dragStart' === e.type &&
                                                  (null == (t = c.current) || t.classList.remove(Ie));
                                          },
                                          api: f,
                                      },
                                      l().createElement(
                                          'div',
                                          {
                                              ref: c,
                                              className: Le,
                                              onMouseDown: () => {
                                                  var e;
                                                  null == (e = c.current) || e.classList.add(Ie);
                                              },
                                          },
                                          s.map((e) => l().createElement(ut, nt({}, e.value, { key: e.value.key }))),
                                      ),
                                  ),
                              )
                            : l().createElement(
                                  l().Fragment,
                                  null,
                                  l().createElement(
                                      'span',
                                      { className: xe },
                                      R.strings.platoon.members.chat.chatName(),
                                  ),
                                  l().createElement(
                                      'div',
                                      { className: xe },
                                      l().createElement(Je, { text: o, color: Pe(a) }),
                                  ),
                              );
                    return l().createElement(
                        'div',
                        { className: Re },
                        l().createElement('div', { className: Te }, D),
                        l().createElement(
                            'div',
                            { className: He },
                            l().createElement('input', {
                                onInput: b,
                                onKeyDown: w,
                                ref: v,
                                required: !0,
                                className: We,
                                minLength: 1,
                                maxLength: 255,
                                type: 'text',
                                id: 'name',
                                name: 'name',
                            }),
                            l().createElement(
                                ge,
                                {
                                    isEnabled: !0,
                                    header: R.strings.platoon.members.chat.sendMessage.header(),
                                    body: R.strings.platoon.members.chat.sendMessage.body(),
                                },
                                l().createElement(
                                    'div',
                                    { className: ze },
                                    l().createElement(
                                        E,
                                        { size: m.small, type: d.secondary, onClick: B, mixClass: Ve },
                                        l().createElement('div', { className: Ue }),
                                    ),
                                ),
                            ),
                        ),
                    );
                };
                engine.whenReady.then(() => {
                    Me().render(l().createElement(rt, null), document.getElementById('root'));
                });
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var u = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](u, u.exports, __webpack_require__), u.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, u, n) => {
            if (!t) {
                var r = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [t, u, n] = deferred[i], o = !0, a = 0; a < t.length; a++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[a]))
                            ? t.splice(a--, 1)
                            : ((o = !1), n < r && (r = n));
                    if (o) {
                        deferred.splice(i--, 1);
                        var s = u();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > n; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [t, u, n];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(t, { a: t }), t;
        }),
        (__webpack_require__.d = (e, t) => {
            for (var u in t)
                __webpack_require__.o(t, u) &&
                    !__webpack_require__.o(e, u) &&
                    Object.defineProperty(e, u, { enumerable: !0, get: t[u] });
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
        (__webpack_require__.j = 738),
        (() => {
            var e = { 738: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, u) => {
                    var n,
                        r,
                        [o, a, s] = u,
                        i = 0;
                    if (o.some((t) => 0 !== e[t])) {
                        for (n in a) __webpack_require__.o(a, n) && (__webpack_require__.m[n] = a[n]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (t && t(u); i < o.length; i++)
                        (r = o[i]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(l);
                },
                u = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            u.forEach(t.bind(null, 0)), (u.push = t.bind(null, u.push.bind(u)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [720], () => __webpack_require__(244));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
