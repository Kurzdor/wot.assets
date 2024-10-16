(() => {
    var __webpack_modules__ = {
            926: (e) => {
                e.exports = {
                    SMALL_WIDTH: 'mediaSmallWidth',
                    MEDIUM_WIDTH: 'mediaMediumWidth',
                    LARGE_WIDTH: 'mediaLargeWidth',
                    EXTRA_LARGE_WIDTH: 'mediaExtraLargeWidth',
                    SMALL_HEIGHT: 'mediaSmallHeight',
                    MEDIUM_HEIGHT: 'mediaMediumHeight',
                    LARGE_HEIGHT: 'mediaLargeHeight',
                    EXTRA_LARGE_HEIGHT: 'mediaExtraLargeHeight',
                    SMALL: 'mediaSmall',
                    MEDIUM: 'mediaMedium',
                    LARGE: 'mediaLarge',
                    EXTRA_LARGE: 'mediaExtraLarge',
                };
            },
            326: (e, t, n) => {
                'use strict';
                n.d(t, { O: () => ne });
                var r = {};
                n.r(r),
                    n.d(r, { mouse: () => g, off: () => _, on: () => d, onResize: () => c, onScaleUpdated: () => u });
                var a = {};
                n.r(a),
                    n.d(a, {
                        events: () => r,
                        getMouseGlobalPosition: () => v,
                        getSize: () => p,
                        graphicsQuality: () => f,
                        playSound: () => E,
                        setRTPC: () => h,
                    });
                var i = {};
                n.r(i), n.d(i, { getBgUrl: () => S, getTextureUrl: () => T });
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
                        addModelObserver: () => U,
                        addPreloadTexture: () => D,
                        children: () => i,
                        displayStatus: () => R.W,
                        displayStatusIs: () => J,
                        events: () => O,
                        extraSize: () => ee,
                        forceTriggerMouseMove: () => Q,
                        freezeTextureBeforeResize: () => $,
                        getBrowserTexturePath: () => B,
                        getDisplayStatus: () => Z,
                        getScale: () => V,
                        getSize: () => G,
                        getViewGlobalPosition: () => F,
                        isEventHandled: () => K,
                        isFocused: () => z,
                        pxToRem: () => q,
                        remToPx: () => Y,
                        resize: () => W,
                        sendEvent: () => C,
                        setAnimateWindow: () => j,
                        setEventHandled: () => X,
                        setInputPaddingsRem: () => A,
                        setSidePaddingsRem: () => H,
                        whenTutorialReady: () => te,
                    });
                const c = s('clientResized'),
                    u = s('self.onScaleUpdated'),
                    d = (e, t) => engine.on(e, t),
                    _ = (e, t) => engine.off(e, t),
                    m = { down: s('mousedown'), up: s('mouseup'), move: s('mousemove') };
                const g = (function () {
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
                    const a = ['down', 'up', 'move'].reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                return (n) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const i = `mouse${t}`,
                                        o = m[t]((e) => n([e, 'outside']));
                                    function s(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, s),
                                        r(),
                                        () => {
                                            a &&
                                                (o(),
                                                window.removeEventListener(i, s),
                                                (e.listeners -= 1),
                                                r(),
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
                function E(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function h(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((n) => {
                        console.error(`setRTPC('${e}', '${t}'): `, n);
                    });
                }
                function p(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function v(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const f = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    w = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    b = Object.keys(w).reduce((e, t) => ((e[t] = () => E(w[t])), e), {}),
                    y = { play: Object.assign({}, b, { sound: E }), setRTPC: h };
                function T(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function S(e, t, n) {
                    return `url(${T(e, t, n)})`;
                }
                var R = n(112);
                const O = {
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
                    P = ['args'];
                const x = 2,
                    L = 16,
                    M = 32,
                    k = 64,
                    I = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n = {};
                                    for (var r in e)
                                        if ({}.hasOwnProperty.call(e, r)) {
                                            if (t.indexOf(r) >= 0) continue;
                                            n[r] = e[r];
                                        }
                                    return n;
                                })(t, P);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
                                          arguments:
                                              ((r = a),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: n, type: e });
                        var r;
                    },
                    C = {
                        close(e) {
                            I('popover' === e ? x : M);
                        },
                        minimize() {
                            I(k);
                        },
                        move(e) {
                            I(L, { isMouseEvent: !0, on: e });
                        },
                    },
                    N = 15;
                function D(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function A(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, N);
                }
                function B(e, t, n, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, r);
                }
                function U(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function H(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, N);
                }
                function G(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function W(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function F(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: Y(t.x), y: Y(t.y) };
                }
                function $() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function V() {
                    return viewEnv.getScale();
                }
                function q(e) {
                    return viewEnv.pxToRem(e);
                }
                function Y(e) {
                    return viewEnv.remToPx(e);
                }
                function j(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function z() {
                    return viewEnv.isFocused();
                }
                function X() {
                    return viewEnv.setEventHandled();
                }
                function K() {
                    return viewEnv.isEventHandled();
                }
                function Q() {
                    viewEnv.forceTriggerMouseMove();
                }
                function Z() {
                    return viewEnv.getShowingStatus();
                }
                const J = Object.keys(R.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === R.W[t]), e),
                        {},
                    ),
                    ee = {
                        set: (e, t) => {
                            viewEnv.setExtraSizeRem(e, t);
                        },
                        get: (e, t) => {
                            viewEnv.getExtraSizeRem(e, t);
                        },
                    },
                    te = Promise.all([
                        new Promise((e) => {
                            window.isDomBuilt ? e() : O.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    ne = { view: o, client: a, sound: y };
            },
            112: (e, t, n) => {
                'use strict';
                n.d(t, { W: () => r });
                const r = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            521: (e, t, n) => {
                'use strict';
                let r, a;
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
                    })(a || (a = {}));
            },
            358: (e, t, n) => {
                'use strict';
                n.d(t, { Z: () => i });
                var r = n(326);
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
                        const i = r.O.view.addModelObserver(e, n, a);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = t),
                                  n > 0 && (this._views[n] ? this._views[n].push(i) : (this._views[n] = [i])))
                                : console.error("Can't add callback for model:", e),
                            i
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
                a.__instance = void 0;
                const i = a;
            },
            572: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                'use strict';
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
                'use strict';
                n.d(t, { B3: () => l, Z5: () => o.Z5, B0: () => s, ry: () => p });
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
                const a = r;
                var i = n(358);
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
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = n(521),
                    m = n(326);
                const g = ['args'];
                function E(e, t, n, r, a, i, o) {
                    try {
                        var s = e[i](o),
                            l = s.value;
                    } catch (e) {
                        return void n(e);
                    }
                    s.done ? t(l) : Promise.resolve(l).then(r, a);
                }
                const h = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    p = (function () {
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
                                    return new Promise(function (r, a) {
                                        var i = e.apply(t, n);
                                        function o(e) {
                                            E(i, r, a, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            E(i, r, a, o, s, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    v = (e, t) => {
                        const n = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var n = {};
                                    for (var r in e)
                                        if ({}.hasOwnProperty.call(e, r)) {
                                            if (t.indexOf(r) >= 0) continue;
                                            n[r] = e[r];
                                        }
                                    return n;
                                })(t, g);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: n, type: e }, i, {
                                          arguments:
                                              ((r = a),
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
                                : viewEnv.handleViewEvent(Object.assign({ __Type: n, type: e }, i));
                        } else viewEnv.handleViewEvent({ __Type: n, type: e });
                        var r;
                    },
                    f = () => v(s.CLOSE),
                    w = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var b = n(572);
                const y = a.instance,
                    T = {
                        DataTracker: i.Z,
                        ViewModel: b.Z,
                        ViewEventType: s,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: u,
                        DateFormatType: d,
                        makeGlobalBoundingBox: h,
                        sendMoveEvent: (e) => v(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: f,
                        sendClosePopOverEvent: () => v(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            v(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, r, a = R.invalid('resId'), i) => {
                            const o = m.O.view.getViewGlobalPosition(),
                                l = n.getBoundingClientRect(),
                                c = l.x,
                                u = l.y,
                                d = l.width,
                                _ = l.height,
                                g = {
                                    x: m.O.view.pxToRem(c) + o.x,
                                    y: m.O.view.pxToRem(u) + o.y,
                                    width: m.O.view.pxToRem(d),
                                    height: m.O.view.pxToRem(_),
                                };
                            v(s.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: a,
                                direction: t,
                                bbox: h(g),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => w(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            w(e, f);
                        },
                        handleViewEvent: v,
                        onBindingsReady: p,
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
                                    const a = Object.prototype.toString.call(t[r]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = t[r];
                                        n[r] = [];
                                        for (let t = 0; t < a.length; t++) n[r].push({ value: e(a[t].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (n[r] = e(t[r]))
                                            : (n[r] = t[r]);
                                }
                            return n;
                        },
                        ClickOutsideManager: y,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = T;
            },
            613: (e, t, n) => {
                'use strict';
                n.d(t, { Z5: () => r, cy: () => a });
                const r = {
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
            711: (e, t, n) => {
                'use strict';
                var r = n(179),
                    a = n.n(r);
                const i = (e, t, n) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && n.extraLarge) ||
                          (t.largeHeight && n.large) ||
                          (t.mediumHeight && n.medium) ||
                          (t.smallHeight && n.small) ||
                          (t.extraSmallHeight && n.extraSmall)
                            ? e
                            : null
                        : e;
                var o = n(326);
                const s = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var l;
                function c(e, t, n) {
                    const r = (function (e, t) {
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
                        i = Math.min(r, a);
                    return {
                        extraLarge: i === n.extraLarge.weight,
                        large: i === n.large.weight,
                        medium: i === n.medium.weight,
                        small: i === n.small.weight,
                        extraSmall: i === n.extraSmall.weight,
                        extraLargeWidth: r === n.extraLarge.weight,
                        largeWidth: r === n.large.weight,
                        mediumWidth: r === n.medium.weight,
                        smallWidth: r === n.small.weight,
                        extraSmallWidth: r === n.extraSmall.weight,
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
                })(l || (l = {}));
                const u = o.O.client.getSize('rem'),
                    d = u.width,
                    _ = u.height,
                    m = Object.assign({ width: d, height: _ }, c(d, _, s)),
                    g = (0, r.createContext)(m),
                    E = ['children'];
                const h = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var r in e)
                                if ({}.hasOwnProperty.call(e, r)) {
                                    if (t.indexOf(r) >= 0) continue;
                                    n[r] = e[r];
                                }
                            return n;
                        })(e, E);
                    const a = (0, r.useContext)(g),
                        o = a.extraLarge,
                        s = a.large,
                        l = a.medium,
                        c = a.small,
                        u = a.extraSmall,
                        d = a.extraLargeWidth,
                        _ = a.largeWidth,
                        m = a.mediumWidth,
                        h = a.smallWidth,
                        p = a.extraSmallWidth,
                        v = a.extraLargeHeight,
                        f = a.largeHeight,
                        w = a.mediumHeight,
                        b = a.smallHeight,
                        y = a.extraSmallHeight,
                        T = { extraLarge: v, large: f, medium: w, small: b, extraSmall: y };
                    if (n.extraLarge || n.large || n.medium || n.small || n.extraSmall) {
                        if (n.extraLarge && o) return t;
                        if (n.large && s) return t;
                        if (n.medium && l) return t;
                        if (n.small && c) return t;
                        if (n.extraSmall && u) return t;
                    } else {
                        if (n.extraLargeWidth && d) return i(t, n, T);
                        if (n.largeWidth && _) return i(t, n, T);
                        if (n.mediumWidth && m) return i(t, n, T);
                        if (n.smallWidth && h) return i(t, n, T);
                        if (n.extraSmallWidth && p) return i(t, n, T);
                        if (
                            !(n.extraLargeWidth || n.largeWidth || n.mediumWidth || n.smallWidth || n.extraSmallWidth)
                        ) {
                            if (n.extraLargeHeight && v) return t;
                            if (n.largeHeight && f) return t;
                            if (n.mediumHeight && w) return t;
                            if (n.smallHeight && b) return t;
                            if (n.extraSmallHeight && y) return t;
                        }
                    }
                    return null;
                };
                h.defaultProps = {
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
                (0, r.memo)(h);
                const p = (e) => {
                        const t = (0, r.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    v = ({ children: e }) => {
                        const t = (0, r.useContext)(g),
                            n = (0, r.useState)(t),
                            i = n[0],
                            l = n[1],
                            u = (0, r.useCallback)((e, t) => {
                                const n = o.O.view.pxToRem(e),
                                    r = o.O.view.pxToRem(t);
                                l(Object.assign({ width: n, height: r }, c(n, r, s)));
                            }, []),
                            d = (0, r.useCallback)(() => {
                                const e = o.O.client.getSize('px');
                                u(e.width, e.height);
                            }, [u]);
                        p(() => {
                            o.O.client.events.on('clientResized', u), o.O.client.events.on('self.onScaleUpdated', d);
                        }),
                            (0, r.useEffect)(
                                () => () => {
                                    o.O.client.events.off('clientResized', u),
                                        o.O.client.events.off('self.onScaleUpdated', d);
                                },
                                [u, d],
                            );
                        const _ = (0, r.useMemo)(() => Object.assign({}, i), [i]);
                        return a().createElement(g.Provider, { value: _ }, e);
                    };
                var f = n(483),
                    w = n.n(f),
                    b = n(926),
                    y = n.n(b);
                let T, S, O;
                !(function (e) {
                    (e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = s.small.width)] = 'Small'),
                        (e[(e.Medium = s.medium.width)] = 'Medium'),
                        (e[(e.Large = s.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge');
                })(T || (T = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = s.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.width)] = 'Small'),
                            (e[(e.Medium = s.medium.width)] = 'Medium'),
                            (e[(e.Large = s.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.width)] = 'ExtraLarge');
                    })(S || (S = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = s.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = s.small.height)] = 'Small'),
                            (e[(e.Medium = s.medium.height)] = 'Medium'),
                            (e[(e.Large = s.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = s.extraLarge.height)] = 'ExtraLarge');
                    })(O || (O = {}));
                const P = () => {
                        const e = (0, r.useContext)(g),
                            t = e.width,
                            n = e.height,
                            a = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return T.ExtraLarge;
                                    case e.large:
                                        return T.Large;
                                    case e.medium:
                                        return T.Medium;
                                    case e.small:
                                        return T.Small;
                                    case e.extraSmall:
                                        return T.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), T.ExtraSmall;
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return S.ExtraLarge;
                                    case e.largeWidth:
                                        return S.Large;
                                    case e.mediumWidth:
                                        return S.Medium;
                                    case e.smallWidth:
                                        return S.Small;
                                    case e.extraSmallWidth:
                                        return S.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), S.ExtraSmall;
                                }
                            })(e),
                            o = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return O.ExtraLarge;
                                    case e.largeHeight:
                                        return O.Large;
                                    case e.mediumHeight:
                                        return O.Medium;
                                    case e.smallHeight:
                                        return O.Small;
                                    case e.extraSmallHeight:
                                        return O.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), O.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: i, mediaHeight: o, remScreenWidth: t, remScreenHeight: n };
                    },
                    x = ['children', 'className'];
                function L() {
                    return (
                        (L = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                  }
                                  return e;
                              }),
                        L.apply(null, arguments)
                    );
                }
                const M = {
                        [S.ExtraSmall]: '',
                        [S.Small]: y().SMALL_WIDTH,
                        [S.Medium]: `${y().SMALL_WIDTH} ${y().MEDIUM_WIDTH}`,
                        [S.Large]: `${y().SMALL_WIDTH} ${y().MEDIUM_WIDTH} ${y().LARGE_WIDTH}`,
                        [S.ExtraLarge]: `${y().SMALL_WIDTH} ${y().MEDIUM_WIDTH} ${y().LARGE_WIDTH} ${y().EXTRA_LARGE_WIDTH}`,
                    },
                    k = {
                        [O.ExtraSmall]: '',
                        [O.Small]: y().SMALL_HEIGHT,
                        [O.Medium]: `${y().SMALL_HEIGHT} ${y().MEDIUM_HEIGHT}`,
                        [O.Large]: `${y().SMALL_HEIGHT} ${y().MEDIUM_HEIGHT} ${y().LARGE_HEIGHT}`,
                        [O.ExtraLarge]: `${y().SMALL_HEIGHT} ${y().MEDIUM_HEIGHT} ${y().LARGE_HEIGHT} ${y().EXTRA_LARGE_HEIGHT}`,
                    },
                    I = {
                        [T.ExtraSmall]: '',
                        [T.Small]: y().SMALL,
                        [T.Medium]: `${y().SMALL} ${y().MEDIUM}`,
                        [T.Large]: `${y().SMALL} ${y().MEDIUM} ${y().LARGE}`,
                        [T.ExtraLarge]: `${y().SMALL} ${y().MEDIUM} ${y().LARGE} ${y().EXTRA_LARGE}`,
                    },
                    C = (e) => {
                        let t = e.children,
                            n = e.className,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var r in e)
                                    if ({}.hasOwnProperty.call(e, r)) {
                                        if (t.indexOf(r) >= 0) continue;
                                        n[r] = e[r];
                                    }
                                return n;
                            })(e, x);
                        const i = P(),
                            o = i.mediaWidth,
                            s = i.mediaHeight,
                            l = i.mediaSize;
                        return a().createElement('div', L({ className: w()(n, M[o], k[s], I[l]) }, r), t);
                    },
                    N = ['children'];
                const D = (e) => {
                    let t = e.children,
                        n = (function (e, t) {
                            if (null == e) return {};
                            var n = {};
                            for (var r in e)
                                if ({}.hasOwnProperty.call(e, r)) {
                                    if (t.indexOf(r) >= 0) continue;
                                    n[r] = e[r];
                                }
                            return n;
                        })(e, N);
                    return a().createElement(v, null, a().createElement(C, n, t));
                };
                var A = n(493),
                    B = n.n(A);
                const U = 'App_base_35',
                    H = 'App_closeButton_43',
                    G = 'Body_base_20',
                    W = 'Body_header_c1',
                    F = 'Body_main_9b';
                function $(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const V = {
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
                let q, Y;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(q || (q = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(Y || (Y = {}));
                const j = ({
                    children: e,
                    size: t,
                    isFocused: n,
                    type: i,
                    disabled: o,
                    mixClass: s,
                    soundHover: l,
                    soundClick: c,
                    onMouseEnter: u,
                    onMouseMove: d,
                    onMouseDown: _,
                    onMouseUp: m,
                    onMouseLeave: g,
                    onClick: E,
                }) => {
                    const h = (0, r.useRef)(null),
                        p = (0, r.useState)(n),
                        v = p[0],
                        f = p[1],
                        b = (0, r.useState)(!1),
                        y = b[0],
                        T = b[1];
                    return (
                        (0, r.useEffect)(() => {
                            function e(e) {
                                v && null !== h.current && !h.current.contains(e.target) && f(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [v]),
                        (0, r.useEffect)(() => {
                            f(n);
                        }, [n]),
                        a().createElement(
                            'div',
                            {
                                ref: h,
                                className: w()(
                                    V.base,
                                    V[`base__${i}`],
                                    o && V.base__disabled,
                                    t && V[`base__${t}`],
                                    v && V.base__focus,
                                    y && V.base__highlightActive,
                                    s,
                                ),
                                onMouseEnter: function (e) {
                                    o || (null !== l && $(l), u && u(e));
                                },
                                onMouseMove: function (e) {
                                    d && d(e);
                                },
                                onMouseUp: function (e) {
                                    o || (m && m(e), T(!1));
                                },
                                onMouseDown: function (e) {
                                    o ||
                                        (null !== c && $(c),
                                        _ && _(e),
                                        n && (o || (h.current && (h.current.focus(), f(!0)))),
                                        T(!0));
                                },
                                onMouseLeave: function (e) {
                                    o || (g && g(e), T(!1));
                                },
                                onClick: function (e) {
                                    o || (E && E(e));
                                },
                            },
                            i !== q.ghost &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: V.back }),
                                    a().createElement('span', { className: V.texture }),
                                ),
                            a().createElement(
                                'span',
                                { className: w()(V.state, V.state__default) },
                                a().createElement('span', { className: V.stateDisabled }),
                                a().createElement('span', { className: V.stateHighlightHover }),
                                a().createElement('span', { className: V.stateHighlightActive }),
                            ),
                            a().createElement(
                                'span',
                                { className: V.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                j.defaultProps = { type: q.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const z = j;
                var X = n(515),
                    K = n(946);
                function Q() {}
                function Z() {
                    return !1;
                }
                console.log;
                var J = n(174);
                function ee(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (e) {
                                if ('string' == typeof e) return te(e, t);
                                var n = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === n && e.constructor && (n = e.constructor.name),
                                    'Map' === n || 'Set' === n
                                        ? Array.from(e)
                                        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                          ? te(e, t)
                                          : void 0
                                );
                            }
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
                function te(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                    return r;
                }
                const ne = (e) => (0 === e ? window : window.subViews.get(e));
                const re = ((e, t) => {
                        const n = (0, r.createContext)({});
                        return [
                            function ({ mode: i = 'real', options: s, children: l, mocks: c }) {
                                const u = (0, r.useRef)([]),
                                    d = (n, r, a) => {
                                        var i;
                                        const s = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: n = ne,
                                                context: r = 'model',
                                            } = {}) {
                                                const a = new Map();
                                                function i(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? a.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, n) => {
                                                        n.forEach((t) => {
                                                            const n = a.get(t);
                                                            void 0 !== n && n(e);
                                                        });
                                                    });
                                                });
                                                const s = (e) => {
                                                    const a = n(t),
                                                        i = r.split('.').reduce((e, t) => e[t], a);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? i
                                                        : e.split('.').reduce((e, t) => {
                                                              const n = e[t];
                                                              return 'function' == typeof n ? n.bind(e) : n;
                                                          }, i);
                                                };
                                                return {
                                                    subscribe: (n, i) => {
                                                        const l = 'string' == typeof i ? `${r}.${i}` : r,
                                                            c = o.O.view.addModelObserver(l, t, !0);
                                                        return a.set(c, n), e && n(s(i)), c;
                                                    },
                                                    readByPath: s,
                                                    createCallback: (e, t) => {
                                                        const n = s(t);
                                                        return (...t) => {
                                                            n(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = s(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, n = ee(a.keys()); !(e = n()).done; ) i(e.value, t);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(r),
                                            l =
                                                'real' === n
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (i = null == a ? void 0 : a.getter)
                                                                  ? i
                                                                  : () => {},
                                                      }),
                                            c = (e) =>
                                                'mocks' === n ? (null == a ? void 0 : a.getter(e)) : l.readByPath(e),
                                            d = (e) => u.current.push(e),
                                            _ = e({
                                                mode: n,
                                                readByPath: c,
                                                externalModel: l,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const r = null != t ? t : c(e),
                                                            a = J.LO.box(r, { equals: Z });
                                                        return (
                                                            'real' === n &&
                                                                l.subscribe(
                                                                    (0, J.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const r = null != t ? t : c(e),
                                                            a = J.LO.box(r, { equals: Z });
                                                        return (
                                                            'real' === n &&
                                                                l.subscribe(
                                                                    (0, J.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const r = c(t);
                                                        if (Array.isArray(e)) {
                                                            const a = e.reduce(
                                                                (e, t) => ((e[t] = J.LO.box(r[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === n &&
                                                                    l.subscribe(
                                                                        (0, J.aD)((t) => {
                                                                            e.forEach((e) => {
                                                                                a[e].set(t[e]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                a
                                                            );
                                                        }
                                                        {
                                                            const a = e,
                                                                i = Object.entries(a),
                                                                o = i.reduce(
                                                                    (e, [t, n]) => ((e[n] = J.LO.box(r[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === n &&
                                                                    l.subscribe(
                                                                        (0, J.aD)((e) => {
                                                                            i.forEach(([t, n]) => {
                                                                                o[n].set(e[t]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                o
                                                            );
                                                        }
                                                    },
                                                },
                                                cleanup: d,
                                            }),
                                            m = { mode: n, model: _, externalModel: l, cleanup: d };
                                        return {
                                            model: _,
                                            controls: 'mocks' === n && a ? a.controls(m) : t(m),
                                            externalModel: l,
                                            mode: n,
                                        };
                                    },
                                    _ = (0, r.useRef)(!1),
                                    m = (0, r.useState)(i),
                                    g = m[0],
                                    E = m[1],
                                    h = (0, r.useState)(() => d(i, s, c)),
                                    p = h[0],
                                    v = h[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        _.current ? v(d(g, s, c)) : (_.current = !0);
                                    }, [c, g, s]),
                                    (0, r.useEffect)(() => {
                                        E(i);
                                    }, [i]),
                                    (0, r.useEffect)(
                                        () => () => {
                                            p.externalModel.dispose(), u.current.forEach((e) => e());
                                        },
                                        [p],
                                    ),
                                    a().createElement(n.Provider, { value: p }, l)
                                );
                            },
                            () => (0, r.useContext)(n),
                        ];
                    })(
                        ({ observableModel: e }) => {
                            const t = {
                                root: e.object(),
                                rewards: e.array('rewards'),
                                additionalRewards: e.array('additionalRewards'),
                                isFooterShown: J.LO.box(!1),
                                isCButtonOpensPreview: J.LO.box(!1),
                            };
                            return Object.assign({}, t, {
                                computes: {
                                    hasAdditionalRewards: (0, K.Om)(() => Boolean(t.additionalRewards.get().length)),
                                },
                            });
                        },
                        ({ externalModel: e, model: t }) => ({
                            close: e.createCallbackNoArgs('onClose'),
                            goToHangar: e.createCallbackNoArgs('onGoToHangar'),
                            showFooter: (0, J.aD)(() => {
                                t.isFooterShown.set(!0);
                            }),
                            changeCButtonToVehiclePreview: (0, J.aD)(() => {
                                t.isCButtonOpensPreview.set(!0);
                            }),
                        }),
                    ),
                    ae = re[0],
                    ie = re[1],
                    oe = 'Footer_base_56',
                    se = 'Footer_base__shown_f7',
                    le = 'Footer_button_ec',
                    ce = R.strings.clan_supply.rewardsView.button,
                    ue = (0, X.Pi)(() => {
                        const e = ie(),
                            t = e.model,
                            n = e.controls,
                            r = t.isFooterShown.get(),
                            i = t.isCButtonOpensPreview.get();
                        return a().createElement(
                            'div',
                            { className: w()(oe, r && se) },
                            a().createElement(
                                z,
                                {
                                    disabled: !r,
                                    mixClass: le,
                                    type: 'primary',
                                    soundClick: 'yes',
                                    onClick: () => {
                                        i ? n.goToHangar() : n.close();
                                    },
                                },
                                i ? ce.showInHangar() : ce.confirm(),
                            ),
                        );
                    }),
                    de = 'Header_base_d2',
                    _e = 'Header_subheading_6a',
                    me = 'Header_heading_98',
                    ge = R.strings.clan_supply.rewardsView,
                    Ee = () =>
                        a().createElement(
                            'div',
                            { className: de },
                            a().createElement('div', { className: _e }, ge.subheading()),
                            a().createElement('div', { className: me }, ge.heading()),
                        );
                let he;
                !(function (e) {
                    (e[(e.COMMON = 0)] = 'COMMON'),
                        (e[(e.ELITE = 1)] = 'ELITE'),
                        (e[(e.ELITE_WITH_VEHICLE = 2)] = 'ELITE_WITH_VEHICLE');
                })(he || (he = {}));
                const pe = 'Main_base_5e',
                    ve = 'Main_ribbonWrapper_dd',
                    fe = 'Main_ribbon_0a',
                    we = 'Main_base__includesVehicle_de',
                    be = 'Main_glow_6e',
                    ye = 'Main_radialLinesWrapper_55',
                    Te = 'Main_radialLinesFadeInWrapper_10',
                    Se = 'Main_radialLines_54',
                    Re = 'Main_rewards_f4';
                let Oe, Pe, xe, Le, Me, ke, Ie, Ce;
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
                        (e.EpicSelectToken = 'epicSelectToken'),
                        (e.Comp7TokenWeeklyReward = 'comp7TokenWeeklyReward'),
                        (e.DeluxeGift = 'deluxe_gift'),
                        (e.BattleBoosterGift = 'battleBooster_gift'),
                        (e.OptionalDevice = 'optionalDevice'),
                        (e.EquipCoin = 'equipCoin'),
                        (e.LootBox = 'lootBox'),
                        (e.BrCoin = 'brcoin');
                })(Oe || (Oe = {})),
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
                    })(Pe || (Pe = {})),
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
                    })(xe || (xe = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(Le || (Le = {})),
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
                    })(Me || (Me = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(ke || (ke = {})),
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
                    })(Ie || (Ie = {})),
                    (function (e) {
                        (e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background');
                    })(Ce || (Ce = {}));
                var Ne = n(916);
                class De extends a().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = Ne.B3.GOLD;
                        else e = Ne.B3.INTEGRAL;
                        const t = Ne.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                De.defaultProps = { format: 'integral' };
                const Ae = [
                        Oe.Items,
                        Oe.Equipment,
                        Oe.Xp,
                        Oe.XpFactor,
                        Oe.Blueprints,
                        Oe.BlueprintsAny,
                        Oe.Goodies,
                        Oe.Berths,
                        Oe.Slots,
                        Oe.Tokens,
                        Oe.CrewSkins,
                        Oe.CrewBooks,
                        Oe.Customizations,
                        Oe.CreditsFactor,
                        Oe.TankmenXp,
                        Oe.TankmenXpFactor,
                        Oe.FreeXpFactor,
                        Oe.BattleToken,
                        Oe.PremiumUniversal,
                        Oe.NaturalCover,
                        Oe.BpCoin,
                        Oe.BattlePassSelectToken,
                        Oe.BattlaPassFinalAchievement,
                        Oe.BattleBadge,
                        Oe.BonusX5,
                        Oe.CrewBonusX3,
                        Oe.NewYearInvoice,
                        Oe.EpicSelectToken,
                        Oe.Comp7TokenWeeklyReward,
                        Oe.DeluxeGift,
                        Oe.BattleBoosterGift,
                        Oe.OptionalDevice,
                    ],
                    Be = [Oe.Gold, Oe.Credits, Oe.Crystal, Oe.FreeXp],
                    Ue = [Oe.BattlePassPoints, Oe.EquipCoin],
                    He = [Oe.PremiumPlus, Oe.Premium],
                    Ge = (e) =>
                        Ae.includes(e)
                            ? Le.MULTI
                            : Be.includes(e)
                              ? Le.CURRENCY
                              : Ue.includes(e)
                                ? Le.NUMBER
                                : He.includes(e)
                                  ? Le.PREMIUM_PLUS
                                  : Le.STRING,
                    We = ['engravings', 'backgrounds'],
                    Fe = ['engraving', 'background'],
                    $e = (e, t = xe.Small) => {
                        const n = e.name,
                            r = e.type,
                            a = e.value,
                            i = e.icon,
                            o = e.item,
                            s = e.dogTagType,
                            l = ((e) => {
                                switch (e) {
                                    case xe.S600x450:
                                        return 'c_600x450';
                                    case xe.S400x300:
                                        return 'c_400x300';
                                    case xe.S296x222:
                                        return 'c_296x222';
                                    case xe.S232x174:
                                        return 'c_232x174';
                                    case xe.Big:
                                        return 'c_80x80';
                                    case xe.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(t);
                        switch (n) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${r}_${a}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${n}_${a}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${o}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${t}.${i}`;
                            case 'tokens':
                            case 'lootBox':
                            case 'battleToken':
                                return 'big' === t
                                    ? e.iconBig.replace('..', 'img://gui')
                                    : e.iconSmall.replace('..', 'img://gui');
                            case 'customizations':
                            case 'styleProgress':
                            case 'crewSkins':
                            case 'goodies':
                            case 'groups':
                            case 'tmanToken':
                            case 'battlePassSelectToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${i}`;
                            case 'crewBooks':
                                return `R.images.gui.maps.icons.crewBooks.books.${t}.${i}`;
                            case 'dogTagComponents':
                                return ((e, t, n) => {
                                    const r = We[e];
                                    if (r) {
                                        const a = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(r),
                                            i = a.$dyn(n);
                                        return i ? `${i}` : `${a.$dyn(Fe[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(s, t, i);
                            case 'dossier_badge':
                                return `R.images.gui.maps.icons.quests.bonuses.badges.${l}.${i}`;
                            case 'dossier_achievement':
                                return `R.images.gui.maps.icons.achievement.${l}.${i}`;
                            case 'xp':
                            case 'xpFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.exp`;
                            case 'creditsFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.credits`;
                            case 'tankmenXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.tankmenXP`;
                            case 'dailyXPFactor':
                            case 'freeXPFactor':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.freeXP`;
                            case 'premiumTank':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.vehicles`;
                            case 'styleProgressToken':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.style_3d`;
                            case 'collectionItem':
                                return `R.images.gui.maps.icons.collectionItems.${l}.${i}`;
                            default:
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${n}`;
                        }
                    },
                    Ve = (e, t, n) => {
                        const r = t && { contentId: t };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || t),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !t,
                            },
                            r,
                            n,
                        );
                    },
                    qe = [xe.Small, xe.Big],
                    Ye = [
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
                function je(e) {
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
                const ze = (e, t, n = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: Ne.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: r,
                                },
                                n,
                            ),
                        );
                    },
                    Xe = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            a = e.args,
                            i = e.onMouseEnter,
                            o = e.onMouseLeave,
                            s = e.onMouseDown,
                            l = e.onClick,
                            c = e.ignoreShowDelay,
                            u = void 0 !== c && c,
                            d = e.ignoreMouseClick,
                            _ = void 0 !== d && d,
                            m = e.decoratorId,
                            g = void 0 === m ? 0 : m,
                            E = e.isEnabled,
                            h = void 0 === E || E,
                            p = e.targetId,
                            v = void 0 === p ? 0 : p,
                            f = e.onShow,
                            w = e.onHide,
                            b = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var r in e)
                                    if ({}.hasOwnProperty.call(e, r)) {
                                        if (t.indexOf(r) >= 0) continue;
                                        n[r] = e[r];
                                    }
                                return n;
                            })(e, Ye);
                        const y = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            T = (0, r.useMemo)(
                                () =>
                                    v ||
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
                                [v],
                            ),
                            S = (0, r.useCallback)(() => {
                                (y.current.isVisible && y.current.timeoutId) ||
                                    (ze(n, g, { isMouseEvent: !0, on: !0, arguments: je(a) }, T),
                                    f && f(),
                                    (y.current.isVisible = !0));
                            }, [n, g, a, T, f]),
                            O = (0, r.useCallback)(() => {
                                if (y.current.isVisible || y.current.timeoutId) {
                                    const e = y.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (y.current.timeoutId = 0)),
                                        ze(n, g, { on: !1 }, T),
                                        y.current.isVisible && w && w(),
                                        (y.current.isVisible = !1);
                                }
                            }, [n, g, T, w]),
                            P = (0, r.useCallback)((e) => {
                                y.current.isVisible &&
                                    ((y.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (y.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(y.current.prevTarget) && O();
                                    }, 200)));
                            }, []);
                        (0, r.useEffect)(() => {
                            const e = y.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', P, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', P, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === h && O();
                            }, [h, O]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', O),
                                    () => {
                                        window.removeEventListener('mouseleave', O), O();
                                    }
                                ),
                                [O],
                            );
                        return h
                            ? (0, r.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((x = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((y.current.timeoutId = window.setTimeout(S, u ? 100 : 400)),
                                                      i && i(e),
                                                      x && x(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              O(), null == o || o(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === _ && O(), null == l || l(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === _ && O(), null == s || s(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      b,
                                  ),
                              )
                            : t;
                        var x;
                    },
                    Ke = ['children'];
                function Qe() {
                    return (
                        (Qe = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                  }
                                  return e;
                              }),
                        Qe.apply(null, arguments)
                    );
                }
                const Ze = (e) => {
                        let t = e.children,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var r in e)
                                    if ({}.hasOwnProperty.call(e, r)) {
                                        if (t.indexOf(r) >= 0) continue;
                                        n[r] = e[r];
                                    }
                                return n;
                            })(e, Ke);
                        return a().createElement(
                            Xe,
                            Qe(
                                {
                                    contentId:
                                        R.views.common.tooltip_window.backport_tooltip_content.BackportTooltipContent(
                                            'resId',
                                        ),
                                    ignoreShowDelay: !0,
                                },
                                n,
                            ),
                            t,
                        );
                    },
                    Je = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function et() {
                    return (
                        (et = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                  }
                                  return e;
                              }),
                        et.apply(null, arguments)
                    );
                }
                const tt = R.views.common.tooltip_window.simple_tooltip_content,
                    nt = (e) => {
                        let t = e.children,
                            n = e.body,
                            i = e.header,
                            o = e.note,
                            s = e.alert,
                            l = e.args,
                            c = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var r in e)
                                    if ({}.hasOwnProperty.call(e, r)) {
                                        if (t.indexOf(r) >= 0) continue;
                                        n[r] = e[r];
                                    }
                                return n;
                            })(e, Je);
                        const u = (0, r.useMemo)(() => {
                            const e = Object.assign({}, l, { body: n, header: i, note: o, alert: s });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [s, n, i, o, l]);
                        return a().createElement(
                            Xe,
                            et(
                                {
                                    contentId:
                                        ((d = null == l ? void 0 : l.hasHtmlContent),
                                        d ? tt.SimpleTooltipHtmlContent('resId') : tt.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: u,
                                },
                                c,
                            ),
                            t,
                        );
                        var d;
                    };
                function rt() {
                    return (
                        (rt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                  }
                                  return e;
                              }),
                        rt.apply(null, arguments)
                    );
                }
                const at = ({ children: e, tooltipArgs: t, className: n }) => {
                        if (!t) return e;
                        const r = a().createElement('div', { className: n }, e);
                        if (t.header || t.body) return a().createElement(nt, t, r);
                        const i = t.contentId;
                        return i ? a().createElement(Xe, rt({}, t, { contentId: i }), r) : a().createElement(Ze, t, r);
                    },
                    it = {
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
                    ot = ({
                        name: e,
                        image: t,
                        isPeriodic: n = !1,
                        size: r = xe.Big,
                        special: i,
                        value: o,
                        valueType: s,
                        title: l,
                        style: c,
                        className: u,
                        classNames: d,
                        tooltipArgs: _,
                        periodicIconTooltipArgs: m,
                    }) => {
                        const g = ((e, t) => {
                                if (void 0 === t || !qe.includes(e)) return null;
                                switch (t) {
                                    case Me.BATTLE_BOOSTER:
                                    case Me.BATTLE_BOOSTER_REPLACE:
                                        return ke.BATTLE_BOOSTER;
                                }
                            })(r, i),
                            E = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case Me.BATTLE_BOOSTER:
                                        return Ie.BATTLE_BOOSTER;
                                    case Me.BATTLE_BOOSTER_REPLACE:
                                        return Ie.BATTLE_BOOSTER_REPLACE;
                                    case Me.BUILT_IN_EQUIPMENT:
                                        return Ie.BUILT_IN_EQUIPMENT;
                                    case Me.EQUIPMENT_PLUS:
                                        return Ie.EQUIPMENT_PLUS;
                                    case Me.EQUIPMENT_TROPHY_BASIC:
                                        return Ie.EQUIPMENT_TROPHY_BASIC;
                                    case Me.EQUIPMENT_TROPHY_UPGRADED:
                                        return Ie.EQUIPMENT_TROPHY_UPGRADED;
                                    case Me.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return Ie.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case Me.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return Ie.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case Me.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return Ie.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case Me.PROGRESSION_STYLE_UPGRADED_1:
                                        return Ie.PROGRESSION_STYLE_UPGRADED_1;
                                    case Me.PROGRESSION_STYLE_UPGRADED_2:
                                        return Ie.PROGRESSION_STYLE_UPGRADED_2;
                                    case Me.PROGRESSION_STYLE_UPGRADED_3:
                                        return Ie.PROGRESSION_STYLE_UPGRADED_3;
                                    case Me.PROGRESSION_STYLE_UPGRADED_4:
                                        return Ie.PROGRESSION_STYLE_UPGRADED_4;
                                    case Me.PROGRESSION_STYLE_UPGRADED_5:
                                        return Ie.PROGRESSION_STYLE_UPGRADED_5;
                                    case Me.PROGRESSION_STYLE_UPGRADED_6:
                                        return Ie.PROGRESSION_STYLE_UPGRADED_6;
                                }
                            })(i),
                            h = ((e, t) => {
                                if (void 0 === e) return null;
                                switch (t) {
                                    case Le.MULTI: {
                                        const t = Number(e);
                                        return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                                    }
                                    case Le.CURRENCY:
                                    case Le.NUMBER:
                                        return a().createElement(De, { format: 'integral', value: Number(e) });
                                    case Le.PREMIUM_PLUS: {
                                        const t = Number(e);
                                        return isNaN(t) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(o, s);
                        return a().createElement(
                            'div',
                            { className: w()(it.base, it[`base__${r}`], u), style: c },
                            a().createElement(
                                at,
                                { tooltipArgs: _, className: it.tooltipWrapper },
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement(
                                        'div',
                                        { className: w()(it.image, null == d ? void 0 : d.image) },
                                        g &&
                                            a().createElement('div', {
                                                className: w()(it.highlight, null == d ? void 0 : d.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${g}_highlight)`,
                                                },
                                            }),
                                        t &&
                                            a().createElement('div', {
                                                className: w()(it.icon, null == d ? void 0 : d.rewardIcon),
                                                style: { backgroundImage: `url(${t})` },
                                            }),
                                        E &&
                                            a().createElement('div', {
                                                className: w()(it.overlay, null == d ? void 0 : d.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${E}_overlay)`,
                                                },
                                            }),
                                    ),
                                    h &&
                                        a().createElement(
                                            'div',
                                            {
                                                className: w()(
                                                    it.info,
                                                    it[`info__${e}`],
                                                    s === Le.MULTI && it.info__multi,
                                                    null == d ? void 0 : d.info,
                                                ),
                                            },
                                            h,
                                        ),
                                    l && a().createElement('div', { className: it.title }, l),
                                ),
                            ),
                            n &&
                                a().createElement(
                                    at,
                                    { tooltipArgs: m },
                                    a().createElement('div', {
                                        className: w()(it.timer, null == d ? void 0 : d.periodicIcon),
                                    }),
                                ),
                        );
                    };
                function st(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, n, r) => t(null == e ? void 0 : e.value, n, r));
                }
                var lt = n(30);
                const ct = 'AnimatedReward_base_f5',
                    ut = (e) => Math.sqrt(1 - Math.pow(--e, 2)),
                    dt = 800,
                    _t = 400,
                    mt = 'equipCoin',
                    gt = ({ index: e = 0, delay: t = 0, onEnd: n, isCompensation: r, children: i }) => {
                        const o = (0, lt.useSpring)({
                            from: { transform: 'translateY(20rem) scale(1.2)', opacity: 0 },
                            to: { transform: 'translateY(0rem) scale(1)', opacity: 1 },
                            delay: t + 200 * e,
                            config: { duration: _t, easing: ut },
                            onStart: () => {
                                $('gui_random_reward_appear'), r && $('gui_reward_screen_compensation');
                            },
                            onRest: n,
                        });
                        return a().createElement(lt.animated.div, { className: ct, style: o }, i);
                    },
                    Et = (e, t, n) => () => {
                        e === t.length - 1 && n();
                    },
                    ht = {
                        base: 'Rewards_base_a4',
                        labelWrapper: 'Rewards_labelWrapper_05',
                        label: 'Rewards_label_bb',
                        info: 'Rewards_info_60',
                        info__currency: 'Rewards_info__currency_fe',
                        info__compensation: 'Rewards_info__compensation_1b',
                        info__hidden: 'Rewards_info__hidden_13',
                        overlay: 'Rewards_overlay_90',
                        overlay__battleBooster: 'Rewards_overlay__battleBooster_57',
                    },
                    pt = 'CommonRewards_base_bd';
                function vt() {
                    return (
                        (vt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                  }
                                  return e;
                              }),
                        vt.apply(null, arguments)
                    );
                }
                const ft = (0, X.Pi)(() => {
                        const e = ie(),
                            t = e.model,
                            n = e.controls,
                            r = ((e) => {
                                switch (e) {
                                    case T.ExtraSmall:
                                    case T.Small:
                                        return xe.S232x174;
                                    case T.Medium:
                                        return xe.S296x222;
                                    case T.Large:
                                    case T.ExtraLarge:
                                        return xe.S400x300;
                                }
                            })(P().mediaSize);
                        return a().createElement(
                            'div',
                            { className: pt },
                            st(t.rewards.get(), (e, t, i) => {
                                const o = e.tooltipId,
                                    s = Ve({ tooltipId: o }, Number(e.tooltipContentId)),
                                    l = Ge(e.name),
                                    c = l === Le.CURRENCY || e.name === mt;
                                return a().createElement(
                                    gt,
                                    { key: t, index: t, delay: dt, onEnd: Et(t, i, n.showFooter) },
                                    a().createElement(
                                        ot,
                                        vt({}, e, {
                                            image: $e(e, r),
                                            size: r,
                                            special: e.overlayType,
                                            valueType: l,
                                            tooltipArgs: s,
                                            classNames: {
                                                info: w()(ht.info, c && ht.info__currency),
                                                overlay: w()(ht.overlay, ht[`overlay__${e.overlayType}`]),
                                            },
                                        }),
                                    ),
                                    !c &&
                                        a().createElement(
                                            'div',
                                            { className: ht.labelWrapper },
                                            a().createElement('div', { className: ht.label }, e.label),
                                        ),
                                );
                            }),
                        );
                    }),
                    wt = 'StyleReward_base_16',
                    bt = 'StyleReward_image_4f',
                    yt = 'StyleReward_text_ed',
                    Tt = R.strings.clan_supply.rewardsView.style,
                    St = ({ id: e, size: t, tooltipArgs: n }) => {
                        const r = R.images.gui.maps.icons.clanSupply.rewardsView.rewards.$dyn(`c_${e}`);
                        return a().createElement(
                            at,
                            { tooltipArgs: n },
                            a().createElement(
                                'div',
                                { className: wt },
                                t &&
                                    a().createElement('div', {
                                        className: bt,
                                        style: { backgroundImage: `url(${r.$dyn(t)})` },
                                    }),
                                a().createElement('div', { className: yt }, Tt.$dyn(`c_${e}`)),
                            ),
                        );
                    },
                    Rt = 'EliteRewards_base_df';
                function Ot() {
                    return (
                        (Ot = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                  }
                                  return e;
                              }),
                        Ot.apply(null, arguments)
                    );
                }
                const Pt = (0, X.Pi)(() => {
                        const e = ie(),
                            t = e.model,
                            n = e.controls,
                            r = ((e) => {
                                switch (e) {
                                    case T.ExtraSmall:
                                    case T.Small:
                                        return xe.S232x174;
                                    case T.Medium:
                                    case T.Large:
                                    case T.ExtraLarge:
                                        return xe.S400x300;
                                }
                            })(P().mediaSize);
                        return a().createElement(
                            'div',
                            { className: Rt },
                            st(t.rewards.get(), (e, t, i) => {
                                const o = e.tooltipId,
                                    s = Ve({ tooltipId: o }, Number(e.tooltipContentId)),
                                    l = Ge(e.name),
                                    c = l === Le.CURRENCY || e.name === mt,
                                    u = e.name === Oe.Customizations;
                                return a().createElement(
                                    gt,
                                    { key: t, index: t, delay: dt, onEnd: Et(t, i, n.showFooter) },
                                    u
                                        ? a().createElement(St, { id: e.value, tooltipArgs: s, size: r })
                                        : a().createElement(
                                              ot,
                                              Ot({}, e, {
                                                  image: $e(e, r),
                                                  size: r,
                                                  special: e.overlayType,
                                                  valueType: l,
                                                  tooltipArgs: s,
                                                  classNames: {
                                                      info: w()(ht.info, c && ht.info__currency),
                                                      overlay: w()(ht.overlay, ht[`overlay__${e.overlayType}`]),
                                                  },
                                              }),
                                          ),
                                    !c &&
                                        !u &&
                                        a().createElement(
                                            'div',
                                            { className: ht.labelWrapper },
                                            a().createElement('div', { className: ht.label }, e.label),
                                        ),
                                );
                            }),
                        );
                    }),
                    xt = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    Lt = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const Mt = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    kt = (e) =>
                        Mt
                            ? `${e}`
                            : (function (e) {
                                  let t = '';
                                  for (let n = Lt.length - 1; n >= 0; n--)
                                      for (; e >= Lt[n]; ) (t += xt[n]), (e -= Lt[n]);
                                  return t;
                              })(e),
                    It = 'VehicleReward_base_60',
                    Ct = 'VehicleReward_image_85',
                    Nt = 'VehicleReward_name_0d',
                    Dt = 'VehicleReward_typeIcon_ae',
                    At = ({ tooltipArgs: e }) =>
                        a().createElement(
                            at,
                            { tooltipArgs: e },
                            a().createElement(
                                'div',
                                { className: It },
                                a().createElement('div', { className: Ct }),
                                a().createElement(
                                    'div',
                                    { className: Nt },
                                    kt(10),
                                    a().createElement('div', { className: Dt }),
                                    R.strings.italy_vehicles.It20_Carro_Combattimento_45t(),
                                ),
                            ),
                        ),
                    Bt = 'EliteWithVehicleRewards_base_49',
                    Ut = 'EliteWithVehicleRewards_wrapper_65',
                    Ht = 'EliteWithVehicleRewards_iconCompensation_9e',
                    Gt = 'EliteWithVehicleRewards_mainRewards_ee',
                    Wt = 'EliteWithVehicleRewards_additionalRewards_f5',
                    Ft = 'AdditionalRewards_base_f6',
                    $t = 'AdditionalRewards_title_ab',
                    Vt = 'AdditionalRewards_content_f9';
                function qt() {
                    return (
                        (qt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                  }
                                  return e;
                              }),
                        qt.apply(null, arguments)
                    );
                }
                const Yt = (0, X.Pi)(({ showDelay: e }) => {
                    const t = ie(),
                        n = t.model,
                        r = t.controls,
                        i = ((e) => {
                            switch (e) {
                                case T.ExtraSmall:
                                case T.Small:
                                    return xe.Small;
                                case T.Medium:
                                case T.Large:
                                case T.ExtraLarge:
                                    return xe.Big;
                            }
                        })(P().mediaSize);
                    return a().createElement(
                        'div',
                        { className: Ft },
                        a().createElement(
                            'div',
                            {
                                className: $t,
                                style: {
                                    '--additionalTitleDelay': `${e + 200}ms`,
                                    '--additionalTitleDuration': '400ms',
                                },
                            },
                            R.strings.clan_supply.rewardsView.additionalRewards(),
                        ),
                        a().createElement(
                            'div',
                            { className: Vt },
                            st(n.additionalRewards.get(), (t, n, o) => {
                                const s = t.tooltipId,
                                    l = Ve({ tooltipId: s }, Number(t.tooltipContentId)),
                                    c = Ge(t.name),
                                    u = c === Le.CURRENCY || t.name === mt,
                                    d = t.name === Oe.Customizations;
                                return a().createElement(
                                    gt,
                                    { key: n, index: n, delay: e + 200 + _t, onEnd: Et(n, o, r.showFooter) },
                                    a().createElement(
                                        ot,
                                        qt({}, t, {
                                            image: $e(t, i),
                                            size: i,
                                            special: t.overlayType,
                                            valueType: c,
                                            tooltipArgs: l,
                                            classNames: {
                                                info: w()(ht.info, u && ht.info__currency, d && ht.info__hidden),
                                                overlay: w()(ht.overlay, ht[`overlay__${t.overlayType}`]),
                                            },
                                        }),
                                    ),
                                    !u &&
                                        !d &&
                                        a().createElement(
                                            'div',
                                            { className: ht.labelWrapper },
                                            a().createElement('div', { className: ht.label }, t.label),
                                        ),
                                );
                            }),
                        ),
                    );
                });
                function jt() {
                    return (
                        (jt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                  }
                                  return e;
                              }),
                        jt.apply(null, arguments)
                    );
                }
                const zt = (e) => {
                        switch (e) {
                            case 0:
                                return 1;
                            case 1:
                                return 0;
                            default:
                                return e;
                        }
                    },
                    Xt = R.views.common.tooltip_window,
                    Kt = (0, X.Pi)(() => {
                        const e = ie(),
                            t = e.model,
                            n = e.controls,
                            r = t.computes.hasAdditionalRewards(),
                            i = ((e) => {
                                switch (e) {
                                    case T.ExtraSmall:
                                    case T.Small:
                                    case T.Medium:
                                        return xe.S400x300;
                                    case T.Large:
                                    case T.ExtraLarge:
                                        return xe.S600x450;
                                }
                            })(P().mediaSize),
                            o = ((s = t.rewards.get().length), dt + s * _t);
                        var s;
                        return a().createElement(
                            'div',
                            { className: Bt },
                            a().createElement(
                                'div',
                                { className: Gt },
                                st(t.rewards.get(), (e, t, o) => {
                                    const s = e.tooltipId,
                                        l = ((e, t) => {
                                            const n = Number(e),
                                                r =
                                                    n ===
                                                    Xt.loot_box_compensation_tooltip.LootBoxVehicleCompensationTooltipContent(
                                                        'resId',
                                                    )
                                                        ? Xt.tooltip_window.TooltipWindow('resId')
                                                        : void 0;
                                            return Ve({ tooltipId: t }, n, { decoratorId: r, ignoreShowDelay: !0 });
                                        })(e.tooltipContentId, s),
                                        c = e.name === Oe.Vehicles;
                                    return (
                                        c && n.changeCButtonToVehiclePreview(),
                                        a().createElement(
                                            gt,
                                            {
                                                key: t,
                                                index: zt(t),
                                                delay: dt,
                                                onEnd: r ? void 0 : Et(t, o, n.showFooter),
                                                isCompensation: e.isCompensation,
                                            },
                                            c
                                                ? a().createElement(At, { tooltipArgs: l })
                                                : a().createElement(
                                                      'div',
                                                      { className: Ut },
                                                      a().createElement(
                                                          ot,
                                                          jt({}, e, {
                                                              image: $e(e, i),
                                                              size: i,
                                                              valueType: Ge(e.name),
                                                              tooltipArgs: l,
                                                              classNames: {
                                                                  info: w()(
                                                                      ht.info,
                                                                      e.isCompensation && ht.info__compensation,
                                                                  ),
                                                                  overlay: w()(
                                                                      ht.overlay,
                                                                      ht[`overlay__${e.overlayType}`],
                                                                  ),
                                                              },
                                                          }),
                                                      ),
                                                      e.isCompensation && a().createElement('div', { className: Ht }),
                                                  ),
                                        )
                                    );
                                }),
                            ),
                            r && a().createElement('div', { className: Wt }, a().createElement(Yt, { showDelay: o })),
                        );
                    }),
                    Qt = (0, X.Pi)(() => {
                        switch (ie().model.root.get().type) {
                            case he.COMMON:
                                return a().createElement(ft, null);
                            case he.ELITE_WITH_VEHICLE:
                                return a().createElement(Kt, null);
                            case he.ELITE:
                                return a().createElement(Pt, null);
                            default:
                                return null;
                        }
                    }),
                    Zt = (0, X.Pi)(() => {
                        const e = ie().model.root.get().type === he.ELITE_WITH_VEHICLE;
                        return a().createElement(
                            'div',
                            { className: w()(pe, e && we) },
                            a().createElement(
                                'div',
                                { className: ve },
                                a().createElement('div', { className: be }),
                                a().createElement('div', { className: fe }),
                                a().createElement(
                                    'div',
                                    { className: Te },
                                    a().createElement(
                                        'div',
                                        { className: ye },
                                        a().createElement('div', { className: Se }),
                                    ),
                                ),
                                a().createElement('div', { className: Re }, a().createElement(Qt, null)),
                            ),
                        );
                    }),
                    Jt = () =>
                        a().createElement(
                            'div',
                            { className: G },
                            a().createElement('div', { className: W }, a().createElement(Ee, null)),
                            a().createElement('div', { className: F }, a().createElement(Zt, null)),
                            a().createElement(ue, null),
                        ),
                    en = {
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
                    tn = [
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
                function nn() {
                    return (
                        (nn = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                  }
                                  return e;
                              }),
                        nn.apply(null, arguments)
                    );
                }
                class rn extends a().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && $(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && $(this.props.soundClick);
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
                            r = e.goto,
                            i = e.side,
                            o = e.type,
                            s = e.classNames,
                            l = e.onMouseEnter,
                            c = e.onMouseLeave,
                            u = e.onMouseDown,
                            d = e.onMouseUp,
                            _ =
                                (e.soundClick,
                                e.soundHover,
                                (function (e, t) {
                                    if (null == e) return {};
                                    var n = {};
                                    for (var r in e)
                                        if ({}.hasOwnProperty.call(e, r)) {
                                            if (t.indexOf(r) >= 0) continue;
                                            n[r] = e[r];
                                        }
                                    return n;
                                })(e, tn)),
                            m = w()(en.base, en[`base__${o}`], en[`base__${i}`], null == s ? void 0 : s.base),
                            g = w()(en.icon, en[`icon__${o}`], en[`icon__${i}`], null == s ? void 0 : s.icon),
                            E = w()(en.glow, null == s ? void 0 : s.glow),
                            h = w()(en.caption, en[`caption__${o}`], null == s ? void 0 : s.caption),
                            p = w()(en.goto, null == s ? void 0 : s.goto);
                        return a().createElement(
                            'div',
                            nn(
                                {
                                    className: m,
                                    onMouseEnter: this._onMouseEnter(l),
                                    onMouseLeave: this._onMouseLeave(c),
                                    onMouseDown: this._onMouseDown(u),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: n,
                                },
                                _,
                            ),
                            'info' !== o && a().createElement('div', { className: en.shine }),
                            a().createElement('div', { className: g }, a().createElement('div', { className: E })),
                            a().createElement('div', { className: h }, t),
                            r && a().createElement('div', { className: p }, r),
                        );
                    }
                }
                rn.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var an = n(521);
                const on = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function sn(e = an.n.NONE, t = on, n = !1, a = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== an.n.NONE)
                            return (
                                window.addEventListener('keydown', r, n),
                                () => {
                                    window.removeEventListener('keydown', r, n);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (!a && o.O.view.isEventHandled()) return;
                                o.O.view.setEventHandled(), t(r), n && r.stopPropagation();
                            }
                        }
                    }, [t, e, n, a]);
                }
                const ln = (0, X.Pi)(() => {
                    const e = ie().controls;
                    var t;
                    return (
                        (t = e.close),
                        sn(an.n.ESCAPE, t),
                        a().createElement(rn, {
                            type: 'close',
                            side: 'right',
                            caption: R.strings.clan_supply.rewardsView.button.close(),
                            onClick: e.close,
                        })
                    );
                });
                var cn = n(112);
                const un = [
                    'src',
                    'className',
                    'autoplay',
                    'style',
                    'loop',
                    'isPrebufferKeyframes',
                    'keyframesNameConfig',
                    'onClick',
                ];
                function dn() {
                    return (
                        (dn = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                  }
                                  return e;
                              }),
                        dn.apply(null, arguments)
                    );
                }
                const _n = (0, r.forwardRef)(function (e, t) {
                        let n = e.src,
                            i = e.className,
                            s = e.autoplay,
                            l = void 0 !== s && s,
                            c = e.style,
                            u = e.loop,
                            d = void 0 !== u && u,
                            _ = e.isPrebufferKeyframes,
                            m = e.keyframesNameConfig,
                            g = e.onClick,
                            E = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var r in e)
                                    if ({}.hasOwnProperty.call(e, r)) {
                                        if (t.indexOf(r) >= 0) continue;
                                        n[r] = e[r];
                                    }
                                return n;
                            })(e, un);
                        const h = t,
                            p = (0, r.useRef)(null);
                        var v;
                        return (
                            (v = () =>
                                o.O.view.events.onDisplayChanged((e, t) => {
                                    var n, r;
                                    t === cn.W.hidden && (null == (n = p.current) || n.pause()),
                                        t === cn.W.shown && (null == (r = p.current) || r.play());
                                })),
                            (0, r.useEffect)(v, []),
                            (0, r.useEffect)(
                                () =>
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
                                        const e = p.current;
                                        if (!h || !e || !_)
                                            return void (null != e && e.cohFastSeek && (e.cohFastSeek = !1));
                                        const t = e.cohGetKeyframeTimestamps();
                                        t.length > 0
                                            ? ((e.cohFastSeek = !0),
                                              t.map((t) => {
                                                  null == e || e.cohPrebufferKeyframe(t);
                                              }))
                                            : console.warn("Can't prebuffered keyframes, keyframes was not found");
                                    }),
                                [_, h],
                            ),
                            (0, r.useEffect)(() => {
                                if (h && p.current) {
                                    const e = { changeTimeHandlers: [], changeKeyframeHandlers: [], changeTimeLoop: Q },
                                        t = () => {
                                            let t = 0;
                                            const n = (function (e) {
                                                    let t = 0;
                                                    return [
                                                        function n() {
                                                            e(), (t = requestAnimationFrame(n));
                                                        },
                                                        function () {
                                                            cancelAnimationFrame(t);
                                                        },
                                                    ];
                                                })(() => {
                                                    if (p.current) {
                                                        const n = p.current,
                                                            r = n.currentTime,
                                                            a = n.duration;
                                                        if (
                                                            (t !== r &&
                                                                (e.changeTimeHandlers.forEach((e) =>
                                                                    e({ currentTime: r, duration: a }),
                                                                ),
                                                                (t = r)),
                                                            p.current.paused || !h || !_)
                                                        )
                                                            return;
                                                        const i = p.current.cohGetKeyframeTimestamps();
                                                        i.forEach((t, n) => {
                                                            r > i[n] - 0.02 &&
                                                                r < i[n] &&
                                                                e.changeKeyframeHandlers.forEach((e) => {
                                                                    const r = Object.keys(null != m ? m : {})[n];
                                                                    return e({
                                                                        time: t,
                                                                        name: `${m ? r : `Point_${n}`}`,
                                                                    });
                                                                });
                                                        });
                                                    }
                                                }),
                                                r = n[0],
                                                a = n[1];
                                            return r(), a;
                                        };
                                    e.changeTimeLoop = t();
                                    const n = (t) => (
                                            e.changeTimeHandlers.push(t),
                                            () => {
                                                const n = e.changeTimeHandlers,
                                                    r = n.indexOf(t);
                                                r < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeTimeHandler, this reference was not found",
                                                      )
                                                    : n.splice(r, 1);
                                            }
                                        ),
                                        r = (t) => (
                                            e.changeKeyframeHandlers.push(t),
                                            () => {
                                                const n = e.changeKeyframeHandlers,
                                                    r = n.indexOf(t);
                                                r < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeKeyframeHandlers, this reference was not found",
                                                      )
                                                    : n.splice(r, 1);
                                            }
                                        ),
                                        a = () => {
                                            var e;
                                            return null == (e = p.current) ? void 0 : e.currentTime;
                                        },
                                        i = () => {
                                            var e;
                                            return null == (e = p.current) ? void 0 : e.duration;
                                        },
                                        o = (e) => {
                                            var t, n, r;
                                            p.current &&
                                                (p.current.currentTime =
                                                    ((t = 0),
                                                    (n = p.current.duration),
                                                    (r = e) < t ? t : r > n ? n : r));
                                        },
                                        s = () => {
                                            var e;
                                            return null == (e = p.current) ? void 0 : e.play();
                                        },
                                        l = () => {
                                            var e;
                                            return null == (e = p.current) ? void 0 : e.pause();
                                        },
                                        c = () => {
                                            l(), o(0);
                                        },
                                        u = () => {
                                            var e, t;
                                            return null !=
                                                (e = null == (t = p.current) ? void 0 : t.cohGetKeyframeTimestamps())
                                                ? e
                                                : [];
                                        },
                                        d = (e) => {
                                            o(e), s();
                                        },
                                        g = (e) => {
                                            o(e), l();
                                        },
                                        E = () => {
                                            (e.changeTimeHandlers = []),
                                                (e.changeKeyframeHandlers = []),
                                                null == e.changeTimeLoop || e.changeTimeLoop();
                                        },
                                        v = (e, t) => {
                                            var n;
                                            return (
                                                null == (n = p.current) || n.addEventListener(e, t),
                                                () => {
                                                    var n;
                                                    return null == (n = p.current)
                                                        ? void 0
                                                        : n.removeEventListener(e, t);
                                                }
                                            );
                                        },
                                        f = (e, t) => {
                                            var n;
                                            return (
                                                null == (n = p.current) || n.removeEventListener(e, t),
                                                () => {
                                                    var n;
                                                    return null == (n = p.current)
                                                        ? void 0
                                                        : n.removeEventListener(e, t);
                                                }
                                            );
                                        };
                                    return (
                                        (h.current = {
                                            on: v,
                                            off: f,
                                            play: s,
                                            pause: l,
                                            stop: c,
                                            cleanup: E,
                                            getCurrentTime: a,
                                            getDuration: i,
                                            getCachedKeyframes: u,
                                            goToAndPlay: d,
                                            goToAndStop: g,
                                            setCurrentTime: o,
                                            domRef: p.current,
                                            onChangeTime: n,
                                            onKeyframes: r,
                                        }),
                                        () => {
                                            E(), (h.current = null);
                                        }
                                    );
                                }
                            }, [m, h, _]),
                            (0, r.useEffect)(() => {
                                p.current && l && p.current.play();
                            }, [l, d]),
                            (0, r.useEffect)(() => {
                                if (p.current)
                                    return () => {
                                        p.current && p.current.pause();
                                    };
                            }, []),
                            a().createElement(
                                'video',
                                dn({ src: n, className: i, style: c, loop: d, ref: p, onClick: g }, E),
                            )
                        );
                    }),
                    mn = (0, r.memo)(_n),
                    gn = 'VideoBack_base_e2',
                    En = 'VideoBack_video_ac',
                    hn = (e, t) => {
                        const n = e.$dyn(t);
                        if ('string' == typeof n) return n;
                        throw new Error(`Video filename ${t} is invalid`);
                    },
                    pn = () => {
                        const e = P().mediaWidth;
                        return a().createElement(
                            'div',
                            { className: gn, key: e },
                            a().createElement(mn, {
                                className: En,
                                src: hn(R.videos.clan_supply, `clouds_${e}`),
                                loop: !0,
                                autoplay: !0,
                            }),
                        );
                    },
                    vn = 'Background_base_f5',
                    fn = 'Background_base__2x_1b',
                    wn = 'Background_base__shaded_0f',
                    bn = 'Background_shadow_ba',
                    yn = 'Background_videoBack_d9',
                    Tn = ({ isShaded: e = !1, withVideo: t = !1 }) => {
                        const n = 2 === o.O.view.getScale();
                        return a().createElement(
                            'div',
                            { className: w()(vn, n && fn, e && wn) },
                            e && a().createElement('div', { className: bn }),
                            t && a().createElement('div', { className: yn }, a().createElement(pn, null)),
                        );
                    },
                    Sn = () =>
                        a().createElement(
                            'div',
                            { className: U },
                            a().createElement(Tn, { isShaded: !0 }),
                            a().createElement('div', { className: H }, a().createElement(ln, null)),
                            a().createElement(Jt, null),
                        );
                engine.whenReady.then(() => {
                    B().render(
                        a().createElement(ae, null, a().createElement(D, null, a().createElement(Sn, null))),
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
                var a = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, n, r] = deferred[l], i = !0, o = 0; o < t.length; o++)
                        (!1 & r || a >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[o]))
                            ? t.splice(o--, 1)
                            : ((i = !1), r < a && (a = r));
                    if (i) {
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
        (__webpack_require__.j = 477),
        (() => {
            var e = { 477: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var r,
                        a,
                        [i, o, s] = n,
                        l = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (r in o) __webpack_require__.o(o, r) && (__webpack_require__.m[r] = o[r]);
                        if (s) var c = s(__webpack_require__);
                    }
                    for (t && t(n); l < i.length; l++)
                        (a = i[l]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(c);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [687], () => __webpack_require__(711));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
