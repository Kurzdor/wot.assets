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
                r.r(t), r.d(t, { mouse: () => s, onResize: () => i });
                var n = r(2472),
                    a = r(1176);
                const i = (0, n.E)('clientResized'),
                    o = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') },
                    s = (function () {
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
                                            s = o[t]((e) => r([e, 'outside']));
                                        function l(e) {
                                            r([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(i, l),
                                            n(),
                                            () => {
                                                a &&
                                                    (s(),
                                                    window.removeEventListener(i, l),
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
                        getMouseGlobalPosition: () => i,
                        getSize: () => a,
                        graphicsQuality: () => o,
                    });
                var n = r(527);
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
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
                r.d(t, { O: () => a });
                var n = r(5959);
                const a = { view: r(7641), client: n };
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
                        displayStatusIs: () => M,
                        events: () => i.U,
                        extraSize: () => O,
                        forceTriggerMouseMove: () => L,
                        freezeTextureBeforeResize: () => h,
                        getBrowserTexturePath: () => d,
                        getDisplayStatus: () => x,
                        getScale: () => w,
                        getSize: () => m,
                        getViewGlobalPosition: () => g,
                        isEventHandled: () => S,
                        isFocused: () => v,
                        pxToRem: () => p,
                        remToPx: () => E,
                        resize: () => _,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => b,
                        setEventHandled: () => f,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => u,
                        whenTutorialReady: () => A,
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
                function w() {
                    return viewEnv.getScale();
                }
                function p(e) {
                    return viewEnv.pxToRem(e);
                }
                function E(e) {
                    return viewEnv.remToPx(e);
                }
                function b(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function v() {
                    return viewEnv.isFocused();
                }
                function f() {
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
                const M = Object.keys(a.W).reduce(
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
                    A = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, r) => {
                'use strict';
                r.d(t, { qP: () => i });
                const n = ['args'],
                    a = (e, t) => {
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
                    i = {
                        close(e) {
                            a('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            a(64);
                        },
                        move(e) {
                            a(16, { isMouseEvent: !0, on: e });
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
            4179: (e, t, r) => {
                'use strict';
                r.d(t, { Sw: () => i.Z, B0: () => l, ry: () => b });
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
                var d;
                ((d = l || (l = {}))[(d.UNDEFINED = 0)] = 'UNDEFINED'),
                    (d[(d.TOOLTIP = 1)] = 'TOOLTIP'),
                    (d[(d.POP_OVER = 2)] = 'POP_OVER'),
                    (d[(d.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (d[(d.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (d[(d.MOVE = 16)] = 'MOVE'),
                    (d[(d.CLOSE = 32)] = 'CLOSE'),
                    (d[(d.MINIMIZE = 64)] = 'MINIMIZE');
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    u = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var g = r(5521),
                    h = r(3138);
                const w = ['args'];
                function p(e, t, r, n, a, i, o) {
                    try {
                        var s = e[i](o),
                            l = s.value;
                    } catch (e) {
                        return void r(e);
                    }
                    s.done ? t(l) : Promise.resolve(l).then(n, a);
                }
                const E = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    b = (function () {
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
                                            p(i, n, a, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            p(i, n, a, o, s, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    v = (e, t) => {
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
                                })(t, w);
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
                    f = () => v(l.CLOSE),
                    S = (e, t) => {
                        e.keyCode === g.n.ESCAPE && t();
                    };
                var L = r(7572);
                const x = a.instance,
                    M = {
                        DataTracker: i.Z,
                        ViewModel: L.Z,
                        ViewEventType: l,
                        NumberFormatType: c,
                        RealFormatType: u,
                        TimeFormatType: m,
                        DateFormatType: _,
                        makeGlobalBoundingBox: E,
                        sendMoveEvent: (e) => v(l.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => v(l.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, r = 0) => {
                            v(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: r, args: t });
                        },
                        sendShowPopOverEvent: (e, t, r, n, a = R.invalid('resId'), i) => {
                            const o = h.O.view.getViewGlobalPosition(),
                                s = r.getBoundingClientRect(),
                                d = s.x,
                                c = s.y,
                                u = s.width,
                                m = s.height,
                                _ = {
                                    x: h.O.view.pxToRem(d) + o.x,
                                    y: h.O.view.pxToRem(c) + o.y,
                                    width: h.O.view.pxToRem(u),
                                    height: h.O.view.pxToRem(m),
                                };
                            v(l.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: t,
                                bbox: E(_),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => S(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            S(e, f);
                        },
                        handleViewEvent: v,
                        onBindingsReady: b,
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
                        ClickOutsideManager: x,
                        SystemLocale: o,
                        UserLocale: s,
                    };
                window.ViewEnvHelper = M;
            },
            2521: (e, t, r) => {
                'use strict';
                var n = r(6179),
                    a = r.n(n),
                    i = r(493),
                    o = r.n(i);
                const s = (e, t, r) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && r.extraLarge) ||
                          (t.largeHeight && r.large) ||
                          (t.mediumHeight && r.medium) ||
                          (t.smallHeight && r.small) ||
                          (t.extraSmallHeight && r.extraSmall)
                            ? e
                            : null
                        : e;
                var l = r(3138);
                const d = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var c;
                function u(e, t, r) {
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
                })(c || (c = {}));
                const m = l.O.client.getSize('rem'),
                    _ = m.width,
                    g = m.height,
                    h = Object.assign({ width: _, height: g }, u(_, g, d)),
                    w = (0, n.createContext)(h),
                    p = ['children'],
                    E = (e) => {
                        let t = e.children,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                                return a;
                            })(e, p);
                        const a = (0, n.useContext)(w),
                            i = a.extraLarge,
                            o = a.large,
                            l = a.medium,
                            d = a.small,
                            c = a.extraSmall,
                            u = a.extraLargeWidth,
                            m = a.largeWidth,
                            _ = a.mediumWidth,
                            g = a.smallWidth,
                            h = a.extraSmallWidth,
                            E = a.extraLargeHeight,
                            b = a.largeHeight,
                            v = a.mediumHeight,
                            f = a.smallHeight,
                            S = a.extraSmallHeight,
                            L = { extraLarge: E, large: b, medium: v, small: f, extraSmall: S };
                        if (r.extraLarge || r.large || r.medium || r.small || r.extraSmall) {
                            if (r.extraLarge && i) return t;
                            if (r.large && o) return t;
                            if (r.medium && l) return t;
                            if (r.small && d) return t;
                            if (r.extraSmall && c) return t;
                        } else {
                            if (r.extraLargeWidth && u) return s(t, r, L);
                            if (r.largeWidth && m) return s(t, r, L);
                            if (r.mediumWidth && _) return s(t, r, L);
                            if (r.smallWidth && g) return s(t, r, L);
                            if (r.extraSmallWidth && h) return s(t, r, L);
                            if (
                                !(
                                    r.extraLargeWidth ||
                                    r.largeWidth ||
                                    r.mediumWidth ||
                                    r.smallWidth ||
                                    r.extraSmallWidth
                                )
                            ) {
                                if (r.extraLargeHeight && E) return t;
                                if (r.largeHeight && b) return t;
                                if (r.mediumHeight && v) return t;
                                if (r.smallHeight && f) return t;
                                if (r.extraSmallHeight && S) return t;
                            }
                        }
                        return null;
                    };
                (E.defaultProps = {
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
                    (0, n.memo)(E);
                const b = (e) => {
                        const t = (0, n.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    v = (0, n.memo)(({ children: e }) => {
                        const t = (0, n.useContext)(w),
                            r = (0, n.useState)(t),
                            i = r[0],
                            o = r[1],
                            s = (0, n.useCallback)((e, t) => {
                                const r = l.O.view.pxToRem(e),
                                    n = l.O.view.pxToRem(t);
                                o(Object.assign({ width: r, height: n }, u(r, n, d)));
                            }, []);
                        b(() => {
                            engine.on('clientResized', s);
                        }),
                            (0, n.useEffect)(() => () => engine.off('clientResized', s), [s]);
                        const c = (0, n.useMemo)(() => Object.assign({}, i), [i]);
                        return a().createElement(w.Provider, { value: c }, e);
                    });
                var f = r(6483),
                    S = r.n(f),
                    L = r(926),
                    x = r.n(L);
                let M, O, A;
                !(function (e) {
                    (e[(e.ExtraSmall = d.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = d.small.width)] = 'Small'),
                        (e[(e.Medium = d.medium.width)] = 'Medium'),
                        (e[(e.Large = d.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = d.extraLarge.width)] = 'ExtraLarge');
                })(M || (M = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = d.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = d.small.width)] = 'Small'),
                            (e[(e.Medium = d.medium.width)] = 'Medium'),
                            (e[(e.Large = d.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = d.extraLarge.width)] = 'ExtraLarge');
                    })(O || (O = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = d.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = d.small.height)] = 'Small'),
                            (e[(e.Medium = d.medium.height)] = 'Medium'),
                            (e[(e.Large = d.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = d.extraLarge.height)] = 'ExtraLarge');
                    })(A || (A = {}));
                const y = () => {
                        const e = (0, n.useContext)(w),
                            t = e.width,
                            r = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return M.ExtraLarge;
                                    case e.large:
                                        return M.Large;
                                    case e.medium:
                                        return M.Medium;
                                    case e.small:
                                        return M.Small;
                                    case e.extraSmall:
                                        return M.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), M.ExtraSmall;
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return O.ExtraLarge;
                                    case e.largeWidth:
                                        return O.Large;
                                    case e.mediumWidth:
                                        return O.Medium;
                                    case e.smallWidth:
                                        return O.Small;
                                    case e.extraSmallWidth:
                                        return O.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), O.ExtraSmall;
                                }
                            })(e),
                            o = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return A.ExtraLarge;
                                    case e.largeHeight:
                                        return A.Large;
                                    case e.mediumHeight:
                                        return A.Medium;
                                    case e.smallHeight:
                                        return A.Small;
                                    case e.extraSmallHeight:
                                        return A.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), A.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: i, mediaHeight: o, remScreenWidth: t, remScreenHeight: r };
                    },
                    T = ['children', 'className'];
                function P() {
                    return (
                        (P =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        P.apply(this, arguments)
                    );
                }
                const k = {
                        [O.ExtraSmall]: '',
                        [O.Small]: x().SMALL_WIDTH,
                        [O.Medium]: `${x().SMALL_WIDTH} ${x().MEDIUM_WIDTH}`,
                        [O.Large]: `${x().SMALL_WIDTH} ${x().MEDIUM_WIDTH} ${x().LARGE_WIDTH}`,
                        [O.ExtraLarge]: `${x().SMALL_WIDTH} ${x().MEDIUM_WIDTH} ${x().LARGE_WIDTH} ${x().EXTRA_LARGE_WIDTH}`,
                    },
                    D = {
                        [A.ExtraSmall]: '',
                        [A.Small]: x().SMALL_HEIGHT,
                        [A.Medium]: `${x().SMALL_HEIGHT} ${x().MEDIUM_HEIGHT}`,
                        [A.Large]: `${x().SMALL_HEIGHT} ${x().MEDIUM_HEIGHT} ${x().LARGE_HEIGHT}`,
                        [A.ExtraLarge]: `${x().SMALL_HEIGHT} ${x().MEDIUM_HEIGHT} ${x().LARGE_HEIGHT} ${x().EXTRA_LARGE_HEIGHT}`,
                    },
                    C = {
                        [M.ExtraSmall]: '',
                        [M.Small]: x().SMALL,
                        [M.Medium]: `${x().SMALL} ${x().MEDIUM}`,
                        [M.Large]: `${x().SMALL} ${x().MEDIUM} ${x().LARGE}`,
                        [M.ExtraLarge]: `${x().SMALL} ${x().MEDIUM} ${x().LARGE} ${x().EXTRA_LARGE}`,
                    },
                    I = (e) => {
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
                            })(e, T);
                        const i = y(),
                            o = i.mediaWidth,
                            s = i.mediaHeight,
                            l = i.mediaSize;
                        return a().createElement('div', P({ className: S()(r, k[o], D[s], C[l]) }, n), t);
                    },
                    H = ['children'],
                    N = (e) => {
                        let t = e.children,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                                return a;
                            })(e, H);
                        return a().createElement(v, null, a().createElement(I, r, t));
                    },
                    W = (e = 1) => {
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
                    },
                    F = (e, t) => e.split('.').reduce((e, t) => e && e[t], t);
                var U = r(4179);
                const $ = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    B = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    G = U.Sw.instance;
                let z;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(z || (z = {}));
                const V = (e = 'model', t = z.Deep) => {
                    const r = (0, n.useState)(0),
                        a = (r[0], r[1]),
                        i = (0, n.useMemo)(() => W(), []),
                        o = i.caller,
                        s = i.resId,
                        l = (0, n.useMemo)(
                            () => (window.__feature && window.__feature !== o ? `subViews.${o}.${e}` : e),
                            [o, e],
                        ),
                        d = (0, n.useState)(() =>
                            ((e) => {
                                const t = F(e, window);
                                for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                return $(t) ? t.value : t;
                            })(
                                ((e) =>
                                    ((e, t) =>
                                        e.split('.').reduce((e, t) => {
                                            const r = F(`${e}.${t}`, window);
                                            return $(r) ? ((e, t) => `${e}.${t}.value`)(e, t) : `${e}.${t}`;
                                        }))(e))(l),
                            ),
                        ),
                        c = d[0],
                        u = d[1],
                        m = (0, n.useRef)(-1);
                    return (
                        b(() => {
                            if (
                                ('boolean' == typeof t &&
                                    ((t = t ? z.Deep : z.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                t !== z.None)
                            ) {
                                const r = (e) => {
                                        ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                        t === z.Deep
                                            ? (e === c && a((e) => e + 1), u(e))
                                            : u(Object.assign([], e));
                                    },
                                    n = ((e) => {
                                        const t = ((e) => {
                                                const t = W(),
                                                    r = t.caller,
                                                    n = t.resId,
                                                    a =
                                                        window.__feature && window.__feature !== r && r
                                                            ? `subViews.${r}`
                                                            : '';
                                                return { modelPrefix: a, modelPath: B(a, ''), resId: n };
                                            })(),
                                            r = t.modelPrefix,
                                            n = e.split('.');
                                        if (n.length > 0) {
                                            const e = [n[0]];
                                            return (
                                                n.reduce((t, n) => {
                                                    const a = F(B(r, `${t}.${n}`), window);
                                                    return $(a)
                                                        ? (e.push(a.id), `${t}.${n}.value`)
                                                        : (e.push(n), `${t}.${n}`);
                                                }),
                                                e.reduce((e, t) => e + '.' + t)
                                            );
                                        }
                                        return '';
                                    })(e);
                                m.current = G.addCallback(n, r, s, t === z.Deep);
                            }
                        }),
                        (0, n.useEffect)(() => {
                            if (t !== z.None)
                                return () => {
                                    G.removeCallback(m.current, s);
                                };
                        }, [s, t]),
                        c
                    );
                };
                function j(e) {
                    engine.call('PlaySound', e);
                }
                const q = [
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
                function K(e) {
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
                const Y = (e, t, r = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: U.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                r,
                            ),
                        );
                    },
                    X = (e) => {
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
                            w = void 0 === h || h,
                            p = e.targetId,
                            E = void 0 === p ? 0 : p,
                            b = e.onShow,
                            v = e.onHide,
                            f = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                                return a;
                            })(e, q);
                        const S = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            L = (0, n.useMemo)(() => E || W().resId, [E]),
                            x = (0, n.useCallback)(() => {
                                (S.current.isVisible && S.current.timeoutId) ||
                                    (Y(r, g, { isMouseEvent: !0, on: !0, arguments: K(a) }, L),
                                    b && b(),
                                    (S.current.isVisible = !0));
                            }, [r, g, a, L, b]),
                            M = (0, n.useCallback)(() => {
                                if (S.current.isVisible || S.current.timeoutId) {
                                    const e = S.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (S.current.timeoutId = 0)),
                                        Y(r, g, { on: !1 }, L),
                                        S.current.isVisible && v && v(),
                                        (S.current.isVisible = !1);
                                }
                            }, [r, g, L, v]),
                            O = (0, n.useCallback)((e) => {
                                S.current.isVisible &&
                                    ((S.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (S.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(S.current.prevTarget) && M();
                                    }, 200)));
                            }, []);
                        return (
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
                                !1 === w && M();
                            }, [w, M]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', M),
                                    () => {
                                        window.removeEventListener('mouseleave', M), M();
                                    }
                                ),
                                [M],
                            ),
                            w
                                ? (0, n.cloneElement)(
                                      t,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((A = t.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((S.current.timeoutId = window.setTimeout(x, c ? 100 : 400)),
                                                          i && i(e),
                                                          A && A(e));
                                                  }),
                                              onMouseLeave: ((e) => (t) => {
                                                  M(), null == o || o(t), null == e || e(t);
                                              })(t.props.onMouseLeave),
                                              onClick: ((e) => (t) => {
                                                  !1 === m && M(), null == l || l(t), null == e || e(t);
                                              })(t.props.onClick),
                                              onMouseDown: ((e) => (t) => {
                                                  !1 === m && M(), null == s || s(t), null == e || e(t);
                                              })(t.props.onMouseDown),
                                          },
                                          f,
                                      ),
                                  )
                                : t
                        );
                        var A;
                    },
                    Z = {
                        base: 'ProgressBar_base_45',
                        base__medium: 'ProgressBar_base__medium_62',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__medium: 'ProgressBar_background__medium_6e',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let Q, J;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big');
                })(Q || (Q = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(J || (J = {}));
                const ee = ({ size: e = Q.Default }) =>
                        a().createElement('div', { className: S()(Z.background, Z[`background__${e}`]) }),
                    te = {
                        base: 'ProgressBarBlink_base_24',
                        base__medium: 'ProgressBarBlink_base__medium_ec',
                        base__small: 'ProgressBarBlink_base__small_0f',
                    },
                    re = ({ size: e }) => {
                        const t = S()(te.base, te[`base__${e}`]);
                        return a().createElement('div', { className: t });
                    },
                    ne = {
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
                    ae = (0, n.memo)(
                        ({ size: e, lineRef: t, disabled: r, baseStyles: n, isComplete: i, withoutBounce: o }) => {
                            const s = S()(
                                    ne.base,
                                    ne[`base__${e}`],
                                    r && ne.base__disabled,
                                    i && ne.base__finished,
                                    o && ne.base__withoutBounce,
                                ),
                                l = !r && !i;
                            return a().createElement(
                                'div',
                                { className: s, style: n, ref: t },
                                a().createElement('div', { className: ne.pattern }),
                                a().createElement('div', { className: ne.gradient }),
                                l && a().createElement(re, { size: e }),
                            );
                        },
                    ),
                    ie = ({ size: e, value: t, lineRef: r, disabled: i, onComplete: o }) => {
                        const s = (0, n.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            l = 100 === t;
                        return (
                            (0, n.useEffect)(() => {
                                l && o && o();
                            }, [l, o]),
                            a().createElement(ae, { size: e, disabled: i, baseStyles: s, isComplete: l, lineRef: r })
                        );
                    },
                    oe = (e, t) => {
                        let r;
                        const n = setTimeout(() => {
                            r = e();
                        }, t);
                        return () => {
                            'function' == typeof r && r(), clearTimeout(n);
                        };
                    };
                let se, le;
                !(function (e) {
                    (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                })(se || (se = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(le || (le = {}));
                const de = (0, n.memo)(
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
                                u = (0, n.useState)(le.Idle),
                                m = u[0],
                                _ = u[1],
                                g = m === le.In,
                                h = m === le.End,
                                w = m === le.Idle,
                                p = (0, n.useCallback)(
                                    (e) => {
                                        _(e), d && d(e);
                                    },
                                    [d],
                                );
                            (0, n.useEffect)(() => {
                                if (w && !r)
                                    return oe(() => {
                                        p(le.In);
                                    }, t);
                            }, [p, r, w, t]),
                                (0, n.useEffect)(() => {
                                    if (g)
                                        return oe(() => {
                                            l && l(), p(le.End);
                                        }, e + t);
                                }, [p, g, l, t, e]);
                            const E = (0, n.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, t, e],
                                ),
                                b = (0, n.useMemo)(
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
                                      { className: 'ProgressBarDeltaSimple_base_6c', style: v },
                                      a().createElement(
                                          'div',
                                          { style: w ? E : b, className: 'ProgressBarDeltaSimple_delta_99' },
                                          a().createElement(re, { size: o }),
                                      ),
                                  );
                        },
                    ),
                    ce = (0, n.memo)(
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
                                a().createElement(ae, {
                                    size: t,
                                    lineRef: i,
                                    disabled: o,
                                    isComplete: s,
                                    baseStyles: u,
                                }),
                                r >= 0 &&
                                    a().createElement(de, {
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
                    ue = (e) => (e ? { left: 0 } : { right: 0 }),
                    me = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    _e = (e) => ({ transitionDuration: `${e}ms` }),
                    ge = (0, n.memo)(
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
                                m = (0, n.useState)(se.Idle),
                                _ = m[0],
                                g = m[1],
                                h = _ === se.End,
                                w = _ === se.Idle,
                                p = _ === se.Grow,
                                E = _ === se.Shrink,
                                b = (0, n.useCallback)(
                                    (e) => {
                                        g(e), d && d(e);
                                    },
                                    [d],
                                ),
                                v = (0, n.useCallback)(
                                    (e, t) =>
                                        oe(() => {
                                            b(e);
                                        }, t),
                                    [b],
                                );
                            (0, n.useEffect)(() => {
                                if (!r)
                                    return w
                                        ? v(se.Grow, t)
                                        : p
                                          ? v(se.Shrink, e)
                                          : E
                                            ? v(se.End, e)
                                            : void (h && l && l());
                            }, [v, r, h, p, w, E, l, t, e]);
                            const f = (0, n.useMemo)(() => Object.assign({ width: '100%' }, _e(e), ue(u)), [u, e]),
                                L = (0, n.useMemo)(() => Object.assign({ width: '0%' }, _e(e), ue(u)), [u, e]),
                                x = (0, n.useMemo)(() => Object.assign({ width: '0%' }, me(u, i), _e(e)), [i, u, e]),
                                M = (0, n.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(s - i)}%` }, me(u, i), _e(e)),
                                    [i, u, s, e],
                                );
                            if (h) return null;
                            const O = S()(
                                'ProgressBarDeltaGrow_base_7e',
                                c,
                                u && 0 === s && 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                            );
                            return a().createElement(
                                'div',
                                { style: w ? x : M, className: O },
                                a().createElement(
                                    'div',
                                    { style: E ? L : f, className: 'ProgressBarDeltaGrow_glow_68' },
                                    a().createElement(re, { size: o }),
                                ),
                            );
                        },
                    ),
                    he = (0, n.memo)(
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
                                        e === se.Shrink && g(!0), c && c(e);
                                    },
                                    [c],
                                ),
                                w = (0, n.useMemo)(() => ({ width: `${r}%`, transitionProperty: 'none' }), [r]),
                                p = (0, n.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${l.line.duration}ms` }),
                                    [l.line.duration, e],
                                );
                            return a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(ae, {
                                    size: t,
                                    lineRef: i,
                                    disabled: o,
                                    isComplete: s,
                                    withoutBounce: u && 0 === e,
                                    baseStyles: _ ? p : w,
                                }),
                                r >= 0 &&
                                    a().createElement(ge, {
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
                    we = ['onComplete', 'onEndAnimation'];
                function pe() {
                    return (
                        (pe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        pe.apply(this, arguments)
                    );
                }
                const Ee = (0, n.memo)((e) => {
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
                            })(e, we);
                        const o = (0, n.useState)(!1),
                            s = o[0],
                            l = o[1],
                            d = (0, n.useCallback)(() => {
                                const e = 100 === i.to;
                                e !== s && l(e), e && t && t(), r && r();
                            }, [s, t, r, i.to]);
                        switch (i.animationSettings.type) {
                            case J.Simple:
                                return a().createElement(ce, pe({}, i, { onEndAnimation: d, isComplete: s }));
                            case J.Growing:
                                return a().createElement(he, pe({}, i, { onEndAnimation: d, isComplete: s }));
                            default:
                                return null;
                        }
                    }),
                    be = ['onEndAnimation'];
                function ve() {
                    return (
                        (ve =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        ve.apply(this, arguments)
                    );
                }
                const fe = (0, n.memo)((e) => {
                    let t = e.onEndAnimation,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                            return a;
                        })(e, be);
                    const i = (0, n.useRef)({}),
                        o = (0, n.useCallback)(() => {
                            (i.current.from = void 0), t && t();
                        }, [t]),
                        s = 'number' == typeof i.current.from ? i.current.from : r.from;
                    return (
                        (i.current.from = s),
                        a().createElement(Ee, ve({}, r, { onEndAnimation: o, key: `${s}-${r.to}`, from: s }))
                    );
                });
                function Se() {
                    return (
                        (Se =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        Se.apply(this, arguments)
                    );
                }
                const Le = (0, n.memo)(
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
                                return a().createElement(ie, {
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
                                ? a().createElement(fe, c)
                                : a().createElement(Ee, Se({ key: `${i}-${t}` }, c));
                        },
                    ),
                    xe = (e) => ({
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
                    Me = {
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
                    Oe = (e, t, r) => (r < e ? e : r > t ? t : r),
                    Ae = (e, t, r) => ('number' == typeof r ? (Oe(0, t, r) / t) * 100 : e),
                    ye = {
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
                    Te = {
                        freezed: !1,
                        withStack: !1,
                        type: J.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    Pe = (0, n.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = ye,
                            size: r = Q.Default,
                            animationSettings: i = Te,
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
                                    const n = (Oe(0, t, e) / t) * 100;
                                    return { value: n, deltaFrom: Ae(n, t, r) };
                                }, [r, t, e]))(l, e, d);
                            return a().createElement(
                                'div',
                                { className: S()(Z.base, Z[`base__${r}`]), style: xe(t) },
                                !s && a().createElement(ee, { size: r }),
                                a().createElement(Le, {
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
                    Re = 'App_base__small_62',
                    ke = () => {
                        const e = V(),
                            t = e.isNewItem,
                            r = e.allCollected,
                            i = e.onClick,
                            o = e.currentProgression,
                            s = e.totalProgression,
                            d = (0, n.useState)(!1),
                            c = d[0],
                            u = d[1],
                            m = y().mediaSize < M.Medium,
                            _ = (0, n.useCallback)(() => {
                                i();
                            }, [i]),
                            g = (0, n.useCallback)(() => {
                                j('ev_white_tiger_hangar_collection_rollover'), u(!0);
                            }, []),
                            h = (0, n.useCallback)(() => {
                                j('ev_white_tiger_hangar_collection_rollout'), u(!1);
                            }, []),
                            w = (0, n.useRef)(null);
                        (0, n.useEffect)(
                            () =>
                                ((e) => {
                                    let t,
                                        r = null;
                                    return (
                                        (r = requestAnimationFrame(() => {
                                            r = requestAnimationFrame(() => {
                                                (r = null),
                                                    (t = (() => {
                                                        const e = w.current;
                                                        if (e) {
                                                            const t = e.getBoundingClientRect(),
                                                                r =
                                                                    (l.O.view.getSize('rem').width -
                                                                        l.O.view.pxToRem(t.width)) >>
                                                                    1;
                                                            l.O.view.setSidePaddingsRem({
                                                                left: r,
                                                                right: r,
                                                                top: l.O.view.pxToRem(t.top),
                                                                bottom:
                                                                    l.O.view.getSize('rem').height -
                                                                    l.O.view.pxToRem(t.height),
                                                            });
                                                        }
                                                    })());
                                            });
                                        })),
                                        () => {
                                            'function' == typeof t && t(), null !== r && cancelAnimationFrame(r);
                                        }
                                    );
                                })(),
                            [m],
                        );
                        const p = S()('App_base_17', m && Re),
                            E = S()('App_image_a7', r && 'App_image__allCollected_d1'),
                            b = S()(
                                'App_imageHover_c1',
                                r && 'App_imageHover__allCollected_52',
                                c && 'App_imageHover__isVisible_18',
                            ),
                            v = S()('App_newItemAnimation_13', t && 'App_newItemAnimation__isVisible_bd'),
                            f = S()('App_checkmark_a9', m && Re);
                        return a().createElement(
                            'div',
                            { className: p, ref: w },
                            a().createElement(
                                'div',
                                { className: 'App_wrapper_27' },
                                a().createElement('div', { className: E }),
                                a().createElement('div', { className: b }),
                                t &&
                                    a().createElement('img', {
                                        className: v,
                                        src: 'swf://gui/flash/' + R.animations.wt_event.meta(),
                                    }),
                            ),
                            r
                                ? a().createElement(
                                      'div',
                                      { className: 'App_checkmarkWrapper_68' },
                                      a().createElement('div', { className: f }),
                                  )
                                : a().createElement('div', { className: 'App_progressionValue_e8' }, o + 1),
                            a().createElement(
                                'div',
                                { className: 'App_hoverAreaWrapper_f5' },
                                a().createElement(
                                    X,
                                    {
                                        contentId:
                                            R.views.white_tiger.lobby.tooltips.ProgressionEntryPointTooltip('resId'),
                                    },
                                    a().createElement('div', {
                                        className: 'App_hoverArea_86',
                                        onMouseEnter: g,
                                        onMouseLeave: h,
                                        onClick: _,
                                    }),
                                ),
                                a().createElement(
                                    'div',
                                    { className: 'App_progressionCountWrapper_34' },
                                    !r &&
                                        a().createElement(
                                            'div',
                                            { className: 'App_progressbarWrapper_4c' },
                                            a().createElement(Pe, {
                                                size: Q.Default,
                                                value: o,
                                                maxValue: s,
                                                theme: Me,
                                            }),
                                        ),
                                ),
                            ),
                        );
                    };
                engine.whenReady.then(() => {
                    o().render(
                        a().createElement(N, null, a().createElement(ke, null)),
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
        return __webpack_modules__[e].call(r.exports, r, r.exports, __webpack_require__), r.exports;
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
        (() => {
            var e = { 592: 0 };
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
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(2521));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
