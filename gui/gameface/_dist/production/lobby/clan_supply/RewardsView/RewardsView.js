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
            326: (e, t, r) => {
                'use strict';
                r.d(t, { O: () => te });
                var n = {};
                r.r(n),
                    r.d(n, { mouse: () => g, off: () => _, on: () => d, onResize: () => c, onScaleUpdated: () => u });
                var a = {};
                r.r(a),
                    r.d(a, {
                        events: () => n,
                        getMouseGlobalPosition: () => v,
                        getSize: () => p,
                        graphicsQuality: () => w,
                        playSound: () => h,
                        setRTPC: () => E,
                    });
                var i = {};
                r.r(i), r.d(i, { getBgUrl: () => S, getTextureUrl: () => T });
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
                r.r(o),
                    r.d(o, {
                        addModelObserver: () => B,
                        addPreloadTexture: () => N,
                        children: () => i,
                        displayStatus: () => R.W,
                        displayStatusIs: () => Z,
                        events: () => O,
                        extraSize: () => J,
                        forceTriggerMouseMove: () => K,
                        freezeTextureBeforeResize: () => F,
                        getBrowserTexturePath: () => A,
                        getDisplayStatus: () => Q,
                        getScale: () => $,
                        getSize: () => H,
                        getViewGlobalPosition: () => W,
                        isEventHandled: () => X,
                        isFocused: () => Y,
                        pxToRem: () => V,
                        remToPx: () => j,
                        resize: () => G,
                        sendEvent: () => C,
                        setAnimateWindow: () => q,
                        setEventHandled: () => z,
                        setInputPaddingsRem: () => D,
                        setSidePaddingsRem: () => U,
                        whenTutorialReady: () => ee,
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
                    function r() {
                        e.enabled && l(!0);
                    }
                    function n() {
                        e.enabled
                            ? e.listeners < 1
                                ? ((e.initialized = !1),
                                  document.body.removeEventListener('mouseenter', t),
                                  document.body.removeEventListener('mouseleave', r))
                                : e.initialized ||
                                  ((e.initialized = !0),
                                  document.body.addEventListener('mouseenter', t),
                                  document.body.addEventListener('mouseleave', r))
                            : l(!1);
                    }
                    const a = ['down', 'up', 'move'].reduce(
                        (t, r) => (
                            (t[r] = (function (t) {
                                return (r) => {
                                    e.listeners += 1;
                                    let a = !0;
                                    const i = `mouse${t}`,
                                        o = m[t]((e) => r([e, 'outside']));
                                    function s(e) {
                                        r([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, s),
                                        n(),
                                        () => {
                                            a &&
                                                (o(),
                                                window.removeEventListener(i, s),
                                                (e.listeners -= 1),
                                                n(),
                                                (a = !1));
                                        }
                                    );
                                };
                            })(r)),
                            t
                        ),
                        {},
                    );
                    return Object.assign({}, a, {
                        disable() {
                            (e.enabled = !1), n();
                        },
                        enable() {
                            (e.enabled = !0), n();
                        },
                        enableOutside() {
                            e.enabled && l(!0);
                        },
                        disableOutside() {
                            e.enabled && l(!1);
                        },
                    });
                })();
                function h(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function E(e, t) {
                    engine.call('SetRTPCGlobal', e, t).catch((r) => {
                        console.error(`setRTPC('${e}', '${t}'): `, r);
                    });
                }
                function p(e = 'px') {
                    return 'rem' === e ? viewEnv.getClientSizeRem() : viewEnv.getClientSizePx();
                }
                function v(e = 'px') {
                    return 'rem' === e ? viewEnv.getMouseGlobalPositionRem() : viewEnv.getMouseGlobalPositionPx();
                }
                const w = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    f = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    b = Object.keys(f).reduce((e, t) => ((e[t] = () => h(f[t])), e), {}),
                    y = { play: Object.assign({}, b, { sound: h }), setRTPC: E };
                function T(e, t, r = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, r);
                }
                function S(e, t, r) {
                    return `url(${T(e, t, r)})`;
                }
                var R = r(112);
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
                    x = ['args'];
                const L = 2,
                    P = 16,
                    M = 32,
                    k = 64,
                    I = (e, t) => {
                        const r = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var r,
                                        n,
                                        a = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                                    return a;
                                })(t, x);
                            return void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: r, type: e }, i, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([e, t]) => {
                                                  const r = 'GFValueProxy';
                                                  switch (typeof t) {
                                                      case 'number':
                                                          return { __Type: r, name: e, number: t };
                                                      case 'boolean':
                                                          return { __Type: r, name: e, bool: t };
                                                      default:
                                                          return { __Type: r, name: e, string: t.toString() };
                                                  }
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: r, type: e }, i));
                        }
                        return viewEnv.handleViewEvent({ __Type: r, type: e });
                        var n;
                    },
                    C = {
                        close(e) {
                            I('popover' === e ? L : M);
                        },
                        minimize() {
                            I(k);
                        },
                        move(e) {
                            I(P, { isMouseEvent: !0, on: e });
                        },
                    };
                function N(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function D(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function A(e, t, r, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, r, n);
                }
                function B(e, t, r) {
                    return viewEnv.addDataChangedCallback(e, t, r);
                }
                function U(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function H(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function G(e, t, r = 'px') {
                    return 'rem' === r ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function W(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: j(t.x), y: j(t.y) };
                }
                function F() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function $() {
                    return viewEnv.getScale();
                }
                function V(e) {
                    return viewEnv.pxToRem(e);
                }
                function j(e) {
                    return viewEnv.remToPx(e);
                }
                function q(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function Y() {
                    return viewEnv.isFocused();
                }
                function z() {
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
                const Z = Object.keys(R.W).reduce(
                        (e, t) => ((e[t] = () => viewEnv.getShowingStatus() === R.W[t]), e),
                        {},
                    ),
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
            112: (e, t, r) => {
                'use strict';
                r.d(t, { W: () => n });
                const n = { showing: 0, shown: 1, hiding: 2, hidden: 3 };
            },
            521: (e, t, r) => {
                'use strict';
                let n, a;
                r.d(t, { n: () => n }),
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
                    })(a || (a = {}));
            },
            358: (e, t, r) => {
                'use strict';
                r.d(t, { Z: () => i });
                var n = r(326);
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
                    addCallback(e, t, r = 0, a = !0) {
                        void 0 === this._updateHandler &&
                            (this._updateHandler = engine.on('viewEnv.onDataChanged', this._emmitDataChanged, this));
                        const i = n.O.view.addModelObserver(e, r, a);
                        return (
                            i > 0
                                ? ((this._callbacks[i] = t),
                                  r > 0 && (this._views[r] ? this._views[r].push(i) : (this._views[r] = [i])))
                                : console.error("Can't add callback for model:", e),
                            i
                        );
                    }
                    removeCallback(e, t = 0) {
                        let r = !1;
                        return (
                            void 0 !== e &&
                                void 0 !== this._callbacks[e] &&
                                ((r = viewEnv.removeDataChangedCallback(e, t)), delete this._callbacks[e]),
                            r || console.error("Can't remove callback by id:", e),
                            r
                        );
                    }
                    _emmitDataChanged(e, t, r) {
                        r.forEach((r) => {
                            const n = this._callbacks[r];
                            void 0 !== n && n(e, t);
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
            916: (e, t, r) => {
                'use strict';
                r.d(t, { B3: () => l, Z5: () => o.Z5, B0: () => s, ry: () => p });
                class n {
                    constructor() {
                        (this.entries = []),
                            (this._listenMouse = !1),
                            (this.onMouseDown = (e) => {
                                this.entries.forEach(({ container: t, callback: r }) => {
                                    let n = e.target;
                                    do {
                                        if (n === t) return;
                                        n = n.parentNode;
                                    } while (n);
                                    r();
                                });
                            });
                    }
                    static get instance() {
                        return n.__instance || (n.__instance = new n()), n.__instance;
                    }
                    register(e, t) {
                        this.addMouseListener(), this.entries.push({ container: e, callback: t });
                    }
                    unregister(e, t) {
                        const r = e,
                            n = t;
                        (this.entries = this.entries.filter(({ container: e, callback: t }) => e !== r || t !== n)),
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
                const a = n;
                var i = r(358);
                var o = r(613);
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
                var _ = r(521),
                    m = r(326);
                const g = ['args'];
                function h(e, t, r, n, a, i, o) {
                    try {
                        var s = e[i](o),
                            l = s.value;
                    } catch (e) {
                        return void r(e);
                    }
                    s.done ? t(l) : Promise.resolve(l).then(n, a);
                }
                const E = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
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
                                        r = arguments;
                                    return new Promise(function (n, a) {
                                        var i = e.apply(t, r);
                                        function o(e) {
                                            h(i, n, a, o, s, 'next', e);
                                        }
                                        function s(e) {
                                            h(i, n, a, o, s, 'throw', e);
                                        }
                                        o(void 0);
                                    });
                                });
                        return function () {
                            return t.apply(this, arguments);
                        };
                    })(),
                    v = (e, t) => {
                        const r = 'GFViewEventProxy';
                        if (void 0 !== t) {
                            const a = t.args,
                                i = (function (e, t) {
                                    if (null == e) return {};
                                    var r,
                                        n,
                                        a = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                                    return a;
                                })(t, g);
                            void 0 !== a
                                ? viewEnv.handleViewEvent(
                                      Object.assign({ __Type: r, type: e }, i, {
                                          arguments:
                                              ((n = a),
                                              Object.entries(n).map(([e, t]) => {
                                                  const r = { __Type: 'GFValueProxy', name: e };
                                                  switch (typeof t) {
                                                      case 'number':
                                                          r.number = t;
                                                          break;
                                                      case 'boolean':
                                                          r.bool = t;
                                                          break;
                                                      default:
                                                          r.string = t.toString();
                                                  }
                                                  return r;
                                              })),
                                      }),
                                  )
                                : viewEnv.handleViewEvent(Object.assign({ __Type: r, type: e }, i));
                        } else viewEnv.handleViewEvent({ __Type: r, type: e });
                        var n;
                    },
                    w = () => v(s.CLOSE),
                    f = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var b = r(572);
                const y = a.instance,
                    T = {
                        DataTracker: i.Z,
                        ViewModel: b.Z,
                        ViewEventType: s,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: u,
                        DateFormatType: d,
                        makeGlobalBoundingBox: E,
                        sendMoveEvent: (e) => v(s.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: w,
                        sendClosePopOverEvent: () => v(s.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, r = 0) => {
                            v(s.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: r, args: t });
                        },
                        sendShowPopOverEvent: (e, t, r, n, a = R.invalid('resId'), i) => {
                            const o = m.O.view.getViewGlobalPosition(),
                                l = r.getBoundingClientRect(),
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
                                decoratorID: n || R.invalid('resId'),
                                targetID: a,
                                direction: t,
                                bbox: E(g),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => f(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            f(e, w);
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
                            const r = {};
                            if ('object' != typeof t) return t;
                            for (const n in t)
                                if (Object.prototype.hasOwnProperty.call(t, n)) {
                                    const a = Object.prototype.toString.call(t[n]);
                                    if (a.startsWith('[object CoherentArrayProxy]')) {
                                        const a = t[n];
                                        r[n] = [];
                                        for (let t = 0; t < a.length; t++) r[n].push({ value: e(a[t].value) });
                                    } else
                                        a.startsWith('[object class BW::WULF::ViewModel')
                                            ? (r[n] = e(t[n]))
                                            : (r[n] = t[n]);
                                }
                            return r;
                        },
                        ClickOutsideManager: y,
                        SystemLocale: o.Z5,
                        UserLocale: o.cy,
                    };
                window.ViewEnvHelper = T;
            },
            613: (e, t, r) => {
                'use strict';
                r.d(t, { Z5: () => n, cy: () => a });
                const n = {
                        getNumberFormat: (e, t) => systemLocale.getNumberFormat(e, t),
                        getRealFormat: (e, t) => systemLocale.getRealFormat(e, t),
                        getTimeFormat: (e, t) => systemLocale.getTimeFormat(e, t),
                        getDateFormat: (e, t) => systemLocale.getDateFormat(e, t),
                        toUpperCase: (e) => systemLocale.toUpperCase(e),
                        toLowerCase: (e) => systemLocale.toUpperCase(e),
                    },
                    a = {
                        getNumberFormat: (e) => userLocale.getNumberFormat(e),
                        getTimeFormat: (e, t, r) => userLocale.getTimeFormat(e, t, void 0 === r || r),
                        getTimeString: (e, t, r) => userLocale.getTimeString(e, t, void 0 === r || r),
                    };
            },
            711: (e, t, r) => {
                'use strict';
                var n = r(179),
                    a = r.n(n);
                const i = (e, t, r) =>
                    t.extraLargeHeight || t.largeHeight || t.mediumHeight || t.smallHeight || t.extraSmallHeight
                        ? (t.extraLargeHeight && r.extraLarge) ||
                          (t.largeHeight && r.large) ||
                          (t.mediumHeight && r.medium) ||
                          (t.smallHeight && r.small) ||
                          (t.extraSmallHeight && r.extraSmall)
                            ? e
                            : null
                        : e;
                var o = r(326);
                const s = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var l;
                function c(e, t, r) {
                    const n = (function (e, t) {
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
                        })(e, r),
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
                        })(t, r),
                        i = Math.min(n, a);
                    return {
                        extraLarge: i === r.extraLarge.weight,
                        large: i === r.large.weight,
                        medium: i === r.medium.weight,
                        small: i === r.small.weight,
                        extraSmall: i === r.extraSmall.weight,
                        extraLargeWidth: n === r.extraLarge.weight,
                        largeWidth: n === r.large.weight,
                        mediumWidth: n === r.medium.weight,
                        smallWidth: n === r.small.weight,
                        extraSmallWidth: n === r.extraSmall.weight,
                        extraLargeHeight: a === r.extraLarge.weight,
                        largeHeight: a === r.large.weight,
                        mediumHeight: a === r.medium.weight,
                        smallHeight: a === r.small.weight,
                        extraSmallHeight: a === r.extraSmall.weight,
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
                    g = (0, n.createContext)(m),
                    h = ['children'];
                const E = (e) => {
                    let t = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                            return a;
                        })(e, h);
                    const a = (0, n.useContext)(g),
                        o = a.extraLarge,
                        s = a.large,
                        l = a.medium,
                        c = a.small,
                        u = a.extraSmall,
                        d = a.extraLargeWidth,
                        _ = a.largeWidth,
                        m = a.mediumWidth,
                        E = a.smallWidth,
                        p = a.extraSmallWidth,
                        v = a.extraLargeHeight,
                        w = a.largeHeight,
                        f = a.mediumHeight,
                        b = a.smallHeight,
                        y = a.extraSmallHeight,
                        T = { extraLarge: v, large: w, medium: f, small: b, extraSmall: y };
                    if (r.extraLarge || r.large || r.medium || r.small || r.extraSmall) {
                        if (r.extraLarge && o) return t;
                        if (r.large && s) return t;
                        if (r.medium && l) return t;
                        if (r.small && c) return t;
                        if (r.extraSmall && u) return t;
                    } else {
                        if (r.extraLargeWidth && d) return i(t, r, T);
                        if (r.largeWidth && _) return i(t, r, T);
                        if (r.mediumWidth && m) return i(t, r, T);
                        if (r.smallWidth && E) return i(t, r, T);
                        if (r.extraSmallWidth && p) return i(t, r, T);
                        if (
                            !(r.extraLargeWidth || r.largeWidth || r.mediumWidth || r.smallWidth || r.extraSmallWidth)
                        ) {
                            if (r.extraLargeHeight && v) return t;
                            if (r.largeHeight && w) return t;
                            if (r.mediumHeight && f) return t;
                            if (r.smallHeight && b) return t;
                            if (r.extraSmallHeight && y) return t;
                        }
                    }
                    return null;
                };
                E.defaultProps = {
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
                (0, n.memo)(E);
                const p = (e) => {
                        const t = (0, n.useRef)(!1);
                        t.current || (e(), (t.current = !0));
                    },
                    v = ({ children: e }) => {
                        const t = (0, n.useContext)(g),
                            r = (0, n.useState)(t),
                            i = r[0],
                            l = r[1],
                            u = (0, n.useCallback)((e, t) => {
                                const r = o.O.view.pxToRem(e),
                                    n = o.O.view.pxToRem(t);
                                l(Object.assign({ width: r, height: n }, c(r, n, s)));
                            }, []),
                            d = (0, n.useCallback)(() => {
                                const e = o.O.client.getSize('px');
                                u(e.width, e.height);
                            }, [u]);
                        p(() => {
                            o.O.client.events.on('clientResized', u), o.O.client.events.on('self.onScaleUpdated', d);
                        }),
                            (0, n.useEffect)(
                                () => () => {
                                    o.O.client.events.off('clientResized', u),
                                        o.O.client.events.off('self.onScaleUpdated', d);
                                },
                                [u, d],
                            );
                        const _ = (0, n.useMemo)(() => Object.assign({}, i), [i]);
                        return a().createElement(g.Provider, { value: _ }, e);
                    };
                var w = r(483),
                    f = r.n(w),
                    b = r(926),
                    y = r.n(b);
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
                const x = () => {
                        const e = (0, n.useContext)(g),
                            t = e.width,
                            r = e.height,
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
                        return { mediaSize: a, mediaWidth: i, mediaHeight: o, remScreenWidth: t, remScreenHeight: r };
                    },
                    L = ['children', 'className'];
                function P() {
                    return (
                        (P =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        P.apply(this, arguments)
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
                            r = e.className,
                            n = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                                return a;
                            })(e, L);
                        const i = x(),
                            o = i.mediaWidth,
                            s = i.mediaHeight,
                            l = i.mediaSize;
                        return a().createElement('div', P({ className: f()(r, M[o], k[s], I[l]) }, n), t);
                    },
                    N = ['children'];
                const D = (e) => {
                    let t = e.children,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var r,
                                n,
                                a = {},
                                i = Object.keys(e);
                            for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                            return a;
                        })(e, N);
                    return a().createElement(v, null, a().createElement(C, r, t));
                };
                var A = r(493),
                    B = r.n(A);
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
                let j, q;
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
                    })(q || (q = {}));
                const Y = ({
                    children: e,
                    size: t,
                    isFocused: r,
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
                    onClick: h,
                }) => {
                    const E = (0, n.useRef)(null),
                        p = (0, n.useState)(r),
                        v = p[0],
                        w = p[1],
                        b = (0, n.useState)(!1),
                        y = b[0],
                        T = b[1];
                    return (
                        (0, n.useEffect)(() => {
                            function e(e) {
                                v && null !== E.current && !E.current.contains(e.target) && w(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [v]),
                        (0, n.useEffect)(() => {
                            w(r);
                        }, [r]),
                        a().createElement(
                            'div',
                            {
                                ref: E,
                                className: f()(
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
                                        r && (o || (E.current && (E.current.focus(), w(!0)))),
                                        T(!0));
                                },
                                onMouseLeave: function (e) {
                                    o || (g && g(e), T(!1));
                                },
                                onClick: function (e) {
                                    o || (h && h(e));
                                },
                            },
                            i !== j.ghost &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: V.back }),
                                    a().createElement('span', { className: V.texture }),
                                ),
                            a().createElement(
                                'span',
                                { className: f()(V.state, V.state__default) },
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
                Y.defaultProps = { type: j.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const z = Y;
                var X = r(515),
                    K = r(946);
                function Q() {}
                function Z() {
                    return !1;
                }
                console.log;
                var J = r(174);
                function ee(e, t) {
                    var r = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (r) return (r = r.call(e)).next.bind(r);
                    if (
                        Array.isArray(e) ||
                        (r = (function (e, t) {
                            if (!e) return;
                            if ('string' == typeof e) return te(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === r && e.constructor && (r = e.constructor.name);
                            if ('Map' === r || 'Set' === r) return Array.from(e);
                            if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                                return te(e, t);
                        })(e)) ||
                        (t && e && 'number' == typeof e.length)
                    ) {
                        r && (e = r);
                        var n = 0;
                        return function () {
                            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
                        };
                    }
                    throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                }
                function te(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                    return n;
                }
                const re = (e) => (0 === e ? window : window.subViews.get(e));
                const ne = ((e, t) => {
                        const r = (0, n.createContext)({});
                        return [
                            function ({ mode: i = 'real', options: s, children: l, mocks: c }) {
                                const u = (0, n.useRef)([]),
                                    d = (r, n, a) => {
                                        var i;
                                        const s = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: r = re,
                                                context: n = 'model',
                                            } = {}) {
                                                const a = new Map();
                                                function i(e, t = 0) {
                                                    viewEnv.removeDataChangedCallback(e, t)
                                                        ? a.delete(e)
                                                        : console.error("Can't remove callback by id:", e);
                                                }
                                                engine.whenReady.then(() => {
                                                    engine.on('viewEnv.onDataChanged', (e, t, r) => {
                                                        r.forEach((t) => {
                                                            const r = a.get(t);
                                                            void 0 !== r && r(e);
                                                        });
                                                    });
                                                });
                                                const s = (e) => {
                                                    const a = r(t),
                                                        i = n.split('.').reduce((e, t) => e[t], a);
                                                    return 'string' != typeof e || 0 === e.length
                                                        ? i
                                                        : e.split('.').reduce((e, t) => {
                                                              const r = e[t];
                                                              return 'function' == typeof r ? r.bind(e) : r;
                                                          }, i);
                                                };
                                                return {
                                                    subscribe: (r, i) => {
                                                        const l = 'string' == typeof i ? `${n}.${i}` : n,
                                                            c = o.O.view.addModelObserver(l, t, !0);
                                                        return a.set(c, r), e && r(s(i)), c;
                                                    },
                                                    readByPath: s,
                                                    createCallback: (e, t) => {
                                                        const r = s(t);
                                                        return (...t) => {
                                                            r(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = s(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, r = ee(a.keys()); !(e = r()).done; ) i(e.value, t);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(n),
                                            l =
                                                'real' === r
                                                    ? s
                                                    : Object.assign({}, s, {
                                                          readByPath:
                                                              null != (i = null == a ? void 0 : a.getter)
                                                                  ? i
                                                                  : () => {},
                                                      }),
                                            c = (e) =>
                                                'mocks' === r ? (null == a ? void 0 : a.getter(e)) : l.readByPath(e),
                                            d = (e) => u.current.push(e),
                                            _ = e({
                                                mode: r,
                                                readByPath: c,
                                                externalModel: l,
                                                observableModel: {
                                                    array: (e, t) => {
                                                        const n = null != t ? t : c(e),
                                                            a = J.LO.box(n, { equals: Z });
                                                        return (
                                                            'real' === r &&
                                                                l.subscribe(
                                                                    (0, J.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const n = null != t ? t : c(e),
                                                            a = J.LO.box(n, { equals: Z });
                                                        return (
                                                            'real' === r &&
                                                                l.subscribe(
                                                                    (0, J.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const n = c(t);
                                                        if (Array.isArray(e)) {
                                                            const a = e.reduce(
                                                                (e, t) => ((e[t] = J.LO.box(n[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === r &&
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
                                                                    (e, [t, r]) => ((e[r] = J.LO.box(n[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === r &&
                                                                    l.subscribe(
                                                                        (0, J.aD)((e) => {
                                                                            i.forEach(([t, r]) => {
                                                                                o[r].set(e[t]);
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
                                            m = { mode: r, model: _, externalModel: l, cleanup: d };
                                        return {
                                            model: _,
                                            controls: 'mocks' === r && a ? a.controls(m) : t(m),
                                            externalModel: l,
                                            mode: r,
                                        };
                                    },
                                    _ = (0, n.useRef)(!1),
                                    m = (0, n.useState)(i),
                                    g = m[0],
                                    h = m[1],
                                    E = (0, n.useState)(() => d(i, s, c)),
                                    p = E[0],
                                    v = E[1];
                                return (
                                    (0, n.useEffect)(() => {
                                        _.current ? v(d(g, s, c)) : (_.current = !0);
                                    }, [c, g, s]),
                                    (0, n.useEffect)(() => {
                                        h(i);
                                    }, [i]),
                                    (0, n.useEffect)(
                                        () => () => {
                                            p.externalModel.dispose(), u.current.forEach((e) => e());
                                        },
                                        [p],
                                    ),
                                    a().createElement(r.Provider, { value: p }, l)
                                );
                            },
                            () => (0, n.useContext)(r),
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
                    ae = ne[0],
                    ie = ne[1],
                    oe = 'Footer_base_56',
                    se = 'Footer_base__shown_f7',
                    le = 'Footer_button_ec',
                    ce = R.strings.clan_supply.rewardsView.button,
                    ue = (0, X.Pi)(() => {
                        const e = ie(),
                            t = e.model,
                            r = e.controls,
                            n = t.isFooterShown.get(),
                            i = t.isCButtonOpensPreview.get();
                        return a().createElement(
                            'div',
                            { className: f()(oe, n && se) },
                            a().createElement(
                                z,
                                {
                                    disabled: !n,
                                    mixClass: le,
                                    type: 'primary',
                                    soundClick: 'yes',
                                    onClick: () => {
                                        i ? r.goToHangar() : r.close();
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
                    he = () =>
                        a().createElement(
                            'div',
                            { className: de },
                            a().createElement('div', { className: _e }, ge.subheading()),
                            a().createElement('div', { className: me }, ge.heading()),
                        );
                let Ee;
                !(function (e) {
                    (e[(e.COMMON = 0)] = 'COMMON'),
                        (e[(e.ELITE = 1)] = 'ELITE'),
                        (e[(e.ELITE_WITH_VEHICLE = 2)] = 'ELITE_WITH_VEHICLE');
                })(Ee || (Ee = {}));
                const pe = 'Main_base_5e',
                    ve = 'Main_ribbonWrapper_dd',
                    we = 'Main_ribbon_0a',
                    fe = 'Main_base__includesVehicle_de',
                    be = 'Main_glow_6e',
                    ye = 'Main_radialLinesWrapper_55',
                    Te = 'Main_radialLinesFadeInWrapper_10',
                    Se = 'Main_radialLines_54',
                    Re = 'Main_rewards_f4';
                let Oe, xe, Le, Pe, Me, ke, Ie, Ce;
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
                        (e.EquipCoin = 'equipCoin');
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
                    })(xe || (xe = {})),
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
                    })(Le || (Le = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(Pe || (Pe = {})),
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
                var Ne = r(916);
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
                            ? Pe.MULTI
                            : Be.includes(e)
                              ? Pe.CURRENCY
                              : Ue.includes(e)
                                ? Pe.NUMBER
                                : He.includes(e)
                                  ? Pe.PREMIUM_PLUS
                                  : Pe.STRING,
                    We = ['engravings', 'backgrounds'],
                    Fe = ['engraving', 'background'],
                    $e = (e, t = Le.Small) => {
                        const r = e.name,
                            n = e.type,
                            a = e.value,
                            i = e.icon,
                            o = e.item,
                            s = e.dogTagType,
                            l = ((e) => {
                                switch (e) {
                                    case Le.S600x450:
                                        return 'c_600x450';
                                    case Le.S400x300:
                                        return 'c_400x300';
                                    case Le.S296x222:
                                        return 'c_296x222';
                                    case Le.S232x174:
                                        return 'c_232x174';
                                    case Le.Big:
                                        return 'c_80x80';
                                    case Le.Small:
                                        return 'c_48x48';
                                    default:
                                        return e;
                                }
                            })(t);
                        switch (r) {
                            case 'basic':
                            case 'plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${n}_${a}`;
                            case 'premium':
                            case 'premium_plus':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${r}_${a}`;
                            case 'items':
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${o}`;
                            case 'blueprints':
                            case 'blueprintsAny':
                            case 'finalBlueprints':
                                return `R.images.gui.maps.icons.blueprints.fragment.${t}.${i}`;
                            case 'tokens':
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
                                return ((e, t, r) => {
                                    const n = We[e];
                                    if (n) {
                                        const a = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(n),
                                            i = a.$dyn(r);
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
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${r}`;
                        }
                    },
                    Ve = (e, t, r) => {
                        const n = t && { contentId: t };
                        return Object.assign(
                            {
                                args: e,
                                isEnabled: Boolean((e && e.tooltipId) || t),
                                ignoreMouseClick: !0,
                                ignoreShowDelay: !t,
                            },
                            n,
                            r,
                        );
                    },
                    je = [Le.Small, Le.Big],
                    qe = [
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
                function Ye(e) {
                    return Object.entries(e || {}).map(([e, t]) => {
                        const r = { __Type: 'GFValueProxy', name: e };
                        switch (typeof t) {
                            case 'number':
                                r.number = t;
                                break;
                            case 'boolean':
                                r.bool = t;
                                break;
                            case 'undefined':
                                break;
                            default:
                                r.string = t.toString();
                        }
                        return r;
                    });
                }
                const ze = (e, t, r = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: Ne.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: n,
                                },
                                r,
                            ),
                        );
                    },
                    Xe = (e) => {
                        let t = e.children,
                            r = e.contentId,
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
                            h = e.isEnabled,
                            E = void 0 === h || h,
                            p = e.targetId,
                            v = void 0 === p ? 0 : p,
                            w = e.onShow,
                            f = e.onHide,
                            b = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                                return a;
                            })(e, qe);
                        const y = (0, n.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            T = (0, n.useMemo)(
                                () =>
                                    v ||
                                    ((e = 1) => {
                                        const t = new Error().stack;
                                        let r,
                                            n = R.invalid('resId');
                                        return (
                                            t &&
                                                ((r = t.split('\n')[e].split('.js')[0].split('/').pop() || ''),
                                                window.__feature &&
                                                    window.__feature !== r &&
                                                    window.subViews[r] &&
                                                    (n = window.subViews[r].id)),
                                            { caller: r, stack: t, resId: n }
                                        );
                                    })().resId,
                                [v],
                            ),
                            S = (0, n.useCallback)(() => {
                                (y.current.isVisible && y.current.timeoutId) ||
                                    (ze(r, g, { isMouseEvent: !0, on: !0, arguments: Ye(a) }, T),
                                    w && w(),
                                    (y.current.isVisible = !0));
                            }, [r, g, a, T, w]),
                            O = (0, n.useCallback)(() => {
                                if (y.current.isVisible || y.current.timeoutId) {
                                    const e = y.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (y.current.timeoutId = 0)),
                                        ze(r, g, { on: !1 }, T),
                                        y.current.isVisible && f && f(),
                                        (y.current.isVisible = !1);
                                }
                            }, [r, g, T, f]),
                            x = (0, n.useCallback)((e) => {
                                y.current.isVisible &&
                                    ((y.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (y.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(y.current.prevTarget) && O();
                                    }, 200)));
                            }, []);
                        (0, n.useEffect)(() => {
                            const e = y.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', x, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', x, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, n.useEffect)(() => {
                                !1 === E && O();
                            }, [E, O]),
                            (0, n.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', O),
                                    () => {
                                        window.removeEventListener('mouseleave', O), O();
                                    }
                                ),
                                [O],
                            );
                        return E
                            ? (0, n.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((L = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((y.current.timeoutId = window.setTimeout(S, u ? 100 : 400)),
                                                      i && i(e),
                                                      L && L(e));
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
                        var L;
                    },
                    Ke = ['children'];
                function Qe() {
                    return (
                        (Qe =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        Qe.apply(this, arguments)
                    );
                }
                const Ze = (e) => {
                        let t = e.children,
                            r = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                                return a;
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
                                r,
                            ),
                            t,
                        );
                    },
                    Je = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function et() {
                    return (
                        (et =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        et.apply(this, arguments)
                    );
                }
                const tt = R.views.common.tooltip_window.simple_tooltip_content,
                    rt = (e) => {
                        let t = e.children,
                            r = e.body,
                            i = e.header,
                            o = e.note,
                            s = e.alert,
                            l = e.args,
                            c = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                                return a;
                            })(e, Je);
                        const u = (0, n.useMemo)(() => {
                            const e = Object.assign({}, l, { body: r, header: i, note: o, alert: s });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [s, r, i, o, l]);
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
                function nt() {
                    return (
                        (nt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        nt.apply(this, arguments)
                    );
                }
                const at = ({ children: e, tooltipArgs: t, className: r }) => {
                        if (!t) return e;
                        const n = a().createElement('div', { className: r }, e);
                        if (t.header || t.body) return a().createElement(rt, t, n);
                        const i = t.contentId;
                        return i ? a().createElement(Xe, nt({}, t, { contentId: i }), n) : a().createElement(Ze, t, n);
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
                        isPeriodic: r = !1,
                        size: n = Le.Big,
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
                                if (void 0 === t || !je.includes(e)) return null;
                                switch (t) {
                                    case Me.BATTLE_BOOSTER:
                                    case Me.BATTLE_BOOSTER_REPLACE:
                                        return ke.BATTLE_BOOSTER;
                                }
                            })(n, i),
                            h = ((e) => {
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
                            E = ((e, t) => {
                                if (void 0 === e) return null;
                                switch (t) {
                                    case Pe.MULTI: {
                                        const t = Number(e);
                                        return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                                    }
                                    case Pe.CURRENCY:
                                    case Pe.NUMBER:
                                        return a().createElement(De, { format: 'integral', value: Number(e) });
                                    case Pe.PREMIUM_PLUS: {
                                        const t = Number(e);
                                        return isNaN(t) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(o, s);
                        return a().createElement(
                            'div',
                            { className: f()(it.base, it[`base__${n}`], u), style: c },
                            a().createElement(
                                at,
                                { tooltipArgs: _, className: it.tooltipWrapper },
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement(
                                        'div',
                                        { className: f()(it.image, null == d ? void 0 : d.image) },
                                        g &&
                                            a().createElement('div', {
                                                className: f()(it.highlight, null == d ? void 0 : d.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${g}_highlight)`,
                                                },
                                            }),
                                        t &&
                                            a().createElement('div', {
                                                className: f()(it.icon, null == d ? void 0 : d.rewardIcon),
                                                style: { backgroundImage: `url(${t})` },
                                            }),
                                        h &&
                                            a().createElement('div', {
                                                className: f()(it.overlay, null == d ? void 0 : d.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${n}.${h}_overlay)`,
                                                },
                                            }),
                                    ),
                                    E &&
                                        a().createElement(
                                            'div',
                                            {
                                                className: f()(
                                                    it.info,
                                                    it[`info__${e}`],
                                                    s === Pe.MULTI && it.info__multi,
                                                    null == d ? void 0 : d.info,
                                                ),
                                            },
                                            E,
                                        ),
                                    l && a().createElement('div', { className: it.title }, l),
                                ),
                            ),
                            r &&
                                a().createElement(
                                    at,
                                    { tooltipArgs: m },
                                    a().createElement('div', {
                                        className: f()(it.timer, null == d ? void 0 : d.periodicIcon),
                                    }),
                                ),
                        );
                    };
                function st(e, t) {
                    return Array.isArray(e) ? e.map(t) : e.map((e, r, n) => t(null == e ? void 0 : e.value, r, n));
                }
                var lt = r(30);
                const ct = 'AnimatedReward_base_f5',
                    ut = (e) => Math.sqrt(1 - Math.pow(--e, 2)),
                    dt = 800,
                    _t = 400,
                    mt = 'equipCoin',
                    gt = ({ index: e = 0, delay: t = 0, onEnd: r, isCompensation: n, children: i }) => {
                        const o = (0, lt.useSpring)({
                            from: { transform: 'translateY(20rem) scale(1.2)', opacity: 0 },
                            to: { transform: 'translateY(0rem) scale(1)', opacity: 1 },
                            delay: t + 200 * e,
                            config: { duration: _t, easing: ut },
                            onStart: () => {
                                $('gui_random_reward_appear'), n && $('gui_reward_screen_compensation');
                            },
                            onRest: r,
                        });
                        return a().createElement(lt.animated.div, { className: ct, style: o }, i);
                    },
                    ht = (e, t, r) => () => {
                        e === t.length - 1 && r();
                    },
                    Et = {
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
                        (vt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        vt.apply(this, arguments)
                    );
                }
                const wt = (0, X.Pi)(() => {
                        const e = ie(),
                            t = e.model,
                            r = e.controls,
                            n = ((e) => {
                                switch (e) {
                                    case T.ExtraSmall:
                                    case T.Small:
                                        return Le.S232x174;
                                    case T.Medium:
                                        return Le.S296x222;
                                    case T.Large:
                                    case T.ExtraLarge:
                                        return Le.S400x300;
                                }
                            })(x().mediaSize);
                        return a().createElement(
                            'div',
                            { className: pt },
                            st(t.rewards.get(), (e, t, i) => {
                                const o = e.tooltipId,
                                    s = Ve({ tooltipId: o }, Number(e.tooltipContentId)),
                                    l = Ge(e.name),
                                    c = l === Pe.CURRENCY || e.name === mt;
                                return a().createElement(
                                    gt,
                                    { key: t, index: t, delay: dt, onEnd: ht(t, i, r.showFooter) },
                                    a().createElement(
                                        ot,
                                        vt({}, e, {
                                            image: $e(e, n),
                                            size: n,
                                            special: e.overlayType,
                                            valueType: l,
                                            tooltipArgs: s,
                                            classNames: {
                                                info: f()(Et.info, c && Et.info__currency),
                                                overlay: f()(Et.overlay, Et[`overlay__${e.overlayType}`]),
                                            },
                                        }),
                                    ),
                                    !c &&
                                        a().createElement(
                                            'div',
                                            { className: Et.labelWrapper },
                                            a().createElement('div', { className: Et.label }, e.label),
                                        ),
                                );
                            }),
                        );
                    }),
                    ft = 'StyleReward_base_16',
                    bt = 'StyleReward_image_4f',
                    yt = 'StyleReward_text_ed',
                    Tt = R.strings.clan_supply.rewardsView.style,
                    St = ({ id: e, size: t, tooltipArgs: r }) => {
                        const n = R.images.gui.maps.icons.clanSupply.rewardsView.rewards.$dyn(`c_${e}`);
                        return a().createElement(
                            at,
                            { tooltipArgs: r },
                            a().createElement(
                                'div',
                                { className: ft },
                                t &&
                                    a().createElement('div', {
                                        className: bt,
                                        style: { backgroundImage: `url(${n.$dyn(t)})` },
                                    }),
                                a().createElement('div', { className: yt }, Tt.$dyn(`c_${e}`)),
                            ),
                        );
                    },
                    Rt = 'EliteRewards_base_df';
                function Ot() {
                    return (
                        (Ot =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        Ot.apply(this, arguments)
                    );
                }
                const xt = (0, X.Pi)(() => {
                        const e = ie(),
                            t = e.model,
                            r = e.controls,
                            n = ((e) => {
                                switch (e) {
                                    case T.ExtraSmall:
                                    case T.Small:
                                        return Le.S232x174;
                                    case T.Medium:
                                    case T.Large:
                                    case T.ExtraLarge:
                                        return Le.S400x300;
                                }
                            })(x().mediaSize);
                        return a().createElement(
                            'div',
                            { className: Rt },
                            st(t.rewards.get(), (e, t, i) => {
                                const o = e.tooltipId,
                                    s = Ve({ tooltipId: o }, Number(e.tooltipContentId)),
                                    l = Ge(e.name),
                                    c = l === Pe.CURRENCY || e.name === mt,
                                    u = e.name === Oe.Customizations;
                                return a().createElement(
                                    gt,
                                    { key: t, index: t, delay: dt, onEnd: ht(t, i, r.showFooter) },
                                    u
                                        ? a().createElement(St, { id: e.value, tooltipArgs: s, size: n })
                                        : a().createElement(
                                              ot,
                                              Ot({}, e, {
                                                  image: $e(e, n),
                                                  size: n,
                                                  special: e.overlayType,
                                                  valueType: l,
                                                  tooltipArgs: s,
                                                  classNames: {
                                                      info: f()(Et.info, c && Et.info__currency),
                                                      overlay: f()(Et.overlay, Et[`overlay__${e.overlayType}`]),
                                                  },
                                              }),
                                          ),
                                    !c &&
                                        !u &&
                                        a().createElement(
                                            'div',
                                            { className: Et.labelWrapper },
                                            a().createElement('div', { className: Et.label }, e.label),
                                        ),
                                );
                            }),
                        );
                    }),
                    Lt = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'],
                    Pt = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1e3];
                const Mt = ['ko', 'no'].includes(R.strings.settings.LANGUAGE_CODE()),
                    kt = (e) =>
                        Mt
                            ? `${e}`
                            : (function (e) {
                                  let t = '';
                                  for (let r = Pt.length - 1; r >= 0; r--)
                                      for (; e >= Pt[r]; ) (t += Lt[r]), (e -= Pt[r]);
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
                function jt() {
                    return (
                        (jt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        jt.apply(this, arguments)
                    );
                }
                const qt = (0, X.Pi)(({ showDelay: e }) => {
                    const t = ie(),
                        r = t.model,
                        n = t.controls,
                        i = ((e) => {
                            switch (e) {
                                case T.ExtraSmall:
                                case T.Small:
                                    return Le.Small;
                                case T.Medium:
                                case T.Large:
                                case T.ExtraLarge:
                                    return Le.Big;
                            }
                        })(x().mediaSize);
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
                            st(r.additionalRewards.get(), (t, r, o) => {
                                const s = t.tooltipId,
                                    l = Ve({ tooltipId: s }, Number(t.tooltipContentId)),
                                    c = Ge(t.name),
                                    u = c === Pe.CURRENCY || t.name === mt,
                                    d = t.name === Oe.Customizations;
                                return a().createElement(
                                    gt,
                                    { key: r, index: r, delay: e + 200 + _t, onEnd: ht(r, o, n.showFooter) },
                                    a().createElement(
                                        ot,
                                        jt({}, t, {
                                            image: $e(t, i),
                                            size: i,
                                            special: t.overlayType,
                                            valueType: c,
                                            tooltipArgs: l,
                                            classNames: {
                                                info: f()(Et.info, u && Et.info__currency, d && Et.info__hidden),
                                                overlay: f()(Et.overlay, Et[`overlay__${t.overlayType}`]),
                                            },
                                        }),
                                    ),
                                    !u &&
                                        !d &&
                                        a().createElement(
                                            'div',
                                            { className: Et.labelWrapper },
                                            a().createElement('div', { className: Et.label }, t.label),
                                        ),
                                );
                            }),
                        ),
                    );
                });
                function Yt() {
                    return (
                        (Yt =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        Yt.apply(this, arguments)
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
                            r = e.controls,
                            n = t.computes.hasAdditionalRewards(),
                            i = ((e) => {
                                switch (e) {
                                    case T.ExtraSmall:
                                    case T.Small:
                                    case T.Medium:
                                        return Le.S400x300;
                                    case T.Large:
                                    case T.ExtraLarge:
                                        return Le.S600x450;
                                }
                            })(x().mediaSize),
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
                                            const r = Number(e),
                                                n =
                                                    r ===
                                                    Xt.loot_box_compensation_tooltip.LootBoxVehicleCompensationTooltipContent(
                                                        'resId',
                                                    )
                                                        ? Xt.tooltip_window.TooltipWindow('resId')
                                                        : void 0;
                                            return Ve({ tooltipId: t }, r, { decoratorId: n, ignoreShowDelay: !0 });
                                        })(e.tooltipContentId, s),
                                        c = e.name === Oe.Vehicles;
                                    return (
                                        c && r.changeCButtonToVehiclePreview(),
                                        a().createElement(
                                            gt,
                                            {
                                                key: t,
                                                index: zt(t),
                                                delay: dt,
                                                onEnd: n ? void 0 : ht(t, o, r.showFooter),
                                                isCompensation: e.isCompensation,
                                            },
                                            c
                                                ? a().createElement(At, { tooltipArgs: l })
                                                : a().createElement(
                                                      'div',
                                                      { className: Ut },
                                                      a().createElement(
                                                          ot,
                                                          Yt({}, e, {
                                                              image: $e(e, i),
                                                              size: i,
                                                              valueType: Ge(e.name),
                                                              tooltipArgs: l,
                                                              classNames: {
                                                                  info: f()(
                                                                      Et.info,
                                                                      e.isCompensation && Et.info__compensation,
                                                                  ),
                                                                  overlay: f()(
                                                                      Et.overlay,
                                                                      Et[`overlay__${e.overlayType}`],
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
                            n && a().createElement('div', { className: Wt }, a().createElement(qt, { showDelay: o })),
                        );
                    }),
                    Qt = (0, X.Pi)(() => {
                        switch (ie().model.root.get().type) {
                            case Ee.COMMON:
                                return a().createElement(wt, null);
                            case Ee.ELITE_WITH_VEHICLE:
                                return a().createElement(Kt, null);
                            case Ee.ELITE:
                                return a().createElement(xt, null);
                            default:
                                return null;
                        }
                    }),
                    Zt = (0, X.Pi)(() => {
                        const e = ie().model.root.get().type === Ee.ELITE_WITH_VEHICLE;
                        return a().createElement(
                            'div',
                            { className: f()(pe, e && fe) },
                            a().createElement(
                                'div',
                                { className: ve },
                                a().createElement('div', { className: be }),
                                a().createElement('div', { className: we }),
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
                            a().createElement('div', { className: W }, a().createElement(he, null)),
                            a().createElement('div', { className: F }, a().createElement(Zt, null)),
                            a().createElement(ue, null),
                        ),
                    er = {
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
                    tr = [
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
                function rr() {
                    return (
                        (rr =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        rr.apply(this, arguments)
                    );
                }
                class nr extends a().PureComponent {
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
                            r = e.onClick,
                            n = e.goto,
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
                                    var r,
                                        n,
                                        a = {},
                                        i = Object.keys(e);
                                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                                    return a;
                                })(e, tr)),
                            m = f()(er.base, er[`base__${o}`], er[`base__${i}`], null == s ? void 0 : s.base),
                            g = f()(er.icon, er[`icon__${o}`], er[`icon__${i}`], null == s ? void 0 : s.icon),
                            h = f()(er.glow, null == s ? void 0 : s.glow),
                            E = f()(er.caption, er[`caption__${o}`], null == s ? void 0 : s.caption),
                            p = f()(er.goto, null == s ? void 0 : s.goto);
                        return a().createElement(
                            'div',
                            rr(
                                {
                                    className: m,
                                    onMouseEnter: this._onMouseEnter(l),
                                    onMouseLeave: this._onMouseLeave(c),
                                    onMouseDown: this._onMouseDown(u),
                                    onMouseUp: this._onMouseUp(d),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: r,
                                },
                                _,
                            ),
                            'info' !== o && a().createElement('div', { className: er.shine }),
                            a().createElement('div', { className: g }, a().createElement('div', { className: h })),
                            a().createElement('div', { className: E }, t),
                            n && a().createElement('div', { className: p }, n),
                        );
                    }
                }
                nr.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                var ar = r(521);
                const ir = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function or(e = ar.n.NONE, t = ir, r = !1, a = !1) {
                    (0, n.useEffect)(() => {
                        if (e !== ar.n.NONE)
                            return (
                                window.addEventListener('keydown', n, r),
                                () => {
                                    window.removeEventListener('keydown', n, r);
                                }
                            );
                        function n(n) {
                            if (n.keyCode === e) {
                                if (!a && o.O.view.isEventHandled()) return;
                                o.O.view.setEventHandled(), t(n), r && n.stopPropagation();
                            }
                        }
                    }, [t, e, r, a]);
                }
                const sr = (0, X.Pi)(() => {
                    const e = ie().controls;
                    var t;
                    return (
                        (t = e.close),
                        or(ar.n.ESCAPE, t),
                        a().createElement(nr, {
                            type: 'close',
                            side: 'right',
                            caption: R.strings.clan_supply.rewardsView.button.close(),
                            onClick: e.close,
                        })
                    );
                });
                var lr = r(112);
                const cr = [
                    'src',
                    'className',
                    'autoplay',
                    'style',
                    'loop',
                    'isPrebufferKeyframes',
                    'keyframesNameConfig',
                    'onClick',
                ];
                function ur() {
                    return (
                        (ur =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                }
                                return e;
                            }),
                        ur.apply(this, arguments)
                    );
                }
                const dr = (0, n.forwardRef)(function (e, t) {
                        let r = e.src,
                            i = e.className,
                            s = e.autoplay,
                            l = void 0 !== s && s,
                            c = e.style,
                            u = e.loop,
                            d = void 0 !== u && u,
                            _ = e.isPrebufferKeyframes,
                            m = e.keyframesNameConfig,
                            g = e.onClick,
                            h = (function (e, t) {
                                if (null == e) return {};
                                var r,
                                    n,
                                    a = {},
                                    i = Object.keys(e);
                                for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                                return a;
                            })(e, cr);
                        const E = t,
                            p = (0, n.useRef)(null);
                        var v;
                        return (
                            (v = () =>
                                o.O.view.events.onDisplayChanged((e, t) => {
                                    var r, n;
                                    t === lr.W.hidden && (null == (r = p.current) || r.pause()),
                                        t === lr.W.shown && (null == (n = p.current) || n.play());
                                })),
                            (0, n.useEffect)(v, []),
                            (0, n.useEffect)(
                                () =>
                                    ((e) => {
                                        let t,
                                            r = null;
                                        return (
                                            (r = requestAnimationFrame(() => {
                                                r = requestAnimationFrame(() => {
                                                    (r = null), (t = e());
                                                });
                                            })),
                                            () => {
                                                'function' == typeof t && t(), null !== r && cancelAnimationFrame(r);
                                            }
                                        );
                                    })(() => {
                                        const e = p.current;
                                        if (!E || !e || !_)
                                            return void (null != e && e.cohFastSeek && (e.cohFastSeek = !1));
                                        const t = e.cohGetKeyframeTimestamps();
                                        t.length > 0
                                            ? ((e.cohFastSeek = !0),
                                              t.map((t) => {
                                                  null == e || e.cohPrebufferKeyframe(t);
                                              }))
                                            : console.warn("Can't prebuffered keyframes, keyframes was not found");
                                    }),
                                [_, E],
                            ),
                            (0, n.useEffect)(() => {
                                if (E && p.current) {
                                    const e = { changeTimeHandlers: [], changeKeyframeHandlers: [], changeTimeLoop: Q },
                                        t = () => {
                                            let t = 0;
                                            const r = (function (e) {
                                                    let t = 0;
                                                    return [
                                                        function r() {
                                                            e(), (t = requestAnimationFrame(r));
                                                        },
                                                        function () {
                                                            cancelAnimationFrame(t);
                                                        },
                                                    ];
                                                })(() => {
                                                    if (p.current) {
                                                        const r = p.current,
                                                            n = r.currentTime,
                                                            a = r.duration;
                                                        if (
                                                            (t !== n &&
                                                                (e.changeTimeHandlers.forEach((e) =>
                                                                    e({ currentTime: n, duration: a }),
                                                                ),
                                                                (t = n)),
                                                            p.current.paused || !E || !_)
                                                        )
                                                            return;
                                                        const i = p.current.cohGetKeyframeTimestamps();
                                                        i.forEach((t, r) => {
                                                            n > i[r] - 0.02 &&
                                                                n < i[r] &&
                                                                e.changeKeyframeHandlers.forEach((e) => {
                                                                    const n = Object.keys(null != m ? m : {})[r];
                                                                    return e({
                                                                        time: t,
                                                                        name: `${m ? n : `Point_${r}`}`,
                                                                    });
                                                                });
                                                        });
                                                    }
                                                }),
                                                n = r[0],
                                                a = r[1];
                                            return n(), a;
                                        };
                                    e.changeTimeLoop = t();
                                    const r = (t) => (
                                            e.changeTimeHandlers.push(t),
                                            () => {
                                                const r = e.changeTimeHandlers,
                                                    n = r.indexOf(t);
                                                n < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeTimeHandler, this reference was not found",
                                                      )
                                                    : r.splice(n, 1);
                                            }
                                        ),
                                        n = (t) => (
                                            e.changeKeyframeHandlers.push(t),
                                            () => {
                                                const r = e.changeKeyframeHandlers,
                                                    n = r.indexOf(t);
                                                n < 0
                                                    ? console.warn(
                                                          "Can't unsubscribe changeKeyframeHandlers, this reference was not found",
                                                      )
                                                    : r.splice(n, 1);
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
                                            var t, r, n;
                                            p.current &&
                                                (p.current.currentTime =
                                                    ((t = 0),
                                                    (r = p.current.duration),
                                                    (n = e) < t ? t : n > r ? r : n));
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
                                        h = () => {
                                            (e.changeTimeHandlers = []),
                                                (e.changeKeyframeHandlers = []),
                                                null == e.changeTimeLoop || e.changeTimeLoop();
                                        },
                                        v = (e, t) => {
                                            var r;
                                            return (
                                                null == (r = p.current) || r.addEventListener(e, t),
                                                () => {
                                                    var r;
                                                    return null == (r = p.current)
                                                        ? void 0
                                                        : r.removeEventListener(e, t);
                                                }
                                            );
                                        },
                                        w = (e, t) => {
                                            var r;
                                            return (
                                                null == (r = p.current) || r.removeEventListener(e, t),
                                                () => {
                                                    var r;
                                                    return null == (r = p.current)
                                                        ? void 0
                                                        : r.removeEventListener(e, t);
                                                }
                                            );
                                        };
                                    return (
                                        (E.current = {
                                            on: v,
                                            off: w,
                                            play: s,
                                            pause: l,
                                            stop: c,
                                            cleanup: h,
                                            getCurrentTime: a,
                                            getDuration: i,
                                            getCachedKeyframes: u,
                                            goToAndPlay: d,
                                            goToAndStop: g,
                                            setCurrentTime: o,
                                            domRef: p.current,
                                            onChangeTime: r,
                                            onKeyframes: n,
                                        }),
                                        () => {
                                            h(), (E.current = null);
                                        }
                                    );
                                }
                            }, [m, E, _]),
                            (0, n.useEffect)(() => {
                                p.current && l && p.current.play();
                            }, [l, d]),
                            (0, n.useEffect)(() => {
                                if (p.current)
                                    return () => {
                                        p.current && p.current.pause();
                                    };
                            }, []),
                            a().createElement(
                                'video',
                                ur({ src: r, className: i, style: c, loop: d, ref: p, onClick: g }, h),
                            )
                        );
                    }),
                    _r = (0, n.memo)(dr),
                    mr = 'VideoBack_base_e2',
                    gr = 'VideoBack_video_ac',
                    hr = (e, t) => {
                        const r = e.$dyn(t);
                        if ('string' == typeof r) return r;
                        throw new Error(`Video filename ${t} is invalid`);
                    },
                    Er = () => {
                        const e = x().mediaWidth;
                        return a().createElement(
                            'div',
                            { className: mr, key: e },
                            a().createElement(_r, {
                                className: gr,
                                src: hr(R.videos.clan_supply, `clouds_${e}`),
                                loop: !0,
                                autoplay: !0,
                            }),
                        );
                    },
                    pr = 'Background_base_f5',
                    vr = 'Background_base__2x_1b',
                    wr = 'Background_base__shaded_0f',
                    fr = 'Background_shadow_ba',
                    br = 'Background_videoBack_d9',
                    yr = ({ isShaded: e = !1, withVideo: t = !1 }) => {
                        const r = 2 === o.O.view.getScale();
                        return a().createElement(
                            'div',
                            { className: f()(pr, r && vr, e && wr) },
                            e && a().createElement('div', { className: fr }),
                            t && a().createElement('div', { className: br }, a().createElement(Er, null)),
                        );
                    },
                    Tr = () =>
                        a().createElement(
                            'div',
                            { className: U },
                            a().createElement(yr, { isShaded: !0 }),
                            a().createElement('div', { className: H }, a().createElement(sr, null)),
                            a().createElement(Jt, null),
                        );
                engine.whenReady.then(() => {
                    B().render(
                        a().createElement(ae, null, a().createElement(D, null, a().createElement(Tr, null))),
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
        var r = (__webpack_module_cache__[e] = { exports: {} });
        return __webpack_modules__[e](r, r.exports, __webpack_require__), r.exports;
    }
    (__webpack_require__.m = __webpack_modules__),
        (deferred = []),
        (__webpack_require__.O = (e, t, r, n) => {
            if (!t) {
                var a = 1 / 0;
                for (l = 0; l < deferred.length; l++) {
                    for (var [t, r, n] = deferred[l], i = !0, o = 0; o < t.length; o++)
                        (!1 & n || a >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[o]))
                            ? t.splice(o--, 1)
                            : ((i = !1), n < a && (a = n));
                    if (i) {
                        deferred.splice(l--, 1);
                        var s = r();
                        void 0 !== s && (e = s);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var l = deferred.length; l > 0 && deferred[l - 1][2] > n; l--) deferred[l] = deferred[l - 1];
            deferred[l] = [t, r, n];
        }),
        (__webpack_require__.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return __webpack_require__.d(t, { a: t }), t;
        }),
        (__webpack_require__.d = (e, t) => {
            for (var r in t)
                __webpack_require__.o(t, r) &&
                    !__webpack_require__.o(e, r) &&
                    Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
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
            var t = (t, r) => {
                    var n,
                        a,
                        [i, o, s] = r,
                        l = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (n in o) __webpack_require__.o(o, n) && (__webpack_require__.m[n] = o[n]);
                        if (s) var c = s(__webpack_require__);
                    }
                    for (t && t(r); l < i.length; l++)
                        (a = i[l]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(c);
                },
                r = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [687], () => __webpack_require__(711));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
