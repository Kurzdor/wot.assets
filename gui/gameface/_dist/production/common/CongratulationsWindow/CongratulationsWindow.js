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
            527: (e, t, n) => {
                'use strict';
                n.r(t), n.d(t, { mouse: () => s, onResize: () => i });
                var r = n(472),
                    a = n(176);
                const i = (0, r.E)('clientResized'),
                    o = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') },
                    s = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && (0, a.R)(!1);
                        }
                        function n() {
                            e.enabled && (0, a.R)(!0);
                        }
                        function r() {
                            e.enabled
                                ? e.listeners < 1
                                    ? ((e.initialized = !1),
                                      document.body.removeEventListener('mouseenter', t),
                                      document.body.removeEventListener('mouseleave', n))
                                    : e.initialized ||
                                      ((e.initialized = !0),
                                      document.body.addEventListener('mouseenter', t),
                                      document.body.addEventListener('mouseleave', n))
                                : (0, a.R)(!1);
                        }
                        const i = ['down', 'up', 'move'].reduce(
                            (t, n) => (
                                (t[n] = (function (t) {
                                    return (n) => {
                                        e.listeners += 1;
                                        let a = !0;
                                        const i = `mouse${t}`,
                                            s = o[t]((e) => n([e, 'outside']));
                                        function l(e) {
                                            n([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(i, l),
                                            r(),
                                            () => {
                                                a &&
                                                    (s(),
                                                    window.removeEventListener(i, l),
                                                    (e.listeners -= 1),
                                                    r(),
                                                    (a = !1));
                                            }
                                        );
                                    };
                                })(n)),
                                t
                            ),
                            {},
                        );
                        return Object.assign({}, i, {
                            disable() {
                                (e.enabled = !1), r();
                            },
                            enable() {
                                (e.enabled = !0), r();
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
            959: (e, t, n) => {
                'use strict';
                n.r(t),
                    n.d(t, {
                        events: () => r,
                        getMouseGlobalPosition: () => i,
                        getSize: () => a,
                        graphicsQuality: () => o,
                    });
                var r = n(527);
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
            176: (e, t, n) => {
                'use strict';
                function r(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                n.d(t, { R: () => r });
            },
            472: (e, t, n) => {
                'use strict';
                function r(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                n.d(t, { E: () => r });
            },
            138: (e, t, n) => {
                'use strict';
                n.d(t, { O: () => a });
                var r = n(959);
                const a = { view: n(641), client: r };
            },
            722: (e, t, n) => {
                'use strict';
                function r(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function a(e, t, n) {
                    return `url(${r(e, t, n)})`;
                }
                n.r(t), n.d(t, { getBgUrl: () => a, getTextureUrl: () => r });
            },
            112: (e, t, n) => {
                'use strict';
                n.d(t, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            538: (e, t, n) => {
                'use strict';
                n.d(t, { U: () => a });
                var r = n(472);
                const a = {
                    onTextureFrozen: (0, r.E)('self.onTextureFrozen'),
                    onTextureReady: (0, r.E)('self.onTextureReady'),
                    onDomBuilt: (0, r.E)('self.onDomBuilt'),
                    onLoaded: (0, r.E)('self.onLoaded'),
                    onDisplayChanged: (0, r.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, r.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, r.E)('children.onAdded'),
                        onLoaded: (0, r.E)('children.onLoaded'),
                        onRemoved: (0, r.E)('children.onRemoved'),
                        onAttached: (0, r.E)('children.onAttached'),
                        onTextureReady: (0, r.E)('children.onTextureReady'),
                        onRequestPosition: (0, r.E)('children.requestPosition'),
                    },
                };
            },
            641: (e, t, n) => {
                'use strict';
                n.r(t),
                    n.d(t, {
                        addModelObserver: () => u,
                        addPreloadTexture: () => s,
                        children: () => r,
                        displayStatus: () => a.W,
                        displayStatusIs: () => S,
                        events: () => i.U,
                        extraSize: () => y,
                        forceTriggerMouseMove: () => M,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => x,
                        getScale: () => v,
                        getSize: () => _,
                        getViewGlobalPosition: () => h,
                        isEventHandled: () => L,
                        isFocused: () => p,
                        pxToRem: () => E,
                        remToPx: () => w,
                        resize: () => m,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => b,
                        setEventHandled: () => f,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => k,
                    });
                var r = n(722),
                    a = n(112),
                    i = n(538),
                    o = n(566);
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, t, n, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, r);
                }
                function u(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function h(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: w(t.x), y: w(t.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function v() {
                    return viewEnv.getScale();
                }
                function E(e) {
                    return viewEnv.pxToRem(e);
                }
                function w(e) {
                    return viewEnv.remToPx(e);
                }
                function b(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function p() {
                    return viewEnv.isFocused();
                }
                function f() {
                    return viewEnv.setEventHandled();
                }
                function L() {
                    return viewEnv.isEventHandled();
                }
                function M() {
                    viewEnv.forceTriggerMouseMove();
                }
                function x() {
                    return viewEnv.getShowingStatus();
                }
                const S = Object.keys(a.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === a.W[t]), e),
                        {},
                    ),
                    y = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    k = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            566: (e, t, n) => {
                'use strict';
                n.d(t, { qP: () => i });
                const r = ['args'],
                    a = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        a = {},
                                        i = Object.keys(e);
                                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                                    return a;
                                })(t, r);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, o, {
                                          arguments:
                                              ((a = i),
                                              Object.entries(a).map(([e, t]) => {
                                                  const n = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: n, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: n, name: e, bool: t };
                                                      default:
                                                          return { __Type: n, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, o));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
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
            521: (e, t, n) => {
                'use strict';
                let r, a;
                n.d(t, { n: () => r }),
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
                    })(r || (r = {})),
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
            358: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => i });
                var r = n(138);
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
                    addCallback(e, t, n = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const i = r.O.view.addModelObserver(e, n, a);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = t),
                                  n > 0 && (this._views[n] ? this._views[n].push(i) : (this._views[n] = [i])))
                                : console.error("Can't add callback for model:", e),
                            i
                        );
                    }
                    removeCallback(e, t = 0) {
                        let n = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((n = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            n || console.error("Can't remove callback by id:", e),
                            n
                        );
                    }
                    _emmitDataChanged(e, t, n) {
                        n.forEach((n) => {
                            const r = this._callbacks[n];
                            void 0 !== r && r(e, t);
                        });
                    }
                }
                a.__instance = void 0;
                const i = a;
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
            364: (e, t, n) => {
                'use strict';
                n.d(t, { B0: () => l, ry: () => b });
                class r {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: n }) => {
                                    let r = e.target;
                                    do {
                                        if (r === t) return;
                                        r = r.parentNode;
                                    } while (r);
                                    n();
                                });
                            });
                    }
                    static get instance() {
                        return r.__instance || (r.__instance = new r()), r.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const n = e,
                            r = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== n || t !== r)),
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
                var i = n(358);
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
                        getTimeFormat: (e, t, n) => userLocale.getTimeFormat(e, t, void 0 === n || n),
                        getTimeString: (e, t, n) => userLocale.getTimeString(e, t, void 0 === n || n),
                    };
                let l;
                var c;
                ((c = l || (l = {}))[(c.UNDEFINED = 0)] = 'UNDEFINED'),
                    (c[(c.TOOLTIP = 1)] = 'TOOLTIP'),
                    (c[(c.POP_OVER = 2)] = 'POP_OVER'),
                    (c[(c.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (c[(c.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (c[(c.MOVE = 16)] = 'MOVE'),
                    (c[(c.CLOSE = 32)] = 'CLOSE'),
                    (c[(c.MINIMIZE = 64)] = 'MINIMIZE');
                const u = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    d = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var h = n(521),
                    g = n(138);
                const v = ['args'];
                function E(e, t, n, r, a, i, o) {
                    try {
                        var s = e[i](o),
                            l = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    s.done ? t(l) : Promise.resolve(l).then(r, a);
                }
                const w = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                        n = arguments;
                                    return new Promise(function (r, a) {
                                        var i = e.apply(t, n);
                                        function o(e) {
                                            E(i, r, a, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            E(i, r, a, o, s, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    p = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        a = {},
                                        i = Object.keys(e);
                                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                                    return a;
                                })(t, v);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
                                          arguments:
                                              ((r = a),
                                              Object.entries(r).map(([e, t]) => {
                                                  const n = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          n.number = t;
                                                          break;
                                                      case 'boolean':
                                                          n.bool = t;
                                                          break;
                                                      default:
                                                          n.string = t.toString();
                                                  }
                                                  return n;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, i));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var r;
                    },
                    f = () => p(l.CLOSE),
                    L = (e, t) => {
                        e.keyCode === h.n.ESCAPE && t();
                    };
                var M = n(572);
                const x = a.instance,
                    S = {
                        DataTracker: i.Z,
                        ViewModel: M.Z,
                        ViewEventType: l,
                        NumberFormatType: u,
                        RealFormatType: d,
                        TimeFormatType: _,
                        DateFormatType: m,
                        makeGlobalBoundingBox: w,
                        sendMoveEvent: (e) => p(l.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => p(l.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            p(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, r, a = R.invalid('resId'), i) => {
                            const o = g.O.view.getViewGlobalPosition(),
                                s = n.getBoundingClientRect(),
                                c = s.x,
                                u = s.y,
                                d = s.width,
                                _ = s.height,
                                m = {
                                    x: g.O.view.pxToRem(c) + o.x,
                                    y: g.O.view.pxToRem(u) + o.y,
                                    width: g.O.view.pxToRem(d),
                                    height: g.O.view.pxToRem(_),
                                };
                            p(l.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: a,
                                direction: t,
                                bbox: w(m),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => L(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            L(e, f);
                        },
                        handleViewEvent: p,
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
                            const n = {};
                            if ('object' != typeof t) return t;
                            for (const r in t)
                                if (Object.prototype.hasOwnProperty.call(t, r)) {
                                    const a = Object.prototype.toString.call(t[r]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = t[r];
                                        n[r] = [];
                                        for (let t = 0; t < a.length; t++) n[r].push({ value: e(a[t].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[r] = e(t[r]))
                                            : (n[r] = t[r]);
                                }
                            return n;
                        },
                        ClickOutsideManager: x,
                        SystemLocale: o,
                        UserLocale: s,
                    };
                window.ViewEnvHelper = S;
            },
            624: (e, t, n) => {
                'use strict';
                var r = n(179),
                    a = n.n(r);
                const i = (e, t, n) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && n.extraLarge) ||
                          (t.largeHeight && n.large) ||
                          (t.mediumHeight && n.medium) ||
                          (t.smallHeight && n.small) ||
                          (t.extraSmallHeight && n.extraSmall)
                            ? e
                            : null
                        : e;
                var o = n(138);
                const s = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var l;
                function c(e, t, n) {
                    const r = (function (e, t) {
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
                        })(e, n),
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
                        })(t, n),
                        i = Math.min(r, a);
                    return {
                        extraLarge: i === n.extraLarge.weight,
                        large: i === n.large.weight,
                        medium: i === n.medium.weight,
                        small: i === n.small.weight,
                        extraSmall: i === n.extraSmall.weight,
                        extraLargeWidth: r === n.extraLarge.weight,
                        largeWidth: r === n.large.weight,
                        mediumWidth: r === n.medium.weight,
                        smallWidth: r === n.small.weight,
                        extraSmallWidth: r === n.extraSmall.weight,
                        extraLargeHeight: a === n.extraLarge.weight,
                        largeHeight: a === n.large.weight,
                        mediumHeight: a === n.medium.weight,
                        smallHeight: a === n.small.weight,
                        extraSmallHeight: a === n.extraSmall.weight,
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
                const u = o.O.client.getSize('rem'),
                    d = u.width,
                    _ = u.height,
                    m = Object.assign({ width: d, height: _ }, c(d, _, s)),
                    h = (0, r.createContext)(m),
                    g = ['children'],
                    v = (e) => {
                        let t = e.children,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    a = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                                return a;
                            })(e, g);
                        const a = (0, r.useContext)(h),
                            o = a.extraLarge,
                            s = a.large,
                            l = a.medium,
                            c = a.small,
                            u = a.extraSmall,
                            d = a.extraLargeWidth,
                            _ = a.largeWidth,
                            m = a.mediumWidth,
                            v = a.smallWidth,
                            E = a.extraSmallWidth,
                            w = a.extraLargeHeight,
                            b = a.largeHeight,
                            p = a.mediumHeight,
                            f = a.smallHeight,
                            L = a.extraSmallHeight,
                            M = { extraLarge: w, large: b, medium: p, small: f, extraSmall: L };
                        if (n.extraLarge || n.large || n.medium || n.small || n.extraSmall) {
                            if (n.extraLarge && o) return t;
                            if (n.large && s) return t;
                            if (n.medium && l) return t;
                            if (n.small && c) return t;
                            if (n.extraSmall && u) return t;
                        } else {
                            if (n.extraLargeWidth && d) return i(t, n, M);
                            if (n.largeWidth && _) return i(t, n, M);
                            if (n.mediumWidth && m) return i(t, n, M);
                            if (n.smallWidth && v) return i(t, n, M);
                            if (n.extraSmallWidth && E) return i(t, n, M);
                            if (
                                !(
                                    n.extraLargeWidth ||
                                    n.largeWidth ||
                                    n.mediumWidth ||
                                    n.smallWidth ||
                                    n.extraSmallWidth
                                )
                            ) {
                                if (n.extraLargeHeight && w) return t;
                                if (n.largeHeight && b) return t;
                                if (n.mediumHeight && p) return t;
                                if (n.smallHeight && f) return t;
                                if (n.extraSmallHeight && L) return t;
                            }
                        }
                        return null;
                    };
                (v.defaultProps = {
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
                    (0, r.memo)(v);
                const E = (0, r.memo)(({ children: e }) => {
                    const t = (0, r.useContext)(h),
                        n = (0, r.useState)(t),
                        i = n[0],
                        l = n[1],
                        u = (0, r.useCallback)((e, t) => {
                            const n = o.O.view.pxToRem(e),
                                r = o.O.view.pxToRem(t);
                            l(Object.assign({ width: n, height: r }, c(n, r, s)));
                        }, []);
                    ((e) => {
                        const t = (0, r.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    })(() => {
                        engine.on('clientResized', u);
                    }),
                        (0, r.useEffect)(() => () => engine.off('clientResized', u), [u]);
                    const d = (0, r.useMemo)(() => Object.assign({}, i), [i]);
                    return a().createElement(h.Provider, { value: d }, e);
                });
                var w = n(483),
                    b = n.n(w),
                    p = n(926),
                    f = n.n(p);
                let L, M, x;
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
                    })(M || (M = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = s.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.height)] = 'Small'),
                            (e[(e.Medium = s.medium.height)] = 'Medium'),
                            (e[(e.Large = s.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.height)] = 'ExtraLarge');
                    })(x || (x = {}));
                const S = ['children', 'className'];
                function y() {
                    return (
                        (y =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        y.apply(this, arguments)
                    );
                }
                const k = {
                        [M.ExtraSmall]: '',
                        [M.Small]: f().SMALL_WIDTH,
                        [M.Medium]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH}`,
                        [M.Large]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH} ${f().LARGE_WIDTH}`,
                        [M.ExtraLarge]: `${f().SMALL_WIDTH} ${f().MEDIUM_WIDTH} ${f().LARGE_WIDTH} ${f().EXTRA_LARGE_WIDTH}`,
                    },
                    O = {
                        [x.ExtraSmall]: '',
                        [x.Small]: f().SMALL_HEIGHT,
                        [x.Medium]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT}`,
                        [x.Large]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT} ${f().LARGE_HEIGHT}`,
                        [x.ExtraLarge]: `${f().SMALL_HEIGHT} ${f().MEDIUM_HEIGHT} ${f().LARGE_HEIGHT} ${f().EXTRA_LARGE_HEIGHT}`,
                    },
                    T = {
                        [L.ExtraSmall]: '',
                        [L.Small]: f().SMALL,
                        [L.Medium]: `${f().SMALL} ${f().MEDIUM}`,
                        [L.Large]: `${f().SMALL} ${f().MEDIUM} ${f().LARGE}`,
                        [L.ExtraLarge]: `${f().SMALL} ${f().MEDIUM} ${f().LARGE} ${f().EXTRA_LARGE}`,
                    },
                    C = (e) => {
                        let t = e.children,
                            n = e.className,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    a = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                                return a;
                            })(e, S);
                        const o = (() => {
                                const e = (0, r.useContext)(h),
                                    t = e.width,
                                    n = e.height,
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
                                                return (
                                                    console.error('Unreachable media context resolution'), L.ExtraSmall
                                                );
                                        }
                                    })(e),
                                    i = ((e) => {
                                        switch (!0) {
                                            case e.extraLargeWidth:
                                                return M.ExtraLarge;
                                            case e.largeWidth:
                                                return M.Large;
                                            case e.mediumWidth:
                                                return M.Medium;
                                            case e.smallWidth:
                                                return M.Small;
                                            case e.extraSmallWidth:
                                                return M.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'), M.ExtraSmall
                                                );
                                        }
                                    })(e),
                                    o = ((e) => {
                                        switch (!0) {
                                            case e.extraLargeHeight:
                                                return x.ExtraLarge;
                                            case e.largeHeight:
                                                return x.Large;
                                            case e.mediumHeight:
                                                return x.Medium;
                                            case e.smallHeight:
                                                return x.Small;
                                            case e.extraSmallHeight:
                                                return x.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'), x.ExtraSmall
                                                );
                                        }
                                    })(e);
                                return {
                                    mediaSize: a,
                                    mediaWidth: i,
                                    mediaHeight: o,
                                    remScreenWidth: t,
                                    remScreenHeight: n,
                                };
                            })(),
                            s = o.mediaWidth,
                            l = o.mediaHeight,
                            c = o.mediaSize;
                        return a().createElement('div', y({ className: b()(n, k[s], O[l], T[c]) }, i), t);
                    },
                    A = ['children'],
                    H = (e) => {
                        let t = e.children,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    a = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                                return a;
                            })(e, A);
                        return a().createElement(E, null, a().createElement(C, n, t));
                    };
                var P = n(493),
                    D = n.n(P);
                function N(e) {
                    engine.call('PlaySound', e);
                }
                const W = {
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
                let I, B;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(I || (I = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(B || (B = {}));
                const U = ({
                    children: e,
                    size: t,
                    isFocused: n,
                    type: i,
                    disabled: o,
                    mixClass: s,
                    soundHover: l,
                    soundClick: c,
                    onMouseEnter: u,
                    onMouseMove: d,
                    onMouseDown: _,
                    onMouseUp: m,
                    onMouseLeave: h,
                    onClick: g,
                }) => {
                    const v = (0, r.useRef)(null),
                        E = (0, r.useState)(n),
                        w = E[0],
                        p = E[1],
                        f = (0, r.useState)(!1),
                        L = f[0],
                        M = f[1],
                        x = (0, r.useState)(!1),
                        S = x[0],
                        y = x[1],
                        k = (0, r.useCallback)(() => {
                            o || (v.current && (v.current.focus(), p(!0)));
                        }, [o]),
                        O = (0, r.useCallback)(
                            (e) => {
                                w && null !== v.current && !v.current.contains(e.target) && p(!1);
                            },
                            [w],
                        ),
                        T = (0, r.useCallback)(
                            (e) => {
                                o || (g && g(e));
                            },
                            [o, g],
                        ),
                        C = (0, r.useCallback)(
                            (e) => {
                                o || (null !== l && N(l), u && u(e), y(!0));
                            },
                            [o, l, u],
                        ),
                        A = (0, r.useCallback)(
                            (e) => {
                                d && d(e);
                            },
                            [d],
                        ),
                        H = (0, r.useCallback)(
                            (e) => {
                                o || (m && m(e), M(!1));
                            },
                            [o, m],
                        ),
                        P = (0, r.useCallback)(
                            (e) => {
                                o || (null !== c && N(c), _ && _(e), n && k(), M(!0));
                            },
                            [o, c, _, k, n],
                        ),
                        D = (0, r.useCallback)(
                            (e) => {
                                o || (h && h(e), M(!1));
                            },
                            [o, h],
                        ),
                        B = b()(
                            W.base,
                            W[`base__${i}`],
                            {
                                [W.base__disabled]: o,
                                [W[`base__${t}`]]: t,
                                [W.base__focus]: w,
                                [W.base__highlightActive]: L,
                                [W.base__firstHover]: S,
                            },
                            s,
                        ),
                        U = b()(W.state, W.state__default);
                    return (
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mousedown', O),
                                () => {
                                    document.removeEventListener('mousedown', O);
                                }
                            ),
                            [O],
                        ),
                        (0, r.useEffect)(() => {
                            p(n);
                        }, [n]),
                        a().createElement(
                            'div',
                            {
                                ref: v,
                                className: B,
                                onMouseEnter: C,
                                onMouseMove: A,
                                onMouseUp: H,
                                onMouseDown: P,
                                onMouseLeave: D,
                                onClick: T,
                            },
                            i !== I.ghost &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: W.back }),
                                    a().createElement('span', { className: W.texture }),
                                ),
                            a().createElement(
                                'span',
                                { className: U },
                                a().createElement('span', { className: W.stateDisabled }),
                                a().createElement('span', { className: W.stateHighlightHover }),
                                a().createElement('span', { className: W.stateHighlightActive }),
                            ),
                            a().createElement(
                                'span',
                                { className: W.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                U.defaultProps = { type: I.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const F = (0, r.memo)(U),
                    G = {
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
                    j = [
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
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        V.apply(this, arguments)
                    );
                }
                class $ extends a().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && N(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && N(this.props.soundClick);
                            }),
                            (this._onMouseUp = (e) => (t) => {
                                e && e(t), this.setState({ click: !1 });
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 }));
                    }
                    render() {
                        const e = this.props,
                            t = e.caption,
                            n = e.onClick,
                            r = e.goto,
                            i = e.side,
                            o = e.type,
                            s = e.classNames,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            u = e.onMouseDown,
                            d = e.onMouseUp,
                            _ =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        a = {},
                                        i = Object.keys(e);
                                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                                    return a;
                                })(e, j)),
                            m = b()(G.base, G[`base__${o}`], G[`base__${i}`], null == s ? void 0 : s.base),
                            h = b()(G.icon, G[`icon__${o}`], G[`icon__${i}`], null == s ? void 0 : s.icon),
                            g = b()(G.glow, null == s ? void 0 : s.glow),
                            v = b()(G.caption, G[`caption__${o}`], null == s ? void 0 : s.caption),
                            E = b()(G.goto, null == s ? void 0 : s.goto);
                        return a().createElement(
                            'div',
                            V(
                                {
                                    className: m,
                                    onMouseEnter: this._onMouseEnter(l),
                                    onMouseLeave: this._onMouseLeave(c),
                                    onMouseDown: this._onMouseDown(u),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: n,
                                },
                                _,
                            ),
                            'info' !== o && a().createElement('div', { className: G.shine }),
                            a().createElement('div', { className: h }, a().createElement('div', { className: g })),
                            a().createElement('div', { className: v }, t),
                            r && a().createElement('div', { className: E }, r),
                        );
                    }
                }
                $.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var K = n(364);
                const z = [
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
                function q(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const n = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                n.number = t;
                                break;
                            case 'boolean':
                                n.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                n.string = t.toString();
                        }
                        return n;
                    });
                }
                const Y = (e, t, n = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: K.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: r,
                                },
                                n,
                            ),
                        );
                    },
                    X = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            a = e.args,
                            i = e.onMouseEnter,
                            o = e.onMouseLeave,
                            s = e.onMouseDown,
                            l = e.onClick,
                            c = e.ignoreShowDelay,
                            u = void 0 !== c && c,
                            d = e.ignoreMouseClick,
                            _ = void 0 !== d && d,
                            m = e.decoratorId,
                            h = void 0 === m ? 0 : m,
                            g = e.isEnabled,
                            v = void 0 === g || g,
                            E = e.targetId,
                            w = void 0 === E ? 0 : E,
                            b = e.onShow,
                            p = e.onHide,
                            f = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    a = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                                return a;
                            })(e, z);
                        const L = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            M = (0, r.useMemo)(
                                () =>
                                    w ||
                                    ((e = 1) => {
                                        const t = new Error().stack;
                                        let n,
                                            r = R.invalid('resId');
                                        return (
                                            t &&
                                                ((n = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== n &&
                                                    window.subViews[n] &&
                                                    (r = window.subViews[n].id)),
                                            { caller: n, stack: t, resId: r }
                                        );
                                    })().resId,
                                [w],
                            ),
                            x = (0, r.useCallback)(() => {
                                (L.current.isVisible && L.current.timeoutId) ||
                                    (Y(n, h, { isMouseEvent: !0, on: !0, arguments: q(a) }, M),
                                    b && b(),
                                    (L.current.isVisible = !0));
                            }, [n, h, a, M, b]),
                            S = (0, r.useCallback)(() => {
                                if (L.current.isVisible || L.current.timeoutId) {
                                    const e = L.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (L.current.timeoutId = 0)),
                                        Y(n, h, { on: !1 }, M),
                                        L.current.isVisible && p && p(),
                                        (L.current.isVisible = !1);
                                }
                            }, [n, h, M, p]),
                            y = (0, r.useCallback)((e) => {
                                L.current.isVisible &&
                                    ((L.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (L.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(L.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        return (
                            (0, r.useEffect)(() => {
                                const e = L.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', y, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', y, { capture: !0 }),
                                            e && window.clearTimeout(e);
                                    }
                                );
                            }, []),
                            (0, r.useEffect)(() => {
                                !1 === v && S();
                            }, [v, S]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        window.removeEventListener('mouseleave', S), S();
                                    }
                                ),
                                [S],
                            ),
                            v
                                ? (0, r.cloneElement)(
                                      t,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((k = t.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((L.current.timeoutId = window.setTimeout(x, u ? 100 : 400)),
                                                          i && i(e),
                                                          k && k(e));
                                                  }),
                                              onMouseLeave: ((e) => (t) => {
                                                  S(), null == o || o(t), null == e || e(t);
                                              })(t.props.onMouseLeave),
                                              onClick: ((e) => (t) => {
                                                  !1 === _ && S(), null == l || l(t), null == e || e(t);
                                              })(t.props.onClick),
                                              onMouseDown: ((e) => (t) => {
                                                  !1 === _ && S(), null == s || s(t), null == e || e(t);
                                              })(t.props.onMouseDown),
                                          },
                                          f,
                                      ),
                                  )
                                : t
                        );
                        var k;
                    };
                let Z;
                !(function (e) {
                    (e[(e.NonSet = 0)] = 'NonSet'),
                        (e[(e.Debug = 10)] = 'Debug'),
                        (e[(e.Info = 20)] = 'Info'),
                        (e[(e.Warning = 30)] = 'Warning');
                })(Z || (Z = {}));
                const Q = 'tooltip_watched';
                let J;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown');
                })(J || (J = {}));
                const ee = ['action', 'timeLimit'],
                    te = () => Date.now(),
                    ne = (e, t) => {
                        const n = ((e, t) => {
                                const n = (0, r.useCallback)(
                                    (n, r = Z.Info, a) => {
                                        a || (a = {}),
                                            Object.keys(a).length >= 200 ||
                                                window.uiLoggerModel.log({
                                                    feature: e,
                                                    group: t,
                                                    action: n,
                                                    logLevel: r,
                                                    params: JSON.stringify(a),
                                                });
                                    },
                                    [e, t],
                                );
                                return (e, t, r) => n(e, t, r);
                            })(e, t),
                            a = (0, r.useRef)(new Map()),
                            i = (0, r.useRef)(new Map()),
                            o = (0, r.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = a.current.get(e);
                                    (void 0 !== t && t > 0) || a.current.set(e, te());
                                },
                                [a],
                            ),
                            s = (0, r.useCallback)(() => {
                                a.current.clear(), i.current.clear();
                            }, [a, i]),
                            l = (0, r.useCallback)(
                                (e) => {
                                    e &&
                                        void 0 !== a.current.get(e) &&
                                        void 0 === i.current.get(e) &&
                                        i.current.set(e, te());
                                },
                                [a, i],
                            ),
                            c = (0, r.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = a.current.get(e);
                                    if (void 0 === t) return;
                                    const n = i.current.get(e);
                                    if (void 0 === n) return;
                                    i.current.delete(e);
                                    const r = te() - n;
                                    a.current.set(e, t + r);
                                },
                                [a, i],
                            ),
                            u = (0, r.useCallback)(
                                (e, t = 0, r, o) => {
                                    const s = a.current.get(e);
                                    if (void 0 === s) return;
                                    void 0 !== i.current.get(e) && c(e), a.current.delete(e);
                                    const l = (te() - s) / 1e3;
                                    l <= t ||
                                        ((o = ((e, t) => (void 0 === e && (e = {}), (e.timeSpent = t), e))(o, l)),
                                        n(e, r, o));
                                },
                                [a, i, n, c],
                            );
                        return [(e) => o(e), (e, t, n, r) => u(e, t, n, r), () => s(), (e) => l(e), (e) => c(e)];
                    },
                    re = (e, t) => {
                        const n = ((e) => {
                                const t = ne(e, 'metrics'),
                                    n = t[0],
                                    a = t[1],
                                    i = t[2],
                                    o = t[3],
                                    s = t[4],
                                    l = (0, r.useCallback)(
                                        (e) => {
                                            const t = e.action,
                                                n = e.timeLimit,
                                                r = e.logLevel;
                                            a(
                                                t,
                                                n,
                                                r,
                                                (({
                                                    partnerID: e,
                                                    item: t,
                                                    parentScreen: n,
                                                    itemState: r,
                                                    info: a,
                                                }) => ({
                                                    item: t,
                                                    partnerID: e || null,
                                                    parent_screen: n || null,
                                                    item_state: r || null,
                                                    additional_info: a || null,
                                                }))(e),
                                            );
                                        },
                                        [a],
                                    );
                                return [(e) => n(e), (e) => l(e), () => i(), (e) => o(e), (e) => s(e)];
                            })(e),
                            a = n[0],
                            i = n[1],
                            o = t.action,
                            s = t.timeLimit,
                            l = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    a = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                                return a;
                            })(t, ee);
                        return (0, r.useMemo)(
                            () => ({
                                onShow: () => a(o || Q),
                                onHide: () => i(Object.assign({ action: o || Q, timeLimit: s || 2 }, l)),
                            }),
                            [o, s, l, a, i],
                        );
                    };
                var ae = n(521);
                const ie = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function oe(e = ae.n.NONE, t = ie, n = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== ae.n.NONE)
                            return (
                                window.addEventListener('keydown', r, n),
                                () => {
                                    window.removeEventListener('keydown', r, n);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (o.O.view.isEventHandled()) return;
                                o.O.view.setEventHandled(), t(r), n && r.stopPropagation();
                            }
                        }
                    }, [t, e, n]);
                }
                var se = n(403);
                const le = (0, r.memo)(
                    ({ className: e, backgroundPath: t, onLoaded: n, showVignette: r = !0, showBlur: i = !1 }) => {
                        const o = b()('Background_base_94', i && 'Background_base__blur_69', e);
                        return a().createElement(
                            'div',
                            { className: o, style: { backgroundImage: `url(${t})` } },
                            r && a().createElement('div', { className: 'Background_vignette_79' }),
                            n &&
                                a().createElement('img', {
                                    className: 'Background_preloader_7d',
                                    onLoad: () => n(),
                                    onError: () => n(),
                                    src: t,
                                    alt: t,
                                }),
                        );
                    },
                );
                let ce, ue, de;
                function _e() {
                    return !1;
                }
                !(function (e) {
                    (e.StoryMode = 'story_mode'), (e.Onboarding = 'onboarding');
                })(ce || (ce = {})),
                    (function (e) {
                        e.Watched = 'watched';
                    })(ue || (ue = {})),
                    (function (e) {
                        (e.MissionSelection = 'mission_selection_window'),
                            (e.MssVehicleTooltip = 'mss_vehicle_tooltip'),
                            (e.Congratulations = 'congratulations_window'),
                            (e.Achievement = 'achievement');
                    })(de || (de = {})),
                    console.log;
                var me = n(174);
                function he(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r;
                }
                const ge = (e) => (0 === e ? window : window.subViews.get(e)),
                    ve = ((e, t) => {
                        const n = (0, r.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: i, children: s, mocks: l }) {
                                const c = (0, r.useRef)([]),
                                    u = (e, n, r) => {
                                        var a;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: n = ge,
                                                context: r = 'model',
                                            } = {}) {
                                                const a = new Map();
                                                function i(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? a.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, n) => {
                                                        n.forEach((t) => {
                                                            const n = a.get(t);
                                                            void 0 !== n && n(e);
                                                        });
                                                    });
                                                });
                                                const s = (e) => {
                                                    const a = n(t),
                                                        i = r.split('.').reduce((e, t) => e[t], a);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? i
                                                        : e.split('.').reduce((e, t) => {
                                                              const n = e[t];
                                                              return 'function' == typeof n ? n.bind(e) : n;
                                                          }, i);
                                                };
                                                return {
                                                    subscribe: (n, i) => {
                                                        const l = 'string' == typeof i ? `${r}.${i}` : r,
                                                            c = o.O.view.addModelObserver(l, t, !0);
                                                        return a.set(c, n), e && n(s(i)), c;
                                                    },
                                                    readByPath: s,
                                                    createCallback: (e, t) => {
                                                        const n = s(t);
                                                        return (...t) => {
                                                            n(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = s(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (
                                                            var e,
                                                                n = (function (e, t) {
                                                                    var n =
                                                                        ('undefined' != typeof Symbol &&
                                                                            e[Symbol.iterator]) ||
                                                                        e['@@iterator'];
                                                                    if (n) return (n = n.call(e)).next.bind(n);
                                                                    if (
                                                                        Array.isArray(e) ||
                                                                        (n = (function (e, t) {
                                                                            if (e) {
                                                                                if ('string' == typeof e)
                                                                                    return he(e, t);
                                                                                var n = Object.prototype.toString
                                                                                    .call(e)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === n &&
                                                                                        e.constructor &&
                                                                                        (n = e.constructor.name),
                                                                                    'Map' === n || 'Set' === n
                                                                                        ? Array.from(e)
                                                                                        : 'Arguments' === n ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                n,
                                                                                            )
                                                                                          ? he(e, t)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (t && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        n && (e = n);
                                                                        var r = 0;
                                                                        return function () {
                                                                            return r >= e.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: e[r++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(a.keys());
                                                            !(e = n()).done;

                                                        )
                                                            i(e.value, t);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(n),
                                            s =
                                                'real' === e
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (a = null == r ? void 0 : r.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            l = (t) =>
                                                'mocks' === e ? (null == r ? void 0 : r.getter(t)) : s.readByPath(t),
                                            u = (e) => c.current.push(e),
                                            d = (({ observableModel: e }) => e.object())({
                                                mode: e,
                                                readByPath: l,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (t, n) => {
                                                        const r = null != n ? n : l(t),
                                                            a = me.LO.box(r, { equals: _e });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, me.aD)((e) => a.set(e)),
                                                                    t,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (t, n) => {
                                                        const r = null != n ? n : l(t),
                                                            a = me.LO.box(r, { equals: _e });
                                                        return (
                                                            'real' === e &&
                                                                s.subscribe(
                                                                    (0, me.aD)((e) => a.set(e)),
                                                                    t,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (t, n) => {
                                                        const r = l(n);
                                                        if (Array.isArray(t)) {
                                                            const a = t.reduce(
                                                                (e, t) => ((e[t] = me.LO.box(r[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, me.aD)((e) => {
                                                                            t.forEach((t) => {
                                                                                a[t].set(e[t]);
                                                                            });
                                                                        }),
                                                                        n,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                        {
                                                            const a = t,
                                                                i = Object.entries(a),
                                                                o = i.reduce(
                                                                    (e, [t, n]) => ((e[n] = me.LO.box(r[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    s.subscribe(
                                                                        (0, me.aD)((e) => {
                                                                            i.forEach(([t, n]) => {
                                                                                o[n].set(e[t]);
                                                                            });
                                                                        }),
                                                                        n,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: u,
                                            }),
                                            _ = { mode: e, model: d, externalModel: s, cleanup: u };
                                        return {
                                            model: d,
                                            controls: 'mocks' === e && r ? r.controls(_) : t(_),
                                            externalModel: s,
                                            mode: e,
                                        };
                                    },
                                    d = (0, r.useRef)(!1),
                                    _ = (0, r.useState)(e),
                                    m = _[0],
                                    h = _[1],
                                    g = (0, r.useState)(() => u(e, i, l)),
                                    v = g[0],
                                    E = g[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        d.current ? E(u(m, i, l)) : (d.current = !0);
                                    }, [l, m, i]),
                                    (0, r.useEffect)(() => {
                                        h(e);
                                    }, [e]),
                                    (0, r.useEffect)(
                                        () => () => {
                                            v.externalModel.dispose(), c.current.forEach((e) => e());
                                        },
                                        [v],
                                    ),
                                    a().createElement(n.Provider, { value: v }, s)
                                );
                            },
                            () => (0, r.useContext)(n),
                        ];
                    })(0, ({ externalModel: e }) => ({
                        close: e.createCallbackNoArgs('onClose'),
                        loaded: e.createCallbackNoArgs('onLoaded'),
                    })),
                    Ee = ve[0],
                    we = ve[1];
                function be() {
                    return (
                        (be =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        be.apply(this, arguments)
                    );
                }
                const pe = (0, se.Pi)(() => {
                    const e = we(),
                        t = e.model,
                        n = e.controls,
                        i = (0, r.useCallback)(() => n.close(), [n]);
                    ((e) => {
                        const t = (0, r.useCallback)(
                            (t) => {
                                !t.altKey && e && e();
                            },
                            [e],
                        );
                        oe(ae.n.ENTER, t, !0);
                    })(i),
                        oe(ae.n.SPACE, i),
                        oe(ae.n.ESCAPE, i);
                    const o = re(t.get().isOnboarding ? ce.Onboarding : ce.StoryMode, {
                        action: ue.Watched,
                        item: de.Achievement,
                        parentScreen: de.Congratulations,
                        timeLimit: 2,
                    });
                    return a().createElement(
                        'div',
                        { className: 'CongratulationsWindowApp_base_49' },
                        a().createElement(le, {
                            backgroundPath: R.images.story_mode.gui.maps.icons.congratulations.background(),
                            onLoaded: n.loaded,
                        }),
                        a().createElement('div', { className: 'CongratulationsWindowApp_headerShining_19' }),
                        a().createElement('div', { className: 'CongratulationsWindowApp_shine_16' }),
                        a().createElement(
                            'div',
                            { className: 'CongratulationsWindowApp_lines_80' },
                            a().createElement('div', { className: 'CongratulationsWindowApp_linesImage_6f' }),
                        ),
                        a().createElement(
                            'div',
                            { className: 'CongratulationsWindowApp_ribbon_6d' },
                            a().createElement('div', { className: 'CongratulationsWindowApp_ribbonImage_aa' }),
                        ),
                        a().createElement(
                            'div',
                            { className: 'CongratulationsWindowApp_subTitle_04' },
                            R.strings.sm_common.congratulationsWindow.subTitle(),
                        ),
                        a().createElement(
                            'div',
                            { className: 'CongratulationsWindowApp_title_dc' },
                            R.strings.sm_common.congratulationsWindow.title(),
                        ),
                        a().createElement(
                            'div',
                            { className: 'CongratulationsWindowApp_medal_d6' },
                            a().createElement(
                                X,
                                be(
                                    {
                                        ignoreMouseClick: !0,
                                        ignoreShowDelay: !0,
                                        contentId: R.views.story_mode.common.MedalTooltip('resId'),
                                    },
                                    o,
                                ),
                                a().createElement('div', { className: 'CongratulationsWindowApp_medalImage_67' }),
                            ),
                        ),
                        a().createElement(
                            'div',
                            { className: 'CongratulationsWindowApp_medalName_2d' },
                            R.strings.sm_common.congratulationsWindow.medalName(),
                        ),
                        a().createElement(
                            'div',
                            { className: 'CongratulationsWindowApp_continueButton_39' },
                            a().createElement(
                                F,
                                { size: B.medium, type: I.primary, onClick: i },
                                R.strings.sm_common.congratulationsWindow.okBtn(),
                            ),
                        ),
                        t.get().isCloseVisible &&
                            a().createElement(
                                'div',
                                { className: 'CongratulationsWindowApp_closeBtn_5e' },
                                a().createElement($, {
                                    caption: R.strings.menu.viewHeader.closeBtn.label(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: i,
                                }),
                            ),
                    );
                });
                engine.whenReady.then(() => {
                    D().render(
                        a().createElement(Ee, null, a().createElement(H, null, a().createElement(pe, null))),
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
        var n = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](n, n.exports, __webpack_require__), n.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, n, r) => {
            if (!t) {
                var a = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, n, r] = deferred[l], i = !0, o = 0; o < t.length; o++)
                        (!1 & r || a >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[o]))
                            ? t.splice(o--, 1)
                            : ((i = !1), r < a && (a = r));
                    if (i) {
                        deferred.splice(l--, 1);
                        var s = n();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            r = r || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > r; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, n, r];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(t, { a: t }), t;
        }),
        (__webpack_require__.d = (e, t) => {
            for (var n in t)
                __webpack_require__.o(t, n) &&
                    !__webpack_require__.o(e, n) &&
                    Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
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
        (__webpack_require__.j = 398),
        (() => {
            var e = { 398: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var r,
                        a,
                        [i, o, s] = n,
                        l = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (r in o) __webpack_require__.o(o, r) && (__webpack_require__.m[r] = o[r]);
                        if (s) var c = s(__webpack_require__);
                    }
                    for (t && t(n); l < i.length; l++)
                        (a = i[l]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(c);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(624));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
