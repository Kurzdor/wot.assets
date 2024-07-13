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
            768: (e, u, t) => {
                'use strict';
                t.d(u, { O: () => ue });
                var n = {};
                t.r(n),
                    t.d(n, { mouse: () => m, off: () => d, on: () => E, onResize: () => l, onScaleUpdated: () => c });
                var r = {};
                t.r(r),
                    t.d(r, {
                        events: () => n,
                        getMouseGlobalPosition: () => D,
                        getSize: () => g,
                        graphicsQuality: () => B,
                        playSound: () => A,
                        setRTPC: () => F,
                    });
                var a = {};
                t.r(a), t.d(a, { getBgUrl: () => v, getTextureUrl: () => f });
                var i = {};
                function o(e) {
                    return (u) => (
                        engine.on(e, u),
                        () => {
                            engine.off(e, u);
                        }
                    );
                }
                function s(e) {
                    viewEnv.setTrackMouseOnStage(e);
                }
                t.r(i),
                    t.d(i, {
                        addModelObserver: () => N,
                        addPreloadTexture: () => L,
                        children: () => a,
                        displayStatus: () => w,
                        displayStatusIs: () => Q,
                        events: () => b,
                        extraSize: () => J,
                        forceTriggerMouseMove: () => K,
                        freezeTextureBeforeResize: () => G,
                        getBrowserTexturePath: () => O,
                        getDisplayStatus: () => Z,
                        getScale: () => z,
                        getSize: () => I,
                        getViewGlobalPosition: () => U,
                        isEventHandled: () => X,
                        isFocused: () => q,
                        pxToRem: () => $,
                        remToPx: () => V,
                        resize: () => W,
                        sendEvent: () => M,
                        setAnimateWindow: () => j,
                        setEventHandled: () => Y,
                        setInputPaddingsRem: () => P,
                        setSidePaddingsRem: () => H,
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
                        e.enabled && s(!1);
                    }
                    function t() {
                        e.enabled && s(!0);
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
                            : s(!1);
                    }
                    const r = ['down', 'up', 'move'].reduce(
                        (u, t) => (
                            (u[t] = (function (u) {
                                return (t) => {
                                    e.listeners += 1;
                                    let r = !0;
                                    const a = `mouse${u}`,
                                        i = _[u]((e) => t([e, 'outside']));
                                    function o(e) {
                                        t([e, 'inside']);
                                    }
                                    return (
                                        window.addEventListener(a, o),
                                        n(),
                                        () => {
                                            r &&
                                                (i(),
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
                            e.enabled && s(!0);
                        },
                        disableOutside() {
                            e.enabled && s(!1);
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
                function g(e = 'px') {
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
                    C = { highlight: 'highlight', click: 'play', yes1: 'yes1' },
                    h = Object.keys(C).reduce((e, u) => ((e[u] = () => A(C[u])), e), {}),
                    p = { play: Object.assign({}, h, { sound: A }), setRTPC: F };
                function f(e, u, t = 1) {
                    return viewEnv.getChildTexturePath(e, u.width, u.height, t);
                }
                function v(e, u, t) {
                    return `url(${f(e, u, t)})`;
                }
                const w = { showing: 0, shown: 1, hiding: 2, hidden: 3 },
                    b = {
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
                const y = 2,
                    T = 16,
                    x = 32,
                    R = 64,
                    k = (e, u) => {
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
                    M = {
                        close(e) {
                            k('popover' === e ? y : x);
                        },
                        minimize() {
                            k(R);
                        },
                        move(e) {
                            k(T, { isMouseEvent: !0, on: e });
                        },
                    };
                function L(e) {
                    viewEnv.addPreloadTexture(e);
                }
                function P(e) {
                    viewEnv.setHitAreaPaddingsRem(e, e, e, e, 15);
                }
                function O(e, u, t, n = 1) {
                    return viewEnv.getWebBrowserTexturePath(e, u, t, n);
                }
                function N(e, u, t) {
                    return viewEnv.addDataChangedCallback(e, u, t);
                }
                function H(e) {
                    viewEnv.setHitAreaPaddingsRem(e.top, e.right, e.bottom, e.left, 15);
                }
                function I(e = 'px') {
                    return 'rem' === e ? viewEnv.getViewSizeRem() : viewEnv.getViewSizePx();
                }
                function W(e, u, t = 'px') {
                    return 'rem' === t ? viewEnv.resizeViewRem(e, u) : viewEnv.resizeViewPx(e, u);
                }
                function U(e = 'rem') {
                    const u = viewEnv.getViewGlobalPositionRem();
                    return 'rem' === e ? u : { x: V(u.x), y: V(u.y) };
                }
                function G() {
                    viewEnv.freezeTextureBeforeResize();
                }
                function z() {
                    return viewEnv.getScale();
                }
                function $(e) {
                    return viewEnv.pxToRem(e);
                }
                function V(e) {
                    return viewEnv.remToPx(e);
                }
                function j(e, u) {
                    viewEnv.setAnimateWindow(e, u);
                }
                function q() {
                    return viewEnv.isFocused();
                }
                function Y() {
                    return viewEnv.setEventHandled();
                }
                function X() {
                    return viewEnv.isEventHandled();
                }
                function K() {
                    viewEnv.forceTriggerMouseMove();
                }
                function Z() {
                    return viewEnv.getShowingStatus();
                }
                const Q = Object.keys(w).reduce((e, u) => ((e[u] = () => viewEnv.getShowingStatus() === w[u]), e), {}),
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
                            window.isDomBuilt ? e() : b.onDomBuilt(e);
                        }),
                        engine.whenReady,
                    ]),
                    ue = { view: i, client: r, sound: p };
            },
            521: (e, u, t) => {
                'use strict';
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
                'use strict';
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
            916: (e, u, t) => {
                'use strict';
                t.d(u, { Sw: () => a.Z, B0: () => o, ry: () => g });
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
                var i = t(613);
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
                const s = Object.freeze({ INTEGRAL: 0, GOLD: 1 }),
                    l = Object.freeze({ FRACTIONAL: 0, WO_ZERO_DIGITS: 1 }),
                    c = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1 }),
                    E = Object.freeze({ SHORT_FORMAT: 0, LONG_FORMAT: 1, YEAR_MONTH: 2 });
                var d = t(521),
                    _ = t(768);
                const m = ['args'];
                function A(e, u, t, n, r, a, i) {
                    try {
                        var o = e[a](i),
                            s = o.value;
                    } catch (e) {
                        return void t(e);
                    }
                    o.done ? u(s) : Promise.resolve(s).then(n, r);
                }
                const F = (e) => ({ __Type: 'GFBoundingBox', x: e.x, y: e.y, width: e.width, height: e.height }),
                    g = (function () {
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
                                        function i(e) {
                                            A(a, n, r, i, o, 'next', e);
                                        }
                                        function o(e) {
                                            A(a, n, r, i, o, 'throw', e);
                                        }
                                        i(void 0);
                                    });
                                });
                        return function () {
                            return u.apply(this, arguments);
                        };
                    })(),
                    D = (e, u) => {
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
                    B = () => D(o.CLOSE),
                    C = (e, u) => {
                        e.keyCode === d.n.ESCAPE && u();
                    };
                var h = t(572);
                const p = r.instance,
                    f = {
                        DataTracker: a.Z,
                        ViewModel: h.Z,
                        ViewEventType: o,
                        NumberFormatType: s,
                        RealFormatType: l,
                        TimeFormatType: c,
                        DateFormatType: E,
                        makeGlobalBoundingBox: F,
                        sendMoveEvent: (e) => D(o.MOVE, { isMouseEvent: !0, on: e }),
                        sendCloseEvent: B,
                        sendClosePopOverEvent: () => D(o.POP_OVER, { on: !1 }),
                        sendShowContextMenuEvent: (e, u, t = 0) => {
                            D(o.CONTEXT_MENU, { isMouseEvent: !0, contentID: e, on: !0, decoratorID: t, args: u });
                        },
                        sendShowPopOverEvent: (e, u, t, n, r = R.invalid('resId'), a) => {
                            const i = _.O.view.getViewGlobalPosition(),
                                s = t.getBoundingClientRect(),
                                l = s.x,
                                c = s.y,
                                E = s.width,
                                d = s.height,
                                m = {
                                    x: _.O.view.pxToRem(l) + i.x,
                                    y: _.O.view.pxToRem(c) + i.y,
                                    width: _.O.view.pxToRem(E),
                                    height: _.O.view.pxToRem(d),
                                };
                            D(o.POP_OVER, {
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
                            const u = (u) => C(u, e);
                            return (
                                window.addEventListener('keydown', u), () => window.removeEventListener('keydown', u)
                            );
                        },
                        closeOnEsc: (e) => {
                            C(e, B);
                        },
                        handleViewEvent: D,
                        onBindingsReady: g,
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
                        ClickOutsideManager: p,
                        SystemLocale: i.Z5,
                        UserLocale: i.cy,
                    };
                window.ViewEnvHelper = f;
            },
            613: (e, u, t) => {
                'use strict';
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
            64: (e, u, t) => {
                'use strict';
                var n = {};
                t.r(n),
                    t.d(n, {
                        Area: () => Au,
                        Bar: () => du,
                        DefaultScroll: () => mu,
                        Direction: () => Ke,
                        defaultSettings: () => Ze,
                        useHorizontalScrollApi: () => Je,
                    });
                var r = {};
                t.r(r), t.d(r, { Area: () => Mu, Bar: () => xu, Default: () => ku, useVerticalScrollApi: () => Fu });
                var a = t(179),
                    i = t.n(a),
                    o = t(493),
                    s = t.n(o);
                t(281);
                let l;
                function c(e, u) {
                    return e.replace(/(\{|%\()\w+(\}|\)s)/g, (e) => {
                        const t = 0 === e.indexOf('%') ? 2 : 1;
                        return String(u[e.slice(t, -t)]);
                    });
                }
                !(function (e) {
                    (e[(e.left = 0)] = 'left'), (e[(e.right = 1)] = 'right');
                })(l || (l = {}));
                const E = (e) => e.replace(/&nbsp;/g, ' ');
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
                var d = t(916),
                    _ = t(613);
                Date.now(), _.Ew.getRegionalDateTime, _.Ew.getFormattedDateTime;
                var m = t(768);
                const A = (e = 1) => {
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
                    F = (e, u) => e.split('.').reduce((e, u) => e && e[u], u),
                    g = (e) => {
                        const u = (0, a.useRef)(!1);
                        u.current || (e(), (u.current = !0));
                    },
                    D = (e) => e && 'ArrayItem' === e.__proto__.constructor.name,
                    B = (e, u) => (e.length > 0 ? `${e}.${u}` : u),
                    C = (e) =>
                        ((e, u) =>
                            e.split('.').reduce((e, t) => {
                                const n = F(`${e}.${t}`, window);
                                return D(n) ? u(e, t, n) : `${e}.${t}`;
                            }))(e, (e, u) => `${e}.${u}.value`),
                    h = (e) => {
                        const u = ((e) => {
                                const u = A(),
                                    t = u.caller,
                                    n = u.resId,
                                    r = window.__feature && window.__feature !== t && t ? `subViews.${t}` : '';
                                return { modelPrefix: r, modelPath: B(r, e || ''), resId: n };
                            })(),
                            t = u.modelPrefix,
                            n = e.split('.');
                        if (n.length > 0) {
                            const e = [n[0]];
                            return (
                                n.reduce((u, n) => {
                                    const r = F(B(t, `${u}.${n}`), window);
                                    return D(r) ? (e.push(r.id), `${u}.${n}.value`) : (e.push(n), `${u}.${n}`);
                                }),
                                e.reduce((e, u) => e + '.' + u)
                            );
                        }
                        return '';
                    },
                    p = d.Sw.instance;
                let f;
                !(function (e) {
                    (e.None = 'None'), (e.Shallow = 'Shallow'), (e.Deep = 'Deep');
                })(f || (f = {}));
                const v = (e = 'model', u = f.Deep) => {
                    const t = (0, a.useState)(0),
                        n = (t[0], t[1]),
                        r = (0, a.useMemo)(() => A(), []),
                        i = r.caller,
                        o = r.resId,
                        s = (0, a.useMemo)(
                            () => (window.__feature && window.__feature !== i ? `subViews.${i}.${e}` : e),
                            [i, e],
                        ),
                        l = (0, a.useState)(() =>
                            ((e) => {
                                const u = F(e, window);
                                for (const e in u) 'function' == typeof u[e] && (u[e] = u[e].bind(u));
                                return D(u) ? u.value : u;
                            })(C(s)),
                        ),
                        c = l[0],
                        E = l[1],
                        d = (0, a.useRef)(-1);
                    return (
                        g(() => {
                            if (
                                ('boolean' == typeof u &&
                                    ((u = u ? f.Deep : f.None),
                                    console.warn(
                                        'Boolean key for useModel "tracking" param is deprecated. Use ModelTracking enum values instead!',
                                    )),
                                u !== f.None)
                            ) {
                                const t = (e) => {
                                        ((e) => e && 'CoherentArrayProxy' === e.__proto__.constructor.name)(e) &&
                                        u === f.Deep
                                            ? (e === c && n((e) => e + 1), E(e))
                                            : E(Object.assign([], e));
                                    },
                                    r = h(e);
                                d.current = p.addCallback(r, t, o, u === f.Deep);
                            }
                        }),
                        (0, a.useEffect)(() => {
                            if (u !== f.None)
                                return () => {
                                    p.removeCallback(d.current, o);
                                };
                        }, [o, u]),
                        c
                    );
                };
                d.Sw.instance;
                var w = t(521);
                const b = (e) => {
                    console.error(e.type + ': useKeydownListener hook :: Callback is not defined');
                };
                function S(e = w.n.NONE, u = b, t = !1, n = !1) {
                    (0, a.useEffect)(() => {
                        if (e !== w.n.NONE)
                            return (
                                window.addEventListener('keydown', r, t),
                                () => {
                                    window.removeEventListener('keydown', r, t);
                                }
                            );
                        function r(r) {
                            if (r.keyCode === e) {
                                if (!n && m.O.view.isEventHandled()) return;
                                m.O.view.setEventHandled(), u(r), t && r.stopPropagation();
                            }
                        }
                    }, [u, e, t, n]);
                }
                var y = t(483),
                    T = t.n(y);
                function x(e) {
                    engine.call('PlaySound', e).catch((u) => {
                        console.error('[lib/sounds.js] playSound(', e, '): ', u);
                    });
                }
                const k = {
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
                    M = [
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
                function L() {
                    return (
                        (L =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        L.apply(this, arguments)
                    );
                }
                class P extends i().PureComponent {
                    constructor(...e) {
                        super(...e),
                            (this.state = { hover: !1, click: !1 }),
                            (this._onMouseEnter = (e) => (u) => {
                                e && e(u),
                                    this.setState({ hover: !0 }),
                                    this.props.soundHover && x(this.props.soundHover);
                            }),
                            (this._onMouseLeave = (e) => (u) => {
                                e && e(u), this.setState({ hover: !1, click: !1 });
                            }),
                            (this._onMouseDown = (e) => (u) => {
                                e && e(u),
                                    this.setState({ click: !0 }),
                                    this.props.soundClick && x(this.props.soundClick);
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
                            r = e.side,
                            a = e.type,
                            o = e.classNames,
                            s = e.onMouseEnter,
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
                                })(e, M)),
                            _ = T()(k.base, k[`base__${a}`], k[`base__${r}`], null == o ? void 0 : o.base),
                            m = T()(k.icon, k[`icon__${a}`], k[`icon__${r}`], null == o ? void 0 : o.icon),
                            A = T()(k.glow, null == o ? void 0 : o.glow),
                            F = T()(k.caption, k[`caption__${a}`], null == o ? void 0 : o.caption),
                            g = T()(k.goto, null == o ? void 0 : o.goto);
                        return i().createElement(
                            'div',
                            L(
                                {
                                    className: _,
                                    onMouseEnter: this._onMouseEnter(s),
                                    onMouseLeave: this._onMouseLeave(l),
                                    onMouseDown: this._onMouseDown(c),
                                    onMouseUp: this._onMouseUp(E),
                                    onFocus: this.handleFocus,
                                    onBlur: this.handleBlur,
                                    onClick: t,
                                },
                                d,
                            ),
                            'info' !== a && i().createElement('div', { className: k.shine }),
                            i().createElement('div', { className: m }, i().createElement('div', { className: A })),
                            i().createElement('div', { className: F }, u),
                            n && i().createElement('div', { className: g }, n),
                        );
                    }
                }
                P.defaultProps = { side: 'left', type: 'back', soundHover: 'highlight', soundClick: 'play' };
                const O = {
                    extraLarge: { weight: 4, width: 2560, height: 1440 },
                    large: { weight: 3, width: 1920, height: 1080 },
                    medium: { weight: 2, width: 1600, height: 900 },
                    small: { weight: 1, width: 1366, height: 768 },
                    extraSmall: { weight: 0, width: 1024, height: 768 },
                };
                var N = t(926),
                    H = t.n(N);
                const I = (e, u, t) =>
                    u.extraLargeHeight || u.largeHeight || u.mediumHeight || u.smallHeight || u.extraSmallHeight
                        ? (u.extraLargeHeight && t.extraLarge) ||
                          (u.largeHeight && t.large) ||
                          (u.mediumHeight && t.medium) ||
                          (u.smallHeight && t.small) ||
                          (u.extraSmallHeight && t.extraSmall)
                            ? e
                            : null
                        : e;
                var W;
                function U(e, u, t) {
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
                })(W || (W = {}));
                const G = m.O.client.getSize('rem'),
                    z = G.width,
                    $ = G.height,
                    V = Object.assign({ width: z, height: $ }, U(z, $, O)),
                    j = (0, a.createContext)(V),
                    q = ['children'];
                const Y = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, q);
                    const n = (0, a.useContext)(j),
                        r = n.extraLarge,
                        i = n.large,
                        o = n.medium,
                        s = n.small,
                        l = n.extraSmall,
                        c = n.extraLargeWidth,
                        E = n.largeWidth,
                        d = n.mediumWidth,
                        _ = n.smallWidth,
                        m = n.extraSmallWidth,
                        A = n.extraLargeHeight,
                        F = n.largeHeight,
                        g = n.mediumHeight,
                        D = n.smallHeight,
                        B = n.extraSmallHeight,
                        C = { extraLarge: A, large: F, medium: g, small: D, extraSmall: B };
                    if (t.extraLarge || t.large || t.medium || t.small || t.extraSmall) {
                        if (t.extraLarge && r) return u;
                        if (t.large && i) return u;
                        if (t.medium && o) return u;
                        if (t.small && s) return u;
                        if (t.extraSmall && l) return u;
                    } else {
                        if (t.extraLargeWidth && c) return I(u, t, C);
                        if (t.largeWidth && E) return I(u, t, C);
                        if (t.mediumWidth && d) return I(u, t, C);
                        if (t.smallWidth && _) return I(u, t, C);
                        if (t.extraSmallWidth && m) return I(u, t, C);
                        if (
                            !(t.extraLargeWidth || t.largeWidth || t.mediumWidth || t.smallWidth || t.extraSmallWidth)
                        ) {
                            if (t.extraLargeHeight && A) return u;
                            if (t.largeHeight && F) return u;
                            if (t.mediumHeight && g) return u;
                            if (t.smallHeight && D) return u;
                            if (t.extraSmallHeight && B) return u;
                        }
                    }
                    return null;
                };
                Y.defaultProps = {
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
                (0, a.memo)(Y);
                const X = ({ children: e }) => {
                    const u = (0, a.useContext)(j),
                        t = (0, a.useState)(u),
                        n = t[0],
                        r = t[1],
                        o = (0, a.useCallback)((e, u) => {
                            const t = m.O.view.pxToRem(e),
                                n = m.O.view.pxToRem(u);
                            r(Object.assign({ width: t, height: n }, U(t, n, O)));
                        }, []),
                        s = (0, a.useCallback)(() => {
                            const e = m.O.client.getSize('px');
                            o(e.width, e.height);
                        }, [o]);
                    g(() => {
                        m.O.client.events.on('clientResized', o), m.O.client.events.on('self.onScaleUpdated', s);
                    }),
                        (0, a.useEffect)(
                            () => () => {
                                m.O.client.events.off('clientResized', o),
                                    m.O.client.events.off('self.onScaleUpdated', s);
                            },
                            [o, s],
                        );
                    const l = (0, a.useMemo)(() => Object.assign({}, n), [n]);
                    return i().createElement(j.Provider, { value: l }, e);
                };
                let K, Z, Q;
                !(function (e) {
                    (e[(e.ExtraSmall = O.extraSmall.width)] = 'ExtraSmall'),
                        (e[(e.Small = O.small.width)] = 'Small'),
                        (e[(e.Medium = O.medium.width)] = 'Medium'),
                        (e[(e.Large = O.large.width)] = 'Large'),
                        (e[(e.ExtraLarge = O.extraLarge.width)] = 'ExtraLarge');
                })(K || (K = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = O.extraSmall.width)] = 'ExtraSmall'),
                            (e[(e.Small = O.small.width)] = 'Small'),
                            (e[(e.Medium = O.medium.width)] = 'Medium'),
                            (e[(e.Large = O.large.width)] = 'Large'),
                            (e[(e.ExtraLarge = O.extraLarge.width)] = 'ExtraLarge');
                    })(Z || (Z = {})),
                    (function (e) {
                        (e[(e.ExtraSmall = O.extraSmall.height)] = 'ExtraSmall'),
                            (e[(e.Small = O.small.height)] = 'Small'),
                            (e[(e.Medium = O.medium.height)] = 'Medium'),
                            (e[(e.Large = O.large.height)] = 'Large'),
                            (e[(e.ExtraLarge = O.extraLarge.height)] = 'ExtraLarge');
                    })(Q || (Q = {}));
                const J = () => {
                        const e = (0, a.useContext)(j),
                            u = e.width,
                            t = e.height,
                            n = ((e) => {
                                switch (!0) {
                                    case e.extraLarge:
                                        return K.ExtraLarge;
                                    case e.large:
                                        return K.Large;
                                    case e.medium:
                                        return K.Medium;
                                    case e.small:
                                        return K.Small;
                                    case e.extraSmall:
                                        return K.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), K.ExtraSmall;
                                }
                            })(e),
                            r = ((e) => {
                                switch (!0) {
                                    case e.extraLargeWidth:
                                        return Z.ExtraLarge;
                                    case e.largeWidth:
                                        return Z.Large;
                                    case e.mediumWidth:
                                        return Z.Medium;
                                    case e.smallWidth:
                                        return Z.Small;
                                    case e.extraSmallWidth:
                                        return Z.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), Z.ExtraSmall;
                                }
                            })(e),
                            i = ((e) => {
                                switch (!0) {
                                    case e.extraLargeHeight:
                                        return Q.ExtraLarge;
                                    case e.largeHeight:
                                        return Q.Large;
                                    case e.mediumHeight:
                                        return Q.Medium;
                                    case e.smallHeight:
                                        return Q.Small;
                                    case e.extraSmallHeight:
                                        return Q.ExtraSmall;
                                    default:
                                        return console.error('Unreachable media context resolution'), Q.ExtraSmall;
                                }
                            })(e);
                        return { mediaSize: n, mediaWidth: r, mediaHeight: i, remScreenWidth: u, remScreenHeight: t };
                    },
                    ee = ['children', 'className'];
                function ue() {
                    return (
                        (ue =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ue.apply(this, arguments)
                    );
                }
                const te = {
                        [Z.ExtraSmall]: '',
                        [Z.Small]: H().SMALL_WIDTH,
                        [Z.Medium]: `${H().SMALL_WIDTH} ${H().MEDIUM_WIDTH}`,
                        [Z.Large]: `${H().SMALL_WIDTH} ${H().MEDIUM_WIDTH} ${H().LARGE_WIDTH}`,
                        [Z.ExtraLarge]: `${H().SMALL_WIDTH} ${H().MEDIUM_WIDTH} ${H().LARGE_WIDTH} ${H().EXTRA_LARGE_WIDTH}`,
                    },
                    ne = {
                        [Q.ExtraSmall]: '',
                        [Q.Small]: H().SMALL_HEIGHT,
                        [Q.Medium]: `${H().SMALL_HEIGHT} ${H().MEDIUM_HEIGHT}`,
                        [Q.Large]: `${H().SMALL_HEIGHT} ${H().MEDIUM_HEIGHT} ${H().LARGE_HEIGHT}`,
                        [Q.ExtraLarge]: `${H().SMALL_HEIGHT} ${H().MEDIUM_HEIGHT} ${H().LARGE_HEIGHT} ${H().EXTRA_LARGE_HEIGHT}`,
                    },
                    re = {
                        [K.ExtraSmall]: '',
                        [K.Small]: H().SMALL,
                        [K.Medium]: `${H().SMALL} ${H().MEDIUM}`,
                        [K.Large]: `${H().SMALL} ${H().MEDIUM} ${H().LARGE}`,
                        [K.ExtraLarge]: `${H().SMALL} ${H().MEDIUM} ${H().LARGE} ${H().EXTRA_LARGE}`,
                    },
                    ae = (e) => {
                        let u = e.children,
                            t = e.className,
                            n = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, ee);
                        const r = J(),
                            a = r.mediaWidth,
                            o = r.mediaHeight,
                            s = r.mediaSize;
                        return i().createElement('div', ue({ className: T()(t, te[a], ne[o], re[s]) }, n), u);
                    },
                    ie = ['children'];
                const oe = (e) => {
                    let u = e.children,
                        t = (function (e, u) {
                            if (null == e) return {};
                            var t,
                                n,
                                r = {},
                                a = Object.keys(e);
                            for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                            return r;
                        })(e, ie);
                    return i().createElement(X, null, i().createElement(ae, t, u));
                };
                function se(e, u) {
                    var t;
                    if (!(u >= e.length)) return Array.isArray(e) ? e[u] : null == (t = e[u]) ? void 0 : t.value;
                }
                const le = se;
                function ce(e, u, t) {
                    if (Array.isArray(e)) return e.reduce(u, t);
                    let n = t;
                    for (let t = 0; t < e.length; t++) {
                        n = u(n, le(e, t), t, e);
                    }
                    return n;
                }
                const Ee = (0, a.createContext)('model');
                let de, _e, me, Ae, Fe, ge, De;
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
                })(de || (de = {})),
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
                    })(_e || (_e = {})),
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
                    })(me || (me = {})),
                    (function (e) {
                        (e.MULTI = 'multi'),
                            (e.CURRENCY = 'currency'),
                            (e.PREMIUM_PLUS = 'premium_plus'),
                            (e.NUMBER = 'number'),
                            (e.STRING = 'string');
                    })(Ae || (Ae = {})),
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
                    })(Fe || (Fe = {})),
                    (function (e) {
                        e.BATTLE_BOOSTER = 'battleBooster';
                    })(ge || (ge = {})),
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
                    })(De || (De = {}));
                const Be = [
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
                function Ce(e) {
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
                const he = (e, u, t = {}, n = 0) => {
                        viewEnv.handleViewEvent(
                            Object.assign(
                                {
                                    __Type: 'GFViewEventProxy',
                                    type: d.B0.TOOLTIP,
                                    contentID: e,
                                    decoratorID: u,
                                    targetID: n,
                                },
                                t,
                            ),
                        );
                    },
                    pe = (e) => {
                        let u = e.children,
                            t = e.contentId,
                            n = e.args,
                            r = e.onMouseEnter,
                            i = e.onMouseLeave,
                            o = e.onMouseDown,
                            s = e.onClick,
                            l = e.ignoreShowDelay,
                            c = void 0 !== l && l,
                            E = e.ignoreMouseClick,
                            d = void 0 !== E && E,
                            _ = e.decoratorId,
                            m = void 0 === _ ? 0 : _,
                            F = e.isEnabled,
                            g = void 0 === F || F,
                            D = e.targetId,
                            B = void 0 === D ? 0 : D,
                            C = e.onShow,
                            h = e.onHide,
                            p = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, Be);
                        const f = (0, a.useRef)({ timeoutId: 0, isVisible: !1, prevTarget: null, hideTimerId: null }),
                            v = (0, a.useMemo)(() => B || A().resId, [B]),
                            w = (0, a.useCallback)(() => {
                                (f.current.isVisible && f.current.timeoutId) ||
                                    (he(t, m, { isMouseEvent: !0, on: !0, arguments: Ce(n) }, v),
                                    C && C(),
                                    (f.current.isVisible = !0));
                            }, [t, m, n, v, C]),
                            b = (0, a.useCallback)(() => {
                                if (f.current.isVisible || f.current.timeoutId) {
                                    const e = f.current.timeoutId;
                                    e > 0 && (clearTimeout(e), (f.current.timeoutId = 0)),
                                        he(t, m, { on: !1 }, v),
                                        f.current.isVisible && h && h(),
                                        (f.current.isVisible = !1);
                                }
                            }, [t, m, v, h]),
                            S = (0, a.useCallback)((e) => {
                                f.current.isVisible &&
                                    ((f.current.prevTarget = document.elementFromPoint(e.clientX, e.clientY)),
                                    (f.current.hideTimerId = window.setTimeout(() => {
                                        const u = document.elementFromPoint(e.clientX, e.clientY);
                                        u && !u.isSameNode(f.current.prevTarget) && b();
                                    }, 200)));
                            }, []);
                        (0, a.useEffect)(() => {
                            const e = f.current.hideTimerId;
                            return (
                                document.addEventListener('wheel', S, { capture: !0 }),
                                () => {
                                    document.removeEventListener('wheel', S, { capture: !0 }),
                                        e && window.clearTimeout(e);
                                }
                            );
                        }, []),
                            (0, a.useEffect)(() => {
                                !1 === g && b();
                            }, [g, b]),
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('mouseleave', b),
                                    () => {
                                        window.removeEventListener('mouseleave', b), b();
                                    }
                                ),
                                [b],
                            );
                        return g
                            ? (0, a.cloneElement)(
                                  u,
                                  Object.assign(
                                      {
                                          onMouseEnter:
                                              ((y = u.props.onMouseEnter),
                                              (e) => {
                                                  (e.clientX === window.innerWidth &&
                                                      e.clientY === window.innerHeight) ||
                                                      ((f.current.timeoutId = window.setTimeout(w, c ? 100 : 400)),
                                                      r && r(e),
                                                      y && y(e));
                                              }),
                                          onMouseLeave: ((e) => (u) => {
                                              b(), null == i || i(u), null == e || e(u);
                                          })(u.props.onMouseLeave),
                                          onClick: ((e) => (u) => {
                                              !1 === d && b(), null == s || s(u), null == e || e(u);
                                          })(u.props.onClick),
                                          onMouseDown: ((e) => (u) => {
                                              !1 === d && b(), null == o || o(u), null == e || e(u);
                                          })(u.props.onMouseDown),
                                      },
                                      p,
                                  ),
                              )
                            : u;
                        var y;
                    },
                    fe = ['children'];
                function ve() {
                    return (
                        (ve =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        ve.apply(this, arguments)
                    );
                }
                const we = (e) => {
                        let u = e.children,
                            t = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, fe);
                        return i().createElement(
                            pe,
                            ve(
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
                    be = (e) => {
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
                    Se = (e, u = me.Small) => `R.images.gui.maps.icons.quests.bonuses.${u}.${e}_gift`,
                    ye = (e, u = 's180x135', t = 'R.images.gui.maps.icons.selectableReward.reward') => `${t}.${u}.${e}`,
                    Te = 'Category_base_23',
                    xe = 'Category_base__viewReady_69',
                    Re = 'Category_glow_a9',
                    ke = 'Category_base__selected_9e',
                    Me = 'Category_title_54',
                    Le = 'Category_imageContainer_e0',
                    Pe = 'Category_image_ff',
                    Oe = 'Category_base__completed_0d',
                    Ne = 'Category_base__accepting_c8',
                    He = 'Category_check_6c',
                    Ie = 'Category_counter_3c',
                    We = R.strings.selectable_reward.tabs,
                    Ue = ({ type: e, count: u, limit: t, isSelected: n, onClick: r }) => {
                        const o = (0, a.useContext)(Xt),
                            s = J().mediaSize,
                            l = u === t,
                            E = o === Yt.Accepting && u > 0 && !n,
                            d = s >= K.Medium ? me.Big : me.Small,
                            _ = (0, a.useState)(!1),
                            m = _[0],
                            A = _[1],
                            F = (0, a.useMemo)(() => ({ backgroundImage: `url(${Se(e, d)})` }), [d, e]),
                            g = (0, a.useMemo)(() => c(We.counter(), { count: u, limit: t }), [u, t]),
                            D = (0, a.useMemo)(() => ({ type: e }), [e]),
                            B = (0, a.useCallback)(() => {
                                x('bp_click'), r(e);
                            }, [r, e]),
                            C = (0, a.useCallback)(() => {
                                x('bp_highlight');
                            }, []);
                        (0, a.useEffect)(
                            () =>
                                be(() => {
                                    A(!0);
                                }),
                            [],
                        );
                        const h = T()(Te, m && xe, l && Oe, n && ke, E && Ne);
                        return i().createElement(
                            'div',
                            { className: h, onClick: B, onMouseEnter: C },
                            i().createElement('div', { className: Re }),
                            i().createElement(
                                'div',
                                { className: Me },
                                ((e) => R.strings.selectable_reward.tabs.items.$dyn(e))(e),
                            ),
                            i().createElement(
                                we,
                                { args: D },
                                i().createElement(
                                    'div',
                                    { className: Le },
                                    i().createElement('div', { className: Pe, style: F }),
                                    i().createElement('div', { className: He }),
                                ),
                            ),
                            i().createElement('div', { className: Ie }, g),
                        );
                    },
                    Ge = (e, u, t) => (t < e ? e : t > u ? u : t),
                    ze = [];
                function $e(e) {
                    const u = (0, a.useRef)(e);
                    return (
                        (0, a.useLayoutEffect)(() => {
                            u.current = e;
                        }),
                        (0, a.useCallback)((...e) => (0, u.current)(...e), ze)
                    );
                }
                function Ve(e, u, t = []) {
                    const n = (0, a.useRef)(0),
                        r = (0, a.useCallback)(() => window.clearInterval(n.current), t || []);
                    (0, a.useEffect)(() => r, [r]);
                    const i = (null != t ? t : []).concat([u]);
                    return [
                        (0, a.useCallback)((t) => {
                            (n.current = window.setInterval(() => e(t, !0), u)), e(t, !1);
                        }, i),
                        r,
                    ];
                }
                function je(e, u) {
                    var t = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                    if (t) return (t = t.call(e)).next.bind(t);
                    if (
                        Array.isArray(e) ||
                        (t = (function (e, u) {
                            if (!e) return;
                            if ('string' == typeof e) return qe(e, u);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            'Object' === t && e.constructor && (t = e.constructor.name);
                            if ('Map' === t || 'Set' === t) return Array.from(e);
                            if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                return qe(e, u);
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
                function qe(e, u) {
                    (null == u || u > e.length) && (u = e.length);
                    for (var t = 0, n = new Array(u); t < u; t++) n[t] = e[t];
                    return n;
                }
                function Ye(e, u, t) {
                    const n = (0, a.useMemo)(
                        () =>
                            (function (e, u, t, n) {
                                let r,
                                    a = !1,
                                    i = 0;
                                function o() {
                                    r && clearTimeout(r);
                                }
                                function s(...s) {
                                    const l = this,
                                        c = Date.now() - i;
                                    function E() {
                                        (i = Date.now()), t.apply(l, s);
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
                                    (s.cancel = function () {
                                        o(), (a = !0);
                                    }),
                                    s
                                );
                            })(t, e),
                        u,
                    );
                    return (0, a.useEffect)(() => n.cancel, [n]), n;
                }
                var Xe = t(30);
                let Ke;
                !(function (e) {
                    (e[(e.Next = -1)] = 'Next'), (e[(e.Prev = 1)] = 'Prev');
                })(Ke || (Ke = {}));
                const Ze = {
                        step: { type: 'proportional', factor: 4, clampedArrowStepTimeout: 100 },
                        animationConfig: { tension: 170, friction: 26 },
                    },
                    Qe = ({
                        getContainerSize: e,
                        getBounds: u,
                        setScrollPosition: t,
                        getDirection: n,
                        getWrapperSize: r,
                        triggerMouseMoveOnUpdate: i = !1,
                    }) => {
                        const o = (e, t) => {
                            const n = u(e),
                                r = n[0],
                                a = n[1];
                            return a <= r ? 0 : Ge(r, a, t);
                        };
                        return (s = {}) => {
                            const l = s.settings,
                                c = void 0 === l ? Ze : l,
                                E = (0, a.useRef)(null),
                                d = (0, a.useRef)(null),
                                _ = (() => {
                                    const e = (0, a.useMemo)(() => ({}), []),
                                        u = (u) => (e[u] || (e[u] = new Map()), e[u]),
                                        t = (e, t) => {
                                            u(e).set(t, t);
                                        },
                                        n = (e, t) => {
                                            u(e).delete(t);
                                        },
                                        r = (e, ...t) => {
                                            for (var n, r = je(u(e).values()); !(n = r()).done; ) (0, n.value)(...t);
                                        };
                                    return (0, a.useMemo)(() => ({ on: t, off: n, trigger: r }), []);
                                })(),
                                A = Ye(
                                    () => {
                                        m.O.view.forceTriggerMouseMove();
                                    },
                                    [],
                                    150,
                                ),
                                F = (0, Xe.useSpring)(() => ({
                                    scrollPosition: 0,
                                    onChange: (e) => {
                                        const u = E.current;
                                        u && (t(u, e), _.trigger('change', e), i && A());
                                    },
                                    onRest: (e) => _.trigger('rest', e),
                                    onStart: (e) => _.trigger('start', e),
                                    onPause: (e) => _.trigger('pause', e),
                                })),
                                g = F[0],
                                D = F[1],
                                B = (0, a.useCallback)(
                                    (e, u, t) => {
                                        var n;
                                        const r = g.scrollPosition.get(),
                                            a = (null != (n = g.scrollPosition.goal) ? n : 0) - r;
                                        return o(e, u * t + a + r);
                                    },
                                    [g.scrollPosition],
                                ),
                                C = (0, a.useCallback)(
                                    (e, { immediate: u = !1, reset: t = !0 } = {}) => {
                                        const n = E.current;
                                        n &&
                                            D.start({
                                                scrollPosition: o(n, e),
                                                immediate: u,
                                                reset: t,
                                                config: c.animationConfig,
                                                from: { scrollPosition: o(n, g.scrollPosition.get()) },
                                            });
                                    },
                                    [D, c.animationConfig, g.scrollPosition],
                                ),
                                h = (0, a.useCallback)(
                                    (e) => {
                                        const u = E.current,
                                            t = d.current;
                                        if (!u || !t) return;
                                        const n = ((e, u) => {
                                                switch (u.type) {
                                                    case 'proportional':
                                                        return r(e) / u.factor;
                                                    case 'fixed':
                                                        return u.value;
                                                }
                                            })(t, c.step),
                                            a = B(u, e, n);
                                        C(a);
                                    },
                                    [C, B, c.step],
                                ),
                                p = (0, a.useCallback)(
                                    (e) => {
                                        0 !== e.deltaY && h(n(e)),
                                            E.current && _.trigger('mouseWheel', e, g.scrollPosition, u(E.current));
                                    },
                                    [g.scrollPosition, h, _],
                                ),
                                f = ((e, u = []) => {
                                    const t = (0, a.useRef)(),
                                        n = (0, a.useCallback)((...u) => {
                                            t.current && t.current(), (t.current = e(...u));
                                        }, u);
                                    return (
                                        (0, a.useEffect)(
                                            () => () => {
                                                t.current && t.current();
                                            },
                                            [n],
                                        ),
                                        n
                                    );
                                })(
                                    () =>
                                        be(() => {
                                            const e = E.current;
                                            e &&
                                                (C(o(e, g.scrollPosition.goal), { immediate: !0 }),
                                                _.trigger('resizeHandled'));
                                        }),
                                    [C, g.scrollPosition.goal],
                                ),
                                v = $e(() => {
                                    const e = E.current;
                                    if (!e) return;
                                    const u = o(e, g.scrollPosition.goal);
                                    u !== g.scrollPosition.goal && C(u, { immediate: !0 }),
                                        _.trigger('recalculateContent');
                                });
                            (0, a.useEffect)(
                                () => (
                                    window.addEventListener('resize', f),
                                    () => {
                                        window.removeEventListener('resize', f);
                                    }
                                ),
                                [f],
                            );
                            return (0, a.useMemo)(
                                () => ({
                                    getWrapperSize: () => (d.current ? r(d.current) : void 0),
                                    getContainerSize: () => (E.current ? e(E.current) : void 0),
                                    getBounds: () =>
                                        E.current
                                            ? u(E.current)
                                            : (console.warn('getBounds: contentRef.current is null'), [0, 0]),
                                    stepTimeout: c.step.clampedArrowStepTimeout,
                                    clampPosition: o,
                                    handleMouseWheel: p,
                                    applyScroll: C,
                                    applyStepTo: h,
                                    contentRef: E,
                                    wrapperRef: d,
                                    scrollPosition: D,
                                    animationScroll: g,
                                    recalculateContent: v,
                                    events: { on: _.on, off: _.off },
                                }),
                                [g.scrollPosition, C, h, _.off, _.on, v, p, D, c.step.clampedArrowStepTimeout],
                            );
                        };
                    },
                    Je = Qe({
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
                        getDirection: (e) => (e.deltaY > 1 ? Ke.Next : Ke.Prev),
                        triggerMouseMoveOnUpdate: !0,
                    }),
                    eu = 'HorizontalBar_base_49',
                    uu = 'HorizontalBar_base__nonActive_82',
                    tu = 'HorizontalBar_leftButton_5f',
                    nu = 'HorizontalBar_rightButton_03',
                    ru = 'HorizontalBar_track_0d',
                    au = 'HorizontalBar_thumb_fd',
                    iu = 'HorizontalBar_rail_32',
                    ou = 'disable',
                    su = { pending: !1, offset: 0 },
                    lu = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    cu = () => {},
                    Eu = (e, u) => Math.max(20, e.offsetWidth * u),
                    du = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = lu, onDrag: n = cu }) => {
                        const r = (0, a.useRef)(null),
                            o = (0, a.useRef)(null),
                            s = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            E = e.stepTimeout || 100,
                            d = (0, a.useState)(su),
                            _ = d[0],
                            A = d[1],
                            F = (0, a.useCallback)(
                                (e) => {
                                    A(e),
                                        c.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [n],
                            ),
                            g = () => {
                                const u = l.current,
                                    t = c.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, n / r),
                                    E = Ge(0, 1, a / (r - n)),
                                    d = (u.offsetWidth - Eu(u, i)) * E;
                                (t.style.transform = `translateX(${0 | d}px)`),
                                    ((e) => {
                                        if (o.current && s.current && l.current && c.current) {
                                            if (0 === e)
                                                return o.current.classList.add(ou), void s.current.classList.remove(ou);
                                            if (
                                                ((u = l.current),
                                                (t = c.current),
                                                e - (u.offsetWidth - t.offsetWidth) >= -0.5)
                                            )
                                                return o.current.classList.remove(ou), void s.current.classList.add(ou);
                                            var u, t;
                                            o.current.classList.remove(ou), s.current.classList.remove(ou);
                                        }
                                    })(d);
                            },
                            D = $e(() => {
                                (() => {
                                    const u = c.current,
                                        t = l.current,
                                        n = e.getWrapperSize(),
                                        a = e.getContainerSize();
                                    if (!(a && u && n && t)) return;
                                    const i = Math.min(1, n / a);
                                    (u.style.width = `${Eu(t, i)}px`),
                                        (u.style.display = 'flex'),
                                        r.current &&
                                            (1 === i ? r.current.classList.add(uu) : r.current.classList.remove(uu));
                                })(),
                                    g();
                            });
                        (0, a.useEffect)(() => be(D)),
                            (0, a.useEffect)(
                                () =>
                                    be(() => {
                                        const u = () => {
                                            g();
                                        };
                                        let t = cu;
                                        const n = () => {
                                            t(), (t = be(D));
                                        };
                                        return (
                                            e.events.on('recalculateContent', D),
                                            e.events.on('rest', u),
                                            e.events.on('change', u),
                                            e.events.on('resizeHandled', n),
                                            () => {
                                                t(),
                                                    e.events.off('recalculateContent', D),
                                                    e.events.off('rest', u),
                                                    e.events.off('change', u),
                                                    e.events.off('resizeHandled', n);
                                            }
                                        );
                                    }),
                                [e],
                            ),
                            (0, a.useEffect)(() => {
                                if (!_.pending) return;
                                const u = m.O.client.events.mouse.move(([u, t]) => {
                                        var r;
                                        const a = e.contentRef.current,
                                            i = e.wrapperRef.current;
                                        if (!a || !i) return;
                                        const o = l.current,
                                            s = c.current;
                                        if (!o || !s) return;
                                        if ('inside' === t && u.clientX < 0) return;
                                        const E = u.clientX - _.offset - o.getBoundingClientRect().x,
                                            d = (E / o.offsetWidth) * (null != (r = e.getContainerSize()) ? r : 0);
                                        e.scrollPosition.start({
                                            scrollPosition: e.clampPosition(a, d),
                                            reset: !0,
                                            immediate: !0,
                                            from: { scrollPosition: e.animationScroll.scrollPosition.get() },
                                        }),
                                            n({ type: 'dragging', thumb: s, thumbOffset: E, contentOffset: d });
                                    }),
                                    t = m.O.client.events.mouse.up(() => {
                                        u(), F(su);
                                    });
                                return () => {
                                    u(), t();
                                };
                            }, [e, _.offset, _.pending, n, F]);
                        const B = Ve((u) => e.applyStepTo(u), E, [e]),
                            C = B[0],
                            h = B[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', h, !0),
                                () => document.removeEventListener('mouseup', h, !0)
                            ),
                            [h],
                        );
                        const p = (e) => {
                            e.target.classList.contains(ou) || x('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: T()(eu, u.base), ref: r, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: T()(tu, u.leftButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ou) || 0 !== e.button || (x('play'), C(Ke.Next));
                                },
                                onMouseUp: h,
                                ref: o,
                                onMouseEnter: p,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: T()(ru, u.track),
                                    onMouseDown: (u) => {
                                        const n = c.current;
                                        if (n && 0 === u.button)
                                            if ((x('play'), u.target === n))
                                                F({ pending: !0, offset: u.screenX - n.getBoundingClientRect().x });
                                            else {
                                                ((u) => {
                                                    const n = c.current,
                                                        r = e.contentRef.current;
                                                    if (!n || !r) return;
                                                    const a = t(e);
                                                    e.applyScroll(e.animationScroll.scrollPosition.get() + a * u);
                                                })(u.screenX > n.getBoundingClientRect().x ? Ke.Prev : Ke.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: p,
                                },
                                i().createElement('div', { ref: c, className: T()(au, u.thumb) }),
                                i().createElement('div', { className: T()(iu, u.rail) }),
                            ),
                            i().createElement('div', {
                                className: T()(nu, u.rightButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(ou) || 0 !== e.button || (x('play'), C(Ke.Prev));
                                },
                                onMouseUp: h,
                                ref: s,
                                onMouseEnter: p,
                            }),
                        );
                    }),
                    _u = {
                        base: 'HorizontalScroll_base_29',
                        wrapper: 'HorizontalScroll_wrapper_1e',
                        defaultScrollArea: 'HorizontalScroll_defaultScrollArea_8d',
                    },
                    mu = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        classNames: o,
                        scrollClassName: s,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const E = (0, a.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: T()(_u.base, e.base) });
                            }, [n]),
                            d = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return i().createElement(
                            'div',
                            { className: T()(_u.defaultScroll, t), onWheel: u.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: T()(_u.defaultScrollArea, r) },
                                i().createElement(Au, { className: s, api: d, classNames: o }, e),
                            ),
                            i().createElement(du, { getStepByRailClick: l, api: u, onDrag: c, classNames: E }),
                        );
                    },
                    Au = ({ api: e, className: u, classNames: t, children: n }) => (
                        (0, a.useEffect)(() => be(e.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: T()(_u.base, u) },
                            i().createElement(
                                'div',
                                {
                                    className: T()(_u.wrapper, null == t ? void 0 : t.wrapper),
                                    onWheel: e.handleMouseWheel,
                                    ref: e.wrapperRef,
                                },
                                i().createElement(
                                    'div',
                                    { className: T()(_u.content, null == t ? void 0 : t.content), ref: e.contentRef },
                                    n,
                                ),
                            ),
                        )
                    );
                (Au.Bar = du), (Au.Default = mu);
                const Fu = Qe({
                        getBounds: (e) => [0, e.scrollHeight - e.offsetHeight],
                        getContainerSize: (e) => e.scrollHeight,
                        getWrapperSize: (e) => e.offsetHeight,
                        setScrollPosition: (e, u) => {
                            e.scrollTop = u.value.scrollPosition;
                        },
                        getDirection: (e) => (e.deltaY > 1 ? Ke.Next : Ke.Prev),
                    }),
                    gu = 'VerticalBar_base_f3',
                    Du = 'VerticalBar_base__nonActive_42',
                    Bu = 'VerticalBar_topButton_d7',
                    Cu = 'VerticalBar_bottomButton_06',
                    hu = 'VerticalBar_track_df',
                    pu = 'VerticalBar_thumb_32',
                    fu = 'VerticalBar_rail_43',
                    vu = 'disable',
                    wu = () => {},
                    bu = { pending: !1, offset: 0 },
                    Su = (e) => {
                        var u;
                        return 0.9 * (null != (u = e.getWrapperSize()) ? u : 0);
                    },
                    yu = (e, u) => {
                        e.contentRef.current && u(e.contentRef.current);
                    },
                    Tu = (e, u) => Math.max(20, e.offsetHeight * u),
                    xu = (0, a.memo)(({ api: e, classNames: u = {}, getStepByRailClick: t = Su, onDrag: n = wu }) => {
                        const r = (0, a.useRef)(null),
                            o = (0, a.useRef)(null),
                            s = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            c = (0, a.useRef)(null),
                            E = e.stepTimeout || 100,
                            d = (0, a.useState)(bu),
                            _ = d[0],
                            A = d[1],
                            F = (0, a.useCallback)(
                                (e) => {
                                    A(e),
                                        c.current && n({ type: e.pending ? 'dragStart' : 'dragEnd', thumb: c.current });
                                },
                                [n],
                            ),
                            g = $e(() => {
                                const u = c.current,
                                    t = l.current,
                                    n = e.getWrapperSize(),
                                    a = e.getContainerSize();
                                if (!(n && a && u && t)) return;
                                const i = Math.min(1, n / a);
                                return (
                                    (u.style.height = `${Tu(t, i)}px`),
                                    (u.style.display = 'flex'),
                                    r.current &&
                                        (1 === i ? r.current.classList.add(Du) : r.current.classList.remove(Du)),
                                    i
                                );
                            }),
                            D = $e(() => {
                                const u = l.current,
                                    t = c.current,
                                    n = e.getWrapperSize(),
                                    r = e.getContainerSize();
                                if (!(n && u && t && r)) return;
                                const a = e.animationScroll.scrollPosition.get(),
                                    i = Math.min(1, n / r),
                                    E = Ge(0, 1, a / (r - n)),
                                    d = (u.offsetHeight - Tu(u, i)) * E;
                                (t.style.transform = `translateY(${0 | d}px)`),
                                    ((e) => {
                                        if (o.current && s.current && l.current && c.current) {
                                            if (0 === Math.round(e))
                                                return o.current.classList.add(vu), void s.current.classList.remove(vu);
                                            if (
                                                ((u = l.current),
                                                (t = c.current),
                                                e - (u.offsetHeight - t.offsetHeight) >= -0.5)
                                            )
                                                return o.current.classList.remove(vu), void s.current.classList.add(vu);
                                            var u, t;
                                            o.current.classList.remove(vu), s.current.classList.remove(vu);
                                        }
                                    })(d);
                            }),
                            B = $e(() => {
                                yu(e, () => {
                                    g(), D();
                                });
                            });
                        (0, a.useEffect)(() => be(B)),
                            (0, a.useEffect)(() => {
                                const u = () => {
                                    yu(e, () => {
                                        D();
                                    });
                                };
                                let t = wu;
                                const n = () => {
                                    t(), (t = be(B));
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
                            }, [e]),
                            (0, a.useEffect)(() => {
                                if (!_.pending) return;
                                const u = m.O.client.events.mouse.up(() => {
                                        F(bu);
                                    }),
                                    t = m.O.client.events.mouse.move(([u]) => {
                                        yu(e, (t) => {
                                            const r = l.current,
                                                a = c.current,
                                                i = e.getContainerSize();
                                            if (!r || !a || !i) return;
                                            const o = u.screenY - _.offset - r.getBoundingClientRect().y,
                                                s = (o / r.offsetHeight) * i;
                                            e.scrollPosition.start({
                                                scrollPosition: e.clampPosition(t, s),
                                                reset: !0,
                                                immediate: !0,
                                                from: { scrollPosition: t.scrollTop },
                                            }),
                                                n({ type: 'dragging', thumb: a, thumbOffset: o, contentOffset: s });
                                        });
                                    });
                                return () => {
                                    u(), t();
                                };
                            }, [e, _.offset, _.pending, n, F]);
                        const C = Ve((u) => e.applyStepTo(u), E, [e]),
                            h = C[0],
                            p = C[1];
                        (0, a.useEffect)(
                            () => (
                                document.addEventListener('mouseup', p, !0),
                                () => document.removeEventListener('mouseup', p, !0)
                            ),
                            [p],
                        );
                        const f = (e) => {
                            e.target.classList.contains(vu) || x('highlight');
                        };
                        return i().createElement(
                            'div',
                            { className: T()(gu, u.base), ref: r, onWheel: e.handleMouseWheel },
                            i().createElement('div', {
                                className: T()(Bu, u.topButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(vu) || 0 !== e.button || (x('play'), h(Ke.Next));
                                },
                                ref: o,
                                onMouseEnter: f,
                            }),
                            i().createElement(
                                'div',
                                {
                                    className: T()(hu, u.track),
                                    onMouseDown: (u) => {
                                        const n = c.current;
                                        if (n && 0 === u.button)
                                            if ((x('play'), u.target === n))
                                                F({ pending: !0, offset: u.screenY - n.getBoundingClientRect().y });
                                            else {
                                                ((u) => {
                                                    c.current &&
                                                        yu(e, (n) => {
                                                            if (!n) return;
                                                            const r = t(e),
                                                                a = e.clampPosition(n, n.scrollTop + r * u);
                                                            e.applyScroll(a);
                                                        });
                                                })(u.screenY > n.getBoundingClientRect().y ? Ke.Prev : Ke.Next);
                                            }
                                    },
                                    ref: l,
                                    onMouseEnter: f,
                                },
                                i().createElement('div', { ref: c, className: T()(pu, u.thumb) }),
                                i().createElement('div', { className: T()(fu, u.rail) }),
                            ),
                            i().createElement('div', {
                                className: T()(Cu, u.bottomButton),
                                onMouseDown: (e) => {
                                    e.target.classList.contains(vu) || 0 !== e.button || (x('play'), h(Ke.Prev));
                                },
                                onMouseUp: p,
                                ref: s,
                                onMouseEnter: f,
                            }),
                        );
                    }),
                    Ru = {
                        content: 'VerticalScroll_content_cb',
                        defaultScroll: 'VerticalScroll_defaultScroll_f8',
                        bar: 'VerticalScroll_bar_1e',
                        area: 'VerticalScroll_area_af',
                    },
                    ku = ({
                        children: e,
                        api: u,
                        className: t,
                        barClassNames: n,
                        areaClassName: r,
                        scrollClassName: o,
                        scrollClassNames: s,
                        getStepByRailClick: l,
                        onDrag: c,
                    }) => {
                        const E = (0, a.useMemo)(() => {
                                const e = n || {};
                                return Object.assign({}, e, { base: T()(Ru.base, e.base) });
                            }, [n]),
                            d = (0, a.useMemo)(() => Object.assign({}, u, { handleMouseWheel: () => {} }), [u]);
                        return i().createElement(
                            'div',
                            { className: T()(Ru.defaultScroll, t), onWheel: u.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: T()(Ru.area, r) },
                                i().createElement(Mu, { className: o, classNames: s, api: d }, e),
                            ),
                            i().createElement(xu, { getStepByRailClick: l, api: u, onDrag: c, classNames: E }),
                        );
                    },
                    Mu = ({ className: e, classNames: u, children: t, api: n }) => (
                        (0, a.useEffect)(() => be(n.recalculateContent)),
                        i().createElement(
                            'div',
                            { className: T()(Ru.base, e), ref: n.wrapperRef, onWheel: n.handleMouseWheel },
                            i().createElement(
                                'div',
                                { className: T()(Ru.content, null == u ? void 0 : u.content), ref: n.contentRef },
                                t,
                            ),
                        )
                    );
                Mu.Default = ku;
                const Lu = { Vertical: r, Horizontal: n },
                    Pu = ['children', 'body', 'header', 'note', 'alert', 'args'];
                function Ou() {
                    return (
                        (Ou =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        Ou.apply(this, arguments)
                    );
                }
                const Nu = R.views.common.tooltip_window.simple_tooltip_content,
                    Hu = (e) => {
                        let u = e.children,
                            t = e.body,
                            n = e.header,
                            r = e.note,
                            o = e.alert,
                            s = e.args,
                            l = (function (e, u) {
                                if (null == e) return {};
                                var t,
                                    n,
                                    r = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) (t = a[n]), u.indexOf(t) >= 0 || (r[t] = e[t]);
                                return r;
                            })(e, Pu);
                        const c = (0, a.useMemo)(() => {
                            const e = Object.assign({}, s, { body: t, header: n, note: r, alert: o });
                            for (const u in e) void 0 === e[u] && delete e[u];
                            return e;
                        }, [o, t, n, r, s]);
                        return i().createElement(
                            pe,
                            Ou(
                                {
                                    contentId:
                                        ((E = null == s ? void 0 : s.hasHtmlContent),
                                        E ? Nu.SimpleTooltipHtmlContent('resId') : Nu.SimpleTooltipContent('resId')),
                                    decoratorId: R.views.common.tooltip_window.tooltip_window.TooltipWindow('resId'),
                                    args: c,
                                },
                                l,
                            ),
                            u,
                        );
                        var E;
                    },
                    Iu = 'state_normal',
                    Wu = 'state_limited',
                    Uu = 'state_received',
                    Gu = 'Reward_base_ae',
                    zu = 'Reward_base__selected_e6',
                    $u = 'Reward_base__stateNormal_8c',
                    Vu = 'Reward_optDeviceType_87',
                    ju = 'Reward_reward_63',
                    qu = 'Reward_image_b3',
                    Yu = 'Reward_base__stateReceived_45',
                    Xu = 'Reward_base__stateLimited_d7',
                    Ku = 'Reward_base__accepting_72',
                    Zu = 'Reward_disabled_34',
                    Qu = 'Reward_packSize_26',
                    Ju = 'Reward_label_1e',
                    et = 'Reward_storage_06',
                    ut = 'Reward_storage__hidden_de',
                    tt = 'Reward_storageIcon_53',
                    nt = 'Reward_countText_cc',
                    rt = 'Reward_select_8f',
                    at = 'Reward_state_8e',
                    it = 'Reward_stateText_a8',
                    ot = 'Reward_stateIcon_9b',
                    st = 'Reward_glow_81',
                    lt = {
                        base: 'SelectButton_base_fd',
                        base__plus: 'SelectButton_base__plus_d3',
                        base__disabled: 'SelectButton_base__disabled_86',
                        base__minus: 'SelectButton_base__minus_0b',
                    };
                let ct;
                !(function (e) {
                    (e.Plus = 'plus'), (e.Minus = 'minus');
                })(ct || (ct = {}));
                const Et = ({ type: e = ct.Plus, isEnabled: u = !0, onClick: t }) => {
                    const n = (0, a.useCallback)(
                            (e) => {
                                e.stopPropagation(), u && t(e);
                            },
                            [u, t],
                        ),
                        r = T()(lt.base, lt[`base__${e}`], !u && lt.base__disabled);
                    return i().createElement('div', { className: r, onClick: n });
                };
                var dt;
                !(function (e) {
                    (e.None = ''), (e.Trophy = 'trophy'), (e.Deluxe = 'delux');
                })(dt || (dt = {}));
                const _t = R.strings.selectable_reward.reward;
                const mt = ({ type: e, count: u, state: t, storageCount: n, packSize: r, onAdd: o, onReduce: s }) => {
                        const l = (0, a.useContext)(Xt),
                            d = u > 0 && t !== Uu,
                            _ = l === Yt.Accepting && d,
                            m = (function (e) {
                                return e.startsWith(dt.Trophy)
                                    ? dt.Trophy
                                    : e.startsWith(dt.Deluxe)
                                      ? dt.Deluxe
                                      : dt.None;
                            })(e),
                            A = (0, a.useCallback)(() => {
                                t === Iu ? (x('bp_click'), o(e)) : t === Wu && x('bp_click_limit');
                            }, [o, t, e]),
                            F = (0, a.useCallback)(() => {
                                t === Iu && (x('bp_click_plus'), o(e));
                            }, [t, e, o]),
                            g = (0, a.useCallback)(() => {
                                x('bp_click_minus'), s(e);
                            }, [e, s]),
                            D = (0, a.useCallback)(() => {
                                x('bp_highlight');
                            }, []),
                            B = (0, a.useMemo)(
                                () => ({
                                    backgroundImage: `url(R.images.gui.maps.icons.selectableReward.reward.${m})`,
                                }),
                                [m],
                            ),
                            C = (0, a.useMemo)(() => ({ backgroundImage: `url(${ye(e)})` }), [e]),
                            h = (0, a.useMemo)(() => ({ maskImage: `url(${ye(e)})` }), [e]),
                            p = (0, a.useMemo)(
                                () =>
                                    t === Wu && 0 === u
                                        ? {
                                              header: _t.tooltip.state_limited.header(),
                                              body: _t.tooltip.state_limited.body(),
                                          }
                                        : { isEnabled: !1 },
                                [u, t],
                            ),
                            f = (0, a.useMemo)(() => ({ type: e }), [e]),
                            v = T()(Gu, d && zu, _ && Ku, t === Iu && $u, t === Uu && Yu, t === Wu && Xu),
                            w = T()(et, n <= 0 && ut);
                        return i().createElement(
                            'div',
                            { className: v, onClick: A, onMouseEnter: D },
                            i().createElement('div', { className: w }, i().createElement('div', { className: tt }), n),
                            m !== dt.None && i().createElement('div', { className: Vu, style: B }),
                            i().createElement(
                                'div',
                                { className: ju },
                                i().createElement(
                                    we,
                                    { args: f },
                                    i().createElement('div', { className: qu, style: C }),
                                ),
                                !d && t !== Iu && i().createElement('div', { className: Zu, style: h }),
                                r > 1 &&
                                    i().createElement('div', { className: Qu }, c(_t.packSizeCount(), { packSize: r })),
                            ),
                            i().createElement(
                                'div',
                                { className: Ju },
                                ((e) => {
                                    var u;
                                    const t = e.split('_')[1],
                                        n = t && R.strings.blueprints.nations.$dyn(t),
                                        r = null == (u = R.strings.artefacts.$dyn(e)) ? void 0 : u.$dyn('name');
                                    return n || (r ? E(r) : void console.error('title for reward is not provided'));
                                })(e),
                            ),
                            d || t === Iu
                                ? i().createElement(
                                      i().Fragment,
                                      null,
                                      i().createElement('span', { className: nt }, u),
                                      i().createElement(
                                          'div',
                                          { className: rt },
                                          i().createElement(Et, { type: ct.Minus, isEnabled: d, onClick: g }),
                                          i().createElement(Et, { type: ct.Plus, isEnabled: t === Iu, onClick: F }),
                                      ),
                                  )
                                : i().createElement(
                                      Hu,
                                      p,
                                      i().createElement(
                                          'div',
                                          { className: at },
                                          i().createElement('div', { className: it }, _t.$dyn(t)),
                                          i().createElement('div', { className: ot }),
                                      ),
                                  ),
                            i().createElement('div', { className: st }),
                        );
                    },
                    At = 'ContentGrid_base_f7',
                    Ft = 'ContentGrid_scrollArea_98',
                    gt = 'ContentGrid_scrollAreaInner_32',
                    Dt = 'ContentGrid_reward_4b',
                    Bt = 'ContentGrid_lip_7e',
                    Ct = 'ContentGrid_lip__top_2c',
                    ht = 'ContentGrid_lip__bottom_70';
                function pt() {
                    return (
                        (pt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        pt.apply(this, arguments)
                    );
                }
                const ft = () => {
                        const e = (0, a.useContext)(Ee),
                            u = v(e),
                            t = u.onRewardAdd,
                            n = u.onRewardReduce,
                            r = v(`${e}.rewards`),
                            o = Fu(),
                            s = (0, a.useState)('default'),
                            l = s[0],
                            c = s[1],
                            E = (0, a.useCallback)(
                                (e) => {
                                    t({ type: e });
                                },
                                [t],
                            ),
                            d = (0, a.useCallback)(
                                (e) => {
                                    n({ type: e });
                                },
                                [n],
                            ),
                            _ = $e(() => {
                                (() => {
                                    const e = o.getBounds(),
                                        u = e[0],
                                        t = e[1],
                                        n = o.animationScroll.scrollPosition.get(),
                                        r = o.getContainerSize(),
                                        a = o.getWrapperSize();
                                    if (r && a)
                                        if (r !== a)
                                            switch (n) {
                                                case u:
                                                    c('start');
                                                    break;
                                                case t:
                                                    c('end');
                                                    break;
                                                default:
                                                    c('default');
                                            }
                                        else c('hidden');
                                })();
                            });
                        return (
                            (0, a.useEffect)(
                                () => (
                                    o.events.on('change', _),
                                    o.events.on('recalculateContent', _),
                                    () => {
                                        o.events.off('change', _), o.events.off('recalculateContent', _);
                                    }
                                ),
                                [o.events, _],
                            ),
                            i().createElement(
                                'div',
                                { className: At },
                                i().createElement(
                                    Lu.Vertical.Area.Default,
                                    { api: o, key: 'area', className: Ft },
                                    i().createElement(
                                        'div',
                                        { className: gt },
                                        r.map(({ value: e }, u) =>
                                            i().createElement(
                                                'div',
                                                { key: u, className: Dt },
                                                i().createElement(mt, pt({}, e, { key: u, onAdd: E, onReduce: d })),
                                            ),
                                        ),
                                    ),
                                ),
                                'hidden' !== l && 'start' !== l && i().createElement('div', { className: T()(Bt, Ct) }),
                                'hidden' !== l && 'end' !== l && i().createElement('div', { className: T()(Bt, ht) }),
                            )
                        );
                    },
                    vt = {
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
                let wt, bt;
                !(function (e) {
                    (e.main = 'main'),
                        (e.primary = 'primary'),
                        (e.primaryGreen = 'primaryGreen'),
                        (e.primaryRed = 'primaryRed'),
                        (e.secondary = 'secondary'),
                        (e.ghost = 'ghost');
                })(wt || (wt = {})),
                    (function (e) {
                        (e.extraSmall = 'extraSmall'), (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large');
                    })(bt || (bt = {}));
                const St = ({
                    children: e,
                    size: u,
                    isFocused: t,
                    type: n,
                    disabled: r,
                    mixClass: o,
                    soundHover: s,
                    soundClick: l,
                    onMouseEnter: c,
                    onMouseMove: E,
                    onMouseDown: d,
                    onMouseUp: _,
                    onMouseLeave: m,
                    onClick: A,
                }) => {
                    const F = (0, a.useRef)(null),
                        g = (0, a.useState)(t),
                        D = g[0],
                        B = g[1],
                        C = (0, a.useState)(!1),
                        h = C[0],
                        p = C[1];
                    return (
                        (0, a.useEffect)(() => {
                            function e(e) {
                                D && null !== F.current && !F.current.contains(e.target) && B(!1);
                            }
                            return (
                                document.addEventListener('mousedown', e),
                                () => {
                                    document.removeEventListener('mousedown', e);
                                }
                            );
                        }, [D]),
                        (0, a.useEffect)(() => {
                            B(t);
                        }, [t]),
                        i().createElement(
                            'div',
                            {
                                ref: F,
                                className: T()(
                                    vt.base,
                                    vt[`base__${n}`],
                                    r && vt.base__disabled,
                                    u && vt[`base__${u}`],
                                    D && vt.base__focus,
                                    h && vt.base__highlightActive,
                                    o,
                                ),
                                onMouseEnter: function (e) {
                                    r || (null !== s && x(s), c && c(e));
                                },
                                onMouseMove: function (e) {
                                    E && E(e);
                                },
                                onMouseUp: function (e) {
                                    r || (_ && _(e), p(!1));
                                },
                                onMouseDown: function (e) {
                                    r ||
                                        (null !== l && x(l),
                                        d && d(e),
                                        t && (r || (F.current && (F.current.focus(), B(!0)))),
                                        p(!0));
                                },
                                onMouseLeave: function (e) {
                                    r || (m && m(e), p(!1));
                                },
                                onClick: function (e) {
                                    r || (A && A(e));
                                },
                            },
                            n !== wt.ghost &&
                                i().createElement(
                                    i().Fragment,
                                    null,
                                    i().createElement('div', { className: vt.back }),
                                    i().createElement('span', { className: vt.texture }),
                                ),
                            i().createElement(
                                'span',
                                { className: T()(vt.state, vt.state__default) },
                                i().createElement('span', { className: vt.stateDisabled }),
                                i().createElement('span', { className: vt.stateHighlightHover }),
                                i().createElement('span', { className: vt.stateHighlightActive }),
                            ),
                            i().createElement(
                                'span',
                                { className: vt.content, lang: R.strings.settings.LANGUAGE_CODE() },
                                e,
                            ),
                        )
                    );
                };
                St.defaultProps = { type: wt.primary, isFocused: !1, soundHover: 'highlight', soundClick: 'play' };
                const yt = St,
                    Tt = 'Footer_base_2b',
                    xt = 'Footer_description_9a',
                    Rt = 'Footer_selectRewards_f9',
                    kt = 'Footer_rewardsSelected_19',
                    Mt = 'Footer_rewardsSelectedCount_5b',
                    Lt = 'Footer_rewardsSelectedIcon_59',
                    Pt = 'Footer_buttons_12',
                    Ot = 'Footer_cButton_f7',
                    Nt = ({
                        rewardsToClaimTotal: e,
                        tabsTotal: u,
                        rewardsSelectedCount: t,
                        onOkClick: n,
                        onCloseClick: r,
                    }) => {
                        const a = t > 0,
                            o = J().mediaSize > K.Small ? bt.medium : bt.small;
                        return i().createElement(
                            'div',
                            { className: Tt },
                            i().createElement(
                                'div',
                                { className: xt },
                                a
                                    ? i().createElement(
                                          'div',
                                          { className: kt },
                                          R.strings.selectable_reward.footer.rewardsSelected(),
                                          i().createElement('span', { className: Mt }, t),
                                          i().createElement(
                                              pe,
                                              {
                                                  contentId:
                                                      R.views.lobby.common.tooltips.SelectedRewardsTooltipView('resId'),
                                              },
                                              i().createElement('div', { className: Lt }),
                                          ),
                                      )
                                    : i().createElement(
                                          'div',
                                          { className: Rt },
                                          1 === u
                                              ? R.strings.selectable_reward.footer.singleCategory.selectRewards(e)
                                              : R.strings.selectable_reward.footer.multipleCategories.selectRewards(e),
                                      ),
                            ),
                            i().createElement(
                                'div',
                                { className: Pt },
                                i().createElement(
                                    yt,
                                    { size: o, type: wt.primary, disabled: !a, mixClass: Ot, onClick: n },
                                    R.strings.selectable_reward.footer.okBtn.label(),
                                ),
                                i().createElement(
                                    yt,
                                    { size: o, type: wt.secondary, mixClass: Ot, onClick: r },
                                    R.strings.selectable_reward.footer.closeBtn.label(),
                                ),
                            ),
                        );
                    },
                    Ht = 'Content_base_32',
                    It = 'Content_base__accepting_82',
                    Wt = 'Content_heading_33',
                    Ut = 'Content_title_b6',
                    Gt = 'Content_subTitle_77',
                    zt = 'Content_wrapper_f2',
                    $t = 'Content_categories_36',
                    Vt = 'Content_footer_6a',
                    jt = 'Content_base__windowed_c5';
                function qt() {
                    return (
                        (qt =
                            Object.assign ||
                            function (e) {
                                for (var u = 1; u < arguments.length; u++) {
                                    var t = arguments[u];
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                }
                                return e;
                            }),
                        qt.apply(this, arguments)
                    );
                }
                let Yt;
                !(function (e) {
                    (e[(e.None = 0)] = 'None'), (e[(e.Accepting = 1)] = 'Accepting');
                })(Yt || (Yt = {}));
                const Xt = (0, a.createContext)(Yt.None),
                    Kt = ({ title: e, subTitle: u, isLargeWindowed: t }) => {
                        const n = (0, a.useState)(Yt.None),
                            r = n[0],
                            o = n[1],
                            s = (0, a.useContext)(Ee),
                            l = v(s),
                            c = l.tabs,
                            E = l.selectedTab,
                            d = l.totalRewardCount,
                            _ = l.onOkClick,
                            m = l.onCloseClick,
                            A = l.onTabClick;
                        (0, a.useEffect)(() => {
                            if (r === Yt.Accepting)
                                return ((e, u) => {
                                    let t;
                                    const n = setTimeout(() => {
                                        t = e();
                                    }, u);
                                    return () => {
                                        'function' == typeof t && t(), clearTimeout(n);
                                    };
                                })(_, 600);
                        });
                        const F = (0, a.useCallback)(() => {
                                o(Yt.Accepting);
                            }, []),
                            g = (0, a.useCallback)(() => {
                                m();
                            }, [m]),
                            D = (0, a.useCallback)(
                                (e) => {
                                    A({ type: e });
                                },
                                [A],
                            ),
                            B = ce(c, (e, u) => e + u.limit, 0),
                            C = T()(Ht, r === Yt.Accepting && It, t && jt);
                        return i().createElement(
                            Xt.Provider,
                            { value: r },
                            i().createElement(
                                'div',
                                { className: C },
                                i().createElement(
                                    'div',
                                    { className: Wt },
                                    i().createElement('div', { className: Ut }, e),
                                    i().createElement('div', { className: Gt }, u),
                                ),
                                i().createElement(
                                    'div',
                                    { className: zt },
                                    i().createElement(
                                        'div',
                                        { className: $t },
                                        c.map(({ value: e }, u) =>
                                            i().createElement(
                                                Ue,
                                                qt({}, e, { key: u, isSelected: E === e.type, onClick: D }),
                                            ),
                                        ),
                                    ),
                                    i().createElement(ft, null),
                                ),
                                i().createElement(
                                    'div',
                                    { className: Vt },
                                    i().createElement(Nt, {
                                        rewardsToClaimTotal: B,
                                        tabsTotal: c.length,
                                        rewardsSelectedCount: d,
                                        onOkClick: F,
                                        onCloseClick: g,
                                    }),
                                ),
                            ),
                        );
                    },
                    Zt = 'Error_base_bc',
                    Qt = 'Error_image_a5',
                    Jt = 'Error_title_0e',
                    en = 'Error_description_f4',
                    un = 'Error_footer_63',
                    tn = 'Error_button_81',
                    nn = R.strings.selectable_reward.error,
                    rn = () => {
                        const e = (0, a.useContext)(Ee),
                            u = v(e).onCloseClick,
                            t = (0, a.useCallback)(() => {
                                u();
                            }, [u]);
                        return i().createElement(
                            'div',
                            { className: Zt },
                            i().createElement('div', { className: Qt }),
                            i().createElement('div', { className: Jt }, nn.title()),
                            i().createElement('div', { className: en }, nn.description()),
                            i().createElement(
                                'div',
                                { className: un },
                                i().createElement(
                                    yt,
                                    { mixClass: tn, type: wt.primary, size: bt.medium, onClick: t },
                                    nn.button(),
                                ),
                            ),
                        );
                    },
                    an = 'SelectableRewardBase_base_68';
                let on;
                !(function (e) {
                    (e.Normal = 'normal'), (e.Error = 'error');
                })(on || (on = {}));
                const sn = ({ modelPath: e = 'model', title: u, subTitle: t }) => {
                        const n = v(e).tabs.length ? on.Normal : on.Error,
                            r = (() => {
                                const e = m.O.view.getSize('rem'),
                                    u = (0, a.useState)({ height: e.height, width: e.width }),
                                    t = u[0],
                                    n = u[1],
                                    r = (0, a.useCallback)((e, u) => {
                                        const t = m.O.view.pxToRem(e),
                                            r = m.O.view.pxToRem(u);
                                        n({ width: t, height: r });
                                    }, []);
                                return (
                                    (0, a.useEffect)(
                                        () => (
                                            engine.on('clientResized', r),
                                            () => {
                                                engine.off('clientResized', r);
                                            }
                                        ),
                                        [r],
                                    ),
                                    t
                                );
                            })(),
                            o = r.width,
                            s = r.height,
                            l = s >= 1017 && s < O.large.height && o === O.large.width,
                            c = T()(an, l && H().LARGE);
                        return i().createElement(
                            Ee.Provider,
                            { value: e },
                            i().createElement(
                                oe,
                                { className: c },
                                n === on.Normal && i().createElement(Kt, { title: u, subTitle: t, isLargeWindowed: l }),
                                n === on.Error && i().createElement(rn, null),
                            ),
                        );
                    },
                    ln = 'App_base_8d',
                    cn = 'App_fill_a2',
                    En = 'App_close_8a',
                    dn = 'model.selectableRewardModel',
                    _n = () => {
                        const e = v(dn).onCloseClick,
                            u = v().rewardType,
                            t = c(R.strings.ranked_battles.selectableReward.title(), {
                                rewardName: systemLocale.toUpperCase(
                                    R.strings.ranked_battles.yearRewards.box.$dyn(u).title(),
                                ),
                            }),
                            n = (0, a.useCallback)(() => {
                                e();
                            }, [e]);
                        return (
                            S(w.n.ESCAPE, n),
                            i().createElement(
                                'div',
                                { className: ln },
                                i().createElement('div', { className: cn }),
                                i().createElement(sn, {
                                    modelPath: dn,
                                    title: t,
                                    subTitle: R.strings.ranked_battles.selectableReward.subTitle(),
                                }),
                                i().createElement(
                                    'div',
                                    { className: En },
                                    i().createElement(P, {
                                        caption: R.strings.menu.viewHeader.closeBtn.label(),
                                        type: 'close',
                                        side: 'right',
                                        onClick: n,
                                    }),
                                ),
                            )
                        );
                    };
                engine.whenReady.then(() => {
                    s().render(i().createElement(_n, null), document.getElementById('root'));
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
                for (s = 0; s < deferred.length; s++) {
                    for (var [u, t, n] = deferred[s], a = !0, i = 0; i < u.length; i++)
                        (!1 & n || r >= n) &&
                        Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](u[i]))
                            ? u.splice(i--, 1)
                            : ((a = !1), n < r && (r = n));
                    if (a) {
                        deferred.splice(s--, 1);
                        var o = t();
                        void 0 !== o && (e = o);
                    }
                }
                return e;
            }
            n = n || 0;
            for (var s = deferred.length; s > 0 && deferred[s - 1][2] > n; s--) deferred[s] = deferred[s - 1];
            deferred[s] = [u, t, n];
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
        (__webpack_require__.j = 44),
        (() => {
            var e = { 44: 0 };
            __webpack_require__.O.j = (u) => 0 === e[u];
            var u = (u, t) => {
                    var n,
                        r,
                        [a, i, o] = t,
                        s = 0;
                    if (a.some((u) => 0 !== e[u])) {
                        for (n in i) __webpack_require__.o(i, n) && (__webpack_require__.m[n] = i[n]);
                        if (o) var l = o(__webpack_require__);
                    }
                    for (u && u(t); s < a.length; s++)
                        (r = a[s]), __webpack_require__.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                    return __webpack_require__.O(l);
                },
                t = (self.webpackChunkgameface = self.webpackChunkgameface || []);
            t.forEach(u.bind(null, 0)), (t.push = u.bind(null, t.push.bind(t)));
        })();
    var __webpack_exports__ = __webpack_require__.O(void 0, [976], () => __webpack_require__(64));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();
