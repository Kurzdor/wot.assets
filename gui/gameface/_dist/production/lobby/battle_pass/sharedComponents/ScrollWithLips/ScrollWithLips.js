(() => {
    'use strict';
    var __webpack_modules__ = {
            7515: (e, t, n) => {
                n.d(t, { u: () => r });
                const r = (e, t, n) => (n < e ? e : n > t ? t : n);
            },
            1856: (e, t, n) => {
                n.d(t, { v: () => r });
                const r = (e) => {
                    let t,
                        n = null;
                    return (
                        (n = requestAnimationFrame(() => {
                            n = requestAnimationFrame(() => {
                                (n = null), (t = e());
                            });
                        })),
                        () => {
                            'function' == typeof t && t(), null !== n && cancelAnimationFrame(n);
                        }
                    );
                };
            },
            527: (e, t, n) => {
                n.r(t), n.d(t, { mouse: () => s, onResize: () => i });
                var r = n(2472),
                    o = n(1176);
                const i = (0, r.E)('clientResized'),
                    a = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') };
                const s = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, o.R)(!1);
                    }
                    function n() {
                        e.enabled && (0, o.R)(!0);
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
                            : (0, o.R)(!1);
                    }
                    const i = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let o = !0;
                                    const i = `mouse${t}`,
                                        s = a[t]((e) => n([e, 'outside']));
                                    function c(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, c),
                                        r(),
                                        () => {
                                            o &&
                                                (s(),
                                                window.removeEventListener(i, c),
                                                (e.listeners -= 1),
                                                r(),
                                                (o = !1));
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
                            e.enabled && (0, o.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, o.R)(!1);
                        },
                    });
                })();
            },
            5959: (e, t, n) => {
                n.r(t),
                    n.d(t, {
                        events: () => r,
                        getMouseGlobalPosition: () => i,
                        getSize: () => o,
                        graphicsQuality: () => a,
                    });
                var r = n(527);
                function o(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const a = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, n) => {
                function r(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                n.d(t, { R: () => r });
            },
            2472: (e, t, n) => {
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
            3138: (e, t, n) => {
                n.d(t, { O: () => o });
                var r = n(5959);
                const o = { view: n(7641), client: r };
            },
            3722: (e, t, n) => {
                function r(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function o(e, t, n) {
                    return `url(${r(e, t, n)})`;
                }
                n.r(t), n.d(t, { getBgUrl: () => o, getTextureUrl: () => r });
            },
            6112: (e, t, n) => {
                n.d(t, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, n) => {
                n.d(t, { U: () => o });
                var r = n(2472);
                const o = {
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
            7641: (e, t, n) => {
                n.r(t),
                    n.d(t, {
                        addModelObserver: () => u,
                        addPreloadTexture: () => s,
                        children: () => r,
                        displayStatus: () => o.W,
                        displayStatusIs: () => M,
                        events: () => i.U,
                        extraSize: () => O,
                        forceTriggerMouseMove: () => S,
                        freezeTextureBeforeResize: () => m,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => P,
                        getScale: () => p,
                        getSize: () => _,
                        getViewGlobalPosition: () => f,
                        isEventHandled: () => y,
                        isFocused: () => w,
                        pxToRem: () => E,
                        remToPx: () => g,
                        resize: () => v,
                        sendEvent: () => a.qP,
                        setAnimateWindow: () => h,
                        setEventHandled: () => b,
                        setInputPaddingsRem: () => c,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => R,
                    });
                var r = n(3722),
                    o = n(6112),
                    i = n(6538),
                    a = n(8566);
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function c(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, t, n, r = 1) {
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
                function v(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function f(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: g(t.x), y: g(t.y) };
                }
                function m() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function p() {
                    return viewEnv.getScale();
                }
                function E(e) {
                    return viewEnv.pxToRem(e);
                }
                function g(e) {
                    return viewEnv.remToPx(e);
                }
                function h(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function w() {
                    return viewEnv.isFocused();
                }
                function b() {
                    return viewEnv.setEventHandled();
                }
                function y() {
                    return viewEnv.isEventHandled();
                }
                function S() {
                    viewEnv.forceTriggerMouseMove();
                }
                function P() {
                    return viewEnv.getShowingStatus();
                }
                const M = Object.keys(o.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === o.W[t]), e),
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
                    R = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : i.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, n) => {
                n.d(t, { qP: () => l });
                const r = ['args'];
                const o = 2,
                    i = 16,
                    a = 32,
                    s = 64,
                    c = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        o = {},
                                        i = Object.keys(e);
                                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                                    return o;
                                })(t, r);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, a, {
                                          arguments:
                                              ((o = i),
                                              Object.entries(o).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, a));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var o;
                    },
                    l = {
                        close(e) {
                            c('popover' === e ? o : a);
                        },
                        minimize() {
                            c(s);
                        },
                        move(e) {
                            c(i, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            3815: (e, t, n) => {
                n.d(t, { z: () => i });
                var r = n(6179);
                const o = [];
                function i(e) {
                    const t = (0, r.useRef)(e);
                    return (
                        (0, r.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, r.useCallback)((...e) => (0, t.current)(...e), o)
                    );
                }
            },
            5521: (e, t, n) => {
                let r, o;
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
                    })(o || (o = {}));
            },
            7727: (e, t, n) => {
                function r(e) {
                    engine.call('PlaySound', e);
                }
                n.d(t, { G: () => r });
            },
            1358: (e, t, n) => {
                n.d(t, { Z: () => i });
                var r = n(3138);
                class o {
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
                        return window.__dataTracker || (window.__dataTracker = new o()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, t, n = 0, o = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const i = r.O.view.addModelObserver(e, n, o);
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
                o.__instance = void 0;
                const i = o;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
            4179: (e, t, n) => {
                n.d(t, { ry: () => g });
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
                const o = r;
                var i = n(1358);
                const a = {
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
                let c;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(c || (c = {}));
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    u = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var v = n(5521),
                    f = n(3138);
                const m = ['args'];
                function p(e, t, n, r, o, i, a) {
                    try {
                        var s = e[i](a),
                            c = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    s.done ? t(c) : Promise.resolve(c).then(r, o);
                }
                const E = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    g = (function () {
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
                                    return new Promise(function (r, o) {
                                        var i = e.apply(t, n);
                                        function a(e) {
                                            p(i, r, o, a, s, 'next', e);
                                        }
                                        function s(e) {
                                            p(i, r, o, a, s, 'throw', e);
                                        }
                                        a(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    h = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const o = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        o = {},
                                        i = Object.keys(e);
                                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                                    return o;
                                })(t, m);
                            void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
                                          arguments:
                                              ((r = o),
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
                    w = () => h(c.CLOSE),
                    b = (e, t) => {
                        e.keyCode === v.n.ESCAPE && t();
                    };
                var y = n(7572);
                const S = o.instance,
                    P = {
                        DataTracker: i.Z,
                        ViewModel: y.Z,
                        ViewEventType: c,
                        NumberFormatType: l,
                        RealFormatType: u,
                        TimeFormatType: d,
                        DateFormatType: _,
                        makeGlobalBoundingBox: E,
                        sendMoveEvent: (e) => h(c.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: w,
                        sendClosePopOverEvent: () => h(c.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            h(c.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, r, o = R.invalid('resId'), i) => {
                            const a = f.O.view.getViewGlobalPosition(),
                                s = n.getBoundingClientRect(),
                                l = s.x,
                                u = s.y,
                                d = s.width,
                                _ = s.height,
                                v = {
                                    x: f.O.view.pxToRem(l) + a.x,
                                    y: f.O.view.pxToRem(u) + a.y,
                                    width: f.O.view.pxToRem(d),
                                    height: f.O.view.pxToRem(_),
                                };
                            h(c.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: o,
                                direction: t,
                                bbox: E(v),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => b(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            b(e, w);
                        },
                        handleViewEvent: h,
                        onBindingsReady: g,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(c.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(c.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(c.POP_OVER),
                        dumpViewModel: function e(t) {
                            const n = {};
                            if ('object' != typeof t) return t;
                            for (const r in t)
                                if (Object.prototype.hasOwnProperty.call(t, r)) {
                                    const o = Object.prototype.toString.call(t[r]);
                                    if (o.startsWith('[object CoherentArrayProxy]')) {
                                        const o = t[r];
                                        n[r] = [];
                                        for (let t = 0; t < o.length; t++) n[r].push({ value: e(o[t].value) });
                                    } else
                                        o.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[r] = e(t[r]))
                                            : (n[r] = t[r]);
                                }
                            return n;
                        },
                        ClickOutsideManager: S,
                        SystemLocale: a,
                        UserLocale: s,
                    };
                window.ViewEnvHelper = P;
            },
            9791: (e, t, n) => {
                var r = {};
                n.r(r),
                    n.d(r, {
                        Area: () => z,
                        Bar: () => x,
                        DefaultScroll: () => B,
                        Direction: () => h,
                        defaultSettings: () => w,
                        useHorizontalScrollApi: () => y,
                    });
                var o = {};
                n.r(o), n.d(o, { Area: () => ne, Bar: () => J, Default: () => te, useVerticalScrollApi: () => W });
                var i = n(6483),
                    a = n.n(i),
                    s = n(1856),
                    c = n(6179),
                    l = n.n(c),
                    u = n(7515),
                    d = n(3815);
                function _(e, t, n = []) {
                    const r = (0, c.useRef)(0),
                        o = (0, c.useCallback)(() => window.clearInterval(r.current), n || []);
                    (0, c.useEffect)(() => o, [o]);
                    const i = (null != n ? n : []).concat([t]);
                    return [
                        (0, c.useCallback)((n) => {
                            (r.current = window.setInterval(() => e(n, !0), t)), e(n, !1);
                        }, i),
                        o,
                    ];
                }
                var v = n(7727),
                    f = n(3138);
                function m(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return p(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return p(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var r = 0;
                        return function () {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function p(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r;
                }
                function E(e, t, n) {
                    const r = (0, c.useMemo)(
                        () =>
                            (function (e, t, n, r) {
                                let o,
                                    i = !1,
                                    a = 0;
                                function s() {
                                    o && clearTimeout(o);
                                }
                                function c(...c) {
                                    const l = this,
                                        u = Date.now() - a;
                                    function d() {
                                        (a = Date.now()), n.apply(l, c);
                                    }
                                    i ||
                                        (r && !o && d(),
                                        s(),
                                        void 0 === r && u > e
                                            ? d()
                                            : !0 !== t &&
                                              (o = setTimeout(
                                                  r
                                                      ? function () {
                                                            o = void 0;
                                                        }
                                                      : d,
                                                  void 0 === r ? e - u : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof t && ((r = n), (n = t), (t = void 0)),
                                    (c.cancel = function () {
                                        s(), (i = !0);
                                    }),
                                    c
                                );
                            })(n, e),
                        t,
                    );
                    return (0, c.useEffect)(() => r.cancel, [r]), r;
                }
                var g = n(7030);
                let h;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(h || (h = {}));
                const w = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    b = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: n,
                        getDirection: r,
                        getWrapperSize: o,
                        triggerMouseMoveOnUpdate: i = !1,
                    }) => {
                        const a = (e, n) => {
                            const r = t(e),
                                o = r[0],
                                i = r[1];
                            return (0, u.u)(o, i, n);
                        };
                        return (l = {}) => {
                            const u = l.settings,
                                _ = void 0 === u ? w : u,
                                v = (0, c.useRef)(null),
                                p = (0, c.useRef)(null),
                                h = (() => {
                                    const e = (0, c.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        n = (e, n) => {
                                            t(e).set(n, n);
                                        },
                                        r = (e, n) => {
                                            t(e).delete(n);
                                        },
                                        o = (e, ...n) => {
                                            for (var r, o = m(t(e).values()); !(r = o()).done; ) (0, r.value)(...n);
                                        };
                                    return (0, c.useMemo)(() => ({ on: n, off: r, trigger: o }), []);
                                })(),
                                b = E(
                                    () => {
                                        f.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                y = (0, g.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = v.current;
                                        t && (n(t, e), h.trigger('change', e), i && b());
                                    },
                                    onRest: (e) => h.trigger('rest', e),
                                    onStart: (e) => h.trigger('start', e),
                                    onPause: (e) => h.trigger('pause', e),
                                })),
                                S = y[0],
                                P = y[1],
                                M = (0, c.useCallback)(
                                    (e, t, n) => {
                                        var r;
                                        const o = S.scrollPosition.get(),
                                            i = (null != (r = S.scrollPosition.goal) ? r : 0) - o;
                                        return a(e, t * n + i + o);
                                    },
                                    [S.scrollPosition],
                                ),
                                O = (0, c.useCallback)(
                                    (e, { immediate: t = !1, reset: n = !0 } = {}) => {
                                        const r = v.current;
                                        r &&
                                            P.start({
                                                scrollPosition: a(r, e),
                                                immediate: t,
                                                reset: n,
                                                config: _.animationConfig,
                                                from: { scrollPosition: a(r, S.scrollPosition.get()) },
                                            });
                                    },
                                    [P, _.animationConfig, S.scrollPosition],
                                ),
                                R = (0, c.useCallback)(
                                    (e) => {
                                        const t = v.current,
                                            n = p.current;
                                        if (!t || !n) return;
                                        const r = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return o(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(n, _.step),
                                            i = M(t, e, r);
                                        O(i);
                                    },
                                    [O, M, _.step],
                                ),
                                T = (0, c.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && R(r(e)),
                                            v.current && h.trigger('mouseWheel', e, S.scrollPosition, t(v.current));
                                    },
                                    [S.scrollPosition, R, h],
                                ),
                                N = ((e, t = []) => {
                                    const n = (0, c.useRef)(),
                                        r = (0, c.useCallback)((...t) => {
                                            n.current && n.current(), (n.current = e(...t));
                                        }, t);
                                    return (
                                        (0, c.useEffect)(
                                            () => () => {
                                                n.current && n.current();
                                            },
                                            [r],
                                        ),
                                        r
                                    );
                                })(
                                    () =>
                                        (0, s.v)(() => {
                                            const e = v.current;
                                            e &&
                                                (O(a(e, S.scrollPosition.goal), { immediate: !0 }),
                                                h.trigger('resizeHandled'));
                                        }),
                                    [O, S.scrollPosition.goal],
                                ),
                                C = (0, d.z)(() => {
                                    const e = v.current;
                                    if (!e) return;
                                    const t = a(e, S.scrollPosition.goal);
                                    t !== S.scrollPosition.goal && O(t, { immediate: !0 }),
                                        h.trigger('recalculateContent');
                                });
                            (0, c.useEffect)(
                                () => (
                                    window.addEventListener('resize', N),
                                    () => {
                                        window.removeEventListener('resize', N);
                                    }
                                ),
                                [N],
                            );
                            return (0, c.useMemo)(
                                () => ({
                                    getWrapperSize: () => (p.current ? o(p.current) : void 0),
                                    getContainerSize: () => (v.current ? e(v.current) : void 0),
                                    getBounds: () =>
                                        v.current
                                            ? t(v.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: _.step.clampedArrowStepTimeout,
                                    clampPosition: a,
                                    handleMouseWheel: T,
                                    applyScroll: O,
                                    applyStepTo: R,
                                    contentRef: v,
                                    wrapperRef: p,
                                    scrollPosition: P,
                                    animationScroll: S,
                                    recalculateContent: C,
                                    events: { on: h.on, off: h.off },
                                }),
                                [S.scrollPosition, O, R, h.off, h.on, C, T, P, _.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    y = b({
                        getBounds: (e) => {
                            var t, n;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (t = null == (n = e.parentElement) ? void 0 : n.offsetWidth) ? t : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, t) => {
                            e.style.transform = `translateX(-${t.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? h.Next : h.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    S = 'HorizontalBar_base_49',
                    P = 'HorizontalBar_base__nonActive_82',
                    M = 'HorizontalBar_leftButton_5f',
                    O = 'HorizontalBar_rightButton_03',
                    R = 'HorizontalBar_track_0d',
                    T = 'HorizontalBar_thumb_fd',
                    N = 'HorizontalBar_rail_32',
                    C = 'disable',
                    L = { pending: !1, offset: 0 },
                    k = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    A = () => {},
                    D = (e, t) => Math.max(20, e.offsetWidth * t),
                    x = (0, c.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = k, onDrag: r = A }) => {
                        const o = (0, c.useRef)(null),
                            i = (0, c.useRef)(null),
                            f = (0, c.useRef)(null),
                            m = (0, c.useRef)(null),
                            p = (0, c.useRef)(null),
                            E = e.stepTimeout || 100,
                            g = (0, c.useState)(L),
                            w = g[0],
                            b = g[1],
                            y = (0, c.useCallback)(
                                (e) => {
                                    b(e),
                                        p.current && r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: p.current });
                                },
                                [r],
                            ),
                            x = () => {
                                const t = m.current,
                                    n = p.current,
                                    r = e.getWrapperSize(),
                                    o = e.getContainerSize();
                                if (!(r && t && n && o)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, r / o),
                                    c = (0, u.u)(0, 1, a / (o - r)),
                                    l = (t.offsetWidth - D(t, s)) * c;
                                (n.style.transform = `translateX(${0 | l}px)`),
                                    ((e) => {
                                        if (i.current && f.current && m.current && p.current) {
                                            if (0 === e)
                                                return i.current.classList.add(C), void f.current.classList.remove(C);
                                            if (
                                                ((t = m.current),
                                                (n = p.current),
                                                e - (t.offsetWidth - n.offsetWidth) >= -0.5)
                                            )
                                                return i.current.classList.remove(C), void f.current.classList.add(C);
                                            var t, n;
                                            i.current.classList.remove(C), f.current.classList.remove(C);
                                        }
                                    })(l);
                            },
                            F = (0, d.z)(() => {
                                (() => {
                                    const t = p.current,
                                        n = m.current,
                                        r = e.getWrapperSize(),
                                        i = e.getContainerSize();
                                    if (!(i && t && r && n)) return;
                                    const a = Math.min(1, r / i);
                                    (t.style.width = `${D(n, a)}px`),
                                        (t.style.display = 'flex'),
                                        o.current &&
                                            (1 === a ? o.current.classList.add(P) : o.current.classList.remove(P));
                                })(),
                                    x();
                            });
                        (0, c.useEffect)(() => (0, s.v)(F)),
                            (0, c.useEffect)(
                                () =>
                                    (0, s.v)(() => {
                                        const t = () => {
                                            x();
                                        };
                                        let n = A;
                                        const r = () => {
                                            n(), (n = (0, s.v)(F));
                                        };
                                        return (
                                            e.events.on('recalculateContent', F),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', r),
                                            () => {
                                                n(),
                                                    e.events.off('recalculateContent', F),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', r);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, c.useEffect)(() => {
                                if (!w.pending) return;
                                const t = (t) => {
                                        var n;
                                        const o = e.contentRef.current;
                                        if (!o) return;
                                        const i = m.current,
                                            a = p.current;
                                        if (!o || !i || !a) return;
                                        const s = t.screenX - w.offset - i.getBoundingClientRect().x,
                                            c = (s / i.offsetWidth) * (null != (n = e.getContainerSize()) ? n : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(o, c),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            r({ type: 'dragging', thumb: a, thumbOffset: s, contentOffset: c });
                                    },
                                    n = () => {
                                        window.removeEventListener('mousemove', t), y(L);
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', n),
                                    () => {
                                        window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', n);
                                    }
                                );
                            }, [e, w.offset, w.pending, r, y]);
                        const B = _((t) => e.applyStepTo(t), E, [e]),
                            z = B[0],
                            W = B[1];
                        (0, c.useEffect)(
                            () => (
                                document.addEventListener('mouseup', W, !0),
                                () => document.removeEventListener('mouseup', W, !0)
                            ),
                            [W],
                        );
                        const U = (e) => {
                            e.target.classList.contains(C) || (0, v.G)('highlight');
                        };
                        return l().createElement(
                            'div',
                            { className: a()(S, t.base), ref: o, onWheel: e.handleMouseWheel },
                            l().createElement('div', {
                                className: a()(M, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(C) || 0 !== e.button || ((0, v.G)('play'), z(h.Next));
                                },
                                onMouseUp: W,
                                ref: i,
                                onMouseEnter: U,
                            }),
                            l().createElement(
                                'div',
                                {
                                    className: a()(R, t.track),
                                    onMouseDown: (t) => {
                                        const r = p.current;
                                        if (r && 0 === t.button)
                                            if (((0, v.G)('play'), t.target === r))
                                                y({ pending: !0, offset: t.screenX - r.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const r = p.current,
                                                        o = e.contentRef.current;
                                                    if (!r || !o) return;
                                                    const i = n(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + i * t);
                                                })(t.screenX > r.getBoundingClientRect().x ? h.Prev : h.Next);
                                            }
                                    },
                                    ref: m,
                                    onMouseEnter: U,
                                },
                                l().createElement('div', { ref: p, className: a()(T, t.thumb) }),
                                l().createElement('div', { className: a()(N, t.rail) }),
                            ),
                            l().createElement('div', {
                                className: a()(O, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(C) || 0 !== e.button || ((0, v.G)('play'), z(h.Prev));
                                },
                                onMouseUp: W,
                                ref: f,
                                onMouseEnter: U,
                            }),
                        );
                    }),
                    F = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    B = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: r,
                        areaClassName: o,
                        classNames: i,
                        scrollClassName: s,
                        getStepByRailClick: u,
                        onDrag: d,
                    }) => {
                        const _ = (0, c.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: a()(F.base, e.base) });
                            }, [r]),
                            v = (0, c.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return l().createElement(
                            'div',
                            { className: a()(F.defaultScroll, n), onWheel: t.handleMouseWheel },
                            l().createElement(
                                'div',
                                { className: a()(F.defaultScrollArea, o) },
                                l().createElement(z, { className: s, api: v, classNames: i }, e),
                            ),
                            l().createElement(x, { getStepByRailClick: u, api: t, onDrag: d, classNames: _ }),
                        );
                    },
                    z = ({ api: e, className: t, classNames: n, children: r }) => (
                        (0, c.useEffect)(() => (0, s.v)(e.recalculateContent)),
                        l().createElement(
                            'div',
                            { className: a()(F.base, t) },
                            l().createElement(
                                'div',
                                {
                                    className: a()(F.wrapper, null == n ? void 0 : n.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                l().createElement(
                                    'div',
                                    { className: a()(F.content, null == n ? void 0 : n.content), ref: e.contentRef },
                                    r,
                                ),
                            ),
                        )
                    );
                (z.Bar = x),
                    (z.Default = B),
                    (z.SeniorityAwards = ({ api: e, className: t, classNames: n, children: r }) => (
                        (0, c.useEffect)(() => (0, s.v)(e.recalculateContent)),
                        l().createElement(
                            'div',
                            { className: a()(F.base, t) },
                            l().createElement(
                                'div',
                                { className: a()(F.wrapper, null == n ? void 0 : n.wrapper), ref: e.wrapperRef },
                                l().createElement(
                                    'div',
                                    { className: a()(F.content, null == n ? void 0 : n.content), ref: e.contentRef },
                                    r,
                                ),
                            ),
                        )
                    ));
                const W = b({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? h.Next : h.Prev),
                    }),
                    U = 'VerticalBar_base_f3',
                    H = 'VerticalBar_base__nonActive_42',
                    V = 'VerticalBar_topButton_d7',
                    I = 'VerticalBar_bottomButton_06',
                    G = 'VerticalBar_track_df',
                    q = 'VerticalBar_thumb_32',
                    j = 'VerticalBar_rail_43',
                    K = 'disable',
                    Y = () => {},
                    X = { pending: !1, offset: 0 },
                    Z = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    $ = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    Q = (e, t) => Math.max(20, e.offsetHeight * t),
                    J = (0, c.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = Z, onDrag: r = Y }) => {
                        const o = (0, c.useRef)(null),
                            i = (0, c.useRef)(null),
                            f = (0, c.useRef)(null),
                            m = (0, c.useRef)(null),
                            p = (0, c.useRef)(null),
                            E = e.stepTimeout || 100,
                            g = (0, c.useState)(X),
                            w = g[0],
                            b = g[1],
                            y = (0, c.useCallback)(
                                (e) => {
                                    b(e),
                                        p.current && r({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: p.current });
                                },
                                [r],
                            ),
                            S = (0, d.z)(() => {
                                const t = p.current,
                                    n = m.current,
                                    r = e.getWrapperSize(),
                                    i = e.getContainerSize();
                                if (!(r && i && t && n)) return;
                                const a = Math.min(1, r / i);
                                return (
                                    (t.style.height = `${Q(n, a)}px`),
                                    t.classList.add(q),
                                    o.current && (1 === a ? o.current.classList.add(H) : o.current.classList.remove(H)),
                                    a
                                );
                            }),
                            P = (0, d.z)(() => {
                                const t = m.current,
                                    n = p.current,
                                    r = e.getWrapperSize(),
                                    o = e.getContainerSize();
                                if (!(r && t && n && o)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, r / o),
                                    c = (0, u.u)(0, 1, a / (o - r)),
                                    l = (t.offsetHeight - Q(t, s)) * c;
                                (n.style.transform = `translateY(${0 | l}px)`),
                                    ((e) => {
                                        if (i.current && f.current && m.current && p.current) {
                                            if (0 === e)
                                                return i.current.classList.add(K), void f.current.classList.remove(K);
                                            if (
                                                ((t = m.current),
                                                (n = p.current),
                                                e - (t.offsetHeight - n.offsetHeight) >= -0.5)
                                            )
                                                return i.current.classList.remove(K), void f.current.classList.add(K);
                                            var t, n;
                                            i.current.classList.remove(K), f.current.classList.remove(K);
                                        }
                                    })(l);
                            }),
                            M = (0, d.z)(() => {
                                $(e, () => {
                                    S(), P();
                                });
                            });
                        (0, c.useEffect)(() => (0, s.v)(M)),
                            (0, c.useEffect)(() => {
                                const t = () => {
                                    $(e, () => {
                                        P();
                                    });
                                };
                                let n = Y;
                                const r = () => {
                                    n(), (n = (0, s.v)(M));
                                };
                                return (
                                    e.events.on('recalculateContent', M),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', r),
                                    () => {
                                        n(),
                                            e.events.off('recalculateContent', M),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', r);
                                    }
                                );
                            }, [e]),
                            (0, c.useEffect)(() => {
                                if (!w.pending) return;
                                const t = (t) => {
                                        $(e, (n) => {
                                            const o = m.current,
                                                i = p.current,
                                                a = e.getContainerSize();
                                            if (!o || !i || !a) return;
                                            const s = t.screenY - w.offset - o.getBoundingClientRect().y,
                                                c = (s / o.offsetHeight) * a;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(n, c),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: n.scrollTop },
                                            }),
                                                r({ type: 'dragging', thumb: i, thumbOffset: s, contentOffset: c });
                                        });
                                    },
                                    n = () => {
                                        window.removeEventListener('mousemove', t), y(X);
                                    };
                                return (
                                    window.addEventListener('mousemove', t),
                                    window.addEventListener('mouseup', n),
                                    () => {
                                        window.removeEventListener('mousemove', t),
                                            window.removeEventListener('mouseup', n);
                                    }
                                );
                            }, [e, w.offset, w.pending, r, y]);
                        const O = _((t) => e.applyStepTo(t), E, [e]),
                            R = O[0],
                            T = O[1];
                        (0, c.useEffect)(
                            () => (
                                document.addEventListener('mouseup', T, !0),
                                () => document.removeEventListener('mouseup', T, !0)
                            ),
                            [T],
                        );
                        const N = (e) => {
                            e.target.classList.contains(K) || (0, v.G)('highlight');
                        };
                        return l().createElement(
                            'div',
                            { className: a()(U, t.base), ref: o, onWheel: e.handleMouseWheel },
                            l().createElement('div', {
                                className: a()(V, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(K) || 0 !== e.button || ((0, v.G)('play'), R(h.Next));
                                },
                                ref: i,
                                onMouseEnter: N,
                            }),
                            l().createElement(
                                'div',
                                {
                                    className: a()(G, t.track),
                                    onMouseDown: (t) => {
                                        const r = p.current;
                                        if (r && 0 === t.button)
                                            if (((0, v.G)('play'), t.target === r))
                                                y({ pending: !0, offset: t.screenY - r.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    p.current &&
                                                        $(e, (r) => {
                                                            if (!r) return;
                                                            const o = n(e),
                                                                i = e.clampPosition(r, r.scrollTop + o * t);
                                                            e.applyScroll(i);
                                                        });
                                                })(t.screenY > r.getBoundingClientRect().y ? h.Prev : h.Next);
                                            }
                                    },
                                    ref: m,
                                    onMouseEnter: N,
                                },
                                l().createElement('div', { ref: p, className: t.thumb }),
                                l().createElement('div', { className: a()(j, t.rail) }),
                            ),
                            l().createElement('div', {
                                className: a()(I, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(K) || 0 !== e.button || ((0, v.G)('play'), R(h.Prev));
                                },
                                onMouseUp: T,
                                ref: f,
                                onMouseEnter: N,
                            }),
                        );
                    }),
                    ee = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    te = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: r,
                        areaClassName: o,
                        scrollClassName: i,
                        scrollClassNames: s,
                        getStepByRailClick: u,
                        onDrag: d,
                    }) => {
                        const _ = (0, c.useMemo)(() => {
                                const e = r || {};
                                return Object.assign({}, e, { base: a()(ee.base, e.base) });
                            }, [r]),
                            v = (0, c.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return l().createElement(
                            'div',
                            { className: a()(ee.defaultScroll, n), onWheel: t.handleMouseWheel },
                            l().createElement(
                                'div',
                                { className: a()(ee.area, o) },
                                l().createElement(ne, { className: i, classNames: s, api: v }, e),
                            ),
                            l().createElement(J, { getStepByRailClick: u, api: t, onDrag: d, classNames: _ }),
                        );
                    },
                    ne = ({ className: e, classNames: t, children: n, api: r }) => (
                        (0, c.useEffect)(() => (0, s.v)(r.recalculateContent)),
                        l().createElement(
                            'div',
                            { className: a()(ee.base, e), ref: r.wrapperRef, onWheel: r.handleMouseWheel },
                            l().createElement(
                                'div',
                                { className: a()(ee.content, null == t ? void 0 : t.content), ref: r.contentRef },
                                n,
                            ),
                        )
                    );
                ne.Default = te;
                'undefined' != typeof Element &&
                    (Element.prototype.matches ||
                        Element.prototype.webkitMatchesSelector ||
                        Element.prototype.mozMatchesSelector ||
                        Element.prototype.msMatchesSelector);
                'undefined' != typeof document && document.documentElement.style,
                    'undefined' != typeof window &&
                        ('ontouchstart' in window || (window.DocumentTouch && (document, window.DocumentTouch))),
                    'undefined' != typeof navigator && navigator.msMaxTouchPoints,
                    'undefined' != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent);
                n(4179);
                let re;
                !(function (e) {
                    (e[(e.Idle = 0)] = 'Idle'),
                        (e[(e.Start = 1)] = 'Start'),
                        (e[(e.Between = 2)] = 'Between'),
                        (e[(e.End = 3)] = 'End');
                })(re || (re = {}));
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
                var o = 1 / 0;
                for (c = 0; c < deferred.length; c++) {
                    for (var [t, n, r] = deferred[c], i = !0, a = 0; a < t.length; a++)
                        (!1 & r || o >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[a]))
                            ? t.splice(a--, 1)
                            : ((i = !1), r < o && (o = r));
                    if (i) {
                        deferred.splice(c--, 1);
                        var s = n();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            r = r || 0;
            for (var c = deferred.length; c > 0 && deferred[c - 1][2] > r; c--) deferred[c] = deferred[c - 1];
            deferred[c] = [t, n, r];
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
        (__webpack_require__.j = 670),
        (() => {
            var e = { 670: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var r,
                        o,
                        [i, a, s] = n,
                        c = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (r in a) __webpack_require__.o(a, r) && (__webpack_require__.m[r] = a[r]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (t && t(n); c < i.length; c++)
                        (o = i[c]), __webpack_require__.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
                    return __webpack_require__.O(l);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [519], () => __webpack_require__(9791));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
