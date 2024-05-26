(() => {
    'use strict';
    var __webpack_modules__ = {
            774: (e, t, n) => {
                n.d(t, { O: () => j });
                var i = {};
                n.r(i), n.d(i, { mouse: () => d, onResize: () => l });
                var o = {};
                n.r(o),
                    n.d(o, {
                        events: () => i,
                        getMouseGlobalPosition: () => v,
                        getSize: () => h,
                        graphicsQuality: () => f,
                    });
                var r = {};
                n.r(r), n.d(r, { getBgUrl: () => p, getTextureUrl: () => _ });
                var s = {};
                function a(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                function c(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                n.r(s),
                    n.d(s, {
                        addModelObserver: () => T,
                        addPreloadTexture: () => y,
                        children: () => r,
                        displayStatus: () => m,
                        displayStatusIs: () => V,
                        events: () => w,
                        extraSize: () => B,
                        forceTriggerMouseMove: () => U,
                        freezeTextureBeforeResize: () => R,
                        getBrowserTexturePath: () => M,
                        getDisplayStatus: () => z,
                        getScale: () => L,
                        getSize: () => S,
                        getViewGlobalPosition: () => C,
                        isEventHandled: () => I,
                        isFocused: () => N,
                        pxToRem: () => x,
                        remToPx: () => D,
                        resize: () => P,
                        sendEvent: () => E,
                        setAnimateWindow: () => k,
                        setEventHandled: () => F,
                        setInputPaddingsRem: () => O,
                        setSidePaddingsRem: () => A,
                        whenTutorialReady: () => W,
                    });
                const l = a('clientResized'),
                    u = { down: a('mousedown'), up: a('mouseup'), move: a('mousemove') },
                    d = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && c(!1);
                        }
                        function n() {
                            e.enabled && c(!0);
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
                                : c(!1);
                        }
                        const o = ['down', 'up', 'move'].reduce(
                            (t, n) => (
                                (t[n] = (function (t) {
                                    return (n) => {
                                        e.listeners += 1;
                                        let o = !0;
                                        const r = `mouse${t}`,
                                            s = u[t]((e) => n([e, 'outside']));
                                        function a(e) {
                                            n([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(r, a),
                                            i(),
                                            () => {
                                                o &&
                                                    (s(),
                                                    window.removeEventListener(r, a),
                                                    (e.listeners -= 1),
                                                    i(),
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
                                (e.enabled = !1), i();
                            },
                            enable() {
                                (e.enabled = !0), i();
                            },
                            enableOutside() {
                                e.enabled && c(!0);
                            },
                            disableOutside() {
                                e.enabled && c(!1);
                            },
                        });
                    })();
                function h(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function v(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const f = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function _(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function p(e, t, n) {
                    return `url(${_(e, t, n)})`;
                }
                const m = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    w = {
                        onTextureFrozen: a('self.onTextureFrozen'),
                        onTextureReady: a('self.onTextureReady'),
                        onDomBuilt: a('self.onDomBuilt'),
                        onLoaded: a('self.onLoaded'),
                        onDisplayChanged: a('self.onShowingStatusChanged'),
                        onFocusUpdated: a('self.onFocusChanged'),
                        children: {
                            onAdded: a('children.onAdded'),
                            onLoaded: a('children.onLoaded'),
                            onRemoved: a('children.onRemoved'),
                            onAttached: a('children.onAttached'),
                            onTextureReady: a('children.onTextureReady'),
                            onRequestPosition: a('children.requestPosition'),
                        },
                    },
                    b = ['args'],
                    g = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const o = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        i,
                                        o = {},
                                        r = Object.keys(e);
                                    for (i = 0; i < r.length; i++) (n = r[i]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                                    return o;
                                })(t, b);
                            return void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, r, {
                                          arguments:
                                              ((i = o),
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
                    E = {
                        close(e) {
                            g('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            g(64);
                        },
                        move(e) {
                            g(16, { isMouseEvent: !0, on: e });
                        },
                    };
                function y(e) {
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
                function A(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function S(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function P(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function C(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: D(t.x), y: D(t.y) };
                }
                function R() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function L() {
                    return viewEnv.getScale();
                }
                function x(e) {
                    return viewEnv.pxToRem(e);
                }
                function D(e) {
                    return viewEnv.remToPx(e);
                }
                function k(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function N() {
                    return viewEnv.isFocused();
                }
                function F() {
                    return viewEnv.setEventHandled();
                }
                function I() {
                    return viewEnv.isEventHandled();
                }
                function U() {
                    viewEnv.forceTriggerMouseMove();
                }
                function z() {
                    return viewEnv.getShowingStatus();
                }
                const V = Object.keys(m).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === m[t]), e), {}),
                    B = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    W = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : w.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    j = { view: s, client: o };
            },
            310: (e, t, n) => {
                n.d(t, { Z: () => r });
                var i = n(774);
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
                        const r = i.O.view.addModelObserver(e, n, o);
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
                o.__instance = void 0;
                const r = o;
            },
            421: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(310),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(461);
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
            461: (e, t, n) => {
                n.d(t, { ry: () => g, Eu: () => E });
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
                const o = i;
                var r = n(310);
                const s = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    a = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, n) => userLocale.getTimeFormat(e, t, void 0 === n || n),
                        getTimeString: (e, t, n) => userLocale.getTimeString(e, t, void 0 === n || n),
                    };
                let c;
                var l;
                ((l = c || (c = {}))[(l.UNDEFINED = 0)] = 'UNDEFINED'),
                    (l[(l.TOOLTIP = 1)] = 'TOOLTIP'),
                    (l[(l.POP_OVER = 2)] = 'POP_OVER'),
                    (l[(l.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (l[(l.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (l[(l.MOVE = 16)] = 'MOVE'),
                    (l[(l.CLOSE = 32)] = 'CLOSE'),
                    (l[(l.MINIMIZE = 64)] = 'MINIMIZE');
                const u = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    d = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    h = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    v = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                let f, _;
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
                })(f || (f = {})),
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
                    })(_ || (_ = {}));
                var p = n(774);
                const m = ['args'];
                function w(e, t, n, i, o, r, s) {
                    try {
                        var a = e[r](s),
                            c = a.value;
                    } catch (e) {
                        return void n(e);
                    }
                    a.done ? t(c) : Promise.resolve(c).then(i, o);
                }
                const b = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                    return new Promise(function (i, o) {
                                        var r = e.apply(t, n);
                                        function s(e) {
                                            w(r, i, o, s, a, 'next', e);
                                        }
                                        function a(e) {
                                            w(r, i, o, s, a, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    E = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    y = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const o = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        i,
                                        o = {},
                                        r = Object.keys(e);
                                    for (i = 0; i < r.length; i++) (n = r[i]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                                    return o;
                                })(t, m);
                            void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, r, {
                                          arguments:
                                              ((i = o),
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
                    O = () => y(c.CLOSE),
                    M = (e, t) => {
                        e.keyCode === f.ESCAPE && t();
                    };
                var T = n(421);
                const A = o.instance,
                    S = {
                        DataTracker: r.Z,
                        ViewModel: T.Z,
                        ViewEventType: c,
                        NumberFormatType: u,
                        RealFormatType: d,
                        TimeFormatType: h,
                        DateFormatType: v,
                        makeGlobalBoundingBox: b,
                        sendMoveEvent: (e) => y(c.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: O,
                        sendClosePopOverEvent: () => y(c.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            y(c.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, i, o = R.invalid('resId'), r) => {
                            const s = p.O.view.getViewGlobalPosition(),
                                a = n.getBoundingClientRect(),
                                l = a.x,
                                u = a.y,
                                d = a.width,
                                h = a.height,
                                v = {
                                    x: p.O.view.pxToRem(l) + s.x,
                                    y: p.O.view.pxToRem(u) + s.y,
                                    width: p.O.view.pxToRem(d),
                                    height: p.O.view.pxToRem(h),
                                };
                            y(c.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: i || R.invalid('resId'),
                                targetID: o,
                                direction: t,
                                bbox: b(v),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => M(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            M(e, O);
                        },
                        handleViewEvent: y,
                        onBindingsReady: g,
                        onLayoutReady: E,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(c.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(c.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(c.POP_OVER),
                        dumpViewModel: function e(t) {
                            const n = {};
                            if ('object' != typeof t) return t;
                            for (const i in t)
                                if (Object.prototype.hasOwnProperty.call(t, i)) {
                                    const o = Object.prototype.toString.call(t[i]);
                                    if (o.startsWith('[object CoherentArrayProxy]')) {
                                        const o = t[i];
                                        n[i] = [];
                                        for (let t = 0; t < o.length; t++) n[i].push({ value: e(o[t].value) });
                                    } else
                                        o.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[i] = e(t[i]))
                                            : (n[i] = t[i]);
                                }
                            return n;
                        },
                        ClickOutsideManager: A,
                        SystemLocale: s,
                        UserLocale: a,
                    };
                window.ViewEnvHelper = S;
            },
        },
        __webpack_module_cache__ = {};
    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var n = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](n, n.exports, __webpack_require__), n.exports;
    }
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
        });
    var __webpack_exports__ = {};
    (() => {
        var e = (function () {
                if ('undefined' != typeof Map) return Map;
                function e(e, t) {
                    var n = -1;
                    return (
                        e.some(function (e, i) {
                            return e[0] === t && ((n = i), !0);
                        }),
                        n
                    );
                }
                return (function () {
                    function t() {
                        this.__entries__ = [];
                    }
                    return (
                        Object.defineProperty(t.prototype, 'size', {
                            get: function () {
                                return this.__entries__.length;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.get = function (t) {
                            var n = e(this.__entries__, t),
                                i = this.__entries__[n];
                            return i && i[1];
                        }),
                        (t.prototype.set = function (t, n) {
                            var i = e(this.__entries__, t);
                            ~i ? (this.__entries__[i][1] = n) : this.__entries__.push([t, n]);
                        }),
                        (t.prototype.delete = function (t) {
                            var n = this.__entries__,
                                i = e(n, t);
                            ~i && n.splice(i, 1);
                        }),
                        (t.prototype.has = function (t) {
                            return !!~e(this.__entries__, t);
                        }),
                        (t.prototype.clear = function () {
                            this.__entries__.splice(0);
                        }),
                        (t.prototype.forEach = function (e, t) {
                            void 0 === t && (t = null);
                            for (var n = 0, i = this.__entries__; n < i.length; n++) {
                                var o = i[n];
                                e.call(t, o[1], o[0]);
                            }
                        }),
                        t
                    );
                })();
            })(),
            t = 'undefined' != typeof window && 'undefined' != typeof document && window.document === document,
            n =
                void 0 !== __webpack_require__.g && __webpack_require__.g.Math === Math
                    ? __webpack_require__.g
                    : 'undefined' != typeof self && self.Math === Math
                      ? self
                      : 'undefined' != typeof window && window.Math === Math
                        ? window
                        : Function('return this')(),
            i =
                'function' == typeof requestAnimationFrame
                    ? requestAnimationFrame.bind(n)
                    : function (e) {
                          return setTimeout(function () {
                              return e(Date.now());
                          }, 1e3 / 60);
                      },
            o = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'],
            r = 'undefined' != typeof MutationObserver,
            s = (function () {
                function e() {
                    (this.connected_ = !1),
                        (this.mutationEventsAdded_ = !1),
                        (this.mutationsObserver_ = null),
                        (this.observers_ = []),
                        (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
                        (this.refresh = (function (e, t) {
                            var n = !1,
                                o = !1,
                                r = 0;
                            function s() {
                                n && ((n = !1), e()), o && c();
                            }
                            function a() {
                                i(s);
                            }
                            function c() {
                                var e = Date.now();
                                if (n) {
                                    if (e - r < 2) return;
                                    o = !0;
                                } else (n = !0), (o = !1), setTimeout(a, 20);
                                r = e;
                            }
                            return c;
                        })(this.refresh.bind(this)));
                }
                return (
                    (e.prototype.addObserver = function (e) {
                        ~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_();
                    }),
                    (e.prototype.removeObserver = function (e) {
                        var t = this.observers_,
                            n = t.indexOf(e);
                        ~n && t.splice(n, 1), !t.length && this.connected_ && this.disconnect_();
                    }),
                    (e.prototype.refresh = function () {
                        this.updateObservers_() && this.refresh();
                    }),
                    (e.prototype.updateObservers_ = function () {
                        var e = this.observers_.filter(function (e) {
                            return e.gatherActive(), e.hasActive();
                        });
                        return (
                            e.forEach(function (e) {
                                return e.broadcastActive();
                            }),
                            e.length > 0
                        );
                    }),
                    (e.prototype.connect_ = function () {
                        t &&
                            !this.connected_ &&
                            (document.addEventListener('transitionend', this.onTransitionEnd_),
                            window.addEventListener('resize', this.refresh),
                            r
                                ? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
                                  this.mutationsObserver_.observe(document, {
                                      attributes: !0,
                                      childList: !0,
                                      characterData: !0,
                                      subtree: !0,
                                  }))
                                : (document.addEventListener('DOMSubtreeModified', this.refresh),
                                  (this.mutationEventsAdded_ = !0)),
                            (this.connected_ = !0));
                    }),
                    (e.prototype.disconnect_ = function () {
                        t &&
                            this.connected_ &&
                            (document.removeEventListener('transitionend', this.onTransitionEnd_),
                            window.removeEventListener('resize', this.refresh),
                            this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
                            this.mutationEventsAdded_ &&
                                document.removeEventListener('DOMSubtreeModified', this.refresh),
                            (this.mutationsObserver_ = null),
                            (this.mutationEventsAdded_ = !1),
                            (this.connected_ = !1));
                    }),
                    (e.prototype.onTransitionEnd_ = function (e) {
                        var t = e.propertyName,
                            n = void 0 === t ? '' : t;
                        o.some(function (e) {
                            return !!~n.indexOf(e);
                        }) && this.refresh();
                    }),
                    (e.getInstance = function () {
                        return this.instance_ || (this.instance_ = new e()), this.instance_;
                    }),
                    (e.instance_ = null),
                    e
                );
            })(),
            a = function (e, t) {
                for (var n = 0, i = Object.keys(t); n < i.length; n++) {
                    var o = i[n];
                    Object.defineProperty(e, o, { value: t[o], enumerable: !1, writable: !1, configurable: !0 });
                }
                return e;
            },
            c = function (e) {
                return (e && e.ownerDocument && e.ownerDocument.defaultView) || n;
            },
            l = f(0, 0, 0, 0);
        function u(e) {
            return parseFloat(e) || 0;
        }
        function d(e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            return t.reduce(function (t, n) {
                return t + u(e['border-' + n + '-width']);
            }, 0);
        }
        var h =
            'undefined' != typeof SVGGraphicsElement
                ? function (e) {
                      return e instanceof c(e).SVGGraphicsElement;
                  }
                : function (e) {
                      return e instanceof c(e).SVGElement && 'function' == typeof e.getBBox;
                  };
        function v(e) {
            return t
                ? h(e)
                    ? (function (e) {
                          var t = e.getBBox();
                          return f(0, 0, t.width, t.height);
                      })(e)
                    : (function (e) {
                          var t = e.offsetWidth,
                              n = e.offsetHeight;
                          if (!t && !n) return l;
                          var i = c(e).getComputedStyle(e),
                              o = (function (e) {
                                  for (var t = {}, n = 0, i = ['top', 'right', 'bottom', 'left']; n < i.length; n++) {
                                      var o = i[n],
                                          r = e['padding-' + o];
                                      t[o] = u(r);
                                  }
                                  return t;
                              })(i),
                              r = o.left + o.right,
                              s = o.top + o.bottom,
                              a = u(i.width),
                              h = u(i.height);
                          if (
                              ('border-box' === i.boxSizing &&
                                  (Math.round(a + r) !== t && (a -= d(i, 'left', 'right') + r),
                                  Math.round(h + s) !== n && (h -= d(i, 'top', 'bottom') + s)),
                              !(function (e) {
                                  return e === c(e).document.documentElement;
                              })(e))
                          ) {
                              var v = Math.round(a + r) - t,
                                  _ = Math.round(h + s) - n;
                              1 !== Math.abs(v) && (a -= v), 1 !== Math.abs(_) && (h -= _);
                          }
                          return f(o.left, o.top, a, h);
                      })(e)
                : l;
        }
        function f(e, t, n, i) {
            return { x: e, y: t, width: n, height: i };
        }
        var _ = (function () {
                function e(e) {
                    (this.broadcastWidth = 0),
                        (this.broadcastHeight = 0),
                        (this.contentRect_ = f(0, 0, 0, 0)),
                        (this.target = e);
                }
                return (
                    (e.prototype.isActive = function () {
                        var e = v(this.target);
                        return (
                            (this.contentRect_ = e),
                            e.width !== this.broadcastWidth || e.height !== this.broadcastHeight
                        );
                    }),
                    (e.prototype.broadcastRect = function () {
                        var e = this.contentRect_;
                        return (this.broadcastWidth = e.width), (this.broadcastHeight = e.height), e;
                    }),
                    e
                );
            })(),
            p = function (e, t) {
                var n,
                    i,
                    o,
                    r,
                    s,
                    c,
                    l,
                    u =
                        ((i = (n = t).x),
                        (o = n.y),
                        (r = n.width),
                        (s = n.height),
                        (c = 'undefined' != typeof DOMRectReadOnly ? DOMRectReadOnly : Object),
                        (l = Object.create(c.prototype)),
                        a(l, { x: i, y: o, width: r, height: s, top: o, right: i + r, bottom: s + o, left: i }),
                        l);
                a(this, { target: e, contentRect: u });
            },
            m = (function () {
                function t(t, n, i) {
                    if (((this.activeObservations_ = []), (this.observations_ = new e()), 'function' != typeof t))
                        throw new TypeError('The callback provided as parameter 1 is not a function.');
                    (this.callback_ = t), (this.controller_ = n), (this.callbackCtx_ = i);
                }
                return (
                    (t.prototype.observe = function (e) {
                        if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
                        if ('undefined' != typeof Element && Element instanceof Object) {
                            if (!(e instanceof c(e).Element))
                                throw new TypeError('parameter 1 is not of type "Element".');
                            var t = this.observations_;
                            t.has(e) ||
                                (t.set(e, new _(e)), this.controller_.addObserver(this), this.controller_.refresh());
                        }
                    }),
                    (t.prototype.unobserve = function (e) {
                        if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
                        if ('undefined' != typeof Element && Element instanceof Object) {
                            if (!(e instanceof c(e).Element))
                                throw new TypeError('parameter 1 is not of type "Element".');
                            var t = this.observations_;
                            t.has(e) && (t.delete(e), t.size || this.controller_.removeObserver(this));
                        }
                    }),
                    (t.prototype.disconnect = function () {
                        this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
                    }),
                    (t.prototype.gatherActive = function () {
                        var e = this;
                        this.clearActive(),
                            this.observations_.forEach(function (t) {
                                t.isActive() && e.activeObservations_.push(t);
                            });
                    }),
                    (t.prototype.broadcastActive = function () {
                        if (this.hasActive()) {
                            var e = this.callbackCtx_,
                                t = this.activeObservations_.map(function (e) {
                                    return new p(e.target, e.broadcastRect());
                                });
                            this.callback_.call(e, t, e), this.clearActive();
                        }
                    }),
                    (t.prototype.clearActive = function () {
                        this.activeObservations_.splice(0);
                    }),
                    (t.prototype.hasActive = function () {
                        return this.activeObservations_.length > 0;
                    }),
                    t
                );
            })(),
            w = 'undefined' != typeof WeakMap ? new WeakMap() : new e(),
            b = function e(t) {
                if (!(this instanceof e)) throw new TypeError('Cannot call a class as a function.');
                if (!arguments.length) throw new TypeError('1 argument required, but only 0 present.');
                var n = s.getInstance(),
                    i = new m(t, n, this);
                w.set(this, i);
            };
        ['observe', 'unobserve', 'disconnect'].forEach(function (e) {
            b.prototype[e] = function () {
                var t;
                return (t = w.get(this))[e].apply(t, arguments);
            };
        });
        const g = void 0 !== n.ResizeObserver ? n.ResizeObserver : b;
        function E() {
            if (!(this instanceof E)) return new E();
            (this.size = 0),
                (this.uid = 0),
                (this.selectors = []),
                (this.selectorObjects = {}),
                (this.indexes = Object.create(this.indexes)),
                (this.activeIndexes = []);
        }
        var y = window.document.documentElement,
            O =
                y.matches ||
                y.webkitMatchesSelector ||
                y.mozMatchesSelector ||
                y.oMatchesSelector ||
                y.msMatchesSelector;
        (E.prototype.matchesSelector = function (e, t) {
            return O.call(e, t);
        }),
            (E.prototype.querySelectorAll = function (e, t) {
                return t.querySelectorAll(e);
            }),
            (E.prototype.indexes = []);
        var M = /^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
        E.prototype.indexes.push({
            name: 'ID',
            selector: function (e) {
                var t;
                if ((t = e.match(M))) return t[0].slice(1);
            },
            element: function (e) {
                if (e.id) return [e.id];
            },
        });
        var T = /^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
        E.prototype.indexes.push({
            name: 'CLASS',
            selector: function (e) {
                var t;
                if ((t = e.match(T))) return t[0].slice(1);
            },
            element: function (e) {
                var t = e.className;
                if (t) {
                    if ('string' == typeof t) return t.split(/\s/);
                    if ('object' == typeof t && 'baseVal' in t) return t.baseVal.split(/\s/);
                }
            },
        });
        var A,
            S = /^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
        E.prototype.indexes.push({
            name: 'TAG',
            selector: function (e) {
                var t;
                if ((t = e.match(S))) return t[0].toUpperCase();
            },
            element: function (e) {
                return [e.nodeName.toUpperCase()];
            },
        }),
            (E.prototype.indexes.default = {
                name: 'UNIVERSAL',
                selector: function () {
                    return !0;
                },
                element: function () {
                    return [!0];
                },
            }),
            (A =
                'function' == typeof window.Map
                    ? window.Map
                    : (function () {
                          function e() {
                              this.map = {};
                          }
                          return (
                              (e.prototype.get = function (e) {
                                  return this.map[e + ' '];
                              }),
                              (e.prototype.set = function (e, t) {
                                  this.map[e + ' '] = t;
                              }),
                              e
                          );
                      })());
        var P =
            /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;
        function C(e, t) {
            var n,
                i,
                o,
                r,
                s,
                a,
                c = (e = e.slice(0).concat(e.default)).length,
                l = t,
                u = [];
            do {
                if ((P.exec(''), (o = P.exec(l)) && ((l = o[3]), o[2] || !l)))
                    for (n = 0; n < c; n++)
                        if ((s = (a = e[n]).selector(o[1]))) {
                            for (i = u.length, r = !1; i--; )
                                if (u[i].index === a && u[i].key === s) {
                                    r = !0;
                                    break;
                                }
                            r || u.push({ index: a, key: s });
                            break;
                        }
            } while (o);
            return u;
        }
        function R(e, t) {
            var n, i, o;
            for (n = 0, i = e.length; n < i; n++) if (((o = e[n]), t.isPrototypeOf(o))) return o;
        }
        function L(e, t) {
            return e.id - t.id;
        }
        (E.prototype.logDefaultIndexUsed = function () {}),
            (E.prototype.add = function (e, t) {
                var n,
                    i,
                    o,
                    r,
                    s,
                    a,
                    c,
                    l,
                    u = this.activeIndexes,
                    d = this.selectors,
                    h = this.selectorObjects;
                if ('string' == typeof e) {
                    for (
                        h[(n = { id: this.uid++, selector: e, data: t }).id] = n, c = C(this.indexes, e), i = 0;
                        i < c.length;
                        i++
                    )
                        (r = (l = c[i]).key),
                            (s = R(u, (o = l.index))) || (((s = Object.create(o)).map = new A()), u.push(s)),
                            o === this.indexes.default && this.logDefaultIndexUsed(n),
                            (a = s.map.get(r)) || ((a = []), s.map.set(r, a)),
                            a.push(n);
                    this.size++, d.push(e);
                }
            }),
            (E.prototype.remove = function (e, t) {
                if ('string' == typeof e) {
                    var n,
                        i,
                        o,
                        r,
                        s,
                        a,
                        c,
                        l,
                        u = this.activeIndexes,
                        d = (this.selectors = []),
                        h = this.selectorObjects,
                        v = {},
                        f = 1 === arguments.length;
                    for (n = C(this.indexes, e), o = 0; o < n.length; o++)
                        for (i = n[o], r = u.length; r--; )
                            if (((a = u[r]), i.index.isPrototypeOf(a))) {
                                if ((c = a.map.get(i.key)))
                                    for (s = c.length; s--; )
                                        (l = c[s]).selector !== e ||
                                            (!f && l.data !== t) ||
                                            (c.splice(s, 1), (v[l.id] = !0));
                                break;
                            }
                    for (o in v) delete h[o], this.size--;
                    for (o in h) d.push(h[o].selector);
                }
            }),
            (E.prototype.queryAll = function (e) {
                if (!this.selectors.length) return [];
                var t,
                    n,
                    i,
                    o,
                    r,
                    s,
                    a,
                    c,
                    l = {},
                    u = [],
                    d = this.querySelectorAll(this.selectors.join(', '), e);
                for (t = 0, i = d.length; t < i; t++)
                    for (r = d[t], n = 0, o = (s = this.matches(r)).length; n < o; n++)
                        l[(c = s[n]).id]
                            ? (a = l[c.id])
                            : ((a = { id: c.id, selector: c.selector, data: c.data, elements: [] }),
                              (l[c.id] = a),
                              u.push(a)),
                            a.elements.push(r);
                return u.sort(L);
            }),
            (E.prototype.matches = function (e) {
                if (!e) return [];
                var t,
                    n,
                    i,
                    o,
                    r,
                    s,
                    a,
                    c,
                    l,
                    u,
                    d,
                    h = this.activeIndexes,
                    v = {},
                    f = [];
                for (t = 0, o = h.length; t < o; t++)
                    if ((c = (a = h[t]).element(e)))
                        for (n = 0, r = c.length; n < r; n++)
                            if ((l = a.map.get(c[n])))
                                for (i = 0, s = l.length; i < s; i++)
                                    !v[(d = (u = l[i]).id)] &&
                                        this.matchesSelector(e, u.selector) &&
                                        ((v[d] = !0), f.push(u));
                return f.sort(L);
            });
        var x = null,
            D = null,
            k = [];
        function N(e, t) {
            var n = [];
            function i() {
                var e = n;
                (n = []), t(e);
            }
            return function () {
                for (var t = arguments.length, o = Array(t), r = 0; r < t; r++) o[r] = arguments[r];
                n.push(o), 1 === n.length && F(e, i);
            };
        }
        function F(e, t) {
            D || (D = new MutationObserver(I)),
                x || ((x = e.createElement('div')), D.observe(x, { attributes: !0 })),
                k.push(t),
                x.setAttribute('data-twiddle', '' + Date.now());
        }
        function I() {
            var e = k;
            k = [];
            for (var t = 0; t < e.length; t++)
                try {
                    e[t]();
                } catch (e) {
                    setTimeout(function () {
                        throw e;
                    }, 0);
                }
        }
        var U = new WeakMap(),
            z = new WeakMap(),
            V = new WeakMap(),
            B = new WeakMap();
        function W(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n],
                    o = i[0],
                    r = i[1],
                    s = i[2];
                o === Z ? (j(s, r), q(s, r)) : o === X ? H(s, r) : o === Q && K(e.observers, r);
            }
        }
        function j(e, t) {
            if (t instanceof e.elementConstructor) {
                var n = U.get(t);
                if ((n || ((n = []), U.set(t, n)), -1 === n.indexOf(e.id))) {
                    var i = void 0;
                    if ((e.initialize && (i = e.initialize.call(void 0, t)), i)) {
                        var o = z.get(t);
                        o || ((o = {}), z.set(t, o)), (o['' + e.id] = i);
                    }
                    n.push(e.id);
                }
            }
        }
        function q(e, t) {
            if (t instanceof e.elementConstructor) {
                var n = B.get(t);
                if ((n || ((n = []), B.set(t, n)), -1 === n.indexOf(e.id))) {
                    e.elements.push(t);
                    var i = z.get(t),
                        o = i ? i['' + e.id] : null;
                    if ((o && o.add && o.add.call(void 0, t), e.subscribe)) {
                        var r = e.subscribe.call(void 0, t);
                        if (r) {
                            var s = V.get(t);
                            s || ((s = {}), V.set(t, s)), (s['' + e.id] = r);
                        }
                    }
                    e.add && e.add.call(void 0, t), n.push(e.id);
                }
            }
        }
        function H(e, t) {
            if (t instanceof e.elementConstructor) {
                var n = B.get(t);
                if (n) {
                    var i = e.elements.indexOf(t);
                    if ((-1 !== i && e.elements.splice(i, 1), -1 !== (i = n.indexOf(e.id)))) {
                        var o = z.get(t),
                            r = o ? o['' + e.id] : null;
                        if ((r && r.remove && r.remove.call(void 0, t), e.subscribe)) {
                            var s = V.get(t),
                                a = s ? s['' + e.id] : null;
                            a && a.unsubscribe && a.unsubscribe();
                        }
                        e.remove && e.remove.call(void 0, t), n.splice(i, 1);
                    }
                    0 === n.length && B.delete(t);
                }
            }
        }
        function K(e, t) {
            var n = B.get(t);
            if (n) {
                for (var i = n.slice(0), o = 0; o < i.length; o++) {
                    var r = e[i[o]];
                    if (r) {
                        var s = r.elements.indexOf(t);
                        -1 !== s && r.elements.splice(s, 1);
                        var a = z.get(t),
                            c = a ? a['' + r.id] : null;
                        c && c.remove && c.remove.call(void 0, t);
                        var l = V.get(t),
                            u = l ? l['' + r.id] : null;
                        u && u.unsubscribe && u.unsubscribe(), r.remove && r.remove.call(void 0, t);
                    }
                }
                B.delete(t);
            }
        }
        var G = null;
        function Y(e) {
            return (
                'matches' in e ||
                'webkitMatchesSelector' in e ||
                'mozMatchesSelector' in e ||
                'oMatchesSelector' in e ||
                'msMatchesSelector' in e
            );
        }
        var Z = 1,
            X = 2,
            Q = 3;
        function $(e, t, n) {
            for (var i = 0; i < n.length; i++) {
                var o = n[i];
                if (Y(o))
                    for (var r = e.selectorSet.matches(o), s = 0; s < r.length; s++) {
                        var a = r[s].data;
                        t.push([Z, o, a]);
                    }
                if ('querySelectorAll' in o)
                    for (var c = e.selectorSet.queryAll(o), l = 0; l < c.length; l++)
                        for (var u = c[l], d = u.data, h = u.elements, v = 0; v < h.length; v++) t.push([Z, h[v], d]);
            }
        }
        function J(e, t, n) {
            for (var i = 0; i < n.length; i++) {
                var o = n[i];
                if ('querySelectorAll' in o) {
                    t.push([Q, o]);
                    for (var r = o.querySelectorAll('*'), s = 0; s < r.length; s++) t.push([Q, r[s]]);
                }
            }
        }
        function ee(e, t, n) {
            if (Y(n))
                for (var i = e.selectorSet.matches(n), o = 0; o < i.length; o++) {
                    var r = i[o].data;
                    t.push([Z, n, r]);
                }
            if ('querySelectorAll' in n) {
                var s = B.get(n);
                if (s)
                    for (var a = 0; a < s.length; a++) {
                        var c = e.observers[s[a]];
                        c && (e.selectorSet.matchesSelector(n, c.selector) || t.push([X, n, c]));
                    }
            }
        }
        var te =
                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                              ? 'symbol'
                              : typeof e;
                      },
            ne = 0;
        function ie(e) {
            (this.rootNode = 9 === e.nodeType ? e.documentElement : e),
                (this.ownerDocument = 9 === e.nodeType ? e : e.ownerDocument),
                (this.observers = []),
                (this.selectorSet = new E()),
                (this.mutationObserver = new MutationObserver(se.bind(this, this))),
                (this._scheduleAddRootNodes = N(this.ownerDocument, re.bind(this, this))),
                (this._handleThrottledChangedTargets = N(this.ownerDocument, ce.bind(this, this))),
                this.rootNode.addEventListener('change', ae.bind(this, this), !1),
                (function (e, t) {
                    var n = e.readyState;
                    'interactive' === n || 'complete' === n ? F(e, t) : e.addEventListener('DOMContentLoaded', F(e, t));
                })(this.ownerDocument, oe.bind(this, this));
        }
        function oe(e) {
            e.mutationObserver.observe(e.rootNode, { childList: !0, attributes: !0, subtree: !0 }),
                e._scheduleAddRootNodes();
        }
        function re(e) {
            var t = [];
            $(e, t, [e.rootNode]), W(e, t);
        }
        function se(e, t) {
            var n = [];
            (function (e, t, n) {
                for (var i = 0; i < n.length; i++) {
                    var o = n[i];
                    'childList' === o.type
                        ? ($(e, t, o.addedNodes || []), J(0, t, o.removedNodes || []))
                        : 'attributes' === o.type && ee(e, t, o.target);
                }
                (function (e) {
                    if (null === G) {
                        var t = e.createElement('div'),
                            n = e.createElement('div'),
                            i = e.createElement('div');
                        t.appendChild(n), n.appendChild(i), (t.innerHTML = ''), (G = i.parentNode !== n);
                    }
                    return G;
                })(e.ownerDocument) &&
                    (function (e, t) {
                        for (var n = 0; n < e.observers.length; n++) {
                            var i = e.observers[n];
                            if (i)
                                for (var o = i.elements, r = 0; r < o.length; r++) {
                                    var s = o[r];
                                    s.parentNode || t.push([Q, s]);
                                }
                        }
                    })(e, t);
            })(e, n, t),
                W(e, n);
        }
        function ae(e, t) {
            e._handleThrottledChangedTargets(t.target);
        }
        function ce(e, t) {
            var n = [];
            !(function (e, t, n) {
                for (var i = 0; i < n.length; i++)
                    for (
                        var o = n[i], r = o.form ? o.form.elements : e.rootNode.querySelectorAll('input'), s = 0;
                        s < r.length;
                        s++
                    )
                        ee(e, t, r[s]);
            })(e, n, t),
                W(e, n);
        }
        (ie.prototype.disconnect = function () {
            this.mutationObserver.disconnect();
        }),
            (ie.prototype.observe = function (e, t) {
                var n = void 0;
                'function' == typeof t
                    ? (n = { selector: e, initialize: t })
                    : 'object' === (void 0 === t ? 'undefined' : te(t))
                      ? ((n = t).selector = e)
                      : (n = e);
                var i = this,
                    o = {
                        id: ne++,
                        selector: n.selector,
                        initialize: n.initialize,
                        add: n.add,
                        remove: n.remove,
                        subscribe: n.subscribe,
                        elements: [],
                        elementConstructor: n.hasOwnProperty('constructor')
                            ? n.constructor
                            : this.ownerDocument.defaultView.Element,
                        abort: function () {
                            i._abortObserving(o);
                        },
                    };
                return this.selectorSet.add(o.selector, o), (this.observers[o.id] = o), this._scheduleAddRootNodes(), o;
            }),
            (ie.prototype._abortObserving = function (e) {
                for (var t = e.elements, n = 0; n < t.length; n++) H(e, t[n]);
                this.selectorSet.remove(e.selector, e), delete this.observers[e.id];
            }),
            (ie.prototype.triggerObservers = function (e) {
                var t = [];
                !(function (e, t, n) {
                    if ('querySelectorAll' in n) {
                        ee(e, t, n);
                        for (var i = n.querySelectorAll('*'), o = 0; o < i.length; o++) ee(e, t, i[o]);
                    }
                })(this, t, e),
                    W(this, t);
            });
        var le = void 0;
        function ue() {
            return le || (le = new ie(window.document)), le;
        }
        var de,
            he = __webpack_require__(774),
            ve = __webpack_require__(461);
        function fe(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
            return i;
        }
        function _e(e, t, n, i, o, r, s) {
            try {
                var a = e[r](s),
                    c = a.value;
            } catch (e) {
                return void n(e);
            }
            a.done ? t(c) : Promise.resolve(c).then(i, o);
        }
        function pe(e) {
            return function () {
                var t = this,
                    n = arguments;
                return new Promise(function (i, o) {
                    var r = e.apply(t, n);
                    function s(e) {
                        _e(r, i, o, s, a, 'next', e);
                    }
                    function a(e) {
                        _e(r, i, o, s, a, 'throw', e);
                    }
                    s(void 0);
                });
            };
        }
        he.O.client.events.mouse.disable(),
            (function (e) {
                e['nth-child'] = 'nth-child';
            })(de || (de = {}));
        const me = new Map(),
            we = (e) => {
                if ('HTML' === e.nodeName) return { element: e, native: !0 };
                const t = e.parentNode;
                if (t && t instanceof HTMLElement) {
                    if (t.className.includes('ScrollArea_base')) return { element: t, native: !1 };
                    const e = getComputedStyle(t).overflow;
                    return 'scroll' === e || 'auto' === e ? { element: t, native: !0 } : we(t);
                }
            },
            be = (function () {
                var e = pe(function* ({ scrollableContainer: e, element: t, componentId: n, viewId: i }) {
                    yield (0, ve.Eu)();
                    const o = t.getBoundingClientRect(),
                        r = ((e, t) => {
                            const n = e.top - t.top <= t.height && e.top + e.height - t.top >= 0,
                                i = e.left - t.left <= t.width && e.left + e.width - t.left >= 0;
                            return n && i;
                        })(o, e.element.getBoundingClientRect());
                    if (r) {
                        const e = window.tutorialModel.foundComponents.items.filter(
                            (e) => Boolean(e) && e.value.componentId === n,
                        )[0];
                        if (e) {
                            const t = e.value;
                            (t.rect.x = o.x),
                                (t.rect.y = o.y),
                                (t.rect.width = o.width),
                                (t.rect.height = o.height),
                                window.tutorialModel.onComponentUpdate({ componentId: n, viewId: i });
                        }
                    }
                });
                return function (t) {
                    return e.apply(this, arguments);
                };
            })(),
            ge = (e) => {
                const t = window.tutorialModel.descriptions.views.filter((t) => t.value.viewId === e)[0];
                if (t) {
                    const n = t.value.components;
                    window.addEventListener('resize', () => {
                        me.forEach(({ element: t, scrollableContainer: n }, i) => {
                            be({ scrollableContainer: n, element: t, componentId: i, viewId: e });
                        });
                    }),
                        n.length &&
                            n.forEach(({ value: { path: e, componentId: t, viewId: n } }) => {
                                if (!e) return;
                                let i = -1;
                                const o = e.split(':'),
                                    r = o[0],
                                    s = o.slice(1).reduce((e, t) => {
                                        const n = t.split(/\(([^)]+)\)/),
                                            i = n[0],
                                            o = n[1],
                                            r = parseInt(o);
                                        return (e[i] = isNaN(r) ? o : r), e;
                                    }, {}),
                                    a = new g((e) => {
                                        const i = window.tutorialModel.foundComponents.items.filter(
                                            (e) => Boolean(e) && e.value.componentId === t,
                                        )[0];
                                        if (i) {
                                            const s = i.value;
                                            for (
                                                var o,
                                                    r = (function (e, t) {
                                                        var n =
                                                            ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                                                            e['@@iterator'];
                                                        if (n) return (n = n.call(e)).next.bind(n);
                                                        if (
                                                            Array.isArray(e) ||
                                                            (n = (function (e, t) {
                                                                if (e) {
                                                                    if ('string' == typeof e) return fe(e, t);
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
                                                                              ? fe(e, t)
                                                                              : void 0
                                                                    );
                                                                }
                                                            })(e)) ||
                                                            (t && e && 'number' == typeof e.length)
                                                        ) {
                                                            n && (e = n);
                                                            var i = 0;
                                                            return function () {
                                                                return i >= e.length
                                                                    ? { done: !0 }
                                                                    : { done: !1, value: e[i++] };
                                                            };
                                                        }
                                                        throw new TypeError(
                                                            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                        );
                                                    })(e);
                                                !(o = r()).done;

                                            ) {
                                                const e = o.value.contentRect,
                                                    i = e.width,
                                                    r = e.height;
                                                (s.rect.width = i),
                                                    (s.rect.height = r),
                                                    window.tutorialModel.onComponentUpdate({
                                                        componentId: t,
                                                        viewId: n,
                                                    });
                                            }
                                        }
                                    });
                                !(function () {
                                    var e;
                                    (e = ue()).observe.apply(e, arguments);
                                })(r, {
                                    initialize(e) {
                                        if (s[de['nth-child']] > 0 && (i++, i !== s[de['nth-child']])) return;
                                        const o = we(e),
                                            r = (function () {
                                                var i = pe(function* () {
                                                    be({
                                                        scrollableContainer: o,
                                                        element: e,
                                                        componentId: t,
                                                        viewId: n,
                                                    });
                                                });
                                                return function () {
                                                    return i.apply(this, arguments);
                                                };
                                            })();
                                        let c;
                                        return {
                                            add: () =>
                                                pe(function* () {
                                                    me.set(t, { element: e, scrollableContainer: o }),
                                                        yield (0, ve.Eu)(),
                                                        yield (0, ve.Eu)(),
                                                        o &&
                                                            (o.native
                                                                ? o.element.addEventListener('scroll', r)
                                                                : (o.element.addEventListener('ps-scroll-x', r),
                                                                  o.element.addEventListener('ps-scroll-y', r))),
                                                        a.observe(e);
                                                    const i = e.getBoundingClientRect();
                                                    let s = i.x,
                                                        l = i.y;
                                                    window.tutorialModel.onComponentFound({
                                                        componentId: t,
                                                        viewId: n,
                                                        x: s,
                                                        y: l,
                                                        width: i.width,
                                                        height: i.height,
                                                    }),
                                                        (c = window.setInterval(() => {
                                                            if (
                                                                (() => {
                                                                    const t = e.getBoundingClientRect(),
                                                                        n = t.x !== s || l !== t.y;
                                                                    return (s = t.x), (l = t.y), n;
                                                                })()
                                                            ) {
                                                                const e =
                                                                    window.tutorialModel.foundComponents.items.filter(
                                                                        (e) => Boolean(e) && e.value.componentId === t,
                                                                    );
                                                                if (e.length > 0) {
                                                                    const i = e[0].value;
                                                                    (i.rect.x = s),
                                                                        (i.rect.y = l),
                                                                        window.tutorialModel.onComponentUpdate({
                                                                            componentId: t,
                                                                            viewId: n,
                                                                        });
                                                                }
                                                            } else clearInterval(c);
                                                        }, 100));
                                                })(),
                                            remove() {
                                                clearInterval(c),
                                                    me.delete(t),
                                                    (i = -1),
                                                    o &&
                                                        (o.native
                                                            ? o.element.removeEventListener('scroll', r)
                                                            : (o.element.removeEventListener('ps-scroll-x', r),
                                                              o.element.removeEventListener('ps-scroll-y', r))),
                                                    a.disconnect(),
                                                    window.tutorialModel.foundComponents &&
                                                        window.tutorialModel.foundComponents.items.some(
                                                            (e) => e.value.componentId === t,
                                                        ) &&
                                                        window.tutorialModel.onComponentDisposed({
                                                            componentId: t,
                                                            viewId: n,
                                                        });
                                            },
                                        };
                                    },
                                });
                            });
                }
                return {
                    updateComponents: () => {
                        me.forEach(({ element: t, scrollableContainer: n }, i) => {
                            be({ scrollableContainer: n, element: t, componentId: i, viewId: e });
                        });
                    },
                };
            };
        he.O.view.events.onDomBuilt(() => {
            const e = ge(window.__featureId.toString());
            window.tutorialApi = e;
        });
    })();
})();
