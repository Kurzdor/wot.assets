(() => {
    'use strict';
    var __webpack_modules__ = {
            67: (e, u, t) => {
                t.d(u, { O: () => X });
                var n = {};
                t.r(n), t.d(n, { mouse: () => _, onResize: () => l });
                var a = {};
                t.r(a),
                    t.d(a, {
                        events: () => n,
                        getMouseGlobalPosition: () => E,
                        getSize: () => d,
                        graphicsQuality: () => A,
                    });
                var i = {};
                t.r(i), t.d(i, { getBgUrl: () => F, getTextureUrl: () => m });
                var s = {};
                function r(e) {
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
                t.r(s),
                    t.d(s, {
                        addModelObserver: () => x,
                        addPreloadTexture: () => S,
                        children: () => i,
                        displayStatus: () => D,
                        displayStatusIs: () => U,
                        events: () => b,
                        extraSize: () => j,
                        forceTriggerMouseMove: () => W,
                        freezeTextureBeforeResize: () => R,
                        getBrowserTexturePath: () => y,
                        getDisplayStatus: () => G,
                        getScale: () => N,
                        getSize: () => k,
                        getViewGlobalPosition: () => O,
                        isEventHandled: () => z,
                        isFocused: () => H,
                        pxToRem: () => L,
                        remToPx: () => M,
                        resize: () => I,
                        sendEvent: () => v,
                        setAnimateWindow: () => P,
                        setEventHandled: () => $,
                        setInputPaddingsRem: () => w,
                        setSidePaddingsRem: () => T,
                        whenTutorialReady: () => V,
                    });
                const l = r('clientResized'),
                    c = { down: r('mousedown'), up: r('mouseup'), move: r('mousemove') };
                const _ = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && o(!1);
                    }
                    function t() {
                        e.enabled && o(!0);
                    }
                    function n() {
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
                    const a = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const i = `mouse${u}`,
                                        s = c[u]((e) => t([e, 'outside']));
                                    function r(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, r),
                                        n(),
                                        () => {
                                            a &&
                                                (s(),
                                                window.removeEventListener(i, r),
                                                (e.listeners -= 1),
                                                n(),
                                                (a = !1));
                                        }
                                    );
                                };
                            })(t)),
                            u
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
                function E(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const A = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function m(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function F(e, u, t) {
                    return `url(${m(e, u, t)})`;
                }
                const D = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    b = {
                        onTextureFrozen: r('self.onTextureFrozen'),
                        onTextureReady: r('self.onTextureReady'),
                        onDomBuilt: r('self.onDomBuilt'),
                        onLoaded: r('self.onLoaded'),
                        onDisplayChanged: r('self.onShowingStatusChanged'),
                        onFocusUpdated: r('self.onFocusChanged'),
                        children: {
                            onAdded: r('children.onAdded'),
                            onLoaded: r('children.onLoaded'),
                            onRemoved: r('children.onRemoved'),
                            onAttached: r('children.onAttached'),
                            onTextureReady: r('children.onTextureReady'),
                            onRequestPosition: r('children.requestPosition'),
                        },
                    },
                    p = ['args'];
                const g = 2,
                    C = 16,
                    B = 32,
                    h = 64,
                    f = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                i = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        a = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                    return a;
                                })(u, p);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([e, u]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    v = {
                        close(e) {
                            f('popover' === e ? g : B);
                        },
                        minimize() {
                            f(h);
                        },
                        move(e) {
                            f(C, { isMouseEvent: !0, on: e });
                        },
                    };
                function S(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function w(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function y(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function x(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function T(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function k(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function I(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function O(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: M(u.x), y: M(u.y) };
                }
                function R() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function N() {
                    return viewEnv.getScale();
                }
                function L(e) {
                    return viewEnv.pxToRem(e);
                }
                function M(e) {
                    return viewEnv.remToPx(e);
                }
                function P(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function H() {
                    return viewEnv.isFocused();
                }
                function $() {
                    return viewEnv.setEventHandled();
                }
                function z() {
                    return viewEnv.isEventHandled();
                }
                function W() {
                    viewEnv.forceTriggerMouseMove();
                }
                function G() {
                    return viewEnv.getShowingStatus();
                }
                const U = Object.keys(D).reduce((e, u) => ((e[u] = () => viewEnv.getShowingStatus() === D[u]), e), {}),
                    j = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    V = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : b.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    X = { view: s, client: a };
            },
            521: (e, u, t) => {
                let n, a;
                t.d(u, { n: () => n }),
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
            358: (e, u, t) => {
                t.d(u, { Z: () => i });
                var n = t(67);
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
                    addCallback(e, u, t = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const i = n.O.view.addModelObserver(e, t, a);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(i) : (this._views[t] = [i])))
                                : console.error("Can't add callback for model:", e),
                            i
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
                            const n = this._callbacks[t];
                            void 0 !== n && n(e, u);
                        });
                    }
                }
                a.__instance = void 0;
                const i = a;
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
            364: (e, u, t) => {
                t.d(u, { Sw: () => i.Z, B0: () => o, c9: () => p, ry: () => b });
                class n {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: u, callback: t }) => {
                                    let n = e.target;
                                    do {
                                        if (n === u) return;
                                        n = n.parentNode;
                                    } while (n);
                                    t();
                                });
                            });
                    }
                    static get instance() {
                        return n.__instance || (n.__instance = new n()), n.__instance;
                    }
                    register(e, u) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: u });
                    }
                    unregister(e, u) {
                        const t = e,
                            n = u;
                        (this.entries = this.entries.filter(({ container: e, callback: u }) => e !== t || u !== n)),
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
                var i = t(358);
                const s = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    r = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    };
                let o;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(o || (o = {}));
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = t(521),
                    A = t(67);
                const m = ['args'];
                function F(e, u, t, n, a, i, s) {
                    try {
                        var r = e[i](s),
                            o = r.value;
                    } catch (e) {
                        return void t(e);
                    }
                    r.done ? u(o) : Promise.resolve(o).then(n, a);
                }
                const D = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    b = (function () {
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
                                    return new Promise(function (n, a) {
                                        var i = e.apply(u, t);
                                        function s(e) {
                                            F(i, n, a, s, r, 'next', e);
                                        }
                                        function r(e) {
                                            F(i, n, a, s, r, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    p = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const a = u.args,
                                i = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        a = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                    return a;
                                })(u, m);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, i, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([e, u]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, i));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    g = () => p(o.CLOSE),
                    C = (e, u) => {
                        e.keyCode === E.n.ESCAPE && u();
                    };
                var B = t(572);
                const h = a.instance,
                    f = {
                        DataTracker: i.Z,
                        ViewModel: B.Z,
                        ViewEventType: o,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: _,
                        DateFormatType: d,
                        makeGlobalBoundingBox: D,
                        sendMoveEvent: (e) => p(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: g,
                        sendClosePopOverEvent: () => p(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            p(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, a = R.invalid('resId'), i) => {
                            const s = A.O.view.getViewGlobalPosition(),
                                r = t.getBoundingClientRect(),
                                l = r.x,
                                c = r.y,
                                _ = r.width,
                                d = r.height,
                                E = {
                                    x: A.O.view.pxToRem(l) + s.x,
                                    y: A.O.view.pxToRem(c) + s.y,
                                    width: A.O.view.pxToRem(_),
                                    height: A.O.view.pxToRem(d),
                                };
                            p(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: u,
                                bbox: D(E),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => C(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            C(e, g);
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
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const n in u)
                                if (Object.prototype.hasOwnProperty.call(u, n)) {
                                    const a = Object.prototype.toString.call(u[n]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = u[n];
                                        t[n] = [];
                                        for (let u = 0; u < a.length; u++) t[n].push({ value: e(a[u].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = e(u[n]))
                                            : (t[n] = u[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: h,
                        SystemLocale: s,
                        UserLocale: r,
                    };
                window.ViewEnvHelper = f;
            },
            365: (e, u, t) => {
                var n = t(179),
                    a = t.n(n),
                    i = t(493),
                    s = t.n(i),
                    r = t(483),
                    o = t.n(r);
                let l;
                function c(e) {
                    return e[0].toUpperCase() + e.slice(1);
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(l || (l = {}));
                const _ = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    d = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    E = (e, u, t = l.left) => e.split(u).reduce(t === l.left ? _ : d, []),
                    A = (() => {
                        const e = new RegExp(
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
                        );
                        return (u) =>
                            u
                                .replace(/&nbsp;/g, ' ')
                                .replace(/ /g, ' ')
                                .match(e);
                    })(),
                    m = ['zh_cn', 'zh_sg', 'zh_tw'],
                    F = (e, u = l.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        return m.includes(t)
                            ? A(e)
                            : ((e, u = l.left) => {
                                  let t = [];
                                  const n =
                                          /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                      a = e.replace(/&nbsp;/g, ' ');
                                  return E(a, /( )/, u).forEach((e) => (t = t.concat(E(e, n, l.left)))), t;
                              })(e, u);
                    };
                let D;
                !(function (e) {
                    (e.SHORT_DATE = 'short-date'),
                        (e.SHORT_TIME = 'short-time'),
                        (e.SHORT_DATE_TIME = 'short-date-time'),
                        (e.FULL_DATE = 'full-date'),
                        (e.FULL_DATE_TIME = 'full-date-time'),
                        (e.MONTH = 'month'),
                        (e.MONTH_DATE = 'month-date'),
                        (e.DATE_MONTH = 'date-month'),
                        (e.MONTH_YEAR = 'month-year'),
                        (e.WEEK_DAY = 'week-day'),
                        (e.WEEK_DAY_TIME = 'week-day-time'),
                        (e.YEAR = 'year'),
                        (e.DATE_YEAR = 'date-year');
                })(D || (D = {}));
                var b = t(364);
                const p = 60;
                Date.now();
                const g = () => {},
                    C = (e = 0, u, t = 0, a = g) => {
                        const i = (0, n.useState)(e),
                            s = i[0],
                            r = i[1];
                        return (
                            (0, n.useEffect)(() => {
                                if (e > 0) {
                                    r(e);
                                    const n = Date.now(),
                                        i = setInterval(
                                            () => {
                                                const u = e - Math.floor((Date.now() - n) / 1e3);
                                                null !== t && u <= t ? (r(t), a && a(), clearInterval(i)) : r(u);
                                            },
                                            1e3 * (u || (e > 120 ? p : 1)),
                                        );
                                    return () => {
                                        clearInterval(i);
                                    };
                                }
                            }, [e, u, t, a]),
                            s
                        );
                    };
                var B = t(67);
                const h = (e = 1) => {
                        const u = new Error().stack;
                        let t,
                            n = R.invalid('resId');
                        return (
                            u &&
                                ((t = u.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                window.__feature &&
                                    window.__feature !== t &&
                                    window.subViews[t] &&
                                    (n = window.subViews[t].id)),
                            { caller: t, stack: u, resId: n }
                        );
                    },
                    f = (e, u) => e.split('.').reduce((e, u) => e && e[u], u),
                    v = (e) => {
                        const u = (0, n.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    S = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    w = (e, u) => (e.length > 0 ? `${e}.${u}` : u),
                    y = (e) =>
                        ((e, u) =>
                            e.split('.').reduce((e, t) => {
                                const n = f(`${e}.${t}`, window);
                                return S(n) ? u(e, t, n) : `${e}.${t}`;
                            }))(e, (e, u) => `${e}.${u}.value`),
                    x = (e) => {
                        const u = ((e) => {
                                const u = h(),
                                    t = u.caller,
                                    n = u.resId,
                                    a = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: a, modelPath: w(a, e || ''), resId: n };
                            })(),
                            t = u.modelPrefix,
                            n = e.split('.');
                        if (n.length > 0) {
                            const e = [n[0]];
                            return (
                                n.reduce((u, n) => {
                                    const a = f(w(t, `${u}.${n}`), window);
                                    return S(a) ? (e.push(a.id), `${u}.${n}.value`) : (e.push(n), `${u}.${n}`);
                                }),
                                e.reduce((e, u) => e + '.' + u)
                            );
                        }
                        return '';
                    },
                    T = b.Sw.instance;
                let k;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(k || (k = {}));
                const I = (e = 'model', u = k.Deep) => {
                        const t = (0, n.useState)(0),
                            a = (t[0], t[1]),
                            i = (0, n.useMemo)(() => h(), []),
                            s = i.caller,
                            r = i.resId,
                            o = (0, n.useMemo)(
                                () => (window.__feature && window.__feature !== s ? `subViews.${s}.${e}` : e),
                                [s, e],
                            ),
                            l = (0, n.useState)(() =>
                                ((e) => {
                                    const u = f(e, window);
                                    for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                    return S(u) ? u.value : u;
                                })(y(o)),
                            ),
                            c = l[0],
                            _ = l[1],
                            d = (0, n.useRef)(-1);
                        return (
                            v(() => {
                                if (
                                    ('boolean' == typeof u &&
                                        ((u = u ? k.Deep : k.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    u !== k.None)
                                ) {
                                    const t = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            u === k.Deep
                                                ? (e === c && a((e) => e + 1), _(e))
                                                : _(Object.assign([], e));
                                        },
                                        n = x(e);
                                    d.current = T.addCallback(n, t, r, u === k.Deep);
                                }
                            }),
                            (0, n.useEffect)(() => {
                                if (u !== k.None)
                                    return () => {
                                        T.removeCallback(d.current, r);
                                    };
                            }, [r, u]),
                            c
                        );
                    },
                    O = b.Sw.instance,
                    N = (e = 'model', u = !0) => {
                        const t = (0, n.useState)(0),
                            a = (t[0], t[1]),
                            i = (0, n.useMemo)(() => h(), []),
                            s = i.caller,
                            r = i.resId,
                            o = (0, n.useMemo)(
                                () => (window.__feature && window.__feature !== s ? `children.${s}.${e}` : e),
                                [s, e],
                            ),
                            l = (0, n.useMemo)(
                                () =>
                                    ((e) => {
                                        const u = f(e, window);
                                        for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                        return u;
                                    })(o),
                                [o],
                            );
                        return (
                            (0, n.useEffect)(() => {
                                if (u) {
                                    const u = () => {
                                            a((e) => e + 1);
                                        },
                                        t = O.addCallback(e, u, r);
                                    return () => O.removeCallback(t, r);
                                }
                            }, [e, u, r]),
                            l
                        );
                    },
                    L = C;
                let M;
                !(function (e) {
                    (e[(e.BattleLoading = 0)] = 'BattleLoading'),
                        (e[(e.PreBattle = 1)] = 'PreBattle'),
                        (e[(e.PreBattleNotConfirmed = 2)] = 'PreBattleNotConfirmed');
                })(M || (M = {}));
                const P = (e) => {
                    let u,
                        t = null;
                    return (
                        (t = requestAnimationFrame(() => {
                            t = requestAnimationFrame(() => {
                                (t = null), (u = e());
                            });
                        })),
                        () => {
                            'function' == typeof u && u(), null !== t && cancelAnimationFrame(t);
                        }
                    );
                };
                const H = (0, n.createContext)(null);
                function $() {
                    return (0, n.useContext)(H);
                }
                const z = (e, u, t) =>
                        u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                            ? (u.extraLargeHeight && t.extraLarge) ||
                              (u.largeHeight && t.large) ||
                              (u.mediumHeight && t.medium) ||
                              (u.smallHeight && t.small) ||
                              (u.extraSmallHeight && t.extraSmall)
                                ? e
                                : null
                            : e,
                    W = {
                        extraLarge: { weight: 4, width: 2560, height: 1440 },
                        large: { weight: 3, width: 1920, height: 1080 },
                        medium: { weight: 2, width: 1600, height: 900 },
                        small: { weight: 1, width: 1366, height: 768 },
                        extraSmall: { weight: 0, width: 1024, height: 768 },
                    };
                var G;
                function U(e, u, t) {
                    const n = (function (e, u) {
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
                        a = (function (e, u) {
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
                        i = Math.min(n, a);
                    return {
                        extraLarge: i === t.extraLarge.weight,
                        large: i === t.large.weight,
                        medium: i === t.medium.weight,
                        small: i === t.small.weight,
                        extraSmall: i === t.extraSmall.weight,
                        extraLargeWidth: n === t.extraLarge.weight,
                        largeWidth: n === t.large.weight,
                        mediumWidth: n === t.medium.weight,
                        smallWidth: n === t.small.weight,
                        extraSmallWidth: n === t.extraSmall.weight,
                        extraLargeHeight: a === t.extraLarge.weight,
                        largeHeight: a === t.large.weight,
                        mediumHeight: a === t.medium.weight,
                        smallHeight: a === t.small.weight,
                        extraSmallHeight: a === t.extraSmall.weight,
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
                })(G || (G = {}));
                const j = B.O.client.getSize('rem'),
                    V = j.width,
                    X = j.height,
                    q = Object.assign({ width: V, height: X }, U(V, X, W)),
                    K = (0, n.createContext)(q),
                    Y = ['children'];
                const Z = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, Y);
                    const a = (0, n.useContext)(K),
                        i = a.extraLarge,
                        s = a.large,
                        r = a.medium,
                        o = a.small,
                        l = a.extraSmall,
                        c = a.extraLargeWidth,
                        _ = a.largeWidth,
                        d = a.mediumWidth,
                        E = a.smallWidth,
                        A = a.extraSmallWidth,
                        m = a.extraLargeHeight,
                        F = a.largeHeight,
                        D = a.mediumHeight,
                        b = a.smallHeight,
                        p = a.extraSmallHeight,
                        g = { extraLarge: m, large: F, medium: D, small: b, extraSmall: p };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && i) return u;
                        if (t.large && s) return u;
                        if (t.medium && r) return u;
                        if (t.small && o) return u;
                        if (t.extraSmall && l) return u;
                    } else {
                        if (t.extraLargeWidth && c) return z(u, t, g);
                        if (t.largeWidth && _) return z(u, t, g);
                        if (t.mediumWidth && d) return z(u, t, g);
                        if (t.smallWidth && E) return z(u, t, g);
                        if (t.extraSmallWidth && A) return z(u, t, g);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && m) return u;
                            if (t.largeHeight && F) return u;
                            if (t.mediumHeight && D) return u;
                            if (t.smallHeight && b) return u;
                            if (t.extraSmallHeight && p) return u;
                        }
                    }
                    return null;
                };
                Z.defaultProps = {
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
                (0, n.memo)(Z),
                    (0, n.memo)(({ children: e }) => {
                        const u = (0, n.useContext)(K),
                            t = (0, n.useState)(u),
                            i = t[0],
                            s = t[1],
                            r = (0, n.useCallback)((e, u) => {
                                const t = B.O.view.pxToRem(e),
                                    n = B.O.view.pxToRem(u);
                                s(Object.assign({ width: t, height: n }, U(t, n, W)));
                            }, []);
                        v(() => {
                            engine.on('clientResized', r);
                        }),
                            (0, n.useEffect)(() => () => engine.off('clientResized', r), [r]);
                        const o = (0, n.useMemo)(() => Object.assign({}, i), [i]);
                        return a().createElement(K.Provider, { value: o }, e);
                    });
                function Q(e, u, t) {
                    const a = (0, n.useContext)(K);
                    let i = Object.entries(a).filter(([e, u]) => !0 === u && e in G);
                    return (
                        t && (i = i.filter((e) => t.includes(e[0]))),
                        e.reduce((e, t) => {
                            const n = i.map((e) =>
                                o()(u[((e, u) => e + '__' + u)(t, e[0])], u[((e, u) => e + c(u))(t, e[0])]),
                            );
                            return (e[t] = o()(u[t], ...n)), e;
                        }, {})
                    );
                }
                function J(e) {
                    return (
                        !1 ===
                        (function (e) {
                            return null == e;
                        })(e)
                    );
                }
                function ee(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                const ue = ee;
                function te(e, u) {
                    return Array.isArray(e) ? e.map(u) : e.map((e, t, n) => u(null == e ? void 0 : e.value, t, n));
                }
                function ne(e, u, t) {
                    const n = [];
                    for (let a = 0; a < e.length; a++) {
                        const i = ue(e, a);
                        u(i, a, e) && n.push(t(i, a, e));
                    }
                    return n;
                }
                function ae(e, u) {
                    return ne(e, J, u);
                }
                const ie = (e, u, t, a = []) => {
                        const i = ((e, u = []) => {
                            const t = (0, n.useRef)(),
                                a = (0, n.useCallback)((...u) => {
                                    t.current && t.current(), (t.current = e(...u));
                                }, u);
                            return (
                                (0, n.useEffect)(
                                    () => () => {
                                        t.current && t.current();
                                    },
                                    [a],
                                ),
                                a
                            );
                        })(
                            () =>
                                P(() =>
                                    P(() => {
                                        if (e.current) {
                                            const t = e.current.getBoundingClientRect(),
                                                n = {
                                                    width: B.O.view.pxToRem(t.width),
                                                    height: B.O.view.pxToRem(t.height),
                                                    offsetX: B.O.view.pxToRem(t.left),
                                                    offsetY: B.O.view.pxToRem(t.top),
                                                };
                                            window.tutorialApi.updateComponents(), u(n);
                                        }
                                    }),
                                ),
                            [u, e],
                        );
                        return (
                            (0, n.useEffect)(() => {
                                i();
                            }, [i, ...a]),
                            (0, n.useEffect)(() => {
                                if (t)
                                    return (
                                        engine.on('clientResized', i),
                                        () => {
                                            engine.off('clientResized', i);
                                        }
                                    );
                            }, [t, i]),
                            i
                        );
                    },
                    se = {
                        base: 'AmmunitionPanel_base_f8',
                        base__locked: 'AmmunitionPanel_base__locked_71',
                        base__disabled: 'AmmunitionPanel_base__disabled_41',
                        base__hidden: 'AmmunitionPanel_base__hidden_10',
                        border: 'AmmunitionPanel_border_38',
                        border__hidden: 'AmmunitionPanel_border__hidden_7d',
                        roleSkillSlot: 'AmmunitionPanel_roleSkillSlot_21',
                        roleSkillSlot__battle: 'AmmunitionPanel_roleSkillSlot__battle_e4',
                        roleSkillSlot__small: 'AmmunitionPanel_roleSkillSlot__small_8b',
                        roleSkillSlot__extraSmall: 'AmmunitionPanel_roleSkillSlot__extraSmall_7a',
                        roleSkillSlot__prebattle: 'AmmunitionPanel_roleSkillSlot__prebattle_00',
                    },
                    re = 'Border_base_f9',
                    oe = 'Border_border_83',
                    le = 'Border_wrapper_17',
                    ce = 'Border_active_e8',
                    _e = (0, n.memo)(({ slotOffset: e, slotWidth: u, onAnimationEnd: t }) => {
                        const i = (0, n.useRef)(null),
                            s = (0, n.useRef)(!1);
                        (0, n.useEffect)(() => {
                            s.current = !0;
                        }, [e, u]);
                        const r = (0, n.useCallback)(() => {
                            s.current && t(), (s.current = !1);
                        }, [t]);
                        (0, n.useEffect)(() => {
                            const e = i.current;
                            return (
                                e && e.addEventListener('transitionend', r),
                                () => {
                                    e && e.removeEventListener('transitionend', r);
                                }
                            );
                        }, [r]);
                        const o = (0, n.useMemo)(() => ({ left: e }), [e]),
                            l = (0, n.useMemo)(() => ({ width: u }), [u]);
                        return a().createElement(
                            'div',
                            { className: re },
                            a().createElement(
                                'div',
                                { ref: i, className: oe, style: o },
                                a().createElement(
                                    'div',
                                    { className: le },
                                    a().createElement('div', { className: ce, style: l }),
                                ),
                            ),
                        );
                    }),
                    de = [
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
                function Ee(e) {
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
                const Ae = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: b.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    me = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            a = e.args,
                            i = e.onMouseEnter,
                            s = e.onMouseLeave,
                            r = e.onMouseDown,
                            o = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            _ = e.ignoreMouseClick,
                            d = void 0 !== _ && _,
                            E = e.decoratorId,
                            A = void 0 === E ? 0 : E,
                            m = e.isEnabled,
                            F = void 0 === m || m,
                            D = e.targetId,
                            b = void 0 === D ? 0 : D,
                            p = e.onShow,
                            g = e.onHide,
                            C = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, de);
                        const B = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            f = (0, n.useMemo)(() => b || h().resId, [b]),
                            v = (0, n.useCallback)(() => {
                                (B.current.isVisible && B.current.timeoutId) ||
                                    (Ae(t, A, { isMouseEvent: !0, on: !0, arguments: Ee(a) }, f),
                                    p && p(),
                                    (B.current.isVisible = !0));
                            }, [t, A, a, f, p]),
                            S = (0, n.useCallback)(() => {
                                if (B.current.isVisible || B.current.timeoutId) {
                                    const e = B.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (B.current.timeoutId = 0)),
                                        Ae(t, A, { on: !1 }, f),
                                        B.current.isVisible && g && g(),
                                        (B.current.isVisible = !1);
                                }
                            }, [t, A, f, g]),
                            w = (0, n.useCallback)((e) => {
                                B.current.isVisible &&
                                    ((B.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (B.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(B.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        (0, n.useEffect)(() => {
                            const e = B.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', w, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', w, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === F && S();
                            }, [F, S]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        window.removeEventListener('mouseleave', S), S();
                                    }
                                ),
                                [S],
                            );
                        return F
                            ? (0, n.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((y = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((B.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                      i && i(e),
                                                      y && y(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              S(), null == s || s(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === d && S(), null == o || o(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === d && S(), null == r || r(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      C,
                                  ),
                              )
                            : u;
                        var y;
                    },
                    Fe = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function De() {
                    return (
                        (De =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        De.apply(this, arguments)
                    );
                }
                const be = R.views.common.tooltip_window.simple_tooltip_content,
                    pe = (e) => {
                        let u = e.children,
                            t = e.body,
                            i = e.header,
                            s = e.note,
                            r = e.alert,
                            o = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, Fe);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, o, { body: t, header: i, note: s, alert: r });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [r, t, i, s, o]);
                        return a().createElement(
                            me,
                            De(
                                {
                                    contentId:
                                        ((_ = null == o ? void 0 : o.hasHtmlContent),
                                        _ ? be.SimpleTooltipHtmlContent('resId') : be.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var _;
                    };
                function ge(e) {
                    engine.call('PlaySound', e);
                }
                const Ce = {
                    playHighlight() {
                        ge('highlight');
                    },
                    playClick() {
                        ge('play');
                    },
                    playYes() {
                        ge('yes1');
                    },
                };
                let Be;
                !(function (e) {
                    (e[(e.NORMAL = 0)] = 'NORMAL'), (e[(e.WARNING = 1)] = 'WARNING');
                })(Be || (Be = {}));
                const he = 'SwitchButton_base_23',
                    fe = 'SwitchButton_base__active_31',
                    ve = 'SwitchButton_base__warning_71',
                    Se = 'SwitchButton_buttonBack_ce',
                    we = 'SwitchButton_buttonBackHovered_45',
                    ye = 'SwitchButton_base__hovered_b4',
                    xe = 'SwitchButton_buttonGlow_4c',
                    Te = 'SwitchButton_buttonIcon_d3',
                    ke = 'SwitchButton_buttonWarning_3f',
                    Ie = 'SwitchButton_number_8a',
                    Oe = ({ id: e, state: u, currentIndex: t, isHovered: i }) => {
                        const s = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url('${R.images.gui.maps.icons.tanksetup.panel.indexes.$dyn(`setup_${e + 1}`)}')`,
                                }),
                                [e],
                            ),
                            r = e === t,
                            l = !r && u === Be.WARNING;
                        return a().createElement(
                            'div',
                            { className: o()(he, { [fe]: r, [ve]: l, [ye]: i }) },
                            a().createElement('div', { className: Se }),
                            a().createElement('div', { className: we }),
                            a().createElement('div', { className: Te }),
                            a().createElement('div', { className: xe }),
                            a().createElement('div', { className: ke }),
                            a().createElement('div', { style: s, className: Ie }),
                        );
                    },
                    Re = 'SwitchEquipment_base_1a',
                    Ne = 'SwitchEquipment_base__disabled_73',
                    Le = 'SwitchEquipment_cover_b3',
                    Me = ({ onClick: e, totalCount: u, currentIndex: t, states: i, isDisabled: s, groupId: r }) => {
                        const l = (0, n.useRef)(null),
                            c = (0, n.useState)(!1),
                            _ = c[0],
                            d = c[1],
                            E = (t + 1) % u,
                            A = (0, n.useCallback)(() => {
                                s || e({ groupId: r, currentIndex: E });
                            }, [r, s, E, e]),
                            m = (0, n.useCallback)(() => {
                                s || (d(!0), Ce.playHighlight());
                            }, [s]),
                            F = (0, n.useCallback)(() => {
                                s || d(!1);
                            }, [s]),
                            D = o()(Re, s && Ne);
                        return a().createElement(
                            'div',
                            {
                                id: `switch-equipment-group-${r}`,
                                className: D,
                                onClick: A,
                                onMouseEnter: m,
                                onMouseLeave: F,
                                ref: l,
                            },
                            Array.from({ length: u }, (e, u) =>
                                a().createElement(Oe, {
                                    key: u,
                                    id: u,
                                    state: ue(i, u),
                                    currentIndex: t,
                                    isHovered: _,
                                }),
                            ),
                            s && a().createElement('div', { className: Le }),
                        );
                    };
                var Pe = t(558),
                    He = t(934);
                const $e = {
                        base__enterUp: 'GroupAnimation_base__enterUp_b3',
                        animationEnterTop: 'GroupAnimation_animationEnterTop_92',
                        base__enterDown: 'GroupAnimation_base__enterDown_f0',
                        animationEnterDown: 'GroupAnimation_animationEnterDown_73',
                        base__exitUp: 'GroupAnimation_base__exitUp_92',
                        animationExitTop: 'GroupAnimation_animationExitTop_89',
                        base__exitDown: 'GroupAnimation_base__exitDown_67',
                        animationExitDown: 'GroupAnimation_animationExitDown_02',
                    },
                    ze = 'up',
                    We = 'down',
                    Ge = ({ children: e, index: u, setSetupSwitching: t, disabled: i = !1 }) => {
                        const s = (0, n.useRef)(1 - u),
                            r = (0, n.useMemo)(() => {
                                const e = ((t = u), (n = s.current), t === n ? '' : t > n ? We : ze);
                                var t, n;
                                const a = e && c(e);
                                return i ? {} : { enter: $e[`base__enter${a}`], exit: $e[`base__exit${a}`] };
                            }, [u, i]);
                        return (
                            (s.current = u),
                            a().createElement(
                                Pe.Z,
                                { className: $e.base },
                                a().createElement(
                                    He.Z,
                                    {
                                        timeout: 300,
                                        key: u,
                                        classNames: r,
                                        onEnter: () => t(!0),
                                        onExited: () => t(!1),
                                    },
                                    e,
                                ),
                            )
                        );
                    };
                let Ue;
                !(function (e) {
                    (e.Hangar = 'hangar'),
                        (e.Setup = 'setup'),
                        (e.Compare = 'compare'),
                        (e.Battle = 'battle'),
                        (e.Respawn = 'respawn'),
                        (e.Prebattle = 'prebattle');
                })(Ue || (Ue = {}));
                const je = (e) => e.imageSource === R.images.gui.maps.icons.tanksetup.panel.empty(),
                    Ve = (e) => e === Ue.Battle || e === Ue.Prebattle,
                    Xe = (e) => !Ve(e),
                    qe = (e) => Ve(e) || e === Ue.Respawn,
                    Ke = 'shells',
                    Ye = 'consumables',
                    Ze = 'battleAbilities',
                    Qe = 'toggleShells',
                    Je = 'toggleCamouflage',
                    eu = {
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
                    uu = [
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
                function tu() {
                    return (
                        (tu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        tu.apply(this, arguments)
                    );
                }
                class nu extends a().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && ge(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && ge(this.props.soundClick);
                            }),
                            (this._onMouseUp = (e) => (u) => {
                                e && e(u), this.setState({ click: !1 });
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 }));
                    }
                    render() {
                        const e = this.props,
                            u = e.caption,
                            t = e.onClick,
                            n = e.goto,
                            i = e.side,
                            s = e.type,
                            r = e.classNames,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            _ = e.onMouseDown,
                            d = e.onMouseUp,
                            E =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        a = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                    return a;
                                })(e, uu)),
                            A = o()(eu.base, eu[`base__${s}`], eu[`base__${i}`], null == r ? void 0 : r.base),
                            m = o()(eu.icon, eu[`icon__${s}`], eu[`icon__${i}`], null == r ? void 0 : r.icon),
                            F = o()(eu.glow, null == r ? void 0 : r.glow),
                            D = o()(eu.caption, eu[`caption__${s}`], null == r ? void 0 : r.caption),
                            b = o()(eu.goto, null == r ? void 0 : r.goto);
                        return a().createElement(
                            'div',
                            tu(
                                {
                                    className: A,
                                    onMouseEnter: this._onMouseEnter(l),
                                    onMouseLeave: this._onMouseLeave(c),
                                    onMouseDown: this._onMouseDown(_),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                E,
                            ),
                            'info' !== s && a().createElement('div', { className: eu.shine }),
                            a().createElement('div', { className: m }, a().createElement('div', { className: F })),
                            a().createElement('div', { className: D }, u),
                            n && a().createElement('div', { className: b }, n),
                        );
                    }
                }
                nu.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var au = t(521);
                const iu = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function su(e = au.n.NONE, u = iu, t = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== au.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (B.O.view.isEventHandled()) return;
                                B.O.view.setEventHandled(), u(n), t && n.stopPropagation();
                            }
                        }
                    }, [u, e, t]);
                }
                let ru;
                !(function (e) {
                    (e.None = ''),
                        (e.Tiny = 'tiny'),
                        (e.Small = 'small'),
                        (e.Medium = 'medium'),
                        (e.Large = 'large'),
                        (e.Huge = 'huge');
                })(ru || (ru = {}));
                const ou = 'setup-content';
                function lu(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return cu(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return cu(e, u);
                        })(e)) ||
                        (u && e && 'number' == typeof e.length)
                    ) {
                        t && (e = t);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function cu(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const _u = (e, u = []) => {
                        const t = document.getElementById('root');
                        t && (t.style.cursor = e ? 'grabbing' : 'default');
                        for (var n, a = lu(u); !(n = a()).done; ) {
                            const u = n.value,
                                t = document.getElementById(u);
                            t && (t.style.pointerEvents = e ? 'none' : 'auto');
                        }
                    },
                    du = (e, u, t) => {
                        let n = '',
                            a = 8e3;
                        for (var i, s = lu(t); !(i = s()).done; ) {
                            const e = i.value,
                                t = Math.abs(e.centerX - u);
                            t < a && ((n = e.id), (a = t));
                        }
                        return n;
                    },
                    Eu = (e, u) => {
                        const t = u.find((u) => u.id === e);
                        return t ? t.centerX : 0;
                    };
                let Au, mu;
                !(function (e) {
                    (e.Waiting = 'waiting'), (e.Active = 'active'), (e.InEffect = 'in'), (e.Rollback = 'rollback');
                })(Au || (Au = {})),
                    (function (e) {
                        (e.Ready = 'ready'),
                            (e.DragStart = 'start'),
                            (e.Drag = 'drag'),
                            (e.Drop = 'drop'),
                            (e.DropExit = 'exit');
                    })(mu || (mu = {}));
                const Fu = (e) => `panel-${e}-section`,
                    Du = (e, u) => {
                        const t = Fu(e),
                            n = u.filter((e) => e !== t);
                        return { selfId: t, blockOnGrabIds: [ou, ...n] };
                    },
                    bu = ({ baseId: e, slotsLength: u, handleSwap: t, setIsExitBlocked: a, syncInitiator: i }) => {
                        const s = ((e, u, t) => {
                                const a = (0, n.useRef)([]),
                                    i = (0, n.useRef)({ dragId: '', dropId: '', prevPotentialDropId: '' }),
                                    s = (0, n.useState)({ activeDragId: '', potentialDropId: '' }),
                                    r = s[0],
                                    o = s[1],
                                    l = (0, n.useCallback)((e) => {
                                        i.current.dropId ||
                                            i.current.prevPotentialDropId ||
                                            ((i.current.prevPotentialDropId = e),
                                            o({ activeDragId: e, potentialDropId: e }));
                                    }, []),
                                    c = (0, n.useCallback)((e, u) => {
                                        if (a.current) {
                                            const t = du(0, u, a.current);
                                            t !== i.current.prevPotentialDropId &&
                                                ((i.current.prevPotentialDropId = t),
                                                o({ activeDragId: e, potentialDropId: t }));
                                        }
                                    }, []),
                                    _ = (0, n.useCallback)((e, u) => {
                                        if (a.current && u) {
                                            const t = i.current,
                                                n = du(0, u, a.current);
                                            (t.dropId = n),
                                                (t.dragId = e),
                                                (t.prevPotentialDropId = ''),
                                                o({ activeDragId: e, potentialDropId: '' }),
                                                n !== e && ge('cons_equipment_swipe');
                                        }
                                    }, []),
                                    d = (0, n.useCallback)(() => {
                                        const e = i.current,
                                            u = e.dragId,
                                            t = e.dropId,
                                            n = e.prevPotentialDropId;
                                        (u || t || n) &&
                                            ((i.current = { dragId: '', dropId: '', prevPotentialDropId: '' }),
                                            o({ activeDragId: '', potentialDropId: '' }));
                                    }, []),
                                    E = (0, n.useCallback)(
                                        (e) => {
                                            const u = i.current.dropId;
                                            u && u !== e ? t(e, u) : d();
                                        },
                                        [d, t],
                                    ),
                                    A = (0, n.useCallback)((e, u) => {
                                        const t = a.current.find((u) => u.id === e);
                                        t && u && (t.centerX = u);
                                    }, []),
                                    m = (0, n.useCallback)(
                                        (e, u) => {
                                            const t = u.dragId,
                                                n = u.currentCenterX;
                                            switch (e) {
                                                case mu.Ready:
                                                    return A(t, n);
                                                case mu.DragStart:
                                                    return l(t);
                                                case mu.Drag:
                                                    return c(t, n);
                                                case mu.Drop:
                                                    return _(t, n);
                                                case mu.DropExit:
                                                    return E(t);
                                                default:
                                                    return;
                                            }
                                        },
                                        [l, c, _, E, A],
                                    );
                                return (
                                    (0, n.useEffect)(() => {
                                        if (e !== a.current.length) {
                                            const t = new Array(e).fill(null);
                                            a.current = t.map((e, t) => ({ id: `${u}-${t}`, centerX: 0 }));
                                        }
                                    }, [e, u]),
                                    {
                                        dragState: r,
                                        handleGrabberAction: m,
                                        getForceCenterX: (0, n.useCallback)((e) => {
                                            const u = i.current,
                                                t = u.dragId,
                                                n = u.dropId;
                                            return e === t ? Eu(n, a.current) : e === n ? Eu(t, a.current) : 0;
                                        }, []),
                                        resetDragResults: d,
                                    }
                                );
                            })(u, e, t),
                            r = s.dragState,
                            o = s.handleGrabberAction,
                            l = s.getForceCenterX,
                            c = s.resetDragResults,
                            _ = (0, n.useCallback)(
                                (e, u) => {
                                    if (a)
                                        switch (e) {
                                            case mu.DragStart:
                                            case mu.Drag:
                                                a(!0);
                                                break;
                                            default:
                                                a(!1);
                                        }
                                    o(e, u);
                                },
                                [o, a],
                            );
                        return (
                            (0, n.useEffect)(() => {
                                a && a(!1);
                            }, [a]),
                            (0, n.useEffect)(() => {
                                c();
                            }, [i, c]),
                            { handleGrabberAction: _, dragState: r, getForceCenterX: l }
                        );
                    },
                    pu = {
                        base: 'Counter_base_9e',
                        show: 'Counter_show_be',
                        base__big: 'Counter_base__big_19',
                        base__small: 'Counter_base__small_3b',
                        base__empty: 'Counter_base__empty_98',
                        base__animated: 'Counter_base__animated_40',
                        base__hidden: 'Counter_base__hidden_56',
                        hide: 'Counter_hide_b6',
                        bg: 'Counter_bg_74',
                        value: 'Counter_value_3e',
                        value__text: 'Counter_value__text_d6',
                        base__pattern: 'Counter_base__pattern_71',
                        plus: 'Counter_plus_15',
                        pattern: 'Counter_pattern_83',
                    },
                    gu = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function Cu() {
                    return (
                        (Cu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Cu.apply(this, arguments)
                    );
                }
                const Bu = (e) => {
                    let u = e.size,
                        t = e.value,
                        n = e.isEmpty,
                        i = e.fadeInAnimation,
                        s = e.hide,
                        r = e.maximumNumber,
                        l = e.className,
                        c = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                            return a;
                        })(e, gu);
                    const _ = n ? null : t,
                        d = 'string' == typeof _;
                    if ((_ && !d && _ < 0) || 0 === _) return null;
                    const E = _ && !d && _ > r,
                        A = o()(
                            pu.base,
                            pu[`base__${u}`],
                            i && pu.base__animated,
                            s && pu.base__hidden,
                            !_ && pu.base__pattern,
                            n && pu.base__empty,
                            l,
                        );
                    return a().createElement(
                        'div',
                        Cu({ className: A }, c),
                        a().createElement('div', { className: pu.bg }),
                        a().createElement('div', { className: pu.pattern }),
                        a().createElement(
                            'div',
                            { className: o()(pu.value, d && pu.value__text) },
                            E ? r : _,
                            E && a().createElement('span', { className: pu.plus }, '+'),
                        ),
                    );
                };
                Bu.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                const hu = 'FormatText_base_d0',
                    fu = ({ binding: e, text: u = '', classMix: t, alignment: i = l.left }) =>
                        null === u
                            ? (console.error("FormatText was supplied with 'null'"), null)
                            : a().createElement(
                                  n.Fragment,
                                  null,
                                  u.split('\n').map((u, s) =>
                                      a().createElement(
                                          'div',
                                          { className: o()(hu, t), key: `${u}-${s}` },
                                          ((e, u, t) =>
                                              e
                                                  .split(/%\((.*?)\)(?:[sd])?/g)
                                                  .map((e) => (t && e in t ? t[e] : F(e, u))))(u, i, e).map((e, u) =>
                                              a().createElement(n.Fragment, { key: `${u}-${e}` }, e),
                                          ),
                                      ),
                                  ),
                              ),
                    vu = 'display',
                    Su = 'visible_change',
                    wu = Su,
                    yu = 'TopLabel_base_7f',
                    xu = 'TopLabel_base__ready_00',
                    Tu = 'TopLabel_text_d0',
                    ku = 'TopLabel_text__hangar_36',
                    Iu = 'TopLabel_text__shown_25',
                    Ou = 'TopLabel_text__hidden_79',
                    Ru = 'TopLabel_text__truncated_29',
                    Nu = (0, n.memo)(({ panelType: e, text: u, parentRef: t, isTruncated: i = !1, show: s = !1 }) => {
                        const r = (0, n.useRef)(!1),
                            l = (0, n.useState)(!1),
                            c = l[0],
                            _ = l[1];
                        (0, n.useEffect)(() => {
                            t || (s && !r.current && (r.current = !0), _(s));
                        }, [s, t]);
                        const d = (0, n.useCallback)(() => {
                                (r.current = !0), _(!0);
                            }, []),
                            E = (0, n.useCallback)(() => {
                                _(!1);
                            }, []);
                        (0, n.useEffect)(() => {
                            const e = t && t.current;
                            if (e)
                                return (
                                    e.addEventListener('mouseenter', d),
                                    e.addEventListener('mouseleave', E),
                                    () => {
                                        e.removeEventListener('mouseenter', d), e.removeEventListener('mouseleave', E);
                                    }
                                );
                        }, [t, d, E]);
                        const A = o()(yu, r.current && xu),
                            m = o()(Tu, e !== Ue.Setup && ku, i && Ru, s && c ? Iu : Ou);
                        return a().createElement(
                            'div',
                            { className: A },
                            a().createElement('div', { className: m }, u),
                        );
                    }),
                    Lu = 'notUsableSection',
                    Mu = 'Section_base_8a',
                    Pu = 'Section_base__hidden_f0',
                    Hu = 'Section_label_73',
                    $u = 'Section_counter_8a',
                    zu = 'Section_configLabel_c9',
                    Wu = 'Section_configText_eb',
                    Gu = 'Section_configVehicleIcon_20';
                let Uu;
                !(function (e) {
                    (e[(e.NonSet = 0)] = 'NonSet'),
                        (e[(e.Debug = 10)] = 'Debug'),
                        (e[(e.Info = 20)] = 'Info'),
                        (e[(e.Warning = 30)] = 'Warning');
                })(Uu || (Uu = {}));
                const ju = 'tooltip_watched';
                let Vu;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown');
                })(Vu || (Vu = {}));
                let Xu, qu, Ku;
                !(function (e) {
                    (e.HangarView = 'hangar'),
                        (e.SetupView = 'setup_view'),
                        (e.ProgressView = 'progress_view'),
                        (e.RewardsView = 'rewards_view'),
                        (e.RewardsSelectionView = 'rewards_selection_view'),
                        (e.SkillsView = 'skills_view'),
                        (e.AwardsView = 'awards_view'),
                        (e.ContainerView = 'container_view');
                })(Xu || (Xu = {})),
                    (function (e) {
                        (e.AbilitiesCheckboxTooltip = 'abilities_checkbox_tooltip'),
                            (e.EpicWidgetTooltip = 'epic_widget_tooltip'),
                            (e.BannerPerformance = 'banner_performance_tooltip'),
                            (e.SkillPointsTooltip = 'skill_points_tooltip'),
                            (e.AbilityLevelsTooltip = 'ability_levels_tooltip'),
                            (e.SkillOrderTooltip = 'skill_order_tooltip'),
                            (e.SkillLevelTab = 'skill_level_tab'),
                            (e.RewardsButton = 'rewards_button'),
                            (e.RewardsButtonTooltip = 'rewards_button_tooltip'),
                            (e.RewardTooltip = 'reward_tooltip'),
                            (e.AwardsOkButton = 'awards_ok'),
                            (e.AwardsView = 'awards_view'),
                            (e.RewardsSelectionView = 'rewards_selection_view');
                    })(qu || (qu = {})),
                    (function (e) {
                        (e.Click = 'click'), (e.Close = 'close');
                    })(Ku || (Ku = {}));
                const Yu = 'metrics',
                    Zu = () => Date.now(),
                    Qu = ({ partnerID: e, item: u, parentScreen: t, itemState: n, info: a }) => ({
                        item: u,
                        partnerID: e || null,
                        parent_screen: t || null,
                        item_state: n || null,
                        additional_info: a || null,
                    }),
                    Ju = (e, u) => {
                        const t = (0, n.useCallback)(
                            (t, n = Uu.Info, a) => {
                                a || (a = {}),
                                    Object.keys(a).length >= 200 ||
                                        window.uiLoggerModel.log({
                                            feature: e,
                                            group: u,
                                            action: t,
                                            logLevel: n,
                                            params: JSON.stringify(a),
                                        });
                            },
                            [e, u],
                        );
                        return (e, u, n) => t(e, u, n);
                    },
                    et = (e, u) => {
                        const t = Ju(e, u),
                            a = (0, n.useRef)(new Map()),
                            i = (0, n.useRef)(new Map()),
                            s = (0, n.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const u = a.current.get(e);
                                    (void 0 !== u && u > 0) || a.current.set(e, Zu());
                                },
                                [a],
                            ),
                            r = (0, n.useCallback)(() => {
                                a.current.clear(), i.current.clear();
                            }, [a, i]),
                            o = (0, n.useCallback)(
                                (e) => {
                                    e &&
                                        void 0 !== a.current.get(e) &&
                                        void 0 === i.current.get(e) &&
                                        i.current.set(e, Zu());
                                },
                                [a, i],
                            ),
                            l = (0, n.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const u = a.current.get(e);
                                    if (void 0 === u) return;
                                    const t = i.current.get(e);
                                    if (void 0 === t) return;
                                    i.current.delete(e);
                                    const n = Zu() - t;
                                    a.current.set(e, u + n);
                                },
                                [a, i],
                            ),
                            c = (0, n.useCallback)(
                                (e, u = 0, n, s) => {
                                    const r = a.current.get(e);
                                    if (void 0 === r) return;
                                    void 0 !== i.current.get(e) && l(e), a.current.delete(e);
                                    const o = (Zu() - r) / 1e3;
                                    o <= u ||
                                        ((s = ((e, u) => (void 0 === e && (e = {}), (e.timeSpent = u), e))(s, o)),
                                        t(e, n, s));
                                },
                                [a, i, t, l],
                            );
                        return [(e) => s(e), (e, u, t, n) => c(e, u, t, n), () => r(), (e) => o(e), (e) => l(e)];
                    },
                    ut = (e) => {
                        const u = et(e, Yu),
                            t = u[0],
                            a = u[1],
                            i = u[2],
                            s = u[3],
                            r = u[4],
                            o = (0, n.useCallback)(
                                (e) => {
                                    const u = e.action,
                                        t = e.timeLimit,
                                        n = e.logLevel;
                                    a(u, t, n, Qu(e));
                                },
                                [a],
                            );
                        return [(e) => t(e), (e) => o(e), () => i(), (e) => s(e), (e) => r(e)];
                    },
                    tt = a().memo(function ({ className: e, children: u }) {
                        const t = ((e, u, t, a) => {
                                const i = ut('epic_battle'),
                                    s = i[0],
                                    r = i[1];
                                return [
                                    (0, n.useCallback)(() => s(ju), [s]),
                                    (0, n.useCallback)(
                                        () =>
                                            r({
                                                action: ju,
                                                timeLimit: 2,
                                                item: e,
                                                parentScreen: u,
                                                itemState: t,
                                                info: a,
                                            }),
                                        [r, e, u, t, a],
                                    ),
                                ];
                            })(qu.SkillOrderTooltip, Xu.SetupView),
                            i = t[0],
                            s = t[1];
                        return a().createElement(
                            me,
                            {
                                contentId: R.views.frontline.lobby.tooltips.SkillOrderTooltip('resId'),
                                onMouseEnter: i,
                                onMouseLeave: s,
                            },
                            a().createElement('div', { className: e }, u),
                        );
                    }),
                    nt = 'SlotDivider_base_60',
                    at = () => a().createElement('div', { className: nt }),
                    it = ({ wrapper: e, children: u, when: t, withProps: n }) =>
                        t ? a().createElement(e, n, u) : a().createElement(a().Fragment, null, u),
                    st = {
                        base: 'Container_base_9a',
                        base__grabbing: 'Container_base__grabbing_73',
                        base__hangar: 'Container_base__hangar_ab',
                        base__setup: 'Container_base__setup_1c',
                        base__compare: 'Container_base__compare_0b',
                        base__selected: 'Container_base__selected_17',
                        base__dragIn: 'Container_base__dragIn_a6',
                        base__dragInActive: 'Container_base__dragInActive_e5',
                        base__toggle: 'Container_base__toggle_94',
                        base__disabled: 'Container_base__disabled_22',
                    },
                    rt = ({
                        activeDragId: e,
                        slotType: u,
                        isSelected: t,
                        isBorderActive: n,
                        children: i,
                        panelType: s,
                        isDisabled: r,
                        isPotentialDrop: l,
                        onClick: c,
                    }) => {
                        const _ = o()(
                            st.base,
                            !e && st[`base__${s}`],
                            u && st[`base__${u}`],
                            t && !l && !n && st.base__selected,
                            l && st['base__dragIn' + (t ? 'Active' : '')],
                            r && st.base__disabled,
                        );
                        return a().createElement('div', { className: _, onClick: c }, i);
                    },
                    ot = {
                        base: 'Bonus_base_dd',
                        base__fitting: 'Bonus_base__fitting_d1',
                        icon: 'Bonus_icon_3b',
                        icon__battleBooster: 'Bonus_icon__battleBooster_66',
                        icon__battleBoosterReplace: 'Bonus_icon__battleBoosterReplace_8d',
                        icon__equipmentPlus: 'Bonus_icon__equipmentPlus_48',
                        icon__builtInEquipment: 'Bonus_icon__builtInEquipment_77',
                        icon__equipmentModernized: 'Bonus_icon__equipmentModernized_76',
                        icon__equipmentTrophyBasic: 'Bonus_icon__equipmentTrophyBasic_a4',
                        icon__equipmentTrophyUpgraded: 'Bonus_icon__equipmentTrophyUpgraded_6d',
                    },
                    lt = a().memo(({ isTemporary: e, overlayType: u, overlaySource: t }) => {
                        const i = o()(ot.base, e && ot.base__fitting),
                            s = o()(ot.icon, ot[`icon__${u}`]),
                            r = (0, n.useMemo)(() => ({ backgroundImage: `url(${t})` }), [t]);
                        return a().createElement(
                            'div',
                            { className: i },
                            a().createElement('div', { className: s, style: r }),
                        );
                    }),
                    ct = {
                        base: 'Level_base_57',
                        base__level1: 'Level_base__level1_c4',
                        base__level2: 'Level_base__level2_9c',
                        base__level3: 'Level_base__level3_39',
                        base__level4: 'Level_base__level4_e3',
                        base__level5: 'Level_base__level5_ea',
                        base__level6: 'Level_base__level6_5d',
                        base__level7: 'Level_base__level7_03',
                        base__level8: 'Level_base__level8_b5',
                        base__level9: 'Level_base__level9_d6',
                        base__level10: 'Level_base__level10_89',
                    },
                    _t = ({ level: e }) => {
                        const u = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url(${R.images.gui.maps.icons.levels.$dyn(`tank_level_${e}`)})`,
                                }),
                                [e],
                            ),
                            t = o()(ct.base, ct[`base__level${e}`]);
                        return a().createElement('div', { style: u, className: t });
                    },
                    dt = 'Inside_image_e5',
                    Et = 'Inside_image__fitting_11',
                    At = 'Inside_warning_e4',
                    mt = 'Inside_change_5a',
                    Ft = ({
                        level: e,
                        overlayType: u,
                        isTemporary: t,
                        withAttention: i,
                        imageSource: s,
                        isIncompatible: r,
                    }) => {
                        const l = (0, n.useMemo)(() => {
                                const t = 'equipmentModernized' === u ? `${u}_${e}_overlay` : `${u}_overlay`;
                                return R.images.gui.maps.icons.quests.bonuses.small.$dyn(t);
                            }, [u, e]),
                            c = (0, n.useMemo)(() => ({ backgroundImage: `url(${s})` }), [s]),
                            _ = !l && Boolean(u) && e;
                        return a().createElement(
                            'div',
                            null,
                            _ && a().createElement(_t, { level: e }),
                            a().createElement('div', { className: o()(dt, (t || i) && Et), style: c }),
                            i && a().createElement('div', { className: At }),
                            r && a().createElement('div', { className: mt }),
                            l && a().createElement(lt, { isTemporary: t, overlaySource: l, overlayType: u }),
                        );
                    };
                let Dt, bt, pt;
                !(function (e) {
                    (e[(e.ExtraSmall = W.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = W.small.width)] = 'Small'),
                        (e[(e.Medium = W.medium.width)] = 'Medium'),
                        (e[(e.Large = W.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = W.extraLarge.width)] = 'ExtraLarge');
                })(Dt || (Dt = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = W.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = W.small.width)] = 'Small'),
                            (e[(e.Medium = W.medium.width)] = 'Medium'),
                            (e[(e.Large = W.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = W.extraLarge.width)] = 'ExtraLarge');
                    })(bt || (bt = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = W.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = W.small.height)] = 'Small'),
                            (e[(e.Medium = W.medium.height)] = 'Medium'),
                            (e[(e.Large = W.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = W.extraLarge.height)] = 'ExtraLarge');
                    })(pt || (pt = {}));
                const gt = () => {
                        const e = (0, n.useContext)(K),
                            u = e.width,
                            t = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return Dt.ExtraLarge;
                                    case e.large:
                                        return Dt.Large;
                                    case e.medium:
                                        return Dt.Medium;
                                    case e.small:
                                        return Dt.Small;
                                    case e.extraSmall:
                                        return Dt.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), Dt.ExtraSmall;
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return bt.ExtraLarge;
                                    case e.largeWidth:
                                        return bt.Large;
                                    case e.mediumWidth:
                                        return bt.Medium;
                                    case e.smallWidth:
                                        return bt.Small;
                                    case e.extraSmallWidth:
                                        return bt.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), bt.ExtraSmall;
                                }
                            })(e),
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return pt.ExtraLarge;
                                    case e.largeHeight:
                                        return pt.Large;
                                    case e.mediumHeight:
                                        return pt.Medium;
                                    case e.smallHeight:
                                        return pt.Small;
                                    case e.extraSmallHeight:
                                        return pt.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), pt.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: i, mediaHeight: s, remScreenWidth: u, remScreenHeight: t };
                    },
                    Ct = 'Grabber_base_cf',
                    Bt = 'Grabber_base__enabled_b0',
                    ht = 'Grabber_base__waitingUpdate_1d',
                    ft = 'Grabber_base__updating_f1',
                    vt = 'Grabber_base__active_71',
                    St = 'Grabber_base__exit_1f',
                    wt = 'Grabber_base__showAnimation_d9',
                    yt = a().memo(
                        ({
                            children: e,
                            id: u,
                            containerRef: t,
                            isEnabled: i = !0,
                            onClick: s,
                            forceCenterX: r,
                            isUpdateAvailable: l,
                            handleAction: c,
                            blockOnGrabIds: _ = [],
                        }) => {
                            const d = gt().mediaSize,
                                E = (0, n.useRef)({
                                    actualX: 0,
                                    clickCenterOffset: 0,
                                    dropCenterX: 0,
                                    grabActivationPassed: !1,
                                    isDragActive: !1,
                                    id: u,
                                }),
                                A = (0, n.useRef)({
                                    isValid: !1,
                                    startX: 0,
                                    startCenterX: 0,
                                    minXRestriction: 0,
                                    maxXRestriction: 8e3,
                                }),
                                m = (0, n.useRef)(null),
                                F = (0, n.useState)(!1),
                                D = F[0],
                                b = F[1],
                                p = (0, n.useState)(0),
                                g = p[0],
                                C = p[1],
                                h = 0 !== r && i;
                            (0, n.useEffect)(() => {
                                if (((A.current.isValid = !1), u))
                                    return P(() => {
                                        const e = m.current,
                                            n = t.current;
                                        if (n && e) {
                                            const t = e.getBoundingClientRect(),
                                                a = n.getBoundingClientRect(),
                                                i = t.left + 0.5 * t.width;
                                            (A.current = {
                                                isValid: !0,
                                                minXRestriction: a.left,
                                                maxXRestriction: a.left + a.width,
                                                startX: t.left,
                                                startCenterX: i,
                                            }),
                                                c(mu.Ready, { dragId: u, currentCenterX: i });
                                        }
                                    });
                            }, [d]);
                            const f = (0, n.useCallback)(
                                    (e) => {
                                        (E.current.isDragActive = e),
                                            b(e),
                                            E.current.grabActivationPassed && !e && _u(!1, _);
                                    },
                                    [_],
                                ),
                                v = (0, n.useCallback)(() => {
                                    c(mu.DragStart, { dragId: E.current.id }),
                                        (E.current.grabActivationPassed = !0),
                                        _u(!0, _);
                                }, [c, _]),
                                S = (0, n.useCallback)((e) => {
                                    const u = E.current,
                                        t = A.current,
                                        n = t.startX,
                                        a = t.startCenterX,
                                        i = t.minXRestriction,
                                        s = t.maxXRestriction,
                                        r = a - n,
                                        o = e - u.clickCenterOffset;
                                    u.dropCenterX = ((e, u, t, n) => {
                                        const a = t + u,
                                            i = n - u;
                                        return e < a ? a : e > i ? i : e;
                                    })(o, r, i, s);
                                }, []),
                                w = (0, n.useCallback)(
                                    (e) => {
                                        const u = E.current,
                                            t = A.current;
                                        0 === e.button &&
                                            !u.isDragActive &&
                                            t.isValid &&
                                            i &&
                                            !l &&
                                            m.current &&
                                            ((u.actualX = e.clientX),
                                            (u.clickCenterOffset = u.actualX - t.startCenterX),
                                            f(!0));
                                    },
                                    [i, l, f],
                                ),
                                y = (0, n.useCallback)(() => {
                                    !s || (i && A.current.isValid) || s();
                                }, [i, s]),
                                x = (0, n.useCallback)(
                                    (e) => {
                                        const u = E.current;
                                        e.target === m.current &&
                                            u.grabActivationPassed &&
                                            ((u.grabActivationPassed = !1),
                                            setTimeout(() => c(mu.DropExit, { dragId: u.id })));
                                    },
                                    [c],
                                );
                            su(au.n.ESCAPE, () => f(!1)),
                                (0, n.useEffect)(() => {
                                    i && r && C(0);
                                }, [r, i]);
                            const T = !D && E.current.grabActivationPassed;
                            (0, n.useEffect)(() => {
                                E.current.id = u;
                            }, [u]),
                                (0, n.useEffect)(() => {
                                    T && c(mu.Drop, { dragId: E.current.id, currentCenterX: E.current.dropCenterX });
                                }, [T, c]),
                                (0, n.useEffect)(() => {
                                    const e = m.current;
                                    if (h && e)
                                        return (
                                            e.addEventListener('transitionend', x),
                                            () => {
                                                e.removeEventListener('transitionend', x);
                                            }
                                        );
                                }, [h, x]),
                                (0, n.useEffect)(() => {
                                    if (i && D && E.current.id) {
                                        const e = B.O.client.events.mouse.up(([e, u]) => {
                                                if ('outside' === u) return f(!1);
                                                const t = E.current,
                                                    n = e.clientX;
                                                n === t.actualX && 0 === e.button && !E.current.grabActivationPassed
                                                    ? s && s()
                                                    : E.current.grabActivationPassed && S(n),
                                                    E.current.isDragActive && f(!1);
                                            }),
                                            u = B.O.client.events.mouse.move(([e]) => {
                                                const u = E.current;
                                                if ((0 === e.clientX && 0 === e.clientY) || !u.isDragActive) return;
                                                const t = e.clientX,
                                                    n = u.grabActivationPassed;
                                                !n && v(),
                                                    t !== u.actualX &&
                                                        ((u.actualX = t),
                                                        S(t),
                                                        n &&
                                                            c(mu.Drag, { dragId: u.id, currentCenterX: u.dropCenterX }),
                                                        C(u.dropCenterX - A.current.startCenterX));
                                            });
                                        return () => {
                                            u(), e();
                                        };
                                    }
                                }, [v, c, D, i, s, f, S]);
                            const k = (0, n.useMemo)(
                                    () => (r ? { left: r - A.current.startCenterX } : { left: g }),
                                    [g, r],
                                ),
                                I = i ? o()(Ct, Bt, D && vt, T && St, h && ht, r && ft) : o()(Ct, r && wt);
                            return a().createElement(
                                'div',
                                { id: u, ref: m, onClick: y, onMouseDown: w, className: I, style: k },
                                e,
                            );
                        },
                    );
                let xt;
                !(function (e) {
                    (e[(e.Normal = 0)] = 'Normal'), (e[(e.Current = 1)] = 'Current'), (e[(e.Next = 2)] = 'Next');
                })(xt || (xt = {}));
                const Tt = 'KeyLabel_base_ec',
                    kt = 'KeyLabel_base__current_c2',
                    It = 'KeyLabel_base__next_fa',
                    Ot = ({ text: e, show: u, panelType: t, shellState: n }) => {
                        if (!e) return null;
                        e = 'KEY_NONE' === e ? '..' : R.strings.readable_key_names.$dyn(e);
                        const i = o()(Tt, n === xt.Current && kt, n === xt.Next && It);
                        return a().createElement(
                            'div',
                            { className: i },
                            a().createElement(Nu, { isTruncated: !0, text: e, show: u, panelType: t }),
                        );
                    },
                    Rt = ['children'];
                function Nt() {
                    return (
                        (Nt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Nt.apply(this, arguments)
                    );
                }
                const Lt = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, Rt);
                        return a().createElement(
                            me,
                            Nt(
                                {
                                    contentId:
                                        R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                            'resId',
                                        ),
                                    ignoreShowDelay: !0,
                                },
                                t,
                            ),
                            u,
                        );
                    },
                    Mt = ({ children: e, slotType: u, slotId: t, isEnabled: i = !0 }) => {
                        const s = (0, n.useMemo)(() => ({ slotType: u, slotId: t }), [u, t]);
                        return a().createElement(Lt, { isEnabled: i, args: s }, a().createElement('div', null, e));
                    },
                    Pt = 'Close_base_f3',
                    Ht = 'Close_base__invisible_0e',
                    $t = 'Close_base__shown_a2',
                    zt = 'Close_base__hover_6d',
                    Wt = 'Close_base__down_2b',
                    Gt = (0, n.memo)(
                        ({ id: e, show: u = !0, onClick: t, soundHover: i = 'highlight', soundClick: s = 'play' }) => {
                            const r = (0, n.useState)(!1),
                                l = r[0],
                                c = r[1],
                                _ = (0, n.useState)(!1),
                                d = _[0],
                                E = _[1],
                                A = (0, n.useState)(!1),
                                m = A[0],
                                F = A[1],
                                D = (0, n.useCallback)((e) => {
                                    e.stopPropagation();
                                }, []),
                                b = (0, n.useCallback)(() => {
                                    E(!0), i && ge(i);
                                }, [i]),
                                p = (0, n.useCallback)(() => {
                                    c(!1), E(!1);
                                }, []),
                                g = (0, n.useCallback)(
                                    (e) => {
                                        u && 0 === e.button && (c(!0), s && ge(s));
                                    },
                                    [u, s],
                                ),
                                C = (0, n.useCallback)(
                                    (e) => {
                                        u && 0 === e.button && t && t();
                                    },
                                    [u, t],
                                );
                            (0, n.useEffect)(
                                () =>
                                    P(() => {
                                        F(!0);
                                    }),
                                [],
                            );
                            const B = o()(Pt, !m && Ht, m && u && $t, l && Wt, d && zt);
                            return a().createElement('div', {
                                id: e,
                                onMouseOver: b,
                                onMouseLeave: p,
                                onMouseDown: g,
                                onMouseUp: C,
                                className: B,
                                onClick: D,
                            });
                        },
                    ),
                    Ut = 'Slot_base_3a',
                    jt = 'Slot_label_e6',
                    Vt = 'Slot_close_bb',
                    Xt = 'Slot_disabled_5d',
                    qt = 'Slot_shadow_a7',
                    Kt = 'Slot_category_2c';
                let Yt;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(Yt || (Yt = {}));
                const Zt = ({
                        children: e,
                        contentID: u,
                        decoratorID: t = 0,
                        targetId: a = 0,
                        args: i,
                        isEnabled: s = !0,
                        onMouseDown: r,
                    }) => {
                        const o = (0, n.useCallback)(() => {
                                (0, b.c9)(b.B0.CONTEXT_MENU, {
                                    contentID: u,
                                    decoratorID: t,
                                    targetID: a,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: i,
                                }),
                                    Ce.playYes();
                            }, [i, u, t, a]),
                            l = (0, n.useCallback)(() => {
                                (0, b.c9)(b.B0.CONTEXT_MENU, {
                                    contentID: u,
                                    decoratorID: t,
                                    targetID: a,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [u, t, a]),
                            c = (0, n.useCallback)(
                                (e) => {
                                    r && r(e), ((e) => e.button === Yt.RIGHT)(e) && o();
                                },
                                [r, o],
                            );
                        return (
                            (0, n.useEffect)(() => {
                                !1 === s && l();
                            }, [s, l]),
                            s ? (0, n.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    Qt = ['children'];
                function Jt() {
                    return (
                        (Jt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Jt.apply(this, arguments)
                    );
                }
                const en = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, Qt);
                        return a().createElement(
                            Zt,
                            Jt({}, t, { contentID: R.views.common.BackportContextMenu('resId') }),
                            u,
                        );
                    },
                    un = 'select',
                    tn = 'undo',
                    nn = 'swap',
                    an = 'demount',
                    sn = 'demount_from_setups',
                    rn = 'destroy',
                    on = 1600;
                let ln;
                !(function (e) {
                    (e.RIGHT = 'Right'),
                        (e.LEFT = 'Left'),
                        (e.SWAP = 'Swap'),
                        (e.FITTING = 'Fitting'),
                        (e.FITTING_REMOVE = 'FittingRemove'),
                        (e.FADE = 'Fade'),
                        (e.DESTROY = 'Destroy'),
                        (e.DEMOUNT = 'Demount');
                })(ln || (ln = {}));
                const cn = { [nn]: 200, [tn]: 250, [un]: 250, [rn]: 1400, [an]: on, [sn]: on, demount_from_setup: on },
                    _n = 'BackEffects_shine_f6',
                    dn = 'BackEffects_sparks_55',
                    En = 'BackEffects_nut_79',
                    An = 'BackEffects_wrench_5a',
                    mn = { enterActive: 'BackEffects_shine__enterActive_54' },
                    Fn = { enterActive: 'BackEffects_sparks__enterActive_79' },
                    Dn = { enterActive: 'BackEffects_nut__enterActive_b8' },
                    bn = { enterActive: 'BackEffects_wrench__enterActive_ca' },
                    pn = [an, sn],
                    gn = a().memo(({ in: e, actionType: u }) =>
                        a().createElement(
                            a().Fragment,
                            null,
                            a().createElement(
                                He.Z,
                                { in: e, timeout: 200, classNames: mn },
                                a().createElement('div', { className: _n }),
                            ),
                            a().createElement(
                                He.Z,
                                { in: e, timeout: 400, classNames: Fn },
                                a().createElement('div', { className: dn }),
                            ),
                            pn.includes(u) &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement(
                                        He.Z,
                                        { in: e, timeout: 600, classNames: Dn },
                                        a().createElement('div', { className: En }),
                                    ),
                                    a().createElement(
                                        He.Z,
                                        { in: e, timeout: 600, classNames: bn },
                                        a().createElement('div', { className: An }),
                                    ),
                                ),
                        ),
                    ),
                    Cn = 'ColorMask_base_60',
                    Bn = 'ColorMask_base__enterActive_62',
                    hn = ({ in: e, maskImage: u }) => {
                        const t = (0, n.useMemo)(() => ({ enterActive: Bn }), []),
                            i = (0, n.useMemo)(() => ({ maskImage: `url(${u})` }), [u]);
                        return a().createElement(
                            He.Z,
                            { in: e, timeout: 1200, classNames: t },
                            a().createElement('div', { className: Cn, style: i }),
                        );
                    },
                    fn = {
                        base__exitLeft: 'SlotTransitions_base__exitLeft_d8',
                        'animation-left': 'SlotTransitions_animation-left_27',
                        base__exitLeftFade: 'SlotTransitions_base__exitLeftFade_53',
                        'animation-fade': 'SlotTransitions_animation-fade_ce',
                        base__enterRight: 'SlotTransitions_base__enterRight_bb',
                        'animation-right': 'SlotTransitions_animation-right_31',
                        base__enterRightFade: 'SlotTransitions_base__enterRightFade_63',
                        base__exitRight: 'SlotTransitions_base__exitRight_b9',
                        base__enterLeft: 'SlotTransitions_base__enterLeft_e9',
                        base__exitRightSwap: 'SlotTransitions_base__exitRightSwap_64',
                        'animation-right-long': 'SlotTransitions_animation-right-long_bd',
                        base__enterRightSwap: 'SlotTransitions_base__enterRightSwap_5e',
                        base__enterLeftSwap: 'SlotTransitions_base__enterLeftSwap_da',
                        'animation-left-long': 'SlotTransitions_animation-left-long_ec',
                        base__exitLeftSwap: 'SlotTransitions_base__exitLeftSwap_c3',
                        base__exitFade: 'SlotTransitions_base__exitFade_4c',
                        base__enterFade: 'SlotTransitions_base__enterFade_77',
                        base: 'SlotTransitions_base_6d',
                        base__enter: 'SlotTransitions_base__enter_54',
                        base__enterFitting: 'SlotTransitions_base__enterFitting_c7',
                        baseShells__exitLeft: 'SlotTransitions_baseShells__exitLeft_1e',
                        'animation-left-shells': 'SlotTransitions_animation-left-shells_0d',
                        baseShells__enterRight: 'SlotTransitions_baseShells__enterRight_66',
                        'animation-right-shells': 'SlotTransitions_animation-right-shells_7c',
                        baseShells__exitRight: 'SlotTransitions_baseShells__exitRight_e4',
                        baseShells__enterLeft: 'SlotTransitions_baseShells__enterLeft_94',
                        baseShells__exitRightSwap: 'SlotTransitions_baseShells__exitRightSwap_fd',
                        'animation-right-long-shells': 'SlotTransitions_animation-right-long-shells_41',
                        baseShells__enterRightSwap: 'SlotTransitions_baseShells__enterRightSwap_41',
                        baseShells__enterLeftSwap: 'SlotTransitions_baseShells__enterLeftSwap_19',
                        'animation-left-long-shells': 'SlotTransitions_animation-left-long-shells_00',
                        baseShells__exitLeftSwap: 'SlotTransitions_baseShells__exitLeftSwap_04',
                        baseShells__exitFade: 'SlotTransitions_baseShells__exitFade_1b',
                        baseShells__enterFade: 'SlotTransitions_baseShells__enterFade_72',
                        baseOptDevices__exitLeft: 'SlotTransitions_baseOptDevices__exitLeft_fe',
                        baseOptDevices__exitLeftFade: 'SlotTransitions_baseOptDevices__exitLeftFade_8a',
                        baseOptDevices__enterRight: 'SlotTransitions_baseOptDevices__enterRight_5d',
                        baseOptDevices__enterRightFade: 'SlotTransitions_baseOptDevices__enterRightFade_2c',
                        baseOptDevices__exitRight: 'SlotTransitions_baseOptDevices__exitRight_72',
                        baseOptDevices__enterLeft: 'SlotTransitions_baseOptDevices__enterLeft_0f',
                        baseOptDevices__exitRightSwap: 'SlotTransitions_baseOptDevices__exitRightSwap_09',
                        baseOptDevices__enterRightSwap: 'SlotTransitions_baseOptDevices__enterRightSwap_04',
                        baseOptDevices__enterLeftSwap: 'SlotTransitions_baseOptDevices__enterLeftSwap_52',
                        baseOptDevices__exitLeftSwap: 'SlotTransitions_baseOptDevices__exitLeftSwap_e9',
                        baseOptDevices__enterFitting: 'SlotTransitions_baseOptDevices__enterFitting_8b',
                        'animation-fitting': 'SlotTransitions_animation-fitting_24',
                        baseOptDevices__exitFittingRemove: 'SlotTransitions_baseOptDevices__exitFittingRemove_fc',
                        'animation-fitting-remove': 'SlotTransitions_animation-fitting-remove_e0',
                        baseOptDevices__exitActiveFitting: 'SlotTransitions_baseOptDevices__exitActiveFitting_d0',
                        baseOptDevices__exitDestroy: 'SlotTransitions_baseOptDevices__exitDestroy_c9',
                        'animation-destroy': 'SlotTransitions_animation-destroy_12',
                        baseOptDevices__enterDestroy: 'SlotTransitions_baseOptDevices__enterDestroy_19',
                        baseOptDevices__exitDemount: 'SlotTransitions_baseOptDevices__exitDemount_e3',
                        'animation-bright-up': 'SlotTransitions_animation-bright-up_8e',
                        'animation-demount': 'SlotTransitions_animation-demount_d8',
                        baseOptDevices__enterDemount: 'SlotTransitions_baseOptDevices__enterDemount_8a',
                        baseOptDevices__exitFade: 'SlotTransitions_baseOptDevices__exitFade_10',
                        baseOptDevices__enterFade: 'SlotTransitions_baseOptDevices__enterFade_cf',
                        baseOptDevices__enterDemountFade: 'SlotTransitions_baseOptDevices__enterDemountFade_57',
                        baseConsumables__exitLeft: 'SlotTransitions_baseConsumables__exitLeft_d9',
                        baseConsumables__exitLeftFade: 'SlotTransitions_baseConsumables__exitLeftFade_4f',
                        baseConsumables__enterRight: 'SlotTransitions_baseConsumables__enterRight_02',
                        baseConsumables__enterRightFade: 'SlotTransitions_baseConsumables__enterRightFade_c6',
                        baseConsumables__exitRight: 'SlotTransitions_baseConsumables__exitRight_39',
                        baseConsumables__enterLeft: 'SlotTransitions_baseConsumables__enterLeft_97',
                        baseConsumables__exitRightSwap: 'SlotTransitions_baseConsumables__exitRightSwap_8a',
                        baseConsumables__enterRightSwap: 'SlotTransitions_baseConsumables__enterRightSwap_28',
                        baseConsumables__enterLeftSwap: 'SlotTransitions_baseConsumables__enterLeftSwap_8e',
                        baseConsumables__exitLeftSwap: 'SlotTransitions_baseConsumables__exitLeftSwap_0e',
                        baseConsumables__enterFitting: 'SlotTransitions_baseConsumables__enterFitting_13',
                        baseConsumables__exitFittingRemove: 'SlotTransitions_baseConsumables__exitFittingRemove_01',
                        baseConsumables__exitActiveFitting: 'SlotTransitions_baseConsumables__exitActiveFitting_10',
                        baseConsumables__exitFade: 'SlotTransitions_baseConsumables__exitFade_5b',
                        baseConsumables__enterFade: 'SlotTransitions_baseConsumables__enterFade_bd',
                        baseBattleAbilities__exitLeft: 'SlotTransitions_baseBattleAbilities__exitLeft_52',
                        baseBattleAbilities__exitLeftFade: 'SlotTransitions_baseBattleAbilities__exitLeftFade_a9',
                        baseBattleAbilities__enterRight: 'SlotTransitions_baseBattleAbilities__enterRight_7b',
                        baseBattleAbilities__enterRightFade: 'SlotTransitions_baseBattleAbilities__enterRightFade_d3',
                        baseBattleAbilities__exitRight: 'SlotTransitions_baseBattleAbilities__exitRight_fc',
                        baseBattleAbilities__enterLeft: 'SlotTransitions_baseBattleAbilities__enterLeft_97',
                        baseBattleAbilities__exitRightSwap: 'SlotTransitions_baseBattleAbilities__exitRightSwap_7d',
                        baseBattleAbilities__enterRightSwap: 'SlotTransitions_baseBattleAbilities__enterRightSwap_e5',
                        baseBattleAbilities__enterLeftSwap: 'SlotTransitions_baseBattleAbilities__enterLeftSwap_ca',
                        baseBattleAbilities__exitLeftSwap: 'SlotTransitions_baseBattleAbilities__exitLeftSwap_c0',
                        baseBattleAbilities__enterFitting: 'SlotTransitions_baseBattleAbilities__enterFitting_de',
                        baseBattleAbilities__exitFittingRemove:
                            'SlotTransitions_baseBattleAbilities__exitFittingRemove_bc',
                        baseBattleAbilities__exitActiveFitting:
                            'SlotTransitions_baseBattleAbilities__exitActiveFitting_3d',
                        baseBattleAbilities__exitFade: 'SlotTransitions_baseBattleAbilities__exitFade_21',
                        baseBattleAbilities__enterFade: 'SlotTransitions_baseBattleAbilities__enterFade_15',
                        baseBattleBoosters__enterFitting: 'SlotTransitions_baseBattleBoosters__enterFitting_56',
                        baseBattleBoosters__exitFittingRemove:
                            'SlotTransitions_baseBattleBoosters__exitFittingRemove_e5',
                        baseBattleBoosters__exitActiveFitting:
                            'SlotTransitions_baseBattleBoosters__exitActiveFitting_f1',
                    },
                    vn = { enter: fn.base__enter, exit: fn.base__enter },
                    Sn = a().memo(
                        ({
                            children: e,
                            slotIndex: u,
                            uniqueKey: t,
                            slotType: i,
                            isEmpty: s = !1,
                            imageSource: r,
                            itemInstalledSetupIdx: o,
                        }) => {
                            const l = N('model.lastSlotAction'),
                                c = l.leftID,
                                _ = l.rightID,
                                d = l.leftIntCD,
                                E = l.rightIntCD,
                                A = l.actionType,
                                m = l.intCD,
                                F = (0, n.useState)(!0),
                                D = F[0],
                                b = F[1],
                                p = (0, n.useState)(!0),
                                g = p[0],
                                C = p[1],
                                B = (0, n.useState)(r),
                                h = B[0],
                                f = B[1],
                                v = (0, n.useState)(t),
                                S = v[0],
                                w = v[1],
                                y = (0, n.useState)(o),
                                x = y[0],
                                T = y[1],
                                k = (0, n.useRef)(),
                                I = (0, n.useRef)(),
                                O = (m === t || m === S) && x !== o && [rn, an, sn].includes(A),
                                R = -1 === d || -1 === E,
                                L = i ? `base${i[0].toUpperCase() + i.slice(1)}` : 'base',
                                M = cn[A] || 0;
                            (0, n.useEffect)(
                                () => () => {
                                    k.current && clearTimeout(k.current), I.current && clearTimeout(I.current);
                                },
                                [],
                            ),
                                (0, n.useEffect)(() => {
                                    s || f(r);
                                }, [s, r]);
                            const P = (0, n.useCallback)(
                                    (e) => {
                                        const t = Object.assign({}, vn);
                                        switch (A) {
                                            case nn: {
                                                const e = c === u ? ln.RIGHT : ln.LEFT,
                                                    n = _ - c != 1 ? ln.SWAP : '';
                                                (t.enterDone = fn[`${L}__enter${e}${n}`]),
                                                    (t.exit = fn[`${L}__exit${e}${n}`]),
                                                    R &&
                                                        (s
                                                            ? (t.enterDone = fn[`${L}__enter${ln.FADE}`])
                                                            : (t.exit = fn[`${L}__exit${ln.FADE}`]));
                                                break;
                                            }
                                            case rn:
                                                (t.enterDone = fn[`${L}__enter${ln.DESTROY}`]),
                                                    (t.exit = fn[`${L}__exit${ln.DESTROY}`]),
                                                    (k.current = setTimeout(() => b(!0), 900)),
                                                    C(!0);
                                                break;
                                            case sn:
                                            case an:
                                                (t.enter = fn[`${L}__enter${ln.DEMOUNT}${ln.FADE}`]),
                                                    (t.exit = fn[`${L}__exit${ln.DEMOUNT}`]),
                                                    (k.current = setTimeout(() => b(!0), 900));
                                                break;
                                            case un:
                                            case tn:
                                                if (i !== Ke) {
                                                    const e = A === un ? ln.FITTING : ln.FITTING_REMOVE;
                                                    (t.enter = fn[`${L}__enter${e}`]),
                                                        (t.exit = fn[`${L}__exit${e}`]),
                                                        (t.exitActive = fn[`${L}__exitActive${ln.FITTING}`]);
                                                } else
                                                    (t.enterDone = fn[`${L}__enter${ln.FADE}`]),
                                                        (t.exit = fn[`${L}__exit${ln.FADE}`]);
                                                break;
                                            default:
                                                return e;
                                        }
                                        return a().cloneElement(e, { classNames: t, timeout: M });
                                    },
                                    [A, i, L, M, c, u, _, s, R],
                                ),
                                H = (0, n.useCallback)(
                                    (e) => {
                                        I.current = setTimeout(() => {
                                            (e.className = ''), e.classList.add(fn.base), w(t), T(o);
                                        }, M);
                                    },
                                    [M, t, o],
                                ),
                                $ = (0, n.useCallback)(() => {
                                    b(!1), C(!1);
                                }, []);
                            return a().createElement(
                                a().Fragment,
                                null,
                                a().createElement(
                                    Pe.Z,
                                    { component: null, childFactory: P },
                                    a().createElement(
                                        He.Z,
                                        {
                                            key: t,
                                            timeout: M,
                                            classNames: vn,
                                            onEntered: H,
                                            onExiting: $,
                                            unmountOnExit: !0,
                                        },
                                        a().createElement('div', { className: fn.base }, e),
                                    ),
                                ),
                                O &&
                                    a().createElement(
                                        a().Fragment,
                                        null,
                                        a().createElement(gn, { in: D, actionType: A }),
                                        a().createElement(hn, { in: g, maskImage: h }),
                                    ),
                            );
                        },
                    ),
                    wn = a().memo(
                        ({
                            intCD: e,
                            id: u,
                            itemInstalledSetupIdx: t,
                            isMountedMoreThanOne: i,
                            isInstalled: s,
                            isDisabled: r,
                            imageSource: o,
                            isEmpty: l,
                            slotIndex: c,
                            slotType: _,
                            isBootCamp: d,
                            contextMenuDisabled: E,
                            isSetupSwitching: A,
                            children: m,
                        }) => {
                            const F = (0, n.useMemo)(
                                () => ({
                                    intCD: e,
                                    slotType: _,
                                    installedSlotId: u,
                                    isMounted: s,
                                    fieldType: 1,
                                    itemInstalledSetupIdx: t,
                                    itemInstalledSetupSlotIdx: u,
                                    isMountedMoreThanOne: i,
                                }),
                                [e, _, u, t, s, i],
                            );
                            return a().createElement(
                                Sn,
                                {
                                    uniqueKey: e,
                                    isEmpty: l,
                                    slotIndex: c,
                                    slotType: _,
                                    imageSource: o,
                                    itemInstalledSetupIdx: t,
                                },
                                a().createElement(
                                    en,
                                    { isEnabled: !(A || E || r || l || d), args: F },
                                    a().createElement('div', null, m),
                                ),
                            );
                        },
                    ),
                    yn = ({
                        id: e,
                        intCD: u,
                        slotType: t,
                        imageSource: i,
                        isInstalled: s,
                        itemInstalledSetupIdx: r,
                        isMountedMoreThanOne: o,
                        overlayType: l,
                        keyName: c,
                        slotIndex: _,
                        level: d,
                        isBootCamp: E,
                        isSelected: A,
                        isSetupSwitching: m,
                        isSectionSelected: F,
                        withAttention: D,
                        onActiveSlotChanged: b,
                        onSlotSelected: p,
                        onActiveSlotRefChanged: g,
                        onSlotClear: C,
                        panelType: B,
                        isDisabled: h = !1,
                        isBorderActive: f,
                        isIncompatible: v = !1,
                        grabberId: S,
                        containerRef: w,
                        activeDragId: y,
                        handleGrabberAction: x,
                        forceLeftUpdate: T,
                        potentialDropId: k,
                        blockOnGrabIds: I,
                        categoryImgSource: O,
                        contextMenuDisabled: R,
                    }) => {
                        const N = B === Ue.Setup,
                            L = !qe(B),
                            M = B === Ue.Compare,
                            H = N && F && L,
                            $ = (0, n.useRef)(!1),
                            z = (0, n.useRef)(null),
                            W = -1 === u;
                        (0, n.useEffect)(() => {
                            if (!$.current && F && A)
                                return P(() => {
                                    b && b(z, t, e), ($.current = !0);
                                });
                            $.current = !0;
                        }, [e, F, A, b, t]),
                            (0, n.useEffect)(() => {
                                A && g(z);
                            }, [A, g]);
                        const G = ((e) => {
                                const u = (0, n.useRef)(-1),
                                    t = (0, n.useCallback)(
                                        (t) => {
                                            if (-1 === u.current) {
                                                const n = e(t);
                                                n &&
                                                    (u.current = window.setTimeout(() => {
                                                        u.current = -1;
                                                    }, n));
                                            }
                                        },
                                        [e],
                                    );
                                return (0, n.useEffect)(() => () => clearTimeout(u.current), []), t;
                            })((0, n.useCallback)(() => (!A && L && !m && p(t, e), 500), [e, L, A, m, p, t])),
                            U = (0, n.useCallback)(() => {
                                h || G('');
                            }, [G, h]),
                            j = (0, n.useCallback)(() => {
                                !A && !y && !h && Ce.playHighlight();
                            }, [A, y, h]);
                        (0, n.useEffect)(() => {
                            k && Ce.playHighlight();
                        }, [k]);
                        const V = (0, n.useCallback)(() => {
                                null == C || C(e, t);
                            }, [e, C, t]),
                            X = N && !s,
                            q = Boolean(S && k === S),
                            K = S && (H || M),
                            Y = `${t}-slot-${e}`,
                            Z = O && O.length > 0,
                            Q = Z ? { backgroundImage: `url(${O})` } : {},
                            J = {
                                id: S,
                                containerRef: w,
                                isEnabled: !W,
                                onClick: U,
                                isUpdateAvailable: Boolean(y),
                                handleAction: x,
                                forceCenterX: T,
                                blockOnGrabIds: I,
                            },
                            ee = {
                                isEmpty: W,
                                intCD: u,
                                slotType: t,
                                slotIndex: _,
                                imageSource: i,
                                isBootCamp: E,
                                isDisabled: h,
                                isInstalled: s,
                                id: e,
                                itemInstalledSetupIdx: r,
                                isMountedMoreThanOne: o,
                                contextMenuDisabled: R,
                                isSetupSwitching: m,
                            };
                        return a().createElement(
                            'div',
                            { className: Ut, onMouseEnter: j, id: Y },
                            (F || M) &&
                                !s &&
                                a().createElement(
                                    'div',
                                    { className: Vt },
                                    a().createElement(Gt, { id: `close-${Y}`, show: !y, onClick: V }),
                                ),
                            a().createElement(
                                Mt,
                                { slotType: t, slotId: e, isEnabled: !y && Xe(B) },
                                a().createElement(
                                    'div',
                                    { ref: z },
                                    a().createElement(
                                        rt,
                                        {
                                            activeDragId: y,
                                            slotType: t,
                                            isSelected: A,
                                            isBorderActive: Boolean(f),
                                            panelType: B,
                                            isDisabled: h,
                                            isPotentialDrop: q,
                                            onClick: K ? void 0 : U,
                                        },
                                        L &&
                                            a().createElement(
                                                'div',
                                                { className: jt },
                                                a().createElement(Ot, { text: c, show: Boolean(F), panelType: B }),
                                            ),
                                        a().createElement(
                                            it,
                                            { when: Boolean(K), wrapper: yt, withProps: J },
                                            a().createElement(
                                                it,
                                                { when: L, wrapper: wn, withProps: ee },
                                                a().createElement(Ft, {
                                                    imageSource: i,
                                                    isIncompatible: v,
                                                    overlayType: l,
                                                    level: d,
                                                    isTemporary: X,
                                                    withAttention: D,
                                                }),
                                            ),
                                        ),
                                        Z &&
                                            a().createElement(
                                                a().Fragment,
                                                null,
                                                a().createElement('span', { className: qt }),
                                                a().createElement('span', { className: Kt, style: Q }),
                                            ),
                                        h && a().createElement('div', { className: Xt }),
                                    ),
                                ),
                            ),
                        );
                    },
                    xn = 'BattleAbilitySlot_base_74',
                    Tn = 'BattleAbilitySlot_rank_01',
                    kn = ['rank'];
                const In = (0, n.memo)((e) => {
                        let u = e.rank,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, kn);
                        const i = (0, n.useMemo)(() => ({ backgroundImage: `url(${u})` }), [u]),
                            s = o()(xn);
                        return a().createElement(
                            'div',
                            { className: s },
                            a().createElement(yn, t),
                            u && a().createElement('div', { className: Tn, style: i }),
                        );
                    }),
                    On = {
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
                let Rn, Nn;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(Rn || (Rn = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(Nn || (Nn = {}));
                const Ln = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: i,
                    disabled: s,
                    mixClass: r,
                    soundHover: l,
                    soundClick: c,
                    onMouseEnter: _,
                    onMouseMove: d,
                    onMouseDown: E,
                    onMouseUp: A,
                    onMouseLeave: m,
                    onClick: F,
                }) => {
                    const D = (0, n.useRef)(null),
                        b = (0, n.useState)(t),
                        p = b[0],
                        g = b[1],
                        C = (0, n.useState)(!1),
                        B = C[0],
                        h = C[1],
                        f = (0, n.useState)(!1),
                        v = f[0],
                        S = f[1],
                        w = (0, n.useCallback)(() => {
                            s || (D.current && (D.current.focus(), g(!0)));
                        }, [s]),
                        y = (0, n.useCallback)(
                            (e) => {
                                p && null !== D.current && !D.current.contains(e.target) && g(!1);
                            },
                            [p],
                        ),
                        x = (0, n.useCallback)(
                            (e) => {
                                s || (F && F(e));
                            },
                            [s, F],
                        ),
                        T = (0, n.useCallback)(
                            (e) => {
                                s || (null !== l && ge(l), _ && _(e), S(!0));
                            },
                            [s, l, _],
                        ),
                        k = (0, n.useCallback)(
                            (e) => {
                                d && d(e);
                            },
                            [d],
                        ),
                        I = (0, n.useCallback)(
                            (e) => {
                                s || (A && A(e), h(!1));
                            },
                            [s, A],
                        ),
                        O = (0, n.useCallback)(
                            (e) => {
                                s || (null !== c && ge(c), E && E(e), t && w(), h(!0));
                            },
                            [s, c, E, w, t],
                        ),
                        N = (0, n.useCallback)(
                            (e) => {
                                s || (m && m(e), h(!1));
                            },
                            [s, m],
                        ),
                        L = o()(
                            On.base,
                            On[`base__${i}`],
                            {
                                [On.base__disabled]: s,
                                [On[`base__${u}`]]: u,
                                [On.base__focus]: p,
                                [On.base__highlightActive]: B,
                                [On.base__firstHover]: v,
                            },
                            r,
                        ),
                        M = o()(On.state, On.state__default);
                    return (
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mousedown', y),
                                () => {
                                    document.removeEventListener('mousedown', y);
                                }
                            ),
                            [y],
                        ),
                        (0, n.useEffect)(() => {
                            g(t);
                        }, [t]),
                        a().createElement(
                            'div',
                            {
                                ref: D,
                                className: L,
                                onMouseEnter: T,
                                onMouseMove: k,
                                onMouseUp: I,
                                onMouseDown: O,
                                onMouseLeave: N,
                                onClick: x,
                            },
                            i !== Rn.ghost &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: On.back }),
                                    a().createElement('span', { className: On.texture }),
                                ),
                            a().createElement(
                                'span',
                                { className: M },
                                a().createElement('span', { className: On.stateDisabled }),
                                a().createElement('span', { className: On.stateHighlightHover }),
                                a().createElement('span', { className: On.stateHighlightActive }),
                            ),
                            a().createElement(
                                'span',
                                { className: On.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                Ln.defaultProps = { type: Rn.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const Mn = (0, n.memo)(Ln),
                    Pn = {
                        base: 'Specialization_base_ec',
                        base__tiny: 'Specialization_base__tiny_fe',
                        base__small: 'Specialization_base__small_a3',
                        base__medium: 'Specialization_base__medium_85',
                        base__large: 'Specialization_base__large_07',
                        base__huge: 'Specialization_base__huge_33',
                        base__setup: 'Specialization_base__setup_5e',
                        base__correct: 'Specialization_base__correct_4c',
                        glow: 'Specialization_glow_f0',
                        icon: 'Specialization_icon_3a',
                        icon__tiny: 'Specialization_icon__tiny_05',
                        icon__small: 'Specialization_icon__small_cf',
                        icon__medium: 'Specialization_icon__medium_ed',
                        icon__large: 'Specialization_icon__large_98',
                        icon__huge: 'Specialization_icon__huge_f7',
                        specializationWrapper: 'Specialization_specializationWrapper_bf',
                        specializationButton: 'Specialization_specializationButton_45',
                    },
                    Hn = ({
                        name: e,
                        isCorrect: u,
                        isSpecializationActive: t = !0,
                        isDynamic: i,
                        mediaSize: s,
                        isClickable: r,
                        onSpecializationClick: l,
                        index: c,
                    }) => {
                        const _ = s !== ru.None,
                            d = (0, n.useCallback)(() => {
                                r && t && l && l(c);
                            }, [c, r, t, l]),
                            E = (0, n.useMemo)(() => {
                                let t = '';
                                _ && (t = (s === ru.Large || s === ru.Huge ? ru.Large : ru.Medium) + '_');
                                const n = `${t}${e}_${u ? 'on' : 'off'}`,
                                    a = R.images.gui.maps.icons.specialization.$dyn(n);
                                return a && { backgroundImage: `url(${a})` };
                            }, [e, u, s, _]),
                            A = (0, n.useMemo)(
                                () => ({ spec: e, isDyn: i, isClickable: r, tooltip: 'hangarSlotSpec' }),
                                [e, i, r],
                            );
                        if (!E) return null;
                        const m = o()(
                                `specialization-${e}`,
                                Pn.base,
                                _ && Pn[`base__${s}`],
                                t && Pn.base__setup,
                                u && Pn.base__correct,
                            ),
                            F = o()(Pn.icon, _ && Pn[`icon__${s}`]),
                            D = _ ? '' : Pn.specializationWrapper,
                            b = a().createElement(
                                'div',
                                { key: e, className: m },
                                a().createElement('div', { className: Pn.glow }),
                                a().createElement('div', { className: F, style: E }),
                            );
                        return a().createElement(
                            Lt,
                            { args: A },
                            r && t
                                ? a().createElement(
                                      Mn,
                                      { size: Nn.small, type: Rn.ghost, mixClass: Pn.specializationButton, onClick: d },
                                      b,
                                  )
                                : a().createElement('div', { className: D }, b),
                        );
                    },
                    $n = 'Specializations_base_ab';
                function zn() {
                    return (
                        (zn =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        zn.apply(this, arguments)
                    );
                }
                const Wn = ({
                        specializations: e,
                        isSpecializationActive: u = !0,
                        isDynamic: t,
                        mediaSize: n = ru.None,
                        activeSpecsMask: i,
                        onSpecializationClick: s,
                    }) =>
                        e.length
                            ? a().createElement(
                                  'div',
                                  { className: $n, key: i },
                                  te(e, (e, i) =>
                                      a().createElement(
                                          Hn,
                                          zn({ index: i, key: e.name }, e, {
                                              isSpecializationActive: u,
                                              isDynamic: t,
                                              mediaSize: n,
                                              onSpecializationClick: s,
                                          }),
                                      ),
                                  ),
                              )
                            : null,
                    Gn = 'OptDeviceSlot_base_14',
                    Un = 'OptDeviceSlot_specializations_c3',
                    jn = ['specializations', 'activeSpecsMask', 'isChangeSetupIndex', 'isDynamic'];
                const Vn = (e) => {
                        let u = e.specializations,
                            t = e.activeSpecsMask,
                            n = e.isChangeSetupIndex,
                            i = e.isDynamic,
                            s = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, jn);
                        const r = I('model.ammunitionPanel', k.None).onSpecializationSelect,
                            l = s.panelType === Ue.Setup || s.panelType === Ue.Compare,
                            c = !qe(s.panelType);
                        return a().createElement(
                            'div',
                            { className: o()(Gn, u.length && !i && !n && 'specializationsSlot') },
                            c &&
                                a().createElement(
                                    'div',
                                    { className: Un },
                                    a().createElement(Wn, {
                                        specializations: u,
                                        isDynamic: i,
                                        activeSpecsMask: t,
                                        isSpecializationActive: l,
                                        onSpecializationClick: (e) => {
                                            r({ slotId: s.id, specializationIndex: e });
                                        },
                                    }),
                                ),
                            a().createElement(yn, s),
                        );
                    },
                    Xn = {
                        base: 'ToggleCamouflageSlot_base_17',
                        base__grabbing: 'ToggleCamouflageSlot_base__grabbing_79',
                        base__hangar: 'ToggleCamouflageSlot_base__hangar_e7',
                        base__setup: 'ToggleCamouflageSlot_base__setup_44',
                        base__compare: 'ToggleCamouflageSlot_base__compare_0d',
                        base__selected: 'ToggleCamouflageSlot_base__selected_0c',
                        base__dragIn: 'ToggleCamouflageSlot_base__dragIn_68',
                        base__dragInActive: 'ToggleCamouflageSlot_base__dragInActive_b1',
                        base__toggle: 'ToggleCamouflageSlot_base__toggle_fc',
                        base__disabled: 'ToggleCamouflageSlot_base__disabled_1e',
                        image: 'ToggleCamouflageSlot_image_ee',
                        glow: 'ToggleCamouflageSlot_glow_45',
                        toggle: 'ToggleCamouflageSlot_toggle_c2',
                    },
                    qn = ({ id: e, isSelected: u, isLocked: t, onSlotSelected: i, panelType: s }) => {
                        const r = Je,
                            l = (0, n.useCallback)(() => {
                                i(r, e);
                            }, [e, i, r]),
                            c = o()(Xn.base, Xn[`base__${s}`], t && Xn.base__disabled, u && Xn.base__toggle),
                            _ = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: 'url(R.images.gui.maps.icons.quests.bonuses.small.camouflage)',
                                }),
                                [],
                            ),
                            d = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url(R.images.gui.maps.icons.tanksetup.shells.icon_selected_${u ? 'on' : 'off'})`,
                                }),
                                [u],
                            ),
                            E = `toggle-camouflage-slot-${e}`;
                        return a().createElement(
                            Mt,
                            { slotType: r, slotId: e },
                            a().createElement(
                                'div',
                                { id: E, className: c, onClick: l, onMouseEnter: Ce.playHighlight },
                                u && a().createElement('div', { className: Xn.glow }),
                                a().createElement('div', { className: Xn.image, style: _ }),
                                a().createElement('div', { className: Xn.toggle, style: d }),
                            ),
                        );
                    },
                    Kn = ['value', 'sectionType'];
                function Yn() {
                    return (
                        (Yn =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Yn.apply(this, arguments)
                    );
                }
                const Zn = (e) => {
                        let u = e.value,
                            t = e.sectionType,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (t = i[n]), u.indexOf(t) >= 0 || (a[t] = e[t]);
                                return a;
                            })(e, Kn);
                        switch (t) {
                            case 'optDevices': {
                                const e = u;
                                return a().createElement(
                                    Vn,
                                    Yn({}, e, n, {
                                        specializations: e.specializations.specializations,
                                        isDynamic: e.specializations.isDynamic,
                                    }),
                                );
                            }
                            case Je: {
                                const e = u;
                                return a().createElement(qn, Yn({}, n, e));
                            }
                            case Ze: {
                                const e = u;
                                return a().createElement(In, Yn({}, n, e));
                            }
                            default:
                                return a().createElement(yn, Yn({}, n, u));
                        }
                    },
                    Qn = 'Slots_base_27',
                    Jn = ({
                        slots: e,
                        sectionType: u,
                        panelType: t,
                        isBorderActive: i,
                        onActiveSlotChanged: s,
                        isDisabled: r,
                        isBootCamp: l,
                        selectedSection: c,
                        selectedSlot: _,
                        syncInitiator: d,
                        blockOnGrabIds: E,
                        isChangeSetupIndex: A,
                        setIsExitBlocked: m,
                    }) => {
                        const F = (0, n.useRef)(null),
                            D = (0, n.useRef)(null),
                            b = I('model.ammunitionPanel', k.None),
                            p = b.onSectionSelect,
                            g = b.onDragDropSwap,
                            C = b.onSlotClear,
                            B = (0, n.useCallback)(
                                (e, t) => {
                                    g({
                                        sectionType: u,
                                        dragId: Number(e[e.length - 1]),
                                        dropId: Number(t[t.length - 1]),
                                    });
                                },
                                [g, u],
                            ),
                            h = c === u,
                            f = h ? _ : -1,
                            v = `${u}-${e.length}slots`,
                            S = bu({
                                baseId: v,
                                slotsLength: e.length,
                                handleSwap: B,
                                setIsExitBlocked: m,
                                syncInitiator: d,
                            }),
                            w = S.handleGrabberAction,
                            y = S.dragState,
                            x = S.getForceCenterX;
                        (0, n.useEffect)(() => {
                            h && -1 !== f && F.current && s(F, c, f);
                        }, [s, h, c, f]);
                        const T = (e, u) => {
                                if ((r || Ce.playClick(), 'number' != typeof u))
                                    return console.warn('selectedSlot is not a number');
                                p({ selectedSlot: u, selectedSection: e });
                            },
                            O = (e) => {
                                F.current = e ? e.current : null;
                            },
                            R = (e, u) => {
                                C({ slotId: e, sectionType: u });
                            };
                        return a().createElement(
                            'div',
                            { id: v, ref: D, className: o()(Qn, u) },
                            ae(e, (o, c) => {
                                const _ = u === Ze,
                                    d = !_ && e.length > 1 ? `${v}-${c}` : '';
                                return a().createElement(
                                    n.Fragment,
                                    { key: `${o.id}-${c}` },
                                    c > 0 && a().createElement(at, null),
                                    a().createElement(Zn, {
                                        value: o,
                                        sectionType: u,
                                        panelType: t,
                                        isSelected: f === o.id,
                                        isSectionSelected: h,
                                        isDisabled: r,
                                        isBootCamp: l,
                                        isBorderActive: i,
                                        contextMenuDisabled: _,
                                        slotType: u,
                                        onActiveSlotChanged: s,
                                        onSlotSelected: T,
                                        onActiveSlotRefChanged: O,
                                        onSlotClear: R,
                                        slotIndex: c,
                                        grabberId: d,
                                        containerRef: D,
                                        forceLeftUpdate: x(d),
                                        activeDragId: y.activeDragId,
                                        handleGrabberAction: w,
                                        potentialDropId: y.potentialDropId,
                                        blockOnGrabIds: E,
                                        isSetupSwitching: A,
                                        isChangeSetupIndex: A,
                                    }),
                                );
                            }),
                        );
                    },
                    ea = ({
                        type: e,
                        slots: u,
                        newItemsCount: t,
                        isDisabled: i,
                        panelType: s,
                        onActiveSlotChanged: r,
                        isBorderActive: l,
                        isBootCamp: c = !0,
                        selectedSection: _,
                        selectedSlot: d,
                        syncInitiator: E,
                        sectionsIds: A,
                        onBootcampPanelAppear: m,
                        vehicle: F,
                        vehicleType: D,
                        isSetupSwitching: b,
                        isChangeSetupIndex: p,
                        classMix: g,
                        setIsExitBlocked: C,
                    }) => {
                        const B = (0, n.useRef)(null),
                            h = (0, n.useState)(c),
                            f = h[0],
                            v = h[1],
                            S = (0, n.useMemo)(
                                () =>
                                    s === Ue.Setup
                                        ? e === Ye
                                            ? 'AmmunitionSetupHangarEquipmentSlots'
                                            : 'AmmunitionSetupOptionalDeviceSlots'
                                        : e === Ye
                                          ? 'HangarEquipmentSlots'
                                          : 'HangarOptionalDeviceSlots',
                                [s, e],
                            ),
                            w = ((e, u) => {
                                const t = I('tutorialModel.effects.items').filter((t) => {
                                    if (!t) return !1;
                                    const n = t.value,
                                        a = window.__featureId.toString();
                                    return n.componentId === e && n.type === u && n.viewId === a;
                                });
                                if (0 === t.length) return null;
                                const n = Object.assign({}, t[0].value);
                                return {
                                    effect: n,
                                    completeEffect: () => {
                                        tutorialModel.onEffectCompleted({
                                            componentId: e,
                                            viewId: window.__featureId.toFixed(0),
                                            effectType: u,
                                            effectBuilder: n.builder,
                                        }),
                                            u === vu && window.tutorialApi && window.tutorialApi.updateComponents();
                                    },
                                };
                            })(S, vu);
                        (0, n.useEffect)(
                            () => (
                                null !== w && v(!w.effect.visible),
                                P(() => {
                                    null !== w && w.completeEffect();
                                })
                            ),
                            [w, e],
                        );
                        const y = $();
                        (0, n.useEffect)(() => {
                            y && (y.freeze(), y.resize());
                        }, [u.length, y, S, f]);
                        const x = ((e, u) => {
                            const t = I('tutorialModel.triggers.items').filter((t) => {
                                if (!t) return !1;
                                const n = t.value,
                                    a = n.triggers.filter((e) => e.value === u);
                                return n.componentId === e && a.length > 0;
                            });
                            return 0 === t.length
                                ? null
                                : window.tutorialModel.foundComponents.items.some((u) => u.value.componentId === e)
                                  ? {
                                        trigger: t[0].value,
                                        runTrigger: (t) => {
                                            window.tutorialModel.onTriggerActivated({
                                                componentId: e,
                                                triggerType: u,
                                                state: t,
                                            });
                                        },
                                    }
                                  : null;
                        })('AmmunitionPanelBattleAbilities', wu);
                        (0, n.useEffect)(() => {
                            null == x || x.runTrigger(!0);
                        }, [x]);
                        const T = _ === e,
                            k = Du(e, A),
                            O = k.selfId,
                            N = k.blockOnGrabIds;
                        (0, n.useEffect)(() => {
                            s === Ue.Hangar && v(c);
                        }, [s, c]),
                            (0, n.useEffect)(() => {
                                if (c && !f && m)
                                    return P(() => {
                                        m(), y && y.resize();
                                    });
                            }, [f, c, m, y]);
                        const L =
                                E >= 0 &&
                                (function (e, u) {
                                    if (Array.isArray(e)) return e.some(u);
                                    for (let t = 0; t < e.length; t++) if (u(ue(e, t), t, e)) return !0;
                                    return !1;
                                })(u, (e) => e.intCD > 0),
                            M = o()(
                                Mu,
                                g,
                                f && Pu,
                                T && 'sectionSelected',
                                u.length > 1 && 'multiSlot',
                                L && 'existFilledSlots',
                            ),
                            H = ((F && F.length > 0) || (D && D.length > 0)) && s !== Ue.Battle && s !== Ue.Respawn,
                            z = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: D
                                        ? `url(${R.images.gui.maps.icons.vehicleTypes.extraSmall.$dyn(D)})`
                                        : '',
                                }),
                                [D],
                            ),
                            W = (0, n.useMemo)(
                                () => ({ icon: a().createElement('span', { className: Gu, style: z }), vehicle: F }),
                                [z, F],
                            ),
                            G = u.length > 0 && s !== Ue.Compare && s !== Ue.Battle && s !== Ue.Respawn && u.length > 0,
                            U = R.strings.tank_setup.section.$dyn(e);
                        if ('string' != typeof U)
                            throw new Error(`No top label text for section type ${e} or it's not a string`);
                        return a().createElement(
                            'div',
                            { id: b ? Lu : O, ref: B, className: M },
                            H &&
                                a().createElement(
                                    tt,
                                    { className: zu },
                                    a().createElement(fu, {
                                        classMix: Wu,
                                        text: R.strings.tank_setup.categories.reserves.config(),
                                        binding: W,
                                    }),
                                ),
                            G &&
                                a().createElement(
                                    'div',
                                    { className: Hu },
                                    a().createElement(Nu, { text: U, parentRef: B, show: !T, panelType: s }),
                                ),
                            a().createElement(Jn, {
                                slots: u,
                                sectionType: e,
                                panelType: s,
                                isBorderActive: l,
                                onActiveSlotChanged: r,
                                isDisabled: i,
                                isBootCamp: c,
                                syncInitiator: E,
                                selectedSection: _,
                                selectedSlot: d,
                                blockOnGrabIds: N,
                                isChangeSetupIndex: p,
                                setIsExitBlocked: C,
                            }),
                            Boolean(t) &&
                                a().createElement(
                                    'div',
                                    { className: $u },
                                    a().createElement(Bu, { value: t, size: 'small', fadeInAnimation: !0 }),
                                ),
                        );
                    },
                    ua = 'Count_base_e4',
                    ta = 'Count_base__zero_64',
                    na = ({ count: e }) => {
                        const u = o()(ua, !e && ta);
                        return a().createElement('div', { className: u }, e);
                    },
                    aa = 'ShellsSlot_base_05',
                    ia = 'ShellsSlot_shell_ab',
                    sa = 'ShellsSlot_shell__grabbing_98',
                    ra = 'ShellsSlot_shell__active_7e',
                    oa = 'ShellsSlot_shell__potential_30',
                    la = 'ShellsSlot_label_da',
                    ca = 'ShellsSlot_image_3f',
                    _a = ({
                        id: e,
                        itemInstalledSetupIdx: u,
                        isMountedMoreThanOne: t,
                        imageSource: i,
                        count: s,
                        isSelected: r,
                        keyName: l,
                        panelType: c,
                        intCD: _,
                        slotIndex: d,
                        grabberId: E,
                        isSetupSwitching: A,
                        containerRef: m,
                        activeDragId: F,
                        handleGrabberAction: D,
                        forceLeftUpdate: b,
                        potentialDropId: p,
                        blockOnGrabIds: g,
                        shellState: C,
                        isDisabled: B,
                    }) => {
                        const h = !qe(c),
                            f = (0, n.useMemo)(() => ({ backgroundImage: `url(${i})` }), [i]),
                            v = E && E === p,
                            S = E && E === F,
                            w = (0, n.useMemo)(() => {
                                const n = { slotType: Ke, slotId: e, fieldType: 1, intCD: _ };
                                return [
                                    n,
                                    Object.assign({}, n, {
                                        installedSlotId: e,
                                        itemInstalledSetupIdx: u,
                                        itemInstalledSetupSlotIdx: e,
                                        isMountedMoreThanOne: t,
                                    }),
                                ];
                            }, [_, e, u, t]),
                            y = w[0],
                            x = w[1],
                            T = o()(ia, !F && h && !B && ra, S && sa, !S && v && oa),
                            k = (0, n.useMemo)(
                                () => ({
                                    id: E,
                                    containerRef: m,
                                    isEnabled: Boolean(E) && r,
                                    isUpdateAvailable: Boolean(F),
                                    handleAction: D,
                                    forceCenterX: b,
                                    blockOnGrabIds: g,
                                }),
                                [F, g, m, b, E, D, r],
                            ),
                            I = (0, n.useMemo)(
                                () => ({ slotIndex: d, uniqueKey: _, slotType: Ke, imageSource: null }),
                                [_, d],
                            );
                        return a().createElement(
                            en,
                            { isEnabled: h && !A && !B, args: x },
                            a().createElement(
                                Lt,
                                { args: y, isEnabled: !F && Xe(c) },
                                a().createElement(
                                    'div',
                                    { id: `shell-slot-${d}`, className: aa },
                                    l &&
                                        a().createElement(
                                            'div',
                                            { className: la },
                                            a().createElement(Ot, {
                                                text: l,
                                                show: r || c === Ue.Battle || c === Ue.Respawn,
                                                shellState: C,
                                                panelType: c,
                                            }),
                                        ),
                                    a().createElement(
                                        'div',
                                        { className: T },
                                        a().createElement(
                                            it,
                                            { when: h, wrapper: yt, withProps: k },
                                            a().createElement(
                                                it,
                                                { when: h, wrapper: Sn, withProps: I },
                                                a().createElement('div', { className: ca, style: f }),
                                                a().createElement(na, { count: s }),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    },
                    da = {
                        base: 'ToggleSlot_base_93',
                        slot: 'ToggleSlot_slot_cd',
                        slot__grabbing: 'ToggleSlot_slot__grabbing_df',
                        image: 'ToggleSlot_image_e0',
                        slot__active: 'ToggleSlot_slot__active_15',
                        glow: 'ToggleSlot_glow_48',
                        toggle: 'ToggleSlot_toggle_73',
                    },
                    Ea = ({ id: e, isSelected: u, imageSource: t, onSlotSelected: i }) => {
                        const s = (0, n.useCallback)(() => {
                                !u && i(e);
                            }, [e, u, i]),
                            r = o()(da.slot, !u && da.slot__active, da.slot__compare),
                            l = (0, n.useMemo)(() => ({ backgroundImage: `url(${t})` }), [t]),
                            c = (0, n.useMemo)(
                                () => ({
                                    backgroundImage: `url(R.images.gui.maps.icons.tanksetup.shells.icon_selected_${u ? 'on' : 'off'})`,
                                }),
                                [u],
                            );
                        return a().createElement(
                            Mt,
                            { slotType: Qe, slotId: e },
                            a().createElement(
                                'div',
                                { className: da.base },
                                a().createElement(
                                    'div',
                                    { className: r, onClick: s, id: `shell-slot-${e}` },
                                    u && a().createElement('div', { className: da.glow }),
                                    a().createElement('div', { className: da.image, style: l }),
                                    a().createElement('div', { className: da.toggle, style: c }),
                                ),
                            ),
                        );
                    },
                    Aa = 'Shells_base_f9',
                    ma = 'Shells_shell_3f',
                    Fa = 'Shells_shell__compressed_2e';
                function Da() {
                    return (
                        (Da =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Da.apply(this, arguments)
                    );
                }
                const ba = ({
                        shells: e,
                        panelType: u,
                        onSelected: t,
                        isCompare: i,
                        isSelected: s,
                        syncInitiator: r,
                        blockOnGrabIds: l,
                        isDisabled: c,
                        isSetupSwitching: _,
                        setIsExitBlocked: d,
                    }) => {
                        const E = I('model.ammunitionPanel', k.None),
                            A = E.onSectionSelect,
                            m = E.onDragDropSwap,
                            F = (0, n.useRef)(!1),
                            D = (0, n.useRef)(null),
                            b = i ? Qe : Ke,
                            p = `${b}-${e.length}shells`,
                            g = (0, n.useCallback)(
                                (e) => {
                                    A({ selectedSlot: e, selectedSection: b }), Ce.playClick();
                                },
                                [A, b],
                            ),
                            C = (0, n.useCallback)(() => {
                                s || i || c || _ || g(0);
                            }, [s, i, _, c, g]),
                            B = (0, n.useCallback)(
                                (e, u) => {
                                    m({
                                        sectionType: b,
                                        dragId: Number(e[e.length - 1]),
                                        dropId: Number(u[u.length - 1]),
                                    });
                                },
                                [m, b],
                            ),
                            h = bu({
                                baseId: p,
                                slotsLength: e.length,
                                handleSwap: B,
                                setIsExitBlocked: d,
                                syncInitiator: r,
                            }),
                            f = h.handleGrabberAction,
                            v = h.dragState,
                            S = h.getForceCenterX;
                        return (
                            (0, n.useEffect)(
                                () =>
                                    P(() => {
                                        F.current = !0;
                                    }),
                                [],
                            ),
                            (0, n.useEffect)(() => {
                                if (s && u === Ue.Setup) {
                                    if (!F.current)
                                        return P(() => {
                                            t();
                                        });
                                    t();
                                }
                            }, [s, u, t]),
                            a().createElement(
                                'div',
                                {
                                    id: p,
                                    ref: D,
                                    className: Aa,
                                    onClick: C,
                                    onMouseEnter: () => {
                                        c || Ce.playHighlight();
                                    },
                                },
                                ae(e, (t, n) => {
                                    if (je(t)) return null;
                                    const r = !i && e.length > 1 ? `${p}-${t.id}` : '';
                                    return a().createElement(
                                        'div',
                                        { key: t.id, className: o()(ma, !i && 0 !== n && Fa) },
                                        i
                                            ? a().createElement(Ea, Da({}, t, { onSlotSelected: g }))
                                            : a().createElement(
                                                  _a,
                                                  Da({}, t, {
                                                      slotIndex: n,
                                                      isSetupSwitching: _,
                                                      isSelected: s,
                                                      panelType: u,
                                                      grabberId: r,
                                                      containerRef: D,
                                                      forceLeftUpdate: S(r),
                                                      activeDragId: v.activeDragId,
                                                      handleGrabberAction: f,
                                                      potentialDropId: v.potentialDropId,
                                                      blockOnGrabIds: l,
                                                      isDisabled: c,
                                                  }),
                                              ),
                                    );
                                }),
                            )
                        );
                    },
                    pa = {
                        base: 'ShellsSection_base_08',
                        base__grabbing: 'ShellsSection_base__grabbing_2e',
                        base__hangar: 'ShellsSection_base__hangar_24',
                        base__setup: 'ShellsSection_base__setup_c8',
                        base__compare: 'ShellsSection_base__compare_e3',
                        base__selected: 'ShellsSection_base__selected_fd',
                        base__dragIn: 'ShellsSection_base__dragIn_39',
                        base__dragInActive: 'ShellsSection_base__dragInActive_96',
                        base__toggle: 'ShellsSection_base__toggle_bd',
                        base__disabled: 'ShellsSection_base__disabled_7e',
                        label: 'ShellsSection_label_38',
                        attention: 'ShellsSection_attention_7e',
                        blinking: 'ShellsSection_blinking_57',
                        border: 'ShellsSection_border_0d',
                        border__double: 'ShellsSection_border__double_a1',
                        border__triple: 'ShellsSection_border__triple_f2',
                        counter: 'ShellsSection_counter_74',
                        disabled: 'ShellsSection_disabled_c2',
                    },
                    ga = [Ue.Hangar, Ue.Battle, Ue.Prebattle, Ue.Respawn],
                    Ca = ({
                        slots: e,
                        ammoNotFull: u,
                        type: t,
                        sectionsIds: i,
                        panelType: s,
                        onActiveSlotChanged: r,
                        isDisabled: l,
                        isBorderActive: c,
                        selectedSection: _,
                        syncInitiator: d,
                        classMix: E,
                        isSetupSwitching: A,
                        setIsExitBlocked: m,
                        newItemsCount: F,
                    }) => {
                        const D = (0, n.useRef)(null),
                            b = s === Ue.Compare,
                            p = _ === t,
                            g = (0, n.useCallback)(() => {
                                r(D, _, 0);
                            }, [r, _]),
                            C = Du(t, i),
                            B = C.selfId,
                            h = C.blockOnGrabIds,
                            f = ((e) => ga.includes(e))(s) && !l && u,
                            v = (function (e, u) {
                                if (Array.isArray(e)) return e.filter(u);
                                const t = [];
                                for (let a = 0; a < e.length; a++) {
                                    var n;
                                    const i = null == (n = e[a]) ? void 0 : n.value;
                                    u(i, a, e) && t.push(i);
                                }
                                return t;
                            })(e, (e) => Boolean(e) && !je(e)).length,
                            S = (0, n.useMemo)(() => {
                                if (!f) return null;
                                const e = o()(pa.border, 2 === v && pa.border__double, 3 === v && pa.border__triple);
                                return a().createElement('div', { className: e });
                            }, [f, v]),
                            w = o()(
                                pa.base,
                                E,
                                pa[`base__${s}`],
                                !c && p && pa.base__selected,
                                b && pa.base__compare,
                                l && pa.base__disabled,
                            ),
                            y = !b && s !== Ue.Battle && s !== Ue.Respawn;
                        return a().createElement(
                            'div',
                            { id: A ? Lu : B, className: w, ref: D },
                            f && a().createElement('div', { className: pa.attention }),
                            y &&
                                a().createElement(
                                    'div',
                                    { className: pa.label },
                                    a().createElement(Nu, {
                                        text: R.strings.tank_setup.section.shells(),
                                        parentRef: D,
                                        show: !p,
                                        panelType: s,
                                    }),
                                ),
                            S,
                            a().createElement(ba, {
                                shells: e,
                                panelType: s,
                                onSelected: g,
                                isSelected: p,
                                isCompare: b,
                                syncInitiator: d,
                                blockOnGrabIds: h,
                                isDisabled: l,
                                isSetupSwitching: A,
                                setIsExitBlocked: m,
                            }),
                            Boolean(F) &&
                                a().createElement(
                                    'div',
                                    { className: pa.counter },
                                    a().createElement(Bu, { value: F, size: 'small', fadeInAnimation: !0 }),
                                ),
                            l && a().createElement('div', { className: pa.disabled }),
                        );
                    },
                    Ba = {
                        base: 'Sections_base_13',
                        section: 'Sections_section_35',
                        section__battle: 'Sections_section__battle_d3',
                        section__small: 'Sections_section__small_73',
                        section__extraSmall: 'Sections_section__extraSmall_5f',
                        section__first: 'Sections_section__first_e2',
                    };
                function ha() {
                    return (
                        (ha =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ha.apply(this, arguments)
                    );
                }
                const fa = ({
                        panelType: e,
                        isDisabled: u = !1,
                        onActiveSlotChanged: t,
                        isBorderActive: n,
                        isBootCamp: i = !1,
                        sections: s,
                        selectedSection: r,
                        selectedSlot: l,
                        syncInitiator: c,
                        ammoNotFull: _,
                        onBootcampPanelAppear: d,
                        isChangeSetupIndex: E,
                        setIsExitBlocked: A,
                    }) => {
                        const m = Q(['section'], Ba),
                            F = ae(s, (e) => Fu(e.type)),
                            D = {
                                panelType: e,
                                isDisabled: u,
                                onActiveSlotChanged: t,
                                isBorderActive: n,
                                selectedSection: r,
                                selectedSlot: l,
                                syncInitiator: c,
                                sectionsIds: F,
                                isChangeSetupIndex: E,
                                setIsExitBlocked: A,
                            };
                        return a().createElement(
                            'div',
                            { className: Ba.base },
                            ae(s, (u, t) => {
                                if (!u.slots || !u.slots.length) return null;
                                const n = o()(
                                        m.section,
                                        0 !== t && qe(e) && Ba.section__battle,
                                        0 === t && Ba.section__first,
                                    ),
                                    s = te(u.slots, (e) => Object.assign({}, e));
                                if (u.type === Ke || u.type === Qe) {
                                    const e = u;
                                    return a().createElement(
                                        Ca,
                                        ha({}, e, D, {
                                            isSetupSwitching: E,
                                            slots: s,
                                            key: `${u.name}${t}${u.slots.length}`,
                                            classMix: n,
                                            ammoNotFull: _,
                                        }),
                                    );
                                }
                                return a().createElement(
                                    ea,
                                    ha({}, u, D, {
                                        isSetupSwitching: E,
                                        slots: s,
                                        key: `${u.name}${t}${u.slots.length}`,
                                        classMix: n,
                                        isBootCamp: i,
                                        onBootcampPanelAppear: d,
                                    }),
                                );
                            }),
                        );
                    },
                    va = 'KeyboardKey_base_57',
                    Sa = 'KeyboardKey_back_43',
                    wa = a().memo(({ text: e }) =>
                        a().createElement('div', { className: va }, a().createElement('div', { className: Sa }, e)),
                    ),
                    ya = 'SetupSwitchHotkey_base_4c',
                    xa = 'SetupSwitchHotkey_hotKeyWrapper_8d',
                    Ta = 'SetupSwitchHotkey_plusWrapper_f0',
                    ka = 'SetupSwitchHotkey_plus_f0',
                    Ia = 'SetupSwitchHotkey_plus__horizontal_e0',
                    Oa = 'SetupSwitchHotkey_plus__vertical_5b',
                    Ra = a().memo(({ hotKeys: e }) =>
                        a().createElement(
                            'div',
                            { className: ya },
                            e.map((e, u) => {
                                if (!e) return null;
                                const t = e.value;
                                return 0 === u
                                    ? a().createElement(wa, { key: u, text: t })
                                    : a().createElement(
                                          'div',
                                          { key: u, className: xa },
                                          a().createElement(
                                              'div',
                                              { className: Ta },
                                              a().createElement('div', { className: `${ka} ${Ia}` }),
                                              a().createElement('div', { className: `${ka} ${Oa}` }),
                                          ),
                                          a().createElement(wa, { text: t }),
                                      );
                            }),
                        ),
                    ),
                    Na = {
                        base: 'Groups_base_de',
                        group: 'Groups_group_1f',
                        groupWrapper: 'Groups_groupWrapper_70',
                        switch: 'Groups_switch_98',
                        switch__battle: 'Groups_switch__battle_0f',
                        switch__small: 'Groups_switch__small_45',
                        switch__extraSmall: 'Groups_switch__extraSmall_b5',
                        prebattleSwitchIndicator: 'Groups_prebattleSwitchIndicator_da',
                        hint: 'Groups_hint_49',
                        hint__disabled: 'Groups_hint__disabled_17',
                    };
                function La() {
                    return (
                        (La =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        La.apply(this, arguments)
                    );
                }
                const Ma = (e) => e.setupSelector.hotKeys,
                    Pa = (e) =>
                        Object.assign({}, e, {
                            slots: ae(e.slots, (e) => {
                                if ('specializations' in e) {
                                    const u = e;
                                    return Object.assign({}, u, {
                                        specializations: Object.assign({}, u.specializations, {
                                            specializations: ae(u.specializations.specializations, (e) =>
                                                Object.assign({}, e),
                                            ),
                                        }),
                                    });
                                }
                                return Object.assign({}, e);
                            }),
                        }),
                    Ha = (e) =>
                        ne(
                            e,
                            (e) => {
                                var u;
                                const t = (function (e, u) {
                                    if (Array.isArray(e)) return e.every(u);
                                    for (let t = 0; t < e.length; t++) if (!u(ue(e, t), t, e)) return !1;
                                    return !0;
                                })(null != (u = null == e ? void 0 : e.sections) ? u : [], (e) => {
                                    var u, t;
                                    return 0 === (null != (u = null == (t = e.slots) ? void 0 : t.length) ? u : 0);
                                });
                                return !(!e || t);
                            },
                            (e) =>
                                Object.assign({}, e, {
                                    setupSelector: Object.assign({}, e.setupSelector, {
                                        states: te(e.setupSelector.states, (e) => e),
                                    }),
                                    sections: ae(e.sections, Pa),
                                }),
                        ),
                    $a = ({ sectionProps: e, isSetupSwitching: u, isReady: t, setSetupSwitching: i, children: s }) => {
                        const r = Q(['switch'], Na),
                            l = I('model'),
                            c = l.isDisabled,
                            _ = l.vehicleInfo,
                            d = I('model.ammunitionPanel'),
                            E = d.sectionGroups,
                            A = d.onChangeSetupIndex,
                            m = d.selectedSection,
                            F = d.selectedSlot,
                            D = d.syncInitiator,
                            b = d.ammoNotFull,
                            p = null == _ ? void 0 : _.vehicleName,
                            g = Ha(E);
                        (0, n.useEffect)(() => {
                            (e.panelType !== Ue.Hangar && e.panelType !== Ue.Setup) || !t || i(!1);
                        }, [t, e.panelType, i]),
                            (0, n.useEffect)(() => {
                                e.panelType === Ue.Respawn && i(!1);
                            }, [p, e.panelType, i]);
                        const C = (0, n.useCallback)(
                                (u) => {
                                    e.panelType === Ue.Respawn && i(!0), A(u);
                                },
                                [A, e.panelType, i],
                            ),
                            B = (e.panelType !== Ue.Respawn && t) || (e.panelType === Ue.Respawn && u);
                        return a().createElement(
                            'div',
                            { className: Na.base },
                            te(g, (t) => {
                                const n = R.strings.tank_setup.tooltips.prebattleSwitchIndicator.desc.$dyn(
                                    `c_${t.groupId}`,
                                );
                                return a().createElement(
                                    'div',
                                    { key: t.groupId, className: Na.group },
                                    a().createElement(
                                        'div',
                                        { className: Na.groupWrapper },
                                        a().createElement(
                                            Ge,
                                            La(
                                                { disabled: !B && Boolean(e.isBootCamp) },
                                                ((e, u) => ({ index: e.currentIndex, setSetupSwitching: u }))(t, i),
                                            ),
                                            a().createElement(
                                                fa,
                                                La({}, e, {
                                                    sections: t.sections,
                                                    selectedSection: m,
                                                    selectedSlot: F,
                                                    syncInitiator: D,
                                                    ammoNotFull: b,
                                                    isChangeSetupIndex: u,
                                                }),
                                            ),
                                        ),
                                        t.setupSelector.isSwitchEnabled &&
                                            a().createElement(
                                                'div',
                                                { className: o()(r.switch, Ve(e.panelType) && Na.switch__battle) },
                                                a().createElement(Me, {
                                                    states: t.setupSelector.states,
                                                    onClick: C,
                                                    totalCount: t.totalCount,
                                                    currentIndex: t.currentIndex,
                                                    groupId: t.groupId,
                                                    isDisabled: e.isDisabled,
                                                }),
                                                t.setupSelector.isPrebattleSwitchDisabled &&
                                                    a().createElement(
                                                        pe,
                                                        {
                                                            header: R.strings.tank_setup.tooltips.prebattleSwitchIndicator.title(),
                                                            body: 'string' == typeof n ? n : void 0,
                                                        },
                                                        a().createElement('div', {
                                                            className: Na.prebattleSwitchIndicator,
                                                        }),
                                                    ),
                                            ),
                                    ),
                                    ((s = t),
                                    ((l = e.panelType) === Ue.Battle || l === Ue.Respawn) &&
                                        s.setupSelector.isSwitchEnabled &&
                                        Ma(s) &&
                                        a().createElement(
                                            'div',
                                            { className: o()(Na.hint, c && Na.hint__disabled) },
                                            a().createElement(Ra, { hotKeys: Ma(t) }),
                                        )),
                                );
                                var s, l;
                            }),
                            s,
                        );
                    };
                function za() {
                    return (
                        (za =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        za.apply(this, arguments)
                    );
                }
                const Wa = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const n = a().createElement('div', { className: t }, e);
                        if (u.header || u.body) return a().createElement(pe, u, n);
                        const i = u.contentId,
                            s = u.args,
                            r = null == s ? void 0 : s.contentId;
                        return i || r
                            ? a().createElement(me, za({}, u, { contentId: i || r }), n)
                            : a().createElement(Lt, u, n);
                    },
                    Ga = 'RoleSkillSlot_base_c4',
                    Ua = 'RoleSkillSlot_icon_79',
                    ja = ({
                        roleSkill: e,
                        roleName: u,
                        tooltipId: t,
                        tooltipHeader: i,
                        tooltipBody: s,
                        className: r,
                    }) => {
                        const l = (0, n.useMemo)(
                            () => ({
                                args: {
                                    tooltipId: t,
                                    roleSkill: e,
                                    roleName: u,
                                    header: i,
                                    body: s,
                                    hasHtmlContent: !0,
                                },
                                header: i,
                                body: s,
                                ignoreShowDelay: !0,
                            }),
                            [e, u, i, s, t],
                        );
                        return a().createElement(
                            Wa,
                            { tooltipArgs: l, className: o()(Ga, r) },
                            a().createElement('div', {
                                className: Ua,
                                style: {
                                    backgroundImage: `url(${R.images.gui.maps.icons.roleSkills.c_48x48.$dyn(e)})`,
                                },
                            }),
                        );
                    },
                    Va = 'SlotGlow_base_40',
                    Xa = 'SlotGlow_glow_a9',
                    qa = 'SlotGlow_glow__shown_f2',
                    Ka = 'SlotGlow_glow__hidden_94',
                    Ya = (0, n.memo)(({ slotOffset: e, slotWidth: u, isAnimationRunning: t }) => {
                        const i = (0, n.useState)({ offset: e, slotWidth: u }),
                            s = i[0],
                            r = i[1],
                            l = (0, n.useRef)({ initialized: !1, offset: e, slotWidth: u });
                        (0, n.useEffect)(() => {
                            let t = l.current.initialized;
                            !t && e && ((t = !0), r({ offset: e, slotWidth: u })),
                                (l.current = { initialized: t, offset: e, slotWidth: u });
                        }, [e, u]),
                            (0, n.useEffect)(() => {
                                t || r(l.current);
                            }, [t]);
                        const c = (0, n.useMemo)(() => {
                                const e = s.slotWidth + 25;
                                return { left: s.offset, width: e, backgroundSize: `${B.O.view.pxToRem(e)}rem 100%` };
                            }, [s.offset, s.slotWidth]),
                            _ = !t && s.offset === l.current.offset,
                            d = o()(Xa, _ ? qa : Ka);
                        return a().createElement(
                            'div',
                            { className: Va },
                            l.current.initialized && a().createElement('div', { className: d, style: c }),
                        );
                    }),
                    Za = ({
                        show: e = !0,
                        isReady: u = !0,
                        panelType: t,
                        isBootCamp: i = !1,
                        isDisabled: s = !1,
                        onBootcampPanelAppear: r,
                        onResize: l,
                        setIsExitBlocked: c,
                    }) => {
                        const _ = I('model.ammunitionPanel'),
                            d = _.isSetupSwitchInProgress,
                            E = _.syncInitiator,
                            A = _.sectionGroups,
                            m = _.onSectionResized,
                            F = (function (e, u, t) {
                                if (Array.isArray(e)) return e.reduce(u, t);
                                let n = t;
                                for (let t = 0; t < e.length; t++) n = u(n, ue(e, t), t, e);
                                return n;
                            })(A, (e, u) => e + u.sections.length, 0),
                            D = I('model.roleSkillSlot'),
                            b = (0, n.useState)(!1),
                            p = b[0],
                            g = b[1],
                            C = (0, n.useRef)(!1),
                            B = (0, n.useState)({ slotWidth: 0, slotOffset: 0 }),
                            h = B[0],
                            f = B[1],
                            v = (0, n.useState)(!1),
                            S = v[0],
                            w = v[1],
                            y = (0, n.useRef)(null),
                            x = $(),
                            T = (0, n.useRef)({ element: null, generation: 0, slotIndex: null, sectionIndex: null }),
                            k = (0, n.useCallback)(
                                (e, u) => {
                                    if (p || d || i || t !== Ue.Hangar) return;
                                    const n = u || { width: 0, height: 0, offsetX: 0, offsetY: 0 };
                                    m(Object.assign({ sectionType: e }, n)), x && (x.freeze(), x.resize());
                                },
                                [p, d, i, t, m, x],
                            ),
                            O = (0, n.useCallback)(
                                (e) => {
                                    k('main', e);
                                },
                                [k],
                            );
                        ie(y, O, !0, [E]), (0, n.useEffect)(() => () => O(), [O]);
                        const R = (0, n.useCallback)(() => {
                                w(!1);
                            }, []),
                            N = (0, n.useCallback)(() => {
                                if (T.current.element && y.current) {
                                    const e = T.current.element.getBoundingClientRect(),
                                        u = y.current.getBoundingClientRect();
                                    f({ slotWidth: e.width, slotOffset: e.left - u.left + 0.5 * e.width });
                                }
                            }, []),
                            L = (0, n.useCallback)(
                                (e, u, t) => {
                                    if (e.current && y.current) {
                                        const n = ((e, u, t) =>
                                            e !== t.current.slotIndex || u !== t.current.sectionIndex)(t, u, T);
                                        (T.current.element = e.current),
                                            (T.current.slotIndex = t),
                                            (T.current.sectionIndex = u),
                                            C.current && n ? w(!0) : (C.current = !0),
                                            T.current.generation && N();
                                    }
                                },
                                [N],
                            ),
                            M = (0, n.useCallback)(
                                () =>
                                    P(() => {
                                        (T.current.generation += 1), N();
                                    }),
                                [T, N],
                            );
                        (0, n.useEffect)(() => P(M), [M]),
                            (0, n.useEffect)(
                                () => (
                                    engine.on('clientResized', M),
                                    () => {
                                        engine.off('clientResized', M);
                                    }
                                ),
                                [M],
                            );
                        const H = (0, n.useCallback)(() => {
                                (T.current.generation += 1),
                                    F >= T.current.generation && (null == r || r(), null == l || l()),
                                    N();
                            }, [r, l, F, N]),
                            z = h.slotWidth,
                            W = h.slotOffset,
                            G = o()(se.base, !u && se.base__locked, !e && se.base__hidden, s && se.base__disabled),
                            U = o()(se.border, !S && se.border__hidden),
                            j = t === Ue.Setup || t === Ue.Compare,
                            V = {
                                panelType: t,
                                isDisabled: s,
                                onActiveSlotChanged: L,
                                isBorderActive: S,
                                isBootCamp: i,
                                onBootcampPanelAppear: H,
                                setIsExitBlocked: c,
                            };
                        (0, n.useEffect)(() => {
                            !1 === i && (null == l || l());
                        }, [l, D.roleSkill, i]);
                        const X = Q(['roleSkillSlot'], se);
                        return a().createElement(
                            'div',
                            { ref: y, className: G },
                            j &&
                                a().createElement(Ya, {
                                    key: T.current.generation,
                                    slotOffset: W,
                                    slotWidth: z,
                                    isAnimationRunning: S,
                                }),
                            a().createElement(
                                $a,
                                { isSetupSwitching: d || p, sectionProps: V, isReady: u, setSetupSwitching: g },
                                D.roleSkill &&
                                    a().createElement(ja, {
                                        roleSkill: D.roleSkill,
                                        roleName: D.roleName,
                                        tooltipId: D.tooltipId,
                                        tooltipHeader: D.tooltipHeader,
                                        tooltipBody: D.tooltipBody,
                                        className: o()(se.roleSkillSlot, se[`roleSkillSlot__${t}`], X.roleSkillSlot),
                                    }),
                            ),
                            j &&
                                a().createElement(
                                    'div',
                                    { className: U },
                                    a().createElement(_e, { slotWidth: z, slotOffset: W, onAnimationEnd: R }),
                                ),
                        );
                    },
                    Qa = 'Content_base_51',
                    Ja = () => {
                        const e = I('model'),
                            u = e.isDisabled,
                            t = e.isReady,
                            i = e.isBootcamp,
                            s = e.state,
                            r = (0, n.useRef)(null);
                        return (
                            (0, n.useEffect)(
                                () =>
                                    P(() => {
                                        const e = r.current;
                                        if (e) {
                                            const u = e.firstElementChild.getBoundingClientRect();
                                            viewEnv.setInputArea(
                                                viewEnv.pxToRem(u.x),
                                                viewEnv.pxToRem(u.y),
                                                viewEnv.pxToRem(u.width),
                                                viewEnv.remToPx(54),
                                            );
                                        }
                                    }),
                                [s, t],
                            ),
                            a().createElement(
                                'div',
                                { className: Qa, ref: r },
                                a().createElement(Za, {
                                    panelType: s === M.PreBattleNotConfirmed ? Ue.Prebattle : Ue.Battle,
                                    isDisabled: u,
                                    isReady: t,
                                    isBootCamp: i,
                                }),
                            )
                        );
                    },
                    ei = 'Footer_base_51',
                    ui = 'Footer_title_28',
                    ti = () =>
                        a().createElement(
                            'div',
                            { className: ei },
                            a().createElement(
                                'span',
                                { className: ui },
                                R.strings.ingame_gui.prebattleAmmunitionPanel.footer(),
                            ),
                        ),
                    ni = 'Header_base_70',
                    ai = 'Header_title_f3',
                    ii = 'Header_base__loading_c9',
                    si = R.strings.ingame_gui.prebattleAmmunitionPanel,
                    ri = () => {
                        const e = I('model'),
                            u = e.state,
                            t = e.timeTillBattleStart,
                            i = e.isDisabled,
                            s = o()(ni, u === M.BattleLoading && ii),
                            r = L(t),
                            l = r >= 0,
                            c = (0, n.useMemo)(() => ({ seconds: Math.floor(r) }), [r]);
                        const _ =
                            u === M.BattleLoading
                                ? i
                                    ? si.currentSetup()
                                    : l
                                      ? ((d = si.loadingTimer()),
                                        (E = c),
                                        d.replace(/\{\w+\}/g, (e) => String(E[e.slice(1, -1)])))
                                      : si.waitinForPlayers()
                                : si.header();
                        var d, E;
                        return a().createElement(
                            'div',
                            { className: s },
                            a().createElement('span', { className: ai }, _),
                        );
                    },
                    oi = 'App_base_5f',
                    li = 'App_base__loading_98',
                    ci = 'App_content_f3',
                    _i = () => {
                        const e = I('model').state,
                            u = o()(oi, e === M.BattleLoading && li);
                        return a().createElement(
                            'div',
                            { className: u },
                            e !== M.PreBattleNotConfirmed && a().createElement(ri, null),
                            a().createElement('div', { className: ci }, a().createElement(Ja, null)),
                            e === M.PreBattle && a().createElement(ti, null),
                        );
                    };
                engine.whenReady.then(() => {
                    s().render(a().createElement(_i, null), document.getElementById('root'));
                });
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var u = __webpack_module_cache__[e];
        if (void 0 !== u) return u.exports;
        var t = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](t, t.exports, __webpack_require__), t.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, u, t, n) => {
            if (!u) {
                var a = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [u, t, n] = deferred[o], i = !0, s = 0; s < u.length; s++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((i = !1), n < a && (a = n));
                    if (i) {
                        deferred.splice(o--, 1);
                        var r = t();
                        void 0 !== r && (e = r);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > n; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [u, t, n];
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
        (__webpack_require__.j = 421),
        (() => {
            var e = { 421: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        a,
                        [i, s, r] = t,
                        o = 0;
                    if (i.some((u) => 0 !== e[u])) {
                        for (n in s) __webpack_require__.o(s, n) && (__webpack_require__.m[n] = s[n]);
                        if (r) var l = r(__webpack_require__);
                    }
                    for (u && u(t); o < i.length; o++)
                        (a = i[o]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [532], () => __webpack_require__(365));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
