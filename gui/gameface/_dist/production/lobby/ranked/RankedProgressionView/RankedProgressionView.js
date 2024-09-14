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
            532: (e) => {
                e.exports = {
                    BLACK_REAL: '#000000',
                    WHITE_REAL: '#FFFFFF',
                    WHITE: '#F2F2F7',
                    WHITE_ORANGE: '#FEFEEC',
                    WHITE_SPANISH: '#E9E2BF',
                    PAR: '#8C8C7E',
                    PAR_SECONDARY: '#595950',
                    PAR_TERTIARY: '#37362E',
                    INFO_RED: '#FF0000',
                    RED: '#FF2717',
                    RED_DARK: '#B70000',
                    YELLOW: '#FEAB34',
                    ORANGE: '#EE7000',
                    CREAM: '#FFDD99',
                    BROWN: '#CBAC77',
                    GREEN_BRIGHT: '#80D43A',
                    GREEN: '#7AB300',
                    GREEN_DARK: '#497212',
                    BLUE_BOOSTER: '#CCFFFF',
                    BLUE_TEAMKILLER: '#09E2FF',
                    CRED: '#CED9D9',
                    GOLD: '#FFC363',
                    BOND: '#C9C9B6',
                    PROM: '#A29B70',
                };
            },
            887: (e) => {
                e.exports = {
                    XS: '4rem',
                    SM: '8rem',
                    SMp: '10rem',
                    MD: '16rem',
                    MDp: '20rem',
                    LG: '32rem',
                    XL: '64rem',
                };
            },
            596: (e, u, t) => {
                'use strict';
                t.r(u),
                    t.d(u, {
                        events: () => n,
                        getMouseGlobalPosition: () => c,
                        getSize: () => l,
                        graphicsQuality: () => E,
                    });
                var n = {};
                t.r(n), t.d(n, { mouse: () => o, onResize: () => i });
                var r = t(472);
                function a(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                const i = (0, r.E)('clientResized'),
                    s = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') };
                const o = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && a(!1);
                    }
                    function t() {
                        e.enabled && a(!0);
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
                            : a(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const a = `mouse${u}`,
                                        i = s[u]((e) => t([e, 'outside']));
                                    function o(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, o),
                                        n(),
                                        () => {
                                            r &&
                                                (i(),
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
                    return Object.assign({}, r, {
                        disable() {
                            (e.enabled = !1), n();
                        },
                        enable() {
                            (e.enabled = !0), n();
                        },
                        enableOutside() {
                            e.enabled && a(!0);
                        },
                        disableOutside() {
                            e.enabled && a(!1);
                        },
                    });
                })();
                function l(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function c(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const E = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            472: (e, u, t) => {
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
            153: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => H });
                var n = {};
                t.r(n), t.d(n, { getBgUrl: () => s, getTextureUrl: () => i });
                var r = {};
                t.r(r),
                    t.d(r, {
                        addModelObserver: () => p,
                        addPreloadTexture: () => B,
                        children: () => n,
                        displayStatus: () => o,
                        displayStatusIs: () => N,
                        events: () => c,
                        extraSize: () => O,
                        forceTriggerMouseMove: () => P,
                        freezeTextureBeforeResize: () => w,
                        getBrowserTexturePath: () => C,
                        getDisplayStatus: () => L,
                        getScale: () => S,
                        getSize: () => v,
                        getViewGlobalPosition: () => b,
                        isEventHandled: () => y,
                        isFocused: () => k,
                        pxToRem: () => R,
                        remToPx: () => T,
                        resize: () => f,
                        sendEvent: () => D,
                        setAnimateWindow: () => x,
                        setEventHandled: () => M,
                        setInputPaddingsRem: () => g,
                        setSidePaddingsRem: () => h,
                        whenTutorialReady: () => I,
                    });
                var a = t(596);
                function i(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function s(e, u, t) {
                    return `url(${i(e, u, t)})`;
                }
                const o = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
                var l = t(472);
                const c = {
                        onTextureFrozen: (0, l.E)('self.onTextureFrozen'),
                        onTextureReady: (0, l.E)('self.onTextureReady'),
                        onDomBuilt: (0, l.E)('self.onDomBuilt'),
                        onLoaded: (0, l.E)('self.onLoaded'),
                        onDisplayChanged: (0, l.E)('self.onShowingStatusChanged'),
                        onFocusUpdated: (0, l.E)('self.onFocusChanged'),
                        children: {
                            onAdded: (0, l.E)('children.onAdded'),
                            onLoaded: (0, l.E)('children.onLoaded'),
                            onRemoved: (0, l.E)('children.onRemoved'),
                            onAttached: (0, l.E)('children.onAttached'),
                            onTextureReady: (0, l.E)('children.onTextureReady'),
                            onRequestPosition: (0, l.E)('children.requestPosition'),
                        },
                    },
                    E = ['args'];
                const d = 2,
                    _ = 16,
                    m = 32,
                    A = 64,
                    F = (e, u) => {
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
                                })(u, E);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((n = r),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, a));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    D = {
                        close(e) {
                            F('popover' === e ? d : m);
                        },
                        minimize() {
                            F(A);
                        },
                        move(e) {
                            F(_, { isMouseEvent: !0, on: e });
                        },
                    };
                function B(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function g(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function C(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function p(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function h(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function v(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function f(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function b(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: T(u.x), y: T(u.y) };
                }
                function w() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function S() {
                    return viewEnv.getScale();
                }
                function R(e) {
                    return viewEnv.pxToRem(e);
                }
                function T(e) {
                    return viewEnv.remToPx(e);
                }
                function x(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function k() {
                    return viewEnv.isFocused();
                }
                function M() {
                    return viewEnv.setEventHandled();
                }
                function y() {
                    return viewEnv.isEventHandled();
                }
                function P() {
                    viewEnv.forceTriggerMouseMove();
                }
                function L() {
                    return viewEnv.getShowingStatus();
                }
                const N = Object.keys(o).reduce((e, u) => ((e[u] = () => viewEnv.getShowingStatus() === o[u]), e), {}),
                    O = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    I = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : c.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    H = { view: r, client: a };
            },
            521: (e, u, t) => {
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
                    })(r || (r = {}));
            },
            358: (e, u, t) => {
                'use strict';
                t.d(u, { Z: () => a });
                var n = t(153);
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
                t.d(u, { kH: () => d, B3: () => l, Z5: () => i, lf: () => E, cy: () => s, B0: () => o, ry: () => B });
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
                var a = t(358);
                const i = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    s = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    };
                let o;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(o || (o = {}));
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = t(521),
                    m = t(153);
                const A = ['args'];
                function F(e, u, t, n, r, a, i) {
                    try {
                        var s = e[a](i),
                            o = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(o) : Promise.resolve(o).then(n, r);
                }
                const D = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    B = (function () {
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
                                        function i(e) {
                                            F(a, n, r, i, s, 'next', e);
                                        }
                                        function s(e) {
                                            F(a, n, r, i, s, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    g = (e, u) => {
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
                                })(u, A);
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
                    C = () => g(o.CLOSE),
                    p = (e, u) => {
                        e.keyCode === _.n.ESCAPE && u();
                    };
                var h = t(572);
                const v = r.instance,
                    f = {
                        DataTracker: a.Z,
                        ViewModel: h.Z,
                        ViewEventType: o,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: E,
                        DateFormatType: d,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (e) => g(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: () => g(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            g(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, r = R.invalid('resId'), a) => {
                            const i = m.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                l = s.x,
                                c = s.y,
                                E = s.width,
                                d = s.height,
                                _ = {
                                    x: m.O.view.pxToRem(l) + i.x,
                                    y: m.O.view.pxToRem(c) + i.y,
                                    width: m.O.view.pxToRem(E),
                                    height: m.O.view.pxToRem(d),
                                };
                            g(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: D(_),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => p(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            p(e, C);
                        },
                        handleViewEvent: g,
                        onBindingsReady: B,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
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
                        ClickOutsideManager: v,
                        SystemLocale: i,
                        UserLocale: s,
                    };
                window.ViewEnvHelper = f;
            },
            931: (e, u, t) => {
                'use strict';
                var n = {};
                t.r(n),
                    t.d(n, {
                        Area: () => $t,
                        Bar: () => Ut,
                        DefaultScroll: () => Gt,
                        Direction: () => ft,
                        defaultSettings: () => bt,
                        useHorizontalScrollApi: () => St,
                    });
                var r = {};
                t.r(r), t.d(r, { Area: () => on, Bar: () => rn, Default: () => sn, useVerticalScrollApi: () => zt });
                var a = t(179),
                    i = t.n(a);
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
                var o = t(153);
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
                const d = o.O.client.getSize('rem'),
                    _ = d.width,
                    m = d.height,
                    A = Object.assign({ width: _, height: m }, E(_, m, l)),
                    F = (0, a.createContext)(A),
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
                        i = n.large,
                        o = n.medium,
                        l = n.small,
                        c = n.extraSmall,
                        E = n.extraLargeWidth,
                        d = n.largeWidth,
                        _ = n.mediumWidth,
                        m = n.smallWidth,
                        A = n.extraSmallWidth,
                        B = n.extraLargeHeight,
                        g = n.largeHeight,
                        C = n.mediumHeight,
                        p = n.smallHeight,
                        h = n.extraSmallHeight,
                        v = { extraLarge: B, large: g, medium: C, small: p, extraSmall: h };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && r) return u;
                        if (t.large && i) return u;
                        if (t.medium && o) return u;
                        if (t.small && l) return u;
                        if (t.extraSmall && c) return u;
                    } else {
                        if (t.extraLargeWidth && E) return s(u, t, v);
                        if (t.largeWidth && d) return s(u, t, v);
                        if (t.mediumWidth && _) return s(u, t, v);
                        if (t.smallWidth && m) return s(u, t, v);
                        if (t.extraSmallWidth && A) return s(u, t, v);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && B) return u;
                            if (t.largeHeight && g) return u;
                            if (t.mediumHeight && C) return u;
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
                const g = (e) => {
                        const u = (0, a.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    C = (0, a.memo)(({ children: e }) => {
                        const u = (0, a.useContext)(F),
                            t = (0, a.useState)(u),
                            n = t[0],
                            r = t[1],
                            s = (0, a.useCallback)((e, u) => {
                                const t = o.O.view.pxToRem(e),
                                    n = o.O.view.pxToRem(u);
                                r(Object.assign({ width: t, height: n }, E(t, n, l)));
                            }, []);
                        g(() => {
                            engine.on('clientResized', s);
                        }),
                            (0, a.useEffect)(() => () => engine.off('clientResized', s), [s]);
                        const c = (0, a.useMemo)(() => Object.assign({}, n), [n]);
                        return i().createElement(F.Provider, { value: c }, e);
                    });
                var p = t(483),
                    h = t.n(p),
                    v = t(926),
                    f = t.n(v);
                let b, w, S;
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
                    })(S || (S = {}));
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
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return S.ExtraLarge;
                                    case e.largeHeight:
                                        return S.Large;
                                    case e.mediumHeight:
                                        return S.Medium;
                                    case e.smallHeight:
                                        return S.Small;
                                    case e.extraSmallHeight:
                                        return S.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), S.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: n, mediaWidth: r, mediaHeight: i, remScreenWidth: u, remScreenHeight: t };
                    },
                    x = ['children', 'className'];
                function k() {
                    return (
                        (k =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        k.apply(this, arguments)
                    );
                }
                const M = {
                        [w.ExtraSmall]: '',
                        [w.Small]: f().SMALL_WIDTH,
                        [w.Medium]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH}`,
                        [w.Large]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH} ${f().LARGE_WIDTH}`,
                        [w.ExtraLarge]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH} ${f().LARGE_WIDTH} ${f().EXTRA_LARGE_WIDTH}`,
                    },
                    y = {
                        [S.ExtraSmall]: '',
                        [S.Small]: f().SMALL_HEIGHT,
                        [S.Medium]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT}`,
                        [S.Large]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT} ${f().LARGE_HEIGHT}`,
                        [S.ExtraLarge]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT} ${f().LARGE_HEIGHT} ${f().EXTRA_LARGE_HEIGHT}`,
                    },
                    P = {
                        [b.ExtraSmall]: '',
                        [b.Small]: f().SMALL,
                        [b.Medium]: `${f().SMALL} ${f().MEDIUM}`,
                        [b.Large]: `${f().SMALL} ${f().MEDIUM} ${f().LARGE}`,
                        [b.ExtraLarge]: `${f().SMALL} ${f().MEDIUM} ${f().LARGE} ${f().EXTRA_LARGE}`,
                    },
                    L = (e) => {
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
                            })(e, x);
                        const r = T(),
                            a = r.mediaWidth,
                            s = r.mediaHeight,
                            o = r.mediaSize;
                        return i().createElement('div', k({ className: h()(t, M[a], y[s], P[o]) }, n), u);
                    },
                    N = ['children'];
                const O = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, N);
                    return i().createElement(C, null, i().createElement(L, t, u));
                };
                var I = t(493),
                    H = t.n(I);
                function U(e) {
                    engine.call('PlaySound', e);
                }
                const W = {
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
                    G = [
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
                class z extends i().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && U(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && U(this.props.soundClick);
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
                            o = e.onMouseEnter,
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
                                })(e, G)),
                            _ = h()(W.base, W[`base__${a}`], W[`base__${r}`], null == s ? void 0 : s.base),
                            m = h()(W.icon, W[`icon__${a}`], W[`icon__${r}`], null == s ? void 0 : s.icon),
                            A = h()(W.glow, null == s ? void 0 : s.glow),
                            F = h()(W.caption, W[`caption__${a}`], null == s ? void 0 : s.caption),
                            D = h()(W.goto, null == s ? void 0 : s.goto);
                        return i().createElement(
                            'div',
                            $(
                                {
                                    className: _,
                                    onMouseEnter: this._onMouseEnter(o),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(E),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                d,
                            ),
                            'info' !== a && i().createElement('div', { className: W.shine }),
                            i().createElement('div', { className: m }, i().createElement('div', { className: A })),
                            i().createElement('div', { className: F }, u),
                            n && i().createElement('div', { className: D }, n),
                        );
                    }
                }
                let X;
                (z.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' }),
                    (function (e) {
                        (e[(e.Progression = 0)] = 'Progression'), (e[(e.Final = 1)] = 'Final');
                    })(X || (X = {}));
                var j = t(403),
                    Y = t(521),
                    V = t(364);
                const q = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function K(e = Y.n.NONE, u = q, t = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== Y.n.NONE)
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
                const Q = 'page_about_34',
                    Z = 'page_close_fe',
                    J = ({ onClose: e, className: u }) => {
                        var t;
                        return (
                            (t = e),
                            K(Y.n.ESCAPE, t),
                            i().createElement(
                                'div',
                                { className: h()(Z, u) },
                                i().createElement(z, {
                                    caption: R.strings.ranked_battles.rankedBattlePage.closeBtn(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: e,
                                }),
                            )
                        );
                    };
                function ee() {}
                function ue() {
                    return !1;
                }
                console.log;
                var te = t(174);
                function ne(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return re(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return re(e, u);
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
                function re(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const ae = (e) => (0 === e ? window : window.subViews.get(e));
                const ie = ((e, u) => {
                        const t = (0, a.createContext)({});
                        return [
                            function ({ mode: n = 'real', options: r, children: s, mocks: l }) {
                                const c = (0, a.useRef)([]),
                                    E = (t, n, r) => {
                                        var a;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: u = 0,
                                                getRoot: t = ae,
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
                                                const i = (e) => {
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
                                                            l = o.O.view.addModelObserver(s, u, !0);
                                                        return r.set(l, t), e && t(i(a)), l;
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
                                                        for (var e, t = ne(r.keys()); !(e = t()).done; ) a(e.value, u);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(n),
                                            s =
                                                'real' === t
                                                    ? i
                                                    : Object.assign({}, i, {
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
                                                            r = te.LO.box(n, { equals: ue });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, te.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    object: (e, u) => {
                                                        const n = null != u ? u : l(e),
                                                            r = te.LO.box(n, { equals: ue });
                                                        return (
                                                            'real' === t &&
                                                                s.subscribe(
                                                                    (0, te.aD)((e) => r.set(e)),
                                                                    e,
                                                                ),
                                                            r
                                                        );
                                                    },
                                                    primitives: (e, u) => {
                                                        const n = l(u);
                                                        if (Array.isArray(e)) {
                                                            const r = e.reduce(
                                                                (e, u) => ((e[u] = te.LO.box(n[u], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === t &&
                                                                    s.subscribe(
                                                                        (0, te.aD)((u) => {
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
                                                                i = a.reduce(
                                                                    (e, [u, t]) => ((e[t] = te.LO.box(n[u], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === t &&
                                                                    s.subscribe(
                                                                        (0, te.aD)((e) => {
                                                                            a.forEach(([u, t]) => {
                                                                                i[t].set(e[u]);
                                                                            });
                                                                        }),
                                                                        u,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: E,
                                            }),
                                            _ = { mode: t, model: d, externalModel: s, cleanup: E };
                                        return {
                                            model: d,
                                            controls: 'mocks' === t && r ? r.controls(_) : u(_),
                                            externalModel: s,
                                            mode: t,
                                        };
                                    },
                                    d = (0, a.useRef)(!1),
                                    _ = (0, a.useState)(n),
                                    m = _[0],
                                    A = _[1],
                                    F = (0, a.useState)(() => E(n, r, l)),
                                    D = F[0],
                                    B = F[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        d.current ? B(E(m, r, l)) : (d.current = !0);
                                    }, [l, m, r]),
                                    (0, a.useEffect)(() => {
                                        A(n);
                                    }, [n]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            D.externalModel.dispose(), c.current.forEach((e) => e());
                                        },
                                        [D],
                                    ),
                                    i().createElement(t.Provider, { value: D }, s)
                                );
                            },
                            () => (0, a.useContext)(t),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const u = {
                                root: e.object(),
                                statistics: e.object('statistics'),
                                statisticsByDivision: e.array('statistics.efficiencyByDivision'),
                                divisions: e.array('divisions.items'),
                            };
                            return Object.assign({}, u, { computes: {} });
                        },
                        ({ externalModel: e }) => ({
                            onClose: e.createCallbackNoArgs('onClose'),
                            onAbout: e.createCallbackNoArgs('onAbout'),
                            onSelectDivision: e.createCallback((e) => ({ divisionID: e }), 'onSelectDivision'),
                        }),
                    ),
                    se = ie[0],
                    oe = ie[1],
                    le = {
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
                let ce, Ee;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(ce || (ce = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(Ee || (Ee = {}));
                const de = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: n,
                    disabled: r,
                    mixClass: s,
                    soundHover: o,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: E,
                    onMouseDown: d,
                    onMouseUp: _,
                    onMouseLeave: m,
                    onClick: A,
                }) => {
                    const F = (0, a.useRef)(null),
                        D = (0, a.useState)(t),
                        B = D[0],
                        g = D[1],
                        C = (0, a.useState)(!1),
                        p = C[0],
                        v = C[1],
                        f = (0, a.useState)(!1),
                        b = f[0],
                        w = f[1],
                        S = (0, a.useCallback)(() => {
                            r || (F.current && (F.current.focus(), g(!0)));
                        }, [r]),
                        T = (0, a.useCallback)(
                            (e) => {
                                B && null !== F.current && !F.current.contains(e.target) && g(!1);
                            },
                            [B],
                        ),
                        x = (0, a.useCallback)(
                            (e) => {
                                r || (A && A(e));
                            },
                            [r, A],
                        ),
                        k = (0, a.useCallback)(
                            (e) => {
                                r || (null !== o && U(o), c && c(e), w(!0));
                            },
                            [r, o, c],
                        ),
                        M = (0, a.useCallback)(
                            (e) => {
                                E && E(e);
                            },
                            [E],
                        ),
                        y = (0, a.useCallback)(
                            (e) => {
                                r || (_ && _(e), v(!1));
                            },
                            [r, _],
                        ),
                        P = (0, a.useCallback)(
                            (e) => {
                                r || (null !== l && U(l), d && d(e), t && S(), v(!0));
                            },
                            [r, l, d, S, t],
                        ),
                        L = (0, a.useCallback)(
                            (e) => {
                                r || (m && m(e), v(!1));
                            },
                            [r, m],
                        ),
                        N = h()(
                            le.base,
                            le[`base__${n}`],
                            {
                                [le.base__disabled]: r,
                                [le[`base__${u}`]]: u,
                                [le.base__focus]: B,
                                [le.base__highlightActive]: p,
                                [le.base__firstHover]: b,
                            },
                            s,
                        ),
                        O = h()(le.state, le.state__default);
                    return (
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mousedown', T),
                                () => {
                                    document.removeEventListener('mousedown', T);
                                }
                            ),
                            [T],
                        ),
                        (0, a.useEffect)(() => {
                            g(t);
                        }, [t]),
                        i().createElement(
                            'div',
                            {
                                ref: F,
                                className: N,
                                onMouseEnter: k,
                                onMouseMove: M,
                                onMouseUp: y,
                                onMouseDown: P,
                                onMouseLeave: L,
                                onClick: x,
                            },
                            n !== ce.ghost &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement('div', { className: le.back }),
                                    i().createElement('span', { className: le.texture }),
                                ),
                            i().createElement(
                                'span',
                                { className: O },
                                i().createElement('span', { className: le.stateDisabled }),
                                i().createElement('span', { className: le.stateHighlightHover }),
                                i().createElement('span', { className: le.stateHighlightActive }),
                            ),
                            i().createElement(
                                'span',
                                { className: le.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                de.defaultProps = { type: ce.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const _e = (0, a.memo)(de);
                var me = t(887),
                    Ae = t.n(me);
                const Fe = ['xl', 'lg', 'md', 'sm', 'xs'],
                    De = (e) => e.includes('_') && ((e) => Fe.includes(e))(e.split('_').at(-1)),
                    Be = [b.ExtraLarge, b.Large, b.Medium, b.Small, b.ExtraSmall],
                    ge = (e, u) =>
                        Object.keys(e).reduce((t, n) => {
                            if (n in t) return t;
                            if (De(n)) {
                                const r = n.split('_').slice(0, -1).join('_');
                                if (r in t) return t;
                                const a = Be.indexOf(u),
                                    i = (-1 !== a ? Fe.slice(a) : [])
                                        .map((e) => r + '_' + e)
                                        .find((u) => void 0 !== e[u]),
                                    s = i ? e[i] : void 0;
                                return (t[r] = void 0 !== s ? s : e[r]), t;
                            }
                            const r = e[n];
                            return (
                                void 0 === r ||
                                    ((e, u) => Fe.some((t) => void 0 !== u[`${e}_${t}`]))(n, e) ||
                                    (t[n] = r),
                                t
                            );
                        }, {}),
                    Ce = (e, u = ge) => {
                        const t = (
                            (e, u = ge) =>
                            (t) => {
                                const n = T().mediaSize,
                                    r = (0, a.useMemo)(() => u(t, n), [t, n]);
                                return i().createElement(e, r);
                            }
                        )(e, u);
                        return i().memo((u) =>
                            Object.keys(u).some((e) => De(e) && void 0 !== u[e])
                                ? i().createElement(t, u)
                                : i().createElement(e, u),
                        );
                    },
                    pe = {
                        mt__XS: 'Box_mt__XS_0c',
                        mt__SM: 'Box_mt__SM_eb',
                        mt__SMp: 'Box_mt__SMp_cf',
                        mt__MD: 'Box_mt__MD_25',
                        mt__MDp: 'Box_mt__MDp_49',
                        mt__LG: 'Box_mt__LG_e8',
                        mt__XL: 'Box_mt__XL_83',
                        mr__XS: 'Box_mr__XS_7c',
                        mr__SM: 'Box_mr__SM_08',
                        mr__SMp: 'Box_mr__SMp_06',
                        mr__MD: 'Box_mr__MD_4a',
                        mr__MDp: 'Box_mr__MDp_b6',
                        mr__LG: 'Box_mr__LG_d0',
                        mr__XL: 'Box_mr__XL_db',
                        mb__XS: 'Box_mb__XS_bb',
                        mb__SM: 'Box_mb__SM_83',
                        mb__SMp: 'Box_mb__SMp_04',
                        mb__MD: 'Box_mb__MD_ed',
                        mb__MDp: 'Box_mb__MDp_65',
                        mb__LG: 'Box_mb__LG_c8',
                        mb__XL: 'Box_mb__XL_f8',
                        ml__XS: 'Box_ml__XS_8a',
                        ml__SM: 'Box_ml__SM_e6',
                        ml__SMp: 'Box_ml__SMp_fb',
                        ml__MD: 'Box_ml__MD_2b',
                        ml__MDp: 'Box_ml__MDp_c7',
                        ml__LG: 'Box_ml__LG_39',
                        ml__XL: 'Box_ml__XL_4a',
                    },
                    he = [
                        'className',
                        'width',
                        'height',
                        'm',
                        'mt',
                        'mr',
                        'mb',
                        'ml',
                        'column',
                        'row',
                        'flexDirection',
                        'flexStart',
                        'center',
                        'flexEnd',
                        'spaceBetween',
                        'spaceAround',
                        'justifyContent',
                        'alignItems',
                        'alignSelf',
                        'wrap',
                        'flexWrap',
                        'grow',
                        'shrink',
                        'flex',
                        'style',
                        'children',
                    ];
                function ve() {
                    return (
                        (ve =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ve.apply(this, arguments)
                    );
                }
                Object.keys(Ae());
                const fe = {
                        XL: { mt: pe.mt__XL, mr: pe.mr__XL, mb: pe.mb__XL, ml: pe.ml__XL },
                        LG: { mt: pe.mt__LG, mr: pe.mr__LG, mb: pe.mb__LG, ml: pe.ml__LG },
                        MDp: { mt: pe.mt__MDp, mr: pe.mr__MDp, mb: pe.mb__MDp, ml: pe.ml__MDp },
                        MD: { mt: pe.mt__MD, mr: pe.mr__MD, mb: pe.mb__MD, ml: pe.ml__MD },
                        SMp: { mt: pe.mt__SMp, mr: pe.mr__SMp, mb: pe.mb__SMp, ml: pe.ml__SMp },
                        SM: { mt: pe.mt__SM, mr: pe.mr__SM, mb: pe.mb__SM, ml: pe.ml__SM },
                        XS: { mt: pe.mt__XS, mr: pe.mr__XS, mb: pe.mb__XS, ml: pe.ml__XS },
                    },
                    be = (Object.keys(fe), ['mt', 'mr', 'mb', 'ml']),
                    we = { mt: 'marginTop', mr: 'marginRight', mb: 'marginBottom', ml: 'marginLeft' },
                    Se = Ce((e) => {
                        let u = e.className,
                            t = e.width,
                            n = e.height,
                            r = e.m,
                            s = e.mt,
                            o = void 0 === s ? r : s,
                            l = e.mr,
                            c = void 0 === l ? r : l,
                            E = e.mb,
                            d = void 0 === E ? r : E,
                            _ = e.ml,
                            m = void 0 === _ ? r : _,
                            A = e.column,
                            F = e.row,
                            D = e.flexDirection,
                            B = void 0 === D ? (A ? 'column' : F && 'row') || void 0 : D,
                            g = e.flexStart,
                            C = e.center,
                            p = e.flexEnd,
                            v = e.spaceBetween,
                            f = e.spaceAround,
                            b = e.justifyContent,
                            w =
                                void 0 === b
                                    ? (g ? 'flex-start' : C && 'center') ||
                                      (p && 'flex-end') ||
                                      (v && 'space-between') ||
                                      (f && 'space-around') ||
                                      void 0
                                    : b,
                            S = e.alignItems,
                            R = void 0 === S ? (g ? 'flex-start' : C && 'center') || (p && 'flex-end') || void 0 : S,
                            T = e.alignSelf,
                            x = e.wrap,
                            k = e.flexWrap,
                            M = void 0 === k ? (x ? 'wrap' : void 0) : k,
                            y = e.grow,
                            P = e.shrink,
                            L = e.flex,
                            N = void 0 === L ? (y || P ? `${y ? 1 : 0} ${P ? 1 : 0} auto` : void 0) : L,
                            O = e.style,
                            I = e.children,
                            H = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, he);
                        const U = (0, a.useMemo)(() => {
                                const e = { mt: o, mr: c, mb: d, ml: m },
                                    u = ((e) =>
                                        be.reduce((u, t) => {
                                            const n = e[t];
                                            return n && 'number' != typeof n ? u.concat(fe[!0 === n ? 'MD' : n][t]) : u;
                                        }, []))(e),
                                    r = ((e) =>
                                        be.reduce((u, t) => {
                                            const n = e[t];
                                            return 'number' == typeof n && (u[we[t]] = n + 'rem'), u;
                                        }, {}))(e);
                                return {
                                    computedStyle: Object.assign({}, O, r, {
                                        width: void 0 !== t && 'number' == typeof t ? t + 'rem' : t,
                                        height: void 0 !== n && 'number' == typeof n ? n + 'rem' : n,
                                        flex: N,
                                        alignSelf: T,
                                        display: B || R ? 'flex' : void 0,
                                        flexDirection: B,
                                        flexWrap: M,
                                        justifyContent: w,
                                        alignItems: R,
                                    }),
                                    computedClassNames: u,
                                };
                            }, [t, n, o, c, d, m, O, N, T, B, M, w, R]),
                            W = U.computedStyle,
                            G = U.computedClassNames;
                        return i().createElement('div', ve({ className: h()(pe.base, ...G, u), style: W }, H), I);
                    });
                let Re;
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(Re || (Re = {}));
                const Te = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    xe = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    ke = (e, u, t = Re.left) => e.split(u).reduce(t === Re.left ? Te : xe, []),
                    Me = (() => {
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
                    ye = ['zh_cn', 'zh_sg', 'zh_tw'],
                    Pe = (e, u = Re.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return ye.includes(t)
                            ? Me(e)
                            : ((e, u = Re.left) => {
                                  let t = [];
                                  const n =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      r = e.replace(/&nbsp;/g, ' ');
                                  return ke(r, /( )/, u).forEach((e) => (t = t.concat(ke(e, n, Re.left)))), t;
                              })(e, u);
                    },
                    Le = 'FormatText_base_d0',
                    Ne = ({ binding: e, text: u = '', classMix: t, alignment: n = Re.left }) =>
                        null === u
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : i().createElement(
                                  a.Fragment,
                                  null,
                                  u.split('\n').map((u, r) =>
                                      i().createElement(
                                          'div',
                                          { className: h()(Le, t), key: `${u}-${r}` },
                                          ((e, u, t) =>
                                              e
                                                  .split(/%\((.*?)\)(?:[sd])?/g)
                                                  .map((e) => (t && e in t ? t[e] : Pe(e, u))))(u, n, e).map((e, u) =>
                                              i().createElement(a.Fragment, { key: `${u}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              );
                var Oe = t(532),
                    Ie = t.n(Oe);
                const He = {
                        'paragraph-P10': 'Text_paragraph-P10_2c',
                        'paragraph-P12': 'Text_paragraph-P12_22',
                        'paragraph-P14': 'Text_paragraph-P14_a7',
                        'paragraph-P16': 'Text_paragraph-P16_90',
                        'paragraph-P18': 'Text_paragraph-P18_50',
                        'paragraph-P24': 'Text_paragraph-P24_33',
                        'heading-H14': 'Text_heading-H14_8b',
                        'heading-H15': 'Text_heading-H15_9e',
                        'heading-H18': 'Text_heading-H18_b7',
                        'heading-H20R': 'Text_heading-H20R_f6',
                        'heading-H22': 'Text_heading-H22_27',
                        'heading-H24R': 'Text_heading-H24R_be',
                        'heading-H24': 'Text_heading-H24_0c',
                        'heading-H28': 'Text_heading-H28_78',
                        'heading-H36': 'Text_heading-H36_32',
                        'heading-H56': 'Text_heading-H56_c3',
                        'heading-H73': 'Text_heading-H73_8f',
                        'heading-H144': 'Text_heading-H144_a9',
                        BLACK_REAL: 'Text_BLACK_REAL_30',
                        WHITE_REAL: 'Text_WHITE_REAL_bc',
                        WHITE: 'Text_WHITE_62',
                        WHITE_ORANGE: 'Text_WHITE_ORANGE_54',
                        WHITE_SPANISH: 'Text_WHITE_SPANISH_df',
                        PAR: 'Text_PAR_15',
                        PAR_SECONDARY: 'Text_PAR_SECONDARY_5d',
                        PAR_TERTIARY: 'Text_PAR_TERTIARY_c9',
                        INFO_RED: 'Text_INFO_RED_30',
                        RED: 'Text_RED_66',
                        RED_DARK: 'Text_RED_DARK_d8',
                        YELLOW: 'Text_YELLOW_ed',
                        ORANGE: 'Text_ORANGE_be',
                        CREAM: 'Text_CREAM_57',
                        BROWN: 'Text_BROWN_18',
                        GREEN_BRIGHT: 'Text_GREEN_BRIGHT_3f',
                        GREEN: 'Text_GREEN_e3',
                        GREEN_DARK: 'Text_GREEN_DARK_f1',
                        BLUE_BOOSTER: 'Text_BLUE_BOOSTER_21',
                        BLUE_TEAMKILLER: 'Text_BLUE_TEAMKILLER_ab',
                        CRED: 'Text_CRED_f7',
                        GOLD: 'Text_GOLD_28',
                        BOND: 'Text_BOND_be',
                        PROM: 'Text_PROM_65',
                    },
                    Ue = ['text', 'variant', 'className', 'color', 'm', 'mt', 'mr', 'mb', 'ml', 'style', 'format'];
                function We() {
                    return (
                        (We =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        We.apply(this, arguments)
                    );
                }
                Object.keys(Ae());
                const Ge = Object.keys(Ie()),
                    $e = { mt: 'MD', mr: 'SM', mb: 'SM', ml: 'SM' },
                    ze = { mt: 'SM', mr: 'XS', mb: 'XS', ml: 'XS' },
                    Xe = { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    je = {
                        XL: { mt: 'XL', mr: 'XL', mb: 'XL', ml: 'XL' },
                        LG: { mt: 'LG', mr: 'LG', mb: 'LG', ml: 'LG' },
                        MDp: { mt: 'MDp', mr: 'MDp', mb: 'MDp', ml: 'MDp' },
                        MD: { mt: 'MD', mr: 'MD', mb: 'MD', ml: 'MD' },
                        SMp: { mt: 'SMp', mr: 'SMp', mb: 'SMp', ml: 'SMp' },
                        SM: { mt: 'SM', mr: 'SM', mb: 'SM', ml: 'SM' },
                        XS: { mt: 'XS', mr: 'XS', mb: 'XS', ml: 'XS' },
                    },
                    Ye =
                        (Object.keys(je),
                        {
                            'heading-H144': { mt: 'XL', mr: 'LG', mb: 'LG', ml: 'LG' },
                            'heading-H73': { mt: 'LG', mr: 'MD', mb: 'MD', ml: 'MD' },
                            'heading-H56': $e,
                            'heading-H36': $e,
                            'heading-H28': ze,
                            'heading-H24': ze,
                            'heading-H24R': ze,
                            'heading-H22': ze,
                            'heading-H20R': ze,
                            'heading-H18': ze,
                            'heading-H15': Xe,
                            'heading-H14': Xe,
                            'paragraph-P24': ze,
                            'paragraph-P18': ze,
                            'paragraph-P16': ze,
                            'paragraph-P14': Xe,
                            'paragraph-P12': Xe,
                            'paragraph-P10': Xe,
                        }),
                    Ve =
                        (Object.keys(Ye),
                        (e) =>
                            e
                                ? ((e) => Ge.includes(e))(e)
                                    ? { colorClassName: He[e] }
                                    : { colorStyle: { color: e } }
                                : {}),
                    qe = Ce((e) => {
                        let u = e.text,
                            t = e.variant,
                            n = e.className,
                            r = e.color,
                            s = e.m,
                            o = e.mt,
                            l = void 0 === o ? s : o,
                            c = e.mr,
                            E = void 0 === c ? s : c,
                            d = e.mb,
                            _ = void 0 === d ? s : d,
                            m = e.ml,
                            A = void 0 === m ? s : m,
                            F = e.style,
                            D = e.format,
                            B = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, Ue);
                        const g = (0, a.useMemo)(() => {
                                const e = Ve(r),
                                    u = e.colorClassName,
                                    t = e.colorStyle,
                                    n = void 0 === t ? {} : t;
                                return { computedStyle: Object.assign({}, F, n), colorClassName: u };
                            }, [F, r]),
                            C = g.computedStyle,
                            p = g.colorClassName;
                        return i().createElement(
                            Se,
                            We(
                                {
                                    className: h()(He.base, t && He[t], p, n),
                                    style: C,
                                    mt: !0 === l ? Ye[t || 'paragraph-P16'].mt : l,
                                    mr: !0 === E ? Ye[t || 'paragraph-P16'].mr : E,
                                    mb: !0 === _ ? Ye[t || 'paragraph-P16'].mb : _,
                                    ml: !0 === A ? Ye[t || 'paragraph-P16'].ml : A,
                                },
                                B,
                            ),
                            void 0 !== D ? i().createElement(Ne, We({}, D, { text: u })) : u,
                        );
                    }),
                    Ke = [
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
                function Qe(e) {
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
                const Ze = (e, u, t = {}, n = 0) => {
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
                    Je = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            n = e.args,
                            r = e.onMouseEnter,
                            i = e.onMouseLeave,
                            s = e.onMouseDown,
                            o = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            E = e.ignoreMouseClick,
                            d = void 0 !== E && E,
                            _ = e.decoratorId,
                            m = void 0 === _ ? 0 : _,
                            A = e.isEnabled,
                            F = void 0 === A || A,
                            D = e.targetId,
                            B = void 0 === D ? 0 : D,
                            g = e.onShow,
                            C = e.onHide,
                            p = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, Ke);
                        const h = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, a.useMemo)(
                                () =>
                                    B ||
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
                                [B],
                            ),
                            f = (0, a.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (Ze(t, m, { isMouseEvent: !0, on: !0, arguments: Qe(n) }, v),
                                    g && g(),
                                    (h.current.isVisible = !0));
                            }, [t, m, n, v, g]),
                            b = (0, a.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const e = h.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (h.current.timeoutId = 0)),
                                        Ze(t, m, { on: !1 }, v),
                                        h.current.isVisible && C && C(),
                                        (h.current.isVisible = !1);
                                }
                            }, [t, m, v, C]),
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
                                              ((S = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((h.current.timeoutId = window.setTimeout(f, c ? 100 : 400)),
                                                      r && r(e),
                                                      S && S(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              b(), null == i || i(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === d && b(), null == o || o(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === d && b(), null == s || s(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      p,
                                  ),
                              )
                            : u;
                        var S;
                    },
                    eu = ['children'];
                function uu() {
                    return (
                        (uu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        uu.apply(this, arguments)
                    );
                }
                const tu = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, eu);
                    return i().createElement(
                        Je,
                        uu(
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
                };
                function nu(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                let ru, au, iu, su;
                !(function (e) {
                    (e[(e.x28 = 28)] = 'x28'), (e[(e.x38 = 38)] = 'x38'), (e[(e.x56 = 56)] = 'x56');
                })(ru || (ru = {})),
                    (function (e) {
                        (e.Achieved = 'achieved'), (e.NotAvailable = 'notAvailable'), (e.Current = 'current');
                    })(au || (au = {})),
                    (function (e) {
                        (e[(e.Bronze = 0)] = 'Bronze'), (e[(e.Silver = 1)] = 'Silver'), (e[(e.Gold = 2)] = 'Gold');
                    })(iu || (iu = {})),
                    (function (e) {
                        (e.DivisionEfficiency = 'divisionEfficiency'),
                            (e.SeasonEfficiency = 'seasonEfficiency'),
                            (e.TotalStages = 'totalStages'),
                            (e.TotalBattles = 'totalBattles');
                    })(su || (su = {}));
                const ou = (e, u, t) => {
                        switch (!0) {
                            case e > u:
                                return au.NotAvailable;
                            case e < u || t.currentRank >= t.lastRank:
                                return au.Achieved;
                            default:
                                return au.Current;
                        }
                    },
                    lu = (e) => (e >= b.Large ? ru.x56 : e >= b.Medium ? ru.x38 : ru.x28),
                    cu = (su.DivisionEfficiency, su.SeasonEfficiency, { 0: 'bronze', 1: 'silver', 2: 'gold' }),
                    Eu = { 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX', 10: 'X' },
                    du = 'rankedDivisionInfo',
                    _u = { from: { opacity: 0 }, to: { opacity: 1 }, delay: 200, config: { duration: 300 } },
                    mu = {
                        base: 'DivisionStatus_base_3c',
                        text: 'DivisionStatus_text_46',
                        text__locked: 'DivisionStatus_text__locked_72',
                        text__done: 'DivisionStatus_text__done_3f',
                    };
                var Au;
                !(function (e) {
                    (e[(e.x940 = 940)] = 'x940'), (e[(e.x1260 = 1260)] = 'x1260');
                })(Au || (Au = {}));
                const Fu = R.strings.ranked_battles.rankedDivisionStatus,
                    Du = ({ isLocked: e, className: u }) => {
                        const t = T().mediaSize < b.Medium ? Au.x940 : Au.x1260,
                            n = e ? Fu.locked() : Fu.completed(),
                            r = e ? 'locked' : 'done',
                            s = (0, a.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.rankedBattles.divisionStatus.$dyn(`${t === Au.x1260 ? 'big_' : ''}${r}`)})`,
                                    '--itemWidth': `${t}rem`,
                                }),
                                [t, r],
                            );
                        return i().createElement(
                            'div',
                            { className: h()(mu.base, u), style: s },
                            i().createElement(qe, {
                                className: h()(mu.text, mu[`text__${r}`]),
                                text: n,
                                variant: 'paragraph-P12',
                                variant_md: 'paragraph-P16',
                                color: 'WHITE',
                            }),
                        );
                    },
                    Bu = {
                        base: 'DivisionEmblem_base_3a',
                        base__current: 'DivisionEmblem_base__current_8a',
                        base__achieved: 'DivisionEmblem_base__achieved_c8',
                        base__notAvailable: 'DivisionEmblem_base__notAvailable_64',
                        base__selected: 'DivisionEmblem_base__selected_ea',
                        backdrop: 'DivisionEmblem_backdrop_ca',
                        icon: 'DivisionEmblem_icon_bf',
                        achievedIcon: 'DivisionEmblem_achievedIcon_14',
                    },
                    gu = 'R.images.gui.maps.icons.rankedBattles.divisions',
                    Cu = ({
                        state: e,
                        divisionID: u,
                        divisionEmblemSize: t = ru.x28,
                        isSelected: n = !1,
                        className: r,
                        onClick: a,
                        soundHover: s,
                        soundClick: o,
                    }) => {
                        const l = h()(Bu.base, Bu[`base__${e}`], Bu[`base__${t}`], r, { [Bu.base__selected]: n }),
                            c = { backgroundImage: `url(${gu}.c_${t}x${t}.${cu[u]})` };
                        return i().createElement(
                            'div',
                            {
                                className: l,
                                style: { '--itemWidth': `${t}rem` },
                                onClick: () => {
                                    o && U(o), null == a || a();
                                },
                                onMouseEnter: () => {
                                    s && U(s);
                                },
                            },
                            i().createElement('div', {
                                className: Bu.backdrop,
                                style: {
                                    backgroundImage: `url(${gu}.c_${t}x${t}.backdrop)`,
                                    '--backdropWidth': `${t}rem`,
                                },
                            }),
                            i().createElement('div', { className: Bu.icon, style: c }),
                            i().createElement('div', { className: Bu.achievedIcon }),
                        );
                    },
                    pu = 'DivisionWidget_base_63',
                    hu = 'DivisionWidget_divisionsWrapper_0f',
                    vu = 'DivisionWidget_division_50',
                    fu = 'DivisionWidget_description_6b',
                    bu = 'DivisionWidget_description__visible_77',
                    wu = 'DivisionWidget_title_44',
                    Su = 'DivisionWidget_subtitle_a0',
                    Ru = 'DivisionWidget_icon_75',
                    Tu = 'DivisionWidget_divider_96',
                    xu = 'DivisionWidget_divider__first_26',
                    ku = 'DivisionWidget_divider__middle_22',
                    Mu = 'DivisionWidget_divider__last_aa',
                    yu = 'DivisionWidget_divisionStatusWrapper_e7',
                    Pu = 'DivisionWidget_divisionStatusWrapper__visible_17',
                    Lu = R.strings.ranked_battles,
                    Nu = (0, j.Pi)(() => {
                        var e, u;
                        const t = oe(),
                            n = t.model,
                            r = t.controls,
                            s = n.root.get(),
                            o = s.currentDivisionID,
                            l = s.selectedDivision,
                            c = s.currentRank,
                            E = n.divisions.get(),
                            d = c >= (null != (e = null == (u = nu(E, E.length - 1)) ? void 0 : u.lastRank) ? e : 0),
                            _ = l !== o || d,
                            m = l > o,
                            A = T().mediaSize,
                            F = (0, a.useCallback)(
                                (e) => {
                                    r.onSelectDivision(e);
                                },
                                [r],
                            );
                        return i().createElement(
                            'div',
                            { className: pu },
                            i().createElement(
                                'div',
                                { className: hu },
                                ((D = E),
                                (B = ({ divisionID: e, vehicleLevel: u, lastRank: t }, n, r) => {
                                    return i().createElement(
                                        'div',
                                        { className: vu, key: n },
                                        i().createElement('div', { className: h()(Tu, { [xu]: 0 === n }) }),
                                        i().createElement(
                                            tu,
                                            {
                                                args: {
                                                    tooltipId: du,
                                                    divisionId: cu[e],
                                                    isCurrent: o === e,
                                                    isLocked: o < e,
                                                    isCompleted: o > e || d,
                                                },
                                                isEnabled: !0,
                                            },
                                            i().createElement(
                                                'div',
                                                { className: Ru },
                                                i().createElement(Cu, {
                                                    divisionID: e,
                                                    state: ou(e, o, { currentRank: c, lastRank: t }),
                                                    divisionEmblemSize: lu(A),
                                                    isSelected: l === e,
                                                    className: `division_${e}`,
                                                    onClick: () => F(e),
                                                    soundClick: R.sounds.play(),
                                                    soundHover: R.sounds.highlight(),
                                                }),
                                                i().createElement(
                                                    'div',
                                                    { className: h()(fu, { [bu]: l === e }) },
                                                    i().createElement(qe, {
                                                        text: String(Lu.division.$dyn(cu[e])),
                                                        className: wu,
                                                        color: 'WHITE_REAL',
                                                        variant: 'heading-H14',
                                                        variant_sm: 'heading-H15',
                                                    }),
                                                    i().createElement(qe, {
                                                        text: String(
                                                            ((a = Lu.division.subtitle()),
                                                            (s = { vehicleLevel: Eu[u] }),
                                                            a.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                                                                const u = 0 === e.indexOf('%') ? 2 : 1;
                                                                return String(s[e.slice(u, -u)]);
                                                            })),
                                                        ),
                                                        className: Su,
                                                        color: 'PAR',
                                                        variant: 'paragraph-P12',
                                                    }),
                                                ),
                                            ),
                                        ),
                                        i().createElement('div', {
                                            className: h()(Tu, ku, { [Mu]: n + 1 === r.length }),
                                        }),
                                    );
                                    var a, s;
                                }),
                                Array.isArray(D)
                                    ? D.map(B)
                                    : D.map((e, u, t) => B(null == e ? void 0 : e.value, u, t))),
                            ),
                            i().createElement(
                                'div',
                                { className: h()(yu, { [Pu]: _ }) },
                                i().createElement(Du, { isLocked: m }),
                            ),
                        );
                        var D, B;
                    });
                var Ou = t(30);
                const Iu = 33,
                    Hu = 0,
                    Uu = !0,
                    Wu = 'play';
                const Gu = [
                    'width',
                    'height',
                    'getImageSource',
                    'frameCount',
                    'onAnimate',
                    'frameTime',
                    'initialFrameIndex',
                    'lastFrameIndex',
                    'loop',
                    'state',
                    'onAnimationDone',
                    'onAnimationComplete',
                    'poster',
                ];
                function $u() {
                    return (
                        ($u =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        $u.apply(this, arguments)
                    );
                }
                const zu = (0, a.memo)(function (e) {
                        let u = e.width,
                            t = e.height,
                            n = e.getImageSource,
                            r = e.frameCount,
                            s = e.onAnimate,
                            o = e.frameTime,
                            l = void 0 === o ? Iu : o,
                            c = e.initialFrameIndex,
                            E = void 0 === c ? Hu : c,
                            d = e.lastFrameIndex,
                            _ = void 0 === d ? r - 1 : d,
                            m = e.loop,
                            A = void 0 === m ? Uu : m,
                            F = e.state,
                            D = void 0 === F ? Wu : F,
                            B = e.onAnimationDone,
                            g = e.onAnimationComplete,
                            C = e.poster,
                            p = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, Gu);
                        const h = (0, a.useRef)(null);
                        return (
                            (0, a.useEffect)(() => {
                                const e = h.current;
                                if (!e) return;
                                const u = e.getContext('2d'),
                                    t = (t) => {
                                        u.clearRect(0, 0, e.width, e.height), u.drawImage(t.img, -t.x, -t.y);
                                    };
                                switch (D) {
                                    case 'play':
                                        return (function () {
                                            const e = Yu(E, _, n),
                                                u = Xu(E, _),
                                                r = window.setInterval(() => {
                                                    const n = u(),
                                                        a = e.get(n);
                                                    a
                                                        ? (null == s || s(n, a),
                                                          t(a),
                                                          n === _ &&
                                                              (null == g || g(),
                                                              A || (null == B || B(), window.clearInterval(r))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, l);
                                            return () => window.clearInterval(r);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const e = 0 === E && C ? { path: C, x: 0, y: 0 } : n(E),
                                                u = new Image();
                                            u.src = e.path;
                                            const r = () => t(ju(e, u));
                                            return (
                                                u.addEventListener('load', r), () => u.removeEventListener('load', r)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [l, n, E, _, A, s, g, B, C, D]),
                            i().createElement('canvas', $u({}, p, { width: u, height: t, ref: h }))
                        );
                    }),
                    Xu = (e, u) => {
                        let t = e;
                        return () => {
                            const n = t;
                            return (t += 1), t > u && (t = e), n;
                        };
                    },
                    ju = (e, u) => Object.assign({}, e, { img: u }),
                    Yu = (e, u, t) => {
                        const n = new Map(),
                            r = {};
                        for (let a = e; a <= u; a++) {
                            const e = t(a),
                                u = r[e.path];
                            if (u) n.set(a, ju(e, u));
                            else {
                                const u = new Image();
                                (r[e.path] = u),
                                    (u.src = e.path),
                                    (u.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${a})`,
                                            e.path,
                                            `(${e.x},${e.y})`,
                                        );
                                    }),
                                    n.set(a, ju(e, u));
                            }
                        }
                        return n;
                    };
                var Vu = t(596);
                const qu = 'AnimatedBackground_base_5f',
                    Ku = 'AnimatedBackground_sunShineCanvas_3b',
                    Qu = 'AnimatedBackground_staticHighlight_4b',
                    Zu = {
                        width: 400,
                        height: 400,
                        frameCount: 50,
                        chunk: { count: 2, rows: 5, columns: 5 },
                        getChunkPath:
                            ((Ju = 'R.images.gui.maps.icons.sequence.sun_shine_big_sprite.sprite_'),
                            (e) => `${Ju}${e}`),
                    };
                var Ju;
                const et = (function (e) {
                        const u = e.chunk,
                            t = u.rows * u.columns;
                        return (n) => {
                            const r = n % t,
                                a = (r % u.columns) * e.width,
                                i = Math.trunc(r / u.columns) * e.height;
                            return { path: e.getChunkPath(Math.trunc(n / t)), x: a, y: i };
                        };
                    })(Zu),
                    ut = ({ className: e }) =>
                        i().createElement(
                            'div',
                            { className: h()(qu, e) },
                            Vu.graphicsQuality.isHigh()
                                ? i().createElement(zu, {
                                      onAnimationDone: ee,
                                      width: Zu.width,
                                      height: Zu.height,
                                      frameCount: Zu.frameCount,
                                      getImageSource: et,
                                      frameTime: 50,
                                      className: Ku,
                                  })
                                : i().createElement('div', { className: Qu }),
                        ),
                    tt = {
                        base: 'FinalRewardState_base_b1',
                        header: 'FinalRewardState_header_73',
                        headerText: 'FinalRewardState_headerText_a8',
                        rewardContainer: 'FinalRewardState_rewardContainer_a7',
                        reward: 'FinalRewardState_reward_48',
                    },
                    nt = R.strings.ranked_battles.rankedSeasonCompleted,
                    rt = () => {
                        const e = (0, Ou.useSpring)(_u);
                        return i().createElement(
                            'div',
                            { className: tt.base },
                            i().createElement(
                                Ou.animated.div,
                                { style: e, className: tt.contentWrapper },
                                i().createElement(
                                    'div',
                                    { className: tt.header },
                                    i().createElement(qe, {
                                        className: tt.headerText,
                                        text: nt.header.text(),
                                        variant: 'heading-H28',
                                        variant_lg: 'heading-H36',
                                        color: 'WHITE',
                                    }),
                                    i().createElement(qe, {
                                        text: nt.header.description(),
                                        variant: 'paragraph-P16',
                                        color: 'PAR',
                                    }),
                                ),
                                i().createElement(
                                    'div',
                                    { className: tt.rewardContainer },
                                    i().createElement(ut, null),
                                    i().createElement('div', { className: tt.reward }),
                                ),
                            ),
                        );
                    };
                let at;
                !(function (e) {
                    (e.SHORT_DATE = 'short-date'),
                        (e.SHORT_TIME = 'short-time'),
                        (e.SHORT_DATE_TIME = 'short-date-time'),
                        (e.FULL_DATE = 'full-date'),
                        (e.FULL_DATE_TIME = 'full-date-time'),
                        (e.MONTH = 'month'),
                        (e.MONTH_DATE = 'month-date'),
                        (e.DATE_MONTH = 'date-month'),
                        (e.MONTH_YEAR = 'month-year'),
                        (e.WEEK_DAY = 'week-day'),
                        (e.WEEK_DAY_TIME = 'week-day-time'),
                        (e.YEAR = 'year'),
                        (e.DATE_YEAR = 'date-year');
                })(at || (at = {}));
                const it = 60,
                    st = 3600,
                    ot = 86400;
                Date.now();
                const lt = (0, a.memo)(({ datetime: e, format: u = at.SHORT_DATE, localize: t = !0 }) =>
                        ((e, u, t) => {
                            switch (u) {
                                case at.SHORT_DATE:
                                    return t
                                        ? V.Z5.getDateFormat(e, V.kH.SHORT_FORMAT)
                                        : V.cy.getTimeFormat('%d.%m.%y', e, !0);
                                case at.SHORT_TIME:
                                    return t
                                        ? V.Z5.getTimeFormat(e, V.lf.SHORT_FORMAT)
                                        : V.cy.getTimeFormat('%I:%M %p', e, !0);
                                case at.SHORT_DATE_TIME:
                                    return t
                                        ? `${V.Z5.getDateFormat(e, V.kH.SHORT_FORMAT)}, ${V.Z5.getTimeFormat(e, V.lf.SHORT_FORMAT)}`
                                        : V.cy.getTimeFormat('%d.%m.%y, %I:%M %p', e, !0);
                                case at.FULL_DATE:
                                    return t
                                        ? V.Z5.getDateFormat(e, V.kH.LONG_FORMAT)
                                        : V.cy.getTimeFormat('%B %d, %Y', e, !0);
                                case at.FULL_DATE_TIME:
                                    return t
                                        ? `${V.Z5.getDateFormat(e, V.kH.LONG_FORMAT)}, ${V.Z5.getTimeFormat(e, V.lf.SHORT_FORMAT)}`
                                        : V.cy.getTimeFormat('%B %d, %Y, %I:%M %p', e, !0);
                                case at.MONTH:
                                    return V.cy.getTimeFormat('%B', e, !0);
                                case at.MONTH_DATE:
                                    return V.cy.getTimeFormat('%B %e', e, !0);
                                case at.DATE_MONTH:
                                    return V.cy.getTimeFormat('%e %B', e, !0);
                                case at.MONTH_YEAR:
                                    return V.cy.getTimeFormat('%B %Y', e, !0);
                                case at.WEEK_DAY:
                                    return V.cy.getTimeFormat('%A', e, !0);
                                case at.WEEK_DAY_TIME:
                                    return t
                                        ? `${V.cy.getTimeFormat('%A', e, !0)} ${V.Z5.getTimeFormat(e, V.lf.SHORT_FORMAT)}`
                                        : V.cy.getTimeFormat('%A, %I:%M %p', e, !0);
                                case at.YEAR:
                                    return V.cy.getTimeFormat('%Y', e, !0);
                                case at.DATE_YEAR:
                                    return V.cy.getTimeFormat('%d, %Y', e, !0);
                            }
                        })(e, u, t),
                    ),
                    ct = 'Header_base_e7',
                    Et = 'Header_heading_1e',
                    dt = 'Header_rankedRange_55',
                    _t = R.strings.ranked_battles,
                    mt = (0, j.Pi)(() => {
                        const e = oe().model.root.get(),
                            u = e.startTimestamp,
                            t = e.endTimestamp,
                            n = e.serverTimestamp,
                            r = (e, u) => ({
                                start: i().createElement(lt, { datetime: e, format: at.SHORT_DATE }),
                                finish: i().createElement(lt, { datetime: u, format: at.SHORT_DATE }),
                            });
                        return i().createElement(
                            tu,
                            { args: { tooltipId: 'rankedCalendarDayInfo' } },
                            i().createElement(
                                'div',
                                { className: ct },
                                i().createElement(qe, {
                                    className: Et,
                                    text: _t.rankedBattle.title(),
                                    variant: 'heading-H36',
                                    variant_md: 'heading-H56',
                                    color: 'WHITE_REAL',
                                }),
                                i().createElement(
                                    'div',
                                    { className: dt },
                                    ((e, u, t) => {
                                        const n = u - t,
                                            a = (function (e = 0) {
                                                let u = e;
                                                const t = Math.trunc(u / ot);
                                                u -= t * ot;
                                                const n = Math.trunc(u / st);
                                                u -= n * st;
                                                const r = Math.trunc(u / it);
                                                return (u -= r * it), { days: t, hours: n, minutes: r, seconds: u };
                                            })(n);
                                        return n >= 604800
                                            ? i().createElement(qe, {
                                                  text: _t.rankedBattleMainView.date.period(),
                                                  format: { binding: r(e, u) },
                                              })
                                            : n >= ot
                                              ? i().createElement(qe, {
                                                    text: _t.rankedBattleMainView.date.days(),
                                                    format: { binding: a },
                                                })
                                              : n >= st
                                                ? i().createElement(qe, {
                                                      text: _t.rankedBattleMainView.date.hours(),
                                                      format: { binding: a },
                                                  })
                                                : n >= it
                                                  ? i().createElement(qe, {
                                                        text: _t.rankedBattleMainView.date.min(),
                                                        format: { binding: a },
                                                    })
                                                  : n >= 1
                                                    ? i().createElement(qe, {
                                                          text: _t.rankedBattleMainView.date.lessMin(),
                                                          format: { binding: a },
                                                      })
                                                    : void 0;
                                    })(u, t, n),
                                ),
                            ),
                        );
                    }),
                    At = {
                        base: 'RankedProgressionViewContent_base_b0',
                        widgetWrapper: 'RankedProgressionViewContent_widgetWrapper_7e',
                        finalState: 'RankedProgressionViewContent_finalState_f9',
                        toRewardButton: 'RankedProgressionViewContent_toRewardButton_ad',
                        statistics: 'RankedProgressionViewContent_statistics_66',
                        statistics__final: 'RankedProgressionViewContent_statistics__final_54',
                    },
                    Ft = (e) => {
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
                    Dt = (e, u, t) => (t < e ? e : t > u ? u : t),
                    Bt = [];
                function gt(e) {
                    const u = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, u.current)(...e), Bt)
                    );
                }
                function Ct(e, u, t = []) {
                    const n = (0, a.useRef)(0),
                        r = (0, a.useCallback)(() => window.clearInterval(n.current), t || []);
                    (0, a.useEffect)(() => r, [r]);
                    const i = (null != t ? t : []).concat([u]);
                    return [
                        (0, a.useCallback)((t) => {
                            (n.current = window.setInterval(() => e(t, !0), u)), e(t, !1);
                        }, i),
                        r,
                    ];
                }
                function pt(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return ht(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return ht(e, u);
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
                function ht(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                function vt(e, u, t) {
                    const n = (0, a.useMemo)(
                        () =>
                            (function (e, u, t, n) {
                                let r,
                                    a = !1,
                                    i = 0;
                                function s() {
                                    r && clearTimeout(r);
                                }
                                function o(...o) {
                                    const l = this,
                                        c = Date.now() - i;
                                    function E() {
                                        (i = Date.now()), t.apply(l, o);
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
                                    (o.cancel = function () {
                                        s(), (a = !0);
                                    }),
                                    o
                                );
                            })(t, e),
                        u,
                    );
                    return (0, a.useEffect)(() => n.cancel, [n]), n;
                }
                let ft;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(ft || (ft = {}));
                const bt = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    wt = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: n,
                        getWrapperSize: r,
                        triggerMouseMoveOnUpdate: i = !1,
                    }) => {
                        const s = (e, t) => {
                            const n = u(e),
                                r = n[0],
                                a = n[1];
                            return Dt(r, a, t);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                E = void 0 === c ? bt : c,
                                d = (0, a.useRef)(null),
                                _ = (0, a.useRef)(null),
                                m = (() => {
                                    const e = (0, a.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        n = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        r = (e, ...t) => {
                                            for (var n, r = pt(u(e).values()); !(n = r()).done; ) (0, n.value)(...t);
                                        };
                                    return (0, a.useMemo)(() => ({ on: t, off: n, trigger: r }), []);
                                })(),
                                A = vt(
                                    () => {
                                        o.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                F = (0, Ou.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = d.current;
                                        u && (t(u, e), m.trigger('change', e), i && A());
                                    },
                                    onRest: (e) => m.trigger('rest', e),
                                    onStart: (e) => m.trigger('start', e),
                                    onPause: (e) => m.trigger('pause', e),
                                })),
                                D = F[0],
                                B = F[1],
                                g = (0, a.useCallback)(
                                    (e, u, t) => {
                                        var n;
                                        const r = D.scrollPosition.get(),
                                            a = (null != (n = D.scrollPosition.goal) ? n : 0) - r;
                                        return s(e, u * t + a + r);
                                    },
                                    [D.scrollPosition],
                                ),
                                C = (0, a.useCallback)(
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
                                            t = _.current;
                                        if (!u || !t) return;
                                        const n = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return r(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, E.step),
                                            a = g(u, e, n);
                                        C(a);
                                    },
                                    [C, g, E.step],
                                ),
                                h = (0, a.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && p(n(e)),
                                            d.current && m.trigger('mouseWheel', e, D.scrollPosition, u(d.current));
                                    },
                                    [D.scrollPosition, p, m],
                                ),
                                v = ((e, u = []) => {
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
                                        Ft(() => {
                                            const e = d.current;
                                            e &&
                                                (C(s(e, D.scrollPosition.goal), { immediate: !0 }),
                                                m.trigger('resizeHandled'));
                                        }),
                                    [C, D.scrollPosition.goal],
                                ),
                                f = gt(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const u = s(e, D.scrollPosition.goal);
                                    u !== D.scrollPosition.goal && C(u, { immediate: !0 }),
                                        m.trigger('recalculateContent');
                                });
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('resize', v),
                                    () => {
                                        window.removeEventListener('resize', v);
                                    }
                                ),
                                [v],
                            );
                            return (0, a.useMemo)(
                                () => ({
                                    getWrapperSize: () => (_.current ? r(_.current) : void 0),
                                    getContainerSize: () => (d.current ? e(d.current) : void 0),
                                    getBounds: () =>
                                        d.current
                                            ? u(d.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: E.step.clampedArrowStepTimeout,
                                    clampPosition: s,
                                    handleMouseWheel: h,
                                    applyScroll: C,
                                    applyStepTo: p,
                                    contentRef: d,
                                    wrapperRef: _,
                                    scrollPosition: B,
                                    animationScroll: D,
                                    recalculateContent: f,
                                    events: { on: m.on, off: m.off },
                                }),
                                [D.scrollPosition, C, p, m.off, m.on, f, h, B, E.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    St = wt({
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
                        getDirection: (e) => (e.deltaY > 1 ? ft.Next : ft.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    Rt = 'HorizontalBar_base_49',
                    Tt = 'HorizontalBar_base__nonActive_82',
                    xt = 'HorizontalBar_leftButton_5f',
                    kt = 'HorizontalBar_rightButton_03',
                    Mt = 'HorizontalBar_track_0d',
                    yt = 'HorizontalBar_thumb_fd',
                    Pt = 'HorizontalBar_rail_32',
                    Lt = 'disable',
                    Nt = { pending: !1, offset: 0 },
                    Ot = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    It = () => {},
                    Ht = (e, u) => Math.max(20, e.offsetWidth * u),
                    Ut = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = Ot, onDrag: n = It }) => {
                        const r = (0, a.useRef)(null),
                            s = (0, a.useRef)(null),
                            o = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            E = e.stepTimeout || 100,
                            d = (0, a.useState)(Nt),
                            _ = d[0],
                            m = d[1],
                            A = (0, a.useCallback)(
                                (e) => {
                                    m(e),
                                        c.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [n],
                            ),
                            F = () => {
                                const u = l.current,
                                    t = c.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, n / r),
                                    E = Dt(0, 1, a / (r - n)),
                                    d = (u.offsetWidth - Ht(u, i)) * E;
                                (t.style.transform = `translateX(${0 | d}px)`),
                                    ((e) => {
                                        if (s.current && o.current && l.current && c.current) {
                                            if (0 === e)
                                                return s.current.classList.add(Lt), void o.current.classList.remove(Lt);
                                            if (
                                                ((u = l.current),
                                                (t = c.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return s.current.classList.remove(Lt), void o.current.classList.add(Lt);
                                            var u, t;
                                            s.current.classList.remove(Lt), o.current.classList.remove(Lt);
                                        }
                                    })(d);
                            },
                            D = gt(() => {
                                (() => {
                                    const u = c.current,
                                        t = l.current,
                                        n = e.getWrapperSize(),
                                        a = e.getContainerSize();
                                    if (!(a && u && n && t)) return;
                                    const i = Math.min(1, n / a);
                                    (u.style.width = `${Ht(t, i)}px`),
                                        (u.style.display = 'flex'),
                                        r.current &&
                                            (1 === i ? r.current.classList.add(Tt) : r.current.classList.remove(Tt));
                                })(),
                                    F();
                            });
                        (0, a.useEffect)(() => Ft(D)),
                            (0, a.useEffect)(
                                () =>
                                    Ft(() => {
                                        const u = () => {
                                            F();
                                        };
                                        let t = It;
                                        const n = () => {
                                            t(), (t = Ft(D));
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
                                const u = (u) => {
                                        var t;
                                        const r = e.contentRef.current;
                                        if (!r) return;
                                        const a = l.current,
                                            i = c.current;
                                        if (!r || !a || !i) return;
                                        const s = u.screenX - _.offset - a.getBoundingClientRect().x,
                                            o = (s / a.offsetWidth) * (null != (t = e.getContainerSize()) ? t : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, o),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: i, thumbOffset: s, contentOffset: o });
                                    },
                                    t = () => {
                                        window.removeEventListener('mousemove', u), A(Nt);
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t);
                                    }
                                );
                            }, [e, _.offset, _.pending, n, A]);
                        const B = Ct((u) => e.applyStepTo(u), E, [e]),
                            g = B[0],
                            C = B[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', C, !0),
                                () => document.removeEventListener('mouseup', C, !0)
                            ),
                            [C],
                        );
                        const p = (e) => {
                            e.target.classList.contains(Lt) || U('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: h()(Rt, u.base), ref: r, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: h()(xt, u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Lt) || 0 !== e.button || (U('play'), g(ft.Next));
                                },
                                onMouseUp: C,
                                ref: s,
                                onMouseEnter: p,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: h()(Mt, u.track),
                                    onMouseDown: (u) => {
                                        const n = c.current;
                                        if (n && 0 === u.button)
                                            if ((U('play'), u.target === n))
                                                A({ pending: !0, offset: u.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((u) => {
                                                    const n = c.current,
                                                        r = e.contentRef.current;
                                                    if (!n || !r) return;
                                                    const a = t(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + a * u);
                                                })(u.screenX > n.getBoundingClientRect().x ? ft.Prev : ft.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: p,
                                },
                                i().createElement('div', { ref: c, className: h()(yt, u.thumb) }),
                                i().createElement('div', { className: h()(Pt, u.rail) }),
                            ),
                            i().createElement('div', {
                                className: h()(kt, u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Lt) || 0 !== e.button || (U('play'), g(ft.Prev));
                                },
                                onMouseUp: C,
                                ref: o,
                                onMouseEnter: p,
                            }),
                        );
                    }),
                    Wt = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Gt = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        classNames: s,
                        scrollClassName: o,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const E = (0, a.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: h()(Wt.base, e.base) });
                            }, [n]),
                            d = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return i().createElement(
                            'div',
                            { className: h()(Wt.defaultScroll, t), onWheel: u.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: h()(Wt.defaultScrollArea, r) },
                                i().createElement($t, { className: o, api: d, classNames: s }, e),
                            ),
                            i().createElement(Ut, { getStepByRailClick: l, api: u, onDrag: c, classNames: E }),
                        );
                    },
                    $t = ({ api: e, className: u, classNames: t, children: n }) => (
                        (0, a.useEffect)(() => Ft(e.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: h()(Wt.base, u) },
                            i().createElement(
                                'div',
                                {
                                    className: h()(Wt.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                i().createElement(
                                    'div',
                                    { className: h()(Wt.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                ($t.Bar = Ut),
                    ($t.Default = Gt),
                    ($t.SeniorityAwards = ({ api: e, className: u, classNames: t, children: n }) => (
                        (0, a.useEffect)(() => Ft(e.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: h()(Wt.base, u) },
                            i().createElement(
                                'div',
                                { className: h()(Wt.wrapper, null == t ? void 0 : t.wrapper), ref: e.wrapperRef },
                                i().createElement(
                                    'div',
                                    { className: h()(Wt.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    ));
                const zt = wt({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? ft.Next : ft.Prev),
                    }),
                    Xt = 'VerticalBar_base_f3',
                    jt = 'VerticalBar_base__nonActive_42',
                    Yt = 'VerticalBar_topButton_d7',
                    Vt = 'VerticalBar_bottomButton_06',
                    qt = 'VerticalBar_track_df',
                    Kt = 'VerticalBar_thumb_32',
                    Qt = 'VerticalBar_rail_43',
                    Zt = 'disable',
                    Jt = () => {},
                    en = { pending: !1, offset: 0 },
                    un = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    tn = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    nn = (e, u) => Math.max(20, e.offsetHeight * u),
                    rn = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = un, onDrag: n = Jt }) => {
                        const r = (0, a.useRef)(null),
                            s = (0, a.useRef)(null),
                            o = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            E = e.stepTimeout || 100,
                            d = (0, a.useState)(en),
                            _ = d[0],
                            m = d[1],
                            A = (0, a.useCallback)(
                                (e) => {
                                    m(e),
                                        c.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [n],
                            ),
                            F = gt(() => {
                                const u = c.current,
                                    t = l.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && a && u && t)) return;
                                const i = Math.min(1, n / a);
                                return (
                                    (u.style.height = `${nn(t, i)}px`),
                                    u.classList.add(Kt),
                                    r.current &&
                                        (1 === i ? r.current.classList.add(jt) : r.current.classList.remove(jt)),
                                    i
                                );
                            }),
                            D = gt(() => {
                                const u = l.current,
                                    t = c.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, n / r),
                                    E = Dt(0, 1, a / (r - n)),
                                    d = (u.offsetHeight - nn(u, i)) * E;
                                (t.style.transform = `translateY(${0 | d}px)`),
                                    ((e) => {
                                        if (s.current && o.current && l.current && c.current) {
                                            if (0 === e)
                                                return s.current.classList.add(Zt), void o.current.classList.remove(Zt);
                                            if (
                                                ((u = l.current),
                                                (t = c.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return s.current.classList.remove(Zt), void o.current.classList.add(Zt);
                                            var u, t;
                                            s.current.classList.remove(Zt), o.current.classList.remove(Zt);
                                        }
                                    })(d);
                            }),
                            B = gt(() => {
                                tn(e, () => {
                                    F(), D();
                                });
                            });
                        (0, a.useEffect)(() => Ft(B)),
                            (0, a.useEffect)(() => {
                                const u = () => {
                                    tn(e, () => {
                                        D();
                                    });
                                };
                                let t = Jt;
                                const n = () => {
                                    t(), (t = Ft(B));
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
                                const u = (u) => {
                                        tn(e, (t) => {
                                            const r = l.current,
                                                a = c.current,
                                                i = e.getContainerSize();
                                            if (!r || !a || !i) return;
                                            const s = u.screenY - _.offset - r.getBoundingClientRect().y,
                                                o = (s / r.offsetHeight) * i;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, o),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: a, thumbOffset: s, contentOffset: o });
                                        });
                                    },
                                    t = () => {
                                        window.removeEventListener('mousemove', u), A(en);
                                    };
                                return (
                                    window.addEventListener('mousemove', u),
                                    window.addEventListener('mouseup', t),
                                    () => {
                                        window.removeEventListener('mousemove', u),
                                            window.removeEventListener('mouseup', t);
                                    }
                                );
                            }, [e, _.offset, _.pending, n, A]);
                        const g = Ct((u) => e.applyStepTo(u), E, [e]),
                            C = g[0],
                            p = g[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', p, !0),
                                () => document.removeEventListener('mouseup', p, !0)
                            ),
                            [p],
                        );
                        const v = (e) => {
                            e.target.classList.contains(Zt) || U('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: h()(Xt, u.base), ref: r, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: h()(Yt, u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Zt) || 0 !== e.button || (U('play'), C(ft.Next));
                                },
                                ref: s,
                                onMouseEnter: v,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: h()(qt, u.track),
                                    onMouseDown: (u) => {
                                        const n = c.current;
                                        if (n && 0 === u.button)
                                            if ((U('play'), u.target === n))
                                                A({ pending: !0, offset: u.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((u) => {
                                                    c.current &&
                                                        tn(e, (n) => {
                                                            if (!n) return;
                                                            const r = t(e),
                                                                a = e.clampPosition(n, n.scrollTop + r * u);
                                                            e.applyScroll(a);
                                                        });
                                                })(u.screenY > n.getBoundingClientRect().y ? ft.Prev : ft.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: v,
                                },
                                i().createElement('div', { ref: c, className: u.thumb }),
                                i().createElement('div', { className: h()(Qt, u.rail) }),
                            ),
                            i().createElement('div', {
                                className: h()(Vt, u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Zt) || 0 !== e.button || (U('play'), C(ft.Prev));
                                },
                                onMouseUp: p,
                                ref: o,
                                onMouseEnter: v,
                            }),
                        );
                    }),
                    an = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    sn = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        scrollClassName: s,
                        scrollClassNames: o,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const E = (0, a.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: h()(an.base, e.base) });
                            }, [n]),
                            d = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return i().createElement(
                            'div',
                            { className: h()(an.defaultScroll, t), onWheel: u.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: h()(an.area, r) },
                                i().createElement(on, { className: s, classNames: o, api: d }, e),
                            ),
                            i().createElement(rn, { getStepByRailClick: l, api: u, onDrag: c, classNames: E }),
                        );
                    },
                    on = ({ className: e, classNames: u, children: t, api: n }) => (
                        (0, a.useEffect)(() => Ft(n.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: h()(an.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: h()(an.content, null == u ? void 0 : u.content), ref: n.contentRef },
                                t,
                            ),
                        )
                    );
                on.Default = sn;
                const ln = { Vertical: r, Horizontal: n },
                    cn = { type: 'idle' };
                const En = (e, u) => {
                    const t = [];
                    for (let n = 0; n < e; n++) t.push(u(n));
                    return t;
                };
                var dn = t(946);
                let _n, mn, An, Fn, Dn, Bn, gn;
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
                        (e.Currency = 'currency'),
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
                        (e.NewYearAlbumsAccess = 'newYearAlbumsAccess'),
                        (e.NewYearFillers = 'ny22Fillers'),
                        (e.NewYearInvoice = 'newYearInvoice'),
                        (e.NewYearToyFragments = 'ny22ToyFragments'),
                        (e.NewYearSlot = 'newYearSlot'),
                        (e.BonusX5 = 'battle_bonus_x5'),
                        (e.CrewBonusX3 = 'crew_bonus_x3'),
                        (e.Vehicles = 'vehicles'),
                        (e.EpicSelectToken = 'epicSelectToken'),
                        (e.CollectionItem = 'collectionItem'),
                        (e.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                        (e.Comp7TokenCouponReward = 'comp7TokenCouponReward'),
                        (e.BattleBoosterGift = 'battleBooster_gift'),
                        (e.CosmicLootboxSilver = 'lootBoxToken'),
                        (e.CosmicLootboxCommon = 'cosmic_2024_2');
                })(_n || (_n = {})),
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
                            (e.BattleAchievement = 'dossier_achievement');
                    })(mn || (mn = {})),
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
                            (e.S48x48 = 's48x48');
                    })(An || (An = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(Fn || (Fn = {})),
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
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4');
                    })(Dn || (Dn = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(Bn || (Bn = {})),
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
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4');
                    })(gn || (gn = {}));
                class Cn extends i().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = V.B3.GOLD;
                        else e = V.B3.INTEGRAL;
                        const u = V.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                Cn.defaultProps = { format: 'integral' };
                const pn = [
                        _n.Items,
                        _n.Equipment,
                        _n.Xp,
                        _n.XpFactor,
                        _n.Blueprints,
                        _n.BlueprintsAny,
                        _n.Goodies,
                        _n.Berths,
                        _n.Slots,
                        _n.Tokens,
                        _n.CrewSkins,
                        _n.CrewBooks,
                        _n.Customizations,
                        _n.CreditsFactor,
                        _n.TankmenXp,
                        _n.TankmenXpFactor,
                        _n.FreeXpFactor,
                        _n.BattleToken,
                        _n.PremiumUniversal,
                        _n.NaturalCover,
                        _n.BpCoin,
                        _n.BattlePassSelectToken,
                        _n.BattlaPassFinalAchievement,
                        _n.BattleBadge,
                        _n.BonusX5,
                        _n.CrewBonusX3,
                        _n.NewYearFillers,
                        _n.NewYearInvoice,
                        _n.EpicSelectToken,
                        _n.Comp7TokenWeeklyReward,
                        _n.Comp7TokenCouponReward,
                        _n.BattleBoosterGift,
                        _n.CosmicLootboxCommon,
                        _n.CosmicLootboxSilver,
                    ],
                    hn = [_n.Gold, _n.Credits, _n.Crystal, _n.FreeXp],
                    vn = [_n.BattlePassPoints],
                    fn = [_n.PremiumPlus, _n.Premium],
                    bn = ['engravings', 'backgrounds'],
                    wn = ['engraving', 'background'],
                    Sn = (e, u = An.Small) => {
                        const t = e.name,
                            n = e.type,
                            r = e.value,
                            a = e.icon,
                            i = e.item,
                            s = e.dogTagType,
                            o = ((e) => {
                                switch (e) {
                                    case An.S600x450:
                                        return 'c_600x450';
                                    case An.S400x300:
                                        return 'c_400x300';
                                    case An.S296x222:
                                        return 'c_296x222';
                                    case An.S232x174:
                                        return 'c_232x174';
                                    case An.Big:
                                        return 'c_80x80';
                                    case An.Small:
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
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_plus_${r}`;
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}_${r}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${i}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${u}.${a}`;
                            case 'tokens':
                            case 'battleToken':
                                return ((e, u) => {
                                    switch (u) {
                                        case An.Big:
                                            return e.iconBig.replace('..', 'img://gui');
                                        case An.Small:
                                            return e.iconSmall.replace('..', 'img://gui');
                                        default:
                                            return `R.images.gui.maps.icons.quests.bonuses.${u}.${e.icon}`;
                                    }
                                })(e, u);
                            case 'lootBoxToken':
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
                                    const n = bn[e];
                                    if (n) {
                                        const r = R.images.gui.maps.icons.dogtags.$dyn(u).$dyn(n),
                                            a = r.$dyn(t);
                                        return a ? `${a}` : `${r.$dyn(wn[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(s, u, a);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${o}.${a}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${o}.${a}`;
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
                                return `R.images.gui.maps.icons.collectionItems.${o}.${a}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${u}.${t}`;
                        }
                    },
                    Rn = (e, u, t) => {
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
                    };
                let Tn;
                !(function (e) {
                    (e[(e.Earned = 0)] = 'Earned'), (e[(e.Next = 1)] = 'Next'), (e[(e.Future = 2)] = 'Future');
                })(Tn || (Tn = {}));
                const xn = {
                        balloonWrapper__hover: 'BirthdayBalloon_balloonWrapper__hover_a2',
                        balloon: 'BirthdayBalloon_balloon_93',
                        balloon__unburnable: 'BirthdayBalloon_balloon__unburnable_ea',
                        balloon__hover: 'BirthdayBalloon_balloon__hover_3a',
                    },
                    kn = { transform: 'translateY(0rem)', opacity: 1 },
                    Mn = { transform: 'translateY(-450rem)', opacity: 0 },
                    yn = { duration: 900, easing: (e) => --e * e * e + 1 },
                    Pn = ({ isUnburnable: e = !1 }) => {
                        const u = (0, a.useState)(!1),
                            t = u[0],
                            n = u[1],
                            r = (0, a.useState)(!1),
                            s = r[0],
                            o = r[1],
                            l = (0, a.useCallback)(() => {
                                n(!t);
                            }, [t]),
                            c = h()(xn.balloonWrapper, t && xn.balloonWrapper__hover),
                            E = h()(xn.balloon, e && xn.balloon__unburnable, t && xn.balloon__hover),
                            d = (0, Ou.useSpring)(() => ({ from: kn })),
                            _ = d[0],
                            m = d[1];
                        return (
                            (0, a.useEffect)(() => {
                                s && (m.start({ to: Mn, config: yn }), o(!1));
                            }, [m, s]),
                            i().createElement(
                                Ou.animated.div,
                                { style: _, onMouseEnter: l, onMouseLeave: l },
                                i().createElement(
                                    'div',
                                    { className: c },
                                    i().createElement('div', {
                                        className: E,
                                        onClick: () => {
                                            o(!0), U('gui_rb_rank_air_baloon_click');
                                        },
                                    }),
                                ),
                            )
                        );
                    };
                let Ln;
                !(function (e) {
                    (e.Medium = 'medium'), (e.Small = 'small');
                })(Ln || (Ln = {}));
                const Nn = { [Ln.Medium]: '114x160', [Ln.Small]: '80x110' },
                    On = 'Rank_base_7c',
                    In = 'Rank_back_5d',
                    Hn = 'Rank_info_37',
                    Un = 'Rank_shine_e1',
                    Wn = 'Rank_lock_01',
                    Gn = 'Rank_shield_3d',
                    $n = 'Rank_shield__next_b8',
                    zn = 'Rank_shield__future_5a',
                    Xn = 'Rank_rank_c1',
                    jn = 'Rank_rank__next_62',
                    Yn = 'Rank_rank__future_a2',
                    Vn = (0, j.Pi)(
                        ({ className: e, rankID: u, rankNumber: t, divisionID: n, state: r, isUnburnable: s }) => {
                            const o = T().mediaSize,
                                l = oe().model.root.get(),
                                c = l.currentRank,
                                E = l.maxRank,
                                d = c === u,
                                _ = h()(e, On),
                                m = u > E,
                                A = r === Tn.Earned,
                                F = r === Tn.Next,
                                D = r === Tn.Future,
                                B = o < b.Medium ? Ln.Small : Ln.Medium,
                                g = (0, a.useMemo)(
                                    () => ({
                                        backgroundImage: `url('R.images.gui.maps.icons.rankedBattles.ranks.c_${Nn[B]}.rank${n}_${t}')`,
                                    }),
                                    [n, t, B],
                                );
                            return i().createElement(
                                tu,
                                { args: { rankID: u, tooltipId: 'rankedBattlesRank' } },
                                i().createElement(
                                    'div',
                                    { className: _ },
                                    d &&
                                        i().createElement(qe, {
                                            text: R.strings.ranked_battles.rankedBattleMainView.divisions.currentRank(),
                                            className: Hn,
                                        }),
                                    !A && i().createElement('div', { className: In }),
                                    d && i().createElement(ut, { className: Un }),
                                    d && i().createElement(Pn, { isUnburnable: !0 }),
                                    i().createElement('div', { className: h()(Xn, D && Yn, F && jn), style: g }),
                                    s && i().createElement('div', { className: h()(Gn, D && zn, F && $n) }),
                                    m && i().createElement('div', { className: Wn }),
                                ),
                            );
                        },
                    ),
                    qn = {
                        base: 'RankBlock_base_39',
                        background: 'RankBlock_background_79',
                        rank: 'RankBlock_rank_5d',
                        steps: 'RankBlock_steps_7a',
                        steps__other: 'RankBlock_steps__other_ec',
                        rewardsBlock: 'RankBlock_rewardsBlock_93',
                        rewardsBlock__first: 'RankBlock_rewardsBlock__first_36',
                        rewardsPadding: 'RankBlock_rewardsPadding_ec',
                        rewardsPadding__hidden: 'RankBlock_rewardsPadding__hidden_93',
                        rewardsBackground: 'RankBlock_rewardsBackground_88',
                        rewardsBackground__hidden: 'RankBlock_rewardsBackground__hidden_b9',
                        rewards: 'RankBlock_rewards_f6',
                        rewards__next: 'RankBlock_rewards__next_7b',
                        rewardsTaken: 'RankBlock_rewardsTaken_a1',
                        rewardsTaken__visible: 'RankBlock_rewardsTaken__visible_16',
                        takenImage: 'RankBlock_takenImage_31',
                        takenText: 'RankBlock_takenText_e1',
                        rankInfo: 'RankBlock_rankInfo_12',
                        takeReward: 'RankBlock_takeReward_20',
                    },
                    Kn = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Qn() {
                    return (
                        (Qn =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Qn.apply(this, arguments)
                    );
                }
                const Zn = R.views.common.tooltip_window.simple_tooltip_content,
                    Jn = (e) => {
                        let u = e.children,
                            t = e.body,
                            n = e.header,
                            r = e.note,
                            s = e.alert,
                            o = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, Kn);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, o, { body: t, header: n, note: r, alert: s });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [s, t, n, r, o]);
                        return i().createElement(
                            Je,
                            Qn(
                                {
                                    contentId:
                                        ((E = null == o ? void 0 : o.hasHtmlContent),
                                        E ? Zn.SimpleTooltipHtmlContent('resId') : Zn.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var E;
                    };
                function er() {
                    return (
                        (er =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        er.apply(this, arguments)
                    );
                }
                const ur = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const n = i().createElement('div', { className: t }, e);
                        if (u.header || u.body) return i().createElement(Jn, u, n);
                        const r = u.contentId,
                            a = u.args,
                            s = null == a ? void 0 : a.contentId;
                        return r || s
                            ? i().createElement(Je, er({}, u, { contentId: r || s }), n)
                            : i().createElement(tu, u, n);
                    },
                    tr = {
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
                        timer: 'Reward_timer_d3',
                    },
                    nr = ({
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: n = An.Big,
                        special: r,
                        value: a,
                        valueType: s,
                        style: o,
                        className: l,
                        classNames: c,
                        tooltipArgs: E,
                        periodicIconTooltipArgs: d,
                    }) => {
                        const _ = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case Dn.BATTLE_BOOSTER:
                                    case Dn.BATTLE_BOOSTER_REPLACE:
                                        return Bn.BATTLE_BOOSTER;
                                }
                            })(r),
                            m = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case Dn.BATTLE_BOOSTER:
                                        return gn.BATTLE_BOOSTER;
                                    case Dn.BATTLE_BOOSTER_REPLACE:
                                        return gn.BATTLE_BOOSTER_REPLACE;
                                    case Dn.BUILT_IN_EQUIPMENT:
                                        return gn.BUILT_IN_EQUIPMENT;
                                    case Dn.EQUIPMENT_PLUS:
                                        return gn.EQUIPMENT_PLUS;
                                    case Dn.EQUIPMENT_TROPHY_BASIC:
                                        return gn.EQUIPMENT_TROPHY_BASIC;
                                    case Dn.EQUIPMENT_TROPHY_UPGRADED:
                                        return gn.EQUIPMENT_TROPHY_UPGRADED;
                                    case Dn.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return gn.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case Dn.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return gn.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case Dn.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return gn.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case Dn.PROGRESSION_STYLE_UPGRADED_1:
                                        return gn.PROGRESSION_STYLE_UPGRADED_1;
                                    case Dn.PROGRESSION_STYLE_UPGRADED_2:
                                        return gn.PROGRESSION_STYLE_UPGRADED_2;
                                    case Dn.PROGRESSION_STYLE_UPGRADED_3:
                                        return gn.PROGRESSION_STYLE_UPGRADED_3;
                                    case Dn.PROGRESSION_STYLE_UPGRADED_4:
                                        return gn.PROGRESSION_STYLE_UPGRADED_4;
                                }
                            })(r),
                            A = ((e, u) => {
                                if (void 0 === e) return null;
                                switch (u) {
                                    case Fn.MULTI: {
                                        const u = Number(e);
                                        return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                                    }
                                    case Fn.CURRENCY:
                                    case Fn.NUMBER:
                                        return i().createElement(Cn, { format: 'integral', value: Number(e) });
                                    case Fn.PREMIUM_PLUS: {
                                        const u = Number(e);
                                        return isNaN(u) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(a, s);
                        return i().createElement(
                            'div',
                            { className: h()(tr.base, tr[`base__${n}`], l), style: o },
                            i().createElement(
                                ur,
                                { tooltipArgs: E, className: tr.tooltipWrapper },
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement(
                                        'div',
                                        { className: h()(tr.image, null == c ? void 0 : c.image) },
                                        _ &&
                                            i().createElement('div', {
                                                className: h()(tr.highlight, null == c ? void 0 : c.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${_}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            i().createElement('div', {
                                                className: h()(tr.icon, null == c ? void 0 : c.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        m &&
                                            i().createElement('div', {
                                                className: h()(tr.overlay, null == c ? void 0 : c.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${m}_overlay)`,
                                                },
                                            }),
                                    ),
                                    A &&
                                        i().createElement(
                                            'div',
                                            {
                                                className: h()(
                                                    tr.info,
                                                    tr[`info__${e}`],
                                                    s === Fn.MULTI && tr.info__multi,
                                                    null == c ? void 0 : c.info,
                                                ),
                                            },
                                            A,
                                        ),
                                ),
                            ),
                            t &&
                                i().createElement(
                                    ur,
                                    { tooltipArgs: d },
                                    i().createElement('div', {
                                        className: h()(tr.timer, null == c ? void 0 : c.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    rr = {
                        base: 'Rewards_base_6c',
                        base__column: 'Rewards_base__column_d3',
                        reward: 'Rewards_reward_26',
                    };
                function ar() {
                    return (
                        (ar =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ar.apply(this, arguments)
                    );
                }
                const ir = (0, a.memo)(({ data: e, isVertical: u }) => {
                    const t = T().mediaSize <= b.Small,
                        n = h()(rr.base, u && rr.base__column);
                    return i().createElement(
                        'div',
                        { className: n },
                        e.map((e, u) =>
                            i().createElement(
                                'div',
                                { key: u, className: h()(rr.reward, rr[`reward__${u}`]) },
                                i().createElement(
                                    'div',
                                    { className: rr.rewardInner },
                                    i().createElement(
                                        nr,
                                        ar({ size: t ? An.Small : An.Big, image: t ? e.smallImage : e.bigImage }, e),
                                    ),
                                ),
                            ),
                        ),
                    );
                });
                let sr;
                !(function (e) {
                    (e[(e.Small = 10)] = 'Small'), (e[(e.Medium = 14)] = 'Medium'), (e[(e.Big = 20)] = 'Big');
                })(sr || (sr = {}));
                const or = 'Stage_base_90',
                    lr = 'Stage_stage_38',
                    cr = 'Stage_stage__future_96',
                    Er = (0, j.Pi)(({ className: e, totalCount: u, earnedCount: t }) => {
                        const n = ((e) => {
                                switch (!0) {
                                    case e < b.Medium:
                                        return sr.Small;
                                    case e > b.Medium:
                                        return sr.Big;
                                    default:
                                        return sr.Medium;
                                }
                            })(T().mediaSize),
                            r = { '--itemWidth': n * (u / 2 + 1) + 'rem' },
                            a = h()(e, or);
                        return i().createElement(
                            tu,
                            { args: { tooltipId: 'rankedStep' } },
                            i().createElement(
                                'div',
                                { className: a, style: r },
                                En(u, (e) => i().createElement('div', { key: e, className: h()(lr, e >= t && cr) })),
                            ),
                        );
                    }),
                    dr = (0, j.Pi)(({ className: e, rank: u, index: t }) => {
                        const n = oe().model.root.get(),
                            r = n.selectedDivision,
                            s = n.currentRank,
                            o = n.currentStep,
                            l = n.maxRank,
                            c = u.rankID,
                            E = u.stepsToRank,
                            d = u.isUnburnable,
                            _ = u.rewards,
                            m = ((e, u) => {
                                switch (!0) {
                                    case e >= u:
                                        return Tn.Earned;
                                    case e + 1 === u:
                                        return Tn.Next;
                                    default:
                                        return Tn.Future;
                                }
                            })(s, c),
                            A = l >= c,
                            F = l + 1 === c,
                            D = ((e, u, t) => {
                                switch (e) {
                                    case Tn.Earned:
                                        return u;
                                    case Tn.Next:
                                        return t;
                                    default:
                                        return 0;
                                }
                            })(m, E, o),
                            B = ((e) =>
                                e.map(({ value: e }) => {
                                    const u = e.item,
                                        t = e.name,
                                        n = e.value,
                                        r = e.overlayType,
                                        a = e.tooltipId,
                                        i = e.tooltipContentId;
                                    return {
                                        name: u || t,
                                        smallImage: Sn(e, An.Small),
                                        bigImage: Sn(e, An.Big),
                                        special: r,
                                        value: n,
                                        valueType:
                                            ((s = t),
                                            pn.includes(s)
                                                ? Fn.MULTI
                                                : hn.includes(s)
                                                  ? Fn.CURRENCY
                                                  : vn.includes(s)
                                                    ? Fn.NUMBER
                                                    : fn.includes(s)
                                                      ? Fn.PREMIUM_PLUS
                                                      : Fn.STRING),
                                        tooltipArgs: Rn({ tooltipId: a }, Number(i), { ignoreShowDelay: !0 }),
                                    };
                                    var s;
                                }))(_.items),
                            g = 0 === l && 1 === c,
                            C = (0, a.useMemo)(() => ({ data: B, isVertical: 2 === B.length }), [B]),
                            p = h()(e, qn.base, F && qn.base__nextReward),
                            v = h()(qn.rewardsBlock, 0 === t && qn.rewardsBlock__first),
                            f = (0, Ou.useSpring)(_u);
                        return i().createElement(
                            Ou.animated.div,
                            { style: f, className: qn.base },
                            i().createElement(
                                'div',
                                { className: p },
                                F && i().createElement('div', { className: qn.background }),
                                i().createElement(
                                    'div',
                                    { className: qn.rankInfo },
                                    g &&
                                        i().createElement(qe, {
                                            text: R.strings.ranked_battles.rankedBattleMainView.divisions.takeRank(),
                                            className: qn.takeReward,
                                            color: 'CREAM',
                                            variant: 'paragraph-P12',
                                            variant_md: 'paragraph-P14',
                                        }),
                                    i().createElement(Vn, {
                                        className: qn.rank,
                                        rankID: c,
                                        rankNumber: t + 1,
                                        divisionID: r,
                                        state: m,
                                        isUnburnable: d,
                                    }),
                                    i().createElement(Er, {
                                        className: h()(qn.steps, t > 0 && qn.steps__other),
                                        totalCount: E,
                                        earnedCount: D,
                                    }),
                                ),
                                i().createElement(
                                    'div',
                                    { className: v },
                                    i().createElement('div', {
                                        className: h()(qn.rewardsPadding, (F || !A) && qn.rewardsPadding__hidden),
                                    }),
                                    (F || !A) &&
                                        i().createElement(
                                            'div',
                                            { className: h()(qn.rewards, F && qn.rewards__next) },
                                            i().createElement(ir, C),
                                        ),
                                    i().createElement(
                                        'div',
                                        { className: h()(qn.rewardsBackground, !A && qn.rewardsBackground__hidden) },
                                        !F &&
                                            A &&
                                            i().createElement(
                                                'div',
                                                { className: qn.rewards },
                                                i().createElement(ir, C),
                                            ),
                                        i().createElement(
                                            'div',
                                            { className: h()(qn.rewardsTaken, A && qn.rewardsTaken__visible) },
                                            i().createElement('div', { className: qn.takenImage }),
                                            i().createElement(qe, {
                                                text: R.strings.ranked_battles.rankedBattlesCyclesView.currentCycle.item.awardRecieved(),
                                                className: qn.takenText,
                                                color: 'GREEN_BRIGHT',
                                                variant: 'paragraph-P12',
                                                variant_md: 'paragraph-P14',
                                            }),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    }),
                    _r = 'RanksProgression_base_00',
                    mr = 'RanksProgression_content_02',
                    Ar = 'RanksProgression_scroll_e7',
                    Fr = 'RanksProgression_horizontalWrapper_2d',
                    Dr = (0, j.Pi)(function ({ className: e }) {
                        var u;
                        const t = oe().model,
                            n = t.root.get().selectedDivision,
                            r = nu(t.divisions.get(), n),
                            s = null != (u = null == r ? void 0 : r.ranks.items) ? u : [],
                            l = (0, dn.Om)(
                                (e) => {
                                    const u = nu(s, e);
                                    if (!u) throw new Error(`rank item with index ${e} was not found`);
                                    return Object.assign({}, u);
                                },
                                { equals: ue },
                            ),
                            c = St();
                        !(function (e, u) {
                            const t = e.contentRef,
                                n = e.wrapperRef,
                                r = e.scrollPosition,
                                i = e.clampPosition,
                                s = e.animationScroll,
                                l = e.events,
                                c = (0, a.useState)(cn),
                                E = c[0],
                                d = c[1];
                            (0, a.useEffect)(() => {
                                const e = t.current;
                                e && (e.style.cursor = 'dragging' === E.type ? 'move' : 'grab');
                            }, [t, E.type]),
                                (0, a.useEffect)(() => {
                                    if ('dragging' !== E.type) return;
                                    const e = o.O.client.events.mouse.move(([e, a]) => {
                                            const o = t.current,
                                                l = n.current;
                                            if (!o || !l) return;
                                            if ('inside' === a && e.clientX < 0) return;
                                            const c = 'inside' === a ? e.clientX : e.clientX - l.offsetLeft,
                                                d = E.positionFrom - c,
                                                _ = E.previousScrollPosition + d;
                                            r.start(
                                                Object.assign(
                                                    {
                                                        scrollPosition: i(o, _),
                                                        from: { scrollPosition: s.scrollPosition.get() },
                                                    },
                                                    u && { config: u },
                                                ),
                                            );
                                        }),
                                        a = o.O.client.events.mouse.up(function () {
                                            d({ type: 'scrollingToEnd' });
                                        });
                                    return () => {
                                        e(), a();
                                    };
                                }, [s.scrollPosition, i, t, E, r, n, u]),
                                (0, a.useEffect)(() => {
                                    if ('scrollingToEnd' !== E.type) return;
                                    const e = () => {
                                        d(cn);
                                    };
                                    return s.scrollPosition.idle && e(), l.on('rest', e), () => l.off('rest', e);
                                }, [s.scrollPosition, E.type, l]),
                                (0, a.useEffect)(() => {
                                    const e = t.current;
                                    if (!e) return;
                                    const u = (e) => {
                                        d({
                                            type: 'dragging',
                                            positionFrom: e.screenX,
                                            previousScrollPosition: s.scrollPosition.get(),
                                        });
                                    };
                                    return (
                                        e.addEventListener('mousedown', u), () => e.removeEventListener('mousedown', u)
                                    );
                                }, [s.scrollPosition, t]);
                        })(c);
                        const E = (0, Ou.useSpring)(_u);
                        return i().createElement(
                            Ou.animated.div,
                            { style: E, className: h()(e, _r) },
                            i().createElement(
                                ln.Horizontal.Area,
                                { api: c, classNames: { content: mr, wrapper: Fr }, className: Ar },
                                En(s.length, (e) => i().createElement(dr, { key: `${n}_${e}`, rank: l(e), index: e })),
                            ),
                        );
                    }),
                    Br = 'EfficiencyBlock_base_7e',
                    gr = 'EfficiencyBlock_container_23',
                    Cr = 'EfficiencyBlock_icon_a3',
                    pr = 'EfficiencyBlock_efficiency_f2',
                    hr = 'EfficiencyBlock_description_f7',
                    vr = ({ type: e, value: u }) => {
                        const t = {
                                backgroundImage: `url('R.images.gui.maps.icons.rankedBattles.progression.stats.${e}')`,
                            },
                            n = R.strings.tooltips.rankedBattleView.stats.$dyn(e);
                        return i().createElement(
                            Jn,
                            { header: n.$dyn('header'), body: n.$dyn('body') },
                            i().createElement(
                                'div',
                                { className: Br },
                                i().createElement(
                                    'div',
                                    { className: gr },
                                    i().createElement('div', { className: Cr, style: t }),
                                    i().createElement(qe, {
                                        text: u,
                                        className: pr,
                                        color: 'WHITE',
                                        variant: 'heading-H24',
                                    }),
                                ),
                                i().createElement(qe, {
                                    text: R.strings.ranked_battles.progression.stats.$dyn(e),
                                    className: hr,
                                    color: 'PAR',
                                    variant: 'paragraph-P12',
                                    variant_lg: 'paragraph-P16',
                                }),
                            ),
                        );
                    },
                    fr = 'Statistics_base_7d',
                    br = (0, j.Pi)(({ className: e }) => {
                        var u;
                        const t = oe().model,
                            n = t.root.get(),
                            r = n.selectedDivision,
                            a = n.selectedState === X.Final,
                            s = t.statistics.get(),
                            o = s.totalEfficiency,
                            l = s.stagesCount,
                            c = s.battlesCount,
                            E = h()(e, fr),
                            d = null != (u = nu(t.statisticsByDivision.get(), r)) ? u : '---';
                        return i().createElement(
                            'div',
                            { className: E },
                            !a && i().createElement(vr, { type: su.DivisionEfficiency, value: d }),
                            i().createElement(vr, { type: su.SeasonEfficiency, value: o }),
                            a &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement(vr, { type: su.TotalStages, value: `${l}` }),
                                    i().createElement(vr, { type: su.TotalBattles, value: `${c}` }),
                                ),
                        );
                    }),
                    wr = (0, j.Pi)(({ isProgressionStateSelected: e, onHandleProgressionStateChange: u }) =>
                        i().createElement(
                            'div',
                            { className: At.base },
                            i().createElement(mt, null),
                            i().createElement(
                                'div',
                                { className: At.widgetWrapper },
                                e
                                    ? i().createElement(
                                          i().Fragment,
                                          null,
                                          i().createElement(Nu, null),
                                          i().createElement(Dr, null),
                                      )
                                    : i().createElement(
                                          'div',
                                          { className: At.finalState },
                                          i().createElement(rt, null),
                                          i().createElement(br, {
                                              className: h()(At.statistics, At.statistics__final),
                                          }),
                                      ),
                            ),
                            e
                                ? i().createElement(br, { className: At.statistics })
                                : i().createElement(
                                      'div',
                                      { className: At.toRewardButton },
                                      i().createElement(
                                          _e,
                                          { type: ce.primary, size: Ee.medium, mixClass: At.button, onClick: u },
                                          R.strings.ranked_battles.rankedSeasonCompleted.toRewards(),
                                      ),
                                  ),
                        ),
                    ),
                    Sr = (0, a.memo)(wr),
                    Rr = { base: 'RankedProgressionViewApp_base_3d' },
                    Tr = R.strings.ranked_battles,
                    xr = (0, j.Pi)(() => {
                        const e = oe(),
                            u = e.model,
                            t = e.controls,
                            n = u.root.get().selectedState === X.Final,
                            r = (0, a.useState)(!n),
                            s = r[0],
                            o = r[1],
                            l = (s && !n) || (!s && n),
                            c = () => {
                                o(!s);
                            };
                        return i().createElement(
                            'div',
                            { className: Rr.base },
                            l
                                ? i().createElement(
                                      i().Fragment,
                                      null,
                                      i().createElement(
                                          'div',
                                          { className: Q },
                                          i().createElement(z, {
                                              caption: Tr.rankedBattlePage.aboutBtn(),
                                              type: 'info',
                                              side: 'left',
                                              onClick: t.onAbout,
                                          }),
                                      ),
                                      i().createElement(J, { onClose: t.onClose }),
                                  )
                                : i().createElement(
                                      'div',
                                      { className: Q },
                                      i().createElement(
                                          'div',
                                          { className: Rr.close },
                                          i().createElement(z, {
                                              caption: Tr.rankedBattleView.closeBtn(),
                                              goto: Tr.rankedSeasonCompleted.toFinalStatistic(),
                                              side: 'left',
                                              type: 'back',
                                              onClick: c,
                                          }),
                                      ),
                                  ),
                            i().createElement(Sr, { isProgressionStateSelected: s, onHandleProgressionStateChange: c }),
                        );
                    });
                engine.whenReady.then(() => {
                    H().render(
                        i().createElement(se, null, i().createElement(O, null, i().createElement(xr, null))),
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
                for (o = 0; o < deferred.length; o++) {
                    for (var [u, t, n] = deferred[o], a = !0, i = 0; i < u.length; i++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[i]))
                            ? u.splice(i--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
                        deferred.splice(o--, 1);
                        var s = t();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > n; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [u, t, n];
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
        (__webpack_require__.j = 236),
        (() => {
            var e = { 236: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        r,
                        [a, i, s] = t,
                        o = 0;
                    if (a.some((u) => 0 !== e[u])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (u && u(t); o < a.length; o++)
                        (r = a[o]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [976], () => __webpack_require__(931));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
