(() => {
    'use strict';
    var __webpack_modules__ = {
            5067: (e, t, n) => {
                n.d(t, { O: () => j });
                var a = {};
                n.r(a), n.d(a, { mouse: () => u, onResize: () => c });
                var i = {};
                n.r(i),
                    n.d(i, {
                        events: () => a,
                        getMouseGlobalPosition: () => _,
                        getSize: () => m,
                        graphicsQuality: () => g,
                    });
                var r = {};
                n.r(r), n.d(r, { getBgUrl: () => b, getTextureUrl: () => p });
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
                        addModelObserver: () => O,
                        addPreloadTexture: () => P,
                        children: () => r,
                        displayStatus: () => v,
                        displayStatusIs: () => z,
                        events: () => f,
                        extraSize: () => W,
                        forceTriggerMouseMove: () => U,
                        freezeTextureBeforeResize: () => C,
                        getBrowserTexturePath: () => S,
                        getDisplayStatus: () => B,
                        getScale: () => T,
                        getSize: () => k,
                        getViewGlobalPosition: () => D,
                        isEventHandled: () => F,
                        isFocused: () => L,
                        pxToRem: () => x,
                        remToPx: () => R,
                        resize: () => M,
                        sendEvent: () => h,
                        setAnimateWindow: () => I,
                        setEventHandled: () => N,
                        setInputPaddingsRem: () => y,
                        setSidePaddingsRem: () => A,
                        whenTutorialReady: () => V,
                    });
                const c = s('clientResized'),
                    d = { down: s('mousedown'), up: s('mouseup'), move: s('mousemove') },
                    u = (function () {
                        const e = { listeners: 0, enabled: !0, initialized: !1 };
                        function t() {
                            e.enabled && l(!1);
                        }
                        function n() {
                            e.enabled && l(!0);
                        }
                        function a() {
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
                        const i = ['down', 'up', 'move'].reduce(
                            (t, n) => (
                                (t[n] = (function (t) {
                                    return (n) => {
                                        e.listeners += 1;
                                        let i = !0;
                                        const r = `mouse${t}`,
                                            o = d[t]((e) => n([e, 'outside']));
                                        function s(e) {
                                            n([e, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(r, s),
                                            a(),
                                            () => {
                                                i &&
                                                    (o(),
                                                    window.removeEventListener(r, s),
                                                    (e.listeners -= 1),
                                                    a(),
                                                    (i = !1));
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
                                (e.enabled = !1), a();
                            },
                            enable() {
                                (e.enabled = !0), a();
                            },
                            enableOutside() {
                                e.enabled && l(!0);
                            },
                            disableOutside() {
                                e.enabled && l(!1);
                            },
                        });
                    })();
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function _(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const g = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function p(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function b(e, t, n) {
                    return `url(${p(e, t, n)})`;
                }
                const v = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    f = {
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
                    w = ['args'],
                    E = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        i = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                    return i;
                                })(t, w);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, r, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, r));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var a;
                    },
                    h = {
                        close(e) {
                            E('popover' === e ? 2 : 32);
                        },
                        minimize() {
                            E(64);
                        },
                        move(e) {
                            E(16, { isMouseEvent: !0, on: e });
                        },
                    };
                function P(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function y(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function S(e, t, n, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, a);
                }
                function O(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function A(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function k(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function M(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function D(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: R(t.x), y: R(t.y) };
                }
                function C() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function T() {
                    return viewEnv.getScale();
                }
                function x(e) {
                    return viewEnv.pxToRem(e);
                }
                function R(e) {
                    return viewEnv.remToPx(e);
                }
                function I(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function L() {
                    return viewEnv.isFocused();
                }
                function N() {
                    return viewEnv.setEventHandled();
                }
                function F() {
                    return viewEnv.isEventHandled();
                }
                function U() {
                    viewEnv.forceTriggerMouseMove();
                }
                function B() {
                    return viewEnv.getShowingStatus();
                }
                const z = Object.keys(v).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === v[t]), e), {}),
                    W = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    V = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : f.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    j = { view: o, client: i };
            },
            5521: (e, t, n) => {
                let a, i;
                n.d(t, { n: () => a }),
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
                    })(a || (a = {})),
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
            1358: (e, t, n) => {
                n.d(t, { Z: () => r });
                var a = n(5067);
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
                    addCallback(e, t, n = 0, i = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = a.O.view.addModelObserver(e, n, i);
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
                            const a = this._callbacks[n];
                            void 0 !== a && a(e, t);
                        });
                    }
                }
                i.__instance = void 0;
                const r = i;
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
                n.d(t, { B0: () => l, ry: () => w });
                class a {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: n }) => {
                                    let a = e.target;
                                    do {
                                        if (a === t) return;
                                        a = a.parentNode;
                                    } while (a);
                                    n();
                                });
                            });
                    }
                    static get instance() {
                        return a.__instance || (a.__instance = new a()), a.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const n = e,
                            a = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== n || t !== a)),
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
                a.__instance = void 0;
                const i = a;
                var r = n(1358);
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
                const d = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    u = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var g = n(5521),
                    p = n(5067);
                const b = ['args'];
                function v(e, t, n, a, i, r, o) {
                    try {
                        var s = e[r](o),
                            l = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    s.done ? t(l) : Promise.resolve(l).then(a, i);
                }
                const f = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                    return new Promise(function (a, i) {
                                        var r = e.apply(t, n);
                                        function o(e) {
                                            v(r, a, i, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            v(r, a, i, o, s, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    E = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        i = {},
                                        r = Object.keys(e);
                                    for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                    return i;
                                })(t, b);
                            void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, r, {
                                          arguments:
                                              ((a = i),
                                              Object.entries(a).map(([e, t]) => {
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
                        var a;
                    },
                    h = () => E(l.CLOSE),
                    P = (e, t) => {
                        e.keyCode === g.n.ESCAPE && t();
                    };
                var y = n(7572);
                const S = i.instance,
                    O = {
                        DataTracker: r.Z,
                        ViewModel: y.Z,
                        ViewEventType: l,
                        NumberFormatType: d,
                        RealFormatType: u,
                        TimeFormatType: m,
                        DateFormatType: _,
                        makeGlobalBoundingBox: f,
                        sendMoveEvent: (e) => E(l.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: h,
                        sendClosePopOverEvent: () => E(l.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            E(l.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, a, i = R.invalid('resId'), r) => {
                            const o = p.O.view.getViewGlobalPosition(),
                                s = n.getBoundingClientRect(),
                                c = s.x,
                                d = s.y,
                                u = s.width,
                                m = s.height,
                                _ = {
                                    x: p.O.view.pxToRem(c) + o.x,
                                    y: p.O.view.pxToRem(d) + o.y,
                                    width: p.O.view.pxToRem(u),
                                    height: p.O.view.pxToRem(m),
                                };
                            E(l.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: i,
                                direction: t,
                                bbox: f(_),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => P(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            P(e, h);
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
                            for (const a in t)
                                if (Object.prototype.hasOwnProperty.call(t, a)) {
                                    const i = Object.prototype.toString.call(t[a]);
                                    if (i.startsWith('[object CoherentArrayProxy]')) {
                                        const i = t[a];
                                        n[a] = [];
                                        for (let t = 0; t < i.length; t++) n[a].push({ value: e(i[t].value) });
                                    } else
                                        i.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[a] = e(t[a]))
                                            : (n[a] = t[a]);
                                }
                            return n;
                        },
                        ClickOutsideManager: S,
                        SystemLocale: o,
                        UserLocale: s,
                    };
                window.ViewEnvHelper = O;
            },
            8932: (e, t, n) => {
                var a = n(6179),
                    i = n.n(a),
                    r = n(493),
                    o = n.n(r),
                    s = n(6483),
                    l = n.n(s);
                function c(e) {
                    engine.call('PlaySound', e);
                }
                const d = {
                    playHighlight() {
                        c('highlight');
                    },
                    playClick() {
                        c('play');
                    },
                    playYes() {
                        c('yes1');
                    },
                };
                var u = n(3403),
                    m = n(5067),
                    _ = n(4179);
                const g = [
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
                function p(e) {
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
                const b = (e, t, n = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: _.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: a,
                                },
                                n,
                            ),
                        );
                    },
                    v = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            i = e.args,
                            r = e.onMouseEnter,
                            o = e.onMouseLeave,
                            s = e.onMouseDown,
                            l = e.onClick,
                            c = e.ignoreShowDelay,
                            d = void 0 !== c && c,
                            u = e.ignoreMouseClick,
                            m = void 0 !== u && u,
                            _ = e.decoratorId,
                            v = void 0 === _ ? 0 : _,
                            f = e.isEnabled,
                            w = void 0 === f || f,
                            E = e.targetId,
                            h = void 0 === E ? 0 : E,
                            P = e.onShow,
                            y = e.onHide,
                            S = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    i = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                return i;
                            })(e, g);
                        const O = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            A = (0, a.useMemo)(
                                () =>
                                    h ||
                                    ((e = 1) => {
                                        const t = new Error().stack;
                                        let n,
                                            a = R.invalid('resId');
                                        return (
                                            t &&
                                                ((n = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== n &&
                                                    window.subViews[n] &&
                                                    (a = window.subViews[n].id)),
                                            { caller: n, stack: t, resId: a }
                                        );
                                    })().resId,
                                [h],
                            ),
                            k = (0, a.useCallback)(() => {
                                (O.current.isVisible && O.current.timeoutId) ||
                                    (b(n, v, { isMouseEvent: !0, on: !0, arguments: p(i) }, A),
                                    P && P(),
                                    (O.current.isVisible = !0));
                            }, [n, v, i, A, P]),
                            M = (0, a.useCallback)(() => {
                                if (O.current.isVisible || O.current.timeoutId) {
                                    const e = O.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (O.current.timeoutId = 0)),
                                        b(n, v, { on: !1 }, A),
                                        O.current.isVisible && y && y(),
                                        (O.current.isVisible = !1);
                                }
                            }, [n, v, A, y]),
                            D = (0, a.useCallback)((e) => {
                                O.current.isVisible &&
                                    ((O.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (O.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(O.current.prevTarget) && M();
                                    }, 200)));
                            }, []);
                        return (
                            (0, a.useEffect)(() => {
                                const e = O.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', D, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', D, { capture: !0 }),
                                            e && window.clearTimeout(e);
                                    }
                                );
                            }, []),
                            (0, a.useEffect)(() => {
                                !1 === w && M();
                            }, [w, M]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', M),
                                    () => {
                                        window.removeEventListener('mouseleave', M), M();
                                    }
                                ),
                                [M],
                            ),
                            w
                                ? (0, a.cloneElement)(
                                      t,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((C = t.props.onMouseEnter),
                                                  (e) => {
                                                      (e.clientX === window.innerWidth &&
                                                          e.clientY === window.innerHeight) ||
                                                          ((O.current.timeoutId = window.setTimeout(k, d ? 100 : 400)),
                                                          r && r(e),
                                                          C && C(e));
                                                  }),
                                              onMouseLeave: ((e) => (t) => {
                                                  M(), null == o || o(t), null == e || e(t);
                                              })(t.props.onMouseLeave),
                                              onClick: ((e) => (t) => {
                                                  !1 === m && M(), null == l || l(t), null == e || e(t);
                                              })(t.props.onClick),
                                              onMouseDown: ((e) => (t) => {
                                                  !1 === m && M(), null == s || s(t), null == e || e(t);
                                              })(t.props.onMouseDown),
                                          },
                                          S,
                                      ),
                                  )
                                : t
                        );
                        var C;
                    },
                    f = {
                        base: 'ModifierDomainIcon_base_74',
                        image: 'ModifierDomainIcon_image_62',
                        iconOut: 'ModifierDomainIcon_iconOut_c6',
                        image__big: 'ModifierDomainIcon_image__big_3c',
                        image__large: 'ModifierDomainIcon_image__large_f1',
                        iconHover: 'ModifierDomainIcon_iconHover_69',
                    };
                let w;
                !(function (e) {
                    (e.small = 'small'), (e.big = 'big'), (e.large = 'large');
                })(w || (w = {}));
                const E = (e, t) => {
                        const n = t === w.large ? '80x80' : '64x64';
                        return {
                            backgroundImage: `url(${R.images.battle_modifiers.gui.maps.icons.feature.domains.$dyn(`c_${n}`).$dyn(e)})`,
                        };
                    },
                    h = ({ modifiersDomain: e, subModeId: t, className: n, size: a = w.small }) => {
                        const r = t ? { modifiersDomain: e, subModeId: t } : { modifiersDomain: e };
                        return i().createElement(
                            'div',
                            { className: f.base },
                            i().createElement(
                                v,
                                {
                                    contentId:
                                        R.views.battle_modifiers.lobby.tooltips.ModifiersDomainTooltipView('resId'),
                                    args: r,
                                },
                                i().createElement('div', {
                                    className: l()(f.image, f[`image__${a}`], n),
                                    style: E(e, a),
                                }),
                            ),
                        );
                    };
                function P() {
                    return !1;
                }
                console.log;
                var y = n(9174);
                function S(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                const O = (e) => (0 === e ? window : window.subViews.get(e)),
                    A = ((e, t) => {
                        const n = (0, a.createContext)({});
                        return [
                            function ({ mode: e = 'real', options: r, children: o, mocks: s }) {
                                const l = (0, a.useRef)([]),
                                    c = (e, n, a) => {
                                        var i;
                                        const r = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: n = O,
                                                context: a = 'model',
                                            } = {}) {
                                                const i = new Map();
                                                function r(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? i.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, n) => {
                                                        n.forEach((t) => {
                                                            const n = i.get(t);
                                                            void 0 !== n && n(e);
                                                        });
                                                    });
                                                });
                                                const o = (e) => {
                                                    const i = n(t),
                                                        r = a.split('.').reduce((e, t) => e[t], i);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? r
                                                        : e.split('.').reduce((e, t) => {
                                                              const n = e[t];
                                                              return 'function' == typeof n ? n.bind(e) : n;
                                                          }, r);
                                                };
                                                return {
                                                    subscribe: (n, r) => {
                                                        const s = 'string' == typeof r ? `${a}.${r}` : a,
                                                            l = m.O.view.addModelObserver(s, t, !0);
                                                        return i.set(l, n), e && n(o(r)), l;
                                                    },
                                                    readByPath: o,
                                                    createCallback: (e, t) => {
                                                        const n = o(t);
                                                        return (...t) => {
                                                            n(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = o(e);
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
                                                                                    return S(e, t);
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
                                                                                          ? S(e, t)
                                                                                          : void 0
                                                                                );
                                                                            }
                                                                        })(e)) ||
                                                                        (t && e && 'number' == typeof e.length)
                                                                    ) {
                                                                        n && (e = n);
                                                                        var a = 0;
                                                                        return function () {
                                                                            return a >= e.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: e[a++] };
                                                                        };
                                                                    }
                                                                    throw new TypeError(
                                                                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                                                                    );
                                                                })(i.keys());
                                                            !(e = n()).done;

                                                        )
                                                            r(e.value, t);
                                                    },
                                                    unsubscribe: r,
                                                };
                                            })(n),
                                            o =
                                                'real' === e
                                                    ? r
                                                    : Object.assign({}, r, {
                                                          readByPath:
                                                              null != (i = null == a ? void 0 : a.getter)
                                                                  ? i
                                                                  : () => {},
                                                      }),
                                            s = (t) =>
                                                'mocks' === e ? (null == a ? void 0 : a.getter(t)) : o.readByPath(t),
                                            c = (e) => l.current.push(e),
                                            d = (({ observableModel: e }) =>
                                                Object.assign({}, e.primitives(['activeModeResName']), {
                                                    progressionState: e.object('progressionState'),
                                                    currentProgressionStage: e.object('currentProgressionStage'),
                                                    modifiersDomains: e.array('modifiersDomains', []),
                                                }))({
                                                mode: e,
                                                readByPath: s,
                                                externalModel: o,
                                                observableModel: {
                                                    array: (t, n) => {
                                                        const a = null != n ? n : s(t),
                                                            i = y.LO.box(a, { equals: P });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, y.aD)((e) => i.set(e)),
                                                                    t,
                                                                ),
                                                            i
                                                        );
                                                    },
                                                    object: (t, n) => {
                                                        const a = null != n ? n : s(t),
                                                            i = y.LO.box(a, { equals: P });
                                                        return (
                                                            'real' === e &&
                                                                o.subscribe(
                                                                    (0, y.aD)((e) => i.set(e)),
                                                                    t,
                                                                ),
                                                            i
                                                        );
                                                    },
                                                    primitives: (t, n) => {
                                                        const a = s(n);
                                                        if (Array.isArray(t)) {
                                                            const i = t.reduce(
                                                                (e, t) => ((e[t] = y.LO.box(a[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, y.aD)((e) => {
                                                                            t.forEach((t) => {
                                                                                i[t].set(e[t]);
                                                                            });
                                                                        }),
                                                                        n,
                                                                    ),
                                                                i
                                                            );
                                                        }
                                                        {
                                                            const i = t,
                                                                r = Object.entries(i),
                                                                s = r.reduce(
                                                                    (e, [t, n]) => ((e[n] = y.LO.box(a[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === e &&
                                                                    o.subscribe(
                                                                        (0, y.aD)((e) => {
                                                                            r.forEach(([t, n]) => {
                                                                                s[n].set(e[t]);
                                                                            });
                                                                        }),
                                                                        n,
                                                                    ),
                                                                s
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: c,
                                            }),
                                            u = { mode: e, model: d, externalModel: o, cleanup: c };
                                        return {
                                            model: d,
                                            controls: 'mocks' === e && a ? a.controls(u) : t(u),
                                            externalModel: o,
                                            mode: e,
                                        };
                                    },
                                    d = (0, a.useRef)(!1),
                                    u = (0, a.useState)(e),
                                    _ = u[0],
                                    g = u[1],
                                    p = (0, a.useState)(() => c(e, r, s)),
                                    b = p[0],
                                    v = p[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        d.current ? v(c(_, r, s)) : (d.current = !0);
                                    }, [s, _, r]),
                                    (0, a.useEffect)(() => {
                                        g(e);
                                    }, [e]),
                                    (0, a.useEffect)(
                                        () => () => {
                                            b.externalModel.dispose(), l.current.forEach((e) => e());
                                        },
                                        [b],
                                    ),
                                    i().createElement(n.Provider, { value: b }, o)
                                );
                            },
                            () => (0, a.useContext)(n),
                        ];
                    })(0, ({ externalModel: e }) => ({ showInfo: e.createCallbackNoArgs('onShowInfo') })),
                    k = A[0],
                    M = A[1],
                    D = {
                        base: 'ProgressBar_base_45',
                        base__medium: 'ProgressBar_base__medium_62',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__medium: 'ProgressBar_background__medium_6e',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let C, T;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Big = 'big'), (e.Default = 'big');
                })(C || (C = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(T || (T = {}));
                const x = ({ size: e = C.Default }) =>
                        i().createElement('div', { className: l()(D.background, D[`background__${e}`]) }),
                    I = {
                        base: 'ProgressBarBlink_base_24',
                        base__medium: 'ProgressBarBlink_base__medium_ec',
                        base__small: 'ProgressBarBlink_base__small_0f',
                    },
                    L = ({ size: e }) => {
                        const t = l()(I.base, I[`base__${e}`]);
                        return i().createElement('div', { className: t });
                    },
                    N = {
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
                    F = (0, a.memo)(
                        ({ size: e, lineRef: t, disabled: n, baseStyles: a, isComplete: r, withoutBounce: o }) => {
                            const s = l()(
                                    N.base,
                                    N[`base__${e}`],
                                    n && N.base__disabled,
                                    r && N.base__finished,
                                    o && N.base__withoutBounce,
                                ),
                                c = !n && !r;
                            return i().createElement(
                                'div',
                                { className: s, style: a, ref: t },
                                i().createElement('div', { className: N.pattern }),
                                i().createElement('div', { className: N.gradient }),
                                c && i().createElement(L, { size: e }),
                            );
                        },
                    ),
                    U = ({ size: e, value: t, lineRef: n, disabled: r, onComplete: o }) => {
                        const s = (0, a.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            l = 100 === t;
                        return (
                            (0, a.useEffect)(() => {
                                l && o && o();
                            }, [l, o]),
                            i().createElement(F, { size: e, disabled: r, baseStyles: s, isComplete: l, lineRef: n })
                        );
                    },
                    B = (e, t) => {
                        let n;
                        const a = setTimeout(() => {
                            n = e();
                        }, t);
                        return () => {
                            'function' == typeof n && n(), clearTimeout(a);
                        };
                    };
                let z, W;
                !(function (e) {
                    (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                })(z || (z = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(W || (W = {}));
                const V = (0, a.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: n,
                            from: r,
                            size: o,
                            to: s,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const d = s < r,
                                u = (0, a.useState)(W.Idle),
                                m = u[0],
                                _ = u[1],
                                g = m === W.In,
                                p = m === W.End,
                                b = m === W.Idle,
                                v = (0, a.useCallback)(
                                    (e) => {
                                        _(e), c && c(e);
                                    },
                                    [c],
                                );
                            (0, a.useEffect)(() => {
                                if (b && !n)
                                    return B(() => {
                                        v(W.In);
                                    }, t);
                            }, [v, n, b, t]),
                                (0, a.useEffect)(() => {
                                    if (g)
                                        return B(() => {
                                            l && l(), v(W.End);
                                        }, e + t);
                                }, [v, g, l, t, e]);
                            const f = (0, a.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [d ? 'left' : 'right']: '0',
                                    }),
                                    [d, t, e],
                                ),
                                w = (0, a.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [d ? 'left' : 'right']: '0',
                                    }),
                                    [d, t, e],
                                ),
                                E = (0, a.useMemo)(
                                    () => ({ width: `${Math.abs(r - s)}%`, left: `${d ? s : r}%` }),
                                    [r, d, s],
                                );
                            return p
                                ? null
                                : i().createElement(
                                      'div',
                                      { className: 'ProgressBarDeltaSimple_base_6c', style: E },
                                      i().createElement(
                                          'div',
                                          { style: b ? f : w, className: 'ProgressBarDeltaSimple_delta_99' },
                                          i().createElement(L, { size: o }),
                                      ),
                                  );
                        },
                    ),
                    j = (0, a.memo)(
                        ({
                            to: e,
                            size: t,
                            from: n,
                            lineRef: r,
                            disabled: o,
                            isComplete: s,
                            animationSettings: l,
                            onChangeAnimationState: c,
                            onEndAnimation: d,
                        }) => {
                            const u = (0, a.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${l.line.duration}ms`,
                                    transitionDelay: `${l.line.delay}ms`,
                                }),
                                [l.line.delay, l.line.duration, e],
                            );
                            return i().createElement(
                                i().Fragment,
                                null,
                                i().createElement(F, {
                                    size: t,
                                    lineRef: r,
                                    disabled: o,
                                    isComplete: s,
                                    baseStyles: u,
                                }),
                                n >= 0 &&
                                    i().createElement(V, {
                                        transitionDuration: l.delta.duration,
                                        transitionDelay: l.delta.delay,
                                        freezed: l.freezed,
                                        from: n,
                                        size: t,
                                        to: e,
                                        onChangeAnimationState: c,
                                        onEndAnimation: d,
                                    }),
                            );
                        },
                    ),
                    $ = (e) => (e ? { left: 0 } : { right: 0 }),
                    G = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    H = (e) => ({ transitionDuration: `${e}ms` }),
                    K = (0, a.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: n,
                            from: r,
                            size: o,
                            to: s,
                            onEndAnimation: c,
                            onChangeAnimationState: d,
                            className: u,
                        }) => {
                            const m = s < r,
                                _ = (0, a.useState)(z.Idle),
                                g = _[0],
                                p = _[1],
                                b = g === z.End,
                                v = g === z.Idle,
                                f = g === z.Grow,
                                w = g === z.Shrink,
                                E = (0, a.useCallback)(
                                    (e) => {
                                        p(e), d && d(e);
                                    },
                                    [d],
                                ),
                                h = (0, a.useCallback)(
                                    (e, t) =>
                                        B(() => {
                                            E(e);
                                        }, t),
                                    [E],
                                );
                            (0, a.useEffect)(() => {
                                if (!n)
                                    return v
                                        ? h(z.Grow, t)
                                        : f
                                          ? h(z.Shrink, e)
                                          : w
                                            ? h(z.End, e)
                                            : void (b && c && c());
                            }, [h, n, b, f, v, w, c, t, e]);
                            const P = (0, a.useMemo)(() => Object.assign({ width: '100%' }, H(e), $(m)), [m, e]),
                                y = (0, a.useMemo)(() => Object.assign({ width: '0%' }, H(e), $(m)), [m, e]),
                                S = (0, a.useMemo)(() => Object.assign({ width: '0%' }, G(m, r), H(e)), [r, m, e]),
                                O = (0, a.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(s - r)}%` }, G(m, r), H(e)),
                                    [r, m, s, e],
                                );
                            if (b) return null;
                            const A = l()(
                                'ProgressBarDeltaGrow_base_7e',
                                u,
                                m && 0 === s && 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                            );
                            return i().createElement(
                                'div',
                                { style: v ? S : O, className: A },
                                i().createElement(
                                    'div',
                                    { style: w ? y : P, className: 'ProgressBarDeltaGrow_glow_68' },
                                    i().createElement(L, { size: o }),
                                ),
                            );
                        },
                    ),
                    q = (0, a.memo)(
                        ({
                            to: e,
                            size: t,
                            from: n,
                            lineRef: r,
                            disabled: o,
                            isComplete: s,
                            animationSettings: l,
                            onEndAnimation: c,
                            onChangeAnimationState: d,
                        }) => {
                            const u = e < n,
                                m = (0, a.useState)(!1),
                                _ = m[0],
                                g = m[1],
                                p = (0, a.useCallback)(
                                    (e) => {
                                        e === z.Shrink && g(!0), d && d(e);
                                    },
                                    [d],
                                ),
                                b = (0, a.useMemo)(() => ({ width: `${n}%`, transitionProperty: 'none' }), [n]),
                                v = (0, a.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${l.line.duration}ms` }),
                                    [l.line.duration, e],
                                );
                            return i().createElement(
                                i().Fragment,
                                null,
                                i().createElement(F, {
                                    size: t,
                                    lineRef: r,
                                    disabled: o,
                                    isComplete: s,
                                    withoutBounce: u && 0 === e,
                                    baseStyles: _ ? v : b,
                                }),
                                n >= 0 &&
                                    i().createElement(K, {
                                        transitionDuration: l.delta.duration,
                                        transitionDelay: l.delta.delay,
                                        onChangeAnimationState: p,
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
                    Y = ['onComplete', 'onEndAnimation'];
                function X() {
                    return (
                        (X =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        X.apply(this, arguments)
                    );
                }
                const Z = (0, a.memo)((e) => {
                        let t = e.onComplete,
                            n = e.onEndAnimation,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    i = {},
                                    r = Object.keys(e);
                                for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                return i;
                            })(e, Y);
                        const o = (0, a.useState)(!1),
                            s = o[0],
                            l = o[1],
                            c = (0, a.useCallback)(() => {
                                const e = 100 === r.to;
                                e !== s && l(e), e && t && t(), n && n();
                            }, [s, t, n, r.to]);
                        switch (r.animationSettings.type) {
                            case T.Simple:
                                return i().createElement(j, X({}, r, { onEndAnimation: c, isComplete: s }));
                            case T.Growing:
                                return i().createElement(q, X({}, r, { onEndAnimation: c, isComplete: s }));
                            default:
                                return null;
                        }
                    }),
                    Q = ['onEndAnimation'];
                function J() {
                    return (
                        (J =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        J.apply(this, arguments)
                    );
                }
                const ee = (0, a.memo)((e) => {
                    let t = e.onEndAnimation,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                i = {},
                                r = Object.keys(e);
                            for (a = 0; a < r.length; a++) (n = r[a]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                            return i;
                        })(e, Q);
                    const r = (0, a.useRef)({}),
                        o = (0, a.useCallback)(() => {
                            (r.current.from = void 0), t && t();
                        }, [t]),
                        s = 'number' == typeof r.current.from ? r.current.from : n.from;
                    return (
                        (r.current.from = s),
                        i().createElement(Z, J({}, n, { onEndAnimation: o, key: `${s}-${n.to}`, from: s }))
                    );
                });
                function te() {
                    return (
                        (te =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        te.apply(this, arguments)
                    );
                }
                const ne = (0, a.memo)(
                        ({
                            size: e,
                            value: t,
                            lineRef: n,
                            disabled: a,
                            deltaFrom: r,
                            animationSettings: o,
                            onEndAnimation: s,
                            onChangeAnimationState: l,
                            onComplete: c,
                        }) => {
                            if (r === t)
                                return i().createElement(U, {
                                    key: `${r}-${t}`,
                                    size: e,
                                    value: t,
                                    lineRef: n,
                                    disabled: a,
                                    onComplete: c,
                                });
                            const d = {
                                from: r,
                                to: t,
                                size: e,
                                lineRef: n,
                                disabled: a,
                                animationSettings: o,
                                onComplete: c,
                                onEndAnimation: s,
                                onChangeAnimationState: l,
                            };
                            return o.withStack
                                ? i().createElement(ee, d)
                                : i().createElement(Z, te({ key: `${r}-${t}` }, d));
                        },
                    ),
                    ae = (e) => ({
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
                    ie = (e, t, n) => (n < e ? e : n > t ? t : n),
                    re = (e, t, n) => ('number' == typeof n ? (ie(0, t, n) / t) * 100 : e),
                    oe = {
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
                    se = {
                        freezed: !1,
                        withStack: !1,
                        type: T.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    le = (0, a.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = oe,
                            size: n = C.Default,
                            animationSettings: r = se,
                            disabled: o = !1,
                            withoutBackground: s = !1,
                            value: c,
                            deltaFrom: d,
                            lineRef: u,
                            onChangeAnimationState: m,
                            onEndAnimation: _,
                            onComplete: g,
                        }) => {
                            const p = ((e, t, n) =>
                                (0, a.useMemo)(() => {
                                    const a = (ie(0, t, e) / t) * 100;
                                    return { value: a, deltaFrom: re(a, t, n) };
                                }, [n, t, e]))(c, e, d);
                            return i().createElement(
                                'div',
                                { className: l()(D.base, D[`base__${n}`]), style: ae(t) },
                                !s && i().createElement(x, { size: n }),
                                i().createElement(ne, {
                                    size: n,
                                    lineRef: u,
                                    disabled: o,
                                    value: p.value,
                                    deltaFrom: p.deltaFrom,
                                    animationSettings: r,
                                    onEndAnimation: _,
                                    onChangeAnimationState: m,
                                    onComplete: g,
                                }),
                            );
                        },
                    );
                let ce;
                !(function (e) {
                    (e.DISABLED = 'disabled'),
                        (e.ACTIVE_FINAL = 'activeFinal'),
                        (e.ACTIVE_RESETTABLE = 'activeResettable'),
                        (e.COMPLETED_FINAL = 'completedFinal'),
                        (e.COMPLETED_RESETTABLE = 'completedResettable');
                })(ce || (ce = {}));
                var de = n(9459),
                    ue = n(9762),
                    me = n(6457);
                let _e, ge;
                !(function (e) {
                    (e.Init = 'init'),
                        (e.Active = 'active'),
                        (e.NonActive = 'nonActive'),
                        (e.UpdateState = 'updateState');
                })(_e || (_e = {})),
                    (function (e) {
                        (e.CheckDataUpdate = 'checkDataUpdate'),
                            (e.UpdateStageData = 'updateStageData'),
                            (e.SwitchState = 'switchState');
                    })(ge || (ge = {}));
                const pe = (e) => e === ce.ACTIVE_RESETTABLE || e === ce.ACTIVE_FINAL,
                    be = (e) => pe(e.status),
                    ve = (e) => !pe(e.status),
                    fe = (e, t) => e.status !== t.status && we(e, t),
                    we = (e, t) =>
                        t.stage === e.stage &&
                        t.currentPoints === e.currentPoints &&
                        t.maximumPoints === e.maximumPoints &&
                        0 === e.earnedPoints,
                    Ee = (e, t) =>
                        pe(t.status) &&
                        ((1 === t.stage && 0 === t.currentPoints) ||
                            (t.stage === e.stage && e.maximumPoints !== t.maximumPoints)),
                    he = (e, t) =>
                        t.stage === e.stage &&
                        t.currentPoints === e.currentPoints &&
                        t.maximumPoints === e.maximumPoints &&
                        0 !== e.earnedPoints,
                    Pe = (e, t) =>
                        t.stage === e.stage &&
                        t.currentPoints !== e.currentPoints &&
                        t.maximumPoints === e.maximumPoints,
                    ye = (e, t) => t.stage > e.stage && e.currentPoints < e.maximumPoints,
                    Se = (e, t) => t.stage > e.stage && e.currentPoints === e.maximumPoints,
                    Oe = (e, t) => t.stage < e.stage && e.currentPoints > 0,
                    Ae = (e, t) => t.stage < e.stage && 0 === e.currentPoints,
                    ke = (e, t) => e.status !== t.status && pe(t.status),
                    Me = (e) => {
                        e.isSoundEnabled && 0 !== e.earnedPoints && c('ev_fep_progress_bar');
                    },
                    De = {
                        base: 'Status_base_a8',
                        base__completedResettable: 'Status_base__completedResettable_61',
                        base__completedFinal: 'Status_base__completedFinal_81',
                        progress: 'Status_progress_f1',
                        base__disabled: 'Status_base__disabled_e2',
                        progressLevel: 'Status_progressLevel_9a',
                        progressBar: 'Status_progressBar_68',
                        statusIcon: 'Status_statusIcon_bf',
                        fadeInWithScale: 'Status_fadeInWithScale_9b',
                        slideDown: 'Status_slideDown_d6',
                    },
                    Ce = (0, u.Pi)(({ className: e, onStatusUpdate: t }) => {
                        const n = M().model,
                            r = n.progressionState.get(),
                            o = r.status,
                            s = r.currentStage,
                            c = n.currentProgressionStage.get(),
                            d = c.currentPoints,
                            u = c.maximumPoints,
                            m = i().useMemo(() => {
                                return (
                                    'widget-fsm',
                                    (e = {
                                        status: o,
                                        stage: s,
                                        currentPoints: d,
                                        maximumPoints: u,
                                        earnedPoints: 0,
                                        isSoundEnabled: !1,
                                    }),
                                    300,
                                    (n = t),
                                    (0, ue.C)(
                                        {
                                            preserveActionOrder: !0,
                                            id: 'widget-fsm',
                                            initial: _e.Init,
                                            context: e,
                                            states: {
                                                [_e.Init]: { always: { target: _e.UpdateState } },
                                                [_e.UpdateState]: {
                                                    always: [
                                                        { target: _e.Active, cond: be },
                                                        { target: _e.NonActive, cond: ve },
                                                    ],
                                                },
                                                [_e.Active]: {
                                                    on: {
                                                        [ge.CheckDataUpdate]: [
                                                            {
                                                                target: _e.Active,
                                                                actions: [
                                                                    (0, me.lW)((e, t) => ({
                                                                        type: ge.SwitchState,
                                                                        status: t.status,
                                                                    })),
                                                                ],
                                                                cond: fe,
                                                            },
                                                            { target: _e.Active, cond: we },
                                                            {
                                                                target: _e.UpdateState,
                                                                actions: [
                                                                    (0, me.f0)({
                                                                        status: (e, t) => t.status,
                                                                        stage: (e, t) => t.stage,
                                                                        currentPoints: (e, t) => t.currentPoints,
                                                                        maximumPoints: (e, t) => t.maximumPoints,
                                                                        earnedPoints: 0,
                                                                    }),
                                                                    () => {},
                                                                ],
                                                                cond: Ee,
                                                            },
                                                            {
                                                                target: _e.Active,
                                                                actions: [
                                                                    (0, me.lW)((e) => ({
                                                                        type: ge.UpdateStageData,
                                                                        stage: e.stage,
                                                                        currentPoints: e.maximumPoints,
                                                                        maximumPoints: e.maximumPoints,
                                                                        earnedPoints: e.maximumPoints - e.currentPoints,
                                                                    })),
                                                                ],
                                                                cond: ye,
                                                            },
                                                            {
                                                                target: _e.Active,
                                                                actions: [
                                                                    (0, me.lW)((e, t) => ({
                                                                        type: ge.UpdateStageData,
                                                                        stage: t.stage,
                                                                        currentPoints: 0,
                                                                        maximumPoints: t.maximumPoints,
                                                                        earnedPoints: 0,
                                                                    })),
                                                                    () => {},
                                                                    (0, me.lW)(
                                                                        (e, t) => ({
                                                                            type: ge.UpdateStageData,
                                                                            stage: t.stage,
                                                                            currentPoints: t.currentPoints,
                                                                            maximumPoints: t.maximumPoints,
                                                                            earnedPoints: t.currentPoints,
                                                                        }),
                                                                        { delay: 300 },
                                                                    ),
                                                                ],
                                                                cond: Se,
                                                            },
                                                            {
                                                                target: _e.Active,
                                                                actions: [
                                                                    (0, me.lW)((e, t) => ({
                                                                        type: ge.UpdateStageData,
                                                                        stage: e.stage,
                                                                        currentPoints: t.currentPoints,
                                                                        maximumPoints: e.maximumPoints,
                                                                        earnedPoints: t.currentPoints - e.currentPoints,
                                                                    })),
                                                                ],
                                                                cond: Pe,
                                                            },
                                                            {
                                                                target: _e.Active,
                                                                actions: [
                                                                    (0, me.lW)((e) => ({
                                                                        type: ge.UpdateStageData,
                                                                        stage: e.stage,
                                                                        currentPoints: e.currentPoints,
                                                                        maximumPoints: e.maximumPoints,
                                                                        earnedPoints: 0,
                                                                    })),
                                                                    (0, me.lW)((e, t) => ({
                                                                        type: ge.SwitchState,
                                                                        status: t.status,
                                                                    })),
                                                                ],
                                                                cond: he,
                                                            },
                                                            {
                                                                target: _e.Active,
                                                                actions: [
                                                                    (0, me.lW)((e) => ({
                                                                        type: ge.UpdateStageData,
                                                                        stage: e.stage,
                                                                        currentPoints: 0,
                                                                        maximumPoints: e.maximumPoints,
                                                                        earnedPoints: -e.currentPoints,
                                                                    })),
                                                                ],
                                                                cond: Oe,
                                                            },
                                                            {
                                                                target: _e.Active,
                                                                actions: [
                                                                    (0, me.lW)((e, t) => ({
                                                                        type: ge.UpdateStageData,
                                                                        stage: t.stage,
                                                                        currentPoints: t.currentPoints,
                                                                        maximumPoints: t.maximumPoints,
                                                                        earnedPoints: t.currentPoints - t.maximumPoints,
                                                                    })),
                                                                    () => {},
                                                                ],
                                                                cond: Ae,
                                                            },
                                                        ],
                                                        [ge.UpdateStageData]: {
                                                            target: _e.Active,
                                                            actions: [
                                                                (0, me.f0)({
                                                                    stage: (e, t) => t.stage,
                                                                    currentPoints: (e, t) => t.currentPoints,
                                                                    maximumPoints: (e, t) => t.maximumPoints,
                                                                    earnedPoints: (e, t) => t.earnedPoints,
                                                                }),
                                                                Me,
                                                            ],
                                                        },
                                                        [ge.SwitchState]: {
                                                            target: _e.UpdateState,
                                                            actions: [
                                                                (e, t) => n(t.status),
                                                                (0, me.f0)({ status: (e, t) => t.status }),
                                                            ],
                                                        },
                                                    },
                                                },
                                                [_e.NonActive]: {
                                                    on: {
                                                        [ge.CheckDataUpdate]: {
                                                            target: _e.UpdateState,
                                                            actions: [
                                                                (0, me.f0)({
                                                                    status: (e, t) => t.status,
                                                                    stage: (e, t) => t.stage,
                                                                    currentPoints: (e, t) => t.currentPoints,
                                                                    maximumPoints: (e, t) => t.maximumPoints,
                                                                    earnedPoints: 0,
                                                                }),
                                                                () => {},
                                                            ],
                                                            cond: ke,
                                                        },
                                                        [ge.SwitchState]: {
                                                            target: _e.UpdateState,
                                                            actions: (0, me.f0)({ status: (e, t) => t.status }),
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        {
                                            guards: {
                                                hasActiveStatus: be,
                                                hasNonActiveStatus: ve,
                                                isStatusUpdate: fe,
                                                isTaskSwitchingUpdate: Ee,
                                                isNoUpdate: we,
                                                isUpdateCurrentStageWithZeroEarnPoints: he,
                                                isUpdateCurrentStageWithCurrentPoints: Pe,
                                                isUpdateToNextStageWithoutFillMax: Se,
                                                isUpdateToNextStageWithFillMax: ye,
                                                isUpdateToPrevStageWithReset: Oe,
                                                isUpdateToPrevStageWithoutReset: Ae,
                                                isUpdateWithActiveSwitch: ke,
                                            },
                                        },
                                    )
                                );
                                var e, n;
                            }, []),
                            _ = (0, de.eO)(m),
                            g = _[0],
                            p = _[1],
                            b = g.context.status === ce.DISABLED;
                        (0, a.useEffect)(() => {
                            p({ type: ge.CheckDataUpdate, status: o, stage: s, currentPoints: d, maximumPoints: u });
                        }, [o, d, u, s, p]);
                        const f = (0, a.useCallback)(() => {
                            p({ type: ge.CheckDataUpdate, status: o, stage: s, currentPoints: d, maximumPoints: u });
                        }, [d, u, s, o, p]);
                        return i().createElement(
                            v,
                            {
                                contentId: R.views.fun_random.lobby.tooltips.FunRandomProgressionTooltipView('resId'),
                                isEnabled: !b,
                            },
                            i().createElement(
                                'div',
                                { className: l()(De.base, De[`base__${g.context.status}`], e) },
                                i().createElement('div', { className: De.statusIcon }),
                                i().createElement(
                                    'div',
                                    { className: De.progress },
                                    i().createElement('div', { className: De.progressLevel }, g.context.stage),
                                    i().createElement(
                                        'div',
                                        { className: De.progressBar },
                                        i().createElement(le, {
                                            value: g.context.currentPoints,
                                            maxValue: g.context.maximumPoints,
                                            size: C.Small,
                                            animationSettings: se,
                                            deltaFrom: g.context.currentPoints - g.context.earnedPoints,
                                            onEndAnimation: f,
                                        }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    Te = {
                        base: 'App_base_59',
                        animContainer: 'App_animContainer_b4',
                        slideDown: 'App_slideDown_0e',
                        base__completedResettable: 'App_base__completedResettable_78',
                        base__completedFinal: 'App_base__completedFinal_76',
                        base__disabled: 'App_base__disabled_e8',
                        backgroundWrapper: 'App_backgroundWrapper_0b',
                        background: 'App_background_75',
                        background__scaled: 'App_background__scaled_b4',
                        modifications: 'App_modifications_5f',
                        title: 'App_title_31',
                        status: 'App_status_1c',
                        fadeInWithScale: 'App_fadeInWithScale_72',
                    },
                    xe = R.images.fun_random.gui.maps.icons.feature.asset_packs,
                    Re = (e, t) => {
                        var n;
                        const a = t ? 'sub_modes' : 'modes',
                            i = xe.$dyn(a);
                        return null != (n = i.$dyn(e)) ? n : i.$dyn('undefined');
                    },
                    Ie = R.strings.fun_random.sub_modes,
                    Le = (0, u.Pi)(() => {
                        const e = M(),
                            t = e.model,
                            n = e.controls,
                            r = t.progressionState.get().status,
                            o = t.modifiersDomains.get(),
                            s = (() => {
                                const e = (0, a.useState)(m.O.view.getScale()),
                                    t = e[0],
                                    n = e[1];
                                return (
                                    (0, a.useEffect)(() => {
                                        const e = () => {
                                            n(m.O.view.getScale());
                                        };
                                        return (
                                            window.addEventListener('resize', e),
                                            () => {
                                                window.removeEventListener('resize', e);
                                            }
                                        );
                                    }, []),
                                    t
                                );
                            })(),
                            u = t.activeModeResName.get(),
                            _ = Ie.$dyn(u) ? u : 'undefined',
                            g = Ie.$dyn(_).capsUserName(),
                            p = (0, a.useState)(r),
                            b = p[0],
                            v = p[1],
                            f = (0, a.useCallback)((e) => {
                                v(e);
                            }, []);
                        var w;
                        return (
                            (w = () => {
                                m.O.view.setSidePaddingsRem({ left: 200, right: 200, top: 0, bottom: 0 });
                            }),
                            (0, a.useEffect)(w, []),
                            (0, a.useEffect)(() => {
                                r !== b && pe(r) && v(r);
                            }, [r, b]),
                            i().createElement(
                                'div',
                                { className: l()(Te.base, Te[`base__${b}`]) },
                                i().createElement(
                                    'div',
                                    {
                                        className: Te.animContainer,
                                        onClick: () => {
                                            c(R.sounds.yes()), n.showInfo();
                                        },
                                        onMouseEnter: d.playHighlight,
                                    },
                                    i().createElement(
                                        'div',
                                        { className: Te.backgroundWrapper },
                                        i().createElement('img', {
                                            className: l()(Te.background, 2 === s && Te.background__scaled),
                                            src: Re(_, !0).hangar_widget.ribbon(),
                                        }),
                                    ),
                                    i().createElement(
                                        'div',
                                        { className: Te.modifications },
                                        (function (e, t) {
                                            return Array.isArray(e)
                                                ? e.map(t)
                                                : e.map((e, n, a) => t(null == e ? void 0 : e.value, n));
                                        })(o, (e, t) => i().createElement(h, { key: t, modifiersDomain: e })),
                                    ),
                                    i().createElement('div', { className: Te.title }, g),
                                    i().createElement(Ce, { className: Te.status, onStatusUpdate: f }),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    o().render(
                        i().createElement(k, null, i().createElement(Le, null)),
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
        (__webpack_require__.O = (e, t, n, a) => {
            if (!t) {
                var i = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, n, a] = deferred[l], r = !0, o = 0; o < t.length; o++)
                        (!1 & a || i >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[o]))
                            ? t.splice(o--, 1)
                            : ((r = !1), a < i && (i = a));
                    if (r) {
                        deferred.splice(l--, 1);
                        var s = n();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            a = a || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > a; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, n, a];
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
        (__webpack_require__.j = 808),
        (() => {
            var e = { 808: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var a,
                        i,
                        [r, o, s] = n,
                        l = 0;
                    if (r.some((t) => 0 !== e[t])) {
                        for (a in o) __webpack_require__.o(o, a) && (__webpack_require__.m[a] = o[a]);
                        if (s) var c = s(__webpack_require__);
                    }
                    for (t && t(n); l < r.length; l++)
                        (i = r[l]), __webpack_require__.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return __webpack_require__.O(c);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(8932));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
