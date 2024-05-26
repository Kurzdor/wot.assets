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
            5067: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => V });
                var a = {};
                t.r(a), t.d(a, { mouse: () => c, onResize: () => s });
                var r = {};
                t.r(r),
                    t.d(r, {
                        events: () => a,
                        getMouseGlobalPosition: () => A,
                        getSize: () => d,
                        graphicsQuality: () => F,
                    });
                var n = {};
                t.r(n), t.d(n, { getBgUrl: () => m, getTextureUrl: () => _ });
                var i = {};
                function l(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                function o(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.r(i),
                    t.d(i, {
                        addModelObserver: () => f,
                        addPreloadTexture: () => b,
                        children: () => n,
                        displayStatus: () => D,
                        displayStatusIs: () => W,
                        events: () => B,
                        extraSize: () => $,
                        forceTriggerMouseMove: () => H,
                        freezeTextureBeforeResize: () => L,
                        getBrowserTexturePath: () => w,
                        getDisplayStatus: () => P,
                        getScale: () => T,
                        getSize: () => y,
                        getViewGlobalPosition: () => S,
                        isEventHandled: () => I,
                        isFocused: () => N,
                        pxToRem: () => M,
                        remToPx: () => O,
                        resize: () => x,
                        sendEvent: () => h,
                        setAnimateWindow: () => R,
                        setEventHandled: () => k,
                        setInputPaddingsRem: () => v,
                        setSidePaddingsRem: () => p,
                        whenTutorialReady: () => U,
                    });
                const s = l('clientResized'),
                    E = { down: l('mousedown'), up: l('mouseup'), move: l('mousemove') },
                    c = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function u() {
                            e.enabled && o(!1);
                        }
                        function t() {
                            e.enabled && o(!0);
                        }
                        function a() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', u),
                                      document.body.removeEventListener('mouseleave', t))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', u),
                                      document.body.addEventListener('mouseleave', t))
                                : o(!1);
                        }
                        const r = ['down', 'up', 'move'].reduce(
                            (u, t) => (
                                (u[t] = (function (u) {
                                    return (t) => {
                                        e.listeners += 1;
                                        let r = !0;
                                        const n = `mouse${u}`,
                                            i = E[u]((e) => t([e, 'outside']));
                                        function l(e) {
                                            t([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(n, l),
                                            a(),
                                            () => {
                                                r &&
                                                    (i(),
                                                    window.removeEventListener(n, l),
                                                    (e.listeners -= 1),
                                                    a(),
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
                                (e.enabled = !1), a();
                            },
                            enable() {
                                (e.enabled = !0), a();
                            },
                            enableOutside() {
                                e.enabled && o(!0);
                            },
                            disableOutside() {
                                e.enabled && o(!1);
                            },
                        });
                    })();
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function A(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const F = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function _(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function m(e, u, t) {
                    return `url(${_(e, u, t)})`;
                }
                const D = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    B = {
                        onTextureFrozen: l('self.onTextureFrozen'),
                        onTextureReady: l('self.onTextureReady'),
                        onDomBuilt: l('self.onDomBuilt'),
                        onLoaded: l('self.onLoaded'),
                        onDisplayChanged: l('self.onShowingStatusChanged'),
                        onFocusUpdated: l('self.onFocusChanged'),
                        children: {
                            onAdded: l('children.onAdded'),
                            onLoaded: l('children.onLoaded'),
                            onRemoved: l('children.onRemoved'),
                            onAttached: l('children.onAttached'),
                            onTextureReady: l('children.onTextureReady'),
                            onRequestPosition: l('children.requestPosition'),
                        },
                    },
                    C = ['args'],
                    g = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                n = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        r = {},
                                        n = Object.keys(e);
                                    for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(u, C);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, n, {
                                          arguments:
                                              ((a = r),
                                              Object.entries(a).map(([e, u]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, n));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    h = {
                        close(e) {
                            g('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            g(64);
                        },
                        move(e) {
                            g(16, { isMouseEvent: !0, on: e });
                        },
                    };
                function b(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function v(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function w(e, u, t, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, a);
                }
                function f(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function p(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function y(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function x(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function S(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: O(u.x), y: O(u.y) };
                }
                function L() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function T() {
                    return viewEnv.getScale();
                }
                function M(e) {
                    return viewEnv.pxToRem(e);
                }
                function O(e) {
                    return viewEnv.remToPx(e);
                }
                function R(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function N() {
                    return viewEnv.isFocused();
                }
                function k() {
                    return viewEnv.setEventHandled();
                }
                function I() {
                    return viewEnv.isEventHandled();
                }
                function H() {
                    viewEnv.forceTriggerMouseMove();
                }
                function P() {
                    return viewEnv.getShowingStatus();
                }
                const W = Object.keys(D).reduce((e, u) => ((e[u] = () => viewEnv.getShowingStatus() === D[u]), e), {}),
                    $ = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    U = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : B.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    V = { view: i, client: r };
            },
            5521: (e, u, t) => {
                'use strict';
                let a, r;
                t.d(u, { n: () => a }),
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
                    })(a || (a = {})),
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
                t.d(u, { Z: () => n });
                var a = t(5067);
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
                        const n = a.O.view.addModelObserver(e, t, r);
                        return (
                            n > 0
                                ? ((this._callbacks[n] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(n) : (this._views[t] = [n])))
                                : console.error("Can't add callback for model:", e),
                            n
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
                            const a = this._callbacks[t];
                            void 0 !== a && a(e, u);
                        });
                    }
                }
                r.__instance = void 0;
                const n = r;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4179);
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
            4179: (e, u, t) => {
                'use strict';
                t.d(u, { Sw: () => n.Z, B3: () => E, Z5: () => i, B0: () => o, ry: () => C });
                class a {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: t }) => {
                                    let a = e.target;
                                    do {
                                        if (a === u) return;
                                        a = a.parentNode;
                                    } while (a);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return a.__instance || (a.__instance = new a()), a.__instance;
                    }
                    register(e, u) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: u });
                    }
                    unregister(e, u) {
                        const t = e,
                            a = u;
                        (this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== a)),
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
                a.__instance = void 0;
                const r = a;
                var n = t(1358);
                const i = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    l = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    };
                let o;
                var s;
                ((s = o || (o = {}))[(s.UNDEFINED = 0)] = 'UNDEFINED'),
                    (s[(s.TOOLTIP = 1)] = 'TOOLTIP'),
                    (s[(s.POP_OVER = 2)] = 'POP_OVER'),
                    (s[(s.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (s[(s.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (s[(s.MOVE = 16)] = 'MOVE'),
                    (s[(s.CLOSE = 32)] = 'CLOSE'),
                    (s[(s.MINIMIZE = 64)] = 'MINIMIZE');
                const E = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    A = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var F = t(5521),
                    _ = t(5067);
                const m = ['args'];
                function D(e, u, t, a, r, n, i) {
                    try {
                        var l = e[n](i),
                            o = l.value;
                    } catch (e) {
                        return void t(e);
                    }
                    l.done ? u(o) : Promise.resolve(o).then(a, r);
                }
                const B = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                    return new Promise(function (a, r) {
                                        var n = e.apply(u, t);
                                        function i(e) {
                                            D(n, a, r, i, l, 'next', e);
                                        }
                                        function l(e) {
                                            D(n, a, r, i, l, 'throw', e);
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
                                n = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        a,
                                        r = {},
                                        n = Object.keys(e);
                                    for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(u, m);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, n, {
                                          arguments:
                                              ((a = r),
                                              Object.entries(a).map(([e, u]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, n));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var a;
                    },
                    h = () => g(o.CLOSE),
                    b = (e, u) => {
                        e.keyCode === F.n.ESCAPE && u();
                    };
                var v = t(7572);
                const w = r.instance,
                    f = {
                        DataTracker: n.Z,
                        ViewModel: v.Z,
                        ViewEventType: o,
                        NumberFormatType: E,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: A,
                        makeGlobalBoundingBox: B,
                        sendMoveEvent: (e) => g(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: () => g(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            g(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, a, r = R.invalid('resId'), n) => {
                            const i = _.O.view.getViewGlobalPosition(),
                                l = t.getBoundingClientRect(),
                                s = l.x,
                                E = l.y,
                                c = l.width,
                                d = l.height,
                                A = {
                                    x: _.O.view.pxToRem(s) + i.x,
                                    y: _.O.view.pxToRem(E) + i.y,
                                    width: _.O.view.pxToRem(c),
                                    height: _.O.view.pxToRem(d),
                                };
                            g(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: B(A),
                                on: !0,
                                args: n,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => b(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            b(e, h);
                        },
                        handleViewEvent: g,
                        onBindingsReady: C,
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
                            for (const a in u)
                                if (Object.prototype.hasOwnProperty.call(u, a)) {
                                    const r = Object.prototype.toString.call(u[a]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = u[a];
                                        t[a] = [];
                                        for (let u = 0; u < r.length; u++) t[a].push({ value: e(r[u].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[a] = e(u[a]))
                                            : (t[a] = u[a]);
                                }
                            return t;
                        },
                        ClickOutsideManager: w,
                        SystemLocale: i,
                        UserLocale: l,
                    };
                window.ViewEnvHelper = f;
            },
            7589: (e, u, t) => {
                'use strict';
                var a = t(6179),
                    r = t.n(a);
                const n = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
                var i = t(5067);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var o;
                function s(e, u, t) {
                    const a = (function (e, u) {
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
                        n = Math.min(a, r);
                    return {
                        extraLarge: n === t.extraLarge.weight,
                        large: n === t.large.weight,
                        medium: n === t.medium.weight,
                        small: n === t.small.weight,
                        extraSmall: n === t.extraSmall.weight,
                        extraLargeWidth: a === t.extraLarge.weight,
                        largeWidth: a === t.large.weight,
                        mediumWidth: a === t.medium.weight,
                        smallWidth: a === t.small.weight,
                        extraSmallWidth: a === t.extraSmall.weight,
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
                })(o || (o = {}));
                const E = i.O.client.getSize('rem'),
                    c = E.width,
                    d = E.height,
                    A = Object.assign({ width: c, height: d }, s(c, d, l)),
                    F = (0, a.createContext)(A),
                    _ = ['children'],
                    m = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, _);
                        const r = (0, a.useContext)(F),
                            i = r.extraLarge,
                            l = r.large,
                            o = r.medium,
                            s = r.small,
                            E = r.extraSmall,
                            c = r.extraLargeWidth,
                            d = r.largeWidth,
                            A = r.mediumWidth,
                            m = r.smallWidth,
                            D = r.extraSmallWidth,
                            B = r.extraLargeHeight,
                            C = r.largeHeight,
                            g = r.mediumHeight,
                            h = r.smallHeight,
                            b = r.extraSmallHeight,
                            v = { extraLarge: B, large: C, medium: g, small: h, extraSmall: b };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && i) return u;
                            if (t.large && l) return u;
                            if (t.medium && o) return u;
                            if (t.small && s) return u;
                            if (t.extraSmall && E) return u;
                        } else {
                            if (t.extraLargeWidth && c) return n(u, t, v);
                            if (t.largeWidth && d) return n(u, t, v);
                            if (t.mediumWidth && A) return n(u, t, v);
                            if (t.smallWidth && m) return n(u, t, v);
                            if (t.extraSmallWidth && D) return n(u, t, v);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && B) return u;
                                if (t.largeHeight && C) return u;
                                if (t.mediumHeight && g) return u;
                                if (t.smallHeight && h) return u;
                                if (t.extraSmallHeight && b) return u;
                            }
                        }
                        return null;
                    };
                (m.defaultProps = {
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
                    (0, a.memo)(m);
                const D = (e) => {
                        const u = (0, a.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    B = (0, a.memo)(({ children: e }) => {
                        const u = (0, a.useContext)(F),
                            t = (0, a.useState)(u),
                            n = t[0],
                            o = t[1],
                            E = (0, a.useCallback)((e, u) => {
                                const t = i.O.view.pxToRem(e),
                                    a = i.O.view.pxToRem(u);
                                o(Object.assign({ width: t, height: a }, s(t, a, l)));
                            }, []);
                        D(() => {
                            engine.on('clientResized', E);
                        }),
                            (0, a.useEffect)(() => () => engine.off('clientResized', E), [E]);
                        const c = (0, a.useMemo)(() => Object.assign({}, n), [n]);
                        return r().createElement(F.Provider, { value: c }, e);
                    });
                var C = t(6483),
                    g = t.n(C),
                    h = t(926),
                    b = t.n(h);
                let v, w, f;
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
                    })(f || (f = {}));
                const p = ['children', 'className'];
                function y() {
                    return (
                        (y =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        y.apply(this, arguments)
                    );
                }
                const x = {
                        [w.ExtraSmall]: '',
                        [w.Small]: b().SMALL_WIDTH,
                        [w.Medium]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH}`,
                        [w.Large]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH} ${b().LARGE_WIDTH}`,
                        [w.ExtraLarge]: `${b().SMALL_WIDTH} ${b().MEDIUM_WIDTH} ${b().LARGE_WIDTH} ${b().EXTRA_LARGE_WIDTH}`,
                    },
                    S = {
                        [f.ExtraSmall]: '',
                        [f.Small]: b().SMALL_HEIGHT,
                        [f.Medium]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT}`,
                        [f.Large]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT} ${b().LARGE_HEIGHT}`,
                        [f.ExtraLarge]: `${b().SMALL_HEIGHT} ${b().MEDIUM_HEIGHT} ${b().LARGE_HEIGHT} ${b().EXTRA_LARGE_HEIGHT}`,
                    },
                    L = {
                        [v.ExtraSmall]: '',
                        [v.Small]: b().SMALL,
                        [v.Medium]: `${b().SMALL} ${b().MEDIUM}`,
                        [v.Large]: `${b().SMALL} ${b().MEDIUM} ${b().LARGE}`,
                        [v.ExtraLarge]: `${b().SMALL} ${b().MEDIUM} ${b().LARGE} ${b().EXTRA_LARGE}`,
                    },
                    T = (e) => {
                        let u = e.children,
                            t = e.className,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, p);
                        const i = (() => {
                                const e = (0, a.useContext)(F),
                                    u = e.width,
                                    t = e.height,
                                    r = ((e) => {
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
                                                return (
                                                    console.error('Unreachable media context resolution'), v.ExtraSmall
                                                );
                                        }
                                    })(e),
                                    n = ((e) => {
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
                                                return (
                                                    console.error('Unreachable media context resolution'), w.ExtraSmall
                                                );
                                        }
                                    })(e),
                                    i = ((e) => {
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
                                                return (
                                                    console.error('Unreachable media context resolution'), f.ExtraSmall
                                                );
                                        }
                                    })(e);
                                return {
                                    mediaSize: r,
                                    mediaWidth: n,
                                    mediaHeight: i,
                                    remScreenWidth: u,
                                    remScreenHeight: t,
                                };
                            })(),
                            l = i.mediaWidth,
                            o = i.mediaHeight,
                            s = i.mediaSize;
                        return r().createElement('div', y({ className: g()(t, x[l], S[o], L[s]) }, n), u);
                    },
                    M = ['children'],
                    O = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, M);
                        return r().createElement(B, null, r().createElement(T, t, u));
                    };
                var N = t(493),
                    k = t.n(N);
                const I = (e = 1) => {
                        const u = new Error().stack;
                        let t,
                            a = R.invalid('resId');
                        return (
                            u &&
                                ((t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                window.__feature &&
                                    window.__feature !== t &&
                                    window.subViews[t] &&
                                    (a = window.subViews[t].id)),
                            { caller: t, stack: u, resId: a }
                        );
                    },
                    H = (e, u) => e.split('.').reduce((e, u) => e && e[u], u);
                var P = t(4179);
                const W = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    $ = (e, u) => (e.length > 0 ? `${e}.${u}` : u),
                    U = P.Sw.instance;
                let V;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(V || (V = {}));
                const G = (e = 'model', u = V.Deep) => {
                        const t = (0, a.useState)(0),
                            r = (t[0], t[1]),
                            n = (0, a.useMemo)(() => I(), []),
                            i = n.caller,
                            l = n.resId,
                            o = (0, a.useMemo)(
                                () => (window.__feature && window.__feature !== i ? `subViews.${i}.${e}` : e),
                                [i, e],
                            ),
                            s = (0, a.useState)(() =>
                                ((e) => {
                                    const u = H(e, window);
                                    for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                    return W(u) ? u.value : u;
                                })(
                                    ((e) =>
                                        ((e, u) =>
                                            e.split('.').reduce((e, u) => {
                                                const t = H(`${e}.${u}`, window);
                                                return W(t) ? ((e, u) => `${e}.${u}.value`)(e, u) : `${e}.${u}`;
                                            }))(e))(o),
                                ),
                            ),
                            E = s[0],
                            c = s[1],
                            d = (0, a.useRef)(-1);
                        return (
                            D(() => {
                                if (
                                    ('boolean' == typeof u &&
                                        ((u = u ? V.Deep : V.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    u !== V.None)
                                ) {
                                    const t = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            u === V.Deep
                                                ? (e === E && r((e) => e + 1), c(e))
                                                : c(Object.assign([], e));
                                        },
                                        a = ((e) => {
                                            const u = ((e) => {
                                                    const u = I(),
                                                        t = u.caller,
                                                        a = u.resId,
                                                        r =
                                                            window.__feature && window.__feature !== t && t
                                                                ? `subViews.${t}`
                                                                : '';
                                                    return { modelPrefix: r, modelPath: $(r, ''), resId: a };
                                                })(),
                                                t = u.modelPrefix,
                                                a = e.split('.');
                                            if (a.length > 0) {
                                                const e = [a[0]];
                                                return (
                                                    a.reduce((u, a) => {
                                                        const r = H($(t, `${u}.${a}`), window);
                                                        return W(r)
                                                            ? (e.push(r.id), `${u}.${a}.value`)
                                                            : (e.push(a), `${u}.${a}`);
                                                    }),
                                                    e.reduce((e, u) => e + '.' + u)
                                                );
                                            }
                                            return '';
                                        })(e);
                                    d.current = U.addCallback(a, t, l, u === V.Deep);
                                }
                            }),
                            (0, a.useEffect)(() => {
                                if (u !== V.None)
                                    return () => {
                                        U.removeCallback(d.current, l);
                                    };
                            }, [l, u]),
                            E
                        );
                    },
                    q = 'Caption_line_63',
                    z = (0, a.memo)(({ classMix: e }) => {
                        const u = g()(q, 'Caption_line__right_c4'),
                            t = g()('Caption_base_18', e);
                        return r().createElement(
                            'div',
                            { className: t },
                            r().createElement('div', { className: 'Caption_flare_20' }),
                            r().createElement('div', { className: q }),
                            r().createElement(
                                'div',
                                { className: 'Caption_label_b8' },
                                r().createElement('span', null, R.strings.hb_battle.eventStats.tableCaption()),
                            ),
                            r().createElement('div', { className: u }),
                        );
                    }),
                    j = (0, a.memo)(({ mapName: e, missionIcon: u, missionTitle: t, missionTask: n }) => {
                        const i = (0, a.useMemo)(() => ({ backgroundImage: `url('${u}')` }), [u]);
                        return r().createElement(
                            'div',
                            { className: 'Header_base_27' },
                            r().createElement(
                                'div',
                                { className: 'Header_mapInfo_ae' },
                                r().createElement('span', { className: 'Header_mapName_ea' }, e),
                            ),
                            r().createElement('div', { className: 'Header_icon_c2', style: i }),
                            r().createElement(
                                'div',
                                { className: 'Header_battleInfo_ca' },
                                r().createElement('span', { className: 'Header_battleMode_5f' }, t),
                                r().createElement('span', { className: 'Header_battleTask_0b' }, n),
                            ),
                        );
                    });
                let K, Y;
                var X;
                function Z(e) {
                    engine.call('PlaySound', e);
                }
                let Q, J, ee, ue, te;
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(K || (K = {})),
                    new RegExp(
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
                    ),
                    ((X = Y || (Y = {})).SHORT_DATE = 'short-date'),
                    (X.SHORT_TIME = 'short-time'),
                    (X.SHORT_DATE_TIME = 'short-date-time'),
                    (X.FULL_DATE = 'full-date'),
                    (X.FULL_DATE_TIME = 'full-date-time'),
                    (X.MONTH = 'month'),
                    (X.MONTH_DATE = 'month-date'),
                    (X.DATE_MONTH = 'date-month'),
                    (X.MONTH_YEAR = 'month-year'),
                    (X.WEEK_DAY = 'week-day'),
                    (X.WEEK_DAY_TIME = 'week-day-time'),
                    (X.YEAR = 'year'),
                    (X.DATE_YEAR = 'date-year'),
                    Date.now(),
                    P.Sw.instance,
                    (function (e) {
                        (e.TabWindow = 'tabWindow'), (e.LeaderBoard = 'leaderBoard');
                    })(Q || (Q = {})),
                    (function (e) {
                        (e.Big = 'big'), (e.Small = 'small'), (e.Medium = 'medium');
                    })(J || (J = {})),
                    (function (e) {
                        (e.None = 'none'),
                            (e.Engineer = 'engineer'),
                            (e.Aviation = 'aviation'),
                            (e.Artillery = 'artillery');
                    })(ee || (ee = {})),
                    (function (e) {
                        (e.NotBanned = 'notBanned'), (e.Warned = 'warned'), (e.Banned = 'banned');
                    })(ue || (ue = {})),
                    (function (e) {
                        (e.Kills = 'kills'), (e.Damage = 'damage'), (e.Assist = 'assist'), (e.Blocked = 'blocked');
                    })(te || (te = {}));
                const ae = {
                        base: 'SortHelper_base_5a',
                        base__active: 'SortHelper_base__active_ae',
                        arrow: 'SortHelper_arrow_5f',
                        base__sortAsc: 'SortHelper_base__sortAsc_7b',
                    },
                    re = 'vehicle',
                    ne = 'role',
                    ie = (0, a.memo)(
                        ({
                            onClick: e,
                            classMix: u,
                            isSelected: t,
                            isEnabled: n,
                            sortDirection: i = !0,
                            column: l,
                            children: o,
                        }) => {
                            const s = (0, a.useCallback)(() => {
                                    n && (e(l), Z(R.sounds.play()));
                                }, [e, l, n]),
                                E = (0, a.useCallback)(() => {
                                    n && Z(R.sounds.highlight());
                                }, [n]),
                                c = g()(
                                    ae.base,
                                    n && ae.base__active,
                                    u,
                                    t && ae.base__selected,
                                    i && ae.base__sortAsc,
                                );
                            return r().createElement(
                                'div',
                                { className: c, onClick: s, onMouseEnter: E },
                                o,
                                t && n && r().createElement('div', { className: ae.arrow }),
                            );
                        },
                    ),
                    le = [
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
                function oe(e) {
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
                const se = (e, u, t = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: P.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: a,
                                },
                                t,
                            ),
                        );
                    },
                    Ee = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            r = e.args,
                            n = e.onMouseEnter,
                            i = e.onMouseLeave,
                            l = e.onMouseDown,
                            o = e.onClick,
                            s = e.ignoreShowDelay,
                            E = void 0 !== s && s,
                            c = e.ignoreMouseClick,
                            d = void 0 !== c && c,
                            A = e.decoratorId,
                            F = void 0 === A ? 0 : A,
                            _ = e.isEnabled,
                            m = void 0 === _ || _,
                            D = e.targetId,
                            B = void 0 === D ? 0 : D,
                            C = e.onShow,
                            g = e.onHide,
                            h = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, le);
                        const b = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, a.useMemo)(() => B || I().resId, [B]),
                            w = (0, a.useCallback)(() => {
                                (b.current.isVisible && b.current.timeoutId) ||
                                    (se(t, F, { isMouseEvent: !0, on: !0, arguments: oe(r) }, v),
                                    C && C(),
                                    (b.current.isVisible = !0));
                            }, [t, F, r, v, C]),
                            f = (0, a.useCallback)(() => {
                                if (b.current.isVisible || b.current.timeoutId) {
                                    const e = b.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (b.current.timeoutId = 0)),
                                        se(t, F, { on: !1 }, v),
                                        b.current.isVisible && g && g(),
                                        (b.current.isVisible = !1);
                                }
                            }, [t, F, v, g]),
                            p = (0, a.useCallback)((e) => {
                                b.current.isVisible &&
                                    ((b.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (b.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(b.current.prevTarget) && f();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const e = b.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', p, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', p, { capture: !0 }),
                                            e && window.clearTimeout(e);
                                    }
                                );
                            }, []),
                            (0, a.useEffect)(() => {
                                !1 === m && f();
                            }, [m, f]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', f),
                                    () => {
                                        window.removeEventListener('mouseleave', f), f();
                                    }
                                ),
                                [f],
                            ),
                            m
                                ? (0, a.cloneElement)(
                                      u,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((y = u.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((b.current.timeoutId = window.setTimeout(w, E ? 100 : 400)),
                                                          n && n(e),
                                                          y && y(e));
                                                  }),
                                              onMouseLeave: ((e) => (u) => {
                                                  f(), null == i || i(u), null == e || e(u);
                                              })(u.props.onMouseLeave),
                                              onClick: ((e) => (u) => {
                                                  !1 === d && f(), null == o || o(u), null == e || e(u);
                                              })(u.props.onClick),
                                              onMouseDown: ((e) => (u) => {
                                                  !1 === d && f(), null == l || l(u), null == e || e(u);
                                              })(u.props.onMouseDown),
                                          },
                                          h,
                                      ),
                                  )
                                : u
                        );
                        var y;
                    },
                    ce = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function de() {
                    return (
                        (de =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        de.apply(this, arguments)
                    );
                }
                const Ae = R.views.common.tooltip_window.simple_tooltip_content,
                    Fe = (e) => {
                        let u = e.children,
                            t = e.body,
                            n = e.header,
                            i = e.note,
                            l = e.alert,
                            o = e.args,
                            s = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    a,
                                    r = {},
                                    n = Object.keys(e);
                                for (a = 0; a < n.length; a++) (t = n[a]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, ce);
                        const E = (0, a.useMemo)(() => {
                            const e = Object.assign({}, o, { body: t, header: n, note: i, alert: l });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [l, t, n, i, o]);
                        return r().createElement(
                            Ee,
                            de(
                                {
                                    contentId:
                                        ((c = null == o ? void 0 : o.hasHtmlContent),
                                        c ? Ae.SimpleTooltipHtmlContent('resId') : Ae.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: E,
                                },
                                s,
                            ),
                            u,
                        );
                        var c;
                    },
                    _e = {
                        base: 'CellDecorator_base_50',
                        base__small: 'CellDecorator_base__small_4f',
                        base__player: 'CellDecorator_base__player_58',
                        base__stats: 'CellDecorator_base__stats_a6',
                        base__medium: 'CellDecorator_base__medium_94',
                        base__big: 'CellDecorator_base__big_28',
                        base__vehicle: 'CellDecorator_base__vehicle_21',
                        base__vehicleIcon: 'CellDecorator_base__vehicleIcon_bc',
                        base__role: 'CellDecorator_base__role_c2',
                        base__roleIcon: 'CellDecorator_base__roleIcon_21',
                        base__bordered: 'CellDecorator_base__bordered_bd',
                        border: 'CellDecorator_border_c6',
                        children: 'CellDecorator_children_2b',
                        base__statsLarge: 'CellDecorator_base__statsLarge_27',
                    };
                let me;
                !(function (e) {
                    (e.Player = 'player'),
                        (e.Stats = 'stats'),
                        (e.Vehicle = 'vehicle'),
                        (e.VehicleIcon = 'vehicleIcon'),
                        (e.Role = 'role'),
                        (e.RoleIcon = 'roleIcon');
                })(me || (me = {}));
                const De = (0, a.memo)(({ cellStyle: e, size: u, bordered: t = !1, classMix: a, children: n }) => {
                        const i = g()(_e.base, _e[`base__${e}`], _e[`base__${u}`], a);
                        return r().createElement(
                            'div',
                            { className: i },
                            t && r().createElement('div', { className: _e.border }),
                            r().createElement('div', { className: _e.children }, n),
                        );
                    }),
                    Be = {
                        base: 'RowDecorator_base_c9',
                        base__hovered: 'RowDecorator_base__hovered_7f',
                        childrenWrapper: 'RowDecorator_childrenWrapper_9e',
                        base__redBg: 'RowDecorator_base__redBg_17',
                        base__defaultText: 'RowDecorator_base__defaultText_a2',
                        base__goldText: 'RowDecorator_base__goldText_62',
                        base__disable: 'RowDecorator_base__disable_95',
                        hoverBg: 'RowDecorator_hoverBg_0f',
                        backgroundHelper: 'RowDecorator_backgroundHelper_16',
                        base__goldBg: 'RowDecorator_base__goldBg_d0',
                    };
                let Ce, ge;
                !(function (e) {
                    (e.Default = 'default'), (e.Red = 'red'), (e.Gold = 'gold');
                })(Ce || (Ce = {})),
                    (function (e) {
                        (e.Default = 'default'), (e.Gold = 'gold');
                    })(ge || (ge = {}));
                const he = (0, a.memo)(
                    ({
                        bgColor: e,
                        textColor: u,
                        isHoverEnabled: t = !1,
                        onClick: n,
                        onMouseEnter: i,
                        onMouseLeave: l,
                        children: o,
                        isReady: s = !0,
                    }) => {
                        const E = (0, a.useState)(!1),
                            c = E[0],
                            d = E[1],
                            A = g()(
                                Be.base,
                                e && Be[`base__${e}Bg`],
                                u && Be[`base__${u}Text`],
                                t && c && Be.base__hovered,
                                !s && Be.base__disable,
                            ),
                            F = (0, a.useCallback)(() => {
                                i && i(), d(!0);
                            }, [i]),
                            _ = (0, a.useCallback)(() => {
                                l && l(), d(!1);
                            }, [l]);
                        return r().createElement(
                            'div',
                            { className: A, onClick: n, onMouseEnter: F, onMouseLeave: _ },
                            t && r().createElement('div', { className: Be.hoverBg }),
                            r().createElement('div', { className: Be.backgroundHelper }),
                            r().createElement('div', { className: Be.childrenWrapper }, o),
                        );
                    },
                );
                let be;
                !(function (e) {
                    (e.Assist = 'assist'),
                        (e.Blocked = 'blocked'),
                        (e.Damage = 'damage'),
                        (e.Kills = 'kills'),
                        (e.SquadSmall = 'squad_small'),
                        (e.Vehicle = 'vehicle'),
                        (e.Role = 'role');
                })(be || (be = {}));
                const ve = R.images.historical_battles.gui.maps.icons.common.stats.c_28x20,
                    we = (0, a.memo)(({ icon: e, classMix: u, isHighlighted: t = !1, isHoverEnabled: n = !1 }) => {
                        const i = (0, a.useMemo)(() => ({ backgroundImage: `url('${ve.$dyn(e)}')` }), [e]),
                            l = g()(
                                'HeaderIcon_base_af',
                                t && 'HeaderIcon_base__highlighted_de',
                                n && 'HeaderIcon_base__hoverEnabled_ac',
                                u,
                            );
                        return r().createElement(
                            'div',
                            { className: l },
                            r().createElement('div', { className: 'HeaderIcon_icon_56', style: i }),
                        );
                    }),
                    fe = {
                        base: 'HeaderRow_base_a5',
                        text: 'HeaderRow_text_ff',
                        text__tabWindow: 'HeaderRow_text__tabWindow_a5',
                        text__leaderBoard: 'HeaderRow_text__leaderBoard_f5',
                        cell: 'HeaderRow_cell_42',
                        icon__squad: 'HeaderRow_icon__squad_02',
                        icon__vehicle: 'HeaderRow_icon__vehicle_3f',
                        icon__role: 'HeaderRow_icon__role_a8',
                    },
                    pe = (e) => {
                        switch (e) {
                            case re:
                                return me.VehicleIcon;
                            case ne:
                                return me.RoleIcon;
                        }
                        return me.Stats;
                    },
                    ye = (0, a.memo)(
                        ({
                            visibleColumns: e,
                            sortBy: u = te.Damage,
                            sortDirection: t,
                            onSortChanged: n,
                            tableType: i,
                            isRoleCellVisible: l,
                            size: o,
                        }) => {
                            const s = (0, a.useContext)(tu),
                                E = (0, a.useCallback)(
                                    (e) => {
                                        n && n(e);
                                    },
                                    [n],
                                ),
                                c = e.map((e) => e);
                            c.push(re), l && c.push(ne);
                            const d = i === Q.LeaderBoard,
                                A = g()(fe.text, fe[`text__${s}`]);
                            return r().createElement(
                                he,
                                null,
                                r().createElement(
                                    De,
                                    { cellStyle: me.Player, size: o },
                                    r().createElement(
                                        'div',
                                        { className: fe.base },
                                        r().createElement(we, { icon: be.SquadSmall, classMix: fe.icon__squad }),
                                        r().createElement(
                                            'span',
                                            { className: A },
                                            R.strings.hb_lobby.teamList.teammates(),
                                        ),
                                    ),
                                ),
                                c.map((e, a) =>
                                    r().createElement(
                                        De,
                                        { key: e, cellStyle: pe(e), bordered: a > 0, size: o },
                                        r().createElement(
                                            Fe,
                                            ((e, u) => {
                                                const t = R.strings.hb_tooltips.teamList.$dyn(e),
                                                    a = { header: '', body: '' };
                                                return (
                                                    u === Q.LeaderBoard
                                                        ? ((a.header = t.$dyn('header')), (a.body = t.$dyn('body')))
                                                        : (a.body = t.$dyn('header')),
                                                    a
                                                );
                                            })(e, i),
                                            r().createElement(
                                                'div',
                                                { className: fe.cell },
                                                r().createElement(
                                                    ie,
                                                    {
                                                        isSelected: d && u === e,
                                                        sortDirection: t,
                                                        column: e,
                                                        onClick: E,
                                                        isEnabled: d,
                                                    },
                                                    r().createElement(we, {
                                                        icon: e,
                                                        isHighlighted: d && u === e,
                                                        isHoverEnabled: d && u !== e,
                                                        classMix: fe[`icon__${e}`],
                                                    }),
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                            );
                        },
                    );
                let xe;
                !(function (e) {
                    (e.default = 'default'), (e.x48 = 'x48'), (e.x80 = 'x80'), (e.x220 = 'x220');
                })(xe || (xe = {}));
                const Se = ({ content: e, classMix: u }) => {
                        const t = (0, a.useRef)(null),
                            n = (0, a.useState)(!0),
                            i = n[0],
                            l = n[1];
                        return (
                            (0, a.useEffect)(() =>
                                ((e) => {
                                    let u,
                                        a = null;
                                    return (
                                        (a = requestAnimationFrame(() => {
                                            a = requestAnimationFrame(() => {
                                                (a = null),
                                                    (u = (() => {
                                                        const e = t.current;
                                                        e && e.offsetWidth >= e.scrollWidth && l(!1);
                                                    })());
                                            });
                                        })),
                                        () => {
                                            'function' == typeof u && u(), null !== a && cancelAnimationFrame(a);
                                        }
                                    );
                                })(),
                            ),
                            r().createElement(
                                Fe,
                                { isEnabled: i, body: e },
                                r().createElement('div', { ref: t, className: g()('TextOverflow_base_3b', u) }, e),
                            )
                        );
                    },
                    Le = {
                        base: 'Badge_base_ac',
                        base__default: 'Badge_base__default_c9',
                        base__x48: 'Badge_base__x48_e4',
                    },
                    Te = { [xe.default]: 'c_24x24', [xe.x48]: 'c_48x48', [xe.x80]: 'c_80x80', [xe.x220]: 'c_220x220' },
                    Me = ({ badgeID: e, size: u = xe.default, className: t }) => {
                        const a = R.images.gui.maps.icons.library.badges.$dyn(Te[u]);
                        return r().createElement('div', {
                            className: g()(Le.base, Le[`base__${u}`], t),
                            style: { backgroundImage: `url(${a.$dyn(`badge_${e}`)})` },
                        });
                    },
                    Oe = {
                        base: 'PlayerNickname_base_32',
                        userName: 'PlayerNickname_userName_cc',
                        igrIcon: 'PlayerNickname_igrIcon_34',
                        base__default: 'PlayerNickname_base__default_8d',
                        base__x48: 'PlayerNickname_base__x48_84',
                        suffixBadgeWrapper: 'PlayerNickname_suffixBadgeWrapper_cc',
                        suffixBadgeStripe: 'PlayerNickname_suffixBadgeStripe_8a',
                        base__inverted: 'PlayerNickname_base__inverted_34',
                        suffixBadge: 'PlayerNickname_suffixBadge_bd',
                        anonymizedIcon: 'PlayerNickname_anonymizedIcon_80',
                    },
                    Re = (0, a.memo)(({ tooltipHeaderName: e }) => {
                        const u = (0, a.useMemo)(() => {
                                return (
                                    (u = R.strings.tooltips.anonymizer.teamStats.header()),
                                    (t = { name: e }),
                                    u.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                                        const u = 0 === e.indexOf('%') ? 2 : 1;
                                        return String(t[e.slice(u, -u)]);
                                    })
                                );
                                var u, t;
                            }, [e]),
                            t = R.strings.tooltips.anonymizer.teamStats.body();
                        return r().createElement(
                            Fe,
                            { header: u, body: t },
                            r().createElement('div', { className: Oe.anonymizedIcon }),
                        );
                    });
                function Ne() {
                    return (
                        (Ne =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Ne.apply(this, arguments)
                    );
                }
                const ke = { [xe.default]: 'c_64x24', [xe.x48]: 'c_68x28' },
                    Ie = { [xe.default]: 'c_48x48', [xe.x48]: 'c_48x48' },
                    He = ({
                        userName: e,
                        clanAbbrev: u = '',
                        igrType: t = 0,
                        badge: n = { badgeID: '' },
                        suffixBadge: i = { badgeID: '' },
                        isInverted: l = !1,
                        isFakeNameVisible: o = !1,
                        isAnonymizerShown: s = !1,
                        hiddenUserName: E = '',
                        size: c = xe.default,
                        userNameClassName: d = '',
                        clanTagClassName: A = '',
                    }) => {
                        const F = R.images.gui.maps.icons.library.badges.strips.$dyn(ke[c]),
                            _ = (0, a.useMemo)(
                                () => ({ backgroundImage: `url(${F.$dyn(`strip_${i.badgeID}`)})` }),
                                [i, F],
                            ),
                            m = R.images.gui.maps.icons.library.badges.$dyn(Ie[c]),
                            D = (0, a.useMemo)(
                                () => ({ backgroundImage: `url(${m.$dyn(`badge_${i.badgeID}`)})` }),
                                [i, m],
                            ),
                            B = u ? `[${u}]` : '',
                            C = g()(Oe.base, Oe[`base__${c}`], l && Oe.base__inverted),
                            h = g()(Oe.userName, d),
                            b = g()(Oe.clanTag, A),
                            v = e !== E,
                            w = o ? `${E}${B}` : E,
                            f = Boolean(n.badgeID) && r().createElement(Me, Ne({ size: c }, n, { key: 'badge' })),
                            p = Date.now(),
                            y = [
                                f,
                                [
                                    r().createElement(
                                        'div',
                                        { className: h, key: 'userName' },
                                        r().createElement(Se, { content: e, key: p }),
                                    ),
                                    !o && Boolean(B) && r().createElement('div', { className: b, key: 'clanTag' }, B),
                                ],
                                0 !== t && r().createElement('div', { className: Oe.igrIcon, key: 'igrType' }),
                                Boolean(i.badgeID) &&
                                    r().createElement(
                                        'div',
                                        { className: Oe.suffixBadgeWrapper, key: 'suffixBadge' },
                                        r().createElement('div', { className: Oe.suffixBadgeStripe, style: _ }),
                                        r().createElement('div', { className: Oe.suffixBadge, style: D }),
                                    ),
                                s && v && r().createElement(Re, { tooltipHeaderName: w, key: 'anonymizer' }),
                            ];
                        return r().createElement('div', { className: C }, l ? y.reverse() : y);
                    },
                    Pe = {
                        base: 'PlayerInfo_base_b3',
                        base__solo: 'PlayerInfo_base__solo_ff',
                        nickName: 'PlayerInfo_nickName_fd',
                        userName__withBadge: 'PlayerInfo_userName__withBadge_e0',
                        clanTag: 'PlayerInfo_clanTag_db',
                        squad: 'PlayerInfo_squad_21',
                        squad__default: 'PlayerInfo_squad__default_82',
                        squad__highContrast: 'PlayerInfo_squad__highContrast_e0',
                        squad__defaultAlly: 'PlayerInfo_squad__defaultAlly_fd',
                        banIcon: 'PlayerInfo_banIcon_00',
                    };
                function We() {
                    return (
                        (We =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        We.apply(this, arguments)
                    );
                }
                let $e;
                !(function (e) {
                    (e.Default = 'default'), (e.HighContrast = 'highContrast');
                })($e || ($e = {}));
                const Ue = { [Q.TabWindow]: $e.HighContrast, [Q.LeaderBoard]: $e.Default },
                    Ve = R.strings.hb_tooltips.teamList,
                    Ge = (0, a.memo)(
                        ({ user: e, squadNum: u, isOwnSquad: t = !1, banType: n = ue.NotBanned, size: i }) => {
                            const l = (0, a.useContext)(tu),
                                o = Ue[l],
                                s = (0, a.useMemo)(
                                    () => ({
                                        backgroundImage: `url('${R.images.historical_battles.gui.maps.icons.common.teamList.squad.$dyn(o).$dyn(t ? 'ally' : 'other')}')`,
                                    }),
                                    [t, o],
                                ),
                                E = g()(Pe.base, Pe[`base__${i}`], 0 === u && Pe.base__solo),
                                c = g()(Pe.userName, e.badge.badgeID && Pe.userName__withBadge),
                                d = g()(Pe.squad, Pe[`squad__${o}`], t && o === $e.Default && Pe.squad__defaultAlly),
                                A = (0, a.useMemo)(() => ({ badgeID: e.badge.badgeID }), [e.badge.badgeID]),
                                F = (0, a.useMemo)(() => ({ badgeID: e.suffixBadge.badgeID }), [e.suffixBadge.badgeID]),
                                _ = {
                                    backgroundImage: `url('${R.images.historical_battles.gui.maps.icons.common.teamList.icon.$dyn(n)}')`,
                                },
                                m = n === ue.Banned || n === ue.Warned;
                            return r().createElement(
                                'div',
                                { className: E },
                                m &&
                                    r().createElement(
                                        Fe,
                                        { body: Ve.body.$dyn(n), header: Ve.header.$dyn(n) },
                                        r().createElement('div', { className: Pe.banIcon, style: _ }),
                                    ),
                                u > 0 && r().createElement('div', { className: d, style: s }, u),
                                r().createElement(
                                    'div',
                                    { className: Pe.nickName },
                                    r().createElement(
                                        He,
                                        We({}, e, {
                                            igrType: e.igrType,
                                            badge: A,
                                            suffixBadge: F,
                                            userNameClassName: c,
                                            clanTagClassName: Pe.clanTag,
                                        }),
                                    ),
                                ),
                            );
                        },
                    );
                let qe;
                !(function (e) {
                    (e.White = 'white'), (e.Orange = 'orange');
                })(qe || (qe = {}));
                const ze = (0, a.memo)(({ roleType: e, color: u }) => {
                        const t = e !== ee.None,
                            n = (0, a.useMemo)(
                                () =>
                                    t
                                        ? {
                                              backgroundImage: `url('${R.images.historical_battles.gui.maps.icons.roles[u].c_16x16.$dyn(e)}')`,
                                          }
                                        : {},
                                [u, e, t],
                            );
                        return r().createElement(
                            'div',
                            { className: 'RoleInfo_base_5a' },
                            t && r().createElement('div', { className: 'RoleInfo_icon_9a', style: n }),
                            r().createElement('span', null, R.strings.hb_lobby.roleRegular.$dyn(e)),
                        );
                    }),
                    je = (0, a.memo)(({ current: e, isMax: u, isOwnSquad: t }) => {
                        const n = P.Z5.getNumberFormat(e, P.B3.GOLD),
                            i = g()('StatValueDecorator_base_92', u && 'StatValueDecorator_base__max_13'),
                            l = (0, a.useMemo)(() => {
                                const e = t ? 'gold' : 'silver';
                                return {
                                    backgroundImage: `url('${R.images.historical_battles.gui.maps.icons.common.teamList.crown.$dyn(e)}')`,
                                };
                            }, [t]);
                        return r().createElement(
                            'div',
                            { className: i },
                            u && r().createElement('div', { className: 'StatValueDecorator_crown_0a', style: l }),
                            r().createElement('span', { className: 'StatValueDecorator_amount_5a' }, n),
                        );
                    });
                let Ke;
                !(function (e) {
                    (e.White = 'white'), (e.Orange = 'orange');
                })(Ke || (Ke = {}));
                const Ye = (0, a.memo)(({ vehicleName: e, vehicleType: u, color: t }) => {
                        const n = (0, a.useMemo)(() => {
                            return {
                                backgroundImage: `url('${R.images.historical_battles.gui.maps.icons.vehicleTypes.flat[t].c_16x16.$dyn(((e = u), e.replace(/-/g, '_')))}')`,
                            };
                            var e;
                        }, [t, u]);
                        return r().createElement(
                            'div',
                            { className: 'VehicleInfo_base_8e' },
                            r().createElement('div', { className: 'VehicleInfo_icon_50', style: n }),
                            r().createElement(Se, { content: e, classMix: 'VehicleInfo_label_e9' }),
                        );
                    }),
                    Xe = 'PlayerRow_cell_81';
                function Ze() {
                    return (
                        (Ze =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Ze.apply(this, arguments)
                    );
                }
                const Qe = (0, a.memo)(
                    ({
                        id: e,
                        rowStyle: u,
                        isCurrentPlayer: t,
                        isOwnSquad: n,
                        squadNum: i,
                        user: l,
                        vehicle: o,
                        banType: s,
                        roleType: E,
                        stats: c,
                        columnsMaxValue: d,
                        visibleColumns: A,
                        onClick: F,
                        isReady: _,
                        isRoleCellVisible: m,
                        size: D,
                        isHoverEnabled: B = !1,
                    }) => {
                        const C = (0, a.useCallback)(() => {
                                F && F({ memberId: e });
                            }, [F, e]),
                            g = (0, a.useCallback)(() => {
                                B && Z(R.sounds.highlight());
                            }, [B]),
                            h = t || n ? Ke.Orange : Ke.White,
                            b = t || n ? qe.Orange : qe.White;
                        return r().createElement(
                            he,
                            Ze({}, u, { isHoverEnabled: B, onClick: C, onMouseEnter: g, isReady: _ }),
                            r().createElement(
                                De,
                                { cellStyle: me.Player, size: D, classMix: Xe },
                                r().createElement(Ge, { user: l, squadNum: i, isOwnSquad: n, banType: s, size: D }),
                            ),
                            A.map((e) =>
                                r().createElement(
                                    De,
                                    { key: e, cellStyle: me.Stats, size: D, classMix: Xe },
                                    r().createElement(je, {
                                        current: c[e],
                                        isMax: d[e] === c[e] && c[e] > 0,
                                        isOwnSquad: t || n,
                                    }),
                                ),
                            ),
                            r().createElement(
                                De,
                                { cellStyle: me.Vehicle, size: D, classMix: Xe },
                                r().createElement(Ye, Ze({}, o, { color: h })),
                            ),
                            m &&
                                r().createElement(
                                    De,
                                    { cellStyle: me.Role, size: D, classMix: Xe },
                                    r().createElement(ze, { roleType: E, color: b }),
                                ),
                        );
                    },
                );
                function Je() {
                    return (
                        (Je =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                                }
                                return e;
                            }),
                        Je.apply(this, arguments)
                    );
                }
                const eu = ['heavyTank', 'mediumTank', 'lightTank', 'SPG', 'AT-SPG'],
                    uu = (e) => {
                        const u = e.isCurrentPlayer ? Ce.Gold : Ce.Default;
                        return {
                            bgColor: e.isAlive ? u : Ce.Red,
                            textColor: e.isCurrentPlayer || e.isOwnSquad ? ge.Gold : ge.Default,
                        };
                    },
                    tu = (0, a.createContext)(Q.TabWindow),
                    au = (0, a.memo)(
                        ({
                            classMix: e,
                            team: u,
                            visibleColumns: t,
                            isSortable: n = !1,
                            sortBy: i = te.Damage,
                            sortDirection: l = !0,
                            tableType: o = Q.TabWindow,
                            onSort: s,
                        }) => {
                            const E = (0, a.useCallback)(
                                    (e) => {
                                        s && s(e);
                                    },
                                    [s],
                                ),
                                c = {};
                            t.forEach((e) => {
                                const t = u.map((u) => u.stats[e]);
                                c[e] = Math.max(...t);
                            });
                            const d = (0, a.useMemo)(
                                    () =>
                                        n
                                            ? u.slice().sort((e, u) => {
                                                  const t = l ? 1 : -1;
                                                  if (i === re)
                                                      return e.vehicle.vehicleType === u.vehicle.vehicleType
                                                          ? t *
                                                                String(e.vehicle.vehicleName)
                                                                    .toLocaleLowerCase()
                                                                    .localeCompare(
                                                                        String(
                                                                            u.vehicle.vehicleName,
                                                                        ).toLocaleLowerCase(),
                                                                    )
                                                          : t *
                                                                (eu.indexOf(e.vehicle.vehicleType) -
                                                                    eu.indexOf(u.vehicle.vehicleType));
                                                  if (i === ne) {
                                                      const a = String(
                                                              R.strings.hb_lobby.role.$dyn(e.roleType),
                                                          ).toLocaleLowerCase(),
                                                          r = String(
                                                              R.strings.hb_lobby.role.$dyn(u.roleType),
                                                          ).toLocaleLowerCase();
                                                      return t * a.localeCompare(r);
                                                  }
                                                  return t * (u.stats[i] - e.stats[i]);
                                              })
                                            : u,
                                    [i, u, n, l],
                                ),
                                A = o === Q.LeaderBoard ? J.Medium : J.Small,
                                F = d.some((e) => e.roleType !== ee.None),
                                _ = g()('TeamList_base_b7', e);
                            return r().createElement(
                                'div',
                                { className: _ },
                                r().createElement(
                                    tu.Provider,
                                    { value: o },
                                    r().createElement(ye, {
                                        visibleColumns: t,
                                        sortEnabled: n,
                                        onSortChanged: E,
                                        sortBy: i,
                                        sortDirection: l,
                                        tableType: o,
                                        size: A,
                                        isRoleCellVisible: F,
                                    }),
                                    d.map((e) =>
                                        r().createElement(
                                            Qe,
                                            Je({}, e, {
                                                rowStyle: uu(e),
                                                columnsMaxValue: c,
                                                key: e.id,
                                                visibleColumns: t,
                                                size: A,
                                                isRoleCellVisible: F,
                                            }),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    ru = (0, a.memo)(() => {
                        const e = G('model.team').map(({ value: e }) => e),
                            u = G('model.columnSettings.visibleColumns').map(({ value: e }) => e);
                        return r().createElement(au, { team: e, visibleColumns: u, tableType: Q.TabWindow });
                    }),
                    nu = () => {
                        const e = G('model'),
                            u = e.isHeaderVisible,
                            t = e.info;
                        return r().createElement(
                            'div',
                            { className: 'EventStatsApp_base_85' },
                            u && r().createElement(j, t),
                            r().createElement(
                                'div',
                                { className: 'EventStatsApp_darkener_cf' },
                                r().createElement('div', { className: 'EventStatsApp_overlay_cd' }),
                            ),
                            r().createElement(
                                'div',
                                { className: 'EventStatsApp_table_58' },
                                r().createElement(z, { classMix: 'EventStatsApp_tableCaption_1d' }),
                                r().createElement(ru, null),
                            ),
                        );
                    };
                engine.whenReady.then(() => {
                    k().render(
                        r().createElement(O, null, r().createElement(nu, null)),
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
        return __webpack_modules__[e].call(t.exports, t, t.exports, __webpack_require__), t.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, u, t, a) => {
            if (!u) {
                var r = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [u, t, a] = deferred[o], n = !0, i = 0; i < u.length; i++)
                        (!1 & a || r >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[i]))
                            ? u.splice(i--, 1)
                            : ((n = !1), a < r && (r = a));
                    if (n) {
                        deferred.splice(o--, 1);
                        var l = t();
                        void 0 !== l && (e = l);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > a; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [u, t, a];
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
        (() => {
            var e = { 250: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var a,
                        r,
                        [n, i, l] = t,
                        o = 0;
                    if (n.some((u) => 0 !== e[u])) {
                        for (a in i) __webpack_require__.o(i, a) && (__webpack_require__.m[a] = i[a]);
                        if (l) var s = l(__webpack_require__);
                    }
                    for (u && u(t); o < n.length; o++)
                        (r = n[o]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(s);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(7589));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
