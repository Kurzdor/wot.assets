(() => {
    'use strict';
    var __webpack_modules__ = {
            67: (e, t, n) => {
                n.d(t, { O: () => X });
                var a = {};
                n.r(a),
                    n.d(a, { mouse: () => g, off: () => m, on: () => d, onResize: () => c, onScaleUpdated: () => u });
                var r = {};
                n.r(r),
                    n.d(r, {
                        events: () => a,
                        getMouseGlobalPosition: () => v,
                        getSize: () => p,
                        graphicsQuality: () => b,
                    });
                var s = {};
                n.r(s), n.d(s, { getBgUrl: () => h, getTextureUrl: () => f });
                var o = {};
                function i(e) {
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
                        addModelObserver: () => M,
                        addPreloadTexture: () => R,
                        children: () => s,
                        displayStatus: () => E,
                        displayStatusIs: () => K,
                        events: () => y,
                        extraSize: () => q,
                        forceTriggerMouseMove: () => G,
                        freezeTextureBeforeResize: () => A,
                        getBrowserTexturePath: () => D,
                        getDisplayStatus: () => U,
                        getScale: () => z,
                        getSize: () => B,
                        getViewGlobalPosition: () => L,
                        isEventHandled: () => V,
                        isFocused: () => W,
                        pxToRem: () => $,
                        remToPx: () => F,
                        resize: () => P,
                        sendEvent: () => O,
                        setAnimateWindow: () => j,
                        setEventHandled: () => H,
                        setInputPaddingsRem: () => I,
                        setSidePaddingsRem: () => x,
                        whenTutorialReady: () => Y,
                    });
                const c = i('clientResized'),
                    u = i('self.onScaleUpdated'),
                    d = (e, t) => engine.on(e, t),
                    m = (e, t) => engine.off(e, t),
                    _ = { down: i('mousedown'), up: i('mouseup'), move: i('mousemove') };
                const g = (function () {
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
                    const r = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const s = `mouse${t}`,
                                        o = _[t]((e) => n([e, 'outside']));
                                    function i(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(s, i),
                                        a(),
                                        () => {
                                            r &&
                                                (o(),
                                                window.removeEventListener(s, i),
                                                (e.listeners -= 1),
                                                a(),
                                                (r = !1));
                                        }
                                    );
                                };
                            })(n)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, r, {
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
                function p(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function v(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const b = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function f(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function h(e, t, n) {
                    return `url(${f(e, t, n)})`;
                }
                const E = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    y = {
                        onTextureFrozen: i('self.onTextureFrozen'),
                        onTextureReady: i('self.onTextureReady'),
                        onDomBuilt: i('self.onDomBuilt'),
                        onLoaded: i('self.onLoaded'),
                        onDisplayChanged: i('self.onShowingStatusChanged'),
                        onFocusUpdated: i('self.onFocusChanged'),
                        children: {
                            onAdded: i('children.onAdded'),
                            onLoaded: i('children.onLoaded'),
                            onRemoved: i('children.onRemoved'),
                            onAttached: i('children.onAttached'),
                            onTextureReady: i('children.onTextureReady'),
                            onRequestPosition: i('children.requestPosition'),
                        },
                    },
                    w = ['args'];
                const k = 2,
                    C = 16,
                    N = 32,
                    T = 64,
                    S = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        r = {},
                                        s = Object.keys(e);
                                    for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                    return r;
                                })(t, w);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, s, {
                                          arguments:
                                              ((a = r),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, s));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var a;
                    },
                    O = {
                        close(e) {
                            S('popover' === e ? k : N);
                        },
                        minimize() {
                            S(T);
                        },
                        move(e) {
                            S(C, { isMouseEvent: !0, on: e });
                        },
                    };
                function R(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function I(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function D(e, t, n, a = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, a);
                }
                function M(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function x(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function B(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function P(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function L(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: F(t.x), y: F(t.y) };
                }
                function A() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function z() {
                    return viewEnv.getScale();
                }
                function $(e) {
                    return viewEnv.pxToRem(e);
                }
                function F(e) {
                    return viewEnv.remToPx(e);
                }
                function j(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function W() {
                    return viewEnv.isFocused();
                }
                function H() {
                    return viewEnv.setEventHandled();
                }
                function V() {
                    return viewEnv.isEventHandled();
                }
                function G() {
                    viewEnv.forceTriggerMouseMove();
                }
                function U() {
                    return viewEnv.getShowingStatus();
                }
                const K = Object.keys(E).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === E[t]), e), {}),
                    q = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    Y = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : y.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    X = { view: o, client: r };
            },
            358: (e, t, n) => {
                n.d(t, { Z: () => s });
                var a = n(67);
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
                        const s = a.O.view.addModelObserver(e, n, r);
                        return (
                            s > 0
                                ? ((this._callbacks[s] = t),
                                  n > 0 && (this._views[n] ? this._views[n].push(s) : (this._views[n] = [s])))
                                : console.error("Can't add callback for model:", e),
                            s
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
                r.__instance = void 0;
                const s = r;
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
            596: (e, t, n) => {
                n.d(t, { Sw: () => s.Z, Gr: () => d, Z5: () => i, B0: () => c, lw: () => o, ry: () => E });
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
                const r = a;
                var s = n(358);
                function o(e) {
                    const t = {};
                    if ('object' != typeof e) return e;
                    for (const n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n)) {
                            const a = Object.prototype.toString.call(e[n]);
                            if (a.startsWith('[object CoherentArrayProxy]')) {
                                const a = e[n];
                                t[n] = [];
                                for (let e = 0; e < a.length; e++) t[n].push({ value: o(a[e].value) });
                            } else a.startsWith('[object class BW::WULF::ViewModel') ? (t[n] = o(e[n])) : (t[n] = e[n]);
                        }
                    return t;
                }
                const i = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    l = {
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
                const u = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    d = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    m = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                let g, p;
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
                        (e[(e.KEY_9 = 57)] = 'KEY_9');
                })(g || (g = {})),
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
                    })(p || (p = {}));
                var v = n(67);
                const b = ['args'];
                function f(e, t, n, a, r, s, o) {
                    try {
                        var i = e[s](o),
                            l = i.value;
                    } catch (e) {
                        return void n(e);
                    }
                    i.done ? t(l) : Promise.resolve(l).then(a, r);
                }
                const h = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                        n = arguments;
                                    return new Promise(function (a, r) {
                                        var s = e.apply(t, n);
                                        function o(e) {
                                            f(s, a, r, o, i, 'next', e);
                                        }
                                        function i(e) {
                                            f(s, a, r, o, i, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    y = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                s = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        r = {},
                                        s = Object.keys(e);
                                    for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                    return r;
                                })(t, b);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, s, {
                                          arguments:
                                              ((a = r),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, s));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var a;
                    },
                    w = () => y(c.CLOSE),
                    k = (e, t) => {
                        e.keyCode === g.ESCAPE && t();
                    };
                var C = n(572);
                const N = r.instance,
                    T = {
                        DataTracker: s.Z,
                        ViewModel: C.Z,
                        ViewEventType: c,
                        NumberFormatType: u,
                        RealFormatType: d,
                        TimeFormatType: m,
                        DateFormatType: _,
                        makeGlobalBoundingBox: h,
                        sendMoveEvent: (e) => y(c.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: w,
                        sendClosePopOverEvent: () => y(c.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            y(c.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, a, r = R.invalid('resId'), s) => {
                            const o = v.O.view.getViewGlobalPosition(),
                                i = n.getBoundingClientRect(),
                                l = i.x,
                                u = i.y,
                                d = i.width,
                                m = i.height,
                                _ = {
                                    x: v.O.view.pxToRem(l) + o.x,
                                    y: v.O.view.pxToRem(u) + o.y,
                                    width: v.O.view.pxToRem(d),
                                    height: v.O.view.pxToRem(m),
                                };
                            y(c.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: a || R.invalid('resId'),
                                targetID: r,
                                direction: t,
                                bbox: h(_),
                                on: !0,
                                args: s,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => k(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            k(e, w);
                        },
                        handleViewEvent: y,
                        onBindingsReady: E,
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
                        dumpViewModel: o,
                        ClickOutsideManager: N,
                        SystemLocale: i,
                        UserLocale: l,
                    };
                window.ViewEnvHelper = T;
            },
            56: (e, t, n) => {
                var a = {};
                n.r(a),
                    n.d(a, {
                        Area: () => pn,
                        Bar: () => mn,
                        DefaultScroll: () => gn,
                        Direction: () => Yt,
                        defaultSettings: () => Xt,
                        useHorizontalScrollApi: () => Qt,
                    });
                var r = {};
                n.r(r), n.d(r, { Area: () => xn, Bar: () => In, Default: () => Mn, useVerticalScrollApi: () => vn });
                var s = n(483),
                    o = n.n(s);
                function i(e) {
                    engine.call('PlaySound', e);
                }
                var l = n(179),
                    c = n.n(l);
                const u = {
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
                let d, m;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(d || (d = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium');
                    })(m || (m = {}));
                const _ = ({
                    children: e,
                    size: t,
                    isFocused: n,
                    type: a,
                    disabled: r,
                    mixClass: s,
                    soundHover: m,
                    soundClick: _,
                    onMouseEnter: g,
                    onMouseMove: p,
                    onMouseDown: v,
                    onMouseUp: b,
                    onMouseLeave: f,
                    onClick: h,
                }) => {
                    const E = (0, l.useRef)(null),
                        y = (0, l.useState)(n),
                        w = y[0],
                        k = y[1],
                        C = (0, l.useState)(!1),
                        N = C[0],
                        T = C[1],
                        S = (0, l.useState)(!1),
                        O = S[0],
                        I = S[1],
                        D = (0, l.useCallback)(() => {
                            r || (E.current && (E.current.focus(), k(!0)));
                        }, [r]),
                        M = (0, l.useCallback)(
                            (e) => {
                                w && null !== E.current && !E.current.contains(e.target) && k(!1);
                            },
                            [w],
                        ),
                        x = (0, l.useCallback)(
                            (e) => {
                                r || (h && h(e));
                            },
                            [r, h],
                        ),
                        B = (0, l.useCallback)(
                            (e) => {
                                r || (null !== m && i(m), g && g(e), I(!0));
                            },
                            [r, m, g],
                        ),
                        P = (0, l.useCallback)(
                            (e) => {
                                p && p(e);
                            },
                            [p],
                        ),
                        L = (0, l.useCallback)(
                            (e) => {
                                r || (b && b(e), T(!1));
                            },
                            [r, b],
                        ),
                        A = (0, l.useCallback)(
                            (e) => {
                                r || (null !== _ && i(_), v && v(e), n && D(), T(!0));
                            },
                            [r, _, v, D, n],
                        ),
                        z = (0, l.useCallback)(
                            (e) => {
                                r || (f && f(e), T(!1));
                            },
                            [r, f],
                        ),
                        $ = o()(
                            u.base,
                            u[`base__${a}`],
                            {
                                [u.base__disabled]: r,
                                [u[`base__${t}`]]: t,
                                [u.base__focus]: w,
                                [u.base__highlightActive]: N,
                                [u.base__firstHover]: O,
                            },
                            s,
                        ),
                        F = o()(u.state, u.state__default);
                    return (
                        (0, l.useEffect)(
                            () => (
                                document.addEventListener('mousedown', M),
                                () => {
                                    document.removeEventListener('mousedown', M);
                                }
                            ),
                            [M],
                        ),
                        (0, l.useEffect)(() => {
                            k(n);
                        }, [n]),
                        c().createElement(
                            'div',
                            {
                                ref: E,
                                className: $,
                                onMouseEnter: B,
                                onMouseMove: P,
                                onMouseUp: L,
                                onMouseDown: A,
                                onMouseLeave: z,
                                onClick: x,
                            },
                            a !== d.ghost &&
                                c().createElement(
                                    c().Fragment,
                                    null,
                                    c().createElement('div', { className: u.back }),
                                    c().createElement('span', { className: u.texture }),
                                ),
                            c().createElement(
                                'span',
                                { className: F },
                                c().createElement('span', { className: u.stateDisabled }),
                                c().createElement('span', { className: u.stateHighlightHover }),
                                c().createElement('span', { className: u.stateHighlightActive }),
                            ),
                            c().createElement(
                                'span',
                                { className: u.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                _.defaultProps = { type: d.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const g = (0, l.memo)(_),
                    p = {
                        base: 'ErrorBoundary_base_46',
                        message: 'ErrorBoundary_message_33',
                        heading: 'ErrorBoundary_heading_ba',
                        button: 'ErrorBoundary_button_74',
                        errorStack: 'ErrorBoundary_errorStack_fe',
                        errorInfo: 'ErrorBoundary_errorInfo_f1',
                    };
                class v extends c().Component {
                    constructor(e) {
                        super(e),
                            (this.clearError = () => {
                                this.setState({ error: void 0 });
                            }),
                            (this.state = { error: void 0 });
                    }
                    static getDerivedStateFromError(e) {
                        return { error: e };
                    }
                    render() {
                        const e = this.state.error,
                            t = this.props,
                            n = t.errorMessage,
                            a = void 0 === n ? R.strings.dogtags.error.message() : n,
                            r = t.retryLabel,
                            s = void 0 === r ? R.strings.dogtags.error.retry() : r;
                        return e
                            ? c().createElement(
                                  'div',
                                  { className: p.base },
                                  c().createElement(
                                      'div',
                                      { className: p.message },
                                      c().createElement('div', { className: p.heading }, a),
                                      c().createElement(g, { mixClass: p.retry, onClick: this.clearError }, s),
                                  ),
                              )
                            : this.props.children;
                    }
                }
                var b = n(493),
                    f = n.n(b);
                const h = {
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
                    E = [
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
                function y() {
                    return (
                        (y =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        y.apply(this, arguments)
                    );
                }
                class w extends c().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && i(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && i(this.props.soundClick);
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
                            a = e.goto,
                            r = e.side,
                            s = e.type,
                            i = e.classNames,
                            l = e.onMouseEnter,
                            u = e.onMouseLeave,
                            d = e.onMouseDown,
                            m = e.onMouseUp,
                            _ =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        a,
                                        r = {},
                                        s = Object.keys(e);
                                    for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                    return r;
                                })(e, E)),
                            g = o()(h.base, h[`base__${s}`], h[`base__${r}`], null == i ? void 0 : i.base),
                            p = o()(h.icon, h[`icon__${s}`], h[`icon__${r}`], null == i ? void 0 : i.icon),
                            v = o()(h.glow, null == i ? void 0 : i.glow),
                            b = o()(h.caption, h[`caption__${s}`], null == i ? void 0 : i.caption),
                            f = o()(h.goto, null == i ? void 0 : i.goto);
                        return c().createElement(
                            'div',
                            y(
                                {
                                    className: g,
                                    onMouseEnter: this._onMouseEnter(l),
                                    onMouseLeave: this._onMouseLeave(u),
                                    onMouseDown: this._onMouseDown(d),
                                    onMouseUp: this._onMouseUp(m),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: n,
                                },
                                _,
                            ),
                            'info' !== s && c().createElement('div', { className: h.shine }),
                            c().createElement('div', { className: p }, c().createElement('div', { className: v })),
                            c().createElement('div', { className: b }, t),
                            a && c().createElement('div', { className: f }, a),
                        );
                    }
                }
                w.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const k = (e, t) => {
                        let n;
                        const a = setTimeout(() => {
                            n = e();
                        }, t);
                        return () => {
                            'function' == typeof n && n(), clearTimeout(a);
                        };
                    },
                    C = (e = 1) => {
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
                    },
                    N = (e, t) => e.split('.').reduce((e, t) => e && e[t], t),
                    T = (e) => {
                        const t = (0, l.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    };
                var S = n(596);
                const O = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    I = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    D = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, n) => {
                                const a = N(`${e}.${n}`, window);
                                return O(a) ? t(e, n, a) : `${e}.${n}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    M = (e) => {
                        const t = ((e) => {
                                const t = C(),
                                    n = t.caller,
                                    a = t.resId,
                                    r = window.__feature && window.__feature !== n && n ? `subViews.${n}` : '';
                                return { modelPrefix: r, modelPath: I(r, e || ''), resId: a };
                            })(),
                            n = t.modelPrefix,
                            a = e.split('.');
                        if (a.length > 0) {
                            const e = [a[0]];
                            return (
                                a.reduce((t, a) => {
                                    const r = N(I(n, `${t}.${a}`), window);
                                    return O(r) ? (e.push(r.id), `${t}.${a}.value`) : (e.push(a), `${t}.${a}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    },
                    x = S.Sw.instance;
                let B;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(B || (B = {}));
                const P = (e = 'model', t = B.Deep) => {
                    const n = (0, l.useState)(0),
                        a = (n[0], n[1]),
                        r = (0, l.useMemo)(() => C(), []),
                        s = r.caller,
                        o = r.resId,
                        i = (0, l.useMemo)(
                            () => (window.__feature && window.__feature !== s ? `subViews.${s}.${e}` : e),
                            [s, e],
                        ),
                        c = (0, l.useState)(() =>
                            ((e) => {
                                const t = N(e, window);
                                for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                return O(t) ? t.value : t;
                            })(D(i)),
                        ),
                        u = c[0],
                        d = c[1],
                        m = (0, l.useRef)(-1);
                    return (
                        T(() => {
                            if (
                                ('boolean' == typeof t &&
                                    ((t = t ? B.Deep : B.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                t !== B.None)
                            ) {
                                const n = (e) => {
                                        ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                        t === B.Deep
                                            ? (e === u && a((e) => e + 1), d(e))
                                            : d(Object.assign([], e));
                                    },
                                    r = M(e);
                                m.current = x.addCallback(r, n, o, t === B.Deep);
                            }
                        }),
                        (0, l.useEffect)(() => {
                            if (t !== B.None)
                                return () => {
                                    x.removeCallback(m.current, o);
                                };
                        }, [o, t]),
                        u
                    );
                };
                let L, A, z, $, F;
                !(function (e) {
                    (e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background');
                })(L || (L = {})),
                    (function (e) {
                        (e[(e.Equipped = 0)] = 'Equipped'), (e[(e.Locked = 1)] = 'Locked'), (e[(e.Open = 2)] = 'Open');
                    })(A || (A = {})),
                    (function (e) {
                        (e.Engraving = 'engraving'), (e.Background = 'background');
                    })(z || (z = {})),
                    (function (e) {
                        (e.Dedication = 'dedication'),
                            (e.Skill = 'skill'),
                            (e.RankedSkill = 'ranked_skill'),
                            (e.Triumph = 'triumph'),
                            (e.Medal = 'triumph_medal'),
                            (e.Base = 'base');
                    })($ || ($ = {})),
                    (function (e) {
                        (e.Dedication = 'dedication'), (e.Triumph = 'triumph'), (e.Season = 'season');
                    })(F || (F = {}));
                const j = {
                        [F.Dedication]: [$.Dedication],
                        [F.Triumph]: [$.Triumph],
                        [F.Season]: [$.Skill, $.RankedSkill],
                    },
                    W = 10;
                let H;
                function V(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return G(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return G(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function G(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                !(function (e) {
                    (e.NUMBER = 'NUMBER'), (e.PERCENTAGE = 'PERCENTAGE');
                })(H || (H = {}));
                const U = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'],
                    K = (e, t) => {
                        const n = e.id;
                        return n === t.background.id || n === t.engraving.id;
                    },
                    q = R.images.gui.maps.icons.dogtags,
                    Y = 'R.images.gui.maps.icons.dogtags',
                    X = R.strings.dogtags.component,
                    Z = 'R.strings.dogtags.component',
                    Q = (e, t, n, a = 0, r = 'big', s = q, o = X) => {
                        s &&
                            !(r in s) &&
                            console.error(
                                `componentResourcesMap error at id: ${e}. Property "${r}" does not exist in ${Y}`,
                            );
                        const i = r in s ? s[r] : void 0,
                            l = `${t}s`;
                        i &&
                            !(l in i) &&
                            console.error(
                                `componentResourcesMap error at id: ${e}. Property "${l}" does not exist in ${[Y, r].join('.')}`,
                            );
                        const c = i && l in i ? i[l] : void 0,
                            u = `${t}_${e}_${t === z.Engraving ? a : '0'}`;
                        c &&
                            !(u in c) &&
                            console.error(
                                `componentResourcesMap error at id: ${e}. Property "${u}" does not exist in ${[Y, r, l].join('.')}`,
                            );
                        const d = c && u in c ? c[u]() : s.big.backgrounds.background_66_0();
                        o &&
                            !(t in o) &&
                            console.error(
                                `componentResourcesMap error at id: ${e}. Property "${t}" does not exist in ${Z}`,
                            );
                        const m = t in o ? o[t] : void 0;
                        m &&
                            !(n in m) &&
                            console.error(
                                `componentResourcesMap error at id: ${e}. Property "${n}" does not exist in ${[Z, t].join('.')}`,
                            );
                        const _ = m && n in m ? m[n] : void 0,
                            g = `c_${e}`;
                        _ &&
                            !(g in _) &&
                            console.error(
                                `componentResourcesMap error at id: ${e}. Property "${g}" does not exist in ${[Z, t, n].join('.')}`,
                            );
                        return { image: d, strings: _ && g in _ ? _[g] : void 0 };
                    },
                    J = (e) => e.filter((e) => e.value.items.length > 0),
                    ee = (e, t) => {
                        const n = ((e) => Object.keys(e).filter((t) => e[t]))(t),
                            a = n.reduce((e, t) => (e.push(...j[t]), e), []);
                        return J(
                            e.map((e) => ({
                                value: Object.assign({}, e.value, {
                                    items: e.value.items.filter((e) => a.includes(e.value.purpose)),
                                }),
                            })),
                        );
                    },
                    te = { [L.Engraving]: 'engravingGrid', [L.Background]: 'backgroundGrid' },
                    ne = { [L.Engraving]: 'engraving', [L.Background]: 'background' },
                    ae = (e, t) => {
                        for (var n, a = V(e.values()); !(n = a()).done; ) {
                            for (var r, s = V(n.value.value.items.values()); !(r = s()).done; ) {
                                const e = r.value;
                                if (e.value.id === t) return e.value;
                            }
                        }
                    },
                    re = (e) => e.reduce((e, t) => e + t.value.items.length, 0),
                    se = (e, t = H.NUMBER) => {
                        const n = S.Z5.getRealFormat(e, S.Gr.WO_ZERO_DIGITS).replace(/\s/g, ' ');
                        return t === H.PERCENTAGE ? `${n} %` : n;
                    },
                    oe = {
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
                    ie = ['size', 'value', 'isEmpty', 'fadeInAnimation', 'hide', 'maximumNumber', 'className'];
                function le() {
                    return (
                        (le =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        le.apply(this, arguments)
                    );
                }
                const ce = (e) => {
                    let t = e.size,
                        n = e.value,
                        a = e.isEmpty,
                        r = e.fadeInAnimation,
                        s = e.hide,
                        i = e.maximumNumber,
                        l = e.className,
                        u = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                s = Object.keys(e);
                            for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, ie);
                    const d = a ? null : n,
                        m = 'string' == typeof d;
                    if ((d && !m && d < 0) || 0 === d) return null;
                    const _ = d && !m && d > i,
                        g = o()(
                            oe.base,
                            oe[`base__${t}`],
                            r && oe.base__animated,
                            s && oe.base__hidden,
                            !d && oe.base__pattern,
                            a && oe.base__empty,
                            l,
                        );
                    return c().createElement(
                        'div',
                        le({ className: g }, u),
                        c().createElement('div', { className: oe.bg }),
                        c().createElement('div', { className: oe.pattern }),
                        c().createElement(
                            'div',
                            { className: o()(oe.value, m && oe.value__text) },
                            _ ? i : d,
                            _ && c().createElement('span', { className: oe.plus }, '+'),
                        ),
                    );
                };
                ce.defaultProps = { size: 'normal', fadeInAnimation: !1, hide: !1, maximumNumber: 99 };
                const ue = R.images.gui.maps.icons.dogtags.big.digits,
                    de = (e, t = ue) => {
                        const n = `c_${e}`;
                        return n in t
                            ? t[n]()
                            : e in t
                              ? t[e]()
                              : void (
                                    'invalidTestDigit' !== e &&
                                    console.error(
                                        `getDigitUri error at digit: ${e}. No properties "${n}" nor "${e}" exist in R.images.gui.maps.icons.dogtags.big.digits`,
                                    )
                                );
                    },
                    me = (e) => ({ backgroundImage: `url(${e})` }),
                    _e = 'Item_base_13',
                    ge = 'Item_mainWrapper_0c',
                    pe = 'Item_hoverWrapper_2e',
                    ve = 'Item_base__selected_f0',
                    be = 'Item_slotBg_3d',
                    fe = 'Item_selectedBg_7c',
                    he = 'Item_hoverBg_8d',
                    Ee = 'Item_hoverInfo_05',
                    ye = 'Item_base__locked_59',
                    we = 'Item_componentImage_03',
                    ke = 'Item_engravingBackground_e6',
                    Ce = 'Item_statusIcon_69',
                    Ne = 'Item_statusIcon_check_0c',
                    Te = 'Item_statusIcon_lock_5b',
                    Se = 'Item_levelBadge_13',
                    Oe = 'Item_itemCounter_cb',
                    Re = ['selected', 'isEquipped', 'onNewComponentHover'];
                const Ie = R.images.gui.maps.icons.dogtags,
                    De = o()(we, ke),
                    Me = (0, l.memo)((e) => {
                        const t = e.selected,
                            n = e.isEquipped,
                            a = e.onNewComponentHover,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    s = Object.keys(e);
                                for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, Re),
                            s = r.id,
                            u = r.type,
                            d = r.isLocked,
                            m = r.currentGrade,
                            _ = r.currentProgress,
                            g = r.progressNumberType,
                            p = r.onClick,
                            v = r.purpose,
                            b = r.isNew;
                        let f = null;
                        d ? (f = t ? Ie.icons.alert() : Ie.icons.lock()) : n && (f = Ie.icons.equipped_slot_icon());
                        const h = f ? me(f) : {},
                            E = m,
                            y = Q(s, u, v, E, 'small'),
                            w = y.image,
                            k = y.strings,
                            C = u === z.Engraving,
                            N = (0, l.useCallback)(() => {
                                i(d ? R.sounds.dt_element_locked_click() : R.sounds.dt_element_click()), p(r);
                            }, [d, p, r]),
                            T = (0, l.useCallback)(() => {
                                b && a({ compId: s });
                            }, [s, a, b]),
                            S = (0, l.useCallback)(() => {
                                i(R.sounds.highlight());
                            }, []);
                        if (!k) return console.warn(`Component ${s} is missing translation info.`), null;
                        const O = k.title(),
                            I = me(w),
                            D = o()(_e, { [ve]: t, [ye]: d }),
                            M = se(_, g),
                            x = o()(Ce, { [Ne]: n && !d, [Te]: !t && d }),
                            B = !d && C,
                            P = c().createElement('div', { className: we, style: I });
                        return c().createElement(
                            'div',
                            { className: D, onClick: N, onMouseOver: T, onMouseEnter: S, id: 'item-' + s },
                            c().createElement(
                                'div',
                                { className: ge },
                                c().createElement('div', { className: be }),
                                c().createElement('div', { className: fe }),
                                E >= 0 && B && c().createElement('div', { className: Se }, U[E]),
                                C ? c().createElement('div', { className: De }, P) : P,
                                f && c().createElement('div', { className: x, style: h }),
                                c().createElement(
                                    'div',
                                    { className: pe },
                                    c().createElement('div', { className: he }),
                                    c().createElement(
                                        'div',
                                        { className: Ee },
                                        O,
                                        B && c().createElement('span', null, M),
                                    ),
                                ),
                            ),
                            b && c().createElement('div', { className: Oe }, c().createElement(ce, { isEmpty: !0 })),
                        );
                    }),
                    xe = [
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
                function Be(e) {
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
                const Pe = (e, t, n = {}, a = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: S.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: a,
                                },
                                n,
                            ),
                        );
                    },
                    Le = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            a = e.args,
                            r = e.onMouseEnter,
                            s = e.onMouseLeave,
                            o = e.onMouseDown,
                            i = e.onClick,
                            c = e.ignoreShowDelay,
                            u = void 0 !== c && c,
                            d = e.ignoreMouseClick,
                            m = void 0 !== d && d,
                            _ = e.decoratorId,
                            g = void 0 === _ ? 0 : _,
                            p = e.isEnabled,
                            v = void 0 === p || p,
                            b = e.targetId,
                            f = void 0 === b ? 0 : b,
                            h = e.onShow,
                            E = e.onHide,
                            y = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    s = Object.keys(e);
                                for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, xe);
                        const w = (0, l.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            k = (0, l.useMemo)(() => f || C().resId, [f]),
                            N = (0, l.useCallback)(() => {
                                (w.current.isVisible && w.current.timeoutId) ||
                                    (Pe(n, g, { isMouseEvent: !0, on: !0, arguments: Be(a) }, k),
                                    h && h(),
                                    (w.current.isVisible = !0));
                            }, [n, g, a, k, h]),
                            T = (0, l.useCallback)(() => {
                                if (w.current.isVisible || w.current.timeoutId) {
                                    const e = w.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (w.current.timeoutId = 0)),
                                        Pe(n, g, { on: !1 }, k),
                                        w.current.isVisible && E && E(),
                                        (w.current.isVisible = !1);
                                }
                            }, [n, g, k, E]),
                            S = (0, l.useCallback)((e) => {
                                w.current.isVisible &&
                                    ((w.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (w.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(w.current.prevTarget) && T();
                                    }, 200)));
                            }, []);
                        (0, l.useEffect)(() => {
                            const e = w.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', S, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', S, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, l.useEffect)(() => {
                                !1 === v && T();
                            }, [v, T]),
                            (0, l.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', T),
                                    () => {
                                        window.removeEventListener('mouseleave', T), T();
                                    }
                                ),
                                [T],
                            );
                        return v
                            ? (0, l.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((O = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((w.current.timeoutId = window.setTimeout(N, u ? 100 : 400)),
                                                      r && r(e),
                                                      O && O(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              T(), null == s || s(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === m && T(), null == i || i(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === m && T(), null == o || o(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      y,
                                  ),
                              )
                            : t;
                        var O;
                    },
                    Ae = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function ze() {
                    return (
                        (ze =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        ze.apply(this, arguments)
                    );
                }
                const $e = R.views.common.tooltip_window.simple_tooltip_content,
                    Fe = (e) => {
                        let t = e.children,
                            n = e.body,
                            a = e.header,
                            r = e.note,
                            s = e.alert,
                            o = e.args,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    s = Object.keys(e);
                                for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, Ae);
                        const u = (0, l.useMemo)(() => {
                            const e = Object.assign({}, o, { body: n, header: a, note: r, alert: s });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [s, n, a, r, o]);
                        return c().createElement(
                            Le,
                            ze(
                                {
                                    contentId:
                                        ((d = null == o ? void 0 : o.hasHtmlContent),
                                        d ? $e.SimpleTooltipHtmlContent('resId') : $e.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: u,
                                },
                                i,
                            ),
                            t,
                        );
                        var d;
                    },
                    je = 'Grid_base_2f',
                    We = 'Grid_sectionWrapper_fa',
                    He = 'Grid_emptyBlock_30',
                    Ve = 'Grid_sectionTitle_79',
                    Ge = 'Grid_sectionTitle_text_63',
                    Ue = 'Grid_sectionTitle_unlockedCount_fb',
                    Ke = 'Grid_sectionTitle_count_ac',
                    qe = 'Grid_sectionTitle_infoIcon_d7';
                function Ye() {
                    return (
                        (Ye =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Ye.apply(this, arguments)
                    );
                }
                const Xe = (0, l.memo)(
                        ({ data: e, onItemSelect: t, onNewComponentHover: n, selectedItems: a, equippedItems: r }) =>
                            c().createElement(
                                'div',
                                { className: je },
                                e.map((e, s) => {
                                    const o = e.value.items.length,
                                        i = (3 - (o % 3)) % 3,
                                        l = Array.from(Array(i)).map((e, t) =>
                                            c().createElement('div', { key: 'emptyBlock-' + t, className: He }),
                                        ),
                                        u = e.value.items.reduce((e, t) => (t.value.isLocked ? e : e + 1), 0),
                                        d = e.value.title ? systemLocale.toUpperCase(e.value.title) : '';
                                    return c().createElement(
                                        'div',
                                        { key: `${e.value.title}-${s}`, className: We },
                                        d &&
                                            c().createElement(
                                                'div',
                                                { className: Ve },
                                                c().createElement('div', { className: Ge }, d),
                                                c().createElement(
                                                    'div',
                                                    { className: Ke },
                                                    '(',
                                                    c().createElement('div', { className: Ue }, u),
                                                    '/',
                                                    o,
                                                    ')',
                                                ),
                                                e.value.tooltipDescription &&
                                                    c().createElement(
                                                        Fe,
                                                        {
                                                            header: e.value.tooltipTitle || void 0,
                                                            body: e.value.tooltipDescription,
                                                        },
                                                        c().createElement('div', { className: qe }),
                                                    ),
                                            ),
                                        e.value.items.map((e) => {
                                            const s = e.value,
                                                o = K(s, r),
                                                i = K(s, a);
                                            return c().createElement(
                                                Me,
                                                Ye({ key: s.id }, s, {
                                                    onClick: t,
                                                    selected: i,
                                                    isEquipped: o,
                                                    onNewComponentHover: n,
                                                }),
                                            );
                                        }),
                                        l,
                                    );
                                }),
                            ),
                    ),
                    Ze = 'Tabs_base_d9',
                    Qe = 'Tabs_base__vertical_c0',
                    Je = 'Tabs_list_0a',
                    et = 'Tabs_list__centered_dc',
                    tt = 'Tabs_wrapper_2d',
                    nt = 'Tabs_wrapper__centered_d8',
                    at = 'Tabs_wrapper__vertical_a5';
                function rt() {
                    return (
                        (rt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        rt.apply(this, arguments)
                    );
                }
                const st = 'tabs-role';
                var ot;
                !(function (e) {
                    (e.LIST = 'tabs-list'), (e.CONTENT = 'tab-content'), (e.TAB = 'tab-key');
                })(ot || (ot = {}));
                class it extends l.Component {
                    constructor(...e) {
                        super(...e),
                            (this.tabsProps = {}),
                            (this.elementsList = []),
                            (this.tabsListIndex = null),
                            (this.state = { activeKey: '', activeElements: [] }),
                            (this._getFirstTabKey = (e) => {
                                if (!e) return;
                                const t = e.find((e) => e.props[ot.TAB]);
                                return t && t.props[ot.TAB];
                            }),
                            (this.handleSetActiveKey = (e) => {
                                this.setState({ activeKey: e }),
                                    this.props.onTabChange &&
                                        this.props.onTabChange({ from: this.state.activeKey, to: e });
                            });
                    }
                    componentDidMount() {
                        const e = c().Children.toArray(this.props.children),
                            t = e.findIndex((e) => e.props[st] === ot.LIST);
                        if (t < 0) return;
                        const n =
                            this.props.activeKey || this._getFirstTabKey(c().Children.toArray(e[t].props.children));
                        (e[t] = c().cloneElement(e[t], {
                            children: c()
                                .Children.toArray(e[t].props.children)
                                .map((e) => c().cloneElement(e, { key: e.props[ot.TAB] })),
                        })),
                            (this.elementsList = e),
                            (this.tabsListIndex = t),
                            this.handleSetActiveKey(n);
                    }
                    componentWillReceiveProps(e) {
                        void 0 !== e.activeKey &&
                            e.activeKey !== this.props.activeKey &&
                            this.handleSetActiveKey(e.activeKey);
                    }
                    componentDidUpdate(e, t) {
                        if (null === this.tabsListIndex) return;
                        const n = c().Children.toArray(this.props.children)[this.tabsListIndex],
                            a = n.props.children.reduce(
                                (e, t, n) => ((e[n] = t.props), e),
                                Object.assign({}, this.tabsProps),
                            ),
                            r =
                                ((s = this.tabsProps),
                                (l = a),
                                !(
                                    Object.keys(s).length === Object.keys(l).length &&
                                    Object.keys(s).every(
                                        (e) => Object.prototype.hasOwnProperty.call(l, e) && s[e] === l[e],
                                    )
                                ));
                        var s, l;
                        const u = o()(
                                tt,
                                n.props.className,
                                this.props.isTabsCentered && nt,
                                this.props.isVerticalTabs && at,
                            ),
                            d = o()(Je, this.props.isTabsCentered && et);
                        if (t.activeKey !== this.state.activeKey || r) {
                            const e = this.elementsList.findIndex((e) => {
                                    if (e.props[st] === ot.CONTENT)
                                        return e.props[ot.TAB].includes(this.state.activeKey);
                                }),
                                t = this.elementsList.filter((t, n) => [this.tabsListIndex, e].includes(n)),
                                r = t[0].props.children,
                                s = r.map((e, t) =>
                                    c().cloneElement(
                                        e,
                                        Object.assign(
                                            {},
                                            a[t],
                                            { key: t, isActive: this.state.activeKey === e.props[ot.TAB] },
                                            this.props.isVerticalTabs
                                                ? {}
                                                : { isFirst: 0 === t, isLast: t === r.length - 1 },
                                            {
                                                onClick: (e) => {
                                                    const n = a[t][ot.TAB];
                                                    this.state.activeKey === n ||
                                                        (a[t].onClick && a[t].onClick(e),
                                                        this.handleSetActiveKey(n),
                                                        this.props.onClickSound && i(this.props.onClickSound));
                                                },
                                                onMouseEnter: (e) => {
                                                    a[t].onMouseEnter && a[t].onMouseEnter(e),
                                                        this.props.onMouseEnterSound && i(this.props.onMouseEnterSound);
                                                },
                                            },
                                        ),
                                    ),
                                );
                            (this.tabsProps = a),
                                this.setState({
                                    activeElements: [
                                        c().createElement(
                                            'div',
                                            { className: d, key: ot.LIST },
                                            c().createElement('div', rt({}, n.props, { className: u }), s),
                                        ),
                                        t[1],
                                    ],
                                });
                        }
                    }
                    render() {
                        const e = this.state.activeElements,
                            t = o()(Ze, this.props.isVerticalTabs && Qe);
                        return c().createElement('div', { className: t }, e);
                    }
                }
                it.defaultProps = { onClickSound: R.sounds.play(), onMouseEnterSound: R.sounds.highlight() };
                const lt = [
                    'children',
                    'className',
                    'activeKey',
                    'onClickSound',
                    'onMouseEnterSound',
                    'isTabsCentered',
                ];
                function ct() {
                    return (
                        (ct =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        ct.apply(this, arguments)
                    );
                }
                const ut = (e) => {
                        let t = e.children,
                            n = e.className,
                            a = e.activeKey,
                            r = e.onClickSound,
                            s = e.onMouseEnterSound,
                            o = e.isTabsCentered,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    s = Object.keys(e);
                                for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, lt);
                        return c().createElement(
                            'div',
                            ct({ className: n }, i),
                            c().createElement(
                                it,
                                { activeKey: a, onClickSound: r, onMouseEnterSound: s, isTabsCentered: o },
                                t,
                            ),
                        );
                    },
                    dt = ({ children: e, component: t, props: n = {} }) => (t ? c().createElement(t, n, e) : e || null),
                    mt = 'Tab_base_dd',
                    _t = 'Tab_base__first_4a',
                    gt = 'Tab_base__last_96',
                    pt = 'Tab_base__medium_ec',
                    vt = 'Tab_base__active_5d',
                    bt = 'Tab_divider_ca',
                    ft = 'Tab_divider__show_62',
                    ht = 'Tab_state_6c',
                    Et = 'Tab_stateHighlight_1e',
                    yt = 'Tab_stateBorder_64',
                    wt = 'Tab_stateBorder__positionLeft_e7',
                    kt = 'Tab_stateBorder__positionRight_db',
                    Ct = 'Tab_counter_e1',
                    Nt = ['isActive', 'isFirst', 'isLast', 'isMedium', 'isNotified', 'children', 'wrapper', 'counter'];
                function Tt() {
                    return (
                        (Tt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Tt.apply(this, arguments)
                    );
                }
                const St = (0, l.memo)((e) => {
                        let t = e.isActive,
                            n = void 0 !== t && t,
                            a = e.isFirst,
                            r = void 0 !== a && a,
                            s = e.isLast,
                            i = void 0 !== s && s,
                            l = e.isMedium,
                            u = void 0 !== l && l,
                            d = e.isNotified,
                            m = void 0 !== d && d,
                            _ = e.children,
                            g = void 0 === _ ? 'Tab' : _,
                            p = e.wrapper,
                            v = void 0 === p ? {} : p,
                            b = e.counter,
                            f = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    s = Object.keys(e);
                                for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, Nt);
                        return c().createElement(
                            dt,
                            v,
                            c().createElement(
                                'div',
                                Tt({ className: o()(mt, { [vt]: n }, { [_t]: r }, { [gt]: i }, { [pt]: u }) }, f),
                                c().createElement(
                                    'span',
                                    { className: ht },
                                    c().createElement('span', { className: Et }),
                                    c().createElement('span', { className: o()(yt, wt) }),
                                    c().createElement('span', { className: o()(yt, kt) }),
                                ),
                                g,
                                !i && !n && c().createElement('span', { className: o()(bt, ft) }),
                                (Boolean(b) || m) &&
                                    c().createElement(
                                        'div',
                                        { className: Ct },
                                        c().createElement(ce, { value: b, isEmpty: m }),
                                    ),
                            ),
                        );
                    }),
                    Ot = 'Header_base_eb',
                    Rt = 'Header_titleWrapper_ab',
                    It = 'Header_title_e8',
                    Dt = 'Header_infoButtonWrapper_e1',
                    Mt = 'Header_infoIcon_8c',
                    xt = Object.keys(L)
                        .filter((e) => !isNaN(Number(e)))
                        .map((e) => Number(e)),
                    Bt = {
                        [L.Engraving]: R.strings.dogtags.customization.tab.engraving(),
                        [L.Background]: R.strings.dogtags.customization.tab.background(),
                    },
                    Pt = systemLocale.toUpperCase(R.strings.dogtags.customization.mainTitle()),
                    Lt = R.strings.dogtags.customization.infoTooltip(),
                    At = {
                        width: 10 * Math.max(...xt.map((e) => Bt[e].length)) + 'rem',
                        padding: '0 5rem',
                        flex: '0 0 150rem',
                        justifyContent: 'center',
                    },
                    zt = (0, l.memo)(({ onTabClick: e, onInfoClick: t }) => {
                        const n = P('model'),
                            a = n.tab,
                            r = n.newBackgroundComponentCount,
                            s = n.newEngravingComponentCount;
                        return c().createElement(
                            'div',
                            { className: Ot },
                            c().createElement(
                                'div',
                                { className: Rt },
                                c().createElement('p', { className: It }, Pt),
                                c().createElement(
                                    'div',
                                    { className: Dt },
                                    c().createElement(
                                        Fe,
                                        { body: Lt },
                                        c().createElement(
                                            g,
                                            { type: 'ghost', onClick: t },
                                            c().createElement('div', { className: Mt }),
                                        ),
                                    ),
                                ),
                            ),
                            c().createElement(
                                ut,
                                { key: a, activeKey: String(a), onClickSound: R.sounds.dt_tab() },
                                c().createElement(
                                    'div',
                                    { 'tabs-role': ot.LIST },
                                    xt.map((t) => {
                                        const n = { [L.Engraving]: s, [L.Background]: r }[t] || 0;
                                        return c().createElement(
                                            St,
                                            {
                                                key: String(t),
                                                'tabs-role': ot.TAB,
                                                'tab-key': String(t),
                                                onClick: e,
                                                style: At,
                                                counter: n,
                                            },
                                            Bt[t],
                                        );
                                    }),
                                ),
                            ),
                        );
                    }),
                    $t = (e) => {
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
                    },
                    Ft = (e, t, n) => (n < e ? e : n > t ? t : n);
                var jt = n(67);
                const Wt = [];
                function Ht(e) {
                    const t = (0, l.useRef)(e);
                    return (
                        (0, l.useLayoutEffect)(() => {
                            t.current = e;
                        }),
                        (0, l.useCallback)((...e) => (0, t.current)(...e), Wt)
                    );
                }
                function Vt(e, t, n = []) {
                    const a = (0, l.useRef)(0),
                        r = (0, l.useCallback)(() => window.clearInterval(a.current), n || []);
                    (0, l.useEffect)(() => r, [r]);
                    const s = (null != n ? n : []).concat([t]);
                    return [
                        (0, l.useCallback)((n) => {
                            (a.current = window.setInterval(() => e(n, !0), t)), e(n, !1);
                        }, s),
                        r,
                    ];
                }
                function Gt(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return Ut(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                return Ut(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var a = 0;
                        return function () {
                            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function Ut(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                    return a;
                }
                function Kt(e, t, n) {
                    const a = (0, l.useMemo)(
                        () =>
                            (function (e, t, n, a) {
                                let r,
                                    s = !1,
                                    o = 0;
                                function i() {
                                    r && clearTimeout(r);
                                }
                                function l(...l) {
                                    const c = this,
                                        u = Date.now() - o;
                                    function d() {
                                        (o = Date.now()), n.apply(c, l);
                                    }
                                    s ||
                                        (a && !r && d(),
                                        i(),
                                        void 0 === a && u > e
                                            ? d()
                                            : !0 !== t &&
                                              (r = setTimeout(
                                                  a
                                                      ? function () {
                                                            r = void 0;
                                                        }
                                                      : d,
                                                  void 0 === a ? e - u : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof t && ((a = n), (n = t), (t = void 0)),
                                    (l.cancel = function () {
                                        i(), (s = !0);
                                    }),
                                    l
                                );
                            })(n, e),
                        t,
                    );
                    return (0, l.useEffect)(() => a.cancel, [a]), a;
                }
                var qt = n(30);
                let Yt;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(Yt || (Yt = {}));
                const Xt = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Zt = ({
                        getContainerSize: e,
                        getBounds: t,
                        setScrollPosition: n,
                        getDirection: a,
                        getWrapperSize: r,
                        triggerMouseMoveOnUpdate: s = !1,
                    }) => {
                        const o = (e, n) => {
                            const a = t(e),
                                r = a[0],
                                s = a[1];
                            return s <= r ? 0 : Ft(r, s, n);
                        };
                        return (i = {}) => {
                            const c = i.settings,
                                u = void 0 === c ? Xt : c,
                                d = (0, l.useRef)(null),
                                m = (0, l.useRef)(null),
                                _ = (() => {
                                    const e = (0, l.useMemo)(() => ({}), []),
                                        t = (t) => (e[t] || (e[t] = new Map()), e[t]),
                                        n = (e, n) => {
                                            t(e).set(n, n);
                                        },
                                        a = (e, n) => {
                                            t(e).delete(n);
                                        },
                                        r = (e, ...n) => {
                                            for (var a, r = Gt(t(e).values()); !(a = r()).done; ) (0, a.value)(...n);
                                        };
                                    return (0, l.useMemo)(() => ({ on: n, off: a, trigger: r }), []);
                                })(),
                                g = Kt(
                                    () => {
                                        jt.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                p = (0, qt.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const t = d.current;
                                        t && (n(t, e), _.trigger('change', e), s && g());
                                    },
                                    onRest: (e) => _.trigger('rest', e),
                                    onStart: (e) => _.trigger('start', e),
                                    onPause: (e) => _.trigger('pause', e),
                                })),
                                v = p[0],
                                b = p[1],
                                f = (0, l.useCallback)(
                                    (e, t, n) => {
                                        var a;
                                        const r = v.scrollPosition.get(),
                                            s = (null != (a = v.scrollPosition.goal) ? a : 0) - r;
                                        return o(e, t * n + s + r);
                                    },
                                    [v.scrollPosition],
                                ),
                                h = (0, l.useCallback)(
                                    (e, { immediate: t = !1, reset: n = !0 } = {}) => {
                                        const a = d.current;
                                        a &&
                                            b.start({
                                                scrollPosition: o(a, e),
                                                immediate: t,
                                                reset: n,
                                                config: u.animationConfig,
                                                from: { scrollPosition: o(a, v.scrollPosition.get()) },
                                            });
                                    },
                                    [b, u.animationConfig, v.scrollPosition],
                                ),
                                E = (0, l.useCallback)(
                                    (e) => {
                                        const t = d.current,
                                            n = m.current;
                                        if (!t || !n) return;
                                        const a = ((e, t) => {
                                                switch (t.type) {
                                                    case 'proportional':
                                                        return r(e) / t.factor;
                                                    case 'fixed':
                                                        return t.value;
                                                }
                                            })(n, u.step),
                                            s = f(t, e, a);
                                        h(s);
                                    },
                                    [h, f, u.step],
                                ),
                                y = (0, l.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && E(a(e)),
                                            d.current && _.trigger('mouseWheel', e, v.scrollPosition, t(d.current));
                                    },
                                    [v.scrollPosition, E, _],
                                ),
                                w = ((e, t = []) => {
                                    const n = (0, l.useRef)(),
                                        a = (0, l.useCallback)((...t) => {
                                            n.current && n.current(), (n.current = e(...t));
                                        }, t);
                                    return (
                                        (0, l.useEffect)(
                                            () => () => {
                                                n.current && n.current();
                                            },
                                            [a],
                                        ),
                                        a
                                    );
                                })(
                                    () =>
                                        $t(() => {
                                            const e = d.current;
                                            e &&
                                                (h(o(e, v.scrollPosition.goal), { immediate: !0 }),
                                                _.trigger('resizeHandled'));
                                        }),
                                    [h, v.scrollPosition.goal],
                                ),
                                k = Ht(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const t = o(e, v.scrollPosition.goal);
                                    t !== v.scrollPosition.goal && h(t, { immediate: !0 }),
                                        _.trigger('recalculateContent');
                                });
                            (0, l.useEffect)(
                                () => (
                                    window.addEventListener('resize', w),
                                    () => {
                                        window.removeEventListener('resize', w);
                                    }
                                ),
                                [w],
                            );
                            return (0, l.useMemo)(
                                () => ({
                                    getWrapperSize: () => (m.current ? r(m.current) : void 0),
                                    getContainerSize: () => (d.current ? e(d.current) : void 0),
                                    getBounds: () =>
                                        d.current
                                            ? t(d.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: u.step.clampedArrowStepTimeout,
                                    clampPosition: o,
                                    handleMouseWheel: y,
                                    applyScroll: h,
                                    applyStepTo: E,
                                    contentRef: d,
                                    wrapperRef: m,
                                    scrollPosition: b,
                                    animationScroll: v,
                                    recalculateContent: k,
                                    events: { on: _.on, off: _.off },
                                }),
                                [v.scrollPosition, h, E, _.off, _.on, k, y, b, u.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    Qt = Zt({
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
                        getDirection: (e) => (e.deltaY > 1 ? Yt.Next : Yt.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    Jt = 'HorizontalBar_base_49',
                    en = 'HorizontalBar_base__nonActive_82',
                    tn = 'HorizontalBar_leftButton_5f',
                    nn = 'HorizontalBar_rightButton_03',
                    an = 'HorizontalBar_track_0d',
                    rn = 'HorizontalBar_thumb_fd',
                    sn = 'HorizontalBar_rail_32',
                    on = 'disable',
                    ln = { pending: !1, offset: 0 },
                    cn = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    un = () => {},
                    dn = (e, t) => Math.max(20, e.offsetWidth * t),
                    mn = (0, l.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = cn, onDrag: a = un }) => {
                        const r = (0, l.useRef)(null),
                            s = (0, l.useRef)(null),
                            u = (0, l.useRef)(null),
                            d = (0, l.useRef)(null),
                            m = (0, l.useRef)(null),
                            _ = e.stepTimeout || 100,
                            g = (0, l.useState)(ln),
                            p = g[0],
                            v = g[1],
                            b = (0, l.useCallback)(
                                (e) => {
                                    v(e),
                                        m.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: m.current });
                                },
                                [a],
                            ),
                            f = () => {
                                const t = d.current,
                                    n = m.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && t && n && r)) return;
                                const o = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, a / r),
                                    l = Ft(0, 1, o / (r - a)),
                                    c = (t.offsetWidth - dn(t, i)) * l;
                                (n.style.transform = `translateX(${0 | c}px)`),
                                    ((e) => {
                                        if (s.current && u.current && d.current && m.current) {
                                            if (0 === e)
                                                return s.current.classList.add(on), void u.current.classList.remove(on);
                                            if (
                                                ((t = d.current),
                                                (n = m.current),
                                                e - (t.offsetWidth - n.offsetWidth) >= -0.5)
                                            )
                                                return s.current.classList.remove(on), void u.current.classList.add(on);
                                            var t, n;
                                            s.current.classList.remove(on), u.current.classList.remove(on);
                                        }
                                    })(c);
                            },
                            h = Ht(() => {
                                (() => {
                                    const t = m.current,
                                        n = d.current,
                                        a = e.getWrapperSize(),
                                        s = e.getContainerSize();
                                    if (!(s && t && a && n)) return;
                                    const o = Math.min(1, a / s);
                                    (t.style.width = `${dn(n, o)}px`),
                                        (t.style.display = 'flex'),
                                        r.current &&
                                            (1 === o ? r.current.classList.add(en) : r.current.classList.remove(en));
                                })(),
                                    f();
                            });
                        (0, l.useEffect)(() => $t(h)),
                            (0, l.useEffect)(
                                () =>
                                    $t(() => {
                                        const t = () => {
                                            f();
                                        };
                                        let n = un;
                                        const a = () => {
                                            n(), (n = $t(h));
                                        };
                                        return (
                                            e.events.on('recalculateContent', h),
                                            e.events.on('rest', t),
                                            e.events.on('change', t),
                                            e.events.on('resizeHandled', a),
                                            () => {
                                                n(),
                                                    e.events.off('recalculateContent', h),
                                                    e.events.off('rest', t),
                                                    e.events.off('change', t),
                                                    e.events.off('resizeHandled', a);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, l.useEffect)(() => {
                                if (!p.pending) return;
                                const t = jt.O.client.events.mouse.move(([t, n]) => {
                                        var r;
                                        const s = e.contentRef.current,
                                            o = e.wrapperRef.current;
                                        if (!s || !o) return;
                                        const i = d.current,
                                            l = m.current;
                                        if (!i || !l) return;
                                        if ('inside' === n && t.clientX < 0) return;
                                        const c = t.clientX - p.offset - i.getBoundingClientRect().x,
                                            u = (c / i.offsetWidth) * (null != (r = e.getContainerSize()) ? r : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(s, u),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            a({ type: 'dragging', thumb: l, thumbOffset: c, contentOffset: u });
                                    }),
                                    n = jt.O.client.events.mouse.up(() => {
                                        t(), b(ln);
                                    });
                                return () => {
                                    t(), n();
                                };
                            }, [e, p.offset, p.pending, a, b]);
                        const E = Vt((t) => e.applyStepTo(t), _, [e]),
                            y = E[0],
                            w = E[1];
                        (0, l.useEffect)(
                            () => (
                                document.addEventListener('mouseup', w, !0),
                                () => document.removeEventListener('mouseup', w, !0)
                            ),
                            [w],
                        );
                        const k = (e) => {
                            e.target.classList.contains(on) || i('highlight');
                        };
                        return c().createElement(
                            'div',
                            { className: o()(Jt, t.base), ref: r, onWheel: e.handleMouseWheel },
                            c().createElement('div', {
                                className: o()(tn, t.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(on) || 0 !== e.button || (i('play'), y(Yt.Next));
                                },
                                onMouseUp: w,
                                ref: s,
                                onMouseEnter: k,
                            }),
                            c().createElement(
                                'div',
                                {
                                    className: o()(an, t.track),
                                    onMouseDown: (t) => {
                                        const a = m.current;
                                        if (a && 0 === t.button)
                                            if ((i('play'), t.target === a))
                                                b({ pending: !0, offset: t.screenX - a.getBoundingClientRect().x });
                                            else {
                                                ((t) => {
                                                    const a = m.current,
                                                        r = e.contentRef.current;
                                                    if (!a || !r) return;
                                                    const s = n(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + s * t);
                                                })(t.screenX > a.getBoundingClientRect().x ? Yt.Prev : Yt.Next);
                                            }
                                    },
                                    ref: d,
                                    onMouseEnter: k,
                                },
                                c().createElement('div', { ref: m, className: o()(rn, t.thumb) }),
                                c().createElement('div', { className: o()(sn, t.rail) }),
                            ),
                            c().createElement('div', {
                                className: o()(nn, t.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(on) || 0 !== e.button || (i('play'), y(Yt.Prev));
                                },
                                onMouseUp: w,
                                ref: u,
                                onMouseEnter: k,
                            }),
                        );
                    }),
                    _n = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    gn = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: a,
                        areaClassName: r,
                        classNames: s,
                        scrollClassName: i,
                        getStepByRailClick: u,
                        onDrag: d,
                    }) => {
                        const m = (0, l.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: o()(_n.base, e.base) });
                            }, [a]),
                            _ = (0, l.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return c().createElement(
                            'div',
                            { className: o()(_n.defaultScroll, n), onWheel: t.handleMouseWheel },
                            c().createElement(
                                'div',
                                { className: o()(_n.defaultScrollArea, r) },
                                c().createElement(pn, { className: i, api: _, classNames: s }, e),
                            ),
                            c().createElement(mn, { getStepByRailClick: u, api: t, onDrag: d, classNames: m }),
                        );
                    },
                    pn = ({ api: e, className: t, classNames: n, children: a }) => (
                        (0, l.useEffect)(() => $t(e.recalculateContent)),
                        c().createElement(
                            'div',
                            { className: o()(_n.base, t) },
                            c().createElement(
                                'div',
                                {
                                    className: o()(_n.wrapper, null == n ? void 0 : n.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                c().createElement(
                                    'div',
                                    { className: o()(_n.content, null == n ? void 0 : n.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    );
                (pn.Bar = mn), (pn.Default = gn);
                const vn = Zt({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, t) => {
                            e.scrollTop = t.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Yt.Next : Yt.Prev),
                    }),
                    bn = 'VerticalBar_base_f3',
                    fn = 'VerticalBar_base__nonActive_42',
                    hn = 'VerticalBar_topButton_d7',
                    En = 'VerticalBar_bottomButton_06',
                    yn = 'VerticalBar_track_df',
                    wn = 'VerticalBar_thumb_32',
                    kn = 'VerticalBar_rail_43',
                    Cn = 'disable',
                    Nn = () => {},
                    Tn = { pending: !1, offset: 0 },
                    Sn = (e) => {
                        var t;
                        return 0.9 * (null != (t = e.getWrapperSize()) ? t : 0);
                    },
                    On = (e, t) => {
                        e.contentRef.current && t(e.contentRef.current);
                    },
                    Rn = (e, t) => Math.max(20, e.offsetHeight * t),
                    In = (0, l.memo)(({ api: e, classNames: t = {}, getStepByRailClick: n = Sn, onDrag: a = Nn }) => {
                        const r = (0, l.useRef)(null),
                            s = (0, l.useRef)(null),
                            u = (0, l.useRef)(null),
                            d = (0, l.useRef)(null),
                            m = (0, l.useRef)(null),
                            _ = e.stepTimeout || 100,
                            g = (0, l.useState)(Tn),
                            p = g[0],
                            v = g[1],
                            b = (0, l.useCallback)(
                                (e) => {
                                    v(e),
                                        m.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: m.current });
                                },
                                [a],
                            ),
                            f = Ht(() => {
                                const t = m.current,
                                    n = d.current,
                                    a = e.getWrapperSize(),
                                    s = e.getContainerSize();
                                if (!(a && s && t && n)) return;
                                const o = Math.min(1, a / s);
                                return (
                                    (t.style.height = `${Rn(n, o)}px`),
                                    (t.style.display = 'flex'),
                                    r.current &&
                                        (1 === o ? r.current.classList.add(fn) : r.current.classList.remove(fn)),
                                    o
                                );
                            }),
                            h = Ht(() => {
                                const t = d.current,
                                    n = m.current,
                                    a = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(a && t && n && r)) return;
                                const o = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, a / r),
                                    l = Ft(0, 1, o / (r - a)),
                                    c = (t.offsetHeight - Rn(t, i)) * l;
                                (n.style.transform = `translateY(${0 | c}px)`),
                                    ((e) => {
                                        if (s.current && u.current && d.current && m.current) {
                                            if (0 === Math.round(e))
                                                return s.current.classList.add(Cn), void u.current.classList.remove(Cn);
                                            if (
                                                ((t = d.current),
                                                (n = m.current),
                                                e - (t.offsetHeight - n.offsetHeight) >= -0.5)
                                            )
                                                return s.current.classList.remove(Cn), void u.current.classList.add(Cn);
                                            var t, n;
                                            s.current.classList.remove(Cn), u.current.classList.remove(Cn);
                                        }
                                    })(c);
                            }),
                            E = Ht(() => {
                                On(e, () => {
                                    f(), h();
                                });
                            });
                        (0, l.useEffect)(() => $t(E)),
                            (0, l.useEffect)(() => {
                                const t = () => {
                                    On(e, () => {
                                        h();
                                    });
                                };
                                let n = Nn;
                                const a = () => {
                                    n(), (n = $t(E));
                                };
                                return (
                                    e.events.on('recalculateContent', E),
                                    e.events.on('rest', t),
                                    e.events.on('change', t),
                                    e.events.on('resizeHandled', a),
                                    () => {
                                        n(),
                                            e.events.off('recalculateContent', E),
                                            e.events.off('rest', t),
                                            e.events.off('change', t),
                                            e.events.off('resizeHandled', a);
                                    }
                                );
                            }, [e]),
                            (0, l.useEffect)(() => {
                                if (!p.pending) return;
                                const t = jt.O.client.events.mouse.up(() => {
                                        b(Tn);
                                    }),
                                    n = jt.O.client.events.mouse.move(([t]) => {
                                        On(e, (n) => {
                                            const r = d.current,
                                                s = m.current,
                                                o = e.getContainerSize();
                                            if (!r || !s || !o) return;
                                            const i = t.screenY - p.offset - r.getBoundingClientRect().y,
                                                l = (i / r.offsetHeight) * o;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(n, l),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: n.scrollTop },
                                            }),
                                                a({ type: 'dragging', thumb: s, thumbOffset: i, contentOffset: l });
                                        });
                                    });
                                return () => {
                                    t(), n();
                                };
                            }, [e, p.offset, p.pending, a, b]);
                        const y = Vt((t) => e.applyStepTo(t), _, [e]),
                            w = y[0],
                            k = y[1];
                        (0, l.useEffect)(
                            () => (
                                document.addEventListener('mouseup', k, !0),
                                () => document.removeEventListener('mouseup', k, !0)
                            ),
                            [k],
                        );
                        const C = (e) => {
                            e.target.classList.contains(Cn) || i('highlight');
                        };
                        return c().createElement(
                            'div',
                            { className: o()(bn, t.base), ref: r, onWheel: e.handleMouseWheel },
                            c().createElement('div', {
                                className: o()(hn, t.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Cn) || 0 !== e.button || (i('play'), w(Yt.Next));
                                },
                                ref: s,
                                onMouseEnter: C,
                            }),
                            c().createElement(
                                'div',
                                {
                                    className: o()(yn, t.track),
                                    onMouseDown: (t) => {
                                        const a = m.current;
                                        if (a && 0 === t.button)
                                            if ((i('play'), t.target === a))
                                                b({ pending: !0, offset: t.screenY - a.getBoundingClientRect().y });
                                            else {
                                                ((t) => {
                                                    m.current &&
                                                        On(e, (a) => {
                                                            if (!a) return;
                                                            const r = n(e),
                                                                s = e.clampPosition(a, a.scrollTop + r * t);
                                                            e.applyScroll(s);
                                                        });
                                                })(t.screenY > a.getBoundingClientRect().y ? Yt.Prev : Yt.Next);
                                            }
                                    },
                                    ref: d,
                                    onMouseEnter: C,
                                },
                                c().createElement('div', { ref: m, className: o()(wn, t.thumb) }),
                                c().createElement('div', { className: o()(kn, t.rail) }),
                            ),
                            c().createElement('div', {
                                className: o()(En, t.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(Cn) || 0 !== e.button || (i('play'), w(Yt.Prev));
                                },
                                onMouseUp: k,
                                ref: u,
                                onMouseEnter: C,
                            }),
                        );
                    }),
                    Dn = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Mn = ({
                        children: e,
                        api: t,
                        className: n,
                        barClassNames: a,
                        areaClassName: r,
                        scrollClassName: s,
                        scrollClassNames: i,
                        getStepByRailClick: u,
                        onDrag: d,
                    }) => {
                        const m = (0, l.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: o()(Dn.base, e.base) });
                            }, [a]),
                            _ = (0, l.useMemo)(() => Object.assign({}, t, { handleMouseWheel: () => {} }), [t]);
                        return c().createElement(
                            'div',
                            { className: o()(Dn.defaultScroll, n), onWheel: t.handleMouseWheel },
                            c().createElement(
                                'div',
                                { className: o()(Dn.area, r) },
                                c().createElement(xn, { className: s, classNames: i, api: _ }, e),
                            ),
                            c().createElement(In, { getStepByRailClick: u, api: t, onDrag: d, classNames: m }),
                        );
                    },
                    xn = ({ className: e, classNames: t, children: n, api: a }) => (
                        (0, l.useEffect)(() => $t(a.recalculateContent)),
                        c().createElement(
                            'div',
                            { className: o()(Dn.base, e), ref: a.wrapperRef, onWheel: a.handleMouseWheel },
                            c().createElement(
                                'div',
                                { className: o()(Dn.content, null == t ? void 0 : t.content), ref: a.contentRef },
                                n,
                            ),
                        )
                    );
                xn.Default = Mn;
                const Bn = { Vertical: r, Horizontal: a },
                    Pn = (e, t) => {
                        const n = t.split('.'),
                            a = n[0];
                        if (!e || 'object' != typeof e)
                            return console.warn(`Reference "${JSON.stringify(e, null, 2)}" is not a valid object.`), !1;
                        if (!a) return console.warn(`Invalid key "${a}" in path ${t}.`), !1;
                        if (!(a in e))
                            return (
                                console.warn(`Key "${a}" was not found in reference "${JSON.stringify(e, null, 2)}".`),
                                !1
                            );
                        const r = n.slice(1);
                        return 0 === r.length || Pn(e[a], r.join('.'));
                    },
                    Ln = [
                        'model.equippedDogTag',
                        'model.equippedDogTag.background',
                        'model.equippedDogTag.engraving',
                        'model.engravingGrid',
                        'model.backgroundGrid',
                    ];
                Ln.forEach((e) => Pn(window, e));
                const An = () => (
                        P(Ln[0]),
                        P(Ln[1]),
                        P(Ln[2]),
                        P(Ln[3]),
                        P(Ln[4]),
                        ((e, t = !0) => {
                            if (!Pn(window, e)) throw Error(`Path "${e}" does not exist.`);
                            const n = P(e, t ? B.Deep : B.None);
                            return 'object' == typeof n && null !== n
                                ? (0, S.lw)(n)
                                : (t &&
                                      console.warn(
                                          `Tracking of primitive value ${String(n)} in ${e} is not supported.`,
                                      ),
                                  n);
                        })('model')
                    ),
                    zn = 'Router_base_17',
                    $n = 'Router_innerWrapper_d8',
                    Fn = 'Router_gridWrapper_c2',
                    jn = 'Router_infoWrapper_95',
                    Wn = 'Router_dogtagsWrapper_02',
                    Hn = 'Router_dogtagsInfoWrapper_b7',
                    Vn = 'Router_scrollContainer_f2',
                    Gn = 'Router_scrollBar_c1',
                    Un = 'Router_scrollAreaContainer_3e',
                    Kn = 'Router_customizationWrapper_05',
                    qn = 'Router_scrollAreaWrapper_93',
                    Yn = 'Router_scrollAreaWrapper_bottomMask_63',
                    Xn = 'Router_gridTitle_a2',
                    Zn = 'Router_subNavigation_b2',
                    Qn = 'Router_topDivider_23',
                    Jn = 'Router_gridBottomSeparator_13',
                    ea = { dedication: !0, season: !0, triumph: !0 },
                    ta = {
                        [L.Engraving]: R.strings.dogtags.customization.tab.engraving(),
                        [L.Background]: R.strings.dogtags.customization.tab.background(),
                    },
                    na = () => {
                        const e = An(),
                            t = vn(),
                            n = vn(),
                            a = e.onEquip,
                            r = e.onNewComponentHover,
                            s = e.tab,
                            i = e.equippedDogTag,
                            u = i.playerName,
                            d = i.clanTag,
                            m = i.engraving.id,
                            _ = i.background.id,
                            g = e.engravingGrid,
                            p = e.backgroundGrid,
                            v = e.newEngravingSkillCount,
                            b = e.newEngravingDedicationCount,
                            f = e.newEngravingTriumphCount,
                            h = (0, l.useState)({ background: _, engraving: m }),
                            E = h[0],
                            y = h[1],
                            w = {
                                background: ae(p, E.background) || p[0].value.items[0].value,
                                engraving: ae(g, E.engraving) || g[0].value.items[0].value,
                            },
                            k = {
                                engraving: ae(g, m) || g[0].value.items[0].value,
                                background: ae(p, _) || p[0].value.items[0].value,
                            },
                            C = (0, l.useState)(ea),
                            N = C[0],
                            T = C[1],
                            S = (0, l.useState)(!1),
                            O = S[0],
                            R = S[1],
                            I = (0, l.useState)(!0),
                            D = I[0],
                            M = I[1],
                            x = ((e, t) => e[ne[t]])(w, s),
                            B = ta[s],
                            P = ((e, t) => e[te[t]])({ backgroundGrid: p, engravingGrid: g }, s),
                            A = s === L.Engraving ? ee(P, N) : P,
                            z = J(
                                A.map((e) => ({
                                    value: Object.assign({}, e.value, {
                                        items: e.value.items.filter((e) => !e.value.isLocked),
                                    }),
                                })),
                            );
                        const H = re(z),
                            V =
                                s === L.Engraving
                                    ? ((e) =>
                                          [F.Dedication, F.Season, F.Triumph].filter((t) => {
                                              for (let n = 0; n < e.length; n++) {
                                                  const a = e[n].value.items[0];
                                                  if (a && j[t].includes(a.value.purpose)) return !0;
                                              }
                                              return !1;
                                          }))(P)
                                    : [],
                            G = (0, l.useMemo)(() => ({ gridData: O ? z : A, totalItems: re(A) }), [z, A, O]),
                            U = G.gridData,
                            K = G.totalItems,
                            q = (0, l.useCallback)(
                                (e, t) => {
                                    const n = { engraving: m, background: _ };
                                    (n[e] = t), a(n);
                                },
                                [a, m, _],
                            ),
                            Y = (0, l.useCallback)(
                                (e) => {
                                    y((t) => Object.assign({}, t, { [e.type]: e.id })), e.isLocked || q(e.type, e.id);
                                },
                                [q],
                            ),
                            X = (0, l.useCallback)(
                                (e) => {
                                    y((t) => Object.assign({}, t, { [e]: k[e].id }));
                                },
                                [k],
                            ),
                            Z = Ht(() => {
                                const e = t.getBounds()[1],
                                    n = t.animationScroll.scrollPosition.get();
                                M(n < e);
                            });
                        (0, l.useEffect)(
                            () => (
                                t.events.on('change', Z),
                                t.events.on('recalculateContent', Z),
                                () => {
                                    t.events.off('change', Z), t.events.off('recalculateContent', Z);
                                }
                            ),
                            [t.events, Z],
                        ),
                            (0, l.useEffect)(() => {
                                const e = () => {
                                    n.applyScroll(0);
                                };
                                return (
                                    n.events.on('recalculateContent', e),
                                    () => {
                                        n.events.off('recalculateContent', e);
                                    }
                                );
                            }, []);
                        const Q = (0, l.useCallback)(() => {
                                T({ dedication: !0, season: !0, triumph: !0 }), R(!1);
                            }, []),
                            se = ((e) => {
                                const t = e.background,
                                    n = e.engraving,
                                    a = t.currentGrade + 1,
                                    r = n.currentGrade + 1;
                                return (n.purpose === $.Triumph && 4 === r) || r === W || a === W;
                            })(w);
                        return c().createElement(
                            'div',
                            { className: zn },
                            c().createElement(
                                'div',
                                { className: $n },
                                c().createElement(
                                    'div',
                                    { className: Fn },
                                    c().createElement(
                                        'div',
                                        { className: Zn },
                                        c().createElement('div', { className: Xn }, systemLocale.toUpperCase(B)),
                                        c().createElement(Rs, {
                                            newEngravingSkillCount: v,
                                            newEngravingDedicationCount: b,
                                            newEngravingTriumphCount: f,
                                            availablePurposeGroups: V,
                                            setPurposeGroupFilters: T,
                                            purposeGroupFilters: N,
                                            showOnlyAvailableItems: O,
                                            setShowOnlyAvailableItems: R,
                                            availableItemsCount: H,
                                        }),
                                        c().createElement('div', { className: Qn }),
                                    ),
                                    U.length > 0
                                        ? c().createElement(
                                              'div',
                                              { className: o()(qn, D && Yn) },
                                              c().createElement(
                                                  Bn.Vertical.Area.Default,
                                                  { api: t },
                                                  c().createElement(Xe, {
                                                      data: U,
                                                      count: K,
                                                      onItemSelect: Y,
                                                      onNewComponentHover: r,
                                                      selectedItems: w,
                                                      equippedItems: k,
                                                  }),
                                              ),
                                          )
                                        : c().createElement(xs, { clearFilters: Q }),
                                    c().createElement('div', { className: Jn }),
                                ),
                                c().createElement(
                                    'div',
                                    { className: jn },
                                    c().createElement(
                                        'div',
                                        { className: Wn },
                                        c().createElement(as, {
                                            playerName: u,
                                            clanTag: d,
                                            background: w.background,
                                            engraving: w.engraving,
                                            isHighlighted: se,
                                        }),
                                    ),
                                    c().createElement(
                                        'div',
                                        { className: Hn },
                                        c().createElement(
                                            Bn.Vertical.Area.Default,
                                            { api: n, className: Vn, barClassNames: { base: Gn }, areaClassName: Un },
                                            c().createElement(Cr, { currentItem: x }),
                                        ),
                                    ),
                                    c().createElement(
                                        'div',
                                        { className: Kn },
                                        c().createElement(Ks, { selectedItems: w, equippedItems: k, onItemReset: X }),
                                    ),
                                ),
                            ),
                        );
                    },
                    aa = 'DogtagsInfo_base_68',
                    ra = 'DogtagsInfo_title_02',
                    sa = 'DogtagsInfo_progressBarWrapper_48',
                    oa = 'DogtagsInfo_currentLevel_14',
                    ia = 'DogtagsInfo_nextLevel_53',
                    la = 'DogtagsInfo_valuesWrapper_ac',
                    ca = 'DogtagsInfo_valuesWrapper_inner_55',
                    ua = 'DogtagsInfo_valuesWrapper__locked_59',
                    da = 'DogtagsInfo_currentValue_25',
                    ma = 'DogtagsInfo_totalValue_47',
                    _a = 'DogtagsInfo_valuesSeparator_db',
                    ga = 'DogtagsInfo_medalInfo_0d',
                    pa = 'DogtagsInfo_skillInfo_13',
                    va = 'DogtagsInfo_skillInfoIcon_f9',
                    ba = 'DogtagsInfo_shieldLevelWrapper_fa',
                    fa = 'DogtagsInfo_single_86',
                    ha = 'DogtagsInfo_currentShieldWrapper_b0',
                    Ea = 'DogtagsInfo_nextShieldWrapper_7e',
                    ya = 'DogtagsInfo_currentLevelShield_60',
                    wa = 'DogtagsInfo_currentLevelValue_d5',
                    ka = 'DogtagsInfo_nextLevelValue_d5',
                    Ca = 'DogtagsInfo_arrowLock_6a',
                    Na = 'DogtagsInfo_nextLevelShield_22',
                    Ta = 'DogtagsInfo_infoSeparator_d7',
                    Sa = 'DogtagsInfo_lockedText_9d',
                    Oa = 'DogtagsInfo_lockedIcon_04',
                    Ra = 'DogtagsInfo_skillDescriptionWrapper_dc',
                    Ia = 'DogtagsInfo_skillDescription_94',
                    Da = 'DogtagsInfo_skillInfoBorderTop_62',
                    Ma = 'DogtagsInfo_skillInfoBorderBottom_50',
                    xa = (0, l.memo)(({ infoTitle: e, infoText: t, isLocked: n, unlockText: a }) =>
                        c().createElement(
                            'div',
                            { className: aa },
                            c().createElement('div', { className: ra }, e),
                            c().createElement('div', { className: ga }, t),
                            n &&
                                c().createElement(
                                    c().Fragment,
                                    null,
                                    c().createElement('div', { className: Ta }),
                                    c().createElement(
                                        'div',
                                        { className: Sa },
                                        c().createElement('div', { className: Oa }),
                                        a,
                                    ),
                                ),
                        ),
                    ),
                    Ba = {
                        base: 'ProgressBar_base_45',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let Pa, La;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium');
                })(Pa || (Pa = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(La || (La = {}));
                const Aa = ({ size: e = Pa.Default }) => {
                        const t = o()(Ba.background, Ba[`background__${e}`]);
                        return c().createElement('div', { className: t });
                    },
                    za = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    $a = ({ size: e }) => {
                        const t = o()(za.base, za[`base__${e}`]);
                        return c().createElement('div', { className: t });
                    },
                    Fa = {
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
                    ja = (0, l.memo)(
                        ({ size: e, lineRef: t, disabled: n, baseStyles: a, isComplete: r, withoutBounce: s }) => {
                            const i = o()(
                                    Fa.base,
                                    Fa[`base__${e}`],
                                    n && Fa.base__disabled,
                                    r && Fa.base__finished,
                                    s && Fa.base__withoutBounce,
                                ),
                                l = !n && !r;
                            return c().createElement(
                                'div',
                                { className: i, style: a, ref: t },
                                c().createElement('div', { className: Fa.pattern }),
                                c().createElement('div', { className: Fa.gradient }),
                                l && c().createElement($a, { size: e }),
                            );
                        },
                    ),
                    Wa = ({ size: e, value: t, lineRef: n, disabled: a, onComplete: r }) => {
                        const s = (0, l.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            o = 100 === t;
                        return (
                            (0, l.useEffect)(() => {
                                o && r && r();
                            }, [o, r]),
                            c().createElement(ja, { size: e, disabled: a, baseStyles: s, isComplete: o, lineRef: n })
                        );
                    };
                let Ha, Va;
                !(function (e) {
                    (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                })(Ha || (Ha = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(Va || (Va = {}));
                const Ga = 'ProgressBarDeltaSimple_base_6c',
                    Ua = 'ProgressBarDeltaSimple_delta_99',
                    Ka = (0, l.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: n,
                            from: a,
                            size: r,
                            to: s,
                            onEndAnimation: o,
                            onChangeAnimationState: i,
                        }) => {
                            const u = s < a,
                                d = (0, l.useState)(Va.Idle),
                                m = d[0],
                                _ = d[1],
                                g = m === Va.In,
                                p = m === Va.End,
                                v = m === Va.Idle,
                                b = (0, l.useCallback)(
                                    (e) => {
                                        _(e), i && i(e);
                                    },
                                    [i],
                                );
                            (0, l.useEffect)(() => {
                                if (v && !n) {
                                    return k(() => {
                                        b(Va.In);
                                    }, t);
                                }
                            }, [b, n, v, t]),
                                (0, l.useEffect)(() => {
                                    if (g) {
                                        return k(() => {
                                            o && o(), b(Va.End);
                                        }, e + t);
                                    }
                                }, [b, g, o, t, e]);
                            const f = (0, l.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [u ? 'left' : 'right']: '0',
                                    }),
                                    [u, t, e],
                                ),
                                h = (0, l.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [u ? 'left' : 'right']: '0',
                                    }),
                                    [u, t, e],
                                ),
                                E = (0, l.useMemo)(
                                    () => ({ width: `${Math.abs(a - s)}%`, left: `${u ? s : a}%` }),
                                    [a, u, s],
                                );
                            return p
                                ? null
                                : c().createElement(
                                      'div',
                                      { className: Ga, style: E },
                                      c().createElement(
                                          'div',
                                          { style: v ? f : h, className: Ua },
                                          c().createElement($a, { size: r }),
                                      ),
                                  );
                        },
                    ),
                    qa = (0, l.memo)(
                        ({
                            to: e,
                            size: t,
                            from: n,
                            lineRef: a,
                            disabled: r,
                            isComplete: s,
                            animationSettings: o,
                            onChangeAnimationState: i,
                            onEndAnimation: u,
                        }) => {
                            const d = (0, l.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${o.line.duration}ms`,
                                    transitionDelay: `${o.line.delay}ms`,
                                }),
                                [o.line.delay, o.line.duration, e],
                            );
                            return c().createElement(
                                c().Fragment,
                                null,
                                c().createElement(ja, {
                                    size: t,
                                    lineRef: a,
                                    disabled: r,
                                    isComplete: s,
                                    baseStyles: d,
                                }),
                                n >= 0 &&
                                    c().createElement(Ka, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        freezed: o.freezed,
                                        from: n,
                                        size: t,
                                        to: e,
                                        onChangeAnimationState: i,
                                        onEndAnimation: u,
                                    }),
                            );
                        },
                    ),
                    Ya = 'ProgressBarDeltaGrow_base_7e',
                    Xa = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    Za = 'ProgressBarDeltaGrow_glow_68',
                    Qa = (e) => (e ? { left: 0 } : { right: 0 }),
                    Ja = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    er = (e) => ({ transitionDuration: `${e}ms` }),
                    tr = (0, l.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: n,
                            from: a,
                            size: r,
                            to: s,
                            onEndAnimation: i,
                            onChangeAnimationState: u,
                            className: d,
                        }) => {
                            const m = s < a,
                                _ = (0, l.useState)(Ha.Idle),
                                g = _[0],
                                p = _[1],
                                v = g === Ha.End,
                                b = g === Ha.Idle,
                                f = g === Ha.Grow,
                                h = g === Ha.Shrink,
                                E = (0, l.useCallback)(
                                    (e) => {
                                        p(e), u && u(e);
                                    },
                                    [u],
                                ),
                                y = (0, l.useCallback)(
                                    (e, t) =>
                                        k(() => {
                                            E(e);
                                        }, t),
                                    [E],
                                );
                            (0, l.useEffect)(() => {
                                if (!n)
                                    return b
                                        ? y(Ha.Grow, t)
                                        : f
                                          ? y(Ha.Shrink, e)
                                          : h
                                            ? y(Ha.End, e)
                                            : void (v && i && i());
                            }, [y, n, v, f, b, h, i, t, e]);
                            const w = (0, l.useMemo)(() => Object.assign({ width: '100%' }, er(e), Qa(m)), [m, e]),
                                C = (0, l.useMemo)(() => Object.assign({ width: '0%' }, er(e), Qa(m)), [m, e]),
                                N = (0, l.useMemo)(() => Object.assign({ width: '0%' }, Ja(m, a), er(e)), [a, m, e]),
                                T = (0, l.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(s - a)}%` }, Ja(m, a), er(e)),
                                    [a, m, s, e],
                                );
                            if (v) return null;
                            const S = o()(Ya, d, m && 0 === s && Xa);
                            return c().createElement(
                                'div',
                                { style: b ? N : T, className: S },
                                c().createElement(
                                    'div',
                                    { style: h ? C : w, className: Za },
                                    c().createElement($a, { size: r }),
                                ),
                            );
                        },
                    ),
                    nr = (0, l.memo)(
                        ({
                            to: e,
                            size: t,
                            from: n,
                            lineRef: a,
                            disabled: r,
                            isComplete: s,
                            animationSettings: o,
                            onEndAnimation: i,
                            onChangeAnimationState: u,
                        }) => {
                            const d = e < n,
                                m = (0, l.useState)(!1),
                                _ = m[0],
                                g = m[1],
                                p = (0, l.useCallback)(
                                    (e) => {
                                        e === Ha.Shrink && g(!0), u && u(e);
                                    },
                                    [u],
                                ),
                                v = (0, l.useMemo)(() => ({ width: `${n}%`, transitionProperty: 'none' }), [n]),
                                b = (0, l.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${o.line.duration}ms` }),
                                    [o.line.duration, e],
                                );
                            return c().createElement(
                                c().Fragment,
                                null,
                                c().createElement(ja, {
                                    size: t,
                                    lineRef: a,
                                    disabled: r,
                                    isComplete: s,
                                    withoutBounce: d && 0 === e,
                                    baseStyles: _ ? b : v,
                                }),
                                n >= 0 &&
                                    c().createElement(tr, {
                                        transitionDuration: o.delta.duration,
                                        transitionDelay: o.delta.delay,
                                        onChangeAnimationState: p,
                                        freezed: o.freezed,
                                        onEndAnimation: i,
                                        from: n,
                                        size: t,
                                        to: e,
                                        className: o.delta.className,
                                    }),
                            );
                        },
                    ),
                    ar = ['onComplete', 'onEndAnimation'];
                function rr() {
                    return (
                        (rr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        rr.apply(this, arguments)
                    );
                }
                const sr = (0, l.memo)((e) => {
                        let t = e.onComplete,
                            n = e.onEndAnimation,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    s = Object.keys(e);
                                for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, ar);
                        const r = (0, l.useState)(!1),
                            s = r[0],
                            o = r[1],
                            i = (0, l.useCallback)(() => {
                                const e = 100 === a.to;
                                e !== s && o(e), e && t && t(), n && n();
                            }, [s, t, n, a.to]);
                        switch (a.animationSettings.type) {
                            case La.Simple:
                                return c().createElement(qa, rr({}, a, { onEndAnimation: i, isComplete: s }));
                            case La.Growing:
                                return c().createElement(nr, rr({}, a, { onEndAnimation: i, isComplete: s }));
                            default:
                                return null;
                        }
                    }),
                    or = ['onEndAnimation'];
                function ir() {
                    return (
                        (ir =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        ir.apply(this, arguments)
                    );
                }
                const lr = (0, l.memo)((e) => {
                    let t = e.onEndAnimation,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                s = Object.keys(e);
                            for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, or);
                    const a = (0, l.useRef)({}),
                        r = (0, l.useCallback)(() => {
                            (a.current.from = void 0), t && t();
                        }, [t]),
                        s = 'number' == typeof a.current.from ? a.current.from : n.from;
                    return (
                        (a.current.from = s),
                        c().createElement(sr, ir({}, n, { onEndAnimation: r, key: `${s}-${n.to}`, from: s }))
                    );
                });
                function cr() {
                    return (
                        (cr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        cr.apply(this, arguments)
                    );
                }
                const ur = (0, l.memo)(
                        ({
                            size: e,
                            value: t,
                            lineRef: n,
                            disabled: a,
                            deltaFrom: r,
                            animationSettings: s,
                            onEndAnimation: o,
                            onChangeAnimationState: i,
                            onComplete: l,
                        }) => {
                            if (r === t)
                                return c().createElement(Wa, {
                                    key: `${r}-${t}`,
                                    size: e,
                                    value: t,
                                    lineRef: n,
                                    disabled: a,
                                    onComplete: l,
                                });
                            const u = {
                                from: r,
                                to: t,
                                size: e,
                                lineRef: n,
                                disabled: a,
                                animationSettings: s,
                                onComplete: l,
                                onEndAnimation: o,
                                onChangeAnimationState: i,
                            };
                            return s.withStack
                                ? c().createElement(lr, u)
                                : c().createElement(sr, cr({ key: `${r}-${t}` }, u));
                        },
                    ),
                    dr = (e) => ({
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
                    mr = (e, t, n) => {
                        if ('number' == typeof n) {
                            return (Ft(0, t, n) / t) * 100;
                        }
                        return e;
                    },
                    _r = {
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
                    gr = {
                        freezed: !1,
                        withStack: !1,
                        type: La.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    pr = (0, l.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = _r,
                            size: n = Pa.Default,
                            animationSettings: a = gr,
                            disabled: r = !1,
                            withoutBackground: s = !1,
                            value: i,
                            deltaFrom: u,
                            lineRef: d,
                            onChangeAnimationState: m,
                            onEndAnimation: _,
                            onComplete: g,
                        }) => {
                            const p = ((e, t, n) =>
                                (0, l.useMemo)(() => {
                                    const a = (Ft(0, t, e) / t) * 100;
                                    return { value: a, deltaFrom: mr(a, t, n) };
                                }, [n, t, e]))(i, e, u);
                            return c().createElement(
                                'div',
                                { className: o()(Ba.base, Ba[`base__${n}`]), style: dr(t) },
                                !s && c().createElement(Aa, { size: n }),
                                c().createElement(ur, {
                                    size: n,
                                    lineRef: d,
                                    disabled: r,
                                    value: p.value,
                                    deltaFrom: p.deltaFrom,
                                    animationSettings: a,
                                    onEndAnimation: _,
                                    onChangeAnimationState: m,
                                    onComplete: g,
                                }),
                            );
                        },
                    ),
                    vr = R.strings.dogtags.customization,
                    br = (0, l.memo)(
                        ({
                            id: e,
                            infoTitle: t,
                            infoText: n,
                            isLocked: a,
                            currentGrade: r,
                            currentProgress: s,
                            currentGradeValue: i,
                            nextGradeValue: u,
                            unlockText: d,
                            progressNumberType: m,
                            isExternalUnlockOnly: _,
                        }) => {
                            const g = r + 1,
                                p = (0, l.useMemo)(() => ({ componentId: e }), [e]),
                                v = _ && !a;
                            return c().createElement(
                                'div',
                                { className: aa },
                                c().createElement('div', { className: ra }, t),
                                c().createElement('div', { className: pa }, n),
                                a &&
                                    c().createElement(
                                        c().Fragment,
                                        null,
                                        c().createElement('div', { className: Ta }),
                                        c().createElement(
                                            'div',
                                            { className: Sa },
                                            c().createElement('div', { className: Oa }),
                                            d,
                                        ),
                                    ),
                                c().createElement(
                                    Le,
                                    {
                                        contentId: R.views.lobby.dog_tags.DedicationTooltip('resId'),
                                        isEnabled: !a,
                                        args: p,
                                    },
                                    c().createElement(
                                        'div',
                                        null,
                                        (!_ || v) &&
                                            c().createElement(
                                                'div',
                                                { className: ca },
                                                c().createElement('div', { className: da }, se(s)),
                                                g < W &&
                                                    c().createElement(
                                                        c().Fragment,
                                                        null,
                                                        c().createElement('div', { className: _a }, '/'),
                                                        c().createElement('div', { className: ma }, se(a ? i : u, m)),
                                                    ),
                                            ),
                                        !a &&
                                            c().createElement(
                                                'div',
                                                { className: sa },
                                                c().createElement(pr, {
                                                    size: Pa.Medium,
                                                    value: s - i,
                                                    maxValue: u - i,
                                                    animationSettings: gr,
                                                }),
                                            ),
                                        c().createElement(
                                            'div',
                                            { className: o()(la, a && ua) },
                                            !a &&
                                                c().createElement(
                                                    'div',
                                                    { className: oa },
                                                    `${vr.currentLevel()} ${U[r]}`,
                                                ),
                                            !a && g < W && c().createElement('div', { className: ia }, U[r + 1]),
                                            !a && g === W && c().createElement('div', { className: ia }),
                                        ),
                                    ),
                                ),
                            );
                        },
                    ),
                    fr = (0, l.memo)(
                        ({
                            id: e,
                            isLocked: t,
                            infoTitle: n,
                            infoText: a,
                            currentGrade: r,
                            currentProgress: s,
                            nextGradeValue: i,
                            unlockText: u,
                            isDemoted: d,
                            progressNumberType: m,
                        }) => {
                            const _ = R.images.gui.maps.icons.dogtags,
                                g = r + 1,
                                p = r + 2,
                                v = _.level_shields[`Level_${g}`](),
                                b = (0, l.useMemo)(() => ({ backgroundImage: `url(${v})` }), [v]),
                                f = _.level_shields[`Level_gr_${p <= W ? p : 1}`](),
                                h = (0, l.useMemo)(() => ({ backgroundImage: `url(${f})` }), [f]),
                                E = t || d,
                                y = o()(ba, g === W && fa),
                                w = (0, l.useMemo)(() => ({ componentId: e }), [e]);
                            return c().createElement(
                                'div',
                                { className: aa },
                                c().createElement('div', { className: ra }, n),
                                c().createElement('div', { className: pa }, a),
                                !E &&
                                    c().createElement(
                                        Le,
                                        {
                                            contentId: R.views.lobby.dog_tags.ThreeMonthsTooltip('resId'),
                                            isEnabled: !0,
                                            args: w,
                                        },
                                        c().createElement(
                                            'div',
                                            { className: Ra },
                                            c().createElement('div', { className: Da }),
                                            c().createElement(
                                                'div',
                                                { className: Ia },
                                                R.strings.dogtags.customization.skill_info(),
                                                c().createElement('div', { className: va }),
                                            ),
                                            c().createElement('div', { className: Ma }),
                                        ),
                                    ),
                                E &&
                                    c().createElement(
                                        c().Fragment,
                                        null,
                                        c().createElement('div', { className: Ta }),
                                        c().createElement(
                                            'div',
                                            { className: Sa },
                                            c().createElement('div', { className: Oa }),
                                            u,
                                        ),
                                    ),
                                !E &&
                                    c().createElement(
                                        Le,
                                        {
                                            contentId: R.views.lobby.dog_tags.DedicationTooltip('resId'),
                                            isEnabled: !0,
                                            args: w,
                                        },
                                        c().createElement(
                                            'div',
                                            { className: y },
                                            c().createElement(
                                                'div',
                                                { className: ha },
                                                c().createElement('div', { className: ya, style: b }),
                                                c().createElement('div', { className: wa }, se(s, m)),
                                            ),
                                            g < W &&
                                                c().createElement(
                                                    c().Fragment,
                                                    null,
                                                    c().createElement('div', { className: Ca }),
                                                    c().createElement(
                                                        'div',
                                                        { className: Ea },
                                                        c().createElement('div', { className: Na, style: h }),
                                                        c().createElement('div', { className: ka }, se(i, m)),
                                                    ),
                                                ),
                                        ),
                                    ),
                            );
                        },
                    ),
                    hr = R.images.gui.maps.icons.dogtags,
                    Er = (0, l.memo)(
                        ({
                            id: e,
                            isLocked: t,
                            infoTitle: n,
                            infoText: a,
                            currentGrade: r,
                            currentProgress: s,
                            nextGradeValue: i,
                            unlockText: u,
                            progressNumberType: d,
                        }) => {
                            const m = r + 1,
                                _ = r + 2,
                                g = hr.level_shields[`Level_${m}`](),
                                p = (0, l.useMemo)(() => ({ backgroundImage: `url(${g})` }), [g]),
                                v = _ < W ? hr.level_shields[`Level_gr_${_}`]() : '',
                                b = (0, l.useMemo)(() => ({ backgroundImage: `url(${v})` }), [v]),
                                f = o()(ba, { [fa]: 4 === r }),
                                h = (0, l.useMemo)(() => ({ componentId: e }), [e]);
                            return c().createElement(
                                'div',
                                { className: aa },
                                c().createElement('div', { className: ra }, n),
                                c().createElement('div', { className: pa }, a),
                                t &&
                                    c().createElement(
                                        c().Fragment,
                                        null,
                                        c().createElement('div', { className: Ta }),
                                        c().createElement(
                                            'div',
                                            { className: Sa },
                                            c().createElement('div', { className: Oa }),
                                            u,
                                        ),
                                    ),
                                !t &&
                                    c().createElement(
                                        Le,
                                        {
                                            contentId: R.views.lobby.dog_tags.TriumphTooltip('resId'),
                                            isEnabled: !0,
                                            args: h,
                                        },
                                        c().createElement(
                                            'div',
                                            { className: f },
                                            c().createElement(
                                                'div',
                                                { className: ha },
                                                c().createElement('div', { className: ya, style: p }),
                                                c().createElement('div', { className: wa }, se(s, d)),
                                            ),
                                            m < 4 && c().createElement('div', { className: Ca }),
                                            m < 4 &&
                                                c().createElement(
                                                    'div',
                                                    { className: Ea },
                                                    c().createElement('div', { className: Na, style: b }),
                                                    c().createElement('div', { className: ka }, se(i, d)),
                                                ),
                                        ),
                                    ),
                            );
                        },
                    ),
                    yr = R.images.gui.maps.icons.dogtags,
                    wr = (0, l.memo)(
                        ({
                            id: e,
                            isLocked: t,
                            infoTitle: n,
                            infoText: a,
                            currentGrade: r,
                            currentProgress: s,
                            nextGradeValue: i,
                            unlockText: u,
                            isDemoted: d,
                            progressNumberType: m,
                        }) => {
                            const _ = r + 1,
                                g = r + 2,
                                p = yr.level_shields[`Level_${_}`](),
                                v = (0, l.useMemo)(() => ({ backgroundImage: `url(${p})` }), [p]),
                                b = yr.level_shields[`Level_gr_${g <= W ? g : 1}`](),
                                f = (0, l.useMemo)(() => ({ backgroundImage: `url(${b})` }), [b]),
                                h = t || d,
                                E = o()(ba, _ === W && fa),
                                y = (0, l.useMemo)(() => ({ componentId: e }), [e]),
                                w = _ < W;
                            return c().createElement(
                                'div',
                                { className: aa },
                                c().createElement('div', { className: ra }, n),
                                c().createElement('div', { className: pa }, a),
                                !h &&
                                    c().createElement(
                                        Le,
                                        {
                                            contentId: R.views.lobby.dog_tags.RankedEfficiencyTooltip('resId'),
                                            isEnabled: !0,
                                            args: y,
                                        },
                                        c().createElement(
                                            'div',
                                            { className: Ra },
                                            c().createElement('div', { className: Da }),
                                            c().createElement(
                                                'div',
                                                { className: Ia },
                                                R.strings.dogtags.customization.ranked_skill_info(),
                                                c().createElement('div', { className: va }),
                                            ),
                                            c().createElement('div', { className: Ma }),
                                        ),
                                    ),
                                h &&
                                    c().createElement(
                                        c().Fragment,
                                        null,
                                        c().createElement('div', { className: Ta }),
                                        c().createElement(
                                            'div',
                                            { className: Sa },
                                            c().createElement('div', { className: Oa }),
                                            u,
                                        ),
                                    ),
                                !h &&
                                    c().createElement(
                                        Le,
                                        {
                                            contentId: R.views.lobby.dog_tags.DedicationTooltip('resId'),
                                            isEnabled: !0,
                                            args: y,
                                        },
                                        c().createElement(
                                            'div',
                                            { className: E },
                                            c().createElement(
                                                'div',
                                                { className: ha },
                                                c().createElement('div', { className: ya, style: v }),
                                                c().createElement('div', { className: wa }, se(s, m)),
                                            ),
                                            w &&
                                                c().createElement(
                                                    c().Fragment,
                                                    null,
                                                    c().createElement('div', { className: Ca }),
                                                    c().createElement(
                                                        'div',
                                                        { className: Ea },
                                                        c().createElement('div', { className: Na, style: f }),
                                                        c().createElement('div', { className: ka }, se(i, m)),
                                                    ),
                                                ),
                                        ),
                                    ),
                            );
                        },
                    );
                function kr() {
                    return (
                        (kr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        kr.apply(this, arguments)
                    );
                }
                const Cr = ({ currentItem: e }) => {
                    const t = e.id,
                        n = e.purpose,
                        a = e.currentGrade,
                        r = e.type,
                        s = e.currentGradeValue,
                        o = Q(t, r, n, a).strings;
                    if (!o) return console.warn(`Component ${t} is missing translation info.`), null;
                    const i = o.description_locked(),
                        l = o.title(),
                        u = o.description(),
                        d = i.replace('{unlock_value}', String(se(s))),
                        m = {
                            [$.Dedication]: br,
                            [$.Skill]: fr,
                            [$.RankedSkill]: wr,
                            [$.Triumph]: Er,
                            [$.Medal]: xa,
                            [$.Base]: xa,
                        },
                        _ = { infoTitle: l, infoText: u, unlockText: d },
                        g = m[n];
                    return g
                        ? c().createElement(g, kr({}, e, _))
                        : (console.warn(
                              `Invalid component purpose ${n}. Available component purposes ${Object.keys(m).join(', ')}.`,
                          ),
                          null);
                };
                var Nr = n(664);
                const Tr = 'Dogtags_base_46',
                    Sr = 'Dogtags_dogtags_top_26',
                    Or = 'Dogtags_dogtags_bottom_3d',
                    Rr = 'Dogtags_background_f8',
                    Ir = 'Dogtags_playerInfoShadow_a4',
                    Dr = 'Dogtags_name_95',
                    Mr = 'Dogtags_clan_a3',
                    xr = 'Dogtags_engraving_b0',
                    Br = 'Dogtags_shadow_8c',
                    Pr = 'Dogtags_trackerInfoWrapper_fd',
                    Lr = 'Dogtags_trackerText_a4',
                    Ar = 'Dogtags_trackerValue_f5',
                    zr = 'Dogtags_trackerDigit_c0',
                    $r = 'Dogtags_spaceDigit_86',
                    Fr = 'Dogtags_flameAnimation_a9',
                    jr = 'Dogtags_flameAnimation__appear_2a',
                    Wr = 'Dogtags_flameAnimation__appearActive_b3',
                    Hr = 'Dogtags_flameAnimation__appearDone_cb',
                    Vr = 'Dogtags_flameAnimation__enter_a3',
                    Gr = 'Dogtags_flameAnimation__enterActive_53',
                    Ur = 'Dogtags_flameAnimation__enterDone_b7',
                    Kr = 'Dogtags_flameAnimation__exit_20',
                    qr = 'Dogtags_flameAnimation__exitActive_0e',
                    Yr = 'Dogtags_flameAnimation__exitDone_df',
                    Xr = 'Flame_base_90',
                    Zr = 'Flame_slides_58',
                    Qr = 'Flame_frame_29',
                    Jr = (0, l.memo)(({ className: e }) => {
                        const t = (() => {
                            const e = R.images.gui.maps.icons.dogtags.icons.flame;
                            return Array(42)
                                .fill(null)
                                .map((t, n) => {
                                    const a = `flame_${`0${n}`.slice(-2)}`;
                                    return a in e ? e[a]() : e.flame_00();
                                });
                        })();
                        return c().createElement(
                            'div',
                            { className: o()(Xr, e), 'data-testid': 'Flame' },
                            c().createElement(
                                'div',
                                { className: Zr },
                                t.map((e) => c().createElement('img', { key: e, src: e, className: Qr })),
                            ),
                        );
                    }),
                    es = R.images.gui.maps.icons.dogtags.big.digits;
                Object.keys(Object.getPrototypeOf(es))
                    .filter((e) => '$' !== e[0])
                    .map((e) => es[e]())
                    .map((e) => {
                        new Image().src = e;
                    });
                const ts = (e) => {
                        const t = e.currentTarget.width / e.currentTarget.height;
                        (e.currentTarget.style.width = 16 * t + '%'), (e.currentTarget.style.display = 'flex');
                    },
                    ns = {
                        appear: jr,
                        appearActive: Wr,
                        appearDone: Hr,
                        enter: Vr,
                        enterActive: Gr,
                        enterDone: Ur,
                        exit: Kr,
                        exitActive: qr,
                        exitDone: Yr,
                    },
                    as = ({ playerName: e, clanTag: t, background: n, engraving: a, isHighlighted: r }) => {
                        const s = n.currentGrade,
                            o = a.currentGrade,
                            u = Q(n.id, z.Background, n.purpose || 'default', s || 0, 'big'),
                            d = Q(a.id, z.Engraving, a.purpose || 'dedication', o || 0, 'big'),
                            m = a.displayableProgress.split(/\[|\]/).reduce((e, t, n) => {
                                const a = n % 2 == 1;
                                return e.push(...(a ? [t] : t.split(''))), e;
                            }, []);
                        const _ = d.strings ? d.strings.title() : null,
                            g = me(u.image),
                            p = me(d.image),
                            v = ((e) => {
                                const t = (0, l.useRef)(!1);
                                return (
                                    (0, l.useEffect)(() => {
                                        t.current = e;
                                    }),
                                    t.current
                                );
                            })(r);
                        return (
                            (0, l.useEffect)(() => {
                                r && !v ? i(R.sounds.dt_flame_start()) : v && !r && i(R.sounds.dt_flame_stop());
                            }, [r, v]),
                            c().createElement(
                                'div',
                                { className: Tr },
                                c().createElement(
                                    Nr.Z,
                                    {
                                        in: r,
                                        timeout: 400,
                                        className: Fr,
                                        classNames: ns,
                                        mountOnEnter: !0,
                                        unmountOnExit: !0,
                                        appear: !0,
                                    },
                                    c().createElement(Jr, null),
                                ),
                                c().createElement(
                                    'div',
                                    { className: Sr },
                                    c().createElement('div', { className: Rr, style: g }),
                                    c().createElement('div', { className: Br }),
                                    c().createElement('div', { className: Ir }),
                                    c().createElement('div', { className: Dr }, e),
                                    c().createElement('div', { className: Mr }, t),
                                    c().createElement('div', { className: xr, style: p }),
                                ),
                                c().createElement(
                                    'div',
                                    { className: Or },
                                    c().createElement(
                                        'div',
                                        { className: Pr },
                                        c().createElement('div', { className: Lr }, _),
                                        c().createElement(
                                            'div',
                                            { className: Ar },
                                            m.map((e, t) => {
                                                if (' ' === e)
                                                    return c().createElement('div', { key: e + t, className: $r });
                                                const n = de(e, es);
                                                return c().createElement('img', {
                                                    key: `${n}-${t}`,
                                                    onLoad: ts,
                                                    className: zr,
                                                    src: n,
                                                });
                                            }),
                                        ),
                                    ),
                                ),
                            )
                        );
                    },
                    rs = 'FilterBar_base_66',
                    ss = 'FilterBar_purposeGroups_85',
                    os = 'FilterBar_buttonWrapper_c2',
                    is = 'FilterBar_buttonLabelSpacing_6c',
                    ls = 'FilterBar_bubbleWrapper_27',
                    cs = 'FilterBar_availableItems_4d',
                    us = 'FilterBar_availableItemsCount_a1',
                    ds = 'FilterBar_newCount_c9',
                    ms = 'ToggleButton_base_66',
                    _s = 'ToggleButton_content_2f',
                    gs = 'ToggleButton_overlay_49',
                    ps = 'ToggleButton_base__active_c6',
                    vs = 'ToggleButton_indicator_c1',
                    bs = ['active', 'className', 'children', 'size'];
                function fs() {
                    return (
                        (fs =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        fs.apply(this, arguments)
                    );
                }
                const hs = (0, l.memo)((e) => {
                    let t = e.active,
                        n = e.className,
                        a = e.children,
                        r = e.size,
                        s = void 0 === r ? m.small : r,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                a,
                                r = {},
                                s = Object.keys(e);
                            for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, bs);
                    const l = o()(ms, n, t && ps);
                    return c().createElement(
                        'div',
                        { className: l },
                        c().createElement(
                            g,
                            fs({}, i, { type: 'secondary', size: s }),
                            c().createElement('span', { className: _s }, a),
                        ),
                        c().createElement('div', { className: gs }),
                        c().createElement('div', { className: vs }),
                    );
                });
                let Es, ys, ws, ks;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(Es || (Es = {})),
                    (function (e) {
                        (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                    })(ys || (ys = {})),
                    (function (e) {
                        (e.primary = 'primary'), (e.main = 'main');
                    })(ws || (ws = {})),
                    (function (e) {
                        (e.Center = 'center'), (e.Bottom = 'bottom');
                    })(ks || (ks = {}));
                const Cs = {
                        base: 'Checkbox_base_36',
                        base__disabled: 'Checkbox_base__disabled_08',
                        base__center: 'Checkbox_base__center_52',
                        base__bottom: 'Checkbox_base__bottom_28',
                        input: 'Checkbox_input_37',
                        base__mouseDown: 'Checkbox_base__mouseDown_45',
                        base__small: 'Checkbox_base__small_18',
                        base__medium: 'Checkbox_base__medium_12',
                        base__large: 'Checkbox_base__large_f7',
                        base__extraLarge: 'Checkbox_base__extraLarge_c9',
                        alertOverlay: 'Checkbox_alertOverlay_52',
                        base__alert: 'Checkbox_base__alert_b7',
                        blink: 'Checkbox_blink_5e',
                        base__checked: 'Checkbox_base__checked_a2',
                        inputHoverOverlay: 'Checkbox_inputHoverOverlay_36',
                        highlight: 'Checkbox_highlight_b8',
                        base__main: 'Checkbox_base__main_3a',
                        base__primary: 'Checkbox_base__primary_ab',
                        checkmark: 'Checkbox_checkmark_60',
                        fadeIn: 'Checkbox_fadeIn_1a',
                        label: 'Checkbox_label_bc',
                        labelContent: 'Checkbox_labelContent_64',
                    },
                    Ns = [
                        'id',
                        'isChecked',
                        'isDisabled',
                        'isAlert',
                        'size',
                        'type',
                        'soundHover',
                        'soundClick',
                        'onMouseEnter',
                        'onMouseLeave',
                        'onMouseUp',
                        'onMouseDown',
                        'onClick',
                        'onChange',
                        'onFocus',
                        'onBlur',
                        'text',
                        'contentStyles',
                        'children',
                        'alignment',
                    ];
                function Ts() {
                    return (
                        (Ts =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                                }
                                return e;
                            }),
                        Ts.apply(this, arguments)
                    );
                }
                const Ss = (e) => {
                        let t = e.id,
                            n = e.isChecked,
                            a = void 0 !== n && n,
                            r = e.isDisabled,
                            s = void 0 !== r && r,
                            u = e.isAlert,
                            d = void 0 !== u && u,
                            m = e.size,
                            _ = void 0 === m ? ys.medium : m,
                            g = e.type,
                            p = void 0 === g ? ws.primary : g,
                            v = e.soundHover,
                            b = void 0 === v ? 'highlight' : v,
                            f = e.soundClick,
                            h = void 0 === f ? 'play' : f,
                            E = e.onMouseEnter,
                            y = e.onMouseLeave,
                            w = e.onMouseUp,
                            k = e.onMouseDown,
                            C = e.onClick,
                            N = e.onChange,
                            T = e.onFocus,
                            S = e.onBlur,
                            O = e.text,
                            R = e.contentStyles,
                            I = e.children,
                            D = e.alignment,
                            M = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    a,
                                    r = {},
                                    s = Object.keys(e);
                                for (a = 0; a < s.length; a++) (n = s[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, Ns);
                        const x = (0, l.useState)(!1),
                            B = x[0],
                            P = x[1],
                            L = (0, l.useState)(!1),
                            A = (L[0], L[1]),
                            z = (0, l.useCallback)(
                                (e) => {
                                    s || (N && N(), C && C(e));
                                },
                                [s, N, C],
                            ),
                            $ = (0, l.useCallback)(
                                (e) => {
                                    const t = e.button === Es.LEFT;
                                    s || (t && P(!0), t && k && k(e), h && i(h));
                                },
                                [s, k, h],
                            ),
                            F = (0, l.useCallback)(
                                (e) => {
                                    s || (P(!1), w && w(e));
                                },
                                [s, w],
                            ),
                            j = (0, l.useCallback)(
                                (e) => {
                                    s || (E && E(e), b && i(b));
                                },
                                [s, E, b],
                            ),
                            W = (0, l.useCallback)(
                                (e) => {
                                    s || (P(!1), y && y(e));
                                },
                                [s, y],
                            ),
                            H = (0, l.useCallback)(
                                (e) => {
                                    s || (A(!0), T && T(e));
                                },
                                [s, T],
                            ),
                            V = (0, l.useCallback)(
                                (e) => {
                                    s || (A(!1), S && S(e));
                                },
                                [s, S],
                            ),
                            G = c().createElement(
                                'div',
                                { className: Cs.label },
                                c().createElement(
                                    'div',
                                    { className: o()(Cs.labelContent, 's-labelContent'), style: R },
                                    O || I,
                                ),
                            );
                        return c().createElement(
                            'div',
                            Ts(
                                {
                                    id: t,
                                    className: o()(Cs.base, Cs[`base__${_}`], Cs[`base__${p}`], {
                                        [Cs.base__checked]: a,
                                        [Cs.base__disabled]: s,
                                        [Cs.base__mouseDown]: B,
                                        [Cs.base__alert]: d,
                                        [Cs.base__center]: D === ks.Center,
                                        [Cs.base__bottom]: D === ks.Bottom,
                                    }),
                                    onClick: z,
                                    onMouseEnter: j,
                                    onMouseLeave: W,
                                    onMouseDown: $,
                                    onMouseUp: F,
                                    onFocus: H,
                                    onBlur: V,
                                },
                                M,
                            ),
                            c().createElement(
                                'div',
                                { className: Cs.input },
                                c().createElement('div', { className: Cs.alertOverlay }),
                                c().createElement('div', { className: Cs.inputHoverOverlay }),
                                c().createElement('div', { className: Cs.highlight }),
                            ),
                            c().createElement('div', { className: Cs.checkmark }),
                            ((O || I) && G) || null,
                        );
                    },
                    Os = R.strings.dogtags.component.purposeGroup,
                    Rs = (0, l.memo)(
                        ({
                            availablePurposeGroups: e,
                            purposeGroupFilters: t,
                            setPurposeGroupFilters: n,
                            showOnlyAvailableItems: a,
                            setShowOnlyAvailableItems: r,
                            availableItemsCount: s,
                            newEngravingSkillCount: o = 0,
                            newEngravingDedicationCount: i = 0,
                            newEngravingTriumphCount: u = 0,
                        }) => {
                            const d = (0, l.useCallback)(
                                    (e) => () => {
                                        n((t) => Object.assign({}, t, { [e]: !t[e] }));
                                    },
                                    [n],
                                ),
                                m = (0, l.useCallback)(() => r((e) => !e), [r]),
                                _ = { [F.Dedication]: i, [F.Triumph]: u, [F.Season]: o };
                            return c().createElement(
                                'div',
                                { className: rs },
                                e.length > 0 &&
                                    c().createElement(
                                        'div',
                                        { className: ss },
                                        e.map((e) => {
                                            const n = t[e],
                                                a = e in Os ? Os[e]() : Os.dedication(),
                                                r = _[e] || 0;
                                            return c().createElement(
                                                'div',
                                                { className: os, key: e },
                                                c().createElement(
                                                    hs,
                                                    { active: n, onClick: d(e) },
                                                    c().createElement('span', { className: is }, a),
                                                ),
                                                r > 0 &&
                                                    c().createElement(
                                                        'div',
                                                        { className: ls },
                                                        c().createElement(
                                                            'div',
                                                            { className: ds },
                                                            c().createElement(ce, { value: r }),
                                                        ),
                                                    ),
                                            );
                                        }),
                                    ),
                                c().createElement(
                                    'div',
                                    { className: cs },
                                    c().createElement(Ss, {
                                        isChecked: a,
                                        size: 'medium',
                                        text: R.strings.dogtags.customization.showAvailable(),
                                        type: 'main',
                                        soundHover: 'highlight',
                                        soundClick: 'play',
                                        onChange: m,
                                    }),
                                    c().createElement('span', { className: us }, s),
                                ),
                            );
                        },
                    ),
                    Is = 'NoResults_base_35',
                    Ds = 'NoResults_message_41',
                    Ms = 'NoResults_message_icon_a4',
                    xs = ({ className: e, clearFilters: t }) => {
                        const n = o()(Is, e);
                        return c().createElement(
                            'div',
                            { className: n },
                            c().createElement(
                                'p',
                                { className: Ds },
                                c().createElement('img', {
                                    src: R.images.gui.maps.icons.dogtags.icons.alert(),
                                    className: Ms,
                                }),
                                R.strings.dogtags.customization.filter.noResults(),
                            ),
                            c().createElement(
                                g,
                                { type: 'secondary', size: m.medium, onClick: t },
                                R.strings.dogtags.customization.filter.restoreFilter(),
                            ),
                        );
                    },
                    Bs = 'Customization_base_4e',
                    Ps = 'Customization_checkIcon_bf',
                    Ls = 'Customization_allEquipped_ed',
                    As = 'Customization_alertMessage_c4',
                    zs = 'Customization_alertIcon_ce',
                    $s = 'Customization_selectionWrapper_e5',
                    Fs = 'Customization_selection_6b',
                    js = 'Customization_resetBtn_f7',
                    Ws = R.strings.dogtags.customization.allApplied(),
                    Hs = R.strings.dogtags.customization.selectedNotAvailable(),
                    Vs = R.strings.dogtags.customization.deprecated(),
                    Gs = R.strings.dogtags.customization.pills.engraving(),
                    Us = R.strings.dogtags.customization.pills.background(),
                    Ks = (0, l.memo)(({ selectedItems: e, equippedItems: t, onItemReset: n }) => {
                        const a = e.engraving.id === t.engraving.id,
                            r = e.background.id === t.background.id,
                            s = e.engraving.isLocked,
                            o = e.background.isLocked;
                        function u(e) {
                            return () => {
                                i(R.sounds.dt_locked_reset_button()), n(e);
                            };
                        }
                        const d = (0, l.useCallback)(() => {
                                i(R.sounds.highlight());
                            }, []),
                            m = [];
                        return (
                            ((!r && o) || (!a && s)) && m.push(Hs),
                            (e.engraving.isDeprecated || e.background.isDeprecated) && m.push(Vs),
                            c().createElement(
                                'div',
                                { className: Bs },
                                0 === m.length &&
                                    r &&
                                    a &&
                                    c().createElement(
                                        'div',
                                        { className: Ls },
                                        c().createElement('div', { className: Ps }),
                                        Ws,
                                    ),
                                m.length > 0 &&
                                    c().createElement(
                                        'div',
                                        { className: As },
                                        c().createElement('div', { className: zs }),
                                        m.map((e) => c().createElement('div', { key: e }, e)),
                                    ),
                                (!r || !a) &&
                                    c().createElement(
                                        'div',
                                        { className: $s },
                                        !r &&
                                            c().createElement(
                                                'div',
                                                { className: Fs, onClick: u(z.Background), onMouseEnter: d },
                                                Us,
                                                c().createElement('div', { className: js }),
                                            ),
                                        !a &&
                                            c().createElement(
                                                'div',
                                                { className: Fs, onClick: u(z.Engraving), onMouseEnter: d },
                                                Gs,
                                                c().createElement('div', { className: js }),
                                            ),
                                    ),
                            )
                        );
                    }),
                    qs = 'Onboarding_base_f8',
                    Ys = 'Onboarding_header_f2',
                    Xs = 'Onboarding_center_47',
                    Zs = 'Onboarding_closeBtn_1a',
                    Qs = 'Onboarding_body_31',
                    Js = 'Onboarding_overlayReveal_e3',
                    eo = 'Onboarding_overlay_02',
                    to = 'Onboarding_playBtnWrapper_1d',
                    no = 'Onboarding_playBtn_22',
                    ao = 'Onboarding_footer_64',
                    ro = 'Onboarding_pagination_e5',
                    so = 'Onboarding_paginationBtn_8d',
                    oo = 'Onboarding_selected_d7',
                    io = 'Onboarding_replay_81',
                    lo = 'Onboarding_replayIcon_9b',
                    co = 'Onboarding_overlayInnerWrapper_df',
                    uo = 'Onboarding_overlayTitle_96',
                    mo = 'Onboarding_overlayText_c2',
                    _o = {
                        slideOut: 'Reveal_slideOut_ec',
                        slideIn: 'Reveal_slideIn_00',
                        slideLeftOut: 'Reveal_slideLeftOut_84',
                        slideLeftIn: 'Reveal_slideLeftIn_92',
                        slideRightOut: 'Reveal_slideRightOut_8b',
                        slideRightIn: 'Reveal_slideRightIn_4d',
                        fadeOut: 'Reveal_fadeOut_d6',
                        fadeIn: 'Reveal_fadeIn_38',
                        bg_fadeOut: 'Reveal_bg_fadeOut_f3',
                        fadeOutBlur: 'Reveal_fadeOutBlur_3f',
                        bg_fadeIn: 'Reveal_bg_fadeIn_a4',
                        fadeInBlur: 'Reveal_fadeInBlur_57',
                        fadeDownIn: 'Reveal_fadeDownIn_bc',
                        fadeInUp: 'Reveal_fadeInUp_1d',
                        fadeDownOut: 'Reveal_fadeDownOut_f6',
                        fadeInDown: 'Reveal_fadeInDown_7e',
                    },
                    go = (0, l.memo)(
                        ({
                            children: e,
                            type: t = 'slide',
                            duration: n = 200,
                            className: a,
                            isOut: r = !1,
                            delayIn: s = '0ms',
                            delayOut: i = '0ms',
                            isDisabled: u = !1,
                            onAnimationComplete: d,
                        }) => {
                            const m = (0, l.useMemo)(
                                    () => ({ animationDelay: r ? i : s, animationDuration: `${n}ms` }),
                                    [r, s, i, n],
                                ),
                                _ = o()(_o[`${t}${r ? 'Out' : 'In'}`], a);
                            return u
                                ? c().createElement('div', { className: a }, e)
                                : c().createElement('div', { onAnimationEnd: d, className: _, style: m }, e);
                        },
                    );
                var po;
                !(function (e) {
                    (e[(e.First = 0)] = 'First'), (e[(e.Second = 1)] = 'Second');
                })(po || (po = {}));
                const vo = R.strings.dogtags.onboarding.header.title(),
                    bo = R.strings.dogtags.onboarding.header.close(),
                    fo = R.strings.dogtags.onboarding.overlay.pagination.first(),
                    ho = R.strings.dogtags.onboarding.overlay.pagination.second(),
                    Eo = R.strings.dogtags.onboarding.overlay.replay(),
                    yo = (0, l.memo)(({ onClose: e }) => {
                        const t = P('model', B.None).onPlayVideo,
                            n = (0, l.useState)(!1),
                            a = n[0],
                            r = n[1],
                            s = (0, l.useState)(!1),
                            u = s[0],
                            d = s[1],
                            m = (0, l.useState)(po.First),
                            _ = m[0],
                            p = m[1],
                            v = (e) => () => (i(R.sounds.play()), p(e)),
                            b = (0, l.useCallback)((t) => (_ === po.First ? p(po.Second) : e(t)), [_, e]),
                            f = (0, l.useCallback)(
                                () => (
                                    i(R.sounds.play()),
                                    _ === po.First
                                        ? (setTimeout(() => r(!0), 500), t({ urlKey: 'onboardingVideo1' }))
                                        : (setTimeout(() => d(!0), 500), t({ urlKey: 'onboardingVideo2' }))
                                ),
                                [_, t],
                            ),
                            h = (0, l.useCallback)(() => i(R.sounds.highlight()), []),
                            E = ((y = a),
                            (k = u),
                            {
                                [po.First]: {
                                    title: y
                                        ? R.strings.dogtags.onboarding.overlay.first.postVideo.title()
                                        : R.strings.dogtags.onboarding.overlay.first.preVideo.title(),
                                    text: y
                                        ? R.strings.dogtags.onboarding.overlay.first.postVideo.text()
                                        : R.strings.dogtags.onboarding.overlay.first.preVideo.text(),
                                    button: R.strings.dogtags.onboarding.overlay.button.next(),
                                    background: R.images.gui.maps.icons.dogtags.icons.onboarding_bg_1(),
                                },
                                [po.Second]: {
                                    title: k
                                        ? R.strings.dogtags.onboarding.overlay.second.postVideo.title()
                                        : R.strings.dogtags.onboarding.overlay.second.preVideo.title(),
                                    text: k
                                        ? R.strings.dogtags.onboarding.overlay.second.postVideo.text()
                                        : R.strings.dogtags.onboarding.overlay.second.preVideo.text(),
                                    button: R.strings.dogtags.onboarding.overlay.button.affirmative(),
                                    background: R.images.gui.maps.icons.dogtags.icons.onboarding_bg_2(),
                                },
                            })[_];
                        var y, k;
                        const C = ((e) => ({ backgroundImage: `url(${e.background})` }))(E),
                            N = o()(so, _ === po.First && oo),
                            T = o()(so, _ === po.Second && oo);
                        return c().createElement(
                            'div',
                            { className: qs },
                            c().createElement(
                                'div',
                                { className: Ys },
                                c().createElement('div', { className: Xs }, vo),
                                c().createElement(
                                    'div',
                                    { className: Zs },
                                    c().createElement(w, {
                                        caption: bo,
                                        type: 'close',
                                        side: 'right',
                                        onClick: e,
                                        onMouseEnter: h,
                                    }),
                                ),
                            ),
                            c().createElement(
                                'div',
                                { className: Qs, style: C },
                                c().createElement(
                                    go,
                                    { type: 'fade', className: Js },
                                    c().createElement(
                                        'div',
                                        { className: eo },
                                        ((!a && _ === po.First) || (!u && _ === po.Second)) &&
                                            c().createElement(
                                                'div',
                                                { className: to, onClick: f, onMouseEnter: h },
                                                c().createElement('div', { className: no }),
                                            ),
                                        c().createElement(
                                            'div',
                                            { className: co },
                                            c().createElement('div', { className: uo }, E.title),
                                            c().createElement('div', { className: mo }, E.text),
                                            ((_ === po.First && a) || (_ === po.Second && u)) &&
                                                c().createElement(
                                                    g,
                                                    { type: 'main', size: 'medium', onClick: b, onMouseEnter: h },
                                                    E.button,
                                                ),
                                        ),
                                    ),
                                ),
                            ),
                            c().createElement(
                                'div',
                                { className: ao },
                                ((_ === po.First && a) || (_ === po.Second && u)) &&
                                    c().createElement(
                                        'div',
                                        { className: io, onClick: f, onMouseEnter: h },
                                        c().createElement('div', { className: lo }),
                                        Eo,
                                    ),
                                c().createElement(
                                    'div',
                                    { className: ro },
                                    c().createElement(
                                        'div',
                                        { className: N, onClick: v(po.First), onMouseEnter: h },
                                        fo,
                                    ),
                                    c().createElement(
                                        'div',
                                        { className: T, onClick: v(po.Second), onMouseEnter: h },
                                        ho,
                                    ),
                                ),
                            ),
                        );
                    }),
                    wo = 'DogTagsApp_outerContainer_28',
                    ko = 'DogTagsApp_outerContainer_topView_6d',
                    Co = 'DogTagsApp_base_c2',
                    No = 'DogTagsApp_blur_30',
                    To = 'DogTagsApp_baseReveal_e4',
                    So = 'DogTagsApp_onboardingWrapper_b7',
                    Oo = 'DogTagsApp_infoScreenReveal_1a',
                    Ro = 'DogTagsApp_customizationWrapper_95',
                    Io = 'DogTagsApp_routerReveal_45',
                    Do = 'DogTagsApp_backBtnWrapper_85',
                    Mo = 'DogTagsApp_closeBtnWrapper_69',
                    xo = 300,
                    Bo = () => {
                        const e = P('model', B.None),
                            t = e.onTabSelect,
                            n = e.onboardingEnabled,
                            a = e.onOnboardingCloseClick,
                            r = e.onInfoButtonClick,
                            s = e.isTopView,
                            i = e.onExit,
                            u = (0, l.useState)(!1),
                            d = u[0],
                            m = u[1],
                            _ = (0, l.useState)(null),
                            g = _[0],
                            p = _[1],
                            v = (0, l.useCallback)((e) => {
                                const t = Number(e.currentTarget.getAttribute('tab-key'));
                                p(t);
                            }, []);
                        (0, l.useEffect)(() => {
                            if (null !== g)
                                return k(() => {
                                    p(null), t({ newTab: g });
                                }, xo);
                        }, [g, t]);
                        const b = (0, l.useState)(!1),
                            f = b[0],
                            h = b[1],
                            E = (0, l.useState)(!1),
                            y = E[0],
                            C = E[1],
                            N = (0, l.useState)(n),
                            T = N[0],
                            S = N[1],
                            O = (0, l.useState)(!1),
                            I = O[0],
                            D = O[1],
                            M = (0, l.useCallback)(() => {
                                h(!0);
                            }, []),
                            x = (0, l.useCallback)(() => {
                                C(!0);
                            }, []),
                            L = (0, l.useCallback)(() => {
                                D(!0);
                            }, []),
                            A = (0, l.useCallback)(
                                (e) => {
                                    27 === (e.keyCode || e.which) && (d ? m(!1) : T ? D(!0) : C(!0));
                                },
                                [d, T],
                            );
                        (0, l.useEffect)(
                            () => (
                                window.addEventListener('keydown', A), () => window.removeEventListener('keydown', A)
                            ),
                            [A],
                        );
                        const z = (0, l.useCallback)(() => {
                                y && i();
                            }, [i, y]),
                            $ = (0, l.useCallback)(() => {
                                f && (h(!1), r());
                            }, [f, r]),
                            F = (0, l.useCallback)(() => {
                                I && (S(!1), a());
                            }, [a, I]),
                            j = R.strings.dogtags.customization.button.backDashboard_glow(),
                            W = R.strings.dogtags.customization.button.backDashboard_gray(),
                            H = R.strings.dogtags.onboarding.header.close(),
                            V = o()(Co, T && No);
                        return c().createElement(
                            'div',
                            { className: o()(wo, s && ko) },
                            c().createElement(
                                go,
                                { type: 'fade', isOut: y, duration: xo, className: To, onAnimationComplete: z },
                                c().createElement(
                                    'div',
                                    { className: V },
                                    s &&
                                        c().createElement(
                                            'div',
                                            { className: Do },
                                            c().createElement(w, {
                                                caption: j,
                                                type: 'back',
                                                side: 'left',
                                                onClick: x,
                                                goto: W,
                                            }),
                                        ),
                                    !s &&
                                        c().createElement(
                                            'div',
                                            { className: Mo },
                                            c().createElement(w, {
                                                caption: H,
                                                type: 'close',
                                                side: 'right',
                                                onClick: x,
                                            }),
                                        ),
                                    !d &&
                                        c().createElement(
                                            go,
                                            {
                                                className: Oo,
                                                type: 'bg_fade',
                                                isDisabled: y,
                                                isOut: f,
                                                duration: xo,
                                                onAnimationComplete: $,
                                            },
                                            c().createElement(
                                                'div',
                                                { className: Ro },
                                                c().createElement(zt, { onTabClick: v, onInfoClick: M }),
                                                c().createElement(
                                                    go,
                                                    {
                                                        className: Io,
                                                        type: 'slide',
                                                        isOut: null !== g,
                                                        isDisabled: f || y,
                                                        duration: xo,
                                                    },
                                                    c().createElement(na, null),
                                                ),
                                            ),
                                        ),
                                ),
                            ),
                            T &&
                                c().createElement(
                                    go,
                                    { type: 'fade', isOut: I, className: So, duration: xo, onAnimationComplete: F },
                                    c().createElement(yo, { onClose: L }),
                                ),
                        );
                    },
                    Po = document.createElement('div');
                (window.onload = () => {
                    document.body.appendChild(Po), document.body.setAttribute('style', 'margin: 0;');
                }),
                    engine.whenReady.then(() => {
                        f().render(c().createElement(v, null, c().createElement(Bo, null)), Po);
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
                var r = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, n, a] = deferred[l], s = !0, o = 0; o < t.length; o++)
                        (!1 & a || r >= a) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[o]))
                            ? t.splice(o--, 1)
                            : ((s = !1), a < r && (r = a));
                    if (s) {
                        deferred.splice(l--, 1);
                        var i = n();
                        void 0 !== i && (e = i);
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
        (__webpack_require__.j = 589),
        (() => {
            var e = { 589: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var a,
                        r,
                        [s, o, i] = n,
                        l = 0;
                    if (s.some((t) => 0 !== e[t])) {
                        for (a in o) __webpack_require__.o(o, a) && (__webpack_require__.m[a] = o[a]);
                        if (i) var c = i(__webpack_require__);
                    }
                    for (t && t(n); l < s.length; l++)
                        (r = s[l]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(c);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [994], () => __webpack_require__(56));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
