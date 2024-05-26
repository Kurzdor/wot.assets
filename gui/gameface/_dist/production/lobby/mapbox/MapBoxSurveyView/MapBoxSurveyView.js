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
            67: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => j });
                var n = {};
                t.r(n), t.d(n, { mouse: () => E, onResize: () => l });
                var a = {};
                t.r(a),
                    t.d(a, {
                        events: () => n,
                        getMouseGlobalPosition: () => A,
                        getSize: () => d,
                        graphicsQuality: () => m,
                    });
                var r = {};
                t.r(r), t.d(r, { getBgUrl: () => F, getTextureUrl: () => _ });
                var o = {};
                function i(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                function s(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.r(o),
                    t.d(o, {
                        addModelObserver: () => x,
                        addPreloadTexture: () => w,
                        children: () => r,
                        displayStatus: () => D,
                        displayStatusIs: () => V,
                        events: () => C,
                        extraSize: () => q,
                        forceTriggerMouseMove: () => W,
                        freezeTextureBeforeResize: () => T,
                        getBrowserTexturePath: () => S,
                        getDisplayStatus: () => G,
                        getScale: () => N,
                        getSize: () => P,
                        getViewGlobalPosition: () => O,
                        isEventHandled: () => $,
                        isFocused: () => H,
                        pxToRem: () => k,
                        remToPx: () => L,
                        resize: () => I,
                        sendEvent: () => f,
                        setAnimateWindow: () => R,
                        setEventHandled: () => U,
                        setInputPaddingsRem: () => y,
                        setSidePaddingsRem: () => M,
                        whenTutorialReady: () => z,
                    });
                const l = i('clientResized'),
                    c = { down: i('mousedown'), up: i('mouseup'), move: i('mousemove') };
                const E = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && s(!1);
                    }
                    function t() {
                        e.enabled && s(!0);
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
                            : s(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const r = `mouse${u}`,
                                        o = c[u]((e) => t([e, 'outside']));
                                    function i(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, i),
                                        n(),
                                        () => {
                                            a &&
                                                (o(),
                                                window.removeEventListener(r, i),
                                                (e.listeners -= 1),
                                                n(),
                                                (a = !1));
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
                            e.enabled && s(!0);
                        },
                        disableOutside() {
                            e.enabled && s(!1);
                        },
                    });
                })();
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function A(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const m = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function _(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function F(e, u, t) {
                    return `url(${_(e, u, t)})`;
                }
                const D = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    C = {
                        onTextureFrozen: i('self.onTextureFrozen'),
                        onTextureReady: i('self.onTextureReady'),
                        onDomBuilt: i('self.onDomBuilt'),
                        onLoaded: i('self.onLoaded'),
                        onDisplayChanged: i('self.onShowingStatusChanged'),
                        onFocusUpdated: i('self.onFocusChanged'),
                        children: {
                            onAdded: i('children.onAdded'),
                            onLoaded: i('children.onLoaded'),
                            onRemoved: i('children.onRemoved'),
                            onAttached: i('children.onAttached'),
                            onTextureReady: i('children.onTextureReady'),
                            onRequestPosition: i('children.requestPosition'),
                        },
                    },
                    B = ['args'];
                const g = 2,
                    p = 16,
                    h = 32,
                    v = 64,
                    b = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                    return a;
                                })(u, B);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([e, u]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, r));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    f = {
                        close(e) {
                            b('popover' === e ? g : h);
                        },
                        minimize() {
                            b(v);
                        },
                        move(e) {
                            b(p, { isMouseEvent: !0, on: e });
                        },
                    };
                function w(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function y(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function S(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function x(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function M(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function P(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function I(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function O(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: L(u.x), y: L(u.y) };
                }
                function T() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function N() {
                    return viewEnv.getScale();
                }
                function k(e) {
                    return viewEnv.pxToRem(e);
                }
                function L(e) {
                    return viewEnv.remToPx(e);
                }
                function R(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function H() {
                    return viewEnv.isFocused();
                }
                function U() {
                    return viewEnv.setEventHandled();
                }
                function $() {
                    return viewEnv.isEventHandled();
                }
                function W() {
                    viewEnv.forceTriggerMouseMove();
                }
                function G() {
                    return viewEnv.getShowingStatus();
                }
                const V = Object.keys(D).reduce((e, u) => ((e[u] = () => viewEnv.getShowingStatus() === D[u]), e), {}),
                    q = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    z = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : C.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    j = { view: o, client: a };
            },
            521: (e, u, t) => {
                'use strict';
                let n, a;
                t.d(u, { n: () => n, s: () => a }),
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
                            (e[(e.KEY_9 = 57)] = 'KEY_9'),
                            (e[(e.CAPS_LOCK = 20)] = 'CAPS_LOCK'),
                            (e[(e.INSERT = 45)] = 'INSERT'),
                            (e[(e.F1 = 112)] = 'F1'),
                            (e[(e.F2 = 113)] = 'F2'),
                            (e[(e.F3 = 114)] = 'F3'),
                            (e[(e.F4 = 115)] = 'F4'),
                            (e[(e.F5 = 116)] = 'F5'),
                            (e[(e.F6 = 117)] = 'F6'),
                            (e[(e.F7 = 118)] = 'F7'),
                            (e[(e.F8 = 119)] = 'F8'),
                            (e[(e.F9 = 120)] = 'F9'),
                            (e[(e.F10 = 121)] = 'F10'),
                            (e[(e.F11 = 122)] = 'F11'),
                            (e[(e.F12 = 123)] = 'F12'),
                            (e[(e.SELECT = 93)] = 'SELECT'),
                            (e[(e.NUMPAD_0 = 96)] = 'NUMPAD_0'),
                            (e[(e.NUMPAD_1 = 97)] = 'NUMPAD_1'),
                            (e[(e.NUMPAD_2 = 98)] = 'NUMPAD_2'),
                            (e[(e.NUMPAD_3 = 99)] = 'NUMPAD_3'),
                            (e[(e.NUMPAD_4 = 100)] = 'NUMPAD_4'),
                            (e[(e.NUMPAD_5 = 101)] = 'NUMPAD_5'),
                            (e[(e.NUMPAD_6 = 102)] = 'NUMPAD_6'),
                            (e[(e.NUMPAD_7 = 103)] = 'NUMPAD_7'),
                            (e[(e.NUMPAD_8 = 104)] = 'NUMPAD_8'),
                            (e[(e.NUMPAD_9 = 105)] = 'NUMPAD_9'),
                            (e[(e.NUM_DECIMAL = 110)] = 'NUM_DECIMAL'),
                            (e[(e.STAR = 106)] = 'STAR'),
                            (e[(e.NUM_SLASH = 111)] = 'NUM_SLASH'),
                            (e[(e.FORWARD_SLASH = 191)] = 'FORWARD_SLASH'),
                            (e[(e.COMMA = 188)] = 'COMMA'),
                            (e[(e.DASH = 189)] = 'DASH'),
                            (e[(e.PERIOD = 190)] = 'PERIOD');
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
            368: () => {
                !(function () {
                    let e,
                        u,
                        t,
                        n,
                        a,
                        r,
                        o,
                        i = -1;
                    document.addEventListener('mousedown', (t) => {
                        document.getSelection().empty(),
                            t.target.select &&
                                -1 === i &&
                                ((e = t.target), (u = e.getBoundingClientRect()), e.setSelectionRange(0, 0));
                    }),
                        document.addEventListener('mousemove', (t) => {
                            if ((-1 === i && t.target.select && t.target === e && (i = e.selectionStart), i > -1)) {
                                const n = Math.min(Math.max(t.x, u.left), u.right),
                                    a = Math.min(Math.max(t.y, u.top), u.bottom),
                                    r = document.createEvent('MouseEvent');
                                r.initMouseEvent('mousedown', !0, !0, null, 1, n, a, n, a, !1, !1, !1, !1, 0, null),
                                    e.dispatchEvent(r);
                                const o = e.selectionEnd;
                                o > i ? e.setSelectionRange(i, o, 'forward') : e.setSelectionRange(o, i, 'backward');
                            }
                        }),
                        document.addEventListener('mouseup', () => {
                            (e = null), (i = -1);
                        }),
                        document.addEventListener('dblclick', (e) => {
                            e.target.select &&
                                (document.getSelection().empty(),
                                (t = e.target),
                                (n = e.target.value),
                                (a = t.selectionStart),
                                (r = -1 !== n.lastIndexOf(' ', a) ? n.lastIndexOf(' ', a) + 1 : 0),
                                (o = -1 !== n.indexOf(' ', a) ? n.indexOf(' ', a) : n.length),
                                t.setSelectionRange(r, o, 'forward'));
                        });
                })(),
                    (function () {
                        let e = null;
                        document.addEventListener('mousedown', (u) => {
                            document.getSelection().empty(),
                                0 !== u.button ||
                                    u.target.select ||
                                    e ||
                                    (e = document.caretPositionFromPoint(u.x, u.y));
                        }),
                            document.addEventListener('mousemove', (u) => {
                                if (0 === u.button && !u.target.select && e) {
                                    const t = document.caretPositionFromPoint(u.x, u.y);
                                    if (!t.offsetNode || !e.offsetNode) return;
                                    document
                                        .getSelection()
                                        .setBaseAndExtent(e.offsetNode, e.offset, t.offsetNode, t.offset);
                                }
                            }),
                            document.addEventListener('mouseup', () => {
                                e = null;
                            });
                    })();
            },
            358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => r });
                var n = t(67);
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
                    addCallback(e, u, t = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = n.O.view.addModelObserver(e, t, a);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(r) : (this._views[t] = [r])))
                                : console.error("Can't add callback for model:", e),
                            r
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
                a.__instance = void 0;
                const r = a;
            },
            572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(364);
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
            364: (e, u, t) => {
                'use strict';
                t.d(u, { B0: () => s, ry: () => C, Sy: () => g });
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
                const a = n;
                var r = t(358);
                const o = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    i = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    };
                let s;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(s || (s = {}));
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var A = t(521),
                    m = t(67);
                const _ = ['args'];
                function F(e, u, t, n, a, r, o) {
                    try {
                        var i = e[r](o),
                            s = i.value;
                    } catch (e) {
                        return void t(e);
                    }
                    i.done ? u(s) : Promise.resolve(s).then(n, a);
                }
                const D = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    C = (function () {
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
                                    return new Promise(function (n, a) {
                                        var r = e.apply(u, t);
                                        function o(e) {
                                            F(r, n, a, o, i, 'next', e);
                                        }
                                        function i(e) {
                                            F(r, n, a, o, i, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    B = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                    return a;
                                })(u, _);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((n = a),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    g = () => B(s.CLOSE),
                    p = (e, u) => {
                        e.keyCode === A.n.ESCAPE && u();
                    };
                var h = t(572);
                const v = a.instance,
                    b = {
                        DataTracker: r.Z,
                        ViewModel: h.Z,
                        ViewEventType: s,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: E,
                        DateFormatType: d,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (e) => B(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: () => B(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            B(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, a = R.invalid('resId'), r) => {
                            const o = m.O.view.getViewGlobalPosition(),
                                i = t.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                E = i.width,
                                d = i.height,
                                A = {
                                    x: m.O.view.pxToRem(l) + o.x,
                                    y: m.O.view.pxToRem(c) + o.y,
                                    width: m.O.view.pxToRem(E),
                                    height: m.O.view.pxToRem(d),
                                };
                            B(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: u,
                                bbox: D(A),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => p(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            p(e, g);
                        },
                        handleViewEvent: B,
                        onBindingsReady: C,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const n in u)
                                if (Object.prototype.hasOwnProperty.call(u, n)) {
                                    const a = Object.prototype.toString.call(u[n]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = u[n];
                                        t[n] = [];
                                        for (let u = 0; u < a.length; u++) t[n].push({ value: e(a[u].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = e(u[n]))
                                            : (t[n] = u[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: v,
                        SystemLocale: o,
                        UserLocale: i,
                    };
                window.ViewEnvHelper = b;
            },
            757: (e, u, t) => {
                'use strict';
                var n = t(179),
                    a = t.n(n);
                const r = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
                var o = t(67);
                const i = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var s;
                function l(e, u, t) {
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
                        a = (function (e, u) {
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
                })(s || (s = {}));
                const c = o.O.client.getSize('rem'),
                    E = c.width,
                    d = c.height,
                    A = Object.assign({ width: E, height: d }, l(E, d, i)),
                    m = (0, n.createContext)(A),
                    _ = ['children'];
                const F = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, _);
                    const a = (0, n.useContext)(m),
                        o = a.extraLarge,
                        i = a.large,
                        s = a.medium,
                        l = a.small,
                        c = a.extraSmall,
                        E = a.extraLargeWidth,
                        d = a.largeWidth,
                        A = a.mediumWidth,
                        F = a.smallWidth,
                        D = a.extraSmallWidth,
                        C = a.extraLargeHeight,
                        B = a.largeHeight,
                        g = a.mediumHeight,
                        p = a.smallHeight,
                        h = a.extraSmallHeight,
                        v = { extraLarge: C, large: B, medium: g, small: p, extraSmall: h };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && o) return u;
                        if (t.large && i) return u;
                        if (t.medium && s) return u;
                        if (t.small && l) return u;
                        if (t.extraSmall && c) return u;
                    } else {
                        if (t.extraLargeWidth && E) return r(u, t, v);
                        if (t.largeWidth && d) return r(u, t, v);
                        if (t.mediumWidth && A) return r(u, t, v);
                        if (t.smallWidth && F) return r(u, t, v);
                        if (t.extraSmallWidth && D) return r(u, t, v);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && C) return u;
                            if (t.largeHeight && B) return u;
                            if (t.mediumHeight && g) return u;
                            if (t.smallHeight && p) return u;
                            if (t.extraSmallHeight && h) return u;
                        }
                    }
                    return null;
                };
                F.defaultProps = {
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
                (0, n.memo)(F);
                const D = (e) => {
                        const u = (0, n.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    C = (0, n.memo)(({ children: e }) => {
                        const u = (0, n.useContext)(m),
                            t = (0, n.useState)(u),
                            r = t[0],
                            s = t[1],
                            c = (0, n.useCallback)((e, u) => {
                                const t = o.O.view.pxToRem(e),
                                    n = o.O.view.pxToRem(u);
                                s(Object.assign({ width: t, height: n }, l(t, n, i)));
                            }, []);
                        D(() => {
                            engine.on('clientResized', c);
                        }),
                            (0, n.useEffect)(() => () => engine.off('clientResized', c), [c]);
                        const E = (0, n.useMemo)(() => Object.assign({}, r), [r]);
                        return a().createElement(m.Provider, { value: E }, e);
                    });
                var B = t(483),
                    g = t.n(B),
                    p = t(926),
                    h = t.n(p);
                let v, b, f;
                !(function (e) {
                    (e[(e.ExtraSmall = i.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = i.small.width)] = 'Small'),
                        (e[(e.Medium = i.medium.width)] = 'Medium'),
                        (e[(e.Large = i.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = i.extraLarge.width)] = 'ExtraLarge');
                })(v || (v = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = i.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = i.small.width)] = 'Small'),
                            (e[(e.Medium = i.medium.width)] = 'Medium'),
                            (e[(e.Large = i.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = i.extraLarge.width)] = 'ExtraLarge');
                    })(b || (b = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = i.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = i.small.height)] = 'Small'),
                            (e[(e.Medium = i.medium.height)] = 'Medium'),
                            (e[(e.Large = i.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = i.extraLarge.height)] = 'ExtraLarge');
                    })(f || (f = {}));
                const w = () => {
                        const e = (0, n.useContext)(m),
                            u = e.width,
                            t = e.height,
                            a = ((e) => {
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
                                        return b.ExtraLarge;
                                    case e.largeWidth:
                                        return b.Large;
                                    case e.mediumWidth:
                                        return b.Medium;
                                    case e.smallWidth:
                                        return b.Small;
                                    case e.extraSmallWidth:
                                        return b.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), b.ExtraSmall;
                                }
                            })(e),
                            o = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return f.ExtraLarge;
                                    case e.largeHeight:
                                        return f.Large;
                                    case e.mediumHeight:
                                        return f.Medium;
                                    case e.smallHeight:
                                        return f.Small;
                                    case e.extraSmallHeight:
                                        return f.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), f.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: r, mediaHeight: o, remScreenWidth: u, remScreenHeight: t };
                    },
                    y = ['children', 'className'];
                function S() {
                    return (
                        (S =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        S.apply(this, arguments)
                    );
                }
                const x = {
                        [b.ExtraSmall]: '',
                        [b.Small]: h().SMALL_WIDTH,
                        [b.Medium]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH}`,
                        [b.Large]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH} ${h().LARGE_WIDTH}`,
                        [b.ExtraLarge]: `${h().SMALL_WIDTH} ${h().MEDIUM_WIDTH} ${h().LARGE_WIDTH} ${h().EXTRA_LARGE_WIDTH}`,
                    },
                    M = {
                        [f.ExtraSmall]: '',
                        [f.Small]: h().SMALL_HEIGHT,
                        [f.Medium]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT}`,
                        [f.Large]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT} ${h().LARGE_HEIGHT}`,
                        [f.ExtraLarge]: `${h().SMALL_HEIGHT} ${h().MEDIUM_HEIGHT} ${h().LARGE_HEIGHT} ${h().EXTRA_LARGE_HEIGHT}`,
                    },
                    P = {
                        [v.ExtraSmall]: '',
                        [v.Small]: h().SMALL,
                        [v.Medium]: `${h().SMALL} ${h().MEDIUM}`,
                        [v.Large]: `${h().SMALL} ${h().MEDIUM} ${h().LARGE}`,
                        [v.ExtraLarge]: `${h().SMALL} ${h().MEDIUM} ${h().LARGE} ${h().EXTRA_LARGE}`,
                    },
                    I = (e) => {
                        let u = e.children,
                            t = e.className,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, y);
                        const r = w(),
                            o = r.mediaWidth,
                            i = r.mediaHeight,
                            s = r.mediaSize;
                        return a().createElement('div', S({ className: g()(t, x[o], M[i], P[s]) }, n), u);
                    },
                    O = ['children'];
                const T = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, O);
                    return a().createElement(C, null, a().createElement(I, t, u));
                };
                var N = t(493),
                    k = t.n(N);
                function L(e) {
                    engine.call('PlaySound', e);
                }
                const H = {
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
                    U = [
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
                function $() {
                    return (
                        ($ =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        $.apply(this, arguments)
                    );
                }
                class W extends a().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && L(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && L(this.props.soundClick);
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
                            o = e.type,
                            i = e.classNames,
                            s = e.onMouseEnter,
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
                                        a = {},
                                        r = Object.keys(e);
                                    for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                    return a;
                                })(e, U)),
                            A = g()(H.base, H[`base__${o}`], H[`base__${r}`], null == i ? void 0 : i.base),
                            m = g()(H.icon, H[`icon__${o}`], H[`icon__${r}`], null == i ? void 0 : i.icon),
                            _ = g()(H.glow, null == i ? void 0 : i.glow),
                            F = g()(H.caption, H[`caption__${o}`], null == i ? void 0 : i.caption),
                            D = g()(H.goto, null == i ? void 0 : i.goto);
                        return a().createElement(
                            'div',
                            $(
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
                            'info' !== o && a().createElement('div', { className: H.shine }),
                            a().createElement('div', { className: m }, a().createElement('div', { className: _ })),
                            a().createElement('div', { className: F }, u),
                            n && a().createElement('div', { className: D }, n),
                        );
                    }
                }
                W.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var G = t(521),
                    V = t(364);
                const q = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function z(e = G.n.NONE, u = q, t = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== G.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (o.O.view.isEventHandled()) return;
                                o.O.view.setEventHandled(), u(n), t && n.stopPropagation();
                            }
                        }
                    }, [u, e, t]);
                }
                function j(e) {
                    z(G.n.ESCAPE, e);
                }
                var K = t(403),
                    Q = t(30);
                function Y(e) {
                    return e;
                }
                function X() {
                    return !1;
                }
                console.log;
                var Z = t(174);
                function J(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return ee(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return ee(e, u);
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
                function ee(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const ue = (e) => (0 === e ? window : window.subViews.get(e));
                function te(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                const ne = te;
                function ae(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, n) => u(null == e ? void 0 : e.value, t, n));
                }
                function re(e, u, t) {
                    const n = [];
                    for (let a = 0; a < e.length; a++) {
                        const r = ne(e, a);
                        u(r, a, e) && n.push(t(r, a, e));
                    }
                    return n;
                }
                var oe = t(946);
                let ie, se;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Previous = 1)] = 'Previous');
                })(ie || (ie = {})),
                    (function (e) {
                        (e.OneMap = 'OneMap'), (e.AllMaps = 'AllMaps');
                    })(se || (se = {}));
                const le = [1, 2, 3],
                    ce = { x: 0, y: 0 },
                    Ee = (e, u, t) => (e - u) * (e - t) <= 0,
                    de = (e) => --e * e * e + 1;
                let Ae, me;
                !(function (e) {
                    (e.Start = 'start'), (e.End = 'end');
                })(Ae || (Ae = {})),
                    (function (e) {
                        (e.Add = 'add'), (e.Remove = 'remove'), (e.None = 'none');
                    })(me || (me = {}));
                const _e = {
                        base: 'MapPoint_base_05',
                        base__hidden: 'MapPoint_base__hidden_bd',
                        base__static: 'MapPoint_base__static_15',
                        base__hovered: 'MapPoint_base__hovered_2b',
                        point: 'MapPoint_point_51',
                        point__1: 'MapPoint_point__1_17',
                        point__2: 'MapPoint_point__2_1c',
                        point__3: 'MapPoint_point__3_64',
                        hitArea: 'MapPoint_hitArea_e4',
                    },
                    Fe = 20,
                    De = 20,
                    Ce = 20,
                    Be = 20,
                    ge = 27,
                    pe = 18,
                    he = 14,
                    ve = 5;
                var be;
                !(function (e) {
                    (e.Hidden = 'hidden'), (e.Static = 'static'), (e.Over = 'hovered'), (e.Default = 'default');
                })(be || (be = {}));
                const fe = (e, u) => ({ left: e - 41 + 'rem', top: u - 53 + 'rem' }),
                    we = ({
                        pointId: e,
                        mouseEventsDisabled: u = !0,
                        isOver: t = !1,
                        isAnimated: r = !1,
                        onClick: i,
                        onUpdateOverState: s,
                        onUpdateOverCoordinates: l,
                    }) => {
                        const c = (0, n.useRef)(null),
                            E = ((e, u, t, n) => (0 === e ? be.Hidden : u || n ? be.Static : t ? be.Over : be.Default))(
                                e,
                                u,
                                t,
                                r,
                            ),
                            d = (u) => {
                                if (c.current && l) {
                                    const t = c.current.getBoundingClientRect(),
                                        n = 32 !== t.width ? 18 : 26,
                                        a = o.O.view.pxToRem(u.clientX - t.x),
                                        r = o.O.view.pxToRem(u.clientY - t.y);
                                    l(e, n + a - 41, n + r - 53);
                                }
                            },
                            A = (u) => {
                                null == s || s(e, u);
                            };
                        return a().createElement(
                            'div',
                            { className: g()(_e.base, _e[`base__${E}`]), key: e },
                            a().createElement('div', { className: g()(_e.point, _e[`point__${e}`]) }),
                            !u &&
                                a().createElement('div', {
                                    ref: c,
                                    className: _e.hitArea,
                                    onClick: (u) => {
                                        E === be.Over && (d(u), null == i || i(e));
                                    },
                                    onMouseEnter: () => A(!0),
                                    onMouseMove: (e) => {
                                        d(e);
                                    },
                                    onMouseLeave: () => A(!1),
                                }),
                        );
                    };
                let ye;
                !(function (e) {
                    (e.VEHICLE = 'vehicle'),
                        (e.IMAGE = 'image'),
                        (e.TABLE = 'table'),
                        (e.INTERACTIVE_MAP = 'interactiveMap'),
                        (e.TEXT = 'text'),
                        (e.UNDEFINED = 'undefined'),
                        (e.ALTERNATIVE = 'alternative'),
                        (e.MULTIPLE_CHOICE = 'multipleChoice');
                })(ye || (ye = {}));
                const Se = {
                        freePointId: 0,
                        overPointId: 0,
                        answersAnimationState: Ae.End,
                        cursorPointId: 0,
                        animatedPointId: 0,
                        animatedPointType: me.None,
                        cursorCoordinates: ce,
                        lastRemovedPointPosition: ce,
                        lastOverPointOffset: ce,
                        pointsInited: !1,
                    },
                    xe = { questionId: '0', optionsCount: 0 },
                    Me = ((e, u) => {
                        const t = (0, n.createContext)({});
                        return [
                            function ({ mode: r = 'real', options: i, children: s, mocks: l }) {
                                const c = (0, n.useRef)([]),
                                    E = (t, n, a) => {
                                        var r;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = ue,
                                                context: n = 'model',
                                            } = {}) {
                                                const a = new Map();
                                                function r(e, u = 0) {
                                                    viewEnv.removeDataChangedCallback(e, u)
                                                        ? a.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, u, t) => {
                                                        t.forEach((u) => {
                                                            const t = a.get(u);
                                                            void 0 !== t && t(e);
                                                        });
                                                    });
                                                });
                                                const i = (e) => {
                                                    const a = t(u),
                                                        r = n.split('.').reduce((e, u) => e[u], a);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? r
                                                        : e.split('.').reduce((e, u) => {
                                                              const t = e[u];
                                                              return 'function' == typeof t ? t.bind(e) : t;
                                                          }, r);
                                                };
                                                return {
                                                    subscribe: (t, r) => {
                                                        const s = 'string' == typeof r ? `${n}.${r}` : n,
                                                            l = o.O.view.addModelObserver(s, u, !0);
                                                        return a.set(l, t), e && t(i(r)), l;
                                                    },
                                                    readByPath: i,
                                                    createCallback: (e, u) => {
                                                        const t = i(u);
                                                        return (...u) => {
                                                            t(e(...u));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const u = i(e);
                                                        return () => {
                                                            u();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, t = J(a.keys()); !(e = t()).done; ) r(e.value, u);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(n),
                                            s =
                                                'real' === t
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (r = null == a ? void 0 : a.getter)
                                                                  ? r
                                                                  : () => {},
                                                      }),
                                            l = (e) =>
                                                'mocks' === t ? (null == a ? void 0 : a.getter(e)) : s.readByPath(e),
                                            E = (e) => c.current.push(e),
                                            d = e({
                                                mode: t,
                                                readByPath: l,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (e, u) => {
                                                        const n = null != u ? u : l(e),
                                                            a = Z.LO.box(n, { equals: X });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, Z.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const n = null != u ? u : l(e),
                                                            a = Z.LO.box(n, { equals: X });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, Z.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const n = l(u);
                                                        if (Array.isArray(e)) {
                                                            const a = e.reduce(
                                                                (e, u) => ((e[u] = Z.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    s.subscribe(
                                                                        (0, Z.aD)((u) => {
                                                                            e.forEach((e) => {
                                                                                a[e].set(u[e]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                        {
                                                            const a = e,
                                                                r = Object.entries(a),
                                                                o = r.reduce(
                                                                    (e, [u, t]) => ((e[t] = Z.LO.box(n[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    s.subscribe(
                                                                        (0, Z.aD)((e) => {
                                                                            r.forEach(([u, t]) => {
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
                                            A = { mode: t, model: d, externalModel: s, cleanup: E };
                                        return {
                                            model: d,
                                            controls: 'mocks' === t && a ? a.controls(A) : u(A),
                                            externalModel: s,
                                            mode: t,
                                        };
                                    },
                                    d = (0, n.useRef)(!1),
                                    A = (0, n.useState)(r),
                                    m = A[0],
                                    _ = A[1],
                                    F = (0, n.useState)(() => E(r, i, l)),
                                    D = F[0],
                                    C = F[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        d.current ? C(E(m, i, l)) : (d.current = !0);
                                    }, [l, m, i]),
                                    (0, n.useEffect)(() => {
                                        _(r);
                                    }, [r]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            D.externalModel.dispose(), c.current.forEach((e) => e());
                                        },
                                        [D],
                                    ),
                                    a().createElement(t.Provider, { value: D }, s)
                                );
                            },
                            () => (0, n.useContext)(t),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const u = {
                                    root: e.object(),
                                    question: e.object('question'),
                                    questionTitleParams: e.array('question.titleParams', []),
                                    answers: e.object('question.answers'),
                                    answerVariants: e.array('question.answers.variants', []),
                                    answerSelectedVariants: e.array('question.answers.selectedVariants', []),
                                    options: e.array('question.options.items'),
                                    scrollDirection: Z.LO.box(ie.Next),
                                    lastTableState: Z.LO.box(xe),
                                    mapState: Z.LO.box(Se),
                                    mapPoints: Z.LO.box([]),
                                },
                                t = (0, oe.Om)(() => ae(u.questionTitleParams.get(), Y)),
                                n = (0, oe.Om)(() => ae(u.answerVariants.get(), Y)),
                                a = (0, oe.Om)(() => ae(u.answerSelectedVariants.get(), Y)),
                                r = (0, oe.Om)(() => u.answers.get().isMultipleChoice),
                                o = (0, oe.Om)(
                                    () =>
                                        ae(u.options.get(), (e) => ({
                                            optionId: e.optionId,
                                            isMultipleChoice: e.answers.isMultipleChoice,
                                            variants: ae(e.answers.variants, Y),
                                            selectedVariants: ae(e.answers.selectedVariants, Y),
                                        })),
                                    { equals: X },
                                );
                            return Object.assign({}, u, {
                                computes: {
                                    titleParams: t,
                                    answerVariants: n,
                                    answerSelectedVariants: a,
                                    isMultipleChoice: r,
                                    options: o,
                                },
                            });
                        },
                        ({
                            externalModel: e,
                            model: { scrollDirection: u, lastTableState: t, mapState: n, mapPoints: a, options: r },
                        }) =>
                            Object.assign(
                                {
                                    close: e.createCallbackNoArgs('onClose'),
                                    showPreviousPage: e.createCallbackNoArgs('onShowPreviousPage'),
                                    showNextPage: e.createCallbackNoArgs('onShowNextPage'),
                                    ready: e.createCallbackNoArgs('onReady'),
                                    answerSimpleQuestion: e.createCallback(
                                        (e) => ({
                                            answer: JSON.stringify({
                                                questionId: e.optionId,
                                                answers: [{ optionId: '0', choices: e.choices }],
                                            }),
                                        }),
                                        'onAnswerQuestion',
                                    ),
                                    answerTableQuestion: e.createCallback(
                                        (e, u) => ({ answer: JSON.stringify({ questionId: e, answers: u }) }),
                                        'onAnswerQuestion',
                                    ),
                                    answerMapPointsQuestion: e.createCallback(
                                        (e, u) => ({
                                            answer: JSON.stringify({
                                                questionId: e,
                                                answers: [{ optionId: '0', choices: u }],
                                            }),
                                        }),
                                        'onAnswerQuestion',
                                    ),
                                },
                                (function (e) {
                                    const u = {};
                                    for (const t in e)
                                        if (Object.prototype.hasOwnProperty.call(e, t)) {
                                            const n = e[t];
                                            u[t] = (0, Z.aD)(n);
                                        }
                                    return u;
                                })({
                                    updateScrollDirection: (e) => u.set(e),
                                    updateQuestionsState: (e, u) => {
                                        if (u === ye.TABLE) {
                                            const u = r.get().length;
                                            t.set({ questionId: e, optionsCount: u });
                                        }
                                    },
                                    updateIMSOverPointId: (e) => (n.get().overPointId = e),
                                    updateIMSAnswersAnimationState: (e) => (n.get().answersAnimationState = e),
                                    updateIMSCursorPointId: (e) => (n.get().cursorPointId = e),
                                    updateIMSAnimatedPointId: (e, u = me.None) => {
                                        (n.get().animatedPointId = e), (n.get().animatedPointType = u);
                                    },
                                    updateIMSPoints: (e, u) => {
                                        a.set(e), (n.get().freePointId = u);
                                    },
                                    updateIMSPointComment: (e, u) => {
                                        const t = a.get(),
                                            n = t.findIndex((u) => u.pointId === e);
                                        return (t[n].response.comment = u), t;
                                    },
                                    updateIMSCursorCoordinates: (e) => (n.get().cursorCoordinates = e),
                                    updateIMSLastRemovedPointPosition: (e) => (n.get().lastRemovedPointPosition = e),
                                    updateIMSLastOverPointOffset: (e) => (n.get().lastOverPointOffset = e),
                                    updateIMSPointsInited: (e) => (n.get().pointsInited = e),
                                    resetIMS: () => {
                                        n.set(Se), a.set([]);
                                    },
                                }),
                            ),
                    ),
                    Pe = Me[0],
                    Ie = Me[1],
                    Oe = {
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
                let Te, Ne;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(Te || (Te = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(Ne || (Ne = {}));
                const ke = ({
                    children: e,
                    size: u,
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
                    onMouseLeave: m,
                    onClick: _,
                }) => {
                    const F = (0, n.useRef)(null),
                        D = (0, n.useState)(t),
                        C = D[0],
                        B = D[1],
                        p = (0, n.useState)(!1),
                        h = p[0],
                        v = p[1],
                        b = (0, n.useState)(!1),
                        f = b[0],
                        w = b[1],
                        y = (0, n.useCallback)(() => {
                            o || (F.current && (F.current.focus(), B(!0)));
                        }, [o]),
                        S = (0, n.useCallback)(
                            (e) => {
                                C && null !== F.current && !F.current.contains(e.target) && B(!1);
                            },
                            [C],
                        ),
                        x = (0, n.useCallback)(
                            (e) => {
                                o || (_ && _(e));
                            },
                            [o, _],
                        ),
                        M = (0, n.useCallback)(
                            (e) => {
                                o || (null !== s && L(s), c && c(e), w(!0));
                            },
                            [o, s, c],
                        ),
                        P = (0, n.useCallback)(
                            (e) => {
                                E && E(e);
                            },
                            [E],
                        ),
                        I = (0, n.useCallback)(
                            (e) => {
                                o || (A && A(e), v(!1));
                            },
                            [o, A],
                        ),
                        O = (0, n.useCallback)(
                            (e) => {
                                o || (null !== l && L(l), d && d(e), t && y(), v(!0));
                            },
                            [o, l, d, y, t],
                        ),
                        T = (0, n.useCallback)(
                            (e) => {
                                o || (m && m(e), v(!1));
                            },
                            [o, m],
                        ),
                        N = g()(
                            Oe.base,
                            Oe[`base__${r}`],
                            {
                                [Oe.base__disabled]: o,
                                [Oe[`base__${u}`]]: u,
                                [Oe.base__focus]: C,
                                [Oe.base__highlightActive]: h,
                                [Oe.base__firstHover]: f,
                            },
                            i,
                        ),
                        k = g()(Oe.state, Oe.state__default);
                    return (
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mousedown', S),
                                () => {
                                    document.removeEventListener('mousedown', S);
                                }
                            ),
                            [S],
                        ),
                        (0, n.useEffect)(() => {
                            B(t);
                        }, [t]),
                        a().createElement(
                            'div',
                            {
                                ref: F,
                                className: N,
                                onMouseEnter: M,
                                onMouseMove: P,
                                onMouseUp: I,
                                onMouseDown: O,
                                onMouseLeave: T,
                                onClick: x,
                            },
                            r !== Te.ghost &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: Oe.back }),
                                    a().createElement('span', { className: Oe.texture }),
                                ),
                            a().createElement(
                                'span',
                                { className: k },
                                a().createElement('span', { className: Oe.stateDisabled }),
                                a().createElement('span', { className: Oe.stateHighlightHover }),
                                a().createElement('span', { className: Oe.stateHighlightActive }),
                            ),
                            a().createElement(
                                'span',
                                { className: Oe.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                ke.defaultProps = { type: Te.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Le = (0, n.memo)(ke),
                    Re = {
                        base: 'ProgressBar_base_45',
                        base__medium: 'ProgressBar_base__medium_62',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__medium: 'ProgressBar_background__medium_6e',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let He, Ue;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big');
                })(He || (He = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(Ue || (Ue = {}));
                const $e = ({ size: e = He.Default }) =>
                        a().createElement('div', { className: g()(Re.background, Re[`background__${e}`]) }),
                    We = {
                        base: 'ProgressBarBlink_base_24',
                        base__medium: 'ProgressBarBlink_base__medium_ec',
                        base__small: 'ProgressBarBlink_base__small_0f',
                    },
                    Ge = ({ size: e }) => {
                        const u = g()(We.base, We[`base__${e}`]);
                        return a().createElement('div', { className: u });
                    },
                    Ve = {
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
                    qe = (0, n.memo)(
                        ({ size: e, lineRef: u, disabled: t, baseStyles: n, isComplete: r, withoutBounce: o }) => {
                            const i = g()(
                                    Ve.base,
                                    Ve[`base__${e}`],
                                    t && Ve.base__disabled,
                                    r && Ve.base__finished,
                                    o && Ve.base__withoutBounce,
                                ),
                                s = !t && !r;
                            return a().createElement(
                                'div',
                                { className: i, style: n, ref: u },
                                a().createElement('div', { className: Ve.pattern }),
                                a().createElement('div', { className: Ve.gradient }),
                                s && a().createElement(Ge, { size: e }),
                            );
                        },
                    ),
                    ze = ({ size: e, value: u, lineRef: t, disabled: r, onComplete: o }) => {
                        const i = (0, n.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            s = 100 === u;
                        return (
                            (0, n.useEffect)(() => {
                                s && o && o();
                            }, [s, o]),
                            a().createElement(qe, { size: e, disabled: r, baseStyles: i, isComplete: s, lineRef: t })
                        );
                    },
                    je = (e, u) => {
                        let t;
                        const n = setTimeout(() => {
                            t = e();
                        }, u);
                        return () => {
                            'function' == typeof t && t(), clearTimeout(n);
                        };
                    };
                let Ke, Qe;
                !(function (e) {
                    (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                })(Ke || (Ke = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(Qe || (Qe = {}));
                const Ye = 'ProgressBarDeltaSimple_base_6c',
                    Xe = 'ProgressBarDeltaSimple_delta_99',
                    Ze = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: r,
                            size: o,
                            to: i,
                            onEndAnimation: s,
                            onChangeAnimationState: l,
                        }) => {
                            const c = i < r,
                                E = (0, n.useState)(Qe.Idle),
                                d = E[0],
                                A = E[1],
                                m = d === Qe.In,
                                _ = d === Qe.End,
                                F = d === Qe.Idle,
                                D = (0, n.useCallback)(
                                    (e) => {
                                        A(e), l && l(e);
                                    },
                                    [l],
                                );
                            (0, n.useEffect)(() => {
                                if (F && !t) {
                                    return je(() => {
                                        D(Qe.In);
                                    }, u);
                                }
                            }, [D, t, F, u]),
                                (0, n.useEffect)(() => {
                                    if (m) {
                                        return je(() => {
                                            s && s(), D(Qe.End);
                                        }, e + u);
                                    }
                                }, [D, m, s, u, e]);
                            const C = (0, n.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                B = (0, n.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                g = (0, n.useMemo)(
                                    () => ({ width: `${Math.abs(r - i)}%`, left: `${c ? i : r}%` }),
                                    [r, c, i],
                                );
                            return _
                                ? null
                                : a().createElement(
                                      'div',
                                      { className: Ye, style: g },
                                      a().createElement(
                                          'div',
                                          { style: F ? C : B, className: Xe },
                                          a().createElement(Ge, { size: o }),
                                      ),
                                  );
                        },
                    ),
                    Je = (0, n.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: r,
                            disabled: o,
                            isComplete: i,
                            animationSettings: s,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const E = (0, n.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${s.line.duration}ms`,
                                    transitionDelay: `${s.line.delay}ms`,
                                }),
                                [s.line.delay, s.line.duration, e],
                            );
                            return a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(qe, {
                                    size: u,
                                    lineRef: r,
                                    disabled: o,
                                    isComplete: i,
                                    baseStyles: E,
                                }),
                                t >= 0 &&
                                    a().createElement(Ze, {
                                        transitionDuration: s.delta.duration,
                                        transitionDelay: s.delta.delay,
                                        freezed: s.freezed,
                                        from: t,
                                        size: u,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    eu = 'ProgressBarDeltaGrow_base_7e',
                    uu = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    tu = 'ProgressBarDeltaGrow_glow_68',
                    nu = (e) => (e ? { left: 0 } : { right: 0 }),
                    au = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    ru = (e) => ({ transitionDuration: `${e}ms` }),
                    ou = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: r,
                            size: o,
                            to: i,
                            onEndAnimation: s,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const E = i < r,
                                d = (0, n.useState)(Ke.Idle),
                                A = d[0],
                                m = d[1],
                                _ = A === Ke.End,
                                F = A === Ke.Idle,
                                D = A === Ke.Grow,
                                C = A === Ke.Shrink,
                                B = (0, n.useCallback)(
                                    (e) => {
                                        m(e), l && l(e);
                                    },
                                    [l],
                                ),
                                p = (0, n.useCallback)(
                                    (e, u) =>
                                        je(() => {
                                            B(e);
                                        }, u),
                                    [B],
                                );
                            (0, n.useEffect)(() => {
                                if (!t)
                                    return F
                                        ? p(Ke.Grow, u)
                                        : D
                                          ? p(Ke.Shrink, e)
                                          : C
                                            ? p(Ke.End, e)
                                            : void (_ && s && s());
                            }, [p, t, _, D, F, C, s, u, e]);
                            const h = (0, n.useMemo)(() => Object.assign({ width: '100%' }, ru(e), nu(E)), [E, e]),
                                v = (0, n.useMemo)(() => Object.assign({ width: '0%' }, ru(e), nu(E)), [E, e]),
                                b = (0, n.useMemo)(() => Object.assign({ width: '0%' }, au(E, r), ru(e)), [r, E, e]),
                                f = (0, n.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(i - r)}%` }, au(E, r), ru(e)),
                                    [r, E, i, e],
                                );
                            if (_) return null;
                            const w = g()(eu, c, E && 0 === i && uu);
                            return a().createElement(
                                'div',
                                { style: F ? b : f, className: w },
                                a().createElement(
                                    'div',
                                    { style: C ? v : h, className: tu },
                                    a().createElement(Ge, { size: o }),
                                ),
                            );
                        },
                    ),
                    iu = (0, n.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: r,
                            disabled: o,
                            isComplete: i,
                            animationSettings: s,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const E = e < t,
                                d = (0, n.useState)(!1),
                                A = d[0],
                                m = d[1],
                                _ = (0, n.useCallback)(
                                    (e) => {
                                        e === Ke.Shrink && m(!0), c && c(e);
                                    },
                                    [c],
                                ),
                                F = (0, n.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                D = (0, n.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${s.line.duration}ms` }),
                                    [s.line.duration, e],
                                );
                            return a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(qe, {
                                    size: u,
                                    lineRef: r,
                                    disabled: o,
                                    isComplete: i,
                                    withoutBounce: E && 0 === e,
                                    baseStyles: A ? D : F,
                                }),
                                t >= 0 &&
                                    a().createElement(ou, {
                                        transitionDuration: s.delta.duration,
                                        transitionDelay: s.delta.delay,
                                        onChangeAnimationState: _,
                                        freezed: s.freezed,
                                        onEndAnimation: l,
                                        from: t,
                                        size: u,
                                        to: e,
                                        className: s.delta.className,
                                    }),
                            );
                        },
                    ),
                    su = ['onComplete', 'onEndAnimation'];
                function lu() {
                    return (
                        (lu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        lu.apply(this, arguments)
                    );
                }
                const cu = (0, n.memo)((e) => {
                        let u = e.onComplete,
                            t = e.onEndAnimation,
                            r = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, su);
                        const o = (0, n.useState)(!1),
                            i = o[0],
                            s = o[1],
                            l = (0, n.useCallback)(() => {
                                const e = 100 === r.to;
                                e !== i && s(e), e && u && u(), t && t();
                            }, [i, u, t, r.to]);
                        switch (r.animationSettings.type) {
                            case Ue.Simple:
                                return a().createElement(Je, lu({}, r, { onEndAnimation: l, isComplete: i }));
                            case Ue.Growing:
                                return a().createElement(iu, lu({}, r, { onEndAnimation: l, isComplete: i }));
                            default:
                                return null;
                        }
                    }),
                    Eu = ['onEndAnimation'];
                function du() {
                    return (
                        (du =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        du.apply(this, arguments)
                    );
                }
                const Au = (0, n.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                r = Object.keys(e);
                            for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, Eu);
                    const r = (0, n.useRef)({}),
                        o = (0, n.useCallback)(() => {
                            (r.current.from = void 0), u && u();
                        }, [u]),
                        i = 'number' == typeof r.current.from ? r.current.from : t.from;
                    return (
                        (r.current.from = i),
                        a().createElement(cu, du({}, t, { onEndAnimation: o, key: `${i}-${t.to}`, from: i }))
                    );
                });
                function mu() {
                    return (
                        (mu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        mu.apply(this, arguments)
                    );
                }
                const _u = (0, n.memo)(
                        ({
                            size: e,
                            value: u,
                            lineRef: t,
                            disabled: n,
                            deltaFrom: r,
                            animationSettings: o,
                            onEndAnimation: i,
                            onChangeAnimationState: s,
                            onComplete: l,
                        }) => {
                            if (r === u)
                                return a().createElement(ze, {
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
                                animationSettings: o,
                                onComplete: l,
                                onEndAnimation: i,
                                onChangeAnimationState: s,
                            };
                            return o.withStack
                                ? a().createElement(Au, c)
                                : a().createElement(cu, mu({ key: `${r}-${u}` }, c));
                        },
                    ),
                    Fu = (e) => ({
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
                    Du = (e, u, t) => (t < e ? e : t > u ? u : t),
                    Cu = (e, u, t) => {
                        if ('number' == typeof t) {
                            return (Du(0, u, t) / u) * 100;
                        }
                        return e;
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
                    gu = {
                        freezed: !1,
                        withStack: !1,
                        type: Ue.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    pu = (0, n.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = Bu,
                            size: t = He.Default,
                            animationSettings: r = gu,
                            disabled: o = !1,
                            withoutBackground: i = !1,
                            value: s,
                            deltaFrom: l,
                            lineRef: c,
                            onChangeAnimationState: E,
                            onEndAnimation: d,
                            onComplete: A,
                        }) => {
                            const m = ((e, u, t) =>
                                (0, n.useMemo)(() => {
                                    const n = (Du(0, u, e) / u) * 100;
                                    return { value: n, deltaFrom: Cu(n, u, t) };
                                }, [t, u, e]))(s, e, l);
                            return a().createElement(
                                'div',
                                { className: g()(Re.base, Re[`base__${t}`]), style: Fu(u) },
                                !i && a().createElement($e, { size: t }),
                                a().createElement(_u, {
                                    size: t,
                                    lineRef: c,
                                    disabled: o,
                                    value: m.value,
                                    deltaFrom: m.deltaFrom,
                                    animationSettings: r,
                                    onEndAnimation: d,
                                    onChangeAnimationState: E,
                                    onComplete: A,
                                }),
                            );
                        },
                    ),
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
                function vu(e) {
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
                const bu = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: V.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    fu = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            a = e.args,
                            r = e.onMouseEnter,
                            o = e.onMouseLeave,
                            i = e.onMouseDown,
                            s = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            E = e.ignoreMouseClick,
                            d = void 0 !== E && E,
                            A = e.decoratorId,
                            m = void 0 === A ? 0 : A,
                            _ = e.isEnabled,
                            F = void 0 === _ || _,
                            D = e.targetId,
                            C = void 0 === D ? 0 : D,
                            B = e.onShow,
                            g = e.onHide,
                            p = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, hu);
                        const h = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, n.useMemo)(
                                () =>
                                    C ||
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
                                [C],
                            ),
                            b = (0, n.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (bu(t, m, { isMouseEvent: !0, on: !0, arguments: vu(a) }, v),
                                    B && B(),
                                    (h.current.isVisible = !0));
                            }, [t, m, a, v, B]),
                            f = (0, n.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const e = h.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (h.current.timeoutId = 0)),
                                        bu(t, m, { on: !1 }, v),
                                        h.current.isVisible && g && g(),
                                        (h.current.isVisible = !1);
                                }
                            }, [t, m, v, g]),
                            w = (0, n.useCallback)((e) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(h.current.prevTarget) && f();
                                    }, 200)));
                            }, []);
                        (0, n.useEffect)(() => {
                            const e = h.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', w, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', w, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === F && f();
                            }, [F, f]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', f),
                                    () => {
                                        window.removeEventListener('mouseleave', f), f();
                                    }
                                ),
                                [f],
                            );
                        return F
                            ? (0, n.cloneElement)(
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
                                              f(), null == o || o(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === d && f(), null == s || s(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === d && f(), null == i || i(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      p,
                                  ),
                              )
                            : u;
                        var y;
                    },
                    wu = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function yu() {
                    return (
                        (yu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        yu.apply(this, arguments)
                    );
                }
                const Su = R.views.common.tooltip_window.simple_tooltip_content,
                    xu = (e) => {
                        let u = e.children,
                            t = e.body,
                            r = e.header,
                            o = e.note,
                            i = e.alert,
                            s = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    r = Object.keys(e);
                                for (n = 0; n < r.length; n++) (t = r[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, wu);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, s, { body: t, header: r, note: o, alert: i });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [i, t, r, o, s]);
                        return a().createElement(
                            fu,
                            yu(
                                {
                                    contentId:
                                        ((E = null == s ? void 0 : s.hasHtmlContent),
                                        E ? Su.SimpleTooltipHtmlContent('resId') : Su.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var E;
                    },
                    Mu = 'Footer_base_52',
                    Pu = 'Footer_progressBarWrapper_d3',
                    Iu = 'Footer_progressBarLabel_e7',
                    Ou = 'Footer_buttonsWrapper_a5',
                    Tu = 'Footer_button_19';
                let Nu;
                function ku(e, u) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const t = 0 === e.indexOf('%') ? 2 : 1;
                        return String(u[e.slice(t, -t)]);
                    });
                }
                function Lu(e) {
                    return e.replace(/-/g, '_');
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(Nu || (Nu = {}));
                const Ru = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    Hu = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    Uu = (e, u, t = Nu.left) => e.split(u).reduce(t === Nu.left ? Ru : Hu, []),
                    $u = (() => {
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
                    Wu = ['zh_cn', 'zh_sg', 'zh_tw'],
                    Gu = (e, u = Nu.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return Wu.includes(t)
                            ? $u(e)
                            : ((e, u = Nu.left) => {
                                  let t = [];
                                  const n =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      a = e.replace(/&nbsp;/g, ' ');
                                  return Uu(a, /( )/, u).forEach((e) => (t = t.concat(Uu(e, n, Nu.left)))), t;
                              })(e, u);
                    },
                    Vu = R.strings.mapbox.survey,
                    qu = (0, K.Pi)(() => {
                        const e = Ie(),
                            u = e.model,
                            t = e.controls,
                            r = u.root.get(),
                            o = r.currentPage,
                            i = r.totalPagesCount,
                            s = r.canContinue,
                            l = r.isSurveyFinish,
                            c = 0 === o,
                            E = ku(Vu.percentage(), { percent: Math.round((o / i) * 100) }),
                            d = (0, n.useCallback)(() => {
                                t.updateScrollDirection(ie.Previous), t.showPreviousPage();
                            }, [t]),
                            A = (0, n.useCallback)(() => {
                                t.updateScrollDirection(ie.Next), l ? t.ready() : t.showNextPage();
                            }, [t, l]),
                            m = (0, n.useCallback)(() => {
                                L(R.sounds.bp_progress_bar_stop());
                            }, []);
                        return a().createElement(
                            'div',
                            { className: Mu },
                            !l &&
                                a().createElement(
                                    'div',
                                    { className: Pu },
                                    a().createElement('div', { className: Iu }, E),
                                    a().createElement(pu, {
                                        size: He.Small,
                                        value: o,
                                        maxValue: i,
                                        animationSettings: gu,
                                        onEndAnimation: m,
                                    }),
                                ),
                            a().createElement(
                                'div',
                                { className: Ou },
                                !(c || l) &&
                                    a().createElement(
                                        Le,
                                        { onClick: d, size: Ne.medium, type: Te.primary, mixClass: Tu },
                                        Vu.backBtn(),
                                    ),
                                a().createElement(
                                    xu,
                                    { body: Vu.required(), isEnabled: !s },
                                    a().createElement(
                                        'div',
                                        null,
                                        a().createElement(
                                            Le,
                                            {
                                                onClick: A,
                                                size: Ne.medium,
                                                type: Te.primary,
                                                mixClass: Tu,
                                                disabled: !s,
                                            },
                                            l ? Vu.readyBtn() : Vu.nextBtn(),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    }),
                    zu = 'Header_base_40',
                    ju = 'Header_title_49',
                    Ku = 'Header_subTitle_8d',
                    Qu = 'FormatText_base_d0',
                    Yu = ({ binding: e, text: u = '', classMix: t, alignment: r = Nu.left }) =>
                        null === u
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : a().createElement(
                                  n.Fragment,
                                  null,
                                  u.split('\n').map((u, o) =>
                                      a().createElement(
                                          'div',
                                          { className: g()(Qu, t), key: `${u}-${o}` },
                                          ((e, u, t) =>
                                              e
                                                  .split(/%\((.*?)\)(?:[sd])?/g)
                                                  .map((e) => (t && e in t ? t[e] : Gu(e, u))))(u, r, e).map((e, u) =>
                                              a().createElement(n.Fragment, { key: `${u}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              ),
                    Xu = R.strings.mapbox.survey,
                    Zu = (0, K.Pi)(() => {
                        var e;
                        const u = Ie().model.root.get(),
                            t = u.mapId,
                            n = 0 === u.currentPage,
                            r = null == (e = R.strings.arenas.$dyn(`c_${t}`)) ? void 0 : e.name(),
                            o = r ? { text: Xu.title.map(), binding: { map: r } } : { text: Xu.title.common() };
                        return a().createElement(
                            'div',
                            { className: zu },
                            t && a().createElement('div', { className: ju }, a().createElement(Yu, o)),
                            n && a().createElement('div', { className: Ku }, Xu.subTitle()),
                        );
                    }),
                    Ju = {
                        base: 'Survey_base_97',
                        base__empty: 'Survey_base__empty_48',
                        base__finish: 'Survey_base__finish_2f',
                        title: 'Survey_title_79',
                        base__first: 'Survey_base__first_ac',
                        content: 'Survey_content_c5',
                        base__vehicle: 'Survey_base__vehicle_88',
                        base__table: 'Survey_base__table_4f',
                        base__multipleChoice: 'Survey_base__multipleChoice_4e',
                        base__map: 'Survey_base__map_3e',
                        base__textarea: 'Survey_base__textarea_dd',
                    },
                    et = 'FinishContent_base_a0',
                    ut = 'FinishContent_image_7a',
                    tt = 'FinishContent_text_b3',
                    nt = () =>
                        a().createElement(
                            'div',
                            { className: et },
                            a().createElement('div', { className: ut }),
                            a().createElement('div', { className: tt }, R.strings.mapbox.survey.template.final.title()),
                        ),
                    at = (e, u, t, n, a, r) => {
                        r({
                            optionId: t,
                            choices: a
                                ? u
                                    ? n.concat(e)
                                    : re(
                                          n,
                                          (u) => u !== e,
                                          (e) => e,
                                      )
                                : [e],
                        });
                    },
                    rt = {
                        base: 'ToggleButton_base_2c',
                        base__button: 'ToggleButton_base__button_cb',
                        base__active: 'ToggleButton_base__active_a6',
                        base__slot: 'ToggleButton_base__slot_98',
                        base__disabled: 'ToggleButton_base__disabled_19',
                        texture: 'ToggleButton_texture_f1',
                        background: 'ToggleButton_background_ef',
                        background__main: 'ToggleButton_background__main_68',
                        background__primary: 'ToggleButton_background__primary_a9',
                        background__primaryGreen: 'ToggleButton_background__primaryGreen_4f',
                        background__primaryRed: 'ToggleButton_background__primaryRed_ca',
                        background__secondary: 'ToggleButton_background__secondary_b2',
                        background__ghost: 'ToggleButton_background__ghost_d6',
                        content: 'ToggleButton_content_63',
                        overlay: 'ToggleButton_overlay_23',
                        indicator: 'ToggleButton_indicator_a7',
                    };
                let ot;
                !(function (e) {
                    (e.Button = 'button'), (e.Slot = 'slot');
                })(ot || (ot = {}));
                const it = () => {},
                    st = a().memo(
                        ({
                            active: e = !1,
                            className: u,
                            children: t,
                            toggleType: r = ot.Button,
                            toggleButtonType: o = Te.secondary,
                            onClick: i,
                            disabled: s,
                            soundClick: l = 'play',
                            soundHover: c = 'highlight',
                            onMouseEnter: E = it,
                            onMouseDown: d = it,
                            onMouseUp: A = it,
                            onMouseLeave: m = it,
                        }) => {
                            const _ = (0, n.useCallback)(
                                    (u) => {
                                        s || (L(l), i && i(u, e));
                                    },
                                    [i, s, e, l],
                                ),
                                F = (0, n.useCallback)(
                                    (e) => {
                                        s || (L(c), E && E(e));
                                    },
                                    [s, c, E],
                                ),
                                D = (0, n.useCallback)(
                                    (e) => {
                                        s || ((1 !== e.button && 2 !== e.button) || (null !== l && L(l)), d && d(e));
                                    },
                                    [d, s, l],
                                ),
                                C = g()(rt.base, u, rt[`base__${r}`], e && rt.base__active, s && rt.base__disabled);
                            return a().createElement(
                                'div',
                                {
                                    className: C,
                                    onClick: _,
                                    onMouseEnter: F,
                                    onMouseUp: s ? it : A,
                                    onMouseDown: D,
                                    onMouseLeave: s ? it : m,
                                },
                                a().createElement('div', { className: rt.content }, t),
                                r === ot.Button &&
                                    a().createElement(
                                        a().Fragment,
                                        null,
                                        a().createElement('div', {
                                            className: g()(rt.background, rt[`background__${o}`]),
                                        }),
                                        a().createElement('div', { className: rt.texture }),
                                    ),
                                a().createElement('div', { className: rt.overlay }),
                                a().createElement('div', { className: rt.indicator }),
                            );
                        },
                    ),
                    lt = {
                        base: 'SurveyTextOption_base_18',
                        toggle: 'SurveyTextOption_toggle_76',
                        toggle__extendedSmall: 'SurveyTextOption_toggle__extendedSmall_2f',
                        toggle__large: 'SurveyTextOption_toggle__large_8f',
                        buttonTitle: 'SurveyTextOption_buttonTitle_b6',
                    };
                let ct;
                !(function (e) {
                    (e.Small = 'small'), (e.ExtendedSmall = 'extendedSmall'), (e.Large = 'large');
                })(ct || (ct = {}));
                const Et = R.strings.mapbox.survey,
                    dt = ({ pathPrefix: e, optionId: u, isActive: t, size: n = ct.Small, onChange: r }) => {
                        const o = Ie().model.root.get().surveyGroup;
                        return a().createElement(
                            'div',
                            { className: lt.base },
                            a().createElement(
                                st,
                                {
                                    onClick: () => r(u, !t),
                                    active: t,
                                    toggleType: ot.Slot,
                                    className: g()(lt.toggle, lt[`toggle__${n}`]),
                                },
                                a().createElement(
                                    'div',
                                    { className: lt.buttonTitle, lang: R.strings.settings.LANGUAGE_CODE() },
                                    Et.$dyn(o).response.$dyn(`${e}_${u}`),
                                ),
                            ),
                        );
                    },
                    At = 'ImageSurveyContent_base_db',
                    mt = 'ImageSurveyContent_image_43',
                    _t = 'ImageSurveyContent_buttons_ad',
                    Ft = 'ImageSurveyContent_toggle_af',
                    Dt = 'ImageSurveyContent_toggle__last_90',
                    Ct = (0, K.Pi)(
                        ({ questionId: e, pathPrefix: u, imagePath: t, variants: n, selectedVariants: r }) => {
                            const o = Ie(),
                                i = o.model,
                                s = o.controls,
                                l = i.computes.isMultipleChoice(),
                                c = n.length,
                                E = 5 === c ? ct.Small : ct.ExtendedSmall,
                                d = {
                                    backgroundImage: `url(R.images.gui.maps.icons.mapbox.survey.template.image.${t})`,
                                },
                                A = (u, t) => at(u, t, e, r, l, s.answerSimpleQuestion);
                            return a().createElement(
                                'div',
                                { className: At },
                                a().createElement('div', { className: mt, style: d }),
                                a().createElement(
                                    'div',
                                    { className: _t },
                                    n.map((t, n) =>
                                        a().createElement(
                                            'div',
                                            { className: g()(Ft, n + 1 === c && Dt), key: `${e}_${t}` },
                                            a().createElement(dt, {
                                                pathPrefix: u,
                                                optionId: t,
                                                isActive: r.includes(t),
                                                size: E,
                                                onChange: A,
                                            }),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    Bt = (0, n.memo)(Ct),
                    gt = 'SurveyImageOption_base_19',
                    pt = 'SurveyImageOption_toggle_2d',
                    ht = 'SurveyImageOption_toggleContent_60',
                    vt = 'SurveyImageOption_buttonImage_a5',
                    bt = 'SurveyImageOption_buttonTitle_ac',
                    ft = R.strings.mapbox.survey,
                    wt = R.strings.settings.LANGUAGE_CODE(),
                    yt = ({ pathPrefix: e, optionId: u, isActive: t, onClick: n }) => {
                        const r = w().mediaSize,
                            o = Ie().model.root.get().surveyGroup,
                            i = r <= v.Small ? '_small' : '',
                            s = {
                                backgroundImage: `url(R.images.gui.maps.icons.mapbox.survey.template.vehicle.${Lu(u) + i})`,
                            };
                        return a().createElement(
                            'div',
                            { className: gt },
                            a().createElement(
                                st,
                                { onClick: () => n(u, !t), active: t, toggleType: ot.Slot, className: pt },
                                a().createElement(
                                    'div',
                                    { className: ht },
                                    a().createElement('div', { className: vt, style: s }),
                                    a().createElement(
                                        'div',
                                        { className: bt, lang: wt },
                                        ft.$dyn(o).response.$dyn(`${e}_${Lu(u)}`),
                                    ),
                                ),
                            ),
                        );
                    },
                    St = 'VehicleSurveyContent_base_d0',
                    xt = 'VehicleSurveyContent_buttons_f0',
                    Mt = (0, K.Pi)(({ questionId: e, pathPrefix: u, variants: t, selectedVariants: n }) => {
                        const r = Ie(),
                            o = r.model,
                            i = r.controls,
                            s = o.computes.isMultipleChoice(),
                            l = (u, t) => at(u, t, e, n, s, i.answerSimpleQuestion);
                        return a().createElement(
                            'div',
                            { className: St },
                            a().createElement(
                                'div',
                                { className: xt },
                                t.map((e) =>
                                    a().createElement(yt, {
                                        key: `${u}_${e}`,
                                        pathPrefix: u,
                                        optionId: e,
                                        isActive: n.indexOf(e) > -1,
                                        onClick: l,
                                    }),
                                ),
                            ),
                        );
                    }),
                    Pt = (0, n.memo)(Mt),
                    It = {
                        base: 'Option_base_32',
                        questionTitle: 'Option_questionTitle_66',
                        questionTitle__small: 'Option_questionTitle__small_c8',
                        questionTitle__medium: 'Option_questionTitle__medium_cf',
                        questionTitle__large: 'Option_questionTitle__large_f2',
                        icon: 'Option_icon_6f',
                        buttons: 'Option_buttons_5f',
                        toggle: 'Option_toggle_c4',
                        buttonTitle: 'Option_buttonTitle_ad',
                    };
                let Ot;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Large = 'large');
                })(Ot || (Ot = {}));
                const Tt = R.strings.mapbox.survey,
                    Nt = ({ showIcons: e, optionId: u, option: t, pathPrefix: n, onClick: r }) => {
                        const o = Ie().model.root.get().surveyGroup,
                            i = 2 === (s = t.variants.length) ? Ot.Large : 3 === s ? Ot.Medium : Ot.Small;
                        var s;
                        const l = Tt.$dyn(o).question.option.$dyn(`${n}_${Lu(t.optionId)}`),
                            c = (e, n) => {
                                at(e, n, u, t.selectedVariants, t.isMultipleChoice, r);
                            },
                            E = {
                                backgroundImage: `url(R.images.gui.maps.icons.mapbox.survey.template.vehicle.small.${Lu(t.optionId)})`,
                            };
                        return a().createElement(
                            'div',
                            { className: It.base },
                            e && a().createElement('div', { className: It.icon, style: E }),
                            a().createElement(
                                'div',
                                { className: g()(It.questionTitle, It[`questionTitle__${i}`]) },
                                l,
                            ),
                            a().createElement(
                                'div',
                                { className: It.buttons },
                                t.variants.map((e) =>
                                    a().createElement(
                                        'div',
                                        { className: It.toggle, key: `${n}_${e}` },
                                        a().createElement(dt, {
                                            pathPrefix: n,
                                            optionId: e,
                                            isActive: t.selectedVariants.includes(e),
                                            onChange: c,
                                        }),
                                    ),
                                ),
                            ),
                        );
                    },
                    kt = 'TableSurveyContent_base_63',
                    Lt = 'TableSurveyContent_option_86',
                    Rt = 'TableSurveyContent_blank_01',
                    Ht = (0, K.Pi)(({ questionId: e, pathPrefix: u }) => {
                        const t = Ie(),
                            n = t.model,
                            r = t.controls,
                            o = n.question.get(),
                            i = o.showIcons,
                            s = o.type,
                            l = n.computes.options(),
                            c = n.lastTableState.get().optionsCount,
                            E = (u) => {
                                const t = re(
                                    l,
                                    (e) => e && e.selectedVariants.length > 0 && e.optionId !== u.optionId,
                                    (e) => ({ optionId: e.optionId, choices: e.selectedVariants }),
                                );
                                r.answerTableQuestion(e, t.concat(u));
                            };
                        return s === ye.TABLE
                            ? a().createElement(
                                  'div',
                                  { className: kt },
                                  re(
                                      l,
                                      (e) => null !== e,
                                      (e) =>
                                          a().createElement(
                                              'div',
                                              { className: Lt, key: `optn${u}_${e.optionId}` },
                                              a().createElement(Nt, {
                                                  showIcons: i,
                                                  optionId: e.optionId,
                                                  option: e,
                                                  pathPrefix: u,
                                                  onClick: E,
                                              }),
                                          ),
                                  ),
                              )
                            : a().createElement('div', { className: Rt, style: { '--rows': c } });
                    }),
                    Ut = (0, n.memo)(Ht);
                t(368);
                let $t;
                !(function (e) {
                    (e[(e.ZERO = 48)] = 'ZERO'),
                        (e[(e.ONE = 49)] = 'ONE'),
                        (e[(e.TWO = 50)] = 'TWO'),
                        (e[(e.THREE = 51)] = 'THREE'),
                        (e[(e.FOUR = 52)] = 'FOUR'),
                        (e[(e.FIVE = 53)] = 'FIVE'),
                        (e[(e.SIX = 54)] = 'SIX'),
                        (e[(e.SEVEN = 55)] = 'SEVEN'),
                        (e[(e.EIGHT = 56)] = 'EIGHT'),
                        (e[(e.NINE = 57)] = 'NINE'),
                        (e[(e.NUMPAD_0 = 96)] = 'NUMPAD_0'),
                        (e[(e.NUMPAD_1 = 97)] = 'NUMPAD_1'),
                        (e[(e.NUMPAD_2 = 98)] = 'NUMPAD_2'),
                        (e[(e.NUMPAD_3 = 99)] = 'NUMPAD_3'),
                        (e[(e.NUMPAD_4 = 100)] = 'NUMPAD_4'),
                        (e[(e.NUMPAD_5 = 101)] = 'NUMPAD_5'),
                        (e[(e.NUMPAD_6 = 102)] = 'NUMPAD_6'),
                        (e[(e.NUMPAD_7 = 103)] = 'NUMPAD_7'),
                        (e[(e.NUMPAD_8 = 104)] = 'NUMPAD_8'),
                        (e[(e.NUMPAD_9 = 105)] = 'NUMPAD_9');
                })($t || ($t = {}));
                const Wt = 'TextArea_base_23',
                    Gt = 'TextArea_textAreaWrapper_60',
                    Vt = 'TextArea_textAreaWrapper__focused_d3',
                    qt = 'TextArea_textArea_3d',
                    zt = 'TextArea_textArea__disabled_50',
                    jt = 'TextArea_textArea__hint_e1',
                    Kt = '',
                    Qt = [G.n.PAGE_UP, G.n.PAGE_DOWN, G.n.ENTER],
                    Yt = [$t.NUMPAD_2, $t.NUMPAD_4, $t.NUMPAD_6, $t.NUMPAD_8, $t.NUMPAD_9, $t.NUMPAD_3],
                    Xt = /[\r]/gm,
                    Zt = (e) => e.replaceAll(Xt, '').replaceAll(/[\n\t]/gm, ' '),
                    Jt = ({
                        value: e = '',
                        rows: u = 3,
                        maxLength: t = 168,
                        sizeClassMix: r,
                        fontClassMix: o,
                        placeholder: i,
                        isDefaultTextResetEnabled: s = !0,
                        onChange: l,
                        onBlur: c,
                    }) => {
                        const E = (0, n.useState)(!1),
                            d = E[0],
                            A = E[1],
                            m = (0, n.useRef)(null),
                            _ = (0, n.useState)(!1),
                            F = _[0],
                            D = _[1],
                            C = (0, n.useState)(!1),
                            B = C[0],
                            p = C[1],
                            h = (0, n.useState)(Kt),
                            v = h[0],
                            b = h[1];
                        (0, n.useEffect)(() => {
                            const u = Zt(e);
                            u !== Kt && p(!0), b(u || i);
                        }, [e, i, t]);
                        const f = () => {
                            v !== i || B || b(Kt);
                        };
                        return (
                            z(G.n.ESCAPE, () => {
                                var e;
                                null == (e = m.current) || e.blur(), D(!0);
                            }),
                            a().createElement(
                                'div',
                                { className: Wt },
                                a().createElement(
                                    'div',
                                    { className: g()(Gt, r, d && Vt) },
                                    a().createElement('textarea', {
                                        ref: m,
                                        className: g()(qt, ((v === i && !B) || v === Kt) && jt, F && zt, o),
                                        onChange: () => {
                                            if (!m.current) return;
                                            const e = Zt(m.current.value).substr(0, t);
                                            b(e), B ? e === Kt && p(!1) : p(!0), (e !== i || B) && (null == l || l(e));
                                        },
                                        onClick: () => {
                                            f();
                                        },
                                        onBlur: () => {
                                            A(!1),
                                                s && v === Kt && !B && (b(i), p(!1)),
                                                (v !== i || B) && (null == c || c(v));
                                        },
                                        onFocus: () => A(!0),
                                        onKeyDown: (e) => {
                                            if (!m.current) return;
                                            f();
                                            const n = e.getModifierState(G.s.NUM_LOCK);
                                            if (Qt.includes(e.keyCode) || (!n && Yt.includes(e.keyCode)))
                                                if (e.keyCode === G.n.ENTER) e.stopPropagation(), e.preventDefault();
                                                else if (e.keyCode === $t.NUMPAD_2 || e.keyCode === $t.NUMPAD_8) {
                                                    const n = Math.ceil(t / u),
                                                        a = e.keyCode === $t.NUMPAD_8,
                                                        r = m.current.selectionStart + (a ? -1 : 1) * n;
                                                    m.current.setSelectionRange(r, r);
                                                } else if (e.keyCode === $t.NUMPAD_4 || e.keyCode === $t.NUMPAD_6) {
                                                    const u = e.keyCode === $t.NUMPAD_4,
                                                        t = m.current.selectionStart + (u ? -1 : 1);
                                                    m.current.setSelectionRange(t, t);
                                                } else
                                                    e.keyCode === G.n.PAGE_UP || e.keyCode === $t.NUMPAD_9
                                                        ? m.current.setSelectionRange(0, 0)
                                                        : (e.keyCode !== G.n.PAGE_DOWN && e.keyCode !== $t.NUMPAD_3) ||
                                                          m.current.setSelectionRange(v.length, v.length);
                                        },
                                        rows: u,
                                        value: v,
                                        maxLength: t,
                                    }),
                                ),
                            )
                        );
                    },
                    en = {
                        base: 'Answer_base_74',
                        header: 'Answer_header_3c',
                        pointNameWrapper: 'Answer_pointNameWrapper_49',
                        pointName: 'Answer_pointName_50',
                        point: 'Answer_point_25',
                        point__1: 'Answer_point__1_32',
                        point__2: 'Answer_point__2_17',
                        point__3: 'Answer_point__3_ee',
                        textArea: 'Answer_textArea_f0',
                        closeButton: 'Answer_closeButton_65',
                        closeButton__overState: 'Answer_closeButton__overState_37',
                        glow: 'Answer_glow_19',
                        glow__overState: 'Answer_glow__overState_a1',
                    },
                    un = R.strings.mapbox.survey.template.mapInteractive.point,
                    tn = ({
                        answerId: e,
                        originalAnswer: u,
                        isMapPointOver: t,
                        onPointRemoved: r,
                        onAnswerChange: o,
                        onCloseOverState: i,
                    }) => {
                        const s = (0, n.useState)(u),
                            l = s[0],
                            c = s[1],
                            E = (0, n.useState)(!1),
                            d = E[0],
                            A = E[1],
                            m = ku(un.description(), { maxLength: 180 });
                        return a().createElement(
                            'div',
                            { className: en.base },
                            a().createElement(
                                'div',
                                { className: en.header },
                                a().createElement(
                                    'div',
                                    { className: en.pointNameWrapper },
                                    a().createElement('div', { className: en.pointName }, un.title()),
                                    a().createElement('div', { className: g()(en.point, en[`point__${e}`]) }),
                                ),
                                a().createElement(
                                    xu,
                                    { body: un.tooltip() },
                                    a().createElement(
                                        'div',
                                        {
                                            className: g()(en.closeButton, t && en.closeButton__overState),
                                            onClick: () => {
                                                r(e);
                                            },
                                            onMouseEnter: () => {
                                                A(!0), null == i || i(e, !0);
                                            },
                                            onMouseLeave: () => {
                                                A(!1), null == i || i(e, !1);
                                            },
                                        },
                                        a().createElement('div', { className: g()(en.glow, t && en.glow__overState) }),
                                    ),
                                ),
                            ),
                            a().createElement(Jt, {
                                sizeClassMix: en.textArea,
                                placeholder: m,
                                isDefaultTextResetEnabled: !t && !d,
                                onBlur: (t) => {
                                    c(t), u !== t && o(e, t);
                                },
                                value: l,
                                rows: 5,
                                maxLength: 180,
                            }),
                        );
                    },
                    nn = 'Answers_base_81',
                    an = 'Answers_answers_e5',
                    rn = 'Answers_answer_b0',
                    on = (0, K.Pi)(({ onPointRemoved: e, onAnswerChange: u }) => {
                        const t = Ie(),
                            n = t.model,
                            r = t.controls,
                            o = n.mapState.get(),
                            i = o.answersAnimationState,
                            s = o.overPointId,
                            l = n.mapPoints.get(),
                            c = (e, u) => {
                                i !== Ae.Start && r.updateIMSOverPointId(u ? e : 0);
                            },
                            E = (u) => {
                                s === u && e(u);
                            },
                            d = (0, Q.useTransition)(
                                l.map((e, u) => Object.assign({}, e, { x: 0, y: 146 * u + 'rem' })),
                                {
                                    key: (e) => e.pointId,
                                    from: { opacity: 0, x: 25 },
                                    leave: { opacity: 0 },
                                    enter: ({ x: e }) => ({ x: e, opacity: 1 }),
                                    update: ({ y: e }) => ({ y: e }),
                                    config: { duration: 500, easing: de },
                                    exitBeforeEnter: !0,
                                    onStart() {
                                        r.updateIMSAnswersAnimationState(Ae.Start);
                                    },
                                    onRest() {
                                        r.updateIMSAnswersAnimationState(Ae.End);
                                    },
                                },
                            );
                        return a().createElement(
                            'div',
                            { className: nn },
                            a().createElement(
                                'div',
                                { className: an },
                                d((e, t) =>
                                    a().createElement(
                                        Q.animated.div,
                                        { className: rn, style: Object.assign({}, e) },
                                        a().createElement(tn, {
                                            answerId: t.pointId,
                                            onPointRemoved: E,
                                            onAnswerChange: u,
                                            onCloseOverState: c,
                                            originalAnswer: t.response.comment,
                                            isMapPointOver: s === t.pointId,
                                        }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    sn = 'InfoBlock_base_4d',
                    ln = 'InfoBlock_arrow_26',
                    cn = 'InfoBlock_blocks_f7',
                    En = 'InfoBlock_infoElement_e9',
                    dn = 'InfoBlock_infoElementText_1b',
                    An = 'InfoBlock_infoIcon_e6',
                    mn = 'InfoBlock_infoIcon__hand_28',
                    _n = 'InfoBlock_infoIcon__point_4a',
                    Fn = R.strings.mapbox.survey.template.mapInteractive,
                    Dn = () =>
                        a().createElement(
                            'div',
                            { className: sn },
                            a().createElement('div', { className: ln }),
                            a().createElement(
                                'div',
                                { className: cn },
                                a().createElement(
                                    'div',
                                    { className: En },
                                    a().createElement('div', { className: g()(An, mn) }),
                                    a().createElement('div', { className: dn }, Fn.hint0()),
                                ),
                                a().createElement(
                                    'div',
                                    { className: En },
                                    a().createElement('div', { className: g()(An, _n) }),
                                    a().createElement('div', { className: dn }, Fn.hint1()),
                                ),
                            ),
                        ),
                    Cn = 'InteractiveMapSurveyContent_base_32',
                    Bn = 'InteractiveMapSurveyContent_rightBlock_85',
                    gn = 'InteractiveMapSurveyContent_answers_3d',
                    pn = 'MapImage_base_09',
                    hn = 'MapImage_imageBorder_61',
                    vn = 'MapImage_image_11',
                    bn = 'MapImage_image__events_c7',
                    fn = 'MapImage_image__hand_02',
                    wn = ({
                        mapId: e,
                        mouseEventsDisabled: u = !0,
                        showHandPointer: t = !1,
                        onMapClick: r,
                        onMapMove: i,
                        onMapEnter: s,
                        onMapOut: l,
                    }) => {
                        const c = (0, n.useRef)(null),
                            E = {
                                backgroundImage: `url(R.images.gui.maps.icons.mapbox.survey.template.interactiveMap.c_${e})`,
                            },
                            d = (e, u, t) => {
                                if (c.current) {
                                    const n = c.current.getBoundingClientRect(),
                                        a = o.O.view.pxToRem(u - n.x),
                                        l = o.O.view.pxToRem(t - n.y);
                                    switch (e) {
                                        case 'mouseenter':
                                            null == s || s(a, l);
                                            break;
                                        case 'mousemove':
                                            null == i || i(a, l);
                                            break;
                                        case 'click':
                                            null == r || r(Math.ceil(a), Math.ceil(l));
                                    }
                                }
                            };
                        return a().createElement(
                            'div',
                            { className: pn },
                            a().createElement('div', { className: hn }),
                            a().createElement('div', {
                                ref: c,
                                className: g()(vn, !u && bn, t && fn),
                                style: E,
                                onClick: (e) => d(e.type, e.clientX, e.clientY),
                                onMouseMove: (e) => d(e.type, e.clientX, e.clientY),
                                onMouseEnter: (e) => d(e.type, e.clientX, e.clientY),
                                onMouseLeave: () => (null == l ? void 0 : l()),
                            }),
                        );
                    },
                    yn = 'MapBlock_base_3a',
                    Sn = 'MapBlock_point_8d',
                    xn = 'MapBlock_point__hidden_c0',
                    Mn = (0, K.Pi)(({ onAddPoint: e, onRemovePoint: u }) => {
                        const t = Ie(),
                            n = t.model,
                            r = t.controls,
                            i = n.mapState.get(),
                            s = i.freePointId,
                            l = i.overPointId,
                            c = i.animatedPointId,
                            E = i.animatedPointType,
                            d = i.answersAnimationState,
                            A = i.cursorPointId,
                            m = i.cursorCoordinates,
                            _ = i.lastRemovedPointPosition,
                            F = i.lastOverPointOffset,
                            D = n.root.get().mapId,
                            C = n.mapPoints.get(),
                            B = n.question.get().type,
                            p = d === Ae.Start || 0 !== c,
                            h = B === ye.INTERACTIVE_MAP ? 1.5 : 1,
                            v = (e, u) => {
                                const t = C.every((t) => {
                                        const n = Ee(e - t.response.x, -Be, De),
                                            a = Ee(u - t.response.y, -Fe, Ce);
                                        return !(n && a);
                                    }),
                                    n = Ee(e, 15, 414) && Ee(u, 15, 414);
                                t && n
                                    ? (r.updateIMSCursorPointId(s), r.updateIMSCursorCoordinates({ x: e, y: u }))
                                    : r.updateIMSCursorPointId(0);
                            },
                            b = (e) => {
                                if (l !== e) return;
                                const t = C.findIndex((u) => u.pointId === e),
                                    n = { x: C[t].response.x, y: C[t].response.y };
                                u(e), r.updateIMSAnimatedPointId(e, me.Remove), r.updateIMSLastRemovedPointPosition(n);
                            },
                            f = (e, u) => {
                                u && 0 !== A && r.updateIMSCursorPointId(0),
                                    c === e
                                        ? (r.updateIMSOverPointId(0),
                                          u ||
                                              (r.updateIMSLastOverPointOffset(ce),
                                              r.updateIMSLastRemovedPointPosition(ce)))
                                        : r.updateIMSOverPointId(u ? e : 0);
                            },
                            w = (e, u, t) => {
                                0 !== l || p || r.updateIMSOverPointId(e),
                                    r.updateIMSLastOverPointOffset({ x: u, y: t });
                            },
                            y = (e, u) => {
                                0 !== s && v(e, u);
                            },
                            S = (0, Q.useTransition)(C, {
                                key: (e) => e.pointId,
                                from: { opacity: 1, y: 0 },
                                enter: [{ opacity: 1, y: 0 }, { y: o.O.view.remToPx(-3) }, { y: 0 }],
                                leave: [{ opacity: 0, transform: `scale(${h})` }],
                                config: (e, u, t) =>
                                    'enter' === t ? { duration: 100, easing: de } : { duration: 200, easing: de },
                                exitBeforeEnter: !0,
                                onDestroyed: (e) => {
                                    ((e) => {
                                        if (
                                            c === e &&
                                            E === me.Remove &&
                                            (r.updateIMSAnimatedPointId(0), _.x !== ce.x && _.y !== ce.y)
                                        ) {
                                            const e = _.x + F.x,
                                                u = _.y + F.y,
                                                t = re(
                                                    C,
                                                    (t) =>
                                                        Ee(e - t.response.x, -he, pe) && Ee(u - t.response.y, -ge, ve),
                                                    (e) => e,
                                                );
                                            0 === t.length ? v(e, u) : r.updateIMSOverPointId(t[t.length - 1].pointId),
                                                r.updateIMSLastOverPointOffset(ce),
                                                r.updateIMSLastRemovedPointPosition(ce);
                                        }
                                    })(e.pointId);
                                },
                                onRest: (e, u, t) => {
                                    var n;
                                    (n = t.pointId), c === n && E === me.Add && r.updateIMSAnimatedPointId(0);
                                },
                            });
                        return a().createElement(
                            'div',
                            { className: yn },
                            a().createElement(wn, {
                                mapId: D,
                                onMapClick: (u, t) => {
                                    p ||
                                        0 === A ||
                                        (r.updateIMSCursorPointId(0), r.updateIMSAnimatedPointId(s, me.Add), e(u, t));
                                },
                                onMapEnter: y,
                                onMapMove: y,
                                onMapOut: () => {
                                    r.updateIMSCursorPointId(0);
                                },
                                mouseEventsDisabled: !1,
                                showHandPointer: !p && 0 !== A && 0 !== s,
                            }),
                            a().createElement(
                                'div',
                                { className: g()(Sn, 0 === A && xn), style: fe(m.x, m.y) },
                                a().createElement(we, { pointId: A }),
                            ),
                            S((e, u) =>
                                a().createElement(
                                    Q.animated.div,
                                    {
                                        className: Sn,
                                        style: Object.assign({}, e, {
                                            top: u.locationStyle.top,
                                            left: u.locationStyle.left,
                                        }),
                                    },
                                    a().createElement(we, {
                                        pointId: u.pointId,
                                        onClick: b,
                                        onUpdateOverState: f,
                                        onUpdateOverCoordinates: w,
                                        mouseEventsDisabled: !1,
                                        isOver: l === u.pointId,
                                        isAnimated: 0 !== c,
                                    }),
                                ),
                            ),
                        );
                    }),
                    Pn = (0, K.Pi)(({ questionId: e }) => {
                        const u = Ie(),
                            t = u.model,
                            r = u.controls,
                            o = t.computes.answerSelectedVariants(),
                            i = t.question.get().type,
                            s = t.mapState.get(),
                            l = s.overPointId,
                            c = s.pointsInited,
                            E = t.mapPoints.get(),
                            d = i === ye.INTERACTIVE_MAP,
                            A = 0 === E.length && d,
                            m = E.length < 3;
                        (0, n.useEffect)(() => {
                            if (!d) return r.updateIMSPointsInited(!1), void r.resetIMS();
                            if (!c) {
                                r.resetIMS();
                                const e = [],
                                    u = [...le];
                                o.forEach((t) => {
                                    const n = JSON.parse(t);
                                    if (void 0 !== n.x && void 0 !== n.y) {
                                        const t = u.splice(0, 1)[0],
                                            a = {
                                                response: { x: n.x, y: n.y, comment: n.comment },
                                                locationStyle: fe(n.x, n.y),
                                                pointId: t,
                                            };
                                        e.push(a), r.updateIMSPointsInited(!0);
                                    } else c && r.updateIMSPointsInited(!1);
                                }),
                                    r.updateIMSPoints(e, u.length > 0 ? u[0] : 0);
                            }
                        }, [c, o, r, d]);
                        const _ = (u) => {
                                const t = u.map(({ response: e }) => e);
                                r.answerMapPointsQuestion(e, t);
                            },
                            F = (e) => {
                                const u = E.findIndex((u) => u.pointId === e),
                                    t = [...E];
                                t.splice(u, 1);
                                const n = t.map((e) => e.pointId),
                                    a = le.filter((e) => !n.includes(e));
                                r.updateIMSPoints(t, a.length > 0 ? a[0] : 0),
                                    l === e && r.updateIMSOverPointId(0),
                                    _(t),
                                    L(R.sounds.grey_butt());
                            };
                        z(G.n.ESCAPE, () => {
                            _(E);
                        });
                        const D = (0, Q.useTransition)(A, {
                            from: { opacity: 0 },
                            enter: { opacity: 1 },
                            leave: { opacity: 0 },
                            config: { duration: 300, easing: de },
                        });
                        return a().createElement(
                            'div',
                            { className: Cn },
                            a().createElement(Mn, {
                                onAddPoint: (e, u) => {
                                    if (!m) return;
                                    const t = [...E],
                                        n = E.map((e) => e.pointId),
                                        a = le.filter((e) => !n.includes(e)),
                                        o = a[0],
                                        i = {
                                            response: { x: e, y: u, comment: '' },
                                            locationStyle: fe(e, u),
                                            pointId: o,
                                        };
                                    t.push(i),
                                        r.updateIMSPoints(t, a.length > 1 ? a[1] : 0),
                                        _(t),
                                        L(R.sounds.highlight_red_butt());
                                },
                                onRemovePoint: F,
                            }),
                            a().createElement(
                                'div',
                                { className: Bn },
                                D(
                                    (e, u) =>
                                        u &&
                                        a().createElement(Q.animated.div, { style: e }, a().createElement(Dn, null)),
                                ),
                                !A &&
                                    a().createElement(
                                        'div',
                                        { className: gn },
                                        a().createElement(on, {
                                            onPointRemoved: F,
                                            onAnswerChange: (e, u) => {
                                                const t = r.updateIMSPointComment(e, u);
                                                _(t);
                                            },
                                        }),
                                    ),
                            ),
                        );
                    }),
                    In = (0, n.memo)(Pn),
                    On = {
                        base: 'OpenedQuestionContent_base_85',
                        base__small: 'OpenedQuestionContent_base__small_0b',
                        mapWrapper: 'OpenedQuestionContent_mapWrapper_34',
                        textWrapper: 'OpenedQuestionContent_textWrapper_76',
                        textAreaSize: 'OpenedQuestionContent_textAreaSize_96',
                        textAreaFont: 'OpenedQuestionContent_textAreaFont_8a',
                        imageBorder: 'OpenedQuestionContent_imageBorder_41',
                        image: 'OpenedQuestionContent_image_7d',
                    },
                    Tn = { styleName: 'full', rows: 24, symbols: 670, height: 418 },
                    Nn = { styleName: 'small', rows: 15, symbols: 420, height: 270 },
                    kn = (0, K.Pi)(({ questionId: e, imagePath: u, variants: t, selectedVariants: r }) => {
                        const o = Ie(),
                            i = o.model,
                            s = o.controls,
                            l = i.root.get().mapId,
                            c = i.question.get().type,
                            E = (0, n.useState)(Kt),
                            d = E[0],
                            A = E[1],
                            m = (0, n.useState)(Tn.height),
                            _ = m[0],
                            F = m[1],
                            D = _ < Tn.height ? Nn : Tn,
                            C = (0, n.useState)(!1),
                            B = C[0],
                            p = C[1],
                            h = (0, n.useState)(!1),
                            v = h[0],
                            b = h[1],
                            f = u
                                ? `R.images.gui.maps.icons.mapbox.survey.template.image.${u}`
                                : `R.images.gui.maps.icons.mapbox.survey.template.interactiveMap.c_${l}`,
                            w = ku(R.strings.mapbox.survey.template.opened.description(), { maxLength: D.symbols }),
                            y = (0, n.useCallback)((e) => {
                                F(e.currentTarget.height), b(!0);
                            }, []),
                            S = (0, n.useCallback)(() => {
                                b(!0);
                            }, []);
                        (0, n.useEffect)(() => {
                            c === ye.TEXT && v && (B || 0 !== t.length || (A(r.length > 0 ? r[0].trim() : Kt), p(!0)));
                        }, [c, r, t, v, B]);
                        const x = (0, n.useCallback)(
                            (u) => {
                                A(u), s.answerSimpleQuestion({ optionId: e, choices: [u] });
                            },
                            [e, s],
                        );
                        return (
                            j(() => {
                                s.answerSimpleQuestion({ optionId: e, choices: [d] });
                            }),
                            a().createElement(
                                'div',
                                {
                                    className: g()(On.base, On[`base__${D.styleName}`]),
                                    style: { '--iconHeight': `${_}rem` },
                                },
                                a().createElement(
                                    'div',
                                    { className: On.mapWrapper },
                                    !u && a().createElement('div', { className: On.imageBorder }),
                                    a().createElement('img', { className: On.image, src: f, onLoad: y, onError: S }),
                                ),
                                a().createElement(
                                    'div',
                                    { className: On.textWrapper },
                                    a().createElement(Jt, {
                                        sizeClassMix: On.textAreaSize,
                                        fontClassMix: On.textAreaFont,
                                        placeholder: w,
                                        onBlur: x,
                                        value: d,
                                        rows: D.rows,
                                        maxLength: D.symbols,
                                    }),
                                ),
                            )
                        );
                    }),
                    Ln = (0, n.memo)(kn),
                    Rn = 'MultipleChoiceQuestionContent_base_7e',
                    Hn = 'MultipleChoiceQuestionContent_buttons_65',
                    Un = 'MultipleChoiceQuestionContent_toggle_d3',
                    $n = (0, K.Pi)(({ questionId: e, pathPrefix: u, variants: t, selectedVariants: n }) => {
                        const r = Ie(),
                            o = r.model,
                            i = r.controls,
                            s = o.computes.isMultipleChoice(),
                            l = (u, t) => at(u, t, e, n, s, i.answerSimpleQuestion);
                        return a().createElement(
                            'div',
                            { className: Rn },
                            a().createElement(
                                'div',
                                { className: Hn },
                                t.map(
                                    (t, r) =>
                                        r < 15 &&
                                        a().createElement(
                                            'div',
                                            { className: Un, key: `mcq_${e}${t}` },
                                            a().createElement(dt, {
                                                pathPrefix: u,
                                                optionId: t,
                                                isActive: n.includes(t),
                                                size: ct.Large,
                                                onChange: l,
                                            }),
                                        ),
                                ),
                            ),
                        );
                    }),
                    Wn = (0, n.memo)($n),
                    Gn = ({
                        questionId: e,
                        type: u,
                        pathPrefix: t,
                        imagePath: n,
                        isSurveyFinish: r,
                        variants: o,
                        selectedVariants: i,
                    }) => {
                        if (r) return a().createElement(nt, null);
                        switch (u) {
                            case ye.IMAGE:
                                return a().createElement(Bt, {
                                    imagePath: n,
                                    questionId: e,
                                    pathPrefix: t,
                                    variants: o,
                                    selectedVariants: i,
                                });
                            case ye.VEHICLE:
                                return a().createElement(Pt, {
                                    questionId: e,
                                    pathPrefix: t,
                                    variants: o,
                                    selectedVariants: i,
                                });
                            case ye.TABLE:
                                return a().createElement(Ut, { questionId: e, pathPrefix: t });
                            case ye.INTERACTIVE_MAP:
                                return a().createElement(In, { questionId: e });
                            case ye.TEXT:
                                return a().createElement(Ln, {
                                    questionId: e,
                                    imagePath: n,
                                    variants: o,
                                    selectedVariants: i,
                                });
                            case ye.MULTIPLE_CHOICE:
                                return a().createElement(Wn, {
                                    questionId: e,
                                    pathPrefix: t,
                                    variants: o,
                                    selectedVariants: i,
                                });
                            default:
                                return console.error('Unknown survey type: ', u), null;
                        }
                    },
                    Vn = {
                        [ye.VEHICLE]: 'vehicle',
                        [ye.IMAGE]: 'image',
                        [ye.TABLE]: 'table',
                        [ye.INTERACTIVE_MAP]: 'map',
                        [ye.TEXT]: 'textarea',
                        [ye.MULTIPLE_CHOICE]: 'multipleChoice',
                        [ye.UNDEFINED]: 'empty',
                        [ye.ALTERNATIVE]: 'empty',
                    },
                    qn = R.strings.mapbox.survey,
                    zn = R.strings.settings.LANGUAGE_CODE(),
                    jn = (0, K.Pi)(
                        ({
                            questionId: e,
                            type: u,
                            pathPrefix: t,
                            imagePath: r,
                            titleParams: o,
                            isSurveyFinish: i,
                            variants: s,
                            selectedVariants: l,
                        }) => {
                            const c = Ie().model.root.get().surveyGroup,
                                E = qn.$dyn(c).question.$dyn(t),
                                d = '1' === e,
                                A = (0, n.useMemo)(() => {
                                    if (null !== E && o.length > 0) {
                                        const e = o.reduce(
                                            (e, u, t) => (u && (e[t > 0 ? `value${t}` : 'value'] = u), e),
                                            {},
                                        );
                                        return ku(E, e);
                                    }
                                    return null != E ? E : '';
                                }, [o, E]);
                            return a().createElement(
                                'div',
                                {
                                    className: g()(
                                        Ju.base,
                                        Ju[`base__${Vn[u]}`],
                                        d && Ju.base__first,
                                        i && Ju.base__finish,
                                    ),
                                },
                                a().createElement('div', { className: Ju.title, lang: zn }, A),
                                a().createElement(
                                    'div',
                                    { className: Ju.content, lang: zn },
                                    a().createElement(Gn, {
                                        questionId: e,
                                        type: u,
                                        imagePath: r,
                                        pathPrefix: t,
                                        isSurveyFinish: i,
                                        variants: s,
                                        selectedVariants: l,
                                    }),
                                ),
                            );
                        },
                    ),
                    Kn = 'App_base_dd',
                    Qn = 'App_container_d1',
                    Yn = 'App_bg_a7',
                    Xn = 'App_blackout_f2',
                    Zn = 'App_blackout__emptyMap_d1',
                    Jn = 'App_close_00',
                    ea = 'App_header_7d',
                    ua = 'App_survey_f5',
                    ta = 'App_content_bb',
                    na = 'App_footer_6c',
                    aa = 'App_footer__clickable_f0',
                    ra = (0, K.Pi)(() => {
                        const e = Ie(),
                            u = e.model,
                            t = e.controls,
                            r = u.root.get(),
                            i = r.mapId,
                            s = r.isSurveyFinish,
                            l = r.surveyGroup,
                            c = u.question.get(),
                            E = c.type,
                            d = c.questionId,
                            A = c.pathPrefix,
                            m = c.imagePath,
                            _ = u.computes.answerVariants(),
                            F = u.computes.answerSelectedVariants(),
                            D = u.scrollDirection.get(),
                            C = u.computes.titleParams();
                        j(t.close);
                        const B = (0, n.useState)(!1),
                            p = B[0],
                            h = B[1],
                            v = (function () {
                                const e = (0, n.useRef)(!1);
                                return !e.current && ((e.current = !0), !0);
                            })()
                                ? 500
                                : 0;
                        (0, n.useEffect)(() => {
                            t.updateQuestionsState(d, E);
                        }, [t, E, d]);
                        const b =
                                i && l.includes(se.OneMap)
                                    ? `img://gui/maps/icons/map/screen/${i}.dds`
                                    : 'R.images.gui.maps.icons.mapbox.bg',
                            f = {
                                questionId: d,
                                type: E,
                                pathPrefix: A,
                                imagePath: m,
                                titleParams: C,
                                isSurveyFinish: s,
                                variants: _,
                                selectedVariants: F,
                            },
                            w = (0, Q.useTransition)(f, {
                                keys: (e) => `${e.questionId}`,
                                from: { opacity: 0, translateX: o.O.view.remToPx(-25) * D },
                                enter: { opacity: 1, translateX: 0 },
                                leave: { opacity: 0, translateX: o.O.view.remToPx(25) * D },
                                trail: 300,
                                config: { duration: 200 },
                                delay: v,
                            });
                        return a().createElement(
                            'div',
                            { className: Kn },
                            a().createElement(
                                'div',
                                { className: Qn },
                                a().createElement('div', { className: Yn, style: { backgroundImage: `url(${b})` } }),
                                a().createElement('div', { className: g()(Xn, !i && Zn) }),
                                a().createElement('div', { className: ea }, a().createElement(Zu, null)),
                                a().createElement(
                                    'div',
                                    { className: Jn },
                                    a().createElement(W, {
                                        caption: R.strings.menu.viewHeader.closeBtn.label(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: V.Sy,
                                    }),
                                ),
                                w((e, u) =>
                                    a().createElement(
                                        Q.animated.div,
                                        { style: e, className: ua },
                                        a().createElement('div', { className: ta }, a().createElement(jn, u)),
                                    ),
                                ),
                                a().createElement(
                                    'div',
                                    {
                                        className: g()(na, p && aa),
                                        onAnimationEnd: () => {
                                            h(!0);
                                        },
                                    },
                                    a().createElement(qu, null),
                                ),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    k().render(
                        a().createElement(Pe, null, a().createElement(T, null, a().createElement(ra, null))),
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
                var a = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [u, t, n] = deferred[s], r = !0, o = 0; o < u.length; o++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[o]))
                            ? u.splice(o--, 1)
                            : ((r = !1), n < a && (a = n));
                    if (r) {
                        deferred.splice(s--, 1);
                        var i = t();
                        void 0 !== i && (e = i);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > n; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [u, t, n];
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
        (__webpack_require__.j = 612),
        (() => {
            var e = { 612: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        a,
                        [r, o, i] = t,
                        s = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (n in o) __webpack_require__.o(o, n) && (__webpack_require__.m[n] = o[n]);
                        if (i) var l = i(__webpack_require__);
                    }
                    for (u && u(t); s < r.length; s++)
                        (a = r[s]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [320], () => __webpack_require__(757));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
