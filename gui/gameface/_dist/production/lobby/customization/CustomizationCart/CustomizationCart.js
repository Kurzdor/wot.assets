(() => {
    'use strict';
    var __webpack_modules__ = {
            768: (e, u, t) => {
                t.d(u, { O: () => te });
                var n = {};
                t.r(n),
                    t.d(n, { mouse: () => F, off: () => E, on: () => _, onResize: () => c, onScaleUpdated: () => l });
                var o = {};
                t.r(o),
                    t.d(o, {
                        events: () => n,
                        getMouseGlobalPosition: () => D,
                        getSize: () => C,
                        graphicsQuality: () => B,
                        playSound: () => A,
                        setRTPC: () => m,
                    });
                var r = {};
                t.r(r), t.d(r, { getBgUrl: () => b, getTextureUrl: () => f });
                var s = {};
                function a(e) {
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
                        addModelObserver: () => z,
                        addPreloadTexture: () => O,
                        children: () => r,
                        displayStatus: () => h,
                        displayStatusIs: () => J,
                        events: () => y,
                        extraSize: () => ee,
                        forceTriggerMouseMove: () => Z,
                        freezeTextureBeforeResize: () => U,
                        getBrowserTexturePath: () => L,
                        getDisplayStatus: () => Q,
                        getScale: () => $,
                        getSize: () => H,
                        getViewGlobalPosition: () => W,
                        isEventHandled: () => Y,
                        isFocused: () => X,
                        pxToRem: () => q,
                        remToPx: () => j,
                        resize: () => V,
                        sendEvent: () => M,
                        setAnimateWindow: () => G,
                        setEventHandled: () => K,
                        setInputPaddingsRem: () => R,
                        setSidePaddingsRem: () => I,
                        whenTutorialReady: () => ue,
                    });
                const c = a('clientResized'),
                    l = a('self.onScaleUpdated'),
                    _ = (e, u) => engine.on(e, u),
                    E = (e, u) => engine.off(e, u),
                    d = { down: a('mousedown'), up: a('mouseup'), move: a('mousemove') };
                const F = (function () {
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
                    const o = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let o = !0;
                                    const r = `mouse${u}`,
                                        s = d[u]((e) => t([e, 'outside']));
                                    function a(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, a),
                                        n(),
                                        () => {
                                            o &&
                                                (s(),
                                                window.removeEventListener(r, a),
                                                (e.listeners -= 1),
                                                n(),
                                                (o = !1));
                                        }
                                    );
                                };
                            })(t)),
                            u
                        ),
                        {},
                    );
                    return Object.assign({}, o, {
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
                function m(e, u) {
                    engine.call('SetRTPCGlobal', e, u).catch((t) => {
                        console.error(`setRTPC('${e}', '${u}'): `, t);
                    });
                }
                function C(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function D(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const B = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    p = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    v = Object.keys(p).reduce((e, u) => ((e[u] = () => A(p[u])), e), {}),
                    g = { play: Object.assign({}, v, { sound: A }), setRTPC: m };
                function f(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function b(e, u, t) {
                    return `url(${f(e, u, t)})`;
                }
                const h = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    y = {
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
                    w = ['args'];
                const k = 2,
                    S = 16,
                    x = 32,
                    N = 64,
                    P = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const o = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (u.indexOf(n) >= 0) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(u, w);
                            return void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((n = o),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, r));
                        }
                        return viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    M = {
                        close(e) {
                            P('popover' === e ? k : x);
                        },
                        minimize() {
                            P(N);
                        },
                        move(e) {
                            P(S, { isMouseEvent: !0, on: e });
                        },
                    },
                    T = 15;
                function O(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function R(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, T);
                }
                function L(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function z(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function I(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, T);
                }
                function H(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function V(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function W(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: j(u.x), y: j(u.y) };
                }
                function U() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function $() {
                    return viewEnv.getScale();
                }
                function q(e) {
                    return viewEnv.pxToRem(e);
                }
                function j(e) {
                    return viewEnv.remToPx(e);
                }
                function G(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function X() {
                    return viewEnv.isFocused();
                }
                function K() {
                    return viewEnv.setEventHandled();
                }
                function Y() {
                    return viewEnv.isEventHandled();
                }
                function Z() {
                    viewEnv.forceTriggerMouseMove();
                }
                function Q() {
                    return viewEnv.getShowingStatus();
                }
                const J = Object.keys(h).reduce((e, u) => ((e[u] = () => viewEnv.getShowingStatus() === h[u]), e), {}),
                    ee = {
                        set: (e, u) => {
                            viewEnv.setExtraSizeRem(e, u);
                        },
                        get: (e, u) => {
                            viewEnv.getExtraSizeRem(e, u);
                        },
                    },
                    ue = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : y.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    te = { view: s, client: o, sound: g };
            },
            521: (e, u, t) => {
                let n, o;
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
                    })(o || (o = {}));
            },
            358: (e, u, t) => {
                t.d(u, { Z: () => r });
                var n = t(768);
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
                    addCallback(e, u, t = 0, o = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = n.O.view.addModelObserver(e, t, o);
                        return (
                            r > 0
                                ? ((this._callbacks[r] = u),
                                  t > 0 && (this._views[t] ? this._views[t].push(r) : (this._views[t] = [r])))
                                : console.error("Can't add callback for model:", e),
                            r
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
                o.__instance = void 0;
                const r = o;
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
                t.d(u, { Sw: () => r.Z, B3: () => i, Z5: () => s.Z5, B0: () => a, ry: () => C });
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
                const o = n;
                var r = t(358);
                var s = t(613);
                let a;
                !(function (e) {
                    (e[(e.UNDEFINED = 0)] = 'UNDEFINED'),
                        (e[(e.TOOLTIP = 1)] = 'TOOLTIP'),
                        (e[(e.POP_OVER = 2)] = 'POP_OVER'),
                        (e[(e.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                        (e[(e.DROP_DOWN = 8)] = 'DROP_DOWN'),
                        (e[(e.MOVE = 16)] = 'MOVE'),
                        (e[(e.CLOSE = 32)] = 'CLOSE'),
                        (e[(e.MINIMIZE = 64)] = 'MINIMIZE');
                })(a || (a = {}));
                const i = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    l = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    _ = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var E = t(521),
                    d = t(768);
                const F = ['args'];
                function A(e, u, t, n, o, r, s) {
                    try {
                        var a = e[r](s),
                            i = a.value;
                    } catch (e) {
                        return void t(e);
                    }
                    a.done ? u(i) : Promise.resolve(i).then(n, o);
                }
                const m = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    C = (function () {
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
                                    return new Promise(function (n, o) {
                                        var r = e.apply(u, t);
                                        function s(e) {
                                            A(r, n, o, s, a, 'next', e);
                                        }
                                        function a(e) {
                                            A(r, n, o, s, a, 'throw', e);
                                        }
                                        s(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    D = (e, u) => {
                        const t = 'GFViewEventProxy';
                        if (void 0 !== u) {
                            const o = u.args,
                                r = (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (u.indexOf(n) >= 0) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(u, F);
                            void 0 !== o
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: t, type: e }, r, {
                                          arguments:
                                              ((n = o),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: t, type: e }, r));
                        } else viewEnv.handleViewEvent({ __Type: t, type: e });
                        var n;
                    },
                    B = () => D(a.CLOSE),
                    p = (e, u) => {
                        e.keyCode === E.n.ESCAPE && u();
                    };
                var v = t(572);
                const g = o.instance,
                    f = {
                        DataTracker: r.Z,
                        ViewModel: v.Z,
                        ViewEventType: a,
                        NumberFormatType: i,
                        RealFormatType: c,
                        TimeFormatType: l,
                        DateFormatType: _,
                        makeGlobalBoundingBox: m,
                        sendMoveEvent: (e) => D(a.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: B,
                        sendClosePopOverEvent: () => D(a.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            D(a.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, o = R.invalid('resId'), r) => {
                            const s = d.O.view.getViewGlobalPosition(),
                                i = t.getBoundingClientRect(),
                                c = i.x,
                                l = i.y,
                                _ = i.width,
                                E = i.height,
                                F = {
                                    x: d.O.view.pxToRem(c) + s.x,
                                    y: d.O.view.pxToRem(l) + s.y,
                                    width: d.O.view.pxToRem(_),
                                    height: d.O.view.pxToRem(E),
                                };
                            D(a.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: n || R.invalid('resId'),
                                targetID: o,
                                direction: u,
                                bbox: m(F),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const u = (u) => p(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            p(e, B);
                        },
                        handleViewEvent: D,
                        onBindingsReady: C,
                        onLayoutReady: () =>
                            new Promise((e) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        e();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(a.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(a.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(a.POP_OVER),
                        dumpViewModel: function e(u) {
                            const t = {};
                            if ('object' != typeof u) return u;
                            for (const n in u)
                                if (Object.prototype.hasOwnProperty.call(u, n)) {
                                    const o = Object.prototype.toString.call(u[n]);
                                    if (o.startsWith('[object CoherentArrayProxy]')) {
                                        const o = u[n];
                                        t[n] = [];
                                        for (let u = 0; u < o.length; u++) t[n].push({ value: e(o[u].value) });
                                    } else
                                        o.startsWith('[object class BW::WULF::ViewModel')
                                            ? (t[n] = e(u[n]))
                                            : (t[n] = u[n]);
                                }
                            return t;
                        },
                        ClickOutsideManager: g,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
                    };
                window.ViewEnvHelper = f;
            },
            613: (e, u, t) => {
                t.d(u, { Z5: () => n, cy: () => o });
                const n = {
                        getNumberFormat: (e, u) => systemLocale.getNumberFormat(e, u),
                        getRealFormat: (e, u) => systemLocale.getRealFormat(e, u),
                        getTimeFormat: (e, u) => systemLocale.getTimeFormat(e, u),
                        getDateFormat: (e, u) => systemLocale.getDateFormat(e, u),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    o = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, u, t) => userLocale.getTimeFormat(e, u, void 0 === t || t),
                        getTimeString: (e, u, t) => userLocale.getTimeString(e, u, void 0 === t || t),
                    };
            },
            952: (e, u, t) => {
                var n = {};
                t.r(n),
                    t.d(n, {
                        Area: () => du,
                        Bar: () => lu,
                        DefaultScroll: () => Eu,
                        Direction: () => p,
                        defaultSettings: () => v,
                        useHorizontalScrollApi: () => Ze,
                    });
                var o = {};
                t.r(o), t.d(o, { Area: () => xu, Bar: () => wu, Default: () => Su, useVerticalScrollApi: () => f });
                var r = t(768),
                    s = t(179),
                    a = t.n(s),
                    i = t(493),
                    c = t.n(i),
                    l = t(483),
                    _ = t.n(l);
                const E = (e, u, t) => (t < e ? e : t > u ? u : t),
                    d = (e) => {
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
                    };
                function F(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (e) {
                                if ('string' == typeof e) return A(e, u);
                                var t = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === t && e.constructor && (t = e.constructor.name),
                                    'Map' === t || 'Set' === t
                                        ? Array.from(e)
                                        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                          ? A(e, u)
                                          : void 0
                                );
                            }
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
                function A(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                const m = [];
                function C(e) {
                    const u = (0, s.useRef)(e);
                    return (
                        (0, s.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, s.useCallback)((...e) => (0, u.current)(...e), m)
                    );
                }
                function D(e, u, t) {
                    const n = (0, s.useMemo)(
                        () =>
                            (function (e, u, t, n) {
                                let o,
                                    r = !1,
                                    s = 0;
                                function a() {
                                    o && clearTimeout(o);
                                }
                                function i(...i) {
                                    const c = this,
                                        l = Date.now() - s;
                                    function _() {
                                        (s = Date.now()), t.apply(c, i);
                                    }
                                    r ||
                                        (n && !o && _(),
                                        a(),
                                        void 0 === n && l > e
                                            ? _()
                                            : !0 !== u &&
                                              (o = setTimeout(
                                                  n
                                                      ? function () {
                                                            o = void 0;
                                                        }
                                                      : _,
                                                  void 0 === n ? e - l : e,
                                              )));
                                }
                                return (
                                    'boolean' != typeof u && ((n = t), (t = u), (u = void 0)),
                                    (i.cancel = function () {
                                        a(), (r = !0);
                                    }),
                                    i
                                );
                            })(t, e),
                        u,
                    );
                    return (0, s.useEffect)(() => n.cancel, [n]), n;
                }
                var B = t(30);
                let p;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(p || (p = {}));
                const v = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    g = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: n,
                        getWrapperSize: o,
                        triggerMouseMoveOnUpdate: a = !1,
                    }) => {
                        const i = (e, t) => {
                            const n = u(e),
                                o = n[0],
                                r = n[1];
                            return r <= o ? 0 : E(o, r, t);
                        };
                        return (c = {}) => {
                            const l = c.settings,
                                _ = void 0 === l ? v : l,
                                E = (0, s.useRef)(null),
                                A = (0, s.useRef)(null),
                                m = (() => {
                                    const e = (0, s.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        n = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        o = (e, ...t) => {
                                            for (var n, o = F(u(e).values()); !(n = o()).done; ) (0, n.value)(...t);
                                        };
                                    return (0, s.useMemo)(() => ({ on: t, off: n, trigger: o }), []);
                                })(),
                                p = D(
                                    () => {
                                        r.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                g = (0, B.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = E.current;
                                        u && (t(u, e), m.trigger('change', e), a && p());
                                    },
                                    onRest: (e) => m.trigger('rest', e),
                                    onStart: (e) => m.trigger('start', e),
                                    onPause: (e) => m.trigger('pause', e),
                                })),
                                f = g[0],
                                b = g[1],
                                h = (0, s.useCallback)(
                                    (e, u, t) => {
                                        var n;
                                        const o = f.scrollPosition.get(),
                                            r = (null != (n = f.scrollPosition.goal) ? n : 0) - o;
                                        return i(e, u * t + r + o);
                                    },
                                    [f.scrollPosition],
                                ),
                                y = (0, s.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const n = E.current;
                                        n &&
                                            b.start({
                                                scrollPosition: i(n, e),
                                                immediate: u,
                                                reset: t,
                                                config: _.animationConfig,
                                                from: { scrollPosition: i(n, f.scrollPosition.get()) },
                                            });
                                    },
                                    [b, _.animationConfig, f.scrollPosition],
                                ),
                                w = (0, s.useCallback)(
                                    (e) => {
                                        const u = E.current,
                                            t = A.current;
                                        if (!u || !t) return;
                                        const n = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return o(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, _.step),
                                            r = h(u, e, n);
                                        y(r);
                                    },
                                    [y, h, _.step],
                                ),
                                k = (0, s.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && w(n(e)),
                                            E.current && m.trigger('mouseWheel', e, f.scrollPosition, u(E.current));
                                    },
                                    [f.scrollPosition, w, m],
                                ),
                                S = ((e, u = []) => {
                                    const t = (0, s.useRef)(),
                                        n = (0, s.useCallback)((...u) => {
                                            t.current && t.current(), (t.current = e(...u));
                                        }, u);
                                    return (
                                        (0, s.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [n],
                                        ),
                                        n
                                    );
                                })(
                                    () =>
                                        d(() => {
                                            const e = E.current;
                                            e &&
                                                (y(i(e, f.scrollPosition.goal), { immediate: !0 }),
                                                m.trigger('resizeHandled'));
                                        }),
                                    [y, f.scrollPosition.goal],
                                ),
                                x = C(() => {
                                    const e = E.current;
                                    if (!e) return;
                                    const u = i(e, f.scrollPosition.goal);
                                    u !== f.scrollPosition.goal && y(u, { immediate: !0 }),
                                        m.trigger('recalculateContent');
                                });
                            (0, s.useEffect)(
                                () => (
                                    window.addEventListener('resize', S),
                                    () => {
                                        window.removeEventListener('resize', S);
                                    }
                                ),
                                [S],
                            );
                            return (0, s.useMemo)(
                                () => ({
                                    getWrapperSize: () => (A.current ? o(A.current) : void 0),
                                    getContainerSize: () => (E.current ? e(E.current) : void 0),
                                    getBounds: () =>
                                        E.current
                                            ? u(E.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: _.step.clampedArrowStepTimeout,
                                    clampPosition: i,
                                    handleMouseWheel: k,
                                    applyScroll: y,
                                    applyStepTo: w,
                                    contentRef: E,
                                    wrapperRef: A,
                                    scrollPosition: b,
                                    animationScroll: f,
                                    recalculateContent: x,
                                    events: { on: m.on, off: m.off },
                                }),
                                [f.scrollPosition, y, w, m.off, m.on, x, k, b, _.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    f = g({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? p.Next : p.Prev),
                    });
                var b = t(521),
                    h = t(916);
                const y = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function w(e = b.n.NONE, u = y, t = !1, n = !1) {
                    (0, s.useEffect)(() => {
                        if (e !== b.n.NONE)
                            return (
                                window.addEventListener('keydown', o, t),
                                () => {
                                    window.removeEventListener('keydown', o, t);
                                }
                            );
                        function o(o) {
                            if (o.keyCode === e) {
                                if (!n && r.O.view.isEventHandled()) return;
                                r.O.view.setEventHandled(), u(o), t && o.stopPropagation();
                            }
                        }
                    }, [u, e, t, n]);
                }
                const k = (e = 1) => {
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
                    S = (e, u) => e.split('.').reduce((e, u) => e && e[u], u),
                    x = (e) => {
                        const u = (0, s.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    N = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    P = (e, u) => (e.length > 0 ? `${e}.${u}` : u),
                    M = (e) =>
                        ((e, u) =>
                            e.split('.').reduce((e, t) => {
                                const n = S(`${e}.${t}`, window);
                                return N(n) ? u(e, t, n) : `${e}.${t}`;
                            }))(e, (e, u) => `${e}.${u}.value`),
                    T = (e) => {
                        const u = ((e) => {
                                const u = k(),
                                    t = u.caller,
                                    n = u.resId,
                                    o = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: o, modelPath: P(o, e || ''), resId: n };
                            })(),
                            t = u.modelPrefix,
                            n = e.split('.');
                        if (n.length > 0) {
                            const e = [n[0]];
                            return (
                                n.reduce((u, n) => {
                                    const o = S(P(t, `${u}.${n}`), window);
                                    return N(o) ? (e.push(o.id), `${u}.${n}.value`) : (e.push(n), `${u}.${n}`);
                                }),
                                e.reduce((e, u) => e + '.' + u)
                            );
                        }
                        return '';
                    },
                    O = h.Sw.instance;
                let L;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(L || (L = {}));
                const z = (e = 'model', u = L.Deep) => {
                    const t = (0, s.useState)(0),
                        n = (t[0], t[1]),
                        o = (0, s.useMemo)(() => k(), []),
                        r = o.caller,
                        a = o.resId,
                        i = (0, s.useMemo)(
                            () => (window.__feature && window.__feature !== r ? `subViews.${r}.${e}` : e),
                            [r, e],
                        ),
                        c = (0, s.useState)(() =>
                            ((e) => {
                                const u = S(e, window);
                                for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                return N(u) ? u.value : u;
                            })(M(i)),
                        ),
                        l = c[0],
                        _ = c[1],
                        E = (0, s.useRef)(-1);
                    return (
                        x(() => {
                            if (
                                ('boolean' == typeof u &&
                                    ((u = u ? L.Deep : L.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                u !== L.None)
                            ) {
                                const t = (e) => {
                                        ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                        u === L.Deep
                                            ? (e === l && n((e) => e + 1), _(e))
                                            : _(Object.assign([], e));
                                    },
                                    o = T(e);
                                E.current = O.addCallback(o, t, a, u === L.Deep);
                            }
                        }),
                        (0, s.useEffect)(() => {
                            if (u !== L.None)
                                return () => {
                                    O.removeCallback(E.current, a);
                                };
                        }, [a, u]),
                        l
                    );
                };
                function I() {}
                console.log;
                function H(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                const V = {
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
                    W = [
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
                function U() {
                    return (
                        (U = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        U.apply(null, arguments)
                    );
                }
                class $ extends a().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && H(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && H(this.props.soundClick);
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
                            o = e.side,
                            r = e.type,
                            s = e.classNames,
                            i = e.onMouseEnter,
                            c = e.onMouseLeave,
                            l = e.onMouseDown,
                            E = e.onMouseUp,
                            d =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, u) {
                                    if (null == e) return {};
                                    var t = {};
                                    for (var n in e)
                                        if ({}.hasOwnProperty.call(e, n)) {
                                            if (u.indexOf(n) >= 0) continue;
                                            t[n] = e[n];
                                        }
                                    return t;
                                })(e, W)),
                            F = _()(V.base, V[`base__${r}`], V[`base__${o}`], null == s ? void 0 : s.base),
                            A = _()(V.icon, V[`icon__${r}`], V[`icon__${o}`], null == s ? void 0 : s.icon),
                            m = _()(V.glow, null == s ? void 0 : s.glow),
                            C = _()(V.caption, V[`caption__${r}`], null == s ? void 0 : s.caption),
                            D = _()(V.goto, null == s ? void 0 : s.goto);
                        return a().createElement(
                            'div',
                            U(
                                {
                                    className: F,
                                    onMouseEnter: this._onMouseEnter(i),
                                    onMouseLeave: this._onMouseLeave(c),
                                    onMouseDown: this._onMouseDown(l),
                                    onMouseUp: this._onMouseUp(E),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                d,
                            ),
                            'info' !== r && a().createElement('div', { className: V.shine }),
                            a().createElement('div', { className: A }, a().createElement('div', { className: m })),
                            a().createElement('div', { className: C }, u),
                            n && a().createElement('div', { className: D }, n),
                        );
                    }
                }
                $.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const q = 'BackButton_base_a6',
                    j = 'BackButton_base__left_75',
                    G = 'BackButton_base__right_db',
                    X = ({ onClick: e }) => {
                        if (z('model.style', L.None).isProlongStyleRent) {
                            const u = _()(q, G);
                            return a().createElement(
                                'div',
                                { className: u },
                                a().createElement($, {
                                    caption: R.strings.menu.viewHeader.closeBtn.label(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: e,
                                }),
                            );
                        }
                        const u = _()(q, j);
                        return a().createElement(
                            'div',
                            { className: u },
                            a().createElement($, { caption: R.strings.menu.viewHeader.backBtn.label(), onClick: e }),
                        );
                    },
                    K = {
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
                let Y, Z;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(Y || (Y = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(Z || (Z = {}));
                const Q = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: n,
                    disabled: o,
                    mixClass: r,
                    soundHover: i,
                    soundClick: c,
                    onMouseEnter: l,
                    onMouseMove: E,
                    onMouseDown: d,
                    onMouseUp: F,
                    onMouseLeave: A,
                    onClick: m,
                }) => {
                    const C = (0, s.useRef)(null),
                        D = (0, s.useState)(t),
                        B = D[0],
                        p = D[1],
                        v = (0, s.useState)(!1),
                        g = v[0],
                        f = v[1];
                    return (
                        (0, s.useEffect)(() => {
                            function e(e) {
                                B && null !== C.current && !C.current.contains(e.target) && p(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [B]),
                        (0, s.useEffect)(() => {
                            p(t);
                        }, [t]),
                        a().createElement(
                            'div',
                            {
                                ref: C,
                                className: _()(
                                    K.base,
                                    K[`base__${n}`],
                                    o && K.base__disabled,
                                    u && K[`base__${u}`],
                                    B && K.base__focus,
                                    g && K.base__highlightActive,
                                    r,
                                ),
                                onMouseEnter: function (e) {
                                    o || (null !== i && H(i), l && l(e));
                                },
                                onMouseMove: function (e) {
                                    E && E(e);
                                },
                                onMouseUp: function (e) {
                                    o || (F && F(e), f(!1));
                                },
                                onMouseDown: function (e) {
                                    o ||
                                        (null !== c && H(c),
                                        d && d(e),
                                        t && (o || (C.current && (C.current.focus(), p(!0)))),
                                        f(!0));
                                },
                                onMouseLeave: function (e) {
                                    o || (A && A(e), f(!1));
                                },
                                onClick: function (e) {
                                    o || (m && m(e));
                                },
                            },
                            n !== Y.ghost &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: K.back }),
                                    a().createElement('span', { className: K.texture }),
                                ),
                            a().createElement(
                                'span',
                                { className: _()(K.state, K.state__default) },
                                a().createElement('span', { className: K.stateDisabled }),
                                a().createElement('span', { className: K.stateHighlightHover }),
                                a().createElement('span', { className: K.stateHighlightActive }),
                            ),
                            a().createElement(
                                'span',
                                { className: K.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                Q.defaultProps = { type: Y.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const J = Q;
                let ee, ue, te, ne;
                !(function (e) {
                    (e[(e.LEFT = 0)] = 'LEFT'),
                        (e[(e.WHEEL = 1)] = 'WHEEL'),
                        (e[(e.RIGHT = 2)] = 'RIGHT'),
                        (e[(e.FOURTH = 3)] = 'FOURTH'),
                        (e[(e.FIFTH = 4)] = 'FIFTH');
                })(ee || (ee = {})),
                    (function (e) {
                        (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                    })(ue || (ue = {})),
                    (function (e) {
                        (e.primary = 'primary'), (e.main = 'main');
                    })(te || (te = {})),
                    (function (e) {
                        (e.Center = 'center'), (e.Bottom = 'bottom');
                    })(ne || (ne = {}));
                const oe = {
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
                    re = [
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
                function se() {
                    return (
                        (se = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        se.apply(null, arguments)
                    );
                }
                const ae = (e) => {
                    let u = e.id,
                        t = e.isChecked,
                        n = void 0 !== t && t,
                        o = e.isDisabled,
                        r = void 0 !== o && o,
                        i = e.isAlert,
                        c = void 0 !== i && i,
                        l = e.size,
                        E = void 0 === l ? ue.medium : l,
                        d = e.type,
                        F = void 0 === d ? te.primary : d,
                        A = e.soundHover,
                        m = void 0 === A ? 'highlight' : A,
                        C = e.soundClick,
                        D = void 0 === C ? 'play' : C,
                        B = e.onMouseEnter,
                        p = e.onMouseLeave,
                        v = e.onMouseUp,
                        g = e.onMouseDown,
                        f = e.onClick,
                        b = e.onChange,
                        h = e.onFocus,
                        y = e.onBlur,
                        w = e.text,
                        k = e.contentStyles,
                        S = e.children,
                        x = e.alignment,
                        N = (function (e, u) {
                            if (null == e) return {};
                            var t = {};
                            for (var n in e)
                                if ({}.hasOwnProperty.call(e, n)) {
                                    if (u.indexOf(n) >= 0) continue;
                                    t[n] = e[n];
                                }
                            return t;
                        })(e, re);
                    const P = (0, s.useState)(!1),
                        M = P[0],
                        T = P[1],
                        O = (0, s.useState)(!1),
                        R = (O[0], O[1]),
                        L = (0, s.useCallback)(
                            (e) => {
                                r || (b && b(), f && f(e));
                            },
                            [r, b, f],
                        ),
                        z = (0, s.useCallback)(
                            (e) => {
                                const u = e.button === ee.LEFT;
                                r || (u && T(!0), u && g && g(e), D && H(D));
                            },
                            [r, g, D],
                        ),
                        I = (0, s.useCallback)(
                            (e) => {
                                r || (T(!1), v && v(e));
                            },
                            [r, v],
                        ),
                        V = (0, s.useCallback)(
                            (e) => {
                                r || (B && B(e), m && H(m));
                            },
                            [r, B, m],
                        ),
                        W = (0, s.useCallback)(
                            (e) => {
                                r || (T(!1), p && p(e));
                            },
                            [r, p],
                        ),
                        U = (0, s.useCallback)(
                            (e) => {
                                r || (R(!0), h && h(e));
                            },
                            [r, h],
                        ),
                        $ = (0, s.useCallback)(
                            (e) => {
                                r || (R(!1), y && y(e));
                            },
                            [r, y],
                        ),
                        q = a().createElement(
                            'div',
                            { className: oe.label },
                            a().createElement(
                                'div',
                                { className: _()(oe.labelContent, 's-labelContent'), style: k },
                                w || S,
                            ),
                        );
                    return a().createElement(
                        'div',
                        se(
                            {
                                id: u,
                                className: _()(oe.base, oe[`base__${E}`], oe[`base__${F}`], {
                                    [oe.base__checked]: n,
                                    [oe.base__disabled]: r,
                                    [oe.base__mouseDown]: M,
                                    [oe.base__alert]: c,
                                    [oe.base__center]: x === ne.Center,
                                    [oe.base__bottom]: x === ne.Bottom,
                                }),
                                onClick: L,
                                onMouseEnter: V,
                                onMouseLeave: W,
                                onMouseDown: z,
                                onMouseUp: I,
                                onFocus: U,
                                onBlur: $,
                            },
                            N,
                        ),
                        a().createElement(
                            'div',
                            { className: oe.input },
                            a().createElement('div', { className: oe.alertOverlay }),
                            a().createElement('div', { className: oe.inputHoverOverlay }),
                            a().createElement('div', { className: oe.highlight }),
                        ),
                        a().createElement('div', { className: oe.checkmark }),
                        ((w || S) && q) || null,
                    );
                };
                class ie extends a().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = h.B3.GOLD;
                        else e = h.B3.INTEGRAL;
                        const u = h.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== u ? u : null;
                    }
                }
                ie.defaultProps = { format: 'integral' };
                const ce = {
                    base: 'Currency_base_57',
                    icon: 'Currency_icon_c5',
                    base__small: 'Currency_base__small_af',
                    base__big: 'Currency_base__big_bc',
                    base__large: 'Currency_base__large_65',
                    base__extraLarge: 'Currency_base__extraLarge_4d',
                    'icon__credits-small': 'Currency_icon__credits-small_9b',
                    'icon__credits-big': 'Currency_icon__credits-big_96',
                    'icon__credits-large': 'Currency_icon__credits-large_ac',
                    'icon__credits-extraLarge': 'Currency_icon__credits-extraLarge_16',
                    'icon__gold-small': 'Currency_icon__gold-small_86',
                    'icon__gold-big': 'Currency_icon__gold-big_15',
                    'icon__gold-large': 'Currency_icon__gold-large_36',
                    'icon__gold-extraLarge': 'Currency_icon__gold-extraLarge_a0',
                    'icon__crystal-small': 'Currency_icon__crystal-small_27',
                    'icon__crystal-big': 'Currency_icon__crystal-big_cd',
                    'icon__crystal-large': 'Currency_icon__crystal-large_d3',
                    'icon__crystal-extraLarge': 'Currency_icon__crystal-extraLarge_09',
                    'icon__xp-small': 'Currency_icon__xp-small_a7',
                    'icon__xp-big': 'Currency_icon__xp-big_97',
                    'icon__xp-large': 'Currency_icon__xp-large_6b',
                    'icon__xp-extraLarge': 'Currency_icon__xp-extraLarge_67',
                    'icon__freeXP-small': 'Currency_icon__freeXP-small_ca',
                    'icon__freeXP-big': 'Currency_icon__freeXP-big_21',
                    'icon__freeXP-large': 'Currency_icon__freeXP-large_c8',
                    'icon__freeXP-extraLarge': 'Currency_icon__freeXP-extraLarge_58',
                    'icon__eliteXP-small': 'Currency_icon__eliteXP-small_45',
                    'icon__eliteXP-big': 'Currency_icon__eliteXP-big_c0',
                    'icon__eliteXP-large': 'Currency_icon__eliteXP-large_1b',
                    'icon__eliteXP-extraLarge': 'Currency_icon__eliteXP-extraLarge_9b',
                    'icon__equipCoin-small': 'Currency_icon__equipCoin-small_32',
                    'icon__equipCoin-big': 'Currency_icon__equipCoin-big_79',
                    'icon__equipCoin-large': 'Currency_icon__equipCoin-large_2c',
                    'icon__equipCoin-extraLarge': 'Currency_icon__equipCoin-extraLarge_8a',
                    value: 'Currency_value_e1',
                    value__freeXP: 'Currency_value__freeXP_cb',
                    value__credits: 'Currency_value__credits_76',
                    value__gold: 'Currency_value__gold_dd',
                    value__xp: 'Currency_value__xp_b0',
                    value__crystal: 'Currency_value__crystal_19',
                    value__equipCoin: 'Currency_value__equipCoin_d0',
                    value__eliteXP: 'Currency_value__eliteXP_62',
                    value__notEnough: 'Currency_value__notEnough_56',
                    stock: 'Currency_stock_87',
                    stock__indent: 'Currency_stock__indent_a1',
                    stock__interactive: 'Currency_stock__interactive_93',
                    stockBackground: 'Currency_stockBackground_82',
                };
                let le, _e, Ee;
                !(function (e) {
                    (e.small = 'small'), (e.big = 'big'), (e.large = 'large'), (e.extraLarge = 'extraLarge');
                })(le || (le = {})),
                    (function (e) {
                        (e.credits = 'credits'),
                            (e.gold = 'gold'),
                            (e.crystal = 'crystal'),
                            (e.xp = 'xp'),
                            (e.freeXP = 'freeXP'),
                            (e.eliteXP = 'eliteXP'),
                            (e.equipCoin = 'equipCoin');
                    })(_e || (_e = {})),
                    (function (e) {
                        (e.Red = 'RedActionBG'), (e.Blue = 'BlueActionBG');
                    })(Ee || (Ee = {}));
                const de = (0, s.memo)(
                        ({
                            isDiscount: e,
                            isInteractiveDiscount: u,
                            size: t,
                            type: n,
                            value: o,
                            discountValue: r,
                            showPlus: s,
                            isEnough: i = !0,
                            stockBackgroundName: c = Ee.Red,
                            className: l,
                            classNames: E,
                        }) =>
                            a().createElement(
                                'span',
                                { className: _()(ce.base, ce[`base__${t}`], l) },
                                a().createElement(
                                    'span',
                                    {
                                        className: _()(
                                            ce.value,
                                            ce[`value__${n}`],
                                            !i && ce.value__notEnough,
                                            null == E ? void 0 : E.value,
                                        ),
                                    },
                                    s && o > 0 && '+',
                                    a().createElement(ie, { value: o, format: n === _e.gold ? 'gold' : 'integral' }),
                                ),
                                a().createElement('span', {
                                    className: _()(ce.icon, ce[`icon__${n}-${t}`], null == E ? void 0 : E.icon),
                                }),
                                e &&
                                    a().createElement(
                                        'span',
                                        {
                                            className: _()(
                                                ce.stock,
                                                r && ce.stock__indent,
                                                u && ce.stock__interactive,
                                                null == E ? void 0 : E.stock,
                                            ),
                                        },
                                        a().createElement('span', {
                                            className: ce.stockBackground,
                                            style: { backgroundImage: `url(R.images.gui.maps.icons.library.${c})` },
                                        }),
                                        Boolean(r) && r,
                                    ),
                            ),
                    ),
                    Fe = [
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
                function Ae(e) {
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
                const me = (e, u, t = {}, n = 0) => {
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
                    Ce = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            n = e.args,
                            o = e.onMouseEnter,
                            r = e.onMouseLeave,
                            a = e.onMouseDown,
                            i = e.onClick,
                            c = e.ignoreShowDelay,
                            l = void 0 !== c && c,
                            _ = e.ignoreMouseClick,
                            E = void 0 !== _ && _,
                            d = e.decoratorId,
                            F = void 0 === d ? 0 : d,
                            A = e.isEnabled,
                            m = void 0 === A || A,
                            C = e.targetId,
                            D = void 0 === C ? 0 : C,
                            B = e.onShow,
                            p = e.onHide,
                            v = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, Fe);
                        const g = (0, s.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            f = (0, s.useMemo)(() => D || k().resId, [D]),
                            b = (0, s.useCallback)(() => {
                                (g.current.isVisible && g.current.timeoutId) ||
                                    (me(t, F, { isMouseEvent: !0, on: !0, arguments: Ae(n) }, f),
                                    B && B(),
                                    (g.current.isVisible = !0));
                            }, [t, F, n, f, B]),
                            h = (0, s.useCallback)(() => {
                                if (g.current.isVisible || g.current.timeoutId) {
                                    const e = g.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (g.current.timeoutId = 0)),
                                        me(t, F, { on: !1 }, f),
                                        g.current.isVisible && p && p(),
                                        (g.current.isVisible = !1);
                                }
                            }, [t, F, f, p]),
                            y = (0, s.useCallback)((e) => {
                                g.current.isVisible &&
                                    ((g.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (g.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(g.current.prevTarget) && h();
                                    }, 200)));
                            }, []);
                        (0, s.useEffect)(() => {
                            const e = g.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', y, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', y, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, s.useEffect)(() => {
                                !1 === m && h();
                            }, [m, h]),
                            (0, s.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', h),
                                    () => {
                                        window.removeEventListener('mouseleave', h), h();
                                    }
                                ),
                                [h],
                            );
                        return m
                            ? (0, s.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((w = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((g.current.timeoutId = window.setTimeout(b, l ? 100 : 400)),
                                                      o && o(e),
                                                      w && w(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              h(), null == r || r(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === E && h(), null == i || i(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === E && h(), null == a || a(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      v,
                                  ),
                              )
                            : u;
                        var w;
                    },
                    De = ['children'];
                function Be() {
                    return (
                        (Be = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Be.apply(null, arguments)
                    );
                }
                const pe = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t = {};
                                for (var n in e)
                                    if ({}.hasOwnProperty.call(e, n)) {
                                        if (u.indexOf(n) >= 0) continue;
                                        t[n] = e[n];
                                    }
                                return t;
                            })(e, De);
                        return a().createElement(
                            Ce,
                            Be(
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
                    },
                    ve = 'Tutorial_tutorial_ce',
                    ge = 'Tutorial_tutorial_border_ab',
                    fe = 'Tutorial_tutorial__hidden_8a',
                    be = 'Tutorial_tutorial_hint_bc',
                    he = 'Tutorial_tutorial_hintSubstrate_c7',
                    ye = 'Tutorial_tutorial_hintArrow_75',
                    we = 'Tutorial_tutorial_hintText_b5';
                class ke extends a().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.onClick = () => {
                                !this.props.isHidden && this.props.onClick && this.props.onClick();
                            });
                    }
                    componentDidMount() {
                        this.handlerID = document.addEventListener('click', () => {
                            this.props.onCancel && this.props.onCancel();
                        });
                    }
                    componentWillUnmount() {
                        document.removeEventListener('click', this.handlerID);
                    }
                    render() {
                        const e = _()(ve, { [fe]: this.props.isHidden });
                        return a().createElement(
                            'div',
                            { className: e, onClick: this.onClick },
                            a().createElement('div', { className: ge }),
                            a().createElement(
                                'div',
                                { className: be },
                                a().createElement('div', { className: he }),
                                a().createElement('div', { className: ye }),
                                a().createElement('div', { className: we }, this.props.text),
                            ),
                        );
                    }
                }
                const Se = 'gold';
                class xe {
                    constructor(e = null) {
                        (this._prices = []), null !== e && null !== e.prices && (this._prices = e.prices);
                    }
                    get length() {
                        return null !== this._prices ? this._prices.length : 0;
                    }
                    isEmpty(e = 0) {
                        return 0 === this.getValue(e);
                    }
                    hasDiscount(e = 0) {
                        return this.getDiscountValue(e) > 0;
                    }
                    getType(e = 0) {
                        const u = this._prices[e];
                        return u ? this._getPriceItemType(u.value.price) : '';
                    }
                    getValue(e = 0) {
                        const u = this._prices[e];
                        return u ? this._getPriceItemValue(u.value.price) : 0;
                    }
                    getDefValue(e = 0) {
                        const u = this._prices[e];
                        return u ? this._getPriceItemValue(u.value.defPrice) : 0;
                    }
                    getDiscountValue(e = 0) {
                        const u = this._prices[e];
                        return u ? this._getPriceItemValue(u.value.discount) : 0;
                    }
                    _getPriceItemType(e) {
                        let u = '';
                        return e.some((e) => ((u = e.value.name), e.value.value > 0)) ? u : '';
                    }
                    _getPriceItemValue(e) {
                        let u = 0;
                        return e.some((e) => ((u = e.value.value), u > 0)) ? u : 0;
                    }
                }
                t(281);
                let Ne;
                function Pe(e, u) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const t = 0 === e.indexOf('%') ? 2 : 1;
                        return String(u[e.slice(t, -t)]);
                    });
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(Ne || (Ne = {}));
                (() => {
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
                })();
                const Me = 'Footer_base_0d',
                    Te = 'Footer_content_fd',
                    Oe = 'Footer_button_7d',
                    Re = 'Footer_price_29',
                    Le = 'Footer_price__stock_fd',
                    ze = 'Footer_fights_5e',
                    Ie = 'Footer_extension_2b',
                    He = 'Footer_cButton_b6',
                    Ve = 'Footer_footnote_21',
                    We = 'Footer_footnote_icon_e4',
                    Ue = ({ className: e }) => {
                        const u = (0, s.useState)(!1),
                            t = u[0],
                            n = u[1],
                            o = (0, s.useState)(R.strings.vehicle_customization.window.purchase.btnBuy()),
                            r = o[0],
                            i = o[1],
                            c = z().isAnySelected,
                            l = z('model.style').isEditable,
                            E = z('model.tutorial'),
                            d = E.onTutorialClose,
                            F = E.showProlongHint,
                            A = z('model.purchase.totalPrice'),
                            m = (0, s.useMemo)(() => new xe(A), [A]),
                            C = z('model.purchase'),
                            D = C.onBuyAction,
                            B = C.purchasedCount,
                            p = C.isEnoughMoney,
                            v = C.isShopEnabled,
                            g = z('model.rent'),
                            f = g.hasAutoRent,
                            b = g.isAutoRentSelected,
                            h = g.isRentable,
                            y = g.rentCount,
                            w = g.onSelectAutoRent;
                        (0, s.useEffect)(() => {
                            if (c) {
                                const e = B > 0 ? 'btnBuy' : 'btnApply';
                                i(R.strings.vehicle_customization.window.purchase[e]());
                            }
                        }, [c, B]);
                        const k = (0, s.useCallback)(() => {
                                D();
                            }, [D]),
                            S = (0, s.useMemo)(
                                () => Pe(R.strings.vehicle_customization.carousel.rentalBattles(), { battlesNum: y }),
                                [y],
                            ),
                            x = m.getType() === Se ? Se : 'credits';
                        let N = p;
                        x === Se && (N = p || v);
                        const P = N && c;
                        let M = '';
                        P ||
                            (M = c
                                ? R.strings.vehicle_customization.customization.buyDisabled.body()
                                : R.strings.vehicle_customization.customization.notSelectedItems());
                        const T = R.views.common.tooltip_window.simple_tooltip_content.SimpleTooltipContent('resId'),
                            O = R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                            L = m.getValue() > 0,
                            I = m.hasDiscount(),
                            H = m.getValue(),
                            V = m.getDefValue(),
                            W = R.strings.vehicle_customization.window.purchase.autoProlongationLabel(),
                            U = R.strings.vehicle_customization.window.purchase.changedItemsLabel(),
                            $ = R.strings.tutorial.customization.autoprolongation(),
                            q = _()(Re, I && Le),
                            j = _()(Me, e),
                            G = (0, s.useMemo)(
                                () => ({ tooltip: 'priceDiscount', price: H, defPrice: V, currencyType: x }),
                                [V, H, x],
                            ),
                            X = (0, s.useMemo)(() => ({ body: M }), [M]);
                        return a().createElement(
                            'div',
                            { className: j },
                            a().createElement(
                                'div',
                                { className: Te },
                                l &&
                                    a().createElement(
                                        'div',
                                        { className: Ve },
                                        a().createElement('span', { className: We }),
                                        U,
                                    ),
                                f &&
                                    a().createElement(
                                        'div',
                                        { className: Ie },
                                        F && a().createElement(ke, { text: $, isHidden: t }),
                                        a().createElement(ae, {
                                            isChecked: b,
                                            size: 'medium',
                                            text: W,
                                            type: 'primary',
                                            soundHover: 'highlight',
                                            soundClick: 'play',
                                            onChange: () => {
                                                F && (n(!0), d && d()), w({ selected: !b });
                                            },
                                        }),
                                    ),
                                h && a().createElement('div', { className: ze }, S),
                                L &&
                                    a().createElement(
                                        'div',
                                        { className: q },
                                        a().createElement(
                                            pe,
                                            { args: G, isEnabled: I },
                                            a().createElement(
                                                'div',
                                                null,
                                                a().createElement(de, {
                                                    isDiscount: I,
                                                    isInteractiveDiscount: !0,
                                                    size: 'big',
                                                    type: x,
                                                    value: H,
                                                    isEnough: N,
                                                }),
                                            ),
                                        ),
                                    ),
                                a().createElement(
                                    'div',
                                    { className: Oe },
                                    a().createElement(
                                        Ce,
                                        { contentId: T, decoratorId: O, isEnabled: '' !== M, args: X },
                                        a().createElement(
                                            'div',
                                            null,
                                            a().createElement(
                                                J,
                                                {
                                                    type: Y.main,
                                                    size: Z.medium,
                                                    mixClass: He,
                                                    disabled: !P,
                                                    onClick: k,
                                                },
                                                r,
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    },
                    $e = 'Header_base_fa',
                    qe = 'Header_bg_d4',
                    je = 'Header_title_a1',
                    Ge = 'Header_itemsTitle_06',
                    Xe = 'Header_extraTitle_54',
                    Ke = ({ className: e }) => {
                        const u = z('model.style', L.None),
                            t = (({ isStyle: e, styleTypeName: u, styleName: t }) => {
                                if (e) {
                                    const e = Pe(
                                        R.strings.vehicle_customization.customization.infotype.type.style.multiline(),
                                        { group: u, value: t },
                                    ).split('\n');
                                    return { title: e[0], extraTitle: e[1] };
                                }
                                return { title: null, extraTitle: null };
                            })({ isStyle: u.isStyle, styleName: u.styleName, styleTypeName: u.styleTypeName }),
                            n = t.title,
                            o = t.extraTitle,
                            r = _()($e, e);
                        if (!n) {
                            const e = R.strings.vehicle_customization.customization.buyWindow.title();
                            return a().createElement(
                                'div',
                                { className: r },
                                a().createElement('span', { className: Ge }, e),
                            );
                        }
                        return a().createElement(
                            'div',
                            { className: r },
                            a().createElement('div', { className: qe }),
                            a().createElement('span', { className: je }, n),
                            o && a().createElement('span', { className: Xe }, o),
                        );
                    };
                function Ye(e, u, t = []) {
                    const n = (0, s.useRef)(0),
                        o = (0, s.useCallback)(() => window.clearInterval(n.current), t || []);
                    (0, s.useEffect)(() => o, [o]);
                    const r = (null != t ? t : []).concat([u]);
                    return [
                        (0, s.useCallback)((t) => {
                            (n.current = window.setInterval(() => e(t, !0), u)), e(t, !1);
                        }, r),
                        o,
                    ];
                }
                const Ze = g({
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
                        getDirection: (e) => (e.deltaY > 1 ? p.Next : p.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    Qe = 'HorizontalBar_base_49',
                    Je = 'HorizontalBar_base__nonActive_82',
                    eu = 'HorizontalBar_leftButton_5f',
                    uu = 'HorizontalBar_rightButton_03',
                    tu = 'HorizontalBar_track_0d',
                    nu = 'HorizontalBar_thumb_fd',
                    ou = 'HorizontalBar_rail_32',
                    ru = 'disable',
                    su = { pending: !1, offset: 0 },
                    au = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    iu = () => {},
                    cu = (e, u) => Math.max(20, e.offsetWidth * u),
                    lu = (0, s.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = au, onDrag: n = iu }) => {
                        const o = (0, s.useRef)(null),
                            i = (0, s.useRef)(null),
                            c = (0, s.useRef)(null),
                            l = (0, s.useRef)(null),
                            F = (0, s.useRef)(null),
                            A = e.stepTimeout || 100,
                            m = (0, s.useState)(su),
                            D = m[0],
                            B = m[1],
                            v = (0, s.useCallback)(
                                (e) => {
                                    B(e),
                                        F.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: F.current });
                                },
                                [n],
                            ),
                            g = () => {
                                const u = l.current,
                                    t = F.current,
                                    n = e.getWrapperSize(),
                                    o = e.getContainerSize();
                                if (!(n && u && t && o)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / o),
                                    a = E(0, 1, r / (o - n)),
                                    _ = (u.offsetWidth - cu(u, s)) * a;
                                (t.style.transform = `translateX(${0 | _}px)`),
                                    ((e) => {
                                        if (i.current && c.current && l.current && F.current) {
                                            if (0 === e)
                                                return i.current.classList.add(ru), void c.current.classList.remove(ru);
                                            if (
                                                ((u = l.current),
                                                (t = F.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return i.current.classList.remove(ru), void c.current.classList.add(ru);
                                            var u, t;
                                            i.current.classList.remove(ru), c.current.classList.remove(ru);
                                        }
                                    })(_);
                            },
                            f = C(() => {
                                (() => {
                                    const u = F.current,
                                        t = l.current,
                                        n = e.getWrapperSize(),
                                        r = e.getContainerSize();
                                    if (!(r && u && n && t)) return;
                                    const s = Math.min(1, n / r);
                                    (u.style.width = `${cu(t, s)}px`),
                                        (u.style.display = 'flex'),
                                        o.current &&
                                            (1 === s ? o.current.classList.add(Je) : o.current.classList.remove(Je));
                                })(),
                                    g();
                            });
                        (0, s.useEffect)(() => d(f)),
                            (0, s.useEffect)(
                                () =>
                                    d(() => {
                                        const u = () => {
                                            g();
                                        };
                                        let t = iu;
                                        const n = () => {
                                            t(), (t = d(f));
                                        };
                                        return (
                                            e.events.on('recalculateContent', f),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                t(),
                                                    e.events.off('recalculateContent', f),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', n);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, s.useEffect)(() => {
                                if (!D.pending) return;
                                const u = r.O.client.events.mouse.move(([u, t]) => {
                                        var o;
                                        const r = e.contentRef.current,
                                            s = e.wrapperRef.current;
                                        if (!r || !s) return;
                                        const a = l.current,
                                            i = F.current;
                                        if (!a || !i) return;
                                        if ('inside' === t && u.clientX < 0) return;
                                        const c = u.clientX - D.offset - a.getBoundingClientRect().x,
                                            _ = (c / a.offsetWidth) * (null != (o = e.getContainerSize()) ? o : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(r, _),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: i, thumbOffset: c, contentOffset: _ });
                                    }),
                                    t = r.O.client.events.mouse.up(() => {
                                        u(), v(su);
                                    });
                                return () => {
                                    u(), t();
                                };
                            }, [e, D.offset, D.pending, n, v]);
                        const b = Ye((u) => e.applyStepTo(u), A, [e]),
                            h = b[0],
                            y = b[1];
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mouseup', y, !0),
                                () => document.removeEventListener('mouseup', y, !0)
                            ),
                            [y],
                        );
                        const w = (e) => {
                            e.target.classList.contains(ru) || H('highlight');
                        };
                        return a().createElement(
                            'div',
                            { className: _()(Qe, u.base), ref: o, onWheel: e.handleMouseWheel },
                            a().createElement('div', {
                                className: _()(eu, u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ru) || 0 !== e.button || (H('play'), h(p.Next));
                                },
                                onMouseUp: y,
                                ref: i,
                                onMouseEnter: w,
                            }),
                            a().createElement(
                                'div',
                                {
                                    className: _()(tu, u.track),
                                    onMouseDown: (u) => {
                                        const n = F.current;
                                        if (n && 0 === u.button)
                                            if ((H('play'), u.target === n))
                                                v({ pending: !0, offset: u.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((u) => {
                                                    const n = F.current,
                                                        o = e.contentRef.current;
                                                    if (!n || !o) return;
                                                    const r = t(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + r * u);
                                                })(u.screenX > n.getBoundingClientRect().x ? p.Prev : p.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: w,
                                },
                                a().createElement('div', { ref: F, className: _()(nu, u.thumb) }),
                                a().createElement('div', { className: _()(ou, u.rail) }),
                            ),
                            a().createElement('div', {
                                className: _()(uu, u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ru) || 0 !== e.button || (H('play'), h(p.Prev));
                                },
                                onMouseUp: y,
                                ref: c,
                                onMouseEnter: w,
                            }),
                        );
                    }),
                    _u = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    Eu = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: o,
                        classNames: r,
                        scrollClassName: i,
                        getStepByRailClick: c,
                        onDrag: l,
                    }) => {
                        const E = (0, s.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: _()(_u.base, e.base) });
                            }, [n]),
                            d = (0, s.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return a().createElement(
                            'div',
                            { className: _()(_u.defaultScroll, t), onWheel: u.handleMouseWheel },
                            a().createElement(
                                'div',
                                { className: _()(_u.defaultScrollArea, o) },
                                a().createElement(du, { className: i, api: d, classNames: r }, e),
                            ),
                            a().createElement(lu, { getStepByRailClick: c, api: u, onDrag: l, classNames: E }),
                        );
                    },
                    du = ({ api: e, className: u, classNames: t, children: n }) => (
                        (0, s.useEffect)(() => d(e.recalculateContent)),
                        a().createElement(
                            'div',
                            { className: _()(_u.base, u) },
                            a().createElement(
                                'div',
                                {
                                    className: _()(_u.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                a().createElement(
                                    'div',
                                    { className: _()(_u.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                (du.Bar = lu), (du.Default = Eu);
                const Fu = 'VerticalBar_base_f3',
                    Au = 'VerticalBar_base__nonActive_42',
                    mu = 'VerticalBar_topButton_d7',
                    Cu = 'VerticalBar_bottomButton_06',
                    Du = 'VerticalBar_track_df',
                    Bu = 'VerticalBar_thumb_32',
                    pu = 'VerticalBar_rail_43',
                    vu = 'disable',
                    gu = () => {},
                    fu = { pending: !1, offset: 0 },
                    bu = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    hu = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    yu = (e, u) => Math.max(20, e.offsetHeight * u),
                    wu = (0, s.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = bu, onDrag: n = gu }) => {
                        const o = (0, s.useRef)(null),
                            i = (0, s.useRef)(null),
                            c = (0, s.useRef)(null),
                            l = (0, s.useRef)(null),
                            F = (0, s.useRef)(null),
                            A = e.stepTimeout || 100,
                            m = (0, s.useState)(fu),
                            D = m[0],
                            B = m[1],
                            v = (0, s.useCallback)(
                                (e) => {
                                    B(e),
                                        F.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: F.current });
                                },
                                [n],
                            ),
                            g = C(() => {
                                const u = F.current,
                                    t = l.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && r && u && t)) return;
                                const s = Math.min(1, n / r);
                                return (
                                    (u.style.height = `${yu(t, s)}px`),
                                    (u.style.display = 'flex'),
                                    o.current &&
                                        (1 === s ? o.current.classList.add(Au) : o.current.classList.remove(Au)),
                                    s
                                );
                            }),
                            f = C(() => {
                                const u = l.current,
                                    t = F.current,
                                    n = e.getWrapperSize(),
                                    o = e.getContainerSize();
                                if (!(n && u && t && o)) return;
                                const r = e.animationScroll.scrollPosition.get(),
                                    s = Math.min(1, n / o),
                                    a = E(0, 1, r / (o - n)),
                                    _ = (u.offsetHeight - yu(u, s)) * a;
                                (t.style.transform = `translateY(${0 | _}px)`),
                                    ((e) => {
                                        if (i.current && c.current && l.current && F.current) {
                                            if (0 === Math.round(e))
                                                return i.current.classList.add(vu), void c.current.classList.remove(vu);
                                            if (
                                                ((u = l.current),
                                                (t = F.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return i.current.classList.remove(vu), void c.current.classList.add(vu);
                                            var u, t;
                                            i.current.classList.remove(vu), c.current.classList.remove(vu);
                                        }
                                    })(_);
                            }),
                            b = C(() => {
                                hu(e, () => {
                                    g(), f();
                                });
                            });
                        (0, s.useEffect)(() => d(b)),
                            (0, s.useEffect)(() => {
                                const u = () => {
                                    hu(e, () => {
                                        f();
                                    });
                                };
                                let t = gu;
                                const n = () => {
                                    t(), (t = d(b));
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
                            (0, s.useEffect)(() => {
                                if (!D.pending) return;
                                const u = r.O.client.events.mouse.up(() => {
                                        v(fu);
                                    }),
                                    t = r.O.client.events.mouse.move(([u]) => {
                                        hu(e, (t) => {
                                            const o = l.current,
                                                r = F.current,
                                                s = e.getContainerSize();
                                            if (!o || !r || !s) return;
                                            const a = u.screenY - D.offset - o.getBoundingClientRect().y,
                                                i = (a / o.offsetHeight) * s;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, i),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: r, thumbOffset: a, contentOffset: i });
                                        });
                                    });
                                return () => {
                                    u(), t();
                                };
                            }, [e, D.offset, D.pending, n, v]);
                        const h = Ye((u) => e.applyStepTo(u), A, [e]),
                            y = h[0],
                            w = h[1];
                        (0, s.useEffect)(
                            () => (
                                document.addEventListener('mouseup', w, !0),
                                () => document.removeEventListener('mouseup', w, !0)
                            ),
                            [w],
                        );
                        const k = (e) => {
                            e.target.classList.contains(vu) || H('highlight');
                        };
                        return a().createElement(
                            'div',
                            { className: _()(Fu, u.base), ref: o, onWheel: e.handleMouseWheel },
                            a().createElement('div', {
                                className: _()(mu, u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(vu) || 0 !== e.button || (H('play'), y(p.Next));
                                },
                                ref: i,
                                onMouseEnter: k,
                            }),
                            a().createElement(
                                'div',
                                {
                                    className: _()(Du, u.track),
                                    onMouseDown: (u) => {
                                        const n = F.current;
                                        if (n && 0 === u.button)
                                            if ((H('play'), u.target === n))
                                                v({ pending: !0, offset: u.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((u) => {
                                                    F.current &&
                                                        hu(e, (n) => {
                                                            if (!n) return;
                                                            const o = t(e),
                                                                r = e.clampPosition(n, n.scrollTop + o * u);
                                                            e.applyScroll(r);
                                                        });
                                                })(u.screenY > n.getBoundingClientRect().y ? p.Prev : p.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: k,
                                },
                                a().createElement('div', { ref: F, className: _()(Bu, u.thumb) }),
                                a().createElement('div', { className: _()(pu, u.rail) }),
                            ),
                            a().createElement('div', {
                                className: _()(Cu, u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(vu) || 0 !== e.button || (H('play'), y(p.Prev));
                                },
                                onMouseUp: w,
                                ref: c,
                                onMouseEnter: k,
                            }),
                        );
                    }),
                    ku = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    Su = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: o,
                        scrollClassName: r,
                        scrollClassNames: i,
                        getStepByRailClick: c,
                        onDrag: l,
                    }) => {
                        const E = (0, s.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: _()(ku.base, e.base) });
                            }, [n]),
                            d = (0, s.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return a().createElement(
                            'div',
                            { className: _()(ku.defaultScroll, t), onWheel: u.handleMouseWheel },
                            a().createElement(
                                'div',
                                { className: _()(ku.area, o) },
                                a().createElement(xu, { className: r, classNames: i, api: d }, e),
                            ),
                            a().createElement(wu, { getStepByRailClick: c, api: u, onDrag: l, classNames: E }),
                        );
                    },
                    xu = ({ className: e, classNames: u, children: t, api: n }) => (
                        (0, s.useEffect)(() => d(n.recalculateContent)),
                        a().createElement(
                            'div',
                            { className: _()(ku.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            a().createElement(
                                'div',
                                { className: _()(ku.content, null == u ? void 0 : u.content), ref: n.contentRef },
                                t,
                            ),
                        )
                    );
                xu.Default = Su;
                const Nu = { Vertical: o, Horizontal: n },
                    Pu = 'FormFactor_base_70',
                    Mu = {
                        formfactor_square: R.images.gui.maps.icons.customization.icon_form_1(),
                        formfactor_rect1x2: R.images.gui.maps.icons.customization.icon_form_2(),
                        formfactor_rect1x3: R.images.gui.maps.icons.customization.icon_form_3(),
                        formfactor_rect1x4: R.images.gui.maps.icons.customization.icon_form_4(),
                        formfactor_rect1x6: R.images.gui.maps.icons.customization.icon_form_6(),
                    },
                    Tu = (0, s.memo)(({ formFactor: e, classMix: u }) => {
                        const t = Mu[e],
                            n = _()(Pu, u),
                            o = (0, s.useMemo)(() => ({ backgroundImage: `url(${t})` }), [t]);
                        return e && t ? a().createElement('span', { className: n, style: o }) : null;
                    }),
                    Ou = 'Image_base_26',
                    Ru = 'Image_shine_3d',
                    Lu = 'Image_content_69',
                    zu = (0, s.memo)(({ isOwn: e, isDim: u, icon: t, isStyle: n }) => {
                        const o = (0, s.useMemo)(() => ({ backgroundImage: `url(${t})` }), [t]);
                        return e || n
                            ? a().createElement(
                                  'span',
                                  { className: Ou },
                                  u && a().createElement('span', { className: Ru }),
                                  a().createElement('span', { className: Lu, style: o }),
                              )
                            : a().createElement('span', { className: Lu });
                    }),
                    Iu = 'Price_base_94',
                    Hu = 'Price_base__stock_16',
                    Vu = 'Price_factor_d3',
                    Wu = 'Price_storage_93',
                    Uu = (0, s.memo)(
                        ({ isStub: e, isStyle: u, isFromStorage: t, price: n, quantity: o, classMix: r }) => {
                            if (u || e) return null;
                            if (t)
                                return a().createElement(
                                    'span',
                                    { className: _()(Iu, r) },
                                    a().createElement('span', { className: Wu }, o),
                                );
                            const s = o && o > 1,
                                i = n.hasDiscount(),
                                c = _()(Iu, i && Hu, r);
                            return a().createElement(
                                'span',
                                { className: c },
                                s && a().createElement('span', { className: Vu }, o, '×'),
                                a().createElement(de, {
                                    isDiscount: i,
                                    size: le.small,
                                    type: n.getType(),
                                    value: n.getValue(),
                                }),
                            );
                        },
                    ),
                    $u = 'ProgressionLevelIcon_base_c3',
                    qu = 'ProgressionLevelIcon_icon_0b',
                    ju = 'ProgressionLevelIcon_icon__big_c2',
                    Gu = 'ProgressionLevelIcon_icon__small_37',
                    Xu = ({ typeId: e, progressionLevel: u, classMix: t }) => {
                        const n = `level_${u}`,
                            o =
                                30 === e
                                    ? R.images.gui.maps.icons.customization.progression_styles.icons
                                    : R.images.gui.maps.icons.customization.progression_icons,
                            r = o.$dyn(n),
                            i = o.$dyn(n.concat('_small')),
                            c = (0, s.useMemo)(() => ({ backgroundImage: `url(${i})` }), [i]),
                            l = (0, s.useMemo)(() => ({ backgroundImage: `url(${r})` }), [r]);
                        return r && i
                            ? a().createElement(
                                  'div',
                                  { className: $u },
                                  a().createElement('div', { className: _()(qu, Gu, t), style: c }),
                                  a().createElement('div', { className: _()(qu, ju, t), style: l }),
                              )
                            : null;
                    },
                    Ku = 'Slot_base_a9',
                    Yu = 'Slot_base__big_f1',
                    Zu = 'Slot_base__own_45',
                    Qu = 'Slot_border_d9',
                    Ju = 'Slot_base__style_4a',
                    et = 'Slot_base__unchecked_8f',
                    ut = 'Slot_checkbox_d2',
                    tt = 'Slot_checkbox__checked_a8',
                    nt = 'Slot_base__checked_ea',
                    ot = 'Slot_topLeftCorner_8b',
                    rt = 'Slot_icon_b3',
                    st = 'Slot_icon__edited_66',
                    at = 'Slot_icon__rewindable_f5',
                    it = 'Slot_icon__special_36',
                    ct = 'Slot_icon__alert_4e',
                    lt = 'Slot_icon__unHistorical_66',
                    _t = 'Slot_icon__fantastical_e3',
                    Et = 'Slot_icon__formFactor_d1',
                    dt = 'Slot_hover_ab',
                    Ft = 'Slot_price_03',
                    At = { soundHover: R.sounds.highlight(), soundClick: R.sounds.cust_select() },
                    mt = ({
                        id: e,
                        typeId: u,
                        locked: t,
                        soundHover: n,
                        soundClick: o,
                        isFromStorage: r,
                        selected: i,
                        customizationDisplayType: c,
                        tooltipId: l,
                        isSpecial: E,
                        showUnsupportedAlert: d,
                        isDim: F,
                        formFactor: A,
                        icon: m,
                        isWide: C,
                        quantity: D,
                        price: B,
                        classMix: p,
                        progressionLevel: v,
                        isProgressionRewindEnabled: g,
                        isEdited: f,
                        isStyle: b,
                    }) => {
                        const h = z('model.seasons', L.None).onSelectItem,
                            y = (0, s.useMemo)(() => -1 === e, [e]),
                            w = (0, s.useMemo)(() => !t, [t]),
                            k = (0, s.useMemo)(() => new xe(B), [B]),
                            S = (0, s.useMemo)(() => !b && !k.isEmpty(), [b, k]),
                            x = (0, s.useCallback)(() => {
                                w && n && H(n);
                            }, [w, n]),
                            N = (0, s.useCallback)(
                                (e) => {
                                    w && o && 0 === e.button && H(o);
                                },
                                [w, o],
                            ),
                            P = (0, s.useCallback)(() => {
                                h && !t && h({ id: e, isFromStorage: r, selected: !i });
                            }, [e, r, t, h, i]),
                            M = _()(Ku, p, C && Yu, S && Zu, b && Ju, S && i && nt, S && !i && et),
                            T = _()(ut, i && tt),
                            O = (0, s.useMemo)(
                                () => ({ id: e, tooltip: l, showInventoryBlock: !t, progressionLevel: v }),
                                [e, t, v, l],
                            );
                        return a().createElement(
                            pe,
                            { args: O, isEnabled: !y },
                            a().createElement(
                                'div',
                                { className: M, onMouseEnter: x, onMouseDown: N, onClick: P },
                                S && !t && a().createElement('span', { className: T }),
                                a().createElement(
                                    'span',
                                    { className: Qu },
                                    a().createElement(zu, { isOwn: S, isDim: F, icon: m, isStyle: b }),
                                    a().createElement(
                                        'div',
                                        { className: ot },
                                        f && a().createElement('span', { className: _()(rt, st) }),
                                        g && a().createElement('span', { className: _()(rt, at) }),
                                        !g &&
                                            Boolean(v) &&
                                            v > 0 &&
                                            a().createElement(Xu, {
                                                typeId: u,
                                                progressionLevel: v,
                                                classMix: _()(rt),
                                            }),
                                        E && a().createElement('span', { className: _()(rt, it) }),
                                        d && a().createElement('span', { className: _()(rt, ct) }),
                                    ),
                                    1 === c && !y && a().createElement('span', { className: _()(rt, lt) }),
                                    2 === c && !y && a().createElement('span', { className: _()(rt, _t) }),
                                    a().createElement(Tu, { classMix: _()(rt, Et), formFactor: A }),
                                    a().createElement(Uu, {
                                        classMix: Ft,
                                        isStub: y,
                                        isStyle: b,
                                        isFromStorage: r,
                                        price: k,
                                        quantity: D,
                                    }),
                                    !b && a().createElement('span', { className: dt }),
                                ),
                            ),
                        );
                    };
                mt.defaultProps = At;
                const Ct = (0, s.memo)(mt),
                    Dt = 'Slots_slot_44';
                function Bt() {
                    return (
                        (Bt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var u = 1; u < arguments.length; u++) {
                                      var t = arguments[u];
                                      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                  }
                                  return e;
                              }),
                        Bt.apply(null, arguments)
                    );
                }
                const pt = a().memo(({ type: e }) => {
                        const u = z(`model.seasons.${e}.items.items`);
                        return u
                            ? u.map(({ value: e }) => a().createElement(Ct, Bt({ key: e.id, classMix: Dt }, e)))
                            : null;
                    }),
                    vt = {
                        base: 'Title_base_0d',
                        ico: 'Title_ico_b2',
                        ico__summer: 'Title_ico__summer_ce',
                        ico__winter: 'Title_ico__winter_0e',
                        ico__desert: 'Title_ico__desert_dd',
                        bonus: 'Title_bonus_03',
                        count: 'Title_count_0d',
                        count__zero: 'Title_count__zero_ba',
                    },
                    gt = ({ count: e, name: u, bonusValue: t, bonusType: n, classMix: o }) => {
                        const r = u ? R.strings.vehicle_customization.buyWindow.title.$dyn(u) : '',
                            s = ((e, u) =>
                                e && u
                                    ? Pe(String(R.strings.vehicle_customization.buyWindow.title.bonus.$dyn(u)), {
                                          bonus: e,
                                      })
                                    : '')(t, n),
                            i = _()(vt.base, o);
                        return a().createElement(
                            'div',
                            { className: i, lang: R.strings.settings.LANGUAGE_CODE() },
                            a().createElement('span', { className: _()(vt.ico, vt['ico__' + u]) }),
                            r,
                            e >= 0 &&
                                a().createElement(
                                    'span',
                                    { className: _()(vt.count, { [vt.count__zero]: 0 === e }) },
                                    '(',
                                    e,
                                    ')',
                                ),
                            Boolean(s) && a().createElement('span', { className: vt.bonus }, s),
                        );
                    };
                gt.defaultProps = { count: 0, name: '', bonusValue: '', bonusType: '' };
                const ft = 'Season_base_cb',
                    bt = 'Season_list_b5',
                    ht = 'Season_title_10',
                    yt = ({ type: e }) => {
                        const u = z(`model.seasons.${e}`),
                            t = u.count,
                            n = u.name,
                            o = u.bonusType,
                            r = u.bonusValue;
                        return a().createElement(
                            'div',
                            { className: ft },
                            a().createElement(gt, { count: t, name: n, bonusValue: r, bonusType: o, classMix: ht }),
                            a().createElement('div', { className: bt }, a().createElement(pt, { type: e })),
                        );
                    },
                    wt = 'Seasons_base_d0',
                    kt = 'Seasons_lip_93',
                    St = 'Seasons_lip__top_bd',
                    xt = 'Seasons_lip__bottom_9b',
                    Nt = 'Seasons_scroll_a5',
                    Pt = 'Seasons_areaBase_4e',
                    Mt = 'Seasons_areaContent_4a',
                    Tt = ['summer', 'winter', 'desert'],
                    Ot = ({ scrollApi: e, className: u }) => {
                        const t = _()(wt, u),
                            n = _()(kt, St),
                            o = _()(kt, xt);
                        return a().createElement(
                            'div',
                            { className: t },
                            a().createElement('div', { className: n }),
                            a().createElement(
                                Nu.Vertical.Default,
                                { api: e, className: Nt, scrollClassName: Pt, scrollClassNames: { content: Mt } },
                                Tt.map((e) => a().createElement(yt, { key: e, type: e })),
                            ),
                            a().createElement('div', { className: o }),
                        );
                    },
                    Rt = 'CustomizationCartApp_base_b8',
                    Lt = 'CustomizationCartApp_overlay_f0',
                    zt = 'CustomizationCartApp_overlay__lowSettings_2d',
                    It = 'CustomizationCartApp_header_f5',
                    Ht = 'CustomizationCartApp_seasons_e0',
                    Vt = 'CustomizationCartApp_footer_9d',
                    Wt = { settings: Object.assign({}, v, { step: { type: 'fixed', value: 30 } }) },
                    Ut = () => {
                        const e = z('model', L.None),
                            u = e.isRendererPipelineDeferred,
                            t = e.onCloseAction,
                            n = f(Wt),
                            o = ((e) => {
                                const u = (0, s.useRef)(null);
                                return (
                                    (0, s.useEffect)(() => {
                                        let t = I;
                                        const n = () => {
                                            t = d(() => {
                                                const t = u.current;
                                                if (t)
                                                    return (
                                                        (t.style.height = document.body.offsetHeight - 1 + 'px'),
                                                        d(e.recalculateContent)
                                                    );
                                            });
                                        };
                                        return (
                                            n(),
                                            window.addEventListener('resize', n),
                                            () => {
                                                window.removeEventListener('resize', n), t();
                                            }
                                        );
                                    }, [e]),
                                    u
                                );
                            })(n),
                            r = (0, s.useCallback)(() => {
                                t && t();
                            }, [t]);
                        w(b.n.ESCAPE, r);
                        const i = _()(Lt, !u && zt);
                        return a().createElement(
                            a().Fragment,
                            null,
                            a().createElement('div', { className: i }),
                            a().createElement(
                                'div',
                                { className: Rt, ref: o },
                                a().createElement(X, { onClick: r }),
                                a().createElement(Ke, { className: It }),
                                a().createElement(Ot, { scrollApi: n, className: Ht }),
                                a().createElement(Ue, { className: Vt }),
                            ),
                        );
                    };
                r.O.view.addPreloadTexture('gui/flash/atlases/components.dds'),
                    engine.whenReady.then(() => {
                        c().render(a().createElement(Ut, null), document.getElementById('root'));
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
                var o = 1 / 0;
                for (i = 0; i < deferred.length; i++) {
                    for (var [u, t, n] = deferred[i], r = !0, s = 0; s < u.length; s++)
                        (!1 & n || o >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[s]))
                            ? u.splice(s--, 1)
                            : ((r = !1), n < o && (o = n));
                    if (r) {
                        deferred.splice(i--, 1);
                        var a = t();
                        void 0 !== a && (e = a);
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
        (__webpack_require__.j = 982),
        (() => {
            var e = { 982: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        o,
                        [r, s, a] = t,
                        i = 0;
                    if (r.some((u) => 0 !== e[u])) {
                        for (n in s) __webpack_require__.o(s, n) && (__webpack_require__.m[n] = s[n]);
                        if (a) var c = a(__webpack_require__);
                    }
                    for (u && u(t); i < r.length; i++)
                        (o = r[i]), __webpack_require__.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
                    return __webpack_require__.O(c);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [858], () => __webpack_require__(952));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
