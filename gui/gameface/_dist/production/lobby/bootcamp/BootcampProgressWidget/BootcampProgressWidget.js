(() => {
    'use strict';
    var __webpack_modules__ = {
            67: (e, t, n) => {
                n.d(t, { O: () => K });
                var r = {};
                n.r(r), n.d(r, { mouse: () => d, onResize: () => c });
                var o = {};
                n.r(o),
                    n.d(o, {
                        events: () => r,
                        getMouseGlobalPosition: () => m,
                        getSize: () => _,
                        graphicsQuality: () => p,
                    });
                var i = {};
                n.r(i), n.d(i, { getBgUrl: () => v, getTextureUrl: () => g });
                var a = {};
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
                n.r(a),
                    n.d(a, {
                        addModelObserver: () => C,
                        addPreloadTexture: () => S,
                        children: () => i,
                        displayStatus: () => b,
                        displayStatusIs: () => G,
                        events: () => w,
                        extraSize: () => W,
                        forceTriggerMouseMove: () => j,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => T,
                        getDisplayStatus: () => $,
                        getScale: () => N,
                        getSize: () => R,
                        getViewGlobalPosition: () => I,
                        isEventHandled: () => z,
                        isFocused: () => U,
                        pxToRem: () => B,
                        remToPx: () => F,
                        resize: () => L,
                        sendEvent: () => P,
                        setAnimateWindow: () => x,
                        setEventHandled: () => V,
                        setInputPaddingsRem: () => M,
                        setSidePaddingsRem: () => D,
                        whenTutorialReady: () => H,
                    });
                const c = s('clientResized'),
                    u = { down: s('mousedown'), up: s('mouseup'), move: s('mousemove') };
                const d = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && l(!1);
                    }
                    function n() {
                        e.enabled && l(!0);
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
                            : l(!1);
                    }
                    const o = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let o = !0;
                                    const i = `mouse${t}`,
                                        a = u[t]((e) => n([e, 'outside']));
                                    function s(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, s),
                                        r(),
                                        () => {
                                            o &&
                                                (a(),
                                                window.removeEventListener(i, s),
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
                    return Object.assign({}, o, {
                        disable() {
                            (e.enabled = !1), r();
                        },
                        enable() {
                            (e.enabled = !0), r();
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
                const p = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function g(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function v(e, t, n) {
                    return `url(${g(e, t, n)})`;
                }
                const b = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
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
                    E = ['args'];
                const f = 2,
                    h = 16,
                    y = 32,
                    O = 64,
                    k = (e, t) => {
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
                                })(t, E);
                            return void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var r;
                    },
                    P = {
                        close(e) {
                            k('popover' === e ? f : y);
                        },
                        minimize() {
                            k(O);
                        },
                        move(e) {
                            k(h, { isMouseEvent: !0, on: e });
                        },
                    };
                function S(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function M(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function T(e, t, n, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, r);
                }
                function C(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function D(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function R(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function L(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function I(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: F(t.x), y: F(t.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function N() {
                    return viewEnv.getScale();
                }
                function B(e) {
                    return viewEnv.pxToRem(e);
                }
                function F(e) {
                    return viewEnv.remToPx(e);
                }
                function x(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function U() {
                    return viewEnv.isFocused();
                }
                function V() {
                    return viewEnv.setEventHandled();
                }
                function z() {
                    return viewEnv.isEventHandled();
                }
                function j() {
                    viewEnv.forceTriggerMouseMove();
                }
                function $() {
                    return viewEnv.getShowingStatus();
                }
                const G = Object.keys(b).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === b[t]), e), {}),
                    W = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    H = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : w.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    K = { view: a, client: o };
            },
            521: (e, t, n) => {
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
            358: (e, t, n) => {
                n.d(t, { Z: () => i });
                var r = n(67);
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
                n.d(t, { Sw: () => i.Z, B0: () => l, ry: () => w });
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
                var i = n(358);
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
                    u = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var m = n(521),
                    p = n(67);
                const g = ['args'];
                function v(e, t, n, r, o, i, a) {
                    try {
                        var s = e[i](a),
                            l = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    s.done ? t(l) : Promise.resolve(l).then(r, o);
                }
                const b = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                        n = arguments;
                                    return new Promise(function (r, o) {
                                        var i = e.apply(t, n);
                                        function a(e) {
                                            v(i, r, o, a, s, 'next', e);
                                        }
                                        function s(e) {
                                            v(i, r, o, a, s, 'throw', e);
                                        }
                                        a(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    E = (e, t) => {
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
                                })(t, g);
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
                    f = () => E(l.CLOSE),
                    h = (e, t) => {
                        e.keyCode === m.n.ESCAPE && t();
                    };
                var y = n(572);
                const O = o.instance,
                    k = {
                        DataTracker: i.Z,
                        ViewModel: y.Z,
                        ViewEventType: l,
                        NumberFormatType: c,
                        RealFormatType: u,
                        TimeFormatType: d,
                        DateFormatType: _,
                        makeGlobalBoundingBox: b,
                        sendMoveEvent: (e) => E(l.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => E(l.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            E(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, r, o = R.invalid('resId'), i) => {
                            const a = p.O.view.getViewGlobalPosition(),
                                s = n.getBoundingClientRect(),
                                c = s.x,
                                u = s.y,
                                d = s.width,
                                _ = s.height,
                                m = {
                                    x: p.O.view.pxToRem(c) + a.x,
                                    y: p.O.view.pxToRem(u) + a.y,
                                    width: p.O.view.pxToRem(d),
                                    height: p.O.view.pxToRem(_),
                                };
                            E(l.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: o,
                                direction: t,
                                bbox: b(m),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => h(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            h(e, f);
                        },
                        handleViewEvent: E,
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
                        ClickOutsideManager: O,
                        SystemLocale: a,
                        UserLocale: s,
                    };
                window.ViewEnvHelper = k;
            },
            390: (e, t, n) => {
                var r = n(179),
                    o = n.n(r),
                    i = n(493),
                    a = n.n(i);
                let s, l, c;
                !(function (e) {
                    e.Bootcamp = 'bootcamp';
                })(s || (s = {})),
                    (function (e) {
                        (e.BC_DEVICE_SETUP_SUB_VIEW = 'bc_device_setup_sub_view'),
                            (e.BC_CONSUMABLE_SETUP_SUB_VIEW = 'bc_consumable_setup_sub_view'),
                            (e.BC_EXIT_VIEW = 'bc_exit_view'),
                            (e.BC_CURRENT_PROGRESS_WIDGET = 'bc_current_progress_widget'),
                            (e.BC_RESULT_SCREEN = 'bc_result_screen');
                    })(l || (l = {})),
                    (function (e) {
                        e.TooltipOpened = 'tooltip_opened';
                    })(c || (c = {}));
                var u = n(483),
                    d = n.n(u);
                const _ = (e = 1) => {
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
                    },
                    m = (e, t) => e.split('.').reduce((e, t) => e && e[t], t),
                    p = (e) => {
                        const t = (0, r.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    };
                var g = n(364);
                const v = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    b = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    w = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, n) => {
                                const r = m(`${e}.${n}`, window);
                                return v(r) ? t(e, n, r) : `${e}.${n}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    E = (e) => {
                        const t = ((e) => {
                                const t = _(),
                                    n = t.caller,
                                    r = t.resId,
                                    o = window.__feature && window.__feature !== n && n ? `subViews.${n}` : '';
                                return { modelPrefix: o, modelPath: b(o, e || ''), resId: r };
                            })(),
                            n = t.modelPrefix,
                            r = e.split('.');
                        if (r.length > 0) {
                            const e = [r[0]];
                            return (
                                r.reduce((t, r) => {
                                    const o = m(b(n, `${t}.${r}`), window);
                                    return v(o) ? (e.push(o.id), `${t}.${r}.value`) : (e.push(r), `${t}.${r}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    },
                    f = g.Sw.instance;
                let h;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(h || (h = {}));
                const y = (e = 'model', t = h.Deep) => {
                        const n = (0, r.useState)(0),
                            o = (n[0], n[1]),
                            i = (0, r.useMemo)(() => _(), []),
                            a = i.caller,
                            s = i.resId,
                            l = (0, r.useMemo)(
                                () => (window.__feature && window.__feature !== a ? `subViews.${a}.${e}` : e),
                                [a, e],
                            ),
                            c = (0, r.useState)(() =>
                                ((e) => {
                                    const t = m(e, window);
                                    for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                    return v(t) ? t.value : t;
                                })(w(l)),
                            ),
                            u = c[0],
                            d = c[1],
                            g = (0, r.useRef)(-1);
                        return (
                            p(() => {
                                if (
                                    ('boolean' == typeof t &&
                                        ((t = t ? h.Deep : h.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    t !== h.None)
                                ) {
                                    const n = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            t === h.Deep
                                                ? (e === u && o((e) => e + 1), d(e))
                                                : d(Object.assign([], e));
                                        },
                                        r = E(e);
                                    g.current = f.addCallback(r, n, s, t === h.Deep);
                                }
                            }),
                            (0, r.useEffect)(() => {
                                if (t !== h.None)
                                    return () => {
                                        f.removeCallback(g.current, s);
                                    };
                            }, [s, t]),
                            u
                        );
                    },
                    O = {
                        base: 'ProgressBar_base_45',
                        base__medium: 'ProgressBar_base__medium_62',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__medium: 'ProgressBar_background__medium_6e',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let k, P;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big');
                })(k || (k = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(P || (P = {}));
                const S = ({ size: e = k.Default }) =>
                        o().createElement('div', { className: d()(O.background, O[`background__${e}`]) }),
                    M = {
                        base: 'ProgressBarBlink_base_24',
                        base__medium: 'ProgressBarBlink_base__medium_ec',
                        base__small: 'ProgressBarBlink_base__small_0f',
                    },
                    T = ({ size: e }) => {
                        const t = d()(M.base, M[`base__${e}`]);
                        return o().createElement('div', { className: t });
                    },
                    C = {
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
                    D = (0, r.memo)(
                        ({ size: e, lineRef: t, disabled: n, baseStyles: r, isComplete: i, withoutBounce: a }) => {
                            const s = d()(
                                    C.base,
                                    C[`base__${e}`],
                                    n && C.base__disabled,
                                    i && C.base__finished,
                                    a && C.base__withoutBounce,
                                ),
                                l = !n && !i;
                            return o().createElement(
                                'div',
                                { className: s, style: r, ref: t },
                                o().createElement('div', { className: C.pattern }),
                                o().createElement('div', { className: C.gradient }),
                                l && o().createElement(T, { size: e }),
                            );
                        },
                    ),
                    L = ({ size: e, value: t, lineRef: n, disabled: i, onComplete: a }) => {
                        const s = (0, r.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            l = 100 === t;
                        return (
                            (0, r.useEffect)(() => {
                                l && a && a();
                            }, [l, a]),
                            o().createElement(D, { size: e, disabled: i, baseStyles: s, isComplete: l, lineRef: n })
                        );
                    },
                    I = (e, t) => {
                        let n;
                        const r = setTimeout(() => {
                            n = e();
                        }, t);
                        return () => {
                            'function' == typeof n && n(), clearTimeout(r);
                        };
                    };
                let A, N;
                !(function (e) {
                    (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                })(A || (A = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(N || (N = {}));
                const B = 'ProgressBarDeltaSimple_base_6c',
                    F = 'ProgressBarDeltaSimple_delta_99',
                    x = (0, r.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: n,
                            from: i,
                            size: a,
                            to: s,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const u = s < i,
                                d = (0, r.useState)(N.Idle),
                                _ = d[0],
                                m = d[1],
                                p = _ === N.In,
                                g = _ === N.End,
                                v = _ === N.Idle,
                                b = (0, r.useCallback)(
                                    (e) => {
                                        m(e), c && c(e);
                                    },
                                    [c],
                                );
                            (0, r.useEffect)(() => {
                                if (v && !n) {
                                    return I(() => {
                                        b(N.In);
                                    }, t);
                                }
                            }, [b, n, v, t]),
                                (0, r.useEffect)(() => {
                                    if (p) {
                                        return I(() => {
                                            l && l(), b(N.End);
                                        }, e + t);
                                    }
                                }, [b, p, l, t, e]);
                            const w = (0, r.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [u ? 'left' : 'right']: '0',
                                    }),
                                    [u, t, e],
                                ),
                                E = (0, r.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [u ? 'left' : 'right']: '0',
                                    }),
                                    [u, t, e],
                                ),
                                f = (0, r.useMemo)(
                                    () => ({ width: `${Math.abs(i - s)}%`, left: `${u ? s : i}%` }),
                                    [i, u, s],
                                );
                            return g
                                ? null
                                : o().createElement(
                                      'div',
                                      { className: B, style: f },
                                      o().createElement(
                                          'div',
                                          { style: v ? w : E, className: F },
                                          o().createElement(T, { size: a }),
                                      ),
                                  );
                        },
                    ),
                    U = (0, r.memo)(
                        ({
                            to: e,
                            size: t,
                            from: n,
                            lineRef: i,
                            disabled: a,
                            isComplete: s,
                            animationSettings: l,
                            onChangeAnimationState: c,
                            onEndAnimation: u,
                        }) => {
                            const d = (0, r.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${l.line.duration}ms`,
                                    transitionDelay: `${l.line.delay}ms`,
                                }),
                                [l.line.delay, l.line.duration, e],
                            );
                            return o().createElement(
                                o().Fragment,
                                null,
                                o().createElement(D, {
                                    size: t,
                                    lineRef: i,
                                    disabled: a,
                                    isComplete: s,
                                    baseStyles: d,
                                }),
                                n >= 0 &&
                                    o().createElement(x, {
                                        transitionDuration: l.delta.duration,
                                        transitionDelay: l.delta.delay,
                                        freezed: l.freezed,
                                        from: n,
                                        size: t,
                                        to: e,
                                        onChangeAnimationState: c,
                                        onEndAnimation: u,
                                    }),
                            );
                        },
                    ),
                    V = 'ProgressBarDeltaGrow_base_7e',
                    z = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    j = 'ProgressBarDeltaGrow_glow_68',
                    $ = (e) => (e ? { left: 0 } : { right: 0 }),
                    G = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    W = (e) => ({ transitionDuration: `${e}ms` }),
                    H = (0, r.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: n,
                            from: i,
                            size: a,
                            to: s,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                            className: u,
                        }) => {
                            const _ = s < i,
                                m = (0, r.useState)(A.Idle),
                                p = m[0],
                                g = m[1],
                                v = p === A.End,
                                b = p === A.Idle,
                                w = p === A.Grow,
                                E = p === A.Shrink,
                                f = (0, r.useCallback)(
                                    (e) => {
                                        g(e), c && c(e);
                                    },
                                    [c],
                                ),
                                h = (0, r.useCallback)(
                                    (e, t) =>
                                        I(() => {
                                            f(e);
                                        }, t),
                                    [f],
                                );
                            (0, r.useEffect)(() => {
                                if (!n)
                                    return b
                                        ? h(A.Grow, t)
                                        : w
                                          ? h(A.Shrink, e)
                                          : E
                                            ? h(A.End, e)
                                            : void (v && l && l());
                            }, [h, n, v, w, b, E, l, t, e]);
                            const y = (0, r.useMemo)(() => Object.assign({ width: '100%' }, W(e), $(_)), [_, e]),
                                O = (0, r.useMemo)(() => Object.assign({ width: '0%' }, W(e), $(_)), [_, e]),
                                k = (0, r.useMemo)(() => Object.assign({ width: '0%' }, G(_, i), W(e)), [i, _, e]),
                                P = (0, r.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(s - i)}%` }, G(_, i), W(e)),
                                    [i, _, s, e],
                                );
                            if (v) return null;
                            const S = d()(V, u, _ && 0 === s && z);
                            return o().createElement(
                                'div',
                                { style: b ? k : P, className: S },
                                o().createElement(
                                    'div',
                                    { style: E ? O : y, className: j },
                                    o().createElement(T, { size: a }),
                                ),
                            );
                        },
                    ),
                    K = (0, r.memo)(
                        ({
                            to: e,
                            size: t,
                            from: n,
                            lineRef: i,
                            disabled: a,
                            isComplete: s,
                            animationSettings: l,
                            onEndAnimation: c,
                            onChangeAnimationState: u,
                        }) => {
                            const d = e < n,
                                _ = (0, r.useState)(!1),
                                m = _[0],
                                p = _[1],
                                g = (0, r.useCallback)(
                                    (e) => {
                                        e === A.Shrink && p(!0), u && u(e);
                                    },
                                    [u],
                                ),
                                v = (0, r.useMemo)(() => ({ width: `${n}%`, transitionProperty: 'none' }), [n]),
                                b = (0, r.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${l.line.duration}ms` }),
                                    [l.line.duration, e],
                                );
                            return o().createElement(
                                o().Fragment,
                                null,
                                o().createElement(D, {
                                    size: t,
                                    lineRef: i,
                                    disabled: a,
                                    isComplete: s,
                                    withoutBounce: d && 0 === e,
                                    baseStyles: m ? b : v,
                                }),
                                n >= 0 &&
                                    o().createElement(H, {
                                        transitionDuration: l.delta.duration,
                                        transitionDelay: l.delta.delay,
                                        onChangeAnimationState: g,
                                        freezed: l.freezed,
                                        onEndAnimation: c,
                                        from: n,
                                        size: t,
                                        to: e,
                                        className: l.delta.className,
                                    }),
                            );
                        },
                    ),
                    q = ['onComplete', 'onEndAnimation'];
                function Y() {
                    return (
                        (Y =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        Y.apply(this, arguments)
                    );
                }
                const X = (0, r.memo)((e) => {
                        let t = e.onComplete,
                            n = e.onEndAnimation,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    o = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                                return o;
                            })(e, q);
                        const a = (0, r.useState)(!1),
                            s = a[0],
                            l = a[1],
                            c = (0, r.useCallback)(() => {
                                const e = 100 === i.to;
                                e !== s && l(e), e && t && t(), n && n();
                            }, [s, t, n, i.to]);
                        switch (i.animationSettings.type) {
                            case P.Simple:
                                return o().createElement(U, Y({}, i, { onEndAnimation: c, isComplete: s }));
                            case P.Growing:
                                return o().createElement(K, Y({}, i, { onEndAnimation: c, isComplete: s }));
                            default:
                                return null;
                        }
                    }),
                    Z = ['onEndAnimation'];
                function Q() {
                    return (
                        (Q =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        Q.apply(this, arguments)
                    );
                }
                const J = (0, r.memo)((e) => {
                    let t = e.onEndAnimation,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                o = {},
                                i = Object.keys(e);
                            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                            return o;
                        })(e, Z);
                    const i = (0, r.useRef)({}),
                        a = (0, r.useCallback)(() => {
                            (i.current.from = void 0), t && t();
                        }, [t]),
                        s = 'number' == typeof i.current.from ? i.current.from : n.from;
                    return (
                        (i.current.from = s),
                        o().createElement(X, Q({}, n, { onEndAnimation: a, key: `${s}-${n.to}`, from: s }))
                    );
                });
                function ee() {
                    return (
                        (ee =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        ee.apply(this, arguments)
                    );
                }
                const te = (0, r.memo)(
                        ({
                            size: e,
                            value: t,
                            lineRef: n,
                            disabled: r,
                            deltaFrom: i,
                            animationSettings: a,
                            onEndAnimation: s,
                            onChangeAnimationState: l,
                            onComplete: c,
                        }) => {
                            if (i === t)
                                return o().createElement(L, {
                                    key: `${i}-${t}`,
                                    size: e,
                                    value: t,
                                    lineRef: n,
                                    disabled: r,
                                    onComplete: c,
                                });
                            const u = {
                                from: i,
                                to: t,
                                size: e,
                                lineRef: n,
                                disabled: r,
                                animationSettings: a,
                                onComplete: c,
                                onEndAnimation: s,
                                onChangeAnimationState: l,
                            };
                            return a.withStack
                                ? o().createElement(J, u)
                                : o().createElement(X, ee({ key: `${i}-${t}` }, u));
                        },
                    ),
                    ne = (e) => ({
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
                    re = (e, t, n) => (n < e ? e : n > t ? t : n),
                    oe = (e, t, n) => {
                        if ('number' == typeof n) {
                            return (re(0, t, n) / t) * 100;
                        }
                        return e;
                    },
                    ie = {
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
                    ae = {
                        freezed: !1,
                        withStack: !1,
                        type: P.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    se = (0, r.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = ie,
                            size: n = k.Default,
                            animationSettings: i = ae,
                            disabled: a = !1,
                            withoutBackground: s = !1,
                            value: l,
                            deltaFrom: c,
                            lineRef: u,
                            onChangeAnimationState: _,
                            onEndAnimation: m,
                            onComplete: p,
                        }) => {
                            const g = ((e, t, n) =>
                                (0, r.useMemo)(() => {
                                    const r = (re(0, t, e) / t) * 100;
                                    return { value: r, deltaFrom: oe(r, t, n) };
                                }, [n, t, e]))(l, e, c);
                            return o().createElement(
                                'div',
                                { className: d()(O.base, O[`base__${n}`]), style: ne(t) },
                                !s && o().createElement(S, { size: n }),
                                o().createElement(te, {
                                    size: n,
                                    lineRef: u,
                                    disabled: a,
                                    value: g.value,
                                    deltaFrom: g.deltaFrom,
                                    animationSettings: i,
                                    onEndAnimation: m,
                                    onChangeAnimationState: _,
                                    onComplete: p,
                                }),
                            );
                        },
                    );
                let le;
                !(function (e) {
                    (e[(e.NonSet = 0)] = 'NonSet'),
                        (e[(e.Debug = 10)] = 'Debug'),
                        (e[(e.Info = 20)] = 'Info'),
                        (e[(e.Warning = 30)] = 'Warning');
                })(le || (le = {}));
                let ce;
                !(function (e) {
                    (e.Click = 'click'), (e.KeyDown = 'keydown');
                })(ce || (ce = {}));
                const ue = () => Date.now(),
                    de = (e, t) => {
                        const n = (0, r.useCallback)(
                            (n, r = le.Info, o) => {
                                o || (o = {}),
                                    Object.keys(o).length >= 200 ||
                                        window.uiLoggerModel.log({
                                            feature: e,
                                            group: t,
                                            action: n,
                                            logLevel: r,
                                            params: JSON.stringify(o),
                                        });
                            },
                            [e, t],
                        );
                        return (e, t, r) => n(e, t, r);
                    },
                    _e = (e, t) => {
                        const n = de(e, t),
                            o = (0, r.useRef)(new Map()),
                            i = (0, r.useRef)(new Map()),
                            a = (0, r.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = o.current.get(e);
                                    (void 0 !== t && t > 0) || o.current.set(e, ue());
                                },
                                [o],
                            ),
                            s = (0, r.useCallback)(() => {
                                o.current.clear(), i.current.clear();
                            }, [o, i]),
                            l = (0, r.useCallback)(
                                (e) => {
                                    e &&
                                        void 0 !== o.current.get(e) &&
                                        void 0 === i.current.get(e) &&
                                        i.current.set(e, ue());
                                },
                                [o, i],
                            ),
                            c = (0, r.useCallback)(
                                (e) => {
                                    if (!e) return;
                                    const t = o.current.get(e);
                                    if (void 0 === t) return;
                                    const n = i.current.get(e);
                                    if (void 0 === n) return;
                                    i.current.delete(e);
                                    const r = ue() - n;
                                    o.current.set(e, t + r);
                                },
                                [o, i],
                            ),
                            u = (0, r.useCallback)(
                                (e, t = 0, r, a) => {
                                    const s = o.current.get(e);
                                    if (void 0 === s) return;
                                    void 0 !== i.current.get(e) && c(e), o.current.delete(e);
                                    const l = (ue() - s) / 1e3;
                                    l <= t ||
                                        ((a = ((e, t) => (void 0 === e && (e = {}), (e.timeSpent = t), e))(a, l)),
                                        n(e, r, a));
                                },
                                [o, i, n, c],
                            );
                        return [(e) => a(e), (e, t, n, r) => u(e, t, n, r), () => s(), (e) => l(e), (e) => c(e)];
                    },
                    me = (e, t) => {
                        const n = _e(e, t),
                            r = n[0],
                            o = n[1],
                            i = n[2],
                            a = n[3],
                            s = n[4];
                        return [(e) => r(e), (e, t, n, r) => o(e, t, n, r), () => i(), (e) => a(e), (e) => s(e)];
                    },
                    pe = [
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
                        'onShow',
                        'onHide',
                    ];
                function ge(e) {
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
                const ve = (e, t, n = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: g.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: r,
                                },
                                n,
                            ),
                        );
                    },
                    be = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            o = e.args,
                            i = e.onMouseEnter,
                            a = e.onMouseLeave,
                            s = e.onMouseDown,
                            l = e.onClick,
                            c = e.ignoreShowDelay,
                            u = void 0 !== c && c,
                            d = e.ignoreMouseClick,
                            m = void 0 !== d && d,
                            p = e.decoratorId,
                            g = void 0 === p ? 0 : p,
                            v = e.isEnabled,
                            b = void 0 === v || v,
                            w = e.onShow,
                            E = e.onHide,
                            f = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    o = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                                return o;
                            })(e, pe);
                        const h = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            y = (0, r.useMemo)(() => _(), []).resId,
                            O = (0, r.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (ve(n, g, { isMouseEvent: !0, on: !0, arguments: ge(o) }, y),
                                    w && w(),
                                    (h.current.isVisible = !0));
                            }, [n, g, o, y, w]),
                            k = (0, r.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const e = h.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (h.current.timeoutId = 0)),
                                        ve(n, g, { on: !1 }, y),
                                        h.current.isVisible && E && E(),
                                        (h.current.isVisible = !1);
                                }
                            }, [n, g, y, E]),
                            P = (0, r.useCallback)((e) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(h.current.prevTarget) && k();
                                    }, 200)));
                            }, []);
                        (0, r.useEffect)(() => {
                            const e = h.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', P, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', P, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', k),
                                    () => {
                                        window.removeEventListener('mouseleave', k), k();
                                    }
                                ),
                                [k],
                            );
                        return b
                            ? (0, r.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((S = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((h.current.timeoutId = window.setTimeout(O, u ? 100 : 400)),
                                                      i && i(e),
                                                      S && S(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              k(), a && a(t), e && e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !m && k(), l && l(t), e && e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !m && k(), s && s(t), e && e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      f,
                                  ),
                              )
                            : t;
                        var S;
                    },
                    we = ['children'];
                function Ee() {
                    return (
                        (Ee =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        Ee.apply(this, arguments)
                    );
                }
                const fe = (e) => {
                        let t = e.children,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    o = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                                return o;
                            })(e, we);
                        return o().createElement(
                            be,
                            Ee(
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
                    },
                    he = {
                        base: 'Level_base_9f',
                        base__medium: 'Level_base__medium_6a',
                        base__large: 'Level_base__large_ec',
                        progressBarOverlay: 'Level_progressBarOverlay_39',
                        lesson: 'Level_lesson_74',
                        lesson__current: 'Level_lesson__current_dd',
                        separator: 'Level_separator_34',
                        separator__first: 'Level_separator__first_8c',
                        done: 'Level_done_93',
                        glow: 'Level_glow_aa',
                        flare: 'Level_flare_b5',
                    },
                    ye = (0, r.memo)(
                        ({
                            size: e,
                            isFirst: t,
                            lessonNumber: n,
                            completed: i,
                            current: a,
                            tooltipId: l,
                            loggerGroup: u,
                        }) => {
                            const _ = me(s.Bootcamp, u),
                                m = _[0],
                                p = _[1],
                                g = (0, r.useRef)(!1),
                                v = (0, r.useCallback)(() => {
                                    (g.current = !1), m(c.TooltipOpened);
                                }, [m]),
                                b = (0, r.useCallback)(() => {
                                    g.current || p(c.TooltipOpened, 2, le.Info, { tooltip: `level_${n}` });
                                }, [p, n, g]),
                                w = (0, r.useMemo)(() => ({ tooltipId: l }), [l]),
                                E = d()(he.lesson, a && he.lesson__current),
                                f = d()(he.separator, he.separator__first),
                                h = d()(he.base, he[`base__${e}`]);
                            return o().createElement(
                                'div',
                                { className: h },
                                o().createElement(
                                    fe,
                                    { args: w, onShow: v, onHide: b },
                                    o().createElement(
                                        'div',
                                        { className: he.progressBarOverlay },
                                        o().createElement('div', { className: he.separator }),
                                        a && o().createElement('div', { className: he.flare }),
                                        t && o().createElement('div', { className: f }),
                                        !i && o().createElement('div', { className: E }, n),
                                        i &&
                                            o().createElement(
                                                o().Fragment,
                                                null,
                                                e !== Ue.Small && o().createElement('div', { className: he.glow }),
                                                o().createElement('div', { className: he.done }),
                                            ),
                                    ),
                                ),
                            );
                        },
                    ),
                    Oe = 'BootcampProgress_base_67',
                    ke = 'BootcampProgress_icon_77',
                    Pe = 'BootcampProgress_icon__small_7a',
                    Se = 'BootcampProgress_icon__medium_1a',
                    Me = 'BootcampProgress_icon__large_1b',
                    Te = 'BootcampProgress_status_2a',
                    Ce = 'BootcampProgress_container_57',
                    De = 'BootcampProgress_container__medium_26',
                    Re = 'BootcampProgress_container__large_84',
                    Le = 'BootcampProgress_progressionBar_d5',
                    Ie = 'BootcampProgress_progressionBar__large_84',
                    Ae = [
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
                        'onShow',
                        'onHide',
                    ];
                function Ne(e) {
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
                const Be = (e, t, n = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: g.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: r,
                                },
                                n,
                            ),
                        );
                    },
                    Fe = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            o = e.args,
                            i = e.onMouseEnter,
                            a = e.onMouseLeave,
                            s = e.onMouseDown,
                            l = e.onClick,
                            c = e.ignoreShowDelay,
                            u = void 0 !== c && c,
                            d = e.ignoreMouseClick,
                            m = void 0 !== d && d,
                            p = e.decoratorId,
                            g = void 0 === p ? 0 : p,
                            v = e.isEnabled,
                            b = void 0 === v || v,
                            w = e.onShow,
                            E = e.onHide,
                            f = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    o = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                                return o;
                            })(e, Ae);
                        const h = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            y = (0, r.useMemo)(() => _(), []).resId,
                            O = (0, r.useCallback)(() => {
                                (h.current.isVisible && h.current.timeoutId) ||
                                    (Be(n, g, { isMouseEvent: !0, on: !0, arguments: Ne(o) }, y),
                                    w && w(),
                                    (h.current.isVisible = !0));
                            }, [n, g, o, y, w]),
                            k = (0, r.useCallback)(() => {
                                if (h.current.isVisible || h.current.timeoutId) {
                                    const e = h.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (h.current.timeoutId = 0)),
                                        Be(n, g, { on: !1 }, y),
                                        h.current.isVisible && E && E(),
                                        (h.current.isVisible = !1);
                                }
                            }, [n, g, y, E]),
                            P = (0, r.useCallback)((e) => {
                                h.current.isVisible &&
                                    ((h.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (h.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(h.current.prevTarget) && k();
                                    }, 200)));
                            }, []);
                        (0, r.useEffect)(() => {
                            const e = h.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', P, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', P, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', k),
                                    () => {
                                        window.removeEventListener('mouseleave', k), k();
                                    }
                                ),
                                [k],
                            );
                        return b
                            ? (0, r.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((S = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((h.current.timeoutId = window.setTimeout(O, u ? 100 : 400)),
                                                      i && i(e),
                                                      S && S(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              k(), a && a(t), e && e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !m && k(), l && l(t), e && e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !m && k(), s && s(t), e && e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      f,
                                  ),
                              )
                            : t;
                        var S;
                    };
                function xe() {
                    return (
                        (xe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        xe.apply(this, arguments)
                    );
                }
                let Ue;
                !(function (e) {
                    (e.Large = 'large'), (e.Medium = 'medium'), (e.Small = 'small');
                })(Ue || (Ue = {}));
                const Ve = (0, r.memo)(({ iconSize: e, progressSize: t, loggerGroup: n }) => {
                        const i = y('model'),
                            a = i.currentLesson,
                            l = i.totalLessons,
                            u = i.isNeedAwarding,
                            _ = y('model.levels'),
                            m = me(s.Bootcamp, n),
                            p = m[0],
                            g = m[1],
                            v = (0, r.useRef)(!1),
                            b = (0, r.useCallback)(() => {
                                (v.current = !0), p(c.TooltipOpened);
                            }, [p]),
                            w = (0, r.useCallback)(() => {
                                v.current && g(c.TooltipOpened, 2, le.Info);
                            }, [g, v]),
                            E = (0, r.useCallback)(
                                () => () => {
                                    w();
                                },
                                [w],
                            ),
                            f = e === Ue.Medium,
                            h = e === Ue.Large,
                            O = d()(ke, !u && Pe, f && Se, h && Me),
                            k = d()(Ce, f && De, h && Re),
                            P = t !== Ue.Small,
                            S = d()(Le, P && Ie);
                        return o().createElement(
                            'div',
                            { className: Oe },
                            o().createElement(
                                Fe,
                                { onShow: b, onHide: E, contentId: R.views.lobby.bootcamp.RewardsTooltip('resId') },
                                o().createElement('div', { className: O }),
                            ),
                            !u &&
                                o().createElement(
                                    'div',
                                    { className: Te },
                                    R.strings.bootcamp.tooltip.progression.status.got(),
                                ),
                            o().createElement(
                                'div',
                                { className: k },
                                o().createElement(
                                    'div',
                                    { className: S },
                                    o().createElement(se, { value: a, maxValue: l }),
                                ),
                                _.map(({ value: e }, r) =>
                                    o().createElement(
                                        ye,
                                        xe({ key: `level${r}`, size: t, isFirst: 0 === r, loggerGroup: n }, e),
                                    ),
                                ),
                            ),
                        );
                    }),
                    ze = 'BootcampProgressWidgetApp_base_2d',
                    je = 'BootcampProgressWidgetApp_content_4b',
                    $e = () =>
                        o().createElement(
                            'div',
                            { className: ze },
                            o().createElement(
                                'div',
                                { className: je },
                                o().createElement(Ve, {
                                    iconSize: Ue.Small,
                                    progressSize: Ue.Small,
                                    loggerGroup: l.BC_RESULT_SCREEN,
                                }),
                            ),
                        );
                engine.whenReady.then(() => {
                    a().render(o().createElement($e, null), document.getElementById('root'));
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
                var o = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, n, r] = deferred[l], i = !0, a = 0; a < t.length; a++)
                        (!1 & r || o >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[a]))
                            ? t.splice(a--, 1)
                            : ((i = !1), r < o && (o = r));
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
        (__webpack_require__.j = 779),
        (() => {
            var e = { 779: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var r,
                        o,
                        [i, a, s] = n,
                        l = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (r in a) __webpack_require__.o(a, r) && (__webpack_require__.m[r] = a[r]);
                        if (s) var c = s(__webpack_require__);
                    }
                    for (t && t(n); l < i.length; l++)
                        (o = i[l]), __webpack_require__.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
                    return __webpack_require__.O(c);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [172], () => __webpack_require__(390));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
