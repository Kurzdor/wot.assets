(() => {
    'use strict';
    var __webpack_modules__ = {
            768: (e, t, n) => {
                n.d(t, { O: () => te });
                var i = {};
                n.r(i),
                    n.d(i, { mouse: () => h, off: () => _, on: () => u, onResize: () => c, onScaleUpdated: () => d });
                var a = {};
                n.r(a),
                    n.d(a, {
                        events: () => i,
                        getMouseGlobalPosition: () => p,
                        getSize: () => v,
                        graphicsQuality: () => b,
                        playSound: () => g,
                        setRTPC: () => w,
                    });
                var r = {};
                n.r(r), n.d(r, { getBgUrl: () => x, getTextureUrl: () => k });
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
                        addModelObserver: () => A,
                        addPreloadTexture: () => H,
                        children: () => r,
                        displayStatus: () => S,
                        displayStatusIs: () => Q,
                        events: () => O,
                        extraSize: () => J,
                        forceTriggerMouseMove: () => Z,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => D,
                        getDisplayStatus: () => X,
                        getScale: () => j,
                        getSize: () => U,
                        getViewGlobalPosition: () => W,
                        isEventHandled: () => Y,
                        isFocused: () => K,
                        pxToRem: () => z,
                        remToPx: () => G,
                        resize: () => V,
                        sendEvent: () => N,
                        setAnimateWindow: () => q,
                        setEventHandled: () => $,
                        setInputPaddingsRem: () => B,
                        setSidePaddingsRem: () => I,
                        whenTutorialReady: () => ee,
                    });
                const c = s('clientResized'),
                    d = s('self.onScaleUpdated'),
                    u = (e, t) => engine.on(e, t),
                    _ = (e, t) => engine.off(e, t),
                    m = { down: s('mousedown'), up: s('mouseup'), move: s('mousemove') };
                const h = (function () {
                    const e = { listeners: 0, enabled: !0, initialized: !1 };
                    function t() {
                        e.enabled && l(!1);
                    }
                    function n() {
                        e.enabled && l(!0);
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
                            : l(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const r = `mouse${t}`,
                                        o = m[t]((e) => n([e, 'outside']));
                                    function s(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(r, s),
                                        i(),
                                        () => {
                                            a &&
                                                (o(),
                                                window.removeEventListener(r, s),
                                                (e.listeners -= 1),
                                                i(),
                                                (a = !1));
                                        }
                                    );
                                };
                            })(n)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, a, {
                        disable() {
                            (e.enabled = !1), i();
                        },
                        enable() {
                            (e.enabled = !0), i();
                        },
                        enableOutside() {
                            e.enabled && l(!0);
                        },
                        disableOutside() {
                            e.enabled && l(!1);
                        },
                    });
                })();
                function g(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function w(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                function v(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function p(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const b = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    f = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    E = Object.keys(f).reduce((e, t) => ((e[t] = () => g(f[t])), e), {}),
                    y = { play: Object.assign({}, E, { sound: g }), setRTPC: w };
                function k(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function x(e, t, n) {
                    return `url(${k(e, t, n)})`;
                }
                const S = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    O = {
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
                    C = ['args'];
                const T = 2,
                    L = 16,
                    M = 32,
                    P = 64,
                    R = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        i,
                                        a = {},
                                        r = Object.keys(e);
                                    for (i = 0; i < r.length; i++) (n = r[i]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                                    return a;
                                })(t, C);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, r, {
                                          arguments:
                                              ((i = a),
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
                    N = {
                        close(e) {
                            R('popover' === e ? T : M);
                        },
                        minimize() {
                            R(P);
                        },
                        move(e) {
                            R(L, { isMouseEvent: !0, on: e });
                        },
                    };
                function H(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function B(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function D(e, t, n, i = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, i);
                }
                function A(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function I(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function U(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function V(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function W(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: G(t.x), y: G(t.y) };
                }
                function F() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function j() {
                    return viewEnv.getScale();
                }
                function z(e) {
                    return viewEnv.pxToRem(e);
                }
                function G(e) {
                    return viewEnv.remToPx(e);
                }
                function q(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function K() {
                    return viewEnv.isFocused();
                }
                function $() {
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
                const Q = Object.keys(S).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === S[t]), e), {}),
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
                            window.isDomBuilt ? e() : O.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    te = { view: o, client: a, sound: y };
            },
            521: (e, t, n) => {
                let i, a;
                n.d(t, { n: () => i }),
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
                    })(i || (i = {})),
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
                    })(a || (a = {}));
            },
            358: (e, t, n) => {
                n.d(t, { Z: () => r });
                var i = n(768);
                class a {
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
                        return window.__dataTracker || (window.__dataTracker = new a()), window.__dataTracker;
                    }
                    clear() {
                        void 0 !== this._updateHandler && (this._updateHandler.clear(), (this._updateHandler = void 0)),
                            (this._callbacks = {});
                    }
                    addCallback(e, t, n = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const r = i.O.view.addModelObserver(e, n, a);
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
                a.__instance = void 0;
                const r = a;
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
                n.d(t, { Sw: () => r.Z, B0: () => s, ry: () => v, Sy: () => b });
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
                const a = i;
                var r = n(358);
                var o = n(613);
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
                const h = ['args'];
                function g(e, t, n, i, a, r, o) {
                    try {
                        var s = e[r](o),
                            l = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    s.done ? t(l) : Promise.resolve(l).then(i, a);
                }
                const w = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    v = (function () {
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
                                    return new Promise(function (i, a) {
                                        var r = e.apply(t, n);
                                        function o(e) {
                                            g(r, i, a, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            g(r, i, a, o, s, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    p = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        i,
                                        a = {},
                                        r = Object.keys(e);
                                    for (i = 0; i < r.length; i++) (n = r[i]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                                    return a;
                                })(t, h);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, r, {
                                          arguments:
                                              ((i = a),
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
                    b = () => p(s.CLOSE),
                    f = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var E = n(572);
                const y = a.instance,
                    k = {
                        DataTracker: r.Z,
                        ViewModel: E.Z,
                        ViewEventType: s,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: d,
                        DateFormatType: u,
                        makeGlobalBoundingBox: w,
                        sendMoveEvent: (e) => p(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: b,
                        sendClosePopOverEvent: () => p(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            p(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, i, a = R.invalid('resId'), r) => {
                            const o = m.O.view.getViewGlobalPosition(),
                                l = n.getBoundingClientRect(),
                                c = l.x,
                                d = l.y,
                                u = l.width,
                                _ = l.height,
                                h = {
                                    x: m.O.view.pxToRem(c) + o.x,
                                    y: m.O.view.pxToRem(d) + o.y,
                                    width: m.O.view.pxToRem(u),
                                    height: m.O.view.pxToRem(_),
                                };
                            p(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: i || R.invalid('resId'),
                                targetID: a,
                                direction: t,
                                bbox: w(h),
                                on: !0,
                                args: r,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => f(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            f(e, b);
                        },
                        handleViewEvent: p,
                        onBindingsReady: v,
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
                            for (const i in t)
                                if (Object.prototype.hasOwnProperty.call(t, i)) {
                                    const a = Object.prototype.toString.call(t[i]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = t[i];
                                        n[i] = [];
                                        for (let t = 0; t < a.length; t++) n[i].push({ value: e(a[t].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[i] = e(t[i]))
                                            : (n[i] = t[i]);
                                }
                            return n;
                        },
                        ClickOutsideManager: y,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = k;
            },
            613: (e, t, n) => {
                n.d(t, { Z5: () => i, cy: () => a });
                const i = {
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
            },
            791: (e, t, n) => {
                var i = n(179),
                    a = n.n(i),
                    r = n(493),
                    o = n.n(r);
                const s = (e, t, n) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && n.extraLarge) ||
                          (t.largeHeight && n.large) ||
                          (t.mediumHeight && n.medium) ||
                          (t.smallHeight && n.small) ||
                          (t.extraSmallHeight && n.extraSmall)
                            ? e
                            : null
                        : e;
                var l = n(768);
                const c = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var d;
                function u(e, t, n) {
                    const i = (function (e, t) {
                            switch (!0) {
                                case e >= t.extraLarge.width:
                                    return t.extraLarge.weight;
                                case e >= t.large.width && e < t.extraLarge.width:
                                    return t.large.weight;
                                case e >= t.medium.width && e < t.large.width:
                                    return t.medium.weight;
                                case e >= t.small.width && e < t.medium.width:
                                    return t.small.weight;
                                default:
                                    return t.extraSmall.weight;
                            }
                        })(e, n),
                        a = (function (e, t) {
                            switch (!0) {
                                case e >= t.extraLarge.height:
                                    return t.extraLarge.weight;
                                case e >= t.large.height && e < t.extraLarge.height:
                                    return t.large.weight;
                                case e >= t.medium.height && e < t.large.height:
                                    return t.medium.weight;
                                case e >= t.small.height && e < t.medium.height:
                                    return t.small.weight;
                                default:
                                    return t.extraSmall.weight;
                            }
                        })(t, n),
                        r = Math.min(i, a);
                    return {
                        extraLarge: r === n.extraLarge.weight,
                        large: r === n.large.weight,
                        medium: r === n.medium.weight,
                        small: r === n.small.weight,
                        extraSmall: r === n.extraSmall.weight,
                        extraLargeWidth: i === n.extraLarge.weight,
                        largeWidth: i === n.large.weight,
                        mediumWidth: i === n.medium.weight,
                        smallWidth: i === n.small.weight,
                        extraSmallWidth: i === n.extraSmall.weight,
                        extraLargeHeight: a === n.extraLarge.weight,
                        largeHeight: a === n.large.weight,
                        mediumHeight: a === n.medium.weight,
                        smallHeight: a === n.small.weight,
                        extraSmallHeight: a === n.extraSmall.weight,
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
                })(d || (d = {}));
                const _ = l.O.client.getSize('rem'),
                    m = _.width,
                    h = _.height,
                    g = Object.assign({ width: m, height: h }, u(m, h, c)),
                    w = (0, i.createContext)(g),
                    v = ['children'];
                const p = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                i,
                                a = {},
                                r = Object.keys(e);
                            for (i = 0; i < r.length; i++) (n = r[i]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                            return a;
                        })(e, v);
                    const a = (0, i.useContext)(w),
                        r = a.extraLarge,
                        o = a.large,
                        l = a.medium,
                        c = a.small,
                        d = a.extraSmall,
                        u = a.extraLargeWidth,
                        _ = a.largeWidth,
                        m = a.mediumWidth,
                        h = a.smallWidth,
                        g = a.extraSmallWidth,
                        p = a.extraLargeHeight,
                        b = a.largeHeight,
                        f = a.mediumHeight,
                        E = a.smallHeight,
                        y = a.extraSmallHeight,
                        k = { extraLarge: p, large: b, medium: f, small: E, extraSmall: y };
                    if (n.extraLarge || n.large || n.medium || n.small || n.extraSmall) {
                        if (n.extraLarge && r) return t;
                        if (n.large && o) return t;
                        if (n.medium && l) return t;
                        if (n.small && c) return t;
                        if (n.extraSmall && d) return t;
                    } else {
                        if (n.extraLargeWidth && u) return s(t, n, k);
                        if (n.largeWidth && _) return s(t, n, k);
                        if (n.mediumWidth && m) return s(t, n, k);
                        if (n.smallWidth && h) return s(t, n, k);
                        if (n.extraSmallWidth && g) return s(t, n, k);
                        if (
                            !(n.extraLargeWidth || n.largeWidth || n.mediumWidth || n.smallWidth || n.extraSmallWidth)
                        ) {
                            if (n.extraLargeHeight && p) return t;
                            if (n.largeHeight && b) return t;
                            if (n.mediumHeight && f) return t;
                            if (n.smallHeight && E) return t;
                            if (n.extraSmallHeight && y) return t;
                        }
                    }
                    return null;
                };
                p.defaultProps = {
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
                (0, i.memo)(p);
                const b = (e) => {
                        const t = (0, i.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    f = ({ children: e }) => {
                        const t = (0, i.useContext)(w),
                            n = (0, i.useState)(t),
                            r = n[0],
                            o = n[1],
                            s = (0, i.useCallback)((e, t) => {
                                const n = l.O.view.pxToRem(e),
                                    i = l.O.view.pxToRem(t);
                                o(Object.assign({ width: n, height: i }, u(n, i, c)));
                            }, []),
                            d = (0, i.useCallback)(() => {
                                const e = l.O.client.getSize('px');
                                s(e.width, e.height);
                            }, [s]);
                        b(() => {
                            l.O.client.events.on('clientResized', s), l.O.client.events.on('self.onScaleUpdated', d);
                        }),
                            (0, i.useEffect)(
                                () => () => {
                                    l.O.client.events.off('clientResized', s),
                                        l.O.client.events.off('self.onScaleUpdated', d);
                                },
                                [s, d],
                            );
                        const _ = (0, i.useMemo)(() => Object.assign({}, r), [r]);
                        return a().createElement(w.Provider, { value: _ }, e);
                    };
                var E = n(483),
                    y = n.n(E),
                    k = n(916),
                    x = n(521);
                const S = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function O(e = x.n.NONE, t = S, n = !1, a = !1) {
                    (0, i.useEffect)(() => {
                        if (e !== x.n.NONE)
                            return (
                                window.addEventListener('keydown', i, n),
                                () => {
                                    window.removeEventListener('keydown', i, n);
                                }
                            );
                        function i(i) {
                            if (i.keyCode === e) {
                                if (!a && l.O.view.isEventHandled()) return;
                                l.O.view.setEventHandled(), t(i), n && i.stopPropagation();
                            }
                        }
                    }, [t, e, n, a]);
                }
                const C = (e = 1) => {
                        const t = new Error().stack;
                        let n,
                            i = R.invalid('resId');
                        return (
                            t &&
                                ((n = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                window.__feature &&
                                    window.__feature !== n &&
                                    window.subViews[n] &&
                                    (i = window.subViews[n].id)),
                            { caller: n, stack: t, resId: i }
                        );
                    },
                    T = (e, t) => e.split('.').reduce((e, t) => e && e[t], t),
                    L = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    M = (e, t) => (e.length > 0 ? `${e}.${t}` : t),
                    P = (e) =>
                        ((e, t) =>
                            e.split('.').reduce((e, n) => {
                                const i = T(`${e}.${n}`, window);
                                return L(i) ? t(e, n, i) : `${e}.${n}`;
                            }))(e, (e, t) => `${e}.${t}.value`),
                    N = (e) => {
                        const t = ((e) => {
                                const t = C(),
                                    n = t.caller,
                                    i = t.resId,
                                    a = window.__feature && window.__feature !== n && n ? `subViews.${n}` : '';
                                return { modelPrefix: a, modelPath: M(a, e || ''), resId: i };
                            })(),
                            n = t.modelPrefix,
                            i = e.split('.');
                        if (i.length > 0) {
                            const e = [i[0]];
                            return (
                                i.reduce((t, i) => {
                                    const a = T(M(n, `${t}.${i}`), window);
                                    return L(a) ? (e.push(a.id), `${t}.${i}.value`) : (e.push(i), `${t}.${i}`);
                                }),
                                e.reduce((e, t) => e + '.' + t)
                            );
                        }
                        return '';
                    },
                    H = k.Sw.instance;
                let B;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(B || (B = {}));
                const D = (e = 'model', t = B.Deep) => {
                    const n = (0, i.useState)(0),
                        a = (n[0], n[1]),
                        r = (0, i.useMemo)(() => C(), []),
                        o = r.caller,
                        s = r.resId,
                        l = (0, i.useMemo)(
                            () => (window.__feature && window.__feature !== o ? `subViews.${o}.${e}` : e),
                            [o, e],
                        ),
                        c = (0, i.useState)(() =>
                            ((e) => {
                                const t = T(e, window);
                                for (const e in t) 'function' == typeof t[e] && (t[e] = t[e].bind(t));
                                return L(t) ? t.value : t;
                            })(P(l)),
                        ),
                        d = c[0],
                        u = c[1],
                        _ = (0, i.useRef)(-1);
                    return (
                        b(() => {
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
                                            ? (e === d && a((e) => e + 1), u(e))
                                            : u(Object.assign([], e));
                                    },
                                    i = N(e);
                                _.current = H.addCallback(i, n, s, t === B.Deep);
                            }
                        }),
                        (0, i.useEffect)(() => {
                            if (t !== B.None)
                                return () => {
                                    H.removeCallback(_.current, s);
                                };
                        }, [s, t]),
                        d
                    );
                };
                function A(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const I = {
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
                    U = [
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
                function V() {
                    return (
                        (V =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                                }
                                return e;
                            }),
                        V.apply(this, arguments)
                    );
                }
                class W extends a().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && A(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && A(this.props.soundClick);
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
                            i = e.goto,
                            r = e.side,
                            o = e.type,
                            s = e.classNames,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            d = e.onMouseDown,
                            u = e.onMouseUp,
                            _ =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        i,
                                        a = {},
                                        r = Object.keys(e);
                                    for (i = 0; i < r.length; i++) (n = r[i]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                                    return a;
                                })(e, U)),
                            m = y()(I.base, I[`base__${o}`], I[`base__${r}`], null == s ? void 0 : s.base),
                            h = y()(I.icon, I[`icon__${o}`], I[`icon__${r}`], null == s ? void 0 : s.icon),
                            g = y()(I.glow, null == s ? void 0 : s.glow),
                            w = y()(I.caption, I[`caption__${o}`], null == s ? void 0 : s.caption),
                            v = y()(I.goto, null == s ? void 0 : s.goto);
                        return a().createElement(
                            'div',
                            V(
                                {
                                    className: m,
                                    onMouseEnter: this._onMouseEnter(l),
                                    onMouseLeave: this._onMouseLeave(c),
                                    onMouseDown: this._onMouseDown(d),
                                    onMouseUp: this._onMouseUp(u),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: n,
                                },
                                _,
                            ),
                            'info' !== o && a().createElement('div', { className: I.shine }),
                            a().createElement('div', { className: h }, a().createElement('div', { className: g })),
                            a().createElement('div', { className: w }, t),
                            i && a().createElement('div', { className: v }, i),
                        );
                    }
                }
                W.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const F = {
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
                let j, z;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(j || (j = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(z || (z = {}));
                const G = ({
                    children: e,
                    size: t,
                    isFocused: n,
                    type: r,
                    disabled: o,
                    mixClass: s,
                    soundHover: l,
                    soundClick: c,
                    onMouseEnter: d,
                    onMouseMove: u,
                    onMouseDown: _,
                    onMouseUp: m,
                    onMouseLeave: h,
                    onClick: g,
                }) => {
                    const w = (0, i.useRef)(null),
                        v = (0, i.useState)(n),
                        p = v[0],
                        b = v[1],
                        f = (0, i.useState)(!1),
                        E = f[0],
                        k = f[1];
                    return (
                        (0, i.useEffect)(() => {
                            function e(e) {
                                p && null !== w.current && !w.current.contains(e.target) && b(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [p]),
                        (0, i.useEffect)(() => {
                            b(n);
                        }, [n]),
                        a().createElement(
                            'div',
                            {
                                ref: w,
                                className: y()(
                                    F.base,
                                    F[`base__${r}`],
                                    o && F.base__disabled,
                                    t && F[`base__${t}`],
                                    p && F.base__focus,
                                    E && F.base__highlightActive,
                                    s,
                                ),
                                onMouseEnter: function (e) {
                                    o || (null !== l && A(l), d && d(e));
                                },
                                onMouseMove: function (e) {
                                    u && u(e);
                                },
                                onMouseUp: function (e) {
                                    o || (m && m(e), k(!1));
                                },
                                onMouseDown: function (e) {
                                    o ||
                                        (null !== c && A(c),
                                        _ && _(e),
                                        n && (o || (w.current && (w.current.focus(), b(!0)))),
                                        k(!0));
                                },
                                onMouseLeave: function (e) {
                                    o || (h && h(e), k(!1));
                                },
                                onClick: function (e) {
                                    o || (g && g(e));
                                },
                            },
                            r !== j.ghost &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: F.back }),
                                    a().createElement('span', { className: F.texture }),
                                ),
                            a().createElement(
                                'span',
                                { className: y()(F.state, F.state__default) },
                                a().createElement('span', { className: F.stateDisabled }),
                                a().createElement('span', { className: F.stateHighlightHover }),
                                a().createElement('span', { className: F.stateHighlightActive }),
                            ),
                            a().createElement(
                                'span',
                                { className: F.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                G.defaultProps = { type: j.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const q = G,
                    K = [
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
                function $(e) {
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
                const Y = (e, t, n = {}, i = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: k.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: i,
                                },
                                n,
                            ),
                        );
                    },
                    Z = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            a = e.args,
                            r = e.onMouseEnter,
                            o = e.onMouseLeave,
                            s = e.onMouseDown,
                            l = e.onClick,
                            c = e.ignoreShowDelay,
                            d = void 0 !== c && c,
                            u = e.ignoreMouseClick,
                            _ = void 0 !== u && u,
                            m = e.decoratorId,
                            h = void 0 === m ? 0 : m,
                            g = e.isEnabled,
                            w = void 0 === g || g,
                            v = e.targetId,
                            p = void 0 === v ? 0 : v,
                            b = e.onShow,
                            f = e.onHide,
                            E = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    i,
                                    a = {},
                                    r = Object.keys(e);
                                for (i = 0; i < r.length; i++) (n = r[i]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                                return a;
                            })(e, K);
                        const y = (0, i.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            k = (0, i.useMemo)(() => p || C().resId, [p]),
                            x = (0, i.useCallback)(() => {
                                (y.current.isVisible && y.current.timeoutId) ||
                                    (Y(n, h, { isMouseEvent: !0, on: !0, arguments: $(a) }, k),
                                    b && b(),
                                    (y.current.isVisible = !0));
                            }, [n, h, a, k, b]),
                            S = (0, i.useCallback)(() => {
                                if (y.current.isVisible || y.current.timeoutId) {
                                    const e = y.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (y.current.timeoutId = 0)),
                                        Y(n, h, { on: !1 }, k),
                                        y.current.isVisible && f && f(),
                                        (y.current.isVisible = !1);
                                }
                            }, [n, h, k, f]),
                            O = (0, i.useCallback)((e) => {
                                y.current.isVisible &&
                                    ((y.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (y.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(y.current.prevTarget) && S();
                                    }, 200)));
                            }, []);
                        (0, i.useEffect)(() => {
                            const e = y.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', O, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', O, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, i.useEffect)(() => {
                                !1 === w && S();
                            }, [w, S]),
                            (0, i.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', S),
                                    () => {
                                        window.removeEventListener('mouseleave', S), S();
                                    }
                                ),
                                [S],
                            );
                        return w
                            ? (0, i.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((T = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((y.current.timeoutId = window.setTimeout(x, d ? 100 : 400)),
                                                      r && r(e),
                                                      T && T(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              S(), null == o || o(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === _ && S(), null == l || l(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === _ && S(), null == s || s(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      E,
                                  ),
                              )
                            : t;
                        var T;
                    },
                    X = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Q() {
                    return (
                        (Q =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                                }
                                return e;
                            }),
                        Q.apply(this, arguments)
                    );
                }
                const J = R.views.common.tooltip_window.simple_tooltip_content,
                    ee = (e) => {
                        let t = e.children,
                            n = e.body,
                            r = e.header,
                            o = e.note,
                            s = e.alert,
                            l = e.args,
                            c = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    i,
                                    a = {},
                                    r = Object.keys(e);
                                for (i = 0; i < r.length; i++) (n = r[i]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                                return a;
                            })(e, X);
                        const d = (0, i.useMemo)(() => {
                            const e = Object.assign({}, l, { body: n, header: r, note: o, alert: s });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [s, n, r, o, l]);
                        return a().createElement(
                            Z,
                            Q(
                                {
                                    contentId:
                                        ((u = null == l ? void 0 : l.hasHtmlContent),
                                        u ? J.SimpleTooltipHtmlContent('resId') : J.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: d,
                                },
                                c,
                            ),
                            t,
                        );
                        var u;
                    },
                    te = 'ItemAnimation_base_ba',
                    ne = 'ItemAnimation_boxHolder_7f',
                    ie = 'ItemAnimation_boxHolder__large_bb',
                    ae = 'ItemAnimation_box_3f',
                    re = 'ItemAnimation_box__large_19',
                    oe = 'ItemAnimation_inner_20',
                    se = 'ItemAnimation_inner__large_7f',
                    le = ({ onStart: e, onComplete: t }) => {
                        const n = (0, i.useContext)(w),
                            r = n.large || n.extraLarge,
                            o = y()(ne, r && ie),
                            s = y()(ae, r && re),
                            l = y()(oe, r && se),
                            c = a().createRef();
                        return (
                            (0, i.useEffect)(() => {
                                const n = c.current;
                                n &&
                                    ((n.style.animationDelay = '1s'),
                                    (n.style.animationDuration = '0.3s'),
                                    e &&
                                        setTimeout(() => {
                                            e();
                                        }, 1e3),
                                    t &&
                                        setTimeout(() => {
                                            t();
                                        }, 1300));
                            }, [c, t, e]),
                            a().createElement(
                                'div',
                                { className: te },
                                a().createElement(
                                    'div',
                                    { className: o },
                                    a().createElement(
                                        'div',
                                        { className: s, ref: c },
                                        a().createElement('div', { className: l }),
                                    ),
                                ),
                            )
                        );
                    },
                    ce = 'Header_base_0d',
                    de = 'Header_tankTypeIcon_d6',
                    ue = 'Header_contentContainer_85',
                    _e = 'Header_spaceAtTheEnd_c0',
                    me = ({ name: e, level: t, extraText: n, type: i, className: r }) => {
                        const o = n ? n.replace('{tankLevel}', t) : `${t} {tankName}`,
                            s = { backgroundImage: `url(${i})` };
                        return a().createElement(
                            'div',
                            { className: y()(ce, r) },
                            a().createElement(
                                'div',
                                { className: ue },
                                o
                                    .split('{tankName}')
                                    .map((t, n) =>
                                        1 === n
                                            ? [
                                                  a().createElement('span', { key: 'icon', className: de, style: s }),
                                                  a().createElement('span', { key: 'name', className: _e }, e),
                                                  a().createElement('span', { key: n }, t),
                                              ]
                                            : a().createElement('span', { key: n }, t),
                                    ),
                            ),
                        );
                    };
                me.defaultProps = { extraText: '' };
                const he = 'StyleUnlockedViewContent_base_ce',
                    ge = 'StyleUnlockedViewContent_closeBtnPosition_3d',
                    we = 'StyleUnlockedViewContent_cButton_54',
                    ve = 'StyleUnlockedViewContent_main_d7',
                    pe = 'StyleUnlockedViewContent_main__large_9a',
                    be = 'StyleUnlockedViewContent_header_47',
                    fe = 'StyleUnlockedViewContent_header__large_d8',
                    Ee = 'StyleUnlockedViewContent_title_46',
                    ye = 'StyleUnlockedViewContent_title__large_d7',
                    ke = 'StyleUnlockedViewContent_description_28',
                    xe = 'StyleUnlockedViewContent_description__large_ba',
                    Se = 'StyleUnlockedViewContent_content_79',
                    Oe = 'StyleUnlockedViewContent_iconContent_9b',
                    Ce = 'StyleUnlockedViewContent_iconContent__large_8b',
                    Te = 'StyleUnlockedViewContent_actions_29',
                    Le = 'StyleUnlockedViewContent_actionsSecondaryBtn_3d',
                    Me = 'StyleUnlockedViewContent_sparksContainer_60',
                    Pe = 'StyleUnlockedViewContent_sparksContainer__large_be',
                    Re = 'StyleUnlockedViewContent_sparks_bd',
                    Ne = () => {
                        const e = (0, i.useContext)(w),
                            t = e.large || e.extraLarge,
                            n = y()(ve, t && pe),
                            r = y()(be, t && fe),
                            o = y()(Ee, t && ye),
                            s = y()(ke, t && xe),
                            l = y()(Oe, t && Ce),
                            c = y()(Me, t && Pe);
                        O(x.n.ESCAPE, k.Sy);
                        const d = D('model', B.None),
                            u = d.tankLevel,
                            _ = d.tankTypeIcon,
                            m = d.tankName,
                            h = d.secondaryButtonTooltip,
                            g = d.secondaryButtonEnabled,
                            v = d.onOkClick,
                            p = d.onSecondaryClick,
                            b = d.onAnimationSound,
                            f = (0, i.useCallback)(() => {
                                v && v();
                            }, [v]),
                            E = (0, i.useCallback)(() => {
                                p && p();
                            }, [p]),
                            S = (0, i.useCallback)(() => {
                                b && b();
                            }, [b]);
                        return a().createElement(
                            'div',
                            { className: he },
                            a().createElement(
                                'div',
                                { className: c },
                                a().createElement('img', {
                                    className: Re,
                                    id: 'swfImg',
                                    src: R.animations.customization.divine_glow(),
                                }),
                            ),
                            a().createElement(
                                'div',
                                { className: ge },
                                a().createElement(W, {
                                    caption: R.strings.menu.viewHeader.closeBtn.label(),
                                    type: 'close',
                                    side: 'right',
                                    onClick: k.Sy,
                                }),
                            ),
                            a().createElement(
                                'div',
                                { className: n },
                                a().createElement(me, { className: r, name: m, level: u, type: _ }),
                                a().createElement(
                                    'span',
                                    { className: o },
                                    R.strings.vehicle_customization.progression.requiredStyleUnlocked.title(),
                                ),
                                a().createElement(
                                    'div',
                                    { className: Se },
                                    a().createElement('div', { className: l }, a().createElement(le, { onStart: S })),
                                ),
                                a().createElement(
                                    'span',
                                    { className: s },
                                    R.strings.vehicle_customization.progression.requiredStyleUnlocked.main(),
                                ),
                                a().createElement(
                                    'div',
                                    { className: Te },
                                    a().createElement(
                                        q,
                                        { type: j.primary, mixClass: we, onClick: f },
                                        R.strings.vehicle_customization.progression.requiredStyleUnlocked.okBtnLabel(),
                                    ),
                                    a().createElement(
                                        'div',
                                        { className: Le },
                                        a().createElement(
                                            ee,
                                            { body: h, isEnabled: '' !== h },
                                            a().createElement(
                                                'div',
                                                null,
                                                a().createElement(
                                                    q,
                                                    { type: j.secondary, mixClass: we, disabled: !g, onClick: E },
                                                    R.strings.vehicle_customization.progression.requiredStyleUnlocked.secondaryBtnLabel(),
                                                ),
                                            ),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    },
                    He = document.createElement('div');
                (window.onload = () => {
                    document.body.appendChild(He), document.body.setAttribute('style', 'margin: 0');
                }),
                    engine.whenReady.then(() => {
                        o().render(a().createElement(f, null, a().createElement(Ne, null)), He);
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
        (__webpack_require__.O = (e, t, n, i) => {
            if (!t) {
                var a = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, n, i] = deferred[l], r = !0, o = 0; o < t.length; o++)
                        (!1 & i || a >= i) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[o]))
                            ? t.splice(o--, 1)
                            : ((r = !1), i < a && (a = i));
                    if (r) {
                        deferred.splice(l--, 1);
                        var s = n();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            i = i || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > i; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, n, i];
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
        (__webpack_require__.j = 165),
        (() => {
            var e = { 165: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var i,
                        a,
                        [r, o, s] = n,
                        l = 0;
                    if (r.some((t) => 0 !== e[t])) {
                        for (i in o) __webpack_require__.o(o, i) && (__webpack_require__.m[i] = o[i]);
                        if (s) var c = s(__webpack_require__);
                    }
                    for (t && t(n); l < r.length; l++)
                        (a = r[l]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(c);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [858], () => __webpack_require__(791));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
