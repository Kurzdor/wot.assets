(() => {
    'use strict';
    var __webpack_modules__ = {
            527: (e, t, i) => {
                i.r(t), i.d(t, { mouse: () => o, onResize: () => a });
                var n = i(2472),
                    s = i(1176);
                const a = (0, n.E)('clientResized'),
                    _ = { down: (0, n.E)('mousedown'), up: (0, n.E)('mouseup'), move: (0, n.E)('mousemove') };
                const o = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && (0, s.R)(!1);
                    }
                    function i() {
                        e.enabled && (0, s.R)(!0);
                    }
                    function n() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', i))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', i))
                            : (0, s.R)(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (t, i) => (
                            (t[i] = (function (t) {
                                return (i) => {
                                    e.listeners += 1;
                                    let s = !0;
                                    const a = `mouse${t}`,
                                        o = _[t]((e) => i([e, 'outside']));
                                    function r(e) {
                                        i([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, r),
                                        n(),
                                        () => {
                                            s &&
                                                (o(),
                                                window.removeEventListener(a, r),
                                                (e.listeners -= 1),
                                                n(),
                                                (s = !1));
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
                            (e.enabled = !1), n();
                        },
                        enable() {
                            (e.enabled = !0), n();
                        },
                        enableOutside() {
                            e.enabled && (0, s.R)(!0);
                        },
                        disableOutside() {
                            e.enabled && (0, s.R)(!1);
                        },
                    });
                })();
            },
            5959: (e, t, i) => {
                i.r(t),
                    i.d(t, {
                        events: () => n,
                        getMouseGlobalPosition: () => a,
                        getSize: () => s,
                        graphicsQuality: () => _,
                    });
                var n = i(527);
                function s(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function a(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const _ = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
            },
            1176: (e, t, i) => {
                function n(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                i.d(t, { R: () => n });
            },
            2472: (e, t, i) => {
                function n(e) {
                    return (t) => (
                        engine.on(e, t),
                        () => {
                            engine.off(e, t);
                        }
                    );
                }
                i.d(t, { E: () => n });
            },
            3138: (e, t, i) => {
                i.d(t, { O: () => s });
                var n = i(5959);
                const s = { view: i(7641), client: n };
            },
            3722: (e, t, i) => {
                function n(e, t, i = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, i);
                }
                function s(e, t, i) {
                    return `url(${n(e, t, i)})`;
                }
                i.r(t), i.d(t, { getBgUrl: () => s, getTextureUrl: () => n });
            },
            6112: (e, t, i) => {
                i.d(t, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            6538: (e, t, i) => {
                i.d(t, { U: () => s });
                var n = i(2472);
                const s = {
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
            7641: (e, t, i) => {
                i.r(t),
                    i.d(t, {
                        addModelObserver: () => c,
                        addPreloadTexture: () => o,
                        children: () => n,
                        displayStatus: () => s.W,
                        displayStatusIs: () => R,
                        events: () => a.U,
                        extraSize: () => F,
                        forceTriggerMouseMove: () => T,
                        freezeTextureBeforeResize: () => v,
                        getBrowserTexturePath: () => l,
                        getDisplayStatus: () => O,
                        getScale: () => h,
                        getSize: () => b,
                        getViewGlobalPosition: () => m,
                        isEventHandled: () => f,
                        isFocused: () => S,
                        pxToRem: () => w,
                        remToPx: () => E,
                        resize: () => u,
                        sendEvent: () => _.qP,
                        setAnimateWindow: () => p,
                        setEventHandled: () => g,
                        setInputPaddingsRem: () => r,
                        setSidePaddingsRem: () => d,
                        whenTutorialReady: () => x,
                    });
                var n = i(3722),
                    s = i(6112),
                    a = i(6538),
                    _ = i(8566);
                function o(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function r(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function l(e, t, i, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, i, n);
                }
                function c(e, t, i) {
                    return viewEnv.addDataChangedCallback(e, t, i);
                }
                function d(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function b(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function u(e, t, i = 'px') {
                    return 'rem' === i ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function m(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: E(t.x), y: E(t.y) };
                }
                function v() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function h() {
                    return viewEnv.getScale();
                }
                function w(e) {
                    return viewEnv.pxToRem(e);
                }
                function E(e) {
                    return viewEnv.remToPx(e);
                }
                function p(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function S() {
                    return viewEnv.isFocused();
                }
                function g() {
                    return viewEnv.setEventHandled();
                }
                function f() {
                    return viewEnv.isEventHandled();
                }
                function T() {
                    viewEnv.forceTriggerMouseMove();
                }
                function O() {
                    return viewEnv.getShowingStatus();
                }
                const R = Object.keys(s.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === s.W[t]), e),
                        {},
                    ),
                    F = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    x = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : a.U.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]);
            },
            8566: (e, t, i) => {
                i.d(t, { qP: () => l });
                const n = ['args'];
                const s = 2,
                    a = 16,
                    _ = 32,
                    o = 64,
                    r = (e, t) => {
                        const i = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                _ = (function (e, t) {
                                    if (null == e) return {};
                                    var i,
                                        n,
                                        s = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) (i = a[n]), t.indexOf(i) >= 0 || (s[i] = e[i]);
                                    return s;
                                })(t, n);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: i, type: e }, _, {
                                          arguments:
                                              ((s = a),
                                              Object.entries(s).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: i, type: e }, _));
                        }
                        return viewEnv.handleViewEvent({ __Type: i, type: e });
                        var s;
                    },
                    l = {
                        close(e) {
                            r('popover' === e ? s : _);
                        },
                        minimize() {
                            r(o);
                        },
                        move(e) {
                            r(a, { isMouseEvent: !0, on: e });
                        },
                    };
            },
            7902: (e, t, i) => {
                i.d(t, { F: () => n });
                const n = (e = 1) => {
                    const t = new Error().stack;
                    let i,
                        n = R.invalid('resId');
                    return (
                        t &&
                            ((i = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                            window.__feature &&
                                window.__feature !== i &&
                                window.subViews[i] &&
                                (n = window.subViews[i].id)),
                        { caller: i, stack: t, resId: n }
                    );
                };
            },
            8071: (e, t, i) => {
                i.d(t, { M: () => n });
                const n = (e, t) => e.split('.').reduce((e, t) => e && e[t], t);
            },
            9056: (e, t, i) => {
                i.d(t, { m: () => r });
                var n = i(7902),
                    s = i(8071),
                    a = i(4179),
                    _ = i(6179);
                const o = a.Sw.instance,
                    r = (e = 'model', t = !0) => {
                        const i = (0, _.useState)(0),
                            a = (i[0], i[1]),
                            r = (0, _.useMemo)(() => (0, n.F)(), []),
                            l = r.caller,
                            c = r.resId,
                            d = (0, _.useMemo)(
                                () => (window.__feature && window.__feature !== l ? `children.${l}.${e}` : e),
                                [l, e],
                            ),
                            b = (0, _.useMemo)(
                                () =>
                                    ((e) => {
                                        const t = (0, s.M)(e, window);
                                        for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                        return t;
                                    })(d),
                                [d],
                            );
                        return (
                            (0, _.useEffect)(() => {
                                if (t) {
                                    const t = () => {
                                            a((e) => e + 1);
                                        },
                                        i = o.addCallback(e, t, c);
                                    return () => o.removeCallback(i, c);
                                }
                            }, [e, t, c]),
                            b
                        );
                    };
            },
            5521: (e, t, i) => {
                let n, s;
                i.d(t, { n: () => n }),
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
                    })(s || (s = {}));
            },
            1358: (e, t, i) => {
                i.d(t, { Z: () => a });
                var n = i(3138);
                class s {
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
                        return window.__dataTracker || (window.__dataTracker = new s()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, t, i = 0, s = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = n.O.view.addModelObserver(e, i, s);
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
                            const n = this._callbacks[i];
                            void 0 !== n && n(e, t);
                        });
                    }
                }
                s.__instance = void 0;
                const a = s;
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
            4179: (e, t, i) => {
                i.d(t, { Sw: () => a.Z, ry: () => E });
                class n {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: i }) => {
                                    let n = e.target;
                                    do {
                                        if (n === t) return;
                                        n = n.parentNode;
                                    } while (n);
                                    i();
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
                        const i = e,
                            n = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== i || t !== n)),
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
                const s = n;
                var a = i(1358);
                const _ = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    o = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, i) => userLocale.getTimeFormat(e, t, void 0 === i || i),
                        getTimeString: (e, t, i) => userLocale.getTimeString(e, t, void 0 === i || i),
                    };
                let r;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(r || (r = {}));
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    b = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var u = i(5521),
                    m = i(3138);
                const v = ['args'];
                function h(e, t, i, n, s, a, _) {
                    try {
                        var o = e[a](_),
                            r = o.value;
                    } catch (e) {
                        return void i(e);
                    }
                    o.done ? t(r) : Promise.resolve(r).then(n, s);
                }
                const w = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                    return new Promise(function (n, s) {
                                        var a = e.apply(t, i);
                                        function _(e) {
                                            h(a, n, s, _, o, 'next', e);
                                        }
                                        function o(e) {
                                            h(a, n, s, _, o, 'throw', e);
                                        }
                                        _(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    p = (e, t) => {
                        const i = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const s = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var i,
                                        n,
                                        s = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) (i = a[n]), t.indexOf(i) >= 0 || (s[i] = e[i]);
                                    return s;
                                })(t, v);
                            void 0 !== s
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: i, type: e }, a, {
                                          arguments:
                                              ((n = s),
                                              Object.entries(n).map(([e, t]) => {
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
                        var n;
                    },
                    S = () => p(r.CLOSE),
                    g = (e, t) => {
                        e.keyCode === u.n.ESCAPE && t();
                    };
                var f = i(7572);
                const T = s.instance,
                    O = {
                        DataTracker: a.Z,
                        ViewModel: f.Z,
                        ViewEventType: r,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: b,
                        makeGlobalBoundingBox: w,
                        sendMoveEvent: (e) => p(r.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: S,
                        sendClosePopOverEvent: () => p(r.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, i = 0) => {
                            p(r.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: i, args: t });
                        },
                        sendShowPopOverEvent: (e, t, i, n, s = R.invalid('resId'), a) => {
                            const _ = m.O.view.getViewGlobalPosition(),
                                o = i.getBoundingClientRect(),
                                l = o.x,
                                c = o.y,
                                d = o.width,
                                b = o.height,
                                u = {
                                    x: m.O.view.pxToRem(l) + _.x,
                                    y: m.O.view.pxToRem(c) + _.y,
                                    width: m.O.view.pxToRem(d),
                                    height: m.O.view.pxToRem(b),
                                };
                            p(r.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: s,
                                direction: t,
                                bbox: w(u),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => g(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            g(e, S);
                        },
                        handleViewEvent: p,
                        onBindingsReady: E,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(r.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(r.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(r.POP_OVER),
                        dumpViewModel: function e(t) {
                            const i = {};
                            if ('object' != typeof t) return t;
                            for (const n in t)
                                if (Object.prototype.hasOwnProperty.call(t, n)) {
                                    const s = Object.prototype.toString.call(t[n]);
                                    if (s.startsWith('[object CoherentArrayProxy]')) {
                                        const s = t[n];
                                        i[n] = [];
                                        for (let t = 0; t < s.length; t++) i[n].push({ value: e(s[t].value) });
                                    } else
                                        s.startsWith('[object class BW::WULF::ViewModel')
                                            ? (i[n] = e(t[n]))
                                            : (i[n] = t[n]);
                                }
                            return i;
                        },
                        ClickOutsideManager: T,
                        SystemLocale: _,
                        UserLocale: o,
                    };
                window.ViewEnvHelper = O;
            },
            5918: (e, t, i) => {
                var n = i(4888),
                    s = i(7383),
                    a = i(9056),
                    _ = i(6179),
                    o = i.n(_),
                    r = i(2558),
                    l = i(8934),
                    c = i(5958);
                const d = 'BackEffects_shine_f6',
                    b = 'BackEffects_sparks_55',
                    u = 'BackEffects_nut_79',
                    m = 'BackEffects_wrench_5a',
                    v = { enterActive: 'BackEffects_shine__enterActive_54' },
                    h = { enterActive: 'BackEffects_sparks__enterActive_79' },
                    w = { enterActive: 'BackEffects_nut__enterActive_b8' },
                    E = { enterActive: 'BackEffects_wrench__enterActive_ca' },
                    p = [n.dZ, n.sH],
                    S = o().memo(({ in: e, actionType: t }) =>
                        o().createElement(
                            o().Fragment,
                            null,
                            o().createElement(
                                l.Z,
                                { in: e, timeout: c.Dp, classNames: v },
                                o().createElement('div', { className: d }),
                            ),
                            o().createElement(
                                l.Z,
                                { in: e, timeout: c.IG, classNames: h },
                                o().createElement('div', { className: b }),
                            ),
                            p.includes(t) &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement(
                                        l.Z,
                                        { in: e, timeout: c.wx, classNames: w },
                                        o().createElement('div', { className: u }),
                                    ),
                                    o().createElement(
                                        l.Z,
                                        { in: e, timeout: c.Kz, classNames: E },
                                        o().createElement('div', { className: m }),
                                    ),
                                ),
                        ),
                    ),
                    g = 'ColorMask_base_60',
                    f = 'ColorMask_base__enterActive_62',
                    T = ({ in: e, maskImage: t }) => {
                        const i = (0, _.useMemo)(() => ({ enterActive: f }), []),
                            n = (0, _.useMemo)(() => ({ maskImage: `url(${t})` }), [t]);
                        return o().createElement(
                            l.Z,
                            { in: e, timeout: c.Qj, classNames: i },
                            o().createElement('div', { className: g, style: n }),
                        );
                    },
                    O = {
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
                    R = { enter: O.base__enter, exit: O.base__enter };
                o().memo(
                    ({
                        children: e,
                        slotIndex: t,
                        uniqueKey: i,
                        slotType: d,
                        isEmpty: b = !1,
                        imageSource: u,
                        itemInstalledSetupIdx: m,
                    }) => {
                        const v = (0, a.m)('model.lastSlotAction'),
                            h = v.leftID,
                            w = v.rightID,
                            E = v.leftIntCD,
                            p = v.rightIntCD,
                            g = v.actionType,
                            f = v.intCD,
                            F = (0, _.useState)(!0),
                            x = F[0],
                            D = F[1],
                            A = (0, _.useState)(!0),
                            L = A[0],
                            k = A[1],
                            y = (0, _.useState)(u),
                            C = y[0],
                            M = y[1],
                            P = (0, _.useState)(i),
                            N = P[0],
                            I = P[1],
                            B = (0, _.useState)(m),
                            U = B[0],
                            V = B[1],
                            W = (0, _.useRef)(),
                            K = (0, _.useRef)(),
                            G = [n._2, n.dZ, n.sH],
                            H = (f === i || f === N) && U !== m && G.includes(g),
                            q = -1 === E || -1 === p,
                            $ = d ? `base${d[0].toUpperCase() + d.slice(1)}` : 'base',
                            j = c.Sr[g] || 0;
                        (0, _.useEffect)(
                            () => () => {
                                W.current && clearTimeout(W.current), K.current && clearTimeout(K.current);
                            },
                            [],
                        ),
                            (0, _.useEffect)(() => {
                                b || M(u);
                            }, [b, u]);
                        const z = (0, _.useCallback)(
                                (e) => {
                                    const i = Object.assign({}, R);
                                    switch (g) {
                                        case n.Xo: {
                                            const e = h === t ? c.mI.RIGHT : c.mI.LEFT,
                                                n = w - h != 1 ? c.mI.SWAP : '';
                                            (i.enterDone = O[`${$}__enter${e}${n}`]),
                                                (i.exit = O[`${$}__exit${e}${n}`]),
                                                q &&
                                                    (b
                                                        ? (i.enterDone = O[`${$}__enter${c.mI.FADE}`])
                                                        : (i.exit = O[`${$}__exit${c.mI.FADE}`]));
                                            break;
                                        }
                                        case n._2:
                                            (i.enterDone = O[`${$}__enter${c.mI.DESTROY}`]),
                                                (i.exit = O[`${$}__exit${c.mI.DESTROY}`]),
                                                (W.current = setTimeout(() => D(!0), c.YJ)),
                                                k(!0);
                                            break;
                                        case n.sH:
                                        case n.dZ:
                                            (i.enter = O[`${$}__enter${c.mI.DEMOUNT}${c.mI.FADE}`]),
                                                (i.exit = O[`${$}__exit${c.mI.DEMOUNT}`]),
                                                (W.current = setTimeout(() => D(!0), c.Ij));
                                            break;
                                        case n.eC:
                                        case n.FR:
                                            if (d !== s.g9) {
                                                const e = g === n.eC ? c.mI.FITTING : c.mI.FITTING_REMOVE;
                                                (i.enter = O[`${$}__enter${e}`]),
                                                    (i.exit = O[`${$}__exit${e}`]),
                                                    (i.exitActive = O[`${$}__exitActive${c.mI.FITTING}`]);
                                            } else
                                                (i.enterDone = O[`${$}__enter${c.mI.FADE}`]),
                                                    (i.exit = O[`${$}__exit${c.mI.FADE}`]);
                                            break;
                                        default:
                                            return e;
                                    }
                                    return o().cloneElement(e, { classNames: i, timeout: j });
                                },
                                [g, d, $, j, h, t, w, b, q],
                            ),
                            Y = (0, _.useCallback)(
                                (e) => {
                                    K.current = setTimeout(() => {
                                        (e.className = ''), e.classList.add(O.base), I(i), V(m);
                                    }, j);
                                },
                                [j, i, m],
                            ),
                            Z = (0, _.useCallback)(() => {
                                D(!1), k(!1);
                            }, []);
                        return o().createElement(
                            o().Fragment,
                            null,
                            o().createElement(
                                r.Z,
                                { component: null, childFactory: z },
                                o().createElement(
                                    l.Z,
                                    {
                                        key: i,
                                        timeout: j,
                                        classNames: R,
                                        onEntered: Y,
                                        onExiting: Z,
                                        unmountOnExit: !0,
                                    },
                                    o().createElement('div', { className: O.base }, e),
                                ),
                            ),
                            H &&
                                o().createElement(
                                    o().Fragment,
                                    null,
                                    o().createElement(S, { in: x, actionType: g }),
                                    o().createElement(T, { in: L, maskImage: C }),
                                ),
                        );
                    },
                );
            },
            5958: (e, t, i) => {
                i.d(t, {
                    Dp: () => o,
                    IG: () => r,
                    Ij: () => a,
                    Kz: () => c,
                    Qj: () => d,
                    Sr: () => u,
                    YJ: () => _,
                    mI: () => b,
                    wx: () => l,
                });
                var n = i(4888);
                const s = 1600,
                    a = 900,
                    _ = 900,
                    o = 200,
                    r = 400,
                    l = 600,
                    c = 600,
                    d = 1200;
                let b;
                !(function (e) {
                    (e.RIGHT = 'Right'),
                        (e.LEFT = 'Left'),
                        (e.SWAP = 'Swap'),
                        (e.FITTING = 'Fitting'),
                        (e.FITTING_REMOVE = 'FittingRemove'),
                        (e.FADE = 'Fade'),
                        (e.DESTROY = 'Destroy'),
                        (e.DEMOUNT = 'Demount');
                })(b || (b = {}));
                const u = { [n.Xo]: 200, [n.FR]: 250, [n.eC]: 250, [n._2]: 1400, [n.dZ]: s, [n.sH]: s, [n.Fd]: s };
            },
            4888: (e, t, i) => {
                i.d(t, { FR: () => s, Fd: () => o, Xo: () => a, _2: () => l, dZ: () => _, eC: () => n, sH: () => r });
                const n = 'select',
                    s = 'undo',
                    a = 'swap',
                    _ = 'demount',
                    o = 'demount_from_setup',
                    r = 'demount_from_setups',
                    l = 'destroy';
            },
            7383: (e, t, i) => {
                i.d(t, { g9: () => n });
                const n = 'shells';
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
        (__webpack_require__.O = (e, t, i, n) => {
            if (!t) {
                var s = 1 / 0;
                for (r = 0; r < deferred.length; r++) {
                    for (var [t, i, n] = deferred[r], a = !0, _ = 0; _ < t.length; _++)
                        (!1 & n || s >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[_]))
                            ? t.splice(_--, 1)
                            : ((a = !1), n < s && (s = n));
                    if (a) {
                        deferred.splice(r--, 1);
                        var o = i();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var r = deferred.length; r > 0 && deferred[r - 1][2] > n; r--) deferred[r] = deferred[r - 1];
            deferred[r] = [t, i, n];
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
        (__webpack_require__.j = 197),
        (() => {
            var e = { 197: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, i) => {
                    var n,
                        s,
                        [a, _, o] = i,
                        r = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (n in _) __webpack_require__.o(_, n) && (__webpack_require__.m[n] = _[n]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (t && t(i); r < a.length; r++)
                        (s = a[r]), __webpack_require__.o(e, s) && e[s] && e[s][0](), (e[s] = 0);
                    return __webpack_require__.O(l);
                },
                i = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            i.forEach(t.bind(null, 0)), (i.push = t.bind(null, i.push.bind(i)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [727], () => __webpack_require__(5918));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
