(() => {
    'use strict';
    var __webpack_modules__ = {
            67: (e, t, n) => {
                n.d(t, { O: () => Z });
                var o = {};
                n.r(o),
                    n.d(o, { mouse: () => m, off: () => _, on: () => d, onResize: () => l, onScaleUpdated: () => u });
                var r = {};
                n.r(r),
                    n.d(r, {
                        events: () => o,
                        getMouseGlobalPosition: () => b,
                        getSize: () => h,
                        graphicsQuality: () => w,
                    });
                var a = {};
                n.r(a), n.d(a, { getBgUrl: () => f, getTextureUrl: () => g });
                var i = {};
                function s(e) {
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
                n.r(i),
                    n.d(i, {
                        addModelObserver: () => P,
                        addPreloadTexture: () => x,
                        children: () => a,
                        displayStatus: () => E,
                        displayStatusIs: () => K,
                        events: () => p,
                        extraSize: () => Y,
                        forceTriggerMouseMove: () => q,
                        freezeTextureBeforeResize: () => D,
                        getBrowserTexturePath: () => S,
                        getDisplayStatus: () => G,
                        getScale: () => z,
                        getSize: () => B,
                        getViewGlobalPosition: () => F,
                        isEventHandled: () => V,
                        isFocused: () => j,
                        pxToRem: () => I,
                        remToPx: () => U,
                        resize: () => A,
                        sendEvent: () => T,
                        setAnimateWindow: () => H,
                        setEventHandled: () => W,
                        setInputPaddingsRem: () => N,
                        setSidePaddingsRem: () => R,
                        whenTutorialReady: () => $,
                    });
                const l = s('clientResized'),
                    u = s('self.onScaleUpdated'),
                    d = (e, t) => engine.on(e, t),
                    _ = (e, t) => engine.off(e, t),
                    v = { down: s('mousedown'), up: s('mouseup'), move: s('mousemove') };
                const m = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && c(!1);
                    }
                    function n() {
                        e.enabled && c(!0);
                    }
                    function o() {
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
                    const r = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const a = `mouse${t}`,
                                        i = v[t]((e) => n([e, 'outside']));
                                    function s(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, s),
                                        o(),
                                        () => {
                                            r &&
                                                (i(),
                                                window.removeEventListener(a, s),
                                                (e.listeners -= 1),
                                                o(),
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
                            (e.enabled = !1), o();
                        },
                        enable() {
                            (e.enabled = !0), o();
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
                function b(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const w = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function g(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function f(e, t, n) {
                    return `url(${g(e, t, n)})`;
                }
                const E = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
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
                    y = ['args'];
                const O = 2,
                    k = 16,
                    C = 32,
                    M = 64,
                    L = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        o,
                                        r = {},
                                        a = Object.keys(e);
                                    for (o = 0; o < a.length; o++) (n = a[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                    return r;
                                })(t, y);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, a, {
                                          arguments:
                                              ((o = r),
                                              Object.entries(o).map(([e, t]) => {
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
                        var o;
                    },
                    T = {
                        close(e) {
                            L('popover' === e ? O : C);
                        },
                        minimize() {
                            L(M);
                        },
                        move(e) {
                            L(k, { isMouseEvent: !0, on: e });
                        },
                    };
                function x(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function N(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function S(e, t, n, o = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, o);
                }
                function P(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function R(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function B(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function A(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function F(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: U(t.x), y: U(t.y) };
                }
                function D() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function z() {
                    return viewEnv.getScale();
                }
                function I(e) {
                    return viewEnv.pxToRem(e);
                }
                function U(e) {
                    return viewEnv.remToPx(e);
                }
                function H(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function j() {
                    return viewEnv.isFocused();
                }
                function W() {
                    return viewEnv.setEventHandled();
                }
                function V() {
                    return viewEnv.isEventHandled();
                }
                function q() {
                    viewEnv.forceTriggerMouseMove();
                }
                function G() {
                    return viewEnv.getShowingStatus();
                }
                const K = Object.keys(E).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === E[t]), e), {}),
                    Y = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    $ = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : p.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    Z = { view: i, client: r };
            },
            521: (e, t, n) => {
                let o, r;
                n.d(t, { n: () => o }),
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
                            (e[(e.KEY_9 = 57)] = 'KEY_9');
                    })(o || (o = {})),
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
            358: (e, t, n) => {
                n.d(t, { Z: () => a });
                var o = n(67);
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
                        const a = o.O.view.addModelObserver(e, n, r);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = t),
                                  n > 0 && (this._views[n] ? this._views[n].push(a) : (this._views[n] = [a])))
                                : console.error("Can't add callback for model:", e),
                            a
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
                            const o = this._callbacks[n];
                            void 0 !== o && o(e, t);
                        });
                    }
                }
                r.__instance = void 0;
                const a = r;
            },
            572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(916);
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
            916: (e, t, n) => {
                n.d(t, { ry: () => w });
                class o {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: n }) => {
                                    let o = e.target;
                                    do {
                                        if (o === t) return;
                                        o = o.parentNode;
                                    } while (o);
                                    n();
                                });
                            });
                    }
                    static get instance() {
                        return o.__instance || (o.__instance = new o()), o.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const n = e,
                            o = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== n || t !== o)),
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
                o.__instance = void 0;
                const r = o;
                var a = n(358);
                var i = n(613);
                let s;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(s || (s = {}));
                const c = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = n(521),
                    v = n(67);
                const m = ['args'];
                function h(e, t, n, o, r, a, i) {
                    try {
                        var s = e[a](i),
                            c = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    s.done ? t(c) : Promise.resolve(c).then(o, r);
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
                                    return new Promise(function (o, r) {
                                        var a = e.apply(t, n);
                                        function i(e) {
                                            h(a, o, r, i, s, 'next', e);
                                        }
                                        function s(e) {
                                            h(a, o, r, i, s, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    g = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const r = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        o,
                                        r = {},
                                        a = Object.keys(e);
                                    for (o = 0; o < a.length; o++) (n = a[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                    return r;
                                })(t, m);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, a, {
                                          arguments:
                                              ((o = r),
                                              Object.entries(o).map(([e, t]) => {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var o;
                    },
                    f = () => g(s.CLOSE),
                    E = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var p = n(572);
                const y = r.instance,
                    O = {
                        DataTracker: a.Z,
                        ViewModel: p.Z,
                        ViewEventType: s,
                        NumberFormatType: c,
                        RealFormatType: l,
                        TimeFormatType: u,
                        DateFormatType: d,
                        makeGlobalBoundingBox: b,
                        sendMoveEvent: (e) => g(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => g(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            g(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, o, r = R.invalid('resId'), a) => {
                            const i = v.O.view.getViewGlobalPosition(),
                                c = n.getBoundingClientRect(),
                                l = c.x,
                                u = c.y,
                                d = c.width,
                                _ = c.height,
                                m = {
                                    x: v.O.view.pxToRem(l) + i.x,
                                    y: v.O.view.pxToRem(u) + i.y,
                                    width: v.O.view.pxToRem(d),
                                    height: v.O.view.pxToRem(_),
                                };
                            g(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: o || R.invalid('resId'),
                                targetID: r,
                                direction: t,
                                bbox: b(m),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => E(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            E(e, f);
                        },
                        handleViewEvent: g,
                        onBindingsReady: w,
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
                            const n = {};
                            if ('object' != typeof t) return t;
                            for (const o in t)
                                if (Object.prototype.hasOwnProperty.call(t, o)) {
                                    const r = Object.prototype.toString.call(t[o]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = t[o];
                                        n[o] = [];
                                        for (let t = 0; t < r.length; t++) n[o].push({ value: e(r[t].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[o] = e(t[o]))
                                            : (n[o] = t[o]);
                                }
                            return n;
                        },
                        ClickOutsideManager: y,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = O;
            },
            613: (e, t, n) => {
                n.d(t, { Z5: () => o, cy: () => r });
                const o = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    r = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, n) => userLocale.getTimeFormat(e, t, void 0 === n || n),
                        getTimeString: (e, t, n) => userLocale.getTimeString(e, t, void 0 === n || n),
                    };
            },
            895: (e, t, n) => {
                var o = n(179),
                    r = n.n(o),
                    a = n(493),
                    i = n.n(a);
                function s() {}
                function c() {
                    return !1;
                }
                console.log;
                var l = n(174),
                    u = n(67);
                function d(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return _(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === n && e.constructor && (n = e.constructor.name);
                            if ('Map' === n || 'Set' === n) return Array.from(e);
                            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        n && (e = n);
                        var o = 0;
                        return function () {
                            return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function _(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                    return o;
                }
                const v = (e) => (0 === e ? window : window.subViews.get(e));
                const m = () => (e, t) => {
                    const n = (0, o.createContext)({});
                    return [
                        function ({ mode: a = 'real', options: i, children: s, mocks: _ }) {
                            const m = (0, o.useRef)([]),
                                h = (n, o, r) => {
                                    var a;
                                    const i = (function ({
                                            initializer: e = !0,
                                            rootId: t = 0,
                                            getRoot: n = v,
                                            context: o = 'model',
                                        } = {}) {
                                            const r = new Map();
                                            function a(e, t = 0) {
                                                viewEnv.removeDataChangedCallback(e, t)
                                                    ? r.delete(e)
                                                    : console.error("Can't remove callback by id:", e);
                                            }
                                            engine.whenReady.then(() => {
                                                engine.on('viewEnv.onDataChanged', (e, t, n) => {
                                                    n.forEach((t) => {
                                                        const n = r.get(t);
                                                        void 0 !== n && n(e);
                                                    });
                                                });
                                            });
                                            const i = (e) => {
                                                const r = n(t),
                                                    a = o.split('.').reduce((e, t) => e[t], r);
                                                return 'string' != typeof e || 0 === e.length
                                                    ? a
                                                    : e.split('.').reduce((e, t) => {
                                                          const n = e[t];
                                                          return 'function' == typeof n ? n.bind(e) : n;
                                                      }, a);
                                            };
                                            return {
                                                subscribe: (n, a) => {
                                                    const s = 'string' == typeof a ? `${o}.${a}` : o,
                                                        c = u.O.view.addModelObserver(s, t, !0);
                                                    return r.set(c, n), e && n(i(a)), c;
                                                },
                                                readByPath: i,
                                                createCallback: (e, t) => {
                                                    const n = i(t);
                                                    return (...t) => {
                                                        n(e(...t));
                                                    };
                                                },
                                                createCallbackNoArgs: (e) => {
                                                    const t = i(e);
                                                    return () => {
                                                        t();
                                                    };
                                                },
                                                dispose: function () {
                                                    for (var e, n = d(r.keys()); !(e = n()).done; ) a(e.value, t);
                                                },
                                                unsubscribe: a,
                                            };
                                        })(o),
                                        s =
                                            'real' === n
                                                ? i
                                                : Object.assign({}, i, {
                                                      readByPath:
                                                          null != (a = null == r ? void 0 : r.getter) ? a : () => {},
                                                  }),
                                        _ = (e) =>
                                            'mocks' === n ? (null == r ? void 0 : r.getter(e)) : s.readByPath(e),
                                        h = (e) => m.current.push(e),
                                        b = e({
                                            mode: n,
                                            readByPath: _,
                                            externalModel: s,
                                            observableModel: {
                                                array: (e, t) => {
                                                    const o = null != t ? t : _(e),
                                                        r = l.LO.box(o, { equals: c });
                                                    return (
                                                        'real' === n &&
                                                            s.subscribe(
                                                                (0, l.aD)((e) => r.set(e)),
                                                                e,
                                                            ),
                                                        r
                                                    );
                                                },
                                                object: (e, t) => {
                                                    const o = null != t ? t : _(e),
                                                        r = l.LO.box(o, { equals: c });
                                                    return (
                                                        'real' === n &&
                                                            s.subscribe(
                                                                (0, l.aD)((e) => r.set(e)),
                                                                e,
                                                            ),
                                                        r
                                                    );
                                                },
                                                primitives: (e, t) => {
                                                    const o = _(t);
                                                    if (Array.isArray(e)) {
                                                        const r = e.reduce(
                                                            (e, t) => ((e[t] = l.LO.box(o[t], {})), e),
                                                            {},
                                                        );
                                                        return (
                                                            'real' === n &&
                                                                s.subscribe(
                                                                    (0, l.aD)((t) => {
                                                                        e.forEach((e) => {
                                                                            r[e].set(t[e]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            r
                                                        );
                                                    }
                                                    {
                                                        const r = e,
                                                            a = Object.entries(r),
                                                            i = a.reduce(
                                                                (e, [t, n]) => ((e[n] = l.LO.box(o[t], {})), e),
                                                                {},
                                                            );
                                                        return (
                                                            'real' === n &&
                                                                s.subscribe(
                                                                    (0, l.aD)((e) => {
                                                                        a.forEach(([t, n]) => {
                                                                            i[n].set(e[t]);
                                                                        });
                                                                    }),
                                                                    t,
                                                                ),
                                                            i
                                                        );
                                                    }
                                                },
                                            },
                                            cleanup: h,
                                        }),
                                        w = { mode: n, model: b, externalModel: s, cleanup: h };
                                    return {
                                        model: b,
                                        controls: 'mocks' === n && r ? r.controls(w) : t(w),
                                        externalModel: s,
                                        mode: n,
                                    };
                                },
                                b = (0, o.useRef)(!1),
                                w = (0, o.useState)(a),
                                g = w[0],
                                f = w[1],
                                E = (0, o.useState)(() => h(a, i, _)),
                                p = E[0],
                                y = E[1];
                            return (
                                (0, o.useEffect)(() => {
                                    b.current ? y(h(g, i, _)) : (b.current = !0);
                                }, [_, g, i]),
                                (0, o.useEffect)(() => {
                                    f(a);
                                }, [a]),
                                (0, o.useEffect)(
                                    () => () => {
                                        p.externalModel.dispose(), m.current.forEach((e) => e());
                                    },
                                    [p],
                                ),
                                r().createElement(n.Provider, { value: p }, s)
                            );
                        },
                        () => (0, o.useContext)(n),
                    ];
                };
                var h = n(946);
                let b, w, g, f;
                !(function (e) {
                    (e.Initialization = 'initialization'),
                        (e.Loading = 'loading'),
                        (e.ForceLoading = 'forceLoading'),
                        (e.Loaded = 'loaded');
                })(b || (b = {})),
                    (function (e) {
                        (e.Initialization = 'initialization'),
                            (e.Loading = 'loading'),
                            (e.Loaded = 'loaded'),
                            (e.Failed = 'failed');
                    })(w || (w = {})),
                    (function (e) {
                        (e.Initialization = 'initialization'), (e.Loaded = 'loaded'), (e.Failed = 'failed');
                    })(g || (g = {})),
                    (function (e) {
                        (e.Initialization = 'initialization'),
                            (e.BrowserLoading = 'browserLoading'),
                            (e.PageLoading = 'pageLoading'),
                            (e.ForceLoading = 'forceLoading'),
                            (e.PageFailed = 'pageFailed'),
                            (e.TextureFailed = 'textureFailed'),
                            (e.Loaded = 'loaded');
                    })(f || (f = {}));
                b.Initialization, w.Initialization;
                const E = (e) => e > 0,
                    p = (e) => !E(e);
                function y(e, t) {
                    var n;
                    if (p(e)) return void console.warn('Invalid id, should be greater than zero', e);
                    const o = 0 === t.scale ? 1e-5 : null != (n = t.scale) ? n : 1;
                    return u.O.view.getBrowserTexturePath(e, Math.max(t.width, 1), Math.max(t.height, 1), o);
                }
                const O = m()(
                        ({ observableModel: e }) => {
                            const t = e.object(),
                                n = (0, h.Om)(() =>
                                    (function ({ pageState: e, browserState: t, texState: n }) {
                                        return t === b.Initialization
                                            ? f.Initialization
                                            : t === b.ForceLoading
                                              ? f.ForceLoading
                                              : t === b.Loading
                                                ? f.BrowserLoading
                                                : e === w.Loaded && t === b.Loaded && n === g.Loaded
                                                  ? f.Loaded
                                                  : n === g.Failed
                                                    ? f.TextureFailed
                                                    : e === w.Failed
                                                      ? f.PageFailed
                                                      : f.PageLoading;
                                    })(t.get()),
                                );
                            return { root: t, getState: n };
                        },
                        ({ externalModel: e }) => ({
                            blur: e.createCallbackNoArgs('unfocus'),
                            focus: e.createCallbackNoArgs('focus'),
                            createWebView: e.createCallbackNoArgs('createWebView'),
                        }),
                    ),
                    k = O[0],
                    C = O[1],
                    M = (e) => {
                        (0, o.useEffect)(e, []);
                    };
                var L = n(403),
                    T = n(483),
                    x = n.n(T);
                function N() {
                    const e = (0, o.useRef)(0);
                    var t;
                    return (
                        (t = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, o.useEffect)(() => t, []),
                        (0, o.useMemo)(
                            () => ({
                                run: (t) => {
                                    window.cancelAnimationFrame(e.current),
                                        (e.current = window.requestAnimationFrame(() => {
                                            e.current = window.requestAnimationFrame(() => {
                                                t(), (e.current = 0);
                                            });
                                        }));
                                },
                                clear: () => {
                                    window.cancelAnimationFrame(e.current), (e.current = 0);
                                },
                                get isRunning() {
                                    return 0 !== e.current;
                                },
                            }),
                            [],
                        )
                    );
                }
                const S = 'BrowserView_base_6b',
                    P = 'BrowserView_texture_17',
                    B = 'Spinner_base_87',
                    A = 'Spinner_caption_cf',
                    F = 'Spinner_gear_c4',
                    D = 'Spinner_logo_bf',
                    z = ({ message: e, className: t, classNames: n }) =>
                        r().createElement(
                            'div',
                            { className: x()(B, t) },
                            e && r().createElement('div', { className: x()(A, null == n ? void 0 : n.caption) }, e),
                            r().createElement('div', { className: x()(F, null == n ? void 0 : n.gear) }),
                            r().createElement('div', { className: x()(D, null == n ? void 0 : n.logo) }),
                        );
                function I(e) {
                    engine.call('PlaySound', e);
                }
                const U = {
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
                    base__large: 'CButton_base__large_5c',
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
                let H, j;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(H || (H = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(j || (j = {}));
                const W = ({
                    children: e,
                    size: t,
                    isFocused: n,
                    type: a,
                    disabled: i,
                    mixClass: s,
                    soundHover: c,
                    soundClick: l,
                    onMouseEnter: u,
                    onMouseMove: d,
                    onMouseDown: _,
                    onMouseUp: v,
                    onMouseLeave: m,
                    onClick: h,
                }) => {
                    const b = (0, o.useRef)(null),
                        w = (0, o.useState)(n),
                        g = w[0],
                        f = w[1],
                        E = (0, o.useState)(!1),
                        p = E[0],
                        y = E[1],
                        O = (0, o.useState)(!1),
                        k = O[0],
                        C = O[1],
                        M = (0, o.useCallback)(() => {
                            i || (b.current && (b.current.focus(), f(!0)));
                        }, [i]),
                        L = (0, o.useCallback)(
                            (e) => {
                                g && null !== b.current && !b.current.contains(e.target) && f(!1);
                            },
                            [g],
                        ),
                        T = (0, o.useCallback)(
                            (e) => {
                                i || (h && h(e));
                            },
                            [i, h],
                        ),
                        N = (0, o.useCallback)(
                            (e) => {
                                i || (null !== c && I(c), u && u(e), C(!0));
                            },
                            [i, c, u],
                        ),
                        S = (0, o.useCallback)(
                            (e) => {
                                d && d(e);
                            },
                            [d],
                        ),
                        P = (0, o.useCallback)(
                            (e) => {
                                i || (v && v(e), y(!1));
                            },
                            [i, v],
                        ),
                        B = (0, o.useCallback)(
                            (e) => {
                                i || (null !== l && I(l), _ && _(e), n && M(), y(!0));
                            },
                            [i, l, _, M, n],
                        ),
                        A = (0, o.useCallback)(
                            (e) => {
                                i || (m && m(e), y(!1));
                            },
                            [i, m],
                        ),
                        F = x()(
                            U.base,
                            U[`base__${a}`],
                            {
                                [U.base__disabled]: i,
                                [U[`base__${t}`]]: t,
                                [U.base__focus]: g,
                                [U.base__highlightActive]: p,
                                [U.base__firstHover]: k,
                            },
                            s,
                        ),
                        D = x()(U.state, U.state__default);
                    return (
                        (0, o.useEffect)(
                            () => (
                                document.addEventListener('mousedown', L),
                                () => {
                                    document.removeEventListener('mousedown', L);
                                }
                            ),
                            [L],
                        ),
                        (0, o.useEffect)(() => {
                            f(n);
                        }, [n]),
                        r().createElement(
                            'div',
                            {
                                ref: b,
                                className: F,
                                onMouseEnter: N,
                                onMouseMove: S,
                                onMouseUp: P,
                                onMouseDown: B,
                                onMouseLeave: A,
                                onClick: T,
                            },
                            a !== H.ghost &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: U.back }),
                                    r().createElement('span', { className: U.texture }),
                                ),
                            r().createElement(
                                'span',
                                { className: D },
                                r().createElement('span', { className: U.stateDisabled }),
                                r().createElement('span', { className: U.stateHighlightHover }),
                                r().createElement('span', { className: U.stateHighlightActive }),
                            ),
                            r().createElement(
                                'span',
                                { className: U.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                W.defaultProps = { type: H.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const V = (0, o.memo)(W),
                    q = 'Error_base_46',
                    G = 'Error_alertIcon_04',
                    K = 'Error_errorCaption_f2',
                    Y = 'Error_button_cd',
                    $ = ({ errorBtnLabel: e, errorBtnClickHandler: t, errorMessage: n }) =>
                        r().createElement(
                            'div',
                            { className: q },
                            r().createElement('div', { className: G }),
                            r().createElement('div', { className: K }, n),
                            r().createElement(V, { size: j.medium, mixClass: Y, onClick: t }, e),
                        );
                $.defaultProps = { errorBtnLabel: '', errorMessage: '' };
                const Z = 'Waiting_base_c5',
                    X = 'Waiting_blackOverlay_55',
                    Q = ({
                        message: e,
                        isError: t,
                        errorMessage: n,
                        errorBtnLabel: a,
                        errorBtnClickHandler: i,
                        overlayAlpha: s,
                    }) => {
                        const c = r().createRef();
                        return (
                            (0, o.useEffect)(() => {
                                const e = c.current;
                                e && s && (e.style.opacity = s);
                            }, [c, s]),
                            r().createElement(
                                'div',
                                { className: Z },
                                r().createElement('div', { className: X, ref: c }),
                                t
                                    ? r().createElement($, {
                                          errorBtnLabel: a,
                                          errorMessage: n,
                                          errorBtnClickHandler: i,
                                      })
                                    : r().createElement(z, { message: e }),
                            )
                        );
                    };
                Q.defaultProps = {
                    isError: !1,
                    message: '',
                    overlayAlpha: '0.8',
                    errorBtnLabel: R.strings.dialogs.disconnected.cancel(),
                    errorMessage: '',
                };
                const J = 'DisplayBrowserState_base_e7',
                    ee = 'DisplayBrowserState_error_4e',
                    te = 'DisplayBrowserState_alertIcon_c4',
                    ne = 'DisplayBrowserState_errorCaption_dd',
                    oe = ({ waitingText: e, className: t }) =>
                        r().createElement(
                            'div',
                            { className: x()(J, t) },
                            r().createElement(Q, { errorBtnClickHandler: s, message: e }),
                        ),
                    re = () =>
                        r().createElement(
                            'div',
                            { className: ee },
                            r().createElement('div', { className: te }),
                            r().createElement(
                                'div',
                                { className: ne },
                                R.strings.dialogs.messenger.userInfoNotAvailable.title(),
                            ),
                        ),
                    ae = () =>
                        r().createElement(
                            'div',
                            { className: ee },
                            r().createElement('div', { className: te }),
                            r().createElement(
                                'div',
                                { className: ne },
                                R.strings.dialogs.inGameBrowser.textureLoadingFailed.title(),
                            ),
                            r().createElement(
                                'div',
                                { className: ne },
                                R.strings.dialogs.inGameBrowser.textureLoadingFailed.message(),
                            ),
                        );
                function ie(e) {
                    const t = (0, o.useRef)(e);
                    return (
                        (function (e) {
                            return e !== f.BrowserLoading && e !== f.PageLoading;
                        })(e) && (t.current = e),
                        t.current
                    );
                }
                function se(e) {
                    const t = (function (e) {
                            const t = (0, o.useRef)(!1);
                            return (
                                (e !== f.Loaded && e !== f.PageFailed && e !== f.TextureFailed) || (t.current = !0),
                                t.current
                            );
                        })(e),
                        n = ie(e);
                    return t ? n : e;
                }
                const ce = ({ viewState: e, waitingText: t, waitingClassName: n }) => {
                        switch (se(e)) {
                            case f.BrowserLoading:
                            case f.PageLoading:
                            case f.ForceLoading:
                                return r().createElement(oe, { waitingText: t, className: n });
                            case f.PageFailed:
                                return r().createElement(re, null);
                            case f.TextureFailed:
                                return r().createElement(ae, null);
                            default:
                                return null;
                        }
                    },
                    le = (e) =>
                        'width' in e && 'height' in e && 'number' == typeof e.width && 'number' == typeof e.height;
                function ue(e) {
                    return null != e ? e : viewEnv.getScale();
                }
                function de(e) {
                    const t = (0, o.useState)(ue(e.scale)),
                        n = t[0],
                        r = t[1],
                        a = (function (e) {
                            return le(e) ? y(e.id, e) : void 0;
                        })(Object.assign({}, e, { scale: n })),
                        i = (0, o.useState)(a),
                        s = i[0],
                        c = i[1],
                        l = (0, o.useRef)(!1),
                        u = 'width' in e ? e.width : 0,
                        d = 'height' in e ? e.height : 0,
                        _ = N();
                    return (
                        (0, o.useEffect)(() => {
                            const t = () => {
                                r(ue(e.scale));
                            };
                            return (
                                window.addEventListener('resize', t),
                                () => {
                                    window.removeEventListener('resize', t);
                                }
                            );
                        }, [e.scale]),
                        (0, o.useEffect)(() => {
                            if (void 0 === a || 0 === u || 0 === d || a === s) return;
                            const e = () => {
                                c(a);
                            };
                            if (!1 === l.current) return (l.current = !0), void e();
                            const t = new Image(),
                                n = () => {
                                    _.run(e);
                                };
                            return (
                                t.addEventListener('load', n),
                                (t.src = a),
                                () => {
                                    t.removeEventListener('load', n), (t.src = '');
                                }
                            );
                        }, [a, s]),
                        s
                    );
                }
                const _e = r().memo(function (e) {
                        const t = e.id,
                            n = e.className,
                            o = e.classNameTexture,
                            a = e.waitingClassName,
                            i = e.onMouseEnter,
                            s = e.onMouseLeave,
                            c = e.onMouseWheel,
                            l = e.onMouseMove,
                            u = e.onMouseDown,
                            d = e.onMouseUp,
                            _ = e.renderStateDisplay,
                            v = e.viewState,
                            m = e.statusCode,
                            h = e.waitingText,
                            b = e.scrollSpeed,
                            w = void 0 === b ? 20 : b,
                            g = de(e);
                        return r().createElement(
                            'div',
                            { className: x()(S, n), onMouseEnter: i, onMouseLeave: s },
                            g &&
                                r().createElement('div', {
                                    onWheel: c,
                                    onMouseMove: l,
                                    onMouseDown: u,
                                    onMouseUp: d,
                                    className: x()(S, P, o),
                                    'data-browser-id': t,
                                    'data-browser-scroll-speed': w,
                                    style: { backgroundImage: `url(${g})` },
                                }),
                            'function' == typeof _
                                ? _({ viewState: v, statusCode: m, waitingText: h, waitingClassName: a })
                                : r().createElement(ce, {
                                      viewState: v,
                                      statusCode: m,
                                      waitingText: h,
                                      waitingClassName: a,
                                  }),
                        );
                    }),
                    ve = 'none-ref',
                    me = 'measured',
                    he = { type: 'measuring' };
                function be() {
                    const e = (0, o.useRef)(null),
                        t = (0, o.useState)(he),
                        n = t[0],
                        r = t[1],
                        a = ((e, t = []) => {
                            const n = (0, o.useRef)(),
                                r = (0, o.useCallback)((...t) => {
                                    n.current && n.current(), (n.current = e(...t));
                                }, t);
                            return (
                                (0, o.useEffect)(
                                    () => () => {
                                        n.current && n.current();
                                    },
                                    [r],
                                ),
                                r
                            );
                        })(
                            () => (
                                r(he),
                                ((e) => {
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
                                })(() => {
                                    e.current
                                        ? r({
                                              type: me,
                                              size: { width: e.current.offsetWidth, height: e.current.offsetHeight },
                                          })
                                        : r({ type: ve });
                                })
                            ),
                            [],
                        );
                    return (
                        (0, o.useEffect)(
                            () => (
                                window.addEventListener('resize', a), a(), () => window.removeEventListener('resize', a)
                            ),
                            [a],
                        ),
                        [e, n, a]
                    );
                }
                function we() {
                    return (
                        (we =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                                }
                                return e;
                            }),
                        we.apply(this, arguments)
                    );
                }
                const ge = r().memo(function (e) {
                    const t = be(),
                        n = t[0],
                        o = t[1];
                    return r().createElement(
                        'div',
                        { ref: n, className: S },
                        r().createElement(
                            _e,
                            we(
                                {},
                                e,
                                (function (e, t = {}) {
                                    return 'measured' === e.type ? Object.assign({}, e.size, t) : t;
                                })(o),
                            ),
                        ),
                    );
                });
                function fe() {
                    return (
                        (fe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                                }
                                return e;
                            }),
                        fe.apply(this, arguments)
                    );
                }
                const Ee = (0, L.Pi)(function (e) {
                        const t = e.defaultWaitingText,
                            n = e.className,
                            a = e.waitingClassName,
                            i = e.isLazy,
                            s = void 0 === i || i,
                            c = e.displayContentWhenLoading,
                            l = void 0 === c || c,
                            u = e.renderStateDisplay,
                            d = e.onMouseEnter,
                            _ = e.onMouseLeave,
                            v = e.onMouseMove,
                            m = e.onMouseWheel,
                            h = e.onMouseDown,
                            b = e.onMouseUp,
                            w = C(),
                            g = w.model,
                            y = w.controls,
                            O = g.root.get(),
                            k = O.id,
                            L = O.httpStatusCode,
                            T = O.waitingMessage,
                            x = g.getState(),
                            N = l || x === f.Loaded;
                        M(() => {
                            s && p(k) && y.createWebView();
                        }),
                            (0, o.useEffect)(() => {
                                E(k) && y.focus();
                            }, [k, y]),
                            M(
                                () => (
                                    window.addEventListener('mouseleave', y.blur),
                                    window.addEventListener('mouseover', y.focus),
                                    () => {
                                        window.removeEventListener('mouseleave', y.blur),
                                            window.removeEventListener('mouseover', y.focus);
                                    }
                                ),
                            );
                        const S = (0, o.useMemo)(() => {
                            const e = {
                                onMouseEnter: d,
                                onMouseLeave: _,
                                onMouseMove: v,
                                onMouseWheel: m,
                                onMouseDown: h,
                                onMouseUp: b,
                            };
                            return N
                                ? Object.assign({}, e, {
                                      onMouseEnter: (e) => {
                                          y.focus(), null == d || d(e);
                                      },
                                      onMouseLeave: (e) => {
                                          y.blur(), null == _ || _(e);
                                      },
                                  })
                                : e;
                        }, [N, y, h, d, _, v, b, m]);
                        if (p(k)) return null;
                        const P = le(e)
                                ? (function (e, t) {
                                      const n = {};
                                      return (
                                          t.forEach((t) => {
                                              n[t] = e[t];
                                          }),
                                          n
                                      );
                                  })(e, ['width', 'height'])
                                : {},
                            R = T.length > 0 ? T : t;
                        return e.isFullSize
                            ? r().createElement(
                                  ge,
                                  fe({}, S, {
                                      id: k,
                                      className: n,
                                      waitingClassName: a,
                                      statusCode: L,
                                      viewState: x,
                                      waitingText: R,
                                      renderStateDisplay: u,
                                  }),
                              )
                            : r().createElement(
                                  _e,
                                  fe({}, S, P, {
                                      id: k,
                                      className: n,
                                      waitingClassName: a,
                                      statusCode: L,
                                      viewState: x,
                                      waitingText: R,
                                      renderStateDisplay: u,
                                  }),
                              );
                    }),
                    pe = ['options', 'mocks', 'mode'];
                const ye = (0, o.memo)(function (e) {
                        let t = e.options,
                            n = e.mocks,
                            o = e.mode,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    o,
                                    r = {},
                                    a = Object.keys(e);
                                for (o = 0; o < a.length; o++) (n = a[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r;
                            })(e, pe);
                        return r().createElement(k, { options: t, mocks: n, mode: o }, r().createElement(Ee, a));
                    }),
                    Oe = m()(
                        ({ observableModel: e }) => {
                            const t = e.object();
                            return { isClosable: (0, h.Om)(() => !0 === t.get().isClosable) };
                        },
                        ({ externalModel: e }) => ({ close: e.createCallbackNoArgs('onClose') }),
                    ),
                    ke = Oe[0],
                    Ce = Oe[1],
                    Me = {
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
                    Le = [
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
                function Te() {
                    return (
                        (Te =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                                }
                                return e;
                            }),
                        Te.apply(this, arguments)
                    );
                }
                class xe extends r().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && I(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && I(this.props.soundClick);
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
                            o = e.goto,
                            a = e.side,
                            i = e.type,
                            s = e.classNames,
                            c = e.onMouseEnter,
                            l = e.onMouseLeave,
                            u = e.onMouseDown,
                            d = e.onMouseUp,
                            _ =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        o,
                                        r = {},
                                        a = Object.keys(e);
                                    for (o = 0; o < a.length; o++) (n = a[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                    return r;
                                })(e, Le)),
                            v = x()(Me.base, Me[`base__${i}`], Me[`base__${a}`], null == s ? void 0 : s.base),
                            m = x()(Me.icon, Me[`icon__${i}`], Me[`icon__${a}`], null == s ? void 0 : s.icon),
                            h = x()(Me.glow, null == s ? void 0 : s.glow),
                            b = x()(Me.caption, Me[`caption__${i}`], null == s ? void 0 : s.caption),
                            w = x()(Me.goto, null == s ? void 0 : s.goto);
                        return r().createElement(
                            'div',
                            Te(
                                {
                                    className: v,
                                    onMouseEnter: this._onMouseEnter(c),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(u),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: n,
                                },
                                _,
                            ),
                            'info' !== i && r().createElement('div', { className: Me.shine }),
                            r().createElement('div', { className: m }, r().createElement('div', { className: h })),
                            r().createElement('div', { className: b }, t),
                            o && r().createElement('div', { className: w }, o),
                        );
                    }
                }
                xe.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const Ne = 'Closable_base_e2',
                    Se = 'Closable_button_01',
                    Pe = (0, L.Pi)(function ({ className: e, classNameButton: t, children: n }) {
                        const o = Ce(),
                            a = o.controls,
                            i = o.model;
                        return r().createElement(
                            'div',
                            { className: x()(Ne, e) },
                            n,
                            i.isClosable() &&
                                r().createElement(
                                    'div',
                                    { className: x()(Se, t) },
                                    r().createElement(xe, {
                                        caption: R.strings.menu.viewHeader.closeBtn.label(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: a.close,
                                    }),
                                ),
                        );
                    }),
                    Re = ['children', 'className', 'classNameButton'];
                const Be = (e) => {
                    let t = e.children,
                        n = e.className,
                        o = e.classNameButton,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                o,
                                r = {},
                                a = Object.keys(e);
                            for (o = 0; o < a.length; o++) (n = a[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, Re);
                    return r().createElement(ke, a, r().createElement(Pe, { className: n, classNameButton: o }, t));
                };
                var Ae = n(521);
                n(916);
                const Fe = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function De(e = Ae.n.NONE, t = Fe, n = !1, r = !1) {
                    (0, o.useEffect)(() => {
                        if (e !== Ae.n.NONE)
                            return (
                                window.addEventListener('keydown', o, n),
                                () => {
                                    window.removeEventListener('keydown', o, n);
                                }
                            );
                        function o(o) {
                            if (o.keyCode === e) {
                                if (!r && u.O.view.isEventHandled()) return;
                                u.O.view.setEventHandled(), t(o), n && o.stopPropagation();
                            }
                        }
                    }, [t, e, n, r]);
                }
                const ze = 'App_base_a4',
                    Ie = 'App_closeButton_34',
                    Ue = m()(s, ({ externalModel: e }) => ({ close: e.createCallbackNoArgs('onClose') })),
                    He = Ue[0],
                    je = Ue[1],
                    We = () => {
                        const e = je().controls;
                        return (
                            De(Ae.n.ESCAPE, () => e.close()),
                            r().createElement(
                                'div',
                                { className: ze },
                                r().createElement(
                                    Be,
                                    { classNameButton: Ie },
                                    r().createElement(ye, { isFullSize: !0, displayContentWhenLoading: !1 }),
                                ),
                            )
                        );
                    },
                    Ve = () => r().createElement(He, null, r().createElement(We, null));
                engine.whenReady.then(() => {
                    i().render(r().createElement(Ve, null), document.getElementById('root'));
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
        (__webpack_require__.O = (e, t, n, o) => {
            if (!t) {
                var r = 1 / 0;
                for (c = 0; c < deferred.length; c++) {
                    for (var [t, n, o] = deferred[c], a = !0, i = 0; i < t.length; i++)
                        (!1 & o || r >= o) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[i]))
                            ? t.splice(i--, 1)
                            : ((a = !1), o < r && (r = o));
                    if (a) {
                        deferred.splice(c--, 1);
                        var s = n();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            o = o || 0;
            for (var c = deferred.length; c > 0 && deferred[c - 1][2] > o; c--) deferred[c] = deferred[c - 1];
            deferred[c] = [t, n, o];
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
        (__webpack_require__.j = 194),
        (() => {
            var e = { 194: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var o,
                        r,
                        [a, i, s] = n,
                        c = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (o in i) __webpack_require__.o(i, o) && (__webpack_require__.m[o] = i[o]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (t && t(n); c < a.length; c++)
                        (r = a[c]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(l);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [127], () => __webpack_require__(895));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
