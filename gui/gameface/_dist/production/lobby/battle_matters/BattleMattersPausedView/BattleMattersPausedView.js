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
            67: (e, t, r) => {
                'use strict';
                r.d(t, { O: () => $ });
                var a = {};
                r.r(a), r.d(a, { mouse: () => u, onResize: () => d });
                var n = {};
                r.r(n),
                    r.d(n, {
                        events: () => a,
                        getMouseGlobalPosition: () => m,
                        getSize: () => _,
                        graphicsQuality: () => h,
                    });
                var i = {};
                r.r(i), r.d(i, { getBgUrl: () => E, getTextureUrl: () => g });
                var o = {};
                function s(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                function l(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                r.r(o),
                    r.d(o, {
                        addModelObserver: () => T,
                        addPreloadTexture: () => O,
                        children: () => i,
                        displayStatus: () => v,
                        displayStatusIs: () => V,
                        events: () => w,
                        extraSize: () => z,
                        forceTriggerMouseMove: () => B,
                        freezeTextureBeforeResize: () => P,
                        getBrowserTexturePath: () => A,
                        getDisplayStatus: () => j,
                        getScale: () => D,
                        getSize: () => k,
                        getViewGlobalPosition: () => C,
                        isEventHandled: () => G,
                        isFocused: () => U,
                        pxToRem: () => N,
                        remToPx: () => W,
                        resize: () => R,
                        sendEvent: () => M,
                        setAnimateWindow: () => I,
                        setEventHandled: () => F,
                        setInputPaddingsRem: () => y,
                        setSidePaddingsRem: () => H,
                        whenTutorialReady: () => K,
                    });
                const d = s('clientResized'),
                    c = { down: s('mousedown'), up: s('mouseup'), move: s('mousemove') };
                const u = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && l(!1);
                    }
                    function r() {
                        e.enabled && l(!0);
                    }
                    function a() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', r))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', r))
                            : l(!1);
                    }
                    const n = ['down', 'up', 'move'].reduce(
                        (t, r) => (
                            (t[r] = (function (t) {
                                return (r) => {
                                    e.listeners += 1;
                                    let n = !0;
                                    const i = `mouse${t}`,
                                        o = c[t]((e) => r([e, 'outside']));
                                    function s(e) {
                                        r([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, s),
                                        a(),
                                        () => {
                                            n &&
                                                (o(),
                                                window.removeEventListener(i, s),
                                                (e.listeners -= 1),
                                                a(),
                                                (n = !1));
                                        }
                                    );
                                };
                            })(r)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, n, {
                        disable() {
                            (e.enabled = !1), a();
                        },
                        enable() {
                            (e.enabled = !0), a();
                        },
                        enableOutside() {
                            e.enabled && l(!0);
                        },
                        disableOutside() {
                            e.enabled && l(!1);
                        },
                    });
                })();
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const h = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function g(e, t, r = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, r);
                }
                function E(e, t, r) {
                    return `url(${g(e, t, r)})`;
                }
                const v = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    w = {
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
                    b = ['args'];
                const f = 2,
                    p = 16,
                    L = 32,
                    x = 64,
                    S = (e, t) => {
                        const r = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const n = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var r,
                                        a,
                                        n = {},
                                        i = Object.keys(e);
                                    for (a = 0; a < i.length; a++) (r = i[a]), t.indexOf(r) >= 0 || (n[r] = e[r]);
                                    return n;
                                })(t, b);
                            return void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: r, type: e }, i, {
                                          arguments:
                                              ((a = n),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: r, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: r, type: e });
                        var a;
                    },
                    M = {
                        close(e) {
                            S('popover' === e ? f : L);
                        },
                        minimize() {
                            S(x);
                        },
                        move(e) {
                            S(p, { isMouseEvent: !0, on: e });
                        },
                    };
                function O(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function y(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function A(e, t, r, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, r, a);
                }
                function T(e, t, r) {
                    return viewEnv.addDataChangedCallback(e, t, r);
                }
                function H(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function k(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function R(e, t, r = 'px') {
                    return 'rem' === r ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function C(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: W(t.x), y: W(t.y) };
                }
                function P() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function D() {
                    return viewEnv.getScale();
                }
                function N(e) {
                    return viewEnv.pxToRem(e);
                }
                function W(e) {
                    return viewEnv.remToPx(e);
                }
                function I(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function U() {
                    return viewEnv.isFocused();
                }
                function F() {
                    return viewEnv.setEventHandled();
                }
                function G() {
                    return viewEnv.isEventHandled();
                }
                function B() {
                    viewEnv.forceTriggerMouseMove();
                }
                function j() {
                    return viewEnv.getShowingStatus();
                }
                const V = Object.keys(v).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === v[t]), e), {}),
                    z = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    K = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : w.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    $ = { view: o, client: n };
            },
            521: (e, t, r) => {
                'use strict';
                let a, n;
                r.d(t, { n: () => a }),
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
                    })(n || (n = {}));
            },
            358: (e, t, r) => {
                'use strict';
                r.d(t, { Z: () => i });
                var a = r(67);
                class n {
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
                        return window.__dataTracker || (window.__dataTracker = new n()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, t, r = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const i = a.O.view.addModelObserver(e, r, n);
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
                            const a = this._callbacks[r];
                            void 0 !== a && a(e, t);
                        });
                    }
                }
                n.__instance = void 0;
                const i = n;
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
            364: (e, t, r) => {
                'use strict';
                r.d(t, { ry: () => w });
                class a {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: r }) => {
                                    let a = e.target;
                                    do {
                                        if (a === t) return;
                                        a = a.parentNode;
                                    } while (a);
                                    r();
                                });
                            });
                    }
                    static get instance() {
                        return a.__instance || (a.__instance = new a()), a.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const r = e,
                            a = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== r || t !== a)),
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
                const n = a;
                var i = r(358);
                const o = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    s = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, r) => userLocale.getTimeFormat(e, t, void 0 === r || r),
                        getTimeString: (e, t, r) => userLocale.getTimeString(e, t, void 0 === r || r),
                    };
                let l;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(l || (l = {}));
                const d = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = r(521),
                    h = r(67);
                const g = ['args'];
                function E(e, t, r, a, n, i, o) {
                    try {
                        var s = e[i](o),
                            l = s.value;
                    } catch (e) {
                        return void r(e);
                    }
                    s.done ? t(l) : Promise.resolve(l).then(a, n);
                }
                const v = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    w = (function () {
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
                                    return new Promise(function (a, n) {
                                        var i = e.apply(t, r);
                                        function o(e) {
                                            E(i, a, n, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            E(i, a, n, o, s, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    b = (e, t) => {
                        const r = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const n = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var r,
                                        a,
                                        n = {},
                                        i = Object.keys(e);
                                    for (a = 0; a < i.length; a++) (r = i[a]), t.indexOf(r) >= 0 || (n[r] = e[r]);
                                    return n;
                                })(t, g);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: r, type: e }, i, {
                                          arguments:
                                              ((a = n),
                                              Object.entries(a).map(([e, t]) => {
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
                        var a;
                    },
                    f = () => b(l.CLOSE),
                    p = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var L = r(572);
                const x = n.instance,
                    S = {
                        DataTracker: i.Z,
                        ViewModel: L.Z,
                        ViewEventType: l,
                        NumberFormatType: d,
                        RealFormatType: c,
                        TimeFormatType: u,
                        DateFormatType: _,
                        makeGlobalBoundingBox: v,
                        sendMoveEvent: (e) => b(l.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => b(l.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, r = 0) => {
                            b(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: r, args: t });
                        },
                        sendShowPopOverEvent: (e, t, r, a, n = R.invalid('resId'), i) => {
                            const o = h.O.view.getViewGlobalPosition(),
                                s = r.getBoundingClientRect(),
                                d = s.x,
                                c = s.y,
                                u = s.width,
                                _ = s.height,
                                m = {
                                    x: h.O.view.pxToRem(d) + o.x,
                                    y: h.O.view.pxToRem(c) + o.y,
                                    width: h.O.view.pxToRem(u),
                                    height: h.O.view.pxToRem(_),
                                };
                            b(l.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: n,
                                direction: t,
                                bbox: v(m),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => p(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            p(e, f);
                        },
                        handleViewEvent: b,
                        onBindingsReady: w,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(l.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(l.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(l.POP_OVER),
                        dumpViewModel: function e(t) {
                            const r = {};
                            if ('object' != typeof t) return t;
                            for (const a in t)
                                if (Object.prototype.hasOwnProperty.call(t, a)) {
                                    const n = Object.prototype.toString.call(t[a]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = t[a];
                                        r[a] = [];
                                        for (let t = 0; t < n.length; t++) r[a].push({ value: e(n[t].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (r[a] = e(t[a]))
                                            : (r[a] = t[a]);
                                }
                            return r;
                        },
                        ClickOutsideManager: x,
                        SystemLocale: o,
                        UserLocale: s,
                    };
                window.ViewEnvHelper = S;
            },
            825: (e, t, r) => {
                'use strict';
                var a = r(179),
                    n = r.n(a);
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
                var o = r(67);
                const s = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var l;
                function d(e, t, r) {
                    const a = (function (e, t) {
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
                        n = (function (e, t) {
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
                        i = Math.min(a, n);
                    return {
                        extraLarge: i === r.extraLarge.weight,
                        large: i === r.large.weight,
                        medium: i === r.medium.weight,
                        small: i === r.small.weight,
                        extraSmall: i === r.extraSmall.weight,
                        extraLargeWidth: a === r.extraLarge.weight,
                        largeWidth: a === r.large.weight,
                        mediumWidth: a === r.medium.weight,
                        smallWidth: a === r.small.weight,
                        extraSmallWidth: a === r.extraSmall.weight,
                        extraLargeHeight: n === r.extraLarge.weight,
                        largeHeight: n === r.large.weight,
                        mediumHeight: n === r.medium.weight,
                        smallHeight: n === r.small.weight,
                        extraSmallHeight: n === r.extraSmall.weight,
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
                    _ = c.height,
                    m = Object.assign({ width: u, height: _ }, d(u, _, s)),
                    h = (0, a.createContext)(m),
                    g = ['children'];
                const E = (e) => {
                    let t = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                a,
                                n = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) (r = i[a]), t.indexOf(r) >= 0 || (n[r] = e[r]);
                            return n;
                        })(e, g);
                    const n = (0, a.useContext)(h),
                        o = n.extraLarge,
                        s = n.large,
                        l = n.medium,
                        d = n.small,
                        c = n.extraSmall,
                        u = n.extraLargeWidth,
                        _ = n.largeWidth,
                        m = n.mediumWidth,
                        E = n.smallWidth,
                        v = n.extraSmallWidth,
                        w = n.extraLargeHeight,
                        b = n.largeHeight,
                        f = n.mediumHeight,
                        p = n.smallHeight,
                        L = n.extraSmallHeight,
                        x = { extraLarge: w, large: b, medium: f, small: p, extraSmall: L };
                    if (r.extraLarge || r.large || r.medium || r.small || r.extraSmall) {
                        if (r.extraLarge && o) return t;
                        if (r.large && s) return t;
                        if (r.medium && l) return t;
                        if (r.small && d) return t;
                        if (r.extraSmall && c) return t;
                    } else {
                        if (r.extraLargeWidth && u) return i(t, r, x);
                        if (r.largeWidth && _) return i(t, r, x);
                        if (r.mediumWidth && m) return i(t, r, x);
                        if (r.smallWidth && E) return i(t, r, x);
                        if (r.extraSmallWidth && v) return i(t, r, x);
                        if (
                            !(r.extraLargeWidth || r.largeWidth || r.mediumWidth || r.smallWidth || r.extraSmallWidth)
                        ) {
                            if (r.extraLargeHeight && w) return t;
                            if (r.largeHeight && b) return t;
                            if (r.mediumHeight && f) return t;
                            if (r.smallHeight && p) return t;
                            if (r.extraSmallHeight && L) return t;
                        }
                    }
                    return null;
                };
                E.defaultProps = {
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
                (0, a.memo)(E);
                const v = (e) => {
                        const t = (0, a.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    w = (0, a.memo)(({ children: e }) => {
                        const t = (0, a.useContext)(h),
                            r = (0, a.useState)(t),
                            i = r[0],
                            l = r[1],
                            c = (0, a.useCallback)((e, t) => {
                                const r = o.O.view.pxToRem(e),
                                    a = o.O.view.pxToRem(t);
                                l(Object.assign({ width: r, height: a }, d(r, a, s)));
                            }, []);
                        v(() => {
                            engine.on('clientResized', c);
                        }),
                            (0, a.useEffect)(() => () => engine.off('clientResized', c), [c]);
                        const u = (0, a.useMemo)(() => Object.assign({}, i), [i]);
                        return n().createElement(h.Provider, { value: u }, e);
                    });
                var b = r(483),
                    f = r.n(b),
                    p = r(926),
                    L = r.n(p);
                let x, S, M;
                !(function (e) {
                    (e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = s.small.width)] = 'Small'),
                        (e[(e.Medium = s.medium.width)] = 'Medium'),
                        (e[(e.Large = s.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge');
                })(x || (x = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.width)] = 'Small'),
                            (e[(e.Medium = s.medium.width)] = 'Medium'),
                            (e[(e.Large = s.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge');
                    })(S || (S = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = s.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.height)] = 'Small'),
                            (e[(e.Medium = s.medium.height)] = 'Medium'),
                            (e[(e.Large = s.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.height)] = 'ExtraLarge');
                    })(M || (M = {}));
                const O = () => {
                        const e = (0, a.useContext)(h),
                            t = e.width,
                            r = e.height,
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return x.ExtraLarge;
                                    case e.large:
                                        return x.Large;
                                    case e.medium:
                                        return x.Medium;
                                    case e.small:
                                        return x.Small;
                                    case e.extraSmall:
                                        return x.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), x.ExtraSmall;
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return S.ExtraLarge;
                                    case e.largeWidth:
                                        return S.Large;
                                    case e.mediumWidth:
                                        return S.Medium;
                                    case e.smallWidth:
                                        return S.Small;
                                    case e.extraSmallWidth:
                                        return S.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), S.ExtraSmall;
                                }
                            })(e),
                            o = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return M.ExtraLarge;
                                    case e.largeHeight:
                                        return M.Large;
                                    case e.mediumHeight:
                                        return M.Medium;
                                    case e.smallHeight:
                                        return M.Small;
                                    case e.extraSmallHeight:
                                        return M.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), M.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: n, mediaWidth: i, mediaHeight: o, remScreenWidth: t, remScreenHeight: r };
                    },
                    y = ['children', 'className'];
                function A() {
                    return (
                        (A =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
                                }
                                return e;
                            }),
                        A.apply(this, arguments)
                    );
                }
                const T = {
                        [S.ExtraSmall]: '',
                        [S.Small]: L().SMALL_WIDTH,
                        [S.Medium]: `${L().SMALL_WIDTH} ${L().MEDIUM_WIDTH}`,
                        [S.Large]: `${L().SMALL_WIDTH} ${L().MEDIUM_WIDTH} ${L().LARGE_WIDTH}`,
                        [S.ExtraLarge]: `${L().SMALL_WIDTH} ${L().MEDIUM_WIDTH} ${L().LARGE_WIDTH} ${L().EXTRA_LARGE_WIDTH}`,
                    },
                    H = {
                        [M.ExtraSmall]: '',
                        [M.Small]: L().SMALL_HEIGHT,
                        [M.Medium]: `${L().SMALL_HEIGHT} ${L().MEDIUM_HEIGHT}`,
                        [M.Large]: `${L().SMALL_HEIGHT} ${L().MEDIUM_HEIGHT} ${L().LARGE_HEIGHT}`,
                        [M.ExtraLarge]: `${L().SMALL_HEIGHT} ${L().MEDIUM_HEIGHT} ${L().LARGE_HEIGHT} ${L().EXTRA_LARGE_HEIGHT}`,
                    },
                    k = {
                        [x.ExtraSmall]: '',
                        [x.Small]: L().SMALL,
                        [x.Medium]: `${L().SMALL} ${L().MEDIUM}`,
                        [x.Large]: `${L().SMALL} ${L().MEDIUM} ${L().LARGE}`,
                        [x.ExtraLarge]: `${L().SMALL} ${L().MEDIUM} ${L().LARGE} ${L().EXTRA_LARGE}`,
                    },
                    C = (e) => {
                        let t = e.children,
                            r = e.className,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    a,
                                    n = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) (r = i[a]), t.indexOf(r) >= 0 || (n[r] = e[r]);
                                return n;
                            })(e, y);
                        const i = O(),
                            o = i.mediaWidth,
                            s = i.mediaHeight,
                            l = i.mediaSize;
                        return n().createElement('div', A({ className: f()(r, T[o], H[s], k[l]) }, a), t);
                    },
                    P = ['children'];
                const D = (e) => {
                    let t = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                a,
                                n = {},
                                i = Object.keys(e);
                            for (a = 0; a < i.length; a++) (r = i[a]), t.indexOf(r) >= 0 || (n[r] = e[r]);
                            return n;
                        })(e, P);
                    return n().createElement(w, null, n().createElement(C, r, t));
                };
                var N = r(493),
                    W = r.n(N);
                function I(e) {
                    engine.call('PlaySound', e);
                }
                const U = {
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
                let F, G;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(F || (F = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(G || (G = {}));
                const B = ({
                    children: e,
                    size: t,
                    isFocused: r,
                    type: i,
                    disabled: o,
                    mixClass: s,
                    soundHover: l,
                    soundClick: d,
                    onMouseEnter: c,
                    onMouseMove: u,
                    onMouseDown: _,
                    onMouseUp: m,
                    onMouseLeave: h,
                    onClick: g,
                }) => {
                    const E = (0, a.useRef)(null),
                        v = (0, a.useState)(r),
                        w = v[0],
                        b = v[1],
                        p = (0, a.useState)(!1),
                        L = p[0],
                        x = p[1],
                        S = (0, a.useState)(!1),
                        M = S[0],
                        O = S[1],
                        y = (0, a.useCallback)(() => {
                            o || (E.current && (E.current.focus(), b(!0)));
                        }, [o]),
                        A = (0, a.useCallback)(
                            (e) => {
                                w && null !== E.current && !E.current.contains(e.target) && b(!1);
                            },
                            [w],
                        ),
                        T = (0, a.useCallback)(
                            (e) => {
                                o || (g && g(e));
                            },
                            [o, g],
                        ),
                        H = (0, a.useCallback)(
                            (e) => {
                                o || (null !== l && I(l), c && c(e), O(!0));
                            },
                            [o, l, c],
                        ),
                        k = (0, a.useCallback)(
                            (e) => {
                                u && u(e);
                            },
                            [u],
                        ),
                        C = (0, a.useCallback)(
                            (e) => {
                                o || (m && m(e), x(!1));
                            },
                            [o, m],
                        ),
                        P = (0, a.useCallback)(
                            (e) => {
                                o || (null !== d && I(d), _ && _(e), r && y(), x(!0));
                            },
                            [o, d, _, y, r],
                        ),
                        D = (0, a.useCallback)(
                            (e) => {
                                o || (h && h(e), x(!1));
                            },
                            [o, h],
                        ),
                        N = f()(
                            U.base,
                            U[`base__${i}`],
                            {
                                [U.base__disabled]: o,
                                [U[`base__${t}`]]: t,
                                [U.base__focus]: w,
                                [U.base__highlightActive]: L,
                                [U.base__firstHover]: M,
                            },
                            s,
                        ),
                        W = f()(U.state, U.state__default);
                    return (
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mousedown', A),
                                () => {
                                    document.removeEventListener('mousedown', A);
                                }
                            ),
                            [A],
                        ),
                        (0, a.useEffect)(() => {
                            b(r);
                        }, [r]),
                        n().createElement(
                            'div',
                            {
                                ref: E,
                                className: N,
                                onMouseEnter: H,
                                onMouseMove: k,
                                onMouseUp: C,
                                onMouseDown: P,
                                onMouseLeave: D,
                                onClick: T,
                            },
                            i !== F.ghost &&
                                n().createElement(
                                    n().Fragment,
                                    null,
                                    n().createElement('div', { className: U.back }),
                                    n().createElement('span', { className: U.texture }),
                                ),
                            n().createElement(
                                'span',
                                { className: W },
                                n().createElement('span', { className: U.stateDisabled }),
                                n().createElement('span', { className: U.stateHighlightHover }),
                                n().createElement('span', { className: U.stateHighlightActive }),
                            ),
                            n().createElement(
                                'span',
                                { className: U.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                B.defaultProps = { type: F.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const j = (0, a.memo)(B);
                var V = r(521);
                r(364);
                const z = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function K(e = V.n.NONE, t = z, r = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== V.n.NONE)
                            return (
                                window.addEventListener('keydown', a, r),
                                () => {
                                    window.removeEventListener('keydown', a, r);
                                }
                            );
                        function a(a) {
                            if (a.keyCode === e) {
                                if (o.O.view.isEventHandled()) return;
                                o.O.view.setEventHandled(), t(a), r && a.stopPropagation();
                            }
                        }
                    }, [t, e, r]);
                }
                var $ = r(403);
                const q = 'Background_base_1b',
                    Y = 'Background_image_71',
                    X = ({ isBlurred: e, children: t, onLoaded: r }) => {
                        const i = e
                            ? 'img://gui/maps/icons/battleMatters/common/background_blurred.dds'
                            : R.images.gui.maps.icons.battleMatters.common.background();
                        var o, s;
                        return (
                            (o = i),
                            (s = r),
                            (0, a.useEffect)(() => {
                                if (!s) return;
                                const e = new Image();
                                return (
                                    e.addEventListener('load', s),
                                    e.addEventListener('error', s),
                                    (e.src = o),
                                    () => {
                                        e.removeEventListener('load', s), e.removeEventListener('error', s);
                                    }
                                );
                            }, [s, o]),
                            n().createElement(
                                'div',
                                { className: q },
                                n().createElement('div', { className: Y, style: { backgroundImage: `url(${i})` } }, t),
                            )
                        );
                    };
                function Z() {
                    return !1;
                }
                console.log;
                var Q = r(174);
                function J(e, t) {
                    var r = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (r) return (r = r.call(e)).next.bind(r);
                    if (
                        Array.isArray(e) ||
                        (r = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return ee(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === r && e.constructor && (r = e.constructor.name);
                            if ('Map' === r || 'Set' === r) return Array.from(e);
                            if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                                return ee(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        r && (e = r);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function ee(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                    return a;
                }
                const te = (e) => (0 === e ? window : window.subViews.get(e));
                const re = ((e, t) => {
                        const r = (0, a.createContext)({});
                        return [
                            function ({ mode: i = 'real', options: s, children: l, mocks: d }) {
                                const c = (0, a.useRef)([]),
                                    u = (r, a, n) => {
                                        var i;
                                        const s = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: r = te,
                                                context: a = 'model',
                                            } = {}) {
                                                const n = new Map();
                                                function i(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? n.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, r) => {
                                                        r.forEach((t) => {
                                                            const r = n.get(t);
                                                            void 0 !== r && r(e);
                                                        });
                                                    });
                                                });
                                                const s = (e) => {
                                                    const n = r(t),
                                                        i = a.split('.').reduce((e, t) => e[t], n);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? i
                                                        : e.split('.').reduce((e, t) => {
                                                              const r = e[t];
                                                              return 'function' == typeof r ? r.bind(e) : r;
                                                          }, i);
                                                };
                                                return {
                                                    subscribe: (r, i) => {
                                                        const l = 'string' == typeof i ? `${a}.${i}` : a,
                                                            d = o.O.view.addModelObserver(l, t, !0);
                                                        return n.set(d, r), e && r(s(i)), d;
                                                    },
                                                    readByPath: s,
                                                    createCallback: (e, t) => {
                                                        const r = s(t);
                                                        return (...t) => {
                                                            r(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = s(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, r = J(n.keys()); !(e = r()).done; ) i(e.value, t);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(a),
                                            l =
                                                'real' === r
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (i = null == n ? void 0 : n.getter)
                                                                  ? i
                                                                  : () => {},
                                                      }),
                                            d = (e) =>
                                                'mocks' === r ? (null == n ? void 0 : n.getter(e)) : l.readByPath(e),
                                            u = (e) => c.current.push(e),
                                            _ = e({
                                                mode: r,
                                                readByPath: d,
                                                externalModel: l,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const a = null != t ? t : d(e),
                                                            n = Q.LO.box(a, { equals: Z });
                                                        return (
                                                            'real' === r &&
                                                                l.subscribe(
                                                                    (0, Q.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const a = null != t ? t : d(e),
                                                            n = Q.LO.box(a, { equals: Z });
                                                        return (
                                                            'real' === r &&
                                                                l.subscribe(
                                                                    (0, Q.aD)((e) => n.set(e)),
                                                                    e,
                                                                ),
                                                            n
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const a = d(t);
                                                        if (Array.isArray(e)) {
                                                            const n = e.reduce(
                                                                (e, t) => ((e[t] = Q.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === r &&
                                                                    l.subscribe(
                                                                        (0, Q.aD)((t) => {
                                                                            e.forEach((e) => {
                                                                                n[e].set(t[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                n
                                                            );
                                                        }
                                                        {
                                                            const n = e,
                                                                i = Object.entries(n),
                                                                o = i.reduce(
                                                                    (e, [t, r]) => ((e[r] = Q.LO.box(a[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === r &&
                                                                    l.subscribe(
                                                                        (0, Q.aD)((e) => {
                                                                            i.forEach(([t, r]) => {
                                                                                o[r].set(e[t]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: u,
                                            }),
                                            m = { mode: r, model: _, externalModel: l, cleanup: u };
                                        return {
                                            model: _,
                                            controls: 'mocks' === r && n ? n.controls(m) : t(m),
                                            externalModel: l,
                                            mode: r,
                                        };
                                    },
                                    _ = (0, a.useRef)(!1),
                                    m = (0, a.useState)(i),
                                    h = m[0],
                                    g = m[1],
                                    E = (0, a.useState)(() => u(i, s, d)),
                                    v = E[0],
                                    w = E[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        _.current ? w(u(h, s, d)) : (_.current = !0);
                                    }, [d, h, s]),
                                    (0, a.useEffect)(() => {
                                        g(i);
                                    }, [i]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            v.externalModel.dispose(), c.current.forEach((e) => e());
                                        },
                                        [v],
                                    ),
                                    n().createElement(r.Provider, { value: v }, l)
                                );
                            },
                            () => (0, a.useContext)(r),
                        ];
                    })(
                        () => ({ isLoaded: Q.LO.box(!1) }),
                        ({ externalModel: e, model: t }) => ({
                            gotoHangar: e.createCallbackNoArgs('gotoHangar'),
                            loaded: (0, Q.aD)(() => t.isLoaded.set(!0)),
                        }),
                    ),
                    ae = re[0],
                    ne = re[1],
                    ie = 'App_base_40',
                    oe = 'App_base__visible_4e',
                    se = 'App_content_d4',
                    le = 'App_iconWrapper_48',
                    de = 'App_iconLight_87',
                    ce = 'App_icon_2c',
                    ue = 'App_title_84',
                    _e = 'App_description_2e',
                    me = 'App_separator_c0',
                    he = 'App_button_77',
                    ge = R.strings.battle_matters.pausedScreen,
                    Ee = (0, $.Pi)(() => {
                        const e = ne(),
                            t = e.controls,
                            r = e.model;
                        var a;
                        return (
                            (a = t.gotoHangar),
                            K(V.n.ESCAPE, a),
                            n().createElement(
                                'div',
                                { className: f()(ie, r.isLoaded.get() && oe) },
                                n().createElement(X, { isBlurred: !0, onLoaded: t.loaded }),
                                n().createElement(
                                    'div',
                                    { className: se },
                                    n().createElement(
                                        'div',
                                        { className: le },
                                        n().createElement('div', { className: de }),
                                        n().createElement('div', { className: ce }),
                                    ),
                                    n().createElement('div', { className: ue }, ge.title()),
                                    n().createElement('div', { className: _e }, ge.description()),
                                    n().createElement('div', { className: me }),
                                    n().createElement(
                                        j,
                                        { mixClass: he, size: G.medium, onClick: t.gotoHangar },
                                        ge.buttonText(),
                                    ),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    W().render(
                        n().createElement(ae, null, n().createElement(D, null, n().createElement(Ee, null))),
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
        (__webpack_require__.O = (e, t, r, a) => {
            if (!t) {
                var n = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, r, a] = deferred[l], i = !0, o = 0; o < t.length; o++)
                        (!1 & a || n >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[o]))
                            ? t.splice(o--, 1)
                            : ((i = !1), a < n && (n = a));
                    if (i) {
                        deferred.splice(l--, 1);
                        var s = r();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > a; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, r, a];
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
        (__webpack_require__.j = 923),
        (() => {
            var e = { 923: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, r) => {
                    var a,
                        n,
                        [i, o, s] = r,
                        l = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (a in o) __webpack_require__.o(o, a) && (__webpack_require__.m[a] = o[a]);
                        if (s) var d = s(__webpack_require__);
                    }
                    for (t && t(r); l < i.length; l++)
                        (n = i[l]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
                    return __webpack_require__.O(d);
                },
                r = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [965], () => __webpack_require__(825));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
