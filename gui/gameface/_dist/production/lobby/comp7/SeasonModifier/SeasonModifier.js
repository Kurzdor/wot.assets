(() => {
    'use strict';
    var __webpack_modules__ = {
            527: (e, t, n) => {
                n.r(t), n.d(t, { mouse: () => s, onResize: () => o });
                var i = n(2472),
                    r = n(1176);
                const o = (0, i.E)('clientResized'),
                    a = { down: (0, i.E)('mousedown'), up: (0, i.E)('mouseup'), move: (0, i.E)('mousemove') };
                const s = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, r.R)(!1);
                    }
                    function n() {
                        e.enabled && (0, r.R)(!0);
                    }
                    function i() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', n))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', n))
                            : (0, r.R)(!1);
                    }
                    const o = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const o = `mouse${t}`,
                                        s = a[t]((e) => n([e, 'outside']));
                                    function c(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(o, c),
                                        i(),
                                        () => {
                                            r &&
                                                (s(),
                                                window.removeEventListener(o, c),
                                                (e.listeners -= 1),
                                                i(),
                                                (r = !1));
                                        }
                                    );
                                };
                            })(n)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, o, {
                        disable() {
                            (e.enabled = !1), i();
                        },
                        enable() {
                            (e.enabled = !0), i();
                        },
                        enableOutside() {
                            e.enabled && (0, r.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, r.R)(!1);
                        },
                    });
                })();
            },
            5959: (e, t, n) => {
                n.r(t),
                    n.d(t, {
                        events: () => i,
                        getMouseGlobalPosition: () => o,
                        getSize: () => r,
                        graphicsQuality: () => a,
                    });
                var i = n(527);
                function r(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function o(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const a = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, n) => {
                function i(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                n.d(t, { R: () => i });
            },
            2472: (e, t, n) => {
                function i(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                n.d(t, { E: () => i });
            },
            3138: (e, t, n) => {
                n.d(t, { O: () => r });
                var i = n(5959);
                const r = { view: n(7641), client: i };
            },
            3722: (e, t, n) => {
                function i(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function r(e, t, n) {
                    return `url(${i(e, t, n)})`;
                }
                n.r(t), n.d(t, { getBgUrl: () => r, getTextureUrl: () => i });
            },
            6112: (e, t, n) => {
                n.d(t, { W: () => i });
                const i = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, n) => {
                n.d(t, { U: () => r });
                var i = n(2472);
                const r = {
                    onTextureFrozen: (0, i.E)('self.onTextureFrozen'),
                    onTextureReady: (0, i.E)('self.onTextureReady'),
                    onDomBuilt: (0, i.E)('self.onDomBuilt'),
                    onLoaded: (0, i.E)('self.onLoaded'),
                    onDisplayChanged: (0, i.E)('self.onShowingStatusChanged'),
                    onFocusUpdated: (0, i.E)('self.onFocusChanged'),
                    children: {
                        onAdded: (0, i.E)('children.onAdded'),
                        onLoaded: (0, i.E)('children.onLoaded'),
                        onRemoved: (0, i.E)('children.onRemoved'),
                        onAttached: (0, i.E)('children.onAttached'),
                        onTextureReady: (0, i.E)('children.onTextureReady'),
                        onRequestPosition: (0, i.E)('children.requestPosition'),
                    },
                };
            },
            7641: (e, t, n) => {
                n.r(t),
                    n.d(t, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => s,
                        children: () => i,
                        displayStatus: () => r.W,
                        displayStatusIs: () => P,
                        events: () => o.U,
                        extraSize: () => M,
                        forceTriggerMouseMove: () => T,
                        freezeTextureBeforeResize: () => E,
                        getBrowserTexturePath: () => _,
                        getDisplayStatus: () => y,
                        getScale: () => h,
                        getSize: () => u,
                        getViewGlobalPosition: () => w,
                        isEventHandled: () => O,
                        isFocused: () => f,
                        pxToRem: () => m,
                        remToPx: () => p,
                        resize: () => v,
                        sendEvent: () => a.qP,
                        setAnimateWindow: () => b,
                        setEventHandled: () => g,
                        setInputPaddingsRem: () => c,
                        setSidePaddingsRem: () => l,
                        whenTutorialReady: () => k,
                    });
                var i = n(3722),
                    r = n(6112),
                    o = n(6538),
                    a = n(8566);
                function s(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function c(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function _(e, t, n, i = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, i);
                }
                function d(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function l(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function u(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function v(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function w(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: p(t.x), y: p(t.y) };
                }
                function E() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function h() {
                    return viewEnv.getScale();
                }
                function m(e) {
                    return viewEnv.pxToRem(e);
                }
                function p(e) {
                    return viewEnv.remToPx(e);
                }
                function b(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function f() {
                    return viewEnv.isFocused();
                }
                function g() {
                    return viewEnv.setEventHandled();
                }
                function O() {
                    return viewEnv.isEventHandled();
                }
                function T() {
                    viewEnv.forceTriggerMouseMove();
                }
                function y() {
                    return viewEnv.getShowingStatus();
                }
                const P = Object.keys(r.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === r.W[t]), e),
                        {},
                    ),
                    M = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    k = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : o.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, n) => {
                n.d(t, { qP: () => _ });
                const i = ['args'];
                const r = 2,
                    o = 16,
                    a = 32,
                    s = 64,
                    c = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const o = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        i,
                                        r = {},
                                        o = Object.keys(e);
                                    for (i = 0; i < o.length; i++) (n = o[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                    return r;
                                })(t, i);
                            return void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, a, {
                                          arguments:
                                              ((r = o),
                                              Object.entries(r).map(([e, t]) => {
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
                        var r;
                    },
                    _ = {
                        close(e) {
                            c('popover' === e ? r : a);
                        },
                        minimize() {
                            c(s);
                        },
                        move(e) {
                            c(o, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            5521: (e, t, n) => {
                let i, r;
                n.d(t, { n: () => i }),
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
                    })(i || (i = {})),
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
            1358: (e, t, n) => {
                n.d(t, { Z: () => o });
                var i = n(3138);
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
                    addCallback(e, t, n = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const o = i.O.view.addModelObserver(e, n, r);
                        return (
                            o > 0
                                ? ((this._callbacks[o] = t),
                                  n > 0 && (this._views[n] ? this._views[n].push(o) : (this._views[n] = [o])))
                                : console.error("Can't add callback for model:", e),
                            o
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
                            const i = this._callbacks[n];
                            void 0 !== i && i(e, t);
                        });
                    }
                }
                r.__instance = void 0;
                const o = r;
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
                n.d(t, { B0: () => c, ry: () => p });
                class i {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: n }) => {
                                    let i = e.target;
                                    do {
                                        if (i === t) return;
                                        i = i.parentNode;
                                    } while (i);
                                    n();
                                });
                            });
                    }
                    static get instance() {
                        return i.__instance || (i.__instance = new i()), i.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const n = e,
                            i = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== n || t !== i)),
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
                i.__instance = void 0;
                const r = i;
                var o = n(1358);
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
                const _ = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    d = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    l = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var v = n(5521),
                    w = n(3138);
                const E = ['args'];
                function h(e, t, n, i, r, o, a) {
                    try {
                        var s = e[o](a),
                            c = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    s.done ? t(c) : Promise.resolve(c).then(i, r);
                }
                const m = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                        n = arguments;
                                    return new Promise(function (i, r) {
                                        var o = e.apply(t, n);
                                        function a(e) {
                                            h(o, i, r, a, s, 'next', e);
                                        }
                                        function s(e) {
                                            h(o, i, r, a, s, 'throw', e);
                                        }
                                        a(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    b = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                o = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        i,
                                        r = {},
                                        o = Object.keys(e);
                                    for (i = 0; i < o.length; i++) (n = o[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                    return r;
                                })(t, E);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, o, {
                                          arguments:
                                              ((i = r),
                                              Object.entries(i).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, o));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var i;
                    },
                    f = () => b(c.CLOSE),
                    g = (e, t) => {
                        e.keyCode === v.n.ESCAPE && t();
                    };
                var O = n(7572);
                const T = r.instance,
                    y = {
                        DataTracker: o.Z,
                        ViewModel: O.Z,
                        ViewEventType: c,
                        NumberFormatType: _,
                        RealFormatType: d,
                        TimeFormatType: l,
                        DateFormatType: u,
                        makeGlobalBoundingBox: m,
                        sendMoveEvent: (e) => b(c.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => b(c.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            b(c.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, i, r = R.invalid('resId'), o) => {
                            const a = w.O.view.getViewGlobalPosition(),
                                s = n.getBoundingClientRect(),
                                _ = s.x,
                                d = s.y,
                                l = s.width,
                                u = s.height,
                                v = {
                                    x: w.O.view.pxToRem(_) + a.x,
                                    y: w.O.view.pxToRem(d) + a.y,
                                    width: w.O.view.pxToRem(l),
                                    height: w.O.view.pxToRem(u),
                                };
                            b(c.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: i || R.invalid('resId'),
                                targetID: r,
                                direction: t,
                                bbox: m(v),
                                on: !0,
                                args: o,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => g(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            g(e, f);
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
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(c.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(c.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(c.POP_OVER),
                        dumpViewModel: function e(t) {
                            const n = {};
                            if ('object' != typeof t) return t;
                            for (const i in t)
                                if (Object.prototype.hasOwnProperty.call(t, i)) {
                                    const r = Object.prototype.toString.call(t[i]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = t[i];
                                        n[i] = [];
                                        for (let t = 0; t < r.length; t++) n[i].push({ value: e(r[t].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[i] = e(t[i]))
                                            : (n[i] = t[i]);
                                }
                            return n;
                        },
                        ClickOutsideManager: T,
                        SystemLocale: a,
                        UserLocale: s,
                    };
                window.ViewEnvHelper = y;
            },
            742: (e, t, n) => {
                var i = n(6179),
                    r = n.n(i),
                    o = n(493),
                    a = n.n(o);
                var s = n(4179);
                const c = [
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
                function _(e) {
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
                const d = (e, t, n = {}, i = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: s.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: i,
                                },
                                n,
                            ),
                        );
                    },
                    l = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            r = e.args,
                            o = e.onMouseEnter,
                            a = e.onMouseLeave,
                            s = e.onMouseDown,
                            l = e.onClick,
                            u = e.ignoreShowDelay,
                            v = void 0 !== u && u,
                            w = e.ignoreMouseClick,
                            E = void 0 !== w && w,
                            h = e.decoratorId,
                            m = void 0 === h ? 0 : h,
                            p = e.isEnabled,
                            b = void 0 === p || p,
                            f = e.targetId,
                            g = void 0 === f ? 0 : f,
                            O = e.onShow,
                            T = e.onHide,
                            y = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    i,
                                    r = {},
                                    o = Object.keys(e);
                                for (i = 0; i < o.length; i++) (n = o[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, c);
                        const P = (0, i.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            M = (0, i.useMemo)(
                                () =>
                                    g ||
                                    ((e = 1) => {
                                        const t = new Error().stack;
                                        let n,
                                            i = R.invalid('resId');
                                        return (
                                            t &&
                                                ((n = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== n &&
                                                    window.subViews[n] &&
                                                    (i = window.subViews[n].id)),
                                            { caller: n, stack: t, resId: i }
                                        );
                                    })().resId,
                                [g],
                            ),
                            k = (0, i.useCallback)(() => {
                                (P.current.isVisible && P.current.timeoutId) ||
                                    (d(n, m, { isMouseEvent: !0, on: !0, arguments: _(r) }, M),
                                    O && O(),
                                    (P.current.isVisible = !0));
                            }, [n, m, r, M, O]),
                            A = (0, i.useCallback)(() => {
                                if (P.current.isVisible || P.current.timeoutId) {
                                    const e = P.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (P.current.timeoutId = 0)),
                                        d(n, m, { on: !1 }, M),
                                        P.current.isVisible && T && T(),
                                        (P.current.isVisible = !1);
                                }
                            }, [n, m, M, T]),
                            L = (0, i.useCallback)((e) => {
                                P.current.isVisible &&
                                    ((P.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (P.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(P.current.prevTarget) && A();
                                    }, 200)));
                            }, []);
                        (0, i.useEffect)(() => {
                            const e = P.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', L, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', L, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, i.useEffect)(() => {
                                !1 === b && A();
                            }, [b, A]),
                            (0, i.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', A),
                                    () => {
                                        window.removeEventListener('mouseleave', A), A();
                                    }
                                ),
                                [A],
                            );
                        return b
                            ? (0, i.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((S = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((P.current.timeoutId = window.setTimeout(k, v ? 100 : 400)),
                                                      o && o(e),
                                                      S && S(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              A(), null == a || a(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === E && A(), null == l || l(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === E && A(), null == s || s(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      y,
                                  ),
                              )
                            : t;
                        var S;
                    },
                    u = ['children'];
                function v() {
                    return (
                        (v =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                                }
                                return e;
                            }),
                        v.apply(this, arguments)
                    );
                }
                const w = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                i,
                                r = {},
                                o = Object.keys(e);
                            for (i = 0; i < o.length; i++) (n = o[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, u);
                    return r().createElement(
                        l,
                        v(
                            {
                                contentId:
                                    R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                        'resId',
                                    ),
                                ignoreShowDelay: !0,
                            },
                            n,
                        ),
                        t,
                    );
                };
                var E = n(7030);
                const h = { from: { opacity: 0 }, to: { opacity: 1 }, delay: 100, config: { duration: 300 } },
                    m = 'App_base_fc',
                    p = 'App_content_cb',
                    b = 'App_description_f7',
                    f = 'App_title_60',
                    g = 'App_icon_fe',
                    O = () => {
                        const e = (0, E.useSpring)(h);
                        return r().createElement(
                            E.animated.div,
                            { className: m, style: e },
                            r().createElement(
                                w,
                                null,
                                r().createElement(
                                    'div',
                                    { className: p },
                                    r().createElement(
                                        'div',
                                        { className: b },
                                        r().createElement(
                                            'div',
                                            { className: f },
                                            R.strings.comp7.seasonModifier.title(),
                                        ),
                                    ),
                                    r().createElement('div', { className: g }),
                                ),
                            ),
                        );
                    };
                engine.whenReady.then(() => {
                    a().render(r().createElement(O, null), document.getElementById('root'));
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
        (__webpack_require__.O = (e, t, n, i) => {
            if (!t) {
                var r = 1 / 0;
                for (c = 0; c < deferred.length; c++) {
                    for (var [t, n, i] = deferred[c], o = !0, a = 0; a < t.length; a++)
                        (!1 & i || r >= i) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[a]))
                            ? t.splice(a--, 1)
                            : ((o = !1), i < r && (r = i));
                    if (o) {
                        deferred.splice(c--, 1);
                        var s = n();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            i = i || 0;
            for (var c = deferred.length; c > 0 && deferred[c - 1][2] > i; c--) deferred[c] = deferred[c - 1];
            deferred[c] = [t, n, i];
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
        (__webpack_require__.j = 638),
        (() => {
            var e = { 638: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var i,
                        r,
                        [o, a, s] = n,
                        c = 0;
                    if (o.some((t) => 0 !== e[t])) {
                        for (i in a) __webpack_require__.o(a, i) && (__webpack_require__.m[i] = a[i]);
                        if (s) var _ = s(__webpack_require__);
                    }
                    for (t && t(n); c < o.length; c++)
                        (r = o[c]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(_);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [926], () => __webpack_require__(742));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
