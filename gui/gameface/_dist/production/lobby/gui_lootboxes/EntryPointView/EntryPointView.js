(() => {
    'use strict';
    var __webpack_modules__ = {
            527: (e, t, r) => {
                r.r(t), r.d(t, { mouse: () => l, onResize: () => a });
                var n = r(2472),
                    i = r(1176);
                const a = (0, n.E)('clientResized'),
                    o = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') },
                    l = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && (0, i.R)(!1);
                        }
                        function r() {
                            e.enabled && (0, i.R)(!0);
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
                                : (0, i.R)(!1);
                        }
                        const a = ['down', 'up', 'move'].reduce(
                            (t, r) => (
                                (t[r] = (function (t) {
                                    return (r) => {
                                        e.listeners += 1;
                                        let i = !0;
                                        const a = `mouse${t}`,
                                            l = o[t]((e) => r([e, 'outside']));
                                        function s(e) {
                                            r([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(a, s),
                                            n(),
                                            () => {
                                                i &&
                                                    (l(),
                                                    window.removeEventListener(a, s),
                                                    (e.listeners -= 1),
                                                    n(),
                                                    (i = !1));
                                            }
                                        );
                                    };
                                })(r)),
                                t
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
                                e.enabled && (0, i.R)(!0);
                            },
                            disableOutside() {
                                e.enabled && (0, i.R)(!1);
                            },
                        });
                    })();
            },
            5959: (e, t, r) => {
                r.r(t),
                    r.d(t, {
                        events: () => n,
                        getMouseGlobalPosition: () => a,
                        getSize: () => i,
                        graphicsQuality: () => o,
                    });
                var n = r(527);
                function i(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const o = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, r) => {
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                r.d(t, { R: () => n });
            },
            2472: (e, t, r) => {
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
                r.d(t, { O: () => i });
                var n = r(5959);
                const i = { view: r(7641), client: n };
            },
            3722: (e, t, r) => {
                function n(e, t, r = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, r);
                }
                function i(e, t, r) {
                    return `url(${n(e, t, r)})`;
                }
                r.r(t), r.d(t, { getBgUrl: () => i, getTextureUrl: () => n });
            },
            6112: (e, t, r) => {
                r.d(t, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, r) => {
                r.d(t, { U: () => i });
                var n = r(2472);
                const i = {
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
                r.r(t),
                    r.d(t, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => l,
                        children: () => n,
                        displayStatus: () => i.W,
                        displayStatusIs: () => O,
                        events: () => a.U,
                        extraSize: () => L,
                        forceTriggerMouseMove: () => S,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => d,
                        getDisplayStatus: () => y,
                        getScale: () => w,
                        getSize: () => m,
                        getViewGlobalPosition: () => h,
                        isEventHandled: () => x,
                        isFocused: () => b,
                        pxToRem: () => v,
                        remToPx: () => E,
                        resize: () => _,
                        sendEvent: () => o.qP,
                        setAnimateWindow: () => p,
                        setEventHandled: () => f,
                        setInputPaddingsRem: () => s,
                        setSidePaddingsRem: () => u,
                        whenTutorialReady: () => M,
                    });
                var n = r(3722),
                    i = r(6112),
                    a = r(6538),
                    o = r(8566);
                function l(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function s(e) {
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
                function h(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: E(t.x), y: E(t.y) };
                }
                function g() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function w() {
                    return viewEnv.getScale();
                }
                function v(e) {
                    return viewEnv.pxToRem(e);
                }
                function E(e) {
                    return viewEnv.remToPx(e);
                }
                function p(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function b() {
                    return viewEnv.isFocused();
                }
                function f() {
                    return viewEnv.setEventHandled();
                }
                function x() {
                    return viewEnv.isEventHandled();
                }
                function S() {
                    viewEnv.forceTriggerMouseMove();
                }
                function y() {
                    return viewEnv.getShowingStatus();
                }
                const O = Object.keys(i.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === i.W[t]), e),
                        {},
                    ),
                    L = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    M = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : a.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, r) => {
                r.d(t, { qP: () => a });
                const n = ['args'],
                    i = (e, t) => {
                        const r = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var r,
                                        n,
                                        i = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                                    return i;
                                })(t, n);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: r, type: e }, o, {
                                          arguments:
                                              ((i = a),
                                              Object.entries(i).map(([e, t]) => {
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
                        var i;
                    },
                    a = {
                        close(e) {
                            i('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            i(64);
                        },
                        move(e) {
                            i(16, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, t, r) => {
                let n, i;
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
                    })(i || (i = {}));
            },
            1358: (e, t, r) => {
                r.d(t, { Z: () => a });
                var n = r(3138);
                class i {
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
                        return window.__dataTracker || (window.__dataTracker = new i()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, t, r = 0, i = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = n.O.view.addModelObserver(e, r, i);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = t),
                                  r > 0 && (this._views[r] ? this._views[r].push(a) : (this._views[r] = [a])))
                                : console.error("Can't add callback for model:", e),
                            a
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
                i.__instance = void 0;
                const a = i;
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
            4179: (e, t, r) => {
                r.d(t, { B0: () => s, ry: () => p });
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
                const i = n;
                var a = r(1358);
                const o = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    l = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, r) => userLocale.getTimeFormat(e, t, void 0 === r || r),
                        getTimeString: (e, t, r) => userLocale.getTimeString(e, t, void 0 === r || r),
                    };
                let s;
                var d;
                ((d = s || (s = {}))[(d.UNDEFINED = 0)] = 'UNDEFINED'),
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
                var h = r(5521),
                    g = r(3138);
                const w = ['args'];
                function v(e, t, r, n, i, a, o) {
                    try {
                        var l = e[a](o),
                            s = l.value;
                    } catch (e) {
                        return void r(e);
                    }
                    l.done ? t(s) : Promise.resolve(s).then(n, i);
                }
                const E = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    p = (function () {
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
                                    return new Promise(function (n, i) {
                                        var a = e.apply(t, r);
                                        function o(e) {
                                            v(a, n, i, o, l, 'next', e);
                                        }
                                        function l(e) {
                                            v(a, n, i, o, l, 'throw', e);
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
                            const i = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var r,
                                        n,
                                        i = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                                    return i;
                                })(t, w);
                            void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: r, type: e }, a, {
                                          arguments:
                                              ((n = i),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: r, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: r, type: e });
                        var n;
                    },
                    f = () => b(s.CLOSE),
                    x = (e, t) => {
                        e.keyCode === h.n.ESCAPE && t();
                    };
                var S = r(7572);
                const y = i.instance,
                    O = {
                        DataTracker: a.Z,
                        ViewModel: S.Z,
                        ViewEventType: s,
                        NumberFormatType: c,
                        RealFormatType: u,
                        TimeFormatType: m,
                        DateFormatType: _,
                        makeGlobalBoundingBox: E,
                        sendMoveEvent: (e) => b(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => b(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, r = 0) => {
                            b(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: r, args: t });
                        },
                        sendShowPopOverEvent: (e, t, r, n, i = R.invalid('resId'), a) => {
                            const o = g.O.view.getViewGlobalPosition(),
                                l = r.getBoundingClientRect(),
                                d = l.x,
                                c = l.y,
                                u = l.width,
                                m = l.height,
                                _ = {
                                    x: g.O.view.pxToRem(d) + o.x,
                                    y: g.O.view.pxToRem(c) + o.y,
                                    width: g.O.view.pxToRem(u),
                                    height: g.O.view.pxToRem(m),
                                };
                            b(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: i,
                                direction: t,
                                bbox: E(_),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => x(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            x(e, f);
                        },
                        handleViewEvent: b,
                        onBindingsReady: p,
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
                        dumpViewModel: function e(t) {
                            const r = {};
                            if ('object' != typeof t) return t;
                            for (const n in t)
                                if (Object.prototype.hasOwnProperty.call(t, n)) {
                                    const i = Object.prototype.toString.call(t[n]);
                                    if (i.startsWith('[object CoherentArrayProxy]')) {
                                        const i = t[n];
                                        r[n] = [];
                                        for (let t = 0; t < i.length; t++) r[n].push({ value: e(i[t].value) });
                                    } else
                                        i.startsWith('[object class BW::WULF::ViewModel')
                                            ? (r[n] = e(t[n]))
                                            : (r[n] = t[n]);
                                }
                            return r;
                        },
                        ClickOutsideManager: y,
                        SystemLocale: o,
                        UserLocale: l,
                    };
                window.ViewEnvHelper = O;
            },
            5593: (e, t, r) => {
                var n = r(6179),
                    i = r.n(n);
                const a = (e, t, r) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && r.extraLarge) ||
                          (t.largeHeight && r.large) ||
                          (t.mediumHeight && r.medium) ||
                          (t.smallHeight && r.small) ||
                          (t.extraSmallHeight && r.extraSmall)
                            ? e
                            : null
                        : e;
                var o = r(3138);
                const l = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var s;
                function d(e, t, r) {
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
                        i = (function (e, t) {
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
                        a = Math.min(n, i);
                    return {
                        extraLarge: a === r.extraLarge.weight,
                        large: a === r.large.weight,
                        medium: a === r.medium.weight,
                        small: a === r.small.weight,
                        extraSmall: a === r.extraSmall.weight,
                        extraLargeWidth: n === r.extraLarge.weight,
                        largeWidth: n === r.large.weight,
                        mediumWidth: n === r.medium.weight,
                        smallWidth: n === r.small.weight,
                        extraSmallWidth: n === r.extraSmall.weight,
                        extraLargeHeight: i === r.extraLarge.weight,
                        largeHeight: i === r.large.weight,
                        mediumHeight: i === r.medium.weight,
                        smallHeight: i === r.small.weight,
                        extraSmallHeight: i === r.extraSmall.weight,
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
                    u = c.width,
                    m = c.height,
                    _ = Object.assign({ width: u, height: m }, d(u, m, l)),
                    h = (0, n.createContext)(_),
                    g = ['children'],
                    w = (e) => {
                        let t = e.children,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    n,
                                    i = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                                return i;
                            })(e, g);
                        const i = (0, n.useContext)(h),
                            o = i.extraLarge,
                            l = i.large,
                            s = i.medium,
                            d = i.small,
                            c = i.extraSmall,
                            u = i.extraLargeWidth,
                            m = i.largeWidth,
                            _ = i.mediumWidth,
                            w = i.smallWidth,
                            v = i.extraSmallWidth,
                            E = i.extraLargeHeight,
                            p = i.largeHeight,
                            b = i.mediumHeight,
                            f = i.smallHeight,
                            x = i.extraSmallHeight,
                            S = { extraLarge: E, large: p, medium: b, small: f, extraSmall: x };
                        if (r.extraLarge || r.large || r.medium || r.small || r.extraSmall) {
                            if (r.extraLarge && o) return t;
                            if (r.large && l) return t;
                            if (r.medium && s) return t;
                            if (r.small && d) return t;
                            if (r.extraSmall && c) return t;
                        } else {
                            if (r.extraLargeWidth && u) return a(t, r, S);
                            if (r.largeWidth && m) return a(t, r, S);
                            if (r.mediumWidth && _) return a(t, r, S);
                            if (r.smallWidth && w) return a(t, r, S);
                            if (r.extraSmallWidth && v) return a(t, r, S);
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
                                if (r.largeHeight && p) return t;
                                if (r.mediumHeight && b) return t;
                                if (r.smallHeight && f) return t;
                                if (r.extraSmallHeight && x) return t;
                            }
                        }
                        return null;
                    };
                (w.defaultProps = {
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
                    (0, n.memo)(w);
                const v = (0, n.memo)(({ children: e }) => {
                    const t = (0, n.useContext)(h),
                        r = (0, n.useState)(t),
                        a = r[0],
                        s = r[1],
                        c = (0, n.useCallback)((e, t) => {
                            const r = o.O.view.pxToRem(e),
                                n = o.O.view.pxToRem(t);
                            s(Object.assign({ width: r, height: n }, d(r, n, l)));
                        }, []);
                    ((e) => {
                        const t = (0, n.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    })(() => {
                        engine.on('clientResized', c);
                    }),
                        (0, n.useEffect)(() => () => engine.off('clientResized', c), [c]);
                    const u = (0, n.useMemo)(() => Object.assign({}, a), [a]);
                    return i().createElement(h.Provider, { value: u }, e);
                });
                var E = r(493),
                    p = r.n(E),
                    b = r(6483),
                    f = r.n(b);
                const x = ({ count: e, customFontSize: t, maximum: r }) => {
                    const n = 0.6 * (null != t ? t : 16) + 'rem';
                    return i().createElement(
                        'div',
                        { className: 'FormatCount_base_01', style: { fontSize: `${null != t ? t : 16}rem` } },
                        r && e >= r.maxCount
                            ? i().createElement('div', null, null == r ? void 0 : r.maxCountText)
                            : i().createElement(
                                  i().Fragment,
                                  null,
                                  i().createElement('div', { style: { width: n } }, '×'),
                                  e,
                              ),
                    );
                };
                var S = r(4179);
                const y = [
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
                function O(e) {
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
                const L = (e, t, r = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: S.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                r,
                            ),
                        );
                    },
                    M = (e) => {
                        let t = e.children,
                            r = e.contentId,
                            i = e.args,
                            a = e.onMouseEnter,
                            o = e.onMouseLeave,
                            l = e.onMouseDown,
                            s = e.onClick,
                            d = e.ignoreShowDelay,
                            c = void 0 !== d && d,
                            u = e.ignoreMouseClick,
                            m = void 0 !== u && u,
                            _ = e.decoratorId,
                            h = void 0 === _ ? 0 : _,
                            g = e.isEnabled,
                            w = void 0 === g || g,
                            v = e.targetId,
                            E = void 0 === v ? 0 : v,
                            p = e.onShow,
                            b = e.onHide,
                            f = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    n,
                                    i = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                                return i;
                            })(e, y);
                        const x = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            S = (0, n.useMemo)(
                                () =>
                                    E ||
                                    ((e = 1) => {
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
                                    })().resId,
                                [E],
                            ),
                            M = (0, n.useCallback)(() => {
                                (x.current.isVisible && x.current.timeoutId) ||
                                    (L(r, h, { isMouseEvent: !0, on: !0, arguments: O(i) }, S),
                                    p && p(),
                                    (x.current.isVisible = !0));
                            }, [r, h, i, S, p]),
                            T = (0, n.useCallback)(() => {
                                if (x.current.isVisible || x.current.timeoutId) {
                                    const e = x.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (x.current.timeoutId = 0)),
                                        L(r, h, { on: !1 }, S),
                                        x.current.isVisible && b && b(),
                                        (x.current.isVisible = !1);
                                }
                            }, [r, h, S, b]),
                            P = (0, n.useCallback)((e) => {
                                x.current.isVisible &&
                                    ((x.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (x.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(x.current.prevTarget) && T();
                                    }, 200)));
                            }, []);
                        return (
                            (0, n.useEffect)(() => {
                                const e = x.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', P, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', P, { capture: !0 }),
                                            e && window.clearTimeout(e);
                                    }
                                );
                            }, []),
                            (0, n.useEffect)(() => {
                                !1 === w && T();
                            }, [w, T]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', T),
                                    () => {
                                        window.removeEventListener('mouseleave', T), T();
                                    }
                                ),
                                [T],
                            ),
                            w
                                ? (0, n.cloneElement)(
                                      t,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((k = t.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((x.current.timeoutId = window.setTimeout(M, c ? 100 : 400)),
                                                          a && a(e),
                                                          k && k(e));
                                                  }),
                                              onMouseLeave: ((e) => (t) => {
                                                  T(), null == o || o(t), null == e || e(t);
                                              })(t.props.onMouseLeave),
                                              onClick: ((e) => (t) => {
                                                  !1 === m && T(), null == s || s(t), null == e || e(t);
                                              })(t.props.onClick),
                                              onMouseDown: ((e) => (t) => {
                                                  !1 === m && T(), null == l || l(t), null == e || e(t);
                                              })(t.props.onMouseDown),
                                          },
                                          f,
                                      ),
                                  )
                                : t
                        );
                        var k;
                    },
                    T = ['children', 'body', 'header', 'note', 'alert', 'args'];
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
                const k = R.views.common.tooltip_window.simple_tooltip_content,
                    A = (e) => {
                        let t = e.children,
                            r = e.body,
                            a = e.header,
                            o = e.note,
                            l = e.alert,
                            s = e.args,
                            d = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    n,
                                    i = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                                return i;
                            })(e, T);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, s, { body: r, header: a, note: o, alert: l });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [l, r, a, o, s]);
                        return i().createElement(
                            M,
                            P(
                                {
                                    contentId:
                                        ((u = null == s ? void 0 : s.hasHtmlContent),
                                        u ? k.SimpleTooltipHtmlContent('resId') : k.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                d,
                            ),
                            t,
                        );
                        var u;
                    };
                let C, D, N;
                !(function (e) {
                    (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = l.small.width)] = 'Small'),
                        (e[(e.Medium = l.medium.width)] = 'Medium'),
                        (e[(e.Large = l.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                })(C || (C = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.width)] = 'Small'),
                            (e[(e.Medium = l.medium.width)] = 'Medium'),
                            (e[(e.Large = l.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.width)] = 'ExtraLarge');
                    })(D || (D = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = l.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = l.small.height)] = 'Small'),
                            (e[(e.Medium = l.medium.height)] = 'Medium'),
                            (e[(e.Large = l.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = l.extraLarge.height)] = 'ExtraLarge');
                    })(N || (N = {}));
                function F(e) {
                    engine.call('PlaySound', e);
                }
                const H = {
                    playHighlight() {
                        F('highlight');
                    },
                    playClick() {
                        F('play');
                    },
                    playYes() {
                        F('yes1');
                    },
                };
                var W = r(3403),
                    I = r(7030);
                const U = (e) => (e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1),
                    V = {
                        from: { x: 0, opacity: 0 },
                        to: { x: 0, opacity: 1 },
                        delay: 0,
                        config: { duration: 800, easing: U },
                    },
                    j = {
                        from: { opacity: 0 },
                        enter: { opacity: 1 },
                        leave: { opacity: 0 },
                        delay: 0,
                        config: { duration: 300, easing: U },
                    },
                    B = 'disabled',
                    z = 'empty';
                function q() {
                    return !1;
                }
                console.log;
                var K = r(9174);
                function G(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                    return n;
                }
                const Y = (e) => (0 === e ? window : window.subViews.get(e)),
                    X = ((e, t) => {
                        const r = (0, n.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: a, children: l, mocks: s }) {
                                const d = (0, n.useRef)([]),
                                    c = (e, r, n) => {
                                        var i;
                                        const a = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: r = Y,
                                                context: n = 'model',
                                            } = {}) {
                                                const i = new Map();
                                                function a(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? i.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, r) => {
                                                        r.forEach((t) => {
                                                            const r = i.get(t);
                                                            void 0 !== r && r(e);
                                                        });
                                                    });
                                                });
                                                const l = (e) => {
                                                    const i = r(t),
                                                        a = n.split('.').reduce((e, t) => e[t], i);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? a
                                                        : e.split('.').reduce((e, t) => {
                                                              const r = e[t];
                                                              return 'function' == typeof r ? r.bind(e) : r;
                                                          }, a);
                                                };
                                                return {
                                                    subscribe: (r, a) => {
                                                        const s = 'string' == typeof a ? `${n}.${a}` : n,
                                                            d = o.O.view.addModelObserver(s, t, !0);
                                                        return i.set(d, r), e && r(l(a)), d;
                                                    },
                                                    readByPath: l,
                                                    createCallback: (e, t) => {
                                                        const r = l(t);
                                                        return (...t) => {
                                                            r(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = l(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (
                                                            var e,
                                                                r = (function (e, t) {
                                                                    var r =
                                                                        ('undefined' != typeof Symbol &&
                                                                            e[Symbol.iterator]) ||
                                                                        e['@@iterator'];
                                                                    if (r) return (r = r.call(e)).next.bind(r);
                                                                    if (
                                                                        Array.isArray(e) ||
                                                                        (r = (function (e, t) {
                                                                            if (e) {
                                                                                if ('string' == typeof e)
                                                                                    return G(e, t);
                                                                                var r = Object.prototype.toString
                                                                                    .call(e)
                                                                                    .slice(8, -1);
                                                                                return (
                                                                                    'Object' === r &&
                                                                                        e.constructor &&
                                                                                        (r = e.constructor.name),
                                                                                    'Map' === r || 'Set' === r
                                                                                        ? Array.from(e)
                                                                                        : 'Arguments' === r ||
                                                                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                                r,
                                                                                            )
                                                                                          ? G(e, t)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (t && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        r && (e = r);
                                                                        var n = 0;
                                                                        return function () {
                                                                            return n >= e.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: e[n++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(i.keys());
                                                            !(e = r()).done;

                                                        )
                                                            a(e.value, t);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(r),
                                            l =
                                                'real' === e
                                                    ? a
                                                    : Object.assign({}, a, {
                                                          readByPath:
                                                              null != (i = null == n ? void 0 : n.getter)
                                                                  ? i
                                                                  : () => {},
                                                      }),
                                            s = (t) =>
                                                'mocks' === e ? (null == n ? void 0 : n.getter(t)) : l.readByPath(t),
                                            c = (e) => d.current.push(e),
                                            u = (({ observableModel: e }) => {
                                                const t = { root: e.object() };
                                                return Object.assign({}, t);
                                            })({
                                                mode: e,
                                                readByPath: s,
                                                externalModel: l,
                                                observableModel: {
                                                    array: (t, r) => {
                                                        const n = null != r ? r : s(t),
                                                            i = K.LO.box(n, { equals: q });
                                                        return (
                                                            'real' === e &&
                                                                l.subscribe(
                                                                    (0, K.aD)((e) => i.set(e)),
                                                                    t,
                                                                ),
                                                            i
                                                        );
                                                    },
                                                    object: (t, r) => {
                                                        const n = null != r ? r : s(t),
                                                            i = K.LO.box(n, { equals: q });
                                                        return (
                                                            'real' === e &&
                                                                l.subscribe(
                                                                    (0, K.aD)((e) => i.set(e)),
                                                                    t,
                                                                ),
                                                            i
                                                        );
                                                    },
                                                    primitives: (t, r) => {
                                                        const n = s(r);
                                                        if (Array.isArray(t)) {
                                                            const i = t.reduce(
                                                                (e, t) => ((e[t] = K.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    l.subscribe(
                                                                        (0, K.aD)((e) => {
                                                                            t.forEach((t) => {
                                                                                i[t].set(e[t]);
                                                                            });
                                                                        }),
                                                                        r,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                        {
                                                            const i = t,
                                                                a = Object.entries(i),
                                                                o = a.reduce(
                                                                    (e, [t, r]) => ((e[r] = K.LO.box(n[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    l.subscribe(
                                                                        (0, K.aD)((e) => {
                                                                            a.forEach(([t, r]) => {
                                                                                o[r].set(e[t]);
                                                                            });
                                                                        }),
                                                                        r,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: c,
                                            }),
                                            m = { mode: e, model: u, externalModel: l, cleanup: c };
                                        return {
                                            model: u,
                                            controls: 'mocks' === e && n ? n.controls(m) : t(m),
                                            externalModel: l,
                                            mode: e,
                                        };
                                    },
                                    u = (0, n.useRef)(!1),
                                    m = (0, n.useState)(e),
                                    _ = m[0],
                                    h = m[1],
                                    g = (0, n.useState)(() => c(e, a, s)),
                                    w = g[0],
                                    v = g[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        u.current ? v(c(_, a, s)) : (u.current = !0);
                                    }, [s, _, a]),
                                    (0, n.useEffect)(() => {
                                        h(e);
                                    }, [e]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            w.externalModel.dispose(), d.current.forEach((e) => e());
                                        },
                                        [w],
                                    ),
                                    i().createElement(r.Provider, { value: w }, l)
                                );
                            },
                            () => (0, n.useContext)(r),
                        ];
                    })(0, ({ externalModel: e }) => ({ openStorage: e.createCallbackNoArgs('onOpenStorage') })),
                    Z = X[0],
                    $ = X[1],
                    Q = {
                        base: 'App_base_5c',
                        shine: 'App_shine_d0',
                        base__large: 'App_base__large_56',
                        wrapper: 'App_wrapper_4d',
                        base__disabled: 'App_base__disabled_cc',
                        icon: 'App_icon_51',
                        icon__hovered: 'App_icon__hovered_72',
                        count: 'App_count_6b',
                        tooltip: 'App_tooltip_8b',
                        disabledBg: 'App_disabledBg_79',
                        disabledLock: 'App_disabledLock_a0',
                    },
                    J = R.strings.gui_lootboxes.entryPointWidget,
                    ee = { [C.ExtraSmall]: 20, [C.Small]: 20, [C.Medium]: 20, [C.Large]: 24, [C.ExtraLarge]: 24 },
                    te = (0, W.Pi)(() => {
                        const e = $(),
                            t = e.model,
                            r = e.controls,
                            a = t.root.get(),
                            o = a.hasNew,
                            l = a.boxesCount,
                            s = a.isLootBoxesEnabled,
                            d = (() => {
                                const e = (0, n.useContext)(h),
                                    t = e.width,
                                    r = e.height,
                                    i = ((e) => {
                                        switch (!0) {
                                            case e.extraLarge:
                                                return C.ExtraLarge;
                                            case e.large:
                                                return C.Large;
                                            case e.medium:
                                                return C.Medium;
                                            case e.small:
                                                return C.Small;
                                            case e.extraSmall:
                                                return C.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'), C.ExtraSmall
                                                );
                                        }
                                    })(e),
                                    a = ((e) => {
                                        switch (!0) {
                                            case e.extraLargeWidth:
                                                return D.ExtraLarge;
                                            case e.largeWidth:
                                                return D.Large;
                                            case e.mediumWidth:
                                                return D.Medium;
                                            case e.smallWidth:
                                                return D.Small;
                                            case e.extraSmallWidth:
                                                return D.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'), D.ExtraSmall
                                                );
                                        }
                                    })(e),
                                    o = ((e) => {
                                        switch (!0) {
                                            case e.extraLargeHeight:
                                                return N.ExtraLarge;
                                            case e.largeHeight:
                                                return N.Large;
                                            case e.mediumHeight:
                                                return N.Medium;
                                            case e.smallHeight:
                                                return N.Small;
                                            case e.extraSmallHeight:
                                                return N.ExtraSmall;
                                            default:
                                                return (
                                                    console.error('Unreachable media context resolution'), N.ExtraSmall
                                                );
                                        }
                                    })(e);
                                return {
                                    mediaSize: i,
                                    mediaWidth: a,
                                    mediaHeight: o,
                                    remScreenWidth: t,
                                    remScreenHeight: r,
                                };
                            })().mediaSize,
                            c =
                                (() => {
                                    const e = (0, n.useState)({
                                            height: viewEnv.getViewSizeRem().height,
                                            width: viewEnv.getViewSizeRem().width,
                                        }),
                                        t = e[0],
                                        r = e[1];
                                    return (
                                        (0, n.useEffect)(() => {
                                            const e = (e) => {
                                                r(e);
                                            };
                                            return (
                                                engine.on('screenResized', e),
                                                () => {
                                                    engine.off('screenResized', e);
                                                }
                                            );
                                        }, []),
                                        t
                                    );
                                })().height >= 236,
                            u = (0, n.useRef)(null),
                            m = i().useState(!1),
                            _ = m[0],
                            g = m[1],
                            w = (s ? l < 1 && z : B) || (o && 'new') || 'normal';
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
                                                        if (null != u && u.current) {
                                                            const e = u.current.getBoundingClientRect(),
                                                                t = e.left,
                                                                r = e.top,
                                                                n = e.width,
                                                                i = e.height;
                                                            viewEnv.setInputArea(
                                                                viewEnv.pxToRem(t),
                                                                viewEnv.pxToRem(r),
                                                                viewEnv.pxToRem(n),
                                                                viewEnv.pxToRem(i),
                                                            );
                                                        }
                                                    })());
                                            });
                                        })),
                                        () => {
                                            'function' == typeof t && t(), null !== r && cancelAnimationFrame(r);
                                        }
                                    );
                                })(),
                            [c],
                        );
                        const v = (0, I.useSpring)(V),
                            E = f()(Q.base, Q[`base__${w}`], c && Q.base__large),
                            p = (0, I.useTransition)(_, Object.assign({ key: _ }, j));
                        return i().createElement(
                            I.animated.div,
                            { className: E, style: v },
                            'new' === w && i().createElement('div', { className: Q.shine }),
                            i().createElement(
                                'div',
                                {
                                    ref: u,
                                    className: Q.wrapper,
                                    onClick: () => {
                                        w !== B && (r.openStorage(), H.playYes());
                                    },
                                    onMouseEnter: () => {
                                        w !== B && (H.playHighlight(), g(!0));
                                    },
                                    onMouseLeave: () => {
                                        g(!1);
                                    },
                                },
                                i().createElement('div', { className: Q.icon }),
                                p(
                                    (e, t) =>
                                        t &&
                                        i().createElement(I.animated.div, {
                                            className: f()(Q.icon, Q.icon__hovered),
                                            style: e,
                                        }),
                                ),
                                w !== z &&
                                    i().createElement(
                                        'div',
                                        { className: Q.count },
                                        i().createElement(x, {
                                            count: l,
                                            customFontSize: ee[d],
                                            maximum: { maxCount: 1e3, maxCountText: J.maxBoxesCount() },
                                        }),
                                    ),
                            ),
                            w === B &&
                                i().createElement(
                                    A,
                                    { header: J.disabledTooltip.header(), body: J.disabledTooltip.body() },
                                    i().createElement(
                                        'div',
                                        { className: Q.tooltip },
                                        i().createElement('div', { className: Q.disabledBg }),
                                        i().createElement('div', { className: Q.disabledLock }),
                                    ),
                                ),
                        );
                    }),
                    re = {
                        getter:
                            ((ne = { hasNew: !1, boxesCount: 9989, isLootBoxesEnabled: !1 }),
                            (e) => (e ? e.split('.').reduce((e, t) => e[t], ne) : ne)),
                        controls: () =>
                            (function (e) {
                                const t = {};
                                for (const r in e)
                                    if (Object.prototype.hasOwnProperty.call(e, r)) {
                                        const n = e[r];
                                        t[r] = (0, K.aD)(n);
                                    }
                                return t;
                            })({
                                openStorage: () => {
                                    console.log('Call onOpenStorage()');
                                },
                            }),
                    };
                var ne;
                engine.whenReady.then(() => {
                    p().render(
                        i().createElement(
                            Z,
                            { mode: 'real', mocks: re },
                            i().createElement(v, null, i().createElement(te, null)),
                        ),
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
        (__webpack_require__.O = (e, t, r, n) => {
            if (!t) {
                var i = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [t, r, n] = deferred[s], a = !0, o = 0; o < t.length; o++)
                        (!1 & n || i >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[o]))
                            ? t.splice(o--, 1)
                            : ((a = !1), n < i && (i = n));
                    if (a) {
                        deferred.splice(s--, 1);
                        var l = r();
                        void 0 !== l && (e = l);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > n; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [t, r, n];
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
        (__webpack_require__.j = 138),
        (() => {
            var e = { 138: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, r) => {
                    var n,
                        i,
                        [a, o, l] = r,
                        s = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (n in o) __webpack_require__.o(o, n) && (__webpack_require__.m[n] = o[n]);
                        if (l) var d = l(__webpack_require__);
                    }
                    for (t && t(r); s < a.length; s++)
                        (i = a[s]), __webpack_require__.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return __webpack_require__.O(d);
                },
                r = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(5593));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
