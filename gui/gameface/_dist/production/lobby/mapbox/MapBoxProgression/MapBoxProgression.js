(() => {
    'use strict';
    var __webpack_modules__ = {
            768: (e, u, t) => {
                t.d(u, { O: () => ue });
                var n = {};
                t.r(n),
                    t.d(n, { mouse: () => m, off: () => d, on: () => E, onResize: () => l, onScaleUpdated: () => c });
                var r = {};
                t.r(r),
                    t.d(r, {
                        events: () => n,
                        getMouseGlobalPosition: () => B,
                        getSize: () => D,
                        graphicsQuality: () => C,
                        playSound: () => A,
                        setRTPC: () => F,
                    });
                var a = {};
                t.r(a), t.d(a, { getBgUrl: () => b, getTextureUrl: () => f });
                var s = {};
                function o(e) {
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
                t.r(s),
                    t.d(s, {
                        addModelObserver: () => M,
                        addPreloadTexture: () => k,
                        children: () => a,
                        displayStatus: () => v,
                        displayStatusIs: () => Z,
                        events: () => w,
                        extraSize: () => J,
                        forceTriggerMouseMove: () => K,
                        freezeTextureBeforeResize: () => H,
                        getBrowserTexturePath: () => I,
                        getDisplayStatus: () => Q,
                        getScale: () => z,
                        getSize: () => U,
                        getViewGlobalPosition: () => G,
                        isEventHandled: () => X,
                        isFocused: () => q,
                        pxToRem: () => $,
                        remToPx: () => j,
                        resize: () => W,
                        sendEvent: () => O,
                        setAnimateWindow: () => Y,
                        setEventHandled: () => V,
                        setInputPaddingsRem: () => N,
                        setSidePaddingsRem: () => L,
                        whenTutorialReady: () => ee,
                    });
                const l = o('clientResized'),
                    c = o('self.onScaleUpdated'),
                    E = (e, u) => engine.on(e, u),
                    d = (e, u) => engine.off(e, u),
                    _ = { down: o('mousedown'), up: o('mouseup'), move: o('mousemove') };
                const m = (function () {
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
                                        s = _[u]((e) => t([e, 'outside']));
                                    function o(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, o),
                                        n(),
                                        () => {
                                            r &&
                                                (s(),
                                                window.removeEventListener(a, o),
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
                function B(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const C = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    g = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    p = Object.keys(g).reduce((e, u) => ((e[u] = () => A(g[u])), e), {}),
                    h = { play: Object.assign({}, p, { sound: A }), setRTPC: F };
                function f(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function b(e, u, t) {
                    return `url(${f(e, u, t)})`;
                }
                const v = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    w = {
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
                    S = ['args'];
                const R = 2,
                    P = 16,
                    y = 32,
                    T = 64,
                    x = (e, u) => {
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
                                })(u, S);
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
                            x('popover' === e ? R : y);
                        },
                        minimize() {
                            x(T);
                        },
                        move(e) {
                            x(P, { isMouseEvent: !0, on: e });
                        },
                    };
                function k(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function N(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function I(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function M(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function L(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function U(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function W(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function G(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: j(u.x), y: j(u.y) };
                }
                function H() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function z() {
                    return viewEnv.getScale();
                }
                function $(e) {
                    return viewEnv.pxToRem(e);
                }
                function j(e) {
                    return viewEnv.remToPx(e);
                }
                function Y(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function q() {
                    return viewEnv.isFocused();
                }
                function V() {
                    return viewEnv.setEventHandled();
                }
                function X() {
                    return viewEnv.isEventHandled();
                }
                function K() {
                    viewEnv.forceTriggerMouseMove();
                }
                function Q() {
                    return viewEnv.getShowingStatus();
                }
                const Z = Object.keys(v).reduce((e, u) => ((e[u] = () => viewEnv.getShowingStatus() === v[u]), e), {}),
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
                    ue = { view: s, client: r, sound: h };
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
                t.d(u, { Sw: () => a.Z, B3: () => i, Z5: () => s.Z5, B0: () => o, ry: () => D });
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
                var s = t(613);
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
                const i = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(521),
                    _ = t(768);
                const m = ['args'];
                function A(e, u, t, n, r, a, s) {
                    try {
                        var o = e[a](s),
                            i = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(i) : Promise.resolve(i).then(n, r);
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
                                        function s(e) {
                                            A(a, n, r, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            A(a, n, r, s, o, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
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
                                })(u, m);
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
                    C = () => B(o.CLOSE),
                    g = (e, u) => {
                        e.keyCode === d.n.ESCAPE && u();
                    };
                var p = t(572);
                const h = r.instance,
                    f = {
                        DataTracker: a.Z,
                        ViewModel: p.Z,
                        ViewEventType: o,
                        NumberFormatType: i,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: E,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => B(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: C,
                        sendClosePopOverEvent: () => B(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            B(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, r = R.invalid('resId'), a) => {
                            const s = _.O.view.getViewGlobalPosition(),
                                i = t.getBoundingClientRect(),
                                l = i.x,
                                c = i.y,
                                E = i.width,
                                d = i.height,
                                m = {
                                    x: _.O.view.pxToRem(l) + s.x,
                                    y: _.O.view.pxToRem(c) + s.y,
                                    width: _.O.view.pxToRem(E),
                                    height: _.O.view.pxToRem(d),
                                };
                            B(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: r,
                                direction: u,
                                bbox: F(m),
                                on: !0,
                                args: a,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => g(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            g(e, C);
                        },
                        handleViewEvent: B,
                        onBindingsReady: D,
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
                        ClickOutsideManager: h,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = f;
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
            50: (e, u, t) => {
                var n = t(179),
                    r = t.n(n);
                const a = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
                var s = t(768);
                const o = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var i;
                function l(e, u, t) {
                    const n = (function (e, u) {
                            switch (!0) {
                                case e >= u.extraLarge.width:
                                    return u.extraLarge.weight;
                                case e >= u.large.width && e < u.extraLarge.width:
                                    return u.large.weight;
                                case e >= u.medium.width && e < u.large.width:
                                    return u.medium.weight;
                                case e >= u.small.width && e < u.medium.width:
                                    return u.small.weight;
                                default:
                                    return u.extraSmall.weight;
                            }
                        })(e, t),
                        r = (function (e, u) {
                            switch (!0) {
                                case e >= u.extraLarge.height:
                                    return u.extraLarge.weight;
                                case e >= u.large.height && e < u.extraLarge.height:
                                    return u.large.weight;
                                case e >= u.medium.height && e < u.large.height:
                                    return u.medium.weight;
                                case e >= u.small.height && e < u.medium.height:
                                    return u.small.weight;
                                default:
                                    return u.extraSmall.weight;
                            }
                        })(u, t),
                        a = Math.min(n, r);
                    return {
                        extraLarge: a === t.extraLarge.weight,
                        large: a === t.large.weight,
                        medium: a === t.medium.weight,
                        small: a === t.small.weight,
                        extraSmall: a === t.extraSmall.weight,
                        extraLargeWidth: n === t.extraLarge.weight,
                        largeWidth: n === t.large.weight,
                        mediumWidth: n === t.medium.weight,
                        smallWidth: n === t.small.weight,
                        extraSmallWidth: n === t.extraSmall.weight,
                        extraLargeHeight: r === t.extraLarge.weight,
                        largeHeight: r === t.large.weight,
                        mediumHeight: r === t.medium.weight,
                        smallHeight: r === t.small.weight,
                        extraSmallHeight: r === t.extraSmall.weight,
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
                })(i || (i = {}));
                const c = s.O.client.getSize('rem'),
                    E = c.width,
                    d = c.height,
                    _ = Object.assign({ width: E, height: d }, l(E, d, o)),
                    m = (0, n.createContext)(_),
                    A = ['children'];
                const F = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, A);
                    const r = (0, n.useContext)(m),
                        s = r.extraLarge,
                        o = r.large,
                        i = r.medium,
                        l = r.small,
                        c = r.extraSmall,
                        E = r.extraLargeWidth,
                        d = r.largeWidth,
                        _ = r.mediumWidth,
                        F = r.smallWidth,
                        D = r.extraSmallWidth,
                        B = r.extraLargeHeight,
                        C = r.largeHeight,
                        g = r.mediumHeight,
                        p = r.smallHeight,
                        h = r.extraSmallHeight,
                        f = { extraLarge: B, large: C, medium: g, small: p, extraSmall: h };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && s) return u;
                        if (t.large && o) return u;
                        if (t.medium && i) return u;
                        if (t.small && l) return u;
                        if (t.extraSmall && c) return u;
                    } else {
                        if (t.extraLargeWidth && E) return a(u, t, f);
                        if (t.largeWidth && d) return a(u, t, f);
                        if (t.mediumWidth && _) return a(u, t, f);
                        if (t.smallWidth && F) return a(u, t, f);
                        if (t.extraSmallWidth && D) return a(u, t, f);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && B) return u;
                            if (t.largeHeight && C) return u;
                            if (t.mediumHeight && g) return u;
                            if (t.smallHeight && p) return u;
                            if (t.extraSmallHeight && h) return u;
                        }
                    }
                    return null;
                };
                F.defaultProps = {
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
                (0, n.memo)(F);
                const D = (e) => {
                        const u = (0, n.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    B = ({ children: e }) => {
                        const u = (0, n.useContext)(m),
                            t = (0, n.useState)(u),
                            a = t[0],
                            i = t[1],
                            c = (0, n.useCallback)((e, u) => {
                                const t = s.O.view.pxToRem(e),
                                    n = s.O.view.pxToRem(u);
                                i(Object.assign({ width: t, height: n }, l(t, n, o)));
                            }, []),
                            E = (0, n.useCallback)(() => {
                                const e = s.O.client.getSize('px');
                                c(e.width, e.height);
                            }, [c]);
                        D(() => {
                            s.O.client.events.on('clientResized', c), s.O.client.events.on('self.onScaleUpdated', E);
                        }),
                            (0, n.useEffect)(
                                () => () => {
                                    s.O.client.events.off('clientResized', c),
                                        s.O.client.events.off('self.onScaleUpdated', E);
                                },
                                [c, E],
                            );
                        const d = (0, n.useMemo)(() => Object.assign({}, a), [a]);
                        return r().createElement(m.Provider, { value: d }, e);
                    };
                var C = t(493),
                    g = t.n(C);
                const p = (e = 1) => {
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
                    },
                    h = (e, u) => e.split('.').reduce((e, u) => e && e[u], u);
                var f = t(916);
                const b = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    v = (e, u) => (e.length > 0 ? `${e}.${u}` : u),
                    w = (e) =>
                        ((e, u) =>
                            e.split('.').reduce((e, t) => {
                                const n = h(`${e}.${t}`, window);
                                return b(n) ? u(e, t, n) : `${e}.${t}`;
                            }))(e, (e, u) => `${e}.${u}.value`),
                    S = (e) => {
                        const u = ((e) => {
                                const u = p(),
                                    t = u.caller,
                                    n = u.resId,
                                    r = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: r, modelPath: v(r, e || ''), resId: n };
                            })(),
                            t = u.modelPrefix,
                            n = e.split('.');
                        if (n.length > 0) {
                            const e = [n[0]];
                            return (
                                n.reduce((u, n) => {
                                    const r = h(v(t, `${u}.${n}`), window);
                                    return b(r) ? (e.push(r.id), `${u}.${n}.value`) : (e.push(n), `${u}.${n}`);
                                }),
                                e.reduce((e, u) => e + '.' + u)
                            );
                        }
                        return '';
                    },
                    P = f.Sw.instance;
                let y;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(y || (y = {}));
                const T = (e = 'model', u = y.Deep) => {
                    const t = (0, n.useState)(0),
                        r = (t[0], t[1]),
                        a = (0, n.useMemo)(() => p(), []),
                        s = a.caller,
                        o = a.resId,
                        i = (0, n.useMemo)(
                            () => (window.__feature && window.__feature !== s ? `subViews.${s}.${e}` : e),
                            [s, e],
                        ),
                        l = (0, n.useState)(() =>
                            ((e) => {
                                const u = h(e, window);
                                for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                return b(u) ? u.value : u;
                            })(w(i)),
                        ),
                        c = l[0],
                        E = l[1],
                        d = (0, n.useRef)(-1);
                    return (
                        D(() => {
                            if (
                                ('boolean' == typeof u &&
                                    ((u = u ? y.Deep : y.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                u !== y.None)
                            ) {
                                const t = (e) => {
                                        ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                        u === y.Deep
                                            ? (e === c && r((e) => e + 1), E(e))
                                            : E(Object.assign([], e));
                                    },
                                    n = S(e);
                                d.current = P.addCallback(n, t, o, u === y.Deep);
                            }
                        }),
                        (0, n.useEffect)(() => {
                            if (u !== y.None)
                                return () => {
                                    P.removeCallback(d.current, o);
                                };
                        }, [o, u]),
                        c
                    );
                };
                var x = t(483),
                    O = t.n(x),
                    k = t(281);
                let N;
                function I(e, u) {
                    return e.replace(/\{\w+\}/g, (e) => String(u[e.slice(1, -1)]));
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(N || (N = {}));
                const M = (e) => e.replace(/&nbsp;/g, ' '),
                    L = (e, u, t) => {
                        if (t % 2) {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                        return [...e, u];
                    },
                    U = (e, u, t) => {
                        if (0 === t) return [u];
                        if (t % 2) return [...e, ' ' === u ? ' ' : u];
                        {
                            const t = e.pop();
                            return [...e, t + u];
                        }
                    },
                    W = (e, u, t = N.left) => e.split(u).reduce(t === N.left ? L : U, []),
                    G = (() => {
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
                    H = ['zh_cn', 'zh_sg', 'zh_tw'],
                    z = (e, u = N.left) => {
                        const t = R.strings.settings.LANGUAGE_CODE().toLowerCase();
                        if (H.includes(t)) return G(e);
                        if ('ja' === t) {
                            return (0, k.D4)()
                                .parse(e)
                                .map((e) => M(e));
                        }
                        return ((e, u = N.left) => {
                            let t = [];
                            const n =
                                    /(?<=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])(\x2D)(?=[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A\u{10428}-\u{1044F}\u{104D8}-\u{104FB}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10CC0}-\u{10CF2}\u{118C0}-\u{118DF}\u{16E60}-\u{16E7F}\u{1D41A}-\u{1D433}\u{1D44E}-\u{1D454}\u{1D456}-\u{1D467}\u{1D482}-\u{1D49B}\u{1D4B6}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D4CF}\u{1D4EA}-\u{1D503}\u{1D51E}-\u{1D537}\u{1D552}-\u{1D56B}\u{1D586}-\u{1D59F}\u{1D5BA}-\u{1D5D3}\u{1D5EE}-\u{1D607}\u{1D622}-\u{1D63B}\u{1D656}-\u{1D66F}\u{1D68A}-\u{1D6A5}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6E1}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D71B}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D755}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D78F}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7C9}\u{1D7CB}\u{1DF00}-\u{1DF09}\u{1DF0B}-\u{1DF1E}\u{1E922}-\u{1E943}])/gu,
                                r = M(e);
                            return W(r, /( )/, u).forEach((e) => (t = t.concat(W(e, n, N.left)))), t;
                        })(e, u);
                    };
                function $(e, u, t) {
                    const r = (0, n.useContext)(m);
                    let a = Object.entries(r).filter(([e, u]) => !0 === u && e in i);
                    return (
                        t && (a = a.filter((e) => t.includes(e[0]))),
                        e.reduce((e, t) => {
                            const n = a.map((e) =>
                                O()(
                                    u[((e, u) => e + '__' + u)(t, e[0])],
                                    u[
                                        ((e, u) => {
                                            return e + ((t = u)[0].toUpperCase() + t.slice(1));
                                            var t;
                                        })(t, e[0])
                                    ],
                                ),
                            );
                            return (e[t] = O()(u[t], ...n)), e;
                        }, {})
                    );
                }
                const j = {
                        base: 'Error_base_74',
                        background: 'Error_background_a9',
                        content: 'Error_content_fe',
                        image: 'Error_image_76',
                        base__small: 'Error_base__small_dc',
                        base__extraSmall: 'Error_base__extraSmall_aa',
                        title: 'Error_title_7c',
                        description: 'Error_description_d5',
                    },
                    Y = R.strings.mapbox.progressionError,
                    q = () => {
                        const e = $(['base'], j);
                        return r().createElement(
                            'div',
                            { className: e.base },
                            r().createElement('div', { className: j.background }),
                            r().createElement(
                                'div',
                                { className: j.content },
                                r().createElement('div', { className: j.image }),
                                r().createElement('div', { className: j.title }, Y.title()),
                                r().createElement(
                                    'div',
                                    { className: j.description },
                                    Y.description.line1(),
                                    Y.description.line2(),
                                ),
                            ),
                        );
                    };
                function V(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                const X = {
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
                let K, Q;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(K || (K = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(Q || (Q = {}));
                const Z = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: a,
                    disabled: s,
                    mixClass: o,
                    soundHover: i,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: E,
                    onMouseDown: d,
                    onMouseUp: _,
                    onMouseLeave: m,
                    onClick: A,
                }) => {
                    const F = (0, n.useRef)(null),
                        D = (0, n.useState)(t),
                        B = D[0],
                        C = D[1],
                        g = (0, n.useState)(!1),
                        p = g[0],
                        h = g[1];
                    return (
                        (0, n.useEffect)(() => {
                            function e(e) {
                                B && null !== F.current && !F.current.contains(e.target) && C(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [B]),
                        (0, n.useEffect)(() => {
                            C(t);
                        }, [t]),
                        r().createElement(
                            'div',
                            {
                                ref: F,
                                className: O()(
                                    X.base,
                                    X[`base__${a}`],
                                    s && X.base__disabled,
                                    u && X[`base__${u}`],
                                    B && X.base__focus,
                                    p && X.base__highlightActive,
                                    o,
                                ),
                                onMouseEnter: function (e) {
                                    s || (null !== i && V(i), c && c(e));
                                },
                                onMouseMove: function (e) {
                                    E && E(e);
                                },
                                onMouseUp: function (e) {
                                    s || (_ && _(e), h(!1));
                                },
                                onMouseDown: function (e) {
                                    s ||
                                        (null !== l && V(l),
                                        d && d(e),
                                        t && (s || (F.current && (F.current.focus(), C(!0)))),
                                        h(!0));
                                },
                                onMouseLeave: function (e) {
                                    s || (m && m(e), h(!1));
                                },
                                onClick: function (e) {
                                    s || (A && A(e));
                                },
                            },
                            a !== K.ghost &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement('div', { className: X.back }),
                                    r().createElement('span', { className: X.texture }),
                                ),
                            r().createElement(
                                'span',
                                { className: O()(X.state, X.state__default) },
                                r().createElement('span', { className: X.stateDisabled }),
                                r().createElement('span', { className: X.stateHighlightHover }),
                                r().createElement('span', { className: X.stateHighlightActive }),
                            ),
                            r().createElement(
                                'span',
                                { className: X.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                Z.defaultProps = { type: K.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const J = Z,
                    ee = {
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
                    ue = [
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
                function te() {
                    return (
                        (te =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        te.apply(this, arguments)
                    );
                }
                class ne extends r().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && V(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && V(this.props.soundClick);
                            }),
                            (this._onMouseUp = (e) => (u) => {
                                e && e(u), this.setState({ click: !1 });
                            }),
                            (this.handleFocus = () => this.setState({ focus: !0 })),
                            (this.handleBlur = () => this.setState({ focus: !1 }));
                    }
                    render() {
                        const e = this.props,
                            u = e.caption,
                            t = e.onClick,
                            n = e.goto,
                            a = e.side,
                            s = e.type,
                            o = e.classNames,
                            i = e.onMouseEnter,
                            l = e.onMouseLeave,
                            c = e.onMouseDown,
                            E = e.onMouseUp,
                            d =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t,
                                        n,
                                        r = {},
                                        a = Object.keys(e);
                                    for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                    return r;
                                })(e, ue)),
                            _ = O()(ee.base, ee[`base__${s}`], ee[`base__${a}`], null == o ? void 0 : o.base),
                            m = O()(ee.icon, ee[`icon__${s}`], ee[`icon__${a}`], null == o ? void 0 : o.icon),
                            A = O()(ee.glow, null == o ? void 0 : o.glow),
                            F = O()(ee.caption, ee[`caption__${s}`], null == o ? void 0 : o.caption),
                            D = O()(ee.goto, null == o ? void 0 : o.goto);
                        return r().createElement(
                            'div',
                            te(
                                {
                                    className: _,
                                    onMouseEnter: this._onMouseEnter(i),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(E),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                d,
                            ),
                            'info' !== s && r().createElement('div', { className: ee.shine }),
                            r().createElement('div', { className: m }, r().createElement('div', { className: A })),
                            r().createElement('div', { className: F }, u),
                            n && r().createElement('div', { className: D }, n),
                        );
                    }
                }
                ne.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var re = t(521);
                const ae = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function se(e = re.n.NONE, u = ae, t = !1, r = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== re.n.NONE)
                            return (
                                window.addEventListener('keydown', n, t),
                                () => {
                                    window.removeEventListener('keydown', n, t);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (!r && s.O.view.isEventHandled()) return;
                                s.O.view.setEventHandled(), u(n), t && n.stopPropagation();
                            }
                        }
                    }, [u, e, t, r]);
                }
                const oe = (e) => {
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
                    ie = (e, u, t) => (t < e ? e : t > u ? u : t),
                    le = [];
                function ce(e) {
                    const u = (0, n.useRef)(e);
                    return (
                        (0, n.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, n.useCallback)((...e) => (0, u.current)(...e), le)
                    );
                }
                function Ee(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return de(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return de(e, u);
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
                function de(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                function _e(e, u, t) {
                    const r = (0, n.useMemo)(
                        () =>
                            (function (e, u, t, n) {
                                let r,
                                    a = !1,
                                    s = 0;
                                function o() {
                                    r && clearTimeout(r);
                                }
                                function i(...i) {
                                    const l = this,
                                        c = Date.now() - s;
                                    function E() {
                                        (s = Date.now()), t.apply(l, i);
                                    }
                                    a ||
                                        (n && !r && E(),
                                        o(),
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
                                        o(), (a = !0);
                                    }),
                                    i
                                );
                            })(t, e),
                        u,
                    );
                    return (0, n.useEffect)(() => r.cancel, [r]), r;
                }
                var me = t(30);
                let Ae;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(Ae || (Ae = {}));
                const Fe = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    De = (e) => {
                        var u, t;
                        return (
                            (null != (u = null == (t = e.parentElement) ? void 0 : t.offsetWidth) ? u : 0) <
                            e.offsetWidth
                        );
                    },
                    Be = (({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: r,
                        getWrapperSize: a,
                        triggerMouseMoveOnUpdate: o = !1,
                    }) => {
                        const i = (e, t) => {
                            const n = u(e),
                                r = n[0],
                                a = n[1];
                            return a <= r ? 0 : ie(r, a, t);
                        };
                        return (l = {}) => {
                            const c = l.settings,
                                E = void 0 === c ? Fe : c,
                                d = (0, n.useRef)(null),
                                _ = (0, n.useRef)(null),
                                m = (() => {
                                    const e = (0, n.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        r = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        a = (e, ...t) => {
                                            for (var n, r = Ee(u(e).values()); !(n = r()).done; ) (0, n.value)(...t);
                                        };
                                    return (0, n.useMemo)(() => ({ on: t, off: r, trigger: a }), []);
                                })(),
                                A = _e(
                                    () => {
                                        s.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                F = (0, me.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = d.current;
                                        u && (t(u, e), m.trigger('change', e), o && A());
                                    },
                                    onRest: (e) => m.trigger('rest', e),
                                    onStart: (e) => m.trigger('start', e),
                                    onPause: (e) => m.trigger('pause', e),
                                })),
                                D = F[0],
                                B = F[1],
                                C = (0, n.useCallback)(
                                    (e, u, t) => {
                                        var n;
                                        const r = D.scrollPosition.get(),
                                            a = (null != (n = D.scrollPosition.goal) ? n : 0) - r;
                                        return i(e, u * t + a + r);
                                    },
                                    [D.scrollPosition],
                                ),
                                g = (0, n.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const n = d.current;
                                        n &&
                                            B.start({
                                                scrollPosition: i(n, e),
                                                immediate: u,
                                                reset: t,
                                                config: E.animationConfig,
                                                from: { scrollPosition: i(n, D.scrollPosition.get()) },
                                            });
                                    },
                                    [B, E.animationConfig, D.scrollPosition],
                                ),
                                p = (0, n.useCallback)(
                                    (e) => {
                                        const u = d.current,
                                            t = _.current;
                                        if (!u || !t) return;
                                        const n = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return a(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, E.step),
                                            r = C(u, e, n);
                                        g(r);
                                    },
                                    [g, C, E.step],
                                ),
                                h = (0, n.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && p(r(e)),
                                            d.current && m.trigger('mouseWheel', e, D.scrollPosition, u(d.current));
                                    },
                                    [D.scrollPosition, p, m],
                                ),
                                f = ((e, u = []) => {
                                    const t = (0, n.useRef)(),
                                        r = (0, n.useCallback)((...u) => {
                                            t.current && t.current(), (t.current = e(...u));
                                        }, u);
                                    return (
                                        (0, n.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [r],
                                        ),
                                        r
                                    );
                                })(
                                    () =>
                                        oe(() => {
                                            const e = d.current;
                                            e &&
                                                (g(i(e, D.scrollPosition.goal), { immediate: !0 }),
                                                m.trigger('resizeHandled'));
                                        }),
                                    [g, D.scrollPosition.goal],
                                ),
                                b = ce(() => {
                                    const e = d.current;
                                    if (!e) return;
                                    const u = i(e, D.scrollPosition.goal);
                                    u !== D.scrollPosition.goal && g(u, { immediate: !0 }),
                                        m.trigger('recalculateContent');
                                });
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('resize', f),
                                    () => {
                                        window.removeEventListener('resize', f);
                                    }
                                ),
                                [f],
                            );
                            return (0, n.useMemo)(
                                () => ({
                                    getWrapperSize: () => (_.current ? a(_.current) : void 0),
                                    getContainerSize: () => (d.current ? e(d.current) : void 0),
                                    getBounds: () =>
                                        d.current
                                            ? u(d.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: E.step.clampedArrowStepTimeout,
                                    clampPosition: i,
                                    handleMouseWheel: h,
                                    applyScroll: g,
                                    applyStepTo: p,
                                    contentRef: d,
                                    wrapperRef: _,
                                    scrollPosition: B,
                                    animationScroll: D,
                                    recalculateContent: b,
                                    events: { on: m.on, off: m.off },
                                }),
                                [D.scrollPosition, g, p, m.off, m.on, b, h, B, E.step.clampedArrowStepTimeout],
                            );
                        };
                    })({
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
                        getDirection: (e) => (e.deltaY > 1 ? Ae.Next : Ae.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    Ce = 'HorizontalBar_base_49',
                    ge = 'HorizontalBar_base__nonActive_82',
                    pe = 'HorizontalBar_leftButton_5f',
                    he = 'HorizontalBar_rightButton_03',
                    fe = 'HorizontalBar_track_0d',
                    be = 'HorizontalBar_thumb_fd',
                    ve = 'HorizontalBar_rail_32',
                    we = 'disable',
                    Se = { pending: !1, offset: 0 },
                    Re = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    Pe = () => {},
                    ye = (e, u) => Math.max(20, e.offsetWidth * u),
                    Te = (0, n.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = Re, onDrag: a = Pe }) => {
                        const o = (0, n.useRef)(null),
                            i = (0, n.useRef)(null),
                            l = (0, n.useRef)(null),
                            c = (0, n.useRef)(null),
                            E = (0, n.useRef)(null),
                            d = e.stepTimeout || 100,
                            _ = (0, n.useState)(Se),
                            m = _[0],
                            A = _[1],
                            F = (0, n.useCallback)(
                                (e) => {
                                    A(e),
                                        E.current && a({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: E.current });
                                },
                                [a],
                            ),
                            D = () => {
                                const u = c.current,
                                    t = E.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / r),
                                    o = ie(0, 1, a / (r - n)),
                                    d = (u.offsetWidth - ye(u, s)) * o;
                                (t.style.transform = `translateX(${0 | d}px)`),
                                    ((e) => {
                                        if (i.current && l.current && c.current && E.current) {
                                            if (0 === e)
                                                return i.current.classList.add(we), void l.current.classList.remove(we);
                                            if (
                                                ((u = c.current),
                                                (t = E.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return i.current.classList.remove(we), void l.current.classList.add(we);
                                            var u, t;
                                            i.current.classList.remove(we), l.current.classList.remove(we);
                                        }
                                    })(d);
                            },
                            B = ce(() => {
                                (() => {
                                    const u = E.current,
                                        t = c.current,
                                        n = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && u && n && t)) return;
                                    const a = Math.min(1, n / r);
                                    (u.style.width = `${ye(t, a)}px`),
                                        (u.style.display = 'flex'),
                                        o.current &&
                                            (1 === a ? o.current.classList.add(ge) : o.current.classList.remove(ge));
                                })(),
                                    D();
                            });
                        (0, n.useEffect)(() => oe(B)),
                            (0, n.useEffect)(
                                () =>
                                    oe(() => {
                                        const u = () => {
                                            D();
                                        };
                                        let t = Pe;
                                        const n = () => {
                                            t(), (t = oe(B));
                                        };
                                        return (
                                            e.events.on('recalculateContent', B),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                t(),
                                                    e.events.off('recalculateContent', B),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', n);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, n.useEffect)(() => {
                                if (!m.pending) return;
                                const u = s.O.client.events.mouse.move(([u, t]) => {
                                        var n;
                                        const r = e.contentRef.current,
                                            s = e.wrapperRef.current;
                                        if (!r || !s) return;
                                        const o = c.current,
                                            i = E.current;
                                        if (!o || !i) return;
                                        if ('inside' === t && u.clientX < 0) return;
                                        const l = u.clientX - m.offset - o.getBoundingClientRect().x,
                                            d = (l / o.offsetWidth) * (null != (n = e.getContainerSize()) ? n : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, d),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            a({ type: 'dragging', thumb: i, thumbOffset: l, contentOffset: d });
                                    }),
                                    t = s.O.client.events.mouse.up(() => {
                                        u(), F(Se);
                                    });
                                return () => {
                                    u(), t();
                                };
                            }, [e, m.offset, m.pending, a, F]);
                        const C = (function (e, u, t = []) {
                                const r = (0, n.useRef)(0),
                                    a = (0, n.useCallback)(() => window.clearInterval(r.current), t || []);
                                (0, n.useEffect)(() => a, [a]);
                                const s = (null != t ? t : []).concat([u]);
                                return [
                                    (0, n.useCallback)((t) => {
                                        (r.current = window.setInterval(() => e(t, !0), u)), e(t, !1);
                                    }, s),
                                    a,
                                ];
                            })((u) => e.applyStepTo(u), d, [e]),
                            g = C[0],
                            p = C[1];
                        (0, n.useEffect)(
                            () => (
                                document.addEventListener('mouseup', p, !0),
                                () => document.removeEventListener('mouseup', p, !0)
                            ),
                            [p],
                        );
                        const h = (e) => {
                            e.target.classList.contains(we) || V('highlight');
                        };
                        return r().createElement(
                            'div',
                            { className: O()(Ce, u.base), ref: o, onWheel: e.handleMouseWheel },
                            r().createElement('div', {
                                className: O()(pe, u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(we) || 0 !== e.button || (V('play'), g(Ae.Next));
                                },
                                onMouseUp: p,
                                ref: i,
                                onMouseEnter: h,
                            }),
                            r().createElement(
                                'div',
                                {
                                    className: O()(fe, u.track),
                                    onMouseDown: (u) => {
                                        const n = E.current;
                                        if (n && 0 === u.button)
                                            if ((V('play'), u.target === n))
                                                F({ pending: !0, offset: u.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((u) => {
                                                    const n = E.current,
                                                        r = e.contentRef.current;
                                                    if (!n || !r) return;
                                                    const a = t(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + a * u);
                                                })(u.screenX > n.getBoundingClientRect().x ? Ae.Prev : Ae.Next);
                                            }
                                    },
                                    ref: c,
                                    onMouseEnter: h,
                                },
                                r().createElement('div', { ref: E, className: O()(be, u.thumb) }),
                                r().createElement('div', { className: O()(ve, u.rail) }),
                            ),
                            r().createElement('div', {
                                className: O()(he, u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(we) || 0 !== e.button || (V('play'), g(Ae.Prev));
                                },
                                onMouseUp: p,
                                ref: l,
                                onMouseEnter: h,
                            }),
                        );
                    }),
                    xe = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Oe = ({ api: e, className: u, classNames: t, children: a }) => (
                        (0, n.useEffect)(() => oe(e.recalculateContent)),
                        r().createElement(
                            'div',
                            { className: O()(xe.base, u) },
                            r().createElement(
                                'div',
                                {
                                    className: O()(xe.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                r().createElement(
                                    'div',
                                    { className: O()(xe.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    a,
                                ),
                            ),
                        )
                    );
                (Oe.Bar = Te),
                    (Oe.Default = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: a,
                        areaClassName: s,
                        classNames: o,
                        scrollClassName: i,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const E = (0, n.useMemo)(() => {
                                const e = a || {};
                                return Object.assign({}, e, { base: O()(xe.base, e.base) });
                            }, [a]),
                            d = (0, n.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return r().createElement(
                            'div',
                            { className: O()(xe.defaultScroll, t), onWheel: u.handleMouseWheel },
                            r().createElement(
                                'div',
                                { className: O()(xe.defaultScrollArea, s) },
                                r().createElement(Oe, { className: i, api: d, classNames: o }, e),
                            ),
                            r().createElement(Te, { getStepByRailClick: l, api: u, onDrag: c, classNames: E }),
                        );
                    });
                const ke = (e, u) => {
                    for (let t = 0; t < e.length; t++) if (u(e[t])) return t;
                };
                function Ne() {}
                console.log;
                const Ie = {
                        base: 'Cards_base_80',
                        base__medium: 'Cards_base__medium_fe',
                        base__large: 'Cards_base__large_d9',
                        base__extraLarge: 'Cards_base__extraLarge_f0',
                        cardListInner: 'Cards_cardListInner_14',
                        scrollWrapper: 'Cards_scrollWrapper_56',
                        mask: 'Cards_mask_46',
                        arrow: 'Cards_arrow_a4',
                        arrow__left: 'Cards_arrow__left_67',
                        arrow__right: 'Cards_arrow__right_10',
                        arrow__disabled: 'Cards_arrow__disabled_4a',
                    },
                    Me = 'FormatText_base_d0',
                    Le = ({ binding: e, text: u = '', classMix: t, alignment: a = N.left, formatWithBrackets: s }) => {
                        if (null === u) return console.error("FormatText was supplied with 'null'"), null;
                        const o = s && e ? I(u, e) : u;
                        return r().createElement(
                            n.Fragment,
                            null,
                            o.split('\n').map((u, s) =>
                                r().createElement(
                                    'div',
                                    { className: O()(Me, t), key: `${u}-${s}` },
                                    ((e, u, t) =>
                                        e.split(/%\((.*?)\)(?:[sd])?/g).map((e) => (t && e in t ? t[e] : z(e, u))))(
                                        u,
                                        a,
                                        e,
                                    ).map((e, u) => r().createElement(n.Fragment, { key: `${u}-${e}` }, e)),
                                ),
                            ),
                        );
                    },
                    Ue = [
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
                function We(e) {
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
                const Ge = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: f.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    He = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            r = e.args,
                            a = e.onMouseEnter,
                            s = e.onMouseLeave,
                            o = e.onMouseDown,
                            i = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            E = e.ignoreMouseClick,
                            d = void 0 !== E && E,
                            _ = e.decoratorId,
                            m = void 0 === _ ? 0 : _,
                            A = e.isEnabled,
                            F = void 0 === A || A,
                            D = e.targetId,
                            B = void 0 === D ? 0 : D,
                            C = e.onShow,
                            g = e.onHide,
                            h = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, Ue);
                        const f = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            b = (0, n.useMemo)(() => B || p().resId, [B]),
                            v = (0, n.useCallback)(() => {
                                (f.current.isVisible && f.current.timeoutId) ||
                                    (Ge(t, m, { isMouseEvent: !0, on: !0, arguments: We(r) }, b),
                                    C && C(),
                                    (f.current.isVisible = !0));
                            }, [t, m, r, b, C]),
                            w = (0, n.useCallback)(() => {
                                if (f.current.isVisible || f.current.timeoutId) {
                                    const e = f.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (f.current.timeoutId = 0)),
                                        Ge(t, m, { on: !1 }, b),
                                        f.current.isVisible && g && g(),
                                        (f.current.isVisible = !1);
                                }
                            }, [t, m, b, g]),
                            S = (0, n.useCallback)((e) => {
                                f.current.isVisible &&
                                    ((f.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (f.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(f.current.prevTarget) && w();
                                    }, 200)));
                            }, []);
                        (0, n.useEffect)(() => {
                            const e = f.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', S, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', S, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === F && w();
                            }, [F, w]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', w),
                                    () => {
                                        window.removeEventListener('mouseleave', w), w();
                                    }
                                ),
                                [w],
                            );
                        return F
                            ? (0, n.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((R = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((f.current.timeoutId = window.setTimeout(v, c ? 100 : 400)),
                                                      a && a(e),
                                                      R && R(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              w(), null == s || s(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === d && w(), null == i || i(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === d && w(), null == o || o(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      h,
                                  ),
                              )
                            : u;
                        var R;
                    },
                    ze = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function $e() {
                    return (
                        ($e =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        $e.apply(this, arguments)
                    );
                }
                const je = R.views.common.tooltip_window.simple_tooltip_content,
                    Ye = (e) => {
                        let u = e.children,
                            t = e.body,
                            a = e.header,
                            s = e.note,
                            o = e.alert,
                            i = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, ze);
                        const c = (0, n.useMemo)(() => {
                            const e = Object.assign({}, i, { body: t, header: a, note: s, alert: o });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [o, t, a, s, i]);
                        return r().createElement(
                            He,
                            $e(
                                {
                                    contentId:
                                        ((E = null == i ? void 0 : i.hasHtmlContent),
                                        E ? je.SimpleTooltipHtmlContent('resId') : je.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var E;
                    },
                    qe = {
                        base: 'Item_base_91',
                        base__done: 'Item_base__done_c9',
                        base__medium: 'Item_base__medium_4d',
                        base__large: 'Item_base__large_f8',
                        base__extraLarge: 'Item_base__extraLarge_8f',
                        shadow: 'Item_shadow_1d',
                        blinkWrapper: 'Item_blinkWrapper_fc',
                        blink: 'Item_blink_b6',
                        blinkAnim: 'Item_blinkAnim_a0',
                        bubble: 'Item_bubble_ba',
                        header: 'Item_header_14',
                        icon: 'Item_icon_4d',
                        base__special: 'Item_base__special_24',
                        title: 'Item_title_b6',
                        counter: 'Item_counter_96',
                        base__ready: 'Item_base__ready_3f',
                        highlight: 'Item_highlight_90',
                        nameWrapper: 'Item_nameWrapper_ec',
                        name: 'Item_name_b6',
                        buttonWrapper: 'Item_buttonWrapper_95',
                        button: 'Item_button_49',
                        passed: 'Item_passed_e2',
                    },
                    Ve = R.strings.mapbox.progression,
                    Xe = r().memo(
                        ({
                            onClick: e,
                            onMouseEnter: u,
                            mapName: t,
                            isSurveyAvailable: a,
                            mapSurveyPassed: s,
                            isBubble: o,
                            rating: i,
                            mapBattlesPlayed: l,
                            mapBattles: c,
                            isOnAnimation: E,
                            isSpecial: d,
                        }) => {
                            const _ = 'all' === t,
                                m = l >= c,
                                A = m && !s,
                                F = (0, n.useCallback)(() => e(t), [e, t]),
                                D = (0, n.useCallback)(() => {
                                    o && u(t);
                                }, [o, u, t]),
                                B = A ? K.main : K.primary,
                                C = ((e, u) => (u ? Ve.changeAnswer() : e ? Ve.chooseBetter() : Ve.startInterview()))(
                                    _,
                                    s,
                                ),
                                g = ((e, u) =>
                                    e
                                        ? Ve.startInterviewDisableTooltip()
                                        : u
                                          ? Ve.chooseBetterTooltip()
                                          : Ve.startInterviewTooltip())(m, _),
                                p = I(Ve.cardTitle.rating(), { rating: i }),
                                h = (0, n.useMemo)(
                                    () => ({
                                        current: r().createElement('span', { className: qe.highlight }, l),
                                        mapBattles: c,
                                    }),
                                    [l, c],
                                ),
                                f = (0, n.useMemo)(
                                    () => ({
                                        backgroundImage: `url(${R.images.gui.maps.icons.mapbox.progression.$dyn(`map_${t}`)})`,
                                    }),
                                    [t],
                                ),
                                b = $(['base'], qe),
                                v = O()(b.base, s && qe.base__done, m && qe.base__ready, d && qe.base__special),
                                w = !(E || (m && a));
                            return r().createElement(
                                'div',
                                { className: v, style: f, onMouseEnter: D },
                                d &&
                                    r().createElement(
                                        'div',
                                        { className: qe.blinkWrapper },
                                        r().createElement('div', { className: qe.blink }),
                                    ),
                                r().createElement('div', { className: qe.shadow }),
                                o && r().createElement('div', { className: qe.bubble }),
                                r().createElement(
                                    'div',
                                    { className: qe.header },
                                    r().createElement('div', { className: qe.icon }),
                                    r().createElement('div', { className: qe.title }, p),
                                    r().createElement(Le, { classMix: qe.counter, text: Ve.counter(), binding: h }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: qe.nameWrapper },
                                    r().createElement(Le, { text: Ve.$dyn(`map_${t}`), classMix: qe.name }),
                                ),
                                r().createElement(
                                    Ye,
                                    { body: g, isEnabled: w },
                                    r().createElement(
                                        'div',
                                        { className: qe.buttonWrapper },
                                        r().createElement(
                                            J,
                                            {
                                                onClick: F,
                                                size: Q.small,
                                                type: B,
                                                disabled: !m || !a,
                                                mixClass: qe.button,
                                            },
                                            C,
                                        ),
                                    ),
                                ),
                                s && r().createElement('div', { className: qe.passed }),
                            );
                        },
                    ),
                    Ke = (e, u) => {
                        let t;
                        const n = setTimeout(() => {
                            t = e();
                        }, u);
                        return () => {
                            'function' == typeof t && t(), clearTimeout(n);
                        };
                    },
                    Qe = 'ItemWrapper_base_98',
                    Ze = 'ItemWrapper_base__enabled_85',
                    Je = 'ItemWrapper_base__first_ed',
                    eu = (0, n.memo)(({ cardIndex: e, children: u }) => {
                        const t = (0, n.useState)(!1),
                            a = t[0],
                            s = t[1],
                            o = 200 * e,
                            i = O()(Qe, 1 === e && Je, a && Ze);
                        (0, n.useEffect)(() => Ke(() => V(R.sounds.bp_buy_pass_01()), o), [o]);
                        const l = (0, n.useMemo)(() => ({ animationDelay: `${o}ms` }), [o]);
                        return r().createElement('div', { className: i, style: l, onAnimationEnd: () => s(!0) }, u);
                    });
                function uu() {
                    return (
                        (uu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        uu.apply(this, arguments)
                    );
                }
                const tu = { settings: Object.assign({}, Fe, { step: { type: 'proportional', factor: 1 } }) },
                    nu = (e) => {
                        const u = e - 1;
                        return u * u * u + 1;
                    },
                    ru = (e) => e * e * e,
                    au = ({ maps: e, onClick: u, onMouseEnter: t }) => {
                        const a = $(['base'], Ie),
                            s = (function () {
                                const e = Be(tu),
                                    u = e.contentRef.current && De(e.contentRef.current);
                                return (0, n.useMemo)(
                                    () =>
                                        Object.assign({}, e, {
                                            handleMouseWheel: (t) => {
                                                u && e.handleMouseWheel(t);
                                            },
                                        }),
                                    [e, u],
                                );
                            })(),
                            o = (0, n.useState)(!0),
                            i = o[0],
                            l = o[1],
                            c = (0, n.useState)(!0),
                            E = c[0],
                            d = c[1],
                            _ = (0, n.useState)(!1),
                            m = _[0],
                            A = _[1],
                            F = (0, n.useRef)(!1),
                            D = (0, n.useRef)(!1);
                        const B = (0, n.useRef)(null),
                            C = (0, me.useSpring)(() => ({
                                leftOffset: 0,
                                rightOffset: 0,
                                onStart: () => A(!0),
                                onRest: () => A(!1),
                                onChange: (e) => {
                                    const u = s.wrapperRef.current,
                                        t = B.current;
                                    u &&
                                        t &&
                                        ((u.style.maskImage = `linear-gradient(90deg, transparent 0rem, rgb(255, 255, 255) ${e.value.leftOffset}rem);`),
                                        (t.style.maskImage = `linear-gradient(-90deg, transparent 0rem, rgb(255, 255, 255) ${e.value.rightOffset}rem);`));
                                },
                            }))[1],
                            g = (0, n.useCallback)(() => {
                                V('tabb'), s.applyStepTo(Ae.Prev);
                            }, [s]),
                            p = (0, n.useCallback)(() => {
                                V('tabb'), s.applyStepTo(Ae.Next);
                            }, [s]);
                        se(re.n.ARROW_LEFT, p),
                            se(re.n.ARROW_RIGHT, g),
                            (0, n.useEffect)(() => {
                                const e = s.contentRef.current;
                                (e && De(e)) || (s.handleMouseWheel = Ne);
                            }, [s, s.contentRef]),
                            (0, n.useEffect)(() => {
                                const u = () => {
                                    const e = s.animationScroll.scrollPosition.goal,
                                        u = ((e, u) => {
                                            var t, n;
                                            return e.contentRef.current
                                                ? e.contentRef.current.offsetWidth -
                                                      (null !=
                                                      (t =
                                                          null == (n = e.contentRef.current.parentElement)
                                                              ? void 0
                                                              : n.offsetWidth)
                                                          ? t
                                                          : 0) -
                                                      u
                                                : 0;
                                        })(s, e);
                                    (F.current = e > 0),
                                        (D.current = u > 0),
                                        l(!F.current),
                                        d(!D.current),
                                        D.current
                                            ? C.start({ to: { rightOffset: 120 }, config: { easing: nu } })
                                            : C.start({ to: { rightOffset: 0 }, config: { easing: ru } }),
                                        F.current
                                            ? C.start({ to: { leftOffset: 120 }, config: { easing: nu } })
                                            : C.start({ to: { leftOffset: 0 }, config: { easing: ru } });
                                };
                                let t = Ne;
                                const n = () => {
                                    t(),
                                        (t = oe(() => {
                                            var t;
                                            const n = s.getWrapperSize(),
                                                r = s.getContainerSize();
                                            if (!r || !n) return;
                                            const a = Math.min(1, n / r),
                                                o = null != (t = ke(e, ({ value: e }) => !e.mapSurveyPassed)) ? t : 0;
                                            1 === a || o < 3
                                                ? s.applyScroll(0)
                                                : s.applyScroll((o - 1) * (null != n ? n : 0)),
                                                u();
                                        }));
                                };
                                return (
                                    n(),
                                    s.events.on('change', u),
                                    s.events.on('resizeHandled', n),
                                    () => {
                                        s.events.off('change', u), s.events.off('resizeHandled', n), t();
                                    }
                                );
                            }, []),
                            (0, n.useEffect)(() => {
                                s.recalculateContent();
                            }, [e, s]);
                        const h = { wrapper: O()(!F.current && !D.current && Ie.scrollWrapper) },
                            f = O()(Ie.arrow, Ie.arrow__left, i && Ie.arrow__disabled),
                            b = O()(Ie.arrow, Ie.arrow__right, E && Ie.arrow__disabled);
                        return r().createElement(
                            'div',
                            { className: a.base },
                            r().createElement('div', { className: f, onClick: p }),
                            r().createElement(
                                'div',
                                { className: Ie.mask, ref: B },
                                r().createElement(
                                    Oe,
                                    { api: s, classNames: h },
                                    r().createElement(
                                        'div',
                                        { className: Ie.cardListInner },
                                        e.map(({ value: e }, n) =>
                                            r().createElement(
                                                eu,
                                                { key: n, cardIndex: n + 1 },
                                                r().createElement(
                                                    Xe,
                                                    uu({ isOnAnimation: m, onClick: u, onMouseEnter: t }, e),
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                            r().createElement('div', { className: b, onClick: g }),
                        );
                    };
                let su;
                !(function (e) {
                    (e.DayMonthNumeric = 'dayMonthNumeric'),
                        (e.DayMonthFull = 'dayMonthFull'),
                        (e.DayMonthFullTime = 'dayMonthFullTime'),
                        (e.DayMonthAbbreviated = 'dayMonthAbbreviated'),
                        (e.DayMonthAbbreviatedTime = 'dayMonthAbbreviatedTime'),
                        (e.ShortDate = 'shortDate'),
                        (e.ShortTime = 'ShortTime'),
                        (e.ShortDateTime = 'ShortDateTime'),
                        (e.FullDate = 'fullDate'),
                        (e.FullTime = 'fullTime'),
                        (e.FullDateTime = 'fullDateTime');
                })(su || (su = {}));
                var ou = t(613);
                Date.now();
                const iu = ou.Ew.getRegionalDateTime,
                    lu = ou.Ew.getFormattedDateTime;
                const cu = (0, n.memo)(({ datetime: e, format: u = su.ShortDate, isConvertedToLocal: t = !0 }) =>
                        Object.values(su).includes(u) ? iu(e, u, t) : lu(e, u, t),
                    ),
                    Eu = {
                        base: 'Header_base_5f',
                        base__medium: 'Header_base__medium_ef',
                        base__large: 'Header_base__large_ac',
                        base__extraLarge: 'Header_base__extraLarge_e3',
                        icon: 'Header_icon_7b',
                        title: 'Header_title_ce',
                        date: 'Header_date_76',
                        calendar: 'Header_calendar_7e',
                        separator: 'Header_separator_34',
                    },
                    du = ({ startEvent: e, endEvent: u }) => {
                        const t = $(['base'], Eu);
                        return r().createElement(
                            'div',
                            { className: t.base },
                            r().createElement('div', { className: Eu.icon }),
                            r().createElement('div', { className: Eu.title }, R.strings.mapbox.progression.title()),
                            r().createElement(
                                'div',
                                { className: Eu.date },
                                r().createElement('div', { className: Eu.calendar }),
                                r().createElement(cu, { datetime: e, format: su.ShortDateTime }),
                                r().createElement('div', { className: Eu.separator }, ' – '),
                                r().createElement(cu, { datetime: u, format: su.ShortDateTime }),
                            ),
                        );
                    },
                    _u = {
                        base: 'ProgressBar_base_45',
                        base__small: 'ProgressBar_base__small_df',
                        background: 'ProgressBar_background_51',
                        background__small: 'ProgressBar_background__small_46',
                        lineWrapper: 'ProgressBar_lineWrapper_6a',
                    };
                let mu, Au;
                !(function (e) {
                    (e.Small = 'small'), (e.Medium = 'medium'), (e.Default = 'medium');
                })(mu || (mu = {})),
                    (function (e) {
                        (e[(e.Simple = 0)] = 'Simple'), (e[(e.Growing = 1)] = 'Growing');
                    })(Au || (Au = {}));
                const Fu = ({ size: e = mu.Default }) => {
                        const u = O()(_u.background, _u[`background__${e}`]);
                        return r().createElement('div', { className: u });
                    },
                    Du = { base: 'ProgressBarBlink_base_24', base__small: 'ProgressBarBlink_base__small_0f' },
                    Bu = ({ size: e }) => {
                        const u = O()(Du.base, Du[`base__${e}`]);
                        return r().createElement('div', { className: u });
                    },
                    Cu = {
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
                    gu = (0, n.memo)(
                        ({ size: e, lineRef: u, disabled: t, baseStyles: n, isComplete: a, withoutBounce: s }) => {
                            const o = O()(
                                    Cu.base,
                                    Cu[`base__${e}`],
                                    t && Cu.base__disabled,
                                    a && Cu.base__finished,
                                    s && Cu.base__withoutBounce,
                                ),
                                i = !t && !a;
                            return r().createElement(
                                'div',
                                { className: o, style: n, ref: u },
                                r().createElement('div', { className: Cu.pattern }),
                                r().createElement('div', { className: Cu.gradient }),
                                i && r().createElement(Bu, { size: e }),
                            );
                        },
                    ),
                    pu = ({ size: e, value: u, lineRef: t, disabled: a, onComplete: s }) => {
                        const o = (0, n.useMemo)(() => ({ width: `${u}%`, transitionProperty: 'none' }), [u]),
                            i = 100 === u;
                        return (
                            (0, n.useEffect)(() => {
                                i && s && s();
                            }, [i, s]),
                            r().createElement(gu, { size: e, disabled: a, baseStyles: o, isComplete: i, lineRef: t })
                        );
                    };
                let hu, fu;
                !(function (e) {
                    (e.Idle = 'Idle'), (e.Grow = 'Grow'), (e.Shrink = 'Shrink'), (e.End = 'End');
                })(hu || (hu = {})),
                    (function (e) {
                        (e.Idle = 'Idle'), (e.In = 'In'), (e.End = 'End');
                    })(fu || (fu = {}));
                const bu = 'ProgressBarDeltaSimple_base_6c',
                    vu = 'ProgressBarDeltaSimple_delta_99',
                    wu = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: a,
                            size: s,
                            to: o,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                        }) => {
                            const c = o < a,
                                E = (0, n.useState)(fu.Idle),
                                d = E[0],
                                _ = E[1],
                                m = d === fu.In,
                                A = d === fu.End,
                                F = d === fu.Idle,
                                D = (0, n.useCallback)(
                                    (e) => {
                                        _(e), l && l(e);
                                    },
                                    [l],
                                );
                            (0, n.useEffect)(() => {
                                if (F && !t) {
                                    return Ke(() => {
                                        D(fu.In);
                                    }, u);
                                }
                            }, [D, t, F, u]),
                                (0, n.useEffect)(() => {
                                    if (m) {
                                        return Ke(() => {
                                            i && i(), D(fu.End);
                                        }, e + u);
                                    }
                                }, [D, m, i, u, e]);
                            const B = (0, n.useMemo)(
                                    () => ({
                                        width: '100%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                C = (0, n.useMemo)(
                                    () => ({
                                        width: '0%',
                                        transitionDuration: `${e}ms`,
                                        transitionDelay: `${u}ms`,
                                        [c ? 'left' : 'right']: '0',
                                    }),
                                    [c, u, e],
                                ),
                                g = (0, n.useMemo)(
                                    () => ({ width: `${Math.abs(a - o)}%`, left: `${c ? o : a}%` }),
                                    [a, c, o],
                                );
                            return A
                                ? null
                                : r().createElement(
                                      'div',
                                      { className: bu, style: g },
                                      r().createElement(
                                          'div',
                                          { style: F ? B : C, className: vu },
                                          r().createElement(Bu, { size: s }),
                                      ),
                                  );
                        },
                    ),
                    Su = (0, n.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: a,
                            disabled: s,
                            isComplete: o,
                            animationSettings: i,
                            onChangeAnimationState: l,
                            onEndAnimation: c,
                        }) => {
                            const E = (0, n.useMemo)(
                                () => ({
                                    width: `${e}%`,
                                    transitionDuration: `${i.line.duration}ms`,
                                    transitionDelay: `${i.line.delay}ms`,
                                }),
                                [i.line.delay, i.line.duration, e],
                            );
                            return r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(gu, {
                                    size: u,
                                    lineRef: a,
                                    disabled: s,
                                    isComplete: o,
                                    baseStyles: E,
                                }),
                                t >= 0 &&
                                    r().createElement(wu, {
                                        transitionDuration: i.delta.duration,
                                        transitionDelay: i.delta.delay,
                                        freezed: i.freezed,
                                        from: t,
                                        size: u,
                                        to: e,
                                        onChangeAnimationState: l,
                                        onEndAnimation: c,
                                    }),
                            );
                        },
                    ),
                    Ru = 'ProgressBarDeltaGrow_base_7e',
                    Pu = 'ProgressBarDeltaGrow_base__withoutBounce_b5',
                    yu = 'ProgressBarDeltaGrow_glow_68',
                    Tu = (e) => (e ? { left: 0 } : { right: 0 }),
                    xu = (e, u) => (e ? { right: 100 - u + '%' } : { left: `${u}%` }),
                    Ou = (e) => ({ transitionDuration: `${e}ms` }),
                    ku = (0, n.memo)(
                        ({
                            transitionDuration: e,
                            transitionDelay: u,
                            freezed: t,
                            from: a,
                            size: s,
                            to: o,
                            onEndAnimation: i,
                            onChangeAnimationState: l,
                            className: c,
                        }) => {
                            const E = o < a,
                                d = (0, n.useState)(hu.Idle),
                                _ = d[0],
                                m = d[1],
                                A = _ === hu.End,
                                F = _ === hu.Idle,
                                D = _ === hu.Grow,
                                B = _ === hu.Shrink,
                                C = (0, n.useCallback)(
                                    (e) => {
                                        m(e), l && l(e);
                                    },
                                    [l],
                                ),
                                g = (0, n.useCallback)(
                                    (e, u) =>
                                        Ke(() => {
                                            C(e);
                                        }, u),
                                    [C],
                                );
                            (0, n.useEffect)(() => {
                                if (!t)
                                    return F
                                        ? g(hu.Grow, u)
                                        : D
                                          ? g(hu.Shrink, e)
                                          : B
                                            ? g(hu.End, e)
                                            : void (A && i && i());
                            }, [g, t, A, D, F, B, i, u, e]);
                            const p = (0, n.useMemo)(() => Object.assign({ width: '100%' }, Ou(e), Tu(E)), [E, e]),
                                h = (0, n.useMemo)(() => Object.assign({ width: '0%' }, Ou(e), Tu(E)), [E, e]),
                                f = (0, n.useMemo)(() => Object.assign({ width: '0%' }, xu(E, a), Ou(e)), [a, E, e]),
                                b = (0, n.useMemo)(
                                    () => Object.assign({ width: `${Math.abs(o - a)}%` }, xu(E, a), Ou(e)),
                                    [a, E, o, e],
                                );
                            if (A) return null;
                            const v = O()(Ru, c, E && 0 === o && Pu);
                            return r().createElement(
                                'div',
                                { style: F ? f : b, className: v },
                                r().createElement(
                                    'div',
                                    { style: B ? h : p, className: yu },
                                    r().createElement(Bu, { size: s }),
                                ),
                            );
                        },
                    ),
                    Nu = (0, n.memo)(
                        ({
                            to: e,
                            size: u,
                            from: t,
                            lineRef: a,
                            disabled: s,
                            isComplete: o,
                            animationSettings: i,
                            onEndAnimation: l,
                            onChangeAnimationState: c,
                        }) => {
                            const E = e < t,
                                d = (0, n.useState)(!1),
                                _ = d[0],
                                m = d[1],
                                A = (0, n.useCallback)(
                                    (e) => {
                                        e === hu.Shrink && m(!0), c && c(e);
                                    },
                                    [c],
                                ),
                                F = (0, n.useMemo)(() => ({ width: `${t}%`, transitionProperty: 'none' }), [t]),
                                D = (0, n.useMemo)(
                                    () => ({ width: `${e}%`, transitionDuration: `${i.line.duration}ms` }),
                                    [i.line.duration, e],
                                );
                            return r().createElement(
                                r().Fragment,
                                null,
                                r().createElement(gu, {
                                    size: u,
                                    lineRef: a,
                                    disabled: s,
                                    isComplete: o,
                                    withoutBounce: E && 0 === e,
                                    baseStyles: _ ? D : F,
                                }),
                                t >= 0 &&
                                    r().createElement(ku, {
                                        transitionDuration: i.delta.duration,
                                        transitionDelay: i.delta.delay,
                                        onChangeAnimationState: A,
                                        freezed: i.freezed,
                                        onEndAnimation: l,
                                        from: t,
                                        size: u,
                                        to: e,
                                        className: i.delta.className,
                                    }),
                            );
                        },
                    ),
                    Iu = ['onComplete', 'onEndAnimation'];
                function Mu() {
                    return (
                        (Mu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Mu.apply(this, arguments)
                    );
                }
                const Lu = (0, n.memo)((e) => {
                        let u = e.onComplete,
                            t = e.onEndAnimation,
                            a = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, Iu);
                        const s = (0, n.useState)(!1),
                            o = s[0],
                            i = s[1],
                            l = (0, n.useCallback)(() => {
                                const e = 100 === a.to;
                                e !== o && i(e), e && u && u(), t && t();
                            }, [o, u, t, a.to]);
                        switch (a.animationSettings.type) {
                            case Au.Simple:
                                return r().createElement(Su, Mu({}, a, { onEndAnimation: l, isComplete: o }));
                            case Au.Growing:
                                return r().createElement(Nu, Mu({}, a, { onEndAnimation: l, isComplete: o }));
                            default:
                                return null;
                        }
                    }),
                    Uu = ['onEndAnimation'];
                function Wu() {
                    return (
                        (Wu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Wu.apply(this, arguments)
                    );
                }
                const Gu = (0, n.memo)((e) => {
                    let u = e.onEndAnimation,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, Uu);
                    const a = (0, n.useRef)({}),
                        s = (0, n.useCallback)(() => {
                            (a.current.from = void 0), u && u();
                        }, [u]),
                        o = 'number' == typeof a.current.from ? a.current.from : t.from;
                    return (
                        (a.current.from = o),
                        r().createElement(Lu, Wu({}, t, { onEndAnimation: s, key: `${o}-${t.to}`, from: o }))
                    );
                });
                function Hu() {
                    return (
                        (Hu =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Hu.apply(this, arguments)
                    );
                }
                const zu = (0, n.memo)(
                        ({
                            size: e,
                            value: u,
                            lineRef: t,
                            disabled: n,
                            deltaFrom: a,
                            animationSettings: s,
                            onEndAnimation: o,
                            onChangeAnimationState: i,
                            onComplete: l,
                        }) => {
                            if (a === u)
                                return r().createElement(pu, {
                                    key: `${a}-${u}`,
                                    size: e,
                                    value: u,
                                    lineRef: t,
                                    disabled: n,
                                    onComplete: l,
                                });
                            const c = {
                                from: a,
                                to: u,
                                size: e,
                                lineRef: t,
                                disabled: n,
                                animationSettings: s,
                                onComplete: l,
                                onEndAnimation: o,
                                onChangeAnimationState: i,
                            };
                            return s.withStack
                                ? r().createElement(Gu, c)
                                : r().createElement(Lu, Hu({ key: `${a}-${u}` }, c));
                        },
                    ),
                    $u = (e) => ({
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
                    ju = (e, u, t) => {
                        if ('number' == typeof t) {
                            return (ie(0, u, t) / u) * 100;
                        }
                        return e;
                    },
                    Yu = {
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
                    qu = {
                        freezed: !1,
                        withStack: !1,
                        type: Au.Growing,
                        delta: { duration: 500, delay: 0 },
                        line: { duration: 500, delay: 0 },
                    },
                    Vu = (0, n.memo)(
                        ({
                            maxValue: e = 100,
                            theme: u = Yu,
                            size: t = mu.Default,
                            animationSettings: a = qu,
                            disabled: s = !1,
                            withoutBackground: o = !1,
                            value: i,
                            deltaFrom: l,
                            lineRef: c,
                            onChangeAnimationState: E,
                            onEndAnimation: d,
                            onComplete: _,
                        }) => {
                            const m = ((e, u, t) =>
                                (0, n.useMemo)(() => {
                                    const n = (ie(0, u, e) / u) * 100;
                                    return { value: n, deltaFrom: ju(n, u, t) };
                                }, [t, u, e]))(i, e, l);
                            return r().createElement(
                                'div',
                                { className: O()(_u.base, _u[`base__${t}`]), style: $u(u) },
                                !o && r().createElement(Fu, { size: t }),
                                r().createElement(zu, {
                                    size: t,
                                    lineRef: c,
                                    disabled: s,
                                    value: m.value,
                                    deltaFrom: m.deltaFrom,
                                    animationSettings: a,
                                    onEndAnimation: d,
                                    onChangeAnimationState: E,
                                    onComplete: _,
                                }),
                            );
                        },
                    );
                let Xu, Ku, Qu, Zu, Ju, et, ut, tt;
                !(function (e) {
                    (e.Items = 'items'),
                        (e.Equipment = 'equipment'),
                        (e.Xp = 'xp'),
                        (e.XpFactor = 'xpFactor'),
                        (e.Blueprints = 'blueprints'),
                        (e.BlueprintsAny = 'blueprintsAny'),
                        (e.Goodies = 'goodies'),
                        (e.Berths = 'berths'),
                        (e.Slots = 'slots'),
                        (e.Tokens = 'tokens'),
                        (e.CrewSkins = 'crewSkins'),
                        (e.CrewBooks = 'crewBooks'),
                        (e.Customizations = 'customizations'),
                        (e.CreditsFactor = 'creditsFactor'),
                        (e.Tankman = 'tankman'),
                        (e.Tankwoman = 'tankwoman'),
                        (e.TankmenXp = 'tankmenXP'),
                        (e.TankmenXpFactor = 'tankmenXPFactor'),
                        (e.FreeXpFactor = 'freeXPFactor'),
                        (e.BattleToken = 'battleToken'),
                        (e.PremiumUniversal = 'premium_universal'),
                        (e.Gold = 'gold'),
                        (e.Credits = 'credits'),
                        (e.Crystal = 'crystal'),
                        (e.FreeXp = 'freeXP'),
                        (e.Premium = 'premium'),
                        (e.PremiumPlus = 'premium_plus'),
                        (e.BattlePassPoints = 'battlePassPoints'),
                        (e.BattlePassSelectToken = 'battlePassSelectToken'),
                        (e.StyleProgressToken = 'styleProgressToken'),
                        (e.TmanToken = 'tmanToken'),
                        (e.NaturalCover = 'naturalCover'),
                        (e.BpCoin = 'bpcoin'),
                        (e.BattlaPassFinalAchievement = 'dossier_achievement'),
                        (e.BattleBadge = 'dossier_badge'),
                        (e.NewYearInvoice = 'newYearInvoice'),
                        (e.NewYearSlot = 'newYearSlot'),
                        (e.BonusX5 = 'battle_bonus_x5'),
                        (e.CrewBonusX3 = 'crew_bonus_x3'),
                        (e.Vehicles = 'vehicles'),
                        (e.WtHunterLootbox = 'wt_hunter'),
                        (e.WtBossLootbox = 'wt_boss'),
                        (e.WtProgressPoints = 'stamp'),
                        (e.EpicSelectToken = 'epicSelectToken'),
                        (e.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                        (e.DeluxeGift = 'deluxe_gift'),
                        (e.BattleBoosterGift = 'battleBooster_gift'),
                        (e.OptionalDevice = 'optionalDevice'),
                        (e.EquipCoin = 'equipCoin'),
                        (e.WTCommanderClaimable = 'wtCommanderClaimable'),
                        (e.WTCommanderClaimed = 'wtCommanderClaimed');
                })(Xu || (Xu = {})),
                    (function (e) {
                        (e.Gold = 'gold'),
                            (e.Credits = 'credits'),
                            (e.Crystal = 'crystal'),
                            (e.Premium = 'premium'),
                            (e.PremiumPlus = 'premium_plus'),
                            (e.Vehicles = 'vehicles'),
                            (e.Customizations = 'customizations'),
                            (e.Blueprints = 'blueprints'),
                            (e.BlueprintsAny = 'blueprintsAny'),
                            (e.BlueprintsFinal = 'finalBlueprints'),
                            (e.Goodies = 'goodies'),
                            (e.CrewSkins = 'crewSkins'),
                            (e.Xp = 'xp'),
                            (e.XpFactor = 'xpFactor'),
                            (e.FreeXp = 'freeXP'),
                            (e.FreeXPFactor = 'freeXPFactor'),
                            (e.TankmenXP = 'tankmenXP'),
                            (e.TankmenXPFactor = 'tankmenXPFactor'),
                            (e.DailyXPFactor = 'dailyXPFactor'),
                            (e.CreditsFactor = 'creditsFactor'),
                            (e.Items = 'items'),
                            (e.StrBonus = 'strBonus'),
                            (e.Groups = 'groups'),
                            (e.Berths = 'berths'),
                            (e.Slots = 'slots'),
                            (e.Meta = 'meta'),
                            (e.Tokens = 'tokens'),
                            (e.Dossier = 'dossier'),
                            (e.OneOf = 'oneof'),
                            (e.PremiumUniversal = 'premium_universal'),
                            (e.BadgesGroup = 'badgesGroup'),
                            (e.Entitlements = 'entitlements'),
                            (e.RankedDailyBattles = 'rankedDailyBattles'),
                            (e.RankedBonusBattles = 'rankedBonusBattles'),
                            (e.BattlePassPoints = 'battlePassPoints'),
                            (e.BattleBadge = 'dossier_badge'),
                            (e.BattleAchievement = 'dossier_achievement'),
                            (e.EquipCoin = 'equipCoin');
                    })(Ku || (Ku = {})),
                    (function (e) {
                        (e.Big = 'big'),
                            (e.Small = 'small'),
                            (e.Mini = 'mini'),
                            (e.S600x450 = 's600x450'),
                            (e.S400x300 = 's400x300'),
                            (e.S296x222 = 's296x222'),
                            (e.S232x174 = 's232x174'),
                            (e.S180x135 = 's180x135'),
                            (e.S128x100 = 's128x100'),
                            (e.S80x80 = 's80x80'),
                            (e.S64x64 = 's64x64'),
                            (e.S48x48 = 's48x48');
                    })(Qu || (Qu = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(Zu || (Zu = {})),
                    (function (e) {
                        (e.BATTLE_BOOSTER = 'battleBooster'),
                            (e.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (e.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (e.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (e.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (e.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (e.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (e.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (e.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (e.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6');
                    })(Ju || (Ju = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(et || (et = {})),
                    (function (e) {
                        (e.BATTLE_BOOSTER = 'battleBooster'),
                            (e.BATTLE_BOOSTER_REPLACE = 'battleBoosterReplace'),
                            (e.BUILT_IN_EQUIPMENT = 'builtInEquipment'),
                            (e.EQUIPMENT_PLUS = 'equipmentPlus'),
                            (e.EQUIPMENT_TROPHY_BASIC = 'equipmentTrophyBasic'),
                            (e.EQUIPMENT_TROPHY_UPGRADED = 'equipmentTrophyUpgraded'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_1 = 'equipmentModernized_1'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_2 = 'equipmentModernized_2'),
                            (e.EQUIPMENT_MODERNIZED_UPGRADED_3 = 'equipmentModernized_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_1 = 'progressionStyleUpgraded_1'),
                            (e.PROGRESSION_STYLE_UPGRADED_2 = 'progressionStyleUpgraded_2'),
                            (e.PROGRESSION_STYLE_UPGRADED_3 = 'progressionStyleUpgraded_3'),
                            (e.PROGRESSION_STYLE_UPGRADED_4 = 'progressionStyleUpgraded_4'),
                            (e.PROGRESSION_STYLE_UPGRADED_5 = 'progressionStyleUpgraded_5'),
                            (e.PROGRESSION_STYLE_UPGRADED_6 = 'progressionStyleUpgraded_6');
                    })(ut || (ut = {})),
                    (function (e) {
                        (e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background');
                    })(tt || (tt = {}));
                const nt = ['children'];
                function rt() {
                    return (
                        (rt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        rt.apply(this, arguments)
                    );
                }
                const at = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, nt);
                    return r().createElement(
                        He,
                        rt(
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
                function st() {
                    return (
                        (st =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        st.apply(this, arguments)
                    );
                }
                const ot = ({ children: e, tooltipArgs: u, className: t }) => {
                        if (!u) return e;
                        const n = r().createElement('div', { className: t }, e);
                        if (u.header || u.body) return r().createElement(Ye, u, n);
                        const a = u.contentId;
                        return a ? r().createElement(He, st({}, u, { contentId: a }), n) : r().createElement(at, u, n);
                    },
                    it = ({ format: e, value: u }) => {
                        const t = ((e, u = 'integral') => {
                            let t;
                            t = 'gold' === u ? f.B3.GOLD : f.B3.INTEGRAL;
                            return void 0 === e ? '' : f.Z5.getNumberFormat(e, t);
                        })(u, e);
                        return t ? r().createElement('span', null, t) : null;
                    },
                    lt =
                        (Xu.Items,
                        Xu.Equipment,
                        Xu.Xp,
                        Xu.XpFactor,
                        Xu.Blueprints,
                        Xu.BlueprintsAny,
                        Xu.Goodies,
                        Xu.Berths,
                        Xu.Slots,
                        Xu.Tokens,
                        Xu.CrewSkins,
                        Xu.CrewBooks,
                        Xu.Customizations,
                        Xu.CreditsFactor,
                        Xu.TankmenXp,
                        Xu.TankmenXpFactor,
                        Xu.FreeXpFactor,
                        Xu.BattleToken,
                        Xu.PremiumUniversal,
                        Xu.NaturalCover,
                        Xu.BpCoin,
                        Xu.BattlePassSelectToken,
                        Xu.BattlaPassFinalAchievement,
                        Xu.BattleBadge,
                        Xu.BonusX5,
                        Xu.CrewBonusX3,
                        Xu.NewYearInvoice,
                        Xu.EpicSelectToken,
                        Xu.WtHunterLootbox,
                        Xu.WtBossLootbox,
                        Xu.WtProgressPoints,
                        Xu.Comp7TokenWeeklyReward,
                        Xu.DeluxeGift,
                        Xu.BattleBoosterGift,
                        Xu.OptionalDevice,
                        Xu.Gold,
                        Xu.Credits,
                        Xu.Crystal,
                        Xu.FreeXp,
                        Xu.BattlePassPoints,
                        Xu.EquipCoin,
                        Xu.PremiumPlus,
                        Xu.Premium,
                        (e, u, t) => {
                            const n = u && { contentId: u };
                            return Object.assign(
                                {
                                    args: e,
                                    isEnabled: Boolean((e && e.tooltipId) || u),
                                    ignoreMouseClick: !0,
                                    ignoreShowDelay: !u,
                                },
                                n,
                                t,
                            );
                        }),
                    ct = [Qu.Small, Qu.Big],
                    Et = {
                        base: 'Reward_base_ea',
                        base__s48x48: 'Reward_base__s48x48_46',
                        base__small: 'Reward_base__small_c0',
                        base__s80x80: 'Reward_base__s80x80_ce',
                        base__big: 'Reward_base__big_e5',
                        base__s128x100: 'Reward_base__s128x100_c3',
                        base__s180x135: 'Reward_base__s180x135_7c',
                        base__s232x174: 'Reward_base__s232x174_67',
                        base__s296x222: 'Reward_base__s296x222_78',
                        base__s400x300: 'Reward_base__s400x300_07',
                        base__s600x450: 'Reward_base__s600x450_f8',
                        tooltipWrapper: 'Reward_tooltipWrapper_b5',
                        icon: 'Reward_icon_df',
                        overlay: 'Reward_overlay_68',
                        highlight: 'Reward_highlight_36',
                        image: 'Reward_image_89',
                        info: 'Reward_info_72',
                        info__multi: 'Reward_info__multi_63',
                        info__credits: 'Reward_info__credits_ef',
                        info__gold: 'Reward_info__gold_36',
                        info__crystal: 'Reward_info__crystal_36',
                        info__premiumTank: 'Reward_info__premiumTank_d3',
                        title: 'Reward_title_36',
                        timer: 'Reward_timer_d3',
                    },
                    dt = ({
                        name: e,
                        image: u,
                        isPeriodic: t = !1,
                        size: n = Qu.Big,
                        special: a,
                        value: s,
                        valueType: o,
                        title: i,
                        style: l,
                        className: c,
                        classNames: E,
                        tooltipArgs: d,
                        periodicIconTooltipArgs: _,
                    }) => {
                        const m = ((e, u) => {
                                if (void 0 === u || !ct.includes(e)) return null;
                                switch (u) {
                                    case Ju.BATTLE_BOOSTER:
                                    case Ju.BATTLE_BOOSTER_REPLACE:
                                        return et.BATTLE_BOOSTER;
                                }
                            })(n, a),
                            A = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case Ju.BATTLE_BOOSTER:
                                        return ut.BATTLE_BOOSTER;
                                    case Ju.BATTLE_BOOSTER_REPLACE:
                                        return ut.BATTLE_BOOSTER_REPLACE;
                                    case Ju.BUILT_IN_EQUIPMENT:
                                        return ut.BUILT_IN_EQUIPMENT;
                                    case Ju.EQUIPMENT_PLUS:
                                        return ut.EQUIPMENT_PLUS;
                                    case Ju.EQUIPMENT_TROPHY_BASIC:
                                        return ut.EQUIPMENT_TROPHY_BASIC;
                                    case Ju.EQUIPMENT_TROPHY_UPGRADED:
                                        return ut.EQUIPMENT_TROPHY_UPGRADED;
                                    case Ju.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return ut.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case Ju.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return ut.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case Ju.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return ut.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case Ju.PROGRESSION_STYLE_UPGRADED_1:
                                        return ut.PROGRESSION_STYLE_UPGRADED_1;
                                    case Ju.PROGRESSION_STYLE_UPGRADED_2:
                                        return ut.PROGRESSION_STYLE_UPGRADED_2;
                                    case Ju.PROGRESSION_STYLE_UPGRADED_3:
                                        return ut.PROGRESSION_STYLE_UPGRADED_3;
                                    case Ju.PROGRESSION_STYLE_UPGRADED_4:
                                        return ut.PROGRESSION_STYLE_UPGRADED_4;
                                    case Ju.PROGRESSION_STYLE_UPGRADED_5:
                                        return ut.PROGRESSION_STYLE_UPGRADED_5;
                                    case Ju.PROGRESSION_STYLE_UPGRADED_6:
                                        return ut.PROGRESSION_STYLE_UPGRADED_6;
                                }
                            })(a),
                            F = ((e, u) => {
                                if (void 0 === e) return null;
                                switch (u) {
                                    case Zu.MULTI: {
                                        const u = Number(e);
                                        return isFinite(u) && u > 1 ? `x${Math.floor(u)}` : null;
                                    }
                                    case Zu.CURRENCY:
                                    case Zu.NUMBER:
                                        return r().createElement(it, { format: 'integral', value: Number(e) });
                                    case Zu.PREMIUM_PLUS: {
                                        const u = Number(e);
                                        return isNaN(u) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(s, o);
                        return r().createElement(
                            'div',
                            { className: O()(Et.base, Et[`base__${n}`], c), style: l },
                            r().createElement(
                                ot,
                                { tooltipArgs: d, className: Et.tooltipWrapper },
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement(
                                        'div',
                                        { className: O()(Et.image, null == E ? void 0 : E.image) },
                                        m &&
                                            r().createElement('div', {
                                                className: O()(Et.highlight, null == E ? void 0 : E.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${m}_highlight)`,
                                                },
                                            }),
                                        u &&
                                            r().createElement('div', {
                                                className: O()(Et.icon, null == E ? void 0 : E.rewardIcon),
                                                style: { backgroundImage: `url(${u})` },
                                            }),
                                        A &&
                                            r().createElement('div', {
                                                className: O()(Et.overlay, null == E ? void 0 : E.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${A}_overlay)`,
                                                },
                                            }),
                                    ),
                                    F &&
                                        r().createElement(
                                            'div',
                                            {
                                                className: O()(
                                                    Et.info,
                                                    Et[`info__${e}`],
                                                    o === Zu.MULTI && Et.info__multi,
                                                    null == E ? void 0 : E.info,
                                                ),
                                            },
                                            F,
                                        ),
                                    i && r().createElement('div', { className: Et.title }, i),
                                ),
                            ),
                            t &&
                                r().createElement(
                                    ot,
                                    { tooltipArgs: _ },
                                    r().createElement('div', {
                                        className: O()(Et.timer, null == E ? void 0 : E.periodicIcon),
                                    }),
                                ),
                        );
                    };
                let _t;
                !(function (e) {
                    (e.Goodies = 'goodies'),
                        (e.CrewBooks = 'crewBooks'),
                        (e.Customizations = 'customizations'),
                        (e.PremiumPlus = 'premium_plus'),
                        (e.DossierAchievement = 'dossier_achievement'),
                        (e.Guide = 'guide'),
                        (e.Brochure = 'brochure'),
                        (e.Items = 'items');
                })(_t || (_t = {}));
                const mt = [
                        _t.Goodies,
                        _t.CrewBooks,
                        _t.Customizations,
                        _t.DossierAchievement,
                        _t.Guide,
                        _t.Brochure,
                        _t.Items,
                    ],
                    At = (e) => (mt.includes(e) ? Zu.MULTI : e === _t.PremiumPlus ? Zu.PREMIUM_PLUS : Zu.STRING),
                    Ft = {
                        base: 'RewardItem_base_b9',
                        shine: 'RewardItem_shine_c1',
                        base__button: 'RewardItem_base__button_b4',
                        passed: 'RewardItem_passed_39',
                        base__animated: 'RewardItem_base__animated_bb',
                        button: 'RewardItem_button_9a',
                        rewardWrapper: 'RewardItem_rewardWrapper_ad',
                        rewardPrevious: 'RewardItem_rewardPrevious_49',
                        hideReward: 'RewardItem_hideReward_54',
                        rewardCurrent: 'RewardItem_rewardCurrent_d9',
                        showReward: 'RewardItem_showReward_34',
                        animationItem: 'RewardItem_animationItem_4a',
                        animationItem__godRays: 'RewardItem_animationItem__godRays_3b',
                        fade: 'RewardItem_fade_71',
                        animationItem__staticShine: 'RewardItem_animationItem__staticShine_4b',
                        staticShine: 'RewardItem_staticShine_2a',
                        animationItem__explosion: 'RewardItem_animationItem__explosion_8a',
                    };
                function Dt() {
                    return (
                        (Dt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Dt.apply(this, arguments)
                    );
                }
                let Bt;
                !(function (e) {
                    (e.Idle = 'Idle'), (e.Changing = 'Changing'), (e.End = 'End');
                })(Bt || (Bt = {}));
                const Ct = { margin: '5rem' },
                    gt = r().memo(({ onTakeReward: e, reward: u, requiredNumBattles: t, isReached: a }) => {
                        const s = u.isOpenable && a,
                            o = u.previousIcon && a ? Bt.Changing : Bt.Idle,
                            i = (0, n.useState)(o),
                            l = i[0],
                            c = i[1],
                            E = (0, n.useRef)(null),
                            d = (0, n.useCallback)(() => {
                                e(u.name, u.index, t);
                            }, [e, t, u.index, u.name]),
                            _ = (0, n.useCallback)(() => {
                                c(Bt.End);
                            }, []);
                        (0, n.useEffect)(() => {
                            const e = E.current;
                            if (e)
                                return (
                                    e.addEventListener('transitionend', _),
                                    () => {
                                        e.removeEventListener('transitionend', _);
                                    }
                                );
                        }, [_, E]);
                        const m = (0, n.useMemo)(
                                () => ({
                                    name: u.name,
                                    image: `R.images.gui.maps.icons.mapbox.rewardItems.small.${u.icon}`,
                                    value: u.value,
                                    valueType: At(u.name),
                                    tooltipArgs: lt({ tooltipId: u.tooltipId }, Number(u.tooltipContentId)),
                                }),
                                [u],
                            ),
                            A = (0, n.useMemo)(
                                () => ({
                                    name: u.name,
                                    image: `R.images.gui.maps.icons.mapbox.rewardItems.small.${u.previousIcon}`,
                                    value: u.value,
                                    valueType: At(u.name),
                                    tooltipArgs: lt({ tooltipId: u.tooltipId }, Number(u.tooltipContentId)),
                                }),
                                [u],
                            ),
                            F = O()(Ft.base, s && Ft.base__button, l === Bt.Changing && Ft.base__animated);
                        return r().createElement(
                            'div',
                            { className: F },
                            s && r().createElement('div', { className: Ft.shine }),
                            u.isSelected && r().createElement('div', { className: Ft.passed }),
                            s &&
                                r().createElement(
                                    J,
                                    { onClick: d, size: Q.small, type: K.main, mixClass: Ft.button },
                                    R.strings.mapbox.progression.takeButton(),
                                ),
                            r().createElement(
                                'div',
                                { className: Ft.rewardWrapper },
                                l === Bt.Changing &&
                                    r().createElement(
                                        r().Fragment,
                                        null,
                                        r().createElement('div', {
                                            className: O()(Ft.animationItem, Ft.animationItem__godRays),
                                        }),
                                        r().createElement('div', {
                                            className: O()(Ft.animationItem, Ft.animationItem__staticShine),
                                            ref: E,
                                        }),
                                        r().createElement('div', {
                                            className: O()(Ft.animationItem, Ft.animationItem__explosion),
                                        }),
                                        r().createElement(
                                            'div',
                                            { className: Ft.rewardPrevious },
                                            r().createElement(dt, Dt({ size: Qu.Small }, A, { style: Ct })),
                                        ),
                                    ),
                                r().createElement(
                                    'div',
                                    { className: Ft.rewardCurrent },
                                    r().createElement(
                                        dt,
                                        Dt({ size: Qu.Small }, m, {
                                            style: Ct,
                                            special: u.name === _t.Items ? Ju.BATTLE_BOOSTER : void 0,
                                        }),
                                    ),
                                ),
                            ),
                        );
                    }),
                    pt = { base: 'Rewards_base_ba', items: 'Rewards_items_e4' },
                    ht = r().memo(
                        ({ onTakeReward: e, progressRewards: u, requiredNumBattles: t, isReached: n, isLast: a }) => {
                            const s = $(['box', 'items'], pt),
                                o = O()(pt.base, a && pt.base__last);
                            return r().createElement(
                                'div',
                                { className: o },
                                r().createElement(
                                    'div',
                                    { className: s.items },
                                    u.map(({ value: u }, a) =>
                                        r().createElement(gt, {
                                            key: a,
                                            reward: u,
                                            requiredNumBattles: t,
                                            isReached: n,
                                            onTakeReward: e,
                                        }),
                                    ),
                                ),
                            );
                        },
                    ),
                    ft = {
                        base: 'Progression_base_66',
                        progressWrapper: 'Progression_progressWrapper_5e',
                        base__large: 'Progression_base__large_db',
                        base__extraLarge: 'Progression_base__extraLarge_1a',
                        progressBgWrapper: 'Progression_progressBgWrapper_dc',
                        bgSection: 'Progression_bgSection_5e',
                        bgSectionNumber: 'Progression_bgSectionNumber_8f',
                        bgSectionNumber__passed: 'Progression_bgSectionNumber__passed_d4',
                        base__finally: 'Progression_base__finally_ed',
                        base__reset: 'Progression_base__reset_4f',
                        color: 'Progression_color_9d',
                        base__medium: 'Progression_base__medium_08',
                        progressRewardsWrapper: 'Progression_progressRewardsWrapper_90',
                        rewardsGroup: 'Progression_rewardsGroup_50',
                        progressBarWrapper: 'Progression_progressBarWrapper_68',
                        info: 'Progression_info_ac',
                        title: 'Progression_title_b1',
                        highlight: 'Progression_highlight_6c',
                        description: 'Progression_description_cd',
                        restart: 'Progression_restart_fd',
                        timer: 'Progression_timer_49',
                        timerIcon: 'Progression_timerIcon_91',
                    },
                    bt = {
                        freezed: !1,
                        withStack: !1,
                        type: Au.Growing,
                        delta: { duration: 500, delay: 1900 },
                        line: { duration: 500, delay: 1900 },
                    },
                    vt = ({
                        onTakeReward: e,
                        onAnimationEnd: u,
                        rewards: t,
                        totalBattles: a,
                        totalBattlesPlayed: s,
                        isOverlapped: o,
                        prevTotalBattlesPlayed: i,
                        timeTillProgressionRestart: l,
                    }) => {
                        const c = (0, n.useState)(!1),
                            E = c[0],
                            d = c[1],
                            _ = E ? s : i,
                            m = s >= a && (E || i === s),
                            A = i >= a && s < i,
                            F = (0, n.useMemo)(
                                () => ({
                                    current: r().createElement('span', { className: ft.highlight }, s),
                                    total: a,
                                }),
                                [s, a],
                            ),
                            D = (0, n.useMemo)(
                                () => ({
                                    leftTime: r().createElement(
                                        'div',
                                        { className: ft.timer },
                                        r().createElement('div', { className: ft.timerIcon }),
                                        l,
                                    ),
                                }),
                                [l],
                            ),
                            B = (e) => ({ left: (100 * e) / a + '%' }),
                            C = (0, n.useCallback)(() => {
                                o || (V(R.sounds.ev_mapbox_progressbar_stop()), d(!0), u());
                            }, [o, u]);
                        (0, n.useEffect)(() => {
                            s === i || o || setTimeout(() => V(R.sounds.ev_mapbox_progressbar_start()), 1300);
                        }, [o, i, a, s]);
                        const g = $(['base'], ft),
                            p = O()(g.base, m && ft.base__finally, A && ft.base__reset);
                        return r().createElement(
                            'div',
                            { className: p },
                            r().createElement(
                                'div',
                                { className: ft.progressWrapper },
                                r().createElement(
                                    'div',
                                    { className: ft.progressBgWrapper },
                                    t.map(({ value: e }) => {
                                        const u = B(e.numBattles),
                                            t = O()(
                                                ft.bgSectionNumber,
                                                e.numBattles <= _ && ft.bgSectionNumber__passed,
                                            );
                                        return r().createElement(
                                            r().Fragment,
                                            { key: e.numBattles },
                                            r().createElement('div', { className: ft.bgSection, style: u }),
                                            r().createElement('div', { className: t, style: u }, e.numBattles),
                                        );
                                    }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: ft.progressBarWrapper },
                                    r().createElement(Vu, {
                                        value: s,
                                        maxValue: a,
                                        deltaFrom: i,
                                        animationSettings: bt,
                                        onEndAnimation: C,
                                    }),
                                ),
                                t.map(({ value: u }, t) => {
                                    const n = u.numBattles === a;
                                    return r().createElement(
                                        'div',
                                        { className: ft.rewardsGroup, key: t, style: B(u.numBattles) },
                                        r().createElement(ht, {
                                            progressRewards: u.rewards,
                                            requiredNumBattles: u.numBattles,
                                            isReached: u.numBattles <= _,
                                            isLast: n,
                                            onTakeReward: e,
                                        }),
                                    );
                                }),
                            ),
                            r().createElement(
                                'div',
                                { className: ft.info },
                                r().createElement(
                                    'div',
                                    { className: ft.title },
                                    r().createElement(Le, {
                                        text: R.strings.mapbox.progression.info.title(),
                                        binding: F,
                                    }),
                                ),
                                r().createElement(
                                    'div',
                                    { className: ft.description },
                                    R.strings.mapbox.progression.info.description(),
                                ),
                                l &&
                                    r().createElement(
                                        'div',
                                        { className: ft.restart },
                                        r().createElement(Le, {
                                            text: R.strings.mapbox.progression.info.restart(),
                                            binding: D,
                                        }),
                                    ),
                            ),
                        );
                    },
                    wt = {
                        base: 'MapBoxProgression_base_c6',
                        info: 'MapBoxProgression_info_59',
                        show: 'MapBoxProgression_show_05',
                        base__small: 'MapBoxProgression_base__small_b8',
                        base__medium: 'MapBoxProgression_base__medium_3c',
                        selectMode: 'MapBoxProgression_selectMode_ef',
                        icon: 'MapBoxProgression_icon_fe',
                        content: 'MapBoxProgression_content_a4',
                        base__large: 'MapBoxProgression_base__large_5d',
                        base__extraLarge: 'MapBoxProgression_base__extraLarge_0b',
                        header: 'MapBoxProgression_header_e9',
                        appearUp: 'MapBoxProgression_appearUp_58',
                        progression: 'MapBoxProgression_progression_92',
                        appearBottom: 'MapBoxProgression_appearBottom_a3',
                        progression__enabled: 'MapBoxProgression_progression__enabled_f6',
                    },
                    St = R.strings.mapbox.progression,
                    Rt = () => {
                        const e = T(),
                            u = e.startEvent,
                            t = e.endEvent,
                            a = e.isMapboxModeSelected,
                            s = e.progressionRewards,
                            o = e.isOverlapped,
                            i = e.totalBattles,
                            l = e.totalBattlesPlayed,
                            c = e.prevTotalBattlesPlayed,
                            E = e.timeTillProgressionRestart,
                            d = e.onShowSurvey,
                            _ = e.onSelectMapboxBattle,
                            m = e.onRemoveBubble,
                            A = e.onTakeReward,
                            F = e.onClose,
                            D = e.onShowInfo,
                            B = e.onAnimationEnded,
                            C = T('model.maps'),
                            g = (0, n.useState)(!1),
                            p = g[0],
                            h = g[1],
                            f = (0, n.useCallback)(() => {
                                F && F();
                            }, [F]);
                        se(re.n.ESCAPE, f);
                        const b = (0, n.useCallback)((e) => d({ mapName: e }), [d]),
                            v = (0, n.useCallback)(() => _(), [_]),
                            w = (0, n.useCallback)(() => D(), [D]),
                            S = (0, n.useCallback)(() => B(), [B]),
                            R = (0, n.useCallback)((e) => m({ mapName: e }), [m]),
                            P = (0, n.useCallback)(
                                (e, u, t) => {
                                    A({ name: e, itemIdx: u, numBattles: t });
                                },
                                [A],
                            ),
                            y = $(['base'], wt);
                        return r().createElement(
                            'div',
                            { className: y.base },
                            r().createElement(
                                'div',
                                { className: wt.info },
                                r().createElement(ne, {
                                    caption: St.infoButton(),
                                    side: 'left',
                                    type: 'info',
                                    onClick: w,
                                }),
                            ),
                            !a &&
                                r().createElement(
                                    J,
                                    { onClick: v, size: Q.small, type: K.ghost, mixClass: wt.selectMode },
                                    r().createElement('div', { className: wt.icon }),
                                    St.redirect(),
                                ),
                            r().createElement(
                                'div',
                                { className: wt.content },
                                r().createElement(
                                    'div',
                                    { className: wt.header },
                                    r().createElement(du, { startEvent: u, endEvent: t }),
                                ),
                                r().createElement(au, { maps: C, onClick: b, onMouseEnter: R }),
                                r().createElement(
                                    'div',
                                    {
                                        className: O()(wt.progression, p && wt.progression__enabled),
                                        onAnimationEnd: () => h(!0),
                                    },
                                    r().createElement(vt, {
                                        rewards: s,
                                        totalBattles: i,
                                        totalBattlesPlayed: l,
                                        prevTotalBattlesPlayed: c,
                                        timeTillProgressionRestart: E,
                                        isOverlapped: o,
                                        onTakeReward: P,
                                        onAnimationEnd: S,
                                    }),
                                ),
                            ),
                        );
                    },
                    Pt = () => {
                        const e = T(),
                            u = e.isError;
                        return e.isDataSynced ? (u ? r().createElement(q, null) : r().createElement(Rt, null)) : null;
                    };
                engine.whenReady.then(() => {
                    g().render(
                        r().createElement(B, null, r().createElement(Pt, null)),
                        document.getElementById('root'),
                    );
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
                    for (var [u, t, n] = deferred[i], a = !0, s = 0; s < u.length; s++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
                        deferred.splice(i--, 1);
                        var o = t();
                        void 0 !== o && (e = o);
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
        (__webpack_require__.j = 881),
        (() => {
            var e = { 881: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        r,
                        [a, s, o] = t,
                        i = 0;
                    if (a.some((u) => 0 !== e[u])) {
                        for (n in s) __webpack_require__.o(s, n) && (__webpack_require__.m[n] = s[n]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (u && u(t); i < a.length; i++)
                        (r = a[i]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [320], () => __webpack_require__(50));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
