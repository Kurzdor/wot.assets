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
            527: (e, t, a) => {
                'use strict';
                a.r(t), a.d(t, { mouse: () => o, onResize: () => i });
                var r = a(472),
                    n = a(176);
                const i = (0, r.E)('clientResized'),
                    s = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') };
                const o = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, n.R)(!1);
                    }
                    function a() {
                        e.enabled && (0, n.R)(!0);
                    }
                    function r() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', a))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', a))
                            : (0, n.R)(!1);
                    }
                    const i = ['down', 'up', 'move'].reduce(
                        (t, a) => (
                            (t[a] = (function (t) {
                                return (a) => {
                                    e.listeners += 1;
                                    let n = !0;
                                    const i = `mouse${t}`,
                                        o = s[t]((e) => a([e, 'outside']));
                                    function l(e) {
                                        a([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, l),
                                        r(),
                                        () => {
                                            n &&
                                                (o(),
                                                window.removeEventListener(i, l),
                                                (e.listeners -= 1),
                                                r(),
                                                (n = !1));
                                        }
                                    );
                                };
                            })(a)),
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
                            e.enabled && (0, n.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, n.R)(!1);
                        },
                    });
                })();
            },
            959: (e, t, a) => {
                'use strict';
                a.r(t),
                    a.d(t, {
                        events: () => r,
                        getMouseGlobalPosition: () => i,
                        getSize: () => n,
                        graphicsQuality: () => s,
                    });
                var r = a(527);
                function n(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            176: (e, t, a) => {
                'use strict';
                function r(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                a.d(t, { R: () => r });
            },
            472: (e, t, a) => {
                'use strict';
                function r(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                a.d(t, { E: () => r });
            },
            138: (e, t, a) => {
                'use strict';
                a.d(t, { O: () => n });
                var r = a(959);
                const n = { view: a(641), client: r };
            },
            722: (e, t, a) => {
                'use strict';
                function r(e, t, a = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, a);
                }
                function n(e, t, a) {
                    return `url(${r(e, t, a)})`;
                }
                a.r(t), a.d(t, { getBgUrl: () => n, getTextureUrl: () => r });
            },
            112: (e, t, a) => {
                'use strict';
                a.d(t, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            538: (e, t, a) => {
                'use strict';
                a.d(t, { U: () => n });
                var r = a(472);
                const n = {
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
            641: (e, t, a) => {
                'use strict';
                a.r(t),
                    a.d(t, {
                        addModelObserver: () => _,
                        addPreloadTexture: () => o,
                        children: () => r,
                        displayStatus: () => n.W,
                        displayStatusIs: () => M,
                        events: () => i.U,
                        extraSize: () => y,
                        forceTriggerMouseMove: () => x,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => S,
                        getScale: () => E,
                        getSize: () => d,
                        getViewGlobalPosition: () => h,
                        isEventHandled: () => L,
                        isFocused: () => p,
                        pxToRem: () => w,
                        remToPx: () => v,
                        resize: () => m,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => b,
                        setEventHandled: () => f,
                        setInputPaddingsRem: () => l,
                        setSidePaddingsRem: () => u,
                        whenTutorialReady: () => T,
                    });
                var r = a(722),
                    n = a(112),
                    i = a(538),
                    s = a(566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, t, a, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, a, r);
                }
                function _(e, t, a) {
                    return viewEnv.addDataChangedCallback(e, t, a);
                }
                function u(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function d(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function m(e, t, a = 'px') {
                    return 'rem' === a ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function h(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: v(t.x), y: v(t.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function E() {
                    return viewEnv.getScale();
                }
                function w(e) {
                    return viewEnv.pxToRem(e);
                }
                function v(e) {
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
                function x() {
                    viewEnv.forceTriggerMouseMove();
                }
                function S() {
                    return viewEnv.getShowingStatus();
                }
                const M = Object.keys(n.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === n.W[t]), e),
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
                    T = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            566: (e, t, a) => {
                'use strict';
                a.d(t, { qP: () => c });
                const r = ['args'];
                const n = 2,
                    i = 16,
                    s = 32,
                    o = 64,
                    l = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        r,
                                        n = {},
                                        i = Object.keys(e);
                                    for (r = 0; r < i.length; r++) (a = i[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                                    return n;
                                })(t, r);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, s, {
                                          arguments:
                                              ((n = i),
                                              Object.entries(n).map(([e, t]) => {
                                                  const a = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: a, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: a, name: e, bool: t };
                                                      default:
                                                          return { __Type: a, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: a, type: e });
                        var n;
                    },
                    c = {
                        close(e) {
                            l('popover' === e ? n : s);
                        },
                        minimize() {
                            l(o);
                        },
                        move(e) {
                            l(i, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            358: (e, t, a) => {
                'use strict';
                a.d(t, { Z: () => i });
                var r = a(138);
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
                    addCallback(e, t, a = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const i = r.O.view.addModelObserver(e, a, n);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = t),
                                  a > 0 && (this._views[a] ? this._views[a].push(i) : (this._views[a] = [i])))
                                : console.error("Can't add callback for model:", e),
                            i
                        );
                    }
                    removeCallback(e, t = 0) {
                        let a = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((a = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            a || console.error("Can't remove callback by id:", e),
                            a
                        );
                    }
                    _emmitDataChanged(e, t, a) {
                        a.forEach((a) => {
                            const r = this._callbacks[a];
                            void 0 !== r && r(e, t);
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
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(596);
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
            596: (e, t, a) => {
                'use strict';
                a.d(t, { Sw: () => i.Z, ry: () => b });
                class r {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: a }) => {
                                    let r = e.target;
                                    do {
                                        if (r === t) return;
                                        r = r.parentNode;
                                    } while (r);
                                    a();
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
                        const a = e,
                            r = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== a || t !== r)),
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
                const n = r;
                var i = a(358);
                const s = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    o = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, a) => userLocale.getTimeFormat(e, t, void 0 === a || a),
                        getTimeString: (e, t, a) => userLocale.getTimeString(e, t, void 0 === a || a),
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
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    _ = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                let m, h;
                !(function (e) {
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
                })(m || (m = {})),
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
                    })(h || (h = {}));
                var g = a(138);
                const E = ['args'];
                function w(e, t, a, r, n, i, s) {
                    try {
                        var o = e[i](s),
                            l = o.value;
                    } catch (e) {
                        return void a(e);
                    }
                    o.done ? t(l) : Promise.resolve(l).then(r, n);
                }
                const v = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                        a = arguments;
                                    return new Promise(function (r, n) {
                                        var i = e.apply(t, a);
                                        function s(e) {
                                            w(i, r, n, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            w(i, r, n, s, o, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    p = (e, t) => {
                        const a = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const n = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var a,
                                        r,
                                        n = {},
                                        i = Object.keys(e);
                                    for (r = 0; r < i.length; r++) (a = i[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                                    return n;
                                })(t, E);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: a, type: e }, i, {
                                          arguments:
                                              ((r = n),
                                              Object.entries(r).map(([e, t]) => {
                                                  const a = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          a.number = t;
                                                          break;
                                                      case 'boolean':
                                                          a.bool = t;
                                                          break;
                                                      default:
                                                          a.string = t.toString();
                                                  }
                                                  return a;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: a, type: e }, i));
                        } else viewEnv.handleViewEvent({ __Type: a, type: e });
                        var r;
                    },
                    f = () => p(l.CLOSE),
                    L = (e, t) => {
                        e.keyCode === m.ESCAPE && t();
                    };
                var x = a(572);
                const S = n.instance,
                    M = {
                        DataTracker: i.Z,
                        ViewModel: x.Z,
                        ViewEventType: l,
                        NumberFormatType: c,
                        RealFormatType: _,
                        TimeFormatType: u,
                        DateFormatType: d,
                        makeGlobalBoundingBox: v,
                        sendMoveEvent: (e) => p(l.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => p(l.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, a = 0) => {
                            p(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: a, args: t });
                        },
                        sendShowPopOverEvent: (e, t, a, r, n = R.invalid('resId'), i) => {
                            const s = g.O.view.getViewGlobalPosition(),
                                o = a.getBoundingClientRect(),
                                c = o.x,
                                _ = o.y,
                                u = o.width,
                                d = o.height,
                                m = {
                                    x: g.O.view.pxToRem(c) + s.x,
                                    y: g.O.view.pxToRem(_) + s.y,
                                    width: g.O.view.pxToRem(u),
                                    height: g.O.view.pxToRem(d),
                                };
                            p(l.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: n,
                                direction: t,
                                bbox: v(m),
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
                            const a = {};
                            if ('object' != typeof t) return t;
                            for (const r in t)
                                if (Object.prototype.hasOwnProperty.call(t, r)) {
                                    const n = Object.prototype.toString.call(t[r]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = t[r];
                                        a[r] = [];
                                        for (let t = 0; t < n.length; t++) a[r].push({ value: e(n[t].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (a[r] = e(t[r]))
                                            : (a[r] = t[r]);
                                }
                            return a;
                        },
                        ClickOutsideManager: S,
                        SystemLocale: s,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = M;
            },
            149: (e, t, a) => {
                'use strict';
                var r = a(179),
                    n = a.n(r),
                    i = a(493),
                    s = a.n(i);
                const o = (e, t, a) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && a.extraLarge) ||
                          (t.largeHeight && a.large) ||
                          (t.mediumHeight && a.medium) ||
                          (t.smallHeight && a.small) ||
                          (t.extraSmallHeight && a.extraSmall)
                            ? e
                            : null
                        : e;
                var l = a(138);
                const c = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var _;
                function u(e, t, a) {
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
                        })(e, a),
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
                        })(t, a),
                        i = Math.min(r, n);
                    return {
                        extraLarge: i === a.extraLarge.weight,
                        large: i === a.large.weight,
                        medium: i === a.medium.weight,
                        small: i === a.small.weight,
                        extraSmall: i === a.extraSmall.weight,
                        extraLargeWidth: r === a.extraLarge.weight,
                        largeWidth: r === a.large.weight,
                        mediumWidth: r === a.medium.weight,
                        smallWidth: r === a.small.weight,
                        extraSmallWidth: r === a.extraSmall.weight,
                        extraLargeHeight: n === a.extraLarge.weight,
                        largeHeight: n === a.large.weight,
                        mediumHeight: n === a.medium.weight,
                        smallHeight: n === a.small.weight,
                        extraSmallHeight: n === a.extraSmall.weight,
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
                })(_ || (_ = {}));
                const d = l.O.client.getSize('rem'),
                    m = d.width,
                    h = d.height,
                    g = Object.assign({ width: m, height: h }, u(m, h, c)),
                    E = (0, r.createContext)(g),
                    w = ['children'];
                const v = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                r,
                                n = {},
                                i = Object.keys(e);
                            for (r = 0; r < i.length; r++) (a = i[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                            return n;
                        })(e, w);
                    const n = (0, r.useContext)(E),
                        i = n.extraLarge,
                        s = n.large,
                        l = n.medium,
                        c = n.small,
                        _ = n.extraSmall,
                        u = n.extraLargeWidth,
                        d = n.largeWidth,
                        m = n.mediumWidth,
                        h = n.smallWidth,
                        g = n.extraSmallWidth,
                        v = n.extraLargeHeight,
                        b = n.largeHeight,
                        p = n.mediumHeight,
                        f = n.smallHeight,
                        L = n.extraSmallHeight,
                        x = { extraLarge: v, large: b, medium: p, small: f, extraSmall: L };
                    if (a.extraLarge || a.large || a.medium || a.small || a.extraSmall) {
                        if (a.extraLarge && i) return t;
                        if (a.large && s) return t;
                        if (a.medium && l) return t;
                        if (a.small && c) return t;
                        if (a.extraSmall && _) return t;
                    } else {
                        if (a.extraLargeWidth && u) return o(t, a, x);
                        if (a.largeWidth && d) return o(t, a, x);
                        if (a.mediumWidth && m) return o(t, a, x);
                        if (a.smallWidth && h) return o(t, a, x);
                        if (a.extraSmallWidth && g) return o(t, a, x);
                        if (
                            !(a.extraLargeWidth || a.largeWidth || a.mediumWidth || a.smallWidth || a.extraSmallWidth)
                        ) {
                            if (a.extraLargeHeight && v) return t;
                            if (a.largeHeight && b) return t;
                            if (a.mediumHeight && p) return t;
                            if (a.smallHeight && f) return t;
                            if (a.extraSmallHeight && L) return t;
                        }
                    }
                    return null;
                };
                v.defaultProps = {
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
                (0, r.memo)(v);
                const b = (e) => {
                        const t = (0, r.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    p = (0, r.memo)(({ children: e }) => {
                        const t = (0, r.useContext)(E),
                            a = (0, r.useState)(t),
                            i = a[0],
                            s = a[1],
                            o = (0, r.useCallback)((e, t) => {
                                const a = l.O.view.pxToRem(e),
                                    r = l.O.view.pxToRem(t);
                                s(Object.assign({ width: a, height: r }, u(a, r, c)));
                            }, []);
                        b(() => {
                            engine.on('clientResized', o);
                        }),
                            (0, r.useEffect)(() => () => engine.off('clientResized', o), [o]);
                        const _ = (0, r.useMemo)(() => Object.assign({}, i), [i]);
                        return n().createElement(E.Provider, { value: _ }, e);
                    });
                var f = a(483),
                    L = a.n(f),
                    x = a(926),
                    S = a.n(x);
                let M, y, T;
                !(function (e) {
                    (e[(e.ExtraSmall = c.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = c.small.width)] = 'Small'),
                        (e[(e.Medium = c.medium.width)] = 'Medium'),
                        (e[(e.Large = c.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = c.extraLarge.width)] = 'ExtraLarge');
                })(M || (M = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = c.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = c.small.width)] = 'Small'),
                            (e[(e.Medium = c.medium.width)] = 'Medium'),
                            (e[(e.Large = c.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = c.extraLarge.width)] = 'ExtraLarge');
                    })(y || (y = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = c.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = c.small.height)] = 'Small'),
                            (e[(e.Medium = c.medium.height)] = 'Medium'),
                            (e[(e.Large = c.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = c.extraLarge.height)] = 'ExtraLarge');
                    })(T || (T = {}));
                const C = () => {
                        const e = (0, r.useContext)(E),
                            t = e.width,
                            a = e.height,
                            n = ((e) => {
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
                                        return y.ExtraLarge;
                                    case e.largeWidth:
                                        return y.Large;
                                    case e.mediumWidth:
                                        return y.Medium;
                                    case e.smallWidth:
                                        return y.Small;
                                    case e.extraSmallWidth:
                                        return y.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), y.ExtraSmall;
                                }
                            })(e),
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return T.ExtraLarge;
                                    case e.largeHeight:
                                        return T.Large;
                                    case e.mediumHeight:
                                        return T.Medium;
                                    case e.smallHeight:
                                        return T.Small;
                                    case e.extraSmallHeight:
                                        return T.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), T.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: n, mediaWidth: i, mediaHeight: s, remScreenWidth: t, remScreenHeight: a };
                    },
                    O = ['children', 'className'];
                function A() {
                    return (
                        (A =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var a = arguments[t];
                                    for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
                                }
                                return e;
                            }),
                        A.apply(this, arguments)
                    );
                }
                const H = {
                        [y.ExtraSmall]: '',
                        [y.Small]: S().SMALL_WIDTH,
                        [y.Medium]: `${S().SMALL_WIDTH} ${S().MEDIUM_WIDTH}`,
                        [y.Large]: `${S().SMALL_WIDTH} ${S().MEDIUM_WIDTH} ${S().LARGE_WIDTH}`,
                        [y.ExtraLarge]: `${S().SMALL_WIDTH} ${S().MEDIUM_WIDTH} ${S().LARGE_WIDTH} ${S().EXTRA_LARGE_WIDTH}`,
                    },
                    P = {
                        [T.ExtraSmall]: '',
                        [T.Small]: S().SMALL_HEIGHT,
                        [T.Medium]: `${S().SMALL_HEIGHT} ${S().MEDIUM_HEIGHT}`,
                        [T.Large]: `${S().SMALL_HEIGHT} ${S().MEDIUM_HEIGHT} ${S().LARGE_HEIGHT}`,
                        [T.ExtraLarge]: `${S().SMALL_HEIGHT} ${S().MEDIUM_HEIGHT} ${S().LARGE_HEIGHT} ${S().EXTRA_LARGE_HEIGHT}`,
                    },
                    k = {
                        [M.ExtraSmall]: '',
                        [M.Small]: S().SMALL,
                        [M.Medium]: `${S().SMALL} ${S().MEDIUM}`,
                        [M.Large]: `${S().SMALL} ${S().MEDIUM} ${S().LARGE}`,
                        [M.ExtraLarge]: `${S().SMALL} ${S().MEDIUM} ${S().LARGE} ${S().EXTRA_LARGE}`,
                    },
                    D = (e) => {
                        let t = e.children,
                            a = e.className,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var a,
                                    r,
                                    n = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) (a = i[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                                return n;
                            })(e, O);
                        const i = C(),
                            s = i.mediaWidth,
                            o = i.mediaHeight,
                            l = i.mediaSize;
                        return n().createElement('div', A({ className: L()(a, H[s], P[o], k[l]) }, r), t);
                    },
                    N = ['children'];
                const W = (e) => {
                    let t = e.children,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var a,
                                r,
                                n = {},
                                i = Object.keys(e);
                            for (r = 0; r < i.length; r++) (a = i[r]), t.indexOf(a) >= 0 || (n[a] = e[a]);
                            return n;
                        })(e, N);
                    return n().createElement(p, null, n().createElement(D, a, t));
                };
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
                    isFocused: a,
                    type: i,
                    disabled: s,
                    mixClass: o,
                    soundHover: l,
                    soundClick: c,
                    onMouseEnter: _,
                    onMouseMove: u,
                    onMouseDown: d,
                    onMouseUp: m,
                    onMouseLeave: h,
                    onClick: g,
                }) => {
                    const E = (0, r.useRef)(null),
                        w = (0, r.useState)(a),
                        v = w[0],
                        b = w[1],
                        p = (0, r.useState)(!1),
                        f = p[0],
                        x = p[1],
                        S = (0, r.useState)(!1),
                        M = S[0],
                        y = S[1],
                        T = (0, r.useCallback)(() => {
                            s || (E.current && (E.current.focus(), b(!0)));
                        }, [s]),
                        C = (0, r.useCallback)(
                            (e) => {
                                v && null !== E.current && !E.current.contains(e.target) && b(!1);
                            },
                            [v],
                        ),
                        O = (0, r.useCallback)(
                            (e) => {
                                s || (g && g(e));
                            },
                            [s, g],
                        ),
                        A = (0, r.useCallback)(
                            (e) => {
                                s || (null !== l && I(l), _ && _(e), y(!0));
                            },
                            [s, l, _],
                        ),
                        H = (0, r.useCallback)(
                            (e) => {
                                u && u(e);
                            },
                            [u],
                        ),
                        P = (0, r.useCallback)(
                            (e) => {
                                s || (m && m(e), x(!1));
                            },
                            [s, m],
                        ),
                        k = (0, r.useCallback)(
                            (e) => {
                                s || (null !== c && I(c), d && d(e), a && T(), x(!0));
                            },
                            [s, c, d, T, a],
                        ),
                        D = (0, r.useCallback)(
                            (e) => {
                                s || (h && h(e), x(!1));
                            },
                            [s, h],
                        ),
                        N = L()(
                            U.base,
                            U[`base__${i}`],
                            {
                                [U.base__disabled]: s,
                                [U[`base__${t}`]]: t,
                                [U.base__focus]: v,
                                [U.base__highlightActive]: f,
                                [U.base__firstHover]: M,
                            },
                            o,
                        ),
                        W = L()(U.state, U.state__default);
                    return (
                        (0, r.useEffect)(
                            () => (
                                document.addEventListener('mousedown', C),
                                () => {
                                    document.removeEventListener('mousedown', C);
                                }
                            ),
                            [C],
                        ),
                        (0, r.useEffect)(() => {
                            b(a);
                        }, [a]),
                        n().createElement(
                            'div',
                            {
                                ref: E,
                                className: N,
                                onMouseEnter: A,
                                onMouseMove: H,
                                onMouseUp: P,
                                onMouseDown: k,
                                onMouseLeave: D,
                                onClick: O,
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
                const $ = (0, r.memo)(B);
                let V;
                !(function (e) {
                    (e[(e.Available = 0)] = 'Available'),
                        (e[(e.NotEnoughMoney = 1)] = 'NotEnoughMoney'),
                        (e[(e.bpNotPassed = 2)] = 'bpNotPassed');
                })(V || (V = {}));
                const j = (e = 1) => {
                        const t = new Error().stack;
                        let a,
                            r = R.invalid('resId');
                        return (
                            t &&
                                ((a = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                window.__feature &&
                                    window.__feature !== a &&
                                    window.subViews[a] &&
                                    (r = window.subViews[a].id)),
                            { caller: a, stack: t, resId: r }
                        );
                    },
                    z = (e, t) => e.split('.').reduce((e, t) => e && e[t], t);
                var K = a(596);
                const q = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    Y = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    X = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, a) => {
                                const r = z(`${e}.${a}`, window);
                                return q(r) ? t(e, a, r) : `${e}.${a}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    Z = (e) => {
                        const t = ((e) => {
                                const t = j(),
                                    a = t.caller,
                                    r = t.resId,
                                    n = window.__feature && window.__feature !== a && a ? `subViews.${a}` : '';
                                return { modelPrefix: n, modelPath: Y(n, e || ''), resId: r };
                            })(),
                            a = t.modelPrefix,
                            r = e.split('.');
                        if (r.length > 0) {
                            const e = [r[0]];
                            return (
                                r.reduce((t, r) => {
                                    const n = z(Y(a, `${t}.${r}`), window);
                                    return q(n) ? (e.push(n.id), `${t}.${r}.value`) : (e.push(r), `${t}.${r}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    },
                    Q = K.Sw.instance;
                let J;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(J || (J = {}));
                const ee = (e = 'model', t = J.Deep) => {
                        const a = (0, r.useState)(0),
                            n = (a[0], a[1]),
                            i = (0, r.useMemo)(() => j(), []),
                            s = i.caller,
                            o = i.resId,
                            l = (0, r.useMemo)(
                                () => (window.__feature && window.__feature !== s ? `subViews.${s}.${e}` : e),
                                [s, e],
                            ),
                            c = (0, r.useState)(() =>
                                ((e) => {
                                    const t = z(e, window);
                                    for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                    return q(t) ? t.value : t;
                                })(X(l)),
                            ),
                            _ = c[0],
                            u = c[1],
                            d = (0, r.useRef)(-1);
                        return (
                            b(() => {
                                if (
                                    ('boolean' == typeof t &&
                                        ((t = t ? J.Deep : J.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    t !== J.None)
                                ) {
                                    const a = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            t === J.Deep
                                                ? (e === _ && n((e) => e + 1), u(e))
                                                : u(Object.assign([], e));
                                        },
                                        r = Z(e);
                                    d.current = Q.addCallback(r, a, o, t === J.Deep);
                                }
                            }),
                            (0, r.useEffect)(() => {
                                if (t !== J.None)
                                    return () => {
                                        Q.removeCallback(d.current, o);
                                    };
                            }, [o, t]),
                            _
                        );
                    },
                    te = {
                        base: 'Content_base_1f',
                        base__progression: 'Content_base__progression_18',
                        base__withCaption: 'Content_base__withCaption_2c',
                        content: 'Content_content_d7',
                        content__disabled: 'Content_content__disabled_76',
                        container: 'Content_container_ec',
                        levelBadge: 'Content_levelBadge_c2',
                        number: 'Content_number_87',
                        label: 'Content_label_f5',
                        separator: 'Content_separator_a2',
                        price: 'Content_price_c0',
                        price__disabled: 'Content_price__disabled_13',
                        currency: 'Content_currency_e0',
                        currency__bpcoin: 'Content_currency__bpcoin_d2',
                        currency__bpbit: 'Content_currency__bpbit_93',
                        currency__gold: 'Content_currency__gold_3a',
                        buyButton: 'Content_buyButton_2a',
                        caption: 'Content_caption_11',
                        warningText: 'Content_warningText_ce',
                        warningIcon: 'Content_warningIcon_4c',
                        userCurrencyText: 'Content_userCurrencyText_4f',
                        userCurrency: 'Content_userCurrency_fc',
                    },
                    ae = R.strings.vehicle_preview.buyingPanel.style,
                    re = R.images.gui.maps.icons.components.switcher.numbers,
                    ne = () => {
                        const e = ee(),
                            t = e.level,
                            a = e.price,
                            i = e.currency,
                            s = e.userCurrency,
                            o = e.status,
                            l = e.onBuy;
                        (0, r.useLayoutEffect)(() => {
                            viewEnv.setInputArea(200, 50, 552, 162);
                        }, []);
                        const c = (0, r.useCallback)(() => {
                                l();
                            }, [l]),
                            _ = o !== V.Available,
                            u = s >= 0 && (o === V.Available || o === V.NotEnoughMoney),
                            d = t > 0,
                            m = 2 * (t - 1),
                            h = { backgroundImage: `url(${re.$dyn(`number_${m}_big_dark`)})` },
                            g = L()(te.currency, te[`currency__${i}`]),
                            E = d ? ae.description.maxLevel() : ae.description.nonProgression(),
                            w = ae.status.$num(o);
                        return n().createElement(
                            'div',
                            { className: L()(te.base, d && te.base__progression, u && te.base__withCaption) },
                            n().createElement(
                                'div',
                                { className: L()(te.content, _ && te.content__disabled) },
                                d &&
                                    n().createElement(
                                        'div',
                                        { className: te.container },
                                        n().createElement('div', { className: te.levelBadge }),
                                        n().createElement('div', { className: te.number, style: h }),
                                    ),
                                n().createElement('div', { className: te.label }, E),
                                n().createElement('div', { className: te.separator }),
                                n().createElement('div', { className: g }),
                                n().createElement(
                                    'div',
                                    { className: L()(te.price, o === V.NotEnoughMoney && te.price__disabled) },
                                    a,
                                ),
                                n().createElement(
                                    $,
                                    { mixClass: te.buyButton, onClick: c, size: G.medium, type: F.main, disabled: _ },
                                    ae.button.buy(),
                                ),
                            ),
                            n().createElement(
                                'div',
                                { className: te.caption },
                                _ &&
                                    n().createElement(
                                        n().Fragment,
                                        null,
                                        n().createElement('div', { className: te.warningIcon }),
                                        n().createElement('p', { className: te.warningText }, w),
                                    ),
                                u &&
                                    n().createElement(
                                        n().Fragment,
                                        null,
                                        n().createElement(
                                            'div',
                                            { className: te.userCurrencyText },
                                            ae.caption.userMoney(),
                                        ),
                                        n().createElement('div', { className: g }),
                                        n().createElement('div', { className: te.userCurrency }, s),
                                    ),
                            ),
                        );
                    },
                    ie = () => n().createElement(ne, null);
                engine.whenReady.then(() => {
                    s().render(
                        n().createElement(W, null, n().createElement(ie, null)),
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
        var a = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](a, a.exports, __webpack_require__), a.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, a, r) => {
            if (!t) {
                var n = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, a, r] = deferred[l], i = !0, s = 0; s < t.length; s++)
                        (!1 & r || n >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((i = !1), r < n && (n = r));
                    if (i) {
                        deferred.splice(l--, 1);
                        var o = a();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            r = r || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > r; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, a, r];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(t, { a: t }), t;
        }),
        (__webpack_require__.d = (e, t) => {
            for (var a in t)
                __webpack_require__.o(t, a) &&
                    !__webpack_require__.o(e, a) &&
                    Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
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
        (__webpack_require__.j = 850),
        (() => {
            var e = { 850: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, a) => {
                    var r,
                        n,
                        [i, s, o] = a,
                        l = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (r in s) __webpack_require__.o(s, r) && (__webpack_require__.m[r] = s[r]);
                        if (o) var c = o(__webpack_require__);
                    }
                    for (t && t(a); l < i.length; l++)
                        (n = i[l]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
                    return __webpack_require__.O(c);
                },
                a = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [294], () => __webpack_require__(149));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
