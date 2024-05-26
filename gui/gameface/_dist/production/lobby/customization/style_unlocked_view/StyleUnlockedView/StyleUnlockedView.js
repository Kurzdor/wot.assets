(() => {
    'use strict';
    var __webpack_modules__ = {
            67: (e, t, n) => {
                n.d(t, { O: () => K });
                var i = {};
                n.r(i), n.d(i, { mouse: () => _, onResize: () => c });
                var a = {};
                n.r(a),
                    n.d(a, {
                        events: () => i,
                        getMouseGlobalPosition: () => m,
                        getSize: () => u,
                        graphicsQuality: () => h,
                    });
                var r = {};
                n.r(r), n.d(r, { getBgUrl: () => w, getTextureUrl: () => g });
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
                n.r(o),
                    n.d(o, {
                        addModelObserver: () => T,
                        addPreloadTexture: () => x,
                        children: () => r,
                        displayStatus: () => v,
                        displayStatusIs: () => z,
                        events: () => p,
                        extraSize: () => q,
                        forceTriggerMouseMove: () => V,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => M,
                        getDisplayStatus: () => j,
                        getScale: () => D,
                        getSize: () => P,
                        getViewGlobalPosition: () => R,
                        isEventHandled: () => W,
                        isFocused: () => B,
                        pxToRem: () => H,
                        remToPx: () => U,
                        resize: () => N,
                        sendEvent: () => S,
                        setAnimateWindow: () => F,
                        setEventHandled: () => I,
                        setInputPaddingsRem: () => O,
                        setSidePaddingsRem: () => L,
                        whenTutorialReady: () => G,
                    });
                const c = s('clientResized'),
                    d = { down: s('mousedown'), up: s('mouseup'), move: s('mousemove') };
                const _ = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && l(!1);
                    }
                    function n() {
                        e.enabled && l(!0);
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
                            : l(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const r = `mouse${t}`,
                                        o = d[t]((e) => n([e, 'outside']));
                                    function s(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, s),
                                        i(),
                                        () => {
                                            a &&
                                                (o(),
                                                window.removeEventListener(r, s),
                                                (e.listeners -= 1),
                                                i(),
                                                (a = !1));
                                        }
                                    );
                                };
                            })(n)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, a, {
                        disable() {
                            (e.enabled = !1), i();
                        },
                        enable() {
                            (e.enabled = !0), i();
                        },
                        enableOutside() {
                            e.enabled && l(!0);
                        },
                        disableOutside() {
                            e.enabled && l(!1);
                        },
                    });
                })();
                function u(e = 'px') {
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
                function g(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function w(e, t, n) {
                    return `url(${g(e, t, n)})`;
                }
                const v = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    p = {
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
                const E = 2,
                    f = 16,
                    y = 32,
                    k = 64,
                    C = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        i,
                                        a = {},
                                        r = Object.keys(e);
                                    for (i = 0; i < r.length; i++) (n = r[i]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                                    return a;
                                })(t, b);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, r, {
                                          arguments:
                                              ((i = a),
                                              Object.entries(i).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, r));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var i;
                    },
                    S = {
                        close(e) {
                            C('popover' === e ? E : y);
                        },
                        minimize() {
                            C(k);
                        },
                        move(e) {
                            C(f, { isMouseEvent: !0, on: e });
                        },
                    };
                function x(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function O(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function M(e, t, n, i = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, i);
                }
                function T(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function L(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function P(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function N(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function R(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: U(t.x), y: U(t.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function D() {
                    return viewEnv.getScale();
                }
                function H(e) {
                    return viewEnv.pxToRem(e);
                }
                function U(e) {
                    return viewEnv.remToPx(e);
                }
                function F(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function B() {
                    return viewEnv.isFocused();
                }
                function I() {
                    return viewEnv.setEventHandled();
                }
                function W() {
                    return viewEnv.isEventHandled();
                }
                function V() {
                    viewEnv.forceTriggerMouseMove();
                }
                function j() {
                    return viewEnv.getShowingStatus();
                }
                const z = Object.keys(v).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === v[t]), e), {}),
                    q = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    G = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : p.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    K = { view: o, client: a };
            },
            521: (e, t, n) => {
                let i, a;
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
                    })(a || (a = {}));
            },
            358: (e, t, n) => {
                n.d(t, { Z: () => r });
                var i = n(67);
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
                        const r = i.O.view.addModelObserver(e, n, a);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = t),
                                  n > 0 && (this._views[n] ? this._views[n].push(r) : (this._views[n] = [r])))
                                : console.error("Can't add callback for model:", e),
                            r
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
                a.__instance = void 0;
                const r = a;
            },
            572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
                n.d(t, { Sw: () => r.Z, B0: () => l, ry: () => p, Sy: () => E });
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
                const a = i;
                var r = n(358);
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
                    d = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = n(521),
                    h = n(67);
                const g = ['args'];
                function w(e, t, n, i, a, r, o) {
                    try {
                        var s = e[r](o),
                            l = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    s.done ? t(l) : Promise.resolve(l).then(i, a);
                }
                const v = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                    return new Promise(function (i, a) {
                                        var r = e.apply(t, n);
                                        function o(e) {
                                            w(r, i, a, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            w(r, i, a, o, s, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    b = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        i,
                                        a = {},
                                        r = Object.keys(e);
                                    for (i = 0; i < r.length; i++) (n = r[i]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                                    return a;
                                })(t, g);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, r, {
                                          arguments:
                                              ((i = a),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var i;
                    },
                    E = () => b(l.CLOSE),
                    f = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var y = n(572);
                const k = a.instance,
                    C = {
                        DataTracker: r.Z,
                        ViewModel: y.Z,
                        ViewEventType: l,
                        NumberFormatType: c,
                        RealFormatType: d,
                        TimeFormatType: _,
                        DateFormatType: u,
                        makeGlobalBoundingBox: v,
                        sendMoveEvent: (e) => b(l.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: E,
                        sendClosePopOverEvent: () => b(l.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            b(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, i, a = R.invalid('resId'), r) => {
                            const o = h.O.view.getViewGlobalPosition(),
                                s = n.getBoundingClientRect(),
                                c = s.x,
                                d = s.y,
                                _ = s.width,
                                u = s.height,
                                m = {
                                    x: h.O.view.pxToRem(c) + o.x,
                                    y: h.O.view.pxToRem(d) + o.y,
                                    width: h.O.view.pxToRem(_),
                                    height: h.O.view.pxToRem(u),
                                };
                            b(l.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: i || R.invalid('resId'),
                                targetID: a,
                                direction: t,
                                bbox: v(m),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => f(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            f(e, E);
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
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(l.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(l.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(l.POP_OVER),
                        dumpViewModel: function e(t) {
                            const n = {};
                            if ('object' != typeof t) return t;
                            for (const i in t)
                                if (Object.prototype.hasOwnProperty.call(t, i)) {
                                    const a = Object.prototype.toString.call(t[i]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = t[i];
                                        n[i] = [];
                                        for (let t = 0; t < a.length; t++) n[i].push({ value: e(a[t].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[i] = e(t[i]))
                                            : (n[i] = t[i]);
                                }
                            return n;
                        },
                        ClickOutsideManager: k,
                        SystemLocale: o,
                        UserLocale: s,
                    };
                window.ViewEnvHelper = C;
            },
            791: (e, t, n) => {
                var i = n(179),
                    a = n.n(i),
                    r = n(493),
                    o = n.n(r);
                const s = (e, t, n) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && n.extraLarge) ||
                          (t.largeHeight && n.large) ||
                          (t.mediumHeight && n.medium) ||
                          (t.smallHeight && n.small) ||
                          (t.extraSmallHeight && n.extraSmall)
                            ? e
                            : null
                        : e;
                var l = n(67);
                const c = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var d;
                function _(e, t, n) {
                    const i = (function (e, t) {
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
                        r = Math.min(i, a);
                    return {
                        extraLarge: r === n.extraLarge.weight,
                        large: r === n.large.weight,
                        medium: r === n.medium.weight,
                        small: r === n.small.weight,
                        extraSmall: r === n.extraSmall.weight,
                        extraLargeWidth: i === n.extraLarge.weight,
                        largeWidth: i === n.large.weight,
                        mediumWidth: i === n.medium.weight,
                        smallWidth: i === n.small.weight,
                        extraSmallWidth: i === n.extraSmall.weight,
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
                })(d || (d = {}));
                const u = l.O.client.getSize('rem'),
                    m = u.width,
                    h = u.height,
                    g = Object.assign({ width: m, height: h }, _(m, h, c)),
                    w = (0, i.createContext)(g),
                    v = ['children'];
                const p = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                i,
                                a = {},
                                r = Object.keys(e);
                            for (i = 0; i < r.length; i++) (n = r[i]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                            return a;
                        })(e, v);
                    const a = (0, i.useContext)(w),
                        r = a.extraLarge,
                        o = a.large,
                        l = a.medium,
                        c = a.small,
                        d = a.extraSmall,
                        _ = a.extraLargeWidth,
                        u = a.largeWidth,
                        m = a.mediumWidth,
                        h = a.smallWidth,
                        g = a.extraSmallWidth,
                        p = a.extraLargeHeight,
                        b = a.largeHeight,
                        E = a.mediumHeight,
                        f = a.smallHeight,
                        y = a.extraSmallHeight,
                        k = { extraLarge: p, large: b, medium: E, small: f, extraSmall: y };
                    if (n.extraLarge || n.large || n.medium || n.small || n.extraSmall) {
                        if (n.extraLarge && r) return t;
                        if (n.large && o) return t;
                        if (n.medium && l) return t;
                        if (n.small && c) return t;
                        if (n.extraSmall && d) return t;
                    } else {
                        if (n.extraLargeWidth && _) return s(t, n, k);
                        if (n.largeWidth && u) return s(t, n, k);
                        if (n.mediumWidth && m) return s(t, n, k);
                        if (n.smallWidth && h) return s(t, n, k);
                        if (n.extraSmallWidth && g) return s(t, n, k);
                        if (
                            !(n.extraLargeWidth || n.largeWidth || n.mediumWidth || n.smallWidth || n.extraSmallWidth)
                        ) {
                            if (n.extraLargeHeight && p) return t;
                            if (n.largeHeight && b) return t;
                            if (n.mediumHeight && E) return t;
                            if (n.smallHeight && f) return t;
                            if (n.extraSmallHeight && y) return t;
                        }
                    }
                    return null;
                };
                p.defaultProps = {
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
                (0, i.memo)(p);
                const b = (e) => {
                        const t = (0, i.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    E = (0, i.memo)(({ children: e }) => {
                        const t = (0, i.useContext)(w),
                            n = (0, i.useState)(t),
                            r = n[0],
                            o = n[1],
                            s = (0, i.useCallback)((e, t) => {
                                const n = l.O.view.pxToRem(e),
                                    i = l.O.view.pxToRem(t);
                                o(Object.assign({ width: n, height: i }, _(n, i, c)));
                            }, []);
                        b(() => {
                            engine.on('clientResized', s);
                        }),
                            (0, i.useEffect)(() => () => engine.off('clientResized', s), [s]);
                        const d = (0, i.useMemo)(() => Object.assign({}, r), [r]);
                        return a().createElement(w.Provider, { value: d }, e);
                    });
                var f = n(483),
                    y = n.n(f),
                    k = n(364),
                    C = n(521);
                const S = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function x(e = C.n.NONE, t = S, n = !1) {
                    (0, i.useEffect)(() => {
                        if (e !== C.n.NONE)
                            return (
                                window.addEventListener('keydown', i, n),
                                () => {
                                    window.removeEventListener('keydown', i, n);
                                }
                            );
                        function i(i) {
                            if (i.keyCode === e) {
                                if (l.O.view.isEventHandled()) return;
                                l.O.view.setEventHandled(), t(i), n && i.stopPropagation();
                            }
                        }
                    }, [t, e, n]);
                }
                const O = (e = 1) => {
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
                    },
                    M = (e, t) => e.split('.').reduce((e, t) => e && e[t], t),
                    T = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    L = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    P = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, n) => {
                                const i = M(`${e}.${n}`, window);
                                return T(i) ? t(e, n, i) : `${e}.${n}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    N = (e) => {
                        const t = ((e) => {
                                const t = O(),
                                    n = t.caller,
                                    i = t.resId,
                                    a = window.__feature && window.__feature !== n && n ? `subViews.${n}` : '';
                                return { modelPrefix: a, modelPath: L(a, e || ''), resId: i };
                            })(),
                            n = t.modelPrefix,
                            i = e.split('.');
                        if (i.length > 0) {
                            const e = [i[0]];
                            return (
                                i.reduce((t, i) => {
                                    const a = M(L(n, `${t}.${i}`), window);
                                    return T(a) ? (e.push(a.id), `${t}.${i}.value`) : (e.push(i), `${t}.${i}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    },
                    A = k.Sw.instance;
                let D;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(D || (D = {}));
                const H = (e = 'model', t = D.Deep) => {
                    const n = (0, i.useState)(0),
                        a = (n[0], n[1]),
                        r = (0, i.useMemo)(() => O(), []),
                        o = r.caller,
                        s = r.resId,
                        l = (0, i.useMemo)(
                            () => (window.__feature && window.__feature !== o ? `subViews.${o}.${e}` : e),
                            [o, e],
                        ),
                        c = (0, i.useState)(() =>
                            ((e) => {
                                const t = M(e, window);
                                for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                return T(t) ? t.value : t;
                            })(P(l)),
                        ),
                        d = c[0],
                        _ = c[1],
                        u = (0, i.useRef)(-1);
                    return (
                        b(() => {
                            if (
                                ('boolean' == typeof t &&
                                    ((t = t ? D.Deep : D.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                t !== D.None)
                            ) {
                                const n = (e) => {
                                        ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                        t === D.Deep
                                            ? (e === d && a((e) => e + 1), _(e))
                                            : _(Object.assign([], e));
                                    },
                                    i = N(e);
                                u.current = A.addCallback(i, n, s, t === D.Deep);
                            }
                        }),
                        (0, i.useEffect)(() => {
                            if (t !== D.None)
                                return () => {
                                    A.removeCallback(u.current, s);
                                };
                        }, [s, t]),
                        d
                    );
                };
                function U(e) {
                    engine.call('PlaySound', e);
                }
                const F = {
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
                    B = [
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
                function I() {
                    return (
                        (I =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                                }
                                return e;
                            }),
                        I.apply(this, arguments)
                    );
                }
                class W extends a().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && U(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && U(this.props.soundClick);
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
                            i = e.goto,
                            r = e.side,
                            o = e.type,
                            s = e.classNames,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            d = e.onMouseDown,
                            _ = e.onMouseUp,
                            u =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        i,
                                        a = {},
                                        r = Object.keys(e);
                                    for (i = 0; i < r.length; i++) (n = r[i]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                                    return a;
                                })(e, B)),
                            m = y()(F.base, F[`base__${o}`], F[`base__${r}`], null == s ? void 0 : s.base),
                            h = y()(F.icon, F[`icon__${o}`], F[`icon__${r}`], null == s ? void 0 : s.icon),
                            g = y()(F.glow, null == s ? void 0 : s.glow),
                            w = y()(F.caption, F[`caption__${o}`], null == s ? void 0 : s.caption),
                            v = y()(F.goto, null == s ? void 0 : s.goto);
                        return a().createElement(
                            'div',
                            I(
                                {
                                    className: m,
                                    onMouseEnter: this._onMouseEnter(l),
                                    onMouseLeave: this._onMouseLeave(c),
                                    onMouseDown: this._onMouseDown(d),
                                    onMouseUp: this._onMouseUp(_),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: n,
                                },
                                u,
                            ),
                            'info' !== o && a().createElement('div', { className: F.shine }),
                            a().createElement('div', { className: h }, a().createElement('div', { className: g })),
                            a().createElement('div', { className: w }, t),
                            i && a().createElement('div', { className: v }, i),
                        );
                    }
                }
                W.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const V = {
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
                let j, z;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(j || (j = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(z || (z = {}));
                const q = ({
                    children: e,
                    size: t,
                    isFocused: n,
                    type: r,
                    disabled: o,
                    mixClass: s,
                    soundHover: l,
                    soundClick: c,
                    onMouseEnter: d,
                    onMouseMove: _,
                    onMouseDown: u,
                    onMouseUp: m,
                    onMouseLeave: h,
                    onClick: g,
                }) => {
                    const w = (0, i.useRef)(null),
                        v = (0, i.useState)(n),
                        p = v[0],
                        b = v[1],
                        E = (0, i.useState)(!1),
                        f = E[0],
                        k = E[1],
                        C = (0, i.useState)(!1),
                        S = C[0],
                        x = C[1],
                        O = (0, i.useCallback)(() => {
                            o || (w.current && (w.current.focus(), b(!0)));
                        }, [o]),
                        M = (0, i.useCallback)(
                            (e) => {
                                p && null !== w.current && !w.current.contains(e.target) && b(!1);
                            },
                            [p],
                        ),
                        T = (0, i.useCallback)(
                            (e) => {
                                o || (g && g(e));
                            },
                            [o, g],
                        ),
                        L = (0, i.useCallback)(
                            (e) => {
                                o || (null !== l && U(l), d && d(e), x(!0));
                            },
                            [o, l, d],
                        ),
                        P = (0, i.useCallback)(
                            (e) => {
                                _ && _(e);
                            },
                            [_],
                        ),
                        N = (0, i.useCallback)(
                            (e) => {
                                o || (m && m(e), k(!1));
                            },
                            [o, m],
                        ),
                        A = (0, i.useCallback)(
                            (e) => {
                                o || (null !== c && U(c), u && u(e), n && O(), k(!0));
                            },
                            [o, c, u, O, n],
                        ),
                        D = (0, i.useCallback)(
                            (e) => {
                                o || (h && h(e), k(!1));
                            },
                            [o, h],
                        ),
                        H = y()(
                            V.base,
                            V[`base__${r}`],
                            {
                                [V.base__disabled]: o,
                                [V[`base__${t}`]]: t,
                                [V.base__focus]: p,
                                [V.base__highlightActive]: f,
                                [V.base__firstHover]: S,
                            },
                            s,
                        ),
                        F = y()(V.state, V.state__default);
                    return (
                        (0, i.useEffect)(
                            () => (
                                document.addEventListener('mousedown', M),
                                () => {
                                    document.removeEventListener('mousedown', M);
                                }
                            ),
                            [M],
                        ),
                        (0, i.useEffect)(() => {
                            b(n);
                        }, [n]),
                        a().createElement(
                            'div',
                            {
                                ref: w,
                                className: H,
                                onMouseEnter: L,
                                onMouseMove: P,
                                onMouseUp: N,
                                onMouseDown: A,
                                onMouseLeave: D,
                                onClick: T,
                            },
                            r !== j.ghost &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: V.back }),
                                    a().createElement('span', { className: V.texture }),
                                ),
                            a().createElement(
                                'span',
                                { className: F },
                                a().createElement('span', { className: V.stateDisabled }),
                                a().createElement('span', { className: V.stateHighlightHover }),
                                a().createElement('span', { className: V.stateHighlightActive }),
                            ),
                            a().createElement(
                                'span',
                                { className: V.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                q.defaultProps = { type: j.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const G = (0, i.memo)(q),
                    K = [
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
                function $(e) {
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
                const Y = (e, t, n = {}, i = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: k.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: i,
                                },
                                n,
                            ),
                        );
                    },
                    X = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            a = e.args,
                            r = e.onMouseEnter,
                            o = e.onMouseLeave,
                            s = e.onMouseDown,
                            l = e.onClick,
                            c = e.ignoreShowDelay,
                            d = void 0 !== c && c,
                            _ = e.ignoreMouseClick,
                            u = void 0 !== _ && _,
                            m = e.decoratorId,
                            h = void 0 === m ? 0 : m,
                            g = e.isEnabled,
                            w = void 0 === g || g,
                            v = e.targetId,
                            p = void 0 === v ? 0 : v,
                            b = e.onShow,
                            E = e.onHide,
                            f = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    i,
                                    a = {},
                                    r = Object.keys(e);
                                for (i = 0; i < r.length; i++) (n = r[i]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                                return a;
                            })(e, K);
                        const y = (0, i.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            k = (0, i.useMemo)(() => p || O().resId, [p]),
                            C = (0, i.useCallback)(() => {
                                (y.current.isVisible && y.current.timeoutId) ||
                                    (Y(n, h, { isMouseEvent: !0, on: !0, arguments: $(a) }, k),
                                    b && b(),
                                    (y.current.isVisible = !0));
                            }, [n, h, a, k, b]),
                            S = (0, i.useCallback)(() => {
                                if (y.current.isVisible || y.current.timeoutId) {
                                    const e = y.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (y.current.timeoutId = 0)),
                                        Y(n, h, { on: !1 }, k),
                                        y.current.isVisible && E && E(),
                                        (y.current.isVisible = !1);
                                }
                            }, [n, h, k, E]),
                            x = (0, i.useCallback)((e) => {
                                y.current.isVisible &&
                                    ((y.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (y.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(y.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        (0, i.useEffect)(() => {
                            const e = y.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', x, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', x, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, i.useEffect)(() => {
                                !1 === w && S();
                            }, [w, S]),
                            (0, i.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        window.removeEventListener('mouseleave', S), S();
                                    }
                                ),
                                [S],
                            );
                        return w
                            ? (0, i.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((M = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((y.current.timeoutId = window.setTimeout(C, d ? 100 : 400)),
                                                      r && r(e),
                                                      M && M(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              S(), null == o || o(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === u && S(), null == l || l(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === u && S(), null == s || s(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      f,
                                  ),
                              )
                            : t;
                        var M;
                    },
                    Z = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Q() {
                    return (
                        (Q =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                                }
                                return e;
                            }),
                        Q.apply(this, arguments)
                    );
                }
                const J = R.views.common.tooltip_window.simple_tooltip_content,
                    ee = (e) => {
                        let t = e.children,
                            n = e.body,
                            r = e.header,
                            o = e.note,
                            s = e.alert,
                            l = e.args,
                            c = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    i,
                                    a = {},
                                    r = Object.keys(e);
                                for (i = 0; i < r.length; i++) (n = r[i]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                                return a;
                            })(e, Z);
                        const d = (0, i.useMemo)(() => {
                            const e = Object.assign({}, l, { body: n, header: r, note: o, alert: s });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [s, n, r, o, l]);
                        return a().createElement(
                            X,
                            Q(
                                {
                                    contentId:
                                        ((_ = null == l ? void 0 : l.hasHtmlContent),
                                        _ ? J.SimpleTooltipHtmlContent('resId') : J.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: d,
                                },
                                c,
                            ),
                            t,
                        );
                        var _;
                    },
                    te = 'ItemAnimation_base_ba',
                    ne = 'ItemAnimation_boxHolder_7f',
                    ie = 'ItemAnimation_boxHolder__large_bb',
                    ae = 'ItemAnimation_box_3f',
                    re = 'ItemAnimation_box__large_19',
                    oe = 'ItemAnimation_inner_20',
                    se = 'ItemAnimation_inner__large_7f',
                    le = ({ onStart: e, onComplete: t }) => {
                        const n = (0, i.useContext)(w),
                            r = n.large || n.extraLarge,
                            o = y()(ne, r && ie),
                            s = y()(ae, r && re),
                            l = y()(oe, r && se),
                            c = a().createRef();
                        return (
                            (0, i.useEffect)(() => {
                                const n = c.current;
                                n &&
                                    ((n.style.animationDelay = '1s'),
                                    (n.style.animationDuration = '0.3s'),
                                    e &&
                                        setTimeout(() => {
                                            e();
                                        }, 1e3),
                                    t &&
                                        setTimeout(() => {
                                            t();
                                        }, 1300));
                            }, [c, t, e]),
                            a().createElement(
                                'div',
                                { className: te },
                                a().createElement(
                                    'div',
                                    { className: o },
                                    a().createElement(
                                        'div',
                                        { className: s, ref: c },
                                        a().createElement('div', { className: l }),
                                    ),
                                ),
                            )
                        );
                    },
                    ce = 'Header_base_0d',
                    de = 'Header_tankTypeIcon_d6',
                    _e = 'Header_contentContainer_85',
                    ue = 'Header_spaceAtTheEnd_c0',
                    me = ({ name: e, level: t, extraText: n, type: r, className: o }) => {
                        const s = (0, i.useMemo)(() => (n ? n.replace('{tankLevel}', t) : `${t} {tankName}`), [n, t]),
                            l = { backgroundImage: `url(${r})` },
                            c = s
                                .split('{tankName}')
                                .map((t, n) =>
                                    1 === n
                                        ? [
                                              a().createElement('span', { key: 'icon', className: de, style: l }),
                                              a().createElement('span', { key: 'name', className: ue }, e),
                                              a().createElement('span', { key: n }, t),
                                          ]
                                        : a().createElement('span', { key: n }, t),
                                );
                        return a().createElement(
                            'div',
                            { className: y()(ce, o) },
                            a().createElement('div', { className: _e }, c),
                        );
                    };
                me.defaultProps = { extraText: '' };
                const he = 'StyleUnlockedViewContent_base_ce',
                    ge = 'StyleUnlockedViewContent_closeBtnPosition_3d',
                    we = 'StyleUnlockedViewContent_cButton_54',
                    ve = 'StyleUnlockedViewContent_main_d7',
                    pe = 'StyleUnlockedViewContent_main__large_9a',
                    be = 'StyleUnlockedViewContent_header_47',
                    Ee = 'StyleUnlockedViewContent_header__large_d8',
                    fe = 'StyleUnlockedViewContent_title_46',
                    ye = 'StyleUnlockedViewContent_title__large_d7',
                    ke = 'StyleUnlockedViewContent_description_28',
                    Ce = 'StyleUnlockedViewContent_description__large_ba',
                    Se = 'StyleUnlockedViewContent_content_79',
                    xe = 'StyleUnlockedViewContent_iconContent_9b',
                    Oe = 'StyleUnlockedViewContent_iconContent__large_8b',
                    Me = 'StyleUnlockedViewContent_actions_29',
                    Te = 'StyleUnlockedViewContent_actionsSecondaryBtn_3d',
                    Le = 'StyleUnlockedViewContent_sparksContainer_60',
                    Pe = 'StyleUnlockedViewContent_sparksContainer__large_be',
                    Ne = 'StyleUnlockedViewContent_sparks_bd',
                    Re = () => {
                        const e = (0, i.useContext)(w),
                            t = e.large || e.extraLarge,
                            n = y()(ve, t && pe),
                            r = y()(be, t && Ee),
                            o = y()(fe, t && ye),
                            s = y()(ke, t && Ce),
                            l = y()(xe, t && Oe),
                            c = y()(Le, t && Pe);
                        x(C.n.ESCAPE, k.Sy);
                        const d = H('model', D.None),
                            _ = d.tankLevel,
                            u = d.tankTypeIcon,
                            m = d.tankName,
                            h = d.secondaryButtonTooltip,
                            g = d.secondaryButtonEnabled,
                            v = d.onOkClick,
                            p = d.onSecondaryClick,
                            b = d.onAnimationSound,
                            E = (0, i.useCallback)(() => {
                                v && v();
                            }, [v]),
                            f = (0, i.useCallback)(() => {
                                p && p();
                            }, [p]),
                            S = (0, i.useCallback)(() => {
                                b && b();
                            }, [b]);
                        return a().createElement(
                            'div',
                            { className: he },
                            a().createElement(
                                'div',
                                { className: c },
                                a().createElement('img', {
                                    className: Ne,
                                    id: 'swfImg',
                                    src: 'swf://gui/flash/' + R.animations.customization.divine_glow(),
                                }),
                            ),
                            a().createElement(
                                'div',
                                { className: ge },
                                a().createElement(W, {
                                    caption: R.strings.menu.viewHeader.closeBtn.label(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: k.Sy,
                                }),
                            ),
                            a().createElement(
                                'div',
                                { className: n },
                                a().createElement(me, { className: r, name: m, level: _, type: u }),
                                a().createElement(
                                    'span',
                                    { className: o },
                                    R.strings.vehicle_customization.progression.requiredStyleUnlocked.title(),
                                ),
                                a().createElement(
                                    'div',
                                    { className: Se },
                                    a().createElement('div', { className: l }, a().createElement(le, { onStart: S })),
                                ),
                                a().createElement(
                                    'span',
                                    { className: s },
                                    R.strings.vehicle_customization.progression.requiredStyleUnlocked.main(),
                                ),
                                a().createElement(
                                    'div',
                                    { className: Me },
                                    a().createElement(
                                        G,
                                        { type: j.primary, mixClass: we, onClick: E },
                                        R.strings.vehicle_customization.progression.requiredStyleUnlocked.okBtnLabel(),
                                    ),
                                    a().createElement(
                                        'div',
                                        { className: Te },
                                        a().createElement(
                                            ee,
                                            { body: h, isEnabled: '' !== h },
                                            a().createElement(
                                                'div',
                                                null,
                                                a().createElement(
                                                    G,
                                                    { type: j.secondary, mixClass: we, disabled: !g, onClick: f },
                                                    R.strings.vehicle_customization.progression.requiredStyleUnlocked.secondaryBtnLabel(),
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    },
                    Ae = document.createElement('div');
                (window.onload = () => {
                    document.body.appendChild(Ae), document.body.setAttribute('style', 'margin: 0');
                }),
                    engine.whenReady.then(() => {
                        o().render(a().createElement(E, null, a().createElement(Re, null)), Ae);
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
                var a = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, n, i] = deferred[l], r = !0, o = 0; o < t.length; o++)
                        (!1 & i || a >= i) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[o]))
                            ? t.splice(o--, 1)
                            : ((r = !1), i < a && (a = i));
                    if (r) {
                        deferred.splice(l--, 1);
                        var s = n();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            i = i || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > i; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, n, i];
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
        (__webpack_require__.j = 165),
        (() => {
            var e = { 165: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var i,
                        a,
                        [r, o, s] = n,
                        l = 0;
                    if (r.some((t) => 0 !== e[t])) {
                        for (i in o) __webpack_require__.o(o, i) && (__webpack_require__.m[i] = o[i]);
                        if (s) var c = s(__webpack_require__);
                    }
                    for (t && t(n); l < r.length; l++)
                        (a = r[l]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(c);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [858], () => __webpack_require__(791));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
