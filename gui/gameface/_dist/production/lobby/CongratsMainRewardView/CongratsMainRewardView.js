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
            5067: (u, e, t) => {
                'use strict';
                t.d(e, { O: () => Y });
                var r = {};
                t.r(r), t.d(r, { mouse: () => _, onResize: () => l });
                var a = {};
                t.r(a),
                    t.d(a, {
                        events: () => r,
                        getMouseGlobalPosition: () => c,
                        getSize: () => A,
                        graphicsQuality: () => F,
                    });
                var n = {};
                t.r(n), t.d(n, { getBgUrl: () => D, getTextureUrl: () => d });
                var i = {};
                function o(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                function s(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                t.r(i),
                    t.d(i, {
                        addModelObserver: () => b,
                        addPreloadTexture: () => p,
                        children: () => n,
                        displayStatus: () => m,
                        displayStatusIs: () => H,
                        events: () => B,
                        extraSize: () => G,
                        forceTriggerMouseMove: () => N,
                        freezeTextureBeforeResize: () => R,
                        getBrowserTexturePath: () => v,
                        getDisplayStatus: () => U,
                        getScale: () => M,
                        getSize: () => T,
                        getViewGlobalPosition: () => x,
                        isEventHandled: () => I,
                        isFocused: () => y,
                        pxToRem: () => P,
                        remToPx: () => L,
                        resize: () => S,
                        sendEvent: () => g,
                        setAnimateWindow: () => O,
                        setEventHandled: () => k,
                        setInputPaddingsRem: () => w,
                        setSidePaddingsRem: () => f,
                        whenTutorialReady: () => W,
                    });
                const l = o('clientResized'),
                    E = { down: o('mousedown'), up: o('mouseup'), move: o('mousemove') },
                    _ = (function () {
                        const u = { listeners: 0, enabled: !0, initialized: !1 };
                        function e() {
                            u.enabled && s(!1);
                        }
                        function t() {
                            u.enabled && s(!0);
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
                                : s(!1);
                        }
                        const a = ['down', 'up', 'move'].reduce(
                            (e, t) => (
                                (e[t] = (function (e) {
                                    return (t) => {
                                        u.listeners += 1;
                                        let a = !0;
                                        const n = `mouse${e}`,
                                            i = E[e]((u) => t([u, 'outside']));
                                        function o(u) {
                                            t([u, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(n, o),
                                            r(),
                                            () => {
                                                a &&
                                                    (i(),
                                                    window.removeEventListener(n, o),
                                                    (u.listeners -= 1),
                                                    r(),
                                                    (a = !1));
                                            }
                                        );
                                    };
                                })(t)),
                                e
                            ),
                            {},
                        );
                        return Object.assign({}, a, {
                            disable() {
                                (u.enabled = !1), r();
                            },
                            enable() {
                                (u.enabled = !0), r();
                            },
                            enableOutside() {
                                u.enabled && s(!0);
                            },
                            disableOutside() {
                                u.enabled && s(!1);
                            },
                        });
                    })();
                function A(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function c(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const F = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function d(u, e, t = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, t);
                }
                function D(u, e, t) {
                    return `url(${d(u, e, t)})`;
                }
                const m = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    B = {
                        onTextureFrozen: o('self.onTextureFrozen'),
                        onTextureReady: o('self.onTextureReady'),
                        onDomBuilt: o('self.onDomBuilt'),
                        onLoaded: o('self.onLoaded'),
                        onDisplayChanged: o('self.onShowingStatusChanged'),
                        onFocusUpdated: o('self.onFocusChanged'),
                        children: {
                            onAdded: o('children.onAdded'),
                            onLoaded: o('children.onLoaded'),
                            onRemoved: o('children.onRemoved'),
                            onAttached: o('children.onAttached'),
                            onTextureReady: o('children.onTextureReady'),
                            onRequestPosition: o('children.requestPosition'),
                        },
                    },
                    C = ['args'],
                    h = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const a = e.args,
                                n = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        r,
                                        a = {},
                                        n = Object.keys(u);
                                    for (r = 0; r < n.length; r++) (t = n[r]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                    return a;
                                })(e, C);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, n, {
                                          arguments:
                                              ((r = a),
                                              Object.entries(r).map(([u, e]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, n));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: u });
                        var r;
                    },
                    g = {
                        close(u) {
                            h('popover' === u ? 2 : 32);
                        },
                        minimize() {
                            h(64);
                        },
                        move(u) {
                            h(16, { isMouseEvent: !0, on: u });
                        },
                    };
                function p(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function w(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function v(u, e, t, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, t, r);
                }
                function b(u, e, t) {
                    return viewEnv.addDataChangedCallback(u, e, t);
                }
                function f(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function T(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function S(u, e, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function x(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: L(e.x), y: L(e.y) };
                }
                function R() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function M() {
                    return viewEnv.getScale();
                }
                function P(u) {
                    return viewEnv.pxToRem(u);
                }
                function L(u) {
                    return viewEnv.remToPx(u);
                }
                function O(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function y() {
                    return viewEnv.isFocused();
                }
                function k() {
                    return viewEnv.setEventHandled();
                }
                function I() {
                    return viewEnv.isEventHandled();
                }
                function N() {
                    viewEnv.forceTriggerMouseMove();
                }
                function U() {
                    return viewEnv.getShowingStatus();
                }
                const H = Object.keys(m).reduce((u, e) => ((u[e] = () => viewEnv.getShowingStatus() === m[e]), u), {}),
                    G = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    W = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : B.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]),
                    Y = { view: i, client: a };
            },
            5521: (u, e, t) => {
                'use strict';
                let r, a;
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
                            (u[(u.KEY_9 = 57)] = 'KEY_9'),
                            (u[(u.CAPS_LOCK = 20)] = 'CAPS_LOCK'),
                            (u[(u.INSERT = 45)] = 'INSERT'),
                            (u[(u.F1 = 112)] = 'F1'),
                            (u[(u.F2 = 113)] = 'F2'),
                            (u[(u.F3 = 114)] = 'F3'),
                            (u[(u.F4 = 115)] = 'F4'),
                            (u[(u.F5 = 116)] = 'F5'),
                            (u[(u.F6 = 117)] = 'F6'),
                            (u[(u.F7 = 118)] = 'F7'),
                            (u[(u.F8 = 119)] = 'F8'),
                            (u[(u.F9 = 120)] = 'F9'),
                            (u[(u.F10 = 121)] = 'F10'),
                            (u[(u.F11 = 122)] = 'F11'),
                            (u[(u.F12 = 123)] = 'F12'),
                            (u[(u.SELECT = 93)] = 'SELECT'),
                            (u[(u.NUMPAD_0 = 96)] = 'NUMPAD_0'),
                            (u[(u.NUMPAD_1 = 97)] = 'NUMPAD_1'),
                            (u[(u.NUMPAD_2 = 98)] = 'NUMPAD_2'),
                            (u[(u.NUMPAD_3 = 99)] = 'NUMPAD_3'),
                            (u[(u.NUMPAD_4 = 100)] = 'NUMPAD_4'),
                            (u[(u.NUMPAD_5 = 101)] = 'NUMPAD_5'),
                            (u[(u.NUMPAD_6 = 102)] = 'NUMPAD_6'),
                            (u[(u.NUMPAD_7 = 103)] = 'NUMPAD_7'),
                            (u[(u.NUMPAD_8 = 104)] = 'NUMPAD_8'),
                            (u[(u.NUMPAD_9 = 105)] = 'NUMPAD_9'),
                            (u[(u.NUM_DECIMAL = 110)] = 'NUM_DECIMAL'),
                            (u[(u.STAR = 106)] = 'STAR'),
                            (u[(u.NUM_SLASH = 111)] = 'NUM_SLASH'),
                            (u[(u.FORWARD_SLASH = 191)] = 'FORWARD_SLASH'),
                            (u[(u.COMMA = 188)] = 'COMMA'),
                            (u[(u.DASH = 189)] = 'DASH'),
                            (u[(u.PERIOD = 190)] = 'PERIOD');
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
                    })(a || (a = {}));
            },
            1358: (u, e, t) => {
                'use strict';
                t.d(e, { Z: () => n });
                var r = t(5067);
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
                        const n = r.O.view.addModelObserver(u, t, a);
                        return (
                            n > 0
                                ? ((this._callbacks[n] = e),
                                  t > 0 && (this._views[t] ? this._views[t].push(n) : (this._views[t] = [n])))
                                : console.error("Can't add callback for model:", u),
                            n
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
                a.__instance = void 0;
                const n = a;
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
            4179: (u, e, t) => {
                'use strict';
                t.d(e, { Sw: () => n.Z, B3: () => E, Z5: () => i, B0: () => s, ry: () => C });
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
                const a = r;
                var n = t(1358);
                const i = {
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
                    };
                let s;
                var l;
                ((l = s || (s = {}))[(l.UNDEFINED = 0)] = 'UNDEFINED'),
                    (l[(l.TOOLTIP = 1)] = 'TOOLTIP'),
                    (l[(l.POP_OVER = 2)] = 'POP_OVER'),
                    (l[(l.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (l[(l.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (l[(l.MOVE = 16)] = 'MOVE'),
                    (l[(l.CLOSE = 32)] = 'CLOSE'),
                    (l[(l.MINIMIZE = 64)] = 'MINIMIZE');
                const E = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    _ = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    A = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var F = t(5521),
                    d = t(5067);
                const D = ['args'];
                function m(u, e, t, r, a, n, i) {
                    try {
                        var o = u[n](i),
                            s = o.value;
                    } catch (u) {
                        return void t(u);
                    }
                    o.done ? e(s) : Promise.resolve(s).then(r, a);
                }
                const B = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
                    C = (function () {
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
                                    return new Promise(function (r, a) {
                                        var n = u.apply(e, t);
                                        function i(u) {
                                            m(n, r, a, i, o, 'next', u);
                                        }
                                        function o(u) {
                                            m(n, r, a, i, o, 'throw', u);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    h = (u, e) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const a = e.args,
                                n = (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        r,
                                        a = {},
                                        n = Object.keys(u);
                                    for (r = 0; r < n.length; r++) (t = n[r]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                    return a;
                                })(e, D);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: u }, n, {
                                          arguments:
                                              ((r = a),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: u }, n));
                        } else viewEnv.handleViewEvent({ __Type: t, type: u });
                        var r;
                    },
                    g = () => h(s.CLOSE),
                    p = (u, e) => {
                        u.keyCode === F.n.ESCAPE && e();
                    };
                var w = t(7572);
                const v = a.instance,
                    b = {
                        DataTracker: n.Z,
                        ViewModel: w.Z,
                        ViewEventType: s,
                        NumberFormatType: E,
                        RealFormatType: _,
                        TimeFormatType: A,
                        DateFormatType: c,
                        makeGlobalBoundingBox: B,
                        sendMoveEvent: (u) => h(s.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: () => h(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, t = 0) => {
                            h(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: t, args: e });
                        },
                        sendShowPopOverEvent: (u, e, t, r, a = R.invalid('resId'), n) => {
                            const i = d.O.view.getViewGlobalPosition(),
                                o = t.getBoundingClientRect(),
                                l = o.x,
                                E = o.y,
                                _ = o.width,
                                A = o.height,
                                c = {
                                    x: d.O.view.pxToRem(l) + i.x,
                                    y: d.O.view.pxToRem(E) + i.y,
                                    width: d.O.view.pxToRem(_),
                                    height: d.O.view.pxToRem(A),
                                };
                            h(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: r || R.invalid('resId'),
                                targetID: a,
                                direction: e,
                                bbox: B(c),
                                on: !0,
                                args: n,
                            });
                        },
                        addEscapeListener: (u) => {
                            const e = (e) => p(e, u);
                            return (
                                window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            p(u, g);
                        },
                        handleViewEvent: h,
                        onBindingsReady: C,
                        onLayoutReady: () =>
                            new Promise((u) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        u();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                        dumpViewModel: function u(e) {
                            const t = {};
                            if ('object' != typeof e) return e;
                            for (const r in e)
                                if (Object.prototype.hasOwnProperty.call(e, r)) {
                                    const a = Object.prototype.toString.call(e[r]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = e[r];
                                        t[r] = [];
                                        for (let e = 0; e < a.length; e++) t[r].push({ value: u(a[e].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[r] = u(e[r]))
                                            : (t[r] = e[r]);
                                }
                            return t;
                        },
                        ClickOutsideManager: v,
                        SystemLocale: i,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = b;
            },
            9331: (u, e, t) => {
                'use strict';
                var r = t(6179),
                    a = t.n(r);
                const n = (u, e, t) =>
                    e.extraLargeHeight || e.largeHeight || e.mediumHeight || e.smallHeight || e.extraSmallHeight
                        ? (e.extraLargeHeight && t.extraLarge) ||
                          (e.largeHeight && t.large) ||
                          (e.mediumHeight && t.medium) ||
                          (e.smallHeight && t.small) ||
                          (e.extraSmallHeight && t.extraSmall)
                            ? u
                            : null
                        : u;
                var i = t(5067);
                const o = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var s;
                function l(u, e, t) {
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
                        n = Math.min(r, a);
                    return {
                        extraLarge: n === t.extraLarge.weight,
                        large: n === t.large.weight,
                        medium: n === t.medium.weight,
                        small: n === t.small.weight,
                        extraSmall: n === t.extraSmall.weight,
                        extraLargeWidth: r === t.extraLarge.weight,
                        largeWidth: r === t.large.weight,
                        mediumWidth: r === t.medium.weight,
                        smallWidth: r === t.small.weight,
                        extraSmallWidth: r === t.extraSmall.weight,
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
                })(s || (s = {}));
                const E = i.O.client.getSize('rem'),
                    _ = E.width,
                    A = E.height,
                    c = Object.assign({ width: _, height: A }, l(_, A, o)),
                    F = (0, r.createContext)(c),
                    d = ['children'],
                    D = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(u);
                                for (r = 0; r < n.length; r++) (t = n[r]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                return a;
                            })(u, d);
                        const a = (0, r.useContext)(F),
                            i = a.extraLarge,
                            o = a.large,
                            s = a.medium,
                            l = a.small,
                            E = a.extraSmall,
                            _ = a.extraLargeWidth,
                            A = a.largeWidth,
                            c = a.mediumWidth,
                            D = a.smallWidth,
                            m = a.extraSmallWidth,
                            B = a.extraLargeHeight,
                            C = a.largeHeight,
                            h = a.mediumHeight,
                            g = a.smallHeight,
                            p = a.extraSmallHeight,
                            w = { extraLarge: B, large: C, medium: h, small: g, extraSmall: p };
                        if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                            if (t.extraLarge && i) return e;
                            if (t.large && o) return e;
                            if (t.medium && s) return e;
                            if (t.small && l) return e;
                            if (t.extraSmall && E) return e;
                        } else {
                            if (t.extraLargeWidth && _) return n(e, t, w);
                            if (t.largeWidth && A) return n(e, t, w);
                            if (t.mediumWidth && c) return n(e, t, w);
                            if (t.smallWidth && D) return n(e, t, w);
                            if (t.extraSmallWidth && m) return n(e, t, w);
                            if (
                                !(
                                    t.extraLargeWidth ||
                                    t.largeWidth ||
                                    t.mediumWidth ||
                                    t.smallWidth ||
                                    t.extraSmallWidth
                                )
                            ) {
                                if (t.extraLargeHeight && B) return e;
                                if (t.largeHeight && C) return e;
                                if (t.mediumHeight && h) return e;
                                if (t.smallHeight && g) return e;
                                if (t.extraSmallHeight && p) return e;
                            }
                        }
                        return null;
                    };
                (D.defaultProps = {
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
                    (0, r.memo)(D);
                const m = (u) => {
                        const e = (0, r.useRef)(!1);
                        e.current || (u(), (e.current = !0));
                    },
                    B = (0, r.memo)(({ children: u }) => {
                        const e = (0, r.useContext)(F),
                            t = (0, r.useState)(e),
                            n = t[0],
                            s = t[1],
                            E = (0, r.useCallback)((u, e) => {
                                const t = i.O.view.pxToRem(u),
                                    r = i.O.view.pxToRem(e);
                                s(Object.assign({ width: t, height: r }, l(t, r, o)));
                            }, []);
                        m(() => {
                            engine.on('clientResized', E);
                        }),
                            (0, r.useEffect)(() => () => engine.off('clientResized', E), [E]);
                        const _ = (0, r.useMemo)(() => Object.assign({}, n), [n]);
                        return a().createElement(F.Provider, { value: _ }, u);
                    });
                var C = t(6483),
                    h = t.n(C),
                    g = t(926),
                    p = t.n(g);
                let w, v, b;
                !(function (u) {
                    (u[(u.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                        (u[(u.Small = o.small.width)] = 'Small'),
                        (u[(u.Medium = o.medium.width)] = 'Medium'),
                        (u[(u.Large = o.large.width)] = 'Large'),
                        (u[(u.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge');
                })(w || (w = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                            (u[(u.Small = o.small.width)] = 'Small'),
                            (u[(u.Medium = o.medium.width)] = 'Medium'),
                            (u[(u.Large = o.large.width)] = 'Large'),
                            (u[(u.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge');
                    })(v || (v = {})),
                    (function (u) {
                        (u[(u.ExtraSmall = o.extraSmall.height)] = 'ExtraSmall'),
                            (u[(u.Small = o.small.height)] = 'Small'),
                            (u[(u.Medium = o.medium.height)] = 'Medium'),
                            (u[(u.Large = o.large.height)] = 'Large'),
                            (u[(u.ExtraLarge = o.extraLarge.height)] = 'ExtraLarge');
                    })(b || (b = {}));
                const f = ['children', 'className'];
                function T() {
                    return (
                        (T =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        T.apply(this, arguments)
                    );
                }
                const S = {
                        [v.ExtraSmall]: '',
                        [v.Small]: p().SMALL_WIDTH,
                        [v.Medium]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH}`,
                        [v.Large]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH} ${p().LARGE_WIDTH}`,
                        [v.ExtraLarge]: `${p().SMALL_WIDTH} ${p().MEDIUM_WIDTH} ${p().LARGE_WIDTH} ${p().EXTRA_LARGE_WIDTH}`,
                    },
                    x = {
                        [b.ExtraSmall]: '',
                        [b.Small]: p().SMALL_HEIGHT,
                        [b.Medium]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT}`,
                        [b.Large]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT} ${p().LARGE_HEIGHT}`,
                        [b.ExtraLarge]: `${p().SMALL_HEIGHT} ${p().MEDIUM_HEIGHT} ${p().LARGE_HEIGHT} ${p().EXTRA_LARGE_HEIGHT}`,
                    },
                    M = {
                        [w.ExtraSmall]: '',
                        [w.Small]: p().SMALL,
                        [w.Medium]: `${p().SMALL} ${p().MEDIUM}`,
                        [w.Large]: `${p().SMALL} ${p().MEDIUM} ${p().LARGE}`,
                        [w.ExtraLarge]: `${p().SMALL} ${p().MEDIUM} ${p().LARGE} ${p().EXTRA_LARGE}`,
                    },
                    P = (u) => {
                        let e = u.children,
                            t = u.className,
                            n = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(u);
                                for (r = 0; r < n.length; r++) (t = n[r]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                return a;
                            })(u, f);
                        const i = (() => {
                                const u = (0, r.useContext)(F),
                                    e = u.width,
                                    t = u.height,
                                    a = ((u) => {
                                        switch (!0) {
                                            case u.extraLarge:
                                                return w.ExtraLarge;
                                            case u.large:
                                                return w.Large;
                                            case u.medium:
                                                return w.Medium;
                                            case u.small:
                                                return w.Small;
                                            case u.extraSmall:
                                                return w.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'), w.ExtraSmall
                                                );
                                        }
                                    })(u),
                                    n = ((u) => {
                                        switch (!0) {
                                            case u.extraLargeWidth:
                                                return v.ExtraLarge;
                                            case u.largeWidth:
                                                return v.Large;
                                            case u.mediumWidth:
                                                return v.Medium;
                                            case u.smallWidth:
                                                return v.Small;
                                            case u.extraSmallWidth:
                                                return v.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'), v.ExtraSmall
                                                );
                                        }
                                    })(u),
                                    i = ((u) => {
                                        switch (!0) {
                                            case u.extraLargeHeight:
                                                return b.ExtraLarge;
                                            case u.largeHeight:
                                                return b.Large;
                                            case u.mediumHeight:
                                                return b.Medium;
                                            case u.smallHeight:
                                                return b.Small;
                                            case u.extraSmallHeight:
                                                return b.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'), b.ExtraSmall
                                                );
                                        }
                                    })(u);
                                return {
                                    mediaSize: a,
                                    mediaWidth: n,
                                    mediaHeight: i,
                                    remScreenWidth: e,
                                    remScreenHeight: t,
                                };
                            })(),
                            o = i.mediaWidth,
                            s = i.mediaHeight,
                            l = i.mediaSize;
                        return a().createElement('div', T({ className: h()(t, S[o], x[s], M[l]) }, n), e);
                    },
                    L = ['children'],
                    O = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(u);
                                for (r = 0; r < n.length; r++) (t = n[r]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                return a;
                            })(u, L);
                        return a().createElement(B, null, a().createElement(P, t, e));
                    };
                var y = t(493),
                    k = t.n(y);
                function I(u) {
                    engine.call('PlaySound', u);
                }
                const N = {
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
                let U, H;
                !(function (u) {
                    (u.main = 'main'),
                        (u.primary = 'primary'),
                        (u.primaryGreen = 'primaryGreen'),
                        (u.primaryRed = 'primaryRed'),
                        (u.secondary = 'secondary'),
                        (u.ghost = 'ghost');
                })(U || (U = {})),
                    (function (u) {
                        (u.extraSmall = 'extraSmall'), (u.small = 'small'), (u.medium = 'medium');
                    })(H || (H = {}));
                const G = ({
                    children: u,
                    size: e,
                    isFocused: t,
                    type: n,
                    disabled: i,
                    mixClass: o,
                    soundHover: s,
                    soundClick: l,
                    onMouseEnter: E,
                    onMouseMove: _,
                    onMouseDown: A,
                    onMouseUp: c,
                    onMouseLeave: F,
                    onClick: d,
                }) => {
                    const D = (0, r.useRef)(null),
                        m = (0, r.useState)(t),
                        B = m[0],
                        C = m[1],
                        g = (0, r.useState)(!1),
                        p = g[0],
                        w = g[1],
                        v = (0, r.useState)(!1),
                        b = v[0],
                        f = v[1],
                        T = (0, r.useCallback)(() => {
                            i || (D.current && (D.current.focus(), C(!0)));
                        }, [i]),
                        S = (0, r.useCallback)(
                            (u) => {
                                B && null !== D.current && !D.current.contains(u.target) && C(!1);
                            },
                            [B],
                        ),
                        x = (0, r.useCallback)(
                            (u) => {
                                i || (d && d(u));
                            },
                            [i, d],
                        ),
                        M = (0, r.useCallback)(
                            (u) => {
                                i || (null !== s && I(s), E && E(u), f(!0));
                            },
                            [i, s, E],
                        ),
                        P = (0, r.useCallback)(
                            (u) => {
                                _ && _(u);
                            },
                            [_],
                        ),
                        L = (0, r.useCallback)(
                            (u) => {
                                i || (c && c(u), w(!1));
                            },
                            [i, c],
                        ),
                        O = (0, r.useCallback)(
                            (u) => {
                                i || (null !== l && I(l), A && A(u), t && T(), w(!0));
                            },
                            [i, l, A, T, t],
                        ),
                        y = (0, r.useCallback)(
                            (u) => {
                                i || (F && F(u), w(!1));
                            },
                            [i, F],
                        ),
                        k = h()(
                            N.base,
                            N[`base__${n}`],
                            {
                                [N.base__disabled]: i,
                                [N[`base__${e}`]]: e,
                                [N.base__focus]: B,
                                [N.base__highlightActive]: p,
                                [N.base__firstHover]: b,
                            },
                            o,
                        ),
                        H = h()(N.state, N.state__default);
                    return (
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mousedown', S),
                                () => {
                                    document.removeEventListener('mousedown', S);
                                }
                            ),
                            [S],
                        ),
                        (0, r.useEffect)(() => {
                            C(t);
                        }, [t]),
                        a().createElement(
                            'div',
                            {
                                ref: D,
                                className: k,
                                onMouseEnter: M,
                                onMouseMove: P,
                                onMouseUp: L,
                                onMouseDown: O,
                                onMouseLeave: y,
                                onClick: x,
                            },
                            n !== U.ghost &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: N.back }),
                                    a().createElement('span', { className: N.texture }),
                                ),
                            a().createElement(
                                'span',
                                { className: H },
                                a().createElement('span', { className: N.stateDisabled }),
                                a().createElement('span', { className: N.stateHighlightHover }),
                                a().createElement('span', { className: N.stateHighlightActive }),
                            ),
                            a().createElement(
                                'span',
                                { className: N.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                u,
                            ),
                        )
                    );
                };
                G.defaultProps = { type: U.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const W = (0, r.memo)(G),
                    Y = {
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
                    $ = [
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
                function V() {
                    return (
                        (V =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        V.apply(this, arguments)
                    );
                }
                class j extends a().PureComponent {
                    constructor(...u) {
                        super(...u),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (u) => (e) => {
                                u && u(e),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && I(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (u) => (e) => {
                                u && u(e), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (u) => (e) => {
                                u && u(e),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && I(this.props.soundClick);
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
                            r = u.goto,
                            n = u.side,
                            i = u.type,
                            o = u.classNames,
                            s = u.onMouseEnter,
                            l = u.onMouseLeave,
                            E = u.onMouseDown,
                            _ = u.onMouseUp,
                            A =
                                (u.soundClick,
                                u.soundHover,
                                (function (u, e) {
                                    if (null == u) return {};
                                    var t,
                                        r,
                                        a = {},
                                        n = Object.keys(u);
                                    for (r = 0; r < n.length; r++) (t = n[r]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                    return a;
                                })(u, $)),
                            c = h()(Y.base, Y[`base__${i}`], Y[`base__${n}`], null == o ? void 0 : o.base),
                            F = h()(Y.icon, Y[`icon__${i}`], Y[`icon__${n}`], null == o ? void 0 : o.icon),
                            d = h()(Y.glow, null == o ? void 0 : o.glow),
                            D = h()(Y.caption, Y[`caption__${i}`], null == o ? void 0 : o.caption),
                            m = h()(Y.goto, null == o ? void 0 : o.goto);
                        return a().createElement(
                            'div',
                            V(
                                {
                                    className: c,
                                    onMouseEnter: this._onMouseEnter(s),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(E),
                                    onMouseUp: this._onMouseUp(_),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                A,
                            ),
                            'info' !== i && a().createElement('div', { className: Y.shine }),
                            a().createElement('div', { className: F }, a().createElement('div', { className: d })),
                            a().createElement('div', { className: D }, e),
                            r && a().createElement('div', { className: m }, r),
                        );
                    }
                }
                let z, q;
                var X;
                (j.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' }),
                    (function (u) {
                        (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                    })(z || (z = {})),
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
                    ((X = q || (q = {})).SHORT_DATE = 'short-date'),
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
                    (X.DATE_YEAR = 'date-year');
                var K = t(4179);
                Date.now();
                const Q = (u = 1) => {
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
                    Z = (u, e) => u.split('.').reduce((u, e) => u && u[e], e),
                    J = (u) => u && 'ArrayItem' === u.__proto__.constructor.name,
                    uu = (u, e) => (u.length > 0 ? `${u}.${e}` : e),
                    eu = K.Sw.instance;
                let tu;
                !(function (u) {
                    (u.None = 'None'), (u.Shallow = 'Shallow'), (u.Deep = 'Deep');
                })(tu || (tu = {}));
                const ru = (u = 'model', e = tu.Deep) => {
                    const t = (0, r.useState)(0),
                        a = (t[0], t[1]),
                        n = (0, r.useMemo)(() => Q(), []),
                        i = n.caller,
                        o = n.resId,
                        s = (0, r.useMemo)(
                            () => (window.__feature && window.__feature !== i ? `subViews.${i}.${u}` : u),
                            [i, u],
                        ),
                        l = (0, r.useState)(() =>
                            ((u) => {
                                const e = Z(u, window);
                                for (const u in e) 'function' == typeof e[u] && (e[u] = e[u].bind(e));
                                return J(e) ? e.value : e;
                            })(
                                ((u) =>
                                    ((u, e) =>
                                        u.split('.').reduce((u, e) => {
                                            const t = Z(`${u}.${e}`, window);
                                            return J(t) ? ((u, e) => `${u}.${e}.value`)(u, e) : `${u}.${e}`;
                                        }))(u))(s),
                            ),
                        ),
                        E = l[0],
                        _ = l[1],
                        A = (0, r.useRef)(-1);
                    return (
                        m(() => {
                            if (
                                ('boolean' == typeof e &&
                                    ((e = e ? tu.Deep : tu.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                e !== tu.None)
                            ) {
                                const t = (u) => {
                                        ((u) => u && 'CoherentArrayProxy' === u.__proto__.constructor.name)(u) &&
                                        e === tu.Deep
                                            ? (u === E && a((u) => u + 1), _(u))
                                            : _(Object.assign([], u));
                                    },
                                    r = ((u) => {
                                        const e = ((u) => {
                                                const e = Q(),
                                                    t = e.caller,
                                                    r = e.resId,
                                                    a =
                                                        window.__feature && window.__feature !== t && t
                                                            ? `subViews.${t}`
                                                            : '';
                                                return { modelPrefix: a, modelPath: uu(a, ''), resId: r };
                                            })(),
                                            t = e.modelPrefix,
                                            r = u.split('.');
                                        if (r.length > 0) {
                                            const u = [r[0]];
                                            return (
                                                r.reduce((e, r) => {
                                                    const a = Z(uu(t, `${e}.${r}`), window);
                                                    return J(a)
                                                        ? (u.push(a.id), `${e}.${r}.value`)
                                                        : (u.push(r), `${e}.${r}`);
                                                }),
                                                u.reduce((u, e) => u + '.' + e)
                                            );
                                        }
                                        return '';
                                    })(u);
                                A.current = eu.addCallback(r, t, o, e === tu.Deep);
                            }
                        }),
                        (0, r.useEffect)(() => {
                            if (e !== tu.None)
                                return () => {
                                    eu.removeCallback(A.current, o);
                                };
                        }, [o, e]),
                        E
                    );
                };
                K.Sw.instance;
                var au = t(5521);
                const nu = (u) => {
                    console.error(u.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function iu(u = au.n.NONE, e = nu, t = !1) {
                    (0, r.useEffect)(() => {
                        if (u !== au.n.NONE)
                            return (
                                window.addEventListener('keydown', r, t),
                                () => {
                                    window.removeEventListener('keydown', r, t);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === u) {
                                if (i.O.view.isEventHandled()) return;
                                i.O.view.setEventHandled(), e(r), t && r.stopPropagation();
                            }
                        }
                    }, [e, u, t]);
                }
                const ou = {
                    base: 'VehicleType_base_62',
                    base__c_16x16: 'VehicleType_base__c_16x16_b9',
                    base__c_24x24: 'VehicleType_base__c_24x24_54',
                    base__c_48x48: 'VehicleType_base__c_48x48_11',
                    base__c_60x60: 'VehicleType_base__c_60x60_a1',
                    base__c_83x74: 'VehicleType_base__c_83x74_26',
                };
                let su, lu;
                !(function (u) {
                    (u.C24x24 = 'c_24x24'), (u.C83x74 = 'c_83x74');
                })(su || (su = {})),
                    (function (u) {
                        (u.Silver = 'silver'), (u.Elite = 'elite');
                    })(lu || (lu = {}));
                const Eu = (0, r.memo)(({ type: u, color: e, classMix: t, size: n = su.C24x24 }) => {
                    const i = h()(ou.base, ou[`base__${n}`], t),
                        o = (0, r.useMemo)(() => {
                            return {
                                backgroundImage: `url(${R.images.historical_battles.gui.maps.icons.vehicleTypes.flat
                                    .$dyn(e)
                                    .$dyn(n)
                                    .$dyn(((t = u), t.replace(/-/g, '_')))})`,
                            };
                            var t;
                        }, [n, u, e]);
                    return a().createElement('div', { className: i, style: o });
                });
                let _u, Au, cu, Fu, du, Du, mu;
                var Bu, Cu;
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
                        (u.Currency = 'currency'),
                        (u.TankmenXp = 'tankmenXP'),
                        (u.TankmenXpFactor = 'tankmenXPFactor'),
                        (u.FreeXpFactor = 'freeXPFactor'),
                        (u.BattleToken = 'battleToken'),
                        (u.HBVehicleUnlock = 'hbUnlockVehicles'),
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
                        (u.NewYearAlbumsAccess = 'newYearAlbumsAccess'),
                        (u.NewYearFillers = 'ny22Fillers'),
                        (u.NewYearInvoice = 'newYearInvoice'),
                        (u.NewYearToyFragments = 'ny22ToyFragments'),
                        (u.NewYearSlot = 'newYearSlot'),
                        (u.BonusX5 = 'battle_bonus_x5'),
                        (u.CrewBonusX3 = 'crew_bonus_x3'),
                        (u.Vehicles = 'vehicles'),
                        (u.EpicSelectToken = 'epicSelectToken'),
                        (u.CollectionItem = 'collectionItem'),
                        (u.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                        (u.BattleBoosterGift = 'battleBooster_gift'),
                        (u.CosmicLootboxSilver = 'lootBoxToken'),
                        (u.CosmicLootboxCommon = 'cosmic_2024_2'),
                        (u.MayEntitlement100 = 'historical_battles_100'),
                        (u.HistoricalBattleDiscount25 = 'historical_battles_25'),
                        (u.HistoricalBattleDiscount50 = 'historical_battles_50'),
                        (u.HistoricalBattleDiscount75 = 'historical_battles_75');
                })(_u || (_u = {})),
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
                            (u.BattleAchievement = 'dossier_achievement');
                    })(Au || (Au = {})),
                    ((Cu = cu || (cu = {})).Big = 'big'),
                    (Cu.Small = 'small'),
                    (Cu.Mini = 'mini'),
                    (Cu.S600x450 = 's600x450'),
                    (Cu.S400x300 = 's400x300'),
                    (Cu.S296x222 = 's296x222'),
                    (Cu.S232x174 = 's232x174'),
                    (Cu.S180x135 = 's180x135'),
                    (Cu.S128x100 = 's128x100'),
                    (Cu.S80x80 = 's80x80'),
                    (Cu.S48x48 = 's48x48'),
                    ((Bu = Fu || (Fu = {})).MULTI = 'multi'),
                    (Bu.CURRENCY = 'currency'),
                    (Bu.PREMIUM_PLUS = 'premium_plus'),
                    (Bu.NUMBER = 'number'),
                    (Bu.STRING = 'string'),
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
                            (u.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4');
                    })(du || (du = {})),
                    (function (u) {
                        u.BATTLE_BOOSTER = 'battleBooster';
                    })(Du || (Du = {})),
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
                            (u.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4');
                    })(mu || (mu = {}));
                const hu = [
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
                function gu(u) {
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
                const pu = (u, e, t = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: K.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: r,
                                },
                                t,
                            ),
                        );
                    },
                    wu = (u) => {
                        let e = u.children,
                            t = u.contentId,
                            a = u.args,
                            n = u.onMouseEnter,
                            i = u.onMouseLeave,
                            o = u.onMouseDown,
                            s = u.onClick,
                            l = u.ignoreShowDelay,
                            E = void 0 !== l && l,
                            _ = u.ignoreMouseClick,
                            A = void 0 !== _ && _,
                            c = u.decoratorId,
                            F = void 0 === c ? 0 : c,
                            d = u.isEnabled,
                            D = void 0 === d || d,
                            m = u.targetId,
                            B = void 0 === m ? 0 : m,
                            C = u.onShow,
                            h = u.onHide,
                            g = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(u);
                                for (r = 0; r < n.length; r++) (t = n[r]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                return a;
                            })(u, hu);
                        const p = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            w = (0, r.useMemo)(() => B || Q().resId, [B]),
                            v = (0, r.useCallback)(() => {
                                (p.current.isVisible && p.current.timeoutId) ||
                                    (pu(t, F, { isMouseEvent: !0, on: !0, arguments: gu(a) }, w),
                                    C && C(),
                                    (p.current.isVisible = !0));
                            }, [t, F, a, w, C]),
                            b = (0, r.useCallback)(() => {
                                if (p.current.isVisible || p.current.timeoutId) {
                                    const u = p.current.timeoutId;
                                    u > 0 && (clearTimeout(u), (p.current.timeoutId = 0)),
                                        pu(t, F, { on: !1 }, w),
                                        p.current.isVisible && h && h(),
                                        (p.current.isVisible = !1);
                                }
                            }, [t, F, w, h]),
                            f = (0, r.useCallback)((u) => {
                                p.current.isVisible &&
                                    ((p.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (p.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(p.current.prevTarget) && b();
                                    }, 200)));
                            }, []);
                        return (
                            (0, r.useEffect)(() => {
                                const u = p.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', f, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', f, { capture: !0 }),
                                            u && window.clearTimeout(u);
                                    }
                                );
                            }, []),
                            (0, r.useEffect)(() => {
                                !1 === D && b();
                            }, [D, b]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', b),
                                    () => {
                                        window.removeEventListener('mouseleave', b), b();
                                    }
                                ),
                                [b],
                            ),
                            D
                                ? (0, r.cloneElement)(
                                      e,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((T = e.props.onMouseEnter),
                                                  (u) => {
                                                      (u.clientX === window.innerWidth &&
                                                          u.clientY === window.innerHeight) ||
                                                          ((p.current.timeoutId = window.setTimeout(v, E ? 100 : 400)),
                                                          n && n(u),
                                                          T && T(u));
                                                  }),
                                              onMouseLeave: ((u) => (e) => {
                                                  b(), null == i || i(e), null == u || u(e);
                                              })(e.props.onMouseLeave),
                                              onClick: ((u) => (e) => {
                                                  !1 === A && b(), null == s || s(e), null == u || u(e);
                                              })(e.props.onClick),
                                              onMouseDown: ((u) => (e) => {
                                                  !1 === A && b(), null == o || o(e), null == u || u(e);
                                              })(e.props.onMouseDown),
                                          },
                                          g,
                                      ),
                                  )
                                : e
                        );
                        var T;
                    },
                    vu = ['children'];
                function bu() {
                    return (
                        (bu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        bu.apply(this, arguments)
                    );
                }
                const fu = (u) => {
                        let e = u.children,
                            t = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(u);
                                for (r = 0; r < n.length; r++) (t = n[r]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                return a;
                            })(u, vu);
                        return a().createElement(
                            wu,
                            bu(
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
                    Tu = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Su() {
                    return (
                        (Su =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        Su.apply(this, arguments)
                    );
                }
                const xu = R.views.common.tooltip_window.simple_tooltip_content,
                    Ru = (u) => {
                        let e = u.children,
                            t = u.body,
                            n = u.header,
                            i = u.note,
                            o = u.alert,
                            s = u.args,
                            l = (function (u, e) {
                                if (null == u) return {};
                                var t,
                                    r,
                                    a = {},
                                    n = Object.keys(u);
                                for (r = 0; r < n.length; r++) (t = n[r]), e.indexOf(t) >= 0 || (a[t] = u[t]);
                                return a;
                            })(u, Tu);
                        const E = (0, r.useMemo)(() => {
                            const u = Object.assign({}, s, { body: t, header: n, note: i, alert: o });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [o, t, n, i, s]);
                        return a().createElement(
                            wu,
                            Su(
                                {
                                    contentId:
                                        ((_ = null == s ? void 0 : s.hasHtmlContent),
                                        _ ? xu.SimpleTooltipHtmlContent('resId') : xu.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: E,
                                },
                                l,
                            ),
                            e,
                        );
                        var _;
                    };
                function Mu() {
                    return (
                        (Mu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        Mu.apply(this, arguments)
                    );
                }
                const Pu = ({ children: u, tooltipArgs: e, className: t }) => {
                    if (!e) return u;
                    const r = a().createElement('div', { className: t }, u);
                    if (e.header || e.body) return a().createElement(Ru, e, r);
                    const n = e.contentId,
                        i = e.args,
                        o = null == i ? void 0 : i.contentId;
                    return n || o
                        ? a().createElement(wu, Mu({}, e, { contentId: n || o }), r)
                        : a().createElement(fu, e, r);
                };
                class Lu extends a().PureComponent {
                    render() {
                        let u;
                        u = 'gold' === this.props.format ? K.B3.GOLD : K.B3.INTEGRAL;
                        const e = K.Z5.getNumberFormat(this.props.value, u);
                        return void 0 !== this.props.value && void 0 !== e ? e : null;
                    }
                }
                (Lu.defaultProps = { format: 'integral' }),
                    _u.Items,
                    _u.Equipment,
                    _u.Xp,
                    _u.XpFactor,
                    _u.Blueprints,
                    _u.BlueprintsAny,
                    _u.Goodies,
                    _u.Berths,
                    _u.Slots,
                    _u.Tokens,
                    _u.CrewSkins,
                    _u.CrewBooks,
                    _u.Customizations,
                    _u.CreditsFactor,
                    _u.TankmenXp,
                    _u.TankmenXpFactor,
                    _u.FreeXpFactor,
                    _u.BattleToken,
                    _u.HBVehicleUnlock,
                    _u.PremiumUniversal,
                    _u.NaturalCover,
                    _u.BpCoin,
                    _u.BattlePassSelectToken,
                    _u.BattlaPassFinalAchievement,
                    _u.BattleBadge,
                    _u.BonusX5,
                    _u.CrewBonusX3,
                    _u.NewYearFillers,
                    _u.NewYearInvoice,
                    _u.EpicSelectToken,
                    _u.Comp7TokenWeeklyReward,
                    _u.BattleBoosterGift,
                    _u.CosmicLootboxCommon,
                    _u.CosmicLootboxSilver,
                    _u.Gold,
                    _u.Credits,
                    _u.Crystal,
                    _u.FreeXp,
                    _u.BattlePassPoints,
                    _u.PremiumPlus,
                    _u.Premium;
                const Ou = {
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
                    yu = ({
                        name: u,
                        image: e,
                        isPeriodic: t = !1,
                        size: r = cu.Big,
                        special: n,
                        value: i,
                        valueType: o,
                        style: s,
                        className: l,
                        classNames: E,
                        tooltipArgs: _,
                        periodicIconTooltipArgs: A,
                    }) => {
                        const c = ((u) => {
                                if (void 0 === u) return null;
                                switch (u) {
                                    case du.BATTLE_BOOSTER:
                                    case du.BATTLE_BOOSTER_REPLACE:
                                        return Du.BATTLE_BOOSTER;
                                }
                            })(n),
                            F = ((u) => {
                                if (void 0 === u) return null;
                                switch (u) {
                                    case du.BATTLE_BOOSTER:
                                        return mu.BATTLE_BOOSTER;
                                    case du.BATTLE_BOOSTER_REPLACE:
                                        return mu.BATTLE_BOOSTER_REPLACE;
                                    case du.BUILT_IN_EQUIPMENT:
                                        return mu.BUILT_IN_EQUIPMENT;
                                    case du.EQUIPMENT_PLUS:
                                        return mu.EQUIPMENT_PLUS;
                                    case du.EQUIPMENT_TROPHY_BASIC:
                                        return mu.EQUIPMENT_TROPHY_BASIC;
                                    case du.EQUIPMENT_TROPHY_UPGRADED:
                                        return mu.EQUIPMENT_TROPHY_UPGRADED;
                                    case du.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return mu.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case du.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return mu.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case du.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return mu.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case du.PROGRESSION_STYLE_UPGRADED_1:
                                        return mu.PROGRESSION_STYLE_UPGRADED_1;
                                    case du.PROGRESSION_STYLE_UPGRADED_2:
                                        return mu.PROGRESSION_STYLE_UPGRADED_2;
                                    case du.PROGRESSION_STYLE_UPGRADED_3:
                                        return mu.PROGRESSION_STYLE_UPGRADED_3;
                                    case du.PROGRESSION_STYLE_UPGRADED_4:
                                        return mu.PROGRESSION_STYLE_UPGRADED_4;
                                }
                            })(n),
                            d = ((u, e) => {
                                if (void 0 === u) return null;
                                switch (e) {
                                    case Fu.MULTI: {
                                        const e = Number(u);
                                        return isFinite(e) && e > 1 ? `x${Math.floor(e)}` : null;
                                    }
                                    case Fu.CURRENCY:
                                    case Fu.NUMBER:
                                        return a().createElement(Lu, { format: 'integral', value: Number(u) });
                                    case Fu.PREMIUM_PLUS: {
                                        const e = Number(u);
                                        return isNaN(e) ? u : null;
                                    }
                                    default:
                                        return u;
                                }
                            })(i, o);
                        return a().createElement(
                            'div',
                            { className: h()(Ou.base, Ou[`base__${r}`], l), style: s },
                            a().createElement(
                                Pu,
                                { tooltipArgs: _, className: Ou.tooltipWrapper },
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement(
                                        'div',
                                        { className: h()(Ou.image, null == E ? void 0 : E.image) },
                                        c &&
                                            a().createElement('div', {
                                                className: h()(Ou.highlight, null == E ? void 0 : E.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${c}_highlight)`,
                                                },
                                            }),
                                        e &&
                                            a().createElement('div', {
                                                className: h()(Ou.icon, null == E ? void 0 : E.rewardIcon),
                                                style: { backgroundImage: `url(${e})` },
                                            }),
                                        F &&
                                            a().createElement('div', {
                                                className: h()(Ou.overlay, null == E ? void 0 : E.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${F}_overlay)`,
                                                },
                                            }),
                                    ),
                                    d &&
                                        a().createElement(
                                            'div',
                                            {
                                                className: h()(
                                                    Ou.info,
                                                    Ou[`info__${u}`],
                                                    o === Fu.MULTI && Ou.info__multi,
                                                    null == E ? void 0 : E.info,
                                                ),
                                            },
                                            d,
                                        ),
                                ),
                            ),
                            t &&
                                a().createElement(
                                    Pu,
                                    { tooltipArgs: A },
                                    a().createElement('div', {
                                        className: h()(Ou.timer, null == E ? void 0 : E.periodicIcon),
                                    }),
                                ),
                        );
                    };
                function ku() {
                    return (
                        (ku =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = arguments[e];
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                                }
                                return u;
                            }),
                        ku.apply(this, arguments)
                    );
                }
                const Iu = ({ isDisableAnimation: u, rewards: e }) => {
                        const t = (u) => ({ animationDelay: 1.7 + 0.2 * u + 's' }),
                            r = h()('ExtraRewards_base_40', u && 'ExtraRewards_base__disableAnim_ac');
                        return a().createElement(
                            'div',
                            { className: r },
                            e.map(({ value: u, id: e }, r) => {
                                return a().createElement(
                                    yu,
                                    ku(
                                        { key: e, classMix: 'ExtraRewards_item_38', style: t(r) },
                                        {
                                            name: (n = u).label,
                                            size: cu.Big,
                                            image: n.icon || void 0,
                                            tooltipArgs: { args: { tooltipId: n.tooltipId } },
                                        },
                                    ),
                                );
                                var n;
                            }),
                        );
                    },
                    Nu = 'CongratsMainRewardApp_vehicleInfoText_67',
                    Uu = () => {
                        const u = ru('model', tu.None),
                            e = u.onClose,
                            t = u.onShowInHangar,
                            n = u.vehicle,
                            i = ru('model.rewards'),
                            o = (0, r.useState)(!1),
                            s = o[0],
                            l = o[1],
                            E = (0, r.useCallback)(() => l(!0), [l]),
                            _ = (0, r.useCallback)(() => e(), [e]),
                            A = (0, r.useCallback)(() => t(), [t]),
                            c = (0, r.useCallback)(() => e(), [e]);
                        iu(au.n.ESCAPE, c);
                        const F = (0, r.useMemo)(() => ({ animationDelay: 1.7 + 0.2 * (i.length - 1) + 1 + 's' }), [i]),
                            d = h()('CongratsMainRewardApp_base_c7', s && 'CongratsMainRewardApp_base__disableAnim_1a');
                        return a().createElement(
                            'div',
                            { className: d, onClick: E },
                            a().createElement(
                                'div',
                                { className: 'CongratsMainRewardApp_header_1d' },
                                R.strings.hb_lobby.mainReward.header(),
                            ),
                            a().createElement(
                                'div',
                                { className: 'CongratsMainRewardApp_vehicleInfo_9c' },
                                a().createElement('span', { className: Nu }, R.strings.menu.header.level.$num(n.level)),
                                a().createElement(Eu, {
                                    classMix: 'CongratsMainRewardApp_vehicleTypeIcon_bf',
                                    type: n.type,
                                    size: su.C83x74,
                                    color: lu.Elite,
                                }),
                                a().createElement('span', { className: Nu }, n.name),
                            ),
                            a().createElement('div', { className: 'CongratsMainRewardApp_glow_14' }),
                            a().createElement('div', { className: 'CongratsMainRewardApp_radialLines_75' }),
                            a().createElement(
                                'div',
                                { className: 'CongratsMainRewardApp_centerInfo_3f' },
                                a().createElement(Iu, { rewards: i, isDisableAnimation: s }),
                            ),
                            a().createElement(
                                'div',
                                { className: 'CongratsMainRewardApp_showInHangarBtnContainer_bf', style: F },
                                a().createElement(
                                    W,
                                    {
                                        mixClass: 'CongratsMainRewardApp_showInHangarBtn_4d',
                                        onClick: A,
                                        size: 'extraSmall',
                                    },
                                    a().createElement(
                                        'span',
                                        { className: 'CongratsMainRewardApp_btnText_4b' },
                                        R.strings.hb_lobby.mainReward.watchInHangar(),
                                    ),
                                ),
                            ),
                            a().createElement(
                                'div',
                                { className: 'CongratsMainRewardApp_closeButton_0d' },
                                a().createElement(j, {
                                    caption: R.strings.hb_lobby.mainReward.close(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: _,
                                }),
                            ),
                        );
                    };
                engine.whenReady.then(() => {
                    k().render(
                        a().createElement(O, null, a().createElement(Uu, null)),
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
        return __webpack_modules__[u].call(t.exports, t, t.exports, __webpack_require__), t.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (u, e, t, r) => {
            if (!e) {
                var a = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [e, t, r] = deferred[s], n = !0, i = 0; i < e.length; i++)
                        (!1 & r || a >= r) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[i]))
                            ? e.splice(i--, 1)
                            : ((n = !1), r < a && (a = r));
                    if (n) {
                        deferred.splice(s--, 1);
                        var o = t();
                        void 0 !== o && (u = o);
                    }
                }
                return u;
            }
            r = r || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > r; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [e, t, r];
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
        (() => {
            var u = { 667: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, t) => {
                    var r,
                        a,
                        [n, i, o] = t,
                        s = 0;
                    if (n.some((e) => 0 !== u[e])) {
                        for (r in i) __webpack_require__.o(i, r) && (__webpack_require__.m[r] = i[r]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (e && e(t); s < n.length; s++)
                        (a = n[s]), __webpack_require__.o(u, a) && u[a] && u[a][0](), (u[a] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(9331));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
