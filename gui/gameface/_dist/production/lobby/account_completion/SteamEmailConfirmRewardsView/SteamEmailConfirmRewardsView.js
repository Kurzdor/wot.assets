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
            768: (e, t, n) => {
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
                        graphicsQuality: () => w,
                        playSound: () => h,
                        setRTPC: () => E,
                    });
                var i = {};
                n.r(i), n.d(i, { getBgUrl: () => R, getTextureUrl: () => T });
                var s = {};
                function o(e) {
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
                n.r(s),
                    n.d(s, {
                        addModelObserver: () => U,
                        addPreloadTexture: () => C,
                        children: () => i,
                        displayStatus: () => P,
                        displayStatusIs: () => J,
                        events: () => x,
                        extraSize: () => ee,
                        forceTriggerMouseMove: () => Q,
                        freezeTextureBeforeResize: () => $,
                        getBrowserTexturePath: () => B,
                        getDisplayStatus: () => Z,
                        getScale: () => q,
                        getSize: () => G,
                        getViewGlobalPosition: () => F,
                        isEventHandled: () => K,
                        isFocused: () => V,
                        pxToRem: () => Y,
                        remToPx: () => j,
                        resize: () => W,
                        sendEvent: () => I,
                        setAnimateWindow: () => z,
                        setEventHandled: () => X,
                        setInputPaddingsRem: () => N,
                        setSidePaddingsRem: () => H,
                        whenTutorialReady: () => te,
                    });
                const c = o('clientResized'),
                    u = o('self.onScaleUpdated'),
                    d = (e, t) => engine.on(e, t),
                    _ = (e, t) => engine.off(e, t),
                    m = { down: o('mousedown'), up: o('mouseup'), move: o('mousemove') };
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
                                        s = m[t]((e) => n([e, 'outside']));
                                    function o(e) {
                                        n([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(i, o),
                                        r(),
                                        () => {
                                            a &&
                                                (s(),
                                                window.removeEventListener(i, o),
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
                function h(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error(`playSound('${e}'): `, t);
                    });
                }
                function E(e, t) {
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
                const w = {
                        isLow: () => 1 === viewEnv.getGraphicsQuality(),
                        isHigh: () => 0 === viewEnv.getGraphicsQuality(),
                        get: () => viewEnv.getGraphicsQuality(),
                    },
                    b = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    f = Object.keys(b).reduce((e, t) => ((e[t] = () => h(b[t])), e), {}),
                    S = { play: Object.assign({}, f, { sound: h }), setRTPC: E };
                function T(e, t, n = 1) {
                    return viewEnv.getChildTexturePath(e, t.width, t.height, n);
                }
                function R(e, t, n) {
                    return `url(${T(e, t, n)})`;
                }
                const P = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    x = {
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
                    O = ['args'];
                const L = 2,
                    y = 16,
                    M = 32,
                    k = 64,
                    D = (e, t) => {
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
                                })(t, O);
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
                    I = {
                        close(e) {
                            D('popover' === e ? L : M);
                        },
                        minimize() {
                            D(k);
                        },
                        move(e) {
                            D(y, { isMouseEvent: !0, on: e });
                        },
                    },
                    A = 15;
                function C(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function N(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, A);
                }
                function B(e, t, n, r = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, t, n, r);
                }
                function U(e, t, n) {
                    return viewEnv.addDataChangedCallback(e, t, n);
                }
                function H(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, A);
                }
                function G(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function W(e, t, n = 'px') {
                    return 'rem' === n ? viewEnv.resizeViewRem(e, t) : viewEnv.resizeViewPx(e, t);
                }
                function F(e = 'rem') {
                    const t = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? t : { x: j(t.x), y: j(t.y) };
                }
                function $() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function q() {
                    return viewEnv.getScale();
                }
                function Y(e) {
                    return viewEnv.pxToRem(e);
                }
                function j(e) {
                    return viewEnv.remToPx(e);
                }
                function z(e, t) {
                    viewEnv.setAnimateWindow(e, t);
                }
                function V() {
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
                const J = Object.keys(P).reduce((e, t) => ((e[t] = () => viewEnv.getShowingStatus() === P[t]), e), {}),
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
                            window.isDomBuilt ? e() : x.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    ne = { view: s, client: a, sound: S };
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
                var r = n(768);
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
                n.d(t, { B3: () => l, Z5: () => s.Z5, B0: () => o, ry: () => p });
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
                const l = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    c = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    u = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    d = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var _ = n(521),
                    m = n(768);
                const g = ['args'];
                function h(e, t, n, r, a, i, s) {
                    try {
                        var o = e[i](s),
                            l = o.value;
                    } catch (e) {
                        return void n(e);
                    }
                    o.done ? t(l) : Promise.resolve(l).then(r, a);
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
                                        n = arguments;
                                    return new Promise(function (r, a) {
                                        var i = e.apply(t, n);
                                        function s(e) {
                                            h(i, r, a, s, o, 'next', e);
                                        }
                                        function o(e) {
                                            h(i, r, a, s, o, 'throw', e);
                                        }
                                        s(void 0);
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
                    w = () => v(o.CLOSE),
                    b = (e, t) => {
                        e.keyCode === _.n.ESCAPE && t();
                    };
                var f = n(572);
                const S = a.instance,
                    T = {
                        DataTracker: i.Z,
                        ViewModel: f.Z,
                        ViewEventType: o,
                        NumberFormatType: l,
                        RealFormatType: c,
                        TimeFormatType: u,
                        DateFormatType: d,
                        makeGlobalBoundingBox: E,
                        sendMoveEvent: (e) => v(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: w,
                        sendClosePopOverEvent: () => v(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, t, n = 0) => {
                            v(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: n, args: t });
                        },
                        sendShowPopOverEvent: (e, t, n, r, a = R.invalid('resId'), i) => {
                            const s = m.O.view.getViewGlobalPosition(),
                                l = n.getBoundingClientRect(),
                                c = l.x,
                                u = l.y,
                                d = l.width,
                                _ = l.height,
                                g = {
                                    x: m.O.view.pxToRem(c) + s.x,
                                    y: m.O.view.pxToRem(u) + s.y,
                                    width: m.O.view.pxToRem(d),
                                    height: m.O.view.pxToRem(_),
                                };
                            v(o.POP_OVER, {
                                isMouseEvent: !0,
                                contentID: e,
                                decoratorID: r || R.invalid('resId'),
                                targetID: a,
                                direction: t,
                                bbox: E(g),
                                on: !0,
                                args: i,
                            });
                        },
                        addEscapeListener: (e) => {
                            const t = (t) => b(t, e);
                            return (
                                window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t)
                            );
                        },
                        closeOnEsc: (e) => {
                            b(e, w);
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
                        isTooltipShown: () => viewEnv.isWindowShownByViewEvent(o.TOOLTIP),
                        isContextMenuShown: () => viewEnv.isWindowShownByViewEvent(o.CONTEXT_MENU),
                        isPopOverShown: () => viewEnv.isWindowShownByViewEvent(o.POP_OVER),
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
                        ClickOutsideManager: S,
                        SystemLocale: s.Z5,
                        UserLocale: s.cy,
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
            502: (e, t, n) => {
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
                var s = n(768);
                const o = {
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
                const u = s.O.client.getSize('rem'),
                    d = u.width,
                    _ = u.height,
                    m = Object.assign({ width: d, height: _ }, c(d, _, o)),
                    g = (0, r.createContext)(m),
                    h = ['children'];
                const E = (e) => {
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
                        })(e, h);
                    const a = (0, r.useContext)(g),
                        s = a.extraLarge,
                        o = a.large,
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
                        b = a.mediumHeight,
                        f = a.smallHeight,
                        S = a.extraSmallHeight,
                        T = { extraLarge: v, large: w, medium: b, small: f, extraSmall: S };
                    if (n.extraLarge || n.large || n.medium || n.small || n.extraSmall) {
                        if (n.extraLarge && s) return t;
                        if (n.large && o) return t;
                        if (n.medium && l) return t;
                        if (n.small && c) return t;
                        if (n.extraSmall && u) return t;
                    } else {
                        if (n.extraLargeWidth && d) return i(t, n, T);
                        if (n.largeWidth && _) return i(t, n, T);
                        if (n.mediumWidth && m) return i(t, n, T);
                        if (n.smallWidth && E) return i(t, n, T);
                        if (n.extraSmallWidth && p) return i(t, n, T);
                        if (
                            !(n.extraLargeWidth || n.largeWidth || n.mediumWidth || n.smallWidth || n.extraSmallWidth)
                        ) {
                            if (n.extraLargeHeight && v) return t;
                            if (n.largeHeight && w) return t;
                            if (n.mediumHeight && b) return t;
                            if (n.smallHeight && f) return t;
                            if (n.extraSmallHeight && S) return t;
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
                (0, r.memo)(E);
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
                                const n = s.O.view.pxToRem(e),
                                    r = s.O.view.pxToRem(t);
                                l(Object.assign({ width: n, height: r }, c(n, r, o)));
                            }, []),
                            d = (0, r.useCallback)(() => {
                                const e = s.O.client.getSize('px');
                                u(e.width, e.height);
                            }, [u]);
                        p(() => {
                            s.O.client.events.on('clientResized', u), s.O.client.events.on('self.onScaleUpdated', d);
                        }),
                            (0, r.useEffect)(
                                () => () => {
                                    s.O.client.events.off('clientResized', u),
                                        s.O.client.events.off('self.onScaleUpdated', d);
                                },
                                [u, d],
                            );
                        const _ = (0, r.useMemo)(() => Object.assign({}, i), [i]);
                        return a().createElement(g.Provider, { value: _ }, e);
                    };
                var w = n(483),
                    b = n.n(w),
                    f = n(926),
                    S = n.n(f);
                let T, P, x;
                !(function (e) {
                    (e[(e.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = o.small.width)] = 'Small'),
                        (e[(e.Medium = o.medium.width)] = 'Medium'),
                        (e[(e.Large = o.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge');
                })(T || (T = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = o.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = o.small.width)] = 'Small'),
                            (e[(e.Medium = o.medium.width)] = 'Medium'),
                            (e[(e.Large = o.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = o.extraLarge.width)] = 'ExtraLarge');
                    })(P || (P = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = o.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = o.small.height)] = 'Small'),
                            (e[(e.Medium = o.medium.height)] = 'Medium'),
                            (e[(e.Large = o.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = o.extraLarge.height)] = 'ExtraLarge');
                    })(x || (x = {}));
                const O = () => {
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
                                        return P.ExtraLarge;
                                    case e.largeWidth:
                                        return P.Large;
                                    case e.mediumWidth:
                                        return P.Medium;
                                    case e.smallWidth:
                                        return P.Small;
                                    case e.extraSmallWidth:
                                        return P.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), P.ExtraSmall;
                                }
                            })(e),
                            s = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return x.ExtraLarge;
                                    case e.largeHeight:
                                        return x.Large;
                                    case e.mediumHeight:
                                        return x.Medium;
                                    case e.smallHeight:
                                        return x.Small;
                                    case e.extraSmallHeight:
                                        return x.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), x.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: a, mediaWidth: i, mediaHeight: s, remScreenWidth: t, remScreenHeight: n };
                    },
                    L = ['children', 'className'];
                function y() {
                    return (
                        (y = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                  }
                                  return e;
                              }),
                        y.apply(null, arguments)
                    );
                }
                const M = {
                        [P.ExtraSmall]: '',
                        [P.Small]: S().SMALL_WIDTH,
                        [P.Medium]: `${S().SMALL_WIDTH} ${S().MEDIUM_WIDTH}`,
                        [P.Large]: `${S().SMALL_WIDTH} ${S().MEDIUM_WIDTH} ${S().LARGE_WIDTH}`,
                        [P.ExtraLarge]: `${S().SMALL_WIDTH} ${S().MEDIUM_WIDTH} ${S().LARGE_WIDTH} ${S().EXTRA_LARGE_WIDTH}`,
                    },
                    k = {
                        [x.ExtraSmall]: '',
                        [x.Small]: S().SMALL_HEIGHT,
                        [x.Medium]: `${S().SMALL_HEIGHT} ${S().MEDIUM_HEIGHT}`,
                        [x.Large]: `${S().SMALL_HEIGHT} ${S().MEDIUM_HEIGHT} ${S().LARGE_HEIGHT}`,
                        [x.ExtraLarge]: `${S().SMALL_HEIGHT} ${S().MEDIUM_HEIGHT} ${S().LARGE_HEIGHT} ${S().EXTRA_LARGE_HEIGHT}`,
                    },
                    D = {
                        [T.ExtraSmall]: '',
                        [T.Small]: S().SMALL,
                        [T.Medium]: `${S().SMALL} ${S().MEDIUM}`,
                        [T.Large]: `${S().SMALL} ${S().MEDIUM} ${S().LARGE}`,
                        [T.ExtraLarge]: `${S().SMALL} ${S().MEDIUM} ${S().LARGE} ${S().EXTRA_LARGE}`,
                    },
                    I = (e) => {
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
                            })(e, L);
                        const i = O(),
                            s = i.mediaWidth,
                            o = i.mediaHeight,
                            l = i.mediaSize;
                        return a().createElement('div', y({ className: b()(n, M[s], k[o], D[l]) }, r), t);
                    },
                    A = ['children'];
                const C = (e) => {
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
                        })(e, A);
                    return a().createElement(v, null, a().createElement(I, n, t));
                };
                var N = n(493),
                    B = n.n(N);
                function U(e) {
                    engine.call('PlaySound', e).catch((t) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', t);
                    });
                }
                const H = {
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
                let G, W;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(G || (G = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(W || (W = {}));
                const F = ({
                    children: e,
                    size: t,
                    isFocused: n,
                    type: i,
                    disabled: s,
                    mixClass: o,
                    soundHover: l,
                    soundClick: c,
                    onMouseEnter: u,
                    onMouseMove: d,
                    onMouseDown: _,
                    onMouseUp: m,
                    onMouseLeave: g,
                    onClick: h,
                }) => {
                    const E = (0, r.useRef)(null),
                        p = (0, r.useState)(n),
                        v = p[0],
                        w = p[1],
                        f = (0, r.useState)(!1),
                        S = f[0],
                        T = f[1];
                    return (
                        (0, r.useEffect)(() => {
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
                        (0, r.useEffect)(() => {
                            w(n);
                        }, [n]),
                        a().createElement(
                            'div',
                            {
                                ref: E,
                                className: b()(
                                    H.base,
                                    H[`base__${i}`],
                                    s && H.base__disabled,
                                    t && H[`base__${t}`],
                                    v && H.base__focus,
                                    S && H.base__highlightActive,
                                    o,
                                ),
                                onMouseEnter: function (e) {
                                    s || (null !== l && U(l), u && u(e));
                                },
                                onMouseMove: function (e) {
                                    d && d(e);
                                },
                                onMouseUp: function (e) {
                                    s || (m && m(e), T(!1));
                                },
                                onMouseDown: function (e) {
                                    s ||
                                        (null !== c && U(c),
                                        _ && _(e),
                                        n && (s || (E.current && (E.current.focus(), w(!0)))),
                                        T(!0));
                                },
                                onMouseLeave: function (e) {
                                    s || (g && g(e), T(!1));
                                },
                                onClick: function (e) {
                                    s || (h && h(e));
                                },
                            },
                            i !== G.ghost &&
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement('div', { className: H.back }),
                                    a().createElement('span', { className: H.texture }),
                                ),
                            a().createElement(
                                'span',
                                { className: b()(H.state, H.state__default) },
                                a().createElement('span', { className: H.stateDisabled }),
                                a().createElement('span', { className: H.stateHighlightHover }),
                                a().createElement('span', { className: H.stateHighlightActive }),
                            ),
                            a().createElement(
                                'span',
                                { className: H.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                F.defaultProps = { type: G.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const $ = F,
                    q = {
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
                    Y = [
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
                function j() {
                    return (
                        (j = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                  }
                                  return e;
                              }),
                        j.apply(null, arguments)
                    );
                }
                class z extends a().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (t) => {
                                e && e(t),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && U(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (t) => {
                                e && e(t), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (t) => {
                                e && e(t),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && U(this.props.soundClick);
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
                            s = e.type,
                            o = e.classNames,
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
                                })(e, Y)),
                            m = b()(q.base, q[`base__${s}`], q[`base__${i}`], null == o ? void 0 : o.base),
                            g = b()(q.icon, q[`icon__${s}`], q[`icon__${i}`], null == o ? void 0 : o.icon),
                            h = b()(q.glow, null == o ? void 0 : o.glow),
                            E = b()(q.caption, q[`caption__${s}`], null == o ? void 0 : o.caption),
                            p = b()(q.goto, null == o ? void 0 : o.goto);
                        return a().createElement(
                            'div',
                            j(
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
                            'info' !== s && a().createElement('div', { className: q.shine }),
                            a().createElement('div', { className: g }, a().createElement('div', { className: h })),
                            a().createElement('div', { className: E }, t),
                            r && a().createElement('div', { className: p }, r),
                        );
                    }
                }
                z.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const V = [];
                var X = n(521),
                    K = n(916);
                const Q = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function Z(e = X.n.NONE, t = Q, n = !1, a = !1) {
                    (0, r.useEffect)(() => {
                        if (e !== X.n.NONE)
                            return (
                                window.addEventListener('keydown', r, n),
                                () => {
                                    window.removeEventListener('keydown', r, n);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (!a && s.O.view.isEventHandled()) return;
                                s.O.view.setEventHandled(), t(r), n && r.stopPropagation();
                            }
                        }
                    }, [t, e, n, a]);
                }
                var J = n(403);
                class ee extends a().PureComponent {
                    render() {
                        let e;
                        if ('gold' === this.props.format) e = K.B3.GOLD;
                        else e = K.B3.INTEGRAL;
                        const t = K.Z5.getNumberFormat(this.props.value, e);
                        return void 0 !== this.props.value && void 0 !== t ? t : null;
                    }
                }
                let te, ne, re, ae, ie, se, oe, le;
                (ee.defaultProps = { format: 'integral' }),
                    (function (e) {
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
                    })(te || (te = {})),
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
                    })(ne || (ne = {})),
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
                    })(re || (re = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(ae || (ae = {})),
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
                    })(ie || (ie = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(se || (se = {})),
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
                    })(oe || (oe = {})),
                    (function (e) {
                        (e[(e.Engraving = 0)] = 'Engraving'), (e[(e.Background = 1)] = 'Background');
                    })(le || (le = {}));
                const ce = [
                        te.Items,
                        te.Equipment,
                        te.Xp,
                        te.XpFactor,
                        te.Blueprints,
                        te.BlueprintsAny,
                        te.Goodies,
                        te.Berths,
                        te.Slots,
                        te.Tokens,
                        te.CrewSkins,
                        te.CrewBooks,
                        te.Customizations,
                        te.CreditsFactor,
                        te.TankmenXp,
                        te.TankmenXpFactor,
                        te.FreeXpFactor,
                        te.BattleToken,
                        te.PremiumUniversal,
                        te.NaturalCover,
                        te.BpCoin,
                        te.BattlePassSelectToken,
                        te.BattlaPassFinalAchievement,
                        te.BattleBadge,
                        te.BonusX5,
                        te.CrewBonusX3,
                        te.NewYearInvoice,
                        te.EpicSelectToken,
                        te.Comp7TokenWeeklyReward,
                        te.DeluxeGift,
                        te.BattleBoosterGift,
                        te.OptionalDevice,
                    ],
                    ue = [te.Gold, te.Credits, te.Crystal, te.FreeXp],
                    de = [te.BattlePassPoints, te.EquipCoin],
                    _e = [te.PremiumPlus, te.Premium],
                    me = ['engravings', 'backgrounds'],
                    ge = ['engraving', 'background'],
                    he = (e, t = re.Small) => {
                        const n = e.name,
                            r = e.type,
                            a = e.value,
                            i = e.icon,
                            s = e.item,
                            o = e.dogTagType,
                            l = ((e) => {
                                switch (e) {
                                    case re.S600x450:
                                        return 'c_600x450';
                                    case re.S400x300:
                                        return 'c_400x300';
                                    case re.S296x222:
                                        return 'c_296x222';
                                    case re.S232x174:
                                        return 'c_232x174';
                                    case re.Big:
                                        return 'c_80x80';
                                    case re.Small:
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
                                return `R.images.gui.maps.icons.quests.bonuses.${t}.${s}`;
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
                                    const r = me[e];
                                    if (r) {
                                        const a = R.images.gui.maps.icons.dogtags.$dyn(t).$dyn(r),
                                            i = a.$dyn(n);
                                        return i ? `${i}` : `${a.$dyn(ge[e])}`;
                                    }
                                    return (
                                        console.error(
                                            'Unreachable branch: add dogTagType and icon folder for corresponding icon matching',
                                        ),
                                        ''
                                    );
                                })(o, t, i);
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
                    Ee = (e, t, n) => {
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
                    pe = [re.Small, re.Big];
                function ve() {
                    return !1;
                }
                console.log;
                var we = n(174);
                function be(e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (n) return (n = n.call(e)).next.bind(n);
                    if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                            if (e) {
                                if ('string' == typeof e) return fe(e, t);
                                var n = {}.toString.call(e).slice(8, -1);
                                return (
                                    'Object' === n && e.constructor && (n = e.constructor.name),
                                    'Map' === n || 'Set' === n
                                        ? Array.from(e)
                                        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                          ? fe(e, t)
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
                function fe(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                    return r;
                }
                const Se = (e) => (0 === e ? window : window.subViews.get(e));
                var Te = n(946);
                const Re = ((e, t) => {
                        const n = (0, r.createContext)({});
                        return [
                            function ({ mode: i = 'real', options: o, children: l, mocks: c }) {
                                const u = (0, r.useRef)([]),
                                    d = (n, r, a) => {
                                        var i;
                                        const o = (function ({
                                                initializer: e = !0,
                                                rootId: t = 0,
                                                getRoot: n = Se,
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
                                                const o = (e) => {
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
                                                            c = s.O.view.addModelObserver(l, t, !0);
                                                        return a.set(c, n), e && n(o(i)), c;
                                                    },
                                                    readByPath: o,
                                                    createCallback: (e, t) => {
                                                        const n = o(t);
                                                        return (...t) => {
                                                            n(e(...t));
                                                        };
                                                    },
                                                    createCallbackNoArgs: (e) => {
                                                        const t = o(e);
                                                        return () => {
                                                            t();
                                                        };
                                                    },
                                                    dispose: function () {
                                                        for (var e, n = be(a.keys()); !(e = n()).done; ) i(e.value, t);
                                                    },
                                                    unsubscribe: i,
                                                };
                                            })(r),
                                            l =
                                                'real' === n
                                                    ? o
                                                    : Object.assign({}, o, {
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
                                                            a = we.LO.box(r, { equals: ve });
                                                        return (
                                                            'real' === n &&
                                                                l.subscribe(
                                                                    (0, we.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    object: (e, t) => {
                                                        const r = null != t ? t : c(e),
                                                            a = we.LO.box(r, { equals: ve });
                                                        return (
                                                            'real' === n &&
                                                                l.subscribe(
                                                                    (0, we.aD)((e) => a.set(e)),
                                                                    e,
                                                                ),
                                                            a
                                                        );
                                                    },
                                                    primitives: (e, t) => {
                                                        const r = c(t);
                                                        if (Array.isArray(e)) {
                                                            const a = e.reduce(
                                                                (e, t) => ((e[t] = we.LO.box(r[t], {})), e),
                                                                {},
                                                            );
                                                            return (
                                                                'real' === n &&
                                                                    l.subscribe(
                                                                        (0, we.aD)((t) => {
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
                                                                s = i.reduce(
                                                                    (e, [t, n]) => ((e[n] = we.LO.box(r[t], {})), e),
                                                                    {},
                                                                );
                                                            return (
                                                                'real' === n &&
                                                                    l.subscribe(
                                                                        (0, we.aD)((e) => {
                                                                            i.forEach(([t, n]) => {
                                                                                s[n].set(e[t]);
                                                                            });
                                                                        }),
                                                                        t,
                                                                    ),
                                                                s
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
                                    h = m[1],
                                    E = (0, r.useState)(() => d(i, o, c)),
                                    p = E[0],
                                    v = E[1];
                                return (
                                    (0, r.useEffect)(() => {
                                        _.current ? v(d(g, o, c)) : (_.current = !0);
                                    }, [c, g, o]),
                                    (0, r.useEffect)(() => {
                                        h(i);
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
                            const t = { rewards: e.array('bonuses') },
                                n = (0, Te.Om)(() => {
                                    return (
                                        (e = t.rewards.get()),
                                        (n = (e) => {
                                            return {
                                                index: (t = e).index,
                                                name: t.name,
                                                image: (e) => he(t, e),
                                                value: t.value,
                                                valueType:
                                                    ((n = t.name),
                                                    ce.includes(n)
                                                        ? ae.MULTI
                                                        : ue.includes(n)
                                                          ? ae.CURRENCY
                                                          : de.includes(n)
                                                            ? ae.NUMBER
                                                            : _e.includes(n)
                                                              ? ae.PREMIUM_PLUS
                                                              : ae.STRING),
                                                special: t.overlayType,
                                                tooltipArgs: Ee({ tooltipId: t.tooltipId }),
                                            };
                                            var t, n;
                                        }),
                                        Array.isArray(e)
                                            ? e.map(n)
                                            : e.map((e, t, r) => n(null == e ? void 0 : e.value, t, r))
                                    );
                                    var e, n;
                                });
                            return Object.assign({}, t, { computes: { getRewards: n } });
                        },
                        ({ externalModel: e }) => ({ close: e.createCallbackNoArgs('onClose') }),
                    ),
                    Pe = Re[0],
                    xe = Re[1],
                    Oe = 'App_base_91',
                    Le = 'App_closeButton_f9',
                    ye = 'App_header_b0',
                    Me = 'App_title_35',
                    ke = 'App_subTitle_78',
                    De = 'App_rewards_07',
                    Ie = 'App_confirmButton_f7',
                    Ae = 'App_confirmButton__showed_0f',
                    Ce = [
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
                function Ne(e) {
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
                const Be = (e, t, n = {}, r = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: K.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: t,
                                    targetID: r,
                                },
                                n,
                            ),
                        );
                    },
                    Ue = (e) => {
                        let t = e.children,
                            n = e.contentId,
                            a = e.args,
                            i = e.onMouseEnter,
                            s = e.onMouseLeave,
                            o = e.onMouseDown,
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
                            b = e.onHide,
                            f = (function (e, t) {
                                if (null == e) return {};
                                var n = {};
                                for (var r in e)
                                    if ({}.hasOwnProperty.call(e, r)) {
                                        if (t.indexOf(r) >= 0) continue;
                                        n[r] = e[r];
                                    }
                                return n;
                            })(e, Ce);
                        const S = (0, r.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
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
                            P = (0, r.useCallback)(() => {
                                (S.current.isVisible && S.current.timeoutId) ||
                                    (Be(n, g, { isMouseEvent: !0, on: !0, arguments: Ne(a) }, T),
                                    w && w(),
                                    (S.current.isVisible = !0));
                            }, [n, g, a, T, w]),
                            x = (0, r.useCallback)(() => {
                                if (S.current.isVisible || S.current.timeoutId) {
                                    const e = S.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (S.current.timeoutId = 0)),
                                        Be(n, g, { on: !1 }, T),
                                        S.current.isVisible && b && b(),
                                        (S.current.isVisible = !1);
                                }
                            }, [n, g, T, b]),
                            O = (0, r.useCallback)((e) => {
                                S.current.isVisible &&
                                    ((S.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (S.current.hideTimerId = window.setTimeout(() => {
                                        const t = document.elementFromPoint(e.clientX, e.clientY);
                                        t && !t.isSameNode(S.current.prevTarget) && x();
                                    }, 200)));
                            }, []);
                        (0, r.useEffect)(() => {
                            const e = S.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', O, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', O, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, r.useEffect)(() => {
                                !1 === E && x();
                            }, [E, x]),
                            (0, r.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', x),
                                    () => {
                                        window.removeEventListener('mouseleave', x), x();
                                    }
                                ),
                                [x],
                            );
                        return E
                            ? (0, r.cloneElement)(
                                  t,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((L = t.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((S.current.timeoutId = window.setTimeout(P, u ? 100 : 400)),
                                                      i && i(e),
                                                      L && L(e));
                                              }),
                                          onMouseLeave: ((e) => (t) => {
                                              x(), null == s || s(t), null == e || e(t);
                                          })(t.props.onMouseLeave),
                                          onClick: ((e) => (t) => {
                                              !1 === _ && x(), null == l || l(t), null == e || e(t);
                                          })(t.props.onClick),
                                          onMouseDown: ((e) => (t) => {
                                              !1 === _ && x(), null == o || o(t), null == e || e(t);
                                          })(t.props.onMouseDown),
                                      },
                                      f,
                                  ),
                              )
                            : t;
                        var L;
                    },
                    He = ['children'];
                function Ge() {
                    return (
                        (Ge = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                  }
                                  return e;
                              }),
                        Ge.apply(null, arguments)
                    );
                }
                const We = (e) => {
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
                            })(e, He);
                        return a().createElement(
                            Ue,
                            Ge(
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
                    Fe = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function $e() {
                    return (
                        ($e = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                  }
                                  return e;
                              }),
                        $e.apply(null, arguments)
                    );
                }
                const qe = R.views.common.tooltip_window.simple_tooltip_content,
                    Ye = (e) => {
                        let t = e.children,
                            n = e.body,
                            i = e.header,
                            s = e.note,
                            o = e.alert,
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
                            })(e, Fe);
                        const u = (0, r.useMemo)(() => {
                            const e = Object.assign({}, l, { body: n, header: i, note: s, alert: o });
                            for (const t in e) void 0 === e[t] && delete e[t];
                            return e;
                        }, [o, n, i, s, l]);
                        return a().createElement(
                            Ue,
                            $e(
                                {
                                    contentId:
                                        ((d = null == l ? void 0 : l.hasHtmlContent),
                                        d ? qe.SimpleTooltipHtmlContent('resId') : qe.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: u,
                                },
                                c,
                            ),
                            t,
                        );
                        var d;
                    };
                function je() {
                    return (
                        (je = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                  }
                                  return e;
                              }),
                        je.apply(null, arguments)
                    );
                }
                const ze = ({ children: e, tooltipArgs: t, className: n }) => {
                        if (!t) return e;
                        const r = a().createElement('div', { className: n }, e);
                        if (t.header || t.body) return a().createElement(Ye, t, r);
                        const i = t.contentId;
                        return i ? a().createElement(Ue, je({}, t, { contentId: i }), r) : a().createElement(We, t, r);
                    },
                    Ve = {
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
                    Xe = ({
                        name: e,
                        image: t,
                        isPeriodic: n = !1,
                        size: r = re.Big,
                        special: i,
                        value: s,
                        valueType: o,
                        title: l,
                        style: c,
                        className: u,
                        classNames: d,
                        tooltipArgs: _,
                        periodicIconTooltipArgs: m,
                    }) => {
                        const g = ((e, t) => {
                                if (void 0 === t || !pe.includes(e)) return null;
                                switch (t) {
                                    case ie.BATTLE_BOOSTER:
                                    case ie.BATTLE_BOOSTER_REPLACE:
                                        return se.BATTLE_BOOSTER;
                                }
                            })(r, i),
                            h = ((e) => {
                                if (void 0 === e) return null;
                                switch (e) {
                                    case ie.BATTLE_BOOSTER:
                                        return oe.BATTLE_BOOSTER;
                                    case ie.BATTLE_BOOSTER_REPLACE:
                                        return oe.BATTLE_BOOSTER_REPLACE;
                                    case ie.BUILT_IN_EQUIPMENT:
                                        return oe.BUILT_IN_EQUIPMENT;
                                    case ie.EQUIPMENT_PLUS:
                                        return oe.EQUIPMENT_PLUS;
                                    case ie.EQUIPMENT_TROPHY_BASIC:
                                        return oe.EQUIPMENT_TROPHY_BASIC;
                                    case ie.EQUIPMENT_TROPHY_UPGRADED:
                                        return oe.EQUIPMENT_TROPHY_UPGRADED;
                                    case ie.EQUIPMENT_MODERNIZED_UPGRADED_1:
                                        return oe.EQUIPMENT_MODERNIZED_UPGRADED_1;
                                    case ie.EQUIPMENT_MODERNIZED_UPGRADED_2:
                                        return oe.EQUIPMENT_MODERNIZED_UPGRADED_2;
                                    case ie.EQUIPMENT_MODERNIZED_UPGRADED_3:
                                        return oe.EQUIPMENT_MODERNIZED_UPGRADED_3;
                                    case ie.PROGRESSION_STYLE_UPGRADED_1:
                                        return oe.PROGRESSION_STYLE_UPGRADED_1;
                                    case ie.PROGRESSION_STYLE_UPGRADED_2:
                                        return oe.PROGRESSION_STYLE_UPGRADED_2;
                                    case ie.PROGRESSION_STYLE_UPGRADED_3:
                                        return oe.PROGRESSION_STYLE_UPGRADED_3;
                                    case ie.PROGRESSION_STYLE_UPGRADED_4:
                                        return oe.PROGRESSION_STYLE_UPGRADED_4;
                                    case ie.PROGRESSION_STYLE_UPGRADED_5:
                                        return oe.PROGRESSION_STYLE_UPGRADED_5;
                                    case ie.PROGRESSION_STYLE_UPGRADED_6:
                                        return oe.PROGRESSION_STYLE_UPGRADED_6;
                                }
                            })(i),
                            E = ((e, t) => {
                                if (void 0 === e) return null;
                                switch (t) {
                                    case ae.MULTI: {
                                        const t = Number(e);
                                        return isFinite(t) && t > 1 ? `x${Math.floor(t)}` : null;
                                    }
                                    case ae.CURRENCY:
                                    case ae.NUMBER:
                                        return a().createElement(ee, { format: 'integral', value: Number(e) });
                                    case ae.PREMIUM_PLUS: {
                                        const t = Number(e);
                                        return isNaN(t) ? e : null;
                                    }
                                    default:
                                        return e;
                                }
                            })(s, o);
                        return a().createElement(
                            'div',
                            { className: b()(Ve.base, Ve[`base__${r}`], u), style: c },
                            a().createElement(
                                ze,
                                { tooltipArgs: _, className: Ve.tooltipWrapper },
                                a().createElement(
                                    a().Fragment,
                                    null,
                                    a().createElement(
                                        'div',
                                        { className: b()(Ve.image, null == d ? void 0 : d.image) },
                                        g &&
                                            a().createElement('div', {
                                                className: b()(Ve.highlight, null == d ? void 0 : d.highlight),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${g}_highlight)`,
                                                },
                                            }),
                                        t &&
                                            a().createElement('div', {
                                                className: b()(Ve.icon, null == d ? void 0 : d.rewardIcon),
                                                style: { backgroundImage: `url(${t})` },
                                            }),
                                        h &&
                                            a().createElement('div', {
                                                className: b()(Ve.overlay, null == d ? void 0 : d.overlay),
                                                style: {
                                                    backgroundImage: `url(R.images.gui.maps.icons.quests.bonuses.${r}.${h}_overlay)`,
                                                },
                                            }),
                                    ),
                                    E &&
                                        a().createElement(
                                            'div',
                                            {
                                                className: b()(
                                                    Ve.info,
                                                    Ve[`info__${e}`],
                                                    o === ae.MULTI && Ve.info__multi,
                                                    null == d ? void 0 : d.info,
                                                ),
                                            },
                                            E,
                                        ),
                                    l && a().createElement('div', { className: Ve.title }, l),
                                ),
                            ),
                            n &&
                                a().createElement(
                                    ze,
                                    { tooltipArgs: m },
                                    a().createElement('div', {
                                        className: b()(Ve.timer, null == d ? void 0 : d.periodicIcon),
                                    }),
                                ),
                        );
                    },
                    Ke = 'Rewards_base_09',
                    Qe = 'Rewards_rewardsRow_3c',
                    Ze = 'Rewards_lines_cd',
                    Je = 'Rewards_ribbonWrapper_39',
                    et = 'Rewards_ribbon_4b',
                    tt = 'Rewards_reward_b4';
                function nt() {
                    return (
                        (nt = Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = arguments[t];
                                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                  }
                                  return e;
                              }),
                        nt.apply(null, arguments)
                    );
                }
                const rt = { info: 'Rewards_rewardInfo_d2' },
                    at = (0, J.Pi)(({ onLastRewardShowed: e }) => {
                        const t = xe().model,
                            n = O().mediaSize,
                            i = t.computes.getRewards(),
                            s = ((e) => (e >= T.ExtraLarge ? re.S600x450 : e >= T.Medium ? re.S400x300 : re.S296x222))(
                                n,
                            );
                        return (
                            (0, r.useEffect)(() => {
                                0 === i.length && (e(), console.error('There are no rewards in the model'));
                            }, [e, i.length]),
                            a().createElement(
                                'div',
                                { className: Ke },
                                a().createElement(
                                    'div',
                                    { className: Qe },
                                    a().createElement(
                                        'div',
                                        { className: Je },
                                        a().createElement('div', { className: et }),
                                    ),
                                    a().createElement('div', { className: Ze }),
                                    i.map((t, n) =>
                                        a().createElement(
                                            'div',
                                            {
                                                onAnimationEnd: n === i.length - 1 ? e : void 0,
                                                onAnimationStart: () => U('gui_random_reward_appear'),
                                                style: { animationDelay: 1200 + 100 * n + 'ms' },
                                                className: tt,
                                                key: t.index,
                                            },
                                            a().createElement(
                                                Xe,
                                                nt({}, t, { size: s, image: t.image(s), classNames: rt }),
                                            ),
                                        ),
                                    ),
                                ),
                            )
                        );
                    }),
                    it = R.strings.account_completion.rewards,
                    st = (0, J.Pi)(() => {
                        const e = xe().controls,
                            t = (0, r.useState)(!1),
                            n = t[0],
                            i = t[1],
                            s = (function (e) {
                                const t = (0, r.useRef)(e);
                                return (
                                    (0, r.useLayoutEffect)(() => {
                                        t.current = e;
                                    }),
                                    (0, r.useCallback)((...e) => (0, t.current)(...e), V)
                                );
                            })(() => i(!0));
                        var o;
                        return (
                            (o = e.close),
                            Z(X.n.ESCAPE, o),
                            a().createElement(
                                'div',
                                { className: Oe },
                                a().createElement(
                                    'div',
                                    { className: Le },
                                    a().createElement(z, {
                                        caption: it.buttons.close(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: e.close,
                                    }),
                                ),
                                a().createElement(
                                    'div',
                                    { className: ye },
                                    a().createElement('div', { className: Me }, it.title()),
                                    a().createElement('div', { className: ke }, it.subTitle()),
                                ),
                                a().createElement(
                                    'div',
                                    { className: De },
                                    a().createElement(at, { onLastRewardShowed: s }),
                                ),
                                a().createElement(
                                    $,
                                    { onClick: e.close, mixClass: b()(Ie, n && Ae) },
                                    it.buttons.confirm(),
                                ),
                            )
                        );
                    });
                engine.whenReady.then(() => {
                    B().render(
                        a().createElement(Pe, null, a().createElement(C, null, a().createElement(st, null))),
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
                    for (var [t, n, r] = deferred[l], i = !0, s = 0; s < t.length; s++)
                        (!1 & r || a >= r) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[s]))
                            ? t.splice(s--, 1)
                            : ((i = !1), r < a && (a = r));
                    if (i) {
                        deferred.splice(l--, 1);
                        var o = n();
                        void 0 !== o && (e = o);
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
        (__webpack_require__.j = 641),
        (() => {
            var e = { 641: 0 };
            __webpack_require__.O.j = (t) => 0 === e[t];
            var t = (t, n) => {
                    var r,
                        a,
                        [i, s, o] = n,
                        l = 0;
                    if (i.some((t) => 0 !== e[t])) {
                        for (r in s) __webpack_require__.o(s, r) && (__webpack_require__.m[r] = s[r]);
                        if (o) var c = o(__webpack_require__);
                    }
                    for (t && t(n); l < i.length; l++)
                        (a = i[l]), __webpack_require__.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                    return __webpack_require__.O(c);
                },
                n = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [235], () => __webpack_require__(502));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
