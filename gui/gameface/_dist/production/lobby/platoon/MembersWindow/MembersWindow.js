(() => {
    'use strict';
    var __webpack_modules__ = {
            768: (e, u, t) => {
                t.d(u, { O: () => ue });
                var n = {};
                t.r(n),
                    t.d(n, { mouse: () => _, off: () => d, on: () => E, onResize: () => l, onScaleUpdated: () => c });
                var r = {};
                t.r(r),
                    t.d(r, {
                        events: () => n,
                        getMouseGlobalPosition: () => C,
                        getSize: () => D,
                        graphicsQuality: () => B,
                        playSound: () => A,
                        setRTPC: () => F,
                    });
                var a = {};
                t.r(a), t.d(a, { getBgUrl: () => v, getTextureUrl: () => g });
                var o = {};
                function s(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                function i(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.r(o),
                    t.d(o, {
                        addModelObserver: () => I,
                        addPreloadTexture: () => P,
                        children: () => a,
                        displayStatus: () => h,
                        displayStatusIs: () => Q,
                        events: () => w,
                        extraSize: () => J,
                        forceTriggerMouseMove: () => X,
                        freezeTextureBeforeResize: () => W,
                        getBrowserTexturePath: () => x,
                        getDisplayStatus: () => Z,
                        getScale: () => $,
                        getSize: () => z,
                        getViewGlobalPosition: () => V,
                        isEventHandled: () => Y,
                        isFocused: () => q,
                        pxToRem: () => j,
                        remToPx: () => U,
                        resize: () => H,
                        sendEvent: () => O,
                        setAnimateWindow: () => G,
                        setEventHandled: () => K,
                        setInputPaddingsRem: () => R,
                        setSidePaddingsRem: () => L,
                        whenTutorialReady: () => ee,
                    });
                const l = s('clientResized'),
                    c = s('self.onScaleUpdated'),
                    E = (e, u) => engine.on(e, u),
                    d = (e, u) => engine.off(e, u),
                    m = { down: s('mousedown'), up: s('mouseup'), move: s('mousemove') };
                const _ = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function u() {
                        e.enabled && i(!1);
                    }
                    function t() {
                        e.enabled && i(!0);
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
                            : i(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const a = `mouse${u}`,
                                        o = m[u]((e) => t([e, 'outside']));
                                    function s(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, s),
                                        n(),
                                        () => {
                                            r &&
                                                (o(),
                                                window.removeEventListener(a, s),
                                                (e.listeners -= 1),
                                                n(),
                                                (r = !1));
                                        }
                                    );
                                };
                            })(t)),
                            u
                        ),
                        {},
                    );
                    return Object.assign({}, r, {
                        disable() {
                            (e.enabled = !1), n();
                        },
                        enable() {
                            (e.enabled = !0), n();
                        },
                        enableOutside() {
                            e.enabled && i(!0);
                        },
                        disableOutside() {
                            e.enabled && i(!1);
                        },
                    });
                })();
                function A(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error(`playSound('${e}'): `, u);
                    });
                }
                function F(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                function D(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function C(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const B = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    p = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    b = Object.keys(p).reduce((e, u) => ((e[u] = () => A(p[u])), e), {}),
                    f = { play: Object.assign({}, b, { sound: A }), setRTPC: F };
                function g(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function v(e, u, t) {
                    return `url(${g(e, u, t)})`;
                }
                const h = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
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
                    y = ['args'];
                const N = 2,
                    k = 16,
                    T = 32,
                    M = 64,
                    S = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(u, y);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((n = r),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, a));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    O = {
                        close(e) {
                            S('popover' === e ? N : T);
                        },
                        minimize() {
                            S(M);
                        },
                        move(e) {
                            S(k, { isMouseEvent: !0, on: e });
                        },
                    };
                function P(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function R(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function x(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function I(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function L(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function z(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function H(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function V(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: U(u.x), y: U(u.y) };
                }
                function W() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function $() {
                    return viewEnv.getScale();
                }
                function j(e) {
                    return viewEnv.pxToRem(e);
                }
                function U(e) {
                    return viewEnv.remToPx(e);
                }
                function G(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function q() {
                    return viewEnv.isFocused();
                }
                function K() {
                    return viewEnv.setEventHandled();
                }
                function Y() {
                    return viewEnv.isEventHandled();
                }
                function X() {
                    viewEnv.forceTriggerMouseMove();
                }
                function Z() {
                    return viewEnv.getShowingStatus();
                }
                const Q = Object.keys(h).reduce((e, u) => ((e[u] = () => viewEnv.getShowingStatus() === h[u]), e), {}),
                    J = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    ee = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : w.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    ue = { view: o, client: r, sound: f };
            },
            521: (e, u, t) => {
                let n, r;
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
                            (e[(e.KEY_9 = 57)] = 'KEY_9');
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
                    })(r || (r = {}));
            },
            358: (e, u, t) => {
                t.d(u, { Z: () => a });
                var n = t(768);
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
                    addCallback(e, u, t = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const a = n.O.view.addModelObserver(e, t, r);
                        return (
                            a > 0
                                ? ((this._callbacks[a] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(a) : (this._views[t] = [a])))
                                : console.error("Can't add callback for model:", e),
                            a
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
            916: (e, u, t) => {
                t.d(u, { c1: () => g, Sw: () => a.Z, B0: () => s, c9: () => B, ry: () => D, Eu: () => C });
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
                const r = n;
                var a = t(358);
                var o = t(613);
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
                const i = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(521),
                    m = t(768);
                const _ = ['args'];
                function A(e, u, t, n, r, a, o) {
                    try {
                        var s = e[a](o),
                            i = s.value;
                    } catch (e) {
                        return void t(e);
                    }
                    s.done ? u(i) : Promise.resolve(i).then(n, r);
                }
                const F = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    D = (function () {
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
                                    return new Promise(function (n, r) {
                                        var a = e.apply(u, t);
                                        function o(e) {
                                            A(a, n, r, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            A(a, n, r, o, s, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    C = () =>
                        new Promise((e) => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e();
                                });
                            });
                        }),
                    B = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const r = u.args,
                                a = (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(u, _);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, a, {
                                          arguments:
                                              ((n = r),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, a));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    p = () => B(s.CLOSE),
                    b = (e, u) => {
                        e.keyCode === d.n.ESCAPE && u();
                    };
                var f = t(572);
                const g = r.instance,
                    v = {
                        DataTracker: a.Z,
                        ViewModel: f.Z,
                        ViewEventType: s,
                        NumberFormatType: i,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: E,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => B(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: p,
                        sendClosePopOverEvent: () => B(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            B(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, r = R.invalid('resId'), a) => {
                            const o = m.O.view.getViewGlobalPosition(),
                                i = t.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                E = i.width,
                                d = i.height,
                                _ = {
                                    x: m.O.view.pxToRem(l) + o.x,
                                    y: m.O.view.pxToRem(c) + o.y,
                                    width: m.O.view.pxToRem(E),
                                    height: m.O.view.pxToRem(d),
                                };
                            B(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: F(_),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => b(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            b(e, p);
                        },
                        handleViewEvent: B,
                        onBindingsReady: D,
                        onLayoutReady: C,
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(s.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(s.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(s.POP_OVER),
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const n in u)
                                if (Object.prototype.hasOwnProperty.call(u, n)) {
                                    const r = Object.prototype.toString.call(u[n]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = u[n];
                                        t[n] = [];
                                        for (let u = 0; u < r.length; u++) t[n].push({ value: e(r[u].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = e(u[n]))
                                            : (t[n] = u[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: g,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = v;
            },
            613: (e, u, t) => {
                t.d(u, { Ew: () => a, Z5: () => n, cy: () => r });
                const n = {
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
                    },
                    a = {
                        getRegionalDateTime: (e, u, t = !0) => regionalDateTime.getRegionalDateTime(e, u, t),
                        getFormattedDateTime: (e, u, t = !0) => regionalDateTime.getFormattedDateTime(e, u, t),
                    };
            },
            313: (e, u, t) => {
                var n = {};
                t.r(n),
                    t.d(n, {
                        Area: () => _t,
                        Bar: () => Et,
                        DefaultScroll: () => mt,
                        Direction: () => Yu,
                        defaultSettings: () => Xu,
                        useHorizontalScrollApi: () => Qu,
                    });
                var r = {};
                t.r(r), t.d(r, { Area: () => St, Bar: () => kt, Default: () => Mt, useVerticalScrollApi: () => At });
                var a = t(483),
                    o = t.n(a),
                    s = t(768),
                    i = t(179),
                    l = t.n(i);
                function c() {
                    const e = (0, i.useRef)(0);
                    var u;
                    return (
                        (u = () => {
                            window.cancelAnimationFrame(e.current);
                        }),
                        (0, i.useEffect)(() => u, []),
                        (0, i.useMemo)(
                            () => ({
                                run: (u) => {
                                    window.cancelAnimationFrame(e.current),
                                        (e.current = window.requestAnimationFrame(() => {
                                            e.current = window.requestAnimationFrame(() => {
                                                u(), (e.current = 0);
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
                const E = ['children'];
                const d = l().createContext(null),
                    m = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, E);
                        return l().createElement(d.Provider, { value: t }, u);
                    };
                function _(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                const A = {
                        playHighlight() {
                            _('highlight');
                        },
                        playClick() {
                            _('play');
                        },
                        playYes() {
                            _('yes1');
                        },
                    },
                    F = {
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
                        base__highlightActive: 'CButton_base__highlightActive_b2',
                        content: 'CButton_content_cc',
                    };
                let D, C;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(D || (D = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(C || (C = {}));
                const B = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: n,
                    disabled: r,
                    mixClass: a,
                    soundHover: s,
                    soundClick: c,
                    onMouseEnter: E,
                    onMouseMove: d,
                    onMouseDown: m,
                    onMouseUp: A,
                    onMouseLeave: C,
                    onClick: B,
                }) => {
                    const p = (0, i.useRef)(null),
                        b = (0, i.useState)(t),
                        f = b[0],
                        g = b[1],
                        v = (0, i.useState)(!1),
                        h = v[0],
                        w = v[1];
                    return (
                        (0, i.useEffect)(() => {
                            function e(e) {
                                f && null !== p.current && !p.current.contains(e.target) && g(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [f]),
                        (0, i.useEffect)(() => {
                            g(t);
                        }, [t]),
                        l().createElement(
                            'div',
                            {
                                ref: p,
                                className: o()(
                                    F.base,
                                    F[`base__${n}`],
                                    r && F.base__disabled,
                                    u && F[`base__${u}`],
                                    f && F.base__focus,
                                    h && F.base__highlightActive,
                                    a,
                                ),
                                onMouseEnter: function (e) {
                                    r || (null !== s && _(s), E && E(e));
                                },
                                onMouseMove: function (e) {
                                    d && d(e);
                                },
                                onMouseUp: function (e) {
                                    r || (A && A(e), w(!1));
                                },
                                onMouseDown: function (e) {
                                    r ||
                                        (null !== c && _(c),
                                        m && m(e),
                                        t && (r || (p.current && (p.current.focus(), g(!0)))),
                                        w(!0));
                                },
                                onMouseLeave: function (e) {
                                    r || (C && C(e), w(!1));
                                },
                                onClick: function (e) {
                                    r || (B && B(e));
                                },
                            },
                            n !== D.ghost &&
                                l().createElement(
                                    l().Fragment,
                                    null,
                                    l().createElement('div', { className: F.back }),
                                    l().createElement('span', { className: F.texture }),
                                ),
                            l().createElement(
                                'span',
                                { className: o()(F.state, F.state__default) },
                                l().createElement('span', { className: F.stateDisabled }),
                                l().createElement('span', { className: F.stateHighlightHover }),
                                l().createElement('span', { className: F.stateHighlightActive }),
                            ),
                            l().createElement(
                                'span',
                                { className: F.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                B.defaultProps = { type: D.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const p = B,
                    b = {
                        base: 'Button_base_8d',
                        base__close: 'Button_base__close_b1',
                        base__minimize: 'Button_base__minimize_f7',
                    };
                let f;
                !(function (e) {
                    (e.Minimize = 'minimize'), (e.Close = 'close');
                })(f || (f = {}));
                const g = ({ onClick: e, type: u }) => {
                        const t = (0, i.useCallback)(() => {
                                A.playHighlight();
                            }, []),
                            n = (0, i.useCallback)((e) => e.stopPropagation(), []),
                            r = o()(b.base, b[`base__${u}`]);
                        return l().createElement('div', { className: r, onClick: e, onMouseEnter: t, onMouseDown: n });
                    },
                    v = (e = 1) => {
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
                    };
                var h = t(916);
                const w = [
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
                function y(e) {
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
                const N = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: h.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    k = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            n = e.args,
                            r = e.onMouseEnter,
                            a = e.onMouseLeave,
                            o = e.onMouseDown,
                            s = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            E = e.ignoreMouseClick,
                            d = void 0 !== E && E,
                            m = e.decoratorId,
                            _ = void 0 === m ? 0 : m,
                            A = e.isEnabled,
                            F = void 0 === A || A,
                            D = e.targetId,
                            C = void 0 === D ? 0 : D,
                            B = e.onShow,
                            p = e.onHide,
                            b = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, w);
                        const f = (0, i.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            g = (0, i.useMemo)(() => C || v().resId, [C]),
                            h = (0, i.useCallback)(() => {
                                (f.current.isVisible && f.current.timeoutId) ||
                                    (N(t, _, { isMouseEvent: !0, on: !0, arguments: y(n) }, g),
                                    B && B(),
                                    (f.current.isVisible = !0));
                            }, [t, _, n, g, B]),
                            k = (0, i.useCallback)(() => {
                                if (f.current.isVisible || f.current.timeoutId) {
                                    const e = f.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (f.current.timeoutId = 0)),
                                        N(t, _, { on: !1 }, g),
                                        f.current.isVisible && p && p(),
                                        (f.current.isVisible = !1);
                                }
                            }, [t, _, g, p]),
                            T = (0, i.useCallback)((e) => {
                                f.current.isVisible &&
                                    ((f.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (f.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(f.current.prevTarget) && k();
                                    }, 200)));
                            }, []);
                        (0, i.useEffect)(() => {
                            const e = f.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', T, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', T, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, i.useEffect)(() => {
                                !1 === F && k();
                            }, [F, k]),
                            (0, i.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', k),
                                    () => {
                                        window.removeEventListener('mouseleave', k), k();
                                    }
                                ),
                                [k],
                            );
                        return F
                            ? (0, i.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((M = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((f.current.timeoutId = window.setTimeout(h, c ? 100 : 400)),
                                                      r && r(e),
                                                      M && M(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              k(), null == a || a(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === d && k(), null == s || s(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === d && k(), null == o || o(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      b,
                                  ),
                              )
                            : u;
                        var M;
                    },
                    T = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function M() {
                    return (
                        (M =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        M.apply(this, arguments)
                    );
                }
                const S = R.views.common.tooltip_window.simple_tooltip_content,
                    O = (e) => {
                        let u = e.children,
                            t = e.body,
                            n = e.header,
                            r = e.note,
                            a = e.alert,
                            o = e.args,
                            s = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, T);
                        const c = (0, i.useMemo)(() => {
                            const e = Object.assign({}, o, { body: t, header: n, note: r, alert: a });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [a, t, n, r, o]);
                        return l().createElement(
                            k,
                            M(
                                {
                                    contentId:
                                        ((E = null == o ? void 0 : o.hasHtmlContent),
                                        E ? S.SimpleTooltipHtmlContent('resId') : S.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                s,
                            ),
                            u,
                        );
                        var E;
                    },
                    P = 'Info_base_7b',
                    x = ({ tooltipHeader: e, tooltipBody: u }) =>
                        l().createElement(
                            O,
                            { isEnabled: !0, header: e, body: u },
                            l().createElement('div', { className: P }),
                        ),
                    I = 'Title_base_44',
                    L = ({ title: e, infoTooltipHeader: u, infoTooltipBody: t }) =>
                        l().createElement(
                            'div',
                            { className: I },
                            e,
                            u && t && l().createElement(x, { tooltipHeader: u, tooltipBody: t }),
                        ),
                    z = 'Header_base_ff',
                    H = 'Header_base__grabbing_dc',
                    V = 'Header_icon_6e',
                    W = 'Header_icon__reload_c2',
                    $ = 'Header_reloadButton_19',
                    j = ({
                        title: e,
                        showMinimizeBtn: u,
                        onMinimize: t,
                        onClose: n,
                        onReload: r,
                        infoTooltipHeader: a,
                        infoTooltipBody: c,
                    }) => {
                        const E = (0, i.useState)(!1),
                            d = E[0],
                            m = E[1],
                            _ = (0, i.useCallback)((e) => {
                                const u = () => {
                                    s.O.view.sendEvent.move(!1), m(!1), document.removeEventListener('mouseup', u);
                                };
                                0 === e.button &&
                                    (s.O.view.sendEvent.move(!0), m(!0), document.addEventListener('mouseup', u));
                            }, []);
                        return l().createElement(
                            'div',
                            { className: o()(z, d && H), onMouseDown: _ },
                            l().createElement(L, { title: e, infoTooltipBody: c, infoTooltipHeader: a }),
                            r &&
                                l().createElement(
                                    p,
                                    {
                                        mixClass: $,
                                        onClick: (e) => {
                                            A.playClick(), null == r || r(e);
                                        },
                                    },
                                    l().createElement('div', { className: o()(V, W) }),
                                ),
                            u &&
                                l().createElement(g, {
                                    type: f.Minimize,
                                    onClick: (e) => {
                                        A.playClick(), t ? t(e) : s.O.view.sendEvent.minimize();
                                    },
                                }),
                            l().createElement(g, {
                                type: f.Close,
                                onClick: (e) => {
                                    A.playClick(), n ? n(e) : s.O.view.sendEvent.close();
                                },
                            }),
                        );
                    },
                    U = 'WindowDecorator_base_6a',
                    G = 'WindowDecorator_frame_b5',
                    q = 'WindowDecorator_frame__focused_af',
                    K = 'WindowDecorator_container_1d',
                    Y = 'WindowDecorator_contentDecorations_be',
                    X = 'WindowDecorator_content_0b',
                    Z = l().forwardRef(
                        (
                            {
                                title: e,
                                showMinimizeBtn: u,
                                onClose: t,
                                onReload: n,
                                onMinimize: r,
                                onFocusChange: a,
                                infoTooltipHeader: E,
                                infoTooltipBody: d,
                                className: _,
                                children: A,
                            },
                            F,
                        ) => {
                            const D = (0, i.useRef)(null),
                                C = (0, i.useRef)(null),
                                B = (0, i.useState)(!0),
                                p = B[0],
                                b = B[1],
                                f = c(),
                                g = () => {
                                    f.run(() => {
                                        const e = D.current,
                                            u = C.current;
                                        if (!e || !u) return;
                                        const t = s.O.view.pxToRem(e.offsetWidth),
                                            n = s.O.view.pxToRem(e.offsetHeight);
                                        (u.style.width = `${t}rem`), (u.style.height = `${n}rem`);
                                        const r = t + 10 + 26,
                                            a = 28 + n + 5 + 26;
                                        s.O.view.setInputPaddingsRem(13), s.O.view.resize(r, a, 'rem');
                                    });
                                };
                            var v;
                            return (
                                (v = () => {
                                    g();
                                }),
                                (0, i.useEffect)(v, []),
                                (0, i.useEffect)(
                                    () =>
                                        s.O.client.events.mouse.down(([, e]) => {
                                            'outside' === e && p
                                                ? (b(!1), null == a || a(!1))
                                                : 'inside' !== e || p || (b(!0), null == a || a(!0));
                                        }),
                                    [p, a],
                                ),
                                l().createElement(
                                    m,
                                    { updateSizes: g },
                                    l().createElement(
                                        'div',
                                        { className: o()(U, _), style: { '--outer-shadow-width': '13rem' }, ref: F },
                                        l().createElement('div', { className: o()(G, p && q) }),
                                        l().createElement(j, {
                                            title: e,
                                            infoTooltipHeader: E,
                                            infoTooltipBody: d,
                                            onClose: t,
                                            onMinimize: r,
                                            onReload: n,
                                            showMinimizeBtn: u,
                                        }),
                                        l().createElement(
                                            'div',
                                            { className: K, ref: C },
                                            l().createElement('div', { className: Y }),
                                            l().createElement('div', { className: X, ref: D }, A),
                                        ),
                                    ),
                                )
                            );
                        },
                    );
                let Q;
                !(function (e) {
                    (e.Squad = 'squad'),
                        (e.Event = 'event'),
                        (e.Epic = 'epic'),
                        (e.BattleRoyal = 'battle_royal'),
                        (e.MapBox = 'mapbox'),
                        (e.Comp7 = 'comp7'),
                        (e.FunRandom = 'funRandom');
                })(Q || (Q = {}));
                var J = t(521);
                const ee = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function ue(e = J.n.NONE, u = ee, t = !1, n = !1) {
                    (0, i.useEffect)(() => {
                        if (e !== J.n.NONE)
                            return (
                                window.addEventListener('keydown', r, t),
                                () => {
                                    window.removeEventListener('keydown', r, t);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (!n && s.O.view.isEventHandled()) return;
                                s.O.view.setEventHandled(), u(r), t && r.stopPropagation();
                            }
                        }
                    }, [u, e, t, n]);
                }
                const te = (e, u) => e.split('.').reduce((e, u) => e && e[u], u),
                    ne = (e) => {
                        const u = (0, i.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    re = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    ae = (e, u) => (e.length > 0 ? `${e}.${u}` : u),
                    oe = (e) =>
                        ((e, u) =>
                            e.split('.').reduce((e, t) => {
                                const n = te(`${e}.${t}`, window);
                                return re(n) ? u(e, t, n) : `${e}.${t}`;
                            }))(e, (e, u) => `${e}.${u}.value`),
                    se = (e) => {
                        const u = ((e) => {
                                const u = v(),
                                    t = u.caller,
                                    n = u.resId,
                                    r = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: r, modelPath: ae(r, e || ''), resId: n };
                            })(),
                            t = u.modelPrefix,
                            n = e.split('.');
                        if (n.length > 0) {
                            const e = [n[0]];
                            return (
                                n.reduce((u, n) => {
                                    const r = te(ae(t, `${u}.${n}`), window);
                                    return re(r) ? (e.push(r.id), `${u}.${n}.value`) : (e.push(n), `${u}.${n}`);
                                }),
                                e.reduce((e, u) => e + '.' + u)
                            );
                        }
                        return '';
                    },
                    ie = h.Sw.instance;
                let le;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(le || (le = {}));
                const ce = (e = 'model', u = le.Deep) => {
                        const t = (0, i.useState)(0),
                            n = (t[0], t[1]),
                            r = (0, i.useMemo)(() => v(), []),
                            a = r.caller,
                            o = r.resId,
                            s = (0, i.useMemo)(
                                () => (window.__feature && window.__feature !== a ? `subViews.${a}.${e}` : e),
                                [a, e],
                            ),
                            l = (0, i.useState)(() =>
                                ((e) => {
                                    const u = te(e, window);
                                    for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                    return re(u) ? u.value : u;
                                })(oe(s)),
                            ),
                            c = l[0],
                            E = l[1],
                            d = (0, i.useRef)(-1);
                        return (
                            ne(() => {
                                if (
                                    ('boolean' == typeof u &&
                                        ((u = u ? le.Deep : le.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    u !== le.None)
                                ) {
                                    const t = (e) => {
                                            ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                            u === le.Deep
                                                ? (e === c && n((e) => e + 1), E(e))
                                                : E(Object.assign([], e));
                                        },
                                        r = se(e);
                                    d.current = ie.addCallback(r, t, o, u === le.Deep);
                                }
                            }),
                            (0, i.useEffect)(() => {
                                if (u !== le.None)
                                    return () => {
                                        ie.removeCallback(d.current, o);
                                    };
                            }, [o, u]),
                            c
                        );
                    },
                    Ee = /<link.*?>/g,
                    de = /\.\.\//g,
                    me = /<script.*?>/g,
                    _e = 'default.css',
                    Ae = (e) => {
                        const u = e.match(de);
                        return u && u.join('');
                    },
                    Fe = () => {
                        for (
                            var e = 0, u = Array.from(document.head.querySelectorAll('link[rel="stylesheet"]'));
                            e < u.length;
                            e++
                        ) {
                            const t = u[e];
                            if (!t.href.includes(_e)) return t.href;
                        }
                        return '';
                    },
                    De = (e) => {
                        const u = Fe(),
                            t = Ae(u);
                        let n,
                            r = e;
                        for (; null !== (n = me.exec(e)); ) {
                            const e = n[0].match(/<script (defer|defer="defer") src="(.*?)">/);
                            if (e) {
                                const u = t + e[2].replace(de, '');
                                r = r.replace(e[2], u);
                            }
                        }
                        return r;
                    },
                    Ce = 'SubView_base_df',
                    Be = 'subViews.onChanged',
                    pe = (() => {
                        const e = [];
                        let u = !1;
                        const t = () => {
                            if (!e.length) return void (u = !1);
                            const n = e.shift();
                            n && ((u = !0), n().then(() => t()));
                        };
                        return {
                            add: (n) => {
                                e.push(n), u || t();
                            },
                        };
                    })(),
                    be = (0, i.memo)(({ id: e, fallback: u, onLoadCallback: t, mixClass: n }) => {
                        const r = (0, i.useState)(''),
                            a = r[0],
                            s = r[1],
                            c = (0, i.useMemo)(() => ({ __html: De(a) }), [a]),
                            E = (0, i.useMemo)(() => window.subViews.addChildChangedCallback(e), [e]),
                            d = (0, i.useState)(!1),
                            m = d[0],
                            _ = d[1],
                            A = (0, i.useCallback)(
                                (e) => {
                                    e.includes(E) &&
                                        (_(!0), engine.off(Be, A), window.subViews.removeChildChangedCallback(E));
                                },
                                [E],
                            ),
                            F = (0, i.useCallback)((e) => {
                                pe.add(
                                    () =>
                                        new Promise((u) => {
                                            s(e);
                                            const t = new MutationObserver(() => {
                                                    t.disconnect(), u();
                                                }),
                                                n = document.getElementById('root');
                                            n && t.observe(n, { childList: !0 });
                                        }),
                                );
                            }, []);
                        (0, i.useEffect)(() => {
                            if (window.subViews.ids().includes(e)) {
                                const u = window.subViews.get(e),
                                    t = u.path;
                                let n;
                                if ((n = t.split('/').pop()))
                                    return (
                                        (n = n.split('.')[0]),
                                        (window.subViews[n] = Object.assign({ id: e }, u)),
                                        engine.on(`subView:inject->${n}`, F),
                                        (({ path: e, name: u }) => {
                                            const t = new XMLHttpRequest();
                                            (t.onreadystatechange = () => {
                                                4 === t.readyState &&
                                                    (200 === t.status
                                                        ? (0, h.Eu)().then(() => {
                                                              console.info(`Sub view ${u} loaded: ${e}`),
                                                                  engine.TriggerEvent(
                                                                      `subView:inject->${u}`,
                                                                      t.responseText,
                                                                  );
                                                          })
                                                        : console.error(
                                                              `subView: status: ${t.status} - can't get bundle`,
                                                          ));
                                            }),
                                                t.open('GET', e),
                                                t.send();
                                        })({ name: n, path: t }),
                                        () => {
                                            n && window.subViews[n] && delete window.subViews[n],
                                                engine.trigger('subView:destroy', { viewName: n, viewId: e }),
                                                window.__dataTracker &&
                                                    window.__dataTracker.clearViewCallbacks &&
                                                    window.__dataTracker.clearViewCallbacks(e),
                                                engine.off(`subView:inject->${n}`, F),
                                                console.info(`Sub view ${n} is destroyed: ${t}`);
                                        }
                                    );
                                console.error("subView: can't get View component name");
                            } else engine.on(Be, A);
                        }, [A, F, e, m]),
                            (0, i.useEffect)(
                                () => () => {
                                    a &&
                                        ((e) => {
                                            const u = Ae(Fe());
                                            let t;
                                            for (; null !== (t = Ee.exec(e)); ) {
                                                const e = t[0].match(/href="(.*?)"/);
                                                if (e) {
                                                    const t = u + e[1].replace(de, ''),
                                                        n = document.head.querySelector(`[href="${t}"]`);
                                                    n && document.head.removeChild(n);
                                                }
                                            }
                                        })(a);
                                },
                                [a],
                            );
                        const D = o()(Ce, n);
                        if (a) {
                            let u;
                            return (
                                (u = document.getElementById('root')) && u.setAttribute('id', 'bugSubView'),
                                ((e) => {
                                    let u;
                                    const t = Fe(),
                                        n = Ae(t);
                                    for (; null !== (u = Ee.exec(e)); ) {
                                        const e = u[0].match(/href="(.*?)"/);
                                        if (e && !e[1].includes(_e) && n) {
                                            const u = n + e[1].replace(de, ''),
                                                t = document.createElement('link');
                                            (t.href = u), (t.rel = 'stylesheet'), document.head.appendChild(t);
                                        }
                                    }
                                })(a),
                                t && t(e),
                                l().createElement('div', { className: D, dangerouslySetInnerHTML: c })
                            );
                        }
                        return u ? l().createElement('div', { className: D }, l().createElement(u, null)) : null;
                    });
                var fe = t(493),
                    ge = t.n(fe);
                const ve = (e) => ({ backgroundImage: `url('${e}')` }),
                    he = 'BonusInfoIcon_bonusInfoIcon_3d',
                    we = () => {
                        const e = (0, i.useMemo)(() => ve(R.images.gui.maps.icons.platoon.common.info()), []);
                        return l().createElement(
                            k,
                            { isEnabled: !0, contentId: R.views.lobby.premacc.tooltips.SquadBonusTooltip('resId') },
                            l().createElement('div', { className: he, style: e }),
                        );
                    };
                function ye() {
                    return (
                        (ye =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ye.apply(this, arguments)
                    );
                }
                const Ne = (0, i.memo)(
                        ({
                            caption: e,
                            isEnabled: u,
                            description: t,
                            children: n,
                            cButtonProps: r,
                            onClick: a,
                            className: o,
                        }) => {
                            const s = (0, i.useCallback)(() => a(), [a]);
                            return l().createElement(
                                O,
                                { isEnabled: !0, header: e, body: t },
                                l().createElement(
                                    'div',
                                    { className: o },
                                    l().createElement(
                                        p,
                                        ye({ type: D.primary, size: C.small, onClick: s, disabled: !u }, r),
                                        n || e,
                                    ),
                                ),
                            );
                        },
                    ),
                    ke = 'Separator_base_98',
                    Te = 'Separator_base__horizontal_34',
                    Me = 'Separator_base__vertical_9d',
                    Se = 'Separator_image_5b';
                let Oe;
                !(function (e) {
                    (e.left = 'left'), (e.top = 'top'), (e.right = 'right'), (e.bottom = 'bottom');
                })(Oe || (Oe = {}));
                const Pe = ({ position: e }) => {
                        const u = R.images.gui.maps.icons.platoon.common.separator.$dyn(e),
                            t = [Oe.right, Oe.left].includes(e),
                            n = o()(ke, t ? Me : Te);
                        return l().createElement(
                            'div',
                            { className: n },
                            l().createElement('div', { className: Se, style: ve(u) }),
                        );
                    },
                    Re = 'ToggleButton_base_b9',
                    xe = 'ToggleButton_content_85',
                    Ie = 'ToggleButton_overlay_0a',
                    Le = 'ToggleButton_base__active_68',
                    ze = 'ToggleButton_indicator_85',
                    He = ['active', 'className', 'children', 'size'];
                function Ve() {
                    return (
                        (Ve =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ve.apply(this, arguments)
                    );
                }
                const We = (e) => {
                        let u = e.active,
                            t = e.className,
                            n = e.children,
                            r = e.size,
                            a = void 0 === r ? C.small : r,
                            s = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, He);
                        const i = o()(Re, t, u && Le);
                        return l().createElement(
                            'div',
                            { className: i },
                            l().createElement(
                                p,
                                Ve({}, s, { type: 'secondary', size: a }),
                                l().createElement('span', { className: xe }, n),
                            ),
                            l().createElement('div', { className: Ie }),
                            l().createElement('div', { className: ze }),
                        );
                    },
                    $e = ((0, i.memo)(We), { contentId: R.views.lobby.platoon.AlertTooltip('resId'), isEnabled: !0 }),
                    je = (e, u, t, n = !0) =>
                        e && n
                            ? $e
                            : ((e, u, t) => ({
                                  contentId:
                                      R.views.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent(
                                          'resId',
                                      ),
                                  decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                  args: { header: e, body: u },
                                  isEnabled: t,
                              }))(u, t, n),
                    Ue = 'CommanderControls_left_98',
                    Ge = 'CommanderControls_tiersLimit_2c',
                    qe = 'CommanderControls_findPlayers_c1';
                function Ke() {
                    return (
                        (Ke =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ke.apply(this, arguments)
                    );
                }
                const Ye = () => {
                        const e = ce().shouldShowFindPlayersButton,
                            u = ce('model.btnInviteFriends'),
                            t = ce('model.btnFindPlayers'),
                            n = (0, i.useCallback)(() => {
                                t.onClick(), _(t.soundClickName);
                            }, [t]),
                            r = (0, i.useMemo)(() => ({ type: D.secondary }), []),
                            a = (0, i.useMemo)(
                                () => je(!t.isEnabled, t.caption, t.description, t.hasTooltip),
                                [t.caption, t.isEnabled, t.description, t.hasTooltip],
                            );
                        return l().createElement(
                            l().Fragment,
                            null,
                            e &&
                                l().createElement(
                                    'div',
                                    { className: Ue },
                                    l().createElement(
                                        k,
                                        a,
                                        l().createElement(
                                            'div',
                                            null,
                                            l().createElement(
                                                p,
                                                {
                                                    type: t.isLight ? D.primary : D.secondary,
                                                    size: C.small,
                                                    onClick: t.isEnabled ? n : void 0,
                                                    disabled: !t.isEnabled,
                                                    mixClass: qe,
                                                },
                                                t.caption,
                                            ),
                                        ),
                                    ),
                                    l().createElement(be, {
                                        id: R.views.lobby.platoon.subViews.TiersLimit('resId'),
                                        mixClass: Ge,
                                    }),
                                ),
                            l().createElement(Ne, Ke({}, u, { cButtonProps: r })),
                        );
                    },
                    Xe = 'Footer_base_d0',
                    Ze = 'Footer_message_3d',
                    Qe = 'Footer_message__alert_64',
                    Je = () => {
                        const e = ce('model.btnSwitchReady'),
                            u = e.onClick,
                            t = e.caption,
                            n = e.description,
                            r = e.tooltipHeader,
                            a = e.isRed,
                            s = e.isEnabled,
                            c = ce(),
                            E = c.footerMessage,
                            d = c.isFooterMessageGrey,
                            m = o()(Ze, !d && Qe),
                            _ = (0, i.useCallback)(() => u(), [u]),
                            A = a ? D.primaryRed : D.primary;
                        return l().createElement(
                            'div',
                            { className: Xe },
                            l().createElement('div', { className: m }, E),
                            l().createElement(
                                O,
                                { header: r, body: n },
                                l().createElement(p, { onClick: _, size: C.small, type: A, disabled: !s }, t),
                            ),
                        );
                    },
                    eu = 'Bonus_base_96',
                    uu = 'Bonus_currencyImage_16',
                    tu = 'Bonus_caption_7e',
                    nu = ({ currency: e, amount: u }) => {
                        const t = R.images.gui.maps.icons.platoon.members_window.currencies.$dyn(e),
                            n = (0, i.useMemo)(() => ve(t), [t]);
                        return l().createElement(
                            'div',
                            { className: eu },
                            l().createElement('div', { className: uu, style: n }),
                            l().createElement('span', { className: tu }, `+${u}%`),
                        );
                    },
                    ru = 'Bonuses_base_6f',
                    au = () => {
                        const e = ce('model.header.bonuses');
                        return 0 === e.length
                            ? null
                            : l().createElement(
                                  'div',
                                  { className: ru },
                                  e
                                      .filter((e) => e)
                                      .map(({ value: e }) =>
                                          l().createElement(nu, {
                                              currency: e.currency,
                                              amount: e.amount,
                                              key: e.currency,
                                          }),
                                      ),
                              );
                    },
                    ou = (e, u) => {
                        const t = (0, i.useRef)();
                        return (
                            (0, i.useEffect)(() => {
                                (u && !u(e)) || (t.current = e);
                            }, [u, e]),
                            t.current
                        );
                    };
                var su = t(281);
                let iu;
                function lu(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(iu || (iu = {}));
                const cu = (e) => e.replace(/&nbsp;/g, ' '),
                    Eu = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    du = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    mu = (e, u, t = iu.left) => e.split(u).reduce(t === iu.left ? Eu : du, []),
                    _u = (() => {
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
                    Au = ['zh_cn', 'zh_sg', 'zh_tw'],
                    Fu = (e, u = iu.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (Au.includes(t)) return _u(e);
                        if ('ja' === t) {
                            return (0, su.D4)()
                                .parse(e)
                                .map((e) => cu(e));
                        }
                        return ((e, u = iu.left) => {
                            let t = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                r = cu(e);
                            return mu(r, /( )/, u).forEach((e) => (t = t.concat(mu(e, n, iu.left)))), t;
                        })(e, u);
                    };
                var Du = t(613);
                Date.now(), Du.Ew.getRegionalDateTime, Du.Ew.getFormattedDateTime;
                h.Sw.instance;
                const Cu = ou,
                    Bu = 'FormatText_base_d0',
                    pu = ({ binding: e, text: u = '', classMix: t, alignment: n = iu.left, formatWithBrackets: r }) => {
                        if (null === u) return console.error("FormatText was supplied with 'null'"), null;
                        const a = r && e ? lu(u, e) : u;
                        return l().createElement(
                            i.Fragment,
                            null,
                            a.split('\n').map((u, r) =>
                                l().createElement(
                                    'div',
                                    { className: o()(Bu, t), key: `${u}-${r}` },
                                    ((e, u, t) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : Fu(e, u))))(
                                        u,
                                        n,
                                        e,
                                    ).map((e, u) => l().createElement(i.Fragment, { key: `${u}-${e}` }, e)),
                                ),
                            ),
                        );
                    },
                    bu = 'NoBonus_textContainer_ef',
                    fu = 'NoBonus_textMix_ff',
                    gu = 'NoBonus_icon_69',
                    vu = () => {
                        const e = ce('model.header.noBonusPlaceholder'),
                            u = e.text,
                            t = e.icon,
                            n = t && ve(t);
                        return i.createElement(
                            i.Fragment,
                            null,
                            u &&
                                i.createElement(
                                    'div',
                                    { className: bu },
                                    i.createElement(pu, { text: u, classMix: fu, alignment: iu.right }),
                                ),
                            n && i.createElement('div', { style: n, className: gu }),
                        );
                    },
                    hu = (e, u) => {
                        const t = Array.isArray(e) ? e : [e];
                        return !u && t.length > 1 ? t.slice(0, 1) : t;
                    },
                    wu = ['children'];
                function yu() {
                    return (
                        (yu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        yu.apply(this, arguments)
                    );
                }
                const Nu = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, wu);
                    return l().createElement(
                        k,
                        yu(
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
                };
                function ku() {
                    return (
                        (ku =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ku.apply(this, arguments)
                    );
                }
                const Tu = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const n = l().createElement('div', { className: t }, e);
                        if (u.header || u.body) return l().createElement(O, u, n);
                        const r = u.contentId;
                        return r ? l().createElement(k, ku({}, u, { contentId: r }), n) : l().createElement(Nu, u, n);
                    },
                    Mu = (e) => {
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
                    },
                    Su = [];
                function Ou(e) {
                    const u = (0, i.useRef)(e);
                    return (
                        (0, i.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, i.useCallback)((...e) => (0, u.current)(...e), Su)
                    );
                }
                let Pu, Ru;
                !(function (e) {
                    (e.Basic = 'basic'),
                        (e.Disabled = 'disabled'),
                        (e.Focused = 'focused'),
                        (e.Alert = 'alert'),
                        (e.Selected = 'selected');
                })(Pu || (Pu = {})),
                    (function (e) {
                        (e.Small = 'small'), (e.Medium = 'medium');
                    })(Ru || (Ru = {}));
                const xu = 'TextOverflow_base_3b',
                    Iu = ['content', 'classMix', 'className'];
                function Lu() {
                    return (
                        (Lu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Lu.apply(this, arguments)
                    );
                }
                const zu = (e) => {
                        let u = e.content,
                            t = e.classMix,
                            n = e.className,
                            r = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, Iu);
                        const a = (0, i.useRef)(null),
                            s = (0, i.useState)(!0),
                            c = s[0],
                            E = s[1];
                        return (
                            (0, i.useEffect)(() =>
                                Mu(() => {
                                    const e = a.current;
                                    e && e.offsetWidth >= e.scrollWidth && E(!1);
                                }),
                            ),
                            l().createElement(
                                O,
                                { isEnabled: c, body: u },
                                l().createElement('div', Lu({}, r, { ref: a, className: o()(xu, n, t) }), u),
                            )
                        );
                    },
                    Hu = {
                        base: 'DropDownControl_base_46',
                        base__small: 'DropDownControl_base__small_22',
                        base__medium: 'DropDownControl_base__medium_09',
                        base__disabled: 'DropDownControl_base__disabled_37',
                        base__focused: 'DropDownControl_base__focused_63',
                        base__selected: 'DropDownControl_base__selected_46',
                        stateHighlight: 'DropDownControl_stateHighlight_16',
                        base__over: 'DropDownControl_base__over_e7',
                        base__down: 'DropDownControl_base__down_1c',
                        base__open: 'DropDownControl_base__open_e3',
                        label: 'DropDownControl_label_12',
                        label__small: 'DropDownControl_label__small_e7',
                        label__medium: 'DropDownControl_label__medium_0b',
                        label__placeholder: 'DropDownControl_label__placeholder_98',
                        button: 'DropDownControl_button_cb',
                        button__small: 'DropDownControl_button__small_b5',
                        button__medium: 'DropDownControl_button__medium_14',
                        gradient: 'DropDownControl_gradient_b5',
                        disabled: 'DropDownControl_disabled_4e',
                        arrow: 'DropDownControl_arrow_de',
                        arrow__small: 'DropDownControl_arrow__small_77',
                        arrow__medium: 'DropDownControl_arrow__medium_3d',
                        alert: 'DropDownControl_alert_75',
                        blink: 'DropDownControl_blink_68',
                    };
                let Vu;
                !(function (e) {
                    (e.Out = 'out'), (e.Over = 'over'), (e.Down = 'down');
                })(Vu || (Vu = {}));
                const Wu = (0, i.memo)(
                        ({
                            parentId: e,
                            variant: u = Pu.Basic,
                            size: t = Ru.Medium,
                            isOpen: n,
                            placeholder: r = R.strings.common.dropdown.placeholder.select(),
                            label: a = '',
                            classMix: s,
                            onClick: c,
                            soundHover: E,
                            soundClick: d,
                            customControl: m,
                        }) => {
                            const A = (0, i.useState)(Vu.Out),
                                F = A[0],
                                D = A[1],
                                C = (0, i.useState)(!1),
                                B = C[0],
                                p = C[1],
                                b = u === Pu.Disabled,
                                f = b || u === Pu.Basic,
                                g = (0, i.useCallback)(() => {
                                    b || (D(Vu.Over), E && _(E));
                                }, [b, E]),
                                v = (0, i.useCallback)(() => D(Vu.Out), []);
                            return (
                                (0, i.useEffect)(() => {
                                    f || p(!1);
                                }, [u, f]),
                                (0, i.useEffect)(() => {
                                    b && v();
                                }, [b, v]),
                                l().createElement(
                                    'div',
                                    {
                                        id: e ? `${e}_control` : void 0,
                                        className: o()(
                                            Hu.base,
                                            n && Hu.base__open,
                                            Hu[`base__${F}`],
                                            (f || !B) && Hu[`base__${u}`],
                                            s,
                                        ),
                                        onMouseEnter: g,
                                        onMouseUp: () => {
                                            !b && D(Vu.Over), !f && p(!0);
                                        },
                                        onMouseDown: () => {
                                            b || (D(Vu.Down), d && _(d));
                                        },
                                        onMouseLeave: v,
                                        onClick: c,
                                    },
                                    l().createElement('div', { className: Hu.stateHighlight }),
                                    !B && u === Pu.Alert && l().createElement('div', { className: Hu.alert }),
                                    l().createElement(
                                        'div',
                                        { className: o()(Hu.label, Hu[`label__${t}`], !a && Hu.label__placeholder) },
                                        m || l().createElement(zu, { content: a || r }),
                                    ),
                                    l().createElement(
                                        'div',
                                        { className: o()(Hu.button, Hu[`button__${t}`]) },
                                        l().createElement('div', { className: o()(Hu.arrow, Hu[`arrow__${t}`]) }),
                                        l().createElement('div', { className: Hu.gradient }),
                                        b && l().createElement('div', { className: Hu.disabled }),
                                    ),
                                )
                            );
                        },
                    ),
                    $u = (e, u, t) => (t < e ? e : t > u ? u : t);
                function ju(e, u, t = []) {
                    const n = (0, i.useRef)(0),
                        r = (0, i.useCallback)(() => window.clearInterval(n.current), t || []);
                    (0, i.useEffect)(() => r, [r]);
                    const a = (null != t ? t : []).concat([u]);
                    return [
                        (0, i.useCallback)((t) => {
                            (n.current = window.setInterval(() => e(t, !0), u)), e(t, !1);
                        }, a),
                        r,
                    ];
                }
                function Uu(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return Gu(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return Gu(e, u);
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
                function Gu(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                function qu(e, u, t) {
                    const n = (0, i.useMemo)(
                        () =>
                            (function (e, u, t, n) {
                                let r,
                                    a = !1,
                                    o = 0;
                                function s() {
                                    r && clearTimeout(r);
                                }
                                function i(...i) {
                                    const l = this,
                                        c = Date.now() - o;
                                    function E() {
                                        (o = Date.now()), t.apply(l, i);
                                    }
                                    a ||
                                        (n && !r && E(),
                                        s(),
                                        void 0 === n && c > e
                                            ? E()
                                            : !0 !== u &&
                                              (r = setTimeout(
                                                  n
                                                      ? function () {
                                                            r = void 0;
                                                        }
                                                      : E,
                                                  void 0 === n ? e - c : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof u && ((n = t), (t = u), (u = void 0)),
                                    (i.cancel = function () {
                                        s(), (a = !0);
                                    }),
                                    i
                                );
                            })(t, e),
                        u,
                    );
                    return (0, i.useEffect)(() => n.cancel, [n]), n;
                }
                var Ku = t(30);
                let Yu;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(Yu || (Yu = {}));
                const Xu = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Zu = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: n,
                        getWrapperSize: r,
                        triggerMouseMoveOnUpdate: a = !1,
                    }) => {
                        const o = (e, t) => {
                            const n = u(e),
                                r = n[0],
                                a = n[1];
                            return a <= r ? 0 : $u(r, a, t);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                E = void 0 === c ? Xu : c,
                                d = (0, i.useRef)(null),
                                m = (0, i.useRef)(null),
                                _ = (() => {
                                    const e = (0, i.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        n = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        r = (e, ...t) => {
                                            for (var n, r = Uu(u(e).values()); !(n = r()).done; ) (0, n.value)(...t);
                                        };
                                    return (0, i.useMemo)(() => ({ on: t, off: n, trigger: r }), []);
                                })(),
                                A = qu(
                                    () => {
                                        s.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                F = (0, Ku.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = d.current;
                                        u && (t(u, e), _.trigger('change', e), a && A());
                                    },
                                    onRest: (e) => _.trigger('rest', e),
                                    onStart: (e) => _.trigger('start', e),
                                    onPause: (e) => _.trigger('pause', e),
                                })),
                                D = F[0],
                                C = F[1],
                                B = (0, i.useCallback)(
                                    (e, u, t) => {
                                        var n;
                                        const r = D.scrollPosition.get(),
                                            a = (null != (n = D.scrollPosition.goal) ? n : 0) - r;
                                        return o(e, u * t + a + r);
                                    },
                                    [D.scrollPosition],
                                ),
                                p = (0, i.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const n = d.current;
                                        n &&
                                            C.start({
                                                scrollPosition: o(n, e),
                                                immediate: u,
                                                reset: t,
                                                config: E.animationConfig,
                                                from: { scrollPosition: o(n, D.scrollPosition.get()) },
                                            });
                                    },
                                    [C, E.animationConfig, D.scrollPosition],
                                ),
                                b = (0, i.useCallback)(
                                    (e) => {
                                        const u = d.current,
                                            t = m.current;
                                        if (!u || !t) return;
                                        const n = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return r(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, E.step),
                                            a = B(u, e, n);
                                        p(a);
                                    },
                                    [p, B, E.step],
                                ),
                                f = (0, i.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && b(n(e)),
                                            d.current && _.trigger('mouseWheel', e, D.scrollPosition, u(d.current));
                                    },
                                    [D.scrollPosition, b, _],
                                ),
                                g = ((e, u = []) => {
                                    const t = (0, i.useRef)(),
                                        n = (0, i.useCallback)((...u) => {
                                            t.current && t.current(), (t.current = e(...u));
                                        }, u);
                                    return (
                                        (0, i.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [n],
                                        ),
                                        n
                                    );
                                })(
                                    () =>
                                        Mu(() => {
                                            const e = d.current;
                                            e &&
                                                (p(o(e, D.scrollPosition.goal), { immediate: !0 }),
                                                _.trigger('resizeHandled'));
                                        }),
                                    [p, D.scrollPosition.goal],
                                ),
                                v = Ou(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const u = o(e, D.scrollPosition.goal);
                                    u !== D.scrollPosition.goal && p(u, { immediate: !0 }),
                                        _.trigger('recalculateContent');
                                });
                            (0, i.useEffect)(
                                () => (
                                    window.addEventListener('resize', g),
                                    () => {
                                        window.removeEventListener('resize', g);
                                    }
                                ),
                                [g],
                            );
                            return (0, i.useMemo)(
                                () => ({
                                    getWrapperSize: () => (m.current ? r(m.current) : void 0),
                                    getContainerSize: () => (d.current ? e(d.current) : void 0),
                                    getBounds: () =>
                                        d.current
                                            ? u(d.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: E.step.clampedArrowStepTimeout,
                                    clampPosition: o,
                                    handleMouseWheel: f,
                                    applyScroll: p,
                                    applyStepTo: b,
                                    contentRef: d,
                                    wrapperRef: m,
                                    scrollPosition: C,
                                    animationScroll: D,
                                    recalculateContent: v,
                                    events: { on: _.on, off: _.off },
                                }),
                                [D.scrollPosition, p, b, _.off, _.on, v, f, C, E.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    Qu = Zu({
                        getBounds: (e) => {
                            var u, t;
                            return [
                                0,
                                e.offsetWidth -
                                    (null != (u = null == (t = e.parentElement) ? void 0 : t.offsetWidth) ? u : 0),
                            ];
                        },
                        getContainerSize: (e) => e.offsetWidth,
                        getWrapperSize: (e) => e.offsetWidth,
                        setScrollPosition: (e, u) => {
                            e.style.transform = `translateX(-${u.value.scrollPosition}px)`;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Yu.Next : Yu.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    Ju = 'HorizontalBar_base_49',
                    et = 'HorizontalBar_base__nonActive_82',
                    ut = 'HorizontalBar_leftButton_5f',
                    tt = 'HorizontalBar_rightButton_03',
                    nt = 'HorizontalBar_track_0d',
                    rt = 'HorizontalBar_thumb_fd',
                    at = 'HorizontalBar_rail_32',
                    ot = 'disable',
                    st = { pending: !1, offset: 0 },
                    it = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    lt = () => {},
                    ct = (e, u) => Math.max(20, e.offsetWidth * u),
                    Et = (0, i.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = it, onDrag: n = lt }) => {
                        const r = (0, i.useRef)(null),
                            a = (0, i.useRef)(null),
                            c = (0, i.useRef)(null),
                            E = (0, i.useRef)(null),
                            d = (0, i.useRef)(null),
                            m = e.stepTimeout || 100,
                            A = (0, i.useState)(st),
                            F = A[0],
                            D = A[1],
                            C = (0, i.useCallback)(
                                (e) => {
                                    D(e),
                                        d.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [n],
                            ),
                            B = () => {
                                const u = E.current,
                                    t = d.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const o = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / r),
                                    i = $u(0, 1, o / (r - n)),
                                    l = (u.offsetWidth - ct(u, s)) * i;
                                (t.style.transform = `translateX(${0 | l}px)`),
                                    ((e) => {
                                        if (a.current && c.current && E.current && d.current) {
                                            if (0 === e)
                                                return a.current.classList.add(ot), void c.current.classList.remove(ot);
                                            if (
                                                ((u = E.current),
                                                (t = d.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return a.current.classList.remove(ot), void c.current.classList.add(ot);
                                            var u, t;
                                            a.current.classList.remove(ot), c.current.classList.remove(ot);
                                        }
                                    })(l);
                            },
                            p = Ou(() => {
                                (() => {
                                    const u = d.current,
                                        t = E.current,
                                        n = e.getWrapperSize(),
                                        a = e.getContainerSize();
                                    if (!(a && u && n && t)) return;
                                    const o = Math.min(1, n / a);
                                    (u.style.width = `${ct(t, o)}px`),
                                        (u.style.display = 'flex'),
                                        r.current &&
                                            (1 === o ? r.current.classList.add(et) : r.current.classList.remove(et));
                                })(),
                                    B();
                            });
                        (0, i.useEffect)(() => Mu(p)),
                            (0, i.useEffect)(
                                () =>
                                    Mu(() => {
                                        const u = () => {
                                            B();
                                        };
                                        let t = lt;
                                        const n = () => {
                                            t(), (t = Mu(p));
                                        };
                                        return (
                                            e.events.on('recalculateContent', p),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                t(),
                                                    e.events.off('recalculateContent', p),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', n);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, i.useEffect)(() => {
                                if (!F.pending) return;
                                const u = s.O.client.events.mouse.move(([u, t]) => {
                                        var r;
                                        const a = e.contentRef.current,
                                            o = e.wrapperRef.current;
                                        if (!a || !o) return;
                                        const s = E.current,
                                            i = d.current;
                                        if (!s || !i) return;
                                        if ('inside' === t && u.clientX < 0) return;
                                        const l = u.clientX - F.offset - s.getBoundingClientRect().x,
                                            c = (l / s.offsetWidth) * (null != (r = e.getContainerSize()) ? r : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(a, c),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: i, thumbOffset: l, contentOffset: c });
                                    }),
                                    t = s.O.client.events.mouse.up(() => {
                                        u(), C(st);
                                    });
                                return () => {
                                    u(), t();
                                };
                            }, [e, F.offset, F.pending, n, C]);
                        const b = ju((u) => e.applyStepTo(u), m, [e]),
                            f = b[0],
                            g = b[1];
                        (0, i.useEffect)(
                            () => (
                                document.addEventListener('mouseup', g, !0),
                                () => document.removeEventListener('mouseup', g, !0)
                            ),
                            [g],
                        );
                        const v = (e) => {
                            e.target.classList.contains(ot) || _('highlight');
                        };
                        return l().createElement(
                            'div',
                            { className: o()(Ju, u.base), ref: r, onWheel: e.handleMouseWheel },
                            l().createElement('div', {
                                className: o()(ut, u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ot) || 0 !== e.button || (_('play'), f(Yu.Next));
                                },
                                onMouseUp: g,
                                ref: a,
                                onMouseEnter: v,
                            }),
                            l().createElement(
                                'div',
                                {
                                    className: o()(nt, u.track),
                                    onMouseDown: (u) => {
                                        const n = d.current;
                                        if (n && 0 === u.button)
                                            if ((_('play'), u.target === n))
                                                C({ pending: !0, offset: u.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((u) => {
                                                    const n = d.current,
                                                        r = e.contentRef.current;
                                                    if (!n || !r) return;
                                                    const a = t(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + a * u);
                                                })(u.screenX > n.getBoundingClientRect().x ? Yu.Prev : Yu.Next);
                                            }
                                    },
                                    ref: E,
                                    onMouseEnter: v,
                                },
                                l().createElement('div', { ref: d, className: o()(rt, u.thumb) }),
                                l().createElement('div', { className: o()(at, u.rail) }),
                            ),
                            l().createElement('div', {
                                className: o()(tt, u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ot) || 0 !== e.button || (_('play'), f(Yu.Prev));
                                },
                                onMouseUp: g,
                                ref: c,
                                onMouseEnter: v,
                            }),
                        );
                    }),
                    dt = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    mt = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        classNames: a,
                        scrollClassName: s,
                        getStepByRailClick: c,
                        onDrag: E,
                    }) => {
                        const d = (0, i.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: o()(dt.base, e.base) });
                            }, [n]),
                            m = (0, i.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return l().createElement(
                            'div',
                            { className: o()(dt.defaultScroll, t), onWheel: u.handleMouseWheel },
                            l().createElement(
                                'div',
                                { className: o()(dt.defaultScrollArea, r) },
                                l().createElement(_t, { className: s, api: m, classNames: a }, e),
                            ),
                            l().createElement(Et, { getStepByRailClick: c, api: u, onDrag: E, classNames: d }),
                        );
                    },
                    _t = ({ api: e, className: u, classNames: t, children: n }) => (
                        (0, i.useEffect)(() => Mu(e.recalculateContent)),
                        l().createElement(
                            'div',
                            { className: o()(dt.base, u) },
                            l().createElement(
                                'div',
                                {
                                    className: o()(dt.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                l().createElement(
                                    'div',
                                    { className: o()(dt.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                (_t.Bar = Et), (_t.Default = mt);
                const At = Zu({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Yu.Next : Yu.Prev),
                    }),
                    Ft = 'VerticalBar_base_f3',
                    Dt = 'VerticalBar_base__nonActive_42',
                    Ct = 'VerticalBar_topButton_d7',
                    Bt = 'VerticalBar_bottomButton_06',
                    pt = 'VerticalBar_track_df',
                    bt = 'VerticalBar_thumb_32',
                    ft = 'VerticalBar_rail_43',
                    gt = 'disable',
                    vt = () => {},
                    ht = { pending: !1, offset: 0 },
                    wt = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    yt = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    Nt = (e, u) => Math.max(20, e.offsetHeight * u),
                    kt = (0, i.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = wt, onDrag: n = vt }) => {
                        const r = (0, i.useRef)(null),
                            a = (0, i.useRef)(null),
                            c = (0, i.useRef)(null),
                            E = (0, i.useRef)(null),
                            d = (0, i.useRef)(null),
                            m = e.stepTimeout || 100,
                            A = (0, i.useState)(ht),
                            F = A[0],
                            D = A[1],
                            C = (0, i.useCallback)(
                                (e) => {
                                    D(e),
                                        d.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: d.current });
                                },
                                [n],
                            ),
                            B = Ou(() => {
                                const u = d.current,
                                    t = E.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && a && u && t)) return;
                                const o = Math.min(1, n / a);
                                return (
                                    (u.style.height = `${Nt(t, o)}px`),
                                    (u.style.display = 'flex'),
                                    r.current &&
                                        (1 === o ? r.current.classList.add(Dt) : r.current.classList.remove(Dt)),
                                    o
                                );
                            }),
                            p = Ou(() => {
                                const u = E.current,
                                    t = d.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const o = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / r),
                                    i = $u(0, 1, o / (r - n)),
                                    l = (u.offsetHeight - Nt(u, s)) * i;
                                (t.style.transform = `translateY(${0 | l}px)`),
                                    ((e) => {
                                        if (a.current && c.current && E.current && d.current) {
                                            if (0 === Math.round(e))
                                                return a.current.classList.add(gt), void c.current.classList.remove(gt);
                                            if (
                                                ((u = E.current),
                                                (t = d.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return a.current.classList.remove(gt), void c.current.classList.add(gt);
                                            var u, t;
                                            a.current.classList.remove(gt), c.current.classList.remove(gt);
                                        }
                                    })(l);
                            }),
                            b = Ou(() => {
                                yt(e, () => {
                                    B(), p();
                                });
                            });
                        (0, i.useEffect)(() => Mu(b)),
                            (0, i.useEffect)(() => {
                                const u = () => {
                                    yt(e, () => {
                                        p();
                                    });
                                };
                                let t = vt;
                                const n = () => {
                                    t(), (t = Mu(b));
                                };
                                return (
                                    e.events.on('recalculateContent', b),
                                    e.events.on('rest', u),
                                    e.events.on('change', u),
                                    e.events.on('resizeHandled', n),
                                    () => {
                                        t(),
                                            e.events.off('recalculateContent', b),
                                            e.events.off('rest', u),
                                            e.events.off('change', u),
                                            e.events.off('resizeHandled', n);
                                    }
                                );
                            }, [e]),
                            (0, i.useEffect)(() => {
                                if (!F.pending) return;
                                const u = s.O.client.events.mouse.up(() => {
                                        C(ht);
                                    }),
                                    t = s.O.client.events.mouse.move(([u]) => {
                                        yt(e, (t) => {
                                            const r = E.current,
                                                a = d.current,
                                                o = e.getContainerSize();
                                            if (!r || !a || !o) return;
                                            const s = u.screenY - F.offset - r.getBoundingClientRect().y,
                                                i = (s / r.offsetHeight) * o;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: a, thumbOffset: s, contentOffset: i });
                                        });
                                    });
                                return () => {
                                    u(), t();
                                };
                            }, [e, F.offset, F.pending, n, C]);
                        const f = ju((u) => e.applyStepTo(u), m, [e]),
                            g = f[0],
                            v = f[1];
                        (0, i.useEffect)(
                            () => (
                                document.addEventListener('mouseup', v, !0),
                                () => document.removeEventListener('mouseup', v, !0)
                            ),
                            [v],
                        );
                        const h = (e) => {
                            e.target.classList.contains(gt) || _('highlight');
                        };
                        return l().createElement(
                            'div',
                            { className: o()(Ft, u.base), ref: r, onWheel: e.handleMouseWheel },
                            l().createElement('div', {
                                className: o()(Ct, u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(gt) || 0 !== e.button || (_('play'), g(Yu.Next));
                                },
                                ref: a,
                                onMouseEnter: h,
                            }),
                            l().createElement(
                                'div',
                                {
                                    className: o()(pt, u.track),
                                    onMouseDown: (u) => {
                                        const n = d.current;
                                        if (n && 0 === u.button)
                                            if ((_('play'), u.target === n))
                                                C({ pending: !0, offset: u.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((u) => {
                                                    d.current &&
                                                        yt(e, (n) => {
                                                            if (!n) return;
                                                            const r = t(e),
                                                                a = e.clampPosition(n, n.scrollTop + r * u);
                                                            e.applyScroll(a);
                                                        });
                                                })(u.screenY > n.getBoundingClientRect().y ? Yu.Prev : Yu.Next);
                                            }
                                    },
                                    ref: E,
                                    onMouseEnter: h,
                                },
                                l().createElement('div', { ref: d, className: o()(bt, u.thumb) }),
                                l().createElement('div', { className: o()(ft, u.rail) }),
                            ),
                            l().createElement('div', {
                                className: o()(Bt, u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(gt) || 0 !== e.button || (_('play'), g(Yu.Prev));
                                },
                                onMouseUp: v,
                                ref: c,
                                onMouseEnter: h,
                            }),
                        );
                    }),
                    Tt = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Mt = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        scrollClassName: a,
                        scrollClassNames: s,
                        getStepByRailClick: c,
                        onDrag: E,
                    }) => {
                        const d = (0, i.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: o()(Tt.base, e.base) });
                            }, [n]),
                            m = (0, i.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return l().createElement(
                            'div',
                            { className: o()(Tt.defaultScroll, t), onWheel: u.handleMouseWheel },
                            l().createElement(
                                'div',
                                { className: o()(Tt.area, r) },
                                l().createElement(St, { className: a, classNames: s, api: m }, e),
                            ),
                            l().createElement(kt, { getStepByRailClick: c, api: u, onDrag: E, classNames: d }),
                        );
                    },
                    St = ({ className: e, classNames: u, children: t, api: n }) => (
                        (0, i.useEffect)(() => Mu(n.recalculateContent)),
                        l().createElement(
                            'div',
                            { className: o()(Tt.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            l().createElement(
                                'div',
                                { className: o()(Tt.content, null == u ? void 0 : u.content), ref: n.contentRef },
                                t,
                            ),
                        )
                    );
                St.Default = Mt;
                const Ot = { Vertical: r, Horizontal: n },
                    Pt = 'VerticalAutoScroll_base_db',
                    Rt = { base: 'VerticalAutoScroll_barBase_93' },
                    xt = { content: 'VerticalAutoScroll_content_47' },
                    It = ({
                        children: e,
                        isEnabled: u = !0,
                        selectedItemId: t,
                        scrollAreaKey: n = 'scrollArea',
                        withCompleteTrigger: r = !1,
                        containerClasses: a,
                    }) => {
                        const s = (0, i.useState)(!1),
                            c = s[0],
                            E = s[1],
                            d = (0, i.useState)(!1),
                            m = d[0],
                            _ = d[1],
                            A = (0, i.useRef)(null),
                            F = (0, i.useRef)(null),
                            D = At(),
                            C = Ou(() => {
                                E(!0);
                            }),
                            B = (0, i.useCallback)(() => {
                                E(!1);
                            }, []),
                            p = (0, i.useCallback)(() => {
                                const e = F.current,
                                    u = A.current;
                                if (e && D && u) {
                                    const t = e.offsetTop + 0.5 * (e.offsetHeight - u.offsetHeight);
                                    r && D.events.on('rest', C), D.applyScroll(t);
                                }
                            }, [C, D, r]);
                        (0, i.useEffect)(
                            () => () => {
                                D.events.off('rest', C);
                            },
                            [C, D.events, r],
                        ),
                            (0, i.useEffect)(() => {
                                if (u && null !== t) return Mu(p);
                            }, [n, p, t, u]),
                            (0, i.useEffect)(() => {
                                const e = () => {
                                    const e = D.getContainerSize(),
                                        u = D.getWrapperSize();
                                    e && u && _(e > u);
                                };
                                return (
                                    D.events.on('recalculateContent', e),
                                    () => {
                                        D.events.off('recalculateContent', e);
                                    }
                                );
                            }, [m, D]);
                        const b = {
                                scrollContainerRef: A,
                                selectedItemRef: F,
                                selectedItemId: t,
                                isScrollComplete: c,
                                scrollbarActive: m,
                                onScrollAnimationComplete: B,
                            },
                            f = (0, i.cloneElement)(e, b);
                        return l().createElement(
                            'div',
                            { className: o()(Pt, a), ref: A },
                            l().createElement(Ot.Vertical.Area, { api: D, key: n, classNames: xt }, f),
                            l().createElement(Ot.Vertical.Bar, { api: D, classNames: Rt }),
                        );
                    },
                    Lt = {
                        base: 'DropDownItem_base_5e',
                        base__small: 'DropDownItem_base__small_d6',
                        base__medium: 'DropDownItem_base__medium_e4',
                        base__selected: 'DropDownItem_base__selected_8e',
                        base__disabled: 'DropDownItem_base__disabled_21',
                    },
                    zt = ['size', 'classMix', 'onClick', 'itemRenderer'];
                const Ht = (0, i.memo)((e) => {
                        let u = e.size,
                            t = e.classMix,
                            n = e.onClick,
                            r = e.itemRenderer,
                            a = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, zt);
                        const s = a.id,
                            c = a.isSelected,
                            E = a.isDisabled,
                            d = a.label,
                            m = a.soundHover,
                            A = a.soundClick,
                            F = (0, i.useCallback)(
                                (e) => {
                                    E || (n && n(e, s));
                                },
                                [s, E, n],
                            ),
                            D = (0, i.useCallback)(() => {
                                E || (m && _(m));
                            }, [E, m]),
                            C = (0, i.useCallback)(() => {
                                E || (A && _(A));
                            }, [E, A]),
                            B = o()(Lt.base, u && Lt[`base__${u}`], c && Lt.base__selected, E && Lt.base__disabled, t);
                        return l().createElement(
                            'div',
                            { className: B, onMouseEnter: D, onMouseDown: C, onClick: F },
                            r ? r(a) : d,
                        );
                    }),
                    Vt = { base__withScroll: 'DropDownItems_base__withScroll_19' };
                function Wt() {
                    return (
                        (Wt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Wt.apply(this, arguments)
                    );
                }
                const $t = ({
                        size: e,
                        items: u,
                        selectedIds: t,
                        selectedItemId: n,
                        selectedItemRef: r,
                        onClick: a,
                        parentId: s,
                        soundHover: i,
                        soundClick: c,
                        itemClassMix: E,
                        itemRenderer: d,
                        scrollbarActive: m,
                    }) =>
                        l().createElement(
                            'div',
                            { className: o()(Vt.base, m && Vt.base__withScroll) },
                            u.map((u) => {
                                const o = `${s}_${u.id}`;
                                return l().createElement(
                                    'div',
                                    { id: s ? o : void 0, key: o, ref: u.id === n ? r : null },
                                    l().createElement(
                                        Ht,
                                        Wt({ size: e, soundHover: i, soundClick: c, classMix: E, itemRenderer: d }, u, {
                                            onClick: a,
                                            isSelected: t.includes(u.id),
                                        }),
                                    ),
                                );
                            }),
                        ),
                    jt = {
                        base: 'DropDownList_base_62',
                        base__small: 'DropDownList_base__small_0c',
                        base__medium: 'DropDownList_base__medium_99',
                    },
                    Ut = ({
                        parentId: e,
                        size: u = Ru.Medium,
                        items: t,
                        selectedIds: n,
                        isOpen: r,
                        autoScroll: a,
                        classMix: s,
                        itemClassMix: c,
                        itemRenderer: E,
                        onClick: d,
                        soundHover: m,
                        soundClick: _,
                    }) => {
                        const A = (0, i.useState)(null),
                            F = A[0],
                            D = A[1],
                            C = Cu(r);
                        (0, i.useEffect)(() => {
                            if (r && !C) {
                                const e = ((e, u) => {
                                    if (!u.length) return null;
                                    const t = e.find((e) => u.includes(e.id));
                                    return t ? t.id : null;
                                })(t, n);
                                null !== e && D(e);
                            }
                            r || D(null);
                        }, [r, t, n, C]);
                        const B = e ? `${e}_list` : void 0;
                        return l().createElement(
                            'div',
                            { id: B, className: o()(jt.base, jt[`base__${u}`], s) },
                            l().createElement(
                                It,
                                { selectedItemId: F, isEnabled: a },
                                l().createElement($t, {
                                    parentId: e,
                                    items: t,
                                    size: u,
                                    selectedIds: n,
                                    onClick: d,
                                    soundHover: m,
                                    soundClick: _,
                                    itemClassMix: c,
                                    itemRenderer: E,
                                }),
                            ),
                        );
                    },
                    Gt = {
                        base: 'PureDropDown_base_fc',
                        base__small: 'PureDropDown_base__small_a6',
                        base__medium: 'PureDropDown_base__medium_05',
                        control__down: 'PureDropDown_control__down_18',
                        list: 'PureDropDown_list_28',
                        list__up: 'PureDropDown_list__up_a1',
                        list__down: 'PureDropDown_list__down_c4',
                        list__under: 'PureDropDown_list__under_64',
                        list__above: 'PureDropDown_list__above_c8',
                    },
                    qt = (0, i.memo)(
                        ({
                            componentId: e,
                            containerRef: u,
                            items: t,
                            selected: n = [],
                            variant: r = Pu.Basic,
                            size: a = Ru.Medium,
                            multiple: s = !1,
                            autoScroll: c = !0,
                            placeholder: E,
                            classMix: d,
                            className: m,
                            controlRenderer: _,
                            itemRenderer: A,
                            open: F,
                            tooltipArgs: D,
                            onChanges: C,
                            onOpen: B,
                            onClose: p,
                            onClick: b,
                            onClickOutside: f,
                            onMouseEnter: g,
                            onMouseDown: v,
                            onMouseUp: w,
                            onMouseLeave: y,
                            soundHover: N = 'highlight',
                            soundClick: k = 'play',
                            soundItemHover: T,
                            soundItemClick: M,
                        }) => {
                            const S = (0, i.useRef)(null),
                                O = (0, i.useRef)(null),
                                P = (0, i.useRef)({ open: !1, listAbove: !1 }),
                                R = (0, i.useState)(!1),
                                x = R[0],
                                I = R[1],
                                L = (0, i.useState)(!1),
                                z = L[0],
                                H = L[1],
                                V = hu(n, s),
                                W = r !== Pu.Disabled,
                                $ = void 0 === F,
                                j = Boolean($ ? x : F),
                                U = Ou(() => {
                                    P.current.open && ((P.current.open = !1), I(!1), null == p || p());
                                });
                            ue(j ? J.n.ESCAPE : J.n.NONE, U, j);
                            const G = Ou(() => {
                                null == f || f(), $ && (I(!1), (P.current.open = !1), null == p || p());
                            });
                            (0, i.useEffect)(() => {
                                const e = S.current;
                                if (e && j)
                                    return (
                                        h.c1.register(e, G),
                                        () => {
                                            h.c1.unregister(e, G);
                                        }
                                    );
                            }, [j, G]),
                                (0, i.useEffect)(() => {
                                    void 0 !== F && (P.current.open = F);
                                }, [F]);
                            const q = (0, i.useCallback)(() => {
                                if (!S.current || !O.current) return;
                                const e = u && u.current,
                                    t = e ? e.getBoundingClientRect().bottom : window.innerHeight,
                                    n =
                                        S.current.getBoundingClientRect().bottom +
                                            O.current.getBoundingClientRect().height >
                                        t;
                                n !== P.current.listAbove && ((P.current.listAbove = n), H(n));
                            }, [u]);
                            (0, i.useEffect)(() => Mu(() => Mu(q)), [q, a, t.length]);
                            const K = (0, i.useCallback)(
                                    (e) => {
                                        const u = V.findIndex((u) => u === e) > -1;
                                        let t = [];
                                        (t = s ? (u ? V.filter((u) => u !== e) : [e, ...V]) : u ? [] : [e]),
                                            null == C || C(t);
                                    },
                                    [s, C, V],
                                ),
                                Y = (0, i.useCallback)(() => {
                                    $ &&
                                        ((P.current.open = !P.current.open),
                                        I(P.current.open),
                                        P.current.open ? null == B || B() : null == p || p());
                                }, [$, B, p]),
                                X = (0, i.useCallback)(
                                    (e) => {
                                        W && Y(), null == b || b(e);
                                    },
                                    [W, b, Y],
                                ),
                                Z = (0, i.useCallback)(
                                    (e, u) => {
                                        null == b || b(e, u), K(u), s || Y();
                                    },
                                    [b, s, Y, K],
                                ),
                                Q = (0, i.useMemo)(
                                    () =>
                                        t
                                            .filter((e) => V.includes(e.id))
                                            .map((e) => e.label)
                                            .join(', '),
                                    [t, V],
                                ),
                                ee = (0, i.useMemo)(() => t.filter((e) => V.includes(e.id)), [t, V]),
                                te = _ ? _(ee) : void 0;
                            return l().createElement(
                                'div',
                                {
                                    id: e,
                                    ref: S,
                                    className: o()(Gt.base, Gt[`base__${a}`], m, null == d ? void 0 : d.base),
                                    onMouseEnter: g,
                                    onMouseUp: w,
                                    onMouseDown: v,
                                    onMouseLeave: y,
                                },
                                l().createElement(
                                    'div',
                                    { className: o()(Gt.control, j && Gt.control__down) },
                                    l().createElement(
                                        Tu,
                                        { tooltipArgs: D },
                                        l().createElement(Wu, {
                                            parentId: e,
                                            size: a,
                                            variant: r,
                                            isOpen: j,
                                            placeholder: E,
                                            label: Q,
                                            classMix: d && d.control,
                                            onClick: X,
                                            soundHover: N,
                                            soundClick: k,
                                            customControl: te,
                                        }),
                                    ),
                                ),
                                l().createElement(
                                    'div',
                                    {
                                        ref: O,
                                        className: o()(
                                            Gt.list,
                                            j ? Gt.list__down : Gt.list__up,
                                            z ? Gt.list__above : Gt.list__under,
                                        ),
                                    },
                                    l().createElement(Ut, {
                                        parentId: e,
                                        size: a,
                                        items: t,
                                        selectedIds: V,
                                        isOpen: j,
                                        autoScroll: c,
                                        classMix: d && d.list,
                                        itemClassMix: d && d.item,
                                        itemRenderer: A,
                                        onClick: Z,
                                        soundHover: T || N,
                                        soundClick: M || k,
                                    }),
                                ),
                            );
                        },
                    ),
                    Kt = ['items', 'selected', 'multiple', 'onChanges'];
                function Yt() {
                    return (
                        (Yt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Yt.apply(this, arguments)
                    );
                }
                const Xt = (e) => {
                        let u = e.items,
                            t = e.selected,
                            n = void 0 === t ? [] : t,
                            r = e.multiple,
                            a = void 0 !== r && r,
                            o = e.onChanges,
                            s = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, Kt);
                        const c = (0, i.useState)(hu(n, a)),
                            E = c[0],
                            d = c[1],
                            m = (0, i.useCallback)(
                                (e) => {
                                    d(e), o && o(u.filter((u) => e.includes(u.id)));
                                },
                                [u, o],
                            );
                        return l().createElement(qt, Yt({ onChanges: m, items: u, selected: E, multiple: a }, s));
                    },
                    Zt = ['modelPath', 'pure'];
                function Qt() {
                    return (
                        (Qt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Qt.apply(this, arguments)
                    );
                }
                const Jt = (0, i.memo)((e) => {
                        let u = e.modelPath,
                            t = e.pure,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, Zt);
                        const r = ce(u),
                            a = r.onChange,
                            o = r.multiple,
                            s = ce(`${u}.items`),
                            c = ce(`${u}.selected`),
                            E = s.map(({ value: e }) => e),
                            d = c.map(({ value: e }) => e),
                            m = (0, i.useCallback)(
                                (e) => {
                                    const u = e ? e.map(({ id: e }) => e).join(', ') : '';
                                    a({ selectedIds: u });
                                },
                                [a],
                            ),
                            _ = (0, i.useCallback)(
                                (e) => {
                                    a({ selectedIds: e ? e.join(', ') : '' });
                                },
                                [a],
                            );
                        return t
                            ? l().createElement(qt, Qt({ items: E, selected: d, multiple: o, onChanges: _ }, n))
                            : l().createElement(Xt, Qt({ items: E, selected: d, multiple: o, onChanges: m }, n));
                    }),
                    en = 'DropDown_memberCountDropdown_67',
                    un = 'DropDown_memberCountDescription_8a',
                    tn = 'DropDown_memberCountDropdownItem_f5',
                    nn = (e) => {
                        var u;
                        const t = null == (u = e.meta) ? void 0 : u.tooltipText;
                        return l().createElement(
                            O,
                            { isEnabled: t, body: t },
                            l().createElement('span', null, e.label),
                        );
                    },
                    rn = () => {
                        const e = ce('model.header.memberCountDropdown'),
                            u = e.isDisabled,
                            t = e.tooltipText,
                            n = { body: t };
                        return l().createElement(
                            l().Fragment,
                            null,
                            l().createElement(Jt, {
                                modelPath: 'model.header.memberCountDropdown',
                                classMix: { base: en, item: tn },
                                size: Ru.Small,
                                itemRenderer: nn,
                                variant: u ? Pu.Disabled : Pu.Basic,
                                tooltipArgs: t ? n : void 0,
                                pure: !0,
                            }),
                            l().createElement(
                                'div',
                                { className: un },
                                R.strings.comp7.membersWindow.memberCountDropdown.description(),
                            ),
                        );
                    },
                    an = 'Header_base_26',
                    on = 'Header_base__wide_be',
                    sn = 'Header_buttonContainer_84',
                    ln = 'Header_leavePlatoonButton_e4',
                    cn = 'Header_dropdowns_f3',
                    En = 'Header_muteButtonContainer_7e',
                    dn = 'Header_muteIcon_54';
                function mn() {
                    return (
                        (mn =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        mn.apply(this, arguments)
                    );
                }
                const _n = () => {
                    const e = ce().prebattleType,
                        u = ce('model.header.btnLeavePlatoon'),
                        t = ce('model.header.btnMuteAll'),
                        n = ce('model.header'),
                        r = n.backgroundImage,
                        a = n.showNoBonusPlaceholder,
                        s = n.showInfoIcon,
                        c = e === Q.Comp7,
                        E = (0, i.useCallback)(() => {
                            u.onClick(), _(R.sounds.gui_platoon_2_leave());
                        }, [u]),
                        d = (0, i.useCallback)(() => t.onClick(), [t]);
                    return l().createElement(
                        'div',
                        { className: o()(an, c && on), style: ve(r) },
                        l().createElement(
                            'div',
                            { className: sn },
                            l().createElement(
                                Ne,
                                mn({}, u, { onClick: E, cButtonProps: { type: D.secondary }, className: o()(c && ln) }),
                            ),
                            c && l().createElement('div', { className: cn }, l().createElement(rn, null)),
                        ),
                        t.isVisible &&
                            l().createElement(
                                O,
                                { header: t.tooltipHeader, body: t.tooltipBody },
                                l().createElement(
                                    'div',
                                    { className: En },
                                    l().createElement(
                                        We,
                                        { onClick: d, active: t.isSelected },
                                        l().createElement('div', { className: dn }),
                                    ),
                                ),
                            ),
                        a ? l().createElement(vu, null) : l().createElement(au, null),
                        s && l().createElement(we, null),
                    );
                };
                let An;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(An || (An = {}));
                const Fn = ({
                        children: e,
                        contentID: u,
                        decoratorID: t = 0,
                        targetId: n = 0,
                        args: r,
                        isEnabled: a = !0,
                        onMouseDown: o,
                    }) => {
                        const s = (0, i.useCallback)(() => {
                                (0, h.c9)(h.B0.CONTEXT_MENU, {
                                    contentID: u,
                                    decoratorID: t,
                                    targetID: n,
                                    isMouseEvent: !0,
                                    on: !0,
                                    args: r,
                                }),
                                    A.playYes();
                            }, [r, u, t, n]),
                            l = (0, i.useCallback)(() => {
                                (0, h.c9)(h.B0.CONTEXT_MENU, {
                                    contentID: u,
                                    decoratorID: t,
                                    targetID: n,
                                    isMouseEvent: !1,
                                    on: !1,
                                });
                            }, [u, t, n]),
                            c = (0, i.useCallback)(
                                (e) => {
                                    o && o(e), ((e) => e.button === An.RIGHT)(e) && s();
                                },
                                [o, s],
                            );
                        return (
                            (0, i.useEffect)(() => {
                                !1 === a && l();
                            }, [a, l]),
                            a ? (0, i.cloneElement)(e, { onMouseDown: c }) : e
                        );
                    },
                    Dn = ['children'];
                function Cn() {
                    return (
                        (Cn =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Cn.apply(this, arguments)
                    );
                }
                const Bn = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, Dn);
                        return l().createElement(
                            Fn,
                            Cn({}, t, { contentID: R.views.common.BackportContextMenu('resId') }),
                            u,
                        );
                    },
                    pn = 'SlotLabel_formattedText_e8',
                    bn = ({ slotLabelElements: e }) => {
                        const u = (0, i.useMemo)(() => (e) => ('' === e ? {} : JSON.parse(e)), []);
                        return l().createElement(
                            l().Fragment,
                            null,
                            e.map(({ value: e }, t) =>
                                l().createElement(
                                    'div',
                                    { key: e.content + t, style: u(e.styleJson) },
                                    l().createElement(pu, { text: e.content, classMix: pn }),
                                ),
                            ),
                        );
                    },
                    fn = {
                        base: 'NoPlayer_base_42',
                        base__disabled: 'NoPlayer_base__disabled_98',
                        central: 'NoPlayer_central_8a',
                        image: 'NoPlayer_image_41',
                        image__disabled: 'NoPlayer_image__disabled_14',
                        image__empty: 'NoPlayer_image__empty_b1',
                        image__spinner: 'NoPlayer_image__spinner_bd',
                        spinner: 'NoPlayer_spinner_44',
                        footer: 'NoPlayer_footer_68',
                    };
                let gn;
                !(function (e) {
                    (e.spinner = 'spinner'), (e.disabled = 'disabled'), (e.empty = 'empty');
                })(gn || (gn = {}));
                const vn = ({ text: e, type: u, slotLabelElements: t }) => {
                    const n = o()(fn.base, u === gn.disabled && fn.base__disabled),
                        r = o()(fn.image, fn[`image__${u}`]);
                    return l().createElement(
                        'div',
                        { className: n },
                        l().createElement(
                            'div',
                            { className: fn.central },
                            l().createElement('div', { className: r }),
                            e,
                        ),
                        l().createElement(
                            'div',
                            { className: fn.footer },
                            t.length > 0 && l().createElement(bn, { slotLabelElements: t }),
                        ),
                    );
                };
                let hn, wn;
                !(function (e) {
                    (e.Squad = 'squad'),
                        (e.Event = 'event'),
                        (e.Comp7 = 'comp7'),
                        (e.BattleRoyal = 'battle_royal'),
                        (e.Epic = 'epic'),
                        (e.MapBox = 'mapbox');
                })(hn || (hn = {})),
                    (function (e) {
                        (e[(e.None = 0)] = 'None'), (e[(e.ModeOffline = 1)] = 'ModeOffline');
                    })(wn || (wn = {}));
                const yn = 'WTRInfo_wtr_5e',
                    Nn = 'WTRInfo_wtrIcon_a9',
                    kn = 'WTRInfo_wtrValue_80',
                    Tn = ({ rating: e }) =>
                        l().createElement(
                            'div',
                            { className: yn },
                            l().createElement('div', { className: Nn }),
                            l().createElement('span', { className: kn }, e),
                        ),
                    Mn = (e) => e.replace('-', '_'),
                    Sn = (e, u) =>
                        String(
                            u
                                ? R.images.gui.maps.icons.vehicleTypes.elite.$dyn(Mn(e))
                                : R.images.gui.maps.icons.vehicleTypes.$dyn(Mn(e)),
                        ),
                    On = (e, u) => String(R.images.gui.maps.icons.vehicle.c_420x307.$dyn(Mn(u).toLowerCase())),
                    Pn = (e, u) =>
                        String(R.images.gui.maps.icons.battleRoyale.vehicles.c_210x153.$dyn(Mn(u).toLowerCase())),
                    Rn = 'MutedIcon_base_d2',
                    xn = () => {
                        const e = R.strings.platoon.members.card.muted.caption(),
                            u = R.strings.platoon.members.card.muted.description();
                        return l().createElement(
                            O,
                            { header: e, body: u },
                            l().createElement('div', { className: Rn }),
                        );
                    };
                let In;
                !(function (e) {
                    (e.default = 'default'), (e.x48 = 'x48'), (e.x80 = 'x80'), (e.x220 = 'x220');
                })(In || (In = {}));
                const Ln = {
                        base: 'Badge_base_ac',
                        base__default: 'Badge_base__default_c9',
                        base__x48: 'Badge_base__x48_e4',
                    },
                    zn = { [In.default]: 'c_24x24', [In.x48]: 'c_48x48', [In.x80]: 'c_80x80', [In.x220]: 'c_220x220' },
                    Hn = ({ badgeID: e, size: u = In.default, className: t }) => {
                        const n = R.images.gui.maps.icons.library.badges.$dyn(zn[u]);
                        return l().createElement('div', {
                            className: o()(Ln.base, Ln[`base__${u}`], t),
                            style: { backgroundImage: `url(${n.$dyn(`badge_${e}`)})` },
                        });
                    },
                    Vn = {
                        base: 'PlayerNickname_base_32',
                        userName: 'PlayerNickname_userName_cc',
                        igrIcon: 'PlayerNickname_igrIcon_34',
                        base__default: 'PlayerNickname_base__default_8d',
                        base__x48: 'PlayerNickname_base__x48_84',
                        suffixBadgeWrapper: 'PlayerNickname_suffixBadgeWrapper_cc',
                        suffixBadgeStripe: 'PlayerNickname_suffixBadgeStripe_8a',
                        base__inverted: 'PlayerNickname_base__inverted_34',
                        suffixBadge: 'PlayerNickname_suffixBadge_bd',
                        anonymizedIcon: 'PlayerNickname_anonymizedIcon_80',
                    },
                    Wn = (0, i.memo)(({ tooltipHeaderName: e }) => {
                        const u = (0, i.useMemo)(() => {
                                return (
                                    (u = R.strings.tooltips.anonymizer.teamStats.header()),
                                    (t = { name: e }),
                                    u.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                                        const u = 0 === e.indexOf('%') ? 2 : 1;
                                        return String(t[e.slice(u, -u)]);
                                    })
                                );
                                var u, t;
                            }, [e]),
                            t = R.strings.tooltips.anonymizer.teamStats.body();
                        return l().createElement(
                            O,
                            { header: u, body: t },
                            l().createElement('div', { className: Vn.anonymizedIcon }),
                        );
                    });
                function $n() {
                    return (
                        ($n =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        $n.apply(this, arguments)
                    );
                }
                const jn = { [In.default]: 'c_64x24', [In.x48]: 'c_68x28' },
                    Un = { [In.default]: 'c_48x48', [In.x48]: 'c_48x48' },
                    Gn = ({
                        userName: e,
                        clanAbbrev: u = '',
                        igrType: t = 0,
                        badge: n = { badgeID: '' },
                        suffixBadge: r = { badgeID: '' },
                        isInverted: a = !1,
                        isFakeNameVisible: s = !1,
                        isAnonymizerShown: c = !1,
                        hiddenUserName: E = '',
                        size: d = In.default,
                        userNameClassName: m = '',
                        clanTagClassName: _ = '',
                    }) => {
                        const A = R.images.gui.maps.icons.library.badges.strips.$dyn(jn[d]),
                            F = (0, i.useMemo)(
                                () => ({ backgroundImage: `url(${A.$dyn(`strip_${r.badgeID}`)})` }),
                                [r, A],
                            ),
                            D = R.images.gui.maps.icons.library.badges.$dyn(Un[d]),
                            C = (0, i.useMemo)(
                                () => ({ backgroundImage: `url(${D.$dyn(`badge_${r.badgeID}`)})` }),
                                [r, D],
                            ),
                            B = u ? `[${u}]` : '',
                            p = o()(Vn.base, Vn[`base__${d}`], a && Vn.base__inverted),
                            b = o()(Vn.userName, m),
                            f = o()(Vn.clanTag, _),
                            g = e !== E,
                            v = s ? `${E}${B}` : E,
                            h = Boolean(n.badgeID) && l().createElement(Hn, $n({ size: d }, n, { key: 'badge' })),
                            w = Date.now(),
                            y = [
                                h,
                                [
                                    l().createElement(
                                        'div',
                                        { className: b, key: 'userName' },
                                        l().createElement(zu, { content: e, key: w }),
                                    ),
                                    !s && Boolean(B) && l().createElement('div', { className: f, key: 'clanTag' }, B),
                                ],
                                0 !== t && l().createElement('div', { className: Vn.igrIcon, key: 'igrType' }),
                                Boolean(r.badgeID) &&
                                    l().createElement(
                                        'div',
                                        { className: Vn.suffixBadgeWrapper, key: 'suffixBadge' },
                                        l().createElement('div', { className: Vn.suffixBadgeStripe, style: F }),
                                        l().createElement('div', { className: Vn.suffixBadge, style: C }),
                                    ),
                                c && g && l().createElement(Wn, { tooltipHeaderName: v, key: 'anonymizer' }),
                            ];
                        return l().createElement('div', { className: p }, a ? y.reverse() : y);
                    },
                    qn = 'PlayerName_userName_c9',
                    Kn = { badgeID: '' },
                    Yn = ({ name: e, badgeID: u, clanTag: t, color: n }) => {
                        const r = (0, i.useMemo)(() => ({ badgeID: u || '' }), [u]),
                            a = (0, i.useMemo)(() => ({ color: n }), [n]);
                        return l().createElement(
                            'div',
                            { style: a },
                            l().createElement(Gn, {
                                userName: e,
                                badge: r,
                                suffixBadge: Kn,
                                clanAbbrev: t,
                                userNameClassName: qn,
                            }),
                        );
                    };
                let Xn;
                !(function (e) {
                    (e.IRON = 'iron'),
                        (e.BRONZE = 'bronze'),
                        (e.SILVER = 'silver'),
                        (e.GOLD = 'gold'),
                        (e.ENAMEL = 'enamel'),
                        (e.MAXIMUM = 'prestige'),
                        (e.UNDEFINED = 'undefined');
                })(Xn || (Xn = {}));
                const Zn = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    Qn = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                function Jn(e) {
                    let u = '';
                    for (let t = Qn.length - 1; t >= 0; t--) for (; e >= Qn[t]; ) (u += Zn[t]), (e -= Qn[t]);
                    return u;
                }
                ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE());
                const er = {
                        base: 'PrestigeProgressTab_base_7c',
                        icon: 'PrestigeProgressTab_icon_0a',
                        base__left: 'PrestigeProgressTab_base__left_55',
                        level: 'PrestigeProgressTab_level_ba',
                        base__right: 'PrestigeProgressTab_base__right_5d',
                        base__iron: 'PrestigeProgressTab_base__iron_03',
                        base__bronze: 'PrestigeProgressTab_base__bronze_b8',
                        base__silver: 'PrestigeProgressTab_base__silver_ef',
                        base__gold: 'PrestigeProgressTab_base__gold_b6',
                        base__enamel: 'PrestigeProgressTab_base__enamel_39',
                    },
                    ur = 'right',
                    tr = R.strings.prestige.tooltip.tab,
                    nr = R.images.gui.maps.icons.prestige.tab,
                    rr = (e) => {
                        if (e.type === Xn.MAXIMUM) return nr.prestige();
                        var u;
                        return nr
                            .$dyn(e.type)
                            .$dyn((u = e.level) < 10 ? 'short' : u < 100 ? 'medium' : 'long')
                            .$dyn(`c_${e.grade}`);
                    },
                    ar = ({ emblem: e, direction: u = ur, isTooltipEnabled: t = !1 }) =>
                        e.type === Xn.UNDEFINED
                            ? null
                            : l().createElement(
                                  O,
                                  { header: tr.header(), body: tr.body(), isEnabled: t },
                                  l().createElement(
                                      'div',
                                      { className: o()(er.base, er[`base__${e.type}`], er[`base__${u}`]) },
                                      l().createElement('div', {
                                          className: er.icon,
                                          style: { backgroundImage: `url(${rr(e)})` },
                                      }),
                                      e.type !== Xn.MAXIMUM &&
                                          l().createElement('div', { className: er.level }, e.level),
                                  ),
                              ),
                    or = {
                        base: 'VehicleDescription_base_1b',
                        vehicleType: 'VehicleDescription_vehicleType_a1',
                        vehicleType__elite: 'VehicleDescription_vehicleType__elite_71',
                        prestigeTab__short: 'VehicleDescription_prestigeTab__short_c8',
                        prestigeTab__medium: 'VehicleDescription_prestigeTab__medium_37',
                        prestigeTab__long: 'VehicleDescription_prestigeTab__long_dd',
                    },
                    sr = ({
                        type: e,
                        isPremium: u,
                        name: t,
                        tier: n,
                        className: r,
                        prebattleType: a,
                        isPrestigeAvailable: s,
                        prestigeEmblem: i,
                    }) => {
                        const c = s && i.type !== Xn.UNDEFINED;
                        return l().createElement(
                            'div',
                            { className: o()(or.base, r) },
                            a !== hn.BattleRoyal && Jn(n),
                            l().createElement('div', {
                                className: o()(or.vehicleType, u && or.vehicleType__elite),
                                style: ve(Sn(e, u)),
                            }),
                            t,
                            c &&
                                l().createElement(
                                    'div',
                                    {
                                        className: o()(
                                            or.prestigeTab,
                                            ((E = i),
                                            E.type === Xn.MAXIMUM
                                                ? or.prestigeTab__medium
                                                : E.level < 10
                                                  ? or.prestigeTab__short
                                                  : E.level < 100
                                                    ? or.prestigeTab__medium
                                                    : or.prestigeTab__long),
                                        ),
                                    },
                                    l().createElement(ar, { emblem: i, isTooltipEnabled: !0 }),
                                ),
                        );
                        var E;
                    },
                    ir = (0, i.memo)(({ src: e, className: u, autoPlay: t = !1, loop: n = !1 }) => {
                        const r = (0, i.useRef)(null);
                        return (
                            (0, i.useEffect)(() => {
                                engine.on('clientMinimized', (e) => {
                                    r.current && (e ? r.current.pause() : r.current.play());
                                });
                            }, []),
                            l().createElement('video', { ref: r, className: u, src: e, autoPlay: t, loop: n })
                        );
                    });
                ir.displayName = 'Video';
                const lr = 'VoiceAnimation_talkingAnimation_c4',
                    cr = 'VoiceAnimation_talkingAnimation__visible_18',
                    Er = ({ visible: e }) => {
                        const u = o()(lr, e && cr);
                        return l().createElement(ir, {
                            src: R.videos.platoon.VoiceChat(),
                            autoPlay: !0,
                            loop: !0,
                            className: u,
                        });
                    },
                    dr = ({ estimatedTime: e }) =>
                        l().createElement(
                            l().Fragment,
                            null,
                            l().createElement('div', null, R.strings.platoon.members.card.searching()),
                            l().createElement('span', null, '(', e, ')'),
                        ),
                    mr = (e, u, t, n) => {
                        let r = R.images.gui.maps.icons.platoon.members_window.tall_slot.cards;
                        if (n && n !== hn.Squad) {
                            const e = r.$dyn(n.toString());
                            e && (r = e);
                        }
                        let a = null;
                        return (
                            (a = e
                                ? r.$dyn('in_battle')
                                : u
                                  ? t
                                      ? r.$dyn('ready_player')
                                      : r.$dyn('ready')
                                  : t
                                    ? r.$dyn('not_ready_player')
                                    : r.$dyn('not_ready')),
                            a || mr(e, u, t)
                        );
                    },
                    _r = 'Player_base_7d',
                    Ar = 'Player_topping_6c',
                    Fr = 'Player_toppingBack_cd',
                    Dr = 'Player_topping__isPlayer_03',
                    Cr = 'Player_topping__isCommander_b9',
                    Br = 'Player_toppingPremiumIcon_20',
                    pr = 'Player_toppingPlayerIcon_0b',
                    br = 'Player_mutedContainer_69',
                    fr = 'Player_name_11',
                    gr = 'Player_footer_1a',
                    vr = 'Player_readiness_f9',
                    hr = 'Player_readiness__isReady_c9',
                    wr = 'Player_vehicleImage_42',
                    yr = 'Player_flagImage_4e';
                function Nr() {
                    return (
                        (Nr =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Nr.apply(this, arguments)
                    );
                }
                const kr = ({ player: e, isInBattle: u, infoText: t, prebattleType: n }) => {
                        const r = o()(vr, e.isReady && !u && hr),
                            a = n === hn.BattleRoyal ? Pn : On,
                            s = e.isReady ? a(e.vehicle.nation, e.vehicle.techName) : '',
                            c = e.isReady
                                ? String(
                                      R.images.gui.maps.icons.platoon.members_window.tall_slot.flags.$dyn(
                                          e.vehicle.nation,
                                      ),
                                  )
                                : '',
                            E = (0, i.useMemo)(
                                () => mr(u, e.isReady, e.isCurrentUser, n),
                                [u, e.isReady, e.isCurrentUser, n],
                            ),
                            d = o()(Ar, e.isCommander ? Cr : Dr);
                        return l().createElement(
                            'div',
                            { className: _r, style: ve(E) },
                            l().createElement(
                                'div',
                                { className: d },
                                l().createElement('div', { className: Fr }),
                                e.isPrem && l().createElement('div', { className: Br }),
                                l().createElement(Er, { visible: e.voice.isSpeaking }),
                                l().createElement('div', { className: pr }),
                            ),
                            !u &&
                                e.isReady &&
                                l().createElement(
                                    l().Fragment,
                                    null,
                                    l().createElement('div', { className: yr, style: ve(c) }),
                                    l().createElement('div', { className: wr, style: ve(s) }),
                                ),
                            e.isIgnored &&
                                l().createElement('div', {
                                    className: yr,
                                    style: ve(R.images.gui.maps.icons.platoon.members_window.tall_slot.cards.ignored()),
                                }),
                            l().createElement(
                                'div',
                                { className: br },
                                e.voice.isMutedByUser && l().createElement(xn, null),
                            ),
                            l().createElement('div', { className: fr }, l().createElement(Yn, e.commonData)),
                            '' !== e.commonData.rating && l().createElement(Tn, { rating: e.commonData.rating }),
                            l().createElement(
                                'div',
                                { className: gr },
                                e.isReady && !u
                                    ? l().createElement(
                                          sr,
                                          Nr({}, e.vehicle, {
                                              prebattleType: n,
                                              isPrestigeAvailable: e.isPrestigeAvailable,
                                              prestigeEmblem: e.prestigeEmblem,
                                          }),
                                      )
                                    : t,
                            ),
                            l().createElement('div', { className: r }),
                        );
                    },
                    Tr = (e) => {
                        const u = (0, i.useMemo)(
                            () =>
                                e.isEmpty
                                    ? ((e) =>
                                          e.isDisabled
                                              ? {
                                                    text: R.strings.platoon.members.card.disabled(),
                                                    type: gn.disabled,
                                                    slotLabelElements: e.slotLabelElements,
                                                }
                                              : e.isSearching
                                                ? {
                                                      text: l().createElement(dr, { estimatedTime: e.estimatedTime }),
                                                      type: gn.spinner,
                                                      slotLabelElements: e.slotLabelElements,
                                                  }
                                                : {
                                                      text: R.strings.platoon.members.card.empty(),
                                                      type: gn.empty,
                                                      slotLabelElements: e.slotLabelElements,
                                                  })(e)
                                    : {
                                          isInBattle: e.isInBattle,
                                          player: e.player,
                                          infoText: e.infoText,
                                          prebattleType: e.prebattleType,
                                      },
                            [e],
                        );
                        return (0, i.useMemo)(() => (e) => void 0 !== e.isInBattle, [])(u)
                            ? l().createElement(kr, u)
                            : l().createElement(vn, u);
                    },
                    Mr = R.images.gui.maps.icons.platoon.members_window.wide_slot,
                    Sr = Mr.cards,
                    Or = R.strings.platoon.members.card,
                    Pr = 'Vehicle_base_9f',
                    Rr = 'Vehicle_vehicle_15',
                    xr = 'Vehicle_description_4f';
                function Ir() {
                    return (
                        (Ir =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ir.apply(this, arguments)
                    );
                }
                const Lr = ({ vehicle: e, prebattleType: u, isPrestigeAvailable: t, prestigeEmblem: n }) => {
                        const r =
                            ((a = e.nation),
                            (o = e.techName),
                            String(R.images.gui.maps.icons.vehicle.$dyn(`${a}_${Mn(o)}`)));
                        var a, o;
                        return l().createElement(
                            'div',
                            { className: Pr },
                            l().createElement(
                                sr,
                                Ir({}, e, {
                                    className: xr,
                                    prebattleType: u,
                                    isPrestigeAvailable: t,
                                    prestigeEmblem: n,
                                }),
                            ),
                            l().createElement('div', { className: Rr, style: ve(r) }),
                        );
                    },
                    zr = {
                        base: 'WideSlot_base_9b',
                        mutedContainer: 'WideSlot_mutedContainer_0d',
                        icon: 'WideSlot_icon_5b',
                        memberType: 'WideSlot_memberType_68',
                        spinner: 'WideSlot_spinner_6c',
                        badge: 'WideSlot_badge_5c',
                        mainContent: 'WideSlot_mainContent_76',
                        mainContent__isEmpty: 'WideSlot_mainContent__isEmpty_62',
                        flag: 'WideSlot_flag_65',
                        detailsContainer: 'WideSlot_detailsContainer_30',
                        readiness: 'WideSlot_readiness_6d',
                    },
                    Hr = (e) => {
                        const u = e.player,
                            t = (0, i.useMemo)(
                                () =>
                                    (({ slot: e, player: u }) => {
                                        const t = e.isInBattle,
                                            n = e.isEmpty,
                                            r = e.isDisabled,
                                            a = e.errorType,
                                            o = u.isReady,
                                            s = u.isCurrentUser;
                                        return a
                                            ? Sr.$dyn('error_' + a)
                                            : t
                                              ? Sr.in_battle_wide()
                                              : n
                                                ? Sr.empty_wide()
                                                : r
                                                  ? Sr.disable_wide()
                                                  : o
                                                    ? s
                                                        ? Sr.ready_player()
                                                        : Sr.ready()
                                                    : o
                                                      ? void 0
                                                      : s
                                                        ? Sr.not_ready_player()
                                                        : Sr.not_ready_wide();
                                    })({ slot: e, player: u }),
                                [u, e],
                            ),
                            n = (0, i.useMemo)(
                                () =>
                                    (({ slot: e, player: u }) => {
                                        const t = e.isSearching,
                                            n = e.isEmpty,
                                            r = e.isDisabled,
                                            a = u.isCommander,
                                            o = u.isPrem;
                                        return t
                                            ? Mr.spinner()
                                            : r
                                              ? Mr.disabled()
                                              : n
                                                ? Mr.empty()
                                                : a
                                                  ? o
                                                      ? Mr.commander_prem()
                                                      : Mr.commander()
                                                  : a
                                                    ? void 0
                                                    : o
                                                      ? Mr.member_prem()
                                                      : Mr.member();
                                    })({ slot: e, player: u }),
                                [u, e],
                            ),
                            r = (0, i.useMemo)(
                                () =>
                                    ((e) =>
                                        e.isSearching
                                            ? `${Or.searching()} (${e.estimatedTime})`
                                            : e.isDisabled
                                              ? Or.disabledVertical()
                                              : e.isEmpty
                                                ? Or.empty()
                                                : l().createElement(Yn, e.player.commonData))(e),
                                [e],
                            ),
                            a = (0, i.useMemo)(() => ({ slotId: e.slotId }), [e.slotId]),
                            s =
                                !u.isReady || e.isInBattle
                                    ? e.infoText
                                    : l().createElement(Lr, {
                                          vehicle: u.vehicle,
                                          prebattleType: e.prebattleType,
                                          isPrestigeAvailable: u.isPrestigeAvailable,
                                          prestigeEmblem: u.prestigeEmblem,
                                      }),
                            c = !e.isInBattle && u.vehicle.nation;
                        return l().createElement(
                            k,
                            {
                                contentId: R.views.lobby.platoon.WTRTooltip('resId'),
                                isEnabled: '' !== u.commonData.rating,
                                args: a,
                            },
                            l().createElement(
                                'div',
                                { className: zr.base, style: ve(t) },
                                c &&
                                    l().createElement('div', {
                                        className: zr.flag,
                                        style: ve(
                                            `${R.images.gui.maps.icons.platoon.members_window.wide_slot.flags.$dyn(u.vehicle.nation)}`,
                                        ),
                                    }),
                                l().createElement(
                                    'div',
                                    { className: zr.mutedContainer },
                                    u.voice.isMutedByUser && l().createElement(xn, null),
                                ),
                                l().createElement(
                                    'div',
                                    { className: o()(zr.memberType, e.isDisabled && zr.isDisabled) },
                                    l().createElement(Er, { visible: u.voice.isSpeaking }),
                                    l().createElement('div', {
                                        style: ve(n),
                                        className: o()(zr.icon, e.isSearching && zr.spinner),
                                    }),
                                ),
                                l().createElement(
                                    'div',
                                    { className: o()(zr.mainContent, e.isEmpty && zr.mainContent__isEmpty) },
                                    r,
                                ),
                                !e.isEmpty && l().createElement('div', { className: zr.detailsContainer }, s),
                                u.isReady &&
                                    !e.isInBattle &&
                                    l().createElement('div', {
                                        className: o()(zr.readiness, u.isReady && zr.readiness__isReady),
                                    }),
                            ),
                        );
                    },
                    Vr = 'SlotContainer_base__short_e7';
                function Wr() {
                    return (
                        (Wr =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Wr.apply(this, arguments)
                    );
                }
                const $r = ({ slot: e, isHorizontal: u, isShort: t }) => {
                        const n = u ? Tr : Hr,
                            r = e.player.commonData.name,
                            a = (0, i.useMemo)(() => ({ userName: r }), [r]),
                            s = l().createElement(
                                'div',
                                { className: o()(t && Vr) },
                                l().createElement(n, Wr({ key: e.slotId }, e)),
                            );
                        return e.player.isCurrentUser || e.isEmpty
                            ? s
                            : l().createElement(Bn, { args: a, key: e.slotId }, s);
                    },
                    jr = 'Slots_base_7e',
                    Ur = 'Slots_base__isHorizontal_aa',
                    Gr = 'Slots_base__isHorizontal__short_ba',
                    qr = () => {
                        const e = ce(),
                            u = e.isHorizontal,
                            t = e.isShort,
                            n = ce('model.slots'),
                            r = o()(jr, u && Ur, u && t && Gr);
                        return l().createElement(
                            'div',
                            { className: r },
                            n.map((e) =>
                                l().createElement($r, {
                                    slot: e.value,
                                    isHorizontal: u,
                                    isShort: t,
                                    key: e.value.slotId,
                                }),
                            ),
                        );
                    },
                    Kr = 'MembersWindow_base_9b',
                    Yr = 'MembersWindow_base__isHorizontal_ce',
                    Xr = 'MembersWindow_base__isHorizontal__short_0c',
                    Zr = 'MembersWindow_base__isVertical_44',
                    Qr = 'MembersWindow_base__isExtendedVertical_f6',
                    Jr = 'MembersWindow_chatContainer_41',
                    ea = 'MembersWindow_commanderControls_cf',
                    ua = 'MembersWindow_commanderControls__center_6d',
                    ta = 'MembersWindow_platoon_60',
                    na = 'MembersWindow_slots_21',
                    ra = () => {
                        const e = ce(),
                            u = e.canMinimize,
                            t = e.prebattleType,
                            n = e.isCommander,
                            r = e.isHorizontal,
                            a = e.isShort,
                            c = e.onClosed,
                            E = e.onMinimized,
                            d = e.onFocusChange,
                            m = e.windowTooltipHeader,
                            _ = e.windowTooltipBody,
                            A = e.rawTitle,
                            F = e.shouldShowFindPlayersButton,
                            D = t === Q.Comp7,
                            C = (0, i.useCallback)(() => {
                                s.O.view.setEventHandled(), c();
                            }, [c]),
                            B = (0, i.useCallback)(() => E(), [E]),
                            p = (0, i.useCallback)(
                                (e) => {
                                    d({ isFocused: e });
                                },
                                [d],
                            );
                        return (
                            ue(J.n.ESCAPE, () => C()),
                            l().createElement(
                                Z,
                                {
                                    showMinimizeBtn: u,
                                    title: A,
                                    infoTooltipHeader: m,
                                    infoTooltipBody: _,
                                    onClose: C,
                                    onMinimize: B,
                                    onFocusChange: p,
                                },
                                l().createElement(
                                    'div',
                                    { className: D ? o()(Kr, Qr) : o()(Kr, r ? [Yr, a && Xr] : Zr) },
                                    l().createElement(
                                        'div',
                                        { className: ta },
                                        l().createElement(_n, null),
                                        l().createElement(Pe, { position: Oe.top }),
                                        l().createElement('div', { className: na }, l().createElement(qr, null)),
                                        l().createElement(
                                            'div',
                                            { className: o()(ea, !F && ua) },
                                            n && l().createElement(Ye, null),
                                        ),
                                        l().createElement(Pe, { position: Oe.bottom }),
                                        l().createElement(Je, null),
                                    ),
                                    l().createElement(Pe, { position: Oe.left }),
                                    l().createElement(be, {
                                        id: R.views.lobby.platoon.subViews.Chat('resId'),
                                        mixClass: Jr,
                                    }),
                                ),
                            )
                        );
                    };
                engine.whenReady.then(() => {
                    ge().render(l().createElement(ra, null), document.getElementById('root')),
                        _(R.sounds.gui_platoon_2_created());
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
                var r = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [u, t, n] = deferred[i], a = !0, o = 0; o < u.length; o++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[o]))
                            ? u.splice(o--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
                        deferred.splice(i--, 1);
                        var s = t();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > n; i--) deferred[i] = deferred[i - 1];
            deferred[i] = [u, t, n];
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
        (__webpack_require__.j = 699),
        (() => {
            var e = { 699: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        r,
                        [a, o, s] = t,
                        i = 0;
                    if (a.some((u) => 0 !== e[u])) {
                        for (n in o) __webpack_require__.o(o, n) && (__webpack_require__.m[n] = o[n]);
                        if (s) var l = s(__webpack_require__);
                    }
                    for (u && u(t); i < a.length; i++)
                        (r = a[i]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [720], () => __webpack_require__(313));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
