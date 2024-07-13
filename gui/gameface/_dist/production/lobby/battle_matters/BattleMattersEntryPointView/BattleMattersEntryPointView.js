(() => {
    'use strict';
    var __webpack_modules__ = {
            768: (e, t, n) => {
                n.d(t, { O: () => te });
                var r = {};
                n.r(r),
                    n.d(r, { mouse: () => p, off: () => _, on: () => u, onResize: () => c, onScaleUpdated: () => d });
                var o = {};
                n.r(o),
                    n.d(o, {
                        events: () => r,
                        getMouseGlobalPosition: () => h,
                        getSize: () => g,
                        graphicsQuality: () => w,
                        playSound: () => b,
                        setRTPC: () => v,
                    });
                var a = {};
                n.r(a), n.d(a, { getBgUrl: () => k, getTextureUrl: () => O });
                var i = {};
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
                n.r(i),
                    n.d(i, {
                        addModelObserver: () => B,
                        addPreloadTexture: () => x,
                        children: () => a,
                        displayStatus: () => P,
                        displayStatusIs: () => Q,
                        events: () => C,
                        extraSize: () => J,
                        forceTriggerMouseMove: () => Z,
                        freezeTextureBeforeResize: () => G,
                        getBrowserTexturePath: () => N,
                        getDisplayStatus: () => X,
                        getScale: () => U,
                        getSize: () => z,
                        getViewGlobalPosition: () => V,
                        isEventHandled: () => Y,
                        isFocused: () => K,
                        pxToRem: () => $,
                        remToPx: () => q,
                        resize: () => j,
                        sendEvent: () => D,
                        setAnimateWindow: () => W,
                        setEventHandled: () => H,
                        setInputPaddingsRem: () => I,
                        setSidePaddingsRem: () => F,
                        whenTutorialReady: () => ee,
                    });
                const c = s('clientResized'),
                    d = s('self.onScaleUpdated'),
                    u = (e, t) => engine.on(e, t),
                    _ = (e, t) => engine.off(e, t),
                    m = { down: s('mousedown'), up: s('mouseup'), move: s('mousemove') };
                const p = (function () {
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
                                    const a = `mouse${t}`,
                                        i = m[t]((e) => n([e, 'outside']));
                                    function s(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, s),
                                        r(),
                                        () => {
                                            o &&
                                                (i(),
                                                window.removeEventListener(a, s),
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
                function b(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function v(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                function g(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function h(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const w = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    E = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    f = Object.keys(E).reduce((e, t) => ((e[t] = () => b(E[t])), e), {}),
                    y = { play: Object.assign({}, f, { sound: b }), setRTPC: v };
                function O(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function k(e, t, n) {
                    return `url(${O(e, t, n)})`;
                }
                const P = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    C = {
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
                    T = ['args'];
                const S = 2,
                    M = 16,
                    R = 32,
                    A = 64,
                    L = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const o = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        o = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                                    return o;
                                })(t, T);
                            return void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, a, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, a));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var r;
                    },
                    D = {
                        close(e) {
                            L('popover' === e ? S : R);
                        },
                        minimize() {
                            L(A);
                        },
                        move(e) {
                            L(M, { isMouseEvent: !0, on: e });
                        },
                    };
                function x(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function I(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function N(e, t, n, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, r);
                }
                function B(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function F(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function z(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function j(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function V(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: q(t.x), y: q(t.y) };
                }
                function G() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function U() {
                    return viewEnv.getScale();
                }
                function $(e) {
                    return viewEnv.pxToRem(e);
                }
                function q(e) {
                    return viewEnv.remToPx(e);
                }
                function W(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function K() {
                    return viewEnv.isFocused();
                }
                function H() {
                    return viewEnv.setEventHandled();
                }
                function Y() {
                    return viewEnv.isEventHandled();
                }
                function Z() {
                    viewEnv.forceTriggerMouseMove();
                }
                function X() {
                    return viewEnv.getShowingStatus();
                }
                const Q = Object.keys(P).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === P[t]), e), {}),
                    J = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    ee = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : C.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    te = { view: i, client: o, sound: y };
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
                    })(o || (o = {}));
            },
            358: (e, t, n) => {
                n.d(t, { Z: () => a });
                var r = n(768);
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
                        const a = r.O.view.addModelObserver(e, n, o);
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
                o.__instance = void 0;
                const a = o;
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
                n.d(t, { B0: () => s, ry: () => g });
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
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = n(521),
                    m = n(768);
                const p = ['args'];
                function b(e, t, n, r, o, a, i) {
                    try {
                        var s = e[a](i),
                            l = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    s.done ? t(l) : Promise.resolve(l).then(r, o);
                }
                const v = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                    return new Promise(function (r, o) {
                                        var a = e.apply(t, n);
                                        function i(e) {
                                            b(a, r, o, i, s, 'next', e);
                                        }
                                        function s(e) {
                                            b(a, r, o, i, s, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    h = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const o = t.args,
                                a = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        o = {},
                                        a = Object.keys(e);
                                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                                    return o;
                                })(t, p);
                            void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, a, {
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var r;
                    },
                    w = () => h(s.CLOSE),
                    E = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var f = n(572);
                const y = o.instance,
                    O = {
                        DataTracker: a.Z,
                        ViewModel: f.Z,
                        ViewEventType: s,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: u,
                        makeGlobalBoundingBox: v,
                        sendMoveEvent: (e) => h(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: w,
                        sendClosePopOverEvent: () => h(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            h(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, r, o = R.invalid('resId'), a) => {
                            const i = m.O.view.getViewGlobalPosition(),
                                l = n.getBoundingClientRect(),
                                c = l.x,
                                d = l.y,
                                u = l.width,
                                _ = l.height,
                                p = {
                                    x: m.O.view.pxToRem(c) + i.x,
                                    y: m.O.view.pxToRem(d) + i.y,
                                    width: m.O.view.pxToRem(u),
                                    height: m.O.view.pxToRem(_),
                                };
                            h(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: o,
                                direction: t,
                                bbox: v(p),
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
                            E(e, w);
                        },
                        handleViewEvent: h,
                        onBindingsReady: g,
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
                        ClickOutsideManager: y,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = O;
            },
            613: (e, t, n) => {
                n.d(t, { Z5: () => r, cy: () => o });
                const r = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    o = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, n) => userLocale.getTimeFormat(e, t, void 0 === n || n),
                        getTimeString: (e, t, n) => userLocale.getTimeString(e, t, void 0 === n || n),
                    };
            },
            194: (e, t, n) => {
                var r = n(179),
                    o = n.n(r),
                    a = n(493),
                    i = n.n(a);
                let s;
                !(function (e) {
                    (e[(e.Normal = 0)] = 'Normal'), (e[(e.HasToken = 1)] = 'HasToken'), (e[(e.Error = 2)] = 'Error');
                })(s || (s = {}));
                function l() {
                    return !1;
                }
                console.log;
                var c = n(174),
                    d = n(768);
                function u(e, t) {
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
                        var r = 0;
                        return function () {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function _(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r;
                }
                const m = (e) => (0 === e ? window : window.subViews.get(e));
                var p = n(946);
                const b = ((e, t) => {
                        const n = (0, r.createContext)({});
                        return [
                            function ({ mode: a = 'real', options: i, children: s, mocks: _ }) {
                                const p = (0, r.useRef)([]),
                                    b = (n, r, o) => {
                                        var a;
                                        const i = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: n = m,
                                                context: r = 'model',
                                            } = {}) {
                                                const o = new Map();
                                                function a(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? o.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, n) => {
                                                        n.forEach((t) => {
                                                            const n = o.get(t);
                                                            void 0 !== n && n(e);
                                                        });
                                                    });
                                                });
                                                const i = (e) => {
                                                    const o = n(t),
                                                        a = r.split('.').reduce((e, t) => e[t], o);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? a
                                                        : e.split('.').reduce((e, t) => {
                                                              const n = e[t];
                                                              return 'function' == typeof n ? n.bind(e) : n;
                                                          }, a);
                                                };
                                                return {
                                                    subscribe: (n, a) => {
                                                        const s = 'string' == typeof a ? `${r}.${a}` : r,
                                                            l = d.O.view.addModelObserver(s, t, !0);
                                                        return o.set(l, n), e && n(i(a)), l;
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
                                                        for (var e, n = u(o.keys()); !(e = n()).done; ) a(e.value, t);
                                                    },
                                                    unsubscribe: a,
                                                };
                                            })(r),
                                            s =
                                                'real' === n
                                                    ? i
                                                    : Object.assign({}, i, {
                                                          readByPath:
                                                              null != (a = null == o ? void 0 : o.getter)
                                                                  ? a
                                                                  : () => {},
                                                      }),
                                            _ = (e) =>
                                                'mocks' === n ? (null == o ? void 0 : o.getter(e)) : s.readByPath(e),
                                            b = (e) => p.current.push(e),
                                            v = e({
                                                mode: n,
                                                readByPath: _,
                                                externalModel: s,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const r = null != t ? t : _(e),
                                                            o = c.LO.box(r, { equals: l });
                                                        return (
                                                            'real' === n &&
                                                                s.subscribe(
                                                                    (0, c.aD)((e) => o.set(e)),
                                                                    e,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const r = null != t ? t : _(e),
                                                            o = c.LO.box(r, { equals: l });
                                                        return (
                                                            'real' === n &&
                                                                s.subscribe(
                                                                    (0, c.aD)((e) => o.set(e)),
                                                                    e,
                                                                ),
                                                            o
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const r = _(t);
                                                        if (Array.isArray(e)) {
                                                            const o = e.reduce(
                                                                (e, t) => ((e[t] = c.LO.box(r[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === n &&
                                                                    s.subscribe(
                                                                        (0, c.aD)((t) => {
                                                                            e.forEach((e) => {
                                                                                o[e].set(t[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                        {
                                                            const o = e,
                                                                a = Object.entries(o),
                                                                i = a.reduce(
                                                                    (e, [t, n]) => ((e[n] = c.LO.box(r[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === n &&
                                                                    s.subscribe(
                                                                        (0, c.aD)((e) => {
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
                                                cleanup: b,
                                            }),
                                            g = { mode: n, model: v, externalModel: s, cleanup: b };
                                        return {
                                            model: v,
                                            controls: 'mocks' === n && o ? o.controls(g) : t(g),
                                            externalModel: s,
                                            mode: n,
                                        };
                                    },
                                    v = (0, r.useRef)(!1),
                                    g = (0, r.useState)(a),
                                    h = g[0],
                                    w = g[1],
                                    E = (0, r.useState)(() => b(a, i, _)),
                                    f = E[0],
                                    y = E[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        v.current ? y(b(h, i, _)) : (v.current = !0);
                                    }, [_, h, i]),
                                    (0, r.useEffect)(() => {
                                        w(a);
                                    }, [a]),
                                    (0, r.useEffect)(
                                        () => () => {
                                            f.externalModel.dispose(), p.current.forEach((e) => e());
                                        },
                                        [f],
                                    ),
                                    o().createElement(n.Provider, { value: f }, s)
                                );
                            },
                            () => (0, r.useContext)(n),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const t = { root: e.object() };
                            return Object.assign({}, t, {
                                computes: {
                                    hasProgress: (0, p.Om)(() => {
                                        const e = t.root.get(),
                                            n = e.maxProgress,
                                            r = e.state,
                                            o = e.isCompleted;
                                        return n > 0 && r !== s.Error && !o;
                                    }),
                                },
                            });
                        },
                        ({ externalModel: e }) => ({ onClick: e.createCallbackNoArgs('onClick') }),
                    ),
                    v = b[0],
                    g = b[1];
                var h = n(483),
                    w = n.n(h);
                const E = {
                    base: 'ProgressBar_base_45',
                    base__small: 'ProgressBar_base__small_df',
                    background: 'ProgressBar_background_51',
                    background__small: 'ProgressBar_background__small_46',
                    lineWrapper: 'ProgressBar_lineWrapper_6a',
                };
                let f, y;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium');
                })(f || (f = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(y || (y = {}));
                const O = ({ size: e = f.Default }) => {
                        const t = w()(E.background, E[`background__${e}`]);
                        return o().createElement('div', { className: t });
                    },
                    k = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    P = ({ size: e }) => {
                        const t = w()(k.base, k[`base__${e}`]);
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
                    T = (0, r.memo)(
                        ({ size: e, lineRef: t, disabled: n, baseStyles: r, isComplete: a, withoutBounce: i }) => {
                            const s = w()(
                                    C.base,
                                    C[`base__${e}`],
                                    n && C.base__disabled,
                                    a && C.base__finished,
                                    i && C.base__withoutBounce,
                                ),
                                l = !n && !a;
                            return o().createElement(
                                'div',
                                { className: s, style: r, ref: t },
                                o().createElement('div', { className: C.pattern }),
                                o().createElement('div', { className: C.gradient }),
                                l && o().createElement(P, { size: e }),
                            );
                        },
                    ),
                    S = ({ size: e, value: t, lineRef: n, disabled: a, onComplete: i }) => {
                        const s = (0, r.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                            l = 100 === t;
                        return (
                            (0, r.useEffect)(() => {
                                l && i && i();
                            }, [l, i]),
                            o().createElement(T, { size: e, disabled: a, baseStyles: s, isComplete: l, lineRef: n })
                        );
                    },
                    M = (e, t) => {
                        let n;
                        const r = setTimeout(() => {
                            n = e();
                        }, t);
                        return () => {
                            'function' == typeof n && n(), clearTimeout(r);
                        };
                    };
                let A, L;
                !(function (e) {
                    (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                })(A || (A = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(L || (L = {}));
                const D = 'ProgressBarDeltaSimple_base_6c',
                    x = 'ProgressBarDeltaSimple_delta_99',
                    I = (0, r.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: n,
                            from: a,
                            size: i,
                            to: s,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const d = s < a,
                                u = (0, r.useState)(L.Idle),
                                _ = u[0],
                                m = u[1],
                                p = _ === L.In,
                                b = _ === L.End,
                                v = _ === L.Idle,
                                g = (0, r.useCallback)(
                                    (e) => {
                                        m(e), c && c(e);
                                    },
                                    [c],
                                );
                            (0, r.useEffect)(() => {
                                if (v && !n) {
                                    return M(() => {
                                        g(L.In);
                                    }, t);
                                }
                            }, [g, n, v, t]),
                                (0, r.useEffect)(() => {
                                    if (p) {
                                        return M(() => {
                                            l && l(), g(L.End);
                                        }, e + t);
                                    }
                                }, [g, p, l, t, e]);
                            const h = (0, r.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [d ? 'left' : 'right']: '0',
                                    }),
                                    [d, t, e],
                                ),
                                w = (0, r.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${t}ms`,
                                        [d ? 'left' : 'right']: '0',
                                    }),
                                    [d, t, e],
                                ),
                                E = (0, r.useMemo)(
                                    () => ({ width: `${Math.abs(a - s)}%`, left: `${d ? s : a}%` }),
                                    [a, d, s],
                                );
                            return b
                                ? null
                                : o().createElement(
                                      'div',
                                      { className: D, style: E },
                                      o().createElement(
                                          'div',
                                          { style: v ? h : w, className: x },
                                          o().createElement(P, { size: i }),
                                      ),
                                  );
                        },
                    ),
                    N = (0, r.memo)(
                        ({
                            to: e,
                            size: t,
                            from: n,
                            lineRef: a,
                            disabled: i,
                            isComplete: s,
                            animationSettings: l,
                            onChangeAnimationState: c,
                            onEndAnimation: d,
                        }) => {
                            const u = (0, r.useMemo)(
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
                                o().createElement(T, {
                                    size: t,
                                    lineRef: a,
                                    disabled: i,
                                    isComplete: s,
                                    baseStyles: u,
                                }),
                                n >= 0 &&
                                    o().createElement(I, {
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
                    B = 'ProgressBarDeltaGrow_base_7e',
                    F = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    z = 'ProgressBarDeltaGrow_glow_68',
                    j = (e) => (e ? { left: 0 } : { right: 0 }),
                    V = (e, t) => (e ? { right: 100 - t + '%' } : { left: `${t}%` }),
                    G = (e) => ({ transitionDuration: `${e}ms` }),
                    U = (0, r.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: t,
                            freezed: n,
                            from: a,
                            size: i,
                            to: s,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                            className: d,
                        }) => {
                            const u = s < a,
                                _ = (0, r.useState)(A.Idle),
                                m = _[0],
                                p = _[1],
                                b = m === A.End,
                                v = m === A.Idle,
                                g = m === A.Grow,
                                h = m === A.Shrink,
                                E = (0, r.useCallback)(
                                    (e) => {
                                        p(e), c && c(e);
                                    },
                                    [c],
                                ),
                                f = (0, r.useCallback)(
                                    (e, t) =>
                                        M(() => {
                                            E(e);
                                        }, t),
                                    [E],
                                );
                            (0, r.useEffect)(() => {
                                if (!n)
                                    return v
                                        ? f(A.Grow, t)
                                        : g
                                          ? f(A.Shrink, e)
                                          : h
                                            ? f(A.End, e)
                                            : void (b && l && l());
                            }, [f, n, b, g, v, h, l, t, e]);
                            const y = (0, r.useMemo)(() => Object.assign({ width: '100%' }, G(e), j(u)), [u, e]),
                                O = (0, r.useMemo)(() => Object.assign({ width: '0%' }, G(e), j(u)), [u, e]),
                                k = (0, r.useMemo)(() => Object.assign({ width: '0%' }, V(u, a), G(e)), [a, u, e]),
                                C = (0, r.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(s - a)}%` }, V(u, a), G(e)),
                                    [a, u, s, e],
                                );
                            if (b) return null;
                            const T = w()(B, d, u && 0 === s && F);
                            return o().createElement(
                                'div',
                                { style: v ? k : C, className: T },
                                o().createElement(
                                    'div',
                                    { style: h ? O : y, className: z },
                                    o().createElement(P, { size: i }),
                                ),
                            );
                        },
                    ),
                    $ = (0, r.memo)(
                        ({
                            to: e,
                            size: t,
                            from: n,
                            lineRef: a,
                            disabled: i,
                            isComplete: s,
                            animationSettings: l,
                            onEndAnimation: c,
                            onChangeAnimationState: d,
                        }) => {
                            const u = e < n,
                                _ = (0, r.useState)(!1),
                                m = _[0],
                                p = _[1],
                                b = (0, r.useCallback)(
                                    (e) => {
                                        e === A.Shrink && p(!0), d && d(e);
                                    },
                                    [d],
                                ),
                                v = (0, r.useMemo)(() => ({ width: `${n}%`, transitionProperty: 'none' }), [n]),
                                g = (0, r.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${l.line.duration}ms` }),
                                    [l.line.duration, e],
                                );
                            return o().createElement(
                                o().Fragment,
                                null,
                                o().createElement(T, {
                                    size: t,
                                    lineRef: a,
                                    disabled: i,
                                    isComplete: s,
                                    withoutBounce: u && 0 === e,
                                    baseStyles: m ? g : v,
                                }),
                                n >= 0 &&
                                    o().createElement(U, {
                                        transitionDuration: l.delta.duration,
                                        transitionDelay: l.delta.delay,
                                        onChangeAnimationState: b,
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
                function W() {
                    return (
                        (W =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        W.apply(this, arguments)
                    );
                }
                const K = (0, r.memo)((e) => {
                        let t = e.onComplete,
                            n = e.onEndAnimation,
                            a = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    o = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                                return o;
                            })(e, q);
                        const i = (0, r.useState)(!1),
                            s = i[0],
                            l = i[1],
                            c = (0, r.useCallback)(() => {
                                const e = 100 === a.to;
                                e !== s && l(e), e && t && t(), n && n();
                            }, [s, t, n, a.to]);
                        switch (a.animationSettings.type) {
                            case y.Simple:
                                return o().createElement(N, W({}, a, { onEndAnimation: c, isComplete: s }));
                            case y.Growing:
                                return o().createElement($, W({}, a, { onEndAnimation: c, isComplete: s }));
                            default:
                                return null;
                        }
                    }),
                    H = ['onEndAnimation'];
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
                const Z = (0, r.memo)((e) => {
                    let t = e.onEndAnimation,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                o = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                            return o;
                        })(e, H);
                    const a = (0, r.useRef)({}),
                        i = (0, r.useCallback)(() => {
                            (a.current.from = void 0), t && t();
                        }, [t]),
                        s = 'number' == typeof a.current.from ? a.current.from : n.from;
                    return (
                        (a.current.from = s),
                        o().createElement(K, Y({}, n, { onEndAnimation: i, key: `${s}-${n.to}`, from: s }))
                    );
                });
                function X() {
                    return (
                        (X =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        X.apply(this, arguments)
                    );
                }
                const Q = (0, r.memo)(
                        ({
                            size: e,
                            value: t,
                            lineRef: n,
                            disabled: r,
                            deltaFrom: a,
                            animationSettings: i,
                            onEndAnimation: s,
                            onChangeAnimationState: l,
                            onComplete: c,
                        }) => {
                            if (a === t)
                                return o().createElement(S, {
                                    key: `${a}-${t}`,
                                    size: e,
                                    value: t,
                                    lineRef: n,
                                    disabled: r,
                                    onComplete: c,
                                });
                            const d = {
                                from: a,
                                to: t,
                                size: e,
                                lineRef: n,
                                disabled: r,
                                animationSettings: i,
                                onComplete: c,
                                onEndAnimation: s,
                                onChangeAnimationState: l,
                            };
                            return i.withStack
                                ? o().createElement(Z, d)
                                : o().createElement(K, X({ key: `${a}-${t}` }, d));
                        },
                    ),
                    J = (e) => ({
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
                    ee = (e, t, n) => (n < e ? e : n > t ? t : n),
                    te = (e, t, n) => {
                        if ('number' == typeof n) {
                            return (ee(0, t, n) / t) * 100;
                        }
                        return e;
                    },
                    ne = {
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
                    re = {
                        freezed: !1,
                        withStack: !1,
                        type: y.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    oe = (0, r.memo)(
                        ({
                            maxValue: e = 100,
                            theme: t = ne,
                            size: n = f.Default,
                            animationSettings: a = re,
                            disabled: i = !1,
                            withoutBackground: s = !1,
                            value: l,
                            deltaFrom: c,
                            lineRef: d,
                            onChangeAnimationState: u,
                            onEndAnimation: _,
                            onComplete: m,
                        }) => {
                            const p = ((e, t, n) =>
                                (0, r.useMemo)(() => {
                                    const r = (ee(0, t, e) / t) * 100;
                                    return { value: r, deltaFrom: te(r, t, n) };
                                }, [n, t, e]))(l, e, c);
                            return o().createElement(
                                'div',
                                { className: w()(E.base, E[`base__${n}`]), style: J(t) },
                                !s && o().createElement(O, { size: n }),
                                o().createElement(Q, {
                                    size: n,
                                    lineRef: d,
                                    disabled: i,
                                    value: p.value,
                                    deltaFrom: p.deltaFrom,
                                    animationSettings: a,
                                    onEndAnimation: _,
                                    onChangeAnimationState: u,
                                    onComplete: m,
                                }),
                            );
                        },
                    );
                var ae = n(916);
                const ie = [
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
                function se(e) {
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
                const le = (e, t, n = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: ae.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: r,
                                },
                                n,
                            ),
                        );
                    },
                    ce = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            o = e.args,
                            a = e.onMouseEnter,
                            i = e.onMouseLeave,
                            s = e.onMouseDown,
                            l = e.onClick,
                            c = e.ignoreShowDelay,
                            d = void 0 !== c && c,
                            u = e.ignoreMouseClick,
                            _ = void 0 !== u && u,
                            m = e.decoratorId,
                            p = void 0 === m ? 0 : m,
                            b = e.isEnabled,
                            v = void 0 === b || b,
                            g = e.targetId,
                            h = void 0 === g ? 0 : g,
                            w = e.onShow,
                            E = e.onHide,
                            f = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    o = {},
                                    a = Object.keys(e);
                                for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                                return o;
                            })(e, ie);
                        const y = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            O = (0, r.useMemo)(
                                () =>
                                    h ||
                                    ((e = 1) => {
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
                                    })().resId,
                                [h],
                            ),
                            k = (0, r.useCallback)(() => {
                                (y.current.isVisible && y.current.timeoutId) ||
                                    (le(n, p, { isMouseEvent: !0, on: !0, arguments: se(o) }, O),
                                    w && w(),
                                    (y.current.isVisible = !0));
                            }, [n, p, o, O, w]),
                            P = (0, r.useCallback)(() => {
                                if (y.current.isVisible || y.current.timeoutId) {
                                    const e = y.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (y.current.timeoutId = 0)),
                                        le(n, p, { on: !1 }, O),
                                        y.current.isVisible && E && E(),
                                        (y.current.isVisible = !1);
                                }
                            }, [n, p, O, E]),
                            C = (0, r.useCallback)((e) => {
                                y.current.isVisible &&
                                    ((y.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (y.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(y.current.prevTarget) && P();
                                    }, 200)));
                            }, []);
                        (0, r.useEffect)(() => {
                            const e = y.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', C, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', C, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === v && P();
                            }, [v, P]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', P),
                                    () => {
                                        window.removeEventListener('mouseleave', P), P();
                                    }
                                ),
                                [P],
                            );
                        return v
                            ? (0, r.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((T = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((y.current.timeoutId = window.setTimeout(k, d ? 100 : 400)),
                                                      a && a(e),
                                                      T && T(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              P(), null == i || i(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === _ && P(), null == l || l(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === _ && P(), null == s || s(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      f,
                                  ),
                              )
                            : t;
                        var T;
                    };
                function de(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const ue = {
                    playHighlight() {
                        de('highlight');
                    },
                    playClick() {
                        de('play');
                    },
                    playYes() {
                        de('yes1');
                    },
                };
                var _e = n(403);
                const me = 'App_base_a7',
                    pe = 'App_base__disabled_00',
                    be = 'App_bg_c0',
                    ve = 'App_hover_ba',
                    ge = 'App_icon_b7',
                    he = 'App_icon__logo_43',
                    we = 'App_icon__done_58',
                    Ee = 'App_icon__token_1e',
                    fe = 'App_icon__error_f7',
                    ye = 'App_level_e6',
                    Oe = 'App_progress_ad',
                    ke = 'App_blinkContainer_69',
                    Pe = 'App_shine_ed',
                    Ce = 'App_shine__left_b4',
                    Te = 'App_shine__right_db',
                    Se = 'App_shine__appear_4e',
                    Me = 'App_blink_c1',
                    Re = 'Level_base_5f',
                    Ae = 'Level_mask_e6',
                    Le = ({ value: e }) =>
                        o().createElement('div', { className: Re }, e, o().createElement('div', { className: Ae }, e)),
                    De = (0, _e.Pi)(() => {
                        const e = g(),
                            t = e.controls,
                            n = e.model,
                            r = n.root.get(),
                            a = r.state,
                            i = r.questNumber,
                            l = r.isCompleted,
                            c = r.currentProgress,
                            d = r.maxProgress,
                            u = w()(me, a === s.Error && pe);
                        return o().createElement(
                            ce,
                            { contentId: R.views.lobby.battle_matters.tooltips.BattleMattersEntryTooltipView('resId') },
                            o().createElement(
                                'div',
                                {
                                    className: u,
                                    id: 'battle-matters-entry-point',
                                    onClick: () => {
                                        t.onClick(), ue.playClick();
                                    },
                                    onMouseEnter: () => {
                                        ue.playHighlight();
                                    },
                                },
                                o().createElement('div', { className: be }),
                                o().createElement('div', { className: ve }),
                                o().createElement('div', { className: w()(ge, he) }),
                                l
                                    ? o().createElement('div', { className: w()(ge, we) })
                                    : o().createElement('div', { className: ye }, o().createElement(Le, { value: i })),
                                n.computes.hasProgress() &&
                                    o().createElement(
                                        'div',
                                        { className: Oe },
                                        o().createElement(oe, { size: f.Small, value: c, maxValue: d }),
                                    ),
                                a !== s.Error &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement('div', { className: w()(Pe, Se, Ce) }),
                                        o().createElement('div', { className: w()(Pe, Se, Te) }),
                                    ),
                                a === s.HasToken &&
                                    o().createElement(
                                        o().Fragment,
                                        null,
                                        o().createElement('div', { className: w()(ge, Ee) }),
                                        o().createElement('div', { className: w()(Pe, Ce) }),
                                        o().createElement('div', { className: w()(Pe, Te) }),
                                        o().createElement(
                                            'div',
                                            { className: ke },
                                            o().createElement('div', { className: Me }),
                                        ),
                                    ),
                                a === s.Error && o().createElement('div', { className: w()(ge, fe) }),
                            ),
                        );
                    });
                engine.whenReady.then(() => {
                    i().render(
                        o().createElement(v, null, o().createElement(De, null)),
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
        (__webpack_require__.O = (e, t, n, r) => {
            if (!t) {
                var o = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, n, r] = deferred[l], a = !0, i = 0; i < t.length; i++)
                        (!1 & r || o >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[i]))
                            ? t.splice(i--, 1)
                            : ((a = !1), r < o && (o = r));
                    if (a) {
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
        (__webpack_require__.j = 642),
        (() => {
            var e = { 642: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var r,
                        o,
                        [a, i, s] = n,
                        l = 0;
                    if (a.some((t) => 0 !== e[t])) {
                        for (r in i) __webpack_require__.o(i, r) && (__webpack_require__.m[r] = i[r]);
                        if (s) var c = s(__webpack_require__);
                    }
                    for (t && t(n); l < a.length; l++)
                        (o = a[l]), __webpack_require__.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
                    return __webpack_require__.O(c);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [965], () => __webpack_require__(194));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
