(() => {
    'use strict';
    var __webpack_modules__ = {
            67: (e, t, n) => {
                n.d(t, { O: () => Z });
                var r = {};
                n.r(r),
                    n.d(r, { mouse: () => w, off: () => u, on: () => d, onResize: () => l, onScaleUpdated: () => _ });
                var i = {};
                n.r(i),
                    n.d(i, {
                        events: () => r,
                        getMouseGlobalPosition: () => m,
                        getSize: () => h,
                        graphicsQuality: () => b,
                    });
                var a = {};
                n.r(a), n.d(a, { getBgUrl: () => p, getTextureUrl: () => E });
                var s = {};
                function o(e) {
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
                        addModelObserver: () => L,
                        addPreloadTexture: () => P,
                        children: () => a,
                        displayStatus: () => f,
                        displayStatusIs: () => $,
                        events: () => g,
                        extraSize: () => H,
                        forceTriggerMouseMove: () => j,
                        freezeTextureBeforeResize: () => I,
                        getBrowserTexturePath: () => R,
                        getDisplayStatus: () => G,
                        getScale: () => F,
                        getSize: () => D,
                        getViewGlobalPosition: () => B,
                        isEventHandled: () => W,
                        isFocused: () => q,
                        pxToRem: () => V,
                        remToPx: () => U,
                        resize: () => A,
                        sendEvent: () => M,
                        setAnimateWindow: () => K,
                        setEventHandled: () => z,
                        setInputPaddingsRem: () => C,
                        setSidePaddingsRem: () => N,
                        whenTutorialReady: () => Y,
                    });
                const l = o('clientResized'),
                    _ = o('self.onScaleUpdated'),
                    d = (e, t) => engine.on(e, t),
                    u = (e, t) => engine.off(e, t),
                    v = { down: o('mousedown'), up: o('mouseup'), move: o('mousemove') };
                const w = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && c(!1);
                    }
                    function n() {
                        e.enabled && c(!0);
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
                            : c(!1);
                    }
                    const i = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let i = !0;
                                    const a = `mouse${t}`,
                                        s = v[t]((e) => n([e, 'outside']));
                                    function o(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, o),
                                        r(),
                                        () => {
                                            i &&
                                                (s(),
                                                window.removeEventListener(a, o),
                                                (e.listeners -= 1),
                                                r(),
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
                            (e.enabled = !1), r();
                        },
                        enable() {
                            (e.enabled = !0), r();
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
                function m(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const b = {
                    isLow: () => 1 === viewEnv.getGraphicsQuality(),
                    isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                    get: () => viewEnv.getGraphicsQuality(),
                };
                function E(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function p(e, t, n) {
                    return `url(${E(e, t, n)})`;
                }
                const f = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    g = {
                        onTextureFrozen: o('self.onTextureFrozen'),
                        onTextureReady: o('self.onTextureReady'),
                        onDomBuilt: o('self.onDomBuilt'),
                        onLoaded: o('self.onLoaded'),
                        onDisplayChanged: o('self.onShowingStatusChanged'),
                        onFocusUpdated: o('self.onFocusChanged'),
                        children: {
                            onAdded: o('children.onAdded'),
                            onLoaded: o('children.onLoaded'),
                            onRemoved: o('children.onRemoved'),
                            onAttached: o('children.onAttached'),
                            onTextureReady: o('children.onTextureReady'),
                            onRequestPosition: o('children.requestPosition'),
                        },
                    },
                    y = ['args'];
                const S = 2,
                    O = 16,
                    T = 32,
                    k = 64,
                    x = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const i = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        i = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                    return i;
                                })(t, y);
                            return void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, a, {
                                          arguments:
                                              ((r = i),
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
                    M = {
                        close(e) {
                            x('popover' === e ? S : T);
                        },
                        minimize() {
                            x(k);
                        },
                        move(e) {
                            x(O, { isMouseEvent: !0, on: e });
                        },
                    };
                function P(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function C(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function R(e, t, n, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, r);
                }
                function L(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function N(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function D(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function A(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function B(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: U(t.x), y: U(t.y) };
                }
                function I() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function F() {
                    return viewEnv.getScale();
                }
                function V(e) {
                    return viewEnv.pxToRem(e);
                }
                function U(e) {
                    return viewEnv.remToPx(e);
                }
                function K(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function q() {
                    return viewEnv.isFocused();
                }
                function z() {
                    return viewEnv.setEventHandled();
                }
                function W() {
                    return viewEnv.isEventHandled();
                }
                function j() {
                    viewEnv.forceTriggerMouseMove();
                }
                function G() {
                    return viewEnv.getShowingStatus();
                }
                const $ = Object.keys(f).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === f[t]), e), {}),
                    H = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    Y = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : g.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    Z = { view: s, client: i };
            },
            521: (e, t, n) => {
                let r, i;
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
                            (e[(e.KEY_9 = 57)] = 'KEY_9');
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
                    })(i || (i = {}));
            },
            358: (e, t, n) => {
                n.d(t, { Z: () => a });
                var r = n(67);
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
                        const a = r.O.view.addModelObserver(e, n, i);
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
                            const r = this._callbacks[n];
                            void 0 !== r && r(e, t);
                        });
                    }
                }
                i.__instance = void 0;
                const a = i;
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
                n.d(t, { Sw: () => a.Z, ry: () => b });
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
                const i = r;
                var a = n(358);
                var s = n(613);
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
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var u = n(521),
                    v = n(67);
                const w = ['args'];
                function h(e, t, n, r, i, a, s) {
                    try {
                        var o = e[a](s),
                            c = o.value;
                    } catch (e) {
                        return void n(e);
                    }
                    o.done ? t(c) : Promise.resolve(c).then(r, i);
                }
                const m = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    b = (function () {
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
                                    return new Promise(function (r, i) {
                                        var a = e.apply(t, n);
                                        function s(e) {
                                            h(a, r, i, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            h(a, r, i, s, o, 'throw', e);
                                        }
                                        s(void 0);
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
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        i = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                    return i;
                                })(t, w);
                            void 0 !== i
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, a, {
                                          arguments:
                                              ((r = i),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var r;
                    },
                    p = () => E(o.CLOSE),
                    f = (e, t) => {
                        e.keyCode === u.n.ESCAPE && t();
                    };
                var g = n(572);
                const y = i.instance,
                    S = {
                        DataTracker: a.Z,
                        ViewModel: g.Z,
                        ViewEventType: o,
                        NumberFormatType: c,
                        RealFormatType: l,
                        TimeFormatType: _,
                        DateFormatType: d,
                        makeGlobalBoundingBox: m,
                        sendMoveEvent: (e) => E(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => E(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            E(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, r, i = R.invalid('resId'), a) => {
                            const s = v.O.view.getViewGlobalPosition(),
                                c = n.getBoundingClientRect(),
                                l = c.x,
                                _ = c.y,
                                d = c.width,
                                u = c.height,
                                w = {
                                    x: v.O.view.pxToRem(l) + s.x,
                                    y: v.O.view.pxToRem(_) + s.y,
                                    width: v.O.view.pxToRem(d),
                                    height: v.O.view.pxToRem(u),
                                };
                            E(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: i,
                                direction: t,
                                bbox: m(w),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => f(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            f(e, p);
                        },
                        handleViewEvent: E,
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
                        dumpViewModel: function e(t) {
                            const n = {};
                            if ('object' != typeof t) return t;
                            for (const r in t)
                                if (Object.prototype.hasOwnProperty.call(t, r)) {
                                    const i = Object.prototype.toString.call(t[r]);
                                    if (i.startsWith('[object CoherentArrayProxy]')) {
                                        const i = t[r];
                                        n[r] = [];
                                        for (let t = 0; t < i.length; t++) n[r].push({ value: e(i[t].value) });
                                    } else
                                        i.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[r] = e(t[r]))
                                            : (n[r] = t[r]);
                                }
                            return n;
                        },
                        ClickOutsideManager: y,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = S;
            },
            613: (e, t, n) => {
                n.d(t, { Z5: () => r, cy: () => i });
                const r = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    i = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, n) => userLocale.getTimeFormat(e, t, void 0 === n || n),
                        getTimeString: (e, t, n) => userLocale.getTimeString(e, t, void 0 === n || n),
                    };
            },
            601: (e, t, n) => {
                var r = n(179),
                    i = n.n(r),
                    a = n(493),
                    s = n.n(a),
                    o = n(483),
                    c = n.n(o);
                function l(e) {
                    engine.call('PlaySound', e);
                }
                const _ = (e) => ({ transitionDelay: e / 20 + 's' }),
                    d = 'SwitcherBullet_base_3d',
                    u = 'SwitcherBullet_container_6e',
                    v = 'SwitcherBullet_base__selected_70',
                    w = 'SwitcherBullet_container__text_b3',
                    h = 'SwitcherBullet_finishedHover_37',
                    m = 'SwitcherBullet_base__finished_dd',
                    b = 'SwitcherBullet_base__hover_2a',
                    E = 'SwitcherBullet_iconSmall_b7',
                    p = 'SwitcherBullet_base__afterCurrent_cd',
                    f = 'SwitcherBullet_iconBig_dc',
                    g = 'SwitcherBullet_base__currentSelected_24',
                    y = 'SwitcherBullet_iconText_11',
                    S = 'SwitcherBullet_iconTextGlow_25',
                    O = 'SwitcherBullet_clickArea_ed',
                    T = 'SwitcherBullet_base__disabled_b9',
                    k = 'SwitcherBullet_disabled_b5',
                    x = 'SwitcherBullet_number_b4',
                    M = 'SwitcherBullet_currentText_f9',
                    P = 'SwitcherBullet_text_37',
                    C = 'SwitcherBullet_texture_1e',
                    L = ({
                        numberToDisplay: e,
                        index: t,
                        selectedIndex: n,
                        previousSelectedIndex: a,
                        onChange: s,
                        currentIndex: o,
                        currentText: w,
                        isDisabled: y = !1,
                        mouseEnterSound: S,
                        clickSound: P,
                    }) => {
                        const C = t !== n,
                            L = (0, r.useState)(!1),
                            N = L[0],
                            D = L[1],
                            A = (0, r.useCallback)(() => {
                                D(!0), C && l(S);
                            }, [C, S, D]),
                            B = (0, r.useCallback)(() => {
                                C && (l(P), s(e));
                            }, [C, P, e, s]),
                            I = (0, r.useCallback)(() => {
                                D(!1);
                            }, [D]),
                            F = o || 0,
                            V = c()(
                                d,
                                t === n && v,
                                t === n && t === F && g,
                                t > F && t !== n && p,
                                t <= F && m,
                                N && b,
                                y && T,
                            ),
                            U = (0, r.useMemo)(
                                () =>
                                    ((e, t, n) =>
                                        e === t
                                            ? _(0)
                                            : e === n
                                              ? _(Math.abs(e - t) - 2)
                                              : (n > t && e > t && e < n) || (n < t && e < t && e > n)
                                                ? _(Math.abs(e - t) - 1)
                                                : void 0)(t, a, n),
                                [t, a, n],
                            ),
                            K = (0, r.useCallback)(
                                () => ((t === n && t === F) || t === n ? 'big' : 'small'),
                                [t, n, F],
                            ),
                            q = (0, r.useMemo)(() => {
                                const e = R.images.gui.maps.icons.components.switcher.numbers,
                                    n = t > F ? 'light' : 'dark';
                                return Object.assign({}, U, {
                                    backgroundImage: `url(${e.$dyn(`number_${t}_${K()}_${n}`)})`,
                                });
                            }, [t, F, U, K]);
                        return i().createElement(
                            'div',
                            { className: V },
                            i().createElement(
                                'div',
                                { className: u, style: U },
                                i().createElement('div', { className: h, style: U }),
                                i().createElement('div', { className: E, style: U }),
                                i().createElement('div', { className: f, style: U }),
                                i().createElement('div', { className: k }),
                                i().createElement('div', { className: x, style: q }),
                                i().createElement('div', {
                                    className: O,
                                    style: U,
                                    onClick: B,
                                    onMouseEnter: A,
                                    onMouseLeave: I,
                                }),
                            ),
                            w && t === o && i().createElement('div', { className: M }, w),
                        );
                    },
                    N = ({
                        numberToDisplay: e,
                        index: t,
                        selectedIndex: n,
                        previousSelectedIndex: a,
                        onChange: s,
                        currentIndex: o = 0,
                        isDisabled: h = !1,
                        mouseEnterSound: E,
                        clickSound: f,
                        styleID: k,
                    }) => {
                        const x = t === n,
                            M = (0, r.useState)(!1),
                            L = M[0],
                            N = M[1],
                            D = (0, r.useCallback)(() => {
                                N(!0), x || l(E);
                            }, [x, E, N]),
                            A = (0, r.useCallback)(() => {
                                x || (l(f), s(e));
                            }, [x, f, e, s]),
                            B = (0, r.useCallback)(() => {
                                N(!1);
                            }, [N]),
                            I = R.strings.vehicle_customization.style_switcher.$dyn(`style_${k}`).$dyn(`level${e}`),
                            F = c()(d, x && v, x && t === o && g, t > o && t !== n && p, t <= o && m, L && b, h && T),
                            V = (0, r.useMemo)(
                                () =>
                                    ((e, t, n) =>
                                        e === t
                                            ? _(0)
                                            : e === n
                                              ? _(Math.abs(e - t) - 2)
                                              : (n > t && e > t && e < n) || (n < t && e < t && e > n)
                                                ? _(Math.abs(e - t) - 1)
                                                : void 0)(t, a, n),
                                [t, a, n],
                            ),
                            U = c()(u, w);
                        return i().createElement(
                            'div',
                            { className: F },
                            i().createElement(
                                'div',
                                { className: U, style: V },
                                x && i().createElement('div', { className: C }),
                                !x && i().createElement('div', { className: S }),
                                i().createElement('div', { className: y, style: V }),
                                i().createElement('div', { className: P }, I),
                                i().createElement('div', {
                                    className: O,
                                    style: V,
                                    onClick: A,
                                    onMouseEnter: D,
                                    onMouseLeave: B,
                                }),
                            ),
                        );
                    },
                    D = 'SwitcherSeparator_base_c1',
                    A = 'SwitcherSeparator_base__isBeforeSelectedBullet_e0',
                    B = 'SwitcherSeparator_base__notAnimated_58',
                    I = 'SwitcherSeparator_base__scaled_57',
                    F = 'SwitcherSeparator_base__rightTransformOrigin_16',
                    V = 'SwitcherSeparator_base__leftTransformOrigin_7f',
                    U = 'SwitcherSeparator_base__transitionTransformOrigin_b2',
                    K = ({ index: e, selectedIndex: t, previousSelectedIndex: n, isAnimated: r = !0 }) => {
                        const a = ((e, t, n) =>
                                e === t + 1 || e === t - 1
                                    ? _(0)
                                    : e === n + 1 || e === n - 1
                                      ? _(Math.abs(n - t) - 2)
                                      : (n > t && e > t && e < n + 1) || (n < t && e < t && e > n - 1)
                                        ? _(Math.abs(e - t) - 1)
                                        : void 0)(e, n, t),
                            s = 1 === Math.abs(e - t),
                            o = 1 === Math.abs(e - n),
                            l = ((e, t, n, r) =>
                                e === n + 1 || (e === t + 1 && !r)
                                    ? F
                                    : e === n - 1 || (e === t - 1 && !r)
                                      ? V
                                      : void 0)(e, n, t, s),
                            d = c()(
                                D,
                                r && e < t && A,
                                r && o && s && U,
                                r && (e === t + 1 || e === t - 1) && I,
                                r && l,
                                !r && B,
                            );
                        return i().createElement('div', { className: d, style: a });
                    },
                    q = (e, t, n) => Math.min(Math.max(e, t), n),
                    z = {
                        base: 'Switcher_base_7a',
                        base__hasCurrentText: 'Switcher_base__hasCurrentText_6f',
                        base__small: 'Switcher_base__small_6a',
                        base__isVisible: 'Switcher_base__isVisible_43',
                    };
                let W;
                !(function (e) {
                    (e[(e.digital = 0)] = 'digital'), (e[(e.text = 1)] = 'text');
                })(W || (W = {}));
                const j = (e, t) => ('number' == typeof e ? 2 * (e - t) : void 0);
                let G;
                !(function (e) {
                    e.small = 'small';
                })(G || (G = {}));
                const $ = ({
                        numberOfBullets: e,
                        selectedNumber: t,
                        onChange: n,
                        currentText: a,
                        currentNumber: s,
                        startNumber: o = 1,
                        isBulletsBeforeCurrentDisabled: l = !1,
                        size: _,
                        mouseEnterSound: d = 'highlight',
                        clickSound: u = 'play',
                        isArabic: v = !1,
                        hasLightShadows: w = !1,
                        styleID: h = 0,
                        switcherType: m = W.digital,
                    }) => {
                        const b = (0, r.useState)(!1),
                            E = b[0],
                            p = b[1];
                        (0, r.useEffect)(
                            () =>
                                ((e, t) => {
                                    let n;
                                    const r = setTimeout(() => {
                                        n = e();
                                    }, t);
                                    return () => {
                                        'function' == typeof n && n(), clearTimeout(r);
                                    };
                                })(() => p(!0), 0),
                            [],
                        );
                        const f = o + e - 1,
                            g = q(t, l && s ? s : o, f),
                            y = 'number' == typeof s ? q(s, o, f) : void 0,
                            S = j(g, o),
                            O = j(y, o),
                            T = (0, r.useRef)(S);
                        (0, r.useEffect)(() => {
                            T.current = S;
                        });
                        const k = T.current,
                            x = c()(
                                z.base,
                                a && void 0 !== O && z.base__hasCurrentText,
                                _ && z[`base__${_}`],
                                E && z.base__isVisible,
                            ),
                            M = (0, r.useMemo)(
                                () =>
                                    ((e, t) => {
                                        const n = [];
                                        for (let r = e; r <= t; r++) n.push(r);
                                        return n;
                                    })(o, f),
                                [f, o],
                            ),
                            P = m === W.digital;
                        return i().createElement(
                            'div',
                            { className: x },
                            M.map((e, t) => {
                                const r = 2 * t,
                                    s = !(!l || !O) && r < O;
                                return i().createElement(
                                    i().Fragment,
                                    { key: t },
                                    t > 0 &&
                                        i().createElement(K, {
                                            index: r - 1,
                                            selectedIndex: S,
                                            previousSelectedIndex: k,
                                            isAnimated: P,
                                        }),
                                    P
                                        ? i().createElement(L, {
                                              index: r,
                                              selectedIndex: S,
                                              previousSelectedIndex: k,
                                              numberToDisplay: e,
                                              currentIndex: O,
                                              currentText: a,
                                              onChange: n,
                                              isDisabled: s,
                                              mouseEnterSound: d,
                                              clickSound: u,
                                              isArabic: v,
                                              hasLightShadows: w,
                                          })
                                        : i().createElement(N, {
                                              index: r,
                                              selectedIndex: S,
                                              previousSelectedIndex: k,
                                              numberToDisplay: e,
                                              currentIndex: O,
                                              onChange: n,
                                              isDisabled: s,
                                              mouseEnterSound: d,
                                              clickSound: u,
                                              hasLightShadows: w,
                                              styleID: h,
                                          }),
                                );
                            }),
                        );
                    },
                    H = (e = 1) => {
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
                    Y = (e, t) => e.split('.').reduce((e, t) => e && e[t], t),
                    Z = (e) => {
                        const t = (0, r.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    };
                var X = n(916);
                const Q = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    J = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    ee = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, n) => {
                                const r = Y(`${e}.${n}`, window);
                                return Q(r) ? t(e, n, r) : `${e}.${n}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    te = (e) => {
                        const t = ((e) => {
                                const t = H(),
                                    n = t.caller,
                                    r = t.resId,
                                    i = window.__feature && window.__feature !== n && n ? `subViews.${n}` : '';
                                return { modelPrefix: i, modelPath: J(i, e || ''), resId: r };
                            })(),
                            n = t.modelPrefix,
                            r = e.split('.');
                        if (r.length > 0) {
                            const e = [r[0]];
                            return (
                                r.reduce((t, r) => {
                                    const i = Y(J(n, `${t}.${r}`), window);
                                    return Q(i) ? (e.push(i.id), `${t}.${r}.value`) : (e.push(r), `${t}.${r}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    },
                    ne = X.Sw.instance;
                let re;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(re || (re = {}));
                const ie = (e = 'model', t = re.Deep) => {
                        const n = (0, r.useState)(0),
                            i = (n[0], n[1]),
                            a = (0, r.useMemo)(() => H(), []),
                            s = a.caller,
                            o = a.resId,
                            c = (0, r.useMemo)(
                                () => (window.__feature && window.__feature !== s ? `subViews.${s}.${e}` : e),
                                [s, e],
                            ),
                            l = (0, r.useState)(() =>
                                ((e) => {
                                    const t = Y(e, window);
                                    for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                    return Q(t) ? t.value : t;
                                })(ee(c)),
                            ),
                            _ = l[0],
                            d = l[1],
                            u = (0, r.useRef)(-1);
                        return (
                            Z(() => {
                                if (
                                    ('boolean' == typeof t &&
                                        ((t = t ? re.Deep : re.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    t !== re.None)
                                ) {
                                    const n = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            t === re.Deep
                                                ? (e === _ && i((e) => e + 1), d(e))
                                                : d(Object.assign([], e));
                                        },
                                        r = te(e);
                                    u.current = ne.addCallback(r, n, o, t === re.Deep);
                                }
                            }),
                            (0, r.useEffect)(() => {
                                if (t !== re.None)
                                    return () => {
                                        ne.removeCallback(u.current, o);
                                    };
                            }, [o, t]),
                            _
                        );
                    },
                    ae = 'App_base_c7',
                    se = 'App_content_8f',
                    oe = 'App_content__text_41',
                    ce = () => {
                        const e = ie(),
                            t = e.currentLevel,
                            n = e.selectedLevel,
                            a = e.numberOfBullets,
                            s = void 0 === a ? 4 : a,
                            o = e.isBulletsBeforeCurrentDisabled,
                            l = e.switcherType,
                            _ = e.styleID,
                            d = e.onChange,
                            u = (0, r.useCallback)((e) => d({ selectedLevel: e }), [d]),
                            v = l === W.text,
                            w = v ? void 0 : 'small',
                            h = c()(se, v && oe);
                        return i().createElement(
                            'div',
                            { className: ae },
                            i().createElement(
                                'div',
                                { className: h },
                                i().createElement($, {
                                    numberOfBullets: s,
                                    currentNumber: t,
                                    selectedNumber: n,
                                    onChange: u,
                                    isBulletsBeforeCurrentDisabled: o,
                                    size: w,
                                    switcherType: l,
                                    styleID: _,
                                }),
                            ),
                        );
                    };
                engine.whenReady.then(() => {
                    s().render(i().createElement(ce, null), document.getElementById('root'));
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
                var i = 1 / 0;
                for (c = 0; c < deferred.length; c++) {
                    for (var [t, n, r] = deferred[c], a = !0, s = 0; s < t.length; s++)
                        (!1 & r || i >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((a = !1), r < i && (i = r));
                    if (a) {
                        deferred.splice(c--, 1);
                        var o = n();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            r = r || 0;
            for (var c = deferred.length; c > 0 && deferred[c - 1][2] > r; c--) deferred[c] = deferred[c - 1];
            deferred[c] = [t, n, r];
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
        (__webpack_require__.j = 407),
        (() => {
            var e = { 407: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var r,
                        i,
                        [a, s, o] = n,
                        c = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (r in s) __webpack_require__.o(s, r) && (__webpack_require__.m[r] = s[r]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (t && t(n); c < a.length; c++)
                        (i = a[c]), __webpack_require__.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                    return __webpack_require__.O(l);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [858], () => __webpack_require__(601));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
