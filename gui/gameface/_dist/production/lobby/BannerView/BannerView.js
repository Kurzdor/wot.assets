(() => {
    'use strict';
    var __webpack_modules__ = {
            9768: (u, e, n) => {
                n.d(e, { O: () => X });
                var t = {};
                n.r(t),
                    n.d(t, { mouse: () => D, off: () => c, on: () => F, onResize: () => E, onScaleUpdated: () => A });
                var r = {};
                n.r(r),
                    n.d(r, {
                        events: () => t,
                        getMouseGlobalPosition: () => C,
                        getSize: () => B,
                        graphicsQuality: () => m,
                        playSound: () => _,
                        setRTPC: () => d,
                    });
                var i = {};
                n.r(i), n.d(i, { getBgUrl: () => f, getTextureUrl: () => p });
                var a = {};
                function o(u) {
                    return (e) => (
                        engine.on(u, e),
                        () => {
                            engine.off(u, e);
                        }
                    );
                }
                function s(u) {
                    viewEnv.setTrackMouseOnStage(u);
                }
                n.r(a),
                    n.d(a, {
                        addModelObserver: () => x,
                        addPreloadTexture: () => T,
                        children: () => i,
                        displayStatus: () => b,
                        displayStatusIs: () => K,
                        events: () => g,
                        extraSize: () => Y,
                        forceTriggerMouseMove: () => $,
                        freezeTextureBeforeResize: () => N,
                        getBrowserTexturePath: () => R,
                        getDisplayStatus: () => G,
                        getScale: () => V,
                        getSize: () => M,
                        getViewGlobalPosition: () => I,
                        isEventHandled: () => H,
                        isFocused: () => U,
                        pxToRem: () => z,
                        remToPx: () => j,
                        resize: () => L,
                        sendEvent: () => S,
                        setAnimateWindow: () => q,
                        setEventHandled: () => W,
                        setInputPaddingsRem: () => O,
                        setSidePaddingsRem: () => P,
                        whenTutorialReady: () => Z,
                    });
                const E = o('clientResized'),
                    A = o('self.onScaleUpdated'),
                    F = (u, e) => engine.on(u, e),
                    c = (u, e) => engine.off(u, e),
                    l = { down: o('mousedown'), up: o('mouseup'), move: o('mousemove') },
                    D = (function () {
                        const u = { listeners: 0, enabled: !0, initialized: !1 };
                        function e() {
                            u.enabled && s(!1);
                        }
                        function n() {
                            u.enabled && s(!0);
                        }
                        function t() {
                            u.enabled
                                ? u.listeners < 1
                                    ? ((u.initialized = !1),
                                      document.body.removeEventListener('mouseenter', e),
                                      document.body.removeEventListener('mouseleave', n))
                                    : u.initialized ||
                                      ((u.initialized = !0),
                                      document.body.addEventListener('mouseenter', e),
                                      document.body.addEventListener('mouseleave', n))
                                : s(!1);
                        }
                        const r = ['down', 'up', 'move'].reduce(
                            (e, n) => (
                                (e[n] = (function (e) {
                                    return (n) => {
                                        u.listeners += 1;
                                        let r = !0;
                                        const i = `mouse${e}`,
                                            a = l[e]((u) => n([u, 'outside']));
                                        function o(u) {
                                            n([u, 'inside']);
                                        }
                                        return (
                                            window.addEventListener(i, o),
                                            t(),
                                            () => {
                                                r &&
                                                    (a(),
                                                    window.removeEventListener(i, o),
                                                    (u.listeners -= 1),
                                                    t(),
                                                    (r = !1));
                                            }
                                        );
                                    };
                                })(n)),
                                e
                            ),
                            {},
                        );
                        return Object.assign({}, r, {
                            disable() {
                                (u.enabled = !1), t();
                            },
                            enable() {
                                (u.enabled = !0), t();
                            },
                            enableOutside() {
                                u.enabled && s(!0);
                            },
                            disableOutside() {
                                u.enabled && s(!1);
                            },
                        });
                    })();
                function _(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error(`playSound('${u}'): `, e);
                    });
                }
                function d(u, e) {
                    engine.call('SetRTPCGlobal', u, e).catch((n) => {
                        console.error(`setRTPC('${u}', '${e}'): `, n);
                    });
                }
                function B(u = 'px') {
                    return 'rem' === u ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function C(u = 'px') {
                    return 'rem' === u ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const m = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    w = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    h = Object.keys(w).reduce((u, e) => ((u[e] = () => _(w[e])), u), {}),
                    v = { play: Object.assign({}, h, { sound: _ }), setRTPC: d };
                function p(u, e, n = 1) {
                    return viewEnv.getChildTexturePath(u, e.width, e.height, n);
                }
                function f(u, e, n) {
                    return `url(${p(u, e, n)})`;
                }
                const b = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
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
                    y = ['args'],
                    k = (u, e) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const r = e.args,
                                i = (function (u, e) {
                                    if (null == u) return {};
                                    var n,
                                        t,
                                        r = {},
                                        i = Object.keys(u);
                                    for (t = 0; t < i.length; t++) (n = i[t]), e.indexOf(n) >= 0 || (r[n] = u[n]);
                                    return r;
                                })(e, y);
                            return void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: u }, i, {
                                          arguments:
                                              ((t = r),
                                              Object.entries(t).map(([u, e]) => {
                                                  const n = 'GFValueProxy';
                                                  switch (typeof e) {
                                                      case 'number':
                                                          return { __Type: n, name: u, number: e };
                                                      case 'boolean':
                                                          return { __Type: n, name: u, bool: e };
                                                      default:
                                                          return { __Type: n, name: u, string: e.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: u }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: u });
                        var t;
                    },
                    S = {
                        close(u) {
                            k('popover' === u ? 2 : 32);
                        },
                        minimize() {
                            k(64);
                        },
                        move(u) {
                            k(16, { isMouseEvent: !0, on: u });
                        },
                    };
                function T(u) {
                    viewEnv.addPreloadTexture(u);
                }
                function O(u) {
                    viewEnv.setHitAreaPaddingsRem(u, u, u, u, 15);
                }
                function R(u, e, n, t = 1) {
                    return viewEnv.getWebBrowserTexturePath(u, e, n, t);
                }
                function x(u, e, n) {
                    return viewEnv.addDataChangedCallback(u, e, n);
                }
                function P(u) {
                    viewEnv.setHitAreaPaddingsRem(u.top, u.right, u.bottom, u.left, 15);
                }
                function M(u = 'px') {
                    return 'rem' === u ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function L(u, e, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(u, e) : viewEnv.resizeViewPx(u, e);
                }
                function I(u = 'rem') {
                    const e = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === u ? e : { x: j(e.x), y: j(e.y) };
                }
                function N() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function V() {
                    return viewEnv.getScale();
                }
                function z(u) {
                    return viewEnv.pxToRem(u);
                }
                function j(u) {
                    return viewEnv.remToPx(u);
                }
                function q(u, e) {
                    viewEnv.setAnimateWindow(u, e);
                }
                function U() {
                    return viewEnv.isFocused();
                }
                function W() {
                    return viewEnv.setEventHandled();
                }
                function H() {
                    return viewEnv.isEventHandled();
                }
                function $() {
                    viewEnv.forceTriggerMouseMove();
                }
                function G() {
                    return viewEnv.getShowingStatus();
                }
                const K = Object.keys(b).reduce((u, e) => ((u[e] = () => viewEnv.getShowingStatus() === b[e]), u), {}),
                    Y = {
                        set: (u, e) => {
                            viewEnv.setExtraSizeRem(u, e);
                        },
                        get: (u, e) => {
                            viewEnv.getExtraSizeRem(u, e);
                        },
                    },
                    Z = Promise.all([
                        new Promise((u) => {
                            window.isDomBuilt ? u() : g.onDomBuilt(u);
                        }),
                        engine.whenReady,
                    ]),
                    X = { view: a, client: r, sound: v };
            },
            5521: (u, e, n) => {
                let t, r;
                n.d(e, { n: () => t }),
                    (function (u) {
                        (u[(u.NONE = -1)] = 'NONE'),
                            (u[(u.ALT = 165)] = 'ALT'),
                            (u[(u.ENTER = 13)] = 'ENTER'),
                            (u[(u.ESCAPE = 27)] = 'ESCAPE'),
                            (u[(u.SPACE = 32)] = 'SPACE'),
                            (u[(u.END = 35)] = 'END'),
                            (u[(u.HOME = 36)] = 'HOME'),
                            (u[(u.ARROW_LEFT = 37)] = 'ARROW_LEFT'),
                            (u[(u.ARROW_UP = 38)] = 'ARROW_UP'),
                            (u[(u.ARROW_RIGHT = 39)] = 'ARROW_RIGHT'),
                            (u[(u.ARROW_DOWN = 40)] = 'ARROW_DOWN'),
                            (u[(u.NUM_PLUS = 107)] = 'NUM_PLUS'),
                            (u[(u.NUM_MINUS = 109)] = 'NUM_MINUS'),
                            (u[(u.PLUS = 187)] = 'PLUS'),
                            (u[(u.MINUS = 189)] = 'MINUS'),
                            (u[(u.PAGE_UP = 33)] = 'PAGE_UP'),
                            (u[(u.PAGE_DOWN = 34)] = 'PAGE_DOWN'),
                            (u[(u.BACKSPACE = 8)] = 'BACKSPACE'),
                            (u[(u.DELETE = 46)] = 'DELETE'),
                            (u[(u.TAB = 9)] = 'TAB'),
                            (u[(u.KEY_N = 78)] = 'KEY_N'),
                            (u[(u.KEY_1 = 49)] = 'KEY_1'),
                            (u[(u.KEY_2 = 50)] = 'KEY_2'),
                            (u[(u.KEY_3 = 51)] = 'KEY_3'),
                            (u[(u.KEY_4 = 52)] = 'KEY_4'),
                            (u[(u.KEY_5 = 53)] = 'KEY_5'),
                            (u[(u.KEY_6 = 54)] = 'KEY_6'),
                            (u[(u.KEY_7 = 55)] = 'KEY_7'),
                            (u[(u.KEY_8 = 56)] = 'KEY_8'),
                            (u[(u.KEY_9 = 57)] = 'KEY_9');
                    })(t || (t = {})),
                    (function (u) {
                        (u.ALT = 'Alt'),
                            (u.ALT_GRAPH = 'AltGraph'),
                            (u.CAPS_LOCK = 'CapsLock'),
                            (u.CONTROL = 'Control'),
                            (u.FN = 'Fn'),
                            (u.FN_LOCK = 'FnLock'),
                            (u.META = 'Meta'),
                            (u.NUM_LOCK = 'NumLock'),
                            (u.SCROLL_LOCK = 'ScrollLock'),
                            (u.SHIFT = 'Shift'),
                            (u.SYMBOL = 'Symbol'),
                            (u.SYMBOL_LOCK = 'SymbolLock');
                    })(r || (r = {}));
            },
            1358: (u, e, n) => {
                n.d(e, { Z: () => i });
                var t = n(9768);
                class r {
                    constructor() {
                        (this._callbacks = void 0),
                            (this._updateHandler = void 0),
                            (this._views = void 0),
                            (this.clearViewCallbacks = (u) => {
                                this._views[u] &&
                                    (this._views[u].forEach((u) => {
                                        delete this._callbacks[u];
                                    }),
                                    delete this._views[u]);
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
                    addCallback(u, e, n = 0, r = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const i = t.O.view.addModelObserver(u, n, r);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = e),
                                  n > 0 && (this._views[n] ? this._views[n].push(i) : (this._views[n] = [i])))
                                : console.error("Can't add callback for model:", u),
                            i
                        );
                    }
                    removeCallback(u, e = 0) {
                        let n = !1;
                        return (
                            void 0 !== u &&
                                void 0 !== this._callbacks[u] &&
                                ((n = viewEnv.removeDataChangedCallback(u, e)), delete this._callbacks[u]),
                            n || console.error("Can't remove callback by id:", u),
                            n
                        );
                    }
                    _emmitDataChanged(u, e, n) {
                        n.forEach((n) => {
                            const t = this._callbacks[n];
                            void 0 !== t && t(u, e);
                        });
                    }
                }
                r.__instance = void 0;
                const i = r;
            },
            7572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
                var _DataTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1358),
                    _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9916);
                class ViewModel {
                    constructor(path, watchingFields = []) {
                        (this.dataTracker = void 0),
                            (this.modelPath = void 0),
                            (this.callbacks = void 0),
                            (this.data = void 0),
                            (this._notifyObservers = () => {
                                (this.data = eval(this.modelPath)),
                                    this.callbacks.forEach((u) => {
                                        u(this.data);
                                    });
                            }),
                            (this.dataTracker = new _DataTracker__WEBPACK_IMPORTED_MODULE_0__.Z()),
                            (this.modelPath = path),
                            (this.callbacks = new Set()),
                            (0, _index__WEBPACK_IMPORTED_MODULE_1__.ry)().then(() => {
                                this._addCallback(path),
                                    watchingFields.forEach((u) => {
                                        this._addCallback(path + '.' + u);
                                    }),
                                    this._notifyObservers();
                            });
                    }
                    subscribe(u) {
                        this.callbacks.add(u), null !== this.data && void 0 !== this.data && u(this.data);
                    }
                    unsubscribe(u) {
                        this.callbacks.delete(u);
                    }
                    destroy() {
                        this.dataTracker.clear(), this.callbacks.clear();
                    }
                    _addCallback(u) {
                        this.dataTracker.addCallback(u, this._notifyObservers);
                    }
                }
                const __WEBPACK_DEFAULT_EXPORT__ = ViewModel;
            },
            9916: (u, e, n) => {
                n.d(e, { Sw: () => i.Z, B0: () => o, ry: () => C });
                class t {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (u) => {
                                this.entries.forEach(({ container: e, callback: n }) => {
                                    let t = u.target;
                                    do {
                                        if (t === e) return;
                                        t = t.parentNode;
                                    } while (t);
                                    n();
                                });
                            });
                    }
                    static get instance() {
                        return t.__instance || (t.__instance = new t()), t.__instance;
                    }
                    register(u, e) {
                        this.addMouseListener(), this.entries.push({ container: u, callback: e });
                    }
                    unregister(u, e) {
                        const n = u,
                            t = e;
                        (this.entries = this.entries.filter(({ container: u, callback: e }) => u !== n || e !== t)),
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
                t.__instance = void 0;
                const r = t;
                var i = n(1358),
                    a = n(8613);
                let o;
                var s;
                ((s = o || (o = {}))[(s.UNDEFINED = 0)] = 'UNDEFINED'),
                    (s[(s.TOOLTIP = 1)] = 'TOOLTIP'),
                    (s[(s.POP_OVER = 2)] = 'POP_OVER'),
                    (s[(s.CONTEXT_MENU = 4)] = 'CONTEXT_MENU'),
                    (s[(s.DROP_DOWN = 8)] = 'DROP_DOWN'),
                    (s[(s.MOVE = 16)] = 'MOVE'),
                    (s[(s.CLOSE = 32)] = 'CLOSE'),
                    (s[(s.MINIMIZE = 64)] = 'MINIMIZE');
                const E = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    A = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    F = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var l = n(5521),
                    D = n(9768);
                const _ = ['args'];
                function d(u, e, n, t, r, i, a) {
                    try {
                        var o = u[i](a),
                            s = o.value;
                    } catch (u) {
                        return void n(u);
                    }
                    o.done ? e(s) : Promise.resolve(s).then(t, r);
                }
                const B = (u) => ({ __Type: 'GFBoundingBox', x: u.x, y: u.y, width: u.width, height: u.height }),
                    C = (function () {
                        var u,
                            e =
                                ((u = function* () {
                                    return (
                                        !(!engine._BindingsReady || !engine._WindowLoaded) ||
                                        new Promise((u) => {
                                            engine.on('Ready', u);
                                        })
                                    );
                                }),
                                function () {
                                    var e = this,
                                        n = arguments;
                                    return new Promise(function (t, r) {
                                        var i = u.apply(e, n);
                                        function a(u) {
                                            d(i, t, r, a, o, 'next', u);
                                        }
                                        function o(u) {
                                            d(i, t, r, a, o, 'throw', u);
                                        }
                                        a(void 0);
                                    });
                                });
                        return function () {
                            return e.apply(this, arguments);
                        };
                    })(),
                    m = (u, e) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== e) {
                            const r = e.args,
                                i = (function (u, e) {
                                    if (null == u) return {};
                                    var n,
                                        t,
                                        r = {},
                                        i = Object.keys(u);
                                    for (t = 0; t < i.length; t++) (n = i[t]), e.indexOf(n) >= 0 || (r[n] = u[n]);
                                    return r;
                                })(e, _);
                            void 0 !== r
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: u }, i, {
                                          arguments:
                                              ((t = r),
                                              Object.entries(t).map(([u, e]) => {
                                                  const n = { __Type: 'GFValueProxy', name: u };
                                                  switch (typeof e) {
                                                      case 'number':
                                                          n.number = e;
                                                          break;
                                                      case 'boolean':
                                                          n.bool = e;
                                                          break;
                                                      default:
                                                          n.string = e.toString();
                                                  }
                                                  return n;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: u }, i));
                        } else viewEnv.handleViewEvent({ __Type: n, type: u });
                        var t;
                    },
                    w = () => m(o.CLOSE),
                    h = (u, e) => {
                        u.keyCode === l.n.ESCAPE && e();
                    };
                var v = n(7572);
                const p = r.instance,
                    f = {
                        DataTracker: i.Z,
                        ViewModel: v.Z,
                        ViewEventType: o,
                        NumberFormatType: E,
                        RealFormatType: A,
                        TimeFormatType: F,
                        DateFormatType: c,
                        makeGlobalBoundingBox: B,
                        sendMoveEvent: (u) => m(o.MOVE, { isMouseEvent: !0, on: u }),
                        sendCloseEvent: w,
                        sendClosePopOverEvent: () => m(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (u, e, n = 0) => {
                            m(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: u, on: !0, decoratorID: n, args: e });
                        },
                        sendShowPopOverEvent: (u, e, n, t, r = R.invalid('resId'), i) => {
                            const a = D.O.view.getViewGlobalPosition(),
                                s = n.getBoundingClientRect(),
                                E = s.x,
                                A = s.y,
                                F = s.width,
                                c = s.height,
                                l = {
                                    x: D.O.view.pxToRem(E) + a.x,
                                    y: D.O.view.pxToRem(A) + a.y,
                                    width: D.O.view.pxToRem(F),
                                    height: D.O.view.pxToRem(c),
                                };
                            m(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: u,
                                decoratorID: t || R.invalid('resId'),
                                targetID: r,
                                direction: e,
                                bbox: B(l),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (u) => {
                            const e = (e) => h(e, u);
                            return (
                                window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e)
                            );
                        },
                        closeOnEsc: (u) => {
                            h(u, w);
                        },
                        handleViewEvent: m,
                        onBindingsReady: C,
                        onLayoutReady: () =>
                            new Promise((u) => {
                                requestAnimationFrame(() => {
                                    requestAnimationFrame(() => {
                                        u();
                                    });
                                });
                            }),
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
                        dumpViewModel: function u(e) {
                            const n = {};
                            if ('object' != typeof e) return e;
                            for (const t in e)
                                if (Object.prototype.hasOwnProperty.call(e, t)) {
                                    const r = Object.prototype.toString.call(e[t]);
                                    if (r.startsWith('[object CoherentArrayProxy]')) {
                                        const r = e[t];
                                        n[t] = [];
                                        for (let e = 0; e < r.length; e++) n[t].push({ value: u(r[e].value) });
                                    } else
                                        r.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[t] = u(e[t]))
                                            : (n[t] = e[t]);
                                }
                            return n;
                        },
                        ClickOutsideManager: p,
                        SystemLocale: a.Z5,
                        UserLocale: a.cy,
                    };
                window.ViewEnvHelper = f;
            },
            8613: (u, e, n) => {
                n.d(e, { Ew: () => i, Z5: () => t, cy: () => r });
                const t = {
                        getNumberFormat: (u, e) => systemLocale.getNumberFormat(u, e),
                        getRealFormat: (u, e) => systemLocale.getRealFormat(u, e),
                        getTimeFormat: (u, e) => systemLocale.getTimeFormat(u, e),
                        getDateFormat: (u, e) => systemLocale.getDateFormat(u, e),
                        toUpperCase: (u) => systemLocale.toUpperCase(u),
                        toLowerCase: (u) => systemLocale.toUpperCase(u),
                    },
                    r = {
                        getNumberFormat: (u) => userLocale.getNumberFormat(u),
                        getTimeFormat: (u, e, n) => userLocale.getTimeFormat(u, e, void 0 === n || n),
                        getTimeString: (u, e, n) => userLocale.getTimeString(u, e, void 0 === n || n),
                    },
                    i = {
                        getRegionalDateTime: (u, e, n = !0) => regionalDateTime.getRegionalDateTime(u, e, n),
                        getFormattedDateTime: (u, e, n = !0) => regionalDateTime.getFormattedDateTime(u, e, n),
                    };
            },
            7735: (u, e, n) => {
                var t = n(6179),
                    r = n.n(t),
                    i = n(493),
                    a = n.n(i),
                    o = n(6483),
                    s = n.n(o);
                let E;
                function A(u, e) {
                    return u.replace(/\{\w+\}/g, (u) => String(e[u.slice(1, -1)]));
                }
                n(1281),
                    (function (u) {
                        (u[(u.left = 0)] = 'left'), (u[(u.right = 1)] = 'right');
                    })(E || (E = {})),
                    new RegExp(
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
                var F = n(9916),
                    c = n(8613);
                const l = 1e3,
                    D = 86400;
                Date.now(), c.Ew.getRegionalDateTime, c.Ew.getFormattedDateTime;
                const _ = () => {};
                var d = n(9768);
                const B = (u = 1) => {
                        const e = new Error().stack;
                        let n,
                            t = R.invalid('resId');
                        return (
                            e &&
                                ((n = e.split('\n')[u].split('.js')[0].split('/').pop() || ''),
                                window.__feature &&
                                    window.__feature !== n &&
                                    window.subViews[n] &&
                                    (t = window.subViews[n].id)),
                            { caller: n, stack: e, resId: t }
                        );
                    },
                    C = (u, e) => u.split('.').reduce((u, e) => u && u[e], e),
                    m = (u) => u && 'ArrayItem' === u.__proto__.constructor.name,
                    w = (u, e) => (u.length > 0 ? `${u}.${e}` : e),
                    h = F.Sw.instance;
                let v;
                !(function (u) {
                    (u.None = 'None'), (u.Shallow = 'Shallow'), (u.Deep = 'Deep');
                })(v || (v = {}));
                const p = (u = 'model', e = v.Deep) => {
                        const n = (0, t.useState)(0),
                            r = (n[0], n[1]),
                            i = (0, t.useMemo)(() => B(), []),
                            a = i.caller,
                            o = i.resId,
                            s = (0, t.useMemo)(
                                () => (window.__feature && window.__feature !== a ? `subViews.${a}.${u}` : u),
                                [a, u],
                            ),
                            E = (0, t.useState)(() =>
                                ((u) => {
                                    const e = C(u, window);
                                    for (const u in e) 'function' == typeof e[u] && (e[u] = e[u].bind(e));
                                    return m(e) ? e.value : e;
                                })(
                                    ((u) =>
                                        ((u, e) =>
                                            u.split('.').reduce((u, e) => {
                                                const n = C(`${u}.${e}`, window);
                                                return m(n) ? ((u, e) => `${u}.${e}.value`)(u, e) : `${u}.${e}`;
                                            }))(u))(s),
                                ),
                            ),
                            A = E[0],
                            F = E[1],
                            c = (0, t.useRef)(-1);
                        return (
                            ((u) => {
                                const e = (0, t.useRef)(!1);
                                e.current || (u(), (e.current = !0));
                            })(() => {
                                if (
                                    ('boolean' == typeof e &&
                                        ((e = e ? v.Deep : v.None),
                                        console.warn(
                                            'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                        )),
                                    e !== v.None)
                                ) {
                                    const n = (u) => {
                                            ((u) => u && 'CoherentArrayProxy' === u.__proto__.constructor.name)(u) &&
                                            e === v.Deep
                                                ? (u === A && r((u) => u + 1), F(u))
                                                : F(Object.assign([], u));
                                        },
                                        t = ((u) => {
                                            const e = ((u) => {
                                                    const e = B(),
                                                        n = e.caller,
                                                        t = e.resId,
                                                        r =
                                                            window.__feature && window.__feature !== n && n
                                                                ? `subViews.${n}`
                                                                : '';
                                                    return { modelPrefix: r, modelPath: w(r, ''), resId: t };
                                                })(),
                                                n = e.modelPrefix,
                                                t = u.split('.');
                                            if (t.length > 0) {
                                                const u = [t[0]];
                                                return (
                                                    t.reduce((e, t) => {
                                                        const r = C(w(n, `${e}.${t}`), window);
                                                        return m(r)
                                                            ? (u.push(r.id), `${e}.${t}.value`)
                                                            : (u.push(t), `${e}.${t}`);
                                                    }),
                                                    u.reduce((u, e) => u + '.' + e)
                                                );
                                            }
                                            return '';
                                        })(u);
                                    c.current = h.addCallback(t, n, o, e === v.Deep);
                                }
                            }),
                            (0, t.useEffect)(() => {
                                if (e !== v.None)
                                    return () => {
                                        h.removeCallback(c.current, o);
                                    };
                            }, [o, e]),
                            A
                        );
                    },
                    f =
                        (F.Sw.instance,
                        (u = 0, e, n = 0, r = _) => {
                            const i = (0, t.useState)(u),
                                a = i[0],
                                o = i[1];
                            return (
                                (0, t.useEffect)(() => {
                                    if (u > 0) {
                                        o(u);
                                        const t = Date.now(),
                                            i = setInterval(
                                                () => {
                                                    const e = u - Math.floor((Date.now() - t) / l);
                                                    null !== n && e <= n ? (o(n), r && r(), clearInterval(i)) : o(e);
                                                },
                                                (e || (u > 120 ? 60 : 1)) * l,
                                            );
                                        return () => {
                                            clearInterval(i);
                                        };
                                    }
                                }, [u, e, n, r]),
                                a
                            );
                        });
                let b, g;
                function y(u) {
                    engine.call('PlaySound', u).catch((e) => {
                        console.error('[lib/sounds.js] playSound(', u, '): ', e);
                    });
                }
                !(function (u) {
                    (u[(u.HighRisk = 1)] = 'HighRisk'),
                        (u[(u.MediumRisk = 2)] = 'MediumRisk'),
                        (u[(u.LowRisk = 3)] = 'LowRisk');
                })(b || (b = {})),
                    (function (u) {
                        (u.Announce = 'announce'),
                            (u.Active = 'active'),
                            (u.Finished = 'finished'),
                            (u.Frozen = 'frozen');
                    })(g || (g = {}));
                const k = {
                    playHighlight() {
                        y('highlight');
                    },
                    playClick() {
                        y('play');
                    },
                    playYes() {
                        y('yes1');
                    },
                };
                var S = n(7030);
                let T;
                !(function (u) {
                    (u.Big = 'big'),
                        (u.WideSmall = 'wideSmall'),
                        (u.ThinSmall = 'thinSmall'),
                        (u.ThinExtraSmall = 'thinExtraSmall');
                })(T || (T = {}));
                const O = {
                        '302*152': T.Big,
                        '302*114': T.WideSmall,
                        '222*114': T.ThinSmall,
                        '162*114': T.ThinExtraSmall,
                    },
                    x = { [T.Big]: 240, [T.WideSmall]: 240, [T.ThinSmall]: 180, [T.ThinExtraSmall]: 120 };
                let P;
                !(function (u) {
                    (u.Normal = 'normal'), (u.Hover = 'hover');
                })(P || (P = {}));
                const M = (u) => (u < 0.5 ? 4 * u * u * u : (u - 1) * (2 * u - 2) * (2 * u - 2) + 1),
                    L = (u) => u - Math.floor(Date.now() / l),
                    I = {
                        base: 'BannerContent_base_28',
                        icon: 'BannerContent_icon_a2',
                        icon__infoText: 'BannerContent_icon__infoText_98',
                        icon__frozen: 'BannerContent_icon__frozen_5a',
                        base__thinSmall: 'BannerContent_base__thinSmall_34',
                        base__wideSmall: 'BannerContent_base__wideSmall_09',
                        base__thinExtraSmall: 'BannerContent_base__thinExtraSmall_b3',
                        content: 'BannerContent_content_aa',
                        title: 'BannerContent_title_c3',
                        base__big: 'BannerContent_base__big_af',
                        info: 'BannerContent_info_a9',
                        base__frozen: 'BannerContent_base__frozen_2a',
                        timer: 'BannerContent_timer_9d',
                        timeIcon: 'BannerContent_timeIcon_8a',
                        lockIcon: 'BannerContent_lockIcon_c0',
                    },
                    N = (0, t.memo)(({ frontlineState: u, endDate: e, currentSize: n }) => {
                        const i = f(L(e), 60),
                            a = i < D,
                            o = u === g.Frozen,
                            E = (0, t.useRef)(null),
                            F = (0, t.useRef)(null),
                            c = (0, t.useRef)(null),
                            _ = (0, t.useState)(!0),
                            d = _[0],
                            B = _[1],
                            C = (0, t.useState)(!1),
                            m = C[0],
                            w = C[1],
                            h = (0, t.useMemo)(() => {
                                switch (u) {
                                    case g.Finished:
                                        return R.strings.fl_banner.chooseReward();
                                    case g.Frozen:
                                        return R.strings.fl_banner.battlesFrozen();
                                }
                                return '';
                            }, [u]),
                            v = (0, t.useMemo)(() => {
                                const n = R.strings.fl_banner.date,
                                    t = (() => {
                                        if (m && a) return n.justTime();
                                        switch (u) {
                                            case g.Announce:
                                                return a ? n.tillStart() : n.fromDate();
                                            case g.Active:
                                                return a ? n.battlesAvailable() : n.tillDate();
                                            case g.Finished:
                                            case g.Frozen:
                                                return a ? n.justTime() : n.tillDate();
                                        }
                                        return '';
                                    })(),
                                    r = new Date(e * l),
                                    s = r.getDate(),
                                    E = r.getMonth(),
                                    F = ((u, e) =>
                                        u.hours >= 1
                                            ? e && u.minutes >= 1
                                                ? `${A(R.strings.common.duration.hours(), { hours: u.hours })} ${A(R.strings.common.duration.minutes(), { minutes: u.minutes })}`
                                                : A(R.strings.common.duration.hours(), { hours: u.hours })
                                            : u.minutes >= 1
                                              ? A(R.strings.common.duration.minutes(), { minutes: u.minutes })
                                              : A(R.strings.fl_banner.date.lessThanMinute(), { minute: 1 }))(
                                        (function (u = 0) {
                                            let e = u;
                                            const n = Math.trunc(e / D);
                                            e -= n * D;
                                            const t = Math.trunc(e / 3600);
                                            e -= 3600 * t;
                                            const r = Math.trunc(e / 60);
                                            return (e -= 60 * r), { days: n, hours: t, minutes: r, seconds: e };
                                        })(i),
                                        o,
                                    ),
                                    c = { day: s, month: R.strings.menu.dateTime.months.$num(E + 1) };
                                return (
                                    (_ = a ? { time: F } : c),
                                    t.replace(/(\{|%\()\w+(\}|\)s)/g, (u) => {
                                        const e = 0 === u.indexOf('%') ? 2 : 1;
                                        return String(_[u.slice(e, -e)]);
                                    })
                                );
                                var _;
                            }, [u, e, i, a, o, m]);
                        (0, t.useEffect)(
                            () =>
                                ((u) => {
                                    let e,
                                        n = null;
                                    return (
                                        (n = requestAnimationFrame(() => {
                                            n = requestAnimationFrame(() => {
                                                (n = null),
                                                    (e = void (
                                                        E.current &&
                                                        F.current &&
                                                        (E.current.offsetHeight > 24 ||
                                                            (h && F.current.offsetHeight > 20)) &&
                                                        B(!1)
                                                    ));
                                            });
                                        })),
                                        () => {
                                            'function' == typeof e && e(), null !== n && cancelAnimationFrame(n);
                                        }
                                    );
                                })(),
                            [E, F, h, n],
                        ),
                            (0, t.useEffect)(() => {
                                c.current && c.current.offsetWidth > x[n] && w(!0);
                            }, [c, n]);
                        const p = s()(I.base, I[`base__${n}`], o && I.base__frozen),
                            b = s()(I.icon, h && I.icon__infoText, o && I.icon__frozen);
                        return r().createElement(
                            'div',
                            { className: p },
                            d && r().createElement('div', { className: b }),
                            r().createElement(
                                'div',
                                { className: I.content },
                                r().createElement('div', { className: I.title, ref: E }, R.strings.fl_banner.title()),
                                h && r().createElement('div', { className: I.info, ref: F }, h),
                            ),
                            r().createElement(
                                'div',
                                { className: I.timer, ref: c },
                                a &&
                                    (o
                                        ? r().createElement('div', { className: I.lockIcon })
                                        : r().createElement('div', { className: I.timeIcon })),
                                v,
                            ),
                        );
                    });
                let V, z, j;
                !(function (u) {
                    (u.HangarView = 'hangar'),
                        (u.SetupView = 'setup_view'),
                        (u.ProgressView = 'progress_view'),
                        (u.RewardsView = 'rewards_view'),
                        (u.RewardsSelectionView = 'rewards_selection_view'),
                        (u.SkillsView = 'skills_view'),
                        (u.AwardsView = 'awards_view'),
                        (u.ContainerView = 'container_view');
                })(V || (V = {})),
                    (function (u) {
                        (u.AbilitiesCheckboxTooltip = 'abilities_checkbox_tooltip'),
                            (u.EpicWidgetTooltip = 'epic_widget_tooltip'),
                            (u.BannerPerformance = 'banner_performance_tooltip'),
                            (u.SkillPointsTooltip = 'skill_points_tooltip'),
                            (u.AbilityLevelsTooltip = 'ability_levels_tooltip'),
                            (u.SkillOrderTooltip = 'skill_order_tooltip'),
                            (u.SkillLevelTab = 'skill_level_tab'),
                            (u.RewardsButton = 'rewards_button'),
                            (u.RewardsButtonTooltip = 'rewards_button_tooltip'),
                            (u.RewardTooltip = 'reward_tooltip'),
                            (u.AwardsOkButton = 'awards_ok'),
                            (u.AwardsView = 'awards_view'),
                            (u.RewardsSelectionView = 'rewards_selection_view');
                    })(z || (z = {})),
                    (function (u) {
                        (u.Click = 'click'), (u.Close = 'close');
                    })(j || (j = {}));
                const q = [
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
                function U(u) {
                    return Object.entries(u || {}).map(([u, e]) => {
                        const n = { __Type: 'GFValueProxy', name: u };
                        switch (typeof e) {
                            case 'number':
                                n.number = e;
                                break;
                            case 'boolean':
                                n.bool = e;
                                break;
                            case 'undefined':
                                break;
                            default:
                                n.string = e.toString();
                        }
                        return n;
                    });
                }
                const W = (u, e, n = {}, t = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: F.B0.TOOLTIP,
                                    contentID: u,
                                    decoratorID: e,
                                    targetID: t,
                                },
                                n,
                            ),
                        );
                    },
                    H = (u) => {
                        let e = u.children,
                            n = u.contentId,
                            r = u.args,
                            i = u.onMouseEnter,
                            a = u.onMouseLeave,
                            o = u.onMouseDown,
                            s = u.onClick,
                            E = u.ignoreShowDelay,
                            A = void 0 !== E && E,
                            F = u.ignoreMouseClick,
                            c = void 0 !== F && F,
                            l = u.decoratorId,
                            D = void 0 === l ? 0 : l,
                            _ = u.isEnabled,
                            d = void 0 === _ || _,
                            C = u.targetId,
                            m = void 0 === C ? 0 : C,
                            w = u.onShow,
                            h = u.onHide,
                            v = (function (u, e) {
                                if (null == u) return {};
                                var n,
                                    t,
                                    r = {},
                                    i = Object.keys(u);
                                for (t = 0; t < i.length; t++) (n = i[t]), e.indexOf(n) >= 0 || (r[n] = u[n]);
                                return r;
                            })(u, q);
                        const p = (0, t.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            f = (0, t.useMemo)(() => m || B().resId, [m]),
                            b = (0, t.useCallback)(() => {
                                (p.current.isVisible && p.current.timeoutId) ||
                                    (W(n, D, { isMouseEvent: !0, on: !0, arguments: U(r) }, f),
                                    w && w(),
                                    (p.current.isVisible = !0));
                            }, [n, D, r, f, w]),
                            g = (0, t.useCallback)(() => {
                                if (p.current.isVisible || p.current.timeoutId) {
                                    const u = p.current.timeoutId;
                                    u > 0 && (clearTimeout(u), (p.current.timeoutId = 0)),
                                        W(n, D, { on: !1 }, f),
                                        p.current.isVisible && h && h(),
                                        (p.current.isVisible = !1);
                                }
                            }, [n, D, f, h]),
                            y = (0, t.useCallback)((u) => {
                                p.current.isVisible &&
                                    ((p.current.prevTarget = document.elementFromPoint(u.clientX, u.clientY)),
                                    (p.current.hideTimerId = window.setTimeout(() => {
                                        const e = document.elementFromPoint(u.clientX, u.clientY);
                                        e && !e.isSameNode(p.current.prevTarget) && g();
                                    }, 200)));
                            }, []);
                        return (
                            (0, t.useEffect)(() => {
                                const u = p.current.hideTimerId;
                                return (
                                    document.addEventListener('wheel', y, { capture: !0 }),
                                    () => {
                                        document.removeEventListener('wheel', y, { capture: !0 }),
                                            u && window.clearTimeout(u);
                                    }
                                );
                            }, []),
                            (0, t.useEffect)(() => {
                                !1 === d && g();
                            }, [d, g]),
                            (0, t.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', g),
                                    () => {
                                        window.removeEventListener('mouseleave', g), g();
                                    }
                                ),
                                [g],
                            ),
                            d
                                ? (0, t.cloneElement)(
                                      e,
                                      Object.assign(
                                          {
                                              onMouseEnter:
                                                  ((k = e.props.onMouseEnter),
                                                  (u) => {
                                                      (u.clientX === window.innerWidth &&
                                                          u.clientY === window.innerHeight) ||
                                                          ((p.current.timeoutId = window.setTimeout(b, A ? 100 : 400)),
                                                          i && i(u),
                                                          k && k(u));
                                                  }),
                                              onMouseLeave: ((u) => (e) => {
                                                  g(), null == a || a(e), null == u || u(e);
                                              })(e.props.onMouseLeave),
                                              onClick: ((u) => (e) => {
                                                  !1 === c && g(), null == s || s(e), null == u || u(e);
                                              })(e.props.onClick),
                                              onMouseDown: ((u) => (e) => {
                                                  !1 === c && g(), null == o || o(e), null == u || u(e);
                                              })(e.props.onMouseDown),
                                          },
                                          v,
                                      ),
                                  )
                                : e
                        );
                        var k;
                    },
                    $ = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function G() {
                    return (
                        (G =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var n = arguments[e];
                                    for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (u[t] = n[t]);
                                }
                                return u;
                            }),
                        G.apply(this, arguments)
                    );
                }
                const K = R.views.common.tooltip_window.simple_tooltip_content,
                    Y = (u) => {
                        let e = u.children,
                            n = u.body,
                            i = u.header,
                            a = u.note,
                            o = u.alert,
                            s = u.args,
                            E = (function (u, e) {
                                if (null == u) return {};
                                var n,
                                    t,
                                    r = {},
                                    i = Object.keys(u);
                                for (t = 0; t < i.length; t++) (n = i[t]), e.indexOf(n) >= 0 || (r[n] = u[n]);
                                return r;
                            })(u, $);
                        const A = (0, t.useMemo)(() => {
                            const u = Object.assign({}, s, { body: n, header: i, note: a, alert: o });
                            for (const e in u) void 0 === u[e] && delete u[e];
                            return u;
                        }, [o, n, i, a, s]);
                        return r().createElement(
                            H,
                            G(
                                {
                                    contentId:
                                        ((F = null == s ? void 0 : s.hasHtmlContent),
                                        F ? K.SimpleTooltipHtmlContent('resId') : K.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: A,
                                },
                                E,
                            ),
                            e,
                        );
                        var F;
                    };
                let Z;
                !(function (u) {
                    (u[(u.NonSet = 0)] = 'NonSet'),
                        (u[(u.Debug = 10)] = 'Debug'),
                        (u[(u.Info = 20)] = 'Info'),
                        (u[(u.Warning = 30)] = 'Warning');
                })(Z || (Z = {}));
                const X = 'tooltip_watched';
                let Q;
                !(function (u) {
                    (u.Click = 'click'), (u.KeyDown = 'keydown'), (u.Displayed = 'displayed'), (u.Viewed = 'viewed');
                })(Q || (Q = {}));
                const J = () => Date.now(),
                    uu = (u, e) => {
                        const n = ((u, e) => {
                                const n = (0, t.useCallback)(
                                    (n, t = Z.Info, r) => {
                                        r || (r = {}),
                                            Object.keys(r).length >= 200 ||
                                                window.uiLoggerModel.log({
                                                    feature: u,
                                                    group: e,
                                                    action: n,
                                                    logLevel: t,
                                                    params: JSON.stringify(r),
                                                });
                                    },
                                    [u, e],
                                );
                                return (u, e, t) => n(u, e, t);
                            })(u, e),
                            r = (0, t.useRef)(new Map()),
                            i = (0, t.useRef)(new Map()),
                            a = (0, t.useCallback)(
                                (u) => {
                                    if (!u) return;
                                    const e = r.current.get(u);
                                    (void 0 !== e && e > 0) || r.current.set(u, J());
                                },
                                [r],
                            ),
                            o = (0, t.useCallback)(() => {
                                r.current.clear(), i.current.clear();
                            }, [r, i]),
                            s = (0, t.useCallback)(
                                (u) => {
                                    u &&
                                        void 0 !== r.current.get(u) &&
                                        void 0 === i.current.get(u) &&
                                        i.current.set(u, J());
                                },
                                [r, i],
                            ),
                            E = (0, t.useCallback)(
                                (u) => {
                                    if (!u) return;
                                    const e = r.current.get(u);
                                    if (void 0 === e) return;
                                    const n = i.current.get(u);
                                    if (void 0 === n) return;
                                    i.current.delete(u);
                                    const t = J() - n;
                                    r.current.set(u, e + t);
                                },
                                [r, i],
                            ),
                            A = (0, t.useCallback)(
                                (u, e = 0, t, a) => {
                                    const o = r.current.get(u);
                                    if (void 0 === o) return;
                                    void 0 !== i.current.get(u) && E(u), r.current.delete(u);
                                    const s = (J() - o) / 1e3;
                                    s <= e ||
                                        ((a = ((u, e) => (void 0 === u && (u = {}), (u.timeSpent = e), u))(a, s)),
                                        n(u, t, a));
                                },
                                [r, i, n, E],
                            );
                        return [(u) => a(u), (u, e, n, t) => A(u, e, n, t), () => o(), (u) => s(u), (u) => E(u)];
                    },
                    eu = ['children', 'item', 'parentScreen', 'itemState', 'info'];
                function nu() {
                    return (
                        (nu =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var n = arguments[e];
                                    for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (u[t] = n[t]);
                                }
                                return u;
                            }),
                        nu.apply(this, arguments)
                    );
                }
                const tu = (0, t.memo)((u) => {
                        let e = u.children,
                            n = u.item,
                            i = u.parentScreen,
                            a = u.itemState,
                            o = u.info,
                            s = (function (u, e) {
                                if (null == u) return {};
                                var n,
                                    t,
                                    r = {},
                                    i = Object.keys(u);
                                for (t = 0; t < i.length; t++) (n = i[t]), e.indexOf(n) >= 0 || (r[n] = u[n]);
                                return r;
                            })(u, eu);
                        const E = ((u, e, n, r) => {
                                const i = ((u) => {
                                        const e = uu(u, 'metrics'),
                                            n = e[0],
                                            r = e[1],
                                            i = e[2],
                                            a = e[3],
                                            o = e[4],
                                            s = (0, t.useCallback)(
                                                (u) => {
                                                    const e = u.action,
                                                        n = u.timeLimit,
                                                        t = u.logLevel;
                                                    r(
                                                        e,
                                                        n,
                                                        t,
                                                        (({
                                                            partnerID: u,
                                                            item: e,
                                                            parentScreen: n,
                                                            itemState: t,
                                                            info: r,
                                                        }) => ({
                                                            item: e,
                                                            partnerID: u || null,
                                                            parent_screen: n || null,
                                                            item_state: t || null,
                                                            additional_info: r || null,
                                                        }))(u),
                                                    );
                                                },
                                                [r],
                                            );
                                        return [(u) => n(u), (u) => s(u), () => i(), (u) => a(u), (u) => o(u)];
                                    })('epic_battle'),
                                    a = i[0],
                                    o = i[1];
                                return [
                                    (0, t.useCallback)(() => a(X), [a]),
                                    (0, t.useCallback)(
                                        () =>
                                            o({
                                                action: X,
                                                timeLimit: 2,
                                                item: u,
                                                parentScreen: e,
                                                itemState: n,
                                                info: r,
                                            }),
                                        [o, u, e, n, r],
                                    ),
                                ];
                            })(n, i, a, o),
                            A = E[0],
                            F = E[1];
                        return r().createElement(Y, nu({}, s, { onMouseEnter: A, onMouseLeave: F }), e);
                    }),
                    ru = {
                        base: 'BannerPerformanceRisk_base_5a',
                        base__thinSmall: 'BannerPerformanceRisk_base__thinSmall_25',
                        base__wideSmall: 'BannerPerformanceRisk_base__wideSmall_18',
                        base__thinExtraSmall: 'BannerPerformanceRisk_base__thinExtraSmall_1e',
                        performanceIcon: 'BannerPerformanceRisk_performanceIcon_94',
                        base__performanceType1: 'BannerPerformanceRisk_base__performanceType1_ac',
                        base__performanceType2: 'BannerPerformanceRisk_base__performanceType2_6a',
                    },
                    iu = (0, t.memo)(({ performanceRisk: u, currentSize: e }) => {
                        const n =
                                u === b.MediumRisk
                                    ? R.strings.fl_banner.tooltips.mediumRisk
                                    : R.strings.fl_banner.tooltips.highRisk,
                            t = {
                                item: z.BannerPerformance,
                                parentScreen: V.HangarView,
                                info: u.toString(),
                                header: n.title(),
                                body: n.body(),
                            },
                            i = s()(ru.base, ru[`base__performanceType${u}`], ru[`base__${e}`]);
                        return r().createElement(
                            'div',
                            { className: i },
                            r().createElement(tu, t, r().createElement('div', { className: ru.performanceIcon })),
                        );
                    }),
                    au = [
                        'width',
                        'height',
                        'getImageSource',
                        'frameCount',
                        'onAnimate',
                        'frameTime',
                        'initialFrameIndex',
                        'lastFrameIndex',
                        'loop',
                        'state',
                        'onAnimationDone',
                        'onAnimationComplete',
                        'poster',
                    ];
                function ou() {
                    return (
                        (ou =
                            Object.assign ||
                            function (u) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var n = arguments[e];
                                    for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (u[t] = n[t]);
                                }
                                return u;
                            }),
                        ou.apply(this, arguments)
                    );
                }
                const su = (0, t.memo)(function (u) {
                        let e = u.width,
                            n = u.height,
                            i = u.getImageSource,
                            a = u.frameCount,
                            o = u.onAnimate,
                            s = u.frameTime,
                            E = void 0 === s ? 33 : s,
                            A = u.initialFrameIndex,
                            F = void 0 === A ? 0 : A,
                            c = u.lastFrameIndex,
                            l = void 0 === c ? a - 1 : c,
                            D = u.loop,
                            _ = void 0 === D || D,
                            d = u.state,
                            B = void 0 === d ? 'play' : d,
                            C = u.onAnimationDone,
                            m = u.onAnimationComplete,
                            w = u.poster,
                            h = (function (u, e) {
                                if (null == u) return {};
                                var n,
                                    t,
                                    r = {},
                                    i = Object.keys(u);
                                for (t = 0; t < i.length; t++) (n = i[t]), e.indexOf(n) >= 0 || (r[n] = u[n]);
                                return r;
                            })(u, au);
                        const v = (0, t.useRef)(null);
                        return (
                            (0, t.useEffect)(() => {
                                const u = v.current;
                                if (!u) return;
                                const e = u.getContext('2d'),
                                    n = (n) => {
                                        e.clearRect(0, 0, u.width, u.height), e.drawImage(n.img, -n.x, -n.y);
                                    };
                                switch (B) {
                                    case 'play':
                                        return (function () {
                                            const u = Fu(F, l, i),
                                                e = Eu(F, l),
                                                t = window.setInterval(() => {
                                                    const r = e(),
                                                        i = u.get(r);
                                                    i
                                                        ? (null == o || o(r, i),
                                                          n(i),
                                                          r === l &&
                                                              (null == m || m(),
                                                              _ || (null == C || C(), window.clearInterval(t))))
                                                        : console.error(
                                                              'frameImage was not provided in frameImages Map',
                                                          );
                                                }, E);
                                            return () => window.clearInterval(t);
                                        })();
                                    case 'stop':
                                        return (function () {
                                            const u = 0 === F && w ? { path: w, x: 0, y: 0 } : i(F),
                                                e = new Image();
                                            e.src = u.path;
                                            const t = () => n(Au(u, e));
                                            return (
                                                e.addEventListener('load', t), () => e.removeEventListener('load', t)
                                            );
                                        })();
                                    default:
                                        return console.error('[CanvasSequence] Unreachable state!');
                                }
                            }, [E, i, F, l, _, o, m, C, w, B]),
                            r().createElement('canvas', ou({}, h, { width: e, height: n, ref: v }))
                        );
                    }),
                    Eu = (u, e) => {
                        let n = u;
                        return () => {
                            const t = n;
                            return (n += 1), n > e && (n = u), t;
                        };
                    },
                    Au = (u, e) => Object.assign({}, u, { img: e }),
                    Fu = (u, e, n) => {
                        const t = new Map(),
                            r = {};
                        for (let i = u; i <= e; i++) {
                            const u = n(i),
                                e = r[u.path];
                            if (e) t.set(i, Au(u, e));
                            else {
                                const e = new Image();
                                (r[u.path] = e),
                                    (e.src = u.path),
                                    (e.onerror = () => {
                                        console.error(
                                            `[CanvasSequence] Error loading image(${i})`,
                                            u.path,
                                            `(${u.x},${u.y})`,
                                        );
                                    }),
                                    t.set(i, Au(u, e));
                            }
                        }
                        return t;
                    },
                    cu = {
                        base: 'BannerSequence_base_fa',
                        sparks: 'BannerSequence_sparks_2e',
                        base__thinSmall: 'BannerSequence_base__thinSmall_ef',
                        base__thinExtraSmall: 'BannerSequence_base__thinExtraSmall_0c',
                        base__gray: 'BannerSequence_base__gray_20',
                    },
                    lu = (0, t.memo)(
                        ({ type: u = P.Normal, cardSize: e = T.Big, isGray: n = !1, isPerformanceRisk: t = !1 }) => {
                            const i = {
                                width: 300,
                                height: 150,
                                frameCount: 67,
                                chunk: { count: 1, columns: 6, rows: 12 },
                                getChunkPath:
                                    ((a = `R.images.frontline.gui.maps.banner.sequence.sparks_${u}_`),
                                    (u) => `${a}${u}`),
                            };
                            var a;
                            const o = (function (u) {
                                const e = u.chunk,
                                    n = e.rows * e.columns;
                                return (t) => {
                                    const r = t % n,
                                        i = (r % e.columns) * u.width,
                                        a = Math.trunc(r / e.columns) * u.height;
                                    return { path: u.getChunkPath(Math.trunc(t / n)), x: i, y: a };
                                };
                            })(i);
                            return r().createElement(
                                'div',
                                { className: s()(cu.base, cu[`base__${e}`], n && cu.base__gray) },
                                r().createElement(su, {
                                    state: t ? 'stop' : 'play',
                                    className: cu.sparks,
                                    width: i.width,
                                    height: i.height,
                                    frameCount: i.frameCount,
                                    getImageSource: o,
                                }),
                            );
                        },
                    ),
                    Du = (0, t.memo)(
                        ({
                            children: u,
                            isVisible: e = !0,
                            delay: n = 0,
                            duration: t = 800,
                            opacityFrom: i = 0,
                            opacityEnter: a = 1,
                            opacityLeave: o = 0,
                            classMix: s,
                        }) =>
                            (0, S.useTransition)(e, {
                                key: e,
                                from: { opacity: i },
                                enter: { opacity: a },
                                leave: { opacity: o },
                                delay: n,
                                config: { duration: t, easing: M },
                            })((e, n) => n && r().createElement(S.animated.div, { className: s, style: e }, u)),
                    ),
                    _u = {
                        base: 'BannerApp_base_ff',
                        bg: 'BannerApp_bg_6c',
                        base__hover: 'BannerApp_base__hover_d2',
                        base__frozen: 'BannerApp_base__frozen_18',
                        base__big: 'BannerApp_base__big_3d',
                        base__wideSmall: 'BannerApp_base__wideSmall_73',
                        base__thinSmall: 'BannerApp_base__thinSmall_63',
                        base__thinExtraSmall: 'BannerApp_base__thinExtraSmall_ad',
                        sequence: 'BannerApp_sequence_b0',
                        stroke: 'BannerApp_stroke_5b',
                        highlight: 'BannerApp_highlight_bb',
                        hoverEffect: 'BannerApp_hoverEffect_07',
                        frozen: 'BannerApp_frozen_a3',
                        rewardsCornerLight: 'BannerApp_rewardsCornerLight_11',
                        rewards: 'BannerApp_rewards_f9',
                        rewardShadow: 'BannerApp_rewardShadow_8c',
                        rewardIcon: 'BannerApp_rewardIcon_69',
                        rewardLabel: 'BannerApp_rewardLabel_26',
                        pressed: 'BannerApp_pressed_2d',
                    },
                    du = () => {
                        const u = p(),
                            e = u.frontlineState,
                            n = u.phaseEndDate,
                            i = u.rewardsCount,
                            a = u.performanceRisk,
                            o = u.onClick,
                            E = (0, t.useState)(!1),
                            A = E[0],
                            F = E[1],
                            c = (0, t.useCallback)(() => {
                                k.playHighlight(), F(!0);
                            }, []),
                            l = (0, t.useCallback)(() => {
                                F(!1);
                            }, []),
                            _ = (0, t.useCallback)(() => {
                                k.playClick(), o();
                            }, [o]),
                            B = (() => {
                                const u = d.O.view.getSize('rem'),
                                    e = (0, t.useState)({ height: u.height, width: u.width }),
                                    n = e[0],
                                    r = e[1];
                                return (
                                    (0, t.useEffect)(() => {
                                        const u = (u) => {
                                            r(u);
                                        };
                                        return (
                                            engine.on('screenResized', u),
                                            () => {
                                                engine.off('screenResized', u);
                                            }
                                        );
                                    }, []),
                                    n
                                );
                            })(),
                            C = B.width,
                            m = B.height,
                            w = O[`${C}*${m}`] || T.Big,
                            h = L(n) < D,
                            v = e === g.Frozen,
                            f = e === g.Finished && i,
                            y = a !== b.LowRisk,
                            R = (0, S.useSpring)({
                                from: { x: 10, opacity: 0 },
                                to: { x: 0, opacity: 1 },
                                delay: 0,
                                config: { duration: 800, easing: M },
                            }),
                            x = s()(_u.base, _u[`base__${w}`], v && _u.base__frozen, A && _u.base__hover);
                        return r().createElement(
                            S.animated.div,
                            { className: x, onClick: _, onMouseLeave: l, onMouseEnter: c, style: R },
                            r().createElement('div', { className: _u.bg }),
                            r().createElement('div', { className: _u.stroke }),
                            r().createElement(
                                Du,
                                { classMix: _u.sequence, isVisible: A },
                                r().createElement(lu, { type: P.Hover, cardSize: w, isPerformanceRisk: y, isGray: v }),
                            ),
                            r().createElement(Du, { classMix: _u.hoverEffect, isVisible: A }),
                            v
                                ? r().createElement('div', { className: _u.frozen })
                                : h && r().createElement('div', { className: _u.highlight }),
                            y
                                ? r().createElement(iu, { performanceRisk: a, currentSize: w })
                                : r().createElement(
                                      Du,
                                      { classMix: _u.sequence, isVisible: !A },
                                      r().createElement(lu, { type: P.Normal, cardSize: w, isGray: v }),
                                  ),
                            r().createElement(N, { frontlineState: e, endDate: n, currentSize: w }),
                            f &&
                                r().createElement(
                                    r().Fragment,
                                    null,
                                    r().createElement(
                                        'div',
                                        { className: _u.rewards },
                                        r().createElement('div', { className: _u.rewardShadow }),
                                        r().createElement('div', { className: _u.rewardIcon }),
                                        r().createElement('div', { className: _u.rewardLabel }, i),
                                    ),
                                    r().createElement('div', { className: _u.rewardsCornerLight }),
                                ),
                            r().createElement('div', { className: _u.pressed }),
                        );
                    };
                engine.whenReady.then(() => {
                    a().render(r().createElement(du, null), document.getElementById('root'));
                });
            },
        },
        __webpack_module_cache__ = {},
        deferred;
    function __webpack_require__(u) {
        var e = __webpack_module_cache__[u];
        if (void 0 !== e) return e.exports;
        var n = (__webpack_module_cache__[u] = { exports: {} });
        return __webpack_modules__[u](n, n.exports, __webpack_require__), n.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (u, e, n, t) => {
            if (!e) {
                var r = 1 / 0;
                for (s = 0; s < deferred.length; s++) {
                    for (var [e, n, t] = deferred[s], i = !0, a = 0; a < e.length; a++)
                        (!1 & t || r >= t) &&
                        Object.keys(__webpack_require__.O).every((u) => __webpack_require__.O[u](e[a]))
                            ? e.splice(a--, 1)
                            : ((i = !1), t < r && (r = t));
                    if (i) {
                        deferred.splice(s--, 1);
                        var o = n();
                        void 0 !== o && (u = o);
                    }
                }
                return u;
            }
            t = t || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > t; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [e, n, t];
        }),
        (__webpack_require__.n = (u) => {
            var e = u && u.__esModule ? () => u.default : () => u;
            return __webpack_require__.d(e, { a: e }), e;
        }),
        (__webpack_require__.d = (u, e) => {
            for (var n in e)
                __webpack_require__.o(e, n) &&
                    !__webpack_require__.o(u, n) &&
                    Object.defineProperty(u, n, { enumerable: !0, get: e[n] });
        }),
        (__webpack_require__.g = (function () {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (u) {
                if ('object' == typeof window) return window;
            }
        })()),
        (__webpack_require__.o = (u, e) => Object.prototype.hasOwnProperty.call(u, e)),
        (__webpack_require__.r = (u) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(u, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(u, '__esModule', { value: !0 });
        }),
        (__webpack_require__.j = 301),
        (() => {
            var u = { 301: 0 };
            __webpack_require__.O.j = (e) => 0 === u[e];
            var e = (e, n) => {
                    var t,
                        r,
                        [i, a, o] = n,
                        s = 0;
                    if (i.some((e) => 0 !== u[e])) {
                        for (t in a) __webpack_require__.o(a, t) && (__webpack_require__.m[t] = a[t]);
                        if (o) var E = o(__webpack_require__);
                    }
                    for (e && e(n); s < i.length; s++)
                        (r = i[s]), __webpack_require__.o(u, r) && u[r] && u[r][0](), (u[r] = 0);
                    return __webpack_require__.O(E);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [503], () => __webpack_require__(7735));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
