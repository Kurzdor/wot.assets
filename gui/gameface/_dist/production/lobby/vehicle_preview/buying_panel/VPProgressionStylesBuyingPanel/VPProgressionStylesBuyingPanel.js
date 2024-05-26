(() => {
    'use strict';
    var __webpack_modules__ = {
            527: (e, t, i) => {
                i.r(t), i.d(t, { mouse: () => l, onResize: () => a });
                var r = i(472),
                    n = i(176);
                const a = (0, r.E)('clientResized'),
                    s = { down: (0, r.E)('mousedown'), up: (0, r.E)('mouseup'), move: (0, r.E)('mousemove') };
                const l = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, n.R)(!1);
                    }
                    function i() {
                        e.enabled && (0, n.R)(!0);
                    }
                    function r() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', i))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', i))
                            : (0, n.R)(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (t, i) => (
                            (t[i] = (function (t) {
                                return (i) => {
                                    e.listeners += 1;
                                    let n = !0;
                                    const a = `mouse${t}`,
                                        l = s[t]((e) => i([e, 'outside']));
                                    function o(e) {
                                        i([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, o),
                                        r(),
                                        () => {
                                            n &&
                                                (l(),
                                                window.removeEventListener(a, o),
                                                (e.listeners -= 1),
                                                r(),
                                                (n = !1));
                                        }
                                    );
                                };
                            })(i)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, a, {
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
            959: (e, t, i) => {
                i.r(t),
                    i.d(t, {
                        events: () => r,
                        getMouseGlobalPosition: () => a,
                        getSize: () => n,
                        graphicsQuality: () => s,
                    });
                var r = i(527);
                function n(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const s = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            176: (e, t, i) => {
                function r(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                i.d(t, { R: () => r });
            },
            472: (e, t, i) => {
                function r(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                i.d(t, { E: () => r });
            },
            138: (e, t, i) => {
                i.d(t, { O: () => n });
                var r = i(959);
                const n = { view: i(641), client: r };
            },
            722: (e, t, i) => {
                function r(e, t, i = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, i);
                }
                function n(e, t, i) {
                    return `url(${r(e, t, i)})`;
                }
                i.r(t), i.d(t, { getBgUrl: () => n, getTextureUrl: () => r });
            },
            112: (e, t, i) => {
                i.d(t, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            538: (e, t, i) => {
                i.d(t, { U: () => n });
                var r = i(472);
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
            641: (e, t, i) => {
                i.r(t),
                    i.d(t, {
                        addModelObserver: () => d,
                        addPreloadTexture: () => l,
                        children: () => r,
                        displayStatus: () => n.W,
                        displayStatusIs: () => O,
                        events: () => a.U,
                        extraSize: () => T,
                        forceTriggerMouseMove: () => x,
                        freezeTextureBeforeResize: () => g,
                        getBrowserTexturePath: () => c,
                        getDisplayStatus: () => y,
                        getScale: () => w,
                        getSize: () => u,
                        getViewGlobalPosition: () => m,
                        isEventHandled: () => S,
                        isFocused: () => f,
                        pxToRem: () => v,
                        remToPx: () => b,
                        resize: () => h,
                        sendEvent: () => s.qP,
                        setAnimateWindow: () => E,
                        setEventHandled: () => p,
                        setInputPaddingsRem: () => o,
                        setSidePaddingsRem: () => _,
                        whenTutorialReady: () => L,
                    });
                var r = i(722),
                    n = i(112),
                    a = i(538),
                    s = i(566);
                function l(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function o(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function c(e, t, i, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, i, r);
                }
                function d(e, t, i) {
                    return viewEnv.addDataChangedCallback(e, t, i);
                }
                function _(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function u(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function h(e, t, i = 'px') {
                    return 'rem' === i ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function m(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: b(t.x), y: b(t.y) };
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
                function b(e) {
                    return viewEnv.remToPx(e);
                }
                function E(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function f() {
                    return viewEnv.isFocused();
                }
                function p() {
                    return viewEnv.setEventHandled();
                }
                function S() {
                    return viewEnv.isEventHandled();
                }
                function x() {
                    viewEnv.forceTriggerMouseMove();
                }
                function y() {
                    return viewEnv.getShowingStatus();
                }
                const O = Object.keys(n.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === n.W[t]), e),
                        {},
                    ),
                    T = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    L = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : a.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            566: (e, t, i) => {
                i.d(t, { qP: () => c });
                const r = ['args'];
                const n = 2,
                    a = 16,
                    s = 32,
                    l = 64,
                    o = (e, t) => {
                        const i = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var i,
                                        r,
                                        n = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) (i = a[r]), t.indexOf(i) >= 0 || (n[i] = e[i]);
                                    return n;
                                })(t, r);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: i, type: e }, s, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([e, t]) => {
                                                  const i = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: i, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: i, name: e, bool: t };
                                                      default:
                                                          return { __Type: i, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: i, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: i, type: e });
                        var n;
                    },
                    c = {
                        close(e) {
                            o('popover' === e ? n : s);
                        },
                        minimize() {
                            o(l);
                        },
                        move(e) {
                            o(a, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            358: (e, t, i) => {
                i.d(t, { Z: () => a });
                var r = i(138);
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
                    addCallback(e, t, i = 0, n = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = r.O.view.addModelObserver(e, i, n);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = t),
                                  i > 0 && (this._views[i] ? this._views[i].push(a) : (this._views[i] = [a])))
                                : console.error("Can't add callback for model:", e),
                            a
                        );
                    }
                    removeCallback(e, t = 0) {
                        let i = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((i = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            i || console.error("Can't remove callback by id:", e),
                            i
                        );
                    }
                    _emmitDataChanged(e, t, i) {
                        i.forEach((i) => {
                            const r = this._callbacks[i];
                            void 0 !== r && r(e, t);
                        });
                    }
                }
                n.__instance = void 0;
                const a = n;
            },
            572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
            596: (e, t, i) => {
                i.d(t, { Sw: () => a.Z, ry: () => E });
                class r {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: i }) => {
                                    let r = e.target;
                                    do {
                                        if (r === t) return;
                                        r = r.parentNode;
                                    } while (r);
                                    i();
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
                        const i = e,
                            r = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== i || t !== r)),
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
                var a = i(358);
                const s = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    l = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, i) => userLocale.getTimeFormat(e, t, void 0 === i || i),
                        getTimeString: (e, t, i) => userLocale.getTimeString(e, t, void 0 === i || i),
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
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    d = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                let h, m;
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
                })(h || (h = {})),
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
                    })(m || (m = {}));
                var g = i(138);
                const w = ['args'];
                function v(e, t, i, r, n, a, s) {
                    try {
                        var l = e[a](s),
                            o = l.value;
                    } catch (e) {
                        return void i(e);
                    }
                    l.done ? t(o) : Promise.resolve(o).then(r, n);
                }
                const b = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    E = (function () {
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
                                        i = arguments;
                                    return new Promise(function (r, n) {
                                        var a = e.apply(t, i);
                                        function s(e) {
                                            v(a, r, n, s, l, 'next', e);
                                        }
                                        function l(e) {
                                            v(a, r, n, s, l, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    f = (e, t) => {
                        const i = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const n = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var i,
                                        r,
                                        n = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) (i = a[r]), t.indexOf(i) >= 0 || (n[i] = e[i]);
                                    return n;
                                })(t, w);
                            void 0 !== n
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: i, type: e }, a, {
                                          arguments:
                                              ((r = n),
                                              Object.entries(r).map(([e, t]) => {
                                                  const i = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          i.number = t;
                                                          break;
                                                      case 'boolean':
                                                          i.bool = t;
                                                          break;
                                                      default:
                                                          i.string = t.toString();
                                                  }
                                                  return i;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: i, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: i, type: e });
                        var r;
                    },
                    p = () => f(o.CLOSE),
                    S = (e, t) => {
                        e.keyCode === h.ESCAPE && t();
                    };
                var x = i(572);
                const y = n.instance,
                    O = {
                        DataTracker: a.Z,
                        ViewModel: x.Z,
                        ViewEventType: o,
                        NumberFormatType: c,
                        RealFormatType: d,
                        TimeFormatType: _,
                        DateFormatType: u,
                        makeGlobalBoundingBox: b,
                        sendMoveEvent: (e) => f(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => f(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, i = 0) => {
                            f(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: i, args: t });
                        },
                        sendShowPopOverEvent: (e, t, i, r, n = R.invalid('resId'), a) => {
                            const s = g.O.view.getViewGlobalPosition(),
                                l = i.getBoundingClientRect(),
                                c = l.x,
                                d = l.y,
                                _ = l.width,
                                u = l.height,
                                h = {
                                    x: g.O.view.pxToRem(c) + s.x,
                                    y: g.O.view.pxToRem(d) + s.y,
                                    width: g.O.view.pxToRem(_),
                                    height: g.O.view.pxToRem(u),
                                };
                            f(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: n,
                                direction: t,
                                bbox: b(h),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => S(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            S(e, p);
                        },
                        handleViewEvent: f,
                        onBindingsReady: E,
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
                        dumpViewModel: function e(t) {
                            const i = {};
                            if ('object' != typeof t) return t;
                            for (const r in t)
                                if (Object.prototype.hasOwnProperty.call(t, r)) {
                                    const n = Object.prototype.toString.call(t[r]);
                                    if (n.startsWith('[object CoherentArrayProxy]')) {
                                        const n = t[r];
                                        i[r] = [];
                                        for (let t = 0; t < n.length; t++) i[r].push({ value: e(n[t].value) });
                                    } else
                                        n.startsWith('[object class BW::WULF::ViewModel')
                                            ? (i[r] = e(t[r]))
                                            : (i[r] = t[r]);
                                }
                            return i;
                        },
                        ClickOutsideManager: y,
                        SystemLocale: s,
                        UserLocale: l,
                    };
                window.ViewEnvHelper = O;
            },
            286: (e, t, i) => {
                var r = i(179),
                    n = i.n(r),
                    a = i(493),
                    s = i.n(a);
                const l = (e, t, i) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && i.extraLarge) ||
                          (t.largeHeight && i.large) ||
                          (t.mediumHeight && i.medium) ||
                          (t.smallHeight && i.small) ||
                          (t.extraSmallHeight && i.extraSmall)
                            ? e
                            : null
                        : e;
                var o = i(138);
                const c = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var d;
                function _(e, t, i) {
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
                        })(e, i),
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
                        })(t, i),
                        a = Math.min(r, n);
                    return {
                        extraLarge: a === i.extraLarge.weight,
                        large: a === i.large.weight,
                        medium: a === i.medium.weight,
                        small: a === i.small.weight,
                        extraSmall: a === i.extraSmall.weight,
                        extraLargeWidth: r === i.extraLarge.weight,
                        largeWidth: r === i.large.weight,
                        mediumWidth: r === i.medium.weight,
                        smallWidth: r === i.small.weight,
                        extraSmallWidth: r === i.extraSmall.weight,
                        extraLargeHeight: n === i.extraLarge.weight,
                        largeHeight: n === i.large.weight,
                        mediumHeight: n === i.medium.weight,
                        smallHeight: n === i.small.weight,
                        extraSmallHeight: n === i.extraSmall.weight,
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
                const u = o.O.client.getSize('rem'),
                    h = u.width,
                    m = u.height,
                    g = Object.assign({ width: h, height: m }, _(h, m, c)),
                    w = (0, r.createContext)(g),
                    v = ['children'];
                const b = (e) => {
                    let t = e.children,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var i,
                                r,
                                n = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) (i = a[r]), t.indexOf(i) >= 0 || (n[i] = e[i]);
                            return n;
                        })(e, v);
                    const n = (0, r.useContext)(w),
                        a = n.extraLarge,
                        s = n.large,
                        o = n.medium,
                        c = n.small,
                        d = n.extraSmall,
                        _ = n.extraLargeWidth,
                        u = n.largeWidth,
                        h = n.mediumWidth,
                        m = n.smallWidth,
                        g = n.extraSmallWidth,
                        b = n.extraLargeHeight,
                        E = n.largeHeight,
                        f = n.mediumHeight,
                        p = n.smallHeight,
                        S = n.extraSmallHeight,
                        x = { extraLarge: b, large: E, medium: f, small: p, extraSmall: S };
                    if (i.extraLarge || i.large || i.medium || i.small || i.extraSmall) {
                        if (i.extraLarge && a) return t;
                        if (i.large && s) return t;
                        if (i.medium && o) return t;
                        if (i.small && c) return t;
                        if (i.extraSmall && d) return t;
                    } else {
                        if (i.extraLargeWidth && _) return l(t, i, x);
                        if (i.largeWidth && u) return l(t, i, x);
                        if (i.mediumWidth && h) return l(t, i, x);
                        if (i.smallWidth && m) return l(t, i, x);
                        if (i.extraSmallWidth && g) return l(t, i, x);
                        if (
                            !(i.extraLargeWidth || i.largeWidth || i.mediumWidth || i.smallWidth || i.extraSmallWidth)
                        ) {
                            if (i.extraLargeHeight && b) return t;
                            if (i.largeHeight && E) return t;
                            if (i.mediumHeight && f) return t;
                            if (i.smallHeight && p) return t;
                            if (i.extraSmallHeight && S) return t;
                        }
                    }
                    return null;
                };
                b.defaultProps = {
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
                (0, r.memo)(b);
                const E = (e) => {
                        const t = (0, r.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    f = (0, r.memo)(({ children: e }) => {
                        const t = (0, r.useContext)(w),
                            i = (0, r.useState)(t),
                            a = i[0],
                            s = i[1],
                            l = (0, r.useCallback)((e, t) => {
                                const i = o.O.view.pxToRem(e),
                                    r = o.O.view.pxToRem(t);
                                s(Object.assign({ width: i, height: r }, _(i, r, c)));
                            }, []);
                        E(() => {
                            engine.on('clientResized', l);
                        }),
                            (0, r.useEffect)(() => () => engine.off('clientResized', l), [l]);
                        const d = (0, r.useMemo)(() => Object.assign({}, a), [a]);
                        return n().createElement(w.Provider, { value: d }, e);
                    });
                var p = i(483),
                    S = i.n(p);
                function x(e) {
                    engine.call('PlaySound', e);
                }
                const y = (e) => ({ transitionDelay: e / 20 + 's' }),
                    O = 'SwitcherBullet_base_3d',
                    T = 'SwitcherBullet_container_6e',
                    L = 'SwitcherBullet_base__selected_70',
                    M = 'SwitcherBullet_container__text_b3',
                    P = 'SwitcherBullet_finishedHover_37',
                    k = 'SwitcherBullet_base__finished_dd',
                    C = 'SwitcherBullet_base__hover_2a',
                    N = 'SwitcherBullet_iconSmall_b7',
                    A = 'SwitcherBullet_base__afterCurrent_cd',
                    D = 'SwitcherBullet_iconBig_dc',
                    F = 'SwitcherBullet_base__currentSelected_24',
                    W = 'SwitcherBullet_iconText_11',
                    H = 'SwitcherBullet_iconTextGlow_25',
                    I = 'SwitcherBullet_clickArea_ed',
                    B = 'SwitcherBullet_base__disabled_b9',
                    U = 'SwitcherBullet_disabled_b5',
                    V = 'SwitcherBullet_number_b4',
                    q = 'SwitcherBullet_currentText_f9',
                    j = 'SwitcherBullet_text_37',
                    K = 'SwitcherBullet_texture_1e',
                    z = ({
                        numberToDisplay: e,
                        index: t,
                        selectedIndex: i,
                        previousSelectedIndex: a,
                        onChange: s,
                        currentIndex: l,
                        currentText: o,
                        isDisabled: c = !1,
                        mouseEnterSound: d,
                        clickSound: _,
                    }) => {
                        const u = t !== i,
                            h = (0, r.useState)(!1),
                            m = h[0],
                            g = h[1],
                            w = (0, r.useCallback)(() => {
                                g(!0), u && x(d);
                            }, [u, d, g]),
                            v = (0, r.useCallback)(() => {
                                u && (x(_), s(e));
                            }, [u, _, e, s]),
                            b = (0, r.useCallback)(() => {
                                g(!1);
                            }, [g]),
                            E = l || 0,
                            f = S()(
                                O,
                                t === i && L,
                                t === i && t === E && F,
                                t > E && t !== i && A,
                                t <= E && k,
                                m && C,
                                c && B,
                            ),
                            p = (0, r.useMemo)(
                                () =>
                                    ((e, t, i) =>
                                        e === t
                                            ? y(0)
                                            : e === i
                                              ? y(Math.abs(e - t) - 2)
                                              : (i > t && e > t && e < i) || (i < t && e < t && e > i)
                                                ? y(Math.abs(e - t) - 1)
                                                : void 0)(t, a, i),
                                [t, a, i],
                            ),
                            M = (0, r.useCallback)(
                                () => ((t === i && t === E) || t === i ? 'big' : 'small'),
                                [t, i, E],
                            ),
                            W = (0, r.useMemo)(() => {
                                const e = R.images.gui.maps.icons.components.switcher.numbers,
                                    i = t > E ? 'light' : 'dark';
                                return Object.assign({}, p, {
                                    backgroundImage: `url(${e.$dyn(`number_${t}_${M()}_${i}`)})`,
                                });
                            }, [t, E, p, M]);
                        return n().createElement(
                            'div',
                            { className: f },
                            n().createElement(
                                'div',
                                { className: T, style: p },
                                n().createElement('div', { className: P, style: p }),
                                n().createElement('div', { className: N, style: p }),
                                n().createElement('div', { className: D, style: p }),
                                n().createElement('div', { className: U }),
                                n().createElement('div', { className: V, style: W }),
                                n().createElement('div', {
                                    className: I,
                                    style: p,
                                    onClick: v,
                                    onMouseEnter: w,
                                    onMouseLeave: b,
                                }),
                            ),
                            o && t === l && n().createElement('div', { className: q }, o),
                        );
                    },
                    G = ({
                        numberToDisplay: e,
                        index: t,
                        selectedIndex: i,
                        previousSelectedIndex: a,
                        onChange: s,
                        currentIndex: l = 0,
                        isDisabled: o = !1,
                        mouseEnterSound: c,
                        clickSound: d,
                        styleID: _,
                    }) => {
                        const u = t === i,
                            h = (0, r.useState)(!1),
                            m = h[0],
                            g = h[1],
                            w = (0, r.useCallback)(() => {
                                g(!0), u || x(c);
                            }, [u, c, g]),
                            v = (0, r.useCallback)(() => {
                                u || (x(d), s(e));
                            }, [u, d, e, s]),
                            b = (0, r.useCallback)(() => {
                                g(!1);
                            }, [g]),
                            E = R.strings.vehicle_customization.style_switcher.$dyn(`style_${_}`).$dyn(`level${e}`),
                            f = S()(O, u && L, u && t === l && F, t > l && t !== i && A, t <= l && k, m && C, o && B),
                            p = (0, r.useMemo)(
                                () =>
                                    ((e, t, i) =>
                                        e === t
                                            ? y(0)
                                            : e === i
                                              ? y(Math.abs(e - t) - 2)
                                              : (i > t && e > t && e < i) || (i < t && e < t && e > i)
                                                ? y(Math.abs(e - t) - 1)
                                                : void 0)(t, a, i),
                                [t, a, i],
                            ),
                            P = S()(T, M);
                        return n().createElement(
                            'div',
                            { className: f },
                            n().createElement(
                                'div',
                                { className: P, style: p },
                                u && n().createElement('div', { className: K }),
                                !u && n().createElement('div', { className: H }),
                                n().createElement('div', { className: W, style: p }),
                                n().createElement('div', { className: j }, E),
                                n().createElement('div', {
                                    className: I,
                                    style: p,
                                    onClick: v,
                                    onMouseEnter: w,
                                    onMouseLeave: b,
                                }),
                            ),
                        );
                    },
                    $ = 'SwitcherSeparator_base_c1',
                    Y = 'SwitcherSeparator_base__isBeforeSelectedBullet_e0',
                    Z = 'SwitcherSeparator_base__notAnimated_58',
                    X = 'SwitcherSeparator_base__scaled_57',
                    Q = 'SwitcherSeparator_base__rightTransformOrigin_16',
                    J = 'SwitcherSeparator_base__leftTransformOrigin_7f',
                    ee = 'SwitcherSeparator_base__transitionTransformOrigin_b2',
                    te = ({ index: e, selectedIndex: t, previousSelectedIndex: i, isAnimated: r = !0 }) => {
                        const a = ((e, t, i) =>
                                e === t + 1 || e === t - 1
                                    ? y(0)
                                    : e === i + 1 || e === i - 1
                                      ? y(Math.abs(i - t) - 2)
                                      : (i > t && e > t && e < i + 1) || (i < t && e < t && e > i - 1)
                                        ? y(Math.abs(e - t) - 1)
                                        : void 0)(e, i, t),
                            s = 1 === Math.abs(e - t),
                            l = 1 === Math.abs(e - i),
                            o = ((e, t, i, r) =>
                                e === i + 1 || (e === t + 1 && !r)
                                    ? Q
                                    : e === i - 1 || (e === t - 1 && !r)
                                      ? J
                                      : void 0)(e, i, t, s),
                            c = S()(
                                $,
                                r && e < t && Y,
                                r && l && s && ee,
                                r && (e === t + 1 || e === t - 1) && X,
                                r && o,
                                !r && Z,
                            );
                        return n().createElement('div', { className: c, style: a });
                    },
                    ie = (e, t, i) => Math.min(Math.max(e, t), i),
                    re = {
                        base: 'Switcher_base_7a',
                        base__hasCurrentText: 'Switcher_base__hasCurrentText_6f',
                        base__small: 'Switcher_base__small_6a',
                        base__isVisible: 'Switcher_base__isVisible_43',
                    };
                let ne;
                !(function (e) {
                    (e[(e.digital = 0)] = 'digital'), (e[(e.text = 1)] = 'text');
                })(ne || (ne = {}));
                const ae = (e, t) => ('number' == typeof e ? 2 * (e - t) : void 0);
                let se;
                !(function (e) {
                    e.small = 'small';
                })(se || (se = {}));
                const le = ({
                        numberOfBullets: e,
                        selectedNumber: t,
                        onChange: i,
                        currentText: a,
                        currentNumber: s,
                        startNumber: l = 1,
                        isBulletsBeforeCurrentDisabled: o = !1,
                        size: c,
                        mouseEnterSound: d = 'highlight',
                        clickSound: _ = 'play',
                        isArabic: u = !1,
                        hasLightShadows: h = !1,
                        styleID: m = 0,
                        switcherType: g = ne.digital,
                    }) => {
                        const w = (0, r.useState)(!1),
                            v = w[0],
                            b = w[1];
                        (0, r.useEffect)(
                            () =>
                                ((e, t) => {
                                    let i;
                                    const r = setTimeout(() => {
                                        i = e();
                                    }, t);
                                    return () => {
                                        'function' == typeof i && i(), clearTimeout(r);
                                    };
                                })(() => b(!0), 0),
                            [],
                        );
                        const E = l + e - 1,
                            f = ie(t, o && s ? s : l, E),
                            p = 'number' == typeof s ? ie(s, l, E) : void 0,
                            x = ae(f, l),
                            y = ae(p, l),
                            O = (0, r.useRef)(x);
                        (0, r.useEffect)(() => {
                            O.current = x;
                        });
                        const T = O.current,
                            L = S()(
                                re.base,
                                a && void 0 !== y && re.base__hasCurrentText,
                                c && re[`base__${c}`],
                                v && re.base__isVisible,
                            ),
                            M = (0, r.useMemo)(
                                () =>
                                    ((e, t) => {
                                        const i = [];
                                        for (let r = e; r <= t; r++) i.push(r);
                                        return i;
                                    })(l, E),
                                [E, l],
                            ),
                            P = g === ne.digital;
                        return n().createElement(
                            'div',
                            { className: L },
                            M.map((e, t) => {
                                const r = 2 * t,
                                    s = !(!o || !y) && r < y;
                                return n().createElement(
                                    n().Fragment,
                                    { key: t },
                                    t > 0 &&
                                        n().createElement(te, {
                                            index: r - 1,
                                            selectedIndex: x,
                                            previousSelectedIndex: T,
                                            isAnimated: P,
                                        }),
                                    P
                                        ? n().createElement(z, {
                                              index: r,
                                              selectedIndex: x,
                                              previousSelectedIndex: T,
                                              numberToDisplay: e,
                                              currentIndex: y,
                                              currentText: a,
                                              onChange: i,
                                              isDisabled: s,
                                              mouseEnterSound: d,
                                              clickSound: _,
                                              isArabic: u,
                                              hasLightShadows: h,
                                          })
                                        : n().createElement(G, {
                                              index: r,
                                              selectedIndex: x,
                                              previousSelectedIndex: T,
                                              numberToDisplay: e,
                                              currentIndex: y,
                                              onChange: i,
                                              isDisabled: s,
                                              mouseEnterSound: d,
                                              clickSound: _,
                                              hasLightShadows: h,
                                              styleID: m,
                                          }),
                                );
                            }),
                        );
                    },
                    oe = (e = 1) => {
                        const t = new Error().stack;
                        let i,
                            r = R.invalid('resId');
                        return (
                            t &&
                                ((i = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                window.__feature &&
                                    window.__feature !== i &&
                                    window.subViews[i] &&
                                    (r = window.subViews[i].id)),
                            { caller: i, stack: t, resId: r }
                        );
                    },
                    ce = (e, t) => e.split('.').reduce((e, t) => e && e[t], t);
                var de = i(596);
                const _e = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    ue = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    he = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, i) => {
                                const r = ce(`${e}.${i}`, window);
                                return _e(r) ? t(e, i, r) : `${e}.${i}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    me = (e) => {
                        const t = ((e) => {
                                const t = oe(),
                                    i = t.caller,
                                    r = t.resId,
                                    n = window.__feature && window.__feature !== i && i ? `subViews.${i}` : '';
                                return { modelPrefix: n, modelPath: ue(n, e || ''), resId: r };
                            })(),
                            i = t.modelPrefix,
                            r = e.split('.');
                        if (r.length > 0) {
                            const e = [r[0]];
                            return (
                                r.reduce((t, r) => {
                                    const n = ce(ue(i, `${t}.${r}`), window);
                                    return _e(n) ? (e.push(n.id), `${t}.${r}.value`) : (e.push(r), `${t}.${r}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    },
                    ge = de.Sw.instance;
                let we;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(we || (we = {}));
                const ve = (e = 'model', t = we.Deep) => {
                        const i = (0, r.useState)(0),
                            n = (i[0], i[1]),
                            a = (0, r.useMemo)(() => oe(), []),
                            s = a.caller,
                            l = a.resId,
                            o = (0, r.useMemo)(
                                () => (window.__feature && window.__feature !== s ? `subViews.${s}.${e}` : e),
                                [s, e],
                            ),
                            c = (0, r.useState)(() =>
                                ((e) => {
                                    const t = ce(e, window);
                                    for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                    return _e(t) ? t.value : t;
                                })(he(o)),
                            ),
                            d = c[0],
                            _ = c[1],
                            u = (0, r.useRef)(-1);
                        return (
                            E(() => {
                                if (
                                    ('boolean' == typeof t &&
                                        ((t = t ? we.Deep : we.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    t !== we.None)
                                ) {
                                    const i = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            t === we.Deep
                                                ? (e === d && n((e) => e + 1), _(e))
                                                : _(Object.assign([], e));
                                        },
                                        r = me(e);
                                    u.current = ge.addCallback(r, i, l, t === we.Deep);
                                }
                            }),
                            (0, r.useEffect)(() => {
                                if (t !== we.None)
                                    return () => {
                                        ge.removeCallback(u.current, l);
                                    };
                            }, [l, t]),
                            d
                        );
                    },
                    be = {
                        base: 'Content_base_47',
                        base__shown: 'Content_base__shown_3f',
                        content: 'Content_content_54',
                        notification: 'Content_notification_6e',
                        base__small: 'Content_base__small_fa',
                        notificationIcon: 'Content_notificationIcon_f8',
                    },
                    Ee = R.strings.vehicle_preview.buyingPanel.progressionStyles.currentLevel(),
                    fe = () => {
                        const e = ve(),
                            t = e.currentLevel,
                            i = e.selectedLevel,
                            a = e.isReady,
                            s = e.onChange,
                            l = e.numberOfBullets,
                            o = void 0 === l ? 4 : l,
                            c = e.isBulletsBeforeCurrentDisabled,
                            d = e.switcherType,
                            _ = e.styleID,
                            u = (0, r.useContext)(w),
                            h = u.smallHeight || u.extraSmallHeight,
                            m = u.smallWidth || u.extraSmallWidth,
                            g =
                                d === ne.text
                                    ? R.strings.vehicle_preview.buyingPanel.progressionStyles.notification.rewind_enable.text()
                                    : R.strings.vehicle_preview.buyingPanel.progressionStyles.notification.text(),
                            v = (0, r.useCallback)((e) => s({ selectedLevel: e }), [s]),
                            b = S()(be.base, h && m && be.base__small, a && be.base__shown),
                            E = S()(be.content, d === ne.text && be.content__text);
                        return (
                            (0, r.useEffect)(
                                () =>
                                    ((e) => {
                                        let t,
                                            i = null;
                                        return (
                                            (i = requestAnimationFrame(() => {
                                                i = requestAnimationFrame(() => {
                                                    (i = null), (t = e());
                                                });
                                            })),
                                            () => {
                                                'function' == typeof t && t(), null !== i && cancelAnimationFrame(i);
                                            }
                                        );
                                    })(() => {
                                        h && m && viewEnv.setInputArea(176, 50, 400, 150);
                                    }),
                                [h, m],
                            ),
                            n().createElement(
                                'div',
                                { className: b },
                                n().createElement(
                                    'div',
                                    { className: E },
                                    n().createElement('div', { className: be.notification }, g),
                                    n().createElement(le, {
                                        numberOfBullets: o,
                                        currentNumber: t,
                                        selectedNumber: i,
                                        onChange: v,
                                        currentText: systemLocale.toUpperCase(Ee),
                                        clickSound: 'bp_style_reward_view',
                                        isBulletsBeforeCurrentDisabled: c,
                                        switcherType: d,
                                        styleID: _,
                                    }),
                                ),
                            )
                        );
                    },
                    pe = () => n().createElement(f, null, n().createElement(fe, null));
                engine.whenReady.then(() => {
                    s().render(n().createElement(pe, null), document.getElementById('root'));
                });
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var i = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](i, i.exports, __webpack_require__), i.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, i, r) => {
            if (!t) {
                var n = 1 / 0;
                for (o = 0; o < deferred.length; o++) {
                    for (var [t, i, r] = deferred[o], a = !0, s = 0; s < t.length; s++)
                        (!1 & r || n >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((a = !1), r < n && (n = r));
                    if (a) {
                        deferred.splice(o--, 1);
                        var l = i();
                        void 0 !== l && (e = l);
                    }
                }
                return e;
            }
            r = r || 0;
            for (var o = deferred.length; o > 0 && deferred[o - 1][2] > r; o--) deferred[o] = deferred[o - 1];
            deferred[o] = [t, i, r];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(t, { a: t }), t;
        }),
        (__webpack_require__.d = (e, t) => {
            for (var i in t)
                __webpack_require__.o(t, i) &&
                    !__webpack_require__.o(e, i) &&
                    Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
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
        (__webpack_require__.j = 469),
        (() => {
            var e = { 469: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, i) => {
                    var r,
                        n,
                        [a, s, l] = i,
                        o = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (r in s) __webpack_require__.o(s, r) && (__webpack_require__.m[r] = s[r]);
                        if (l) var c = l(__webpack_require__);
                    }
                    for (t && t(i); o < a.length; o++)
                        (n = a[o]), __webpack_require__.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
                    return __webpack_require__.O(c);
                },
                i = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            i.forEach(t.bind(null, 0)), (i.push = t.bind(null, i.push.bind(i)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [294], () => __webpack_require__(286));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
